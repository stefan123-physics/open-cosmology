---
page: content/year-4/8.08/information-equipartition-ideal-gas.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/canonical_ensem/ (read: resource page, lecture notes, site licence CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/e440871d22237607e37482b227e22643_canonical_ensem.pdf (read: handwritten scan with no text layer, read from page images; PDF pages 5-11 rendered at 130 dpi = Wen's pp. 5, 6, 7, 9, 10, 11, 12; PDF page 1 checked for notices)
verdict: pass-with-notes
---

# Review: The energy cost of information, equipartition and the ideal gas

I checked every `<Formula>` against the page images. All 21 citations give the right page and point: ⑤ on p. 5; the chain cost and the encode-one-bit box on p. 6; the memory chip, bus and information on p. 7; ⑥ on p. 9; rotation and the table on p. 10; ⑦ on p. 11; A and P on p. 12. Every formula says the same physics as the notes, apart from the three slips the page points out, which are real (see Notes). I found no errors.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The energy cost of information", the paragraph after the bullets: "it is a limit that no design can beat"; also the bus bullet | p. 7: an ideal bus at 1 G bits/s needs power 3×10⁻⁵ erg/s. Wen gives no caveat. | Repeats the bus figure as a requirement and says no design can beat the limit. | Landauer's bound applies to logically irreversible operations (erasing or overwriting unknown bits). Bennett (1973) and later work on reversible computing show that operations which erase nothing, including in principle just passing bits along a bus, have no such lower bound. Add one bracket: "(the bound applies to erasing or overwriting bits; Wen's bus figure assumes every bit sent is such an operation)". Also soften "no design can beat" to "no design that erases information can beat". |
| 2 | info | Callout "Freezing out in the early universe", last sentence | (not in the notes) | "the condition V/Nλ³ ≫ 1 fails for photons and neutrinos" | λ = √(2πħ²/mk_BT) needs a mass, so it is not defined for photons (or for neutrinos treated as massless, as 8.286 does). The point is right: in a relativistic thermal gas the spacing between particles is of order ħc/k_BT, the thermal wavelength, so quantum statistics matter. Suggest: "for photons and neutrinos the spacing between particles is itself about one thermal wavelength, ħc/k_BT, so they need the quantum gases …". |
| 3 | info | "When equipartition fails", first paragraph | p. 10 sketch: the y-axis is labelled 3/2 and 5/2 only; a third, higher step is labelled "vibration" without a value. | "and to 7/2 when its vibration does" | Fine physically. If wanted, add "(the sketch leaves the top value unlabelled)". |
| 4 | info | Formula "Free energy of the ideal gas", `at="p. 12"` | The boxed form on p. 11 is A = Nk_BT[ln(nλ³) − 1] (n not defined, meaning N/V). The form on p. 12 is ln(Nλ³/V). | Cites p. 12; the text says "notes p. 11 and p. 12". | Correct as it is. `at="pp. 11–12, point ⑦"` would match the text. |
| 5 | info | "Rotation levels about one axis" | Wen never defines E₀. | "E₀ = ħ²/2I" | Correct (L_z = jħ). The page could mark it as its own addition, as it does for the chain's free-energy curve. |
| 6 | info | Worked example "Pulling a molecular chain straight" | (page's own example) | "freely jointed segments" | "Freely jointed" usually means a 3D chain, which has a different entropy count. The example uses Wen's two-direction model. Suggest "segments that each point one of two ways (Wen's model)". |
| 7 | info | Text and formulas from p. 6 | p. 6: "ΔS for the heat bath = Nk_B ln 2" | "at least Nk_B ln 2" | The page is more precise than the notes (the reversible case is the minimum). No change needed. |

## Arithmetic and answer checks
I recomputed all of these independently in Python (k_B and h exact, u from CODATA 2018). They all agree with the page.
- Chain example: Nk_BT ln 2 (N = 2000, 310 K) = 5.933×10⁻¹⁸ J ✓; per segment 2.967×10⁻²¹ J ✓; k_BT = 4.280×10⁻²¹ J ✓; ratio 0.69 ✓.
- Stirling with N = 100: ln[100!/(50!)²] = 66.784 ✓; 100 ln 2 = 69.315 ✓; difference 2.531 ✓; ½ln(50π) = 2.528 ✓ (both round to 2.53).
- Chain free energy: A/Nk_BT = −ln 2 at x = 0 and → 0 at x = ±1 ✓. Its slope is d/dx = ½ln((1+x)/(1−x)) = artanh x ✓. The tension = k_BT·artanh(x) per link length ✓. Plot point (0, −0.6931) ✓.
- Wen's memory chip (p. 7): k_BT ln 2 × 8×10⁹ at 300 K = 2.297×10⁻¹¹ J = 2.3×10⁻⁴ erg ✓ (Wen's figure is right).
- Wen's bus: 10⁹ × 2.871×10⁻²¹ J/s = 2.87×10⁻¹² W = 2.9×10⁻⁵ erg/s, which Wen gives as "3×10⁻⁵ erg/s = 3×10⁻¹² Watt" ✓. "Computer ~100 Watt" is on p. 7 ✓.
- Quiz 2: 10⁶ k_BT ln 2 = 2.871×10⁻¹⁵ J, so answer 0 ✓. The distractors are right too: 10⁶k_BT = 4.14×10⁻¹⁵ J and one bit = 2.87×10⁻²¹ J. The fourth option (6.2×10⁻¹⁵) is not explained, which is fine.
- Equipartition integral: −d/dβ ln(√π√(2m/β)) = 1/(2β) ✓.
- He/Ar example: (3/2)k_BT = 6.213×10⁻²¹ J ✓; v_rms He = 1367.3 m/s ✓, Ar = 432.8 m/s ✓; C_V = 1.5R × 1 mol = 12.47 J/K ✓.
- Quiz 3: √(39.95/4.003) = 3.159 → answer 2 ✓; mass ratio 9.98 ≈ 10 ✓.
- Rotation plot caption: exact sum over |j| ≤ 7 at k_BT = E₀/2 gives 86.0% of k_BT/2 ✓; at k_BT = E₀ it gives 99.80% ✓. At the plot's edge (t = 2.5) the truncation error is about e^(−25.6), negligible.
- High-T rotation: ∫j²e^(−βE₀j²)dj / ∫e^(−βE₀j²)dj times E₀ = 1/(2β) ✓. With Wen's extra ½ it would be k_BT/4, so his slip is real.
- Low-T rotation: the leading term of the exact sum is 2E₀e^(−βE₀), from j = ±1 ✓.
- Quiz 4: answer 1 ✓. The explanation's T_vib values match Wen's table, and k_BT_vib·e^(−T_vib/T) is the right low-T form for an oscillator ✓.
- T_rot/T_vib table: H₂ 85.4 / 6100, N₂ 2.86 / 3340, O₂ 2.07 / 2230. Every value matches the p. 10 image ✓.
- Ideal gas: ∫(dp/h)e^(−βp²/2m) = √(2πmk_BT)/h = 1/λ with λ = √(2πħ²/mk_BT) ✓. −k_BT ln Q with Stirling gives Nk_BT[ln(Nλ³/V) − 1] ✓. −∂A/∂T = Nk_B(5/2 + ln(V/Nλ³)) ✓. −∂A/∂V = Nk_BT/V ✓. The signs in the ∂A/∂V chain ✓.
- Helium example: m = 6.6465×10⁻²⁷ kg ✓; k_BT = 4.142×10⁻²¹ J ✓; λ = 5.038×10⁻¹¹ m ✓; N/V = 2.446×10²⁵ m⁻³ ✓; V/Nλ³ = 3.197×10⁵ ✓; S/Nk_B = 15.175 → 15.18 ✓; 15.175R = 126.17 J/(mol K) → 126.2 ✓. The tabulated 126.15 J/(mol K) at 298.15 K and 1 bar becomes 126.17 at 300 K and 1 atm (+R[2.5 ln(300/298.15) − ln 1.01325]), so the comparison is fair ✓.
- Quiz 1: answer 1 (Nk_BT ln 2) ✓. Flashcards: all correct.
- I did not run the calcs file, but its entries match the numbers above.

## Coverage and order
- The page follows the notes in order: ⑤ chain (p. 5) → bath argument (p. 6) → memory and box (p. 6) → chip, bus, measuring information, the 50/50 and 100/0 table, boxed formula, limits (p. 7) → ⑥ Maxwell, equipartition, mixture, E and C_V (p. 9) → H₂ sketch, rotation, high/low T, table, air (p. 10) → ⑦ Q, λ, A, S, states per particle, ∂A/∂V, the boxed note on −dE_n/dV (p. 11) → A and P (p. 12).
- Nothing on pp. 5–12 is left out. Wen's "λ ~ ħ/√(mkT) = h/√(2mK), K = average kinetic energy" is covered in words ("of the order of the de Broglie wavelength …"). Wen's sketches (Maxwell P(v), ⟨E⟩ against T, C_V of H₂) are described in words or replaced by plots computed from formulas.
- These are the page's own additions, and each is marked or harmless: the chain's free energy at intermediate length and its tension (marked "our extension"); the rubber-band remark; E₀ = ħ²/2I; the 3D-rotor remark; the h^{3N} and N! explanation; "the classical treatment needs V/Nλ³ large".
- The split with `canonical-ensemble-free-energy` is clean. That page covers points ①–④ on pp. 1–4 (its last citations are p. 4, ⓐ/ⓑ), and this page starts at point ⑤ on p. 5. Neither page repeats the other, and both intros state the split.

## Licensing
- PDF pages 1 and 5–11 have no "courtesy" or "all rights reserved" notice. The OCW resource page shows the site's CC BY-NC-SA 4.0 licence.
- No figure from the notes is redrawn. The three sketches on pp. 6, 9 and 10 are replaced by prose and by plots computed from formulas. The page has no image files.
- The T_rot/T_vib table: Wen gives these numbers without a source. They appear to be the standard values in Huang's *Statistical Mechanics* (uncertain: I did not check Huang). Either way, three pairs of measured constants are facts, not protectable expression, and the page takes them from Wen's CC-licensed notes. No problem.
- Paraphrase: the prose is the page's own. Wen's short phrases ("no internal energy", "total entropy can only increase", "number of states per particle", "to encode one bit") are standard terminology or labels. Nothing is copied at sentence level. The worked examples (2000-segment molecule at 310 K, the He/Ar mixture, helium at 1 atm) and the quizzes are original.
- No OpenStax or LibreTexts material. There are no em dashes on the page.

## Notes
- **Slips the page flags. All three are real and correctly described:**
  1. p. 5: "C_N^{N/2} = N!/(N/2)!", without the square. Wen's own Stirling line, "N ln N − 2(N/2)ln(N/2)", uses the squared form, so this is a slip ✓.
  2. p. 10, high T: the numerator has "∫dm ½E₀m² e^(−βE₀m²)", which would give k_BT/4, not the stated ½k_BT ✓. At low T Wen writes ⟨E⟩ = E₀e^(−E₀/k_BT); the j = ±1 degeneracy gives 2E₀e^(−E₀/k_BT) ✓. The page is right that this does not change the conclusion.
  3. p. 10: "for air C_V ≈ 7/2 k_B(N_O₂ + N_N₂) at room temperature". With T_vib in the thousands of K, C_V is 5/2 k_B per molecule, and 7/2 is C_P ✓. The page does not claim Wen meant C_P, only that 7/2 is C_P, which is fair.
- **Slips the page might have missed:** none of substance. Two small points:
  - p. 11 writes ln(nλ³) without defining n. The page uses the p. 12 form, so nothing to fix.
  - p. 10 uses m both as the rotational quantum number and (on p. 9) as the mass. The page renames the quantum number j and says so ✓.
- **Landauer attribution:** correct (R. Landauer, IBM J. Res. Dev. 5, 183, 1961; erasure dissipates at least k_BT ln 2). The page rightly says the notes do not name it. See finding 1 on how far the bound reaches.
- **Cosmology callout and leadsTo:** 8.286 Lecture 17 ("Black-Body Radiation and the Early History of the Universe, Part III") is where Guth counts the particle species that contribute at a given temperature (pages `neutrinos-and-particle-counting` and related). The freezing-out analogy with the Boltzmann factor is fair. See finding 2 on λ for massless particles. leadsTo 8.08 Lecture 2 (van der Waals) and Lecture 7 are fitting. Lecture 7 is "The Bose Gas"; the "bosons or fermions" wording covers the later chapters too and is fine.
- **Symbols:** 54 meanings are scoped to this slug. The ones I read (Γ₀, j, E₀, λ, T_rot, T_vib, x, ρ_i, the S and A subscripts) match their use on the page. I did not run `content:check`.

## Resolution (2026-11-19, by the page author)

1. Warning (Landauer's bound overstated): "a limit that no design can beat" removed; a bracket now says the bound applies to logically irreversible steps such as erasing or overwriting bits, which is what Wen's random-to-ordered memory does, and that Bennett showed reversible computation can in principle avoid it, a caveat not in the notes.
2. Info (λ undefined for photons and neutrinos): the callout now says that for (nearly) massless particles the typical wavelength is about ħc/k_BT, comparable to their spacing.
3. Info (7/2 step not labelled in the sketch): no change; the page describes the steps in words and its own reading is standard physics.
4. Info: the ideal-gas free energy is now cited to pp. 11–12.
5. Info: E₀ = ħ²/2I is now marked as our step.
6. Info: the worked example no longer says "freely jointed"; it says each segment points one of two ways, as in Wen's model.
7. Info: no change needed.

content:check (0 errors) and calc:test pass after the changes. Status set to reviewed.
