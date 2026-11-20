---
page: content/year-2/8.033/lorentz-transformation.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read: local copy of the Lecture 4 slide PDF, 23 pages; text layer incomplete, so every slide was checked on the rendered images, slides 15, 19 and 21 at higher resolution)
  - content/year-4/8.286/doppler-effect.mdx (read, for the leadsTo and the cosmology callout)
  - calcs/8.033/lorentz-transformation.yaml (read; `npm run calc:test -- -k "8.033/lorentz"`: 11 passed)
verdict: pass-with-notes
---

# Review: Deriving the Lorentz transformation

Slide numbers below are PDF pages of the Lecture 4 slides (1 welcome / Lorentz photo, 2 today, 3 "ANSWER" to last lecture's puzzle, 4 battle plan, 5 rods and clocks, 6 4-vectors and linearity, 7 why linear + notation warnings + no translation, 8 no rotation / v along x / x-axis, 9 the (y, z)-plane, 10 origin moves as x = vt, 11 progress update, 12 Galileo, 13 light cone, 14 substitution, 15 solution, 16 Lorentz transformation, 17 toolbox summary, 18 inverse and velocity addition, 19 boosts as generalized rotations, 20 metric and interval, 21 wave/velocity 4-vectors, aberration, Doppler, 22 light clock movie, 23 quotation).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Toolbox, "Boosts as rotations" bullet | Slide 19 shows only "Boosts as generalized rotations": the matrix for **Λ(−v)** with cosh η on the diagonal and **+sinh η** off the diagonal, and η ≡ tanh⁻¹β. It does not use the word "rapidity", does not write cosh η = γ, sinh η = γβ, and does not say rapidities add. | "...a 'rotation' by the hyperbolic angle η = tanh⁻¹β (the **rapidity**), and rapidities simply add (slide 19)." | The physics is correct, but the additions are presented as slide content. Write e.g. "Slide 19 writes Λ(−v) as a matrix of cosh η and sinh η with η = tanh⁻¹β (so cosh η = γ, sinh η = γβ); this angle is usually called the rapidity, and since tanh(η₁ + η₂) gives the velocity-addition formula, rapidities of parallel boosts simply add." Optionally note that Λ(v) itself has −sinh η off the diagonal. |
| 2 | warning | Last paragraph before the callout | Slide 23: "The Lorentz transformation gives all the relations that I've ever needed to use." attributed to Walter Fox Smith. | "a quotation that the Lorentz transformation gives all the relations one ever needs (slide 23)" | The paraphrase turns a personal remark ("I've ever needed") into a general claim ("one ever needs") and drops the attribution. Suggest: "a remark by Walter Fox Smith that the Lorentz transformation has given him every relation he has needed (slide 23)." |
| 3 | info | Toolbox, wave 4-vector note | Slide 21: K ≡ γ_u (k_x, k_y, k_z, w/c). | The wave 4-vector is (k_x, k_y, k_z, ω/c); the slide's γ_u belongs only to the velocity 4-vector. | Verified: the note is correct (the wave 4-vector carries no γ_u; with it, K would not even be defined for light, u = c). The slide also writes "w/c" where ω/c is meant; the page silently uses ω. Could add "and writes w for ω" to the bracket. |
| 4 | info | "Narrowing down", list item 2 | Slide 8: "WLOG no rotation (we can always rotate later), so v = 0 case gives identity matrix." | "for v = 0, Λ = the identity" | The reason (no rotation between the frames) is left out; add "(no rotation, which can be added later)". |
| 5 | info | "Narrowing down", paragraph after the 4-vector formula | Slide 7 sign convention: primed frame moves at v in the unprimed frame, **so the unprimed frame moves at −v in the primed one**. | Gives only the first half. | Optional: add the second half; it is what makes Λ(v)⁻¹ = Λ(−v) natural later. |
| 6 | info | Einstein section, second solution | Slide 15: the solution Λ₁₁ = −γ "corresponds to flipping the sign of t and x, 'TP'". | "just flips the signs of t and x, and is discarded" | Fine; optionally name it (time reversal and parity, "TP" on the slide). |
| 7 | info | "Inertial frames done carefully" | Slide 5 asks a question: did SN 1987A and the camera flash go off simultaneously in your frame? | States the answer: they did not. | Correct (the supernova is about 168 000 light-years away, so its light left long before the flash); acceptable as a rewrite. |

All seven `<Formula>` citations were checked against the slides and are correct:
- "4-vectors and linearity", slide 6: both x = (x, y, z, ct) and x′ = Λ(v)x + x₀ are on slide 6.
- "Progress so far", slide 11: matrix (1) and the component form (2) match, including the slide's mixed notation Λ₁₁(x − vt) next to Λ₄₄ct.
- "Light cone in both frames", slide 13: eqs. (3) and (4).
- "Matching the light cones", slide 14: the rearranged quadratic and the three conditions match. I expanded Λ₁₁²(x − βct)² − (Λ₄₁x + Λ₄₄ct)² myself and got the same coefficients.
- "Lorentz factor", slide 15: matches.
- "Lorentz transformation", slide 16: matrix entries γ, −γβ, 1, 1 and the component form match; "Compare to Einstein's 1905 paper" is on slide 16.
- "Velocity addition", slide 18: u_x, u_y, u_z match term by term.
- "Invariant interval", slide 20: Δs² ≡ Δxᵗ η Δx = Δx² + Δy² + Δz² − (cΔt)² and η = diag(1, 1, 1, −1) match.
- "Aberration and Doppler effect", slide 21: matches.

The prose slide numbers also match the slides: postulates and "special relativity" (4), rods and clocks, SN 1987A, bookkeeper's time, relativity of simultaneity (5), linearity argument and the notation warnings (book uses t and **a**) (7), the WLOG steps (7–11), Galileo (12), Einstein (13–16), toolbox (17–21), light clock movie (22), quotation (23). Every matrix-entry condition checks out: Λ₁₂ = Λ₁₃ = Λ₄₂ = Λ₄₃ = 0 and Λ₂₁ = Λ₃₁ = 0 (slide 8), Λ₂₂ = Λ₃₃ = 1 and Λ₂₃ = Λ₃₂ = 0 (slide 9), Λ₂₄ = Λ₃₄ = 0 and Λ₁₄ = −βΛ₁₁ (slide 10), Galileo's Λ₄₁ = 0, Λ₄₄ = Λ₁₁ = 1 (slide 12).

## Arithmetic and answer checks
- I re-derived the solution of the slide-14 conditions by hand. From Λ₄₁ = −βΛ₁₁²/Λ₄₄, (Λ₁₁² − 1)(β²Λ₁₁² + 1) = β²Λ₁₁⁴, which gives Λ₁₁² = 1/(1 − β²) = γ². Then Λ₄₄ = γ and Λ₄₁ = −βγ. This is correct and matches slide 15.
- I re-derived aberration and Doppler from k = (ω/c)(cos θ, sin θ, 0, 1) with Λ(v). ω′/c = γ(ω/c)(1 − β cos θ) and k′_x = γ(ω/c)(cos θ − β), so cos θ′ = (cos θ − β)/(1 − β cos θ). Both are correct, with θ the angle between the direction of propagation and v, measured in the unprimed frame.
- Worked example:
  - (a) γ = 1/√0.64 = 1.25. Correct.
  - (b) x′ = 1.25 × 3.2 = 4.0 and ct′ = 1.25 × 0 = 0. Interval: 25 − 9 = 16 = 16 − 0. Correct. "Same time as the origin event" is right because ct′ = 0.
  - (c) 1.2/1.36 = 0.88235 ≈ 0.882. tanh⁻¹0.6 = ½ ln 4 = ln 2 = 0.6931; 2 ln 2 = 1.3863; tanh(ln 4) = 3.75/4.25 = 0.88235. Correct.
- Quiz 1 (answer 1, the two postulates): correct. The explanation matches slide 4.
- Quiz 2 (answer 1, translational invariance): correct. The explanation matches slide 7.
- Quiz 3 (answer 1, γ = 1.25): correct.
- Quiz 4 (answer 1, about 0.88c): correct.
- Flashcards: all three are correct. The third uses η for the metric. This is consistent with the page's own note that slides 19 and 20 use the same letter for rapidity and metric.
- Calcs file: `npm run calc:test -- -k "8.033/lorentz"` gives 11 passed. It covers the three cone conditions, the interval invariance, rapidity addition and every number in the example.
- All four quiz answers are at index 1. Commit e33851a ("Vary the position of the correct quiz answer") suggests the run aims to vary the position, so consider moving some answers. This is info only, not a correctness issue.

## Coverage and order
- The page follows the slide order 1–23 throughout.
- Left out, all minor:
  - Slide 1: Lorentz's dates and Nobel Prize 1902 (only the photo, which is correctly not reused).
  - Slide 3: the "ANSWER" slide. It shows translations and rotations as symmetries with the Galilean transformation crossed out. The page sums this up in one clause ("the Galilean transformation cannot be right for light").
  - Slide 5: the two "Minkowski diagram" bullets (the synchronization procedure and the basics).
  - Slide 8: the "no rotation" reason (item 4 above).
  - Slide 7: the second half of the velocity sign convention (item 5 above).
- Added beyond the slides:
  - The word "rapidity" and the statement that rapidities add (item 1). Correct physics, but it should not be credited to slide 19.
  - The "strictly, non-affine" remark is on slide 7, so it is not an addition.
  - The worked example is the page's own.

## Licensing
- Slide 1's Lorentz photo is marked "Image courtesy of Wikipedia". The page uses no images, so nothing needs a credit. Slide 3's "Figure by MIT OCW" is also not reused.
- The search found no "All rights reserved" notice in the slide text. The deck is under the course's CC BY-NC-SA licence.
- No OpenStax or LibreTexts material.
- The wording is rewritten. Short fragments close to the slides are standard terminology or brief phrases:
  - "Inertial frames done carefully"
  - "bookkeeper's time"
  - "first shocker"
  - "Galileo and Einstein part ways"
  - the two postulates, which are standard statements
  - "Without loss of generality"

  None is a copied paragraph.
- The slide-23 quotation is paraphrased, not quoted verbatim, which is fine for licensing (see item 2 for accuracy).
- The worked example is original: own event, own numbers. It does not appear on the slides.

## Notes
- Cosmology callout:
  - The formula ω′ = ωγ(1 − β cos θ) is correctly quoted from slide 21.
  - The link target /courses/8-286/doppler-effect exists (8.286 Lecture 3, "The Doppler effect and special relativity").
  - "Best understood as the stretching of space" agrees with how the 8.286 pages present cosmological redshift (doppler-effect.mdx callout and cosmological-redshift).
  - "For nearby galaxies it is just this formula at small β" is fair: to first order z ≈ β.
- leadsTo 8.286 Lecture 3: fair. However, 8.286 Lecture 3 treats only the line-of-sight case, 1 + z = √((1 + β)/(1 − β)). It does not use the general-angle form ω′ = ωγ(1 − β cos θ) quoted in the `why`. That form gives the line-of-sight result at θ = 0. Optional wording: "The relativistic Doppler effect, whose line-of-sight case (θ = 0) 8.286 uses as the first step towards cosmological redshift."
- leadsTo 8.033 Lecture 5: I did not check it against Lecture 5's slides (not part of this review). The claim (time dilation, length contraction, intervals) is plausible, but I have not verified it.
- The historical statement "Einstein called invariance under changes of inertial frame 'special relativity'" is attributed to slide 4, which says exactly this.
- No errors were found, so the verdict is pass-with-notes. Items 1 and 2 should be fixed before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

1. The rapidity bullet now says what slide 19 shows (Λ(−v) with cosh η, sinh η, η = tanh⁻¹β) and marks the name "rapidity" and the adding of rapidities as not on the slide.
2. The slide 23 quotation is now attributed to Walter Fox Smith and kept to his own experience.
Info: quiz answer positions varied (correct answers unchanged). Others not changed.
