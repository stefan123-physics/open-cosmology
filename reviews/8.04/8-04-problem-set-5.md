---
page: content/year-2/8.04/8-04-problem-set-5.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps5_2016/ (read: ps5.pdf / ps5.txt, pdftotext -layout and -raw)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes7/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes8/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes10/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes9/ (read, not cited by the page; checked for the variance question)
verdict: pass-with-notes
---

# Review: Problem Set 5: Gaussians and the uncertainty product, a particle in a box, walls, steps and wells

Blind solve first (from the stripped statements and MIT's sheet only), then the full page, its calcs file, the lecture notes and Set 4 on main. `npm run content:check` in the worktree: 0 errors (only warning for this page: no review file yet). `npm run calc:test` in the worktree: 17926 passed.

## Blind solve

### My answers (written before opening the full page)
- p1a: Δx = a/√2, Δp = ħ/(a√2), product ħ/2 (saturated). ⟨p²⟩ = ħ²∫|ψ'|²/∫|ψ|² = ħ²⟨x²⟩/a⁴.
- p1b: Φ̃/N = (a/√ħ) exp(−a²p²/(2ħ²)); Parseval both sides N²a√π; Δp = ħ/(a√2).
- p2a: Re(1/z) = Re(z̄)/|z|² = Re z/|z|². Δx = |Δ|²/√(2 Re Δ²) (= 1/√(2 Re(1/Δ²))), Δp = ħ/√(2 Re Δ²).
- p2b: Φ̃ = NΔ/√ħ · exp(−p²Δ²/(2ħ²)) (branch with Re > 0); |Φ̃|²/N² = (|Δ|²/ħ) exp(−p² Re(Δ²)/ħ²); Parseval both N²√π|Δ|²/√(Re Δ²); Δp as in (a).
- p2c: ΔxΔp = ħ|Δ|²/(2 Re Δ²) = ħ/(2 cos 2φ_Δ). φ = 0: ħ/2 (real Gaussian, saturation). φ = π/4: Re Δ² = 0, not normalizable, product diverges.
- p2d: Δp(0) = ħ/(2a); Δ²(t) = 2a²(1 + it/τ), Re Δ² = 2a², so Δp = ħ/(2a) at all t.
- p3a: φ_n = n²π²ħt/(2ma²) (= E_n t/ħ), N = √(2/a).
- p3b: ⟨x⟩ = a/2, ⟨x²⟩ = a²(1/3 − 1/(2n²π²)), Δx = a√(1/12 − 1/(2n²π²)).
- p3c: ⟨p⟩ = 0, ⟨p²⟩ = n²π²ħ²/a², Δp = nπħ/a.
- p3d: ΔxΔp = ħ√(n²π²/12 − 1/2); satisfied, never saturated; n = 1: 0.5679 ħ.
- p3e: none change (stationary state; the phase cancels in every expectation value).
- p4: ψ = A sin kx (x > 0), 0 for x ≤ 0; E = ħ²k²/(2m), every E > 0, continuum, one state per energy. E = 0 gives Ax (unbounded), E < 0 gives sinh (grows): rejected.
- p5a: left A cos kx + B sin kx, k = √(2mE)/ħ; right C e^{−κx} (e^{+κx} discarded), κ = √(2m(V0 − E))/ħ.
- p5b: B/A = −κ/k; ψ = A[cos kx − (κ/k) sin kx] for x ≤ 0, A e^{−κx} for x > 0.
- p5c: one state per energy, not normalizable; tan δ = κ/k; E = V0/4 gives δ = 60°.
- p6a: ψ = A sin kx inside, C e^{−κx} outside; η = −ξ cot ξ with ξ² + η² = z0².
- p6b: not always; z0 > π/2 ≈ 1.5708.
- p6c: three bound states need z0 > 5π/2 ≈ 7.854. z0 = 3: ξ = 2.27886, η = 1.95110, |E|/V0 = 0.4230.
- p6d: bound states = the odd bound states of the width-2a well with the same V0 (same z0), same energies; even states lost.
- p7: ħ²/(2ma0²) = |E0| exactly, so η = 1; ξ tan ξ = 1 gives ξ = 0.86033; z0² = 1.74017; V0 = 23.67 eV (23.68 eV with 13.6057 eV).
- p8a: E = ⟨H⟩ = (ħ²/2m)∫ψ'² + ∫Vψ² > V_min (kinetic term strictly positive for a normalizable ψ).
- p8b: E < V everywhere means ψ''/ψ > 0: ψ always bends away from the axis and cannot vanish at both ends.

### Comparison (one line per answer id)
- p1-dx: page a/√2. Agrees.
- p1-dp: page ħ/(a√2). Agrees.
- p1-phi: page (a/√ħ) exp(−a²p²/(2ħ²)). Agrees.
- p2-dx: page |Δ|²/√(2R). Agrees.
- p2-dp: page ħ/√(2R). Agrees.
- p2-phi2: page (|Δ|²/ħ) exp(−Rp²/ħ²). Agrees.
- p2-prod: page ħ/(2 cos 2φ). Agrees.
- p2-dp0: page ħ/(2a). Agrees.
- p2-re: page 2a². Agrees.
- p3-phase: page n²π²ħt/(2ma²). Agrees.
- p3-norm: page √(2/a). Agrees.
- p3-x: a/2. Agrees.
- p3-x2: a²(1/3 − 1/(2n²π²)). Agrees.
- p3-dx: a√(1/12 − 1/(2n²π²)). Agrees.
- p3-p: 0. Agrees.
- p3-p2: (nπħ/a)². Agrees.
- p3-dp: nπħ/a. Agrees.
- p3-prod: 0.568 (mine 0.56786). Agrees.
- p3-ineq: choice 1 (satisfied, never saturated, smallest at n = 1). Agrees.
- p3-time: choice 2 (none change). Agrees.
- p4-energy: ħ²k²/(2m). Agrees.
- p4-spectrum: choice 1 (every E > 0, one state each). Agrees.
- p5-kappa: √(2m(V0 − E))/ħ. Agrees.
- p5-ratio: −κ/k. Agrees.
- p5-count: choice 0 (one state, not normalizable). Agrees.
- p5-delta: 60°. Agrees.
- p6-cond: −ξ/tan ξ. Agrees.
- p6-always: choice 1 (no). Agrees.
- p6-z1: 1.571. Agrees.
- p6-z3: 7.854. Agrees.
- p6-e3: 0.423 (mine 0.42298). Agrees.
- p6-relation: choice 2 (odd states, same energies). Agrees.
- p7-xi: 0.860 (mine 0.86033). Agrees.
- p7-v0: 23.7 eV (mine 23.666 eV with 13.6 eV). Agrees.
- p8a: no box; page's proof matches mine.
- p8-shape: choice 3 (ψ'' has the sign of ψ). Agrees.

No disagreement. Independent numerical check written for this review (complex arithmetic, not the calcs file's real/imaginary split): for Δ² = 1.3 + 0.8i, 0.7 + 0.2i and 2.0 − 1.5i, ħ = 1 (and ħ = 0.8 for the transform), a grid integral over x ∈ [−60, 60] of the complex ψ = exp(−x²/(2Δ²)) gives Δx, Δp (from |ψ'|² by finite differences), |Φ̃(p)|² at p = 0.3 and 1.1, and ΔxΔp all equal to the page's formulas to better than 1e-7 relative (e.g. Δ² = 1.3 + 0.8i: Δx = 0.946654 both, Δp = 0.620174 both, product 0.587090 = 1/(2 cos(arg Δ²))).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 7, `p7-xi` box; intro paragraph listing our additions | MIT asks only for V0 | A second box asks for ξ = ka0; the intro's list of added boxes (5(c), 6(c), 3(d)) does not include it, and the problem does not say "our addition" | Add "and the number ξ in Problem 7" to the intro's list of added boxes, or "(our addition)" after "give it in the first box" |
| 2 | info | Intro, list of added boxes | n/a | "the number of the first state in Problem 3(d)" is unclear, and the list is out of problem order | Write "the uncertainty product of the ground state in Problem 3(d)" and list 3(d), 5(c), 6(c) (, 7) in order |
| 3 | info | Problem 4 statement | "These states cannot be normalized." | Same short sentence | Fine as a short standard phrase; no change needed |

## Arithmetic and answer checks
- Every answer box recomputed in the blind solve and above; all agree.
- Numbers in the solutions: 1/√12 = 0.2887; Δx/a at n = 1 = 0.1808; √(π²/3 − 2) = √1.2899 = 1.1357; product n = 2: 1.670; 13.6% above ħ/2 ("within 14%"): all correct. ξ = 2.2789, η = 1.9511, −ξ cot ξ = 1.951, |E|/V0 = 0.4230, "42% of the way down": correct. ξ tan ξ: 0.8 → 0.824, 0.9 → 1.134; ξ = 0.8603, ξ² = 0.7402, z0² = 1.7402, V0 = 23.67 eV, level 10.07 eV above bottom, 33.56 eV for the infinite box of width 2a0, z0 = 1.319 < π/2 (one bound state): all correct.
- Problem 7 constants: ħc = 197.327 MeV fm, m_e c² = 0.510999 MeV, a0 = 0.529177 Å match CODATA 2018 (197.3269804, 0.51099895, 0.529177210903); (ħc)²/(2mc²a0²) = 13.6057 eV, so "13.606 eV" and "moves V0 by less than 0.1%" (0.04%) are right. The answer itself uses only MIT's 13.6 eV, so the reader needs no constants.
- Answer boxes: every `vars` range keeps its formula finite and physical (p2: D ∈ [1, 2], R ∈ [0.3, 0.9] keeps R < |Δ|²; p2-prod φ ∈ [0.05, 0.7] < π/4; p5-kappa V0 − E ≥ 0.5; p6-cond ξ ∈ [1.7, 3.0] avoids the poles at π/2 and π). Number tolerances (1%, 0.5%, 2%) accept 3 significant figures and reject the natural wrong values (0.5 for p3-prod; 3π/2 and 7π/2 for p6-z3).
- Mistake hints: each checked against its formula; all true (e.g. p2-dp's ħ√R/(√2|Δ|²) is indeed ħ/(2Δx); p2-re's 2a²(1 + t²/τ²) is indeed |Δ|⁴/Re(Δ²); p1-phi's β²/(4α) = −a²p²/(2ħ²)).
- Every solution ends with a check step (units, limits, or a second route).
- No hint gives a final result away. The strongest are p5(c) hint 2 (tan δ = κ/k) and p7 hint 2 ("You know η"), both second-level hints that leave the number to compute; acceptable.
- Points: 5, 10, 15, 5, 10, 10, 5, 5 as MIT; part splits add up (3+2, 3+3+2+2, 3+4+3+3+2, 3+4+3, 4+2+2+2, 3+2).

## Citations
All `at=` locations checked against the printed footer pages of the PDFs (pdftotext -f N -l N):
- MIT sheet: Problems 1 and 2 (eq. (1) and the Re(1/z) relation) p. 1; 2(a)–(d), 3, 4 p. 2; 5–8 p. 3. Correct.
- Chapter 7: eq. (1.15) Heisenberg product p. 3; eq. (3.4) packet p. 6; eq. (3.6) τ = 2ma²/ħ p. 7; (calcs) eq. (3.8) p. 7. Correct.
- Chapter 8: eq. (1.11) Fourier pair p. 2; eq. (1.12) Parseval p. 3; eq. (2.31) kinetic energy as ∫|ψ'|² p. 5. Correct.
- Chapter 10: eq. (1.9) stationary state p. 2; eq. (1.14) time-independent expectation values p. 3; eq. (2.22) p. 4; case (4) hard wall and eq. (2.23) p. 5. Correct.
- Chapter 11: eqs. (1.10), (1.11) p. 3; eqs. (2.25)–(2.27), (2.29) p. 7; eqs. (2.34) even and (2.36) odd conditions p. 8. Correct. (Calcs entry p7-level cites "notes pp. 7–8, eq. (2.31)"; eq. (2.31) is on p. 8. Trivial.)

## Coverage and order
- All eight MIT problems, in MIT's order, with MIT's parts in order; Problems 5 and 6 split into parts, said in the intro and in each problem. The reading assignment is left out, said in the intro.
- MIT's φ(p) renamed Φ̃(p), said in the intro. MIT's "Δ = ..." in Problem 2 (garbled in the text extraction, evidently Δ not real) rendered as "a complex number that is not real": consistent.
- Additions (φ_n(0) = 0, N real positive, δ for E = V0/4, z0 = 3 well, n = 1 product, ξ box in Problem 7) are physics-neutral; all but the Problem 7 ξ box are marked (warning 1).
- Claims about other pages checked: Set 4 Problem 3 (evolved packet, a(t) = a√(1 + t²/τ²)) and Problem 6 (constant Δp of a free packet) exist on main as described; the step-potential lesson defines δ = tan⁻¹(k/κ) = 90° minus the page's δ, as the page says.

## Licensing
- No "All rights reserved", "Courtesy of" or third-party notice on MIT's sheet (grep). No figures on the sheet; the page's only graph is a generated `<Plot>` from formulas.
- Statements are in the page's own wording; no verbatim paragraphs. No OpenStax, LibreTexts or textbook material (the Griffiths reading is dropped).

## Notes
- Writer's question 1 (Problem 4, rejecting ψ = Ax at E = 0): the wording is correct and adequate: ψ = Ax grows without limit and is not acceptable even as a non-normalizable scattering state. Optional: add that Ax is the k → 0 limit of sin kx / k, a single point at the edge of the continuum, so leaving it out changes nothing physical. (info)
- Writer's question 2 (Chapter 9 for the variance): not needed. The definition (ΔQ)² = ⟨Q²⟩ − ⟨Q⟩² appears only in the notation paragraph, in prose, not in a `<Formula>`. If a citation is wanted, it is Chapter 9 of the notes, p. 6, eqs. (2.42)–(2.43) (would need a fifth reading). (info)
- Writer's question 3 (partial independence of the p2-dx calc): agreed, it is partial: the calc builds ψ from 1/Δ² = (R − iS)/D⁴, which already contains Re(1/Δ²) = R/D⁴, the relation the step relies on; only the Gaussian moment is checked independently. My complex-arithmetic check above closes the gap. Optional calcs improvement: parametrize Δ = D e^{iφ} so that 1/Δ² = e^{−2iφ}/D² (exponent −x² cos 2φ /(2D²) ± i x² sin 2φ/(2D²)) and compare with D²/√(2 D² cos 2φ); that route does not use the Re(1/z) relation. (info)
- Writer's question 4 (constants in Problem 7): correct; see the arithmetic section. (info)
- No em dashes, no `## Summary` with answers. Symbols: content:check passes with no symbol errors for this page.

COUNTS: errors=0 warnings=1 info=7

## Resolution (2026-11-22, by the page author)

- Warning 1: the introduction's list of added boxes now includes the number ξ in Problem 7.
- Info: that list now names "the uncertainty product of the ground state in Problem 3(d)" and follows the problem order; calcs `p7-level` cites notes p. 8 only. The other info items need no change (MIT's short sentence in Problem 4 stays; the variance is defined in prose only; the reviewer's own complex-arithmetic check covers the 2(a) Δx calcs entry).
- Problem 2(d) links Set 4, which is already on `main`.
- Status set to `reviewed`.
