---
page: content/year-1/18.01/derivative-as-slope.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-1-derivatives/ (read: lecture page, titled "Lecture 1: Rate of Change", CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec1/ (read: lecture notes, 7 printed pages + OCW cover sheet, extracted with pdftotext)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/7K1sB05pE0A.pdf (read: transcript, 11 pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/kCPVBl953eY.pdf (read: Lecture 3 transcript, only to check the leadsTo claim about sums)
  - content/year-4/8.286/homogeneous-expansion.mdx (read: to check the 8.286 Lecture 4 link)
verdict: pass-with-notes
---

# Review: The derivative — slope of the tangent line and rate of change

Notes page numbers below are the printed footers (printed page N = PDF page N+1). Transcript pages = PDF pages.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Word-problem section, paragraph on the "hardest part" | Transcript pp. 8–9: the letter *y* means two things — a point on the curve *y* = 1/*x* (used to get *y*₀ = 1/*x*₀), and a point on the tangent line (*), into which *y* = 0 (the *x*-axis) was put. Jerison also says the "hardest part" is juggling four (really about eight) variables, and then treats the reuse of letters as a separate, "more subtle" point. | "the letter $y$ was used in two roles: once on the curve ($y_0 = 1/x_0$), and once on the tangent line (where $y = 0$ at the $x$-intercept)". The first example names $y_0$, a different letter, so the point is blurred. | Reword, e.g. "$y$ stood for points on the curve $y = 1/x$ (which gave $y_0 = 1/x_0$) and also for points on the tangent line (*), into which we put $y = 0$". Optionally keep the two remarks (many variables; reuse of letters) as two sentences, as Jerison does. |
| 2 | info | "Definition of the derivative" Formula, `cite="reading1" at="p. 2"` | Correct for the notes (p. 2). On the board it is the boxed formula at transcript p. 4, which the page's own text ("the formula Jerison boxes") refers to. | Cites only the notes. | Optional: `at="p. 2; boxed on the board, transcript p. 4"`, or leave as is. |
| 3 | info | "Derivative of 1/x" Formula, `at="p. 3"` | The limit −1/x₀² is at the foot of notes p. 2; "Hence, f′(x₀) = −1/x₀²" is on p. 3. | p. 3 | Acceptable; `pp. 2–3` would be more exact. |
| 4 | info | `source.title` | OCW lecture page title: "Lecture 1: Rate of Change". "Derivatives, Slope, Velocity, and Rate of Change" is the title of the lecture-notes PDF. | Uses the notes' title. | No change needed (the syllabus in `_course.json` uses "Rate of Change"); mention only if consistency with other pages matters. |
| 5 | info | Opening paragraph | Transcript p. 1: "the importance of derivatives … to all measurements" in science, engineering, economics, political science, polling; notes p. 1 list economics, political science, finance, physics. | "every measurement of how one quantity responds to another … is a derivative" | Slightly stronger than Jerison's wording; consider "derivatives matter for almost every kind of measurement". |
| 6 | info | Physical-meaning section | Notes p. 6: average **speed** (difference quotient) Δy/Δt = distance travelled / time elapsed; the equation of motion is "just accepted for now". | Calls Δy/Δt the "average velocity (distance travelled divided by time taken)"; adds "the physics course derives it". | Both fine. Δy/Δt is a signed velocity while "distance travelled / time taken" is a speed (the notes gloss over this too). The page's landing step explains the sign, so this is optional. "The physics course derives it" is the page's own addition (8.01 does). |
| 7 | info | Tangent-line paragraph | Transcript pp. 2–3 and notes p. 2: not just a line meeting the graph once; a wiggly curve can cross its tangent several times. | Adds its own counterexample: a vertical line meets $y = x^2$ only once but is not its tangent. | Correct and original. No change. |

No formula on the page has the wrong physics, notation or citation. The checks:
- "A line through a point": board, transcript p. 2. Correct (also notes p. 3).
- "Definition of the derivative": notes p. 2. Correct.
- "Difference quotient of 1/x": notes p. 2. Correct, the same chain of equalities.
- "Derivative of 1/x": notes pp. 2–3. Correct (see #3).
- "Tangent line to y = 1/x": notes p. 3. Correct.
- "Area of the triangle": notes p. 4. Correct; the notes write ½(2y₀)(2x₀), with the factors in the other order.
- "Notations": notes p. 5. Correct.
- "Binomial expansion", "Difference quotient of xⁿ", "Power rule": notes p. 6. Correct.

## Arithmetic and answer checks
- Worked example, x² at 3: ((3+Δx)² − 9)/Δx = 6 + Δx → 6. The secant slopes 6.1, 6.01 and 6.001 for Δx = 0.1, 0.01 and 0.001 are correct.
- 1/x algebra: the common denominator gives −Δx/((x₀+Δx)x₀), so the quotient is −1/((x₀+Δx)x₀). Correct. At x₀ = 3 it tends to −1/9, which matches transcript p. 5 (the answer to a student's question).
- *x*-intercept: −1/x₀ = −(x − x₀)/x₀² gives x = 2x₀. Correct. Putting x = 0 into the tangent line gives y = 2/x₀ = 2y₀. Correct. The area is ½(2x₀)(2y₀) = 2x₀y₀ = 2. Correct.
- Worked example at x₀ = 4: y₀ = 1/4 and f′(4) = −1/16. *x*-intercept: 4 + 16·¼ = 8. *y*-intercept: ¼ + 4/16 = ½. Area: ½·8·½ = 2. All correct.
- Polynomial: d/dx(4x³ + x⁶) = 12x² + 6x⁵. Correct. For n = 2 at x = 3 the power rule gives 6, consistent with the first example.
- Dropped stone: 4.9t² = 44.1 gives t² = 9 and t = 3 s. Average 44.1/3 = 14.7 m/s. y′ = −9.8t, so y′(3) = −29.4 m/s, which is 2 × 14.7 (correct for uniform acceleration from rest). 4.9 = g/2 with g = 9.8 m/s². All correct.
- Quiz 1: 6 (index 1). Correct.
- Quiz 2: −1/4 (index 1). Correct.
- Quiz 3: the 0/0 answer (index 1). Correct, and the explanation is right.
- Quiz 4: 10x⁴ + 2x (index 0). Correct; the distractors are wrong for the stated reasons.
- Flashcards: all correct (the definition, the tangent line, −1/x², the binomial start, and the notations; the notations card matches notes p. 5 and transcript p. 9).
- `calcs/18.01/derivative-as-slope.yaml` covers every number and identity on the page: the worked examples, the 1/x results, the intercepts and area, the power rule, the polynomial, quizzes 1, 2 and 4, and the stone. Its `shown` strings match the page text. I ran `npm run calc:test` and all tests passed (871 in total; `-k derivative` selects 27, all passing).

## Coverage and order
- The transcript order is: aims of Unit 1 → geometric problem, the equation of a line (p. 2) → secant lines and the limit (p. 3) → Δx, Δf and the boxed definition (pp. 3–4) → Example 1, 1/x, plausibility checks and the −1/9 question (pp. 4–6) → the "calculus made harder" word problem with intercepts, symmetry, the variables remark and the area (pp. 6–9) → notations (p. 9) → Example 2, xⁿ, and the binomial theorem (p. 10) → polynomials and the binomial question (p. 11). The page follows exactly this order.
- The notes add the physical interpretation (pumpkin drop, pp. 6–7), which the transcript lacks. The page places it at the end, as the notes do, and says it comes from the notes. Correct.
- Nothing from the lecture or the notes is missing. The page's additions are the x² worked example, the x₀ = 4 triangle, the stone example, the parabola counterexample and the cosmology callout, all marked or clearly the page's own.
- Two small omissions, both fine to leave out: the student question after the binomial theorem ("does it only work when Δx → 0?", transcript p. 11), and the notes' remark that O((Δx)²) runs "up to (Δx)ⁿ".

## Licensing
- `grep -i "rights reserved|courtesy"` on the notes and transcript text finds nothing. The OCW page is CC BY-NC-SA 4.0. The page reuses no MIT figure: its plot is generated from y = 1/x.
- No OpenStax or LibreTexts material.
- I found no verbatim copying beyond standard phrases ("difference quotient", "change in x", "junk", "calculus made hard" is not used). "Curious property" echoes the notes' "Curiously", which is fine.
- The examples are original: the polynomial (4x³ + x⁶ against MIT's x² + 3x¹⁰ in the notes and x³ + 5x¹⁰ on the board), x² at 3, and the triangle at x₀ = 4. The stone example follows the same sequence of steps as MIT's pumpkin (time to land, average speed, landing velocity, meaning of the minus sign), but it has its own situation, its own SI numbers and its own wording. That meets the "original or clearly rewritten" rule.

## Notes
- Forward links:
  - 18.01 Lecture 2 (limits, continuity) is correct.
  - 18.01 Lecture 3 is correct: its transcript opens with the derivative of a sum and of a constant multiple, then sine and cosine, product and quotient. This also supports the page's "(Why one may differentiate a sum term by term … comes in the next lectures.)"
  - 8.286 Lecture 4 is correct: `homogeneous-expansion.mdx` (Lecture 4) gives H = ȧ/a (quiz and flashcard, derived from ℓ_p = a ℓ_c).
- The cosmology callout is accurate. The dot notation for time derivatives is correctly described as another notation. It attributes nothing to Guth or Jerison that they did not say.
- Uncertain or minor: the transcript file is named `ocw-18-01-f07-lec01`, so the video was apparently recorded in Fall 2007, while OCW lists the course as Fall 2006. The page does not state a year, so no action is needed.
- I did not check the Plot behaviour when Q is moved onto P (xq = x0), where the secant is undefined. That is a component question, not a content one.

## Resolution (2026-11-15, by the page author)

- Warning (reuse of the letter y): fixed. The section now gives Jerison's two remarks separately — many variables at once, and the letter y meaning a point on the curve y = 1/x (giving y₀ = 1/x₀) in one equation and a point on the tangent line (where y = 0 was put) in the other.
- Info: "Derivative of 1/x" now cites notes pp. 2–3; "Definition of the derivative" adds "boxed on the board, transcript p. 4".
- Info: the opening no longer says every measurement is a derivative; it says derivatives are central to measurement of almost every kind.
- Info: the average-velocity sentence now says its size, distance over time, is the average speed.
- Info (secant with Q on P): components/Plot.tsx now draws the tangent (the secant's limit) when the two points coincide, instead of a horizontal line.
- Not changed: source.title keeps the notes' fuller title, which names all four topics of the lecture; the OCW page title "Rate of Change" is the syllabus entry.
