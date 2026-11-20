---
page: content/year-2/8.03/diffraction-resolution.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-22/ (read, saved HTML; links to the notes and transcript match the frontmatter)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec22/ (read: 8-page notes PDF, checked from the page images because the text layer is unreliable; p. 8 is the OCW credit page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/5af9c41fdccba16a92c2994a0521c14b_FY6iXM9X5Fo.pdf (read: transcript, 19 pages of text plus an empty p. 20; no printed page numbers, so PDF page = page)
verdict: pass-with-notes
---

# Review: Diffraction and resolution

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Measuring a laser's wavelength", sentence after the formula | Transcript p. 13: Lee asks for a smartphone to do the arithmetic, a student reads out 7.368 × 10⁻⁷, and Lee then says from his own knowledge that red is "between 620 and 750". | "737 nm, within the range of red light, about 620 to 750 nm, as a student's smartphone confirms." This reads as if the phone confirmed the range. | Say the student's phone did the arithmetic (7.368 × 10⁻⁷ m) and Lee notes that red light is about 620 to 750 nm. |
| 2 | warning | "The eye and the phone", last sentence | Transcript p. 18: "2,000 pixel per inch is roughly the limit", and the next generation might hold the phone closer ("using this like this"). Notes p. 7 say something else: "If Apple put 2,000 pixels in 6 cm ~ the limit" (about 850 ppi). | "around 2,000 ppi is roughly the useful limit, for a screen held very close." | The claim is fair to the transcript but not quantified. With the page's own numbers, the limit is 2.54 cm/(1.22 × 10⁻⁴ × 20 cm) ≈ 1,040 ppi at 20 cm and ≈ 2,080 ppi at 10 cm. Say that 2,000 ppi is the limit at about 10 cm (about 1,000 ppi at 20 cm), and mention, or knowingly leave out, the notes' different "2,000 pixels in 6 cm". |
| 3 | warning | End of page (no `Callout kind="cosmology"`) | n/a | The page has no cosmology callout, and `leadsTo` only points to 8.03 Lecture 23. | AGENTS.md asks for a cosmology callout "where a real connection exists". The diffraction limit 1.22λ/D, which sets the angular resolution of telescopes and CMB maps, is such a connection. Either add one, or record that it was left out on purpose. Not a factual error. |
| 4 | info | "Infinitely many sources", Feynman sentence | Notes p. 1: "No one has ever been able to define the difference between interference and diffraction satisfactorily. It is just a question of usage." Transcript p. 2 gives the same remark. Neither source mentions "few" against "many" sources. The notes only call the interference of infinitely many waves "diffraction". | "...'interference' for a few sources and 'diffraction' for many" | This matches Feynman's own wording (Feynman Lectures I, 30-1) and does not contradict MIT. It could be phrased as the page's gloss rather than as part of the remark. Optional. |
| 5 | info | Method I paragraph | Method I appears only in the notes (p. 2). In class (transcript pp. 2–9) Lee goes straight to the Fourier method. | Cites the notes only, which is correct. | Optionally say that Method I is in the notes only. "The strength of each tiny source proportional to 1/N" is right if strength means amplitude. Writing "amplitude" would make the equivalence with the notes' "intensity ∝ N⁻²" plain. |
| 6 | info | "Method II, from Georgi's book" | Georgi's book is named in the notes (p. 3) only. The transcript never names Georgi and credits the Fourier transform to 18.03 and "the math department" (pp. 3–4). | Cites notes p. 3 and transcript pp. 2–5. | Fine as it stands. The attribution to Georgi is correctly sourced from the notes. |
| 7 | info | Measurement paragraph | Notes p. 4 (green annotations) record D = 0.16 mm, d = 3.5 cm, r = 7.7 m, λ = 727 nm, with the label "Red light 700 nm". | The page mentions the notes' 7.7 m and 727 nm but cites only the transcript (pp. 11–13) for the paragraph. | Add "(notes, p. 4)" to the bracket about 7.7 m and 727 nm. |
| 8 | info | Flashcard 1 and Summary, "zeros at sin θ = mλ/D" | Notes p. 4 and transcript p. 10: zeros at ±λ/D, ±2λ/D, … | "zeros at $\sin\theta = m\lambda/D$" with no range for m | Add "m = ±1, ±2, …". m = 0 is the central maximum, not a zero. |
| 9 | info | Eye resolution inline maths | n/a | "$1.22 \times 500 \times 10^{-9}/5 \times 10^{-3}$" read literally means (…/5) × 10⁻³. | Use brackets or a `\frac`. |
| 10 | info | Quiz 3 explanation | Neither source uses the name "Airy pattern". | The explanation says "Airy pattern", a term the page body never introduces. | Either name it once in the body or say "the first dark ring of the circular-aperture pattern". |

## Arithmetic and answer checks
- `npm run calc:test -- -k diffraction-resolution`: 17 passed. I also recomputed these values by hand:
- Fourier slit integral: (1/4π²)·[2 sin(k_xD/2)/k_x]·[2πδ(k_y)] = δ(k_y)(1/2π)·2 sin(k_xD/2)/k_x = δ(k_y) sin(k_xD/2)/(πk_x). This matches notes p. 3, transcript p. 7 and the frontmatter summary.
- k_x = 2π sin θ/λ gives k_xD/2 = πD sin θ/λ = β, so I ∝ (sin β/β)². Matches notes p. 3 and transcript p. 9.
- Laser: 0.16 × 10⁻³ × 3.5 × 10⁻² / 7.6 = 7.368 × 10⁻⁷ m ≈ 737 nm. Matches transcript p. 13. With 7.7 m the result is 727 nm, which matches notes p. 4. The 7.5 m measurement and the 7.6 m used are both on transcript p. 12, and the page reports both correctly.
- J₁ first zero 3.8317, and 3.8317/π = 1.2197 ≈ 1.22. Correct.
- Normalization note: J₁(β)/β → 1/2 as β → 0, so I₀(J₁/β)² gives I₀/4 at the centre. The page's (2J₁/β)² remark is correct, and the zeros are unchanged.
- Eye: 1.22 × 5 × 10⁻⁷ / 5 × 10⁻³ = 1.22 × 10⁻⁴. Correct (notes p. 6, transcript p. 17).
- Pixel pitch: 2.54/401 = 6.33 × 10⁻³ cm. At 20 cm the angle is 3.17 × 10⁻⁴ ≈ 3 × 10⁻⁴, which is larger than 1.22 × 10⁻⁴, so the pixels are resolvable. Correct.
- The notes' 10 cm slip: 6.3 × 10⁻³/10 = 6.3 × 10⁻⁴, not the notes' 3 × 10⁻⁴. The notes' answer only follows from the 20 cm in their own drawing (notes p. 7). The page's bracket is correct.
- 40,000 ppi: pitch 6.35 × 10⁻⁵ cm, which is 3.2 × 10⁻⁶ rad at 20 cm, far below the limit. "Pointless" is correct.
- 2,000 ppi: see finding 2. It is the limit at about 10 cm, not at 20 cm.
- Moon: 1.22 × 5 × 10⁻⁷/10⁻³ = 6.1 × 10⁻⁴, and × 4 × 10⁸ m = 2.44 × 10⁵ m ≈ 240 km radius. Matches notes p. 7. The transcript says 200 km (p. 19), and the page flags this. Missouri is roughly 450 km × 390 km, so a spot of 400–480 km diameter is a fair "size of Missouri".
- Worked example (a): 532 × 10⁻⁹/1.0 × 10⁻⁴ = 5.32 × 10⁻³. Then 3.0 m × 5.32 × 10⁻³ = 1.60 cm, so the band is 3.2 cm wide. Correct.
- Worked example (b): 1.5/1.22 × 10⁻⁴ = 1.23 × 10⁴ m ≈ 12 km. Correct.
- Worked example (c): 1.22 × 5 × 10⁻⁷/2.4 = 2.54 × 10⁻⁷ rad. The ratio to the eye is 1.22 × 10⁻⁴/2.54 × 10⁻⁷ = 480, so "about 500" is correct. The example is original: its numbers and situations are not MIT's. It reuses the 2.4 m aperture Lee mentions for Hubble, which is fine.
- Quiz 1 (answer λ/D): correct, and the explanation is right.
- Quiz 2 (it narrows): correct.
- Quiz 3 (diffraction, 1.22λ/D): correct. The distractor "Only the atmosphere" is defensibly wrong because of "only".
- Quiz 4 (single-slit modulation): correct. The formula matches notes p. 6 and transcript p. 14.
- Flashcards: correct, apart from the missing range for m (finding 8).

## Coverage and order
- Transcript order: introduction (jPhone, Star Trek preview, p. 1) → Huygens and the Feynman remark (p. 2) → 2D Fourier transform (pp. 3–5) → single-slit f and the integral (pp. 5–7) → k_y = 0 (pp. 7–8) → k_x in terms of θ and the (sin β/β)² result (pp. 8–9) → pattern and zeros (pp. 9–10) → the three observations (pp. 10–11) → laser measurement (pp. 11–13) → central width twice the side width (p. 13) → finite-width double slit (pp. 14–15) → resolution: Soap Bubble nebula, zebra/lion, M57 (pp. 15–16) → circular aperture and 1.22λ/D (pp. 16–17) → eye and phone (pp. 17–18) → laser to the Moon (pp. 18–19).
- Notes order is the same, with Method I (p. 2) inserted before Method II (p. 3).
- The page follows this order and covers every segment. Every formula's `cite`/`at` is correct: notes p. 2 (Method I), p. 3 (both Fourier formulas), p. 6 (the finite-slit formula and the circular aperture), and transcript pp. 12–13 for the wavelength. The wavelength calculation was worked on the board and has no notes formula, so citing the transcript is correct. All prose page citations I checked match the transcript and notes pages above.
- The page adds nothing beyond MIT except the worked example and the bracketed slip notes.
- Lee's own coordinate set-up (x up, y along the slit, z towards the screen; transcript p. 5) is only implied. That is acceptable.
- Not covered: the Lecture 22 homework (`mit8_03scf16_hw_lec22`) linked from the OCW page. It is outside the scope of a lesson page.

## Licensing
- `grep` for "rights reserved" and "courtesy" in the notes and transcript text and in the OCW page found nothing. The notes' last page is the standard OCW credit page.
- The page reproduces no MIT figure. Lee's M57 photograph and the Hubble image are described, not shown. No OpenStax or LibreTexts material is used.
- No verbatim copying beyond short quoted phrases: "a lot of work" (transcript p. 10) and "the size of Missouri" (p. 19). The Feynman remark is paraphrased.
- Attributions:
  - Feynman: correct (notes p. 1, transcript p. 2).
  - Georgi's book: correct, from the notes p. 3 only.
  - The 40 cm M57 photo as Lee's own: supported by transcript p. 15 ("I was using some telescope with D equal to 40 centimeter… the best thing which I can achieve").
  - Hubble's 240 cm mirror above the atmosphere: transcript p. 16. Correct.

## Notes
- Slips the page flags, all checked against the sources:
  - The 7.5 m measured against the 7.6 m used (transcript p. 12): correct.
  - The notes' 7.7 m and 727 nm (notes p. 4): correct.
  - The notes' 10 cm in the formula against the 20 cm in the drawing (notes p. 7): correct.
  - The missing factor 2 in (J₁/β)² (notes p. 6, transcript p. 16): correct.
  - 200 km in class against 240 km in the notes: correct.
- The notes (p. 7) call the 401 ppi phone the "iPhone 7", and the transcript says "iPhone 6 or 7". 401 ppi is actually the Plus models. The page says only "a phone screen", which avoids the problem.
- `leadsTo` (8.03 Lecture 23, "Quantum Waves and Gravitational Waves") matches the course syllabus and an existing page. The why-text is fair.
- The internal links `/courses/8-03/phased-radar-electron-interference` and `/courses/8-03/fourier-transform-am-radio` point to existing slugs.
- The page reuses x for both the aperture coordinate and the position on the screen, as MIT does. Acceptable, but a reader may stumble over it.

## Resolution (2026-11-16, by the page author)

1. The 620–750 nm range is now Lee's; the student's phone only did the arithmetic.
2. The ppi limit now gives distances (about 1,040 ppi at 20 cm, 2,080 at 10 cm; calcs added) and the notes' "2,000 pixels in 6 cm".
3. Added a cosmology callout on the resolution of sky maps, linked to the 8.286 CMB page.
Info: the few/many gloss now attributed to the notes; "amplitude ∝ 1/N"; "(notes, p. 4)" added; brackets added in the eye calculation; "Airy pattern" removed from the quiz. Others not changed.
