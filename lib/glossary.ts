import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { isLesson, orderedPages, type Page, type Site } from "./content";

/**
 * The glossary of difficult words (docs/GLOSSARY-PLAN.md): physics and maths terms, academic English, abbreviations.
 *
 * Data: data/glossary/*.json, one JSON array per file, one entry per line (like data/symbols.json). Files are split
 * by who writes them (one per course, plus academic.json), so writers working in parallel never edit the same file.
 * A word's full entry (its "header": term, forms, kind, pronunciation) appears in exactly one file; another file may
 * add meanings for the same id with a short record { "id": …, "meanings": [ … ] }.
 *
 * A word can mean different things in different courses or pages ("degenerate", "normal", "flat"), so each meaning
 * has a scope, as symbol meanings do: pages beat courses beat the general meaning (no pages, no courses).
 */
export const TERM_KINDS = ["physics", "maths", "academic", "abbreviation", "named"] as const;
export type TermKind = (typeof TERM_KINDS)[number];
export const KIND_LABEL: Record<TermKind, string> = {
  physics: "Physics",
  maths: "Maths",
  academic: "Academic",
  abbreviation: "Abbreviation",
  named: "Named",
};

/** Plain text, no TeX, no em dash (site rule). */
const plain = z
  .string()
  .min(1)
  .refine((s) => !/[\\$]/.test(s), "no TeX in glossary text (use Unicode)")
  .refine((s) => !s.includes("—"), "no em dashes");

export const SHORT_MAX_WORDS = 25;
const wordCount = (s: string) => s.trim().split(/\s+/).length;

const Meaning = z.object({
  /** The short meaning: plain English, at most 25 words */
  short: plain.refine((s) => wordCount(s) <= SHORT_MAX_WORDS, `short meaning longer than ${SHORT_MAX_WORDS} words`),
  /** A fuller meaning (2 to 4 sentences), shown under "More" */
  long: plain.optional(),
  /** How the pages in this meaning's scope use the word, when that adds something ("Here: …") */
  here: plain.optional(),
  /** An example sentence (own words) */
  example: plain.optional(),
  /** Applies on these pages (slugs): most specific */
  pages: z.array(z.string()).optional(),
  /** Applies in these courses (ids such as "8.286") */
  courses: z.array(z.string()).optional(),
  /** The lesson that explains this idea (slug). Default: the first page in programme order that writes the word in bold. */
  introducedIn: z.string().optional(),
});

const FORM = z.string().min(1).refine((f) => !/[\\$<>*_]/.test(f), "a form is plain text");

const Header = z.object({
  /** Stable id: the anchor on /glossary/<letter>#<id> */
  id: z.string().regex(/^[a-z0-9][a-z0-9-]*$/),
  /** The word as shown, e.g. "isotropic", "a priori", "CMB" */
  term: plain,
  /** Every spelling and inflection that should be recognised in text (the term itself is always included) */
  forms: z.array(FORM).default([]),
  kind: z.enum(TERM_KINDS),
  /** Respelling with the stressed syllable in capitals, e.g. "eye-so-TROP-ik" */
  say: plain.optional(),
  /** What read-aloud should say, if a speech engine would get the term wrong ("lambda C D M") */
  spoken: plain.optional(),
  /** Short origin of a Latin or Greek borrowing */
  origin: plain.optional(),
  /** Language of a foreign phrase ("la" for Latin), so screen readers pronounce it right */
  lang: z.string().regex(/^[a-z]{2}$/).optional(),
  /** Match case exactly (acronyms such as "CMB"); otherwise matching ignores case */
  caseSensitive: z.boolean().optional(),
  /** For words whose everyday meaning misleads in science: one sentence on the difference */
  everyday: plain.optional(),
  /** Related glossary ids */
  related: z.array(z.string()).default([]),
  /** Pages where the word is used in an everyday sense and must not be marked ("the event is called recombination") */
  skipPages: z.array(z.string()).default([]),
  /** Related symbol ids in data/symbols.json */
  symbols: z.array(z.string()).default([]),
  meanings: z.array(Meaning).default([]),
});

const Extra = z
  .object({ id: z.string(), meanings: z.array(Meaning).default([]), skipPages: z.array(z.string()).default([]) })
  .strict()
  .refine((x) => x.meanings.length + x.skipPages.length > 0, "needs meanings or skipPages");

