---
page: content/year-4/8.07/spherical-harmonics-from-traceless-tensors.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln8/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/6a67040c6a90f70c8164cdea63473a30_MIT8_07F12_ln8.pdf (read, local copy: every equation (8.1)-(8.45) read from the page images of printed pp. 1-8; the garbled text layer used only for the licence grep)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/0ccc978da12536a8d95333ec7726c555_MIT8_07F12_ln9.pdf (read in part, local text copy: opening, the completeness claim, the 2ℓ + 1 count and the multipole section, for the leadsTo)
  - content/year-5/8.902/cmb-anisotropies.mdx, content/year-2/8.04/spherical-harmonics-radial-equation.mdx, content/year-2/18.06/eigenvalues-and-eigenvectors.mdx, content/year-2/18.06/complex-matrices-fft.mdx, content/year-4/8.07/separation-of-variables-spherical.mdx (read in part, for the claims the page makes about them)
verdict: pass-with-notes
---

# Review: Traceless symmetric tensors and the standard spherical harmonics

The page covers all of Lecture Notes 8 (typed, Guth, 11 October 2012, addendum to Lecture 14 of Wednesday 10 October; printed pp. 1-8). Every `<Formula>` was compared with the page image of the notes; the author's notes.md and check.py were not used. All numerical and sign checks below were redone with an independent NumPy/SciPy script (traceless parts built by a generic least-squares trace projection, standard Y_ℓm from `scipy.special.sph_harm_y`, which uses the Condon-Shortley phase, i.e. Jackson's convention).

Formula-by-formula (equation, printed page, verdict):
- p. 1: (8.1) incl. the second line C⁽⁰⁾ + C⁽¹⁾ᵢn̂ᵢ + …, (8.2), (8.3), (8.4), (8.5), (8.6). Match (apart from the noted ℓ = 1 start, see below).
- p. 2: (8.7), the 2ℓ + 1 count ("We have already shown"), (8.8), (8.9), (8.10), (8.11) with ẑᵢ = δᵢ₃, (8.12). Match.
- p. 3: (8.13), (8.14) all five lines incl. the rank-4 ⅐ and 1/35 terms (index order δ_mj, δ_jk etc. as printed), (8.15), (8.16). Match. Rank-3 and rank-4 lines verified numerically to equal the traceless symmetric part of ẑ⊗ẑ⊗ẑ(⊗ẑ).
- p. 4: (8.17) (the page drops the printed "(ℓ − 2)" line; the remaining lines are exact), (8.18), (8.19), (8.20). Match.
- p. 5: (8.21)-(8.29). Match; v_y = ∓ i v_x as printed.
- p. 6: (8.30)-(8.35). Match (the page restores the cut-off left side of (8.34), see below).
- p. 7: (8.36) (Jackson 3.53, p. 108), (8.37) (Jackson 3.50), (8.38)-(8.41), (8.42)-(8.43) (page deliberately changed, see below), (8.44a). Match.
- p. 8: (8.44b), the uniqueness argument ("Assuming that the power series representation of Eq. (8.1) always exists"), (8.45). Match.

All `at=` locations and the "(notes p. N)" page references in the prose are correct.

