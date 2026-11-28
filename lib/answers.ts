/**
 * Checking a reader's answer (docs/PROBLEM-SETS-DESIGN.md §4). Shared by the browser (components/exercise/Answer.tsx)
 * and by `npm run content:check` (lib/exercise-check.ts), so a page is checked with the code that marks the reader.
 *
 *  - parseNumber: a typed number ("9.7", "9,7", "1.2e5", "1.2 × 10^5").
 *  - parseFormula: a typed formula, through a restricted mathjs: only numbers, the symbols the answer allows, pi,
 *    + − * / ^, brackets and the functions in FUNCTIONS. Everything else is refused before anything is evaluated.
 *  - checkFormula: two formulas are the same when they agree at random points in the given ranges, so every
 *    equivalent way of writing the answer is accepted.
 */
import { create, all, type MathNode } from "mathjs";

// ---------------------------------------------------------------- numbers

const NUMBER =
  /^([+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+))(?:e([+-]?\d+))?(?:(?:[×x*·]|\\times)?10\^\(?\{?([+-]?\d+)\}?\)?)?$/i;
const POWER_ONLY = /^([+-]?)10\^\(?\{?([+-]?\d+)\}?\)?$/;

/** A typed number, or null when the text is not one. A comma is read as the decimal mark ("9,7"). */
export function parseNumber(text: string): number | null {
  const t = text.replace(/[−–]/g, "-").replace(/\s+/g, "");
  if (!t) return null;
  const p = POWER_ONLY.exec(t);
  if (p) return (p[1] === "-" ? -1 : 1) * 10 ** Number(p[2]);
  const m = NUMBER.exec(t);
  if (!m) return null;
  const v = Number(m[1].replace(",", ".")) * 10 ** (Number(m[2] ?? 0) + Number(m[3] ?? 0));
  return Number.isFinite(v) ? v : null;
}

/** Half a unit in the last printed digit of a value, the same default as the calcs ("9.7" → 0.05, "400" → 0.5). */
export function printedTolerance(value: string): number {
  const m = /^\s*[-+]?(\d+)(?:\.(\d+))?(?:[eE]([-+]?\d+))?/.exec(value);
  if (!m) return 0;
  return 0.5 * 10 ** (Number(m[3] ?? 0) - (m[2]?.length ?? 0));
}

/** The allowed distance from `value`: "2%" (relative), "0.01" (absolute), or the printed digits when not given. */
export function numberTolerance(value: string, tolerance?: string): number {
  const v = parseNumber(value) ?? NaN;
  if (!tolerance) return printedTolerance(value);
  const pct = /^\s*([\d.]+)\s*%\s*$/.exec(tolerance);
  return pct ? (Math.abs(v) * Number(pct[1])) / 100 : (parseNumber(tolerance) ?? NaN);
}

/** A second valid reading of a box (docs/ANSWER-BOX-FIX-PLAN.md Step 4), shown with its note when it is typed. */
export type AlsoNumber = { value: string; tolerance?: string; note?: string };
/** A typical wrong value with the hint shown when it is typed (owner decision 2026-11-28). */
export type NumberMistake = { value: string; tolerance?: string; hint: string };
export type NumberSpec = {
  value: string;
  tolerance?: string;
  alsoAccept?: AlsoNumber[];
  /**
   * The unit the box asks for, as a number: "1e-11" for "in units of 10⁻¹¹", "1e6" for "in millions", "0.01" for a
   * percentage. The box then accepts both the factor (5.54) and the full number (5.54e-11), each with its tolerance.
   */
  scale?: string;
  mistakes?: NumberMistake[];
};

/** How a box's scale is said in the note shown when the reader typed the full number. */
export function scaleWords(scale: number): string {
  if (scale === 0.01) return "a percentage";
  const k = Math.log10(scale);
  if (Number.isInteger(Math.round(k * 1e9) / 1e9) && Math.abs(k - Math.round(k)) < 1e-9) {
    const words: Record<number, string> = { 3: "thousands", 6: "millions", 9: "billions", 12: "trillions" };
    return words[Math.round(k)] ?? `the number in front of 10${sup(Math.round(k))}`;
  }
  return `units of ${scale}`;
}
export type Verdict =
  | { status: "correct"; note?: string }
  | { status: "wrong"; hint?: string }
  /** The entry could not be read; it does not count as a try. */
  | { status: "invalid"; message: string };

