---
page: content/year-3/8.044/zero-point-energy-fluctuations.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l21/ (read: the 23-page slide PDF mit8_044s13_l21.pdf; the text extraction is garbled, so every slide with a formula or figure was checked as an image, l21-01.png … l21-23.png)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l22/ (read in part, as text, to check the Lecture 22 claim)
  - content/year-3/8.044/_course.json (read, Lecture 11, 21 and 22 entries)
  - content/year-3/8.044/heat-engines-carnot.mdx and grand-canonical-ensemble.mdx (read in part, for the cross-references to Lectures 11 and 18)
  - calcs/8.044/zero-point-energy-fluctuations.yaml (read; every number recomputed independently in Python, the suite itself not run)
verdict: pass-with-notes
---

# Review: Zero-point energy, fluctuations and surprises

Slide numbering (checked on the images): PDF pages 1–2 = L21B1–B2; 3–7 = B3a–B3e; 8–10 = B4a–B4c; 11–16 = B5–B10; 17 = L18B19 (a repeat of a Lecture 18 slide); 18–21 = B11–B14; 22 = two video links ("Watch the video: Critical opalescence", "Critical point and critical opalescence"); 23 = B15; the last page is the standard OCW notice. The page cites the printed labels 1–15 with 3a–3e and 4a–4c, which is correct. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Counter-intuitive results", "Only the first is guaranteed" | Slide 15 asks: "Increasing the force/pressure causes the length/volume to decrease?" The slide gives no answer. | Rephrases as "Does increasing the force or pressure always make the length or volume decrease?" and answers that only this one is guaranteed, justified by $\kappa_T > 0$. For a **tension** (wire, rubber band) the stable response is the opposite: increasing $F$ lengthens it, $(\partial L/\partial F)_T > 0$ (the page's own Lecture 11 rubber band obeys this). The fluctuation argument also covers only $\kappa_T$ (a fluid's volume), not a wire. As written a reader may conclude that pulling harder shortens a wire. | State the guaranteed result precisely, e.g. "a system always yields to the force applied to it: higher pressure means smaller volume ($\kappa_T > 0$, as the fluctuations above require), and higher tension means a longer wire." |
| 2 | warning | End of page (no cosmology callout; `leadsTo` only 8.044 L22) | n/a (writing rule 6) | No `Callout kind="cosmology"`. A real connection exists: the zero-point energy $\frac12\hbar\omega$ of every mode, shown here to be physically real, is exactly what makes the vacuum energy of quantum fields so large in 8.286 Lecture 20 (`vacuum-energy-puzzle`), and it appears in 8.286 Lecture 16 (`black-body-radiation`). | Recommended: a short cosmology callout plus `leadsTo` to 8.286 Lecture 20, stated as this page's own connection, not Greytak's. |
| 3 | warning | "Fluctuations", first paragraph; "Lithium-6 and lithium-7" | Slide 10: "We have often argued that the fluctuations in the thermodynamic variables are very small. That is generally true, but we will see that in rare instances they can become so large that they dominate the behavior of the system." Slide 9: "At T = 0 the lattice spacing of 6Li is observed to be about 0.07% larger than that for 7Li." | "The course has often argued that fluctuations of thermodynamic variables are negligible. That is usually true, but in rare cases they become so large that they dominate" and "at $T = 0$ the lattice spacing of lithium-6 is observed to be about 0.07% larger than that of lithium-7". Both follow the slide sentences word for word in structure, with only synonyms swapped. | Rewrite, e.g. "Earlier lectures treated fluctuations as negligible, and for ordinary systems they are. There are rare exceptions where they take over (slide 10)." and "Measured at absolute zero, lithium-6's lattice is wider than lithium-7's by roughly 0.07%." |
| 4 | info | Formula "Equilibrium volume of a crystal", `at="slide 8"` | The first equality, $(\partial\phi/\partial V)_T = k_BT\sum(1/Z)(\partial Z/\partial V)_T$, is already on slide 6; slide 8 repeats it and adds $= \frac{\gamma}{V}\sum\langle\epsilon\rangle = \gamma U_{\text{phonons}}/V$. | Cited to slide 8 only (the prose says "slide 6" for the decomposition of $F$). | `at="slides 6, 8"`. Optional. |
| 5 | info | Formula "Number fluctuations from the grand partition function", `at="slide 13"` | The middle expression $k_BT\,\partial^2(k_BT\ln\mathcal Z)/\partial\mu^2$ is the last line of slide 12; the form $-k_BT(\partial^2\Phi/\partial\mu^2)_{T,V}$ is on slide 13. | Cited to slide 13 only. The page writes the middle term as $kT\frac{\partial}{\partial\mu}\left(kT\frac{\partial\ln\Xi}{\partial\mu}\right)$, equivalent to the slide. | `at="slides 12–13"`. |
| 6 | info | Formula "Relative fluctuation of particle number" and the $\kappa_T$ definition | Slide 13 gives the relation $(\partial^2\Phi/\partial\mu^2) = -\langle N\rangle^2\kappa_T/V$ ("It can be shown") and the result; slide 14 defines $\kappa_T \equiv -\frac1V(\partial V/\partial P)_T = -V/(\partial P/\partial V)_T$. The second expression on slide 14 is a slip: it should be $-1/[V(\partial P/\partial V)_T]$. | Uses only the correct definition, so the slip is not repeated. Good. | None needed; optionally note the slide slip in brackets per writing rule 4. |
| 7 | info | "The Grüneisen rule" | Slide 4c lists the modes as $\omega_{\vec k, j}$, "$j = 1, 2 \cdots J$" (a slip: there are $3J$ branches, as slide 4a and the "$3JN$" on the same slide say), and states the rule as observed. The name "Grüneisen" is not on the slides. | Single index $i$ for $\vec k, j$ (declared, good); "$3JN$ harmonic oscillators"; calls it "the Grüneisen rule". Physically, a single $\gamma$ for all modes is an approximation (mode Grüneisen parameters differ in real crystals); the page says "Experimentally, all of them respond ... in the same proportion", which follows the slide but is stronger than reality. | Optional: "to a good approximation, all of them respond …"; optionally mention the name is the standard one, not the slide's. |
| 8 | info | Slide 7 vs slide 8 formulas | Slides write $\langle\epsilon\rangle$ (slide 7) and $\langle\epsilon_{\vec k,j}\rangle$ (slide 8). | Uses $\langle E\rangle$ in the slide 7 formula and $\langle\epsilon_i\rangle$ in the slide 8 formula for the same quantity (mean energy of one mode). | Optional: use $\langle\epsilon\rangle$ in both. |
| 9 | info | "Lithium-6 and lithium-7", $U_{\text{zp}} = N \times \frac12\hbar\langle\omega\rangle$ | Slide 9 has exactly this (with "You showed in PS9 that ..."). Strictly the sum runs over $3JN$ modes, so the prefactor is $3JN$ with $\langle\omega\rangle$ the mean mode frequency. | Copies the slide's prefactor $N$. Harmless for the ratio, which is all that is used. | Optional: $3JN \times \frac12\hbar\langle\omega\rangle$, or "of order $N\hbar\langle\omega\rangle$". |
| 10 | info | "critical opalescence" paragraph | Slides give no mechanism; they only link two videos (PDF page 22). | "The density fluctuations then reach the scale of the wavelength of light, scatter it strongly". Physically it is the **correlation length** (spatial size) of the density fluctuations that grows to optical wavelengths while their amplitude, set by $\kappa_T$, grows; "reach the scale" is ambiguous between size and amplitude. This explanation is the page's own. | Optional: "the fluctuating regions grow to the size of a wavelength of light and become large in amplitude, so they scatter light strongly". |
| 11 | info | Helium-3 answer | Not on the slides (page's own, and marked as such). | "helium-3 at low temperature solidifies when heated, because there its solid has more entropy than its liquid". Correct (Pomeranchuk effect: below about 0.3 K the melting curve has negative slope; the disordered nuclear spins of the solid carry about $k\ln2$ per atom, more than the Fermi liquid's entropy, which is proportional to $T$). It needs a pressure near the melting curve (about 29–34 bar). | Optional: add "under about 30 atmospheres of pressure, below about 0.3 K", and the name Pomeranchuk effect. |
| 12 | info | Grand potential symbol | Slides: $\Phi = -k_BT\ln\mathcal Z$. | $\Phi$ here (matching the slide), but the Lecture 18 page (`grand-canonical-ensemble`) writes $\Phi_G$ and explains that $\Xi$ is a script Z on the slides. This page uses $\Xi$ without that remark. | Optional: "$\Xi$ (a script Z on the slides)" and/or align with $\Phi_G$. |

