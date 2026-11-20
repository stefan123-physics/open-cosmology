---
page: content/year-3/8.044/polyatomic-gases.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l14/ (read: the 24-page slide PDF mit8_044s13_l14.pdf; every page checked as an image, l14-01.png … l14-24.png, because the text extraction is garbled)
  - mit8_044s13_l15.pdf (read: slides L15B1–L15B2 as images, to check the leadsTo claim about Lecture 15)
  - calcs/8.044/polyatomic-gases.yaml (read; numbers recomputed independently in Python, the suite itself not run)
verdict: needs-changes
---

# Review: Polyatomic gases

Slide numbering (checked on the images): PDF pages 1–8 = L14B1–B8; PDF 9 = L14B9a; PDF 10 = L14B9b; PDF 11–18 = L14B10–B17 (PDF 15 is printed "L14B214", a typo for 14); PDF 19 = L14B18a; PDF 20 = L14B19a; PDF 21–23 = L14B20–B22; PDF 24 = the OCW notice page. There is no 18b or 19b. The page cites these printed labels, and its opening sentence describes the numbering correctly.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Vibration", formula "Distribution of quanta", `at="slide 6"` | $p(n) = (1 - e^{-\hbar\omega/kT})(e^{-\hbar\omega/kT})^n = (1-b)b^n$ is the bottom line of **slide 5**; $\langle n\rangle = b/(1-b) = 1/(e^{\hbar\omega/kT}-1)$ is slide 6. | Cites the whole two-part formula to slide 6. | `at="slides 5–6"` (the sentence before it already says "slides 5–6"). |
| 2 | warning | `leadsTo` Lecture 15: "More applications of the canonical ensemble." | Lecture 15 is "Black-body radiation" (`_course.json` syllabus); its slides open with "Thermal Radiation: radiation in thermal equilibrium with its surroundings" (L15B1) and the spectrum $u(\nu,T)$ peaking near $h\nu = 3k_BT$ (L15B2). | A generic reason that does not name the topic. | Say what actually leads on, e.g. "Thermal radiation: each mode of the field is a quantum oscillator with this Bose–Einstein mean occupation, giving the black-body spectrum." |
| 3 | info | "Altogether" paragraph: "the slides write these as $C_V$ with a bar and subscript" | Slides 17, 18a and 19a write $C_V\vert_{\text{rot}}$, $C_V\vert_{\text{CM}}$, $C_V\vert_{\text{vib}}$: a **vertical** evaluation bar with a subscript. | "with a bar": a reader may picture an overbar. | "(the slides write $C_V\vert_{\text{rot}}$ and so on)" or "with a vertical bar and subscript". |
| 4 | info | "Classical or quantum?": "the vibrational $1.32\times10^{14}$ Hz to about 6320 K" | Slide 3: "$1.32\times10^{14}$ Hz → 6,320 K". | Quotes the slide. | $h\nu/k$ with $\nu = 1.32\times10^{14}$ Hz is 6335 K, not 6320 K (the slide presumably used an unrounded frequency). Harmless; optionally "about 6300 K". The calcs entry `H2-vib-temp` passes only because of its tolerance of 20 K. |
| 5 | info | Same paragraph: rotation "$h\nu/k \approx 175$ K" | Slide 3 as quoted. | Same. | Correct as quoted. Note for readers (not on the slide, from standard data, quoted from memory): 175 K is the $l = 0 \to 1$ gap, $2\Theta_R$; hydrogen's $\Theta_R$ itself is about 88 K. The page never calls 175 K $\Theta_R$, but once $\Theta_R$ is defined a reader might; an optional bracket "(this is the $l = 0 \to 1$ gap, $2\Theta_R$)" would prevent it. |
| 6 | info | "Vibration", first paragraph | Slide 4 writes $\mathcal H_{\text{vib}} = \sum_{i=1}^{n_v}\left(\tfrac12K_ia_i^2 + \tfrac12\frac{K_i}{\omega_i^2}\dot a_i^2\right)$, the sum over normal modes. | States only "each vibrational mode is a one-dimensional harmonic oscillator". | Optional: add the normal-mode Hamiltonian in words or as a formula (cite slide 4); it is the reason the modes are independent oscillators. |
| 7 | info | "Altogether": "the centre-of-mass part ($\frac32Nk$)" | Slide 19a gives no value, only "all $T$". | Adds $\frac32Nk$. | Correct physics (equipartition, earlier lectures); fine. |
| 8 | info | "Vibration": "the **energy-gap** behaviour of any system with a gap above its ground state" | Slide 9a: "(energy gap behavior)"; no generalisation. | Generalises. | Correct; fine. |
| 9 | info | Whole page, notation | Slides: # for the number of atoms, script $\mathcal H$, $C_V\vert_{\text{rot}}$ etc., $\langle E\rangle$ on slide 12 next to $\langle\epsilon\rangle$ elsewhere. | $n_a$ (stated), $H$, $C_{\text{rot}}$, $C_{\text{vib}}$, $C_{\text{CM}}$ (stated, see #3), keeps $\langle E\rangle$ for slide 12. | Consistent with the slides and with earlier 8.044 pages. Fine. |

