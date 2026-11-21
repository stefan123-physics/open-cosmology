---
page: content/year-1/18.01/18-01-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps5/ (read: ps5.pdf via pdftotext, plus a rendered image of printed p. 2 to recover the square roots lost in extraction)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec19/ (read, lec19.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec20/ (read, lec20.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec21/ (read, lec21.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/ShGBRUx2ub8.pdf (read, Lecture 22 transcript)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec18/ (read, lec18.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec9/ (read, lec9.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec16/ (read, lec16.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/ps4.pdf (read, Problem 5 only, to check the description of the procedure in 1(c))
verdict: pass-with-notes
---

# Review: Problem Set 5: the fundamental theorems, a Fresnel integral and a volume by slices

## Blind solve

### My answers (written before opening the full page or calcs)
- p1a: y(t) = 65 e^{t/100}. Average of day 3 = integral from 3 to 4 = 6500(e^{0.04} - e^{0.03}) = 67.32 F (day 4: 6500(e^{0.05}-e^{0.04})). Graph: slowly rising, nearly straight exponential; two unit-width regions under the curve over [3,4] (day 3) and [4,5] (day 4).
- p1b: Degree days = int_0^50 65 e^{t/100} dt - 65*50 = 6500(e^{1/2}-1) - 3250. Integral = 4216.69; degree days = 966.69. Shaded region between y and the line y = 65 on [0,50].
- p1c: Delta = 50/n, lower sum uses left endpoints (y increasing): L_n = (3250/n)(e^{1/2}-1)/(e^{1/(2n)}-1). Since e^{1/(2n)} - 1 ~ 1/(2n), L_n -> 6500(e^{1/2}-1) = 4216.69 (checked: L_10 = 4112.1, L_100 = 4206.2, L_1000 = 4215.6).
- p2a: zeros at t = +-sqrt(pi/2) = +-1.2533; at t = 0 value 1 with zero slope, very flat (cos t^2 ~ 1 - t^4/2); even.
- p2b: f'(x) = cos(x^2) = 0 at x = +-sqrt(pi/2 + n pi), n >= 0. For x > 0: sqrt(pi/2 + 2m pi) local maxima, sqrt(3pi/2 + 2m pi) local minima. f odd, so for x < 0: -sqrt(pi/2 + 2m pi) local minima, -sqrt(3pi/2 + 2m pi) local maxima. Second smallest positive critical point sqrt(3pi/2) = 2.1708, a local minimum.
- p2c: on [-2,2]: max at sqrt(pi/2) = 1.2533 with f = 0.9775; min at -1.2533 with f = -0.9775; inflection points f'' = -2x sin(x^2) = 0 at x = 0 and x = +-sqrt(pi) = +-1.7725 (f(sqrt pi) = 0.6629); f(2) = 0.4615. Inflection point with x > 0: 1.7725. Max value 0.977.
- p2d: f(0.1) = 0.1 - 0.1^5/10 + 0.1^9/216 - ... = 0.099999 (to six decimals; quad gives 0.0999990000046).
- p2e(i): t = sqrt(pi/2) u: f(x) = sqrt(pi/2) g(sqrt(2/pi) x); c1 = 1.2533, c2 = 0.7979. Factor pi/2 puts the first zero of the integrand at u = 1 (zeros at u = sqrt(2n+1)) and makes g(infinity) = 1/2.
- p2e(ii): v = t^2: f(x) = (1/2) h(x^2); c = 1/2.
- p2e(iii): z = x t^2, dz = 2xt dt: k(x) = (1/2) h(x) = f(sqrt x).
- p3: A(z) = z^2/2 - z^4/8 for 0 < z < 2 (empty otherwise); V = int_0^2 A dz = 4/3 - 4/5 = 8/15 = 0.5333.

### Comparison (one line per answer id)
- p1-a: page 65*exp(t/100); mine 65 e^{t/100}. Agree.
- p1-a2: page 67.32 (tol 0.05); mine 6500(e^{0.04} - e^{0.03}) = 67.3156. Agree.
- p1-b1: page 4216.69 (tol 0.6); mine 4216.688. Agree.
- p1-b2: page 966.69 (tol 0.6); mine 966.688. Agree.
- p1c-sum: page 3250*(exp(1/2)-1)/(n*(exp(1/(2n))-1)); mine identical. Agree (the limit 6500(e^{1/2} - 1) also agrees).
- p2-a1: page 1.2533; mine sqrt(pi/2) = 1.25331. Agree.
- p2-a2: page "even"; mine even. Agree.
- p2-b1: page 2.1708; mine sqrt(3pi/2) = 2.17080. Agree.
- p2-b2: page choice 0 (alternating from a maximum for x > 0, a maximum at x paired with a minimum at -x); mine the same. Agree.
- p2-c1: page 1.7725; mine sqrt(pi) = 1.77245. Agree.
- p2-c2: page 0.977 (tol 10%); mine 0.97745 (scipy quad). Agree.
- p2-d: page 0.099999 (tol 4e-7); mine 0.099999. Agree; the tolerance rejects the linear estimate 0.100000.
- p2e-i1: page 1.2533; mine sqrt(pi/2). Agree.
- p2e-i2: page 0.7979; mine sqrt(2/pi) = 0.79788. Agree.
- p2e-ii: page 0.5; mine 1/2. Agree.
- p2e-iii: page choice 0, k(x) = f(sqrt x); mine k(x) = (1/2) h(x) = f(sqrt x). Agree.
- p3-area: page z^2/2 - z^4/8; mine identical. Agree.
- p3-volume: page 0.5333; mine 8/15 = 0.53333. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1(b) statement | "a formula for this total area as the difference between 65·50 and a definite integral" (read literally, 65·50 minus the integral, which is negative) | "Write this total as a definite integral minus 65·50" | None needed: the page's order gives the positive number MIT means. Optionally add "(MIT's wording names the two in the other order)". |
| 2 | info | Problem 2 statement | "There is no expression for f(x) in terms of standard elementary functions" | lists the standard functions (powers, roots, exponentials, logarithms, sines and cosines) | Fine as a gloss; no change needed. |
| 3 | info | Front matter, reading6 | MIT's file is the Lecture 9 notes (linear and quadratic approximations) | title "18.01 Lecture 9 notes" without a subject | Add the subject, e.g. "18.01 Lecture 9 notes: Linear and Quadratic Approximations", as the other readings have. |
| 4 | info | Solutions 1(c), 2(a), 2(c) | n/a | "The lesson on approximations lists", "as in the lesson on curve sketching" name site lessons in words without links (the formulas themselves are correctly cited to MIT's notes) | Optionally link /courses/18-01/linear-and-quadratic-approximations and /courses/18-01/curve-sketching (both exist in the worktree). |

## Arithmetic and answer checks
- Every number recomputed independently in Python (scipy quad, numpy): y(3) = 66.98 -> 67.0, y(4) = 67.65 -> 67.7, y(5) = 68.33 -> 68.3, y(50) = 107.17 -> 107.2; 6500(e^{0.04} - e^{0.03}) = 67.32; 6500(e^{1/2} - 1) = 4216.69; 966.69; triangle 0.5*50*42.2 = 1055; L_10 = 4112.1, L_100 = 4206.2, L_1000 = 4215.6, L_50 = 4195.6; f(sqrt(pi/2)) = 0.9775, f(sqrt(pi)) = 0.6629, f(2) = 0.4615; x^9/216 at 0.1 = 4.6e-12 ("about 5e-12" is fine); A(sqrt 2) = 1/2; V = 8/15. All agree with the page.
- Plot of f in 2(c): the ten denominators 10, 216, 9360, 685440, 76204800, 11975040000, 2528170444800, 690452066304000, 236887827111936000, 99748982335242240000 equal (4k+1)(2k)! for k = 1..10 (checked); with the leading x that is eleven terms, as the caption says. The series differs from the integral by 7e-10 at x = 2.
- Mistake hints checked by value: p1-a (65e^t grows 100 times too fast; e^{t/100} starts at 1; 65 + t/100 has slope 1/100; 65(1 + t/100) has slope 0.65): all true. p1c-sum: the upper-sum formula is L_n e^{1/(2n)} (n = 4: 4485.7 against 3958.6); the "heights only" formula lacks the width 50/n; the limit formula has no n; the 1/n-ratio formula uses the wrong ratio. All hints true, all formulas differ from the answer over n in [4, 40]. p3-area: z - z^2/2 (a length), z^2 - z^4/4 (squares instead of triangles), z^2/2 + z^4/8 (added instead of subtracted), z^2/2 (whole large triangle): all true.
- vars ranges: t in [1, 50], n in [4, 40], z in [0.5, 1.8] (inside 0 < z < 2 where A(z) > 0): finite and meaningful.
- Tolerances: p1-a2 0.05 matches "two decimal places"; p1-b1 and p1-b2 0.6 match "nearest whole number or more precisely"; p2-d 4e-7 matches "six decimal places" and rejects 0.1; p2-c2 10% as stated; the rest 1%, as "How to answer" says.
- Choice answers p2-a2, p2-b2, p2e-iii: marked answers correct; the distractors are wrong.
- Every solution step checked; each problem or part ends with a check (derivative and start value; a triangle bound; numerical lower sums; odd symmetry; the second-derivative test; the size of the next term; the derivative of c1 g(c2 x); small-x behaviour; a second route by s = sqrt(x) t; the largest cross-section and a box bound). The extra claims (critical and inflection points of g at square roots of odd and even integers; g(infinity) = 1/2, flagged as from outside the course; f steepest at 0 and +-sqrt(pi) with |f'| = 1; f still falling at x = 2) are correct.
- `npm run calc:test -- -k "problem-set-5 and 18"` in the worktree: 52 passed.
- Hints: none gives a final result away. Hint 3 of 1(c) names the limit n(e^{1/(2n)} - 1) to evaluate, which is what MIT's own Problem Set 4 Problem 5 tells students; acceptable.

## Coverage and order
- Part II order kept: 1(a), 1(b), 1(c), 2(a) to (d), 2(e)(i) to (iii), 3(b). Points match MIT: Problem 1 = 3 + 3 (+5 extra credit, set as optional), Problem 2 = 2 + 2 + 4 + 2 + 6 (the 2/2/2 split of (e) is declared as the page's own), 3(b) = 3. Left out, and said so: Problem 0 (3 pts), Problem 3(a) (Simmons 7.3/22, 2 pts), Part I. Counted total 25 = 30 - 3 - 2. Correct.
- Part I exercise list checked against MIT for all three lectures: identical. Lecture 22 "Work on PS 6" correctly reported. MIT's footnote 1 (about 4B-6 as a tent) is not mentioned; it concerns Part I only. Both course-reader links (E and S resources) resolve (HTTP 200).
- The description of MIT's PS4 Problem 5 in 1(c) (lower sums for the integral of e^x from 0 to 1, a geometric series, the limit n(e^{1/n} - 1) by the linear approximation) matches ps4.pdf.

## Citations
- Statement formulas cite printed pages of ps5.pdf: Problem 1(a) and footnote 2 on printed p. 1; Problems 1(b), 1(c), 2 and 3(b) on printed p. 2. All correct (the PDF has an OCW cover page, so printed page = PDF page - 1).
- Readings (lecture notes: printed page = PDF page - 1): lec16 p. 2 separable equation, correct; lec19 p. 1 FTC 1 and p. 4 change of variable (MIT writes f(x) = g(u(x)); the page writes g(u(x)) u'(x), the same rule, with a note that this g is not the problem's g), correct; lec20 p. 4 C'(x) = cos(x^2) and "Fresnel functions, which arise in optics", FTC 2 on p. 1, correct; lec21 p. 3 area between curves, correct; lec18 p. 4 Riemann sum and its limit, correct; lec9 p. 2 e^x ~ 1 + x and p. 5 cos x ~ 1 - x^2/2, correct; Lecture 22 transcript p. 1 (no printed footer; PDF page 1) has the slice volume ~ area times dx, correct. (The lec21 notes also treat volumes by slicing; citing the transcript is fine.)

## Licensing
- MIT PS5, the lecture notes and the transcript carry no "All rights reserved" or "Courtesy of" notices (grep of all extracted texts). No MIT figure is redrawn; the three plots are generated from formulas. Statements are in the page's own words; the closest is the short phrase about Fresnel integrals being written with the variables "scaled differently", which is fine. No OpenStax or LibreTexts material. The Simmons exercise 3(a) is correctly left out.

## Notes
- No em dashes, no "## Summary", no answers in the statements; status is draft, as it should be before resolution.
- content:check and the symbols check were not run by me; calc:test for this page passed.
- pdftotext lost the square root in MIT's k(x) = sqrt(x) times the integral; the rendered PDF page confirms the page's sqrt(x) is right.

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

No errors or warnings. Info items:
1. Kept as written: the page's order (integral minus 65·50) gives the positive difference MIT means.
2. No change needed.
3. Done: reading6 is now titled "18.01 Lecture 9 notes: Linear and Quadratic Approximations".
4. Done: the solutions now link the lessons on linear and quadratic approximations (twice) and on curve sketching.

Status set to reviewed.
