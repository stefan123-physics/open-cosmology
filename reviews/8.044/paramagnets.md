---
page: content/year-3/8.044/paramagnets.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l16/ (read: the 28-page slide PDF mit8_044s13_l16.pdf; the text extraction is garbled (Greek letters, ≠ and ≪ lost), so every slide was checked as an image, l16-01.png … l16-28.png)
  - content/year-3/8.044/_course.json (read, to check the Lecture 17 leadsTo)
  - calcs/8.044/paramagnets.yaml (read; every number recomputed independently in Python, the suite itself not run)
verdict: needs-changes
---

# Review: The quantum paramagnet

Slide numbering (checked on the images): PDF page 1 = L16B1, page 2 = L16B2a, page 3 = L16B2b, PDF page n = L16B(n − 1) for n = 4 … 27, PDF page 28 = the OCW notice. So the printed labels run 1, 2a, 2b, 3–26, and the page cites the printed labels throughout (correct), as do the calcs entries. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Limits of the magnetization" (slide 4), high-temperature limit | Slide 4: $M \to N\frac{(g\mu_B)^2J(J+1)}{3}\frac{H}{kT}$ (High T, Curie law). | `M \approx N\frac{(g\mu_B)^2J(J + 1)}{3}\frac HT`: Boltzmann's $k$ is missing, so the formula is dimensionally wrong (energy²/energy… has units of moment × field/temperature). The quiz 1 choice and explanation have the correct $/3kT$, so the page contradicts itself. | Write `\frac{H}{kT}`. |
| 2 | warning | "Cooling by adiabatic demagnetization", and worked example (c) | Slides 23–24: initially $S_M \sim 0$, $S_S$ high, $T_S = T_{\text{initial}}$, $kT \ll g\mu_BH$; finally $H \sim 0$, $S_M \sim Nk\ln(2J+1)$, $S_S$ low, $T_S \ll T_{\text{initial}}$, $kT \gg g\mu_BH$. The spins end up disordered because they have absorbed the sample's entropy. | Says the spins regain entropy "by taking it from the lattice and from anything attached" and, in the next sentence, "Ideally $H/T$ stays fixed". These two cannot both hold: if the spin entropy is unchanged ($H/T$ fixed) the spins have taken no entropy from anything. $H/T$ fixed is the limit in which the lattice and sample entropy is negligible next to the spins' own; slide 24's picture is the other case, where the spins soak up entropy and end with $kT \gg g\mu_BH$. | E.g. "If the lattice and anything attached hold little entropy, the spin entropy stays fixed, so $H/T$ stays fixed and $T$ falls in proportion to $H$. In practice the spins also absorb entropy from the sample, as the slides show (slide 24: at the end $S_M \approx Nk\ln(2J+1)$), so the sample cools a great deal but $H/T$ is not exactly conserved." Add "(spins alone, lattice entropy neglected)" to example (c). |
| 3 | warning | "The model" section and the worked example's SI note | Slide 1: $\mu_B \equiv e\hbar/2m_ec$ (Gaussian units); in Gaussian units $\epsilon_m = -g\mu_BHm$ and $đW = H\,dM$ with $H$ in gauss. | The body keeps the Gaussian formulas ($\epsilon_m = -g\mu_BHm$, $\eta = g\mu_BH/kT$, $dU = T\,dS + H\,dM$) without saying so, while the example uses $\mu_B$ in J/T and "$\mu_0H = 1$ T". The example's conversion is correct (level spacing $g\mu_B\mu_0H$), but a reader using SI with the body's formulas would put $H$ in A/m and get nonsense. Also the page describes $\mu_B$ only as "built from the electron mass" and does not give $e\hbar/2m_ec$. | One bracket in "The model": "(The slides use Gaussian units, $\mu_B = e\hbar/2m_ec$; in SI read $H$ as $\mu_0H$ throughout, so $\epsilon_m = -g\mu_B\mu_0Hm$, $\eta = g\mu_B\mu_0H/kT$ and $đW = \mu_0H\,dM$, with $\mu_B = e\hbar/2m_e = 9.274\times10^{-24}$ J/T.)" |
| 4 | info | "The energy puzzle": "then each bracket is $-\eta S' + \eta S' = 0$" | Slide 8 works the $dT$ bracket out to $-\eta S'(\eta) + \eta S'(\eta) = 0$ and says "a similar expansion shows that the other term is also zero". | The $dH$ bracket is $\frac{T\eta}{H}S' - \frac{T\eta}{H}S'$, not literally $-\eta S' + \eta S'$. | "the $dT$ bracket is $-\eta S' + \eta S' = 0$, and the $dH$ bracket is $(T\eta/H)(S' - S') = 0$". |
| 5 | info | Quiz 2 explanation | Slide 8 needs the Maxwell relation $(\partial M/\partial T)_H = (\partial S/\partial H)_T$ as well as $S = S(\eta)$, $M = M(\eta)$. | "both coefficients vanish when $S$ and $M$ are functions of $\eta$ alone": for arbitrary $S(\eta)$, $M(\eta)$ they do not; the Maxwell relation ties $M'$ to $S'$. The body text has this right. | "…functions of $\eta$ alone, together with the Maxwell relation $(\partial S/\partial H)_T = (\partial M/\partial T)_H$." |
| 6 | info | "Entropy: which free energy?", the sponge paragraph | Slide 15 only poses the question "How is a paramagnet like a sponge?"; the slides give no answer in words (no transcript). | Gives an answer (field squeezes out entropy, releasing lets it soak back up), placed after slide 21. | The answer is sound physics and consistent with slides 22–24; mark it as the page's reading, e.g. "(the slides pose the question; one answer:)". |
| 7 | info | "Cooling by adiabatic demagnetization", copper | Slide 26: Cu, $I = 3/2$, $T_{\text{ordering}} \sim 1$ μK; slide 25: CMN, Ce³⁺, $J = 5/2$, $T_{\text{ordering}} \sim 1.9$ mK. | Follows the slides; omits CMN's $J = 5/2$ and its formula $2\text{Ce(NO}_3)_3\cdot3\text{Mg(NO}_3)_2\cdot24\text{H}_2\text{O}$. | Optional: add $J = 5/2$ for Ce³⁺ for parallel with copper's $I = 3/2$. (Uncertain, not from MIT: the measured nuclear ordering of copper is usually quoted well below 1 μK, of order 0.06 μK; the page correctly quotes the slide, so no change is required.) |
| 8 | info | "The energy puzzle", $U = 0$ | Slide 7: "$= 0$ for all paths $\Rightarrow U = 0$". | Same. | Optional: "$dU = 0$ on every path, so $U$ is a constant, which we set to zero". |

