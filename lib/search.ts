/**
 * Site search, all in the browser, no external service (components/Search.tsx):
 *  - titles: /search-index.json (pages and courses, app/search-index.json/route.ts), matched by titleHits below;
 *  - glossary words ("term" docs, docs/GLOSSARY-PLAN.md): matched by their spellings, shown as Definition rows first;
 *  - lesson text: the full-text index in /pagefind, built by scripts/build-search.mts.
 */

export type SearchDoc = {
  /** "term": a glossary word (title = the word, summary = its short meaning, body = its other spellings) */
  kind: "page" | "course" | "term";
  title: string;
  href: string;
  /** e.g. "8.01 · Lesson 3" */
  meta: string;
  summary: string;
  headings: { id: string; label: string }[];
  body: string;
  /** "foundation" | "cosmology" */
  role: string;
};

export function normalize(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
}

function terms(q: string): string[] {
  return normalize(q)
    .split(/[^a-z0-9.]+/)
    .map((t) => t.replace(/^\.+|\.+$/g, ""))
    .filter((t) => t.length >= 2 || /\d/.test(t));
}

/** Word-start match: "accel" matches "acceleration" but not "deceleration". */
function has(field: string, term: string): boolean {
  let i = field.indexOf(term);
  while (i !== -1) {
    if (i === 0 || !/[a-z0-9]/.test(field[i - 1])) return true;
    i = field.indexOf(term, i + 1);
  }
  return false;
}

/**
 * Pages and courses whose title (or course and lesson label) contains every search word: the first group of results.
 * The text itself is searched by the full-text index (public/pagefind, components/Search.tsx).
 */
export function titleHits(docs: SearchDoc[], query: string, limit = 6): SearchDoc[] {
  const ts = terms(query);
  if (!ts.length) return [];
  return docs
    .map((doc) => {
      const title = normalize(doc.title);
      const meta = normalize(doc.meta);
      // Lessons by their title; courses and the site's own pages (symbols, review …) also by their short description.
      const lesson = doc.kind === "page" && (doc.href.startsWith("/courses/") || doc.href.startsWith("/highschool/"));
      // Glossary words by their spellings only, not by the words of their meaning.
      const about = lesson ? "" : normalize(doc.kind === "term" ? doc.body : `${doc.summary} ${doc.body}`);
      if (!ts.every((t) => has(title, t) || has(meta, t) || has(about, t))) return null;
      // Whole title words first, then lessons before courses.
      const score =
        ts.filter((t) => has(title, t)).length * 10 + ts.filter((t) => has(meta, t)).length * 3 + (title.startsWith(ts[0]) ? 5 : 0) - (doc.kind === "course" ? 2 : 0);
      return { doc, score };
    })
    .filter((x): x is { doc: SearchDoc; score: number } => !!x)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.doc);
}
