## Blind solve

Written from `stripped-set-1.mdx` only, before opening the full page, its calcs or its symbols. Every number checked with numpy (script `rv1/solve.py` in the scratchpad: solves, multiplies back, determinants used only as an independent check, not as page content).

My answers:
- 1(a) x = -1, y = 2 (check: 2(-1)+3(2)=4, -1-2=-3).
- 1(b) b = (7, 1).
- 1(c) a = 1.5 (= 3/2); row picture: two parallel lines 2x+3y=4 and 2x+3y=-6, no point in common, no solution.
- 1(d) y = -5/(a - 1.5) = -10/(2a - 3) (check a=-1 gives 2; numpy at a = 0, 2, 5, -3 agrees).
- 2(a) x = (1, 2, 1); A x = (5, 3, 4).
- 2(b) alpha = -2, beta = 3 (-2(1,0,1)+3(2,1,0) = (4,3,-2)).
- 2(c) b3 = -1 (b = -1(1,0,1)+3(2,1,0)); infinitely many solutions (columns dependent, any multiple of (2,-3,1) can be added).
- 3(a) l21 = 2, l31 = -1, l32 = -2; pivots 2, -3, 4 (U = [[2,1,1],[0,-3,1],[0,0,4]]; product of pivots -24 = det A as a cross-check only).
- 3(b) c = (3, 5, 8); last entry 8; z = 2, y = -1, x = 1 (A x = b checked).
- 3(c) third pivot is q + 3, so q = -3 breaks elimination for good; second pivot is s - 2, so s = 2; then row 2 of the eliminated matrix is (0, 0, 1) while row 3 is (0, 6, 2): a row exchange of rows 2 and 3 cures it, the matrix stays invertible (det = -12 at s = 2, cross-check).
- 4(a) E = [[1,0,0],[-2,1,0],[-3,2,1]]; E_31 entry = -3 (EA = U checked).
- 4(b) (E32 E21)_31 = -4, (E21 E32)_31 = 0: order matters.
- 4(c) (PA)_23 = 1, (AP)_23 = -1.
- 4(d) E32^{-1} = identity with -2 in row 3, column 2 (adds back 2·row 2... i.e. undoes "row 3 + 2 row 2").
- 5(a) AB: 4 entries x 3 = 12 multiplications; BA: 9 entries x 2 = 18.
- 5(b) (AB)_22 = 10, (BA)_31 = -3 (AB = [[2,-1],[1,10]], BA = [[1,5,3],[1,-1,-3],[-3,6,12]]).
- 5(c) (2,1)(0,-1) = [[0,-2],[0,-1]]; entry (1,2) = -2.
- 5(d) row i of uv is u_i v, column j is v_j u; each of the three terms has all rows multiples of the corresponding row of B (rank one).
- 5(e) M^2 = [[I,0],[2C,I]]; entry (4,1) = 2·3 = 6; NM = [[I,0],[-C+C, I]] = I.
- 6(a) x1 = 2.
- 6(b) columns of AB are combinations of the columns (3,-1) and (-6,2) = -2(3,-1), all on one line, so AB = I is impossible; if A^{-1} existed, x = A^{-1}A x = A^{-1}0 = 0, contradiction with x = (2,1).
- 6(c) t = 1.5; x = (1, -2, 2), second entry -2.
- 6(d) P^{-1} = P^T = [[0,1,0],[0,0,1],[1,0,0]].

My count of boxes from the stripped file: 42 answer boxes, of which I expect 36 number boxes (1a 2, 1b 2, 1c 1, 2a 3, 2b 2, 2c 1, 3a 5, 3b 4, 3c 2, 4a 1, 4b 2, 4c 2, 5a 2, 5b 2, 5c 1, 5e 1, 6a 1, 6c 2) if 1c, 2c, 3c, 4d, 6d each have one choice box and 1d a formula box. The task says 35 number boxes: checked below.

### Comparison with the page (written after opening the full page, its calcs and symbols)

Each line: box id, page value / my value, verdict.
- p1-a-x: -1 / -1, agree. p1-a-y: 2 / 2, agree.
- p1-b-1: 7 / 7, agree. p1-b-2: 1 / 1, agree.
- p1-c-a: 1.5 / 1.5, agree. p1-c-pic: choice 2 "two parallel lines, so there is no solution" / parallel lines, agree.
- p1-d: -10/(2*a - 3) / -10/(2a - 3), agree (numpy at a = -1, 0, 2, 5, -3).
- p2-a-1, p2-a-2, p2-a-3: 1, 2, 1 / 1, 2, 1, agree.
- p2-b-alpha: -2 / -2; p2-b-beta: 3 / 3, agree.
- p2-c-b3: -1 / -1, agree. p2-c-count: choice 3 "infinitely many" / infinitely many, agree.
- p3-a-l21, p3-a-l31, p3-a-l32: 2, -1, -2 / 2, -1, -2, agree. p3-a-p2: -3 / -3; p3-a-p3: 4 / 4, agree.
- p3-b-c3: 8 / 8; p3-b-x, p3-b-y, p3-b-z: 1, -1, 2 / 1, -1, 2, agree.
- p3-c-q: -3 / -3; p3-c-s: 2 / 2; p3-c-what: choice 1 "a row exchange gives three nonzero pivots" / a row exchange cures it, agree.
- p4-a: -3 / -3, agree. p4-b-1: -4 / -4; p4-b-2: 0 / 0, agree. p4-c-1: 1 / 1; p4-c-2: -1 / -1, agree.
- p4-d: choice 0 "-2 in row 3, column 2" / same, agree.
- p5-a-ab: 12 / 12; p5-a-ba: 18 / 18, agree. p5-b-ab: 10 / 10; p5-b-ba: -3 / -3, agree. p5-c: -2 / -2, agree. p5-e: 6 / 6, agree.
- p5-d, p6-b (no box): the page's arguments match mine.
- p6-a: 2 / 2, agree. p6-c-t: 1.5 / 1.5; p6-c-x2: -2 / -2, agree.
- p6-d: choice 1 "P^2 = PP" / P^{-1} = [[0,1,0],[0,0,1],[1,0,0]] = P^2 (numpy), agree.