## Verification of the slips the page attributes to the notes
1. **Sums from ℓ = 1 in (8.1) and (8.3):** confirmed. Both printed sums run from ℓ = 1, while the second sum of (8.1) and its expansion start at ℓ = 0 / C⁽⁰⁾. The page's bracket is correct.
2. **Left side of (8.34) cut off:** confirmed. The printed bracket is {û⁺ᵢ₁ … û⁺ᵢₘ ẑᵢₘ₊₁} with no "… ẑᵢ_ℓ", while the right side has ẑᵢₘ₊₁ … ẑᵢ_ℓ. Correct remark.
3. **e^{iψ} for e^{imψ} on p. 4:** confirmed ("Y_ℓm changes by a factor e^{iψ}"). Correct remark.
4. **Sign in (8.42)-(8.43) for odd negative m: the page is right, the notes are wrong.** In the notes, d_ℓm of (8.43) is (−1)^m × (something symmetric in m), because (ℓ + m)!(ℓ − m)! and 2^|m| do not change under m → −m. So d_ℓ,−|m| = d_ℓ,|m| (real), and the notes' tensor is exactly C^(ℓ,|m|)*, giving Y_ℓ,−|m| = Y*_ℓ,|m|. Jackson's (3.54) has Y_ℓ,−m = (−1)^m Y*_ℓm. Numerical check against SciPy for every ℓ ≤ 4 and every m:
   - m ≥ 0: notes' (8.40)-(8.41) reproduce the standard Y_ℓm exactly (all 15 cases).
   - m < 0, even (−2, −4): notes and page both agree with the standard Y.
   - m < 0, odd (ℓ, m) = (1, −1), (2, −1), (3, −1), (3, −3), (4, −1), (4, −3): the notes' formula gives exactly **−Y_ℓm**; the page's version (no (−1)^m in d_ℓm for m < 0, and C^(ℓ,−|m|) = (−1)^m C^(ℓ,|m|)*) gives +Y_ℓm.
   - Explicitly for ℓ = 1: d₁,₋₁(notes) = −√(3/(4π)), and û⁻·n̂ = sin θ e^{−iφ}/√2, so the notes give −√(3/(8π)) sin θ e^{−iφ} = −Y₁,₋₁. The page's claim "the notes' version gives −Y₁,₋₁" is correct. Same for ℓ = 2: the standard Y₂,₋₁ is +√(15/(8π)) sin θ cos θ e^{−iφ}, and the notes' formula gives minus this (checked numerically).
   The page's remark about P_ℓ^{−m} = (−1)^m (ℓ − m)!/(ℓ + m)! P_ℓ^m (Jackson 3.51) is correct; "needs" is slightly strong (Jackson's (3.50) is valid for m < 0, but its leading-term matching is not as direct), see note 6.
5. **e^{+iψ} ↔ û⁻ remark on (8.26):** correct. With the upper sign, cos ψ − e^{iψ} = −i sin ψ, and the first row gives −i sin ψ v_x − sin ψ v_y = 0, so v_y = −i v_x, i.e. (1, −i)/√2 = û⁻. Direct check: R(1, −i) = (cos ψ + i sin ψ, sin ψ − i cos ψ) = e^{iψ}(1, −i). The notes indeed list û⁺ first without saying which eigenvalue it belongs to, and they explicitly leave the rotation sign open, so the page's framing ("the sign Guth deliberately leaves open") is fair: this is a clarification, not an error in the notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Building the spherical harmonics", paragraph after eq. (8.32) | p. 6: "the only terms that survive are those for which every û⁺ is dotted into ẑ" (a slip: û⁺·ẑ = 0, it should read n̂, as the notes' own next sentence implies) | "in the surviving terms each û⁺ meets an n̂" (correct), without saying the notes differ | Add a short bracket, per writing rule 4: "[The notes say 'dotted into ẑ' here; n̂ is meant.]" |
| 2 | info | "Fixing the constant", last paragraph (P₃ and P₄ checks); "A quick check of the rank-3 line" after eq. (8.14) | The notes contain no such checks. | Checks presented without marking them as the page's own (both are correct, verified). | Optionally "(Our own check: …)". |
| 3 | info | eq. (8.42)-(8.43) `<Formula>`s | Printed with (−1)^m in d_ℓm and "= C^(ℓ,|m|)*". | Corrected forms, cited plainly "eq. (8.42)", "eq. (8.43)"; the bracket below explains. | Optionally cite as `at="eq. (8.42), corrected"` so a reader comparing with the PDF is warned at the formula itself. |
| 4 | info | Bracket after eq. (8.43) | — | "The matching at negative m also needs P_ℓ^{−m} = …, because eq. (8.37) with m < 0 has a negative power of sin θ in front." Jackson's (3.50) holds for negative m too; the relation is what makes the leading-term comparison straightforward rather than strictly necessary. | Optionally "is easiest with …". |
| 5 | info | Intro / "Two expansions" | LN9 p. 1: "Logically Lecture Notes 8 should come after these notes, although they were posted first." | The page says "the lecture showed" the 2ℓ + 1 count (true: the notes say "We showed in lecture") but does not mention that the full write-up (LN9) logically precedes LN8. The leadsTo to LN9 partly covers this. | Optional one-line mention. |
| 6 | info | eq. (8.17) | Printed with an extra "(d/dx)^{ℓ−2}[(2ℓ)(2ℓ−1)x^{2ℓ−2} + …]" line. | That line omitted. | None needed (shortening, the result is identical). |

