---
page: content/year-4/8.07/traceless-tensors-legendre-polynomials.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln9/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/0ccc978da12536a8d95333ec7726c555_MIT8_07F12_ln9.pdf (read, local copy: text layer of pp. 1-12; equations checked against the page images of printed pp. 2, 5, 8 and 10, the rest from the text layer, which is readable for them)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read in part, local page images pp. 1-3, for the leadsTo claim)
  - content/year-4/8.07/separation-of-variables-spherical.mdx, content/year-4/8.07/spherical-harmonics-from-traceless-tensors.mdx (read in part, for consistency of the recap and the normalization claim)
verdict: needs-changes
---

# Review: Traceless symmetric tensors: the general solution and the Legendre polynomials

The page covers Sections 1-6 of Lecture Notes 9 (typed, Guth, 17 October 2012, a Wednesday as the page says; printed pp. 1-11), eqs. (9.1)-(9.45). Section 7 (p. 11 on) is left to `multipole-expansion-traceless-tensors`, as stated. The author's notes.md was not used.

Formula by formula (equation, printed page, verdict):
- p. 1: (9.1), (9.2). Match (curly phi of the notes written V, as the page says).
- p. 2: (9.3) (checked on the image: (1/r²)∂_r(r²∂_rφ) = (1/r)∂²_r(rφ)), (9.4), (9.5), (9.6), (9.7); (9.8) and (9.9) in prose/formula. Match.
- p. 3: (9.10), (9.11), (9.12). Match. (9.13) on p. 3, (9.14)-(9.18) on p. 4: combined into one formula cited "eqs. (9.13)-(9.18)"; correct content.
- p. 4: (9.19); (9.20)-(9.21) in prose with the Griffiths remark (notes cite Griffiths eq. (1.19)). Match.
- p. 5: (9.22), (9.25) (image: identical chain of steps, index m), (9.23)-(9.24) and (9.26) in prose. Match.
- p. 6: (9.27), the unnumbered derivation (radial part r^(ℓ-2) ℓ(ℓ+1)F_ℓ, recomputed), (9.28), (9.29), (9.30); the "This is a very useful result!" quote is verbatim and short. Match.
- p. 7: (9.31), (9.32), the 2ℓ + 1 remark. Match.
- p. 8: (9.33), (9.34), (9.35) (image: ½(ℓ+1)(ℓ+2) - ½(ℓ-1)ℓ = 2ℓ + 1). Match; the balls-in-hats example S⁽⁹⁾₁₁₁₂₂₃₃₃₃ (3 + 2 + 4 = 9) matches.
- p. 9: ẑᵢ = δᵢ₃, (9.36)-(9.38), the bracketed remark on ẑ versus ê_z. Match.
- p. 10: (9.39), (9.40), (9.41) (term order δ_km, δ_mj, δ_jk, δ_im, δ_ik, δ_ij as printed), (9.42), (9.43). Match (image).
- p. 11: orthogonality ∫ z*_m′ z_m dφ = 2π δ_m′m (page writes e^(-im′φ)e^(imφ), same thing), (9.44), (9.45). Match.

