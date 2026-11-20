---
page: content/year-0/hs-2/weight-normal-and-tension.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read; CC BY footer present, listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read; CC BY footer, CCBY in the tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read; CC BY footer, CCBY in the tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read: PDF downloaded to a scratch folder and extracted; no "rights reserved" or "courtesy" notice)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read)
  - https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/ (read)
verdict: needs-changes
---

# Review: Weight, normal force and tension

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | `<Formula label="Acceleration of two masses over a pulley">`, `cite="mit"`, `at="Sec. 2.3, Worked example 10 …"` | Siyavula 2.3 Worked example 10 is two crates (10 kg and 15 kg) on a horizontal surface joined by a rope, pulled by 500 N, with friction. There is no pulley and no hanging mass; the word "pulley" does not occur on 2.2, 2.3 or 2.4. The method (same acceleration and same tension in both crates) is there; the formula a = (m₁ − m₂)g/(m₁ + m₂) is not. | Cites WE10 for the hanging-mass pulley formula | Cite reading2, Example 8.9, Eqs. (8.6.52) to (8.6.54) (the second law m g − T = m a for each hanging block, with the same tension on both sides of a light, frictionless pulley), and say in the `at` that the two-mass result is derived on this page. Optionally keep WE10 as the source for the "same a, same T" method in the prose. Update the `source.at` of calcs entries `atw-*` and `q4-*` to match. |
| 2 | error | Cosmology callout, "(reading 2, Sec. 8.2.2)" | MIT Sec. 8.2.2 says only that the mass in the law of gravitation equals the inertial mass ("the equivalence of inertial and gravitational mass will be assumed"). It says nothing about free fall being indistinguishable from no gravity, Einstein or general relativity. | "He proposed that, in a small enough region, free fall in a gravitational field cannot be told apart from floating with no gravity, an idea called the principle of equivalence (reading 2, Sec. 8.2.2)." | The physics is correct, but the citation does not support it. Either reword so the cited part is what 8.2.2 says ("gravitational mass equals inertial mass, so everything falls with the same acceleration; that is why everything in a falling lift floats together") and present Einstein's step as the standard history it is, without the citation, or find a §2.0 source (a NASA page) that states Einstein's form. |
| 3 | error | Worked example "Pulling a suitcase on wheels", step 1 | (Own example.) | "Four forces act: the weight …, the normal force $F_N$ up, and the pull $F_A$ = 60 N at 30°." Only three forces are listed, and with friction ignored there are three. | "Three forces act: …". |
| 4 | error | `calcs/hs-2/weight-normal-and-tension.yaml`: `g-moon`, `iss-fraction` (and the Moon half of `fc-g`, `sum-g`) | NASA Moon Fact Sheet and NASA "What Is Microgravity?" are not MIT and not the main source. docs/CALC_TESTS_PLAN.md: `origin` is `mit` / `page-own` / `later-data` / `slip`; the sibling lessons 2.2 to 2.4 already mark NASA and NIST values `later-data`. | `origin: mit` | Set `origin: later-data` for `g-moon` and `iss-fraction` (keep `source: {cite: moon / microgravity, at: …}`). `fc-g` and `sum-g` record only 9.81; either add the 1.62 there as a `later-data` fact or narrow their `shown` strings. |
| 5 | warning | "Tension in a string", first paragraph: "it pulls along its own length … (reading 1, Tension)" | Siyavula 2.2 "Tension" says only that tension is the size of the force in ropes, chains and struts that give support (example: a swing). It does not say a rope pulls only along itself or on both ends. | Cites reading 1 for the whole definition | Add reading 2, Sec. 8.5.1 (and lesson 2.1, which already says a rope pulls along its own length), or narrow the reading-1 citation to the word "tension". |
| 6 | warning | "Then the tension is the same all along the string … (reading 2, Sec. 8.5.1, Eq. (8.5.3))" | The massless-rope argument is Eq. (8.5.1), $F_{A,2} − F_{1,2} = m_2 a = 0$; Eq. (8.5.3) is the chain $F_{A,2} = F_{1,2} = F_{2,1} = f$ for a rope at rest or at constant speed, using the third law and friction. | Cites (8.5.3) for the "almost no mass, so equal pulls" argument | Cite Eq. (8.5.1) (and (8.5.3) for "passes the pull on"). Same change in calcs `lamp`, `lamp-T`, `q3-T`. |
| 7 | info | `<Formula label="Scale reading in an accelerating lift">`, `cite="mit"` | Siyavula 2.3 "Lifts and rockets" writes $T − F_g = m a$ for the cable on the lift; "Apparent weight" explains the normal force in words with no formula. | $F_N = m(g + a)$ | Acceptable: the `at` says it is from the lift equations, and the derivation is on the page. Could add "(applied to the person on the scales)" to the `at`. |
| 8 | info | Normal force symbol | Siyavula 2.2 writes the normal force $\vec N$; MIT writes $N$. | $\vec F_N$ | Consistent with lesson 2.1 ($F_g$, $F_N$, $F_A$, $F_f$) and 2.3 ($F_{\text{net}}$), which is what matters. No change needed. |
| 9 | info | "Apparent weight in a lift", bullets: "You feel pressed into the floor." / "You feel light on your feet." | Siyavula 2.3: "you feel you are pressed into the floor"; "you feel lighter on your feet". | Near-identical short phrases | Short everyday phrases, not a licensing problem (CC BY); could be reworded for originality. |
| 10 | info | Plot of scale reading | (Own graph.) | `range={[0, 1000]}` with the mass slider up to 100 kg | At m > 72 kg the line leaves the top of the graph near a = 4 m/s² (100 × 13.81 = 1381 N). Raise the range to 1400 or cap the slider at 70 kg. |

