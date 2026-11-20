---
page: content/year-4/8.07/electromagnetic-plane-waves-reflection.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln14/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/2a1404cb512412dbb4cf6772f1b095b7_MIT8_07F12_ln14.pdf (read, local copy: typeset slides, Lecture 35, December 7, 2012; slides -8- to -19- and the OCW end page read from the page images and the OCR text; slides 1 to 7 belong to the companion page wave-equation-group-velocity and were only skimmed)
  - MIT 8.07 Lecture Notes 15 (local copy, OCR text only, to check the leadsTo claim about Lecture 15)
  - content/year-4/8.286/matter-radiation-equality.mdx, content/year-4/8.286/black-body-radiation.mdx (read in part, for the claims made about them in the cosmology callout)
verdict: pass-with-notes
---

# Review: Electromagnetic plane waves: energy, matter and reflection

The page covers slides 8 to 19 of Lecture Notes 14 (Guth, typeset slides, "Electromagnetic Waves", Lecture 35, December 7, 2012). Every `<Formula>` was compared with the slide images; the author's notes.md was not used. All derivation steps were redone by hand, and every number was recomputed independently (Python, CODATA c and ε₀). `npm run calc:test -- -k electromagnetic-plane-waves-reflection`: 32 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

Formula by formula (label, `at=`, verdict). All 18 sit at the cited slide and equation number:
- slide 8, eq. (14), Maxwell's equations in empty space, with 1/c² ≡ μ₀ε₀ in the text: match.
- slide 8, eq. (15), curl of Faraday's law (slide has an underbrace "= 0" under ∇·E; the page says it in words): match. Eq. (15) is repeated at the top of slide 9; citing slide 8 is right.
- slide 9, eqs. (16), (17), both boxed: match.
- slide 10, eq. (18) boxed, (19), (20) boxed ("(transverse wave)"): match. The slide writes E₀ without the tilde in eq. (19); the page writes Ẽ₀, a silent correction of a trivial typo (see info 9).
- slide 11, eqs. (21), (22), (23) boxed: match.
- slide 12, eq. (24): match. Eq. (25): u, S = uc ẑ, 𝒫_EM = S/c² = (u/c) ẑ match; the intensity is written ½cε₀E₀² where the slide has ½ε₀E₀², and the page says so in brackets (slip confirmed, below). The page writes 𝒫 with an arrow; the slide has no arrow on 𝒫_EM but it is a vector (= S/c²); harmless.
- slide 13, eqs. (26), (27), both boxed: match.
- slide 14, eq. (28): u in matter, B = (n/c) k̂ × E, S = (1/μ) E × B = (uc/n) ẑ: match.
- slide 16, eq. (29): the four boundary conditions match (slide writes ⊥ and ∥ as superscripts, the page as subscripts; same meaning).
- slide 17, eqs. (30), (31), (32): match.
- slide 18, eqs. (33), (34), (35): match, including the minus sign on B_R and the 1/μ₁(…) = 1/μ₂ · 1/v₂ form.
- slide 19, eq. (36): the page drops the absolute-value bars and adds the tilde on Ẽ₀,T; noted in brackets (below).
- "Reflected and transmitted fractions of the power" (cited "slide 19, from eq. (36) and slide 14, eq. (28)") is not on the slides; the page marks it "(our remark)". Derivation checked: I = ½ε v E₀² = ½ n ε₀ c E₀² for μ = μ₀ (ε = n²ε₀, v = c/n), so T = (n₂/n₁)(2n₁/(n₁+n₂))² = 4n₁n₂/(n₁+n₂)², and R + T = 1. Correct.

