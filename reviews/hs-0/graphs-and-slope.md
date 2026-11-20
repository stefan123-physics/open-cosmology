---
page: content/year-0/hs-0/graphs-and-slope.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/mathematics/grade-10/functions/06-functions-01 (read; 6.2 Linear functions; footer: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" (CC BY 3.0), with the usual note that embedded external videos and sims are not necessarily covered; no "closed copyright" or "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/analytical-geometry/08-analytical-geometry-02 (read; 8.3 Gradient of a line; same CC BY footer, no "All rights reserved")
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read; 1.3 Units, subsection "Rate, proportion and ratios"; same CC BY footer, no "All rights reserved")
  - calcs/hs-0/graphs-and-slope.yaml (read; `pytest -k graphs`: 19 passed)
  - content/year-0/hs-0/powers-of-ten.mdx, units-and-si.mdx, significant-figures-and-estimates.mdx, rearranging-formulas.mdx (earlier lessons, read for earlier terms)
  - content/year-1/18.01/derivative-as-slope.mdx (leadsTo target: course 18.01, lecture 1, checked)
  - public/phet/graphing-lines_1.4.10_en.html (screen names and intercept symbol checked), public/phet/manifest.json
  - docs/HIGHSCHOOL-PLAN.md §4, Block 0 row 0.5 (OpenStax sources there ignored, not opened)
verdict: needs-changes
---

