---
page: content/year-4/8.08/semiconductors-and-diodes.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read as page images: handwritten pp. 89-92 = PDF pages 15-18 at 130 dpi, the large-T integral on p. 90 at 300 dpi, PDF page 14 at 90 dpi; handwritten, no text layer)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_fermi_gas/ (not re-read for this review; the course file records OCW's only "courtesy" credit as the course image)
  - content/year-5/8.902/big-bang-nucleosynthesis.mdx (read, for the cosmology callout)
  - content/year-3/8.044/free-fermi-gas.mdx (read the intrinsic-semiconductor formula only, for the "8.044 result" claim)
verdict: needs-changes
---

# Review: Bands, semiconductors and the p–n junction

Scope: notes pp. 89-92 (band theory, Brillouin zone, metal vs insulator, Method 1, Method 2, conductivity, diode). Every formula was checked against the page images, every number recomputed independently in Python (CODATA constants), and `npm run calc:test -- -k semiconductors` run (29 passed). One error (a misstated sentence in the cosmology callout), three warnings, the rest info.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout, last sentence | (8.902 page) deuterium formation p + n → D + γ releases 2.22 MeV; the reverse, photodissociation, costs it. Deuterium is held back at high T and builds up once kT ≪ 2.22 MeV. | "As here, a reaction that costs energy is held back by the exponential until the temperature is low enough." | Wrong as written in both systems: a reaction that costs energy (pair creation here, dissociation of D there) is suppressed by the Boltzmann factor at **low** T, not held back until T is low. What is held back until T is low is the bound/low-energy side (deuterium). Suggest: "As here, the side of the reaction that costs energy is suppressed by the Boltzmann factor at low temperature: electron–hole pairs die out as the solid cools, and deuterons stop being broken up once kT is far enough below 2.22 MeV." The rest of the callout (Saha equation, thermal-wavelength factors times a Boltzmann factor of 2.22 MeV, p + n combining and emitting a photon) matches the 8.902 Lecture 20 page. |
| 2 | warning | Large-T paragraph after "Carrier density when the gap is negligible" | p. 90: "~ (m k_BT/ħ²)^{3/2} ~ 1/λ³ (quantum)" | "about one carrier per thermal wavelength cubed: a degenerate, quantum gas." | "Degenerate" is not in the notes and overstates it: with μ = 0 at the band bottom every occupation is at most 1/2, and nλ³ = 0.765 per spin state (checked in calcs `large-t-order-lambda`), the crossover between classical and quantum, not a filled Fermi sea. Write "no longer a classical gas: a quantum gas (Wen's word)". |
| 3 | warning | Method 2, bracket after "Mass action for electrons and holes" | p. 91: the general law (ν₁X₁ + … = ε₀ ⇒ Π(λᵢ³nᵢ)^νᵢ = e^{−ε₀/k_BT}) is boxed; the electron–hole line λ_e³n_e λ_h³n_h = e^{−Δ/k_BT} is not boxed; the result n_e = n_h = 2e^{−Δ/2k_BT}(…)^{3/2} has a factor 2. | "the boxed law in the notes is written for one spin state, and the 2 reappears in their result" | The slip is real and correctly diagnosed (verified: with g = 2 for each carrier the right side is 4e^{−Δ/k_BT}, and its square root gives Wen's 2; without spin the 2 would be absent). Only the word "boxed" points at the wrong line. Say "the electron–hole law in the notes (under the boxed general law) is written for one spin state". Optionally also note that the displayed Formula is the notes' one-spin form, so a reader does not take it as the final law (the summary and flashcard give the 4). |
| 4 | warning | Diode section, reverse bias | p. 92 "negative bias" sketch: large barrier, E field, and an arrow "← electron flow" (a small flow from p to n). I–V sketch: steep rise for positive V, a nearly flat line slightly below zero for negative V. | "With negative (reverse) bias the barrier becomes large and almost nothing flows." | Accurate in magnitude, but drops the notes' point that the small reverse electron flow runs the other way (p to n). One clause fixes it: "almost nothing flows, and that little runs from p to n (the arrow in Wen's sketch)". This also prepares the Shockley "−1" remark. |
| 5 | info | Bracket after the large-T formula | p. 90 writes t²/(e^t + 1) with prefactor (1/2π²)(2mk_BT/ħ²)^{3/2}. | Corrects to e^{t²}, with t = ħk/√(2mk_BT); says e^t "belongs to the substitution t = ε/k_BT with a different power of t in front". | Verified at 300 dpi: the denominator is e^t; the prefactor and t² numerator only fit t = ħk/√(2mk_BT), so e^{t²} is right and the slip note is fair. Small precision: with t = ε/k_BT the prefactor also changes (1/4π² and t^{1/2}), not only the power. Optional: "a different power of t and prefactor". |
| 6 | info | Method 2 | p. 91 writes the masses as m_c, m_v (conduction, valence); p. 90 uses m_e, m_h. | Uses m_e, m_h throughout. | Harmless; could say so once. |
| 7 | info | Intro bracket on the unnumbered page | PDF page 14: "Prob. 12.6", Q₁ = 2e^{β(…)} + e^{−β(bx² + cx)}, A(x) = −k_BTN ln Q₁, sketches of A(x) above and below T_c = c²/4bk_B, A(T) and dA/dT with a kink at T_c. | "Huang's Problem 12.6, about a free energy with a phase transition." | Description of content is accurate. That it is Huang's problem is plausible (Huang is the course text) but not written on the page; uncertain. Could say "a homework problem (Prob. 12.6, presumably from Huang)". |
| 8 | info | "Electrons and holes as a chemical reaction" and Conductivity | Notes do not explain the half gap, the derivation of mass action, the metal comparison, or the mobility assumption. | Adds these, marked as page's own in some places ("This assumes…", "(It follows from…)") but not in others ("Half, because … the cost is shared"; "the opposite of a metal … whose conductivity falls as the lattice vibrates more"). | All physically correct (metal resistivity rises with T from phonon scattering; n fixed). The "shared cost" line is a heuristic; the real reason is that μ sits mid-gap. Fine as is. |
| 9 | info | Unequal masses | Not in the notes. | μ = (3/4)k_BT ln(m_h/m_e), "towards the band with the lighter carriers", marked as the page's addition and as the 8.044 result. | Verified: n_e = n_h gives m_e^{3/2}e^{βμ} = m_h^{3/2}e^{−βμ}, so μ = (3/4)k_BT ln(m_h/m_e), measured from mid-gap. m_h > m_e gives μ > 0 (towards the conduction band, whose carriers, electrons, are lighter): direction correct. Same as the 8.044 slide-24 formula μ = ε_G/2 − (3/4)kT ln(m_e/m_h). |

## Formula-by-formula check
- "A plane wave on a lattice" (p. 89): ψ_k(n) = e^{ikna}, ψ_{k+K}(n) = ψ_k if K = 2π/a. Matches.
- "A band on a lattice" (p. 89, boxed): ε_k = (ħ²/ma²)[1 − cos(ka)], "for small k ε_k = k²ħ²/2m". Matches. (The notes first write ε_k = k²ħ²/2m next to ψ_k(n), before "But"; the page skips that line, fine.) Brillouin zone sketch −π/a to π/a matches.
- Metal / insulator / "# of levels in each band = # unit cell" (p. 89 sketches and box): matches; "Fermi surface" label is on the metal sketch, μ in the gap on the insulator sketch.
- "Densities of electrons and holes" (p. 90, Method 1): both integrals match, exponents β(ε_e + Δ/2 − μ) and β(ε_h + Δ/2 + μ). Band-edge sketch at ±Δ/2 matches.
- "Equal masses" (p. 90): "If m_e = m_h ⇒ μ = 0", n_e = n_h = ∫ 1/(e^{β(ε+Δ/2)} + 1). Matches.
- "Carrier density when the gap is negligible" (p. 90): matches except the corrected e^{t²}, flagged (#5).
- "Carrier density when the gap is large" (p. 90): ∫ e^{−βε}e^{−βΔ/2} = λ^{−3}e^{−βΔ/2} "(classical)". Matches.
- "The reaction" (p. 91): "(ele) + (hole) = Δ". Matches.
- "Law of mass action" (p. 91, boxed): matches.
- "Mass action for electrons and holes" (p. 91): matches the notes, including their one-spin form (#3); λ = √(2πħ²/mk_BT) matches.
- "Carrier density of an undoped semiconductor" (p. 91): n_e = n_h = 2e^{−Δ/2k_BT}(√(m_e m_v) k_BT/2πħ²)^{3/2} ≃ T^{3/2}e^{−Δ/2k_BT}. Matches.
- Classical/quantum box (p. 91): "λ³n ≪ 1 Classical, λ³n ≳ 1 Quantum". Matches.
- "Conductivity of an undoped semiconductor" (p. 91): "σ ∝ n_e ~ n_h ∝ T^{3/2}e^{−Δ/2k_BT}" "(no doping)". Matches.
- "Current through the junction" (p. 92): "I ~ V e^{−ε_B/k_BT}". Matches (the symbol before V is smudged; ~ or ∝, either way the same content).

All `at=` page numbers are right.

## Arithmetic and answer checks
Recomputed (k_B = 1.380649e-23 J/K, ħ = 1.054571817e-34 J s, m = 9.1093837e-31 kg):
- k_BT(300 K) = 0.02585 eV ✓ (0.0259); Δ/2k_BT = 21.662 ✓ (21.7, and the plot's 21.6618); e^{−21.66} = 3.9e-10 ✓ ("about 4e-10").
- Prefactor 2(√(m_e m_h) k_BT/2πħ²)^{3/2} = 2.27e25 m⁻³ ✓ (2.3e25); n_e = 8.88e15 m⁻³ ✓ (8.9e15, plot 8.88e15).
- 5e28 / 8.88e15 = 5.6e12 ✓ ("one in several trillion").
- λ_e = 4.14 nm ✓ (4.1); n_eλ_e³ = 6.3e-10 ✓ (6e-10).
- (350/300)^{3/2} = 1.260 ✓; e^{(Δ/2k_B)(1/300 − 1/350)} = 22.08 ✓; ratio 27.8 ✓ (28); 17% ✓. Quiz 4 answer "About 28" ✓.
- Plot 2: the expression 8.88e15 (T/300)^{1.5} e^{21.6618(1 − 300/T)} equals the full formula to 5 digits at 250, 400, 500 K. log₁₀ n_e runs 13.95 to 20.04, inside the range [13, 21] ✓. n(500)/n(250) = 1.25e6 ✓ ("about a million").
- Plot 1: 1 − cos x vs x²/2; maximum 2 at ka = π ✓ (caption "2ħ²/ma²"). The dashed parabola leaves the range near the edges (clipped), harmless.
- Plot 3: e^x − 1 on [−4, 3], max 19.1 < 20 ✓; tends to −1 on the left ✓ (caption "−I_s").
- Large-T number: ∫₀^∞ t²/(e^{t²}+1) dt = 0.339, nλ³ = (4/√π)(0.339) = 0.765 ✓.
- μ for unequal masses ✓ (see #9). Shockley I = I_s(e^{eV/k_BT} − 1), with −1 the barrier-independent reverse (minority-carrier) flow ✓.
- Quiz 1-3: marked answers and explanations correct. Quiz 3 explanation n_en_h ∝ T³e^{−Δ/k_BT} ✓.
- Flashcards: all correct; card 3's 4e^{−Δ/k_BT} and n_e formula are consistent with each other and with the corrected spin factor.
- `npm run calc:test -- -k semiconductors`: 29 passed. Calcs note (info): `deuterium-binding` (kind fact) cites `{cite: reading1, at: 'p. 91'}`, but 2.22 MeV is not in Wen's notes; its source is the 8.902 page / its notes (eq. 484). Several page-own example entries also cite p. 91, which is acceptable as "the formula used", but `deuterium-binding` should not.

## Coverage and order
- Notes order: band theory, lattice plane wave, Brillouin zone and cosine band, band structure (metal, insulator, levels per band), Method 1 (counting, μ = 0 for equal masses, large-T and small-T limits), Method 2 (reaction, mass action, classical condition, n_e = n_h, classical/quantum box), conductivity, diode (n-type, p-type, junction with barrier, positive and negative bias, I ~ V e^{−ε_B/k_BT}, I–V sketch). The page follows this order exactly and leaves nothing out, apart from the reverse-flow direction (#4).
- Additions (all flagged or harmless): tight-binding origin of the cosine band, the full-band-carries-no-current remark, mass-action derivation sketch, μ for unequal masses, mobility caveat, metal comparison, Shockley formula, worked example, three plots.
- PDF page 14 (Prob. 12.6) correctly excluded and described (#7).
- p. 92 sketch description checked: n-type with μ near the conduction band (thin hatched electron layer), p-type with μ at the top of the valence band; in equilibrium a common μ, bands bent into a "potential barrier" ε_B measured from the n-side μ, E field pointing n → p; positive bias μ₁ (n side) above μ₂, "small barrier", electron flow n → p; negative bias "large barrier", electron flow ← (#4). The page's account is accurate apart from #4. The page's "electrons flow from n to p until a charge layer builds up" is its own (standard) explanation, not drawn in the notes; fine.

## Licensing
- No figure reused: all three graphs are generated from formulas; the band, band-edge and diode sketches are described in words, not redrawn. No Huang figures on pp. 89-92 (all sketches are Wen's own hand drawings), and no "courtesy" or "rights reserved" notice on these pages.
- Wording is the page's own; the notes are terse formula pages, and only standard phrases ("Brillouin zone", "positive bias", "small barrier", "potential barrier") recur.
- No OpenStax or LibreTexts material. No em dashes in the page.

## Notes
- Physics checks requested: direction of μ shift for unequal masses correct (#9); metals' conductivity falling with T is correct (phonon scattering; electron number fixed); the Shockley addition is correctly stated and labelled as the page's.
- The silicon-like masses (1.08 m density-of-states mass, which includes the six conduction valleys, and 0.81 m) are standard density-of-states values; with them and "two spin states" the result 8.9e15 m⁻³ is close to silicon's measured intrinsic density (about 1e16 m⁻³), so the example is realistic.
- leadsTo 8.08 Chapter IX (Transport) is plausible from the course file title; I did not read Chapter IX, so its exact content is unverified. The 8.902 Lecture 20 leadsTo text is correct.
- The intro phrase "a dilute classical gas living on top of a filled Fermi sea" is loose for the holes (which live in the filled band), but understandable.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error, callout): the last sentence is replaced: pair creation across the gap dies out as the semiconductor cools, and deuterium survives only once the universe is cool enough that photons can no longer break it apart.
- Finding 2 (warning, "degenerate"): now "no longer a classical gas but at the crossover to the quantum regime" with n_eλ³ ≈ 0.77 per spin state and the remark that no level is more than half filled at μ = 0 (calcs `large-t-order-lambda` checks 0.765).
- Finding 3 (warning, boxed law): now says the electron–hole law, written below the boxed general law, leaves the spin factors out.
- Finding 4 (warning, reverse bias): now says a small flow of electrons remains in the opposite direction, from p to n, as Wen's arrow shows.
- Finding 6 (info): the page now says Method 2 labels the masses by the conduction and valence bands; Problem 12.6 is "presumably from Huang's textbook"; the calcs entry for 2.22 MeV now says it is quoted from the 8.902 page, not Wen. The unmarked heuristics (half-gap sharing, comparison with metals) are standard and left as they are. Finding 5 needs no change.
- content:check and calc:test pass; status set to reviewed.
