import symbols from "../data/symbols.json";

/**
 * Turns a TeX string into something a speech synthesizer can say.
 * Structure (fractions, powers, roots, accents, sub/superscripts) is handled here; the names of
 * individual symbols come from data/symbols.json, the same list the symbols glossary uses.
 */
/** Capital Greek letters: always said "capital omega", so Ω and ω never sound the same. */
const GREEK_CAPITALS = new Set(["Gamma", "Delta", "Theta", "Lambda", "Xi", "Pi", "Sigma", "Upsilon", "Phi", "Psi", "Omega"]);
const capitalGreek = (name: string, said: string) =>
  GREEK_CAPITALS.has(name) && !/^capital\b/.test(said) ? `capital ${said}` : said;

const SPOKEN: Record<string, string> = {};
/** Spoken names of symbols with a subscript, primes or an accent of their own, from the registry: "H_0" → "H nought". */
const FORM_SPOKEN: Record<string, string> = {};
for (const s of symbols as { tex?: string[]; forms?: string[]; spoken: string }[]) {
  for (const t of s.tex ?? []) SPOKEN[t.slice(1)] = capitalGreek(t.slice(1), s.spoken);
  for (const f of s.forms ?? []) if (/[_']|^\\(?:hat|dot|ddot)\b/.test(f)) FORM_SPOKEN[f] = s.spoken;
}
// Not symbols in the glossary, but still worth saying.
const EXTRA: Record<string, string> = {
  Sigma: "capital sigma", Theta: "capital theta", Phi: "capital phi", Psi: "capital psi", Pi: "capital pi", Xi: "capital xi",
  eta: "eta", upsilon: "upsilon", iota: "iota",
  exp: "exp", ldots: "and so on", cdots: "and so on", dots: "and so on", vdots: "and so on", ddots: "and so on down the diagonal",
  mapsto: "maps to", iff: "if and only if", mid: "given", otimes: "tensor", coth: "coth", uparrow: "up", downarrow: "down", implies: "implies", min: "the minimum of", max: "the maximum of", dim: "the dimension of",
};

/**
 * Dirac's bras and kets, said before anything else: ⟨ is otherwise "the average of" (⟨A⟩) and | a bar.
 *   ⟨u|T|v⟩ → "the matrix element of T between u and v"   ⟨u|v⟩ → "the inner product of u and v"
 *   |ψ⟩ → "ket psi"   ⟨ψ| → "bra psi"
 * The words go into \text{} so later rules leave them alone; the labels are converted as usual.
 */
const BAR = String.raw`(?:\||\\vert|\\mid)`;
// One piece of a bra or ket label: a character, a whole command (never split: "\left" must not also be tried as
// "\lef" + "t", which made long formulas with many bars take seconds), a space command or a braced group.
const PART = String.raw`((?:[^|{}\\]|\\(?!langle|rangle|vert|mid)[A-Za-z]+(?![A-Za-z])|\\[,;: !]|\{[^{}]*\})*?)`;
const MATRIX_ELEMENT = new RegExp(String.raw`\\langle\s*${PART}\s*${BAR}\s*${PART}\s*${BAR}\s*${PART}\s*\\rangle`, "g");
const INNER_PRODUCT = new RegExp(String.raw`\\langle\s*${PART}\s*${BAR}\s*${PART}\s*\\rangle`, "g");
const KET = new RegExp(String.raw`${BAR}\s*${PART}\s*\\rangle`, "g");
const BRA = new RegExp(String.raw`\\langle\s*${PART}\s*${BAR}`, "g");
function braKets(tex: string): string {
  const w = (s: string) => ` \\text{ ${s} } `;
  const out = tex
    // Letter styles and operators with a subscript, also before the symbol names are put in (E_0 in \mathcal E_0)
    .replace(/\\mathcal\s*\{?([A-Za-z])\}?/g, (_, l) => `${w("script")} ${l}`)
    .replace(/\\(min|max)\s*_(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)/g, (_, op, v) => `${w(`the ${op === "min" ? "minimum" : "maximum"} over`)} ${v.replace(/^\{|\}$/g, "")} ${w("of")}`)
    .replace(/\^\s*(?:\{\\dagger\}|\\dagger(?![A-Za-z]))/g, w("dagger"))
    .replace(/\\binom\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (_, n, k) => ` ${n} ${w("choose")} ${k} `);
  // Only formulas with an angle bracket can hold a bra or a ket.
  if (!out.includes("\\langle") && !out.includes("\\rangle")) return out;
  return out
    .replace(MATRIX_ELEMENT, (_, a, t, b) => `${w("the matrix element of")} ${t} ${w("between")} ${a} ${w("and")} ${b} `)
    .replace(INNER_PRODUCT, (_, a, b) => `${w("the inner product of")} ${a} ${w("and")} ${b} `)
    .replace(KET, (_, a) => `${w("ket")} ${a} `)
    .replace(BRA, (_, a) => `${w("bra")} ${a} `);
}

export type SpeechOptions = {
  /** Called for a TeX command with no spoken name (content:check reports these) */
  unknown?: (command: string) => void;
  /**
   * Capital Latin letters to say as "capital R": those whose small form is used on the same page (pageCapitals), so
   * "r = R" is not heard as "r equals r".
   */
  capitals?: Iterable<string>;
  /**
   * Text for the speech engine itself, not for the eye: a symbol letter that follows a number and is also a unit
   * abbreviation is spelled as it sounds ("m sub 1 em sub 2"), or engines read "1 m" as "1 metre".
   */
  engine?: boolean;
};

/** Unit abbreviations, written out in words when they are units (inside \text{…}). */
const UNIT_WORDS: Record<string, string> = {
  m: "metres", cm: "centimetres", mm: "millimetres", km: "kilometres", nm: "nanometres", "μm": "micrometres",
  s: "seconds", ms: "milliseconds", min: "minutes", h: "hours", hr: "hours", d: "days", yr: "years", yrs: "years",
  Myr: "million years", Gyr: "billion years", kyr: "thousand years", g: "grams", kg: "kilograms", K: "kelvin",
  N: "newtons", J: "joules", W: "watts", Pa: "pascals", Hz: "hertz", kHz: "kilohertz", MHz: "megahertz", GHz: "gigahertz",
  pc: "parsecs", kpc: "kiloparsecs", Mpc: "megaparsecs", Gpc: "gigaparsecs", ly: "light-years", AU: "astronomical units",
  au: "astronomical units", eV: "electronvolts", keV: "kilo-electronvolts", MeV: "mega-electronvolts",
  GeV: "giga-electronvolts", TeV: "tera-electronvolts", erg: "ergs", ergs: "ergs", sr: "steradians", rad: "radians",
  mol: "moles", A: "amperes", V: "volts", C: "coulombs", T: "teslas", "Å": "ångström", L: "litres", cal: "calories",
  // Added for the High School; only inside \text{…}, so not in UNIT_AFTER_NUMBER (TEXT_ONLY_UNITS).
  F: "farads", "Ω": "ohms", S: "siemens", Wb: "webers", Wh: "watt-hours", Gy: "grays", Sv: "sieverts", Bq: "becquerels",
  dB: "decibels", u: "atomic mass units", year: "years", years: "years", "light-year": "light-years",
  "light-years": "light-years",
};
const TEXT_ONLY_UNITS = new Set(["F", "Ω", "S", "Wb", "Wh", "Gy", "Sv", "Bq", "dB", "u", "year", "years", "light-year", "light-years"]);
/** SI units that also appear with a prefix (kV, mSv, nC, μF, fm): said as prefix + unit ("millisieverts"). */
const PREFIXED = new Set(["m", "g", "s", "N", "J", "W", "Wh", "Pa", "Hz", "V", "A", "C", "F", "T", "Wb", "Ω", "S", "Gy", "Sv", "Bq", "L"]);
const PREFIXES: Record<string, string> = {
  T: "tera", G: "giga", M: "mega", k: "kilo", c: "centi", m: "milli", "μ": "micro", n: "nano", p: "pico", f: "femto",
};
/** The words for one unit abbreviation, or undefined when it is not one. */
function unitWord(t: string): string | undefined {
  if (Object.hasOwn(UNIT_WORDS, t)) return UNIT_WORDS[t];
  const base = t.slice(1);
  if (Object.hasOwn(PREFIXES, t[0]) && PREFIXED.has(base)) return PREFIXES[t[0]] + UNIT_WORDS[base];
  return undefined;
}
/** Unit words that stay the same in the singular (1 hertz, 1 siemens, 1 million years). */
const SAME_IN_SINGULAR = /(?:hertz|siemens|kelvin|ångström|million years|billion years|thousand years)$/;
const singular = (words: string) => (SAME_IN_SINGULAR.test(words) ? words : words.replace(/s$/, ""));
/**
 * The contents of \text{…} in words when every part is a unit ("km/s" → "kilometres per second"), else null.
 * `before` is the TeX before it: after exactly 1 the unit is singular ("1 farad"), and in a product every unit but
 * the last always is ("newton metres"); a unit after "per" is singular too. `product` = another unit follows
 * (\text{Ω}\,\text{m} "ohm metres"). Never in an exponent or index (h^{\text{TT}}, x_\text{s} are labels).
 */
function unitText(text: string, before: string, product = false): string | null {
  if (/[_^]\s*\{?\s*$/.test(before)) return null;
  const tokens = text.trim().split(/(\s+|\/|·|\\,|\\;)/).filter((t) => t.trim() !== "" && !/^(·|\\,|\\;)$/.test(t));
  if (!tokens.some((t) => t !== "/") || !tokens.every((t) => t === "/" || unitWord(t) !== undefined)) return null;
  const one = /(?:^|[^\w.\\])1\s*(?:(?:\\[ ,;:!]|~)\s*)*$/.test(before);
  const slash = tokens.indexOf("/");
  const top = slash < 0 ? tokens.length : slash;
  return tokens
    .map((t, k) => {
      if (t === "/") return "per";
      const w = unitWord(t)!;
      if (slash >= 0 && k > slash) return tokens[k - 1] === "/" ? singular(w) : w;
      return k < top - 1 || one || (product && slash < 0) ? singular(w) : w;
    })
    .join(" ");
}
/** Letters that engines read as units after a number, and how to say them as letters instead. */
const LETTER_SOUNDS: Record<string, string> = {
  m: "em", s: "ess", g: "gee", K: "kay", N: "en", J: "jay", W: "double-u", A: "ay", V: "vee", C: "see", T: "tee",
  H: "aitch", F: "eff", L: "el", l: "el", h: "aitch", d: "dee",
};
/** A number followed by something an engine would read as a unit (content:check: symbolReadAsUnit). */
export const UNIT_AFTER_NUMBER = new RegExp(
  String.raw`(?:^|\s)\d+(?:\.\d+)?\s+(?:${[...new Set([...Object.keys(UNIT_WORDS).filter((u) => !TEXT_ONLY_UNITS.has(u)), ...Object.keys(LETTER_SOUNDS)])]
    .map((u) => u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})(?=\s|[,;.]|$)`
);

/**
 * Capital letters said as "capital R" on a page: those whose small letter the page also uses (as a symbol on its
 * own, with a subscript, a prime or an accent). Takes all the TeX on the page.
 */
export function pageCapitals(texs: Iterable<string>): string[] {
  const bases = new Set<string>();
  for (const tex of texs) {
    // Letters outside text and commands: a base letter is what precedes _ ' or stands alone.
    const plain = tex.replace(/\\(?:text|mathrm|textrm|mbox|operatorname)\s*\{[^{}]*\}/g, " ").replace(/\\[A-Za-z]+/g, " ");
    for (const m of plain.matchAll(/[A-Za-z]/g)) bases.add(m[0]);
  }
  return [...bases].filter((c) => /[A-Z]/.test(c) && bases.has(c.toLowerCase())).sort();
}

/** "R sub s" → "capital R sub s" when R is one of the page's capitals; capital Greek always ("capital omega m"). */
function capitalise(base: string, words: string, capitals: Set<string>): string {
  if (/^[A-Z]$/.test(base) && capitals.has(base) && (words === base || words.startsWith(base + " ")) && !/^capital\b/.test(words))
    return `capital ${words}`;
  const g = /^\\([A-Za-z]+)$/.exec(base);
  return g ? capitalGreek(g[1], words) : words;
}

/**
 * The "Say it" name of a glossary symbol on a page, as read-aloud says it: the registry's spoken name, with
 * "capital" where the page also uses the small letter (lib/symbols.ts symbolsOnPage, the popups).
 */
export function spokenOnPage(spoken: string, key: string, capitals: Iterable<string>): string {
  const base = /^(?:\\(?:hat|dot|ddot) ?)?(?:\\(?:hat|vec|tilde|bar) ?)?(\\[A-Za-z]+|[A-Za-z])/.exec(key)?.[1] ?? "";
  return capitalise(base, spoken, new Set(capitals));
}

/**
 * Symbol names from the registry, before the structural rules: compounds (H_0 "H nought", ρ_c "rho c"), primes
 * (f' "f prime"), accented symbols of their own (ȧ "a dot", î "i hat"). Also: capitals on pages that use both forms
 * of a letter, letters spaced apart (kc is k times c, not a word), and units inside \text{} written out.
 * Each name becomes a mark (\sayNN) that is spoken as is at the end.
 */
function nameSymbols(tex: string, names: string[], capitals: Set<string>): string {
  const mark = (words: string) => {
    // Hyphens in names (light-years) are not minus signs.
    names.push(words.replace(/-/g, "‐"));
    // Letters only, so the mark is one TeX command: 0 → \sayqa, 1 → \sayqb …
    return ` \\sayq${names.length - 1}`.replace(/\d/g, (d) => "abcdefghij"[+d]) + " ";
  };
  const withCapital = (base: string, words: string) => capitalise(base, words, capitals);
  let out = "";
  let i = 0;
  const n = tex.length;
  const readSub = (j: number): [string, number] => {
    while (tex[j] === " ") j++;
    if (tex[j] === "{") {
      let depth = 0;
      let k = j;
      for (; k < n; k++) {
        if (tex[k] === "{") depth++;
        else if (tex[k] === "}" && --depth === 0) break;
      }
      return [tex.slice(j + 1, k), k + 1];
    }
    if (tex[j] === "\\") {
      const m = /^\\(?:text|mathrm|textrm|mbox)\s*\{[^{}]*\}|^\\[A-Za-z]+/.exec(tex.slice(j));
      if (m) return [m[0], j + m[0].length];
    }
    return [tex[j] ?? "", j + 1];
  };
  const normSub = (sub: string) =>
    sub
      .replace(/\\(?:text|textrm|mathrm|rm|mbox)\s*\{([^{}]*)\}/g, "$1")
      .replace(/\\[,;:! ]/g, "")
      .replace(/[{}\s]/g, "");
  while (i < n) {
    const rest = tex.slice(i);
    // Text: units are written out (5\ \text{km/s} → "5 kilometres per second" → engines need no guessing). A \mu
    // just before the text is its prefix (4.7\ \mu\text{F} → "4.7 microfarads").
    let m = /^\\mu\s*\\text\s*\{([^{}]*)\}/.exec(rest);
    const micro = m && unitText("μ" + m[1].trim(), out);
    if (m && micro) {
      out += mark(micro);
      i += m[0].length;
      continue;
    }
    m = /^\\(text|mathrm|textrm|mbox)\s*\{([^{}]*)\}/.exec(rest);
    if (m) {
      // \mathrm{d} is a differential, never "days": only \text{…} holds units.
      const next = /^(?:\s|\\[ ,;:!])*\\text\s*\{([^{}]*)\}/.exec(tex.slice(i + m[0].length));
      const product = !!next && !next[1].trim().startsWith("/") && unitText(next[1], "") !== null;
      const words = m[1] !== "mathrm" ? unitText(m[2], out, product) : null;
      out += words ? mark(words) : m[0];
      i += m[0].length;
      continue;
    }
    m = /^\\\\(\[[^\]]*\])?|^\\(?:begin|end)\s*\{[^{}]*\}/.exec(rest);
    if (m) {
      out += m[0];
      i += m[0].length;
      continue;
    }
    // Accented symbols of their own: \dot a, \ddot{\hat\delta}, \hat i, optionally with a subscript.
    m = /^\\(hat|dot|ddot)(?![A-Za-z])\s*(?:\{\s*((?:\\(?:hat|vec|tilde|bar)\s*)?(?:\\[A-Za-z]+|[A-Za-z]))\s*\}|((?:\\(?:hat|vec|tilde|bar)\s*)?(?:\\[A-Za-z]+|[A-Za-z])))/.exec(rest);
    if (m) {
      const inner = (m[2] ?? m[3]).replace(/\s+/g, " ").trim().replace(/^(\\(?:hat|vec|tilde|bar))\s*(\\)/, "$1$2");
      let key = `\\${m[1]}${inner.startsWith("\\") ? "" : " "}${inner}`;
      let j = i + m[0].length;
      let k = j;
      while (tex[k] === " ") k++;
      if (tex[k] === "_") {
        const [sub, after] = readSub(k + 1);
        if (FORM_SPOKEN[`${key}_${normSub(sub)}`]) {
          key = `${key}_${normSub(sub)}`;
          j = after;
        }
      }
      if (FORM_SPOKEN[key]) {
        const base = inner.replace(/^\\(?:hat|vec|tilde|bar)\s*/, "");
        out += mark(withCapital(base, FORM_SPOKEN[key]));
        i = j;
        continue;
      }
    }
    // A base (letter or command) with primes and/or a subscript that the registry names.
    m = /^(\\[A-Za-z]+|[A-Za-z])('{1,2})?/.exec(rest);
    if (m && !(m[1].startsWith("\\") && !SPOKEN[m[1].slice(1)] && !/^\\[A-Za-z]+$/.test(m[1]))) {
      const base = m[1];
      const primes = m[2] ?? "";
      let j = i + m[0].length;
      let k = j;
      while (tex[k] === " ") k++;
      let key = base + primes;
      let end = j;
      if (tex[k] === "_") {
        const [sub, after] = readSub(k + 1);
        const withSub = `${key}_${normSub(sub)}`;
        if (FORM_SPOKEN[withSub]) {
          key = withSub;
          end = after;
        }
      }
      if (FORM_SPOKEN[key] && (primes || end !== j)) {
        // One entry often holds a quantity and its value today (\Omega_m and \Omega_{m,0}) under one spoken name:
        // say the ", 0" of the second as "nought", or the two would sound the same.
        const today = /,0$/.test(key) && !/\bnought\b|\btoday\b/.test(FORM_SPOKEN[key]);
        out += mark(withCapital(base, FORM_SPOKEN[key] + (today ? " nought" : "")));
        i = end;
        continue;
      }
      if (!base.startsWith("\\")) {
        // A single letter: "capital R" where the page also uses r; letters side by side are separate symbols.
        const letter = capitals.has(base) ? mark(`capital ${base}`) : base;
        out += letter + primes + (/[A-Za-z]/.test(tex[i + 1] ?? "") && !primes ? " " : "");
        i += 1 + primes.length;
        continue;
      }
      out += base;
      i += base.length;
      continue;
    }
    out += tex[i];
    // 3H is "3 H": a number and a symbol, not one word.
    if (/\d/.test(tex[i]) && /[A-Za-z]/.test(tex[i + 1] ?? "")) out += " ";
    i++;
  }
  return out;
}

/**
 * Grouping. Spoken maths has no brackets, so "(A + B) + C" and "A + (B + C)" would sound the same. Before the
 * word rules below, groupTex marks every group that has an operator inside: a bracket, a fraction's numerator or
 * denominator, a root, an exponent. The marks are spoken as:
 *   (A + B) + C          "the quantity A plus B, all plus C"
 *   A + (B + C)          "A plus the quantity B plus C,"
 *   \frac{a + b}{c}      "the quantity a plus b, all over c"
 *   \frac{a}{b + c}      "a over the quantity b plus c,"
 *   \sqrt{a + b}         "the square root of a plus b, end of root"
 *   e^{-x^2/2}           "e to the power minus x squared over 2, end of power"
 * Simple groups stay short: "x squared", "a over b", "f of x".
 */
const MARKS: Record<string, string> = {
  grpOpen: " the quantity ",
  grpOfOpen: " of the quantity ",
  grpClose: " , ",
  grpCloseAll: " , all ",
  grpAllOver: " , all over ",
  grpOver: " over ",
  grpPow: " to the power ",
  grpPowEnd: " , end of power , ",
  grpRoot: " the square root of ",
  grpRootN: " root of ",
  grpRootEnd: " , end of root , ",
};

/**
 * Operators that make a group's grouping matter: sums and differences, and division. Products (a·b, 2 × 10³⁰) and
 * relations inside a bracket read the same with or without it, so they do not count.
 */
const BINARY = /^(?:\+|-|\\pm(?![A-Za-z])|\\mp(?![A-Za-z])|\/)/;

/** Index just after the group that opens at s[i] ("{", "(" or "["), or -1 if it never closes. */
function closeOf(s: string, i: number): number {
  const open = s[i];
  const close = open === "{" ? "}" : open === "(" ? ")" : "]";
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (c === "\\") {
      // \{ \} \left( \right) and other commands: a sized bracket counts like a plain one.
      const m = /^\\(left|right|bigl|bigr|Bigl|Bigr|biggl|biggr|big|Big)?(.)/.exec(s.slice(j));
      if (m && !m[1] && /[{}]/.test(m[2])) j += 1;
      continue;
    }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return j + 1;
  }
  return -1;
}

/** True when the TeX has an operator at its top level, outside any braces or brackets (a leading sign aside). */
export function isCompound(tex: string, fractionsCount = true): boolean {
  const s = tex.trim().replace(/^(?:\+|-|\\pm|\\mp)\s*/, "");
  if (/^\d+\s*\/\s*\d+$/.test(s)) return false; // 3/2
  let depth = 0;
  // A sign at the start, or after a comma or relation ("x, -y", "= -1"), is not a binary operator.
  let unary = true;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === " ") continue;
    const wasUnary = unary;
    unary = depth === 0 && /[,=<>&]/.test(c);
    if (c === "{" || c === "(" || c === "[") depth++;
    else if (c === "}" || c === ")" || c === "]") depth--;
    else if (depth === 0) {
      if (c === "\\" && /^\\(?:leq?|geq?|approx|neq|ne|propto|sim|equiv|quad|qquad|to)(?![A-Za-z])/.test(s.slice(i))) {
        unary = true;
        continue;
      }
      if (wasUnary && /^(?:\+|-|\\pm|\\mp)/.test(s.slice(i))) continue;
      // A sign that is itself a subscript or superscript (J_+, J_\pm, x^-) is a label, not an operator.
      const label = /^[_^]\s*(?:\+|-|\\pm(?![A-Za-z])|\\mp(?![A-Za-z]))/.exec(s.slice(i));
      if (label) {
        i += label[0].length - 1;
        continue;
      }
      if (c === "\\" && /^\\[{}]/.test(s.slice(i))) {
        i++;
        continue;
      }
      if (c === "\\" && /^\\(?:left|right|bigl|bigr|Bigl|Bigr|big|Big)[([]/.test(s.slice(i))) {
        depth++;
        i = s.indexOf(s.slice(i).match(/[([]/)![0], i);
        continue;
      }
      if (c === "\\" && /^\\(?:left|right|bigl|bigr|Bigl|Bigr|big|Big)[)\]]/.test(s.slice(i))) {
        depth--;
        i = s.indexOf(s.slice(i).match(/[)\]]/)![0], i);
        continue;
      }
      if (BINARY.test(s.slice(i))) return true;
      // A fraction of letters (not 3/2) inside an exponent or root is a group of its own.
      if (fractionsCount && /^\\[dt]?frac(?![A-Za-z])/.test(s.slice(i))) {
        const rest = s.slice(i).replace(/^\\[dt]?frac\s*/, "");
        if (!/^(\{\s*\d+\s*\}|\d)\s*(\{\s*\d+\s*\}|\d)/.test(rest)) return true;
      }
    }
  }
  return false;
}

