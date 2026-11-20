---
page: content/year-0/hs-8/mass-and-energy.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-20-introduction-to-special-relativity-january-iap-2021/resources/lecture-9-3/ (read; page title "Lecture 9.4: Forces and Kinetic Energy"; transcript PDF 8e65a8ae…_2jHK2MxGoio.pdf, 2 pages, no printed footer numbers)
  - https://ocw.mit.edu/courses/8-20-introduction-to-special-relativity-january-iap-2021/resources/lecture-9-1/ (read; "Lecture 9.2: Energy Conservation"; transcript PDF 692ccd8b…_Tc7g4iF8pHc.pdf, 1 page)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture10_dyn1/ (read; 18 slides, text extracted per slide)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-05 (read; CCBY row 277 of docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-02 (read; CCBY row 521)
  - https://physics.nist.gov/cgi-bin/cuu/Value?mec2mev and ?mpc2mev (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; "Last Updated: 9 May 2024")
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/energy-and-chemical-change/12-energy-and-chemical-change-02 (read, as a possible source for "a few eV per atom"; CCBY row in the TSV)
  - content/year-4/8.286/matter-radiation-equality.mdx and calcs/values.yaml (read, for the callout)
verdict: needs-changes
---

# Review: Mass and energy: E = mc²

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "How much mass does the Sun lose?", step "Over 10 billion years" | Recomputed: 4.253 × 10⁹ × 3.156 × 10¹⁷ = 1.342 × 10²⁷ kg; ÷ 1.99 × 10³⁰ = 6.75 × 10⁻⁴ (6.7 × 10⁻⁴). With the rounded 1.3 × 10²⁷ shown on the page, 6.5 × 10⁻⁴ | "= 6.8 × 10⁻⁴" | Write 6.7 × 10⁻⁴ (or show 1.34 × 10²⁷ kg and then 6.7 × 10⁻⁴). Change `sun-fraction-10gyr` to expected 6.7e-4 and tighten its tolerance (the 1% tolerance let 6.8 pass). "Less than 0.07%" stays true |
| 2 | warning | "Why chemistry never notices": "Chemical reactions involve energies of a few electronvolts per atom" | No cited source | Unsourced (writer's open point) | It is correct. A permitted source exists: Siyavula Gr 11, 12.2 (CCBY row) gives C + O₂ → CO₂, ΔH = −393 kJ mol⁻¹, which is 393 × 10³ / 6.02 × 10²³ = 6.5 × 10⁻¹⁹ J ≈ 4.1 eV per molecule formed. Cite it (and add the calcs entry), or say "a few electronvolts per molecule" with that example |
| 3 | info | Same section: "no balance has ever been able to tell" | (no source) | Absolute claim | True of balances and chemical reactions, but modern Penning-trap mass measurements do resolve electron binding energies. Suggest "no one has ever weighed the change in a chemical reaction" or "no ordinary balance can tell" |
| 4 | info | Hot-water example: "A good school balance reads to 0.01 g" | (no source) | Unsourced (writer's open point) | Common and harmless; leave, or write "a typical school balance". The factor "about three million" checks (0.01 g ÷ 3.48 × 10⁻⁹ g = 2.9 × 10⁶) |
| 5 | info | "Light has energy but no rest mass": "So light carries energy and momentum: sunlight warms what it falls on." | 8.20 L9.2 p. 1: E = pc for a photon | Warming shows energy, not momentum | Reword, e.g. "So light carries energy, which is why sunlight warms what it falls on, and momentum too." |

## Formulas and citations
- **Rest energy E₀ = mc²** (reading1 = 8.20 L9.2, p. 1): supported ("for a particle at rest … the energy is equal to mc square"). Correct.
- **E = γmc², γ = 1/√(1 − v²/c²)** (reading1, p. 1): supported. (The transcript says "1 over 1 minus uA square over c square" once, a spoken slip without the root; the page correctly has the root, nothing to add.)
- **E_k = (γ − 1)mc²** (mit = 8.20 L9.4, p. 1): supported ("the kinetic energy is gamma minus 1 times m0 c squared", p. 1). Correct page.
- **E_k ≈ ½mv² for v ≪ c** (mit, p. 1): supported (p. 1, "evaluate this for small values of v … ½ m0 v squared"; also L9.2 p. 1). The lecture also plots the two curves and says they overlap at small v and diverge near c, which the page's Plot follows with its own generated graph.
- **E = hf** (photon = Siyavula Gr 10, 11.5): supported (E = hf, h = 6,63 × 10⁻³⁴ J s). CCBY.
- **E = pc** (reading1, p. 1): supported ("particles which are massless, like a photon, the energy is equal to the momentum times c").
- **Δm/Δt = L/c²** (reading2 = 8.033 L10, slide 16): slide 16 has "Rest mass of He = 99.3% of 4 × rest mass of H … E = mc²"; slide 7 gives L = 4 × 10²⁶ W. The `at` honestly says the formula is the page's own. Fine.
- 1 eV = 1.6 × 10⁻¹⁹ J (evunit, Siyavula Gr 12, 12.2): supported. CCBY.
- NIST: 0.510 998 950 69 MeV and 938.272 089 43 MeV, both confirmed today. NASA Sun Fact Sheet: mass 1 988 400 × 10²⁴ kg, luminosity 382.8 × 10²⁴ J/s, mass conversion rate 4260 × 10⁶ kg/s, last updated 9 May 2024: all confirmed.
- 8.033 L10 slide 4 heads the deck "Fall 2005, Lecture 10" while OCW files it under Fall 2006; the reading title follows OCW and the site's 8.033 syllabus. No change needed.

## Arithmetic and answer checks
Recomputed every number by hand/Python; `npm run calc:test -k hs-8 and mass-and-energy` passes.
- c² = 9.0 × 10¹⁶; 1 g → 9.0 × 10¹³ J; ÷ 1.0 GW = 9.0 × 10⁴ s = 25 h. OK.
- γ(0.9) = 2.294 → 2.29; γ(0.99) = 7.089 → 7.09. OK.
- Table: 0.01: γ − 1 = 5.00004 × 10⁻⁵, ratio 1.000075 → 1.0001; 0.1: 0.005038 → 0.00504, ratio 1.0076 → 1.008; 0.5: 1.1547, 0.1547, 0.125, 1.238 → 1.24; 0.9: 1.294 → 1.29, 0.405, 3.195 → 3.2; 0.99: 6.089, 0.490, 12.4 → 12. All OK. 0.01c = 3000 km/s OK.
- Plot: domain to 0.96, (γ − 1) = 2.57 < 3, fits the range. At 0.3c the curves differ by 0.0033 mc²: "lie on top of each other" fair.
- Electron at 0.80c: γ = 5/3; E = 0.852 MeV; E_k = 0.341 MeV; ½mv² = 0.1635 → 0.164 MeV, 0.48 of the true value ("less than half") OK.
- mₑc² = 8.20 × 10⁻¹⁴ J = 0.512 MeV; m_pc² = 1.503 × 10⁻¹⁰ J = 939 MeV; ratio 938.272/0.510999 = 1836.2. OK.
- Green photon 540 nm: 3.68 × 10⁻¹⁹ J = 2.30 eV. OK.
- Sun: 3.828 × 10²⁶ / 9.0 × 10¹⁶ = 4.25 × 10⁹ kg/s, 4.3 million t/s; NASA 4.26 × 10⁹. OK. 10 Gyr = 3.156 × 10¹⁷ s; 1.34 × 10²⁷ kg; fraction 6.75 × 10⁻⁴, **not 6.8 × 10⁻⁴** (finding 1).
- Hot-water bottle: Q = 3.135 × 10⁵ J → 3.14 × 10⁵; Δm = 3.48 × 10⁻¹² kg → 3.5 × 10⁻¹²; 3.5 × 10⁻⁹ g. OK.
- Hydrogen: 13.6 / 938.78 × 10⁶ = 1.45 × 10⁻⁸ → 1.4 × 10⁻⁸; "one part in a hundred million" OK.
- Quiz 0: 1.8 × 10¹⁷ J correct; 6.0 × 10⁸ (mc) and 3.6 × 10¹⁷ (m²c²) as explained; 9.0 × 10¹⁶ (energy of 1 kg) is not explained and not in calcs (info).
- Quiz 1: answer 1 correct; others wrong.
- Quiz 2: (2.0 − 1) × 938 = 938 MeV correct; total 1876 MeV OK.
- Quiz 3: 1.0 × 10²⁷ / 9.0 × 10¹⁶ = 1.1 × 10¹⁰ kg correct; 3.3 × 10¹⁸ (÷c) and 9.0 × 10⁻¹¹ (c²/L) in calcs; 1.1 × 10¹⁹ is not in calcs (info: add a distractor entry, e.g. a factor 10⁹ slip).
- Quiz 4: answer 2 correct; explanation true.
- Flashcards: all values check.

## Only earlier terms
- γ and the Lorentz factor (8.2), photons and E = hf, h (7.2), eV (6.4), MeV (introduced in 7.8; restated here), 13.6 eV (7.4), alpha particles of about 4 MeV (7.8, "reading 1, p. 5" there), nucleus and nucleons (7.7), kinetic energy ½mv² (3.2), forms of energy list (3.4, which does list thermal, chemical, light, etc.), power (3.5): all exist in earlier lessons now on disk.
- Specific heat, 4180 J/(kg K) (4.5, `heat-and-specific-heat`): planned, not written; content:check warns. The lesson-list title covers it. OK.
- Momentum p in E = pc: lesson 3.6 exists. OK.
- "Luminosity" is defined in place. "Rest mass" is defined in place.

## Coverage
- §4 row 8.3: P 10.2; CP 28.5 (relativistic momentum), CP 28.6 (relativistic energy); A 16.2 (mass, energy and the Sun). Covered: rest energy, total energy, kinetic energy and its low-speed limit, the speed limit c, MeV units, massless photons, the Sun's mass loss, why chemistry shows no mass change. Not covered: relativistic momentum p = γmv and E² = (pc)² + (mc²)². Neither is required at VWO level; the leadsTo text promises them at university. Info only.
- Level: suitable for VWO; numbers are worked in full.

## Where this leads
- 8.033 Lecture 10 → `momentum-energy-sun` (lecture 10, reviewed): matches the §4 row; the "why" (four-vector, E² = (pc)² + (mc²)², 0.7% of hydrogen's rest mass, slide 16) is right.
- 8.286 Lecture 15 → `mass-energy-and-radiation` (lecture 15, reviewed): matches the §4 row.
- Callout "Light that weighs": "first tens of thousands of years" agrees with the 8.286 page `matter-radiation-equality` (Guth's estimate ≈ 75,000 years, Ryden 47,000, "the radiation era lasted tens of thousands of years"). No value in calcs/values.yaml is involved (t_eq is not one of the tracked quantities). Correct as worded. `towards: false` is right (8.3 is not the block's last lesson).

## Licensing and AI terms
- No sentence copied: the 8.20 transcripts are spoken and the page's wording is its own; slide 16's line is paraphrased.
- No figure reused: the only graph is a generated Plot. 8.033 L10 has "Image courtesy of Wikipedia/NASA" images (slides 1, 6, 9, 11, 15); none is used.
- MIT 8.20 transcripts carry no "rights reserved" notice. 8.20's commercial textbooks (French, Resnick) are not used.
- Siyavula: both URLs are CCBY rows; cited as "Siyavula, Physical Sciences Grade 10/12", no logo or "Everything Science" branding.
- NASA: cited by title, URL and both dates; no insignia; the phrasing ("NASA Sun Fact Sheet", "NASA's fact sheet lists") attributes a data value, not AI text. Fine.
- No forbidden source; Einstein 1905 and Lavoisier claims are gone (writer's note), nothing else historical needs a source.
- Worked examples (1 g and a 1 GW station, a 0.80c electron, the Sun over 10 Gyr, a hot-water bottle) are not the sources' examples (8.20 uses Alice's 100-tonne spacecraft at γ = 15 000).

## Notes
- `npm run content:check`: 0 errors; for this page only the planned-prerequisite warning (heat-and-specific-heat) and "no review file yet".
- Writer's open points: 8.20 "p. 1" citations are right (9.2 is a one-page transcript; the 9.4 kinetic-energy passages are on p. 1 of 2). "A few eV per atom": see finding 2 for a permitted source. School balance 0.01 g: finding 4. 4 MeV alpha: lesson 7.8 has it with its own source, fine. Callout era: checked, fine.

## Resolution (2026-11-20, by the page author)
1. Fixed. The step "Over 10 billion years" now shows 1.34 × 10²⁷ kg and 6.7 × 10⁻⁴ of the Sun's mass ("less than 0.07%" kept). Calcs: sun-mass-lost-10gyr expects 1.34e27 kg; sun-fraction-10gyr expects 6.7e-4 with tolerance 0.7% (the old 6.8 would now fail).
2. Fixed. Checked first: Siyavula Gr 11, 12.2 is a CCBY row of docs/siyavula-licences.tsv and the page contains no OpenStax mention (count 0); its "The heat of reaction" part gives C(s) + O₂(g) → CO₂(g), ΔH = −393 kJ/mol. The page now says chemical reactions involve "a few electronvolts per molecule" and works the example: 393 × 10³ / 6.02 × 10²³ = 6.5 × 10⁻¹⁹ J, about 4.1 eV per molecule formed. New references `chem` (Siyavula Gr 11, 12.2) and `nist-na` (NIST CODATA Avogadro constant, 6.022 140 76 × 10²³ per mole, read today; the Siyavula mole sections are ARR, so not used). Calcs: co2-heat-of-reaction and avogadro (facts), co2-energy-per-molecule-J and co2-energy-per-molecule-eV.
3. Fixed: "no one has ever weighed the change in a chemical reaction".
4. Left as is (as the review allows).
5. Fixed: "So light carries energy, which is why sunlight warms what it falls on, and it carries momentum too."
6. Fixed: calcs entries quiz0-wrong-one-kg (9.0 × 10¹⁶ J, the energy of 1 kg) and quiz3-wrong-exponent (1.1 × 10¹⁹ kg, c² written as 9.0 × 10⁷).
7. No change needed (relativistic momentum is left to university, as the leadsTo says).

No symbol changes. Checks: `npm run calc:test -- -k mass-and-energy` all pass; `npm run content:check`: 0 errors, for this page only the planned-prerequisite warning (heat-and-specific-heat). Status set to reviewed.
