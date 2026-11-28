/**
 * Tests of the answer checker of problem sets (lib/answers.ts): numbers, formulas compared by value, listed
 * mistakes, and input that must be refused. Run by `npm run test:answers`; needs no browser and no running site.
 */
import { auditFormula, checkFormula, checkNumber, parseFormula, parseNumber, seeded, type FormulaSpec } from "../lib/answers";
import { scoreSet } from "../lib/progress";
import { speechGaps, texToSpeech } from "../lib/speech";
import katex from "katex";

let failed = 0;
let count = 0;
function test(name: string, ok: boolean, got?: unknown) {
  count++;
  if (ok) return;
  failed++;
  console.error(`✗ ${name}${got === undefined ? "" : `: got ${JSON.stringify(got)}`}`);
}
const near = (a: number | null, b: number) => a !== null && Math.abs(a - b) <= 1e-12 * Math.abs(b);

// Numbers: the ways a reader may type one.
for (const [typed, value] of [
  ["9.7", 9.7],
  ["9,7", 9.7],
  ["1.2e5", 1.2e5],
  ["1.2 × 10^5", 1.2e5],
  ["1.2 x 10^-3", 1.2e-3],
  ["−3", -3],
  ["10^4", 1e4],
] as [string, number][])
  test(`parseNumber("${typed}")`, near(parseNumber(typed), value), parseNumber(typed));
for (const typed of ["", "abc", "1.2.3", "2 apples"]) test(`parseNumber("${typed}") is refused`, parseNumber(typed) === null, parseNumber(typed));

// Number answers: default tolerance is half a unit in the last printed digit; a percentage widens it.
test("number: exact", checkNumber("9.7", { value: "9.7" }).status === "correct");
test("number: within the printed digit", checkNumber("9.74", { value: "9.7" }).status === "correct");
test("number: outside the printed digit", checkNumber("9.8", { value: "9.7" }).status === "wrong");
test("number: 2% tolerance, inside", checkNumber("9.85", { value: "9.7", tolerance: "2%" }).status === "correct");
test("number: 2% tolerance, outside", checkNumber("10", { value: "9.7", tolerance: "2%" }).status === "wrong");
test("number: unreadable entry is not a try", checkNumber("about ten", { value: "9.7" }).status === "invalid");

// Formula answers: the pilot's answer, z = (vs + vo)/(u − vo).
const spec: FormulaSpec = {
  expr: "(vs + vo)/(u - vo)",
  vars: { u: [300, 400], vs: [1, 50], vo: [1, 50] },
  mistakes: [
    { expr: "(u + vs)/(u - vo)", hint: "That is 1 + z." },
    { expr: "(vs + vo)/u", hint: "Second moving source." },
  ],
};
const check = (input: string, s: FormulaSpec = spec) => checkFormula(input, s, seeded(7));
for (const typed of [
  "(vs + vo)/(u - vo)",
  "(vo+vs)/(u-vo)",
  "(u + vs)/(u - vo) - 1",
  "(vs/u + vo/u)/(1 - vo/u)",
  "(vs + vo) * (u - vo)^-1",
  "(vs+vo)÷(u−vo)",
  "(VS + VO)/(U - VO)".toLowerCase(),
])
  test(`formula: equivalent form "${typed}"`, check(typed).status === "correct", check(typed));
for (const typed of ["(vs + vo)/(u + vo)", "vs/u", "(vs + vo)/(u - vo) + 1e-3", "0"]) test(`formula: wrong "${typed}"`, check(typed).status === "wrong", check(typed));
{
  const v = check("(u + vs)/(u - vo)");
  test("formula: a listed mistake gives its hint", v.status === "wrong" && v.hint === "That is 1 + z.", v);
  const w = check("vs/u + vo/u");
  test("formula: a listed mistake in another form gives its hint", w.status === "wrong" && w.hint === "Second moving source.", w);
  const x = check("vs/u");
  test("formula: an unlisted mistake gives no hint", x.status === "wrong" && !x.hint, x);
}

// Functions and constants that are allowed.
const rel: FormulaSpec = { expr: "sqrt((1 + b)/(1 - b)) - 1", vars: { b: [0.1, 0.9] } };
test("formula: sqrt and a power form agree", check("((1+b)/(1-b))^(1/2) - 1", rel).status === "correct");
test("formula: (1+b)/sqrt(1-b^2) - 1 agrees", check("(1+b)/sqrt(1-b^2) - 1", rel).status === "correct");
test("formula: exp, ln and pi are known", check("exp(ln(b)) + pi - pi", { expr: "b", vars: { b: [0.1, 0.9] } }).status === "correct");

