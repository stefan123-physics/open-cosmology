---
page: content/year-4/8.286/horizon-problem.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-21-problems-of-the-conventional-non-inflationary-hot-big-bang-model/ (read; its first .pdf link is the transcript cited as reading1)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3747051d1048b4df855d7574a3a8360c_PK1KNojfvMQ.pdf (read, pp. 1-12 in full, pp. 20-21 for the three-problems remark; page numbers checked against the printed footer)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec21/ (read; slides PDF 37e4a8646303fa7e57d23e6ddcc638ce_MIT8_286F13_lec21.pdf, slides 1-7)
  - 8.286 Lecture 20 transcript, p. 26-27 (read, for the student question the page mentions)
verdict: pass-with-notes
---

# Review: The horizon problem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Blaming the singularity", bracketed Lecture 20 note | L20 transcript p. 27: the student asks whether homogeneity could have been set up when the universe was smaller; Guth answers that "no matter how early you imagine it happening" the points are still "about 50 horizon distances apart". | Paraphrased correctly, but no citation (the page cites only Lecture 21 material, and Lecture 20 is not in `source.readings` or `references`). | Add the L20 transcript to `references` (e.g. key `l20`, location "p. 27") or name the page in the text. Optionally mention that Guth said "about 50" there and refined it to 46 in Lecture 21. |
| 2 | info | Slip note "[The transcript says "5,000 or 6,000 years ago"; billions is meant.]" | p. 9: "it did not remain matter dominated through to the present at about 5,000 or 6,000 years ago. We switched to a situation where the dark energy is actually larger than the non-relativistic matter." | "dark energy took over a few billion years ago" + bracket. | The bracket is correct (billions is meant). For the record: with Planck 2018 values, dark energy overtook matter at z ≈ 0.30, about 3.5 billion years ago; 5-6 billion years is when the acceleration began (z ≈ 0.63, about 6.1 billion years ago). The page's "a few billion years" is accurate as written; no change needed. |
| 3 | info | Slip note on H0 "57.3" | p. 10: "57.3 kilometers per second per megaparsec" giving 28.2 billion ly. | 67.3, with bracket. | Verified: 67.3 gives 28.18 Gly; 57.3 would give 33.1 Gly. 67.3 is also the Planck value Guth uses elsewhere (cf. `age-of-the-universe.mdx`). Note is correct. |
| 4 | info | "Review of Lecture 20", item 2 | Slide 2: "cannot be accounted for without dark energy"; transcript p. 2: "very hard to account for". | "impossible to account for without dark energy" | Acceptable (matches the slide); "very hard" would follow the spoken version. |
| 5 | info | "Compared with the horizon": "Each emission point is about 23 horizon distances from where we are now" | p. 11: ratio ℓ_p(t_d)/ℓ_h(t_d) ≈ 23, so the two emission points are ~46 horizon distances apart. | Same, but "from where we are now" could be read as a present-day distance. | Consider "from the place that is now our position, measured at the time of decoupling". |

No formula, equation location or physics claim was found to be wrong.

### Formula citations (all checked)
Lecture 21 slides 2-5 are only the Lecture 20 summary (slide 1 title + supernova data, slides 6-7 Standard Model / gauge theories). No horizon-problem equation is on a slide, so "board" is right for all five formulas.
- Redshift of decoupling, p. 9 (board): correct (aT ≈ const, 1+z_d = a(t_0)/a(t_d) = T_d/T_0 ≈ 1100, all on p. 9).
- ℓ_p(t_0) = 2cH_0^{-1}(1 − 1/√(1+z)), p. 9 (board): correct (flat, matter-dominated, "derived on a homework set").
- ℓ_p(t_d) = (a(t_d)/a(t_0)) ℓ_p(t_0) ≈ ℓ_p(t_0)/1100 ≈ 2.56×10^7 ly, p. 10 (board): correct.
- ℓ_h,phys(t_d) = 3ct_d ≈ 1.1×10^6 ly, pp. 10-11 (board): correct (formula at the bottom of p. 10, value at the top of p. 11).
- Ratio ≈ 23, p. 11 (board): correct.

