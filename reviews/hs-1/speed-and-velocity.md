---
page: content/year-0/hs-1/speed-and-velocity.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-03 (read; CC BY 3.0 footer, listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-05 (read; CC BY 3.0 footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read; CC BY 3.0 footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter4.pdf (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter5.pdf (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/0efbf1fe4a90766cdfdad43223aabe25_MIT8_286F13_lec04.pdf (read, slide 1)
verdict: needs-changes
---

# Review: Speed and velocity

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "A train there and back", step Check (and calcs `train-check`, `where`) | Arithmetic: 48 < 54 < 72 | "The average speed (48 km/h) lies between the two leg speeds (54 and 72 km/h) and is lower than both" | Self-contradictory and false: 48 km/h does not lie between 54 and 72. Write e.g. "The average speed (48 km/h) is lower than both leg speeds (54 and 72 km/h), as it should be, because it includes the 20 minutes of standing still." Fix the calcs `where` text too. |
| 2 | warning | Formula "Kilometres per hour in metres per second", `at="Sec. 21.3, Worked example 1 (converting km to m and minutes to s)"` | Worked example 1 (James, 2 km in 30 min) converts 2 km to 2000 m and 30 min to 1800 s separately; it never forms 1 km/h = 1/3.6 m/s. The km/h to m/s conversion appears only as a task in Exercise 21.3 (rabbit, 120 km/h; Bridget, speed in km/h) | Cites WE1 for the 1/3.6 factor | The `at` is honest ("converting km to m and minutes to s") but only partly supports the formula. Better: cite lesson 0.2's own method, or `at="Sec. 21.3, Worked example 1 (unit conversion) and Exercise 21.3 (km/h to m/s)"`. |
| 3 | warning | Sections "The sign of a velocity", "Constant velocity", quiz 4, callout | Lesson 0.8 (introducing-vectors, line 73): "Its magnitude is written without the arrow ... and is never negative." MIT Ch. 4 writes the signed one-dimensional quantity as the component v_x (Eq. 4.3.1) | Uses plain `v` for a signed velocity (v = −1.5 m/s, v = −6.0 m/s) and also for a magnitude (drone speed v = 6.0 m/s, Hubble v) | Add one sentence where `v` is first used signed: "along a line we write the velocity as a signed number v (strictly its component v_x); in the plane, v without arrow is the speed." Otherwise it contradicts what lesson 0.8 taught. |
| 4 | info | Average velocity paragraph | Lesson 1.1 writes 1D displacement as Δx = x_f − x_i (no arrows) and 2D as Δr⃗ | "Recall from lesson 1.1 ... Δx⃗ = x⃗_f − x⃗_i" | Notation with arrows on x_f, x_i is new; harmless (Siyavula writes Δx⃗), but "recall" is slightly off. |
| 5 | info | Callout, Hubble's law | Guth slide 1: v = Hr, r = distance to galaxy | v = H d | Same notation as lesson 0.11, which says "(Guth writes r)". Could repeat that bracket here. |
| 6 | info | Velocity components formula, `at="Sec. 5.1, Eq. (5.1.2), applied to average velocities"` | Eq. (5.1.2) defines instantaneous components v_x = dx/dt, v_y = dy/dt | Average components Δx/Δt, Δy/Δt | The `at` states the change; fine. For the drone (constant velocity) both agree. |

## Formulas and citations
- Average speed, `cite="mit"` Sec. 21.3 "Average speed": supported (Siyavula: v_av = D/Δt, distance over time, scalar). Page gives it in words; fine.
- Average velocity v⃗_ave = Δx⃗/Δt, Sec. 21.3 "Average velocity": supported (Siyavula v⃗_av = Δx⃗/Δt). Subscript "ave" follows MIT Ch. 4 (Eq. 4.3.3), not Siyavula's "av"; acceptable site notation.
- 1 km/h = 1/3.6 m/s: see finding 2.
- x_f = x_i + v Δt, `reading2` Sec. 21.6 "Motion at constant velocity (rearranged)": 21.6 gives v = (x_f − x_i)/(t_f − t_i) and the morning-walk numbers ("after 50 s she is 50 m from home"); the rearranged form is not printed but the `at` says "rearranged". Honest and adequate.
- Instantaneous velocity v = lim Δx/Δt, `reading3` Sec. 4.3.3 Eq. (4.3.5): correct place and form (MIT: v(t) ≡ lim_{Δt→0} v_ave = lim Δx/Δt = dx/dt; slope of the tangent, matching the page's next sentence).
- Velocity components, `reading4` Sec. 5.1 Eq. (5.1.2): see finding 6.
- Hubble's law, `guth4` slide 1: correct slide (v = Hr). No notice on slide 1 (the lecture PDF's only "All rights reserved" notice is on slide 3, the parsec image, not used).
- `reading1` (Siyavula 21.5) is listed but no Formula cites it. The page's instantaneous-velocity and instantaneous-speed definitions agree with 21.5 ("magnitude of instantaneous velocity"). Fine as a reading.
- Claims checked as standard and correct: dividing a vector by a positive scalar keeps its direction; average speed ≥ |average velocity| with equality only for one-direction straight-line motion; time-weighted vs plain average of leg velocities (cyclist: (24·15 + (−12)·10)/25 = 9.6 km/h, so the page's explanation is right); recession velocity points away from us and is opposite on the opposite side of the sky (ignoring peculiar motions, fine at this level).

## Arithmetic and answer checks
Recomputed independently; `npm run calc:test -- -k speed-and-velocity`: 39 passed.
- Train: 72 km; 90 min = 1.5 h = 5400 s; 72/1.5 = 48 km/h; 72000/5400 = 13.3 ≈ 13 m/s; out 36/0.5 = 72 km/h = 20 m/s; back 36/(2/3) = 54 km/h = 15 m/s. All correct; the check sentence is wrong (finding 1).
- Sprinter 10 × 3.6 = 36 km/h. Correct.
- Cyclist: 6.0/0.25 = 24 km/h = 6.67 m/s; 2.0/(1/6) = 12 km/h = 3.33 m/s; 8.0 km / (25/60 h) = 19.2 km/h = 5.33 m/s; 4.0/(25/60) = 9.6 km/h = 2.67 m/s; plain average 6 km/h. All correct.
- Tram A 50 + 8.0 × 30 = 290 m; tram B 290 − 6 × 30 = 110 m; both curves stay inside the 0 to 320 m range. Correct.
- Drone: 3.6, 4.8 m/s; √(12.96 + 23.04) = 6.0 m/s; atan(4.8/3.6) = 53.1°; √(36² + 48²) = 60 m, 60/10 = 6.0. Correct.
- Callout: 70 × 100 = 7000 km/s = 7.0 × 10⁶ m/s; 7000/299 792 = 2.33 %. Correct. H = 70 km/s/Mpc is in calcs/values.yaml as the round example value.
- Quiz 1: 400/80 = 5.0 m/s, velocity 0; answer index 1 correct; other choices wrong (0.20 = 80/400 inverted).
- Quiz 2: 126/3.6 = 35 m/s, index 1 correct; 126 × 3.6 = 453.6 ≈ 454; 12.6 and 45 wrong.
- Quiz 3: index 2 correct; the others are false.
- Quiz 4: −12/8.0 = −1.5 m/s, index 1 correct; −0.67 (inverted) and +96 (product) wrong.
- Quiz 5: √(25 + 144) = 13 m/s, index 1 correct; 7, 17, 60 wrong.
- Flashcards: all true.
- info: distractor values (0.20, 12.6, 45, −0.67, +96, 7.0, 17, 60) and the "17 m/s" in quiz 5's explanation are not in the calcs file; only 454 is. Acceptable for distractors, but the explanation number 17 could be added.
- info: quiz 5 uses exactly the numbers of lesson 0.8's quiz (5.0 and 12 at right angles, 13, distractor 17). Not copied from a source, but a repeat; consider other numbers (e.g. 8.0 and 6.0 → 10).

## Only earlier terms
- scalar, vector, components, Pythagoras, tangent for direction, v⃗ arrow notation: lesson 0.8 (introducing-vectors). Note the magnitude convention clash in finding 3.
- limit, tangent, slope at an instant, speedometer: lesson 0.10 (rates-of-change-and-area).
- unit conversion, km/h ÷ 3.6: lesson 0.2 (units-and-si).
- frame of reference, positive direction, Δx = x_f − x_i, distance, displacement: lesson 1.1.
- Hubble's law, H = 70 km/s/Mpc, megaparsec: lesson 0.11 (towards-the-universe-scales), earlier in block order though not in `prerequisites`; speed of light and its value: lesson 0.1.
- "slope of a straight line (lesson 0.10)": the slope of a straight line is introduced in lesson 0.5 (graphs-and-slope); 0.10 also uses it. info.
- "uniform motion", "instantaneous velocity/speed", "average speed/velocity" are introduced here.
- No term used before introduction found.

## Coverage
- §4 row 1.2 (topic "Speed and velocity", no PhET sim): covered. Siyavula 21.3 (average speed, average velocity, sign convention, round trip, speed vs velocity differences), 21.5 (instantaneous velocity and speed) and the constant-velocity part of 21.6 are covered; two-dimensional velocity goes beyond Siyavula Grade 10 and is VWO-appropriate.
- Not covered: Siyavula 21.3's table point "speed depends on the path, velocity does not" is only implicit (via the round trips); Siyavula 21.5's note on t (an instant) vs Δt (an interval) is not made explicit. Both minor at this level (info).

## Where this leads
- `leadsTo` 8.01 Lecture 1 → content/year-1/8.01/position-and-velocity-1d.mdx ("Position and velocity in one dimension"): exists, same topic, matches §4. Correct.
- `towards: false`; this is not the block's last lesson. Correct. The cosmology callout's claims are correct.

## Licensing and AI terms
- No sentence copied. Closest: page "Average velocity is the displacement divided by the time it took" vs Siyavula "Average velocity is the change in position of a body divided by the time it took for the displacement to occur" (short definitional phrase, rewritten); page "we treat each direction separately" vs MIT "by treating each direction independently" (short standard phrase). Both fine.
- Worked examples (train with a stop, cyclist, tram, drone) and quiz questions are the page's own; Siyavula's WE1 (James, 2 km out and back in 30 min each) and Exercise 21.3 (Bongani, Bridget, rabbit at 120 km/h) are different in numbers and setting. The round-trip idea is standard.
- All figures are generated (Plot, VectorDiagram). No Siyavula logo or "Everything Science" branding. MIT material used carries no "All rights reserved" notice (slide 1 of Lecture 4 and Ch. 4/5 checked; the notice in the lecture PDF is on slide 3, not used). No NASA or ESO material. No forbidden source cited or used.

## Notes
- Calcs: every entry has `source: {cite, at}` and the page's own numbers are marked "(the numbers are the page's own)"; `kmh-factor` is a standard factor and correctly not so marked. `drone-speed`, `drone-path`, `quiz-boat` cite reading4 Sec. 5.1 for Pythagoras, which Sec. 5.1 does not show (it is lesson 0.8's method); minor (info).
- The `kmh-factor` `at` repeats the weak WE1 citation (finding 2).

## Resolution (2026-11-20, by the page author)
1. (error) Train "Check" step now reads "The average speed (48 km/h) is lower than both leg speeds (54 and 72 km/h), as it should be, because it includes the 20 minutes of standing still." Calcs `train-check` `where` and `shown` updated to match.
2. (warning) km/h to m/s formula now cites `Sec. 21.3, Worked example 1 (unit conversion) and Exercise 21.3 (km/h to m/s); the factor 1/3.6 is worked out here`. Calcs `kmh-factor` source says the factor itself is the page's own working, not printed in the source.
3. (warning) "The sign of a velocity" now says that along a line the velocity is written as a signed number v without an arrow (strictly the component v_x), and that in two dimensions v without an arrow is the speed, as in lesson 0.8.
4. (info) Average velocity paragraph no longer presents the arrow form as recalled: it recalls the displacement from lesson 1.1 in words and says it is "written here with arrows" to show it is a vector.
5. (info) Callout now says "with d its distance (Guth uses the letter r for it)"; plain text, so no new symbol meaning was needed.
6. (info) No change: the `at` already says "applied to average velocities", and for the drone both agree.
Other info items: quiz 5 now uses its own numbers (8.0 m/s east, 6.0 m/s north, speed 10 m/s, distractors 2.0, 14, 48), no longer repeating lesson 0.8's quiz; the explanation's wrong sum (14 m/s) has its own calcs entry `quiz-boat-sum`; `quiz-boat` source notes Pythagoras comes from lesson 0.8, not Sec. 5.1. The slope of a straight line is now credited to lesson 0.5 instead of 0.10. Coverage notes (path dependence, t vs Δt) left as they are: minor at this level, and implicit in the round trips and the limit section. Calcs `drone-speed` and `drone-path` sources now say Pythagoras comes from lesson 0.8, not Sec. 5.1.
Checks: `pytest tests/calc -k speed-and-velocity` 40 passed; `content:check` reports nothing for this page.
