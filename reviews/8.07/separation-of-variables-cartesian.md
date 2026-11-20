---
page: content/year-4/8.07/separation-of-variables-cartesian.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln5/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/9070df94553ec5622e72c42641250199_MIT8_07F12_ln5.pdf (read, local copy; handwritten, no text layer: page images of PDF pp. 7-12 viewed = printed pp. 63-4, 64, 65, 63-5, 63-6 and the OCW citation page; p. 63-5 also re-rendered at 250 dpi to read the F term and the sonic table)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bbca948b5d2aea654d6f376327a9fab0_MIT8_07F12_ln6.pdf (read in part, local copy; printed pp. 1, 2, 4, 7 viewed, for the leadsTo)
  - Griffiths, Introduction to Electrodynamics, 3rd ed., Example 3.5 (could not read; no copy available to the reviewer. The formulas were checked by derivation, not against the book's text)
verdict: pass-with-notes
---

# Review: Separation of variables in Cartesian coordinates

The page covers the second half of Lecture Notes 5: printed pp. 64 and 65 (Guth's hand) and pp. 63-5 and 63-6 (a second hand). In the scanned PDF the order is p. 63-4 (PDF p. 7), 64 (p. 8), 65 (p. 9), 63-5 (p. 10), 63-6 (p. 11), then the OCW citation page. The page follows that order. That is also the sensible reading order: p. 63-5 opens with "How do we know Sep. of Variables will work?", which assumes the method has already been introduced on pp. 64-65. I checked every `<Formula>` against the page images. The author's notes.md was not used. The PDF has no "rights reserved" or "Courtesy of" notice. The notes' pipe sketch (p. 65) is not reproduced, and the page's only figure is a generated `<Plot>`.

Formula check:
- "Laplace's equation in Cartesian coordinates" (p. 64): matches.
- "A product of three functions" (p. 64): matches.
- "After substituting" (p. 64): matches.
- "After dividing by XYZ" (p. 64): matches. The notes put braces C₁, C₂, C₃ under the terms.
- "The separation constants" C₁ + C₂ + C₃ = 0 (p. 65): matches.
- "The equation for X" (p. 65): matches.
- The three cases (p. 65): C₁ ≡ α² > 0 gives e^{±αx} or sinh, cosh. C₁ ≡ −α² < 0 gives e^{±iαx} or sin, cos. C₁ = 0 gives A + Bx. All match.
- "A second-order linear equation" (p. 63-5): the notes write A V_xx + B V_xy + C V_yy (+ D V_x + E V_y + F) = 0, with "= 0" written over F. Matches apart from the bracketed remark in finding 1.
- "The discriminant" Δ = B² − 4AC (p. 63-5): matches. The table in the notes reads "> 0 Hyperbola, e.g. Wave Eqs.", "= 0 Parabola, e.g. Heat transport", "< 0 Ellipics, e.g. ∇²V = 0, EM, Elastic Mechanics, Potential Th, Thermo Mech, Fluid". The page's three bullets follow it.
- "Two kinds of boundary condition" (p. 63-6): (i) V(x⃗) = h(x⃗), (ii) ∇V·n̂ = k(x⃗), (iii) "Mixed of the above". The page writes r⃗ for x⃗ and says so.
- Separation works if (p. 63-6): "(1) Linear, containing no mixed term, e.g. sin(xy)" and "(2) B.C. is separable in a coordinate system! This decides which coordinates one must use!". The page follows this.

The two pipe formulas cite `griffiths`, "Example 3.5". The notes give only "Example (3.5 in Griffiths, pp 134-136)" and a sketch with V = V₀(y, z) on the end, V = 0 on the walls, height a in y and width b in z. The page's geometry matches the sketch. Citing the textbook for formulas that the notes do not write is appropriate, and the `references` entry gives the location the notes give (pp. 134-136). `lib/schema.ts` makes `url` optional for references.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Two questions", the sentence after "A second-order linear equation" | p. 63-5: "(+ D V_x + E V_y + F) = 0", with "= 0" written over F. So the extra terms are two first-derivative terms and a constant F that is set to zero. There is no term in V itself. | "the dots stand for terms with first derivatives of V and with V itself (the notes write them out with three more coefficients; a constant term is set to zero …)". This is half right: the three coefficients and the zero constant match the notes, but the notes have no "V itself" term. | Write "terms with first derivatives of V (the notes write D V_x + E V_y + F, with the constant F set to zero, as the equation is homogeneous; a term in V itself may be added and does not change the class)". |
| 2 | warning | "Two questions", Cherenkov paragraph: "At v = c it vanishes (the sonic boom)" | The notes' table (garbled) labels the v = c row "Sonic boom", the v < c row "Sub-sonic" and the v > c row "Super sonic". | Follows the notes' label. | Physically, the boom that people hear comes from the cone of a source moving faster than sound (v > c). At v = c the equation changes type (the "sound barrier"). Suggest: "At v = c it vanishes (the notes call this the sonic boom; the boom heard on the ground is the cone formed above that speed), and above it …". |
| 3 | info | Same paragraph: "The exception the notes give" | "Only exception is sonic or Cherenkov Radiation" | "The exception the notes give" | Fine. Optionally "the only exception the notes give". The page's description (a factor 1 − v²/c² in front of the derivative along the motion, elliptic below c, hyperbolic above) is correct physics (the Prandtl-Glauert form). It agrees with the factor 1 − v²/c² in the notes' equation ψ_θθ + v²/(1 − v²/c²) ψ_vv + v ψ_v = 0, and the page says it is its own statement. Fair. |
| 4 | info | Elliptic bullet: "heat flow in equilibrium" | "Thermo Mech" | "heat flow in equilibrium" | This is an interpretation, and a reasonable one (steady heat flow obeys Laplace's equation). Acceptable. |
| 5 | info | "Which boundary conditions": "its normal derivative (that is, the normal component of the field …)" | (ii) ∇V·n̂ = k(x⃗), with no comment. | Calls it the normal component of the field. | ∇V·n̂ = −E·n̂. Optionally add "(up to sign)". |
| 6 | info | Separability condition 1: "such as a coefficient sin(xy) (or a mixed derivative)" | "no mixed term, e.g. sin(xy)" | Adds "or a mixed derivative". | This is not in the notes. It is true in the given coordinates, but a constant-coefficient mixed derivative can be removed by rotating the axes. Acceptable as is. Could be marked as the page's gloss. |
| 7 | info | Intro and the separation paragraph: "pages in a second hand" | pp. 63-5 and 63-6 are visibly in a different hand from pp. 64-65. | As stated. | Correct. No change. |
| 8 | info | leadsTo 8.07 Lecture 6 | LN6 ("8.07 Lecture 11, October 1, 2012"): p. 1 writes the Laplacian in r, θ, φ and separates φ = R(r)F(θ, φ). p. 2 says "I will be describing spherical harmonics in terms of traceless symmetric tensors". p. 7 has the boxed ∇²_θ F_ℓ = −ℓ(ℓ+1)F_ℓ and "We have found the eigenfunctions … and eigenvalues". | "the angular part becomes an eigenvalue problem whose solutions are the spherical harmonics" | Supported. No change. |
| 9 | info | Plot | (page's own) | The dashed first term is 67.4 V at x = 0.25 cm, above the y-range of 60. It leaves the frame for x below about 0.31 cm. | Probably clipped harmlessly. Raise `range` to [0, 70] or start the domain at 0.32 if the plot does not clip cleanly. |
| 10 | info | Frontmatter `summary` | n/a | Five sentences. | The guide asks for one sentence. Optional shortening. |

## Arithmetic and answer checks
Recomputed independently in Python (scratch script). The 16-term sum was compared with a reference sum over all odd n, m up to 399.
- Separation: each pipe mode gives C₁ = π²((n/a)² + (m/b)²) = −C₂ − C₃ > 0 ✓. A sine is the only choice that vanishes at y = 0 and y = a ✓. Only the decaying exponential is kept ✓.
- Coefficients: c_nm = (4/ab)∫∫V₀ sin sin ✓ (orthogonality integral a/2 · b/2). For constant V₀: (4V₀/ab)(2a/nπ)(2b/mπ) = 16V₀/(π²nm) for odd n, m, and 0 otherwise ✓. This is Griffiths' standard result as far as I recall; I did not check it against the book.
- Worked example (a = 2.0 cm, b = 1.0 cm, V₀ = 100 V, axis y = 1, z = 0.5):
  - c₁₁ = 162.11 V ✓.
  - α₁₁ = π√1.25 = 3.5124 /cm ✓.
  - First term at x = 1 cm: 4.835 V, "4.84" ✓.
  - (3,1) term: −0.1875 V, "−0.19" ✓. (1,3) term: −0.00383 V, "−0.004" ✓. The signs come from sin(nπ/2)sin(mπ/2) ✓.
  - Sum at 1 cm: 4.6508 V (16 terms) against 4.6508 V (reference), "4.65" ✓.
  - Decay length 1/α₁₁ = 0.2847 cm, "0.285" ✓.
  - V at 2 cm: 0.1436 V, "0.14" ✓.
- Plot: the series expression has 16 terms. The signs and denominators of all 16 were checked against sin(nπ/2)sin(mπ/2)/(nm), and the expression evaluates to 4.65077 at x = 1 ✓.
  - Truncation error: 0.58% at x = 0.25 cm, 0.04% at x = 0.5 cm, and smaller further out. "less than 1% from x = 0.25 cm on" ✓.
  - First term over series at x = 1: +3.96%, "about 4%" ✓, and smaller beyond ✓.
- Calcs file `calcs/8.07/separation-of-variables-cartesian.yaml`: 24 entries. `npm run calc:test -- -k separation-of-variables-cartesian` gave 24 passed. I checked these entries by hand against the numbers above: ex-first-coefficient, ex-first-term, ex-term-31, ex-term-13, ex-sum (9 terms, matches to 1e-5 V), ex-decay-length, ex-at-2cm, quiz-decay-length, quiz-a-over-pi (0.6366), quiz-b-over-pi (0.3183), quiz-half (0.1424) and pipe-coefficients-constant. All agree. plot-truncation has expected 0.5 with tolerance 0.5, so it passes for anything from 0 to 1%. That matches the claim "less than 1%" (actual 0.58%).
- Quiz:
  - Q1, answer 2 ✓.
  - Q2: A = 4, B = 4, C = 1 gives 16 − 16 = 0, parabolic, answer 0 ✓. The explanation is right that a mixed derivative is allowed.
  - Q3: answer 3 (0.285 cm) ✓. The distractors a/π = 0.637 and b/π = 0.318 are explained correctly, and 0.142 is half the answer.
  - Q4: answer 1 ✓ (p. 63-6, "This decides which coordinates one must use").
- Flashcards: all four correct and consistent with pp. 64-65 and 63-5/63-6.

## Coverage and order
- Every item on pp. 64, 65, 63-5 and 63-6 is on the page, in the PDF's order: the product trial, the remark about sums, the substitution, the division by XYZ, the constants, the three cases, the Griffiths example, the classification, the "usually do not mix" remark, the sonic/Cherenkov exception, the three boundary-condition types and the two separability conditions.
- Additions, all marked or harmless:
  - the sign argument that the three constants cannot all have the same sign, with the link to no interior extremum;
  - the worked solution of the pipe, which the notes only cite;
  - the page's own numerical example and plot;
  - the Dirichlet and Neumann names, which the page says are not in the notes;
  - the pointer to Lecture Notes 12 (Min Chen, reversed Cherenkov radiation; course file title confirmed).
- The garbled sonic table (Δ "> 1" / "= 1" / "< 0" against v < c, =, > c is not self-consistent) is described in words rather than copied, and the page says so. This is fair, given finding 2.
- Prerequisites all exist: method-of-images-uniqueness, standing-waves-fourier-series (8.03), fourier-series-introduction (18.03), partial-derivatives (18.02). The inline links /courses/8-07/…, /courses/8-03/…, /courses/18-03/… and /courses/18-02/diffusion-equation point to existing slugs. The course slug "8-07" is confirmed in `_course.json`.

## Licensing
- The MIT notes carry no "All rights reserved" or "Courtesy of" notice on the pages used. No MIT figure is redrawn: the pipe is described in words, and the graph is generated from the series.
- No text is copied from the notes beyond short standard phrases ("Try a solution of the form", "each term must be a constant", "This decides which coordinates one must use", which the page rewords as "The second condition decides which coordinates one must use"). Acceptable.
- Griffiths (copyrighted): the page reproduces no figure and, as far as I can judge, no running text. The problem statement is a paraphrase of the setup, and the solution steps are the standard derivation in the page's own sentences. Uncertain: I could not compare against the book's text. The two formulas cited to it are standard results and properly attributed. No OpenStax or LibreTexts material.

## Notes
- Symbol meanings scoped to this page in `data/symbols.json` (35 entries reviewed): α, Δ, a, b, x, y, z, c, v, k, h, r, d, i, e, n, m, n′, m′, A, B, C, X, Y, Z, X″, Y″, Z″, C₁, C₂, C₃, V₀, c_nm, n̂, V.
  - All fit the page, and the units are sensible (α and C_i in 1/m and 1/m², h in V, k in V/m).
  - V ("The electric potential") is also used on this page as the generic unknown of the classification equation. Minor; a "(or, in the classification, any unknown function)" would be more exact.
  - c (wave speed) and c_nm are separate entries, so there is no clash.
- No em dashes on the page.
- Verdict pass-with-notes: no errors found. Findings 1 and 2 are wording fixes. Every number, quiz answer and calcs entry checks out.

## Resolution (2026-11-18, by the page author)

- Finding 1: the lower-order terms now read "terms with first derivatives of V: the notes write them out with two more coefficients, plus a constant term that is set to zero, since the equation is homogeneous. (A term in V itself could be added without changing the class.)"
- Finding 2: "At v = c it vanishes and the equation changes type (the notes label this case "sonic boom"; the boom heard on the ground comes from the cone formed above that speed)".
- Finding 5: "(that is, up to sign, the normal component of the field …)".
- Finding 6: the mixed derivative is marked as the page's gloss ("or, our gloss, a mixed derivative").
- Finding 9: the plot's y-range is now [0, 70], so the dashed first term (67.4 V at x = 0.25 cm) stays inside the frame.
- Finding 10: the frontmatter summary is now one sentence.
- Findings 3, 4, 7, 8: no change. Symbol note on V (generic unknown in the classification): left as "The electric potential", since the page's classification is introduced for the potential.
- Status set to `reviewed`.
