---
page: content/year-2/18.06/18-06-problem-set-10.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/68440cfc1e8760b75bddc09bc8d374d6_M0Sa8fLOajA.pdf (read: Lecture 26 transcript, the copy handed over, split page by page with pdftotext; the PDF has no printed page numbers, so page = PDF page)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/0f4bac6de07c6e13d35de60e556af4be_TSdXJw83kyA.pdf (read: Lecture 28 transcript, same way)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/0f4d618b79d74403afcbaef310117f03_TX_vooSnhm8.pdf (read: Lecture 29 transcript, same way)
  - MIT 18.06 problem sets: not opened (textbook exercises; the set is our own problems by owner decision)
verdict: needs-changes
---

# Review: Problem Set 10: complex matrices, similar matrices and the SVD

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the stripped statements and the three transcripts were read first; the answers below were written to this file before the full page, the calcs file or symbols.json were opened. Every number was recomputed with NumPy in the project's .venv. Strang's book, MIT's problem-set PDFs and their solutions were not opened, fetched or searched.


## Blind solve

### My answers (written before opening the full page; checked with numpy)
- 1(a): ‖z‖² = 10; yᴴz = 4 − 2i (Re 4, Im −2).
- 1(b): Hermitian (real diagonal a, 2; conj(1−i) = 1+i). λ = [(a+2) ± √((a−2)² + 8)]/2; larger = (a + 2 + √((a−2)² + 8))/2; smaller at a=3: 1. Positive definite iff a > 1 (a > 0 and det = 2a − 2 > 0).
- 1(c): (xᴴAx)̄ = (xᴴAx)ᴴ = xᴴAᴴx = xᴴAx, real; Ax = λx ⇒ xᴴAx = λ‖x‖², so λ real.
- 2(a): y = (2, 1+3i, 0, 1−3i).
- 2(b): ‖y‖² = 24 = 4‖x‖² (‖x‖² = 6).
- 2(c): x = (1, 0, −1, 0).
- 2(d): column k · column l = Σ_j W^{j(l−k)}, geometric sum with ratio W^{l−k} ≠ 1 and (W^{l−k})ⁿ = 1, so 0; k = l gives n.
- 3(a): W₈² = i; Re W₈³ = −√2/2 ≈ −0.7071.
- 3(b): F₂(1,0) = (1,1); F₂(2,−1) = (1,3), second entry 3; D·(1,3) = (1,3i); y = (1+1, 1+3i, 1−1, 1−3i) = (2, 1+3i, 0, 1−3i).
- 3(c): k·2^{k−1}; ratio 2n/log₂n = 2·65536/16 = 8192.
- 4(a): B = [[4, 1], [0, 1]].
- 4(b): M⁻¹x = (1, 0), eigenvalue 4.
- 4(c): C₁ yes (trace 5, det 4, eigenvalues 1, 4 distinct); C₂ no (det 3); C₃ yes (triangular, 1 and 4).
- 4(d): det(M⁻¹AM − λI) = det(M⁻¹(A − λI)M) = det(A − λI); λ = 0 gives det; trace from the λ coefficient.
- 5(a): λ = 3 (twice), one independent eigenvector, J = [[3, 1], [0, 3]].
- 5(b): x₁ = (1, −1); (A − 3I)(p, 0) = (−p, p) = (1, −1) ⇒ p = −1 (checked AM = MJ).
- 5(c): K₁ two eigenvectors, K₃ one; K₁ and K₂ similar, K₃ similar to neither.
- 5(d): λ = 5 ± √ε; larger 5 + √ε; ε = 10⁻⁶: 5 ± 0.001 distinct, so diagonalisable.
- 6(a): AᵀA = [[85, −30], [−30, 40]]; σ₁ = 10, σ₂ = 5.
- 6(b): v₁ = (2, −1)/√5 ≈ (0.8944, −0.4472); u₁ = Av₁/10 = (1, −2)/√5 ≈ (0.4472, −0.8944).
- 6(c): 100.
- 6(d): det(AᵀA) = (det A)² = σ₁²σ₂², σ ≥ 0 ⇒ σ₁σ₂ = |det A|; 10·5 = 50 = 36 + 14.
- 7(a): σ₁ = 3√(1 + c²).
- 7(b): nullspace dim 2, left nullspace dim 1.
- 7(c): any orthonormal basis of the plane x + 2y + 2z = 0, e.g. (2, −2, 1)/3 and (2, 1, −2)/3.
- 7(d): No (rank 1 < 3; positive semidefinite only).

