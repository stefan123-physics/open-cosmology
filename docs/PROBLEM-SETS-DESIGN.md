# Problem sets and exams: design (2026-11-18)

**Status (2026-11-18): the pilot of §11 is built** (8.286 Problem Set 1, a draft until its blind-solve review). Not built: exam mode (§6) and the homepage suggesting a set (§5). How it was built: AGENTS.md "Problem sets". This document turns ROADMAP.md §2–3 into the specification the pilot followed. Decisions for the owner are in §12.

## 1. What was found first

- **8.286 problem sets have no solutions on OCW.** The Assignments page lists Problem Sets 1–10 (PDF) and two supernova data files for Set 8, and nothing else. Solutions exist only for the three quizzes (`q1sols`–`q3sols`); each quiz also has a review packet of past problems.
- **Consequence:** our problem-set solutions are our own work, not rewrites of MIT's. They cannot be compared with a source, so they need a stronger check than lessons do (§8).
- **Most 8.286 answers are formulas, not numbers** (for example "calculate the Doppler shift z" in terms of the speeds). An answer box that takes only a number would cover few problems. The design therefore checks formulas too (§4).
- Problem Sets 1 and 5 carry no "rights reserved" or "courtesy" notice. Every set must still be checked before use, as for lectures.
- `mathjs` is already a dependency (the graphs use it), so checking formulas adds no new package.

## 2. Page kinds

New optional frontmatter field `kind`: `lesson` (default), `problems`, `exam`. (`lab` comes later with ROADMAP §4.)

```yaml
kind: problems
set: 1                      # MIT's number: Problem Set 1, Quiz 2
lecture: 2                  # the last lecture the set covers; decides where it sits
order: 90                   # after that lecture's lessons
covers: [1, 2]              # lectures the set practises (links both ways)
source:
  title: "MIT 8.286 Problem Set 1"
  url: https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps1/
solutions: own              # "own" (written here) or "mit" (rewritten from MIT's solutions)
```

- Same folder and same URL shape as lessons: `content/<year>/<course>/<slug>.mdx`, `/courses/<course>/<slug>`. Nothing existing moves.
- Slugs: `<course>-problem-set-<n>`, for example `8-286-problem-set-1`; exams `8-286-quiz-1`.
- A `problems` or `exam` page has no `quiz` and no `flashcards`; `content:check` rejects them there.
- The site counts lessons and problem sets separately ("389 lessons, 1 problem set").

## 3. Components

One exercise per MIT problem. The existing `<Problem>` belongs to `<WorkedExample>`, so the new block has another name.

```mdx
<Exercise id="p1" title="Doppler shift with source and observer moving" points={15} mit="Problem 1">

A siren moves at speed $v_s$ through still air ... Find the redshift $z$.

<Hint>Split the motion into two steps you already know.</Hint>
<Hint>First let only the source move, then only the observer.</Hint>

<Answer id="p1-z" label="z =" expr="(vs + vo)/(u - vo)"
  vars={{ u: [300, 400], vs: [1, 50], vo: [1, 50] }}
  names={{ vs: "v_s", vo: "v_o" }}
  mistakes={[{ expr: "(vs + vo)/u", hint: "The observer's motion also changes the denominator." }]} />

<Solution>
<Step title="Source moving only">...</Step>
<Step title="Then the observer">...</Step>
</Solution>

</Exercise>
```