## Formulas and citations
- $F_g = m g$, $g = F_g/m$, cite reading3 (Siyavula 2.4, "Weight and mass"): supported ("You can use $\vec F_g = m\vec g$ to calculate weight"). The rearranged form is the page's own; "field strength in N/kg" is also supported by MIT Sec. 8.2.3 ("the strength of the gravitational force on the standard kilogram … 9.80345 N·kg⁻¹") and was already introduced in lesson 2.1.
- $F_N = m g$, cite reading2, Sec. 8.3.1, Example 8.2, Eq. (8.3.4): verified exactly ("N = mg . (8.3.4)"). The claim that MIT warns that the normal force is not always $m g$ and that the two forces are "two completely different forces" is verified (Example 8.2, page 8-13). The "jump: you feel weightless … you do not turn gravity off" claim is verified (Example 8.2).
- Origin of the normal force (atoms pressed together, electrons repel), reading 2 Sec. 8.3.1: verified.
- Normal force perpendicular to the surface, reading 1 "The normal force": verified ("the normal force is always perpendicular (at a right angle) to the surface").
- Apparent weight (reading 3 and the main source): Siyavula 2.3 "Apparent weight" and 2.4 "Weight and mass" support the account, including "Weightlessness is not because there is no gravitational force", the free-falling lift and astronauts falling "in a circle around the earth".
- Same tension on both sides of a light, frictionless pulley, reading 2 Example 8.9: verified ("Because the string is assumed to be massless and the pulley is assumed to be massless and frictionless, the tension $T_A$ in the string is uniform"); pulley pulled by both sides of string B, Fig. 8.41(d): verified (cited in calcs `sack-support`).
- Cart and hanging block, reading 2 Example 8.8: verified (a cart on a horizontal track pulled over a pulley by a falling block; MIT includes kinetic friction, the page drops it with its own numbers).
- Atwood formula: see row 1. Equivalence principle: see row 2.
- NASA Moon Fact Sheet: surface gravity 1.62 m/s², verified. NASA "What Is Microgravity?": "At that altitude, Earth's gravity is about 90 percent of what it is on the planet's surface" and "they are in free fall … falling toward but around Earth", verified. Cited by title, no insignia, no "according to NASA".
- No forbidden source cited or referred to; the OpenStax entries of the §4 row are not used.

