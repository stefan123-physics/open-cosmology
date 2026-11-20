---
page: content/year-4/8.09/rigid-body-coordinates-euler-angles.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: text layer and rendered page images of printed pp. 29-33; Section 2.5 opening checked in the text layer)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_2/ (not fetched separately; it is the landing page of the same PDF)
verdict: needs-changes
---

# Review: Coordinates of a rigid body: Euler angles and Euler's theorem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Quiz 4, correct choice (index 2) | Notes p. 30 call the line of nodes "the intersection of the xy- and x̃ỹ-planes". This is a slip in the notes: the first turn is about z, so the x̃ỹ plane *is* the xy plane, and their "intersection" is not a line. The intended plane is the body's x'y' plane (equivalently x̃ỹ' after the second turn). | "the line of nodes, where the $xy$ plane meets the $\tilde x\tilde y$ plane" (repeats the slip) | Change to "where the $xy$ plane meets the body's $x'y'$ plane" (as the body text already says). |
| 2 | warning | Section "Euler angles", paragraph after the list | Same slip as #1 (xy and x̃ỹ planes). | Silently gives the correct version (xy plane cuts the x̃ỹ' plane = body x'y' plane). | Per writing rule 4, add a short bracket: "(the notes write the x̃ỹ plane, which is the xy plane itself; the body's x'y' plane is meant)". |
| 3 | info | Section "Euler's theorem", before eq. (2.16) | "Since U is orthogonal, the matrix X is unitary." | "the eigenvectors can be chosen so that X is unitary" | None needed; the page's wording is the more accurate one (normalised eigenvectors of a normal matrix). Could say in a bracket that this is a deliberate refinement. |
| 4 | info | Section "Euler's theorem", after eq. (2.17) | Notes simply say "without loss of generality, λ2 = λ3*". | Adds the reason (a real cubic has a real root; others real or a conjugate pair) and the all-real case (±1). | None; both additions are correct (real eigenvalues with product 1 and modulus 1 are (1,1,1) or (1,−1,−1); one is 1 either way). |
| 5 | info | Formula "Trace of a rotation matrix (this page's own step)" | Not in the notes. | Labelled as the page's own step, cited "follows from eqs. (2.15)–(2.17)". | Acceptable as labelled. Verified correct (see calcs check below). |
| 6 | info | Formula "X diagonalises U" | (2.14) defines X as the column matrix; (2.15) is the diagonalisation. | Formula shows only (2.15), cited "eqs. (2.14)–(2.15)"; (2.14) is described in words. | Fine; optionally cite only (2.15) for the formula. |

