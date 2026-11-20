---
page: content/year-0/hs-4/ideal-gas-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02 (read in full, incl. Table 7.1, worked examples 1–13 and Textbook Exercises 7.2–7.6; footer "released under the terms of a Creative Commons Attribution License"; CCBY row in docs/siyavula-licences.tsv line 441; no OpenStax material or credit on the page)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-01 (read in full; CC BY footer; CCBY row line 440; no OpenStax)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_notes-def/ (read: PDF text, 3 pages; "ideal gas : P V = N kT" on printed p. 2; no "All rights reserved" or "excluded" notice on the resource page)
  - https://physics.nist.gov/cgi-bin/cuu/Value?na and https://physics.nist.gov/cgi-bin/cuu/Value?k (not fetched; the CODATA 2018 exact values 6.022 140 76 × 10²³ mol⁻¹ and 1.380 649 × 10⁻²³ J/K are the SI defining constants and match the page)
  - https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html (read: troposphere curve fits T = 15.04 − .00649 h, p = 101.29 [(T + 273.1)/288.08]^5.256, valid to 11 000 m)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html (read: "Surface pressure: 6.36 mb at mean radius (variable from 4.0 to 8.7 mb depending on season)"; "Average temperature: ~214 K")
  - public/phet/gas-properties_1.1.12_en.html (string table read: screens Ideal, Explore, Energy, Diffusion; Hold Constant: Nothing, Volume (V), Temperature (T), Pressure ↕V, Pressure ↕T)
  - Earlier lessons on disk: 0.2, 0.6, 0.11, 4.1, 4.2; later lessons 4.4, 8.5 (how-stars-shine); content/year-3/8.044/thermodynamic-variables.mdx for leadsTo
verdict: pass-with-notes
---

# Review: The ideal gas law (4.3)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "When is a real gas ideal?", last paragraph | Siyavula 7.1 only says the particles are "very small compared to the distance between the particles"; no size is given. No earlier lesson gives the size of a molecule (0.11 gives the hydrogen atom, Bohr radius 0.053 nm) | "a cube 3.4 nm on each side, about ten times the size of a small molecule" | The size of a molecule (implied about 0.3 nm) is uncited, and the factor "ten" is not in the calcs file. Either compare with something on the site: "more than thirty times the width of a hydrogen atom (about 0.1 nm, lesson 0.11)" (3.4/0.106 = 32), with a calcs entry, or cite a §2.0 source for "an air molecule is a few tenths of a nanometre across". |
| 2 | warning | Quiz 2 explanation; flashcard "The ideal gas law, two forms"; Summary bullet 4 | (house style) | "$… = 1.0$ mol", "$R = 8.31$ J/(mol K)", "$k_B = 1.38 \times 10^{-23}$ J/K", "about 22.5 L at" | Put the units inside the maths: `1.0\ \text{mol}`, `8.31\ \text{J/(mol K)}`, `1.38 \times 10^{-23}\ \text{J/K}`, `22.5\ \text{L}` (and update the `shown` strings in calcs/hs-4/ideal-gas-law.yaml: `gas-constant`, `boltzmann-constant`, `molar-volume`, `quiz-moles`). |
| 3 | info | Formula "The ideal gas law per particle", `cite="greytak" at="p. 2"` | Notes p. 2: "ideal gas : P V = N kT" (no value of k) | `pV = N k_B T, k_B = 1.38 × 10⁻²³ J/K` | The value of k_B comes from NIST, but the `nist-k` reference is defined and never cited on the page. Cite it in the paragraph before the formula ("Boltzmann's constant $k_B = 1.38 \times 10^{-23}$ J/K (NIST)") or split the value off the formula. |
| 4 | info | Worked example "The air on Earth and on Mars" | Mars Fact Sheet: "6.36 mb at mean radius (variable from 4.0 to 8.7 mb depending on season)" | "an average pressure of 636 Pa" | Say "a surface pressure of 636 Pa (at the planet's mean radius; it changes with the seasons)". The temperature "about 214 K" matches "~214 K". |
| 5 | info | "Counting the gas: the mole" | NIST: "Avogadro constant" N_A = 6.022 140 76 × 10²³ mol⁻¹ | "**Avogadro's number** $N_A$ … $N_A = 6.02 \times 10^{23}\ \text{mol}^{-1}$" | Strictly, Avogadro's number is the pure number 6.02 × 10²³ and N_A (with mol⁻¹) is the Avogadro constant. Optional: "Avogadro's number, 6.02 × 10²³; written with its unit it is the Avogadro constant N_A = …". |
| 6 | info | Charles's law, history sentence | Siyavula 7.2: "The law was first published by Joseph Louis Gay-Lussac in 1802, but he referenced unpublished work by Jacques Charles from around 1787." | "The law was published by Joseph Louis Gay-Lussac in 1802, who referred to earlier unpublished work by Jacques Charles" | A close paraphrase of one factual sentence: acceptable (CC BY source, standard fact), and the history is limited to what Siyavula states, as the writer intended. Boyle "credited" and "Gay-Lussac's law or Amontons' law; many people worked on it at the same time" also match Siyavula 7.2 (Pressure-temperature relation). |
| 7 | info | Worked example "A weather balloon" | NASA Glenn: "a standard atmosphere model … developed in the early sixties", curve fits as quoted | "NASA's standard model of the atmosphere gives a pressure of 26.5 kPa and a temperature of −50 °C" | Values reproduced exactly (−49.9 °C, 26.52 kPa). The phrasing cites a NASA model by name and is not "according to NASA" phrasing of our own text; fine. Optional: "the Earth Atmosphere Model on NASA Glenn's Beginner's Guide". The assumption "if the gas inside takes the pressure and temperature of the air around it" is stated in the problem, which is enough at this level (a real latex balloon is slightly above ambient pressure). |
| 8 | info | Worked example "A bubble rising in a lake", step 2 | no source | "divers are taught never to hold their breath while rising: the air in their lungs expands in the same way" | Correct and standard safety advice (lung overexpansion on ascent); uncited but acceptable. |

