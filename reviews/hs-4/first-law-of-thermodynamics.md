---
page: content/year-0/hs-4/first-law-of-thermodynamics.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read: slides PDF, 25 pages, every slide)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l5/ (read: slides PDF, 30 pages, every slide)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec04/ (read: slides PDF, 19 pages, every slide)
  - https://www.grc.nasa.gov/www/k-12/airplane/thermo1.html (read)
  - https://www.grc.nasa.gov/www/k-12/airplane/work2.html (read)
  - https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html (read)
  - public/phet/gas-properties_1.1.12_en.html (string table read)
  - content/year-3/8.044/first-law.mdx (the leadsTo target, read)
verdict: needs-changes
---

# Review: The first law of thermodynamics

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Opening paragraph ("Spray a deodorant ... the can feels cold ... In all three cases a gas has had work done on it, or has done work itself, and its temperature changed as a result") | No source covers spray cans. Physics: a deodorant can holds a liquefied propellant; the can goes cold almost entirely because that liquid boils to refill the space above it, taking its latent heat from the can (lesson 4.6). | The cold can is presented as a case of a gas cooling because it does work. The adiabatic section later hedges ("much of the cold you feel also comes from the liquid ... evaporating"), but the "also" still makes expansion work the main cause. | Replace the can by a cleaner adiabatic example (e.g. the air hissing out of a tyre valve feels cool), or keep the can but say that its cold comes mainly from evaporation (lesson 4.6) and take it out of "in all three cases". Change the adiabatic bullet to match ("the can itself goes cold mainly because the liquid inside evaporates"). |
| 2 | warning | "Rising air cools": "The rising air does work on the air around it and cools. NASA's standard model of the atmosphere has the temperature falling by about 6.5 °C for every kilometre" | NASA's atmosphere model gives the temperature of the surrounding atmosphere (T = 15.04 − 0.00649 h). A dry rising parcel cools faster, about 10 °C/km (g/c_p with c_p of air = 1.01 J/(g K), 8.21 Lecture 4 slide 6, gives 9.7 K/km). | Put side by side, the two sentences read as if a rising bubble cools at 6.5 °C/km. The last sentence ("one reason why the average fall is not even steeper") only implies the difference. | Say it in two steps: dry rising air cools by about 10 °C per kilometre; the average temperature of the air (NASA's model) falls by about 6.5 °C per kilometre, less steeply, partly because condensing water vapour gives off latent heat. Add the 10 °C/km figure to the calcs file if used. |
| 3 | warning | "Engines: heat into work" | 8.044 L5 slide 18 and NASA "Work Done by a Gas" give work as the area under the path; a cycle's net work is then the area it encloses (standard school content for heat engines). | The engine section says ΔU = 0 over a cycle but not that the net work is the area enclosed by the cycle on a p–V diagram. Lesson 4.9 (in the checkout) does not cover it either. | Add one or two sentences (optionally a closed path on a small graph): over one cycle the work done by the gas equals the enclosed area; going round clockwise the engine delivers work. |
| 4 | info | "Work as an area" | 8.044 L5 slide 18: đW = −P dV is "good only for quasistatic processes". | Not mentioned. | Optional: "as long as the change is slow enough for the gas to have one pressure throughout". Fine to leave at VWO level. |
| 5 | info | "Internal energy" | 8.21 L4 slide 3 distinguishes thermal energy (motion and excitations above 0 K) from internal energy (all energy including binding and rest-mass energy). | Treats them as the same, following lesson 4.2 ("here the same thing"). | None needed; consistent with lesson 4.2 and with 8.044's U. |
| 6 | info | Try it | Sim label is "Volume (V)" under "Hold Constant". | choose "Volume" | Optional: write "Volume (V)". |

