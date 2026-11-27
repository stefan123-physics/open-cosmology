---
page: content/year-5/8.962/8-962-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset06/ (read: pset06.pdf/.txt, 5 pp.)
  - Lecture 7 transcript (read, PDF p. 3)
  - Lecture 9 transcript (read, PDF p. 16)
  - Lecture 11 transcript (read, PDF pp. 7, 8, 9, 20)
  - Lecture 12 transcript (read, PDF pp. 4, 8–11, 14, 15, 17, 18)
  - Lecture 13 transcript (read, PDF pp. 8, 9, 12, 13)
  - Lecture 14 transcript (read, PDF pp. 4, 10, 14)
  - MIT 8.962 Problem Set 5 sheet (read, for the claims about Problem 2 of Set 5)
verdict: pass-with-notes
---

# Review: Problem Set 6 (8.962)

## Blind solve

### My answers (written before opening the full page)
Conventions: η = diag(−1,1,1,1), MTW sign of Riemann, G_μν = R_μν − ½g_μν R.

- P1: ∇_μ G^{μν} = 0 ⇒ ∂_0 G^{0ν} = −∂_i G^{iν} − Γ^μ_{μλ}G^{λν} − Γ^ν_{μλ}G^{μλ}. The right side has at most two time derivatives (∂_i adds none; Γ·G terms have at most 2), so G^{0ν} has at most one. Box 1: 2. Box 2: 4 constraints (G^{0ν}), 6 evolution (G^{ij}). G_{0ν} (indices down) = g_{0α}g_{νβ}G^{αβ} picks up g_{0i}g_{0j}G^{ij} etc., so it agrees in character only when g_{0i} = 0 (then G_{00} = g_00² G^{00}, G_{0i} = g_00 g_ij G^{0j}).
- P2: δ√−g = −½√−g g_μν δg^{μν}; δS ∝ ∫√−g (R_μν − ½g_μν R − ½a g_μν) δg^{μν} ⇒ G_μν − (a/2) g_μν = 0 ⇒ a = −2Λ. Trace: −R + 4Λ = 0 ⇒ R = 4Λ.
- P3(a): Γ^i_tt = ∂_iφ ⇒ d²x^i/dt² = −∂_iφ, so φ = Φ (up to a constant).
- P3(b): R = −6e^{−2φ}(□φ + η^{μν}∂_μφ∂_νφ) ≈ −6∇²φ, i.e. R = −6L.
- P3(c): g_μν T^μν = T ≈ −ρ ⇒ −6∇²φ = −κρ ⇒ ∇²φ = κρ/6 = 4πGρ ⇒ κ = 24πG.
- P3(d): static, g_tt = −e^{2φ}: ω_t/ω_b = e^{φ_b−φ_t} ≈ 1 − gh. Yes, consistent. gh/c² for 20 m: 2.18 × 10⁻¹⁵.
- P3(e): null geodesics are conformally invariant (up to affine parameter), so light moves on straight lines of η: deflection 0 (GR: 4GM/b).
- P4(a): F^μ = (0, 0, 0, mg) (from mΓ^z_tt(u^t)², Γ^z_tt = g), magnitude mg.
- P4(b): V^t = [1 − v² − 2φ(1+v²)]^{−1/2} (≈ γ(1 + φγ²(1+v²))). F^μ = (0, 0, 0, mgγ²(1+v²)) = mg(1+v²)/(1−v²), magnitude the same.
- P4(c): g_t̄t̄ = −1 + 2φγ²(1+v²), g_x̄x̄ = 1 + 2φγ²(1+v²), g_t̄x̄ = 4φγ²v = 4φv/(1−v²), g_ȳȳ = g_z̄z̄ = 1+2φ. F^{μ̄} = (0, 0, 0, mgγ²(1+v²)).
- P4(d): condition (ηA) + (ηA)ᵀ = −H with g_bar = η + φH; symmetric choice A^t̄_t̂ = γ²(1+v²), A^x̄_x̂ = −γ²(1+v²), A^t̄_x̂ = 2γ²v, A^x̄_t̂ = −2γ²v, A^ȳ_ŷ = A^z̄_ẑ = −1 (unique up to an infinitesimal Lorentz transformation; A^t̄_t̂ is unique). A^t̄_t̂ = (1+v²)/(1−v²). F^{μ̂} differ from F^{μ̄} only by φ·mg terms: no difference to the order kept.
- P5 (sheet constants): M_sun = 4.92 × 10⁻⁶ s; (a) 0.443 cm; (b) 7.41 × 10⁻¹⁴ cm⁻²; (c) 8.23 × 10⁻¹⁶ cm⁻²; (d) 3.27 × 10⁻⁸ s⁻¹ = 1.03 yr⁻¹; (e) 2.74 × 10⁻⁷ (dimensionless); (f) ħG/c³ = 2.59 × 10⁻⁶⁶ cm², l_p = 1.61 × 10⁻³³ cm; (g) m_p = l_p c²/G = 2.17 × 10⁻⁵ g, E = 1.96 × 10¹⁶ erg = 1.22 × 10²⁸ eV; ratio to 10¹³ eV = 1.22 × 10¹⁵: far beyond any collider.