The lecturer slips the page attributes, each checked against the slide image:
- Slide 11 "remembering that |k⃗| = ωc": real; it should be ω/c. Page notes it in brackets. Correct.
- Slide 12, eq. (25) "I (intensity) = ⟨|S|⟩ = ½ε₀E₀²": real; ⟨|S|⟩ = c⟨u⟩ = ½cε₀E₀², the slide's expression is ⟨u⟩. Page notes it. Correct.
- Slide 19, eq. (36): real on all three counts: absolute-value bars around (n₁ − n₂)/(n₁ + n₂), no tilde on E₀,T (written plain "E₀,T"), and μ₁ = μ₂ is not stated (it is needed to go from eq. (35) to n's). The page's bracket names the bars and μ₁ = μ₂; it does not mention the missing tilde (info 9). Dropping the bars is right: with them the formula is wrong in sign for n₂ > n₁, since (34) with T = 2n₁/(n₁+n₂) forces R = T − 1 = (n₁ − n₂)/(n₁ + n₂).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout, last sentence | In 8.286 Lecture 15 Guth runs the argument the other way: radiation's ρ ∝ 1/a⁴ (from redshift and photon number) plus dU = −p dV *requires* p = ⅓ρc² (transcript pp. 25–26, as the site's own matter-radiation-equality page shows: "To get the 4 of (3′), the pressure must be one third of the energy density"). | "Guth uses exactly this pressure in 8.286, where it makes the energy density of radiation fall as 1/a⁴ and enters the second Friedmann equation." | The physics is consistent both ways, but the attribution reverses Guth's logic. Suggest: "In 8.286 Guth reaches the same p = u/3 by another route: radiation's energy density falls as 1/a⁴, and energy conservation with dU = −p dV then demands p = ρc²/3; this pressure enters the second Friedmann equation." |
| 2 | warning | Worked example, step "The fields" | (not in MIT; page's own) | B₀ = 2.90 µT is "less than a tenth of the Earth's field". | The Earth's surface field is about 25–65 µT (the calcs fact says so too), so a tenth is 2.5–6.5 µT; 2.9 µT is not less than a tenth where the field is below 29 µT (South Atlantic region). Say "about a twentieth of a typical 50 µT Earth field" or "a few percent of the Earth's field". |
| 3 | info | Boundary conditions section | Slide 15 (the figure) comes before slide 16 (eq. (29)). | The page gives eq. (29) (slide 16) first, then the setup of slide 15 in words. | Harmless reordering inside one topic; optional to swap the two paragraphs. |
| 4 | info | "Plane waves are transverse" | Slide 10: "n̂ is a unit vector" only. | Calls n̂ the polarization, adds "Sound in air ... is longitudinal". | Standard additions, correct. No change needed. |
| 5 | info | Matter section | Slide 13: "Maxwell's equations are unchanged except for the replacement μ₀ε₀ → με". | Adds "no free charges or currents" and "in terms of D = εE and H = B/μ". | Correct and clarifying (the slide's statement holds only without free sources). No change needed. |
| 6 | info | Intro paragraph | (not on the slides) | "Maxwell's equations themselves come from the class lectures without notes." | Uncertain: I could not verify from the notes which lectures had no notes. Harmless; could be softened to "were derived earlier in the course". |

## Arithmetic and answer checks
Recomputed (c = 2.99792458×10⁸ m/s, ε₀ = 8.8541878128×10⁻¹² F/m):
- E₀ = √(2·1000/(cε₀)) = 868.02 V/m → 868 V/m. Correct.
- B₀ = E₀/c = 2.8954×10⁻⁶ T → 2.90 µT. Correct.
- ⟨u⟩ = I/c = 3.3356×10⁻⁶ J/m³ → 3.34 µJ/m³; radiation pressure on an absorber = I/c, same number in Pa. Correct.
- Glass, n₁ = 1.00, n₂ = 1.50: R-amplitude (1 − 1.5)/2.5 = −0.2; T-amplitude 2/2.5 = 0.8; check 1 + (−0.2) = 0.8. Amplitudes 0.2 × 868 = 173.6 → 174 V/m, 0.8 × 868 = 694.4 → 694 V/m. Correct.
- Powers: R = 0.04 (40 W/m²); T = (n₂/n₁)·0.8² = 1.5 × 0.64 = 0.96 (960 W/m²). The n factor is included, as it must be; R + T = 1. Correct. The step's remark that the transmitted field is weaker but the factor n restores the power is right.
- Quiz 1 (answer index 1, (E₀/c) along +ŷ): B = (1/c) ẑ × E₀x̂ = (E₀/c) ŷ. Correct; distractors are clearly wrong (−ŷ, cE₀, +ẑ).
- Quiz 2 (answer index 3, 868 V/m): correct. Distractors: √(1000/(cε₀)) = 613.8 → 614 (missing ½); √(2000/ε₀) = 1.503×10⁷ → 1.50×10⁷ (missing c, i.e. the slide's slipped formula); 2.90×10⁻⁶ (B₀ in tesla). All as the explanation says.
- Quiz 3 (answer index 0, +0.14): (1.33 − 1.00)/2.33 = 0.1416 → +0.14, positive (slow → fast medium). Power fraction 0.1416² = 0.0201 → 0.02; transmitted amplitude 2.66/2.33 = 1.142 → 1.14. Explanation correct.
- Quiz 4 (answer index 2, half): B²/μ₀ = E²/(μ₀c²) = ε₀E². Correct.
- Flashcards 1–4: all correct (eq. (19)/(20); eqs. (23), (28); eqs. (24)–(25) with the corrected intensity; eq. (36) without bars, for μ₁ = μ₂, inverted for n₂ > n₁).
- Prose checks: ∇·B ∝ k·(k × n̂) = 0; ∇ × B = i k × (k × n̂) Ẽ₀e^{…}/ω = −i(k²/ω)E (using n̂·k = 0), equal to (1/c²)∂E/∂t = −i(ω/c²)E since k = ω/c. Correct. B_R = (1/v₁)(−ẑ) × Ẽ₀,R x̂ = −(1/v₁)Ẽ₀,R ŷ, matching eq. (33). β = μ₁v₁/μ₂v₂: (35) × μ₁v₁ gives Ẽ₀,I − Ẽ₀,R = βẼ₀,T; adding (34): Ẽ₀,T = 2Ẽ₀,I/(1+β), Ẽ₀,R = (1−β)Ẽ₀,I/(1+β); with μ₁ = μ₂, β = v₁/v₂ = n₂/n₁ gives eq. (36). Correct, and the general-μ form is given before μ₁ = μ₂ is set, as requested.
- Callout: momentum density u/c at angle θ gives normal momentum flux (u/c)cosθ · c cosθ = u cos²θ; isotropic ⟨cos²θ⟩ = ½∫₀^π cos²θ sinθ dθ = ⅓, so p = u/3. Correct.
- Calcs file `calcs/8.07/electromagnetic-plane-waves-reflection.yaml`: 32 entries, all pass; each page number has an entry. Two `kind: fact` entries (Earth's field, sunlight ≈ 1000 W/m²) give `source: {cite: reading1, at: 'slide 11'/'slide 12'}`, but the MIT slides say neither; their source should be the page's own general knowledge (or a reference), not reading1 (warning, calcs only). The Earth-field fact's own range (25–65 µT) contradicts "less than a tenth" at its low end (finding 2).

## Coverage and order
- Slides 8–19 (eqs. (14)–(36)) are all covered, in MIT's order except the swap of slide 15 (figure) and slide 16 (eq. (29)) noted in finding 3. Nothing from slides 8–19 is left out.
- Added beyond MIT, all marked as the page's own: the check that the other two Maxwell equations hold, the power fractions R and T with R + T = 1, the worked example, the string-reflection analogy, the lens-coating remark, the radiation-pressure step, and the cosmology callout.
- Slides 1–7 (travelling waves, sinusoids, complex notation, group velocity) are the companion page's, as the intro says.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the text of Lecture Notes 14: no matches. The only third-party-looking material is the slide-15 figure, credited "Image by MIT OpenCourseWare" (not "All rights reserved"). The page does not reuse or redraw it; it describes the geometry in words (interface z = 0, incident E along x̂, B along ŷ, reflected B along −ŷ), which matches the figure (B_R drawn along −y). Fine.
- No verbatim copying beyond standard phrases ("index of refraction", "two equations in two unknowns", "each component of E and B satisfies the wave equation" paraphrased). The worked example (1000 W/m², glass n = 1.50) is original; the slides contain no numbers.
- No OpenStax/LibreTexts material.

## Notes
1. leadsTo 8.07 Lecture 15: Lecture Notes 15 is "Potentials and Fields" (potentials, gauge transformations, Lorentz gauge, retarded-time solutions, Liénard–Wiechert). The "why" is accurate.
2. leadsTo 8.286 Lecture 15 ("Black-Body Radiation and the Early History of the Universe, Part I"): the pressure p = ⅓ρc² and its entry into the ä equation are on the matter-radiation-equality page (lecture 15). Accurate and fair.
3. The callout links to black-body-radiation (8.286 Lecture 16), which gives p = u/3 from the black-body analysis "agreeing with the piston argument of Lecture 15"; the link is apt. The attribution sentence needs the fix in finding 1.
4. Prerequisites: wave-equation-group-velocity (8.07), maxwell-equations-and-em-waves (8.02), electromagnetic-waves and em-waves-in-matter-brewster (8.03) all exist and are relevant.
5. Symbols (data/symbols.json, meanings scoped to this page, 66 checked): all fit the page. k̂ has a page-scoped meaning "the unit vector along the wave vector k: the direction in which the wave travels", correct here and distinct from the course-wide "unit vector in the z direction" (I did not verify that the page-scoped meaning replaces, rather than is listed beside, the general one in the popup; content:check reports no conflict). `\varepsilon` (with `\epsilon`) carries "Written ε₀, ε₁, ε₂ or ε: the electric constant or a permittivity", shared with em-waves-in-matter-brewster; correct. n̂ "polarization", 𝒫 "momentum density S/c², kg/(m² s)" (unit correct), β "μ₁v₁/μ₂v₂, equal to n₂/n₁ when μ₁ = μ₂", R and T as power fractions, δ phase, a "scale factor (8.286)" for the callout: all correct.
6. Symbol units are inconsistent between sibling entries shared with another page: E_T, B_T, ε₁ and μ₂ have no unit while E_I, B_I, ε₂ and μ₁ do (V/m, T, F/m, T·m/A). Info; add the units for consistency.
7. The H meaning applied to this page is the general "H = B/μ₀ − M"; the page uses H = B/μ for a linear material, which is consistent (info, no change needed).
8. The page writes 𝒫 with an arrow where the slide has none; correct as a vector, no change needed.
9. Slide 10, eq. (19) also lacks the tilde on E₀, and slide 19 lacks it on E₀,T; the page silently writes Ẽ₀ in both. Trivial typesetting slips; optionally add "and the tilde on E₀,T" to the eq. (36) bracket since the bracket already lists that slide's slips.
10. Verdict pass-with-notes: no wrong physics, number, citation or licence problem; fix findings 1 and 2 and the calcs fact sources before setting `status: reviewed`.

## Resolution (2026-11-18, by the page author)

- Finding 1: the callout's last sentence now follows Guth's logic in 8.286 Lecture 15: radiation's energy density falls as 1/a⁴, and energy conservation with dU = −p dV then demands p = u/3, the pressure that enters the second Friedmann equation.
- Finding 2: B₀ = 2.90 μT is now "about a twentieth of a typical 50 μT Earth field". The two `kind: fact` calcs entries (Earth's field, sunlight at 1000 W/m²) no longer cite reading1; they name their sources in words (`ref`: the World Magnetic Model, the ASTM G173 reference solar spectrum) with origin later-data.
- Finding 6: the intro now says Maxwell's equations "were derived earlier in the course", without claiming which lectures had no notes.
- Info 9: the eq. (36) bracket now also says the slide drops the tilde on Ẽ₀,T, as eq. (19) drops it on Ẽ₀.
- Findings 3 to 5: no change (the order of slides 15 and 16 is kept; the additions are correct as the review says).
- Checks after the changes: content:check 0 errors and no warning for this page, calc:test 5964 passed, build 0 errors. Status set to reviewed.
