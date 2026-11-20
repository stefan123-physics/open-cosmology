---
page: content/year-5/8.962/gravitational-wave-energy-isaacson.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/99ba6bc60de034b358eff6f5867a9839_pUqA_iHLBWQ.pdf (read: local copy L17.pdf / L17.txt and per-page text p17/1.txt to 21.txt; "transcript p. N" = N-th PDF page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-17-gravitational-radiation-ii/ (not opened separately; the transcript is its content, there are no slides or notes)
  - Lecture 16 transcript (local L16.txt), read only to check the "tweak" to I_ij
  - content/year-5/8.962/_course.json (leadsTo), gravitational-waves-quadrupole-formula.mdx and linearized-gravity-static-limit.mdx (conventions), year-4/8.07/electric-magnetic-dipole-radiation.mdx (prerequisite)
  - Fact-checking only, from memory, not quoted: MTW ch. 35 (eqs. 35.58, 35.64, 35.70), Carroll ch. 7, Isaacson 1968, Brill and Hartle 1964
verdict: needs-changes
---

# Review: Gravitational waves on a curved background and the energy they carry

Board equations are almost never read aloud in this lecture, so most formulas on the page are the standard forms of what Hughes describes in words. For each one I checked that it agrees with what he says and with the standard result (MTW, Carroll, Isaacson). The signature is (−,+,+,+), with MTW's Riemann sign convention.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Wave or background?", LIGO paragraph | Hughes gives the curvature length of the Earth's field near its surface as "many, many ... kilometers, tens of thousands or millions of kilometers. Tens of thousands, probably", and admits he should have worked it out first (transcript pp. 4–5). | "its curvature length is very large (Hughes guesses tens of thousands of kilometres)" | The guess is wrong by about four orders of magnitude. The Riemann components near the surface are about GM/(c²r³) = 1.7×10⁻²³ m⁻², so the curvature length √(c²r³/GM) ≈ 2.4×10⁸ km (about 1.6 AU). Under writing rule 4 the page should not repeat the slip. Write, for example: "its curvature length is enormous: √(c²r³/GM_⊕) ≈ 2×10⁸ km [Hughes guesses tens of thousands of kilometres in the lecture]". Add a calcs entry: `sqrt(c**2*(6.371e6 m)**3/(3.986e14 m**3/s**2))` gives 2.41e11 m. |
| 2 | warning | Worked example, step "Numbers" | Not in the lecture. Hughes only says the binary inspiral is a problem-set exercise and that the chirp follows from the formula (p. 21). | "Losing energy this fast, the pair merges in about 0.37 s." | The number is right (τ = (5/512)c⁵a⁴/(G³m³) = 0.375 s), but the page neither gives nor derives the formula, and does not say it goes beyond the lecture. Give the formula, call it the page's own leading-order addition, and add the caveat in #3. |
| 3 | warning | Worked example and chirp Plot | Hughes: the quadrupole law describes the chirp "to very good approximation", "there are corrections that people have worked out" (p. 21). | 0.37 s and the plotted chirp with no caveat about this regime. | At a = 1000 km, GM_tot/c² = 88.6 km, so a ≈ 11 GM/c² and v/c ≈ 0.3, close to the ISCO (6GM/c² ≈ 530 km). Leading-order (Newtonian, point-mass) results are only rough here. Add one sentence: "leading-order estimate; at v ≈ 0.3c post-Newtonian corrections are already significant". |
| 4 | warning | Cosmology callout | Hughes says that assuming vacuum "complicates a little bit how they work in some cosmological spacetimes" (p. 9). | "The background-plus-wave split of this lecture is how gravitational waves are treated in an expanding universe ..." | The physics is right for wavelengths much smaller than the Hubble length (frequencies redshift, ⟨ρ_GW⟩ ∝ a⁻⁴). But an FRW background is not a vacuum, so the wave equation derived here does not apply as written. Primordial inflationary waves also fit the short-wave (Isaacson) picture only once they are back inside the horizon. Add: "with matter terms that this lecture's vacuum assumption leaves out (Hughes notes this), and for primordial waves only once their wavelength is inside the Hubble length". |
| 5 | info | Intro paragraph | Hughes says the solar system and a galaxy are weakly curved: the flat-background analysis "carries over very cleanly" there, using the separation of time scales (pp. 1–2). He names black holes and large cosmological regions as the cases that really need a curved background. | "Real waves travel near black holes, through galaxies and across an expanding universe, none of which is flat." | Strictly true, but it misses Hughes's point. Suggest: "... galaxies (nearly flat, where the last lecture's analysis carries over) and ..." |
| 6 | info | "Wave or background?", ocean analogy | "a radius of 6,000 kilometers" (p. 4) | "some 6,000 km in radius" | The real radius is 6,371 km. "Some 6,000 km" is acceptable as Hughes's round figure; "about 6,400 km" would be more accurate. |
| 7 | info | Formula "Isaacson stress-energy tensor", at="transcript p. 19" | Hughes writes the result at the bottom of p. 18 ("you get this remarkably simple result") and names it at the top of p. 19. | p. 19 | Use "transcript pp. 18–19", as the prose already does. |
| 8 | info | Formula "Wave equation on a curved vacuum background", at="transcript p. 13" | The gauge choice and "governed by the following" are on p. 12; the curvature-coupling remark is at the top of p. 13. | p. 13 | Use "transcript pp. 12–13", as the prose before it does. |
| 9 | info | Paragraph after the power formula: EM dipole power P = (2/3)d̈² | Hughes gives no factor, only "two derivatives of the dipole moment ... multiplied" (p. 20). | (2/3)d̈² in Gaussian units, c = 1 | Correct (Larmor), but the factor is the page's own addition, and the prerequisite 8.07 page uses SI (⟨P⟩ = μ₀p₀²ω⁴/12πc). Consider writing "P = p̈²/(6πε₀c³) in SI (2p̈²/3c³ in Gaussian units)" and marking the factor as not from the lecture. |
| 10 | info | Formula "The background feels the averaged wave" | Hughes: G[ĝ + ⟨j⟩] equals the average of the second-order piece; T^GW is defined as −(1/8πG) times that average (p. 18). | `G[ĝ + ε²⟨j⟩] = −ε²⟨G^(2)[h]⟩ ≡ 8πG T^GW` | Fine, because ε = 1. Strictly, ε² is part of the definition here, and the equality holds up to O(ε³) and (λ/L)². Optional: add "(ε = 1)" after the formula. |

