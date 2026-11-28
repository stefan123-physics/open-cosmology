/**
 * Checks the problem-set components on a page (docs/PROBLEM-SETS-DESIGN.md §8), with the answer-checking code the
 * browser uses (lib/answers.ts):
 *  - exercise and answer ids are unique on the page; an <Answer> sits inside an <Exercise>;
 *  - every <Exercise> has a <Solution>; the points of its parts add up to its own;
 *  - a number answer names a calc in the page's calcs file whose `expected` is the same number;
 *  - a formula answer has a range for every symbol, is finite at 20 sample points, and every listed mistake differs
 *    from it there;
 *  - a choice answer marks one of its choices;
 *  - the "You typed" preview of a formula answer and of each listed mistake renders in KaTeX without an error, has
 *    no operator glued to a letter (\cdotm), and is fully spoken in "In words" (no read-aloud gap, no backslash
 *    left): the preview a reader sees is built by the same code (lib/answers.ts tex, lib/speech.ts).
 * Run by `npm run content:check`.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import * as runtime from "react/jsx-runtime";
import { createElement, Fragment, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { Page } from "./content";
import katex from "katex";
import { auditFormula, numberTolerance, parseFormula, parseNumber } from "./answers";
import { speechGaps, texToSpeech } from "./speech";

/** What is wrong with the preview of one typed formula (empty when it is fine). */
export function previewProblems(expr: string, vars: Record<string, unknown>, names: Record<string, string> = {}): string[] {
  const parsed = parseFormula(expr, Object.keys(vars));
  if (!parsed.ok) return [];
  const tex = parsed.formula.tex(names);
  const out: string[] = [];
  try {
    katex.renderToString(tex, { throwOnError: true });
  } catch (e) {
    out.push(`preview does not render (${(e as Error).message.split("\n")[0].slice(0, 80)})`);
  }
  if (/\\(?:cdot|times|div|pm|mp)[A-Za-z0-9]/.test(tex)) out.push("preview glues an operator to a letter");
  const gaps = speechGaps(tex);
  if (gaps.length) out.push(`"In words" cannot say ${gaps.join(" ")}`);
  else if (texToSpeech(tex).includes("\\")) out.push('"In words" keeps a TeX command');
  return out.map((m) => `${m}: ${tex}`);
}

type Props = Record<string, any> & { children?: ReactNode };
type Ex = { props: Props; solutions: number; partPoints: number[]; answers: Props[] };

const TAGS = /<(Exercise|Part|Hint|Solution|Answer)\b/;
const OTHERS = ["Formula", "Plot", "PhET", "WorkedExample", "Step", "Problem", "VectorDiagram", "Callout", "ExpansionDiagram", "ParallaxDiagram", "Hint"];

/** The calcs of a page, by id (calcs/<course>/<slug>.yaml), read with the YAML parser the pages use. */
function pageCalcs(page: Page): Map<string, Record<string, unknown>> | null {
  const file = path.join("calcs", page.course, `${page.slug}.yaml`);
  if (!fs.existsSync(file)) return null;
  const data = matter(`---\n${fs.readFileSync(file, "utf8")}\n---\n`).data as { calcs?: Record<string, unknown>[] };
  return new Map((data.calcs ?? []).map((c) => [String(c.id), c]));
}

