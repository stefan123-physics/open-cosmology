---
page: content/year-2/8.033/four-vectors-doppler-aberration.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture6_kinem3/ (read: the Lecture 6 slide PDF, 28 pages, from a local copy; the text layer is incomplete, so every slide was read from rendered images. Slides 15, 16 and 22 were also rendered at a larger size)
  - Lecture 5 slides (read for comparison only, to find which slides repeat Lecture 5)
  - content/year-4/8.286/doppler-effect.mdx (read, to check the leadsTo and the cosmology callout)
verdict: pass-with-notes
---

# Review: Four-vectors, the Doppler effect and aberration

Slide map used (PDF page = slide): 1 welcome / Doppler portrait ("Image Courtesy of Wikipedia"); 2 summary of last lecture ("Why opposite sense?"); 3 Today; 4 title "Velocity addition"; 5 toolbox velocity addition (4×4 matrices, "SIMPLER WITH 2x2 MATRICES" box); 6–7 perpendicular velocity addition; 8 title "Unification of space & time"; 9 "Everything is relative, or is it?"; 10 boosts as generalized rotations; 11 hyperbolic trig reminders; 12 = slide 10 repeated; 13 Lorentz invariant, metric, ΛᵗηΛ = η; 14 xᵗηx = x² + y² + z² − (ct)² invariant; 15 null/spacelike/timelike with Δσ², Δσ, Δτ; 16 figure "The Three Types of 4-Vectors" ("Figure by MIT OCW"); 17 title "Timelike, spacelike or null?"; 18–19 = slides 6–7 repeated; 20 title "Application: dτ is invariant"; 21 velocity 4-vector; 22 velocity addition from U; 23 "This is how it is in the frame S′. But how does it look?"; 24 transforming a wave vector, eq. (1); 25 E = sin(kᵗηx), k′ = Λk; 26 aberration and Doppler, k = k(sinθcosφ, sinθsinφ, cosθ, 1); 27 Lorentz transform along z, φ′, cosθ′, k′; 28 Weiskopf et al. handout, aberration/Doppler names, λ′/λ = k/k′, Resnick (2-27b) tan form, classical limits, transverse Doppler. Slides 4–17 largely repeat Lecture 5.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout | (Not on the slides.) The 8.286 doppler-effect page, which the callout links to, says the special-relativity Doppler formula is "the special case of a universe with no gravity", and that for small z, β ≈ z. | "the relativistic Doppler effect with which astronomers first measured galaxies moving away from us … for nearby galaxies it reduces to this formula." | Two claims are not quite right. (a) The early galaxy measurements (Slipher, Hubble) used the ordinary Doppler shift at small speeds, z ≈ v/c, not the relativistic formula. (b) For nearby galaxies the cosmological redshift agrees with the Doppler formula only to first order (z ≈ v/c), not with the full √((1−β)/(1+β)). Suggest: "…is the Doppler effect astronomers used to measure galaxies moving away from us; for nearby galaxies, z ≈ v/c. In cosmology the redshift is understood as the stretching of space, and this special-relativity formula returns exactly only in a universe without gravity (8.286 Lecture 3)." Also say which sign is which in γ(1 ∓ β): upper sign = observer moving away. |
| 2 | warning | Review section, "by $2 \times 2$ matrices and by differentials … (slides 4–7)" | Slide 5 does the composition Λ(v₂)Λ(v₁) with **4×4** matrices. A box on the slide only says it is "SIMPLER WITH 2x2 MATRICES". | Says the results are repeated "by 2×2 matrices". | "by multiplying Lorentz matrices (slide 5 notes it is simpler with 2 × 2 matrices in the (x, ct) plane) and by differentials". |
| 3 | info | "Separations are null, spacelike or timelike according to the sign of $\Delta s^2$ … $\Delta\sigma = \sqrt{\Delta s^2}$" (slides 15–17) | Slide 15 calls the separation Δσ² (and then defines Δσ ≡ √Δσ², Δτ ≡ √(−Δσ²)). | Uses Δs² for the interval. | Fine and clearer (it avoids MIT's Δσ² vs Δσ clash, and matches the Lecture 5 page). A short note such as "(the slides write Δσ²)" would help readers who compare with the slides. |
| 4 | info | Slide 16 description | The figure shows surfaces: a one-sheet hyperboloid (spacelike), the light cone (null) and a two-sheet hyperboloid with "Future"/"Past" sheets (timelike). Its labels under TIMELIKE read "ΔXᵗηΔx > 0, \|Δx\| > cΔt", a slide slip (should be < 0 and \|Δx\| < cΔt). | "spacelike vectors reach outside the light cone, null ones lie on it, timelike ones inside, pointing to the future or the past." | The physics is correct and the page does not repeat the slip. Optionally say the figure draws the surfaces of constant interval (hyperboloids and the cone). Per rule 4, a bracketed note on the slide's timelike label is optional, as the page does not quote it. |
| 5 | info | "the last relation follows from the normalization $\vec u'^t\eta\vec u' = -1$ (in units $c = 1$; slide 22)" | Slide 22 says exactly this ("u′ᵗηu′ = uᵗηu = −1"). The relation γ_{u′} = γ_uγ(1 + u_xv/c²) also follows directly by comparing the fourth components. | As the slide. "(in units c = 1)" is the page's own reading. | No change needed. Optionally add "or directly from the fourth component". The page silently fixes two slide typos ("γ_u y_z" for γ_u u_z; "in Lorentz invariant"), which is right. |
| 6 | info | Section on slide 22 | On slide 22, the primes mean the velocity in the frame reached by Λ(−v), i.e. u′_x = (u_x + v)/(1 + u_xv/c²). On slides 6–7 the primes were the other way round (u′ given in S′, u found in S). | Follows slide 22. | Optional: one clause noting that U′ here is the velocity in a frame moving at −v relative to S, so readers are not confused by the swap relative to the Lecture 5 convention. |
| 7 | info | "In the classical limit these reduce to the familiar results" (slide 28) | Slide 28 only says "Examine classical limits" (left to the student). | States the outcome. | True (β ≪ 1 gives k′ ≈ k(1 − βcosθ) and the classical aberration). Could say "Slide 28 leaves the classical limits as an exercise: …" and give the limit in one line. |
| 8 | info | "These match the ray-tracing handout used in the course (slide 28)" | "equations (1)-(4) in the Weiskopf et al ray tracing handout". | Does not name the handout. | Optional: name Weiskopf et al. |

No formula citation errors were found. Every `<Formula>` matches its slide:
- slide 14: xᵗηx = x² + y² + z² − (ct)² (correct; slide 13 has η and ΛᵗηΛ = η, as the prose says).
- slide 21: U ≡ dX/dτ = γ_u(u_x, u_y, u_z, c), γ_u, U′ = ΛU, UᵗηU = −c² (all on slide 21; dτ = dt/γ_u too).
- slide 22: U′ = γ_{u′}(u′, c) = Λ(−v)U, with Λ(−v) having +γβ off-diagonal (consistent with slide 10). The page's middle form γ_u(γ(u_x+v), u_y, u_z, γ(1 + u_xv/c²)c) is algebraically the same as the slide's. γ_{u′} = γ_uγ[1 + u_xv/c²] is correct.
- slide 24: E = sin(k_x x + k_y y + k_z z − ωt), k = (k_x, k_y, k_z, ω/c), ω/c = k = √(k_x² + k_y² + k_z²) for waves at c ("electromagnetic or gravitational wave", as the page says).
- slide 25: the chain sin(k′ᵗηx′) = sin(k′ᵗηΛx) = sin[(Λ⁻¹k′)ᵗ(ΛᵗηΛ)x] = sin[(Λ⁻¹k′)ᵗηx], and the caveat about E′ = E. I checked the algebra: (Λ⁻¹k′)ᵗΛᵗηΛx = k′ᵗηΛx. Correct.
- slide 26 → 27: k = k(sinθcosφ, sinθsinφ, cosθ, 1). The boost along z with rows (γ, −γβ) and (−γβ, γ) gives (…, γ(cosθ − β), γ(1 − βcosθ)). Correct, and it is on slide 27 (k on 26). The page cites the combined formula to slide 27, which is acceptable because slide 27 restates k inside the product.
- slide 27: φ′ = φ, cosθ′ = (cosθ − β)/(1 − βcosθ), k′ = kγ(1 − βcosθ). Correct. Sign convention: S′ moves at +v along z, θ is measured from +z; a positive β then reduces cosθ′, so the light is seen tilted backwards and its source forwards. This is consistent throughout the page.
- Prose on slide 28: λ′/λ = k/k′, tanθ′ = sinθ/γ(cosθ − β) (Resnick 2-27b), transverse Doppler ω′ = γω at cosθ = 0. All correct and correctly placed. I checked the tan form against the cos form (it is also in calcs).

Prose slide numbers checked: slides 1–2 (Doppler, summary), 3 (Today), 4–7 (velocity addition), 9 (not everything is relative; Australians and Bostonians), 8 and 10–14 (unification), 10 and 12 (rapidity η = tanh⁻¹β; slide 12 repeats slide 10), 13 (the "only difference … is a minus sign" cloud, quoted correctly), 15–17, 20 (dτ invariant), 23, 24, 25, 26, 27, 28. All correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k four-vectors-doppler`: 6 passed. The calcs entries cover the normalization identity, the unit-length identity of the boosted direction, the equivalence of the tan form, and the three example numbers.
- Worked example (a): γ = 1/√0.75 = 1.1547 ≈ 1.155. cosθ′ = (0 − 0.5)/(1 − 0) = −0.5, so θ′ = 120°. The propagation direction tilts backwards, so the apparent source direction is 60° from +z, i.e. shifted forward. Correct. Frequency γω ≈ 1.155ω: correct (transverse case in S).
- Worked example (b): cosθ = 1, so k′/k = γ(1 − β) = 0.5/0.866 = 0.5774 = √(0.5/1.5). Correct. The light travels along +z, so the source is behind and the observer recedes from it: redshift. The interpretation is right.
- Quiz 1: γ_u²(u² − c²) = −c², so the answer is index 2 (−c²). Correct.
- Quiz 2: index 1 (invariant phase). Correct; the explanation matches slide 25.
- Quiz 3: cosθ = 0 gives k′ = γk, so the answer is index 1 (γω). Correct.
- Quiz 4: receding along the line of sight at β = 0.5 gives √(1/3) = 0.577, so the answer is index 2 (×0.58). Correct. The distractors 1.73 (= √3, approaching), 0.5 and 1.15 (= γ) are sensible.
- Flashcards: all three agree with slides 21, 25 and 27–28.
- Callout: γ(1 ∓ β) = √((1 ∓ β)/(1 ± β)) is algebraically correct (see finding 1 for the wording).

## Coverage and order
- The page follows the slide order: summary and Today (1–3), velocity-addition review (4–7), unification (8–14), interval types (15–17), dτ invariant (20), U (21–22), "how does it look?" (23), wave 4-vector (24–25), aberration and Doppler (26–28). Slide 9 is mentioned before slides 10–14, as on the slides.
- Not mentioned: slide 11 (hyperbolic trig reminders); the remark on slides 10/12 that rapidities add for boosts in the same direction, so their order does not matter; slide 14's "it can be positive or negative" and "(also easy to see directly from top equation)"; and slides 18–19, a repeat of 6–7 that the page does not mention. All are review material already on the Lecture 5 page, so leaving them out is acceptable. Optionally add "rapidities add" in one clause.
- Nothing is added beyond the slides except the worked example, the cosmology callout and the bracketed caveat. These are correctly presented as the page's own.

## Licensing
- No images are used. Slide 16's figure ("Figure by MIT OCW") is described in words only, not reproduced. Slide 1's Doppler portrait ("Image Courtesy of Wikipedia") is not used, so no courtesy credit is needed.
- No "All rights reserved" notices are in the slides (none visible on any slide image).
- No verbatim copying beyond short phrases: "the only difference between space and time is a minus sign" is a short, quoted, attributed phrase. "Australians and Bostonians agree on the length of a 3-vector" is paraphrased. The rest is rewritten.
- No OpenStax or LibreTexts material.
- The worked example is original (the slides have no numerical example).

## Notes
- The leadsTo to 8.286 Lecture 3 is correct: `content/year-4/8.286/doppler-effect.mdx` is lecture 3 and derives 1 + z = √((1+β)/(1−β)), the same as the callout's upper sign. Its `why` ("how cosmologists first measured the motion of galaxies") is fair. The leadsTo to 8.033 Lecture 7 ("Stellar aberration, Minkowski diagrams and the twin paradox") was not checked against the Lecture 7 slides (s7.pdf was not read for this review). Uncertain.
- Outside this page: the Lecture 5 page's leadsTo to Lecture 6 says "…with astrophysical jets". The Lecture 6 slides contain no jets. This is for whoever reviews `time-dilation-length-contraction.mdx`; it is not a finding on this page.
- The frontmatter source title "Relativistic Kinematics (cont.)" matches `_course.json`. I did not fetch the live OCW page to re-confirm it.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. The cosmology callout now says the first galaxy measurements used the small-speed form z ≈ v/c, that the special-relativity formula is the no-gravity special case, and that it agrees with the cosmological redshift for nearby galaxies to first order; it also says which sign is which.
2. "by 2×2 matrices" replaced by "by matrix multiplication (slide 5 notes it is simpler with 2×2 matrices)".
Info: not changed.
