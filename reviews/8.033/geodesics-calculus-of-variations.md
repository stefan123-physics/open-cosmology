---
page: content/year-2/8.033/geodesics-calculus-of-variations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture8_euler/ (read: the 8-slide PDF, as extracted text plus per-slide images; slide 8 also re-rendered at 200 dpi to read the equations)
  - No transcript exists for 8.033 Fall 2006 (none read; none cited)
verdict: pass-with-notes
---

# Review: Geodesics and the calculus of variations

What the slides contain:
1. Slide 1: "Welcome back to 8.033!", portrait of Leonhard Euler (1707–1783), "Image Courtesy of Wikipedia".
2. Slide 2: the course so far is about converting between inertial frames.
3. Slide 3: the agenda (Euler–Lagrange equation, deriving it, using it for metrics and Euclidean geodesics, Minkowski geodesics, gravitational redshift, the brachistochrone and the "caternary").
4. Slide 4: "Photograph of a brachistochrone experiment. Image removed due to copyright restrictions."
5. Slide 5: "Brachistochrone flicks" (title only).
6. Slide 6: brachistochrone figure "by MIT OCW": flat board T = 3.54 s, cycloid T = 3.23 s, circular arc T = 3.23 s.
7. Slide 7: metrics and geodesics; the 2D Euclidean example.
8. Slide 8: the 4D Minkowski example.

The slides never write the Euler–Lagrange equation or its derivation.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro paragraph, "were worked on the board" | Only slides are on OCW. Slide 3 lists "The Euler-Lagrange equation" and "Deriving it" as agenda items; there is no transcript or video record of what was done on the board. | "the Euler–Lagrange equation and its derivation were worked on the board and are not on them" | Say only what can be checked: "are listed on slide 3 but not written out on the slides". The board claim is likely true but cannot be verified from the source. |
| 2 | info | Formulas "A functional", "First-order change", "Euler–Lagrange equation" (`cite="mit" at="slide 3"`) | Slide 3 names the equation but shows no formula. | Cited to slide 3, with text saying the notation and derivation are the page's own. | Acceptable because the page says so. To be fully clear, `at="slide 3 (named only; formula is the page's own)"` would stop a reader looking for it on the slide. |
| 3 | warning | Intro, "the Euler–Lagrange equation, named after Leonhard Euler (slide 1)" | Slide 1 shows Euler's portrait and dates only. It does not say what the equation is named after. | Named after Euler only. | The equation is named after Euler **and** Lagrange (the next page names Lagrange for Lecture 9). Suggest: "named after Leonhard Euler, whose portrait opens the slides (slide 1), and Joseph Louis Lagrange". |
| 4 | warning | Minkowski section, "The extremum is a *maximum*: any detour has speed somewhere, and there √(1 − u²) is less than 1"; quiz 3 explanation | Slide 8 says only "extremal". | The argument shown | The argument holds only in the frame where the straight world line is at rest (u = 0 there). In a general frame the straight line has u ≠ 0 and the sentence does not follow as written. Add "in the frame where the free clock is at rest (proper time is the same in every frame)". The page marks the remark as its own, which is correct. |
| 5 | warning | Cosmology callout, "its [geodesic equation](/courses/8-286/geodesic-equation) explains why the momentum of a freely moving particle falls as the universe expands" | The linked page (8.286 Lecture 13) derives the general geodesic equation and does not mention momentum. The momentum result (p ∝ 1/a) is mentioned on `christoffel-symbols` (Lecture 14), where it is called an 8.286 homework problem, not lecture content. | Says the linked geodesic equation explains the momentum decay. | Soften to "and applied to that metric (an 8.286 homework problem), the geodesic equation shows…", or link to `christoffel-symbols` as well. The physics is correct. |
| 6 | info | Slide 8 slip note | Slide 8 reads "dτ² = −dσ² = dx^t g dx = (dx dy dz dt) η (dx dy dz dt)^t = dt² − dx² − xy² − dz²". | Says a minus sign is missing in the middle step and "xy²" is a typo for dy². | Verified against the 200 dpi image: both slips are real and correctly described. With η = diag(1,1,1,−1) the product is dx² + dy² + dz² − dt² = dσ², so the slide's middle equality "−dσ² = dx^t g dx" is wrong by a sign, and the last line is (minus) that product. The page's corrected line dτ² = dt² − dx² − dy² − dz² is right. (The slide also has "though" for "through" in its last sentence; there is no need to mention it.) |
| 7 | info | Formula "Proper time along a world line" | Slide 8 has an extra middle step, ∫√(dt² − dx² − dy² − dz²). | That step is left out. | Fine. Every remaining equality matches the slide. |
| 8 | info | Formula "Length in the plane" | Slide 7 also writes ∫√(dr^t g dr) and the matrix product. | The intermediate steps are left out. | Fine. Matches the slide. |

Formula citations checked:
- "Line element" (slide 7): correct.
- "Length in the plane" (slide 7): correct.
- "Proper time" (slide 8): correct, with the slips corrected as the page says.
- "Proper time along a world line" (slide 8): correct.
- The metric η = diag(1, 1, 1, −1) in the order x, y, z, t matches slide 8.
- c = 1 matches slide 8 (body text and the yellow box).

