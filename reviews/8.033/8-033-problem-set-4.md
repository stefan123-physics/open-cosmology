---
page: content/year-2/8.033/8-033-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps4/ (read: PDF, pdftotext plus page images of pp. 1-6; Figures 1 and 2 rendered at 500 dpi and re-read)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read; slide 16 checked)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read; slides 6, 12, 14, 21 checked)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture6_kinem3/ (read; slides 27, 28 checked)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture7_kinem4/ (read; slide 21 checked)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture8_euler/ (read; all 8 slides)
verdict: needs-changes
---

# Review: Problem Set 4: Doppler shifts, twins and geodesics

## Blind solve

Written before the full page, its calcs file or its symbol meanings were opened (only the stripped statements and MIT's PDF were read).

### My answers
- P1: lines = Mg II 2799, H delta 4102, H gamma 4340, H beta 4861, [O III] 5007; z = 0.270 (1+z per line 1.2719, 1.2701, 1.2696, 1.2693, 1.2682; mean 1.2698).
- P2a: 0.035. P2b: opposite jet has cos(180 deg - theta) = -cos theta, so gamma(1 - b cos) = gamma(1 + b cos) only if cos theta = 0. P2c: gamma = 1.035, beta = 0.2579. P2d: cos theta = (1 - 1.175/1.035)/0.2579 = -0.5245, theta_max = 121.6 deg (the min -0.10 gives 59.6 deg for the partner jet).
- P3a: theta' = 90 deg maps to cos theta = beta; arccos beta ~ sqrt(2(1 - beta)). P3b: 0.200 rad = 11.46 deg (exact 11.48 deg). P3c: 1 - beta = 0.609 x 10^-3.
- P4: cos theta = (1 - sqrt(1 - b^2))/b.
- P5b: x' = -1.75, ct' = 4.25 (y' = 2, z' = 3); x'' = -1.75, y'' = -7/3 = -2.333, z'' = 3, ct'' = 53/12 = 4.417. P5c: 0. P5d: L0. P5e: Michelson-Morley, muon lifetimes, transverse Doppler / Ives-Stilwell, flown clocks / GPS, accelerators.
- P6: a) 15/17 = 0.8824 (gamma = 17/8; meeting at t = 12.5 yr in S). b) 10 yr. c) 7.5 ly. d) Vera older by 2 yr.
- P7: 8 yr on both clocks.
- P8a: T'/T = (1 - f) sqrt(1 - b^2) + (f/2)[sqrt(1 - b^2) + asin(b)/b], with a0 = 4 beta c/(f T); verified against direct numerical integration at (b, f) = (0.5, 0.3), (0.9, 0.7), (0.99, 1.0): 0.893201, 0.718794, 0.792381 both ways. b) pi/4. c) sqrt(1 - b^2).
- P9: A = -k cos alpha, B = -k sin alpha, k = sqrt(1 - a^2)/a; great circle.
- P10a: u/c = (1 + n b)/(n + b). c) 5/9 = 0.5556.
- P11: x_D = 1.25, x_C = 0.8, x(t) = sqrt(1 + c^2 t^2).

### Comparison (one line per answer id)
- p1-lines: page choice 1 (Mg II, H delta, H gamma, H beta, [O III] 5007) = mine. Agree.
- p1-z: page 0.270 = mine. Agree.
- p2-cross: page 0.035 = mine. Agree.
- p2-beta: page 0.258 = mine (0.2579). Agree.
- p2-theta: page 121.6 deg = mine. Agree.
- p3-angle: page 11.46 deg = mine. Agree.
- p3-speed: page 0.609 = mine. Agree.
- p4-cos: page (1 - sqrt(1 - b^2))/b = mine. Agree.
- p5-x1 / p5-t1 / p5-y2 / p5-t2: page -1.75 / 4.25 / -2.333 / 4.417 = mine. Agree.
- p5-vel: page choice "0" = mine. Agree.
- p5-len: page choice "L0" = mine. Agree.
- p6-speed: page 0.8824 = mine. Agree.
- p6-vera: page 10 = mine. Agree.
- p6-dist: page 7.5 = mine. Agree.
- p6-who / p6-diff: page "Vera is older" / 2 = mine. Agree.
- p7-vera / p7-hugo: page 8 / 8 = mine. Agree.
- p8-ratio: page expr identical to mine. Agree.
- p9-curve: page choice 1 (great circle) = mine. Agree.
- p10-u: page (1/n + b)/(1 + b/n) = (1 + n b)/(n + b) = mine (identical algebraically). Agree.
- p10-coeff: page 0.556 = mine. Agree.
- p11-d / p11-c: page 1.25 / 0.8 = mine. Agree.
- p11-curve: page sqrt(1 + c^2 t^2) = mine. Agree.

