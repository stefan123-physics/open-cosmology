---
page: content/year-2/8.03/dispersion-phase-group-velocity.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-13/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec13/ (read: all 6 pages of the notes PDF as rendered images, plus pdftotext output)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/20e8376dccccf3b761732cf2f0307b65_QxemLb8-5AA.pdf (read: transcript, pp. 1–19, PDF page = page)
verdict: pass-with-notes
---

# Review: Dispersion, phase velocity and group velocity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Stiff string, "Dispersion" paragraph: "In a material, a student points out, molecules can likewise change the speed..." | Transcript p. 9 is mostly inaudible: a student asks something about passing through a medium, then "A molecule can actually change the speed of different wavelengths, actually, differently, right? Very good question." It is unclear whether the student or Lee says the molecule sentence. | Attributes the remark firmly to a student. | Say "in answer to a student's question about a medium (partly inaudible in the transcript), molecules can..." or drop the attribution. |
| 2 | info | Sending information: "whose general travelling solution is $\vec E = E_0\hat y f(z - vt)$" | Notes p. 1: "you will show that in general a progressing wave solution $\vec E = E_0\hat y f(z - vt)$ ... also satisfies Maxwell's equations" (homework claim; in vacuum $v = c$). | Calls it "the general travelling solution". | "a travelling wave of any shape, $\vec E = E_0\hat y f(z - vt)$ with $v = c$, also solves them (notes, p. 1)". Optional. |
| 3 | info | Sending information: "chunks of localised energy ... (transcript, p. 2)" | The phrase "chunks of localized energy" and the 0/1 pulse train sketch are in the notes, p. 1; the transcript p. 2 has the 0/1 receiver explanation. | Cites only the transcript. | Add "notes, p. 1" to that sentence. |
| 4 | info | Stiff string: the odd-derivative aside "(p. 9)" | Asked after the demonstrations (p. 9). Lee also says the fourth-derivative term can be obtained from the next-to-leading order of the coupled-oscillator chain and that the model matches experiment. | Placed earlier, in the model section, with the page number given; the coupled-oscillator remark is omitted. | Acceptable as is (page number shows the position). Optionally add one sentence on the coupled-oscillator origin. |
| 5 | info | Bounded string, last paragraph | Notes p. 5 write "In a dispersive medium $\omega_2 \ne \omega_1$" (slip for $\omega_2 \ne 2\omega_1$); transcript p. 17 says "the difference between omega m is now the constant" (slip for "not constant"). | Gives the correct statements without the slips; does not mention them. | Nothing required (rule 4 asks only for a note when the page differs because of a slip; a bracketed note on the notes' $\omega_2 \ne \omega_1$ could help readers who open the notes). |
| 6 | info | Worked example (b): "which is why piano tuners stretch the octaves" | Not in the lecture or notes. | Stated as fact. | True (inharmonicity and stretch tuning), but not from MIT; could be marked "(not in the lecture)" as other 8.03 pages do. |

No formula or citation errors found. Formula-by-formula:
- "Ideal string" (reading1, p. 1): notes p. 1 show $\partial^2\psi/\partial t^2 = v^2\partial^2\psi/\partial x^2$ and $\omega/k = v = \sqrt{T/\rho_L}$. Correct. (Transcript pp. 2 and 4 has Lee saying "partial t squared" on the right-hand side; spoken slip, not repeated.)
- "Stiff-string wave equation" (reading1, p. 2): matches notes p. 2 exactly, including brackets and the minus sign.
- "Dispersion relation of the stiff string" (reading1, p. 2): notes p. 2, $\omega^2 = v^2(k^2 + \alpha k^4)$, $\omega/k = v\sqrt{1 + \alpha k^2}$. Correct. The sign errors and student corrections are at transcript pp. 5–6, as the page says (page cites pp. 4–6).
- "Two travelling waves" (reading1, p. 2): notes p. 2 bottom. Correct.
- "Sum of two waves" (reading2, p. 11): transcript p. 11 gives sin of the averages times cos of half the differences ("now you calculate A minus B"). Correct; the notes p. 3 indeed write $(A+B)$ in both the identity and the cosine, so citing the transcript and the bracketed remark are right.
- "Phase and group velocity" (reading1, p. 3): notes p. 3, $v_p = \omega/k$, $v_g = (\omega_1 - \omega_2)/(k_1 - k_2) \approx d\omega/dk$. Correct.
- "Bounded stiff string" (reading1, p. 4): notes p. 4, sum of $A_m\sin(k_mx + \alpha_m)\sin(\omega_mt + \beta_m)$, $k_m = m\pi/L$, $\alpha_m = 0$. Correct; the page's note that $\alpha_m$ is a phase, not the stiffness, usefully corrects the notes' "Identical to the ideal string case ($\alpha = o$)", which mixes the two.

Other prose citations checked and correct: votes at transcript p. 4 (five for faster, one for the same, nobody for slower; the rest wait); large $k$ and more restoring force pp. 6–7; demonstration on the wave apparatus pp. 7–8 (pulse widens, wiggles behind the negative pulse, disappears) is correctly called a demonstration; the computer runs ($\alpha = 0.02$, then $0.2$, triangular pulse, MIT-shaped pulse, Gaussian-like end shape) pp. 8–10 are correctly called simulations; "an enemy" p. 9; beats from "Bolek's lecture" p. 10 (Lecture 5, Wyslouch, matches the coupled-pendulums-beats page); student remark on far-apart $k$ p. 12; graph cases pp. 12–16 (non-dispersive pp. 12–13 with its own simulation, curving up pp. 13–14, curving down with "plasma, or some really strange new kind of material" p. 14, maximum pp. 14–15, moonwalk p. 15, four-case simulation pp. 15–16); bounded string pp. 16–18 with the $\pi/2 \to \pi/L$ correction at p. 17; Feynman on water waves and the problem set p. 18; slanted beach wave pp. 18–19.

## Arithmetic and answer checks
- `npm run calc:test -- -k dispersion-phase`: 12 passed.
- Recomputed by hand: $\alpha k^2 = 10^{-4} \times 400 = 0.040$; $v_p = 100\sqrt{1.04} = 101.98 \approx 102.0$ m/s; $d\omega/dk = v(1 + 2\alpha k^2)/\sqrt{1 + \alpha k^2}$ (derivative of $vk\sqrt{1+\alpha k^2}$ checked) $= 108/1.01980 = 105.90$ m/s. Correct.
- (b) $\alpha k_1^2 = 10^{-4}\pi^2 = 0.000987$; $\alpha k_{10}^2 = 0.0987$; $\omega_{10}/\omega_1 = 10\sqrt{1.098696/1.000987} = 10 \times 1.04767 = 10.48$. Correct. Units consistent ($\alpha$ in m², so $\alpha k^2$ is dimensionless).
- Quiz 1 (answer: shorter waves faster): correct; explanation correct.
- Quiz 2 (answer: tangent slope): correct.
- Quiz 3 (answer: carrier forward, envelope backwards): correct past the maximum ($d\omega/dk < 0$, $\omega/k > 0$).
- Quiz 4 (answer: the mode frequencies): correct; matches notes p. 4 points 1 and 2.
- Flashcards: all three correct; the sum formula uses the difference in the cosine.
- Calcs file nit (info): `group-velocity-limit` uses the page's own example numbers but is marked `origin: mit`, and `ex-ak2`/`ex-vp` cite the notes; harmless, but `origin: page-own` would be more accurate for the first.

## Coverage and order
- The page follows the lecture's order: reminder and sending information, ideal string, stiff string and dispersion relation, demonstration and simulations, two waves and beats, $v_p$ and $v_g$, graph cases with the moonwalk, bounded dispersive string, water waves and faster-than-light phase velocity. The only reordering is the odd-derivative question (finding 4), which is labelled with its page.
- Every notes section (pp. 1–5) is covered, including Maxwell's equations recap, $\vec E = E_0\hat y f(z - vt)$, the square-pulse-to-bump sketch, the four $\omega(k)$ graphs and the LCM return time.
- Omitted (minor): the simulation's component count ("1 to 199"/"1 until 99", p. 8, garbled), the coupled-oscillator origin of the $\partial^4$ term (p. 9), and Lee's remark that a real bounded apparatus never returns to its initial shape (p. 18; the page's "if ever" covers the idea).
- Added: the worked example (original numbers and situation) and the piano-tuning remark (finding 6).
- The OCW page also links a "Problem solving help" resource (mit8_03scf16_hw_lec13), not used by the page; not required.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, transcript or OCW lecture page (grep and visual check of all note pages). The notes' last page is only the OCW citation/terms page.
- The page reuses no images; it has no diagrams.
- Text is rewritten; quoted fragments ("an enemy", "doing the moonwalk") are short and attributed. No OpenStax or LibreTexts material.
- The worked example is original, not taken from the notes or lecture.

## Notes
- `leadsTo` Lecture 14 ("Fourier transforms build any pulse from harmonic waves; AM radio puts information on an envelope") is correct: the Lecture 14 notes introduce the Fourier transform and AM radio with an envelope moving at $v_g$ and a carrier.
- The page has no `Callout kind="cosmology"` and no cosmology `leadsTo`. Rule 6 asks for one only where a real connection exists; none is claimed, so nothing is wrong. (Possible later link: dispersion of radio pulses by plasma, though it is not in 8.286.)
- Prerequisites (electromagnetic-waves, Lecture 12; coupled-pendulums-beats, Lecture 5) are apt. No em dashes on the page.
- The water-wave geometry (crest-shoreline intersection speed $v/\sin\theta \to \infty$ as $\theta \to 0$) is described correctly and matches Lee's "decrease theta to 0" (p. 18).

## Resolution (2026-11-16, by the page author)

1. The remark about molecules is no longer attributed to a student ("in a partly inaudible exchange").
2. The notes' travelling solution is now "a progressing wave of any shape, such as …".
3. The pulses sentence now also cites notes p. 1.
4. The odd-derivative remark now says "when asked later" and mentions the coupled-oscillator chain.
5. Both slips (notes' ω₂ ≠ ω₁, transcript's "is now the constant") are noted in a bracket.
6. The piano-tuner remark is marked as not in the lecture.
Calcs: `group-velocity-limit` now has origin page-own.
