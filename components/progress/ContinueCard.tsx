"use client";
import Link from "next/link";
import { resetProgress } from "@/lib/progress";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { showToast } from "@/components/ui/Toast";
import { useProgress } from "./useProgress";

export type PathPage = { slug: string; title: string; href: string; course: string; prerequisites: string[] };

/**
 * Homepage card: where you left off, how far you are, and a suggested next lesson — the first page
 * in programme order that you haven't studied and whose prerequisites you have.
 */
export function ContinueCard({ pages }: { pages: PathPage[] }) {
  const p = useProgress();
  const [ask, dialog] = useConfirm();
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
