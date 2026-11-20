"use client";
import { useProgress } from "./useProgress";

/** A small ✓ next to a page link once that page has been studied. */
export function ProgressTick({ slug, label = "studied" }: { slug: string; label?: string }) {
  const p = useProgress();
  if (!p?.done[slug]) return null;
  return (
    <span className="progress-tick" title={label[0].toUpperCase() + label.slice(1)}>
      <span aria-hidden="true">✓</span>
      <span className="sr-only"> ({label})</span>
    </span>
  );
}

/** "3 of 6 studied" with a bar, for a course card. */
export function CourseProgress({ slugs }: { slugs: string[] }) {
  const p = useProgress();
  if (!p || slugs.length === 0) return null;
  const n = slugs.filter((s) => p.done[s]).length;
  if (n === 0) return null;
  return (
    <span className="course-progress">
      <span className="cp-bar" aria-hidden="true">
        <span style={{ width: `${(n / slugs.length) * 100}%` }} />
      </span>
      <span className="cp-text">
        {n} of {slugs.length} studied
      </span>
    </span>
  );
}

/** "Lessons studied 12 of 44 · Problem sets done 2 of 10", on the page of a course that has problem sets. */
export function CourseTotals({ lessons, sets }: { lessons: string[]; sets: string[] }) {
  const p = useProgress();
  if (!p) return null;
  const n = (slugs: string[]) => slugs.filter((s) => p.done[s]).length;
  return (
    <p className="course-totals muted">
      Lessons studied {n(lessons)} of {lessons.length} · Problem sets done {n(sets)} of {sets.length}
    </p>
  );
}
