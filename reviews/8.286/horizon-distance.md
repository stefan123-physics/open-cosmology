---
page: content/year-4/8.286/horizon-distance.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-8-the-dynamics-of-homogeneous-expansion-part-iv/ (not fetched; lecture content taken from a local copy of the full Lecture 8 transcript, t08.txt. The horizon part, transcript pp. 16-22, was read in full.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read via the local copy t08.txt; the URL itself was not fetched, so the match between URL and file is assumed, not verified)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec09/ (read via local copies l09.pdf/l09.txt; slide 2 checked. The URL itself was not fetched.)
  - third-party structured notes (notes-L8.md), used only as a map and checked against the transcript
verdict: pass-with-notes
---

# Review: The horizon distance

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Horizon distance, flat matter-dominated" (`cite="reading2" at="slide 2"`) | Lecture 9 slide 2 states only the result: horizon distance = present distance of the furthest particles from which light has reached us; a(t) ∝ t^(2/3) ⇒ ℓ_p,horizon = 3ct = 2cH⁻¹. The intermediate chain b t₀^(2/3) ∫ c dt/(b t^(2/3)) = b t₀^(2/3)·3c t₀^(1/3)/b was worked on the board in Lecture 8 (transcript p. 19), and 3ct₀ → 2c/H₀ on pp. 19-20. | Cites slide 2 for the whole evaluated chain. | Cite reading1 (transcript) `at="pp. 19-20"` for the chain, or keep slide 2 but cite it only for the end result 3ct₀ = 2c/H₀ (e.g. split the formula or add a second cite). |
| 2 | info | First two `<Formula>` blocks (`cite="reading1"`) | dx/dt = c/a and ℓ_p,horizon = a(t₀)∫₀^{t₀} c dt/a are at transcript pp. 17-18. | No `at=` location. | Add `at="p. 17"` and `at="p. 18"`. |
| 3 | info | "Did everything start in contact?" | Guth: starting at ε changes the answer "only by some small multiple of epsilon". The true correction is 3c t₀^(2/3) ε^(1/3), i.e. scaling as ε^(1/3), not linearly. | "changes only slightly, shrinking to zero change as ε → 0". | No change needed: the page correctly avoids repeating Guth's linear-in-ε wording and its statement is true. Optionally add a footnote that the correction scales as ε^(1/3). |
| 4 | info | "How the earliest light travels" (Plot) | Guth states in words (p. 22) that the earliest light first gets further from us, then comes back; no figure or formula. | Plots 3t^(2/3) − 3t with turnaround at t = (2/3)³ t₀. | Page's own construction; physics verified correct (see below). Caption already says "Computed from…", which is fair. |
| 5 | info | Forward pointer to the horizon problem | Not mentioned in Lecture 8 pp. 16-22. | "This finite horizon will become important when we meet the horizon problem, one of the motivations for inflation." | Correct physics and correct course direction (8.286 covers the horizon problem as a motivation for inflation later); it is the page's own forward pointer, not attributed to Guth, so fine. |
| 6 | info | Worked example, "with dark energy included, the real horizon is larger still" | Not in L8. | Claim stated. | True (ΛCDM particle horizon ≈ 14 Gpc ≈ 46 Gly). Fine as stated. |

No error-level differences found. Definition (present proper/physical distance, limited only by c; rulers moving with the local average matter), the naive-ct₀ discussion, the integral, the cancellation of b, the factor-3 explanation, and H = 2/(3t) all match the transcript.

