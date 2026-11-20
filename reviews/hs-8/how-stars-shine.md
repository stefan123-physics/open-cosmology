---
page: content/year-0/hs-8/how-stars-shine.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture10_dyn1/ (read: e6c4fc1de12a22b2b563416a2be13972_lecture10_dyn1.pdf, all 18 slides; course page under CC BY-NC-SA 4.0; slide images are marked "courtesy of Wikipedia/NASA", no text marked excluded)
  - https://science.nasa.gov/sun/facts/ (read; last updated 17 Sep 2026)
  - https://science.nasa.gov/universe/stars/ (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; last updated 9 May 2024)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: mit8_01scs22_chapter14.pdf, Sec. 14.4.3)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/energy-and-chemical-change/12-energy-and-chemical-change-02 (read; CC BY footer; CCBY row in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-02 (read; CC BY footer; CCBY row)
  - NIST CODATA 2022 values for m_p, m_e, m_alpha, u c² (not re-fetched; checked against the stored CODATA 2022 figures)
verdict: needs-changes
---

# Review: How stars shine (8.5)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Section "The answer: nuclear fusion", paragraph after the three steps ("only through the weak force") | 8.033 slide 14 only calls the neutrino "a weakly interacting particle"; the weak force as one of the four forces is introduced in lesson 8.7 (`particles-and-forces`), which comes after this lesson. No earlier lesson (Blocks 0 to 8.4) uses "weak force" (checked by search) | "a proton turning into a neutron happens only through the weak force" | Term used before it is introduced (Writing rule 2). Say it plainly ("happens only very rarely: a proton turning into a neutron is an extremely slow process") and add "lesson 8.7 meets the force behind it, the weak force" as a forward pointer. |
| 2 | warning | Same paragraph, "The two positrons each meet an electron of the hot gas and turn into gamma rays"; and the 2m_e in the formula for Q | Annihilation is not in any earlier lesson (no match for "annihilat" in Blocks 0 to 8.4); it is introduced in lesson 8.7. No source location is given (slide 15 only lists "IN: 6 H, (2 e⁻)") | Stated as a fact with no lesson or source | It is described plainly, which rule 2 allows, but add a forward pointer ("lesson 8.7 explains this annihilation") and a cite: the NASA Fermi page used in 8.7 ("both are destroyed and converted into gamma rays") or slide 15 for the two electrons in. |
| 3 | warning | Section "Gravity against pressure", thermostat paragraph and quiz 2 explanation: "A gas that expands cools" | Not in `ideal-gas-law` (4.3) as planned; it is the first law / adiabatic expansion (4.8 `first-law-of-thermodynamics`, 4.10 "an expanding gas cools"). Neither is in `prerequisites`, and Block 4 is not written yet | Used as a known fact | Add `first-law-of-thermodynamics` (or `towards-the-universe-cooling`) to `prerequisites`, or give a one-line reason ("it does work pushing its surroundings outward, and that energy comes from its heat"). The thermostat reasoning itself is the page's own and is correct for the Sun. |
| 4 | warning | Section "From the core to the surface", radiation-zone bullet | Wien's law (lesson 7.2): at 1.6 × 10⁷ K the peak is at 2.9 × 10⁻³/1.6 × 10⁷ ≈ 1.8 × 10⁻¹⁰ m, and the radiation zone runs from about 7 to 2 million K (peaks 0.4 to 1.5 nm) | "light, mostly gamma rays and X-rays at these temperatures" | The thermal radiation is mostly X-rays; gamma rays come only from the reactions themselves. Write "mostly X-rays at these temperatures". |
| 5 | warning | Section "Heavier stars, heavier elements": "Each stage is shorter than the one before; the last, silicon into iron, takes only days (NASA, *Stars*)" | NASA *Stars*: "By the time silicon fuses into iron, the star runs out of fuel in a matter of days"; the whole chain "takes just a few million years". It gives no length for each stage and does not say each is shorter | Attributes both claims to NASA | Correct physics, but the first half is not in the cited page. Say "runs out of fuel within days once silicon fuses into iron (NASA, *Stars*)" and mark "each stage is shorter than the one before" as standard (no cite) or drop it. |
| 6 | warning | Summary, last bullet; flashcard "Lifetime of a star" | NASA *Stars*: the *most* massive stars live "a few million years"; lifetimes range from a few million to trillions of years | "Heavier stars are far brighter, live only millions of years" / "Heavier stars ... live only a few million years" | Over-general: a star of twice the Sun's mass lives about a billion years. Write "The heaviest stars ... live only a few million years", as the body text does. |
| 7 | warning | Section "The answer: nuclear fusion": "at such temperatures nuclei move fast enough to come close despite their electric repulsion" | 8.033 slide 12 says the same ("At high speeds, nuclei come close enough for the strong nuclear force to bind them") | Same | Simplified: at 1.6 × 10⁷ K a typical kinetic energy is about 2 keV, far below the roughly 1 MeV electric barrier; fusion happens only through quantum tunnelling of the fastest nuclei. Not wrong as an outline, but add "only the very fastest nuclei, helped by a quantum effect met in lesson 8.6, get close enough" or similar, since 8.6 is the next lesson. |
| 8 | info | Formula "How long a store of energy lasts", `at` | Slide 10 asks "why for so long?"; it has no formula | Cites slide 10, notes it is P = E/t rearranged | Acceptable as written. Better cite lesson 3.5 (`power`) for P = E/t and keep slide 10 for the question. |
| 9 | info | Section "The answer", composition "(slide 8, read from the dark lines in its spectrum, lesson 7.5)" | Slide 8 gives the percentages (H 70%, He 28%, O 0.8%, C 0.3%, Fe 0.2%); slide 9 says they come from absorption lines | "slide 8" for both | Write "slides 8 and 9". `spectra-in-astronomy` (7.5) is referred to but not in `prerequisites`; add it. |
| 10 | info | Formula "Gravitational energy of a star", `at` "Sec. 14.4.3, Eq. (14.16)" | The chapter numbers two other equations (14.16) as well (p. on closed-path work and a worked example); the one in Sec. 14.4.3 is U_G(r) = −Gm₁m₂/r | Correct location | Fine; "Sec. 14.4.3" removes the ambiguity. The order-of-magnitude step to GM²/R (true value 3GM²/(5R) for a uniform ball) is the page's own and is labelled so. |
| 11 | info | Section "Gravity against pressure", density | NASA Sun Fact Sheet: central density 1.622 × 10⁵ kg/m³ (162 g/cm³). Writer notes other NASA pages give 150 g/cm³ | Uses only the fact-sheet value | Consistent; no change. |

