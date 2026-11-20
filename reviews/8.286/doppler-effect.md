---
page: content/year-4/8.286/doppler-effect.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-3-the-doppler-effect-and-special-relativity/ (fetched only to find its links. It is the video/lecture page, not a transcript. The transcript PDF it links to is 97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf (read in full via a local copy, t03.txt. The video ID tJ2AJJMcQXs in the transcript header matches this URL.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec03/ (read via a local copy, l03.pdf. The text layer is almost empty, so all 6 pages were rendered and read as images: title slide plus slides 1–21. The URL returns HTTP 200; its contents were not compared byte for byte.)
  - Third-party notes file notes-L3.md (used only as a guide; every claim was checked against the transcript and rendered slides)
verdict: needs-changes
---

# Review: The Doppler effect and special relativity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Frontmatter `source.readings[1]` ("8.286 Lecture 3 transcript") | OCW's transcript is a separate PDF: `https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf` | The "transcript" URL is the same as `source.url`, which is the lecture/video resource page. That page links to the transcript but is not the transcript. | Replace it with the PDF URL on the left. Every `cite="reading2"` currently points to the wrong document. |
| 2 | error | Formula "Sound, source moving", `cite="reading1" at="slides 1–5"` | Slides 1–5 hold only the frame diagrams (1)–(4) and the label Δℓ = vΔt_S (yellow box on slides 3–5). The equation Δt_O = Δt_S + vΔt_S/u and the ratio 1 + v/u were written on the blackboard (transcript pp. 1–2). | Cites slides 1–5 for the equation. | Cite the transcript (reading2) at pp. 1–2 for the equation, or write `at="slides 1–5 (diagrams); equation: transcript p. 2"`. |
| 3 | error | Formula "Sound, observer moving", `cite="reading1" at="slides 6–10"` | Slides 6–10 hold only diagrams (1′)–(4′) and Δℓ = vΔt_O (yellow box on slide 10). The equation, its solution and z = (v/u)/(1 − v/u) are on the blackboard (transcript pp. 3–4). | Cites slides 6–10 for the equation. | Cite the transcript, pp. 3–4. |
| 4 | error | Formula "Relativistic Doppler shift", `cite="reading1" at="slides 12–18"` | Slides 12–18 show only the modified diagrams: slide 14 has Δℓ = γvΔt_S with vΔt_S crossed out, and slides 17–18 have Δℓ = vΔt′, the Δt′ caption and Δt_O = Δt′/γ. The result √((1+β)/(1−β)) appears on no slide. It is derived on the blackboard (transcript pp. 15–19). | Cites slides 12–18 for the final formula. | Cite the transcript, pp. 15–19, and keep slides 14 and 18 as the source for the modified Δℓ and Δt_O = Δt′/γ. |
| 5 | warning | Formula "Definition of redshift", `cite="reading2"` with no `at` | Defined orally/on the blackboard, transcript p. 2 ("astronomers take out the one"). The correct source document is the transcript, but see #1. | No location given. | Add `at="p. 2"` once the URL is fixed. |
| 6 | warning | Formula "Time dilation", `\Delta t_\text{moving} = \gamma\,\Delta t_\text{rest}` (slide 11) | Slide 11 gives the statement in words, γ ≡ 1/√(1−β²) and β ≡ v/c (eq. 1.10). It has no Δt equation. | Uses the labels "moving" and "rest", which can be read either way. If Δt_moving is taken as the time shown on the moving clock, the equation is backwards. | Label the two times by what they measure, e.g. Δt_frame = γ Δt_clock ("time in your frame for one tick of the moving clock"), or give only γ and the words, as the slide does. Note that the Δt form is the page's own. |
| 7 | warning | WorkedExample "A passing siren", step "Compare": "Both drop the pitch by about a whole tone" | (not in MIT) | 440 → 405 Hz is a ratio of 1.0875 ≈ 1.45 semitones, and 440 → 402 Hz is 1.0958 ≈ 1.58 semitones. A whole tone is 2 semitones (ratio 1.122). | Change it to "about a semitone and a half" or "by roughly 9%". |
| 8 | info | "Light has no medium" section | Guth gives the "source moving and observer moving must agree" argument after time dilation, at the start of the relativistic calculation (transcript p. 12). | Gives it before time dilation. | Fine as a teaching choice. No change needed. |
| 9 | info | "Einstein's insight in 1905" | Guth gives no year. He says the ether view was held "in 1904" and that Einstein changed the frame transformations. He names the Lorentz transformations but does not write them. | 1905, ether "for decades", Lorentz transformations named. | Historically correct (special relativity paper, 1905). The page does not suggest that Einstein invented the transformations, which is good, since Lorentz published them in 1904. No change needed. |
| 10 | info | "In the 1860s Maxwell completed the equations" | Matches: "in the 1860s, Maxwell invented ... or completed them" (transcript p. 7). | Same. | None. |
| 11 | info | Callout and worked-example step "A warning for cosmology" | Not part of Lecture 3. | Says redshift is 1 + z = a(t_O)/a(t_S) and that the SR Doppler formula is the special case of a universe without gravity. | Correct: an empty (Milne) universe reproduces the SR Doppler formula exactly. The linked page `cosmological-redshift.mdx` exists. Consider a note that this is a forward reference to later lectures. |

## Arithmetic and answer checks
- Siren (a): 30/343 = 0.08746, so 1 + z = 1.0875 and f = 440/1.0875 = 404.6 ≈ 405 Hz. Correct.
- Siren (b): 1 − 30/343 = 0.91254, so 1 + z = 1.0958 and f = 440 × 0.91254 = 401.5 ≈ 402 Hz. Correct. The "whole tone" wording is wrong (#7).
- Second-order difference (v/u)²/(1 − v/u): with v/u = 10⁻³ it is 1.001 × 10⁻⁶, "about one part in a million". This matches Guth (transcript p. 5).
- Hydrogen line: 662.9/656.3 = 1.01006, so z = 0.0101 and v ≈ 0.01006 × 299 792 km/s ≈ 3015 km/s ≈ 3000 km/s. Correct.
- z = 1: (1 + z)² = 4 = (1 + β)/(1 − β), so β = 3/5. Correct. Quiz Q4: √(1.6/0.4) − 1 = 1. Correct.
- Small-β expansion: √((1+β)/(1−β)) = 1 + β + β²/2 + O(β³), so z ≈ β + β²/2. This lies between β (source moving) and β + β² + … (observer moving). Correct. This is the page's own result, not Guth's.
- Relativistic derivations: γ(1 + β) = √((1+β)/(1−β)) and (1/γ)/(1 − β) = √((1+β)/(1−β)). Both correct and the same as transcript pp. 15–19. Δℓ = γvΔt_S matches slide 14, and Δt_O = Δt′/γ matches slide 18.
- Plot: the point (0.6, 1) lies on the light curve. At b = 0.95 the light curve reaches z = 5.24, which is inside range [0, 6]. The observer-moving sound curve reaches 19, so it is clipped. That is acceptable, but readers will see it leave the frame.
- Quiz answers are 0-indexed, as on other pages (e.g. `answer: 0` in 8.01). Q1 index 1 (0.1): correct. Q2 index 1: correct, and the explanation (difference at order (v/u)²) is right. Q3 index 1: correct. Q4 index 1 (z = 1): correct. Q5 index 3 (conservation of energy): correct, and the "dynamics later" explanation matches transcript pp. 22 and 26–27.
- Flashcards: all five are correct.
- Simultaneity: the trailing clock reads later by βℓ₀/c, which matches slide 21. The transcript's spoken "beta times l sub 0 times c" is a slip, and the page correctly does not repeat it. Contraction (along the motion by γ, unchanged across it) matches slide 20.

## Coverage and order
- Order follows MIT: sound with source moving → definition of z → sound with observer moving → second-order comparison → SR background (Maxwell, ether, Einstein, Lorentz transformations) → time dilation and the meaning of "appear" → relativistic Doppler (source, then observer) → accelerating and ideal clocks → the three kinematic effects and the mutual-slowing paradox. The only change is #8.
- MIT content the page leaves out (all minor):
  - The Galilean-relativity Q&A. The page does keep its point that "the air is a real frame".
  - The v > u Q&A (an observer moving faster than the wave never receives it).
  - Galileo and the moving-Earth argument.
  - The spaceship chasing light at c/2.
  - The Brian Greene / PBS aside. Its physics point, that an approaching clock is seen blueshifted (running fast), would fit well next to "what appears means".
  - Pure time dilation when the clock's velocity is perpendicular to the photon direction.
  - GPS.
  - The factor-2 clock example in the paradox discussion.
- Additions not in MIT: the siren example, the hydrogen-line example, the z = 1 example, the small-β expansion, the plot, and the cosmology warning/callout. All are original.

## Licensing
- The slides carry no "©", "All rights reserved" or "Courtesy of" notices and contain no third-party images. The transcript carries the standard OCW Creative Commons notice.
- No verbatim copying found. Slide 11, 20 and 21 statements are paraphrased. Short quoted terms ("appear", "ideal clock", "kinematic") are standard terminology.
- Worked examples are original, not taken from MIT.
- No OpenStax or LibreTexts material.

## Notes
- The structured notes file (notes-L3.md) was checked against the transcript and the rendered slides, and its slide numbering is accurate (title slide unnumbered, then 1–21).
- The page correctly avoids the transcript slips: Δℓ/v for Δℓ/u, (1 − u/v)⁻¹, "the source has moved" for the observer, and βℓ₀c.
- Errors #2–#4 have one cause: the page treats the slides as the source of the equations, but in this lecture the slides hold only the diagrams and the equations were written on the blackboard. Once #1 is fixed, citing the transcript with page numbers fixes all three.
- `references: {}` is empty. That is acceptable because the readings carry the citations.

## Resolution (2026-11-14, by the page author)
- Error 1 fixed: reading2 now links the Lecture 3 transcript PDF.
- Errors 2–4 fixed: the sound and relativistic Doppler formulas now cite the transcript pages where they were derived on the board, with the slide diagrams named separately (slides 14 and 18 for the Δℓ and Δt′/γ steps).
- Time-dilation labels changed to Δt_frame = γ Δt_clock with a sentence defining them.
- "Whole tone" corrected to "about a semitone and a half"; redshift definition now has a page reference.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