export type TermMeaning = z.infer<typeof Meaning>;
export type TermEntry = z.infer<typeof Header> & {
  /** Data file the header came from */
  file: string;
  /** All forms, the term first, without duplicates */
  allForms: string[];
};

export const GLOSSARY_DIR = path.join(process.cwd(), "data", "glossary");

export type GlossaryLoad = { entries: TermEntry[]; errors: { file: string; message: string }[] };

let cache: GlossaryLoad | null = null;
/** Load and merge every file in data/glossary. Errors are returned, not thrown, so content:check can list them all. */
export function loadGlossary(dir = GLOSSARY_DIR): GlossaryLoad {
  if (cache && dir === GLOSSARY_DIR) return cache;
  const errors: GlossaryLoad["errors"] = [];
  const headers = new Map<string, TermEntry>();
  const extras: { file: string; id: string; meanings: TermMeaning[]; skipPages: string[] }[] = [];
  const files = fs.existsSync(/*turbopackIgnore: true*/ dir) ? fs.readdirSync(/*turbopackIgnore: true*/ dir).filter((f) => f.endsWith(".json")).sort() : [];
  for (const name of files) {
    const file = `data/glossary/${name}`;
    let raw: unknown;
    try {
      raw = JSON.parse(fs.readFileSync(path.join(/*turbopackIgnore: true*/ dir, name), "utf8"));
    } catch (e) {
      errors.push({ file, message: `not valid JSON: ${(e as Error).message}` });
      continue;
    }
    if (!Array.isArray(raw)) {
      errors.push({ file, message: "must be a JSON array" });
      continue;
    }
    for (const item of raw) {
      const isExtra = item && typeof item === "object" && !("term" in item);
      if (isExtra) {
        const r = Extra.safeParse(item);
        if (!r.success) errors.push({ file, message: `${(item as { id?: string }).id ?? "?"}: ${r.error.issues.map((i) => `${i.path.join(".")} ${i.message}`).join("; ")}` });
        else extras.push({ file, ...r.data });
        continue;
      }
      const r = Header.safeParse(item);
      if (!r.success) {
        errors.push({ file, message: `${(item as { id?: string })?.id ?? "?"}: ${r.error.issues.map((i) => `${i.path.join(".")} ${i.message}`).join("; ")}` });
        continue;
      }
      const h = r.data;
      if (headers.has(h.id)) {
        errors.push({ file, message: `${h.id}: entry already defined in ${headers.get(h.id)!.file}; add meanings with { "id", "meanings" } instead` });
        continue;
      }
      const allForms = [...new Set([h.term, ...h.forms])];
      headers.set(h.id, { ...h, file, allForms });
    }
  }
  for (const x of extras) {
    const h = headers.get(x.id);
    if (!h) errors.push({ file: x.file, message: `${x.id}: meanings for a word that has no entry` });
    else {
      h.meanings.push(...x.meanings);
      for (const p of x.skipPages) if (!h.skipPages.includes(p)) h.skipPages.push(p);
    }
  }
  const entries = [...headers.values()].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  for (const e of entries) if (!e.meanings.length) errors.push({ file: e.file, message: `${e.id}: no meanings` });
  const result = { entries, errors };
  if (dir === GLOSSARY_DIR) cache = result;
  return result;
}

/** The meaning that applies on a page: scoped to the page, else to its course, else the general meaning. */
export function termMeaningFor(entry: TermEntry, page: Pick<Page, "slug" | "course">): TermMeaning | undefined {
  if (entry.skipPages.includes(page.slug)) return undefined;
  return (
    entry.meanings.find((m) => m.pages?.includes(page.slug)) ??
    entry.meanings.find((m) => !m.pages && m.courses?.includes(page.course)) ??
    entry.meanings.find((m) => !m.pages && !m.courses)
  );
}

/* ------------------------------------------------------------------ matching words in text */

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** A word character for matching: letters, digits, hyphen and apostrophe, so "trivial" is not found inside "non-trivial". */
const W = "[\\p{L}\\p{N}\\-’']";

export type Matcher = {
  /** Every match in a text, longest form first, without overlaps */
  find(text: string): { index: number; length: number; entry: TermEntry }[];
};

/** The letter-and-digit runs of a text, lower-cased: a quick test of which forms can occur in it at all. */
const runsOf = (s: string) => s.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);

