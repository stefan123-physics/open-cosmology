import { moreData } from "@/lib/glossary";
import { entriesByLetter } from "@/lib/glossary-site";

/**
 * The longer text of the word panel for the words of one letter (fuller meaning and example per meaning, origin,
 * related words), built at build time as a static file. A lesson carries only what the panel shows at once
 * (lib/glossary.ts panelTerms); this file loads when a reader opens "More". Saved for offline use with the site files.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [...entriesByLetter().keys()].map((letter) => ({ letter }));
}

export async function GET(_: Request, { params }: { params: Promise<{ letter: string }> }) {
  const { letter } = await params;
  return Response.json(moreData(letter));
}
