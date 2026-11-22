---
page: content/year-2/8.04/8-04-problem-set-7.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps7_2016/ (read: ps7.pdf / ps7.txt, 2 printed pages)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes12/ (read: PDF, 12 printed pages)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes13/ (read: PDF, 12 printed pages)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes14_15/ (read: PDF, 8 printed pages)
verdict: pass-with-notes
---

# Review: Problem Set 7: Two delta wells, sketching wavefunctions and the harmonic oscillator

## Blind solve

The answers below were written to this file from the stripped statements and MIT's sheet only, before the full page or its calcs file was opened.

### My answers
Units: P1 energies in ħ²/(ma²), ξ = κa, λ = mag/ħ².

- p1a even: λ = ξ(1 + tanh ξ)/2
- p1a odd: λ = ξ(1 + coth ξ)/2
- p1a: a second bound state exists for λ > 1/2
- p1a at λ = 1: ξ_even = 1.10886, E_even = −0.6148; ξ_odd = 0.79681, E_odd = −0.3175
- p1b: ΔE = 2λ²e^(−2λ) ħ²/(ma²) = (2mg²/ħ²) e^(−2mag/ħ²) (checked against the exact roots: λ = 3: 0.04463 vs 0.04462; λ = 5: 0.0022700 vs 0.0022700)
- p2a: ground state even, no node; in the barrier a cosh, positive, lowest at x = 0
- p2b: first excited state odd, a sinh in the barrier, one node at x = 0
- p2c: d → 0: E₂/E₁ = 4; V₀ → ∞: E₂/E₁ = 1
- p2d: E₁ decreases, E₂ increases as d decreases (checked numerically with V₀ = 30, d = 2, 1, 0.5, 0.25, 0.1: E₁ = 6.964, 6.933, 6.628, 5.814, 4.439; E₂ = 6.964, 6.994, 7.297, 8.027, 8.973); even state bonding (attraction), odd antibonding (repulsion)
- p2e: E₁ = 6.6283, E₂ = 7.2972 in ħ²/(2mw²) (matching conditions and an independent shooting integration, solve_ivp rtol 1e-11, agree to 1e-8)
- p3a: P₀ = erfc(1) = 0.1573
- p3b: P₁ = erfc(√3) + 2√(3/π) e^(−3) = 0.1116
- p3c: P₂ = 0.0951 (quadrature); slow decrease with n
- p4a: ⟨x⁴⟩ = 3(ħ/(2mω))²(2n² + 2n + 1)
- p4b: Δx = √((n + ½)ħ/(mω)), Δp = √((n + ½)mħω), product (n + ½)ħ
- p4c: proofs (leading term from the s^n coefficient of e^(2sξ); ODE from the identity G_ξξ − 2ξG_ξ + 2sG_s = 0)
- p5a: E_k = ħω(2k + 3/2)
- p5b: ψ = √2 ψ₁ on x > 0; ⟨x⟩ = 2√(ħ/(πmω)) = 1.128 a
- p6a: Ψ = (ψ₀e^(−iωt/2) + ψ₁e^(−3iωt/2))/√2; |Ψ|² = (ψ₀² + ψ₁²)/2 + ψ₀ψ₁ cos ωt
- p6b: ⟨x⟩ = √(ħ/(2mω)) cos ωt; amplitude √(ħ/(2mω)), angular frequency ω
- p6c: ⟨p⟩ = −√(mħω/2) sin ωt
- p6d: Ψ(t + T) = −Ψ(t), so the densities are equal

