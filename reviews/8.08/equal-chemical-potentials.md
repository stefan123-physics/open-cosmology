---
page: content/year-4/8.08/equal-chemical-potentials.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/grand_canonical/ (read: resource page; CC BY-NC-SA 4.0 footer, no "courtesy" or "all rights reserved" notice; its PDF link is the page's reading1 URL)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/8fc1b022e964e44ab41b87b5f8cd45cf_grand_canonical.pdf (read as page images: handwritten pp. 31-35 = PDF pages 4-8 at 160 dpi; handwritten, no text layer)
  - content/year-4/8.286/temperature-and-decoupling.mdx, content/year-5/8.902/inflation-scalar-field.mdx, content/year-5/8.902/big-bang-nucleosynthesis.mdx, content/year-4/8.08/_course.json, content/year-4/8.08/ising-model-mean-field.mdx, content/year-3/8.044/grand-canonical-ensemble.mdx (read, for the forward and cross links; the 8.286 Lecture 17 transcript itself was not read)
  - Wen, Chapter VIII (the_fermi_gas.pdf), first page only, to confirm the leadsTo target
verdict: pass-with-notes
---

# Review: Equal chemical potentials: gases, adsorption, reactions and domain walls

Scope: notes pp. 31-35, point 4 (a) to (d). Every formula, citation, number, quiz answer and flashcard was checked against the page images, and every number recomputed by hand and with an independent Python script. `npm run calc:test -- -k equal-chemical`: 62 passed. No errors; one warning (a slightly inaccurate slip note) and some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after "Ω of the ideal gas" | p. 31: "Ω = N k_BT(μ/k_BT − 1) − μN = −N k_BT = −V (1/λ³) e^{μ/k_BT}", then boxed "Ω = −V (1/λ³) e^{μ/k_BT}". The factor k_BT is missing from the last expression on the unboxed line **and** from the box; only the middle "−Nk_BT" has it. | "The boxed version in the notes leaves out the factor k_BT; the line above it has it." | Say instead: "The last form on the notes' line, and the boxed result, leave out the factor k_BT; the middle step −Nk_BT has it." |
| 2 | info | "Chemical potential of an ideal gas", next sentence | (not in notes) | "μ is negative, and large compared with k_BT" | "large in magnitude compared with k_BT" (|μ| ≫ k_BT follows from ln(nλ³) ≪ −1). |
| 3 | info | Hydrogen numbers, p. 35 | Wen's table: m_p = 1.68 × 10⁻²⁴ g | Quoted as Wen's | Correctly quoted. The true proton mass is 1.673 × 10⁻²⁴ g (H atom 1.674); with it the prefactor is 3.49 × 10²³ instead of 3.51 × 10²³ cm⁻³, so nothing visible changes. No change needed; optionally mention it in the rounding bracket. |
| 4 | info | "Equilibrium of a reaction", next line | p. 34: "one condition for each reaction" | "one condition for each independent reaction" | A correct refinement of Wen's wording; fine. |
| 5 | info | Ising section, last sentence of the main paragraph | (not in notes) | "in contrast to the mean-field prediction T_c = 2J/k_B found in Chapter III" | Chapter III (and this site's page) gives T_c = zJ/k_B; the chain value 2J/k_B is on that page in a section marked as going beyond the notes. Optional: "T_c = zJ/k_B, which is 2J/k_B for a chain (z = 2)". |
| 6 | info | Low-coverage remark | (8.044 page, not Wen) | "proportional to the gas density, as in the 8.044 model of a freely moving adsorbed layer" | True: 8.044's σ = λ n e^{ε₀/kT} is ∝ n. Note that 8.044's ε₀ is a positive binding energy, the opposite sign convention to Wen's "energy cost" ε₀ here. Optional half-sentence to warn the reader. |
| 7 | info | Cosmology callout | 8.286 page (temperature-and-decoupling): "That figure is not a property of hydrogen alone (the ionisation temperature depends on the density)" | Callout: Guth "stresses that the figure depends on the density"; leadsTo: "notes that it depends on the density" | "Stresses" is stronger than the 8.286 page supports; I did not read the transcript, so it is uncertain whether Guth stressed it. Use "notes" in the callout too, as in leadsTo. |

## Formula-by-formula check
- "Ω of region 1" (p. 31, point 4a): matches Ω₁ = A₁(V,T,N₁) − μN₁ = N₁k_BT(ln n₁λ₁³ − 1) − μN₁, λ₁ = √(2πħ²/mk_BT). Correct.
- "Chemical potential of an ideal gas" (p. 31): matches ∂A₁/∂N₁|_{V,T} = μ = k_BT[ln(n₁λ³) − 1] + k_BT, boxed μ = k_BT ln(n₁λ³), boxed n₁ = λ⁻³ e^{μ/k_BT}. P(N₁) ∝ e^{−Ω/k_BT} and "N₁ minimize Ω" are on the page. Correct (calcs `mu-ideal-gas`).
- "Ω of the ideal gas" (p. 31): matches, with the k_BT restored (see #1). Correct (calcs `omega-ideal-gas`); also consistent with the previous page's exact Ω = −k_BT zV/λ³.
- "Region 2" (p. 31): matches all three parts, including "A = E − ST, E is shifted by N₂V₀" and the boxed n₂ = λ₂⁻³ e^{(μ−V₀)/k_BT}. Correct.
- "Equal chemical potentials" (p. 32): matches the box ∂A₁/∂N₁ = μ = ∂A₂/∂N₁ (slip, see below), "λ₁ = λ₂ ⇒" and boxed n₂/n₁ = e^{−V₀/k_BT}; the quoted words "chemical potentials are equal in the equilibrium state" are Wen's boxed text. Correct.
- "Chemical potential of the gas in terms of the pressure" (p. 32, point 4b): matches μ = k_BT ln(nλ³) = k_BT ln(Pλ³/k_BT), P = k_BT n. Correct.
- "Weights of a filled and an empty site" (p. 32): matches, with the boxed P_n ∝ e^{−(E_n−μN)/k_BT}. Correct.
- "Fraction of sites filled" (pp. 32-33): the three forms are on p. 32; the box with the last form is on p. 33. Citation "pp. 32-33, boxed" is right. Correct (calcs `site-occupation`).
- Limits p → 1, p → 0 and "Low coverage" (p. 33): match. Correct.
- "The reaction" (p. 33, point 4c): matches 2H ⇌ H₂ + ε₀, 2H − H₂ = ε₀, boxed Σν_iX_i = ε₀, ν₁ = 2, ν₂ = −1. Correct.
- "Changes of the particle numbers" (p. 33, boxed): matches. The A_tot sentence (p. 33) carries no explicit page cite in the text; acceptable.
- "Equilibrium of a reaction" (p. 34): matches δA_tot = Σ δN_i ∂A_i/∂N_i = 0 ⇒ boxed Σν_iμ_i = 0. Correct.
- "Chemical potentials of the two species" (p. 34): matches A_H, μ_H, μ_H₂ and 2ε_H − ε_H₂ = ε₀. Correct.
- "Equilibrium condition for hydrogen" (p. 34): matches. Correct.
- "Atoms and molecules of hydrogen" (p. 34, boxed): matches n_H²/n_H₂ = (2πħ²/mk_BT)^{−3/2} 2^{−3/2} e^{−ε₀/k_BT}. Verified from λ_H₂ = λ_H/√2 (calcs `lambda-H2-ratio`). Correct.
- "Law of mass action" (p. 34, boxed, with "for: Σν_iX_i = ε₀"): matches Π(λ_i³n_i)^{ν_i} = e^{−ε₀/k_BT}. Correct.
- "Hydrogen atoms at room temperature" (p. 35): matches Wen's 3.5 × 10²³/cm³ e^{−175} = 3.5 × 10⁻⁵³/cm³ and n_H = √(2.4 × 10¹⁹ × 3.5 × 10⁻⁵³) = 2.9 × 10⁻¹⁷/cm³. Correct.
- "Domain walls as a reaction" (p. 35, point 4d): matches A + B = ε_A + ε_B = ε₀ = 4J, (λ_A n_A)(λ_B n_B) = e^{−ε₀/k_BT}, margin note "not λ_A³ since 1D", ε_A = ε_B = 2J, A = up-down wall and B = down-up wall as in Wen's sketch. Correct.
- "Density of domain walls" (p. 35): matches λ³n = λ³/v = 1/(# of states per particle), λ_A = λ_B ≈ 1, n_A = n_B ≈ e^{−2J/k_BT} per link, domain length e^{2J/k_BT}. Correct.

## Slips in the notes
- p. 31 missing k_BT: real, but the page's description of it is slightly off (#1).
- p. 32 box ∂A₂/∂N₁: verified, the second denominator reads ∂N₁. The page's note is accurate.
- p. 35 rounding 175: ε₀/k_BT = 7.24 × 10⁻¹²/(1.38 × 10⁻¹⁶ × 300) = 174.88. With 174.88 the ratio is 3.94 × 10⁻⁵³ cm⁻³ (page: 3.9), so Wen's value is 11.3% smaller (page: 11%), and n_H = 3.08 × 10⁻¹⁷ (page: 3.1). Note accurate.
- No other slips found. Minor, not worth flagging on the page: "1 atm = 10.1 N/cm² = 10⁶ dyne/cm²" (really 1.01 × 10⁶, Wen's rounding, which the page renders as "about 10⁶"); m_p = 1.68 × 10⁻²⁴ g (#3).

## Arithmetic and answer checks
Independent recomputation (Python, CODATA constants) agrees with every number on the page:
- Atmosphere: gm_O₂/k_B(300 K) = 1.258 × 10⁻⁴ /m (Wen 1.3, page unrounded 1.26); e^{−1.3} = 0.273 (0.27); unrounded e^{−1.258} = 0.284 (0.28); O₂/N₂ factor e^{−4u·g·10 km/k_BT} = 0.854 (0.85), × 1/4 = 0.214 (0.21). The 100 km turbopause is standard.
- Centrifuge: 352 u × 600²/(2k_B·300 K) = 25.40 (25.4); e^{25.4} = 1.07 × 10¹¹ (≈ 10¹¹); 3 u gives 0.2165 (0.216), e^{0.2165} = 1.242 (1.24, 24%). Direction is right: the light-to-heavy ratio is larger at the axis.
- Adsorption (N₂, 28 u, ε₀ = −0.5 eV): P₀ = 2387.8 Pa at 300 K (2.39 kPa; plot 2.388), 55 630 Pa at 350 K (55.6; plot 55.63); coverage at 101.325 kPa 97.7% (98%) and 64.6% (65%).
- Wen's hydrogen: 436 kJ/mol → 7.24 × 10⁻¹² erg, 4.52 eV; n_H₂ = 10⁶/(1.38 × 10⁻¹⁶ × 300) = 2.42 × 10¹⁹; prefactor (m k_BT/2πħ²)^{3/2}/2^{3/2} = 3.51 × 10²³ cm⁻³; × e^{−175} = 3.50 × 10⁻⁵³; n_H = 2.91 × 10⁻¹⁷ cm⁻³. 1/n_H = 3.4 × 10¹⁶ cm³, a cube of 3.25 km ("more than 3 km").
- Saha (n = 10⁹ m⁻³): right side 0.01306 at 3,500 K (0.0131) → x = 0.108 (0.11); 4.474 at 4,000 K (4.47) → x = 0.842 (0.84); half ionisation at 3,796.7 K (about 3,800 K), where 13.6 eV/k_BT = 41.57 (41.6) and 1/(nλ_e³) = 5.65 × 10¹⁷ ("about 6 × 10¹⁷"). Caption: x = 0.998 at 4,500 K, 0.0024 at 3,000 K. Plot constants 1.7999 × 10¹⁴ m⁻²K⁻¹ and 157 821 K correct. Spin-weight cancellation (2 × 2 against 4) correct.
- Ising: e^{−4} = 0.0183, 1/(1 + e⁴) = 0.0180, 1 + e⁴ = 55.6 (domains about 56 links); e^{−2} = 0.135, 1/(1 + e²) = 0.119. The exact per-link wall probability 1/(1 + e^{2J/k_BT}) for the open chain in zero field is right (links independent).
- Quiz 1: e^{−2} = 0.135, answer 0 correct; the remark that pressures differ is right. Quiz 2: answer 1 correct. Quiz 3: answer 1 (2μ_H − μ_H₂ = 0) correct, and the explanation (ε₀ is inside the μ's) is right. Quiz 4: answer 2 ("About 56") correct.
- Flashcards: all five correct.
- `npm run calc:test -- -k equal-chemical`: 62 passed, 0 failed.

## Coverage and order
- Follows Wen's order exactly: 4(a) two gases (p. 31) with the O₂ numbers and the boxed O₂/N₂ question (p. 32); 4(b) adsorption (pp. 32-33); 4(c) reactions and the law of mass action (pp. 33-34) with the hydrogen numbers (p. 35); 4(d) 1D Ising domain walls (p. 35). Nothing on pp. 31-35 is left out.
- Additions, all marked as ours: the answer to Wen's O₂/N₂ question and the turbulent-mixing remark, the centrifuge example, the Langmuir and Fermi-Dirac remarks, the N₂ adsorption plot, the internal-partition-function remark, the Saha example (and the remark that the name is not in the notes), the exact-chain check and plot.

## Licensing
- Resource page and PDF: CC BY-NC-SA 4.0, no "courtesy" or "all rights reserved" notice on pp. 31-35. Wen's sketches (potential step, reservoir, site grid, spin chain) are not reproduced; all three plots are generated from formulas.
- No text copied beyond short standard phrases; the one quoted phrase ("chemical potentials are equal in the equilibrium state") is in quotation marks and attributed. Worked examples (centrifuge, N₂ at −0.5 eV, Saha at 10⁹ m⁻³) are original; Wen's own numbers are clearly labelled as his.
- No OpenStax or LibreTexts material.

## Forward links
- leadsTo 8.286 Lecture 17: the 8.286 page has Guth's ~4,000 K for recombination and the remark that it depends on the density. The claim that the e + p ⇌ H law of mass action is "the calculation behind that number" is the page's claim, not Guth's (he does not do the Saha calculation in that lecture as far as the 8.286 page shows); worded acceptably. The page's own Saha example (half ionisation at 3,800 K for n = 10⁹ m⁻³, a density close to that of the universe at z ≈ 1100) is consistent with it. See #7 for "stresses".
- Callout, 8.902 Lecture 12: inflation-scalar-field.mdx (lecture 12) does give the Saha equation for hydrogen with η = n_b/n_γ (eq. 348). Correct. (That page puts recombination at ≈ 3,000 K; no conflict with the callout's wording.)
- leadsTo and callout, 8.902 Lecture 20: big-bang-nucleosynthesis.mdx has p + n ⇌ D + γ, calls the equilibrium law the Saha equation (eqs. 484-485) and gives kT ≈ 0.07 MeV for the deuterium bottleneck. Correct.
- leadsTo 8.08 Lecture 8: _course.json lists Chapter VIII "The Fermi Gas"; its first page builds the fermion grand partition function, which replaces the classical μ. Correct.
- Prerequisites (grand-partition-function, information-equipartition-ideal-gas, ising-model-mean-field) are appropriate.

## Notes
- No em dashes on the page; data/symbols.json has meanings scoped to this slug (not separately audited here).
- Attribution of statements is clear throughout: Wen's points, numbers and boxes are cited by handwritten page and circled point, and the page's own remarks are bracketed or marked "our".

## Resolution (2026-11-19, by the page author)

1. Missing k_BT (warning): the note now reads: "In the notes the last form of this line, and the boxed version beside it, leave out the factor k_BT; the middle step −Nk_BT has it."
2. The text now says "large in magnitude compared with k_BT".
3. No change: Wen's numbers are quoted as his.
4. No change: "independent" is a correct clarification.
5. The text now reads "T_c = zJ/k_B = 2J/k_B for a chain (z = 2)".
6. The text now notes that 8.044 uses the opposite sign for ε₀ (a positive binding energy).
7. The callout now says that Guth "notes" the density dependence, not that he "stresses" it, matching the `leadsTo`.

Status set to reviewed.
