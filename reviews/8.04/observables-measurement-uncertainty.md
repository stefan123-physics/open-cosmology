---
page: content/year-2/8.04/observables-measurement-uncertainty.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes9/ (read: Zwiebach, Lecture 9 notes, 8 PDF pages, printed footers 1–7, local copy extracted with pdftotext; page-by-page checks with `pdftotext -f N -l N`)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes10/ (contents only, to check the `leadsTo` claim)
verdict: pass-with-notes
---

# Review: Observables, the measurement postulate and uncertainty

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Hermitian operators, briefly written", Claim 4 | p. 3: "Any reasonable Ψ can be written as a superposition of Q̂ eigenfunctions. (This is the so-called spectral theorem, which is proven in 8.05 in the finite-dimensional case.)" | "Any reasonable wavefunction can be written as a superposition of eigenfunctions of $\hat Q$ (the spectral theorem, proved in 8.05 for finite dimensions)" | Closest paraphrase on the page, nearly word for word. Rewrite it, e.g. "Every physically sensible state is a sum of eigenfunctions of $\hat Q$; this is the spectral theorem, which 8.05 proves for finite-dimensional spaces." |
| 2 | info | Measurement-postulate blockquote, last sentence | p. 3: "After the outcome qᵢ, the state of the system becomes Ψ(x) = ψᵢ(x)." | "After the outcome $q_i$, the state of the system is $\psi_i$." | The first two sentences of the blockquote are the page's own words. The last one keeps MIT's sentence apart from one verb. It is short and is standard postulate wording, but to make the whole blockquote the page's own: "Right after the measurement the system is in the eigenstate $\psi_i$." |
| 3 | info | Quiz question 2 | The notes' circle example (1.28) uses the coefficients $1/\sqrt3$ and $\sqrt{2/3}$ | The quiz state uses the same coefficients $1/\sqrt3$, $\sqrt{2/3}$ (abstract eigenvalues 1 and 4, not the circle) | Not a copy, because the question is different. Other numbers (e.g. $1/2$ and $\sqrt3/2$) would keep it clearly apart from the notes' example. Optional. |
| 4 | info | Section order | Notes: the circle example (pp. 4–5) comes before Section 2, Uncertainty (pp. 6–7) | The theory of the circle is in MIT's position, but the worked example comes after the uncertainty section | Reasonable, because part (c) needs $\Delta p$. No change needed; a short note could say why. |

Formula and citation checks. Every `<Formula>` was compared with the notes and its printed page number was checked with `pdftotext -f N -l N`. Printed pages: p. 1 = eqs. (1.1)–(1.7); p. 2 = (1.8)–(1.15); p. 3 = (1.16)–(1.23); p. 4 = (1.24)–(1.28); p. 5 = (1.29)–(1.36); p. 6 = (2.37)–(2.45); p. 7 = (2.46)–(2.50).
- (1.2) p. 1, (1.9) p. 2, (1.12) p. 2, (1.15) p. 2, (1.16)–(1.17) p. 3, (1.21)–(1.22) p. 3, (1.26) p. 4, (1.29) p. 5, (1.32)–(1.33) p. 5, (2.40)–(2.41) p. 6, (2.44) p. 6, (2.46)–(2.48) p. 7 and (2.50) p. 7 are all correct in content, equation number and page.
- Inline citations are also correct: (1.3)–(1.5) p. 1; (1.18) and (1.19)–(1.20) p. 3; (1.23)–(1.24) pp. 3–4; (1.25), Copenhagen and the "many expansions" remark on p. 4; (1.27) p. 4; (1.30)–(1.31) p. 5; (1.34)–(1.36) p. 5; (2.37)–(2.38) and (2.42)–(2.43) p. 6.
- Uncertain: in the extracted text of eq. (1.3) the complex-conjugation star and the brackets are lost, so I could not see them directly. The page's $(a\Psi_1,\Psi_2) = a^*(\Psi_1,\Psi_2)$ is the only reading that fits definition (1.2), and the notes use this convention throughout.
- The note on the slip in eq. (1.24) is correct. The extracted p. 4 shows the denominator as "|αᵢ|² + |αⱼ|²" while the numerator is αᵢψᵢ + αₖψₖ, so $\alpha_j$ should be $\alpha_k$. The page writes $\sqrt{|\alpha_i|^2 + |\alpha_k|^2}$ and says so in brackets, as AGENTS.md rule 4 requires.
- The page states the "(1.15)" argument correctly. It uses that $q_i$ is real (eq. (1.14)), and the page mentions this.

