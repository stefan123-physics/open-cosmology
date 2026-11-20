---
page: content/year-0/hs-4/density-and-pressure.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (read: resource page and the PDF MIT8_09F14_Chapter_6.pdf, text extracted; Sec. 6.3 "Static Fluids & Steady Flows" pp. 115–116; no "All rights reserved" or "excluded" notice)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-01 (read; CC BY footer; CCBY row in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02 (read, Table 7.1; CC BY footer; CCBY row)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read, Table 3.1; CC BY footer; CCBY row)
  - https://www.grc.nasa.gov/www/k-12/airplane/fluden.html (read; "Last Updated: May 13 2021")
  - https://www.grc.nasa.gov/www/k-12/airplane/pressure.html (read; "Last Updated: May 13 2021")
  - https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html (read; "Last Updated: May 13 2021")
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
  - public/phet/density_1.2.12_en.html (string table checked)
  - Earlier lessons on disk (0.1, 0.2, 0.4, 0.5, 2.2, 2.5, 2.6), later lessons that cite 4.1 (4.3, 4.4, 5.5, 7.1, 7.2, 8.5), content/year-3/8.044/thermodynamic-variables.mdx and MIT 8.044 Lecture 5 slides (for leadsTo)
verdict: pass-with-notes
---

# Review: Density and pressure (4.1)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Pressure", paragraph after the formula: "a sheet of paper lying on a table presses with about that much" | No source; calcs `paper-pressure` uses 80 g/m² paper: 0.080 × 9.81 = 0.78 Pa (25% tolerance) | "about" 1 Pa | Order of magnitude is right, but 0.78 Pa is not quite "about 1". Write "a little less than that (about 0.8 Pa for ordinary printer paper)" or keep and accept the rounding. Writer-flagged. |
| 2 | info | Worked example "A car on its tyres", last step | No source | 200 kPa "is close to how much the air pressure inside a car tyre is raised above the air outside: a tyre flattens at the bottom until the patch is large enough for the air inside to carry the car" | Correct as an approximation: typical car tyres run at 2.0–2.5 bar gauge, and the mean contact pressure is roughly the inflation (gauge) pressure; the sidewalls carry a small part of the load and the pressure over the patch is not uniform. "Close to" already hedges. Optionally add "roughly: the stiff sidewalls carry a little of the load". Writer-flagged. |
| 3 | info | "Density", "Why is air so much less dense than water, about 800 times?" | 1000/1.2 = 833 (1000/1.225 = 816 with NASA's sea-level fit; 1000/1.217 = 822 with the Earth Fact Sheet's surface density) | "about 800 times" | Fine as a round number; "more than 800 times" would be slightly better. Writer-flagged. |
| 4 | info | Frontmatter `readings[0].location` | Siyavula 7.1: pressure "is a measure of the number of collisions of the gas particles with each other and with the sides of the container" | Location repeats "collisions of its particles with each other and with the walls" | Siyavula's wording is loose physics (collisions between particles do not make the pressure on a wall). The page body correctly says the pressure comes from hits on the walls. Optionally shorten the location to "pressure of a gas from the collisions of its particles with the walls of the container". |
| 5 | info | "Density", "air near the ground has about 1.2 kg/m³ (lesson 2.6)" | Earth Fact Sheet (cited on the page): "Surface density: 1.217 kg/m3"; NASA atmosphere fit gives 1.225 | Attributed to lesson 2.6 only | Correct. Could also cite `earthfact` (already a reference) for the value. |
| 6 | info | Callout title "Towards the universe" | — | A non-`towards` lesson uses the title reserved for the block's last lesson; 48 other lessons use "Towards cosmology" | Rename to "Towards cosmology" (as lesson 4.2 does). |
| 7 | info | Depth plot, `range={[0, 600]}` | p = 101 + ρ·9.81·h/1000 | At ρ = 1400 the line passes 600 kPa at h ≈ 36 m and leaves the top of the graph for the last 4 m | Harmless; `range={[0, 700]}` would keep the whole line visible at every slider setting. |

