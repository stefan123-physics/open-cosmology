---
page: content/year-2/8.03/phased-radar-electron-interference.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-21/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec21/ (read: typed notes, 11 PDF pages, the last is the OCW credit page; read from rendered page images because the text layer is unreliable)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/5aaf30cf903353461f06049b6bf6c608_mqhO9GT8hD4.pdf (read: transcript, 21 pages; no printed page numbers, so PDF page = page; pp. 20 (second half) to 21 are a separately recorded demonstration)
  - Lecture 22 transcript (read only to check the leadsTo claim about telescope resolution)
verdict: pass-with-notes
---

# Review: Phased radar and single-electron interference

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Sweeping", Formula "Steered array" (`cite="reading1" at="p. 6"`) | Notes p. 6 write the steered phase as δ = (2π/λ) d sin θ − φ·t, with φ a "sweep frequency". The form without t, δ = (2π/λ) d sin θ − φ, is the one Lee gives on the board (transcript, p. 16). | Formula δ = (2π/λ) d sin θ − φ cited to notes p. 6; the next paragraph then says "φ → φt in the notes". | Cite the formula as `cite="reading2" at="p. 16"` (the board form it reproduces), and keep the remark about the notes' φt; or keep reading1 p. 6 and write the formula with φ t. As it stands the cited location does not show the formula exactly as printed. |
| 2 | warning | "Huygens's principle and two slits", first paragraph | Transcript p. 2: Lee says the principle can be derived from Maxwell's equations and "works" only because the number of spatial dimensions is odd; notes p. 1: "That works for odd spatial dimension". | Stated as fact: "it works because space has an odd number of dimensions; in an even number it would fail". | Attribute it ("Lee remarks that…") and add a short bracket: the dimension result concerns the strict form of the principle (sharp wavefronts with no wake); the secondary-wavelet construction used for interference also works in two dimensions, which is why the 2D ripple tank shown a few paragraphs later still gives a two-slit pattern. As written, a reader could take the ripple-tank demonstration as contradicting the claim. |
| 3 | info | "Huygens's principle and two slits", end of first paragraph | Transcript p. 4. | "(p. 4)" with no source named. | Write "(transcript, p. 4)" to match the page's convention. |
| 4 | info | "Phased radar", list of extra phases | Transcript p. 16: Lee says the third emitter gets an extra phase "2 delta" (a slip for 2φ); notes p. 7 label the emitters 0, Δφ, 2Δφ, … correctly. | 0, φ, 2φ, …, (N − 1)φ (correct). | Optional: a brief bracket that the transcript's "2 delta" is a slip for 2φ (writing rule 4). The notes are correct, so this is minor. Lee also says "principal minima" for the central maximum on the same page; the page silently uses "main beam", which is fine. |
| 5 | info | "Three, four, N slits" | Notes p. 3 write δ₁₂ = δ₂₃ = d sin θ = δ (missing the 2π/λ); transcript p. 11 gives (d sin θ/λ)·2π. | δ₁₂ = δ₂₃ = δ, with δ defined earlier correctly. | None needed; could add a bracket alongside the two notes slips already flagged, for consistency. |
| 6 | info | "Three, four, N slits", "with five, 2π/5" | Only the notes (p. 3) mention five slits; the transcript p. 11 stops at four. | Cited "(notes, p. 3; transcript, p. 11)" for the whole sentence. | Fine as is; strictly, the five-slit case is notes only. |
| 7 | info | "Demonstrations" | The OCW lecture page names the second demonstration "Moiré Pattern". | "Two overlaid transparencies of circles, projected". | Optional: name it a moiré pattern, as OCW does. |
| 8 | info | "One electron at a time", "as thousands accumulate" | Transcript p. 18: dots accumulate, the video is sped up ("1,000 times faster"); no count of electrons is given. | "as thousands accumulate". | Harmless; could say "as many accumulate" to avoid an unsourced number. |

