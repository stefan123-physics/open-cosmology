"use client";

import { useState } from "react";

/** lessons: [href, title, course, year] */
type Usage = { lessons: [string, string, string, number][]; usedIn: Record<string, number[]> };

// One download for the whole page, shared by every card, started the first time any list is opened.
let usage: Promise<Usage> | undefined;
const loadUsage = () => {
  usage ??= fetch("/symbols-usage.json").then((r) => {
    if (!r.ok) throw new Error(String(r.status));
    return r.json() as Promise<Usage>;
  });
  usage.catch(() => (usage = undefined)); // allow a retry after a failure (offline, say)
  return usage;
};

/**
 * "Used in N lessons" on a /symbols card. The lesson list is loaded on demand from /symbols-usage.json rather than
 * written into the page, which keeps the glossary pages small.
 */
export function UsedIn({ id, year, count }: { id: string; year: number; count: number }) {
  const [lessons, setLessons] = useState<[string, string, string, number][] | null>(null);
  const [failed, setFailed] = useState(false);

  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!e.currentTarget.open || lessons) return;
    setFailed(false);
    loadUsage()
      .then((u) => setLessons((u.usedIn[id] ?? []).map((i) => u.lessons[i]).filter((l) => l[3] === year)))
      .catch(() => setFailed(true));
  };

  return (
    <details className="sym-used" onToggle={onToggle}>
      <summary>
        Used in {count} {count === 1 ? "lesson" : "lessons"} this year
      </summary>
      {lessons ? (
        <ul>
          {lessons.map(([href, title, course]) => (
            <li key={href}>
              <a href={href}>{title}</a> <span className="muted">({course})</span>
            </li>
          ))}
        </ul>
      ) : failed ? (
        <p className="muted" role="status">
          The list could not be loaded. Close and open it again to retry.
        </p>
      ) : (
        <p className="muted" role="status">
          Loading the list of lessons…
        </p>
      )}
    </details>
  );
}
