---
page: content/year-0/hs-2/newtons-law-of-gravitation.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter9.pdf (read, Secs. 9.2 and 9.2.1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter8.pdf (read, Secs. 8.2.1 to 8.2.3)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bg (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read; last updated 15 November 2024)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read; last updated 11 January 2024)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html (read; last updated 19 May 2025)
  - https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/ (read)
  - https://arxiv.org/abs/2501.11943 and https://arxiv.org/pdf/2501.11943 (read; arXiv non-exclusive distribution licence)
verdict: needs-changes
---

# Review: Newton's law of gravitation

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Summary, bullet 2 | Persson (Sec. 2 and Sec. 5): Cavendish's aim and result was the density of the Earth; the first derivation of G that Persson found is Cornu and Baille, 1873; "Cavendish measured G" is the textbook error the paper is about | "[G] was first measured in the laboratory with Cavendish's torsion balance (1797 to 1798)" | The body (section "Measuring G in a laboratory") gets this right; the summary repeats the textbook claim the body corrects. Write e.g. "Cavendish's torsion balance (1797 to 1798) was the first laboratory measurement of gravity between objects; G was worked out from such results later" |
| 2 | warning | Section "The law of universal gravitation", the blockquote | Siyavula definition box: "Every point mass attracts every other point mass by a force directed along the line connecting the two. This force is proportional to the product of the masses and inversely proportional to the square of the distance …" | "Every point mass attracts every other point mass with a force along the line between them. The force is proportional to the product of the two masses and inversely proportional to the square of the distance between them." | Nearly word for word. CC BY 3.0 allows it with attribution, but Writing rule 1 allows only short standard phrases. Either rephrase it or mark it as Siyavula's definition (quoted, with credit) |
| 3 | warning | Quiz 3 (satellite at a height of two Earth radii, 900 N → 100 N) | Siyavula Exercise 2.9 has the same question: a satellite at a height equal to the Earth's diameter feels F/9 (and another item: gravity is 1/4 of the surface value at height R) | Same set-up, with 900 N added | Use a different height (e.g. 3R above the surface, 1/16, or a height of R/2, 4/9) so the question is the page's own |
| 4 | warning | Formula "Gravitational field strength" (cite="mit") and the section's naming | Siyavula 2.4 derives a₀ = GM/d² and calls it "gravitational acceleration"; the words "field" and "N/kg" do not appear on that page | Calls it "gravitational field strength", defines a field, unit N/kg | The physics is right and standard (lesson 2.5 already used N/kg). Say that Siyavula calls it the gravitational acceleration, and for N/kg add MIT Ch. 8 Sec. 8.2.3 (which gives the force on the standard kilogram as 9.80345 N·kg⁻¹) |
| 5 | warning | Worked example "Gravity at the space station" | NASA "What Is Microgravity?": the station orbits "at an altitude between 200 and 250 miles" (about 320 to 400 km) | "orbits about 400 km above the ground", with no source; calcs `iss-r` calls the 400 km "the page's own round figure" | The figure is a fact, not the page's own. Cite the microgravity page (250 miles ≈ 400 km, the upper end of its range), or say "about 400 km" is a round figure for 2026; make the calcs entry honest (a `kind: fact` with `source: {cite: microgravity, …}`) |
| 6 | warning | Section "The law of universal gravitation", last paragraph | – | "The MIT notes write the same law with a unit vector to show its direction" | "Unit vector" has not been introduced in any earlier High School lesson (hs-0 "Vectors" only mentions it in a `leadsTo` reason). It is only an aside, but either explain it in a few words ("an arrow of length 1 along the line between them") or drop the term |
| 7 | info | Worked example "The mass of the Earth", Check | – | "Ordinary rock at the surface is much less dense than this average" | No cited source supports it, but it is standard and correct (crustal rock about 2.7–3 × 10³ kg/m³). Optional: give a figure, and/or compare with the Earth Fact Sheet's mean density 5513 kg/m³, which the page could cite |
| 8 | info | Reference `persson`, `location` | Cornu and Baille (1873) is discussed in Sec. 5 ("Origins of Historical Inaccuracy"), not Sec. 2 | "Sec. 2 (…) and the discussion of when G was first derived (Cornu and Baille, 1873)" | Add "Sec. 5" to the location |
| 9 | info | Formulas "Field strength at a height h" and "The mass of the Earth from g, R and G" (cite="mit") | Siyavula 2.4 has neither (R + h) nor M = gR²/G written out; it has only the rule that distances to large objects are measured from the centre, and exercises about heights | The `at=` texts say how each follows ("distance measured from the centre", "solved for the mass") | Acceptable as written. For (R + h) MIT Ch. 8 Sec. 8.2.1 ("At points significantly far away from the surface of Earth, the gravitational force is no longer constant …") is a closer citation |
| 10 | info | Bullet "A point mass" | MIT Sec. 9.2.1: "for a perfect sphere with uniform mass distribution" | "spread evenly (or in even shells)" | The shells extension is correct (shell theorem) but not in the cited section; fine |
| 11 | info | Section "Measuring G in a laboratory" | Persson does not describe the rod, wire and lead balls | Describes the apparatus | Standard and correct (Cavendish used lead spheres on a torsion balance); "G is known less precisely than almost any other constant" is also standard and correct but not on the NIST page itself |

