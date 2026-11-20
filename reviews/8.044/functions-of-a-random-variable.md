---
page: content/year-3/8.044/functions-of-a-random-variable.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l3/ (read: slides PDF mit8_044s13_l3.pdf, 21 PDF pages; labels 8.044 L3B1 to L3B17, L3B4 appears on four PDF pages (build-up), so PDF page = slide + 3 from L3B5 on; slides 6, 8, 9, 13, 16, 17 also checked as rendered images because the text layer drops Greek letters)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_probabilitych3/ (read: notes PDF mit8_044s13_probabilitych3.pdf, printed pages 35–46 = PDF pages 1–12, plus the OCW end page)
verdict: pass-with-notes
---

# Review: Probability: functions of a random variable

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The slides' examples", black-body paragraph: "(here $2.404 = 2\zeta(3)$, the page's identification of the constant)" | Slide L3B6 writes the prefactor as $\frac{1}{2\zeta(3)}$ with an underbrace "1/2.404". | Presents 2ζ(3) as the page's own identification. The identification is MIT's (slide 6), so the attribution is wrong. The value itself is correct: 2 × 1.2020569 = 2.40411, and ∫₀^∞ x²/(eˣ − 1) dx = 2ζ(3). | Write "with $2.404 = 2\zeta(3)$ (slide 6)" and drop "the page's identification". In `calcs/8.044/functions-of-a-random-variable.yaml`, change `two-zeta-3` from `origin: page-own` to `origin: mit`. |
| 2 | info | Page order | Slides go method (1–2), intensity (3–5), black body (6–9), maximum of two numbers (10–12), desorbing atom (13–17). The notes go method, intensity, harmonic motion, product, disk. | The page follows the notes first (method, intensity, harmonic motion, product, disk) and then puts the three slide-only examples under "The slides' examples". | Acceptable, because the section heading makes the split clear. Optionally say in the intro that the slide-only examples are grouped at the end. |
| 3 | info | Black-body paragraph | Slide 6 also gives the limits of p(ν): ∝ ν/ν₀ at low frequency and ∝ (ν/ν₀)² e^{−ν/ν₀} at high frequency. | Gives only the wavelength limits from slide 9. | Optionally add the frequency limits in half a sentence, which also explains why the two shapes differ. |
| 4 | info | Product of two variables, "for either sign of $\eta$" | Notes p. 44 end with "for all z < 0", which is evidently a typo, because the text says it is "the same expression which applies for positive z". | Says the formula holds for either sign. | Correct. Optionally note "(the notes' 'z < 0' on p. 44 means all z)" under writing rule 4. |
| 5 | info | Desorbing atom | Slide 13 also gives p(φ) = 1/2π; slide 16 reuses η for the polar angle and γ for the value of v_z. | Mentions an independent azimuth without its density and keeps θ for the angle. | Fine. The page's notation is clearer than the slide's. |
| 6 | info | Quiz 2 explanation, "equally spaced values of $E$ crowd together at small $I$" | Notes p. 38: equally spaced values of E map to values of I that are densest at small I. | The wording says the E values themselves crowd. | "equally spaced values of $E$ give values of $I$ that crowd together near $I = 0$". |

Formula checks (all verified against the source):
- Derivative of an integral (reading1, p. 35): this matches notes p. 35 and slide L3B4.
- Density of the intensity (reading1, pp. 37–38): the general form 1/(2√(aη))[p_E(√(η/a)) + p_E(−√(η/a))] is on pp. 37–38, and the Gaussian form 1/√(2πaσ²I) exp(−I/2aσ²), I > 0, is on p. 38. Both also appear on slide L3B5.
- Oscillator (reading1, pp. 41–42): 1/(π√(x₀² − η²)) for 0 ≤ η < x₀ is on p. 41 and for −x₀ < η ≤ 0 on p. 42. P_x(η) = ½ + (1/π) arcsin(η/x₀) matches p. 40.
- Product (reading1, p. 44): the general result is on p. 44 (the z > 0 case is on p. 43). This matches.
- Disk change of variables (pp. 45–46): P(r, θ) = r²θ/2π, p(r, θ) = r/π, p(r) = 2r, p(θ) = 1/2π, and independence all match p. 46.
- Black body per wavelength (mit, slide 8): matches L3B8 exactly. That covers p_λ(η) = (c/η²) p_ν(c/η), λ₀ ≡ c/ν₀, and the form (1/2.404)(1/λ₀)(λ/λ₀)^{−4}/(exp[(λ/λ₀)^{−1}] − 1). I checked the algebra: (c/λ²)(1/ν₀)(c/λν₀)² = (1/λ₀)(λ/λ₀)^{−4}.
- Limits (slide 9): the slide gives ∝ (λ/λ₀)^{−4} e^{−(λ/λ₀)^{−1}} as λ/λ₀ → 0 and ∝ (λ/λ₀)^{−3} as λ/λ₀ → ∞. The page's "(λ/λ₀)^{−4}e^{−λ₀/λ}" at short wavelength and "(λ/λ₀)^{−3}" at long wavelength match.
- Desorbing atom (mit, slides 16–17): p(v) = (1/2σ⁴)v³e^{−v²/2σ²} and p(θ) = 2 sin θ cos θ match slide 13. I redid the substitution X = γ²/(2σ² cos²θ), dX = (γ²/σ²)(sin θ/cos³θ) dθ. The integrand becomes (γ/σ²)e^{−X} dX, which gives p(v_z) = (v_z/σ²) e^{−v_z²/2σ²} for v_z > 0, as on slide 17. p(v) normalises: ∫v³e^{−v²/2σ²}dv = 2σ⁴.