/** Function names after which a bracket is an argument: "sine of the quantity x plus h". */
const FUNCTION_BEFORE =
  /\\(?:sin|cos|tan|sinh|cosh|tanh|ln|log|exp|arcsin|arccos|arctan|sec|csc|cot)\s*(?:\^\{[^{}]*\}|\^\w)?\s*(?:\\left|\\bigl|\\Bigl|\\big|\\Big)?\s*$/;

/**
 * A single letter before a bracket is a function ("f of the quantity x plus h") when it is f, g or h, or when the
 * same formula also writes it as one with a simple argument, as in v(t + Δt) next to v(t). Otherwise it is a
 * product: G(ρ + 3p) is "G times the quantity", not "G of".
 */
function functionLetterBefore(out: string, whole: string): boolean {
  const m = /(?<![A-Za-z\\])([A-Za-z])(?:_\{[^{}]*\}|_\w)?\s*(?:\\left|\\bigl|\\Bigl|\\big|\\Big)?\s*$/.exec(out);
  if (!m) return false;
  if (/[fgh]/.test(m[1])) return true;
  return new RegExp(`(?<![A-Za-z\\\\])${m[1]}\\s*(?:\\\\left)?\\s*\\((?:[^()+\\-/]|\\\\[A-Za-z]+)*\\)`).test(whole);
}
/** What may follow a closing group that makes "all" right: "the quantity a plus b, all plus c", "…, all squared". */
const AFTER_ALL = /^(?:\s|\\[,;:!]|\\right|\\bigr|\\Bigr)*(?:\+|-|\\pm(?![A-Za-z])|\\mp(?![A-Za-z])|\\cdot(?![A-Za-z])|\\times(?![A-Za-z])|\/|\^)/;

