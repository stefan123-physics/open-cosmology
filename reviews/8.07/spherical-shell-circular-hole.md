---
page: content/year-4/8.07/spherical-shell-circular-hole.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln7/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/eef19192166dac3b7be7448cbef765d6_MIT8_07F12_ln7.pdf (read, local copy: pdftotext of all 5 PDF pages, and the page images of printed pp. 1-4 viewed to check every equation)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/6a67040c6a90f70c8164cdea63473a30_MIT8_07F12_ln8.pdf (read in part, local copy: opening and the azimuthal-symmetry part, for the leadsTo)
  - content/year-4/8.07/separation-of-variables-spherical.mdx (read in part, for the claim about the earlier notes)
verdict: pass-with-notes
---

# Review: A spherical shell of charge with a circular hole

The page covers all of Lecture Notes 7 (typed, Guth, 8 October 2012, printed pp. 1-4; PDF p. 5 is the OCW citation page). Every `<Formula>` was compared with the page image of the notes; the author's notes.md was not used.

- p. 1: problem statement (σ₀ = Q/(4πR²), cap on the north pole defined by the cone θ = α, "Find the potential V(r⃗) everywhere"), Jackson 3rd ed. Problem 3.2 p. 135, Friday 5 October 2012, Griffiths/azimuthal symmetry, (7.1) with C^(ℓ)_{i₁…i_ℓ}, (7.2), "We have not proven it" for the azimuthally symmetric tensor, curly brackets = traceless symmetric part, (7.3), (7.4). All match.
- p. 2: (7.5) with in/out as superscripts, B^in = 0, A^out = 0, the finite-field / zero-length path argument, (7.6), the per-ℓ matching by orthogonality, B^out = R^{2ℓ+1}A^in, (7.7), (7.8) (two-line brace), (7.9), (7.10). All match; the page's two `<Formula>`s for the two lines of (7.8) are both correctly cited "eq. (7.8)".
- p. 3: (7.2′), same units, B^out = A^in, "A_ℓ in this approach is equal to Ã_ℓ"; (7.11) with vertical bars, (7.12), (7.13), (7.14), (7.15), (7.16). All match, including the derivative factors (ℓ+1)R^ℓ/R^{ℓ+2} and ℓR^{ℓ−1}/R^{ℓ+1}.
- p. 4: (7.17), (7.18), "In many similar problems one would have to stop", (7.19), (7.20), (7.21) P₋₁ ≡ 0, (7.22) with the braces, (7.23) with "Rodriguez's formula" (the slip is correctly noted on the page as Rodrigues), (7.24a), (7.24b), (7.25), and "we intepret P₋₁(cos α) as −1, although it conflicts with Eq. (7.21)". All match; the page reports the P₋₁ conflict accurately and correctly identifies ℓ = 0 as the only term where it matters.

All `at=` locations (p. 1, eq. numbers, "eq. (7.2′), p. 3") are correct. No "rights reserved" or "Courtesy of" notice in LN7.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Azimuthal symmetry…", after eq. (7.3): the ℓ = 2 example | Notes give no example. | "(For ℓ = 2, for example, the traceless part of ẑᵢẑⱼ is ẑᵢẑⱼ − δᵢⱼ/3 … which is (2/3)P₂(cos θ).)" Correct, but not marked as the page's own addition (the calcs file marks it `page-own`). | Optionally "(Our own check: for ℓ = 2 …)". Same for the ℓ = 1 check of (7.20) under "Doing the integral". |
| 2 | info | "Azimuthal symmetry…", first paragraph: "(that every function of direction can be expanded this way is assumed, not proved, in the earlier notes)" | LN7 says only "We have not proven it" about the form of the azimuthally symmetric tensor (which the page also reports). The completeness claim is from LN6/LN9. | Consistent with the reviewed page separation-of-variables-spherical (LN6 states it as a claim; LN9 does not prove it). | None needed. |
| 3 | info | Summary, bullet "The integral" | — | "writing (2ℓ+1)P_ℓ as …, with P_ℓ(−1) = (−1)^ℓ give Ã_ℓ = …": grammar ("give" should agree with "writing"). | "…, together with P_ℓ(−1) = (−1)^ℓ, gives Ã_ℓ = …". |
| 4 | info | Worked example, "Field at the centre" | Notes do not compute the field at the origin. Jackson's Problem 3.2(b) asks for it. | Page computes it with its own numbers (169 V/m) and its own derivation from Ã₁. | None; not copied text. Noted only because it mirrors a part of the Jackson problem the notes skip. |

