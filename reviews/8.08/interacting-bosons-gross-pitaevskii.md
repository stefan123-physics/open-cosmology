---
page: content/year-4/8.08/interacting-bosons-gross-pitaevskii.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: handwritten scan, from page images of PDF pages 15-22 = Wen's pp. 62-69; p. 63 re-rendered at 170 dpi, p. 68 at 150 dpi)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/fed85ade1be7fc37f3526ef1f56207de_the_bose_gas_co.pdf (read pp. 70-71 only, to check the leadsTo to 7.5)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_bose_gas/ (not opened; the PDF above is its file)
  - Supplement 2 "Quantum Theory for Interacting Bosons" (fieldtheory_bos.pdf) (could not read in this review; only its title in _course.json was checked)
verdict: pass-with-notes
---

# Review: Condensed bosons as a field: the Gross-Pitaevskii equation and sound

All 23 `<Formula>` blocks were compared with Wen's handwritten pp. 62-69. Every one is in the notes at the page it cites, with the same notation (ħ, U, μ, v₀, δψ₁/δψ₂, ω_k). The one place where the page changes a formula (v₀ψ₀²δψ* on p. 67) is flagged in the text. All derivations were redone by hand (below). All numbers were recomputed and `npm run calc:test -- -k interacting-bosons` passes (22 passed). No errors were found. The findings are rounding consistency, two symbol meanings, a factor of 2 in a comparison, and an unflagged Wen slip.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, steps "Chemical potential" and "Speed of sound" | (page's own example) | μ = 1.0 × 10⁻³⁰ J, then μ/k_B = 73 nK and μ/m = 2.64 × 10⁻⁵ m²/s² | These two results come from the unrounded v₀ = 1.007 × 10⁻⁵⁰ J m³. A reader who uses the printed μ = 1.0 × 10⁻³⁰ J gets 72.4 nK → **72 nK** and μ/m = **2.62 × 10⁻⁵**. Either print v₀ = 1.007 × 10⁻⁵⁰ J m³ and μ = 1.007 × 10⁻³⁰ J, or keep 1.0 × 10⁻³⁰ J and print 72 nK and 2.62 × 10⁻⁵ (v_s = 5.1 mm/s and the factor of about 67,000 do not change). Update `na-mu-nK` / `na-mu-over-m` in the calcs file to match. |
| 2 | warning | "The uniform condensate and its broken symmetry", first paragraph | p. 68: V(ψ) = −μ\|ψ\|² + ½v₀\|ψ\|⁴ (no comparison made) | "the same shape as the Ginzburg-Landau free energy with −μ in the place of a" | The linked GL page writes A = (N/2)a⟨s⟩² + (N/4)b⟨s⟩⁴, so −μ corresponds to a/2 and v₀ to b/2, not to a. Write "with −μ playing the role of a/2", or just "the same shape, with −μ in the role of the quadratic coefficient". |
| 3 | info | "Sound in the condensate", paragraph after the dispersion plot | p. 69: "Low energy excitations ħω_k = v\|k\|" (the ħ on the right is missing, a slip) | ħω_k = ħv_s\|k\| | Correct as written. Rule 4 asks for a short bracketed note when the page departs from a slip, e.g. "(the notes drop the ħ on the right)". |
| 4 | info | "The uniform condensate…", item 2 | p. 68: a sketch of a bowl with a raised bottom and the ball(s) in the trough; p. 69: the same "wine-bottle" shape with an arrow running round the trough | "like the ball in Wen's sketch that rolls off the top of a wine-bottle bottom into one point of the trough" | As far as the 150 dpi scan shows, the sketch has the ball resting in the trough and does not show it rolling off the top. Uncertain reading. Suggest "like a ball resting at one point in the trough of a wine-bottle bottom (Wen's sketch)". |
| 5 | info | "Free bosons: the chemical potential is fixed", case 3 | p. 64: "Thus ψ₀ = c e^{ik·x} is a maximum NOT minimum" | Flags "maximum" as loose: it is a stationary point that is not a minimum | Verified. The quadratic form ∫ψ*(−ħ²∇²/2m + U − μ)ψ has eigenvalues ħ²q²/2m − (μ − U), which are negative for q < k and positive for q > k, so the plane wave is a saddle. The flag is right. Adding "Ω has no minimum when μ > U" is the page's own (correct) remark. Keep. |
| 6 | info | "Interacting bosons", bracket after the collective-excitation equation | p. 67: "+ v₀\|ψ\|²δψ*" | v₀ψ₀²δψ*, with a note | Verified: δ(\|ψ\|²ψ) = 2\|ψ₀\|²δψ + ψ₀²δψ*. The flag is right, and it also notes that it coincides for real ψ₀. Keep. |
| 7 | info | "The grand potential and the equation of motion" | p. 63 gives the EoM with −μ, with no comment | Adds "which only multiplies ψ by the phase e^{iμt/ħ}" and "after integrating the gradient terms by parts" | Both are correct (iħ∂ₜ(ψe^{iμt/ħ}) = (H − μ)ψe^{iμt/ħ}). They are the page's own glosses and read as such. No change needed. |
| 8 | info | "Interacting bosons", Ω with V(x, x′) | p. 67 labels \|ψ(x)\|², \|ψ(x′)\|² as ρ(x), ρ(x′) | Calls it "the usual double sum over pairs" and says each boson feels "the mean potential of all the others" | Own explanation that matches the formula. No change needed. |

