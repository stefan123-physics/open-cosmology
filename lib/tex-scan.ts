import type { Page } from "./content";

/**
 * Finding the maths in a page. Shared by the symbols glossary, the per-page symbol lists
 * and scripts/scan-content.ts (see docs/SYMBOLS_PLAN.md and docs/CALC_TESTS_PLAN.md).
 */

/** TeX commands that only lay out or style maths; they are not symbols a reader needs explained. */
export const LAYOUT_COMMANDS = new Set([
  "left", "right", "big", "Big", "bigg", "Bigg", "bigl", "bigr", "Bigl", "Bigr", "middle",
  "quad", "qquad", "text", "textrm", "textit", "textbf", "mathrm", "mathbf", "mathit", "mathcal", "mathsf", "mathtt",
  "operatorname", "displaystyle", "textstyle", "scriptstyle", "begin", "end", "cases", "aligned", "array", "matrix",
  "pmatrix", "bmatrix", "limits", "nolimits", "hspace", "vspace", "phantom", "underbrace", "overbrace", "boxed",
  "label", "tag", "notag", "nonumber", "color", "htmlData", "kern", "mkern", "mathstrut", "strut", "rm", "it", "bf",
  "ex", "em", "pt", "mathbb", "dfrac", "tfrac", "frac", "sqrt", "ldots", "cdots", "dots", "vdots", "ddots",
]);

/** Every piece of TeX on a page: display formulas, inline maths, plot labels, quiz and flashcard text. */
export function pageTex(page: Page): string[] {
  const out: string[] = [];
  // <Formula tex="…"> (single backslashes in JSX string attributes)
  for (const m of page.body.matchAll(/\btex="([^"]*)"/g)) out.push(m[1]);
  // Inline $…$ in the body (the site uses $ only for maths)
  for (const m of page.body.matchAll(/\$([^$\n]+)\$/g)) out.push(m[1]);
  // TeX inside JS expressions (plot labels): backslashes are doubled there
  for (const m of page.body.matchAll(/label:\s*"([^"]*\\\\[^"]*)"/g)) out.push(m[1].replace(/\\\\/g, "\\"));
  const inline = (s?: string) => {
    if (!s) return;
    for (const m of s.matchAll(/\$([^$]+)\$/g)) out.push(m[1]);
  };
  for (const q of page.quiz) {
    inline(q.question);
    q.choices.forEach(inline);
    inline(q.explanation);
  }
  for (const c of page.flashcards ?? []) {
    inline(c.front);
    inline(c.back);
  }
  return out;
}

/** Names of the TeX commands used in a piece of TeX, without layout commands. "\frac{\rho}{3}" → ["rho"]. */
export function texCommands(tex: string): string[] {
  const found: string[] = [];
  for (const m of tex.matchAll(/\\([A-Za-z]+)/g)) if (!LAYOUT_COMMANDS.has(m[1])) found.push(m[1]);
  return found;
}

/** Command → number of uses on a page. */
export function pageCommands(page: Page): Map<string, number> {
  const counts = new Map<string, number>();
  for (const t of pageTex(page)) for (const c of texCommands(t)) counts.set(c, (counts.get(c) ?? 0) + 1);
  return counts;
}

/** Commands whose argument is text or layout, not maths symbols: \text{matter}, \begin{cases}. */
const TEXT_ARG = new Set([
  "text", "textrm", "textit", "textbf", "mathrm", "mathit", "mathbf", "mathcal", "mathbb", "mathsf", "mathtt",
  "operatorname", "mbox", "begin", "end", "label", "tag", "color", "hspace", "vspace",
]);

/** Operators whose subscript is a limit or a base, not part of a symbol's name: \int_0, \sum_{n=1}, \lim_{x\to0}, \log_{10}. */
const LIMIT_OPERATORS = new Set(["int", "oint", "iint", "iiint", "sum", "prod", "lim", "liminf", "limsup", "log", "max", "min", "sup", "inf", "arg", "det"]);

