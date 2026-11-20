/**
 * Validates every content file. Runs before every build (npm run build) and in CI.
 *   npm run content:check
 * Errors fail the build; warnings are printed.
 */
import fs from "node:fs";
import path from "node:path";
import { comparePages, HIGHSCHOOL_YEAR, loadSite, type Problem } from "../lib/content";
import { resolveCiteKeys } from "./cite-keys";
import { loadSymbols, meaningFor, usesSymbol } from "../lib/symbols";
import { buildMatcher, loadGlossary, proseOf } from "../lib/glossary";
import { pageNotation, pageTex } from "../lib/tex-scan";
import { groupingLost, pageCapitals, speechGaps, symbolReadAsUnit, texToSpeech } from "../lib/speech";
import { checkAllPlots } from "../lib/plot-check";
import { checkExercises } from "../lib/exercise-check";
import { checkValues, findValues, loadRegistry } from "../lib/values";
import { pageNumbers } from "../lib/numbers";
import { allLocalSims, localSim } from "../lib/phet";
import { createHash } from "node:crypto";

const site = loadSite();
const problems: Problem[] = [...site.problems];
const err = (file: string, message: string) => problems.push({ level: "error", file, message });
const warn = (file: string, message: string) => problems.push({ level: "warning", file, message });

// PhET simulations run from this site: every <PhET> needs an unmodified local copy listed in public/phet/manifest.json
// (PhET's licence requires the simulation and its logo to stay unaltered; the checksum proves it).
{
  const used = new Set<string>();
  for (const page of site.pages) {
    const tags = page.body.match(/<PhET\b[^>]*>/g) ?? [];
    for (const tag of tags) {
      const id = tag.match(/\bid="([^"]+)"/)?.[1] ?? page.phet;
      if (!id) { err(page.file, `<PhET> without an id (set phet: in the frontmatter or id="…")`); continue; }
      used.add(id);
      if (!localSim(id)) err(page.file, `PhET simulation "${id}" has no local copy in public/phet/manifest.json`);
    }
  }
  for (const [id, sim] of allLocalSims()) {
    const file = path.join("public", sim.file);
    if (!fs.existsSync(file)) { err("public/phet/manifest.json", `${id}: file ${sim.file} is missing`); continue; }
    const hash = createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    if (hash !== sim.sha256) err(file, `checksum differs from public/phet/manifest.json: the file must be PhET's unmodified copy`);
    if (!used.has(id)) warn("public/phet/manifest.json", `${id} is listed but no page uses it; remove it and its file`);
  }
}

const FORBIDDEN_SOURCES = [/openstax/i, /libretexts/i];

