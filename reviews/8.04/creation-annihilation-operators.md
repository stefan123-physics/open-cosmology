---
page: content/year-2/8.04/creation-annihilation-operators.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes14_15/ (read: the PDF "Lecture 14 and 15: Algebraic approach to the SHO", B. Zwiebach, April 5 2016, 9 PDF pages, printed footers 1–8; extracted with pdftotext, page by page)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/calendar/ (read: to confirm lecture numbering)
  - content/year-4/8.286/vacuum-energy-puzzle.mdx (read: target of the cosmology callout and leadsTo)
verdict: needs-changes
---

# Review: The harmonic oscillator with creation and annihilation operators

Equation-to-page map of the notes (printed footer pages, checked with `pdftotext -f N -l N`):
p. 1: (1.1)–(1.6); p. 2: (1.7)–(1.14); p. 3: (1.15)–(1.23); p. 4: (1.24)–(1.30) and (2.1); p. 5: (2.2)–(2.10); p. 6: (2.11)–(2.20); p. 7: (2.21)–(2.29); p. 8: (2.30)–(2.31).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Climbing the ladder", first paragraph: "**Commutators** (notes p. 5). Since $\hat N\psi_0 = 0$ (eq. (2.1))" | Eq. (2.1) is on printed p. 4 (bottom of the page, just after the Section 2 heading); (2.2)–(2.8) are on p. 5 | Attributes the paragraph, including (2.1), to p. 5 | Write "(notes pp. 4–5)" or "(eq. (2.1), notes p. 4)". |
| 2 | warning | "Factorizing the Hamiltonian": "(notes pp. 1–2, eqs. (1.3)–(1.6))" | (1.3)–(1.6) are all on p. 1 | pp. 1–2 | Change to "notes p. 1". (The `<Formula at="notes p. 1, eq. (1.6)">` itself is correct.) |
| 3 | info | "Climbing the ladder": "similarly $[\hat a, (\hat a^\dagger)^k] = k(\hat a^\dagger)^{k-1}$ (eqs. (2.4)–(2.5))" | (2.5) gives two relations, also $[\hat a^\dagger, \hat a^k] = -k\hat a^{k-1}$, and remarks they are analogous to $[\hat p, \hat x^k]$ and $[\hat x, \hat p^k]$ | Gives only the first | Optional: add the second relation. |
| 4 | info | "Higher states" and the nth-state formula | The notes leave "$\psi_n$ has $N = n$" and "$\psi_n$ is normalized" as exercises (p. 6) | States both as results | Fine; optionally say the notes leave these as exercises. |
| 5 | info | "Uncertainty in position" | The notes first give the parity argument for $\langle\hat x\rangle = 0$ (odd $x$ against even $\lvert\psi_n\rvert^2$), then the operator argument (p. 7) | Gives only the operator argument | Optional: one clause on parity. |
| 6 | info | Bracketed note after eq. (2.31) | p. 8: "The position uncertainty grows linearly with the number." | Says it is the square that grows linearly, and that the notes mean the square | Correct and fairly worded: $(\Delta x)_n^2 \propto n + \frac12$, so $\Delta x \propto \sqrt{n + \frac12}$. The quotation is one short sentence, acceptable. No change needed. |

