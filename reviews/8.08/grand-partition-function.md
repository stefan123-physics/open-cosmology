---
page: content/year-4/8.08/grand-partition-function.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/grand_canonical/ (read: resource page; CC BY-NC-SA 4.0 footer, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/8fc1b022e964e44ab41b87b5f8cd45cf_grand_canonical.pdf (read as page images: handwritten pp. 28, 29, 30 at 160 dpi, p. 31 at 90 dpi; handwritten, no text layer)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read only pp. 48 and 56, to check the forward links)
verdict: pass-with-notes
---

# Review: The grand partition function and the grand potential

Scope: notes pp. 28-30 (the opening sketch and points 1 to 3). In the PDF, page 2 is handwritten p. 30 and page 3 is p. 29; the page's citations use the handwritten numbers and are all correct. I checked every formula, attribution, number, quiz answer and flashcard against the page images. No errors. Two warnings: the cosmology callout's "grand canonical photon gas" goes against Wen's own Chapter VII, and the worked example's μ leaves out N₂'s rotations without saying so.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout "Particle numbers that are not fixed"; `leadsTo` 8.286 L16 ("in this chapter's language is a grand canonical system with zero chemical potential"); `leadsTo` 8.08 L7 | Bose gas notes p. 48 (Chapter VII, point 1b): photons have "No particle number conservation → Canonical Ensemble", with the margin note "no Grand canonical ensemble". Wen sums the **canonical** Q over the occupation numbers n_k of photon states. The grand canonical ensemble, with μ, comes in only for massive bosons (p. 56). | Black-body radiation "is a grand canonical photon gas at μ = 0", and the Bose-Einstein distribution "behind it" comes from "summing the grand partition function" in the Bose gas chapter. | The physics is equivalent: with N summed freely, the canonical Q equals Q_G at μ = 0. But the page presents it as the way the course does it, and Wen says the opposite. Reword, e.g.: "Photons ... their number is not conserved, so Wen's Bose gas chapter treats them in the canonical ensemble, summing freely over photon numbers; that is the same as a grand canonical ensemble with μ = 0." In the L7 `leadsTo`, say that massive bosons get the grand partition function and photons the free sum. |
| 2 | warning | Worked example, step "Density, thermal wavelength and μ" | (our example; not in the notes) | Treats N₂ with the structureless-gas result μ = k_BT ln(nλ³) = −15.6 k_BT = −0.40 eV. | Correct for point particles, but a real N₂ molecule has a rotational partition function q_rot ≈ T/(2Θ_rot) ≈ 300/(2 × 2.88) ≈ 52, which adds −k_BT ln q_rot ≈ −3.95 k_BT. So μ ≈ −19.5 k_BT ≈ −0.50 eV (approximate; vibrations add almost nothing at 300 K). The density, the box numbers and the fluctuations do not change. Say "treating the molecules as structureless points (rotations would lower μ by about 4 k_BT)", or use argon (40 u). With argon, recompute λ, nλ³ and μ and update the calcs. |
| 3 | info | "Pressure, entropy and particle number from Ω", first sentence | p. 30: ∂ ln Q_G/∂V = −β⟨∂E_{n,N}/∂V⟩ = +βP, with "Pressure" under the brace for −∂E/∂V. | "brings down −β ∂E_{n,N}/∂V, the force on the walls per unit area" | As written, the apposition makes −β∂E/∂V the pressure. Suggest "brings down −β ∂E_{n,N}/∂V; −∂E_{n,N}/∂V is the force on the walls per unit area". |
| 4 | info | "The ideal gas, summed exactly", marked "our example" | p. 31 (point 4a, the companion page's material) derives μ = k_BT ln(nλ³) and Ω = −V e^{μ/k_BT}/λ³ for the ideal gas by minimising A − μN. | Gets the same results by summing Q_G exactly and calls the whole section our example. | The exact sum e^{zV/λ³}, the variance check and the Poisson distribution are indeed not in the notes, so "our example" is fair. Optionally add that the notes reach μ and Ω on p. 31 by the largest-term route ([next page](/courses/8-08/equal-chemical-potentials)), so the two agree. |
| 5 | info | Formula "Second derivative of Ω" | p. 29: "= β⟨N²⟩ − (⟨N⟩)²", missing the bracket around ⟨N²⟩ − ⟨N⟩², although the line above has β on both terms. | β(⟨N²⟩ − ⟨N⟩²), corrected without comment. | The correction is right. Under rule 4, optionally add "(the notes drop the bracket)". |
| 6 | info | Formula "Grand partition function as a sum over N" | p. 28 boxed fugacity: the exponent reads like "βN" or "βν" in the scan. Uncertain: it may just be a hastily written μ. p. 56 clearly writes z = e^{βμ}. | z = e^{βμ} | Correct as is. No change needed. Since the scan is ambiguous, I would not add a slip note. |
| 7 | info | Intro: "Notation follows the notes, which follow Huang's textbook: the grand partition function is Q_G ... and the thermodynamic potential is Ω" | (Notes do not mention Huang on these pages.) | Credits Q_G and Ω to Huang. | Uncertain. I did not check Huang here. From memory, Huang writes the grand partition function as a script 𝒬 and uses z, Q_N and A, but I am not sure he uses Ω for the grand potential (that is Landau-Lifshitz's notation). Safer: "Notation follows the notes (Q_N, A and z as in Huang's textbook)". |
| 8 | info | Formula "Gaussian distribution of N" | p. 29: e^{βμN}e^{−βA_N} ≃ e^{−½β ∂²A_N/∂N²|_{N̄}(N − N̄)²}, with no prefactor | Adds "const ×" | A correct improvement (the notes' line omits the factor e^{−β(A_N̄ − μN̄)}). No change. |

## Formula-by-formula check
- "Energy of system plus particle reservoir" (p. 28, point 1): E_{n,N} + N_res μ = E_{n,N} − Nμ + N_tot μ, with "constant & droped" under N_tot μ. Matches.
- "Grand partition function" (p. 28, point 1): Σ_{n,N} e^{−β(E_{n,N} − Nμ)} = Q_G, "partition function of the combined system or grand partition function of the system". Matches.
- "Grand partition function as a sum over N" (p. 28, point 1): Q_G(μ,V,T) = Σ e^{βμN} Q_N(V,T) = Σ z^N Q_N(V,T), with z boxed as the fugacity. Matches (see #6).
- "Mean particle number" (p. 29, point 2): the ratio of sums and the boxed ⟨N⟩ = −∂Ω(μ,V,T)/∂μ. Matches. The two "∝ prob." annotations (for N particles in the nth state, and for N particles) are rendered in the text above the formula.
- "Thermodynamic potential" (p. 29, boxed "Thermopotential Ω ≡ −k_BT ln Q_G"). Matches.
- "Weight of N particles" and "Grand partition function from its largest term" (p. 29): "Let N̄ maximize e^{βμN}Q_N = e^{βμN}e^{−βA_N}"; Q_G ≈ e^{βμN̄}Q_N̄ = e^{−β(A_N̄ − μN̄)} = e^{−βΩ} ⇒ boxed Ω = A − μN and boxed N̄ ≈ ⟨N⟩. Matches. (The page writes N̄ = ⟨N⟩ where the notes have ≈. Fine for a large system.) The margin box "system want to maximize e^{βμN}Q_N = e^{−βΩ} or minimize Ω" is correctly rendered as Wen's margin note.
- "Gaussian distribution of N" (p. 29): matches (see #8). Variance k_BT/(∂²A/∂N²) is right.
- "Second derivative of Ω" (p. 29, "Second way"): matches, with the bracket corrected (see #5).
- "Fluctuation of the particle number" (p. 29, boxed): ⟨(N − N̄)²⟩ = −k_BT ∂²Ω(μ,V,T)/∂μ². Matches.
- "Volume derivative of ln Q_G" (p. 30, point 3): matches, including the notes' mixed (E − Nμ) / (E − μN) ordering. "= −β⟨∂E/∂V⟩ = +βP" matches.
- "Pressure from Ω" (p. 30, boxed): P = −∂Ω(V,T,μ)/∂V|_{μ,T}. Matches.
- "Ω is proportional to the volume" (p. 30): "Note Ω = Vω(T,μ) ⇒ ω(T,μ) = −P(T,μ), so Ω = −PV (boxed)", with the margin note "ω is intensive. It does not depend on extensive quantity V". Matches.
- "Entropy from Ω" (p. 30): the chain-rule expansion with N(μ,V,T), "The two terms cancel", boxed ∂Ω/∂T|_{V,μ} = −S. Matches.
- "Particle number from Ω" (p. 30): ∂(A − μN)/∂N · ∂N/∂μ − N, with the first factor marked "=0", ⇒ boxed N = −∂Ω/∂μ. Matches.

All citations (page and point) are correct. Every display equation is a `<Formula>` with `cite="reading1"` and an `at`.

## Statements marked as our additions (checked)
- "(Our remark: a real reservoir ...)" on first-order response: correctly marked as ours. The physics is correct.
- "(Our check: ...)" on how the two fluctuation formulas agree: correctly marked. ∂N/∂μ = 1/(∂²A/∂N²) follows from μ = ∂A/∂N.
- "the relative fluctuation falls as 1/√N̄": not in the notes. Unmarked, but standard and correct (info).
- "(our summary, as in 8.044): dΩ = −S dT − P dV − N dμ": correct, and the 8.044 page has it with Φ_G.
- "G = A + PV = μN" and "n = ∂P/∂μ" (marked "our addition"): correct.
- Comparison with Chapter I ("the change of the equilibrium energy dropped out of ∂A/∂T"): matches canonical-ensemble-free-energy.mdx, formula "Entropy from the free energy" (p. 4, point a).
- "Wen ... spends the chapter on what equal chemical potentials imply": p. 31 opens "4 Applications" with two classical gases exchanging particles through a common μ. Fair.

## Arithmetic and answer checks
- `npm run calc:test -- -k grand-partition-function`: 26 passed, 0 failed.
- Independent Python recomputation (k_B = 1.380649e-23, ħ = 1.054571817e-34, 1 u = 1.66053907e-27 kg): k_BT = 4.1419e-21 J ✓; m = 4.6495e-26 kg ✓ (4.65e-26); n = 2.4463e25 m⁻³ ✓; λ = 1.9048e-11 m ✓ (1.905e-11); nλ³ = 1.691e-7 ✓; ln(nλ³) = −15.59 ✓ (−15.6); μ = −0.4031 eV ✓ (−0.40, point-particle value, see #2); ⟨N⟩(1 μm³) = 2.446e7 ✓; √⟨N⟩ = 4946 ✓ (4.9e3); relative fluctuation 2.02e-4 ✓; ⟨N⟩((10 nm)³) = 24.46 ✓ (24.5); √ = 4.95 ✓ (4.9); 20% ✓.
- Plot: Poisson 25^x e^{−25}/Γ(x+1) peaks at 0.0795 and the Gaussian exp(−(x−25)²/50)/√(50π) (variance 25) at 0.0798, both inside range [0, 0.1] ✓. Caption numbers √25 = 5, 20% ✓.
- Ideal gas section: Q_G = Σ y^N/N! = e^y ✓; Ω = −k_BT zV/λ³ ✓; ⟨N⟩ = zV/λ³ ✓; μ = k_BT ln(nλ³) ✓; P = nk_BT ✓; Ω = −⟨N⟩k_BT = −PV ✓; variance −k_BT ∂²Ω/∂μ² = ⟨N⟩ ✓; P(N) = z^N Q_N/Q_G = ⟨N⟩^N e^{−⟨N⟩}/N! ✓.
- Quiz 1 (answer 1): correct. N_res = N_tot − N gives E − Nμ + const.
- Quiz 2 (answer 1, "20"): correct. Variance = ⟨N⟩ = 400, σ = 20.
- Quiz 3 (answer 0, Ω = −PV): correct. The note that the last choice holds only for the classical ideal gas is right.
- Quiz 4 (answer 1): correct, matches p. 30.
- Flashcards: all five correct. "8.044 writes Φ_G" and "Ξ" match content/year-3/8.044/grand-canonical-ensemble.mdx.

## Coverage and order
- p. 28: the nested-ensemble sketch (heat bath, system, particle reservoir; microcanonical ⊂ canonical ⊂ grand canonical) → "Three nested ensembles" ✓; point 1 → "The grand partition function" ✓.
- p. 29: point 2 in the notes' order: probability interpretation, ⟨N⟩, the Ω definition, the margin note, the largest term, Ω = A − μN and N̄ ≈ ⟨N⟩, then the two ways to get the fluctuation ✓.
- p. 30: point 3 in order: pressure, Ω = Vω = −PV, entropy, particle number ✓.
- Nothing on pp. 28-30 is left out. Added beyond the notes, and marked: the reservoir remark, the agreement check, dΩ, G = μN, the exact ideal gas sum with its Poisson plot, the worked example, the cosmology callout.

## Licensing
- The resource page is CC BY-NC-SA 4.0, with no "courtesy" or "All rights reserved" notice. Pp. 28-31 carry no such notice and no figure from a textbook.
- Wen's p. 28 sketch is described in words, not redrawn. The only graph is generated from formulas (Plot).
- The prose is rewritten. Only short standard phrases ("grand partition function", "thermodynamic potential", "fugacity") match the notes. The quotation "wants" from the margin note is short and fair.
- The worked example (N₂ in open boxes) and the ideal-gas sum are original. No OpenStax or LibreTexts material.

## Forward links
- 8.044 grand-canonical-ensemble: the page's description (reservoir entropy expansion, Fermi/Bose occupations, Ξ and Φ_G) matches that page ✓.
- 8.286 Lectures 16 and 17: black-body-radiation.mdx and radiation-dominated-universe.mdx are Lecture 16; temperature-and-decoupling.mdx and neutrinos-and-particle-counting.mdx are Lecture 17. The 8.286 pages do not use the words "chemical potential" or "grand canonical", so the μ = 0 framing is this page's own. It is physically right, but see #1 on how it differs from Wen's Chapter VII.
- 8.08 L5 (Chapter V "Random Variable"): the claim about fluctuations of large systems (central limit theorem) is fair. Chapter VI "Thermal Fluctuations" would also fit (info).
- 8.08 L7 (Chapter VII "The Bose Gas"): BEC and the Bose-Einstein distribution through μ for massive bosons are there (p. 56). For photons, see #1.

## Notes
- Symbols scoped to the page (β, λ, μ, ω, Ω, z, n, Q, A, N, Q_G, Q_N, A_N, N_res, N_tot, E_{n,N}, Q_N̄, A_N̄, A_res, Φ_G …) have correct meanings and units. The meaning of n covers both the state label and the number density, as the page uses both.
- No em dashes found in the page text.

## Resolution (2026-11-19, by the page author)

1. Photons (warning): the cosmology callout now says that Wen's Bose gas chapter treats photons with the canonical ensemble, summing freely over photon number, and that this equals a grand canonical sum with μ = 0. The 8.286 L16 `leadsTo` now says the same ("summing freely over their number gives the same result as a grand canonical sum with zero chemical potential"). The 8.08 L7 `leadsTo` now says "the partition function", not "the grand partition function".
2. μ for nitrogen (warning): the worked example now says the molecules are treated as structureless points, with their rotations ignored. The numbers are unchanged.
3. The pressure sentence now says that −∂E/∂V, not −β∂E/∂V, is the force per unit area.
4. The ideal-gas section now says that the notes reach the same results on p. 31 by keeping only the largest term, and links to the companion page.
5. The text before "Second derivative of Ω" now flags the bracket that the notes drop.
6. Fugacity exponent: no change, as the review recommends.
7. The intro now credits Huang only for Q and A.
8. No change needed.

Status set to reviewed.
