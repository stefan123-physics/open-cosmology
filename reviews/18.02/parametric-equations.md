---
page: content/year-1/18.02/parametric-equations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-5-parametric-equations/ (read: local copy of the lecture page HTML; title "Lecture 5: Parametric Equations"; its transcript link is the reading2 URL below)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/8d85eab24f38bbe94f87a70935c2afcc_57jzPlxf4fk.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec05", 14 pages, no printed page numbers; cited page = PDF page, text per page checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read: local copy week2.pdf; PDF p. 1 is a cover; Lecture 5 on printed pp. 3–4 = PDF pp. 4–5, confirmed with pdftotext -f/-l; printed p. 3 ends with the parallel/contained case, printed p. 4 starts with "General parametric curves")
  - content/year-4/8.286/closed-universe-cycloid.mdx (read: Lecture 9, status reviewed; for the cosmology callout)
  - content/year-1/18.02/_course.json (read: Lecture 5 = Parametric Equations, Lecture 6 = Kepler's Second Law)
  - calcs/18.02/parametric-equations.yaml (read; `npm run calc:test -- -k parametric-eq`: 18 passed)
  - data/symbols.json meanings scoped to this page (read)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Parametric equations of lines and the cycloid

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are the printed page numbers (Lecture 5 = printed pp. 3–4). `reading1` = Week 2 summary, `reading2` = transcript. Every `<Formula>` cites `reading2` with a transcript page, except "The lecture's line", which cites `reading1` at "Lecture 5, p. 3"; both are right. Every in-text "notes, p. N" matches the printed page (lines and the plane on p. 3; the cycloid and the Taylor argument on p. 4). No "rights reserved" or "courtesy" notice in the transcript or the Week 2 summary.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Summary, second and third bullets ("ax + by + cz = d", "ax + by + cz − d") | (Not an MIT difference; symbol popups.) | The page's `a` meaning in data/symbols.json is "the radius of the rolling wheel; in the cosmology note, the scale factor", and `c` is only "the speed of light" (cosmology note). Here `a` and `c` are the plane's coefficients, so the tap-to-explain popups and read-aloud glossary give the wrong meaning in these two bullets (`b` and `d` already have the plane-coefficient meaning). | Add "the coefficient of x in a plane's equation ax + by + cz = d (Summary)" to the page's `a` meaning and "the coefficient of z …" to its `c` meaning, or rewrite the bullets without letters (for instance "Substituting the line into the plane's equation …", "when the plane's left side minus its right side has opposite signs at them"). |
| 2 | info | Formula "Near the bottom of the cycloid" | Notes p. 4: "Hence for θ → 0, y/x ≈ (½θ²)/(⅙θ³) = 3/θ → ∞". | "y/x ≈ 3/θ → ∞", with "near the bottom" only in the text before it. | Correct as θ → 0⁺ (for θ → 0⁻, on the arch to the left, it goes to −∞; the tangent is vertical either way). Optional: write "→ ∞ as θ → 0⁺" or "\|y/x\| → ∞". |
| 3 | info | "What happens at the bottom?", last paragraph | Notes p. 4 name the answer "vertical tangent (cusp)". | "The tangent is vertical". | Optional: add the word "cusp", since both branches meet there with the same vertical tangent; it also explains why the screen shows a point. |
| 4 | info | Formula "Taylor approximation" | Transcript p. 13 and notes p. 4 include the term t³/6 · f‴(0) explicitly. | Formula stops at t²/2 · f″(0) + ⋯; the t³ term is described in words in the preceding sentence. | Acceptable (the symbol system allows at most two primes, as the author notes), and the words give the term correctly. The sin θ result does need that third-order term, which the text says. No change needed. |
| 5 | info | "Splitting the position vector", third bullet | Transcript pp. 10–11: in the picture drawn, BP points left and down at angle θ from the vertical. | "pointing left and down: BP = ⟨−a sin θ, −a cos θ⟩". | Right for the drawn position (0 < θ < π/2); the components hold for every θ. Optional: "(in the picture, pointing left and down)". |
| 6 | info | "Choice of parameter" | Transcript p. 9: one could also use the distance the wheel has moved; the angle gives the simplest answer. | Only the angle is mentioned. | Optional half-sentence: "(the distance rolled would also do)". |
| 7 | info | Frontmatter `source.title` | OCW lecture page title: "Lecture 5: Parametric Equations" (also `_course.json`). | "MIT 18.02 Lecture 5: Parametric Equations for Lines and Curves". | Use "MIT 18.02 Lecture 5: Parametric Equations" to match OCW, or keep knowingly (the content is indeed lines and curves). |
| 8 | info | Cosmology callout | 8.286 page: the wheel's radius is α; a/√k is the height. | "with the scale factor playing the role of the height y and time the role of x". | Correct. Since on this page `a` is the wheel's radius, a reader may confuse the two `a`s; optional: "(there the wheel's radius is α, and a is the scale factor)". |

Every formula and prose page reference was checked against its cited location:
- "A line as a moving point" (`reading2`, pp. 2–3): Q₀Q(t) = t Q₀Q₁ at the end of p. 2; Q(t) = Q₀ + t Q₀Q₁ on p. 3. Correct. Notes p. 3 have both (and call Q₀Q₁ the "velocity").
- "The lecture's line" (`reading1`, Lecture 5, p. 3): ⟨x + 1, y − 2, z − 2⟩ = t⟨2, 1, −3⟩, x = −1 + 2t, y = 2 + t, z = 2 − 3t on printed p. 3. Correct (also transcript p. 3, where the text layer lost the plus signs).
- Two points or a point and a vector, Q₀ = (−1, 2, 2), Q₁ = (1, 3, −1): p. 1. t = 1/2, 2, −2: p. 2. Constants = point at t = 0, coefficients = vector along the line: p. 3. Correct.
- Plane x + 2y + 4z = 7 and the same-side question: p. 4 (notes p. 3). Values 11 and 3: pp. 4–5. Half-spaces and continuity argument: p. 5. Correct.
- "Substituting the line" (`reading2`, p. 5): (−1 + 2t) + 2(2 + t) + 4(2 − 3t) = 11 − 8t on p. 5; notes p. 3. Correct. t = 1/2 (p. 5), average of 11 and 3 and Q(1/2) = (0, 5/2, 1/2) (p. 6): "pp. 5–6" correct.
- Parallel / contained cases with the example "13": p. 6; "something times t plus something" and the zero coefficient: pp. 6–7; dot product 1·2 + 2·1 + 4·(−3): p. 7. Correct.
- Cycloid intro, bicycle reflector: p. 7; wheel of radius a on the x-axis, P starts at origin, arches once per turn: pp. 7–8; time not natural, angle simplest: pp. 8–9; A, B and OP = OA + AB + BP: p. 9; OA = ⟨aθ, 0⟩, rolling without slipping, radians, AB = ⟨0, a⟩: p. 10; BP: pp. 10–11. Correct; notes p. 4 match.
- "The cycloid" (`reading2`, p. 11): x = aθ − a sin θ, y = a − a cos θ on p. 11; notes p. 4. Correct.
- Bottom-point question: p. 11 (notes p. 4 list the four options). a = 1 and the rough approximations: p. 12. Correct.
- "Taylor approximation" (`reading2`, pp. 12–13): f(0) at the end of p. 12, the t, t²/2 and t³/6 terms on p. 13. Correct.
- "Near the bottom of the cycloid" (`reading2`, p. 13): sin θ ≈ θ − θ³/6, cos θ ≈ 1 − θ²/2, x ≈ θ³/6, y ≈ θ²/2, y/x = 3/θ → ∞: p. 13. Correct. "Down and back up, only slightly forward": end of p. 13 and p. 14, so "pp. 13–14" correct.

## Arithmetic and answer checks
- Lecture numbers: −1 + 4 + 8 = 11; 1 + 6 − 4 = 3; (−1 + 2t) + (4 + 2t) + (8 − 12t) = 11 − 8t; 11 − 8t = 7 ⇒ t = 1/2; Q(1/2) = (−1 + 1, 2 + 1/2, 2 − 3/2) = (0, 5/2, 1/2); 2 + 2 − 12 = −8. All correct.
- Worked example (a): Q₀Q₁ = ⟨2, −2, 1⟩; x = 2t, y = 1 − 2t, z = 3 + t; x + y + 2z = 7 + 2t; = 10 at t = 3/2; point (3, −2, 9/2) gives 3 − 2 + 9 = 10. At Q₀: 0 + 1 + 6 = 7; at Q₁: 2 − 1 + 8 = 9; both < 10, same side, crossing at t = 3/2 > 1, beyond Q₁. Coefficient ⟨1, 1, 2⟩ · ⟨2, −2, 1⟩ = 2. All correct.
- Worked example (b): 0.35(π/2 − 1) = 0.35 × 0.5708 = 0.1998 ≈ 0.20 m; y = 0.35 m (level with the hub, correct); 0.35π = 1.0996 ≈ 1.10 m; y = 0.70 m. Correct.
- Worked example (c): 0.1 − sin 0.1 = 0.1 − 0.0998334 = 0.00016658 ≈ 0.000167; 1 − cos 0.1 = 0.0049958 ≈ 0.00500; ratio 29.99 ≈ 30.0; 3/θ = 30. Correct.
- The worked example is original (own line, plane, wheel size and numerical check); the lecture's own line/plane example appears in the main text, cited, as the lecture's content.
- Plot: curve x = s − sin s, y = 1 − cos s for s ∈ [0, 12.566] = [0, 4π], two arches, generated from the formula; x reaches 4π ≈ 12.57 < 13 and y ≤ 2 < 2.6, so it fits the domain and range. Points (π, 2) and (2π, 0) lie on the curve. Caption: top at 2a after half a turn, floor again at θ = 2π = 6.28… "one circumference further on" (2πa). All correct; label placement passes content:check.
- Quiz 1 (index 0): Q₀Q₁ = ⟨2, 1, 0⟩, x = 1 + 2t, y = t, z = 2. Correct; choice 2 does not pass through (1, 0, 2), choice 3 uses ⟨3, 1, 2⟩, choice 4 is a plane. Explanation right.
- Quiz 2 (index 2, parallel outside): a constant ≠ 9 for all t means no intersection. Correct; explanation right.
- Quiz 3 (index 0): x ≈ θ³/6, y ≈ θ²/2. Correct; explanation right.
- Flashcards: all three correct.
- calcs/18.02/parametric-equations.yaml: 18 entries, all pass, values agree with the page; `origin: mit` / `page-own` labels are right. Info: page-own entries carry a `source` citing the transcript (harmless, as in the Lecture 4 file). The worked example's Q₀ value 7 and the quarter-turn y = 0.35 m have no entries (optional).

## Coverage and order
- MIT order (transcript): lines as intersections vs moving points, Q₀ and Q₁ (p. 1) → constant speed, Q₀Q(t) = t Q₀Q₁ (p. 2) → coordinates, Q(t) = Q₀ + t Q₀Q₁, general form (p. 3) → plane x + 2y + 4z = 7, same/opposite sides vote, values 11 and 3 (pp. 4–5) → substitution, t = 1/2, Q(1/2) (pp. 5–6) → parallel/contained cases, coefficient = dot product (pp. 6–7) → general parametric curves, cycloid, applet (pp. 7–8) → choice of parameter (pp. 8–9) → OA + AB + BP (pp. 9–11) → bottom-point question, Taylor, vertical tangent (pp. 11–14). The page follows this order exactly.
- Left out (minor): the alternative parameter "distance rolled" (#6); the "velocity" name for Q₀Q₁ in the notes; class votes, the unicycle anecdote and the applet demonstration (not content).
- Added: the worked example and the cosmology callout. Nothing else beyond the lecture.
- leadsTo 18.02 Lecture 6: `_course.json` title "Kepler's Second Law"; the "why" (velocity, acceleration and Kepler's second law for parametric motions) is consistent with that title. The Lecture 6 transcript and its notes (Week 3 summary) were not read, so the velocity/acceleration part is unverified here (uncertain, but it is the standard content of that lecture).
- leadsTo 8.286 Lecture 9: the closed-universe page is Lecture 9 and derives ct = α(θ − sin θ), a/√k = α(1 − cos θ). Correct.

## Licensing
- No paragraph copied from the transcript or the notes; prose is rewritten. Short phrases ("trajectory of a moving point", "rolling without slipping", "vertical tangent") are standard terminology.
- The lecture's examples (line, plane, cycloid setup) are MIT's and cited; the worked example uses its own numbers. The plot is generated from the formula, not taken from the applet or the board.
- No "All rights reserved" or "Courtesy of" material in either source; no figures reproduced. No OpenStax or LibreTexts material. The 18.01 Taylor series link (/courses/18-01/taylor-series) points to an existing page.

## Notes
- Cosmology callout checked against content/year-4/8.286/closed-universe-cycloid.mdx: same equations, same roles (ct as x, a/√k as y), big bang at θ = 0, maximum at θ = π, big crunch at θ = 2π. The claim that the vertical tangent is the scale factor rising infinitely steeply at the big bang is correct: d(a/√k)/d(ct) = sin θ/(1 − cos θ) → ∞ as θ → 0, consistent with a ∝ t^(2/3) (the 8.286 page's own small-θ worked example). Attribution "Guth solves the Friedmann equation" is fair (Lectures 8–9).
- No em dashes in the page text.
- Status is `draft`; it can become `reviewed` once #1 is resolved (the info items are optional).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the two Summary bullets no longer write the plane as ax + by + cz = d (so a and c keep this page's meanings); the meanings for b and d were removed.
- Info: y/x → ∞ is now marked θ → 0⁺; the notes' word "cusp" is added; `source.title` is now "MIT 18.02 Lecture 5: Parametric Equations"; the callout says that in 8.286 the wheel's radius is α and a is the scale factor.
- The other info items are left as they are.
