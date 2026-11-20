---
page: content/year-4/8.09/normal-coordinates-co2-molecule.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/aa6e7a8b4e0b5eeef24bce949d4fdb27_MIT8_09F14_Chapter_3.pdf (read: page images of printed pp. 55-59 and the pdftotext extraction)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_3/ (not opened separately; it is the landing page of the same PDF)
  - 8.09 Chapter 5 notes, Section 5.2, printed pp. 95-98 (read, text extraction, for the leadsTo claim)
verdict: pass-with-notes
---

# Review: Normal coordinates and the vibrations of CO₂

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after "Bond angles" ("Near the straight shape both denominators are ±b, so nothing below changes") and the last Summary bullet ("it does not affect the quadratic potential") | Eq. (3.33), p. 58, prints the denominators (1+ρ)x₁ + x₃ and (1+ρ)x₃ + x₁. Eq. (3.36), p. 59, has V₂₂ = 2λ(1+2ρ)², which matches the corrected denominators. | The slip "does not affect the quadratic potential". | The diagnosis of the slip is right (see the checks below). The claim that it has no effect is not right if the printed forms are taken literally. At x₁ = −b, x₃ = b they give (1+ρ)(−b) + b = −ρb and (1+ρ)b − b = ρb, not ±b. Each angle would then be ±(1+2ρ)y₁/(ρb), and V₂₂ would be 2κ(1+2ρ)²/ρ². Suggested wording: "the notes' (3.36) uses the correct values ±b of the denominators, so their later results are unaffected; taken literally, the printed denominators would be ∓ρb and would change V₂₂." Change the Summary bullet to match. |
| 2 | info | Footnote paragraph (p. 56) | The footnote writes V_kj a_j = λ_α K_kj a_j, with K for the kinetic matrix. | It uses T̂ without comment. | This is fine. If you want, add a short bracketed note that the notes write K for T̂ in the footnote. |
| 3 | info | End of "Potential and kinetic energy" | P. 58 ends with "These results give V = V(x₁, x₃, y₁). [to be continued]" (a break between lectures). | Not mentioned. | Nothing needed. The page carries on straight into p. 59, as the notes do. |
| 4 | info | "This is the 'simultaneous diagonalisation…' It is not the usual diagonalisation S⁻¹MS" | Not in the notes (the page's own remark). | A is not orthogonal, and Aᵀ appears, not A⁻¹. | This is correct as a congruence statement. Note that Aᵀ = A⁻¹T̂ (from the page's own inversion), so AᵀV̂A = A⁻¹(T̂⁻¹V̂)A is also an ordinary similarity diagonalisation of T̂⁻¹V̂. You could add this one line, which links back to the 18.06 page more fully. Optional. |

## Arithmetic and answer checks
Every formula against the page images:
- (3.26) mode matrix, p. 56: matches. (3.27) AᵀT̂A = 1, AᵀV̂A = λ̂, p. 56: matches. (3.28) η = Aξ, η̇ = Aξ̇, p. 56: matches. (3.29) the Lagrangian in three lines, p. 56: matches. (3.30) ξ̈ + ω²ξ = 0, p. 56: matches.
- (3.31) potential, p. 57: matches, with λ renamed κ. The renaming is stated in the text and in the `at=` attribute, and it is sensible because λ is used for the eigenvalues on this page and on p. 59 (3.39)-(3.40). The notes themselves use λ for both the bending stiffness and the eigenvalue in (3.36)-(3.40), so the renaming removes a real clash.
- (3.32) bond lengths, p. 58: matches.
- (3.33) bond angles, p. 58: the page's correction is right. x₂ − x₁ = −[(1+ρ)x₁ + ρx₃] and y₂ − y₁ = −(1+2ρ)y₁, so tan α₁ = (1+2ρ)y₁/[(1+ρ)x₁ + ρx₃]. Also x₃ − x₂ = (1+ρ)x₃ + ρx₁ and y₃ − y₂ = (1+2ρ)y₁. The notes' printed denominators lack the factor ρ on the second term, and the notes attach the (3,2) differences to α₁, although Figure 3.3 puts α₁ at atom 1. The page's description of the slip ("denominators … attached to the other angle") is accurate. Since V contains α₁² + α₂², the swapped labels do not matter. On the consequence of the slip, see finding 1.
- (3.34), (3.35) kinetic energy, p. 59: matches. Rederived: M/2·ρ²(ẋ₁+ẋ₃)² = (mρ/2)(ẋ₁² + ẋ₃² + 2ẋ₁ẋ₃), and the y terms give mẏ₁² + 2mρẏ₁².
- (3.36) V̂, p. 59: matches. Rederived: s₁ − b = −(1+ρ)η₁ − ρη₃ and s₂ − b = (1+ρ)η₃ + ρη₁, so V₁₁ = k[(1+ρ)² + ρ²] and V₁₃ = 2kρ(1+ρ). The bending term is κ(1+2ρ)²y₁², so V₂₂ = 2κ(1+2ρ)². The page's intermediate statements are all correct.
- (3.37) T̂, (3.38) bending equation, (3.39) determinant, p. 59: all match. ω²_bend = κ(1+2ρ)/m is correct.
- (3.40), p. 59: d − c = k − λm and d + c = k(1+2ρ)² − λm(1+2ρ). Both are correct, so λ₁ = k/m and λ₂ = (k/m)(1+2ρ).
- (3.41), p. 59: normalisation checked. (1,1)T̂(1,1) = 2m(1+2ρ), (1,−1)T̂(1,−1) = 2m, and the cross term is 0.
- Equation numbers and printed pages: all correct (55-56 / 57 / 58 / 59).
- Worked example (original: the notes quote no numbers):
  - ρ = 16/12 = 4/3 and 1 + 2ρ = 11/3, so ω₂/ω₁ = √(11/3) = 1.9149. Correct.
  - The carbon's displacement is 2ρη₁ = (8/3)η₁ ≈ 2.67η₁. Centre of mass: 12·8/3 = 32 = 2·16. Correct.
  - Normalisation and T̂-orthogonality: correct.
  - With η = (ε, ε): T̂η = m(1+2ρ)ε(1,1), so ξ₂ = √(2m(1+2ρ))·ε and ξ₁ = 0. Correct. The inversion ξ = AᵀT̂η follows from AᵀT̂A = 1. Correct.
  - The caveat that the model does not predict the measured ratio is appropriate. The measured CO₂ fundamentals are about 2349 cm⁻¹ and about 1340 cm⁻¹ (Fermi-split), a ratio of about 1.7, from general knowledge; the page quotes no measured value.
