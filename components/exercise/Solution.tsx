"use client";
import { useEffect, useRef, useState } from "react";
import { recordReveal, recordSelf, type SelfMark } from "@/lib/progress";
import { useProgress } from "@/components/progress/useProgress";
import { unitsOf } from "./units";
import { usePageSlug } from "./usePageSlug";

const MARKS: [SelfMark, string][] = [
  ["got", "Got it"],
  ["partly", "Partly"],
  ["not", "Not yet"],
];

/**
 * The full solution, closed until the reader opens it (native <details>: works without JavaScript and by keyboard).
 * Children are <Step> and <Formula>, as in a worked example. Opening it is recorded: an answer box it covers that is
 * not yet correct earns no points afterwards. Where it covers a part with no answer box ("show that …"), the reader
 * marks their own work once it is open: "Got it", "Partly" (half the points) or "Not yet".
 */
export function Solution({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const slug = usePageSlug();
  const progress = useProgress();
  const [open, setOpen] = useState(false);
  const [selfIds, setSelfIds] = useState<string[]>([]);

  /** What this solution covers: its part, else its whole exercise. */
  const scope = () => ref.current?.closest<HTMLElement>(".ex-part") ?? ref.current?.closest<HTMLElement>(".exercise") ?? null;

  useEffect(() => {
    // Self-marked: the units (parts with points, or the exercise) in or around this solution that have no answer box.
    const s = scope();
    const exercise = ref.current?.closest<HTMLElement>(".exercise");
    if (!s || !exercise) return;
    setSelfIds(
      unitsOf(exercise)
        .filter((u) => !u.answers.length && (s.contains(u.el) || u.el.contains(s)))
        .map((u) => u.id),
    );
  }, []);

  function onToggle() {
    const isOpen = !!ref.current?.open;
    setOpen(isOpen);
    const answers = [...(scope()?.querySelectorAll(".answer[id]") ?? [])].map((a) => a.id);
    if (isOpen && slug) recordReveal(slug, answers);
  }

  const mark = progress?.problems[slug]?.[selfIds[0]]?.self;
  return (
    <details className="ex-solution" ref={ref} onToggle={onToggle}>
      <summary>Solution</summary>
      <div className="ex-solution-body">
        {children}
        {open && selfIds.length > 0 && (
          <div className="ex-self" data-noread>
            <fieldset>
              <legend>How did your own work compare?</legend>
              {MARKS.map(([value, label]) => (
                <button key={value} type="button" className="secondary" aria-pressed={mark === value} onClick={() => selfIds.forEach((id) => recordSelf(slug, id, value))}>
                  {label}
                </button>
              ))}
            </fieldset>
            <p className="ex-self-note" role="status" aria-live="polite">
              {mark === "got" && "Marked: full points."}
              {mark === "partly" && "Marked: half the points."}
              {mark === "not" && "Marked: no points yet. You can change this after another try."}
            </p>
          </div>
        )}
      </div>
    </details>
  );
}