## Arithmetic and answer checks
Every number recomputed independently; all correct:
- 12 × 9.81 = 117.7 ≈ 118 N; 12 × 1.62 = 19.44 ≈ 19.4 N.
- Crate: 6.0 × 9.81 = 58.86 ≈ 58.9 N; +25 = 83.9; −25 = 33.9.
- Suitcase: 147.15 ≈ 147 N; 60 sin 30° = 30; 60 cos 30° = 51.96 ≈ 52.0; $F_N$ = 117.15 ≈ 117 N; a = 51.96/15 = 3.464 ≈ 3.46 m/s²; 147.15/0.5 = 294.3 ≈ 294 N. Vector diagram at 50 N per square: 147/50 = 2.94, 117/50 = 2.34, (60/50)(cos 30°, sin 30°) = (1.04, 0.60). Correct.
- Lift: 539.6 ≈ 540 N; 55 × 11.61 = 638.6 ≈ 639 N → 65.09 ≈ 65.1 kg; 55 × 8.01 = 440.55 N → 44.91 ≈ 44.9 kg; 99 N; 99/9.81 = 10.09 ≈ 10.1 kg.
- ISS: 0.9 × 70 × 9.81 = 618 ≈ 620 N.
- Lamp 24.525 ≈ 24.5 N; sack 196.2 ≈ 196 N, support 392.4 ≈ 392 N.
- Two masses: a = 9.81/5 = 1.962 ≈ 1.96 m/s²; T = 2.0 × 11.772 = 23.54 ≈ 23.5 N; check 3.0 × 7.848 = 23.54; v = 2.94 m/s; weights 19.62 and 29.43 N. Limits (equal masses, m₂ → 0) correct.
- Cart: a = 4.905/2.0 = 2.4525 ≈ 2.45 m/s²; T = 3.679 ≈ 3.68 N; $F_N$ = 14.715 ≈ 14.7 N; check 0.50 × 7.3575 = 3.68; 4.905 ≈ 4.91 N.
- Quiz 1: index 2 correct (upward motion slowing → acceleration down → $F_N < m g$; zero only if the deceleration were g). Explanation true.
- Quiz 2: 78.48 + 30 = 108.5 ≈ 108 N, index 3 correct; distractors 48 (subtracting), 78 (no push), 30 (push only) are wrong.
- Quiz 3: 39.24 ≈ 39.2 N, index 2 correct; 19.6 (half), 78.5 (support), 4.0 (mass as force) wrong. Explanation true (support 78.5 N, valid for a vertical pull, which the question states).
- Quiz 4: 29.43/5.0 = 5.886 ≈ 5.9 m/s², index 0 correct; 7.36 ≈ 7.4, 9.8 (g) and 29 wrong.
- Quiz 5: index 1 correct; explanation agrees with NASA and Siyavula 2.4.
- Flashcards: all true.
- Every number on the page is in the calcs file; `pytest tests/calc -k weight-normal`: 54 passed. Every entry has `source: {cite, at}`; the page-own examples say "(the numbers are the page's own)". Origins of the NASA facts: row 4. Citation locations of `atw-*`/`q4-*` and the tension entries: rows 1 and 6.