All `at=` locations and "(notes p. N)" references in the prose are correct.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Each term is an eigenfunction", paragraph before eq. (9.27) | p. 6: after the derivatives (the two of the Laplacian) are taken, ℓ - 2 factors of xᵢ remain while C⁽ℓ⁾ still has ℓ indices | "In general, ℓ derivatives of the product of x's use up two factors, so ℓ - 2 factors of x remain" | The Laplacian takes two derivatives, not ℓ. Write e.g. "In general, the two derivatives of the Laplacian use up two factors of x, so ℓ - 2 remain …". |
| 2 | info | Summary, "Azimuthal symmetry" bullet | Coefficients -1/3, -1/5, -1/7 and +1/35 (eqs. (9.37), (9.39), (9.43)) | "(1/3; 1/5; 1/7 and 1/35 at rank 4)" without signs | Optional: give the signs, or say "of sizes", since 1/35 is added and the others subtracted. |
| 3 | info | Intro and Section "Laplace's equation…" | The notes have small typos ("indendent", "symmetry tensors", F(θ, φ) printed with a curly phi in (9.4), C₍₀₎ in (9.23)) | Not mentioned | None needed: the page reproduces none of them and attributes no slips to the notes. (The brief asked whether slips attributed to the notes are real: the page attributes none, and none of its statements about the notes is wrong apart from #1, which is the page's own wording.) |

## Arithmetic and answer checks
- Rank-4 traceless part: built eq. (9.43) numerically with ẑ = (0, 0, 1) (NumPy): every trace (over i, j and over k, m) is zero to 6e-17, the tensor is symmetric in every index pair, so c₁ = -1/7 and c₂ = 1/35 are confirmed. The hand trace (1 + 7c₁)ẑₖẑ_m + (c₁ + 5c₂)δ_km is correct (c₁-bracket: δ_km + 4ẑₖẑ_m + 3ẑₖẑ_m; c₂-bracket: 3δ_km + δ_km + δ_km).
- Rank 3: trace of (9.39) zero numerically; contraction gives cos³θ - (3/5)cosθ (checked at θ = 0.7).
- Table (9.45): contracting (9.43) with n̂ gives cos⁴θ - (6/7)cos²θ + 3/35 (numerical at θ = 0.7, φ = 0.3: -0.0734944 both ways). Against standard Legendre polynomials: P₂ = (3/2)(cos²θ - 1/3), P₃ = (5/2)(cos³θ - (3/5)cosθ), P₄ = (35/8)(cos⁴θ - (6/7)cos²θ + 3/35). The page's normalization factor (2ℓ)!/(2^ℓ(ℓ!)²) gives 1, 1, 3/2, 5/2, 35/8 for ℓ = 0-4: correct.
- Counting: N_S(ℓ) = C(ℓ+2, 2) = 1, 3, 6, 10, 15, 21 for ℓ = 0-5; N_S(ℓ) - N_S(ℓ-2) = 2ℓ + 1 (also ℓ = 0, 1 with the polynomial form giving 0). Rank 4: 15 - 6 = 9. Correct.
- (9.3): both sides equal V'' + (2/r)V'. (9.30): roots ℓ and -(ℓ + 1). Radial part of the unnumbered p. 6 step: (1/r²)d/dr(r² ℓ r^(ℓ-1)) = ℓ(ℓ+1)r^(ℓ-2). Correct.
- Worked example (a = 5 cm, V₀ = 100 V, boundary V₀cos³θ): split cos³θ = (cos³θ - (3/5)cosθ) + (3/5)cosθ is correct; inside V₀[(3/5)(r/a)cosθ + (r/a)³(cos³θ - (3/5)cosθ)], outside V₀[(3/5)(a/r)²cosθ + (a/r)⁴(…)] both match the boundary and are the regular solutions.
  - Axis, r = 2.5 cm (inside, r/a = 1/2): 100(0.3 + 0.05) = 35 V. Correct.
  - Axis, r = 10 cm (outside, a/r = 1/2): 100(0.15 + 0.025) = 17.5 V. Correct.
  - r = 2.5 cm (inside), θ = 60°: 100[(3/5)(1/2)(1/2) + (1/8)(1/8 - 3/10)] = 15 - 2.1875 = 12.81 V ≈ 12.8 V. Correct; the point is inside the sphere, halfway to the surface, 60° from the axis, as the problem statement says.
  - Laplacian check ∇²[z³ - (3/5)z r²] = 6z - (3/5)(2z + 2z + 6z) = 0: correct.
  - Centre V = 0 (no ℓ = 0 part; mean of cos³θ over the sphere is 0). Correct. Far field dominated by the ℓ = 1 (1/r²) term: correct.
- Quiz 1 (answer index 1, "9"): correct; distractor explanations correct (15 = N_S(4), 6 = N_S(2), 10 = N_S(3)).
- Quiz 2 (index 2, -1/7): correct; -1/5 at rank 3, -1/3 at rank 2 correct.
- Quiz 3 (index 3, 0): correct; V₀/3 for cos²θ correct (mean of cos²θ = 1/3).
- Quiz 4 (index 0): correct and matches the notes' argument (p. 10-11).
- Flashcards: all four correct.
- Calcs file `calcs/8.07/traceless-tensors-legendre-polynomials.yaml`: 23 entries, all pass (`pytest tests/calc -k traceless-tensors-legendre`: 23 passed). Notes on it (info): `example-boundary` is a tautology (it adds and subtracts the same expression), so it does not actually test that the inside/outside forms reduce to cos³θ at r = a; `trace-rank4-c1` only restates -1/7; the cos³θ - (3/5)cosθ row of (9.45) and the normalization factor (2ℓ)!/(2^ℓ(ℓ!)²) have no entry. All of these were verified independently above, so nothing is wrong, but the boundary entry could evaluate the inside and outside formulas at rr = aa instead.
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

## Coverage and order
- Follows the notes' order: introduction (p. 1), Section 1 (Laplace's equation, separation), 2 (expansion of F, symmetric and traceless), 3 (∇²_θF_ℓ), 4 (general solution), 5 (counting), 6 (azimuthal symmetry, Legendre polynomials). Nothing omitted from Sections 1-6; (9.8), (9.20)-(9.21), (9.23)-(9.24), (9.26) and the unnumbered p. 6 derivation are given in prose rather than as Formulas, which is fine.
- Recap of Sections 1-4 is brief and consistent with the Lecture 6 page `separation-of-variables-spherical` (same notation V, R, F, C_θ, the λ/3 trace argument, the ∇²(C⁽²⁾ᵢⱼxᵢxⱼ) step, eigenvalue -ℓ(ℓ+1)); it adds the new details (9.3), the ℓ = 3 step and (9.32) without repeating Lecture 6 at length.
- Added: the worked example (original; the notes have none) and the remark on normalization linking to the Lecture 8 page (correct: that page's normalization gives P_ℓ).
- Section 7 is not covered here, by design (next page).

## Licensing
- `grep -i "rights reserved\|courtesy"` on the notes text: no matches. The notes have no figures; the page has none either.
- No copied paragraphs. Short quotes ("This is a very useful result!") and standard terms only; the balls-in-hats argument is rewritten in the page's own words.
- Jackson (3rd ed., Sections 3.1, 3.2, 3.5, 3.6) and Griffiths are mentioned only as the notes cite them, with no content taken from them. No OpenStax or LibreTexts material.

## Notes
- Prerequisites `separation-of-variables-spherical` and `spherical-harmonics-from-traceless-tensors` exist and are the right ones. The statement that Lecture Notes 8 logically come after these notes is Guth's (p. 1).
- leadsTo (8.07 Lecture 10): checked against the handwritten Lecture Notes 10 pp. 1-3. They recall the expansion of 1/|r - r′| with the traceless symmetric parts "(Posted as Lecture Notes 9)", write A_j as Σ_ℓ M⁽ℓ⁾_(j;i₁…i_ℓ){r̂ᵢ₁…r̂ᵢ_ℓ}/r^(ℓ+1), and use ∂ᵢJᵢ = 0 to get ∫d³x Jᵢ = 0 (the ℓ = 0, monopole term vanishes). The claim is correct.
- No cosmology callout; none is needed for this mathematical page.
- Symbols (meanings that include this page in `data/symbols.json`, working copy): checked all; each fits its use on the page. New or newly worded ones (S, N_S, N_C, S_ij, S_ji, S_i, S_(i₁…i_(ℓ-2)jj), C_iik, F̃₂, j₁/j₂/j_ℓ, C_(i₁i₂…i_ℓ), C_(j₁j₂…j_ℓ), c₀, c₁, c₂, c_ℓ, V₀ ("the potential at the north pole … 100 V", correct since cos 0 = 1), P_ℓ, m′, δ_m′m, ∇²_θ,φ, n̂_m, x_m, x_(i₂), n̂_(i₂), d, i, z) are accurate. Minor (info): `x_m` carries unit m while `x_k` on the same page has none; `n_i` says "n⃗ (n_x, n_y or n_z)" while this page writes n̂ᵢ (shared meaning, harmless). c₁ and c₂ correctly carry both of their page meanings (rank-4 coefficients and expansion constants), which the page itself flags as unrelated.
- No em dashes in the page.

## Resolution (2026-11-18, by the page author)

- #1 (error): fixed. The paragraph before eq. (9.27) now says "the two derivatives of the Laplacian use up two factors of x, so ℓ − 2 factors of x remain".
- #2: fixed. The Summary gives the coefficients with their signs: −1/3 at rank 2, −1/5 at rank 3, −1/7 and +1/35 at rank 4.
- #3: nothing to change.
- Calcs: `example-boundary` (a tautology) is replaced by `example-boundary-inside` and `example-boundary-outside`, which evaluate the two solutions at r = a. Added `legendre-table-l3` (the cos³θ − (3/5)cosθ row of eq. (9.45)) and `normalization-l3`/`normalization-l4` (the factor (2ℓ)!/(2^ℓ(ℓ!)²) times the rows gives P₃ and P₄). `trace-rank4-c1` is kept as it is; `trace-rank4-full` checks the derivation.
- Symbols (info notes): left unchanged; the shared meanings are harmless, as the review says.
- Status set to `reviewed`.
