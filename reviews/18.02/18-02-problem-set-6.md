---
page: content/year-1/18.02/18-02-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps6/ (read: PDF text and both pages rendered as images)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week6/ (read: all 3 PDF pages rendered as images)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/non_ind_variable/ (read: text, printed page numbers checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/part_diff_eqn/ (read: text, notice check only)
  - Problems / solutions section 2 (partial_diff, part_diff_sol): links only, contents not reviewed (the page only lists exercise numbers, which were checked against MIT's sheet)
verdict: pass
---

# Review: Problem Set 6: derivatives when the variables are tied together

## Blind solve

My answers (written to this file before the full page or calcs file was opened):

- p1 (a): (i) (∂w/∂x)_x makes no sense (x cannot change while held fixed). (ii) (∂w/∂x)_y makes no sense: with g_x ≠ 0, holding y fixed in g(x, y) = c fixes x too, so x cannot vary. (iii) (∂w/∂x)_z makes sense: x and z independent, y = y(x) from the constraint.
- p1 (b): (∂w/∂x)_z = f_x − f_y g_x / g_y (from dy = −(g_x/g_y) dx, dz = 0).
- p2 (a): dt = cos(x+y)(dx + dy); dx = 0 gives dy = dt / cos(x+y). dw = 3x²yt dx + x³t dy + x³y dt, so (∂w/∂t)_x = x³y + x³ t / cos(x+y) = x³y + x³ tan(x+y).
- p2 (b): at (1,1,2): 5dx + 2dy + dz = 0 and 5dx + 6dy + 5dz = 0, so −20dx − 4dy = 0 and dx/dy = −1/5 = −0.2. (Point checks: 1 + 2 = 3, 1 + 4 + 2 = 7.)

Comparison with the page:

- p1-a-i: page answer index 2 ("no sense: x changes while x is held fixed") = mine. Agree.
- p1-a-ii: page answer index 2 ("no sense: with y held fixed, the relation holds x fixed too") = mine. Agree.
- p1-a-iii: page answer index 0 ("makes sense: x changes, z fixed, y follows the relation") = mine. Agree.
- p1-b: page `fx - fy*gx/gy` = mine (identical form). Agree.
- p2-a: page `x^3*y + x^3*tan(x + y)` = mine (identical form); also checked numerically against the derivative by substitution w = x³t(arcsin t − x) at x = 0.5, y = 0.3: 0.1662048 both. Agree.
- p2-b: page −0.2 = mine. Agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1, split into (a) 2 pts and (b) 2 pts | 4 points, no split | Split and the choice boxes, declared as "ours" in "How to answer" | None; the split is stated and the 4 points total is MIT's. |
| 2 | info | Problem 1, "Our addition: assume g_x, g_y ≠ 0"; Problem 2(a) "stay where cos(x+y) ≠ 0" | No such assumptions | Both marked as "Our addition" | None; they make the answers definite and are honestly flagged. |
| 3 | info | Problem 1(b) check, lecture-summary formula and bracketed slip note | Week 6 summary, printed p. 2 (Lecture 15): "df = −f_x g_z/g_x dz + g_z dz, so (∂f/∂z)_y = −f_x g_z/g_x + g_z" (verified on the rendered page) | Prints "+ f_z" and notes "(The summary prints g_z for the last term. That is a slip…)" | None; the slip is real (it appears in both the df line and the result), the page correctly avoids repeating it (Writing rule 4). Optionally say "prints g_z dz and g_z" since the df line has it too. |

## Arithmetic and answer checks
- Problem 1(b): derivation dw = f_x dx + f_y dy + f_z dz, dz = 0, dy = −(g_x/g_y)dx: correct. Chain-rule route correct. Test with g = x²y, f = xy² + xz: f_x = y² + z, f_y = 2xy, g_x = 2xy, g_y = x², formula gives z − 3y²; direct y = c/x², w = c²/x³ + xz, derivative −3c²/x⁴ + z = z − 3y². Correct.
- Problem 2(a): every step correct; arcsin substitution valid for |x + y| < π/2, as stated; tan 1 = 1.5574, page 1.557. Correct.
- Problem 2(b): differentials (5x⁴, z, y) and (y² + 2xz, 2xy + z², 2yz + x²) correct; at the point (5, 2, 1) and (5, 6, 5); elimination −20dx − 4dy = 0; dz/dy = −1. Step test: 0.998⁵ + 1.01·1.99 = 2.999940, second equation 6.999809; misses 6e-5 and 1.9e-4, "within 0.0002" correct. Cross product ⟨5,2,1⟩ × ⟨5,6,5⟩ = ⟨4, −20, 20⟩ correct; ratios −0.2 and −1. Correct.
- Answer boxes: p1-b vars (fx, fy, fz, gx ∈ [1,2], gy ∈ [3,4]) keep the formula finite. Each of the 7 listed mistakes differs from the answer by at least 18% (relative) at every one of 2000 random points in that box; each mistake hint describes its formula correctly.
- p2-a vars x ∈ [0.4, 0.8], y ∈ [0.2, 0.6]: x + y ∈ [0.6, 1.4], cos > 0, finite. Mistakes: all hints true of their formulas. The mistake `x^3*y + x^3/cos(x + y)` comes within 1.3% of the answer near the corner x + y = 1.4 (tan → 1/cos), but differs by far more elsewhere, so a multi-point comparison separates them (info only).
- p2-b: value −0.2, tolerance 0.002: accepts −0.200, rejects e.g. −5, 0.2, −0.25.
- Hints: no hint states a result. p1 (a) hint 2 ("what does it say about dx when dy = 0?") leads strongly to the verdict on (ii) but still requires the reader to draw it; acceptable for a last hint.
- Calcs file: entries cover every number and the three answer boxes, by independent routes (numerical derivatives after substitution). Consistent with the page.
- Choice reasoning for (ii): the page's main reason (dy = 0 forces dx = 0 since g_x ≠ 0) is correct; the second reason (z is not determined by x and y, so with x, y as the "free pair" nothing says what z does) is also sound. The geometric "wall above the curve" check is correct.

## Coverage and order
- Part B: both problems, in MIT's order, parts (a), (b) of Problem 2 in order with MIT's 2 + 2 points; statements faithful to the rendered sheet (same functions, point (1, 1, 2), "method of total differentials").
- Part A: the exercise list matches MIT's sheet exactly (2J/1, 2, 3ab, 4ab, 5a, 6, 7; 2K/1, 2, 3, 4, 5). Part A's 8 points stated correctly.
- Lecture mapping verified: MIT sheet Lecture 15 (Thu Oct 11, non-independent variables) = Auroux summary "18.02 Lecture 14" = site `_course.json` lecture 14 (`non-independent-variables.mdx`, lecture: 14). MIT sheet Lecture 16 (PDEs, review) = summary Lecture 15 = site lecture 15 "Partial Differential Equations", which has no page (no .mdx with lecture: 15), as the page says. MIT Lecture 17 = Exam 2: correct. The explanation that the sheet counts the exam day as a lecture is confirmed by Problem Set 3's sheet ("Lecture 8. Fri Sept. 21 EXAM 1").
- `covers: [14]` is right: both Part B problems are "Thursday" problems (the non-independent-variables lecture), and site lecture 15 has no lesson to link a "Practise" bar to.
- Notes N "pp. 0–5": matches MIT's sheet ("Read: Notes N (pp. 0–5)"); the Notes N PDF has an unnumbered first text page (page 0) followed by printed pages 1, 3, 5 … so the range is meaningful.
- Citations: reading1 "Lecture 14, p. 1" (g_x dx + g_y dy + g_z dz = 0) and "Lecture 15, p. 2" (df = f_x dx + f_y dy + f_z dz and the (∂f/∂z)_y result) match the printed page numbers of the summary. MIT sheet citations "p. 1" match the printed footer.

## Licensing
- MIT's Problem Set 6, the Week 6 summary, Notes N and Notes P carry no "All rights reserved" or "Courtesy of" notices (grep and visual check). No figures are reused or redrawn; the page has no figures.
- Wording is the page's own; only the mathematical statements (functions, point) are MIT's, as they must be. No OpenStax or LibreTexts material. No em dashes; no `## Summary` section.

## Notes
- All six answer ids agree with the blind solve; no disagreement to resolve.
- The gradient link in Problem 2(b)'s second check goes to an existing page (`gradient.mdx`).
- Symbols were not checked against `data/symbols.json` (content:check enforces this).

COUNTS: errors=0 warnings=0 info=3

## Resolution (2026-11-21, by the page author)

No errors or warnings; the info items need no change. Status set to `reviewed`.
