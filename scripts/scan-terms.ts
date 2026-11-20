/**
 * Glossary candidates (docs/GLOSSARY-PLAN.md §8): which words the glossary should explain, and which writer owns each.
 *   npm run scan:terms              summary per course
 *   npm run scan:terms -- --out DIR  also writes DIR/<course>.json (bold terms first used in that course, not yet in
 *                                    the glossary) and DIR/words.json (every prose word with counts, for academic words)
 *
 * A bold term belongs to the course of the first lesson, in programme order, that writes it in bold. Words already
 * in the glossary (any form) are left out. Emphasis words ("not", "every") are filtered with a short stop list; the
 * writers decide the rest.
 */
import fs from "node:fs";
import path from "node:path";
import { getSite, isLesson, orderedPages } from "../lib/content";
import { boldTermsOf, loadGlossary, proseOf } from "../lib/glossary";

const STOP = new Set(
  "not any every all none no only both each example examples the idea larger smaller one two three first second must never always also is are was be it this that these those same total up down here there now then and or but if so yes true false new old key note".split(
    " ",
  ),
);

const site = getSite();
const { entries } = loadGlossary();
const known = new Set(entries.flatMap((e) => e.allForms.map((f) => f.toLowerCase())));

type Candidate = { term: string; pages: string[]; firstPage: string; boldCount: number };
const byCourse = new Map<string, Map<string, Candidate>>();
const owner = new Map<string, string>(); // term → course id
const words = new Map<string, number>();

for (const page of orderedPages(site).filter(isLesson)) {
  for (const t of boldTermsOf(page)) {
    if (STOP.has(t) || known.has(t) || /^[\d\W]+$/.test(t) || t.split(" ").length > 6) continue;
    const course = owner.get(t) ?? page.course;
    owner.set(t, course);
    if (!byCourse.has(course)) byCourse.set(course, new Map());
    const m = byCourse.get(course)!;
    const c = m.get(t) ?? { term: t, pages: [], firstPage: page.slug, boldCount: 0 };
    c.boldCount++;
    if (!c.pages.includes(page.slug)) c.pages.push(page.slug);
    m.set(t, c);
  }
  for (const w of proseOf(page).replace(/\*\*/g, " ").match(/[A-Za-z][a-z]+(?:-[a-z]+)*/g) ?? [])
    if (w.length >= 4) words.set(w.toLowerCase(), (words.get(w.toLowerCase()) ?? 0) + 1);
}

const outIdx = process.argv.indexOf("--out");
const out = outIdx > 0 ? process.argv[outIdx + 1] : undefined;
if (out) fs.mkdirSync(out, { recursive: true });

let total = 0;
for (const course of site.courses) {
  const list = [...(byCourse.get(course.id)?.values() ?? [])].sort((a, b) => b.pages.length - a.pages.length || a.term.localeCompare(b.term));
  total += list.length;
  console.log(`${course.id.padEnd(10)} ${String(list.length).padStart(5)} bold candidates`);
  if (out) fs.writeFileSync(path.join(out, `${course.id}.json`), JSON.stringify(list, null, 1));
}
console.log(`total      ${String(total).padStart(5)} bold candidates; ${words.size} distinct prose words; ${entries.length} glossary entries`);
if (out)
  fs.writeFileSync(
    path.join(out, "words.json"),
    JSON.stringify(
      [...words].filter(([w]) => !known.has(w)).sort((a, b) => b[1] - a[1]),
      null,
      0,
    ),
  );
