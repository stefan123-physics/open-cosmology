import type { Page } from "../lib/content";

/** All citation keys a page may use in <Formula cite="…" />. Mirrors resolveCite in lib/mdx.tsx. */
export function resolveCiteKeys(page: Page): Set<string> {
  return new Set(["mit", ...page.source.readings.map((_, i) => `reading${i + 1}`), ...Object.keys(page.references)]);
}
