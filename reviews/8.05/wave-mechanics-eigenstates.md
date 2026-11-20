---
page: content/year-3/8.05/wave-mechanics-eigenstates.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-1-wave-mechanics/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ce43ff6a0b3c8cf52d11118b976ab2a7_QI13S04w8dM.pdf (read: Lecture 1 transcript, 22 pages, text extracted with pdftotext page by page; printed footer pages 1–22 match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: Zwiebach, "Wave Mechanics", September 13, 2013, 26-page PDF, text extracted with pdftotext; sections 1–2 checked equation by equation, sections 3–6 skimmed for scope)
verdict: needs-changes
---

# Review: Wave mechanics: the Schrödinger equation and energy eigenstates

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Probability current and conservation", `at="eqs. (1.9), (1.10), (1.14)"` | Notes eq. (1.10) is the electromagnetic charge conservation law $\nabla\cdot\vec J + \partial\rho/\partial t = 0$ (3D, charge density). The one-dimensional probability version $\partial J/\partial x + \partial\rho/\partial t = 0$ is eq. (1.12). | Cites (1.10) for the probability conservation equation. | Change to `at="eqs. (1.9), (1.12), (1.14)"`. |
| 2 | warning | Quiz 1 explanation: "only $\Psi = 0$ satisfies both" | Transcript p. 1 and notes p. 1 (below (1.2)) just say a real $\Psi$ would make the left side imaginary and the right side real. | Claims only $\Psi = 0$ satisfies both. Strictly, both sides must vanish separately: $\partial\Psi/\partial t = 0$ and $\hat H\Psi = 0$. A real, time-independent zero-energy eigenstate (e.g. a free $\Psi = $ const, or any $E = 0$ eigenstate after shifting $V$ by a constant) does satisfy the equation. So the claim is overstated. The marked answer itself is fine. | E.g. "...both sides would have to vanish, so $\Psi$ could not change in time at all: a real $\Psi$ is possible only for a static zero-energy state, never for a state that evolves." Or drop "only $\Psi = 0$ satisfies both". |
| 3 | info | "Probability" bullet: "the notes write the density as a script P; this page uses $\rho$, as Zwiebach also says aloud" | Notes eq. (1.4): "probability density $\mathcal P(x,t)$, also denoted as $\rho(x,t)$". Transcript p. 3: "p of x and t, or sometimes called the rho". | Implies the notes use only script P. | "(the notes write the density as a script P and also as $\rho$; this page uses $\rho$)". The notation change is otherwise sound and stated. |
| 4 | info | Formulas "Schrödinger equation" (`reading1`, p. 1) and "Stationary state" (`reading1`, p. 9) | The same equations are notes eqs. (1.2) and (2.3). | Cite only the transcript pages. | Correct as cited (both are on the stated transcript pages). Optionally add the notes' equation numbers, as the other Formulas do. |
| 5 | info | "Orthonormality and completeness" section: $E_0 \le E_1 \le E_2 \le \dots$ | Transcript p. 14 labels from $n = 0$; notes eqs. (2.14)–(2.15) label from $n = 1$ ($E_1 \le E_2 \le \dots$) and their sums (2.17)–(2.28) run from $n = 1$. | Follows the transcript's labelling while citing the notes' equations. Harmless because the page's sums carry no limits. | Optionally note "(the notes start at $n = 1$)". |
| 6 | info | "In particular, if $\psi(x_0) = \psi'(x_0) = 0$ then $\psi = 0$ everywhere" | This is on transcript p. 12 (top); p. 11 has the "ψ and ψ′ at one point" statement. Notes p. 5–6 phrase the condition as "if $V(x)$ is nowhere infinite". | Paragraph cites only p. 11. | Cite "transcript pp. 11–12". |
| 7 | info | "What is allowed" paragraph | Notes p. 6 also allow hard walls (infinite square well). | Omits hard walls, yet the worked example uses an infinite square well. | Add "and hard walls, as in the infinite square well (notes p. 6)". |

