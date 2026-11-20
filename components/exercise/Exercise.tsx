import type { Reference } from "@/lib/schema";

export type ExerciseProps = {
  /** Unique on the page; also the anchor (#p1). */
  id: string;
  title: string;
  /** MIT's points for the problem. */
  points?: number;
  /** MIT's own number, for the citation: "Problem 1". */
  mit?: string;
  /** MIT's extra credit. */
  optional?: boolean;
  children: React.ReactNode;
};

const pts = (n: number) => `${n} point${n === 1 ? "" : "s"}`;

/** One problem of a problem set (docs/PROBLEM-SETS-DESIGN.md §3): statement, hints, answer boxes and a solution. */
export function Exercise({ id, title, points, mit, optional, children, source }: ExerciseProps & { source?: Reference }) {
  return (
    <section className="exercise" id={id} aria-labelledby={`${id}-title`} data-label={title} data-points={points} data-optional={optional ? "" : undefined}>
      <header className="ex-head">
        <div>
          <span className="ex-tag">{optional ? "Optional problem" : "Problem"}</span>
          <h3 id={`${id}-title`}>{title}</h3>
        </div>
        {points !== undefined && (
          <span className="ex-points">
            {pts(points)}
            {optional && " (extra credit)"}
          </span>
        )}
      </header>
      <div className="ex-body">{children}</div>
      {/* "After:" only for a problem adapted from the source (it has `mit`); our own problems carry no such line. */}
      {source && mit && (
        <div className="ex-cite" data-noread>
          After:{" "}
          {source.url ? (
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          ) : (
            source.title
          )}
          {mit && <span>, {mit}</span>}
        </div>
      )}
    </section>
  );
}

/** One part of a multi-part problem; hints, answers and a solution may sit inside it. */
export function Part({ label, points, children }: { label: string; points?: number; children: React.ReactNode }) {
  return (
    <div className="ex-part" role="group" aria-label={`Part ${label}`} data-part={label} data-points={points}>
      <h4 className="ex-part-head">
        <span className="ex-part-label">({label})</span>
        {points !== undefined && <span className="ex-points">{pts(points)}</span>}
      </h4>
      {children}
    </div>
  );
}

/**
 * A hint. Native <details>: works without JavaScript and by keyboard. Hints open one at a time: a later hint shows
 * only once the one before it is open (app/globals.css), and each is numbered by a CSS counter.
 * Read aloud only while open (lib/read-text.ts skips what is inside a closed <details>).
 */
export function Hint({ children }: { children: React.ReactNode }) {
  return (
    <details className="ex-hint">
      <summary>
        <span className="ex-hint-name">Hint</span>
      </summary>
      <div className="ex-hint-body">{children}</div>
    </details>
  );
}
