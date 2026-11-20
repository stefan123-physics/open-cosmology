---
page: content/year-5/8.962/geodesic-equation-tensor-densities.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/d1f05eee90c111ae28ca52b6aac95143_4QPKWFme0k4.pdf (read, local copy L9.pdf / L9.txt with PDF page markers; PDF page numbers used, the PDF has no printed footer)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-9-geodesics/ (not fetched; the transcript is the only cited reading)
  - 8.962 Lecture 10 transcript (local copy L10.txt, read for the leadsTo check)
  - content/year-4/8.286/geodesic-equation.mdx and content/year-4/8.286/christoffel-symbols.mdx (read, for the cosmology callout)
verdict: needs-changes
---

# Review: Tensor densities, covariant divergences and the geodesic equation

The lecture is a video lecture with no slides; every equation was written on the board, so all citations are to transcript pages, and equations were reconstructed from Hughes's words and checked against standard GR (Carroll's conventions, signature (−,+,+,+)). Every `<Formula>` page citation was checked against the page-marked transcript; all are on the cited page or page range.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "A party trick", paragraph after the formula det(1 + ε) ≈ 1 + tr ε | p. 9: Hughes says "I believe" the higher-order coefficients are "no longer universal" but depend on the dimension of the matrix: a hedged guess, and mathematically wrong. det(1 + ε) = exp tr ln(1 + ε) = 1 + tr ε + ½[(tr ε)² − tr(ε²)] + …, with coefficients that do not depend on the dimension (in n dimensions the terms beyond order n simply vanish). | States as fact: "the higher corrections having coefficients that depend on the dimension of the matrix." | Rule 4 (do not repeat lecturer slips). Replace with the correct second-order term, ½[(tr ε)² − tr(ε²)], and add a bracketed note that Hughes guessed in the lecture that the coefficients depend on dimension (p. 9) but they do not. The page's own 2×2 example can show it: ½[(−0.01)² − 0.0017] = −0.0008, exactly the difference found. |
| 2 | warning | Cosmology callout | 8.286 pages (geodesic-equation.mdx, christoffel-symbols.mdx): Guth derives the geodesic equation by varying path length in Lecture 13 and simplifies it in Lecture 14, where he tries it on the **Schwarzschild** metric; applying it to the Robertson–Walker metric is left to the **homework**, where it shows that moving particles slow down (momentum ∝ 1/a, "the massive-particle counterpart of the photon's redshift"). | "Guth derives the same geodesic equation … and applies it to the Robertson–Walker metric. Its Christoffel symbols with a time index make the momentum … fall off as one over the scale factor, the effect behind the cosmological redshift." | Say that in 8.286 the application to the Robertson–Walker metric is a homework problem (Guth applies the equation to Schwarzschild in Lecture 14), and call the 1/a fall-off of momentum the massive-particle counterpart of the photon redshift rather than "the effect behind" it. |
| 3 | warning | Recap section | pp. 2–3: "you'll often see this described as a differing amorphism [diffeomorphism] of the spacetime". | "advanced books describe this as a diffeomorphism of the spacetime". | The precise statement is that a Killing vector generates an **isometry** (a one-parameter family of diffeomorphisms that leave the metric unchanged); "diffeomorphism" alone is true of any vector field's flow. Say "isometry (a metric-preserving diffeomorphism)", optionally noting Hughes's wording. |
| 4 | info | "The determinant of the metric" section, raised-index Levi-Civita tensor | p. 5: raising all four indices gives a density of weight −1, "a 1 over square root there"; homework exercise. | Adds that in spacetime raising also brings an overall minus sign, "which the lecture does not dwell on, p. 5". | Correct physics (ε^{αβγδ} = sgn(g) ε̃^{αβγδ}/√\|g\|, Carroll 2.67). Fine as is; consider making clear the minus sign is the page's addition, not something on p. 5. |
| 5 | info | Covariant four-volume element | p. 5: "if this is an orthogonal basis, this simply turns into…". | "For an orthogonal set of coordinate directions, d⁴V = √\|g\| dx⁰dx¹dx²dx³". | Follows Hughes. Note: √\|g\| d⁴x is the invariant volume element in any coordinates; the orthogonality qualifier only concerns the displacement vectors fed into ε. Optional clarification. |
| 6 | info | Free-fall section, last paragraph | p. 17: "And that, to be blunt, is modern research." | Quotes "that is modern research". | Fine (short phrase); an ellipsis would be more exact. |
| 7 | info | Extremal aging section | p. 20: "Muslim astronomers worked out long, long ago". | "astronomers of the medieval Islamic world". | Reasonable gloss; "medieval" is the page's own (historically accurate). |