All prose page citations were checked and are correct: notes p. 35 / slide 2 (three steps); slides 3–5 and notes pp. 36–38 (intensity); notes pp. 38–39 (divergence, density of states); p. 39 (oscillator, binary star "in the plane of motion" = edge-on); pp. 42–44 (product); pp. 45–46 (disk); slides 6–9, 10–12, 13–17.

## Arithmetic and answer checks
- Maximum of two uniforms (slide 12): P = η², p = 2η, ⟨z⟩ = 2/3, ⟨z²⟩ = 1/2, Var = 1/2 − 4/9 = 1/18 = 0.0556, SD = 0.2357 ≈ 0.24. All correct and as on the slide.
- Worked example (a): with a = m/2 and σ² = kT/m, aσ² = kT/2. That gives p(K) = 1/√(πkTK) e^{−K/kT} and ⟨K⟩ = kT/2. Correct.
- Worked example (b): arcsin 0.9 = 1.11977 and (2/π)(1.11977) = 0.71287, so 1 − 0.71287 = 0.2871 ≈ 0.287. Correct. "Outer tenth of the range" is also correct: 0.2 of the width 2.
- Worked example (c): p_w = 2(1 − η) and ⟨w⟩ = 1/3. Also ⟨max⟩ + ⟨min⟩ = ⟨x + y⟩ = 1, so the two average to 1/2. Correct.
- Plot: 1/(π√(1 − x²)) on [−0.995, 0.995] has a minimum of 1/π = 0.318 at x = 0 and reaches 3.19 at the domain ends, so it fits within range [0, 3.4]. The caption ("lowest, 1/π, at the centre", rising without bound at the turning points) is correct. The axis label x₀ p(x) is dimensionless and correct.
- Quiz 1 (three steps): correct. Quiz 2 (largest at I → 0, integrable divergence): correct. Quiz 3 (mean of the larger, 2/3): correct. Quiz 4 (near the turning points): correct.
- Flashcards: all three are correct, and the derivative-of-an-integral card matches notes p. 35.
- calcs file: the entries match the page's numbers. The `intensity-norm` substitution I = u² is correct: dI = 2u du, so the integrand is 2e^{−u²/2}/√(2π). The only correction is the `origin` of `two-zeta-3` (finding 1).

## Coverage and order
- Every slide (L3B1–L3B17) and every section of notes Chapter 3 is covered: the method, the derivative rule, thermal light, harmonic motion (both signs of x), product of two variables, and the disk change of variables. The slides' black-body, maximum-of-two and desorbing-atom examples are also covered.
- Small omissions (info only): the notes' explanation of the derivative rule from a figure (p. 36); the remark that the oscillator divergence can be seen with a pencil, set as homework (p. 42); the slide 10 framing "random number generator for programmers"; the frequency-space limits on slide 6; and step A of the desorbing atom (slide 14, region v < η/cos θ), which the page summarises as "a substitution in the angle integral".
- Order: see finding 2.

## Licensing
- Neither PDF contains "All rights reserved" or "Courtesy of" (I checked both text layers). Both carry only the standard OCW end page.
- No figure is reproduced. The page's only graph is generated from the formula.
- No verbatim copying was found. The closest wording is "a method that always works and is the most useful in physics", which paraphrases notes p. 35 ("one which always works and one which proves to be the most useful in situations encountered in physics"). That is a short paraphrase and acceptable.
- The worked example is original. The notes open (p. 35) by naming kinetic energy from speed as the motivating case but never solve it. Part (a) applies the intensity result to a velocity component, and parts (b) and (c) are new variants of the oscillator and maximum examples with their own numbers.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: it is correct that the CMB is black-body radiation at 2.7 K (a value in `calcs/values.yaml`, role "Guth 2013: rounded") and that its spectrum peaks at different places per frequency and per wavelength. The callout's p(λ) = (c/λ²)p_ν(c/λ) is the slide 8 transformation. The slides' p(ν) is the photon-number spectrum, whereas 8.286's cmb-spectrum page plots energy density per frequency. The Jacobian argument holds for either, so the statement stays correct, and the target page itself (line 91) notes that the per-wavelength version looks different. The link `/courses/8-286/cmb-spectrum` uses the same URL form as the other links to 8.286 from Year 2/3 pages, and the page exists (8.286 Lecture 18, slug cmb-spectrum).
- leadsTo: 8.044 Lecture 4 is "Probability: sums of random variables and the central limit theorem" in `_course.json`, which is correct. 8.286 Lecture 18 is "Cosmic Microwave Background Spectrum and the Cosmological Constant, Part I", which is correct and fairly described.
- I did not compare against video (none is used for 8.044 slides-based pages).

## Resolution (2026-11-17, by the page author)

1. Fixed: the black-body paragraph now says the slide itself writes the constant as 2ζ(3) = 2.404 (slide 6); the calcs entry `two-zeta-3` now has `origin: mit`.
2.–3. No change.
4. Added a bracket on the notes' "for all z < 0" slip in the product formula.
5. No change.
6. The quiz 2 explanation now says the corresponding values of I crowd together at small I.

Status set to `reviewed`.