### Comparison (page answer vs mine)
- p1-a-len 10 = 10. p1-a-re 4 = 4. p1-a-im −2 = −2.
- p1-b-big (a + 2 + √((a−2)² + 8))/2 = mine (identical; numpy eigvalsh at a = 3, 0.5, 1, 5 agrees). p1-b-small 1 = 1. p1-b-pd "a > 1" = mine.
- p2-a-y0 2, p2-a-y1re 1, p2-a-y1im 3, p2-a-y3im −3: all = mine (numpy F4 @ x = (2, 1+3i, 0, 1−3i)).
- p2-b 24 = 24. p2-c (1, 0, −1, 0) = mine (numpy solve).
- p3-a-sq i = i. p3-a-re −0.7071 = −√2/2. p3-b 3 = 3. p3-c-count k·2^(k−1) = mine. p3-c-ratio 8192 = 8192.
- p4-a-11/12/21/22 4, 1, 0, 1 = mine. p4-b (1, 0) = mine. p4-c-1 Yes, p4-c-2 No, p4-c-3 Yes = mine.
- p5-a-lam 3, p5-a-num 1, p5-a-jordan rows (3, 1), (0, 3) = mine. p5-b −1 = −1. p5-c-k1 2, p5-c-k3 1, p5-c-sim "K1 and K2 similar, K3 not" = mine (numpy: M⁻¹K₂M = K₁ for M with columns e₂, e₃, e₁). p5-d-lam 5 + √ε = mine; p5-d-diag Yes = mine.
- p6-a-off −30, p6-a-s1 10, p6-a-s2 5 = mine (numpy svd: 10, 5). p6-b-v1 along (2, −1), p6-b-u1 along (1, −2) = mine. p6-c 100 = 100.
- p7-a 3√(1 + c²) = mine (numpy svd at c = 2: 6.7082 = 3√5). p7-b-null 2, p7-b-left 1 = mine. p7-c (2, −1, 0), (2, 4, −5) = a valid pair (my example pair differs but is equally valid; only the page's choice is orthonormal and in the nullspace among the four). p7-d No = mine.
- No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | 5(d) solution, step "Diagonalisable" | The "slightest change in numbers will change those eigenvalues ... numerically not ... a good thing" is on Lecture 28 transcript p. 15; pp. 20–21 only say J "isn't easy" to compute and that Strang is "not that crazy about the Jordan form" | "this is why Strang calls the Jordan form numerically not a good thing (Lecture 28 transcript, pp. 20–21)" | Change to "(Lecture 28 transcript, p. 15)" (the lesson itself cites "pp. 15, 20–21") |
| 2 | error | data/symbols.json, `x-2` (form `x_2`), scoped to this page | (symbols) | "The component of x numbered 2." In Problem 5(b) x₂ is a vector: the second column (p, 0) of M, with (A − λI)x₂ = x₁. The popup is wrong there | Add: "; in Problem 5(b), the second column of M, a vector with (A − λI)x₂ = x₁" (as `x-1` already does for x₁) |
| 3 | warning | symbols.json `J` | (leak) | "in Problem 5, the 2 × 2 Jordan block": tapping J in 5(a)'s statement tells the reader J is a block (not 3I), which gives p5-a-jordan and, by "one block per eigenvector", p5-a-num = 1 | "The Jordan matrix (form) of A; in Problem 5, the Jordan form of the 2 × 2 matrix A" |
| 4 | warning | symbols.json `K-1-ps`, `K-2-ps`, `K-3-ps` | (leak) | "with blocks of sizes 2 and 1", "blocks of sizes 1 and 2", "The 3 × 3 Jordan block": with "one block per independent eigenvector" (What you need) these give p5-c-k1 = 2, p5-c-k3 = 1 and, nearly, p5-c-sim | "The first / second / third 3 × 3 matrix of Problem 5(c), with the eigenvalue 7 three times" |
| 5 | warning | 7(d) hint | (hint) | "Look for a nonzero x with xᵀAᵀAx = ‖Ax‖² = 0." It presupposes such an x exists, so it gives the answer "No" | "Positive definite needs xᵀAᵀAx = ‖Ax‖² > 0 for every nonzero x. Use part (b): is that so here?" |
| 6 | warning | 6(b), sign trap in u₁ | Lecture 29 pp. 12–13 (Strang's sign puzzle) | v₁ is fixed with its first entry positive, and the correct u₁ = (1, −2)/√5 also has its first entry positive. A reader who skips u₁ = Av₁/σ₁ and just normalises an eigenvector of AAᵀ "first entry positive" lands on the right choice, so the trap catches only those who pick the negative sign | Fix v₁ the other way, e.g. "take its second entry positive": v₁ = (−2, 1)/√5, u₁ = Av₁/10 = (−1, 2)/√5; the shortcut then gives (1, −2), a listed wrong choice. Update the choices, the solution, the 6(b) check, p6-b-* calcs and the `v-1`/`u-1` texts if needed |
| 7 | warning | 1(b) and 2(b) statements | (rule: every show/check step boxed or said to have none) | "Check that A is Hermitian for every real a" (1(b)) and "compare it with ‖x‖²" (2(b)) have no box and are not said to have none | Add "(this check has no box)" after each, as 3(b) does |
| 8 | warning | 5(d) box `p5-d-lam`, vars eps: [0.0001, 1] | (answer audit) | The listed mistake 5 + eps equals the answer 5 + √eps at eps = 1, the end of the range (within 1 part in 10⁶ for eps within about 1e-5 of 1) | Narrow to `vars={{ eps: [0.0001, 0.5] }}` (and the calcs samples to ≤ 0.5) |
| 9 | info | 5(c), second hint | Lecture 28 pp. 17–20 (block sizes decide) | "Two matrices made of the same Jordan blocks, in another order, are similar" is a fact the lecture does not state and nearly answers p5-c-sim | Acceptable as a second hint; optionally keep only "compare the block sizes" |
| 10 | info | 7(b) → 7(d) (flagged by the writer) | Lecture 28 pp. 4–5 | 7(d) follows from 7(b) (nullspace of dimension 2) and the rule in "What you need" | Not a leak: the reader computes 7(b) in the box first, and 7(d) is the intended one-step consequence. No change, apart from the hint (#5) |
| 11 | info | Problem 7(d) | Lecture 28 opens (pp. 4–5) with AᵀA positive definite | The L28 topic is practised last, inside the L29 problem | Fine (the SVD context needs AᵀA); no change |
| 12 | info | symbols.json `A` | (symbols) | In 4(d) ("any two similar matrices") and 6(d) ("every 2 × 2 matrix") A is any matrix, but the popup lists the specific matrices of Problems 4 and 6 | Optionally add "in 4(d) and 6(d), any square matrix" |

## Arithmetic and answer checks
- Every answer and every number in the solutions and check steps was recomputed (numpy, plus hand checks): 1(a)–(c) incl. the counter-example x = (1, i), xᴴAx = 2i; F₄x; ‖y‖² = 24 = 4·6; the inverse transform; W₈³ = −√2/2 + i√2/2; g = (1, 1), h = (1, 3), Dh = (1, 3i); n² = 4 294 967 296, ½n log₂n = 524 288, ratio 8192; B = M⁻¹AM; C₂ eigenvalues (5 ± √13)/2; AM = MJ with M = (1 −1; −1 0); M⁻¹K₂M = K₁; λ = 5 ± 0.001; AᵀA, AAᵀ, σ = 10, 5, v's, u's, 10u₁v₁ᵀ + 5u₂v₂ᵀ = A, det U = det Vᵀ = 1; 7(a) σ₁ = 3√5 ≈ 6.708; the cross product (2, 4, −5); AᵀA eigenvalues 45, 0, 0. All correct.
- The lecture check in 3(c): k = 10 gives 10·2⁹ = 5·1024 (transcript p. 19: "five times a thousand twenty four"), and the ratio 2²⁰/(5·2¹⁰) = 2¹¹/10 = 204.8 ≈ 205; "factor of 200" is Strang's phrase on p. 19. Rounding correct.
- Rounded factors in check sentences: −0.7071, 6.708, 5.001/4.999, 205: all correctly rounded.
- Tolerances (0.01 absolute everywhere): right for the integer answers (8192, 100, 24, −30, counts and dimensions); it rejects the likely slips (4096 = n/log₂n, 16384, 10 for σ₁² in 6(c), +30, 25 for σ₂, +0.7071 sign slip, 0.3827 = cos 67.5°). For −0.7071 it also accepts −0.70 and −0.7 (a truncation, true two-place value −0.71); harmless, optional tolerance 0.005 (info).
- Formula boxes: p1-b-big mistakes ((a−2)² + 4 and (a−2)², the latter = max(a, 2)) differ from the answer on the whole range a ∈ [−3, 6], and their hints are true. p3-c-count mistakes k·2^k and 4^k never equal k·2^(k−1) on [1, 20]; hints true. p7-a mistakes 3(1 + c) (equal only at c = 0) and 9(1 + c²) differ on [0.5, 4]; hints true. p5-d-lam: see #8.
- Choice boxes: right answer positions 2, 3, 1, 2, (Yes/No), 3, 2, 0, 1, 3, 0, 1: varied; no right choice is clearly longest or shortest.
- calcs: `calc:test -k "18.06 and problem-set-10"` in the worktree: 75 passed. `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file. One small mismatch: `p3-b-count` expects 10 (2·2² + 2), but its `shown:` quotes "2·2² = 8"; the page never prints 10 (info, optionally show "8 + 2 = 10 against 16").
- Every derived formula is cited "(our own solution)" or "(…; the numbers are our own)"; the transcript citations were all checked page by page: L26 pp. 3–5, 4, 5, 6, 8–12, 10, 11–12, 13–14, 14, 15, 15–16, 18–19, 19; L28 pp. 4–5, 6–8, 6–11, 7–10, 10, 11, 13–15, 14, 17–20, 19–20, 20; L29 pp. 1–7, 3–4, 6–8, 10, 12–13, 13–16, 17–18: all at the cited place, except #1.
- No number is quoted from memory: the only lecture numbers (5·1024, factor of 200, 2m = 64, eigenvalues 3 and 1 of (2 1; 1 2)) are at the cited pages.
- Answer leaks checked: the "How to answer" examples (0.25, 3 − 5i, (a + 1)/sqrt(2*a)) match no box; no statement or preamble gives a box's value; earlier solutions give only what later statements already say (x₁ in 5(a) is asked for in 5(b)'s hint route, not p). Leaks found only in symbol popups (#3, #4) and the 7(d) hint (#5).

## Coverage and order
- Lecture 26: complex length and inner product (P1a), Hermitian matrices and real eigenvalues (P1b, c), F₄, its inverse and orthogonal columns (P2), W_{2m}² = W_m, one FFT step and the ½n log₂n count (P3). Unitary matrices (QᴴQ = I) are practised only through the columns of F_n (2(d)); acceptable.
- Lecture 28: similar matrices and shared eigenvalues (P4), the two families for a repeated eigenvalue, Jordan blocks and Jordan's theorem, numerical fragility (P5); the opening AᵀA positive-definite argument in 7(d).
- Lecture 29: AᵀA route to V and Σ, u = Av/σ and Strang's sign puzzle (P6), a rank-one rectangular SVD and the four subspaces (P7).
- Lecture order 26 → 28 → 29 is kept; Lecture 27 is left to Set 9, as in TASKS.md. Level matches the lectures. Points 14 + 16 + 12 + 14 + 16 + 16 + 12 = 100, every part split adds up; the page says the points are ours.

## Licensing
- No MIT figure, no "rights reserved" or "courtesy" material; no transcript text copied beyond short phrases ("factor of 200", "numerically not a good thing", paraphrased).
- Textbook copying: from my own knowledge only (nothing searched), no problem resembles a known textbook exercise closely: the matrices (6 2; −7 6), (3 1; 2 2) with M = (1 0; 1 1), (2 −1; 1 4), the vectors and the rank-one matrix with (1, 2, 2) and c are generic, and differ from the lecture's examples (4 4; −3 3) and (4 3; 8 6). The ε-perturbed Jordan block in 5(d) is a standard theme, written in the page's own way.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes in page or calcs; no `## Summary`; links use /courses/18-06/… like other 18.06 pages; prerequisites are the three lessons.
- All letters in the page's maths (A, B, C_, D, F_, H, I, J, K, M, P, Q, S, T, U, V, W, a, b_, c, e, g, h, i, j, k, l, m, n, p, q, r, u, v, x, y, z, λ, Λ, σ, Σ, ε) have meanings scoped to this page; apart from #2, #3, #4 and #12 they fit every use.
- Nothing in the worktree was changed by this review (content:check and calc tests were run read-only; git status clean).

COUNTS: errors=2 warnings=6 info=6 (table #9–#12, the −0.7071 tolerance, the p3-b-count shown text)

## Resolution (2026-11-28, by the page author)

- #1: 5(d) "Diagonalisable" step now cites Lecture 28 transcript, p. 15 (checked: the "slightest change in numbers" passage is on PDF page 15); no calcs entry carried the old citation.
- #2: `x-2` meaning for this page now adds "in Problem 5(b), the second column of M, a vector with (A − λI)x₂ = x₁".
- #3: `J` meaning now says "in Problem 5, the Jordan form of the 2 × 2 matrix A" (no block named).
- #4: `K-1-ps`, `K-2-ps`, `K-3-ps` now say "The first / second / third 3 × 3 matrix of Problem 5(c), with the eigenvalue 7 three times". Audit of the other meanings for this page: `M` no longer says the 5(c) matrix is a permutation (it would hint p5-c-sim), `S-1` no longer says C₁ has an eigenvector matrix (it would give p4-c-1); no other meaning gives a box answer.
- #5: 7(d) hint now reads "Positive definite needs xᵀAᵀAx = ‖Ax‖² > 0 for every nonzero x. Use part (b): is that so here?".
- #6: 6(b) now fixes v₁ with its second entry positive: v₁ = (−2, 1)/√5, u₁ = Av₁/10 = (−1, 2)/√5 (NumPy checked, with UΣVᵀ = A, det U = det Vᵀ = −1). A reader who normalises an eigenvector of AAᵀ with the usual first-entry-positive habit gets (1, −2), a listed wrong choice. Choices reordered (right answers at positions 2 and 3, all the same length); the solution, the "opposite of u₁" check, the 6(c) check AAᵀu₁ = 100u₁, the 6(d) determinants, the calcs entries p6-b-v1, p6-b-u1, p6-b-usvt, p6-c-check, p6-d-detv (and a new p6-d-detu) and the `v-1` text were updated.
- #7: "(this check has no box)" added in 1(b) and 2(b).
- #8: p5-d-lam range is now eps in [0.0001, 0.5]; calcs samples end at 0.5.
- #12 (info): the `A` popup now says "the matrix of each problem, given in its statement", with "any matrix of the kind named there" for 1(c), 4(d), 6(d) and "What you need".
- p3-b-count (info): the page now prints "8 + 2 = 10 in all, against 4² = 16", and the calcs `shown:` quotes it, so expected 10 and shown agree.

Info items left as they are: #9 (the second 5(c) hint is kept as a second-level hint), #10 and #11 (no change needed), and the −0.7071 tolerance of 0.01 (harmless).
