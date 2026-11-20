---
page: content/year-4/8.286/eternal-inflation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf (read: transcript, pp. 23–29 compared in full; page numbers = printed footer)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec01/ (read: slides 16–21 compared in full, slides 1–15 checked for notices)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-1-inflationary-cosmology-is-our-universe-part-of-a-multiverse/ (read, lecture page)
verdict: pass-with-notes
---

# Review: Eternal inflation, dark energy and the landscape

The page has no `<Formula>` blocks, so there are no equation citations to check. I checked every claim in the text against transcript pp. 23–29 and slides 17–21. I found no physics errors, no wrong numbers and no licence problems.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot, `yLabel` | (illustration, not from MIT) | y-axis is "log₂ (inflating volume / starting volume)", but the dashed curve `-x` is log₂ of the *probability/fraction* still inflating at one place, not a volume ratio | Relabel the axis to cover both curves, e.g. "log₂ (factor relative to start)", or say in the caption that the dashed curve is log₂ of the fraction |
| 2 | info | "Dark energy: inflation today" | Slide 18: "SIMPLEST EXPLANATION: Dark energy = vacuum energy, also known as a cosmological constant." Slide 18 also says that within GR the repulsion requires negative pressure | Page says "most plausible candidate is vacuum energy" and mentions negative pressure, but not "cosmological constant" | Optional: add "also known as a cosmological constant". It would tie in with the Lecture 18 `leadsTo` |
| 3 | info | "Why can nothing weigh something?" | Transcript p. 27: "If you calculate the fluctuations of the electron field, that turns out to be negative" | "fermion fields such as the electron's contribute negative energy" (also in the quiz Q4 explanation) | Generalising to fermions is correct physics, but Guth names only the electron field. Optional: "fermion fields (Guth's example is the electron)" |
| 4 | info | "Why only in the last 5 billion years?" | Transcript p. 26: matter density falls "like one over the cube of the volume" (a slip: density ∝ 1/volume ∝ 1/a³) | Page says only "ordinary matter thins out", so it does not repeat the slip | None needed. You may add "[density ∝ 1/a³; Guth says 'cube of the volume']" if you state the scaling |
| 5 | info | "Eternal inflation", first paragraph | Transcript p. 24: probability "drops by a factor of two every doubling, every half life" (a slip of the tongue, "doubling" for half-life) | "halving every half-life" | Correct as written; no change |
| 6 | info | "The landscape of string theory" | Transcript p. 28: "many string theorists", "a little more than 10 years ago"; slide 20: "most string theorists", "within the past 10 years or so" | "many converged … a little more than ten years before this lecture" | Matches the transcript; fine |

## Arithmetic and answer checks
- Plot model: lengths double once per doubling time, so volume grows ×2³ per doubling time. Over one half-life (k doubling times) the inflating volume grows ×2^{3k}·½ = 2^{3k−1}. log₂ after x half-lives is (3k−1)x, which matches `expr: "(3*k - 1)*x"`. Dashed curve: log₂ of the fraction is −x, which is correct. Growth condition k > 1/3 is correct. The caption describes the formula correctly and says clearly that the plot is not from the lecture.
- Slider k ∈ [0.1, 5]: the slope ranges from −0.7 to 14. At k = 5 the curve leaves the y-range [−6, 30] at x ≈ 2.1, which is fine because the plot clips. "Real models have k far larger than the slider allows" is consistent with Guth's "vastly faster" (p. 24) and slide 17.
- Worked example: (2³)^100 = 2^300, halved gives 2^299. 299·log₁₀2 = 90.008, so 2^299 ≈ 1.0 × 10^90, and "≈ 10^90" is correct. Threshold 3k − 1 > 0 ⇒ k > 1/3 is correct. The example is original: MIT has no numerical example here.
- The closing claim "Inflation that lasts long enough to solve the cosmological problems has half-lives of many doubling times, so it is almost always eternal" is the page's own reasoning, not stated in this form in Lecture 1. It is consistent with "in any successful version of inflation, the exponential expansion is faster than the exponential decay" (slide 17; transcript p. 24, "any reasonable inflationary model"). Uncertain only in wording; consider attributing it ("Guth: in any successful model …").
- Quiz Q1 (answer 1), Q2 (1), Q3 (1), Q4 (1), Q5 (1): all marked answers are correct and the explanations agree with pp. 24–29. Q3 matches p. 26. Q4 matches p. 27 (Planck length, 120 orders of magnitude, negative electron-field contribution). Q5 matches p. 28 and slide 20 (10^500 metastable long-lived states).
- Flashcards: all four are correct. "The nightmare of dark energy" matches the title of slide 19.
- Other numbers: 1998, two groups, about 5 of 14 billion years (p. 25, slide 18), Planck length about 10⁻³³ cm (p. 27, slide 19), 120 orders of magnitude (p. 27, slide 19), 10^500 (p. 28, slide 20). All match.

