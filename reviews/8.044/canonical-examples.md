---
page: content/year-3/8.044/canonical-examples.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l13/ (read: the 24-page slide PDF mit8_044s13_l13.pdf; every page checked as an image, l13-01.png … l13-24.png, because the text extraction is garbled)
  - mit8_044s13_l14.txt (read as text only, the opening slides, to check the leadsTo claim about Lecture 14)
  - calcs/8.044/canonical-examples.yaml (read; numbers recomputed independently, the suite itself not run)
verdict: needs-changes
---

# Review: Examples using the canonical ensemble

Slide numbering (checked on the images): PDF page n = slide L13Bn for n = 1–23 (the labels on slides 14 and 16 are truncated in the image, "L13B1…", but their position and content fit 14 and 16); PDF 24 = the OCW notice page. The page cites these numbers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Classical harmonic oscillators", formula "Oscillators: thermodynamics", `at="slide 11"` | Slide 11 has $Z = Z_1^N$, $F = -kTN\ln\{\ldots\}$ and $S = kN\ln\{\ldots\} + Nk$. The third part, $E = F + TS = NkT$, is on **slide 12** (top line). | Cites the whole three-part formula to slide 11. | `at="slides 11–12"` (the sentence before it already says "slides 11–12"). |
| 2 | warning | "The classical ideal gas", last paragraph: "$VT^{3/2}$ is constant, as before (slide 9)" | Slide 9 writes "$\{V/N\lambda(T)^3\}$ is constant $\Rightarrow V/T^{3/2}$ is constant", then $V/V_0 = (T/T_0)^{-3/2}$. The middle step is a slip on the slide: since $\lambda^3 \propto T^{-3/2}$, it is $VT^{3/2}$ that is constant, which is what the slide's own final line says. | Writes the correct $VT^{3/2}$ without noting that the slide differs. | Writing rule 4: add a brief bracket, e.g. "(slide 9 writes $V/T^{3/2}$ in the middle step, a slip; its final $V/V_0 = (T/T_0)^{-3/2}$ is right)". |
| 3 | warning | "Why the canonical ensemble is easier", first paragraph: "it also contains the density of states, which grows rapidly with $E$, so $p(E)$ rises and then falls" | Slide 1 only shows a decaying exponential labelled "$p(E) \propto e^{-E/kT}$ NOT!" next to $p(\{p,q\}) \propto e^{-H/kT}$. It gives no reason and no shape. | Adds the density-of-states reason and a general "rises and then falls". | The reason is correct and is the page's own gloss, but "rises and then falls" is not general: for one 1D harmonic oscillator the density of states is constant and $p(E)$ is exactly exponential; for a two-level system $p(E)$ is two spikes. Suggest "for a system with many degrees of freedom (such as a gas) the density of states grows rapidly with $E$, so $p(E)$ rises and then falls", and say this is the page's explanation. |
| 4 | info | "The classical ideal gas": "and, since $\lambda^3 \propto T^{-3/2}$ (slide 8)" | The annotation "$\propto T^{-3/2}$" is under a brace on **slide 7** (the brace appears to span the whole $\{V/N\lambda(T)^3\}$, which would be $\propto T^{+3/2}$; uncertain from the image resolution whether it is meant for $\lambda^3$ only). Slide 8 uses it without restating it. | Attributes the fact to slide 8. | "(slides 7–8)". The page's statement $\lambda^3 \propto T^{-3/2}$ is correct either way; no need to mention the brace. |
| 5 | info | "A two-level impurity": "For $N$ impurities (slides 18–19) … giving [S and U]" followed by the heat-capacity plot "(slide 17)" and then the pressure | MIT order: slide 16 (probabilities vs $T$), slide 17 (plot of $C/Nk$ for $g = 1$–5), slide 18 (assumptions, $\epsilon(V)$, $Z$, $F$, $S$), slide 19 ($S$, $U$, $P$). | Moves slide 17 after the $U$ of slide 19, then returns to slides 18–19 for the pressure. | Logical reordering (the plot needs $U$ first); acceptable. Optionally say "(the slides show this plot before deriving $U$)". |
| 6 | info | "The heat capacity $C = dU/dT$ peaks at $kT$ somewhat below $\epsilon$" | Slide 17: peaks at $kT/\epsilon \approx 0.42$ ($g = 1$) down to $\approx 0.32$ ($g = 5$). | "somewhat below $\epsilon$". | The peak is at roughly a third to two-fifths of $\epsilon/k$; "well below $\epsilon$ (at $kT \approx 0.3$–$0.4\,\epsilon$)" is more accurate. |
| 7 | info | "At high temperature every state is equally likely: the ground state has probability $1/(1+g)$ and the excited level as a whole $g/(1+g)$ (slide 16)" | Slide 16 plots $p(E = \epsilon) \to g/(1+g)$ and $p(\text{state} = i \ne 0) \to 1/(1+g)$, i.e. a single excited state, not the ground state. | Names the ground state's limit. | Same physics (all $1+g$ states tend to $1/(1+g)$); optionally say "each state, ground or excited, tends to $1/(1+g)$". |
| 8 | info | Whole page, notation | Slides write the Hamiltonian as script $\mathcal H$, the level energy as $\epsilon$, $\beta \equiv 1/kT$ (slide 20), and use $\alpha$ twice for unrelated things (the power of $h$ on slide 13, a constant on slide 22). | Writes $H$, $\epsilon$, $\beta = 1/kT$; avoids $\alpha$ by saying "a power of $h$" and "$Z \propto \beta^{-3N/2}$"; writes $c$ for slide 20's constant as the slide does. | Consistent with the slides and with the previous 8.044 pages; the avoidance of the double $\alpha$ is an improvement. Fine. |
| 9 | info | "Separation", formula at slide 3 | Slide 3 also gives $p(\{p,q\}) = p(\{p,q\}_a)\,p(\{p,q\}_b)$ ("a & b are SI"). | States it in words ("the parts are statistically independent"). | Fine. |
| 10 | info | Sackur–Tetrode entropy: "extensive because of the $N!$"; quiz 1 explanation "makes the entropy extensive" | Slides 4 and 8 do not mention extensivity or the name. | The name is marked "(the name is standard, not on the slide)"; the extensivity remark is unmarked. | Both statements are correct physics; optional "(not on the slides)" after the extensivity remark too. |

