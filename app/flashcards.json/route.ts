import { getSite } from "@/lib/content";
import { pageCards } from "@/lib/page-cards";

/** Every lesson's flashcards, built once at build time as a static file, for the /review page (and saved offline). */
export const dynamic = "force-static";

export function GET() {
  const site = getSite();
  const cards = site.pages.flatMap((p) =>
    pageCards(p).map((c) => ({ ...c, slug: p.slug, source: { title: p.title, href: p.href } }))
  );
  return Response.json({ cards });
}
