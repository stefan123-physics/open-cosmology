---
page: content/year-4/8.08/ideal-fermi-gas.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_fermi_gas/ (read: resource page; CC BY-NC-SA 4.0 footer, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read as page images: handwritten pp. 76-82 = PDF pages 1-7 at 130 dpi, the p. 78 margin sketch and the bottom of p. 81 at 300 dpi; no text layer)
  - content/year-4/8.286/neutrinos-and-particle-counting.mdx (read, for the claims about 8.286 Lecture 17)
verdict: pass-with-notes
---

# Review: The ideal Fermi gas: occupation numbers, pressure and the classical limit

Scope: notes pp. 76-81 (PDF pages 1-6); p. 82 was read to confirm that "Low temperature properties" (the next page) starts there. Every formula, every attribution to the notes, every slip note, every number, all four quiz questions (the brief said three; the page has four) and all five flashcards were checked against the page images. No errors found. One warning, about the description of Wen's p. 78 sketch, and some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The high-temperature limit", last paragraph: "His sketch shows why: with μ far below the lowest state, every level is nearly empty, the particles almost never compete for a state, and the Pauli principle has nothing to do." | The p. 78 margin sketch has ε_k going up and n_k across, with a tick at 1. μ is drawn **above** the bottom of the axis. Bars of width k_BT sit above and below μ, and the label "n_k ~ 1" is next to them. The curve falls smoothly from about 1 near ε = 0 to 0 at the top. It is a generic Fermi-Dirac profile smeared over about k_BT around a positive μ. It most likely shows the "μ → ?" argument (how many states are filled if μ stays where it is), not the final classical state. | Says the sketch shows μ far below the lowest state with every level nearly empty. The sketch shows the opposite: μ above ε = 0 and the low states nearly full. | Describe the sketch as it is, e.g. "His margin sketch shows the occupation falling from about 1 to 0 over a few k_BT around μ; if μ stayed there while T grew, more and more states would be filled, so μ has to fall." Or drop the sentence. The physics in the paragraph is right; only the reading of the figure is wrong. (Reading a rough sketch involves some judgement, but μ is clearly marked above the axis origin.) |
| 2 | info | "The zero-temperature limit" | p. 78 gives the step occupation, k_F = √(2mμ)/ħ and the pressure integral ending in ħ²k_F⁵/(30π²m). p. 79 then counts n = k_F³/6π² and boxes k_F = (6π²n)^{1/3} and ε_F. | Puts the p. 79 count of states (formula "Fermi wave vector, one spin state") before the p. 78 pressure integral. | Harmless reordering, and each citation is correct. No change needed. |
| 3 | info | "Virial expansion of the Fermi gas" | p. 81 writes "= 1 + C₂/V + C₃/V" (the second term should be C₃/V²). | Writes "+ ⋯", so the slip does not appear. | No change. Optionally add it to the bracketed note about the missing N. |
| 4 | info | Intro bracket: "Wen writes the grand partition function as Q_G, as in Huang's textbook" | p. 76 writes Q_G and "Thermopotential" (both verified). | Says the notation is Huang's. | Uncertain: Huang's *Statistical Mechanics* writes the grand partition function as a script 𝒬(z, V, T), without the subscript G. Consider "(close to Huang's 𝒬)" or drop the Huang comparison. |
| 5 | info | "Free fermions", first sentence: "with periodic boundary conditions" | p. 76 gives k = (2π/L)(n_x, n_y, n_z) without naming the boundary conditions. | Names periodic boundary conditions. | Correct, because the 2π/L grid implies them. No change. |
| 6 | info | Plot 2 caption: "where the Fermi temperature is T_F = ε_F/k_B" | (not in notes) | T_F is not tied to a volume, but the formula (5/2)(T/T_F)/(V/V₀) only holds for T_F at the reference volume V₀. | Say "with T_F the Fermi temperature at V₀". |

