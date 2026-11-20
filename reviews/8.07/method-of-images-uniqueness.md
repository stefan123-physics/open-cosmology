---
page: content/year-4/8.07/method-of-images-uniqueness.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln5/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/9070df94553ec5622e72c42641250199_MIT8_07F12_ln5.pdf (read, local copy; handwritten, 12 PDF pages = printed pp. 58-63, 63-4, 64, 65, 63-5, 63-6 + OCW citation page; read from the page images of pp. 58, 59, 60, 61, 62, 63, 63-4, 64 and 63-5; pp. 64 ff. only to fix the boundary with the next page)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bbca948b5d2aea654d6f376327a9fab0_MIT8_07F12_ln6.pdf (read in part, local copy; page images of pp. 1 and 7 only, for the leadsTo)
verdict: pass-with-notes
---

# Review: The method of images and the uniqueness theorem

Lecture Notes 5 are handwritten. Guth's pages 58-63 cover the method of images (plane, energy, right-angle corner, grounded sphere, "other problems"); p. 63-4, in a second hand (confirmed: different handwriting, page number "63-4" overwritten), is "Uniqueness Theorem is our lisense to guess" with a three-step recipe. The PDF order is 58-63, 63-4, 64, 65, 63-5, 63-6, so the page's split (this page: 58 to 63-4; next page: 64, 65, 63-5, 63-6) follows the PDF. The author's notes.md was not used. pdftotext/OCR of the scan is useless; everything below was checked against the page images.

Every `<Formula>` was compared with its cited page: same physics, same notation (ε₀ as `\varepsilon_0`, the notes' r for the image distance renamed b and said so, the notes' n̂·n̂′ written cos θ and said so). Citations are all on the right printed page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The uniqueness theorem: a licence to guess", sentence after the recipe: "Condition (b) is only a quick way to find the numbers; the guess still has to satisfy (a) everywhere on the conductor." | p. 63-4 lists (a), "or b. At at least two convenient points", "or c." as alternatives, with no caveat. | Adds the caveat directly before "This, the notes conclude, is the method of images", so it reads as if from the notes. | The caveat is correct physics (two points fix the unknowns but do not prove the surface is equipotential; e.g. for the sphere, two angles give the two equations, but only the check at all θ makes it a solution). Mark it as ours: "(This caveat is ours; the notes list (b) as an alternative.)" |
| 2 | warning | Uniqueness paragraph: theorem stated for given V on the boundary "or, for conductors, with the given total charge on each"; proof and the link to "what the Lecture 4 notes promised" | p. 63-4 states no theorem and gives no proof. LN4 p. 4 promised that given charges on the conductors fix the charge distribution. | Proof covers only the case U = 0 on the boundary (Dirichlet), then says "This is what the Lecture 4 notes promised", which is the given-charge case. Also silent on the boundary at infinity. | One sentence: "For conductors with given charges, U is constant on each conductor and ∮∇U·da over it is zero (same charge), so the surface term vanishes again; at infinity U falls off fast enough." Then the LN4 link is earned. |
| 3 | info | Formulas "Induced surface charge" (`at="p. 59"`) and "Force on the charge" (`at="p. 59"`) | p. 59 gives only σ = −ε₀∂V/∂z\|₀ and F = QE (excluding Q's own field). | Both results are the page's own steps, cited to p. 59. | Acceptable: the text says so each time ("The notes stop at the derivative", "the value is this page's step"). Optionally `at="p. 59 (worked out here)"`. |
| 4 | info | "Total induced charge": Gauss's-law argument with the hemisphere and the lid in the metal | p. 59: "= −Q (Known by Gauss's law)", no argument. | Gives the argument. | Correct (dipole field 1/r³, flux through the hemisphere → 0; no field in the metal). Fine as an elaboration; could say "one way to see it". |
| 5 | info | Grounded sphere, root b = R discarded | Notes go straight from the two conditions to the boxed solution. | Factorises (b − R)(b − a²/R) = 0 and explains why b = R, q = −Q is rejected. | Correct, and visibly the page's step. No change. |
| 6 | info | Two planes, bracket "(A similar construction works whenever the angle ... is 180° divided by a whole number; that general rule is not in the notes.)" | Not in notes. | Labelled as not in the notes. | Correct. No change. |
| 7 | info | leadsTo 8.07 Lecture 6 `why`: "... where Laplace's equation leads to spherical harmonics" | LN6 (pp. 1 and 7 seen): separation R(r)F(θ,φ), eigenfunctions F_ℓ(n̂) = C^(ℓ)_{i1…iℓ} n̂_{i1}…n̂_{iℓ} of ∇²_θ with eigenvalue −ℓ(ℓ+1). | "spherical harmonics". | Physically right (these are the spherical harmonics in tensor form). Uncertain whether LN6 uses the name; I read only two of its pages. |
| 8 | info | Intro: "promises to come back to the question of whether there are others" | p. 58: "Are there other examples - sure! (we'll get back to that)". | Drops the "sure!". | Fine; the answer "Yes" is given in "Other image problems". |