## Arithmetic and answer checks
Recomputed with Python:
- Guth's numbers (H0 = 67.3, 1+z = 1100): cH0^{-1} = 977.8/67.3 = 14.53 Gly; bracket 1 − 1/√1100 = 0.9698 ("0.97", as on the page); ℓ_p(t_0) = 28.18 Gly (page 28.2, correct); ℓ_p(t_d) = 25.6 Mly = 2.56×10^7 ly (correct); 3ct_d with t_d = 370,000 yr = 1.11 Mly (correct); ratio 23.08 (≈ 23); twice that ≈ 46 (correct).
- With 57.3 instead: ℓ_p(t_0) = 33.1 Gly, which confirms the slip note.
- Plot caption: ℓ_p(t_e) = 2cH0^{-1}(1 − (1+z)^{-1/2})/(1+z) and 3ct_e = 2cH0^{-1}(1+z)^{-3/2} (t_0 = (2/3)H0^{-1}), so the ratio is (1+z)^{1/2} − 1. That is correct. At z = 1100 it is √1101 − 1 = 32.18 (32.17 for 1+z = 1100), so the point (1100, 32.2) is right. Pure-matter decoupling time (2/3)(14.53 Gyr)/1101^{1.5} = 265,000 yr: correct. The curve stays inside the plot range (max √1501 − 1 = 37.7 < 40). "Grows without limit for earlier emission": correct.
- Worked example: 3000/2.7255 = 1100.7; 977.8/67.7 = 14.44 Gly; 1 − 1/√1100.7 = 0.9699 → 0.970; 2 × 14.44 × 0.970 = 28.02 → 28.0 Gly; ÷1100.7 = 25.45 → 25.5 Mly; 3 × 380,000 yr = 1.14 Mly; 25.45/1.14 = 22.3; ×2 = 44.7 ≈ 45. All correct. The example uses its own inputs (T_0 = 2.7255 K, H0 = 67.7, t_d = 380,000 yr), so it is not a copy of the lecture.
- Quiz 1 (answer index 1): correct, p. 7.
- Quiz 2 (answer 0): correct. In the explanation, 3000/2.7 = 1111, which is "≈ 1100" at the precision used.
- Quiz 3 (answer 1, ~46): correct, p. 11.
- Quiz 4 (answer 1): correct, pp. 11-12. The explanation's appeal to Hawking-Penrose matches Guth's answer on p. 11.
- Flashcards: all four agree with the transcript and the numbers above.

## Coverage and order
- The order follows the transcript: review of L20 (pp. 1-7, slides 2-5) → three problems announced (p. 7) → uniformity to 10^-5 and the student question (p. 7) → ripples as seeds (p. 8) → pizza / thermal-equilibrium argument, opposite photons (p. 8) → T_d, aT = const, z_d (p. 9) → ℓ_p(t_0), the matter-dominated approximation (p. 9) → 0.97, horizon at z = ∞, H0 and 28.2 Gly, 3ct = 2cH0^{-1} (p. 10) → ℓ_p(t_d) (p. 10) → horizon 3ct_d, ratio 23, 46 (pp. 10-11) → singularity assumption, student question, Hawking-Penrose (p. 11) → dynamical explanation by inflation (p. 12).
- The introduction says the first two problems are "basic classical cosmology" and the monopole problem depends on particle physics. This is confirmed on transcript pp. 20-21.
- Omitted (minor): the p. 1 recap of the Hi-Z supernova plot (slide 1, ΛCDM fit with Ω_vac = 0.76); Guth's remark that ℓ_p(t_0) is "of course larger than ct" (p. 10); his comment that inflation would be covered "next time from Scott Hughes" (p. 7); the details of the Einstein-Friedmann story (slide 5, reduced to one sentence, which is fine because it is covered on the L20 page). The page repeats none of Guth's slips: it writes "Lorentz", not "Lawrence", and gives no Friedmann/Einstein dates.
- Added material: the plot and the √(1+z) − 1 check, the worked example and the later-developments callout. All three are clearly marked as the page's own.

## Licensing
- The slides carry no "All rights reserved" or "Courtesy of" notices (grep on the slides and transcript text). Slide 6 is a Wikimedia Commons image (PBS NOVA/Fermilab/DOE/PDG). This page does not use it. Slide 1 (the Hi-Z Supernova Search Team data plot) is not used either.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases. The closest paraphrases are "Since we don't understand the singularity, we may attribute anything to it" (p. 11: "Since we don't understand that singularity, we're allowed to attribute anything we want to it") and "an assumption, not an explanation". Both are short and reworded, so they are acceptable.
- The plot is generated from a formula, not a static image.

## Notes
- Later-developments callout: Planck 2013 67.3 (Planck+WP, 67.3 ± 1.2), Planck 2018 67.4 ± 0.5 and the SH0ES-type value of about 73 are correct and clearly marked as later developments. The statement "still unresolved" is correct to my knowledge but depends on the date. Small inconsistency: the worked example uses H0 = 67.7 (≈ Planck 2018 + BAO, 67.66) while the callout gives 67.4. Consider naming the source of 67.7 or using 67.4. With 67.4 the ratio is 22.4 and the separation is about 45, so nothing changes.
- leadsTo Lecture 23 (Inflation): fair. Guth says on p. 12 that inflation will give a dynamical solution. Lecture 22 is the monopole problem, so 23 is the right target.
- Prerequisites `vacuum-energy-puzzle`, `horizon-distance` and `temperature-and-decoupling` all exist.
- The quiz and the summary describe Hawking-Penrose as Guth describes it ("a singularity need not be uniform"). As physics this is a simplification of the singularity theorems, but it is attributed fairly to Guth's answer.

## Resolution (2026-11-14, by the page author)

- Warning: removed the uncited parenthesis about the Lecture 20 student question.
- Info: "impossible to account for" changed to "very hard to account for", as Guth says it; the 23-horizon-distance sentence now says the distance is measured at decoupling, from the spot that would become our location; the worked example names 67.7 km/s/Mpc as a Planck-like value.