## Coverage and order
- The page follows the order of transcript pp. 23–29 / slides 17–21: eternal inflation and pocket universes, then the multiverse (pp. 23–25), dark energy (p. 25), the student question on why acceleration began 5 billion years ago (pp. 25–26), why nothing weighs something and the divergence and 120 orders (pp. 26–27), and finally the landscape (pp. 28–29).
- Left out on this page: the p. 23 student question on whether inflation changed after dark energy was found. inflation-overview.mdx covers it, so the split between the two pages is clean. Slide 16 (Planck 2013 spectrum, image removed for copyright) is also covered there.
- Nothing is added beyond the lecture apart from the clearly labelled illustration and the worked example.
- "Guth ran out of time here; the next lecture continues": the transcript (p. 28: "I am not going to be able to finish this lecture"; p. 29: "next time on Tuesday") and slide 21 ("To Be Continued") support this.
- "a subject the course returns to at the very end" matches p. 23 ("we'll come back to it at the very end of the class").

## Licensing
- The page uses no images. The plot is generated from a formula.
- The "Image courtesy of IPAC" images (slides 1 and ~9–10) are not used. The graph on slides 14–15, "© Science. All rights reserved" (Tegmark, for Guth & Kaiser 2005), is not used and not described here. The image removed from slide 16 is not used.
- No OpenStax or LibreTexts material.
- Wording is paraphrased throughout. Closest match: "the half that remains is vastly larger than what you started with" against transcript p. 24, "the half that remains will be vastly larger than what you started with". This is a single short clause; acceptable, but you could reword it. Short phrases such as "jumble of fluctuations", "inflating backbone" and "Why can nothing weigh something?" are standard or short and acceptable.

## Notes
- leadsTo Lecture 18 ("vacuum energy, negative pressure and the accelerating universe, worked out with the Friedmann equations") is correct. cosmological-constant.mdx (lecture 18) covers the 1998 discovery, negative pressure and the acceleration equation with ρ_vac.
- leadsTo Lecture 20 ("why QFT overestimates the vacuum energy by about 120 orders of magnitude") is correct. vacuum-energy-puzzle.mdx (lecture 20) covers the Planck cutoff and the 120 orders (plus the supersymmetry reduction to about 50).
- Suggestion (info): the direct continuation is Lecture 2 (anthropic-multiverse.mdx), which prev/next already handles. A `leadsTo` for Lecture 2, the anthropic selection of a small vacuum energy, would still make the "possible answer" cliff-hanger explicit. Optional.
- The cosmology content here is the lecture itself, so the absence of a `Callout kind="cosmology"` is appropriate.
- Post-2013 facts: none are introduced. "A little more than ten years before this lecture" is correctly dated to the lecture (2013).

## Resolution (2026-11-14, by the page author)

- Warning: the y-axis label is now generic, the dashed curve is labelled as the chance a given spot is still inflating, and the caption explains both curves.
- Info: added "also known as a cosmological constant"; the negative contribution is now attributed to the electron field as Guth says; the p. 24 clause is reworded; the worked-example conclusion is attributed to Guth's "in any successful version of inflation"; added a leadsTo to Lecture 2.
