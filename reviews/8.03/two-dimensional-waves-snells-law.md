---
page: content/year-2/8.03/two-dimensional-waves-snells-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-16/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec16/ (read: notes PDF, pp. 1-7 checked as rendered page images, p. 8 is the OCW credit page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/02d801f417063043ee56710701f8ffc8_kKIQ1h9UuA.pdf (read: transcript, pp. 1-18; pp. 18 onward are the separate demonstration recording)
verdict: pass-with-notes
---

# Review: Waves in two and three dimensions, and Snell's law

All seven `<Formula>` blocks match the notes. Their page citations are correct, and so is every prose citation I checked against the transcript. Every number in the worked example and every quiz answer is correct. I found no errors, only the warnings and notes below.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Normal modes inside walls", cite `reading1` at "p. 3" | Notes p. 3 give the mode as a function of x and y only: `ψ_(nx,ny)(x,y,t) = A_(nx,ny) sin(n_xπx/L_H) sin(n_yπy/L_V)`, with no time factor. The time factor `sin(ωt + θ/β)` is added only in the lecture (transcript, p. 7). | The formula includes `sin(ωt + β)` and cites notes p. 3 only. | Cite the time factor as well, e.g. `at="p. 3; time factor: transcript, p. 7"`, or say in the prose that the time factor is added in the lecture (transcript, p. 7). |
| 2 | warning | "Adding walls": "Now only four eigenvectors share a frequency" (also quiz Q1 explanation: "With fixed walls only four remain") | Lee hedges this: "it's actually very likely to be limited to be only four pairs" (transcript, p. 6). The notes (p. 3) say "only four modes … with the same ω". | Stated as a flat rule. | Add "in general" or "apart from accidental coincidences". With equal tensions and spacings, a square box gives (1, 2) and (2, 1) the same ω, which is a counter-example to the flat rule. |
| 3 | warning | Simulation sentence: "(3, 4), the highest here" | Lee: "the highest value I can set these is 3 and 4" (transcript, p. 7). The slider order is not stated. With L_H = 5a_H and L_V = 4a_V, the page's own ranges are n_x ≤ 4 and n_y ≤ 3. | Writes the mode as (3, 4) in an (n_x, n_y) context, which is impossible here because n_y ≤ 3. | Write "(4, 3), the highest here (Lee says '3 and 4')", or describe it as the highest mode without the pair. |
| 4 | warning | End of page | Not an MIT difference. AGENTS.md rule 6 says a foundation page ends with a `<Callout kind="cosmology">` where a real link exists. | `leadsTo` points to 8.286 Lecture 16, but the page has no cosmology callout. Most other 8.03 pages have none either. | Add a short cosmology callout (box modes leading to black-body radiation in 8.286 Lecture 16), or drop the requirement for this page knowingly. |
| 5 | info | Snell's-law paragraph: "(On the board Lee first leaves out the n on the left, p. 17.)" | The transcript only records speech: "sine theta will be equal to n prime sine theta prime" (p. 17). Neither the transcript nor the notes show whether the board was wrong, or whether he later corrected it. The notes (p. 7) are correct. | Claims a board slip and that he "first" left it out. | Reword: "(In the transcript Lee says sin θ = n′ sin θ′, without the n on the left, p. 17.)" |
| 6 | info | Not mentioned on the page | Two more spoken slips: p. 15, "|k_α|² = ω²ρ_s/T_s … = ω² v²" (should be ω²/v²); p. 17, k_βx said with v instead of v′. The notes (p. 6) are correct. | The page follows the notes, which is correct. | None needed. Optionally add them to the existing bracketed slip notes for consistency. |
| 7 | info | "Continuum" paragraph | Notes p. 3 write "ρ = m/a²" (no subscript s); notes p. 4 typeset "v = √(T_s/rho_s)". | Page uses ρ_s throughout. | Optional: none needed, these are notation typos in the notes. |
| 8 | info | Frontmatter summary: "patterns on a soap film"; body: "A soap-like film on a ring" | The transcript says "soft film" (pp. 12, 18), probably a mistranscription of "soap film", but I could not confirm this. | Summary says "soap film", body says "soap-like film" for the ring and just "film" for p. 18. | Make the three wordings consistent. "film" alone is safest. |
| 9 | info | Chladni bullet: "predicts a circle with lines crossing it" | "a circle in the middle and also four lines which actually cover this circle" (transcript, p. 11). The plate then shows the ring and 8 lines. | Leaves out "four". | Optional: say "four lines", which makes the "not a perfect match" point clearer (4 predicted, 8 seen). |

Slips already flagged on the page, all verified:
- ω = (T/ma) sin(ka/2): notes p. 1 and transcript p. 2. The correct form, ω² = (4T/ma) sin²(ka/2), follows from the notes' own 2D formula on p. 2.
- k_x written twice in the box guess: notes p. 4, `sin(k_x x) sin(k_y y) sin(k_x x)`.
- "non dispersive" for the bead array: transcript p. 3. The notes (p. 2) say it is dispersive. Lee's later "non-dispersive medium" on p. 15 refers to the continuous membrane and is correct, and the page does not flag it.
- "refraction" for the reflected wave: transcript pp. 15-17. The "as he did for strings" remark is consistent with the travelling-waves-reflection page.

Citations checked and correct:
- Prose: transcript pp. 1, 1-2, 2, 3, 3-5, 4-5, 5, 5-7, 7, 8, 8-9, 9, 10-11, 12-13, 13, 13-14, 14, 15, 16-17, 17, 17-18, 18.
- Notes: pp. 1, 1-2, 2, 3, 3-4, 4, 5, 6, 6-7, 7.
- Formulas:
  - eigenvectors and dispersion relation: notes pp. 1-2
  - walls: notes p. 2
  - continuum: notes p. 3
  - 2D wave equation with v: notes pp. 3-4
  - box: notes p. 4
  - plane wave with λ = 2π/|k|: notes p. 4
  - ψ_L and ψ_R: notes p. 5
  - boundary condition: notes p. 6
  - k_αx and k_βx: notes p. 6
  - Snell's law: notes p. 7

## Arithmetic and answer checks
- `npm run calc:test -- -k two-dimensional-waves`: 12 passed.
- Worked example, recomputed by hand:
  - v = √(200/0.50) = √400 = 20 m/s. Correct.
  - f = ω/2π = (v/2)√((n_x/L_H)² + (n_y/L_V)²), from ω = v|k| with k = (n_xπ/L_H, n_yπ/L_V). Correct.
  - f(1,1) = 10√(4 + 6.25) = 10 × 3.2016 = 32.0 Hz.
  - f(2,1) = 10√22.25 = 47.17, which rounds to 47.2 Hz.
  - f(1,2) = 10√29 = 53.85, which rounds to 53.9 Hz. All correct, and none is a multiple of f(1,1), as stated.
  - (b) n′/n = v/v′ = 2, so sin θ′ = 0.5 × 0.5 = 0.25 and θ′ = 14.48° ≈ 14.5°, bent towards the normal. Correct.
  - (c) From the slow side, n/n′ = 2, so 2 sin θ > 1 for θ > 30°. Correct.
- Continuum algebra: (4T/ma)(k²a²/4) = Tak²/m, and Ta/m = (T/a)/(m/a²) = T_s/ρ_s. Correct.
- "n_x = 1, …, 4 and n_y = 1, 2, 3 (one fewer than the number of gaps)": 5 and 4 gaps. Matches notes p. 3 and transcript p. 6.
- Example ω² = 5 sin²k_x + 5 sin²k_y at ω = 1: this gives sin²k_x + sin²k_y = 0.2, a closed curve that is nearly but not exactly a circle. "Close to a circle" is a fair description. Lee calls it a circle (p. 4) and says in general it is not circular (p. 4).
- Quiz:
  - Q1: "Infinitely many" is correct. See row 2 about "only four" in the explanation.
  - Q2: √(T_s/ρ_s) is correct.
  - Q3: choice 1 is correct, and the explanation matches notes p. 6 and transcript p. 16.
  - Q4: "Towards the normal" is correct, because n′ > n gives sin θ′ < sin θ.
- Flashcards: all three are correct. The first combines the bead-array labels L_H and L_V with the continuum v. That is acceptable, but on a membrane L_H and L_V are just side lengths.

## Coverage and order
- The page follows the lecture order:
  1. Two ways to go to higher dimensions (p. 1)
  2. Reminder of the beaded string (pp. 1-2)
  3. 2D array, eigenvectors, dispersion (pp. 2-3)
  4. Many (k_x, k_y) pairs at one ω (pp. 3-5)
  5. Walls (pp. 5-7)
  6. Simulation (p. 7)
  7. Continuum and 2D/3D wave equation (pp. 8-9)
  8. Chladni figures, circular membrane, cup-of-water video (pp. 10-13)
  9. Plane waves, boundary, reflection and Snell's law (pp. 13-18)
  10. Separate film demonstration (p. 18)
- The box example (notes p. 4) is not in the spoken lecture. The page correctly attributes it to the notes alone.
- Omitted, all minor:
  - Lee's second dispersion example ("when I have omega equal to 5", p. 5).
  - The student question on p. 6 about why walls remove the k_x/k_y trade-off. The page gives the answer implicitly.
  - The continuous-membrane animation shown again at the start of the demonstrations (p. 9).
  - Lee's use of his Chladni program at higher frequencies, with arbitrary n_x and n_y (pp. 11-12).
- Nothing is added beyond MIT except the original worked example, the "not harmonic" remark (correct), and the term "critical angle" in the summary. That term is standard and consistent with notes p. 7.
- Attributions checked:
  - The bead simulation (p. 7) is called a simulation. Correct.
  - Lee's Chladni calculation is "a little demonstration which I actually wrote" (p. 10). The page calls it "Lee's own calculation", which is fair.
  - The Chladni plate and the circular film are live demonstrations. Correct.
  - The cup of water is a video from a student. Lee: "this is from Jake. He sent me this wonderful video when I was teaching the 8.03 class" (p. 13). "Former student" is a reasonable reading.
  - The p. 18 film demonstration is correctly marked as a separate recording. The OCW page lists extra demonstration videos (copy_of / copy2_of / copy3_of lecture-16-video), which is consistent with this.
- The page calls the Chladni driver a "vibrator". That matches this lecture ("vibrator", "vibration generator", "motor", p. 10). The previous page (uncertainty-principle-2d-waves) says "a loudspeaker under a metal plate", which matches Lecture 15's own transcript. The two lectures describe the driver differently. Neither page is wrong, but the reader may notice; optionally add "(described in Lecture 15 as a loudspeaker)".
- Overlap with uncertainty-principle-2d-waves: the previous page covers Chladni figures briefly, including the T-shirt remark. This page repeats the demonstration because Lee repeats it in Lecture 16, and adds the comparison with his calculation. The overlap is acceptable. Optionally say "shown briefly last lecture".
- The OCW page also links Georgi textbook chapters 11-12 (mit8_03scf16_text_ch11, ch12). The page does not use them, which is fine.

## Licensing
- No "All rights reserved" or "Courtesy of" notices were found in the notes text, the transcript or the OCW page.
- No figures are reproduced. The page has no images, and the hand-drawn diagrams in the notes are not used.
- No copied paragraphs. Short phrases such as "to add some excitement" (notes p. 5: "To add some excitement") and "the membrane must not break" are brief paraphrases of standard wording. Acceptable.
- The worked example is original: own dimensions, tensions and speeds. It is not taken from the notes or the problem set.
- No OpenStax or LibreTexts material.

## Notes
- Forward links:
  - 8.03 Lecture 17 (Polarization, Polarizer) is correct. Lee announces it as "the second way to go to higher dimension, which is related to polarization" (transcript, p. 1).
  - 8.286 Lecture 16 (Black-Body Radiation, Part II) is fair. The existing black-body-radiation page (lecture 16) has Guth expanding the field in a box as standing waves, "normal modes with a whole or half-whole number of wavelengths across the box", each a harmonic oscillator. The `why` says "counting the standing waves … is the first step". Guth argues mode by mode rather than writing the ω² = v²|k|² box formula, so "first step" is a fair claim, not a quotation.
- The internal links /courses/8-03/beaded-string-wave-equation, /courses/8-03/electromagnetic-waves and /courses/8-03/uncertainty-principle-2d-waves all point to existing pages.
- I did not run `npm run content:check`. Other uncommitted lesson files may be moved during this run, so symbol and label checks are not covered by this review.

## Resolution (2026-11-16, by the page author)

1. The normal-mode formula is followed by a note that the time factor is Lee's addition (transcript, p. 7).
2. "Only four" is now "in general, only four" in the body and the quiz.
3. The highest mode is written n_x = 4, n_y = 3.
4. Added a cosmology callout (modes in a box, linked to the 8.286 black-body page).
Info: the Snell slip note now quotes what the transcript records; "soap film" changed to the transcript's "soft film"; the Chladni bullet says the calculation predicts four lines. Others not changed.
