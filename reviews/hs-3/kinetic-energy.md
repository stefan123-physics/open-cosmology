---
page: content/year-0/hs-3/kinetic-energy.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-03 (read; CC BY 3.0 footer present)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-03 (read; CC BY 3.0 footer present)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter13/ (read: PDF downloaded to a scratch folder outside the repo and extracted; no "rights reserved", "courtesy" or "excluded" notice)
verdict: pass-with-notes
---

# Review: Kinetic energy and the work–energy theorem

No errors found. Every formula is cited to a real place in a §2.0 source that supports it, every number checks out, and the physics is correct. The notes below are wording, citation-precision and calcs-completeness points.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `<Formula label="Braking distance">`, `at="Worked example 7: Work-energy theorem 2 (the same method; the general formula is written out on this page)"` | Siyavula Gr 12 5.3, Worked example 7, works only with numbers: 1000 kg car at 16,7 m/s, braking force 8000 N, gives Δx = 17,4 m. It never writes d = m v²/(2F). | The `at` says "the general formula is written out on this page". A reader may take "this page" to mean the Siyavula page, which does not contain the formula. | Reword, e.g. `at="Worked example 7: Work-energy theorem 2 (numerical; the general formula d = m v_i²/(2F) is rearranged here, not in the source)"`. |
| 2 | warning | "A ball thrown upwards": `$-m g h = 0 - \tfrac{1}{2} m v_i^{2}$, so $h = \dfrac{v_i^{2}}{2g}$` (and line 83, `W_net = F_net Δx`) | MIT Ch. 13, Sec. 13.6, Example 13.7 (Eq. 13.6.2) uses the work of gravity, W_g = −mg(y_f − y₀), with the work–kinetic energy theorem. Siyavula 5.3 has no thrown-ball example. | A key result of the lesson (also in the Summary and in quiz 5) is written as an inline equation set apart like a display line, with no `<Formula>` and so no `cite`. | Make h = v_i²/(2g) a `<Formula>` with `cite="reading2" at="Sec. 13.6, Example 13.7, Eq. (13.6.2) (work of gravity; the height is rearranged here)"`. Line 83 can stay inline. |
| 3 | info | `<Formula label="Velocity after a displacement Δx">`, `cite="reading2"` at Sec. 13.3.1, Eqs. (13.3.1)–(13.3.5) | MIT Eq. (13.3.5) is a_x Δx = ½v_{x,f}² − ½v_{x,i}², written with velocity components. | v_f² = v_i² + 2aΔx, introduced with "Lesson 1.6 gave the equation". | Correct and equivalent. Lesson 1.6 cites Siyavula Gr 10 21.7, Eq. (4) for this form; the `at` could add "(written there as a_x Δx = ½v_{x,f}² − ½v_{x,i}²)". |
| 4 | info | `E_k` throughout | Siyavula Gr 12 5.3 writes E_k; Gr 10 22.3 writes E_K; MIT writes K. | E_k, with a note that MIT uses K and some books KE. | Fine. The note covers MIT; E_K versus E_k need not be mentioned. |
| 5 | info | "Kinetic energy" section, "(the word comes from the Greek for 'moving')" | MIT Sec. 13.2: "from the Greek word kinetikos which translates as moving". | Same claim, no inline citation. | Optional: add "(reading 2, Sec. 13.2)". |
| 6 | info | "about 190 times less" | — | 3.0 × 10⁵ / 1620 = 185, so "about 190" is right. | "Times less" is awkward. Say "about 190 times as much for the car" or "the cyclist has about 1/190 of it". |

