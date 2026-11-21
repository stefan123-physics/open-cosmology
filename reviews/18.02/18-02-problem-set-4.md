---
page: content/year-1/18.02/18-02-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps4/ (read: PDF text plus rendered page images; printed pages 1-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week4/ (read, PDF with per-page footers)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week5/ (read, PDF with per-page footers)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/least_sq_intrpol/ (read, PDF text and rendered p. 2)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/2nd_derivative/ (present in the writer's downloads; cited only as "the whole note", not checked line by line)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/partial_diff/ (read, text: star markings of 2C, 2E, 2F, 2G, 2H)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/part_diff_sol/ (read, text: which assigned exercises are solved)
  - MIT 18.02 Problem Set 3 sheet (read, to confirm the calendar numbering: "Lecture 8. Fri Sept. 21 EXAM 1")
verdict: pass-with-notes
---

# Review: Problem Set 4: iPod sales by least squares, the largest triangle in a circle and polar derivatives

## Blind solve

### My answers (written to this file before opening the full page)
- 1(a): A = [x*x' x*u'; x*u' u*u'] (u*u' = n), r = [x*y'; u*y'].
- 1(c): a = 7.1463, b = -12.9851 (agrees with polyfit); errors y - (ax+b) = 5.9638, -0.8375, -7.0028, -7.3371, 9.2136; largest |error| = 9.21 million (2005).
- 1(d): a1 = 1.395466, b1 = -3.563587; errors 0.0106, 0.0082, -0.4132, 0.7376, 1.5812; largest |error| = 1.58 million (2005).
- 1(f): 2006: e^(b1+6a1) = 122.63 million, about 123 million; 2015: e^(b1+15a1) = 3.4914e7 million = 34,914 billion (about 3.5e13, roughly 5,300 per person of 6.6 billion). With a1, b1 rounded to 3 decimals: 122.24 million and 34,657 billion (0.74% low).
- 2(a): A = (1/2)[sin t1 + sin(t2 - t1) - sin t2]; region 0 <= t1 <= t2 <= 2pi (interior 0 < t1 < t2 < 2pi for a real triangle).
- 2(b): one interior critical point, t1 = 2pi/3 = 2.094, t2 = 4pi/3 = 4.189 (cos t1 = cos(t2-t1) = cos t2; the other root cos t1 = 1 lies on the boundary).
- 2(c): max A = 3 sqrt(3)/4 = 1.299 (equilateral); min A = 0 on the whole boundary (t1 = 0, t1 = t2, t2 = 2pi: degenerate triangles, two vertices coincide).
- 2(d): A11 = -sqrt(3)/2 = -0.866, A12 = sqrt(3)/4 = 0.433, A22 = -sqrt(3)/2 = -0.866; D = 9/16 = 0.5625 > 0 with A11 < 0: local maximum.
- 3(a): A = [[cos t, sin t], [-r sin t, r cos t]]; bottom left -r sin(theta).
- 3(b): B = [[x/sqrt(x^2+y^2), -y/(x^2+y^2)], [y/sqrt(x^2+y^2), x/(x^2+y^2)]]; top right -y/(x^2+y^2).
- 3(c): in polar B = [[cos, -sin/r], [sin, cos/r]], AB = I.
- 3(d): at (x, y) = (0, 5): w_x = -2, w_y = 2 (check: w_r = w_y = 2, w_theta = -5 w_x = 10).

### Comparison with the page (one line per answer id)
- p1-a (choice 2: A = [x*x' x*u'; x*u' u*u'], r = [x*y'; u*y']): agrees. The three wrong choices are really wrong (columns swapped, rows of r swapped, x'*x is n x n).
- p1-c-a 7.146 (tol 0.005): agrees (7.1463).
- p1-c-b -12.985 (tol 0.01): agrees (-12.9851).
- p1-c-worst 9.21 (tol 0.02): agrees (9.2136).
- p1-d-a1 1.395 (tol 0.002): agrees (1.39547).
- p1-d-b1 -3.564 (tol 0.003): agrees (-3.56359).
- p1-d-worst 1.58 (tol 0.02): agrees (1.5812).
- p1-f-2006 122.6 (tol 1): agrees (122.63; 3-decimal coefficients give 122.24, accepted; "nearest million" 123 accepted).
- p1-f-2015 34900 billion (tol 2%): agrees (34,914; 3-decimal coefficients give 34,657, -0.7%, accepted; answers in trillions or millions rejected).
- p2-a (sin(t1) + sin(t2 - t1) - sin(t2))/2: agrees (identical).
- p2-a-region (choice 3: 0 < t1 < t2 < 2pi): agrees.
- p2-b-t1 2.094, p2-b-t2 4.189 (tol 0.002): agree.
- p2-c-max 1.299 (tol 0.001): agrees (1.29904).
- p2-c-min (choice 1: A gets as close to 0 as you like near the boundary, 0 not reached by a real triangle): agrees with my answer (0 only on the boundary, degenerate triangles).
- p2-d-a11 -0.866: agrees. p2-d-test 0.5625 (tol 0.001): agrees. p2-d-type (local maximum): agrees.
- p3-a -r*sin(theta): agrees. p3-b -y/(x^2 + y^2): agrees.
- p3-d-wx -2, p3-d-wy 2: agree.
- No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "More practice", paragraph after the table | MIT assigns 2E/8ab. In the Notes, 2E-8 b) is starred ("b)* Let w = f(x^2 - y^2); show that w satisfies the PDE ..."), and MIT's Solutions work only 2E-8 a). | Only 2G-1a, b are named as starred, so a reader expects an MIT solution for every other listed item, including 2E-8b. | Add: "Part b of exercise 2E-8 is starred as well, so MIT's solutions work only its part a." |
| 2 | info | "More practice", last paragraph | The last printed page, "Matlab Directions", covers starting MATLAB on MIT Server and then entering matrices, array operations, the colon operator and 2D plotting. | "a page of directions for starting MATLAB on MIT's own computers in 2007" | Optional: "a page of MATLAB directions (starting it on MIT's computers in 2007, and its basic matrix and plotting commands)". |
| 3 | info | Problem 2(a), 2(c) | MIT does not say whether the region is open or closed. | Open region 0 < t1 < t2 < 2pi; the minimum is an infimum 0 not reached by a real triangle; the closed region with A = 0 on the boundary is also worked out. | None needed: both readings are covered, and the max argument (continuous on the closed triangle, A = 0 on the boundary, one interior critical point) is correct. |
| 4 | info | Problem 1(e) | "the curve (x, e^b1 e^a1x), connected by an ordinary line" | Smooth solid curve, difference stated openly. | None. |
| 5 | info | "More practice", last paragraph | The sheet gives section numbers (13.5, 13.6, 13.7, 13.8, 13.10) and exercise 13.10/32 but does not name the book. | "Edwards and Penney, Multivariable Calculus, 6th edition" | Uncertain: not verified in this review (I believe it matches the course's OCW syllabus). |

## Arithmetic and answer checks
- Every number on the page recomputed with NumPy/SciPy (own script, not the calcs file): sums 15, 55, 42.269, 198.27; determinant 50; 10a = 71.463; a = 7.1463, b = -12.9851; line values -5.8388, 1.3075, 8.4538, 15.6001, 22.7464; errors 5.9638, -0.8375, -7.0028, -7.3371, 9.2136 (sum 0); ln y_i -2.0794, -0.7550, 0.3723, 2.1118, 3.4645, sum 3.1141, sum x ln y 23.2968, 10 a1 = 13.9547; a1 = 1.39547, b1 = -3.56359; law values 0.114, 0.462, 1.864, 7.525, 30.379; errors 0.011, 0.008, -0.413, 0.738, 1.581; e^b1 = 0.02834, e^a1 = 4.037; year ratios 3.76, 3.09, 5.69, 3.87; zero of the line 1.817 (page 1.82); line and curve cross at 1.871 and 4.729 (page "near 1.9 and 4.7"); 2006: 122.63 million; 2015: 34,914 billion, 5,290 per person (page "about 5300"); 30.379 x 4.037 = 122.64; line in 2006 29.89 (page 29.9). The verbal descriptions of the plot (signs of the errors, line higher between the crossings, curve 30.38 vs line 22.75 at x = 5) are right.
- Problem 2: A(2pi/3 + 0.1, 4pi/3) = 1.29471, drop 0.00433 = second-order prediction 0.00433. Equilateral side sqrt 3, area 1.299. Right triangle check (pi/2, pi) area 1.
- Problem 3: tan^-1(1/1.01) - pi/4 = -0.004975, rate -0.498; AB = I in general and at r = 2, theta = pi/6; the 2 x 2 cofactor inverse of A is B (det A = r); 3(d) back-substitution gives w_r = 2, w_theta = 10.
- Tolerances: all boxes accept 3-significant-figure answers. p1-d-worst rejects 1.66 (what 3-decimal coefficients give), but the statement explicitly tells the reader to keep all digits of a1, b1 there, so this is intended. p1-f-2015 at 2% accepts rounded coefficients (-0.7%) and rejects answers off by a factor of 1000. p1-f-2006 (tol 1) accepts 122, 123 and 122.24.
- Mistake hints checked by value: p2-a (parallelogram = twice the area; "+ sin t2" form tends to sin t2 as t1 -> 0; sin(t2 - t1)/2 is triangle O P1 P2; sign-flipped form gives -1 at (pi/2, pi)); p3-a (sign; missing r; r cos theta = y_theta, bottom right; sin theta = y_r, top right); p3-b (sign with a correct reason; x/(x^2+y^2) = theta_y, bottom right; -y/x^2 lacks the arctan factor; -y/r = -sin theta, and theta_x = -sin theta / r; x/r = r_x, top left). All true.
- vars ranges: p2-a t1 in [0.3, 0.9], t2 in [1.2, 2.0] (inside the region, t1 < t2); p3-a r in [1, 3], theta in [0.2, 1.2]; p3-b x, y in [1, 3]: finite and meaningful.
- Every solution ends with a "Check the result" step (number, limit, or independent route). No hint gives a final answer away (2(c) hint 2, "three equal arcs", only restates part (b)).
- `npm run calc:test` in the worktree: 14880 passed. `npm run content:check` in the worktree: 0 errors; the only warning about this page is the missing review file. No em dashes; no `## Summary` with answers.

## Coverage and order
- Part B: all three problems and all parts, in MIT's order; points 2+0+3+2+3+1, 2+2+2+2, 1+2+2+1 as on the sheet (11 + 8 + 6 = 25).
- Lecture numbering claim verified: MIT's Problem Set 3 sheet lists "Lecture 8. Fri Sept. 21 EXAM 1"; the Week 4 and Week 5 lecture summaries number Thu Sept 27, Fri Sept 28 and Tue Oct 2 as Lectures 9, 10, 11, while PS4 calls them 10, 11, 12. `_course.json` Lectures 9, 10, 11 are "Max-Min and Least Squares", "Second Derivative Test", "Chain Rule". Problem-to-lecture assignment (Thursday, Friday, Tuesday) is right.
- Part A list matches the sheet exactly (2F/1ab, 2; 2G/1ab, 4; 2H/1ac, 3, 4, 6; 2C/1abcd, 2, 3, 5ab; 2E/1abc, 2bc, 5, 8ab). Writer's claim confirmed: 2G-1 a) and b) are starred in the Notes, and the Solutions work only the (1,1), (2,3), (3,2) data of part c). 2E-8b is also starred (row 1).
- Left out by design and stated: textbook readings and 13.10/32, the warning about the textbook's equations (5), (7), (9), the MATLAB directions page. MIT's "hand in the underlined problems only" is not mentioned (not needed here).

## Licensing
- No MIT figure is redrawn; the only graph is a Plot generated from formulas. The sheet, Notes LS and the lecture summaries carry no "All rights reserved" or "Courtesy of" notice. The iPod data, the 6.6 billion world population and the 46.4 million 2006 sales are attributed to MIT's sheet and stored in calcs as `kind: fact` with MIT as source (correct: they cannot be recomputed). Wording is the page's own. No OpenStax or LibreTexts material.

## Notes
- Citations checked against printed page footers: PS4 Problem 1(a) p. 1; Problem 1(b)-(f) p. 2 (the data table is at the top of p. 2); Problem 3 p. 3; Notes LS equations (4) on printed p. 2 (rendered and compared: same equations); Week 4 summaries: Lecture 10 and the AC - B^2 rule on printed p. 2; Week 5 summaries: Lecture 11 polar example f_r = f_x x_r + f_y y_r on printed p. 1. All correct.
- Claims about lessons checked: the least-squares lesson fits exponential laws through ln y; the second-derivative lesson stresses the boundary; the chain-rule lesson has f_r = cos theta f_x + sin theta f_y; the matrices lesson has the cofactor inverse. Optional: the 2(a) hint mentions "the lesson on determinants" without a link (/courses/18-02/determinants-and-cross-product).
- 3(d) point (0, 5) on the y-axis is handled correctly: the solution says tan^-1(y/x) is undefined there but the entries of B hold everywhere except the origin, shown in 3(b) with theta = pi/2 - tan^-1(x/y) for y > 0.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

1. Warning fixed: the "More practice" section now says that part b of exercise 2E-8 is starred as well, so MIT's solutions work only its part a.
2. Info items left as they are.

Status set to `reviewed`.