## Formulas and citations
- Boyle's law `pV = constant`, `p₁V₁ = p₂V₂`, cite mit "Sec. 7.2, Boyle's law": matches Siyavula 7.2 ("Boyle's law: Pressure and volume of an enclosed gas (ESBNW)", boxed p₁V₁ = p₂V₂). ✓ The remarks on the p–1/V straight line and "any units will do, as long as each quantity has the same unit on both sides" are also in that subsection. ✓
- Charles's law `V/T = constant`, cite "Sec. 7.2, Charles' law": matches (ESBNX, boxed V₁/T₁ = V₂/T₂; zero volume at −273 °C, Figures 7.5–7.6). ✓
- Pressure law `p/T = constant`, cite "Sec. 7.2, Pressure-temperature relation": matches (ESBNY, boxed p₁/T₁ = p₂/T₂). The page's name "pressure law" differs from Siyavula's "pressure-temperature relation"; the page lists the other names. ✓
- Combined gas law, cite "Sec. 7.2, The general gas equation": matches (ESBNZ, boxed). The page says "Siyavula calls this the general gas equation": correct, and naming the cited source in text is attribution, not branding. ✓
- `N_A = 6.02 × 10²³ mol⁻¹, N = nN_A`, cite nist-na: value correct (exact SI value 6.022 140 76 × 10²³). ✓
- `pV = nRT, R = 8.31`, cite "Sec. 7.2, The ideal gas equation": matches (ESBP2, pV/T = 8,314 for 1 mol, pV/T = nR, boxed pV = nRT; "A joule can be defined as Pa·m³"). R rounded to 8.31, noted in calcs. ✓
- `pV = Nk_BT`, cite greytak p. 2: "ideal gas : P V = N kT" is on printed p. 2 (verified). ✓ See row 3 for the k_B value.
- Calcs `source.at` "Sec. 7.2, Table 7.1" for the °C → K conversions: Table 7.1 has "K = ℃ + 273". ✓
- reading1 (Sec. 7.1, "Ideal gases and non-ideal gas behaviour"): supports the real-gas section (pressure higher than ideal at high pressure because molecules occupy volume; lower at low temperature because of attractions; liquefies if cold or compressed enough). ✓
- Avogadro's law in the early 1800s: Siyavula 7.2 ("In the early 1800's, Amedeo Avogadro noted…"). ✓
- All cited Siyavula pages are CCBY rows of docs/siyavula-licences.tsv (7.1 line 440, 7.2 line 441); neither page carries OpenStax material or credits.

