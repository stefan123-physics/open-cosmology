---
page: content/year-0/hs-4/heat-and-specific-heat.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/intermolecular-forces/04-intermolecular-forces-02 (read: "The unique properties of water (ESBMT)", specific heat box, Worked Example 4, Exercise 4.3; CC BY footer; CCBY row 445 in docs/siyavula-licences.tsv; no OpenStax)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read: Table 3.1 and text; CC BY footer; CCBY row 351; no OpenStax)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read: MIT8_044S13_L6.pdf, slides L6B1–L6B12; no exclusion or rights-reserved notice)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec04/ (read for comparison: slide 6 has Q = c_p m ΔT and c_water = 4.18 J/(g K); not cited by this page)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=2 (read: liquid Shomate A–E, 298–500 K, M = 18.0153)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175&Mask=2 (read: Cp,liquid 112.4 J/(mol K) at 298.15 K, Petrov et al. 1989; M = 46.0684)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440508&Mask=2 (read: solid Shomate A–E, 298–1358 K, M = 63.546)
  - NIST aluminium, iron, lead pages (not opened; coefficients in the page's calcs recomputed and agree with the per-kg values; copper and water checked on NIST)
  - public/phet/energy-forms-and-changes_1.4.26_en.html (string table checked)
  - Later lessons that rely on 4.5: hs-4/phase-changes, hs-6/electric-power (6.8), hs-7/radiation-and-health, hs-8/mass-and-energy; earlier: hs-4/temperature (4.2); content/year-3/8.044/first-law.mdx
verdict: pass-with-notes
---

# Review: Heat and specific heat (4.5)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formulas "Heat needed to change the temperature" (Q = mcΔT) and "Temperature rise from a heater" (mcΔT = PΔt), both `cite="mit"` (Siyavula Gr 11, 4.2) | Siyavula 4.2 gives only the verbal definition ("the amount of heat energy that is needed to increase the temperature of a unit mass ... by one degree"); it has no formula, no unit and nothing on heaters or power | Q = mcΔT "rearranged" from the definition; mcΔT = PΔt "with the heat Q supplied at power P" (lesson 3.5) | Writer-flagged. Q = mcΔT as a rewriting of the verbal definition is acceptable, and the `at` texts are honest that the heater step is the page's own (with P = E/Δt from 3.5). Better: add MIT 8.21 Lecture 4 slides as a reading and cite slide 6 ("Q = c_p m ΔT", water 4.18 J/(g K)) for Q = mcΔT and for the heater formula ("Q = c_p m ΔT with Q = PΔt, lesson 3.5"). No error: nothing on the page is wrong or unsupported, only weakly sourced. |
| 2 | warning | Frontmatter `summary`: "4180 J/(kg K) for water, ten times that of copper" | — | Quiz 1 explanation: "4180/385 = 10.9, about 11" | Write "about eleven times that of copper" so summary and quiz agree. |
| 3 | warning | "Why water softens the climate", last paragraph: "cooler summers, warmer winters and smaller differences between day and night (Siyavula Grade 11, 4.2)" | Siyavula: "Towns close to the sea often have less extreme temperatures than inland towns"; oceans "act as heat reservoirs" that moderate climate; nothing on day and night | Day–night difference attributed to Siyavula | Physics correct, but Siyavula says only "less extreme temperatures". Move the citation to after "milder weather" and give the summer/winter/day–night detail as the page's own explanation. |
| 4 | info | "Water's large specific heat also helps living things: your body is mostly water ..." | Siyavula's only body sentence is about the heat of vaporisation (evaporation), not specific heat | Uncited | True and standard; fine as the page's own remark. Do not attach the Siyavula citation to it. |
| 5 | info | Opening paragraph (pan hot, water lukewarm) and the bullet "This is why the pan gets hot so much sooner than the water" | Siyavula Worked Example 4 asks exactly this (pot heats quickly, water slowly) | Used as the opening hook, cited in the bullet | Fine: an everyday observation, reworded, cited. Not used as a worked example. |
| 6 | info | Quiz 3 explanation: "a hot nail gives heat to a cool lake (lesson 4.2)" | Lesson 4.2 compares the thermal energy of a red-hot nail and a lake, and uses a spark and a bath for the direction of flow | Nail → lake attributed to 4.2 | Harmless; could say "a hot spark gives heat to a bath of water (lesson 4.2)" to match 4.2 exactly. |
| 7 | info | Calorie | — | Not mentioned | Writer-flagged. The calorie is not used in Dutch VWO physics; omission is fine. |
| 8 | info | Calcs `quiz-copper-water` | — | Has no `quiz: 1` tag (quiz 0 and 2 entries do) | Writer-flagged. Add `quiz: 1` for consistency; not required. |
| 9 | info | Units outside maths in prose and quiz text: "60 °C is halfway", "$1.05 \times 10^{4}$ J", "4180 J per degree", "by 20 degrees", "NIST gives 4184 for water at 25 °C" | — | Plain-text units | Optional: put into `$…\ \text{J}$` etc. for consistent read-aloud, as on lesson 4.2. |

## Formulas and citations
- c = Q/(mΔT) (`mit`, 4.2 ESBMT): matches Siyavula's definition "heat energy ... needed to increase the temperature of a unit mass ... by one degree" ✓ (Siyavula gives no unit; J/(kg K) is the page's SI unit, correct).
- Q = mcΔT (`mit`, "rearranged") ✓ by algebra; see row 1.
- C = Q/ΔT = mc (`reading1`, slide 10): L6B10 "C_V ≡ (đQ/dT)_V, C_P ≡ (đQ/dT)_P" ✓; the page states correctly that it drops the V/P distinction for solids and liquids.
- mcΔT = PΔt (`mit`): see row 1.
- Heat lost = heat gained and the weighted-average final temperature (`reading1`, slide 8): L6B8 "Heat is a flow of energy; Energy is conserved" ✓; the formulas are derived on the page (calcs identity `mix-formula` passes).
- Key callout (slides 8 and 9): L6B9 "When đW = 0, heat flows from high T to low T" ✓. Slides 7 and 8 for "heat is the part of the energy change that is not work" ✓ (L6B7 "đQ ≡ dU − đW").
- Siyavula Gr 10, 3.2: "If the copper is heated, the energy of the atoms increases"; speeds depend on temperature ✓ for "heating gives particles more energy, so they move faster".
- Siyavula Gr 11, 4.2: hydrogen bonds must be broken before molecules move faster ✓; oceans as heat reservoirs ✓; coastal towns ✓ (row 3).
- NIST table, recomputed: water Shomate at 298.15 K = 75.37 J/(mol K), /0.0180153 = 4184 J/(kg K) ✓ (→ 4180); ethanol 112.4/0.0460684 = 2440 ✓; aluminium 24.21/0.0269815 = 897 ✓ (→ 900); iron 25.10/0.055845 = 449 ✓ (→ 450); copper 24.47/0.063546 = 385 ✓; lead 26.85/0.2072 = 130 ✓. Water and copper coefficients and molar masses checked on NIST; the water Shomate fit is valid 298–500 K, so 298.15 K is just inside ✓. Only individual values looked up (rule 11) ✓.