## Formulas and citations
Slide numbers checked on every PDF page (8.044 slides by their footer `L5Bn`/`L6Bn`, 8.21 by its printed "n / 18").
- U = (3/2)Nk_BT = (3/2)nRT, `mit` slide 18: correct (L6B18: C_V = 3/2 Nk, U = C_V T = 3/2 NkT). 8.21 "Lecture 4, slide 4": correct (printed 4/18, PDF page 5: U = 3/2 N k_B T).
- "(8.044 Lecture 6, slides 16 and 17)" for U independent of V at fixed T, with an experiment: correct (L6B16 expansion into a bath, Tf = Ti; L6B17 (∂U/∂V)_T = 0). The experiment is an expansion, not a squeeze; "which also show this in an experiment" is accurate enough.
- "slide 6" for U a state function: correct (L6B6). "slide 7" for heat defined as dU − đW: correct (L6B7).
- ΔU = Q + W, `mit` slide 8: correct (L6B8: dU = đQ + đW; U state function, heat a flow of energy, energy conserved).
- W_by = pΔV, W = −pΔV, `reading2` slide 15: correct (8.21 printed 15/18: dW = F dx = pA dx = p dV, first law dQ = dU + p dV). The `at` text's "8.044 Lecture 5 (reading1), slide 15": the work slide is PDF page 18, footer damaged, lying between L5B14d and L5B16, so slide 15 is the right inference (writer flag 2 confirmed). It says đW = −P dV, work done on the system = −(work done by it).
- "8.044 Lecture 5, slides 18 to 20" for path dependence: correct (L5B18 "W depends on the path, W is not a state function"; L5B19 three paths on a P–V graph; L5B20 the three W₁₂).
- "Lecture 6, slide 14" for the four experimental conditions: correct (PDF page 14, footer garbled "8.0484.0L446LB1124B1", between L6B13 and L6B15; container, floating piston, bath, insulation; ΔV = 0, ΔP = 0, ΔT = 0, Q = 0). Writer flag 2 confirmed. The page does not cite L6 slide 23, so that inferred number is not used.
- ΔU = Q at constant volume, `mit` slide 14 with slides 8 and 11: correct (L6B11: dU = đQ − P dV).
- "5/3 times as much heat (8.044 Lecture 6, slide 19)": correct (L6B19: C_P = 5/2 Nk, C_P/C_V = 5/3).
- Q = ΔU + pΔV, `reading2` slide 15: correct (also L6B11).
- Isothermal ΔU = 0 ⇒ Q = −W = W_by, `mit` slides 16, 17 and 8: correct.
- W_by = nRT ln(V₂/V₁), `reading1` slide 20 path (c): correct; L5B20 has W₁₂ = NkT ln(V₁/V₂) as work done on the gas, and the page converts the sign correctly and says so.
- ΔU = W for Q = 0, `mit` slides 5, 6 and 20: correct (L6B5–B6 ΔU = W_adiabatic; L6B20 "Adiabatic changes đQ = 0").
- pV^(5/3) and TV^(2/3) constant, `mit` slides 21 and 22: correct (L6B21 T/T₀ = (V/V₀)^−(γ−1); L6B22 PV^γ = c, γ = 5/3 monatomic). "An adiabat is steeper than an isotherm" is on L6B22 (dP/dV = −5P/3V against −P/V); the sentence is uncited but supported by the slide the next formula cites.
- NASA "First Law": E₂ − E₁ = Q − W with W done by the system, internal energy a state variable: the warning callout and flashcard state this correctly. NASA "Work Done by a Gas": work = area under the p–V curve; different processes give different work and heat: matches "NASA's guide ... explains it in the same way". NASA atmosphere model: T = 15.04 − 0.00649 h in the troposphere (to 11 000 m): matches 6.5 °C/km (see finding 2 for how it is used).
- Unsourced claims (writer flag 3), checked as standard physics: diesel ignition by compression (correct); molecules gain speed bouncing off an approaching piston (correct, standard); latent heat making the average lapse rate less steep than the dry rate (correct qualitatively, but see finding 2); spray can (finding 1); heat-engine work ≤ heat taken in over a cycle (correct, follows from ΔU = 0).
- No forbidden source cited or used.

