---
page: content/year-3/8.044/two-random-variables.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l2/ (read: slides PDF mit8_044s13_l2.pdf, 18 PDF pages, labels 8.044 L2B1 to L2B17 at the foot of each slide, plus the OCW end page)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_probabilitych2/ (read: notes PDF mit8_044s13_probabilitych2.pdf, printed pages 19–34 = PDF pages 1–16, checked with pdftotext -f N -l N)
verdict: pass-with-notes
---

# Review: Probability: two or more random variables

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot, `range={[0, 1.1]}` with slider `R` up to 0.95 | (page's own graph) | The conditional peak is 1/√(2π(1 − ρ²)): 0.915 at ρ = 0.9 but 1.278 at ρ = 0.95, so at the top of the slider the solid curve is cut off above the fixed y-range of 1.1. | Raise the y-range to about [0, 1.35], or cap the slider at 0.9. |
| 2 | warning | Plot curve label `"p(v₂ \| v₁)"` | Notes write p(v₂\|v₁) | The page's prose uses "p(v₂ given v₁)" so read-aloud can say it (stated in the intro), but the graph label keeps the vertical bar, which goes into the graph's generated accessible label. | Label it "p(v₂ given v₁)" (or a shorter form such as "given v₁") to match the page's notation. |
| 3 | warning | Bayes paragraph, "like slices of a loaf" in quotation marks (notes p. 21) | Notes p. 21: "as with store-bought bread, one can reassemble the loaf by stacking the individual slices side by side" | The quoted phrase does not occur in the notes, so the quotation marks present a paraphrase as a quotation. | Drop the quotation marks ("which the notes compare to reassembling a loaf from its slices"). |
| 4 | info | Bayes' theorem Formula, `cite="reading1" at="pp. 20–21"` | Notes pp. 20–21 give p_{x,y}(ζ, y) = p_x(ζ\|y) p_y(y) and p(x\|y) = p(x, y)/p(y); the second ordering p(x, y) = p(y\|x) p(x) is written out only on slide L2B6 (the notes describe it in words and show it in a figure on p. 21). | Cites only the notes for both orderings. | Acceptable; optionally add "slide 6" in the text or the `at`. |
| 5 | info | Uniform disk paragraph | Notes: radius 1, density 1/π (pp. 22–23), constant p(x\|y) discussed with a figure on p. 24; slides L2B7–L2B8 use radius a. | Same results for radius 1; mentions the slides' radius a. | None. Formulas checked: p(x) = (2/π)√(1 − x²), p(x given y) = 1/(2√(1 − y²)) for \|x\| ≤ √(1 − y²). |
| 6 | info | Jointly Gaussian paragraph | Notes p. 29 also say the ellipses are long and narrow as \|ρ\| → 1 and that for ρ < 0 the axes swap. | Mentions only the ρ > 0 orientation and circles at ρ = 0. | Optional half-sentence for ρ < 0. |
| 7 | info | Caption "shifts the second reading towards ρv₁" | Notes p. 31: conditional mean is ρv₁. | "towards ρv₁" is slightly loose: the conditional density is centred exactly on ρv₁. | Optionally "centres it on ρv₁ and narrows it". |

All other formulas match their cited locations, with the same notation (ζ, η dummy variables, subscripted densities):
- Joint density and distribution: notes p. 19 (also slide L2B2). Correct.
- Reduction to one variable: notes p. 19 (also slide L2B3). Correct.
- Statistical independence: notes p. 22 (also slide L2B6). Correct.
- p(n = 0; L) = e^{−rL}: notes p. 25. Correct. The remark that it does not integrate to 1 over L is from notes p. 26 (not cited separately; fine).
- Recursion d p/dL + r p(n) = r p(n − 1): stated on notes p. 24 (problem b), derived on p. 26. The citation "pp. 24 and 26" is right.
- Poisson solution and its uniqueness with p(0; L) = e^{−rL}, p(n; 0) = 0 for n ≠ 0: notes p. 27. Correct. The slides' route (N boxes, binomial count, N → ∞) is on L2B11–L2B12, as the page says.
- Jointly Gaussian density: notes p. 29 (also slide L2B14). Prefactor and exponent match.
- Conditional Gaussian: notes p. 31. Mean ρv₁, variance σ²(1 − ρ²). Correct.
- R(τ) = ⟨v(t)v(t + τ)⟩ = σ²ρ(τ): notes p. 33. Correct.

Slide numbers in the prose were checked against the labels at the foot of each slide: joint density and averages slides 2–3; Bayes slides 4–6 (4 is the slicing figure, 5 the derivation and name, 6 both orderings and independence); disk slides 7–8 (slide 9 is the loaf picture); Poisson slides 10–12; random processes slide 13; jointly Gaussian slide 14; old exam problem slides 15–17. All correct.

## Arithmetic and answer checks
- Disk: ∫(1/π)dy over \|y\| ≤ √(1 − x²) = (2/π)√(1 − x²); it integrates to 1 over (−1, 1). Product (4/π²)√(1 − x²)√(1 − y²) ≠ 1/π, so not independent. Correct.
- Poisson: d/dL[(rL)ⁿe^{−rL}/n!] = r(rL)^{n−1}e^{−rL}/(n − 1)! − r(rL)ⁿe^{−rL}/n! = r p(n − 1) − r p(n). Correct.
- 500 Hz: period 2 ms, half period 1 ms. Correct.
- Worked example (a): area of the triangle 0 < y < x < 1 is 1/2, so p = 2 is normalized. p(x) = ∫₀ˣ2 dy = 2x; p(y) = ∫ᵧ¹2 dx = 2(1 − y); p(x given y) = 2/(2(1 − y)) = 1/(1 − y) on y < x < 1. 2x · 2(1 − y) ≠ 2, so not independent. Correct.
- (b): ⟨x⟩ = ∫2x² = 2/3; ⟨y⟩ = ∫2y(1 − y) = 2(1/2 − 1/3) = 1/3; ⟨xy⟩ = ∫₀¹2x(x²/2)dx = ∫x³ = 1/4; 1/4 − 2/9 = 9/36 − 8/36 = 1/36. Correct, and positive as argued.
- (c): mean 0.8 × 1.5 = 1.2 mV; standard deviation 1.0 × √(1 − 0.64) = 0.6 mV. Correct. These match the plot's default (ρ = 0.8, v₁ = 1.5σ).
- Plot: the conditional curve exp(−(v − 1.5R)²/(2(1 − R²)))/√(2π(1 − R²)) is the p. 31 formula with σ = 1, v₁ = 1.5; the dashed curve is the unit Gaussian p(v₂). At R = 0 they coincide (caption correct). Clipping at R = 0.95: see finding 1.
- Quiz 1 (integrate over y): correct. Quiz 2 (both orderings of Bayes): correct. Quiz 3 (disk, not independent): correct; the choice "\|x\| ≤ √(1 − y²)" assumes a unit disk that the question does not state (minor). Quiz 4 (conditional mean ρv₁): correct for the page's zero-mean, equal-σ density; explanation correct.
- Flashcards: all three correct (⟨v₁v₂⟩ = σ²ρ matches notes p. 33).
- The calcs file (calcs/8.044/two-random-variables.yaml) covers every number above. Small point: the page-own example entries cite "reading1 p. 19" or "p. 33" as their source although the numbers are the page's own; harmless.

## Coverage and order
- The page follows the order of both the slides and the notes: joint density and averages, reduction, conditional density, Bayes, independence, uniform disk, Poisson derivation, jointly Gaussian noise (reduction, independence, conditional, correlation function, oscillating ρ).
- Slide 1 (a two-dimensional region figure) and slide 9 (slices figure) are figures only; slide 9's idea is described in words. Fine.
- Notes figures on pp. 20, 21, 24, 28, 30, 32, 34 (slicing, loaf, disk chord, noise trace, contour and conditional plots, oscillating ρ) are not reproduced; the page's own plot replaces the conditional-density figures. Fine.
- The notes' completing-the-square derivations of p(v₁) and p(v₂ given v₁) (p. 31) and the iterated-integral derivation of ⟨v₁v₂⟩ (p. 33) are summarized as results with one sentence of method. Acceptable at this level; the calcs file checks the conditional identity.
- The old exam problem "Collision Products" (slides 15–17, joint density of E_A, E_B on E_A > E_B > 0) is not worked or mentioned. This is acceptable: it is an exam exercise, not lecture content, and it belongs with the future problem-set pages (ROADMAP §2). The intro's "(slides 1–17 …)" implies the page covers all slides, so a short note that the exam problem is left for the problem pages would be honest (optional).
- Nothing is added that MIT does not cover, apart from the original worked example and plot.

## Licensing
- `grep -i "rights reserved|courtesy"` on both extracted texts: no matches. Both files carry only the standard OCW footer, so the material is under the course's CC BY-NC-SA licence.
- No figures are reproduced; the only graph is generated from the formulas.
- No verbatim copying found beyond short standard phrases ("fundamental law of conditional probability", "statistically independent (S.I.)", "correlation coefficient", "at the other extreme"). The "slices of a loaf" quotation is a paraphrase in quotation marks (finding 3), not copying.
- The worked example is original: the uniform triangle and the noise numbers do not appear in the slides or notes. The triangle's support (0 < y < x) has the same shape as the exam problem's E_A > E_B > 0, but the density, questions and numbers are different, so it is not a close copy.
- No OpenStax or LibreTexts material.
- Notation change: p(x given y) for the notes' p(x\|y) is declared in the intro with the reason (read-aloud). It is applied consistently in the prose, formulas, quiz and flashcards; the only miss is the plot label (finding 2).

## Notes
- No `Callout kind="cosmology"`; `leadsTo` points to 8.044 Lecture 3 (functions of a random variable), which matches the course syllabus order. No cosmology claims to check.
- "The Poisson density quoted in Lecture 1": the one-random-variable page does present the Poisson density, so the back-reference is correct.
- The description of thermal (Johnson) noise and its five features matches notes pp. 27–28; the list of random processes matches slide 13 (the slide also lists the current i(t) and one more thermodynamic variable).

## Resolution (2026-11-17, by the page author)

1. The plot's y-range is now [0, 1.35], so the conditional curve is not clipped at ρ = 0.95.
2. The plot label now reads "p(v₂ given v₁)".
3. The loaf image is paraphrased without quotation marks.
4. No change.
5. The ellipse description now includes the axes for ρ < 0 and the narrowing as |ρ| → 1.
6. The caption now says the conditional density is centred on ρv₁.
7. The quiz now says "unit disk".
8. The intro now says the slides' closing exam problem is left for the course's problem pages.

Status set to `reviewed`.