## Arithmetic and answer checks
- Integral: ∫₀^{t₀} t^(−2/3) dt = 3t₀^(1/3); × b t₀^(2/3) × c/b = 3ct₀. With t₀ = (2/3)H₀⁻¹: 3ct₀ = 2c/H₀. Correct.
- Plot, light ray: in units c = 1, t₀ = 1, b = 1, the source sits at comoving x = 3. Light position x(t) = 3 − 3t^(1/3) (page states this). Physical distance a·x = t^(2/3)(3 − 3t^(1/3)) = 3t^(2/3) − 3t. Correct.
- Turnaround: d/dt = 2t^(−1/3) − 3 = 0 ⇒ t^(1/3) = 2/3 ⇒ t = 8/27 = 0.2963. Maximum = 3·(4/9) − 3·(8/27) = 4/3 − 8/9 = 4/9 = 0.4444. Point (0.2963, 0.4444) correct.
- Plot, source: 3t^(2/3), reaches 3 at t = 1, matching the "3ct₀ today" point. Range [0, 3.2] contains both curves. Ray is 0 at t = 0 and t = 1, as it must be.
- Worked example: c/H₀ = 299 792.458/67.3 = 4454.6 Mpc ≈ 4450 Mpc. 2c/H₀ = 8909 Mpc = 8.9 Gpc = 29.06 Gly ≈ 29 Gly. Model age (2/3)H₀⁻¹ = (2/3)(977.8/67.3) Gyr = 9.69 Gyr ≈ 9.7 Gyr; ct₀ ≈ 9.7 Gly; 3 × 9.69 = 29.06 Gly, consistent. Statement that Guth gives no number is correct (transcript quotes none for the horizon).
- Student Q&A (p. 22), "has it moved three times its original distance?": Guth says no, it was at zero distance when the light left; the light gets further away and comes back. Page matches (it says "essentially zero", fine).
- Student Q&A (p. 22), "is > ct₀ proof that space expands?": Guth says no; objects moving through fixed space would also give > ct; expanding space is the easiest picture but has no absolute definition. Quiz Q4 answer and explanation match.
- Quiz Q1 (answer 1, present physical distance limited only by c): correct.
- Quiz Q2 (answer 2, 3ct₀): correct; explanation correct.
- Quiz Q3 (answer 1, light covered much of its path early and source receded): correct; matches Guth p. 19 and p. 17.
- Quiz Q4 (answer 1, No): correct.
- Flashcards: all three correct.

## Coverage and order
- Page follows the transcript order: motivation/sailing analogy (p. 16) → definition (pp. 16-17) → naive ct₀ (p. 17) → coordinate speed and integral (pp. 17-18) → evaluation and b cancellation (p. 19) → 2c/H₀ (pp. 19-20) → singularity / ε argument (pp. 20-21) → student Q&A (pp. 21-22). The page moves the "three times its distance" Q&A up next to its own plot and places the ε discussion after the worked example; harmless reordering.
- Left out: Guth's aside on not using the same symbol for integration variable and limit (p. 18); the first student question "why present distance if we see them as they were?" and Guth's "figure of merit" answer (p. 21). Optional to add the latter; it is a natural question.
- Added: the photon-path plot, the numerical worked example, the dark-energy remark, the horizon-problem pointer. All correct and not attributed to MIT.

## Licensing
- No text copied verbatim beyond standard terminology ("limited only by the speed of light" is a short definitional phrase). Sailing analogy is paraphrased. Worked example and plot are original.
- No figures from MIT reused; Lecture 9 slide 2 is cited, not reproduced. No "All rights reserved" or third-party ("Courtesy of") material involved. No OpenStax/LibreTexts material.

## Notes
- The OCW URLs in the frontmatter were not fetched; the review relies on local copies of the transcript and Lecture 9 slides. Whether the transcript PDF URL corresponds exactly to t08.txt is assumed, not verified.
- notes-L8.md was checked against the transcript; its horizon summary (pp. 16-22) and its ε^(1/3) remark agree with my reading.

## Resolution (2026-11-14, by the page author)
- The evaluated chain 3ct₀ = 2c/H₀ now cites the Lecture 8 transcript pp. 19–20, with the result noted as summarised on Lecture 9 slide 2.
- Page numbers added to the first two formulas (pp. 17, 18).
- Added the "why present distance?" question and Guth's "figure of merit" answer.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
