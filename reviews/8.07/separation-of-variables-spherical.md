---
page: content/year-4/8.07/separation-of-variables-spherical.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln6/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bbca948b5d2aea654d6f376327a9fab0_MIT8_07F12_ln6.pdf (read, local copy; handwritten, no text layer: page images of all 8 PDF pages viewed = circled pp. 1-7 plus the OCW citation page)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/0ccc978da12536a8d95333ec7726c555_MIT8_07F12_ln9.pdf (read in part, local copy via pdftotext: Sections 2-4, eqs. (9.8)-(9.32), pp. 2-7; printed page numbers checked per PDF page)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/eef19192166dac3b7be7448cbef765d6_MIT8_07F12_ln7.pdf (read in part, local copy: opening problem statement and eqs. (7.1)-(7.4), for the leadsTo)
  - content/year-5/8.902/cmb-anisotropies.mdx (read in part, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: Separation of variables in spherical coordinates

The page covers all of Lecture Notes 6 (Guth's handwritten notes for Lecture 11, 1 October 2012, circled pp. 1-7; PDF p. 8 is the OCW citation page). I read every page image directly; the author's notes.md was not used. Every `<Formula>` citing `reading1` was compared with the image of the cited page:

- p. 1: spherical Laplacian (notes use curly φ for the potential), V = R(r)F(θ, φ), 0 = (r²/RF)∇²V = (1/R)(d/dr)(r² dR/dr) + (1/F)∇²_θF with braces −C_θ and C_θ, the definition of ∇²_θ, and the remark "∇²_θ could be called ∇²_{θ,φ}, but that's too hard to write". All match.
- p. 2: ∇²_θF = C_θF; "Treatment to be used here": (1) more general than Griffiths, who considers only φ-independent solutions (azimuthal symmetry); (2) different from Jackson and other textbooks, spherical harmonics via traceless symmetric tensors, "I think this makes it easier to understand what the spherical harmonics are"; the Claim. The page's description of Griffiths and Jackson is fair; "whose answers are the Legendre polynomials" is the page's own (correct) addition.
- p. 3: F(n̂) series, summation 1 to 3, n̂ components, the Prelude (C^ℓ term → Y_ℓm, same ℓ), restrictions 1) symmetric (antisymmetric part does not contribute) and 2) traceless. Match. The page's ℓ = 1 example (C⃗·n̂) is its own.
- p. 4: C̃_ij = C_ij − λδ_ij/3, its trace, C_ij n̂_i n̂_j = C̃_ij n̂_i n̂_j + λ/3 "can add to C⁽⁰⁾", the general-ℓ statement C⁽ℓ⁾_{i₁…i_{ℓ−2}jj} = 0, and the vocabulary remark for C⁽⁰⁾, C⁽¹⁾. Match.
- p. 5: r n̂ ≡ r⃗ = x_i ê_i, F(r⃗) series, "calculate ∇²F(r⃗) first, and then infer ∇²_θF(n̂)", ∇²C⁽⁰⁾ = 0 "of course", ∇²C⁽¹⁾_i x_i = 0. Match.
- p. 6: ℓ = 2 and ℓ = 3 calculations, "Works in general: ∇²F(r⃗) = 0", the split Laplacian, "Look at ℓ'th term". Match (the page drops the first line ∂_k∂_k(x_i x_j) of the ℓ = 2 chain, which is harmless).
- p. 7: F_ℓ(r⃗) = r^ℓ F_ℓ(n̂), the Laplace equation for F_ℓ, the radial part ℓ(ℓ+1)r^{ℓ−2}, the boxed ∇²_θF_ℓ = −ℓ(ℓ+1)F_ℓ, and "We have found the eigenfunctions … and eigenvalues … of ∇²_θ!". Match.