## Formula citations (all checked against the slide images)
- Wave-vector interval $-\pi/a < k_x \le \pi/a$: slide 3a. Correct. Aliasing $k = 4\pi/L$, $24\pi/L$, $44\pi/L$ with $a = L/10$: slides 3b–3d ($4\pi/L + 1\cdot2\pi/a$, $+2\cdot2\pi/a$). Correct; $2\pi/a = 20\pi/L$. Number of distinct wave vectors = lattice points = unit cells in 1, 2 or 3 dimensions: slide 3e. Correct.
- $3J$ frequencies per wave vector: slide 4a. Density of states high where $d\omega/dk = 0$: slide 4b (silicon DOS figure with Debye approximation, not reproduced on the page). Correct.
- $d\omega/\omega = -\gamma\,dV/V$: slide 4c, identical. Correct.
- $dF \le -S\,dT - P\,dV$ and the derivation from $dQ \le T\,dS$: slide 5, identical in steps. Correct.
- $F = \phi(V) + F_{\text{phonons}}$, $F_i = -kT\ln Z_i$: slide 6. Correct.
- $\frac{1}{Z_1}(\partial Z_1/\partial V)_T = \frac{\gamma}{V}\frac{\langle\epsilon\rangle}{k_BT}$: slide 7, identical (sign independently checked: $d\omega/dV = -\gamma\omega/V$ turns the minus from differentiating the exponent into a plus). Correct.
- Equilibrium condition $(\partial\phi/\partial V)_T = \gamma U_{\text{phonons}}/V$: slides 6 and 8 (see #4). Independently checked: $\partial F/\partial V = \phi' - kT\sum\partial\ln Z_i/\partial V = 0$. Correct. The page's reading of slide 8's figure (equilibrium to the right of the minimum of $\phi$, already at $T = 0$, further at $T > 0$) matches the dashed lines on the slide.
- $U_{\text{phonons}} = U_{\text{zp}} + aT^4$, $\omega \propto 1/\sqrt{m}$, ratio $\sqrt{7/6} = 1.08$, 0.07%: slide 9. Correct.
- $\langle N\rangle$ from one derivative: slide L18B19 (PDF page 17), referenced as "Lecture 18". Correct. $\langle N^2\rangle$ from two derivatives: slide 11. Combination: slide 12. Correct.
- $\langle N^2\rangle - \langle N\rangle^2 = -kT(\partial^2\Phi/\partial\mu^2)_{T,V}$ and the relative fluctuation $kT\kappa_T/V$: slide 13 (see #5). Correct; checked independently via $\partial^2\Phi/\partial\mu^2 = -(\partial\langle N\rangle/\partial\mu)_{T,V}$ and $(\partial\langle N\rangle/\partial\mu)_{T,V} = \langle N\rangle^2\kappa_T/V$ (Gibbs–Duhem). The quiz explanation's intermediate form $kT\,\partial\langle N\rangle/\partial\mu$ is right.
- Slide 15 questions: reproduced in order, as questions. Correct.

## Arithmetic and answer checks
- $\sqrt{7/6} = 1.0801$ (1.08). Correct.
- Example (a): $N = 101\,325 \times 10^{-18}/(1.380649 \times 10^{-23} \times 273.15) = 2.6868 \times 10^7$ (2.69); $1/\sqrt N = 1.929 \times 10^{-4}$ (1.93). Correct.
- Example (b): $N = 2.6868 \times 10^{19}$ (2.69); $1/\sqrt N = 1.929 \times 10^{-10}$ (1.93). Correct.
- Example (c): $(10^{-2}/1.929 \times 10^{-4})^2 = 2687$; with the rounded 1.93, 2685 (both 2.7 × 10³). Correct. The rms fraction scales as $\sqrt{\kappa_T}$ at fixed $T$, $V$: correct.
- Ideal gas: $kT\kappa_T/V = kT/(PV) = 1/N$. Correct.
- The example is original: the slides contain no numerical fluctuation example.
- calcs/8.044/zero-point-energy-fluctuations.yaml: every expected value matches; the identity checks (`aliasing`, `oscillator-dlnZ` with closed-form $Z_1$ and a central finite difference, `ideal-gas-fluct`) are set up correctly. Minor: in `aliasing` the comment says "$k + 2\pi/a$" with $a = L/10$, $L = 1$, i.e. $+20\pi$, and the formula uses $4\pi + 20\pi$: consistent. The 0.07% lithium figure is stored as `kind: fact` from slide 9; it was not checked against the original measurement (uncertain, but the page attributes it to the slide).
- Quiz 1: answer 0. Correct; explanation consistent with slides 8–9.
- Quiz 2: answer 0 ($kT\kappa_T/V$). Correct.
- Quiz 3: answer 0. Correct (see #10 on the mechanism, which is the page's own).
- Quiz 4: answer 0 (Helmholtz $F$). Correct; slide 5.
- Flashcards 1–3: correct.

## Coverage and order
- Follows slides 1 → 15 in order (1–2 introduction, 3a–3e wave vectors, 4a–4c branches and $\gamma$, 5–9 zero-point energy, 10–14 fluctuations, video links, 15 questions). Every slide is represented.
- Left out: slide 4b's silicon density-of-states figure (described in one sentence; not reproducing it is right, as its origin is not credited on the slide); "You showed in PS9" (slide 9); slide 14's second (wrong) expression for $\kappa_T$ (#6); the two videos (mentioned, not reproduced).
- Added: the answers to the slide 15 questions (marked "this page's own"), the critical-opalescence mechanism, "chemically identical" for the isotopes, the worked example. All correct except the force/length wording (#1).
- Notation change (single index $i$ for $\vec k, j$) is declared on the page. Good.
- Lecture 22 claim (`leadsTo`: Bose–Einstein condensation, macroscopic occupation of one state): correct. `_course.json` Lecture 22 = "Bose–Einstein condensation", and the L22 slides set up $N = \int\langle n\rangle D(E)\,dE$ with the Bose–Einstein occupation.
- Lecture 11 cross-reference (rubber band contracts when heated): correct; `heat-engines-carnot` is Lecture 11 and covers it (slides 6–7 of that lecture).

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text found none and the slide images were inspected. Slide 4b's silicon density-of-states plot looks like a textbook figure without a credit on the slide; the page does not reproduce it, which is correct.
- No video content reused: the page only says the slides link two videos of critical opalescence.
- No OpenStax or LibreTexts material. No figures; no graph on the page.
- No em dashes (—) in the page or the calcs file (checked by script; en dashes in ranges and "liquid–gas" are fine).
- Wording: two sentences follow the slides too closely (#3). Elsewhere rewritten.

## Notes
- No errors found. All formulas match the slides, and every number on the page and in the calcs file is correct. The answers to the counter-intuitive questions are correctly marked as the page's own and are right, except that the first answer as phrased fails for tension (#1). Also recommended: a cosmology callout to the vacuum-energy puzzle (#2), and rewording of two near-verbatim sentences (#3). The rest are citation refinements and optional precision (#4–#12).

## Resolution (2026-11-17, by the page author)

- Warning 1: the slide 15 answer now separates the guaranteed cases: a fluid's volume falls under pressure (κ_T > 0 from the fluctuation formula), and a wire lengthens under tension.
- Warning 2: a cosmology callout (zero-point energy of quantum fields as vacuum energy) and a `leadsTo` to 8.286 Lecture 20 are added.
- Warning 3: the slide 10 and slide 9 sentences are reworded.
- Info: the equilibrium formula now cites slides 6–8 and the fluctuation formula slides 12–13. The Grüneisen rule is marked as approximate and the name as the page's. The Ξ (script Z) and Φ/Φ_G notation is stated. The critical-opalescence sentence now speaks of the size of the fluctuating regions. The helium-3 answer gives its conditions (about 30 atm, below about 0.3 K, the Pomeranchuk effect). The N in U_zp follows the slide.