/** Reads one argument at s[i]: a braced group, a command or one character. Returns [argument, index after it]. */
function readArg(s: string, i: number): [string, number] {
  while (s[i] === " ") i++;
  if (s[i] === "{") {
    const end = closeOf(s, i);
    if (end > 0) return [s.slice(i + 1, end - 1), end];
  }
  if (s[i] === "\\") {
    const m = /^\\([A-Za-z]+|.)/.exec(s.slice(i))!;
    return [m[0], i + m[0].length];
  }
  return [s[i] ?? "", i + 1];
}

export function groupTex(s: string, whole = s): string {
  let out = "";
  let i = 0;
  while (i < s.length) {
    const rest = s.slice(i);
    // Line breaks (and their spacing, \\[2ex]) and text are copied unchanged.
    let m = /^\\\\(\[[^\]]*\])?/.exec(rest) ?? /^\\(?:text|mathrm|textrm|mbox|operatorname|begin|end)\s*\{[^{}]*\}/.exec(rest);
    if (m) {
      out += m[0];
      i += m[0].length;
      continue;
    }
    // Fractions: speak the grouping of a numerator or denominator that has an operator inside.
    m = /^\\([dt]?frac)(?![A-Za-z])/.exec(rest);
    if (m) {
      const [num, a] = readArg(s, i + m[0].length);
      const [den, b] = readArg(s, a);
      const n = isCompound(num, false);
      const d = isCompound(den, false);
      // Simple single-token fractions keep their TeX (\frac12 is read "one half" further on).
      if (!n && !d) out += /[{}]/.test(s.slice(i, b)) ? `\\${m[1]}{${groupTex(num, whole)}}{${groupTex(den, whole)}}` : s.slice(i, b);
      else
        out +=
          (n ? ` \\grpOpen ${groupTex(num, whole)} \\grpAllOver ` : ` {${groupTex(num, whole)}} \\grpOver `) +
          (d ? ` \\grpOpen ${groupTex(den, whole)} \\grpClose ` : ` {${groupTex(den, whole)}} `);
      i = b;
      continue;
    }
    // Roots
    m = /^\\sqrt(?![A-Za-z])\s*(\[[^\]]*\])?/.exec(rest);
    if (m) {
      const [arg, a] = readArg(s, i + m[0].length);
      if (isCompound(arg))
        out += m[1] ? ` the ${m[1].slice(1, -1)} th \\grpRootN ${groupTex(arg, whole)} \\grpRootEnd ` : ` \\grpRoot ${groupTex(arg, whole)} \\grpRootEnd `;
      else out += /[{}]/.test(s.slice(i, a)) ? `\\sqrt${m[1] ?? ""}{${groupTex(arg, whole)}}` : s.slice(i, a);
      i = a;
      continue;
    }
    // Exponents with an operator inside: "to the power …, end of power"
    if (s[i] === "^") {
      const [arg, a] = readArg(s, i + 1);
      if (s[i + 1] === "{" || s.slice(i + 1).trimStart().startsWith("{")) {
        // An exponent that holds a spoken group of its own (M^{-(1/2 + x)}) is closed too.
        const inner = groupTex(arg, whole);
        out += isCompound(arg) || /\\grp/.test(inner) ? ` \\grpPow ${inner} \\grpPowEnd ` : `^{${inner}}`;
        i = a;
        continue;
      }
    }
    // Brackets, plain or sized: ( … ), [ … ], \left( … \right), \bigl[ … \bigr]
    m = /^(\\(?:left|bigl|Bigl|biggl|big|Big))?\s*([([])/.exec(rest);
    if (m && (m[1] || rest[0] === m[2])) {
      const start = i + m[0].length - 1;
      const end = closeOf(s, start);
      if (end > 0) {
        let inner = s.slice(start + 1, end - 1);
        // Drop the matching \right / \bigr before the closing bracket.
        inner = inner.replace(/\\(?:right|bigr|Bigr|biggr|big|Big)\s*$/, "");
        const closer = s[end - 1];
        if (isCompound(inner, false)) {
          // A function's argument closes with a plain pause: "f of the quantity x plus h, minus f of x".
          const fn = FUNCTION_BEFORE.test(out) || functionLetterBefore(out, whole);
          out += ` ${fn ? "\\grpOfOpen" : "\\grpOpen"} ${groupTex(inner, whole)} ${!fn && AFTER_ALL.test(s.slice(end)) ? "\\grpCloseAll" : "\\grpClose"} `;
        } else out += `${m[1] ?? ""}${m[2]}${groupTex(inner, whole)}${m[1] ? "\\right" : ""}${closer}`;
        i = end;
        continue;
      }
    }
    out += s[i];
    i++;
  }
  return out;
}