export function checkNumber(input: string, spec: NumberSpec): Verdict {
  const typed = parseNumber(input);
  if (typed === null) return { status: "invalid", message: "That is not a number I can read. Type it like 9.7 or 1.2e5." };
  const value = parseNumber(spec.value) ?? NaN;
  // A hair of slack so a value exactly on the edge is not lost to rounding.
  const within = (v: number, t: number) => Math.abs(typed - v) <= t * (1 + 1e-9);
  if (within(value, numberTolerance(spec.value, spec.tolerance))) return { status: "correct" };
  for (const a of spec.alsoAccept ?? []) {
    const v = parseNumber(a.value);
    if (v !== null && within(v, numberTolerance(a.value, a.tolerance))) return { status: "correct", note: a.note };
  }
  // Both forms (scale): the full number counts too, divided back to the box's unit with the same tolerance.
  const scale = spec.scale !== undefined ? parseNumber(spec.scale) : null;
  if (scale) {
    const t = numberTolerance(spec.value, spec.tolerance);
    if (Math.abs(typed / scale - value) <= t * (1 + 1e-9))
      return { status: "correct", note: `The box asked for ${scaleWords(scale)}; the full number is right too.` };
    // A second valid reading typed in full is right too, with its own note.
    for (const a of spec.alsoAccept ?? []) {
      const v = parseNumber(a.value);
      if (v !== null && Math.abs(typed / scale - v) <= numberTolerance(a.value, a.tolerance) * (1 + 1e-9)) return { status: "correct", note: a.note };
    }
  }
  for (const m of spec.mistakes ?? []) {
    const v = parseNumber(m.value);
    if (v !== null && within(v, numberTolerance(m.value, m.tolerance))) return { status: "wrong", hint: m.hint };
  }
  // The right digits with the wrong power of ten (5.54e-11 typed in a box "in units of 10⁻¹¹"): say so, but it is
  // not correct. Only for a factor of 100 or more, so a slip of one decimal place is not mistaken for it.
  if (value !== 0 && typed !== 0) {
    const k = Math.round(Math.log10(Math.abs(typed / value)));
    const t = numberTolerance(spec.value, spec.tolerance);
    if (Math.abs(k) >= 2 && Math.sign(typed) === Math.sign(value) && Math.abs(typed / 10 ** k - value) <= t * (1 + 1e-9))
      return { status: "wrong", hint: powerOfTenHint(k) };
  }
  return { status: "wrong" };
}

/** What to say when the typed number is the answer times 10^k. */
export function powerOfTenHint(k: number): string {
  return `The digits are right, but your number is 10${sup(Math.abs(k))} times too ${k > 0 ? "large" : "small"}. Check the power of ten: if the box asks for the value "in units of" a power of ten, type only the number in front of it.`;
}
const SUPER: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = (n: number) => String(n).replace(/./g, (c) => SUPER[c] ?? c);

// ---------------------------------------------------------------- formulas

const math = create(all, { predictable: true });
// Kept before the instance is locked: the only ways in are parseFormula and the compiled nodes it returns.
const parse = math.parse;
const blocked = (name: string) => () => {
  throw new Error(`${name} is not available`);
};
// mathjs's documented recipe for untrusted input: nothing typed can import, re-parse, evaluate text or make units.
math.import(
  {
    import: blocked("import"),
    createUnit: blocked("createUnit"),
    evaluate: blocked("evaluate"),
    parse: blocked("parse"),
    simplify: blocked("simplify"),
    derivative: blocked("derivative"),
    reviver: blocked("reviver"),
  },
  { override: true },
);

