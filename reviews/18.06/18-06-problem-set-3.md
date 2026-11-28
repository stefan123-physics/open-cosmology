---
page: content/year-2/18.06/18-06-problem-set-3.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/52823bc4563ea1482bb5cd7c36c60d1e_8o5Cmfpeo6g.pdf (Lecture 6 transcript, 24 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/5b376d43a2a5dd24d86e69aa67406111_VqP2tREMvt0.pdf (Lecture 7 transcript, 19 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/224769c9e399493a99ac441ba670eebf_9Q1q7s1jTzU.pdf (Lecture 8 transcript, 20 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-8-solving-ax-b-row-reduced-form-r/ (source.url; not needed, no formula cites it)
  - MIT 18.06 problem sets, solutions, quizzes, final and Strang's textbook (not opened, by owner decision; the set is our own problems)
verdict: needs-changes
---

# Review: Problem Set 3: column space, nullspace and the complete solution

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree page: `.claude/worktrees/ps-1806-3/content/year-2/18.06/18-06-problem-set-3.mdx`, calcs `calcs/18.06/18-06-problem-set-3.yaml`, page-scoped meanings in `data/symbols.json` (same worktree).

## Blind solve

Written from `stripped-set-3.mdx` only, before opening the full page, its calcs or its symbols. Exact arithmetic by a rational rref script (`rv3/solve.py`; sympy is not installed in the .venv), every solution multiplied back with numpy.

My answers:
- P1(a): S1 subspace (plane through 0); S2 not (union of two planes: (1,0,0)+(0,1,0) leaves it); S3 not (no zero vector); S4 not (not closed under multiplying by -1); S5 subspace (line of multiples of (2,1,-1)).
- P1(b): P ∩ L1 = L1 (1+2-3 = 0, the whole line lies in P); P ∩ L2 = {0} (1+4-1 = 4 ≠ 0).
- P1(c): e.g. (1,0,1) in P plus (1,2,1) in L2 gives (2,2,2): 2+4-2 = 4 ≠ 0 so not in P, not a multiple of (1,2,1).
- P2(a): column 3 = column 1 - 2 column 2, so N(A) = multiples of (1, -2, -1) (first component 1: x2 = -2, x3 = -1); N(A) a line in R^3; C(A) the plane in R^4 of combinations of columns 1 and 2.
- P2(b): (choices not seen) test: b in C(A) iff b = a c1 + b c2, with a = b1 - 2 b2 and b checked on rows 3 and 4.
- P2(c): (3,1,3,0) = c1 + c2, so x = (1,1,0) + t(1,-2,-1); x3 = 2 gives t = -2, x = (-1, 5, 2) (A x = (3,1,3,0) checked). Not a subspace (no zero vector, b ≠ 0).
- P3(a): U = [[1,2,1,1,2],[0,0,2,4,-2],[0,0,0,0,0]]; second pivot 2; rank 2; free x2, x4, x5.
- P3(b): special solutions (-2,1,0,0,0), (1,0,-2,1,0), (-3,0,1,0,1); x4 = 1: x1 = 1, x3 = -2; x5 = 1: x1 = -3, x3 = 1 (all give A s = 0).
- P3(c): R = [[1,2,0,-1,3],[0,0,1,2,-1],[0,0,0,0,0]]; free columns (2,0), (-1,2), (3,-1) with signs switched are (x1,x3) of the special solutions.
- P3(d): 4×7: at least 7 - 4 = 3; 7×4: 0 (rank can be 4).
- P4(a): row 3 of [U c] is 0 = b3 + 7 b1 - 3 b2, so b3 = 3 b2 - 7 b1.
- P4(b): R = [[1,-1,0,-2],[0,0,1,1],[0,0,0,0]]; x_p = (-1, 0, 1, 0).
- P4(c): x = (-1,0,1,0) + x2 (1,1,0,0) + x4 (2,0,-1,1); x2 = 3, x4 = 1: x = (4, 3, 0, 1) (A x = (1,3,2) checked). A plane (two free parameters) through x_p, shifted off the origin, not a subspace.
- P4(d): 7 row1 - 3 row2 + row3 = 0, and 7 b1 - 3 b2 + b3 = 0 is the condition of (a).
- P5(a): third pivot q - 3; rank 2 at q = 3.
- P5(b): q ≠ 3: exactly one solution for every b; q = 3: none or infinitely many (solvable iff b3 = 2 b1 + b2). q = 5, b = (1,1,1): x = (6, -3, -1), x1 = 6.
- P5(c): rank B = 2; Bx = b: infinitely many solutions for every b (r = m < n); B^T y = d: 0 or 1 solution (r = n < m).
- P6(a): R = [[1,3,0,-2],[0,0,1,4]]: r12 = 3, r14 = -2, r24 = 4 (R times both special solutions = 0).
- P6(b): N(A) is exactly the line of (1,-1,1), one free variable, rank 2. (3,3,1) = 2(1,2,0) + (1,-1,1), so A(3,3,1) = 2(2,-1,4) = (4,-2,8): first component 4. Not solvable for every b (rank 2 < 3).

### Comparison (one line per answer id)

| Box | Mine | Page | Agree |
|---|---|---|---|
| p1-a-1 | yes | Yes | yes |
| p1-a-2 | no | No | yes |
| p1-a-3 | no | No | yes |
| p1-a-4 | no | No | yes |
| p1-a-5 | yes | Yes | yes |
| p1-b-1 | the whole line L1 | the whole of the line L₁ | yes |
| p1-b-2 | {0} | only the zero vector | yes |
| p1(c) (show) | (1,0,1) + (1,2,1) = (2,2,2) | same vectors | yes |
| p2-a-x2 | -2 | -2 | yes |
| p2-a-x3 | -1 | -1 | yes |
| p2-a-n | line through 0 in R³ | same | yes |
| p2-a-c | plane through 0 in R⁴ | same | yes |
| p2-b | my test applied to the four choices: (3,1,3,0) | (3,1,3,0) | yes |
| p2-c-x1 | -1 | -1 | yes |
| p2-c-x2 | 5 | 5 | yes |
| p2-c-sub | not a subspace, 0 not in it | same | yes |
| p3-a-piv | 2 | 2 | yes |
| p3-a-rank | 2 | 2 | yes |
| p3-a-free | x2, x4, x5 | same | yes |
| p3-b-41 | 1 | 1 | yes |
| p3-b-43 | -2 | -2 | yes |
| p3-b-51 | -3 | -3 | yes |
| p3-b-53 | 1 | 1 | yes |
| p3(c) (show) | R and -F as above | same R, same F | yes |
| p3-d-wide | 3 | 3 | yes |
| p3-d-tall | 0 | 0 | yes |
| p4-a | 3 b2 - 7 b1 | `3*b2 - 7*b1` | yes |
| p4-b-x1 | -1 | -1 | yes |
| p4-b-x3 | 1 | 1 | yes |
| p4-c-x1 | 4 | 4 | yes |
| p4-c-x3 | 0 | 0 | yes |
| p4-c-set | plane in R⁴ missing 0 | same | yes |
| p4(d) (show) | 7, -3, 1 | 7, -3, 1 | yes |
| p5-a-piv | q - 3 | `q - 3` | yes |
| p5-a-q | 3 | 3 | yes |
| p5-b-1 | q = 3, b = (1,1,3): b3 = 2b1 + b2 holds, infinitely many | Infinitely many | yes |
| p5-b-2 | q = 3, b = (1,1,1): fails, none | No solution | yes |
| p5-b-3 | q = 5: exactly one | Exactly one | yes |
| p5-b-x1 | 6 | 6 | yes |
| p5-c-rank | 2 | 2 | yes |
| p5-c-b | infinitely many for every b | same | yes |
| p5-c-bt | 0 or 1 | same | yes |
| p6-a-12 | 3 | 3 | yes |
| p6-a-14 | -2 | -2 | yes |
| p6-a-24 | 4 | 4 | yes |
| p6-b-rank | 2 | 2 | yes |
| p6-b-first | 4 | 4 | yes |
| p6-b-every | no | No, because the rank is less than m = 3 | yes |

No disagreement. Every final answer of the page equals mine; the two formula boxes are the same expressions as mine (no equivalence test needed). My numbers were checked by multiplying back with numpy (A·s = 0 for every special solution; A·x = b for x = (-1, 5, 2), (-1, 0, 1, 0), (4, 3, 0, 1), (6, -3, -1); R·s = 0 in Problem 6(a)) and by an exact-fraction rref of every matrix.

## Differences from the MIT source

There is no MIT problem text (our own problems on Lectures 6–8). The column "MIT says" gives the rule or the lecture source.

| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(b), box p2-b, against the statement of 2(c) | Rule: no statement sentence may give a box away | 2(b) asks which of four vectors is in C(A); the right one is (3, 1, 3, 0). The statement of 2(c), visible before 2(b) is answered, says "Find all solutions of Ax = (3, 1, 3, 0)", which tells the reader that this vector is in C(A) | Make the right choice of 2(b) another vector of C(A), e.g. (4, 1, 5, 1) = 2·(column 1) + (column 2) (checked: x₂ = 1, x₁ = 4 − 2 = 2, row 3 gives 4 + 1 = 5, row 4 gives 2 − 1 = 1), and leave (3, 1, 3, 0) out of the list. In 2(c) change hint 1 to "Find one solution first: write (3, 1, 3, 0) as a combination of columns 1 and 2, as in part (b)", and start the "All solutions" step with "As in part (b), (3, 1, 3, 0) is column 1 plus column 2, so (1, 1, 0) is a solution"; move the check A(1, 1, 0) = (3, 1, 3, 0) to 2(c), give 2(b) a check for (4, 1, 5, 1), and update calcs `p2-b` (formula and `shown`) |
| 2 | warning | Problem 5(b), statement | Rule: every box is named in its part's statement | "Decide how many solutions Ax = b has in each case": the three cases (q = 3 with b = (1,1,3), q = 3 with b = (1,1,1), q = 5 with b = (1,1,1)) appear only in the box labels, which read-aloud skips | Write the cases into the statement: "Decide how many solutions Ax = b has for q = 3 with b = (1, 1, 3), for q = 3 with b = (1, 1, 1), and for q = 5 with b = (1, 1, 1). For the last, also give x₁." |
| 3 | warning | Problem 6(b), box p6-b-every, choice "Yes, because there is one free variable" | Rule: choices must not answer another box | The distractor's reason is a true fact (one free variable), visible before p6-b-rank is answered; with r = n − (number of free variables) it gives rank 2. The right choice ("the rank is less than m = 3") narrows it further | Give reasons that count nothing, e.g. "Yes, because this b has solutions" and "No, because elimination leaves a zero row" (similar lengths; keep the right one second or move it) |
| 4 | warning | Problem 1(a), second hint | Rule: no hint gives a box's result away | "x₁x₂ = 0 means x₁ = 0 or x₂ = 0: think of (1, 0, 0) and (0, 1, 0)" names the exact counterexample that settles the yes/no box p1-a-2 with one addition; "try multiplying by a negative number" settles p1-a-4 almost as directly. The writer's worry is justified for S₂ | Keep the method, drop the vectors: "x₁x₂ = 0 means x₁ = 0 or x₂ = 0, so S₂ is made of two planes: test a sum of one vector from each. For a set described by inequalities, test multiples as well as sums." |
| 5 | warning | Problem 2(a), second hint | Rule: no hint gives a box's result away | "the only way to combine the three columns into zero is the one you found, up to a multiple" states that N(A) is a line, the content of box p2-a-n (only R³ against R⁴ is left) | "Columns 1 and 2 are not multiples of each other. What does that tell you about any combination of the three columns that gives zero?" |
| 6 | info | Problem 5(b), boxes p5-b-1, p5-b-2, p5-b-3 | | Three boxes share one three-way list, and the right answers are a permutation (2, 0, 1), so two right answers fix the third; the q = 5 case also follows at once from part (a) and from the request for a single x₁ | Fair as it stands: each case still needs its own test (the condition b₃ = 2b₁ + b₂ at q = 3), and the boxes are marked one by one. No change needed. If wanted, add a fourth case (e.g. q = 3, b = (0, 2, 2): solvable, infinitely many) so the answers are not a permutation |
| 7 | info | Problem 2(b), statement | | "Which of these four vectors is in C(A)?" names vectors that exist only inside the choice box, which read-aloud skips | Optionally list the four vectors in the statement (after fix 1) |
| 8 | info | Problems 3(a), 5(a): "the second pivot", "the third pivot" | Lecture 7 pp. 2–3: elimination goes on to the next column; no row exchange is needed here | The pivot values (2 and q − 3) assume the natural order of elimination; a reader who exchanges rows 2 and 3 in Problem 3 gets −2 | Optionally add "(without row exchanges)" to 3(a) |
| 9 | info | Citations (all formulas) | Course note: cite the transcript page where Strang says it, or mark "(our own solution)"; docs/CONTENT_GUIDE.md: formulas of our own solution are cited `cite="mit" at="Problem 2(a) (our own solution)"` | Every `<Formula>` cites a transcript with "(the method; the numbers are our own)" or similar; no `cite="mit"` | Consistent with the course note and correct here; see Notes for Set 10 and the course recommendation |

## Arithmetic and answer checks

- Every number and formula of the page was recomputed independently (exact-fraction rref of all five matrices, numpy products for every solution). No arithmetic error in statements, solutions or checks. In particular: P1(b) 1 + 2 − 3 = 0 and 1 + 4 − 1 = 4; P1(c) (2,2,2) gives 2 + 4 − 2 = 4; P2(a) (1,0,2,1) − 2(2,1,1,−1) = (−3,−2,0,3); P2(b) the three wrong vectors fail where the page says (row 3, row 3, row 4); P3 5·row 1 − row 2 = row 3, R and F as printed; P4 right side b₃ − 3b₂ + 7b₁ after elimination, column checks −1, 1, 3, 7(1,−1,2,0) − 3(2,−2,5,1) + (−1,1,1,3) = 0, b = (1,3,0) gives −2; P5 U with q − 3, at q = 3 row 3 = 2·row 1 + row 2, condition b₃ − b₂ − 2b₁, q = 5 right side (1, 0, −2) and x = (6, −3, −1); P5(c) Bᵀ(1,1) = (3,7,1,10), d = (1,0,0,0) fails in row 2; P6(a) R(−3,1,0,0) = R(2,0,−4,1) = 0; P6(b) (3,3,1) = 2(1,2,0) + (1,−1,1), A(3,3,1) = (4,−2,8), and the example matrix with columns (2,−1,2), (0,0,1), (−2,1,−1) has A(1,2,0) = (2,−1,4), A(1,−1,1) = 0 and rank 2.
- Every solution ends with a check (multiplying back, a column test, or an example matrix).
- Formula boxes. p4-a: `3*b2 - 7*b1`, vars b1 in [1, 4], b2 in [−4, −1]. Mistake `3*b2 - b1` differs from the answer by 6b₁ ≥ 6; mistake `7*b1 - 3*b2` differs by 2(7b₁ − 3b₂) ≥ 20: both differ everywhere and are finite. Hint 1 is true (keeping b₂ instead of b₂ − 2b₁ gives b₃ + b₁ − 3b₂ = 0, i.e. 3b₂ − b₁); hint 2 (signs) is true. p5-a-piv: `q - 3`, q in [−5, 10]; mistakes `q - 6` (column 1 cleared only: true) and `q` (row 3 untouched: true) differ by a constant 3 and 3 everywhere.
- Number boxes: all 26 have `tolerance="0.01"` and integer values, so a sign slip, a wrong pivot or a swapped entry (r₁₄ = −2 against r₂₄ = 4) is rejected. "How to answer" states the same tolerance.
- Choice boxes: no backslash TeX; right positions 1, 2, 0, 2, 3, 1, 2, 3, 2/0/1, 2/1, 1 (varied); the right choice is neither the longest nor the shortest in p2-c-sub and p4-c-set; apart from finding 3, no choice answers another box.
- calcs: `pytest tests/calc -k 18-06-problem-set-3` passes (54 tests); every `shown:` string occurs in the page (checked by script); every number box has an `answer:` entry (26 of 26); the choice boxes are backed by plain entries (p1-a-2, p1-a-5, p1-b-1, p1-b-2, p2-b, p5-b-1, p5-b-2, p5-c-yes), as in Set 10. The routes are independent of the page's solutions (other rows of A, Cramer on a 2 × 2 system, a cofactor expansion for q − 3); only p6-b-rank (`3 - 1`) repeats the page's count (info). Determinant-style routes appear only in calcs, not on the page, so "no determinants" is kept.
- `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order

- Lectures 6, 7, 8 in order. Problem 1: subspaces, unions and intersections (L6 pp. 1–6). Problem 2: column space, nullspace by eye, Ax = b solvable iff b is in C(A), solutions of Ax = b not a subspace (L6 pp. 7–22). Problem 3: elimination on a rectangular matrix, rank, free variables, special solutions, R, F, N, the count n − r (L7). Problems 4–6: augmented matrix, the solvability condition in both forms, particular and complete solution, the rank table with full row and full column rank, a matrix from its solutions (L8). Every main topic of the three lectures is practised.
- Boundaries kept: dimension and four-subspace bookkeeping are left to Set 4. "Dimension" occurs only in the intro sentence that says so; "basis", "independent", "row space" and "left nullspace" do not occur on the page. Problem 4(d) is Strang's second form of the solvability condition (L8 p. 4), not the left nullspace by name; Problem 5(c)'s Bᵀ is a second matrix with full column rank, like Strang's transposed example (L8 pp. 15–16). "Line" and "plane" are used as Strang uses them in Lectures 6 and 8. No determinants on the page.
- Level: MIT 18.06. The matrices follow the style of Strang's lecture examples (a column that is a multiple of another, a row that is a combination of the others), but every matrix and number is new. Nothing looks copied (checked against the transcripts; the textbook was not opened, so this cannot be checked against it).
- Points: 14 + 16 + 20 + 20 + 16 + 14 = 100; the parts add up in every problem; the intro says the points are ours.

## Licensing

- No MIT problem, figure or "rights reserved" material; no textbook, OpenStax or LibreTexts material; no figures. The three transcripts carry no "rights reserved" or "Courtesy" notice (grep).
- No text copied from the transcripts beyond standard terms ("special solutions", "particular solution", "full column rank").

## Notes

- **Citations checked** (PDF pages; the transcripts have no printed footer). Lecture 6: p. 1 (all combinations cv + dw stay in the space), pp. 3–4 (union of a plane and a line is not a subspace), pp. 4–6 (intersection is a subspace), pp. 7–8 (column space, in R⁴), pp. 12–13 (Ax = b solvable iff b is a combination of the columns), pp. 13–15 (the example's column space, a plane in R⁴), pp. 15–16 and p. 16 (nullspace in Rⁿ, m and n), pp. 16–18 (nullspace by eye), p. 20 (nullspace closed under addition), pp. 21–22 and p. 22 (solutions of Ax = b with b ≠ 0 not a subspace). Lecture 7: pp. 2–3 (go on when a column has no pivot), p. 4 (rank = number of pivots), pp. 2–5, p. 5 (the two equations of Ux = 0), pp. 5–8 and 7–8 (special solutions, all their combinations), p. 9 (r pivot and n − r free variables), p. 10 (R and MATLAB's rref), pp. 10–13 and 12–14 (R = [I F], N, and x_pivot = −F x_free on p. 14). Lecture 8: p. 2 (augmented matrix), pp. 2–3 and 2–4 (the condition on b), p. 4 (the same combination of b gives 0), pp. 5–6 (particular solution; "on the quiz, please" check in the original system), pp. 6–8 and 7–8 (x_p + x_n, complete solution), pp. 9–10 (shifted plane, not a subspace), pp. 10–11 (r ≤ m, r ≤ n), pp. 11–17 and 13–17 (full column and full row rank, with examples), pp. 17–19 and 18–19 (the square case; the last case, no solution or infinitely many), pp. 11–19 (the whole table). All at the cited place. Strang swaps the cases r = m and r = n on p. 18 and corrects himself on p. 19; the page gives the corrected table and does not repeat the slip (fine under Writing rule 4).
- **Citation style.** The page cites only transcripts, each with a qualifier such as "(the method; the numbers are our own)", and never `cite="mit"`. That follows the course note and is accurate: each formula does what Strang does at the cited page, so no citation claims more than the transcript holds. Account B's model Set 10 mixes two forms: transcript citations with the same qualifier (19 formulas) and `cite="mit" at="Problem N (our own problem)"` or "(our own solution)" (24 formulas). The second form follows docs/CONTENT_GUIDE.md ("Formulas of our own solution are cited `cite="mit" at="Problem 2(a) (our own solution)"`"), but `cite="mit"` resolves to the page's source URL (an MIT lecture page) where the formula is not, so for a formula that has a lecture counterpart it says less than a transcript page. So the two sets are not uniform, but neither breaks a rule. Recommendation for the course: use Set 3's form (a transcript page with "(the method; the numbers are our own)") wherever Strang does the method, because it can be checked, and keep `cite="mit" at="Problem N(x) (our own solution)"` only for a formula with no counterpart in any covered lecture, as CONTENT_GUIDE.md allows. Set 3 needs no change. Set 10 could move its "(our own problem)" citations to transcript pages where one exists. The course note's "never `cite="mit"` for our own problems' statements" and CONTENT_GUIDE.md's rule for solutions do not conflict, but the course note should say which to use for a solution formula with no lecture counterpart.
- **Symbols.** 53 page-scoped meanings (`pages: ["18-06-problem-set-3"]`) cover every letter used (A, B, b, b₁–b₃, c, c₁, c₂, C, d, F, I, L₁, L₂, m, n, N, P, q, r, r₁₂, r₁₄, r₂₂, r₂₄, R, s₁, s₂, S₁–S₅, T, U, v, w, x, x₁–x₅, x_p, x_n, x_pivot, x_free, y, y₁, y₂, a₁–a₃). They fit the page and give nothing away (R's meaning says "pivots equal to 1", which is the definition). No fallback to a cosmology meaning found.
- `summary` names topics only. No em dashes, no control characters, no `## Summary` section.
- The typing example `(q + 1)/2 - 4*b2` and the number example 0.5 answer no box. The preamble's rank table gives the general cases, as the lesson does; the reader still has to find each rank, so it is not a leak.
- No opened solution prints a later box's answer (checked part by part). The 5(a) check step ("at q = 3 row 3 is twice row 1 plus row 2") is a strong pointer for 5(b), but it gives a method, not an answer.

COUNTS: errors=1 warnings=4 info=4

## Resolution (2026-11-28, by the page author)

1. Error, fixed. The right choice of 2(b) is now (4, 1, 5, 1) = 2·(column 1) + (column 2), and (3, 1, 3, 0) is no longer in its list; the solution tests (4, 1, 5, 1) (x₂ = 1, x₁ = 2, rows 3 and 4 give 5 and 1) and its check is A(2, 1, 0) = (4, 1, 5, 1). In 2(c) the first hint now says to find one solution first by writing (3, 1, 3, 0) as a combination of columns 1 and 2, as in part (b); the "All solutions" step finds (1, 1, 0) that way; the check A(1, 1, 0) = (3, 1, 3, 0) moved to 2(c). calcs: `p2-b` now checks (4, 1, 5, 1); new entry `p2-c-xp` checks A(1, 1, 0) = (3, 1, 3, 0).
2. Warning, fixed. The statement of 5(b) names the three cases (q = 3 with b = (1, 1, 3), q = 3 with b = (1, 1, 1), q = 5 with b = (1, 1, 1)) and asks for x₁ in the last.
3. Warning, fixed. The choices of p6-b-every are now "Yes, because this b has solutions" and "No, because elimination leaves a zero row" (right one second); neither counts free variables.
4. Warning, fixed. Second hint of 1(a): "x₁x₂ = 0 means x₁ = 0 or x₂ = 0, so S₂ is made of two planes: test a sum of one vector from each. For a set described by inequalities, test multiples as well as sums."
5. Warning, fixed. Second hint of 2(a): "Columns 1 and 2 are not multiples of each other. What does that tell you about any combination of the three columns that gives zero?"
6. Info, no change (fair as it stands, as the review says).
7. Info, no change (the four vectors stay in the choice box).
8. Info, fixed. 3(a) now asks for "the second pivot (no row exchanges)".
9. Info, no change (citation style kept). Also from the arithmetic notes: calcs `p6-b-rank` now has an independent route, the rank of the example matrix of the check found by elimination (two nonzero pivots, a zero third row), instead of repeating the page's count 3 − 1.
