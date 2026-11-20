---
page: content/year-4/8.07/magnetic-multipole-expansion-dipoles.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln10/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read, local copy: handwritten scan, every page p. 1 to p. 9 and the OCW end page read from the page images; no text layer)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read in part, local copy rendered at 60 dpi: slides -1- to -7-, -12-, -17-, -19- to -22-, for the leadsTo and the "current distribution" slip)
  - content/year-5/Ferreras/rotation-curves.mdx (read in part, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: The magnetic multipole expansion and magnetic dipoles

The page covers all of Lecture Notes 10 (Guth, handwritten, "Magnetic Dipoles", Lecture 25 of 37, 11/7/12), printed pp. 1–9. Every `<Formula>` was compared with the page images; the author's notes.md was not used. The worked example was recomputed by hand and by a direct Biot–Savart sum over the six edges (NumPy, 20 000 segments per edge); the plot numbers and quiz numbers by hand; `npm run calc:test -- -k magnetic-multipole` gives 28 passed; `npm run content:check` gives 0 errors (the only warning for this page is the missing review file).

Formula by formula (label, `at=`, verdict). All 29 match the notes, at the cited page:
- p. 1: one over the distance, in traceless tensors (with r = |r|, r = xᵢêᵢ, r̂ᵢ = xᵢ/r, (2ℓ−1)!! = (2ℓ)!/(2^ℓ ℓ!), (−1)!! = 1, {1}, {r̂ᵢ}, {r̂ᵢr̂ⱼ}). Match.
- p. 2: Aⱼ integral; the boxed expansion; the boxed moments; the integrated conservation law; the integration by parts with δ_{i₁j}, δ_{i₂j}. Match. (The second box writes 𝓜^ℓ without brackets, p. 4 writes 𝓜^(ℓ); the page uses 𝓜^(ℓ) throughout, which is fine.)
- p. 3: the sum of terms = −ℓ∫Sym(…); the boxed conclusion; ℓ = 1, 2, 3; both traces (δᵢⱼ, then δⱼₖ giving ∫[Jᵢr² + 2xᵢ(J·r)] = 0). Match. The notes label the three cases ℓ = 1, 2, 3; the page says "the first three cases", which is accurate.
- p. 4: 𝓜⁽⁰⁾ ∝ ∫Jⱼ = 0; 𝓜⁽¹⁾_{j;i} = ∫Jⱼxᵢ; antisymmetry; mᵢ = ½εᵢⱼₖ∫xⱼJₖ and m = ½∫r×J (only the vector form is boxed in the notes); mᵢ = ½εᵢⱼₖ𝓜⁽¹⁾_{k;j}; 𝓜⁽¹⁾_{j;i} = mₖεₖᵢⱼ. Match.
- p. 5: the proof; the boxed A = (μ₀/4π) m × r̂/r²; d³x J → I dℓ, m = ½I∮r × dℓ. Match.
- p. 6: Stokes' theorem in vector and index form; the chain [r×dℓ]_m → … → 2∫da_m (the page skips the two intermediate lines ε_ijk[∂_j(ε_kmn x_n)] and ε_ijk ε_kmn δ_jn, acceptably); ½∮r×dℓ = ∫da = a and the boxed m = Ia (only m = Ia is boxed). Match. Every index step re-derived: [r×dℓ]_m = ε_mnp x_n dℓ_p = ε_imn x_n dℓ_i (relabel p→i, cyclic); ∂_j(ε_kmn x_n) = ε_kmj = ε_mjk; ε_ijk ε_mjk = 2δ_im.
- p. 7: the boxed B_dip with (2μ₀/3) m δ³(r), "(PS 7, Prob 7)". Match.
- p. 8: electric dipole F = (p·∇)E or ∇(p·E), τ = p×E + r×F, U = −p·E; magnetic F = ∇(m·B), τ = m×B + r×F, U = −m·B; M; J_b = ∇×M, K_b = M×n̂, n̂ outward, K current per cross-sectional length. Match.
- p. 9: ∇·B = 0, ∇×B = μ₀J; J = J_f + ∇×M; H = B/μ₀ − M; ∇×H = J_free, ∇·B = 0; M = χ_m H. Match.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after "The proof" (p. 5) | The notes write 𝓜⁽¹⁾_{n,m} with a comma (confirmed), then go straight from ½[δ_im δ_jn − δ_in δ_jm]𝓜⁽¹⁾_{n,m} to "= 𝓜⁽¹⁾_{j;i}" on the next line. | "…and stop after the bracket; the step through the antisymmetry is ours." | The notes do not stop after the bracket: they give the final result and skip only the middle step ½(𝓜_{j;i} − 𝓜_{i;j}) and the appeal to antisymmetry. Say e.g. "and go from the bracket straight to 𝓜⁽¹⁾_{j;i}; the middle step, which uses the antisymmetry, is ours." |
| 2 | warning | Intro, "open magnetostatics" | p. 2 begins "Combine with Aⱼ = (μ₀/4π)∫Jⱼ/|r − r′|", i.e. the vector potential is recalled as known; p. 7 cites Problem Set 7, Problem 7 for the dipole field, so magnetostatics was evidently taught before Lecture 25 (in class lectures without posted notes). | "Lecture Notes 10 … open magnetostatics by doing the same for the vector potential" | Say these are the first of the posted notes on magnetostatics, or "turn to magnetostatics". (That earlier lectures covered it is an inference from the notes; uncertain in detail.) |
| 3 | info | Intro slip note | "for a localized charge distribution" is on p. 1 (the heading under the title "Magnetic Dipoles"), and p. 2 repeats it: "For |r| > radius of charge distribution". LN11 slide -1- writes "for a localized current distribution", which supports the page's reading. | Mentions p. 1 only, calls it "their title"; at p. 2 the page silently writes "current distribution". | Optional: "(pp. 1–2)" and "heading" instead of "title" (the notes' title is "Magnetic Dipoles"). |
| 4 | info | Hydrogen paragraph | p. 7 says the energy difference depends on the average proton B felt by the electron and comes 100% from the δ-function term. | Adds "weighted by the electron's probability density at the proton". | Correct physics (Fermi contact term, |ψ(0)|²) but not in the notes; could be marked as the page's own. |
| 5 | info | "Griffiths derives them … Section 6.2" | Notes state J_b, K_b without proof. | Cites Griffiths Section 6.2 in prose, with `references: {}`. | Correct (Griffiths 6.2.1, "Bound currents"); optionally add a `references` entry. |