### Comparison with the page (one line per answer id)
- p1-order: page "two" (choice 2) = mine. Agree.
- p1-count: page "four constraints and six evolution equations" = mine. Agree.
- p2-a: page −2Λ = mine. Agree.
- p2-r: page 4Λ = mine. Agree.
- p3a-phi: page φ = Φ = mine. Agree.
- p3b-r: page −6L = mine. Agree (exact formula −6e^{−2φ}(□φ + ∂φ·∂φ) also identical to mine).
- p3c-kappa: page 24πG = mine. Agree.
- p3d-pr: page "consistent" = mine. Agree.
- p3d-shift: page 2.18 × 10⁻¹⁵ = mine (2.1778 × 10⁻¹⁵). Agree.
- p3e-angle: page zero = mine. Agree.
- p4a-fz: page mg = mine. Agree.
- p4b-vt: page 1/sqrt(1 − v² − 2φ(1+v²)) = mine. Agree.
- p4b-fz: page mg(1+v²)/(1−v²) = mine. Agree.
- p4c-gtx: page 4φv/(1−v²) = mine. Agree.
- p4d-att: page (1+v²)/(1−v²) = mine. Agree (and it is the same for every admissible tetrad, since the diagonal of the antisymmetric freedom vanishes).
- p4d-diff: page "same, difference of order φg" = mine. Agree.
- p5a 0.443 cm, p5b 7.41 × 10⁻¹⁴ cm⁻², p5c 8.23 × 10⁻¹⁶ cm⁻², p5d-s 3.27 × 10⁻⁸ s⁻¹, p5d-yr 1.03 yr⁻¹, p5e 2.74 × 10⁻⁷, p5f 2.59 × 10⁻⁶⁶ cm², p5g-m 2.17 × 10⁻⁵ g, p5g-e 1.22 × 10²⁸ eV, p5g-ratio 10¹⁵: all equal to mine (recomputed with the sheet's constants: 0.44318, 7.4111e-14, 8.2346e-16, 3.2667e-8, 1.0309, 2.7449e-7, 2.5939e-66, 2.1732e-5, 1.2209e28, 1.22e15).

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(c), `p4c-gtx`, mistake `2*phi*v/(1 - v^2)` hint | (our own hint) | "the metric component is half the coefficient of 2 dt̄ dx̄ in the line element" | The statement is wrong as written: the line element is 2 g_t̄x̄ dt̄ dx̄ + …, so g_t̄x̄ *is* the coefficient of 2 dt̄ dx̄ (half the coefficient of dt̄ dx̄). Replace with: "A factor 2 is missing. dt² and dx² each give a cross term 2γ²v dt̄ dx̄, so 2φ(dt² + dx²) holds 8φγ²v dt̄ dx̄, and the metric component is half the coefficient of dt̄ dx̄." |
| 2 | info | Introduction, φ paragraph | Problem 4: "with φ the normal Newtonian potential" | φ is minus the Φ of the lessons | Correct and well handled; optionally add that the sheet calls this φ "the normal Newtonian potential", although with ∂_zφ = −g its sign is opposite to the lessons' Φ. |
| 3 | info | Problem 1 | G_00, G_0i (indices down) | Proof for G^{0ν}; remark that G_{0ν} agrees only when g_0i = 0 | Verified correct: G_{0ν} = g_00 G^0_ν + g_0i G^i_ν, and G^i_ν holds second time derivatives through G^{ij}, so with a shift the lowered components mix in evolution equations; for g_0i = 0, G_00 = g_00² G^{00}, G_0i = g_00 g_ij G^{0j}. Disclosed in the introduction. No change. |
| 4 | info | Problem 2, "With matter" | — | Lesson action, Lecture 13 transcript pp. 12–13 | The action with the matter Lagrangian is on PDF p. 13 (p. 12 has the vacuum equation). "pp. 12–13" is acceptable; "p. 13" would be exact. |

Sheet slips listed on the page, all verified: "Nordstrøm" spelling; e^φ = Ω "used in lecture" (Lecture 11, PDF p. 9 does leave conformal transformations to notes); Problem 4's m u^β∇_β u^α = F^μ (index α for μ, confirmed on the sheet); 4.93 vs 4.92 × 10⁻⁶ s (GM/c³ = 4.916 × 10⁻⁶ s with the sheet's values). Header "Spring 2006" confirmed.