## Arithmetic and answer checks
Recomputed with CODATA 2018 (ħ = 1.054571817e-34 J s, k_B = 1.380649e-23 J/K, u = 1.66053906660e-27 kg):
- Sodium mass 22.99 u = 3.8176 × 10⁻²⁶ kg → "3.82 × 10⁻²⁶ kg": correct.
- v₀ = 4πħ²a/m with a = 2.75 nm: 1.0067 × 10⁻⁵⁰ J m³ → "1.0 × 10⁻⁵⁰": correct. (2.75 nm = 52.0 Bohr radii. This is the older value of the sodium |F = 1, m_F = −1⟩ scattering length. Later determinations are about 54-55 a₀. "About 2.75 nm" is acceptable for an example, but this is uncertain, so marked info.)
- μ = v₀n = 1.0067 × 10⁻³⁰ J; μ/k_B = 72.9 nK (73 nK). With the printed 1.0 × 10⁻³⁰ J it is 72.4 nK. See finding 1.
- μ/m = 2.637 × 10⁻⁵ m²/s² (2.62 × 10⁻⁵ from the printed μ). v_s = 5.135 × 10⁻³ m/s → "5.1 × 10⁻³ m/s": correct either way.
- 343/v_s = 66,800 → "about 67,000": correct.
- Crossover ħ²k²/2m = 2μ: k = √(4mμ)/ħ = 3.718 × 10⁶ m⁻¹ → "3.7 × 10⁶"; 2π/k = 1.690 μm → "1.7 μm": correct.
- "well below the microkelvin transition temperatures of the previous page": the previous page gives 1.5 μK (Wen) for sodium at the same density 10¹⁴ cm⁻³ = 10²⁰ m⁻³, and 73 nK is well below that. Correct.
- Quiz 2 (Rb-87): μ = k_B × 50 nK = 6.903 × 10⁻³¹ J; m = 86.909 u = 1.4432 × 10⁻²⁵ kg; v_s = √(μ/m) = 2.187 × 10⁻³ m/s → "2.2 mm/s" (answer 1): correct. Distractor √(2μ/m) = 3.093 mm/s → "3.1 mm/s, a factor √2 too large": correct. The other distractors (2.2 m/s, 0.5 mm/s) are clearly wrong.
- Quiz 1: answer 1 is correct. At μ = U, Ω = ∫(ħ²/2m)\|∇ψ\|² ≥ 0 has its minimum 0 at any constant, so any n is allowed. The explanation cites pp. 64-65 correctly.
- Quiz 3: minimising −μn + ½v₀n² gives n = μ/v₀ and Ω/V = −μ²/2v₀ (answer 1): correct. The claim "singular at μ = 0" is correct: the first derivative is continuous (0 → 0) and the second jumps from 0 to −1/v₀, as the body says.
- Quiz 4: answer 1 (linear dispersion counted like phonons, C_V ∝ T³) matches p. 69. Correct.
- Flashcards: all five agree with the notes and the body.
- Potential plot: minimum of −0.8x² + ½x⁴ at x = √0.8 = 0.894 ("±0.89"), depth −0.32. Both correct. The y-range [−0.6, 1] contains the deepest well over the slider (μ/v₀ = 1 → −0.5).
- Dispersion plot: with x = ħk/√(2mμ), ε_k = μx² and ħω/μ = √(x²(x² + 2)) = x√(x² + 2). The sound line ħv_s k/μ = √2 x. Both are correct. The caption puts the bend at "ħk ≈ √(2mμ)" (ε_k = μ, x = 1), while the worked example uses ε_k = 2μ (x = √2). The two are not contradictory because both are approximate, but they could be aligned (info).
- Derivations redone:
  - Linearised GP: |ψ|²ψ → 2|ψ₀|²δψ + ψ₀²δψ*. ✓
  - Uniform case: U − μ + 2v₀n = μ, coefficient of δψ* = v₀n = μ. ✓
  - δψ = δψ₁ + iδψ₂: the real part gives −ħ∂ₜδψ₂ = (−ħ²∇²/2m + 2μ)δψ₁ and the imaginary part gives ħ∂ₜδψ₁ = −(ħ²/2m)∇²δψ₂. ✓
  - Wave equation −ħ²∂ₜ²δψ₂ = (−ħ²∇²/2m + 2μ)(−ħ²∇²/2m)δψ₂. ✓
  - Mode amplitudes: ħωA = ε_kC gives A = ħk²C/(2mω_k). ✓ Then ħ²ω² = ε_k(ε_k + 2μ) gives ω_k² = (ħ²k²/2m + 2μ)k²/2m. ✓ Units: s⁻². ✓
  - Small k: v_s = √(μ/m) = √(v₀n/m). ✓ Large k: ħk²/2m. ✓
  - Ω/V = −μ²/2v₀. ✓
