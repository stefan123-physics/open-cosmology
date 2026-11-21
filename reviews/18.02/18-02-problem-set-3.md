---
page: content/year-1/18.02/18-02-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps3/ (read: pdftotext, plus page 2 rendered at 110 and 300 dpi to read the contour plot)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week4/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/partial_diff/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/part_diff_sol/ (text present, skimmed only)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/tangent_approx/ (read, section headings)
  - MIT's applet on math.mit.edu (not opened: outside OCW, as instructed)
verdict: needs-changes
---

# Review: Problem Set 3: a bird on a computer screen, a power of two variables and a contour plot

The section "Blind solve / My answers" at the end was written to this file before the full page and its calcs file were opened.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 3 intro ("with the same levels") and the contour `<Plot>` caption ("down to −2 at the two corners on the right") | MIT's plot (p. 2, read from a 300 dpi render) has three more curves above the curve labelled −2 at the top: the levels −2.2, −2.4 and −2.6. The lowest value of f on the square is −2.631 at (1.549, 2) (grid check, 2001 × 2001). | The plot stops at the level −2 (the `8.0*x` upper branch is the last curve), and the caption says the levels go "down to −2". So the plot does not have "the same levels" as MIT's, and the caption's claim is false. | Add three dashed upper branches with the same guard: `(5*x^4 - 16*x^3 + 12*x^2 + 8.8*x) >= 0 ? x/2 + sqrt(5*x^4 - 16*x^3 + 12*x^2 + 8.8*x)/(2*x) : NaN`, and the same with `9.6*x` and `10.4*x`. Caption: "…falling by 0.2 from each curve to the next, down to −2.6 near the middle of the top edge (the lowest value on the square is about −2.63, at (1.55, 2)). The level −2 passes through both right-hand corners." Add a calcs entry for the minimum. |
| 2 | warning | Frontmatter `covers: [5, 8, 9]` | Problem 1 is marked "immediately" on the sheet. Part (e) needs the equation of a plane from a normal found by a cross product, which is Lecture 4 (lec_week2 p. 2, "Equations of planes"). | Lecture 5 is listed and Lecture 4 is not, although the intro says "Problem 1 can be done with Lectures 4 and 5" and the Lecture 4 page `planes-and-linear-systems` is a prerequisite. | `covers: [4, 5, 8, 9]`, so the Lecture 4 lesson also gets the "Practise" link. |
| 3 | warning | Contour caption "f = 0.6 (the innermost closed curve)"; Problem 3(d) solution, step "The level curves" ("closed curves, one inside the other") | On MIT's plot the levels 0.6, 0.4 and 0.2 meet the bottom edge y = 0: they show as arches. | The level sets are closed in the plane, but their lower parts lie below y = 0 (lowest y −0.125 for 0.6, −0.61 for 0.4, −1.02 for 0.2, from the page's own parametrisation), so none of them is closed on the plotted square. A reader looking at the plot sees arches. | Caption: "f = 0.6 (the innermost arch around the hilltop; it closes just below the bottom edge)". Solution: "Around (0.485, 0.243) the level curves 0.2, 0.4 and 0.6 surround the point. They close just below the x-axis, outside the plot, and shrink onto the point as the level rises." |
| 4 | warning | Problem 1(e): statement ("Our reading … hides every line of sight that crosses the plane x = 1 at or below z = 1"); solution steps "Which side is hidden" (x + z < 2, then "at most 1 … exactly when x₀ + z₀ ≤ 2") and "The bird" (formula `0 \le t < \tfrac12`) | "What portion of the trajectory is hidden?" (no boundary convention) | By the page's own reading the bird at t = 1/2 (line of sight grazing the top) is hidden, so the hidden part is 0 ≤ t ≤ 1/2. The solution writes < in two places and ≤ in one. It is only an end point, but the page contradicts itself. | Either change the reading to "below z = 1" (then t < 1/2 is right; also change "x₀ + z₀ ≤ 2" to "< 2"), or keep the reading and write 0 ≤ t ≤ 1/2 and x + z ≤ 2. The box t = 0.5 is right either way. |
| 5 | info | Problem 3(c), caption of the second slider plot: "Every such slice is a parabola that opens downwards" | n/a | The slider allows x₀ = 0, where the slice f(0, y) = 0 is a horizontal line. The solution text correctly says "For x₀ > 0". | Set `min: 0.05` for x0 in both plots, or write "For x₀ > 0, every such slice…". |
| 6 | info | Intro paragraph on lecture numbering | The sheet marks Problems 2 and 3 for "Tuesday" (its Lecture 9, Sept 25, which is Lecture 8 here). | Problem 2 and 3(d) "need the first half of Lecture 9". This is correct by the lecture summaries (see Coverage), but differs from MIT's day tags without saying so. | Optional: "(MIT's sheet marks Problems 2 and 3 for the Tuesday lecture, but its summaries put the approximation formula in the next one)". |
| 7 | info | Part A table | "Hand in the underlined problems only; the others are for more practice." | All assigned exercises are listed, with no hand-in marking. The underlining was not checked on the render. | None needed. |
| 8 | info | `references.notesTA.location` "Sections 1 to 3" | "Read: … Notes TA" (the whole section, which has four numbered parts; the 4th is "Critique of the approximation formula") | Sections 1 to 3 | Optional: "Sections 1 to 4". |