## Arithmetic and answer checks
Recomputed independently in Python (R = 8.31 J/(mol K)). `npm run calc:test -- -k first-law-of-thermodynamics`: 35 passed. `npm run content:check`: 0 errors (only the missing-review warning for this page).
- Balloon: U = 1.5 × 0.40 × 8.31 × 293 = 1461 J → 1.46 × 10³ J; ΔU = 49.86 → 49.9 J. Correct.
- Keeping the books: 450 − 120 = 330 J; −200 + 80 = −120 J. Correct.
- Piston: W_by = 200 J, ΔU = 300 J, Q = 500 J, T₂ = 500 K. Cross-check: n = pV₁/(RT₁) = 0.1203 mol, (3/2)nR × 200 K = 300 J. The constant-volume comparison (300 J) and the ratio 500/300 = 5/3 are consistent.
- Quick squeeze: ΔT = 12/(3 × 0.0050 × 8.31) = 96.3 K → 96 K; 293 + 96.3 = 389 K. Correct; above 373 K, so "well above the boiling point of water" holds.
- Three ways: p₁ = 2.493 × 10⁵ Pa (249.3 kPa); (a) W_by = 2493 J, ΔU = 3739.5 J, Q = 6232.5 J → 2.49, 3.74, 6.23 × 10³ J; (b) 8.31 × 300 × ln 2 = 1728 J → 1.73 × 10³ J; (c) T₂ = 188.99 K → 189 K, ΔU = −1383.8 J (−1383.6 with 189 K) → −1.38 × 10³ J. All correct; the order a > b > c matches the areas.
- Plot: constant p 249.3 kPa; isotherm 2493/V; adiabat 249.3 (10/V)^(5/3) reaches 791 kPa at V = 5 L, inside the 0–900 range. Caption numbers match.
- Lapse rate 0.00649 × 1000 = 6.49 → 6.5 K/km. CMB 2.7 K matches lesson 4.2's 2.725 K.
- Quiz 0: 300 + (−100) = 200 J, choice 0 correct; 400, −100, +300 wrong. Writer flag 6: only one choice matches.
- Quiz 1: choice 0 correct; the other three are wrong; explanation true.
- Quiz 2: ΔU = 0 ⇒ W_by = Q = 250 J; choice 0 correct; others wrong.
- Quiz 3: 1.5 × 10⁵ × 2.0 × 10⁻³ = 300 J; 3.0 × 10⁵ J (litres not converted), 75 J (1.5 × 10⁵ / 2.0 × 10³, a division slip) and 0 J are wrong. The 75 J distractor is not in the calcs file (info: no explanation quotes it).
- Quiz 4: tank Q = ΔU, piston Q = ΔU + pΔV = (5/3)ΔU for helium; choice 0 correct; explanation true.
- Flashcards: all six are true and match the page.

## Only earlier terms
Checked against lessons 0.9, 0.10, 3.1, 3.4, 4.1–4.7 and lesson 4.9 (written, draft).
- Internal/thermal energy as kinetic plus potential: lesson 4.2. Ideal-gas particles do not attract: 4.3. (3/2)k_BT per atom, and the extra energy of spinning/vibrating molecules: 4.4. Nk_B = nR, Boyle, Charles, isotherm, litres: 4.3. p = F/A, kPa, pressure falls with height: 4.1. Heat Q and its sign: 4.5. Latent heat, evaporation, condensation: 4.6. Work and the area under a force–displacement graph: 3.1. Energy conservation: 3.4. ln: 0.9. Area under a graph: 0.10. Fractional powers: Block 0 (0.9 refers back to 10^(1/2) in 0.6). Microwave background: 4.2 and several earlier lessons.
- Introduced on the page itself with a definition: monatomic, U as a property of the state, W (work done on), W_by, p–V diagram, path, isochoric, isobaric, isothermal, adiabatic, adiabatic path, heat engine.
- Lesson 4.9 is named as the place where engines must give off heat to something colder; it exists in the checkout and covers this.
- No term found used before it is introduced.

## Coverage
- §4 row 4.8: the first law (topic only; the OpenStax sections named there are ignored and were not opened). Covered: internal energy, the first law with both sign conventions, work pΔV and as an area, path dependence, the four simple processes, C_p/C_v for a monatomic gas, adiabatic heating and cooling with everyday examples, heat engines as a teaser for 4.9.
- Missing at VWO level: the net work of a cycle as the enclosed area on a p–V diagram (finding 3). Worth adding, since 4.9 does not have it either.
- Beyond VWO, flagged on the page as not needed at school (writer flag 4): nRT ln(V₂/V₁), pV^(5/3), TV^(2/3). Acceptable; used only in one worked example and the graph, and lesson 4.10 reuses TV^(2/3).
- PhET "Try it" (writer flag 5): the strings exist in gas-properties 1.1.12: screen "Ideal", panel "Hold Constant", options "Volume (V)" and "Pressure ↕V". Heating at constant volume and at constant pressure is enough for this lesson. The §4 table lists no sim for 4.8; per §3.5 the owner should add `gas-properties` to the 4.8 row (info).