## Formulas and citations
- `F = G m₁m₂/r²`, cite="mit": matches Siyavula's definition box and formula (Siyavula writes d; the page says so). Correct.
- `G = 6.674 × 10⁻¹¹ N·m²/kg²`, cite="nistg": NIST shows 6.674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻², relative standard uncertainty 2.2 × 10⁻⁵. N·m²/kg² = m³ kg⁻¹ s⁻². Correct. Siyavula and MIT both round to 6.67 × 10⁻¹¹, as the page says.
- `g = F/m = GM/r²`, cite="mit": Siyavula derives a₀ = G M/d² from F = ma; correct physics, but see finding 4 for the name.
- `F_g = m g`, cite="reading2", Sec. 8.2.3, Eq. (8.2.2): correct location (MIT writes F^G_{earth,object} = m g).
- `g = GM/R²` and `g = GM/(R+h)²` and `M = gR²/G`, cite="mit": correct physics; see finding 9.
- Reading 1 (Ch. 9): Sec. 9.2 Eq. (9.2.1) is the Moon's centripetal acceleration 4π²R/T²; Sec. 9.2.1 Eq. (9.2.2) is the law with a unit vector; the uniform-sphere statement and the 1666 sentence ("When Newton first explained the Moon's motion in 1666 …") are there. Locations correct.
- Reading 2 (Ch. 8): Eq. (8.2.1) in Sec. 8.2.1, Eq. (8.2.2) in Sec. 8.2.3; 9.78 m/s² (equator) and 9.83 m/s² (poles) after Eq. (8.2.3). Correct. Neither PDF section read carries a "rights reserved" or "courtesy" notice (grep on both texts: none).
- NASA fact sheets: Earth mass 5.9722 × 10²⁴ kg, volumetric mean radius 6371.000 km, surface gravity (mean) 9.820 m/s²; Moon 0.07346 × 10²⁴ kg, 1737.4 km, 1.62 m/s², semimajor axis 0.3844 × 10⁶ km, revolution period 27.3217 d; Mars 0.64169 × 10²⁴ kg, 3389.5 km, 3.73 m/s². All values on the page and in `references` match. (The Moon sheet's Earth comparison column lists 5.9724 and 9.80; the page uses the Earth sheet, which is right.)
- NASA "What Is Microgravity?": "about 90 percent of what it is on the planet's surface" and the free-fall explanation; matches the page.
- Persson: Michell designed the balance and died in 1793; Cavendish made 17 measurements from 5 August 1797 to 30 May 1798; the aim, per the title of his paper, was the density of the Earth; first derivation of G found by Persson: Cornu and Baille 1873; the Cavendish-measured-G story traced to Boys (1889). The page's dates and the "G derived later, in the nineteenth century" claim are supported (the 1873 date is Persson's own finding, "the first derivation … I found", so "later, in the nineteenth century" is the right level of hedging). Only the summary contradicts it (finding 1).
- All sources are on the §2.0 list or the AGENTS.md table (arXiv allowed). No forbidden source is cited or used.

