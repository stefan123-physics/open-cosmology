"use client";
import { useEffect, useId, useRef, useState } from "react";
import type { Ranges, Verdict } from "@/lib/answers";
import { recordAnswer } from "@/lib/progress";
import { useProgress } from "@/components/progress/useProgress";
import { usePageSlug } from "./usePageSlug";

/**
 * An answer box (docs/PROBLEM-SETS-DESIGN.md §4). Three types, chosen by the attribute present:
 *   number   value="9.7" unit="Gyr" tolerance="2%" calc="age-planck"
 *   formula  expr="(vs + vo)/(u - vo)" vars={{ u: [300, 400], … }} names={{ vs: "v_s" }} mistakes={[{ expr, hint }]}
 *   choice   choices={["…", "…"]} answer={0}
 * Feedback is text with an icon in a polite live region: "Correct", or "Not yet" with the hint of a listed mistake
 * and, after two wrong tries, a pointer to the next unopened hint. Never the solution.
 * Each press of Check is recorded in the study progress (lib/progress.ts). The checking code (mathjs) loads only when a reader first types.
 */
export type AnswerProps = {
  id: string;
  /** Printed before the box; may hold inline maths ("$z =$"). */
  label?: string;
  // number
  value?: string;
  unit?: string;
  tolerance?: string;
  calc?: string;
  // formula
  expr?: string;
  vars?: Ranges;
  names?: Record<string, string>;
  /** Formula boxes: { expr, hint }; number boxes: { value, tolerance?, hint }. */
  mistakes?: { expr?: string; value?: string; tolerance?: string; hint: string }[];
  /** Number boxes: the unit asked for as a number ("1e-11", "1e6", "0.01"); the full number is accepted too. */
  scale?: string;
  /** Second valid readings, also correct, shown with their note: [{ value, tolerance?, note }] or [{ expr, note }]. */
  alsoAccept?: { value?: string; tolerance?: string; expr?: string; note?: string }[];
  // choice
  choices?: string[];
  answer?: number;
};

/** Filled in on the server (lib/mdx.tsx): the label, choices and symbol names rendered by KaTeX. */
type Rendered = { labelHtml?: string; choicesHtml?: string[]; namesHtml?: Record<string, string> };

type Lib = typeof import("@/lib/answers");
type Preview = { html: string; words: string } | { error: string } | null;

let libs: Promise<[Lib, typeof import("katex"), typeof import("@/lib/speech")]> | null = null;
const loadLibs = () => (libs ??= Promise.all([import("@/lib/answers"), import("katex"), import("@/lib/speech")]));

