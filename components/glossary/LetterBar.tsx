import { LETTERS } from "@/lib/glossary-site";

/**
 * The A to Z bar of the glossary (sticky under the slim bar). Letters without words are shown faded and are not
 * links, so they are not in the Tab order.
 */
export function LetterBar({ counts, current }: { counts: Map<string, number>; current?: string }) {
  return (
    <nav className="gl-letters" aria-label="Glossary by letter" data-noread>
      <ul>
        {LETTERS.map((l) => {
          const n = counts.get(l) ?? 0;
          const label = l === "0-9" ? "0–9" : l.toUpperCase();
          return (
            <li key={l}>
              {n === 0 ? (
                <span className="gl-letter empty" aria-hidden="true" title="No words yet">
                  {label}
                </span>
              ) : (
                <a
                  className={`gl-letter ${l === current ? "on" : ""}`}
                  href={`/glossary/${l}`}
                  aria-current={l === current ? "page" : undefined}
                  aria-label={`${label}: ${n} ${n === 1 ? "word" : "words"}`}
                >
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
