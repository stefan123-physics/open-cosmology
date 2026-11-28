"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { resetProgress, scoreSet, type Progress, type ScoreUnit } from "@/lib/progress";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { showToast } from "@/components/ui/Toast";
import { useProgress } from "./useProgress";

export type PathPage = { slug: string; title: string; href: string; course: string; prerequisites: string[] };
/** A problem set on the path, with the slugs of the lessons it practises. */
export type PathSet = { slug: string; title: string; href: string; course: string; lessons: string[] };

const fmt = (n: number) => String(Math.round(n * 10) / 10);

/**
 * The problem set to suggest: one the reader has started and not finished (the most recently answered), else the first
 * set in programme order that is not done and whose lessons are all studied.
 */
function suggestSet(sets: PathSet[], p: Progress): { set: PathSet; started: boolean } | undefined {
  const at = (slug: string) => Object.values(p.problems[slug] ?? {}).reduce((m, e) => (e.at > m ? e.at : m), "");
  const open = sets.filter((s) => !p.done[s.slug] && at(s.slug)).sort((a, b) => at(b.slug).localeCompare(at(a.slug)));
  if (open[0]) return { set: open[0], started: true };
  const ready = sets.find((s) => !p.done[s.slug] && s.lessons.length > 0 && s.lessons.every((l) => p.done[l]));
  return ready && { set: ready, started: false };
}

/** The score of a started set, from /set-units.json (loaded only when there is one to show). */
function useSetScore(slug: string | undefined, p: Progress | null) {
  const [units, setUnits] = useState<Record<string, ScoreUnit[]> | null>(null);
  useEffect(() => {
    if (!slug || units) return;
    let alive = true;
    fetch("/set-units.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => alive && d && setUnits(d))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [slug, units]);
  const u = slug ? units?.[slug] : undefined;
  return u && p ? scoreSet(u, p.problems[slug!]) : null;
}

/**
 * Homepage card: where you left off, how far you are, a suggested next lesson (the first page in programme order
 * that you haven't studied and whose prerequisites you have) and a problem set to practise (suggestSet below).
 */
export function ContinueCard({ pages, sets = [] }: { pages: PathPage[]; sets?: PathSet[] }) {
  const p = useProgress();
  const [ask, dialog] = useConfirm();
  const practise = p ? suggestSet(sets, p) : undefined;
  const score = useSetScore(practise?.started ? practise.set.slug : undefined, p);
  if (!p) return null;
  const clear = async () => {
    const ok = await ask({
      title: "Clear study progress",
      message: (
        <p>
          Clear your studied lessons, quiz scores and where you left off in this browser? Your flashcard progress stays.
        </p>
      ),
      confirmLabel: "Clear progress",
      destructive: true,
      // The button goes away with the progress; focus the card's heading instead.
      fallbackFocus: () => document.getElementById("continue-title"),
    });
    if (!ok) return;
    resetProgress();
    showToast("Study progress cleared.");
  };
  const doneCount = pages.filter((pg) => p.done[pg.slug]).length;
  const started = doneCount > 0 || !!p.last;
  const next =
    pages.find((pg) => !p.done[pg.slug] && pg.prerequisites.every((s) => p.done[s])) ?? pages.find((pg) => !p.done[pg.slug]);
  const last = p.last && pages.some((pg) => pg.slug === p.last!.slug) ? p.last : undefined;
  return (
    <section className="continue-card" aria-labelledby="continue-title">
      <h2 id="continue-title" tabIndex={-1}>{started ? "Your studies" : "Where to begin"}</h2>
      {started ? (
        <>
          <p>
            You have studied <strong>{doneCount}</strong> of {pages.length} lessons.
          </p>
          <div className="cp-bar big" aria-hidden="true">
            <span style={{ width: `${(doneCount / Math.max(1, pages.length)) * 100}%` }} />
          </div>
          <ul>
            {last && (
              <li>
                Continue where you left off: <Link href={last.href}>{last.title}</Link>
              </li>
            )}
            {next && next.slug !== last?.slug && (
              <li>
                Suggested next: <Link href={next.href}>{next.title}</Link> <span className="muted">({next.course})</span>
              </li>
            )}
            {practise && practise.set.slug !== last?.slug && (
              <li>
                {practise.started ? "Finish the problem set" : "Practise"}: <Link href={practise.set.href}>{practise.set.title}</Link>{" "}
                <span className="muted">
                  ({practise.set.course}
                  {score && score.total > 0 && `, ${fmt(score.earned - score.extra)} of ${fmt(score.total)} points so far`})
                </span>
              </li>
            )}
          </ul>
          <button type="button" className="secondary small" onClick={clear}>
            Clear my progress
          </button>
        </>
      ) : (
        <p>
          Start with <Link href={pages[0]?.href ?? "/courses"}>{pages[0]?.title ?? "the programme"}</Link>, or explore the cosmology
          themes below. Mark lessons as studied (or pass their quiz) and this card will track your progress and suggest what
          to read next. Your progress is saved only in this browser.
        </p>
      )}
      {dialog}
    </section>
  );
}