# Review: Graphs, straight lines and slope

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Direct proportion" ("a straight line **through the origin**"), quiz 4 (choice and explanation), flashcard "Direct proportion", Summary, cosmology callout | Siyavula 1.3: "a straight line graph that goes through the origin (0;0)" | "the origin" is used five times and never said to be the point (0, 0) where the axes cross; no earlier lesson (0.1–0.4) introduces it (grep of the four pages: no "origin") | Term used before it is introduced. Add one clause in "Reading a graph": "The axes cross at the **origin**, the point (0, 0)." |
| 2 | warning | "Try it" (PhET Graphing Lines) | The sim writes the line as y = mx + **b** (string `symbol.intercept` = "b" in graphing-lines_1.4.10_en.html) | Page uses y = mx + c throughout and does not mention b | A beginner will see a different letter in the sim. Add: "The simulation calls the intercept $b$ instead of $c$: $y = mx + b$." (Siyavula itself uses c, so the page's notation matches its source.) |
| 3 | warning | Coverage | §4 row 0.5: graphs, straight lines and slope (VWO level) | No line of best fit through measured (scattered) points, and no advice to read the slope from two far-apart points on that line | At VWO level, finding a slope from measured data via a best-fit line is a core graph skill (practicals, and Block 1 position–time graphs). The cosmology callout even says the galaxies lie "close to" a line, without the reader having met the idea. Add a short paragraph (own example) or state that it comes later. |
| 4 | warning | "Direct proportion", water example: "so 2.5 L of water" | — | The abbreviation L for litre is never introduced (0.2 says "1000 litres" in words only) | Write "2.5 litres (2.5 L)" or "litre (L, 10⁻³ m³)". Minor; meaning is clear from the previous sentence. |
| 5 | info | "A slope has units": a slope is "a **rate**: how fast one quantity changes as the other increases" | Siyavula 1.3: "The rate is always a change in a quantity per unit time." | Rate defined per change of any quantity | The page's wider meaning is common and correct, but it differs from the cited source's definition, and "how fast" suggests time. Either say "per unit of the other quantity (with time on the horizontal axis, per second)" or leave as is. |
| 6 | info | "Direct proportion" | Siyavula 1.3: "directly proportional when a change in one leads to the same change in the other"; "k is the proportionality constant" | "one is a fixed number times the other"; "constant of proportionality" | The page's definition is more precise than the source's (Siyavula's "same change" would also fit y = x + 3). Good; no change needed. |
| 7 | info | Formula "Slope between two points" and the sentence on point order | Siyavula 8.3: m = (y₂ − y₁)/(x₂ − x₁) or (y₁ − y₂)/(x₁ − x₂); "Remember to be consistent"; horizontal gradient 0, vertical undefined | Same, in own words | Matches. |

## Formulas and citations
- `y = m\,x + c`, cite `mit` (= Siyavula Maths Gr 10, 6.2), at "Sec. 6.2, Functions of the form y = mx + c": the subsection exists, uses y = mx + c, calls m the gradient and c the y-intercept. Correct.
- `m = (y_2 − y_1)/(x_2 − x_1)`, cite `reading1` (Maths Gr 10, 8.3), at "Sec. 8.3, Gradient of a line": present in that form. Correct.
- `y = k\,x`, cite `reading2` (Physical Sciences Gr 10, 1.3), at "Sec. 1.3, Rate, proportion and ratios": the subsection exists and gives y ∝ x, y = kx, and "a straight line graph that goes through the origin". Correct.
- All three sources are Siyavula online pages (§2.0), each shows the CC BY 3.0 footer. No forbidden source is cited or named (`references: {}`).
- Uncited claims (axes and labels, steady speed gives a straight position–time graph, galaxies on a line through the origin in a speed–distance plot) are standard and correct.
- The y = mx + c sliders, the cyclist graph and the Hubble graph are all generated `<Plot>`s from formulas; captions say so.

## Arithmetic and answer checks
Recomputed independently:
- Worked example 1: m = (19 − 7)/(6 − 2) = 12/4 = 3; c = 7 − 3·2 = 1; check 3·6 + 1 = 19. Correct.
- Cyclist: 60 m / 10 s = 6.0 m/s; 20 + 6.0 × 5.0 = 50 m, the midpoint of 20 and 80. Correct. Plot: 20 + 6·12 = 92 m < 100 m range top; points (0, 20) and (10, 80) lie on the line.
- Water: 1.0 × 10³ kg/m³ × 10⁻³ m³ = 1.0 kg; × 2.5 L = 2.5 kg. Correct, and the density matches lesson 0.2.
- Hubble plot: 70 × 400 = 28 000 km/s < 30 000. H = 70 km/s/Mpc is the site's round example value (calcs/values.yaml).
- Slider plot: with m, c at their limits y reaches ±16 outside the range ±8; the curve is simply clipped. Fine.
- Quiz 1: (12 − 4)/(5 − 1) = 2, choice 1 ($2$). Distractors ½ (run/rise), 3, 8 (rise only) are wrong. Correct.
- Quiz 2: y = −3x + 6: m < 0 falls, intercept 6, choice 1. Others wrong. Correct.
- Quiz 3: 30/6 = 5 m/s, choice 0. 180 (product), 5 m, 5 s wrong. Correct.
- Quiz 4: choice 0, straight line through the origin. "Any straight line" and "horizontal line" are not proportion (apart from the trivial y = 0); "a curve that never meets the axes" is Siyavula's description of inverse proportion. Correct.
- Quiz 5: horizontal line slope 0, choice 0; explanation right about the vertical line. Correct.
- Flashcards: all five true.
- Every number on the page is in the calcs file (line-slope, line-intercept, line-check, cyclist-speed, cyclist-halfway, water-litre, water-2-5, quiz-slope, quiz-speed, hubble-plot-top); quiz 2 and 5 have no arithmetic. `calc:test -k graphs`: 19 passed.
- Calcs `source` wording (note 2 of the task): the slope, intercept and quiz entries cite the section whose method they use and say "(the numbers are the page's own)": honest. The cyclist and water entries cite 1.3 "Rate, proportion and ratios", which supports the method (rate, y = kx) but does not give the water density; the density is the page's (from lesson 0.2), so "the numbers are the page's own" is acceptable, though "density from lesson 0.2" would be more exact (info). `hubble-plot-top` cites `mit` but says explicitly "the source has no Hubble law; H = 70 is the site's round example value": honest, not a false citation (contrast reviews/hs-0/rearranging-formulas.md row 1, where the at-text implied support).

## Only earlier terms
- **origin**: used, never introduced (row 1, error).
- **L** (litre symbol): not introduced (row 4, warning). "Litre" itself appears in 0.2.
- **axes, x-axis, y-axis, coordinates (x, y)**: introduced in "Reading a graph" before use. Fine.
- **speed, m/s, kg/m³, density**: lesson 0.2 (units-and-si, lines 92 and 135–147). Fine.
- **linear**: lesson 0.4 defines a linear equation; the page's "linear relation" (straight-line graph) is a natural extension, and the sentence makes the meaning clear. Fine.
- **Hubble's law, H, Mpc**: lesson 0.4 cosmology section introduces v = H d, H = 70 km/s/Mpc and the megaparsec; "In lesson 0.4 you met Hubble's law" is accurate.
- **position, position–time graph**: introduced here by the example ("20 m from a lamp post"); Block 1 (1.3) develops them. Fine.
- **calculus, tangent** (only "steepness of a curve" and "where calculus begins"; tangent appears only in `leadsTo.why`): fine as a forward pointer.

## Coverage
- Covered: reading a graph and axis labels with units; y = mx + c, slope and intercept, sign of slope; rise over run between two points; horizontal and vertical lines; finding a line's equation through two points; units of a slope and slope as a rate (speed); direct proportion as a line through the origin, the ratio test.
- Left out: line of best fit through measured data (matters at VWO, row 3); x-intercept / dual intercept sketching (Siyavula 6.2; minor); inverse proportion y = k/x (in Siyavula 1.3; appears only as a quiz distractor; belongs naturally in 0.6 "Quadratics and power laws", so it does not matter here); parallel and perpendicular lines (Siyavula 8.3; not needed at this level for physics); slope of a curve / tangent (planned in 0.10).
- PhET `graphing-lines` as in §4; frontmatter `phet: graphing-lines`, sim in the manifest (1.4.10). The page's description ("drag a line, read off its slope and intercept, find the equation of a line through two points") fits the screens Slope, Slope-Intercept and Point-Slope.

## Where this leads
- `leadsTo: 18.01 lecture 1` = `derivative-as-slope` ("Derivative as slope"), the target §4 names. The `why` (slope of a curve, its tangent, the derivative) is correct and on topic.
- `towards: false`: correct, 0.5 is not the block's last lesson (0.11 is). The "Towards cosmology" callout is correct: Hubble's law as a straight line through the origin whose slope is H; "close to a straight line" is right for nearby galaxies; H = 70 shown as a round example value.

## Licensing and AI terms
- No sentence copied: compared the page's definitions with Siyavula's ("The gradient of a line is the measure of steepness", "c is known as the y-intercept", "a straight line graph that goes through the origin (0;0)", "The rate is always a change in a quantity per unit time"); the page rewrites them in its own words. "Straight line through the origin" is a short standard phrase.
- Worked examples and quiz are the page's own: Siyavula 6.2 uses f(x) = x, g(x) = x − 1, p(x) = ½x − 3; 8.3 uses E(2;5), F(−3;9), P(−1;−5), Q(5;4) and others; 1.3's proportion subsection has no numbers. None of the page's points ((2, 7), (6, 19), (1, 4), (5, 12)), the cyclist or the water example appear there.
- No figure copied: all three graphs are generated `<Plot>`s.
- No Siyavula logo, brand or "Everything Science/Maths" branding on the page; the source titles say "Siyavula, Mathematics Grade 10 …", which is attribution, not branding.
- All three Siyavula pages show the CC BY 3.0 footer; none says "closed copyright" or "All rights reserved" (task note 1).
- No MIT, NASA or ESO material used; no forbidden source opened or cited.
- PhET: attribution is printed by `components/PhET.tsx`; the sim is CC BY-NC 4.0, fine on this non-commercial site.

## Notes
- Siyavula writes points as (x; y) with a semicolon; the page uses (x, y), the usual international notation. Fine.
- The `<PhET>` element has only `title`; the id comes from the frontmatter `phet:` field, as in lesson 0.4. `content:check` reports no error for this page (only "no review file yet").
- Not checked: how the page renders in the browser (labels on a 320 px phone); `content:check` placed the labels without error.

## Resolution (2026-11-20, by the page author)

- 1 (error, "origin"): "Reading a graph" now says "The axes cross at the **origin**, the point (0, 0)."
- 2: after the slider plot, a bracket now says that some books and the simulation write the intercept as b (y = mx + b).
- 3: new section "Measured points and the line of best fit": draw one line close to all points, not dot to dot, and read the slope from two far-apart points on the drawn line. The paragraph on curved graphs now has its own heading, "When the graph is not straight".
- 4: the litre symbol is now introduced: "every litre (L, 10⁻³ m³)".
- Info items: no change.

`npm run calc:test` and `npm run content:check` pass.
