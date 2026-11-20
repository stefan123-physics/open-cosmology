---
page: content/year-2/18.03/substitution-methods.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-4-first-order-substitution-methods/ (read: local copy lec.html; its transcript link is bbbddedea3b92faef8156743f31f0009_WBJ_iXudb-s.pdf, matching reading1)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/bbbddedea3b92faef8156743f31f0009_WBJ_iXudb-s.pdf (read: local copy transcript.pdf, 5 PDF pages, no printed page numbers, header "MITOCW | 18-03_L4"; checked page by page with pdftotext -f N -l N)
  - content/year-2/18.03/_course.json (read: Lecture 5 = "First-order Autonomous ODEs"); the Lecture 5 source itself was not read
  - calcs/18.03/substitution-methods.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k substitution-methods`: 6 passed)
  - components/Plot.tsx (read: fixed height 360, no equal-aspect option)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Substitutions: scaling, Bernoulli and homogeneous equations

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers; each page repeats the last line of the previous one). No "rights reserved" or "courtesy" notice in the transcript or the lecture HTML page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The boat and the lighthouse", Plot and caption | Not MIT (page's own graph). | Parametric x = e^θ cos θ, y = e^θ sin θ for θ ∈ [−3, 1.5] in a window x ∈ [−5, 5], y ∈ [−4, 4]; caption: "drawn ... for θ from −3 to 1.5: at every point the path makes a 45° angle with the line to the origin." | Two problems, both recomputed: (a) y(1.5) = e^1.5 sin 1.5 = 4.47 > 4, so the curve leaves the window at θ ≈ 1.401 (y = 4.00) and the last part (θ 1.40 to 1.50) is clipped; the caption's "to 1.5" is not what is shown. (b) The curve only spans x ∈ [−0.07, 1.55], y ∈ [−0.32, 4.47], so it fills a thin strip of a 10-wide window, and since Plot has a fixed 360 px height and no equal-aspect option, the axes are not equally scaled: the 45° angle the caption points to will not look like 45°, and the spiral looks like a single arc. Suggest a window that matches the curve and is roughly square in the plot's shape (e.g. domain [−1, 2], range [−0.5, 4.5] with θ up to 1.5, or reduce the θ end to ≈ 1.35), and add "(axes not to the same scale)" to the caption, or drop the 45° visual claim. |
| 2 | info | "Bernoulli equations", example | Transcript p. 3: "So, I should multiply this through by x squared", then immediately multiplies by x. | Integrating factor x (correct). | Lecturer slip, correctly not repeated. Optionally add a short bracket per writing rule 4 ("the lecture says x² for a moment; the factor is x"). |
| 3 | info | "The boat and the lighthouse" and "Homogeneous equations" | Other transcript slips: p. 4 "if this was the point, x over y" (means (x, y)); p. 4 "put the answer back in terms of z and y" (means x and y); p. 5 "put z equals y over z" (means y/x); p. 5 "the numerator is one minus z squared ... (one plus z squared)" (self-corrected); p. 2 the "concealed" form "xy prime plus xy prime minus xy" is garbled. | Page writes all of these correctly ("go back to y and x", z = y/x, 1 + z²) and omits the garbled concealed form. | No change needed; none of the slips is repeated. |
| 4 | info | "Homogeneous equations", example xy′ = √(x² + y²) | Transcript p. 3: divide by x and tuck it inside the root. | "is √(1 + (y/x)²)" | Holds for x > 0 (for x < 0 the sign flips); the lecturer makes the same tacit assumption. Optional "(for x > 0)". |
| 5 | info | "The boat and the lighthouse", formula "Integrated" vs worked example (b) | Transcript p. 5: "log x". | "Integrated" uses ln x; worked example (b) uses ln\|x\|. | Consistent with the lecture (the boat is in x > 0, where tan α = y/x gives α = θ). Optional: say x > 0 once, or use ln\|x\| in both. |
| 6 | info | Worked example (a) | Not MIT. | Divides by y² without comment. | The solution y = 0 is lost by the division (it is not of the form 1/(1 + Ce^(−x))). Optional bracket "(y = 0 is also a solution)"; the lecture does not mention this either. |
| 7 | info | "Bernoulli equations", "The arbitrary constant is tucked inside the solution" | Transcript p. 3: "The arbitrary constant is tucked into the solution." | Near-verbatim. | One short sentence; acceptable, but could be reworded ("the constant sits inside the fraction, not added on"). Likewise "Learn the method, not the final formula" echoes p. 2 "Learn methods, not final formulas" (short, acceptable). |

Every formula and every prose page reference was checked against its cited location:
- Opening: only two general methods, separable and linear; others reduced to these by a change of variables: p. 1. Correct.
- Scaling x₁ = x/a, y₁ = y/b; reasons (change units, dimensionless, reduce/simplify constants): p. 1. Correct.
- dT/dt = k(M⁴ − T⁴), high temperatures, external temperature M: p. 1. Correct.
- T₁ = T/M, inverse form T = MT₁ "because it is T that appears": p. 1. Correct. M dT₁/dt = kM⁴(1 − T₁⁴), k₁ = kM³, "no harder and no easier", k₁ has inverse time units, lumping constants: p. 1. Correct.
- Direct vs inverse substitution, ∫x√(1 − x²) dx with u = 1 − x², ∫√(1 − x²) dx with x = sin u, "look practically the same": p. 2. Correct. The rule "look at what you have to substitute for" is stated on p. 4 (and applied on p. 2 to T); citing the paragraph to p. 2 is acceptable.
- Bernoulli form, n = 2, 3, ½, −5, n = 0 linear, n = 1 separable, no extra term (adding one spoils it), divide by yⁿ, v = y^(1−n), v′ = (1 − n)y^(−n)y′, v′/(1 − n) = pv + q, convert back, "learn methods": all p. 2. Correct.
- Example y′ = y/x − y²: posed and reduced to v′ + v/x = 1 on p. 2; integrating factor x, xv = x²/2 + C, y = 2x/(x² + C₁), constant "tucked into" the solution on p. 3. "(pp. 2–3)" and formula `at="p. 3"` correct.
- Homogeneous: different use of the word, y′ = F(y/x), examples x²y/(x³ + y³) and xy′ = √(x² + y²), zoom x = ax₁, y = ay₁ leaves dy/dx and y/x unchanged: p. 3. Correct.
- Method: direct z = y/x leads to a quotient-rule mess (pp. 3–4); y = zx, y′ = z′x + z, x dz/dx = F(z) − z, separate, convert back: p. 4. Formula `at="p. 4"` correct.
- Lighthouse, 45°, why it is a differential equation (a curve, information about its slope), tan α = y/x, tan(α + 45°) formula, y′ = (x + y)/(x − y): p. 4. Correct.
- xz′ = (1 + z)/(1 − z) − z: p. 4; = (1 + z²)/(1 − z) and separation: p. 5. "(pp. 4–5)" correct. arctan z − ½ ln(1 + z²) = ln x + c: p. 5. Correct.
- arctan(y/x) = ln√(x² + y²) + c, polar θ = ln r + c, r = Ce^θ, "exponential spiral": p. 5. Correct.

## Arithmetic and answer checks
- Scaling: d(MT₁)/dt = k(M⁴ − M⁴T₁⁴) ⇒ dT₁/dt = kM³(1 − T₁⁴). Correct; units of k are 1/(time·temperature³), so k₁ = kM³ has 1/time. Correct.
- Bernoulli general: d/dx y^(1−n) = (1 − n)y^(−n)y′; dividing y′ = py + qyⁿ by yⁿ gives v′/(1 − n) = pv + q. Correct.
- Lecture example: v = 1/y, −v′ = v/x − 1 ⇒ v′ + v/x = 1; (xv)′ = x; v = x/2 + C/x = (x² + 2C)/(2x); y = 2x/(x² + C₁). Verified by substitution (calcs `bernoulli-example`).
- Homogeneous examples: x²y/(x³ + y³) ÷ x³/x³ = (y/x)/(1 + (y/x)³). Correct.
- Boat: tan(α + 45°) = (y/x + 1)/(1 − y/x) = (x + y)/(x − y). Correct. (1 + z)/(1 − z) − z = (1 + z − z + z²)/(1 − z) = (1 + z²)/(1 − z). Correct. ∫(1 − z)/(1 + z²) dz = arctan z − ½ ln(1 + z²). Correct. ln x + ½ ln(1 + y²/x²) = ln√(x² + y²). Correct. θ = ln r + c ⇒ r = Ce^θ. Correct.
- Graph claim: for r = e^θ, tan ψ = r/(dr/dθ) = 1, so the tangent makes 45° with the radius, and the tangent direction is θ + 45°, the same as α + 45° with α = θ. Correct (calcs `spiral-45`). Window and clipping: see finding 1.
- Worked example (a): v′ + v = 1, (e^x v)′ = e^x, v = 1 + Ce^(−x), y = 1/(1 + Ce^(−x)). Verified by substitution (calcs `logistic`). "Every positive solution approaches 1": for any C, y → 1 as x → ∞ wherever the solution exists for large x; correct.
- Worked example (b): (x² + y²)/(xy) = (1 + z²)/z; xz′ = 1/z; ½z² = ln|x| + c; y² = x²(2 ln|x| + C). Verified by differentiation: 2yy′ = 2y²/x + 2x ⇒ y′ = y/x + x/y. Correct (calcs `homogeneous-example`, x > 0 samples).
- Quiz 1 (index 1, v = y^(1−n)): correct; explanation right. Quiz 2 (index 1, unchanged by zooming): correct. Quiz 3 (index 0, y = zx): correct; explanation right.
- Flashcards: all three correct.
- calcs/18.03/substitution-methods.yaml: 6 identity entries, all pass, and match the page. Info: `logistic` and `homogeneous-example` are `origin: page-own` but carry `source: {cite: reading1, at: ...}` (p. 2, pp. 3–4) as for the methods they use; harmless. No entry checks the scaling step k₁ = kM³ or the separated form (1 + z²)/(1 − z); both are simple and were checked by hand above.

## Coverage and order
- MIT order: two general methods (p. 1) → scaling, reasons, radiation cooling example, lumping constants (p. 1) → direct vs inverse substitution with the two integrals (p. 2) → Bernoulli equation, method and example (pp. 2–3) → homogeneous equations, examples, zoom invariance (p. 3) → method y = zx (pp. 3–4) → lighthouse and boat, solution, exponential spiral (pp. 4–5). The page follows this order exactly.
- Left out (minor, optional): the remark that scaling would have helped on Problem Set 1 (drug/hormone elimination); the "concealed" form of the Bernoulli example (garbled in the transcript); the "space is homogeneous" aside; the closing remark that the problem set up in polar coordinates gives the answer at once (p. 5), which would be a nice one-line addition since it explains why the spiral appears.
- Added: the graph and the worked example (both original). No cosmology callout; none is required, though scaling to dimensionless variables (as in the Friedmann equation) would be a fair optional link.
- leadsTo 18.03 Lecture 5: the syllabus title is "First-order Autonomous ODEs", and "autonomous equations y′ = f(y), critical points and stability" matches that title. The Lecture 5 source itself was not read, so the "critical points and stability" detail is consistent with the title but unverified here.
- Links: `/courses/18-01/separation-of-variables` (18.01 Lecture 16 page exists) and `/courses/18-03/linear-first-order-equations` exist.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the source; nothing to credit beyond the MIT source.
- No OpenStax or LibreTexts material.
- Prose is rewritten; only short phrases echo the transcript (finding 7). The lecture's examples (radiation cooling, y′ = y/x − y², the two homogeneous examples, the lighthouse) are used as the lecture's examples with citations, which is appropriate; the worked example (y′ = y − y², y′ = (x² + y²)/(xy)) and the graph are original.

## Notes
- The page is accurate: every formula, citation page and number checks out, and no lecturer slip is repeated. The only substantive issue is the graph window (finding 1).
- `npm run content:check` reports 0 errors.

## Resolution (2026-11-16, by the page author)

- Warning: the boat graph now uses θ from −3 to 1.4 in a window x ∈ [−1, 2], y ∈ [−0.5, 4.5], and the caption says the axes are not to the same scale, so the 45° angle looks distorted.
- Info: the polar step now says x > 0; worked example (a) notes that dividing by y² loses y = 0. Other info items: no change (the page repeats none of the lecturer's slips).
