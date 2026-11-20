"use client";
import { useEffect, useState } from "react";
import { recordVisit, resetProblems, scoreSet, setDone, type ScoreUnit } from "@/lib/progress";
import { unitsOnPage } from "@/components/exercise/units";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { useProgress } from "./useProgress";

const fmt = (n: number) => String(Math.round(n * 10) / 10);

/**
 * On a problem set, in place of "Mark as studied": the score so far and whether the set is done (75% of the points
 * of the non-optional problems, the same rule as the lesson quiz). The points come from the page's own exercises.
 */
export function SetProgress({ slug, href, title }: { slug: string; href: string; title: string }) {
  const p = useProgress();
  const [units, setUnits] = useState<ScoreUnit[] | null>(null);
  const [ask, dialog] = useConfirm();
  useEffect(() => {
    recordVisit(slug, href, title);
    setUnits(unitsOnPage());
  }, [slug, href, title]);

  const entries = p?.problems[slug];
  const score = units ? scoreSet(units, entries) : null;
  const marked = !!p?.done[slug];
  useEffect(() => {
    if (score && score.total > 0 && p && score.done !== marked) setDone(slug, score.done);
  }, [score?.done, score?.total, marked, slug, p]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!p || !score || score.total === 0) return null;
  const started = !!entries && Object.keys(entries).length > 0;
  return (
    <div className="set-progress" data-noread>
      <span className="set-score" role="status" aria-live="polite">
        Score: {fmt(score.earned - score.extra)} of {fmt(score.total)} points
        {score.extra > 0 && `, plus ${fmt(score.extra)} extra credit`}
      </span>
      {score.done ? <span className="set-done">✓ Done</span> : <span className="muted small">Done at 75%</span>}
      {started && (
        <button
          type="button"
          className="secondary small"
          onClick={async () => {
            if (await ask({ title: "Start this set again", message: "This forgets your answers, your marks and the score for this problem set.", confirmLabel: "Start again", destructive: true }))
              resetProblems(slug);
          }}
        >
          Start again
        </button>
      )}
      {dialog}
    </div>
  );
}
