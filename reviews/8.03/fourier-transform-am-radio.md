---
page: content/year-2/8.03/fourier-transform-am-radio.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-14/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec14/ (read; typed notes, 7 PDF pages, page 7 is the OCW credit page; read from rendered page images because the extracted text is garbled)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/9d692cb61a2fe7fde0c5bc7fe58882c8_VGAlyJ7e0IQ.pdf (read; transcript, 19 PDF pages, no printed page numbers, so PDF page = page)
verdict: needs-changes
---

# Review: The Fourier transform and AM radio

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step (b) | (page's own example) u = 2.0 × 10⁸ m/s, so u² = 4.0 × 10¹⁶ m²/s² | "$v_g = u^2k/\omega = (4.0 \times 10^{26} \times 1.0 \times 10^5)/(2.24 \times 10^{13})$" | Write $4.0 \times 10^{16}$. With 10²⁶ the quotient is 1.79 × 10¹⁸, not the stated 1.79 × 10⁸. The calcs file computes the right value but does not cover this displayed intermediate, so `calc:test` passes anyway; consider adding a `shown` check for it. |
| 2 | warning | "Extracting the amplitudes" formula and the bracketed note after the delta formula | Notes p. 3, line 4 of the derivation keeps a stray factor: $\frac{1}{2\pi}\int C(\omega')\delta(\omega-\omega')d\omega' = C(\omega)$ (inconsistent, because the 1/2π has already gone into the δ) | The page's formula correctly drops the 1/2π in that step, and the note says the ½ is wrong "as in the lecture and in the notes' own derivation below it" | The page's maths is right, but it silently differs from the notes there, and the notes' derivation is not fully consistent itself. Extend the bracket, e.g. "(The notes write the first with a factor ½ and keep a stray 1/2π one line before the end of the derivation; the transcript, pp. 8–10, has it right.)" |
| 3 | warning | Worked example problem statement | The notes give only a sketch of the ionic-crystal curve (p. 1) and of v_p, v_g against k and ω (p. 2), with no formula | "(this formula and these numbers are only an illustration)" | Make clear that the formula is not from MIT, e.g. "(the notes give only a sketch; this formula is our own illustration, chosen to have that shape)". The formula $\omega^2 = \omega_b^2 + u^2k^2$ does match the sketch: it starts at $\omega_b$ and approaches $\omega = uk$ from above. |
| 4 | info | AM radio, last paragraph ("The notes list medium-frequency broadcasts ... (notes, p. 6; transcript, p. 18)") | Notes p. 6 list the bands (MF 300 kHz to 3 MHz → skywave; HF 3 to 30 MHz). Transcript p. 18 has only "refracted by atmosphere" and no bands | Both cited for the whole sentence | Fine as it is, since "bent back by the atmosphere" comes from the transcript. Optionally cite the bands to the notes only. |
| 5 | info | "Product of two cosines" / "only two frequencies" | Notes p. 4 and transcript p. 12 both say "two frequencies" | Same | Correct as a statement about the real signal. In the page's complex convention $e^{-i\omega t}$, $C(\omega)$ also has the mirror peaks at $-(\omega_0 \pm \omega_s)$. This is MIT's simplification and needs no change; optional footnote. |
| 6 | info | Ionic crystal paragraph | Notes p. 2: below $\omega_b$, "no propagation or loss ... totally reflected" | Same | Follows the notes. A real ionic crystal also has a lower branch that propagates below the transverse optical frequency; the notes' model is simplified. No change needed. |
| 7 | info | AM history: "Lee dates to around the First World War and wide use in the Second (p. 11)" | Transcript p. 11: "during maybe World War I, and widely used in World War II" | Attributed to Lee | Correctly attributed. AM voice transmission was actually first shown around 1900 to 1906 (Fessenden) and broadcasting began around 1920. The attribution is enough, but a short bracket would help. |
| 8 | info | Carrier formula in prose | Notes p. 4 write the complex carrier as "$e^{i\omega_0 t}$", later (p. 5) $e^{-i\omega_0 t}$; transcript p. 14 says both | Page uses $e^{-i\omega_0t}$ throughout | Consistent and correct; no change needed. |

## Formula citations (checked one by one)
- Phase and group velocity, reading1 p. 1: on notes p. 1 ($v_p = \omega/k$, $v_g = d\omega/dk$, non-dispersive $\omega = vk$, $v_p = v = v_g$). Correct.
- Non-dispersive string $\psi = f(t - x/v)$, reading1 p. 2: notes p. 2. Correct (transcript p. 4 has it on the board too).
- Fourier transform $f(t) = \int C(\omega)e^{-i\omega t}d\omega$, reading1 p. 2: bottom of notes p. 2. Correct.
- Wave in a dispersive medium, reading1 p. 3: top of notes p. 3. Correct.
- Delta function (three formulas), reading2 p. 8: all three are stated on transcript p. 8 (the third finishes on p. 9). Correct. The notes have them on p. 3, the first with the ½ slip.
- Extracting the amplitudes, reading1 p. 3: notes p. 3. Correct apart from the stray 1/2π (row 2).
- AM signal $f_s(t)\cos\omega_0t$, reading1 p. 4: notes p. 4. Correct.
- Product of two cosines, reading1 p. 4: notes p. 4, same order of terms. Correct.
- Dispersion relation near the carrier, reading1 pp. 4–5: Taylor expansion on notes p. 4, $\omega \approx \omega_0 + (k-k_0)v_g$ at the top of p. 5. Correct.
- AM signal in a dispersive medium, reading1 p. 6: notes p. 6 has exactly the factorised integral with $e^{-i\omega_0t}e^{i(\omega_0/v_g + b)x}$ and the final Re[...] result. Correct.
- Prose citations checked against the transcript: "a lot of mathematics" p. 1; two questions pp. 2–3; shaking the string pp. 3–4; mathematics-department friend p. 5; sines and cosines, $i$ absorbed into $C$, p. 5; $k(\omega)$ p. 6; non-dispersive check and dropped $v_p$ subscript p. 7; delta function as a narrowing square p. 8; "10, 20 minutes ... trust them" p. 9; continuous "mode picker" p. 10; WWI/WWII p. 11; "1 kilohertz" and "1.1 to 30 megahertz" p. 12; band $\omega_0 \pm \omega_s$ pp. 12–13; Taylor expansion pp. 13–14; $a$, $b$ p. 14; result pp. 15–17; envelope at $v_g$ and carrier at $\omega_0/k_0$ pp. 15, 17–18; thousands of miles p. 18; simulation pp. 18–19. All correct.
- "which makes sense" is the notes' wording ("Which makes sense!", notes p. 3), not the transcript's. The page cites both, which is acceptable.

## Arithmetic and answer checks
- Worked example: $uk = 2.0\times10^8 \times 1.0\times10^5 = 2.0\times10^{13}$ rad/s. Correct.
- $\omega = \sqrt{1.0 + 4.0}\times10^{13} = 2.236\times10^{13} \approx 2.24\times10^{13}$ rad/s. Correct.
- $v_p = \omega/k = 2.236\times10^8 \approx 2.24\times10^8$ m/s, above $u$. Correct.
- $v_g = u^2k/\omega = 4.0\times10^{16}\times1.0\times10^5/2.236\times10^{13} = 1.789\times10^8 \approx 1.79\times10^8$ m/s, below $u$. Final value correct; the intermediate shows $10^{26}$ instead of $10^{16}$ (row 1).
- $v_pv_g = 2.236\times1.789\times10^{16} = 4.00\times10^{16} = u^2$. Correct. In general $v_pv_g = (\omega/k)(u^2k/\omega) = u^2$ exactly.
- `npm run calc:test -- -k fourier-transform-am`: 11 passed (delta normalisation, cosine identity, quoted bands, $\alpha = 0.1$, example values, $d\omega/dk$ identity, product).
- Quiz Q1 (answer 1, $f(t - x/v)$): correct, explanation correct.
- Quiz Q2 (answer 1, $C = \frac{1}{2\pi}\int f e^{i\omega t}dt$): correct, explanation correct.
- Quiz Q3 (answer 1, narrow band where $\omega(k)$ is almost linear): correct. The distractors are clearly wrong (in particular, $v_g \ne v_p$ in general).
- Quiz Q4 (answer 1, group velocity): correct.
- Flashcards: the transform pair, the dispersive wave integral and the AM result all match notes pp. 2, 3, 6.

## Coverage and order
- The page follows the notes' order: dispersive media → $v_p$, $v_g$ → ionic crystal → long string and Fourier transform → $\psi$ with $k(\omega)$ → non-dispersive check → delta function and $C(\omega)$ → AM radio → Taylor expansion → $a$, $b$ → derivation of the result → bands → simulation (transcript only).
- The ionic-crystal example is in the notes only (pp. 1–2); Lee does not discuss it in the transcript. The page labels it "An example from the notes" and cites only the notes. Good.
- Not covered or only implied: notes p. 5 introduce the window $\omega_0 - \Delta\omega < \omega < \omega_0 + \Delta\omega$ with a sketch of $|C(\omega)|$ and the remark $f(t) = \text{Re}[f_s(t)e^{-i\omega_0t}]$ ("envelope" × "carrier", "This is actually Amplitude Modulation"). The page states the narrow band as $\omega_0 \pm \omega_s$, so nothing is lost, but $\Delta\omega$ is not named (info).
- Transcript p. 2 recap of the beat simulation (red point at $v_p$, green at $v_g$) is summarised in the first paragraph through the link to the previous lecture. Adequate.
- The closing simulation is correctly called a simulation (computer, "MIT wave"), not a demonstration. Lee first shows the non-dispersive case by mistake (p. 18); the page skips this, which is fine.
- Lee's closing line (p. 19) announces the uncertainty principle for next time, which matches the 8.03 Lecture 15 `leadsTo`.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, transcript or OCW page text (searched); the last page of the notes is the standard OCW terms page.
- No MIT figures are reused; the page has no images. No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases: "which makes sense" (notes) and "mode picker" (transcript) are short and attributed. The worked example is the page's own (own formula and numbers), not taken from MIT.

## Forward links
- 8.03 Lecture 15 (uncertainty principle from the Fourier transform): correct; Lee says so on transcript p. 19, and the OCW Lecture 15 title confirms it.
- 8.902 Lecture 15: the site's page for it (`content/year-5/8.902/power-spectrum.mdx`) does decompose the density contrast into Fourier modes $\hat\delta(\vec k)$ with an $e^{\mp i\vec k\cdot\vec x}$ pair and a Dirac delta identity. The "why" is fair and not attributed to anyone in particular. (8.902 uses a 3-D spatial transform with the $(2\pi)^3$ on the other side; that is a convention difference, not an error in this claim.)
- The page has no `<Callout kind="cosmology">`. That is consistent with most 8.03 pages so far, but since a real connection exists (the 8.902 `leadsTo`), a short cosmology callout could be added (info).

## Lecturer slips handled
- ½ instead of 1/2π in the notes' delta formula: noted on the page, correctly (but see row 2 for the second slip in the same derivation).
- "1.1 to 30 megahertz" (transcript p. 12) against "0.1 to 30 MHz" (notes p. 4): the page quotes the notes and gives Lee's words in brackets. Correct handling. (As a matter of fact, broadcast AM in the MF band starts around 0.53 MHz, with longwave AM from about 0.15 MHz, so "0.1" is the better rough figure.)
- Lee drops the $v_p$ subscript (p. 7): noted.
- Notes p. 1 write "$v = v(x)$" where wavelength dependence is meant; the page does not repeat this. Good.

## Notes
- No em dashes found on the page.
- The transcript PDF has 19 pages; the page-per-line text has an empty trailing "p 20" marker, which has no content. All citations use pages 1–19.
- I did not watch the video; whether the cosine product and the formulas were on the board or a prepared sheet is judged from the transcript ("the formula, which I prepare here", p. 12; "documented here", p. 8). This does not affect the citations, which point to the notes or transcript pages where the formulas appear.

## Resolution (2026-11-16, by the page author)

1. Fixed the intermediate step: 4.0 × 10¹⁶ (u²), not 10²⁶; a calcs entry (`ex-vg-step`) now checks that line.
2. The bracket now also notes that the notes' derivation keeps 1/2π after the delta has absorbed it, and that the page follows the lecture.
3. The worked example now says the formula is not from MIT, whose notes give only a sketch.
Info: the MF/HF bands are now cited to the notes only, with Lee's remark on atmospheric bending to transcript p. 18. Others not changed.