## Arithmetic and answer checks
- calcs: `pytest tests/calc -k 18-02-problem-set-3` in the worktree: 135 passed.
- Every answer box agrees with my blind solve (comparison at the end).
- Tolerances: 1(c) z of Q0 0.667 ± 0.002 and 1(e) y 0.286 ± 0.002 accept three-decimal answers (2/3, 2/7) and reject two-decimal ones, as the questions ask. 2(a): approx 3.9477 ± 0.0002 and exact 3.9473 ± 0.0002 reject each other (they differ by 0.00045). 3(d) ± 0.01 accepts the two-decimal roundings 0.49, 0.24, 1.65, 0.82.
- Formula boxes: p1-a-y and p1-a-z over x0 in [−1.5, −0.2] are finite, and each mistake differs from the answer on that range. Each mistake hint is true: y0 (no perspective), 2y0/(2 + x0) (wrong distance), y0(2 − x0)/2 (inverted), y0/(2 − x0) (gives y0/2 at x0 = 0). p2-a-wx and p2-a-wy over x in [1.2, 1.6], y in [2, 2.5]: finite. Hints true: y·x^y at y = 1 gives x; x^(y−1) at y = 2 gives x; x^y·ln y differs because x ≠ y on the range. `ln` is accepted by lib/answers.ts (line 86).
- Choice boxes: 1(b) index 1; 2(b) index 1; 3(a) negative, negative, negative, zero; 3(d) "down in all four directions" and "up towards East and West, down towards North and South". All correct.
- Numbers in the solutions, recomputed: Q0 = (−2, 0.667), Q1 = (2, 3); the middle (−1.5, 0.5, 3.5) is drawn at (0.286, 2), 0.571 of the way in both coordinates; vanishing point (14, 10), also from the line through E parallel to the flight; t/(t + 3) = 1/4, 1/2, 3/4 at t = 1, 3, 9; fence top drawn at z = 2; 1/7 of the screen path hidden. Δw = −0.0523; 3.94773 against 3.94727; error 0.00046, which is 0.86% of the change 0.0527 ("about 1%"); difference quotients 4.001 and 2.774; 2.01² = 4.0401, 2^2.01 = 4.0278, ratio 1.44; at (4, 2) w_x = 8, w_y = 22.2. f(1, 1.5) = −0.75; the level spacing at x = 1 between −0.6 and −0.8 is 0.103 ("about 0.1"). Critical points (0.4855, 0.2427), f = 0.657, and (1.6479, 0.8239), f = −0.325; g'' = −4.60 and 3.53; steps of 0.1: −0.005, −0.005, −0.022, −0.024 and −0.016, −0.016, +0.019, +0.017. Third solution (0, √3) on the edge, itself a saddle (Hessian determinant −12).
- Contour plot formulas: the level L is y = x/2 ± sqrt(5x⁴ − 16x³ + 12x² − 4Lx)/(2x) (f = L solved as a quadratic in y). The coefficients −2.4x, −1.6x, −0.8x for 0.6, 0.4, 0.2 and +0.8x … +8.0x for −0.2 … −2 are right. The parametrisations x = c − r cos s of the three positive levels span exactly the roots of 5x³ − 16x² + 12x − 4L (0.3309 to 0.6553; 0.1697 to 0.8749; 0.0737 to 1.0397), and level 0 spans x from 0 to 1.2. The labels are on their curves: f(0.4855, 0.5845) = 0.600 and f(1.2, 0.6) = 0. The level −0.2 has two pieces (x ≤ 1.388 and x ≥ 1.873), and each lower level has an upper and a lower-right piece, as the caption says. The missing levels below −2 are finding 1.
- Every solution ends with a check step. No hint gives a final result away (1(e) hint 1 is at the level of MIT's own hint).

## Coverage and order
- Part B: Problems 1 (a to e), 2 (a, b) and 3 (a to d) in MIT's order, with MIT's points: 8 (2+1+1+2+2), 4 (3+1), 7 (2+2+0+3). Same mathematics, in the page's own wording.
- 3(c): MIT's applet is replaced by two slider plots computed from f (slices with tangent lines). The applet is neither used nor linked. A fair replacement; the part keeps 0 points.
- 3(d): "inside the plot" is added, which is justified because the third solution (0, √3) is on the edge, and the page says so. The coordinate boxes are marked as the page's addition.
- Part A: the list matches the sheet exactly (2A/1abcde, 2abcde, 3abc, 5ab; 2B/1ab, 3, 6, 9). In the Notes, 2A is "Functions and Partial Derivatives" and 2B "Tangent Plane; Linear Approximation", so the split over Lectures 8 and 9 is right, and 2B-9(a) is indeed the sensitivity question for w = x²(y + 1). The textbook items (13.2/7, 15, 53–58; 13.4/57) are left out by design, as the page says.
- Lecture mapping verified: _course.json has 7 Exam Review, 8 Partial Derivatives, 9 Max-Min and Least Squares. lec_week4 p. 1: "Lecture 8, Tue Sept 25" (functions of several variables, contour plots, partial derivatives) and "Lecture 9, Thu Sept 27", which starts with "Linear approximation formula" and then min/max problems and critical points. The sheet's "Lecture 9, Tue Sept 25" is Lecture 8 here. The claim that the tangent plane approximation is in the next lecture's summary is correct.
- Citations: `at="… p. 1"` for Problems 1 and 2 and `p. 2` for Problem 3 match the printed pages of the sheet. reading2 "Lecture 9, p. 1" for Δw ≈ w_x Δx + w_y Δy matches lec_week4 printed p. 1. The location of reading1, "Lectures 4 and 5, pp. 2–3", matches lec_week2 (Lecture 4 starts on p. 2, Lecture 5 on p. 3).

## Licensing
- No MIT figure is redrawn: the contour plot is generated from MIT's formula (the levels are data). No "rights reserved" or "courtesy" notice in any downloaded text. The applet (math.mit.edu, outside OCW) is not used. The Notes exercises are linked, not copied. No OpenStax or LibreTexts. Wording checked against the sheet: rewritten, no copied sentences.

## Notes
- `npm run content:check` was not run by this review (symbols and label placement not verified here); a search found no em dash in the page.
- Only two contour labels (0.6 and 0) are drawn and the caption describes the rest. Acceptable, but a label on the −2 curve would help readers match MIT's plot.

## Blind solve

### My answers (written before opening the full page)
- 1(a): line E + s(P − E) meets x = 0 at s = 2/(2 − x0): y = 2 y0/(2 − x0), z = 2 z0/(2 − x0). x0 < 2: points at or behind the eye (x0 ≥ 2) are not in front of the viewer; x0 = 2 gives no intersection.
- 1(b): a line segment (a point if the segment lies on a line through E): the lines of sight fill part of the plane through E and the segment, which meets the screen in a line.
- 1(c): Q0 = (−2, 2/3) = (−2, 0.667), Q1 = (2, 3); the segment Q0Q1.
- 1(d): P(t) = (−1 − t, −3 + 7t, 1 + 5t); screen y = 2(7t − 3)/(t + 3), z = 2(5t + 1)/(t + 3); a half-open segment on the line through Q0 and Q1 (direction (12, 7)), from Q0 towards the vanishing point (14, 10), never reached.
- 1(e): plane through E and the fence top: x + z = 2; hidden if x + z ≤ 2 (and x < 1, always true here). Bird: x + z = 4t, hidden for 0 ≤ t ≤ 1/2; appears at t = 1/2 at P = (−1.5, 0.5, 3.5), screen (2/7, 2) = (0.286, 2). The fence top is drawn at z = 2.
- 2(a): Δw ≈ y x^(y−1) Δx + x^y ln x Δy; at (2, 2): 4 Δx + 4 ln 2 Δy; Δx = −0.02, Δy = 0.01 gives Δw ≈ −0.05227, approximation 3.9477; exact 1.98^2.01 = 3.94727 (error about 4.5e−4).
- 2(b): w_x = 4 > w_y = 4 ln 2 = 2.77: more sensitive to the base x.
- 3(a): (1, 1.5): f_x < 0, f_y < 0. (1.2, 0.6): f_x < 0, f_y = 0 (the point lies on level 0, f(1.2, 0.6) = 0 exactly).
- 3(b): f_x = 3x² − y² − 8x + 3 + 2xy, f_y = x² − 2xy. (1, 1.5): f_x = −1.25, f_y = −2. (1.2, 0.6): f_x = −1.2, f_y = 0.
- 3(c): no points, exploration.
- 3(d): f_y = 0 gives x = 0 or y = x/2; with y = x/2, 15x² − 32x + 12 = 0, x = (16 ± 2√19)/15. Points (0.49, 0.24) [0.4855, 0.2427]: local maximum, f = 0.657 (level curves close around it, shrinking to the point); N, S, E, W all go down. (1.65, 0.82) [1.6479, 0.8239]: saddle, f = −0.325 (the level curve through it crosses itself); E and W up (f_xx = 3.54 > 0), N and S down (f_yy = −3.30 < 0). Third solution (0, √3) = (0, 1.732) lies on the edge x = 0, not inside.

### Comparison with the page (one line per answer id)
- p1-a-y: page 2*y0/(2 - x0), mine the same. Agree.
- p1-a-z: page 2*z0/(2 - x0), mine the same. Agree.
- p1-b: page choice 1 (a segment, or a point on a line through the eye), mine the same. Agree.
- p1-c-y0 −2, p1-c-z0 0.667, p1-c-y1 2, p1-c-z1 3: mine the same. Agree.
- p1-d-y 14, p1-d-z 10: mine the same. Agree.
- p1-e-t 0.5, p1-e-y 0.286, p1-e-z 2: mine the same. Agree (end-point convention: finding 4).
- p2-a-wx y*x^(y-1), p2-a-wy x^y*log(x): mine the same. Agree.
- p2-a-approx 3.9477, p2-a-exact 3.9473: mine 3.947726 and 3.947272. Agree.
- p2-b choice 1 (the base x): mine the same. Agree.
- p3-a-fx1 negative, p3-a-fy1 negative, p3-a-fx2 negative, p3-a-fy2 zero: mine the same. Agree.
- p3-b-fx1 −1.25, p3-b-fy1 −2, p3-b-fx2 −1.2, p3-b-fy2 0: mine the same. Agree.
- p3-d-x1 0.485, p3-d-y1 0.243, p3-d-x2 1.648, p3-d-y2 0.824: mine 0.48548, 0.24274, 1.64785, 0.82393. Agree.
- p3-d-move1 "down in all four directions", p3-d-move2 "up towards East and West, down towards North and South": mine the same. Agree.

COUNTS: errors=1 warnings=3 info=4

## Resolution (2026-11-21, by the page author)

All findings with a suggested fix were taken.

1. (error) The contour plot now has the three missing levels −2.2, −2.4 and −2.6 as dashed upper branches with the same guard (`8.8*x`, `9.6*x`, `10.4*x`), so it has MIT's levels: 26 curves. The caption no longer says the levels go "down to −2": it says they fall to −2.6 near the middle of the top edge, that the lowest value on the square is about −2.63 at (1.55, 2), and that the level −2 passes through both corners on the right. It also says which levels show in the upper part only. Two calcs entries were added (`plot-minimum-x`, `plot-minimum`), and the entries for the two corners now quote the new sentence. A grid search of our own (2001 × 2001) gives the same minimum, −2.631 at (1.549, 2). The label layout check of `content:check` still passes.
2. (warning) `covers: [4, 5, 8, 9]`.
3. (warning) Caption: "f = 0.6 (the innermost arch around the hilltop; it closes just below the bottom edge)". Problem 3(d), step "The level curves": the levels 0.2, 0.4 and 0.6 "surround the point, one inside the other. They close just below the x-axis, outside the plot". The first hint of 3(d) says "surround" in place of "close around".
4. (warning) Problem 1(e) keeps the reading of the statement (a line of sight that crosses x = 1 at or below z = 1 is hidden) and uses ≤ throughout: hidden on or below the plane, x + z ≤ 2; hidden while 4t ≤ 2; the formula is 0 ≤ t ≤ 1/2; t = 1/2 is called the last moment at which the bird is hidden; the check with the picture of the fence uses ≤ as well. The box (t = 0.5) is unchanged.
5. (info) The slider for x₀ in both slice plots now starts at 0.05, so every slice in the y-direction that can be shown is a parabola.
6. (info) The intro has the bracketed remark that MIT's sheet marks Problems 2 and 3 for the Tuesday lecture, while its summaries put the approximation formula in the next one.
7. (info) No change: the list of Part A exercises has no hand-in marking, as in Set 1.
8. (info) `references.notesTA.location` is "Sections 1 to 4" (the Notes have four numbered parts; the fourth is "Critique of the approximation formula").

Not taken: a label on the −2 curve (Notes). A third label failed the label layout check for a 320 px phone at the largest text size when the page was written, so the caption describes the levels.

Checks after the changes: `content:check` 0 errors, `calc:test -k 18-02-problem-set-3` 137 passed, `test:answers` 65 passed. `status: reviewed`.
