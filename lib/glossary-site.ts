import { isLesson, orderedPages, type Site } from "./content";
import { buildMatcher, glossaryHref, letterOf, loadGlossary, proseOf, termMeaningFor, type TermEntry, type TermKind } from "./glossary";

/**
 * Site-wide facts about the glossary of difficult words (docs/GLOSSARY-PLAN.md): which lessons use each word in which
 * sense. Worked out once per build process (one pass of the matcher over every lesson, about 2 s for 4,000 words).
 */
export type Usage = {
  /** Lesson slugs that use the word, in programme order */
  pages: string[];
  /** For each meaning (by its index in entry.meanings): the lesson slugs where that meaning applies */
  senses: Map<number, string[]>;
};

let usageCache: Map<string, Usage> | null = null;
export function glossaryUsage(site: Site): Map<string, Usage> {
  if (usageCache) return usageCache;
  const { entries } = loadGlossary();
  const matcher = buildMatcher(entries);
  const out = new Map<string, Usage>();
  for (const page of orderedPages(site).filter(isLesson)) {
    const seen = new Set<string>();
    for (const { entry } of matcher.find(proseOf(page))) {
      if (seen.has(entry.id)) continue;
      seen.add(entry.id);
      const m = termMeaningFor(entry, page);
      if (!m) continue;
      const u: Usage = out.get(entry.id) ?? { pages: [], senses: new Map() };
      u.pages.push(page.slug);
      const i = entry.meanings.indexOf(m);
      u.senses.set(i, [...(u.senses.get(i) ?? []), page.slug]);
      out.set(entry.id, u);
    }
  }
  usageCache = out;
  return out;
}

/** How many lessons use a word (0 when none). */
export const usageCount = (site: Site, id: string) => glossaryUsage(site).get(id)?.pages.length ?? 0;

/** Entries with their letter, for the glossary pages. */
export function entriesByLetter(): Map<string, TermEntry[]> {
  const map = new Map<string, TermEntry[]>();
  for (const e of loadGlossary().entries) {
    const l = letterOf(e);
    map.set(l, [...(map.get(l) ?? []), e]);
  }
  return map;
}

/** The letter pages: "0-9" first, then a … z. */
export const LETTERS = ["0-9", ..."abcdefghijklmnopqrstuvwxyz".split("")];

/** A compact record of a word for lists, search and review: [id, term, short (general or first meaning), href, kind] */
export type WordRow = [string, string, string, string, TermKind];
export function wordRows(): WordRow[] {
  return loadGlossary().entries.map((e) => {
    const m = e.meanings.find((x) => !x.pages && !x.courses) ?? e.meanings[0];
    return [e.id, e.term, m?.short ?? "", glossaryHref(e), e.kind];
  });
}

/** Rank for the density limit in lessons: subject words before academic ones, then rarer words first. */
export function termRank(site: Site, entry: TermEntry): number {
  return (entry.kind === "academic" ? 1e6 : 0) + usageCount(site, entry.id);
}

/** The glossary entries a page's marks are made from (those pageTerms lists, with their forms). */
export function pageEntries(ids: string[]): TermEntry[] {
  const set = new Set(ids);
  return loadGlossary().entries.filter((e) => set.has(e.id));
}


/** Where a meaning applies, for the glossary pages: "In 8.286", "In 8.08 and 8.09", "In 2 lessons of 8.044", "Generally". */
export function senseLabel(site: Site, entry: TermEntry, index: number): string {
  const m = entry.meanings[index];
  const list = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
  if (m.pages?.length) {
    const courses = [...new Set(m.pages.map((s) => site.pageBySlug.get(s)?.course).filter((c): c is string => !!c))];
    return m.pages.length === 1
      ? `In one lesson of ${list(courses)}`
      : `In ${m.pages.length} lessons of ${list(courses)}`;
  }
  if (m.courses?.length) return `In ${list(m.courses)}`;
  return entry.meanings.length > 1 ? "Elsewhere" : "Generally";
}

/** The most used subject and academic words: the "Start here" list on /glossary. */
export function mostUsed(site: Site, n = 20): TermEntry[] {
  return [...loadGlossary().entries]
    .filter((e) => usageCount(site, e.id) > 0)
    .sort((a, b) => usageCount(site, b.id) - usageCount(site, a.id) || a.term.localeCompare(b.term))
    .slice(0, n);
}
