---
page: content/year-2/8.04/stationary-states.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes10/ (read: Zwiebach, Lecture 10 notes, 9-page PDF, text extracted with pdftotext; printed footer pages 1–8 checked page by page)
verdict: pass-with-notes
---

# Review: Stationary states, boundary conditions and a particle on a circle

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, step (b): "the density, and with it $\langle\hat x\rangle$-like quantities, change in time" | Observation (2) (p. 3, eq. 1.18) is about expectation values of a Hermitian operator with nonzero cross matrix element. | Refers to "$\langle\hat x\rangle$-like quantities". On a circle $x$ is defined only modulo $L$, so $\langle\hat x\rangle$ is not a good observable; the phrase is vague. | Name a well-defined periodic observable, e.g. "the density, and with it $\langle\cos(2\pi\hat x/L)\rangle$, change in time", or simply drop the $\langle\hat x\rangle$ clause. |
| 2 | info | Summary bullet 1: "superpositions of different energies oscillate at $(E_1 - E_2)/\hbar$" | Notes (p. 3, after eq. 1.18): $\langle\hat Q\rangle$ is time-dependent if $E_1 \ne E_2$ *and* $(\psi_1, \hat Q\psi_2) \ne 0$. | Body text states both conditions correctly; the summary drops the second. | "expectation values in superpositions of different energies can oscillate at $(E_1 - E_2)/\hbar$". |
| 3 | info | "No negative energies", paragraph before eq. (3.7) | Notes (p. 6, eq. 3.4) use that $\psi$ is normalized, so the right side is $E\int|\psi|^2 = E$. | Normalization not mentioned; eq. (3.7) as written holds only for normalized $\psi$. | Add "for normalized $\psi$" after "integrate over the circle". |
| 4 | info | "Normalizing over the circle (notes p. 8)" | The normalization $N = 1/\sqrt L$ is derived on p. 7 (eqs. 3.15–3.16); the result (3.17) is on p. 8. | Cites p. 8 only. | "(notes pp. 7–8)". Not wrong, since the Formula cites (3.17)–(3.18), which are on p. 8. |
| 5 | info | Orthonormality sentence (p. 8) | Notes give the reason: the $\psi_n$ are non-degenerate $\hat p$ eigenstates, so orthogonal automatically (eq. 3.22). | Orthonormality stated without the reason or equation number. | Optionally add "(as nondegenerate momentum eigenstates, eq. (3.22))". |
| 6 | info | Plot `params` | n/a | The slider variable is named `T` but means $t/T$ (its label says "t / T"), while the caption uses $T$ for the period. Shown to readers correctly, but the source name invites confusion. | Rename the parameter, e.g. `tau`, keep label "t / T". |

All formula citations were checked against the printed footer pages of the PDF (p. 1: eqs. 1.1–1.5; p. 2: 1.6–1.13; p. 3: 1.14–2.19; p. 4: 2.20–2.22; p. 5: 2.23–2.28; p. 6: 2.29–3.5; p. 7: 3.6–3.16; p. 8: 3.17–3.25). Every `<Formula>` `at=` (eqs. 1.1, 1.4, 1.7–1.8, 1.9, 1.18, 2.22, 2.27, 3.7, 3.17–3.18, 3.23–3.25) and every in-text equation/page reference (1.2, 1.5–1.6, 1.10, 1.11–1.12, 1.13, 1.14, 1.15–1.17, 2.20–2.21, 2.23, 2.24–2.28, 2.29–2.31, 3.1–3.2, 3.9–3.14, 3.19–3.21; pp. 1–8 ranges) is correct. The formulas match the notes in content and notation. The slope-jump Formula combines the definition (2.26) with (2.27); the citation to (2.27) is acceptable. Eq. (1.18) on the page writes $(\psi_i, \hat Q\psi_i)$ where the notes write $\langle Q\rangle_i$, which is the same quantity. The cross-term phase $c_1^*c_2e^{i(E_1-E_2)t/\hbar}$ was rederived and is correct.

