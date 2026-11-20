---
page: content/year-0/hs-2/inclined-planes.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read; CC BY footer present, CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read; CC BY footer present, CCBY in the tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read: PDF mit8_01scs22_chapter8.pdf downloaded to a scratch folder and extracted; no "rights reserved" or "courtesy" notice found)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-06 and -07 (end-of-chapter exercises, read only to check that the page's examples and quiz are not copied; both CC BY)
verdict: pass-with-notes
---

# Review: Inclined planes

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `<Formula>` "Acceleration down a frictionless slope", `at` | Siyavula 2.3 "Object on an inclined plane" only says the parallel component of gravity grows with the angle, acts "like the applied force" and, once larger than friction, makes the book accelerate. It never treats a frictionless slope and never writes a = g sin θ. | `at="Object on an inclined plane (the component of the force of gravity parallel to the slope accelerates the object down the slope)"`: reads as if the source gives the formula. | Add "; derived on this page from F_net = m a" to the `at` (as lesson 2.5 does for its two-mass result). |
| 2 | warning | `<Formula>` "Acceleration of an object sliding down a slope with friction", `at` | Same section: parallel component against friction, qualitative only; f_k = μ_k N is in 2.2 Force; N = F_g cos θ in Worked example 15. | The `at` lists the ingredients correctly but does not say the result is derived on the page. | Add "derived on this page" to the `at`. |
| 3 | warning | `<Formula>` connected-mass acceleration, `at`, and the sentence before the worked example | Worked example 10: two crates on a **level** surface joined by a rope, pulled by 500 N, with friction; the two second-law equations are added so T drops out. Worked example 13: truck and trailer joined by a tow bar at 25°. Neither has a pulley, a hanging mass or a slope. | Prose: "The main source solves several problems of this kind with objects joined by a rope (main source, Worked examples 10 and 13)". The `at` honestly says "method". | Prose: say "solves problems with two objects joined by a rope or tow bar on level ground (Worked examples 10 and 13); the method carries over". In the `at`, add "the formula is derived on this page". The method citation itself is honest and supported (WE10 adds the equations to remove T, as the page does). |
| 4 | warning | "Choosing axes along the slope", paragraph after the list | MIT 8.01SC Sec. 8.4.1 only says "Suppose we choose a Cartesian coordinate system, then we can resolve the force into its component vectors" (Eqs. 8.4.2, 8.4.3). Siyavula 2.2 "Resolving forces into components" says "We can use any coordinate system to describe the situation and the simplest thing to do is to make the x-axis ... align with the inclined plane". | "Any pair of perpendicular axes is allowed; the laws of motion work in each of them (reading 2, Sec. 8.4.1)." Also the axis choice is cited to "main source, Object on an inclined plane", which does not choose axes. | Cite reading 1, "Resolving forces into components" for "any coordinate system", keep reading 2 Sec. 8.4.1 for writing the second law per component; drop "main source, Object on an inclined plane" from the axis sentence or keep it only for the parallel/perpendicular components. |
| 5 | warning | Quiz question 1 | Siyavula Worked example 14 is a multiple-choice question with choices F_g, F_g cos θ, F_g sin θ, F_g tan θ (for the friction); end-of-chapter exercises (02-newtons-laws-06) ask "the normal force" on a block at rest on a 20° incline with choices 250, 250 cos 20°, 250 sin 20°, 2 500 cos 20°. | Quiz 1: "Which part of its weight presses it into the slope?" with choices m g, m g sin θ, m g cos θ, m g tan θ. | Not a copy (different question and wording), but the same four-option pattern as WE14 and close to the exercise. Consider other distractors (e.g. "m g / cos θ", "m g − m g sin θ") or a numerical version with own numbers. |
| 6 | info | Worked example "A trolley on a smooth ramp" | — | A trolley that "rolls without friction" gets a = g sin θ. | Strictly, rolling needs friction at the wheels and wheel inertia lowers a slightly; fine at VWO level with "light wheels". Optional bracket: "(light wheels, so we can treat it as sliding without friction)". |
| 7 | info | calcs header comment | MIT Ch. 8 has Example 8.10 "Accelerating Wedge": a block sliding without friction down a 45° wedge (symbolic). | "MIT Ch. 8 has no numerical inclined-plane example" | True as written (8.10 is symbolic), but could mention 8.10 for completeness. |

## Formulas and citations
- **Components of the weight** (`reading1`, Resolving forces into components): source gives F_gx = F_g sin(θ), F_gy = F_g cos(θ) with the x-axis along the incline and states that the slope angle equals the angle between the weight and its perpendicular component. Page's F_{g∥}, F_{g⊥} notation is explained in the `at`. Correct.
- **F_N = m g cos θ** (`mit`, Object on an inclined plane; WE15): the section says the normal force equals the perpendicular component in size; WE15 writes N − F_g cos(θ) = 0. Correct; the page's restriction "only when nothing else pushes or pulls perpendicular" is correct and added by the page.
- **a = g sin θ** (`mit`): derivation correct; citation see table #1.
- **F_f = m g sin θ** at rest (`mit`, WE14): WE14 gives F_f − F_g sin(θ) = 0 with up the slope positive. Exact support.
- **tan θ ≤ μ_s** (`reading2`, Sec. 8.3.2): Sec. 8.3.2 gives 0 ≤ f_s ≤ (f_s)max (8.3.6), (f_s)max = μ_s N (8.3.7), the just-slipping condition, and mentions a block at rest on an inclined plane. The `at` says it is "applied to a block on an inclined plane (combined here with ...)", which is honest: the inequality is the page's own derivation from cited pieces.
- **μ_s = tan θ_c** (`reading2`): `at` says "worked out here for a slope". Honest.
- **a = g(sin θ − μ_k cos θ)** (`mit`): physics and derivation correct; citation see table #2.
- **F_A − m g sin θ − μ_k m g cos θ = m a** (`mit`, WE15 + 2.2 Friction forces): WE15 has T − F_g sin(θ) = m(0) on a frictionless incline; the friction term comes from f_k = μ_k N in 2.2 and the direction rule ("opposes the motion") in 2.2's definition. The `at` names both. Acceptable.
- **Connected-mass formula** (`mit`, WE10): physics correct (block equation T − m₁g sin θ − μ_k m₁ g cos θ = m₁a, hanging mass m₂g − T = m₂a, sum gives the formula; I re-derived it). Citation see table #3.
- Reading 1 location "Friction forces (maximum static friction, also on an inclined plane)": supported by 2.2 Worked example 5 ("This does not depend on whether the surface is inclined or not").
- Notation matches lessons 2.1–2.7: F_g, F_N, F_f, F_A (2.1, 2.5), T, μ_s, μ_k (2.6), F_net (2.3), v_f, v_i, Δx (1.6), m₁, m₂ (2.5). g = 9.81 m/s² throughout. New symbols F_{g∥}, F_{g⊥}, θ_c are defined where introduced.
- All sources are on the §2.0 list; no forbidden source cited or read.

## Arithmetic and answer checks
All recomputed independently in Python (scratch only):
- Quiz 2: 9.81 sin 30° = 4.905 → 4.9 ✓; cos distractor 8.50 → 8.5 ✓; 9.8 = free fall ✓.
- Quiz 3: tan 22° = 0.404 → 0.40 ✓; sin 0.375 → 0.37 ✓; cos 0.927 → 0.93 ✓; 1/tan 2.475 → 2.5 ✓.
- Quiz 4: friction m g sin θ grows, normal m g cos θ shrinks → choice 1 ✓; other choices wrong ✓.
- Quiz 5: tan 14° = 0.2493 → 0.25 ✓; sin 0.2419 → 0.24 ✓; cos 0.970 → 0.97 ✓; 1/tan 4.01 → 4.0 ✓. (0.24 and 0.25 are close but distinct; fine.)
- Quiz 1: m g cos θ ✓.
- Trolley: 19.62 N; 6.710 N; 18.437 N; a = 3.355 m/s² → 3.36 ✓; v = 3.173 → 3.17 m/s ✓; √(6.71² + 18.44²) = 19.62 ✓. Diagram arrows 6.710/5 = 1.342, 18.437/5 = 3.687 squares ✓ (correct signs in tilted axes: x up the slope).
- Plank: tan 27° = 0.5095 → 0.51 ✓; tan 15° = 0.268 → 0.27 ✓; F_f = 1.0156 → 1.02 N ✓; F_N = 3.790 → 3.79 ✓; max 1.931 → 1.93 ✓; ratio 0.526 → 0.53 ✓; 1.02/1.93 = 0.528 ✓.
- Slide: sin 35° = 0.5736, 0.30 cos 35° = 0.2457; a = 3.216 → 3.22 ✓; v = 4.537 → 4.54 ✓; t = 1.411 → 1.41 ✓; g sin 35° = 5.627 → 5.63 ✓; ½ × 4.54 × 1.41 = 3.20 ✓. Plot caption: atan 0.30 = 16.7° → "about 17°" ✓.
- Crate: 441.45 N; 114.26; 426.41; 106.60; net 29.14 → 29.1 ✓; a = 0.648 → 0.65 ✓; constant-speed pull 220.86 → 221 ✓; "halves the force" 221/441 = 0.50 ✓. Diagram: 1.143, 4.264, 2.5, 1.066 squares of 100 N ✓.
- Connected: 14.715; 9.81; static max 4.248 → 4.25 ✓; 14.058 → "about 14.06" < 14.7 ✓ (comparison is valid: if the block stayed put, T = m₂g); kinetic 3.398 → 3.40 ✓; a = 0.4305 → 0.430 ✓; T = 14.069 → 14.1 ✓; check 14.069 ✓; θ = 90° limit gives (m₂ − m₁)g/(m₁ + m₂) ✓ (matches lesson 2.5 with the labels swapped, and the page writes it in this page's labels).
- Flashcards: all five backs correct.
- Calcs file: every number on the page has an entry (diagram arrow lengths only implicitly, through the forces); each entry has `source: {cite, at}` and `origin: page-own`, which is honest (no source numbers reused; I checked Siyavula WE6, WE14, WE15, Exercise 2.x and end-of-chapter incline items: 137 N/37°, 456 N and 300 N/67.8°, 287 N, 98 N, 312 N/35°, 130 N/μ_s 0.47, 250 N and 200 N/20°, 3 kg/35°, 100 kg/45°, M at 30° with 8 N; none matches the page). I did not run `npm run calc:test`.

## Only earlier terms
- Used and introduced earlier: sine, cosine, tangent and tan = sin/cos (0.7), components (0.8), v_f² = v_i² + 2aΔx (1.6), free fall and mass cancelling (1.7), constant speed with zero net force (2.2), F_net = m a (2.3), weight, normal force, tension, pulley, two masses over a pulley and the "five steps" (2.5, which has exactly five numbered steps), static/kinetic friction, μ_s, μ_k, "smooth" for frictionless (2.2, 2.6), free-body diagram (2.1), N/kg (2.5).
- New on this page and defined: inclined plane, θ as slope angle, F_{g∥}, F_{g⊥}, critical angle θ_c.
- No term used before it is introduced.

## Coverage
- §4 row 2.8: Inclined planes, no PhET, leads to `8-01/contact-forces`. The page covers components of the weight, normal force, frictionless acceleration, static friction at rest and the tan θ ≤ μ_s condition, sliding with kinetic friction, pulling up a slope, and a slope–pulley system: full VWO coverage of the topic.
- Not covered (does not matter here): a push at an angle to the slope (mentioned qualitatively as changing F_N), energy on a slope (Block 3).

## Where this leads
- `leadsTo` 8.01 lecture 6 = `content/year-1/8.01/contact-forces.mdx` ("Contact forces: the normal force and friction"), which treats the contact force as normal + friction, the just-slipping condition, and has a worked example on a slope (tan θ = μ_s). The `why` is accurate.
- `towards: false`, correct (2.8 is not the block's last lesson).

## Licensing and AI terms
- No copied sentences found. Closest: the tilting-book scene ("Put a book on a plank and slowly lift one end ... at a certain angle, it suddenly starts to slide") vs Siyavula 2.2 ("If you slowly lift one side of the table ... the book suddenly starts to slide off the table"): same everyday scene, own wording; fine, and the page cites the source for it.
- No figures from any source: two `<VectorDiagram>`s and one `<Plot>` generated from numbers/formulas.
- Worked examples are the page's own (see calcs check above). Quiz 1 resembles a source pattern (table #5).
- No Siyavula logo or "Everything Science" branding; source title is plain "Siyavula, Physical Sciences Grade 11".
- MIT Chapter 8 PDF: no "excluded from our Creative Commons license" or "All rights reserved" notice; no MIT figure used.
- No NASA or ESO material. No forbidden source cited or read.

## Notes
- The derived results (a = g sin θ, tan θ ≤ μ_s, μ_s = tan θ_c, a = g(sin θ − μ_k cos θ), the connected-mass formula) are correct physics; three of the five `at` texts already say "combined here" or "worked out here"; making the other two (and the connected-mass one) say so too would make all citation notes equally honest.
- The statement "μ_k is usually smaller than μ_s" is supported by reading 2 Sec. 8.3.2 ("µs > µk").
- Nothing on the page was edited.

## Resolution (2026-11-20, by the page author)
1. `at` of "Acceleration down a frictionless slope" now ends "the formula itself is derived on this page from F_net = m a".
2. `at` of "Acceleration of an object sliding down a slope with friction" now ends "the formula itself is derived on this page".
3. Prose reworded: "The main source solves problems with two objects joined by a rope or a tow bar (main source, Worked examples 10 and 13), without a pulley; the same method carries over." The connected-mass `at` adds "the method is the source's, the formula is derived on this page".
4. Axis choice now cited to reading 1, Resolving forces into components only (dropped "main source, Object on an inclined plane"); the next paragraph says any coordinate system is allowed and the slope-aligned x-axis is simplest (reading 1), and keeps reading 2 Sec. 8.4.1 for writing the second law per axis.
5. Quiz 1 is now numerical with the page's own numbers: a 5.0 kg box on a 25° slope, choices 21 N, 23 N, 44 N (answer), 49 N, with an explanation of each distractor. Four calcs entries added (quiz-box-perp, quiz-box-par, quiz-box-tan, quiz-box-weight).
6. Trolley example now says it "has light wheels and rolls without friction, so we can treat it as sliding on a smooth slope".
7. Calcs header now mentions MIT Example 8.10 (block on a 45° wedge, symbolic).

Checks: `pytest tests/calc -k inclined-planes` 64 passed; `content:check` reports no error or warning for this page. Status set to reviewed.
