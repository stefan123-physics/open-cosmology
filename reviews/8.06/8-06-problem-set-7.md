---
page: content/year-3/8.06/8-06-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-7/ (read: ps7.pdf / pdftotext, printed pp. 1-7)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/yHfFsuYGgaQ_transcript.pdf (read, 2 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/8c9bd19647964fa0acd4db6fddc7646b_7Y3qcKzO_mY.pdf (read, 5 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a90a332e5c7863817d73c7bdffce7b85_U4zZhQz1Xqc.pdf (read, 6 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/203b9a82165a35d385b5ce9742111af7_tmKD8T_Lm2I.pdf (read, 4 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-6-adiabatic-approximation/ (read: MIT8_06S18ch6.pdf, sections 3 and 4)
verdict: pass-with-notes
---

# Review: Problem Set 7: Gauge invariance, orbits in a magnetic field, the Aharonov–Bohm effect and slow changes

Blind solve first (section "Blind solve" below, written before the full page and the calcs file were opened), then the comparison.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | data/symbols.json, `delta` meaning scoped to this page | MIT writes \|δB\| for the in-plane field (p. 5) | The only δ meaning for this page is "The fractional part of Φ_B/Φ₀", but the intro also uses $\|\delta B\|$ ("MIT writes $\|\delta B\|$"), where the popup would then be wrong | Extend the page meaning: "The fractional part of Φ_B/Φ₀, between 0 and 1 (Problem 5(d)). In MIT's name \|δB\| for B⊥ (introduction), part of that name." Or write MIT's name in words in the intro |
| 2 | warning | Problem 6(c) solution, step "From space to time" | (no statement) | "the number in front, such as the 3 of the root-mean-square speed, is of order one" | The rms speed is √(3k_BT/m): the number in front of √(k_BT/m) is √3. Write "such as the √3 of the root-mean-square speed √(3k_BT/m)" |
| 3 | info | Problem 6(a) solution, "The coupling compared with the gap", `at="eqs. (3.9), (3.10), for the two spin states"` | Notes (3.9)/(3.10) give the coupling Ḣ_kn/(E_n − E_k) in the equations for c_k, with no inequality; the notes' own inequality is (4.14)-(4.15), (ħ/ΔE²) dH/dt ≪ 1 | Inequality ħ\|Ḣ_kn\|/(E_n − E_k)² ≪ 1 cited to (3.9), (3.10) | The reading (coupling rate ≪ Bohr frequency) is a fair one and the text says so in words. Optionally add "; cf. eqs. (4.14), (4.15)" to `at=` |
| 4 | info | Problem 4(a) check vs 4(b) units | Gaussian units | 4(a) check gives units in metres (1/m³ times m/s), 4(b) in cm | Use cm in 4(a) too, for consistency |
| 5 | info | Problem 3(f) statement | "To define a gauge invariant version" | "A gauge covariant version" | Fine (more precise); no change needed |

## Arithmetic and answer checks
- Every boxed answer agrees with my blind answer (table in "Blind solve"). Equivalence checked by hand; all are the same closed forms.
- Problem 7(c) table recomputed independently with scipy `solve_ivp` (DOP853, rtol 1e-11, atol 1e-13), started at τ = −25 with B = 1, dB/dτ = 0: |B|² = 1, 0.9783, 0.8770, 0.4750, 0.6447, 0.6167, 0.5153, 0.5685 at τ = −25, −5, 0, 5, 10, 15, 20, 25. That matches the page's 1, 0.978, 0.877, 0.475, 0.645, 0.617, 0.515, 0.569 in every entry.
- Shape claims: minimum 0.4139 at τ = 6.45 (page: "0.414 near τ = 6.4", fine); on [15, 25] min 0.4941, max 0.6170, mean 0.5544 (page: 0.49, 0.62, 0.55). From τ = −100 to 100, mean over [60, 100] (the last fifth) 0.5378 (page: 0.538). Unitarity check of the page, \|A\|² = \|dB/dτ\|²/γ²: max deviation of \|A\|² + \|B\|² from 1 is 4e-11. All confirmed.
- e^{−0.2π} = 0.53349 (box 0.533, 1 %); 1 − 0.2π = 0.37168 (box 0.372, 1 %); 2πγ = 0.628. The 1 % tolerance on p7-first rejects 0.628 (\|A\|²) and 0.533; on p7-lz it rejects 0.372 and 0.628. p5-ground 0.09 at 2 % rejects 0.49 (n = 3) and 0.
- Problem 5(d): (4 − 3.7)² = 0.09, (3 − 3.7)² = 0.49, (1 − 0.7)² = 0.09: correct.
- Algebra checked line by line: 1(a) time part (iħ∂_tU = −(q/c)∂_tΛ U) and the check Λ = −cεt (Φ' = Φ + ε, ψ' = e^{−iqεt/ħ}ψ); 1(b) U p U⁻¹ = p − (q/c)∇Λ and H' = UHU⁻¹ − (q/c)∂_tΛ; 2(a) velocity solution and the clockwise sense; 2(b) v_y = −ω_c(x − X), v_x = ω_c(y − Y); 3(a)-(f) all commutators (including the Landau-gauge check Ŷ = −p̂_x/(mω_c), [X̂, Ŷ] = −iħ/(mω_c)); ladder operator b = (X − iY)/(√2 ℓ_B): [b, b†] = 1, b†b = (R² − ℓ_B²)/(2ℓ_B²); oscillator matching M = ½, Ω = 2; Q = −v_y/ω_c, P = m v_x, [Q, P] = iħ; circular gauge m v_x = p_x + (qB/2c)y, m v_y = p_y − (qB/2c)x; classical check x v_y − y v_x = −r_0²ω_c; 4(a) the divergence identity and J = Re(ψ* v ψ); 4(b) Λ = λx check; 5(a)-(e) including the boundary condition ψ'(π) = e^{−2πif}ψ'(−π) giving κ = n − f; 6(a) the spin Hamiltonian in the basis (\|−⟩, \|+⟩): diagonal ±μ₀γt, off-diagonal −μ₀(B_x ± iB_y), so α = 2μ₀γ, \|H₁₂\| = μ₀B⊥, \|⟨−n\|σ_z\|+n⟩\| = sin θ; 6(b)-(d); 7(a) coupled equations, second-order equation and the division by −ħ²e^{iφ}/H₁₂*; conservation of \|A\|² + \|B\|²; 7(b) Fresnel integral √(2πħ/α)e^{iπ/4} and A(∞) = H₁₂√(2π/(ħα)) e^{−iπ/4}; 7(c) the change of variable. No error found.
- Every solution ends with a check (units, a limit, a special gauge or a number).
- Answer boxes: each `expr`/`value` equals the solution's result; all `vars` ranges keep the formulas finite (p5-ain r < a, p5-aout r > a, as needed); each `mistakes` entry differs from the answer and its hint is true of that wrong formula (checked one by one, e.g. p3-xy −2ℓ_B² "the term with the two velocities takes half away", p5-phi0 πħc/q gives (n − ½)², p6-grad μ₀B/(ħv) is one over a length, p7-tau \|H₁₂\|t/α is a time squared, p7-c0 −\|H₁₂\|²/ħ² gives growth at α = 0).
- Choice boxes: right answers at positions 1, 0, 2, 3, 1, 0, 2, 2, 3, 0 (varied). Character lengths of the right answer vs. the row: p1-sumprod 24 of [23, 24, 23, 41]; p1-x 59 of [59, 69, 55]; p1-p 66 of [61, 63, 66, 78]; p1-v 55 of [42, 43, 56, 55]; p1-h 35 of [26, 35, 39, 34]; p3-cov 53 of [53, 71, 52, 64]; p4-inv 63 of [26, 61, 63, 70]; p5-noeffect 11 of [9, 27, 11, 18]; p5-trap 95 of [69, 85, 98, 95]; p6-zero 87 of [87, 88, 69, 79]. None is the longest or the shortest in its row. No distractor is also true (checked each: e.g. "products only if they commute" is about Hermiticity, not covariance; "any integer or half-integer" fails since f = ½ gives (n − ½)²; "trapping force vanishes at the zero" is false for a linear zero, where \|∇B\| stays finite).
- Boxes 3(d) and 3(e): both are ℓ_B²(2·label + 1), with `nR` and `n`. They look alike because the two spectra really are alike (R̂² and r̂_c² are each an oscillator with ℓ_B² as "ħ"); the label, the variable name and the hints keep them apart, and 3(f) needs both. Acceptable; no change.
- No hint gives a result away: the hints point to methods (Stokes, product rule, oscillator matching, Fresnel integral, the MIT hint of 5(e)). The Fresnel formula in 7(b) is MIT's own hint made concrete; fine.

## Coverage and order
- All seven MIT problems and every part, in MIT's order: 1(a)-(b) with the six questions, 2(a)-(b), 3(a)-(f), 4(a)-(b), 5(a)-(e), 6(a)-(d), 7(a)-(c). Points 10, 10, 10, 10, 10, 15, 15 as on MIT's sheet; the part splits add up.
- MIT's "Moral of problem" of Problem 5 is used in the check of 5(e), attributed to the sheet. MIT's remark that X̂, Ŷ are "the simplest example of non-commutative coordinates" (3(b)) is not repeated; harmless.
- Additions are all declared in the intro and at each box (2(a) radius and sense, 3(f) eigenvalues, 4(a) plane wave, 5(d) number, 6(a) exact probability, 6(d) hole size, 7(c) numbers and table). MIT's reading list is left out, said so.

## Licensing
- Problem 5 describes the setup in words; no mention of Griffiths' figure or page range beyond "a textbook's figure and discussion", no redrawn figure. The Plot in 5(d) is generated from E_n = (n − f)². No "All rights reserved" material; no OpenStax or LibreTexts.
- Problem statements are rewritten. A few short phrases follow MIT closely ("which can trap the particle", "a bead on a ring"), which is standard wording; no sentence-level copying found.

## Notes
- Transcript citations: verified that the four transcript PDFs have no printed footer page numbers (`pdftotext -f N -l N` of every page ends with lecture text), so `at=` gives PDF pages. Checked contents: L13.5 p. 1 has the Schrödinger equation with potentials; L14.1 pp. 3-4 the covariant derivative identity and its proof; L14.2 p. 1 the gauge-invariant expectation value; L14.2 p. 5 the flux quantization qB₀L_xL_y/(hc) = 2πn, flux quantum named at the top of p. 6 (p. 5 is a fair citation of the formula); L14.3 p. 4 the Landau levels ħω_c(n + ½) and y₀ = −k_xℓ_B². MIT sheet citations (eqs. (1)-(11), Problem 6 eqs. (1)-(4), pages 1-7) all match the printed pages.
- Notes chapter 6: (4.6) the Hamiltonian, (4.12) \|H₁₂\|²/(ħ\|α\|) ≫ 1, (4.18) P = exp(−2π\|H₁₂\|²/(ħ\|α\|)): all as cited.
- Adiabatic criterion of 6(a) as an inequality: a fair reading of (3.9)/(3.10) (see row 3); both forms on the page give the combination μ₀B⊥²/ħ, with numbers 4 and 2, and the exact Landau–Zener exponent shows the order-one number is π. My blind answer has the same combination.
- Claims about lessons checked: "covariant derivative identity" (gauge-invariance lesson, line 113), the "first curious effect" (charged-particles lesson, "Two curious effects", 1.), y₀ = −k_xℓ_B² and Landau gauge A = (−By, 0, 0), N = L_xL_y/(2πℓ_B²), τ_d = \|H₁₂\|/α, ω₁₂ = \|H₁₂\|/ħ (Landau–Zener lesson): all correct.
- Symbols: the page-scoped meanings fit (checked all 120), apart from δ (row 1). Units are given in SI as the repository convention asks.
- No `## Summary` with answers; no em dashes (count 0).
- Not run: `npm run content:check` and `npm run calc:test` (the review does not edit the worktree). The calcs entries were read and agree with the page values.

COUNTS: errors=0 warnings=2 info=5


## Blind solve

### My answers (written before opening the full page)
- 1(a): U(p - qA'/c)U^{-1}... i.e. (p - qA'/c)Uψ = U(p - qA/c)ψ; iħ∂t(Uψ) = U(iħ∂tψ) - (q/c)∂tΛ Uψ, the extra term cancels with qΦ' = qΦ - (q/c)∂tΛ.
- 1(b): covariant ⇒ <ψ'|O'|ψ'> = <ψ|U†UOU†U|ψ>. i yes; ii yes; iii x̂ yes (commutes with U); iv p̂ no (p̂'=p̂ but Up̂U⁻¹ = p̂ - (q/c)∇Λ); v v̂ yes; vi H' = UHU⁻¹ - (q/c)∂Λ/∂t, covariant only for time-independent Λ.
- 2(a): y(t) = Y - r0 sin(ωc t + θ0); r0 = v/ωc = mcv/(qB); clockwise seen from +z (for qB > 0).
- 2(b): X = x + vy/ωc, dX/dt = vx + (dvy/dt)/ωc = vx - vx = 0; same for Y.
- 3(a): [v̂x, v̂y] = i ħ q B(x,y)/(m²c).
- 3(b): X̂, Ŷ gauge covariant (yes); [X̂, Ŷ] = -i ħ/(mωc) = -i ℓB².
- 3(c): [X̂, v̂x] = [X̂, v̂y] = [Ŷ, v̂x] = [Ŷ, v̂y] = 0 so [X̂,H]=[Ŷ,H]=0; only one of X̂, Ŷ diagonal with H.
- 3(d): R̂² eigenvalues ℓB²(2nR + 1).
- 3(e): r̂c² = (v̂x²+v̂y²)/ωc² = 2H/(mωc²), eigenvalues ℓB²(2n + 1).
- 3(f): dots = + (qB/2c)(x̂² + ŷ²); 𝓛z = (mωc/2)(R̂² - r̂c²); eigenvalues ħ(nR - n).
- 4(a): J = (ħ/m)Im(ψ*∇ψ) - (q/mc)A|ψ|²; plane wave Jx = (ρ0/m)(ħk - qA0/c).
- 4(b): [ψ]² = 1/L³, J ~ (1/L³)(L/T), qJ = charge/(area·time); gauge invariant since ψ'* v̂' ψ' = ψ* U⁻¹ U v̂ U⁻¹ U ψ (with v̂' = U v̂ U⁻¹).
- 5(a): α = B0 r/2 (r < a); α = B0a²/(2r) = ΦB/(2πr) (r > a).
- 5(b): (1/2m)( (ħ/(ib)) d/dφ - qΦB/(2πbc) )² ψ = Eψ.
- 5(c): ψn = e^{inφ}/√(2πb), En = ħ²/(2mb²) (n - f)², f = qΦB/(2πħc).
- 5(d): Φ0 = 2πħc/q = hc/q; no effect for ΦB an integer multiple of Φ0; lowest E at f = 3.7: n = 4, 0.09.
- 5(e): gauge Λ = -ΦB φ/(2π) on (-φ0, φ0) sets A' = 0 there; the trapped states' energies equal the no-solenoid ones. On the full circle e^{iqΛ/ħc} is not single valued unless f is an integer.
- 6(a): min gap 2μ0B⊥ (at t = 0); γ ≪ μ0B⊥²/ħ (×4 from the |<ψ-|Ḣ|ψ+>|ħ ≪ ΔE² form, ×2 from the rotation-rate form); P_wrong = exp(-π μ0 B⊥²/(ħγ)) (|H12| = μ0B⊥, α = 2μ0γ).
- 6(b): T ≫ B⊥/γ ≫ ħ/(μ0B⊥): T ≫ ħ/(μ0 B⊥).
- 6(c): ħ |∇B| √(kBT/m) ≪ μ0 B².
- 6(d): d_hole = √(ħ v/(μ0 |∇B|)).
- 7(a): iħȦ = H12 e^{iθ}B, iħḂ = H12* e^{-iθ}A, θ = (1/ħ)∫0^t E12; B̈ + i(E12/ħ)Ḃ + (|H12|²/ħ²)B = 0, so c1 = αt/ħ, c0 = |H12|²/ħ².
- 7(b): A(∞) = (H12/(iħ)) √(2πħ/α) e^{iπ/4}; |A(∞)|² = 2π|H12|²/(ħα); P = 1 - 2π|H12|²/(ħα).
- 7(c): τ = αt/|H12|; e^{-2πγ} = 0.5335 for γ = 0.1; first-order P = 1 - 2πγ = 0.3717 (|A|² = 0.6283). Numerics (scipy DOP853, B(-25)=1, B'(-25)=0): |B|² = 0.877 at τ=0, 0.748 at 2, 0.475 at 5, 0.645 at 10, 0.5685 at 25; mean over τ ∈ [10,25] 0.555. Starting earlier (τ0 = -2000) gives |B(25)|² = 0.552.

### Comparison (one line per answer id)
- p1-sumprod: sums yes, products yes = mine. Agree.
- p1-x: covariant, commutes with U = mine. Agree.
- p1-p: not covariant, U p U⁻¹ = p − (q/c)∇Λ = mine. Agree.
- p1-v: covariant = mine. Agree.
- p1-h: only for time-independent Λ = mine (H' = UHU⁻¹ − (q/c)∂_tΛ). Agree.
- p2-y: Y − r0 sin(ωc t + θ0) = mine. Agree.
- p2-r0: v/ωc = mine. Agree.
- p2-sense: clockwise for qB > 0 = mine. Agree.
- p3-vv: ħqB/(m²c) (times i) = mine. Agree.
- p3-cov: covariant = mine. Agree.
- p3-xy: −ℓ_B² (times i) = mine. Agree.
- p3-r2: ℓ_B²(2nR + 1) = mine. Agree.
- p3-rc2: ℓ_B²(2n + 1) = mine. Agree.
- p3-dots: qB/(2c) = mine. Agree.
- p3-prop: mωc/2 = mine. Agree.
- p3-lz: ħ(nR − n) = mine. Agree.
- p4-plane: ρ0(ħk − qA0/c)/m = mine. Agree.
- p4-inv: phase term and ∇Λ term cancel = mine. Agree.
- p5-ain: B0 r/2 = mine. Agree.
- p5-aout: B0 a²/(2r) = mine. Agree.
- p5-en: ħ²(n − f)²/(2mb²) = mine. Agree.
- p5-phi0: 2πħc/q = mine. Agree.
- p5-noeffect: any integer = mine. Agree.
- p5-ground: 0.09 = mine. Agree.
- p5-trap: gauge function must jump where the (c) states do not vanish = mine. Agree.
- p6-gap: 2μ0B⊥ = mine. Agree.
- p6-gamma: μ0B⊥²/ħ = mine. Agree.
- p6-lnp: πμ0B⊥²/(ħγ) = mine. Agree.
- p6-t: ħ/(μ0B⊥) = mine. Agree.
- p6-grad: μ0B²/(ħ√(kBT/m)) = mine (same inequality). Agree.
- p6-zero: spins cannot follow near the zero, atoms flip = mine. Agree.
- p6-hole: √(ħv/(μ0|∇B|)) = mine. Agree.
- p7-c1: αt/ħ = mine. Agree.
- p7-c0: |H12|²/ħ² = mine. Agree.
- p7-a2: 2π|H12|²/(ħα) = mine. Agree.
- p7-tau: αt/|H12| = mine. Agree.
- p7-lz: 0.533 = mine (0.5335). Agree.
- p7-first: 0.372 = mine (1 − 2πγ = 0.3717). Agree.
- 7(c) table: all eight entries agree with my scipy run (see "Arithmetic and answer checks").

## Resolution (2026-11-27, by the page author)

- Warning 1 (δ meaning): the page-scoped meaning of δ now also covers MIT's name |δB| in the introduction.
- Warning 2 (Problem 6(c), "the 3 of the root-mean-square speed"): now "the √3 of the root-mean-square speed √(3k_BT/m)".
- Info items: no change needed (the 6(a) citation is a fair reading; 3(d) and 3(e) kept as they are).
- `status: reviewed`.