## Formulas and citations
- t = E/L: definition of power rearranged, correct; see row 8.
- E ≈ GM²/R: order-of-magnitude Kelvin–Helmholtz energy from U = −Gm₁m₂/r (MIT 8.01SC Eq. 14.16 in Sec. 14.4.3, verified). Labelled as the page's own. Correct.
- pp chain, steps 1–3: standard, balanced (A and Z checked: 1+1 = 2+0, 1+1 = 1+1; 2+1 = 3, 1+1 = 2; 3+3 = 4+1+1, 2+2 = 2+1+1). Slide 15 gives "IN: 6 H, (2 e⁻); OUT: He, 2 H, 2 ν, 4 γ" as a diagram (image courtesy of Wikipedia; the page writes its own equations, no figure copied). Positron notation matches lesson 7.8.
- Q = (4m_p + 2m_e − m_He)c²: correct (equivalent to 4 m(¹H atom) − m(⁴He atom)); slide 16 gives "He = 99.3% of 4 × H", which the page reproduces as 0.71%.
- Slide 14 (p → n + e⁺ + ν, "inverse β-decay"), slide 12 (fusion in the core), slide 10 (the three questions), slide 18 (neutrinos see into the core) verified.
- NASA *Sun: Facts*: 4.5 billion years, a little less than halfway, about 5 billion to go; core above 15 million °C, 138 000 km thick; radiative zone, about 170 000 years from the core to the top of the convection zone; convection zone below 2 million °C; photosphere about 5500 °C; 150 million km; engulf Mercury and Venus and possibly Earth; outward pressure keeps the Sun from collapsing. All verified. "138 000 km thick" read as a radius (1.4 × 10⁸ m, 0.20 R) is a reasonable reading.
- NASA Sun Fact Sheet values (mass, radius, luminosity, mass conversion rate, central P, T, ρ) verified.
- Siyavula Grade 11, 12.2: C(s) + O₂(g) → CO₂(g), ΔH = −393 kJ·mol⁻¹, verified. Siyavula Grade 12, 12.2: 1 eV = 1.6 × 10⁻¹⁹ J, verified.

