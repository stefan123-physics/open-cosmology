---
page: content/year-3/8.044/canonical-ensemble.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l12/ (read: the 19-page slide PDF mit8_044s13_l12.pdf; every page checked as an image because the text extraction is garbled)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_canonical/ (read: "Notes on the Canonical Ensemble", mit8_044s13_canonical.pdf, 5 PDF pages = printed pp. 1–4 plus the OCW notice, text via pdftotext)
  - mit8_044s13_l9.txt and mit8_044s13_l13.txt (read as text only, to check the claims about Lecture 9's two-level result and Lecture 13's examples)
  - calcs/8.044/canonical-ensemble.yaml (read)
verdict: needs-changes
---

# Review: Refrigerators, the third law and the canonical ensemble

Slide numbering (checked on the images): PDF pages 1–7 = L12B1–L12B7; PDF 8 = L7B2 (equilibrium density depends only on the energy); PDF 9 = L7B17 (Maxwell distribution for $p_x$); PDF 10 = an unlabelled worked solution, part (d), for $N$ classical oscillators (no slide label); PDF 11 = L12B8; PDF 12 = L12B9; PDF 13 = L12B10; PDF 14 = L12B11; PDF 15 = L12B12; PDF 16 = L12B13; PDF 17 = L12B14; PDF 18 = L12B15; PDF 19 = OCW notice. The page cites the printed labels.

Notes page numbering (printed footers): p. 1 = introduction and the subsystem/remainder set-up; p. 2 = $p(\{p_1,q_1\}) = \Omega_1\Omega_2(E-E_1)/\Omega(E)$, the expansion of $S_2$ and $k\ln p = -H_1/T + S_2(E) - S(E)$; p. 3 = the "too small for thermodynamics" case, additivity of entropy, $\langle E_1\rangle - TS_1 = F_1$ and $p = Z^{-1}e^{-H/kT}$; p. 4 = $Z_N(T,V)$, $F$, $S$, $P$ and the paramagnet warning.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Deriving the canonical ensemble", formula "Normalization and the free energy", `at="slide 14"` | The first part, $p(\{p_1,q_1\}) = \exp[(\langle E_1\rangle - TS_1)/kT]\exp[-\mathcal H_1/kT]$ with the brace "$\equiv 1/Zh^\alpha$", is on **slide 13** (image checked; also notes p. 3). Only the second part, $\langle E_1\rangle - TS_1 = U_1 - T_1S_1 = F_1$, is on slide 14 (top line). | Cites the whole two-part formula to slide 14. | `at="slides 13–14"` (the surrounding text already says "slides 13–14; notes p. 3"). Alternatively `cite="reading1" at="p. 3"`, where both parts are on one page. |
| 2 | info | "Deriving the canonical ensemble", partition function and the bracket "(The slides divide the phase-space integral by a power of Planck's constant to make $Z$ a pure number.)" | Slide 13 writes the prefactor as $1/Zh^\alpha$; slide 14 writes $p = (Zh^\alpha)^{-1}\exp[-\mathcal H/kT]$ and $Z(T,V,N) = \int\exp[-\mathcal H/kT]\{dp,dq\}/h^\alpha$. The notes (p. 3–4) have no $h$: $p = Z^{-1}\exp[-H/kT]$, $Z_N(T,V) = \int\exp[-H/kT]\{dp,dq\}$. The slides do not say why $h^\alpha$ is there. | Follows the notes (cited `reading1` p. 4, correct) and mentions the slides' $h^\alpha$. | The notation note is accurate and the choice to follow the notes is stated. "To make $Z$ a pure number" is the page's own (correct) explanation, not the slides'; optionally say "(presumably) to make…" or "which makes $Z$ dimensionless". The quiz/flashcard formula $Z = \int e^{-H/kT}\{dp,dq\}$ is consistent with the notes. |
| 3 | info | Formula "Canonical probability density", `at="slide 12"` | Slide 12 writes the normalized density as a ratio, $\exp[-\mathcal H_1/kT]/\int\exp[-\mathcal H_1/kT]\{dp_1,dq_1\}$; it does not name the denominator $Z_1$. | Writes $Z_1^{-1}\exp[-H_1/kT]$ with $Z_1 = \int\ldots$. | Same mathematics; the name $Z_1$ is the page's. Fine. |
| 4 | info | Notation note "$H_1$ is evaluated at $\{p_1, q_1\}$ (this page writes it without the argument inside fractions)" | Slides 11–14 and the notes write $\mathcal H_1(\{p_1,q_1\})$ in every fraction (script $\mathcal H$ on the slides, $H$ in the notes). | Writes $H_1$ and explains the dropped argument; $E_1 = H_1(\{p_1,q_1\})$ is written with its argument in the text before slide 11's formula. | Accurate and stated. Fine. |
| 5 | info | "Refrigerators and heat pumps", "In practice it gets harder and harder to approach $T = 0$, since the performance falls towards zero as $T_C$ does" | Slide 2: "Practical: increasingly difficult to approach $T = 0$." No reason given. | Adds the reason. | The reason is correct ($T_C/(T_H - T_C) \to 0$ as $T_C \to 0$) and follows from slide 1. Fine; it is the page's own gloss. |
| 6 | info | Slide 4 example, "ground water at 286 K (55 °F, typical at 40° latitude)" | Slide 4: "55° F subsurface temp. at 40° latitude". | "ground water". | Close enough (ground-source heat pumps use either soil or ground water); optionally "the ground below the surface" to match the slide exactly. |
| 7 | info | Slides 1, 3, 4 | Slides write the work as $\Delta W$ ("work done on substance"). | Writes $W$. | Harmless notation change. Fine. |
| 8 | info | "Expand $S_2$ about $E$ (only a mathematical step; no energy is really moved) (slide 10)" | The bracketed remark is from the notes (p. 2: "we are not physically putting all the energy of the system into the remainder"), not slide 10. Likewise "the bath is so large that it hardly matters whether it is evaluated at $E$ or at the bath's average energy" is notes p. 2, not slide 11. | Attributes the paragraph to slides 10/11 only. | Optionally add "notes p. 2" to these sentences. The formulas' own citations (slides 10 and 11) are correct. |
| 9 | info | Opening paragraph, "a worked homework solution on oscillators" | PDF page 10 is a solution "d)" for $N$ classical oscillators with no slide label and no statement that it is a homework problem. | "worked homework solution". | Uncertain whether it is homework; "a worked solution (part d of a problem) on oscillators" is safer. |

