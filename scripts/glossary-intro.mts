/**
 * Lists the "First explained in" links of the glossary of difficult words for review (npm run glossary:intro).
 *
 * The link of each meaning is its introducedIn, else the first lesson, among those where the meaning applies, that
 * writes the word in bold (lib/glossary.ts, defaultIntroductions). This prints every introducedIn that points later
 * than that default, with the bold sentence of the earlier lesson, so a reader can decide whether the earlier lesson
 * really explains the word (then drop introducedIn) or only mentions it in passing (then keep it).
 * `--all` also prints every meaning that has no link.
 */
import { getSite, orderedPages } from "../lib/content";
import { defaultIntroductions, introductionOf, loadGlossary, senseKey } from "../lib/glossary";

const site = getSite();
const { entries } = loadGlossary();
const order = new Map(orderedPages(site).map((p, i) => [p.slug, i]));
const all = process.argv.includes("--all");

const context = (slug: string, forms: string[]) => {
  const body = site.pageBySlug.get(slug)!.body;
  for (const f of forms) {
    const i = body.toLowerCase().indexOf("**" + f.toLowerCase());
    if (i >= 0) return body.slice(Math.max(0, i - 90), i + 110).replace(/\s+/g, " ");
  }
  return "(in a bold phrase)";
};

let meanings = 0, linked = 0, later = 0;
const unlinked: string[] = [];
for (const e of entries) {
  e.meanings.forEach((m, i) => {
    meanings++;
    const intro = introductionOf(site, e, m);
    if (intro) linked++;
    else if (e.kind !== "academic") unlinked.push(`${e.id}#${i}: ${m.short.slice(0, 70)}`);
    if (!m.introducedIn) return;
    const auto = defaultIntroductions(site, entries).get(senseKey(e, m));
    if (!auto || auto === m.introducedIn || order.get(auto)! > order.get(m.introducedIn)!) return;
    later++;
    const a = site.pageBySlug.get(auto)!;
    console.log(`${e.id}#${i}: introducedIn ${m.introducedIn}; earlier bold in ${a.course}/${auto}:\n    …${context(auto, e.allForms)}…`);
  });
}
console.log(`\n${meanings} meanings, ${linked} with a "First explained in" link; ${later} introducedIn later than an earlier bold.`);
if (all) console.log(`\nNo link (no lesson writes the word in bold in this meaning):\n${unlinked.join("\n")}`);