## Arithmetic and answer checks
- All Problem 5 numbers recomputed (see Blind solve); also 1.47 km for the Sun (1.4748 × 10⁵ cm), Earth/Sun mass ratio 3.0 × 10⁻⁶, 1/√(7.41 × 10⁻¹⁴) = 3.67 × 10⁶ cm ≈ 37 km, pressure/density 1.1 %, c⁵/G = 3.64 × 10⁵⁹ erg/s, l_p/0.443 cm = 3.6 × 10⁻³³ (more than 32 powers of ten), 1.96 × 10¹⁶ erg ≈ 2 GJ, 1.22 × 10¹⁹ GeV, 21.7 μg. All correct.
- Problem 3(c) sample: Φ = (2/3)πGρr² has ∇²Φ = 4πGρ, R = −24πGρ = κT for κ = 24πG. Correct.
- Problem 3(d): 9.8 × 20/9.00 × 10¹⁶ = 2.178 × 10⁻¹⁵. Correct.
- Problem 3(e): geodesic equation −Γ^μ_αβ p^α p^β with the conformal Γ gives −2(p·∂φ)p^μ + (η p p)∂^μφ; integration e^{−2[φ−φ(0)]} correct.
- Problem 4(d): alternative tetrad (A^x̄_t̂ = 0, A^t̄_x̂ = 4γ²v) checked from ηA = −S + W; the check of e_t̂² = −1 is correct (the g_t̄x̄ term is second order).
- Problem 1 check (∂_t(∂_iE^i − 4πρ) = −4π(∂_tρ + ∂_iJ^i)) correct.
- Problem 2 check: de Sitter R = 12H² = 4Λ, trace −R − 2a = 0 ⇒ a = −2Λ. Correct.
- Formula boxes: checker compares formulas to relative 1e-6 (lib/answers.ts), so every listed mistake is rejected; all listed mistakes are finite over their vars (minimum of 1 − v² − 2φ(1 ± v²) over v ≤ 0.8, φ ≤ 0.05 is 0.196 > 0). Each mistake hint is true of its formula, except item 1 above. The first-order V^t is rejected (relative difference ≥ 1.6 × 10⁻⁴), which is consistent with the statement's "for the metric as written" and has its own explaining hint.
- Number boxes: 1 % tolerance on 3-significant-figure values; fine.
- Choice boxes: right answers at positions 2, 1, 1, 0, 3, 1, 2; none is strictly the longest or shortest; no distractor is also true ("consistent, but only for light sent straight up" is false because only the end potentials enter; "exactly the same, because the tetrad is the unit matrix" is false).
- `npm run calc:test -- -k 8-962-problem-set-6`: 69 passed.
- Points: 8 + 10 + 30 (7+7+6+5+5) + 28 (6+8+7+7) + 24 (6×3+6) = 100; MIT gives none, disclosed.