## Arithmetic and answer checks
Recomputed independently; `pytest -k "heat-and-specific-heat or conduction-and-convection"`: 73 passed.
- Three materials: 5000/(0.5 × 900) = 11.1 K ✓; 5000/192.5 = 25.97 → 26 K ✓; 5000/2090 = 2.39 → 2.4 K ✓.
- Plot caption: 0.75 × 4180 × 85/3000 = 88.8 → 89 s ✓; /1000 = 266.5 → 266 s ✓ (266.475). Curves stop at 100 °C ✓; at the largest slider mass the lines stay inside the range ✓.
- Kettle: 86 K ✓; 0.60 × 4180 × 86 = 215 688 → 2.16 × 10⁵ J ✓; /2400 = 89.9 → 90 s ✓. Different numbers from lesson 6.8 (1.8 kW, 1.0 kg, 20 → 100 °C) ✓.
- Which metal: 50 × 240 = 1.2 × 10⁴ J ✓; 33.5 K ✓; 12 000/26.8 = 447.8 → 448 ✓; "measured c would come out too large" if energy leaked ✓ (smaller ΔT in the denominator).
- Unequal water: 24.5/0.70 = 35 °C ✓; 0.20 × 4180 × 50 = 0.50 × 4180 × 20 = 41 800 J ✓.
- Copper in water: 115.5 and 1045 J/K ✓; ratio 9.05 ✓; numerator 31 872.5 (page "31 873", rounded) ✓; 27.47 → 27.5 °C ✓; 67.5 and 7.5 (from the rounded 27.5) ✓.
- Climate: 4180/450 = 9.3 → "9 degrees" ✓.
- Quiz 0: 2.5 × 4180 × 12 = 125 400 → 1.25 × 10⁵ J ✓; distractors 1.05 × 10⁴ (no ΔT), 5.02 × 10⁴ (no m), 4.18 × 10³ (c alone) all wrong ✓. Answer 0 ✓.
- Quiz 1: ratio 10.86 → "about 11" ✓; choices 1–3 wrong ✓. Answer 0 ✓.
- Quiz 2: (9 + 9)/0.40 = 45 °C ✓; algebra in explanation ✓; 60 °C is the equal-mass average ✓. Answer 0 ✓.
- Quiz 3: answer 0 ✓; choice 3 ("more thermal energy") rightly wrong ✓.
- Quiz 4: answer 0 ✓; "far more than rock or soil" true (about 800–1500 J/(kg K)) ✓.
- Flashcards: all true.
- Consistency with later lessons: c_water = 4180 J/(kg K) is used by 4.6, 6.8, 7.x (radiation-and-health) and 8.x (mass-and-energy) and all point back to lesson 4.5 ✓; 4.6 cites Q = mcΔT "(lesson 4.5)" ✓.

