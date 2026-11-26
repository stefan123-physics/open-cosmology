---
page: content/year-3/8.05/8-05-problem-set-2.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-2/ (read: sheet PDF and pdftotext text)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: Wave Mechanics notes, eqs. (4.2), (5.13)–(5.18), (5.23)–(5.26))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: chapter 2 PDF, eqs. (2.29), (2.30))
verdict: pass-with-notes
---

# Review: Problem Set 2: A barrier in a well, nodes, and the variational principle at work

## Blind solve

### My answers (written before opening the full page)
- 1(a): odd states sin(2πnx/a) vanish at x = a/2; even states psi = A sin kx (left), A sin k(a−x) (right); jump psi'(a/2+) − psi'(a/2−) = (2mV0a/ħ²) psi(a/2) gives tan(ka/2) = −ka/γ.
- 1(b): ka/2 = π − δ, δ = 2π/(γ+2) ≈ 2π/γ; E1 = (2π²ħ²/(ma²))(1 − 4/γ).
- 1(c): E2 = 2π²ħ²/(ma²) (odd state, k = 2π/a, exact); E2 − E1 = 8π²ħ²/(ma²γ) → 0 as γ → ∞: the two levels become degenerate (two decoupled wells).
- 2(a): d/dx[psi_{k+1}psi_k' − psi_k psi_{k+1}'] = (Ẽ_{k+1} − Ẽ_k) psi_k psi_{k+1}; integrate. Test value 2π ≈ 6.28319.
- 2(b): if psi_{k+1} > 0 on (a,b): LHS = psi_{k+1}(b)psi_k'(b) − psi_{k+1}(a)psi_k'(a) ≤ 0 (psi_k'(a) > 0, psi_k'(b) < 0), RHS > 0: contradiction (and the reverse signs if psi_{k+1} < 0).
- 3(a): expand psi = Σ_{n≥2} c_n psi_n, ⟨H⟩ = Σ E_n|c_n|² ≥ E2. Usable without psi1: symmetric (even) potential with an odd trial function.
- 3(b): F = E2 + Σ_{n≠2} ε_n²(E_n − E2) + O(ε³); linear terms cancel; ε2 drops out (exactly: it only rescales); saddle point: maximum along ε1, minimum along ε_n (n ≥ 3), flat along ε2. Truncated: E2 + eps1²(E1 − E2) + eps3²(E3 − E2).
- 4(a): ħ²α/(4m).
- 4(b): |V(x)| ≥ |V_b(x)| everywhere, so −∫psi²|V| ≤ −v0∫_{x1}^{x2}psi²; small α: −v0 Δ sqrt(α/π).
- 4(c): E(α) ≤ ħ²α/(4m) − v0Δ sqrt(α/π) e^{−αX²} (X = max|x1|,|x2|) < 0 for small α (√α beats α); E_gs ≤ E(α) < 0 and the continuum starts at E = 0, so a bound state exists.
- 5(a): β = (ħ²/(mα))^{1/6}; E = e (ħ⁴α/m²)^{1/3} = e ħ²/(mβ²).
- 5(b): e0 = 0.667986 (shooting, 0.6679862592); slope zero because V is even, bound states are nondegenerate and so have definite parity, and the nodeless ground state is even.
- 5(c): F(b) = 3b/4 + 15/(4b²); minimum at b = 10^{1/3}: F = (9/8)·10^{1/3} = 2.42374.
- 5(d): e1 = 2.39 (2.393644); below the bound 2.424 by about 1.3 %, as it must be. (Next level e2 = 4.69680.)
- 6: M² = 1, so e^{iMθ} = cos θ·1 + i sin θ·M: A = cos θ, B = i sin θ, B/i = sin θ. Property: M² = 1.

Numerical checks: script rv805ps2.py in the scratchpad (scipy solve_ivp shooting to u = 4.5, rtol 1e-12, brentq; quad for F(b); exact root of tan(ka/2) = −ka/γ at γ = 100, 1000 agrees with 1(b) to O(1/γ²)).

