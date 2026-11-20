---
page: content/year-4/8.08/ideal-bose-gas-condensation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_bose_gas/ (read: resource page, CC BY-NC-SA 4.0, no "All rights reserved" or "Courtesy of" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: handwritten scan, no text layer; pp. 55-61 = PDF pages 8-14 read from page images rendered at 120 dpi, with 250 dpi crops of the mu(T) sketch on p. 57, the finite-system lines on p. 58, the boxed identities on p. 59 and the condensate line on p. 61; p. 48 and p. 62 checked for notices and for where point 3 ends)
  - content/year-4/8.286/neutrinos-and-particle-counting.mdx (read, for the callout and leadsTo)
verdict: needs-changes
---

# Review: The ideal Bose gas: condensation, pressure and heat capacity

Wen's handwritten page numbers (top right) are used throughout; PDF page = Wen's page − 47.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Section "Condensation: the chemical potential gets stuck", paragraph "Wen also sketches μ(T)…" | The sketch at the foot of p. 57 (checked at 250 dpi) draws the classical-gas curve starting at μ = 0 at T = 0, **rising** to a positive maximum, then falling through zero and on to large negative values. This is also the physics: μ = k_BT ln(nλ³) → 0⁺ as T → 0, is positive while nλ³ > 1, and falls below zero once nλ³ < 1. | "for a classical gas it falls from the start" | Rewrite, e.g.: "for a classical gas, μ = k_BT ln(nλ³), it starts at zero, rises to a positive maximum and then falls, crossing zero where nλ³ = 1". Optionally add that the classical formula cannot be trusted at low T, which is why the curve differs from the boson one. |
| 2 | warning | Formula "Occupation of the lowest level" (p. 58) and the bracketed note after it | p. 58 writes the sum as Σ_k 1/(z e^{βε_k} − 1), with z where z⁻¹ belongs. N₀ = 1/(z − 1) follows directly from that slip. | Writes z⁻¹e^{βε_k} correctly without saying the notes differ, and flags only N₀ = 1/(z − 1) as "the wrong sign". | Extend the bracket: "(The notes write z in place of z⁻¹ in the sum, and so N₀ = 1/(z − 1), which is negative for z < 1; the correct N₀ = z/(1 − z) is about 1/(1 − z) near z = 1.)" That also removes the unclear "it" in "it is about 1/(1 − z)", which can be read as Wen's expression (which is ≈ −1/(1 − z)). |
| 3 | warning | After formula "Energy of the ideal Bose gas" (p. 59): "Wen notes that integrating g_ν(z)/z from 0 to z gives g_{ν+1}(z)" | The boxed identity on p. 59 reads (1/z)∫₀^z dz̃ g_k(z̃) = g_{k+1}(z): the 1/z is outside the integral, which is false (it would give Σ zᵐ/(mᵏ(m+1))). | States the correct identity ∫₀^z g_ν(z̃)/z̃ dz̃ = g_{ν+1}(z) and attributes it to Wen. | Keep the correct form but say so: "(Wen's box puts the 1/z outside the integral; it belongs inside.)" Rule 4: do not repeat slips, but say briefly where the page differs. |
| 4 | info | Formula "Heat capacity below the transition" (p. 60) | p. 60 writes U = (3/2)k_BT g_{5/2}(1)/λ³ (that is U/V; the V is missing), then C_V with the V restored. | U written with the factor V. | Optional bracket "(the notes drop V in U)". Harmless. |
| 5 | info | Section "Condensates in the laboratory", N₀ = N − (V/λ³)g_{3/2}(1) | p. 61 "N₀ = N  V/λ³ g_{3/2}(1)": no minus sign is visible at 250 dpi (may be a faint stroke lost in the scan; uncertain). | Correct form, with the minus. | None needed; noted for completeness. |
| 6 | info | Formula "Number of bosons fixes the chemical potential", at="p. 56" | p. 56 has N = V∫d³k/(2π)³ 1/(e^{β(ε_k−μ)} − 1) but does not define ε_k there; ε_k = ħ²k²/2m first appears on p. 59 (pressure). | Both in one formula cited to p. 56. | Optional: "p. 56 (ε_k from p. 59)", or move ε_k to the text. |
| 7 | info | "Condensation" section, reservoir picture | p. 57: "adding boson to k = 0 level cost energy μ for each boson", μ = "energy level of particle reservoir"; the reservoir plus system are boxed and labelled "canonical ensemble". | Cost ε₀ − μ = −μ; omits the "canonical ensemble" label of the reservoir + system box. | Fine physics (the page's sign convention is the consistent one). Optionally add that reservoir and system together form a canonical ensemble, so the free energy is what is compared. |
| 8 | info | Cosmology callout and leadsTo 8.286 Lecture 17 | The 8.286 page (caption of its spectrum plot) says Guth argues from counting states and does not write the Bose–Einstein or Fermi–Dirac distributions down. | leadsTo: "the boson part rests on the Bose distribution of this chapter with zero chemical potential". | Physically correct and not a misattribution, but could read as if Guth uses the distribution. Optional: "…rests on the Bose distribution with zero chemical potential, which Guth uses without writing it out". |
| 9 | info | Laboratory section: "the first atomic condensates needed laser and evaporative cooling to millionths of a kelvin" | Not in the notes (p. 61 gives only the 1.5 μK estimate). | Page's own historical remark. | True (1995 condensates were at ~0.1–1 μK). Fine as is; "below a microkelvin" would be more exact. |

The slips the page does flag were all checked on the images and are real:
- p. 55, product: last factor printed 1/(1 − e^{β(ε_k−μ)}) (minus sign missing). Confirmed.
- p. 55, boxed Bose distribution: 1/(e^{−β(ε_k−μ)} − 1). Confirmed.
- p. 58, N₀ = 1/(z − 1). Confirmed (see finding 2 for its cause).
- p. 60, gas-phase C_V = k_BV[(15/4)g_{5/2}(z)/λ³ − (9/4)g_{3/2}(z)/g_{1/2}(z)]: second term lacks g_{3/2}/λ³. Confirmed; the page's corrected form agrees with dU/dT at fixed N (my own check below, and calcs `cv-gas-formula`).
- p. 61, helium: ρ = 0.12 g/cm³, n = 1.8 × 10²² cm⁻³, "T_c = 1.8 K, actual T_c = 2.17". Confirmed; 1.8 K does not follow (see below).
- p. 61, N(k)dk = V 4πk² 1/(e^{β(ε_k−μ)} − 1): no (2π)³. Confirmed.

## Arithmetic and answer checks
Recomputed in Python (mpmath polylog/zeta; CODATA ħ, k_B, u):
- ζ(3/2) = 2.61238, ζ(5/2) = 1.34149; (15/4)ζ(5/2)/ζ(3/2) = 1.92567 → 1.93. Correct.
- Sodium, m = 22.99 u, n = 10¹⁴ cm⁻³: T_c = 1.506 μK → 1.5 μK. Wen's number is correct.
- Helium: n = 120/(4.0026 × 1.6605 × 10⁻²⁷) = 1.805 × 10²⁸ m⁻³ = 1.8 × 10²² cm⁻³; T_c = 2.763 K → 2.76 K / 2.8 K. Correct. (Wen's 1.8 K would need n ≈ 9.5 × 10²⁷ m⁻³, so it is not a rounding of his own numbers.)
- Condensate fraction: 1 − 0.9^1.5 = 0.146 → 0.15; 1 − 0.5^1.5 = 0.6464 → 0.646 / 0.65; 0.5^1.5 = 0.354; distractor 1 − 0.5³ = 0.875 → 0.88. All correct.
- Potassium-41 worked example: m = 40.96 u = 6.8016 × 10⁻²⁶ kg; 2πħ²/(mk_B) = 7.441 × 10⁻²⁰ K m²; (n/2.612)^{2/3} = 7.155 × 10¹² m⁻²; T_c = 5.32 × 10⁻⁷ K; λ_c = (2.612/n)^{1/3} = 0.374 μm; n^{−1/3} = 0.271 μm; N₀ = 64,645 → "about 64,600"; 1 − z = 1/N₀ = 1.547 × 10⁻⁵ (exact from N₀ = z/(1 − z): 1.5469 × 10⁻⁵, same); μ/k_B = −(T_c/2)/N₀ = −4.1 × 10⁻¹² K; C_V = 1.92567 × 0.3536 = 0.681 Nk_B. All correct. ⁴¹K is a boson (19 p, 22 n, 19 e). The example is original (Wen uses Na and He).
- Plot expansion coefficients: the printed coefficients of g_{3/2}, g_{5/2}, g_{1/2}(e^{−s}) equal Γ(1 − ν)s^{ν−1} + Σ_{k=0}^{5} ζ(ν − k)(−s)^k/k! to all printed digits (checked term by term). Against polylog the truncated series is within 5 × 10⁻⁸ for s ≤ 0.5, 7 × 10⁻⁶ at s = 1, and 2–5 × 10⁻⁴ at s = 2 (z = 0.135, the plot's lower end). The four-term small-z branch differs from g_{3/2} by 5 × 10⁻⁶ at z = 0.135–0.14. Both well below plotting resolution; the overlap 0.135 < z ≤ 0.14 of the two g_{3/2} branches is invisible.
- C_V gas branch: from polylog, C_V/Nk_B = 1.919 at z = 0.9999 (T/T_c = 1.009), 1.860 at z = 0.99, 1.742 at z = 0.9, 1.587 at z = 0.5 (T/T_c = 2.60), tending to 1.5; meets the condensed branch at 1.93. Caption is correct. The corrected gas-phase formula reproduces dU/dT at fixed density (calcs entry `cv-gas-formula`, which I read and agree with).
- Quiz 1 (answer index 1): correct; explanation correct (μ > 0 with ε₀ = 0 gives ⟨n₀⟩ = 1/(e^{−βμ} − 1) < 0).
- Quiz 2 (answer index 2, "About 2.8 K"): correct. The distractor 1.8 K is the notes' printed value and the explanation says so. Fine.
- Quiz 3 (answer index 2, 0.65): correct.
- Quiz 4 (answer index 2): correct; explanation correct.
- Flashcards: all five correct (forms match p. 56, 57, 58, 60 and the corrected C_V).
- Callout: g = 2 + (7/8)(6 + 4) = 10.75. Correct and matches the 8.286 Lecture 17 page.
- Derivation steps written by the page (Gaussian integral m^{−3/2}λ^{−3}, ε e^{−mβε} = −(1/m)∂_β e^{−mβε}, ∂λ^{−3}/∂β = −(3/2)λ^{−3}/β, ∂ε_k/∂V = −(2/3)ε_k/V, P ∝ T^{5/2} in the condensed phase, infinite slope of g_{3/2} at z = 1 since g'_{3/2} = g_{1/2}/z) are all correct and match p. 56 and p. 59 where Wen has them.
- calcs/8.08/ideal-bose-gas-condensation.yaml: every entry read; formulas and expected values agree with my recomputation and with the page text. The `g-count` entry cites reading1 p. 55 with a note that the count is from 8.286 Lecture 17; acceptable.

## Formula citations
| Formula | at= | In the notes there? |
|---|---|---|
| Grand partition function | p. 55, point ③ | Yes (sign slip flagged). |
| Bose distribution | p. 55 | Yes, boxed (sign slip flagged). |
| Number fixes μ | p. 56 | Yes; ε_k = ħ²k²/2m is from p. 59 (finding 6). |
| Classical limit | p. 56 | Yes, λ boxed there. |
| Density, nλ³ = g_{3/2}(z) | p. 56 | Yes, boxed. |
| T_c and n_c | p. 57 | Yes, both boxed. |
| Bosons in the condensate | p. 58 | Yes. |
| Lowest level occupation | p. 58 | Yes, corrected (findings 2). |
| Grand potential | p. 59 | Yes ("thermal potential"). |
| Pressure and energy, PV = (2/3)U | p. 59 | Yes, boxed. |
| Energy of the ideal Bose gas | p. 59 | Yes, last line of p. 59. |
| Equations of state (three boxes) | p. 60 | Yes, top of p. 60. |
| C_V below T_c | p. 60 | Yes, boxed (finding 4). |
| C_V above T_c | p. 60 | Yes, boxed, corrected and flagged. |
| Momentum distribution | p. 61 | Yes, (2π)³ restored and flagged. |

All citations point at the right handwritten page; no off-by-one errors.

## Coverage and order
Wen's point ③ runs pp. 55–61 (p. 62 starts point ④, "Interacting bosons and superfluidity", covered by the next page). The page follows Wen's order exactly: Q_G and the oscillator picture with the energy-cost diagram (p. 55) → occupation numbers, classical limit, g_{3/2} with the T₁ > T₂ sketch (p. 56) → no solution, T_c / n_c, reservoir argument, μ(T) sketch for three gases (p. 57) → condensed state, order parameter, energy-distribution sketch, finite system with the two sketches (p. 58) → grand potential, P, PV = (2/3)U, U and g_ν identities (p. 59) → boxed equations of state, P–V isotherms, C_V condensed, the four low-T laws with the He-4 sketch, C_V gas phase and its cusp sketch (p. 60) → ultracold atoms, Na and He estimates, momentum distribution, time of flight, interference (p. 61). Nothing in pp. 55–61 is left out, apart from the minor "canonical ensemble" label (finding 7). Additions by the page: the potassium-41 example, the per-boson form of C_V, the remark on laser/evaporative cooling, and the interpretation of interference as coherence; all are presented as the page's own.

## Licensing
- OCW resource page: CC BY-NC-SA 4.0; no "All rights reserved" or "Courtesy of" notice on the resource page or on the scanned pages read (pp. 48, 55–62).
- The page has no images: its three graphs are generated `<Plot>`s from formulas. None of Wen's sketches (energy-cost ladder, μ(T), P–V isotherms, momentum distribution, time of flight, interference) is redrawn; they are described in words only. No Huang figure or other third-party material.
- No OpenStax or LibreTexts material.
- Paraphrase: Wen's notes are terse keywords and equations; the page's prose is its own. Closest echo is "As we add more bosons we cannot increase μ further" → "adding more, we cannot raise μ further", a short phrase. Acceptable.

## Notes
- Symbols (data/symbols.json, meanings scoped to this slug): all symbols used have a page meaning, units are sensible. One gap (warning): **m** is scoped only as "The mass of one boson", but on this page m is also the summation index in Σ zᵐ/m^{3/2}, Σ zᵐ/m^{5/2} and e^{−mβε_k} (Wen's notation). A reader tapping m in the density or energy formula gets "mass". Suggested fix: add a second page-scoped meaning or reword ("the mass of one boson; in the sums Σ zᵐ/mᵛ, the summation index m = 1, 2, …"), or rename the index (e.g. j) on the page. Cosmetic: the ν meaning text writes "Σ zᵐ/mᵛ" with a superscript v for ν (Unicode has no superscript ν); consider "m^ν".
- Similarly **k** is "the size of the wave vector", while the page also uses k as the label of a level (n_k, Σ_k, "level k"); this is standard and the n_k / ε_k entries cover it, so info only.
- Em dashes: none on the page.
- Links checked: photon-and-phonon-gases, interacting-bosons-gross-pitaevskii, ising-model-mean-field, information-equipartition-ideal-gas (8.08), and 8.044 bose-einstein-condensation and grand-canonical-ensemble all exist. The intro's claim that the 8.044 page found T_c and the condensate fraction matches that page's summary.
- Callout: the photon statement (μ = 0, no conservation, no condensation) and g = 10¾ with the 7/8 fermion factor match the 8.286 Lecture 17 page. See finding 8 for a wording nuance.
- Worked example uses the uniform-box formulas for a trapped cloud "held at a density"; that is stated as an assumption and fine for an estimate.

## Numbered findings (summary for the author)
1. **error**, "Condensation" section, μ(T) paragraph: the classical-gas curve in Wen's p. 57 sketch rises from zero to a positive maximum before falling; the page says it "falls from the start". Fix the description.
2. **warning**, "No phase transition in a finite system": the notes' sum has z in place of z⁻¹ (the cause of N₀ = 1/(z − 1)); say so, and make "it is about 1/(1 − z)" refer clearly to the corrected N₀.
3. **warning**, after "Energy of the ideal Bose gas": Wen's boxed identity puts 1/z outside the integral; the page gives the correct form as Wen's. Add a short bracketed note.
4. **warning**, data/symbols.json: m on this page is also the summation index; its only page meaning is "mass of one boson". Add/reword the meaning or rename the index.
5. info, "Heat capacity below the transition": the notes' U lacks V (optional note).
6. info, p. 61 N₀ line: minus sign not visible in the scan (uncertain; no change needed).
7. info, "Number of bosons fixes the chemical potential": ε_k = ħ²k²/2m is from p. 59, not p. 56.
8. info, reservoir paragraph: Wen labels reservoir + system a canonical ensemble; optional mention.
9. info, leadsTo/callout 8.286 L17: Guth does not write the Bose distribution out; optional wording.
10. info, laboratory section: "millionths of a kelvin" could be "below a microkelvin".

## Resolution (2026-11-19, by the page author)

1. μ(T) for a classical gas: now described as μ = k_BT ln(nλ³), starting at zero at T = 0, rising to a positive maximum and falling through zero, with a note that the classical formula fails at low T.
2. Finite system: the bracket now names both slips (z e^{βε} for z⁻¹e^{βε} in the sum, hence N₀ = 1/(z − 1)) and says N₀ ≈ 1/(1 − z) for z near 1.
3. The g_ν identity: a bracket now says Wen's box puts the 1/z outside the integral, a slip.
4. Symbol m: this page's meaning now also covers the summation index m = 1, 2, 3, ….
7. ε_k = ħ²k²/2m removed from the p. 56 formula and stated in the text.
5, 6, 8, 9, 10: info only; left as they are (1.5 μK is indeed millionths of a kelvin).
