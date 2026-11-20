import type { Metadata } from "next";
import { getSite } from "@/lib/content";
import { glossary, symbolHrefs, symbolYearPath } from "@/lib/symbols";
import { yearName } from "@/lib/roman";
import { shareMetadata } from "@/lib/share";
import { GreekPrimer } from "@/components/GreekPrimer";
import { LinkBar } from "@/components/LinkBar";

const DESCRIPTION =
  "Every mathematical symbol used in the lessons: what it means, how to say it, and where it appears. Generated from the lessons themselves.";

export const metadata: Metadata = {
  title: "Symbols and notation",
  description: DESCRIPTION,
  ...shareMetadata("Symbols and notation", DESCRIPTION, "website"),
};

/**
 * The index of the symbols glossary (docs/SYMBOLS_PLAN.md). The cards themselves are on one page per year
 * (app/symbols/[year]/page.tsx): on a single page they grew past Vercel's 20 MB limit for prerendered pages.
 */
export default function SymbolsPage() {
  const site = getSite();
  const entries = glossary(site);
  const hrefOf = symbolHrefs(site);
  const usedInYear = (y: number) => entries.filter((e) => e.pages.some((p) => p.yearNumber === y)).length;
  const years = site.years.filter((y) => usedInYear(y.number) > 0);
  // Older links point to /symbols#sym-<id>; send them on to the card's year page.
  const yearOf = Object.fromEntries(entries.map((e) => [e.id, e.firstYear]));
  const redirect = `(function(){var m=${JSON.stringify(yearOf)};var h=location.hash;if(h.indexOf("#sym-")===0){var y=m[decodeURIComponent(h.slice(5))];if(y)location.replace("/symbols/year-"+y+h);}})();`;

  return (
    <div className="page-narrow prose symbols-page" data-read-root>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <h1>Symbols and notation</h1>
      <p>
        Every symbol in this glossary is used somewhere in the lessons. Each one has its meaning, how to say it, and links to the
        lessons that use it. There is one page per year of the programme, with the symbols used in that year and the meanings
        they have there; the index below links each symbol to the year it first appears. The list is built from the lessons
        themselves, so it grows as the site grows.
      </p>
      <p>
        The same letter often means different things in different courses: σ is a velocity spread in one lesson and a cross
        section in another. Where that happens, each meaning says where it applies. In a lesson, tap or click a symbol in a
        formula to see its meaning there; every lesson also lists its symbols near the end, under “Symbols on this page”. Under
        every formula, “In words” spells the whole formula out.
      </p>

      <h2>By year</h2>
      <nav aria-label="Symbols by year" className="sym-years">
        {years.map((y) => (
          <LinkBar
            key={y.number}
            href={symbolYearPath(y.number)}
            kicker={`${yearName(y.number)}`}
            title={y.title}
            sub={`${usedInYear(y.number)} symbols, with the meanings they have in this year's lessons`}
          />
        ))}
      </nav>

      <h2>Find a symbol</h2>
      <nav aria-label="Jump to a symbol" className="sym-index" data-noread>
        {entries
          .filter((e) => e.glyphs.length)
          .map((e) => (
            <a key={e.id} href={hrefOf(e.id)} aria-label={e.name}>
              {e.glyphs[0]}
            </a>
          ))}
      </nav>

      <GreekPrimer entries={entries} hrefOf={hrefOf} />
    </div>
  );
}