All other formula citations were checked against the extracted text:
- Transcript: Schrödinger equation (p. 1), complex Ψ and the E&M circular-polarization contrast (pp. 1–2), first order in time / linearity / probability and units of Ψ (pp. 2–4), normalization exercise with Ψ → 0 and Ψ′ bounded (pp. 4–6), current and $dP_{ab}/dt$ (pp. 6–7), equivalent wavefunctions (p. 8), stationary state (p. 9), TISE (p. 10), second-order argument (p. 11), eigenstate / spectrum / degeneracy (p. 12), allowed potentials and wavefunctions, momentum eigenstates (pp. 12–13), list of eigenstates (p. 14), orthonormality and functions as vectors (p. 15), completeness and Sturm–Liouville (p. 16), time evolution and $b_n$ (pp. 16–17), completeness relation (pp. 18–19), duality (pp. 19–20), expectation value (p. 20), $\langle\hat H\rangle$ (p. 21), unnormalized states (pp. 21–22). All correct.
- Notes: (1.4) density, (1.6) normalization, (1.9) current, (1.14) $dP_{ab}/dt = J(a,t) - J(b,t)$, (2.9)–(2.10) TISE, (2.12) regularity conditions, (2.16) orthonormality, (2.20)–(2.21) time evolution and $b_n$, (2.25) completeness, (2.26) expectation value, (2.28) $\langle\hat H\rangle = \sum|b_n|^2E_n$, (2.30) unnormalized expectation value. Every one is that equation and matches in content and notation, except (1.10) (finding 1).

## Arithmetic and answer checks
Recomputed in Python with the page's constants:
- $E_1 = \pi^2\hbar^2/(2ma^2) = 6.0249 \times 10^{-20}$ J $= 0.37605$ eV, so 6.025e-20 J and 0.376 eV are correct. $E_2 = 4E_1 = 1.5042$ eV, so 1.504 is correct.
- (b) $\langle\hat H\rangle = 2.5E_1 = 0.9401$ eV, so 0.940 is correct. $E_2 - E_1 = 3E_1 = 1.1281$ eV, so 1.128 is correct. Period $h/\Delta E = 4.135667 \times 10^{-15}/1.12814 = 3.666 \times 10^{-15}$ s, so 3.67e-15 s is correct. The period is right: the cross term oscillates at $\omega = \Delta E/\hbar$, giving $T = 2\pi\hbar/\Delta E = h/\Delta E$.
- (c) Norm $|3|^2 + |4i|^2 = 25$; $(9E_1 + 16 \cdot 4E_1)/25 = 73E_1/25 = 2.92E_1 = 1.0981$ eV, so 1.098 is correct. With $b_1 = 3/5$ and $b_2 = 4i/5$: $|b_1|^2 + |b_2|^2 = 1$, and you get the same result.
- Quiz 1 (answer 0): correct as the intended answer. The explanation overstates (finding 2).
- Quiz 2 (answer 0, ψ = 0 everywhere): correct (transcript p. 12, notes p. 6).
- Quiz 3 (answer 0): correct, eq. (2.20) and the uniqueness argument (transcript p. 17).
- Quiz 4 (answer 0, $\sum|b_n|^2E_n$, time-independent): correct, eqs. (2.27)–(2.28).
- Flashcards: all three are correct. Card 1 reproduces the page's duality wording correctly (orthonormality: sum over space at fixed labels; completeness: sum over labels at fixed positions). Card 2 matches transcript pp. 12–13 and notes (2.12).
- `calcs/8.05/wave-mechanics-eigenstates.yaml`: every number on the page has an entry with the right formula and expected value. The `box-orthonormal` check $\int_0^1 2\sin(\pi x)\sin(2\pi x)\,dx = 0$ is correct. The `expectation-H` identity, $0.36E_1 + 0.64 \cdot 4E_1 = 2.92E_1$, is correct. The suite was not run in this review.

