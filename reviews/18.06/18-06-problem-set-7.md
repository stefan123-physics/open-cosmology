---
page: content/year-2/18.06/18-06-problem-set-7.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/9c507ce90715ff08ef19d404938a00fa_srxexLishgY.pdf (Lecture 18 transcript, 21 PDF pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/fa572a369c5feb991dabe351a9741f03_23LLB9mNJvc.pdf (Lecture 19 transcript, 28 pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/de52fa820f50feb22e656ebf77c26308_QNpj-gOXW9M.pdf (Lecture 20 transcript, 24 pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/8d0f7baefcedee6596eaab43c55122fe_cdZnhQjJu4I.pdf (Lecture 21 transcript, 26 pages; read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e6dfacf484d184018188a4e70f93db81_13r9QY6cmjc.pdf (Lecture 22 transcript, 25 pages; read)
  - MIT 18.06 problem-set PDFs, solutions and Strang's textbook: deliberately not opened (owner rule; the set is our own problems only)
verdict: needs-changes
---

# Review: Problem Set 7: determinants, eigenvalues and powers of a matrix

Writer: Opus. Reviewer: Opus (same model, blind). Fresh context; the blind answers below were written into this file before the full page, its calcs file or the symbols were opened. Every number was recomputed with SymPy/NumPy (`blind.py` in the scratch review folder).

## Blind solve

Written from the stripped statements only, before the full page, its calcs or symbols were opened. Writer: Opus. Reviewer: Opus (same model, blind). Checked with sympy (`blind.py` in the review scratch folder).

### My answers
- 1(a) det(3A) = 3^4 (-2) = -162
- 1(b) (-8)/(2^4 (-2)) = 0.25
- 1(c) exchange: +2; add a multiple: +2; row times -3: -6. det B = -6
- 1(d) whichever option needs more than det A (e.g. det(A+I), trace, an entry, eigenvalues): to be judged against the choices
- 2(a) det M = 8
- 2(b) 2 nonzero terms (a12 a21 a34 a43 = 12, even, +; a14 a22 a33 a41 = 4, odd, -; 12 - 4 = 8)
- 2(c) C43 = 6
- 2(d) C41 = -4; row 4 = (1,0,2,0): 1(-4) + 2(6) = 8 (C42 = 8, C44 = -24 not needed)
- 3(a) D3 = 15
- 3(b) q = 2 (D1 = 3, D2 = 7)
- 3(c) D_n = 2^(n+1) - 1 (checked n = 1..8)
- 4(a) det N = 5
- 4(b) (N^-1)_23 = C32/det N = -3/5 = -0.6
- 4(c) det B1 = 10, x1 = 2 (full solution x = (2, -1, -1))
- 4(d) = 0: it is the determinant of N with row 3 replaced by row 1 (two equal rows)
- 5(a) area = 21/2 = 10.5
- 5(b) volume = 16
- 5(c) det T = -3, new volume |16(-3)| = 48
- 5(d) unchanged, 16
- 6(a) 2, 5, 6
- 6(b) eigenvector (4, -4, 3): third component 3
- 6(c) det(G - 4I) = (2-4)(5-4)(6-4) = -4
- 6(d) t = 0.5 (discriminant 4 - 8t); double eigenvalue 2, only one independent eigenvector, multiples of (1, 2)
- 7(a) 2, 3
- 7(b) S = [[1,2],[1,3]], Lambda = diag(3,2); (K^k)_21 = 3^(k+1) - 3*2^k (k=1..5: 3, 15, 57, 195, 633)
- 7(c) u0 = 2(1,1) + 1(2,3); u5 = (550, 582); second component 582
- 8(a) A = [[1,6],[1,0]], eigenvalues 3 and -2; ratio -> 3
- 8(b) g_k = 3^k - (-2)^k; g12 = 531441 - 4096 = 527345
- 8(c) h = 4: geometric multiplicity 1 (algebraic 2); diagonalisable only for h = 0

### Comparison (my answer vs the page, one line per answer id)
- p1-a: -162 vs -162. Agree.
- p1-b: 0.25 vs 0.25. Agree.
- p1-c: -6 vs -6. Agree.
- p1-d: "det(A + I)" (index 3) vs answer={3}. Agree; the other three choices are computable (-32, -2, 1), checked.
- p2-a: 8 vs 8. Agree (elimination steps and pivots 2, 3, 4, -1/3 checked).
- p2-b: 2 vs 2. Agree. Counted independently by enumerating all 24 permutations in SymPy: exactly two nonzero products, 12 (permutation (2,1,4,3), even) and 4 (permutation (4,2,3,1), odd). The calcs entry `1 + 1` is not an independent route; this enumeration is.
- p2-c: 6 vs 6. Agree.
- p2-d (no box): C41 = -4, 1(-4) + 2(6) = 8. Agree.
- p3-a: 15 vs 15. Agree.
- p3-b: q = 2 vs 2. Agree.
- p3-c: 2^(n+1) - 1 vs `2^(n+1) - 1`. Agree (identical; also checked n = 1..8 against the determinants of T_n).
- p4-a: 5 vs 5. Agree.
- p4-b: -0.6 vs -0.6. Agree.
- p4-c-det: 10 vs 10; p4-c-x: 2 vs 2. Agree.
- p4-d (no box): 0, two equal rows. Agree.
- p5-a: 10.5 vs 10.5. Agree.
- p5-b: 16 vs 16. Agree.
- p5-c: 48 vs 48. Agree (det T = -3, det of the new edge matrix -48, checked by SymPy directly).
- p5-d: "stays the same" vs answer={1}. Agree.
- p6-a-1/2/3: 6, 5, 2 vs 6, 5, 2. Agree.
- p6-b: 3 vs 3. Agree.
- p6-c: -4 vs -4. Agree.
- p6-d-t: 0.5 vs 0.5. Agree. p6-d-vec: single line through the origin (multiples of (1, 2)) vs answer={2}. Agree.
- p7-a-big/small: 3, 2 vs 3, 2. Agree.
- p7-b: 3^(k+1) - 3*2^k vs `3^(k+1) - 3*2^k`. Agree (identical; k = 1..5 checked against powers of K).
- p7-c: 582 vs 582. Agree (u5 = (550, 582) by direct multiplication).
- p8-a: 3 vs 3. Agree.
- p8-b: 527345 vs 527345. Agree.
- p8-c-geo: 1 vs 1. Agree. p8-c-diag: h = 0 only vs answer={0}. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 8(a), solution, Check step | (answer leak, not an MIT difference) | "further on, $527345/179195 \approx 2.94$ and, one step on, about $3.04$": 527345 is the answer of the next box, p8-b ($g_{12}$), and a reader who opens 8(a)'s solution before 8(b) sees it next to $g_{11}$ | Replace with ratios that do not contain g₁₂, e.g. "then $6305/2315 \approx 2.72$ and $20195/6305 \approx 3.20$: the ratio swings above and below 3 and closes in". Change calcs `p8-a-r2` to `6305/2315` = 2.7235 (shown "≈ 2.72") and `p8-a-r3` to `20195/6305` = 3.2030 (shown "≈ 3.20"); `p8-g8`, `p8-g9` already hold 6305 and 20195. (Ratios checked: 2.7235, 3.2030.) |
| 2 | error | `data/symbols.json`, entry `G` | (symbols) | G has no meaning scoped to this page, so its popup and "Symbols on this page" show the general meaning "Newton's gravitational constant, G ≈ 6.674 × 10⁻¹¹ m³ kg⁻¹ s⁻²" for the matrix of Problem 6 | Add to `G` the meaning `{"text": "The 3 × 3 matrix of Problem 6.", "pages": ["18-06-problem-set-7"]}` (no unit) |
| 3 | warning | `data/symbols.json`, entry `B` (meaning for this page) | (symbols) | "The matrix made from A by three row operations (Problem 1(c))"; but B is also the general second matrix in the reminder formula $\det AB = (\det A)(\det B)$ and in the 1(d) solution "$\det(A + B)$ has no rule" | Widen this page's meaning to "In the reminders and in the solution of 1(d), any second square matrix of the same size as A; in Problem 1(c), the matrix made from A by three row operations." |
| 4 | warning | Problem 8(b): statement, answer label, formula; `data/symbols.json` entry `g-12` | (read-aloud) | The form $g_{12}$ is a symbol-level entry spoken "g one two" (right for the metric component g₁₂ in `geodesic-equation`, wrong here, where it is the twelfth number, "g twelve"). `spoken` is per symbol, not per meaning, so it cannot be changed for this page alone | Write the index as a value of k on this page: statement "Find $g_k$ for $k = 12$ from the eigenvalues and eigenvectors.", label "$g_k$ for $k = 12$:", and in the formula "$g_k = 3^k - (-2)^k$, so for $k = 12$: $531441 - 4096 = 527345$" (and the check "$179195 + 6 \cdot 58025 = 527345$" as it is); then remove the `18-06-problem-set-7` meaning from `g-12` (content:check fails on a meaning scoped to a page that does not use it). Update calcs `shown:` strings of `p8-b`, `p8-b-eig` |
| 5 | warning | Exercise 8 title and the frontmatter `summary` | (answer leak) | "A recurrence, and a matrix that cannot be diagonalised" tells the reader before 8(c) that W (with h = 4) is not diagonalisable, which gives away the geometric multiplicity 1 for p8-c-geo and steers p8-c-diag away from "for every real number h" | Retitle "A recurrence, and a matrix with a repeated eigenvalue", and in the summary replace "a matrix that cannot be diagonalised" by "when a matrix with a repeated eigenvalue can be diagonalised" |
| 6 | info | "What you need", $\det 2A = 2^n\det A$ vs 1(a) $\det(3A)$ | Lecture 18 transcript p. 17–18: the determinant of 2A, "two to the nth" | The reminder states the rule for the factor 2; 1(a) asks for the factor 3 with n = 4 | Not a leak in my judgement: the reminder is a rule from the cited place, and 1(a) still asks the reader to see that the factor is $c^n$ and to put in n = 4. Leave as is |
| 7 | info | 1(d) hint, 2(b) hint, 3(c) solution route, 6(d) | - | 1(d) "Try two diagonal matrices with the same determinant" points to a method, not to a choice; the 2(b) hint gives no count (the "two" in the 2(d) hint is about row 4's entries and comes after the 2(b) box); 3(a) and 3(b) give D₁, D₂, D₃ = 3, 7, 15, which is the discovery route the 3(c) hint asks for, not a leak; 6(d)'s "are complex, not real" choice is a fair distractor (at t = ½ the eigenvalue 2 is real) | None |
| 8 | info | Problem 2(c) solution | - | Ends without a "Check" step (2(d) then confirms it through det M = 8) | Optional: add "Check: the expansion of part (d) uses it and gives det M = 8 again." |
| 9 | info | Problem 8(a) statement | - | "Write the rule as $u_{k+1} = Au_k$" has no box and the part does not say so (the matrix is in the solution) | Optional: "(this step has no box)" as in 3(b) |

All formula citations were checked at the cited PDF pages of the cited transcripts (no printed page numbers; `at=` counts PDF pages): Lecture 18 pp. 1–5 (properties 1, 2, 3A/3B, not linear in the whole matrix), p. 8 (subtracting a multiple, property 5), pp. 10–11 (triangular, product of pivots, sign from exchanges), pp. 15–18 (properties 9 and 10, inverse, "two to the nth" for 2A); Lecture 19 pp. 10–11 (n! terms), p. 16 (zeros and the 24 terms), pp. 20–21 (cofactor definition and formula), pp. 26–27 (tridiagonal recursion by cofactors); Lecture 20 pp. 2–5 (inverse from cofactors, $AC^T = (\det A)I$), pp. 7–9 (two equal rows off the diagonal), pp. 11–13 (Cramer), pp. 14–16 (volume, sign = handedness on p. 16), pp. 23–24 (triangle, half the parallelogram, column of ones on p. 24); Lecture 21 p. 8 (trace), p. 10 (characteristic equation), pp. 10–11 (null space), p. 14 (2 × 2 equation), p. 17 (adding 3I), p. 20 (product = determinant), pp. 24–26 (triangular, repeated eigenvalue, one line of eigenvectors); Lecture 22 pp. 4–7 (A = SΛS⁻¹, Aᵏ), p. 9 (different eigenvalues give independence), pp. 12–13 (algebraic and geometric multiplicity), pp. 14–15 (u₀ in eigenvectors), p. 18 (Fibonacci matrix (1 1; 1 0)), pp. 18–22 (Fibonacci growth). Strang's property numbering (2 exchange, 3 linearity, 5 subtracting a multiple) matches the page. All in place; no citation error found.

## Arithmetic and answer checks
- Every answer box, every intermediate number and every number in the check sentences was recomputed (SymPy): the elimination of M (rows after the exchange, pivots 2, 3, 4, −1/3), the two nonzero big-formula terms and their signs, the minors of C₄₃ and C₄₁, the pivots of T₃ (3, 7/3, 15/7), D₄ = 31, D₅ = 63, the eigenvalues 1, 2 of (3 −2; 1 0), det N by pivots (3, 7/3, 5/7), C₁₂ = 2, C₂₂ = 3, C₃₂ = −3, C₂₃ = −2, the row-2 check of N⁻¹N, det B₂ = det B₃ = −5, x = (2, −1, −1), the triangle determinant 21 and the shifted-corner check, the box pivots (2, 5/2, 16/5), uT = (2, 3, 4), vT = (2, 9, 3), wT = (4, 6, 4) and their determinant −48, w + 5u = (10, 7, 4) and its determinant 16, det G = 60, Gx = 2x for (4, −4, 3), det(G − 4I) along column 3, λ = 2 ± √(1 − 2t), t = 1 giving λ² − 4λ + 5, the eigenvectors (1, 1), (2, 3) and S⁻¹ of K, the powers of K, the five steps of u (10, 12) … (550, 582), the g-sequence 0, 5, 5, 35, 65, 275, 665, 2315, 6305, 20195, 58025, 179195, 527345 and the ratios 3.4812, 2.9429, 3.0388 (rounded correctly to 3.48, 2.94, 3.04), the eigenvectors (3, 1), (−2, 1) and u₀ = (3, 1) − (−2, 1), the ranks of W − 2I for h = 4 and h = 0 and the eigenvector (1, 0, 1). All correct.
- `npm run calc:test` restricted to this set (`pytest tests/calc -k "problem-set-7 and 18"`): all passed. The numbers inventory (`scan --numbers --uncovered --page 18-06-problem-set-7`) leaves only answer-box attributes (tied by `calc=`), tolerances, the lecture numbers and the indices "k = 10 and k = 11" uncovered: every result-like number the reader sees, including the check sentences of 5(c), 5(d) and 8(b), is in calcs.
- Tolerances: 0.005 for the three values below 1 (0.25, −0.6, 0.5), 0.01 for all others, as "How to answer" says; tolerance is absolute (`lib/answers.ts`, `numberTolerance`). Each rejects the likely slips: −0.4 (C₂₃ instead of C₃₂) against −0.6; 21 (forgetting ½) and 10 against 10.5; 550 (first component) and 552 against 582; 535537 (3¹² + 2¹²) and 527344/527346 against 527345; 162 against −162; 0.5 or −0.25 against 0.25; 1.5 against 0.5.
- Formula boxes: p3-c, vars n ∈ [1, 10], finite; mistake `2^n - 1` finite there and differs from the answer by 2ⁿ > 0 everywhere; its hint ("gives 1 for n = 1, but D₁ = 3") is true. p7-b, vars k ∈ [1, 8], finite; mistake `3^(k+1) - 2^(k+1)` is indeed the (1, 1) entry of Kᵏ (row 1 of S, (1, 2), times Λᵏ times column 1 of S⁻¹, (3, −1)), finite and differs from the answer by 2ᵏ ≠ 0 everywhere; its hint is true.
- Choice boxes: right choice at positions 3, 1, 2, 0 (p1-d, p5-d, p6-d-vec, p8-c-diag); the right choice is never clearly the longest or the shortest.
- Points: 12 + 14 + 12 + 14 + 12 + 14 + 12 + 10 = 100, and the parts add up to each exercise's points.
- Weak calcs routes (info, not errors; the values are right): `p2-b` (`1 + 1`) and `p8-c-geo` (`3 - 2`) hard-code the count and the rank; `p5-c-ut`, `p5-c-vt`, `p5-c-wt` and `p5-d-w` check only the sum of the components of a vector (a pair of compensating slips would pass). Optional: one entry per component.

## Coverage and order
- Problems follow MIT's lecture order: 1 (L18), 2 (L18 elimination, L19 big formula and cofactors), 3 (L19), 4–5 (L20), 6 (L21), 7–8 (L22). `covers: [18, 19, 20, 21, 22]` matches TASKS.md (Set 7 = L18–22, Lecture 18 B's only).
- Each lecture's main topics are practised: the defining properties and their consequences; the big formula, cofactors and a tridiagonal recursion; the cofactor inverse, Cramer's rule, volume, area of a triangle; characteristic equation, eigenvectors, trace/determinant, shift by a multiple of I, a repeated eigenvalue with too few eigenvectors; diagonalisation, powers, difference equations, a Fibonacci-like recurrence, algebraic vs geometric multiplicity. Nothing from Lectures 23 onward (differential equations, Markov) appears.
- No overlap with Sets 8–10 beyond theme: Set 10 Problem 5 also has a repeated eigenvalue with one eigenvector (a 2 × 2 matrix with eigenvalue 3, for the Jordan form), different matrix and purpose from 6(d) and 8(c). No matrix of the five lessons (L18–22) is reused.
- Closeness to known examples (from my own knowledge, no searching): Problem 3 uses Lecture 19's own method (cofactors twice on a tridiagonal family, pp. 26–27) with other numbers and a different result, and the solution says so; Problem 8(a) uses Lecture 22's Fibonacci method, and says so; the recurrence g_{k+2} = g_{k+1} + 6g_k (roots 3 and −2) is a generic textbook-style recurrence, with our own starting values. I recognise no specific textbook exercise copied (uncertain, from memory only). Not too close.

## Licensing
- All problems, matrices, hints and solutions are our own; no MIT problem-set text, no textbook exercise, no figure. Strang's book and the MIT problem-set and solution PDFs were not opened by this reviewer. The transcripts carry no "All rights reserved" or "Courtesy of" notice for the material used. No OpenStax or LibreTexts material. No verbatim copying from the transcripts.

## Notes
- No em dashes; no `## Summary`. "Show"/"check" steps: 2(d) and 4(d) say they have no box; 3(b) says its show step has no box; 8(a)'s "write the rule" has none and does not say so (finding 9).
- "How to answer" typing example `6*5^k + k/2` matches no answer on the page.
- Symbol popups: no page-scoped meaning gives an answer away (q, t, h, g₁₂ and the cofactor entries name the quantity only). Apart from G (finding 2) and B (finding 3), every letter and subscripted form on the page (A, C, E, H, I, K, M, N, S, T, W, b, h, i, j, k, n, q, t, u, v, w, x, λ, Λ, the C_ij, D_n, T_n, g_k, u_k, x_j, c_j, y_j forms) has a meaning for this page that covers its uses.
- The scan run wrote `calcs/inventory.csv` in the worktree; it is gitignored (git status clean). Nothing in the repo was edited.

COUNTS: errors=2 warnings=3 info=4

## Resolution (2026-11-28, by the page author)

- Finding 1 (error): the 8(a) Check step now reads "then $6305/2315 \approx 2.72$ and $20195/6305 \approx 3.20$"; calcs `p8-a-r2` = 6305/2315 (2.7235) and `p8-a-r3` = 20195/6305 (3.2030); `p8-g7`, `p8-g8`, `p8-g9` (2315, 6305, 20195, checked with Python from g₀ = 0, g₁ = 5) now also cover the new sentence.
- Finding 2 (error): `G` has the meaning "The 3 × 3 matrix of Problem 6." for this page.
- Finding 3 (warning): this page's meaning of `B` widened to the reminders, the 1(d) solution and Problem 1(c), as suggested.
- Finding 4 (warning): the page no longer uses $g_{12}$: statement "Find $g_k$ for $k = 12$ …", box label "$g_k$ for $k = 12$:", the formula ends at $g_k = 3^k - (-2)^k$ followed by "So for $k = 12$: $531441 - 4096 = 527345$", and the check says "for $k = 12$ the rule gives …"; this page's meaning removed from `g-12`; `shown:` of `p8-b`, `p8-b-eig` updated. The other subscripted forms on the page were checked: their spoken names fit their uses here.
- Finding 5 (warning): Exercise 8 retitled "A recurrence, and a matrix with a repeated eigenvalue"; the summary now says "when a matrix with a repeated eigenvalue can be diagonalised". Intro and other titles give no answer away.
- Finding 8 (info): 2(c) has a Check step (the minor expanded down its first column, −6, so again C₄₃ = 6; calcs `p2-c-check`).
- Finding 9 (info): 8(a) says "(this step has no box)".
- Weak calcs routes: `p5-c-ut/vt/wt` and `p5-d-w` replaced by one entry per component (row vector times each column of T; each component of w + 5u); `p8-c-geo` gets entry `p8-c-minor` (the nonzero 2 × 2 minor, 4) and its `where` says the rank is entered by hand; `p2-b` kept (the harness cannot enumerate permutations), its `where` says so and records the reviewer's SymPy enumeration.
- Other info items left as they are.