### Comparison (one line per answer id)
- p1-even: page `xi*(1 + tanh(xi))/2` = mine. Agree.
- p1-odd: page `xi*(1 + 1/tanh(xi))/2` = mine. Agree.
- p1-threshold: page 0.5 = mine. Agree.
- p1-e-even: page −0.615; mine −0.6148. Agree (2% box).
- p1-e-odd: page −0.317; mine −0.31745. Agree; rounds correctly, and the calcs entry passes with 0.00045 against a ±0.0005 digit tolerance (close but correct).
- p1-split: page 2mg²/ħ² · exp(−2mag/ħ²) = mine. Agree.
- p2-ground: choice 2 (cosh dip, no zero). Agree.
- p2-excited: choice 0 (single node at centre, sinh). Agree.
- p2-ratio-open: 4. Agree.
- p2-ratio-closed: 1. Agree.
- p2-bond: choice 2 (E₁ falls, E₂ rises). Agree.
- p2-e1: 6.63; mine 6.6283. Agree (my shooting reproduces 6.628271).
- p2-e2: 7.30; mine 7.2972. Agree (my shooting reproduces 7.297198).
- p3-n0: 0.157; mine 0.1573. Agree.
- p3-n1: 0.112; mine 0.11161. Agree; rounds correctly (0.1116 → 0.112), calcs diff 0.00039 against ±0.0005, and a reader's 0.1116 or 0.111 is inside the 1% box.
- p3-n2: 0.0951; mine 0.09507. Agree.
- p4-x4: 3ħ²(2n² + 2n + 1)/(4m²ω²) = mine. Agree.
- p4-dx, p4-dp, p4-product: equal to mine. Agree.
- p5-energy: ħω(2k + 3/2) = mine. Agree.
- p5-x: 2√(ħ/(πmω)) = mine. Agree.
- p6-x: √(ħ/(2mω)) cos ωt = mine. Agree.
- p6-freq: choice 3 (ω, difference of energies over ħ). Agree.
- p6-p: −√(mωħ/2) sin ωt = mine. Agree.
- Self-marked parts (1a plot and features, 4c, 6a, 6d): the page's derivations match mine step by step.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 3 statement and intro | "the probability that the coordinate x takes a value greater than the amplitude" | P_n is the probability of \|x\| > A_n (both sides); the intro says the one-sided value is half | None needed. The reading is the usual one and is stated openly in the intro and the problem, so a reader of the page is not misled. Optional: mention in Problem 3 itself (not only in the intro) that the right-hand side alone gives half. |
| 2 | info | Problems 2 and 5 | Griffiths 2.47 and 2.42, by number only | Our own problems (divided box with hard walls; atom on a surface), labelled "(our own problem)" in the title, in the problem text and in the intro, with MIT's points 10 and 5 | None. Both are sound (checked below) and clearly marked. |
| 3 | info | frontmatter `covers` | (course rule suggested [14, 15]) | [12, 13, 14, 15] | Keep. On this site shape-of-wavefunctions is lecture 12, shooting-method 13, delta-well-node-theorem-oscillator 14, creation-annihilation-operators 15. Problem 2 (sketching, shooting) needs 12 and 13, Problem 1 needs 14, Problems 3 to 6 need 14 and 15. The overlap with Problem Set 6 ([10, 11, 12, 13]) only means lectures 12 and 13 get two "Practise" links. |
| 4 | info | Problem 6 statement and parts (a), (d) | "where φ0 and φ1 are the normalized eigenstates of the Hamiltonian with number eigenvalue zero and one, respectively"; "You may leave your expressions in terms of φ0 and φ1" | Nearly the same words, with ψ for φ | Acceptable (one-sentence technical statements). Optional light rewording, e.g. "ψ₀ and ψ₁ are the normalized ground state and first excited state". |
| 5 | info | Problem 6 | φ_n | ψ_n, with the choice ψ₁ = â†ψ₀ (positive for x > 0) | None; disclosed in the problem and the intro. The sign choice fixes the sign of ⟨x⟩ and ⟨p⟩, which MIT leaves open. |

