---
page: content/year-4/8.07/ideal-magnetic-dipole-current.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln11/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read, local copy: handwritten scan with no text layer; slides -1- to -14- read one by one from the page images at full resolution, slides -15- to -23- and the OCW end page read at reduced size to check the page split and the "matter" note)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read at reduced size, local copy: pp. 1-9, to check the back references to "the last notes")
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/2a1404cb512412dbb4cf6772f1b095b7_MIT8_07F12_ln14.pdf (read at reduced size, local copy: slides -1- to -16-, for the leadsTo)
  - MIT8_07F12_ln16.pdf (text layer searched only, local copy: "Magnetic Dipole Radiation" heading found, for the leadsTo)
verdict: pass-with-notes
---

# Review: The ideal magnetic dipole and its current density

The page covers slides -1- to -14- of Lecture Notes 11 (Guth, handwritten, "Magnetic Dipoles and Magnetic Fields in Matter", Lecture 26, 11/9/12); slides -15- to -23- (force, energy, torque, Maxwell's equations for B_dip and E_dip) belong to `magnetic-dipole-force-torque-maxwell`, which matches the split. The author's notes.md was not used. Every `<Formula>` was compared with the slide images; every derivation step was redone by hand; `npm run calc:test -- -k ideal-magnetic-dipole-current` gives 32 passed; `npm run content:check` gives 0 errors (the only warning for this page is the missing review file).

Formula by formula (label, `at=`, verdict):
- "The leading term of the vector potential", slide 1 (boxed): A = (μ₀/4π) m × r̂/r² + O(1/r³). Match, boxed.
- "The magnetic dipole moment", slide 1 (boxed): m = ½∫d³x r × J, and m = ½I∫r × dℓ, with J d³x = I dℓ. Match; all three are boxed. The slide writes a plain ∫ for the wire integral, the page ∮ (acceptable, it is a closed loop).
- "Shifting the origin", slide 2: r′ = r + b, m′ = m + ½b × ∫d³x J, "= 0 (by current conservation)", "Similarly, ∫dℓ = 0". Match.
- "One component of the moment", slide 3: m_i = ½I∫_P ê_i·(r × dℓ) = ½I∫_P dℓ·(ê_i × r) = ½I∫_S da·∇×(ê_i × r). Match (the slide names the path P and surface S in a sketch; the page says so in words). Triple-product step checked: ê·(r × dℓ) = dℓ·(ê × r).
- "The curl of a basis vector crossed with r", slide 3: ê_i(∇·r) − (ê_i·∇)r, ∇·r = 3, (ê_i·∇)r = ∂_i(x_j ê_j) = δ_ij ê_j = ê_i, so 2ê_i. Match; checked against the general identity ∇×(A×B) = A(∇·B) − B(∇·A) + (B·∇)A − (A·∇)B with A constant.
- "The moment is the current times the vector area", slide 4 (boxed): m = Ia, a ≡ ∫_S da; "If loop is in a plane, |a| = area". Match, boxed. (The right-hand-rule direction is not on slide 4; it is on LN10 p. 6 as "direction ⊥ to plane" and standard; fine.)
- "The field of a magnetic dipole", slide 5 (boxed), "(PS 7, Prob 7)": match, boxed. The hydrogen paragraph follows slides 5-6 (orbital ground state, ℓ = 0, spherically symmetric; aligned/antialigned; average B_proton; 21 cm line; "ΔE … comes 100% from δ-function term"). "The first term averages to zero over it" is the page's gloss (correct, not written on the slides).
- "Shrinking an electric dipole", slide 8: match, including the order δ(z + a/2) − δ(z − a/2) in the bracket and the result −p δ(x)δ(y) dδ(z)/dz. Sign checked: [δ(z + a/2) − δ(z − a/2)]/a → δ′(z), and ρ = −qa δδ[…] reproduces +q at z = +a/2.
- "The charge density of an ideal electric dipole", slide 8 (boxed): ρ_dip = −p·∇_r δ(r − r_d). Match, boxed. The slide writes δ without the superscript 3 here (slide -23- writes δ³); the page's δ³ is the intended meaning. Not worth a note on the page.
- "The square loop", slide 9: m = Ia = Ia² ẑ; limit a → 0 with m = Ia² fixed. Match. The slide's sketch has the current along +x on the lower edge and up the right edge (counterclockwise from +z), as the page says.
- "The x component of the loop's current", slide 10: J_x = I δ(z)[δ(y + a/2) − δ(y − a/2)] for |x| ≤ a/2, else 0. Match; sign checked against the current directions (lower edge y = −a/2 carries +x).
- "The limit of small a", slides 10-11: J_x = m δ(z) δ′(y) g(x) with g = 1/a on |x| ≤ a/2 → δ(x); = m ∂δ³/∂y. Match (slide 10 has the g(x) form, slide 11 the δ³ form).
- "The current of the shrunken loop", slide 11: J_y = −m ∂δ³/∂x, J = −m × ∇δ³(r). Match. Re-derived: right edge x = a/2 carries +y, left edge −y, so J_y = −m δ′(x)δ(y)δ(z); and (ẑ × ∇)_x = −∂_y, (ẑ × ∇)_y = ∂_x, so −m(ẑ × ∇)δ³ = (m∂_yδ³, −m∂_xδ³, 0). Sign correct.
- "The current density of an ideal magnetic dipole", slide 11 (boxed): J = −m × ∇_r δ³(r − r_d). Match, boxed.
- "Shrinking any distribution", slide 12: m = (1/2λ⁴)∫d³x r × J(r/λ). Match (not boxed on the slide; the page does not say boxed). λ = 1 original, λ = ½ half size: on the slide.
- "The limit as an integral", slide 13: (1/λ⁴)∫d³x′ J_i(r′)δ³(r′ − r/λ), with δ³(r′ − r/λ) = λ³δ³(λr′ − r) = λ³δ³(r − λr′), giving (1/λ)∫d³x′ J_i(r′)δ³(r − λr′). Match. The page skips the slide's first line J_i(r) = lim λ⁻⁴J_i(r/λ), which it states in words just before; fine.
- "Expanding in powers of the scale factor", slide 13: [δ³(r) − λ ∂_jδ³(r) x′_j + …]; "Use ∫d³x′ J_i(r′) = 0 by current conservation". Match.
- "The ideal dipole from any distribution", slide 14: −∂_jδ³∫d³x′ J_i x′_j = −∂_jδ³ 𝓜⁽¹⁾_{i;j}, 𝓜⁽¹⁾_{i;j} = m_k ε_kji, = −ε_ikj m_k ∂_jδ³ = −[m × ∇δ³]_i. Match. Index steps checked: with ∫x_aJ_b antisymmetric, m_k = ½ε_kab∫x_aJ_b gives ∫x_aJ_b = ε_abk m_k, so ∫J_i x_j = ε_jik m_k = ε_kji m_k (agrees with LN10 p. 4, 𝓜⁽¹⁾_{j;i} = m_k ε_kij); ε_kji = ε_ikj (cyclic); [m × ∇δ³]_i = ε_ikj m_k ∂_jδ³.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` (8.07 Lecture 14) | LN14 (Lecture 35, "Electromagnetic Waves") covers the wave equation, group and phase velocity, plane waves, energy and momentum, waves in matter and boundary conditions; it has no sources and no oscillating dipoles. Magnetic dipole radiation is in LN16 ("Radiation", heading "Magnetic Dipole Radiation"). The notes directly after LN11 are LN12-13, a guest lecture by Min Chen on reversed Cherenkov radiation in metamaterials. | "the next notes are on electromagnetic waves, whose radiating sources include the oscillating magnetic dipole." | Say "Guth's next notes" (or "after a guest lecture on metamaterials, the course turns to electromagnetic waves") and drop the radiation clause, or add a second `leadsTo` to 8.07 Lecture 16 for magnetic dipole radiation, where it is actually treated. |
| 2 | warning | `data/symbols.json`, letter `a` (meaning scoped to this page) | On this page a is a length (dipole separation, side of the square loop), the vector area (m²) with an arrow, and da a surface element (m²). | One meaning covering all three with `"unit": "m"`. | The unit is wrong for the vector area and da. Drop the unit (AGENTS.md: units only where the quantity has one clear unit on the page), or split the vector-area use into its own meaning/form. |
| 3 | info | Hydrogen paragraph | Slides 5-6 say ΔE depends on the average B_proton experienced by the electron and comes 100% from the δ-function term. | Adds "the first term averages to zero over it". | Correct physics, a short gloss; could be marked as ours, as the previous page does. Optional. |
| 4 | info | Slide 1 formula | Slide 1 writes m = ½I∫ r × dℓ with a plain integral sign (slide 3 too, with subscript P). | ∮ throughout. | None needed. |
| 5 | info | `data/symbols.json`, `R` | - | "The radius of the coil." (shared with the 8.02 page) | On this page it is a single loop; "the radius of the coil or loop" would fit both pages. Optional. |
| 6 | info | Summary, last bullet | - | "a 1 cm, 2 A loop" | The example says radius 1 cm; "a 1 cm radius, 2 A loop" avoids reading it as a diameter. Optional. |

## Arithmetic and answer checks
- Worked example (radius R = 1 cm, as the problem states): m = 2 × π × 10⁻⁴ = 6.283×10⁻⁴ A m² → 6.28×10⁻⁴. Correct.
- Shrunk by λ = 10⁻³: radius 10 μm; area × 10⁻⁶; I = 2/10⁻⁶ = 2×10⁶ A. Correct. Original J = 2 A/10⁻⁶ m² = 2×10⁶ A/m²; shrunk cross-section 10⁻¹² m², J = 2×10⁶/10⁻¹² = 2×10¹⁸ A/m² = λ⁻⁴ × 2×10⁶. Correct, and consistent with the slide-12 scaling λ⁻⁴J(r/λ) (wire cross-section shrinks with everything else).
- Axial dipole field μ₀m/(2πz³) = 2×10⁻⁷ × 6.2832×10⁻⁴/0.008 = 1.5708×10⁻⁸ T = 15.7 nT. Correct. Exact on-axis loop field μ₀IR²/[2(R² + z²)^{3/2}] = dipole × (1 + R²/z²)^{-3/2}: (1.0025)^{-1.5} = 0.99626, so 0.37% smaller, 15.649 → 15.65 nT. Correct. After shrinking IR² = 2×10⁶ × 10⁻¹⁰ = 2×10⁻⁴ = unchanged; R²/z² = (10⁻⁵/0.2)² = 2.5×10⁻⁹; relative difference 1.5 × 2.5×10⁻⁹ = 3.75×10⁻⁹, quoted "4×10⁻⁹" (rounded, acceptable).
- Plot: Gaussian width w = 0.1 mm (2w² = 0.02, w√(2π) = 0.250663); "two wires" = [δ_w(y + a/2) − δ_w(y − a/2)]/a, "limit" = δ_w′(y) = −(y/w²)δ_w(y) = −100 y e^{−y²/0.02}/0.250663. Both correct. Extremes of δ_w′ at y = ±w: ∓100 × 0.1 × e^{−1/2}/0.250663 = ∓24.20, i.e. +24.2 at y = −0.1 mm and −24.2 at y = +0.1 mm, as the caption's "±24.2 … at y = ∓0.1 mm" says. Units 1/mm² correct (δ in 1/mm, divided by a in mm). Caption formula Jₓ = m δ(z) g(x) f(y) follows from I = m/a² (one 1/a into g, one into f). By the mean value theorem the two-wire curve never exceeds max|δ_w′| = 24.2, so the [−30, 30] range holds for every slider value. Sign of f matches the current directions (f > 0 near y = −a/2, the lower edge carrying +x).
- Page's own checks: ∇·(−m × ∇δ³) = m·(∇ × ∇δ³) = 0, correct. ½∫r × (−m × ∇δ³) = −½[m∫r·∇δ³ − ∫∇δ³(r·m)] = −½[−3m + m] = m, correct. ∫rρ_dip = p and ∫ρ_dip = 0 by parts, correct.
- Quiz 1 (answer 2, the shift adds ½b × ∫J = 0): correct; distractors are wrong for the stated reasons.
- Quiz 2 (answer 1, 100): I ∝ λ⁻² = 100; J ∝ λ⁻⁴ = 10⁴. Correct; explanation correct.
- Quiz 3 (answer 3, −m × ∇δ³): correct. Distractor reasons checked: mδ³ has ∫J = m ≠ 0; ½(r × m)δ³ = 0 since rδ³(r) = 0; −∇(m·∇δ³) is a gradient, ½∫r × ∇φ = −½∫φ ∇ × r = 0 (no moment), and its divergence ∇²(m·∇δ³) ≠ 0. All correct.
- Quiz 4 (answer 0, −p δδ dδ/dz): matches slide 8; "−dδ/dz positive just above the origin" correct (δ′ < 0 for z > 0).
- Flashcards 1-4: correct and consistent with the slides.
- calcs file: all 32 entries pass and match the page's numbers. Some entries are near-trivial (`scaling-power` = 3 + 1, `levi-civita-cyclic` = 1 × 1, `curl-identity-coefficient` = 3 − 1) and `closed-loop-dl` checks only the x component of one circle; acceptable as records but they verify little. The substantive ones (difference quotient, δ rescaling, moment invariance under scaling, dipole-current moment, axial field ratio) are real checks.

## Coverage and order
- The page follows slides 1-14 in order: recap (1), origin independence (2), m = Ia by the vector identity (3-4), B_dip and its δ term with hydrogen (5-6), ideal electric dipole and DBADF (7-8), square loop (9-11), arbitrary distribution (12-14). Nothing on slides 1-14 is left out.
- The B_dip recap is one formula and one paragraph and links to `magnetic-multipole-expansion-dipoles` for the full treatment; no duplication beyond what slides 5-6 themselves repeat from LN10 p. 7.
- Additions, all marked as the page's own ("Two remarks of ours", "A quick check of our own"): divergence-free check, moment of the δ-current, ∫rρ_dip = p, the angular-momentum contrast, the worked example and the plot.
- "Despite the title, the slides say nothing more about magnetic fields in matter: that material is at the end of the last notes": verified. LN11 slides 1-23 contain no magnetization, bound currents or H; LN10 pp. 8-9 cover magnetization M, bound currents J_b = ∇ × M, K_b = M × n̂, H = B/μ₀ − M and M = χ_m H.
- "[The slides use the same letter J_i for the ideal dipole's current on the left and the original current inside the integral.]": verified on slide 13 (first line J_i(r) = lim λ⁻⁴ J_i(r/λ), and J_i(r′) under the integral). The note is fair and brief.
- "Lecture 26 (November 9, 2012)", motto "Don't be afraid of delta functions (but be careful)" (slide 8, "DBADF"), "PS 7, Prob 7" (slide 5): all verified.
- No `Callout kind="cosmology"`. The 21 cm line has a genuine cosmological use, but the sibling page carries the 8.286 `leadsTo`; acceptable.
- Prerequisites `magnetic-multipole-expansion-dipoles`, `magnetic-dipoles` (8.02), `electric-dipoles` (8.02), `impulse-inputs-delta-function` (18.03), `stokes-theorem` (18.02) all exist and are relevant. Inline links use the site's `/courses/<course-with-dashes>/<slug>` form.

## Licensing
- LN11 carries no "All rights reserved" or "Courtesy of" notice (only the standard OCW end page); the course is CC BY-NC-SA.
- No MIT figure is reproduced: the square loop and the dipole sketches are described in words; the plot is generated from formulas.
- No text copied beyond short standard phrases and the motto, which is quoted and attributed to slide 8. The worked example (circular loop, 2 A, λ = 10⁻³, 20 cm) is original; the slides contain no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- Symbols scoped to this page (data/symbols.json) were read in full: δ (one- and three-dimensional Dirac delta, Kronecker δᵢⱼ), λ, a, b, g, m, M / M_i;j (unit A m², correct: A/m² × m × m³), u (m, correct since λ is dimensionless), O, P, S, q, R, J, J_i, J_x, J_y, r_d, ε_ikj ("= −ε_ijk", correct), ε_kji ("= ε_ikj", correct), ρ_dip (C/m³). All fit the page apart from finding 2 (and the optional wording in 5).
- The OCW resource page (`source.url`) was not opened online; the content was checked against the local copy of the PDF it links to. LN16 was searched by text layer only, not read.
- Verdict pass-with-notes: no wrong physics, numbers or citations found; findings 1 and 2 should be fixed before `status: reviewed`.

## Resolution (2026-11-18, by the page author)

1. `leadsTo` 8.07 Lecture 14: reworded to say only that the notes turn to electrodynamics, starting with electromagnetic waves (no claim about radiating dipoles). Added a second `leadsTo` to 8.07 Lecture 16 (Radiation) for magnetic dipole radiation.
2. `a` (meaning scoped to this page): unit dropped, since the letter is a length here and an area with the arrow.
3. Hydrogen paragraph: "the first term averages to zero over it" is now marked "(our gloss: the slides state only the conclusion)".
4. No change (∮ is kept for closed loops).
5. `R`: this page no longer shares "The radius of the coil."; it has its own meaning, "The radius of the circular loop in the worked example." (unit m).
6. Summary: "a loop of 1 cm radius carrying 2 A".

`status: reviewed`. content:check, calc:test and build rerun.
