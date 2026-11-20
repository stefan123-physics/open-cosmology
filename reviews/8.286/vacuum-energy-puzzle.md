---
page: content/year-4/8.286/vacuum-energy-puzzle.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/02cf009d0b92e400bc2ef271443c465f_RgScJ20EnW8.pdf (read; Lecture 20 transcript, pp. 12–28 in full; page numbers checked against the printed footer with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-20-supernovae-ia-and-vacuum-energy-density/ (read; lecture page)
  - Lecture 20 slides, mit8_286f13_lec20 (read; 3 PDF pages, all of them the summary of Lecture 19 plus the title slide. None of this page's material is on the posted slides)
  - content/year-4/8.286/_course.json (read, to check the leadsTo lecture titles for Lectures 21–23)
verdict: pass-with-notes
---

# Review: The puzzle of the vacuum energy, and Einstein's mistake about Friedmann

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "3. Fields with non-zero values in the vacuum" | p. 20: the Higgs particle was found "after over 50 years of looking for it" | "after a search lasting decades" | The page is right: the Higgs mechanism dates from 1964, so the search had lasted about 48 years in 2012. But the page quietly corrects a lecturer slip. Under writing rule 4, add a short bracket such as "[Guth says 'over 50 years'; the mechanism was proposed in 1964.]", or leave it if the owner treats this as too small to note. |
| 2 | warning | End of the supersymmetry paragraph: "(To a student's question, Guth confirms that the 120 uses the same Planck-scale cutoff.)" | p. 20: "AUDIENCE: [INAUDIBLE] / PROFESSOR: Same thing. Planck scale." | States what the question was | The question cannot be heard, so we cannot tell whether it was about the 120 or about the 50 orders of magnitude. Guth had already said on p. 19 that the 10^120 uses the Planck-scale cutoff. Either drop the parenthesis or write "(asked about the cutoff, Guth replies: the same, the Planck scale)". |
| 3 | info | Zero-point section: "(Guth's students worked this out on a homework problem.)" | p. 13: "you'll be doing a homework problem on this" (future tense) | Past tense | Suggest "(Guth's students do this calculation in a homework problem.)" |
| 4 | info | Standing-wave description | p. 13: "each standing wave is either a half wavelength or a full wavelength across" (garbled as spoken) | "each fitting a whole number of half-wavelengths across the box" | The page states the physics correctly. No change needed, and it is too small for a slip note. |
| 5 | info | Fermion fields | pp. 16: "also of order 1/2 h bar omega … in some sense h bar omega and not 1/2" | "of the same order, $\hbar\omega$ per mode" | Faithful. |
| 6 | info | Both `<Formula>` elements, `at="p. 14 (board)"` | p. 14: ½ħω and $\sqrt{\hbar G/c^3}\approx 1.6\times10^{-33}$ cm are both spoken on p. 14 | p. 14 (board) | The page number is correct. Neither formula is on the posted slides, so citing the transcript is right. I cannot check from the transcript whether Guth wrote them on the board ("as spoken" would be just as safe). The value 1.616e-33 cm is correct. |
| 7 | info | Anthropic section, "($10^{-40}$-something seconds, as Guth puts it)" | p. 21: "about 10 to the minus 40 something seconds" | Same, attributed to Guth | Fine. If you want, add that the Planck time is $\approx 5.4\times10^{-44}$ s. |
| 8 | info | Historical interlude, names | Transcript: "Yrui Krutkov", "Pierre Kerzberg", the book "Cosmological Constant" (p. 24) | "Yuri Krutkov", "Pierre Kerszberg", *Cosmological Constants* | The page uses the correct spellings and titles. The transcript's spellings are transcription errors, so no slip note is needed. |
| 9 | info | Friedmann date slip note | p. 22: "published in June 29, 1922"; p. 23: "the original article was received in June 1922"; "June 29, Friedman submits his paper" | "[Guth first calls this the publication date, then correctly the date the paper was received.]" | Accurate. Z. Phys. 10, 377 (1922) was received on 29 June 1922. |

Every other historical claim matches the transcript:
- Friedmann was a meteorologist and an expert in PDEs (p. 22).
- He wrote two papers, one on closed and one on open universes (p. 22).
- Einstein's note was received on 18 September 1922 (pp. 22–23).
- Einstein's argument: divergence of $T_{ik}$, then $\partial\rho/\partial x_4 = 0$, then R constant, so only the static solution (p. 23).
- The Bernstein and Feinberg translation (p. 23).
- Friedmann learned of the note from Krutkov in December, and Einstein was travelling (pp. 23–24).
- Krutkov and Einstein met at Leiden, at Lorentz's farewell lecture (p. 24).
- Krutkov's letters to his sister. Guth says she was in "Saint Petersburg", and the page's "Petrograd (now St Petersburg)" fits his own explanation on p. 24.
- The letters of 7 May and 18 May 1923, quoted from Tropp, Frenkel and Chernin (p. 24).
- Einstein's retraction on 31 May 1923, giving Krutkov in person and Friedmann's letter as the reasons (p. 24).
- The draft from Kerszberg's *The Invented Universe* with the crossed-out "physical significance" remark (p. 25).

The page states nothing about the history that the transcript does not support.

## Arithmetic and answer checks
- I recomputed the worked example with CODATA constants and H0 = 67.7 km/s/Mpc:
  - ℓ_P = 1.616e-35 m, so k_max = 6.187e34 m⁻¹ (page: 6.19e34). Correct.
  - u = ħc k⁴/(8π²) = 5.87e111 J/m³ (page: 5.9e111). Correct.
  - The formula itself is right: 2 polarisations × ∫d³k/(2π)³ · ½ħck = ħc k⁴/(8π²).
  - ρ_c = 8.609e-27 kg/m³ (page: 8.61e-27). Correct.
  - u_vac = 0.69 ρ_c c² = 5.34e-10 J/m³ (page: 5.3e-10). Correct.
  - Ratio = 1.10e121, about 121 orders (page: 1.1e121). Correct.
  - With k_max = 2π/ℓ_P: ratio = 1.71e124, about 10^124 (page: "about 10^124"). Correct.
- The page says plainly that the worked example is its own estimate and that Guth quotes only "about 120 orders of magnitude" (p. 16, p. 19). Good. The example is original; Guth gives no numerical calculation.
- Quiz:
  - Q1, answer 1: correct (pp. 13–14).
  - Q2, answer 2: correct (p. 16).
  - Q3, answer 1: correct (pp. 17–18). The explanation matches p. 18.
  - Q4, answer 1: correct (p. 19). The 50-order figure is in the explanation (pp. 19–20).
  - Q5, answer 1: correct (p. 23). The explanation's dates and reasons match p. 24.
- Flashcards: all four agree with the transcript. Planck length 1.6e-33 cm: correct. 10^500 vacua, ± Planck scale, blow apart or collapse on a Planck time scale: pp. 20–21.

## Coverage and order
- The page follows the transcript's order:
  1. Introduction to vacuum energy (p. 13)
  2. Bosonic zero-point energy, box, divergence, Planck cutoff (pp. 13–14)
  3. The two student questions about the box (p. 15)
  4. 120 orders of magnitude (p. 16)
  5. Fermions and the Dirac sea (pp. 16–18)
  6. The cancellation question (pp. 18–19)
  7. Supersymmetry (p. 19)
  8. Higgs (p. 20)
  9. Anthropic selection and the landscape (pp. 20–21)
  10. Einstein and Friedmann (pp. 22–25)
  11. Preview of the horizon problem (pp. 25–28)
- The rest of p. 12 is covered on the companion page `supernova-evidence.mdx` (lecture 20, order 1), which I checked: CMB confirmation of the acceleration, and quintessence. So the two pages together cover the whole lecture.
- Small omissions, all acceptable:
  - Guth's aside that Friedmann's 1922 paper was probably his first physics paper (p. 22).
  - The joking "equation 47 / equation 37" references to the anticommutator (pp. 16, 18).
  - Einstein's references to Friedmann's equations "A", "C", "D" and "8" (p. 23).
  - The photo of Einstein and Krutkov (p. 25).
  - Guth's remark that the flatness problem will be explained next time (p. 28). The page names it but does not explain it, which is faithful.
- Nothing has been added that misrepresents the lecture. The "Later developments" callout is clearly marked as post-2013.

## Licensing
- The transcript is CC BY-NC-SA. Neither the transcript text nor the slide text has any "All rights reserved" or "Courtesy of" notice (grep checked).
- In the lecture Guth shows a photo of Einstein and Krutkov and a photocopy of Einstein's draft taken from Kerszberg's book (p. 25). Neither is on the posted slides, and the page does not reproduce either. Good.
- The transcript reads out long passages from copyrighted English translations: Bernstein and Feinberg, *Cosmological Constants*; Tropp, Frenkel and Chernin. The page paraphrases all of them. The only direct quotations are:
  - "Petrograd's honor is saved!" (four words from Krutkov's letter, attributed to the biography)
  - "even in cosmology" (three words of Guth's)
  - The notation $\partial\rho/\partial x_4 = 0$.
  These are acceptable short quotations. Einstein's crossed-out sentence is paraphrased, not quoted. Good.
- No OpenStax or LibreTexts material. I found no copied paragraphs. The prose is clearly rewritten, and the remaining phrases ("gutsy thing to do", "built from whole cloth", "a significant embarrassment") are short.

## Notes
- leadsTo:
  - Lecture 21, "Problems of the Conventional (Non-inflationary) Hot Big Bang Model": horizon and flatness. Correct.
  - Lecture 22, "The Higgs Field and the Cosmological Magnetic Monopole Problem": Higgs field. Correct by title. I did not read the Lecture 22 transcript.
- The cosmology callout says "Lectures 22 and 23 bring in the Higgs field and inflation, which solves both." This is consistent with the syllabus titles and with Guth's promise on pp. 27–28 that inflation explains the uniformity. Guth does not say in this lecture that inflation solves the flatness problem, but that is standard and is the content of Lecture 23 (not verified from the Lecture 23 transcript).
- The "Later developments" callout (no superpartners found at the LHC; the problem still unsolved; anthropic reasoning controversial) is accurate as of 2026 and clearly separated from what Guth said in 2013.
- Prerequisites `supernova-evidence` and `cosmological-constant` both exist. `supernova-evidence.mdx` is not yet committed to git.
- No errors found. The two warnings (#1, #2) are small fixes.

## Resolution (2026-11-14, by the page author)

- Warning 1: added a bracketed note that Guth says "over 50 years" for the Higgs search, while the field was proposed in 1964 (nearly 50 years before 2012).
- Warning 2: removed the sentence about the inaudible student question.
- Info: the homework remark now says Guth assigned it as a homework problem; the two Formula citations now read "p. 14" without claiming the board.
- Other info items: no change needed.

## Later change (2026-11-15, from the calculation audit, reviews/calc-audit.md)

- The worked example "Checking the 120 orders of magnitude" now says where its inputs come from: Ω_vac = 0.69 and H₀ = 67.7 km/s/Mpc are "Planck 2018 values, rounded" (Planck 2018 gives Ω_Λ = 0.689 and H₀ = 67.66). The calcs entries already marked them `later-data`. No value changed.
