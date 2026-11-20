---
page: content/year-1/18.02/partial-derivatives.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-8-partial-derivatives/ (read only through its transcript link; the lesson page itself was not compared beyond that)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/febf0e479f6d67e395a07153980ae7fa_dK3NEf13nPc.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec08", 4 dense pages, no printed page numbers; cited page = PDF page, text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week4/ (read: local copy week4.pdf; PDF p. 1 is a cover; Lecture 8 is entirely on printed p. 1 = PDF p. 2, confirmed with pdftotext -f 2 -l 2; Lecture 9 starts lower on the same page)
  - content/year-1/18.02/_course.json (read: Lecture 8 = Partial Derivatives, Lecture 9 = Max-Min and Least Squares)
  - content/year-4/8.286/horizon-problem.mdx and cmb-spectrum.mdx (read, for the cosmology callout)
  - calcs/18.02/partial-derivatives.yaml (read; `npm run calc:test -- -k partial-deriv`: 11 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Functions of two variables and partial derivatives

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 8 = printed p. 1). `reading1` = Week 4 summary, `reading2` = transcript. "Level curve" cites `reading1` "Lecture 8, p. 1"; "Partial derivative in x" and "An example" cite `reading2` p. 4. All three are right. No "rights reserved" or "courtesy" notice in the transcript or the Week 4 summary (grep of both text files: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example (c), last sentence | In the lecture's sketch (transcript p. 3), increasing x and increasing y both increase f. Nothing is said about the slope of the level curve. | "the level curve slopes downwards through (1, 2), as on the lecture's contour sketch read the other way." | The conclusion is correct (slope −f_x/f_y = −4/13 < 0), but "read the other way" is unclear: the lecture's sketch has the same situation (both partials positive), so its level curves also slope downwards. Suggest: "as in the lecture's sketch, where moving right or up both raise f." Optional: add that the level curve's slope here is about −4/13, as a teaser for later lectures (would need a calcs entry). |
| 2 | info | "Partial derivative in x" formula, cite | Transcript p. 4 gives the definition in words ("the limit … of the change in f divided by delta x", y not changed); the notes p. 1 write the formula exactly as the page does. | Cites `reading2`, p. 4. | Correct as cited (board formula, transcript page right). Optional: add "notes, p. 1" in the text next to it, or cite `reading1` "Lecture 8, p. 1", where the formula appears in writing. The text already says "notes, p. 1" in the lead-in sentence, so no change is required. |
| 3 | info | "Functions of two variables", domain example | Transcript p. 1: "f(x, y) equals one over x y, that's only defined if x y is not zero". The text layer drops "+" signs, so this is almost certainly 1/(x + y), but it could be 1/(xy). | $1/(x + y)$ needs $x + y \ne 0$. | Uncertain from the text layer alone; the spacing "x y" matches the pattern of other dropped plus signs on the page ("x^2 y^2" = x² + y²). Either reading gives a correct statement, so no change is needed. |
| 4 | info | "The graph", computer pictures | Transcript p. 2: x² + y² is "the same with a parabola going upwards". | "z = x² + y² is the same dome upside down". | Loosely true (paraboloid opening upward; it is 1 − x² − y² reflected and shifted, not just flipped). Optional: "the same shape opening upwards". |
| 5 | info | Coverage, "Contour plots" | Transcript p. 3 and notes p. 1 ("and another one"): a fourth computer example with two mountains and a pass between them; its contour plot shows two sets of closed curves and the crossing lines of a saddle. | Not mentioned. | Optional one sentence: closed curves around two peaks, crossing level lines at the pass. It ties the saddle to the topographic map. |
| 6 | info | Coverage, one-variable recap | Transcript p. 3: not every function has a derivative; the class will not worry much about differentiability. Also the remark that ∂f/∂x is common in physics and f_x in applied maths (p. 4). | Mentions "differentiable when these exist, which is the case for most functions in the course"; the notation remark is reduced to "mean the same". | Fine as is. |
| 7 | info | Cosmology callout | (Not in MIT.) | CMB temperature as a function of two angles; maps are "colour-coded contour plots like the weather maps in this lecture"; uniform to one part in 100,000; links to horizon-problem and cmb-spectrum. | Correct and fairly stated. The one part in 100,000 matches `horizon-problem` (Guth, Lecture 21: "one part in 10⁵", fluctuations actually seen). CMB maps are continuous colour scales rather than banded contours, but the weather map in the lecture is the same kind of picture, so the comparison holds. `cmb-spectrum` (Lecture 18) is about the spectrum, not the sky map; the callout says so ("the spectrum is on…"), which is fair. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, p. 1)": geometry so far, functions of several variables "over the next three weeks or so". Correct.
- f(x, y) = x² + y², √y needs y ≥ 0, domain example (finding 3), temperature depending on longitude, latitude, elevation and time, tools (partial derivatives, gradient) the same in any number of variables: all p. 1. Correct.
- Graph z = f(x, y), slicing by coordinate planes: transcript p. 1; notes p. 1 ("using slices by the coordinate planes"). Correct.
- z = −y: plane, line going down with slope 1 in the yz-plane, contains the x-axis: p. 1. Correct.
- 1 − x² − y²: slices x = 0 and y = 0 are downward parabolas, meets the xy-plane in the unit circle (p. 1), surface of revolution about the z-axis (sentence runs from the end of p. 1 to p. 2), so "(pp. 1–2)" is correct.
- Computer plots x² + y² and y² − x² (saddle, upward parabola in yz, downward in xz), pictures hard to read: p. 2; notes p. 1 list the same examples. Correct.
- Contour plot, level curves at regular intervals, slicing by z = c, "squish them all" onto one map, faster to read than the graph: p. 2; "Level curve" formula f(x, y) = c: notes p. 1 exactly. Correct.
- Topographic map (US Geological Survey) and colour-coded temperature map with colour boundaries as level curves: p. 2; notes p. 1. Correct.
- f = −y: level c is y = −c, evenly spaced, nothing along x: p. 2. Correct.
- 1 − (x² + y²): level 0 unit circle, level 1 the origin, −1 radius √2 ≈ 1.4, −2 radius √3 ≈ 1.7, −3 radius 2, concentric circles = surface of revolution, closer = steeper, flat top: p. 3. Correct.
- x² + y² contour plot looks the same, only labels differ; y² − x² level 0 = two diagonal lines through the saddle, mountain pass: p. 3. Correct.
- Reading changes: moving east–west / north–south, the sketch with f = 0, 1, 2 near (x₀, y₀), increasing x or y increases f, "how fast" needs derivatives: p. 3; notes p. 1. Correct (the page's "level 2 to the right and above" is a fair description inferred from what Auroux reads off the sketch).
- One-variable recap (limit of Δf/Δx, tangent slope, approximation f(x₀) + f′(x₀)(x − x₀)): p. 3. Correct.
- Change x, y or both; curly ∂, "not a straight d, not a delta": end of p. 3 into p. 4, "(pp. 3–4)" correct.
- Definition, ∂f/∂y the same with x fixed, differentiable if these exist: p. 4. Correct.
- Geometric meaning (vertical plane parallel to the xz-plane, slope of the slice's tangent; ∂f/∂y from the slice x = x₀): p. 4; notes p. 1. Correct.
- Notations ∂f/∂x and f_x, treat y as a constant: p. 4; notes p. 1. "An example" f = x³y + y², f_x = 3x²y, f_y = x³ + 2y: p. 4; notes p. 1. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k partial-deriv`: 11 passed. Recomputed by hand as well:
- Level radii: x² + y² = 1 − c gives √2 = 1.414 ≈ 1.4, √3 = 1.732 ≈ 1.7, √4 = 2 for c = −1, −2, −3. Correct.
- Lecture example: ∂(x³y + y²)/∂x = 3x²y, ∂/∂y = x³ + 2y. Correct.
- Worked example (a): f = x²y + 3y²; f_x = 2xy = 4, f_y = x² + 6y = 1 + 12 = 13, f(1, 2) = 2 + 12 = 14. Correct.
- Worked example (b): 14 + 4 × 0.1 = 14.4; exact 1.21 × 2 + 12 = 2.42 + 12 = 14.42. Correct (the difference 0.02 equals ½ f_xx Δx² = ½ · 4 · 0.01, as expected).
- Worked example (c): both partials positive, so y must decrease; implicit slope −f_x/f_y = −4/13. Correct (wording, finding 1).
- Quiz 1: ∂(x²y + 5y)/∂x = 2xy. Answer 0 correct.
- Quiz 2: ∂/∂y = x² + 5. Answer 1 correct.
- Quiz 3: crowded evenly spaced contours = steep. Answer 1 correct (transcript p. 3: "I have to travel a shorter distance if I want my altitude to change by one").
- Quiz 4: x² + y² = c circles of radius √c (origin for c = 0). Answer 1 correct.
- Flashcards: all three correct; the limit formula matches the notes p. 1.

## Plots
- Contour plot: four parametric circles of radius 1, √2, √3, 2, labelled f = 0, −1, −2, −3, and the point f = 1 at the origin; generated from formulas. Caption claims checked: f = 1 − (x² + y²) gives radius √(1 − c), values drop by 1 between neighbouring circles, gaps 0.414, 0.318, 0.268 shrink outwards, so "the circles crowd together as the dome gets steeper" is right. Domain ±2.4 contains all circles.
- Slice plot: z = 0.75 − x² is 1 − x² − 0.25, the slice y = 0.5 of the dome; tangent at x₀ with slope −2x₀ (calcs `slice-slope`); "zero at the top, steeper further out" is right. Generated from the formula; at the domain edges z = −0.69 is inside the range [−1, 1.2]. Slider x₀ ∈ [−0.9, 0.9] includes 0.
- `content:check` places all labels without errors.

## Coverage and order
- The page follows the lecture's order: functions of several variables and domains → graph by slices (−y, 1 − x² − y²) → computer plots (x² + y², saddle) → contour plots and level curves → topographic and temperature maps → contour plots of the two examples, x² + y², y² − x² → qualitative reading of changes → one-variable recap → partial derivatives, definition, geometry, notation, example. The notes p. 1 have the same order.
- Left out: the fourth computer example with two mountains and a pass (finding 5) and two minor remarks (finding 6).
- Added: the second plot (page's own slice y = 0.5), the worked example (original numbers), the cosmology callout.
- leadsTo: 18.02 Lecture 9 "Max-Min and Least Squares" matches `_course.json`; the reason ("approximation formula in two variables, and maxima and minima") matches the notes for Lecture 9 (linear approximation, tangent plane, min/max) and Auroux's closing line on transcript p. 4 ("more about this next time, and … maxima and minima"). 8.286 Lecture 21 is the lecture of `horizon-problem` (frontmatter `lecture: 21`). Correct.

## Licensing
- No "rights reserved" or "courtesy" notice in either source. The USGS topographic map and the weather map shown in the lecture are only described in words; the page has no images, and both plots are generated from formulas.
- Text is rewritten throughout; I found no copied sentence beyond standard terminology ("level curve", "contour plot", "surface of revolution", "mountain pass", "curly d"). The hiking and topographic-map analogies come from the lecture but are rephrased.
- The worked example (x²y + 3y² at (1, 2)), the quiz function x²y + 5y and the slice plot are original; the lecture's only computed example (x³y + y²) is cited as MIT's.
- No OpenStax or LibreTexts material.

## Notes
- Internal links `/courses/8-286/horizon-problem` and `/courses/8-286/cmb-spectrum` point to existing pages; `content:check` reports no errors.
- No em dashes found in the page.
- The summary in the frontmatter matches the page body.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** worked example (c) now ends "as in the lecture's sketch".
- Info 4: z = x² + y² is now "the same shape opening upwards, a bowl".
- Info 2, 3, 5, 6 and 7 are left as they are.