## Arithmetic and answer checks
Recomputed independently (Python); `npm run calc:test` passes (11 986 checks), `content:check` 0 errors for this page.
- Burning: 393e3/0.012 = 3.28 × 10⁷ J/kg; × 1.99 × 10³⁰ = 6.52 × 10³⁷ J; /L = 1.70 × 10¹¹ s = 5395 yr ("about 5400") ✓. 4.5 × 10⁹/5400 = 8.3 × 10⁵ ("almost a million") ✓.
- Gravity: GM²/R = 3.80 × 10⁴¹ J; /L = 9.92 × 10¹⁴ s = 3.14 × 10⁷ yr ✓; plot point 31.4 ✓; at 0.1 R: 314 Myr ("about 310") ✓; 3.14 × 10⁷/5400 ≈ 5800 ("thousands of times") ✓; 4.5 × 10⁹/3.14 × 10⁷ = 143 ✓. Plot range 0–350 contains 314 at x = 0.1 ✓.
- Mass defect: 4.03022 − 4.00151 = 0.02871 u ✓; × 931.5 = 26.74 MeV ✓ (full CODATA values give 26.73 MeV); × 1.6 × 10⁻¹³ = 4.28 × 10⁻¹² J ✓; 0.02871/4.03022 = 0.00712 ✓; 0.0071 × 9 × 10¹⁶ = 6.4 × 10¹⁴ J/kg ✓; /3.3 × 10⁷ = 1.9 × 10⁷ ("about 20 million") ✓.
- Fuel bill: 3.828 × 10²⁶/4.28 × 10⁻¹² = 8.94 × 10³⁷ s⁻¹ ✓; × 4 × 1.67 × 10⁻²⁷ = 5.97 × 10¹¹ kg/s ✓; × 0.0071 = 4.26 × 10⁹ kg/s ✓, equal to the fact sheet's 4260 × 10⁶ kg/s and to L/c² = 4.25 × 10⁹ ✓.
- 1.5 × 10¹¹/3 × 10⁸ = 500 s ✓ (8.3 min). 2.477 × 10¹¹ bar = 2.48 × 10¹⁶ Pa ✓; ratio to 10⁵ Pa = 2.5 × 10¹¹ ✓. 1.622 × 10⁵/1000 = 162 ("some 160") ✓. R/c = 2.32 s ✓. 1.38 × 10⁸/6.957 × 10⁸ = 0.198 ✓.
- Lifetime: 3.156 × 10¹⁷ s ✓; × 6.0 × 10¹¹ = 1.89 × 10²⁹ kg ✓; /M = 0.095 ✓; /0.70 = 13.6% ("about 14%") ✓.
- Quiz 0: answer 0 ("a few thousand years") ✓; other choices wrong ✓.
- Quiz 1: 1.5 × 10²⁵/4.3 × 10⁻¹² = 3.49 × 10³⁶ ✓ (answer 1); distractors 5.6 × 10²³ (÷26.7), 1.4 × 10³⁷ (×4), 2.9 × 10⁻³⁷ (Q/L) all reproduced ✓.
- Quiz 2: answer 1 ✓ (see row 3 for the "expands and cools" term).
- Quiz 3: answer 1 ✓; explanation true.
- Quiz 4: 10 × 10⁹ × 8/2000 = 4.0 × 10⁷ yr ✓ (answer 2); 80 Gyr, 1.25 Gyr, 625 000 yr reproduced ✓. Values realistic (L ∝ M^3.5 gives about 1450 L☉ for 8 M☉).
- Flashcards: all true, except the over-general lifetime in the last card (row 6).
- G = 6.674 × 10⁻¹¹ here; lesson 6.13 uses 6.67 × 10⁻¹¹. Both fine; info only.

## Only earlier terms
- Error: "weak force" (row 1), introduced only in 8.7.
- Warning: positron–electron annihilation (row 2), introduced in 8.7; plainly described here.
- Warning: "a gas that expands cools" (row 3): Block 4 lesson 4.8/4.10, not in `prerequisites`; Block 4 is planned but not written (other PC), and the lesson-list titles cover it.
- Planned, unwritten prerequisites `density-and-pressure` (4.1), `ideal-gas-law` (4.3), `conduction-and-convection` (4.7): their titles and §4 rows cover pressure with depth, P grows with T, and convection, so they count as introduced.
- Lesson referred to but not listed in `prerequisites`: 7.5 `spectra-in-astronomy` (dark lines). Add it.
- Present in earlier lessons (checked): luminosity, main sequence, red giant, white dwarf (7.6); positron, neutrino, beta-plus decay (7.8); strong force, deuterium (7.7); binding-energy curve, iron peak, Big-Bang fusion (8.4); L/c² and 4 million tonnes per second (8.3); E_p = −GMm/r (3.11); supernova remnants (7.10). Helium-3 and photosphere are defined on the page.