Notes slips flagged by the page (verified):
- Notes p. 6 write d sin θ/λ = 2π/N and sin θ = 2πλ/(Nd). The correct condition is (2π/λ) d sin θ = 2π/N, so sin θ = λ/(Nd), as Lee says (transcript, p. 15: "sine theta is actually proportional to lambda divided by N times d"). The page's bracket is correct.
- Notes p. 6: sin θ = φtλ/2π is missing the d (correct: sin θ = φtλ/(2πd)). The page's bracket is correct.

Formula-by-formula check:
- "Two-slit phase difference" (reading1, p. 2): matches notes p. 2 (r_B − r_A = d sin θ; δ = (d sin θ/λ)2π = (d sin θ)k). Correct.
- "Two-slit field and intensity" (reading1, p. 2): matches notes p. 2 (the page omits the intermediate line E₀e^{i(ωt−kr_A)}[1 + e^{−iδ}]ẑ; the shown factorisation is algebraically correct; field along ẑ also on transcript p. 5). Correct.
- "N-source field" (reading1, p. 4): matches notes p. 4 line by line (sum written with e^{−imδ} as in the notes' second line). Algebra verified: (1 − e^{−iNδ})/(1 − e^{−iδ}) = e^{−i(N−1)δ/2} sin(Nδ/2)/sin(δ/2). Correct.
- "N-source intensity" (reading1, p. 4): matches notes p. 4. Correct.
- "Width of the beam" (reading2, p. 15): transcript p. 15 gives δ = 2π/N at the first minimum, δ = (d sin θ/λ)·2π, hence sin θ ∝ λ/(Nd). Correct physics and citation (Lee says "proportional to", the page writes the equality, which is the correct result).
- "Steered array" (reading1, p. 6): see row 1.
- Prose claims checked against their citations: notes p. 1 (3 kHz to 300 GHz radio waves; Huygens; odd dimensions; Maxwell), notes p. 2 (A = intensity at δ = 0, sin θ = λδ/2πd), notes p. 5 (N − 2 secondary maxima; width 4π/N; arrow chain closing at 2π/N), transcript p. 14 (family mnemonic for N = 3 to 6), notes p. 7 (light, water, sound), notes p. 8 (one electron each time; "an electron interferes with itself (Predicted by Quantum Physics!)"), transcript pp. 18–19 (Hitachi group; which-slit detector gives two piles), transcript pp. 19–21 and notes pp. 9–10 (laser double slit with fading maxima, wide single slit, diffraction = interference of infinitely many sources). All supported.

## Arithmetic and answer checks
- `npm run calc:test -- -k phased-radar`: 8 passed.
- Worked example (a): sin θ = λ/(Nd) = 1/(8 × 0.5) = 0.25, θ = arcsin 0.25 = 14.48°, "≈ 14.5°" correct.
- Worked example (b): sin θ = λφ/(2πd) with d = λ/2 gives sin θ = φ/π; sin 30° = 0.5 gives φ = π/2. Correct.
- Worked example (c): Lλ/d = 2.0 × 633 × 10⁻⁹ / 2.5 × 10⁻⁴ = 5.064 × 10⁻³ m, "≈ 5.1 × 10⁻³ m, about 5 mm" correct. (Strictly y = L tan θ; at θ ≈ 2.5 × 10⁻³ rad the small-angle step is fine.)
- Worked example is original (own numbers; MIT has no numerical example in this lecture).
- Quiz 1: path difference λ/2 gives δ = π; answer index 2 = "π". Correct.
- Quiz 2: first zero δ = 2π/N; answer index 1. Correct.
- Quiz 3: a longer λ widens the beam (sin θ = λ/Nd); answer index 3. The other three choices all narrow it. Correct.
- Quiz 4: answer index 1, an interference pattern from single impacts. Correct; explanation matches transcript pp. 18–19.
- Flashcards: all three correct (two-slit δ and cos²; N-slit intensity, principal maxima at 2πm, first zero 2π/N, N − 2 secondary maxima; steering δ = (2π/λ)d sin θ − φ, beam at sin θ = λφ/(2πd)).
- Sign convention of the steering phase checked: with source m carrying e^{−imkd sin θ} and an extra e^{+imφ}, the neighbour phase is kd sin θ − φ, consistent with the page.
- Calcs file note (info): `ex-beam` and `ex-steer` cite reading1 p. 6, but the relation used, sin θ = λ/(Nd), is the transcript's (p. 15), not the notes' (which carry the 2π slip). Consider citing reading2 p. 15 / p. 16 there.

## Coverage and order
- The page follows the lecture order: overview, Huygens, two-slit derivation, δ = 0, π, 2π, ripple tank and moiré demonstrations, radar motivation, three/four/N slits, N-slit plots and mnemonic, resolution (after the break), phased sweeping, billiard balls, single electrons (Hitachi video), which-slit detector, laser demonstrations previewing diffraction.
- Left out (all minor): the radar's time-of-flight distance measurement (transcript, pp. 9–10); notes p. 5's I₀ = ε₀cE₀²/(2R²) and the N = 7 sketch; the fact that the principal maximum is N² times I₀ (MIT also does not stress this; Lee on transcript p. 14 calls the peak "I equal to I₀", which is a slip the page avoids by not giving the height); notes p. 9's Feynman remark that interference and diffraction differ only in usage; notes p. 10's single-slit minima sin θ = λ/D, …, which belong to Lecture 22; the separate demonstration recording's point (transcript pp. 20–21) that the double-slit envelope matches the single-slit pattern of the same width.
- Suggestion (info): a generated `<Plot>` of [sin(Nδ/2)/sin(δ/2)]² with an N slider would carry the notes' p. 5 sketch and Lee's p. 14 plots without reusing MIT's figure.
- Suggestion (info): the page says a "large spacing" narrows the beam, which follows MIT; it could add that once d exceeds λ further principal maxima (δ = 2π) enter the visible range, which is why real arrays use d ≈ λ/2 (as the worked example does). MIT does not discuss this.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes, transcript or OCW lecture page (searched the text and inspected every notes page image).
- No MIT figure is reused; the page has no images. The Hitachi electron video is only described and credited to "a Hitachi group", as Lee does (transcript, p. 18); nothing from it is reproduced.
- Demonstrations are described as live demonstrations (ripple tank, projected transparencies, lasers), not as simulations; the Hitachi material is correctly described as a video of an experiment. The separately recorded demonstration (transcript pp. 20–21) is folded into "Looking ahead" without misattribution.
- Wording is rewritten throughout; only standard terms and the family mnemonic (paraphrased) come from the lecture. No OpenStax or LibreTexts material.

## Notes
- leadsTo (8.03 Lecture 22, "Diffraction: … one wide slit, and the resolution of telescopes"): the OCW title is "Diffraction, Resolution", notes pp. 9–10 preview the wide slit, and the Lecture 22 transcript discusses telescope resolution. Correct.
- No `Callout kind="cosmology"`; nothing to check. Optional: radio interferometer arrays (steered by phase, as here) are a real link to observational cosmology, if a target page exists later.
- No em dashes on the page. Prerequisite `interference-soap-bubbles` exists.
- Not checked: symbols registry and `content:check` (outside this review's scope).

## Resolution (2026-11-16, by the page author)

1. The steered-array formula is now cited to the transcript, p. 16 (Lee's board version without t); the bracket about the notes' φt stays.
2. The odd-dimensions remark is credited to Lee, with a bracket that it concerns the strict principle and that the wavelet picture also works for the 2D ripple tank.
Info: "(transcript, p. 4)"; "as more and more accumulate"; calcs `ex-beam` and `ex-steer` now cite the transcript (pp. 15, 16). Others not changed.