No error-level differences found.

## Arithmetic and answer checks
- Constants (2ℓ)!/(2^ℓ(ℓ!)²): 1, 1, 3/2, 5/2, 35/8 for ℓ = 0-4. Correct.
- P₃ check: (5/2)(cos³θ − (3/5)cos θ) = (5cos³θ − 3cos θ)/2. Correct. P₄ check: the rank-4 line contracted with n̂ gives c⁴ − (6/7)c² + 3/35 (verified numerically at two angles), and (35/8) times it is (35c⁴ − 30c² + 3)/8. Correct.
- Rank-3 trace check (3ẑᵢ + ẑᵢ + ẑᵢ = 5ẑᵢ). Correct.
- (8.45) {û⁺ᵢû⁻ⱼ} = −½{ẑᵢẑⱼ}: verified numerically; the page's derivation (û⁺·û⁻ = 1, symmetric part ½(δᵢⱼ − ẑᵢẑⱼ), minus δᵢⱼ/3) is correct.
- "m = 0 reproduces (8.18) × √((2ℓ+1)/4π)": d_ℓ0 = (2ℓ)!/(2^ℓ(ℓ!)²)·√((2ℓ+1)/4π). Correct.
- Worked example: d₂₂ = 3√(5/(24π)) = √(15/(8π)) = 0.77255; Y₂₂ = d₂₂ sin²θ e^{2iφ}/2 = √(15/(32π)) sin²θ e^{2iφ}. d₂₀ = 3√5/(4√π) = 0.94617. a₀₀ = √(4π)/3 = 1.1816 (≈ 1.18), a₂₀ = −½/d₂₀ = −(2/3)√(π/5) = −0.52844 (≈ −0.528), a₂,±₂ = ½/d₂₂ = √(2π/15) = 0.64721 (≈ 0.647). All correct. The full series evaluated with SciPy's Y_ℓm equals sin²θcos²φ at (60°, 30°) (0.5625) and at a second, arbitrary direction (0.8, 1.7): 0.0085428 both. Check step: n̂ₓ = 0.75, F = 0.5625, P₂ = −1/8, m = 0 term −P₂/3 = 1/24, m = ±2 pair ½·¾·½ = 3/16, sum 27/48 = 9/16. Correct. "No m = ±1" correct. a₂,₋₂ = (−1)²a*₂₂ consistent with the corrected relation.
- Calcs file `calcs/8.07/spherical-harmonics-from-traceless-tensors.yaml`: 36 entries, `npm run calc:test -- -k traceless` passes (36 passed). Entries match the page's numbers. `content:check`: 0 errors; the only warning for this page is the missing review file (now written).
- Quiz 1 (rank-3 count 10 − 3 = 7, answer index 2 = "7"): correct; explanation correct.
- Quiz 2 (û⁺·û⁺ = 0, answer 0): correct; explanation correct.
- Quiz 3 (ℓ = 3 constant 5/2, answer index 3): correct; distractors 3/2 (ℓ = 2), 35/8 (ℓ = 4), 1/48 = 1/(2³·3!) correctly explained.
- Quiz 4 (e^{−2iφ} from {û⁻û⁻ẑ}, answer 1): correct; the explanation that {û⁺û⁻ẑ} is m = 0 is correct.
- Flashcards: all four correct (the d_ℓm with (−1)^m is stated for m ≥ 0; the m < 0 rule matches the corrected, verified form).

