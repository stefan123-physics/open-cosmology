---
page: content/year-1/18.02/18-02-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps1/ (read: PDF text and page images of all 4 printed pages)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week1/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vectors_matrices/ (read; section 1 exercise numbers checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vectr_mtrics_sol/ (available locally; not needed, Part A is only listed)
verdict: pass-with-notes
---

# Review: Problem Set 1: a tetrahedron in a cube, altitudes, rotations and a matrix of pastries

Order followed: the stripped statements and MIT's sheet were read and every problem was solved first. The "My answers" list below was written to this file before the full page and the calcs file were opened. Then the page, its calcs file, the lecture summaries and the Notes were compared.

## Blind solve

### My answers (written before opening the full page)
- p1a: other vertices (1,-1,-1), (-1,1,-1), (-1,-1,1); edge 2*sqrt(2) = 2.828 (each edge is a face diagonal of the cube)
- p1b: arccos(-1/3) = 109.47 deg -> 109.5
- p1c: adjacent edges 60 deg (cos = 1/2); opposite edges 90 deg (dot = 0)
- p1d: 2*sqrt(3) = 3.464
- p2a: v1 . (v2 - v3) = 0, i.e. v1.v2 = v1.v3 (since v2 - v3 = P3 - P2)
- p2b: altitude from P2: v2.(v1 - v3) = 0; combine with (a)
- p2c: v3.(v1 - v2) = v1.v3 - v2.v3 = 0 from (b)
- p3: outward normals 1/2 B x A, 1/2 C x B, 1/2 A x C, 1/2 (B-A)x(C-A) (orientation with A,B,C right-handed); the last = 1/2 (A x B + B x C + C x A), sum zero
- p4a: u = (cos t, sin t), v = (-sin t, cos t); at pi/4 u = (0.7071, 0.7071), v = (-0.7071, 0.7071)
- p4c: A^-1 = [[cos, sin], [-sin, cos]] = A^T = A_{-t}
- p4d: a22 = -a11 a21/a12; matrices [[-,+],[+,+]] det -1; [[-,-],[+,-]] det +1 (135 deg); [[-,+],[-,-]] det +1 (225 deg); [[-,-],[-,+]] det -1 (all /sqrt2); a22 = +-0.7071
- p4e: rotations 135 deg and 225 deg; det -1 = mirrored F
- p5a: grams of flour, sugar, egg, butter in the assortment
- p5b: N M X; NM = [[2.85,5.82,5.65],[34.77,40.54,41.05],[8.92,10,19.04]]; protein for (1,1,1) = 14.32 g
- p5c: A = (NM)^-1; first row -0.46898, 0.070484, -0.012796; det(NM) = -770.567
- p5d: X = (-3.136, 10.990, -0.889) -> -3.14, 10.99, -0.89; negative numbers of pastries are impossible

### Comparison (one line per answer id)
- p1-a-vertices: page choice 1 = (1,−1,−1), (−1,1,−1), (−1,−1,1); mine the same. Agree.
- p1-a-edge: page 2.828 (tol 0.002); mine 2√2 = 2.8284. Agree. Rejects 2 (cube edge) and 3.464 (space diagonal).
- p1-b: page 109.5 (tol 0.05); mine 109.47. Agree; 70.5 (sign slip) rejected.
- p1-c-adjacent: page 60; mine 60. Agree.
- p1-c-opposite: page 90; mine 90. Agree.
- p1-d: page 3.464 (tol 0.002); mine 2√3 = 3.4641. Agree; 6.928 (whole parallelogram) rejected.
- p2-a: page choice 2, v₁·(v₂ − v₃) = 0; mine the same. Agree.
- p2-b, p2-c, p3: no boxes; the page's proofs agree with mine step by step (p3 orientation argument with A·(B×C) > 0 checked face by face).
- p4-a: page −sin(theta); mine −sin θ. Agree. Mistakes sin, cos, −cos all differ from the answer on [0.1, 0.6], and each hint is true of its formula.
- p4-c: page sin(theta); mine sin θ (top right of [[cos, sin], [−sin, cos]]). Agree. Mistake hints true.
- p4-d-plus: page 0.7071 (a12 > 0, a21 > 0, matrix Q3); mine +1/√2. Agree.
- p4-d-minus: page −0.7071 (a12 > 0, a21 < 0, matrix Q2); mine −1/√2. Agree.
- p4-e-angle-up: page 135; mine 135 (matrix [[−,−],[+,−]]/√2). Agree.
- p4-e-angle-down: page 225; mine 225. Agree.
- p4-e-mirror: page choice 1 (mirror image); mine the same. Agree.
- p5-a: page choice 2 (grams of flour, sugar, egg, butter); mine the same. Agree.
- p5-b: page choice 1, N M X; mine NMX. Agree.
- p5-b-protein: page 14.32; mine 14.32. Agree.
- p5-c-formula: page choice 3, (NM)⁻¹; mine the same. Agree.
- p5-c-a11, a12, a13: page −0.4690, 0.07048, −0.01280 (tol 1%); mine −0.46898, 0.070484, −0.012796 (numpy inverse). Agree.
- p5-d-x1, x2, x3: page −3.136 (tol 0.03), 10.99 (tol 0.1), −0.889 (tol 0.01); mine −3.1355, 10.9895, −0.8890. Agree. With 4-significant-digit entries of A the answers −3.14, 10.99, −0.89 are all accepted; with 3-digit entries x3 = −0.87 is rejected, which the statement warns about.

No disagreements, so no calculation was needed to settle one.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1(a), second hint | (no hint) | "A corner at the other end of a face diagonal differs from (1, 1, 1) in exactly two coordinates." | Acceptable as a last hint (the reader still lists the corners and finds the edge), but close to the answer; it could stop after "try the diagonals of the faces of the cube". |
| 2 | info | Problem 4(d), statement | "Find the four orthogonal 2 × 2 matrices with first entry a11 = −1/√2. Hint: try different signs." | Adds "The four matrices differ in the signs of a12 and a21." | Needed to label the boxes; fine. Could be marked "(our addition)" like the boxes of 4(e). |
| 3 | info | Last section, Part A list | Underlined problems are handed in, the others are practice | Lists all exercises without the hand-in marks | Fine, since Part A is not scored here. Optionally note that 1F-10 and 1G-9 (named in Problem 4) are starred in the Notes, so MIT gives no solutions for them. |

No errors or warnings. Every problem statement matches MIT's mathematics, data (matrices M and N checked against the rendered image of printed p. 3), order of parts and point split (5 = 2+1+1+1, 3 = 1+1+1, 3, 9 = 1+2+2+2+2, 7 = 1+2+2+2; total 27; Part A 15), in the page's own wording.

## Arithmetic and answer checks
- `calc:test -k 18-02-problem-set-1` in the worktree: 152 passed. `content:check`: 0 errors; the only warning for this page is the missing review file.
- Recomputed by hand or numpy: every edge 2√2; bond angle arccos(−1/3) = 109.47°; adjacent 60°, opposite 90°; cross product ⟨4, 4, −4⟩, area 2√3 = 3.464; Problem 2 example P = (1, 1) for P1 (0,0), P2 (4,0), P3 (1,3) and the three dot products −2; Problem 3 example vectors ⟨0,0,−1⟩, ⟨−3,0,0⟩, ⟨0,−1.5,0⟩, ⟨3,1.5,1⟩ and area 3.5; the four matrices Q1 to Q4 and their determinants +1, +1, −1, −1; the F descriptions (stem = second column, arms = first column) for all four; Q3 is the reflection in the line at 67.5° (cos 2φ = −1/√2, sin 2φ = 1/√2); Q1Q2 = I; NM, its minors 361.3816, 295.8548, −13.9168, det −770.567, all nine entries of A, the check −0.4690·14.32 + 0.07048·116.36 − 0.01280·37.96 = 1.00; X = (−3.136, 10.99, −0.889) and the back-substitution 50.0 and 65.0; ratios 0.217, 0.257, 0.247, 0.464. All correct.
- The "why it had to fail" argument in 5(d) (every pastry's fat/carbohydrate ratio exceeds the guideline's, so every non-negative mixture does too) is correct.
- Every solution ends with a check (units, a limit, a special case or a number).
- Formula boxes: vars θ in [0.1, 0.6] keep everything finite; each listed mistake differs from the answer there.
- Number boxes: tolerances accept 3-significant-figure answers (or the precision the statement asks for) and reject the obvious wrong values listed above.

## Coverage and order
- Part B Problems 1 to 5 all present, in MIT's order, with all parts in MIT's order. The day labels (Thursday/Friday/Tuesday) are correctly translated to Lectures 1, 2, 3, which are this site's lessons dot-product (lecture 1), determinants-and-cross-product (2) and matrices (3).
- Part A list checked against the rendered printed p. 1 of MIT's sheet: recitation 1A/1, 5, 6, 7, 8, 9, 11; Lecture 1 1B/1, 2, 5ab, 11, 12, 13, 14; Lecture 2 1C/1, 2, 3, 5a, 6, 7 and 1D/1, 2, 3, 4, 5, 7; Lecture 3 1F/5ab, 8a, 9 and 1G/3, 4, 5. Identical. Textbook items (12.1/17, 23, 45 and readings) left out by design, and the page says so.
- Citations: `at=` pages match the printed pages of MIT's PDF (2(b) and the AAᵀ = I definition on p. 2; 4(a), 4(b), M, X, N on p. 3; the diet numbers on p. 4). reading1 "Lecture 1, p. 1" (A·B = |A||B| cos θ) and "Lecture 2, p. 2" (|A × B| = area of the space parallelogram) are on those printed pages of lec_week1. Claims about the lessons (products read right to left, R² = −I, cofactor method, sign of the 2 × 2 determinant and orientation, A × B = −B × A) are all in lec_week1/lec_week2 and in the site's lessons.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in MIT's sheet or the Notes files. No figures reproduced (the F drawing is left to the reader). MIT's matrices and numbers are data, cited. Statements are rewritten, not copied; no OpenStax or LibreTexts material. The textbook (Edwards and Penney) is excluded.

## Notes
- No `## Summary` with answers, no em dashes (grep found none).
- Problem 3's solution says honestly that the cyclic property of the triple product and the distributive law of the cross product are not stated in the lesson, and justifies each in one line; fine.
- Status should stay `draft` until this review is filed in `reviews/18.02/`.

COUNTS: errors=0 warnings=0 info=3

## Resolution (2026-11-21, by the page author)

No errors or warnings. Of the info items:
1. Fixed: the second hint of Problem 1(a) now ends after "try the diagonals of the faces of the cube".
2. Fixed: the sentence about the signs of a12 and a21 in Problem 4(d) is marked as our addition.
3. Left as it is: Part A is not scored, and the list only links to MIT's exercises.

Status set to `reviewed`.
