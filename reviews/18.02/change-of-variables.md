---
page: content/year-1/18.02/change-of-variables.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-18-change-of-variables/ (read: local copy lec.html, title "Lecture 18: Change of Variables"; its first .pdf link is 94fecde4fa2b1cc6f9206e823057a3c1_UZb9hZIAvL4.pdf, matching the transcript reading; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/94fecde4fa2b1cc6f9206e823057a3c1_UZb9hZIAvL4.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec18", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week8/ (read: local copy week8.pdf; PDF p. 1 is a cover; Lecture 18 on printed pp. 1–2 = PDF pp. 2–3; printed p. 1 runs through the polar Jacobian, Example 2 steps 1–2 and the start of step 3; printed p. 2 has the end of step 3, the integral ∫₀¹∫ᵥ¹ v du dv and the uv triangle remark)
  - content/year-1/18.02/_course.json (read: Lecture 18 = Change of Variables, 19 = Vector Fields)
  - content/year-4/8.286/expanding-sphere.mdx (read, for the cosmology callout: lecture 6, ρ = ρᵢ/a³)
  - calcs/18.02/change-of-variables.yaml (read; `npm run calc:test -- -k change-of-var`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Change of variables in double integrals

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 8 summary, `reading2` = transcript. Formulas "Area of an ellipse" (`reading2`, p. 1), "The scale factor of a linear change" (`reading2`, p. 2), "Linear approximation" (`reading2`, p. 2), "Jacobian" (`reading2`, p. 3), "Jacobian of polar coordinates" (`reading1`, "Lecture 18, p. 1") and "The new integral" (`reading1`, "Lecture 18, p. 2") are all at the cited place, with the small qualifications in findings 1 and 2. The reading assignment (reading1 = notes, reading2 = transcript) is used consistently. No "rights reserved" or "courtesy" notice in the transcript or the Week 8 summary (only the standard OCW Creative Commons header). No em dash on the page (grep: no match); every double integral is `\int\int`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Formula "The scale factor of a linear change" (`reading2`, p. 2) | Transcript p. 2 computes only the determinant of the vectors ⟨3, 1⟩ and ⟨−2, 1⟩ ("3 + 2. That's 5"). The second form, det [[3, −2], [1, 1]] = 5, is written only in the notes (p. 1); the transcript says rows or columns give the same determinant at the end of p. 2 / start of p. 3. | Both determinants in one formula, cited to transcript p. 2 only. | Optionally widen to `at="p. 2; notes p. 1"` or leave; the physics is right. |
| 2 | info | Formula "The new integral" (`reading1`, "Lecture 18, p. 2") | Notes p. 2 give ∫₀¹∫ᵥ¹ v du dv (the left side ∫₀¹∫₀¹ x²y dx dy is on notes p. 1). Neither the notes nor the transcript evaluate it: transcript p. 4 says only "now, we can compute this … not particularly easier … not harder either". | Adds "= ∫₀¹ v(1 − v) dv = 1/6". | Correct (see arithmetic). Optionally mark the evaluation as the page's own, e.g. "(evaluating it, as the lecture leaves to you, gives 1/6)". |
| 3 | info | Cosmology callout | 18.02 Lecture 18 treats only two variables; the three-variable Jacobian comes with triple integrals later in 18.02. | "a change of variables that rescales all three coordinates by a. Its Jacobian is a³". | Correct physics (diag(a, a, a) has determinant a³). Optionally add "(the three-dimensional version of today's rule)" so a reader does not look for it in this lecture. |

Prose page references checked against the sources:
- Opening (polar was one change; today substitutions in double integrals): transcript p. 1. Correct.
- Ellipse: squished circle, unpleasant x, y bounds, u = x/a, v = y/b, unit disc, du = (1/a) dx, dv = (1/b) dy, du dv = (1/ab) dx dy, ab × π: p. 1; notes p. 1. Correct.
- "What is the scale factor": p. 1; notes p. 1 ("must find out the scale factor"). Correct.
- u = 3x − 2y, v = x + y to simplify integrand or bounds: p. 1; notes p. 1. Rectangle → parallelogram, straight and parallel lines preserved, like a matrix: p. 1 (the student question "why is ΔA′ a parallelogram"). Correct. Constant ratio, unit square will do: end of p. 1 and p. 2; notes p. 1. "(pp. 1–2)" correct.
- Corners (0,0), (3,1), (−2,1), (1,2): p. 2; notes p. 1. Correct. ∫∫…dx dy = ∫∫…(1/5) du dv, integrand and bounds also rewritten: p. 2; notes p. 1. Correct.
- Exchange rate varies, dollars and euros, linear approximation at a point: p. 2; notes p. 1 ("scale factor depends on x and y now"). Correct.
- Sides ⟨Δx, 0⟩ → ⟨u_x Δx, v_x Δx⟩, ⟨0, Δy⟩ → ⟨u_y Δy, v_y Δy⟩, area = det × ΔxΔy; determinant of a linear transformation scales areas: p. 2. Correct.
- Jacobian J = ∂(u, v)/∂(x, y), "only a notation", du dv = |J| dx dy, absolute value since determinants are areas up to sign, "−10 … still ten times": p. 3; notes p. 1. Correct. Rows or columns: end of p. 2, start of p. 3. "(pp. 2–3)" correct.
- Polar: x_r = cos θ, x_θ = −r sin θ, y_r = sin θ, y_θ = r cos θ, r cos²θ + r sin²θ = r, |r| = r since r ≥ 0, another justification: p. 3; notes p. 1. Correct.
- Both directions, the two Jacobians are inverses (inverse matrices, determinant of the inverse), compute whichever is easier; factor not constant in general ("there it used to be five. But now, it's become r"): p. 3. Correct.
- Complete example introduced as "very silly", u = x, v = xy, simplifies neither integrand nor region: p. 3; notes p. 1. Correct.
- Step 1: Jacobian [[1, 0], [y, x]] = x, positive on the square: p. 4 (the step begins at the very end of p. 3); notes p. 1. Correct.
- Step 2: x²y · (1/x) = xy = v: p. 4; notes p. 1. Correct.
- Step 3: "the hardest part", hyperbolas xy = const, u = x increases, enter at y = 1 → v/u = 1 → u = v, leave at x = 1 → u = 1, v from 0 to 1 (the corner): p. 4; notes pp. 1–2. Correct.
- uv picture: x = 1 → u = 1, y = 1 → u = v, x = 0 squashed to the origin (compared with polar r = 0), y = 0 → v = 0, a triangle: p. 4; notes p. 2. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k change-of-var`: 9 passed. Recomputed by hand:
- Linear factor: 3·1 − 1·(−2) = 5; det [[3, −2], [1, 1]] = 3 + 2 = 5. Corner (1, 1): u = 3 − 2 = 1, v = 2. Other corners (3, 1), (−2, 1) correct.
- Polar Jacobian: cos θ · r cos θ − (−r sin θ) sin θ = r. Correct.
- Complete example: direct ∫₀¹x² dx · ∫₀¹y dy = (1/3)(1/2) = 1/6; new ∫₀¹ v(1 − v) dv = 1/2 − 1/3 = 1/6. Equal, correct.
- Worked example (a): u = x + y, v = x − y; det [[1, 1], [1, −1]] = −1 − 1 = −2, so du dv = 2 dx dy. R has vertices (0,0), (1,1), (2,0), (1,−1): a square with side √2 and area 2 = ½ · 4. Correct. Integral ½ · ∫₀²u² du · ∫₀² dv = ½ · (8/3) · 2 = 8/3 ≈ 2.67. Correct.
- Worked example (b): a = 3, b = 2, πab = 6π ≈ 18.850 → "18.85". Correct.
- Quiz 1: det [[2, 0], [0, 3]] = 6, answer 2 ("6 dx dy"). Correct.
- Quiz 2: |−4| = 4, answer 1. Correct; the explanation (areas positive, sign = orientation reversal) matches transcript p. 3.
- Quiz 3: inverse Jacobians, 1/5, answer 2. Correct; matches transcript p. 3.
- Flashcards: Jacobian definition with |J|, polar Jacobian r, and the three steps (area element, integrand, bounds by slicing in xy or drawing in uv) all correct and match notes pp. 1–2.
- Frontmatter summary: "unit square becomes a parallelogram of area 5", "du dv = 5 dx dy", "1/6 either way": all correct.
- Calcs file (info): page-own entries (`quiz-1`, `tilted-jacobian`, `tilted-integral`, `ellipse`) carry `source: {cite: reading2, …}`; harmless, as in earlier 18.02 calcs. `example-direct` is marked `page-own`, which is right, since the lecture never evaluates the integral.

## Coverage and order
- The page follows the lecture's order: ellipse by rescaling → the scale-factor question → linear change u = 3x − 2y, v = x + y, parallelogram, unit square, factor 5 → general case, linear approximation, the Jacobian, absolute value → polar Jacobian → both directions, inverse Jacobians, non-constant factor → complete example (area element, integrand, bounds by hyperbola slicing, then by the uv triangle).
- Left out (minor): the remark that dr dθ = (1/r) dx dy lets you go from polar back to xy, "usually we don't do that" (transcript p. 3); the student question about drawing r and θ as Cartesian axes (p. 3); the aside that the same calculation with x and x + Δx also gives factor 5 (p. 2). The first is covered in spirit by "The relation works either way". Nothing of substance missing.
- Added: the original worked example (tilted square; numerical ellipse), the link to `determinants-and-cross-product`, and the cosmology callout.
- `prerequisites: [polar-double-integrals]` (Lecture 17) is the previous lecture and exists. Fine.
- `leadsTo`: 18.02 Lecture 19 is "Vector Fields" in `_course.json`, and the notes' Lecture 19 opens with vector fields, work and line integrals, so "Vector fields and work: the next unit" is right. 8.286 Lecture 6: `expanding-sphere` exists with `lecture: 6`; see Notes.

## Licensing
- No "All rights reserved" or "Courtesy of" material in either source; nothing to credit beyond MIT OCW.
- No paragraph copied: the prose paraphrases in different words. Close echoes ("squashed circle" for "squished circle", "deliberately silly example" for "a very silly example", the dollars/euros image, explicitly attributed "as Auroux puts it") are short phrases or attributed. Formula chains follow the notes' equations, which is expected for maths.
- The worked example is original in (a) (own region and integrand). Part (b) is a numerical instance of MIT's own ellipse example; acceptable as a check of the formula with own numbers, but not an independent example (info).
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: "physical position = a(t) × fixed comoving position", Jacobian a³, physical volume a³V, matter density ∝ 1/a³ are all correct. The linked 8.286 page (`expanding-sphere`, Lecture 6) writes the shell radius as a(t) times the label rᵢ and derives ρ = ρᵢ/a³ from "mass fixed, volume grows as a³", so the link supports the density claim. That page labels shells by initial radius rather than using the word "comoving" (Guth's comoving coordinates in notches appear in earlier 8.286 lectures); the attribution is fair, and the `leadsTo` "why" ("physical volumes are a³ times comoving ones: a Jacobian") is accurate. See finding 3 for the 2D/3D point. The callout makes no claim needing attribution to Guth.
- The source title "MIT 18.02 Lecture 18: Change of Variables" matches the OCW lecture page and `_course.json`; reading URLs match the lecture page's transcript link and the Week 8 summary resource.

## Resolution (2026-11-16, by the page author)

- Info 1: the scale-factor formula now also cites notes p. 1 for the second determinant.
- Info 2: a bracket says the evaluation to 1/6 is the page's own, with the direct check.
- Info 3: the callout now says the a³ Jacobian is the three-dimensional version of the lecture's rule.
- The coverage omissions are left as they are.
