"use client";
import { useEffect } from "react";
import { recordVisit, setDone } from "@/lib/progress";
import { useProgress } from "./useProgress";

/** On every lesson: remembers the visit, and lets the reader mark the page as studied. */
export function PageProgress({ slug, href, title }: { slug: string; href: string; title: string }) {
  const p = useProgress();
  useEffect(() => {
    recordVisit(slug, href, title);
  }, [slug, href, title]);
  if (!p) return null;
  const done = !!p.done[slug];
  const quiz = p.quiz[slug];
  return (
    <div className="page-progress" data-noread>
      <button type="button" className={done ? "pp-done" : "secondary"} aria-pressed={done} onClick={() => setDone(slug, !done)}>
        {done ? "✓ Studied" : "Mark as studied"}
      </button>
      {quiz && (
        <span className="muted small">
          Best quiz score: {quiz.best} / {quiz.total}
        </span>
      )}
    </div>
  );
}