/** Build a matcher for a set of entries. Forms are matched as whole words; case is ignored unless caseSensitive. */
export function buildMatcher(entries: TermEntry[]): Matcher {
  const forms = entries
    .flatMap((entry) => entry.allForms.map((form) => ({ form, entry, runs: runsOf(form) })))
    .sort((a, b) => b.form.length - a.form.length);
  if (!forms.length) return { find: () => [] };
  const insensitive = new Map<string, TermEntry>();
  const sensitive = new Map<string, TermEntry>();
  for (const { form, entry } of forms) {
    if (entry.caseSensitive) sensitive.set(form, entry);
    else if (!insensitive.has(form.toLowerCase())) insensitive.set(form.toLowerCase(), entry);
  }
  // Spaces in a form match any run of whitespace (line breaks in the source).
  const pattern = (list: typeof forms) => {
    const alt = list.map(({ form }) => esc(form).replace(/ /g, "\\s+")).join("|");
    return new RegExp(`(?<!${W})(?:${alt})(?!${W})`, "giu");
  };
  // One alternation of thousands of forms is slow (about 20 s for the whole site with 4,000 words). Each text is
  // matched only against the forms whose letter runs all occur in it, which is usually a few dozen.
  const cache = new Map<string, RegExp | null>();
  const regexFor = (text: string) => {
    const present = new Set(runsOf(text));
    const list = forms.filter((f) => f.runs.every((r) => present.has(r)));
    const key = list.map((f) => f.form).join("\u0000");
    if (!cache.has(key)) {
      if (cache.size > 2000) cache.clear();
      cache.set(key, list.length ? pattern(list) : null);
    }
    return cache.get(key)!;
  };
  return {
    find(text) {
      const out: { index: number; length: number; entry: TermEntry }[] = [];
      const re = regexFor(text);
      if (!re) return out;
      for (const m of text.matchAll(re)) {
        const found = m[0].replace(/\s+/g, " ");
        const entry = sensitive.get(found) ?? insensitive.get(found.toLowerCase());
        if (entry) out.push({ index: m.index!, length: m[0].length, entry });
      }
      return out;
    },
  };
}

/* ------------------------------------------------------------------ pages */

/** The prose of a page, roughly: MDX without frontmatter, maths, code, tags and their attributes. Used for checks and lists. */
export function proseOf(page: Pick<Page, "body">): string {
  return page.body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$\n]*\$/g, " ")
    .replace(/<(Formula|Plot|VectorDiagram|ExpansionDiagram|ParallaxDiagram|PhET|Answer)\b[\s\S]*?\/>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6} .*$/gm, " ");
}

/** Bold spans in a page's prose, lower-cased: how lessons mark a new term. */
export function boldTermsOf(page: Pick<Page, "body">): string[] {
  return [...proseOf(page).matchAll(/\*\*([^*\n]{2,80})\*\*/g)].map((m) => m[1].trim().replace(/[.:,;]+$/, "").toLowerCase());
}

let introCache: Map<string, string> | null = null;
/**
 * The lesson that introduces each word, when the data does not say: the first lesson in programme order whose
 * bold text is one of the word's forms. Academic words have none (no lesson teaches them).
 */
export function defaultIntroductions(site: Site, entries: TermEntry[]): Map<string, string> {
  if (introCache) return introCache;
  const byForm = new Map<string, TermEntry>();
  for (const e of entries) if (e.kind !== "academic") for (const f of e.allForms) byForm.set(f.toLowerCase(), e);
  const intro = new Map<string, string>();
  for (const page of orderedPages(site).filter(isLesson))
    for (const b of boldTermsOf(page)) {
      const e = byForm.get(b);
      if (e && !intro.has(e.id)) intro.set(e.id, page.slug);
    }
  introCache = intro;
  return intro;
}

/** The lesson that explains this meaning on this page, or undefined. */
export function introductionOf(site: Site, entry: TermEntry, meaning: TermMeaning): Page | undefined {
  const slug = meaning.introducedIn ?? defaultIntroductions(site, loadGlossary().entries).get(entry.id);
  return slug ? site.pageBySlug.get(slug) : undefined;
}

/** The letter page a word is listed on: "a" … "z", or "0-9". */
export function letterOf(entry: Pick<TermEntry, "term">): string {
  const c = entry.term
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/^[^\p{L}\p{N}]+/u, "")
    .charAt(0)
    .toLowerCase();
  return /[a-z]/.test(c) ? c : "0-9";
}