### Comparison with the page (one line per answer id)
- p1-cond: page −ka/γ = mine. Agree. All three mistakes verified to follow from the stated slip (attractive sign; jump k cos instead of 2k cos; jump (γ/a)ψ).
- p1-gs: page (2π²ħ²/(ma²))(1 − 4/γ) = mine. Agree. Exact root at γ = 50: ka = 6.042646, E = 18.2568 (page 18.257), formula 18.1601 (page 18.160), difference 0.53 % (page "half a percent").
- p1-e2: 2π²ħ²/(ma²) = mine. Agree.
- p1-de: 8π²ħ²/(γma²) = mine. Agree (exact splitting 0.07872 vs 0.07896 at γ = 1000, units ħ²/(ma²)).
- p1-limit: choice 2 (vanishes; two separate wells) = mine. Agree.
- p2-test: 6.283 = 2π = mine. Agree.
- p2-signs: choice 0 (left ≤ 0, right > 0) = mine. Agree.
- p3-odd: choice 1 (odd trial function, even potential) = mine. Agree.
- p3-f: E2 + eps1²(E1 − E2) + eps3²(E3 − E2) = mine. Agree.
- p3-drop: choice 2 (ε₂) = mine. Agree.
- p3-kind: choice 3 (saddle: falls along ε₁, rises along ε₃…, flat along ε₂) = mine. Agree.
- p4-kin: ħ²α/(4m) = mine. Agree.
- p4-why: choice 0 = mine. Agree.
- p4-pot: −v0 Δ sqrt(α/π) = mine. Agree.
- p5-beta: (ħ²/(mα))^(1/6) = mine. Agree.
- p5-e: e(ħ⁴α/m²)^(1/3) = mine. Agree.
- p5-even: choice 2 = mine. Agree.
- p5-e0: 0.667986 = mine (0.6679862592). Agree. Independent check: 2^(−2/3) × 1.0603621 (ground state of p² + x⁴) = 0.667986.
- p5-fb: 3b/4 + 15/(4b²) = mine (also by quadrature at b = 1, 2). Agree.
- p5-bound: 2.424 = (9/8)·10^(1/3) = 2.42374 = mine. Agree.
- p5-e1: 2.394 = mine (2.393644016). Agree. The page's "4.70" for the next even level: my shooting gives 4.696795, so it is right to three digits.
- p5-cmp: choice 1 ("about 1% above"; actual 1.26 %) = mine. Agree.
- p6-a: cos θ = mine. Agree.
- p6-b: sin θ (B/i) = mine. Agree.
- p6-prop: choice 3 (M² = 1) = mine. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(b), box p5-even | (house rule: right choice never the longest) | Right choice (index 2) has 111 characters, the longest; choice 0 has 110 | Shorten the right choice, e.g. "the ground state has no node, so it is even, and an even function with a continuous slope is flat at u = 0", or lengthen choice 0 |
| 2 | warning | Problem 3(b), box p3-drop | (same rule) | Right choice (index 2, 62 characters) ties with choice 3 (62) for the longest | Lengthen choice 3, e.g. "the εₙ with n above 2, because those states have a higher energy than ψ₂" |
| 3 | warning | Problem 3(b), box p3-f, mistake `E2 + eps1^2*E1 + eps3^2*E3` | n/a | Hint: "Here the denominator was taken to be 1." Taking the denominator as 1 gives the numerator, which is the first listed mistake; this formula has also dropped the ε₂ terms | Reword: "Here the ε₂ terms were dropped and the denominator taken to be 1. To this order the denominator is 1 + 2ε₂ + ε₁² + ε₂² + ε₃², and dividing by it turns each Eₙ into Eₙ − E₂." |
| 4 | warning | data/symbols.json, the β meaning scoped to this page | n/a | Unit "m", but the meaning's second use (Problem 4 checks: the lesson's Gaussian width β, with β² in the place of α, β = √α) has units 1/m | Remove the `unit` from this meaning (two uses, two units), or split it into two meanings |
| 5 | info | Intro paragraph, list of boxes that are "our additions" | MIT itself asks what happens to the difference (1), whether any ε drops out and the nature of the critical point (3b), why the derivative is zero (5b), to compare (5d), to explain the bound (4) and the algebraic property (6) | The intro names the choice boxes of 2(b), 3(a), 4(b), 5(d) as ours, but not those of 1(c), 3(b), 5(b), 6; the 4(b) and 5(d) boxes put MIT's own questions in choice form just like the unlisted ones | Optional: name as ours only the boxes that add a question (1(a), 2(a), 2(b) and 3(a) choices, 3(b) truncation, 4(b) small-α form, 5(c) trial function), and say that the other choice boxes ask MIT's questions in choice form |

