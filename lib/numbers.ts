/**
 * The numbers inventory (docs/CALC_TESTS_PLAN.md §1): every number on a page that looks like a result,
 * where it is, and whether a calculation file covers it.
 *
 * A number "looks like a result" if it is a power of ten, has a decimal point or a ×10ⁿ factor, or has at
 * least two digits. Single digits (exponents, factors like ½ or 3) are structure, not results. Not counted at
 * all: citations (eq. (466), p. 12, slide 5, Lecture 12, Chapter 4, at="…"), years, links, and plot settings
 * (domain, range, sliders, curve expressions).
 *
 * Coverage:
 *   calc        the number lies inside text that a `shown` entry of calcs/<course>/<slug>.yaml quotes,
 *               so a calculation recomputes it;
 *   input       a calculation uses it as a given (H = 67.3 km/s/Mpc);
 *   plot-check  a marked plot point, checked by lib/plot-check.ts;
 *   no          not covered.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Page } from "./content";

export type Coverage = "calc" | "input" | "plot-check" | "no";

export type FoundNumber = {
  page: string;
  course: string;
  line: number;
  where: string; // "quiz 2", "worked example \"…\"", "section \"…\"", "plot caption", …
  text: string; // the number as written
  value: number;
  context: string;
  covered: Coverage;
};

// Group 1: a bare power of ten (10^{-28}). Groups 2–6: a number, optionally with decimals and a ×10ⁿ factor.
const NUMBER =
  /(?<![\w.\\{}^_\-−])(?:10\^\{?([-−]?\d+)\}?(?!\d)|(\d{1,3}(?:(?:\{,\}|,)\d{3})+(?!\d)|\d+)(\.\d+)?(\s*\\times\s*10\^\{?([-−]?\d+)\}?|\s*×\s*10\^?\{?([-−⁻]?[\d⁰¹²³⁴⁵⁶⁷⁸⁹]+)\}?)?)/g;

// Text just before a number that marks it as a citation or label, not a result.
const CITATION_BEFORE =
  /(eqs?\.\s*\(?|\(eqs?\.\s*|equations?\s*\(?|pp?\.\s*|slides?\s*|Lectures?\s*|Chapters?\s*|Lessons?\s*|sections?\s*|Problem Sets?\s*|Segments?\s*|§\s*|Table\s*|Fig(?:ure)?\.?\s*|\bno\.\s*|ApJ\s*|MNRAS\s*|Phys\.\s*Rev\.\s*\w*\s*|\b\d+\s*[,–-]\s*|8\.|18\.)$/i;

const SUPERSCRIPT: Record<string, string> = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-", "−": "-",
};

function parseNumber(m: RegExpMatchArray): number {
  if (m[1] !== undefined) return 10 ** Number(m[1].replace("−", "-"));
  const mant = Number(m[2].replace(/\{,\}|,/g, "") + (m[3] ?? ""));
  const expText = m[5] ?? m[6];
  if (!expText) return mant;
  return Number((mant * 10 ** Number([...expText].map((ch) => SUPERSCRIPT[ch] ?? ch).join(""))).toPrecision(12));
}

function looksLikeResult(m: RegExpMatchArray): boolean {
  if (m[1] !== undefined) return true; // 10ⁿ
  if (m[4] || m[3]) return true; // ×10ⁿ or a decimal point
  const digits = m[2].replace(/\{,\}|,/g, "");
  if (digits.length < 2) return false;
  const n = Number(digits);
  if (n >= 1600 && n <= 2099 && digits.length === 4) return false; // a year
  return true;
}

type CalcEntry = { shown?: string[]; inputs?: Record<string, unknown> };

function loadCalcs(calcsFile: string): CalcEntry[] {
  if (!fs.existsSync(calcsFile)) return [];
  return (matter(`---\n${fs.readFileSync(calcsFile, "utf8")}\n---\n`).data as { calcs?: CalcEntry[] }).calcs ?? [];
}

/** Leading number of a calcs value such as "67.3 km/s/Mpc" or 1.2e15. */
function leadingNumber(v: unknown): number | undefined {
  const m = String(v).match(/^\s*[-+]?\d+(?:\.\d+)?(?:e[-+]?\d+)?/i);
  return m ? Number(m[0]) : undefined;
}