No disagreement on any answer.

### Figure re-readings (MIT PDF pp. 2 and 3, rendered at 500 dpi)
- Figure 1 (quasar): axis calibrated on the 5200/5800/6400 ticks (1.68 A per pixel). Peaks at about 3557, 5203, 5505, 6175, 6343 A. The page's 3560, 5210, 5510, 6170, 6350 agree within 10 A, inside its stated 20 A. With my readings z = 0.268 to 0.271; the page's 0.270 and 2% tolerance cover both.
- Figure 2 (SS433, lower panel, MIT's own guide lines): crossing guide line at about 0.033 (the curves themselves cross at 0.033 to 0.036), max line 0.175, min line -0.101; peaks at about JD 2444650, 4810, 4970, 5135, 5300, 5465, so a period of about 163 d. The page's 0.035 / 0.175 / -0.10 / ~162 d are within its stated 0.005. The small curve peaks at about 0.075 and dips to about -0.005, as the page's plot caption says (0.076, -0.006).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 8(c), solution, "Check the result" | (claim about the site's lesson, not MIT) The lesson doppler-aberration-twin-paradox has the example "4.2 ly at 0.6c and back: 14.0 yr at home, 11.2 yr for the traveller"; no lesson of 8.033 has a 10 yr / 8 yr example | "The lesson's own example fits: out and back at $0.6c$ for 10 years of home time gives $10 \times 0.8 = 8$ years." | Write "The lesson's own example fits: out and back at $0.6c$ for 14.0 years of home time gives $14.0 \times 0.8 = 11.2$ years." (or drop "the lesson's own" and keep 10 to 8 as a fresh example). Update calcs if the numbers change. |
| 2 | warning | Problem 9(b), formula "Euler-Lagrange equation for the path", `at="slide 3 (the Euler–Lagrange equation; applied to the sphere by us)"` | Lecture 8 slide 3 is the agenda: it lists "The Euler-Lagrange equation" but does not write it out; no slide of the 8-slide PDF writes the equation | Citation reads as if the equation is on slide 3 | `at="slide 3 (listed there, not written out; the form is the lesson's, applied to the sphere by us)"`, matching the lesson page's own wording "slide 3 (listed; written out by the page)". |
| 3 | warning | Problem 1, third hint | n/a (hint is ours) | "Look for three neighbouring laboratory lines with the same ratios." H delta, H gamma, H beta are not neighbours in the table: [O III] 4363 lies between H gamma 4340 and H beta 4861 | "Look for three laboratory lines (not necessarily next to each other in the table) with the same ratios." |
| 4 | warning | Problem 5(e), hint | MIT: "List three pieces of observational evidence" | Hint: "an experiment with light and the motion of the Earth, particles that live too long, and clocks that were flown" names the three answers | Make it a pointer, not the list: "Look back at the time-dilation and Doppler lessons: which measurements were quoted there as tests?" |
| 5 | warning | Problem 11(c), second hint | n/a | "So on the curve, the invariant $x^2 - (ct)^2$ equals $1^2 - 0$." This is the curve's equation; only taking a square root is left | End the hint at "On each frame's own x-axis its time coordinate is zero. What is the invariant there?" |
| 6 | info | Problem 2, table, crossing 0.035 | MIT's drawn guide line through the crossings is at about 0.033 (curves cross at 0.033 to 0.036) | 0.035, "each to about 0.005" | Fine within the stated accuracy; optionally say the crossings lie at 0.033 to 0.036. The part (c) check already gives the sensitivity (0.030 to 0.040 gives beta 0.240 to 0.275). |
| 7 | info | Problem 1, lab table | Table I prints 4956 for [O III] | 4959 with a note | Correct and disclosed; keep. |
| 8 | info | Problem 3 | MIT: beta = 0.993 (neutral pions) and 5.0 deg | beta = 0.98 and 2.0 deg, labelled "the numbers of parts (b) and (c) are ours" | Correct and labelled. |
| 9 | info | Problems 6, 7 | MIT (from Resnick): Bob and Dave, 0.8c, 3 years | Vera and Hugo, 0.6c, 4 years, labelled as ours | Correct and labelled. "4 more years" read as Hugo's clock is right: 4 more years of S time would need 1.2c (MIT's original would need 1.6c), and the page says so. |
| 10 | info | Problem 11 | MIT: beta = 4/5, gamma = 5/3, its own scale drawing (points C, B, D marked, thin lines AD and AC) | beta = 3/5, generated plot; C and D are not marked and lines AD, AC are not drawn | The text says "compare with the graph"; consider adding the points C (0.8, 0) and D (1.25, 0) so the comparison can be made on the graph. |
| 11 | info | "How to answer" | n/a | "1% or 2%, wider where you read a graph" | p6-speed uses 0.5%; say "0.5% to 2%" or leave as is (stricter boxes do no harm). |