All `at=` page numbers are correct. The `notes9` formula R_ℓ = A_ℓ r^ℓ + B_ℓ/r^{ℓ+1} is eq. (9.31) on printed p. 7 of Lecture Notes 9 (eqs. (9.29)-(9.30) are on p. 6, so the reference location "pp. 6-7" is right). No "rights reserved" or "Courtesy of" notice in LN6 or LN9.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Functions of direction as a power series", last paragraph: "(The claim itself is not proved in these notes; Lecture Notes 9 returns to it.)" | LN9 p. 2-3 restates the claim and says "I will not prove this, but it is true at least for square-integrable piece-wise continuous functions F(θ, φ)". | Reads as if LN9 supplies the proof. | "(The claim is not proved in these notes, nor in Lecture Notes 9, which adds only that it holds at least for square-integrable, piecewise continuous functions.)" |
| 2 | warning | "Every term is harmonic", sentence after the ℓ = 2 formula: "The two terms in the bracket give the same result because $C^{(2)}$ is symmetric" | Notes p. 6 go from ∂_k[δ_ik x_j + δ_jk x_i] straight to 2C_ij δ_ik δ_jk, using only tracelessness afterwards. | Attributes the factor 2 to symmetry. After the second derivative the two terms are δ_ik δ_jk and δ_jk δ_ik, identical for any C; symmetry is not needed (it would be needed only to equate the bracket terms before differentiating, C_kj x_j = C_ik x_i). | E.g. "After the second derivative the two terms in the bracket are the same, δ_ik δ_jk, and the last step is the traceless condition." |
| 3 | info | "Symmetric and traceless coefficients", last paragraph: "with a trace that is not zero moved down into the term with two fewer factors of n̂" | Notes p. 4 state only that C⁽ℓ⁾ "can be chosen traceless" for all ℓ, without saying where the trace goes. | Generalises the ℓ = 2 argument. The statement is correct (δ_ij n̂_i n̂_j = 1 lowers the degree by two). | Optional: mark it as the page's own generalisation ("in the same way"). |
| 4 | info | "The eigenvalues", last paragraph: "so the separation constant can only be $C_\theta = -\ell(\ell+1)$" | LN6 stops at "We have found the eigenfunctions … and eigenvalues"; the "only allowed values" statement is LN9 p. 6, and it rests on the unproved completeness claim. | States "only" as following from LN6. | Optional: "(Lecture Notes 9 adds that these are the only allowed values, given the claim above.)" |
| 5 | info | "The radial solutions": "The notes for Lecture 11 stop at the eigenvalues; Guth completes the separation in Lecture Notes 9" | LN7 (8 October 2012, eq. (7.2)) already writes R_ℓ(r) = A_ℓ r^ℓ + B_ℓ/r^{ℓ+1}, before LN9 (17 October) derives it. | Names only LN9. | Correct as is (LN9 is where the derivation p(p+1) = ℓ(ℓ+1) appears, and the section is clearly labelled as beyond LN6). No change needed; LN7 could be mentioned. |

## Arithmetic and answer checks
All recomputed by hand; `npm run calc:test -- -k separation-of-variables-spherical`: 21 passed.
- Boundary split: cos²θ = (cos²θ − 1/3) + 1/3, so V₀/3 = 20 V (ℓ = 0) and V₀(cos²θ − 1/3) (ℓ = 2). Correct.
- Direct eigenvalue check: sinθ d(cos²θ)/dθ = −2cosθ sin²θ; (1/sinθ) d/dθ of that = 2sin²θ − 4cos²θ = 2 − 6cos²θ = −6(cos²θ − 1/3). Correct; −6 = −2·3.
- Cartesian form: r²(cos²θ − 1/3) = z² − r²/3 = (2z² − x² − y²)/3; Laplacian 4 − 2 − 2 = 0. Correct.
- Inside at r = 5 cm (r²/a² = 1/4): axis 20 + 60·(1/4)·(2/3) = 30 V; equator 20 − 60·(1/4)·(1/3) = 15 V. Correct.
- Outside at r = 20 cm (a/r = 1/2, a³/r³ = 1/8): axis 10 + 60·(1/8)·(2/3) = 15 V; equator 10 − 60·(1/8)·(1/3) = 7.5 V. Correct.
- Q = 4πε₀ a V₀/3 = 4π·8.854×10⁻¹²·0.10·20 = 2.23×10⁻¹⁰ C ≈ 0.22 nC. Correct. "The ℓ = 2 part of the surface charge adds up to zero": correct (σ₂ ∝ P₂(cosθ) integrates to zero).
- Matching at r = a: both solutions give V₀cos²θ. Correct; uniqueness invoked properly (potential vanishing at infinity).
- Plot: inside 20 + 40(r/10)² and 20 − 20(r/10)² (60·2/3 = 40, 60/3 = 20); outside 200/r ± {40, 20}(10/r)³ with r in cm. Continuous at r = 10 cm (60 V and 0 V). Caption claims (r² growth, 1/r³ vs 1/r, common far-field limit) correct.
- Quiz 1: ℓ = 3 → −12, answer index 2. Correct; distractor explanations (−6 for ℓ = 2, −9 = −ℓ², −3 = −ℓ) correct.
- Quiz 2: answer index 0 (symmetric n̂_i n̂_j kills the antisymmetric part). Correct; the remark that the unit length is what allows trace removal is correct.
- Quiz 3: trace 9, λ/3 = 3, answer index 3. Correct.
- Quiz 4: inside only r^ℓ, answer index 1. Correct; r^{ℓ+1} gives (ℓ+1)(ℓ+2) ≠ ℓ(ℓ+1), so it is not a solution. Correct.
- Flashcards: all four correct and consistent with LN6/LN9.
- calcs file: every number on the page has an entry; ids and `shown` strings match the page text. Several page-own example entries cite `reading1` p. 7 or p. 1 as source, which is acceptable (the method, not the numbers).

