---
page: content/year-4/8.07/multipole-expansion-traceless-tensors.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln9/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/0ccc978da12536a8d95333ec7726c555_MIT8_07F12_ln9.pdf (read, local copy: every equation (9.46)-(9.74) read from the page images of printed pp. 11-16; the text layer used for the licence grep and the prose)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read in part, local scan: p. 2 only, for the leadsTo)
  - content/year-5/Ferreras/simulating-galaxy-formation.mdx (read in part, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: The multipole expansion with traceless symmetric tensors

The page covers Section 7 of Lecture Notes 9 (Guth, typed, 17 October 2012), printed pp. 11-16, eqs. (9.46)-(9.74). Every `<Formula>` was compared with the page image of the notes; the author's notes.md was not used. Numbers were recomputed independently with NumPy/SciPy (exact potential of the two charges, the Legendre series term by term to ℓ = 7, and a finite-difference check of (9.65) at ℓ = 3 for the components xyz, xxy and zzz, which agree with −15{n̂ᵢn̂ⱼn̂ₖ}/r⁴ to 10⁻⁷ relative).

Formula-by-formula (equation, printed page, verdict):
- p. 11: (9.46). Match, except that the notes call the potential Φ (see #4).
- p. 12: (9.47), (9.48), (9.49), (9.50), (9.51). Match.
- p. 13: (9.52), (9.53), (9.54), (9.55), (9.56), (9.57). Match.
- p. 14: (9.58), (9.59), (9.60) (page corrects two printed slips, see #1 and below), (9.61), (9.62) (described in words), (9.63), (9.64). Match.
- p. 15: (9.65), (9.66), both (9.67), (9.68), (9.69), (9.70). Match.
- p. 16: (9.71), (9.72), (9.73), (9.74) (page corrects a printed slip, see #2). Match.

All `at=` locations and every "(notes p. N)" reference in the prose are correct.

## Verification of the slips the page attributes to the notes
1. **Two equations numbered (9.67):** confirmed (p. 15; the second is boxed). The page's "(9.67), first" / "(9.67), second (boxed)" is correct.
2. **i_i for i_1 in (9.65):** confirmed; the curly bracket is printed {n̂_{i_i} … n̂_{i_ℓ}}.
3. **Indices in (9.60):** confirmed; the contracted derivatives are printed ∂x_i ∂x_i ∂x_{i+2} … ∂x_{i_ℓ}. (The notes also print ∂^ℓ instead of ∂^(ℓ−2) on the right-hand side of both lines; see #1 in the table.)
4. **d³x for d³x′ in (9.47) and (9.52):** confirmed in both.
5. **θ for θ′ in (9.51):** confirmed; the text after (9.48) says "θ is the angle between these vectors" and (9.51) ends with P_ℓ(cos θ), while (9.48) and (9.52) have θ′.
6. **(9.46) and 1/4πε₀:** the notes' (9.46) has no 1/4πε₀ (the B_ℓ, and so this constant, are absorbed into C⁽ℓ⁾), and (9.68) writes it separately with the same symbol C⁽ℓ⁾. The page does not call this a slip; it says "Compared with eq. (9.46), the 1/(4πε₀) is now written separately", which is accurate.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | eq. (9.60) and the bracket after it | Right-hand side printed as ∇² ∂^ℓ/∂x_{i+2}…∂x_{i_ℓ} (1/\|r\|) and ∂^ℓ/∂x_{i+2}…∂x_{i_ℓ} ∇²(1/\|r\|): the order of the remaining derivative is printed ℓ, should be ℓ − 2 | ∂^(ℓ−2) (correct), but the bracket mentions only the indices | Add to the bracket: "and the remaining derivative as ∂^ℓ instead of ∂^(ℓ−2)". |
| 2 | warning | eq. (9.74) | p_i = ∫ρ(r′) r_i d³x (no primes on r_i or on d³x) | p_i = ∫ρ(r′) x′_i d³x′ (correct) without saying the notes differ | Extend the existing bracket on (9.47)/(9.52) to "(9.47), (9.52) and (9.74)", and note r_i for r′_i in (9.74). |
| 3 | info | intro, "The notes write the components of r′ with the letter r" | Text on p. 13 and eq. (9.69) use r′_i; but (9.54)-(9.56) themselves use x′_i | Says the notes use the letter r | Optional: "mostly with the letter r (x′ᵢ in eqs. (9.54)-(9.56))". |
| 4 | info | eq. (9.46) | Φ(r) | V(r) | Optional: mention that the notes write Φ here. |
| 5 | info | eq. (9.62) | ∂_i ≡ ∂/x_i (the ∂ of the denominator missing) | Described in words, written out in full | Nothing needed. |
| 6 | warning | worked example, "The series" | (not in MIT) | Uses cos θ, P₂(cos θ) and "on the axis (cos θ = 1)" without saying that θ is the angle between n̂ and ẑ | Define θ once, e.g. "with θ the angle between n̂ and the z-axis". |

## Arithmetic and answer checks
- Worked example, all recomputed (k = 8.98755 × 10⁹ N m²/C²): q/(4πε₀d) = 898.755 V ✓; p = 3qd = 3 × 10⁻¹¹ C m ✓; C⁽²⁾ = (3/2)(2q − q)d²{ẑẑ} → qd²P₂(cos θ) ✓.
- On the axis: terms 89.876, 26.963, 0.899 V, sum 117.737 → 117.74 V ✓; exact 898.755 × 13/99 = 118.018 → 118.02 V ✓; miss 0.281 V → 0.28 V, 0.24% ✓; octupole Σqz³ = 3qd³ gives 0.270 V ✓ (the ℓ = 4 term, 0.009 V, makes up most of the rest).
- In the plane z = 0: 89.876 − 0.449 = 89.426 → 89.43 V ✓; exact 898.755/√101 = 89.430 → 89.43 V ✓; difference 0.0034 V, "about 0.003 V" ✓; octupole vanishes (P₃(0) = 0) ✓; next term ℓ = 4 is 0.0034 V, smaller than the quadrupole by 0.0075 = (3/4)(d/r)², "another factor (d/r)²" ✓ in order of magnitude.
- The two (9.67) forms and the remark comparing with (9.51): ((2ℓ−1)!!/ℓ!){n̂…}n̂′… = P_ℓ(n̂·n̂′) checked for ℓ = 2, 3 ✓.
- Remark on C⁽²⁾: (3/2)∫ρ(x′ᵢx′ⱼ − r′²δᵢⱼ/3) = ½∫ρ(3x′ᵢx′ⱼ − r′²δᵢⱼ), i.e. half of Jackson's Qᵢⱼ (Jackson eq. (4.9), Section 4.1) ✓; consistent with Jackson's ½Qᵢⱼxᵢxⱼ/r⁵ term. Correctly labelled "not in the notes".
- Plot: curves are the exact potential and the truncated series from the formulas; at r = 2 cm the exact value is 1497.9 V, inside the range [0, 1600] ✓; caption "within 0.3%" (0.24%) ✓ and "monopole alone still 24% low" (23.8%) ✓; the exact formula is valid for r > d = 1 cm and the domain starts at 2 cm ✓.
- Quiz 1: 1/r² (index 2) ✓. Quiz 2: 15/6 = 5/2 = 720/288 ✓; distractors 15 (no ℓ!), 3/2 (ℓ = 2), 5/16 = 720/48² ✓. Quiz 3: answer index 3 ✓, explanation correct. Quiz 4: answer index 1 ✓; "commuting derivatives give symmetry, not tracelessness" ✓.
- Flashcards: all four agree with (9.65)-(9.67), (9.68)-(9.69), (9.71)-(9.74) ✓.
- `calcs/8.07/multipole-expansion-traceless-tensors.yaml`: entries cover every number on the page; `npm run calc:test` passes (5820 passed). `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- The page follows Section 7 in order: setup and (9.46) → names of the terms → (9.47) → Griffiths' route (9.48)-(9.52) and why it is inconvenient → Taylor series (9.53)-(9.59) → tracelessness (9.60) → derivatives (9.61)-(9.66) → (9.67) both forms → (9.68)-(9.70) → monopole and dipole (9.71)-(9.74). Nothing omitted.
- Griffiths' route is described fairly and in the page's own words: the notes' point (cos θ′ inside the integral, so the integral must be redone per direction; Griffiths massages it for monopole and dipole; Problem 3 of Problem Set 5 did quadrupole and octupole) is kept accurately.
- Added material, all marked or clearly the page's own: the worked example and plot, the C⁽²⁾/Jackson remark, the comparison of (9.67) with (9.51) via the Lecture 8 P_ℓ formula, the cosmology callout.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the notes text: no hits. The PDF contains no figures (`pdfimages` lists only 1 × 1 rule stencils), so nothing could be redrawn. No OpenStax or LibreTexts material. No sentences copied verbatim; standard phrases ("the first term or maybe the first few", "drop the curly brackets around either factor, but not both") are paraphrased. The worked example is original.

## Notes
- Cosmology callout: Newtonian potential = (9.47) with ρ → mass density and 1/4πε₀ → −G ✓. The tree-code statement is fair and matches the linked page: `simulating-galaxy-formation` (Ferreras 4.2) says Barnes-Hut trees replace "a distant cell" by "a low-order multipole expansion of its mass" (line 72 and quiz/flashcard). The centre-of-mass remark (dipole vanishes, so monopole is accurate up to a 1/r³ quadrupole term) is correct and marked as the page's own.
- leadsTo 8.07 Lecture 10: the Lecture Notes 10 scan, p. 2, expands A_j with the same {r̂…}/r^(ℓ+1) and (2ℓ−1)!!/ℓ! moments and starts using current conservation to restrict them; the "no magnetic monopole term, leading term is the magnetic dipole" summary is consistent with the course syllabus title ("Magnetic Multipole Expansion and Magnetic Dipoles"). Only p. 2 was read; the rest of that claim is plausible but not verified here.
- Prerequisites all exist: traceless-tensors-legendre-polynomials, integral-form-electrostatics (8.07), electric-dipoles (8.02), taylor-series (18.01). Internal links to Lecture 8 (`spherical-harmonics-from-traceless-tensors`) and Ferreras resolve to existing pages.
- Symbols: the meanings added or extended for this page (λ, g, x, f, d, Q, C, p, pᵢ, R, x′, r′, θ′, V_mono, V_dip, n̂ incl. n̂′, n̂ᵢ, n̂_{i₁}, n̂_{i_ℓ}, xᵢ, xⱼ, x_{i₁}, x_{i₃}, x_{i_ℓ}, i₃, P_ℓ, and the slug added to δ, δᵢⱼ, ε₀, ρ, ℓ, z, ẑᵢ, ẑⱼ, i, r, q, V, i₁, i_ℓ, P₂, P₃, Cᵢ, Cᵢⱼ, C_{i₁…i_ℓ}, n̂ₖ, B_ℓ, A_ℓ, xₖ, n̂ⱼ) fit their use on the page. Minor (info): the shared `r` meaning ("a distance: from the centre of a ball or a point charge, or from the axis of a line of charge") does not quite describe "the distance of the field point from the origin"; the shared `n_j` meaning says "unit vector n⃗" where the page writes n̂; the `C_ij` meaning mentions a tilde form not used here. None is wrong enough to mislead.
- Status may be set to `reviewed` after the warnings above are addressed (or consciously left).

## Resolution (2026-11-18, by the page author)

- #1: fixed. The bracket after eq. (9.60) now also says that the notes print the order of the remaining derivative as ℓ instead of ℓ − 2.
- #2: fixed. The bracket after eq. (9.47) now covers eqs. (9.47), (9.52) and (9.74) (d³x for d³x′), and says that eq. (9.74) prints the component of the source point without its prime.
- #3: done. The introduction says the notes write the components of r′ mostly with the letter r, but x′ᵢ in eqs. (9.54) to (9.56).
- #4: done. The introduction says the notes call the potential capital phi in eq. (9.46).
- #5: nothing to change.
- #6: fixed. The worked example's step "The series" now defines θ as the angle between n̂ and the z-axis.
- Symbols (info notes): left unchanged.
- Status set to `reviewed`.
