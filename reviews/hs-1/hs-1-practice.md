---
page: content/year-0/hs-1/hs-1-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-07 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-04 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/vertical-projectile-motion-in-one-dimension/03-vertical-projectile-motion-in-one-dimension-02 (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter5.pdf (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter6.pdf (read, pdftotext)
verdict: needs-changes
---

# Review: Block 1 practice set: motion

## Blind solve

### My answers (written before opening the page, its hints, solutions, answer boxes or calcs file)

I worked from a copy that had only the statements. g = 9.81 m/s².

- p1-a: 15 + 24 = 39 m
- p1-b: −3.0 − 6.0 = −9.0 m
- p2-a: 3000 m / 1080 s = 2.78 m/s
- p2-b: +1800 m / 1080 s = +1.67 m/s (north)
- p3-a: (5.0 − 14)/4.0 = −2.25 m/s
- p3-b: (5.0 − 2.0)/10 = +0.30 m/s
- p3-c: (12 + 9.0)/10 = 2.1 m/s
- p4-a: −6.0 − 8.0 = −14 m/s
- p4-b: −14/0.040 = −350 m/s²
- p5-a: (−2.5 − 7.5)/5.0 = −2.0 m/s²
- p5-b: ½(7.5 − 2.5) × 5.0 = +12.5 m
- p5-c: it stops at 3.75 s; 14.0625 + 1.5625 = 15.625 m (about 15.6 m)
- p6-a: a = (vf² − vi²)/(2 dx)
- p6-b: (900 − 144)/840 = 0.90 m/s²
- p6-c: (30 − 12)/0.90 = 20 s
- p7-a: 11²/(2 × 9.81) = 6.17 m
- p7-b: 4.905 t² − 11 t − 6.0 = 0, t = (11 + √238.72)/9.81 = 2.70 s (2.696)
- p7-c: √(121 + 2 × 9.81 × 6.0) = 15.45 m/s, i.e. 15.5 m/s
- p8-a: 2 × 30 sin 25° / 9.81 = 2.585 s, i.e. 2.58 s
- p8-b: 30² sin 50° / 9.81 = 70.3 m
- p9-a: √(3.2² + 1.8²) = 3.67 m/s
- p9-b: 1.8 × 48/3.2 = 27 m
- p10-a: 2π × 6.0/4.0 = 9.42 m/s
- p10-b: 2π/4.0 = 1.57 rad/s
- p10-c: 9.4248²/6.0 = 14.8 m/s²
- p11-a: 2.25e11/3.00e8 = 750 s = 12.5 min
- p11-b: 6.0 × 9.46e15 = 5.68e16 m

### Comparison with the page (one line per answer id)

- p1-a: page 39 (5 %), agrees.
- p1-b: page −9 (5 %), agrees.
- p2-a: page 2.78, agrees.
- p2-b: page 1.67, agrees.
- p3-a: page −2.25, agrees.
- p3-b: page 0.3, agrees.
- p3-c: page 2.1, agrees.
- p4-a: page −14, agrees.
- p4-b: page −350, agrees.
- p5-a: page −2, agrees.
- p5-b: page 12.5, agrees.
- p5-c: page 15.6, agrees (exact 15.625, inside the 5 % tolerance).
- p6-a: page `(vf^2 - vi^2)/(2*dx)`, the same formula.
- p6-b: page 0.9, agrees.
- p6-c: page 20, agrees.
- p7-a: page 6.17, agrees.
- p7-b: page 2.7, agrees.
- p7-c: page 15.5, agrees.
- p8-a: page 2.58, agrees.
- p8-b: page 70.3, agrees.
- p9-a: page 3.67, agrees.
- p9-b: page 27, agrees.
- p10-a: page 9.42, agrees.
- p10-b: page 1.57, agrees.
- p10-c: page 14.8, agrees.
- p11-a: page 12.5, agrees.
- p11-b: page 5.68e16, agrees.

The page and I agree on every answer. `npm run calc:test` for this file: 69 passed.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | calcs `p9-a`, `p9-angle`, `p9-b`, `p9-path`, `p9-path-speed` (cite `reading1`, "21.2, Reference frame (relative velocity …)") | Siyavula 21.2 covers position, frames of reference, distance and displacement. It has no relative velocity, no adding of velocities and no boat in a current (read 2026-11-20). | The calcs file says 21.2 supports a relative-velocity problem. | Cite a source that covers adding velocities, e.g. MIT 8.01SC Ch. 5 Sec. 5.1 (vector description of motion in a plane) for the components, or whatever source lesson 1.9 (`relative-velocity`) cites for v_BG = v_BW + v_WG. Add that source to `readings` if needed. |
| 2 | warning | Problem 9 | Lesson 1.9's worked example "A boat crossing a river" (80 m wide, 1.5 m/s current, 4.0 m/s boat) asks for the speed relative to the bank, the angle, the crossing time and the drift, and checks √(30² + 80²)/20. | Problem 9 asks the same questions in the same order and uses the same check (√(27² + 48²)/15). Only the numbers differ. | Give it a twist the lesson does not have: for example, ask at what angle upstream the boat must aim to land straight opposite, or ask for the crossing time when it does. |
| 3 | warning | Problem 5 | Lesson 1.6's worked example "Two answers: a ball rolled up a ramp" uses the same setting and the same acceleration, −2.0 m/s². | Same setting and acceleration. The questions differ (displacement and distance rather than the time to reach 5.0 m). | Change the setting or the acceleration (for example a cart pushed up a slope, or a puck on an icy ramp) so the problem does not echo the lesson. |
| 4 | info | Problem 7 | Siyavula Gr 12 3.2 Worked example 4: a ball tossed up at 4.9 m/s from a 20 m balcony; time to the ground and impact velocity. Lesson 1.7 "A stone thrown up from a cliff" does the same with the same quadratic and checks. | A ball thrown up at 11 m/s from a 6.0 m balcony: maximum height, time to the ground, impact speed. | The numbers and the wording are our own and this is a standard situation, so it is acceptable. A different setting (a fountain jet, a rescue flare) would make it more clearly independent. |
| 5 | info | Problem 8 | Lesson 1.8 "A free kick" (18 m/s, 35°): components, time of flight and range, checked with the range formula. MIT Example 5.1 is different (a stone at 45° from 2 m). | Golf drive at 30 m/s, 25°, with the same steps and the same range-formula check. | Acceptable as practice. Optionally add a part the lesson does not ask, such as the 65° shot with the same range. |
| 6 | info | calcs `p2-kmh`, `p10-kmh` ("21.3, Worked example 1 (unit conversion)") | Worked example 1 converts km to m and minutes to seconds; it does not convert m/s to km/h. | The calcs file cites it for the factor 3.6. | Cite it as "21.3, Worked example 1 (unit conversion of km and minutes)" or cite lesson 0.2's source. |
| 7 | info | calcs `p5-up`, `p5-down`, `p5-b`, `p5-c` ("21.6, Motion at constant velocity (area under the graph)") | 21.6 states the area rule under "Stationary object" and "Motion at constant velocity", and applies it to triangles in Worked example 4. | The problem has constant acceleration. | Cite "21.6, Worked example 4 (areas of triangles under a v–t graph)" instead. |
| 8 | info | calcs `p11-*` (cite `reading4`, 21.6) | 21.6 is about motion graphs. It does not mention light, the light-year or signal delays. | The calcs file cites it for distance = speed × time with light. | Acceptable as the "constant velocity" method. The light-year value would be better cited to lesson 1.11's own source. |

## Formulas and citations
- The page has no `<Formula>` elements. Every equation sits inline in the solutions, which is normal for a practice set.
- Siyavula 21.7 numbers its equations (1) v_f = v_i + at, (2) Δx = ½(v_i + v_f)t, (3) Δx = v_i t + ½at², (4) v_f² = v_i² + 2aΔx. The calcs file cites them correctly: p6-a and p6-b to Eq. 4, p6-c and p5-b-check to Eq. 2, p6-c-check to Eq. 1, p7-disc to Eq. 3.
- MIT 8.01SC Ch. 5: Eqs. (5.1.5) and (5.1.6) give v_x0 = v0 cos θ0 and v_y0 = v0 sin θ0, (5.1.16) gives the position vector, and (5.1.21) and (5.1.22) are the time to the top in Example 5.1. All are in Sec. 5.2, as cited. Ch. 6: (6.2.15) v = rω in 6.2.1; (6.4.3) to (6.4.7) in Sec. 6.4 (s = 2πr = vT, T, f, a_r = rω², a_r = v²/r). All cited correctly.
- The calcs entries do not all cite `mit` (Siyavula 21.7). Most cite the reading that fits the problem, which is better. Only the p9 citations are unsupported (row 1).
- Both MIT chapter PDFs were checked for "rights reserved" and "courtesy": neither has such a notice.

## Arithmetic and answer checks
- I recomputed every number in the solutions and checks by my own route:
  - p2: 2.78 × 3.6 = 10.0 km/h; 1800/3000 = 0.60.
  - p3: first piece 2.0 m/s. The average speed 2.1 lies between 2.0 and 2.25, which it must, as a time-weighted mean.
  - p4: 350/9.81 = 35.7 ≈ 36.
  - p5: stops at t = 3.75 s; ½ × 3.75 × 7.5 = 14.06; ½ × 1.25 × 2.5 = 1.5625; 12.5 + 2 × 1.5625 = 15.625.
  - p6: 144 + 756 = 900.
  - p7: 11/9.81 = 1.121 s; 5.5 × 1.121 = 6.17; the negative root (11 − 15.451)/9.81 = −0.454 → −0.45 s; √(2 × 12.17/9.81) = 1.575 → 1.58; 1.121 + 1.575 = 2.696; 11 − 9.81 × 2.696 = −15.45 (the page rounds it to −15.4, "the same to rounding", which is fine).
  - p8: v_x = 27.19, v_y = 12.68; 12.68/9.81 = 1.29 s; 2 × 30/9.81 = 6.12 s ("6.1"). The flight time ratio 2.585/6.12 = sin 25° = 0.42, so "less than half" is right.
  - p9: atan(1.8/3.2) = 29.4° → 29°; √(27² + 48²) = 55.07; 55.1/15 = 3.67.
  - p10: 9.42 × 3.6 = 33.9 ≈ 34 km/h; 1.5708 × 6.0 = 9.42; 1.571² × 6.0 = 14.81; 14.8/9.81 = 1.51.
  - p11: 1.50e11/3.00e8 = 500 s = 8.33 min; 1.5 × 8.33 = 12.5; 9.46e15/2.25e11 = 42 044 ≈ 42 000; c × 365.25 d = 9.4607e15 m.
- Every solution step ends with a check: units, another route, a limit or a size estimate.
- Tolerances: 5 % everywhere. None of the tempting wrong answers fall inside it: p1-a vs 9 or 24; p4-a vs −2 or 2; p5-c vs 12.5; p7-a vs 12.17; p7-b vs 2.24 (back at the balcony); p8 with g = 9.8 gives 70.4, rightly accepted. Signed boxes (p1-b, p3-a, p4-a/b, p5-a) need the minus sign, as the "How to answer" section says.
- p6-a `<Answer>`: the expr matches the solution. The `vars` keep it finite: dx ∈ [50, 500] > 0 and vf ∈ [10, 40] > vi ∈ [0, 9], so a > 0 and the train speeds up, which is physical. Each `mistakes` hint is true of its wrong formula.
- (info) The third mistake, (vf − vi)²/(2dx), differs from the answer by vi(vf − vi)/dx, which goes to zero as vi → 0. Inside vi ∈ [0, 9] the two agree only at vi = 0 exactly, so the 1e-6 comparison in `lib/answers.ts` tells them apart at every sampled point. A range of vi ∈ [2, 9] would make the separation more robust.
- Calcs coverage: every result and check number has an entry. These do not, and all are trivial: "2 m/s" (the common mistake in p4), 19.62 (= 2g, inside p7-a), 5.5 m/s (= 11/2), "3.0 m beyond its start".
- Hints: none gives a result away. Each states a method or a sign rule. The p7-b hint gives Δx = −6.0 m, which is a setup step, not the answer.

## Only earlier terms
- Problems 1 to 6 use lessons 1.1 to 1.6: distance and displacement, average speed and velocity, slopes of x–t graphs, average acceleration, slope of and area under a v–t graph, and the four equations of constant acceleration (`constant-acceleration` gives all four, including Δx = ½(v_i + v_f)Δt).
- Problem 7 uses free fall (1.7) and the quadratic formula (lesson 0.6, `quadratics-and-power-laws`; also used in 1.6 and 1.7).
- Problem 8 uses sin and cos (0.7) and the components, flight time and range formula R = v0² sin 2θ / g (1.8).
- Problem 9 uses vector addition (0.8) and relative velocity (1.9).
- Problem 10 uses period, ω = 2π/T, rad/s, v = ωr and a = v²/r = ω²r (1.10, all present).
- Problem 11 uses the light-year and 9.46 × 10¹⁵ m (1.11) and scientific notation (0.1).
- No term appears before it is introduced. `prerequisites: [towards-the-universe-light-travel-time]` is the block's last lesson, which is right for a set covering 1 to 11.

## Coverage
- All eleven lessons of Block 1 are practised, one problem each and Problem 1 for 1.1. `covers: [1 … 11]` is correct.
- Not practised:
  - frequency f = 1/T (only ω is asked);
  - Galilean relativity;
  - tangents to curved x–t graphs (instantaneous velocity);
  - the one-dimensional relative velocity of two cars or trains;
  - the maximum height of a projectile.
- At VWO level the tangent-to-a-curve skill (instantaneous velocity from an x–t graph) is a standard exam item, and adding it would be worthwhile (info). Without a generated graph that is hard to do; a `<Plot>` with a curved x(t) would allow it.
- Problem 3 describes its graph in words only. A generated `<Plot>` of the two pieces would better practise reading graphs (info).

## Where this leads
- A practice set has no `leadsTo` or `towards`, which is right.

## Licensing and AI terms
- No sentence copied from Siyavula or MIT. The problem wording is our own.
- No figures.
- Problems compared with the sources' examples and exercises:
  - Siyavula 21.2/21.3/21.4/21.6/21.7: no matching numbers or situations.
  - Siyavula Gr 12 3.2: Worked example 4 has the same type of situation as Problem 7 (a throw from a balcony), with other numbers and partly other questions (row 4).
  - MIT Example 5.1 differs from Problem 8.
- Similar to the site's own lessons: Problems 5 and 9 are close to lesson worked examples (rows 2 and 3). Problems 7 and 8 follow lesson examples step by step with new settings (rows 4 and 5).
- No Siyavula logo, brand or "Everything Science" as branding. The intro names "Siyavula's chapters" only as attribution.
- No MIT excluded or "All rights reserved" material.
- No NASA insignia or "according to NASA" phrasing.
- No ESO text.
- No forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs) is cited or used.

## Notes
- `set: 1` is forced by the schema, as the brief says. `lecture: 11` and `order: 90` place the set after lesson 1.11.
- Problem 11 is marked `optional`, its statement says so, and the intro's "Problems 1 to 10 count 10 points each, 100 in all" is consistent.
- p10 check: "riders feel it, but it is safe" is a loose claim (about 1.5 g sideways). It is harmless, but "comparable to a sharp turn on a roller coaster" or simply dropping "but it is safe" would avoid an unsupported safety statement (info).
- The p11-a check uses the Sun's distance, 1.50 × 10¹¹ m, which the problem does not give. It comes from lesson 1.11, so it is fine.

## Resolution (2026-11-20, by the page author)

1. (error) Added MIT 8.01SC Course Notes Chapter 11 "Reference Frames" (the source lesson 1.9 cites) as `reading8`. Every Problem 9 entry now cites it at Sec. 11.3, Eq. (11.3.2) (adding velocities between frames), saying that the aiming angle and crossing time are the page's own working; the component steps cite `reading6`, Ch. 5 Sec. 5.1. No p9 entry cites Siyavula 21.2 any more.
2. (warning) Problem 9 rewritten as "Landing straight opposite": a boat at 3.0 m/s through the water, a 1.8 m/s current, a river 48 m wide. (a) asks for the angle upstream to aim so the boat lands straight opposite (sin θ = 0.60, θ = 36.9°); (b) asks for the crossing time then (across component 2.4 m/s, 20 s). The check compares with aiming straight across (16 s, α = 31°, 28.8 m downstream), which lesson 1.9's worked example does not do.
3. (warning) Problem 5 is now a skateboarder coasting up a slope, velocity from +6.0 m/s to −3.0 m/s in 6.0 s: a = −1.5 m/s² (not the lesson's −2.0 m/s² ball on a ramp), stopping at 4.0 s; displacement 9.0 m, distance 15 m.
4. (info) Problem 7 kept: own numbers and wording for a standard situation, as the review accepts.
5. (info) Problem 8 kept as practice; not extended, to keep the set at ten problems of equal weight.
6. (info) `p2-kmh` and `p10-kmh` now cite "21.3, Worked example 1 (unit conversion of km and minutes)" and say the factor 3.6 is lesson 1.2's own working, not in the source.
7. (info) The Problem 5 area entries cite "21.6, Worked example 4 (areas of triangles under a v–t graph)".
8. (info) Added NASA Space Place "What Is a Light-Year?" (lesson 1.11's source) as `reading9`; `p11-b` and `p11-ly` cite it. `p11-s`, `p11-a` and `p11-sun` keep 21.6 for distance = speed × time and say honestly that applying it to light and the Sun's distance are our own / lesson 1.11's.
9. (info, arithmetic section) `p6-a` `vars` now use vi ∈ [2, 9] (calcs identity sample 0 changed to 2 as well).
10. (info, notes) "but it is safe" dropped from the p10 check; it now ends "That is about 1.5 times g."

Blind-solve note: changed answers are p5-a → −1.5, p5-b → 9 (9.0 m), p5-c → 15, p9-a → 36.9 (degrees upstream), p9-b → 20 (s). All other answers are unchanged. Checks: `pytest tests/calc -k hs-1-practice` 72 passed; `content:check` 0 errors, no warning for this page; `test:answers` 65 passed.
