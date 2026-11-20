---
page: content/year-2/18.03/matrix-exponentials.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-29-matrix-exponentials/ (read: local copy lec.html; title "Lecture 29: Matrix Exponentials"; its only .pdf link is 6fda53e16c5cac942428bfb06d69f0be_zreI4HllD80.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/6fda53e16c5cac942428bfb06d69f0be_zreI4HllD80.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L29", 5 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately with `pdftotext -f N -l N`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-30-decoupling-linear-systems-with-constant-coefficients/ and its transcript 0b85a7757e153e1c67dac2fcd031dd2f_uNOyxQwIV8o.pdf (read: opening paragraph and keyword search only, to check `leadsTo`)
  - content/year-2/18.03/_course.json (read: Lecture 29 "Matrix Exponentials", Lecture 30 "Decoupling Linear Systems with Constant Coefficients")
  - content/year-2/18.03/variation-of-parameters-systems.mdx (read: worked example only)
  - calcs/18.03/matrix-exponentials.yaml (read; `npm run calc:test -- -k matrix-exponentials`: 6 passed)
verdict: pass-with-notes
---

# Review: The matrix exponential

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript page = PDF page. Page boundaries: p. 1 review of the fundamental matrix (columns independent solutions, det X ≠ 0, X′ = AX), "no 'the' fundamental matrix, only 'a'", general solution x = Xc, all fundamental matrices XC with det C ≠ 0, "Friday leaking over into Monday", start of the kid-brother/algorithm passage; p. 2 algorithm vs formula (papers), one-by-one case x′ = ax, e^{at}, series definition (not inverse of log, not naive repeated multiplication), term-by-term derivative, linearity for the constant, e^{At} defined by the series with I in front, each term a 2 × 2 matrix; p. 3 e^{At} satisfies X′ = AX by the same calculation, det at 0 is det I = 1, "fly in the ointment", Matlab/Maple/Mathematica, theoretical tool, example x′ = y, y′ = x, A² = I, A³ = A, A⁴ = I, collecting entries, cosh t and sinh t; p. 4 cosh t = (e^t + e^{−t})/2 written out, "a fundamental matrix", initial value problem, x = e^{At}x₀, vector must go behind (Matlab error), exponential law, commute, AB + BA = 2AB, three cases (cI, −A, A⁻¹), e^A e^{−A} = I, (e^A)⁻¹ = e^{−A}, "main survivor", start of "how do you calculate e^{At}"; p. 5 series rarely works, aI + (0 b; b 0) split for homework, X(t)X(0)⁻¹ for all other cases, both sides fundamental and I at 0.

Formula locations: "General solution" p. 1; "Every fundamental matrix" p. 1; "Exponential series" p. 2; "Matrix exponential" p. 2; "Exponential of the example" pp. 3–4 (series and cosh/sinh p. 3, the explicit (e^t ± e^{−t})/2 completed at the top of p. 4); "Solution of the initial value problem" p. 4; "Inverse of the exponential" p. 4; "e^(At) from any fundamental matrix" p. 5. All correct.

Prose citations also checked: no eigenvalues, p. 1; not unique, p. 1; algorithm vs formula, p. 2 (the passage begins at the end of p. 1, but the "formula" sentence is on p. 2); one-dimensional case and series definition, p. 2; 2 × 2 terms, p. 2; X′ = AX and det I = 1, p. 3; fly in the ointment and software, p. 3; powers of A, p. 3; hyperbolic functions, pp. 3–4; "what people love" and vector on the right, p. 4; exponential law, three cases, survivor, p. 4; "series rarely work", pp. 4–5; splitting and X(t)X(0)⁻¹, p. 5. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A formula, not a method", last paragraph: "at $t = 0$ it is $I$, with determinant 1 (p. 3). So **$e^{At}$ is a fundamental matrix**" | p. 3: "the determinant is not zero at one point. That is all you have to check." (relying on the Wronskian being identically zero or never zero, Lecture 28) | The step from "det = 1 at t = 0" to "det ≠ 0 for every t" (which the page's own definition in section 1 requires) is not stated. | Add a clause: "and a Wronskian that is nonzero at one point is never zero, so …", linking the previous page. |
| 2 | info | Same paragraph: "Computer algebra systems compute it as readily as an ordinary exponential" | p. 3: "Matlab or Maple or Mathematica", "EXP of that matrix … to as many decimal places as you want". | Matlab is numerical software, not computer algebra; the claim itself is right. | Optional: "Mathematical software (Matlab, Maple, Mathematica) computes it …". |
| 3 | info | Quiz 3 and "The exponential law": "essentially, only when $A$ and $B$ commute" | p. 4: "pretty much if and only if". | The page's "essentially" matches Mattuck's hedge. Quiz 3's choice "When $A$ and $B$ commute" is the right answer; strictly, commuting is sufficient but not necessary (there are non-commuting pairs with $e^{A+B} = e^Ae^B$), so a careful reader may object to "only". | Optional: explanation "Commuting is what makes the series agree; without it the law fails in general." |
| 4 | info | Quiz 1 | (not MIT) | Correct answer at position 0 (quizzes 2 and 3 use positions 1 and 2, which is good). Also the longest choice. | Optional: move it. |

Lecturer slips and transcript garbles checked:
- p. 3: "you would be tempted to say A to the fourth is A squared, which is I times I, which is I, but that would be wrong": the result (A⁴ = I) is right either way; Mattuck presumably objects to "A⁴ = A²" as a step. The page gives only the correct chain A⁴ = A³A = A² = I. Fine.
- p. 4: "the single equation x prime equals Ax" (should be lower-case a) and "here we are allowed to put the c out front" (meaning: in the one-variable case): not repeated; the page states it correctly.
- p. 5: "useful only for matrices which are symmetric … Well, it is more than symmetric. These two have to be the same": the page states the corrected condition (equal diagonal entries and equal off-diagonal entries). Good.
- p. 5: "You multiply it by its value at zero … take the inverse" (the inverse of the value at zero): the page writes X(t)X(0)⁻¹ correctly.
- p. 3 "The bottle is sinh t" (bottom), p. 5 "inverse-ready value of t" (inverse for any value of t), "end-by-end" (n-by-n): garbles, not repeated.

## Arithmetic and answer checks
- `npm run calc:test -- -k matrix-exponentials`: 6 passed.
- Series (p. 2): derivative of 1 + at + a²t²/2! + a³t³/3! is a + a²t + a³t²/2! = a(1 + at + a²t²/2!). Correct.
- Lecture example: A² = (0 1; 1 0)² = I, A³ = A, A⁴ = I. Diagonal series 1 + t²/2! + t⁴/4! = cosh t, off-diagonal t + t³/3! = sinh t; cosh t = (e^t + e^{−t})/2, sinh t = (e^t − e^{−t})/2. Correct. Cross-check by p. 5's method: with the Lecture 28 page's fundamental matrix X = (e^t e^{−t}; e^t −e^{−t}), X(0)⁻¹ = ½(1 1; 1 −1) and X(t)X(0)⁻¹ = ½(e^t + e^{−t}, e^t − e^{−t}; e^t − e^{−t}, e^t + e^{−t}). Same result.
- Plot: cosh 2.5 = 6.13, sinh 2.5 = 6.05, both inside range [0, 6.5]; curves start at 1 and 0 as the caption says. Correct and generated from formulas.
- Worked example (a): A = (1 2; 2 1) = I + 2B, B = (0 1; 1 0); It and 2Bt commute, e^{It} = e^t I, e^{2Bt} = (cosh 2t, sinh 2t; sinh 2t, cosh 2t). Correct.
- Worked example (b): A = (−1 2; 0 −3), triangular, eigenvalues −1 and −3. (A + 3I) = (2 2; 0 0) gives (1, −1); (A + I) = (0 2; 0 −2) gives (1, 0). X(0) = (1 1; −1 0), det = 1·0 − 1·(−1) = 1, inverse (0 −1; 1 1) (checked: product is I). X(t)X(0)⁻¹ = (e^{−t}, e^{−t} − e^{−3t}; 0, e^{−3t}). Verified d/dt of this equals A times it, and it is I at 0. With x₀ = (2, 1): (3e^{−t} − e^{−3t}, e^{−3t}); x(0) = 2, y(0) = 1; x′ = −3e^{−t} + 3e^{−3t} = −x + 2y; y′ = −3y. All correct. (The page's check verifies the equations but not the initial values; optional to add "and it is (2, 1) at 0".)
- Quiz 1: answer 0 (the series). Correct; explanation correct.
- Quiz 2: answer 1 ($e^{At}\vec x_0$). Correct; explanation correct (p. 4).
- Quiz 3: answer 2 (commute). Correct; see finding 3.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file (info): `ex-b-entry` is a tautology (formula `exp(-t) - exp(-3*t)` against `2*(exp(-t) - exp(-3*t))/2`) and refers to a "formula for triangular matrices" that is not on the page; it tests nothing. `cosh-solves` checks only cosh′ = sinh, not sinh′ = cosh. Nothing checks X(0)⁻¹, the product X(t)X(0)⁻¹, part (a), or the initial values of (b). Suggested: replace `ex-b-entry` with an identity check that d/dt of each entry of the computed e^{At} equals the corresponding entry of A e^{At}, add sinh′ = cosh, and check x(0) = 2, y(0) = 1. `ex-b-x0inv` and `ex-b-solution` cite `reading1` pp. 5/4 although page-own (`origin: page-own` set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: fundamental matrix review and non-uniqueness, x = Xc, all fundamental matrices XC (p. 1) → algorithm vs formula, one-by-one case, series (pp. 1–2) → matrix exponential and its properties, software (pp. 2–3) → example x′ = y, y′ = x (pp. 3–4) → initial value problem (p. 4) → exponential law, three commuting cases, (e^A)⁻¹ = e^{−A} (p. 4) → computing e^{At}: series, splitting, X(t)X(0)⁻¹ (pp. 4–5). Same order as MIT.
- Left out (minor): everything holds for n × n systems (p. 1); the arbitrary constant in the scalar case comes by linearity (p. 2); "the first person … about 100 years ago" (p. 2); why only one point of the determinant must be checked (p. 3, see finding 1); that the exponential law is "the reason exponentials came into being" (p. 4); that XX(0)⁻¹ "has to be the same as the thing calculated with that infinite series" (p. 5, implicit on the page). Only the n × n remark and finding 1 are worth a clause.
- Added: the worked example (page-own).
- Prerequisite `variation-of-parameters-systems` exists (reviewed); the inline link `/courses/18-03/variation-of-parameters-systems` follows the site's URL pattern.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("no 'the' fundamental matrix, only 'a'", "what people love", "main survivor") are brief and attributed to the transcript by page; acceptable.
- Worked example: (b) uses a matrix and initial value not in the lecture; original. (a) applies the splitting method Mattuck mentions on p. 5 and leaves for homework, with its own numbers (a = 1, b = 2); original. No OpenStax or LibreTexts material.
- On the earlier page's use of (0 1; 1 0): the Lecture 28 page's worked example (x′ = y, y′ = x + e^{2t}, variation of parameters) uses the same matrix as this lecture's own example. That is not a copying or licensing problem: the Lecture 28 example (an inhomogeneous system solved by variation of parameters) does not occur in either transcript, the matrix itself is the simplest symmetric example and not protectable, and both sources are CC BY-NC-SA. Pedagogically it is an advantage, not a defect: a reader of both pages has already seen X = (e^t e^{−t}; e^t −e^{−t}) for this matrix, and X(t)X(0)⁻¹ reproduces the cosh/sinh matrix (verified above). Suggestion (info): add one sentence after the formula X(t)X(0)⁻¹ pointing back to that example as a check, which also shows the method on a familiar case. The only cost is that this page's own "An example" section offers no new matrix, which the worked example (b) makes up for.

## Notes
- `leadsTo` 18.03 Lecture 30 ("Decoupling linear systems by a change of variables."): matches the title "Decoupling Linear Systems with Constant Coefficients" in `_course.json`, and the Lecture 30 transcript (opening read, rest keyword-searched) describes decoupling as "the third method", with "change of variables" (5×) and "new variables" (13×). Correct. That transcript also opens by calling e^{At}x₀ the "royal road" and repeating that it is computed as X(t)X(0)⁻¹, consistent with this page.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` and the symbol entries in the uncommitted `data/symbols.json` diff were not checked as part of this review.

## Resolution (2026-11-16, by the page author)

1. Warning: the page now says that a Wronskian of solutions is never zero or always zero, so a nonzero value at t = 0 is enough (p. 3, with a link back to the previous lecture).
2. Info:
   - Matlab, Maple and Mathematica are now named as "software", not as computer algebra systems.
   - Quiz 3's explanation now says "essentially only when they commute".
   - One sentence points back to the previous page's fundamental matrix, which gives the cosh–sinh matrix by the X(t)X(0)⁻¹ method.
   - The tautological calcs entry `ex-b-entry` is replaced by a real check that the (1, 2) entry satisfies X′ = AX.

Status set to `reviewed`.
