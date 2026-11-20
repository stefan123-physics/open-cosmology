---
page: content/year-4/8.08/counting-states-spins-ideal-gas.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/microcanonical_en/ (read: resource page; CC BY-NC-SA 4.0 link in the footer, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/d3e968b9aabbebf32e1c21adf6ae1962_microcanonical_en.pdf (read: typed, 9 pages; text layer from pdftotext, and every page, pp. 2-9, also read as a 130 dpi image because the text layer garbles the equations. p. 1 read from the text layer, which is clean prose there)
verdict: pass-with-notes
---

# Review: Statistical ensembles: counting states for spins and the ideal gas

Scope: all of Supplement 1 (Sections 1.1 to 1.3, pp. 1-9). I checked every formula, equation number and page citation against the page images. I recomputed every number in the worked examples, captions, plot expressions and quiz, and confirmed each one is in the calcs file. I checked each of the four slip notes against the PDF. I found no errors. There are two warnings and a set of info notes. `npm run content:check` gives 0 errors, and its only warning for this page is the missing review file.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example "How far does Curie's law reach?" | (not in notes; p. 5 gives only the weak-field law) | Free electron spins, g = 2, 1 T, at 300 K and 1 K: argument 2.24 × 10⁻³ and 0.672, tanh 0.672 = 0.586 against Curie 0.672. | All numbers are correct, but this is the **same example** as the worked example in the 8.044 page [paramagnets](/courses/8-044/paramagnets): electron spins, g = 2, 1 T, 1 K and 300 K, 0.586 against 0.672, 2.24 × 10⁻³. This is the one place where the page duplicates an existing page instead of adding to it. Change the situation, for example find the temperature at which Curie's law is 1% or 5% too high in 1 T, or use a weaker field or a nuclear moment. Or cut the example and point to the 8.044 one. Update the calcs entries ex-* if you do. |
| 2 | warning | `leadsTo` (8.08 lecture 7) and worked example (b) | n/a | The one `leadsTo` points to lecture 7 (Chapter VII, The Bose Gas), but its "why" says "bosons or fermions". Worked example (b) ends: the electrons of copper "need Fermi-Dirac statistics". | Add a `leadsTo` entry for 8.08 lecture 8 (Chapter VIII, The Fermi Gas), or limit the lecture 7 "why" to bosons. |
| 3 | info | Slip note after "Entropy of the spin system" | p. 2, Eq. (1.2.4): S(E) = k_B ln C_N^{E/ε₀}. On the same page M = E/ε₀ + N/2. | Says the notes write the upper index as E/ε₀ where the number of up spins is E/ε₀ + N/2. | Verified on the image. The note is accurate. No change. |
| 4 | info | Slip note after "Temperature of the spin system" | p. 4, Eq. (1.2.14): 1/T = βk_B = k_B(1/ε₀) ln[(½ε₀ + ε)/(½ε₀ − ε)]. | Prints ln[(½ε₀ − ε)/(½ε₀ + ε)] and says the notes have the fraction upside down. | Verified. Differentiating (1.2.7) gives ln[(½ − x)/(½ + x)]/ε₀ (calcs `spin-temperature`), so the page's form is right. Wen's own Fig. 1.3 (p. 4) agrees with the corrected form: T > 0 for ε < 0, and T → +∞ as ε → 0⁻. Optional: add "(as Wen's Figure 1.3 shows)" to the note. |
| 5 | info | Slip note after "Moment, field and temperature" | p. 4: energy "MB", ε = MB/N, and 1/T = (k_B/gμ_BB) ln[(gμ_BN − 2M)/(gμ_BN + 2M)]. p. 5: M = +g²μ_B²NB/4k_BT. | Uses energy −MB and the fraction (gμ_BN + 2M)/(gμ_BN − 2M). Says the notes write +MB and the fraction the other way up. | Verified. The page's relation follows from the corrected (1.2.14) with ε = −MB/N, and it gives a moment along the field, as the notes' final result does. For the record: the notes' p. 4 fraction is what the *correct* (1.2.14) gives with ε = +MB/N. So the slip in the notes is the sign of the energy, which clashes with the positive M on p. 5. It does not come from the inverted (1.2.14). The page's wording ("write the energy as +MB and the fraction the other way up") is accurate as it stands. No change needed. |
| 6 | info | Slip note after "Number of states in the window" | p. 8, Eq. (1.3.2): Γ(E) = V^N S_3N(√2mE)^{3N−2} ΔE/(2h^{3N}). | Prints m V^N S_3N(√2mE)^{3N−2} ΔE/h^{3N} and says the notes have ½ in place of m. | Verified. dΦ/dE = V^N S_3N (2m)^{3N/2}(3N/2)E^{3N/2−1}/(3N h^{3N}) = m V^N S_3N(√2mE)^{3N−2}/h^{3N} (calcs `window-count-derivative`). The note is accurate, including "only a term of order one". |
| 7 | info | "Energy of the ideal gas as a function of S, V and N", cited "Eq. (1.3.9)" | p. 9: E = N h²N^{2/3}/(2mV^{2/3}) e^{2S/3Nk_B}, which drops the constant of (1.3.7). | N(3h²/4πm)(N/V)^{2/3} e^{2S/3Nk_B − 5/3}, with the constant kept. The page says so in the text before the formula. | Disclosed and correct: solving (1.3.7) gives (3/2π)e^{−5/3} times Wen's prefactor (calcs `energy-from-entropy`). Optional: also quote Wen's printed form once, so that a reader comparing with the PDF is not puzzled. |
| 8 | info | Formula label "Entropy per spin" (Eq. 1.2.6) | p. 2: k_B⁻¹S(E) = N(−f↑ ln f↑ − f↓ ln f↓). | Label "Entropy per spin", but the formula is the total entropy, N times the per-spin value. | Rename it, e.g. "Entropy for large N". |
| 9 | info | Additivity paragraph and Eqs. (1.2.19)-(1.2.20) | p. 6 writes Γ̄′ > Γ̄/2N "as the maximum of the Γ(E₁)Γ₂(Ē − E₁)" (the argument should be 2Ē − E₁) and calls 2N "the number of possible distinct values of E₁" (there are at most N + 1). It uses Γ̄′ and S̄′. | Uses 2Ē − E₁ and Γ′, S′, and calls 2N "Wen's generous count". | Both slips are silently and correctly avoided. "None larger than Γ′" is right: the binomial product is largest at E₁ = Ē. The notation change Γ̄′ → Γ′ is harmless. No change. |
| 10 | info | Other small typos in the notes, not mentioned on the page | p. 2, Eq. (1.2.1): the second line ends "C_N^M ↑ⁿ↓^{N−M}" (n for M). p. 3, Fig. 1.1: the vertical axis runs to 1 with the peak almost at the top, while the caption gives the maximum as k_B ln 2 = 0.693. | The page draws its own plot, which peaks at ln 2. | Nothing to fix. Mention it only if you want to explain why the page's graph differs from Wen's Fig. 1.1. |
| 11 | info | Quiz 4 explanation | n/a | "...which doubles by more than a factor two when the system is doubled." | Reword: "...which more than doubles when the system is doubled." |
| 12 | info | "One principle, two readings" (closeness of paraphrase) | p. 1-2: "The copies of the system is called ensemble. We have to have an ensemble to even define the probabilities. Under the first interpretation, statistical physical is a science that deal with ensembles, rather than individual systems." / "The two points of view are equivalent only when the system can visit all the possible states, many times, during the long period of time. ... We will apply the theory for ensembles to individual systems, assuming the systems are ergodic." | "The collection of copies is the ensemble, and without it there is no probability to speak of: statistical physics, on this reading, is about ensembles, not single systems." / "The two agree only if the system really does wander through all its possible states, many times over, during the time we watch it." / "...applies the results to single systems on the assumption that they are ergodic." | This section follows Wen sentence by sentence, and these three sentences are close in structure, though the wording is the page's own. I found no copied sentence anywhere on the page. The rest of the page (spins, entropy properties, reversible change, ideal gas) is clearly rewritten. Optional: merge or reorder the ensemble/time paragraph so that it reads less like a line-by-line paraphrase. |

## Formula-by-formula check
- "The principle of statistical physics" (Section 1.1, p. 1): matches the key point and the paragraph on p. 1. Correct.
- "Sorting the 2^N states" (Section 1.2.1, p. 2, Eqs. (1.2.1)-(1.2.2)): correct. The notes' C_N^M is rewritten as a binomial coefficient, and the page says so.
- "Entropy of the spin system" (p. 2, Eqs. (1.2.3)-(1.2.4)): correct, with the slip note (finding 3).
- "Stirling's formula" (p. 2, Eq. (1.2.5)): matches Wen's form, (n + ½)ln(n + 1) − (n + 1) + ½ ln 2π. This is the standard ln Γ(z) expansion with z = n + 1, so it is right. calcs `stirling-100` gives 363.74.
- "Entropy per spin" (p. 2, Eq. (1.2.6)): matches. See finding 8 for the label.
- "Entropy as a function of energy" (p. 3, Eq. (1.2.7)): matches. The definitions of f and E₀ = Nε₀ are on p. 3, as cited.
- e^{S/k_B} (Eq. (1.2.8), p. 3): matches.
- "Probability of the energy split" (Section 1.2.2, p. 3, Eqs. (1.2.9)-(1.2.10)): matches.
- "Condition for equilibrium" (p. 3, Eq. (1.2.11)): matches.
- "Statistical temperature" (pp. 3-4, Eqs. (1.2.12)-(1.2.13)): (1.2.12) is on p. 3 and (1.2.13) on p. 4. Correct.
- "Temperature of the spin system" (p. 4, Eq. (1.2.14)): corrected form, see finding 4.
- "Moment, field and temperature" (Section 1.2.3, p. 4): signs corrected, see finding 5.
- "The moment solved exactly" (p. 4, solved here): 1/T = (k_B/gμ_BB)·2 artanh(2M/gμ_BN) gives M = (gμ_BN/2) tanh(gμ_BB/2k_BT). Correct, and labelled as the page's own step. calcs `moment-tanh`.
- "Curie's law" (p. 5): matches, M = g²μ_B²NB/4k_BT and χ = g²μ_B²N/4k_BT. The weak-field condition B ≪ k_BT/gμ_B and M ≪ gμ_BN match p. 5.
- Eq. (1.2.15) in the text (Section 1.2.4, p. 5): matches.
- "Changing the energy window" (p. 5, Eqs. (1.2.16)-(1.2.17)): matches, including α = O(Nⁿ).
- "Entropies of separate systems add" (p. 6, Eq. (1.2.18)): matches.
- "Bounds on the entropy after separation" (p. 6, Eqs. (1.2.19)-(1.2.20)): matches (S̄ > S′ > S̄ − k_B ln 2N).
- "Number of states below E" (Section 1.3, p. 7, Eq. (1.3.1)): matches. (√2mE)^{3N}/(3N h^{3N}) is the same as the notes' layout. The renaming N_< → Φ is stated.
- "Number of states in the window" (p. 8, Eq. (1.3.2)): corrected factor, see finding 6.
- "Solid angle in n dimensions" (p. 8, Eqs. (1.3.3)-(1.3.4)): matches. I checked the substitution u = r²: r^{n−1}dr = ½u^{(n−2)/2}du. S₂ = 2π and S₃ = 4π are right.
- "Entropy of distinguishable particles" (p. 8, Eq. (1.3.5)): rederived. The (3N/2)ln N from √(2mE) cancels against −(3N/2)ln(3N/2) from Γ(3N/2), which leaves N ln N + N ln[v(2mε)^{3/2}/h³] + N(3/2 ln(2π/3) + 3/2) + ln ΔE. Matches. calcs `entropy-constant-distinguishable`.
- "Counting identical particles" (p. 8, Eq. (1.3.6)): matches.
- "Entropy of the ideal gas of identical particles" (p. 8, Eq. (1.3.7)): matches, with the constant 5/2.
- "Entropy per particle" (p. 8, Eq. (1.3.8)): matches, including λ = h/√(2mε).
- "Classical and quantum gases" (p. 8): matches.
- "Energy ... as a function of S, V and N" (p. 9, Eq. (1.3.9)): see finding 7.
- "Temperature and pressure from E(S, V, N)" (p. 9, Eqs. (1.3.10)-(1.3.11)): matches. 2E/3Nk_B and 2E/3V follow from Wen's expressions. Correct.
- "Equation of state" (p. 9, Eq. (1.3.12)): matches.

## Arithmetic and answer checks
I recomputed all of these in Python with exact SI constants and CODATA 2018 values for μ_B, u and m_e. Every one is in the calcs file.
- Curie example: g μ_B N_A/2 = 5.5849 J/T. At 300 K the argument is 2.2390 × 10⁻³, 1 − tanh x/x = 1.67 × 10⁻⁶ ("under two parts in a million"), and M = 0.012505 J/T. At 1 K the argument is 0.67171, tanh = 0.58611, M = 3.2734 J/T against Curie's 3.7515 J/T. Curie is 14.6% too high, which the page rounds to "15%". All correct.
- 100 + 100 spins: ln[C(100,30)C(100,70)] = 117.284, ln C(200,100) = 135.753, gain 18.469, ln C(100,50)² = 133.568, difference 2.186, lower bound 135.753 − ln 200 = 130.455. All correct. Vandermonde Σ_j C(100,j)C(100,100 − j) = C(200,100) checked exactly.
- Air: ε = 6.2129 × 10⁻²¹ J, m = 4.651 × 10⁻²⁶ kg, λ = 2.756 × 10⁻¹¹ m, v = 4.088 × 10⁻²⁶ m³, v/λ³ = 1.952 × 10⁶. Correct.
- Copper electrons: m_N₂/m_e = 51,059 ("about 51,000"), λ = 6.228 × 10⁻⁹ m, v = 1.181 × 10⁻²⁹ m³, v/λ³ = 4.89 × 10⁻⁵. Correct. The density 8.47 × 10²⁸ m⁻³ is the standard value (one electron per atom). It is a `kind: fact` in calcs.
- Dropped constant: 3/2 ln(2π/3) + 5/2 = 3.609 ("about 3.61"). Correct.
- Sackur-Tetrode comparison: with ε = 3/2 k_BT, ln[v(3mk_BT)^{3/2}/h³] + 3/2 ln(2π/3) + 5/2 = ln[v(2πmk_BT)^{3/2}/h³] + 5/2. This is the Chapter I result with λ_th = h/√(2πmk_BT). Correct.
- E(S, V, N) with its constant: solving (1.3.7) gives ε = (3h²/4πm)(N/V)^{2/3} e^{2S/3Nk_B − 5/3}. Correct. T = 2E/3Nk_B and P = 2E/3V do not depend on the constant, as the page says.
- Plot 1 (entropy per spin): the expression is Eq. (1.2.7) per spin, and the point ln 2 = 0.6931 is right.
- Plot 2 (P(E₁)): I rederived the exponent. With N₂ = 2N₁ and E = −N₁ε₀, S₂/N₁k_B = x ln(−x/2) − (2 + x) ln(1 + x/2), where x = E₁/|E|. The normalising constant 3h(−1/3) = 1.3516836 is right. The peak is at x = −1/3, i.e. E₁ = E/3, and both systems then have energy −ε₀/3 per spin, as the caption says. The x range [−0.5, 0] keeps both entropies real. The exponent is ≤ 0, so N₁ = 10000 cannot overflow.
- Plot 3: βε₀ = ln[(½ − x)/(½ + x)] and k_BT/ε₀ is its inverse. The caption is correct.
- Quiz 1 (answer 1, ergodic): correct; this is Wen's condition on p. 2.
- Quiz 2 (answer 2, negative): correct. The explanation is correct.
- Quiz 3 (answer 1, 18.47): correct. The explanation's 117.28, 135.75 and 2.19 are all correct. The distractors 2.19 and 135.75 are clearly wrong.
- Quiz 4 (answer 1): correct. See finding 11 for the wording.
- Flashcards: all five are correct. The temperature card uses the corrected (1.2.14).

## Physics of the page's own additions
- Negative temperature paragraph: correct. β is smooth through ε = 0, T goes from +∞ to −∞, a negative T is hotter than any positive one, and energy flows from smaller to larger β. Negative temperatures were made in the laboratory by reversing the field quickly (Purcell and Pound, nuclear spins, 1951), which fits "suddenly reversing the field". The page says honestly that this interpretation is its own and that the notes give only Fig. 1.3.
- Glass and frozen domain pattern as non-ergodic examples: reasonable, and marked as the page's own.
- tanh solution and its saturation at gμ_BN/2: correct (see the formula check).
- "The evolution of each copy is one-to-one": a fair statement of Wen's "only Γ(E₁)Γ(E₂) possible final states" argument.
- "Slowly changing ε₀ by changing the field": Wen says only "say, caused by a change in ε₀". "Slowly" is an appropriate addition for an adiabatic change.
- Sackur-Tetrode comparison, E(S, V, N) and the air and copper example: all correct (see above). The air and copper example answers Wen's closing question on p. 8 with original numbers.

## Coverage and order
- The page follows Wen's order exactly: 1.1 principle and the two readings, ergodicity → 1.2 microcanonical ensemble → 1.2.1 counting and entropy (Eqs. 1.2.1-1.2.8, Fig. 1.1) → 1.2.2 two systems, temperature (Figs. 1.2, 1.3) → 1.2.3 Curie's law (Fig. 1.4) → 1.2.4 extensive, energy window, additive (Figs. 1.5, 1.6), reversible and irreversible (Fig. 1.7) → 1.3 phase-space counting, S_n, entropy with and without N!, s ≈ ln(v/λ³), classical and quantum, Wen's question → E(S, V, N), T, P, PV = Nk_BT.
- Nothing is left out. Fig. 1.6 (the histogram of Γ(E₁)Γ(2Ē − E₁)) is not named, but its content, that the sum contains the original product and its largest term at Ē, is in the text. Wen's "(and possibly some other properties)" in the definition of the microcanonical ensemble is dropped (trivial).
- Additions: the tanh solution, the negative-temperature reading, three worked examples and the Sackur-Tetrode link. All are marked as the page's own where that matters.
- Duplication with 8.044 (microcanonical-ensemble, entropy-temperature-second-law, paramagnets) and 8.08 Chapter I: the page links to all of them and takes Wen's own route. That route adds what those pages lack: the ergodic reading, the binomial spin entropy with the sharp P(E₁), negative T, the window and additivity bounds, the information view of irreversibility, the microcanonical Γ(E) with S_n, the N! from non-extensivity, and E(S, V, N). The overlap is moderate and justified by following the source. The one excessive duplicate is the Curie worked example (finding 1). The air example uses Wen's λ and a different gas from Chapter I's helium example, so it is not a duplicate.

## Licensing
- The resource page and PDF carry no "courtesy" or "All rights reserved" notice (grep of the text layer and a look at every page image). The licence is OCW's CC BY-NC-SA 4.0.
- Figure 1.4 (experimental susceptibility of Ca₂Y₂Cu₅O₁₀): not reproduced. The page only describes it in words ("follow the 1/T curve at high temperature and fall away from it at low temperature"), which matches the figure: the measured χ lies below the Curie curve below about 150 K and peaks near 25 K. No other figure from the notes is redrawn. All three graphs are computed from formulas.
- No OpenStax or LibreTexts material. No sentence copied verbatim. On closeness in Section 1.1, see finding 12.

## Forward links
- 8.286 lecture 16 (`leadsTo` and callout): supported. [black-body-radiation](/courses/8-286/black-body-radiation) states that total entropy is conserved near equilibrium, that s ∝ T³ and that T ∝ 1/a. [radiation-dominated-universe](/courses/8-286/radiation-dominated-universe) describes the adiabatic, constant-entropy expansion. Both are lecture 16. The attribution "8.286 uses" is fair.
- Callout claim that photons fail v/λ³ ≫ 1: correct. With n_γ = 0.244(k_BT/ħc)³ and the Wien wavelength, v/λ³ ≈ 2, and with λ = hc/k_BT it is about 0.02. Either way it is of order one or below, so the photons form a quantum gas. Wen's λ = h/√(2mε) itself applies only to massive particles, but the callout does not claim otherwise.
- 8.08 lecture 7: see finding 2.

## Notes
- The four slip notes the author asked me to check (findings 3 to 6) are all confirmed on the page images and worded fairly.
- I found no slip that the page repeats.
- Verdict: pass-with-notes. Fix findings 1 and 2. The info items are optional.

## Resolution (2026-11-19, by the page author)

1. Warning (worked example duplicated the 8.044 paramagnets example): replaced with new numbers, a mole of free electron spins in 5 T at 77 K (argument 0.0436, tanh smaller by 0.06%, moment 0.243 J/T, about 4% aligned) and at 4.2 K (argument 0.800, tanh 0.664, exact 3.71 J/T against Curie 4.47 J/T, 20% too high). The calcs entries were replaced to match (ex-splitting, ex-kT-77, ex-arg-77, ex-tanh-77, ex-moment-77, ex-fraction-77, ex-arg-4, ex-tanh-4, ex-moment-4, ex-curie-4, ex-curie-excess).
2. Warning (leadsTo): the lecture 7 "why" now speaks of bosons only, and a second leadsTo to 8.08 lecture 8 (the Fermi gas) was added for the electrons of a metal.
3–6, 9, 10. Info, slip notes confirmed: no change needed; the small typos of finding 10 stay unmentioned, since the page does not reproduce them.
7. Info: the text before Eq. (1.3.9) now also quotes Wen's printed form, N h²N^(2/3)/(2mV^(2/3)) e^(2S/3Nk_B), and says that we keep the constant he drops.
8. Info: the formula label "Entropy per spin" is now "Entropy for large N".
11. Info: quiz 4 now says "which more than doubles when the system is doubled".
12. Info (closeness of paraphrase in Section 1.1): the opening paragraph, the question about one state at a time and both bullet points (ensemble and time readings) were rewritten in new sentence structures.

Status set to reviewed; `npm run content:check` and `npm run calc:test` pass.