## Coverage and order
- All five MIT problems and every part, in MIT's order (1; 2; 3a–e; 4a–d; 5a–g). Additions (two P1 choice boxes, R = 4Λ, 20 m tower number, P3(e) comparison, collider ratio with 10¹³ eV) are marked as ours on the page.
- `covers: [11, 12, 13, 14]` is right: Bianchi identity (L11), field equation, Newtonian limit, cosmological constant and geometrized units (L12), action (L13), linearized Ricci scalar, Lorentz transformation of h and the weak-field metric (L14). Lectures 7 and 9 are cited for background only (redshift, geodesic equation), which does not call for adding them.

## Licensing
- Sheet has no figure, no "All rights reserved" or "Courtesy of" notice (checked). Statements are rewritten; no verbatim passages beyond standard terms and the sheet's short quoted phrase about Pound–Rebka (attributed). No OpenStax/LibreTexts. No em dashes on the page; no `## Summary` with answers.

## Notes
- Citations: every `at=` transcript page checked against the PDFs: L7 p. 3 (tower redshift), L9 p. 16 (geodesic equation), L11 pp. 7–8 (Weyl), p. 9 (conformal notes), p. 20 and L12 p. 4 (contracted Bianchi), L12 p. 8 (Newtonian gravity), p. 9 (u^t u^t dominates), pp. 10–11 (g_00 = −(1+2φ)), p. 14 (trace −ρ), p. 15 (G = 8πG T), p. 17 (Λ), p. 18 (1.47 km), L13 p. 8 (δ√−g), p. 9 (δ(√−g R) with divergence), L14 p. 4 (Lorentz transform of h), p. 10 (R = ∂∂h − □h), p. 14 (weak-field metric). All correct. The lesson for Lecture 12 does quote 1.477 km, as Problem 5(a) says.
- Claims about Problem Set 5 (4GM/b; half from each factor; measurements recalled on that sheet) match the Set 5 sheet. The lesson `frw-cosmology-from-symmetry` does give (ȧ/a)² = Λ/3.
- "In our calculation file" claims (P2 both boxes against de Sitter with numerical H; P3(c) sample potential; P4(b) numerical force) are true of calcs/8.962/8-962-problem-set-6.yaml. The "while writing this page" claims (full Ricci scalar of de Sitter and of e^{2φ}η by finite differences) are recorded in the calcs header as done outside the file; I could not verify the runs themselves, but my own derivation gives the same exact R and 12H².
- Symbols: the two meanings of φ (Problem 3 = Φ; Problem 4 = −Φ) are in one entry that names each problem, and both fit every use; φ_t, φ_b, Φ_t, Φ_b scoped. g (metric / determinant / acceleration), G (constant / Einstein tensor), Λ (cosmological constant / Lorentz matrix), h (trace / height), L (luminosity / Lagrangian), S, E, V, A all name the problem where each meaning applies. No misfit found.
- Constants: 1 eV = 1.602 × 10⁻¹² erg ("the SI value, rounded") is correct (1.602176634 × 10⁻¹⁹ J exact); the sheet's G, c, M_⊙ correctly described as rounded sheet values.
- Problem 5(g) check calls 22 μg "the mass of a grain of dust"; a grain of fine sand is closer (most dust grains are far lighter). Optional wording change (info, not counted separately).

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1 fixed: the hint of the listed mistake `2*phi*v/(1 - v^2)` in `p4c-gtx` now says that 2φ(dt² + dx²) holds 8φγ²v dt̄ dx̄ and the metric component is half the coefficient of dt̄ dx̄.
- Note on Problem 5(g) taken: 22 micrograms is now "the mass of a grain of fine sand".
- Other info items: no change needed.
- `status: reviewed`.
