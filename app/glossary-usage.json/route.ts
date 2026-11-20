import { getSite } from "@/lib/content";
import { glossaryHref, loadGlossary } from "@/lib/glossary";
import { glossaryUsage } from "@/lib/glossary-site";
import type { GlossaryData } from "@/lib/glossary-client";

/**
 * The glossary of difficult words as data for the browser, built once at build time as a static file (like
 * /symbols-usage.json). Loaded only when needed: the search and filters on /glossary, "All meanings and where they
 * are used" on the letter pages, related words in the word panel, My words and the saved words' cards on /review.
 * Keeping it out of the pages keeps every glossary page small. Saved for offline use with the other site files.
 */
export const dynamic = "force-static";

export function GET() {
  const site = getSite();
  const usage = glossaryUsage(site);
  const lessonIndex = new Map(site.pages.map((p, i) => [p.slug, i]));
  const lessons: GlossaryData["lessons"] = site.pages.map((p) => [p.href, p.title, p.course, p.yearNumber]);
  const words: GlossaryData["words"] = {};
  const senses: GlossaryData["senses"] = {};
  for (const e of loadGlossary().entries) {
    const m = e.meanings.find((x) => !x.pages && !x.courses) ?? e.meanings[0];
    const u = usage.get(e.id);
    const courses = [...new Set((u?.pages ?? []).map((s) => site.pageBySlug.get(s)!.course))];
    words[e.id] = [e.term, m?.short ?? "", glossaryHref(e), e.kind, e.allForms.filter((f) => f !== e.term), courses];
    senses[e.id] = e.meanings.map((_, i) => (u?.senses.get(i) ?? []).map((s) => lessonIndex.get(s)!));
  }
  const body: GlossaryData = { lessons, words, senses };
  return Response.json(body);
}
