---
page: content/year-0/hs-4/towards-the-universe-cooling.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ and its PDF ce5405cf466deea227c0bbdf350d19d2_MIT8_044S13_L6.pdf (read: 25 PDF pages, footers "8.044 L6B1" to "L6B24" plus the OCW page; slides 8, 11, 15, 18, 19, 20, 21, 22, 23 checked word by word; no "All rights reserved", "Courtesy" or exclusion notice)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: Lecture 17 transcript, 20 pages; printed footers equal PDF pages; pp. 16–20 checked)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (read: Lecture 5 transcript, 29 pages; printed footers equal PDF pages; pp. 5–7 checked)
  - https://www.grc.nasa.gov/www/k-12/airplane/compexp.html (read)
  - https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html (read)
  - https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf (read: Secs. 24.1 and 24.2)
  - public/phet/gas-properties_1.1.12_en.html (strings and model code checked: screen "Explore", ExploreModel with leftWallDoesWork true, left-wall collision rule, thermometer, Hold Constant strings)
  - Lessons on disk: hs-4 first-law-of-thermodynamics (4.8, draft, present in the checkout), kinetic-theory, ideal-gas-law, density-and-pressure, temperature, phase-changes, conduction-and-convection; hs-5 towards-the-universe-redshift; hs-7 course list; hs-8 cosmic-microwave-background, the-big-bang, the-first-elements; 8.286 black-body-radiation, temperature-and-decoupling; 8.044 first-law; calcs/values.yaml
  - Not on disk: hs-4 entropy-and-the-second-law (4.9), being written in parallel
verdict: needs-changes
---

# Review: Towards the universe: an expanding gas cools (4.10)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Quiz 2 (helium, 27 times the volume) | 8.044 L6 slide 23: an adiabatic expansion that is not quasi-static (rupture a diaphragm into vacuum) does no work, ΔU = 0, and the ideal gas keeps its temperature; only a slow (quasi-static) expansion against a piston follows the adiabat | "expands without any heat flowing in or out until its volume is 27 times as large"; marked answer 44 K, distractor "400 K: no heat left the gas" | The stem allows a free expansion, for which the distractor 400 K is right. Say how it expands: "pushes a piston slowly outwards, with no heat flowing in or out, until…" |
| 2 | error | "The universe: a gas of light" (stretched-light paragraph), plot 1 caption and legend | (only-earlier-terms rule) | "black-body light", "its peak moves to longer wavelengths (lesson 7.2)" | Black body, spectrum peak and wavelength are Block 5/7 ideas, not introduced in Blocks 0–4 (4.2 only quotes the CMB temperature). Rephrase in Block 4 words, e.g. "the glow of a hot object (black-body light, lesson 7.2)", and keep the peak remark as a pointer only |
| 3 | error | "The light we still see: decoupling", para 1; quiz 5 explanation | (only-earlier-terms rule) | "a typical photon never scattered again" | "Photon" is not introduced before Block 7 (4.7 only says radiation "needs light and photons first", lesson 7.2). Write "a typical bit of light (a photon, lesson 7.2)" or avoid the word |
| 4 | warning | "Work done by an expanding gas", para after the W formula; quiz 3; Try it | Slides 15 and 23: Q = 0 "could come from time considerations" (too fast for heat to flow), but the adiabat T V^(γ−1) = c is for a quasi-static path ("slowly move piston"); a sudden expansion into vacuum does no work and does not cool an ideal gas | Q = 0 "when the expansion is so quick that heat has no time to flow"; later "a slow adiabatic expansion"; quiz 3 "squeezed quickly"; "Try it fast and slow" | Add one sentence: "quick" means faster than heat can flow, yet slow compared with the molecules; a gas that rushes into an empty space pushes nothing and (ideal gas) does not cool (slide 23) |
| 5 | warning | "How much colder?" | Slides 19, 22: γ = C_P/C_V = 5/3 for a monatomic gas; NASA Glenn: γ = cp/cv | γ appears as "γ = 5/3 for a monatomic gas" with no meaning | Say what γ is: the ratio of the heat needed at constant pressure to that at constant volume for the same warming, 5/3 for helium (4.8 already shows "5/3 times as much heat") |
| 6 | warning | Callout "Towards cosmology" | L17 p. 18: T ∝ 1/a holds only while g is fixed; p. 17: the T(t) formula is "a little bit more complicated" near thresholds | "with a small correction whenever a kind of particle disappears" | When electron–positron pairs disappear the photons' T·a rises by (11/4)^(1/3) = 1.40 (the site's 8.286 neutrinos page gives the inverse, (4/11)^(1/3)): 40% is not small. Drop "small" |
| 7 | warning | "Cooling in everyday life", Clouds | Lesson 4.8: the bubble is large, so heat flows in or out far too slowly to matter | "cools, so fast that it hardly exchanges heat with its surroundings" | The reason is the bubble's size (slow heat flow), not that it rises fast; align with 4.8 |
| 8 | warning | "The molecules' view", para 3 | Lesson 4.4: average kinetic energy = (3/2) k_B T | "that average **is** the temperature" | "that average sets the temperature" or "is a measure of the temperature" |
| 9 | warning | Frontmatter reading2 `location` | L5 p. 5: "the physical wavelength of the light pulse will simply be stretched with the scale factor … in exactly the same way as any other distance"; p. 6: ratio of scale factors = 1 + z | "p. 6: a light pulse is stretched with the scale factor, like every other distance; the ratio … is 1 + z" | Cite pp. 5–6 |
| 10 | warning | "How much colder?" para 1; "Cooling in everyday life" | Lesson 4.8 (on disk, draft) already states T V^(2/3) = constant and pV^(5/3) = constant, and uses the bicycle pump, spray can, rising air and engines | "here we state it and check it with numbers"; the same everyday examples | Say "Lesson 4.8 met this rule; here we use it", and trim or cross-refer the everyday list |
| 11 | warning | "Engines" bullet | NASA Glenn: adiabatic expansion in the power stroke | "The work it does is exactly what drives the car" | Overstated: the net work of the cycle, minus losses, drives the car. "This work is what drives the car" |
| 12 | info | "W = −p ΔV" formula, `at=` | Slide 11: "dU = đQ + đW = đQ − P dV" | at="slide 11 (đW = −P dV)" | Quote the slide as written; the substitution is implied there, not shown. (4.8 cites 8.044 L5 slide 15 for the same formula, which states it directly) |
| 13 | info | Tyre valve bullet | (no source) | the out-rushing air "does work pushing the outside air away, and comes out cool" | Acceptable at this level; strictly the gas left in the tyre does the work pushing the rest out, and the jet is cool partly because its energy is kinetic. Optional |
| 14 | info | Quiz 3 choices | | "$2240\ \text{K}$" | Not in the calcs file (280 × 8); add an entry |

