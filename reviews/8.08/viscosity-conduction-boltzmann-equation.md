---
page: content/year-4/8.08/viscosity-conduction-boltzmann-equation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/transport/ (read: resource page; CC BY-NC-SA 4.0 footer link, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/35e4c4437626cad41f37a509d17fc8d0_transport.pdf (read as page images: handwritten pp. 102-111 and 113 = PDF pages 10-20 at 90 dpi, pp. 102 and 113 again at 160 dpi; p. 114 glanced at to check the 111 -> 113 jump; handwritten, no text layer)
  - content/year-5/8.902/jeans-equations.mdx (read, for the cosmology callout and leadsTo)
verdict: needs-changes
---

# Review: Viscosity, heat conduction and the Boltzmann equation for metals

Scope: Wen's Chapter IX notes, handwritten pp. 102-111 and 113. Every `<Formula>` was compared with the page images, every number was recomputed by hand and with `npm run calc:test -- -k viscosity-conduction` (47 passed), and `npm run content:check` shows 0 errors (the only warning for this page was the missing review file). There is one error: the page repeats a slip from the notes in the Drude derivation. The rest are warnings and info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Electrons in a metal: the Drude model", first paragraph | p. 106: "Δ⟨u⟩ = (1 − Δt/τ)⟨u⟩ + (Δt/τ)⟨0⟩". This is a slip: the right-hand side is the new value ⟨u⟩(t+Δt), not the change. | "so $\Delta\langle\vec u\rangle = (1 - \Delta t/\tau)\langle\vec u\rangle$ and $d\vec u/dt = -\vec u/\tau$". As written this is wrong: it would give du/dt ≈ u/Δt. The page repeats the notes' slip. | Write $\langle\vec u\rangle(t + \Delta t) = (1 - \Delta t/\tau)\langle\vec u\rangle(t)$, or $\Delta\langle\vec u\rangle = -(\Delta t/\tau)\langle\vec u\rangle$. Optionally add a short bracket saying the notes write Δ⟨u⟩ for the new value. |
| 2 | warning | "Thermopower", last sentence: "For a free electron gas the Sommerfeld expansion makes the estimate exact, $Q = \frac{\pi^2}{2}\frac{k_B}{e}\frac{k_BT}{E_F}$" | Not in the notes (the page says it is the page's addition). | Calls it exact for a free electron gas. | Checked: with the page's own L¹¹ and L¹², a τ that does not depend on energy, and the Sommerfeld expansion, L¹²/L¹¹ = (π²/3)(k_B²T/e)·d ln G/dε with G ∝ ε^{3/2}, which is exactly (π²/2)(k_B/e)(k_BT/E_F). So the formula is right, but only for an energy-independent τ. With a fixed mean free path (τ ∝ ε^{-1/2}, the impurity picture of p. 106) the factor is π²/3, and the Drude-Sommerfeld textbook value is π²/6. Add "with τ independent of energy", and drop "exact" or tie it to that assumption. |
| 3 | info | "The Hall effect", paragraph after the Hall formula: "a transverse field $E_y = \rho_{yx}j_x$" | p. 107: "E_y = ρ_xy j_x = R_H B j_x" (and the column (ρ_xx, ρ_xy) j_x). With the boxed matrix, E_y = ρ_yx j_x. | Uses ρ_yx without saying it differs. | The page is right; the notes swap the indices (harmless for the size, since |ρ_xy| = |ρ_yx|). Optional: a short bracket noting it. |
| 4 | info | "Currents from the Boltzmann equation" | p. 110 has two boxes for δg: the first has "+∇μ" (sign slip), the second, corrected one has "−∇μ". p. 109 already gives ∂f/∂r at its foot. | Uses the corrected box and cites p. 110. | Correct; no change needed. The p. 110 citation is fine (the derivation is written out there). |
| 5 | info | "How fast a pond freezes", second paragraph | p. 105: "assume v_water = e v_ice ⇒ ΔS = k_B". | Reports the assumption faithfully. | Optional: water is actually denser than ice, and the measured entropy of fusion is about 2.6 k_B per molecule (22 J/(mol K)), so the assumption only sets the order of magnitude. A short bracket would stop readers taking it literally. |
| 6 | info | "Electrons in a metal", temperature dependence | p. 106 has a sketch: v̄ flat up to about E_F, then σ ∝ T^{-1/2} in the classical regime. | Covers this in words ("independent of T as long as k_BT ≪ E_F"), not the high-T T^{-1/2} branch of the sketch. | Optional: one clause saying that for k_BT ≫ E_F the classical σ ∝ T^{-1/2} comes back, as the notes' sketch shows. |
| 7 | info | "The Boltzmann equation", collisionless part | p. 108 calls the collisionless motion "diffusionless motion (hydrodynamic motion)", and p. 109 adds "no diffusion (collision effect)". | Calls it "without collisions" / "collisionless". | Fine, and clearer. No change needed. |

## Formula-by-formula check (citation = handwritten page)
- Flux of x momentum, p. 102: matches (Wen's u₁ₓ, u₂ₓ = layers below/above). Correct.
- Viscosity of a gas, p. 102: the notes' box reads √(2mk_BT)/(3σ), confirmed at 160 dpi. With ν = (1/6)n v̄ mλ, λ = 1/(σn) (p. 104 and the previous page) and v̄ = √(2k_BT/m) (stated on p. 104), the result is m v̄/(6σ) = √(2mk_BT)/(6σ). **The page's slip note is correct.**
- Pressure tensor, p. 102: matches, including the −(2/3)δᵢⱼ∇·u term. The trace is zero (calcs `viscous-stress-traceless`).
- Navier–Stokes, p. 103: matches. Independent check: ∂ⱼP'ᵢⱼ = −ν(∇²uᵢ + (1/3)∂ᵢ∇·u), which gives ∇(P − (ν/3)∇·u) − ν∇²u. Correct. The notes write "∇·(P − …)", which is a gradient of a scalar; the page's ∇(…) is the right notation. The notes' force sum "+AΣ(Pᵢⱼ(x+Δxⱼ) + Pᵢⱼ(x))" has sign slips; the page's "−∂Pᵢⱼ/∂xⱼ per unit volume" is right.
- Reynolds number, p. 103: matches, and so do the units [ν] = m/(tL). R ≫ 1 turbulent, R ≪ 1 streamline: matches.
- Heat flux, p. 104: Wen's (1/12)λ l n v̄ k_B ∂ₓT equals (1/6)λ n v̄ c_v ∂ₓT with c_v = l k_B/2. Correct, and the page says it rewrote l k_B/2 as c_v.
- Heat conductivity, p. 104: the notes' box reads c_v/(3σ)·√(2k_BT/m); from K = (1/6)n v̄ λ c_v it is c_v/(6σ)·√(2k_BT/m). **The page's slip note is correct.**
- Heat equation, p. 104: both boxed forms match.
- Growth of the ice, p. 105: matches (x² = 2KΔT t/nℓ).
- Wen's estimate of the freezing speed, p. 105: matches. √(aV̄) = √(3×10⁻¹⁰ × 300) = 3.0×10⁻⁴ m = 0.3 mm/√s. Wen drops the factor 2 and the √2/3 under "~"; the page's "∼" covers this.
- Drude equation, Drude current, Ohm's law, p. 106: match.
- Drude model in a magnetic field, p. 107 (cgs): matches. Resistivity tensor, p. 107: inverting j = σ₀E + ωcτ(j_y, −j_x) gives σ₀E = [[1, −ωcτ], [ωcτ, 1]]j. Correct. Hall resistivity and R_H = 1/(enc), p. 107: match.
- Equilibrium distributions, p. 108: match.
- Collisionless Boltzmann equation, relaxation-time approximation, linearized solution, p. 109: match. The out/in terms −g/τ and +g₀/τ are physically right; the notes' marginal sign on the "in" term is hard to read, and the page's version is correct.
- Deviation from equilibrium and F = eE + (e/c)v×B, p. 110: match the corrected box.
- Electric current, L¹¹, p. 111: match. Independent check: (1/3)(2π)⁻³·2πk_F(2m/ħ²)τe²v_F² with v_F = ħk_F/m = (1/3)(2π)⁻³(4π/m)τe²k_F³ = e²τn/m, with n = (4π/3)k_F³/(2π)³. Correct.
- Thermopower, Q = L¹²/L¹¹, size estimate, p. 113: match, including the λ_T form. Wen's "∼ (k_B/e)(ℓ/λ_T)²" with ℓ the spacing between electrons is rendered correctly.
- "1160", p. 113: the notes read "1 eV ∼ 1160 K" and "ℰ = (1/1160) Q₀ ∇T", confirmed at 160 dpi. e/k_B = 11 604.5 K, so **the page's slip note is correct**, and its V/m statement (Q₀/11 605 × K/m) is right.

## Arithmetic and answer checks
- Argon viscosity: m v̄/(6σ) = 6.6335×10⁻²⁶ × 353.4 / (6 × 4.0715×10⁻¹⁹) = 9.60×10⁻⁶ Pa s. The inputs match the previous page (v̄ = √(2k_BT/m) = 353.4 m/s at 300 K; σ = 4π(0.18 nm)² = 4.07×10⁻¹⁹ m²). The measured value for argon at 300 K is about 22.7 μPa s; the ratio 2.3/0.96 = 2.4. Correct.
- Quiz 1 (density doubled → ν unchanged): correct, and so is the explanation.
- Quiz 2: 1000 × 0.02 × 0.1 / 10⁻³ = 2000. Correct. "often turbulent" is fair, though R = 2000 is just below the usual pipe transition (~2300); optional wording tweak.
- Quiz 3: answer 1 correct; the explanation is right.
- Quiz 4: E_y = ρ_yx j_x = (ωcτ/σ₀) j_x = j_xB/(nec). Answer 1 correct.
- "Honey ... tiny R; air round a car R in the millions": car 4 m, 20 m/s, kinematic viscosity 1.5×10⁻⁵ m²/s gives R ≈ 5×10⁶. Correct.
- Pond, (a): √(10/273) = 0.1914, √36 000 = 189.7, 0.3 mm × 0.1914 × 189.7 = 10.9 mm ≈ 11 mm. Correct.
- Pond, (b): nℓ = 917 × 334 000 = 3.063×10⁸ J/m³. x = √(2 × 2.2 × 10 × 36 000 / 3.063×10⁸) = √(5.172×10⁻³) = 0.0719 m ≈ 7.2 cm. Correct. Ratio 71.9/10.9 = 6.6. Correct.
- Ice constants: K ≈ 2.2 W/(m K) near 0 °C, 917 kg/m³ and 334 kJ/kg are standard handbook values. Correct.
- Plot: the solid curve 100√(5.172×10⁻⁵ ΔT t[h]) cm, with 2K/(nℓ) × 3600 = 5.172×10⁻⁵ m²/(K h). Correct. The dashed curve 0.03 cm × √(ΔT/273) × √(3600 t[h]). Correct. The largest value (ΔT = 20, 24 h) is 15.8 cm < 16, so it stays inside the range. The caption matches the formulas.
- "Why they differ": checked roughly. Wen's K ∼ (k_B/a²)√(k_BT/m) for a water molecule ≈ 0.05 W/(m K), against the measured 2.2, so the explanation (the gas formula badly underestimates conduction by lattice vibrations) is sound. "In a real pond ... somewhat more slowly": qualitatively right. The air-side resistance and snow cover often reduce growth a lot, so "somewhat" may understate it (info).
- Copper: τ = 9.109×10⁻³¹ / (1.68×10⁻⁸ × (1.602×10⁻¹⁹)² × 8.47×10²⁸) = 2.49×10⁻¹⁴ s. k_F = (3π² × 8.47×10²⁸)^{1/3} = 1.359×10¹⁰ m⁻¹. v_F = 1.573×10⁶ m/s. E_F = 1.127×10⁻¹⁸ J = 7.03 eV. Mean free path v_Fτ = 39.2 nm. n^{-1/3} = 0.228 nm, ratio 172, "about 170". ω_c = 1.759×10¹¹ s⁻¹, ω_cτ = 4.39×10⁻³. R_H = 7.37×10⁻¹¹ m³/C. V_H = 1/(1.357×10¹⁰ × 10⁻⁴) = 0.737 μV. k_BT = 0.02585 eV, k_BT/E_F = 0.00368, Q = 4.935 × 86.17 μV/K × 0.00368 = 1.56 μV/K ≈ 1.6. All correct.
- Copper k_F uses two spin states, (3π²n)^{1/3}, which is right for real copper. That fits the page's spin remark after L¹¹.
- Measured copper thermopower ≈ +1.8 μV/K at room temperature: "about 2 μV/K, opposite sign" is correct. With the page's convention (ℰ = Q∇T, e the signed charge), the free-electron Q is negative, so "opposite sign" holds. The reason given (non-spherical Fermi surface) is a common simplified explanation; the full story also involves the energy dependence of the scattering. Acceptable as stated ("sensitive to that").
- 1 eV ≈ 11 600 K and k_B/e = 86.2 μV/K: correct.
- Spin remark after L¹¹: correct. n = (4π/3)k_F³/(2π)³ = k_F³/6π² is one spin state; with two, n and L¹¹ both double, and the ratio is unchanged.
- Flashcards: all six checked against the formulas above. Correct. The thermopower card's "about a microvolt per kelvin in a good metal" is consistent with the copper example.
- calcs file: complete for the numbers on the page; `npm run calc:test -- -k viscosity-conduction`: 47 passed. Minor (info): the `kind: fact` entries for the measured argon viscosity, ice constants and copper thermopower give `source: {cite: reading1, ...}`, but Wen's notes do not contain those values. A neutral source (or none) would be more accurate.

## Coverage and order
- The page follows the notes' order exactly: viscosity (102), pressure tensor (102), Navier–Stokes and Reynolds (103), heat conduction (104), freezing (105), Drude (106), Hall (107), Boltzmann equation (108-109), δg for fermions (110), electric current and L¹¹ (111), thermopower (113).
- Nothing substantive on pp. 102-111 and 113 is left out. Small omissions are in items 6 and 7 above.
- The 111 → 113 jump: p. 111 ends with L¹¹ = Drude, and p. 113 starts "Thermopower" and uses L¹² as defined on p. 111. The argument is continuous, and p. 114 starts a new topic (Einstein relation). Whether a p. 112 ever existed (for example a worked L¹²) cannot be checked from the OCW file. The page's "nothing seems to be missing from the argument" is a fair, hedged statement.
- The page's additions are labelled as its own: lattice-vibration resistance, the SI Hall remark, no magnetoresistance, the Sommerfeld Q (see item 2), the spin remark, and the copper and pond examples.

## Licensing
- The OCW resource page shows a CC BY-NC-SA 4.0 link, with no "courtesy" or "all rights reserved" notice. The scanned PDF has no such notice on pp. 102-113.
- No figure from the notes is reproduced. The only graphic is a `<Plot>` generated from formulas. Wen's sketches (pipe, ice layer, thermocouple) are only described in words.
- The wording is a clear paraphrase; only standard terms are shared (e.g. "independent of n", "relaxation-time approximation"). The worked examples (argon, pond with measured ice constants, copper) are original; Wen's own numerical estimate is reported as his.
- No OpenStax or LibreTexts material.

## Forward links
- The callout and `leadsTo` (8.902 Lecture 6, slug `jeans-equations`) are accurate. That page derives the collisionless Boltzmann (Vlasov) equation ∂f/∂t + v·∂f/∂x − ∇φ·∂f/∂v = 0 for stars, says that stars move without collisions in the smooth potential, and takes velocity moments to get the Jeans equations. The callout's "force −m∇φ" with no collision term matches (8.902 writes the acceleration −∇φ; with p = ħk on this page, F = −m∇φ is equivalent). The Jeans-equations claim is supported.

## Notes
- Verdict needs-changes only because of item 1, a one-line fix. Item 2 should also be fixed (add the assumption of an energy-independent τ). Everything else is optional.
- All three slip notes the page makes (3σ → 6σ for ν and for K, 1160 → 11 605) were confirmed against the images and are correct.
- I did not check the 8.044 `free-fermi-gas` page's content; I only checked that the file exists for the link and the prerequisite.

## Resolution (2026-11-19, by the page author)

1. Fixed: the Drude step now reads ⟨u⟩(t + Δt) = (1 − Δt/τ)⟨u⟩(t), with a bracket that the notes write the left side as Δ⟨u⟩.
2. Fixed: the Sommerfeld formula Q = (π²/2)(k_B/e)(k_BT/E_F) is now stated for a relaxation time that does not depend on energy, and no longer called exact.
3. Added a bracket that the notes write ρ_xy where the matrix gives ρ_yx (same size).
4. No change (the page already uses the corrected box).
5. Added a bracket: Wen's v_water = e·v_ice is only for the estimate; water is denser than ice and the measured entropy of fusion is about 2.6 k_B per molecule (calcs entry `fusion-entropy-measured`).
6, 7. No change (optional).
8. Stands: the calcs format requires a cite key and the page has no separate reference for these handbook values; the entries are marked `origin: page-own` and their `where` says they are measured values, not Wen's.

`npm run content:check` and `npm run calc:test` pass. Status set to reviewed.