## Arithmetic and answer checks
- Worked example, state $\Psi = \sqrt{2/L}\,(0.6\cos(2\pi x/L) + 0.8i\sin(4\pi x/L))$:
  - (a) $(2/L)\int_0^L\cos^2(2\pi x/L)\,dx = (2/L)\int_0^L\sin^2(4\pi x/L)\,dx = 1$, and the cross term vanishes (different frequencies). The norm is $0.36 + |0.8i|^2 = 0.36 + 0.64 = 1$. Correct.
  - (b) $\sqrt{2/L}\cdot0.6\cdot\tfrac12\cdot\sqrt L = 0.6/\sqrt2$ on $\psi_{\pm1}$. $\sqrt{2/L}\cdot0.8i\cdot\tfrac{1}{2i}\cdot\sqrt L = 0.8/\sqrt2$ on $\psi_2$ and $-0.8/\sqrt2$ on $\psi_{-2}$. Probabilities: $0.18, 0.18, 0.32, 0.32$, total 1. Correct.
  - (c) $\langle p\rangle = 0$ by symmetry. $\langle p^2\rangle = (2\pi\hbar/L)^2(0.36\cdot1 + 0.64\cdot4) = 2.92\,(2\pi\hbar/L)^2$, so $\Delta p = \sqrt{2.92} = 1.7088\ldots \approx 1.71\,(2\pi\hbar/L)$. Correct.
  - (d) $p = 4\pi\hbar/L$ means $m = 2$. Its coefficient $0.8/\sqrt2$ is real and positive, so the collapsed state is exactly $\psi_2 = e^{4\pi ix/L}/\sqrt L$, with $\Delta p = 0$. Correct.
- Quiz 1 (eigenvalues real): answer 0 is correct and the explanation is right.
- Quiz 2: $\tfrac13\cdot1 + \tfrac23\cdot4 = 3$. Answer 0 ("3") is correct.
- Quiz 3: the state collapses to $\psi_2$, so the next measurement gives 4 with certainty. Answer 0 is correct.
- Quiz 4: $\Delta Q = 0$ exactly in an eigenstate, by (2.46) and (2.50). Answer 0 is correct and so is the explanation.
- Flashcards: all three agree with the notes ((1.16)–(1.17), (1.21)–(1.22), (2.43)–(2.44), (2.50)).
- `calcs/8.04/observables-measurement-uncertainty.yaml` covers the quiz value, the normalization, the orthogonality, both probabilities, one projection coefficient, 2.92 and 1.71. I recomputed each entry by hand: all match the page. (I did not run `npm run calc:test`.)

## Coverage and order
- MIT order: the Hermitian definition and notation (1.1)–(1.5); Claims 1–4; the measurement postulate; collapse; degeneracy; probabilities summing to 1; Copenhagen; one state expanded in different bases; the exercise (1.26); the particle on a circle (1.27)–(1.36); Section 2 on uncertainty (2.37)–(2.50). The page follows this order. The only change is the position of the worked example (finding 4).
- Nothing in the notes is left out. Eqs. (1.1), (1.6)–(1.7), (1.10)–(1.11), (1.13)–(1.14), (2.39), (2.45) and (2.49) are described in words rather than displayed, which is fine.
- The notes' own circle computation ((1.28), (1.34)–(1.36)) is only summarised in one sentence ("a mixture of $\sin(2\pi x/L)$ and $\cos(6\pi x/L)$, finding four momenta"). That description is accurate. The page's own example takes its place.
- Nothing is added beyond the notes except the worked example and quiz.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice (checked with grep; the only notice is the standard OCW terms footer). No figures are used.
- The circle example is not copied. MIT's state is $\sqrt{2/L}\,[\tfrac{1}{\sqrt3}\sin(2\pi x/L) + \sqrt{\tfrac23}\cos(6\pi x/L)]$ with momenta $\pm2\pi\hbar/L$ and $\pm6\pi\hbar/L$ (probabilities 1/6, 1/6, 1/3, 1/3). The page's state uses a cosine at $2\pi x/L$, an imaginary sine at $4\pi x/L$, coefficients 0.6 and 0.8, momenta $\pm2\pi\hbar/L$ and $\pm4\pi\hbar/L$, and also asks for $\Delta p$ and the collapse, which MIT does not. The method (rewriting sines and cosines as exponentials) is the standard one.
- No paragraph is copied. Close paraphrases: Claim 4 (finding 1) and the last sentence of the postulate (finding 2). The rest is clearly rewritten, including the "many expansions" paragraph and the uncertainty section.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 8.04 Lecture 10: the Lecture 10 notes are titled "Solving the Time-Independent Schrödinger Equation", with sections "Stationary States", "Solving for Energy Eigenstates" and "Free particle on a circle". The stated reason is accurate.
- The page has no `Callout kind="cosmology"`, so there are no cosmology claims to check. This is acceptable when no direct link exists.
- The page cites only `mit`. `source.readings` and `references` are empty, which is consistent because only the notes are used.
- Not checked: `npm run content:check` and the symbol entries in `data/symbols.json`. They are outside this review.

## Resolution (2026-11-17, by the page author)

1. The Claim 4 sentence is rewritten in the page's own words ("enough to build every well-behaved state … known as the spectral theorem, whose finite-dimensional version is proved in 8.05").
2. The last sentence of the measurement-postulate blockquote is reworded ("Once q_i has been found, the system is left in the eigenstate ψ_i").
3. Quiz 2 now uses the coefficients 1/√5 and 2/√5 (answer 3.4); calcs entry `quiz-expectation` updated.
4.–5. No change.

Status set to `reviewed`.
