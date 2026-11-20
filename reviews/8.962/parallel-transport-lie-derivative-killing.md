---
page: content/year-5/8.962/parallel-transport-lie-derivative-killing.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7134975b380ad0662f0c438be662ab8f_LoIq6KElVxs.pdf (read, local copy L8.pdf / L8.txt with PDF page markers; PDF page numbers used, the PDF has no printed footer)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-8-lie-transport-killing-vectors-tensor-densities/ (not opened; the transcript is the only reading cited)
  - Lecture 9 and Lecture 10 transcripts (local copies L9.txt, L10.txt, read only to check the leadsTo claim)
verdict: needs-changes
---

# Review: Parallel transport, the Lie derivative and Killing vectors

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `leadsTo` (Lecture 9), `why` | In Lecture 8 (p. 14) Hughes expects to show the conservation of U·C "probably Thursday", but Lecture 9 does not do it: at its end (L9 transcript, near the close) he says it is "unfortunate I wasn't able to get to it today ... we will do that on Tuesday". The proof (contract the geodesic equation with the Killing vector, use Killing's equation) is at the start of Lecture 10 (L10 transcript, Killing-vector passage). | "... derives the geodesic equation ... and proves that the inner product of the four-velocity with a Killing vector is conserved along it." | Drop the conservation proof from the Lecture 9 `why` (keep the tensor densities, volume elements and geodesic equation, which L9 does cover) and add a `leadsTo` to Lecture 10 for the proof that U·C is conserved, or say it is a problem-set exercise. |
| 2 | warning | Lie derivative section, bracket after "Lie derivative of a vector" ("Hughes left the dλ out of the denominator at first; a student caught it, p. 10") | The student asks "In the second term, did you miss the D lambda?" and Hughes replies "There should be a D lambda right here." The transcript does not say which expression on the board was meant. It could be the second term of the Lie-transported vector or of the Taylor expansion, not the denominator. | Says the dλ was missing from the denominator. | Write it more neutrally: "(a student caught a missing dλ on the board, p. 10)". Uncertain: the video might settle it, but videos are not compared. |
| 3 | info | "Lie derivatives of a scalar, a one-form and a tensor" formula | Hughes writes the Lie derivative "for a tensor" (p. 11) without saying aloud which rank; he says every index gets a correction with a derivative of U, "the signs are a little bit different". | Shows a mixed $T^\alpha{}_\beta$ and says the signs are "reversed relative to the Christoffel terms". | The physics is correct (upper index $-T\nabla U$, lower index $+T\nabla U$, the opposite of the covariant derivative's $+\Gamma$/$-\Gamma$). The rank on the board cannot be checked from the transcript. You could add "(written here for a mixed tensor)". |
| 4 | info | "Derivative built from transport" formula | No sign stated aloud (p. 4). | Uses a minus sign in the transport rule, so the derivative gets $+\Pi$, and says the sign is a convention. | Fine as written. The note about the convention is good. |
| 5 | info | Frontmatter `summary` | n/a | Uses the pound sign "£" for the Lie derivative ("£_U A^α"). | This is MTW's notation, but read-aloud and search will treat it as a currency sign. Consider writing "the Lie derivative L_U A^α" in the summary. |
| 6 | info | Radial-field worked example, last step | n/a | "though its components at a fixed point of a turning line are not constant" | The clause is hard to follow and adds nothing. Consider cutting it or saying plainly that rotating the field about the origin maps it onto itself. |

All the other checks found nothing:
- Recap (pp. 1–2), including the "six rotations and six boosts" slip, which the page notes and does not repeat, and the square-root correction at the board.
- The transformation of $\partial_\beta A^\alpha$ (p. 3): checked from $A^{\alpha'}=\Lambda^{\alpha'}{}_\alpha A^\alpha$ and $\partial_{\beta'}=\Lambda^\beta{}_{\beta'}\partial_\beta$.
- The connection and its two demands (pp. 4–6), and the affine parameter and λ = 2 → 7 (p. 6).
- Parallel transport: the equation $dA^\alpha/d\lambda+\Gamma^\alpha_{\beta\mu}U^\beta A^\mu=0$, the local Lorentz frame argument and why it is called "parallel" (pp. 6–8).
- Lie transport as a coordinate change and the two first-order expressions (p. 9); the Lie derivative $U^\beta\partial_\beta A^\alpha-A^\beta\partial_\beta U^\alpha$ (p. 10); the commutator (p. 11).
- The scalar and one-form Lie derivatives (p. 11).
- Adapted coordinates (p. 12).
- Killing's equation from $\mathcal{L}_C g$, with $\nabla g=0$ (p. 13). The expansion $C^\mu\nabla_\mu g_{\alpha\beta}+g_{\mu\beta}\nabla_\alpha C^\mu+g_{\alpha\mu}\nabla_\beta C^\mu$ is correct.
- U·C conserved, the mountain-top metric, energy and angular momentum (pp. 14–15). Hughes's slip "a metric that's time-dependent" (p. 15) is rightly not repeated.
- The Levi-Civita symbol, the determinant theorem and the transformation law (p. 16). Derived independently: with $M=\Lambda^\mu{}_{\alpha'}$ one gets $\tilde\epsilon_{\alpha'\beta'\gamma'\delta'}=\det(\partial x'/\partial x)\,\Lambda\Lambda\Lambda\Lambda\,\tilde\epsilon$, weight 1, as in Carroll (2.65).
- Determinant weight −2 (p. 17), and the note on Hughes's later "weight 2" slip. That note is correct: √|g| has weight −1 and √|g| ε̃ is a tensor (Carroll's convention). The slip is real: p. 17 says "a tensor density of weight 2 ... to get something of weight 1, we take a square root".
- The spherical volume element (p. 17).

Every `at=` page citation matches the transcript page where the equation is said or written.

## Arithmetic and answer checks
- **Parallel transport round a circle.** The Christoffel symbols of the flat polar plane, $\Gamma^r_{\phi\phi}=-r$ and $\Gamma^\phi_{r\phi}=1/r$, are correct. $\vec e_x = \cos\phi\,\vec e_r - (\sin\phi/R)\,\vec e_\phi$ checks out: $\cos\phi(\cos\phi,\sin\phi) + (-\sin\phi/R)\,R(-\sin\phi,\cos\phi) = (1,0)$. The r equation gives $-\sin\phi+\sin\phi=0$ and the φ equation $-\cos\phi/R+\cos\phi/R=0$; the terms with $U^r=0$ drop out. Correct. The plot curves $\cos\phi$ and $R A^\phi=-\sin\phi$ match.
- **Lie derivative of a radial field along rotations.** $U^\beta\partial_\beta A^\alpha=(-y,x)$; $A^\beta\partial_\beta U^\alpha=(y\cdot(-1),\,x\cdot 1)=(-y,x)$; difference 0. Correct: rotation and dilation commute.
- **Killing angular momentum.** $C=\partial_\phi$, $C_\phi=r^2$, $U\cdot C=r^2\dot\phi = x\dot y-y\dot x$. On $y=2$, $x=\lambda$ this is $0-2\cdot1=-2$, the same everywhere on the line. φ falls from near π to near 0, so the motion is clockwise, as stated. The calcs entry `killing-polar-identity` checks $(\lambda^2+4)\,d(\arctan(2/\lambda))/d\lambda=-2$, and it is correct.
- **Ball volume.** $(8/3)(2)(2\pi)=32\pi/3=33.510$, equal to $\tfrac43\pi\cdot 8$. Without √g: $2\cdot\pi\cdot2\pi=4\pi^2=39.478\approx39.48$. Correct.
- **Spherical determinant.** $\det\operatorname{diag}(1,r^2,r^2\sin^2\theta)=r^4\sin^2\theta$, square root $r^2\sin\theta$. Correct.
- **Quiz.**
  - Q1: answer 1 is correct.
  - Q2: answer 1 is correct. The explanation's Christoffel cancellation was checked: $\Gamma^\alpha_{\beta\mu}U^\beta A^\mu-\Gamma^\alpha_{\beta\mu}A^\beta U^\mu=0$ by relabelling and the symmetry of Γ.
  - Q3: answer 2 is correct.
  - Q4: answer 1 is correct.
- **Flashcards.** All five are correct.
- **Calcs file.** Its entries match the numbers on the page. The page's formulas were not re-run with `npm run calc:test` in this review.

## Coverage and order
- The page follows the lecture's order: recap (equivalence principles, local flatness, 20 second derivatives), why partial derivatives fail (tangent spaces on a sphere), transport and connection, parallel transport and its meaning, motion of free bodies, Lie transport and the Lie derivative, the commutator, higher-rank Lie derivatives, Lie-transported tensors and adapted coordinates, Killing vectors and Killing's equation, conserved U·C with energy and angular momentum, tensor densities (Levi-Civita), the determinant of the metric, and the spherical volume element.
- Nothing in the lecture is left out. Small things omitted on purpose: the "tenure talk" setting of the Apollo joke, and the remark that a later lecture will build a 20-component curvature object (p. 2). Neither needs adding.
- Additions are all clearly the page's own: the four worked examples, the plot and the cosmology callout. The worked examples are original; the transcript has no numerical examples.

## Licensing
- The transcript has no "All rights reserved" or "Courtesy of" notice.
- Paraphrase is the page's own throughout. The short quoted phrases ("cheats", "a similar tune in a different key", "math happens") are marked as quotes and are short.
- No figures are reused. The plot is generated from formulas.
- No OpenStax or LibreTexts material.
- No em dashes on the page (checked).

## Notes
- **Cosmology callout.** The physics is correct. Robertson–Walker spatial sections are maximally symmetric (six Killing vectors; in curved cases the "translations" are not literal translations). There is no timelike Killing vector when a(t) changes. Momentum falling as 1/a follows, for instance, from the spatial Killing vector ∂_x of flat RW: $U\cdot C=a^2\,dx/d\tau=a\,p_{\rm phys}/m$ is constant. The callout is the page's own addition and is not attributed to Hughes, which is right.
- **Lecture 9 does cover** the geodesic equation and finishing tensor densities and volume elements. In L9 the Levi-Civita symbol is weight 1, the metric determinant weight −2, and √g makes a tensor. The page's body line "as Lecture 9 will show" refers only to free fall parallel-transporting its four-velocity (the geodesic equation), so it is fine. Only the U·C claim in `leadsTo` is wrong (finding 1).
- **"Lecture 6" for the covariant derivative** matches the existing page `covariant-derivative-christoffel-metric` (lecture: 6).
- **Uncertain:** finding 2 (where on the board the dλ was missing) cannot be settled from the transcript.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error): the Lecture 9 leadsTo now claims only tensor densities, volume elements and the geodesic equation; a new Lecture 10 leadsTo carries the proof that U·C is conserved (which opens Lecture 10).
- Finding 2: the dλ remark now says neutrally that a student caught a missing dλ on the board (p. 10).
- Finding 5: the frontmatter summary no longer uses "£"; it writes "the Lie derivative L_U A^α".
- Finding 6: the unclear clause in the radial-field example was replaced by a plain image (a turning wheel's spokes stay radial).
- Findings 3 and 4: no change needed.