- Plot: point (1.3333, 1.9149) lies on √(1+2ρ). The caption's limit ρ → 0 gives a ratio of 1. Correct.
- Quiz 1: answer 0. Correct.
- Quiz 2: answer 1 (ω² = k/m, oxygens opposite, carbon still). Correct, and so is the explanation.
- Quiz 3: answer 1, √(11/3) ≈ 1.915. Correct. The distractors are 4/3, 11/3 = 3.667 and √(7/3) = 1.528, and the explanation describes them correctly.
- Quiz 4: answer 1. Correct. The reflection-symmetry argument is right.
- Flashcards 1-4: all correct. Card 3's names (symmetric stretch = oxygens opposite, carbon still; antisymmetric = oxygens together) follow standard usage.
- The calcs file covers (3.35), the corrected (3.33), V₁₁, V₁₃, V₂₂ (by finite differences), the bending frequency, both roots, both normalisations, ξ₂ and every page-own number. I checked the formulas in the file by hand above. I did not run `npm run calc:test`.

## Coverage and order
- Section 3.2 is covered in order: the motivating question (p. 55); the mode matrix (3.26) and λ̂; the footnote on why A can be real; (3.27)-(3.30) and the closing remark on p. 56; the CO₂ example (9 coordinates, 6 rigid-body ones, springs and the need for a bending term); the three guessed modes in the notes' order (a), (b), (c); the body-frame choice and ρ; (3.31)-(3.33); (3.34)-(3.35); the equilibrium and η definitions; (3.36)-(3.41); and ξ₁ ∝ x₁ − x₃, ξ₂ ∝ x₁ + x₃ with the modes identified. Nothing is missing.
- The page adds the following, all marked as its own or clearly explanatory: the element-by-element proof of (3.27), the inversion ξ = AᵀT̂η, the 18.06 contrast, the reflection-symmetry reason for the decoupling, the (d−c)(d+c) shortcut, the plot and the worked example.
- leadsTo Section 5.2 (pp. 95-98): this is accurate. Section 5.2 expands the pendulum Hamiltonian, keeps the −mgaθ⁴/24 term as the perturbation H₁, and finds a secular shift in the angle variable that lowers the frequency, Δω = −(E + mga)/(32ma²), which is negative and grows with energy. "the frequency drops as the amplitude grows" is a fair summary. Strictly, 5.2 works with the Hamiltonian (action-angle variables) rather than "the potential", but the quartic term is the potential's θ⁴ term, so the wording is fine.

## Licensing
- Chapter 3 PDF: no "All rights reserved" or "Courtesy of" notice (checked the text extraction). The OCW footer points to the standard CC BY-NC-SA terms.
- Figures 3.1-3.3 are not redrawn or reused. The page's only graphic is a plot generated from the formula √(1+2ρ).
- Paraphrase: no copied sentences found. The three mode descriptions follow the notes' bullets closely in content but are reworded ("move along the axis in the same direction, and the carbon moves the opposite way"). This is acceptable as standard description.
- No OpenStax or LibreTexts material.

## Notes
- The page's intro and frontmatter cite pp. 55-59 and "pp. 52-59" for the chapter PDF. Both are consistent with the PDF (PDF page 1 = printed p. 52; page 9 is the OCW licence page).
- The internal links /courses/8-09/small-oscillations-simultaneous-diagonalization and /courses/18-06/diagonalization-and-powers point to existing pages. The 18.06 course slug is `18-06`.
- Status should stay `draft` until finding 1 is addressed (a wording fix only; no physics or number on the page is wrong).


## Resolution (2026-11-19, by the page author)

1. Fixed: the bracket after "Bond angles" now says that the correct denominators are ±b near the straight shape, that the printed ones would be ∓ρb and give a bending term 1/ρ² too large, and that the notes' (3.36) uses the correct value; the Summary bullet now says the potential matrix uses the correct values.
2.–4. No change (information only).