## Formulas and citations
- ρ = m/V (`nasadensity`): NASA *Gas Density*: "Density is defined as the mass of an object divided by its volume" ✓. Fixed density of solids, wide variation for gases, air at the surface very different from 50 km up ✓ (supports the "nearly fixed density" sentence).
- p = F/A (`nasapressure`): NASA *Gas Pressure*, molecular definition ("The sum of the forces of all the molecules striking the wall divided by the area of the wall is defined to be the pressure") and macro-scale section (pressure force = pressure × area, perpendicular to the surface) ✓. "Pressure acts in all directions at a point inside a gas" ✓ supports "acts in all directions at once".
- p₀ ≈ 1.01 × 10⁵ Pa (`reading2`): Siyavula Gr 11 7.2 Table 7.1: "760 mm Hg = 1 atm = 101 325 Pa" and SI unit pascal ✓.
- p = p₀ + ρgh (`mit`, Eq. 6.53): 8.09 Ch. 6, Sec. 6.3, p. 115: "if the density ρ is constant, then if Φ = gz, then P(z) = P₀ − ρgz" ✓; the page states the change h = −z ✓. Sec. 6.3 title in the PDF is "Static Fluids & Steady Flows" ✓. The page's own column derivation (ρAhg/A) is correct and checked by calcs identity `column-weight-identity`.
- F_B = ρ_fluid V g (`mit`, p. 116): "Example the Archimedes principle says that the pressure balances the weight of any displaced fluid ... The force is pressure times area, so that is the volume displaced times ρg" ✓ p. 116 (the Example follows the page-115 footer). The page's explanation (bottom pushed harder than top) is better physics than the notes' bottom-only argument; no conflict.
- NASA *Earth Atmosphere Model*: troposphere fits T = 15.04 − 0.00649 h, p = 101.29 [(T + 273.1)/288.08]^5.256 (kPa, h in m), ρ = p/[0.2869 (T + 273.1)], "pressure of the air can be related to the weight of the air over a given location" ✓. Plot expression 288.14 − 6.49h = 15.04 + 273.1 − 6.49h (h in km) ✓.
- Earth Fact Sheet: "Mean density (kg/m3) 5513" ✓.
- Siyavula Gr 10 3.2 Table 3.1: "Particles are tightly packed together" (solid), "Bigger spaces than in solids but smaller than in gases" (liquid), "Large spaces" (gas) ✓. Siyavula Gr 11 7.1: particles constantly moving and colliding ✓.
- Uncited but standard and correct: kPa/hPa/bar conversions, weather maps in hPa, pressure equal in all directions at a given depth in a liquid, gauge pressure reading ρgh, ship's average density, floating fraction ρ/ρ_fluid.

## Arithmetic and answer checks
Recomputed independently in Python; `pytest -k "density-and-pressure or temperature"` on calcs: 128 passed.
- Statue 0.50/2.0e-4 = 2500 ✓; m·V = 1.0e-4 ✓; V/m = 4.0e-4 ✓. Answer 0 ✓ (2.5 > 1, sinks).
- Box: A = 0.020 m², 30/0.020 = 1500 Pa ✓; F·A = 0.60 ✓; A/F = 6.7e-4 ✓; 150 Pa (30/0.20) is wrong ✓. Answer 0 ✓.
- Lake 25 m: ρgh = 2.4525e5 ✓; total 3.46e5 → "3.5 × 10⁵" ✓ (3.43 atm, "about three and a half" ✓); without air 2.5e5 ✓; without g 1.26e5 → 1.3e5 ✓. Answer 0 ✓.
- Containers: answer 3 ✓ (hydrostatic paradox); others wrong ✓.
- Bottle: answer 0 ✓; others wrong ✓.
- Slab: V = 6.0e-3 m³ ✓; ρ = 2400 ✓. Room 144 m³ × 1.2 = 172.8 → "≈ 170 kg" ✓ ("more than two adults" ✓).
- Car: 1200 × 9.81 = 11 772 N ✓; A = 0.060 m² ✓; p = 1.96e5 → 2.0e5 Pa ✓.
- Air column: 1.01e5/9.81 = 1.03e4 kg ✓ ("ten tonnes" ✓). 1013 hPa ✓.
- Atmosphere plot: p(0) = 101.4 kPa ✓; half pressure at h = 5.49 km ✓; p(11 km) = 22.6 kPa (within range) ✓.
- 10 m water: 9.81e4 Pa ✓. Diver 12 m: 1.177e5 ✓; 2.187e5 → 2.19e5 ✓; ratio 2.17 ✓. Doubling depth 10.3 m ✓.
- Wood block: 11.77 N ✓, 19.62 N ✓, 1.2 kg ✓, 1.2e-3 m³ ✓, 0.60 ✓.
- Earth 5513/1000 = 5.5 ✓. Water/air 833 (row 3).
- Flashcards: all true.
- Not in calcs (info): "about three and a half atmospheres" (quiz 2 explanation), "1 L = 10⁻³ m³" and "1.00 kg/L = 1000 kg/m³" (Try it), "1 bar = 10⁵ Pa". All correct; add `kind: identity`/fact entries if the calcs file should cover every number. Calcs `quiz-statue-density` has no `quiz: 0` tag (others do).

## Only earlier terms
- kg/m³ (0.2 ✓), rearranging (0.4 ✓), straight line (0.5 ✓), k/h prefixes and hecto (0.1 table ✓), weight F_g = mg (2.5 ✓), balanced forces (2.2 ✓), "fluid (a liquid or a gas)" (2.6 ✓, a listed prerequisite), air density 1.2 (2.6 ✓): all introduced earlier.
- "particles" of matter: first developed in Block 4; lesson 3.4 previews them ("the tiny particles a substance is made of (Block 4)"), and this page introduces them in place (Table 3.1 paragraph). Fine.
- "Heat the gas and the particles move faster" uses the link between temperature and particle speed one lesson before 4.2 makes it. Everyday wording, forward reference to 4.3 and 4.4 given; acceptable (info).
- Forward references 4.3, 4.4, 8.5 ✓ (8.5 is `how-stars-shine`, which refers back to 4.1 for pressure growing with depth ✓).
- No term used before introduction found.

