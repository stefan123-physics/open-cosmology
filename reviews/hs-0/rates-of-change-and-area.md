---
page: content/year-0/hs-0/rates-of-change-and-area.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-02 (read; 5.2 Average gradient, incl. "Gradient at a single point on a curve", Worked examples 7 and 8, Textbook Exercise 5.8; footer: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"; no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-12/differential-calculus/06-differential-calculus-01 (read; 6.1 Limits, subsections Achilles, Limits, Notation, Gradient at a point, Worked examples 1 to 6, Textbook Exercises 6.1 and 6.2; same CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read; 21.6 Description of motion, subsections Stationary object, Motion at constant velocity, Motion at constant acceleration (taxi), Summary of graphs, Worked examples; same CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-05 (read; 21.5 Instantaneous velocity and speed; same CC BY footer)
  - docs/siyavula-licences.tsv (all four URLs listed as CCBY)
  - calcs/hs-0/rates-of-change-and-area.yaml (read; `npm run calc:test -- -k rates-of-change`: 15 passed)
  - content/year-0/hs-0/ lessons 0.1 to 0.9 (searched for earlier terms), content/year-0/hs-0/_course.json
  - content/year-1/18.01/derivative-as-slope.mdx, content/year-1/18.01/definite-integrals.mdx (leadsTo targets: lecture 1 and lecture 18, checked)
  - public/phet/manifest.json (calculus-grapher 1.1.3 present)
  - docs/HIGHSCHOOL-PLAN.md §4, Block 0 row 0.10 and Block 1 rows (OpenStax sources there ignored, not opened)
verdict: pass-with-notes
---

# Review: Rates of change and area under a graph

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "The rate at one instant" (last sentence), Summary bullet 3, flashcard 3, quiz 2 distractor | 21.6 defines acceleration as the rate of change of velocity (21.4) before using "gradient of a v–t graph gives the acceleration" | Uses "acceleration" as a learnable fact (flashcard "Slope of a velocity–time graph: acceleration") without ever saying what acceleration is. No earlier lesson defines it (0.8 only lists it as a vector; 0.4 mentions it only in a `leadsTo` reason). It is defined in Lesson 1.4 (planned). | Add a one-clause gloss on first use, e.g. "the acceleration (the rate of change of velocity, Lesson 1.4)". Borderline error under the "only earlier terms" rule; judged a warning because the lesson is explicitly a preview of Block 1. |
| 2 | warning | "Area under a velocity–time graph" | 21.6 Worked example (car, 0 to 15 s) explains that area below the time axis counts as negative displacement, so distance (43 m) and displacement (41 m) differ | The formula says "displacement = area" and the body never says that area below the axis counts negative; only flashcard 4 hints "(distance travelled, if the velocity stays positive)". A flashcard should not carry content the text never teaches. | Add one or two sentences: where the velocity is negative the graph lies below the axis and that area counts as negative displacement; the distance adds the areas without signs. |
| 3 | warning | "Area under a velocity–time graph", sentence "v = 1.6 t m/s (the slope of x = 0.80 t² at each moment, as the table above shows at t = 2.0 s)" | 5.2 Worked example 7 shows, for g(x) = x², that the average gradient is 2a + h and tends to 2a at every point | The general result v = 1.6 t is asserted; the table supports it only at one instant (t = 2.0 s). A beginner cannot see why it holds at every t. | Either show the one-line algebra (average velocity from t to t + h is 1.6 t + 0.8 h, which tends to 1.6 t), or say plainly "the same calculation at any other time gives 1.6 t". |
| 4 | warning | Formula "Area under a velocity–time graph", `at="Sec. 21.6, Description of motion, Graphs"` | 21.6 has no subsection named "Graphs"; the statement "The area under the velocity vs. time graph gives the displacement" is in subsection "Stationary Object" and is used again in "Motion at constant velocity" and the Worked examples | `at` names a non-existent subsection | `at="Sec. 21.6, Stationary object and Motion at constant velocity"` (the calcs entry `triangle-area` has the same wording; change both). |
| 5 | warning | calcs file | Every number on the page must be in the calcs file | Missing: x(2.0) = 3.2 m (stated under the table), x(2.1) = 3.528 m and x(2.01) = 3.23208 m (table column 2; only the averages 3.28 and 3.208 are entries), and 6.4 (worked example numerator). All are correct (see below). | Add entries for these four numbers. |
| 6 | info | Formula "Average rate of change" | 5.2: gradient (y_A − y_C)/(x_A − x_C), and (f(a+h) − f(a))/h | (x(b) − x(a))/(b − a) with time as the variable | Same physics in time notation; acceptable without comment. |
| 7 | info | "The rate at one instant" | 5.2 Worked example 7 substitutes h = 0 ("When Q overlaps with P, h = 0 and the gradient is given by 2a"); 6.1 corrects this ("If Q lies on P, then h = 0 and the formula is undefined") | "You cannot simply put h = 0, because that gives 0/0" | Page follows 6.1, which is the correct view. No change. |
| 8 | info | Table | (page's own) | Values like 3.2032008 m carry far more figures than x = 0.80 t² (two significant figures) justifies, right after Lesson 0.3 | Optional: say the coefficient is treated as exact here so the trend is visible. |

## Formulas and citations
- **Average rate of change** (`cite="mit"` = 5.2, `at="Sec. 5.2, Average gradient"`): 5.2 defines the average gradient between two points as the gradient of the straight line through them and gives (y_Q − y_P)/(x_Q − x_P) = (f(a+h) − f(a))/h. Supports the page. Correct.
- **Rate of change at one instant** (`reading1` = 6.1, `at="Sec. 6.1, Gradient at a point"`): 6.1 subsection "Gradient at a point" has "Gradient at point P = lim_{h→0} (f(a+h) − f(a))/h". Exact match apart from the function letter. Correct. The word "secant" is defined in this subsection too, so "secant" is supported.
- **Displacement = area under the v–t graph** (`reading2` = 21.6): statement supported, but the `at` location is imprecise (row 4).
- `reading3` (21.5 Instantaneous velocity) is listed but never cited by a `<Formula>`; it does support the page's "speedometer / velocity at this moment" paragraph. Fine as a reading.
- "On a position–time graph the slope of the tangent is the velocity; on a velocity–time graph it is the acceleration": 21.6 (Stationary object) says "the tangent of a position vs. time graph gives the instantaneous velocity" and "the tangent of a velocity vs. time graph gives the instantaneous acceleration". Supported (but see row 1 for the undefined term).
- Thin strips / integral and the fundamental theorem of calculus: not in any cited source; standard and correctly stated at this level ("slope and area undo each other").
- PhET Calculus Grapher: the claim that it shows the slope as a second graph and the area under the curve is correct (Derivative and Integral screens). Sim present in `public/phet/manifest.json` (1.1.3).
- Cosmology callout: H = (slope of size)/(size) = ȧ/a is correct; "Hubble constant from lessons 0.4 and 0.5" is true (rearranging-formulas.mdx line 173, graphs-and-slope.mdx line 173). "Adding up time along the way gives the age of the universe" is vague but not wrong. "Size of the universe" for the scale factor is a fair simplification at this level (info).

## Arithmetic and answer checks
All recomputed by hand, independently of the calcs file:
- Worked example: x(1.0) = 0.80, x(3.0) = 7.2, (7.2 − 0.80)/2.0 = 6.4/2.0 = 3.2 m/s. Correct.
- Table at a = 2.0, x(2.0) = 3.2: h = 1.0: x = 7.2, (7.2 − 3.2)/1.0 = 4.0; h = 0.1: x = 0.8·4.41 = 3.528, 0.328/0.1 = 3.28; h = 0.01: x = 0.8·4.0401 = 3.23208, 0.03208/0.01 = 3.208; h = 0.001: x = 0.8·4.004001 = 3.2032008, 0.0032008/0.001 = 3.2008. Each average = 3.2 + 0.8h, so the limit 3.2 m/s is exact. Correct.
- v = 1.6 t (derivative of 0.8 t²); v(3.0) = 4.8 m/s; triangle ½·3.0·4.8 = 7.2 m = x(3.0). Correct. Second Plot caption repeats these numbers. Correct.
- Quiz 1: (34 − 10)/(6 − 2) = 6 per second; marked choice 1 = "6 per second". Distractors 4 (24/6), 8.5 (34/4), 24 (the change only) are wrong. Correct.
- Quiz 2: marked "The velocity at that moment". Correct; others wrong.
- Quiz 3: 5.0 × 8.0 = 40 m, marked choice 1. Distractors 0.63 (5/8), 13 (5 + 8), "40 m/s" (wrong unit and meaning) are wrong. Correct.
- Quiz 4: ½ × 10 × 20 = 100 m, marked choice 1. Correct; 200 m (rectangle) and 20, 400 wrong.
- Quiz 5: marked choice 1 is right; "curve becomes straight", "slope becomes zero", "always equal" are wrong. Explanation true.
- Flashcards 1 to 5: all true (flashcard 4 relies on content not in the body, row 2).
- calcs file: 15 entries, all pass `calc:test`; every entry has `source: {cite, at}`. The cited sections do cover the methods used (average gradient for the worked example and quiz 1; gradient at a point for the table; area under a v–t graph for the triangle and quiz 3–4). Missing numbers: row 5.
- `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Only earlier terms
- Introduced on the page itself before use: function notation x(t) ("read x of t"), average rate of change, secant, tangent (line), limit, area under a graph, integral. Fine.
- From earlier lessons: slope (0.5), quadratic x = 0.80 t² (0.6), Hubble constant (0.4, 0.5), displacement (0.8, `hs-vectors`), vector/velocity as a word (0.8). 
- **velocity / average velocity**: defined here in passing ("For a position this average rate is the average velocity"; "the slope of the tangent is the velocity"). Acceptable preview; formally defined in Lessons 1.2 and 1.3 (planned, rows in §4).
- **acceleration**: used without any definition, here or earlier (row 1, warning). Defined in Lesson 1.4 (planned).
- **trapezium**: standard school geometry, not introduced; acceptable.
- "tangent" also means the trigonometric ratio tan in Lesson 0.7; the page does not mention the two uses. Info only (a short remark that the slope of a tangent line equals tan of its angle with the axis would tie the two together).

## Coverage
§4 row 0.10 lists the topic "Rates of change and area under a graph" and PhET `calculus-grapher`. Covered: average rate (secant slope), instantaneous rate (tangent slope, as a limit), slope of x–t gives v and of v–t gives a, area under v–t as displacement (rectangle, triangle), strips and the integral, the inverse link. PhET included.
Left out:
- Signed area / distance versus displacement (row 2): matters at VWO level, and Siyavula 21.6 treats it.
- Reading the slope of a tangent drawn by hand on a measured curve (draw the tangent, pick two far-apart points on it): a standard VWO graph skill (the "tangent method"). Not essential here because Block 1 (1.3, 1.5) will use it, but a sentence would help (warning-free; info).
- Area estimated by counting squares on a curved graph: the strips paragraph covers the idea; fine at this level (info).

## Where this leads
- `18.01` lecture 1 → content/year-1/18.01/derivative-as-slope.mdx ("The derivative: slope of the tangent line and rate of change"). Same topic. Correct.
- `18.01` lecture 18 → content/year-1/18.01/definite-integrals.mdx ("Definite integrals and Riemann sums"). Same topic. Correct.
- `towards: false` is right: the block's last lesson is 0.11 `towards-the-universe-scales`.

## Licensing and AI terms
- All four cited Siyavula pages show the CC BY footer (also listed CCBY in docs/siyavula-licences.tsv). No "All rights reserved" text on them.
- No copied sentences found. Closest pair: Siyavula 5.2 "The average gradient between any two points on a curve is the gradient of the straight line passing through the two points" vs page "On the graph this is the slope of the straight line through the two points, a line called a secant": a standard statement in different words. 21.6 "the tangent of a position vs. time graph gives the instantaneous velocity" vs page "On a position–time graph the slope of the tangent is the velocity": standard fact, own wording.
- Examples are not Siyavula's: the ball x = 0.80 t² (1.0 to 3.0 s, average 3.2 m/s; tangent at 2.0 s) differs from g(x) = x² between 2 and 5 (7), f(x) = −2x² between 1 and 3 (−8), y = −2x² − 5, g(x) = 3x² at −1, f(x) = 2x² − 5x at 2. The structure (an object starting from rest with x ∝ t²) resembles the 21.6 taxi (2.5/10/22.5/40 m, i.e. x = 2.5 t²), but numbers, method (limit table, triangle recovering x) and question differ. Quiz numbers (10→34 over 2→6 s; 5.0 m/s for 8.0 s; 0→20 m/s in 10 s) do not match the 21.6 areas (10, 28, 4, −1 m; total 43/41 m) or any Siyavula exercise read.
- Both graphs are `<Plot>`s generated from formulas; no figure from any source.
- No Siyavula logo, brand or "Everything Maths/Science" branding; source titles are attribution. The Siyavula credit is printed site-wide by `components/Credit.tsx` (HighSchoolCredit).
- No MIT, NASA or ESO material used. No forbidden source cited or read.
- PhET attribution printed by `components/PhET.tsx`; CC BY-NC 4.0, site non-commercial.

## Notes
- Overall the physics and maths are correct and every number checks; the page improves on Siyavula 5.2 by not setting h = 0. No errors found. Rows 1 to 5 are warnings to fix before `status: reviewed`.
- `<PhET title="Calculus Grapher" />` has no `id`; the sim is taken from frontmatter `phet: calculus-grapher`, as in graphs-and-slope.mdx. Fine.

## Resolution (2026-11-20, by the page author)

- 1: "acceleration" is now glossed on first use: the rate at which the velocity changes, treated in full in Block 1.
- 2: new paragraph "Below the axis": area below the time axis counts as negative; displacement = area above − area below, distance adds both. Own example: 3.0 m/s for 4.0 s then −2.0 m/s for 3.0 s gives displacement 6.0 m and distance 18 m (calcs `trolley-displacement`, `trolley-distance`).
- 3: the page now shows the algebra at any time t: (0.80(t + h)² − 0.80t²)/h = 1.6t + 0.80h → 1.6t, with the check 3.2 + 0.08 = 3.28 m/s against the table (calcs `general-slope-check`).
- 4: the area formula and the calcs entry `triangle-area` now cite Sec. 21.6, Motion at constant velocity.
- 5: new calcs entries `ball-x2`, `ball-x21`, `ball-x201`, `ball-rise`.
- Info: the many digits in the table are exact values of the formula, shown so the limit can be seen; reading a slope from a hand-drawn tangent is left for Block 1.

`npm run calc:test` (22 entries for this page) and `npm run content:check` pass.
