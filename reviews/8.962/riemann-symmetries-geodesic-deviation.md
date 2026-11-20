---
page: content/year-5/8.962/riemann-symmetries-geodesic-deviation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/3b163aac7a1cac9cd9b38c9401ec518a_d1dtqw7f6pw.pdf (read, local copy L11.pdf / L11.txt, with PDF page markers; 20 pages of text)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-11-more-on-spacetime-curvature/ (not fetched; the transcript is the lecture's only text source, no slides)
  - 8.962 Lecture 12 transcript (read, local copy L12.txt, for leadsTo)
  - 8.962 Lecture 16 transcript (read, local copy L16.txt, for leadsTo)
verdict: needs-changes
---

# Review: Symmetries of the Riemann tensor, geodesic deviation and the Bianchi identity

The lecture is a video with board work and no slides. Equations are reconstructed from what Hughes says, so the physics was checked against standard GR (Carroll's conventions, signature −+++) as well as against his words. Page numbers are PDF page numbers (the PDF has no printed footer), as the page cites.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The symmetries of Riemann", Formula "Riemann normal coordinates (standard form)" | p. 5: Hughes writes a metric with a "time piece", an off-diagonal piece "which only enters at quadratic order" and a "space-based piece", calls it Riemann normal coordinates and refers to Poisson's *A Relativist's Toolkit*. The coefficients are not read out. | Gives g₀₀ = −1 − R₀ᵢ₀ⱼxⁱxʲ, g₀ᵢ = −⅔R₀ⱼᵢₖxʲxᵏ, gᵢⱼ = δᵢⱼ − ⅓Rᵢₖⱼₗxᵏxˡ as "the standard form" of Riemann normal coordinates. | These are **Fermi normal coordinates** (the Manasse–Misner metric along a freely falling worldline, Poisson's Toolkit §1.11), not Riemann normal coordinates. In true Riemann normal coordinates g_μν = η_μν − ⅓R_μανβ x^α x^β + O(x³), so g₀₀ would have coefficient ⅓, not 1. Hughes's description ("the coordinate system used in a freely falling frame", split into time, mixed and space parts) fits the Fermi form, so he probably wrote that form and used the name loosely; this cannot be confirmed from the transcript. Fix: either show the Riemann normal form g_μν = η_μν − ⅓R_μανβ x^α x^β, or keep the displayed form and label it Fermi normal coordinates, with a short bracketed note that the lecture calls it Riemann normal coordinates. Either way, say the transcript does not settle which form was on the board. (The coefficients of the displayed Fermi form are right: −1, −⅔, −⅓ with these index orders.) |
| 2 | warning | Worked example "Ricci curvature of a sphere", step 1 | (Page's own example) | "R_φθφθ = R_θφθφ … (pair symmetry)" | Exchanging the pairs of R_φθφθ gives R_φθφθ again. The equality comes from antisymmetry in **both** pairs (two minus signs). Change "(pair symmetry)" to "(antisymmetry in each pair)". The result, 1, is correct. |
| 3 | info | Worked example "Ricci curvature of a sphere", problem | Hughes does not work the sphere in Lecture 11; the Lecture 10 transcript was not part of this review. | "Lecture 10 found R^θ_φθφ = sin²θ" | The value comes from this site's Lecture 10 page (its worked example "The Riemann tensor of a sphere"). Consider "the Lecture 10 page found" so it is not read as a result of the lecture itself. The value itself is standard and correct. |
| 4 | info | Frontmatter `summary` | n/a | "… equal to zero,, and its contraction …" | Double comma: delete one. |
| 5 | info | "Ricci and Weyl", Weyl paragraph | p. 7: "in the famous words of Rabi, who ordered that?" | Adds "as Rabi said of the muon" | Correct historical context, a harmless addition. No change needed. |

## Formula and citation checks
- **Riemann in a local Lorentz frame** (pp. 3–4): matches Carroll's R_ρσμν = ½(∂_μ∂_σ g_ρν − ∂_μ∂_ρ g_νσ − ∂_ν∂_σ g_ρμ + ∂_ν∂_ρ g_μσ) under ρσμν → αμλσ. The last two terms match what Hughes reads at the top of p. 4 ("minus d sigma d mu g alpha lambda plus d sigma d alpha g lambda mu"). Citation correct.
- **Four symmetries** (pp. 4–5): correct, including the cyclic form R_αμλσ + R_αλσμ + R_ασμλ = 0 (cyclic on the last three). The "index slip" remark (p. 4, "Oh, bugger, thank you … a very complicated way of writing zero") is a fair reading.
- **n²(n² − 1)/12** (p. 5): 20 for n = 4; Hughes's "n equals 20" slip is noted and not repeated. Correct.
- **Riemann normal coordinates**: see finding 1. The page does mark the coefficients as not read out, which is correct.
- **Ricci tensor** R_μν = R^α_μαν = g^αβ R_βμαν (p. 6): correct; matches "R alpha beta … beta mu alpha nu".
- **Ricci from Christoffels** (p. 7): contracting Carroll's R^ρ_σμν = ∂_μΓ^ρ_νσ − ∂_νΓ^ρ_μσ + Γ^ρ_μλΓ^λ_νσ − Γ^ρ_νλΓ^λ_μσ on ρ = μ gives ∂_αΓ^α_μν − ∂_ν∂_μ ln√|g| + Γ^α_αβΓ^β_μν − Γ^α_νβΓ^β_αμ, as on the page. The last term is symmetric after swapping the dummies α ↔ β, as stated. Correct. ("Lecture 9" for the party trick: Hughes says "a lecture or two ago"; the site's Lecture 9 page has it, so it is consistent.)
- **Ricci scalar** (p. 7): correct.
- **Weyl tensor** (pp. 7–8): expanding Carroll (3.146), C_ρσμν = R_ρσμν − 2/(n−2)(g_ρ[μR_ν]σ − g_σ[μR_ν]ρ) + 2/((n−1)(n−2)) R g_ρ[μ g_ν]σ, and renaming ρσμν → αμλσ gives exactly the page's 1/(n−2)(g_αλR_σμ − g_ασR_λμ − g_μλR_σα + g_μσR_λα) and R(g_αλg_σμ − g_ασg_λμ)/((n−1)(n−2)). Consistent with "2 over n minus 2, g alpha … antisymmetrizing on lambda and sigma". Correct.
- **ξ^α = x_v^α − x_u^α** (p. 10): correct.
- **d²ξ^α/dλ² = −∂_βΓ^α_μν u^μ u^ν ξ^β** (p. 12): at A′, Γ ≈ ξ^β∂_βΓ and v = u to this order; subtracting the geodesic equation at A (Γ = 0) gives this sign. Correct.
- **D²ξ^α/dλ² = d²ξ^α/dλ² + ∂_βΓ^α_μν u^β u^μ ξ^ν** (pp. 14–15): with Dξ^α/dλ = dξ^α/dλ + Γ^α_μν u^μ ξ^ν, the second derivative at A keeps only u^β∂_βΓ^α_μν u^μ ξ^ν; terms with Γ alone, with du/dλ (geodesic) and with dξ/dλ (initially parallel) drop. Correct.
- **Geodesic deviation** D²ξ^α/dλ² = R^α_μβν u^μ u^β ξ^ν (pp. 15, 17): in the LLF, R^α_μβν = ∂_βΓ^α_νμ − ∂_νΓ^α_βμ; contracting gives the first term above and, after renaming dummies, minus the p. 12 term. Matches Carroll (3.200) convention. Named on p. 17 ("I forgot to give the name of this"). Correct.
- **Relations (A) and (B)** (pp. 17–18): with [∇_μ, ∇_ν]ω_ρ = −R^λ_ρμν ω_λ, applying the commutator to the two-index T_γδ = ∇_γp_δ gives −R^μ_γαβ∇_μp_δ − R^μ_δαβ∇_γp_μ, as on the page; (B) = −∇_α(R^μ_δβγ p_μ). Signs correct. Hughes writes (B) expanded (p. 17, garbled in the transcript); the page leaves it unexpanded, which is equivalent.
- **Antisymmetrisation argument** (pp. 18–19): both left sides become 2∇_[α∇_β∇_γ]p_δ; on the right, R^μ_[γαβ] = 0 by the cyclic identity, and R^μ_δ[αβ∇_γ]p_μ and R^μ_δ[βγ∇_α]p_μ are equal (cyclic permutation) and appear on opposite sides, so they cancel; leaving p_μ∇_[αR^μ_|δ|βγ] = 0. Page's account is correct.
- **Bianchi identity** ∇_λR_αβμν + ∇_αR_βλμν + ∇_βR_λαμν = 0 (p. 19): matches Carroll (3.94). The lecture's derivation antisymmetrises the derivative with the second pair; the page's form (first pair) is equivalent by pair symmetry, and Hughes says he writes "another form" on p. 19. Correct.
- **G_μν and ∇^μG_μν = 0** (p. 20): correct; the page says correctly that the contraction is only stated, with details in posted notes and the first recorded lecture.

## Arithmetic and answer checks
- 4⁴ = 256; 4²(4² − 1)/12 = 20; symmetric 4×4: 10; Weyl 20 − 10 = 10. Correct.
- Sphere: R_φφ = R^θ_φθφ = sin²θ; R_θφθφ = a² sin²θ; R^φ_θφθ = g^φφ R_φθφθ = 1, so R_θθ = 1; R = 1/a² + 1/a² = 2/a²; G_θθ = 1 − ½a²(2/a²) = 0, G_φφ = sin²θ − sin²θ = 0. Correct (justification: finding 2).
- Newtonian limit: R^i_0j0 ≈ ∂_i∂_jΦ, and R^i_00j = −R^i_0j0, so d²ξ^i/dt² = −∂_i∂_jΦ ξ^j. For Φ = −GM/r, −∂_r²Φ = +2GM/r³ (stretching); transverse −GM/r³ (squeezing at half the rate). Correct.
- 2 × 3.986e14 / (6.771e6)³ = 2.568 × 10⁻⁶ s⁻² (recomputed: 2.5681e-6). Page: 2.57e-6 and, for 1 m, 2.6e-6 m/s². Correct.
- Plot: ISS point y = 2.568 (×10⁻⁶ s⁻²) at 400 km, correct; surface 2 × 3.986e14/(6.371e6)³ = 3.083e-6, caption "about 3.08 × 10⁻⁶", correct; at 2000 km 1.36e-6; range [0, 3.5] contains the curve. 6.371e6 + 400e3 = 6.771e6, consistent with the worked example.
- Quiz 1 (answer index 2, R_αμλσ = R_μαλσ is not a symmetry): correct, explanation correct.
- Quiz 2 (2/a²): correct.
- Quiz 3 (Weyl can be non-zero): correct; explanation matches pp. 8–9.
- Quiz 4 (2.6 × 10⁻⁶ m/s², pushing apart): correct.
- Flashcards: all five correct (symmetries, Ricci/scalar, Weyl, geodesic deviation, Bianchi and G).
- Calcs file: all entries agree with the page and with the recomputations above.

## Coverage and order
- The page follows the lecture order: recap (pp. 1–2), symmetries via the LLF (pp. 2–5), Riemann normal coordinates and Poisson (p. 5), Ricci, Ricci scalar, Weyl and its physical role (pp. 6–9), geodesic deviation and its use for tides, detectors and extended bodies (pp. 9–16), commutator relations, antisymmetrisation and the Bianchi identity (pp. 16–19), contracted Bianchi and the Einstein tensor (p. 20). The opening sentence covers the live/empty-room context (pp. 1, 20).
- Nothing of substance left out. Hughes's administrative remarks (assignments, due dates) are rightly omitted.
- Additions, both marked: the sphere example (page's own, uses the site's Lecture 10 result) and the ISS tidal example ("this page's addition, not worked in the lecture"). The Weyl coefficients in expanded form are a reasonable reconstruction from Hughes's words plus Carroll (3.146); the page could say "in Carroll's form" but it is not wrong.

## Licensing
- The transcript is OCW material under CC BY-NC-SA; no "All rights reserved" or "Courtesy of" notice in it. No figures are reproduced; the only graph is generated from a formula.
- Wording is the page's own. Short quoted phrases ("suit and tie", "who ordered that?", "vile") are attributed and brief. No OpenStax or LibreTexts material.
- Worked examples are original (sphere Ricci and Einstein tensor; ISS tides); the lecture works neither.

## Forward links
- leadsTo Lecture 12: correct. L12 sets G_μν = κT_μν, fixes κ = 8πG from the Newtonian limit (L12 lines around "Kappa equals 8 pi G … known as the Einstein field equation").
- leadsTo Lecture 16: correct. L16 applies "the equation of geodesic deviation" to the free-fall worldlines of two bodies in a gravitational wave.
- Cosmology callout: correct. G_00 for Robertson–Walker is 3(ȧ²/a² + k/a²), giving the first Friedmann equation with a perfect fluid; the spatial sections a²[dr²/(1 − kr²) + r²dΩ²] have Ricci scalar 6k/a². Fairly stated as standard results, not attributed to the lecture.

## Notes
- No em dashes in the page (checked).
- Lecturer slips handled: "n equals 20" noted as corrected by Hughes; the board index slip is mentioned without repeating it.
- Uncertain: which metric Hughes actually wrote on the board on p. 5 (finding 1). The transcript does not read out coefficients, so the fix should not claim either form for the lecture.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error): the displayed metric is now labelled as the standard form of Fermi normal coordinates of a freely falling observer; the text says Hughes calls them Riemann normal coordinates (p. 5), that the transcript does not read out the coefficients, and gives the Riemann normal form g_μν = η_μν − ⅓ R_μανβ x^α x^β for comparison.
- Finding 2: the sphere step now cites antisymmetry in each index pair (used twice), not pair symmetry.
- Finding 3: "Lecture 10 found" now reads "this site's Lecture 10 page found".
- Finding 4: the double comma in the summary is removed.
- Finding 5: no change.
