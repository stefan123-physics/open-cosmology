---
page: content/year-5/8.962/tensors-one-forms-index-gymnastics.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-3-tensors-continued/ (read through its transcript; OCW has no slides or notes for this lecture)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/e76be907216aa182691ac751d957c2c5_H6eR3sG524M.pdf (read: local copy L3.pdf, text with PDF page markers, pp. 1-19; the PDF has no printed footer numbers, so PDF page = cited page)
  - 8.962 Lecture 4 transcript (read, to check leadsTo)
  - 8.962 Lecture 5 transcript (read, to check leadsTo and the cosmology callout)
verdict: pass-with-notes
---

# Review: Tensors, one-forms and raising and lowering indices

Hughes writes every equation on the board, so the transcript does not show them. Each `<Formula>` was checked against what he says on the cited page, and the reconstruction was checked for correct physics (c = 1, signature (-,+,+,+), Schutz/Hughes convention $\vec e_{\bar\alpha} = \Lambda^\mu{}_{\bar\alpha}\vec e_\mu$).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "What a one-form looks like", the sentence "The change in height along a displacement $\Delta\vec x$ is $\tilde d h(\Delta\vec x)$", and the graph caption | p. 12: "take my one form, plop into its slot delta x, I get something like this" (an approximate change; the contour picture is qualitative) | States it as an exact equality, then the caption applies it to finite displacements of length 0.8 ("the gradient one-form gives the second displacement a bigger number") without saying at which point the one-form is taken | Say "for a small displacement", or in the caption "summed along the way" / "taken at the midpoint". (The midpoint value is exact here because h is quadratic: 2(0.6)(0.8) = 0.96 and 2(2.0)(0.8) = 3.2. The calcs file already checks the first.) |
| 2 | warning | "Components and how they transform", the paragraph about observer $\bar O$, cited "(transcript p. 5)" | The observer "dashing through the room at three quarters of the speed of light" is on p. 4; the Lorentz matrices coming out by linearity are on p. 5 | Cites only p. 5 for both | Cite "transcript pp. 4–5" |
| 3 | info | "Tensors of type (m, n)", the blockquote definition | p. 15: "A tensor of type mn is a linear mapping of m one forms and n vectors to the Lorentz scalars." | Almost word for word, in a blockquote | Acceptable as a one-line standard definition. If kept as a blockquote, it reads as a quotation, so either say "Hughes's definition" or reword it slightly |
| 4 | info | "Tensors of type (m, n)", last sentence (covariant/contravariant, p. 19) | Hughes says this in his closing remarks, after the basis objects and derivatives (p. 19) | Placed before the "Basis objects" section | Fine as a thematic move. Optionally say it was his closing remark, or move it to the end |
| 5 | info | Formula "Transformation of one-form components" | p. 7: "contract it with the correct setup of my Lorentz transformation matrix, line up the indices" (the explicit form is left to his notes) | $p_{\bar\alpha} = \Lambda^\beta{}_{\bar\alpha}\,p_\beta$ | Correct and consistent with the (0, 2) rule on p. 5. The page could say "following the same rule", since the formula is not dictated |
| 6 | info | Throughout | Hughes writes the abstract tensor with two bars over it, and MTW/Carroll use bold (p. 3) | The page explains this but then uses a plain $\eta$ for both the machine $\eta(\vec A, \vec B)$ and its components $\eta_{\alpha\beta}$ | Fine, because the indices tell them apart. Optional: a bold or barred symbol for the abstract tensor |
| 7 | info | "The metric turns vectors into one-forms" / "Basis objects" | p. 17: Hughes calls the two-index basis object a "basis two-form" (a misnomer, since a two-form is antisymmetric) | Avoids the term and writes $\tilde\omega^\alpha\otimes\tilde\omega^\beta$ | Correct. No change needed. The page does not have to flag this slip because it does not repeat it |
| 8 | info | Coverage | p. 2: the inner product is defined to copy the structure of the invariant interval; p. 14: "shut up and calculate", Feynman | Not mentioned | Optional one-clause addition about the interval motivation |

No errors were found in the physics, signs, index placement or citations, apart from the page range in row 2.

