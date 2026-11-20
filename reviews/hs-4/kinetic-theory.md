---
page: content/year-0/hs-4/kinetic-theory.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-01 (read in full; CC BY footer; CCBY row in docs/siyavula-licences.tsv line 440; no OpenStax material)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read: Sec. 3.2 ESAAL and Table 3.1; CC BY footer; CCBY row line 351)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-02 (read: "Change in momentum (ESCJ9)", Cases 1–5; CC BY footer; CCBY row line 513)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l13/ (read: PDF, 24 slides, text per slide; no exclusion notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/e440871d22237607e37482b227e22643_canonical_ensem.pdf (read: handwritten; printed p. 9 is PDF page 8, rendered and read; point ⑥ verified; agrees with the reviewed citation in content/year-4/8.08/information-equipartition-ideal-gas.mdx)
  - https://www.grc.nasa.gov/www/k-12/airplane/kinth.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read: effective temperature 5772 K; escape velocity 617.6 km/s)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read: 78.08% N₂, 20.95% O₂; escape velocity 11.186 km/s)
  - public/phet/gas-properties_1.1.12_en.html (string table read: screens Ideal, Explore, Energy, Diffusion; Average Speed; Speed and Kinetic Energy histograms; Heavy, Light; Injection Temperature)
  - Earlier lessons on disk: 0.8, 0.9, 0.10, 0.11, 2.4, 3.2, 3.6, 3.11, 4.1, 4.2, 4.3; later lessons that rely on this one: 7.2 thermal-radiation-and-photons, 8.4 fission-and-fusion, 8.7 particles-and-forces, the-big-bang; content/year-3/8.044/canonical-examples.mdx for leadsTo
verdict: needs-changes
---

# Review: Kinetic theory: temperature is motion (4.4)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Cosmology callout, last sentence | (physics) The mean kinetic energy is (3/2)k_BT for particles much slower than light; for particles moving at nearly the speed of light it is about 3k_BT. Lesson 8.7 (particles-and-forces) already says "That rule is for particles much slower than light" | "(for particles slower than light; for faster ones it still gives the right size)" | Read literally, "faster ones" means faster than light. Write "(for particles much slower than light; for particles moving at nearly the speed of light the average energy is about 3k_BT, the same size)" or simply "(for particles much slower than light; for very fast ones it still gives the right size)". |
| 2 | warning | Formula "Pressure of a gas from molecular impacts", `cite="reading2" at="slides 5 and 8 …"` | Slide 5: ⟨p²⟩ = 3mkT, ⟨H₁⟩ = 3/2 kT (canonical ensemble); slide 8: P = NkT/V. No box or impact argument anywhere in L13 | p = Nm⟨v²⟩/(3V), derived on the page from wall impacts | The `at` honestly says the formula is the two slides "together", and the algebra is right. But the page then uses this formula with pV = Nk_BT to *derive* (3/2)k_BT, which is the very slide-5 result it was built from: the citation is circular and the derivation shown has no source. Make the box derivation the page's own (its steps rest on `momentum`, ESCJ9, and `nasakinetic`, which says the molecules "impart momentum to the walls, producing a force"), and put the slides in a remark: e.g. `cite="nasakinetic" at="molecules impart momentum to the walls; the formula is this page's own step"` plus a sentence "The university course reaches the same formula another way: slide 5's ⟨p²⟩ = 3mkT with slide 8's P = NkT/V." |
| 3 | warning | Formula "Momentum given to the wall in one hit", `at` text | Siyavula ESCJ9 Case 1 gives Δp⃗ = p⃗_f − p⃗_i for a ball bouncing off a wall, with "a different velocity" v⃗_f; it never writes −2mv | `at="… Case 1: object bouncing off a wall, Δp = −2mv for the ball"` | The location exists and supports Δp = p_f − p_i, but "Δp = −2mv" is the page's own step (v_f = −v_i). Write `at="… Case 1: object bouncing off a wall, Δp = p_f − p_i; with p_f = −p_i this is −2mv (this page's step)"`. |
| 4 | warning | Same formula, `tex="\Delta(mv_x) = 2mv_x"` | — | label "Momentum given to the wall", tex Δ(mv_x) = 2mv_x | Read on its own, Δ(mv_x) is the molecule's change, which is −2mv_x (as the sentence before says). Name the wall: `\Delta p_{\text{wall}} = 2mv_x` would clash with pressure p, so e.g. `\text{momentum to the wall} = 2mv_x` or `-\Delta(mv_x) = 2mv_x`. |
| 5 | warning | "A spread of speeds", first paragraph | Siyavula 7.1: "all particles have a different speed. However, this is only the case for a real gas. For an ideal gas we assume that all particles in the gas have the same speed." (also Exercise 7.1 table) | Cites "(Siyavula, Sec. 7.1: in a real gas each particle has a different speed)" and then gives the Maxwell distribution, which belongs to the ideal gas of this page | The page is right and Siyavula's simplification is wrong physics, but the page differs from its main source without saying so, and the citation frames the spread as a real-gas effect. Students who read Siyavula will meet the conflict. Drop that citation and add a short bracket: "(Some school books give every molecule of an ideal gas the same speed, to keep things simple; collisions in fact always spread the speeds out, ideal gas or not.)" |
| 6 | warning | "Hydrogen atoms at the surface of the Sun", step "Can it escape?" | Lesson 3.11 computes 11.2 km/s; Earth Fact Sheet (already in `references` as `earthfact`): escape velocity 11.186 km/s | "the 11.2 km/s needed to escape from the Earth (lesson 3.11)" | The citation is fine, but the number is not in calcs/hs-4/kinetic-theory.yaml. Add a `kind: fact` entry (value 11.2 km/s, `source: {cite: earthfact, at: 'Bulk parameters: escape velocity 11.186 km/s'}`, shown `'the $11.2\ \text{km/s}$ needed to escape from the Earth'`). Similarly the speed of sound 343 m/s and u = 1.66 × 10⁻²⁷ kg appear in calcs only as inputs; a `fact` entry each (343 m/s: lesson 5.5; u: NIST CODATA atomic mass constant) would complete the file. |
| 7 | warning | "Pressure from molecular impacts", step "Three directions" | Lesson 0.8 (vectors) uses Pythagoras for two perpendicular components only | "By Pythagoras in three dimensions, v² = v_x² + v_y² + v_z²" | Not introduced earlier. Add half a sentence: "(use Pythagoras twice: first for v_x and v_y, then for that result and v_z)". |
| 8 | info | "Temperature is average kinetic energy", first sentence | 4.3 continues after the per-molecule section with "When is a real gas ideal?" | "Lesson 4.3 ended with the ideal gas law written per molecule" | "Lesson 4.3 also wrote the ideal gas law per molecule". |
| 9 | info | Quiz 3 explanation | Newton's third law is lesson 2.4; 3.6 is momentum and impulse | "By Newton's third law the wall gets the opposite change, 2mv_x (lesson 3.6)" | "(lessons 2.4 and 3.6)". Same in the body sentence before the first formula. |
| 10 | info | "Try it" | The Gas Properties sim moves particles in a plane (2D) | "the histogram has the shape of the Maxwell distribution" | In 2D the speed distribution rises as v, not v², so the shape is similar, not the same (uncertain how far this shows at the sim's bin width). Optional: "a shape like the Maxwell distribution". |

## Formulas and citations
- Momentum to the wall: see rows 3 and 4. Physics correct.
- p = Nm⟨v²⟩/(3V): correct physics, standard kinetic-theory result; see row 2 for the citation. Calcs identity `pressure-from-impacts` checks it equals Nk_BT/V with ⟨v²⟩ = 3k_BT/m. ✓
- pV = Nk_BT, `reading2` slide 8: "P = … = NkT/V" ✓ (verified).
- E_k,avg = (3/2)k_BT, `reading2` slide 5 "< H₁ > = 3/2 kT" and slide 8 "E = F + TS = (3/2) NkT" ✓ (verified).
- v_rms = √(3k_BT/m), `reading2` slide 5 "< p² > = 3mkT" divided by m² ✓.
- f(v) ∝ v² e^(−mv²/2k_BT), `reading3` p. 9 point ⑥: "Prob. to find v between v and v + dv: C̃ e^(−βmv²/2) v² dv", labelled "Maxwell distribution" (verified on the page image; printed p. 9 = PDF page 8). The same page has "for a mixture of particles of mass m and m′" with equal mean kinetic energy per component, which would also support "The mass does not appear" if a citation is wanted. ✓
- Peak at √(2k_BT/m) = 0.82 v_rms and the normalising factor 4π(m/2πk_BT)^(3/2): the page's own steps, marked so in calcs (`peak-of-maxwell`, `maxwell-normalised`). Correct.
- Siyavula 7.1 assumptions list: matches the page's five bullets (particles; small compared with the distances; constant straight-line motion at different speeds; weak attractive forces; collisions do not change the kinetic energy). "Random directions" is the page's addition, standard. ✓ "Temperature" definition (average kinetic energy) ✓. Real-gas behaviour ✓.
- Siyavula Gr 10 3.2 (`reading1`): particles move at speeds that depend on the temperature; Table 3.1, solids "vibrate around a fixed point". ✓ "In a liquid they slide past each other" is not in the table's wording but agrees with the copper example ("more free to move"). Fine.
- NASA Glenn *Kinetic Theory of Gases*: molecules "impart momentum to the walls, producing a force"; "temperature … is a measure of the mean kinetic energy". ✓ It gives no formula.
- NASA Sun Fact Sheet 5772 K and 617.6 km/s ✓; Earth Fact Sheet 78.08% N₂ ✓.
- All Siyavula pages cited are CCBY rows; none has OpenStax material or credits.

## Arithmetic and answer checks
Recomputed by hand and in Python; `npm run calc:test -- -k "ideal-gas-law or kinetic-theory"`: 78 passed.
- Box steps: F = 2mv_x/(2L/v_x) = mv_x²/L ✓; p = Nm⟨v_x²⟩/L³ ✓; ⟨v_x²⟩ = ⟨v²⟩/3 ✓; (1/3)m⟨v²⟩ = k_BT → (1/2)m⟨v²⟩ = (3/2)k_BT ✓.
- Air at 20 °C: 1.5 × 1.38 × 10⁻²³ × 293 = 6.07 × 10⁻²¹ J ✓; raindrop ½ × 10⁻⁴ × 1² = 5 × 10⁻⁵ J, ratio 8.2 × 10¹⁵ ("about 10¹⁶") ✓; N/V = 2.50 × 10²⁵ m⁻³ ✓; (3/2)pV = 1.52 × 10⁵ J ✓.
- Nitrogen: 28 × 1.66 × 10⁻²⁷ = 4.65 × 10⁻²⁶ kg ✓; 3k_BT/m = 2.61 × 10⁵ m²/s² ✓; v_rms = 511 m/s ✓; 511/343 = 1.49 ✓; "faster than a jet airliner" ✓.
- Hydrogen: 3.32 × 10⁻²⁷ kg ✓; v_rms = 1911 m/s ✓; √14 = 3.742 ✓; 3.74 × 511 = 1911 ✓.
- Sun: 3 × 1.38 × 10⁻²³ × 5772/1.67 × 10⁻²⁷ = 1.43 × 10⁸ ✓; v_rms = 1.196 × 10⁴ m/s ✓.
- Maxwell: √(2/3) = 0.816 ✓; nitrogen peak √(2 × 1.38 × 10⁻²³ × 293/4.65 × 10⁻²⁶) = 417 m/s ✓. Plot: peak height 4/(√π e v_p) at T = 100 K is 3.41 per km/s, inside the range 0–3.6 ✓; at 1500 K only 0.3% of the area lies beyond 2500 m/s, so the domain shows the whole curve ✓.
- Quiz 0: (3/2)k_BT at 400 K = 8.28 × 10⁻²¹ J ✓; 5.52 × 10⁻²¹ = k_BT ✓; 1.66 × 10⁻²⁰ = 3k_BT ✓; the mass choice wrong ✓.
- Quiz 1: √(1200/300) = 2 ✓; others wrong ✓.
- Quiz 2: √(32/4) = 2.83 ✓; "8 times" and "same rms" wrong, "oxygen larger energy" wrong ✓.
- Quiz 3: answer 1 ✓; "hits the wall twice", "the wall moves", "because KE is ½mv²" wrong ✓.
- Quiz 4: answer 0 ✓ (peak to higher speeds, lower and wider, area fixed); "taller", "same speed", "only slowest" wrong ✓.
- Flashcards: all true.

## Only earlier terms
- Pressure p = F/A (4.1); kelvin and thermal equilibrium (4.2); pV = Nk_BT and k_B (4.3); kinetic energy (3.2); momentum change for a bounce and F = Δp/Δt (3.6, whose football example bounces off a wall); Newton's third law (2.4, via 3.6/3.7); components v_x (0.8); exponentials (0.9); area under a graph (0.10); escape speed 11.2 km/s (3.11): all earlier, checked on disk.
- Defined on the page: ⟨ ⟩ average, rms speed, atomic mass unit u, Maxwell distribution, kinetic theory, ideal gas.
- Pythagoras in three dimensions: see row 7.
- Forward pointers only: speed of sound 343 m/s (5.5, value given), 4.6 evaporation, 4.10, Block 8. Fine.

## Coverage
- §4 row 4.4 ("Kinetic theory: temperature is motion", gas-properties): kinetic model, pressure from impacts, E_k,avg = (3/2)k_BT, rms speed, Maxwell spread. Complete at VWO level; the Maxwell distribution and the box derivation go a little beyond the VWO syllabus, which is appropriate for a course aiming at university.
- Later lessons that rely on this page need E_k,avg = (3/2)k_BT with k_B: it is stated as a boxed formula, a key callout, flashcard and summary bullet, with k_B = 1.38 × 10⁻²³ J/K. 8.4 (fission-and-fusion, (3/2)k_BT = U), 8.7 (particles-and-forces, "much slower than light"), 7.2 (atoms jiggle faster when hotter) and the-big-bang are all supported. Row 1 brings the callout in line with 8.7.
- Consistency with 4.3 (written in parallel): same constants and number density, same real-gas conditions; rows 8 and 9 are wording only. Consistent with 4.2 ("temperature … proportional to the average kinetic energy (lesson 4.4)").

## Where this leads
- `leadsTo` 8.044 lecture 13: `content/year-3/8.044/canonical-examples.mdx` (lecture 13) derives ⟨p²⟩ = 3mkT, ⟨H₁⟩ = (3/2)kT, P = NkT/V and E = (3/2)NkT from the canonical ensemble. The "why" is accurate. ✓ Optional second target: 8.08 Chapter I (information-equipartition-ideal-gas), the source of the Maxwell formula.
- `towards: false` is right (4.10 is the block's last lesson). The callout titled "Towards the universe: …" in a non-final lesson follows the block's own practice (4.1 and 4.6 do the same). Its claims: hot early universe, molecules then atoms then nuclei broken apart as the temperature rises (nuclei at "billions of kelvin", consistent with lesson 8.4's 3.4 × 10⁹ K), expansion cools the gas: correct, apart from row 1.

## Licensing and AI terms
- No copied sentences: the assumption list is reworded from Siyavula 7.1, not copied.
- Worked examples and quiz questions are the page's own (Siyavula 7.1 has no worked examples; its Exercise 7.1 is a real/ideal table).
- No figures copied: the Maxwell graph is generated from the formula. Wen's hand sketch of P(v) is not reproduced.
- "Everything Science" appears only inside the citation titles of `source` and `readings` (as on 21 other High School pages), not as branding; no logo. Info: 4.3 writes the same source without the series name; either is fine, but the two lessons could match.
- MIT: no "excluded from our Creative Commons license" or "All rights reserved" notice on the L13 resource page; the 8.08 notes were already cleared in the 8.08 review. NASA cited by page title, no insignia, no "according to NASA" phrasing. No ESO text. No forbidden source.

## Notes
- PhET "Try it": "Energy" screen ✓; Average Speed and the Speed histogram ✓; Heavy and Light particles ✓ (injection temperature lets them enter at the same temperature). See row 10.
- Further uncited but standard claims, all correct: collisions "billions of times a second"; hydrogen lost from the upper atmosphere through the fast tail; evaporation below the boiling point; extra energy in rotation and vibration of molecules (8.044 polyatomic-gases covers it). Fine without citation at this level.
- No em dashes; units are inside the maths throughout.
- `npm run content:check` reports nothing for this page except the missing review file (its 2 errors are in phase-changes.mdx, another page).

## Resolution (2026-11-20, by the page author)

1. Fixed. Callout now reads "(for particles much slower than light; for particles moving at nearly the speed of light the average energy is about 3k_BT, the same size)", in line with lesson 8.7 particles-and-forces.
2. Fixed. The box derivation is now the page's own: the formula p = Nm⟨v²⟩/(3V) cites nasakinetic with at "the box derivation and formula are this page's own steps", and a new sentence says the derivation rests on Siyavula Grade 12 Sec. 2.2 (momentum change of a bounce) and NASA Glenn, and that "the university course reaches the same formula another way": 8.044 slide 5 (⟨p²⟩ = 3mk_BT) with slide 8 (p = Nk_BT/V). Calcs pressure-from-impacts source changed to nasakinetic, origin page-own.
3. Fixed. at text: "Δp = p_f − p_i; with p_f = −p_i this is −2mv (this page's step)".
4. Fixed. Formula tex is now −Δ(mv_x) = 2mv_x, with a sentence before it saying the momentum given to the wall is minus the molecule's change. Calcs identity wall-momentum added.
5. Fixed. The Siyavula 7.1 citation for "each particle has a different speed" is dropped; a bracket now says some school books give every molecule of an ideal gas the same speed to keep things simple, while collisions always spread the speeds out, ideal gas or not.
6. Fixed. Calcs fact earth-escape (11.2 km/s, earthfact, Bulk parameters: escape velocity 11.186 km/s) added, and earthfact's location now names it. Also added: reference nist-u (NIST unified atomic mass unit, 1.660 539 068 92 × 10⁻²⁷ kg, fetched 2026-11-20), "(NIST)" after 1 u = 1.66 × 10⁻²⁷ kg, and calcs fact atomic-mass-unit. The speed of sound 343 m/s stays an input only (it is a forward pointer to lesson 5.5, which has no reference on this page).
7. Fixed. "(use Pythagoras twice: first for v_x and v_y, then for that result and v_z)" added.
8. Fixed. "Lesson 4.3 also wrote the ideal gas law per molecule".
9. Fixed. Quiz 3 explanation and the body sentence now say "(lessons 2.4 and 3.6)"; newtons-third-law (lesson 2.4) added to prerequisites.
10. Fixed. "Try it" now says the histogram has a shape like the Maxwell distribution, close to but not exactly the three-dimensional one because the simulation's box is flat.
The statement E_k,avg = (3/2) k_B T with k_B = 1.38 × 10⁻²³ J/K is unchanged.

Checks: npm run calc:test -- -k "ideal-gas-law or kinetic-theory": 84 passed. npm run content:check: 0 error(s); no error or warning for this page. Status set to reviewed.