## Formula checks (all verified)
- Background plus wave and the averaging definitions (pp. 2, 5): match Hughes's spoken description.
- δΓ^α_μν = ½ĝ^{αβ}(∇̂_μh_βν + ∇̂_νh_βμ − ∇̂_βh_μν): the standard result and what Hughes describes, "Christoffel formula with covariant derivatives acting on the h's" (p. 8). Correct.
- δR_μν = ½(∇̂^α∇̂_μh_να + ∇̂^α∇̂_νh_μα − □̂h_μν − ∇̂_μ∇̂_νh): matches MTW 35.58a, including the order of derivatives (the outer derivative is ∇̂^α). Hughes defines □̂ and h = ĝ^{μν}h_μν and points to the trace and divergence terms (p. 10). Correct.
- Gauge transformation h → h − ∇̂_μξ_ν − ∇̂_νξ_μ for x' = x + ξ: the same sign convention as the flat case on linearized-gravity-static-limit (h − ∂_μξ_ν − ∂_νξ_μ). Correct.
- Trace of h̄_μν = h_μν − ½ĝ_μν h is −h (p. 12; calcs `trace-reversed`). Correct.
- Wave equation □̂h̄_μν + 2R̂_αμβν h̄^αβ = 0: I re-derived it. In Lorenz gauge, with R̂_μν = 0, the commutator [∇̂_α, ∇̂_μ] gives ∇̂^α∇̂_μh_να = ∇̂_μ∇̂^αh_να − R̂_αμβν h^αβ. The divergence and trace terms cancel, leaving □̂h_μν + 2R̂_αμβν h^αβ = 0, and the trace part drops out because R̂_μν = 0. Sign +2, as in MTW 35.64. Correct.
- Second-order expansion, order-by-order equations, G^(1)[j] = −G^(2)[h], the averaging of second derivatives with (λ/L)² corrections (pp. 15–18): match the transcript.
- T^GW = −(1/8πG)⟨G^(2)⟩ (p. 18): matches Hughes and MTW 35.70.
- Isaacson tensor with 1/(32πG) and h^TT on both sides: standard and correct.
- T_00 = (1/32πG)⟨ḣ^TT_ij ḣ^TT_ij⟩, P = r²∮T_00 dΩ (p. 19): correct, with c = 1 and the flux of an outgoing wave equal to its energy density.
- h^TT_ij = (2G/r)(P_ikP_jl − ½P_ijP_kl)Ï_kl: the same as the Lecture 16 page.
- Sphere integrals 4π/3 δ_ij, odd products 0, (4π/15)(δδ + δδ + δδ): correct. I checked components numerically (xx: 4.18879; zzzz: 4π/5 = 2.51327; xxyy: 4π/15 = 0.837758), as in the calcs entries.
- P = (G/5)⟨(d³Q_ij/dt³)²⟩, Q_ij = I_ij − ⅓δ_ij I_kk; the factor is G/5c⁵ in SI. Correct. The "tweak" wording comes from Lecture 16 (L16 transcript: "tweak that goes in the exact definition of the quadrupole moment").