## Formula-by-formula check
- "Single-particle states" (p. 76, point ①): k = (2π/L)(n_x, n_y, n_z) and ε_k = ħ²k²/2m are both on p. 76, and p. 76 is the only page with a circled ①. Correct.
- "Energy of a many-fermion state" (p. 76, point ①): E({n_k}) = Σ ε_k n_k is boxed. N = Σ n_k is written under the exponent of Q_G on the same page. n_k = 0, 1 "for fermions" also matches. Correct.
- "Grand partition function of free fermions" (p. 76): matches all four lines, from Σ_{n_k} e^{−β(Σε n − μN)} to Π_k[1 + e^{−β(ε_k − μ)}]. Correct.
- "Grand potential" (p. 76): matches the boxed "Thermopotential" Ω = −k_BT ln Q_G = −k_BT Σ ln(1 + e^{−β(ε_k−μ)}). Correct.
- "Number of particles" (p. 77): matches both lines, N = −∂Ω/∂μ|_{V,T}. Correct.
- "Fermi-Dirac distribution" (p. 77): matches the boxed n_k, labelled "Fermi-Dirac distribution". Correct.
- Number of states V d³k/(2π)³ (text, p. 77): matches the boxed "# of states = d³k L³/(2π)³". Correct.
- "Density of the Fermi gas" (p. 77): matches the boxed n = N/V. Correct.
- "How the energies depend on the volume" (p. 77): matches ε_k = ħ²(n_x² + n_y² + n_z²)(2π)²/(2m V^{2/3}) and ∂ε_k/∂V = −(2/3)ε_k/V. Correct.
- "Pressure of the ideal Fermi gas" (p. 77): matches the chain P = −Σ(∂ε/∂V)n_k = (2/3)(1/V)Σ ε n = boxed integral. Correct.
- "Pressure and energy" (p. 77): matches the boxed PV = (2/3)U(T, V, μ) with U = V∫d³k/(2π)³ ε_k n_k, and the line μ(N, T, V) ⇒ PV = (2/3)U(T, V, μ(T, V, N)) that the text paraphrases. Correct.
- "Pressure and density at high temperature" (p. 78): matches. Correct.
- "The classical limit" (p. 78): matches P/n = (2/3)⟨ε_k⟩ = (2/3)(−∂I/∂β)/I = 1/β = k_BT, with I(β) ∝ β^{−3/2}. The boxed PV = (2/3)U and U = N⟨ε_k⟩ are in the margin, as the page uses them. Correct.
- "Fermi wave vector, one spin state" (p. 79): matches n = (1/(2π)³)(4π/3)k_F³ = k_F³/6π² and the boxed k_F = (6π²n)^{1/3}, ε_F = ħ²k_F²/2m. Correct.
- "Pressure at zero temperature" (p. 78): matches; the result ħ²k_F⁵/(30π²m) was recomputed (2/3 · 4π/5 / (16π³) = 1/(30π²)). Correct.
- "Fermi pressure" (p. 79): matches the two boxes, P = ((6π²)^{5/3}/15π²)(ħ²n^{2/3}/2m)n and V^{5/3}P = ((6π²)^{5/3}ħ²/30π²m)N^{5/3} = const. The added "= (2/5)nε_F" is an exact rewriting. Correct.
- "The Fermi pressure, estimated" (p. 79): matches P ~ energy per volume = energy per particle × n ~ (ħ²n^{2/3}/2m) × n, labelled "Fermi pressure". Correct.
- "Condition for the classical limit" (p. 79): the boxed classical limit reads "√(2mk_BT)/ħ ≪ n^{1/3}" and then "k_BT ≫ ħ²k_F²/2m ≡ ε_F". The page corrects the first inequality to ≫ and says so in brackets. The correction is right: √(2mk_BT)/ħ ÷ k_F = (T/T_F)^{1/2}. Correct.
- "Grand potential and free energy at high temperature" (p. 80): matches Ω as a k-integral, A = Ω + μN at μ = μ(V, N, T), and the boxed Gaussian integral = (2πħ²/mk_BT)^{−3/2} = λ^{−3}. Correct.
- "Density to second order in the fugacity" (p. 80): matches N = V∫(ze^{−βε} − z²e^{−2βε}) = V(zλ^{−3} − z²2^{−3/2}λ^{−3}). Correct.
- "Fugacity in terms of the density" (p. 80): matches z = nλ³ + (nλ³)²/2^{3/2} and μ = k_BT ln z. Correct.
- "Free energy with the first quantum correction" (p. 81): matches the boxed A = k_BTN(ln nλ³ − 1 + ½ nλ³/2^{3/2}), labelled "quantum correction, small if nλ³ ≪ 1". Re-derived independently: Ω = −Nk_BT(1 + x/2^{5/2}) and μN = Nk_BT(ln x + x/2^{3/2}) with x = nλ³, so A = Nk_BT(ln x − 1 + x/2^{5/2}). Correct.
- "Pressure with the quantum correction" (p. 81): the page has the corrected form. Correct.
- "Virial expansion of the Fermi gas" (p. 81): the page has the corrected form, with C₂ = Nλ³/2^{5/2} > 0 as in the notes. This is the textbook result for one spin state (b₂ = −2^{−5/2} for fermions, so B₂ = +λ³/2^{5/2} per particle). Correct.

