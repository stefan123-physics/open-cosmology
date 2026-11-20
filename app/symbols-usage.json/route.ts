import { getSite } from "@/lib/content";
import { glossary } from "@/lib/symbols";

/**
 * Which lessons use each glossary symbol, built once at build time as a static file. The /symbols pages load it
 * only when a reader opens a "Used in N lessons" list (components/symbols/UsedIn.tsx): written into every page,
 * these lists made the glossary too large to deploy. Saved for offline use with the other site files.
 *
 * Shape: { lessons: [href, title, course, year][], usedIn: { [symbolId]: lessonIndex[] } }
 */
export const dynamic = "force-static";

export function GET() {
  const site = getSite();
  const index = new Map(site.pages.map((p, i) => [p.slug, i]));
  const lessons = site.pages.map((p) => [p.href, p.title, p.course, p.yearNumber]);
  const usedIn = Object.fromEntries(glossary(site).map((e) => [e.id, e.pages.map((p) => index.get(p.slug)!)]));
  return Response.json({ lessons, usedIn });
}
