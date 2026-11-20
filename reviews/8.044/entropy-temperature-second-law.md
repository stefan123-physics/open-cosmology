---
page: content/year-3/8.044/entropy-temperature-second-law.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l8/ (read: the 14-page slide PDF mit8_044s13_l8.pdf, text via pdftotext; slides 4, 6, 7, 9 and 11 also checked as images because the text extraction is garbled)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_mcrocanoncl/ (read: notes pp. 4–8 page by page; p. 6 also checked as an image)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l9/ (read: Lecture 9 slides 1–5, to check the leadsTo claim)
  - mit8_044s13_l6.pdf (Lecture 6 slides 18–21, text only, to check the "PV^(5/3) from Lecture 6" remark)
verdict: pass-with-notes
---

# Review: Entropy, temperature and the second law

PDF page n = slide L8B n for n = 1–13 (page 14 is the OCW notice). In the notes, the printed page number equals the PDF page number (checked for pp. 4–8).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot caption ("Temperature") | Lecture 7 slide 12 / L8 slide 9: $\Omega \approx (3N/2)(\Delta/E)\,\Phi$, so $\Omega \propto E^{3N/2-1}$; it is $\Phi$ that goes as $E^{3N/2}$. | "computed from Ω₁ ∝ E₁^(3N₁/2) and Ω₂ ∝ E₂^(3N₂/2) (ideal gases, so Ω ∝ E^(3N/2) as in the previous lecture)" | The power is that of Φ, not Ω. With the exact Ω the peak sits at $(n-1)/(3n-2)$ (0.31 at the default $n = 5$, 0 at $n = 1$), not exactly 1/3. Say the curve uses $\Phi \propto E^{3N/2}$ (allowed because $S \approx k\ln\Phi$, notes p. 4), or "Ω ∝ E^(3N/2) up to a factor of order 1/E, negligible for large N". |
| 2 | warning | frontmatter `leadsTo` (Lecture 9) | L9 slide 3 and notes p. 8: the combined first and second laws are an **inequality**, $dE \le T\,dS + đW$, with equality only for equilibrium (reversible) changes. | "the combined first and second laws, dE = T dS + Σ X dx" | Write "dE ≤ T dS + Σ X dx (equality for reversible changes)", or say "for reversible changes, dE = T dS + Σ X dx". The rest of the claim (equations of state from derivatives of S) matches L9 slides 1, 4–5. |
| 3 | warning | "The second law", blockquote after the slide-7 formula | Slide 7: "The total entropy of an isolated system always increases or, at equilibrium, remains constant." | "The total entropy of an isolated system increases, or, at equilibrium, stays constant: ΔS ≥ 0." | Near-verbatim (one word changed, one dropped). It is a short statement of a law, but rewrite it, e.g. "In an isolated system, entropy can only grow; once equilibrium is reached it stops changing: ΔS ≥ 0." |
| 4 | info | "The second law", isolated system | Slides 6–7 and notes p. 6 write the equilibrium energy as $E_1^*$. | Uses $\bar E_1$. | Acceptable, but say once that MIT writes $E_1^*$, or follow MIT's notation, since the formula is cited to slide 7. |
| 5 | info | "The ideal monatomic gas", bracket after the entropy formula | Slide 9: $S = kN\ln\{\dots\} - \ln\left(\frac23\frac1\Delta\frac EN\right)$, i.e. the second term has no factor $k$ (a slip on the slide). | "Using Ω instead adds $k\ln(3N\Delta/2E)$" | The page is right ($-k\ln(2E/3N\Delta) = +k\ln(3N\Delta/2E)$). Under writing rule 4, optionally add "(the slide drops the k)". |
| 6 | info | "Temperature", sentence after the probability formula | Notes p. 5: "Solving would give the most probable value of E1. More important is the fact that this expression specifies the equilibrium condition." | "Solving it gives the most probable $E_1$; more importantly, it is the **condition for thermal equilibrium**." | Close paraphrase of the notes' sentence structure; acceptable, but could be reworded further. |
| 7 | info | "The second law", contact with a bath | Notes p. 6: "system 2 is so large compared to system 1 that the heat added to it, đQ₂, does not change its temperature." | "Let system 2 be so large that the heat it receives does not change its temperature" | Close paraphrase of a technical definition; acceptable. |
| 8 | info | "Temperature", after the definition of T | Not stated in the Lecture 8 slides or notes pp. 4–7. | "For large systems $p(E_1)$ is extremely sharp, so the most probable energy is, for all purposes, the energy." | Correct physics, and the plot illustrates it; consider marking it as the page's own remark (no citation needed). |

Formulas checked and found correct (content and citation): entropy $S \equiv k\ln\Omega \approx k\ln\rho \approx k\ln\Phi$ (notes p. 4; also slide 2), with the "differ by order ln N" remark (notes p. 4); combined phase volume $\Omega(E) = \int_0^E \Omega_1(E')\Omega_2(E - E')\,dE'$ (notes p. 4); $p(E_1) = \Omega_1\Omega_2/\Omega$ and $\ln p = \frac1k[S_1 + S_2 - S]$ (slide 4, image checked; normalisation on notes p. 5); the equal-derivative condition with $đW = 0$ subscripts (slide 5; derived on notes p. 5); $(\partial S/\partial E)_{đW=0} = 1/T$ (notes p. 5), with the ideal-gas and Carnot agreement (notes p. 6, page says pp. 5–6, correct); $0 \le \Delta S_1 + \Delta S_2 = \Delta S$ (slide 7, image checked); $dS_2 = dE_2/T_2 = đQ_2/T_2 = -đQ_1/T_{\text{bath}}$ and $dS_1 \ge đQ_1/T_{\text{bath}}$ (slide 8; notes pp. 6–7); "the two inequalities form the second law" (notes p. 7); quasi-static and equality (slide 13); ideal-gas entropy (slide 9, image checked); $1/T = \frac32Nk/E$, $E = \frac32NkT$, $C_V = \frac32Nk$, $U = E$ (slide 10); $S = kN\ln[V(2\pi emkT)^{3/2}]$ (verified: $4\pi em\cdot\frac32NkT/3N = 2\pi emkT$) and $VT^{3/2}$ = constant at fixed $N$ (slide 11, image checked); the logic summary (slide 12).