## Arithmetic and answer checks
- Worked example 1 (inverse boost, v = 0.6): $\gamma = 1/\sqrt{1-0.36} = 1.25$ and $\gamma v = 0.75$. The sign is right: with $\vec e_{\bar\alpha} = \Lambda^\mu{}_{\bar\alpha}\vec e_\mu$, the matrix $\Lambda^\mu{}_{\bar\alpha}$ is the inverse boost ($t = \gamma(\bar t + v\bar x)$), so the off-diagonal entries are $+\gamma v$. Then $\eta_{\bar0\bar0} = -1.5625 + 0.5625 = -1$ ✓ and $\eta_{\bar0\bar1} = -0.9375 + 0.9375 = 0$ ✓. I also checked $\eta_{\bar1\bar1} = -0.5625 + 1.5625 = 1$ ✓ (calcs `eta-11-invariant`).
- Worked example 2: $\partial_\alpha\phi = (3, 2, 0, 0)$ and $u^\alpha = (1.25, 0.75, 0, 0)$, so $3.75 + 1.5 = 5.25$ ✓. Along the path, $\phi = 3.75\tau + 1.5\tau = 5.25\tau$ ✓. The remark "no metric and no minus sign" is correct for a one-form contracted with a vector.
- Graph: the curves are circles of radius 1, √2, √3, 2, √5, √6 for h = 1 to 6. All lie inside the range [-3, 3] (√6 ≈ 2.449). A to B runs from x = 0.2 to 1.0, so h goes from 0.04 to 1 and rises by 0.96 ✓. B sits exactly on the h = 1 contour, so "only reaches" is right. C to D runs from 1.6 to 2.4, so h goes from 2.56 to 5.76 and rises by 3.2 ✓. It crosses the h = 3 (1.732), h = 4 (2) and h = 5 (2.236) contours, which is three ✓. Both lengths are 0.8 ✓.
- Quiz 1: $A_\alpha = (-2, 1, 0, 3)$ ✓ (answer 0). The distractors are the unchanged vector, the wrong-signature version and the all-minus version. All are wrong, as they should be.
- Quiz 2: $-2 + 4 + 0 + 0 = 2$ ✓ (answer 0). The explanation's figure "6" for $\sum A^\alpha B^\alpha$ is right (2 + 4). The distractor −6 is the Euclidean sum with its sign flipped, and 10 is arbitrary. All are wrong.
- Quiz 3: lowering one index gives (1, 3) → (0, 4) ✓. The explanation (a one-form slot becomes a vector slot) is correct.
- Quiz 4: the answer and explanation match transcript p. 11 ✓.
- Flashcards: all five are correct. The transformation rule, $p_\alpha = \tilde p(\vec e_\alpha)$, $\tilde\omega^\alpha(\vec e_\beta)=\delta^\alpha_\beta$, $\tilde\omega^\alpha = \tilde d x^\alpha$, the four forms of the scalar product and the type-change rule all check out.
- Calcs file: every entry matches the page. It covers ex1 (γv, η₀₀, η₀₁), ex2 (rate and path), quiz 1 and 2 (including the 6), the graph (0.96, 3.2, 0.8, and the midpoint one-form value 0.96), and the identities for η₀₀, η₁₁ and the chain rule, sampled over v. Minor points: `ex1-eta01` checks 0 as "1 + 0 = 1", which works but deserves a comment. There is no entry for the midpoint one-form value 3.2 for C to D, or for the "three contours" count. Both are optional. The `shown` strings exist in the page. I did not run `npm run calc:test`; the values were recomputed by hand above.

## Citation check (each formula and claim against the transcript page)
- Metric diag(−1,1,1,1), "reserve η" for rectilinear coordinates: pp. 1–2 ✓. (0, n) definition and the α → γ rename: p. 2 ✓. Machine with slots, MTW/Carroll bold, double bars, η(A,B) = A·B: p. 3 ✓. Frame independence: p. 3 ✓. The stress-energy preview: p. 4 ✓.
- Components from basis vectors: p. 4 ✓. The transformation of η and "line up the indices": p. 5 ✓ (but see row 2). Invariance of the metric: pp. 5–6 ✓. The "curvilinear" slip is on p. 6 ✓, and the page correctly flags it as a slip. "learn the lesson and overlook the example": p. 6 ✓ (a short, attributed quotation).
- One-forms, tilde, $p_\alpha = \tilde p(\vec e_\alpha)$: p. 6 ✓. Contraction and transformation: p. 7 ✓. Basis one-forms and the Kronecker delta: pp. 7–8 ✓. Components (1,0,0,0), columns and rows, "dual": p. 8 ✓. $\sum A^\alpha B^\alpha$ meaningless without the metric: pp. 8–9 ✓. Quantum-mechanics analogy: p. 9 ✓.
- The gradient example starts on p. 9, the 3-space directional derivative and the partial/total remark are on p. 10, and $d\phi/d\tau = u^\alpha\partial_\alpha\phi$ is on p. 10 ✓. The one-form argument and the $\nabla\phi$ / $\nabla_{\vec u}\phi$ notations are on p. 11 ✓.
- Basis one-forms as gradients of the coordinates: pp. 11–12, formula p. 12 ✓. Height-field contours: pp. 12–13 ✓. MTW sheets: p. 13 ✓. Catching fluxes: pp. 13–14 ✓. Musical instrument: p. 14 ✓.
- Lowering with one slot filled, using symmetry: p. 14 ✓. Inverse metric, also diag(−1,1,1,1) "not always": p. 15 ✓. Equivalent forms of A·B: p. 15 ✓. (m, n) definition, vectors (1,0) and one-forms (0,1): p. 15 ✓. Scaffolding and the R and S examples: p. 16 ✓. Covariant/contravariant: p. 19 ✓.
- Basis objects, "17 index tensor", outer product: pp. 16–17 ✓. Stress-energy flux interpretation: p. 17 ✓. Derivatives and E&M orthonormal versus coordinate basis: pp. 17–18 ✓.