## Arithmetic and answer checks
Recomputed by hand and in Python; `npm run calc:test -- -k "ideal-gas-law or kinetic-theory"`: 78 passed.
- Bubble: 1000 × 9.81 × 10.0 = 9.81 × 10⁴ Pa ✓; 1.01 × 10⁵ + 9.81 × 10⁴ = 1.991 × 10⁵ ✓; V₂ = 1.99 × 10⁵ × 2.0/1.01 × 10⁵ = 3.94 cm³ ✓.
- Freezer balloon: 295 K, 255 K ✓; 3.0 × 255/295 = 2.59 L ✓; shrink 13.6% ("about 14%") ✓.
- Spray can: 293 K, 333 K ✓; 3.0 × 10⁵ × 333/293 = 3.41 × 10⁵ Pa ✓; +13.7% ✓.
- Weather balloon: NASA fit at h = 10 000 m: T = −49.86 °C, p = 26.52 kPa ✓; 4.0 × (101/26.5) × (223/288) = 11.80 m³ ✓; 101/26.5 = 3.81 ✓.
- Molar volume: 8.31 × 273/1.01 × 10⁵ = 0.02246 m³ = 22.5 L ✓; cube root 0.282 m (28 cm) ✓; with 8.314, 273.15 K, 101 325 Pa: 22.41 L ✓.
- Helium cylinder: 1.50 × 10⁷ × 0.0100/(8.31 × 293) = 61.6 mol ✓; × 6.02 × 10²³ = 3.71 × 10²⁵ ✓; 10.0 × 1.50 × 10⁷/1.01 × 10⁵ = 1485 L ✓; (1485 − 10)/5.0 = 295 ✓ (the 10 L left behind is correct reasoning).
- R = N_A k_B: 6.02 × 1.38 = 8.31 ✓.
- Earth/Mars: 1.01 × 10⁵/(1.38 × 10⁻²³ × 293) = 2.50 × 10²⁵ ✓; 636/(1.38 × 10⁻²³ × 214) = 2.15 × 10²³ ✓; ratio 116 ✓.
- Volume per molecule 4.0 × 10⁻²⁶ m³, side 3.42 × 10⁻⁹ m ✓ (row 1 for "ten times").
- Plot: p (kPa) = 8.31 T/V (L) for n = 1 ✓; at T = 600, V = 5 L: 997 kPa, inside the range 0–1000 ✓; point (22.5, 101) lies on the dashed 273 K curve (8.31 × 273/22.5 = 100.8) ✓.
- Quiz 0: answer 2 (doubles) ✓; others wrong ✓.
- Quiz 1: 300 K → 600 K, doubles ✓; 327/27 = 12.1 for the Celsius distractor ✓; "1%" and "same" wrong ✓.
- Quiz 2: 1.00 × 10⁵ × 0.0249/(8.31 × 300) = 0.999 mol ✓; litres give 999 ✓; 27 instead of 300 K gives 11.1 ✓; 0.10 wrong ✓.
- Quiz 3: answer 0 ✓ (Siyavula 7.1); the other three describe near-ideal conditions ✓.
- Quiz 4: 1.01 × 10⁵/(1.38 × 10⁻²³ × 273) = 2.68 × 10²⁵ ✓; 44.5 mol ✓; 44.5 × 6.02 × 10²³ = 2.68 × 10²⁵ ✓; 6.02 × 10²³ and 2.68 × 10²² wrong ✓.
- Flashcards: all true.

## Only earlier terms
- Pressure and pascal, ρgh, the diver picture (4.1); kelvin, absolute zero, molecules moving faster when hotter (4.2); mole as an SI base unit (0.2, which says "The mole appears with gases"); inversely proportional as a power law with power −1 (0.6); straight line through the origin (0.5); joule (0.2, 3.x): all earlier, checked on disk.
- Isotherm, Avogadro's number, k_B, ideal gas, combined gas law: defined on the page.
- Forward references only as pointers: 4.4 (kinetic theory), 4.6 (liquefying), 4.10 (expanding gas cools), 8.5 (stars). Fine.

## Coverage
- §4 row 4.3 ("The ideal gas law", gas-properties): Boyle, Charles, pressure law, combined law, mole and N_A, pV = nRT and pV = Nk_BT, real against ideal gases, isotherm graph. Full coverage of Siyavula 7.1–7.2 at VWO level.
- Left out: the molar mass, n = m/M (Siyavula uses it in Exercise 7.6; VWO uses it to get the density of a gas, ρ = pM/(RT)). Info: worth a short paragraph or a practice-set problem, since chemistry students meet it, but not required for the physics that follows.
- Consistency with 4.2: 273 vs 273.15 handled the same way ("add 273; where more precision matters, 273.15"); 4.2 says "Gases give a striking way to find absolute zero, which lesson 4.3 uses": the Charles section does this. ✓
- Consistency with 4.4 (written in parallel): same constants (k_B = 1.38 × 10⁻²³ J/K, 2.5 × 10²⁵ m⁻³ at 20 °C), same description of real-gas departures, same promise ("Lesson 4.4 explains why: k_BT measures the energy of motion"). 4.4 says "Lesson 4.3 ended with the ideal gas law written per molecule": in fact the per-molecule section is followed by "When is a real gas ideal?" (noted in the 4.4 review).
- Later lessons: how-stars-shine (8.5) relies on "by the ideal gas law (lesson 4.3), the pressure of a gas grows with its temperature": supported. ✓

