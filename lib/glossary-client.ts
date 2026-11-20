/**
 * Browser side of the glossary: /glossary-usage.json (app/glossary-usage.json/route.ts), loaded once on demand and
 * shared by the word panel (related words not used on the page), the glossary pages (search, filters, where each
 * sense is used), "My words" and /review (the saved words' cards).
 */
import type { TermKind } from "./glossary";

/** [term, short meaning (the general one, else the first), href, kind, other forms, course ids that use it] */
export type WordInfo = [string, string, string, TermKind, string[], string[]];
export type GlossaryData = {
  /** [href, title, course, year] */
  lessons: [string, string, string, number][];
  words: Record<string, WordInfo>;
  /** id → for each meaning, in the order of the data, the indexes of the lessons where it applies */
  senses: Record<string, number[][]>;
};

let data: Promise<GlossaryData> | undefined;
export function loadGlossaryData(): Promise<GlossaryData> {
  data ??= fetch("/glossary-usage.json").then((r) => {
    if (!r.ok) throw new Error(String(r.status));
    return r.json() as Promise<GlossaryData>;
  });
  data.catch(() => (data = undefined)); // allow a retry (offline, say)
  return data;
}

/** Lower case, no accents, and no plural or -ing ending, so "Spectra" ≈ "spectrum" is not claimed but "redshifts" ≈ "redshift". */
export function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "'")
    .split(/\s+/)
    .map((w) => (w.length > 4 ? w.replace(/(?:ies)$/, "y").replace(/(?:ing|es|s)$/, "") : w))
    .join(" ")
    .trim();
}

/** Edit distance (Levenshtein), for "Did you mean …?" */
export function distance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 3) return 99;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}