## Formulas and citations
- ΔU = Q + W, `mit` slide 8: matches ("dU = đQ + đW"; U a state function, heat a flow of energy, energy conserved). Sign convention W on the gas, as in 8.044 and lesson 4.8.
- W = −p ΔV, slide 11: the slide has dU = đQ + đW = đQ − P dV, so đW = −P dV is implied (row 12).
- U = (3/2) N k_B T, slide 18: matches ("In a monatomic gas one observes C_V = 3/2 Nk … U = C_V T = 3/2 NkT").
- T V^(2/3) = constant, slides 19 and 21–22: slide 19 C_P/C_V = 5/3, slide 21 T/T₀ = (V/V₀)^−(γ−1), slide 22 "T V^(γ−1) = c, adiabat", "γ = 5/3 (monatomic)". Correct; the 2/3 is filled in as stated.
- T₂ = T₁(V₁/V₂)^(2/3), slides 21–22 rearranged: correct (slide 21 has this form directly).
- T ∝ 1/a, reading1 p. 18: correct ("as long as … the number of degrees of freedom contributing to this black-body radiation is fixed, the temperature just falls like 1 over the scale factor"), with the g-fixed caveat in `at`.
- T_then = (1 + z) T_now, reading1 p. 18 with reading2 p. 6: correct; the 1 + z ratio of scale factors is on L5 p. 6, the stretching of the wavelength with a(t) on p. 5 (row 9).
- Frontmatter reading1 location: p. 18 4000 K ionisation and T ∝ 1/a correct; "slightly colder" on p. 18 and 3000 K on p. 19, so "pp. 18–19" is right; 380 000 years p. 19 correct; straight lines / image pp. 19–20 correct; "half of the hydrogen" is the recombination definition on p. 19, correctly given as Guth's account.
- NASA Glenn: no heat and no losses → entropy change zero (isentropic) ✓; "For air, at standard conditions, it is 1.4" ✓; p2/p1 = (v1/v2)^γ and T2/T1 = (p2/p1)^((γ−1)/γ) ✓, which together give T V^(γ−1) = constant, so T V^0.4 for air follows (one implied step); "compression and power strokes for an internal combustion engine" supports the engine bullet.
- COBE FIRAS: "nearly perfect blackbody with a temperature of 2.725 +/- 0.002 K" ✓.
- PDG Sec. 24.1: D, ³He, ⁴He, ⁷Li "synthesized at the end of the first three minutes" ✓; Sec. 24.2: photo-dissociation delays deuterium until T ≈ 0.1 MeV, "nuclei can then begin to form", "nearly all neutrons end up bound in … ⁴He" ✓. PDG is CC BY 4.0 and in the AGENTS.md data table.
- Claims with no cited source but standard and correct: stretched black-body light stays black-body (cooler); a photon gas has T V^(1/3) constant; an isolated non-relativistic monatomic gas in an expanding universe cools as 1/a² (conditional, marked "our own step"); a light-bulb filament is near 3000 K.
- 13.8 billion years (intro) is uncited on the page; calcs cites L17 p. 19, where the transcript says "13.8 trillion years" (a transcription slip, noted in the calcs `where`). The value is the site standard in calcs/values.yaml ("Guth 2013: Planck 2013, rounded"). Acceptable; the page itself does not attribute it to the lecture, so no bracket note is needed.
- Rule 5: "Guth shows", "In Guth's account", "Guth estimates" used correctly; no post-2013 claims.