## Formula citations (all checked against the slide images)
- Degrees of freedom $3n_a = 3 + n_r + n_v$: slide 1 (written $3\# = 3 + n_r + (3\# - 3 - n_r)$). Correct.
- Oscillator levels $\epsilon_n = (n+\frac12)\hbar\omega$, $n = 0,1,2,\dots$, non-degenerate: slide 4. Correct.
- Distribution of quanta: partly wrong, see #1.
- Vibrational heat capacity $C_V = N\,\partial\langle\epsilon\rangle/\partial T = Nk(\hbar\omega/kT)^2e^{\hbar\omega/kT}/(e^{\hbar\omega/kT}-1)^2$: slide 9a. Correct (the slide's subscript $V$ on the derivative is dropped; harmless).
- Rotational levels $\epsilon_l = (\hbar^2/2I_\perp)l(l+1) = k\Theta_Rl(l+1)$, $\Theta_R = \hbar^2/2I_\perp k$: slide 15. Correct.
- Rotational partition function $Z_R = \sum_l(2l+1)e^{-l(l+1)\Theta_R/T}$: slide 16. Correct.
- Low-temperature $C_{\text{rot}} \approx 3Nk(2\Theta_R/T)^2e^{-2\Theta_R/T}$: slide 17. Correct.
- Rotational Raman shift $\Delta\nu = -(k\Theta_R/h)[(l+2)(l+3) - l(l+1)] = -(4l+6)k\Theta_R/h$: slide 21. Correct, sign included.
- In-text claims: $Z = Z_1^N/N!$ (slide 1); classical/quantum and $H = H_{\text{CM}} + H_{\text{vib}} + H_{\text{rot}}$ (slide 3); $\langle n\rangle \to e^{-\hbar\omega/kT}$ (slide 6); $\langle n\rangle \approx kT/\hbar\omega - \frac12$, $\langle\epsilon\rangle \to kT$ and $\to \frac12\hbar\omega$ (slide 7, with the plots on slide 8); high-$T$ limit $Z_1 \approx kT/\hbar\omega \propto \beta^{-1}$ (slide 10), $Z_{\text{vib}} \propto \beta^{-N}$, $U_{\text{vib}} = NkT$, $C_{\text{vib}} = Nk$ (slide 11); low-$T$ $p(1)$, $\langle E\rangle = \frac12N\hbar\omega + N\hbar\omega e^{-\hbar\omega/kT}$, $C_V$ (slide 12); $L^2$ and $L_z$ eigenvalues, $2l+1$ values of $m$ (slide 13); linear molecule $I_3 = 0$, $I_1 = I_2 = I_\perp$, $H_{\text{rot}} = L^2/2I_\perp$ (slide 14); $Z_R \approx 1 + 3e^{-2\Theta_R/T}$, $\langle\epsilon\rangle \approx 6k\Theta_Re^{-2\Theta_R/T}$ (slide 16); sum to integral (slide 17), $x = (l^2+l)\Theta_R/T$, $dx = (2l+1)(\Theta_R/T)\,dl$, $Z_R \approx T/\Theta_R$, $\langle\epsilon\rangle = kT$, $C = Nk$ (slide 18a); sum of the three heat capacities (slide 19a); $\Delta\epsilon = h(\nu_i - \nu_f)$ and selection rules (slide 20); $\Delta l = \pm2$, spacing $4k\Theta_R/h$, $I \propto (2l+1)e^{-l(l+1)\Theta_R/T}$ (slide 21); rise and fall of the spectrum from degeneracy against Boltzmann factor (slide 22). All correct and correctly attributed.

## Degrees-of-freedom table (against slide 2)
- Slide 2 columns: Monatomic Xe 3/0/0/3; Diatomic HS 3/2/1/6; Linear tri. CO₂ 3/2/4/9; Non-linear tri. H₂O 3/3/3/9. The page's table matches every number and every molecule label (the slide indeed says "HS"). The slide has no row labels; the page's labels (centre of mass, rotation, vibration, total) follow from slide 1 and are right.

## Heat-capacity plot (against slide 9b)
- Oscillator curve $x^2e^x/(e^x-1)^2$, $x = 1/t$, $t = kT/\hbar\omega$: the slide 9a formula in units of $Nk$. At $t = 3$ it is 0.991, approaching the dashed line at 1 as on the slide.
- Two-level curve $x^2e^x/(e^x+1)^2$: the $g = 1$ two-level heat capacity with gap $\hbar\omega$ (Lecture 13). Recomputed peak: 0.439 at $t = 0.417$. Slide 9b's red curve, measured on the image, peaks at about 0.43 at $kT/\hbar\omega \approx 0.42$ and has the same long tail. Match.
- Both curves share the low-$T$ form $x^2e^{-x}$, so "rises the same way at first" is right. Domain 0.05–3 matches the slide's axis (0–3); range 0–1.15 contains both curves. No overflow at $t = 0.05$ ($e^{20}$).

## Arithmetic and answer checks
(Recomputed in Python with $h = 6.62607\times10^{-34}$ J s, $k = 1.380649\times10^{-23}$ J/K.)
- Slide 3: $h(3.65\times10^{12})/k = 175.2$ K ≈ 175. Correct. $h(1.32\times10^{14})/k = 6335$ K, slide and page 6320 (see #4).
- (a) $4000/300 = 13.333$ ≈ 13.33; $1/(e^{13.333}-1) = 1.6196\times10^{-6}$ ≈ 1.62e-6. Correct.
- (b) $13.333^2e^{13.333}/(e^{13.333}-1)^2 = 2.879\times10^{-4}$ ≈ 2.9e-4. Correct.
- (c) $T/\Theta_R = 20$; $2.5 \times 8.314 = 20.785$ ≈ 20.8 J/(K mol). Correct; the vibrational ($2.9\times10^{-4}R$) and the high-$T$ rotational correction (of order $(\Theta_R/T)^2/45 \approx 6\times10^{-5}$) are negligible.
- (d) $4k(15)/h = 1.2502\times10^{12}$ Hz ≈ 1.250e12. Weights $(2l+1)e^{-l(l+1)/20}$: $l = 0$: 1.00, 1: 2.71, 2: 3.704, 3: 3.842, 4: 3.311, 5: 2.45. Maximum at $l = 3$. Correct.
- "Close to hydrogen chloride": HCl has $\Theta_R \approx 15.2$ K and a vibrational temperature of roughly 4150–4300 K depending on whether the fundamental or harmonic frequency is used (standard data, quoted from memory, not fetched). The phrase is fair.
- calcs/8.044/polyatomic-gases.yaml: every number on the page has an entry with matching expected values, plus identities for $\langle n\rangle$, $C_{\text{vib}}$, low-$T$ $C_{\text{rot}}$ and the high-$T$ integral. Minor: the `mean-n` entry's `where` says "summed to n = 400" but its formula is the closed form $(1-b)b/(1-b)^2$, so it checks only the algebra $b/(1-b) = 1/(e^x-1)$, not the series. Optional: make the formula an actual sum, or reword the `where`. Suite not run here.
- Quiz 1: answer 0 ("3"): $9 - 3 - 3 = 3$. Correct; CO₂ $9 - 3 - 2 = 4$ in the explanation is correct.
- Quiz 2: answer 0, $1/(e^{\hbar\omega/kT}-1)$. Correct (slide 6); the $+1$ distractor is the Fermi form, wrong as intended.
- Quiz 3: answer 0, $3Nk(2\Theta_R/T)^2e^{-2\Theta_R/T}$. Correct (slide 17).
- Quiz 4: answer 0, $4k\Theta_R/h$. Correct; $(4(l+1)+6) - (4l+6) = 4$.
- Flashcards 1–3: correct (slides 1–2; 5, 6, 9a; 15, 18a).

## Coverage and order
- The page follows the slide order 1 → 22 throughout; nothing is moved.
- Left out or only described in words: slide 4's normal-mode Hamiltonian (#6); the summation steps of slide 5 (summarised as "a geometric series"); the sketches of $p(n)$ (slide 6) and $\langle n\rangle$, $\langle\epsilon\rangle$ (slide 8); the level picture of slide 10 ("$\Delta\epsilon$ contains $\Delta\epsilon/\hbar\omega$ states"); $p(l,m) = e^{-l(l+1)\Theta_R/T}/Z_R$ (slide 16); the level diagram of slide 15 ($0, 2, 6, 12, 20\,\Theta_R$ with degeneracies 1, 3, 5, 7, 9); the spectrum figure of slide 22. None of these omissions loses a result. Optional: a generated stick spectrum from $(2l+1)e^{-l(l+1)\Theta_R/T}$ at the worked example's $T/\Theta_R = 20$ would replace slide 22's figure without reusing it.
- Added: the $\frac32Nk$ value (#7), the worked example (own numbers and situation, not on the slides), the two-level comparison curve in the plot (the slide shows the same comparison).
- No `Callout kind="cosmology"` on the page. Optional: the Bose–Einstein occupation of an oscillator leads directly to the black-body spectrum (Lecture 15) and thence to the CMB in 8.286; a cosmology callout and an 8.286 `leadsTo` would be fair.

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text file found none, and every slide image was inspected (the molecule drawings on slide 2, the diagrams on slides 9b, 10, 11, 14, 15, 20, 22 carry no credit). Only the standard OCW notice on PDF page 24.
- No figures reused: the heat-capacity graph is generated from formulas, the slide 2 table is reproduced as numbers (facts), and the other diagrams are described in words.
- No OpenStax or LibreTexts material.
- Wording is rewritten. Closest to the slides: "which changes occur is set by selection rules from symmetry and quantum mechanics" (slide 20: "which energy level changes occur depend on selection rules governed by symmetry and quantum mechanics"), "Classically it takes three numbers; quantum mechanically, only its magnitude and one component" (slide 13: "CLASSICAL, 3 numbers … QUANTUM, 2 numbers: magnitude and 1 component") and "rotation switches on at modest temperatures, and vibration only at the highest" (slide 19a labels "appears at modest $T$", "only at highest $T$"). All are short clauses of standard content; acceptable, though the slide 20 one is the closest and could be reworded (e.g. "symmetry and quantum mechanics decide which transitions are allowed").
- No em dashes (—) in the page (grep found none; "Bose–Einstein", "slides 1–22" use en dashes).

## Notes
- The page's own example constants ($\Theta_R = 15$ K, $\hbar\omega/k = 4000$ K) are clearly marked as approximate ("close to hydrogen chloride"), which is appropriate.
- Fix #1 (and preferably #2) before setting `status: reviewed`.

## Resolution (2026-11-17, by the page author)

- Error 1: "Distribution of quanta" now cites slides 5–6.
- Warning 2: the Lecture 15 `leadsTo` now names black-body radiation and the Bose–Einstein occupation of each cavity mode.
- Info: the notation note now describes the vertical evaluation bar; hydrogen's 175 K is identified as the l = 0 → 1 gap, 2Θ_R; the 6320 K figure now carries the direct value 6335 K; the calcs `mean-n` description now says it checks the closed form. The vibration Hamiltonian, the Raman stick spectrum and a cosmology callout are left out (the next lecture's page carries the cosmology link).
