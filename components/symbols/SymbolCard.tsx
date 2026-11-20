import katex from "katex";
import type { Page } from "@/lib/content";
import { meaningsInYear, symbolHref, type GlossaryEntry, type SymbolEntry, type SymbolMeaning } from "@/lib/symbols";
import { yearName } from "@/lib/roman";
import { UsedIn } from "./UsedIn";

export const KIND_ORDER: SymbolEntry["kind"][] = ["latin", "greek", "compound", "constant", "other", "relation", "operator", "calculus", "accent"];
export const KIND_LABEL: Record<SymbolEntry["kind"], string> = {
  latin: "Letters",
  greek: "Greek letters",
  compound: "Named quantities (a letter with a subscript)",
  constant: "Constants",
  other: "Other symbols",
  relation: "Relations",
  operator: "Operators and functions",
  calculus: "Calculus",
  accent: "Accents (marks on a letter)",
};

// The glyph is decorative (aria-hidden; the card's heading names the symbol), so it is rendered without MathML.
const glyph = (s: string) => katex.renderToString(s, { throwOnError: false, output: "html" });

function Scope({ meaning, pages, pageBySlug }: { meaning: SymbolMeaning; pages: Page[]; pageBySlug: Map<string, Page> }) {
  if (meaning.pages?.length) {
    const linked = meaning.pages.map((s) => pageBySlug.get(s)).filter((p): p is Page => !!p && pages.includes(p));
    return (
      <span className="sym-scope">
        On{" "}
        {linked.map((p, i) => (
          <span key={p.slug}>
            {i > 0 && (i === linked.length - 1 ? " and " : ", ")}
            <a href={p.href}>{p.title}</a>
          </span>
        ))}
        :
      </span>
    );
  }
  if (meaning.courses?.length) return <span className="sym-scope">In {meaning.courses.join(", ")}:</span>;
  return null;
}

const listYears = (id: string, ys: number[]) =>
  ys.map((y, i) => (
    <span key={y}>
      {i > 0 && (i === ys.length - 1 ? " and " : ", ")}
      <a href={symbolHref(id, y)}>{yearName(y)}</a>
    </span>
  ));

/**
 * One symbol on the /symbols page of a year: glyph, name, how to say it, the meanings it has in that year's lessons
 * and where each applies, the other years that use it, and (loaded on demand) the lessons.
 */
export function SymbolCard({ s, year, pageBySlug }: { s: GlossaryEntry; year: number; pageBySlug: Map<string, Page> }) {
  const { meanings, pages } = meaningsInYear(s, year);
  const scoped = meanings.length > 1;
  const otherYears = [...new Set(s.pages.map((p) => p.yearNumber))].filter((y) => y !== year).sort((a, b) => a - b);
  return (
    <section className="sym-card" id={`sym-${s.id}`} aria-labelledby={`sym-${s.id}-name`}>
      <div className="sym-glyph" aria-hidden="true" dangerouslySetInnerHTML={{ __html: glyph(s.display) }} />
      <div className="sym-text">
        <h3 id={`sym-${s.id}-name`} className="sym-name">
          {s.name} <code className="sym-tex">{[...(s.tex ?? []), ...(s.forms ?? [])].join(", ")}</code>
        </h3>
        <p className="sym-say">
          Say it: <q>{s.spoken}</q>
          {s.sounds && <> (sounds like “{s.sounds}”)</>}
        </p>
        <ul className="sym-meanings">
          {meanings.map((m, i) => (
            <li key={i}>
              {scoped && <Scope meaning={m} pages={pages} pageBySlug={pageBySlug} />} {m.text}
              {m.unit && <span className="sym-unit"> Unit: {m.unit}.</span>}
            </li>
          ))}
        </ul>
        {otherYears.length > 0 && <p className="sym-also muted">Also used in {listYears(s.id, otherYears)}.</p>}
        <UsedIn id={s.id} year={year} count={pages.length} />
      </div>
    </section>
  );
}