Formula-by-formula check (all `cite="reading1"`):
- Metric determinant, weight −2 (pp. 3–4): det of g_{α'β'} = Λ Λ g gives (det ∂x/∂x')² g = |∂x'/∂x|⁻² g. Correct; matches Carroll's weight convention (ε̃ weight 1, g weight −2). Hughes says the inverse-determinant step on p. 4. OK.
- |g|^{w/2} rule and absolute value (pp. 4–5): correct (density of weight w carries |J|^w, |g|^{w/2} carries |J|^{−w}).
- ε = √|g| ε̃ (p. 5): correct.
- Volume element (p. 5); spherical r² sin θ dr dθ dφ and missing differential (p. 6): correct.
- Contracted Christoffel (p. 7): bracket matches Γ^λ_{μν} = ½ g^{λσ}(∂_μ g_{νσ} + ∂_ν g_{σμ} − ∂_σ g_{μν}) with λ = μ; first and third terms antisymmetric in β ↔ μ, cancel against symmetric g^{μβ}. Correct. "Formula from Lecture 6" checked: covariant-derivative-christoffel-metric.mdx is lecture 6.
- Party trick (p. 8), δ ln|det M| chain (p. 8), det(1+ε) ≈ 1 + tr ε (p. 9), ∂_α ln|g| = g^{μβ}∂_α g_{βμ} (p. 10): correct and on the cited pages.
- ∇_μ V^μ = (1/√|g|)∂_μ(√|g| V^μ) (p. 11), Gauss's theorem (p. 12): correct.
- ∇_μ A^{μν} = (1/√|g|)∂_μ(√|g| A^{μν}) + Γ^ν_{μλ}A^{μλ} (pp. 12–13): correct; antisymmetric case on p. 13. OK.
- U^β∇_β U^α expansion (pp. 15–16), boxed geodesic equation (p. 16): correct.
- Non-affine DU^α/dλ* = κU^α (p. 18), λ' = aλ + b (p. 19): correct.
- Proper-time functional (p. 21): Hughes does not read it out, but says on p. 21 that Δτ defines the action; the reconstruction √(−g_{αβ}ẋ^αẋ^β) with (−,+,+,+) and λ from 0 to λ_q matches what he describes. OK.

## Arithmetic and answer checks
- Party trick in spherical coordinates: ln(r² sin θ) gives ∂_r = 2/r, ∂_θ = cot θ. Long way: Γ^r_{rr} = 0, Γ^θ_{θr} = Γ^φ_{φr} = 1/r → 2/r; Γ^r_{rθ} = Γ^θ_{θθ} = 0, Γ^φ_{φθ} = cot θ → cot θ. Correct.
- det(1 + ε) with ε = [[0.01, 0.02], [0.03, −0.02]]: 1.01 × 0.98 − 0.02 × 0.03 = 0.9898 − 0.0006 = 0.9892; 1 + tr ε = 0.99; difference 0.0008. Correct. Cross-check: ½[(tr ε)² − tr(ε²)] = ½[0.0001 − 0.0017] = −0.0008 (tr ε² = 0.0007 + 0.0010), exactly the second-order term (see finding 1).
- 40 Christoffel symbols: 4 × (4·5/2) = 40. Correct.
- Inverse-square field: √g V^r = sin θ, independent of r → divergence 0. Linear field: (1/(r² sin θ))·3r² sin θ = 3, matches ∇·(x, y, z) = 3. Correct.
- Straight line x = λ, y = 2 at λ = 1: r = √5 = 2.2361; ṙ = λ/r = 0.4472; r̈ = (r² − λ²)/r³ = 4/r³ = 0.3578; φ̇ = −2/(λ² + 4) = −0.4; φ̈ = 4λ/(λ² + 4)² = 0.16. r φ̇² = 2.2361 × 0.16 = 0.3578 → 0. (2/r)ṙφ̇ = 0.8944 × 0.4472 × (−0.4) = −0.1600 → 0. Christoffels Γ^r_{φφ} = −r, Γ^φ_{rφ} = 1/r and the two geodesic equations (factor 2 from the symmetric pair) are correct. φ = arctan(2/λ) is valid for λ > 0. Correct.
- Plot: τ = 10√(1 − v²) for an out-and-back trip of 10 coordinate years at speed v; v = 0.6 gives 8. Correct; maximum 10 at v = 0. Domain/range sensible.
- Calcs file: every number on the page has an entry; I checked the formulas by hand and they match (I did not run `npm run calc:test`).
- Quiz 1 (answer 1: weight −2, multiply ε̃ by √|g|): correct; explanation correct.
- Quiz 2 (answer 2: 0): correct.
- Quiz 3 (answer 1: vectors in different tangent spaces, path-dependent transport): correct, matches pp. 13–14.
- Quiz 4 (answer 1: λ' = aλ + b): correct (with a ≠ 0), p. 19.
- Flashcards 1–5: correct. Card 5's "maximum" is Hughes's wording (p. 21); strictly a local maximum among nearby timelike curves (info only).

## Coverage and order
- Page follows the lecture order: recap (pp. 1–3), tensor densities and |g| (pp. 3–6), party trick and proof (pp. 6–11), divergence and Gauss (pp. 11–12), tensors and local vs global conservation (pp. 12–14), test body and geodesic equation (pp. 14–17), affine parameters (pp. 17–19), extremal aging (pp. 19–22), preview (pp. 22–23).
- Left out (fine): administrative remarks about moving Problem 7 from PSET 3 to PSET 4 (p. 6, p. 11) and the student question on whether the metric must be symmetric (p. 7).
- Additions, all clearly the page's own: three worked examples (spherical party trick, divergences, polar straight line), the numerical 2×2 determinant check, the twin-type proper-time plot, the remark on the sign of the raised Levi-Civita tensor.
- leadsTo (Lecture 10): checked in L10.txt. Lecture 10 combines Killing's equation with the geodesic equation to get conserved p_t (minus energy) and mentions angular momentum (p_φ), treats null trajectories, and introduces curvature and the Riemann tensor. The `why` text is accurate.

## Licensing
- The transcript has no "All rights reserved" or "Courtesy of" notice (grep of L9.txt returned nothing). No figures reused; the plot is generated from a formula.
- No OpenStax or LibreTexts material.
- Wording is a paraphrase throughout; spot checks of the recap, tensor-density, test-body and extremal-aging passages found no copied sentences. The quoted phrases ("party tricks", "that is modern research") are short. Worked examples are original (none of the numbers or situations appear in the lecture).

## Notes
- No em dashes in the page (grep count 0).
- Lecturer slips handled: "if a vector has a Killing vector" (p. 3) is noted with Hughes's own correction; "gravity is just so bloody strong" (p. 17, meant weak but cumulative) is not repeated, the page says "weakest force but has only one sign". The det(1+ε) coefficient remark (finding 1) is the one slip that was repeated.
- Prerequisites `parallel-transport-lie-derivative-killing` and `geodesics-calculus-of-variations` (8.033) both exist.
- Teukolsky attribution (p. 6) and "27 years" (p. 7), "65%" (p. 16) are as in the transcript.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error): the page now gives the correct second-order term ½[(tr ε)² − tr(ε²)], notes in brackets that Hughes's guess about dimension-dependent coefficients is wrong, and shows that the 2×2 example's difference is exactly that term (new calcs entry det-second-order).
- Finding 2: the callout now says only that Guth derives the geodesic equation in 8.286 and that, applied to the Robertson–Walker metric, it makes a massive particle's momentum fall as 1/a, the counterpart for matter of the redshift of light.
- Finding 3: "diffeomorphism" replaced by "isometry, a diffeomorphism that leaves the metric unchanged".
- Info: the minus sign of the raised Levi-Civita tensor is now marked as the page's addition; the volume element is said to hold in any coordinates; the "modern research" quote is paraphrased; the qibla sentence now follows Hughes's wording ("Muslim astronomers long ago").
