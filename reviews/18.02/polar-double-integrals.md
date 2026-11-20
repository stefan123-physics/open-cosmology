---
page: content/year-1/18.02/polar-double-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-17-polar-coordinates/ (read: local copy lec.html; its first .pdf link is d121837a21b59e800e738135b8597a36_60e4hdCi1D4.pdf, matching reading2; title "Polar Coordinates" matches `_course.json`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/d121837a21b59e800e738135b8597a36_60e4hdCi1D4.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec17", 5 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week7/ (read: local copy week7.pdf; PDF p. 1 is a cover; Lecture 17 on printed pp. 2–3 = PDF pp. 3–4; printed p. 2 ends after "the rotational energy is ½ I₀ω²", printed p. 3 has I_x and both disc examples)
  - content/year-1/18.02/_course.json (read: Lecture 17 = Polar Coordinates, 18 = Change of Variables)
  - content/year-4/8.286/homogeneous-expansion.mdx (read, for the cosmology callout)
  - content/year-1/8.01/moment-of-inertia.mdx and content/year-1/18.02/double-integrals.mdx (exist; link targets)
  - calcs/18.02/polar-double-integrals.yaml (read; `npm run calc:test -- -k polar-double`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Double integrals in polar coordinates, and their uses

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 7 summary, `reading2` = transcript. Formulas "Area element" (`reading2`, p. 1), "The quarter disc in polar coordinates" (`reading2`, p. 1), "Area and mass" (`reading1`, "Lecture 17, p. 2"), "Average value" (`reading2`, p. 2), "Centre of mass" (`reading2`, p. 3), "Moment of inertia about the origin" (`reading2`, p. 4), "Disc about its centre" (`reading2`, p. 4) and "Disc about a point on its rim" (`reading2`, pp. 4–5) are all at the cited place. The rim example spans the page break: bounds r = 2a cos θ and the start of "−π/2 to π/2" on p. 4, the inner integral 4a⁴cos⁴θ and the result (3/2)πa⁴ on p. 5, so "pp. 4–5" is right. No "rights reserved" or "courtesy" notice in the transcript or the Week 7 summary (only the standard OCW Creative Commons header and the OCW terms footer). Every double integral is written as `\int\int` (two integral signs); no `\iint` anywhere on the page (grep: no match), and no em dash.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Paragraph after "Disc about a point on its rim": "(The integral of cos⁴θ is done with double-angle formulas or the table in the course notes, p. 5.)" | Transcript p. 5: either the method from yesterday, or "in the notes at the beginning of section 3b there are formulas for these particular kinds of integrals". | "the table in the course notes, p. 5". Read literally, "p. 5" looks like a page of the course notes, but it is the transcript page; the notes location is section 3B, not a page 5. | "(…double-angle formulas, as in the last lecture, or the formulas at the start of section 3B of the course notes; transcript p. 5.)" |
| 2 | info | "The quarter disc in polar coordinates" formula | Transcript p. 1 (text layer): "r squared over two minus r squared over four" for the antiderivative of r − r³ (a spoken slip or transcription error; the notes p. 2 and the result 1/2 − 1/4 = 1/4 confirm r⁴/4). | [r²/2 − r⁴/4]₀¹, correct. | Correct as written. AGENTS.md rule 4 asks for a brief bracketed note when the page differs from a lecture slip; here the slip is only in the spoken words and the page agrees with the notes, so a note is optional. |
| 3 | info | "Average values and the centre of mass" | Transcript p. 3: with uniform density the weighted average reduces to the plain average; the centre of mass is also where all the mass could be concentrated for translational motion. | Gives only the balancing-point picture; the uniform-density reduction is not stated (it is implicit in "take it uniform, even δ = 1"). | Optional half-sentence. Not needed for correctness. |
| 4 | info | "Area element", "(p. 1)" for the ray method | Transcript p. 1 describes rays for this example; p. 2 gives the general rule ("in 99% of the cases you will integrate over r first … slice radially"). | Cites p. 1 only. | Optionally "(pp. 1–2)". |

Prose page references checked against the sources:
- Opening (quarter disc was unpleasant, polar is better): p. 1. Correct.
- x = r cos θ, y = r sin θ, θ from the positive x-axis: p. 1; notes p. 2. Correct. Order r first then θ "makes the most sense usually", fix a ray: p. 1. Correct.
- Pieces of rings between r, r + Δr and θ, θ + Δθ, nearly rectangles, sides Δr and r Δθ "not Δθ": p. 1; notes p. 2 ("ΔA ≈ (Δr)(r Δθ)"). Correct.
- r + Δr for the outer arc, same in the limit, second proof by change of variables "next week": p. 2. Correct.
- Quarter disc: x² + y² = r², 0 ≤ r ≤ 1, 0 ≤ θ ≤ π/2: p. 1; notes p. 2. Correct. "Simpler region or integrand", trade-off, x becomes r cos θ: pp. 1–2; notes p. 2 ("useful if either integrand or region have a simpler expression"). Correct.
- Double integrals not mainly about volumes, summing a function over a region: p. 2. Area = ∫∫1 dA, slab/prism of height 1, mass = ∫∫δ dA, uniform δ comes out, triple integrals in a few weeks: p. 2. δ = lim Δm/ΔA, may vary: notes p. 2. Correct.
- Average value, divide by the size of the sample: p. 2; notes p. 2. Weighted average divided by total weight (mass): pp. 2–3. Centre of mass, balance on a finger: p. 3; formulas notes p. 2. Correct.
- No information on density, take it uniform, even 1: p. 3. Average of r positive for a disc at the origin; average θ = π on [0, 2π] or 0 on [−π, π]; compute x̄, ȳ, possibly in polar: p. 3. Correct.
- Mass vs moment of inertia ("how hard to impart translation / rotation"): p. 3; notes p. 2. ω = dθ/dt, v = rω, ½mv² = ½mr²ω²: p. 3; the coefficient called the moment of inertia: top of p. 4; notes p. 2. "(pp. 3–4)" correct.
- I₀ = ∫∫r²δ dA, rotational energy ½I₀ω²: p. 4; notes p. 2. I_x: distance |y|, "slightly strange but I have y": p. 4; notes p. 3. Correct.
- Uniform disc, "resist the urge" to set r = a: p. 4; notes p. 3. Frisbee, move the origin to the rim, right triangle with hypotenuse 2a, r = 2a cos θ, θ from −π/2 to π/2 (tangent circle): pp. 4–5; notes p. 3 ("diameter along x-axis"). Correct. "Three times harder": p. 5. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k polar-double`: 10 passed. Recomputed by hand:
- Quarter disc: ∫₀¹ (r − r³) dr = 1/2 − 1/4 = 1/4; (1/4)(π/2) = π/8 ≈ 0.3927. Correct; equals the Cartesian result of the previous page.
- Disc about centre: ∫₀ᵃ r³ dr = a⁴/4; × 2π = πa⁴/2. Correct.
- Disc about rim: inner (2a cos θ)⁴/4 = 4a⁴cos⁴θ; ∫_{−π/2}^{π/2} cos⁴θ dθ = 3π/8; 4a⁴ · 3π/8 = 3πa⁴/2. Ratio to πa⁴/2 is 3. Correct (also consistent with the parallel-axis theorem: πa⁴/2 + (πa²)a² = 3πa⁴/2).
- Worked example (a): area ½π·4 = 2π; ∫₀^π sin θ dθ · ∫₀² r² dr = 2 · 8/3 = 16/3; ȳ = (16/3)/(2π) = 8/(3π) ≈ 0.849 (= 4R/3π with R = 2). Correct; below height 1, correct reasoning.
- Worked example (b): M = 2π · ∫₀¹ r² dr = 2π/3 ≈ 2.094. I₀ = 2π · ∫₀¹ r⁴ dr = 2π/5 ≈ 1.257 → "1.26". Uniform disc of the same mass: δ = (2π/3)/π = 2/3, I₀ = (2/3)(π/2) = π/3 ≈ 1.047 → "1.05". All correct; the conclusion (more mass outwards, larger I) is right.
- Quiz 1: r dr dθ, answer 1. Correct; explanation right.
- Quiz 2: ∫₀³ r dr = 9/2, × 2π = 9π, answer 1. Correct.
- Quiz 3: I_x = ∫∫y²δ dA, answer 1. Correct; explanation matches transcript p. 4.
- Quiz 4: answer 0. Correct; matches transcript p. 3.
- Flashcards: all three correct.
- Calcs file (info): the `disc-rim` entry has `shown: ['= \frac{3\pi a^4}{2}" cite']`, i.e. it matches the page source including the closing quote of the `tex` attribute and the start of `cite`. It works but is brittle (it breaks if the attribute order changes); `'= \frac{3\pi a^4}{2}'` would be cleaner. Page-own entries (`quiz-2`, worked example) carry `source: {cite: reading2, …}`; harmless, as in the Lecture 16 calcs.

## Coverage and order
- The page follows the lecture's order: polar coordinates and the ray method → dA = r dr dθ → quarter disc (π/8) → when polar helps, trade-off → student question on r vs r + Δr → uses: area, mass → average value → weighted average → centre of mass → density questions, why not average r and θ → moment of inertia from kinetic energy → I₀ → I_x → uniform disc about its centre → about a point on the rim → "three times".
- Left out: only the minor points in findings 3 and 4 and classroom asides (sound check, the eraser demonstration, problem-set averaging analogy). Nothing of substance.
- Added: the original worked example (half-disc centroid; disc with δ = r), the link to 8.01 `moment-of-inertia`, and the cosmology callout.
- `prerequisites: [double-integrals]` (Lecture 16) is the previous lecture. Fine.
- `leadsTo`: 18.02 Lecture 18 "Change of Variables" (per `_course.json`). The "why" is supported: transcript p. 2 says the formula dA = r dr dθ gets "another proof … using changes of variables, next week". Correct.

## Licensing
- No "All rights reserved" or "Courtesy of" material in either source; nothing to credit beyond MIT OCW.
- No paragraph copied: the prose is a paraphrase in different words. Phrases close to the notes ("sweep the region by rays", "how hard it is to impart translation motion" → "how hard it is to set an object moving") are short standard wording or reworded. The formula chains follow the notes' equations, which is expected for maths.
- The worked example is original (own region and density), not taken from MIT.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: the cosmic mean density as the volume integral of a lumpy density divided by the volume (the 3D analogue of f̄) is correct and fairly stated, and it flags the 3D step. "On large scales the universe is homogeneous, so this average is the same wherever it is taken" agrees with the linked 8.286 page (`homogeneous-expansion`, Lecture 4: homogeneous on scales of a few hundred million light-years); the sentence's own "over a large region" supplies the needed qualification. No claim needs attribution to Guth. Fine.
- Notation: `\int\int` is used in every formula, the quiz, the flashcards and the summary, as required for read-aloud; the frontmatter summary uses plain "∫∫".
- The source title "MIT 18.02 Lecture 17: Polar Coordinates" matches the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the cos⁴θ bracket now points to the formulas at the start of section 3B of the course notes, citing transcript p. 5.
- Info 3: the page now says a weighted average with uniform density is the plain average, and that the centre of mass is where all the mass could be concentrated.
- Info 5: the calcs anchor for the rim result no longer includes the attribute quote.
- Info 2 and 4 are left as they are.