## Slips attributed to the notes (all verified)
- p. 78: "and n_k ∝ 1/T → 0". Verified. The page's correction is right: in the classical limit n_k ≈ z e^{−βε} with z ≈ nλ³ ∝ T^{−3/2}.
- p. 79: "√(2mk_BT)/ħ ≪ n^{1/3}" with "k_BT ≫ ε_F" next to it. Verified, and the correction is right (see above).
- p. 81: "P = −∂A/∂V = k_BT/V + k_BT N²λ³/(2^{5/2}V²)". Verified at 300 dpi: the first term has no N.
- p. 81: "PV/k_BT = 1 + nλ³/2^{5/2}". Verified: no N on the left.
All four notes are fair and short, in brackets as AGENTS.md rule 4 asks.

## Arithmetic and answer checks
- `npm run calc:test -- -k ideal-fermi-gas`: 38 passed.
- Recomputed independently in Python with CODATA constants. K-40: m = 39.96400 u = 6.6362e-26 kg (page 6.636e-26). k_F = 8.3975e6 m⁻¹ (page 8.40e6). ε_F = 5.909e-30 J (page 5.91e-30). T_F = 0.42798 μK (page 0.43 and 0.428). λ(2 μK) = 0.19528 μm (page 0.195). nλ³ = 0.07446 (page 0.074), and (4/3√π)(T_F/T)^{3/2} = 0.07446, the same. Correction nλ³/2^{5/2} = 0.01316 (page 0.013, "1.3%"). T/T_F = 4.67 ("almost five times"). P(T = 0) = (2/5)nε_F = 2.364e-11 Pa (page 2.4e-11). Air at 1 atm and 293 K is 2.5e25 m⁻³, which is 2.5e6 times n ("millions of times thinner"). All correct.
- Quiz 1 (answer 0): correct; the explanation is right.
- Quiz 2 (answer 0): correct. ε_k ∝ L^{−2} = V^{−2/3}.
- Quiz 3 (answer 0, "About 0.14"): 4/(3√π) = 0.75225 and (1/3)^{3/2} = 0.19245, so nλ³ = 0.1448, which rounds to 0.14. Correction 0.1448/5.657 = 0.0256, "≈ 0.026". The other choices are far away. Correct. The relation nλ³ = (4/3√π)(T_F/T)^{3/2} was checked analytically: with k_F³ = (2T_F)^{3/2} (ħ = m = k_B = 1), (k_F³/6π²)(2π/T)^{3/2} = 2^{3/2}·(2π)^{3/2}/(6π²)·(T_F/T)^{3/2} = (8/(6√π))(T_F/T)^{3/2} = (4/(3√π))(T_F/T)^{3/2}.
- Quiz 4 (answer 0, P ∝ V^{−5/3}): correct.
- Flashcards 1-5: all correct, and the A and C₂ expressions agree with the re-derivation above.
- Plot 1: the curves come from formulas. "Agree several k_BT above μ" is right: the relative difference is e^{−x}/(1 + e^{−x}), 0.7% at x = 5.
- Plot 2: P/P₀ = (V/V₀)^{−5/3} at T = 0, and the classical (5/2)(T/T_F)/(V/V₀), are right with P₀ = (2/5)n₀ε_F(V₀). "The true pressure lies above both curves" is right: P(T) ≥ P(0) at fixed N and V because U grows with T, and P ≥ nk_BT for an ideal Fermi gas because f_{5/2}(z)/f_{3/2}(z) ≥ 1. See note 6 on T_F.
- Callout: ∫x³/(eˣ + 1)dx = 7π⁴/120 = (7/8)(π⁴/15). Exact. Correct.

