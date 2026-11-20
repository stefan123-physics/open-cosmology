"use client";
import { useEffect, useId, useMemo, useState } from "react";
import { distance, fold, loadGlossaryData, type GlossaryData } from "@/lib/glossary-client";
import type { TermKind } from "@/lib/glossary";

/**
 * Search and filters of /glossary (docs/GLOSSARY-PLAN.md §7). The words come from /glossary-usage.json, loaded when
 * the page opens, so the page itself stays small. Search ignores case, accents and plural or -ing endings, and
 * suggests the nearest word when nothing matches. Each result opens the word panel (data-open-term), or without
 * JavaScript links to the entry.
 */
const KINDS: { id: "all" | TermKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "physics", label: "Physics" },
  { id: "maths", label: "Maths" },
  { id: "academic", label: "Academic" },
  { id: "abbreviation", label: "Abbreviations and names" },
];
const KIND_LABEL: Record<TermKind, string> = { physics: "Physics", maths: "Maths", academic: "Academic", abbreviation: "Abbreviation", named: "Named" };
const SHOWN = 60;

type Row = { id: string; term: string; short: string; href: string; kind: TermKind; names: string[]; courses: string[] };

export function GlossaryIndex({
  total,
  years,
  courses,
}: {
  total: number;
  years: { number: number; label: string }[];
  courses: { id: string; label: string; year: number }[];
}) {
  const [data, setData] = useState<GlossaryData | null>(null);
  const [failed, setFailed] = useState(false);
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<"all" | TermKind>("all");
  const [year, setYear] = useState(0);
  const [course, setCourse] = useState("");
  const [all, setAll] = useState(false);
  const ids = { results: useId(), status: useId(), year: useId(), course: useId() };

  useEffect(() => {
    loadGlossaryData()
      .then(setData)
      .catch(() => setFailed(true));
  }, []);
  useEffect(() => setAll(false), [q, kind, year, course]);

  const rows: Row[] = useMemo(
    () =>
      data
        ? Object.entries(data.words).map(([id, [term, short, href, k, forms, cs]]) => ({
            id,
            term,
            short,
            href,
            kind: k,
            names: [term, ...forms].map(fold),
            courses: cs,
          }))
        : [],
    [data]
  );

  const query = fold(q);
  const active = !!query || kind !== "all" || !!year || !!course;
  const yearCourses = new Set(courses.filter((c) => c.year === year).map((c) => c.id));
  const hits = useMemo(() => {
    if (!active) return [];
    const scored = rows.flatMap((r) => {
      if (kind !== "all" && r.kind !== kind && !(kind === "abbreviation" && r.kind === "named")) return [];
      if (course && !r.courses.includes(course)) return [];
      if (year && !r.courses.some((c) => yearCourses.has(c))) return [];
      if (!query) return [{ r, score: 2 }];
      const exact = r.names.some((n) => n === query);
      const start = r.names.some((n) => n.startsWith(query));
      const inside = r.names.some((n) => n.includes(` ${query}`) || n.includes(`-${query}`));
      return exact ? [{ r, score: 0 }] : start ? [{ r, score: 1 }] : inside ? [{ r, score: 2 }] : [];
    });
    return scored.sort((a, b) => a.score - b.score || a.r.term.localeCompare(b.r.term, "en", { sensitivity: "base" })).map((x) => x.r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, query, kind, year, course]);

  // "Did you mean …?": the closest word by spelling, when nothing matches.
  const suggestion = useMemo(() => {
    if (!query || hits.length || query.length < 3) return null;
    let best: { r: Row; d: number } | null = null;
    for (const r of rows)
      for (const n of r.names) {
        const d = distance(query, n);
        if (!best || d < best.d) best = { r, d };
      }
    return best && best.d <= Math.max(2, Math.round(query.length / 3)) ? best.r : null;
  }, [rows, query, hits.length]);

  const shown = all ? hits : hits.slice(0, SHOWN);
  return (
    <section className="gl-search" aria-label="Search the glossary" data-noread>
      <div className="gl-field">
        <label htmlFor={ids.results + "-q"} className="sr-only">
          Search the glossary
        </label>
        <input
          id={ids.results + "-q"}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${total.toLocaleString("en-GB")} words…`}
          aria-controls={ids.results}
          aria-describedby={ids.status}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <div className="gl-filters">
        <div className="gl-chips" role="group" aria-label="Kind of word">
          {KINDS.map((k) => (
            <button key={k.id} type="button" className={`ro-choice ${kind === k.id ? "on" : ""}`} aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>
              {k.label}
            </button>
          ))}
        </div>
        <div className="gl-selects">
          <label htmlFor={ids.year}>Year</label>
          <select
            id={ids.year}
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
              setCourse("");
            }}
          >
            <option value={0}>All</option>
            {years.map((y) => (
              <option key={y.number} value={y.number}>
                {y.label}
              </option>
            ))}
          </select>
          <label htmlFor={ids.course}>Course</label>
          <select id={ids.course} value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">All</option>
            {courses
              .filter((c) => !year || c.year === year)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
          </select>
        </div>
      </div>

      <p id={ids.status} className="gl-status muted" role="status" aria-live="polite">
        {failed
          ? "The words could not be loaded. Check your connection and reload the page; the letters below still work."
          : !data
            ? active
              ? "Loading the words…"
              : ""
            : !active
              ? ""
              : hits.length
                ? `${hits.length} ${hits.length === 1 ? "word" : "words"}`
                : "No words match."}
      </p>
      {suggestion && (
        <p className="gl-suggest">
          Did you mean{" "}
          <button type="button" className="linklike" onClick={() => setQ(suggestion.term)}>
            {suggestion.term}
          </button>
          ?
        </p>
      )}
      {shown.length > 0 && (
        <ul className="gl-results" id={ids.results}>
          {shown.map((r) => (
            <li key={r.id}>
              <a href={r.href} data-open-term={r.id} className="gl-result-term">
                {r.term}
              </a>{" "}
              <span className="gl-kind">{KIND_LABEL[r.kind]}</span>
              <span className="gl-result-short">{r.short}</span>
            </li>
          ))}
        </ul>
      )}
      {hits.length > shown.length && (
        <p>
          <button type="button" className="secondary small" onClick={() => setAll(true)}>
            Show all {hits.length} words
          </button>
        </p>
      )}
    </section>
  );
}
