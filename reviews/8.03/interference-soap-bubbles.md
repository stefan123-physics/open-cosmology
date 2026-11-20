---
page: content/year-2/8.03/interference-soap-bubbles.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-20/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec20/ (read: notes PDF, 6 pages; all 6 rendered pages read as images, since the text layer is unreliable; p. 6 is the OCW credit page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ff2ee1bbc2ed017f3e5bcff21669811d_VkbtIDSHfSc.pdf (read: transcript, 21 pages of text, PDF page = page; p. 21 also holds the separate demonstration recording)
verdict: pass-with-notes
---

# Review: Interference and soap bubbles

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The soap film", step 3 (and calcs `second-reflection`, cited to notes p. 3) | Notes p. 3 figure: "4%·96%·96% = 3.8%" | "4% × 96% × 96% ≈ 3.7%" | The page's 3.7% is correct (0.04 × 0.96² = 0.0369). The notes' 3.8% is a slip, so the page differs from its cited source without saying so. Add a short bracket, e.g. "(the notes round it to 3.8%)", following writing rule 4. |
| 2 | warning | "Thin: d ≈ 100 nm" paragraph | Notes p. 4 sketch marks λ_violet = 400 nm and λ_red ~650 under a "Visible" brace; Lee (transcript p. 18): "Red color is actually roughly 650 nanometer" | "Visible light runs from about 400 nm (violet) to about 650 nm (red)" | MIT gives 650 nm as a typical red, not the end of the visible range, which is usually put at about 700 nm. Suggested wording: "from about 400 nm (violet) to red light at about 650 nm and beyond". The conclusion (only one maximum is visible) does not change. |
| 3 | info | Same paragraph, "here reddish" | Lee: "You are going to see red" (p. 18) | "the film looks coloured, here reddish" | 600 nm is usually called orange (orange-red). "Reddish" follows Lee and is acceptable; "orange-red" would match the page's own worked example (638 nm, "orange-red") better. |
| 4 | info | "Thick" paragraph, "(Lee says "5000" for 500, p. 19.)" | Transcript p. 19: "Now, 5000 will give you 600.6 nanometer." | Attributes the slip to Lee | I could only check the transcript, not the video, so I cannot tell whether Lee said it or the transcriber made the error. "(the transcript has "5000" for 500, p. 19)" would be safer. The citation is correct. |
| 5 | info | Opening paragraph | Transcript p. 3: Lee dips two sticks in soap water and opens them ("I will try to open it to see if I can create a bubble"); the 50% success rate is for making "this size of bubble" | "Lee blows one between two sticks, succeeding about half the time" | He does not blow. Use "makes one between two sticks". |
| 6 | info | Notes' average-intensity line | Notes p. 1 write "\|E\|² = cnε₀[...]" for the averaged result | The page gives ⟨I⟩ and notes the mislabel in brackets | Correct, and handled as rule 4 requires. No change needed. |
| 7 | info | Frontmatter `summary` | Notes p. 1 plot axis: ⟨I⟩/(cnε₀) | "largest, ½(A₁ + A₂)², ... smallest, ½(A₁ − A₂)²" right after "⟨I⟩ = cnε₀[...]" | The cnε₀ factor is dropped without saying so. Add "in units of cnε₀", as the body does. |

## Formula and citation checks
- "Two waves" (notes p. 1): matches the notes exactly; the transcript pp. 3–4 match too. Correct.
- "Intensity" (notes p. 1): matches |S| = (1/μ₀)|E×B| = (n/μ₀c)|E|² = cnε₀|E|² on notes p. 1. I checked the algebra: n/(μ₀c) = nε₀c, because c² = 1/(μ₀ε₀). Transcript pp. 4–5 correct.
- Cross-term identity: 2cos a cos b = cos(a+b) + cos(a−b), which gives A₁A₂[cos(2ωt − 2kz + φ₁ + φ₂) + cos(φ₁ − φ₂)]. This matches the notes' underbrace on p. 1 and the transcript p. 6.
- "Average intensity" (notes p. 1): correct. The calcs identity check passes numerically. Transcript pp. 5–7 correct.
- Constructive and destructive, ½(A₁ ± A₂)² (notes pp. 1–2, plot on p. 1, A₁ = A₂ cancelling on p. 2; transcript pp. 7–9): correct.
- Complex-plane picture (notes p. 2; transcript pp. 9–10): correct, including "ωt − kz = 0 at an instant" (p. 9).
- "Normal-incidence coefficients" (notes p. 2): correct, and the same as the prerequisite page em-waves-in-matter-brewster. Transcript p. 11 correct.
- Sign rules (notes p. 2; transcript pp. 11–12): correct, including "n₁ = n₂: no reflection even between different materials" (p. 12) and "T always positive" (p. 11). The notes p. 2 equate n₁ < n₂ with v₁ > v₂; the page's "entering a slower medium" says the same thing.
- "Air to soap water" (notes p. 2): the formula reproduces the notes' two lines exactly. Transcript pp. 12–14: the values are on p. 13 and the 100/4/96% picture is on p. 14. Correct.
- "Phase difference in a soap film" (notes p. 3): correct. The transcript pp. 16–17 confirm both the student supplying n₂ (p. 16) and the π from the flip.
- δ = 2Nπ and (2N + 1)π (notes p. 4; transcript p. 17): correct.
- d = (2N − 1)λ/4n₂ and d = Nλ/2n₂ (notes p. 4, items 2–3): derived again and correct. Lee states only the constructive one aloud (p. 17); the destructive one comes from the notes, and the citation to notes p. 4 covers it.
- "Brightest wavelengths" λ_max = 4dn₂/(2N − 1) (notes p. 4; transcript p. 18): correct.
- The thin and thick cases cite notes pp. 4–5 and transcript pp. 18–20, and the summary of conclusions cites notes p. 5 and transcript p. 20. All correct.
- Demonstration (transcript pp. 20–21) and "A separate recording shows the same (p. 21)": correct. The in-class demonstration ends early on p. 21; the separately recorded demonstration ("So hello, everybody...") follows on the same page. The page keeps the two apart correctly. The description (white at first, gravity thickens the bottom and thins the top, the image is upside down, rainbow-like bands) matches the transcript.

## Arithmetic and answer checks
- R = (1 − 1.5)/2.5 = −0.2; T = 2/2.5 = 0.8; R² = 0.04; 1.5 × 0.64 = 0.96. Correct.
- 0.04 × 0.96 × 0.96 = 0.03686, which is about 3.7%. The page is right and the notes' 3.8% is the slip (see item 1).
- Thin case: 4 × 100 × 1.5 = 600 nm; 600/1, 600/3, 600/5 = 600, 200, 120 nm. Correct.
- Thick case: 600 000/999 = 600.60, 600 000/1001 = 599.40, 600 000/1003 = 598.21 nm. Correct. The spacing is about 1.2 nm, so "a nanometre or so" in quiz 4 is fair. Between 400 and 650 nm there are about 290 maxima, so "hundreds" is correct.
- Constructive check: with λ = 4dn₂/(2N − 1), δ = 4πdn₂/λ + π = (2N − 1)π + π = 2Nπ. Correct.
- Worked example (a): ½(1.5)² = 1.125, ½(0.5)² = 0.125, ratio 9. Correct. It is original: MIT has no numerical example with unequal amplitudes.
- Worked example (b): 4 × 120 × 1.33 = 638.4 nm (N = 1), 638.4/3 = 212.8 nm (N = 2), 2 × 120 × 1.33 = 319.2 nm (the first dark wavelength; the next is 159.6 nm). Correct. I also checked the claim that the film looks orange-red using the two-beam reflectance ∝ 1 − cos(4πdn₂/λ): it peaks at 638 nm and falls to about 0.35 of the peak at 400 nm. The colour description is reasonable. For a symmetric air–film–air layer, the reflectance is exactly zero at 2dn₂ = Nλ even with all multiple reflections included, so "not at all" is exact. The example is original: MIT uses n = 1.5 and d = 100 nm or 100 μm.
- Quiz 1: in-phase equal amplitudes give twice the amplitude and 4I. Answer index 2 ("4I") is correct.
- Quiz 2: index 1 (sign flip, 4%) is correct.
- Quiz 3: index 1 (δ = π, cancellation) is correct. The explanation is right.
- Quiz 4: index 1 is correct.
- Flashcards: all three agree with the notes and are correct.
- `npm run calc:test -- -k interference-soap`: 15 passed.

## Coverage and order
- The page follows the lecture's order: the demonstration bubble (p. 3), interference of two waves (pp. 3–9), the complex-plane picture (pp. 9–10), the vote on thickness (p. 10), the reflection and transmission reminder with signs (pp. 11–12), air to soap (pp. 12–14), the two-surface film (pp. 14–16), the phase difference (pp. 16–17), the conclusions (pp. 17–20) and the closing demonstration (pp. 20–21). The notes have the same order.
- Left out: Lee's opening course overview and his review of polarizers, sky polarization and Brewster's angle (transcript pp. 1–2). That material belongs to the previous lectures, so leaving it out is reasonable. Lee mentions on p. 1 that the course may reach gravitational waves; the page does not.
- Left out: Lee's remark that the multiply reflected light is "trapped forever", followed by the 4% × 96% × 4% bookkeeping of the next bounce (p. 15). The page summarizes it as "bounces back and forth inside 'forever', too faint to matter", which is enough.
- Added: the bracketed corrections (notes' |E|² label, "5000") and the original worked example. Nothing else is added.
- Not repeated: Lee's slips on p. 14 ("going into the bubble" for going out of the film, and "n2 minus n2"). Correct.

## Licensing
- Neither the notes, the transcript nor the OCW page has a "rights reserved" or "Courtesy of" notice. The notes' hand-drawn figures carry no third-party credit, and the page reproduces none of them anyway.
- I found no verbatim copying. The phrasing is rewritten throughout. The only quoted word is "forever", which is a fair short quotation. The vote's comparison objects (pin head, hair, virus) come from Lee's wording but are standard comparisons.
- No OpenStax or LibreTexts material.

## Forward links
- `leadsTo` 8.03 Lecture 21: "Interference from many sources: phased-array radar, and interference of single electrons". This matches the Lecture 21 page in the repo (phased-radar-electron-interference, lecture 21). I did not read the Lecture 21 MIT sources for this review.
- There is no `Callout kind="cosmology"`, so no cosmology claim needed checking. A connection could be added (for example, thin-film anti-reflection coatings on telescope optics), but the page does not need one.

## Notes
- Internal links (/courses/8-03/em-waves-in-matter-brewster and /courses/8-03/electromagnetic-waves) point to existing pages.
- The page has no em dashes.
- Uncertain: whether "5000" (item 4) is Lee's slip or a transcription error. I did not compare the video.

## Resolution (2026-11-16, by the page author)

1. Added "(the notes round it to 3.8%)" after the 3.7%.
2. Visible light now "from about 400 nm to about 700 nm, with red around 650 nm"; the 600 nm film is called orange-red.
Info: "the transcript has '5000'"; the bubble-making description follows the transcript. The summary's missing cnε₀ factor is not changed (it describes the shape). Others not changed.
