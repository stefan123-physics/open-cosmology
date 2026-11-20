import type { Metadata } from "next";
import Link from "next/link";
import { getSite } from "@/lib/content";
import { glossaryHref, loadGlossary } from "@/lib/glossary";
import { entriesByLetter, mostUsed } from "@/lib/glossary-site";
import { yearName } from "@/lib/roman";
import { shareMetadata } from "@/lib/share";
import { LetterBar } from "@/components/glossary/LetterBar";
import { GlossaryIndex } from "@/components/glossary/GlossaryIndex";
import { TermPanel } from "@/components/terms/TermPanel";
import { MyWords } from "@/components/glossary/MyWords";

const DESCRIPTION =
  "Difficult words on Open Cosmology explained in plain English: physics and maths terms, academic English and abbreviations, with the meaning each has in each course.";

export const metadata: Metadata = {
  title: "Glossary",
  description: DESCRIPTION,
  ...shareMetadata("Glossary", DESCRIPTION, "website"),
};

/**
 * The glossary of difficult words (docs/GLOSSARY-PLAN.md §7): search, filters, the A to Z bar and a short "Start
 * here" list. The entries themselves are on one page per letter (app/glossary/[letter]/page.tsx); the search loads
 * its words from /glossary-usage.json, so this page stays small however large the glossary grows.
 */
export default function GlossaryPage() {
  const site = getSite();
  const total = loadGlossary().entries.length;
  const counts = new Map([...entriesByLetter()].map(([l, list]) => [l, list.length]));
  const start = mostUsed(site, 20);
  const years = site.years.map((y) => ({ number: y.number, label: `${yearName(y.number)}: ${y.title}` }));
  const courses = site.courses.map((c) => ({ id: c.id, label: `${c.ocwNumber} ${c.title}`, year: c.year }));

  return (
    <div className="page-narrow prose glossary-page" data-read-root>
      <h1>Glossary</h1>
      <p className="lead">Difficult words on Open Cosmology, explained in plain English.</p>
      <p>
        The glossary has {total.toLocaleString("en-GB")} words: terms of physics and astronomy, the language of mathematics, the
        academic English that science writing takes for granted (<em>isotropic</em>, <em>a priori</em>), and abbreviations. Many
        words mean different things in different courses, so every meaning says where it applies. In a lesson, a word with a
        dotted underline has an explanation: tap or click it, or press <kbd>w</kbd> to move to the next one. Every lesson also
        lists its words at the end, under “Words on this page”. For symbols in formulas, see{" "}
        <Link href="/symbols">Symbols and notation</Link>.
      </p>

      <GlossaryIndex total={total} years={years} courses={courses} />

      <h2>By letter</h2>
      <LetterBar counts={counts} />

      {start.length > 0 && (
        <>
          <h2>Start here</h2>
          <p>The words the lessons use most, a good place to begin.</p>
          <ul className="gl-start">
            {start.map((e) => (
              <li key={e.id}>
                <a href={glossaryHref(e)} data-open-term={e.id} lang={e.lang}>
                  {e.term}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <MyWords />

      <TermPanel terms={[]} lookup />
    </div>
  );
}
