---
page: content/year-0/hs-4/temperature.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-01 (read; CC BY footer; CCBY row in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02 (read: Table 7.1, Charles' law, Exercise 7.3; CC BY footer; CCBY row)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-01 (read; CC BY footer; CCBY row)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read; CC BY footer; CCBY row)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l5/ (read: resource page and MIT8_044S13_L5.pdf, slides L5B1–L5B25; no exclusion notice)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_notes-def/ (read: MIT8_044S13_notes.def.pdf, pp. 1–3; no exclusion notice)
  - https://www.nist.gov/pml/owm/si-units-temperature (read)
  - https://science.nasa.gov/sun/facts/ (read; "Page Last Updated: Sep 17, 2026")
  - https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html (read)
  - public/phet/gases-intro_1.1.9_en.html (string table checked)
  - Earlier lessons on disk (0.2, 0.5, 3.4), later lessons that cite 4.2 (4.3, 4.4), calcs/values.yaml (T_CMB), content/year-3/8.044/thermodynamic-variables.mdx
verdict: needs-changes
---

# Review: Temperature and thermal energy (4.2)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Thermal energy is not temperature", first sentence: thermal energy "also called its internal energy, is the total energy of all its particles: the kinetic energy of their random motion, plus the potential energy of the attractive forces between them (Siyavula Grade 10, 3.2)" | Siyavula Gr 10 3.2 says only that particles "have a certain amount of energy which allows them to move at different speeds depending on the temperature" and that there are "attractive forces between particles"; it never defines thermal or internal energy as kinetic plus potential | Cites 3.2 for the KE + PE definition | Unsupported citation. Cite 3.2 only for "particles with energy and attractive forces between them", and give the KE + PE definition as the page's own standard statement, or cite the 8.044 notes p. 1 (reading5) for "U internal energy" as an extensive variable. |
| 2 | warning | Frontmatter summary ("thermal energy is the total energy of all that random motion"), flashcard 5 ("the total energy of the random motion of all the particles"), "What temperature measures" ("Lesson 3.4 called the energy of this random jiggling thermal energy") vs "Thermal energy is not temperature" (KE + PE, "also called internal energy") | — | Two different definitions of thermal energy on one page | Pick one. At VWO level: "internal (thermal) energy = kinetic energy of the random motion plus potential energy between the particles", and say in the summary and flashcard that it includes both. (Strictly, "thermal energy" and "internal energy" are not always used as synonyms; a bracket "(here the same thing)" is enough.) |
| 3 | warning | `prerequisites` | — | `[units-and-si, graphs-and-slope, kinetic-energy, conservation-of-energy]` | The page uses pressure three times ("boils at about 100 °C at normal air pressure", Charles' law "at constant pressure", intensive "like temperature and pressure"). Pressure comes from 4.1, the lesson before in the block, so it is not a term before its introduction, but add `density-and-pressure` to `prerequisites` so the box shows it. Writer-flagged; recommended. |
| 4 | warning | "What temperature measures", Brownian motion | Siyavula Gr 10 3.1: "In 1828 Robert Brown observed that pollen grains suspended in water moved about in a rapid, irregular motion" | "Robert Brown saw pollen grains in water dart about" | Historical slip carried over from the source: Brown watched tiny particles released from inside pollen grains (and later other fine particles), not whole pollen grains, which are too large to jiggle visibly. Write "tiny particles from pollen grains". |
| 5 | warning | Worked example "The Sun and the sky", problem: "NASA gives the temperature of the Sun's visible surface ... as about 5500 °C" | NASA *Sun: Facts*: photosphere "a relatively cool 10,000 °F (5,500 °C)"; core "Temperatures top 27 million °F (15 million °C)" | Values ✓, but the sentence makes NASA the speaker | Close to the "according to NASA" phrasing AGENTS.md rule 11 rules out. Rephrase: "The Sun's visible surface (the photosphere) is at about 5500 °C, and its core at more than 15 million °C (NASA, *Sun: Facts*)." |
| 6 | warning | Before the zeroth-law callout: "a rule so basic that it was named after the first and second laws of thermodynamics (lessons 4.8 and 4.9), yet put before them" | No cited source has the history; 8.044 slide 5 only labels it "0th Law" | "named after" | Ambiguous ("named after" can read as "named in honour of"). The history is standard and correct (the law was given its name only after the first and second laws were numbered). Write "that it was given a name only after the first and second laws ... had been numbered, so it was put in front of them as the zeroth". |
| 7 | info | "A digital thermometer uses an electrical property instead." | No source | Uncited | True and standard (thermistor or thermocouple). Fine as is; electricity is Block 6, but the sentence needs no electricity knowledge. Writer-flagged. |
| 8 | info | "Celsius and kelvin": "The Celsius scale is fixed by water" | NIST: "On the widely used Celsius temperature scale, water freezes at 0 °C and boils at about 100 °C ... zero degrees Celsius is 273.15 K" | "is fixed by water" | Historically true; today the Celsius scale is defined from the kelvin (0 °C = 273.15 K exactly). "was first fixed by water" would be exact. |
| 9 | info | Key callout "The temperature of a substance is a measure of the average kinetic energy of its particles." | Siyavula Gr 11 7.1: "The temperature of a substance is a measure of the average kinetic energy of the particles." | Almost word for word, uncited | A one-sentence standard definition, so not a licensing problem, but add "(Siyavula Grade 11, 7.1)" since it is the main source's definition. |
| 10 | info | "Not every particle moves at the same speed" | Siyavula Gr 11 7.1: "For an ideal gas we assume that all particles in the gas have the same speed" | Speeds differ; temperature tracks the average | The page is right and the source's simplification is not repeated. Good; no change. |
| 11 | info | Units in prose | — | "a gas at 600 K ... 300 K", "20 °C is not 'twice as hot' as 10 °C", "more than 15 million °C" (problem), "300 K" (spoken example), flashcard 3 "A step of 1 K equals a step of 1 °C", quiz 4 explanation "0 °C" | Most units on the page are in maths; these are not. Put them in `$…\ \text{K}$` for consistency and read-aloud (the "300 K" spoken example can stay as quoted text). |

## Formulas and citations
- ΔT (in K) = Δθ (in °C) (`nist`): NIST "One Celsius degree is an interval of 1 K" ✓.
- T = θ + 273.15 (`nist`): NIST "zero degrees Celsius is 273.15 K" ✓; "0 K is commonly referred to as 'absolute zero'" ✓; water freezes at 0 °C and boils at about 100 °C ✓.
- Siyavula Gr 11 7.2 Table 7.1: "K = °C + 273" ✓; Charles' law: straight line reaching zero volume at −273 °C, then T_K = T_C + 273 ✓; Exercise 7.3: "This point corresponds to absolute zero ... the lowest temperature that it is possible to achieve" ✓. Notation note ("T with a small K or C below it") matches Siyavula's T_K, T_C ✓.
- Siyavula Gr 10 3.1: food colouring diffusion, Brown 1828 ✓ (see row 4). Gr 10 3.2 Table 3.1: solid particles "vibrate around a fixed point", gas particles constantly moving ✓; speeds depend on temperature ✓ (see row 1 for the energy definition).
- Siyavula Gr 11 7.1 (`mit`): temperature as a measure of average kinetic energy ✓.
- 8.044 L5 slide 2 (L5B2): extensive (∝ N): V, U; intensive (≠ f(N)): P, T ✓. Slide 5 (L5B5): "0th Law", A ~ C and B ~ C ⇒ A ~ B ✓.
- 8.044 notes: p. 1 extensive/intensive with U and T ✓; p. 2 equilibrium "not static ... still motion on the atomic scale" ✓; p. 3 "In Equilibrium with Each Other": brought into contact, states do not change ✓. The page's "already at the same temperature" adds the link to temperature that L5 slides 7–11 prove; acceptable.
- NASA *Sun: Facts*: photosphere 5500 °C ✓, core 15 million °C ("top", read as "more than"; fair) ✓.
- NASA LAMBDA *FIRAS Overview*: "nearly perfect blackbody with a temperature of 2.725 +/- 0.002 K" ✓; 2.725 is in calcs/values.yaml (T_CMB) ✓.
- Uncited but standard and correct: liquid-in-glass thermometer and thermal expansion, heat as energy flowing because of a temperature difference, energy flows from hot to cold, kelvin temperatures never negative, temperature ∝ average kinetic energy in kelvin (forward to 4.4), spark vs lake.

## Arithmetic and answer checks
Recomputed independently in Python; `pytest -k "density-and-pressure or temperature"` on calcs: 128 passed.
- Quiz 0: −25 + 273 = 248 K ✓ (298 = +25 wrong; −248 impossible; 25 wrong). Answer 0 ✓.
- Quiz 1: 47 − 12 = 35 K ✓; 308 (35 + 273), 320 (47 + 273), 59 (47 + 12) wrong ✓. Answer 0 ✓.
- Quiz 2: answer 0 ✓ (zeroth law); others wrong ✓.
- Quiz 3: answer 2 ✓; choice 0 wrong (the spark has less thermal energy), 1 and 3 wrong ✓.
- Quiz 4: 300/280 = 1.071 ✓; 27/7 = 3.86 → "3.9" ✓; 0.93 is the inverse ✓. Answer 0 ✓.
- Freezer 255 K ✓; fever 312.65 → 312.7 K ✓; 90 K → −183 °C ✓.
- 15 → 75 °C: 60 K ✓; 348/288 = 1.208 → "1.21", "about 21%" ✓.
- Sun: 5500 + 273.15 = 5773.15 → 5773 K ✓ ("about 5800" ✓); 2.725 − 273.15 = −270.425 → −270.4 °C ✓; 273/1.5e7 = 0.0018% → "less than 0.002%" ✓; 5773.15/2.725 = 2118.6 → 2119 ✓.
- Mixing: (70 + 10)/2 = 40 °C ✓; (343 + 283)/2 = 313 K = 40 °C ✓.
- Plot: slope 1, intercept 273.15; points (−273.15, 0), (0, 273.15), (100, 373.15) ✓.
- Flashcards: all true (card 5 see row 2).
- Calcs: every number on the page is covered; `quiz-ice` has no `quiz: 0` tag (others carry one), minor.

## Only earlier terms
- kelvin and absolute zero (0.2 ✓, also introduced here), straight line y = mx + c (0.5 ✓), kinetic energy (3.2 ✓), thermal energy and energy conservation (3.4 ✓, which does call "the random jiggling of the molecules" thermal energy), potential energy (3.3, reached through 3.4 ✓), volume (0.2 ✓).
- pressure: from 4.1, earlier in the block, but not listed as a prerequisite (row 3).
- Brownian motion, thermal equilibrium, heat, thermometer, thermal expansion, zeroth law, intensive/extensive, internal energy, photosphere: all defined on the page.
- Forward references (4.3, 4.4, 4.5, 4.8, 4.9, 4.10, 8.13, 8.15) all exist in the hs-4/hs-8 syllabi ✓.

## Coverage
- §4 row 4.2: temperature and thermal energy, PhET none in §4 but `gases-intro` in §3.5 ✓, leads to `8-044/thermodynamic-variables`. The old OpenStax sources (P 11.1, CP 13.1) are not used ✓. Particle picture, thermal equilibrium, thermometers, zeroth law, Celsius and kelvin, absolute zero, temperature vs thermal energy: complete at VWO level.
- Left out: Fahrenheit (not needed in a Dutch course), linear expansion ΔL = αLΔT (only qualitative). Fine at this level.
- Consistency with later lessons: 4.3 uses "absolute temperature in kelvin (lesson 4.2): add 273" ✓; 4.4 refers back for the kelvin scale and thermal equilibrium, and adds that quantum physics leaves some motion at 0 K, which matches 4.2's "the least energy they can possibly have" ✓.

## Where this leads
- `8.044` lecture 5 → `content/year-3/8.044/thermodynamic-variables.mdx` ✓ (exists; sections "The vocabulary", "The zeroth law and temperature"). The `why` (zeroth law for any two systems, a temperature must exist, intensive vs extensive) matches L5 slides 2 and 5–11 ✓.
- `towards: false` ✓. The cosmology callout (CMB at 2.725 K is left-over light of the hot early universe, cooling as it expands) is correct.

## Licensing and AI terms
- All four Siyavula pages show the "Creative Commons Attribution License" footer and are CCBY rows in docs/siyavula-licences.tsv; none mentions OpenStax. The source title uses "Everything Science" as the book's name in the attribution, as 18 other High School lessons do; no logo or branding.
- MIT 8.044 slides and notes: CC BY-NC-SA, no "All rights reserved" or "excluded" notice.
- NIST: values looked up only (rule 11) ✓. NASA: cited by title, no insignia; see row 5 for the "NASA gives" phrasing.
- No copied paragraphs. Close paraphrases: the definition in row 9 (standard), and Siyavula's food-colouring and Brown sentences ("place a drop of food colouring in water. The colour slowly spreads out" → "a drop of food colouring in still water slowly spreads through the whole glass"): reworded single sentences, acceptable.
- Worked examples and quiz items are the page's own (Siyavula's Charles' law examples use other numbers; lesson 0.2's quiz uses −40 °C and 20 °C, not repeated). The plot is generated.
- No forbidden source cited or used. No em dashes.
- PhET "Try it": `gases-intro` 1.1.9 strings include "Particles" with Heavy/Light and a pump, "Heat/Cool Controls" (Heat, Cool), "Temperature (T)", thermometer in kelvin with "degreesCelsius" as the other unit ✓. The text matches the sim.

## Notes
- Writer's flags: digital thermometer (row 7, fine), zeroth-law naming (row 6, reword), missing 4.1 prerequisite (row 3, add it).
- Verdict needs-changes because of row 1 (unsupported citation); rows 2–6 are worth fixing at the same time.

## Resolution (2026-11-20, by the page author)

1. Fixed: the section "Thermal energy is not temperature" now cites Siyavula Grade 10, 3.2 only for "the particles of a substance have energy, and there are attractive forces between them". The kinetic-plus-potential definition is the page's own statement, with "(here the same thing; MIT 8.044 calls it U, notes p. 1)" for the name internal energy (checked in the notes PDF: p. 1 lists "U internal energy" as an extensive variable).
2. Fixed: one definition everywhere, thermal (internal) energy = kinetic energy of the random motion plus potential energy of the forces between the particles: summary ("the total kinetic and potential energy of all the particles"), the lesson 3.4 sentence (now says the same and points to the last section), the section itself, the Summary bullet and flashcard 5.
3. Fixed: `density-and-pressure` added to prerequisites.
4. Fixed: "Robert Brown watched tiny particles released from inside pollen grains dart about in water", with a bracket that Siyavula 3.1 shortens this to the pollen grains themselves (whole grains are too large to jiggle visibly).
5. Fixed: the problem now states the values as plain facts, "The Sun's visible surface (the photosphere) is at about 5500 °C, and its core at more than 1.5 × 10^7 °C, 15 million degrees (NASA, Sun: Facts)". New calcs fact `sun-core-celsius`.
6. Fixed: "it was given a name only after the first and second laws of thermodynamics (lessons 4.8 and 4.9) had been numbered, so it was put in front of them as the zeroth".
7. Not changed (info, fine as is).
8. Fixed: "The Celsius scale was first fixed by water".
9. Fixed: "(Siyavula Grade 11, 7.1)" added to the key callout definition.
10. No change needed.
11. Fixed: units now in maths for 600 K and 300 K, 20 °C and 10 °C, the Sun's core (1.5 × 10^7 °C), flashcard 3 (1 K and 1 °C), the quiz 4 explanation (0 °C), and also 298 K (quiz 0) and 308 K / 320 K (quiz 1 explanations). The quoted spoken example "300 K" stays as text. Calcs `ke-ratio-600` shown text updated.
Calcs note: the `quiz: 0` tag on `quiz-ice` was tried and not kept: the harness reads the numbers of the choices without their sign, so "−248 K" (choice 2) also matches 248 and the "exactly one matching choice" check cannot pass; answer 0 was checked by hand.
Symbols: the page now uses U, so a new meaning scoped to "temperature" is needed (written to pc2-handover/work/sym-temperature-fix.json); until it is merged, content:check reports that one symbol error for this page.

Checks: `npm run calc:test -- -k temperature`: 88 passed (with density-and-pressure: 134 passed). `npm run content:check`: for this page only the U symbol error that the fix file clears; no warnings. Status set to reviewed.