/** Spans of the raw file that `shown` entries quote. */
function coveredSpans(raw: string, calcs: CalcEntry[]): [number, number][] {
  const spans: [number, number][] = [];
  for (const c of calcs)
    for (const s of c.shown ?? []) {
      let i = raw.indexOf(s);
      while (i >= 0) {
        spans.push([i, i + s.length]);
        i = raw.indexOf(s, i + 1);
      }
    }
  return spans;
}

export function pageNumbers(page: Page): FoundNumber[] {
  const raw = fs.readFileSync(page.file, "utf8");
  const calcs = loadCalcs(path.join("calcs", page.course, `${page.slug}.yaml`));
  const spans = coveredSpans(raw, calcs);
  const inputs = calcs
    .flatMap((c) => Object.values(c.inputs ?? {}).map(leadingNumber))
    .filter((n): n is number => n !== undefined);
  const out: FoundNumber[] = [];
  const lines = raw.split("\n");
  let offset = 0;
  let fence = 0; // frontmatter delimiters seen
  let fmKey = "";
  let quiz = -1;
  let card = -1;
  let where = "introduction";
  let example = "";
  let inPlot = false;

  lines.forEach((full, idx) => {
    const lineStart = offset;
    offset += full.length + 1;
    const line = full.replace(/\r$/, "");
    if (line.trim() === "---" && fence < 2) {
      fence++;
      return;
    }
    let scan = line;
    let loc = where;
    if (fence === 1) {
      // Frontmatter: only the summary, quiz, flashcards and leadsTo reasons can hold results.
      const key = line.match(/^([A-Za-z]+):/);
      if (key) fmKey = key[1];
      if (fmKey === "quiz" && /^\s+- question:/.test(line)) quiz++;
      if (fmKey === "flashcards" && /^\s+- front:/.test(line)) card++;
      if (fmKey === "summary") loc = "summary";
      else if (fmKey === "quiz") loc = `quiz ${quiz}`;
      else if (fmKey === "flashcards") loc = `flashcard ${card}`;
      else if (fmKey === "leadsTo" && /why:/.test(line)) loc = "leadsTo";
      else return;
      scan = line.replace(/^\s*(?:- )?(?:answer|course|lecture):.*$/, "");
    } else {
      const h = line.match(/^##+\s+(.*)/);
      if (h) where = `section "${h[1].trim()}"`;
      const we = line.match(/<WorkedExample\s+title="([^"]*)"/);
      if (we) example = we[1];
      loc = example ? `worked example "${example}"` : where;
      if (/<\/WorkedExample>/.test(line)) example = "";
      if (/<Plot\b/.test(line)) inPlot = true;
      if (inPlot) {
        if (/\/>\s*$/.test(line)) inPlot = false;
        const isCaption = /caption=/.test(line);
        const isPoints = /\{\s*x:\s*[-\d.]+,\s*y:/.test(line);
        if (!isCaption && !isPoints) return;
        loc = isCaption ? "plot caption" : "plot point";
      }
      // Blank out attributes and links that hold citations, ids or URLs (keeping offsets).
      scan = line
        .replace(/\b(?:at|cite|id|href|src)="[^"]*"/g, (s) => " ".repeat(s.length))
        .replace(/\]\([^)]*\)/g, (s) => " ".repeat(s.length))
        .replace(/https?:\/\/\S+/g, (s) => " ".repeat(s.length));
      if (loc === "plot point") scan = scan.replace(/label:\s*"[^"]*"/g, (s) => " ".repeat(s.length));
    }
    for (const m of scan.matchAll(NUMBER)) {
      if (!looksLikeResult(m)) continue;
      const before = scan.slice(Math.max(0, m.index! - 24), m.index!);
      if (CITATION_BEFORE.test(before)) continue;
      const abs = lineStart + m.index!;
      const value = parseNumber(m);
      const inShown = spans.some(([a, b]) => abs >= a && abs < b);
      const isInput = inputs.some((x) => Math.abs(x - value) <= 1e-9 * Math.max(1, Math.abs(value)));
      out.push({
        page: page.slug,
        course: page.course,
        line: idx + 1,
        where: loc,
        text: m[0].trim(),
        value,
        context: line.slice(Math.max(0, m.index! - 40), m.index! + m[0].length + 30).trim(),
        covered: loc === "plot point" ? "plot-check" : inShown ? "calc" : isInput ? "input" : "no",
      });
    }
  });
  return out;
}