## Coverage and order
- The page follows the transcript's order exactly: Schrödinger equation → complexity → first order / linear / probability → normalization exercise → current → equivalence → stationary states → TISE → second-order uniqueness → eigenstates / spectrum → allowed potentials and wavefunctions → orthonormality → completeness → time evolution → completeness relation and duality → expectation values → $\langle\hat H\rangle$ → unnormalized states. The lecture ends with expectation values and the unnormalized formula (p. 22). So does the page.
- Left out (all minor): the complex-number definitions $z = a + ib$, $|z| = \sqrt{zz^*}$ (transcript p. 3, notes (1.3)); the remark that the Schrödinger equation will later be derived from unitary time evolution (p. 4); the student questions on complex and time-dependent potentials (p. 6) and on whether normalizability forces Ψ′ → 0 (p. 14); the explicit normalized wavefunction $\Psi/\sqrt{\int|\Psi|^2}$ (p. 21, notes (2.29)). The page goes straight to the ratio formula (2.30).
- Notes material in sections 1–2 that is not in the lecture and not on the page: complex energy $E = E_0 - i\Gamma$ (2.5), bound-state definition (2.13), discrete vs continuous spectrum, $\sum|b_n|^2 = 1$ (2.19), momentum operator (2.31). Leaving these out is acceptable for a lecture page. Eq. (2.19) is used implicitly in example (c).
- Notes sections 3–6 (properties of 1D eigenstates, nature of the spectrum, variational principle, position and momentum) belong to later lectures. The page correctly does not cover them. `leadsTo` 8.05 Lecture 2 ("properties of the spectrum in one dimension and the variational principle") matches Zwiebach's closing sentence (transcript p. 22).
- Added: the worked example (electron in a 1 nm box), marked as the page's own.
- Internal links: `/courses/8-04/schrodinger-equation`, `/courses/8-04/probability-current` and `/courses/8-04/stationary-states` all exist (`content/year-2/8.04/schrodinger-equation.mdx` (Lecture 5), `probability-current.mdx` (Lecture 6), `stationary-states.mdx` (Lecture 10)), and `8.04`'s course slug is `8-04`. The prerequisites `stationary-states` and `probability-current` are existing slugs.

## Licensing
- Neither the transcript nor the notes carries an "All rights reserved" or "Courtesy of" notice. They have only the standard OCW Creative Commons header/footer. Nothing needs `courtesy:`.
- The notes have no figures in sections 1–2. The page has no images.
- No OpenStax or LibreTexts material.
- No near-verbatim sentences found. The page paraphrases throughout; shared fragments are standard terminology ("first order in time", "weighted average", "unit matrix", "dual"). The worked example is original: neither the lecture nor the notes has a numerical example.
- No em dashes on the page (checked with grep).

## Notes
- No `Callout kind="cosmology"` and no cosmology `leadsTo`. That is appropriate for this lecture.
- "Potentials may contain delta functions, but not their derivatives or powers" matches transcript p. 13 ("nor powers") and notes p. 6 ("squares or derivatives").
- The statement that a superposition of stationary states "with different energies" is not stationary is a correct refinement of transcript p. 20, which omits the qualifier.
- Verdict: one citation error (finding 1). Finding 2 should also be fixed. The rest are optional.

## Resolution (2026-11-17, by the page author)

- Error 1: the probability-current formula now cites eqs. (1.9), (1.12), (1.14).
- Warning: quiz 1's explanation now says both sides must vanish, leaving only a static zero-energy state rather than a general solution.
- Info: the ρ notation is attributed to the notes; the ψ = ψ′ = 0 result now cites transcript pp. 11–12; hard walls are added to the allowed potentials; the n = 0 labelling (lecture) versus n = 1 (notes) is stated. The transcript-only citations for the Schrödinger equation and stationary state are kept.