## Only earlier terms
- Weight, $F_g$, $F_N$, $F_A$, g in N/kg, contact forces, atoms and electrons pushing back, tension as a pull along a rope, free-body diagrams: lesson 2.1. Net force and the second law, the bucket on a rope ("Hauling up a bucket"), objects that move together: lesson 2.3. Third-law pairs: lesson 2.4. Components with sin and cos: lessons 0.7 and 0.8. $v_f = v_i + a\,\Delta t$: lesson 1.6. g as free-fall acceleration: lesson 1.7. Orbit (Moon's orbit): lesson 1.10. All introduced earlier and referenced correctly.
- New here and defined on the page: apparent weight, weightless, the symbol T, light string, pulley, counterweight, principle of equivalence, general relativity (callout).
- Forward references (lesson 2.8 slopes, lesson 2.9 orbital speed) are pointers only, not used. Both are planned in §4 (not written yet on this branch); fine.

## Coverage
- §4 row 2.5 (weight, normal force and tension) is covered at VWO level and beyond: field strength, normal force as a constraint force with pushes and pulls, rope at an angle, apparent weight, weightlessness and orbit, light string and pulley, two connected masses (hanging pair and table-plus-hanging).
- Not covered: an object hung from two strings at angles (equilibrium with tensions in two directions), a common VWO task. Info only if lesson 2.8 or 2.10 takes it up; otherwise worth a short example here, since another block relies on this lesson's tension in a string.
- Slopes are deferred to 2.8, as the plan intends.

## Where this leads
- `8.01` Lecture 6 → `contact-forces` (normal force as a component of the contact force, a constraint force): correct match.
- `8.01` Lecture 7 → `tension-and-springs` (tension at a point, ropes, two blocks over a pulley with $a = (m_1 - m_2)g/(m_1+m_2)$): correct. The "why" also mentions constraint conditions, which that page introduces briefly; the full treatment is `pulleys-and-constraints` (8.01 Lecture 12). Info: Lecture 12 could be added.
- `towards: false` is right (2.13 ends the block). The cosmology callout's physics is correct; its citation is not (row 2).

## Licensing and AI terms
- No copied sentences found beyond short everyday phrases (row 9). Worked examples (suitcase, crate, lift with 55 kg at ±1.8 m/s², lamp, sack, 3.0/2.0 kg pulley, 1.5/0.50 kg cart) and quiz numbers differ from Siyavula's (WE10 crates 10/15 kg with 500 N; WE12 man pulling a box; lift of 500 kg at 1 and 2 m/s²; WE21 lift 250 kg, 7700 N, 1.6 m/s²) and from MIT's Examples 8.2, 8.8 and 8.9 (symbolic).
- All figures are generated (VectorDiagram, Plot). No Siyavula logo, brand or "Everything Science" in the body; Siyavula is named only in source titles.
- MIT Chapter 8 has no "excluded from our Creative Commons license" or "All rights reserved" notice.
- NASA: cited by title, no insignia, no "according to NASA". No ESO text. No forbidden source.

## Notes
- Siyavula's text uses g = 9,8 m·s⁻²; the page uses 9.81 (site standard, MIT 8.2.3 rounded). Consistent with lessons 1.7 and 2.1 to 2.4.
- "Gravity pulls on every part of you equally" (Weight section) is loose: it pulls on each part in proportion to its mass (equally per kilogram). Consider "equally on every kilogram of you". Info.
- `towards: false`, `status: draft`: correct for now.

## Resolution (2026-11-20, by the page author)
1. Two-masses formula re-cited to `reading2`, Sec. 8.6, Example 8.9, Eqs. (8.6.52) to (8.6.54) (checked in the extracted Chapter 8 text), with `at` saying the two-mass result is derived on this page. Siyavula WE10 kept in the prose only, for the "same a, same T" method (two crates joined by a rope). Calcs `atw-*` (7 entries) and `q4-*` (4 entries) now cite reading2 Example 8.9 likewise.
2. Callout reworded: the cited part is now what MIT Sec. 8.2.2 says (gravitational mass = inertial mass, called the principle of equivalence there, so everything falls with the same g). Einstein's free-fall form follows as history without a citation.
3. Suitcase example: "Four forces act" changed to "Three forces act".
4. `g-moon` and `iss-fraction` set to `origin: later-data`. `fc-g` and `sum-g` narrowed to the 9.81; new `fc-g-moon` and `sum-g-moon` (`kind: fact`, cite moon, `origin: later-data`) record the 1.62 in the flashcard and summary.
5. Tension definition now cites reading 1 (Tension), reading 2 Sec. 8.5.1 and lesson 2.1.
6. Light-string argument now cites Eq. (8.5.1); "passes the pull on" cites Eq. (8.5.3). Calcs `lamp`, `lamp-T` cite Eqs. (8.5.1) and (8.5.3); `q3-T` cites Eq. (8.5.1) and Example 8.9.
7. Lift formula `at` now adds "here applied to the person on the scales".
8. No change (consistent with lessons 2.1 to 2.4).
9. Bullets reworded: "Your legs have to push harder, as if you had grown heavier." / "For a moment you seem to weigh less."
10. Plot range raised to 0 to 1400 N, so the 100 kg line stays inside the graph up to a = 4 m/s².
Coverage note: added a short "Two strings at an angle" paragraph (bird feeder of 3.0 kg on a washing line, 20° each side, T ≈ 43.0 N, check, and 15.7 N at 70°), own numbers, calcs `feeder-w`, `feeder-T`, `feeder-check`, `feeder-steep`. Where this leads: added 8.01 Lecture 12 (`pulleys-and-constraints`) and narrowed the Lecture 7 "why" to what that page covers. Notes: "every part of you equally" changed to "equally on every kilogram of you".
Checks: `pytest tests/calc -k weight-normal` 60 passed; `content:check` reports no error or warning for this page. Status set to reviewed.
