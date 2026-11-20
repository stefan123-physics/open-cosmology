---
page: content/year-1/18.02/double-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-16-double-integrals/ (read via its transcript; title "Lecture 16: Double Integrals" matches `_course.json`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/61b321d07c5ffbc46f64c653061873b0_YP_B0AapU0c.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec16", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs, e.g. "x^2 y^2 equals one" on p. 3)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week7/ (read: local copy week7.pdf; PDF p. 1 is a cover; Lecture 16 on printed pp. 1–2 = PDF pp. 2–3; printed p. 1 ends after the rectangle exchange example, Example 3 (eʸ/y) is on printed p. 2, followed by Lecture 17)
  - content/year-1/18.02/_course.json (read: Lecture 15 = Partial Differential Equations, 16 = Double Integrals, 17 = Polar Coordinates)
  - content/year-1/18.02/partial-derivatives.mdx (read: Lecture 8, has the 1 − x² − y² dome)
  - content/year-5/Ferreras/gravitational-lensing.mdx (read, for the cosmology callout)
  - calcs/18.02/double-integrals.yaml (read; `npm run calc:test -- -k double-integrals`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Double integrals

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 7 summary, `reading2` = transcript. Formulas "Double integral" and "Definition" (`reading2`, p. 1), "Volume by slices" (`reading2`, pp. 1–2), "Over the unit square" (`reading2`, p. 2), "Over the quarter disc" (`reading2`, p. 3) and "The exchanged integral" (`reading1`, "Lecture 16, p. 2") are all at the cited place. No "rights reserved" or "courtesy" notice in the transcript or the Week 7 summary (grep of both text files: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Over the quarter disc" formula, `at="p. 3"` | Transcript p. 3 sets up the integral, does the inner integral and says "I think it's pi over eight"; the claim "you will get, at the end, pi over eight" carries over to the top of p. 4. | Cites p. 3 for the whole chain ending in π/8. | Acceptable (the value is stated on p. 3). Optionally `at="pp. 3–4"`, matching the prose and the calcs entry `quarter-disc-total` (which already says pp. 3–4). |
| 2 | info | "Example: over a quarter disc", first sentence | Notes p. 1: region x² + y² < 1 in the first quadrant. | x² + y² ≤ 1. | No difference for the integral; no change needed. |
| 3 | info | "Iterated integrals" | Transcript p. 2 (student question): x and y vary independently inside the integral; only the bounds of y depend on x, and one could integrate over x first with bounds depending on y. | Covers the bounds point; the "other order" is introduced later, under "Exchanging the order". | Optional half-sentence. Not needed for correctness. |
| 4 | info | Plot | Transcript p. 4 / notes p. 2: region between y = x and y = √x for 0 ≤ x ≤ 1. | Curves drawn on 0 ≤ x ≤ 1.2, so beyond x = 1 they cross and √x falls below x; the region itself is not shaded. | Caption is correct ("they meet at (0, 0) and (1, 1)", √x above on the region). Optionally use `domain={[0, 1.05]}` or say "for 0 ≤ x ≤ 1" in the caption so readers do not take the part beyond x = 1 as part of the region. |
| 5 | info | Cosmology callout | (Not in MIT 16. Lecture 17's summary, same PDF, gives the mass of a plate as M = ∬ δ dA with δ mass per unit area.) | Total mass = ∫∫ Σ dA of a projected surface density; lensing measures projected mass including dark matter. | Correct and fairly stated. The Ferreras page defines Σ = ∫ρ dz on the lens plane and κ = Σ/Σ_cr and stresses that lensing measures only the mass projected on the sky, so the link fits. Optionally note that Lecture 17 makes exactly this mass application. |

Prose page references checked against the sources:
- Opening "(transcript, p. 1)": "the last few weeks, we've been doing derivatives. Now, we're going to integrals": p. 1. Correct.
- One-variable area counted negatively below the axis; volume under the graph above R; dA a piece of area: p. 1; notes p. 1. Correct.
- Riemann-sum definition with ΔA_i at (x_i, y_i), limit: p. 1; notes p. 1. Correct. "Nobody computes it this way … reduced to two single integrals … review integrals": p. 1. Correct.
- Slices parallel to the yz-plane, S(x), volume ≈ S(x)Δx: end of p. 1; x from minimum to maximum, S(x) = ∫ f dy with x fixed, left to right end of the slice, "iterated integral", "single most important thing": p. 2; notes p. 1. Correct, "(pp. 1–2)" and "(p. 2)" right.
- Square example, paraboloid "our first example" (Lecture 8 page confirmed), rectangle easy, negative part of the slice counted negatively: p. 2. Inner 2/3 − x², outer 1/3: p. 2; notes p. 1. Correct.
- dA = dy dx from small rectangles Δx Δy: p. 3; notes p. 1 ("dA = dy dx, limit of ΔA = Δy Δx"). Order up to us, both work in theory, one may be much harder (shape or integrand): p. 3. Correct.
- Quarter disc: only the part above the plane, y from 0 to √(1 − x²), x from 0 to 1 (first and last slice): p. 3; notes p. 1. Inner (1 − x²)^{3/2} minus a third of it: p. 3. Correct.
- x = sin θ, (2/3)∫₀^{π/2} cos⁴θ dθ, double angle twice, left as exercise, π/8: pp. 3–4; notes p. 1 ("stopped before the end"). Correct. "Not the right way; polar coordinates tomorrow": p. 4. Correct.
- Rectangle exchange ∫₀¹∫₀² dx dy = ∫₀²∫₀¹ dy dx; cannot put √(1 − x²) outside; draw the region: p. 4; notes p. 1. Correct.
- eʸ/y example, no formula for the inner integral, region between y = x and y = √x meeting at x = 0 and 1, x from y² to y, y from 0 to 1, inner integral easy: p. 4; notes p. 2. Correct.
- Antiderivative by guess-and-correct or by parts: p. 4; notes p. 2. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k double-integrals`: 9 passed. Recomputed by hand:
- Square: [y − x²y − y³/3]₀¹ = 1 − x² − 1/3 = 2/3 − x²; ∫₀¹ (2/3 − x²) dx = 2/3 − 1/3 = 1/3. Correct.
- Quarter disc: at y = √(1 − x²): (1 − x²)^{3/2} − (1 − x²)^{3/2}/3 = (2/3)(1 − x²)^{3/2}. With x = sin θ: (2/3)∫₀^{π/2} cos⁴θ dθ = (2/3)(3π/16) = π/8 ≈ 0.3927. Correct.
- Exchanged: (eʸ/y)(y − y²) = eʸ − y eʸ; d/dy(2eʸ − y eʸ) = 2eʸ − eʸ − y eʸ = eʸ − y eʸ; [2eʸ − y eʸ]₀¹ = (2e − e) − 2 = e − 2 ≈ 0.7183. Correct; agrees with notes p. 2 ([−y eʸ + 2eʸ]₀¹).
- Worked example (triangle 0 ≤ y ≤ x ≤ 2, f = xy): dy dx: ∫₀ˣ xy dy = x³/2, ∫₀² x³/2 dx = 16/8 = 2. dx dy: ∫ᵧ² xy dx = y(4 − y²)/2 = 2y − y³/2, ∫₀² = 4 − 16/8 = 2. Both correct; region bounds correct in both orders.
- Quiz 1: ∫₀² xy dx = 2y, ∫₀¹ 2y dy = 1. Answer 0 ("1") correct.
- Quiz 2: outer bounds are numbers. Answer 2 correct (transcript p. 2).
- Quiz 3: for 0 ≤ y ≤ 1, x runs from y² to y. Answer 0 correct; the explanation is right.
- Flashcards: all three correct.
- Calcs file (info): entries `quiz-1`, `triangle-dydx`, `triangle-dxdy` are `origin: page-own` but carry `source: {cite: reading2, at: …}` (p. 2, p. 2, p. 4). Harmless; the cites point to where the method is taught, not where the numbers are.

## Coverage and order
- The page follows the lecture's order exactly: motivation from one-variable area → volume under a graph → Riemann-sum definition → slicing and S(x) → iterated integral, inner bounds depend on x, outer bounds are numbers → Example 1 (square) → dA = dy dx and the choice of order → Example 2 (quarter disc, trig substitution, polar next time) → exchanging the order (rectangle, then eʸ/y) → antiderivative of y eʸ.
- Left out: only the student-question remarks noted in finding 3, and the aside about the table of integrals in the notes. Both minor.
- Added: the original worked example (triangle, both orders), the link to 18.01 `trig-integrals` (Lecture 27, which exists and fits the cos⁴θ step), and the cosmology callout.
- `prerequisites: [non-independent-variables]` (Lecture 14) is the previous existing 18.02 page; Lecture 15 (PDEs) has no page yet. Fine.
- `leadsTo`: 18.02 Lecture 17 "Polar Coordinates" (per `_course.json`); the transcript (p. 4) and the Week 7 summary (Lecture 17 redoes the same example in polar coordinates, π/8) confirm the "why". Correct.

## Licensing
- No "rights reserved" or "courtesy" notice in either source. No figures reused; the only graph is a `<Plot>` generated from the formulas sqrt(x) and x.
- Text is rewritten throughout; no copied sentences found. "single most important point" echoes Auroux's "single most important thing to remember", a short phrase. The examples on the page are MIT's (as they must be, being the lecture's content) with rewritten explanations; the worked example and quiz are original.
- No OpenStax or LibreTexts material.

## Notes
- Notation: every double integral is written `\int\int`, no `\iint` anywhere on the page (grep: no match), so read-aloud has two integral signs to say; `content:check` reports no speech gaps.
- The Plot passes `content:check` label placement; the caption says the curves are computed from their formulas and correctly describes both slicings.
- Symbols: the page's meanings for x and y say "the outer/inner variable in dy dx order"; in the exchanged dx dy integral and in the worked example's second order the roles swap. The meanings are qualified with "in dy dx order", so they are not wrong (info only).
- The cosmology link `/courses/fundamentals-of-dark-matter/gravitational-lensing` points to an existing page whose content (surface mass density Σ, convergence, projected mass) matches the callout; the callout does not attribute the claim to MIT.
- Internal links `/courses/18-02/partial-derivatives` (Lecture 8) and `/courses/18-01/trig-integrals` exist; `content:check` reports no errors.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

- Info 1: the quarter-disc formula now cites pp. 3–4.
- Info 3: a sentence now says x and y vary independently and only the bounds for y depend on x (p. 2).
- Info 4: the caption now says the region is for 0 ≤ x ≤ 1 and that the curves swap beyond x = 1.
- Info 2 and 5 are left as they are.
