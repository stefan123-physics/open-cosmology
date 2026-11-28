---
page: content/year-2/18.06/18-06-problem-set-8.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-24-markov-matrices-fourier-series/ (not fetched: the transcripts below are its content; no problem-set PDF used, by instruction)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/6d67704459268b5517f5f800a2aae300_IZqwi0wJovM.pdf (Lecture 23 transcript, 24 PDF pages; read, pages checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/a77a2a3a8c01d73741727acb73bffb69_lGGDIGizcQ0.pdf (Lecture 24 transcript, 22 PDF pages; read, pages checked with pdftotext -f N -l N)
verdict: needs-changes
---

# Review: Problem Set 8: differential equations, exp(At) and Markov matrices

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed: `.claude/worktrees/ps-1806-8/content/year-2/18.06/18-06-problem-set-8.mdx` (commit 7ccf077), calcs `calcs/18.06/18-06-problem-set-8.yaml`, symbols `data/symbols.json` in the same worktree. Strang's book, MIT's 18.06 problem-set PDFs and their solutions were not opened, fetched or searched. The stripped statements file was checked against a fresh run of `scripts/strip-solutions.py` on the page: identical.

## Blind solve

Writer: Opus. Reviewer: Opus (same model, blind).

### My answers (written from the stripped statements only, before opening the page; checked with blind.py in the scratch folder: numpy, scipy.linalg.expm, sympy, scipy.integrate.quad)

- 1(a): λ = −1 and −4 (trace −5, det 4).
- 1(b): x₁ = (1, 2) for −1, x₂ = (1, −1) for −4; c₁ = 1, c₂ = 2; u₂(t) = 2e^{−t} − 2e^{−4t} (u₁ = e^{−t} + 2e^{−4t}).
- 1(c): t = ln 4 / 3 = 0.4621; u₂,max = (3/2)·4^{−1/3} = 0.9449 (numerical maximisation agrees).
- 1(d): both columns of A add to −1, so (1,1)A = −(1,1), d(u₁+u₂)/dt = −(u₁+u₂), start 3, so 3e^{−t}.
- 2(a): λ = 2, 3; S = [[1,2],[1,1]], S⁻¹ = [[−1,2],[1,−1]]; (1,2) entry = 2e^{2t} − 2e^{3t} (equals expm at t = 0.3, 0.5, 1.1). Full: [[−e^{2t}+2e^{3t}, 2e^{2t}−2e^{3t}],[−e^{2t}+e^{3t}, 2e^{2t}−e^{3t}]].
- 2(b): series gives I and A; matrix: at 0 entries 1,0,0,1; derivatives 4, −2, 1, 1 = A.
- 2(c): −e + 2e^{1.5} = 6.2451.
- 2(d): exponential: every t; geometric: t < 1/3 (largest eigenvalue of At is 3t).
- 3(a): a < 6 (trace −5 always, det 6 − a > 0).
- 3(b): λ_max = (−5 + √(1 + 4a))/2.
- 3(c): −2.5 ± 2.5i: real part −2.5, imaginary 2.5; spiral in to zero (decaying oscillation).
- 3(d): eigenvalues ±3i; circles round the origin forever (period 2π/3), neither decay nor growth; d|u|²/dt = 2uᵀBu = 0 since Bᵀ = −B.
- 4(a): C = [[2,1,−2],[1,0,0],[0,1,0]]; c₁₁ = 2, c₁₃ = −2.
- 4(b): eigenvalues 2, 1, −1 ((λ−2)(λ−1)(λ+1)); largest 2.
- 4(c): y = e^{−t}, so y''(0) = 1.
- 5(a): λ₂ = 0.5; eigenvector for 1: (3, 2) (or (0.6, 0.4)).
- 5(b): columns add to 1 so total conserved; P_∞ = 600.
- 5(c): P_k = 600 − 600·0.5^k = 600(1 − 0.5^k).
- 5(d): P_5 = 581.25, P_6 = 590.625: year 6.
- 6(a): columns add to 1, so Aᵀ(1,1,1) = (1,1,1); same eigenvalues as A.
- 6(b): 0.5 and 0.2 (charpoly (λ−1)(2λ−1)(5λ−1)/10).
- 6(c): steady state ∝ (5/9, 2/3, 1) = (5, 6, 9): 500, 600, 900; second 600, third 900.
- 6(d): alternates (1,0), (0,1), (1,0), …: never settles; eigenvalues 1 and −1.
- 7(a): QQᵀ = I; x = (2, 2, 3, −1): x₃ = 3, x₄ = −1.
- 7(b): b₁ = 4/π = 1.2732, b₃ = 4/(3π) = 0.4244 (quad agrees; b₂ = 0).

### Comparison (one line per answer id)

All final answers agree with mine. Values compared numerically (blind.py: scipy.linalg.expm at t = 0.3, 0.5, 1.1 for e^{At}; numpy eigvals; sympy charpoly and nullspace; quad for b_n).

- p1-a-big: −1 = −1. Agree.
- p1-a-small: −4 = −4. Agree.
- p1-b-c2: 2 = 2. Agree.
- p1-b-u2: 2e^{−t} − 2e^{−4t} = mine. Agree (and equals expm(At)(3,0) second component).
- p1-c-t: 0.4621 (ln 4/3 = 0.462098). Agree; numerical maximisation 0.462098.
- p1-c-max: 0.9449 ((3/2)4^{−1/3} = 0.944941). Agree.
- p2-a: 2e^{2t} − 2e^{3t}. Agree with mine and with expm (e.g. t = 0.5: −3.526814 both).
- p2-c: 6.2451 (expm: 6.245096). Agree.
- p2-d-exp: "for every t" (choice 1). Agree.
- p2-d-geo: 0.3333 (1/3). Agree.
- p3-a: 6. Agree (eigenvalues at a = 5.9: −0.020, −4.98; at 6.1: +0.020).
- p3-b: (−5 + √(1 + 4a))/2. Agree (numpy at a = 0, 2, 5.9, 6.1).
- p3-c-re: −2.5; p3-c-im: 2.5; p3-c-what: "spirals in to zero". Agree.
- p3-d: "circles at a fixed size". Agree.
- p4-a-11: 2; p4-a-13: −2. Agree.
- p4-b: 2. Agree (sympy: (λ−2)(λ−1)(λ+1); det(C − λI) = −λ³ + 2λ² + λ − 2).
- p4-c: 1. Agree (expm(10C)(1, −1, 1) ≈ 4.5e−5 in every component: decays).
- p5-a-lam: 0.5; p5-a-x1: (3, 2). Agree.
- p5-b: 600. Agree.
- p5-c: 600 − 600·0.5^k. Agree (matrix powers k = 0…8 match).
- p5-d: 6 (P₅ = 581.25, P₆ = 590.625). Agree.
- p6-b-big: 0.5; p6-b-small: 0.2. Agree (charpoly (λ−1)(2λ−1)(5λ−1)/10).
- p6-c-2: 600; p6-c-3: 900. Agree (nullspace (5/9, 2/3, 1) → (500, 600, 900)).
- p6-d: "flips back and forth". Agree.
- p7-a-3: 3; p7-a-4: −1. Agree.
- p7-b-1: 1.2732; p7-b-3: 0.4244. Agree (quad: 1.273240, 0.424413).

No disagreement, so no calculation is needed to settle one.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Four solution formulas: "Solution of Problem 1" (`cite="reading1" at="p. 5"`), "The exponential of A" (`reading1`, `pp. 19–21`), "The first-order form of Problem 4" (`reading1`, `p. 23`), "Population in year k" (`reading2`, `p. 3`) | Those pages have the general method (general solution; Se^{Λt}S⁻¹ and e^{Λt} diagonal; the 2 × 2 companion form; u_k = Σcλᵏx), not these matrices or numbers | Cites our own derived results to transcript pages as if they were there, without "(our own solution)" or "(the numbers are our own)" | Change each `at=` to the form Set 10 uses, e.g. `at="p. 5 (the general solution; the numbers are our own)"`, `at="pp. 19–21 (the formula; the numbers are our own)"`, `at="p. 23 (the method; the third-order matrix is our own)"`, `at="p. 3 (the expansion; the numbers are our own)"`; or `cite="mit" at="Problem 1(b) (our own solution)"` etc. Change the matching calcs `source:` of p1-b-u2, p1-b-u1, p2-a-ode, p4-a-11, p4-a-13, p5-c, p5-c-step the same way |
| 2 | warning | Problem 5(d), hint | n/a (answer leak) | "Solve $600 - 600(0.5)^k > 590$ for $k$": a free hint that prints the whole answer of the 5(c) formula box (5 points) and the 5(b) box (600) | "Use your formula from part (c) and find the first whole $k$ for which it is above 590." |
| 3 | warning | Problem 5(c), hint | n/a (answer leak) | "then $u_k = c_1x_1 + c_2(0.5)^kx_2$": gives the 5(a) box value 0.5 | Write "$u_k = c_1x_1 + c_2\lambda_2^kx_2$, with $\lambda_2$ from part (a)" |
| 4 | warning | Problem 4(c), hint, and the symbol meanings of α, β, γ for this page | n/a (answer leak) | Hint "$y(t) = \alpha e^{2t} + \beta e^{t} + \gamma e^{-t}$" and the always-visible "Symbols on this page" meanings "the amount of e^(2t) / e^t / e^(−t) in y(t)" both give the eigenvalues 2, 1, −1, i.e. the 4(b) box (largest eigenvalue 2) | Hint: "$y(t)$ is a combination of $e^{\lambda t}$ for the three eigenvalues of part (b): which amounts must be zero?" (keep α, β, γ only in the solution). Symbols: "In Problem 4(c), the amount of the pure solution for the largest / middle / negative eigenvalue in y(t)" (no exponent shown) |
| 5 | warning | Choice boxes p2-d-exp and p3-c-what | n/a | Right answer is the shortest choice in both: "for every t" (11 characters against 20–42) and "spirals in to zero" (18 against 23–30) | e.g. p2-d-exp "for every t, however large" and p3-c-what "spirals in towards zero as it turns"; or shorten one distractor in each ("only for t < 1/2", "decays without turning") |
| 6 | warning | Order of Problems 2 and 3 | Lecture 23: solving the system (pp. 1–8), stability incl. complex eigenvalues and the 2 × 2 trace/determinant test (pp. 9–13), then e^{At} and the two series (pp. 14–21), then higher order (pp. 22–23) | Problem 2 (e^{At}, series) comes before Problem 3 (stability), against lecture order; the page's own "What you need" follows the lecture order | Swap Problems 2 and 3 (no part depends on the other), renumbering ids, labels, calcs ids and "Problem N" citations; or say in the intro that the exponential comes first on purpose |
| 7 | warning | Problem 5 (whole) | Lecture 24 pp. 10–14: two states (California, Massachusetts), 0.9/0.1 and 0.8/0.2 stay/move, start (0, 1000), eigenvalues 1 and 0.7, steady state by the total 1000 | Same story and structure (two regions, "stay"/"move" fractions per column, start (0, 1000), same steps), new matrix. The same example is a well-known textbook example too | Either change the start (e.g. $u_0 = (1000, 0)$: $P_k = 600 + 400(0.5)^k$, 5(d) "first year below 610" gives k = 6 as $2^k > 40$) or add one sentence: "Like the two-state example of Lecture 24, with our own numbers." |

## Arithmetic and answer checks
- Every number on the page recomputed (blind.py and by hand): 4, −5, eigenvectors (1, 2), (1, −1), c = (1, 2); e^{3t} = 4; 0.4621, 0.9449 and the caption's 0.46; S⁻¹ = [[−1, 2], [1, −1]]; all four entries of e^{At} (expm at t = 0.3, 0.5, 1.1); 2.7183, 8.9634, 4.4817, 0.9549, 7.2000 (7.19997), 6.2451; 1/3; det 6 − a, (−5 ± √(1+4a))/2, −25, −2.5 ± 2.5i, 12.5; ±3i; C, its determinant expansion, roots 2, 1, −1, trace 2, det −2; the α, β, γ equations of 4(c); 1.5, 0.5, 0.56 − 0.06, (3, 2), (1, −1), (600, 400), (480 + 120, 120 + 280), c = (200, −600), (300, 700), log₂ 60 = 5.907 → 5.91, 581.25, 590.625; column sums of Problem 6, trace 1.7, det 0.4·0.40 − 0.2·0.18 + 0.2·(−0.12) = 0.16 − 0.036 − 0.024 = 0.1, λ² − 0.7λ + 0.1, singular A − 0.5I, the elimination to (5, 6, 9), (500, 600, 900), third-row check 900; P's eigenvalues ±1 and the flip; QQᵀ = I, x = (2, 2, 3, −1), 18 = 18; ∫sin x = 2, ∫sin 3x = 2/3, b₁ = 4/π, b₃ = 4/(3π), b₂ = 0, a_n = 0. All correct; all rounding correct.
- Points: 16 + 14 + 16 + 12 + 16 + 14 + 12 = 100; every exercise's parts add up to its points.
- Number boxes and tolerances: 0.01 for values of size ≥ 1, 0.005 below 1, as "How to answer" says. Each rejects the likely slips I tried: 1(c) ln 2/3 = 0.231, ln 4/4 = 0.347; 2(d) 0.5 (forgetting the larger eigenvalue); 5(a) 0.7 (an entry); 5(d) 5 or 5.91; 6(b) 0.7, 0.1; 7(b) 2/π = 0.637, 2/(3π) = 0.212. 3(c) and 4 boxes are whole or half numbers. All fine.
- Formula boxes: p1-b-u2 (t in [0.05, 4]), p2-a (t in [0.1, 1]), p3-b (a in [0, 5]), p5-c (k in [1, 10]): answers and every mistake finite over the whole range; each mistake differs from the answer everywhere in it (p3-b's mistake −5 + √(1+4a) meets the answer only at a = 6, outside the range; p5-c's 0.7ᵏ meets 0.5ᵏ only at k = 0). Every mistake hint is true of its formula: reversed signs (slope 6 at t = 0; slope −2 of the (1, 2) entry), swapped constants (u₂(0) = 3), S e^{Λt} without S⁻¹ ((1, 2) entry 2e^{3t}), +5 instead of −5, missing ½ (−4 at a = 0), 0.7 an entry, 1200 at k = 0.
- Choice boxes: right positions 1, 2, 3, 2, 2 (varied); lengths: see finding 5.
- The time and size of u₂'s maximum: t* = ln 4 / 3 = 0.4621, u₂(t*) = (3/2)·4^{−1/3} = 0.9449: correct (numerical maximisation of expm(At)(3, 0) gives 0.462098 and 0.944941).
- e^{At} entries: all four equal scipy.linalg.expm to 1e−12 relative at three times.
- First year above 590 in Problem 5: year 6, correct (matrix powers: 581.25 in year 5, 590.625 in year 6).
- b₁ = 4/π and b₃ = 4/(3π) and the b_n derivation: correct; the "Sine coefficients" formula is cited "(our own solution)", which is right (Lecture 24 p. 21 does a₁ only). The intro's a₁ formula is at L24 p. 21.
- Calcs: `npm run calc:test` in the worktree passes (23399 passed); `npm run content:check` 0 errors (only the missing review warning). The removed third-order series entry: 2(a) is still covered by p2-a (Sylvester's formula, independent of S) and p2-a-ode (the (1, 2) and (2, 2) entries in the first row of dE/dt = AE). Not covered: the (1, 1) and (2, 1) entries shown in the formula "The exponential of A"; p2-c computes the (1, 1) value from the page's own formula only (see notes).

## Coverage and order
- Lecture 23 (solving du/dt = Au, stability, steady state, 2 × 2 test, e^{At} and the two series, higher order as a system) and Lecture 24 (Markov matrices, λ = 1, Aᵀ eigenvalues, the two-state example, the exceptional |λ| = 1 case, expansion in an orthonormal basis, Fourier coefficients) are all practised. The L23 steady-state case (eigenvalue 0) appears in 3(a)'s check; the L24 remark on row-stochastic conventions (p. 15) is not practised (fine for a set).
- Order: Problems 1–4 on Lecture 23, 5–7 on Lecture 24, but Problems 2 and 3 are out of lecture order (finding 6).
- No overlap with Set 9 (symmetric, positive definite) or Set 10 (complex matrices, F₄ and the FFT, similar matrices, Jordan, SVD): Set 10 has no e^{At}, no Markov matrix and no real Fourier series; its four-point basis is the complex F₄, ours the real ½(±1) basis.

## Licensing
- No MIT figure, no textbook exercise, no "rights reserved" material; graphs are generated from formulas. No OpenStax or LibreTexts. No sentence copied from the transcripts (phrases such as "pure exponential solution", "steady state", "exceptional case" are standard terms).
- Textbook resemblance, from my own knowledge only: Problem 5 mirrors the lecture's (and a well-known textbook's) two-state migration example (finding 7). The square wave with b_n = 4/(nπ), the rotation matrix with constant length (3(d)) and the swap matrix [[0, 1], [1, 0]] (6(d)) are standard examples found in every text; with our own numbers they are acceptable (info). Problems 1, 2, 3, 4, 6 and 7(a) do not resemble any exercise I know.

## Citations
All `at=` counted as PDF pages (the transcripts have no printed footer) and checked with `pdftotext -f N -l N`:
- L23: p. 5 (general solution of pure exponentials) correct; pp. 9–10 (negative real part, steady state with λ = 0, blow-up) correct; pp. 12–13 (trace negative and determinant positive) correct; pp. 13–14 (Sc = u(0), S the eigenvector matrix) correct; pp. 15–20 (u = Se^{Λt}S⁻¹u(0) on p. 15, the series on pp. 16–17, the S, Λ derivation on pp. 19–20) correct; pp. 17–18 and p. 18 (geometric series; converges when eigenvalues of At are below 1; exponential series always converges) correct; p. 23 (u = (y′, y), first row from the equation, trivial second row, ones for higher order) correct; pp. 19–21 for e^{At} formula correct as method (finding 1).
- L24: pp. 2–4 (λ = 1, other |λ| < 1 with exceptional cases, p. 2; u_k expansion and steady state, p. 3; why λ = 1, pp. 4–6) correct; p. 3 correct; pp. 7–8 (det(A − λI) = det(Aᵀ − λI)) correct; pp. 15–16, p. 16 (x₁ = q₁ᵀv) correct; pp. 19–20 (inner product ∫₀^{2π} fg dx, orthogonality) correct; pp. 18–21 and p. 21 (the series, a₁ = (1/π)∫f cos x dx, ∫cos² = π) correct. Calcs: p6-b-one reading2 pp. 4–6 and p7-b-sin2 reading2 p. 21 correct.
- Both readings are cited. Every "Problem N (our own problem)" and "(our own solution)" marker present except the four in finding 1.

## Leaks (the writer's list and my own)
- 2(d) distractor "only for t below 1/2" in the exponential box: a lure for the geometric-series slip; it does not give 1/3 and is wrong for the exponential box. Acceptable.
- 4(c) statement "Two eigenvalues are positive": gives a sign pattern, not the value 2 of the 4(b) box. Acceptable on its own; but the 4(c) hint and the α, β, γ symbol meanings do give the eigenvalues (finding 4).
- 3(a) solution check gives the eigenvalues 0 and −5 at a = 6 before the 3(b) box: one point of a formula, behind a solution that costs 3(a)'s points. Acceptable.
- 5(b) "the total number of people stays 1000" with P boxed: 1000 is in the statement anyway; it does not give 600. Acceptable.
- 6(c) first club unboxed: nothing on the page shows 500 before the solution. Acceptable.
- Found in addition: the 5(d) and 5(c) hints (findings 2 and 3), the 4(c) hint and α, β, γ meanings (finding 4).
- "How to answer" example `100*0.9^k` has the shape of the 5(c) answer but none of its numbers: acceptable. Other symbol meanings for this page (λ₃, x₃, x₄, s, z, k, c₁₁, c₁₃, b₃, P, B, C) show no result.

## Notes
- warning: result-like numbers a reader sees that are not in calcs (`npm run scan -- --numbers --uncovered`): the traces 1.5 (5(a), also in a mistake hint) and 1.7 (6(b)), λ₂ + λ₃ = 0.7 and λ₂λ₃ = 0.1 (6(b)), the eigenvector (5, 6, 9) with 5 + 6 + 9 = 20 and the factor 100 (6(c)), the Q-components 400 and 700 (5(b), 5(c) checks), 1200 (5(c) mistake hint), 0.46 (Problem 1 plot caption), and the (1, 1) and (2, 1) entries of e^{At}. Fix: add entries (e.g. `p5-a-trace` 0.8 + 0.7 = 1.5; `p6-b-trace` 0.4 + 0.6 + 0.7 = 1.7; `p6-c-x` the second row 0.3·5 + 0.6·6 + 0.1·9 = 6 of (5, 6, 9) and its total 20; `p5-b-q` 1000·0.2/0.5 = 400; `p5-c-mistake` 600 + 600 = 1200; add 'near t = 0.46' to p1-c-t's `shown`), and two `kind: identity` entries for the first column of e^{At}: deriv of E₁₁ = −e^{2t} + 2e^{3t} equals 4E₁₁ − 2E₂₁ and deriv of E₂₁ = −e^{2t} + e^{3t} equals E₁₁ + E₂₁ (both true: checked), which also gives p2-c an independent route.
- info: "How to answer" says the tolerance is 0.005 "when the exact value is below 1"; the boxes with −1, −2, −2.5, −4 use 0.01, which is right for their size but not what "below 1" says literally. Write "below 1 in size".
- info: 1(d)'s check says "In Lecture 23's example the columns add to zero": true (L23 A = [[−1, 2], [1, −2]], p. 1), uncited; add "(Lecture 23 transcript, p. 1)" if wanted.
- info: no em dashes, no `## Summary`, every "show/check" step boxed or said to have none (1(d), 2(b), 3(d), 4(b), 5(b), 6(a), 7(a)); every letter with a meaning elsewhere has a page-scoped meaning for `18-06-problem-set-8` covering its uses here (content:check passes, and I read all 68 meanings: x, y, k, i, n, c cover every use on the page).
- Everything above was verified by me; nothing is marked uncertain except that the lecture resource page itself was not fetched (its transcripts were read).

COUNTS: errors=1 warnings=7 info=3

## Resolution (2026-11-28, by the page author)

Problems 2 and 3 were swapped (finding 6), so the problem numbers in the review above refer to the old order: the review's Problem 2 (the matrix exponential) is now Problem 3, and its Problem 3 (stability) is now Problem 2.

- Finding 1 (error): the four solution formulas now say what is ours: "Solution of Problem 1" `at="p. 5 (the general solution; the numbers are our own)"`, "The exponential of A" `at="pp. 19–21 (the formula; the numbers are our own)"`, "The first-order form of Problem 4" `at="p. 23 (the method; the third-order matrix is our own)"`, "Population in year k" `at="p. 3 (the expansion; the numbers are our own)"` (each page checked to carry the general method); the calcs `source:` of p1-b-u2, p1-b-u1, p3-a-ode (was p2-a-ode), p4-a-11, p4-a-13, p5-c and p5-c-step changed the same way.
- Finding 2: the 5(d) hint is now "Use your formula from part (c) and find the first whole k for which it falls below 610." (with the new 5(d), finding 7).
- Finding 3: the 5(c) hint now reads "u_k = c₁x₁ + c₂λ₂^k x₂, with λ₂ from part (a)".
- Finding 4: the 4(c) hint is now "y(t) is a combination of e^{λt} for the three eigenvalues of part (b): which amounts must be zero?"; α, β, γ are introduced in the solution only; their page meanings now say "the amount of the pure solution for the largest / middle / negative eigenvalue in y(t)". The other meanings for this page were rechecked: none shows a result; the meanings of a and B now name Problem 2.
- Finding 5: the right choices are now "for every t, however large" (26 characters against 20–42) and "spirals in, shrinking to zero" (29 against 23–30): neither the shortest nor the longest.
- Finding 6: Problems 2 and 3 swapped, so stability (Lecture 23 pp. 9–13) comes before e^{At} (pp. 14–21): headings, exercise and answer ids, calcs ids, "Problem N" texts and citations renumbered, the summary reordered; points kept (16 and 14, total 100, `intro-points` updated).
- Finding 7: Problem 5 now starts from u₀ = (1000, 0), so c = (200, 400) and P_k = 600 + 400(0.5)^k; 5(d) asks for the first year in which P's population falls below 610 (k = 6: P₅ = 612.5, P₆ = 606.25, log₂ 40 ≈ 5.32); the statement adds "(Like the two-state example of Lecture 24, with our own numbers: Lecture 24 transcript, pp. 10–14.)". Box, mistakes (600 + 400·0.7^k; 600 − 400·0.5^k, which gives 200 at k = 0), solution steps, checks ((800, 200) in year 1) and calcs entries updated; all values recomputed with NumPy matrix powers (k = 0 … 8) and eigvals.
- Warning 8: calcs entries added for the trace 1.5 (`p5-a-trace`, also its mistake hint), the trace 1.7, λ₂ + λ₃ = 0.7 and λ₂λ₃ = 0.1 (`p6-b-trace`, `p6-b-sum`, `p6-b-prod`), (5, 6, 9) row by row, the total 20 and the factor 100 (`p6-c-x1`, `p6-c-x2`, `p6-c-x3`, `p6-c-total`, `p6-c-scale`), the Problem 5 numbers (`p5-b-q`, `p5-b-check-p`, `p5-b-check-q`, `p5-c-year1`, `p5-c-year1-q`, `p5-c-mistake` for the 200 of the mistake hint), 'near t = 0.46' added to p1-c-t's `shown`, and the identities E₁₁′ = 4E₁₁ − 2E₂₁ and E₂₁′ = E₁₁ + E₂₁ for the (1, 1) and (2, 1) entries of e^{At} (`p3-a-e11`, `p3-a-e21`; checked against scipy.linalg.expm first).
- Info 1: "How to answer" now says 0.005 applies when the exact value is "below 1 in size".
- Info 2: 1(d)'s remark on Lecture 23's example now cites "Lecture 23 transcript, p. 1" (checked: the matrix with rows (−1, 2) and (1, −2) is set up there).
- Other info items left as they are.
