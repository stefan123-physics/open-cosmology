---
page: content/year-3/8.044/sums-central-limit-theorem.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l4/ (read: slides PDF mit8_044s13_l4.pdf, 20 PDF pages = slides L4B1 to L4B19 plus the OCW end page, so PDF page = slide number; slides 5 and 6 also checked as rendered images because the text layer drops Greek letters)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_probabilitych4/ (read: notes PDF mit8_044s13_probabilitych4.pdf, printed pages 47–66 = PDF pages 1–20, plus the OCW end page; p. 49 also checked as a rendered image)
verdict: pass-with-notes
---

# Review: Probability: sums of random variables and the central limit theorem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Density of a sum" and "Convolution" formulas, flashcard 2, Summary | Notes p. 49 and slides L4B5–L4B6 use α for the value of the sum and ζ for the integration variable: $p_s(\alpha) = \int d\zeta\,p_{x,y}(\zeta, \alpha - \zeta)$. | Uses ζ for the value of the sum and η for the integration variable. The physics is the same, but ζ now means the opposite of what it means in the cited source, without a note. | Either use MIT's letters (α, ζ) or add a short bracket: "(the notes write α for the sum and ζ for the integration variable)". |
| 2 | warning | Plot caption, "by n ≈ 20 the two nearly coincide" | Notes p. 63 say only that the exponential needs a larger n than the uniform case. | "nearly coincide" at n ≈ 20. Recomputed: the largest gap between exact and Gaussian is 0.0104 at n = 20 against a peak of 0.0911 (about 11 % of the peak); at n = 25 it is still about 10 %. The skew is visible on the graph. | Soften to "by n ≈ 20 the Gaussian is a fair approximation, though the exact curve is still slightly skewed", or similar. The `gamma-norm` calc listed as `shown` for this phrase only checks normalisation, not the claim. |
| 3 | warning | Unpolarized light paragraph, "each with the intensity density of Lecture 3 … where σ is the mean intensity of one polarization" | Notes p. 53 redefine σ ≡ ⟨I₁⟩ for this example. In Lecture 3 (notes p. 38, and the previous page) σ² is the variance of the field and ⟨I⟩ = aσ². | Uses σ as the mean intensity, which is right for the notes p. 53 but clashes with the meaning of σ on the Lecture 3 page it points to. | Add "(here σ is redefined as ⟨I₁⟩, as in the notes)" or write the result as $\frac{1}{\langle I_T\rangle}e^{-I_T/\langle I_T\rangle}$, as in the worked example. |
| 4 | info | Lorentzian, "the Lorentzian's variance is infinite, so the rule for variances does not apply (notes p. 56)" | P. 56 only poses the paradox and says it is resolved by trying to compute the variance; p. 60 states that the Lorentzian variance is infinite. | Cites p. 56 only. | Cite "notes pp. 56, 60". |
| 5 | info | CLT extensions, "the variables need not be identical, as long as none dominates the sum" | Notes p. 61 and slide 19: the theorem "may work" for non-identical variables; no dominating member is a prerequisite, not a guarantee. | Reads as a sufficient condition. | "the variables need not be identical, provided (at least) that none dominates the sum". |
| 6 | info | Last sentence of the CLT section, "the theorem is behind most assumptions" | Notes p. 61: it is "often the basis" for assuming a Gaussian. | "most". | "behind many assumptions". |
| 7 | info | Slide 5 sentence, "gives a Gaussian of variance 2σ²(1 + ρ)" | Slide 5: Gaussian "with zero mean" and variance 2σ²(1 + ρ). | Omits zero mean. | Optional: "a zero-mean Gaussian of variance …". |

Formula checks (all verified against the source):
- Mean and variance of a sum (reading1, pp. 47–48): ⟨S_n⟩ = Σ E_i on p. 47, Var(S_n) = Σ σ_i² on p. 48 after the cross terms vanish. Also slide L4B1. Matches.
- Density of a sum (reading1, p. 49): matches p. 49 (and slide L4B5), apart from the letters (finding 1).
- Convolution (reading1, p. 49): matches p. 49 and slide L4B6. The general definition p ⊗ q ≡ ∫ p(z) q(x − z) dz, and commutative, distributive, associative (pp. 49–50), and the flip-shift-multiply-integrate-repeat recipe (pp. 50–51) are correctly summarised. "⊗" is the notes' symbol (checked on the rendered page); writing it in words/plain text is a faithful workaround.
- Lorentzian density (reading1, p. 56): (1/π) Γ/((x − m)² + Γ²), Γ the half width at half height, widths adding (Γ_S = Γ₁ + Γ₂). Matches.
- Central limit theorem (reading1, p. 60): 1/√(2πnσ_x²) exp(−(S_n − nE_x)²/(2nσ_x²)). Matches p. 60 and slide L4B17 (⟨s⟩ = n⟨x⟩, σ² = nσ_x²).
- Uniform sum, b < a (pp. 51–53): flat at 1/(2a) for |S| < a − b, (a + b − |S|)/(4ab) down to 0 at a + b, triangle for equal widths. Matches.
- Unpolarized light (pp. 53–54): (1/2σ) e^{−I_T/2σ} with σ = ⟨I₁⟩. Matches; I checked that p(I₁) = e^{−I₁/2σ}/√(2πσI₁) has mean σ, so the sum (mean 2σ) is the stated exponential.
- Family example (slides L4B7–L4B10): (1/n!a)(z/a)^n e^{−z/a} ⊗ (1/m!a)(z/a)^m e^{−z/a} = (1/(n+m+1)! a)(x/a)^{n+m+1} e^{−x/a}. The page's "member of the same family" is correct.
- Hydrogen maser (slides L4B11–L4B13): p(t|n) = (1/(n−1)!)(1/τ)(t/τ)^{n−1} e^{−t/τ}. The page's (1/k! τ)(t/τ)^k e^{−t/τ} with k = n − 1 is the same; the k-substitution is a faithful workaround.
- Sum of four uniforms (p. 62): single variance a²/3 (1/3 for a = 1), sum variance 4a²/3, piecewise cubic. Matches.
- Sum of n exponentials (p. 63): S^{n−1} e^{−S/a}/((n−1)! a^n). The page's S^k e^{−S/a}/(k! a^{k+1}) with k = n − 1 is identical. Mean a, variance a² per term. Matches.

