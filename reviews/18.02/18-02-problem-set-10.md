---
page: content/year-1/18.02/18-02-problem-set-10.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps10/ (read: PDF text and page images)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read: PDF downloaded by the reviewer, Lecture 23 on printed pp. 3-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week10/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/gravitnl_attracn/ (read, text and page image)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/triple_integrals/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/tripl_intgrl_sol/ (read)
verdict: pass
---

# Review: Problem Set 10: flux around a hole, the average distance to the pole of a ball and the pull of a hemisphere

## Blind solve

My answers (written before opening the full page; numerical checks in blind.py in this folder):

- p1a (a < 1): the origin is outside C; div F = 0 wherever F is defined, so by the normal form of Green's theorem the flux is 0.
- p1b (a > 1): the origin is inside C. F . n on a circle of radius eps about the origin = 1/eps. Flux through C = flux through that small circle (the annulus between them has div F = 0) = (1/eps)(2 pi eps) = 2 pi = 6.283. Direct numerical line integrals: a = 0.3, 0.9 give 0; a = 1.1, 3 give 6.283185.
- p3a: r_max(z) = sqrt(2az - z^2); integral of distance over the ball = 2 pi int_0^{2a} int_0^{sqrt(2az-z^2)} sqrt(r^2+z^2) r dr dz = 8 pi a^4 / 5.
- p3b: rho_max = 2a cos(phi), phi in [0, pi/2]; integral = 2 pi int_0^{pi/2} (2a cos phi)^4/4 sin phi dphi = 8 pi a^4/5; average = (8 pi a^4/5)/(4 pi a^3/3) = 6a/5.
- p4a: near the axis rho_max = a sec(phi) (leaves through the flat face z = a); near the horizontal rho_max = 2a cos(phi) (leaves through the sphere); switch at phi = pi/4 = 0.785.
- p4b: F_z = 2 pi G [int_0^{pi/4} a sin phi dphi + int_{pi/4}^{pi/2} 2a cos^2 phi sin phi dphi] = 2 pi G a (1 - sqrt2/3) = 3.3213 G a, pointing along +z, from the pole towards the hemisphere (into the solid, towards its flat face). Agrees with the Notes' printed answer 2 pi G a (1 - sqrt2/3).

### Comparison (one line per answer id)