## Arithmetic and answer checks
- Euler–Lagrange derivation: correct. The first-order variation, integration by parts with h(x₁) = h(x₂) = 0, and the fundamental lemma give d/dx ∂L/∂y′ = ∂L/∂y.
- First special case: if L has no y, then ∂L/∂y′ is constant. Correct.
- Second special case (Beltrami identity): if L has no explicit x, then L − y′ ∂L/∂y′ is constant. Correct.
- Euclidean steps: ∂/∂y′ √(1 + y′²) = y′/√(1 + y′²). Correct. This is a monotonic function of y′, so y′ is constant.
- Quiz 1: answer index 1, √(1 + y′²). Correct.
- Quiz 2: √(1 − 0.64) × 10 = 0.6 × 10 = 6 years, answer index 3 ("6 years"). Correct. The distractor 16.7 = 10/0.6 is a sensible wrong answer.
- Quiz 3: answer index 0 (straight free world line) is correct. See finding 4 for the explanation.
- Worked example (a): ∫₀¹ √(1 + 4x²) dx = √5/2 + asinh(2)/4 = 1.11803 + 0.36091 = 1.47894 ≈ 1.479. Correct. √2 = 1.41421 ≈ 1.414. Correct.
- Worked example (b): 5 + 5 = 10 coordinate years. √(1 − 0.36) = 0.8, so 0.8 × 10 = 8 years, and the clock at rest records 10. Correct. The instant turnaround is idealised, which is standard.
- Flashcards: all three are correct.
- `npm run calc:test -- -k geodesics-calculus`: 5 passed. The calcs file covers every number on the page.
- The worked example is original (own curve and own speeds). The slides have no numerical example.

## Coverage and order
- Slides 1–3 (intro, recap, agenda): covered in the opening paragraph and the first section.
- Slides 4–6 (brachistochrone photograph, "flicks", figure): mentioned briefly in the first section. The figure's times (3.54 s, 3.23 s, 3.23 s) are not quoted here and are left to the next page, which is reasonable.
  - Info: the slide gives the cycloid and the circular arc the same time, 3.23 s. If the next page recomputes them, it should note that.
- Slide 7 (metrics, Euclidean geodesics): covered fully, in order.
- Slide 8 (Minkowski geodesics): covered fully, in order.
- Agenda items with no slides:
  - Euler–Lagrange equation and its derivation: supplied by the page and marked as its own.
  - Gravitational redshift: not covered. The page says this, and says it returns with general relativity later. Verified: the OCW "lecture16_gr" slides (site Lecture 17) list "Light bending, gravitational redshift".
  - Brachistochrone and catenary: deferred to `brachistochrone-catenary` (site Lecture 9). Matches the agenda.
- Order: the page puts the brachistochrone motivation first, then Euler–Lagrange, then slides 7 and 8. This follows the slide deck, where the brachistochrone slides 4–6 come before 7–8, and the agenda.
- Added material (all marked as the page's own):
  - the derivation;
  - the two special cases;
  - the "maximum" remark;
  - the worked example;
  - the cosmology callout.
- `leadsTo`:
  - 8.033 Lecture 9 = `brachistochrone-catenary` (lecture: 9). Correct.
  - 8.286 Lecture 13 = `geodesic-equation` (lecture: 13). Correct lecture. See finding 5 on the momentum claim.

## Licensing
- Slide 4's photograph is marked "Image removed due to copyright restrictions". The page does not use it and says it is withheld.
- Slide 1's Euler portrait ("Image Courtesy of Wikipedia") is not reproduced. The slide 6 figure ("Figure by MIT OCW") is not reproduced either.
- No OpenStax or LibreTexts material.
- Wording: a few sentences stay close to slide 7 and 8 phrasing. They are short and use standard terminology, so they are acceptable, but they could be reworded further:
  - "how distances are measured" (slide: "defines the way distances are measured")
  - "whatever coordinates are in use"
  - "dσ is invariant under all coordinate transformations"
  - "the extremal interval between two events is a straight line through spacetime"
- No em dashes in the page (checked by grep). The en dashes in "Euler–Lagrange" are fine.

## Notes
- The cosmology callout's physics is correct: free fall follows a geodesic, and momentum falls as 1/a. The attribution needs the link fix in finding 5.
- The internal links all resolve to existing slugs: `/courses/8-033/brachistochrone-catenary`, `/courses/8-033/doppler-aberration-twin-paradox` and `/courses/8-286/geodesic-equation`.
- The verdict is pass-with-notes: no errors were found. Findings 1, 3, 4 and 5 should be fixed before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Warning 1: the intro now says the Euler–Lagrange equation and its derivation are listed on slide 3 but not written out on the slides.
- Warning 2: named after Euler and Lagrange; Euler's portrait opens the slides.
- Warning 3: the maximum argument (body and quiz 3 explanation) now names the rest frame of the straight world line and notes that proper time is frame-independent.
- Warning 4: the callout now credits the momentum result to the Christoffel-symbols page as well, with a link.
- Info: the three formulas cited to slide 3 now say `at="slide 3 (listed; written out by the page)"`.