## Coverage and order
- The page follows LN6 in order: Laplacian and separation (p. 1), eigenvalue problem and approach (p. 2), series and restrictions (pp. 3-4), the r⃗ trick (p. 5), harmonicity term by term (pp. 5-6), eigenvalues (p. 7). Nothing in LN6 is left out.
- Additions, each labelled: the radial solutions (cited to LN9 eq. (9.31), clearly said to be beyond the Lecture 11 notes), an original worked example, a plot, and the cosmology callout. The notation change (V for the notes' curly φ) is stated in the introduction.
- Prerequisites (separation-of-variables-cartesian, rotations-index-notation, spherical-coordinates) exist and fit. Links to 8.04 spherical-harmonics-radial-equation (which does build Y_lm from derivatives of Legendre polynomials) and angular-momentum-central-potentials, and to method-of-images-uniqueness, all resolve.
- leadsTo 8.07 Lecture 7: LN7 is "A Spherical Shell of Charge with a Circular Hole" (Jackson Problem 3.2), solved with Legendre polynomials inside and outside. Fair.

## Licensing
- LN6 and LN9 carry no "All rights reserved" or "Courtesy of" notice; only the standard OCW citation page.
- No figure from the notes is reproduced; the only graphic is a generated `<Plot>`.
- The text is a rewrite. Short quoted ideas ("too hard to write", "easier to understand what the spherical harmonics are") are paraphrased and attributed. The worked example (shell at V₀cos²θ) is a standard textbook-type problem, not taken from MIT's notes; it is original in its numbers and presentation.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: the CMB temperature T(n̂) is indeed expanded in Y_ℓm (as on 8.902 cmb-anisotropies, which is 8.902 Lecture 17); ℓ = 0 is the mean, ℓ = 1 the kinematic dipole along our motion relative to the CMB, ℓ = 2 the quadrupole, whose coefficient tensor is traceless symmetric 3×3 (five components, matching 2ℓ + 1 = 5). "In Guth's language" means "in Guth's notation"; the notes say nothing about the CMB, and the callout does not claim they do. Fair and honest. Small wording point: strictly it is the coefficient C⁽²⁾ that is the traceless symmetric tensor, not the term; optional.
- leadsTo 8.902 Lecture 17: correct target and fair reason.
- Symbols: `npm run content:check` reports 0 errors, the only warning being the missing review file (now written). The page-scoped meanings (C_θ, ∇_θ, λ as trace, ℓ as degree, F, F_ℓ, R, R_ℓ, A_ℓ, B_ℓ, p, f, T, V₀, C_i, C_ij, C_ijk, C_ii, the nested-subscript forms C_{i₁⋯i_ℓ}, C_{i₁⋯i_{ℓ−2}jj}, x_{i₁}, x_{i_ℓ}, n̂_{i₁}, n̂_{i_ℓ}, i₁, i_ℓ, i_{ℓ−2}, n̂₁-n̂₃, Y_ℓm) are accurate for this page. Minor inconsistencies, not errors: x_i/x_1-x_3 carry the unit m while x, y, z, x_k have none; the shared n_i/n_j meaning says "unit vector n⃗" while this page writes n̂.
- Uncertain: I did not open the OCW resource page online, only the PDF copies supplied; the PDF URLs in the frontmatter were not fetched.

## Resolution (2026-11-18, by the page author)

- 1 (warning): reworded. The claim is now said to be proved neither in Lecture Notes 6 nor in Lecture Notes 9, which only adds that it holds at least for square-integrable, piecewise continuous functions.
- 2 (warning): fixed. After the second derivative both bracket terms give δ_ik δ_jk for any C⁽²⁾; the page now says that tracelessness is the only property the notes use.
- 3 (info): the general-ℓ trace step is marked as our generalisation of the ℓ = 2 argument. The general pattern for ∇²F = 0 is marked as "the notes say; in our words".
- 4 (info): "can only be −ℓ(ℓ + 1)" is now attributed to Lecture Notes 9, p. 6, with a note that it rests on the completeness claim.
- 5 (info): the radial-solutions section now says R_ℓ is quoted in Lecture Notes 7 (eq. (7.2)) and derived in Lecture Notes 9.
- Notes: the callout now says the quadrupole has a traceless symmetric tensor as its coefficient. The unit inconsistencies in the x_i/x and n_i meanings are in shared symbol meanings used on other pages, so they were left as they are.
- Status set to reviewed. content:check, calc:test and build rerun.
