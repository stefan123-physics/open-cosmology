/**
 * Glossary sense audit (docs/GLOSSARY-PLAN.md): for every page, each glossary word's first use with its sentence and
 * the meaning the page would show, so a reviewer can spot a word used in another sense ("the event is called
 * recombination" marked as a spacetime event).
 *   npm run audit:terms -- --out DIR [--year N]
 * Writes DIR/year-<N>.txt: one block per page, one line per word: id | form as written | meaning | sentence.
 */
import fs from "node:fs";
import path from "node:path";
import { getSite, isLesson, orderedPages } from "../lib/content";
import { buildMatcher, loadGlossary, proseOf, termMeaningFor } from "../lib/glossary";

const site = getSite();
const { entries } = loadGlossary();
const matcher = buildMatcher(entries);
const arg = (k: string) => {
  const i = process.argv.indexOf(k);
  return i > 0 ? process.argv[i + 1] : undefined;
};
const out = arg("--out");
const onlyYear = arg("--year");
if (!out) throw new Error("--out DIR is required");
fs.mkdirSync(out, { recursive: true });

const files = new Map<number, string[]>();
let lines = 0;
for (const page of orderedPages(site).filter(isLesson)) {
  if (onlyYear && String(page.yearNumber) !== onlyYear) continue;
  const text = proseOf(page).replace(/\*\*/g, "").replace(/\s+/g, " ");
  const seen = new Set<string>();
  const rows: string[] = [];
  for (const m of matcher.find(text)) {
    if (seen.has(m.entry.id)) continue;
    seen.add(m.entry.id);
    const meaning = termMeaningFor(m.entry, page);
    if (!meaning) continue;
    const start = Math.max(text.lastIndexOf(". ", m.index) + 2, m.index - 160);
    const endDot = text.indexOf(". ", m.index + m.length);
    const end = Math.min(endDot < 0 ? text.length : endDot + 1, m.index + m.length + 160);
    const sentence = text.slice(start, end).trim();
    rows.push(`${m.entry.id} | ${text.slice(m.index, m.index + m.length)} | ${meaning.short} | ${sentence}`);
  }
  if (!rows.length) continue;
  const list = files.get(page.yearNumber) ?? [];
  list.push(`## ${page.slug} (${page.course})`, ...rows, "");
  files.set(page.yearNumber, list);
  lines += rows.length;
}
for (const [year, list] of files) fs.writeFileSync(path.join(out, `year-${year}.txt`), list.join("\n"));
console.log(`${lines} word uses on ${[...files.values()].reduce((n, l) => n + l.filter((x) => x.startsWith("## ")).length, 0)} pages written to ${out}`);