## Arithmetic and answer checks
- Worked example, loop path O → (s,0,0) → (s,s,0) → (s,s,s) → (0,s,s) → (0,0,s) → O: each step changes one coordinate by s, so all six are genuine cube edges (the "skew hexagon" that misses the corners (0,s,0) and (s,0,s)). P×Q per edge: 0, s²(0,0,1), s²(1,−1,0), s²(0,−1,1), s²(1,0,0), 0; sum 2s²(1,−1,1). Correct, so m = Is²(1,−1,1).
- Projections: xy (from +z) O→(s,0)→(s,s)→(0,s)→O, counterclockwise, a_z = +s²; yz (from +x, axes y,z) (0,0)→(s,0)→(s,s)→(0,s), counterclockwise, a_x = +s²; zx (from +y, right-handed axes z,x) (0,0)→(0,s)→(s,s)→(s,0), clockwise, a_y = −s². Correct sign pattern.
- Is² = 3 × 0.0016 = 4.8×10⁻³ A m²; |m| = √3 × 4.8×10⁻³ = 8.314×10⁻³ → 8.31×10⁻³. Correct.
- B at 50 cm along z: 3(m·ẑ)ẑ − m = m₀(−1,1,2); 10⁻⁷ × 4.8×10⁻³/0.125 = 3.84×10⁻⁹ T; B = (−3.84, 3.84, 7.68) nT, |B| = 3.84√6 = 9.406 → 9.41 nT. Correct. Independent Biot–Savart sum of the actual loop at (s/2, s/2, s/2 + 0.5 m): (−3.82, 3.82, 7.73) nT, |B| = 9.43 nT, so the dipole value is within 0.3% and the "dipole term dominates" statement holds. "More than ten times the size": 50/4 = 12.5 (half-diagonal from the centre 3.5 cm), fine.
- Origin independence remark: Δm = ½b × ∫J d³x = 0. Correct, and it is exactly LN11 slide -2-.
- Plot: μ₀IR²/2 = 4π×10⁻⁷ × 2 × 0.0025/2 = 3.1416×10⁻⁹ T m³ = 3141.59 μT cm³ (z in cm); centre field μ₀I/2R = 25.13 μT → 25.1; μ₀m/2πz³ with m = IπR² equals μ₀IR²/2z³; dipole/exact = (1 + R²/z²)^{3/2}: 1.0625^{1.5} = 1.0952 (9.5%), 1.02778^{1.5} = 1.0420 (4.2%). All correct. Dashed curve clipped at ≤ 30 μT, i.e. shown from z ≈ 4.7 cm.
- Remark that ∫_sphere B d³x = (2/3)μ₀m for currents inside the sphere: correct (Jackson eq. 5.62). The calcs entry attributes the average-field result to "Griffiths Problem 5.59"; the problem number depends on the edition (not checked).
- Electric-dipole force identity ∇(p·E) = (p·∇)E + p×(∇×E) for fixed p, and ∇(m·B) = (m·∇)B where ∇×B = 0: correct.
- Quiz 1: answer 1 correct (∫∂ᵢJᵢ xⱼ = −∫Jⱼ). Quiz 2: (0.03)² = 9×10⁻⁴, × 2 = 1.8×10⁻³ (answer 3); distractors 9×10⁻⁴ (no current), 3.6×10⁻³ (no ½), 6×10⁻² (I × side) as explained. Correct. Quiz 3: answer 0 correct; ⟨r̂ᵢr̂ⱼ⟩ = δᵢⱼ/3 makes 3(m·r̂)r̂ − m average to zero. Quiz 4: answer 2 (J_f) correct.
- Flashcards: all four correct and consistent with the notes.
- Calcs file: every entry checked by hand (the three edge-sum formulas term by term); `calc:test` passes all 28.

