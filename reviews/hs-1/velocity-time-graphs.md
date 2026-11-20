---
page: content/year-0/hs-1/velocity-time-graphs.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read; CC BY footer present, "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"; listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ and its PDF mit8_01scs22_chapter4.pdf (read; Secs. 4.4, 4.5, Eqs. (4.3.22)–(4.4.9); no "rights reserved", "courtesy" or "excluded" notice in the text)
verdict: pass-with-notes
---

# Review: Velocity–time graphs

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Coverage, "The slope is the acceleration" (one sentence on curved graphs) | Siyavula 21.6: "the tangent of a velocity vs. time graph gives the instantaneous acceleration"; MIT 4.4.2, Fig. 4.7 | The tangent to a curved v–t graph and the area under a curved v–t graph are mentioned only in passing (one sentence plus the limit formula); no example | At VWO level, reading the slope of a tangent to a curved v,t-graph and estimating the area under a curved graph (counting squares or strips) are standard exam skills. Add a short example (e.g. a curved v–t graph with a drawn tangent, and an area estimate by squares), or say explicitly that lesson 0.10's strips and lesson 1.4's sprinter example cover it. |
| 2 | info | Formula "Displacement as the area of the trapezium", `at="Sec. 4.5.2, Eqs. (4.4.5) and (4.4.8)"` | Eq. (4.4.8): Area = (v₀ + ½at)t = v_ave t | ½(v_i + v_f)t | Same quantity (v₀ + ½at = ½(v_i + v_f) with v_f = v₀ + at), but 4.4.8 is not written in this form. Optional: "(4.4.8), with v₀ + ½at written as ½(v_i + v_f)". |
| 3 | info | All formulas | MIT writes v₀ and v(t); Siyavula writes \vec v_i, \vec v_f and m·s⁻¹ | v_i, v_f without arrows, m/s | Site notation (scalar along one line, as in lessons 1.3 and 1.4). No change needed. |
| 4 | info | Formula "Instantaneous acceleration" | MIT Eq. (4.3.25) | Same formula, same citation as in lesson 1.4 | Correct; it repeats lesson 1.4 word for word. Could say "(lesson 1.4)" instead of repeating, but harmless. |
| 5 | info | "Towards cosmology" callout | (no cited source) | "For most of cosmic history gravity slowed the expansion ... for the last several billion years ... speeding up" | Correct and standard (deceleration until roughly 5–6 billion years ago, i.e. a little over half of the 13.8 billion years). "Most" is only just true; "for the first eight billion years or so" would be more precise. The slope/area reading for a galaxy at a fixed comoving position is correct (dv/dt ∝ ä; ∫v dt = growth of proper distance). |
| 6 | info | Worked example "A remote-controlled car" | Siyavula Worked example 4 (truck): triangle 0–5 s, rectangle 5–12 s, triangle above 12–14 s, triangle below 14–15 s, distance 43 m, displacement 41 m | Triangle, rectangle, a straight line through zero at 14 s, reversing at constant speed, triangle; 34 m and 10 m | Same type of problem (it is the standard one), different numbers, shape and extra stages (constant reverse speed, acceleration through zero). Not a copy. The calcs file honestly points to WE4 as the model with "(the numbers are the page's own)". |
| 7 | info | Worked example "A tram leaving a stop" | (page's own) | 4.0 → 16 m/s from 2.0 s to 10 s | Lesson 1.4 already has "A tram leaves a stop ... 3.0 m/s to 15 m/s in 6.0 s". Not wrong, but nearly the same example twice in a row; another vehicle or a reading from a non-zero start time on a drawn graph would add more. |

## Formulas and citations
- `a = Δv/Δt = (v_f − v_i)/(t_f − t_i)`, cite `mit` (Siyavula 21.6) at "21.6, Motion at constant acceleration": present there (taxi example, a = (15 − 5)/(3 − 1) = 5 m·s⁻²), and earlier in "Stationary Object" with the statement that the gradient of the v–t graph gives the (average) acceleration. Correct.
- Instantaneous acceleration, cite `reading1` at "Sec. 4.4.2, Eq. (4.3.25)": matches Eq. (4.3.25) exactly (MIT's equation numbering in Ch. 4 lags the section number; the page cites the printed number, which is right).
- "Δx = area between the velocity–time graph and the time axis", cite `mit` at "21.6, Motion at constant velocity": Siyavula states "The area under the velocity vs. time graph gives the displacement" (Stationary Object) and computes Δx = area = 100 × (−1) = −100 m in Motion at constant velocity; WE4 uses "the area between the velocity vs. time graph and the time axis". Supported, including the negative sign below the axis.
- Trapezium formula, `reading1` Sec. 4.5.2, Eqs. (4.4.5), (4.4.8): Eq. (4.4.5) is exactly the first form (A₁ = v₀t, A₂ = ½(v − v₀)t, "a trapezoid, formed from a rectangle ... and a triangle"); second form equivalent, see table row 2.
- `Δx = v_i t + ½at²`, Eq. (4.4.6): matches.
- `Δv = a t`, Sec. 4.5.1, Eq. (4.4.4): matches (Area(a(t), t) = at = v(t) − v₀ = Δv). Siyavula's "Velocity from acceleration vs. time graphs" box says the same.
- `reading1.location` ("Sections 4.4 ... and 4.5 ...") matches the PDF's section titles.
- Both sources are §2.0 sources; no forbidden source is cited or used.

## Arithmetic and answer checks
All recomputed independently:
- Tram: Δv = 12 m/s, Δt = 8.0 s, a = 1.5 m/s²; check 1.5 × 8.0 = 12. Correct.
- Car: a(12–16 s) = −4.0/4.0 = −1.0 m/s²; v = 0 at 12 + 2.0/1.0 = 14 s. Areas above: 4.0 + 16 + 2.0 = 22 m; below: 2.0 + 8.0 + 2.0 = 12 m; displacement 10 m, distance 34 m. Correct.
- Car velocity Plot expression: pieces 0.5t, 2, 2 − (t − 12), −2, −2 + (t − 20); continuous, zero at 14 s and 22 s. Matches the text.
- Car position Plot expression: 0.25t², 4 + 2(t − 4), 20 + 2u − 0.5u², 20 − 2(t − 16), 12 − 2u + 0.5u²; continuous at 4, 12, 16, 20 s (4, 20, 20, 12 m), maximum 22 m at 14 s, 10 m at 22 s; its derivative is the velocity expression. Text values (4.0, 20, 22, 20, 12, 10 m) correct.
- Bus: v_f = 6.0 + 0.50 × 8.0 = 10 m/s; ½(6.0 + 10) × 8.0 = 64 m; 48 + 16 = 64 m; Δv = 4.0 m/s. Correct.
- Lift (lesson 1.3: 2.0 m/s for 6.0 s, down at 3.0 m/s over 12/3.0 = 4.0 s): +12 m and −12 m, net zero. Correct and consistent with lesson 1.3 (the 4.0 s is not restated as 12/3.0 here; info only).
- Quiz 1: answer B correct (horizontal line, slope 0; 40 m area); A, C, D wrong.
- Quiz 2: (6.0 − 18)/4.0 = −3.0 m/s²; answer B correct; others wrong.
- Quiz 3: answer B correct; "back at its starting point" and "acceleration zero" are not implied; "hits something" is not implied. Explanation true.
- Quiz 4: 30 − 10 = 20 m, 30 + 10 = 40 m; answer B correct.
- Quiz 5: ½(3.0 + 9.0) × 4.0 = 24 m; answer B correct (12, 36, 48 are the rectangle-only and wrong-height distractors).
- Flashcards: all five true.
- Calcs file `calcs/hs-1/velocity-time-graphs.yaml`: every number on the page has an entry (x(4 s) = 4.0 m is the `car-tri1` value). Every entry has `source: {cite, at}` and the marker "(the numbers are the page's own)"; the cited places really are where the method comes from (Siyavula constant velocity / constant acceleration / WE4; MIT Eqs. (4.4.4)–(4.4.8)), so the attribution is honest. The Python suite (`pytest tests`) passes (9016 passed). `content:check` reports nothing for this page except the missing review file.

## Only earlier terms
- Velocity with sign, positive direction, displacement vs distance: lessons 1.1, 1.2. Uniform motion: lesson 1.2. Slope, tangent, secant, limit, area under a v–t graph, strips: lessons 0.5, 0.10, 1.3. Average and instantaneous acceleration, m/s², v_f = v_i + aΔt, same/opposite signs: lesson 1.4. The lift: lesson 1.3. All introduced before use.
- "Trapezium" (summary, quiz 5 "parallel sides"): used in lesson 0.10 without definition; standard school geometry, and this page explains it as rectangle + triangle. Fine.
- "Parabola"-like "bending upwards/downwards": plain words, fine. "Supernovae" is explained in the callout. "Expansion of the universe": lesson 0.11.
- Lesson 1.6 (`constant-acceleration`) is referred to forward only, as "the next lesson collects these"; nothing is used from it.
- **Builds on lesson 0.10, does not contradict it:** 0.10 gave "displacement = area under the v–t graph", negative area below the axis, distance as the sum of areas, triangles and trapezia, and the slope of the v–t graph as acceleration. This page cites "Lesson 0.10 showed the other half of the story" and extends it (mixed areas, constant-acceleration trapezium, a–t graph, v–t ↔ x–t sketching). Consistent wording and signs.

## Coverage
- §4 row 1.5 ("Velocity–time graphs", leadsTo `8-01/acceleration-1d`): slope = acceleration, area = displacement, area below the axis, constant acceleration line, trapezium, a–t graph area, sketching x–t from v–t and back. All present.
- Missing at VWO level: a worked tangent on a curved v–t graph and an area estimate under a curved graph (row 1 above). Worth adding or pointing to.
- Equations of motion are left to lesson 1.6, as planned. No PhET sim is planned for 1.5; none used.

## Where this leads
- `leadsTo` 8.01 Lecture 2 → `content/year-1/8.01/acceleration-1d.mdx` ("Acceleration in one dimension"), which derives v = v₀ + at and x = x₀ + v₀t + ½at² from areas under a(t) and v(t) (rectangle + triangle) and then by integration. The `why` text is accurate. Matches the §4 row.
- `towards: false` is right: the block's "Towards the universe" lesson is 1.11.

## Licensing and AI terms
- No copied sentences found. Closest: MIT "The region under the velocity vs. time curve is a trapezoid, formed from a rectangle with area A1 = v0 t, and a triangle" vs page "The area under that line is a trapezium. Split it into a rectangle of height v_i and a triangle on top": rewritten. Siyavula "Just as we used velocity vs. time graphs to find displacement, we can use acceleration vs. time graphs to find the velocity" vs page "One graph further, the same pattern repeats": rewritten.
- No figures from either source: all three graphs are `<Plot>`s generated from formulas.
- Worked examples and quiz questions are the page's own (see rows 6 and 7). None matches Siyavula's Exercises 21.5/21.6 (Vivian, Thandi, parked car, bus at 12 m/s for 6 s, athlete at 1 m/s²) or MIT's Examples 4.1–4.3.
- No Siyavula logo, brand or "Everything Science"; Siyavula appears only in the source title.
- MIT Ch. 4 has no "excluded from our Creative Commons license" or "All rights reserved" notice.
- No NASA or ESO material; no forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used. No em dashes.

## Notes
- Good: the page warns against reading a v–t graph as an x–t graph, says explicitly that at the turning point the velocity is zero but the acceleration is not, and notes that a real lift's jumps are short steep slopes.
- Not verified: the rendered page in a browser (label placement was left to `content:check`, which passes for this page).

## Resolution (2026-11-20, by the page author)
1. (warning) Added a "Curved graphs" paragraph and a worked example "An electric scooter pulling away" at the end of "The area is the displacement": a `<Plot>` of the page's own model v = 3.0√t with the tangent at t = 4.0 s drawn dashed; the slope is read from two points on the tangent ((9.0 − 3.0)/8.0 = 0.75 m/s²) and the area over 0–8.0 s is estimated with four 2.0 s midpoint strips (2.0 × (3.0 + 5.2 + 6.7 + 7.9) ≈ 46 m; exact 45 m). The slope section now points forward to it. New calcs entries `scooter-*` (including `deriv` and `integrate` checks of the model).
2. (info) Trapezium citation now reads "Sec. 4.5.2, Eq. (4.4.5); second form Eq. (4.4.8), with v₀ + ½at written as ½(v_i + v_f)".
3. (info) No change needed (site notation).
4. (info) Kept: repeating the formula with its own citation lets the page stand on its own.
5. (info) Callout now says "For roughly the first eight billion years gravity slowed the expansion"; added a `kind: fact` calcs entry `cosmo-deceleration`.
6. (info) No change needed.
7. (info) Replaced the tram by "A train leaving a station": 5.0 m/s at t = 4.0 s to 14 m/s at t = 16 s, a = 9.0/12 = 0.75 m/s²; calcs `tram-*` entries replaced by `train-*`.

Checks: `pytest tests/calc -k velocity-time-graphs` 47 passed; `content:check` reports nothing for this page (its 4 errors are symbol meanings of projectile-motion). Status set to reviewed.