## Only earlier terms
- joule (0.2 ✓), power and P = E/Δt (3.5 ✓), work and kinetic energy (3.x ✓, via conservation-of-energy), thermal/internal energy and "energy flows hot → cold" (4.2 ✓), average kinetic energy of gas molecules (4.4 ✓), kelvin vs degree steps (4.2 ✓).
- "hydrogen bonds": new, but explained in apposition ("the strong attraction between water molecules"); acceptable.
- Heat, specific heat capacity, heat capacity: defined on the page.
- Forward references 4.6, 4.8, 6.8, 8.15 all exist with matching content ✓.

## Coverage
- §4 row 4.5: heat and specific heat, PhET energy-forms-and-changes, leads to `8-044/first-law`. Covered: heat vs thermal energy, c, Q = mcΔT, heat capacity C, heater (P·Δt), measuring c, mixing (heat lost = heat gained), climate.
- Possible VWO gap (warning-level suggestion, not an error): Dutch VWO calorimetry problems usually include the heat capacity C of the vessel (Q = (C + mc)ΔT). The page defines C = mc but always says "ignore the bowl". One sentence or one quiz item with a calorimeter of given C would close it.
- Calorie and C_V/C_P distinction left out: fine at this level.

## Where this leads
- `8.044` lecture 6 → content/year-3/8.044/first-law.mdx exists ("The first law of thermodynamics and paths") ✓. The `why` (heat as the non-work part of dU, dU = đQ + đW, C_V and C_P as heat per degree) matches L6B7, L6B8, L6B10 ✓.
- `towards: false` ✓ (4.10 is the block's last lesson). Cosmology callout (early universe in thermal equilibrium, CMB has an equilibrium spectrum, lesson 8.15) is correct ✓.

## Licensing and AI terms
- Siyavula pages: CC BY footer, CCBY rows in docs/siyavula-licences.tsv, no OpenStax material ✓. "Everything Science" appears only in the attribution title, as on other High School lessons; no logo or branding ✓.
- MIT 8.044 L6 slides: CC BY-NC-SA, no "All rights reserved" or "excluded" notice ✓.
- NIST: individual values looked up and converted per kg, no bulk copying ✓ (rule 11).
- No copied sentences. Closest: "towns by the sea usually have milder weather than towns far inland" vs Siyavula "Towns close to the sea often have less extreme temperatures than inland towns": reworded single idea, acceptable.
- Worked examples and quiz items are the page's own: Siyavula 4.2 has only a qualitative worked example and exercise; 8.21's slide 6 examples (shower, house air) are not reused; no overlap with 4.2 (0.30 + 0.30 kg at 70/10 °C) or 6.8 (1.8 kW kettle) ✓. Quiz 4 (coastal towns) is on the theme of Siyavula Exercise 4.3 Q4 (oceans moderate climate) but is a different question ✓.
- Plot generated from a formula ✓. No forbidden source ✓. No em dashes ✓.
- PhET "Try it": the sim's strings include "Intro", "Iron", "Brick", "Water", "Olive Oil", "Energy Symbols", "Link Heaters", "beaker of water on heating element" ✓; blocks can be placed in the beaker and thermometers dragged onto them ✓. "Put a hot block into cold water": the water starts at room temperature, so "cooler water" would be more exact (info). Could mention ticking "Energy Symbols" to "follow the energy" (info).

## Notes
- Writer flags: heater formula citation (row 1, acceptable, better via 8.21 slide 6); calorie omitted (row 7, fine); quiz-1 calcs tag (row 8, cosmetic).
- No errors found. Verdict pass-with-notes; rows 1–3 are worth fixing.

## Resolution (2026-11-21, by the page author)
- Row 1: added MIT 8.21 Lecture 4 slides as `reading3`; Q = mcΔT and mcΔT = PΔt now cite slide 6 (Q = c_p m ΔT), with Siyavula's definition named in the `at` text.
- Row 2: summary now says "about eleven times that of copper".
- Row 3: the Siyavula citation now follows "milder weather than towns far inland"; summers, winters and day and night are given as the page's own explanation.
- Row 4: unchanged (the body remark carries no citation).
- Row 6: quiz 3 explanation now uses the spark and bath of lesson 4.2.
- Row 8: a `quiz: 1` tag cannot be added, because the quiz checker matches the number against the choices and choice 0 is text ("about 11 times"); left untagged.
- Row 9: units in the quiz 0 and quiz 2 explanations now in maths.
- Coverage gap: added a paragraph on the heat capacity C of a calorimeter, Q = (C + mc)ΔT, and the worked example "A calorimeter that takes its share" (80 J/K cup, 37.3 °C, 38.8 °C without the cup), with calcs entries.
- PhET: "cooler water" and "tick Energy Symbols" in Try it.
- Status set to reviewed.