/** Functions a reader may type. `ln` is the natural logarithm, as is `log` with one argument. */
export const FUNCTIONS: Record<string, (...x: number[]) => number> = {
  sqrt: Math.sqrt, cbrt: Math.cbrt, exp: Math.exp, abs: Math.abs,
  ln: Math.log, log: (x, base) => (base === undefined ? Math.log(x) : Math.log(x) / Math.log(base)), log10: Math.log10, log2: Math.log2,
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, asinh: Math.asinh, acosh: Math.acosh, atanh: Math.atanh,
};
const OPERATORS = new Set(["add", "subtract", "multiply", "divide", "pow", "unaryMinus", "unaryPlus"]);
const CONSTANTS: Record<string, number> = { pi: Math.PI };

export type Formula = {
  /** The value at a point; NaN when it has none there (a root of a negative number, a division by zero). */
  at: (point: Record<string, number>) => number;
  /** TeX for the preview; `names` maps typing names to their display ("vs" → "v_s"). */
  tex: (names?: Record<string, string>) => string;
  /** The symbols used. */
  symbols: string[];
};
export type Parsed = { ok: true; formula: Formula } | { ok: false; message: string };

/** What the reader may type instead of the plain signs. */
function normalise(text: string): string {
  return text
    .replace(/[−–]/g, "-")
    .replace(/[×·⋅]/g, "*")
    .replace(/÷/g, "/")
    .replace(/\*\*/g, "^")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/√/g, "sqrt")
    .replace(/π/g, "pi");
}

/**
 * Takes off braces that group nothing in mathjs's TeX ({v}^{2}, {x_0}, {\Delta x}): KaTeX draws the same either way,
 * but read-aloud (lib/speech.ts) reads a fraction only once its parts hold no bare braces, so with them it lost
 * "over" ("v squared (2 times d )"). A brace pair is bare when it is not the argument of a command (\frac{…},
 * \sqrt{…}), of ^ or _, or the second argument after another group (\frac{a}{b}). Its content is kept apart from
 * what follows by a space when that content ends in a command name.
 */
export function bareBraces(tex: string): string {
  let out = tex;
  for (let pass = 0; pass < 8; pass++) {
    let changed = false;
    let result = "";
    let i = 0;
    while (i < out.length) {
      const ch = out[i];
      if (ch === "{") {
        // Find the matching brace.
        let depth = 0, j = i;
        for (; j < out.length; j++) {
          if (out[j] === "{") depth++;
          else if (out[j] === "}" && --depth === 0) break;
        }
        const before = result.replace(/\s+$/, "");
        const prev = before.slice(-1);
        const isArgument = /[A-Za-z^_}]/.test(prev) && !/\\(?:cdot|times|div|pm|mp|left|right)$/.test(before);
        const inner = out.slice(i + 1, j);
        const next = out.slice(j + 1).replace(/^\s+/, "")[0] ?? "";
        // A base that has its own script before another one needs its braces: {v^\theta}^{2}, not v^\theta^{2}.
        // Only a script at the group's own level counts, not one inside a bracket or a nested group.
        const topLevel = inner.replace(/\\left[\s\S]*\\right./g, "").replace(/\{[^{}]*\}/g, "");
        // Only the same kind of script clashes: v_0^{2} is fine, v^\theta^{2} is not.
        const scriptedBase = (next === "^" || next === "_") && topLevel.includes(next);
        if (!isArgument && j < out.length && !scriptedBase) {
          result += /\\[A-Za-z]+$/.test(inner) && /[A-Za-z]/.test(next) ? inner + " " : inner;
          i = j + 1;
          changed = true;
          continue;
        }
      }
      result += ch;
      i++;
    }
    out = result;
    if (!changed) break;
  }
  return out;
}