No error-level differences: every formula has the same physics, notation and equation number as the notes.

## Arithmetic and answer checks
Recomputed independently (NumPy/SciPy, ε₀ = 8.8541878128 × 10⁻¹² F/m):
- σ₀ = 1 nC/(4π · 0.01 m²) = 7.958 × 10⁻⁹ C/m². OK (7.96).
- Charge on shell Q(1 + cos 60°)/2 = 0.75 nC; cap 0.25 nC. OK.
- Q/(8πε₀) = 4.4938 V m. OK (4.49).
- P₂(½) = −1/8, P₃(½) = −7/16. OK.
- Ã₀ = 6.7407, Ã₁ = −1.6852, Ã₂ = −0.84258 V m. OK (6.74, −1.69, −0.843).
- V(0) = Ã₀/R = 67.41 V. OK.
- E_z(0) = −Ã₁/R² = +168.5 V/m (towards the hole, +z). OK (169). Independent check: σ₀ sin²α/(4ε₀) = 168.5 V/m.
- p = 4πε₀RÃ₁ = −1.875 × 10⁻¹¹ C m = −3QR/16; direct ∫z dq = σ₀·2πR³(cos²α − 1)/2 = −QR sin²α/4 = −3QR/16. OK (−1.9 × 10⁻¹¹).
- Exact on-axis formula, derived here: V(z) = (σ₀ 2πR²/4πε₀) ∫_{−1}^{cos α} du/√(R² + z² − 2Rzu) = (σ₀R²/(2ε₀)) (|R+z| − s)/(Rz), s = √(R² + z² − 2Rz cos α); rationalising, (|R+z|² − s²) = 2Rz(1 + cos α), so V(z) = Q(1 + cos α)/[4πε₀(|R+z| + s)]. Matches the page's formula exactly, and a direct numerical ring integral agrees to 10⁻¹² at z = ±10, 0, 5, −25, 30 cm.
- Exact: V(R) = 44.938 V, V(−R) = 77.834 V. OK (44.9, 77.8).
- Three terms: 67.41 − 16.85 − 8.43 = 42.13 V; 67.41 + 16.85 − 8.43 = 75.83 V. OK (42.1, 75.8). The series converges to the exact values (100 terms: 44.929 and 77.853 V), consistent with "more terms close the gap, slowly on the shell".
- Plot: the constants 1348.13 (= Q(1+cos α)/4πε₀ in V cm), 67.4066, 16.8517, 8.42583, 674.066, 1685.17, 8425.83 all check; the dashed curve matches my three-term series at z = −30, −10, −5, 0, 5, 10, 20, 30 cm to 10⁻⁴ V and is continuous at |z| = 10; the exact curve matches the ring integral. Points (10, 44.94) and (−10, 77.83) correct; both curves stay inside the range [0, 90]. Caption claims (falls towards the hole inside, approaches 0.75 nC's 1/r outside, a few volts off at the poles: 2.8 and 2.0 V) are correct.
- "Checking the answer": α = 0 gives Q/(4πε₀r>) (bracket P₁(1) + 1 = 2 for ℓ = 0, zero for ℓ > 0); area below the cap 2πR²(1 + cos α); far field Ã₀/r is the potential of Q(1+cos α)/2. All correct.
- Quiz 1: answer 1 (finite field, zero-length path). Correct, explanation right.
- Quiz 2: answer 3, Q/(4πε₀r>). Correct; explanation right (reads P₋₁ as −1, consistent with (7.25)).
- Quiz 3: R = 0.2 m, Q = 2 nC, α = 90°: V(0) = Q/(8πε₀R) = 44.94 V; full shell 89.88 V. Answer 0 correct.
- Quiz 4: answer 2 (orthogonality). Correct; "2Ã_ℓ′ is left" matches (7.17).
- Flashcards: all four correct; the identity card correctly states P₋₁ = 0 for (7.20) and the cancellation of lower limits for ℓ > 0; Ã₀ card correct.
- Calcs file `calcs/8.07/spherical-shell-circular-hole.yaml`: 44 entries covering every number and the derivation steps (including the exact axis formula as an identity at points above, below, inside and outside); `pytest -k spherical-shell-circular-hole`: 44 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- The page follows the notes in order: problem → (7.1)-(7.4) → (7.5)-(7.10) → (7.2′) → (7.11)-(7.15) → (7.16)-(7.18) → (7.19)-(7.25) and the P₋₁ remark. Nothing in LN7 is left out.
- Added (page's own, labelled as such where it matters): the ℓ = 2 and ℓ = 1 small checks, the "Checking the answer" section (stated as "Two checks of our own"), the worked example and the plot.

## Licensing
- LN7 has no "rights reserved" or "Courtesy of" notice and no figures; the page draws only a generated plot.
- Jackson is named as the origin of the problem (as the notes do); the statement is rewritten ("carries the uniform surface charge density … everywhere except on a cap around the north pole, the region inside the cone θ = α"), not Jackson's wording, and no Jackson text, answer or figure is reproduced. The notes' problem statement is also paraphrased rather than copied; overlapping phrases ("the cone θ = α", "Find the potential everywhere") are short standard wording.
- No OpenStax/LibreTexts material. No verbatim MIT paragraphs found.

## Notes
- Prerequisites exist: separation-of-variables-spherical (8.07), angular-momentum-central-potentials (8.04), gauss-law (8.02); in-text links to the last two go to the right courses.
- leadsTo 8.07 lecture 8: LN8 ("The traceless symmetric tensor expansion and standard spherical harmonics", 11 Oct 2012) does treat the azimuthal case and derives that the traceless symmetric part of ẑ…ẑ gives P_ℓ(cos θ) up to a constant. The `why` is accurate. No cosmology callout on this page; none is needed (the CMB link sits on the LN6 and LN8 pages).
- Symbols: the page-scoped meanings (α half-angle of the hole, rad; ℓ degree; x = cos θ; d; r<, r>; Q full-shell charge; C^(ℓ); p dipole, C m, negative = away from the hole; R with R±; σ₀; δ_ℓ′ℓ; P₋₁ with the 0 / −1 conflict; P_ℓ, P_ℓ±1, P_ℓ′, P₃; Ã₀, Ã₁, Ã₂ in V m; A_ℓ with/without tilde; A_ℓ,in/out, B_ℓ,in/out; V_in, V_out; E_r; ẑ components; ℓ′) are all correct for this page and scoped with `pages: [spherical-shell-circular-hole]`. Two cosmetic points in shared entries, not new meanings: E_z carries the unit N/C while E_r (new) uses V/m (equivalent); the shared `P_0` entry's `name` is "processed power spectrum" (its meaning on this page, "The Legendre polynomial 1", is right). Neither needs a change for this page.
- No em dashes found in the page text.

## Resolution (2026-11-18, by the page author)
- Item 1: the ℓ = 2 example after eq. (7.3) now starts "(Our own check: for ℓ = 2 …", and the ℓ = 1 check of (7.20) under "Doing the integral" now starts "(Our own check, for ℓ = 1: …".
- Item 3: the Summary bullet "The integral" now reads "…, together with P_ℓ(−1) = (−1)^ℓ, gives Ã_ℓ = …".
- Items 2 and 4: no change needed.
- Symbols note: E_z's unit (N/C) belongs to a meaning shared with other pages (electric-potential, method-of-images-uniqueness), not a page-scoped one, so it is left as it is; N/C equals V/m.
- Status set to `reviewed`.