## Where this leads
- `leadsTo` 8.044 lecture 5: `content/year-3/8.044/thermodynamic-variables.mdx` (lecture 5) uses the notes-def p. 2 list of equations of state, with PV = NkT first. The "why" ("its first example of an equation of state") is accurate. ✓
- `towards: false` correct (4.10 is the block's last lesson). The cosmology callout (Sun held up by gas pressure; expanding gas cools) is correct and points to 8.5 and 4.10, which exist or are planned.

## Licensing and AI terms
- No copied sentences beyond the one close factual paraphrase in row 6. The opening (bicycle pump with a finger over the hole) echoes Siyavula's Boyle's-law opener in idea, not in wording; fine.
- Worked examples are the page's own: Siyavula's are helium 160 cm³ at 100 → 80 kPa, 2.5 → 2.8 L, CO₂ 6 → 5.5 L, ammonia in a syringe, O₂ 0.4 → 0.7 atm, CO 32 → 15 °C, a truck tyre, 2 mol O₂ in 25 dm³, CO₂ 0.86 mol, ammonia 2 mol, a classroom. Exercises include a hairspray-can warning (qualitative) and a helium balloon rising (volume × 1.6, 27 → 15 °C). The page's spray can (quantitative, 20 → 60 °C), freezer balloon and weather balloon (NASA data, volume asked) share the themes but not the numbers or the question. Quiz 1 uses 27 °C = 300 K, a common round value. No problem.
- No figures copied: the only graph is generated from p = nRT/V.
- No Siyavula logo or "Everything Science" branding (the source title here even omits the series name). No MIT material marked excluded or all rights reserved. NASA cited by page title; no insignia. No ESO text. No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used.

## Notes
- PhET "Try it": "Ideal" screen ✓; pumping gas (bicycle pump) ✓; Hold Constant offers Temperature (T), Volume (V) and Pressure ↕V, so "hold the pressure constant and watch the box grow" ✓; the container width can be changed on the Ideal screen ✓. Text matches the sim strings.
- No em dashes. `npm run content:check` reports nothing for this page except the missing review file (its 2 errors are in phase-changes.mdx, another page).

## Resolution (2026-11-20, by the page author)

1. Fixed. "About ten times the size of a small molecule" replaced by a comparison with lesson 0.11: a hydrogen atom has a radius of about 0.053 nm, so it is about 0.106 nm across, and the room per molecule is more than thirty times as wide (3.4/0.106 = 32). Reference nist-a0 (NIST Bohr radius, as in lesson 0.11) added; calcs entries bohr-radius (fact), hydrogen-width and spacing-over-atom added.
2. Fixed. Units moved inside the maths in quiz 2's explanation (1.0 mol), the flashcard "The ideal gas law, two forms" (8.31 J/(mol K), 1.38 × 10⁻²³ J/K) and summary bullet 4 (22.5 L); calcs shown strings of quiz-moles, gas-constant, boltzmann-constant and molar-volume updated.
3. Fixed. The paragraph before the per-particle formula now says the value of k_B is "the value NIST lists, rounded to three figures", so the nist-k reference is used; the formula keeps its greytak p. 2 citation for pV = NkT.
4. Fixed. Mars: "a surface pressure of 636 Pa (at the planet's mean radius; it changes with the seasons)"; nasa-mars location now quotes the fact sheet's mean-radius and seasonal range; calcs mars-pressure updated.
5. Fixed. "Avogadro's number" is now the pure number 6.02 × 10²³ and N_A with its unit mol⁻¹ is "the Avogadro constant" throughout (text, formula label, flashcard, summary bullet, frontmatter summary). Symbol meanings for N_A and n need the same wording: see work/sym-ideal-gas-law-fix.json (not yet merged into data/symbols.json).
6. No change needed (acceptable paraphrase of a standard fact).
7. No change (phrasing is fine).
8. No change (standard safety advice).
Coverage note (molar mass): one sentence added after the mole section saying that the amount is often found from a mass by dividing by the molar mass, the mass of one mole; no new symbols or numbers.

Checks: npm run calc:test -- -k "ideal-gas-law or kinetic-theory": 84 passed. npm run content:check: 0 error(s); no error or warning for this page. Status set to reviewed.
