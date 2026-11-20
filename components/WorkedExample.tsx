"use client";
import { useEffect, useRef, useState } from "react";
import { ReadSectionButton } from "./speech/ReadButtons";

/**
 * Step-by-step solution. Children are <Step> elements; without JavaScript every step is
 * visible, with JavaScript the reader reveals one step at a time.
 */
export function WorkedExample({
  title,
  children,
  problem,
}: {
  title: string;
  problem?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [total, setTotal] = useState(0);
  const [shown, setShown] = useState(Number.POSITIVE_INFINITY);
  const revealing = useRef(false);

  useEffect(() => {
    const steps = ref.current?.querySelectorAll<HTMLElement>(":scope > .steps > [data-step]") ?? [];
    setTotal(steps.length);
    setShown(0);
  }, []);

  useEffect(() => {
    const steps = ref.current?.querySelectorAll<HTMLElement>(":scope > .steps > [data-step]") ?? [];
    steps.forEach((el, i) => {
      el.hidden = i >= shown;
    });
    // Move keyboard / screen-reader focus to the step that was just revealed.
    if (shown > 0 && shown <= steps.length && revealing.current) {
      const el = steps[shown - 1];
      el.tabIndex = -1;
      el.focus();
      revealing.current = false;
    }
  }, [shown, total]);

  const done = shown >= total;
  return (
    <section className="worked-example" ref={ref} aria-label={`Worked example: ${title}`}>
      <div className="we-head">
        <div>
          <span className="we-tag">Worked example</span>
          <h3>{title}</h3>
        </div>
        <ReadSectionButton scope=".worked-example" label={`Worked example: ${title}`} />
      </div>
      {problem && <div className="we-problem">{problem}</div>}
      <div className="steps">{children}</div>
      {total > 0 && (
        <div className="we-controls" data-noread>
          {!done && (
            <button
              onClick={() => {
                revealing.current = true;
                setShown((s) => s + 1);
              }}
            >
              {shown === 0 ? "Show first step" : `Show step ${shown + 1} of ${total}`}
            </button>
          )}
          {!done && (
            <button className="secondary" onClick={() => setShown(total)}>
              Show full solution
            </button>
          )}
          {done && (
            <button className="secondary" onClick={() => setShown(0)}>
              Hide solution
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export function Step({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="step" data-step>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}

export function Problem({ children }: { children: React.ReactNode }) {
  return <div className="we-problem">{children}</div>;
}
