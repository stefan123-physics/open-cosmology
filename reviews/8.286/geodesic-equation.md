---
page: content/year-4/8.286/geodesic-equation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-13-non-euclidean-spaces-spacetime-metric-and-geodesic-equation/ (read via the Lecture 13 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/6dd048a7b2e1f9a96fcb9db67c117340_eUYIcR1VGns.pdf (read via a local copy split by PDF page, pages.txt. Pages 17–28 were read in full. Printed footers were checked with pdftotext on pp. 18, 22, 24 and 27, and they equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec14/ (read via local copies, slides14.txt and slides14.pdf. The PDF page with slides 4–5 was rendered and inspected visually, because pdftotext drops the square-root signs.)
  - Lecture 14 transcript (local copy t14.txt). Used only to check the page's claims about Lecture 14.
verdict: needs-changes
---

# Review: The geodesic equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step "Lengths" | (Page-internal check, not an MIT claim.) In the family y = x + α x(1 − x), α = −1 gives y = x − x + x² = **x²** exactly. α = +1 gives y = 2x − x², and the plot's point label correctly says so. | "it is the α = −1 path of the family in the graph, mirrored (y = x² instead of 2x − x²), with the same length." | The parabola y = x² **is** the α = −1 path. No mirroring is involved. Suggested wording: "it is exactly the α = −1 path of the family in the graph (y = x²). Its mirror image, the α = +1 path y = 2x − x², has the same length." |
| 2 | warning | Intro ("free particles and light follow geodesics") and cosmology callout ("free particles and light rays follow geodesics") | Lecture 13 (p. 18) only says the task is to "calculate motion in a metric". The statement that free-falling observers follow geodesics comes in the Lecture 14 recap (t14). The derivation assumes ds² > 0 and divides by √A (p. 21: "we are talking about positive, definite distances"). | Includes light without qualification. | The statement is correct GR, but light follows **null** geodesics, where A = 0. The equation in this √A form cannot be used for null paths. Add a short qualifier, e.g. "(light: null geodesics, which need the equation in a different parametrisation; Lecture 14)", or drop "light" here. |
| 3 | warning | Summary, first bullet: "a minimum in space" | — | The page's own bracketed note says the long great-circle arc on a sphere is stationary but not a minimum. The body also says "usually the shortest path". | Make it consistent: "usually a minimum in space". |
| 4 | info | Bracketed correction after "Geodesics: stationary paths" | p. 18–19: "in this two dimensional space example, our stationary lines will also always be minima … There is no longest possible line. And there aren't any saddle points either, I don't think … I believe." | "[Guth suggests that in two-dimensional spaces the stationary paths are always minima. Not quite: on a sphere the long way round a great circle … is also stationary, but it is not the shortest path.]" | **Verified correct**, and "suggests" fairly reflects Guth's hedging. Optionally add that the long arc is a **saddle point**: it is a minimum against some variations, and sliding it sideways over the sphere shortens it. This answers Guth's "no saddle points either" directly. |
| 5 | info | "Derivative of the length": "The two terms with dw/dλ are equal once the summed ('dummy') indices i and j are renamed" | p. 25: Guth says the same thing, that the terms are equal by renaming i ↔ j. | Same as Guth. | Strictly, swapping i ↔ j also needs g_ij = g_ji, which the page states earlier ("g12 and g21 are equal"). Optionally add "(and using g_ij = g_ji)". |
| 6 | info | Chain-rule Formula, `cite="reading1" at="p. 24 (on screen from the lecture notes)"` | The chain rule is introduced at the bottom of p. 23 ("We're going to need the derivative of the metric with respect to alpha") and spelled out on p. 24. It is not on the Lecture 14 slides. | Cites p. 24. | The citation is correct. "pp. 23–24" would be slightly more complete. |
| 7 | info | Not mentioned | Slide 4 is titled "Varying the path (calculus of variations, 1696)". On p. 22 Guth refers to the length formula and the varied path by lecture-note equation numbers "5.40" and "5.41a". | Not mentioned. | Optional: one clause noting that this is the calculus of variations (dated 1696 on Guth's slide). The lecture-note equation numbers are not on OCW, so leaving them out is right. |

### Formula and citation check
All Lecture 14 slide formulas were compared against the rendered slide images.
- `ds^2 = g_{ij}(x^k) dx^i dx^j`, reading2 slide 3. **Correct.** This is the "Notation" line on slide 3. The words are on p. 20.
- Path `x^i(λ)`, `x^i(0) = x^i_A`, `x^i(λ_f) = x^i_B`, slide 3. **Correct.** Also on p. 21.
- `ds^2 = g_{ij}(x^k(λ)) (dx^i/dλ)(dx^j/dλ) dλ^2`, slide 3. **Correct.**
- `S[x^i(λ)] = ∫_0^{λ_f} √(g_ij …) dλ`, slide 3 and pp. 21–22. **Correct.** The square root is spoken at the bottom of p. 21 and the top of p. 22, and the integral on p. 22.
- Varied path `x̃^i = x^i + α w^i`, with `w^i(0) = w^i(λ_f) = 0`, slide 4. **Correct.** Also pp. 22–23.
- `dS[x̃]/dα |_{α=0} = 0` for all `w^i`, slide 4. **Correct.**
- `S[x̃] = ∫ √A(λ,α) dλ` and `A = g_ij(x̃^k) (dx̃^i/dλ)(dx̃^j/dλ)`, slide 4. **Correct.**
- Chain rule `∂g_ij/∂α = (∂g_ij/∂x^k) w^k`, reading1 p. 24. **Correct.** See row 6.
- `dS/dα|_0 = ½ ∫ (1/√A(λ,0)) [∂_k g_ij w^k ẋ^i ẋ^j + 2 g_ij ẇ^i ẋ^j] dλ`, slide 5. **Correct.** The factor ½, the factor 2 and the indices all match. I also re-derived it myself.
- After integration by parts: `∫ { (1/(2√A)) ∂_i g_jk ẋ^j ẋ^k − d/dλ[(1/√A) g_ij ẋ^j] } w^i dλ`, slide 5. **Correct.** The sign, the factors and the index placement match the slide. Re-derived independently: u = (1/√A) g_ij ẋ^j, v = w^i, and the boundary term vanishes.
- Geodesic equation (boxed), slide 5 and p. 27. **Correct.** It is identical to the boxed equation on slide 5. The "famous boxed equation" is on p. 27.
- Integration-by-parts rule `∫u dv = −∫v du + [uv]`, and the choice of u and dv. **Matches** pp. 25–26.
- Flashcard formulas (path length, geodesic equation) **match** the slides.

## Arithmetic and answer checks
I checked these with a Python script (Simpson integration against the closed form).
- S(α) for y = x + α x(1 − x): y′ = 1 + α(1 − 2x). Substituting u = 1 + α(1 − 2x) gives S = [F(1+α) − F(1−α)]/(2α) with F(u) = ½(u√(1+u²) + asinh u). **Correct.**
- The plot expression is `(G(1+x') − G(1−x'))/(4x')` with G = 2F and x' = x + 1e-9. This equals the caption formula, and the 1e-9 shift is applied consistently. The values below were computed from the plot expression and agree with direct integration to 5 decimals.
  - α = 0: 1.41421 (√2). Caption 1.414. **OK.**
  - α = ±½: 1.42935. Caption 1.429 "at α = ½". **OK.** The curve is symmetric, so ±½ would also be fine.
  - α = ±1: 1.47894. Caption and point label 1.479 / 1.4789. **OK.**
  - α = ±2: 1.70011. Caption 1.700. **OK.**
  - dS/dα at α = 0 is about 1e-11 numerically, so the curve is flat. **OK.**
  - Over [−2, 2], S runs from 1.41421 to 1.70011. This fits inside the plot range [1.3, 1.8]. **OK.**
- Worked example, parabola x = λ, y = λ²: A = 1 + 4λ². d/dλ[(1+4λ²)^(−1/2)] = −4λ(1+4λ²)^(−3/2), which is not zero for λ > 0. **Correct.** Length ∫₀¹ √(1+4λ²) dλ = 1.478943, quoted as 1.479. **Correct.** The α-family statement is wrong: see row 1.
- Worked example, flat-plane left-hand side: (1/√A) dx^i/dλ = dx^i/ds. Its λ-derivative vanishes, so d²x^i/ds² = 0. **Correct.**
- Quiz 1 (answer 1, stationary). **Correct.** The explanation is consistent with the bracketed note.
- Quiz 2 (answer 1, summation). **Correct.**
- Quiz 3 (answer 1, fixed endpoints). **Correct.** This matches p. 23, and the explanation about the boundary term matches p. 26.
- Quiz 4 (answer 0: √2 and 0). **Correct.** The distractor "1.479" is the α = ±1 length. Fine.
- Quiz 5 (answer 1, choose w equal to the bracket). **Correct.** This matches p. 27.
- "16 terms (10 different ones)" in 4D. **Correct.** Guth says "16 terms or 10 terms" on p. 20.

## Coverage and order
- The page covers transcript pp. 18–28 (the second half of Lecture 13) **in MIT's order**:
  - motivation and the Schwarzschild mention (p. 18)
  - the 2D example and the definition of a geodesic, with the minima/maxima/saddle discussion (pp. 18–19)
  - numbered coordinates (p. 19)
  - summation and the Einstein convention (p. 20)
  - parametrised path (pp. 20–21)
  - ds and length (pp. 21–22)
  - varied path and fixed endpoints (pp. 22–23)
  - the geodesic condition (p. 23)
  - A and the chain rule (pp. 23–24)
  - dS/dα and combining terms (pp. 24–25)
  - integration by parts with no boundary term (pp. 25–26)
  - the "perfect square" argument (p. 27)
  - the boxed equation and "if and only if" for continuous paths (p. 27)
- **Nothing from these pages is left out**, apart from the minor items in row 7.
- Additions:
  - the bracketed correction (justified)
  - the plot of S(α) (original)
  - the worked example (original)

## Licensing
- `grep -il "rights reserved\|courtesy"` on the transcript and slide texts finds nothing. The slides are Guth's own and carry the standard OCW terms-of-use footer.
- The page reproduces no MIT figure. Slide 4's path diagram is not copied.
- I compared wording with the transcript. The page paraphrases throughout. Short echoes are fine:
  - "values like 2 or 5"
  - "the only real difficulty" (Guth: "the only real issue")
  - "a perfect square"
  - "if and only if"
- No paragraph is copied.
- The worked example and the plot are original. They are not in the lecture.
- No OpenStax or LibreTexts material is used.

## Notes
- Claims about Lecture 14 were checked against t14.txt.
  - "Lecture 14 simplifies it and tries it on examples": the simplification by choosing λ = arc length is at t14 lines 241–290. The Schwarzschild example starts at line 398. **Verified.**
  - Callout: "applying it to the expanding universe, Guth says there, is left to the homework, where it shows how moving particles slow down": t14 lines 393–397 ("on your homework, you will … be applying this formalism to the Robertson–Walker metric … how moving particles slow down"). **Verified and fairly attributed.**
  - The leadsTo item (Lecture 14, simplified and applied to Schwarzschild) is **accurate**.
- The note that the equations were shown on screen from the lecture notes (p. 18) is **accurate**. Citing the Lecture 14 slides 2–5 for them is appropriate, and the page says it does so.
- The page's statement that a continuous path is a geodesic "if and only if" it satisfies the equation follows Guth (p. 27). Strictly, the derivation also needs the path and metric to be differentiable. This is not worth changing.

## Resolution (2026-11-14, by the page author)

- Row 1 (error): the worked example now says the parabola $y = x^2$ is exactly the α = −1 path, and its mirror image $y = 2x - x^2$ (α = +1) has the same length.
- Row 2: the intro no longer says light follows geodesics. It now says that free particles moving on geodesics is taken up in Lecture 14. The cosmology callout adds that light follows null geodesics ($ds^2 = 0$), where this form of the equation (which divides by $\sqrt A$) cannot be used directly.
- Row 3: the summary now says "usually a minimum in space".
- Row 4: the bracketed correction now adds that the long great-circle arc is a saddle point.
- Row 5: combining the two dw/dλ terms now mentions $g_{ij} = g_{ji}$.
- Row 6: the chain-rule citation is now pp. 23–24.
- Row 7: added the calculus of variations (slide 4, 1696).
