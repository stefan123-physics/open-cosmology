---
page: content/year-2/8.03/sound-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-11/ (read, saved OCW page: topics "Sound waves, Longitudinal wave, Wave equation, Speed of sound, Adiabatic process"; typed and handwritten notes; Chapters 6 (6.2 to end), 7 and 8 (through 8.2) as reading; in-class demonstrations "Standing Sound Waves in a Glass Tube" and "Helium Balloon")
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec11/ (read: typed notes, 6 pages + OCW back page; text layer garbled, all 6 pages checked as rendered images; printed footer numbers 2–6 match PDF pages)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/e9a488cd6d669dfa29b2f7572c097ee2_RhIh1zw0-BM.pdf (read: transcript, 18 pages; no printed page numbers, so PDF page = page)
verdict: pass-with-notes
---

# Review: Sound waves

All 6 formulas, every page citation in the prose, every number and all quiz and flashcard answers were checked against the notes (rendered pages) and the transcript. I found no wrong physics, no wrong number and no wrong citation of a `<Formula>`. The findings below are about attribution, a vague sentence that hides a slip in the notes, coverage, and the forward links.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Two limits", first sentence | Transcript pp. 1–2 states only R = (V2 − V1)/(V1 + V2) explicitly. τ is named as "the coefficient" of the transmitted wave, but its formula is not given in Lecture 11. It comes from Lecture 10. | "$\tau = 2v_2/(v_1 + v_2)$ (transcript, pp. 1–2)" | Cite τ to Lecture 10 (link the travelling-waves-reflection page), or write "(R: transcript, p. 2; τ from Lecture 10)". |
| 2 | warning | "Helium" paragraph; quiz Q4 explanation; summary frontmatter | Lee (transcript pp. 14–15) and the notes (p. 3, "What have we learned" 1) give only the rise in γ as the reason. Neither mentions density. | Body: "A monatomic gas has a larger γ, so the speed of sound rises" (Lee's reason only). The quiz explanation and the summary add "much less dense", without saying that this is not in the lecture. | The lower density is by far the bigger effect: √(1.2/0.17) ≈ 2.7, against √((5/3)/1.4) ≈ 1.09 for γ. Add a short bracket to the body, for example "(Lee credits the larger γ; the much lower density of helium matters far more: …)", so the body and the quiz agree and the lecture's partial explanation is not repeated without comment (writing rule 4). |
| 3 | warning | End of "Pipes" section: "a pipe driven at one end resonates when the driving frequency matches one of them (notes, p. 6)" | Notes p. 6, "Drive the organ": ψ(0) = 0, ψ(L) = D cos(ω_d t), so A_d = D/sin(k_d L). The notes then write "When k_d = (m − 1/2)π/L ⇒ resonance!". That does not follow: D/sin(k_d L) diverges at k_d = mπ/L (the closed–closed modes), not at (m − ½)π/L. | "matches one of them", without saying which. | Say which modes. From the notes' own setup it is k_d = mπ/L, the closed–closed set, because an end driven with a fixed displacement acts like a closed end. Add a bracket noting the slip in the notes. As written, the sentence cites a page that contains a slip without mentioning it. |
| 4 | info | "Newton's law" paragraph: ρψ̈ = −∂ψ_P/∂x | Notes p. 2 write ρψ̈ = ∂ψ_P/∂x, then "= γP₀ ∂²ψ/∂x²". Two sign slips cancel, so the final wave equation is right. Notes p. 6 also write ψ_P = γP₀ ∂ψ/∂x, without the minus. | The page's signs are correct. It mentions only Lee's board slip. | Optional: add "(the notes drop this minus sign too, p. 2)", because the formula cites notes p. 2. |
| 5 | info | "(Lee's first version on the board lost a minus sign, which a student caught.)" | Transcript pp. 10–11: Lee says himself "I must miss one negative sign somewhere … Where?", and students point to where it goes. | "which a student caught" | Better: "Lee noticed a missing minus sign and a student showed where it belonged." |
| 6 | info | Throughout | Lecturer slips that the page silently corrects: "massive ring" for the free end (p. 2; it must be massless); "alpha plus 1 minus alpha" (p. 11, corrected at once); "atomic gas" for diatomic (pp. 11–12); "speed of light" (p. 12, self-corrected); "If the temperature remain unchanged" before the general formula (p. 12); "0.34 centimeter" for 0.34 m (p. 13). | Correct values throughout; only the 389 m/s slip is flagged. | Fine as it is. The 0.34 cm slip is the only one a reader comparing with the video might notice. A bracket is optional. |
| 7 | info | "The measurement": "a microphone on a rod" | The transcript says only that the microphone is moved along the tube and connected to a scope. OCW calls the demonstration "Standing Sound Waves in a Glass Tube". | "a microphone on a rod" | Uncertain: this may be visible in the video, which was not compared. Otherwise drop "on a rod" or say "glass tube". |
| 8 | info | "Helium": "(on the second try)" | Transcript p. 15: first breath "No? Didn't work. Let me do that again", then "Did you hear any difference? No. (HIGH PITCHED) Any difference? Works?" | "on the second try" | Plausible but ambiguous in the transcript. Acceptable. |
| 9 | info | "Pipes": "with its pressure amplitude reversed" | Transcript p. 16: "The amplitude of the progressing wave changes sign", without saying which amplitude. Lee likely showed this on screen ("which I can show you here"); it is not one of OCW's two listed demonstrations. | Pressure amplitude reversed. | Physically correct (an open end is a node of ψ_P, so pressure flips and displacement does not). The page is more precise than the lecture, which is fine. The page does not call this a demonstration, which is right. |

## Arithmetic and answer checks
- R and τ limits: v₂ → 0 gives R = −1, τ = 0; v₂ → ∞ gives R = 1, τ = 2. Correct.
- (1 + ΔV/V₀)^γ ≈ 1 + γΔV/V₀; ψ_P = −γP₀ΔV/V₀ = −γP₀ ∂ψ/∂x with V₀ = AΔx. Correct (notes pp. 1–2; transcript pp. 7–9).
- α(VdP + PdV) = −PdV ⇒ dP/P = −((α+1)/α) dV/V, γ = (α+1)/α. Correct (notes p. 3). α = 3/2 gives γ = 5/3; α = 5/2 gives γ = 7/5. Correct.
- √(1.4 × 10⁵/1.2) = 341.6 ≈ 342 m/s; √(10⁵/1.2) = 288.7 ≈ 289 m/s. Correct. The transcript (p. 12) says "389 meters per second", so the page's bracket about the slip is right.
- λ = 64 − 30 = 34 cm (three nodes: 64 cm, one passed, 30 cm, as in transcript p. 13); v = 1000 × 0.34 = 340 m/s; (342 − 340)/342 = 0.6%, "within 1%". Correct.
- Worked example (a): √((5/3)(1.0 × 10⁵)/0.17) = 990.1 m/s ≈ 990; 990/342 = 2.9, "almost three times". Correct. The example is original (helium speed is not computed in MIT's material).
- Worked example (b): v/4L = 342/2.0 = 171 Hz; f₁, f₂, f₃ = 171, 513, 855 Hz. Correct. It is in the spirit of the notes' audio-analyser question but uses its own numbers and question. Not copied.
- Pipe modes: closed–closed mπ/L (notes p. 4), closed–open (m − ½)π/L and open–open mπ/L (notes p. 5). Correct.
- Quiz Q1 (answer 1, heat too slow): correct. Q2 (answer 1, √(γP₀/ρ)): correct. Q3 (answer 1, ψ_P = 0 at an open end): correct. Q4 (answer 1): correct; see finding 2 on the explanation.
- Flashcards: all three correct. "Closed end: pressure largest" agrees with transcript p. 17.
- `npm run calc:test -- -k sound-waves`: 19 passed. The calcs file covers every number on the page.

## Formula citations
- "Volume and pressure changes": reading1 p. 1. Correct (notes p. 1, slide-style typed notes; also transcript pp. 5–6).
- "Adiabatic law": reading1 p. 1. Correct.
- "Pressure and displacement": reading1 p. 2. Correct.
- "Wave equation for sound": reading1 p. 2. Correct (the final line; see finding 4 on the intermediate signs).
- "Adiabatic index": reading1 p. 3. Correct (the first law starts at the bottom of p. 2, which the prose cites as pp. 2–3).
- "Measured speed": reading2 p. 13. Correct (the measurement is spoken in the lecture, not in the notes).
- "Pipe modes": reading1 pp. 4–5. Correct.
- Prose citations (transcript pp. 1–18, notes pp. 1–6) were each checked against the page ranges above. Apart from finding 1 (τ), all fit.

## Coverage and order
- The page follows the transcript's order: the two-string limits; harmonic progressing wave; longitudinal waves; setup; Newton vs Laplace; vote; small-vibration expansion; Newton's law and the wave equation; γ from the first law; predictions; glass-tube measurement; why Newton fails; helium; open-end pulse; boundary conditions and the string analogy; pressure profiles. Then the notes' pipe modes.
- Left out from the notes:
  - (a) the audio-analyser example (notes pp. 3–5): a spectrum with peaks near 500, 1500, 2500 and 3500 Hz, and the question of which pipe produced it (closed–open, the odd multiples);
  - (b) the drawings of the first three modes for each pipe (notes p. 5);
  - (c) question (iii), how long until any shape reappears, 2π/ω₁ (notes p. 5);
  - (d) the general normal-mode solution, with k_m and α_m set by the boundary conditions and A_m and β_m by the initial conditions (notes p. 3, "What have we learned" 2);
  - (e) the driven-organ derivation, which the page reduces to one clause (see finding 3).
  
  The worked example (b) partly makes up for (a). Because foundation pages should cover their lecture fully, consider a sentence on (c) and (d), and a short treatment of (e) that gives the correct resonance condition. Severity: warning (incomplete coverage of the notes).
- Added material: the worked example (original) and the density remark on helium (finding 2). Nothing else goes beyond the source.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, the transcript or on the OCW page. The notes fall under OCW's CC BY-NC-SA licence.
- The page reuses no figures and has no diagrams of its own. No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases. The one quotation, "Too bad. Go back to work" (transcript p. 3), is marked as a quote and is short.
- No em dashes on the page.

## Notes
- Forward links. The `leadsTo` to 8.03 Lecture 12 (electromagnetic waves) is correct: transcript p. 1 announces EM waves next, and the 8.03 Lecture 12 page exists.
- The `leadsTo` to 8.286 Lecture 16 is a real link, but its wording is loose (warning). The existing 8.286 Lecture 16 page (black-body-radiation) says that classical equipartition gives every mode kT and fails (Jeans's paradox), and that quantum freeze-out of short-wavelength modes fixes it. So "the degrees of freedom that set γ here set the energy per mode there" overstates the parallel. A fairer "why": "Equipartition and frozen degrees of freedom: the diatomic vibration that does not count towards γ here is the same quantum freeze-out that removes short-wavelength modes from black-body radiation."
- A closer link exists to 8.902 Lecture 13 (linear-perturbations). There, below the Jeans length a density perturbation oscillates as a sound wave, with sound speed c_s for baryons and c/√3 for radiation. Consider adding it to `leadsTo`.
- The page has no `<Callout kind="cosmology">`. AGENTS.md rule 6 asks for one where a real connection exists, and the sound-speed / Jeans-length link is one. Several other 8.03 pages also lack a callout, so this may be a deliberate choice for the course. Flagged as a warning for the author to decide.
- The frontmatter `summary` is a long paragraph, not "one sentence" as the content guide describes. Its content is accurate.
- The video was not compared (owner decision: notes, slides and transcript are enough). Findings 7 and 8 are therefore marked uncertain.

## Resolution (2026-11-16, by the page author)

1. τ is now attributed to the last lecture; only R is cited to transcript pp. 1–2.
2. Added a bracket that the lecture credits only γ for the helium voice, with the two factors (γ about 1.09, density about 2.66; both in calcs).
3. The driven pipe is now described as in the notes' setup, resonating at k_d = mπ/L (closed–closed modes), with the notes' (m − ½)π/L marked as a slip.
4. Not changed: the audio-analyser example and the full normal-mode solution are left to the notes.
5. The 8.286 Lecture 16 "why" now speaks of counting standing waves and frozen-out modes.
Info: the board-slip wording now says Lee noticed and a student showed where the sign went. Others not changed.
