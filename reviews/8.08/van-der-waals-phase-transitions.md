---
page: content/year-4/8.08/van-der-waals-phase-transitions.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/vanderwaals_mod/ (read: resource page; no file-specific licence, courtesy or rights notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/eafe8b81bbafeedbccbaa48417d8dca7_vanderwaals_mod.pdf (read as images: all 8 PDF pages = handwritten pp. 13-20 at 90 dpi; p. 17 also at 160 and 250 dpi)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=4 (not fetched; CO2 critical constants checked against known values: Tc 304.13 K, Pc 7.3773 MPa, rho_c 467.6 kg/m3)
verdict: pass-with-notes
---

# Review: The liquid–gas transition of the van der Waals gas

The notes are a handwritten scan with no text layer; everything below was read from the page images. Every `<Formula>` on the page was compared with the notes, every number recomputed independently (Python/SciPy script in the reviewer's scratch folder, not in the repo), and `npm run calc:test -- -k van-der-waals-phase-transitions` passes (46 passed).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The van der Waals gas at constant pressure", paragraph after the isotherm plot ("gets a kink at $P_0$ ... notes p. 17") | Wen's small G-versus-P sketch on p. 17 marks the kink of the low-T curve at "P_c" on the P axis. That is the coexistence pressure at that temperature, not the critical pressure (at the critical pressure there is no kink); a slip in the notes. | Calls it $P_0(T)$ without comment. The page is right; but AGENTS.md rule 4 asks for a short bracket when the page departs from a lecturer slip. | Add e.g. "(Wen's sketch labels this pressure $P_c$; it is the coexistence pressure at that temperature, not the critical pressure.)" |
| 2 | warning | "The Clapeyron equation", last paragraph: "Going from solid to liquid always has $\Delta S > 0$" | Notes p. 19: "from solid → liquid: ΔS > 0" (no "always"). | Adds "always". Not strictly true: below about 0.3 K solid helium-3 has more entropy than the liquid (Pomeranchuk effect), so its melting line has negative slope with ΔV > 0. | Drop "always", or write "almost always (helium-3 at very low temperature is an exception)". |
| 3 | info | Same paragraph as #1: "At low pressure the gas minimum is the deeper one, at high pressure the liquid" | In the large G(V) sketch on p. 17 Wen's arrows "low P" and "high P" point at the curve whose left (liquid) minimum is deeper and at the curve whose right (gas) minimum is deeper respectively, which read literally is the reverse of the physics; the P–T inset sketches on the same page (liquid above the line with the left minimum deeper, gas below with the right one deeper) agree with the page. Uncertain: the arrows may only identify the curves' branches. | States the physically correct order. | No change needed to the physics. Optionally note that the sketch's labels are not to be read as which minimum is deeper. |
| 4 | info | "Where is the phase transition?": "struck out in the notes with a cross" | p. 15: "We find no singularity in A(T,V), seem no phase transition" followed by a hand-drawn "×" at the end of the line; the words are not crossed through. | "struck out ... with a cross: the conclusion is wrong" | The reading (the × marks the conclusion as wrong) is reasonable. Consider "marked with a cross" rather than "struck out". |
| 5 | info | "Scaling near the critical point": "Experiments agree with the form but not with the exponent (notes p. 20)" | p. 20 only gives "experiment: ΔV ∝ \|t\|^β, β ≈ 1/3" and "Universality: does not depend on what atom that form the gas". | Adds the interpretive "agree with the form but not with the exponent", and later "The mean-field theory predicts that there should be a universal exponent". | Fine as interpretation; it could be marked as the page's reading, like the other additions. |
| 6 | info | Gibbs potential, first evaluation: "since the volume of a large system hardly fluctuates, $V_n$ can be replaced by its typical value" | p. 16 writes $Q_{\text{com}} = \sum_n e^{-\beta(E_n + V_nP)} = Q_{\text{sys}}e^{-\beta\bar VP}$ without giving a reason. | Gives a reason. | Correct and helpful; no change needed. |

All formula citations check out:
- "Free energy of the van der Waals model": boxed on p. 14, point ②. Correct.
- "Partition function of gas plus spring", "Summing over volumes", "Differential of the Gibbs potential": all on p. 16, point ④, as written (Wen writes $A(\bar V, T)$; the page writes $A(T, V^*)$ and says so). The boxed rule (fixed T,V minimize A; fixed T,P minimize G) is on p. 16. Correct.
- "Gibbs potential as a function of volume": p. 17, point ⑤, both lines, including "+ terms ind. of V". Correct.
- "Slope of the Gibbs potential": p. 18 top (still point ⑤; cited without a point number, fine). Correct.
- "Equation of state as a cubic" and the three critical conditions: boxed at the foot of p. 17 (Wen writes $RT/P$; the page writes $Nk_BT/P$, same thing with $R = Nk_B$, which the page states). Correct.
- "Critical point": boxed on p. 17, $T_c = 8a/27bR$, $P_c = a/27b^2$, $V_c = 3b$. Correct, and the page notes Wen's $R$ form.
- "Equal changes along the line", "Clapeyron equation" with $L = T\Delta S$: p. 19, point ⑥. Correct.
- "Reduced variables", "Reduced van der Waals equation" (boxed, "same for all gases near critical point ⇒ universality"): p. 20, point ⑦. Correct.
- "Gibbs potential near the critical point", "The two minima", "Volume jump", "Measured scaling" ($\beta \simeq 1/3$): p. 20, point ⑦. Correct, including the factor $\sqrt{-C_1t/2C_2}$ and $\Delta V = \sqrt{-2C_1t/C_2} \propto |t|^{1/2}$.

## Arithmetic and answer checks
Recomputed independently:
- Coexistence at $T = 0.9T_c$ (equal depth of the reduced $G$ plus equal pressures, solved with fsolve): $V_l = 0.60340$, $V_g = 2.34884$, $P = 0.646998\,P_c$. Caption's 0.647, 0.60 and 2.35 are right. With the plotted formula at $P = 0.647$ the two minima are at 0.6034 and 2.3488 with depths −1.43962 and −1.43962. Correct.
- Coexistence at $T = 0.99T_c$: $V_l = 0.83091$, $V_g = 1.24295$, $P = 0.960479$; jump 0.4120, quoted "0.41"; $4\sqrt{0.01} = 0.40$. Correct.
- Expansion $\bar P \approx 1 + 4t - 6t\phi - \tfrac32\phi^3$: checked by series (standard result). Integrating $P - P_{\text{vdW}}$ at $P = 1 + 4t$ gives $3t\phi^2 + \tfrac38\phi^4$, so $C_1 = 3$, $C_2 = 3/8$ in units of $P_cV_c$ with volumes in units of $V_c$, and $\sqrt{-2\cdot 3t/(3/8)} = 4\sqrt{-t}$. Correct, and marked as the page's addition.
- Equal-area rule: $G(V_2) - G(V_1) = \int (P - P_{\text{vdW}})\,dV$, so equal depth is equal areas. Correct, marked as the page's addition.
- Repulsion case: for $a < 0$, $\partial^2G/\partial V^2 = Nk_BT/(V-b)^2 + 2|a|/V^3 > 0$, so one zero only. Page's statement correct.
- CO₂: $RT_c = 2528.5$ J (2529); $b = 4.284\times10^{-5}$ m³ (42.8 cm³); $a = 0.3656$ Pa m⁶ mol⁻² (0.366); $3b = 128.53$ cm³ (128.5); excess over 94.1 cm³ = 36.6% (37%); $Z_c = 0.2745$ (0.274). Measured $V_c = 44.01/0.4676 = 94.12$ cm³. All correct. The data (304.13 K, 7.3773 MPa, 467.6 kg/m³) match the NIST values I know.
- Real-gas $Z_c$ range 0.23 to 0.31: water 0.229, ammonia about 0.24, most simple gases 0.27–0.31 (H₂ about 0.30, He about 0.30). Correct as "about".
- Boiling water: $RT/P = 0.030618$ m³; $dP/dT = 40660/(373.15 \times 0.0306) = 3559$ Pa/K (3.56 kPa/K); with the liquid's 18.8 cm³ subtracted, 3561 Pa/K. 3.56/101.325 = 3.5%. Correct. Data: $L_{\text{vap}} = 40.66$ kJ/mol at 100 °C is the standard value; liquid at 100 °C 18.015/0.9584 = 18.8 cm³ (0.019 L). Correct.
- Melting ice: $18.015/0.99984 = 18.02$, $18.015/0.9167 = 19.65$ cm³; $\Delta V = -1.63$ cm³; $dP/dT = 6010/(273.15 \times -1.63\times10^{-6}) = -1.350\times10^7$ Pa/K; 13.5 MPa = 133 atm ("some 130"). Correct. $L_{\text{fus}} = 6.01$ kJ/mol standard.
- $P_cV_c/(Nk_BT_c) = 3/8$ and $a/(P_cV_c^2) = 3$, $Nk_BT_c/(P_cV_c) = 8/3$. Correct.
- $\beta \approx 0.326$ today: 3D Ising class, $\beta = 0.3265$. Correct, and marked "today's best value".
- Quiz 1 (answer: $G = A + PV$ as a function of $V$): correct.
- Quiz 2 (answer: $a \approx 0.366$ Pa m⁶, $b \approx 42.8$ cm³): correct; distractor 128 cm³ = $3b$ correctly explained.
- Quiz 3 (answer: about 3.6 kPa per kelvin): correct; −13.5 MPa/K distractor correctly attributed to ice.
- Quiz 4 (answer: $\beta = \frac12$, experiments about $\frac13$ for all gases): correct; explanation's minima formula matches p. 20.
- Flashcards: all five statements correct.
- Plot ranges (minor, display only): on the G(V) plot the gas minimum leaves the bottom of the range ($-1.65$) for slider values $P/P_c \le 0.56$ (depth −1.674 at 0.56, −1.705 at 0.55), so at the low end of the slider the "winning" minimum is not visible. On the isotherm plot at the slider's low end $T/T_c = 0.8$ the wiggle dips to $P = -0.37P_c$, below the plotted range [0, 2]. Consider `min: 0.57` for `pp` (or a lower range bound) and `min: 0.85` for `tt` (or a range starting below 0).

## Coverage and order
- The page follows pp. 15–20 in Wen's order: ③ phase transition / singularity (p. 15), ④ Gibbs potential with spring and piston, two evaluations of $Q_{\text{com}}$, boxed rules, $dG$ (p. 16), ⑤ G(V) for van der Waals, three behaviours, G(P) kink, phase diagram, cubic and critical point (p. 17), signs of $a$ and $b$ and the interaction potential (p. 18), ⑥ Clapeyron and melting (p. 19), ⑦ reduced variables, universality, Landau-type $G(t, V)$, volume jump, $\beta \approx 1/3$ (p. 20).
- The worked example on CO₂ is placed after the critical point; the "Why the attraction matters" section (p. 18) comes after it. This keeps MIT's order (p. 17 then p. 18).
- Not mentioned: the small P–T sketch on p. 20 showing ΔV across the coexistence line and the direction of $t$, and the small $dG_g$/$dG_l$ sketch on p. 19. Both are only illustrations of what the page says in words; no change needed.
- Split with page 1 (pp. 13–14, points ① and ②) is clean: this page only restates the boxed $A(T,V)$ from p. 14 with a citation.
- Additions (equal-area rule, $C_1 = 3$, $C_2 = 3/8$, $\Delta\bar V \approx 4\sqrt{-t}$, the "why A misleads" paragraph, the law of corresponding states, $\beta \approx 0.326$, $Z_c$ of real gases, the two worked examples) are all marked as the page's own ("the page's addition", "in the page's words", "today's best value", NIST, or bracketed). Correct in substance (see above), except finding #2.

## Licensing
- The notes (pp. 13–20) carry no "courtesy", "rights reserved" or textbook-figure notices; the OCW resource page has only the site-wide CC BY-NC-SA notice.
- The page redraws none of Wen's sketches: both plots are generated from the reduced equation of state and the reduced Gibbs potential, with captions saying so.
- Paraphrase is the page's own; only standard short phrases ("free energy of the combined system", "three behaviours", "does not depend on what atoms the gas is made of") are close to Wen's wording. No OpenStax/LibreTexts material.

## Notes
- Cosmology callout and `leadsTo`: the 8.286 Lecture 22 page (`higgs-field`) does treat the Higgs field taking a non-zero value as a phase transition and leads to magnetic monopoles; the Lecture 23 page (`false-vacuum`) describes old inflation stuck in a false vacuum (local minimum), ending by bubble nucleation, with the bubble collisions as its downfall (graceful exit problem). The claims are fair. One nuance (info): the page says "like a superheated liquid that has not yet boiled". The 8.286 page also uses the boiling-water analogy, so it is consistent, but in the original model the universe *supercools* (it cools below the transition temperature while staying in the old phase). "Supercooled" would match the direction of the temperature change better; the boiling analogy works only for the bubble picture.
- `leadsTo` 8.08 Lecture 3 (Chapter III, Ising Model, confirmed in `_course.json`): mean-field magnetisation below $T_c$ goes as $|t|^{1/2}$, and the jump $2m$ across $h = 0$ is the analogue of ΔV. Correct. "the next chapter ... begins to approach" the theory of fluctuations: I did not read Wen's Chapter III, so whether it goes beyond mean field is unverified (the wording is hedged).
- Prerequisite slugs `van-der-waals-equation`, `maxwell-relations`, `canonical-ensemble` exist.
- No em dashes found in the page text.

## Resolution (2026-11-19, by the page author)

- Finding 1 (Wen's G(P) sketch labels the kink P_c): fixed. A bracket in the text now says the sketch labels the kink P_c, but that it is the coexistence pressure P₀, not the critical pressure.
- Finding 2 ("always" ΔS > 0 on melting): fixed. The word "always" is removed, so the text no longer claims more than the notes do.
- Finding 3 (the low P / high P arrows in the p. 17 sketch): no change. The arrows are ambiguous, and the page's text is physically right and agrees with the P–T sketches on the same page.
- Finding 4 ("struck out"): fixed. The text now says "marked in the notes with a cross".
- Finding 5 (the comparison with experiment is the page's own reading): fixed. The text now says "The notes then quote experiment (p. 20)" and marks the mean-field-versus-experiment comparison as ours.
- Finding 6 (plot ranges): fixed. The P/P_c slider of the G(V) plot now starts at 0.57, and the isotherm plot's vertical range is −0.5 to 2, so the T = 0.8 T_c wiggle stays inside the graph. Labels are re-checked by content:check.
- Finding 7 (superheated versus supercooled): fixed. The callout now calls the false vacuum "a supercooled state of the old phase" and keeps Guth's comparison with water boiling for the bubbles, as on the 8.286 page. The leadsTo text now says "which Guth compared to water boiling".
- Finding 8 (unverified claim about Chapter III): fixed by softening. The text now says only that the next chapter studies a magnet with the same kind of mean-field theory. It no longer says the chapter approaches the theory of critical phenomena.

Status set to `reviewed`. `npm run content:check` reports 0 errors and no warnings for the page, and `npm run calc:test` passes.