## Coverage
- §4 row 4.1: density and pressure, PhET `density`, leads to `8-044/thermodynamic-variables`. The old OpenStax sources named there (CP 11.2–11.4) are not used ✓. Density, pressure and pascal, atmospheric pressure and its fall with height, pressure with depth, Archimedes and floating, molecular origin of gas pressure: all at VWO level.
- Left out: Pascal's principle and hydraulics, barometers/manometers, the hydrostatic paradox only as a quiz question. None is needed for later lessons or cosmology; Pascal's principle is a common school topic and could be a one-line note (info).
- Consistency with later lessons: 4.3 uses pressure in pascal and the 10 m water layer (lesson 4.1) ✓; 5.5 (sound as a pressure wave), 7.1/7.2 (density = mass/volume, nuclear density) and 8.5 (pressure grows with depth "as in the sea") all match what 4.1 teaches ✓.

## Where this leads
- `8.044` lecture 5 → `content/year-3/8.044/thermodynamic-variables.mdx` ✓ (exists; matches §4). The `why` (extensive volume vs intensive pressure, equation of state) agrees with 8.044 L5 slides 2 and 4 (read) ✓.
- `towards: false` ✓ (4.10 is the block's last lesson). The callout's cosmology claims (pressure holds up a star; the density of the universe governs its expansion) are correct.

## Licensing and AI terms
- All three Siyavula pages show the "Creative Commons Attribution License" footer and are CCBY rows in docs/siyavula-licences.tsv; none mentions OpenStax. No Siyavula logo or branding; titles say "Siyavula, Physical Sciences Grade 11", which is attribution.
- MIT 8.09 Chapter 6: CC BY-NC-SA, no exclusion notice. No figure from it used.
- NASA: cited by page title, no insignia, no "according to NASA" (the wording is "(NASA, Earth Fact Sheet)", "uses NASA's model"). Both plots are generated from formulas.
- No copied sentences. Closest: NASA "The pressure of the air can be related to the weight of the air over a given location" vs page "the air pressure at any place comes from the weight of all the air above it": reworded short factual statement, fine.
- Worked examples (paving slab, classroom air, car tyres, diver 12 m, wooden block) and quiz items are the page's own: NASA's density page uses a 26-molecule box example; Siyavula Table 7.1 has no exercises of this kind; 8.09 has no numerical examples here. Not repeated from earlier lessons (0.2's example converts water's 1.0 g/cm³; 2.6 uses air density only in drag).
- No forbidden source cited or used. No em dashes. Units inside maths in body text; plot captions are plain strings as elsewhere.
- PhET "Try it": the `density` 1.2.12 strings include the screens Intro, Compare, Mystery, materials Wood/Brick/Aluminum, "Scale", "Density (kg/L)", "{{liters}} L" and a "Volume units" option (L or dm³): the text's litres and kg/L match the sim's default ✓.

## Notes
- Writer's flags: tyre approximation (row 2, fine), paper "about 1 Pa" (row 1), "about 800 times" (row 3).
- Verdict pass-with-notes: no errors found; rows 1 and 6 are the only ones worth changing.

## Resolution (2026-11-20, by the page author)

1. Fixed: the paper sentence now says the sheet presses with "a little less than that (about 0.8 Pa)". Calcs `paper-pressure` now expects 0.8 Pa (80 g/m² paper, tolerance 3%) with the new shown text.
2. Fixed: the tyre step adds "(roughly: the sidewalls carry a small share of the load)".
3. Fixed: "more than 800 times". Calcs `water-over-air` now expects 833 (1000/1.2) with the new shown text.
4. Fixed: readings[0].location now reads "pressure of a gas from the collisions of its particles with the walls of the container".
5. Fixed: the air value now cites "(lesson 2.6; NASA, Earth Fact Sheet)"; the `earthfact` location adds "Terrestrial atmosphere: surface density 1.217 kg/m³"; new calcs fact `air-density-factsheet` (1.217 kg/m³).
6. Fixed: callout title renamed to "Towards cosmology".
7. Fixed: depth plot `range={[0, 700]}`.
Arithmetic notes: added calcs entries `quiz-lake-atm` (3.46 atm, "about three and a half atmospheres"), `bar-pascal` (1 bar = 10^5 Pa), `litre-cubic-metre` (1 L = 10^-3 m³) and `water-kg-per-litre` (1000 kg/m³ = 1.00 kg/L). The `quiz: 0` tag on `quiz-statue-density` was tried and not kept: choices 0 and 1 both show 2.5 × 10³ kg/m³ (they differ only in "sinks"/"floats"), so the harness's rule that exactly one choice matches the number cannot hold; the answer 0 was checked by hand (2.5 > 1, it sinks).
Not changed: the optional Pascal's principle note (coverage, info).

Checks: `npm run calc:test -- -k density-and-pressure`: 45 passed. `npm run content:check`: no error or warning for this page. Status set to reviewed.