## Formula citations (all checked against the slide images and the notes text)
- Refrigerator $|Q_C|/W = T_C/(T_H - T_C)$: slide 1. Correct.
- Heat pump $|Q_H|/W = T_H/(T_H - T_C)$: slide 3. Correct.
- Third law $\lim_{T\to 0} S = S_0$: slide 5. Correct (with $S \to k\ln g$, $g$ usually 1, also on slide 5).
- $\alpha = \frac1V(\partial V/\partial T)_P = -\frac1V(\partial S/\partial P)_T \to 0$: slide 6. Correct. In-text $C_P - C_V = TV\alpha^2/\kappa_T$ and $S(T) - S(0) = \int_0^T C_V/T'\,dT'$ are also slide 6 (slide writes $\mathcal K_T$). The Maxwell relation $(\partial V/\partial T)_P = -(\partial S/\partial P)_T$ does come from $dG = -S\,dT + V\,dP$, so "the Gibbs Maxwell relation" is right.
- $p(\{p_1,q_1\}) = \Omega_1\Omega_2(E - E_1)/\Omega(E)$: slide 9. Correct.
- Expansion of $S_2$: slide 10. Correct.
- $k\ln p = -H_1/T + S_2(E) - S(E)$: slide 11. Correct.
- Canonical probability density: slide 12. Correct (see #3).
- Normalization and the free energy: slide 14. **Partly wrong**, see #1.
- Partition function $Z_N(T,V) = \int e^{-H/kT}\{dp,dq\} = e^{-F/kT}$: notes p. 4. Correct (the notes write the intermediate $\exp[-(E - TS)/kT]$, which the page skips).
- $F = -kT\ln Z_N$, $S = -(\partial F/\partial T)_{V,N}$, $P = -(\partial F/\partial V)_{T,N}$: slide 15. Correct (identical on notes p. 4).
- Paramagnet warning $E = \langle H\rangle$: notes p. 4. Correct; the notes do say paramagnets are examined "later in the course".

## Arithmetic and answer checks
- Slide 4: 55 °F = 285.93 K ≈ 286 K; 70 °F = 294.26 K ≈ 294 K; 294/8 = 36.75 ≈ 37. Correct (slide writes "∼ 37").
- Example (a): 255/45 = 5.667 ≈ 5.67. Correct.
- Example (b): 293/23 = 12.739 ≈ 12.7. Correct. "The smaller the temperature lift, the better" is correct.
- Example (c): $Z = 1 + e^{-1} = 1.36788 \approx 1.368$; $e^{-1}/Z = 1/(e + 1) = 0.26894 \approx 0.269$; $F/kT = -\ln 1.36788 = -0.31326 \approx -0.313$. Correct.
- Claim "exactly what Lecture 9 found by counting states of the whole system microcanonically": the Lecture 9 slides (text) give $p(1) = N_1/N = [e^{\epsilon/kT} + 1]^{-1}$ for one member of the two-level system, derived microcanonically; at $kT = \epsilon$ this is $1/(e + 1)$. Correct.
- calcs/8.044/canonical-ensemble.yaml: all ten entries match the numbers and formulas on the page (identities for slides 1 and 3, slide 4's conversions and ratio, example (a)–(c)). Not run here.
- Quiz 1: answer 0, $T_C/(T_H - T_C)$. Correct; explanation correct.
- Quiz 2: answer 0, heat capacities go to zero. Correct; the explanation (a finite $\int_0^T C/T'\,dT'$ requires $C \to 0$) is right, since a nonzero limit of $C$ would make the integral diverge logarithmically. The distractor "every expansion coefficient stays constant" is wrong as intended (they tend to zero).
- Quiz 3: answer 0, $Z^{-1}e^{-H/kT}$. Correct; the explanation (first-order expansion of the reservoir entropy) matches slides 10–12.
- Quiz 4: answer 0, $F = -kT\ln Z$. Correct; $e^{(\langle E\rangle - TS)/kT} = e^{F/kT} = 1/Z$ matches slides 13–14 (without the $h^\alpha$).
- Flashcards: all three correct (refrigerator/heat-pump limits with equality for a reversible Carnot cycle; third law with $S_0 = k\ln g$; canonical ensemble summary matching slide 15 and notes p. 4).

## Coverage and order
- The page follows L12B1–B15 in order: refrigerator (1–2), heat pump (3–4), third law and its consequences (5–6), ensembles (7), subsystem and bath (8), derivation (9–12), thermodynamic case (13–14), partition function as the source of thermodynamics (15). Every slide is covered. The notes (pp. 1–4) are woven in at the matching points.
- The inserted pages (L7B2, L7B17 and the oscillator solution) are mentioned in the opening paragraph and not covered; that is reasonable, since they are reminders of Lecture 7 material. Note that the oscillator solution (PDF 10) is effectively a microcanonical derivation of the Boltzmann factor for one oscillator, $p \propto \exp[-\epsilon/\langle\epsilon\rangle]$; the page could mention it in one line as a preview of the result derived generally here, but this is optional.
- Added material: the worked example (own numbers), the remark on why performance falls as $T_C \to 0$, and the explanation of $h^\alpha$.
- leadsTo Lecture 13 "Examples using the canonical ensemble, starting from Z": matches the syllabus title and the Lecture 13 slides (text), which treat the monatomic ideal gas, the classical harmonic oscillator and a two-level system. Correct.
- No `Callout kind="cosmology"` on this page, so there is no cosmology claim to check. (A forward link exists in principle: the Boltzmann factor underlies recombination/Saha and freeze-out in 8.286 and 8.902 Lecture 19; optional.)

## Licensing
- Neither the slides nor the notes carry "All rights reserved" or "Courtesy of" notices (grep of both text files and inspection of every slide image). Only the standard OCW notice page.
- No figures reused; the page has no diagram (slide 8's box diagram is described in words).
- No OpenStax or LibreTexts material.
- Wording: rewritten throughout. Closest to the source are short phrases: "Philosophically, $T = 0$ is the point at which no more heat can be extracted" (slide 2: "Philosophical: $T = 0$ is point at which no more heat can be extracted"), "Used when the particle number is not fixed" (slide 7, identical), "the rest depend on the bath and on the subsystem's average properties" (slide 11) and "the partition function is the source of thermodynamic information" (slide 15, identical, in bold). Each is a single short clause of standard content; acceptable, but the slide 2 sentence could be reworded (e.g. "in principle, $T = 0$ is where a refrigerator could extract no more heat").
- No em dashes (—) in the page (grep found none).

## Notes
- Fix #1 (citation) and the page can pass; everything else is optional.
- The page uses $\epsilon$ for the two-level spacing in the worked example and $H$, $H_1$ for Hamiltonians; I did not check data/symbols.json meanings for this page (outside this review's scope; `content:check` covers it).
- The heading "Ensembles" summary of the grand canonical ensemble says "the chemical potential" where the slide writes $\mu$; fine.

## Resolution (2026-11-17, by the page author)

- Error 1: the "Normalization and the free energy" formula now cites slides 13–14.
- Info: the slide 2 sentence about T = 0 is reworded; the two remarks from notes p. 2 (the expansion is only a mathematical step; the bath is large enough) now credit the notes; slide 4's "subsurface" is rendered as "the ground below the surface"; "homework" is dropped for the inserted oscillator solution. The other info items need no change.