- Calcs file: every number shown on the page has an entry. One small slip: the `shown` strings of `plot-minimum` and `plot-depth` are swapped in spirit (the depth entry quotes "(for μ/v₀ = 0.8, at ψ = ±0.89", the minimum entry quotes "…with depth −0.32"). `na-mu` uses v₀ = 1.0e-50 while `na-mu-nK`/`na-mu-over-m` use 1.007e-50 (the source of finding 1).

## Coverage and order
- The page follows Wen's order exactly:
  - p. 62: one boson, E₁, N bosons, "not quite right" product wavefunction.
  - p. 63: ground state with fixed N, U = 0 example, grand canonical Ω, EoM, δΩ, condition (*).
  - p. 64: recipe a-d, U = const cases 1-3, "maximum NOT minimum".
  - p. 65: μ = U and choose ψ₀; one solution per μ in general; collective excitations, ħω = ħ²k²/2m.
  - p. 66: general superposition and occupation of levels.
  - p. 67: interacting Ω, U_eff, non-linear S-eq., ground state, contact interaction, GP equation, linearised equation.
  - p. 68: U = 0 example, ground state, n = μ/v₀ or 0, cases, μ = v₀n, Ω piecewise, singularity, order parameter, quantum phase transition, collective excitations, δψ₁/δψ₂ equations, wave equation.
  - p. 69: mode solution, dispersion, v_s, limits, the dispersion sketch, C_V ∝ T³, phase-arrow sketch, "symmetry breaking & gapless mode".
- Nothing in pp. 62-69 is left out. Only the small sketches are not reproduced: the ground-state/excitation level picture on p. 65, the level picture on p. 66, and the small circle with δψ₂ on p. 69. They are described or not needed.
- Additions beyond the notes: the e^{iμt/ħ} remark, "no minimum for μ > U", the second-derivative jump at μ = 0, the sodium example with v₀ = 4πħ²a/m (clearly marked "a relation not in the notes"), and the link to helium's T³ (supported by the previous page's discussion of p. 61).
- The page correctly stops at p. 69. Superfluidity (p. 70 onward) is left to lecture 7.5.

## Licensing
- Pages 62-69 carry no "rights reserved" or "courtesy" notice. Both graphs are `<Plot>`s generated from formulas (V(ψ) and the dispersion relation), not traced from Wen's sketches. Wen's other sketches (the bowl, the row of phase arrows) are only described in words. No figures from a textbook (Huang) appear on these pages.
- Paraphrase: the page follows the terse notes closely in structure, but the prose is its own. The only verbatim phrase is the short quotation "not quite right", which is marked as a quotation. No issue.
- No OpenStax or LibreTexts material.