No disagreement on any of the 42 boxes.

---
page: content/year-2/18.06/18-06-problem-set-1.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-3-multiplication-and-inverse-matrices/ (not needed: the set is our own problems; the transcripts below were read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/f4e7ccf6e84b66c908c250fb85323f64_J7DzL2_Na80.pdf (read, pdftotext per PDF page; pp. 9, 12, 15, 16, 19 checked)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/49c357a7166c58e09f76f25512872fd9_QVKj3LADCnA.pdf (read; pp. 1, 2, 5, 6, 7, 9, 12 to 18, 20 checked)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/07f82f7a07458fb3d79d1ba5cf53fa1e_FX4C-JpTFgY.pdf (read; pp. 1 to 16 checked)
  - content/year-2/18.06/geometry-of-linear-equations.mdx, elimination-with-matrices.mdx, multiplication-and-inverse-matrices.mdx (read, for the "What you need" claims)
verdict: needs-changes
---

# Review: Problem Set 1: linear equations, elimination and matrix multiplication

Writer: Opus. Reviewer: Opus (same model, blind).

Not opened, as instructed: Strang's textbook, MIT's problem-set and solution PDFs, and every `mit18_06s10_exam*` / `mit18_06s10_final*` file in the scratch folder.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Symbols: bare $\ell$ (What you need, line 50 "a multiple $\ell$"; line 54; Problem 4 preamble "$-\ell$") | (site rule, course note: every letter used needs a page-scoped meaning; content:check does not catch a fallback) | `data/symbols.json` entry `ell` has no meaning scoped to `18-06-problem-set-1`, so the popup falls back to the unscoped general meaning "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one", unit "m (a comoving ℓ_c is in notches, Guth's units)" | Add to entry `ell` the meaning `{"text": "A multiplier of elimination: the number of times a pivot row is subtracted from a row below it; ℓ₂₁, ℓ₃₁, ℓ₃₂ are the three of Problem 3.", "pages": ["18-06-problem-set-1"]}` |
| 2 | warning | calcs entry `p6-c-x2` (box p6-c-x2) | (course note: every box's number is computed in calcs) | `formula: -2`, `expected: '-2'`: the answer is typed in, not computed; the independent check is only in `p6-c-check` | Compute it, e.g. `formula: solve('x2 + 2', 'x2', -10, 10)` (row 2 of A_t with x₃ = 2) |
| 3 | info | Problem 3(c) | Lecture 2 pp. 6 to 7: Strang changes the 8 to 6 (a row exchange saves it) and the z coefficient to −4 (complete failure) | The same two-step device with our own matrix and numbers | None needed: it practises the lecture's point with original numbers |
| 4 | info | Problem 6(a), (b) | Lecture 3 pp. 13 to 16: the singular example (1 3; 2 6), x = (3, −1), both arguments | The same two arguments for our own matrix (3 −6; −1 2), x = (2, 1) | None (own numbers; the solution says the arguments are the lecture's) |
| 5 | info | What you need: "each row of AB a combination of the rows of B (pp. 4–6)" | The row way is on pp. 6 to 7 of the Lecture 3 transcript | pp. 4–6 | Optional: "(pp. 4–7)" |

## Arithmetic and answer checks
- All 42 boxes solved blind and in agreement (list above). Checked with numpy by multiplying back: A x = b in Problems 1, 2, 3; E A = U in 4(a); E₃₂ times its inverse = I; N M = I for the 4 × 4 block matrices; P · P² = I; A_t x = 0 at t = 1.5; A(2, 1) = 0 in 6(a).
- Box count: 42 `<Answer>` boxes = **36 number boxes** (all with `tolerance="0.01"`), 1 formula box (p1-d) and 5 choice boxes (p1-c-pic, p2-c-count, p3-c-what, p4-d, p6-d). The task said 35 number boxes; the page has 36 (1a 2, 1b 2, 1c 1, 2a 3, 2b 2, 2c 1, 3a 5, 3b 4, 3c 2, 4a 1, 4b 2, 4c 2, 5a 2, 5b 2, 5c 1, 5e 1, 6a 1, 6c 2). Each of the 36 names exactly one value in its label and statement (which entry by row and column, which pivot, which multiplier, which component); none is ambiguous.
- Tolerance 0.01: every answer is an integer or 1.5, so a sign slip, a row/column mix-up (p4-c-2 would give 3; (BA)₁₃ = 3 instead of (BA)₃₁ = −3), the wrong pivot (−3 vs 4) or 2/3 instead of 1.5 are all rejected.
- p1-d: `vars a ∈ [-1, 1]` keeps 2a − 3 ≤ −1, finite. Mistakes −2/(2a − 3) and 10/(2a − 3) are finite there and differ from the answer and from each other everywhere (distinct nonzero multiples of 1/(2a − 3)). Mistake hint 1 is true (adding ½·4 gives right side −1, so y = −1/(a − 1.5) = −2/(2a − 3)); hint 2 is true (a = −1 gives −2).
- Solutions: every step redone; each ends with a check (substitution, multiplying back, a by-rows recomputation, or a limit). Correct throughout, including 3(c) (q = −3 null vector (−2, 1, 3); s = 2 exchanged matrix with pivots 2, 6, 1), 4(b) (−4 vs 0), 6(d) (P³ = I).
- Points: 16 + 14 + 20 + 16 + 18 + 16 = 100; the parts add up in every problem.
- calcs: every number box has an `answer:` entry equal to the page's value; the formula box has an identity entry checked against a numerical root; the choice boxes have supporting entries. Every `shown:` string appears verbatim in the page (checked by script). No stray control characters.
- Choice boxes: no backslash TeX; right answers at positions 2, 3, 1, 0, 1 (varied); similar lengths (the right one is the longest only in p2-c-count, "infinitely many" 15 characters vs "exactly three" 13: negligible); no choice answers another box.

## Coverage and order
- Lecture 1: row and column pictures (P1, P2), singular vs invertible (1c, 2b, 2c). Lecture 2: multipliers, pivots, back substitution, temporary and complete failure (P3); elimination matrices, associativity, AB ≠ BA, permutations on the left and on the right, inverse of E (P4). Lecture 3: entry, column, row and column-times-row ways and blocks (P5); the idea of the inverse and the singular case (P6, 5e). MIT's lecture order is kept.
- Lecture 3 split with Set 2 holds: no Gauss–Jordan (only named in the intro as Set 2's), no (AB)⁻¹, no LU, no transposes. 5(e) and 6(d) find inverses by reasoning about row operations, not by Gauss–Jordan.
- Determinants: the only mention is in the 3(a) solution check: "The lesson's rule that the product of the pivots is the determinant gives 2·(−3)·4 = −24; a later set computes determinants directly." It quotes the lesson (elimination-with-matrices, which states it at Lecture 2 transcript p. 5) and asks nothing. The calcs use cofactor determinants only as hidden independent checks. Acceptable.
- Level: MIT 18.06 Lectures 1 to 3; original problems, nothing that reads as copied from a textbook.

## Licensing
- Own problems and numbers; no MIT problem-set, quiz, exam or textbook text; no figures. The transcripts carry no "rights reserved" or "courtesy" notice (grep). No OpenStax or LibreTexts. No em dashes (0 found).

## Notes
- Citations checked against the transcript PDFs (no printed footer, PDF page counted): L1 p. 19 (the 12, 7 example), pp. 15 to 16 (columns in one plane, singular), pp. 9 to 12 (3 × 3 column picture); L2 pp. 1 to 2, 3 to 5, 5 to 7, 9, 13 to 16, 17 to 18, 18, 20; L3 pp. 2 to 4, 3 to 4, 8 to 9, 10 to 11, 12, 13 to 16. All right except the small range in item 5.
- `cite="mit"` with "(our own solution)" on solution formulas follows the reviewed Set 10 convention; statements use reading citations marked "(the matrix is our own)".
- No answer leak found: the "How to answer" examples (0.25, `(2*s - 1)/(s + 4)`, "row 2, column 3") answer no box; the hints guide without giving values (6(d)'s "how many times must you do it" points towards P² without naming it); no solution prints a later box's answer (2(b)'s solution says the new matrix is singular but gives neither b₃ nor the 2(c) count; 4(a) shows E₃₂ with +2 but not its inverse).
- `summary` names topics only. No `## Summary` section.
- Symbols: 43 page-scoped meanings, all fitting and none giving an answer; only ℓ is missing (item 1).
- content:check in the worktree: 0 errors; the only warning for this page is the missing review file. calc:test in the worktree: 24387 passed, 0 failed (includes every entry of this page).

COUNTS: errors=1 warnings=1 info=3

## Resolution (2026-11-28, by the page author)

- Error 1 (ℓ fell back to the cosmology meaning): entry `ell` now has a meaning scoped to this page, the elimination multiplier (ℓ₂₁, ℓ₃₁, ℓ₃₂).
- Warning 2 (`p6-c-x2` typed in): its formula is now computed, `solve('x2 + 2', 'x2', -10, 10)`.
- Info: the row-way citation in "What you need" now reads pp. 4–7. Other info items: no change.

Status set to `reviewed`.
