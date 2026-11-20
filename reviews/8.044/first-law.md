---
page: content/year-3/8.044/first-law.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read: the 25-page slide PDF mit8_044s13_l6.pdf, text via pdftotext; slides 1, 14–17 and 20 also checked as images)
verdict: pass-with-notes
---

# Review: The first law of thermodynamics and paths

PDF page n = slide L6B n for n = 1–24 (page 25 is the OCW notice). Some pages carry stray overlapping labels from other decks (pages 14–16, 22 and 23 show fragments such as "8.044L12B2", "L12B9", "8.084.404L46L1B22B310"); the visible slide labels confirm the mapping, so every slide number the page cites refers to the right slide.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The ideal gas", free expansion (slides 16–17) | Slide 16 draws the gas container sitting **inside a bath** ("bath initially at T_i", "observe T_f = T_i"); slide 17: T_f = T_i ⇒ ΔQ = 0. The bath is the calorimeter that would detect heat. The slide says "free expansion" and does not name Joule. | "a gas in an insulated container expands into vacuum: no work is done and, the bath showing no change of temperature, no heat flows" and "Joule's free expansion". | Describe the container as immersed in a bath (not insulated); with insulation Q = 0 trivially and the bath reading would be pointless. Mark "Joule's" as the page's addition, as was done for van der Waals. |
| 2 | warning | Cosmology callout | Not in the slides (page's own comparison, marked as such). | "radiation, with $\gamma = \frac43$, cools as $V^{-1/3}$". | The page defines $\gamma \equiv C_P/C_V$, and its $TV^{\gamma-1}$ result used the ideal-gas $\alpha = 1/T$. For black-body radiation $P$ depends only on $T$, so $C_P$ is not finite and $C_P/C_V \ne 4/3$; what holds is $PV^{4/3}$ = constant and $TV^{1/3}$ = constant on adiabats (from $U = 3PV$, $P \propto T^4$). Say "radiation's adiabats follow $PV^{4/3}$ = constant (an exponent of 4/3, which for radiation is not $C_P/C_V$)". |
| 3 | warning | Cosmology callout, last sentence | Not in the slides. | "once the gas of atoms decoupled from the photons, it cooled faster than the cosmic microwave background". | As worded this is imprecise: after photon decoupling (z ≈ 1100) the residual free electrons keep the gas temperature locked to the CMB by Compton scattering until roughly z ≈ 100–200 (standard recombination physics; not checked against a cited source here, so treat the exact redshift as approximate). Suggest "once the gas stopped exchanging energy with the photons, some time after the photons decoupled, it cooled faster…". The linked 8.286 Lecture 17 page treats $T \propto 1/a$ for radiation only and does not support the matter-temperature claim, so the claim should stay marked as the page's own. |
| 4 | info | "Paths are experiments" (slide 15) | Slide 15 gives $v = \sqrt{1/(\rho\kappa_S)}$. | "the speed of sound involves the adiabatic compressibility $\kappa_S$", no formula. | Optional: add it as `<Formula cite="mit" at="slide 15">`. |
| 5 | info | First law (slide 8) | Displayed equation $dU = đQ + đW$. | Given inline inside a blockquote, not as a `<Formula>`. | Consider a cited `<Formula label="First law" … at="slide 8" />`, since it is the lecture's central equation. |
| 6 | info | "Ideal gas energy" formula (slide 18) | $U = \int_0^T C_V(T')\,dT' + c$, "constant set = 0". | Constant omitted without comment. | Add "(choosing the constant to be zero)". |
| 7 | info | Ideal gas, $(\partial U/\partial V)_T = 0$ (slide 17) | ΔU = 0 "here" (in the free expansion) → $(\partial U/\partial V)_T = 0$, labelled "quasi-static changes". | "Hence $(\partial U/\partial V)_T = 0$". | Acceptable; optionally note that the expansion itself is not quasi-static and the conclusion is about the state function $U$. |
| 8 | info | van der Waals reconstruction | Slides do not interpret $a$ and $b$. | "$b$ for the volume each molecule occupies and $a$ for the attraction between molecules". | Standard interpretation; could be marked as the page's addition together with the name. |

Formulas checked and found correct (content and citation): response functions (slide 1; $\alpha$, $\kappa_T$, $\kappa_S$, $\chi_T$ as on the slide, only the display order differs); measured derivatives (slide 2); reconstruction $P = NkT/(V-Nb) - aN^2/V^2$ with $c = 0$ from the ideal-gas limit (slides 3–4); $\Delta U = W_{\text{adiabatic}}$ (slide 6, observational fact on slide 5); $đQ \equiv dU - đW$ (slide 7); first law (slide 8); ordering of temperatures (slide 9); $C_V$, $C_P$ definitions (slide 10); $đQ = dU + P\,dV$ and the $dU$ expansion (slide 11); $C_V = (\partial U/\partial T)_V$ (slide 12); $C_P - C_V$, "$C_P \ne (\partial U/\partial T)_P$" and the second-law remark (slide 13); paths as experimental conditions (slide 14); sound wave (slide 15); $C_P - C_V = Nk$, $C_P = \frac52Nk$, $\gamma = \frac53$ (slides 18–19); adiabat slope $-(C_P - C_V)/(C_V\,\alpha V) = -(\gamma-1)/(\alpha V)$ (slide 20, matching the slide's underbrace $(C_P - C_V)/\alpha V$); $\alpha = 1/T$ and $T/T_0 = (V/V_0)^{-(\gamma-1)}$ (slide 21); $PV^\gamma$ = constant and $dP/dV = -\frac53 P/V$ against $-P/V$ (slide 22); the two expansions (slide 23); summary (slide 24). The notation change from the slides' barred d to $\delta Q$, $\delta W$ is stated on the page.

## Arithmetic and answer checks
- Example (a): $C_V = 1.5 \times 8.314 = 12.47 \approx 12.5$ J/K; $C_P = 20.785 \approx 20.8$ J/K; $U = 1.5 \times 8.314 \times 300 = 3741$ J ≈ 3.74 kJ. Correct.
- Example (b): $2^{2/3} = 1.5874$, $T_2 = 476.2$ K ≈ 476 K; $2^{5/3} = 3.1748 \approx 3.17$; $W = 12.471 \times 176.2 = 2197.6$ J ≈ 2.20 kJ. Correct. Info: the shown product "12.47 × 176" evaluates to 2194.7 J ≈ 2.19 kJ; write 176.2 so the shown factors give the stated 2.20.
- Example (c): $\alpha = 1/300 = 3.33 \times 10^{-3}$ K⁻¹. Correct.
- Quiz 1 (answer 0): correct (slides 5–6).
- Quiz 2 (answer 0, $Nk$): correct (slide 19); explanation correct.
- Quiz 3 (answer 0, $2^{2/3} \approx 1.59$): correct; pressure factor $2^{5/3}$ in the explanation correct.
- Quiz 4 (answer 0): correct (slides 16–17, 23).
- Flashcards: all three correct.
- Plot: $1/V$ and $V^{-5/3}$ both pass through (1, 1); the adiabat is steeper on both sides, as stated. At $V = 0.4$ the adiabat (≈ 4.6) exceeds the range 4 and is clipped, which is harmless. Caption correct.
- calcs/8.044/first-law.yaml covers every number on the page (example, quiz, γ, and identity checks for the van der Waals derivative and the adiabat slope).

## Coverage and order
- The page follows slides 1–24 in order with none omitted: response functions (1), van der Waals reconstruction (2–4), internal energy (5–6), heat (7), first law (8), temperature ordering (9), heat capacities (10–13), paths (14–15), ideal gas (16–19), adiabats (20–22), expansions (23), summary (24).
- Additions: the names "van der Waals" (marked) and "Joule" (not marked, see #1); the meaning of $a$ and $b$; the cosmology callout (marked as the page's own); the worked example.
- Only omission of substance: the sound-speed formula on slide 15 (#4).

## Licensing
- The slides carry no "All rights reserved" or "Courtesy of" notices (grep of the extracted text and visual check); only the standard OCW terms page.
- No slide figures reproduced; the only graph is a `<Plot>` generated from formulas.
- No verbatim copying beyond short standard phrases (the three first-law bullets are paraphrased; acceptable).
- The helium example is original (the slides have no numerical example). No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.044 Lecture 7 matches the syllabus entry ("Statistical mechanics and the microcanonical ensemble"). leadsTo 8.286 Lecture 17 and the callout link `/courses/8-286/temperature-and-decoupling` point to an existing page (lecture 17) whose $T \propto 1/a$ for radiation agrees with the callout; see #2 and #3 for the wording about γ and the gas temperature.
- "The expanding universe has no outside to exchange heat with" is the standard argument and fine.
- No errors found; three warnings (#1–#3); the info items are optional.

## Resolution (2026-11-17, by the page author)

1. The free-expansion paragraph now puts the container in a bath, as on slide 16, and marks "Joule's experiment" as the page's addition; it also notes that the result is then used for quasistatic changes (slide 17).
2. The callout now gives 4/3 as the adiabatic exponent of black-body radiation (PV^{4/3} constant), not as a ratio of heat capacities.
3. The callout now says the gas kept exchanging energy with the photons somewhat after decoupling, through leftover free electrons; the comparison stays marked as the page's own.
4.–5. No change.
6. Added "setting the integration constant to zero" for U = (3/2)NkT.
7. Covered under 1.
8. The readings of a and b are now marked as the page's additions.
9. The example now shows 12.47 × 176.2 ≈ 2.20 kJ.

Status set to `reviewed`.
