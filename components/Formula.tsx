import { renderDisplayTex } from "@/lib/tex";
import { texToSpeech } from "@/lib/speech";
import type { Reference } from "@/lib/schema";

export type FormulaProps = {
  /** LaTeX source */
  tex: string;
  /** Required: reference key ("mit" = the page's MIT source, or a key from frontmatter `references`) */
  cite: string;
  /** Where in the source, e.g. "Sec. 4.3.3, Eq. (4.3.5)" */
  at?: string;
  /** Optional name shown above the equation, e.g. "Instantaneous velocity" */
  label?: string;
  children?: React.ReactNode;
};

/** Display equation rendered with KaTeX at build time, always with a visible source citation. */
export function Formula({ tex, cite, at, label, children, resolved, capitals }: FormulaProps & { resolved?: Reference; capitals?: string[] }) {
  const where = [resolved?.location, at].filter(Boolean).join(", ");
  return (
    <figure className="formula" data-tex={tex}>
      {label && <div className="formula-label">{label}</div>}
      <div className="formula-body" dangerouslySetInnerHTML={{ __html: renderDisplayTex(tex) }} />
      {children && <figcaption className="formula-note">{children}</figcaption>}
      {/* The formula in words, from the same converter read-aloud uses (docs/SYMBOLS_PLAN.md, item 8). */}
      <details className="formula-words" data-noread>
        <summary>In words</summary>
        <p>{texToSpeech(tex, { capitals })}</p>
      </details>
      <div className="formula-cite" data-noread>
        Source:{" "}
        {resolved ? (
          resolved.url ? (
            <a href={resolved.url} target="_blank" rel="noopener noreferrer">
              {resolved.title}
            </a>
          ) : (
            resolved.title
          )
        ) : (
          <span className="cite-missing">missing reference “{cite}”</span>
        )}
        {where && <span>, {where}</span>}
      </div>
    </figure>
  );
}
