import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/content";
import { glossaryHref, KIND_LABEL, loadGlossary } from "@/lib/glossary";
import { entriesByLetter, LETTERS, senseLabel } from "@/lib/glossary-site";
import { shareMetadata } from "@/lib/share";
import { LetterBar } from "@/components/glossary/LetterBar";
import { CopyLink, Senses } from "@/components/glossary/EntryTools";
import { SaveWord } from "@/components/terms/SaveWord";
import { TermPanel } from "@/components/terms/TermPanel";
import { LinkBar } from "@/components/LinkBar";

/**
 * One letter of the glossary of difficult words (docs/GLOSSARY-PLAN.md §7): every word under that letter as a
 * definition list, each with its anchor (/glossary/i#isotropic). The lessons that use each meaning are not written
 * into the page but loaded on demand (components/glossary/EntryTools.tsx), so every page stays small.
 */
type Params = { letter: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return LETTERS.map((letter) => ({ letter }));
}

const show = (l: string) => (l === "0-9" ? "0–9" : l.toUpperCase());

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const l = (await params).letter;
  const title = `Glossary: ${show(l)}`;
  const description = `Difficult words starting with ${show(l)} on Open Cosmology, explained in plain English, with where each meaning is used.`;
  return { title, description, ...shareMetadata(title, description, "website") };
}

export default async function GlossaryLetterPage({ params }: { params: Promise<Params> }) {
  const letter = (await params).letter;
  if (!LETTERS.includes(letter)) notFound();
  const site = getSite();
  const byLetter = entriesByLetter();
  const counts = new Map([...byLetter].map(([l, list]) => [l, list.length]));
  const entries = byLetter.get(letter) ?? [];
  const byId = new Map(loadGlossary().entries.map((e) => [e.id, e]));
  const i = LETTERS.indexOf(letter);
  const prev = LETTERS.slice(0, i).reverse().find((l) => counts.get(l));
  const next = LETTERS.slice(i + 1).find((l) => counts.get(l));
  const words = (l: string) => `${counts.get(l)} ${counts.get(l) === 1 ? "word" : "words"}`;

  return (
    <div className="page-narrow prose glossary-page" data-read-root>
      <p className="muted" data-noread>
        <a href="/glossary">Glossary</a> · {show(letter)}
      </p>
      <h1>Glossary: {show(letter)}</h1>
      <LetterBar counts={counts} current={letter} />
      {entries.length === 0 ? (
        <p>No words start with {show(letter)} yet.</p>
      ) : (
        <>
          <p className="muted">
            {entries.length} {entries.length === 1 ? "word" : "words"}. Each gives its usual meaning on this site first; a word
            with more than one meaning lists them all, with the courses where each applies.
          </p>
          <dl className="gl-list">
            {entries.map((e) => {
              const main = e.meanings.find((m) => !m.pages && !m.courses) ?? e.meanings[0];
              return (
                <div key={e.id} className="gl-entry">
                  <dt>
                    <dfn id={e.id} lang={e.lang}>
                      {e.term}
                    </dfn>
                    {e.say && (
                      <span className="gl-say">
                        <span className="sr-only">Say it: </span>
                        {e.say}
                      </span>
                    )}
                    <span className="gl-kind">{KIND_LABEL[e.kind]}</span>
                  </dt>
                  <dd>
                    <p className="gl-short">{main.short}</p>
                    {e.everyday && (
                      <p>
                        <span className="gl-sense-label">Not the everyday meaning:</span> {e.everyday}
                      </p>
                    )}
                    {e.origin && (
                      <p className="gl-origin">
                        <span className="gl-sense-label">Origin:</span> {e.origin}
                      </p>
                    )}
                    <Senses
                      id={e.id}
                      term={e.term}
                      senses={e.meanings.map((m, k) => ({ label: senseLabel(site, e, k), short: m.short, long: m.long, here: m.here }))}
                    />
                    {e.related.length > 0 && (
                      <p className="gl-related">
                        <span className="gl-sense-label">Related:</span>{" "}
                        {e.related.flatMap((r) => byId.get(r) ?? []).map((r, k) => (
                          <span key={r.id}>
                            {k > 0 && ", "}
                            <a href={glossaryHref(r)} data-open-term={r.id}>
                              {r.term}
                            </a>
                          </span>
                        ))}
                      </p>
                    )}
                    <p className="gl-tools" data-noread>
                      <SaveWord id={e.id} term={e.term} compact />
                      <CopyLink href={`/glossary/${letter}#${e.id}`} term={e.term} />
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </>
      )}
      <nav aria-label="Other letters" className="sym-year-nav">
        {prev && <LinkBar back href={`/glossary/${prev}`} kicker="Previous letter" title={show(prev)} sub={words(prev)} />}
        {next && <LinkBar href={`/glossary/${next}`} kicker="Next letter" title={show(next)} sub={words(next)} />}
        <LinkBar href="/glossary" title="The whole glossary" sub="Search every word, filter by course, and your saved words" />
      </nav>
      <TermPanel terms={[]} lookup />
    </div>
  );
}