## Arithmetic and answer checks
- All 64 calcs entries for this page pass (`pytest tests/calc -k "problem-set-7 and 8.04"`, run in the worktree: 64 passed).
- Problem 1: transcendental equations, threshold λ = ½, roots at λ = 1 (ξ = 1.1089, 0.7968), weak-well limit −2λ², strong-well limit −λ²/2, and the check ∫ψ_even dx = 2Ae^(κa)/κ leading to ξe^ξ = 2λ cosh ξ: all recomputed, correct. Splitting checks: λ = 2 exact 0.1475 vs formula 0.1465; λ = 3 0.04463 vs 0.04462 (I get the same). Mistake hints: dropping the outside slope gives ξ tanh ξ/2 (even) and ξ coth ξ/2 = ξ/(2 tanh ξ) (odd), as the hints say; m g²/ħ² e^(−2λ) is indeed the shift of one level (half the splitting).
- Problem 1 Plot: parametric curves λ = s/(1 ± e^(−2s)), E = −s²/2 are the page's exponential forms; the odd curve starts at λ = 0.5005 for s = 0.001; caption claims (even below, odd above the dashed single-well curve, both approach it) are correct.
- Problem 2: E₁ = 6.6283, E₂ = 7.2972 from both matching and shooting (my own code); d-dependence numbers 6.93/6.63/5.81 and 6.99/7.30/8.03 confirmed. Limits π²/4 = 2.47 and π² = 9.87 correct. The claim "for any finite barrier the ratio lies between 1 and 4" holds under the page's assumption E₂ < V₀: ψ'/ψ ≥ 0 at the barrier edge forces π/2 ≤ k (even) and k < π (odd).
- Problem 2 Plot expressions: `abs`, `sign` and the ternary are valid mathjs; constants 2.5745, 4.8344, 0.2945 (even) and 2.7013, 4.7647, 0.2853 (odd) recomputed; at x = 0.25 the value and the slope of the cosh/sinh piece equal those of the sine arc to 6 digits (2.17160 vs 2.17160; 2.44374 vs 2.44374), so the drawn curves are the exact eigenfunctions. `sign(0) = 0` falls inside the barrier branch, so it is never used.
- Problem 3: P₀ = 0.1573, P₁ = 0.0973 + 0.0143 = 0.1116 → 0.112, P₂ = 0.0935 + 0.0016 = 0.0951; the closed form (2c³ + c)e^(−c²)/√π + erfc(c) checked against quadrature. erfc values in the statement correct.
- Problem 4: ⟨x⁴⟩ checks 3/4, 15/4, 39/4, 75/4 for n = 0..3 correct; large-n limit (3/8)A_n⁴ correct. Δx, Δp, product and the virial check correct. vars of p4-x4 and p4-product start at n = 1, which keeps the n = 0 coincidences (3⟨x²⟩², ħ/2) from being accepted as listed mistakes: good.
- Problem 4(c): s³ expansion, H₀..H₃ and the H₂ check (8 − 16ξ² + 4(4ξ² − 2) = 0) correct; the identity G_ξξ − 2ξG_ξ + 2sG_s = 0 correct.
- Problem 5: E_k = ħω(2k + 3/2); norm on the half line 1; ⟨x⟩ = 2a/√π = 1.13a; density peak at u = 1; turning point √3 a = 1.73a: all correct. The odd-extension argument is complete.
- Problem 6: ⟨x⟩(0) = (√2/a)(a²/2) = a/√2 correct; (ψ₀, p̂ψ₁) = −i√(mωħ/2) and the resulting −√(mωħ/2) sin ωt correct; Ehrenfest checks correct (Problem Set 4, Problem 5 is indeed Ehrenfest's theorem). Phase factor e^(−i(2n+1)π) = −1 correct.
- Every mistake hint was checked against its formula and is true of it; no two mistakes coincide with the answer over the `vars` ranges, and all ranges are finite and physical.
- Hints: none gives a final result away. The closest are Problem 2(c) hint 1 (names the two limiting boxes) and Problem 5(a) hint 2 ("which eigenstates vanish at x = 0?"); both leave the step to the reader.
- Every part ends with a "Check the result" step (units, limits or numbers).

## Citations
Printed page numbers verified with `pdftotext -f N -l N` on each PDF (printed footer = PDF page in all three):
- reading1 (notes 12): p. 8 eq. (3.1) ✓; p. 9 (ψ and ψ′ vanishing together forces ψ ≡ 0) ✓; p. 11 eq. (4.1) ✓.
- reading2 (notes 13): p. 3 eqs. (1.13)–(1.14) ✓; p. 4 eq. (1.17) ✓; p. 8 eq. (3.32) ✓; p. 9 eq. (3.38) ✓; p. 12 eqs. (3.64), (3.65), (3.67), (3.68) ✓.
- reading3 (notes 14–15): p. 2 eq. (1.12) ✓; p. 3 eq. (1.22) ✓; p. 6 eq. (2.19) ✓; p. 7 eq. (2.25) ✓; p. 8 eqs. (2.30)–(2.31) ✓.
- MIT sheet: Problems 1–4(b) on p. 1, 4(c)–6 on p. 2 ✓. Points 15/10/10/15/5/10 ✓; part splits add up.

## Coverage and order
- All six MIT problems present, in MIT's order, with MIT's parts in order (1a, 1b; 4a–c; 6a–d). Problems 2 and 5 replaced by own problems as the course rules require. The reading assignment is skipped and said so.

## Licensing
- No "All rights reserved", "Courtesy of" or third-party image notice in the problem set PDF or in the three lecture-note PDFs (grep).
- No figure from MIT; both graphs are drawn from formulas.
- Griffiths is neither quoted nor used; the replacement problems are on the same subjects but in different settings.
- Statement wording is the page's own except the near-verbatim sentence in Problem 6 (difference 4, info).

## Notes
- Symbols: every symbol on the page has a meaning scoped to it. Small points (info): the meaning of `n` ("the number of an energy eigenstate of the harmonic oscillator") does not cover the square-well level n in Problem 2(c) (n²π²ħ²/(2mL²)); the κ meaning carries the unit 1/m although Problem 2(e) uses κ unit-free (lengths in units of w); the existing site-wide entry for P₀ has the name "processed power spectrum" (a pre-existing problem of the shared entry, not caused by this page, but the name may show in this page's symbol list).
- No em dashes; no `## Summary` with answers.
- Lesson claims checked: the shape-of-wavefunctions lesson does give even/odd eigenstates of an even potential, the curvature rule, and the averaged-density correspondence (for the infinite well); Problem Set 4 does contain Ehrenfest's theorem.

COUNTS: errors=0 warnings=0 info=8

## Resolution (2026-11-22, by the page author)

No errors or warnings. Info items:
- 6 and 7: the page's meaning of n now also covers the square-well level number of Problem 2, and the meaning of κ says it is unit-free in Problem 2(e).
- 1 and 4 (wording in Problems 3 and 6) are left as they are: the half-for-one-side note is in the introduction, and the Problem 6 sentence is a short standard phrase.
- 2, 3 and 5 need no change; `covers` stays [12, 13, 14, 15].
- 8 (the shared P₀ entry's name) concerns other pages and is left for a separate change.
- Status set to `reviewed`.