for (const page of site.pages) {
  const body = page.body;
  const all = fs.readFileSync(page.file, "utf8");

  // 0. No control characters (a shell can turn "\a" in "\approx" into a bell character).
  const ctrl = all.match(/[\x00-\x08\x0b\x0c\x0e-\x1f]/);
  if (ctrl) err(page.file, `control character U+${ctrl[0].charCodeAt(0).toString(16).padStart(4, "0")} near: ${JSON.stringify(all.slice(Math.max(0, ctrl.index! - 30), ctrl.index! + 10))}`);

  // 1. Every display formula must cite a source.
  const formulaTags = body.match(/<Formula(?:\s+[\w-]+(?:="[^"]*"|=\{[^}]*\})?)*\s*\/?>/g) ?? [];
  const keys = resolveCiteKeys(page);
  for (const tag of formulaTags) {
    const cite = tag.match(/\bcite="([^"]+)"/)?.[1];
    if (!cite) err(page.file, `<Formula> without cite: ${tag.slice(0, 70)}…`);
    else if (!keys.has(cite)) err(page.file, `<Formula cite="${cite}"> does not match "mit", "readingN" or a key in references`);
  }
  // 2. Display maths must go through <Formula> so it carries a citation.
  if (/\$\$/.test(body)) err(page.file, "use <Formula tex=… cite=…/> instead of $$…$$ display maths");

  // 3. Source policy.
  for (const re of FORBIDDEN_SOURCES) if (re.test(all)) err(page.file, `forbidden source referenced (${re.source})`);
  if (/all rights reserved/i.test(all))
    err(page.file, 'mentions "All rights reserved" material — create an original diagram instead');
  const kind = site.courseById.get(page.course)?.kind ?? "mit";
  if (kind === "mit" && !/ocw\.mit\.edu/.test(page.source.url)) err(page.file, "source.url must be an MIT OpenCourseWare URL");
  if (kind === "textbook" && page.source.url !== site.courseById.get(page.course)?.url)
    err(page.file, "source.url of a textbook page must be the book's own URL (the course url)");

  // 4. Quiz sanity.
  page.quiz.forEach((q, i) => {
    if (q.answer >= q.choices.length) err(page.file, `quiz[${i}].answer is out of range`);
  });
  if (page.kind === "lesson") {
    if (page.quiz.length === 0) warn(page.file, "no quiz questions");
  } else {
    // A problem set or exam (docs/PROBLEM-SETS-DESIGN.md §2): its exercises are the questions.
    if (page.quiz.length || page.flashcards?.length) err(page.file, `a "${page.kind}" page has no quiz and no flashcards`);
    if (page.set === undefined) err(page.file, `a "${page.kind}" page needs set: (MIT's number of the set)`);
    if (!page.solutions) err(page.file, `a "${page.kind}" page needs solutions: own or mit`);
  }

  // 5. Review file from the MIT comparison pass.
  const review = path.join("reviews", page.course, `${page.slug}.md`);
  if (!fs.existsSync(review)) warn(page.file, `no review file yet (${review})`);
  if (page.status === "reviewed" && !fs.existsSync(review)) err(page.file, 'status "reviewed" requires a review file');

  // 6. Prerequisites should not point forward in the path.
  for (const pre of page.prerequisites) {
    const p = site.pageBySlug.get(pre);
    if (p && p.yearNumber > page.yearNumber) warn(page.file, `prerequisite "${pre}" is in a later year`);
  }

  // 6b. High School (docs/HIGHSCHOOL-PLAN.md): each lesson uses only earlier lessons, matches its entry in the block's
  // lesson list, and every block ends with "Towards the universe".
  const block = site.courseById.get(page.course)!;
  if (block.kind === "highschool") {
    if (page.towards && page.kind !== "lesson") err(page.file, "towards: true is only for lessons");
    for (const pre of page.prerequisites) {
      const p = site.pageBySlug.get(pre);
      if (p && p.yearNumber !== HIGHSCHOOL_YEAR) err(page.file, `prerequisite "${pre}" is not a High School lesson`);
      else if (p && comparePages(site)(p, page) > 0) err(page.file, `prerequisite "${pre}" comes later in the High School`);
      // A planned lesson (not written yet, e.g. by the other PC, docs/TWO-PC-WORKFLOW.md) must also come earlier.
      const pl = !p ? site.planned.get(pre) : undefined;
      if (pl && pl.course.kind !== "highschool") err(page.file, `prerequisite "${pre}" is not a High School lesson`);
      else if (pl && (pl.course.order > block.order || (pl.course.order === block.order && pl.entry.lecture >= page.lecture)))
        err(page.file, `prerequisite "${pre}" (lesson ${pl.course.block}.${pl.entry.lecture}) comes later in the High School`);
    }
    if (page.kind === "lesson") {
      const entry = block.syllabus.find((e) => e.lecture === page.lecture);
      if (!entry) err(page.file, `lesson ${block.block}.${page.lecture} is not in ${block.id}'s lesson list (_course.json)`);
      else if (entry.slug && entry.slug !== page.slug) err(page.file, `lesson ${block.block}.${page.lecture} should have slug "${entry.slug}" (_course.json)`);
      const last = Math.max(...block.syllabus.map((e) => e.lecture));
      if (page.towards !== (page.lecture === last))
        err(page.file, page.towards ? "towards: true is only for the block's last lesson" : 'the block\'s last lesson is its "Towards the universe" lesson: set towards: true');
    }
  } else if (page.towards) err(page.file, "towards: is only for High School lessons");
}

// 7. Symbols glossary (data/symbols.json, docs/SYMBOLS_PLAN.md).
{
  const file = "data/symbols.json";
  let symbols: ReturnType<typeof loadSymbols> = [];
  try {
    symbols = loadSymbols();
  } catch (e) {
    err(file, `invalid symbols data: ${(e as Error).message.slice(0, 300)}`);
  }
  const ids = new Set<string>();
  const known = new Set<string>();
  const notation = new Map(site.pages.map((p) => [p.slug, pageNotation(p)]));
  for (const s of symbols) {
    if (ids.has(s.id)) err(file, `duplicate symbol id "${s.id}"`);
    ids.add(s.id);
    s.keys.forEach((k) => known.add(k));
    // A dotted symbol (ȧ, ẍ, ρ̇⋆) is named and spoken as its letter plus "dot" ("a dot", "x double dot"), never
    // "dot" alone: that is what the popup heading, "Say it" and read-aloud use.
    if ((s.forms ?? []).some((f) => /^\\d?dot(?![A-Za-z])/.test(f)))
      for (const field of ["name", "spoken"] as const) {
        const v = s[field].trim().toLowerCase();
        const double = (s.forms ?? []).some((f) => f.startsWith("\\ddot"));
        if (/^(double )?dot$/.test(v) || !v.includes(double ? "double dot" : "dot") || !/^\S+.* (double )?dot\b/.test(v))
          err(file, `${s.id}: ${field} "${s[field]}" must name the symbol and its dot, e.g. "a dot", "x double dot"`);
      }
    for (const m of s.meanings) {
      for (const slug of m.pages ?? []) {
        const p = site.pageBySlug.get(slug);
        if (!p) err(file, `${s.id}: meaning scoped to unknown page "${slug}"`);
        else if (!usesSymbol(s, notation.get(slug)!))
          err(file, `${s.id}: meaning scoped to "${slug}", which does not use ${s.keys.join(" / ")} (remove the page from it)`);
      }
      for (const c of m.courses ?? []) if (!site.courseById.has(c)) err(file, `${s.id}: meaning scoped to unknown course "${c}"`);
    }
  }
  // Every symbol a lesson uses (TeX commands, letters, subscripted and primed symbols: lib/tex-scan.ts) must have a
  // meaning that applies on that page, or the popup and "Symbols on this page" would silently leave it out.
  // Owner decision 2026-11-15: this fails the build.
  const byKey = new Map<string, (typeof symbols)[number]>();
  for (const s of symbols) for (const k of s.keys) byKey.set(k, s);
  for (const page of site.pages) {
    const used = notation.get(page.slug)!;
    const missing: string[] = [];
    const unscoped: string[] = [];
    for (const key of used.keys()) {
      const s = byKey.get(key);
      if (!s) missing.push(key);
      else if (!meaningFor(s, page)) unscoped.push(`${key} (${s.id})`);
    }
    // A dot over something that is not one symbol (\dot{(ab)}) would show only the accent, named "dot".
    const bareDots = ["\\dot", "\\ddot"].filter((k) => used.has(k));
    if (bareDots.length)
      err(page.file, `${bareDots.join(" ")} over something that is not a single symbol: write the time derivative so it is (ȧ, ρ̇⋆), or add a rule in lib/tex-scan.ts`);
    if (missing.length) err(page.file, `symbols with no entry in ${file}: ${missing.join(" ")}`);
    if (unscoped.length) err(page.file, `symbols with no meaning for this page in ${file} (add one scoped to "${page.slug}"): ${unscoped.join(" ")}`);
  }
}

// 7b. Glossary of difficult words (data/glossary/*.json, docs/GLOSSARY-PLAN.md).
{
  const { entries, errors } = loadGlossary();
  for (const e of errors) err(e.file, e.message);
  const ids = new Set(entries.map((e) => e.id));
  const symbolIds = new Set(loadSymbols().map((s) => s.id));
  const courseIds = new Set(site.courses.map((c) => c.id));
  // Two entries may not share a form: the text could not tell which word is meant.
  const formOwner = new Map<string, string>();
  for (const e of entries)
    for (const f of e.allForms) {
      const key = e.caseSensitive ? `=${f}` : f.toLowerCase();
      const other = formOwner.get(key) ?? (e.caseSensitive ? undefined : formOwner.get(`=${f}`));
      if (other && other !== e.id) err(e.file, `${e.id}: form "${f}" is also a form of ${other}`);
      else formOwner.set(key, e.id);
    }
  const matcher = buildMatcher(entries);
  const usedOn = new Map<string, Set<string>>(); // id → slugs whose prose uses the word
  for (const page of site.pages)
    for (const m of matcher.find(proseOf(page))) {
      if (!usedOn.has(m.entry.id)) usedOn.set(m.entry.id, new Set());
      usedOn.get(m.entry.id)!.add(page.slug);
    }
  for (const e of entries) {
    for (const r of e.related) if (!ids.has(r)) err(e.file, `${e.id}: related word "${r}" has no entry`);
    for (const s of e.symbols) if (!symbolIds.has(s)) err(e.file, `${e.id}: symbol "${s}" is not in data/symbols.json`);
    const general = e.meanings.filter((m) => !m.pages && !m.courses).length;
    if (general > 1) err(e.file, `${e.id}: more than one general meaning`);
    // A page or course in two meanings: only the first would ever show.
    for (const key of ["pages", "courses"] as const) {
      const seen = new Set<string>();
      for (const m of e.meanings)
        for (const s of m[key] ?? []) {
          if (seen.has(s)) err(e.file, `${e.id}: ${key === "pages" ? "page" : "course"} "${s}" is in two meanings`);
          seen.add(s);
        }
    }
    for (const m of e.meanings) {
      for (const slug of m.pages ?? []) {
        if (!site.pageBySlug.has(slug)) err(e.file, `${e.id}: meaning scoped to "${slug}", which is not a page`);
        else if (!usedOn.get(e.id)?.has(slug)) err(e.file, `${e.id}: meaning scoped to "${slug}", which does not use the word`);
      }
      for (const c of m.courses ?? []) if (!courseIds.has(c)) err(e.file, `${e.id}: meaning scoped to course "${c}", which does not exist`);
      if (m.introducedIn) {
        if (!site.pageBySlug.has(m.introducedIn)) err(e.file, `${e.id}: introducedIn "${m.introducedIn}" is not a page`);
        else if (!usedOn.get(e.id)?.has(m.introducedIn)) err(e.file, `${e.id}: introducedIn "${m.introducedIn}" does not use the word`);
      }
    }
    for (const slug of e.skipPages)
      if (!site.pageBySlug.has(slug)) err(e.file, `${e.id}: skipPages "${slug}" is not a page`);
      else if (!usedOn.get(e.id)?.has(slug)) err(e.file, `${e.id}: skipPages "${slug}" does not use the word`);
    if (!usedOn.has(e.id)) warn(e.file, `${e.id}: no page uses this word`);
  }
}

// Read-aloud and the "In words" panels say every formula in words (lib/speech.ts). Warn about any part of a formula
// the converter cannot put into words, so it is not silently skipped.
for (const page of site.pages) {
  const gaps = new Set<string>();
  for (const tex of pageTex(page)) for (const g of speechGaps(tex)) gaps.add(g);
  if (gaps.size) warn(page.file, `read-aloud cannot say ${[...gaps].join(" ")} in a formula (add a rule in lib/speech.ts)`);
  // Grouping must be spoken: (A + B) + C and A + (B + C) may not sound the same (owner decision 2026-11-15).
  const texs = [...new Set(pageTex(page))];
  const capitals = pageCapitals(texs);
  for (const tex of texs) {
    const lost = groupingLost(tex);
    if (lost) err(page.file, `read-aloud loses ${lost} bracket group(s) in: ${tex.slice(0, 90)}${tex.length > 90 ? "…" : ""} (fix lib/speech.ts, groupTex)`);
    // A symbol may never be heard as a unit: "m sub 1 m sub 2" reaches the engine as "… 1 m …", read "1 metre".
    const unit = symbolReadAsUnit(tex, capitals);
    if (unit) err(page.file, `read-aloud would say "${unit}" as a unit in: ${tex.slice(0, 80)}${tex.length > 80 ? "…" : ""} (lib/speech.ts)`);
  }
  // Capital and small forms of a letter used on one page must sound different ("r = R" is not "r equals r").
  const keys = [...pageNotation(page).keys()];
  const said = new Map<string, string>();
  for (const key of keys) {
    const sub = /^([^_]+)_(.+)$/.exec(key);
    const tex = sub ? `${sub[1]}_{${sub[2]}}` : key;
    said.set(key, texToSpeech(tex, { capitals }));
  }
  // Compared without case: a speech engine says "R" and "r" alike.
  for (const a of keys)
    for (const b of keys)
      if (a < b && a.toLowerCase() === b.toLowerCase() && said.get(a)!.toLowerCase() === said.get(b)!.toLowerCase())
        err(page.file, `read-aloud says ${a} and ${b} the same ("${said.get(a)}"): they must sound different (lib/speech.ts pageCapitals)`);
}

// No native browser dialogs (owner decision 2026-11-15): they cannot be styled and speak the browser's language.
// Use useConfirm() from components/ui/ConfirmDialog.tsx and showToast() from components/ui/Toast.tsx instead.
{
  const NATIVE = new RegExp(
    String.raw`(?:^|[^\w$.])(?:(?:window|globalThis|self|top|parent)\s*\.\s*)?(?:conf` +
      String.raw`irm|ale` +
      String.raw`rt|pro` +
      String.raw`mpt)\s*\(|onbeforeunload|addEventListener\(\s*["'\x60]beforeunload`,
    "m"
  );
  const roots = ["app", "components", "lib", "public"];
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
      const p = path.join(dir, d.name);
      if (d.isDirectory()) return p.replace(/\\/g, "/") === "public/phet" ? [] : walk(p);
      return /\.(tsx?|jsx?|mjs|cjs)$/.test(d.name) ? [p] : [];
    });
  for (const file of roots.filter((r) => fs.existsSync(r)).flatMap(walk)) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      // Comments may name the functions; code may not call them.
      if (/^\s*(?:\*|\/\*|\/\/)/.test(line)) return;
      const code = line.replace(/\/\/.*$/, "");
      if (NATIVE.test(code))
        err(`${file}:${i + 1}`, `native browser dialog: use useConfirm() (components/ui/ConfirmDialog.tsx) or showToast() instead: ${line.trim().slice(0, 80)}`);
    });
  }
}