// Refused input: never evaluated, never counted as a try.
for (const typed of [
  "",
  "evaluate(\"1\")",
  "parse(\"vs\")",
  "import({})",
  "simplify(vs)",
  "derivative(vs, vs)",
  "createUnit(\"foo\")",
  "vs = 5",
  "f(x) = x",
  "vs; vo",
  "x + vs",
  "[vs, vo]",
  "{a: 1}",
  "\"text\"",
  "vs.constructor",
  "cos.constructor(\"return 1\")()",
  "5 cm",
  "vs +",
  "(vs + vo",
  "v".repeat(400),
]) {
  const v = check(typed);
  test(`refused: ${JSON.stringify(typed.slice(0, 40))}`, v.status === "invalid", v);
}
{
  const p = parseFormula("x + vs", ["vs"]);
  test("unknown symbol is named in the message", !p.ok && /x/.test(p.message), p);
}

// The audit used by content:check.
test("audit: a sound answer has no findings", auditFormula(spec).length === 0, auditFormula(spec));
test("audit: a name without a range is reported", auditFormula({ expr: "vs/u", vars: { vs: [1, 2] } }).length > 0);
test("audit: a range that nothing uses is reported", auditFormula({ expr: "vs/u", vars: { vs: [1, 2], u: [3, 4], w: [1, 2] } }).length > 0);
test("audit: a constant answer may list the names its mistakes use", auditFormula({ expr: "0", vars: { v: [1, 2], u: [3, 4] }, mistakes: [{ expr: "v/u", hint: "x" }] }).length === 0);
test("audit: a mistake equal to the answer is reported", auditFormula({ ...spec, mistakes: [{ expr: "(vo + vs)/(u - vo)", hint: "x" }] }).length > 0);
test("audit: an answer that is not finite in its ranges is reported", auditFormula({ expr: "sqrt(b - 2)", vars: { b: [0, 1] } }).length > 0);

// The "You typed" preview (docs/ANSWER-BOX-FIX-PLAN.md): the owner's two formulas from Ferreras Set 5 and plain
// products, which once came out as \cdota_0 and \cdotm (red in KaTeX) and lost "over" in "In words".
{
  const preview = (expr: string, vars: string[], names: Record<string, string> = {}) => {
    const p = parseFormula(expr, vars);
    return p.ok ? p.formula.tex(names) : "";
  };
  const cases: [string, string[], Record<string, string>, string[]][] = [
    ["2*pi*(G*M*a)^(1/2)/c^2", ["G", "M", "a", "c"], { a: "a_0" }, ["a nought", "over"]],
    ["4*m*v^2*M/(m+M)^2", ["m", "v", "M"], { M: "m_N" }, ["m sub N", "over"]],
    ["2*m1*m2*g/(m1 + m2)", ["m1", "m2", "g"], { m1: "m_1", m2: "m_2" }, ["m one times m two times g", "over"]],
    ["v^2/(2*d)", ["v", "d"], {}, ["v squared over", "2 times d"]],
    ["(x - x0)/t", ["x", "x0", "t"], { x0: "x_0" }, ["x nought", "over t"]],
    ["-(vth^2 + vph^2)/r", ["vth", "vph", "r"], { vth: "v^\\theta", vph: "v^\\phi" }, ["over r"]],
  ];
  for (const [expr, vars, names, words] of cases) {
    const tex = preview(expr, vars, names);
    let renders = true;
    try {
      katex.renderToString(tex, { throwOnError: true });
    } catch {
      renders = false;
    }
    test(`preview of ${expr} renders`, renders && !/\\(?:cdot|times)[A-Za-z0-9]/.test(tex), tex);
    const spoken = texToSpeech(tex);
    for (const w of words) test(`"In words" for ${expr} says "${w}"`, spoken.includes(w), spoken);
    test(`"In words" for ${expr} has no gaps`, speechGaps(tex).length === 0, speechGaps(tex));
  }
}

// Scores (lib/progress.ts): revealed answers earn nothing, "Partly" earns half, optional problems only add.
{
  const e = (ok: boolean, revealed = false) => ({ ok, revealed, tries: 1, at: "" });
  const units = [
    { id: "p1", points: 15, optional: false, answers: ["p1-z"] },
    { id: "p2-a", points: 5, optional: false, answers: [] },
    { id: "p3", points: 10, optional: true, answers: ["p3-x"] },
  ];
  const s1 = scoreSet(units, { "p1-z": e(true) });
  test("score: 15 of 20 is done at 75%", s1.earned === 15 && s1.total === 20 && s1.done, s1);
  const s2 = scoreSet(units, { "p1-z": e(true, true), "p2-a": { self: "got", revealed: true, tries: 0, at: "" } });
  test("score: an answer revealed first earns nothing", s2.earned === 5 && !s2.done, s2);
  const s3 = scoreSet(units, { "p1-z": e(true), "p2-a": { self: "partly", revealed: true, tries: 0, at: "" }, "p3-x": e(true) });
  test("score: partly is half, optional adds", s3.earned === 27.5 && s3.extra === 10 && s3.total === 20, s3);
  test("score: nothing tried", scoreSet(units).earned === 0 && !scoreSet(units).done);
}

if (failed) {
  console.error(`\n${failed} of ${count} answer tests failed`);
  process.exit(1);
}
console.log(`answer tests: ${count} passed`);
