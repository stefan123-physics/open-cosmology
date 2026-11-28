import { getSite, isProblemSet } from "@/lib/content";
import { setUnits } from "@/lib/set-units";

/**
 * The scoring units of every problem set (slug → units), built once at build time as a static file. The homepage's
 * "Your studies" card loads it only for a reader who has started a set, to show that set's score without opening it
 * (components/progress/ContinueCard.tsx). `content:check` checks that these units match each set page.
 */
export const dynamic = "force-static";

export function GET() {
  const site = getSite();
  return Response.json(Object.fromEntries(site.pages.filter(isProblemSet).map((p) => [p.slug, setUnits(p.body)])));
}
