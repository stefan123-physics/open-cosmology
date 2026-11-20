"use client";
import { useState } from "react";
import { loadGlossaryData, type GlossaryData } from "@/lib/glossary-client";
import { showToast } from "@/components/ui/Toast";

/** "Copy link" for a glossary entry: copies the full address of its anchor. */
export function CopyLink({ href, term }: { href: string; term: string }) {
  return (
    <button
      type="button"
      className="secondary small gl-copy"
      data-noread
      onClick={async () => {
        const url = location.origin + href;
        try {
          await navigator.clipboard.writeText(url);
          showToast(`Link to “${term}” copied.`);
        } catch {
          showToast(`Copying is not allowed here. The link is ${url}`);
        }
      }}
    >
      Copy link<span className="sr-only"> to {term}</span>
    </button>
  );
}

/**
 * "All meanings and where they are used": each meaning with its label is written into the page; the lessons that use
 * it are loaded on demand from /glossary-usage.json when the disclosure is first opened (as /symbols does), which
 * keeps the letter pages small.
 */
export function Senses({ id, term, senses }: { id: string; term: string; senses: { label: string; short: string; long?: string; here?: string }[] }) {
  const [data, setData] = useState<GlossaryData | null>(null);
  const [failed, setFailed] = useState(false);
  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!e.currentTarget.open || data) return;
    setFailed(false);
    loadGlossaryData()
      .then(setData)
      .catch(() => setFailed(true));
  };
  return (
    <details className="gl-senses" onToggle={onToggle}>
      <summary>
        All meanings and where they are used<span className="sr-only">: {term}</span>
      </summary>
      <ol>
        {senses.map((s, i) => {
          const lessons = data?.senses[id]?.[i]?.map((n) => data.lessons[n]) ?? null;
          return (
            <li key={i}>
              <p>
                <span className="gl-sense-label">{s.label}:</span> {s.short}
              </p>
              {s.long && <p className="gl-long">{s.long}</p>}
              {s.here && (
                <p className="gl-long">
                  <span className="gl-sense-label">Here:</span> {s.here}
                </p>
              )}
              {lessons ? (
                lessons.length ? (
                  <details className="gl-lessons">
                    <summary>
                      Used in {lessons.length} {lessons.length === 1 ? "lesson" : "lessons"}
                    </summary>
                    <ul>
                      {lessons.map(([href, title, course]) => (
                        <li key={href}>
                          <a href={href}>{title}</a> <span className="muted">({course})</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <p className="muted small">Not used in a lesson yet.</p>
                )
              ) : failed ? (
                <p className="muted small" role="status">
                  The list of lessons could not be loaded. Close and open this again to retry.
                </p>
              ) : (
                <p className="muted small" role="status">
                  Loading the lessons…
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </details>
  );
}