## Arithmetic and answer checks
All recomputed independently; `npm run calc:test -- -k towards-the-universe-cooling`: 41 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.
- 2^(−2/3) = 0.630 ✓; 8^(−2/3) = 0.25 ✓.
- Worked example 1: 16/2 = 8; 300 × 8^(−2/3) = 75 K ✓; 300 − 273 = 27 °C, 75 − 273 = −198 °C ✓; 300 × 2^(2/3) = 476.2, 75 × 16^(2/3) = 476.2 ✓; ΔU = 1.5 × 0.10 × 8.31 × (−225) = −280.5 J → −280 J ✓. Sanity: p₁ = 1.25 × 10⁵ Pa, p₂ = 3.9 kPa; helium is still a gas at 75 K.
- Plot 1: 300 × 8^(−1/3) = 150 K ✓ (photon gas, γ = 4/3); curves stay within range [0, 320] ✓.
- Molecule: 500 − 2 × 10 = 480 m/s ✓ (elastic bounce off a much heavier receding wall).
- Worked example 2: 1100 × 2.725 = 2997.5 K ✓; 373/2.725 = 136.9 → 137 ✓.
- 3000/2.725 = 1101 → "about 1100" ✓. Plot 2: 2.725 × 1600 = 4360 < 4500 ✓.
- 0.1 MeV/k_B = 1.16 × 10⁹ K → "about a billion kelvin" ✓; 10⁹/2.725 = 3.67 × 10⁸ → 3.7 × 10⁸ ✓ (T ∝ 1/a holds from there on, after e⁺e⁻ annihilation). "A few minutes" agrees with PDG and lesson 8.14 ("about three minutes").
- Quiz 1: answer 0 right; others wrong ✓.
- Quiz 2: 400/27^(2/3) = 400/9 = 44.4 K ✓; 133 K = 400/3 (power 1/3) ✓; 15 K = 400/27 = 14.8 ✓. Distractor 400 K is right for a free expansion (row 1).
- Quiz 3: 280 × 4 = 1120 K ✓; 70 K = 280/4 ✓; 2240 = 280 × 8 (not in calcs, row 14); 280 K wrong ✓.
- Quiz 4: 2.725 × 500 = 1362.5 → 1360 K ✓; 2.725/500 = 0.00545 → 0.0055 ✓; 2.725 × 500² = 6.81 × 10⁵ ✓. Explanation true.
- Quiz 5: answer 0 right and matches L17 pp. 18–19; distractors wrong ✓.
- Flashcards 1–5: true. Flashcard 5's 1/a² is for atoms "that exchange no heat with anything", correctly conditional.

