"use client";
import { useEffect, useState } from "react";
import { recordQuiz } from "@/lib/progress";

export type RenderedQuestion = { question: string; choices: string[]; answer: number; explanation?: string };

/** Multiple-choice quiz. Text arrives pre-rendered (KaTeX) from frontmatter. */
export function Quiz({ questions, slug }: { questions: RenderedQuestion[]; slug?: string }) {
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const answered = picked.filter((p) => p !== null).length;
  const correct = picked.filter((p, i) => p === questions[i].answer).length;
  const [studiedNow, setStudiedNow] = useState(false);
  useEffect(() => {
    if (slug && answered === questions.length && questions.length > 0) setStudiedNow(recordQuiz(slug, correct, questions.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered]);

  return (
    <section className="quiz" data-noread aria-labelledby="quiz-title">
      <h2 id="quiz-title">Check your understanding</h2>
      <ol>
        {questions.map((q, qi) => {
          const p = picked[qi];
          return (
            <li key={qi} className="quiz-q">
              <div className="quiz-question" dangerouslySetInnerHTML={{ __html: q.question }} />
              <div className="quiz-choices" role="group" aria-label={`Answers to question ${qi + 1}`}>
                {q.choices.map((c, ci) => {
                  const state = p === null ? "" : ci === q.answer ? "correct" : ci === p ? "wrong" : "";
                  return (
                    <button
                      key={ci}
                      aria-pressed={p === ci}
                      className={`quiz-choice ${state}`}
                      disabled={p !== null}
                      onClick={() => setPicked((arr) => arr.map((v, i) => (i === qi ? ci : v)))}
                    >
                      <span className="quiz-letter" aria-hidden="true">
                        {String.fromCharCode(65 + ci)}
                      </span>
                      <span className="sr-only">{String.fromCharCode(65 + ci)}: </span>
                      <span className="quiz-text" dangerouslySetInnerHTML={{ __html: c }} />
                      {state && (
                        <span className="quiz-mark" aria-hidden="true">
                          {state === "correct" ? "✓" : "✗"}
                        </span>
                      )}
                      {state && <span className="sr-only">{state === "correct" ? " (correct answer)" : " (your answer, not correct)"}</span>}
                    </button>
                  );
                })}
              </div>
              {p !== null && (
                <div className={`quiz-feedback ${p === q.answer ? "correct" : "wrong"}`} aria-live="polite">
                  <strong>{p === q.answer ? "Correct." : "Not quite."}</strong>{" "}
                  {q.explanation && <span dangerouslySetInnerHTML={{ __html: q.explanation }} />}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="quiz-score">
        {answered === questions.length ? (
          <>
            Score: {correct} / {questions.length}{" "}
            {studiedNow && <span className="quiz-studied">✓ Lesson marked as studied</span>}{" "}
            <button className="secondary" onClick={() => setPicked(questions.map(() => null))}>
              Try again
            </button>
          </>
        ) : (
          <>
            {answered} of {questions.length} answered
          </>
        )}
      </div>
    </section>
  );
}