"The same as $PV^{5/3}$ = constant from Lecture 6" is correct: with $PV = NkT$, $VT^{3/2} \propto V(PV)^{3/2} = (PV^{5/3})^{3/2}$; Lecture 6 slides 19–21 derive the adiabat $PV^\gamma$ = constant and give $C_P/C_V = 5/3$ for the monatomic gas (slide 18–19, text only).

## Arithmetic and answer checks
- Example (a): $4000/(3 \times 8.314) = 160.37$ K, $2000/(6 \times 8.314) = 40.09$ K. Correct.
- Example (b): equal $E/N$ with $N_2 = 2N_1$ gives $\bar E_1 = 1$ kJ, $\bar E_2 = 2$ kJ; $T = 2000/(3 \times 8.314) = 80.19$ K (both gases: $4000/(6 \times 8.314)$ also 80.19). Correct.
- Example (c): $\frac32R = 12.471$, $12.471\ln\frac12 = -8.644$ J/K; $3R = 24.942$, $24.942\ln 2 = 17.288$ J/K; total $+8.644$ J/K. Correct (that the total equals $|\Delta S_1|$ is a coincidence of the chosen numbers, not an error). "The cold gas gains more than the hot gas loses": correct.
- Example (d): $T_2 = 300 \times 8^{2/3} = 300 \times 4 = 1200$ K. Correct.
- Example is original (the slides and notes have no numerical example).
- Plot: $(3x)^n(1.5(1-x))^{2n}$ equals 1 at $x = 1/3$ and that is its maximum (checked numerically on a 1001-point grid for $n = 5$; derivative $n/x - 2n/(1-x) = 0$ at $x = 1/3$). Correct for the formula used; see #1 for the Ω vs Φ wording.
- Quiz 1 (answer 0): correct (notes p. 4); explanation correct.
- Quiz 2 (answer 0): correct (slides 4–5; notes p. 5).
- Quiz 3 (answer 0): correct (slides 8, 13).
- Quiz 4 (answer 0): correct (slide 10); explanation correct.
- Flashcards: all three correct. Card 2's "equality only for quasi-static processes" matches slide 13 ("required for = in above 2nd law relations").
- calcs/8.044/entropy-temperature-second-law.yaml covers every number on the page; its 10 entries pass (`pytest -k entropy-temperature`: 10 passed).

## Coverage and order
- The page follows slides 1–13 in order: Ω recap (1), entropy (2), two systems in thermal contact (3), p(E₁) and its maximum (4–5), the two inequalities (6–8), ideal gas: entropy (9), energy relation (10), adiabat (11), logic (12), quasi-static (13). Notes sections 4–6 (pp. 4–7) are covered in the same order.
- The step-by-step derivative on notes p. 5 is summarised rather than reproduced; acceptable.
- Notes section 7 (p. 7 bottom onward, entropy as a thermodynamic variable) is Lecture 9 material (L9 slide 1 is headed "7. Entropy as a Thermodynamic Variable"), so stopping at section 6 is right.
- Additions: the p(E₁) plot and the worked example (both the page's own), the sharp-peak remark (#8).

## Licensing
- Neither the slides nor the notes carry "All rights reserved" or "Courtesy of" notices (grep of the extracted text; slides viewed as images show no credits); only the standard OCW terms page.
- No figures reproduced (slide 3's sketch of two systems is not used); the only graph is a `<Plot>` generated from a formula.
- One near-verbatim sentence (#3) and two close paraphrases (#6, #7); otherwise rewritten. No OpenStax or LibreTexts material.

## Notes
- No em dashes (—) on the page (grep).
- No cosmology callout on this page, so there are no cosmology claims to check.
- Earlier-lecture claims checked: "the previous lecture counted Ω" and $\Phi = V^N(4\pi emE/3N)^{3N/2}$ (Lecture 7 slide 12, repeated on L8 slide 9); PV^γ from Lecture 6 (above).
- No errors. Fix the three warnings before setting `status: reviewed`.

## Resolution (2026-11-17, by the page author)

- Warning 1: the plot caption now says the curve uses Φ ∝ E^(3N/2) in place of Ω (the two differ by a factor of order E, as S ≈ k ln Φ).
- Warning 2: the Lecture 9 `leadsTo` now gives dE ≤ T dS + δW, with equality for reversible changes.
- Warning 3: the second-law statement is rewritten in the page's own words.
- Info: the equilibrium energy Ē₁ is noted as starred in the sources; the missing k on slide 9's ln term is noted in brackets; the two close paraphrases (the equilibrium condition, the heat bath) are rewritten; the sharpness of p(E₁) is marked as the page's own remark.