## Only earlier terms
- Used before introduction (Blocks 0–4 and the page itself checked): **black-body light / its peak / wavelength** (row 2; "wavelength" occurs once in passing in lesson 0.6 but is explained only in Block 5), **photon** (row 3), **γ** without a meaning (row 5).
- Forward references with a pointer, acceptable in a "towards" lesson: protons and neutrons fusing into nuclei (lesson 8.14; 4.4 already mentions nuclei and Block 8), redshift z (defined on the page in its own words, pointer to 5.13), the evidence for expansion (5.13, 8.11), decoupling (defined on the page), scale factor (defined on the page; also in 0.11 and 3.12).
- Entropy and "isentropic": lesson 4.9 (`entropy-and-the-second-law`) is planned and not in this checkout; its lesson-list title and §4 row cover entropy, so it counts as introduced. Assumption to confirm when 4.9 lands: that it says a slow change with no heat leaves the entropy unchanged (or gives ΔS = Q/T), which this page relies on.
- First law: lesson 4.8 is in the checkout (draft) and uses ΔU = Q + W with W done on the gas, W = −pΔV, U = (3/2)Nk_BT = (3/2)nRT and T V^(2/3) = constant: consistent with this page.
- Relative speed seen from a moving piston: lesson `relative-velocity` (Block 1, earlier) is not in this page's prerequisite chain. Consider adding it to `prerequisites` (info).
- Lesson numbers in cross-references checked against the course files: 0.6, 4.1 (pressure falls with height), 4.2, 4.3 (Boyle), 4.4, 4.6, 4.8, 4.9, 5.13, 7.2, 8.11, 8.14, 8.15 all correct.

## Coverage
- §4 row 4.10: "Towards the universe: an expanding gas cools", PhET none, leads to `8-286/temperature-and-decoupling`. Covered: adiabatic cooling, the monatomic adiabat, the universe's T ∝ 1/a, decoupling at 3000 K, the CMB. Old OpenStax sources in the row ignored as instructed.
- PhET: the plan lists none; the page uses `gas-properties` (already used by 4.3, 4.4, 4.8).
- Missing for clarity at VWO level: the free (Joule) expansion contrast of slide 23 (row 4); it matters because the page and quiz 2 lean on "quick" vs "slow".
- Consistency with Block 8: same numbers and wording as `cosmic-microwave-background` (4000 K half neutral, 3000 K, 380 000 years, 1100, T_then = (1 + z)T_now), `the-big-bang` (T ∝ 1/a, 9.98 × 10⁹ K/√t), `the-first-elements` (about a billion kelvin, about three minutes), `towards-the-universe-redshift` (1 + z as the growth factor). No contradiction found.

## Where this leads
- 8.286 Lecture 17 (`temperature-and-decoupling`): matches L17 pp. 17–19 (≈10¹⁰ K at 1 s, 3000 K decoupling); "using the same rule as here" is fair, since the decoupling estimate uses T ∝ 1/a.
- 8.286 Lecture 16 (`black-body-radiation`, `neutrinos-and-particle-counting`): u ∝ T⁴ and s ∝ T³ are Lecture 16; the site's Lecture 16 page also derives T ∝ 1/a from conserved entropy, so the "why" is true of the site page.
- 8.044 Lecture 6 (`first-law`): slides 21–23 derive T V^(γ−1) = c and show the slow piston expansion cooling the gas ✓.
- `towards: true` on the block's last lesson (lecture 10 of 10) ✓. Cosmology claims correct except the "small correction" (row 6).

## Licensing and AI terms
- No copied sentences found: compared with the 8.044 slides (terse equations and labels), L17 pp. 17–20, L5 pp. 5–6, Glenn and FIRAS; the page's sentences are its own. The FIRAS figure is quoted as a number only.
- Figures: two `<Plot>` graphs generated from formulas; no slide sketch reproduced.
- Worked examples and quizzes are original: the 8.044 slides have no numerical examples; Glenn has no worked numbers; the numbers differ from 4.8 (1 mol, 10 → 20 L, 189 K) and from 8.15 (1 + z = 5).
- MIT: no "All rights reserved", "Courtesy" or exclusion notice in the 8.044 L6 slides or the two transcripts.
- NASA: no insignia; "measured by NASA's COBE satellite" states a fact with a cited page, not "according to NASA". The Glenn page is cited by title.
- No ESO text, no Siyavula branding, no forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, publisher full texts) cited or used. PDG CC BY 4.0 noted in the reference.

## Notes
- Writer flags: (1) the 8.044 slides as main source are fine (MIT OCW is in §2.0). (2) 4.8 conventions verified against the 4.8 file now on disk; the 4.9 assumption is noted above. (3) The own steps (T V^(1/3), 1/a², v − 2u) are correct; v − 2u holds for an elastic bounce off a much heavier wall. (4) 13.8 billion: see Formulas. (5) 1.16 × 10⁹ K, within the 20% tolerance and correctly "about a billion". (6) The spray-can wording is correct; see rows 7, 11, 13 for other bullets. (7) The quiz gives 3000 K and flashcard 4 gives 380 000 years without attribution; both are standard values, fine. (8) See row 6. (10) calcs `t-cmb` has `origin: later-data` while the calcs header and calcs/values.yaml call 2.725 K the Guth 2013 value; harmless, but pick one.
- PhET "Try it" checked in the sim code: the Explore screen's model has `leftWallDoesWork: true`; a particle hitting the left wall leaves with vx' = −(vx − u_wall), so a receding wall slows it (the sim subtracts the wall speed once, not twice, but qualitatively matches the page) and pushing in speeds it up. The screen "Explore", the pump and the thermometer exist. Inward wall motion is speed-limited in the sim, so "fast" pushes are capped; harmless.
- Uncertain: whether the thermometer visibly drops for a slow outward drag with few particles (the sim was not run in a browser).