export function Answer(props: AnswerProps & Rendered) {
  const { id, expr, vars, names, mistakes, value, unit, tolerance, choices, answer, alsoAccept, scale } = props;
  const type = expr !== undefined ? "formula" : choices ? "choice" : "number";
  const uid = useId();
  const root = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [picked, setPicked] = useState<number | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [wrongTries, setWrongTries] = useState(0);
  const [nextHint, setNextHint] = useState(0);
  const [preview, setPreview] = useState<Preview>(null);
  useEffect(() => setMounted(true), []);
  const slug = usePageSlug();
  const saved = useProgress()?.problems[slug]?.[id];

  // Live preview of a typed formula: what the site understood, as maths and in words.
  useEffect(() => {
    if (type !== "formula" || !text.trim()) return setPreview(null);
    let alive = true;
    const timer = setTimeout(() => {
      loadLibs().then(([lib, katex, speech]) => {
        if (!alive) return;
        const parsed = lib.parseFormula(text, Object.keys(vars ?? {}));
        if (!parsed.ok) return setPreview({ error: parsed.message });
        const tex = parsed.formula.tex(names);
        const render = (katex as any).default?.renderToString ?? katex.renderToString;
        setPreview({ html: render(`\\displaystyle ${tex}`, { throwOnError: false, output: "htmlAndMathml" }), words: speech.texToSpeech(tex) });
      });
    }, 250);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, type]);

  /** The hints that belong to this answer: those of its part, else of its exercise. */
  const hints = () => {
    const scope = root.current?.closest(".ex-part") ?? root.current?.closest(".exercise");
    let list = [...(scope?.querySelectorAll<HTMLDetailsElement>("details.ex-hint") ?? [])];
    if (!list.length) list = [...(root.current?.closest(".exercise")?.querySelectorAll<HTMLDetailsElement>("details.ex-hint") ?? [])];
    return list;
  };

  async function check(e: React.FormEvent) {
    e.preventDefault();
    let v: Verdict;
    if (type === "choice") {
      if (picked === null) v = { status: "invalid", message: "Pick an answer first." };
      else v = picked === answer ? { status: "correct" } : { status: "wrong" };
    } else {
      const [lib] = await loadLibs();
      v =
        type === "formula"
          ? lib.checkFormula(text, {
              expr: expr!,
              vars: vars ?? {},
              mistakes: (mistakes ?? []).filter((m) => m.expr).map((m) => ({ expr: m.expr!, hint: m.hint })),
              alsoAccept: (alsoAccept ?? []).filter((a) => a.expr).map((a) => ({ expr: a.expr!, note: a.note })),
            })
          : lib.checkNumber(text, {
              value: value!,
              tolerance,
              scale,
              alsoAccept: (alsoAccept ?? []).filter((a) => a.value).map((a) => ({ value: a.value!, tolerance: a.tolerance, note: a.note })),
              mistakes: (mistakes ?? []).filter((m) => m.value).map((m) => ({ value: m.value!, tolerance: m.tolerance, hint: m.hint })),
            });
    }
    setVerdict(v);
    if (v.status !== "invalid") recordAnswer(slug, id, v.status === "correct");
    if (v.status === "wrong") {
      const tries = wrongTries + 1;
      setWrongTries(tries);
      const closed = hints().findIndex((h) => !h.open);
      setNextHint(tries >= 2 && closed >= 0 ? closed + 1 : 0);
    } else setNextHint(0);
  }

  function openHint() {
    const h = hints()[nextHint - 1];
    if (!h) return;
    h.open = true;
    h.querySelector("summary")?.focus();
    setNextHint(0);
  }

  const edit = () => verdict && verdict.status !== "correct" && setVerdict(null);
  const inputId = `${uid}-in`;
  const helpId = `${uid}-help`;
  const label = props.labelHtml ? <span dangerouslySetInnerHTML={{ __html: props.labelHtml }} /> : "Your answer";
  const symbolNames = Object.keys(vars ?? {});

  return (
    <div className={`answer answer-${type}`} id={id} ref={root} data-noread>
      <noscript>
        <p className="answer-nojs">Check your answer in the solution below.</p>
      </noscript>
      <form onSubmit={check} hidden={!mounted} noValidate>
        {type === "choice" ? (
          <fieldset className="answer-choices">
            <legend>{label}</legend>
            {(props.choicesHtml ?? choices ?? []).map((c, i) => (
              <label key={i} className="answer-choice">
                <input
                  type="radio"
                  name={`${uid}-choice`}
                  checked={picked === i}
                  onChange={() => {
                    setPicked(i);
                    edit();
                  }}
                />
                <span dangerouslySetInnerHTML={{ __html: c }} />
              </label>
            ))}
          </fieldset>
        ) : (
          <div className="answer-row">
            <label htmlFor={inputId} className="answer-label">
              {label}
            </label>
            <input
              id={inputId}
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                edit();
              }}
              onFocus={() => void loadLibs()}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-describedby={helpId}
            />
            {unit && <span className="answer-unit">{unit}</span>}
          </div>
        )}
        {type === "formula" && (
          <p className="answer-help" id={helpId}>
            Type a formula with{" "}
            {symbolNames.map((n, i) => (
              <span key={n}>
                {i > 0 && (i === symbolNames.length - 1 ? " and " : ", ")}
                <code>{n}</code>
                {props.namesHtml?.[n] && (
                  <>
                    {" "}
                    (for <span dangerouslySetInnerHTML={{ __html: props.namesHtml[n] }} />)
                  </>
                )}
              </span>
            ))}
            . Use <code>*</code> to multiply, <code>/</code> to divide, <code>^</code> for a power and <code>sqrt( )</code> for a root.
          </p>
        )}
        {type === "number" && (
          <p className="answer-help" id={helpId}>
            Type a number, for example 9.7 or 1.2e5.
          </p>
        )}
        {type === "formula" && preview && (
          <div className="answer-preview">
            {"error" in preview ? (
              <span className="answer-preview-error">{preview.error}</span>
            ) : (
              <>
                <span className="answer-preview-tag">You typed</span> <span dangerouslySetInnerHTML={{ __html: preview.html }} />
                <span className="answer-words">In words: {preview.words}</span>
              </>
            )}
          </div>
        )}
        <div className="answer-actions">
          <button type="submit">Check</button>
        </div>
        <div className={`answer-feedback ${verdict?.status ?? ""}`} role="status" aria-live="polite">
          {verdict?.status === "correct" && (
            <p>
              <span className="answer-icon" aria-hidden="true">✓</span> <strong>Correct.</strong>
              {verdict.note && ` ${verdict.note}`}
              {saved?.revealed && " The solution was opened first, so this answer earns no points."}
            </p>
          )}
          {verdict?.status === "wrong" && (
            <>
              <p>
                <span className="answer-icon" aria-hidden="true">✗</span> <strong>Not yet.</strong> {verdict.hint}
              </p>
              {nextHint > 0 && (
                <p>
                  Hint {nextHint} may help.{" "}
                  <button type="button" className="secondary small" onClick={openHint}>
                    Open hint {nextHint}
                  </button>
                </p>
              )}
            </>
          )}
          {verdict?.status === "invalid" && (
            <p>
              <span className="answer-icon" aria-hidden="true">!</span> {verdict.message}
            </p>
          )}
        </div>
        {!verdict && saved?.ok && (
          <p className="answer-saved">
            <span className="answer-icon" aria-hidden="true">✓</span> You answered this correctly before
            {saved.revealed ? " (after opening the solution, so without points)." : "."}
          </p>
        )}
      </form>
    </div>
  );
}
