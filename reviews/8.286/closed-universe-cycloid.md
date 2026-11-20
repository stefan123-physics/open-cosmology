---
page: content/year-4/8.286/closed-universe-cycloid.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/267c7e3266416a08c2d8445fb5817888_U9n-Y_ZC-2M.pdf (read, local copy of the Lecture 9 transcript, pp. 1-17 checked line by line)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec09/ (read, local copy of the Lecture 9 slides; slides 2-7 rendered and checked visually)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read, local copy of the Lecture 8 transcript; pp. 22-27 checked through the structured notes)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-9-the-dynamics-of-homogeneous-expansion-part-v/ (not fetched; the transcript and slides it links to were read from local copies)
verdict: pass-with-notes
---

# Review: The closed universe as a cycloid

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Lifetime and maximum size" | Both results are worked out on the board, transcript pp. 16-17 (c t_total = 2πα; a_max/√k = 2α at θ = π). Neither is on a slide. | `cite="reading1"` with no `at`, so the reader gets no page locator. All other formulas have one. | Add `at="pp. 16–17"`. |
| 2 | info | Formula "Evolution of a closed universe" (slide 4) | Slide 4 shows only the pair ct = α(θ − sin θ), a/√k = α(1 − cos θ). The range 0 to 2π for θ is spoken (transcript pp. 12-13, 15), not on the slide. | Adds "0 ≤ θ ≤ 2π" inside the formula cited to slide 4. | Fine as it is, or note "range: transcript p. 15". |
| 3 | info | "Solving it", trigonometric substitution | Guth gets √(α² − x²) = α sin θ without commenting on the sign. | Same. | Optional: say that sin θ ≥ 0 holds for 0 ≤ θ ≤ π (the expanding phase), and that the collapsing half follows by continuing the same curve. Neither MIT nor the page says this. |
| 4 | info | Plot, the parametric curve | Slide 5 (Guth's own diagram) shows the rolling circle and the cycloid. | An original Plotly plot. The parametric range [0, 6.2832] is 0 to 2π. With α_max = 2, 2πα = 12.57 < 13 (domain) and 2α = 4 < 4.4 (y range), so the whole cycloid always fits. The dashed curve leaves the top of the frame for larger ct, which is expected. | None. |
| 5 | info | The "Why" step of the worked example | Not in Lecture 9. Guth does not compare the early closed solution with the flat one. | Explains early flatness: curvature ∝ 1/a² versus density ∝ 1/a³. | None. The physics is correct, and it is the page's own example. |

All other formulas and slide attributions match the source:
- Friedmann equation + ρa³ = const: slide 2. Matches.
- ã = a/√k, t̃ = ct ("both with units of distance"), (dã/dt̃)² = 2α/ã − 1, α = (4π/3)Gρã³/c²: slide 2. Matches. Rederived: multiplying the Friedmann equation by a²/(kc²) gives exactly this.
- Separated integral t̃_f = ∫₀^{ã_f} ã dã/√(2αã − ã²): slide 3. Matches.
- Parametric solution: slide 4. Matches (confirmed on the rendered slide).

## Arithmetic and answer checks
- **Convergence remark:** near ã = 0 the integrand ≈ ã/√(2αã) = √(ã/2α) → 0. This matches Guth's answer to the student question (transcript pp. 7-8: "manifestly convergent"). Correct.
- **Completing the square:** α² − (ã − α)² = 2αã − ã². Correct. With x = ã − α, the limits run from −α to ã_f − α (transcript p. 9).
- **Trigonometric substitution:** x = −α cos θ gives dx = α sin θ dθ and x + α = α(1 − cos θ). With √(α² − x²) = α sin θ, the integrand becomes α(1 − cos θ) dθ. Integrating gives α(θ − sin θ). Correct. This matches the board after students corrected it (transcript pp. 10-11).
- **Upper limit:** ã_f − α = −α cos θ_f, so ã_f = α(1 − cos θ_f). Correct.
- **The page says the lecture's integral was "first written down wrongly":** accurate. On the board the integrand was missing an α, and ∫cos θ was written as cos θ instead of sin θ. Students caught both (transcript pp. 10-11).
- **"As good as it gets" and the numerical inversion:** transcript p. 12. Accurate.
- **Rolling wheel:** the horizontal position is αθ − α sin θ and the vertical position is α − α cos θ. This matches transcript pp. 14-15 and slide 5. (Guth misspoke on p. 15, "minus alpha theta", where he meant α sin θ; the page correctly does not repeat this.)
- **Development angle:** the name is from transcript p. 15. Guth says θ always runs from 0 to 2π. Correct.
- **k set to 1 via the notch:** transcript pp. 15-16. Guth says k has units of 1/notch², that one could fix k = 1, and that the solutions then form a one-parameter family in α. Correct.
- **Lifetime:** c t_total = α(2π − sin 2π) = 2πα, so t_total = 2πα/c. The units are a length divided by a speed, which is a time (transcript p. 16). Correct.
- **Maximum size:** a_max/√k = α(1 − cos π) = 2α (transcript p. 17). Correct. A cross-check with L8's a_max = 8πGρa³/(3kc²) gives a_max/√k = 2·(4π/3)Gρã³/c² = 2α. Agrees.
- **Forward claim that a/√k is the radius of curvature:** in Lecture 9, Guth explicitly defers the meaning ("related to the geometry of the closed universe which we'll be discussing later", transcript pp. 16-17). In the later 8.286 geometry lectures, a closed universe is a 3-sphere whose physical radius is a(t)/√k. So the claim is correct and fairly framed as "comes in later lectures". This is judged from course knowledge; no later lecture file was in the source set.
- **Worked example (small θ):** ct ≈ α[θ − (θ − θ³/6)] = αθ³/6 and a/√k ≈ αθ²/2. Then θ = (6ct/α)^{1/3}, so a/√k ≈ (α/2)(6ct/α)^{2/3}. Correct.
  - Extra check: (α/2)(6/α)^{2/3} = (36α/8)^{1/3} = (9α/2)^{1/3}. This equals the exact flat-limit solution of (dã/dt̃)² = 2α/ã, which is ã = (9α/2)^{1/3}(ct)^{2/3}. So the dashed curve really is the flat-shape curve.
- **Quiz:**
  1. "A cycloid". Correct.
  2. "0 to 2π". Correct.
  3. "2πα/c". Correct, and the explanation is right.
  4. The parametric/inversion answer. Correct. Choice 1 ("The integral diverges") is a good distractor given the convergence remark.
- **Flashcards:** all four are correct.

## Coverage and order
- The page follows Lecture 9 in order:
  1. Set-up (transcript pp. 3-5, slides 2-3)
  2. Convergence question (pp. 7-8)
  3. Completing the square and trigonometric substitution (pp. 8-11)
  4. Parametric solution (p. 12, slide 4)
  5. Evolution and cycloid (pp. 12-15, slide 5)
  6. Development angle (p. 15)
  7. Notch argument, lifetime and a_max (pp. 15-17)
- It also correctly says that the set-up starts at the end of Lecture 8 (L8 pp. 22-27).
- **Left out, and covered elsewhere:**
  - The Lecture 8 review on slides 1-2 (flat age, singularity, horizon) is covered by `age-of-the-universe` and `horizon-distance`.
  - The closed-universe age in terms of H and Ω (pp. 17-23, slides 6-7) is covered by `age-closed-universe`.
  - The student questions on gravitational time dilation and on inflation versus t = 0 (pp. 5-7) are omitted. This is reasonable.
- **Added:** the worked small-θ example and the flat-curve overlay. Both are original.

## Licensing
- The Lecture 9 slides carry no "All rights reserved" and no "Courtesy of" notices. The slide 5 diagram is not reproduced: the page uses its own plot.
- No verbatim copying apart from the short attributed phrase "as good as it gets" and the standard terms "development angle" and "cycloid".
- No OpenStax or LibreTexts material.
- The license is CC BY-NC-SA 4.0, consistent with OCW.

## Notes
- No error-level findings.
- The structured notes notes-L8.md and notes-L9.md were spot-checked against the transcript and the slides, and agree where used.
- The OCW HTML landing page was not fetched live. The transcript and slides PDFs were read from local copies.

## Resolution (2026-11-14, by the page author)
- Lifetime / maximum-size formula now cites transcript pp. 16–17.
- Parametric-solution citation notes that the θ range comes from the transcript (p. 15), not slide 4.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