## Notes
- **Forward links.**
  - leadsTo 7.5 is verified. Pp. 70-71 put ψ₀e^{inx/R} on a ring, with integer n that cannot decay without passing ψ = 0 (a barrier), so the flow persists: superfluid.
  - leadsTo 11: the course file lists "Supplement 2: Quantum Theory for Interacting Bosons" (fieldtheory_bos.pdf). I did not read that PDF, so the claim that it treats the GP field as the classical approximation of the full quantum field theory is plausible from the title but **unverified**.
  - leadsTo 8.286 Lecture 22 and the callout: both `higgs-field.mdx` and `magnetic-monopoles.mdx` have `lecture: 22`. `higgs-field.mdx` says the lecture was given by a substitute, and that "the field settles … at random" into one of infinitely many minima as the universe cools. `magnetic-monopoles.mdx` covers defects where regions chose differently, and GUT monopoles. The callout matches both.
- **Callout nuance (info).** The Higgs is a complex **doublet** (four real components, minima forming a 3-sphere), not a single complex field with a ring of minima, as the linked page says. Also, a gauge field absorbs the would-be gapless mode (Higgs mechanism), so the page's "symmetry breaking comes with a gapless mode" does not carry over to the Higgs case. Consider "a complex field (for the Higgs, a pair of them)" and a half-sentence that in a gauge theory the gapless mode is absorbed by the gauge bosons.
- **Symbols (data/symbols.json, meanings scoped to this page).** All checked meanings and units are right (ψ in m^(−3/2), Ψ in m^(−3N/2), v₀ in J m³, Ω/μ/U/E in J, ω in rad/s). Two gaps:
  1. **warning:** `V` on this page means the interaction V(x, x′) and the volume, but the page also uses **V(ψ) = −μ\|ψ\|² + ½v₀\|ψ\|⁴**, the potential of the condensate field (Wen's notation, p. 68). Add it to the meaning: "…; V(ψ), the potential of the uniform field, −μ\|ψ\|² + ½v₀\|ψ\|⁴ (J/m³)". The unit list needs J/m³ too.
  2. **warning:** `a` is scoped as "the scattering length", but the page also writes "$-\mu$ in the place of $a$", where a is the Ginzburg-Landau coefficient. Either reword that sentence without $a$ in maths (finding 2 changes it anyway), or widen the scoped meaning to name both uses.
  - Minor: the `k_1`/`k_2` entries are named "first/second wavevector component" while their meanings are "the wave vector of an excited level". The names come from shared entries. Check that the popup does not read oddly (info).
- **p. 66 sign (uncertain).** In the scan the exponent of the c₂ term may read "+iω₂t" rather than "−iω₂t". The page writes −iω₂t throughout, which is the consistent choice. No change needed. Mentioned only because the reading is uncertain.
- No em dashes on the page. Prerequisite slugs exist. The cite keys (`reading1`) and `at=` page numbers all match Wen's handwritten numbers.
- Verdict: **pass-with-notes**. No wrong physics, citation or licence problem. Fix findings 1 and 2 and the two symbol meanings before setting `status: reviewed`. The rest is optional.

## Resolution (2026-11-19, by the page author)

1. Rounding: the worked example now prints μ/k_B = 72 nK and μ/m = 2.62 × 10⁻⁵ (from the printed μ = 1.0 × 10⁻³⁰ J); all calcs entries now use the printed v₀ = 1.0 × 10⁻⁵⁰ J m³. The sound speed, crossover and 67,000 factor are unchanged.
2, 4. Ginzburg-Landau comparison reworded without "−μ in the place of a": the square term's coefficient, −μ here, changes sign; a now appears only as the scattering length.
3. Symbol V: this page's meaning now includes V(ψ) = −μ|ψ|² + ½v₀|ψ|⁴ (unit field dropped, since it has three uses).
5. The missing ħ in ħω_k = v|k| (p. 69) is now flagged in brackets.
6. Sketch description: the ball now "sits at one point in the trough".
7. The dispersion caption now places the bend at ħk ≈ √(4mμ), where ħ²k²/2m = 2μ, matching the worked example.
8. Swapped `shown` strings of plot-minimum and plot-depth fixed.
9. Callout already speaks of "infinitely many equivalent values", which fits the doublet; it makes no claim about a gapless mode for the Higgs. No change.
Supplement 11 leadsTo softened to what its title supports. 10 and the scattering-length remark: info, no change.