/** Letters that, under a hat, are unit vectors (8.01): î, ĵ, k̂, r̂, θ̂, n̂. Other hats (δ̂, Φ̂) are transforms. */
const UNIT_VECTORS = new Set(["i", "j", "k", "r", "n", "\\theta"]);

/** Normalised form of a subscript: \text{vac},0 → "vac,0"; \odot stays "\odot". */
export function normaliseSub(sub: string): string {
  return sub
    .replace(/\\(?:text|textrm|mathrm|rm|mbox)\s*\{([^{}]*)\}/g, "$1")
    .replace(/\\[,;:! ]/g, "")
    .replace(/[{}\s]/g, "");
}

/**
 * Every symbol in a piece of TeX, as keys:
 *   "\rho"      a TeX command
 *   "a"         a single Latin letter (in maths every letter is its own symbol: "kc^2" is k and c)
 *   "\rho_c"    a symbol with its subscript, "H_0", "\Omega_m,0", "M_\odot"
 *   "f'"        a symbol with primes (a derivative), "y''"; the plain symbol is counted too
 * Letters inside subscripts are labels, not symbols, so they are not counted on their own. The subscript of an
 * operator (\int_0, \sum_n, \lim_{x\to 0}, \log_{10}) is a limit or base, not part of a name.
 */
