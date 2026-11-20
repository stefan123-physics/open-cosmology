---
page: content/year-0/hs-3/conservation-of-energy.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-05 (read; CC BY 3.0 footer present, CCBY in docs/siyavula-licences.tsv line 303; no OpenStax or other third-party credit on the page; it embeds a PhET skate-park sim, not used from there)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-04 (read; CC BY 3.0 footer present, CCBY in docs/siyavula-licences.tsv line 302)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: PDF mit8_01scs22_chapter14.pdf downloaded to a scratch folder outside the repo and extracted with pdftotext; no "rights reserved" or "courtesy" notice found)
  - MIT 8.286 Lecture 6 (not re-read from OCW; checked against this site's reviewed pages content/year-4/8.286/expanding-sphere.mdx (Lecture 6) and friedmann-equation.mdx (Lecture 7) and reviews/8.286/expanding-sphere.md)
  - Siyavula Grade 12 work-energy-and-power pages: deliberately NOT opened (OpenStax-credited examples in 5.3 and 5.4)
verdict: needs-changes
---

# Review: Conservation of energy (Lesson 3.4)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Formula "Thermal energy produced by sliding friction", `at` | MIT Sec. 14.7 (Eqs. (14.1)–(14.8) of that section) has W = W_c + W_nc, W_nc = ΔK + ΔU = ΔE_m and ΔE_system = ΔE_m − W_nc = 0, but no expression for the work of friction. The work of kinetic friction, W_f = −μ_k N Δx, is Sec. 14.2, Eq. (14.8) (and Eq. (14.9) for a longer path). Sec. 14.8 is qualitative and even says that, with the object alone as the system, "we cannot determine the exact changes in the energy of the system" without a further model. | `at="Sec. 14.8 (...), with the work of friction from Sec. 14.7"` | Change to "Sec. 14.8 (the kinetic energy lost to friction becomes thermal energy of the object and the surface), with the work of friction from Sec. 14.2, Eq. (14.8), W_f = −μ_k N Δx, and W_nc = ΔE_m from Sec. 14.7, Eq. (14.7)". Optionally add "(shared between the object and the surface)" after "thermal energy produced", which is what MIT's caveat is about. |
| 2 | warning | "Energy is conserved", last paragraph | MIT Sec. 14.1: "We shall just consider closed systems in which only energy can enter of leave the system" (a closed system exchanges energy but not matter); Sec. 14.5 adds "and no energy entering or leaving the system" as a separate condition. Siyavula 22.5 uses "closed system" in the sense of no energy exchange. | "A system that no energy enters or leaves is called **isolated** (Siyavula and MIT speak of a closed system)" | MIT's "closed system" is not the page's "isolated": energy may cross its boundary. Write "(Siyavula calls this a closed system; MIT's notes use 'closed system' for one that matter cannot leave, and add 'no energy entering or leaving' separately)", or simply drop MIT from the bracket. |
| 3 | warning | Cosmology callout and `leadsTo` 8.286 Lecture 6 `why` | In Lecture 6 Guth derives ä = −(4π/3)Gρ_i/a² from Newton's force law (shell/Gauss argument), then integrates it once to find the conserved quantity E, which, times m r_i², is the kinetic plus potential energy of a test particle on the edge. The Friedmann equation itself is Lecture 7 (site page friedmann-equation, lecture 7). | Callout: "Only gravity acts on it, so its kinetic energy plus its gravitational potential energy stays constant ... Writing that constant sum in terms of the expansion gives ... the equation for how the universe expands". `leadsTo`: "that one conservation law leads to the equation for the expansion of the universe". | The physics is right (energy of an edge particle is conserved), but Guth's route is force first, energy second, and the expansion equation in energy form is Lecture 7. Suggest "Guth finds that the kinetic plus potential energy of such a particle stays constant (Lecture 6); written in terms of the expansion, that constant sum becomes the Friedmann equation (Lecture 7)", and add a `leadsTo` entry for 8.286 Lecture 7 (friedmann-equation). The general-relativity hedge at the end of the callout is correct and suitably careful. |
| 4 | warning | Worked example "A spring launcher", (b) Check step | (own physics) With the launcher vertical, the ball rises 0.050 m inside the stroke against gravity, so it leaves at √(2(0.50 − 0.020·9.81·0.050)/0.020) = 7.00 m/s, not 7.07 m/s, and rises 2.50 m above the leaving point, 2.55 m above the release point. | "Lesson 1.7 gives the same height from the launch speed: h = v²/(2g) = 7.07²/(2 × 9.81) = 2.5 m. Two routes, one answer." | 7.07 m/s is the launch speed of the flat launcher of part (a), not of the vertical one. The check works only because 7.07²/(2g) = ½kx²/(mg) identically, so it is not an independent route. Either say "using the speed from part (a), which ignores the 0.050 m stroke" or drop this check and use a units check instead. The bracketed remark in (b) about the stroke is correct. |
| 5 | info | "Adding a spring" | MIT Sec. 14.2 defines a conservative force (work independent of path, Eq. (14.15)/(14.16)); the potential energy is defined in Sec. 14.3 (Eq. (14.4), ΔU_sys = −W_c) and Sec. 14.4. | "Forces with this property are called **conservative forces**, and for each of them a potential energy can be defined (MIT 8.01SC notes, Sec. 14.2)" | Cite "Secs. 14.2 and 14.3". |
| 6 | info | "Where friction's energy goes", second paragraph | The path dependence of friction's work is shown in MIT Sec. 14.2, Eqs. (14.8)–(14.9); Sec. 14.7 gives the general definition of a non-conservative force. | "(MIT 8.01SC notes, Sec. 14.7; lesson 3.1)" | Acceptable; "Secs. 14.2 and 14.7" would be more exact. |
| 7 | info | Flashcard "When is mechanical energy conserved?" | — | "When only gravity and springs ... do work ... Then ½mv_i² + mgh_i = ½mv_f² + mgh_f." | The equation omits the spring term the sentence just allowed. Add "(+ ½kx² on each side when a spring is involved)". |
| 8 | info | Opening of "Energy is conserved" | Siyavula 22.5's definition box: "Energy cannot be created or destroyed, but is merely changed from one form into another." | "energy cannot be created or destroyed. It can only change from one form into another, or pass from one object to another." | Standard wording of the law; acceptable as a short standard phrase. No change needed. |

## Formulas and citations
- **Mechanical energy**, `reading1`, "Mechanical energy (ESAHN), definition box": correct. Siyavula 22.4 writes E_M = E_P + E_K and E_M = mgh + ½mv² (unit J). The page's E_mech for E_M is a notation change, stated in `at`.
- **Conservation of mechanical energy** ΔE_k + ΔE_p = 0, `reading2`, "Sec. 14.5, Eq. (14.18)": correct, ΔE_m = ΔK_sys + ΔU_sys = 0. MIT's condition is "a closed system with only conservative internal forces, and no energy entering or leaving"; the page's "only gravity does work" for a single object, derived from the work–energy theorem, is the same physics at this level.
- **Mechanical energy at two points**, `mit` (Siyavula 22.5), "Using the law of conservation of energy (ESAHP), E_M1 = E_M2 written out as mgh + ½mv² on both sides": correct; the page shows E_P1 + E_K1 = E_P2 + E_K2 and mgh + ½mv² = mgh + ½mv². The page's claim that this is Eq. (14.25) of MIT Sec. 14.5.1 is correct ((K_f + U_f) = (K_i + U_i), with U_g = mgy from Eq. (14.22)).
- **Elastic potential energy** ½kx², `reading2`, "Sec. 14.4.2, Eq. (14.12)": correct, U_s(x) = ½kx² with U_s(0) ≡ 0.
- **Mechanical energy with a spring**, `reading2`, Eq. (14.18) with U_s of Sec. 14.4.2, "as in Example 14.3": correct; Example 14.3 has E_i = K_i + U_i = ½kx² (that example's Eq. (14.7)) and E_f = 2mgR + ½mv_top².
- **Work of non-conservative forces** W_nc = ΔE_k + ΔE_p = ΔE_mech, `reading2`, "Sec. 14.7, the section's Eqs. (14.6) and (14.7)": correct (equation numbers restart in Sec. 14.7: (14.6) W_nc = ΔK + ΔU, (14.7) W_nc = ΔE_m).
- **Thermal energy produced = F_f Δx**: see finding 1 (location of the friction work is Sec. 14.2, Eq. (14.8), not Sec. 14.7). The physics (total thermal energy in object + fixed surface equals F_f Δx) is standard and correct.
- Text claims checked: law of conservation of energy (Siyavula 22.5; MIT Sec. 14.1, Eq. (14.1)) supported; "the path does not matter" (Siyavula 22.5: "the path taken by the object can be ignored") supported; "mechanical energy is conserved" (Siyavula 22.5 definition box, "in the absence of dissipative forces (e.g. friction, air resistance)") supported; thermal energy as random molecular kinetic energy (MIT Sec. 14.8) supported; "irreversible" (MIT Sec. 14.7: "processes in which there is non-zero non-recoverable energy as irreversible processes") supported; chemical energy of muscles (MIT Sec. 14.8.1, Eqs. (14.1)–(14.2) of that subsection, a walking person) supported; fuel in an engine is the page's own standard example.
- Siyavula never mentions thermal energy, heat or sound (it only names friction and air resistance as dissipative); the page attributes those to MIT Sec. 14.8 and lesson 3.1, which is right.
- Notation follows the site: SI, g = 9.81 m/s², v, E_k, E_p (Siyavula uses g = 9.8 m·s⁻²; the page uses its own numbers, so no conflict).

## Arithmetic and answer checks
All recomputed independently in Python (g = 9.81 m/s²):
- Drone: E_k = ½·1.2·8.0² = 38.4 J; E_p = 1.2·9.81·25 = 294.3 J; sum 332.7 J; √(2·9.81·25) = 22.1 m/s, "about 22". Correct.
- Sledge: 3.0² + 2·9.81·12 = 244.44 m²/s², √ = 15.63 → 15.6 m/s; from rest 15.34 → 15.3 m/s; 3.0 + 15.3 = 18.3. Correct.
- Falling ball / plot: 0.40·9.81·6.0 = 23.54 → 23.5 J; at 3.0 m 11.77 → 11.8 J. Curves E_p = mgh, E_k = mg(6 − h), sum constant, crossing at h = 3 m: correct, and the caption says it is computed from the formulas.
- Swing: √(2·9.81·0.80) = 3.962 → 3.96 m/s; half speed ⇒ ¼ of E_k,max ⇒ ¾ of the height remains: 0.60 m; check √(2·9.81·0.20) = 1.981 → 1.98 m/s = 3.96/2. Correct.
- Spring launcher: ½·400·0.050² = 0.500 J; (a) √(2·0.50/0.020) = 7.07 → 7.1 m/s; (b) 0.50/(0.020·9.81) = 2.548 → 2.5 m above the release point. Correct; see finding 4 for the check step (vertical leaving speed 7.00 m/s, 2.50 m above the leaving point).
- Mass let go on a spring: −mgx + ½kx² = 0 ⇒ x = 2mg/k = 2·0.50·9.81/50 = 0.1962 m; mgx = ½kx² = 0.962 J; mg/k = 0.0981 → 0.098 m; overshoot to twice the equilibrium stretch and oscillation about it: correct physics.
- Playground slide: E_p = 25·9.81·2.5 = 613.1 J; E_k = ½·25·4.0² = 200 J; W_nc = −413.1 J; 413/613 = 0.674 ("roughly two thirds"); F_f = 413.1/4.0 = 103.3 → 103 N; frictionless speed √(2·9.81·2.5) = 7.00 m/s; 200 + 413 = 613. Correct. (The "average friction force" lumps any air resistance in with friction; fine at this level.)
- Quiz 1: 19.62 + 9.0 = 28.6 J, answer index 3 = "28.6 J". Distractors 9.0 (E_k only), 19.6 (E_p only), 10.6 (difference) all wrong. Correct.
- Quiz 2: answer index 2 "The speeds are equal": correct; other choices wrong; explanation true (normal force ⊥ motion, mass cancels).
- Quiz 3: x = √(2·2.25/800) = 0.0750 m, index 2. Distractors: 2·2.25/800 = 0.005625 (no root), √(2.25/800) = 0.0530 (½ dropped on one side), 0.15 m (wrong). Correct.
- Quiz 4: index 2 (thermal energy) correct; others wrong; explanation true.
- Quiz 5: 0.060·9.81·0.60 = 0.353 → 0.35 J, index 1; 0.060·9.81·2.0 = 1.18 → 1.2 J; 0.060·9.81·1.4 = 0.824 → 0.82 J; loss 30%. Correct.
- Flashcards: all true (finding 7 is a completeness note).
- Calcs file: every number on the page has an entry (42 entries); `.venv/bin/python -m pytest tests/calc -k conservation-of-energy` → 42 passed. Minor: entry `hang-rest` cites "Sec. 14.4.2, Eq. (14.8) (Hooke's law)", but Eq. (14.8) of Sec. 14.4.2 is the spring's work integral; Hooke's law F = −kx is written unnumbered just before it (info).

## Only earlier terms
- Prerequisites 3.1 `work`, 3.2 `kinetic-energy`, 2.7 `springs-and-hookes-law`, 2.6 `friction-and-drag` and 1.7 `free-fall` exist and are `status: reviewed`. **3.3 `gravitational-potential-energy` exists but is `status: draft` with no review file** in reviews/hs-3/. This page leans on it for E_p, the zero level, E_el = ½kx² and the hanging-mass remark ("Lesson 3.3 left one picture open", which matches 3.3's closing sentence "Lesson 3.4 puts the two together"); review 3.3 before or with this page.
- Lesson references checked: work–energy theorem (3.2) ✓; work by gravity = −ΔE_p (3.3, "When the object falls") ✓; perpendicular force does no work (3.1) ✓; friction work grows with path length (3.1, "Work against friction") ✓; kinetic friction F_f (2.6) ✓; k in N/m and mg/k at rest (2.7, "A mass hanging at rest") ✓; mass-independence of free fall and h = v²/(2g) (1.7) ✓; circular motion and tension (1.10, 2.5) ✓; E_k ∝ v² (3.2) ✓.
- Introduced on this page and explained there: mechanical energy, isolated system, thermal energy, chemical energy, conservative / non-conservative force, irreversible, W_nc.
- **molecules** (info/warning-level): "random jiggling of the molecules" is the first use of "molecule" in Blocks 0–3 (lesson 2.6 speaks only of atoms); kinetic theory is lesson 4.4. Explained in passing well enough to follow; a bracket "(the tiny particles a substance is made of, Block 4)" would close the gap.
- Callout only: "Newtonian picture", "general relativity", "Einstein" are used as signposts to later courses, which is acceptable in a cosmology callout. Lessons 3.11 and 3.12 are forward references, correctly worded as such.

## Coverage
- §4 row 3.4 (topic "Conservation of energy", PhET energy-skate-park-basics, leads to `8-01/energy-conservation`; the OpenStax sources named there are ignored as instructed) is covered: law of conservation of energy, mechanical energy, conservation with gravity and springs, path independence, pendulum, friction to thermal energy, W_nc = ΔE_mech, positive non-conservative work from chemical energy. At VWO level this matches the energy-conservation part of the syllabus topics (E_kin, E_z, spring energy, W_w = F_w·s turned into heat).
- Not covered here: efficiency (rendement) and power, which belong to lesson 3.5 `power`; energy-flow/transfer diagrams (Sankey style), which are often used at VWO but not required here; −GMm/r energy (lesson 3.11). None of these gaps matters for this lesson.
- Siyavula 22.5's roller coaster and loop-type problems are not reproduced; the opening paragraph uses a roller coaster qualitatively only. Fine.

## Where this leads
- `8.01` Lecture 24 → content/year-1/8.01/energy-conservation.mdx exists (lecture 24, "Mechanical energy and energy conservation"; W_nc = ΔK + ΔU, friction as heat, circular motion with energy). The `why` is accurate.
- `8.286` Lecture 6 → content/year-4/8.286/expanding-sphere.mdx exists; topic matches (conserved E of the edge particle). See finding 3: the Friedmann equation is Lecture 7; consider adding it.
- `towards: false` is right: 3.4 is not the block's last lesson (3.12 is the "Towards the universe" lesson).
- PhET: frontmatter `phet: energy-skate-park-basics` and `<PhET title="Energy Skate Park: Basics" />`, the same pattern as reviewed lessons 2.6 and 2.7. The pinned file energy-skate-park-basics_1.6.2_en.html is in public/phet/ and in manifest.json. The "Try it" text matches the sim's Intro (bar graph, pie chart), Friction (thermal energy) and Playground/track screens, as far as I know the sim (not opened in this session).

## Licensing and AI terms
- No sentence copied from Siyavula or MIT beyond the standard wording of the law (finding 8). Formula `at` texts paraphrase.
- Worked examples and quiz items are the page's own: compared with Siyavula 22.4 Worked example 6 (0.15 kg ball, 20 J, 2 m), 22.5 suitcase (1 kg, 2 m), Worked examples 7–10 (tree trunk 100 kg/5 m, pendulum 2 kg/0.5 m, roller coaster 850 kg/50 m/20 m, bottle on a 100 m slope), Exercise 22.3 (tennis ball 5 m, 15 m hill, 50 g bullet at 200 m/s, 50 kg skier 6.4 m, 1.5 kg pendulum 4 m/s) and MIT Examples 14.1–14.6 (energy diagram, Toro, spring-block loop, mass-spring rough surface, cart-spring incline, sliding on sphere). None is reused; the swing and launcher are different situations and questions.
- Only figure: a `<Plot>` generated from formulas. No copied figures.
- No Siyavula logo, brand or "Everything Science"; Siyavula is named only as a section citation. Both Siyavula pages carry the CC BY footer.
- MIT Ch. 14 has no "rights reserved" or "courtesy" notice. (Its footnote to the Feynman Lectures is not used by the page.)
- No NASA or ESO material. No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used; no em dashes on the page.

## Notes
- `npm run content:check` and the build were not run (7 GB RAM machine, as instructed); symbol entries for E_mech, E_el, W_nc and v_i/v_f on this page were not checked.
- Siyavula 22.5 contains slips (bottle's initial speed 9.8 m/s, 5 800 vs 5 880 J, a 120 "kg" tennis ball); the page repeats none of them.
- The only error is the citation location of finding 1; once it, finding 2 and finding 4 are fixed, the page should pass.

## Resolution (2026-11-20, by the page author)
1. Formula "Thermal energy produced by sliding friction": `at` now cites Sec. 14.8 (thermal energy of the object and the surface), the work of friction from Sec. 14.2, Eq. (14.8), W_f = −μ_k N Δx, and W_nc = ΔE_m from Sec. 14.7, Eq. (14.7). The text before it now says the thermal energy is "shared between the object and the surface".
2. The bracket now reads: Siyavula calls this a closed system; MIT's notes use "closed system" for one that matter cannot leave, and add "no energy entering or leaving" separately.
3. Callout reworded: Guth first finds the motion from Newton's law of gravity, then the conserved kinetic plus potential energy (Lecture 6); written in terms of the expansion it becomes the Friedmann equation (Lecture 7). The Lecture 6 `leadsTo` `why` now says only what Lecture 6 does, and a new `leadsTo` entry for 8.286 Lecture 7 (friedmann-equation) was added.
4. The launcher's Check step no longer repeats the calculation with part (a)'s 7.07 m/s; it is now a units check plus a remark that a heavier ball rises less. Calcs entry `launcher-check` removed.
5. Now cites "Secs. 14.2 and 14.3".
6. Now cites "Secs. 14.2 and 14.7".
7. Flashcard now adds "(+ ½kx² on each side when a spring is involved)".
8. No change needed (standard wording of the law).
Other notes: calcs entry `hang-rest` now cites Hooke's law as written just before Eq. (14.8) of Sec. 14.4.2, not Eq. (14.8) itself; "molecules" is now explained on first use ("the tiny particles a substance is made of (Block 4)"); prerequisite 3.3 `gravitational-potential-energy` has since been reviewed. Checks: calc tests 41 passed; content:check shows no error or warning for this page.