## Where this leads
- `leadsTo` 8.044 lecture 6 resolves to `content/year-3/8.044/first-law.mdx` (slug `first-law`, lecture 6), the target named in the §4 row. Its claims (U defined through adiabatic work, heat as the non-work part of ΔU, dU = đQ + đW, adiabats pV^γ = constant) are all on L6 slides 5–8 and 20–22 and in that page's summary. Correct.
- `towards: false`: correct; 4.10 is the block's last lesson.
- Consistency with 4.10 (towards-the-universe-cooling): same convention ΔU = Q + W with W done on the gas, W = −pΔV, Q = 0 ⇒ ΔU = W < 0, TV^(2/3) for a monatomic gas. Consistent. Also consistent with 4.5 (Q positive into the object) and with 4.9 (which says it uses heat and work amounts, "not the work done on the gas as in lesson 4.8").
- Cosmology callout: adiabatic expansion of the universe's contents, cooling to 2.7 K: correct and standard; matches the 8.044 first-law callout and 4.10.

## Licensing and AI terms
- No sentence copied: the 8.044 and 8.21 slides are terse notation; the page's prose is its own. NASA sentences ("the work is the area under the curve", "Different processes can produce the same state, but produce different amounts of work") are paraphrased, not copied.
- No figure copied: the only graphic is a generated `<Plot>`. The 8.044 sketches (pistons, paths) are not reproduced.
- Worked examples and quiz items are the page's own. "Three ways to double the volume" is related in spirit to L5B19–B20 (three paths between two states) and to NASA's constant-pressure vs curved path, but uses different paths (same start and final volume, different final states) and its own numbers. 8.21's examples (shower, house air, sweat) are not reused.
- "rights reserved"/"courtesy"/"excluded": none in the 8.044 L5 or L6 slides; 8.21 L4 slide 7 has three "Photo courtesy of ... on Flickr" photos, which the page does not use.
- NASA: cited by page title; "NASA's guide to thermodynamics" and "NASA's standard model of the atmosphere" name the source and do not present the page's text as NASA's or imply NASA review. No insignia.
- No Siyavula material, no ESO text, no forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs) cited or used. Writer flag 1 (MIT as main source because no Siyavula page covers the first law) is within §2.0, which lists MIT OCW as a support source; acceptable. I did not search Siyavula myself to confirm that no page covers it (uncertain).

## Notes
- Fix finding 1 (error) before setting `status: reviewed`; findings 2 and 3 are recommended.
- The `references` keys `nasa-first-law` and `nasa-work` are not used by any `cite=`; they are named in prose only. Allowed, and they appear in the credits through `references`.
- Calcs file: complete for every number on the page except the 75 J distractor (info).

## Resolution (2026-11-21, by the page author)
- Error 1: the spray can is out of the opening list; the opening now uses air hissing out of a tyre valve, and the adiabatic bullet says a spray can turns cold mainly because its liquid evaporates (lesson 4.6).
- Warning (rising air): the page now gives the two rates separately: a dry rising bubble cools by close to 10 °C per km (heat capacity of air from MIT 8.21 Lecture 4 slide 6; calcs entry `dry-bubble-rate`, g/c_p = 9.7 K/km), while NASA's standard atmosphere falls by 6.5 °C per km on average; the latent-heat sentence now compares with the dry bubble.
- Warning (engines): added that a cycle is a closed loop on a p–V diagram and its net work is the enclosed area.
- Info: quasi-static condition added to "work = area" (8.044 Lecture 5 slide 18); sim label written "Volume (V)". The 75 J distractor and thermal vs internal energy left as they are. Adding gas-properties to the §4 row of docs/HIGHSCHOOL-PLAN.md is left for the owner (plan changes only on main).
- Status set to reviewed.