## Arithmetic and answer checks
- Dice (a): one die mean 3.5, variance 91/6 − 12.25 = 35/12 = 2.9167 (≈ 2.92). Ten dice: mean 35, variance 29.17 (≈ 29.2), sd 5.401 (≈ 5.40). With the half-step correction, (44.5 − 35)/5.401 = 1.759 (≈ 1.76); Gaussian upper tail 0.0393 (≈ 0.039). Correct. As a cross-check, the exact probability of a total ≥ 45 from enumerating ten dice is 0.0390, so the approximation is good.
- (b): for an exponential of mean ⟨I_T⟩, P(I_T > 2⟨I_T⟩) = e^{−2} = 0.1353 (≈ 0.135). Correct; the density follows from the notes' result with ⟨I_T⟩ = 2σ.
- (c): mean 25τ, variance 25τ², sd 5τ = mean/5; a single exponential stay has sd = mean = τ. Correct.
- Plot: exact curve S^(n−1) e^(−S)/Γ(n) equals a·p(S) in units of a (Γ(n) = (n−1)!); dashed curve is the Gaussian of mean n, variance n. Both correct. For n = 1 the exact curve starts at 1 and is clipped by the range [0, 0.42] (Gaussian peak 0.399); acceptable but the reader sees a cut-off curve. Caption claim at n ≈ 20: see finding 2.
- Quiz 1 (relative width ∝ 1/√n): correct, explanation correct.
- Quiz 2 (two uniforms on (−a, a) give a triangle on (−2a, 2a)): correct; "trapezoid for unequal widths" matches p. 52.
- Quiz 3 (Gaussian, Poisson, Lorentzian keep their form): correct (pp. 55–59).
- Quiz 4 (CLT fails for Lorentzians because the variance is infinite): correct (p. 60).
- Flashcards 1–3: correct (apart from the letter swap in card 2, finding 1).
- calcs/8.044/sums-central-limit-theorem.yaml: every number on the page is covered; values agree with my recomputation.

## Coverage and order
- Order follows the notes (pp. 47–66) and the slides: means/variances (slides 1–3), density of a sum (4–5), convolution (6), examples (7–13), forms that survive (14–15), CLT (16–19), convergence examples (notes pp. 62–66). The slide-only examples (family, maser) are folded into the examples paragraph and labelled "In the slides"; fine.
- Left out (all minor, info): slide 3's list of four conditions for the "special meaning" of the results; convolution in linear systems and spectrometers (p. 49); the explicit Gaussian-sum derivation (pp. 56–57, result stated); the remark that dependent bivariate Gaussians also sum to a Gaussian (p. 57, covered via slide 5); the Fourier transform pair and characteristic function (p. 58); the 6 + 1 uniform example of a dominating term (p. 61); the remark that the true four-uniform density vanishes beyond |S| = 4a (p. 62); the Bose-Einstein contrast for discrete densities (p. 65); slide 13's plot of p(t|12).
- Nothing added beyond the source except the original worked example and the remark about thermodynamic properties (a fair reading of p. 48).

## Licensing
- Neither PDF carries "All rights reserved" or "Courtesy of" notices (checked by grep on the text and visually on the slides read). Both fall under OCW's CC BY-NC-SA.
- No figures reproduced; the plot is generated from formulas.
- No verbatim copying found beyond standard terminology. "Knowingly or not" echoes the notes' "Knowingly or unknowingly" (p. 61), a short phrase; acceptable.
- The worked example is original: ten dice is new; (b) and (c) build on MIT's light and maser examples but ask new questions with new numbers.
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"`; `leadsTo` points to 8.044 Lecture 5 "Thermodynamic variables and state functions", which matches the course syllabus. Not a cosmology claim, so nothing to check there. A cosmology link (for example Gaussian primordial fluctuations) could be added later, but that is the author's choice.
- Prerequisite `functions-of-a-random-variable` exists.
- Slide labels L4B8 and L4B11 also carry a stray "8.044 LB8"/"LB11" text label in the PDF; this does not affect the citations.

## Resolution (2026-11-17, by the page author)

1. The opening note now says the page writes ζ for the value of the sum and η for the integration variable, unlike the notes.
2. The plot caption now says that by n ≈ 20 the curves are close, with a slight lopsidedness remaining; the y-range now shows the n = 1 curve.
3. Added a note that σ in the unpolarized-light result is the mean intensity of one polarization, unlike the previous page.
4. The infinite-variance remark now cites notes pp. 56 and 60.
5. Reworded: the theorem "may work" for non-identical variables, provided none dominates.
6. "most assumptions" changed to "often behind the assumption".
7. Slide 5's Gaussian now has "zero mean".
8. No change.

Status set to `reviewed`.