## Coverage and order
- The page follows pp. 1–9 in the notes' order with nothing left out: recall of the expansion, A expansion, current-conservation identities with traces, ℓ = 0 and ℓ = 1, m and its tensor form with proof, A of a dipole, wires, Stokes and m = Ia, dipole field with the δ term and hydrogen, force/torque/energy, magnetization, bound currents, H, χ_m.
- Additions (marked as the page's own or clearly explanatory): the Biot–Savart aside, the Sym counting explanation, origin independence (flagged as taken up next time, correct: LN11 -2-), the worked example, the plot, the ∫B over a sphere argument, the two-forms-of-force identities, the slab picture of bound currents, the Griffiths pointer.

## Physics of the 21 cm claim
- The notes do say it (p. 7): "ΔE for transition comes 100% from δ-function term", with "Galaxy is mapped by 21 cm line" and "astronomically crucial". The page reports this faithfully and attributes it to Guth.
- It is correct physics: for the 1s state (ℓ = 0) the electron density is spherically symmetric, the tensor term of the proton's dipole field averages to zero (with the δ coefficient 2/3 defined so that the r⁻³ term integrates to zero over a small sphere), there is no orbital field, and the whole splitting is the Fermi contact term ∝ |ψ(0)|².

## Licensing
- No "All rights reserved" or "Courtesy of" notice anywhere in LN10 (all nine pages and the OCW end page inspected visually; the scan has no text layer to grep). Course licence CC BY-NC-SA.
- No text copied: the page's prose is rewritten; quoted phrases ("100%", "astronomically crucial", "charge distribution") are short. The notes' sketches (wire cross-section, electron cloud, Stokes surface) are not reproduced; the page's only figure is its own plot generated from formulas.
- No OpenStax or LibreTexts material.

## Forward links
- leadsTo 8.07 Lecture 11: LN11 does cover origin independence (-2-), the δ term's role (Maxwell checks of B_dip with the δ term, -19- to -22-), the current of an ideal dipole J = −m×∇δ³ (-7- to -12-, -22-) and force/energy/torque (-17-, -19-). Fair. ("where its delta-function term comes from" is a fair summary of the checks that ∇·B = 0 and ∇×B = μ₀J_dip need it.)
- Cosmology callout and leadsTo Ferreras 2.2: the physics is right (21 cm penetrates dust; H I extends beyond the optical disc; flat H I rotation curves are key dark-matter evidence) and the step to dark matter is explicitly marked as the page's own. info: the target page (rotation-curves.mdx) never mentions the 21 cm line or neutral hydrogen by name (only "last gas clouds" and "radio emission"), so the link is fair physics but the reader will not find the 21 cm line there. "Every one of those measurements rests on the energy of the delta-function term" is rhetorical (the rest frequency used is the laboratory value); acceptable.

## Prerequisites and links
- All four prerequisites exist (multipole-expansion-traceless-tensors, 8.02 biot-savart-law, 8.02 magnetic-dipoles, 18.02 stokes-theorem) and fit. In-text links (rotations-index-notation, hyperfine-21cm-adding-angular-momenta, rotation-curves) resolve. info: rotations-index-notation (ε identities used on pp. 4–6) could be a prerequisite too.

## Symbols
- The meanings scoped to this page were read in full (about 80 meanings, new or extended). Units checked: A in T m, H and K in A/m, J in A/m², 𝓜⁽¹⁾ in A m² (∫Jx d³x), τ N m, U J, p C m: correct.
- warning: the page writes $\vec\mu$ once ("with $\vec\mu$ written as $\vec m$", section "Force, torque and energy"), but the only `\mu` meaning for this page is "Written μ₀: the permeability of free space". The popup and read-aloud will mislabel that μ. Add a meaning (e.g. "μ with an arrow: 8.02's name for the magnetic dipole moment, written m here") or rephrase the sentence without the symbol. `content:check` does not catch this because `\mu` has a meaning for the page.
- info: `z` is given unit m, but in the plot z is in cm (the axis label says so). Harmless; could drop the unit.

## Notes
- Verdict pass-with-notes: no wrong formula, citation, number or answer found. Fix #1 (misdescribed slip) and the μ symbol meaning; #2 is a wording point.

## Resolution (2026-11-18, by the page author)

- #1 (warning): the bracket after "The proof" now says the notes write the comma and go from the bracket straight to 𝓜⁽¹⁾_{j;i}; only the middle step, which uses the antisymmetry, is ours.
- #2 (warning): "open magnetostatics" replaced by "are the first of the posted notes on magnetostatics".
- #3: the slip note now names the heading on p. 1 and the "radius of charge distribution" on p. 2.
- #4: "weighted by the electron's probability density at the proton" is marked as our addition.
- #5: a `references` entry `griffiths` (3rd edition, Section 6.2.1, Bound currents) added; the prose names Section 6.2.1.
- Symbols (warning): the sentence with μ now says "written with the Greek letter mu" in words, so the page no longer uses the symbol μ for the moment; the unit was dropped from the page's z meaning (the plot is in cm).
- Prerequisites: rotations-index-notation added.
- Calcs: the "Griffiths Problem 5.59" attribution in the sphere-integral entry replaced by "a standard result, e.g. Jackson, Classical Electrodynamics, eq. (5.62)".
- Status set to reviewed. content:check, calc:test and build re-run.
