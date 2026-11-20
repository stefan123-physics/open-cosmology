---
page: content/year-4/8.09/small-oscillations-simultaneous-diagonalization.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/aa6e7a8b4e0b5eeef24bce949d4fdb27_MIT8_09F14_Chapter_3.pdf (read: local copy of the PDF, pp. 52-55 read as rendered page images; the text extraction was used only to check Section 3.2 and for notices)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_3/ (not opened separately; the resource page only links the PDF above)
verdict: needs-changes
---

# Review: Small oscillations: diagonalising T and V together

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step "The two matrices" | (page-own example; notes set V(q0) = 0, p. 52) | $V = mgl(2 - 2\cos\theta_1 - \cos\theta_2) \approx \tfrac12 mgl(2\theta_1^2 + \theta_2^2)$. With heights $l\cos\theta_1$ and $l\cos\theta_1 + l\cos\theta_2$ below the support, $V = -mgl(2\cos\theta_1 + \cos\theta_2) + \text{const}$; the constant that makes $V(0) = 0$ is $3mgl$, not $2mgl$. As written, $V(0) = -mgl$ and the "≈" is false by the constant $-mgl$. The matrix $\hat V = mgl(2\ 0;\ 0\ 1)$ is right. | Write $V = mgl(3 - 2\cos\theta_1 - \cos\theta_2)$. The calcs entry `potential-quadratic` checks only the second derivatives, so it did not catch this; consider an extra check of $V(0) = 0$. |
| 2 | info | Quiz 2 explanation | n/a | "The last choice is the ratio $(2+\sqrt2)/1$, not a ratio of frequencies." $2 + \sqrt2$ is $\omega_2^2$ in units of $g/l$, not a meaningful ratio; the ratio of the squared frequencies would be $3 + 2\sqrt2 \approx 5.83$. | Say instead: "$2 + \sqrt 2$ is $\omega_2^2$ in units of $g/l$, not a ratio of frequencies." |
| 3 | info | Quiz 4 explanation; flashcard "Why the eigenvalues are real" | p. 54: "positive second derivatives in each eigenvector direction"; p. 55: kinetic energy $\dot{\vec\eta}\cdot\hat T\cdot\dot{\vec\eta} > 0$ | Quiz 4: the normalised eigenvalue "equals the second-order change of the potential along the mode". For $\vec\eta = \vec a$ the second-order change is $\tfrac12\vec a^\dagger\hat V\vec a = \lambda/2$. Flashcard: "the product is the positive kinetic energy" (it is twice a kinetic energy, for velocity $\vec a$). Both loose by a factor 2; the sign arguments are right. | "is twice the second-order change of the potential" (or "the curvature"); "the product is positive, like the kinetic energy". |
| 4 | info | §"When the kinetic matrix is not diagonal", last paragraph; §"Expanding about a minimum" | Not in the notes | Two additions of the page: $\hat V$ symmetric because mixed partials commute; $\hat T$ defines an inner product in which $\hat V$ acts as a symmetric operator. Both are correct and are explanation, not claims attributed to MIT. | None needed; optionally mark the second as the page's own remark ("A useful way to see…" already reads that way). |
| 5 | info | Plot | n/a | Range $[-2.5, 3]$ but the curve reaches 4.25 at $\mu = 4.5$, so it is clipped at the right edge. | Harmless; widen range to 4.5 or shorten the domain to 4 if a full curve is wanted. |

## Arithmetic and answer checks
Every formula citation checked against the page images:
- (3.1), (3.2), (3.3), (3.4): p. 52, correct; content matches (page writes $\mathcal O(\eta\dot\eta^2)$ as the notes do).
- (3.5), (3.7), (3.9), (3.10), (3.12): p. 53, correct. (3.6), (3.8), (3.11) appear inline in prose without numbers, accurately.
- (3.13), (3.15), (3.16), (3.17), (3.18), (3.19), and the inline (3.14): p. 54, correct. Page writes $\delta_{\alpha\beta}$ where the notes write $\delta_{\beta\alpha}$ in (3.13); same thing.
- (3.20), (3.21), (3.22), (3.23), (3.25): p. 55, correct. (3.24) is described in words, accurately.
- The step from (3.13) to $\lambda_\alpha = \vec a^{(\alpha)\dagger}\hat V\vec a^{(\alpha)}$ with the $m$-normalisation: correct ($\vec a^\dagger \hat V \vec a = m\lambda\,\vec a^\dagger\vec a = \lambda$).
- Proof of reality/orthogonality: the page's "Hermitian conjugate of the same equation written for the pair the other way round" equals the notes' conjugate-then-swap; correct. The positivity of $\vec a^\dagger\hat T\vec a$ for complex $\vec a$ (real and imaginary parts each contribute) is correct for real symmetric positive definite $\hat T$.
- Bracketed slip remark (p. 55): the notes do say "$\lambda_\alpha = \vec a^{(\alpha)\dagger}\hat V\vec a^{(\alpha)}$, which is positive, so $\lambda_\alpha > 0$ also", followed by "$\lambda_\alpha \geq 0$". The page's correction ($\geq 0$; zero modes for flat directions such as free translation) is right and the quotation is accurate.
- Double pendulum (recomputed by hand):
  - Lower-bob speed squared $l^2(\dot\theta_1^2 + \dot\theta_2^2 + 2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2))$: correct. $T = \tfrac12 ml^2(2\dot\theta_1^2 + 2\dot\theta_1\dot\theta_2 + \dot\theta_2^2)$, so $\hat T = ml^2(2\ 1;\ 1\ 1)$: correct.
  - $\hat V = mgl(2\ 0;\ 0\ 1)$: correct (but see finding 1 for the constant).
  - $\det = (mgl)^2[(2-2\mu)(1-\mu) - \mu^2] = (mgl)^2(\mu^2 - 4\mu + 2)$: correct. Roots $2 \mp \sqrt2 = 0.5858, 3.4142$: correct.
  - Ratio $\sqrt{(2+\sqrt2)/(2-\sqrt2)} = \sqrt{3+2\sqrt2} = 1+\sqrt2 = 2.414$: correct.
  - $g/l = 9.81/0.50 = 19.62$ s⁻²; $\omega_1 = \sqrt{0.5858 \times 19.62} = \sqrt{11.49} = 3.390$ rad/s; $\omega_2 = \sqrt{3.4142 \times 19.62} = \sqrt{66.99} = 8.185$ rad/s, quoted 3.39 and 8.18: correct.
  - Mode shapes from row 1, $a_2/a_1 = (2-2\mu)/\mu$: $+\sqrt2$ (slow), $-\sqrt2$ (fast); confirmed with row 2, $a_2/a_1 = \mu/(1-\mu) = 0.586/0.414 = 1.414$.
  - Plain dot product $1 - 2 = -1$; $T$-weighted product $(1,\sqrt2)\cdot(2-\sqrt2,\ 1-\sqrt2) = 0$; weighted norms $ml^2(4 \pm 2\sqrt2)$: all correct.
  - Plot caption: $\det/(mgl)^2 = \mu^2 - 4\mu + 2$ with $\lambda = \mu g/l$, zeros at 0.586 and 3.414: correct.
