"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { removeWord, useSavedWords } from "@/lib/saved-words";
import { loadGlossaryData, type GlossaryData } from "@/lib/glossary-client";
import { showToast } from "@/components/ui/Toast";

/**
 * "My words" on /glossary: the words saved with ☆ (lib/saved-words.ts, only in this browser), newest first, each
 * opening the word panel, with a remove button. They are reviewed as flashcards on /review.
 */
export function MyWords() {
  const saved = useSavedWords();
  const [words, setWords] = useState<GlossaryData["words"] | null>(null);
  useEffect(() => {
    if (saved.length && !words)
      loadGlossaryData()
        .then((d) => setWords(d.words))
        .catch(() => {});
  }, [saved.length, words]);

  return (
    <section className="gl-mywords" aria-labelledby="my-words-title" data-noread>
      <h2 id="my-words-title" tabIndex={-1}>
        My words
      </h2>
      {saved.length === 0 ? (
        <p className="muted">
          No saved words yet. Press ☆ next to a word, here or in a lesson, to keep it in this list and review it as a flashcard
          on <Link href="/review">Review</Link>. The list is kept only in this browser.
        </p>
      ) : (
        <>
          <p className="muted">
            {saved.length} saved {saved.length === 1 ? "word" : "words"}, reviewed as flashcards on <Link href="/review">Review</Link>.
            Kept only in this browser.
          </p>
          <ul>
            {[...saved].reverse().map(({ id, at }) => {
              const w = words?.[id];
              const term = w?.[0] ?? id.replace(/-/g, " ");
              return (
                <li key={id}>
                  <a href={w?.[2] ?? "/glossary"} data-open-term={id}>
                    {term}
                  </a>
                  <span className="gl-mw-short">{w ? w[1] : ""}</span>
                  <span className="muted small">saved {at}</span>
                  <button
                    type="button"
                    className="secondary small"
                    onClick={() => {
                      removeWord(id);
                      showToast(`“${term}” removed from My words.`);
                      document.getElementById("my-words-title")?.focus();
                    }}
                  >
                    Remove<span className="sr-only"> {term}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}
