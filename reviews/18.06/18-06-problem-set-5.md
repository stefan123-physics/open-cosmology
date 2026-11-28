---
page: content/year-2/18.06/18-06-problem-set-5.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/55da11f77a97298e289472a651e76f4f_2IdtqGM6KWU.pdf (Lecture 11 transcript, 21 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/a587f8613d33cc5ccd1428584defaf61_6-wh6yvk6uc.pdf (Lecture 12 transcript, 24 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/47d18e420743b6c0ff2851531f805bfc_YzZUIYRCE38.pdf (Lecture 14 transcript, 24 PDF pages; read)
  - MIT problem-set, solution, quiz and final PDFs and Strang's textbook (not opened, by the course note's rule)
verdict: pass-with-notes
---

# Review: Problem Set 5: matrix spaces, graphs and orthogonal subspaces

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in the worktree `.claude/worktrees/ps-1806-5` (commit f585362), with `calcs/18.06/18-06-problem-set-5.yaml` and the page-scoped meanings in `data/symbols.json`. `npm run content:check` in the worktree: 0 errors; the only warning about this page is the missing review file.

## Blind solve

Solved from `stripped-set-5.mdx` only (before opening the page, its calcs or symbols). Checked with numpy (`rv5/blind.py`: constraint ranks for the matrix spaces, uvᵀ multiplied back, incidence matrices built from the edge lists, Aᵀy = 0 verified, all 4-edge trees enumerated by rank, AᵀCA built and the grounded system solved and substituted back).

My answers:
- 1(a) dim K = 3; dim Z = 6.
- 1(b) dim(Z intersect U) = 3; dim(Z + U) = 9.
- 1(c) dim(K intersect U) = 0; union of K and U: not a subspace.
- 1(d) y'' + 4y = 0: dimension 2; y''' = 0: dimension 3; solutions of y'' + 4y = 8: not a vector space.
- 2(a) u = (1, 4, -1), v = (3, 1, -2): u2 = 4, u3 = -1, v3 = -2.
- 2(b) rank B1 = 1 (second term is 2(0,1,1)(1,0,2), same row), rank B2 = 2.
- 2(c) largest 4 (min(2+3, 4)); smallest 1 (|3-2|, attained: B = -A + rank-one).
- 3(a) Ax = (2, 5, 3, 1, -1, 1, 2): entry 5 = -1, entry 7 = 2.
- 3(b) any 4 edges of rank 4; the 21 trees are listed by numpy (e.g. {1,2,4,5}; non-trees include {1,2,3,x}, {4,6,7,x}, {3,5,7,x}).
- 3(c) node 2: y1 - y3 - y4 - y7 = 0 gives y7 = -1; node 3: y2 + y3 - y5 = 0 gives y5 = -1 (nodes 4 and 5 check).
- 3(d) rank 4, dim N(Aᵀ) = 3; 5 - 7 + 3 = 1.
- 4(a) AᵀCA = [[4,-1,-3],[-1,3,-2],[-3,-2,5]]: (1,1) = 4, (2,3) = -2.
- 4(b) f3 = -1.
- 4(c) x1 = 3/11 = 0.2727 (x2 = 1/11), y3 = 3(x1 - x3) = 9/11 = 0.8182.
- 5(a) ||u||^2 = 15, ||u + w||^2 = 34, c = 5.
- 5(b) 2xᵀy = 4t - 4; t = 1.
- 5(c) Pair 1 yes, Pair 2 no, Pair 3 no, Pair 4 yes.
- 5(d) v in both: vᵀv = 0, so v = 0.
- 6(a) v1 yes, v2 no (B v2 = (2, 8, 10)), v3 yes.
- 6(b) c = -1; (1,0,2): not in C(B) (dot = -1); (2,1,3): in C(B) (dot = 0).
- 6(c) w3 = -2, w4 = -3.
- 6(d) (AᵀA)_12 = 18; x = (3, -1): second component -1.

Comparison with the page (all 47 boxes agree):
- p1-a-k 3 = 3; p1-a-z 6 = 6; p1-b-int 3 = 3; p1-b-sum 9 = 9; p1-c-int 0 = 0; p1-c-union "No, since a sum of two of its matrices can fall outside" = mine.
- p1-d-osc 2 = 2; p1-d-cubic 3 = 3; p1-d-inhom "No, because the zero function is not a solution" = mine.
- p2-a-u2 4, p2-a-u3 -1, p2-a-v3 -2: agree. p2-b-1 1, p2-b-2 2: agree. p2-c-max 4, p2-c-min 1: agree.
- p3-a-5 -1, p3-a-7 2: agree. p3-b "edges 1, 3, 4 and 7": in my list of 21 trees; the other three choices have rank 3 (each holds a loop). p3-c-5 -1, p3-c-7 -1: agree. p3-d-rank 4, p3-d-loops 3: agree.
- p4-a-11 4, p4-a-23 -2: agree (the page's full AᵀCA equals mine). p4-b -1: agree. p4-c-x1 0.2727, p4-c-y3 0.8182: agree; x = (3/11, 1/11, 0) gives AᵀCAx = (1, 0, -1) = f.
- p5-a-u 15, p5-a-sum 34, p5-a-c 5: agree. p5-b-gap 4*t - 4: identical to mine. p5-b-t 1: agree. p5-c-1..4 Yes, No, No, Yes: agree.
- p6-a-1..3 Yes, No, Yes: agree. p6-b-c -1, p6-b-1 No, p6-b-2 Yes: agree. p6-c-3 -2, p6-c-4 -3: agree. p6-d-12 18, p6-d-x2 -1: agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(c), solution, step "Check", last sentence | L11 pp. 12–13: Strang asks whether the rank-4 matrices among the 5 × 17 matrices form a subspace and says no, because the sum of two can have rank 5; he uses the inequality only as an upper bound (at most 8, and at most 5 by the shape) | "In Lecture 11 the same inequality, read the other way, shows that matrices of rank at most 4 in a space of 5 × 17 matrices are not a subspace" (an upper bound cannot show that) | Replace with: "In Lecture 11 Strang asks whether the matrices of rank at most 4 among the 5 × 17 matrices form a subspace: no, because the sum of two of them can have rank 5; the inequality only caps that sum at 8, and the shape caps it at 5 (transcript, pp. 12–13)." |
| 2 | warning | "What you need", Matrix spaces paragraph | (wording) | "the intersection (the matrices in both) is a subspace, and so is the sum $V + W$ holds all $v + w$ with ..." (two clauses run together; the sentence does not parse) | "... is a subspace, and so is the sum $V + W$, which holds all $v + w$ with $v$ in $V$ and $w$ in $W$ (pp. 4–6)." |
| 3 | warning | Choice boxes p1-c-union, p1-d-inhom, p3-b | (rule: right positions varied) | All three multi-choice boxes have `answer={2}` | Move the right choice of p1-c-union to the first place (`answer={0}`) and of p3-b to the last place (`answer={3}`); keep p1-d-inhom at 2. |
| 4 | info | Problem 4 statement ("fed in") and 4(b) last step | L12 pp. 22–23: e = Ax, y = Ce, Aᵀy = f, with no minus sign (the lecture's convention) | Follows the lecture's signs exactly. In a real circuit current flows from high to low potential (y = −CAx) and with row j of Aᵀy = (in) − (out) a source fed in gives Aᵀy = −f; the two signs cancel, so every number stands | Optional bracket in Problem 4: "(we keep the lecture's signs)". No change required. |
| 5 | info | Problem 3 statement | L12 p. 22: Strang's Euler example is a drawn graph with 5 nodes, 7 edges and 3 loops | The page's graph also has 5 nodes and 7 edges | Strang's edges are not in the transcript, so the edge list is the page's own; not a copy. No change. |

## Arithmetic and answer checks
- Every box recomputed independently (numpy, `rv5/blind.py`); all 47 equal my blind values.
- Problem 3 (incidence matrix built edge by edge): rank 4, dim N(Aᵀ) = 3, 5 − 7 + 3 = 1. The three loop currents of 3(d) satisfy Aᵀy = 0, and 2·loop 1 + 2·loop 2 − loop 3 = (2, −2, 1, 2, −1, 2, −1), the currents of 3(c). Only {1, 3, 4, 7} of the four choices is a tree; the page's reason for each wrong set is right (including "nodes 1 and 3 cut off" for {2, 4, 6, 7}), and row 1 + row 3 − row 2 = 0 is right.
- Problem 4: AᵀCA = [[4,−1,−3],[−1,3,−2],[−3,−2,5]], symmetric, row sums zero, rank 2; f3 = −1; grounded x = (3/11, 1/11, 0), y = CAx = (2/11, −2/11, 9/11), Aᵀy = (1, 0, −1). The page's check step matches.
- Formula box p5-b-gap: answer 4t − 4; mistakes 2t − 2 and 4t are finite on t in [2, 5] and differ from the answer everywhere there (differences 2t − 2 ≥ 2 and 4); both hints are true of their formulas (2t − 2 is xᵀy alone; 4t is what dropping 2·(−1) gives). The range avoids t = 1, where 2t − 2 and 4t − 4 coincide.
- Tolerances: every number box has `tolerance="0.01"`, as "How to answer" says. For the integer answers this rejects every sign slip and off-by-one; in 4(c) it rejects x2 = 0.0909 given for x1, 3/11 given for y3, and −0.8182.
- Solution steps checked line by line: 1(a) basis of K; 1(b) the example matrix is in Z (row sums 0, 0, 0); 1(c) k + I is outside K and U; 1(d) the bases and the counterexample 2 + 2; 2(a) multiply-back; 2(b) B1 = (1,3,2)(1,0,2), B2 = [[1,0,2],[1,1,3],[0,1,1]] with row 2 = row 1 + row 3; 2(c) the E_ij examples have ranks 1, 4 and 3 as stated; 5(a) u + w = (3,3,4,0); 5(b) the t = 2 check 19 − 9 − 6 = 4; 5(d) the Pair 3 converse (the line meets the plane only at 0); 6(a) special solutions (−2,1,0,0), (1,0,−3,1), v3 = −first + second; 6(b) (2,1,3) = 2·col 1 − 3·col 3; 6(c), 6(d) multiplied back. All correct; every part ends with a check.
- No hint gives a box's answer; no opened solution prints a later box's answer; the "How to answer" examples (0.5, `(k + 2)/(k - 3)`) answer no box.
- Calcs: every `shown:` string occurs in the page text (`rv5/shown.py`); every number and formula box has an `answer:` entry. Info: `p3-d-rank` (7 − (7 − (5 − 1))) is the page's route n − 1 in another form, not an independent route; the rank is confirmed by my numpy matrix_rank. Optional: say so in its `where:`.

## Coverage and order
- Problems 1–2 practise Lecture 11 (matrix spaces, intersection and sum with the dimension formula, solution spaces of differential equations, rank one, rank of a sum); 3–4 Lecture 12 (incidence matrix, potential differences, trees, current law, loops, Euler, AᵀCA, grounding); 5–6 Lecture 14 (orthogonal vectors, Pythagoras, orthogonal subspaces, complements, N(AᵀA) = N(A)). MIT's lecture order is kept; Lecture 13 (quiz review) is rightly skipped.
- No projections or least squares (left to Set 6, whose six exercises are projections, least squares, Gram–Schmidt and an orthogonal matrix); no determinants. Set 4's "Counting dimensions" problem is not repeated: m − r appears here only as a step in the graph and left-nullspace parts.
- Level fits MIT 18.06; all problems, matrices, graphs and numbers look original.
- Citations checked against the transcripts (PDF pages): L11 p. 3 (dim 9), p. 5 (intersection; union "a couple of lines in the plane"), p. 7 (dimension formula), pp. 7–9 (y'' + y = 0, dimension two), pp. 10–11 (rank one, column times row), pp. 12–13 (rank of a sum); L12 pp. 3–5 (incidence matrix, −1 leaves, +1 enters), pp. 8–10 (rank n − 1), p. 9 (grounding), pp. 13–15 (current law), pp. 16–17 (loop currents), pp. 19–20 (tree), pp. 20–21 (m − r loops, Euler), pp. 22–23 (e = Ax, y = Ce, Aᵀy = f), p. 24 (symmetric); L14 pp. 4–6 (length, Pythagoras expansion), pp. 7–9 (definition, wall and floor, shared vector), pp. 10–12 (row space orthogonal to nullspace, combinations, column space and left nullspace), pp. 13–15 (complements), pp. 22–23 (AᵀA, same nullspace and rank). All correct. `cite="mit"` with "(our own solution)" follows the Set 10 convention.

## Licensing
- Own problems only; no MIT problem, quiz or textbook text; no figures; the three transcripts carry no "All rights reserved" or "Courtesy of" material used here. No OpenStax or LibreTexts. No em dashes (grep: 0).

## Notes
- Writer's doubt 1 (the 3(b) solution plus "the rank is n − 1" in the preamble giving away the rank box of 3(d)): judged acceptable (info). The preamble states the lesson's general rule, as every "What you need" does; the box still asks the reader to see that this graph is connected and apply it. The opened 3(b) solution proves four rows independent (rank at least 4) but never prints the rank or dim N(Aᵀ). Optional: if the box should be less of a plug-in, drop "and the rank is n − 1" from the preamble and keep "N(A) is the line of constant vectors".
- Writer's doubt 2 (5(c)'s second hint nudging Pair 2): judged acceptable (info). It is a question pointing to the lecture's key test, and the first hint already settles Pair 2 by dot products ((0,1,0)·(0,1,0) = 1). It previews the statement 5(d) asks to prove, which is harmless since 5(d) has no box.
- Choice boxes: lengths are fine (the right choice is neither longest nor shortest), and no choice answers another; only the positions need varying (warning 3).
- Symbols: every letter has a page-scoped meaning that fits (K, Z, U, M, k, p, q, s, E_ij, B_1, B_2, P, S, T, t, w_3, w_4, f_3 and the rest); none gives an answer away. `summary` names topics only.
- Info: in the 1(a) check, "K is the opposite of the symmetric matrices" is vague; "K together with the symmetric matrices, which have 3 + 3 = 6 free entries" would be clearer.

COUNTS: errors=0 warnings=3 info=6

## Resolution (2026-11-28, by the page author)

- 1 (warning, 2(c) check): fixed. The sentence now says Strang asks whether the matrices of rank at most 4 among the 5 × 17 matrices form a subspace, answers no because a sum of two can have rank 5, and that the inequality only caps the sum at 8 and the shape at 5. Transcript pages 12–13 rechecked in the Lecture 11 PDF (the question starts on p. 12, the rank-5 answer and the bound of 8 are on p. 13).
- 2 (warning, "What you need"): fixed: "and so is the sum $V + W$, which holds all $v + w$ with ...".
- 3 (warning, choice positions): fixed. p1-c-union's right choice is now first (`answer={0}`), p3-b's last (`answer={3}`), p1-d-inhom stays at 2; choice texts unchanged, so the lengths stay balanced (the right choice is neither longest nor shortest).
- 4 (info, signs in Problem 4): no change; the page keeps the lecture's signs.
- 5 (info, Euler graph): no change; the edge list is our own.
- Info (writer's doubt 1, rank n − 1 in the preamble): no change, as judged acceptable.
- Info (writer's doubt 2, 5(c) hint): no change, as judged acceptable.
- Info (1(a) check wording): reworded to "$K$ together with the symmetric matrices, which have $3 + 3 = 6$ free entries, fills $M$" (calcs `p1-a-check` shown string updated to match).
- Info (calcs `p3-d-rank`): now an independent route from the entries of A: a nonzero 4 × 4 minor (rows 1, 2, 4, 5, columns 2 to 5, lower triangular, determinant 1) gives rank ≥ 4, and the seven zero row sums give rank ≤ 4; no use of n − 1.
- Status set to `reviewed`.
