---
page: content/year-1/18.02/18-02-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps7/ (read; PDF rendered, pp. 1-2)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week7/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week8/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week1/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/double_integrals/ (read; p. 4 rendered)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/dbl_intgrls_sol/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/multipl_integrls/ (read; formula numbers partly lost in pdftotext)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lim_itratd_intgr/ (not fetched; the page only links it)
verdict: pass-with-notes
---

# Review: Problem Set 7: exchanging the order of integration, averages, the parallel axis theorem and changes of variables

## Blind solve

### My answers (written before opening the full page)
- p1a: (e^{-x} - e^{-ax})/x
- p1b: ln a (double integral over 0<x<inf, 1<y<a (or a<y<1), exchange: int_1^a dy/y)
- p2: (1/(pi a^2)) int_0^{2pi} int_0^a r * r dr dtheta = 2a/3
- p3: Ibar = int (x - xbar)^2 delta dA = I - 2 xbar (M xbar) + M xbar^2 = I - M xbar^2
- p4a: A = (1/2)[sin t1 + sin(t2 - t1) - sin t2]  (= 2 sin(t1/2) sin((t2-t1)/2) sin((2pi-t2)/2))
- p4b: region 0<t1<t2<2pi (area 2pi^2); average = 3/(2pi) = 0.477; max/avg = pi*sqrt(3)/2 = 2.72 (Monte Carlo 10^6 triangles: 0.4778)
- p5: Jacobian d(u,v)/d(x,y) = 2y/x = 2v, dA = du dv/(2v); r^2 = u/v + uv; g = u/(2v^2) + u/2; region 0<u<1, u/4<v<u; integral int_0^1 int_{u/4}^{u} g dv du = 13/8 = 1.625 (checked directly in xy: 1.625)
- p6: |d(u,v)/d(x,y)| = |2(-7) - 5*3| = 29; area = pi/29 = 0.1083

These numbers were checked with scipy for the blind solve:
- ∫₀^∞ (e^-x − e^-3x)/x dx = 1.098612 = ln 3.
- The double integral of (sin t1 + sin(t2−t1) − sin t2)/2 over 0 < t1 < t2 < 2π, divided by 2π², is 0.4774648 = 3/(2π). A Monte Carlo run over 10^6 random inscribed triangles gives 0.4778.
- Maximum/average = 2.720699 = π√3/2.
- ∫₁² ∫₀^{1/x} (x² + y²) dy dx = 1.625.
- π/29 = 0.1083308.

### Comparison (one line per answer id)
- p1-a: page (exp(-x) - exp(-a*x))/x; mine is the same. Agree.
- p1-b: page log(a); mine ln a. Agree (the page also handles 0 < a < 1 correctly).
- p2 (proof): page gets 2a/3 from the polar integral divided by πa². Agree.
- p3 (proof): page expands (x − x̄)² and uses ∫∫ x δ dA = M x̄. Agree.
- p4-a: page (sin t1 + sin(t2−t1) − sin t2)/2; mine is the same. Agree.
- p4-b-average: page 0.477 (3/(2π)); mine 0.477. Agree.
- p4-b-ratio: page 2.72 (π√3/2); mine 2.72. Agree.
- p5-jacobian: page 2v; mine 2v. Agree.
- p5-g: page u/(2v²) + u/2; mine is the same. Agree.
- p5-order: page "v first, then u"; mine dv du. Agree.
- p5-inner-lower: page u/4; mine u/4. Agree.
- p5-inner-upper: page u; mine u. Agree.
- p5-outer-lower / p5-outer-upper: page 0 / 1; mine 0 / 1. Agree.
- p5-value: page 1.625; mine 13/8 = 1.625. Agree.
- p6-jacobian: page 29; mine 29. Agree.
- p6-area: page 0.1083; mine π/29 = 0.10833. Agree.

My answers and the page's agree everywhere.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 6, first answer box | Only "Find the area of the ellipse" | Asks for \|∂(u,v)/∂(x,y)\| of "your change of variables" | The value 29 assumes the natural choice, with u and v the two brackets (in either order, with or without the shifts). A reader who rescales gets a different number. Optional: in the box question, say "with u and v the two brackets". |
| 2 | info | Problem 5 statement | 3D-7: "Choose the order of integration which makes the limits simplest." | "Choose the order of integration that makes the limits simplest." | Close to MIT's sentence, but it is a short instruction, so acceptable. Rewording is optional. |
| 3 | info | Problem 1(b), hint 2 | (MIT gives no hints) | "Its sides are parallel to the axes, so the limits stay the same numbers when the order changes." | Gives away the exchanged limits but not the result. Acceptable. Optional: trim the second sentence. |

The page's statements match MIT's physics and the order of MIT's parts.
- **Points:** 3 (= 1+2), 2, 4, 5, 5 and 4, total 23, with 15 for Part A. These match MIT. The page says the 2+3 split of Problem 4 is its own.
- **Problem 4 hint:** attributed to MIT and rewritten.
- **Problems 3, 5 and 6:** restated correctly (I_L = ∫∫ dist² δ dA; the 3D-7 region and coordinates; the ellipse as given).