## Coverage
- §4 row 8.5 (topic, NASA *Sun: Facts*, leads to `8-033/momentum-energy-sun`): covered at VWO level: why chemistry and contraction fail, the pp chain, Q and the 0.7%, hydrostatic balance, energy transport, lifetime, heavier stars and elements up to iron.
- Left out: the CNO cycle (main route in stars heavier than about 1.3 M☉), helioseismology (slide 18 mentions it), the solar-neutrino problem. None is needed at VWO level; one sentence on helioseismology next to the neutrino paragraph would complete slide 18.
- No PhET sim; §4 names none (the `blackbody-spectrum` sim is suggested in the plan for 8.5 as optional).

## Where this leads
- `{ course: "8.033", lecture: 10 }` resolves to one page, `content/year-2/8.033/momentum-energy-sun.mdx` ("Relativistic momentum and energy, and why the Sun shines"), the same lecture as the page's main source and the §4 target. Topic matches. ✓
- `towards: false` ✓ (8.5 is not the block's last lesson). The cosmology callout (first helium from the Big Bang, heavier elements from stars) is correct and consistent with 8.4.

## Licensing and AI terms
- No sentence copied: slide text is terse and only its facts are used; NASA sentences are paraphrased (e.g. NASA "engulf Mercury and Venus, and possibly Earth as well" → page "large enough to swallow Mercury and Venus and perhaps the Earth"; close but a short factual phrase). Fine.
- No figure copied; the only graph is generated from t = GM²/(RL). Slide 15's pp-chain image (Wikipedia) is not reproduced.
- Worked examples and quiz questions are the page's own; the MIT slides have no exercises, and Siyavula 12.2's examples are about reaction enthalpies, not the Sun.
- Siyavula: both pages are CCBY rows; no logo or "Everything Science" branding.
- MIT: nothing used is marked excluded or all rights reserved.
- NASA: no insignia, no "according to NASA" phrasing; citations by page title.
- No ESO text. No forbidden source cited or used.

## Notes
- The thermostat and the GM²/R estimate are the page's own, as the writer says; both are correct at this level.
- The 170 000-year figure is NASA's; published estimates range widely (10⁴ to 10⁵+ years). Using NASA's value with a cite is fine.

## Resolution (2026-11-20, by the page author)
1. Fixed: the first step is now "an extremely rare, slow process", with "lesson 8.7 meets the force behind it, the weak force" as a forward pointer.
2. Fixed: the positrons and electrons are "destroyed and turn into gamma rays", cited to slide 15 (the two electrons going in) with a forward pointer to lesson 8.7 for the annihilation.
3. Fixed: added `first-law-of-thermodynamics` (4.8) to prerequisites and a one-line reason in the thermostat paragraph and in the quiz 2 explanation (the gas does work pushing its surroundings outward, and that energy comes from its heat).
4. Fixed: radiation zone now "mostly X-rays at these temperatures (Wien's law, lesson 7.2)".
5. Fixed: now "Once silicon fuses into iron, the star runs out of fuel within days (NASA, Stars)"; the claim that each stage is shorter was dropped.
6. Fixed: summary and flashcard now say heavier stars live shorter lives, the heaviest only a few million years.
7. Fixed: added "only the very fastest nuclei get close enough, helped by a quantum effect called tunnelling that lesson 8.6 meets".
8. Fixed: t = E/L now cites the definition of power (lesson 3.5), with slide 10 kept for the question.
9. Fixed: "slides 8 and 9"; `spectra-in-astronomy` added to prerequisites.
10. Fixed: the `at` now reads "Sec. 14.4.3, Eq. (14.16) of that section".
11. No change needed.

Checks: npm run calc:test -- -k how-stars-shine: 51 passed. npm run content:check: 0 error(s); the only warnings for this page are the four planned-but-unwritten Block 4 prerequisites. Status set to reviewed.