## Arithmetic and answer checks
- Every number on the page recomputed: ka = 6.0426, 18.257, 18.160, 0.5 %, 19.739, 4.935 (Problem 1); second root ξ/π = 1.924, between 3π/2 and 2π; sin(ka/2) = 0.120 at the barrier; 2π = 6.283 on both sides of the test identity, integral 2/(3π); Gaussian bound b³ = 6, 0.6814, 2 % above; b = 10^(1/3) = 2.154, 2.424; 1.3 %; 0.667986259, 2.393644, 4.70 (my shooting 4.696795); 4(b) sandwich ratio 0.509; 4(b) example −0.294. All correct.
- Formula-box ranges keep every expression finite and real; each listed mistake differs from the answer over its range; every mistake hint was checked against its formula (all true except #3).
- Number-box tolerances: p2-test 0.5 %, p5-e0 ±2e-6 (fits "six digits"), p5-bound ±0.003 (rejects 2.394), p5-e1 ±0.005 (accepts 2.39, rejects 2.424). Fine.
- The leading-order boxes p1-gs, p1-de, p3-f, p4-pot each say which form to type, so a reader with a correct but differently truncated form (e.g. (1 − 2/γ)²) is told in advance. Acceptable.
- Every solution ends with a check (limits, units, numbers, a graph, properties of the rotation matrix). Step algebra verified, including the states with a node at the middle (B = −A gives A sin kx in the whole well), the explicit α bound in 4(c) (√α < 4m v₀Δ/(e√π ħ²) for α ≤ 1/L²), the three integrals of 5(c), and e^{iMθ} = [[cos θ, sin θ], [−sin θ, cos θ]] with derivative iM at θ = 0.
- No hint gives a result away.
- calcs: every `shown:` string occurs verbatim on the page (script check); every number and formula box has a calcs entry with `answer:`. No control characters (\r, \t, \f, \b) in the page; no em dashes; no `## Summary`.
- Right-choice positions 2, 0, 1, 2, 3, 0, 2, 1, 3: varied. Longest-string rule broken only in #1 and #2.

## Coverage and order
- All six MIT problems are present, in MIT's order, with MIT's points (10, 10, 10, 10, 20, 5); the part splits add up.
- MIT's statements are followed; the reading list is left out (said so). Problem 4 is written from MIT's own complete statement; Shankar is not used. The renamings Ṽ → V_b and script E, U → Ẽ, Ṽ are stated.
- `covers: [2, 4]`: the OCW calendar gives Lectures 3–4. Problems 1–5 use only the Lecture 2 lesson (one-d-spectrum-variational: the theorems, continuity of ψ′, the node theorem with the partial result "left as homework", the variational principle, the saddle "to be shown in homework", attractive potentials binding), and Problem 6 the Lecture 4 lesson (Pauli matrices). Nothing practises Lecture 3 (position-momentum-stern-gerlach). The writer's choice is supported by the content.
- Claims about lessons checked and correct: Theorem 1 and its Wronskian proof, Theorem 3 with its corollary, "ψ = ψ′ = 0 at one point gives ψ = 0" (wave-mechanics-eigenstates, Lecture 1), the delta-well strength called α in the lesson, F[ψ] in the lesson, and 8.05 Problem Set 1 Problem 4(b) (a shallow square well always binds).

## Licensing
- MIT's sheet has no "rights reserved" or "courtesy" notices. The wording is the page's own; no textbook material; no MIT figure (the one graph is generated from formulas).

## Notes
- Lecture-note citations re-read in the PDFs: (4.2) "ψ and ψ′ continuous unless the potential has delta functions or hard walls" correct; (5.13) is the variational statement, whose proof is (5.15)–(5.18), so "(5.13), adapted" is acceptable; (5.24) gives β²ħ²/(4m) − αβ/√π, matching both uses on the page; chapter 2: (2.29) Ŝᵢ = (ħ/2)σᵢ and (2.30) the Pauli matrices, correct.
- MIT citations: printed pages p. 1 (Problem 1, opening of Problem 2), p. 2 (2(a), 2(b), 3(a), 3(b) with eq. (3)), p. 3 (Problems 4, 5, 5(a)), p. 4 (5(b)–(d), Problem 6, eq. (4)): all match the PDF.
- Symbols: 74 page-scoped meanings, no duplicate forms; spot-checked γ, ξ, s, L, v₀, x₀, x₁, x₂, V_b, U, Ẽ_k, εₙ, e, e₁, e₂, g, ψ_α, σ₁–σ₃, n_x, n_y, n_z, b, b₁, b₂, δ_mn, E₄: correct for this page. Only issue: #4.

COUNTS: errors=0 warnings=4 info=1

## Resolution (2026-11-26, by the page author)

- Warning 1 (p5-even, right choice longest): shortened to "… an even function with a continuous slope is flat at u = 0".
- Warning 2 (p3-drop, tie for longest): choice 3 lengthened to "the εₙ with n above 2, because those states have a higher energy than ψ₂".
- Warning 3 (p3-f mistake hint): now "Here the ε₂ terms were dropped and the denominator taken to be 1. …", true of that formula.
- Warning 4 (β unit): the unit "m" removed from the β meaning scoped to this page, since β is also √α (1/m) in Problem 4.
- Info 5: no change.
