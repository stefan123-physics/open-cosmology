---
page: content/year-4/8.08/photon-and-phonon-gases.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: handwritten scan, pp. 48-54 = PDF pages 1-7, from local renders at 130 dpi, with 300 dpi crops of p. 50 (kappa), p. 53 (k_max box) and p. 54 (D(epsilon)))
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_bose_gas/ (not opened; the PDF above is its file)
  - content/year-4/8.286/black-body-radiation.mdx and cmb-spectrum.mdx (read, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: Photons and phonons: Bose gases without a fixed number

Every `<Formula>` was compared with Wen's handwritten pp. 48-54. All citations (page numbers) are right: each formula is on the page it cites. The two places where the page's formula differs from the notes (the `(2π)³` in the k-level count, the `3/(2π²)` in D(ε)) are said so on the page, and the low-temperature U and C_V are flagged as the page's own steps. Every number on the page was recomputed (below) and agrees with the calcs file. No errors; five warnings and some info items.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Remark after "Largest phonon wave vector"; copper example step "The cutoff" | p. 53: `V (4π/3) k_max³ = N_site` (no `(2π)³`), then boxed `k_max = (3N_site/V)^{1/3}`, which also drops the `4π` of the line before (from his own line it would be `(3N/4πV)^{1/3}`). Two slips, not one. | "The notes leave out the (2π)³ in the counting and box (3N_site/V)^{1/3}" and, in the example, "(Without the (2π)³, (3N/V)^{1/3} would give 6.3 × 10⁹ m⁻¹.)" The second sentence implies that dropping only the (2π)³ gives (3N/V)^{1/3}; dropping only the (2π)³ gives (3N/4πV)^{1/3} = 2.7 × 10⁹ m⁻¹ for copper. | Say: "The notes leave out the (2π)³ in the counting, and the boxed result (3N_site/V)^{1/3} also loses the 4π of the line before; with both, the factor is 6π²." In the example: "(Wen's boxed (3N/V)^{1/3} would give 6.3 × 10⁹ m⁻¹.)" |
| 2 | warning | "Partition function of the photon gas" and "Free energy of the photon gas" | p. 48 Q has no polarisation factor; p. 49 writes A = −k_BT ln Q = k_BT Σ ln(…) "× 2" with a note "two different polarization", and lower on p. 49 `A = Σ A_k = k_BT Σ ln(1 − e^{−βε})` without the 2. | Q = ∏_k 1/(1 − e^{−βε_k}) ("polarisation aside for now"), then A = −k_BT ln Q = 2k_BT Σ ln(…). As written the middle equality is false by a factor 2 (−k_BT ln of that Q gives k_BT Σ ln, not 2k_BT Σ ln). The notes have the same looseness, and also drop the 2 again in A = ΣA_k (not flagged). | One sentence before the A formula: "With both polarisations each k appears twice in the product, so Q is squared and" … or write the product over k and polarisation. Optionally note that Wen's A = ΣA_k on p. 49 is per polarisation. |
| 3 | warning | Copper example, step "Heat capacity at 10 K", last bracket | not in the notes (page's own claim) | "At 10 K a real metal adds a comparable heat capacity from its conduction electrons." For copper the electronic term is γT with γ ≈ 0.69 mJ mol⁻¹ K⁻² (handbook value, from memory, not checked against a source here), about 0.007 J/(mol K) at 10 K, roughly 15% of the 0.048 lattice value; electrons become comparable only near 3 to 4 K. | "…adds a smaller share from its conduction electrons (about 15% at 10 K, and more below)" or move the comparison to ~3 K. If kept, add a `kind: fact` entry with a source. |
| 4 | warning | Paragraph after "Low-temperature heat capacity"; quiz 4 choice 3 and explanation | notes p. 53 only define the Einstein model (N_site levels, ε_k = ε₀); no heat capacity is computed in pp. 48-54 | "The Einstein model … at low temperature gives C_V ∝ e^{−ε₀/k_BT}". The page's own addition, not marked as such; the full low-T form is C_V ≈ 3Nk_B(ε₀/k_BT)² e^{−ε₀/k_BT}. | Mark as the page's addition ("Wen only defines it; worked out, it gives …") and write the prefactor or say "falls off exponentially". |
| 5 | warning | data/symbols.json, `n` scoped to this page | — | The meaning is "the number density of photons, N/V", but the page also uses a bare n for the oscillator quantum number ("whose energies are $n\hbar\omega + \frac12\hbar\omega$", section "A collection of oscillators"). The popup there would be wrong. | Add the second use to the meaning ("…; in nħω + ½ħω, the oscillator's quantum number") or write that expression with n_k. |
| 6 | info | Section "Phonons", difference 3 | p. 53: four sketched waves on a chain of atoms, the last passing through every atom at a node; boxed "# of k-levels = # of lattice site". | The aliasing explanation ("a wave shorter than twice the spacing looks … exactly like a longer one") is the page's reading of the sketch. Correct physics, but for the Debye sphere the shortest wavelength is 2π/k_max ≈ 1.6 × the mean spacing (copper: 0.37 nm vs n^{−1/3} = 0.23 nm), not 2×; the "twice the spacing" holds for a 1D chain or along a cube axis. | Optional: "on a chain, shorter than twice the spacing"; the example's "of the order of the spacing" is fine. |
| 7 | info | Section "The Debye density of states", real material | p. 54: `ε_k = v√(sin²k_xa + sin²k_ya + sin²k_za)` (dimensionally loose: needs ħ/a), sketch of k-space cube and of D(ε). | Writes `ε_k ∝ √(…)`, which avoids the units slip; "sharp peaks and kinks where the energy surfaces touch the zone boundary" is the page's interpretation of the sketch (van Hove singularities). Fine. | None needed; optionally "(the notes write v√…, which needs a factor ħ/a)". |
| 8 | info | Section "Photon density", the physical picture | p. 51 "one photon per λ³" | adds the reason "(a mode with ε ~ k_BT holds of order one photon)". Fair gloss. | None. |

Slips the page reports, verified in the scan:
- κ printed "= 0.23…" (p. 50, 300 dpi crop): **real**. The true value is 0.2436.
- k_max box `(3N_site/V)^{1/3}` with no (2π)³ in the line before (p. 53): **real**, but there is a second slip in the same box (finding 1).
- D(ε) last line `3/(2π)` instead of `3/(2π²)` (p. 54, 300 dpi crop): **real**; the line above has `3/(2π²)`.
- Not flagged by the page: the missing ×2 in p. 49 `A = ΣA_k` (finding 2) and `ε_k = v√…` without ħ/a (finding 7). Both are minor.

## Arithmetic and answer checks
Recomputed independently (plain Python, midpoint quadrature; CODATA k_B, ħ, c; R = 8.314462618):
- κ = ∫x²/(eˣ−1)/π² = 0.24359; 2ζ(3) = 2.40411; ζ(3) = 1.20206. Page 0.2436, 2.404, 1.202: correct.
- ∫x³/(eˣ−1) = 6.49394 = π⁴/15: correct. Mean photon energy 6.4939/2.4041 = 2.7012 k_BT: correct (2.70).
- σ = π²k_B⁴/15(ħc)³ = 7.5657 × 10⁻¹⁶ J m⁻³ K⁻⁴; cσ/4 = 5.6704 × 10⁻⁸: correct.
- Occupation plot: 1/(e^0.5 − 1) = 1.5415: correct (1.54). Caption claims (fermion ≤ 1/2, three curves agree for βε ≫ 1) correct.
- Planck plot: peak at x = 2.82144 (root of 3(1 − e⁻ˣ) = x), height 1.42144: correct. y-axis unit (k_BT)³/(π²ħ²c³) checked: u = (ħ/π²c³)(k_BT/ħ)³ x³/(eˣ−1). Correct. Area π⁴/15 = 6.49: correct.
- ⟨cos θ⟩ = (1/2)/1: correct. Pressure chain: −∂A/∂V = −2Σ(∂ε/∂V)⟨n⟩ with ∂ε/∂V = −ε/3V gives U/3V: correct.
- Furnace, 1500 K: k_BT/ħc = 6.5505 × 10⁵ m⁻¹; n = 6.847 × 10¹⁶ m⁻³ (6.85 × 10¹⁰ cm⁻³); T⁴ = 5.0625 × 10¹²; U/V = 3.830 × 10⁻³ J/m³; P = 1.277 × 10⁻³ Pa = 1.26 × 10⁻⁸ atm; 2.70 k_BT = 5.59 × 10⁻²⁰ J = 0.349 eV; power through 1 cm² = 28.71 W; 2⁴ = 16. All correct.
- Copper: n from 8.96 g/cm³ and 63.546 g/mol = 8.491 × 10²⁸ m⁻³ (correct); k_max = 1.7131 × 10¹⁰ m⁻¹; 2π/k_max = 0.367 nm; (3n)^{1/3} = 6.34 × 10⁹ m⁻¹; v = k_B·343/(ħ k_max) = 2621 m/s; T/T_D = 0.02915; cube 2.478 × 10⁻⁵; 12π⁴/5 = 233.78; C = 0.04817 J/(mol K); 3R = 24.94; ratio 518 ("some 500"). All correct. T_D = 343 K for Cu is the usual tabulated value (not re-sourced here).
- Debye limits: small u, (3/u³)(u³/3 − u⁴/8 + …) = 1 − 3u/8 (correct); large u, (3/u³)(π⁴/15) = π⁴/(5u³) (correct); U = 3Nk_BT·π⁴T³/(5T_D³) = (3π⁴/5)Nk_BT⁴/T_D³ and C_V = (12π⁴/5)Nk_B(T/T_D)³: correct. ∫D dε = 3N_site with k_max = (6π²N/V)^{1/3}: correct.
- CMB callout at 2.725 K: n = 4.105 × 10⁸ m⁻³ = 410.5 cm⁻³ (page "411"; calcs tolerance ±1, fine, though 410 or 411 both round from 410.5), U/V = 4.172 × 10⁻¹⁴ J/m³: correct. 2.725 K is in calcs/values.yaml as the Guth 2013 value.
- Quiz 1: answer 1 correct (μ = ∂A/∂N = 0). Quiz 2: answer 0 (6.85 × 10¹⁶) correct; distractor explanations (4.1 × 10⁸ at 2.725 K; 2.8 × 10¹⁷ without κ) correct. Quiz 3: answer 1 correct and explanation right. Quiz 4: answer 2 correct; explanation correct (see finding 4 on the Einstein wording).
- Flashcards: all five statements checked and correct.
- calcs/8.08/photon-and-phonon-gases.yaml: every number on the page has an entry with the right formula and expected value. `cu-kmax-notes` (`origin: slip`) is labelled "without the (2π)³", which carries the wording of finding 1.

## Coverage and order
- The page follows Wen's order on pp. 48-54 exactly: ① photons (bosons, no number conservation → canonical ensemble; labelling states; occupation numbers; Q), p. 49 (A, independent subsystems, oscillators, P(n_k)), p. 50 (⟨n_k⟩ boson/fermion, Σ → V∫d³k/(2π)³, N, n, κ), p. 51 (physical picture, U, Stefan's law, classical divergence, Planck's u(ω,T), 2.73 K sketch), p. 52 (black-body radiation through a hole, ⟨cos θ⟩, W/A, power spectrum, pressure), ② phonons p. 53 (three differences, k-level count, k_max, Debye and Einstein models), p. 54 (Debye D(ε), real material, Debye specific heat, D(u) and limits, C_V sketch).
- Nothing in pp. 48-54 is left out. The middle line of D(ε) (`3V/(2π²) ∫dk k² δ(ε − ħvk)`) is skipped; fine.
- Additions (all reasonable): the two worked examples, the Dulong-Petit name, the Einstein low-T behaviour (finding 4), the 8.286 callout.
- Wen's sketches (level-occupation ladder p. 48, cavity with hole p. 52, chain waves and k-sphere p. 53, Brillouin cube, D(ε) and C_V sketches p. 54) are described in words, not redrawn; the page's two plots are generated from formulas.

## Licensing
- Source is MIT OCW 8.08 (CC BY-NC-SA). No "All rights reserved" or "Courtesy of" notice appears on pp. 48-54. No figure is copied; no Huang, OpenStax or LibreTexts material found.
- The notes are terse handwritten equations; the page's prose is its own. Formulas necessarily match; no copied sentences.

## Notes
- Forward links: the callout and leadsTo are fair. 8.286 `black-body-radiation` (Lecture 16) gives u = g(π²/30)(kT)⁴/(ħc)³, n ∝ g*ζ(3)T³ and s ∝ T³ with g = 2 for photons (equal to Wen's σ for g = 2) and computes today's radiation energy density (4.17 × 10⁻¹⁴ J/m³ for photons, the same number as the callout). The extra species (neutrinos, e⁺e⁻) that make up "how much radiation the early universe held" are mostly Lecture 17, so "Guth uses the same T⁴ and T³ laws, with a factor counting the spin states" is accurate for Lecture 16. `cmb-spectrum` (Lecture 18) covers the measured CMB spectrum and COBE's black-body fit, as claimed.
- The P = (2/3)U/V claim about the next page is borne out by `ideal-bose-gas-condensation.mdx` (PV = 2U/3, notes p. 59).
- Symbols (data/symbols.json, 52 meanings scoped to this page): checked, correct with correct units, apart from finding 5. Small points: the `A` unit field "J (free energy), m² (area)" is unusual but accurate; `D` carries unit 1/J while also describing the dimensionless 𝒟(u) in its text. That is acceptable but could confuse.
- No em dashes on the page (the σ symbol meaning uses an en dash in "Stefan–Boltzmann", which is allowed).
- Prerequisites `information-equipartition-ideal-gas`, `identical-particles`, `thermal-radiation` exist; the intro's description of the 8.044 road to Planck's law matches those pages' summaries.

## Resolution (2026-11-19, by the page author)

1. k_max: the remark now says the boxed (3N_site/V)^{1/3} drops both the (2π)³ and the 4π of Wen's own line; the copper example says "Wen's boxed (3N/V)^{1/3} would give 6.3 × 10⁹ m⁻¹" (calcs `cu-kmax-notes` updated).
2. Polarisations: the text now says Q counts one polarisation and the full partition function is Q², and the free-energy formula reads A = −k_BT ln Q². The notes' missing ×2 in A = ΣA_k is flagged in brackets.
3. Copper electrons: "a comparable heat capacity" replaced by "a further heat capacity, proportional to T"; no unsourced number.
4. Einstein model: now "falls roughly as e^(−ε₀/k_BT)" and marked "(this comparison is not in the notes)".
5. Symbol n: the oscillator quantum number is now written n_k (whose meaning on this page is the occupation number), so the bare n is only the photon density.
6. Shortest wavelength: now said "on a chain of atoms".
7, 8. Info items: no change needed.