## Formulas and citations
- **E_k = ½ m v²**, reading1 (Gr 10 22.3), "Kinetic energy (ESAHL), definition": correct. The section code ESAHL exists, and the page has E_K = ½mv² with m in kg and v in m/s. The page writes "speed", which matches MIT 13.2 ("does not refer to any direction of motion, just the speed"). That is better than Siyavula's "velocity".
- **v_f² = v_i² + 2aΔx**, reading2 Sec. 13.3.1, Eqs. (13.3.1)–(13.3.5): correct. MIT derives a_xΔx = ½(v_f² − v_i²) there from Δx = v_i t + ½a t² and a = Δv/t (see #3).
- **W_net = F_net Δx = ½mv_f² − ½mv_i²**, reading2 Sec. 13.3.1, Eqs. (13.3.6) and (13.3.7): correct. (13.3.6) is m a_x Δx = K_f − K_i and (13.3.7) is F_x Δx = K_f − K_i.
- **W_net = ΔE_k = ½mv_f² − ½mv_i²**, mit (Gr 12 5.3), "Work-energy theorem (ESCMD), definition box": correct. Siyavula's box says the work done on an object by the net force equals the change in its kinetic energy, W_net = ΔE_k = E_k,f − E_k,i. The page only expands E_k.
- **d = m v_i²/(2F)**, mit, Worked example 7: the method is supported, but the general formula is not in the source (see #1).
- The statements "positive net work speeds it up, negative slows it down, zero keeps the speed" are supported by MIT Sec. 13.6, the paragraph after Eq. (13.6.1). "It also holds when the force changes ... (reading 2, Sec. 13.6, Eq. (13.6.1))" is correct: (13.6.1) is W = ∫F_x dx = K_f − K_i.
- The frame paragraph's account of MIT Example 13.1 is accurate. Car A goes from 10 to 20 mph and car B from 50 to 60 mph, so both gain 10 mph. The ratio ΔK_B/ΔK_A is 11/3 from the ground and 9 from a frame moving with car A's initial velocity. The page uses its own bag-on-a-train example and only describes MIT's example in words.
- The `readings` `location` fields exist in the sources. Gr 10 has "Checking units" (ESAHM). MIT has Eqs. 13.2.1, 13.3.1–13.3.7 and 13.6.1, and Example 13.1.
- Every display equation is a `<Formula>` with `cite` and `at`, apart from the inline display-style line in "A ball thrown upwards" (#2).

## Arithmetic and answer checks
I recomputed every number independently (Python):
- Car: ½·1500·20² = 3.0×10⁵ J ✓. Cyclist: ½·90·6.0² = 1620 ≈ 1.6×10³ J ✓. Ratio 185 ≈ 190 ✓.
- "Speeding up a car": 6.0×10⁴ J ✓. 3.75×10⁵ ≈ 3.8×10⁵ J ✓. Δ = 600·525 = 3.15×10⁵ J ✓. F = 3.15×10⁵/150 = 2100 N ✓. a = 1.75 m/s² ✓. 100 + 525 = 625, √625 = 25 m/s ✓. The unit check J/m = N ✓.
- "Twice the speed": 0→10 m/s is 6.0×10⁴ J; 10→20 m/s is 600·300 = 1.8×10⁵ J (3×) ✓; 0→20 m/s is 2.4×10⁵ J (4×) ✓.
- Plot: the curve expression 0.6 v² in kJ equals ½·1200 v²/1000 ✓. A (10, 60) and B (20, 240) lie on the curve ✓. At v = 30 the curve reaches 540 kJ, inside the range of 600 ✓. The caption matches.
- Braking: 72/3.6 = 20 and 108/3.6 = 30 ✓. 3.2×10⁵ J and 7.2×10⁵ J ✓. 32 m and 72 m ✓. 1.5² = 2.25 and 32·2.25 = 72 ✓. a = 6.25 m/s², 400/12.5 = 32 m ✓.
- Ball: ½·0.15·144 = 10.8 ≈ 11 J ✓. h = 144/19.62 = 7.34 ≈ 7.3 m ✓. mgh = 10.74 ≈ 11 J ✓. It returns at 12 m/s because the net work over the round trip is zero ✓.
- Bag: ½·2.0·25² = 625 ≈ 630 J ✓. Zero in the train frame ✓ (the train must move at constant velocity, which the next paragraph implies).
- Quiz 1: 750 J ✓. The distractors are wrong: 150 (no square), 1500 (no ½), 300 (m·v). The explanation is true.
- Quiz 2: 4× ✓. Quiz 3: 200 − 120 = 80 J ✓. 120, 200 and 320 are wrong. "Impossible 320 J" means impossible with negative net work, which is fine.
- Quiz 4: 9× ✓ (same force, so d ∝ v²). Quiz 5: 49/19.62 = 2.50 m ✓. Distractors: 5.0 (49/9.81 = 4.99, no 2), 0.36 (7/19.62, no square) and 0.71 (7/9.81) are all wrong. The explanation is true.
- Flashcards: all five are correct.
- **Calcs file:** every entry agrees with my values. Numbers on the page with no entry (warning, rule 7 asks for every number):
  - "three times as much" (1.8×10⁵ / 6.0×10⁴ = 3);
  - "four times as much as to 10 m/s" (2.4×10⁵ / 6.0×10⁴ = 4);
  - "doubling x multiplies y by 2² = 4" (the 3² = 9 is covered by `quiz-brake-triple`);
  - "at 12 m/s again".

  Add small ratio entries for the first two.
- Calcs notes (info): `quiz-ball-nosquare` gives "0.36 s" for a distractor the page prints as "0.36 m". That is honest, because v/(2g) has the unit of time, but the reason could be written in `where`. The `ball-h`, `ball-mgh` and `quiz-ball*` entries point to Siyavula Worked example 6, a dropped brick. MIT Example 13.7 (reading2, Sec. 13.6) is the closer source for the work done by gravity.

## Only earlier terms
- Prerequisites `[work, newtons-second-law, constant-acceleration, free-fall, relative-velocity, quadratics-and-power-laws]` are all earlier High School lessons (3.1, 2.3, 1.6, 1.7, 1.9, 0.6) ✓. Lesson 3.1 `work` is a draft written in parallel. It exists and defines W = FΔx cos θ, the joule (1 J = 1 N·m = 1 kg·m²/s²), net work (including "Approach 2", the work of the net force) and work against friction. That matches this page's opening recap.
- The page also uses ideas from lessons not listed directly, all reached through `work`'s own prerequisites:
  - scalar (0.8 `introducing-vectors`);
  - weight mg (2.5);
  - drag (2.6);
  - uniform circular motion and the net force toward the centre (1.10 `circular-motion`; 2.9 `centripetal-force`).

  This is fine, but `circular-motion` (1.10) is not in `work`'s list either; it comes in only through `centripetal-force`. Info only.
- The lesson numbers in the text all match the block syllabi:
  - 0.6 power laws: y = kxⁿ and the parabola are there ✓. The symbol ∝ is not used in 0.6; the page uses $y \propto x^{2}$ with no explanation. This is uncertain or minor: write "y = kx²" instead, or say "∝ means 'is proportional to'".
  - 0.8 scalar ✓.
  - 1.6: v_f² = v_i² + 2aΔx, braking distance ∝ v² (quiz) and reaction time (worked example "Braking distance") are all there ✓.
  - 1.7: "same acceleration whatever its mass" ✓.
  - 1.9 frame of reference ✓.
  - 1.10/2.9 ✓.
  - 2.3: 1 N = 1 kg m/s² ✓.
  - 2.5 weight ✓; 2.6 drag ✓.
  - 3.3 (mgh named next) ✓; 3.11 and 3.12 ✓.
- "Galaxy", "Friedmann equation" and "dark energy" in the callout were all met earlier: galaxies in Block 0 and 1.4; dark energy in the 1.4 callout; the Friedmann equation in the 2.11 callout ✓.
- New terms (kinetic energy, E_k, work–energy theorem, braking distance as d) are defined before use ✓.

## Coverage
- §4 row 3.2 is "Kinetic energy and the work–energy theorem". Both are covered fully at VWO level: the definition, the unit, scalar and never negative, the derivation from the equations of motion, the theorem with the sign of the work, the braking distance, vertical throws, and frame dependence (which goes beyond VWO, briefly).
- Not covered here: conservative versus non-conservative forces and mechanical energy (Siyavula 5.3's ESCMF part). These belong to 3.3/3.4 (conservation of energy), so it does not matter. The relation K = p²/2m waits for momentum (3.6), which is correct.

## Where this leads
- `leadsTo: 8.01 lecture 20` is `content/year-1/8.01/work-and-kinetic-energy.mdx`, "Kinetic energy and work in one dimension". It is the same topic and matches the planned `8-01/work-and-kinetic-energy` ✓. The `why` text is accurate: that page integrates Newton's second law over position.
- `towards: false` is right; this is not the block's last lesson (3.12 is).
- Cosmology callout: correct. 8.286 (`expanding-sphere`) derives a conserved quantity E = ½ȧ² − (4π/3)Gρᵢ/a, kinetic energy per unit mass minus gravitational energy, whose sign decides eternal expansion or recollapse. That is the Newtonian route to the Friedmann equation. "For matter alone" and the dark-energy caveat are correct.

## Licensing and AI terms
- No copied sentences. The closest is the definition: Siyavula says "the energy an object has due to its motion" and the page says "the energy an object has because it is moving". That is a short standard phrase and acceptable. The theorem statement is the standard wording.
- Worked examples and quiz items are the page's own, with no Siyavula or MIT numbers reused. Two are of the same type as a source example, with different numbers and more steps:
  - the braking example resembles Siyavula Gr 12 Worked example 7 (car braking with a given force);
  - the thrown ball resembles Siyavula Gr 10 Exercise 22.2 Q2 (100 g stone thrown up at 3 m/s; kinetic energy at release and at the top). The page's 0.15 kg ball at 12 m/s, asking for the height, is a different problem.

  Info only.
- The only figure is a generated `<Plot>`; nothing is copied.
- No Siyavula logo or brand, and "Everything Science" is not used: Siyavula appears only in the source titles ✓.
- MIT Ch. 13 has no rights-reserved, courtesy or excluded notice (checked with grep) ✓.
- No NASA or ESO material ✓.
- No forbidden source is cited ✓. One note for the owner: the cited Siyavula Gr 12 5.3 page itself contains "Worked example 8: Block on an inclined plane", credited there to "OpenStax College". This lesson does not use or cite that example. Its existence came to light because the page summary was fetched. Writers should keep skipping that example.

## Notes
- Physics checked and correct:
  - "net work = work of the net force" (true for a point-like object, which is the setting here);
  - zero work by a centripetal force;
  - the braking force as the only horizontal force;
  - air resistance doing negative work on both legs;
  - the work–energy theorem holding in every frame at constant velocity, with values that depend on the frame.
- No em dashes (0 found).
- Status `draft` is correct until the warnings are dealt with.

## Resolution (2026-11-20, by the page author)
1. (warning) Braking-distance `<Formula>` `at` reworded: "Worked example 7: Work-energy theorem 2 (numerical only; the general formula is rearranged here, not in the source)".
2. (warning) h = v_i²/(2g) is now a `<Formula label="Height reached by a ball thrown upwards">` with `cite="reading2" at="Sec. 13.6, Example 13.7, Eq. (13.6.2) (work of gravity with the work–kinetic energy theorem; the height is rearranged here, not in the source)"`. The line W_net = F_net Δx stays inline.
3. (info) Done: the `at` of "Velocity after a displacement Δx" now adds "written as a_x Δx = ½v_x,f² − ½v_x,i²".
4. (info) No change, as suggested.
5. (info) Done: "(… Greek for "moving"; reading 2, Sec. 13.2)".
6. (info) Done: "so the car has about 190 times as much"; calcs `ke-ratio` shown string updated.
- Calcs completeness (warning): added `double-ratio-3` ("three times as much"), `double-ratio-4` ("four times as much as to 10 m/s"), `power-law-2` (2² = 4) and `ball-return` ("at 12 m/s again").
- Calcs notes (info): `ball-h`, `ball-mgh`, `quiz-ball`, `quiz-ball-no2` and `quiz-ball-nosquare` now cite reading2, Sec. 13.6, Example 13.7, Eq. (13.6.2) instead of Siyavula Worked example 6; `quiz-ball-nosquare`'s `where` explains that v/(2g) has the unit of time while the page prints the distractor in m.
- Only earlier terms (∝ not introduced in 0.6): the sentence now says "a power law of lesson 0.6, $y \propto x^{2}$, where $\propto$ means "is proportional to"". (Writing y = kx² was tried but would need a new symbol meaning for k on this page.)
- `circular-motion` reached only through `centripetal-force`: no change (info only; it is still an earlier lesson).
Checks: `pytest tests/calc -k kinetic-energy` all pass; `content:check` reports no error for this page.