## Coverage and order
- Notes order: p. 76 free fermions, states, Q_G, Ω → p. 77 N, n_k, density of states, equation of state, PV = (2/3)U → p. 78 high-T limit (with sketch), boxed "Fermi gas = classical gas", T = 0 limit, P(k_F) → p. 79 n(k_F), k_F, ε_F, P(n), V^{5/3}P, P-V sketch, quantum vs classical limit (with grid sketches), the classical condition → pp. 80-81 high-temperature expansion, A, P, virial expansion. The page follows this order apart from note 2.
- Nothing on pp. 76-81 is left out. The grid sketches on p. 79 (confined wave functions against thermal wave packets) are described in words ("confined, by the others, to a region of size about n^{−1/3}"); that is a fair reading of them.
- The page adds: the 1/2 value at ε = μ, the relation nλ³ = (4/3√π)(T_F/T)^{3/2} (flagged as the page's addition), the spin-½ count n = k_F³/3π² (which the notes give on p. 82, as the page says), the worked example, the plots and the callout.

## Licensing
- The OCW resource page carries CC BY-NC-SA 4.0. No "courtesy of" or "rights reserved" notice appears on the resource page or on PDF pages 1-7.
- No figure is copied: both graphs are `<Plot>`s generated from formulas, and Wen's sketches are only described in words. No Huang figure or text is used.
- No text is copied. The notes are mostly equations with short labels ("Thermopotential", "Fermi pressure", "quantum correction", "extra pressure"); the page's prose is its own. The worked example (K-40) is original.
- No em dashes in the page (checked with grep).

## Cosmology callout and leadsTo
- 8.286 Lecture 17 (as summarised in content/year-4/8.286/neutrinos-and-particle-counting.mdx) uses the fermion factor 7/8 in g (board, p. 8), with g_{e±} = 7/2 and three neutrino species. The callout says only that Lecture 17 "uses" the factor, which is accurate. The 7/8 per spin state for μ = 0, ε = ħck is exact.
- Info: that page's caption says the lecture "argues only from counting states and does not write [the occupation numbers] down". The leadsTo `why` ("their Fermi-Dirac occupation is why each fermion species counts 7/8") is right as physics, and it does not claim that Guth derives it from the Fermi-Dirac function. Optional: add "(Guth quotes the factor without the integral)" to the callout, so that readers do not expect the derivation there.
- "Chemical potentials close to zero" is not attributed to 8.286 and is standard physics. Fine.

## Notes
- Internal links checked: /courses/8-044/grand-canonical-ensemble, /courses/8-044/free-fermi-gas, /courses/8-08/information-equipartition-ideal-gas, /courses/8-08/van-der-waals-equation and /courses/8-08/degenerate-fermi-gas all exist. The van der Waals page quotes C₂ = Nλ³/2^{5/2}, which agrees with this page.
- All four quiz questions have answer index 0. That is not wrong, but it is predictable if the site does not shuffle choices (not checked).

## Resolution (2026-11-19, by the page author)

- p. 78 sketch (warning): the sentence now describes the margin sketch as drawn (a generic occupation profile, close to 1 well below μ and falling over a few k_BT around it) and states the classical-limit argument separately.
- Q_G and Huang (info): the claim that Huang writes Q_G was removed; the page now says only that Wen writes Q_G.
- Second plot caption (info): T_F is now named as the Fermi temperature at the reference volume V₀.
- Order of p. 78/p. 79 material, C₃/V on p. 81, periodic boundary conditions, quiz answer positions (info): no change; the reorder is harmless, the page writes "+ ⋯", and the boundary conditions follow from the 2π/L grid.
- content:check and calc:test pass; status set to reviewed.