- `<Exercise>`: `id` (unique on the page), `title`, `points` (MIT's), `mit` (MIT's own number, for the citation), `optional` (MIT's extra credit).
- `<Part label="a" points={5}>` groups a multi-part problem; hints, answers and solutions may sit inside a part.
- `<Hint>`: any number, opened one at a time.
- `<Solution>`: required in every exercise; reuses `<Step>` and `<Formula>` (formulas cited as in lessons).
- `<Answer>`: none, one or several per exercise or part (§4).
- Hints and solutions are `<details>` elements: they work without JavaScript, by keyboard, with find-in-page, and print can show them in a block at the end.

## 4. Answers

Three types, chosen by which attribute is present.

| Type | Markup | The reader types | Checked by |
|---|---|---|---|
| Number | `value="9.7" unit="Gyr" tolerance="2%" calc="age-planck"` | a number (`9.7`, `9,7`, `1.2e5`, `1.2 × 10^5`); the unit is printed after the box | relative tolerance (default: half a unit in the last printed digit, as in the calcs) |
| Formula | `expr="…" vars={{…}} names={{…}}` | a formula in plain typing (`(vs+vo)/(u-vo)`, `sqrt(1-v^2/c^2)`) | evaluating both formulas at five random points in the `vars` ranges; all must agree to 1 part in 10⁶ |
| Choice | `choices={[…]} answer={0}` | picks an option | index |

Details:
- **Formula input.** A text box with a list of the allowed symbol names beside it, and a live preview rendered by KaTeX with its "in words" reading from `lib/speech.ts`, so a reader can hear what they typed. `names` maps typing names to display (`vs` → `v_s`).
- **Formula safety.** A restricted mathjs instance: only arithmetic, powers, roots, `exp`, `log`, trigonometric and hyperbolic functions, `pi`; `import`, `evaluate`, `parse`, `simplify`, `derivative` and unit creation are disabled (mathjs's documented recipe). Unknown names give "I don't know the symbol x", not an error.
- **Equivalent forms are accepted** automatically, because formulas are compared by value, not by spelling.
- **Feedback.** Right: a tick and "Correct". Wrong: "Not yet"; if the entry matches a listed `mistakes` item, its hint; after two wrong tries, a pointer to the next unopened hint. Never the solution itself. Feedback is text plus an icon (not colour alone) in an `aria-live="polite"` region.
- **"Show that" and derivation parts** have no `<Answer>`. After opening the solution the reader marks themselves: "Got it", "Partly", "Not yet".
- **Honesty about cheating.** The site is static, so answers are in the page's code. That is acceptable for self-study and is stated on the About page; no effort goes into hiding them.
- **Without JavaScript** the answer boxes are replaced by a line: "Check your answer in the solution below."

## 5. Progress

Added to the existing `study-progress` key in `localStorage` (no new key):

```ts
problems: Record<pageSlug, Record<answerOrExerciseId, {
  ok?: boolean;            // auto-checked answers
  self?: "got" | "partly" | "not";   // self-marked parts
  tries: number; revealed: boolean; at: string;
}>>
```

- **Score** = points of correct answers + self-marked parts ("Partly" = half), over the points of non-optional exercises.
- A set counts as **done at 75%**, the same rule as the lesson quiz. Opening a solution before answering marks that answer `revealed` and earns no points for it.
- Course pages show "Lessons studied 12 of 44 · Problem sets done 2 of 10". The homepage's "suggested next" offers a set once all lessons in its `covers` are studied.
- `lib/backup.ts` (export/import) validates the new part. `/privacy` gets one sentence: the same key now also holds answers tried and scores.

## 6. Exams

`kind: exam` uses the same components plus **exam mode**:
- A start screen with MIT's time limit and three choices: no timer (default), MIT's time, or 1.5× / 2× (WCAG 2.2.1: timing adjustable). The timer never submits by itself; at zero it says so and the reader decides.
- Until "Finish": no hints, no feedback, no solutions. After it: automatic marking, solutions open, self-marking for the rest, score saved.
- An attempt in progress is kept in `sessionStorage` (survives a reload, gone when the tab closes); listed on `/privacy`.
- First sources: 8.286 Quizzes 1–3, which have MIT solutions (`solutions: mit`).
- Course completion (ROADMAP §3): all lessons studied and the last practice exam at 75%.

## 7. Where the pages appear

- **Order:** a set sits after the last lesson of its `lecture`; previous/next include it.
- **Course page:** a "Problem sets" entry in the contents row, and one row per set at the end of the chapter it falls in, with its own tick.
- **Lessons:** each lesson in `covers` gets an automatic `<LinkBar>` "Practise: Problem Set 1" after "Where this leads". Nothing is added to lesson files.
- **Search:** statements and titles are indexed; solutions are not, so a search does not land inside an answer.
- **Focus mode:** each `.exercise` becomes one unit (add to `LESSON_UNITS` in `components/a11y/FocusMode.tsx`).
- **Read-aloud:** reads statements and opened hints; skips closed hints, closed solutions and the answer boxes (which have their own labels).
- **Offline:** nothing special; pages are saved like lessons.

## 8. Checks

`content:check` (build fails on any of these):
- Exercise and answer ids unique on the page; every `<Exercise>` has a `<Solution>`; points of parts add up to the exercise's points.
- Number answers: a `calc` id that exists in the page's calcs file and whose `expected` equals `value`.
- Formula answers: every symbol in `expr` has a `vars` range; the formula is finite at 20 sample points; every `mistakes` formula differs from `expr` at those points.
- The usual lesson rules: symbols in `data/symbols.json`, no `$$`, no em dashes, formulas citable, read-aloud gaps.

Calcs (`calcs/<course>/<slug>.yaml`): entries gain an optional `answer: p1-z`, like `quiz:` today. The test checks that the page's `value` or `expr` equals the entry's `expected` or `formula`, so the answer the reader is marked against is the one `calc:test` recomputes. For a formula answer the entry is an `identity`: the answer against an independent route to it (a limit, a special case, or a numerical integration).

Review (extends `.claude/agents/mit-lecture-reviewer.md`):
1. **Solve first, blind.** The reviewer gets the statements only and solves every problem before seeing our solutions.
2. Then compares final answers, checks each solution step, the fidelity to MIT's problem (same physics, own wording), licensing, and that hints do not give the answer away.
3. With `solutions: own`, any disagreement is an error until one side is shown wrong by a calc.

## 9. Writing rules for problems

- Keep MIT's physical situation and its order of parts; write the statement in our own words. Where MIT's numbers are not essential, use our own.
- Cite MIT's set and problem number on every exercise (`mit="Problem 2(b)"`).
- Skip course administration (due dates, grading notes, reading assignments).
- MIT's "extra credit" becomes `optional`.
- Hints go from a nudge to the method; never the result.
- A solution states the idea first, then the steps, then a check (units, a limit, or a sanity number).

## 10. Accessibility

- Every input has a visible label; errors are announced politely and never by colour alone.
- Everything works by keyboard; hints and solutions are native `<details>`.
- No time pressure anywhere by default.
- Text size, spacing and contrast options apply (rem units only).
- `/accessibility` gets a short section on answer boxes and exam mode.

## 11. Pilot (the next step to build)

**8.286 Problem Set 1** (Doppler shift: three problems, formula answers, covers Lectures 1–2). It exercises the hard part of the design, formula checking, on the smallest set.

Files to add:
- `components/exercise/Exercise.tsx`, `Part.tsx`, `Hint.tsx`, `Solution.tsx`, `Answer.tsx`
- `lib/answers.ts` (parsing numbers, the restricted mathjs instance, sampling and comparison; shared by the browser and `content:check`)
- `content/year-4/8.286/8-286-problem-set-1.mdx`, `calcs/8.286/8-286-problem-set-1.yaml`, `reviews/8.286/8-286-problem-set-1.md`

Files to change:
- `lib/schema.ts` (`kind`, `set`, `covers`, `solutions`), `lib/content.ts` (ordering, counts, "practise" links)
- `lib/mdx.tsx` (register components), `lib/progress.ts` and `components/progress/*`, `lib/backup.ts`
- `app/courses/[course]/[slug]/page.tsx` and `app/courses/[course]/page.tsx`
- `scripts/check-content.ts`, `scripts/build-search.mts`, `tests/calc/test_calculations.py` (`answer:`)
- `components/a11y/FocusMode.tsx`, `lib/read-text.ts`, `app/globals.css`
- `app/privacy/page.tsx`, `app/accessibility/page.tsx`, AGENTS.md, `docs/CONTENT_GUIDE.md`, the reviewer agent file

Done means: the build passes; the pilot page works by keyboard and screen reader at 320 px; a wrong, a "known mistake" and a right formula each give the right feedback; export and import keep the scores.

Exam mode (§6) is a second, smaller step after the pilot.

## 12. Decisions for the owner

1. **Done at 75%**, as for quizzes? (Recommended.)
2. **Solutions always openable**, with no points for an answer opened first? (Recommended: it is self-study.) The alternative is to lock a solution until one attempt.
3. **Pilot on 8.286 Problem Set 1?** (Recommended.)
4. **Own solutions for 8.286** (MIT publishes none) under the blind-solve review of §8? The alternative is to start with a course whose solutions MIT publishes, for example 8.01SC.
5. **Count problem sets separately** from lessons in the site's totals? (Recommended.)
