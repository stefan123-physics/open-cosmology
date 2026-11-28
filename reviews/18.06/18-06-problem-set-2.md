---
page: content/year-2/18.06/18-06-problem-set-2.mdx
reviewed: 2026-11-28
sources_read:
  - stripped-set-2.mdx (read first, alone, for the blind solve)
  - .claude/worktrees/ps-1806-2/content/year-2/18.06/18-06-problem-set-2.mdx (read, after the blind solve was written)
  - .claude/worktrees/ps-1806-2/calcs/18.06/18-06-problem-set-2.yaml (read, after the blind solve)
  - .claude/worktrees/ps-1806-2/data/symbols.json, meanings scoped to 18-06-problem-set-2 (read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/07f82f7a07458fb3d79d1ba5cf53fa1e_FX4C-JpTFgY.pdf (Lecture 3 transcript, read, 24 PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/bcac89b9054d2f1b8efc7b8c1a859068_MsIvs_6vC38.pdf (Lecture 4 transcript, read, 23 PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/c69adb4aa79fccdc5d4225163689471e_JibVXBElKL0.pdf (Lecture 5 transcript, read, 21 PDF pages)
  - stripped-set-1.mdx and the lesson transposes-permutations-vector-spaces.mdx (read, only to check the Lecture 3 split and one claim)
  - Strang's textbook, MIT's problem-set, solution, quiz and final PDFs (not opened, as instructed)
verdict: pass-with-notes
---

# Review: Problem Set 2: inverses, A = LU, permutations and subspaces

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

My answers (written from the stripped statements only, before opening the full page; every value checked in sympy, by multiplying back):

- 1(a) A^-1 = [[4,-2,1],[-3,2,-1],[1,-1,1]] (A^-1 A = I): (1,1) = 4, (1,2) = -2, (2,3) = -1.
- 1(b) x = A^-1 b = (6, -5, 3), Ax = (1, 0, 2): x_2 = -5.
- 1(c) breaks down at t = 2.5 (second pivot 5 - 2t = 0); (B^-1)_11 = 5/(5 - 2t).
- 2(a) A^-1 = [[1,-1],[-1,2]], B^-1 = [[1,0],[-3,1]], (AB)^-1 = B^-1 A^-1 = [[1,-1],[-4,5]]: (2,1) = -4, (2,2) = 5.
- 2(b) (BA)^-1 = A^-1 B^-1 = [[4,-1],[-7,2]]: (1,1) = 4, (2,1) = -7.
- 2(c) (ABC)(C^-1 B^-1 A^-1) = I by regrouping; (A^-1)^T = (A^T)^-1 = A^-1.
- 3(a) l21 = 2, l31 = -1, l32 = 2; U = [[2,1,1],[0,3,1],[0,0,4]]: third pivot 4.
- 3(b) E_31 = l21 l32 - l31; for this A, 5.
- 3(c) U' = [[1,1/2,1/2],[0,1,1/3],[0,0,1]]: (2,3) = 1/3 = 0.3333.
- 3(d) c = (3, -1, 8): c_3 = 8; x = (1, -1, 2): x_2 = -1.
- 4(a) sum = 338350; minus 10^6/3 gives 15050/3 = 5016.67 (nearest whole number 5017).
- 4(b) 9 s; 1000 right-hand sides.
- 4(c) factor 8.
- 5(a) after step 1 the (2,2) position is 0 (rows 2 and 3 become (0,0,1) and (0,1,2)): exchange rows 2 and 3 at the second pivot. PA = [[1,2,1],[3,7,5],[2,4,3]]; L = [[1,0,0],[3,1,0],[2,0,1]], U = [[1,2,1],[0,1,2],[0,0,1]]: L_21 = 3, U_23 = 2.
- 5(b) k = 3; 4 x 4 permutation matrices equal to their inverse: 1 + 6 + 3 = 10 (enumerated over all 24).
- 5(c) P^-1 = P^T, so P = P^-1 iff P = P^T.
- 6(a) RR^T = [[5,4],[4,6]]: (1,2) = 4; R^TR = [[5,2,4],[2,1,1],[4,1,5]]: (2,3) = 1; trace 11.
- 6(b) A + A^T (also A A^T and A^T A) is symmetric for every square A; choices not visible in the stripped file.
- 6(c) (A^T S A)^T = A^T S^T A = A^T S A.
- 7(a) S1 yes, S2 no (no zero vector), S3 no (not closed under addition), S4 yes.
- 7(b) s = 1 (b = 2 col1 + 3 col2); second column space: the line through (1, 0, 2).
- 7(c) intersection closed under sums and multiples; union of the x-axis and the y-axis fails: (1,0,0) + (0,1,0).

### Comparison with the page (one line per answer id)

All 31 boxes agree with my blind answers; there is no disagreement to resolve.

- p1-a-11 = 4, p1-a-12 = -2, p1-a-23 = -1: agree.
- p1-b = -5: agrees.
- p1-c-t = 2.5: agrees. p1-c-11 = 5/(5 - 2*t): agrees (sympy gives -5/(2t - 5), the same function).
- p2-a-21 = -4, p2-a-22 = 5: agree.
- p2-b-11 = 4, p2-b-21 = -7: agree.
- p3-a-l31 = -1, p3-a-l32 = 2, p3-a-piv = 4: agree.
- p3-b-num = 5, p3-b-gen = l21*l32 - l31: agree (symbolic product E32 E31 E21, entry (3, 1)).
- p3-c = 0.3333: agrees.
- p3-d-c3 = 8, p3-d-x2 = -1: agree.
- p4-a = 5017 (tolerance 1; exact 5016.67): agrees.
- p4-b-t = 9, p4-b-k = 1000: agree.
- p4-c = "8": agrees.
- p5-a-swap = "rows 2 and 3, at the second pivot", p5-a-l21 = 3, p5-a-u23 = 2: agree (sympy LU of PA; LU = PA).
- p5-b-k = 3, p5-b-inv = 10: agree.
- p6-a-12 = 4, p6-a-23 = 1, p6-a-tr = 11: agree. p6-b = "A + A^T": agrees.
- p7-a-1 Yes, p7-a-2 No, p7-a-3 No, p7-a-4 Yes: agree.
- p7-b-s = 1, p7-b-line = "the line through the origin and the point (1, 0, 2)": agree.
- Self-marked parts 2(c), 5(c), 6(c), 7(c): the page's arguments match mine and are complete.

## Differences from the MIT source

The problems are our own (there is no MIT problem text to compare with); the table lists differences from the lecture transcripts the page cites, and page-level faults.

| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(d) solution, "The idea" | Lecture 4 p. 19: "the cost for every right hand side is n squared" (forward elimination and back substitution together) | "Each step costs about $n^2$ operations" (each of $Lc = b$ and $Ux = c$) | "The two steps together cost about $n^2$ operations (about $\frac12n^2$ each), which is why one factorization serves many right-hand sides." |
| 2 | warning | Problem 7(a) solution, Check | Lecture 5 shows the quarter plane (pp. 13–14) and a line that misses the origin (pp. 15–16); it has no union of two lines | "$S_3$ is like the lecture's two lines in $\mathrm{R}^2$ taken together" | Drop "the lecture's": "$S_3$ is like two lines through the origin in $\mathrm{R}^2$ taken together (the lesson's quiz): multiples stay inside, sums do not." |
| 3 | warning | "What you need", Lecture 5 paragraph | Lecture 5 p. 3 states n!; p. 4 gives 24 and 120 | "there are $n!$ of size $n \times n$ (p. 4)" | Change to "(pp. 3–4)". |
| 4 | warning | data/symbols.json, meaning of A on this page | n/a | "A square matrix: in each problem the matrix given there (to invert, to factor, or with given columns); in Problem 6 any square matrix" | A is 3 × 2 in Problem 7(b) and n × m in 6(c). Write: "A matrix: in each problem the matrix given there (square in Problems 1 to 5 and 6(b), 3 × 2 with the given columns in 7(b), any n × m matrix in 6(c))." |
| 5 | warning | Choice boxes p4-c, p5-a-swap, p6-b | n/a | The right choice is the third in three of the four multi-choice boxes (answer={2}); only p7-b-line has it elsewhere (second) | Vary positions, e.g. p4-c choices ["8", "4", "16", "2"] with answer={0}; p6-b choices ["$A - A^T$", "$A^2$", "$A^TA^2$", "$A + A^T$"] with answer={3}. |
| 6 | info | Problem 3(c) solution formula | n/a | label="A = LDU'" while the tex shows $U = DU'$ | Rename the label "U = DU'". |
| 7 | info | "What you need", permutations | Lecture 4 pp. 20–23 first lists the six 3 × 3 permutations, says the inverse is the transpose and gives 4! = 24; Lecture 5 pp. 2–4 recalls them | Attributed to Lecture 5 only | Optional: add "(first met at the end of Lecture 4, pp. 20–23)". The Lecture 5 citations are correct as they stand. |

## Arithmetic and answer checks
- Every matrix recomputed in sympy and multiplied back: A⁻¹A = I (1a), Ax = b (1b, 3d), B⁻¹ for symbolic t (1c), (AB)⁻¹ = B⁻¹A⁻¹ and (BA)⁻¹ = A⁻¹B⁻¹ against direct inversion (2a, 2b), LU = A and EA = U with E = E32E31E21 for these multipliers (3a, 3b), LDU' = A (3c), LU = PA (5a), Q³ = I with Q and Q² not I (5b), RRᵀ and RᵀR (6a). Every number inside the solutions and checks is right: the Gauss–Jordan rows of 1(a), the t = 2 inverse in 1(c), AB = (5 1; 4 1) and BA = (2 1; 7 4), E = (1 0 0; -2 1 0; 5 -2 1) and EL = I, Eb third component 8, 338 350 and 1.5 per cent, 9 × 10⁶ operations and 0.009 s per right-hand side, 72 s for n = 6000, 10 + 8 + 6 = 24 and 1 + 3 = 4 for 3 × 3, the RᵀSR entries 2 and 2, (2, 3, 1) in 7(b).
- Formula boxes: p1-c-11 vars t in [0.5, 1.5] keep 5 - 2t >= 2, finite; the mistakes 1/(5 - 2t) and 5/(5 + 2t) are finite and differ from the answer over the whole range (the second equals it only at t = 0, outside the range). p3-b-gen vars in [0.5, 3]: mistake -l31 differs by l21*l32 >= 0.25, mistake l21*l32 + l31 differs by 2*l31 >= 1. Each mistake hint is true of its formula (1/(5 - 2t) is the (2, 2) entry of B⁻¹; the sign of ℓ₃₁ hint is right).
- Tolerances: every number box has an explicit tolerance (0.01, or 1 for p4-a and p4-b-k). 0.01 rejects the obvious slips: a sign, a transposed entry (p1-a-12 = -2 against (2, 1) = -3; p2-a-21 = -4 against (1, 2) = -1; p2-b-21 = -7 against (1, 2) = -1), the wrong order ((AB)⁻¹ and (BA)⁻¹ differ in every asked entry), the old multiplier in 5(a) (2 against 3), the reciprocal in 3(c) (3 against 1/3), and 0.33 is accepted for 1/3.
- Problem 4, tolerance 1 (task point): fair, and said in the statement ("this box accepts any value within 1"; "(The second box accepts any value within 1.)") and in How to answer ("Problem 4 says its own tolerance"). p4-a: exact 5016.67, page value 5017; the box accepts 5016, 5016.67 and 5017, and rejects the likely slips 5000 (only ½n²) and about -4983 (sum to 99). p4-b-k: 1000 exactly; the slips 3000 (ratio n) and 333 333 are rejected.
- The count of 4 × 4 involutions (task point): 10 is right (identity 1, single swaps C(4, 2) = 6, double swaps 3), confirmed by enumerating all 24 permutations of four rows (10 with p(p(i)) = i). The page's check (8 three-cycles, 6 four-cycles, 10 + 8 + 6 = 24) is also right.
- Writer's doubt on 2(a) and 2(b) (task point): 2(a)'s opened solution prints A⁻¹, B⁻¹ and (AB)⁻¹, but neither (BA)⁻¹ nor any of 2(b)'s entries. 2(a)'s statement already asks the student to find A⁻¹ and B⁻¹, so they are inputs, not answers, and 2(b) still needs the reverse-order rule and one product (and the wrong order gives (1, 1) = 1 and (2, 1) = -4, both rejected). Not a leak; no change needed. 1(a) to 1(b) and 3(a) to 3(c)/(d) follow the same pattern (A⁻¹, L and U printed; each later box needs a further step).
- Choice boxes: no backslash TeX in choices; similar lengths (p5-a-swap 30 to 32 characters; p7-b-line 39 to 52, the right one second-longest; p4-c single numbers; p6-b short expressions); choices do not answer each other. Positions: see warning 5.
- Calcs: each `answer:` entry matches its box's value or expr, and each box is checked by a route independent of the page's solution (cofactors, Cramer's rule, a cross product, the explicit matrix product, the sum formula's lower terms). Every `shown:` string occurs verbatim in the page (checked by script). `npm run calc:test` in the worktree: 24380 passed, 0 failed.

## Coverage and order
- MIT's lecture order 3, 4, 5 is kept: Problems 1–2 (Gauss–Jordan, singularity, (AB)⁻¹), 3–4 (A = LU, E against L, LDU, cost of elimination), 5–6 (PA = LU, permutations, transposes, symmetric products), 7 (vector spaces, subspaces, column space). Nothing in the three lectures is left out that a problem set should practise.
- Lecture 3 split with Set 1 (task point): respected. Set 2 has no problems on multiplication by rows, columns or blocks; its Lecture 3 content is Gauss–Jordan (1a, 1c), A⁻¹b (1b) and the breakdown at a zero pivot (1c). (AB)⁻¹ is at Lecture 4 pp. 1–2 in the transcript and is cited there. Small overlaps with Set 1, info only: Set 1 also has a parameter-t singularity question (its Problem 6), and Set 1 asks for the inverse of the same cyclic permutation (0 0 1; 1 0 0; 0 1 0) that 5(b) here calls Q, whose solution prints Q⁻¹ = Q² = Qᵀ (Set 1's answer). Consider using Qᵀ in 5(b), which keeps every answer here.
- No determinants in the page text (the calcs use cofactors only as an independent check).
- Level and originality: MIT 18.06 level; every matrix looks original (none is one of Strang's lecture matrices (1 3; 2 6), (1 3; 2 7), (2 1; 8 7), (1 2 4; 3 3 1), nor a familiar textbook example).
- Every box is named in its part's statement and asks for exactly one entry, pivot, count, formula or choice.

## Licensing
- Our own problems only; no MIT, textbook, OpenStax or LibreTexts material; no figures. The transcripts are paraphrased, with no verbatim passages.
- `cite="mit"` with at="Problem N (our own problem)" for statement matrices follows the model Set 10, although the course note says never to use `cite="mit"` for our own statements. Consistent with the model; info only, for the owner to settle across sets.

## Notes
- Citations checked against the transcript PDF pages (no printed footer, so PDF page numbers): Lecture 3 p. 12 (the inverse), pp. 14–16 (Ax = 0), pp. 19–22 (Gauss–Jordan), pp. 23–24 (EA = I); Lecture 4 pp. 1–3 (inverse of a product, inverse of the transpose), pp. 6–7 (LDU), p. 8 (A = LU), pp. 9–12 (the 10 and the multipliers in L), pp. 17–18 (the sum and ⅓n³), p. 19 (n² per right-hand side), pp. 20–22 (the six 3 × 3 permutations); Lecture 5 p. 2 (PA = LU), pp. 3–4 (P⁻¹ = Pᵀ), pp. 5–9 (transpose, symmetric, RᵀR), pp. 10–16 (vector spaces, zero vector), p. 17 (subspaces of R³), pp. 18–20 (column space; p. 20 for two columns on one line). All right except warning 3.
- "What you need" includes dividing by the pivots in Gauss–Jordan; Strang's example has pivots 1, but the Lecture 3 lesson covers the division, so this is fine.
- Hints: none states a box's answer. Problem 7(a)'s second hint ("two planes together") all but answers the S₃ box; acceptable as a second hint (info). Problem 5(a)'s first hint points at the (2, 2) position; acceptable.
- `summary` names topics only. No em dashes (0), no stray control characters. The "How to answer" examples (0.75, 3/4, (2*t - 1)/(t + 3), l21) answer no box. Points add to 100 overall and within each problem.
- Symbols: every letter on the page has a page-scoped meaning (A, B, C, D, E, E₂₁, E₃₁, E₃₂, I, L, P, Q, R, S, S₁ to S₄, T, U, U′, V, W, b, c and c₁ to c₃, i, j, k, m, n, r₁ to r₃, s, t, x and x₁ to x₃, y, ℓ₂₁, ℓ₃₁, ℓ₃₂, A_ji); none gives an answer away; only A is inaccurate (warning 4).
- I did not run `npm run content:check` (it would only confirm the symbol and exercise rules, which I checked by hand).

COUNTS: errors=0 warnings=5 info=7

## Resolution (2026-11-28, by the page author)

- 1 (warning, 3(d) cost): now "The two steps together cost about $n^2$ operations (about $\frac12n^2$ each)", as the review suggests.
- 2 (warning, 7(a) check): "the lecture's" dropped; now "like two lines through the origin in R² taken together (the lesson's quiz)".
- 3 (warning, n! citation): "(p. 4)" changed to "(pp. 3–4; ...)".
- 4 (warning, symbol A): this page's meaning of A now reads "A matrix: in each problem the matrix given there (square in Problems 1 to 5 and 6(b), 3 × 2 with the given columns in 7(b), any n × m matrix in 6(c))."
- 5 (warning, choice positions): p4-c is now ["8", "4", "16", "2"] with answer 0 and p6-b ["$A - A^T$", "$A^2$", "$A^TA^2$", "$A + A^T$"] with answer 3; with p5-a-swap (third) and p7-b-line (second) the right choices now sit first, second, third and fourth.
- 6 (info, 3(c) label): the formula label is now "U = DU'", matching its tex.
- 7 (info, permutations): "What you need" now adds "first met at the end of Lecture 4, pp. 20–23".
- Info (overlap with Set 1): 5(b) now uses the other 3-cycle, Qᵀ of the old matrix, (0 1 0; 0 0 1; 1 0 0), moving row 1 to row 3, row 3 to row 2 and row 2 to row 1; the solution's Q⁻¹ = Q² = Qᵀ is no longer Set 1's answer. Both answers (k = 3, 10) are unchanged; the solution's row positions and the calcs `where` text were updated.
- Info (cite="mit" for our own statements): kept as it is, following the model Set 10, for the owner to settle across sets.
- Info (7(a) second hint, 5(a) first hint): kept, as the review finds them acceptable.
- Status set to reviewed.
