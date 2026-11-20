---
page: content/year-4/8.08/degenerate-fermi-gas.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_fermi_gas/ (read: resource page; CC BY-NC-SA 4.0 link, no "courtesy" or "All rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read as page images: handwritten pp. 82-88 = PDF pages 7-13 at 160 dpi, with 300-400 dpi crops of the bottom of pp. 83 and 84; no text layer)
  - content/year-4/8.286/supernova-evidence.mdx and content/year-3/8.044/white-dwarfs.mdx (read, for the cosmology callout and leadsTo; the 8.286 Lecture 20 transcript itself was not reread)
verdict: needs-changes
---

# Review: The degenerate Fermi gas: metals, heat capacity and compact stars

Scope: Wen's Chapter VIII, notes pp. 82-88 (density of states, ground state, compressibility, Pauli susceptibility, low-T heat capacity, white dwarfs and neutron stars). Every formula, every slip the page attributes to the notes, every number, quiz answer and flashcard was checked against the page images and recomputed. One error (a likely misreading of a number in the notes), two warnings, some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The compressibility of a metal", last bracket ("He also quotes a compressibility of order 1/(10^6 atm)...") and calcs `wen-chi-quoted` | p. 84, end of the χ line: "χ = ... = (9/2) 1/(ε_F n) ~ 1/(10^? atm)". The exponent is written with the same closed-loop "4" as "P₀ ~ 10⁴ atm" at the foot of p. 83 (where n ~ 10²² cm⁻³ and a few eV confirm 4). It is consistent with Wen's own (slipped) formula: (2/9) n ε_F = 1.05 × 10⁴ atm for n = 10²² cm⁻³, ε_F = 3 eV; and with the very next line, "Need 10⁴ atm to reduce V → ½V". A 10⁶ would contradict both. | Reads it as 1/(10⁶ atm) and builds a contrast on it ("with the formula corrected, his n and ε_F give ... nearer 10⁴ to 10⁵ atm"). | Very likely misread (handwriting; marked uncertain only because the glyph is not a clean "4"). Say Wen estimates χ ~ 1/(10⁴ atm), which matches his own 9/2 formula and the halving pressure; the corrected formula gives a bulk modulus about three times larger (≈ 3 × 10⁴ atm for 3 eV). Update `wen-chi-quoted` in calcs. |
| 2 | warning | "The heat capacity at low temperature" formula "Low-temperature heat capacity", Summary bullet 5, flashcard 5 | p. 87: C = (π²/3) k_B²T D(μ), then D(μ) = 3N/2μ for 3D, i.e. D counts the same states as N (all spin states for electrons). | The page defines D(ε) per spin state (section 1, Summary bullet 1, Pauli section), then states C = (π²/3)k_B²T D(ε_F) "in any dimension" without saying D must now count every spin state. The bracket "(with D and N counting the same spin states)" only covers the 3D form. A reader who uses the one-spin D for electrons gets half the heat capacity. | Add after the boxed formula: "here D counts all single-particle states, both spin states for electrons (twice the one-spin D of the first section)". Same in the summary and the flashcard. |
| 3 | warning | "The compressibility of a metal", slip bracket "(The last line of the notes gives 9/2 in place of 3/2, a slip of a factor 3 in substituting C)" | p. 84: the factor 3 already enters at "χ = 9 m/(ħ²(3π²)^{2/3}) · 1/n^{5/3}" (should be 3 m/...); "= (9/2)/(ε_F n)" then follows correctly from that line. | Places the slip in the last step. | Optional precision: "the notes' second-last line has 9 for 3, which carries through to 9/2". Minor; the attribution of a factor-3 slip is correct. |
| 4 | info | "White dwarfs and neutron stars": "Replacing m_e by the neutron mass, close to m_p" | p. 88: "For neutron star we replace m_e by m_p." | Neutron mass. | Physically better; 3.357 km with m_n against 3.361 km with m_p, both 3.4 km. Fine; optionally say Wen writes m_p. |
| 5 | info | "The ground state and its pressure": "The relation PV = (2/3)U of the previous page" | p. 83 rederives it ("We have shown that VP = −V ∂ε_k/∂V = (2/3)Vε_k, ε_k ∝ V^{−2/3}", then PV = (2/3)U). | Refers back to the previous page (p. 77). | Fine; the reminder on p. 83 is left out, which is reasonable. |
| 6 | info | Section "The heat capacity", citation p. 86 | The page number on PDF page 11 looks like "85" (a second 85); it lies between 85 and 87. | p. 86. | Fine; the calcs header records it. |

## Formula-by-formula check
- "Density of states" (p. 82): matches D(ε) = V∫d³k/(2π)³ δ(ε_k − ε) "(for 3D)". Correct.
- "Number of states below the Fermi energy" (p. 82): matches; the notes' intermediate (V/(2π)³)(4π/3)k_F³ is skipped. Boxed result V/(6π²)(√(2m)/ħ)³ε_F^{3/2} matches. Correct.
- Spinless / spin-½ count and "k_F³ ~ number density" (p. 82): matches the two boxes and the "2 ×, from spin" note.
- "Density of states in three dimensions" (p. 82): confirmed, the boxed D(ε) = ∂N/∂ε = (√2/2π²)(m^{3/2}/ħ³)ε^{1/2} has no V; p. 83 uses it with V. The page's correction and bracket are accurate.
- "Ground-state energy and number" (p. 83): matches both integrals (2/5 ε_F^{5/2}, 2/3 ε_F^{3/2}). Correct.
- "Ground-state energy" U₀ = (3/5)Nε_F (p. 83 box) and "energy per particle ~ ε_F": correct.
- "Pressure of the Fermi sea" P₀ = (2/3)U/V = (2/5)nε_F with "n → k_F → ε_F" (p. 83 box): correct. Numbers n ~ 10²²/cm³, P₀ ~ 10⁴ atm, ε_F ~ a few eV ≫ k_BT ~ 1/40 eV: read correctly.
- "Electron energy as a function of volume" (p. 84): matches U₀ = N(3/5)ε_F = CNn_e^{2/3} = CN^{5/3}/V^{2/3}, C = (3/5)ħ²(3π²)^{2/3}/2m, and the margin n_{spin½} = 2k_F³/6π², k_F = (3π²n_e)^{1/3}. Correct.
- "Model for a metal" (p. 84): matches. Wen's sketch (U₀ falling, U_tot with a minimum) is described correctly.
- "Equilibrium volume" (p. 84): confirmed, both expressions show N^{5/2} and the outer exponent is +3/5. The page's N^{5/3} and −3/5 are right (checked: V₀^{5/3} = 2CN^{5/3}/3P₀). The bracket is accurate.
- "Compressibility of the electron gas" (p. 84): the chain to (9/10)/(Cn^{5/3}) matches; the page's 3/(2n_eε_F) is correct and the notes' 9/2 is wrong by a factor 3 (see finding 3 for where it enters).
- "Energies in a magnetic field" (p. 85): matches ε_↓ = ħ²k²/2m + μ_BB, ε_↑ = ħ²k²/2m − μ_BB, M = μ_B(N_↑ − N_↓). Correct.
- "Spin imbalance" (p. 85): matches ΔN = 2μ_BB D(ε_F) = 2μ_BB(√2/2π²)(m^{3/2}/ħ³)ε_F^{1/2}V. Correct (with one-spin D, which is what the page says).
- "Pauli spin susceptibility" (p. 85): confirmed the notes write (2π)² in the first form and √2·3^{1/3}/π in the second. Recomputed: 2·(√2/2π²)·m^{3/2}ε_F^{1/2}/ħ³ with ε_F^{1/2} = ħ(3π²n)^{1/3}/√(2m) gives 3^{1/3}/π^{4/3}·m n^{1/3}/ħ². The page is right; both notes' forms are wrong (the (2π)² form would give half, and √2·3^{1/3}/π matches neither). Bracket accurate. χ = (3/2)Nμ_B²/ε_F checked (one-spin D(ε_F) = 3N/4ε_F).
- "Energy and number at finite temperature", "Fixed particle number", "Heat capacity", "Temperature derivative of the occupation" (p. 86): all match, including the O(T⁻¹)/O(T⁰) "dropped" annotations. Correct.
- "Heat capacity, evaluated" (p. 87): matches, t = β(ε − μ), limits ±∞. Correct.
- I_n definition, I₀ = 1, I₂ = π²/3 (p. 87): matches; the full-line integral equals I₂ (even integrand). Checked numerically: 3.28987 = π²/3.
- "Low-temperature heat capacity" and "works for ∀ dimensions" (p. 87 box): correct (see finding 2 on what D counts).
- "Heat capacity of the 3D Fermi gas" (p. 87, boxed with "3D" and the second form): correct. Classical U = N(3/2)k_BT, C = N(3/2)k_B and the C(T) sketch levelling at (3/2)k_B: correct.
- Why ∂μ/∂T ~ T, N = N₀ + ∗T², μ = μ₀ + ∗T² (p. 87): correct. The page's argument (n_F − ½ odd about μ, so first order cancels; D' ≠ 0 gives T²) is right, and the sign remark is right: for D ∝ ε^{1/2}, μ = ε_F[1 − (π²/12)(k_BT/ε_F)²], μ falls.
- "Pressure inside a white dwarf", "Balance of pressure and weight", "Radius of a white dwarf", "Radius of a neutron star" (p. 88): all match, including the column sketch (mass nm_pR), n ≃ M/(m_pR³), the boxed 6200 km and 3.4 km, and the margin unit check [ħ²/(m³G)] = [ħ²/(mLE)]. The page's reading of the unit check is correct (ħ²/(mE) is a length squared).
- Margin masses m_n = 939.565 MeV, m_p = 938.271 MeV, Δm = 1.3 MeV, m_e = 0.51 MeV (p. 88): read correctly.