// House style (owner decision 2026-11-15): no em dashes. Use a comma, a colon, brackets or a new sentence instead.
for (const page of site.pages) {
  const raw = fs.readFileSync(page.file, "utf8");
  const n = (raw.match(/—/g) ?? []).length;
  if (n) warn(page.file, `${n} em dash${n === 1 ? "" : "es"} (—): use a comma, colon, brackets or a new sentence instead`);
}

// A combining arrow (U+20D7, as in R⃗) in plain text, such as a summary, quiz choice or prose outside $…$, shows as a
// box or a misplaced arrow: the text fonts lack it, and a fallback font cannot attach it to a letter from another font.
// Inside maths KaTeX draws \vec properly, so only text outside $…$ and tex="…" counts.
for (const page of site.pages) {
  const raw = fs.readFileSync(page.file, "utf8");
  const text = raw.replace(/\$[^$]*\$/g, "").replace(/\btex="[^"]*"/g, "").replace(/\btex=\{[^}]*\}/g, "");
  const n = (text.match(/⃗/g) ?? []).length;
  if (n) warn(page.file, `${n} combining arrow${n === 1 ? "" : "s"} (U+20D7, as in R⃗) outside maths: write the vector in $…$ (\\vec R) or in words`);
}

// Every page with result-like numbers needs a calculation file, calcs/<course>/<slug>.yaml (docs/CALC_TESTS_PLAN.md):
// numbers are recomputed there, and quoted figures are recorded as `kind: fact`. Pages with no numbers need none.
for (const page of site.pages) {
  const calcsFile = path.join("calcs", page.course, `${page.slug}.yaml`);
  if (fs.existsSync(calcsFile)) continue;
  const numbers = pageNumbers(page);
  if (numbers.length)
    warn(
      page.file,
      `has ${numbers.length} number(s) but no ${calcsFile.replace(/\\/g, "/")}: add one that recomputes them (or records quoted figures as kind: fact); first: ${numbers[0].text} (${numbers[0].where})`,
    );
}

