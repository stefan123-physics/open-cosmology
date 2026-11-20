import katex from "katex";
import type { PageSymbol } from "@/lib/symbols";
import { ReadSymbolsButton } from "@/components/speech/ReadButtons";

/**
 * "Symbols on this page": every symbol the lesson uses, with its meaning here and how to say it.
 * The accessible counterpart of the tap-to-explain popups (components/SymbolPopups.tsx).
 * Its own speaker button reads each row as "name. meaning. Unit: …" (lib/read-text.ts reads .ps-row as one block);
 * the glyph and the "Say it" line are skipped there, since read-aloud already says the name.
 */
export function PageSymbols({ symbols }: { symbols: PageSymbol[] }) {
  if (!symbols.length) return null;
  return (
    <section className="page-symbols" aria-labelledby="page-symbols-title" data-noread>
      <div className="section-head">
        <h2 id="page-symbols-title">Symbols on this page</h2>
        <ReadSymbolsButton />
      </div>
      <details>
        <summary>
          Show the {symbols.length} {symbols.length === 1 ? "symbol" : "symbols"} used here
        </summary>
        <dl>
          {symbols.map((s) => (
            <div key={s.id} className="ps-row">
              <dt>
                <span
                  className="ps-glyph"
                  data-noread
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(s.display, { throwOnError: false }) }}
                />{" "}
                <a href={s.href}>{s.name}</a>
                <span className="sr-only">.</span>
              </dt>
              <dd>
                {s.meaning} {s.unit && <span className="ps-unit">Unit: {s.unit}.</span>}{" "}
                <span className="muted" data-noread>
                  Say it: “{s.spoken}”{s.sounds && <> (sounds like “{s.sounds}”)</>}.
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="muted" data-noread>
          Tap or click a symbol in a formula to see the same explanation. All symbols: <a href="/symbols">symbols and notation</a>.
        </p>
      </details>
    </section>
  );
}