## Arithmetic and answer checks
- `npm run calc:test -- -k degenerate-fermi-gas`: 54 passed.
- Independent recomputation (CODATA constants, own script):
  - White dwarf: ħ²/(m_e m_p^{5/3} M_⊙^{1/3} G) = 6172 km (6170 km with Wen's M_⊙ = 1.99 × 10³³ g). "6200 km": correct.
  - Neutron star: with m_n 3.357 km, with m_p 3.361 km. "3.4 km": correct. m_p/m_e = 1836.15.
  - m_n − m_p = 1.294 MeV > m_e = 0.511 MeV: correct.
  - k_BT at 300 K = 0.0259 eV = 1/38.7 eV: "about 1/40 eV" fine.
  - Wen's P₀: n = 10²⁸ m⁻³, ε_F = 1-10 eV gives (2/5)nε_F = 6.3 × 10³ to 6.3 × 10⁴ atm (1.9 × 10⁴ at 3 eV): "of order 10⁴ atm" correct. Bulk modulus (2/3)nε_F = 1.05 × 10⁴ to 1.05 × 10⁵ atm: the page's "10⁴ to 10⁵ atm" is right; Wen's slipped (2/9)nε_F = 1.05 × 10⁴ atm at 3 eV (basis of finding 1).
  - Halving: 2^{5/3} − 1 = 2.175. 10⁴ atm × 10 m/atm = 10⁵ m. Correct.
- Lithium example (n = 4.70 × 10²⁸ m⁻³): k_F = 1.116 × 10¹⁰ m⁻¹; ε_F = 7.609 × 10⁻¹⁹ J = 4.749 eV; T_F = 55 110 K; P₀ = 1.430 × 10¹⁰ Pa = 1.41 × 10⁵ atm; bulk modulus 2.384 × 10¹⁰ Pa = 2.35 × 10⁵ atm; halving pressure 3.11 × 10¹⁰ Pa = 3.07 × 10⁵ atm; C/(3/2 Nk_B) = 0.0179; Pauli/Curie = 0.00817. All page values correct to the digits shown. "Fewer than one electron in fifty": 0.018 < 0.02, correct. The example is the page's own (lithium, own questions), not in the notes.
- Quiz 1 (answer 0): correct; explanation correct.
- Quiz 2 (answer 0, 2μ_BB D(ε_F) with one-spin D): correct.
- Quiz 3 (answer 0): R ∝ M^{−1/3}, 2^{1/3} = 1.260, 2^{−1/3} = 0.794. Correct.
- Quiz 4 (answer 0): R ∝ 1/m of the degenerate particle; 6172/1836 = 3.36 km. Correct.
- Flashcards: all six correct (the fifth subject to finding 2 about which D).
- Plot 1: minimum of 1.5x^{−2/3} + x at x = 1, caption identity correct. Plot 2: D n_F/D(ε_F) = √x n_F with μ = ε_F; caption correct (shift 0.2% at k_BT = 0.05 ε_F). Plot 3: 6.2 x^{−1/3}, correct.

## Coverage and order
- The page follows pp. 82-88 in Wen's order: density of states (82), ground state and pressure (83), compressibility (84), spin susceptibility (85), heat capacity (86-87), white dwarf and neutron star (88). Nothing in that range is left out except the p. 83 rederivation of PV = (2/3)U (referred back instead) and Wen's crossed-out "F(N↑ + N↓)" on p. 84.
- Additions, all marked as the page's own: the comparison with Curie's law, the halving-pressure calculation, the neutron-decay explanation, the remark about two nucleons per electron, real neutron-star radii, and the lithium example.

## Licensing
- Resource page: CC BY-NC-SA 4.0, no "courtesy" or "All rights reserved" notice. Pages 82-88 contain only Wen's own hand sketches; no figure from Huang. The page draws its own three plots from formulas and does not redraw Wen's sketches (it describes them in words). No OpenStax or LibreTexts material.
- Paraphrase: the notes are terse equations with a few words; the page's prose is its own. No copied sentences.
- No em dashes in the page.

## Physics checks
- Sommerfeld argument and sign of the μ shift: correct (finding above).
- Pauli vs Curie: χ_Pauli/χ_Curie = (3/2)k_BT/ε_F, correct for spin-½ moments μ_B (Curie χ = Nμ_B²/k_BT from M = Nμ_B tanh(μ_BB/k_BT)).
- Neutron decay remark: correct (m_n > m_p + m_e by 0.78 MeV; electron Fermi energy above that blocks the decay and drives inverse beta decay). Properly marked as the page's addition. It omits the neutrino, which is fine at this level.
- Compact stars: R ∝ M^{−1/3}, failure when p_F ~ m_ec, Chandrasekhar limit in 8.044: correct. The linked 8.044 page (white-dwarfs, Lecture 20) does treat the relativistic limit.

## Forward links
- Cosmology callout and leadsTo 8.286 Lecture 20: our 8.286 page supernova-evidence says the equal-power assumption "rests on observation and some guesswork; there is no good theory behind it", and it nowhere mentions white dwarfs. The callout's "takes their equal brightness as an empirical assumption and does not discuss what they are" and "the standard picture, beyond the lecture" match that page. (Checked against our page, not the transcript.)
- leadsTo 8.044 Lecture 20: the page white-dwarfs exists, is Lecture 20, and covers the energy balance and the Chandrasekhar limit as the `why` says.

## Notes
- Fix finding 1 (and its calcs `fact` entry); findings 2 and 3 are wording.
- The page's hedge "looks like 5/2" for p. 84 is appropriate: the glyph is a clear 5/2 in both lines.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error, χ ~ 1/10⁶ atm): accepted; the exponent is read as 4. The page now says Wen quotes a compressibility of order 1/(10⁴ atm), consistent with his own formula, and that the corrected formula gives a bulk modulus about three times larger, of order 3 × 10⁴ atm. Calcs `wen-chi-quoted` and `wen-bulk-modulus` updated (the latter now checks 3 × 10⁴ atm within 20%).
- Finding 2 (warning, spin states in C = (π²/3)k_B²T D): the text after the formula now says D must count every spin state (twice the one-spin D for electrons); the flashcard and the Summary say "D counting all spin states".
- Finding 3 (warning, where the factor 3 enters): the bracket now says the slip enters one line earlier, where substituting C gives 3m/[ħ²(3π²)^{2/3}n_e^{5/3}] and the notes write 9 for the 3; calcs `compressibility-epsf` now quotes that text.
- Finding 4 (info, m_p vs m_n): the page now notes that Wen writes m_p, which gives the same 3.4 km. Other info items need no change.
- content:check and calc:test pass; status set to reviewed.