## Arithmetic and answer checks
Recomputed independently (Python), and `pytest -k newtons-law-of-gravitation`: 61 passed.
- Students: 6.674e-11 × 60 × 75 / 0.25 = 1.201 × 10⁻⁶ N; 60 × 9.81 = 588.6 ≈ 589 N; ratio 2.04 × 10⁻⁹ ≈ 2.0 × 10⁻⁹. Correct.
- g Earth 9.8199 ≈ 9.82; Moon 1.6242 ≈ 1.624; Mars 3.7277 ≈ 3.728. Correct.
- M_E/M_Moon = 81.3 (≈ 81); 1.624/9.82 = 0.165 (≈ 1/6); Mars mass ratio 0.107, radius ratio 0.532, g ratio 0.380. Correct.
- Toolbox: 117.7 ≈ 118 N, 19.44 ≈ 19.4 N, 44.76 ≈ 44.8 N. Correct.
- g at 2R: 2.455 ≈ 2.45 N/kg; plot points (1, 9.82), (2, 2.455) lie on 9.82/x². Correct.
- ISS: 6771 km; g = 8.694 ≈ 8.69 N/kg; ratio 0.8853 ≈ 0.885, 89 %. Correct.
- Moon test: 384 400/6371 = 60.34 ≈ 60.3; 9.81/3600 = 2.725 × 10⁻³; 4π²r/T² with T = 27.3 d gives 2.728 × 10⁻³; GM/r² = 2.697 × 10⁻³ ≈ 2.70 × 10⁻³. Correct, and consistent with lesson 1.10's worked example.
- Earth mass: 9.81 × (6.371 × 10⁶)² / 6.674 × 10⁻¹¹ = 5.966 × 10²⁴ ≈ 5.97 × 10²⁴ kg; volume 1.083 × 10²¹ m³; density 5508 ≈ 5.5 × 10³ kg/m³ (NASA mean density 5513). "Lower in the fourth figure" (5.966 against 5.972) correct.
- "A millionth of a newton is roughly the weight of a single grain of sand": 10⁻⁶ N ↔ 0.1 mg; a 0.5 mm quartz grain is about 0.17 mg. Fair as an order of magnitude.
- Quiz 1: halving r → 4F (choice 3). Correct; F/4, F/2, 2F wrong.
- Quiz 2: choice 1 correct; others wrong.
- Quiz 3: r = 3R → 900/9 = 100 N (choice 3). Correct; 225 N is the height mistake, 450 and 300 N are linear mistakes.
- Quiz 4: 50 × 1.62 = 81 N (choice 3). Correct; 0, 31 and 50 N wrong.
- Quiz 5: 60² = 3600 → g/3600 (choice 2). Correct.
- Flashcards: all true.
- Calcs file: every number on the page has an entry with `source: {cite, at}`. Origins: NASA and NIST values are `later-data`, Siyavula/MIT values `mit`, arithmetic `page-own`, as the plan requires. Two small points: `iss-r` (finding 5), and `earth-density`/`earth-density-water` cite Persson for arithmetic Persson does not contain (better `earthfact`, mean density 5513 kg/m³, or `mit`).

## Only earlier terms
- Weight, F_g = m g and field strength in N/kg: lessons 2.1, 2.3, 2.5. Third law: 2.4. Inverse square law, proportional: 0.6 (and 0.5). Constant g: 1.7. Centripetal acceleration, period, the Moon's 2.7 × 10⁻³ m/s²: 1.10. Astronauts in free fall: 2.5. Powers of ten: 0.1. All introduced.
- Density: introduced in lesson 0.2 (units-and-si, "density, mass per volume, is kg/m³", with the water example) and used in 0.4 and 0.5, so the density step does not depend on lesson 4.1. The sphere volume (4/3)πR³ is not derived in any earlier lesson (0.6 only lists "the volume of a cube or a sphere" as a cube power law), but the worked example gives the formula in its problem statement as data. Acceptable at this level; no change needed.
- "Unit vector": not introduced (finding 6).
- "CODATA" is used without explanation ("CODATA, kept by NIST"); harmless, info.
- Cosmology callout: dark matter, dark energy, the Friedmann equation, general relativity appear as forward glimpses, labelled as later material; fine for a callout. The 8.286 `leadsTo` reason says "scale factor", not yet introduced; info only.
- Forward references: "In Block 6 you will meet the electric field" and "lessons 2.12 and 2.13" are correct pointers. For PC 2's Block 6: the page states F = G m₁m₂/r² (with the Earth example F = GMm/r² written out at the start of "The gravitational field strength g") and g = F/m = GM/r² in N/kg, as Block 6 needs.

