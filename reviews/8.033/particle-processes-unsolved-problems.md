---
page: content/year-2/8.033/particle-processes-unsolved-problems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture13_part2/ (read: the slide PDF, deck titled "Lecture 13", 52 slides; text extracted with pdftotext and every slide checked as an image, including 3, 9–11, 13–28, 35, 37–52)
  - No transcript exists for this lecture (slides only), so nothing on the page can be checked against spoken content.
verdict: needs-changes
---

# Review: Particle processes and the greatest unsolved problems

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The greatest unsolved problems", later-developments bracket | Slide 30 asks "Neutrino properties?" (2006). | "neutrino oscillations have since fixed the differences of the neutrino masses" | Two problems here. (a) Neutrino oscillations were established before the lecture, by Super-Kamiokande in 1998 and SNO in 2001–2002, so they are not a later development. (b) Oscillations measure differences of the *squared* masses (Δm²), and the sign of one of them (the mass ordering) is still unknown. Suggested wording: "the mixing angle θ₁₃ was measured in 2012, but the absolute neutrino masses, their ordering and whether neutrinos are their own antiparticles are still open". |
| 2 | warning | "Predicting parameters", slide 35 | The table has four rows, each moving more from "fundamental laws" to "effective laws": Kepler/Newton (planets spherical, orbits circular), classical physics (initial matter distribution), landscape + inflation (SU(3)×SU(2)×U(1), dimensionality, constants α, ρ_Λ), and **Level IV multiverse? (TOE equations)**. | The page says Kepler and Newton "tried to explain why planets are spherical and orbits circular, before these were seen as initial conditions", and that inflation plus the landscape leaves "only the equations of a theory of everything". | (a) Rephrase: since Kepler and Newton, spherical planets and circular orbits count as accidents (initial conditions), not laws. (b) Add the last row: a Level IV multiverse might make even the TOE equations environmental. |
| 3 | warning | Quiz Q3, correct choice and explanation | Slide 24: nuclear transition *energies* are about a thousand times larger than atomic ones. | The correct choice says the recoil *fraction* $Q_0/2m_0c^2$ is "about a thousand times larger for nuclear transitions". The explanation says the shortfall is "far larger than the line width". | The fraction also depends on $m_0$. For hydrogen at 10 eV it is 5.3×10⁻⁹, and for free ⁵⁷Fe at 14.4 keV it is 1.4×10⁻⁷, only about 25 times larger. Say "$Q_0$ is about a thousand times larger, so the recoil loss is much larger". Also make clear that the comparison is with the natural line width. |
| 4 | warning | Worked example (b), "without the Mössbauer effect it would be hopeless" | Slide 24: Mössbauer removes the recoil, which allows Doppler shifts of 2 cm/s to be measured. | The example compares the recoil fraction (1.4×10⁻⁷) with the tower shift (2.5×10⁻¹⁵). This suggests that recoil is the obstacle. | The arithmetic is right, but the physics needs one more sentence. For free ⁵⁷Fe at room temperature, thermal Doppler broadening (v ≈ 200 m/s, β ≈ 7×10⁻⁷) is larger than the recoil shift. The Mössbauer effect gives a recoil-free line close to the natural width (Γ/E ≈ 3×10⁻¹³, my estimate from the 141 ns lifetime), which makes a 5×10⁻¹⁵ shift measurable with averaging. Suggest saying that it is the line width, not only the recoil, that has to beat the tower shift. |
| 5 | warning | Quiz Q2 explanation | Slide 19: in beta decay, momentum conservation "appeared to be violated" until the neutrino was proposed. | "energy and momentum could not both be conserved with the observed spread of electron energies" | A two-body decay n → p + e⁻ can conserve energy and momentum, but then the electron always has the same energy. The continuous spectrum is the evidence against it. Lepton-number violation (and angular momentum: spin ½ cannot become two spin-½ particles alone) is what forbids it. Suggested: "Lepton number would not be conserved. Also, a two-body decay would give every electron the same energy, but a continuous spread is observed." |
| 6 | warning | Fine tuning, slide 49 | "v/v₀ < 0.8: diproton & dineutron" | "around 0.8, diprotons and dineutrons would be bound" | "below about 0.8 of its value" |
| 7 | warning | Scaling relations, slides 45–46 | Slide 46 adds the caption "Fine-tuning? NO!": the sizes and masses on the plot follow from the three numbers and need no fine tuning. | Slides 45–46 are described only as a plot between "below the quantum limit" and "inside a black hole". | Add the slide's point that these relations are not fine tuning. That contrast is what leads into the real fine tunings on slides 48–52. |
| 8 | info | "Which processes happen?", beta decay history | Slide 19 says *momentum* conservation appeared to be violated. | "energy and momentum seemed not to be conserved" | Historically the page is the better statement (the energy spectrum was the key problem), but it differs from the slide without saying so. Optional bracket. |
| 9 | info | "Emission, absorption and recoil" / Harvard tower | Slide 24 gives the Pound–Rebka redshift as "~10⁻¹⁴"; slide 25 gives "5×10⁻¹⁵". | The page uses 5×10⁻¹⁵ (slide 25). | That is fine and matches 2gh/c² = 4.9×10⁻¹⁵. A short bracket could note that slide 24 rounds to 10⁻¹⁴. |
| 10 | info | Same paragraph | Slide 24: "Allows measuring 2cm/s Doppler shifts!" | "shifts as small as those from moving the source at 2 cm/s can be measured" | Faithful to the slide. However, the Pound–Rebka shift corresponds to about 1.5 μm/s (4.9×10⁻¹⁵ c). The reader may think 2 cm/s was the resolution needed. Optional clarification. |
| 11 | info | Fine tuning, first sentence | The value v = 246 GeV is on slide 49. Slide 48 lists only "Dark energy density, Higgs VEV". | "$v = 246$ GeV (slide 48)" | Cite "slides 48–49". |
| 12 | info | Fine tuning, carbon chain (slide 50) | The slide shows the chain α+α→⁸Be, ⁸Be+α→¹²C, ¹²C+α→¹⁶O, beside Figure 1 of Oberhummer, Csótó and Schlattl, which shows how C and O production depend on the strength of the nuclear and Coulomb forces (figure not reproduced on OCW). | "a delicate chain" | Optionally say why it is delicate: it needs a resonance in ¹²C (the Hoyle state), and small changes to the forces would give a universe with too little carbon or too little oxygen. Mark this as the page's own explanation. |
| 13 | info | Opening paragraph / source title | The deck is titled "MIT Course 8.033, Fall 2006, Lecture 13" (slide 4). | The page calls it Lecture 14. | This is consistent with the site's syllabus (`lecture13_part2` = site Lecture 14). Consider one bracket saying that the slides call it Lecture 13. |
| 14 | info | Multiverse levels (slide 36) | The levels are listed without names. | "Tegmark's four levels" | Correct attribution (Tegmark's classification). Optionally note that Level III is the quantum many-worlds level, which explains "nothing qualitatively new". |
| 15 | info | Slide 21 examples | The list also includes "γ + particle → particle + e⁻ + e⁺" (pair production near a particle). | Omitted. | Add it. It matters because γ → e⁻e⁺ alone cannot conserve 4-momentum. That is a natural energy-momentum point for this lecture. |

## Arithmetic and answer checks
All recomputed independently in Python:
- Compton, 100 keV at 90°: 100/(1 + 100/511) = 83.63 keV, so the electron gets 16.37 keV. Page values 83.6 and 16.4 are correct. Quiz Q1 answer index 2 (83.6 keV) is correct.
- ⁵⁷Fe rest energy 57 × 931.5 MeV = 5.3096×10¹⁰ eV (page: 5.31×10¹⁰). Recoil fraction 14.4×10³/(2 × 5.31×10¹⁰) = 1.356×10⁻⁷ (page: 1.4×10⁻⁷). With the true ⁵⁷Fe mass (56.935 u) it is 1.358×10⁻⁷, essentially the same. Equivalent speed 1.356×10⁻⁷ × 2.998×10⁸ = 40.7 m/s (page: "about 41 m/s"). Correct.
- Tower: 9.81 × 22.6/(3.00×10⁸)² = 2.46×10⁻¹⁵ (page: 2.5×10⁻¹⁵). Twice that is 4.9×10⁻¹⁵, which matches slide 25's "5×10⁻¹⁵" and quiz Q4 (answer index 0). Correct. Reading slide 25's figure as the up-minus-down comparison is historically right (Pound and Rebka compared the two directions).
- Ratio recoil/tower: 1.356×10⁻⁷/2.463×10⁻¹⁵ = 5.5×10⁷. "Fifty million" is acceptable as an order-of-magnitude statement ("about fifty-five million" would be closer). The calcs tolerance (±6 million) accepts it.
- Star: (2.176×10⁻⁸)³/(1.6726×10⁻²⁷)² = 3.68×10³⁰ kg = 1.85 M☉ (M☉ = 1.989×10³⁰ kg). Page: 3.7×10³⁰ kg, "about twice the mass of the Sun". Correct. In kg, M ~ 1/m_p² (Planck units) is m_pl³/m_p², as the page uses.
- 938.26/0.511 = 1836.1, which matches "1836" (slide 11).
- m_p/m_pl with current constants = 7.685×10⁻²⁰. The slide's 7.68417×10⁻²⁰ uses an older G. The page quotes the slide, which is fine.
- Atomic recoil term, 10 eV on hydrogen: 5.3×10⁻⁹, which matches "~10⁻⁸". Doppler β at 300 m/s = 10⁻⁶. Correct.
- Recoil formulas: β′ = p/E = ħω/(m₀c² + ħω) is correct. ħω = (M² − m²)c⁴/2Mc² with m = M − Q/c² gives (1 − Q₀/2m₀c²)Q₀, which is correct (also confirmed as an identity in the calcs file).
- Atom radius 1/(m_p α β) = 1/(m_e α), the Bohr radius in Planck units. Correct.
- Quiz Q2 (answer index 3, n → p⁺ + e⁻ forbidden): the marked answer is correct. The explanation needs work (row 5).
- Quiz Q3 (answer index 1): best of the choices, but the wording needs work (row 3).
- Flashcards: all correct. The "allowed processes" card lists the slide's examples. The slide says "e.g.", so the list is not complete, but this is acceptable.
- The calcs file `calcs/8.033/particle-processes-unsolved-problems.yaml` covers every number on the page. I did not run `npm run calc:test`.

## Coverage and order
- The order follows the slides: 1 (Feynman), 2–3 (recap, P = ħK, covered on the previous page), 4 (topics), 5–8 (accelerators, curvature question; the answer r = p/(qB) is on the Lecture 12 page, checked), 9–10 (particle charts), 11 (rest energies, all values checked against the slide), 12–16 (Lagrangian, parameter tables, "How measure? / Why these values?" on slide 14, checked), 17–22, 23–27, 28 (repeat of 20), 29–30, 31–36, 37–46, 47–52.
- Omitted: slide 22's nuclear terminology (Z, A, isotopes, mass excess). It is already covered on the previous page (`atoms-photons-nuclei`, "Terminology", checked), so this is acceptable. Also omitted: the slide 21 item "γ + particle → particle + e⁻e⁺" (row 15), the slide 33–34 numerical values (Earth mass 5.9742×10²⁴ kg, 1 AU, m_e, Bohr radius), the Level IV row of slide 35 (row 2), and the "Fine-tuning? NO!" point of slide 46 (row 7).
- Slides 47 and 52 (Tegmark figures 4 and 7) and the figure on slide 50 are blank in the OCW PDF (figures removed, only captions). The page cannot and does not describe them. Fine.
- Slide 32 (Yogi Berra quote) is not reproduced or mentioned. Fine.
- Added beyond the slides: the later-developments bracket (Higgs 2012 is correct; neutrino part wrong, row 1) and the worked example (the page's own).
- Formula citations: all four `<Formula>`s are on their cited slides. Recoil after absorption and photon emission with recoil are both on slide 23. Compton is on slide 27 (same notation, hν, m_e c², θ). Three little numbers are on slide 37 (the page gives α only in its SI form, q_e²/4πε₀ħc, which is also on the slide). None of them is the page's own, so no "page's own" marking is needed.
- Historical facts checked: Pauli 1931 and Reines–Cowan 1956 (as on slide 19); parity 1956 (Yang, Lee, Wu; Wu's result was published in 1957, but the slide says 1956 and that is acceptable); Moon 1951; Mössbauer Nobel 1961; Pound–Rebka 1960, 22.6 m, ⁵⁷Fe 14.4 keV; Agrawal, Barr, Donoghue and Seckel 1998 (PRL 80, 1822); Ehrenfest 1917 and Tangherlini 1963; Weisskopf 1975 and Carr and Rees 1979. All match the slides and are correct. The Higgs boson discovery at the LHC in 2012 is correct.
- Possible later development not mentioned: proton-decay limits are now above 10³⁴ years (Super-Kamiokande, p → e⁺π⁰). This is optional; the page's "far longer than 10³² years" still matches the slide.

## Licensing
- No figures are reused. The page describes in words only the slides credited to Wikipedia (2, 3, 6, 7, 43), "Figure by MIT OCW" (2, 9, 25, 35), CPEP (10), NASA/ESA (26, 42), Physical Review Letters (49), T. D. Gutierrez (12), and the arXiv figures (47, 50–52). The page's opening paragraph says so. There is no `courtesy:` field. None is needed, since no credited figure is reproduced.
- The Yogi Berra quote (slide 32) is not reproduced.
- No OpenStax or LibreTexts material.
- Wording close to the slides (paraphrased, not verbatim, and acceptable as short terminology, but worth loosening):
  - "Many physicists suspect that lepton or baryon number is violated very slightly, so that protons decay, if one waits far longer than 10³² years" (slide 19)
  - "chemical reactions, where atoms are rearranged and photons or electrons emitted or absorbed, non-relativistically" (slide 20)
  - "Changing v ... below half its value, protons would decay into neutrons ... above five times, neutrons would decay even inside nuclei" (slide 49, a list of facts)
  - The unsolved-problems list follows slide 30 question by question. Its content is a list of facts, so this is acceptable.
- No em dashes found on the page.

## Notes
- Cosmology callout: it fairly says that dark energy, dark matter and inflation are on the slide-30 list and are central to cosmology. It links to `/courses/8-286/anthropic-multiverse`, which exists and is 8.286 Lecture 2, so "the opening lectures of 8.286" is correct. Lecture 1's eternal-inflation page also covers the multiverse. The attribution to Guth matches that page, which treats anthropic explanations as a last resort. Consider adding that Guth treats anthropic reasoning as controversial ("explanation of last resort"), so the callout does not read as an endorsement.
- leadsTo: 8.033 Lecture 15 = "Relativity and Electromagnetism" (`lecture14_em1`), which is correct. 8.286 Lecture 2 is correct.
- The slide 11 neutrino row has a typo on the slide ("μ_τ" for ν_τ). The page writes "the neutrinos", so the slip is not repeated.
- The units remark "c = ħ = G = k_B = |q_e| = 1" next to an SI expression for α comes from slide 37 itself. It is not a page error.

## Resolution (2026-11-16, by the page author)

- Error (neutrino oscillations): rewritten; oscillations predate 2006 and measure differences of squared masses, with masses and ordering still open. Added the later proton-decay limit (above about 10³⁴ years, calcs fact).
- Slide 35: the sentence now reads the diagram the right way (items moving from fundamental to effective/initial conditions) and includes the Level IV / TOE row.
- Quiz 3: the answer now attributes the factor of a thousand to the transition energies, with recoil Q₀²/2m₀c².
- Worked example (b): adds thermal broadening (about 10⁻⁶) and says the Mössbauer effect removes both recoil and broadening; the 2 cm/s figure is now framed as the slide's.
- Quiz 2: explanation rewritten (lepton number; two-body decay would give a fixed electron energy).
- Slide 49: "below 0.8"; slide 46's "Fine-tuning? NO!" point added; v = 246 GeV cited to slide 49.
- Info: deck numbering explained; slide 21's photon-plus-particle pair creation added; beta-decay sentence notes the slide says momentum; slide 50 explained briefly as the page's reading.
