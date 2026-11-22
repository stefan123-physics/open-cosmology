---
page: content/year-2/8.04/8-04-problem-set-2.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps2_2016/ (read: pdftotext of the sheet, page 3 rendered to see the Problem 4 sketches)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes3/ (read, PDF copy fetched by the writer; printed footers = PDF pages 1-7)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes2/ (read, same)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes4/ (read, same)
verdict: needs-changes
---

# Review: Problem Set 2: de Broglie wavelengths, atomic lengths and beam splitters

## Blind solve

### My answers (written before opening the full page)

Constants: hbar c = 197.327 MeV fm, hc = 1239.842 MeV fm = 12398.42 eV Å, m_e c^2 = 0.510999 MeV, m_p c^2 = 938.272 MeV, alpha = 1/137.036.

- p1(a): lambda_nr = hc / sqrt(2 m_e c^2 E_kin) -> delta = 12398.42 / sqrt(2 x 510999) = **12.264**.
- p1(b): pc = m_e c^2 sqrt(gamma^2 - 1) -> ell = h/(m_e c) = hc/(m_e c^2) = **2426.31 fm**, the Compton wavelength of the electron.
- p1(c): lambda_nr = **ell / sqrt(2(gamma - 1))**; lambda_nr/lambda_r = sqrt((gamma+1)/2) > 1 for gamma > 1.
- p1(d)(i): gamma^2 - 1 = 1, gamma = sqrt 2: total E = **0.72266 MeV** (kinetic 0.21166 MeV), beta = **1/sqrt 2 = 0.70711** > 0.2: relativistic.
- p1(d)(ii): electron 1 TeV: lambda = hc/pc = **1.2398 am** (1.2398e-3 fm); proton 7 TeV: **0.17712 am**; ratio 7 (masses negligible at both energies).
- p1(d)(iii): with error = lambda_nr/lambda_r - 1 = sqrt((gamma+1)/2) - 1 <= 0.1: gamma <= 1.42, E_kin = 0.42 m_e c^2 = **214.62 keV**, beta = sqrt(1 - 1/1.42^2) = **0.70998**. (If the error were measured relative to lambda_nr instead: gamma <= 2/0.81 - 1 = 1.4691, E_kin = 239.73 keV, beta = 0.7326.)
- p2(a): [e^2] = energy x length, a0 = **hbar^2/(m_e e^2)** = (hbar/(m_e c))/alpha = **52 917.7 fm**.
- p2(b): a0 : lambdabar_C : r0 = 1 : alpha : alpha^2; **lambdabar_C = 386.159 fm**, **r0 = 2.81794 fm**.
- p3(a): |Ru|^2 = |u|^2 -> u^dagger (R^dagger R - 1) u = 0, **M = R^dagger R - 1**, Hermitian for every R.
- p3(b): u = e1, e2 give M11 = M22 = 0; u = (e1 + e2)/sqrt2 gives Re M12 = 0; u = (e1 + i e2)/sqrt2 gives Im M12 = 0 (with Hermiticity, M21 = M12* = 0). So M = 0.
- p4(a): **U = [[r, t], [t, -r]]**; U^dagger U = [[r^2+t^2, rt-tr],[tr-rt, t^2+r^2]] = 1.
- p4(b): defective: U (r, t)^T = (1, 0): **P0 = 1, P1 = 0**. Working: **P_boom = T = 1 - R**, **P0 = R^2**, **P1 = RT = R(1 - R)**.
- p4(c): **f = P1/(P1 + P_boom) = R/(1 + R)**; supremum **1/2** as R -> 1 (R = 1/2 gives the lesson's 1/3).
- p5(a): matching cos and sin: **a = cos eps + gamma sin eps**, **a gamma = gamma cos eps - sin eps**.
- p5(b): eliminating a: gamma^2 sin eps = -sin eps for all eps -> **gamma^2 = -1**, gamma = +-i; for gamma = +i, **a = e^{i eps}** (for -i, a = e^{-i eps}).
- p5(c): **gamma = +i**, Psi = e^{i(kx - omega t)}.

### Comparison with the page (one line per answer id)

| Answer id | Mine | Page | Agree? |
|---|---|---|---|
| p1-delta | 12.264 | 12.26 (1%) | yes |
| p1-ell | 2426.31 fm | 2426 fm (1%) | yes |
| p1-ell-name | Compton wavelength h/(m_e c) | choice 0, same | yes |
| p1-nr | l/sqrt(2(g-1)) | l/sqrt(2*(g - 1)) | yes (identical) |
| p1-e | 0.72266 MeV (total) | 0.7227 MeV | yes |
| p1-beta1 | 0.70711 | 0.7071 | yes |
| p1-lam-e | 1.2398 am | 1.240 am | yes |
| p1-lam-p | 0.17712 am | 0.1771 am | yes |
| p1-kmax | 214.62 keV | 214.6 keV | yes (same error definition) |
| p1-beta3 | 0.70998 | 0.7100 (0.3%) | yes; the box rejects 0.7071 (0.41% off) and 0.7326 |
| p2-a0 | hbar^2/(m e^2) | hbar^2/(m*e2) | yes (identical) |
| p2-a0-fm | 52 917.7 fm | 52918 fm | yes |
| p2-lc | 386.159 fm | 386.2 fm | yes |
| p2-r0 | 2.81794 fm | 2.818 fm | yes |
| p3 (no box) | M = R^dagger R - 1, Hermitian; four test columns | same route and result | yes |
| p4-u | [[r, t],[t, -r]] | choice 0, same | yes |
| p4-defect | P0 = 1, P1 = 0 | choice 0, same | yes |
| p4-boom | 1 - R | 1 - R | yes |
| p4-p0 | R^2 | R^2 | yes |
| p4-p1 | R(1 - R) | R*(1 - R) | yes |
| p4-f | R/(1 + R) | R/(1 + R) | yes |
| p4-fmax | 1/2 (supremum) | 0.5 | yes |
| p5-g2 | -1 | -1 | yes |
| p5-a | e^{i eps} for gamma = +i | choice 0, same | yes |
| p5-conv | gamma = +i | choice 0, same | yes |

No disagreement: every final answer of the page equals mine.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(a), `<Answer id="p2-a0">`, third mistake hint (`hbar/(m*e2)`) | (not on MIT's sheet; a units statement) | "this is a time divided by a mass and a length squared" | ħ/(m e²) has units (M L² T⁻¹)/(M · M L³ T⁻²) = T/(M L): a time divided by a mass and a length (one power). Change the hint to "Check the units again: this is a time divided by a mass and a length. Two powers of ħ are needed." |
| 2 | warning | calcs entry `p1-nr` | n/a | The identity checks l/√(2(γ−1)) against (l/√(γ²−1))·√((γ+1)/2), the page's own ratio step run backwards, so it is not an independent route; its comment says "written with the speed b … K = (g − 1) m c² with g from b, and h/(m c) = l", which the entry does not do | Make it the route the comment describes, e.g. sample b and m, c, h, set g = 1/sqrt(1 - b**2) and l = h/(m*c): `formula: l / sqrt(2*(g - 1))` written out in b, `equals: h / sqrt(2*m*(1/sqrt(1 - b**2) - 1)*m*c**2)`; and make the comment match |
| 3 | info | Problem 1(d)(iii) | "has an error less than or equal to 10%" (relative to what is not said) | error = (λ_nr − λ_r)/λ_r, stated as the page's choice; the other definition (239.7 keV) is discussed in the check | Fine: relative to the true value is the standard meaning, the choice is stated in the statement and in the introduction, and the 0.3% box is justified. No change. |
| 4 | info | Problem 1(d)(i) | "What is the energy of an electron …" | asks for the total energy, gives the kinetic one (0.2117 MeV) in the solution | Fine: MIT's part (b) defines the energy as E = γ m_e c², so total energy is the sheet's own convention, and the statement says "rest energy included". No change. |
| 5 | info | Introduction | p. 3 has three hand-drawn sketches (two small "top hit"/"bottom hit" panels and the interferometer) | "MIT's two hand-drawn figures for Problem 4" | Optional: "MIT's hand-drawn figures". The description in words matches the sketches (reflection from above stays above, upper branch arrives at the second splitter from above, D0 at the upper output, bomb in the lower branch). |
| 6 | info | Problem 2(b) check | n/a | "the length at which an electron becomes relativistic" for λ̄_C | Loose but defensible (confined to ħ/(m_e c), an electron has p ~ m_e c). Optional: "the length at which a confined electron becomes relativistic". |

## Arithmetic and answer checks
- Every number on the page recomputed (Python, the quoted CODATA 2018 values): hc = 1239.842 MeV fm = 12 398.42 eV Å; δ = 12.264; ℓ = 2426.31 fm; √2 m_e c² = 0.72266 MeV, kinetic 0.21166 MeV; β = 0.70711; λ_e = 1.23984 am (exact pc and pc = E agree to about 13 figures), λ_p = 0.17712 am (kinetic-energy reading 0.17710 am); γ_e = 1.957e6, γ_p = 7460.6; 1/(2γ²) = 1.3e-13 and 9.0e-9; 1 fm/λ_e = 806 ("about 800"); γ_max = 1.42, 214.62 keV, β = 0.70998; check values 1.0911, 0.9919, ratio 1.1000; other definition γ = 1.4691, 239.73 keV; a₀ = 52 917.7 fm = 0.529 Å; λ̄_C = 386.159 fm; r₀ = 2.81794 fm; 2π × 386.16 = 2426.3 fm; f(0.5) = 1/3, f(0.9) = 0.4737. All correct.
- Constants against CODATA 2018 (ħc = 197.3269804 MeV fm, m_e c² = 0.51099895 MeV, m_p c² = 938.27208816 MeV, 1/α = 137.035999084): the page's rounded values are correct.
- Answer boxes: every `value`/`expr` equals its solution's result. Formula `vars` ranges (l ∈ [1,3], g ∈ [1.2,5]; ħ, m, e² positive; R ∈ [0.1,0.9]) keep every answer and every mistake finite and real, and each listed mistake differs from the answer over the range. Tolerances: 1% accepts four significant figures and rejects the distinct wrong values (kinetic 0.2117 MeV for p1-e, 239.7 keV for p1-kmax); p1-beta3 at 0.3% accepts 0.70998 and rejects 0.7071 (0.41% away).
- Mistake hints checked against their formulas: all true except the units in the third p2-a0 hint (finding 1). E.g. e²/m is a length times a speed squared (true); R is P1/P_boom (true); the R/(1−R) hint's 1 − R² = (1−R)(1+R) (true); "R = r × r is the amplitude for two reflections" (true).
- Choice boxes: p4-u distractor 2 is unitary but has a reflected photon change side (as the solution says); p4-defect's last choice R² + T², 2RT is the classical no-interference result (true).
- Solutions: every step checked; each part ends with a check (a limit, a number or a lesson value). Problem 3(b): u = (1, i)/√2 gives (i/2)(M₁₂ − M₂₁), correct; the proof works even without Hermiticity, as the solution notes. Problem 4: U² = 1 explains the defective-bomb result; the three working-bomb probabilities add to 1. Problem 5: (γ² + 1) sin ε = 0, γ = ±i, a = e^{±iε}, correct.
- Hints: none gives a result away. The p5(c) hint points to the lesson's convention, which is what a 2-point convention question needs.
- `calc:test` for this page: 68 entries, all pass (pytest `-k 8-04-problem-set-2` in the ps-804-2 worktree).
- The writer's three flagged identities: `p1-nr` is not independent and its comment describes a route it does not take (finding 2). `p4-boom` (1 − R = (√(1 − R))²) and `p4-p1` (R(1 − R) = (√R √(1 − R))²) are near-tautologies, but P_boom = t² is the definition and P1 = (rt)² is the single path amplitude, so there is little more independent to check short of multiplying the matrices out; with `p4-p0` (conservation), `p4-f-ratio`, and my blind solve agreeing, they are acceptable (info, counted under note 7 below). Optional: write `p4-p1` as the second entry of U·diag(1,0)·U·(1,0) with explicit matrix entries.

## Coverage and order
- All five MIT problems in MIT's order, with all parts: 1(a)–(d)(i)–(iii), 2(a)–(b), 3 (split by the page into (a) and (b); MIT has one task), 4(a)–(c), 5 (split into (a)–(c) along MIT's three questions). Points 20, 10, 10, 15, 10 as on the sheet; the part splits add up (4+4+4+8, 5+5, 3+7, 4+6+5, 4+4+2), and the introduction says the split is the page's own.
- Changes from the sheet are declared in the introduction (answers in R only, number boxes for questions in words, the error definition, figures described in words).

## Licensing
- MIT's sheet carries only the OCW terms footer; no "All rights reserved" or "Courtesy of" notices on the sheet or on the three note chapters. The hand-drawn Problem 4 sketches are not reproduced; the page describes them in words.
- Statements are rewritten in the page's own words (MIT's problem titles reused as titles only). No OpenStax or LibreTexts material.