export const glossaryHref = (entry: Pick<TermEntry, "id" | "term">) => `/glossary/${letterOf(entry)}#${entry.id}`;

/** A word as one page shows it: the entry and the meaning that applies there. */
export type PageTerm = {
  id: string;
  term: string;
  kind: TermKind;
  say?: string;
  spoken?: string;
  origin?: string;
  lang?: string;
  everyday?: string;
  short: string;
  long?: string;
  here?: string;
  example?: string;
  href: string;
  /** The lesson that explains the idea, when it is not this page */
  introduced?: { title: string; href: string };
  /** True when this page is the one that explains it */
  newHere: boolean;
  related: { id: string; term: string; href: string }[];
  /** Index of the meaning that applies here, in entry.meanings (the key into /glossary-more/<letter>) */
  sense: number;
};

/**
 * What the word panel needs on a lesson beyond the "Words on this page" list (components/PageTerms.tsx), which already
 * carries each word, its link and its short meaning: the panel reads those from the list, and the longer text (fuller
 * meaning, example, origin, related words) loads from /glossary-more/<letter> when the reader opens "More". Keeps a
 * lesson's glossary data small (docs/GLOSSARY-PLAN.md, page weight).
 */
export type PanelTerm = Pick<PageTerm, "id" | "kind" | "say" | "spoken" | "lang" | "everyday" | "here" | "introduced" | "newHere" | "sense"> & {
  /** There is something under "More" */
  more: boolean;
};
export function panelTerms(terms: PageTerm[]): PanelTerm[] {
  return terms.map((t) => ({
    id: t.id,
    kind: t.kind,
    say: t.say,
    spoken: t.spoken,
    lang: t.lang,
    everyday: t.everyday,
    here: t.here,
    introduced: t.introduced,
    newHere: t.newHere,
    sense: t.sense,
    more: Boolean(t.long || t.example || t.origin || t.related.length),
  }));
}

/** /glossary-more/<letter>: per word, its origin (o), related words (r: id, term, href) and per meaning [long, example]. */
export type MoreData = Record<string, { o?: string; r?: [string, string, string][]; m: [string?, string?][] }>;
export function moreData(letter: string): MoreData {
  const { entries } = loadGlossary();
  const byId = new Map(entries.map((e) => [e.id, e]));
  const out: MoreData = {};
  for (const e of entries) {
    if (letterOf(e) !== letter) continue;
    const r = e.related.flatMap((id): [string, string, string][] => {
      const x = byId.get(id);
      return x ? [[x.id, x.term, glossaryHref(x)]] : [];
    });
    out[e.id] = { o: e.origin, r: r.length ? r : undefined, m: e.meanings.map((m): [string?, string?] => (m.example ? [m.long, m.example] : m.long ? [m.long] : [])) };
  }
  return out;
}

let matcherCache: Matcher | null = null;
function siteMatcher(): Matcher {
  if (!matcherCache) matcherCache = buildMatcher(loadGlossary().entries);
  return matcherCache;
}

/** Every glossary word used in a page's prose that has a meaning on that page, in order of first use. */
export function pageTerms(site: Site, page: Page): PageTerm[] {
  const { entries } = loadGlossary();
  const byId = new Map(entries.map((e) => [e.id, e]));
  const seen = new Set<string>();
  const out: PageTerm[] = [];
  for (const { entry } of siteMatcher().find(proseOf(page))) {
    if (seen.has(entry.id)) continue;
    seen.add(entry.id);
    const m = termMeaningFor(entry, page);
    if (!m) continue;
    const intro = introductionOf(site, entry, m);
    out.push({
      id: entry.id,
      term: entry.term,
      kind: entry.kind,
      say: entry.say,
      spoken: entry.spoken,
      origin: entry.origin,
      lang: entry.lang,
      everyday: entry.everyday,
      short: m.short,
      long: m.long,
      here: m.here,
      example: m.example,
      href: glossaryHref(entry),
      introduced: intro && intro.slug !== page.slug ? { title: intro.title, href: intro.href } : undefined,
      newHere: intro?.slug === page.slug,
      related: entry.related.flatMap((r) => {
        const e = byId.get(r);
        return e ? [{ id: e.id, term: e.term, href: glossaryHref(e) }] : [];
      }),
      sense: entry.meanings.indexOf(m),
    });
  }
  return out;
}

/** Test hook */
export function _resetGlossaryCache() {
  cache = null;
  introCache = null;
  matcherCache = null;
}
