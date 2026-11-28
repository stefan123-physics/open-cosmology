---
page: content/year-2/18.06/18-06-problem-set-4.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/36ad03fa0fce88a4b97f846156c11b8b_yjBerM5jWsc.pdf (Lecture 9 transcript, read, all 24 PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/55c07f16c1f8592e3f0457652ab11634_nHlE7EgJFds.pdf (Lecture 10 transcript, read, all 24 PDF pages)
  - content/year-2/18.06/18-06-problem-set-3.mdx (read, for overlap)
  - MIT problem-set, solution, quiz and final PDFs and Strang's book (not opened, as instructed)
verdict: needs-changes
---

# Review: Problem Set 4: independence, bases and the four subspaces

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in the worktree `.claude/worktrees/ps-1806-4` (commit 5f8c7e1): the page, `calcs/18.06/18-06-problem-set-4.yaml` and its page-scoped meanings in `data/symbols.json`.

## Blind solve

My answers (written from stripped-set-4.mdx only, before opening the full page; exact-fraction rref and numpy checks in scratchpad `rv4/solve.py`):

- 1(a): Set 1 independent (rank 2); Set 2 dependent (contains 0); Set 3 dependent (4 vectors in R³; rank 3); Set 4 dependent (rank 2: 2(1,2,3) - (2,1,0) = (0,3,6)); Set 5 independent (rank 3).
- 1(b): det = t - 3, so t = 3; v3 = -2 v1 + 1 v2, c1 = -2 (check: -2(1,2,-1)+(2,5,1) = (0,1,3)).
- 1(c): if c1v1+...+ckvk + d w = 0 and d ≠ 0 then w is a combination, contradiction; so d = 0, then all ci = 0 by independence.
- 2(a): dim S = 3 (w3 = -2w1 + w2; w1, w2, w4 pivot columns).
- 2(b): {w1,w2,w4}, {w1,w3,w4}, {w2,w3,w4} are bases; {w1,w2,w3} is not (dependent). (Choices not seen.)
- 2(c): z = 2w1 - w3 + w4: c1 = 2, c4 = 1.
- 2(d): any vector not in S (choices not seen).
- 3(a): third pivot (a² - a - 2)/(a - 1) = (a - 2)(a + 1)/(a - 1). Check: product of pivots 1·(a-1)·that = a² - a - 2 = det A (numpy at a = 0, 3, 5).
- 3(b): for a = 1 the second pivot position is zero, a row exchange is needed, but the rank is 3: the vectors are independent and a basis of R³.
- 3(c): a = 2 and a = -1.
- 3(d): n independent vectors that did not span could be extended by a vector outside their span to n + 1 independent vectors (1(c)), more than the dimension allows; n spanning vectors that were dependent could drop one and still span, giving a spanning set of n - 1 vectors, so dimension < n, contradiction.
- 4(a): r = 2: dim C(A) = 2, dim C(Aᵀ) = 2, dim N(A) = 2, dim N(Aᵀ) = 1.
- 4(b): R = [[1,0,-3,-3],[0,1,1,2],[0,0,0,0]]; (1,1,s,t) = row1 + row2 of R: s = -2, t = -1. Column 1 of A = (1,3,-1) has third component ≠ 0, so it is NOT in C(R).
- 4(c): pivot columns 1 and 2 of A: (1,3,-1), (2,7,0) (choices not seen).
- 4(d): row3 → row3 + row1 - 2(row2 - 3row1) = 7 row1 - 2 row2 + row3; y = (7, -2, 1): y1 = 7, y2 = -2; N(Aᵀ) is a line in R³. Check: yᵀA = 0 (exact), and the SVD null vector of Aᵀ normalised to y3 = 1 is (7, -2, 1). dim N(Aᵀ) = 1, so y3 = 1 makes it unique.
- 5(a): dim N(A) = 5, dim N(Aᵀ) = 2.
- 5(b): dim N(B) = n + 1 - r (b in C(A)); dim N(Bᵀ) = m - r - 1 (b not in C(A)).
- 5(c): 1 no (dim N = 1 forces r = 3, then dim N(Aᵀ) = 0); 2 no (r = 3 - r has no whole solution); 3 yes (r = 3, n - r = 3); 4 yes (A = [[0,1],[0,0]]).
- 6(a): row space: always the same; nullspace: always the same; column space: can change; left nullspace: can change.
- 6(b): p = -2, q = 1 (check: -2(1,3)+(2,6) = 0, (1,3)+(-1,-3) = 0); N(Rᵀ) = span{(0,1,0),(0,0,1)}: same dimension 2, a different plane from N(Aᵀ).
- 6(c): Ax = 0 ⇒ EAx = 0, and EAx = 0 ⇒ Ax = E⁻¹0 = 0. Rows of B are combinations of rows of A and A = E⁻¹B gives the reverse, so the row spaces are equal.

### Comparison (one line per answer id)

All 42 boxes agree with my blind solve; no disagreement.

- p1-a-1 Yes, p1-a-2 No, p1-a-3 No, p1-a-4 No, p1-a-5 Yes: agree.
- p1-b-t 3, p1-b-c1 -2: agree.
- p2-a 3, p2-b {w1, w3, w4}, p2-c-1 2, p2-c-4 1, p2-d (1, 0, 0, 0): agree (numpy: rank [w1 w3 w4 (1,0,0,0)] = 4; the other three candidates give rank 3).
- p3-a a - 2/(a - 1): agree (equal to my (a² - a - 2)/(a - 1) at every sample). p3-b "a basis" choice: agree in substance (wording, see W2). p3-c-hi 2, p3-c-lo -1: agree.
- p4-a-c 2, p4-a-row 2, p4-a-n 2, p4-a-left 1; p4-b-s -2, p4-b-t -1, p4-b-col No; p4-c columns 1 and 2 of A; p4-d-1 7, p4-d-2 -2, p4-d-where a line in R³: agree (exact Gauss–Jordan on [A I]: last row of E is (1, -2/7, 1/7) when the full rref rescales it, i.e. (7, -2, 1) with y3 = 1).
- p5-a-n 5, p5-a-left 2; p5-b-n n + 1 - r, p5-b-left m - r - 1; p5-c-1 Impossible, p5-c-2 Impossible, p5-c-3 Possible, p5-c-4 Possible: agree.
- p6-a-c Can change, p6-a-row Always the same, p6-a-n Always the same, p6-a-left Can change; p6-b-p -2, p6-b-q 1, p6-b-cmp two different planes: agree.
- Proof parts 1(c), 3(d), 6(c): the page's arguments are correct and match mine.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| E1 | error | 2(b) box p2-b, with the statements of 2(c) and 2(d) | (answer-leak rule) | 2(c) statement: "Write it in the basis of part (b), $z = c_1w_1 + c_3w_3 + c_4w_4$"; 2(d): "added to $w_1, w_3, w_4$, gives a basis of R⁴". Both are on screen while 2(b) is answered and name its right choice. | Make the right choice of 2(b) "$w_2$, $w_3$ and $w_4$" (rank 3 by numpy; it spans S since $w_1 = (w_2 - w_3)/2$) and remove the choice "$w_1$, $w_3$ and $w_4$"; in 2(c) replace "in the basis of part (b)" by "$w_1, w_3, w_4$ are also a basis of $S$" (answers $c_1 = 2$, $c_4 = 1$ unchanged). Update the p2-b solution and calcs p2-b-indep. |
| E2 | error | 6(a) boxes p6-a-c, p6-a-row, p6-a-n | (answer-leak rule) | The preamble says "Row operations change the column space but keep the row space"; the statement of 6(c), on the same page below, says "Show that $B = EA$ has the same nullspace and the same row space as $A$". Three of the four boxes of 6(a) are answered by text the reader sees. | Keep in 6(a) only the left-nullspace box (all 4 points), or reorder: current 6(b) becomes (a), current 6(c) becomes (b), and drop the four-way classification. Either way, the preamble sentence then no longer answers a box. |
| E3 | error | 6(a) solution, steps "The two that can change" and "Check" | (answer-leak rule) | "Then the left nullspace can change too: part (b) gives an example" and "each staying of dimension $r$ and $m - r$": opening 6(a)'s solution says that $N(A^T)$ and $N(R^T)$ of 6(b) differ and have equal dimension, which is p6-b-cmp ("two different planes"). | Give the example inside 6(a)'s solution with another matrix (e.g. $A = (1, 1)^T$, $R = (1, 0)^T$: $N(A^T)$ = multiples of $(1, -1)$, $N(R^T)$ = multiples of $(0, 1)$) and do not refer to part (b); or apply the reorder of E2. |
| W1 | warning | 1(b), and 3(a)/(c) | Set 3 Problem 5(a) already asks for "the third pivot as a formula in $q$" and the value of $q$ for rank 2 (pivot $q - 3$, answer $q = 3$) | 1(b): third pivot $t - 3$, answer $t = 3$: the same kind of problem with the same numbers; 3(a)/(c) is the parameter-pivot kind a second time (with the new twist at $a = 1$). | Replace 1(b) by a problem of another kind, e.g. four given vectors of R³ with no parameter: find the dependence and give one coefficient with another fixed. Keep Problem 3. |
| W2 | warning | 3(b) choice p3-b, right answer | Lecture 9 p. 14: $n$ vectors are a basis of Rⁿ when the matrix is invertible | "are a basis once two rows are exchanged": exchanging rows of $A$ changes the components of the vectors; the vectors are a basis whether or not elimination exchanges rows. | "are a basis; elimination only needs a row exchange" (keep its length near the others). |
| W3 | warning | calcs p5-b-n, p5-b-left | (course note: formula answers checked by an independent route) | `n + 1 - r` equals `(n + 1) - r` and `m - r - 1` equals `m - (r + 1)`: the same expression rewritten, not an independent check. N(Bᵀ) has no example entry in calcs. | Add example entries counted from explicit matrices, e.g. A = [1 0; 0 0], b = (0, 1): rank B = 2, N(Bᵀ) = {0}, 0 = 2 - 1 - 1; and A = [1 0; 0 0; 0 0], b = (0, 1, 0): N(Bᵀ) = multiples of (0, 0, 1) (residual of yᵀB added), 1 = 3 - 1 - 1. |
| W4 | warning | the six four-way choice boxes | (rule: positions varied) | Right answers at 0-based positions 2, 2, 1, 2, 2, 1 (p2-b, p2-d, p3-b, p4-c, p4-d-where, p6-b-cmp): never first or last. | Move e.g. p2-d's right answer to position 0 and p4-d-where's to position 3. |
| W5 | warning | 4(d) statement | Lecture 10 pp. 17–20 | "(its third component is $y_3 = 1$)": true for the page's sequence of operations, but a reader who eliminates in another order or rescales row 3 (as a full rref does) gets a multiple of $(7, -2, 1)$ with $y_3 \neq 1$. | "…scaled so that its third component is $y_3 = 1$." The answer is then unique, since dim $N(A^T) = 1$. |

## Arithmetic and answer checks
- Every matrix and number re-derived with exact fractions and numpy (scratchpad `rv4/solve.py`, `rv4/chk.py`): ranks of the five sets of 1(a); det of 1(b) = t - 3; the dependence of Problem 2 and z = 2w1 - w3 + w4; the third pivot of 3(a) (pivot product = det at a = 0, 3, 5); R and E of Problem 4 (EA = R); the vectors of 6(b). All agree with the page, including every intermediate matrix in the solutions.
- 3(a) formula box: vars a in [2.5, 6] keep the answer finite (pole at a = 1 excluded). Mistake a - 1/(a - 1) differs from the answer by 1/(a - 1) ≥ 0.2 on the range; mistake a - 2(a - 1) meets the answer only at a = 0 and a = 2, outside the range (smallest difference 1.67). Both hints are true of their formulas.
- 5(b) formula boxes: vars finite; the mistakes differ from the answer by a constant 1, or by m - 1 - n ≥ 3 on the ranges (m ≥ 10, n ≤ 6), so never equal. Hints true (the hint of n - r - 1, "the rank stays r", is true, though that formula also drops the extra column).
- 4(d) asks for a unique vector: dim N(Aᵀ) = 1, and y3 = 1 fixes the multiple (wording: W5).
- Number boxes: whole-number answers with tolerance 0.01, which rejects a sign slip or an off-by-one count in every case.
- Points: 16 + 18 + 16 + 22 + 14 + 14 = 100, and the parts of each exercise add up.
- Calcs: every `shown:` string occurs in the page text (script check); every number and formula box has an `answer:` entry. The solve-based entries (p1-b-t, p1-b-c1, p2-c, p3-c, p4-b, p4-d, p6-b) use a different route from the page's (expanded determinant, other components, rows of A instead of R), so they are independent; only 5(b) is not (W3).
- Each solution ends with a Check step with a real check; 2(a)'s check ("at most 4 and at least 2") is weak, but the elimination above it is complete.

## Coverage and order
- Problems 1–3 practise Lecture 9 (independence, span, basis, dimension, the invertible-matrix test, dimensions of C(A) and N(A)); Problems 4–6 practise Lecture 10 (the four subspaces, dimensions and bases, the row space from R, the left nullspace from [A I] → [R E], what row operations keep), in the lectures' order.
- Spaces of matrices (end of Lecture 10) are left out on purpose and the intro says so. Orthogonality is left to Set 5: "perpendicular" occurs only in the intro sentence that sends it there; 2(d) describes S by one linear equation without speaking of normal vectors. No determinants on the page (calcs use expanded determinants only as an independent check, never shown).
- Overlap with Set 3: W1. Set 3's Problems 2 and 3 (a column combination of the first two; rank and special solutions) are related to Set 4's Problems 2 and 4(a) but asked from a new angle (span and basis; four dimensions), which is fine.

## Licensing
- All problems, matrices and numbers are our own; none matches the lectures' examples (Lecture 9: (1,1,2), (2,2,5), (3,3,7); Lecture 10: rows 1 2 3 1 and 1 1 2 1). No transcript sentences copied. 1(c) and 3(d) are standard lemmas in the page's own words. No figures. No Strang, MIT problem-set, OpenStax or LibreTexts text.

## Notes
- Citations checked against the transcripts (PDF pages; no printed footer): Lecture 9 pp. 2, 3, 5, 6, 7–8, 9, 10, 13, 14, 16, 19–20, 21, 23, 24 and Lecture 10 pp. 5, 7, 8, 9–10, 11–15, 16, 17–18, 20–21 say what the page attributes to them.
- 3(d) (writer's doubt), info: the level fits 18.06. The solution reproves "n + 1 vectors in a space of dimension n are dependent" by coordinates, which goes past the lecture (p. 21 gives only the short form) but is correct. Add one sentence that quoting this fact, as the lecture does, earns the full 4 points, so readers mark themselves fairly.
- 6(a) solution pointing to 6(c) (writer's doubt), info: the pointer itself does not confuse; the real problems are that 6(c)'s statement and the preamble already answer 6(a) (E2) and that 6(a)'s solution answers 6(b) (E3).
- Symbols: 49 page-scoped meanings; all fit the page and give nothing away. No em dashes in page or calcs; no control characters. `summary` names topics only.

COUNTS: errors=3 warnings=5 info=2

## Resolution (2026-11-28, by the page author)

- E1: fixed. The right choice of 2(b) is now "$w_2$, $w_3$ and $w_4$" (position 3); the choice "$w_1$, $w_3$ and $w_4$" is gone, and "all four of the $w$'s" became "all four vectors $w_1$ to $w_4$" so the right choice is neither longest nor shortest. 2(c) now says "$w_1, w_3, w_4$ are also a basis of $S$" and its check proves their independence (moved from 2(b)); 2(d) names "the basis $w_1, w_3, w_4$ of $S$ from part (c)". The 2(b) solution uses $w_1 = \frac12(w_2 - w_3)$ and checks the independence of $w_2, w_3, w_4$. Calcs: new p2-b-span and p2-b-indep, old p2-b-indep renamed p2-c-indep.
- E2: fixed by the reorder. The four-way classification boxes are gone; old 6(b) is now 6(a) (7 points, boxes p6-a-p, p6-a-q, p6-a-cmp) and old 6(c) is now 6(b) (7 points; Problem 6 still 14). The sentence "Row operations change the column space but keep the row space" in "What you need" is now "Row operations keep the row space, so …", which also no longer hints at p4-b-col.
- E3: fixed by the same reorder: the old 6(a) solution is removed, and nothing before 6(a)'s boxes says how $N(A^T)$ and $N(R^T)$ compare. The dimension remark now sits in 6(b)'s check, after the last box.
- W1: fixed. 1(b) is now parameter free: four vectors $(1, 0, 2)$, $(0, 1, 1)$, $(1, 1, 0)$, $(1, 4, -3)$ of R³ with the one combination $c_1v_1 + c_2v_2 + c_3v_3 + v_4 = 0$; boxes $c_1 = 2$, $c_3 = -3$ (and $c_2 = -1$ in the solution), checked by Cramer's rule in calcs (p1-b-c1, p1-b-c2, p1-b-c3), pivot product against the determinant, and the residual. 1(c)'s check now uses this example. Symbols t, v₁, v₂, v₃, c₃ updated, v₄ added for this page.
- W2: fixed. The right choice is "are a basis; only a row exchange is needed" (42 characters, between 38 and 44).
- W3: fixed. Calcs p5-b-left-example (A = [1 0; 0 0], b = (0, 1): 0 = 2 − 1 − 1) and p5-b-left-example2 (A = [1 0; 0 0; 0 0], b = (0, 1, 0), y = (0, 0, 1) with yᵀB = 0: 1 = 3 − 1 − 1) count from explicit matrices; the second example is added to the 5(b) check on the page.
- W4: fixed. Right positions of the four-way boxes are now 3 (p2-b), 0 (p2-d), 1 (p3-b), 2 (p4-c), 3 (p4-d-where), 1 (p6-a-cmp); the 2(d) solution lists the candidates in the new order.
- W5: fixed. 4(d) now says "Scale it so that its third component is $y_3 = 1$".
- Info (3(d)): added to the solution that quoting the lecture's fact (n + 1 vectors in a space of dimension n are dependent, p. 21) earns the full 4 points.
- Info (6(a) pointer to 6(c)): no longer applies after the reorder.
- Rechecked after the changes: points 16 + 18 + 16 + 22 + 14 + 14 = 100 and every part adds up; every box is named in its statement; the listed mistakes of 3(a) and 5(b) (unchanged) differ from their answers over the whole `vars` ranges; every calcs `shown:` string occurs on the page.
