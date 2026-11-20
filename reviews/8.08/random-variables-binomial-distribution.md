---
page: content/year-4/8.08/random-variables-binomial-distribution.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/71302466172a4c0f5f069a31b3c8a6d4_random_variable.pdf (read: PDF pages 1-5 = Wen's handwritten pp. 36-40, from page images at 90 dpi, with 160-400 dpi crops of p. 36 (point 2), p. 38 (Example II definition) and p. 39 (expansion of Z); the PDF has no text layer)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/random_variable/ (not opened separately; it is the landing page of the same PDF)
  - content/year-3/8.044/one-random-variable.mdx, two-random-variables.mdx, sums-central-limit-theorem.mdx; content/year-5/8.902/power-spectrum.mdx, press-schechter.mdx (read, to check the page's claims about them)
verdict: needs-changes
---

# Review: Random variables: independence, the binomial distribution and the central limit theorem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The central limit theorem", sentence before "Gaussian distribution of the mean" | (Claim about our own 8.044 page.) `content/year-3/8.044/sums-central-limit-theorem.mdx` states the theorem (notes p. 60) and its conditions, and uses Fourier transforms only to show that Gaussians, Poissons and Lorentzians keep their form under addition. It contains no proof of the central limit theorem. | "see the 8.044 page for the proof by Fourier transforms and the counterexample of the Lorentzian" | The pointer is wrong. E.g. "see the [8.044 page] for the conditions of the theorem and the counterexample of the Lorentzian, whose sums stay Lorentzian". |
| 2 | warning | "Two random variables and their joint probability", second paragraph | p. 36: "P(s₁=1 & s₂=1) = P₁(1)P₂(1) ?" with a large "×" written to the right of the line; the formula is not struck through. | "Wen writes exactly that with a question mark, then crosses it out" | "then marks it wrong with a cross" (the meaning is the same; "crosses it out" describes something the notes do not show). |
| 3 | warning | "Wen's trick for the averages", sentence after "Generating function" | p. 39: "How to calculate ⟨k⟩: let x = p/(1−p) & Z = (1+x)ⁿ". Nothing about why the letter Z was chosen. | "The name $Z$ is chosen on purpose: each term ... is exactly the binomial probability" | The notes do show that each term over Z is B(k; n, p), so the maths is Wen's; the intent is not stated. E.g. "The letter $Z$ is suggestive: ...". The partition-function and canonical-ensemble analogies that follow are the page's own and are correct. |
| 4 | info | "Why large systems hardly fluctuate" (whole section) | Not in the notes (they end with the boxed σ on p. 40). | A section with no citation, on 10²² parts and relative fluctuations of order 10⁻¹¹. | Correct physics and correct numbers. Since the page elsewhere marks its own additions ("The number is ours", "this step is ours"), consider one bracket saying this section goes beyond Wen's notes. |
| 5 | info | "Independence and correlation", random-force paragraph | p. 38 box: "Random force ⟨F(s)F(0)⟩ = ⟨F(s)⟩⟨F(0)⟩ = 0 if s → ∞". No physical example, no reason given. | Adds the dust-grain example and the reason (values far apart in time become independent); writes "→" for Wen's "=". | Fine as interpretation; the dust grain is the page's own illustration, which is clear enough from context. No change needed. |
| 6 | info | Cosmology callout, Press–Schechter sentence | 8.902 press-schechter page: F(M) = ½ erfc(δ_c/√2σ), then the factor 2 ("fudge factor") because the plain tail gives only half the mass. | "the fraction of matter in halos above a given mass is the probability that this variable lies above a collapse threshold" | This is Press and Schechter's assumption as stated in 8.902 (line 90 of that page), so it is fairly attributed; the factor 2 is omitted. Optional: "(up to Press and Schechter's famous factor of 2)". |

All slips the page reports in the notes were checked against the images and are real:
- p. 38, Example II: the notes write "s₂=1 if n%2=0   s₂=1 if n%2≠0" (confirmed in a 300 dpi crop); the table on the same page uses s₂ = 0 for odd faces. The page's bracket is correct.
- p. 39: the x² coefficient of Z is written "n(n+1)/2" (400 dpi crop: the middle sign is a cross-shaped "+"); the correct coefficient is n(n−1)/2. The page's bracket is correct. (The handwriting is small; I read "+" with fair but not complete certainty. Whatever the sign in the scan, the page's formula n(n−1)/2 is right.)
- p. 40: Wen writes P_G = (1/√(2πσ)) e^{−(X−⟨X⟩)²/2σ} and boxes σ = (1/n)⟨(x−⟨x⟩)²⟩, so his σ is the variance throughout. This is a consistent notation, not an error, and the page describes it as a convention ("Wen writes σ for the variance itself"), which is accurate.