## Arithmetic and answer checks
- Worked example. I_xx = (ma²/4)(1 + cos2Ωt), I_yy = (ma²/4)(1 − cos2Ωt), I_xy = (ma²/4)sin2Ωt for masses m at ±a/2: correct. Third derivatives: 2ma²Ω³sin2Ωt, −2ma²Ω³sin2Ωt, −2ma²Ω³cos2Ωt: correct. Sum of squares 8m²a⁴Ω⁶, so P = (8/5)Gm²a⁴Ω⁶. With Ω² = 2Gm/a³ this gives P = (64/5)G⁴m⁵/(c⁵a⁵). This agrees with the textbook (32/5)G⁴μ²M³/(c⁵a⁵) for μ = m/2, M = 2m.
- Gm = 30 × 1.32712×10²⁰ = 3.981×10²¹ m³/s²; m = 5.967×10³¹ kg; c⁵ = 2.4216×10⁴²; P = 7.92×10⁴⁶ W. The page's 7.9×10⁴⁶ W is correct.
- P/L_⊙ = 7.92×10⁴⁶ / 3.83×10²⁶ = 2.07×10²⁰, so "about 2×10²⁰" is correct.
- Merger time (5/512)c⁵a⁴/(G³m³) = 0.3747 s, so "about 0.37 s" is correct (see #2 and #3).
- Chirp mass 30 × 2^(−1/5) = 26.12 M_⊙, so 26.1 is correct. G𝓜/c³ = 1.28636×10⁻⁴ s, so 1.2864×10⁻⁴ is correct.
- Plot point: f(0.375 s) = 28.396 Hz, and the orbit gives f_GW = Ω/π = 28.404 Hz at a = 1000 km. Both round to 28.4 Hz, consistent with Lecture 16's 28.4 Hz. f(0.01 s) = 110.5 Hz < 130 and f(2 s) = 15.2 Hz, so the curve stays inside the plotted range.
- Quiz 1 (answer 1), quiz 2 (answer 1) and quiz 3 (answer 2, "Three"): correct, with correct explanations. Quiz 4 (answer 0, 7.9×10⁴⁶ W): correct. Its distractor 3.8×10²⁶ W is the Sun's luminosity, a fair trap. Explanation numbers: (3.98×10²¹)⁴ × 5.97×10³¹ / (2.42×10⁴² × 10³⁰) × 64/5 = 7.9×10⁴⁶. Correct.
- Flashcards: all five are correct (the power formula carries the c⁵ correctly).
- Calcs file: every number on the page has an entry, and I recomputed the values independently. Small point: the page-own entries (binary, merger, chirp) give `source: reading1 p. 21` although the numbers are not in the transcript. Harmless, because `origin: page-own` is set. The figure in #1 needs a new entry.

## Coverage and order
- The page follows the lecture's order: why curved backgrounds (pp. 1–2) → separation of scales, with the ocean and LIGO examples (pp. 2–5) → Brill–Hartle averaging and its limits (pp. 5–7) → linearizing about ĝ: δΓ, Riemann, the vacuum assumption, δR (pp. 7–10) → generalized gauge, trace reverse, generalized Lorenz gauge, wave equation (pp. 10–13) → do the waves carry energy: local Lorentz frames, potentials versus fields, non-locality (pp. 13–15) → second order, averaging, T^GW, Isaacson (pp. 15–19) → T_00, sphere integrals, the quadrupole power formula, the EM comparison (pp. 19–20) → Einstein's history and the chirp (pp. 20–21).
- Nothing in the lecture is left out. Not on the page: the explicit linear Riemann correction and δG_μν in terms of h̄. Hughes wrote these on the board without reading them, so leaving them out is reasonable.
- Additions not in the lecture: the worked example (the problem-set calculation Hughes mentions, done with the page's own numbers), the merger time, the chirp formula and Plot, the factor 2/3 in the EM formula, and the cosmology callout. The Plot caption marks the chirp as the "standard leading-order result". The merger time and the 2/3 are not marked (#2, #9).
- The lecturer slip "linearizing around this flat background" (p. 13) is correctly noted in brackets.
- History check: Brill and Hartle 1964 is correct. The page gives Einstein's 1916 and 1918 papers as Hughes tells them: 1916 badly wrong, 1918 off by a factor of 2. This matches the standard account (Eddington corrected the factor in 1922), and the page attributes the story to Hughes. "About a third as long" correctly paraphrases "about one third as long as it would be" (p. 9).

## Licensing
- The transcript carries no "All rights reserved" or "Courtesy of" notice (grep of L17.txt finds none). There are no figures, and the only graph is generated from a formula.
- No copied paragraphs: the wording is the page's own throughout. The only echo of Hughes's wording is the short phrase "not a trick", which is fine.
- No OpenStax or LibreTexts material. Carroll, MTW and Isaacson are not cited as sources on the page, which is correct for fact-checking only.
- The worked example reuses Lecture 16's binary (the page's own numbers, not MIT's problem set), so it is original.

## Notes
- leadsTo: Lecture 18 is "Cosmology I", and Hughes says on p. 2 that cosmology is the next lecture, so this claim is correct. Lecture 22 is "Black Holes I": a fair link, since Hughes names black holes as a curved background (p. 2).
- Writing rules: no em dashes (0 found), `## Summary` at the end, short sections, every display equation is a cited `<Formula>`.
- Prerequisite `electric-magnetic-dipole-radiation` exists (content/year-4/8.07).
- Verdict: needs-changes, because of #1 (an uncorrected lecturer slip in a quoted figure). The remaining items are warnings and info.

## Resolution (2026-11-19, by the page author)

- #1: the page now gives the curvature length near the Earth as √(c²R⊕³/GM⊕) ≈ 2.4 × 10⁸ km. Hughes's guess of tens of thousands of kilometres is in a bracket. New calcs entry `earth-curvature-length` (origin slip).
- #2: the merger-time formula t = (5/512)c⁵a⁴/(G³m³) is now stated and marked as a problem-set result, not part of the lecture. Calcs identity `merger-formula`.
- #3: added a caveat. At a = 1000 km the binary is about 11 GM/c² apart (M = 2m) with relative speed about 0.3c, so the numbers are leading-order estimates. New calcs entries.
- #4: the callout is reworded. It now notes that the cosmological background is not a vacuum, and that primordial waves fit the picture only after they re-enter the horizon.
- Info: the introduction now says the flat analysis carries over for the solar system and galaxies. The Earth radius 6,371 km is added. The citations for the Isaacson tensor and the wave equation now read pp. 18–19 and pp. 12–13. The EM dipole formula is marked as the page's addition, in Gaussian units. The ε² point is left as it is.
- Status set to reviewed.