/** Everything wrong with the exercises of one page; empty when sound. Also returns how many exercises it has. */
export async function checkExercises(page: Page): Promise<{ errors: string[]; warnings: string[]; exercises: number }> {
  if (!TAGS.test(page.body)) return { errors: [], warnings: [], exercises: 0 };
  const errors: string[] = [];
  const done: Ex[] = [];
  let current: Ex | null = null;
  const [{ evaluate }, { default: remarkMath }, { default: remarkGfm }] = await Promise.all([
    import("@mdx-js/mdx"),
    import("remark-math"),
    import("remark-gfm"),
  ]);
  const { default: Content } = await evaluate(page.body, { ...(runtime as any), remarkPlugins: [remarkGfm, remarkMath], development: false });
  const passThrough = ({ children }: Props) => createElement(Fragment, null, children ?? null);
  const components: Record<string, unknown> = Object.fromEntries(OTHERS.map((k) => [k, passThrough]));
  // Rendering is depth-first, so everything between an exercise's start and its End marker belongs to it.
  const End = () => {
    if (current) done.push(current);
    current = null;
    return null;
  };
  components.Exercise = (props: Props) => {
    if (current) errors.push(`<Exercise id="${props.id}"> sits inside another <Exercise>`);
    current = { props, solutions: 0, partPoints: [], answers: [] };
    return createElement(Fragment, null, props.children ?? null, createElement(End));
  };
  components.Part = (props: Props) => {
    if (!current) errors.push(`<Part label="${props.label}"> outside an <Exercise>`);
    else if (typeof props.points === "number") current.partPoints.push(props.points);
    if (!props.label) errors.push("<Part> needs a label");
    return passThrough(props);
  };
  components.Solution = (props: Props) => {
    if (current) current.solutions++;
    else errors.push("<Solution> outside an <Exercise>");
    return passThrough(props);
  };
  components.Answer = (props: Props) => {
    if (current) current.answers.push(props);
    else errors.push(`<Answer id="${props.id}"> outside an <Exercise>`);
    return null;
  };
  try {
    renderToStaticMarkup(createElement(Content as any, { components }));
  } catch (e) {
    return { errors: [`exercises could not be read: ${(e as Error).message.slice(0, 200)}`], warnings: [], exercises: 0 };
  }

  const ids = new Set<string>();
  const unique = (what: string, id: unknown) => {
    if (typeof id !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) return void errors.push(`${what} needs an id of lowercase words and hyphens (got ${JSON.stringify(id)})`);
    if (ids.has(id)) errors.push(`id "${id}" is used twice on the page`);
    ids.add(id);
  };
  let calcs: ReturnType<typeof pageCalcs> | undefined;
  const untoleranced: string[] = [];
  const slipBoxes: string[] = [];
  const roundBoxes: string[] = [];
  const unscaled: string[] = [];
  for (const ex of done) {
    const name = `<Exercise id="${ex.props.id}">`;
    unique("<Exercise>", ex.props.id);
    if (!ex.props.title) errors.push(`${name} needs a title`);
    if (ex.solutions === 0) errors.push(`${name} has no <Solution>`);
    if (ex.partPoints.length) {
      const sum = ex.partPoints.reduce((a, b) => a + b, 0);
      if (ex.props.points !== sum) errors.push(`${name}: its parts have ${sum} points, the exercise says ${ex.props.points ?? "none"}`);
    }
    for (const a of ex.answers) {
      const an = `<Answer id="${a.id}">`;
      unique("<Answer>", a.id);
      const types = ["value", "expr", "choices"].filter((k) => a[k] !== undefined);
      if (types.length !== 1) {
        errors.push(`${an} needs exactly one of value (a number), expr (a formula) or choices`);
        continue;
      }
      if (types[0] === "value") {
        const value = parseNumber(String(a.value));
        if (value === null) errors.push(`${an}: value "${a.value}" is not a number`);
        calcs ??= pageCalcs(page);
        const calc = a.calc ? calcs?.get(a.calc) : undefined;
        if (!a.calc) errors.push(`${an}: a number answer needs calc="…", the id of the calculation that recomputes it`);
        else if (!calc) errors.push(`${an}: calc "${a.calc}" is not in calcs/${page.course}/${page.slug}.yaml`);
        else if (parseNumber(String(calc.expected ?? "").trim().split(/\s+/)[0]) !== value)
          errors.push(`${an}: value ${a.value} differs from expected "${calc.expected}" of calc "${a.calc}"`);
        if (a.tolerance !== undefined && !/^\s*[\d.]+\s*%?\s*$/.test(String(a.tolerance))) errors.push(`${an}: tolerance must be like "2%" or "0.01"`);
        // Without a tolerance a box accepts half a unit of the last printed digit, which can let a wrong value
        // through ("1" accepts 0.6 to 1.4): docs/ANSWER-BOX-FIX-PLAN.md Step 5.
        if (a.tolerance === undefined) untoleranced.push(String(a.id));
        // Both forms (scale) and listed mistakes on number boxes (owner decisions 2026-11-28, B's change request).
        const interval = (v: string, t: unknown) => {
          const c = parseNumber(v);
          return c === null ? null : ([c, numberTolerance(v, t === undefined ? undefined : String(t))] as const);
        };
        const correct = [interval(String(a.value), a.tolerance), ...((a.alsoAccept ?? []) as Record<string, unknown>[]).map((o) => interval(String(o.value ?? ""), o.tolerance))].filter(Boolean) as (readonly [number, number])[];
        if (a.scale !== undefined) {
          const s = parseNumber(String(a.scale));
          if (s === null || !(s > 0)) errors.push(`${an}: scale "${a.scale}" must be a positive number such as "1e-11", "1e6" or "0.01"`);
        } else if (asksScaledUnit(String(a.label ?? ""), String(a.unit ?? ""))) unscaled.push(String(a.id));
        for (const [i, m] of ((a.mistakes ?? []) as Record<string, unknown>[]).entries()) {
          const mi = interval(String(m.value ?? ""), m.tolerance);
          if (!mi) {
            errors.push(`${an}: mistakes[${i}] needs a value that is a number (formula mistakes belong to formula boxes)`);
            continue;
          }
          if (!String(m.hint ?? "").trim()) errors.push(`${an}: mistakes[${i}] needs a hint`);
          if (correct.some(([c, t]) => Math.abs(c - mi[0]) <= t + mi[1])) errors.push(`${an}: mistakes[${i}] value ${m.value} overlaps an accepted interval, so the box would accept and reject it at once`);
          const mc = m.calc ? calcs?.get(String(m.calc)) : undefined;
          if (!m.calc) errors.push(`${an}: mistakes[${i}] needs calc="…", the id of the calculation that recomputes the wrong value`);
          else if (!mc) errors.push(`${an}: mistakes[${i}] calc "${m.calc}" is not in calcs/${page.course}/${page.slug}.yaml`);
          else if (parseNumber(String(mc.expected ?? "").trim().split(/\s+/)[0]) !== mi[0])
            errors.push(`${an}: mistakes[${i}] value ${m.value} differs from expected "${mc.expected}" of calc "${m.calc}"`);
        }
        // The tolerance rule (docs/CONTENT_GUIDE.md "Problem sets", owner decision 2026-11-28): no obvious slip may
        // be accepted, and a correct answer to 3 significant figures must be. Warnings while existing boxes are fixed.
        if (value !== null) {
          const tol = numberTolerance(String(a.value), a.tolerance === undefined ? undefined : String(a.tolerance));
          const inside = (x: number) => Math.abs(x - value) <= tol * (1 + 1e-9);
          if (value !== 0) {
            const slips: [string, number][] = [["sign", -value], ["×2", 2 * value], ["×½", value / 2], ["×10", 10 * value], ["×⅒", value / 10], ["×π", Math.PI * value], ["÷π", value / Math.PI]];
            const caught = slips.filter(([, x]) => inside(x)).map(([s]) => s);
            if (caught.length) slipBoxes.push(`${a.id} (${caught.join(", ")})`);
            const three = Number(value.toPrecision(3));
            if (!inside(three) && !/significant|digits|decimal/i.test(String(a.label ?? ""))) roundBoxes.push(String(a.id));
          } else if (a.tolerance !== undefined && String(a.tolerance).includes("%")) slipBoxes.push(`${a.id} (a percentage of 0 accepts nothing but 0)`);
        }
        // Second valid readings (Step 4): a number, a tolerance, a note, and a calc that recomputes the number.
        for (const [i, o] of ((a.alsoAccept ?? []) as Record<string, unknown>[]).entries()) {
          const ov = parseNumber(String(o.value ?? ""));
          if (ov === null) errors.push(`${an}: alsoAccept[${i}] needs a value that is a number`);
          if (o.tolerance !== undefined && !/^\s*[\d.]+\s*%?\s*$/.test(String(o.tolerance))) errors.push(`${an}: alsoAccept[${i}].tolerance must be like "2%" or "0.01"`);
          if (!String(o.note ?? "").trim()) errors.push(`${an}: alsoAccept[${i}] needs a note, shown when the reader types it`);
          const oc = o.calc ? calcs?.get(String(o.calc)) : undefined;
          if (!o.calc) errors.push(`${an}: alsoAccept[${i}] needs calc="…", the id of the calculation that recomputes it`);
          else if (!oc) errors.push(`${an}: alsoAccept[${i}] calc "${o.calc}" is not in calcs/${page.course}/${page.slug}.yaml`);
          else if (ov !== null && parseNumber(String(oc.expected ?? "").trim().split(/\s+/)[0]) !== ov)
            errors.push(`${an}: alsoAccept[${i}] value ${o.value} differs from expected "${oc.expected}" of calc "${o.calc}"`);
        }
      } else if (types[0] === "expr") {
        if (!a.vars || typeof a.vars !== "object") errors.push(`${an}: a formula answer needs vars, a range for every symbol`);
        else for (const m of auditFormula({ expr: String(a.expr), vars: a.vars, mistakes: a.mistakes, alsoAccept: a.alsoAccept })) errors.push(`${an}: ${m}`);
        for (const k of Object.keys(a.names ?? {})) if (!(k in (a.vars ?? {}))) errors.push(`${an}: names.${k} is not a symbol in vars`);
        if (a.vars && typeof a.vars === "object")
          for (const e of [String(a.expr), ...((a.mistakes ?? []) as { expr: string }[]).map((m) => String(m.expr))])
            for (const m of previewProblems(e, a.vars, a.names ?? {})) errors.push(`${an}: ${e === String(a.expr) ? "answer" : `mistake ${e}`}: ${m}`);
      } else if (!Array.isArray(a.choices) || a.choices.length < 2 || !Number.isInteger(a.answer) || a.answer < 0 || a.answer >= a.choices.length)
        errors.push(`${an}: choices needs two or more entries and answer the index of the right one`);
    }
  }
  const warnings: string[] = untoleranced.length
    ? [`${untoleranced.length} number box${untoleranced.length > 1 ? "es have" : " has"} no tolerance (${untoleranced.slice(0, 6).join(", ")}${untoleranced.length > 6 ? ", …" : ""}): give each one, so a wrong value cannot pass on the printed digits alone`]
    : [];
  const list = (ids: string[]) => `${ids.slice(0, 5).join("; ")}${ids.length > 5 ? `; and ${ids.length - 5} more` : ""}`;
  if (slipBoxes.length) warnings.push(`${slipBoxes.length} number box${slipBoxes.length > 1 ? "es accept" : " accepts"} an obvious slip (tolerance rule, docs/CONTENT_GUIDE.md): ${list(slipBoxes)}`);
  if (roundBoxes.length) warnings.push(`${roundBoxes.length} number box${roundBoxes.length > 1 ? "es reject" : " rejects"} the answer rounded to 3 significant figures without asking for more digits in the label: ${list(roundBoxes)}`);
  if (unscaled.length) warnings.push(`${unscaled.length} number box${unscaled.length > 1 ? "es ask" : " asks"} for a scaled unit (a power of ten, millions, a percentage) but ${unscaled.length > 1 ? "have" : "has"} no scale, so the full number is rejected: ${list(unscaled)}`);
  return { errors, warnings, exercises: done.length };
}

/**
 * Does a number box ask for its value in a scaled unit (so it should have `scale`)? Account B's rule (2026-11-28):
 * only "in units of 10^k", a unit that starts "× 10", "in millions/billions/thousands" or an answer that is a percentage.
 * Not "(tolerance 1%)", a power of ten that belongs to a given quantity ("at 5 × 10^14 Hz") or "10% too large".
 */
export function asksScaledUnit(label: string, unit: string): boolean {
  const l = label.replace(/\(?\s*tolerance\s*[\d.]+\s*(\?%)\s*\)?/gi, " ");
  if (/in units of\s*\$?\s*(\left\(|\{)?\s*10\s*\^/i.test(l)) return true;
  if (/\bin (thousands|millions|billions|trillions)\b/i.test(l)) return true;
  if (/\bin (\?%|per ?cent)|\bas a percentage\b|\bpercentage\b|\(\s*\?%\s*\)/i.test(l)) return true;
  if (/^\s*\$?\s*(\times|×)\s*10/.test(unit)) return true;
  if (/^\s*(\?%|per ?cent)\s*$/i.test(unit)) return true;
  return false;
}