## Arithmetic and answer checks
Recomputed independently (ε₀ = 8.8541878128 × 10⁻¹² F/m, 1/(4πε₀) = 8.98755 × 10⁹):
- σ: −ε₀∂V/∂z at z = 0: each term gives Qd/[4πε₀(s² + d²)^(3/2)], so σ = −Qd/[2π(s² + d²)^(3/2)] ✓; peak −Q/(2πd²) ✓; 2π∫₀^∞ σ s ds = −Q ✓.
- Plot caption: charge within s is −Q[1 − d/√(s² + d²)]; at s = d, 1 − 1/√2 = 0.293 → "about 29%" ✓; at s = √3 d exactly ½ ✓. Plotted curve −1/(1 + x²)^(3/2) is σ·2πd²/Q ✓.
- Force Q²/[4πε₀(2d)²] ✓. Energy ½·Q·(−Q/(4πε₀·2d)) = −Q²/(8πε₀)·1/(2d) = −Q²/(16πε₀d), matches p. 60 ✓; pair value −Q²/(4πε₀·2d) is twice it ✓; −∫_d^∞ Q²dz/[4πε₀(2z)²] = −Q²/(16πε₀d) ✓. The "only one charge moves" argument is p. 60's and correct: in the symmetric pair process the force on each charge at height z equals the force on Q in the conductor problem, and both charges move.
- Corner: Q (h, d), −Q (−h, d), +Q (−h, −d), −Q (h, −d) exactly as the p. 61 drawing; V = 0 on x = 0 and y = 0 ✓.
- Sphere: conditions of p. 62 ✓; q = −aQ/R, b = a²/R (p. 63, boxed) ✓; the notes indeed omit 1/(4πε₀) in V(P) and call the image distance r (checked on the p. 62 image), as the page says. Distance ratio a/R at every θ ✓. Total induced charge on the sphere = q ✓.
- Worked example (a = 5.0 cm, Q = 10 nC, R = 20 cm): q = −2.5 nC, b = 1.25 cm ✓; near point 599.17 V / −599.17 V ✓; far point 359.50 V / −359.50 V ✓ ("±360 V"); R − b = 18.75 cm, F = 6.391 × 10⁻⁶ N ✓; W = −5.992 × 10⁻⁷ J ✓, equal to −Q²a/[8πε₀(R² − a²)] ✓ and to −∫_R^∞ of the attraction kQ²a t/(t² − a²)² ✓. ½QV_image is the right energy for a grounded sphere (the induced charge sits at V = 0). Numbers and situation are original (the notes quote no numbers).
- Uniqueness proof: ∇·(U∇U) = |∇U|² + U∇²U, so ∫|∇U|² = ∮U∇U·da − ∫U∇²U ✓ (but see finding 2 for scope).
- Quiz 1: answer 1 (−Q at depth d) ✓. Quiz 2: −Q²/(16πε₀d) with 5.0 nC, 3.0 cm = −1.872 µJ → answer 3 ✓; distractors −3.745 (pair), −0.936 (half again), −7.490 µJ (no factors of 2) ✓; the explanation of the pair distractor is right. Quiz 3: answer 0 ✓. Quiz 4: answer 2 ✓, explanation correct.
- Flashcards: all four correct.
- calcs/8.07/method-of-images-uniqueness.yaml: every number and formula on the page has an entry; `npm run calc:test -- -k images`: 35 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- Order follows the notes: plane problem (p. 58) → V, E, σ, Q_induced, force (p. 59) → energy and "why half" (p. 60) → right-angle corner (p. 61) → grounded sphere (pp. 62-63) → other image problems (p. 63) → uniqueness as licence to guess and recipe (p. 63-4).
- Nothing in pp. 58-63-4 is left out. Additions (σ worked out, force value, Gauss argument, root b = R, direct-integration check, 180°/n rule, uniqueness proof, worked example, plot) are all marked as the page's or clearly the page's steps, except the caveat on (b) (finding 1).
- Recipe wording matches p. 63-4: 1 given/assumed q (use symmetry); 2 trial induced charge q′ at r′ (symmetry); 3 compute the field, then (a) V constant on each conductor, or (b) at least two convenient points, or (c) total E ⊥ to the conductors.

## Licensing
- No "rights reserved" or "Courtesy of" notice in LN5 (only the OCW citation page).
- No MIT figure reproduced: the notes' drawings (plane, mirror pair, corner, sphere, equipotential S) are described in words; the only graphic is a generated `<Plot>` of the page's own σ formula.
- No copied paragraphs. Quoted fragments are short: "Works!" (p. 61), "our license to guess" (p. 63-4, the notes spell it "lisense"; the page quotes it as "license" while its heading uses "licence": fine).

## Notes
- Prerequisites exist (three 8.07 pages, 8.02 conductors-and-capacitors) and fit.
- Symbol meanings scoped to this page in data/symbols.json were read: Q, q, q′, b ("the notes call it r"), R, a, d (height, and distance from y = 0 in the corner problem: matches Q at (h, d)), h (distance from x = 0 ✓), s, U, V₁, V₂, Q₁–Q₄, V₀, Q_induced, V_image, r⃗_d, δ, x, y, z, F, E_z are all correct for their use. Minor: `x` and `d` carry no unit while `y` and `z` have m (x and d double as the d of d³x); harmless.
- The intro's description of the source (pp. 58-65 plus 63-4 to 63-6 in a second hand; this page 58 to 63-4) is accurate (p. 63-5 image checked).

## Resolution (2026-11-18, by the page author)

- Finding 1: the caveat on recipe step (b) is now marked as the page's own: "(The notes list (b) as an alternative. This caveat is ours: two points only fix the unknowns, and the guess still has to satisfy (a) everywhere on the conductor, as the check at every angle did for the sphere.)"
- Finding 2: the uniqueness proof now covers the given-charges case in one more sentence (U constant on each conductor, zero flux of ∇U through it since both solutions put the same charge on it, U falling off at infinity), so the link to the Lecture 4 promise is supported.
- Finding 7: kept "spherical harmonics" in the leadsTo; the other review found that LN6 p. 2 names them ("describing spherical harmonics in terms of traceless symmetric tensors").
- Findings 3–6, 8: no change (already marked as the page's steps, or fine as they are).
- Status set to `reviewed`.