## Formula citations (all checked against the slide images)
- Energy levels $\epsilon_m = -g\mu_BHm$, $m = J, \dots, -J$: slide 2a. Correct.
- $Z_1 = \sum e^{\eta m} = \sinh[(J+\frac12)\eta]/\sinh[\frac12\eta]$, $\eta = g\mu_BH/kT$ = level spacing/$kT$, $Z = Z_1^N$: slide 2b. Correct.
- $p(m) = e^{\eta m}/Z_1$, $\langle\mu\rangle = g\mu_B\,\partial\ln Z_1/\partial\eta$, $M = Ng\mu_BJB_J(\eta)$, Brillouin function: slide 3. Correct.
- Limits: slide 4. Low-$T$ limit correct; high-$T$ limit missing $k$ (#1). The coth expansions match slide 4.
- $(\partial\eta/\partial T)_H = -\eta/T$, $(\partial\eta/\partial H)_T = \eta/H$: slide 6. Correct.
- $dU$ expanded into two brackets $= 0$: slide 7. Correct.
- Maxwell relation step: slide 8 replaces $H(\partial M/\partial T)_H$ by $H(\partial S/\partial H)_T$, i.e. it uses exactly the Maxwell relation $(\partial M/\partial T)_H = (\partial S/\partial H)_T$ that the page uses. Checked: from $dG = -S\,dT - M\,dH$ (which follows from $dU = T\,dS + H\,dM$ alone, so there is no circularity in using it to prove $U = 0$), $S'\eta/H = -M'\eta/T$, so $M' = -(T/H)S'$; then the $dT$ bracket is $-\eta S' + \eta S' = 0$ and the $dH$ bracket is $(T\eta/H)S' - (T\eta/H)S' = 0$. The argument is correct (wording of the second bracket, #4).
- Physical argument ($đQ = 0 \Rightarrow dS = 0 \Rightarrow dM = 0 \Rightarrow dU = 0$; $E = N\langle\epsilon\rangle = -HM \ne 0$): slide 9. Correct.
- Three energy parts: slide 10; their resolution (① absent with $đW = H\,dM$, ② moments not created and non-interacting so $U = 0$, ③ $-\vec H\cdot\vec M = N\langle\epsilon\rangle$): slide 11. Correct.
- $\langle E\rangle = -\frac1Z(\partial Z/\partial\beta)_H = U - HM = -HM$: slide 12 (the slide writes $\langle\mathcal H\rangle^{\text{S.M.}} \ne U^{\text{Thermo}}$, $= U^{\text{assembly}} + (-\vec H\cdot\vec M)$). Correct.
- $C_M = 0$, $C_H = -H(\partial M/\partial T)_H = NkJ\eta^2B_J'(\eta)$: slide 13. Correct; checked: $(\partial M/\partial T)_H = Ng\mu_BJB_J'\cdot(-\eta/T)$, times $-H$ gives $NkJ\eta^2B_J'$. (The slide's intermediate step shows a stray $1/T$ in front of $(dU - H\,dM)$; the page rightly skips it.)
- Heat capacity peak, vanishing at both ends: slide 14 (plots for $J = \frac12 \dots \frac72$, peaks near $(k/g\mu_BH)T \approx 0.4$–$1$). Correct; also $\eta^2B_J' \approx (J+1)\eta^2/3 \to 0$ for small $\eta$ and $\sim\eta^2e^{-\eta}/J \to 0$ for large $\eta$.
- Entropy limits and the failed try $S = k\ln Z = Nk\ln Z_1 \to NkJ\eta$: slides 17–19. Correct.
- $-kT\ln Z = U - HM - TS = G(T,H)$, $S = k\ln Z - HM/T$: slide 20. Correct.
- $G = -kT\ln Z$, $dG = -S\,dT - M\,dH$, $M = -(\partial G/\partial H)_T$, $S = -(\partial G/\partial T)_H$, "even when $U \ne 0$": slide 21 (the text extraction drops the ≠; the image has it). Correct.

## Arithmetic and answer checks
(Recomputed in Python with $\mu_B = 9.274\times10^{-24}$ J/T, $k = 1.380649\times10^{-23}$ J/K, $R = 8.314$ J/(mol K).)
- Brillouin small-$\eta$ limit: expanding gives $\frac{\eta}{3J}[(J+\frac12)^2 - \frac14] = (J+1)\eta/3$. Correct; numerically $B_{3/2}(10^{-3})/10^{-3} = 0.83333$.
- Large-$\eta$ limit: $B_J \approx 1 - e^{-\eta}/J$ (the $e^{-(2J+1)\eta}$ term is smaller). Correct; at $\eta = 30$ both give $1 - 6\times10^{-14}$.
- $B_{1/2}(\eta) = 2\coth\eta - \coth(\eta/2) = \tanh(\eta/2)$. Correct.
- Example (a): $\eta = 1.3434$ at 1 K ("about 1.343") and $4.478\times10^{-3}$ at 300 K ("$4.48\times10^{-3}$"). Correct.
- Example (b): $\tanh(0.67171) = 0.5861$ ("0.586"); Curie $\eta/2 = 0.6717$ ("0.672"); at 300 K $\tanh = 2.23904\times10^{-3}$ and $\eta/2 = 2.23904\times10^{-3}$ ("both $2.24\times10^{-3}$", agree to 6 figures). Correct. $gJ(J+1)\eta/3$ with $g = 2$, $J = \frac12$ is $\eta/2$: correct.
- Example (c): $T_{\text{final}} = 0.01$ K. Correct within the stated ideal model (see #2 on what "ideal" must mean).
- Example (d): $R\ln 2 = 5.763$ J/K ("5.76"). Correct.
- Example SI conversion: level spacing $g\mu_B\mu_0H$ with $\mu_0H = 1$ T is right (#3 is about the body, not the example).
- Low-temperature entropy: $S/Nk = \ln Z_1 - \eta JB_J \to J\eta - J\eta = 0$; high-temperature: $\to \ln(2J+1)$ (1.3863 for $J = \frac32$). Correct.
- Plot: Curie line slope $(J+1)/3$ in $\eta$ for $M/Ng\mu_BJ$ is correct; caption ("Larger J gives a steeper start") matches slide 5's lower panel. Curve cut at $\le 1.1$, inside the range.
- calcs/8.044/paramagnets.yaml: all entries match my recomputation. The `brillouin-small` entry checks $B_J/\eta$, which is right, but no entry checks the printed high-$T$ formula itself, which is how #1 slipped through; consider a formula check of $M$ with $k$ included. Suite not run here.
- Quiz 1: answer 0. Correct; explanation correct.
- Quiz 2: answer 0. Correct; explanation incomplete (#5).
- Quiz 3: answer 0, $G(T,H) = U - HM - TS$. Correct; explanation correct (slide 20–21).
- Quiz 4: answer 0. Correct for the ideal spin system; the bracket about interactions is right; see #2 for the lattice-entropy qualification.
- Flashcards 1–3: correct (slides 3–4; 9, 12, 13, 20–21; 23–26).

## Coverage and order
- Follows slides 1 → 26 in order, except: slide 16 (high/low temperature picture) is cited early, in the magnetization section, alongside slide 5; and the sponge question of slide 15 is answered after slide 21. Both moves are harmless.
- Left out: the slide 5 plots (described by the page's own generated graph of $B_J$, fine); slide 22's two entropy plots (S against $T$ at fixed $H$ and against $H$ at fixed $T$, for $J = \frac12 \dots \frac72$) are only cited, not described; optional one sentence. CMN's $J = 5/2$ and chemical formula (#7).
- Added: the Brillouin plot (generated from the formula), the worked example (original: electron spins at 1 T, 1 K and 300 K; nothing like it on the slides), the Maxwell-relation sentence that makes slide 8's substitution explicit (correct).
- No cosmology callout and no 8.286 leadsTo. Acceptable: the lecture has no direct cosmology link, and the rules ask for one only where a real connection exists.

## Claims about later lectures
- leadsTo 8.044 Lecture 17, "Quantum states of many-particle systems, where identical particles change the counting": matches the `_course.json` syllabus (Lecture 17 = "Quantum states of many-particle systems"). The "identical particles change the counting" gloss is the expected content of that lecture but was not checked against the Lecture 17 slides (not read).

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text found none and every slide image was inspected (the plots on slides 5, 14, 22 and the cooling diagrams on 23–24 carry no credit line). Only the standard OCW notice on PDF page 28.
- No slide figure reused: the only graph is generated from the Brillouin formula.
- No OpenStax or LibreTexts material.
- Wording is rewritten. Closest to the slides: "cools helium-3 and samples in it to about 2 mK" (slide 25: "Cools ³He and samples therein to ~2 mK") and "cool copper's electrons and lattice to about 10 μK" (slide 26: "Cools Cu electrons and lattice to ~10 μK"); "the energy to create the field, the energy to assemble the moments, and the energy of the moments sitting in the field" (slide 10's list). All are short factual statements or lists of standard terms; acceptable.
- No em dashes (—) in the page or the calcs file (grep found none).

## Notes
- One error (#1, missing $k$ in the cited Curie-law formula); fix it before setting `status: reviewed`. The warnings (#2 the contradictory "spins take entropy from the lattice" / "$H/T$ stays fixed", #3 Gaussian vs SI units) should also be fixed, since a student could be misled by both.
- The $U = 0$ argument with the Maxwell relation is correct and is in fact what slide 8 does implicitly.

## Resolution (2026-11-17, by the page author)

- Error 1: the Curie limit now reads H/kT, matching slide 4 and the quiz; the calcs quote is updated.
- Warning 2: the demagnetization paragraph now separates the two cases. If the lattice and sample hold little entropy, H/T stays fixed. If they hold much, the spins end near Nk ln(2J + 1) with kT ≫ gμ_BH (slide 24). Worked example (c) states its assumption.
- Warning 3: "The model" now says the slides use Gaussian units, with μ_B = eħ/2m_e c, and that in SI H should be read as μ₀H.
- Info: the two brackets of the U = 0 argument are now shown separately; CMN's J = 5/2 is mentioned. The sponge answer stays as the page's own explanation; quiz 2 is unchanged.
