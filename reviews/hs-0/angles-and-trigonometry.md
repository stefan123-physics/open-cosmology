---
page: content/year-0/hs-0/angles-and-trigonometry.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-02 (read; 5.3 Defining the trigonometric ratios; footer: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" (CC BY 3.0), with the note that embedded external videos and sims are not necessarily covered; no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-05 (read; 5.6 Special angles; same CC BY footer, no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-07 (read; 5.8 Defining ratios in the Cartesian plane; same CC BY footer, no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/functions/06-functions-05 (read; 6.6 Trigonometric functions; same CC BY footer, no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/trigonometry-part-1/05-trigonometry-part-1-04 (read for comparison only, not cited by the page; 5.5 Calculator skills; same CC BY footer)
  - https://www.stitz-zeager.com/szct07042013.pdf (read through the text extract supplied by the caller, Section 10.1, printed pp. 693–716; page numbers checked against the printed headers)
  - https://www.stitz-zeager.com/ (read; CC badge linking to creativecommons.org/l/by-nc-sa/3.0; no AI, TDM or scraping clause. The PDF itself only says the LaTeX files are "under a Creative Commons License")
  - calcs/hs-0/angles-and-trigonometry.yaml (read; `npm run calc:test -- -k angles`: 31 passed)
  - content/year-0/hs-0/powers-of-ten.mdx, units-and-si.mdx, significant-figures-and-estimates.mdx, rearranging-formulas.mdx, graphs-and-slope.mdx, quadratics-and-power-laws.mdx (earlier lessons, searched for earlier terms)
  - content/year-1/18.01/derivatives-of-sine-and-cosine.mdx (leadsTo target, course 18.01, lecture 3)
  - public/phet/manifest.json and public/phet/trig-tour_1.1.11_en.html (sim present; has Degrees/Radians strings)
  - docs/HIGHSCHOOL-PLAN.md §4, Block 0 row 0.7 (OpenStax sources there ignored, not opened)
verdict: needs-changes
---

# Review: Angles, radians and trigonometry

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Formula "Degrees and radians", `at="Sec. 10.1, pp. 701–702"` | Stitz–Zeager: the 2π-per-revolution result is on pp. 701–702, but the conversion between the systems (2π rad ↔ 360°, the factor π/180, "60° = π/3", and "1 radian … = 180°/π ≈ 57.2958°") and Equation 10.1 are on **p. 704** | Cites pp. 701–702 for 2π rad = 360° and 1 rad = 180°/π ≈ 57.3° | Wrong location. Change to `at="Sec. 10.1, p. 701 (one revolution = 2π) and p. 704, Equation 10.1"`. Fix the calcs entries `radian-degrees` (pp. 701–702 → p. 704) and `sixty-degrees` (p. 702 → p. 704, where Stitz–Zeager's own 60° → π/3 example is) in the same way. |
| 2 | warning | Formula "Sine and cosine on the unit circle", `cite="reading3" at="Sec. 5.8"` | Siyavula 5.8 defines sin θ = y/r, cos θ = x/r, tan θ = y/x for a point (x; y) at distance r from the origin, angle measured anticlockwise from the positive x-axis, all four quadrants. It has **no unit circle** and no statement (x, y) = (cos θ, sin θ) | (x, y) = (cos θ, sin θ) on the unit circle, cited to 5.8 as if stated there | The result follows from 5.8 with r = 1, but the page does not say so. Either add "(Siyavula uses a circle of any radius r: sin θ = y/r, cos θ = x/r; with r = 1 these become the coordinates)" or change the `at` to "Sec. 5.8, sin θ = y/r and cos θ = x/r, with r = 1". |
| 3 | warning | "Small angles": $\sin\theta \approx \tan\theta \approx \theta$ | No cited source has the small-angle approximation (not in Stitz–Zeager 10.1, nor in any of the four Siyavula pages) | Key result of the section, set as a stand-alone line of inline maths with no `<Formula>` and no citation | The physics is correct (checked: sin 0.10 = 0.09983, tan 0.10 = 0.10033, errors 0.17 % and 0.33 %). But it is in effect a display equation that avoids the "every display equation is a `<Formula>` with `cite`" rule. Add a §2.0 source that has it, e.g. MIT 18.01 Lecture 3 (the site's `derivatives-of-sine-and-cosine` lesson: sin θ/θ → 1, "short pieces of curves are nearly straight") or the linear-approximation section of CLP-1 Calculus (location not checked by me), and make it a `<Formula>`. |
| 4 | warning | Worked example "A ramp" (1.37 m, 3.76 m) and "Finding an angle" (36.9°) | Lesson 0.3 (significant-figures-and-estimates): in a product keep as many significant figures as the least precise factor | Inputs 4.0 m, 3.0 m, 4.0 m (two significant figures); answers given to three (1.37 m, 3.76 m, 36.9°) | Inconsistent with the block's own lesson 0.3 and with this page's quiz (4.7 m, 1.7 m to two figures). Keep 1.37 and 3.76 as intermediate values for the Pythagoras check but state the answers as "about 1.4 m" and "3.8 m", and 37°; or give the inputs to three figures (4.00 m). Update calcs. |
| 5 | warning | `source.readings[0].location: "pp. 695–706"` | Section 10.1 starts on p. 693 (degrees, p. 693–694) and runs to p. 716 (10.1.1 Circular motion starts p. 706; s = rθ is on p. 707; exercises after) | pp. 695–706 | Change to "pp. 693–707" (or the exact pages used: 701, 702, 704, 707). |
| 6 | warning | calcs `calculator-trap` (sin 30 rad) and `small-angle` (sin 0.10) cite `reading1` "Sec. 10.1 (the numbers are the page's own)"; `wheel-arc` cites "p. 701" | Stitz–Zeager 10.1 defines angles and radian measure only; sine and cosine first appear in 10.2. s = rθ is written on p. 707 (it follows from θ = s/r on p. 701) | The `at` text implies 10.1 covers the method | Not honest for the two sine entries: 10.1 has no sine and no small-angle rule. Cite the page's chosen small-angle source (row 3) for `small-angle`, and for `calculator-trap` say what it is: "standard calculator fact; the numbers are the page's own" or cite Siyavula 5.5 (Calculator skills, which tells readers to set degrees mode). `wheel-arc`: "p. 701 (θ = s/r), p. 707 (s = rθ)". The other "(the numbers are the page's own)" entries cite a section that does cover the method and are honest. |
| 7 | info | "Sine, cosine and tangent": "the ratios depend only on the angle … they are similar" | Siyavula 5.3: the ratios of similar triangles are used to define the trigonometric ratios (not spelled out further) | Spelled out and explained | Page is clearer than the source. Fine. |
| 8 | info | Special-angle table, 0° and 90° rows, "tan 90° undefined" | Siyavula 5.6 gives only 30°, 45°, 60°; 0° and 90° appear in Siyavula 5.8 ("Special angles in the Cartesian plane") | Table includes 0° and 90° | Correct values; the table has no citation of its own (a table is not a `<Formula>`). Optional: say in the text "(from Siyavula 5.6 and 5.8)". reading2 (5.6) is otherwise only cited from the calcs file. |
| 9 | info | Plot caption: cosine = sine shifted a quarter turn left; "period 2π" | Siyavula 6.6: period 360°, cos θ = sin(θ + 90°); degrees only, no radians | Same facts in radians | Correct (sin(x + π/2) = cos x). reading4 (6.6) is listed but never cited on the page; cite it in the caption or the sentence on periodicity, or remove it from `readings`. |
| 10 | info | "Finding an angle" (inverse functions) | Siyavula 5.5 uses the inverse only implicitly (tan x = 3 → 71.57°) and mentions only degrees mode; not cited | Uncited, standard and correct | Fine. Optionally add that $\sin^{-1}$ here means the inverse function, not 1/sin, a common beginner confusion. |

## Formulas and citations
- `\theta = s/r`, cite `reading1`, at "Sec. 10.1, The radian measure of θ, p. 701": Stitz–Zeager p. 701, boxed "The radian measure of θ is s/r". Correct.
- `2\pi rad = 360°, 1 rad = 180°/π ≈ 57.3°`, cite `reading1`, at pp. 701–702: physics correct; location wrong (p. 704, Equation 10.1; row 1). Stitz–Zeager writes 57.2958°; the page's 57.3° is a correct rounding.
- Trigonometric ratios, cite `mit` (Siyavula Maths Gr 10, 5.3): the three ratios are given exactly so, with hypotenuse/opposite/adjacent named as on the page. Correct.
- `(x, y) = (\cos\theta, \sin\theta)`, cite `reading3` (5.8): see row 2; follows from 5.8 with r = 1 but not stated there.
- Uncited but used: tan θ = sin θ/cos θ and sin²θ + cos²θ = 1 (derived on the page; Siyavula 5.6 exercises verify both; standard and correct), Pythagoras' theorem (standard), s = rθ (Stitz–Zeager p. 707), the small-angle rule (row 3).
- All cited sources are §2.0 sources (Siyavula online pages, Stitz–Zeager). `references: {}`. No forbidden source is cited or named.
- The 18.01 lesson cites MIT; nothing on this page claims more than "calculus finds how fast sine and cosine change; the neat answers only come out in radians", which that lesson supports.

## Arithmetic and answer checks
Recomputed independently (Python, `math`):
- 180/π = 57.296 → 57.3°. 60 × π/180 = π/3. 0.30 × 2.0 = 0.60 m. sin(30 rad) = −0.988 → "about −0.99"; sin 30° = 0.5. All correct.
- Ramp: 4.0 sin 20° = 1.368 → 1.37 m; 4.0 cos 20° = 3.759 → 3.76 m; 1.37² = 1.877 → 1.88, 3.76² = 14.138 → 14.14; sum 16.02 → 16.0. Correct (sig-fig issue: row 4).
- tan⁻¹(0.75) = 36.87° → 36.9°. Correct (row 4).
- Table: exact values all correct; tan 90° undefined; tan 30° = 1/√3. Correct.
- cos 180° = −1, sin 180° = 0, point (−1, 0). Correct.
- sin 0.10 = 0.09983 → 0.0998; 0.10 rad = 5.73° → 5.7°; error 0.17 % (sine), 0.33 % (tangent), both "less than half a percent". Correct.
- 1.8/100 = 0.018 rad = 1.03° → "about 1.0°". Correct.
- Callout: 1.0 × 10⁵ ly / 0.001 = 1 × 10⁸ ly. Correct.
- Quiz 1: 90° = π/2, choice 1. π/4 (45°), π (180°), 90π wrong. Correct.
- Quiz 2: 5.0/13 = 0.385, choice 1 ($5/13$). 5/12 is tan θ, 12/13 is cos θ, 13/5 inverted. Correct; explanation true.
- Quiz 3: 5.0 sin 70° = 4.70 m, choice 1. 1.7 m = 5.0 cos 70° (1.71), 5.0 m (the ladder), 14 m = 5.0 tan 70° (13.7). All wrong as intended; explanation true.
- Quiz 4: 45°, choice 2; at 0° sin 0, cos 1; 30° and 60° swap ½ and √3/2. Correct; 1/√2 = 0.707 → 0.71.
- Quiz 5: 2.0/400 = 0.005 rad = 0.286° → "about 0.29°", choice 0. Others wrong. Correct.
- Flashcards: all five true.
- Plot: domain 0 to 6.2832 (2π), range ±1.5 covers ±1. Generated from the functions; caption says so.
- Calcs coverage: every computed number on the page is in the calcs file (17 entries). Not separately in calcs: sin 30° = 0.5, cos 180° = −1, the exact special-angle table and the tangent's 0.33 % error (all exact or trivial; info). `calc:test -k angles`: 31 passed.
- Calcs `source` wording (task note 3): most "(the numbers are the page's own)" entries cite a section that covers the method (5.3 for the ramp, ladder and path; 5.6 for 1/√2; 10.1 for degree conversion and θ = D/d via θ = s/r). Not honest for `calculator-trap` and `small-angle` (10.1 has no sine) and page locations off for `radian-degrees`, `sixty-degrees`, `wheel-arc` (rows 1 and 6). `ramp-pythagoras` cites 5.3, which does not state Pythagoras (5.6 mentions it); info.

## Only earlier terms
- **π, square root, √, radius, area of a circle**: lesson 0.4 (rearranging-formulas: A = πr², square root defined). Fine. **Circumference 2πr** is not in any earlier lesson; the page states it as known ("the whole circumference, 2πr"). Standard school geometry; info.
- **x-axis, y-axis, coordinates (x, y), graph, function**: lesson 0.5 (graphs-and-slope) and 0.6. Fine.
- **origin** ("centred on the origin"): used in lesson 0.5 but, per reviews/hs-0/graphs-and-slope.md row 1, never defined there (still not defined in the current 0.5 text: grep finds "origin" only in its summary and quiz). Once 0.5 is fixed this is covered; until then warning-level dependency (not counted as an error of this page). Alternatively add "(the point (0, 0))" here.
- **light-year, galaxy**: lesson 0.2 (units-and-si, line 177). Fine.
- **approximately (≈), percent error**: lessons 0.3 and 0.6. Fine.
- **hypotenuse, opposite, adjacent, similar, Pythagoras' theorem, unit circle, periodic, period, radian, inverse function**: all introduced on this page before use. Pythagoras' theorem is stated, not proved; standard for this level.
- **"hot and cold spots in the oldest light"** (callout): described in words, not as a term. Fine for a preview.
- No term found that is used before it is introduced and belongs to a later lesson.

## Coverage
§4 row 0.7: angles, radians, trigonometric functions on the unit circle, graphs of sine and cosine (the AT and CP numbers there are OpenStax and were not opened; topic list taken from the row title and the page's sources).
- Covered: degrees and radians, θ = s/r and s = rθ, conversion, SOH-CAH-TOA ratios with side names, similarity argument, tan = sin/cos, sin² + cos² = 1, inverse functions, special angles, unit circle for any angle, periodicity, graphs of sine and cosine, small-angle rule, calculator mode. Good VWO coverage.
- Not covered: the graph of tan θ (in Siyavula 6.6 and in Trig Tour), negative angles and angles greater than 2π beyond one sentence, amplitude of a sine wave (y = A sin θ, Siyavula 6.6), and angular velocity ω = Δθ/Δt / v = rω (Stitz–Zeager 10.1.1; the CP 6.1 item in the row is about rotation angle and angular velocity). Amplitude and ω matter for Block 5 (waves, harmonic motion) and Block 2 (circular motion); they can wait for those blocks if those lessons introduce them. Info.
- Sine and cosine rules for non-right triangles are not covered; not needed for VWO physics. Info.

## Where this leads
- `leadsTo: { course: "18.01", lecture: 3 }`: the site's lesson `content/year-1/18.01/derivatives-of-sine-and-cosine.mdx` exists with lecture 3, title "Derivatives of sine and cosine, and the product and quotient rules", and its summary says the result "only works with angles in radians". Same topic; the `why` is accurate. Matches §4 (`18-01/derivatives-of-sine-and-cosine`).
- `towards: false`: correct, 0.7 is not the last lesson of Block 0 (0.11 is "Towards the universe").
- Cosmology callout: d ≈ D/θ for an object of known size is the standard angular-size distance idea (in an expanding universe the angular-diameter distance, but for a beginner's preview this is fair); the CMB hot and cold spots as a "standard ruler" that measures the curvature ("shape") of space is correct. No false claims.

## Licensing and AI terms
- Copied text: none found. Closest pairs, both short and standard derivations rewritten:
  - Stitz–Zeager p. 701–702: "Since one revolution sweeps out the entire circumference 2πr, one revolution has radian measure 2πr/r = 2π." Page: "A full turn cuts off the whole circumference, 2πr, so a full turn is 2πr/r = 2π radians." Same argument, own wording; acceptable.
  - Stitz–Zeager p. 702: "the radian measure of an angle is a length divided by another length so that these measurements are actually dimensionless and are considered 'pure' numbers." Page: "Because s and r are both lengths, an angle in radians is a pure number." Acceptable.
  - Siyavula 5.3 "Hypotenuse … opposite the right angle and always the longest side": standard phrase.
- Figures: none copied; the only graph is a generated `<Plot>`; no images.
- Worked examples and quiz: own. Siyavula 5.3, 5.5, 5.6, 5.8 have no ramp, ladder, wheel, path or small-angle examples; Siyavula Ex. 5.1 uses a 3-4-5 triangle (sin x = 4/5), and the page's path uses 3.0 and 4.0 to find tan⁻¹(0.75); a generic triangle asked differently, not a copy (info). Quiz 2 uses 5-12-13. Stitz–Zeager 10.1 examples (coterminal angles, Lakeland latitude) are not reused.
- No Siyavula logo, brand or "Everything Science/Maths" branding on the page (the source titles say "Siyavula, Mathematics Grade 10", which is attribution, not branding).
- No MIT material on the page itself; no NASA or ESO material.
- Stitz–Zeager: CC BY-NC-SA 3.0 (site badge; the PDF itself does not name the version); its ShareAlike clause allows a later version with the same elements, so adaptation into CC BY-NC-SA 4.0 is fine. No AI clause found on the site.
- PhET Trig Tour: in `public/phet/manifest.json` (trig-tour_1.1.11_en.html), frontmatter `phet: trig-tour`; attribution printed by the component. The sim has a Degrees/Radians switch, as the page says.
- No forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs) is cited or named; none was opened during this review.

## Notes
- Siyavula 5.3 itself calls the three ratios "trigonometric identities"; the page rightly does not repeat that.
- The note "1 rad ≈ 57.3°" and "the word radian (rad) is written only to make clear what is meant" agree with Stitz–Zeager p. 702.
- The page says the simulation "draws sine, cosine and tangent as it goes"; Trig Tour plots one of the three at a time, chosen by the reader. Close enough; optional "draws the graph of sine, cosine or tangent".
- Uncertain: the location of the small-angle approximation in CLP-1 Calculus was not checked; the MIT 18.01 Lecture 3 suggestion rests on the site's own 18.01 lesson summary, not on a fresh reading of the 18.01 notes.

## Resolution (2026-11-20, by the page author)

- 1 (error, page of the conversion): the formula "Degrees and radians" and the calcs entries `radian-degrees` and `sixty-degrees` now cite Sec. 10.1, Equation 10.1, p. 704.
- 2: the unit-circle paragraph now says it is the r = 1 case of Siyavula's sin θ = y/r, cos θ = x/r.
- 3: the small-angle rule is now a `<Formula>` citing MIT 18.01 Lecture 9 notes ("Basic list of linear approximations: sin x ≈ x if x ≈ 0", checked in the PDF today), added as reference `mit1801`.
- 4: the ramp answers are now given as 1.4 m and 3.8 m to two significant figures (the 3-figure values kept only for the Pythagoras check), and the path angle as 37° to two figures (calcs `ramp-rounded`).
- 5: the reading's location is now pp. 693–707; the text says s = rθ is on p. 707, and `wheel-arc` cites p. 707.
- 6: `calculator-trap` now says Sec. 10.1 defines radians and the sine value is the page's own calculation; `small-angle` cites the 18.01 notes.
- Info: reading4 (Siyavula 6.6), which the page never cited, is removed; "circumference 2πr" is now glossed; "origin" is now defined in lesson 0.5. The 0°/90° rows of the table follow from the unit-circle definition (5.8), which the page cites in the next section. Graph of tan, amplitude and angular velocity: left for Blocks 2 and 5.

`npm run calc:test` (18 entries for this page) and `npm run content:check` pass.
