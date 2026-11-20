import type { PageTerm } from "@/lib/glossary";
import { ReadTermsButton } from "@/components/speech/ReadButtons";
import { SaveWord } from "@/components/terms/SaveWord";
import { SaveAllWords } from "@/components/terms/SaveAllWords";

/**
 * "Words on this page" (docs/GLOSSARY-PLAN.md §6): every glossary word the lesson uses, with its meaning here, grouped
 * as New here (this lesson explains it), Also used (explained elsewhere) and Academic. The accessible counterpart of
 * the marks in the text: each word opens the same word panel (components/terms/TermPanel.tsx, through
 * data-open-term; without JavaScript it is a link to the glossary entry). Its speaker button reads each row as
 * "word. meaning" (lib/read-text.ts reads .pt-row as one block). The word panel reads each word, its link and its short
 * meaning from this list (a[data-open-term], .pt-short), so the page does not carry them twice.
 */
export function PageTerms({ terms }: { terms: PageTerm[] }) {
  if (!terms.length) return null;
  const groups: [string, PageTerm[]][] = [
    ["New here", terms.filter((t) => t.newHere && t.kind !== "academic")],
    ["Also used", terms.filter((t) => !t.newHere && t.kind !== "academic")],
    ["Academic", terms.filter((t) => t.kind === "academic")],
  ];
  const fresh = groups[0][1];
  return (
    <section className="page-terms" aria-labelledby="page-terms-title" data-noread>
      <div className="section-head">
        <h2 id="page-terms-title">Words on this page</h2>
        <ReadTermsButton />
      </div>
      <details>
        <summary>
          Show the {terms.length} {terms.length === 1 ? "word" : "words"} used here
        </summary>
        {groups
          .filter(([, list]) => list.length)
          .map(([label, list]) => (
            <div key={label} className="pt-group">
              <h3>{label}</h3>
              <dl>
                {list.map((t) => (
                  <div key={t.id} className="pt-row">
                    <dt>
                      <a href={t.href} data-open-term={t.id} lang={t.lang}>
                        {t.term}
                      </a>
                      <span className="sr-only">.</span>
                    </dt>
                    <dd>
                      <span className="pt-short">{t.short}</span>
                      {t.introduced && (
                        <span className="pt-intro muted">
                          {" "}
                          Explained in <a href={t.introduced.href}>{t.introduced.title}</a>.
                        </span>
                      )}
                    </dd>
                    <SaveWord id={t.id} term={t.term} compact className="pt-save" />
                  </div>
                ))}
              </dl>
            </div>
          ))}
        {fresh.length > 1 && <SaveAllWords ids={fresh.map((t) => t.id)} />}
        <p className="muted" data-noread>
          Tap or click a word, here or in the text, for its meaning in this lesson. All words: the{" "}
          <a href="/glossary">glossary</a>. How many words are marked in the text: Reading options (the “Aa” button).
        </p>
      </details>
    </section>
  );
}
