---
page: content/year-2/18.03/laplace-discontinuous-inputs.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-22-using-laplace-transform-to-solve-odes-with-discontinuous-inputs/ (read: local copy lec.html; title "Lecture 22: Using Laplace Transform to Solve ODEs with Discontinuous Inputs"; its only .pdf link is 419f31071777faa4a1d78a84b4582120_YVcjNmjHik.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/419f31071777faa4a1d78a84b4582120_YVcjNmjHik.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L22", 16 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page boundary checked with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 23 = "Use with Impulse Inputs")
  - content/year-2/18.03/impulse-inputs-delta-function.mdx (read frontmatter only, to check the `leadsTo` claim; untracked draft; its transcript was not read)
  - calcs/18.03/laplace-discontinuous-inputs.yaml (read; `npm run calc:test -- -k discontinuous-inputs`: 6 passed)
verdict: needs-changes
---

# Review: The unit step and discontinuous inputs

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries (each page starts where the previous one stops; p. 7 repeats the last line of p. 6): p. 1 runs to "using nothing but u of"; p. 2 from "Because it is that will have the Laplace transformer" (definition of $u_{ab}$) to "(u)ab has the value zero"; p. 3 from "outside of this it is zero" (wiping away the graph), through $\mathcal{L}(u) = 1/s$, to "the answer we have been using up until now"; p. 4 from the tails picture through the Fourier remark and the $u(t)f(t)$ convention; p. 5 from "a nice Laplace transform for the translate" to "this piece is not used"; p. 6 the lost-information argument and the $u(t - a)f(t - a)$ function; p. 7 the answer $e^{-as}F(s)$, the second form, the name and the s-axis/t-axis comparison; p. 8 "dual to each other" and the start of the proof (to the change $dt_1 = dt$); p. 9 the limits and pulling out $e^{-as}$; p. 10 the dummy-variable remark and the start of the second-form argument; p. 11 its end and "Let's calculate the Laplace transform of (u)ab"; p. 12 the box transform and the $u(t - 1)t^2$ question; p. 13 its transform and graph, to "e to the minus one times s"; p. 14 "This tells you where the discontinuity occurs", the inverse-transform example, $u(t)\sin t$; p. 15 the $e^{-\pi s}$ piece and the cases format; p. 16 $\sin(t - \pi) = -\sin t$ and the final answer.

Formula locations: "Unit step" p. 1; "Unit box" p. 2; "Convention for inverse transforms" p. 4; "t-axis translation formula" p. 7 (the function is described at the end of p. 6, the answer is given on p. 7); "Second form" p. 7; "Change of variable" pp. 8–10; "Transform of the unit box" p. 12; "A switched-on parabola" p. 13; "Inverse with a jump" pp. 15–16. All correct. Prose citations also checked: jumps handled nicely p. 1; value at 0 undefined p. 1; step at $a$ and unit box pp. 1–2; "in terms of u" convenient for transforms pp. 1–2; wiping away the graph pp. 2–3; $\mathcal{L}(u) = \mathcal{L}(1)$ p. 3; tails pp. 3–4; Fourier p. 4; no formula for $f(t - a)$ pp. 5–6; cut off by $u(t - a)$ p. 6; $F(s)$ notation fails p. 7; duality pp. 7–8; proof pp. 8–10; dummy variable p. 10; second form pp. 10–11; box pp. 11–12; $t^2$ pp. 12–13; where the discontinuity is recorded pp. 13–14; separate the exponential pieces p. 14; keep $u(t)$ p. 14; shift p. 15 (begins at the foot of p. 14); cases form pp. 15–16. All correct (one minor range in finding 5). No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Examples, "An inverse transform": "Exponential factors in a transform mean the answer is discontinuous"; Summary bullet 4 "A factor $e^{-as}$ in a transform marks a jump at $t = a$"; frontmatter `summary` "An exponential factor e^(−as) in a transform signals a jump at t = a: the inverse of (1 + e^(−πs))/(s² + 1) is sin t up to π and 0 afterwards." | p. 14: "as soon as you see exponential factors in there … the answer is going to be a discontinuous function". This is a lecturer imprecision. | Repeats it as a general fact. It is false for the page's own showcase: the arch $\sin t$ on $[0, \pi)$, then 0, is **continuous** at $\pi$ ($\sin \pi = 0$); only its derivative jumps (from $-1$ to $0$). Example (d)'s delayed ramp and example (c)'s solution are also continuous at 3 and 1. The plot itself shows no jump. (On p. 13, "discontinuous at 1" for $u(t - 1)t^2$ is correct and fine.) | Say that $e^{-as}$ marks the point $t = a$ where the formula for the function changes (its "switch-on" time): there the function or one of its derivatives may jump. Fix the text, the Summary bullet and the frontmatter summary. Optionally add a bracketed note: "(Mattuck says the answer is discontinuous; this one is continuous, with a corner at $\pi$.)" Writing rule 4. |
| 2 | info | Making inverse transforms unique: "$\mathcal{L}(u(t)) = \int_0^\infty e^{-st}u(t)\,dt = \frac1s$" | p. 3: "one over s for positive values of s". | Omits $s > 0$. | Add ", for $s > 0$". |
| 3 | info | Opening: "This is the last major topic on it" | p. 1: "a last serious topic on the Laplace transform, the last topic for which I don't have to make frequent and profuse apologies". Lecture 23 still uses the Laplace transform (delta function, transfer function). | Stated in the page's voice; slightly stronger. | "Mattuck calls it the last serious topic on the Laplace transform." |
| 4 | info | The t-axis translation formula (heading and text) | p. 7: there is no universal name; "your book calls this t-axis translation formula"; some call it the exponential shift formula, a name the course has already used for the s-axis rule. | Uses the name without saying it is the textbook's. | Optional: "(the name used in the course textbook; there is no standard one)". |
| 5 | info | "Shifting brings the part of $f$ for $-a < t < 0$ into view, and the transform of $f$ threw that part away (p. 6)" | The picture of the shifted graph and the "this piece is not used" remark are on p. 5; the argument continues on p. 6. | p. 6. | "(pp. 5–6)". |
| 6 | info | Worked example (c) | The lecture title says "to Solve ODEs", but the transcript never solves an equation; it stops after the inverse transform on p. 16. | Example (c) solves $y' + y = u(t - 1)$ as the page's own example, without saying the lecture does not reach this step. It uses $\mathcal{L}(y') = sY - y(0)$ from Lecture 20 without a link. | Optional: one sentence before the worked example ("The lecture stops before solving an equation; example (c) shows the step"), and link [Laplace transforms of derivatives](/courses/18-03/laplace-transform-of-derivatives). |

Lecturer slips and transcript garbles checked (none repeated on the page):
- p. 3: "e to the minus s t times y of t, dt" for $u(t)$: garble or slip; the page writes $u(t)$. No note needed (the page simply gives the right form; no number or claim differs).
- p. 3: "the inverse Laplace transform of one over x" (for "one over s"); "what it was for s less than zero" (for "t less than zero"). Page correct.
- p. 6/7: "u of t minus a times f of t minus a times f of t minus a" (repeated phrase). Page correct.
- p. 11: "change it from t plus a" (for "to"). Page correct.
- p. 12: "the Laplace transform of t minus a" (for $u(t - a)$). Page correct.
- p. 14: "there is only one value of a that occurs. Negative pi." Strictly $a = \pi$ (the exponent is $-\pi s$). The page never states $a$, so the slip is not repeated; no note needed. Optional: "(here $a = \pi$)".
- p. 14: "inverse Laplace transform of e to the minus pi" (missing $s$ and the denominator); p. 15 "u of time sine t" for $u(t)\sin t$. Page correct.
- p. 14: "the answer is going to be a discontinuous function": see finding 1.

## Arithmetic and answer checks
- `npm run calc:test -- -k discontinuous-inputs`: 6 passed. Independently recomputed with SciPy `quad`:
  - Box: $\int_2^4 e^{-st}dt$ vs $(e^{-2s} - e^{-4s})/s$ at s = 0.5, 2: 0.465088 / 0.465088, 0.0089901 / 0.0089901. Correct.
  - Parabola: $\int_1^\infty t^2e^{-st}dt$ vs $e^{-s}(2/s^3 + 2/s^2 + 1/s)$ at s = 1.5, 2, 3: 0.479317, 0.169169, 0.031347, both sides. Correct; also $(t + 1)^2 = t^2 + 2t + 1$, transforms $2/s^3$, $2/s^2$, $1/s$.
  - Arch: $\int_0^\pi \sin t\,e^{-st}dt$ vs $(1 + e^{-\pi s})/(s^2 + 1)$ at s = 1, 2: 0.521607, 0.200373, both sides. Correct; $\sin(t - \pi) = -\sin t$, so the sum is 0 for $t \ge \pi$.
  - Proof: substitution $t_1 = t - a$, limits $-a$ to $\infty$, $u(t_1) = 0$ below 0; correct. Second form via $f(t) = f((t - a) + a)$; correct.
- Worked example (a): $(e^{-2s} - e^{-4s})/s$. Correct.
- (b): $e^{-2s}\mathcal{L}(e^{t + 2}) = e^{-2s}e^2/(s - 1)$, $s > 1$; numerically at s = 1.5 and 3: 0.735759 and 0.0091578, both sides. Correct.
- (c): $sY + Y = e^{-s}/s$ with $y(0) = 0$; $\frac{1}{s(s + 1)} = \frac1s - \frac{1}{s + 1}$; $y = u(t - 1)(1 - e^{-(t - 1)})$. Checked by direct numerical integration of the ODE: y(0.5) = 0, y(2) = 0.63212, y(5) = 0.98168, matching $1 - e^{-1}$ and $1 - e^{-4}$. "Rising towards 1" correct.
- (d): $u(t - 3)(t - 3)$; at s = 1 the transform is $e^{-3} = 0.049787$. Correct. The distractor $u(t - 3)\,t$ gives 0.199148, so it is genuinely wrong.
- Quiz 1: answer 0, $\frac{e^{-as} - e^{-bs}}{s}$. Correct; distractors wrong; explanation correct.
- Quiz 2: answer 0. Correct; choice 2 has no formula, choice 3 confuses the s-shift ($\mathcal{L}(e^{at}f) = F(s - a)$), choice 4 lacks the shift of $f$. Explanation correct.
- Quiz 3: answer 0, $u(t - 3)(t - 3)$. Correct. Info: it is identical to worked example (d), so it tests recall of the example rather than the method; consider other numbers (for example $\frac{e^{-2s}}{s^3}$ → $u(t - 2)\frac{(t - 2)^2}{2}$).
- Flashcards: all three correct.
- Plot: curve 1 `t < pi ? sin(t) : 0` matches the cases answer; curve 2 `t < 1 ? 0 : 1 - exp(-(t - 1))` matches example (c) (0.99909 at t = 8, inside range $[-0.2, 1.2]$). Caption correct. `npm run content:check`: 0 errors, no label warning for this page. Info: `yLabel="f(t)"` while the dashed curve is $y(t)$; the caption explains it, but a neutral label would be clearer. Info: the graph shows that the arch has no jump at $\pi$, which is what finding 1 is about.
- Calcs file: all `shown` strings occur on the page. Minor: `ex-b`, `ex-c`, `ex-d` cite `reading1` p. 7 although they are page-own examples (`origin: page-own` is set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: jumps handled nicely (p. 1) → unit step, value at 0 (p. 1) → step at $a$, unit box (pp. 1–2) → box times $f$ (pp. 2–3) → $\mathcal{L}(u) = \mathcal{L}(1)$, non-unique inverse, Fourier remark, $u(t)f(t)$ convention (pp. 3–4) → no formula for $f(t - a)$ (pp. 5–6) → t-axis translation formula and second form, name, duality (pp. 6–8) → proof (pp. 8–10) → second form derived (pp. 10–11) → box transform (pp. 11–12) → $u(t - 1)t^2$ (pp. 12–13) → inverse of $(1 + e^{-\pi s})/(s^2 + 1)$, cases form (pp. 14–16). Same order as MIT.
- Left out (minor): the alternative of rewriting $t^2$ in powers of $t - 1$ ("dig way back into high school", pp. 12–13); the "one page of notes" on the second form (p. 10); the warning that the answer left as $u(t)\sin t + u(t - \pi)\sin(t - \pi)$ would "lose a lot of credit" (p. 15; the page keeps the substance, "must be given in this cases form").
- Added: the graph and the worked example (original numbers: box on [2, 4], $u(t - 2)e^t$, $y' + y = u(t - 1)$, $e^{-3s}/s^2$). Not copied from MIT. Example (c) goes beyond the lecture (finding 6).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("wipes away its graph except the piece between", "cases form", "t-axis translation formula", "dual") are brief, cited and standard.
- Worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 23 ("Impulse inputs and the delta function."): matches the Lecture 23 title in `_course.json` ("Use with Impulse Inputs"), and the existing draft page `impulse-inputs-delta-function` (lecture 23, prerequisite `laplace-discontinuous-inputs`) covers the delta function, so the link will resolve. Its transcript was not read, so content beyond its title and that page's summary is unverified.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- Inline links `/courses/18-03/convolution` and `/courses/18-03/laplace-transform-introduction` point to existing pages; the exponential shift formula is on the latter (its line 83), as the page says.
- `npm run content:check` was run: 0 errors; for this page only the "no review file yet" warning, which this file resolves.

## Resolution (2026-11-16, by the page author)

1. Error: the page no longer says that e^(−as) means a jump in the function. It now says the factor marks a switch-on point where the function or a derivative may jump, in the prose, the summary bullet and the frontmatter summary. A bracket notes that the lecture says "discontinuous" while the sine arch is continuous at π.
2. Info: L(u) = 1/s now says s > 0; "last serious topic" is attributed to the lecture; the textbook's name for the formula is noted; the lost-information argument cites pp. 5–6; example (c) now says it goes beyond the lecture and links Lecture 20.

Status set to `reviewed`.