All other citations were checked and are correct in equation number and printed page:
(1.1) p. 1; (1.2) p. 1 (the page's sign, $\frac{i}{m\omega}[\hat x,\hat p] = -\frac{\hbar}{m\omega}$, is right); (1.6) p. 1; (1.7) on p. 2 with value $2\hbar/(m\omega)$ (recomputed); (1.9)–(1.11) p. 2; (1.12) p. 2 (inverse relations recomputed, including $\hat p = i\sqrt{m\omega\hbar/2}\,(\hat a^\dagger - \hat a)$); (1.14) p. 2; (1.15)–(1.23) p. 3 (ground state and its normalization correct); (1.24)–(1.30) p. 4; (2.3) p. 5; (2.6)–(2.8) p. 5; (2.9)–(2.12) pp. 5–6; (2.13)–(2.20) p. 6; (2.21)–(2.25) p. 7; (2.26)–(2.29) p. 7; (2.28)–(2.30) pp. 7–8; (2.31) p. 8. Notation ($\hat a$, $\hat a^\dagger$, $\hat V$, $\hat N$, $(\cdot,\cdot)$ inner product, $\psi_n$) matches the notes.

## Arithmetic and answer checks
- Example (a): $\hat p^2 = -\frac{m\omega\hbar}{2}(\hat a^\dagger - \hat a)^2$ and $(\hat a^\dagger - \hat a)^2 = \hat a^\dagger\hat a^\dagger - \hat a^\dagger\hat a - \hat a\hat a^\dagger + \hat a\hat a$, so the part of $-(\hat a^\dagger-\hat a)^2$ that survives in $\psi_n$ is $\hat a^\dagger\hat a + \hat a\hat a^\dagger = 1 + 2\hat N$. Hence $(\Delta p)_n^2 = m\omega\hbar(n + \frac12)$, $\langle\hat p\rangle = 0$, and $\Delta x\,\Delta p = \hbar(n + \frac12)$, equal to $\hbar/2$ for $n = 0$. Correct.
- Example (b): $(\Delta x)_0^2 = \hbar/(2m\omega) = (\hbar c)^2/(2m_ec^2\,\hbar\omega) = 197.33^2/1{,}022{,}000 = 0.038101$ nm², $(\Delta x)_0 = 0.19519$ nm, rounds to 0.195 nm; $(\Delta x)_3 = \sqrt7 \times 0.19519 = 0.51644$ nm, rounds to 0.516 nm (factor $\sqrt{3.5/0.5} = \sqrt7$ correct). "About the size of an atom" is fair for 0.2 nm.
- Example (c): $\frac12m\omega^2\cdot\frac{\hbar}{m\omega}(n+\frac12) = \frac12\hbar\omega(n+\frac12) = \frac12E_n$. Correct; the comparison with the classical time averages is correct.
- Quiz 1: $[\hat a, \hat a^\dagger] = 1$, answer index 0 correct. The explanation's "the operators are unit-free" explains why the result is a pure number rather than why it is exactly 1; acceptable.
- Quiz 2: index 0 correct (eqs. (1.16)–(1.17)). Distractors are wrong as intended (a positive potential gives only $E > 0$; $\hat a$ is not Hermitian; the node theorem says nothing about the bound).
- Quiz 3: $\hat a\psi_4 = \sqrt4\,\psi_3 = 2\psi_3$, index 0 correct.
- Quiz 4: index 0 correct, from (2.31).
- Flashcards: all three correct against (1.10)–(1.11), (1.14), (1.19), (2.19)–(2.20), (2.25).
- `calcs/8.04/creation-annihilation-operators.yaml` covers every number on the page (0.0381, 0.195, 0.516, √4 and the identities). Info: the `shown` string of `ground-state-equation` is `'E_0 = \frac12\hbar\omega" cite'`, which matches the page only because it includes part of the JSX attribute; harmless but fragile.

## Coverage and order
- The page follows the notes' order exactly: Section 1 (factorization (1.1)–(1.14); lower bound and ground state (1.15)–(1.23); factorization in general (1.24)–(1.30)), then Section 2 (commutators and lemma (2.1)–(2.8); ψ₁, ψ₂, ψₙ (2.9)–(2.20); orthonormality and ladder relations (2.21)–(2.25); position uncertainty (2.26)–(2.31)). No segment of the notes is left out; small omissions are items 3–5 above.
- Lecture numbering: the OCW calendar lists Lecture 15 as "Analysis of the differential equation: Hermite polynomials. Algebraic solution of the harmonic oscillator with creation and destruction operators." The page's `lecture: 15` and its explanatory note about the combined notes for Lectures 14 and 15 are correct. The Hermite-polynomial part is covered by the previous page (`delta-well-node-theorem-oscillator`, per its summary), so nothing of Lecture 15 is missing from the site.
- Additions not in the notes: the cosmology callout and the worked example (both appropriate).

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice; they end with the standard OCW terms block and an acknowledgement that Sarah Geller and Andrew Turner transcribed the handwritten notes to LaTeX (not a third-party material credit). Course licence CC BY-NC-SA. No figures are used.
- No paragraph is copied verbatim. Closest paraphrases are short: "Neither is Hermitian; each is the other's conjugate" (notes p. 2) and "$\hat a$ lowers the number by one, except on the ground state, which it kills" (notes p. 7); acceptable as standard phrasing. The one-sentence quotation in the bracketed note is marked as a quotation.
- The worked example is original: the notes' exercise computes Δx; the page asks for Δp, the uncertainty product, electron numbers for ħω = 1.0 eV, and the equal split of energy, none of which appear in the notes. No OpenStax or LibreTexts material seen.

## Notes
- Cosmology callout: the claims (each field mode is an oscillator keeping zero-point energy ħω/2; summed over modes the vacuum energy is enormous, the start of the cosmological constant problem) agree with `content/year-4/8.286/vacuum-energy-puzzle.mdx` (8.286 Lecture 20: "Each standing-wave mode is a harmonic oscillator, whose lowest energy is ½ħω"; a Planck cut-off overshoots by about 120 orders of magnitude). The `leadsTo` entry (8.286 Lecture 20) is correct and fairly worded. The statement is not attributed to Zwiebach, correctly, since the notes do not discuss it.
- The link `/courses/8-286/vacuum-energy-puzzle` assumes course id "8.286" maps to the URL segment "8-286"; not verified in this review (content:check would catch a broken link only if it checks inline links).
- `leadsTo` 8.04 Lecture 16 matches the syllabus entry ("Scattering states: the step potential, reflection and transmission, wave packets").
- Not run in this review: `npm run content:check` and the symbol entries for this page (e.g. a page-scoped meaning for $\hat V$).

## Resolution (2026-11-17, by the page author)

1. Fixed: the commutator paragraph now cites notes pp. 4–5, with eq. (2.1) on p. 4.
2. The factorization sentence now cites notes p. 1 for eqs. (1.3)–(1.6).
3. Added the second relation of (2.5), [â†, âᵏ] = −k âᵏ⁻¹.
4. No change.
5. Added the parity argument for ⟨x̂⟩ = 0 before the operator argument.
6.–7. No change.
8. The `" cite` fragment in the `ground-state-equation` quote is deliberate: it ties the quote to the formula, since "E_0 = \frac12\hbar\omega" also appears elsewhere on the page.
9.–12. No change.

Status set to `reviewed`.
