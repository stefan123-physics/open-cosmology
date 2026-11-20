import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/content";
import { glossary, symbolYearPath } from "@/lib/symbols";
import { yearName } from "@/lib/roman";
import { shareMetadata } from "@/lib/share";
import { LinkBar } from "@/components/LinkBar";
import { KIND_LABEL, KIND_ORDER, SymbolCard } from "@/components/symbols/SymbolCard";

/**
 * The symbols glossary for one year of the programme (docs/SYMBOLS_PLAN.md): every symbol used in that year's lessons,
 * with the meanings that apply there. /symbols is the index. Splitting by year, with each page holding only its own
 * year's meanings, keeps every page well below Vercel's 20 MB limit for prerendered pages as lessons are added.
 */
type Params = { year: string };

export const dynamicParams = false;

function yearsWithSymbols() {
  const site = getSite();
  const entries = glossary(site);
  const usedIn = (e: (typeof entries)[number], y: number) => e.pages.some((p) => p.yearNumber === y);
  return { site, entries, usedIn, years: site.years.filter((y) => entries.some((e) => usedIn(e, y.number))) };
}

export function generateStaticParams(): Params[] {
  return yearsWithSymbols().years.map((y) => ({ year: `year-${y.number}` }));
}

const yearNumber = (param: string) => Number(/^year-(\d+)$/.exec(param)?.[1] ?? NaN);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const n = yearNumber((await params).year);
  const title = `Symbols in ${yearName(n)}`;
  const description = `Every mathematical symbol used in ${yearName(n)} of the programme: what it means there, how to say it, and where it appears.`;
  return { title, description, ...shareMetadata(title, description, "website") };
}

export default async function SymbolsYearPage({ params }: { params: Promise<Params> }) {
  const n = yearNumber((await params).year);
  const { site, entries, usedIn, years } = yearsWithSymbols();
  const year = years.find((y) => y.number === n);
  if (!year) notFound();
  const inYear = entries.filter((e) => usedIn(e, n));
  const i = years.indexOf(year);
  const prev = years[i - 1];
  const next = years[i + 1];

  return (
    <div className="page-narrow prose symbols-page" data-read-root>
      <p className="muted" data-noread>
        <a href="/symbols">Symbols and notation</a> · {yearName(n)}
      </p>
      <h1>Symbols in {yearName(n)}</h1>
      <p>
        The {inYear.length} symbols used in {yearName(n)}, {year.title}. Each card gives the meanings the symbol has in this
        year&apos;s lessons, how to say it, and which lessons use it. Many letters also appear in other years, often with other
        meanings; each card links to them.
      </p>

      <nav aria-label={`Jump to a symbol used in ${yearName(n)}`} className="sym-index" data-noread>
        {inYear
          .filter((e) => e.glyphs.length)
          .map((e) => (
            <a key={e.id} href={`#sym-${e.id}`} aria-label={e.name}>
              {e.glyphs[0]}
            </a>
          ))}
      </nav>

      {KIND_ORDER.filter((k) => inYear.some((e) => e.kind === k)).map((k) => (
        <section key={k} aria-labelledby={`kind-${k}`}>
          <h2 id={`kind-${k}`} className="sym-kind">
            {KIND_LABEL[k]}
          </h2>
          {inYear
            .filter((e) => e.kind === k)
            .map((e) => (
              <SymbolCard key={e.id} s={e} year={n} pageBySlug={site.pageBySlug} />
            ))}
        </section>
      ))}

      <nav aria-label="Other years" className="sym-year-nav">
        {prev && <LinkBar back href={symbolYearPath(prev.number)} kicker="Previous year" title={`${yearName(prev.number)}`} sub={prev.title} />}
        {next && <LinkBar href={symbolYearPath(next.number)} kicker="Next year" title={`${yearName(next.number)}`} sub={next.title} />}
        <LinkBar href="/symbols" title="All symbols" sub="The index, the Greek alphabet and look-alike symbols" />
      </nav>
    </div>
  );
}