- Quiz: Q1 answer 1 correct; Q2 answer 2 ($1+\sqrt2$) correct; Q3 answer 1 correct, and "then also orthogonal with $\hat V$ as weight" is right ($\vec a^{(\beta)\dagger}\hat V\vec a^{(\alpha)} = \lambda_\alpha \vec a^{(\beta)\dagger}\hat T\vec a^{(\alpha)} = 0$); Q4 answer 1 correct (wording, finding 3).
- Flashcards: all five correct (wording of the fourth, finding 3).
- calcs file: every entry matches the page's numbers; the gap is finding 1.

## Coverage and order
- Chapter 3 introduction (p. 52): 8.03 context, generalised coordinates, linearisation about a minimum, (3.1), the three simplifications, (3.2) with time-independent coordinates, (3.3), (3.4), "coupled linear equations". All covered, in order.
- Section 3.1 (pp. 53-55): trial solution with complex $a_i$ and common $\omega$, upright i, (3.6)-(3.10), real symmetric $\hat V, \hat T$, $n$ roots, no sum over $\alpha$; case 1 ($T_{ij} = m\delta_{ij}$, (3.11)-(3.16), real parts), proof (3.17)-(3.18), degenerate eigenvalues, $\lambda_\alpha \geq 0$ at a minimum; case 2 (non-diagonal $\hat T$, (3.19)-(3.23)), proof (3.24)-(3.25), positivity of kinetic energy. All covered, in MIT's order. Nothing omitted.
- Additions: the worked example (page's own), the $2n$-constants remark, the $\hat T$-inner-product remark, the plot. All correct.

## Licensing
- The notes are CC BY-NC-SA; no "All rights reserved" or "Courtesy of" notice found in the chapter text (grep on the extracted text). Pages 52-55 contain no figures, and the page reproduces none.
- No sentence copied: the closest passage ("This looks like an eigenvalue equation except that when we act with the linear operator $\hat V$ on $\vec a$ we get back $\hat T\cdot\vec a$…") is clearly rewritten on the page. Short quote "is positive, so $\lambda_\alpha > 0$" is used to identify the slip, which is appropriate.
- No OpenStax or LibreTexts material. The double pendulum is a standard textbook system but the page's treatment, numbers and presentation are its own; the notes do not use it in these pages.

## Notes
- leadsTo (8.09, 3.2): checked against the notes' text. Section 3.2 builds the matrix $A$ of eigenvectors (3.26), shows $A^\top\hat T A = 1$, $A^\top\hat V A = \hat\lambda$ (3.27), defines normal coordinates (3.28) in which the Lagrangian separates (3.29), and then treats the CO₂ molecule. The claim is correct.
- Links: `/courses/8-03/coupled-oscillators-normal-modes` and `/courses/18-06/symmetric-matrices-positive-definite` match existing pages, and both slugs are in `prerequisites`.
- No cosmology callout; acceptable here, since the leadsTo is to the next 8.09 section.
- The OCW resource page itself was not fetched; the review relies on the supplied local copy of the Chapter 3 PDF.


## Resolution (2026-11-19, by the page author)

1. Error fixed: the double pendulum's potential is now measured from the lowest positions, V = mgl(3 − 2cos θ₁ − cos θ₂), which vanishes at the minimum as the notes' convention requires; calcs entry potential-zero added, and potential-quadratic now uses the corrected constant.
2. Quiz 2 explanation: the last choice is now described as ω₂² in units of g/l.
3. Quiz 4 explanation: the eigenvalue is now called the second derivative of the potential along the mode (twice its second-order change); flashcard 4 now says the product is positive because T̂ is positive definite.
4. No change (the page's own remarks are correct, as noted).
5. Plot range raised to 4.5 so the curve is not cut off.