## Arithmetic and answer checks
- **Worked numbers:** I recomputed every one and all are correct.
  - P1: the check ln 2 = 0.693; the small-x limit a − 1.
  - P2: 2πa³/3, and the a/2 remark.
  - P3: rectangle example with M = 6, x̄ = 1.5, I = 18, Ī = 4.5, M x̄² = 13.5. The disc about a rim point gives 3πa⁴/2, which matches the Lecture 17 summary, p. 3.
  - P4: the identity 4 sin(t1/2) sin((t2−t1)/2) sin(t2/2); inner integral 2 − 2cos t2 − t2 sin t2; outer integral 6π; 3/(2π) = 0.477; 1.299; 2.72; 37 %; 3/(2π²), about 15 %.
  - P5: inner integral 3/2 + 3u²/8, outer 13/8. The xy route gives [x²/2 − 1/(6x²)]₁² = 47/24 − 8/24 = 13/8. The other order does need a split at v = 1/4, as the page says.
  - P6: determinant −29; the centre (−19/29, 25/29) makes both brackets 0; the inverse matrix [[7,5],[3,−2]]/29 has determinant −1/29.
- **Closing checks:** every solution ends with one (units, a limit, a number or a second route): p1-a, p1-b, p2, p3, p4-a, p4-b, p5 and p6.
- **Answer boxes:**
  - Each expr or value equals its solution's result.
  - The vars ranges keep the formulas finite and physical: t1 in [0.3, 1.2] stays below t2 in [3.3, 4.5]; v in [0.1, 0.4] > 0; a > 1.
  - Every listed mistake differs from the answer over its vars range, and each mistake hint describes its wrong formula correctly. I checked all 20, including:
    - p4-a mistake 4 at t1 = π/2, t2 = 3π/2, which gives 0 where the true area is 1;
    - p5-g mistake (u/v+uv)·2/v, which multiplies by 2/v instead of dividing by 2v.
  - The tolerances (0.477 ± 0.002, 2.72 ± 0.01, 1.625 ± 0.002, 0.1083 ± 0.0003) accept the requested digits and are tight enough to reject neighbouring wrong values.
- **Tests:** calc:test on this page's entries (pytest -k problem-set-7, in the worktree): 193 passed. content:check in the worktree: 0 errors. Its only warning for this page is "no review file yet".
- **calcs file (info #4):** p5-outer-lower and p5-outer-upper use the made-up formulas `1.5 * 0` and `1.6 * (1/1.6)`, which test nothing. This does no harm. Optional fix: make them `kind: fact`, or derive them from the corners (u = xy at (1,0) and (1,1)).

## Coverage and order
- **Part B:** all six problems are there, in MIT's order, with MIT's points. MIT's day labels are translated to this site's lecture numbers (MIT 18/19/20 = site 16/17/18, checked against `_course.json`).
- **Part A:** the Notes exercises are listed lecture by lecture, exactly as on MIT's sheet (3A/1, 2abc, 3ab, 4bc, 5abc, 6; 3B/1acd, 2bd, 3ac; 3C/1, 2a, 4; 3D/1–4 with "du dv"). None is starred (checked). The Edwards & Penney items are left out, as intended and as the page says.
- **Additions, each stated as such:** the numerical value of I₀ in Problem 5, and the suggestion of 3D-5 and 3D-8.
  - 3D-5's solution does use u = xy, v = y/x and the Jacobian 2v (checked), so the page is right that it gives away the Jacobian.
  - 3D-7 is starred, and the solutions file has no solution for it (checked).

## Citations
- **MIT sheet:** Problems 1–3 and the I_L and I_y formulas are on printed p. 1. The parallel axis statement and Problems 4–6 are on printed p. 2. Every `at=` page number is correct.
- **reading1** (Week 7 summaries), "Lecture 17, p. 2": the average value, M, x̄ and I₀ are on printed p. 2. Correct. The disc about a rim point is on p. 3, as the calcs file cites. Correct.
- **reading2** (Week 8), "Lecture 18, p. 1": the Jacobian definition and du dv = \|J\| dx dy. Correct.
- **reading3** (Week 1), "Lecture 2, p. 2": determinant = ± the area of the parallelogram. Correct.
- **notesProblems**, "Exercise 3D-7, p. 4": printed page 4 of the exercises. Correct.
- **notesCV**, "Section 3, p. 4": formula (22) is the reciprocal relation between the two Jacobians (Section 3, used again in Example 3). Correct.
- **Claims about lessons**, all true:
  - polar-double-integrals says to take δ = 1 when no density is given, and notes that for a disc the average of r is positive although the centre of mass is the origin.
  - determinants-and-cross-product gives the counterclockwise sign rule.
  - change-of-variables works the ellipse (x/a)² + (y/b)² < 1.
  - 8.01 moment-of-inertia covers the parallel axis theorem.

## Licensing
- MIT's sheet and Notes have no "All rights reserved" or "Courtesy of" notices on the material used.
- No MIT figure is redrawn: the Problem 5 graph is generated from the page's own equations.
- No OpenStax or LibreTexts material.
- The text is in the page's own words. Only the one short sentence in info #2 is close to MIT.
- No hint gives away a final answer. No em dashes. No `## Summary` with answers.

## Notes
- The remark in Problem 1(b) that the order may be exchanged for a positive integrand (Tonelli) is correct, and the page fairly presents it as a theorem from a later course.
- I did not fetch Notes I (lim_itratd_intgr). The page only links it, and its section numbers match MIT's sheet ("Notes I.1", "I.2").

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

No errors or warnings. Of the four info items:
1. Problem 6: the box question now asks for the Jacobian of "a change of variables that turns the ellipse into the unit disc", which fixes the value 29 (any such change has |J| = 29) without naming the brackets, which hint 1 leads to.
2. Problem 5: the short instruction is kept, as the review allows.
3. Problem 1(b), hint 2: trimmed to "Notice that its sides are parallel to the axes."; it no longer says the limits stay the same.
4. Calcs p5-outer-lower and p5-outer-upper: kept; they record the corner values the boxes expect and pass.

`content:check`, `calc:test -k 18-02-problem-set-7` and `test:answers` pass. Status set to reviewed.