Other slips looked for and not found (none missed): p. 37 writes "P(00)" without the subscript 12 in Example I (trivial, the page rightly ignores it); p. 40 "independetT" is a spelling slip with no content. Wen's die variable is n; the page renames it m and says so.

## Formula citations (each checked against the page images)
- "Normalization", "Average and moments", "Fluctuation": p. 36, point ①; all three on that page as cited, not boxed. Correct.
- "Joint probability" (sum of four = 1): p. 36, point ②. Correct. The page's remark that P₁₂(s₁, s₂) is boxed is correct.
- "Probability of one variable alone": p. 36, point ② ("P₁(1) = P₁₂(1,1) + P₁₂(1,0) ... regardless s₂"). Correct.
- "Conditional probability": p. 37 (heading "Conditional randomness", no point number). Both formulas as on p. 37; the bar notation is the page's, and it says so. Correct.
- Example I (p. 37) and Example II (p. 38): definitions, the four joint probabilities, and both sets of conditional probabilities agree with the notes, including Wen's conclusions "s₁ & s₂ are independent random variables" (boxed, p. 37) and "not independent" (p. 38).
- "Independent random variables": p. 38, boxed. Correct.
- "Average of a product of independent variables": p. 38, the three-line derivation, not boxed. Correct.
- "Correlation": p. 38, last line. Correct.
- "Correlation of a random force": p. 38, box on the right; the notes use s for the time, which the page mentions. Correct.
- "Binomial distribution": p. 39, point ③. Correct.
- "Mean and second moment": p. 39, point ③ (bracketed pair). Correct.
- "Generating function": p. 39, with the slip corrected and flagged. Correct.
- "Each term is a probability": p. 39. Matches the notes line for line. Correct.
- "Average from the generating function": p. 39, bottom (ticked). Correct.
- "Variance from the generating function": labelled as not derived in the notes. The derivation is correct (x d/dx [nx/(1+x)] = nx/(1+x)², and 1/(1+x) = 1 − p, x/(1+x) = p).
- "Mean of n variables", "Gaussian distribution of the mean", "Variance of the mean": p. 40, point ④. Correct (σ → σ² disclosed).
- "Width of the Gaussian": p. 40, boxed. Correct.

## Arithmetic and answer checks
Recomputed by hand and in Python.
- Fluctuation identity and two-valued variance p(1 − p): correct.
- Example I table (6 | 2,4 | 3 | 1,5 → 1/6, 1/3, 1/6, 1/3) and conditionals 1/2, 1/2; 1/3, 2/3: correct. P₁₂(1,1) = 1/2 × 1/3 = 1/6: correct.
- Example II table (2 | 1,3 | 4,6 | 5 → 1/6, 1/3, 1/3, 1/6) and conditionals 1/3, 2/3; 2/3, 1/3: correct. "Only one of the three even faces is low": correct.
- Correlation of Example II: ⟨s₁s₂⟩ = 1/6, ⟨s₁⟩⟨s₂⟩ = 1/4, difference −1/12; negative sign and its explanation correct.
- Claim that zero correlation implies independence for two 0/1 variables: correct (given P₁ and P₂, P₁₂(1,1) fixes the other three entries). "P₁ and P₂ have two free numbers, P₁₂ three": correct.
- Plot caption (n = 20, p = 0.6): mode k = 12, B = 125970 × 0.6¹² × 0.4⁸ = 0.17971 → 0.180 (ok); Gaussian peak 1/√(2π × 4.8) = 0.18209 → 0.182 (ok). "Widest at p = 0.5": variance np(1 − p) is largest there (ok). Range 0–0.4 holds over the slider: at p = 0.1 or 0.9 the binomial peak is 0.285 and the Gaussian peak 0.297.
- Generating-function steps (mean np, variance np(1 − p), ⟨k²⟩ = n²p² + np(1 − p)): correct.
- Variance of the mean: cross terms vanish by independence and zero mean deviation; σ² = (1/n)⟨(x − ⟨x⟩)²⟩. Correct. "The argument for σ² used only independence and holds for every n": correct.
- Macroscopic estimate: 1/√(10²²) = 10⁻¹¹ (ok).
- Worked example (a): primes ≤ 12 are 2, 3, 5, 7, 11 → 5/12; joint 3/12 (2, 3, 5), 3/12 (1, 4, 6), 2/12 (7, 11), 4/12 (8, 9, 10, 12), sum 1; conditionals 3/5 = 0.6 and 3/7 = 0.4286 → 0.429; correlation 3/12 − 5/24 = 1/24 = 0.0417 → 0.042, positive (ok).
- Worked example (b): ⟨k⟩ = 240, (Δk)² = 96, Δk = 9.798 → 9.80; 9.798/240 = 0.0408 → 0.041 (ok); z = 19.5/9.798 = 1.990; ½ erfc(1.990/√2) = 0.02328 → 0.023; 1/0.02328 = 42.9 → "one in 43" (ok); the continuity correction (259.5) is right. √(0.4/(0.6 × 10²²)) = 8.165 × 10⁻¹² → 8.2 × 10⁻¹² (ok); "about eleven significant figures" fair.
- Quiz 1: 0.3/0.4 = 0.75, answer index 3 = "0.75" (ok). Distractor explanations: 0.3 = unnormalized, 0.5 = P₁(1) (ok); 0.6 is not explained, but it is not claimed to be. Independence conclusion correct.
- Quiz 2: ⟨k⟩ = 10, Δk = √8 = 2.83, answer 0 (ok); distractors 8 (no root), √10 = 3.16 (no 1 − p), 40 (mean number of zeros, 50 × 0.8) all correctly explained.
- Quiz 3: variance 4/100 = 0.04, sd 0.2, answer 1 (ok); 20 = √(100 × 4) is the sd of the sum (ok).
- Quiz 4: answer 1 (ok); Example II numbers 1/6 vs 1/4 (ok).
- Flashcards: all five correct. "Relative spread falls like 1/√n" assumes ⟨x⟩ ≠ 0, which is implicit; fine.
- Calcs file `calcs/8.08/random-variables-binomial-distribution.yaml`: every number on the page (examples, caption, worked example, quizzes, the 10⁻¹¹ estimate) has an entry, and the derivation identities (fluctuation, product average, binomial moments for n = 4, the x² coefficient slip, generating-function mean and variance, variance of the mean) match the page. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the notes in order: point ① (p. 36), point ② joint probability (p. 36), conditional randomness (p. 37), Example I (p. 37), Example II (p. 38), independence and the product of averages, correlation and the random-force box (p. 38), point ③ binomial distribution, moments and the Z trick (p. 39), point ④ central limit theorem (p. 40). Nothing in the five pages is left out.
- Additions, all correct: the derivation of the second form of Δs; the variance via a second x d/dx (marked as ours); the Example II correlation value (marked as ours); the zero-correlation remark; the plot; the "Why large systems hardly fluctuate" section (not marked, finding 4); the worked example and callout.

