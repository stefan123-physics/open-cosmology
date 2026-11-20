---
page: content/year-4/8.08/canonical-ensemble-free-energy.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/e440871d22237607e37482b227e22643_canonical_ensem.pdf (read: PDF pages 1-4 = Wen's handwritten pp. 1-4, from page images rendered at 130 dpi; no text layer)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/canonical_ensem/ (not opened separately; it is the landing page of the same PDF)
  - content/year-3/8.044/canonical-ensemble.mdx and content/year-4/8.286/black-body-radiation.mdx (read, to check the page's claims about them)
verdict: needs-changes
---

# Review: The canonical ensemble and the free energy

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Comparison with the microcanonical ensemble", last paragraph | p. 4: microcanonical weight Γ(E) = e^{S/k_B}; canonical weight Γ(E) e^{−E/k_BT}. The extra factor e^{−E/k_BT} is the bath's (it is Γ_bath(E_tot − E) up to a constant, p. 2). | "The term −ST is the bath's contribution: lowering the system's energy hands that energy to the bath, whose entropy rises by E/T." | Wrong term. −ST is the system's own entropy (it is already in the microcanonical weight). The bath's contribution is the E term: in the exponent −(E − ST)/k_BT, the −E/k_BT part is the bath's entropy change. Reword, e.g. "The new term, E, is the bath's contribution: energy the system gives up raises the bath's entropy by E/T, so maximising S_sys + S_bath = S − E/T is the same as minimising A = E − ST." |
| 2 | warning | Intro, sentence on 8.044 | 8.044 L12 page (checked): derives the canonical distribution by dividing an isolated system into subsystem and bath and expanding the bath's entropy (phase volume) to first order. | "8.044 ... reached it from the phase-space density; Wen instead counts states of the bath" | Misleading contrast: both derive it from the bath. The real differences are Wen's ideal bath (S_bath = E/T exactly) versus 8.044's first-order expansion, and discrete quantum states versus a classical phase-space density. Say that instead. |
| 3 | warning | Cosmology callout, last sentence | 8.286 L16 (our page `black-body-radiation`, caption of its plot): Guth quotes u = g(π²/30)(kT)⁴/(ħc)³ and n on the board and "refers to but does not write down" the statistical-mechanics derivation. | "8.286 computes the energy density of the radiation from Boltzmann-weighted sums over the states of the photon gas." | Overstated: 8.286 quotes the result. E.g. "8.286 Lecture 16 quotes the energy density of black-body radiation, a result that comes from Boltzmann-weighted sums over the states of the photon gas." (The leadsTo `why` for 8.286 L16 is phrased as physics, not as what Guth does, and is fine.) |
| 4 | info | "Comparison" formula / Thermodynamics, heat capacity | p. 4 box: "specific heat: Heat/ΔT = T dS/dT = C" | "heat capacity, here at fixed volume" | Correct physics (C here is extensive, so "heat capacity" is the better word, and V is fixed since Q = Q(T, V)). Optionally note in brackets that the notes call it the specific heat. |
| 5 | info | "The Boltzmann distribution", first paragraph | p. 2: "Picture of microcanonical ensemble: sys + heat bath. Total energy E_tot is fixed (isolated, microcanonical)". Equal likelihood of all joint states is implied, not written. | "every state of the whole with that energy is equally likely (notes p. 2)" | Acceptable (it is what "microcanonical" means); no change needed. |
| 6 | info | "The free energy and why the peak is sharp", item 2 | p. 3 ⓑ: "e^{−A/k_BT} is sharply peaked", with a sketch marking ΔE; no comparison with Ē is written. | "with a width ΔE small compared with Ē" | Fine as an interpretation of the sketch; could say "a narrow width ΔE". |
| 7 | info | Plot caption | — (page's own model) | "The standard deviation divided by the mean energy is 1/√(N + 1)" while the axis is E/Ē with Ē = Nk_BT (the minimum of A, i.e. the most probable energy) | Correct as written (the gamma distribution E^N e^{−E/k_BT} has mean (N+1)k_BT and variance (N+1)(k_BT)²), but on this page Ē is first the most probable energy and later ⟨E⟩; in the model they differ by k_BT. Optional: "divided by the mean energy (N + 1)k_BT". |

## Arithmetic and answer checks
All recomputed independently in Python (k_B = 8.617333262 × 10⁻⁵ eV/K).
- Worked example: k_BT(300 K) = 0.025852 eV (ok). 0.020/0.025852 = 0.7736, e^{−0.7736} = 0.4613; 0.050/0.025852 = 1.9341, e^{−1.9341} = 0.1446; Q = 1.60589 → 1.6059 (ok). P = 0.6227, 0.2873, 0.0900 → 0.623, 0.287, 0.090 (ok). Ē = 0.010246 eV → 0.01025 eV, Ē/k_BT = 0.396 → "about 0.40" (ok). A = −0.0122455 eV → −0.01225 (ok). S/k_B = 0.87002 → 0.870 (ok); −Σ P ln P with exact P = 0.87002, with the rounded P = 0.8698 → 0.870 (ok). TS = 0.022492 eV → 0.0225 (ok). A below the ground level 0: correct.
- Plot model: A(E) − A_min = Nk_BT(x − 1 − ln x), so e^{−(A − A_min)/k_BT} = (x e^{1−x})^N, height 1 at x = 1 (ok). Minimum of E − Nk_BT ln E at E = Nk_BT (ok). 1/√11 = 0.302, 1/√101 = 0.0995, 1/√1001 = 0.0316, 1/√(10²²) = 10⁻¹¹ (ok). "E^N roughly true for N classical oscillators": exact count is E^{N−1}, so "roughly" is fair.
- "Width contributes order ln N against A_min/k_BT of order N": correct (ln of a width ∝ √N k_BT).
- Real-bath remark: first-order term of ln Γ_bath(E_tot − E_n) is −E_n/k_BT (ok); second-order relative size ~E_n/(2TC_bath) ~ E_n/E_bath (ok, and labelled as the page's own).
- Mean-energy chain: k_BT² ∂/∂T(−A/k_BT) = A − T ∂A/∂T (checked by hand); ∂/∂β = −k_BT² ∂/∂T (ok).
- Quiz 1: answer 1 correct; explanation correct.
- Quiz 2: Q = 1 + 1/3 = 4/3, P_upper = 0.25 → answer 0 correct; distractor 0.33 explanation correct.
- Quiz 3: answer 1 correct; explanation correct.
- Quiz 4: answer 1 correct (S = −∂A/∂T, Ē = A − T∂A/∂T); explanation correct.
- Flashcards: all five correct.
- Calcs file `calcs/8.08/canonical-ensemble-free-energy.yaml`: every number on the page (worked example, caption, quiz 2) has an entry, and the derivation identities (ideal bath, Boltzmann ratio, model minimum and distribution, S = −∂A/∂T, −∂ln Q/∂β = A − T∂A/∂T, gamma variance) match the page. I did not run `npm run calc:test`.

## Formula citations (each checked against the page images)
- "Entropy of an ideal heat bath", p. 1 ①: notes "From 1/T = ∂S(E)/∂E ⟹ S_bath(E) = E/T" (boxed). Correct.
- "Number of states of an ideal bath", p. 1 ①: "# of states Γ_bath(E) = e^{E/Tk_B}" (boxed). Correct.
- "States of the whole with the system in state n", p. 2 ②: "= 1·Γ_bath(E_tot − E_n) = e^{(E_tot − E_n)/k_BT}". Correct.
- "Boltzmann distribution", p. 2 ② (boxed): correct.
- "Partition function", p. 2 ③: "Q(T, V) ≡ Σ_n e^{−E_n/k_BT} (quantum)" boxed. Correct, and the page keeps the "(quantum)" remark.
- "Partition function as an integral over energy", p. 2 ③: the notes' four-line chain, with Γ_sys(E) and the step through −E/k_BT + S(E)/k_B condensed. Correct.
- "The free energy as a function of energy", p. 3: correct.
- "Condition for the equilibrium energy", p. 3: correct (with the 1/T_bath, 1/T_sys labels, which the page states in words).
- "Free energy from the partition function", p. 3 ⓑ: Q = ∫dE e^{−A/k_BT} ~ e^{−A_min/k_BT}; A = −k_BT ln Q boxed. Correct.
- "Weights of an energy in the two ensembles", p. 4: correct.
- "The free energy before minimising", p. 4 ④: correct.
- "Free energy as the minimum", p. 4 ④: correct (the scan seems to write Â with a hat in A(T) = Â(Ē(T), T); it is the same Ã).
- "Entropy from the free energy", p. 4 ⓐ: the notes write the chain rule with the first term marked "= 0" and the boxed result ∂A/∂T = −S; the page's explicit "+ (−S)" is a filled-in step. Correct.
- "Heat capacity", p. 4 ⓐ: in the notes the box sits beside the entropy result under ⓐ. Correct.
- "Mean energy from the free energy", p. 4 ⓑ: correct.
- "Mean energy from the partition function", p. 4 ⓑ "Second way": correct.
- Note: pp. 3 and 4 both have points ⓐ ⓑ; every citation gives the page as well, so they cannot be confused.

## Slips in the notes
- p. 3 "Sys. has an energy that maximize A = E − S(E)T, max value A_max = Ē − S(Ē)T": a real slip; later on the same page come "Sys. wants to minimize the free energy" and "A_min". The page's bracket describes this correctly (first line says maximise and calls the extreme value the maximum).
- No other physics slips found on pp. 1–4. Small wording points the page rightly ignores: Γ_sys(E) is called "# of states of sys with energy E" (strictly a density of states, which the page says), and "specific heat" for the extensive C (finding 4).

## Coverage and order
- Notes order: p. 1 ① (sys + bath, ideal bath), ② start; p. 2 ② Boltzmann factor, ③ partition function and its energy-integral form; p. 3 A = E − ST, equilibrium condition, ⓐ ⓑ, A = −k_BT ln Q; p. 4 comparison with the microcanonical ensemble, ④ Ã, ⓐ entropy and specific heat, ⓑ energy two ways. The page follows exactly this order and covers every item.
- Added by the page (all labelled as its own): real versus ideal bath remark, the E^N sharpness model and plot, the three-level worked example, the cosmology callout.
- Split with `information-equipartition-ideal-gas`: clean. This page ends with ④ on p. 4; the companion starts at ⑤ on p. 5 and states "pp. 5–12, points ⑤ to ⑦". This page's forward references ("the classical sum becomes an integral over phase space, as on the next page"; "the next page adds the pressure") are honoured by the companion (its point ⑦ section has the phase-space integral and P = −∂A/∂V).

## Licensing
- No "rights reserved" or "courtesy" notice on pp. 1–4. The only figures in the notes are Wen's box sketch (p. 1) and a sketch of a narrow peak (p. 3); the page redraws neither (its plot is generated from its own model). No figure from Huang appears on these pages.
- Paraphrase: the text is rewritten throughout. The closest points are the opening question ("what is the probability that the system is in a particular state, of energy E_n?", close to Wen's question on p. 1) and "'wants' to minimise its free energy, which is what reaching equilibrium means" (close to Wen's line on p. 3, ⓐ). Both are single short sentences of standard content and acceptable; "total probability" is quoted and attributed.
- Worked example (three-level molecule) and quiz 2 are original; the notes have no numerical examples.

## Notes
- Notation claims: 8.044 uses Z and F (checked on `canonical-ensemble`); Huang uses Q_N and A, and `_course.json` names Huang as the course text. That the notes "follow Huang" is plausible but not stated by Wen in these pages (uncertain, info).
- leadsTo: 8.08 L2 (van der Waals) and L4 (grand canonical) match the course syllabus; the descriptions are correct. 8.286 L16 is `black-body-radiation`; see finding 3 for the callout.
- Callout physics: "as common as photons" for k_BT ≫ mc² is right up to factors of order one (3/4 for fermions, spin states); recombination set by a Boltzmann factor with the hydrogen binding energy is a fair simplification of the Saha argument. Info only.
- Symbols scoped to this slug in `data/symbols.json` (β, δ, ε, Γ, S_bath, Γ_bath, E_tot, P_n, Γ_sys, A_min, T_sys, T, x, Q, A, C, N, E, V, E_n, k_B and others) all fit the page. The N meaning ("degrees of freedom in the plotted model") is also how quiz 3 and the summary use N for a generic large system, which is close enough.
- No em dashes on the page.

## Resolution (2026-11-19, by the page author)

1. Error (−ST called the bath's contribution): rewritten. The page now says the new ingredient of the canonical weight is the Boltzmann factor, the bath's contribution (energy E taken by the system lowers the bath's entropy by E/T), so system plus bath maximise S − E/T, which is the same as minimising A = E − ST.
2. Warning (intro contrast with 8.044): rewritten. 8.044 expanded the bath's entropy to first order and used a classical phase-space density; Wen idealises the bath so the Boltzmann factor is exact and works with discrete quantum states.
3. Warning (cosmology callout overstating 8.286): rewritten. Guth quotes the black-body energy density in 8.286; its derivation as a Boltzmann-weighted sum over photon states comes in this course's Bose gas chapter.
4. Info: "heat capacity" now notes that Wen calls it the specific heat; the plot caption now says the mean is (N + 1)k_BT, close to the peak Ē = Nk_BT. The other info notes need no change (the Huang notation remark stands: Huang is the course text named in the course file, and Q and A are his symbols).

content:check (0 errors) and calc:test pass after the changes. Status set to reviewed.