## Arithmetic and answer checks
- $E_n = \hbar^2k_n^2/2m$ with $k_n = 2\pi n/L$ gives $2\pi^2\hbar^2n^2/(mL^2)$: correct.
- Normalization argument: $e^{i(E^*-E)t/\hbar} = e^{2\,\mathrm{Im}(E)t/\hbar}$: correct.
- Example (a): $E_1 = 2\pi^2 \times 197.33^2/511\,000 = 1.5042$ eV, so 1.50 eV is correct. $E_2 = 4E_1 = 6.0167$ eV, so 6.02 is correct.
- Example (b): $E_2 - E_1 = 3E_1 = 4.5125$ eV, so 4.51 is correct. $T = 2\pi \times 6.582\times10^{-16}/4.5125 = 9.165\times10^{-16}$ s, so $9.2\times10^{-16}$ s is correct (using 4.51 gives $9.170\times10^{-16}$, the same to two figures).
- Density: $|\Psi|^2 = \frac{1}{2L}|e^{iA}+e^{iB}|^2 = \frac1L[1+\cos(B-A)]$ with $B - A = (k_2-k_1)x - (E_2-E_1)t/\hbar$, $k_2 - k_1 = 2\pi/L$: correct.
- Plot: with $u = x/L$ and slider $t/T$, $(E_2-E_1)t/\hbar = 2\pi t/T$, so $L|\Psi|^2 = 1 + \cos(2\pi u - 2\pi t/T)$, matching the `expr`. The maximum is 2, inside the range [0, 2.4]. The peak sits at $u = t/T$ and moves once around the circle per period (in $+x$, as expected for positive momenta): the caption is correct. "A single stationary state would stay perfectly flat" is correct for $|\psi_n|^2 = 1/L$.
- Constants: $\hbar c = 197.33$ eV nm, $m_ec^2 = 511\,000$ eV (true 510 999), $\hbar = 6.582\times10^{-16}$ eV s: fine.
- Quiz 1 (answer 0): correct; the explanation matches eq. (1.14).
- Quiz 2 (answer 0, both continuous at a finite jump): correct; the explanation matches eqs. (2.27)–(2.28) and (2.23).
- Quiz 3 (answer 0, $n = 0$): correct (notes p. 8).
- Quiz 4 (answer 0, momenta $\pm2\pi\hbar n/L$): correct; the explanation matches (3.21) and the statement after it.
- Flashcards: all three are correct.
- `calcs/8.04/stationary-states.yaml` covers every number on the page (E₁, E₂, gap, period, and the two identities). Not run here.
- The page's bracketed remark ("for a delta function in V the same integral stays finite as ε → 0, which is exactly the slope jump of case 3") is correct: for $V \supset \alpha\,\delta(x-a)$, eq. (2.27) gives $\Delta_a\psi' = (2m\alpha/\hbar^2)\psi(a)$, finite and generally nonzero. It is clearly marked as the page's own addition, not the notes'. Optional: give that explicit result.

## Coverage and order
- The page follows the notes' order: Section 1 (separation, eqs. 1.1–1.13; observations (1) and (2), eqs. 1.14–1.18), Section 2 (eigenvalue problem, the classes of potential, continuity of ψ, the four cases, (2.23), the integral argument 2.24–2.31), Section 3 (circle, $E \ge 0$, solution, degeneracy, cos/sin combinations, orthonormality, Fourier evolution).
- Nothing substantive is left out. Small omissions: the remark that (1.8) does not fix the normalization of ψ; the reason for orthonormality (finding 5); normalization in (3.4) (finding 3).
- Added: the worked example (electron on a ring), the plot, and the bracketed delta-function remark. All are marked as the page's own.
- `leadsTo` 8.04 Lecture 11 (infinite and finite square wells) matches the Lecture 11 notes' contents and the `_course.json` syllabus.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice; only the standard OCW footer and the credit "Andrew Turner transcribed Zwiebach's handwritten notes". Nothing needs a `courtesy:` entry.
- Figure 1 of the notes (potential step) is not reproduced. The only graph is generated from a formula.
- No OpenStax or LibreTexts material.
- The text is rewritten. A few short phrases stay close to the notes ("a time-dependent potential would spoil this"; "momentum is quantized because the wavenumber is"; "only the exponentials are eigenstates of both Ĥ and p̂"). These are short, standard-terminology fragments and acceptable.
- The worked example is original: the notes contain no numerical example.

## Notes
- The page has no `Callout kind="cosmology"`. That is appropriate: Lecture 10 has no direct cosmology link, and the only `leadsTo` is within 8.04.
- The frontmatter summary's "The wavefunction is always continuous" holds within the notes' stated class of potentials (no derivatives of delta functions). The body says so.
- Verdict: no errors found. Finding 1 is a clarity issue worth fixing; the rest are optional.

## Resolution (2026-11-17, by the page author)

1. Example step (b) now names ⟨cos(2πx̂/L)⟩ as a quantity that changes in time.
2. The first summary bullet now says expectation values in superpositions "can oscillate".
3. The step before eq. (3.7) now says ψ is normalized, so the right side becomes E.
4. "Normalizing over the circle" now cites notes pp. 7–8.
5. Orthonormality now gives the notes' reason (non-degenerate p̂ eigenstates) and eq. (3.22).
6. The plot's slider parameter is renamed `s` (labelled t / T).

Status set to `reviewed`.