/**
 * The groups in a formula whose grouping must be spoken (brackets, fraction parts, roots and exponents with an
 * operator inside), counted directly from the TeX. content:check compares this with the spoken text, so a change
 * to the rules above cannot silently lose a bracket again.
 */
export function groupingLost(tex: string): number {
  const said = texToSpeech(tex);
  const marks = (said.match(/\bthe quantity\b|\bend of power\b|\bend of root\b/g) ?? []).length;
  let expected = 0;
  const walk = (s: string) => {
    for (let i = 0; i < s.length; i++) {
      const rest = s.slice(i);
      const text = /^\\(?:text|mathrm|textrm|mbox|operatorname)\s*\{[^{}]*\}/.exec(rest);
      if (text) {
        i += text[0].length - 1;
        continue;
      }
      const brk = /^\\\\\[[^\]]*\]/.exec(rest);
      if (brk) {
        i += brk[0].length - 1;
        continue;
      }
      const frac = /^\\[dt]?frac(?![A-Za-z])/.exec(rest);
      if (frac) {
        const [num, a] = readArg(s, i + frac[0].length);
        const [den, b] = readArg(s, a);
        expected += (isCompound(num, false) ? 1 : 0) + (isCompound(den, false) ? 1 : 0);
        walk(num);
        walk(den);
        i = b - 1;
        continue;
      }
      const root = /^\\sqrt(?![A-Za-z])\s*(\[[^\]]*\])?/.exec(rest);
      if (root) {
        const [arg, a] = readArg(s, i + root[0].length);
        if (isCompound(arg)) expected++;
        walk(arg);
        i = a - 1;
        continue;
      }
      if (s[i] === "^" && /^\^\s*\{/.test(rest)) {
        const [arg, a] = readArg(s, i + 1);
        if (isCompound(arg)) expected++;
        walk(arg);
        i = a - 1;
        continue;
      }
      if (s[i] === "(" || s[i] === "[") {
        const end = closeOf(s, i);
        if (end > 0) {
          const inner = s.slice(i + 1, end - 1).replace(/\\(?:right|bigr|Bigr|biggr|big|Big)\s*$/, "");
          if (isCompound(inner, false)) expected++;
          walk(inner);
          i = end - 1;
        }
      }
    }
  };
  walk(tex);
  return Math.max(0, expected - marks);
}