- p1-a-flux: page 0 (tolerance 0.001); mine 0. Agree.
- p1-b-fn: page 1/eps; mine 1/eps. Agree. Mistakes 1/eps^2, eps, 2*pi all differ from 1/eps on eps in [0.1, 0.9], and each hint is true of its formula.
- p1-b-flux: page 6.283 (tolerance 0.002); mine 2 pi = 6.28319. Agree.
- p3-a-rmax: page sqrt(2*a*z - z^2); mine the same. Agree. vars a in [2, 3], z in [0.5, 0.9] keep 2az - z^2 > 0. Mistakes sqrt(a^2 - z^2) (ball centred at the origin), 2az - z^2 (r squared), sqrt(az - z^2) (gives 0 at z = a, checked): hints true.
- p3-a-integral: page 8*pi*a^4/5; mine 8 pi a^4/5 (numerical double integral 5.02655 at a = 1, 80.4248 at a = 2). Agree. Mistake pi*a^4 is indeed the integral of the distance to the centre (2 pi * 2 * a^4/4); 4a^4/5 is the integral without the 2 pi: true.
- p3-b-rhomax: page 2*a*cos(phi); mine the same. Agree.
- p3-b-average: page 6*a/5; mine 6a/5. Agree. Mistake 12a/5 is what phi up to pi gives (int_0^pi cos^4 sin = 2/5): true. 3a/4 = average distance to the centre: true.
- p4-a-flat: page a/cos(phi); mine a sec(phi). Agree; vars phi in [0.1, 0.6] stay below pi/4.
- p4-a-curved: page 2*a*cos(phi); mine the same. Agree; vars phi in [0.9, 1.4] stay above pi/4. Hint of mistake 2a sin(phi) ("gives 2a at pi/2") true.
- p4-a-angle: page 0.785 (tolerance 0.002); mine pi/4 = 0.7854. Agree.
- p4-b-force: page 2*pi*G*a*(1 - sqrt(2)/3); mine 2 pi G a (1 - sqrt2/3) = 3.3213 G a (quadrature 3.321263 at a = 1, 6.642527 at a = 2). Agree, and equal to the answer printed in the Notes for 5C-5. Mistakes: 4 pi G a/3 (whole ball, Newton's theorem), 2 pi G a/3 (half of it), pi G a (mass at the centre of the flat face: 2 pi G a times int_0^{pi/2} cos sin = pi G a, checked), 2 pi G a (1 - sqrt2/2) (first piece only), 2 pi G a sqrt2/6 (second piece only); all differ from the answer and every hint is true.

No disagreement between the page and my blind solution.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1, parts (a), (b) | "Consider the cases a > 1 and a < 1 separately" (a > 1 named first) | Part (a) is a < 1, part (b) is a > 1 | None needed: the page says the split into parts is its own, and a < 1 first is the natural teaching order. |
| 2 | info | Problem 1(b) | Asks for the flux (exact value 2 pi) | Number box asks for a decimal to three places; the solution gives 2 pi = 6.283 | None needed; the exact value is in the solution. |
| 3 | info | Problem 1, the applet | Optional applet on the course web page | Replaced by a slider plot of the integrand, labelled "our addition, in place of MIT's applet" | None; clearly labelled. |
| 4 | info | Last section (Part A) | Underlined items are to be handed in | Lists all assigned exercises without the hand-in marks | Optional: mention that MIT marked some as hand-in; not needed since Part A is unscored here. |
| 5 | info | references.notesG, `at="equations (3) and (4), first page"` | Equations (3) and (4) are on the first page of note G, whose printed footer is "0" (the next page is "1") | "first page" | Correct; "first page" avoids the confusing footer 0. Keep. |

## Arithmetic and answer checks
- Problem 1: div F = (y^2 - x^2)/r^4 + (x^2 - y^2)/r^4 = 0 checked. The parametrised integrand a(a + cos t)/(1 + 2a cos t + a^2) re-derived from x = 1 + a cos t, y = a sin t, n = <cos t, sin t>, ds = a dt; its integral is 0 at a = 0.3, 0.5, 0.6, 0.9 and 6.283185 at a = 1.1, 1.6, 2, 3 (reviewer's own quadrature). Sign statement (positive where cos t > -a) correct. F . n = 1/eps on the small circle correct. At a = 1 the integrand is (1 + cos t)/(2 + 2 cos t) = 1/2 away from t = pi: correct.
- The region-with-a-hole argument via <-Q, P> is sound: the flux lesson (content/year-1/18.02/flux.mdx, "Proof by renaming") proves the normal form exactly that way, and simply-connected-regions.mdx states the annulus rule (outer counterclockwise, inner clockwise, "the same works for flux and divergence"). The sign of the inner normal (towards the origin, so minus the outward flux of C_eps) is right.
- Plots: the line y = 0.5x is at distance 0.447 < 0.6 from (1, 0), so it does cross the a = 0.6 circle twice, as the caption says. The 0.3 circle fits inside the 1.6 circle (0.3 < a - 1 = 0.6). Slider plot: at a = 0.6, t = pi the integrand is -1.5, inside the range [-6, 6]; for a > 1 the numerator a + cos t > 0, so "stays above zero" is right; near a = 1 the dip leaves the frame, as the caption says.
- Problem 3: inner integral (1/3)((2az)^{3/2} - z^3), middle (1/3)(2/5 - 1/4)16a^4 = 4a^4/5, total 8 pi a^4/5, average 6a/5, spherical route identical: all recomputed. Slice plot point (0.866, 0.5): on the circle r^2 + (z - 1)^2 = 1 (0.75 + 0.25) and on the ray z = r/sqrt3 (phi = pi/3), at rho = 2 cos(pi/3) = 1: correct. Average distance to the centre pi a^4/(4 pi a^3/3) = 0.75a: correct.
- Problem 4: limits a sec(phi) for 0 <= phi <= pi/4 and 2a cos(phi) for pi/4 <= phi <= pi/2, both sqrt2 a at pi/4; pieces a(1 - sqrt2/2) and sqrt2 a/6; total 2 pi G a (1 - sqrt2/3) = 3.321 G a. Cylindrical check: inner 1 - sqrt(z/2a), outer a - sqrt2 a/3: correct. Whole ball 4 pi/3 = 4.18879 -> 4.189; far half 4.18879 - 3.32126 = 0.86753 -> 0.868 (rounding correct, and consistent with the rounded 4.189 - 3.321); share 79.3% -> 79%. Units statement (G x density x mass x length = force) correct.
- Direction: positive z, from the pole into the solid along the axis: correct (the hemisphere lies at z >= 0 above the mass).
- calcs/18.02/18-02-problem-set-10.yaml: every answer box has an entry with `answer:`; the entries match the page values and use independent routes (numerical root finding, quadrature). I did not run `npm run calc:test`; every number in the file agrees with my own computation.
- Tolerances: 0.001 (flux 0) and 0.002 (6.283, 0.785) accept 3-decimal rounding and reject the listed confusions.
- Hints: none gives the final result. Problem 3(b) hint 2 points to the lesson's Newton's theorem section, where rho = 2a cos(phi) is written; this is a pointer to a method and acceptable.

## Coverage and order
- Part B: Problems 1, 3, 4 are present in MIT's order with MIT's 4 points each; Problem 2 (Edwards and Penney 14.6/39) is left out, and both the introduction and the "Problem 2" section say so clearly, with the 12 of 16 points stated ("Three of them are written out below ... (12 points)").
- Problem 4 = Notes 5C-5: confirmed starred ("5C-5.*") with the printed answer 2 pi G a (1 - sqrt2/3); the solutions file has no 5C-5 entry. The page's description ("the Notes print its final answer but no solution") is accurate.
- Part A table matches MIT's sheet exactly: Lecture 28: 5A/1, 2abcd, 3, 4, 5, 6, 7; Lecture 29: 5B/1abc, 2, 3, 4abc; 5C/2, 3, 4. 5A-2b is starred in the Notes ("b)*") and the solutions file gives 5A-2 a, c, d only: the page's remark is correct. Ten textbook exercises (12.8/5, 23; 14.6/41; 14.7/9, 19; 12.8/9, 11, 15, 27, 55): count correct. Note G has two worked examples: correct.
- Lecture mapping: MIT's sheet has Lecture 27 = Exam 3 (Thu Nov 8), Lecture 28 = Fri Nov 9, Lecture 29 = Tue Nov 13. The lecture summaries number Nov 9 as Lecture 25 and Nov 13 as Lecture 26 (week 10 and 11 PDFs), and _course.json has 23 Flux, 24 Simply Connected Regions, 25 Triple Integrals, 26 Spherical Coordinates, matching the four lesson files' `lecture:` values. `covers: [23, 24, 25, 26]` and `lecture: 26` are right, and "MIT's Lectures 28 and 29 are Lectures 25 and 26 here" is right.
- Citations: the normal form of Green's theorem (Lecture 23) is on printed p. 4 of the week 9 summaries (checked); rho = 2a cos(phi) and Newton's theorem are on printed p. 2 of Lecture 26 (week 11 PDF page 3, footer 2): correct. MIT problem statements cited "p. 1": the sheet's printed footer is 1: correct. Note G equations (3), (4) on its first page: checked against the page image; the Formula reproduces both forms correctly.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the problem set, the lecture summaries (weeks 9-11), note G, or Notes section 5 and its solutions (grep and page images).
- No MIT figure is redrawn; all four graphs are generated from formulas and are the page's own. Statements are in the page's own words (MIT's "solid sphere" quoted as a short phrase). The textbook problem is not reproduced.
- No OpenStax or LibreTexts material. No em dashes in the page; no `## Summary` holding answers.

## Notes
- The "circles may look flattened" / "axes need not have the same scale" captions are honest caveats for a Plot that does not force equal scales; fine.
- The a = 1 remark is correct and well placed; MIT's "a != 1" (pdftotext renders it as "a = 1"; checked on the page image) is respected in the statement ("where a is not 1").
- Not checked: the rendered page in a browser (label layout, slider) and `npm run content:check` in the worktree.

COUNTS: errors=0 warnings=0 info=5

## Resolution (2026-11-21, by the page author)

No errors or warnings; the info items need no change. Status set to `reviewed`.