// Quoted values of H₀, the age, T_CMB, Ω_m, Ω_vac, n_s and σ₈ must be in the value registry (lib/values.ts).
const registry = loadRegistry();
const valueFindings = findValues(site.pages, registry);
const valueCheck = checkValues(valueFindings, registry);
for (const e of valueCheck.errors) err(e.file, e.message);
for (const w of valueCheck.warnings) warn(w.file, w.message);

// Every graph: curves evaluate, references are valid, labelled points lie on a curve (lib/plot-check.ts).
// Problem sets: ids, solutions, points and every answer box (lib/exercise-check.ts).
const exercisesChecked = Promise.all(
  site.pages.map(async (page) => {
    const { errors, exercises } = await checkExercises(page);
    for (const m of errors) err(page.file, m);
    if (page.kind !== "lesson" && exercises === 0) err(page.file, `a "${page.kind}" page needs at least one <Exercise>`);
  }),
);

Promise.all([checkAllPlots(site.pages), exercisesChecked]).then(([{ errors: plotErrors, plots }]) => {
  for (const m of plotErrors) {
    const page = site.pages.find((p) => m.startsWith(p.slug + ":"));
    err(page?.file ?? "plots", m.slice((page?.slug.length ?? -2) + 2));
  }
  const errors = problems.filter((p) => p.level === "error");
  const warnings = problems.filter((p) => p.level === "warning");
  for (const p of [...errors, ...warnings]) console.log(`${p.level === "error" ? "✖" : "⚠"} ${p.file}: ${p.message}`);
  console.log(
    `\n${site.pages.length} pages in ${site.courses.length} courses, ${plots} graphs, ${valueFindings.length} quoted values · ${errors.length} error(s), ${warnings.length} warning(s)`
  );
  process.exit(errors.length ? 1 : 0);
});
