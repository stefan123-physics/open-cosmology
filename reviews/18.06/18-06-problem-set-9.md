---
page: content/year-2/18.06/18-06-problem-set-9.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e92d794482d7b331dfa7f9324f2f5150_UCc9q_cAhho.pdf (Lecture 25 transcript, read; 18 PDF pages, no printed footer, so pages are PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/111608202724f78b5b19ef52dcbe61c9_vF7eyJ2g3kU.pdf (Lecture 27 transcript, read; 19 PDF pages, no printed footer)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-27-positive-definite-matrices-and-minima/ (source.url; not fetched, the transcripts were given)
  - MIT 18.06 problem sets, solutions and Strang's textbook: deliberately NOT opened (task rule)
verdict: pass-with-notes
---

# Review: Problem Set 9: symmetric and positive definite matrices

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind answers below were written from the stripped statements (ps9-stripped.mdx) before the full page, its calcs file or the symbols were opened. Every number was rechecked with my own NumPy/SymPy run.

## Blind solve

### My answers (written from the stripped statements only, before opening the full page)
- 1(a): eigenvalues 7 and −3 (trace 4, det −21).
- 1(b): q1 = (2, 1)/√5, P1 = (1/5)[[4, 2], [2, 1]], p12 = 0.4; q2 = (1, −2)/√5, P2 = (1/5)[[1, −2], [−2, 4]]; 7P1 − 3P2 = A; P1 + P2 = I.
- 1(c): (A³)12 = 343(0.4) + (−27)(−0.4) = 148 (numpy: A³ = [[269, 148], [148, 47]]).
- 1(d): second pivot −1 − 16/5 = −21/5 = −4.2; A is indefinite (one positive, one negative eigenvalue; a saddle form).
- 2(a): Δ = (a − c)² + 4b².
- 2(b): Δ ≥ 0, so the root is real; Δ = 0 only if a = c and b = 0, i.e. A = aI.
- 2(c): λ1 yᵀx = yᵀAx = (Ay)ᵀx = λ2 yᵀx, so (λ1 − λ2) yᵀx = 0, yᵀx = 0.
- 2(d): eigenvalues 3 and −1, eigenvectors (2, 1) and (2, −1); |cos θ| = 3/5 = 0.6.
- 3(a): pivots 2, −3, 28/3 (9.333).
- 3(b): 2 positive eigenvalues; product = det S = −56.
- 3(c): pivots of S − 3I: −1, 18, 23/18; two positive, so 2 eigenvalues above 3.
- 3(d): S + 2I is positive definite (all pivots positive), so all three eigenvalues of S exceed −2 (count 3). Eigenvalues of S: 4 and 3 ± √23 = 7.796, −1.796; checks (b) 2 positive, product −56; (c) 2 above 3; (d) all above −2.
- 4(a): 3, 9 − b², det T = 27 − 6b².
- 4(b): positive definite for 0 < b < 3/√2; largest b = 2.1213.
- 4(c): eigenvalues 3, 3 ± √2 b; smallest 3 − √2 b.
- 4(d): b = 2: pivots 3, 5/3, 3/5; third pivot 0.6.
- 5(a): A = [[4, 6], [6, c]]; positive definite for c > 9; borderline c = 9.
- 5(b): m = 1.5 (the multiplier 6/4), p = 4 (the second pivot, 13 − 9).
- 5(c): f(3, −2) = −16; f = 1 is a hyperbola (det 20 − 36 < 0).
- 5(d): c = 9: f = (2x + 3y)², zero on the line 2x + 3y = 0 (y = −2x/3).
- 6(a): A = [[5, 2], [2, 8]]; eigenvalues 4 and 9.
- 6(b): half-lengths 6/√λ: 3 and 2.
- 6(c): longer axis (3) along the eigenvector of λ = 4: (2, −1) (or (−2, 1)).
- 6(d): area 6π = 18.85.
- 7(a): critical points (0, 0) and (2, 2); x = 2.
- 7(b): Hessian [[12, −6], [−6, 6]]; fxx = 12, det = 36; minimum; f(2, 2) = −4.
- 7(c): origin: Hessian [[0, −6], [−6, 6]], det −36 < 0: saddle point.

### Comparison (one line per answer id)
- p1-a-big 7 = mine. p1-a-small −3 = mine.
- p1-b 0.4 = mine (q1 = (2, 1)/√5, P1 = (1/5)(4 2; 2 1)); spectral sum and P1 + P2 = I as mine.
- p1-c 148 = mine (NumPy A³ = (269 148; 148 47)).
- p1-d-pivot −4.2 = mine. p1-d-kind "indefinite" = mine.
- p2-a (a − c)² + 4b² = mine (identical expression). 2(b), 2(c) arguments as mine.
- p2-d 0.6 = mine (u = (2, 1), v = (2, −1)).
- p3-a-2 −3 = mine. p3-a-3 9.3333 (28/3) = mine.
- p3-b-count 2 = mine. p3-b-prod −56 = mine (NumPy det −56).
- p3-c 2 = mine (pivots of S − 3I: −1, 18, 23/18, as mine).
- p3-d "positive definite" = mine. Eigenvalues 4, 3 ± √23 (NumPy −1.7958, 4, 7.7958) = mine.
- p4-a 27 − 6b² = mine (SymPy det = −3(2b² − 9)).
- p4-b 2.1213 = mine (3/√2 = 2.12132).
- p4-c 3 − √2 b = mine (SymPy eigenvalues 3, 3 ± √2 b).
- p4-d 0.6 = mine.
- p5-a 9 = mine. p5-b-m 1.5 = mine. p5-b-p 4 = mine (multiplier and second pivot, as mine).
- p5-c-val −16 = mine. p5-c-curve "a hyperbola" = mine.
- p5-d "the line 2x + 3y = 0" = mine.
- p6-a-big 9, p6-a-small 4 = mine. p6-b-major 3, p6-b-minor 2 = mine. p6-c "along (2, −1)" = mine. p6-d 18.85 = mine (6π = 18.8496).
- p7-a 2 = mine. p7-b-fxx 12, p7-b-det 36, p7-b-kind "a local minimum", p7-b-val −4 = mine. p7-c "a saddle point" = mine.

No disagreement on any of the 37 boxes or on the show-that parts.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(b) statement | (rule 5: every show-that step boxed or said to have none) | "Then show that A = λ1P1 + λ2P2 … and that P1 + P2 = I (this last step has no box)": neither show step has a box, but the sentence says so only of the last | Write "(these two steps have no box)". |
| 2 | warning | Problem 1(d), choice box `p1-d-kind` | n/a | right choice "indefinite" (10 characters) is the shortest of the four ("positive definite", "negative definite", "positive semidefinite") | Replace "positive semidefinite" with "singular" (then "singular" is shortest), or give all four similar lengths. |
| 3 | warning | Problem 4(c), mistake hint for `3 - b` | n/a | "The eigenvector (1, s, 1) needs s² = 2, not s = −1 …": after one wrong try the hint hands over s² = 2, from which 3 − √2 b follows at once | Reword: "s = −1 does not satisfy the middle row of Tx = λx. Write out both rows for (1, s, 1) and solve them together." |
| 4 | warning | Symbol popups `m` and `p` (data/symbols.json, page-scoped) | n/a | m: "The multiplier inside the completed square"; p: "…, the second pivot (Problem 5(b))". Part 5(b) asks the reader to "say how they are related to elimination": the popups answer it (no box, but self-marked) | m: "The number inside the completed square, f = 4(x + my)² + py² (Problem 5(b))." p: "The number in front of y² after completing the square, f = 4(x + my)² + py² (Problem 5(b))." |
| 5 | warning | Symbol `t` (page-scoped meaning) | n/a | meaning "A number measuring distance along a unit eigenvector, x = tq" does not cover Problem 7(c)'s check, where t is the parameter of f(t, t) and f(0, t) | Add: "; in the check of Problem 7(c), a small number giving points (t, t) and (0, t) near the origin." |
| 6 | warning | Problem 6, the curve 5x² + 4xy + 8y² = 36 | n/a (copy check from my own memory, uncertain) | I recall a well-known linear-algebra textbook rotation-of-axes example, 5x² − 4xy + 8y² − 36 = 0 (eigenvalues 4 and 9, x′²/9 + y′²/4 = 1). The page's curve differs only in the sign of the xy term and has the same eigenvalues and axes. Not searched (task rule), so uncertain | Change the numbers, e.g. 10x² + 12xy + 10y² = 16: A = (10 6; 6 10), eigenvalues 16 and 4, half-lengths 1 and 2, longer axis along (1, −1), area 2π ≈ 6.28; update the hints, choices, calcs and the 6(c) check. |
| 7 | warning | calcs coverage | n/a | Main results all covered, but some numbers a reader sees are not: 2(d) check Bu = (6, 3), Bv = (−2, 1); 3(a) rows (0, −3, 5) and (0, 5, 1); 3(d) trace 10; 5(c) completed square 4(x + 3/2 y)² − 4y²; 7(c) f(t, t) = t³ − 3t²; 1(d) check values −1 and 5 | Add small entries (or identity entries for the 5(c) and 7(c) forms). |
| 8 | info | Problem 3(d) statement prints the pivots 4, 3, 1 of S + 2I | n/a | The choice box then only asks for the name of the test | Acceptable: applying the pivot test is the point of the part, and it gives nothing away for 3(b) or 3(c) (all eigenvalues above −2 says nothing about the count above 0 or 3). Keep. |
| 9 | info | Mistake hints of 2(a) and 4(a) | n/a | Each names the one slip (sign of 4b²; the missing −b(3b − 0) term) | Acceptable: they correct the slip the reader made and do not do the remaining work. Keep. |
| 10 | info | Popups X, Y; 4(b) check at b = 1 | n/a | X and Y appear only inside the 6(b) solution; the b = 1 check comes after 4(a)'s solution and gives no later box's value (4(d) is at b = 2) | No leak. Keep. |
| 11 | info | Problem 7(b) statement | n/a | "Give f_xx and its determinant": "its" reads as the determinant of f_xx | "Give f_xx and the determinant of that matrix". |
| 12 | info | Number boxes 6(d) 18.85, 3(a) 9.3333, 4(b) 2.1213 | n/a | Stored values are rounded, so the window is 0.01 around the rounded value, not "within 0.01 of the exact one" as How to answer says (6π = 18.8496: 18.86 is accepted though 0.0104 off) | Harmless; for exactness store 18.8496, 9.33333, 2.12132. |
| 13 | info | Reminder before Problem 6 (L27 p. 19) | Strang: the axis lengths are "the half-lengths, or one over the eigenvalues, it turns out" | "lengths set by the eigenvalues", then derives 1/√λ correctly | Optional (Writing rules 4): add "(the transcript says one over the eigenvalues; it is one over their square roots)". |
| 14 | info | calcs `p3-d-pivots` | n/a | formula `(4*7 - 16)/4 - 3 + (…)**2`: the first difference is not squared, so two errors could cancel | Square the first term. |

## Arithmetic and answer checks
- Every solution step recomputed: 1(a)–(d) (trace 4, det −21; 7P1 − 3P2 = A; P1² entry 2/5; A² = (41 16; 16 17), 41·4 − 16 = 148; pivot −21/5); 2(a)–(d) (expansion; Δ = −4 for the rotation; B: eigenvalues 3, −1, Bu = 3u, Bv = −v, cos θ = 3/5, θ ≈ 53.1°); 3(a)–(d) (eliminations of S and S − 3I, cofactor sums −56 and −23, E = 10, (λ − 4)(λ² − 6λ − 14), S(−1, 1, 3) = (−4, 4, 12), pivots of S + 2I 4, 3, 1 by my own elimination); 4(a)–(d) (det 27 − 6b², 3/√2, eigenvectors (1, 0, −1) and (1, ±√2, 1), product 3(9 − 2b²), pivots 3, 5/3, 3/5); 5(a)–(d) (4c − 36, m = 3/2, p = 4, (1, 1) check 29, f(3, −2) = −16, c = 9 gives (2x + 3y)², nullspace (3, −2)); 6(a)–(d) (eigenvalues 4, 9; 6/√λ; point 3(2, −1)/√5 on the curve; 36π/√det = 6π); 7(a)–(c) (critical points, Hessians, f(2.1, 2) = −3.939, f(2, 2.1) = −3.97, f(t, t) = t³ − 3t²). All correct; every solution ends with a check.
- Formula boxes: `p2-a` vars a, c ∈ [−3, 3], b ∈ [0.5, 3]: answer and mistake finite everywhere, and differ by 8b² ≥ 2 everywhere. `p4-a`, `p4-c` vars b ∈ [0.2, 3]: finite; mistakes differ by 3b² and (√2 − 1)b > 0 everywhere. Negative values of 3 − √2 b for b > 2.12 are legitimate (an eigenvalue of an indefinite T).
- Each mistake hint is true of its formula: (a − c)² − 4b² is the sign slip; 27 − 3b² is 3(9 − b²) alone; 3 − b is λ = 3 + bs with s = −1.
- Tolerances (absolute 0.01, `lib/answers.ts`) suit every value and reject the likely slips: 148 vs 137.2 or 126.4 (one term or a sign lost); −56 vs 56; 28/3 vs 25/3; −4.2 vs 4.2 or −3.2; 2.1213 vs 3, 4.5 or 1.5; 18.85 vs 6.28 or 37.7; 0.6 vs 0.
- Choice boxes: right answers at positions 2, 1, 3, 2, 1, 0, 2 (varied); only 1(d) has the right choice shortest (warning 2).
- Points: 14 + 12 + 16 + 16 + 14 + 14 + 14 = 100; each exercise's parts add up. MIT gives none; the page says they are ours.
- `npm run calc:test -k "problem-set-9 and 18.06"`: all pass. `npm run content:check`: 0 errors; only "no review file yet" for this page.

## Coverage and order
- Problems follow lecture order: Lecture 25 (spectral theorem and projections, real eigenvalues and perpendicular eigenvectors, pivot signs and shifts, positive definite by pivots and determinants: Problems 1–3 and 4) then Lecture 27 (2 × 2 tests, xᵀAx, completing the square as elimination, ellipse and hyperbola, ellipse axes, second-derivative test: Problems 5–7). Good fit to `covers: [25, 27]`, at MIT's level.
- Lecture 27's 3 × 3 example (the second-difference matrix and its ellipsoid) is practised through Problem 4's 3 × 3 tridiagonal T instead; fine.
- No overlap with Set 10 (Hermitian, Fourier, similar, Jordan, SVD) or with the worked examples of the two lessons (matrices (6 2; 2 9), (3 4; 4 c), (5 2; 2 3), (2 6; 6 c) are not reused).

## Licensing
- Every problem is our own and said so; no MIT figure, no textbook exercise opened. The Lecture 25 and 27 transcripts carry no "rights reserved" or "courtesy" notice (grep). No OpenStax, LibreTexts. No em dashes, no `## Summary`.
- Copy check from memory only: Problem 6 resembles a known textbook example (warning 6, uncertain). Problems 1, 3, 4, 5, 7 do not look like any textbook exercise I recall; Problem 5 echoes Lecture 27's own (2 6; 6 c) with new numbers, as intended.

## Citations
All `at=` checked on the PDF pages (no printed footer): reading1 pp. 3–4 (QΛQᵀ, "spectral theorem" p. 4), pp. 11–12 (columns times rows, projections), p. 14 (signs of pivots = signs of eigenvalues, shift by 7I, products = det), pp. 15–18 (positive definite by eigenvalues, pivots, sub-determinants), pp. 6–7 (the x̄ᵀAx proof), p. 1 (perpendicular eigenvectors "left to the book", as Problem 2's preamble says); reading2 pp. 1–2 (four tests), p. 4 (ax² + 2bxy + cy²), pp. 11–12 (2(x + 3y)² + 2y²), p. 12 (ellipse vs hyperbola), pp. 13–14 (pivots outside, multipliers inside), pp. 14–15 (matrix of second derivatives, f_xy = f_yx), p. 19 (axes along eigenvectors). All correct. Every derived result is `cite="mit"` "(our own solution)"; both readings are cited.

## Notes
- Leak check of the writer's list: 3(d) printed pivots (no leak, info 8); popups p, m (warning 4); popups X, Y (no leak, info 10); mistake hints 2(a), 4(a) (acceptable, info 9), 4(c) (warning 3); the 4(b) check at b = 1 (no leak, info 10). I found no other leak: no How-to-answer example (0.25, `(a + 1)/sqrt(2*a)`) matches a box; no preamble above a box states its value; 1(a)'s hint "one root positive, one negative" comes after nothing boxed and only anticipates 1(d) through 1(a)'s own result.
- Symbols: every letter on the page has a page-scoped meaning; all fit except `t` (warning 5).

COUNTS: errors=0 warnings=7 info=7

## Resolution (2026-11-28, by the page author)

- Warning 1: Problem 1(b) now says "(these two steps have no box)".
- Warning 2: `p1-d-kind` choices are now "positive definite", "negative definite", "indefinite", "singular"; "indefinite" stays at index 2 and is no longer the shortest.
- Warning 3: the 4(c) mistake hint for `3 - b` now reads "s = −1 does not satisfy the middle row of Tx = λx. Write out both rows for (1, s, 1) and solve them together."
- Warning 4: popups m and p now name the numbers in f = 4(x + my)² + py² without saying how they relate to elimination.
- Warning 5: popup t now also covers the 7(c) check, points (t, t) and (0, t) near the origin.
- Warning 6: Problem 6 is now our own curve 10x² + 12xy + 10y² = 16: A = (10 6; 6 10), eigenvalues 16 and 4, half-lengths 1 and 2, longer axis along (1, −1) (choice at position 3, not the longest), area 2π ≈ 6.28319; statement, boxes, hints, solution, checks and calcs rewritten, all numbers rechecked with NumPy. Its symbol meanings (X, Y, A) name objects only and needed no change.
- Warning 7: calcs entries added: `p2-d-check` (Bu = (6, 3), Bv = (−2, 1)), `p3-a-rows` ((0, −3, 5), (0, 5, 1)), `p3-d-trace` (10), `p5-c-square` (identity 4x² + 12xy + 5y² = 4(x + 3/2 y)² − 4y²), `p7-c-line` (identity f(t, t) = t³ − 3t²), `p1-d-check-values` (−1 and 5); also `p6-a-check`, `p6-c-perp` for the new Problem 6.
- Info 11: 7(b) now says "the determinant of that matrix".
- Info 12: box values stored unrounded: 9.33333, 2.12132 and the new area 6.28319 (calcs tolerance 1e-5).
- Info 13: the reminder before Problem 6 now notes that Strang says in Lecture 27 (transcript p. 19) the lengths are one over the eigenvalues; for xᵀAx = 1 they are one over their square roots.
- Info 14: calcs `p3-d-pivots` now squares the first difference.
- Other info items left as they are.