## Formula citations (all checked against the slide images)
- Separation $Z = Z_aZ_b$, $F = F_a + F_b$, $S = S_a + S_b$: slide 3. Correct.
- Correct Boltzmann counting $Z = Z_1^N/N!$: slide 4. Correct (slide also has $Z = Z_1^N$, $F = NF_1$, $S = NS_1$, quoted in the text before it).
- One atom $Z_1 = \ldots = V/\lambda^3$, $\lambda = h/\sqrt{2\pi mkT}$: slide 6. Correct (the page drops the intermediate $(2\pi mkT)^{3/2}L_xL_yL_z/h^3$; the quiz explanation gives it). $Z(T,V,N) = \frac1{N!}(V/\lambda^3)^N$ in the text is also slide 6.
- Free energy $F = -NkT\ln(V/N\lambda^3) - NkT$: slide 7. Correct.
- $P = NkT/V$, $S = Nk\ln(V/N\lambda^3) + \frac52Nk$, $E = \frac32NkT$: slide 8. Correct.
- Text on slide 5: $H = \sum\vec p_i\cdot\vec p_i/2m$, $\langle p^2\rangle = 3mkT$, $\langle H_1\rangle = \frac32kT$. Correct.
- One oscillator $Z_1 = (2\pi/h)\sqrt{m/K}\,kT$: slide 10. Correct; the variances $mkT$ and $kT/K$ in the text match slide 10's Gaussians.
- Oscillators: thermodynamics: **partly wrong**, see #1.
- Adiabat at constant temperature and $C = Nk$ for any mix of frequencies: slides 11 and 12. Correct.
- Quantum canonical ensemble: slide 13. Correct.
- Two-level impurity $Z_1 = 1 + ge^{-\epsilon/kT}$, $p(0)$, $p(i)$: slide 15. Correct.
- Impurities: $S$ and $U$: slide 19. Correct (also $U = N\epsilon\,p(E = \epsilon)$, slide 19). Slide 18's form of $S$, $NkT\,g(\epsilon/kT^2)e^{-\epsilon/kT}/(1 + ge^{-\epsilon/kT})$, is the same expression.
- Pressure $P = -(\partial F/\partial\epsilon)_T\,\partial\epsilon/\partial V = \gamma U/V$: slide 19. Correct, and the assumption $\epsilon = \epsilon_0(V/V_0)^{-\gamma}$ is slide 18. Rederived: $F = -NkT\ln(1 + ge^{-\epsilon/kT})$ gives $(\partial F/\partial\epsilon)_T = Nge^{-\epsilon/kT}/(1 + ge^{-\epsilon/kT}) = U/\epsilon$; with $\partial\epsilon/\partial V = -\gamma\epsilon/V$ this is $P = \gamma U/V$. Slide 19's intermediate line $NkT\,[-(g/kT)e^{-\epsilon/kT}]/(1 + ge^{-\epsilon/kT})\cdot(-\gamma\epsilon/V)$ agrees.
- Energy from $Z$: $U = -Z^{-1}(\partial Z/\partial\beta)_{N,V}$: slide 21. Correct; "Usually, but not always, $U = \langle H\rangle$" and $Z = c\int e^{-\beta H}$ are slide 20.
- Ideal gas $Z \propto \beta^{-3N/2}$, $U = \frac32NkT$: slide 22. Impurities $Z = (1 + ge^{-\beta\epsilon})^N$, $U = gN\epsilon e^{-\epsilon/kT}/(1 + ge^{-\epsilon/kT})$: slide 23. Correct.