All other formulas were checked against the rendered pages and match exactly, with correct equation numbers and printed pages: (2.1) p. 29; (2.2), (2.3) p. 30; (2.4), (2.5), (2.6), (2.7), (2.8) p. 31; (2.9), (2.10), (2.11), (2.12), (2.13) p. 32; (2.14)–(2.18) p. 33. Matrix signs in (2.4) and (2.6) agree with the notes (passive convention, +sin in the upper right of each 2×2 block). Text citations "notes p. 29/30/31/32/33" are all on the right pages (9 − 6 = 3 count and active/passive are on p. 32, Euler's theorem statement p. 32, angular velocity p. 33).

## Arithmetic and answer checks
- Six coordinates: 3 + 2 + 1 = 6. Correct; matches notes p. 29.
- 9 entries − 6 conditions = 3 parameters. Correct; the page's reason (symmetric matrix equation: 3 diagonal + 3 off-diagonal) is right.
- Worked example (φ = θ = 90°, ψ = 0), recomputed by hand: U_φ rows (0,1,0), (−1,0,0), (0,0,1); U_θ rows (1,0,0), (0,0,1), (0,−1,0). U_θU_φ: row 1 = row 1 of U_φ = (0,1,0); row 2 = row 3 of U_φ = (0,0,1); row 3 = −(row 2 of U_φ) = (1,0,0). So U(x,y,z) = (y,z,x). Correct. det = +1 (cyclic permutation). Fixed vector x = y = z, axis (1,1,1)/√3. Correct. tr U = 0 ⇒ cos Φ = −1/2 ⇒ Φ = 120°. Correct. Eigenvalues 1, e^{±2πi/3}: sum 0, product 1. Correct. U³ = 1 (three cyclic shifts), consistent with 3 × 120° = 360°. Correct.
- The example is original (the notes have no worked example in Section 2.1).
- Trace identity: for U = U_ψU_θU_φ the diagonal is cosψcosφ − sinψcosθsinφ, −sinψsinφ + cosψcosθcosφ, cosθ, summing to cos(φ+ψ)(1+cosθ) + cosθ; with cos(Φ/2) = cos(θ/2)cos((φ+ψ)/2) this equals 1 + 2cosΦ. Verified algebraically; the calcs entry `trace-identity` encodes exactly this.
- calcs `example-matrix-entries`: general rows of U_θU_φ re-derived, (−cθsφ, cθcφ, sθ) and (sθsφ, −sθcφ, cθ): correct; weighted sum at π/2 is 12 on both sides.
- calcs `euler-proof` is a trivial identity (1/(cos²+sin²) = 1); harmless, but it checks little. Info only.
- Quiz 1: answer 1 correct; explanation correct.
- Quiz 2: answer 2 correct; explanation (det cannot jump continuously; SO(3)) correct and matches notes p. 32.
- Quiz 3: 1 + 2cosΦ = 0 ⇒ Φ = 120°; answer index 1 = "120°". Correct.
- Quiz 4: answer index 2 (x̃ axis) is the right axis, but the choice text contains the notes' slip (finding #1).
- Flashcards: all correct. ("Orthogonal matrix" card: W^TW = WW^T = 1, nine minus six, det ±1, SO(3): correct.)

## Coverage and order
- Section 2.1 order in the notes: rigid-body condition (2.1); 3 + 2 + 1 counting; independence of N; centre of mass (2.2), (2.3); body axes primed; Euler angles and line of nodes; (2.4); intermediate r̃' = U_θ r̃ etc.; (2.5), (2.6); orthogonality (2.7), (2.8); 9 − 6 = 3; active vs passive; (2.9), det ±1, SO(3)/O(3), continuity argument; Euler's theorem (2.10)–(2.17); angular velocity (2.18) and ω(t). The page covers every item in this order. The intermediate chain r̃' = U_θ r̃, r' = U_ψ r̃' is given in words, which is fine.
- Additions (all correct and marked or harmless): the remark on the sign convention versus the 8.07 page (checked: the 8.07 page's R_z(φ) has −sinφ in the upper right, i.e. the active form, so the claim is right); the physical reading of φ, θ, ψ (Section 2.5 of the notes indeed calls φ̇ the precession rate, ψ̇ the spin about the body z axis and θ̇ the nutation, so "precession angle, tilt and spin" is fair); the trace formula; the worked example.
- No figures: the notes' Figs. 2.1–2.5 (triangulation, CM and body axes, the three Euler turns) are not redrawn, which is correct for licensing. Info: a generated, keyboard-accessible diagram of the three Euler turns would help readers, since the text alone is hard to follow.

## Licensing
- The notes are CC BY-NC-SA; no "All rights reserved" or "Courtesy of" notices in Section 2.1 (grep of the text layer found none).
- No figure is reproduced or redrawn.
- Paraphrase: sentences are rewritten. Closest phrases: "With these constraints, how many generalised coordinates are left?" (notes: "Given these constraints, how many generalized coordinates are there?") and "This is an eigenvalue equation with eigenvalue 1" (notes: "This is an eigenvalue equation for U with eigenvalue 1."). Both are single short sentences of standard wording; acceptable, info only.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: 2.2 "Time Evolution with Rotating Coordinates" (notes p. 33 say ω will matter in the next section on rotating coordinates): correct. 2.4 "Euler Equations": Euler's equations are written in the body frame; saying Euler angles translate the solution back is fair (used explicitly in 2.5). Both section numbers match `_course.json`.
- Prerequisite slugs all exist (8.01 rigid-body-kinematics, 8.07 rotations-index-notation, 18.06 orthogonal-matrices-gram-schmidt, 18.06 eigenvalues-and-eigenvectors); in-text link course ids (8-01, 8-07, 18-06) follow the pattern used elsewhere.
- No em dashes on the page; every display equation is a `<Formula>` with `cite` and `at`.
- The "No sum over α" remark matches the notes (p. 33).
- I did not run `content:check` or `calc:test`; the calcs values were checked by hand above.

## Resolution (2026-11-19, by the page author)

- Finding 1 (quiz 4): the correct choice now reads "where the fixed $xy$ plane meets the body's $x'y'$ plane".
- Finding 2: added a bracketed note in "Euler angles" saying that the notes name the $\tilde x\tilde y$ plane, which coincides with the $xy$ plane after a turn about $z$, so the tilted plane is meant.
- Info items: no change needed. A diagram of the Euler turns was not added (the page's text and matrices carry the construction); left for a later pass.