## Resolution (2026-11-21, by the page author)

Lesson 4.8 (`first-law-of-thermodynamics`) and 4.9 (`entropy-and-the-second-law`) are now in the checkout and were read; the repetition with 4.8 was removed.

- Row 1 (error): quiz 2 now says the helium "in an insulated cylinder pushes a piston slowly outwards, with no heat flowing in or out"; the explanation adds that 400 K would only be right for a gas rushing into empty space. Quiz 3 likewise says "compressed by a piston" in an insulated cylinder instead of "squeezed quickly".
- Row 2 (error): no black body, peak or wavelength before their blocks. The stretched-light paragraph now says in plain words that light is stretched with the universe and carries less energy, like the glow of a cooler object, with pointers to lessons 5.13 (stretching, cosmological redshift) and 7.2 (colour of a glow and temperature). Plot 1 caption now says "light, whose temperature falls as one over the size of its container while the volume grows as the size cubed (see the next section)".
- Row 3 (error): "a typical photon" replaced by "typical light never scattered again (the tiny bits of light, photons, come in lesson 7.2)"; quiz 5 explanation says "typical light" and "That light". "Microwaves" gets a pointer to lesson 5.8.
- Row 4: new paragraph in "Why an expanding gas cools": "quick" means quick compared with heat leaking through the walls, yet slow compared with the molecules so the gas keeps pushing on the piston; a gas that rushes into an empty space does no work and an ideal gas keeps its temperature (8.044 L6 slide 23). Added to the molecules' view, flashcard 1 and the summary; leadsTo for 8.044 mentions it. "Try it fast and slow" replaced.
- Row 5: γ removed from the page (the rule is quoted from lesson 4.8 as T V^(2/3) = constant; air is described as following the same kind of rule with the power 0.4, NASA Glenn). Its page-scoped meaning was removed from data/symbols.json; calcs `gamma-minus-one` and `gamma-air` removed.
- Row 6: the callout now says Guth uses T ∝ 1/a "for every stretch of time in which the kinds of particle in the hot gas stay the same, and works out separately what happens when one kind disappears"; no "small". The universe section adds the same condition.
- Row 7: the clouds bullet is gone (row 10); the intro refers to 4.8's rising-air cloud, where the reason given is the bubble's size.
- Row 8: "that average sets the temperature" (also in the summary).
- Row 9: reading2 location now "p. 5: … stretched with the scale factor …; p. 6: … 1 + z"; the formula's `at` says "reading2 pp. 5–6".
- Row 10: the first section is now a short recap citing lesson 4.8 (one formula, Q = 0 ⇒ ΔU = W; U = (3/2)N k_B T quoted inline from 4.8); the formulas ΔU = Q + W, W = −pΔV and U = (3/2)N k_B T as displays, the derivation remarks about T V^(2/3) and the whole "Cooling in everyday life" list were removed; "How much colder?" now starts "Lesson 4.8 gave the rule". The isentropic remark now uses 4.9's ΔS = Q/T = 0 (meaning added for S, scoped to this page; the page-scoped meaning of p removed, as p no longer appears). Prerequisites: heat-and-specific-heat and phase-changes dropped, relative-velocity added (lesson 1.9 cited in the molecules' view).
- Row 11: the engines bullet was removed with the list.
- Row 12: moot, the W = −pΔV display is gone; the remaining formula cites slide 8 with đQ = 0 (slide 20) and slide 23.
- Row 13: the tyre-valve bullet was removed with the list (only mentioned in passing in the intro, as in 4.8).
- Row 14: calcs entry `quiz2-distractor-times-8` (280 × 8 = 2240) added; the quiz 3 explanation now names that slip.
- Notes (10): calcs `t-cmb` now has `origin: mit`, in line with calcs/values.yaml (Guth 2013 value), still cited to COBE FIRAS.
- Checks: `npx tsx scripts/check-content.ts` 0 errors; `pytest -k towards-the-universe-cooling tests/calc` 40 passed.

Status set to `reviewed`.