## Coverage
- §4 row 2.11 (Newton's law of gravitation, PhET gravity-force-lab-basics): covered at VWO level: the law, G and its measurement, field strength g = GM/r², g on other bodies, variation with height, Moon test, mass of the Earth. PhET used with a matching "Try it".
- Not covered: adding the gravitational pulls of several bodies (superposition; mentioned only in the 8.01 `leadsTo`), and comparative ("ratio") problems on other planets as Siyavula's worked examples 22 and 23 do them (the quiz does it with distances only). Neither is essential; superposition is optional at VWO level. Orbits and orbital speed belong to 2.12.

## Where this leads
- 8.01 Lecture 5 → `universal-gravitation` ("The universal law of gravitation"): vector law, superposition, g from M and R. Matches the §4 row and the `why`.
- 8.286 Lecture 6 → `expanding-sphere`: Newtonian gravity on a uniformly expanding ball, equation for a(t). Correct. The callout says Guth "arrives at the Friedmann equation": that happens in Lecture 7 (`friedmann-equation`), which builds on Lecture 6; the callout gives no lecture number, so it is correct. Optional: add 8.286 Lecture 7 to `leadsTo`.
- `towards: false` is right (2.13 is the block's last lesson). Cosmology claims (gravity holds galaxies and clusters, orbits weigh them and point to dark matter, gravity slows expansion while dark energy now speeds it up, the Newtonian derivation gives the same equation as general relativity for this case) are correct.

## Licensing and AI terms
- Copied text: the definition blockquote (finding 2). No other sentence matches Siyavula or the MIT notes closely; the MIT 1666 sentence is paraphrased and attributed.
- Figures: none copied; the only figure is a `<Plot>` computed from 9.82/x².
- Worked examples: two students (Siyavula uses a man and a woman, a baby and a father) and the toolbox on three worlds (Siyavula: Jojo on Mercury, Mars, Neptune) use the same kinds of situation with the page's own numbers; acceptable, and the calcs header lists what was not reused. Quiz 3 repeats a Siyavula exercise (finding 3). MIT's period-of-the-Moon calculation is not reused.
- No Siyavula logo, brand or "Everything Science"; Siyavula is named only in the source title (attribution).
- MIT: no "excluded from our Creative Commons license" or "All rights reserved" material in the sections used.
- NASA: no insignia. "NASA's statement that gravity at the station is about 90 percent" and "NASA's value for the Earth's mass" cite NASA pages, not "according to NASA" for AI-written claims; acceptable, though "the NASA page *What Is Microgravity?* gives …" would be closer to the rule. Info.
- ESO: not used. arXiv paper: allowed; read on arxiv.org only.
- No forbidden source cited or read.

## Notes
- `content:check`: 0 errors; the only warning for this page was the missing review file.
- `pytest -k newtons-law-of-gravitation`: 61 passed.
- The explanation that the course's 9.81 m/s² is "a little smaller because the Earth spins and is slightly flattened" is broadly right (the mean effective g is about 9.80 m/s²; 9.81 is also a rounding), and the MIT notes support the equator and pole values. Info only.

## Resolution (2026-11-20, by the page author)
1. Summary bullet 2 rewritten: Cavendish's torsion balance (1797 to 1798) first measured gravity between objects in a laboratory, to find the density of the Earth; G itself was worked out from such measurements later. Now agrees with the body and Persson.
2. Definition blockquote rewritten in the page's own words ("Any two point masses pull on each other, each one straight towards the other …").
3. Quiz 3 now uses a height of three Earth radii: r = 4R, 900/16 ≈ 56 N; distractors 300 N, 225 N and 100 N (the height mistake, 900/9). Calcs `quiz-satellite` and `quiz-satellite-wrong` updated.
4. Added after "gravitational field strength": Siyavula calls the same quantity the gravitational acceleration; the MIT notes give it as the force on a standard kilogram in N/kg (Sec. 8.2.3).
5. ISS height now cited in the text to NASA *What Is Microgravity?* (200 to 250 miles; 250 miles is about 400 km); `microgravity` reference location names the altitude. Calcs: `iss-h` (fact, 400 km), `iss-miles` (fact, 250 mile), `iss-miles-km` (conversion), `iss-r` now a `kind: fact` citing `microgravity`, and the sum kept as a checked entry `iss-r-sum`.
6. "Unit vector" explained in brackets: an arrow of length 1 that only points along the line between the two masses.
7. Added the Earth Fact Sheet mean density, 5513 kg/m³, after the computed 5.5 × 10³ kg/m³ (calcs `earth-density-nasa`; `earthfact` location lists it). No rock-density figure added, as no cited source gives one.
8. `persson` location now names Sec. 5 for Cornu and Baille (1873).
9. Formula "Field strength at a height h" now cites MIT Ch. 8 Sec. 8.2.1 (reading2). "The mass of the Earth from g, R and G" left as it was (acceptable per the review).
10. No change (shell theorem extension is correct).
11. No change (standard and correct).
Calcs `earth-density` and `earth-density-water` now cite `earthfact` instead of Persson. Optional `leadsTo` 8.286 Lecture 7 (`friedmann-equation`, checked) added; the Lecture 6 reason no longer says "scale factor".
Checks: `pytest -k newtons-law-of-gravitation` 66 passed; `content:check` has no error or warning for this page.