## Arithmetic and answer checks
- All page numbers recomputed (script in scratch): P1 ratios 1.2719, 1.2701, 1.2696, 1.2693, 1.2682, mean 1.2698; neighbour ratios 1.0576/1.0580 and 1.1198/1.1200; 3560/1.27 = 2803, 6350/1.27 = 5000; Ly alpha test 2.93, 4535, 5589 A; H alpha at 8335 A. P2: beta 0.2579, 0.2396 and 0.2747 for 0.030/0.040, small-shift approx 0.2646, cos -0.5245, 121.6 deg, 59.6 deg, sum 181.2 deg. P3: 11.46 vs 11.48 deg, 0.6092e-3 vs 0.6092e-3, beta 0.99939, gamma ~ 29. P4: beta = 0.6 gives 1/3, 70.5 deg; tanh(eta/2) = gamma beta/(gamma + 1); (2/3)/(10/9) = 0.6. P5: matrices, table, interval -2 in all three frames (2521 - 2809 = -288 over 144). P6: 15/17, 17/8, 12.5, 10, 7.5, 8.5 x 15/17 = 7.5, intervals sqrt(12.5^2 - 7.5^2) = 10 and sqrt(8.5^2 - 7.5^2) = 4; Vera-frame route (0.6 + 0.6)/1.36 = 15/17 and 8 x 1.25 = 10. P7: 5, 3, 9, 8, 8. P8: closed form checked by numerical integration; low-speed expansion 1 - beta^2(1/2 - f/3) checked; pi/4 = 0.785. P9: every step of (b), (c), (d) and the back-differentiation check redone. P10: 0.672185 vs 0.672222. P11: (1.25, 0.75), 0.8, 0.45 step, hyperbola through A and B, 1.46 page units. All correct.
- `calc:test` on this worktree (`pytest tests/calc -k "problem-set-4 or problem_set_4"`): 512 passed (includes other sets numbered 4).
- Answer boxes: every `value`/`expr` equals the solution's result. Formula `vars` ranges keep every answer and mistake finite (p4 b in [0.2, 0.9]; p8 b in [0.2, 0.95], f in [0.1, 0.9]; p10 n in [1.2, 2], b in [0.05, 0.5]; p11 c in [0.5, 1], t in [0.1, 0.9], so c^2 t^2 <= 0.81 and the circle mistake stays real).
- Mistake hints checked against their formulas: p4 "0" (transverse redshift gamma) true; "b" (gives 1/gamma, still blue; the answer lies between arccos beta and 90 deg, e.g. 1/3 < 0.6) true; "b/2" (low-speed limit) true. p8 sqrt(1 - b^2) (f = 0 limit) true; "(1 - f)sqrt + f" (full rate while accelerating) true; missing 1/2 gives 1 + f at beta -> 0, true. p10 Galilean sum, first-order form, and beta n slip all true. p11 circle and straight line hints true.
- Tolerances: p1-z 2% covers the line-to-line spread (0.268 to 0.272) and my own figure readings; p2-beta 2% rejects the small-shift approximation 0.2646 (2.6% off); p2-theta 1% (1.2 deg) accepts the route through the minimum (120.4 deg) at the edge and rejects 58.4 deg (axis angle) and 59.6 deg; p3 boxes at 1% accept both the approximate and exact values; p6-speed 0.5% fine. No problems found.
- Choices: p1-lines index 1, p5-vel index 0, p5-len index 1, p6-who index 0, p9-curve index 1: all correct; distractors are all wrong.
- Every solution ends with a "Check the result" step (units, a limit, a second route or a number).
- Points: 3 + 12 + 9 + 3 + 12 + 12 + 3 + 9 + 12 = 75, MIT's split in every multi-part problem (2: 3+3+3+3, 3: 3+3+3, 5: 3+4+1+1+3, 6: 3+3+3+3, 8: 3+3+3, 9: 3+3+3+3); the 3 points for stapling are left out and said so. Optional 10 and 11 points marked as ours.

