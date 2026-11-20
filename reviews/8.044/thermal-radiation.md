---
page: content/year-3/8.044/thermal-radiation.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l15/ (read: the 28-page slide PDF mit8_044s13_l15.pdf; every page checked as an image, l15-01.png … l15-28.png, because the text extraction is garbled; slide 16 also re-rendered at 250 dpi to check the amplitude's letter)
  - content/year-4/8.286/black-body-radiation.mdx and content/year-4/8.286/cmb-spectrum.mdx (read, to check the callout and the 8.286 leadsTo entries)
  - content/year-3/8.044/maxwell-relations.mdx and polyatomic-gases.mdx (read, to check "the energy equation from Lecture 10" and "as in Lecture 14")
  - calcs/8.044/thermal-radiation.yaml (read; every number recomputed independently in Python with SciPy, the suite itself not run)
verdict: pass-with-notes
---

# Review: Black-body radiation in statistical physics

Slide numbering (checked on the images and with `pdftotext` per page): the PDF has **28** pages, not 26 slides plus a notice. PDF pages 1–22 = L15B1–B22; **PDF page 23 is an unlabelled full-page figure, "Cosmic Microwave Background Spectrum from COBE"** (COBE data points on a black-body curve, intensity in MJy/sr against frequency in 1/cm, no credit line, embedded as a raster image); PDF pages 24–27 = L15B23–B26; PDF page 28 = the OCW notice page. So PDF page n = slide n only up to 22; from there slide n is PDF page n + 1. The page cites the printed labels throughout (F on "slide 24" = L15B24, P, S, E on "slide 25" = L15B25, adiabat on "slide 26" = L15B26), which is correct, and so do the calcs entries.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "The universe as a cavity": "the same result Guth's course reaches by following photon wavelengths" | Not an MIT 8.044 claim. The site's own 8.286 Lecture 16 page (`black-body-radiation.mdx`, formula "Temperature of the expanding radiation", reading1 p. 26) derives $T \propto 1/a$ from **conserved entropy**: $s \propto T^3$ must thin out as $1/a^3$. That is exactly this page's $T^3V$ = constant argument. The photon-energy redshift ($E = h\nu \propto 1/a$, $u \propto 1/a^4$) is 8.286 Lecture 15 (`mass-energy-and-radiation.mdx`) and gives $u \propto 1/a^4$, not the temperature directly. | Says Guth reaches $T \propto 1/a$ "by following photon wavelengths", which presents the argument as a different one. | E.g. "the same result Guth reaches in 8.286 Lecture 16 from conserved entropy ($s \propto T^3$ thinning as $1/a^3$), and consistent with each photon's energy redshifting as $1/a$". (Uncertain whether Guth also states $T \propto 1/a$ via wavelengths somewhere in the transcripts; the site's pages do not.) |
| 2 | warning | "Thermal radiation": "microwaves at $10^{10}$ Hz go with about 0.17 K (the cosmic background)" | Slide 3's table pairs the row "Microwave, $10^{10}$ Hz, 0.17 K" with the label "cosmic background" as a region of the spectrum. | Reads as if the cosmic background were at 0.17 K, which contradicts the callout's 2.725 K on the same page. The CMB at 2.725 K peaks near 160 GHz ($1.6\times10^{11}$ Hz, recomputed); $10^{10}$ Hz is in its low-frequency tail. | E.g. "microwaves at $10^{10}$ Hz go with about 0.17 K (the slide labels this region with the cosmic background, which at 2.7 K peaks in the microwave too)". |
| 3 | warning | Coverage: the COBE figure (PDF page 23, between L15B22 and L15B23) | Greytak shows the COBE CMB spectrum fitted by a black body right after Planck's spectrum. | Not mentioned. | Mention it, ideally in the cosmology callout ("the slides show COBE's measured CMB spectrum lying on the Planck curve, the unnumbered figure after slide 22"). This is the lecture's own cosmology link. Do not reproduce the figure (no credit line; see Licensing). |
| 4 | warning | "Energy flux onto a surface": "averaging over directions in the half space facing $dA$"; quiz 1 explanation: "Averaging … over directions in a half space gives $\frac13u$" | Slide 8 weights directions with $p(\theta,\phi) = \frac{\sin\theta}{2}\frac{1}{2\pi}$, the probability over the **whole sphere**, and integrates only over the half that reaches $dA$ ($0 \le \theta \le \pi/2$): $\int_0^{\pi/2}\frac12\cos\theta\sin\theta\,d\theta = \frac14$. Slide 10 likewise: $\int_0^{\pi/2}\cos^2\theta\sin\theta\,d\theta = \frac13$ with the factor 2 and the $\frac12$ cancelling. | "Averaging over the half space" literally means using the half-space probability $\sin\theta\,d\theta$, which would give $\frac12$ for the flux and $\frac23$ for the pressure. | "summing over all directions, of which only the half moving towards $dA$ contribute" (and the same wording in quiz 1's explanation). |
| 5 | warning | "Pressure": "The extra factor of $\cos\theta$ for the normal component makes the angular average $\frac13$ instead of $\frac14$" | Slide 10: integrand $(2\cos\theta/c)\times$(energy in cylinder), i.e. $2\cos^2\theta\cdot\frac{\sin\theta}{2}$, integral $\frac13$. | The extra $\cos\theta$ alone turns $\frac14$ into $\frac16$; the factor 2 from reflection (stated in the previous sentence) is what makes it $\frac13$ (recomputed: $\int_0^{\pi/2}\frac12\cos^2\theta\sin\theta\,d\theta = 0.1667$). | "The extra factor of $\cos\theta$ (normal component) gives $\frac16$, and the factor 2 from reflection doubles it to $\frac13$." |
| 6 | info | "Statistical mechanics": "(slide 16; the slides write the amplitude $f$ as a script E)" | Slide 16, re-rendered at 250 dpi: $\vec E_{0,0,n,\vec 1_x}(\vec r,t) = E(t)\sin(n\pi z/L)\vec 1_x$ with an **ordinary italic** $E(t)$ (computer-modern math italic, no arrow), not a script letter. Script $\mathcal H$ appears only for the Hamiltonian (slides 16–17). | "script E". | "(the slides write the amplitude $f$ as $E(t)$, the same letter as the field)". The renaming itself is sensible. |
| 7 | info | Whole page, notation | Slides 2–15 use $\nu$ throughout: $u(\nu,T)$, $\alpha(\nu,T)$, $e(\nu,T)$, $P(T) = \frac13\int u(\nu,T)\,d\nu$, $u(T) = \int u(\nu,T)\,d\nu$; $\omega$ only from slide 16 on. | Uses $\omega$ from the start, without saying so. | Harmless (all relations on slides 2–15 are linear in $u$, so $u(\omega)\,d\omega = u(\nu)\,d\nu$ changes nothing), but add a short bracket, e.g. "(the slides use $\nu$ until slide 16; this page uses $\omega = 2\pi\nu$ throughout)". |
| 8 | info | "Energy flux": "a slanted cylinder of volume $A\cos\theta\,c\,\Delta t$" | Slides 7–8 use $\Delta A$ for the cylinder's base ($dA$ for the object's surface element). | Mixes $dA$ and $A$ in one sentence. | Write $dA\cos\theta\,c\,\Delta t$. |
| 9 | info | Callout: "the $T^4$ law is what makes radiation dominate the early universe" | Not on the slides. | Loose: dominance follows from $u \propto T^4 \propto 1/a^4$ against matter's $1/a^3$, i.e. $T^4$ together with $T \propto 1/a$. | Optional: "the $T^4$ law, with $T \propto 1/a$, makes $u \propto 1/a^4$, which is why radiation dominates the early universe". |
| 10 | info | "Thermal radiation": "infrared at $10^{13}$ Hz with room temperature" | Slide 3: $10^{13}$ Hz ↔ $1.7\times10^2$ K, labelled "room temp." | Correctly paraphrased. | Optional: give the slide's 170 K, since 300 K would sit at $1.8\times10^{13}$ Hz (recomputed). |
| 11 | info | prerequisites | Slide 14 uses the energy equation (8.044 Lecture 10). | `prerequisites: [polyatomic-gases]` only. | Optional: add `maxwell-relations`, where the energy equation is introduced (checked: maxwell-relations.mdx uses it). |

## Formula citations (all checked against the slide images)
- Energy flux onto $dA$, $\frac14c\,u$: slide 8. Correct.
- $P(T) = \frac13\int_0^\infty u\,d\omega$: slide 10 (in $\nu$, see #7). Correct.
- Kirchhoff $e/\alpha = \frac14cu$: slide 11, with $e\,dA = \alpha(\frac14cu)dA$ in the text. Correct.
- Thermodynamic derivation $u = \frac13Tu' - \frac13u \Rightarrow u' = 4u/T \Rightarrow u = AT^4$: slide 14 (the slide writes $dE = TdS - PdV$ and the Maxwell step; the page quotes the energy equation, which is the same line). Correct.
- Stefan–Boltzmann $e = \frac14cu = \frac14AcT^4 \equiv \sigma T^4$, $\sigma = 56.7\times10^{-9}$ W m⁻² K⁻⁴: slide 15. Correct.
- $D(\omega) = V\omega^2/\pi^2c^3$: slide 20. Correct.
- Planck spectrum $u = \langle E\rangle D/V = \frac{\hbar\omega^3}{\pi^2c^3}\frac{1}{e^{\hbar\omega/kT}-1}$: slide 22 (the slide writes "+ z. p. term"; the page says it drops it). Correct.
- $F(V,T) = \frac{kTV}{\pi^2c^3}\int\omega^2\ln(1-e^{-\hbar\omega/kT})d\omega = -\frac{\pi^2}{45}\frac{(kT)^4}{(\hbar c)^3}V$: slide 24 (L15B24, PDF page 25). Correct.
- $P$, $S$, $E = F + TS$: slide 25 (L15B25, PDF page 26). Correct, including $S = \frac{4\pi^2}{45}\frac{k^4T^3}{(\hbar c)^3}V$.
- In-text claims: plane wave and $\vec B_0 = \hat k\times\vec E_0/c$, $\omega = c|\vec k|$ (slide 1); $\bar u = \frac12\epsilon_0|\vec E_0|^2$, flux $c\bar u$, pressure $\bar u$, peak near $h\nu = 3k_BT$, $h/k \approx 5\times10^{-11}$ K s (slide 2); spectral table (slide 3); $\alpha$, $e$ definitions (slide 4; the slide defines $e$ as energy emitted per area, isotropic; "per unit time" is the page's correct reading of "power"); two-cavity argument (slide 5) and the three conclusions (slide 6); momentum density $(u/c)\hat k$ and $|\Delta p| = 2|p_\perp|$ (slide 9); black body, oven measurement (slide 12; "small hole" is the page's addition, correct physics); $E = uV$, $P = \frac13u$ (slide 13); single standing-wave mode (slide 16); $\mathcal H$ as a sum of two squares (slide 17); $\omega^2 = (\pi c/L)^2(n_x^2+n_y^2+n_z^2)$, two polarizations, $n_i = 1,2,3,\dots$ (slide 18); octant, $R = L\omega/\pi c$, count $\frac{\pi}{3}(L/\pi c)^3\omega^3$ (slide 19); classical $u = \omega^2kT/\pi^2c^3$, $\int = \infty$, agreement at low $\omega$ (slide 21, sketch "classical" vs "measured"); $\langle\epsilon\rangle$ with zero-point term, maximum at $\hbar\omega/kT \approx 2.82$ (slide 22); $Z = \prod Z_i$, $Z_i = e^{-\hbar\omega/2kT}(1-e^{-\hbar\omega/kT})^{-1}$, zero-point factor, $F = -kT\sum\ln Z_i \to \int D\ln Z_i$ (slide 23 = L15B23); $P = \frac13E/V = \frac13u(T)$ independent of $V$ (slide 25); adiabat $T^3V$ = const, $T/T_0 = (V/V_0)^{-1/3}$ (slide 26). All correct and correctly attributed.
- Cross-references: "the energy equation from Lecture 10" (present in maxwell-relations.mdx) and "as in Lecture 14" (polyatomic-gases.mdx has $\langle n\rangle = 1/(e^{\hbar\omega/kT}-1)$ and $\langle\epsilon\rangle = (\langle n\rangle + \frac12)\hbar\omega$). Both correct.

## Spectral table (slide 3) and the 3kT / 2.82kT question
- Slide 2 says the peak is "near $h\nu = 3k_BT$"; the slide 3 table is computed with $T = h\nu/2.82k$: recomputed $T$ for $10^6, 10^{10}, 10^{13}, \frac12\times10^{15}, 10^{16}, 10^{18}, 10^{21}$ Hz = $1.70\times10^{-5}$, 0.170, 170, 8509, $1.70\times10^5$, $1.70\times10^7$, $1.70\times10^{10}$ K, matching every row ($1.7\times10^{-5}$, 0.17, $1.7\times10^2$, $8.5\times10^3$, $1.7\times10^5$, $1.7\times10^7$, $1.7\times10^{10}$). With $3kT$ the values would be about 6% lower (e.g. 0.160 K, 7999 K). The page states both factors and which the table uses: correct.
- 2.82 is the peak of the spectrum per unit frequency (the variable of slide 2's sketch and of slide 22, which share the same peak since $\omega = 2\pi\nu$ is linear). Correct as used.
- The table's label "black holes" for X-rays is not reproduced; fine.

## Arithmetic and answer checks
(Recomputed in Python with $k = 1.380649\times10^{-23}$ J/K, $\hbar = 1.054572\times10^{-34}$ J s, $h = 6.62607\times10^{-34}$ J s, $c = 2.99792\times10^8$ m/s.)
- $h/k = 4.80\times10^{-11}$ K s ≈ $5\times10^{-11}$. Correct.
- Flux integral $\frac12\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta = 0.25$; pressure $\int_0^{\pi/2}\cos^2\theta\sin\theta\,d\theta = 0.3333$. Correct (wording, #4–#5).
- Mode count $2\cdot\frac18\cdot\frac43\pi(L\omega/\pi c)^3 = L^3\omega^3/3\pi^2c^3$; derivative $L^3\omega^2/\pi^2c^3$. Correct.
- Peak: root of $3(1-e^{-x}) = x$ is $x = 2.82144$; $x^3/(e^x-1) = 1.42144$ there, matching the plot point (2.8214, 1.4214). Correct.
- Plot: $x^3/(e^x-1) \to x^2$ as $x \to 0$, so "agrees with the classical $x^2$ at low frequency" is right; the classical curve is cut at $x^2 \le 1.6$ ($x \le 1.265$), inside the range. Caption correct.
- $\int_0^\infty x^2\ln(1-e^{-x})dx = -2.16465 = -\pi^4/45$. Correct.
- $E = F + TS$: $(-\frac{1}{45} + \frac{4}{45})\pi^2 = \frac{\pi^2}{15}$; $E = -3F$; $P = E/3V$. Correct. $A = \pi^2k^4/15(\hbar c)^3$ and $\sigma = \frac14Ac = \pi^2k^4/60\hbar^3c^2$. Correct.
- Example (a): $\sigma = 5.6704\times10^{-8}$ ≈ $5.670\times10^{-8}$ W m⁻² K⁻⁴, = $56.7\times10^{-9}$. Correct.
- Example (b): $5.670\times10^{-8}\times300^4 = 459.3$ W ≈ 459. Correct.
- Example (c): $\sigma(5772)^4 = 6.29\times10^7$ W/m² (6.294e7). Correct. $\nu = 2.82kT/h = 3.392\times10^{14}$ Hz ≈ $3.39\times10^{14}$ (with $x = 2.8214$: $3.393\times10^{14}$). Correct; $\lambda = c/\nu = 884$ nm, near infrared, "just below visible red light": correct. (The peak per unit wavelength would be at about 502 nm; the page is careful to say "frequency", fine.)
- Callout: $u = \frac{\pi^2}{15}(kT)^4/(\hbar c)^3$ at 2.725 K = $4.172\times10^{-14}$ J/m³ ≈ $4.17\times10^{-14}$. Correct, and identical to the 8.286 Lecture 16 page's value. 2.725 K is in calcs/values.yaml as "Guth 2013".
- calcs/8.044/thermal-radiation.yaml: every number on the page has an entry (flux, pressure, $h/k$, 0.17 K, mode count, peak, plot point, log integral, $E$ from $F$, examples a–c, CMB $u$), expected values match my recomputation. Not covered: the other slide 3 table rows quoted in words (room temperature, Sun's surface, $10^7$ K for X-rays) — optional entries. The `mode-count` `shown` string (`= L^3\omega^3/3\pi^2c^3$`) looks like a fragment with a stray `$`; harmless if the harness matches substrings. Suite not run here.
- Quiz 1: answer 0, $u/3$. Correct; explanation wording, see #4. "A single plane wave hitting a perpendicular absorber would give $u$": correct (slide 2).
- Quiz 2: answer 0, $u = AT^4$. Correct; explanation matches slide 14.
- Quiz 3: answer 0. Correct; explanation correct (slide 21).
- Quiz 4: answer 0, $\hbar\omega \approx 2.82kT$. Correct; $\frac{d}{dx}\frac{x^3}{e^x-1} = 0 \iff 3(e^x-1) = xe^x \iff 3(1-e^{-x}) = x$. Distractor $5kT$ is the wavelength-peak value $hc/\lambda kT \approx 4.97$, wrong for $u(\omega)$ as intended.
- Flashcards 1–3: correct (slides 8, 10, 11; 20, 22; 24–26).

## Coverage and order
- The page follows the slide order 1 → 26 without moving anything.
- Left out: the COBE figure (PDF page 23, #3); $\vec B$ of the standing wave $(n\pi c^2/L)^{-1}\dot E(t)\cos(n\pi z/L)$ (slide 16) and the explicit $\mathcal H = \frac V2\frac{\epsilon_0}{2}[E^2 + (n\pi c/L)^{-2}\dot E^2]$ (slide 17), both summarised in words ("a sum of two squares"), which loses no result; the sketches of slides 4, 5, 7, 12, 19, 20, 21 and 26, described in words.
- Added: the Planck-vs-classical graph (generated from formulas, as the rules require), the worked example (own numbers: the Sun at 5772 K, a 300 K plate; not on the slides), the cosmology callout.

## Cosmology callout and leadsTo
- CMB at "about $T = 2.725$ K": correct, and the value is the one 8.286 uses.
- $T^3V$ constant ⟹ $T \propto 1/a$ (since $V \propto a^3$): correct physics; attribution to Guth's method, see #1.
- $u \approx 4.17\times10^{-14}$ J/m³: correct (above).
- leadsTo 8.044 Lecture 16 "Paramagnets, the next application of the canonical ensemble": matches the `_course.json` syllabus (Lecture 16 = Paramagnets). Correct.
- leadsTo 8.286 Lecture 16 "u ∝ T⁴, photon number and entropy": matches black-body-radiation.mdx (lecture 16; summary "u ∝ T⁴, n ∝ T³ and s ∝ T³"). Correct.
- leadsTo 8.286 Lecture 18 "the measured spectrum of the CMB, a near-perfect black body": matches cmb-spectrum.mdx (lecture 18; COBE's black-body fit, peak at $h\nu \approx 2.82kT$ = 160 GHz). Correct.

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text file found none, and every slide image was inspected. Only the standard OCW notice on PDF page 28.
- The COBE figure (PDF page 23) carries no credit line on the slide; it plots COBE (NASA) data, whose original figure is usually credited to NASA/COBE (not verified here). The page does not reuse it; if #3 is adopted, describe it in words or generate a Planck curve, and do not copy the image.
- No figures reused: the only graph is generated from formulas; the slide 3 table is quoted as numbers (facts).
- No OpenStax or LibreTexts material.
- Wording is rewritten. Closest to the slides: "independent of the cavity's shape and wall material" (slide 6: "independent of shape and wall material"), "each mode is a harmonic oscillator" (slide 17: "Each mode corresponds to a harmonic oscillator"), "the first part coming from the zero-point energy" (slide 23: "The first factor in the expression for $Z_i$ comes from the zero-point energy"), "That is enough" (slide 14: "This is enough to allow us to find $u(T)$"). All are short clauses of standard content; acceptable.
- No em dashes (—) in the page or the calcs file (grep found none; "Stefan–Boltzmann", "slides 1–26" use en dashes).

## Notes
- No errors found: every formula, citation, number and quiz answer checks. The warnings are about wording that a careful student could misread (#2, #4, #5), one omitted slide that is the lecture's own link to cosmology (#3), and the attribution of the $T \propto 1/a$ argument in 8.286 (#1). Fix #1–#5 before setting `status: reviewed`.
- For future reviews of Lecture 15 material: the PDF numbering is not "page n = slide n" after slide 22 (unlabelled COBE page at PDF 23).

## Resolution (2026-11-17, by the page author)

- Warning 1: the callout now credits 8.286's conserved-entropy argument (s ∝ T³ thinning as 1/a³), not photon wavelengths.
- Warning 2: the 0.17 K row is now described as the region of the spectrum where the slide places the cosmic background, and the infrared row as about 170 K.
- Warning 3: the callout now mentions, in words, the COBE spectrum shown in the lecture.
- Warnings 4–5: the flux and pressure averages now say that directions are weighted over the whole sphere with only the half reaching the wall counted, and that cos θ alone would give 1/6 before the reflection factor 2.
- Info: the f(t) note now says the slides write E(t) (renamed to keep E for the energy); the page states it uses ω where slides 2–15 use ν; the dA/A mix is gone; the callout's last sentence now includes T ∝ 1/a. The stray `$` in a calcs `shown` string is part of the page text and stays.