/** Commands that only lay out maths: say nothing for them. */
const SILENT = /\\(?:left|right|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|middle|displaystyle|textstyle|limits|nolimits|quad|qquad)(?![A-Za-z])/g;

/**
 * What the converter could not put into words: TeX commands with no spoken name, and characters left
 * over after conversion (^ _ | ! and so on). Used by content:check; empty means the formula is fully spoken.
 */
export function speechGaps(tex: string): string[] {
  const gaps: string[] = [];
  const out = texToSpeech(tex, (name) => gaps.push(`\\${name}`));
  // A symbol name that was never put back (the accent rules once dropped its backslash)
  if (/sayq/.test(out)) gaps.push("symbol name");
  for (const ch of out.match(/[\^_|!\[\]~@#$%]/g) ?? []) gaps.push(ch);
  return [...new Set(gaps)];
}

export function texToSpeech(tex: string, options: SpeechOptions | ((command: string) => void) = {}): string {
  const opts: SpeechOptions = typeof options === "function" ? { unknown: options } : options;
  const unknown = opts.unknown;
  const names: string[] = [];
  // Ranges: 0.5–5 is "0.5 to 5"
  const named = nameSymbols(braKets(tex).replace(/(\d)\s*(?:\\text\{\s*–\s*\}|–|--)\s*(?=\d)/g, "$1 \\text{to} "), names, new Set(opts.capitals ?? []));
  // Hyphens in text (\text{e-fold}) are words, not minus signs: keep them apart until the end.
  let s = groupTex(named.replace(/\\text\{[^{}]*\}/g, (t) => t.replace(/-/g, "‐")))
    // Case-by-case formulas: "a & condition \\ b & condition" → "a when condition; or b when condition"
    .replace(/\\begin\{(?:cases|dcases)\}([\s\S]*?)\\end\{(?:cases|dcases)\}/g, (_, body: string) =>
      " " + body.replace(/\\\\(\[[^\]]*\])?/g, " ; or ").replace(/&/g, " when ") + " "
    )
    .replace(/\\(?:begin|end)\{[^{}]*\}/g, " ")
    .replace(/\\\\(\[[^\]]*\])?/g, " ; ")
    .replace(/\{,\}/g, ",") // 50{,}000
    // \left. … \right|_{t_0} is "evaluated at t nought"; before the absolute-value rules, which would pair its bar
    // with another one.
    .replace(/\\left\.\s*/g, " ")
    .replace(/\\right\|_(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)/g, (_, at: string) => ` evaluated at ${at.replace(/^\{|\}$/g, "")} `)
    // Absolute values and norms: |x|, \left| … \right|, \|v\|
    .replace(/\\left\|([^|]*?)\\right\|/g, " the absolute value of $1 ")
    .replace(/\\\|([^|]*?)\\\|/g, " the norm of $1 ")
    .replace(/\|([^|]+?)\|/g, " the absolute value of $1 ")
    // One-sided limits: x \to x_0^+ is "x tends to x nought from the right"
    .replace(/(\\to\s*[^\s,}]+?)\^(?:\{\+\}|\+)/g, "$1 from the right ")
    .replace(/(\\to\s*[^\s,}]+?)\^(?:\{-\}|-(?![0-9A-Za-z\\{]))/g, "$1 from the left ")
    .replace(/\^(?:\{\+\}|\+)/g, " plus ")
    .replace(/\^(?:\{-\}|-(?![0-9A-Za-z{])(?!\\(?!(?:right|bigr|Bigr|biggr)(?![A-Za-z]))))/g, " minus ")
    .replace(/_(?:\{\*\}|\*)/g, " star ")
    .replace(/_\{\*/g, " star _{")
    .replace(/_(?:\{\+\}|\+)/g, " plus ")
    .replace(/_(?:\{-\}|-)/g, " minus ")
    .replace(/\\(?:d|t)?frac\s*(\w)\s*\\([A-Za-z]+)/g, " $1 over \\$2 ")
    // A single bar left over is "given", as in P(N | M)
    .replace(/\\,?\|\\,?/g, " given ")
    // Double factorials first (5!!, (2l+1)!!), then single ones; after a spoken group the bracket is already ", ".
    .replace(/(\d+|[A-Za-z]|\))\s*!!/g, "$1 double factorial ")
    .replace(/,\s*!!/g, ", double factorial ")
    .replace(/(\d+|[A-Za-z])!/g, " $1 factorial ")
    .replace(/\)\s*!/g, " ) factorial ")
    .replace(/,\s*!/g, ", factorial ")
    .replace(/(\\grpClose(?:All)?\s*)!/g, "$1 factorial ")
    .replace(/\\mathbb\{R\}/g, " the real numbers ")
    .replace(/\\mathbb\{C\}/g, " the complex numbers ")
    .replace(/\\mathbb\{([A-Za-z])\}/g, " blackboard $1 ")
    .replace(/\\mathcal\{([A-Za-z])\}/g, " script $1 ")
    // The same without braces: \mathbb R, \mathcal E
    .replace(/\\mathbb\s*R(?![A-Za-z])/g, " the real numbers ")
    .replace(/\\mathbb\s*C(?![A-Za-z])/g, " the complex numbers ")
    .replace(/\\mathbb\s*([A-Za-z])(?![A-Za-z])/g, " blackboard $1 ")
    .replace(/\\mathcal\s*([A-Za-z])(?![A-Za-z])/g, " script $1 ")
    .replace(/\\sqrt\s*\\([A-Za-z]+)/g, " the square root of \\$1 ")
    .replace(/\\(?:d|t)?frac\{([^{}]*)\}\s*(\w)/g, " $1 over $2 ")
    .replace(/\\(?:d|t)?frac\s*(\w)\s*\{([^{}]*)\}/g, " $1 over $2 ")
    .replace(/\\(?:d|t)?frac\s*(\w)\s*(\w)/g, (m, a: string, b: string) => (a === "1" && b === "2" ? m : ` ${a} over ${b} `))
    .replace(/\\left\[|\\right\]|\[|\]/g, (b) => (b.includes("[") ? " ( " : " ) "))
    .replace(/\\right\|_\{([^{}]*)\}/g, " evaluated at $1 ")
    .replace(/\\(?:left|right)[.|]/g, " ")
    // Integrals and sums with limits
    .replace(
      /\\(int|sum|prod)\s*(?:\\limits)?_(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)\s*\^(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)/g,
      (_, op: string, lo: string, hi: string) =>
        ` the ${op === "int" ? "integral" : op === "prod" ? "product" : "sum"} from ${lo.replace(/^\{|\}$/g, "")} to ${hi.replace(/^\{|\}$/g, "")} of `
    )
    // Only one limit: \int^r is "the integral up to r of", \int_V "the integral over V of"
    .replace(/\\int\s*\^(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)/g, (_, hi: string) => ` the integral up to ${hi.replace(/^\{|\}$/g, "")} of `)
    .replace(/\\(int|sum|prod)\s*_(\{(?:[^{}]|\{[^{}]*\})*\}|\\?\w+)(?!\s*\^)/g, (_, op: string, lo: string) =>
      ` the ${op === "int" ? "integral" : op === "prod" ? "product" : "sum"} over ${lo.replace(/^\{|\}$/g, "")} of `
    )
    .replace(/\\(sinh|cosh|tanh|sin|cos|tan)\s*\^\{-1\}/g, " inverse \\$1 ")
    // Degrees before the general superscript rule, or 45° is read "45 superscript degrees"
    .replace(/\^\{\\circ\}|\^\\circ/g, " degrees ")
    // Between vectors (or after nabla) · is the dot product and × the cross product
    .replace(/(\\nabla|\\vec\s*\{?\\?[A-Za-z]+\}?)\s*\\cdot/g, "$1 dot ")
    .replace(/\\cdot\s*(?=\\vec|\\nabla)/g, " dot ")
    .replace(/(\\nabla|\\vec\s*\{?\\?[A-Za-z]+\}?)\s*\\times(?!\s*\d)/g, "$1 cross ")
    .replace(/\^\*/g, " star ")
    .replace(/\^\\(pm|mp)/g, " \\$1 ")
    .replace(/\^\\([A-Za-z]+)/g, " superscript \\$1 ")
    .replace(/'/g, " prime ")
    .replace(SILENT, " ")
    .replace(/\\rangle(?![A-Za-z])/g, " ")
    // Subscripts that are words or symbols: n_\text{eq}, M_\odot
    .replace(/_\\(?:text|mathrm)\{([^{}]*)\}/g, " sub $1 ")
    .replace(/_\\([A-Za-z]+)/g, " sub \\$1")
    .replace(/\\[,;:! ]/g, " ")
    .replace(/\\(?:d|t)?frac\s*1\s*2(?![0-9])/g, " one half ")
    .replace(/\\(?:d|t)?frac\s*(\d)\s*(\d)/g, " $1 over $2 ")
    .replace(/\\lim_\{([^{}]*)\}/g, " the limit as $1 of ")
    .replace(/\\vec\s*([A-Za-z])/g, " vector $1 ")
    .replace(/\\hat\s*(\\?[A-Za-z]+)/g, " $1 hat ")
    // (?![A-Za-z]): \dots and \ddots are commands of their own, not accents on "s".
    .replace(/\\ddot(?![A-Za-z])\s*(\\?[A-Za-z]+)/g, " $1 double dot ")
    .replace(/\\dot(?![A-Za-z])\s*(\\?[A-Za-z]+)/g, " $1 dot ")
    .replace(/\\bar\s*(\\?[A-Za-z]+)/g, " $1 bar ")
    .replace(/\\tilde\s*(\\?[A-Za-z]+)/g, " $1 tilde ");
  // Repeat structural rewrites until stable so nested groups work.
  for (let i = 0; i < 6; i++) {
    const before = s;
    s = s
      .replace(/\\(?:d|t)?frac\{([^{}]*)\}\{([^{}]*)\}/g, " $1 over $2 ")
      .replace(/\\sqrt\{([^{}]*)\}/g, " the square root of $1 ")
      .replace(/\\sqrt\s*(\w)/g, " the square root of $1 ")
      .replace(/\\vec\{([^{}]*)\}/g, " vector $1 ")
      .replace(/\\hat\{([^{}]*)\}/g, " $1 hat ")
      .replace(/\\ddot\{([^{}]*)\}/g, " $1 double dot ")
      .replace(/\\dot\{([^{}]*)\}/g, " $1 dot ")
      .replace(/\\tilde\{([^{}]*)\}/g, " $1 tilde ")
      .replace(/\\bar\{([^{}]*)\}|\\overline\{([^{}]*)\}/g, " $1$2 bar ")
      .replace(/\\(?:text|mathrm|mathbf|mathit|operatorname)\{([^{}]*)\}/g, " $1 ")
      .replace(/\^\{2\}|\^2(?![0-9])/g, " squared ")
      .replace(/\^\{3\}|\^3(?![0-9])/g, " cubed ")
      .replace(/\^\{\\circ\}|\^\\circ/g, " degrees ")
      .replace(/\^\{([^{}]*)\}/g, " to the power $1 ")
      .replace(/\^(\w)/g, " to the power $1 ")
      .replace(/_\{([^{}]*)\}/g, " sub $1 ")
      .replace(/_(\w)/g, " sub $1 ");
    // A brace pair left that groups nothing (a base such as {v^\theta} once its scripts are read): drop the braces,
    // so the fraction or root around it can be read on the next round. Only when nothing else changed this round,
    // and never right after a command, ^ or _, or another group (those braces are arguments).
    if (s === before) s = s.replace(/(^|[^A-Za-z\\^_}])\{([^{}]*)\}/g, "$1 $2 ");
    if (s === before) break;
  }
  s = s
    .replace(/\\([A-Za-z]+)/g, (_, name: string) => {
      if (name in MARKS) return MARKS[name];
      // A symbol name from the registry (nameSymbols): \sayqbc → names[12]
      if (name.startsWith("sayq")) return ` ${names[+name.slice(4).replace(/[a-j]/g, (c) => String(c.charCodeAt(0) - 97))] ?? ""} `;
      const said = SPOKEN[name] ?? EXTRA[name];
      if (said === undefined) unknown?.(name);
      return ` ${said ?? ""} `;
    })
    .replace(/\//g, " over ")
    // A minus written without spaces, 3k-1 or 2-n
    .replace(/([0-9A-Za-z)])\s*-\s*(?=[0-9A-Za-z(])/g, "$1 minus ")
    .replace(/=/g, " equals ")
    .replace(/\+/g, " plus ")
    .replace(/(\s)-|^-/g, "$1 minus ")
    .replace(/</g, " less than ")
    .replace(/>/g, " greater than ")
    .replace(/[{}\\&]/g, " ")
    .replace(/\s+/g, " ")
    // Tidy the pauses the grouping marks leave: ", ," and a pause before "," ";" or the end.
    .replace(/\s*,(\s*,)+/g, ",")
    .replace(/\s+([,;])/g, "$1")
    .replace(/,\s*;/g, ";")
    .replace(/[,\s]+$/, "")
    .replace(/‐/g, "-")
    .trim();
  // For the engine: a letter after a number that engines would read as a unit is spelled as it sounds.
  if (opts.engine)
    s = s.replace(/(^|\s)(\d+(?:\.\d+)?) ([A-Za-z])(?=[\s,;.]|$)/g, (m, sp: string, num: string, letter: string) =>
      LETTER_SOUNDS[letter] ? `${sp}${num} ${LETTER_SOUNDS[letter]}` : m
    );
  return s;
}

/** content:check: does the engine text still read a symbol as a unit ("1 m" after "m sub 1")? */
export function symbolReadAsUnit(tex: string, capitals: Iterable<string> = []): string | null {
  const out = texToSpeech(tex, { capitals, engine: true });
  const m = UNIT_AFTER_NUMBER.exec(out);
  return m ? m[0].trim() : null;
}