## Coverage and order
- The page follows the notes' order exactly: two expansions (8.1)-(8.7) and the count; azimuthal symmetry (8.8)-(8.16); the constant (8.17)-(8.18); rotations and û± (8.19)-(8.31); F_ℓm and Y_ℓm (8.32)-(8.41); negative m (8.42)-(8.43); placement of the curly brackets (8.44); uniqueness and (8.45). Nothing in the notes is left out.
- Added by the page (marked or clearly the page's own): the ℓ = 2 count example, the rank-3 trace check, P₃/P₄ checks, the derivation of (8.45) (marked: "The notes leave the 'little work' to the reader"), the worked example, and the cosmology callout.

## Licensing
- LN8 carries no "All rights reserved" or "Courtesy of" notice (grep of the text layer and visual check of all pages); the notes have no figures, and the page has none.
- No verbatim copying found: wording is paraphrased throughout; short standard phrases ("traceless symmetric part", "eigenvectors of the rotation") only. The visualisation passage (complex 3-space = real 6-space) is paraphrased, not copied.
- The worked example (sin²θcos²φ) is original; the notes have no examples.
- No OpenStax or LibreTexts material. Jackson is cited only as Guth cites it.

## Forward links and the cosmology callout
- a_ℓ,−m = (−1)^m a*_ℓm for a real function with the standard (Condon-Shortley) Y_ℓm: correct, and it follows from the page's (corrected) negative-m relation; it would not follow from the notes' printed (8.42)-(8.43), which is another reason the correction matters.
- "Of the 2ℓ + 1 complex numbers, only 2ℓ + 1 real numbers are free" (a_ℓ0 real, plus a real and imaginary part for each m > 0): correct, and equal to the count of a real traceless symmetric rank-ℓ tensor.
- "C_ℓ is an average over those numbers"; "the quadrupole is measured from just five": correct (cosmic variance), and fairly marked "(a point not made in these notes)".
- leadsTo 8.902 Lecture 17: the target page `cmb-anisotropies` (lecture 17) expands T in complex Y_ℓ^m with a_ℓm = ∫T Y*, and C_ℓ = ⟨|a_ℓm|²⟩. Fair. (Uncertain: whether the 8.902 notes state the Condon-Shortley phase; "exactly these standard spherical harmonics" is the usual convention and not contradicted by that page.)
- leadsTo 8.07 Lecture 9: LN9 claims, without proof, that every function of angle has the power-series form (LN9 p. 1-2 "I now claim … I will not prove this"), derives N = 2ℓ + 1 (eq. 9.33ff), and derives the multipole expansion from 1/|r − r′|. The "why" text is accurate.

## Notes
- Prerequisites `separation-of-variables-spherical`, `spherical-shell-circular-hole`, `spherical-harmonics-radial-equation`, `eigenvalues-and-eigenvectors` all exist and fit. The inline claims about them are accurate: the 18.06 page has the 90° rotation with eigenvalues ±i; the 18.06 complex-matrices page has (1, i) with zᵀz = 0; the 8.04 page puts (−1)^m in Y_lm with P_l^m defined without it (so the same functions); the Lecture 6 page removes the trace into C⁽⁰⁾ as the worked example says.
- Symbols: 108 meanings in `data/symbols.json` now apply to this page, of which the new ones (scoped to this page) were all read. Meanings and the explicit forms (Y₁,₋₁ = √(3/(8π)) sin θ e^{−iφ}, Y₂₂ = √(15/(32π)) sin²θ e^{2iφ}, Y₂₀, Y_ℓ0, d₂₀, d₂₂, P₄, a_ℓ,−m relation) are correct and use the corrected sign convention. Minor: the meaning of plain `i` mentions only the imaginary unit and the index of û⁽ⁱ⁾, while the quiz explanation also uses i as a free index ("for each i"); harmless. `content:check` reports no symbol problems.
- The page's statement that Guth "does not derive the standard formalism" and takes it from textbooks matches p. 1-2.
- Dates: the notes are dated 11 October 2012 and call themselves an addendum to Lecture 14, Wednesday 10 October 2012; the page's "written the day after" is correct.

## Resolution (2026-11-18, by the page author)

- #1 (warning): added a bracket after the paragraph following eq. (8.32): the notes say every û⁺ is dotted into ẑ, where n̂ is meant.
- #2: the rank-3 trace check after eq. (8.14) and the P₃/P₄ checks after eq. (8.18) are now marked as the page's own ("our own, not in the notes").
- #3: the two corrected formulas now cite `at="eq. (8.42), corrected"` and `at="eq. (8.43), corrected"`.
- #4: "also needs" changed to "is easiest with" for the relation P_ℓ^(−m) = (−1)^m (ℓ − m)!/(ℓ + m)! P_ℓ^m.
- #5: the 2ℓ + 1 count now notes that it is written up in Lecture Notes 9, which Guth says logically come before these notes although they were posted later.
- #6: no change (the omitted line of eq. (8.17) is a shortening with the same result).
- Symbols note: the page-scoped meaning of `i` now also covers its use as a free index (Cᵢⱼⱼ = 0 for each i).
- Page set to `status: reviewed`. content:check, calc:test and build pass.
