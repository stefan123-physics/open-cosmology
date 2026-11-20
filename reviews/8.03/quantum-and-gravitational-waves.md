---
page: content/year-2/8.03/quantum-and-gravitational-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-23/ (read: saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec23/ (read: typed notes, 7 pages, read from rendered page images because the text layer is unreliable; p. 7 is the OCW credit page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/f5b4f81217c2498516cce20e1da8e5c6_Roj7FVjl-gw.pdf (read: transcript, 19 pages of text; no printed page numbers, so PDF page = page)
  - OCW "Handwritten Notes for Lecture 23" (not read; the page does not cite them)
verdict: pass-with-notes
---

# Review: Quantum waves and gravitational waves

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Gravitational waves, LIGO paragraph: "both recorded the same signal, a few milliseconds apart" | Transcript p. 18: the two curves are "time-shifted" because the sites are 3,000 km apart. Lee gives no figure. | "a few milliseconds apart" | The figure is correct (about 7 ms for GW150914, and at most about 10 ms at light speed over 3,000 km), but Lee does not give it. Either write "slightly apart in time" or keep it and add a short note that the number is not from the lecture (light needs about 10 ms to cross 3,000 km). |
| 2 | warning | Last sentence of the LIGO paragraph: "not the end of vibrations and waves but just the beginning" (notes, p. 6; transcript, p. 18) | Notes p. 6: "This is not the end of waves and vibrations but just the beginning!!!" Transcript p. 18: "this is really not the end of vibration of waves ... Instead, this is actually just the beginning." | The text in quotation marks matches neither source word for word (the notes say "waves and vibrations"). | Quote the notes exactly ("not the end of waves and vibrations but just the beginning") or remove the quotation marks. |
| 3 | info | Light as particles: "(transcript, p. 3; Lee writes $\hbar$ for $h$)" | Transcript p. 3: Lee *says* "h bar mu minus phi". The notes (p. 3) write $E = h\nu$ correctly. Nothing shows that he wrote $\hbar$ on the board. | "Lee writes $\hbar$ for $h$" | Change to "Lee says 'h bar' for $h$". The point of the note (do not repeat the slip) is right. |
| 4 | info | Light as particles: "Hertz found that electrons are knocked out ..." | Transcript p. 2: Lee credits the observation to Hertz in these words. | Says it as a fact. | Historically, Hertz (1887) saw that ultraviolet light made sparks jump more easily; electrons were identified only in 1897, and Lenard did the electron measurements. Consider "Lee credits Hertz with the discovery ..." or "Hertz found that light of high frequency makes charge escape more easily". This is optional. |
| 5 | info | Two-slit formula | Transcript p. 5 says "2 squared root of I-1 plus I-2" (a spoken slip). Notes p. 2 (handwritten figure) give $2\sqrt{I_1I_2}\cos\delta$. | Follows the notes and cites them. | Correct as written. A short bracket about the spoken slip is optional (writing rule 4), because the cited notes are right. |
| 6 | info | LIGO paragraph: "dancing graduate students" in quotation marks | Transcript p. 17: "dancing of the graduate students". | Not word for word. | Remove the quotation marks or quote exactly. |
| 7 | info | Single slit: "$k_x$, the sideways momentum, exactly zero" | Transcript p. 9 / notes p. 4: $C(k_x)$ becomes $\delta(k_x)$, and the momentum in the x direction is 0. | Calls $k_x$ the momentum. | $k_x$ is a wave number, and the momentum is $\hbar k_x$. Write "$k_x$, and so the sideways momentum $\hbar k_x$, exactly zero". |
| 8 | info | "The missing wave equation" cited as notes, p. 6 | The notes ask "What is still missing: 'Wave equation'" at the foot of p. 5. The equation itself is on p. 6. | notes, p. 6 | Cite "notes, pp. 5–6". |

Formula citations checked:
- Electrons through two slits: notes p. 2 (handwritten figure, $I_{12} = |\psi_1+\psi_2|^2 = I_1+I_2+2\sqrt{I_1I_2}\cos\delta$). Correct.
- Infinitely wide slit, $C(k_x) \propto \int_{-D/2}^{D/2} e^{-ik_xx}dx$, $D\to\infty \Rightarrow C \to \delta$: notes p. 4. Correct. The sign of the exponent matches the notes.
- Normal modes in a box: notes p. 5 ($\psi(0)=\psi(L)=0$, $\psi_m = A_m\sin(k_mx)$, $k_m = m\pi/L$, $e^{-i\omega_mt}$, $m = 1,2,3,\ldots$). Correct.
- Schrödinger's equation: notes p. 6. Correct.
- Dispersion relation $\hbar\omega_m\psi_m = \hbar^2k_m^2\psi_m/2m$, $\omega = \hbar k^2/2m$: notes p. 6. Correct.
- Group velocity $v_g = d\omega/dk = \hbar k/m = p/m$: notes p. 6. Correct.

Prose citations checked against the transcript and found correct: Moon spot "as large as the whole Missouri state" (p. 1; the notes, p. 1, give a radius of 240 km); waves of matter and vector fields, two more kinds (p. 2); photoelectric effect, Einstein, Nobel 1921 (pp. 2–3); bullets and electrons (pp. 4–5); light, dimmer light, longer wavelength (pp. 5–8); conclusion and the uncertainty principle (p. 8); single slit (pp. 8–9); $P \propto |\psi|^2$, "one of the most crazy results" (p. 9); hidden variables and overturning quantum mechanics (p. 10, continuing on p. 11; notes p. 4: "If you can, quantum mechanics has to be discarded"); box, $m = 1$ and $m = 2$ probabilities (pp. 11–12); Feynman's remark (p. 12; notes p. 6 attribute it to the Feynman Lectures). The page paraphrases this remark and does not quote it at length, as required. Also checked: de Broglie and group velocity (p. 13); wave packet and AM radio (pp. 13–14); Standard Model, Higgs to two Z, LHC, quark-gluon plasma about a microsecond after the Big Bang (pp. 14–15); everyone generating gravitational waves, and Einstein thinking detection perhaps impossible (pp. 15–16); stretch and squeeze of a ring (p. 16); LIGO simulation of about 30 solar masses (p. 16), described correctly as a simulation by the LIGO collaboration and kept apart from the detected data on pp. 17–18.

GW150914 facts as quoted by Lee: first observed 14 September 2015 (p. 17); announced 11 February, "earlier this year" (p. 18; the lecture is from Fall 2016, so 2016 is right); Hanford and Livingston, 3,000 km apart (pp. 17–18); arms of four kilometres (p. 17); 29 and 36 solar masses (p. 18); about 1.3 billion light years (p. 18). All match the page. LIGO "built by MIT, Caltech and many others": the transcript says "designed" (p. 16). This is acceptable.

## Arithmetic and answer checks
- Worked example (a): $\hbar^2\pi^2/(2mL^2) = (1.055\times10^{-34})^2 \times 9.8696 / (2 \times 9.11\times10^{-31} \times 10^{-18}) = 1.0985\times10^{-67}/1.822\times10^{-48} = 6.03\times10^{-20}$ J. Dividing by $1.602\times10^{-19}$ gives 0.376 eV, which rounds to 0.38 eV. Correct. $\omega_2/\omega_1 = (k_2/k_1)^2 = 4$. Correct. The remark "unlike a string's, the modes are not equally spaced" is correct, because a string has $\omega \propto k$.
- Worked example (b): $p = 9.11\times10^{-31}\times10^6 = 9.11\times10^{-25}$ kg·m/s; $\lambda = h/p = 6.63\times10^{-34}/9.11\times10^{-25} = 7.28\times10^{-10}$ m, which rounds to $7.3\times10^{-10}$ m. Correct. The speed is non-relativistic, so $p = mv$ is fine. Comparing the result with atomic spacings is fair.
- Notes p. 1 check (not quoted on the page): $1.22 \times 5\times10^{-7}/10^{-3} = 6.1\times10^{-4}$, and $\times\,4\times10^8$ m gives about 240 km. Consistent with the notes.
- Quiz 1: answer 1 ($I_1 + I_2$, no interference). Correct (notes p. 3; transcript p. 6).
- Quiz 2: answer 1. Correct (notes p. 3; transcript p. 7).
- Quiz 3: answer 1 ($p/m$). Correct; the derivation in the explanation is right.
- Quiz 4: answer 1. Correct. The explanation (set for complete cancellation, light appears) matches transcript p. 17.
- Flashcards: all three are correct.
- `npm run calc:test -- -k quantum-and-grav`: 11 passed. The calcs file has no `fact` entries for 1.3 billion light years or for the dates 14 September 2015 and 11 February 2016 (optional to add). The `schrodinger-dispersion` check only tests $\psi_{xx} = -k^2\psi$, not the full substitution. That is weak but not wrong.

## Coverage and order
- The page follows the lecture's order: recap of diffraction, the two kinds of waves met so far, photoelectric effect, bullets and electrons through two slits, thought experiments with light (normal, dim, long wavelength), uncertainty principle, single slit, probability and hidden variables, particle in a box, Schrödinger's equation, dispersion relation, de Broglie and group velocity, living with probability (Standard Model, LHC, quark-gluon plasma), gravitational waves, LIGO, GW150914, closing remark.
- Left out (minor): the numbers in the notes' recap on p. 1 (λ = 500 nm, D = 1 mm, θ ≈ 6×10⁻⁴, a spot of radius 240 km; the page gives only the qualitative "Missouri" remark), and the animation of the real and imaginary parts of ψ oscillating (transcript p. 14). Neither is essential.
- Added: the worked example (original) and the cosmology callout. The page numbers Lee's four experiments as three items in a list, because experiment 1 (no light) is covered in the section before. This is clear.

## Licensing
- The typed notes, transcript and OCW page carry no "All rights reserved" or "Courtesy of" notices (checked by text search and by viewing the notes images). The handwritten notes were not checked, and the page does not use them.
- No OpenStax or LibreTexts material.
- No copied paragraphs. The short quoted phrases ("as large as the whole Missouri state", "one of the most crazy results in physics", "disturbed") are acceptable. See findings 2 and 6 for two quotations that are not word for word.
- The worked example (electron in a 1 nm box, de Broglie wavelength at 10⁶ m/s) is not in the MIT material and is original.
- The LIGO simulation and data plots shown in the lecture are not reproduced. The page only describes them.

## Notes
- Cosmology callout: "Inflation predicts a faint background of primordial gravitational waves ... (a later development: none had been detected by the mid-2020s)". This is consistent with the 8.286 pages: exponential-expansion.mdx (l. 149: BICEP2 2014 announcement explained by dust, r < 0.036 from BICEP/Keck 2021), inflation-solutions.mdx (l. 120) and inflation-overview.mdx (l. 150) all say that primordial gravitational waves have not yet been detected. The non-detection is correctly marked as a later development. The lecture-era claim (many inflation models predict the background) is fair, but "Inflation predicts" is slightly stronger than the 8.286 pages ("predicted by many inflation models", "if inflation happened near the GUT scale"). Optional: "Many models of inflation predict ...".
- The statement that gravitational waves pass through matter almost freely and could carry information from before the CMB is standard and correct. The quark-gluon plasma sentence matches Lee (transcript p. 15).
- leadsTo 8.286 Lecture 23: the 8.286 Lecture 23 pages (inflation-solutions, exponential-expansion) exist and do discuss primordial gravitational waves, in their notes on later developments. The `why` "one of its most sought-after signatures" is fair. Uncertain: I did not check whether Guth himself mentions gravitational waves in the Lecture 23 transcript. The 8.286 pages present it as a post-lecture development, so attributing it to "8.286 Lecture 23" rather than to Guth is acceptable.
- The link to `/courses/8-286/cmb-spectrum` and the 8.03 links (diffraction-resolution, phased-radar-electron-interference, uncertainty-principle-2d-waves, standing-waves-fourier-series, dispersion-phase-group-velocity, fourier-transform-am-radio) all point to existing files.
- The page warns that $m$ means the mass in Schrödinger's equation, not the mode number. This is good, since the notes use $m$ for both.
- No em dashes were found in the page text I read.

## Resolution (2026-11-16, by the page author)

1. "a few milliseconds apart" replaced by "shifted slightly in time", as Lee puts it.
2. The closing words are no longer a quotation; they paraphrase the notes, p. 6.
Minor notes: "Lee says 'h bar' for h"; the Hertz account attributed to Lee; the dancing-students remark paraphrased; the sideways momentum written ħk_x; the missing wave equation cited to notes pp. 5–6; "many models of inflation predict" in the callout and the leadsTo. The spoken √(I₁ + I₂) slip is not mentioned (the page follows the notes).