## Licensing
- The PDF is five scanned handwritten pages with no "All rights reserved" and no "Courtesy of" notice anywhere (all five pages inspected); there are no figures to redraw beyond the two small probability tables, which are re-typed facts, not drawings.
- No OpenStax or LibreTexts material.
- Wording: the notes are terse formula lists with a few words ("Conditional randomness", "regardless s₂", "for correlated random variable", "independent random variables"); the page's prose is its own. The two dice examples are Wen's (they must be, to explain his notes) and are reproduced as content with our tables; the worked example (twelve-sided die, 400 spins) is original.

## Forward links and cross-references
- leadsTo 8.08 lecture 6: Chapter VI is "Thermal Fluctuations" (`_course.json`); the stated reason fits the title. Not checked against the Chapter VI notes themselves.
- leadsTo 8.902 lecture 15: the 8.902 power-spectrum page (lecture 15) defines ξ(r) = ⟨δ(x)δ(x + r)⟩ (its eq. 408 citation): an average of the product of the density contrast at two points. Accurate.
- leadsTo 8.902 lecture 16: the press-schechter page (lecture 16) treats the smoothed contrast as Gaussian with zero mean and counts halos by the tail above δ_c. Accurate (see finding 6 on the factor 2).
- Cosmology callout: accurate and not overstated apart from the omitted factor 2 (finding 6). "Cosmology cannot predict where a particular galaxy will form, only the statistics" matches the 8.902 page's own framing.
- 8.044 links: one-random-variable does treat densities (with delta functions for discrete variables), and two-random-variables uses "marginal" densities, as the page says. The sums-CLT link is mis-described (finding 1).

## Notes
- The intro's description of the source ("five scanned handwritten pages, numbered 36 to 40 at the top right") is correct.
- Status should stay `draft` until finding 1 is fixed; findings 2 and 3 are small wording fixes.

## Resolution (2026-11-19, by the page author)

1. Error (8.044 link): now reads "see the 8.044 page for the conditions of the theorem and the counterexample of the Lorentzian"; no claim of a proof there.
2. Warning (crossed out): now "then marks it wrong with a cross".
3. Warning (name Z): now "The letter $Z$ is suggestive"; the identification with a partition function is presented as an analogy.
4. Info: "Why large systems hardly fluctuate" now opens with "(This section goes beyond the notes.)".
5. Info (random force additions): kept; they are explanation, and "→" makes the limit explicit.
6. Info (Press–Schechter): the callout now says "(up to a famous factor of 2)".

No numbers changed, so the calcs file is unchanged. Status set to reviewed.
