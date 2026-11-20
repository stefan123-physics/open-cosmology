---
page: content/year-2/8.04/hydrogen-atom.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes22/ (read: resource page, titled "Lecture Note 22", CC BY-NC-SA 4.0; PDF "Lectures 21 and 22: Hydrogen Atom", B. Zwiebach, May 4 2016, 11 pp., pp. 1–8 read with pdftotext, footer page numbers checked)
verdict: needs-changes
---

# Review: The hydrogen atom: two bodies, its scales and the quantization of energy

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Atomic energy scale", `at="notes p. 5, eq. (2.4)"`, and the lead-in "(notes pp. 4–5)" | Eq. (2.4) is at the bottom of p. 4 (printed footer "4" follows it; p. 5 starts with eq. (2.5)) | p. 5 | `at="notes p. 4, eq. (2.4)"` and "(notes p. 4)". The same wrong page is in `calcs/8.04/hydrogen-atom.yaml` (`energy-scale`, `source.at`): fix it there too. |
| 2 | warning | Worked example step (d) | (The notes use $a_0$ both for the Bohr radius and for the first series coefficient, eq. (2.24); they never put the two side by side.) | "$W = a_0(1 - \rho)$ ... that is $r = 2a_0$": the same symbol means the series coefficient and the Bohr radius in a single sentence | Write the coefficient differently in the example (e.g. $W = c\,(1 - \rho)$ or "$W \propto 1 - \rho$"), or say that this $a_0$ is the first coefficient. The same overlap appears in "Quantization" ($a_k = \frac{2^k}{k!}a_0$), where a short "(here $a_0$ is the first coefficient, not the Bohr radius)" would help. |
| 3 | warning | Intro paragraph vs `source.title` | PDF title "Lectures 21 and 22: Hydrogen Atom"; OCW resource "Lecture Note 22"; site syllabus files it under Lectures 22 and 23 | Intro: "shared by Lectures 22 and 23"; source title: "MIT 8.04 Lectures 21–22" | Make the two agree and explain once, e.g. "notes titled 'Lectures 21 and 22', which this site's syllabus (following OCW's calendar) uses for Lectures 22 and 23". (I did not check the OCW calendar page itself: uncertain which numbering the calendar uses.) |
| 4 | warning | End of page | Project rule: foundation pages end with a `Callout kind="cosmology"` where a real link exists | `leadsTo` points to 8.286 Lecture 17, but there is no cosmology callout | Add a short callout (hydrogen's 13.6 eV and recombination/decoupling), worded as in note 5 below. |
| 5 | warning | `leadsTo` 8.286 L17 `why` | 8.286 L17 (site page `temperature-and-decoupling`) gives recombination at about 4,000 K and says that temperature depends on the density, not on hydrogen alone | "Hydrogen's 13.6 eV binding energy sets when the early universe became neutral" | Soften: "Hydrogen's 13.6 eV binding energy, together with the huge number of photons per atom, sets when ..." or "underlies when ...". kT at 4,000 K is about 0.34 eV, far below 13.6 eV, so "sets" alone is misleading. (I did not verify whether Guth quotes 13.6 eV in Lecture 17 itself.) |
| 6 | info | "Quantization", first sentence | Notes p. 7: since $\frac{2}{k+1} < \frac{2}{k}$, if the ratio $2/(k+1)$ leads to a divergence, so will $2/k$ | "the ratio tends to 2/k, which grows at least as fast as 2/(k+1)" | A ratio does not "grow". Rephrase: "a series with ratio 2/k grows at least as fast as one with ratio 2/(k+1), and the latter is $e^{2\rho}$". |
| 7 | info | Relative momentum, "try $\hat{\vec p} = \alpha\hat{\vec p}_e - \beta\hat{\vec p}_p$" | Notes use α, β here too (eq. (1.9)) | Same α then used two paragraphs later as the fine-structure constant | Optional: note that this α is not the fine-structure constant, or use other letters. |
| 8 | info | Bracket on $\alpha a_0$ | Eq. (2.5): "$\alpha a_0$ = Compton wavelength of electron = ƛ$_e$ ≈ 390 fm" (the symbol in the notes is the barred lambda, i.e. the reduced wavelength) | "the notes call it the Compton wavelength and round to 390 fm; it is ... $h/(mc)$ ... divided by $2\pi$" | Correct. Optional: add that the notes' own symbol ƛ is the reduced wavelength, so the notes' only slip is the word, not the value. |
| 9 | info | Section "Solving the radial equation" | Notes p. 6 explain why the ansatz is needed: a series solution of (2.15) would give a three-term recursion | Not mentioned | Optional half-sentence. |

All other formulas checked and found correct in content and citation: (1.1)–(1.3) p. 1; (1.4) p. 1; (1.5) p. 1; (1.6)–(1.7) p. 2; (1.8)–(1.12) pp. 2 ($\alpha + \beta = 1$, $m_e\alpha - m_p\beta = 0$ verified from the commutators); (1.13)–(1.15) pp. 2–3 ($\mu/m_e = m_p/M$, $\mu/m_p = m_e/M$); $\vec p = \mu(\vec v_e - \vec v_p)$ p. 3; (1.16)–(1.18) p. 3; (1.19)–(1.25) pp. 3–4; (2.1) p. 4; α p. 4; (2.2)–(2.3) p. 4; (2.5) p. 5; (2.6) p. 5; (2.7) p. 5; (2.11) p. 5 (the notes' letter is κ, U+03BA, confirmed from the PDF text); (2.8)–(2.12) p. 5; (2.13) p. 5, (2.14)–(2.15) p. 6 ("pp. 5–6" correct; eq. (2.15) rederived from $x = \rho/\kappa$); (2.16)–(2.18) p. 6 (equation for $W$ checked against the standard result with $\rho_0 = 1/\kappa$); recursion p. 6 (the notes print the ratio just after the (2.20)/(2.21) labels; citing (2.21) is reasonable); (2.22)–(2.27) p. 7; (2.28)–(2.31) p. 7 ($E = -2Z^2e^2\kappa^2/a_0$ with $\kappa = 1/(2n)$ gives (2.31)).

## Arithmetic and answer checks
- $a_0 = 1970 \times 137/0.51\times10^6 = 0.5292$ Å (notes' rounding); 53 pm. Correct.
- $e^2/a_0 = 511{,}000/137^2 = 27.23$ eV ≈ 27.2. Correct.
- $\alpha a_0 = \hbar c/mc^2 = 197.327\ \text{eV nm}/511{,}000\ \text{eV} = 3.862\times10^{-4}$ nm = 386.2 fm. Correct; the notes' 390 fm is a rounding.
- $\alpha^2 a_0 = 386.2/137.036 = 2.818$ fm ≈ 2.8. Correct.
- $e^2/(2a_0) = 511{,}000/(2\times137.036^2) = 13.606$ eV ≈ 13.6. Correct.
- Example (a): $197.327 \times 137.036/511{,}000 = 0.05292$ nm. Correct.
- Example (b): $1836.15/1837.15 = 0.999456$; $13.606 \times 0.999456 = 13.5986 \approx 13.599$ eV; difference 0.0074 eV; "one part in 1837" correct.
- Example (c): $13.606/2 = 6.803 \approx 6.80$ eV; $2 \times 0.05292 = 0.1058 \approx 0.106$ nm. Correct.
- Example (d): $n = 2, l = 0 \Rightarrow N = 1$, $1/\kappa = 4$; $a_1/a_0 = (2 - 4)/(1 \cdot 2) = -1$; $a_2/a_1 = (4 - 4)/(2 \cdot 3) = 0$. $\rho = 2Z\kappa r/a_0 = Zr/(na_0) = r/(2a_0)$, node at $r = 2a_0$. Correct (matches the known 2s node).
- Quiz 1 (answer 0): correct; the identity is exact (eq. (1.17)).
- Quiz 2 (answer 0): $\mu/m_e = 1/(1 + 1/1836.15) = 0.99946 \approx 0.9995$. Correct.
- Quiz 3 (answer 0): correct; explanation ($a_{k+1}/a_k \to 2/k$, $u \sim e^{\rho}$, $1/\kappa = 2(N+l+1)$) matches pp. 6–7.
- Quiz 4 (answer 0): $\mu = m_e/2$, 6.8 eV. Correct.
- Flashcards: all three correct.

## Coverage and order
- Order follows the notes: section 1 (canonical variables, CM and relative variables, reduced mass, separated Hamiltonian, separation of the Schrödinger equation), then section 2 (Coulomb potential, α, Bohr radius, energy scale, other lengths, radial equation, unit-free form, ρ, ansatz, $W$ equation, recursion, divergence argument, termination, quantization, $E_n$).
- Coverage of pp. 1–7 is complete except: the three-term-recursion remark (p. 6, finding 9) and eq. (2.29), $0 \le l \le n-1$, $0 \le N \le n-1$ (p. 7). The page says degeneracy is for the next page, so leaving (2.29) to the Lecture 23 page is acceptable; check that the Lecture 23 page states it.
- Nothing is added beyond the notes except the worked example and the reduced-Compton bracket.

## Licensing
- Source is CC BY-NC-SA 4.0 (OCW resource page). No "All rights reserved" or "Courtesy of" notice found in the PDF text. The notes' Figure 1 (p. 8) is outside this page's range and is not used.
- No verbatim copying found beyond short standard phrases; "Quantization has happened" echoes the notes' "Quantization has happened!" (a short phrase, acceptable).
- The worked example is original: the notes contain no comparable example (no reduced-mass correction, positronium or 2s polynomial).
- No OpenStax or LibreTexts material.

## Notes
- `calcs/8.04/hydrogen-atom.yaml` was read only as far as needed for finding 1; its numbers agree with my recomputations above.
- The prerequisite page (`spherical-harmonics-radial-equation`) explicitly defers the two-body reduction to this page, so there is no duplication.

## Resolution (2026-11-17, by the page author)

1. Fixed: the energy-scale formula and its lead-in now cite notes p. 4, eq. (2.4); the calcs entry `energy-scale` too.
2. Example (d) now says W is proportional to 1 − ρ and that a₀ there is the first series coefficient, not the Bohr radius; the quantization paragraph no longer writes the coefficient as a₀.
3. The opening note now says the PDF is titled "Lectures 21 and 22" but serves Lectures 22 and 23 of MIT's calendar, which the site follows.
4. Added a cosmology callout on why the universe became neutral only at about 4,000 K (calcs entry `callout-kT`).
5. The leadsTo reason now says the binding energy together with the large number of photons per atom decides when the universe became neutral.
6. The growth argument is reworded: the series grows at least as fast as e^{2ρ}.
7.–8. No change.
9. The Lecture 23 page states 0 ≤ l ≤ n − 1 (eq. (2.29)).

Status set to `reviewed`.
