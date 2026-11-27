---
page: content/year-3/8.05/8-05-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-8/ (read: scratch PDF and pdftotext; no rights notices)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-6/ (read: chapter 6 PDF/pdftotext; p. 37 checked on the rendered PDF)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-7/ (read: chapter 7 PDF; pp. 6 and 10 checked on the rendered PDF)
verdict: pass-with-notes
---

# Review: 8.05 Problem Set 8 (position and momentum states of the oscillator, coherent and squeezed states, photons, two-state systems)

## Blind solve

### My answers (written before opening the full page)
- p1a: psi2/psi0 = (2 m w x^2/hbar - 1)/sqrt(2)
- p1b: nu = 1/2, mu = p*sqrt(2/(m w hbar)), N(p) = (pi m w hbar)^(-1/4) exp(-p^2/(2 m w hbar))
- p2a: a e^{B}|0> = [a,B] e^{B}|0> = alpha|alpha>
- p2b: P_n = e^{-r^2} r^{2n}/n!; n = 2: r^4 e^{-r^2}/2
- p2c: <beta|alpha> = exp(-|a|^2/2 - |b|^2/2 + b* a); |.|^2 = exp(-d^2)
- p2d: ratio = r/(r^2 + 1/2); rises to max 1/sqrt(2) = 0.7071 at r = 1/sqrt(2), then falls (MIT's "decreases" holds only for r > 1/sqrt(2))
- p2e: <x> = sqrt(2 hbar/(m w)) a1, <p> = sqrt(2 m w hbar) a2, dx = sqrt(hbar/(2 m w)), dp = sqrt(m w hbar/2), product hbar/2
- p2f: alpha(t) = alpha e^{-i w t}, overall phase e^{-i w t/2}
- p2g: <x> = sqrt(2hbar/(m w)) a0 cos wt, <p> = -sqrt(2 m w hbar) a0 sin wt, <H> = hbar w (a0^2 + 1/2), dx, dp constant as in (e)
- p3a: a(g) = a cosh g - a^dag sinh g; a^dag(g) = a^dag cosh g - a sinh g; commutator 1
- p3b: <N> = sinh^2 g, dN = sqrt(2) sinh g cosh g, ratio sqrt(2) coth g -> sqrt(2) (never below sqrt 2)
- p3c: <N> = r^2 + sinh^2 g
- p3d: <E> = 2 E0 r cos(w t - th); dE = E0 sqrt(cosh 2g - sinh 2g cos 2wt) = E0 sqrt(e^{-2g} cos^2 wt + e^{2g} sin^2 wt), independent of alpha
- p4a: Gauss laws trivial; Ampere-Maxwell (curl cB = (1/c) dE/dt) gives dq/dt = p; Faraday (curl E = -(1/c) d(cB)/dt) gives dp/dt = -w^2 q
- p4b: Heisenberg: dq/dt = p, dp/dt = -w^2 q (same)
- p5a: (|L>+|R>)/sqrt2 with E = +D; (|L>-|R>)/sqrt2 with E = -D
- p5b: X = -i sin(D t/hbar)
- p5c: P_L = sin^2(D t/hbar); first certain at t = pi hbar/(2 D)
- p5d: not Hermitian; H^2 = 0, U = 1 - i D t/hbar |L><R|; total probability 1 + (D t/hbar)^2
- p6a: |lambda| = D sqrt(pm/(1 - pm)) (sign free)
- p6b: |lambda|/D = 1/sqrt3 = 0.5774; period ratio = sqrt(1 - pm) = 0.8660

### Comparison with the page (one line per answer id)
- p1-psi2: page (2mωx²/ħ − 1)/√2 = mine. Agree.
- p1-coef: page μ = p√(2/(mωħ)) = mine. Agree.
- p1-sign: page ν = +1/2 (choice 1) = mine. Agree.
- p1-norm: page (πmωħ)^(−1/4) exp(−p²/(2mωħ)) = mine. Agree.
- p2-prob: e^(−r²) r⁴/2 = mine. Agree.
- p2-overlap: e^(−d²) = mine. Agree.
- p2-ratio: r/(r² + 1/2) = mine. Agree.
- p2-max: 0.707 = mine (numerical maximum of r/(r² + ½) on a grid of 30001 points in [0, 3]: 0.707107 at r = 0.7071). Agree.
- p2-x √(2ħ/(mω)) a1; p2-p √(2mωħ) a2; p2-dx √(ħ/(2mω)). Agree.
- p2-alpha-t: α e^(−iωt) (choice 3) = mine. Agree.
- p2-xt, p2-pt, p2-ht: √(2ħ/(mω)) α₀ cos ωt; −√(2mωħ) α₀ sin ωt; ħω(α₀² + ½). Agree.
- p3-coef-a cosh γ, p3-coef-b −sinh γ, p3-comm 1. Agree.
- p3-n sinh²γ, p3-dn √2 sinh γ cosh γ, p3-limit 1.414. Agree. Numerical check (80-level truncated Fock space, S = expm, γ = 0.7): ⟨N⟩ = 0.575449 vs sinh²γ = 0.575449; ΔN = 1.346545 vs 1.346545.
- p3-nag r² + sinh²γ. Agree. Numerical (α = 0.6 e^(0.4i), γ = 0.7): 0.935449 vs 0.935449.
- p3-emean 2E₀ r cos(ωt − θ), p3-de E₀√(cosh 2γ − sinh 2γ cos 2ωt). Agree. Numerical (ω = 1.3, t = 0.5, E₀ = 1, same state): ⟨E⟩ 1.162695 vs 1.162695; ΔE 1.281210 vs 1.281210.
- p4-eq Ampère-Maxwell law (choice 2), p4-qdot p, p4-pdot −ω²q. Agree.
- p5-low (|L⟩ − |R⟩)/√2 (choice 1), p5-gap 2Δ. Agree.
- p5-coef −i sin(Δt/ħ) (choice 0). Agree.
- p5-pl sin²(Δt/ħ), p5-time πħ/(2Δ). Agree.
- p5-wrong "It is not Hermitian" (choice 3), p5-norm 1 + (Δt/ħ)². Agree.
- p6-eps Δ√(p_min/(1 − p_min)). Agree. Numerical: H = λσ₃ − Δσ₁ with Δ = 1, λ = 0.577350; minimum over t in [0, 10] of |⟨1|e^(−iHt)|1⟩|² = 0.2500000.
- p6-num 0.577, p6-period 0.866. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 2(d) and intro | "show that it decreases as \|α\| increases" | The ratio rises up to \|α\| = 1/√2, then falls; MIT's claim holds only above 1/√2 | None. Verified: d/dr [r/(r² + ½)] = (½ − r²)/(r² + ½)², zero at r = 1/√2, maximum 1/√2 = 0.707. The MIT slip is real and is stated openly and fairly. |
| 2 | info | Problem 4 | One problem without parts | Split into (a) Maxwell and (b) Heisenberg, with our choice box | None; declared in the intro. |
| 3 | info | Problem 6(b) | Not on MIT's sheet | Our own numeric part | None; marked as ours. |
| 4 | info | Problem 1(b) | "Construct explicitly the momentum eigenstates" | Gives the form 𝒩(p) exp(iμâ† + νâ†â†)\|0⟩ to fill in | Acceptable scaffolding for the boxes (MIT itself points to the position-state derivation). |

## Arithmetic and answer checks
- Every boxed answer recomputed independently (analytic blind solve, then the numerical checks above for P2(d), P3(b)–(d) and P6). All agree.
- Solution steps checked line by line. P1(a): the two k = 2 terms and ⟨0|ââ â†â†|0⟩ = 2; nodes at ±√(ħ/(2mω)); normalization integrals ½√π and ¾√π. P1(b): [â, B] = iμ + 2νâ†; p̂ on the trial state; 𝒩(p) as Fourier transform of ψ₀; the check ⟨p|1⟩ = −iμ⟨p|0⟩ verified from ψ₁ = √(2mω/ħ) x ψ₀; γ → −∞ limit of eq. (5.26) gives exp(+½â†â†). P2 all steps correct. P3(a): [K, â] = −2â†, [K, â†] = −2â, factor ½ and signs right; the checks S†x̂S = e^(−γ)x̂ and eq. (5.27) correct. P3(c) check by energy: ¼ħω(e^(−2γ) + e^(2γ)) = ħω(sinh²γ + ½) correct. P3(d): |μ|² = c² + s² − 2cs cos 2ωt correct; extremes E₀e^(∓γ) at ωt = 0 and π/2 correct. P4: curl components and signs correct; Hamilton's-equations check correct. P5: all correct; the link to Problem Set 6 (h/(4ΔH) with ΔH = Δ for |R⟩) checked against the 8.05 Set 6 page. P6: cone geometry (p_min = cos²θ with cos θ = λ/√(Δ² + λ²)); amplitudes c₁ = cos(Et/ħ) − i(λ/E) sin(Et/ħ), c₂ = i(Δ/E) sin(Et/ħ) satisfy the Schrödinger equation; the remark on ammonia in a static field (Lecture 17) is fair.
- Every solution ends with a check step (units, a limit, or a second route).
- Answer boxes: vars ranges keep every formula finite; each listed mistake differs from the answer over its ranges; every mistake hint is true of its formula (checked each, including p3-nag's "other order", which I recomputed: for real α, S(γ)D(α)|0⟩ gives r²e^(−2γ) + sinh²γ). Number-box tolerances (1%) accept 3 significant figures and reject the natural wrong values (√3, 1/3, 1.155, 1, 2).
- Choice boxes: right answer at positions 1, 3, 2, 1, 0, 3; never the longest string in its box; no backslash TeX; none answerable from units alone.
- Hints: none gives a final result away.

## Coverage and order
- All six MIT problems present, in MIT's order, with MIT's parts in MIT's order; points 10/10/15/10/10/10 = 65 as on the sheet; the part splits are declared as ours.
- covers [14, 15, 16, 17], lecture 17: justified by the content (coherent states L14; squeezed and position states L15; photon states and spin precession L16; ammonia and two-state systems L17). Nothing from Lecture 18 (NMR, tensor products) is used, so leaving 18 out of `covers` is right even though OCW's calendar puts Set 8 at 16–18.

## Licensing
- No rights notices on MIT's sheet; no figures redrawn (the one plot is generated from the formula). Wording is the page's own. Sakurai is named as MIT names it and was not used. No OpenStax or LibreTexts.

## Notes
| # | Severity | Where | Finding | Suggested fix |
|---|----------|-------|---------|---------------|
| 5 | warning | Problem 1(b), "Check the result", second-to-last sentence | "The momentum state follows from the position state by the replacements x√(mω/ħ) → p/√(mωħ) and â† → iâ†" holds for the exponent only: applied to the prefactor, ψ₀(x) → (mω/(πħ))^(1/4) e^(−p²/(2mωħ)), which differs from 𝒩(p) = (πmωħ)^(−1/4) e^(−p²/(2mωħ)) by the factor √(mω). | Write "The exponent of the momentum state follows from that of the position state by the replacements …" (or add "up to the normalization constant"). |
| 6 | info | Problem 2(a) solution, at="eq. (4.76)" | On the rendered p. 37 of chapter 6, (4.76) is the derivation chain and (4.77) the boxed â\|α⟩ = α\|α⟩; the page's formula is the chain, so (4.76) is right. | Optional: at="eqs. (4.76) and (4.77)". |
| 7 | info | Citations | Chapter 6: (1.16), (1.18), (1.42), (4.49), (4.71), (4.78)–(4.80), (4.82), (4.84), (4.93)–(4.99), (5.17) (the rule is stated just before it), (5.26)–(5.28), (5.32), (5.36), (5.38)–(5.40), (5.45), (5.50) all match. Chapter 7 on the rendered PDF: (3.29) H = g₀1 + g·σ (p. 6), (3.36) ω = 2g/ħ (p. 6), (4.51) P↑ = cos²(Δt/ħ), P↓ = sin²(Δt/ħ) (p. 10): all correct. MIT sheet pages p. 1 to p. 4 match the printed page numbers. | None. |
| 8 | info | p6-eps | Two listed mistakes (Δ√((1 − p)/p) and Δp/(1 − p)) coincide with the answer at p_min = 1/2; harmless with random-point checking over [0.1, 0.8]. | None needed. |
| 9 | info | Style and symbols | No em dashes, no `## Summary`, no stray control characters; page-scoped symbol meanings exist for every letter used (α, β, γ, Δ, λ, μ, ν, θ, H, a, c, k, d, z and others). | None. |

COUNTS: errors=0 warnings=1 info=8

## Resolution (2026-11-27, by the page author)

- Warning 1: Problem 1(b), "Check the result", now says "The exponent of the momentum state follows from that of the position state by the replacements …", so the claim no longer covers the normalization constant.
- Info items: kept as they are.

Status set to `reviewed`.