## Coverage and order
- The page follows the lecture order from p. 1 to p. 18. The one exception is the p. 19 covariant/contravariant remark, which the page moves forward (row 4).
- Every substantive segment is covered: recap of the metric, the (0, n) definition and linearity, the machine picture, frame independence, the component recipe and transformation, one-forms, contraction, basis one-forms, duality (including the QM analogy), the gradient, basis one-forms as coordinate gradients, level surfaces and flux sheets, lowering and raising, the (m, n) definition, type change, basis objects as outer products, the stress-energy preview, and derivatives with changing bases.
- Omitted (minor): the interval motivation for the inner product (p. 2), the Feynman "shut up and calculate" aside (p. 14), the "vomitous" many-index basis example (p. 17) and the administrative opening (p. 1).
- Added: two original worked examples and a generated contour graph. These are appropriate.

## Licensing
- The transcript has no "rights reserved" or "courtesy" notice (I searched for both).
- MTW graphics: Hughes says he scanned figures from MTW for the course website (p. 13). The page does not reproduce them. It only says "MTW draws them". The graph is the page's own: circles of $h = x^2 + y^2$ generated from the formula, not a copy of an MTW figure or of Hughes's board sketch. ✓
- Paraphrase closeness: the text is rewritten throughout. Short phrases kept from the lecture are "line up the indices" (a standard phrase), "learn the lesson and overlook the example" (marked as his words), "honest equals sign" and "kick the scaffolding away" (both paraphrased). The only near-verbatim sentence is the (m, n) definition (row 3), which is a standard definition. No OpenStax or LibreTexts material.
- Both worked examples use the page's own numbers. Hughes gives no numerical example.

## Forward links and cosmology callout
- leadsTo Lecture 4: the L4 title is "Volumes and volume elements; conservation laws". It builds the volume tensor from the Levi-Civita symbol (L4 lines ~439–464 and the 4-volume at ~520) and the number-flux conservation law for particles (lines ~150–400) ✓.
- leadsTo Lecture 5: the L5 title is "The stress energy tensor and the Christoffel symbol". It gives "flux of momentum component alpha in the beta direction" (L5 line ~179) ✓.
- Cosmology callout: in its rest frame a perfect fluid has $T^{\alpha\beta}$ = diag(ρ, p, p, p), so two numbers, and $\nabla_\alpha T^{\alpha\beta} = 0$ gives the fluid equation $\dot\rho = -3H(\rho + p)$. Both claims are correct. L5 (around line 586) introduces conservation $\partial_\alpha T^{\alpha\beta} = 0$ and the perfect fluid. The callout attributes nothing to Hughes or Guth wrongly.

## Notes
- Lecturer slips: "curvilinear" for rectilinear (p. 6) is flagged on the page ✓. "basis two-form" (p. 17) is not repeated, so no flag is needed. The transcription garbles ("invertebrate" for invertible on p. 15, "sum them, and square them" on p. 8, "duel actors" on p. 9) are not carried over ✓.
- Conventions: c = 1 and (−,+,+,+) are stated at the top and used consistently. Index placement is correct in every formula, and the inverse-boost components have the correct sign.
- Prerequisite `basis-vectors-metric-four-momentum` exists in the course folder ✓.

## Findings (numbered)
1. (warning) $\tilde d h(\Delta\vec x)$ is stated as the exact change for a finite displacement, and the graph caption uses finite displacements. Add "small displacement" or "at the midpoint / summed along the way".
2. (warning) The paragraph about the observer moving at three quarters of light speed cites p. 5. The speed is on p. 4, so cite pp. 4–5.
3. (info) The (m, n) definition blockquote is almost verbatim from p. 15. Attribute it or reword it.
4. (info) The covariant/contravariant remark (p. 19) is moved before the basis-objects section.
5. (info) The one-form transformation formula is reconstructed, not dictated. It is correct.
6. (info) Plain $\eta$ serves both the abstract tensor and its components.
7. (info) Calcs: optional entries for the C–D midpoint one-form value (3.2) and the three-contour count. `ex1-eta01` uses a +1 offset, which deserves a comment.
8. (info) Minor omissions: the interval motivation (p. 2) and the "shut up and calculate" aside (p. 14).

Verdict: **pass-with-notes**. There are no errors. Findings 1 and 2 should be fixed before the page is marked `status: reviewed`.

## Resolution (2026-11-19, by the page author)

1. The topographic-map paragraph now says "small displacement", and that for a longer step the one-form is taken at the middle of the step (exact for the quadratic h of the graph).
2. The paragraph with the observer at three quarters of light speed now cites transcript pp. 4–5.
3. The (m, n) definition was reworded and marked as Hughes's definition.
4. The covariant/contravariant remark moved to the end of the last section, where Hughes makes it (p. 19), together with his closing point that the metric raises and lowers indices.
5. No change (the reconstructed transformation law is correct).
6. No change; the indices distinguish the tensor from its components.
7. Added a calcs entry for the C–D midpoint value 3.2 and a comment on the "plus 1" convention in ex1-eta01. The contour count (three) is checked by the reviewer and in the where-text; the calcs harness has no floor function.
8. Added the motivation of the inner product by the invariant interval (p. 2). The "shut up and calculate" aside is represented by the sentence that it is fine to calculate first.