/** Reads a typed formula that may use only the symbols in `allowed`. Never throws. */
export function parseFormula(text: string, allowed: string[]): Parsed {
  const source = normalise(text).trim();
  if (!source) return { ok: false, message: "Type a formula first." };
  if (source.length > 300) return { ok: false, message: "That formula is too long." };
  let root: MathNode;
  try {
    root = parse(source);
  } catch {
    return { ok: false, message: "I cannot read that formula. Check the brackets and the signs." };
  }
  const symbols = new Set<string>();
  const list = allowed.join(", ");
  const problem = (node: any): string | null => {
    switch (node.type) {
      case "ConstantNode":
        return typeof node.value === "number" ? null : "Use numbers and symbols only.";
      case "SymbolNode":
        if (allowed.includes(node.name)) return symbols.add(node.name), null;
        if (node.name in CONSTANTS) return null;
        if (node.name in FUNCTIONS) return `Write ${node.name}( ) with brackets after it.`;
        return `I don't know the symbol ${node.name}. Use: ${list}.`;
      case "ParenthesisNode":
        return problem(node.content);
      case "OperatorNode":
        if (!OPERATORS.has(node.fn)) return `The sign ${node.op} cannot be used here.`;
        return node.args.map(problem).find(Boolean) ?? null;
      case "FunctionNode": {
        const name = node.fn?.name as string | undefined;
        if (name && allowed.includes(name)) return `Write a * sign between ${name} and the bracket: ${name}*( ).`;
        if (!name || !(name in FUNCTIONS)) return `I don't know the function ${name ?? "written there"}.`;
        return node.args.map(problem).find(Boolean) ?? null;
      }
      default:
        return "Use numbers, symbols, + - * / ^ and brackets only.";
    }
  };
  const message = problem(root);
  if (message) return { ok: false, message };
  const code = root.compile();
  return {
    ok: true,
    formula: {
      symbols: [...symbols],
      at: (point) => {
        try {
          const v = code.evaluate({ ...FUNCTIONS, ...CONSTANTS, ...point });
          return typeof v === "number" && Number.isFinite(v) ? v : NaN;
        } catch {
          return NaN;
        }
      },
      tex: (names = {}) =>
        bareBraces(
          root
            .toTex({
              parenthesis: "keep",
              implicit: "hide",
              // Braces, so a name such as a_0 can never run into the TeX before it (\cdot{a_0}, not \cdota_0);
              // bareBraces takes them off again where nothing can run into the name.
              handler: (node: any) => (node.type === "SymbolNode" && names[node.name] ? `{${names[node.name]}}` : undefined),
            })
            // mathjs writes its operators with no space after them ("2\cdotm"), which KaTeX reads as one unknown
            // command: put a space after every operator command that a letter, digit or brace follows.
            .replace(/\\(cdot|times|div|pm|mp)(?=[A-Za-z0-9{])/g, "\\$1 ")
            .replace(/\\mathrm\{ln\}/g, "\\ln"),
        ),
    },
  };
}

export type Ranges = Record<string, [number, number]>;
export type FormulaSpec = {
  expr: string;
  vars: Ranges;
  mistakes?: { expr: string; hint: string }[];
  /** Second valid readings (docs/ANSWER-BOX-FIX-PLAN.md Step 4): correct too, with their note. */
  alsoAccept?: { expr: string; note?: string }[];
};

/** A small seeded generator (mulberry32), so content:check samples the same points on every run. */
export function seeded(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function samplePoints(vars: Ranges, n: number, random: () => number = Math.random): Record<string, number>[] {
  return Array.from({ length: n }, () =>
    Object.fromEntries(Object.entries(vars).map(([k, [lo, hi]]) => [k, lo + (hi - lo) * random()])),
  );
}

/** Two values agree to 1 part in 10⁶ (design §4). */
export const agree = (a: number, b: number) =>
  Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-6 * Math.max(Math.abs(a), Math.abs(b)) + 1e-12;

/** Whether two formulas agree at every point. */
export function sameFormula(a: Formula, b: Formula, points: Record<string, number>[]): boolean {
  return points.every((p) => agree(a.at(p), b.at(p)));
}

/** Marks a typed formula against the answer: right, a listed mistake (with its hint), wrong, or unreadable. */
export function checkFormula(input: string, spec: FormulaSpec, random: () => number = Math.random, n = 5): Verdict {
  const allowed = Object.keys(spec.vars);
  const typed = parseFormula(input, allowed);
  if (!typed.ok) return { status: "invalid", message: typed.message };
  const answer = parseFormula(spec.expr, allowed);
  if (!answer.ok) return { status: "invalid", message: "This answer cannot be checked. Please report the mistake." };
  const points = samplePoints(spec.vars, n, random);
  if (sameFormula(typed.formula, answer.formula, points)) return { status: "correct" };
  for (const a of spec.alsoAccept ?? []) {
    const other = parseFormula(a.expr, allowed);
    if (other.ok && sameFormula(typed.formula, other.formula, points)) return { status: "correct", note: a.note };
  }
  for (const m of spec.mistakes ?? []) {
    const wrong = parseFormula(m.expr, allowed);
    if (wrong.ok && sameFormula(typed.formula, wrong.formula, points)) return { status: "wrong", hint: m.hint };
  }
  return { status: "wrong" };
}

/** For content:check (design §8): what is wrong with a formula answer as written on the page; empty when sound. */
export function auditFormula(spec: FormulaSpec, n = 20): string[] {
  const out: string[] = [];
  const allowed = Object.keys(spec.vars ?? {});
  for (const [k, r] of Object.entries(spec.vars ?? {}))
    if (!Array.isArray(r) || r.length !== 2 || !r.every(Number.isFinite) || !(r[0] < r[1])) out.push(`vars.${k} must be a range [low, high]`);
  const answer = parseFormula(spec.expr, allowed);
  if (!answer.ok) return [...out, `expr "${spec.expr}": ${answer.message} (every symbol needs a range in vars)`];
  if (out.length) return out;
  // A name the answer does not use is allowed when a listed mistake does: with the answer "0", the reader may
  // still type the speeds of the problem.
  const inMistakes = (spec.mistakes ?? []).flatMap((m) => {
    const parsed = parseFormula(m.expr, allowed);
    return parsed.ok ? parsed.formula.symbols : [];
  });
  const unused = allowed.filter((k) => !answer.formula.symbols.includes(k) && !inMistakes.includes(k));
  if (unused.length) out.push(`vars lists ${unused.join(", ")}, which neither expr nor a listed mistake uses`);
  const points = samplePoints(spec.vars, n, seeded(286));
  const bad = points.find((p) => !Number.isFinite(answer.formula.at(p)));
  if (bad) out.push(`expr is not finite at ${JSON.stringify(bad)}: narrow the ranges in vars`);
  (spec.mistakes ?? []).forEach((m, i) => {
    const wrong = parseFormula(m.expr, allowed);
    if (!wrong.ok) out.push(`mistakes[${i}] "${m.expr}": ${wrong.message}`);
    else if (!points.some((p) => !agree(wrong.formula.at(p), answer.formula.at(p)))) out.push(`mistakes[${i}] "${m.expr}" equals the answer itself`);
    if (!m.hint?.trim()) out.push(`mistakes[${i}] needs a hint`);
  });
  (spec.alsoAccept ?? []).forEach((a, i) => {
    const other = parseFormula(a.expr, allowed);
    if (!other.ok) return void out.push(`alsoAccept[${i}] "${a.expr}": ${other.message}`);
    if (points.some((p) => !Number.isFinite(other.formula.at(p)))) out.push(`alsoAccept[${i}] "${a.expr}" is not finite in the ranges of vars`);
    if (!points.some((p) => !agree(other.formula.at(p), answer.formula.at(p)))) out.push(`alsoAccept[${i}] "${a.expr}" equals the answer itself`);
    (spec.mistakes ?? []).forEach((m, j) => {
      const wrong = parseFormula(m.expr, allowed);
      if (wrong.ok && !points.some((p) => !agree(wrong.formula.at(p), other.formula.at(p))))
        out.push(`alsoAccept[${i}] "${a.expr}" equals mistakes[${j}]: a box cannot accept and reject the same formula`);
    });
    if (!a.note?.trim()) out.push(`alsoAccept[${i}] needs a note, shown when the reader types it`);
  });
  return out;
}