## Notes
- Citations: every `at=` page number matches the printed footer (sheet pp. 1–4; Lecture 3 notes p. 3 eqs. (1.10), (2.13), p. 6 eq. (3.23), and in calcs p. 2 eq. (1.3), p. 3 eq. (1.12); Lecture 2 notes pp. 2–3 eqs. (1.6)–(1.8), p. 3 eq. (1.14), p. 7 tables (2.24)–(2.25); Lecture 4 notes p. 7 eq. (3.12)). The table (2.25) citation for P_boom is for the balanced case; the page labels it "for a general beam splitter (our own solution)", which is fair.
- Claims about lessons checked: mach-zehnder-interferometer gives f = 1/3 and the first guess's total probability 2; photoelectric-compton-de-broglie gives 0.123 nm for a 100 eV electron, λ_C = 0.002426 nm and a proton size of about 1 fm; hydrogen-atom gives a₀ = 0.529 Å and the balance ħ²/(m a₀²) = e²/a₀; de-broglie-waves-group-velocity ends with e^{i(kx − ωt)} and the "their sum is a cosine" argument (notes p. 7, eq. (3.11)). All match.
- (7, info) Calcs tidy-up: `p4-boom`/`p4-p1` as above; the comment above `p3-first-guess` speaks of "three test columns" and "R^T R = [[1,1],[1,1]]", but the entry checks the total probability 2 of the output column. Optional.
- Symbols: page-scoped meanings exist for every symbol I checked (γ, t, r, R with both jobs; λ̄_C/λ_C; P_boom; M entries; n₁–n₃; ε; φ; a). I did not run `content:check`.
- No `## Summary` with answers; no em dashes on the page.

COUNTS: errors=1 warnings=1 info=5

## Resolution (2026-11-22, by the page author)

- Error 1 (Problem 2(a), hint for `hbar/(m*e2)`): now says "a time divided by a mass and a length".
- Warning 2 (calcs `p1-nr`): the check now builds the slow wavelength as h/√(2mK) with h = ℓmc and K = (γ − 1)mc², sampled over ℓ, γ, m and c; its comment matches.
- Info: the introduction now speaks of MIT's hand-drawn sketches for Problem 4 (not "two figures"); Problem 2(b)'s check names the reduced Compton wavelength as the length at which confining an electron would make it relativistic; the out-of-date comment above `p3-first-guess` is replaced. `p4-boom` and `p4-p1` are left as they are (the reviewer accepted them).
- Status set to `reviewed`.