export function texNotation(tex: string, add: (key: string) => void, letters = true): void {
  const s = tex;
  const n = s.length;
  let i = 0;
  let lastBase: string | null = null;
  const readGroup = (): string => {
    let depth = 0;
    let j = i;
    for (; j < n; j++) {
      if (s[j] === "{") depth++;
      else if (s[j] === "}" && --depth === 0) break;
    }
    const inner = s.slice(i + 1, j);
    i = j + 1;
    return inner;
  };
  const skipSpaces = () => {
    while (i < n && s[i] === " ") i++;
  };
  const readCommand = (): string | null => {
    const m = /^\\([A-Za-z]+)/.exec(s.slice(i));
    if (!m) return null;
    i += m[0].length;
    return m[1];
  };
  /**
   * The symbol under \dot or \ddot, normalised: "a", "\rho", "\hat\delta", "\tilde a", "\vec r". Null (and nothing
   * read) when the argument is not a single symbol, e.g. \dot{(ab)}.
   */
  const readAccentArgument = (): string | null => {
    const m = /^\s*(?:\{\s*((?:\\(?:hat|vec|tilde|bar)\s*)?(?:\\[A-Za-z]+|[A-Za-z]))\s*\}|((?:\\(?:hat|vec|tilde|bar)\s*)?(?:\\[A-Za-z]+|[A-Za-z])))/.exec(
      s.slice(i)
    );
    if (!m) return null;
    const raw = (m[1] ?? m[2]).replace(/\s+/g, " ").trim();
    // A plain command must be a symbol, not a layout command or the start of a longer word ("\dot ab" is ȧ b).
    if (/^\\[A-Za-z]+$/.test(raw) && LAYOUT_COMMANDS.has(raw.slice(1))) return null;
    i += m[0].length;
    return raw.replace(/^(\\(?:hat|vec|tilde|bar))\s*(\\)/, "$1$2");
  };
  while (i < n) {
    const c = s[i];
    if (c === "\\") {
      const name = readCommand();
      if (!name) {
        // "\\" (a line break) may carry a spacing like [2ex]: skip it, its letters are not symbols.
        const isBreak = s[i + 1] === "\\";
        i += 2;
        if (isBreak && s[i] === "[") {
          const close = s.indexOf("]", i);
          if (close > i) i = close + 1;
        }
        lastBase = null;
        continue;
      }
      if (TEXT_ARG.has(name)) {
        skipSpaces();
        if (s[i] === "{") readGroup();
        lastBase = null;
        continue;
      }
      if (LAYOUT_COMMANDS.has(name)) continue;
      if (name === "dot" || name === "ddot") {
        // Time derivatives are symbols of their own: ȧ "\dot a", ρ̇⋆ "\dot\rho_\star", δ̂̈ "\ddot\hat\delta".
        const inner = readAccentArgument();
        if (inner) {
          let key = `\\${name}${inner.startsWith("\\") ? "" : " "}${inner}`;
          let j = i;
          while (s[j] === " ") j++;
          if (s[j] === "_") {
            i = j + 1;
            skipSpaces();
            let sub = "";
            if (s[i] === "{") sub = readGroup();
            else if (s[i] === "\\") {
              const start = i;
              const sname = readCommand();
              if (sname && TEXT_ARG.has(sname)) {
                skipSpaces();
                if (s[i] === "{") readGroup();
              }
              sub = s.slice(start, i);
            } else sub = s[i++] ?? "";
            key += `_${normaliseSub(sub)}`;
            texNotation(sub, add, false);
          }
          add(key);
          lastBase = null;
          continue;
        }
      }
      if (name === "hat") {
        // Unit vectors (î, ĵ, k̂, r̂, θ̂, n̂) are symbols of their own: "\hat i", "\hat\theta".
        const m = /^\s*(?:\{\s*(\\[A-Za-z]+|[A-Za-z])\s*\}|(\\[A-Za-z]+|[A-Za-z])(?![A-Za-z]))/.exec(s.slice(i));
        const base = m?.[1] ?? m?.[2];
        // With a subscript (r̂_{1,2}) the subscripted symbol carries the meaning; the hat stays an accent.
        const subscripted = m && /^\s*_/.test(s.slice(i + m[0].length));
        if (base && UNIT_VECTORS.has(base) && !subscripted) {
          add(`\\hat ${base}`.replace(" \\", "\\"));
          i += m![0].length;
          lastBase = null;
          continue;
        }
      }
      add("\\" + name);
      lastBase = "\\" + name;
      continue;
    }
    if (/[A-Za-z]/.test(c)) {
      // A letter with a subscript or prime (h_0, n_s, f') is counted only in that form, not as a bare letter.
      let j = i + 1;
      while (s[j] === " ") j++;
      if (letters && s[j] !== "_" && s[j] !== "'") add(c);
      lastBase = c;
      i++;
      continue;
    }
    if (c === "_") {
      i++;
      skipSpaces();
      let sub = "";
      if (s[i] === "{") sub = readGroup();
      else if (s[i] === "\\") {
        const start = i;
        const name = readCommand();
        if (name && TEXT_ARG.has(name)) {
          skipSpaces();
          if (s[i] === "{") readGroup();
        }
        sub = s.slice(start, i);
      } else {
        sub = s[i] ?? "";
        i++;
      }
      if (lastBase && !LIMIT_OPERATORS.has(lastBase.replace(/^\\/, ""))) add(`${lastBase}_${normaliseSub(sub)}`);
      texNotation(sub, add, false); // commands in a subscript (T_\gamma) still count
      lastBase = null;
      continue;
    }
    if (c === "^") {
      i++;
      skipSpaces();
      if (s[i] === "{") texNotation(readGroup(), add, letters);
      else if (s[i] === "\\") {
        const name = readCommand();
        if (name && !LAYOUT_COMMANDS.has(name) && !TEXT_ARG.has(name)) add("\\" + name);
      } else {
        if (letters && /[A-Za-z]/.test(s[i] ?? "")) add(s[i]);
        i++;
      }
      continue; // keep lastBase: H^2_0 is still H_0
    }
    if (c === "'" && lastBase) {
      // Primes: f' and y'' are their own symbols (the first and second derivative).
      let primes = "";
      while (s[i] === "'") {
        primes += "'";
        i++;
      }
      add(lastBase + primes);
      continue; // keep lastBase: f'_x is unusual, but y'(x) keeps y
    }
    if (c !== " ") lastBase = null;
    i++;
  }
}

/** Every symbol on a page (see texNotation) → number of uses. */
export function pageNotation(page: Page): Map<string, number> {
  const counts = new Map<string, number>();
  for (const t of pageTex(page)) texNotation(t, (k) => counts.set(k, (counts.get(k) ?? 0) + 1));
  return counts;
}
