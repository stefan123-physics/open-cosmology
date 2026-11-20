---
page: content/year-5/8.962/basis-vectors-metric-four-momentum.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/55975f0989f47c8f3c13e1fd8442de5d_TiHHz3sKDbY.pdf (read: local copy of the Lecture 2 transcript, 22 PDF pages, as text with page markers; the PDF has no printed footer numbers, so PDF page = cited page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-2-introduction-to-tensors/ (not opened separately; the lecture has no slides or notes, so the transcript is the only source)
  - 8.962 Lecture 3 transcript (local copy, read to check the leadsTo claim)
  - content/year-4/8.286/_course.json and content/year-4/8.286/robertson-walker-spacetime.mdx (to check the 8.286 Lecture 13 leadsTo claim)
  - calcs/8.962/basis-vectors-metric-four-momentum.yaml
verdict: pass-with-notes
---

# Review: Basis vectors, the metric and 4-momentum

Hughes writes every equation on the board, so each `<Formula>` is a reconstruction from what he says. For each one I checked that he describes it at the cited page and that the physics is right: c = 1, signature (−, +, +, +), the upper index first on Λ, the basis-vector law e_α = Λ^μ̄_α e_μ̄, and the inverse given by reversing the velocity, Λ^μ_ν̄(v) = Λ^μ̄_ν(−v). Every formula passes. I found no errors in physics, numbers, quiz answers or licensing. The findings are about citation precision, order, one notation clash and small points of coverage.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Basis vectors", paragraph after "Transformation of basis vectors" | Hughes's warning against rows, columns and matrices ("three index object", "four index objects", "five index object", "hopeless") comes on pp. 4–5, *during* the derivation, before the result on p. 5. "Line up the indices" is on p. 6. | The matrices remark comes after the result, between a "(transcript pp. 5–6)" and a "(transcript p. 6)" citation, so it reads as if it were on p. 6. | Cite the matrices remark "(transcript pp. 4–5)", or move it to just before "The components are just numbers, so the factors can be reordered…", where Hughes makes it. |
| 2 | warning | "4-velocity and 4-momentum": formulas "4-momentum", "Normalisation…", "Energy, momentum and rest mass", worked example, Summary | Hughes marks 3-vectors with an under-tilde (p. 6: "In one of your textbooks, it's written with a boldface") and keeps them apart from 4-vectors. | `\vec p` is used both for the 4-momentum (`\vec p = m\,\vec u`, `\vec p\cdot\vec u`) and for its spatial part (`p^\mu = (E, \vec p)`, `\lvert\vec p\rvert^2`), sometimes in the same formula. The same happens with `\vec v` inside `u^\mu = (\gamma, \gamma\vec v)`, but there `\vec v` is never a 4-vector, so it does not clash. | Write the 3-momentum differently, for example bold **p** or p^i, with `\lvert\mathbf p\rvert^2` in E² = …, and say once that bold means a 3-vector (as in Hughes's textbook remark). |
| 3 | info | "Coordinate bases and orthonormal bases": "In Cartesian coordinates that is unremarkable. In curvilinear coordinates it matters (transcript pp. 13–14)" | Both statements are on p. 13. | pp. 13–14 | Cite "transcript p. 13". Not wrong, just broad. |
| 4 | info | "4-acceleration", bracketed note on one g for a year | p. 21: "if you accelerate at 1G for a year, you get to very close to the speed of light… Half a year later, you're moving at something like half the speed of light… Six months later, you're actually quite close to the speed of light." He does not say whose year he means. | Flags the slip using proper time: tanh(gτ/c) ≈ 0.77c after one year, about 0.47c after half a year. | The correction is right and is the kind of note AGENTS.md rule 4 asks for. Optional: add that if the year is counted in the launch frame's time the speed is lower still (v = gt/√(1 + (gt/c)²) ≈ 0.72c after one year, 0.46c after half a year), so the conclusion holds either way. |
| 5 | info | Graph 1 caption: "The two agree only at r = 1." | (not in MIT) | e_θ·e_θ = r² has dimensions of length², while ê_θ·ê_θ = 1 has none (as the page says on p. 14's point). | "agree only at r = 1" holds only in a chosen unit of length. Either say "in units where r is measured in the unit of length used for the axis", or drop the sentence and say instead that the coordinate basis vector grows with r while the unit vector does not. |
| 6 | info | "4-velocity and 4-momentum" | Hughes says the "proper" in proper time "I think … comes from French", meaning one's own time; in German, *Eigenzeit* (p. 15). | "proper" in the sense of one's own, as in the German *Eigenzeit* | Correct. The page leaves out his unsure etymology remark, which is the right choice. No change needed. |

## Citation check (every `<Formula>` and cited claim)
All are written on the board; transcript pages checked against the page-marked text.
- Recap, dotted equals sign, "any random set of four numbers": pp. 1–2. Correct.
- (e_α)^β = δ_α^β, "a coin to observer O" (= according to observer O): p. 3. Correct.
- A = A^α e_α with a real equals sign: p. 3. Correct.
- A^α e_α = A^μ̄ e_μ̄ = Λ^μ̄_β A^β e_μ̄ ("lambda mu bar beta A beta e mu bar"): p. 4. Correct.
- e_α = Λ^μ̄_α e_μ̄ after renaming the dummy index and factoring out A^α: p. 5. Correct.
- Inverse = reverse the velocity: pp. 6–7. Correct. The physical argument (the other observer sees me move at the same speed in the opposite direction) is on p. 6.
- Λ^γ_ν̄ Λ^ν̄_β = δ^γ_β, and the remark about the barred Kronecker delta: p. 7. Correct. (The transcript garbles the indices here: "e beta bar be e beta bar… lambda… beta bar minus v in the gamma direction". The page's reading, e_β = Λ^ν̄_β Λ^γ_ν̄ e_γ, is the consistent one.)
- Δs² = −Δt² + Δx² + Δy² + Δz², and the minus sign / forgotten phone remark: pp. 8–9. Correct.
- A·A = −(A⁰)² + …: p. 9. Correct.
- Timelike / spacelike / null, and the meaning of "scalar": pp. 9–10. Correct.
- A·B and the proof using C = A + B: p. 10. Correct.
- "Invariants are our friends": p. 11. Correct.
- A·B = A^α B^β (e_α·e_β) ≡ η_αβ A^α B^β, η = diag(−1, 1, 1, 1): p. 11. Correct. (Hughes says "inner product of basis vector A with basis vector B", a slip for e_α·e_β; the page writes it correctly and does not need to mention it.)
- First example of a tensor: pp. 11–12; distance whose square can be negative, positive or zero: p. 12; η reserved for SR in Cartesian coordinates, metric becomes a function, gravity encoded in it: pp. 12–13; Pythagoras and "flat as a board": p. 13. Correct.
- dx = dx^α e_α and the coordinate basis: p. 13. Correct.
- dx = dr e_r + dθ e_θ + dφ e_φ: p. 13. Correct.
- Dimensions of e_r, e_θ, e_φ: p. 14. Correct.
- dx = dr ê_r + r dθ ê_θ + r sinθ dφ ê_φ: p. 14. Hughes only says "what you want me to write down is this"; the formula is reconstructed, and it is the standard one. Acceptable.
- e_r·e_r = 1, e_θ·e_θ = r², e_φ·e_φ = r² sin²θ: p. 14. Correct.
- Metric from basis scalar products in general; Purcell, Griffiths, Jackson; divergence missing a factor of r: pp. 14–15. Correct.
- u = dx/dτ, u^μ = (γ, γv), rest frame (1, 0, 0, 0): p. 15. Correct.
- p = mu, relativistic mass, E and momentum as measured: pp. 15–16. Correct.
- u·u = −γ² + γ²v² = −1 and the rest-frame trick: p. 16. Correct.
- p·p = −m² = −E² + |p|²: pp. 16–17. Correct.
- E² = |p|² + m², and with c restored: p. 17. Correct.
- Conservation of total 4-momentum; centre-of-momentum frame; pair-production threshold: pp. 17–18. Correct.
- Muon and a friend jogging at half the speed of light; boosting works but there is an easier way: p. 18. Correct.
- E = −p·u: p. 19. Correct. "Tattoo this into a neuron", black holes, hairier metric: p. 19. Correct.
- a = du/dτ and a·u = 0, the car example: p. 20. Correct.
- Proper time for an accelerated observer; one g for a year: pp. 20–21. Correct.
- (0, N) tensor definition and the metric as a (0, 2) tensor: p. 21; three- and four-vector tensors: pp. 21–22; one-forms and vectors as tensors next time: p. 22. Correct.

## Arithmetic and answer checks
All recomputed independently (Python):
- Quiz 1: −9 + 1 + 4 + 4 = 0, null. Answer index 0 correct. "It depends on the observer" is correctly wrong, as the scalar product is invariant.
- Quiz 2: γ = 1.25 at |v| = 0.6; u^μ = (1.25, −0.75, 0, 0) for v = −0.6. p·u = −10 × 1.25 + 6 × (−0.75) = −17, so E = 17. Check by boost: γ(E − v p_x) = 1.25 (10 + 0.6 × 6) = 17. Distractors: 8 = √(100 − 36) (rest mass), 10 (lab energy), 12.5 = 10 × 1.25 (time part only). The particle moves at +0.6 (p/E), the observer at −0.6, so "runs towards the particle" is right. Answer index 0 correct.
- Quiz 3: e_θ·e_θ = r²; r² sin²θ is e_φ·e_φ. Answer index 0 correct.
- Quiz 4: derivative of u·u = −1 gives 2 u·a = 0. Answer index 0 correct; the other choices are correctly wrong (a generally has a time component in a frame where the body moves).
- Worked example: m² = 25 − 16 = 9, m = 3; γ = 1/√0.64 = 1.25; u = (1.25, 0.75); −1.5625 + 0.5625 = −1; p·u = −6.25 + 3 = −3.25, E = 3.25; boost 1.25 × (5 − 2.4) = 1.25 × 2.6 = 3.25. All correct.
- Graph 2: E(v) = (5 − 4v)/√(1 − v²). E(0) = 5, E(0.6) = 3.25, E(0.8) = 3.000 (the minimum, dE/dv = 0 there, and v = p/E = 0.8 is the particle's speed), E(−0.9) = 19.73 < 20 (inside the y range), E(0.95) = 3.84. Caption and point labels correct.
- Graph 1: r² on [0, 3] reaches 9 = top of the range. Correct (see finding 5 about the wording).
- One g: gτ/c = 9.80665 × 3.15576 × 10⁷ / 2.99792458 × 10⁸ = 1.0323, tanh = 0.7748 ≈ 0.77; half a year 0.5161, tanh = 0.4747 ≈ 0.47. Correct (Julian year, standard gravity).
- Calcs file: every number on the page has an entry, and each entry matches the page: identities for the inverse Lorentz matrix ((0,0) entry γ² − γ²v² = 1, (0,1) entry 0), the polarisation identity, u·u = −1, the spherical coordinate/orthonormal equivalence, E = −p·u = γ(E − v p_x); quiz 1 (−3**2 is −9 in Python, so the formula is right), quiz 2 (17, u = −0.75, mass 8, distractor 12.5), worked example (3, 1.25, −1, −3.25, 3.25), graph minimum (3, and zero slope at 0.8), one g (0.77, 0.47). `quiz: 1` is the 0-based index of quiz 2, consistent with the file format. I did not run `npm run calc:test`; I recomputed the values by hand instead.

## Coverage and order
- Follows Hughes's order: recap → basis vectors → their transformation and the inverse → scalar product from the interval → classification → A·B and its invariance → metric η → distance, flatness, η reserved for Cartesian SR → coordinate vs orthonormal basis → 4-velocity → 4-momentum → normalisations → conservation and centre-of-momentum frame → E = −p·u → 4-acceleration → (0, N) tensors → preview of one-forms. The only change of order is finding 1.
- Left out (all minor; none needs a page change): the under-tilde notation for 3-vectors (p. 6, but see finding 2); the pointer ahead to curved geometries such as the surface of a sphere (p. 13); the remark that the equation a·u = 0 alone does not fix the motion, you also need the direction of the acceleration and initial conditions (p. 20); the explicit components p^μ = (γm, γm v) behind the "relativistic mass" remark (p. 16; the page mentions γm without showing where it appears); Hughes's aside that one-forms "happen to be a species of vector" (p. 22). Administration skipped correctly: his daughter's virus, Wikipedia, promised notes on matrices, problem-set mentions, "call out my index slips".
- Nothing added beyond the source except the worked example, the two graphs, the one-g numbers (flagged as the page's own) and the cosmology callout.

## Licensing
- The transcript is OCW material under CC BY-NC-SA; there are no slides, figures or "All rights reserved"/"Courtesy of" notices for this lecture. Both graphs are generated from formulas.
- No copied text. Close but short echoes: "Invariants are the physicist's friends" (Hughes: "Invariants are our friends"), "standing still, but always moving through time" (Hughes: "the person is standing still, but moving through time"), the forgotten-phone example retold in new words. These are short phrases and acceptable.
- No OpenStax or LibreTexts material.
- The worked example (E = 5, momentum 4, observer at 0.6) and the quiz numbers are the page's own; Hughes gives no numerical example.

## Forward links
- leadsTo 8.962 Lecture 3: true. Lecture 3 introduces one-forms, the basis one-forms, contraction, the gradient as a one-form, and "a tensor of type mn is a linear mapping of m one forms and n vectors to the Lorentz scalars… One zero tensors are vectors", plus how components transform with Lorentz matrices and raising/lowering with the metric. The page's "(m, n)" wording matches.
- leadsTo 8.286 Lecture 13: true. 8.286 Lecture 13 is "Non-Euclidean Spaces: Spacetime Metric and Geodesic Equation"; the site's page robertson-walker-spacetime.mdx covers the Robertson–Walker spacetime metric, whose spatial part carries a(t)².
- Cosmology callout: "in the Robertson–Walker metric of 8.286 the spatial part is multiplied by the square of the scale factor" is correct. "E = −p·u is how the cosmological redshift is computed in general relativity" is a fair, standard statement (comoving observers u = (1, 0, 0, 0) in RW coordinates measure E = −p·u ∝ 1/a). It is not attributed to Guth or to this lecture, which is right: 8.286 derives the redshift differently (light pulses between comoving observers). No change needed.

## Notes
- Lecturer slips and transcription errors, and how the page handles them: "Lorenz" throughout (transcription; the page spells it correctly); "unit vector e alpha" (p. 3; basis vectors are not unit vectors in general, and e₀·e₀ = −1; the page correctly avoids "unit"); "inner product of basis vector A with basis vector B" (p. 11; written correctly on the page); "4-velocity of acceleration" (p. 20; written correctly); "very close to the speed of light" after a year at one g (p. 21; flagged on the page, finding 4). None of the others changes the physics, so the page does not need to mention them.
- Index placement: δ_α^{ β} for the basis components and δ^γ_{ β} for the matrix product are consistent; the inverse matrix Λ^μ_ν̄ has the upper index unbarred, as in Hughes's and Schutz's convention.
- No em dashes on the page (checked).
- Prerequisite slugs exist: spacetime-geometric-viewpoint (8.962), spacetime-interval (8.286), momentum-energy-sun (8.033).

## Findings (numbered)
1. warning: the matrices remark is placed and cited as if it came on p. 6; Hughes makes it on pp. 4–5, during the derivation. Fix the citation or move it.
2. warning: `\vec p` means both the 4-momentum and its 3-momentum part (p = mu next to p^μ = (E, p); |p|²). Use bold or p^i for the 3-vector.
3. info: "Cartesian unremarkable / curvilinear matters" is p. 13, not pp. 13–14.
4. info: the one-g correction is right; optionally add that in the launch frame's time the speed is lower still (0.72c after a year).
5. info: graph 1 caption "agree only at r = 1" compares a length² with a pure number; reword.
6. info: proper-time etymology handled well; no change.

Verdict: pass-with-notes (no errors).

## Resolution (2026-11-19, by the page author)

1. The warning against matrix notation now cites transcript pp. 4–5, where Hughes makes it.
2. The 3-momentum is no longer written with the 4-vector arrow: components are p^μ = (E, p¹, p², p³), the size of the 3-momentum is |p|, and a sentence after the 4-momentum formula says so (a bold p was avoided because read-aloud cannot say \mathbf).
3. "Curvilinear coordinates matter" now cites p. 13.
4. Added the launch-frame figure: after a year of launch-frame time the speed is about 0.72c (new calcs entry one-g-year-coordinate).
5. Graph 1 caption no longer compares a squared length with a pure number at r = 1; it says r is in a fixed unit.
6. No change needed.