## Coverage and order
- All eleven MIT problems present in MIT's order, with all parts in MIT's order (Problem 11 parts (i) to (iii) as (a) to (c)). Problem 10(c) is an added part, labelled "our own addition".
- Problem 8(a): MIT asks for T'/T "as a function of a0, beta and f"; the page explains that these are tied to T and asks for the beta, f form, giving the a0 form in the solution too. Acceptable and disclosed.
- Citations checked: all `at=` page numbers of MIT's sheet (p. 1, 3, 4, 5) match the PDF page; Lecture 4 slide 16 (Lorentz matrix, same (x, y, z, ct) order), Lecture 5 slides 6 (muons: 10 km, 1.56e-6 s, 0.47 km), 12 (length L/gamma), 14 (velocity addition), 21 (interval), Lecture 6 slides 27 (aberration, cos theta' = (cos theta - beta)/(1 - beta cos theta)) and 28 (transverse Doppler, time dilation), Lecture 7 slide 21 (GRBs, supernovae, clocks on planes, GPS), Lecture 8 slide 8 (proper time with c = 1) are all correct. Lecture 8 slide 3: see finding 2.
- Lesson claims checked: proper time integral and "straight world line has the most proper time" are in geodesics-calculus-of-variations (slide 8 discussion); the rapidity is in lorentz-transformation. The 10 yr / 8 yr example is not in any lesson (finding 1).

## Licensing
- MIT's Figure 1 (spectrum "3H-40D #429 (a)") and Table I and Figure 2 (SS433 Doppler curves, Julian-day axis) are literature scans without credit on the sheet; neither figure is reproduced. The page gives readings (facts) and its own cosine plot built from those readings, not a trace of the measured points. The laboratory wavelengths are physical data, re-tabulated in a different layout. Acceptable.
- Problems 3, 6, 7, 11 (MIT: "taken from Basic Concepts in Relativity by Resnick and Halliday"): the physics is kept with new numbers, names and situations, and each is labelled. Problem 3(a)'s result is unchanged, as it must be (a standard result). Problem 11's plot is generated with beta = 3/5, not MIT's 4/5 drawing.
- No "All rights reserved" material used. Lecture 8 slide 1 ("Image Courtesy of Wikipedia") and slide 4 (image removed for copyright) are not used.
- Wording is the page's own; no sentences copied from MIT beyond standard phrases. No OpenStax or LibreTexts.
- No em dashes (0 found); no `## Summary` with answers.

## Notes
- Symbols: the page-scoped meanings in the worktree's data/symbols.json fit the page (alpha, a, phi, phi', theta', theta_0.5, beta_H, gamma_H, lambda_1, lambda_2, w, b, u, A, B, C, D, the primed and double-primed coordinates). Small points: `T` and `T'` carry unit "s" while the page works in years (harmless); `b` is the standard-integral constant in TeX while answer boxes use the typed letter `b` for beta (only in code, so no clash in the symbol list). I did not run `content:check`.
- p11-curve treats c as a variable over [0.5, 1]; a reader who types `sqrt(1 + t^2)` (units with c = 1) is rejected without a hint. Optional: add that form as a listed mistake with the hint "keep c: the axis is ct".
- Problem 2's plot is labelled as our own formula; the real kinematic model of SS433 gives slightly non-sinusoidal curves, which does not matter here.

COUNTS: errors=1 warnings=4 info=6

## Resolution (2026-11-21, by the page author)

- Finding 1 (error): the check of Problem 8(c) now quotes the real example of the lesson on the twin paradox (4.2 light years at 0.6c and back: 14.0 years at home, 11.2 years for the traveller). The calcs entry `p8-lesson-example` was changed and `p8-lesson-home` added.
- Finding 2 (warning): the citation of the Euler–Lagrange equation in Problem 9(b) now reads "slide 3 (listed there, not written out; the form is the lesson's, applied to the sphere by us)".
- Finding 3 (warning): the third hint of Problem 1 now says "three laboratory lines (not necessarily next to each other in the table)".
- Finding 4 (warning): the hint of Problem 5(e) is now a pointer to the lessons and no longer names the answers.
- Finding 5 (warning): the second hint of Problem 11(c) now stops at the question "What is the invariant there?".
- Finding 6 (info): the statement of Problem 2 now adds that the crossings lie between 0.033 and 0.036 (calcs fact `p2-crossing-range`).
- Finding 10 (info): the points C (0.8, 0) and D (1.25, 0) are now marked on the graph of Problem 11, and the caption names them.
- Finding 11 (info): "How to answer" now says "0.5% to 2%".
- Note on p11-curve: `sqrt(1 + t^2)` is now a listed mistake with the hint to keep c.
- Findings 7, 8 and 9 (info) need no change. The units of T and T′ in the symbol list were left as they are.
- `status: reviewed`. `content:check` 0 errors, `calc:test -k 8-033-problem-set-4` and `test:answers` pass.