## Heat-capacity plot (against slide 17)
- The curve $C/Nk = g(\epsilon/kT)^2e^{-\epsilon/kT}/(1 + ge^{-\epsilon/kT})^2$ is the exact derivative of the page's $U/N\epsilon$ (checked by hand and by the calcs identity `impurity-C`).
- Peaks recomputed numerically (grid in $kT/\epsilon$, step $10^{-4}$): $g = 1$: 0.439 at 0.417; $g = 2$: 0.762 at 0.377; $g = 3$: 1.023 at 0.352; $g = 4$: 1.246 at 0.334; $g = 5$: 1.442 at 0.320. Slide 17 shows peaks at about 0.44, 0.76, 1.02, 1.24, 1.44, moving left as $g$ grows, and the same long tails merging above $kT/\epsilon \approx 1$. Match.
- Axes: domain 0.05–2.8 and range 0–1.6 contain every peak (the slide runs to about 3 with a $C/Nk$ axis to 1.6). Slider $g$ = 1…5 step 1 reproduces the five slide curves.
- Caption: "a taller peak that moves to lower temperature" is correct. "More excited states give more entropy to gain" is the page's own (reasonable) explanation; the slides give none.

## Arithmetic and answer checks
(Recomputed in Python with the page's constants $h = 6.62607\times10^{-34}$ J s, $k = 1.380649\times10^{-23}$ J/K, $m = 6.6465\times10^{-27}$ kg, $T = 300$ K, $P = 101\,325$ Pa.)
- (a) $2\pi mkT = 1.7297\times10^{-46}$ (kg² m² s⁻²) ≈ 1.730e-46. $\lambda = 5.038\times10^{-11}$ m ≈ 5.04e-11. "About a twentieth of a nanometre": 0.0504 nm ≈ 1/19.8 nm. Correct.
- (b) $n = P/kT = 2.4463\times10^{25}$ m⁻³ ≈ 2.446e25; $n\lambda^3 = 3.128\times10^{-6}$ ≈ 3.13e-6. Correct.
- (c) $\ln(1/n\lambda^3) = 12.675$ ≈ 12.68; $+2.5 = 15.175$ ≈ 15.18; $\times 8.314 = 126.17$ ≈ 126.2 J/(K mol). Correct.
- Claim "very close to the value measured for helium gas at room temperature": the tabulated standard molar entropy of helium is 126.15 J/(K mol) at 298.15 K and 1 bar (NIST/CODATA value, quoted from memory, not fetched here). The page's conditions differ slightly (300 K, 1 atm), which shifts the value by under 0.2 J/(K mol). The claim is fair. Optional: name the reference value with a source (`kind: fact` in the calcs file) since it is a quoted measurement.
- (d) $2e^{-1} = 0.7358$ ≈ 0.736; $1 + 2e^{-1} = 1.7358$ ≈ 1.736; ratio 0.4239 ≈ 0.424 (42%). $g = 1$: $1/(e + 1) = 0.2689$ ≈ 27%. Correct.
- calcs/8.044/canonical-examples.yaml: every number on the page has an entry with matching expected values (gas example, impurity example, peak positions for $g = 1$ and $g = 5$, the three identities). The peak-position entries agree with my recomputation (0.417, 0.320). Not run here.
- Quiz 1: answer 0 (swapping identical particles gives no new state). Correct; explanation correct.
- Quiz 2: answer 0, $\lambda = h/\sqrt{2\pi mkT}$. Correct; the explanation matches slide 6.
- Quiz 3: answer 0, $C = Nk$ at every temperature and for any frequencies. Correct (slide 12). The explanation's "each quadratic term contributes $\frac12kT$" is equipartition, not on the slides but correct.
- Quiz 4: answer 0, $U = -Z^{-1}(\partial Z/\partial\beta)_{N,V}$. Correct (slide 21); distractor $-kT\ln Z$ is $F$, wrong as intended.
- Flashcard 1: $F = -NkT[\ln(V/N\lambda^3) + 1]$, $P$, $S = Nk[\ln(V/N\lambda^3) + \frac52]$, $E = \frac32NkT$. Correct.
- Flashcard 2: correct (slides 3–4).
- Flashcard 3: $Z_1$, $U$ and high-$T$ occupation $g/(1+g)$. Correct (slides 15, 16, 19).

## Coverage and order
- Every slide 1–23 is covered: canonical density (1), advantages: whole phase space (2) and separation (3–4), ideal gas (5–9), oscillators (10–12), classical vs quantum (13), two-level impurity (14–19), $U$ from $Z$ (20–23). Order follows MIT except the placement of slide 17 (see #5).
- Slide 9's final relation $V/V_0 = (T/T_0)^{-3/2}$ is not written out; "$VT^{3/2}$ is constant" says the same.
- Added material: the density-of-states explanation (#3), the Sackur–Tetrode name (marked), extensivity (#10), "fixed in place, they are distinguishable" for the oscillators (correct reason for no $N!$; the slide says only "stationary"), the explanation in the plot caption, and the worked example (own numbers and situation, not copied from MIT).
- leadsTo Lecture 14 "Polyatomic gases: Z₁ for molecules that also rotate and vibrate": the Lecture 14 slides (text) start with "Polyatomic Gases … Find $Z_1$", split $3\#$ coordinates into centre of mass, rotation and vibration, and treat vibration as quantum oscillators. Correct; matches the syllabus title in `_course.json`.
- No `Callout kind="cosmology"` on this page, so there is no cosmology claim to check. (Optional: the thermal de Broglie wavelength and $n\lambda^3 \ll 1$ connect to the particle densities in 8.286's thermal history lectures.)

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text file found none, and every slide image was inspected (slide 17's chart and slide 14's diagram carry no credit). Only the standard OCW notice on PDF page 24.
- No figures reused; the heat-capacity graph is generated from the formula; slide 14's diagram is described in words.
- No OpenStax or LibreTexts material.
- Wording is rewritten throughout. Closest to the slides are short clauses: "For $N$ similar, non-interacting systems" (slide 4, identical), "Usually, but not always, $U = \langle H\rangle$" (slide 20: "Usually (but not always)"), "an adiabat of classical oscillators is a path of constant temperature" (slide 11: "an adiabatic path for a collection of classical harmonic oscillators is one of constant temperature") and "independent of temperature, even if the oscillators have a variety of frequencies" (slide 12: "independent of temperature. This would be true even if the oscillators had a variety of different frequencies"). Each is a short clause of standard content; acceptable, though the slide 12 one could be reworded (e.g. "whatever the temperature, and whatever mix of frequencies the oscillators have").
- No em dashes (—) in the page (grep found none; "Sackur–Tetrode" and "slides 1–23" use en dashes).

## Notes
- Fix #1 (citation) and the page can pass; #2 and #3 are recommended; the rest is optional.
- I did not check data/symbols.json meanings for this page (`content:check` covers it).
- The "measured" helium entropy in the worked example is checked against a value I know rather than a fetched source; treat that confirmation as reliable but unsourced.

## Resolution (2026-11-17, by the page author)

- Error 1: "Oscillators: thermodynamics" now cites slides 11–12.
- Warning 2: the slide 9 slip (V/T^{3/2} in one step) is noted in brackets.
- Warning 3: the remark on p(E) rising and falling is now marked as the page's own, limited to systems with many degrees of freedom, and the single one-dimensional oscillator is given as the exception.
- Info: λ³ ∝ T^{-3/2} now cites slide 7; the peak positions are given (about 0.32ε for g = 5 to 0.42ε for g = 1); the remark that N! makes S extensive is marked as the page's own; the slide 12 sentence is reworded. T₀ now has its own meaning on this page (a reference temperature). The plot order and slide 16 wording are left as they are.
