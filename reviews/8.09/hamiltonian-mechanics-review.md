---
page: content/year-4/8.09/hamiltonian-mechanics-review.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: local copy of Chapter 1, rendered page images pp. 8-12 compared equation by equation, pdftotext for search; Section 1.3 read for the quiz and leadsTo claims)
  - Chapter 4 notes (MIT8_09F14_Chapter_4.pdf) (read: section headings and Section 4.2, for the leadsTo claim)
  - Chapters 2, 3, 5, 6, 7 notes (searched only: for "Liouville" and for Chapter 5's use of Hamiltonians)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (not opened; the PDF it links to was read)
verdict: pass-with-notes
---

# Review: Hamiltonian mechanics: phase space, the Legendre transformation and a pendulum on a sliding block

I checked every `<Formula>` against the rendered notes pp. 8-12. Equation numbers and printed pages are all correct. Every formula matches the notes or is algebraically equal to them; I re-derived eqs. (1.30), (1.35), (1.39)-(1.47) by hand. I found no errors in physics, numbers or citations.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A pendulum hanging from a sliding block", paragraph after eq. (1.44) | Eq. (1.45) gives θ̇ and ṗ_θ in full, and eq. (1.46) gives their small-angle forms with p_x kept (p. 11). | Displays neither. It points to "notes eq. 1.45" and corrects that equation's last denominator, which the reader cannot see on the page. It then goes straight to eq. (1.47), with small angles and p_x = 0 applied in one step. | Display θ̇ and the corrected ṗ_θ as a `<Formula>` (cite eq. (1.45), p. 11, with the bracketed slip note under it). Optionally mention that eq. (1.46) is the small-angle form before p_x = 0 is set. Full coverage of the lecture favours showing them. |
| 2 | info | Formula "The change in H, from the definition" (eq. 1.28) | Eq. (1.28) shows all five terms, with p dq̇ and (∂L/∂q̇) dq̇ struck through. | Gives the full expression in the text, then displays the form after the cancellation, cited as eq. (1.28). | Acceptable, since the text explains the cancellation. Optionally write "eq. (1.28), after the cancellation". |
| 3 | info | Formula "Lagrangian with the constraints imposed" (eq. 1.39) | Gives the unsimplified form, m₁ẋ²/2 + (m₂/2)(ẋ² + 2ℓcosθ ẋθ̇ + ℓ²cos²θ θ̇² + ℓ²sin²θ θ̇²) + m₂gℓcosθ. | Gives the simplified form and says it was simplified. | None needed. The two are equal (calcs `pendulum-lagrangian`, and checked by hand). |
| 4 | info | Formula "The velocity matrix and its inverse" (eqs. 1.41-1.42) | The prefactor is 1/(m₁m₂ℓ² + m₂²ℓ² sin²θ). The matrix is written T̂. | 1/(m₂ℓ²(m₁ + m₂ sin²θ)). Written T, T⁻¹ (index form T_jk in the general recipe). | None needed. The two are equal, and the notation change was an agreed decision. |
| 5 | info | Formula "Frequency of the small oscillations", at="Section 1.2, p. 12" | Gives θ̈ = ṗ_θ/(μℓ²) = −(m₂g/μℓ)θ right after eq. (1.47). It writes no ω². | ω² = m₂g/(μℓ) = (g/ℓ)(1 + m₂/m₁), marked "(the second form is ours)". | Optionally cite as "text after eq. (1.47), p. 12". The first form follows at once from the notes. |
| 6 | info | "Constraints first, then the Hamiltonian" | Diagram eq. (1.29) (p. 9). | Describes the diagram in words, without its equation number. | Optionally add "(the diagram of eq. 1.29)". |
| 7 | info | "Constraints first, then the Hamiltonian", second paragraph | "the language of phase space with Liouville's Theorem". | "the geometry of phase space with Liouville's theorem". | Harmless rewording. Optionally write "language". |

### The flagged slip in eq. (1.45): confirmed
H = N/(2m₂ℓ²D) − m₂gℓcosθ, with D = m₁ + m₂sin²θ and N = m₂ℓ²p_x² + (m₁+m₂)p_θ² − 2m₂ℓcosθ p_x p_θ. Then:
- ∂N/∂θ = 2m₂ℓ sinθ p_x p_θ
- ∂D/∂θ = 2m₂ sinθ cosθ
- −∂H/∂θ = sinθcosθ N/(ℓ²D²) − m₂gℓ sinθ − sinθ p_x p_θ/(ℓD)

So the last denominator is ℓ(m₁ + m₂ sin²θ). The notes print ℓ(m₁ + m₂ sinθ) (rendered p. 11, checked on the page image), so the page's bracketed correction is right. The slip is not repeated anywhere on the page. It has no effect on the notes' eq. (1.46), where D → m₁ in either version. Calcs entry `pendulum-pthetadot-slip` checks the corrected form against a numerical derivative, and it passes.

## Arithmetic and answer checks
- Eq. (1.30): q̇_i ∂L/∂q̇_i = 2T for symmetric T_jk. Correct (Euler's theorem for degree 2, an accurate addition by the page).
- Eq. (1.35): with p = a + T q̇, q̇·p − L = ½(p − a)·T⁻¹·(p − a) − L₀. Re-derived, correct.
- Eq. (1.36): a_j = eA_j, T_jk = mδ_jk, L₀ = −eφ gives (p − eA)²/2m + eφ. Correct.
- Eq. (1.40): p_x = (m₁+m₂)ẋ + m₂ℓcosθ θ̇ = m₁ẋ + m₂ẋ₂. This is the total horizontal momentum, matching the notes' "center-of-mass momentum". p_θ is correct.
- det T = m₂ℓ²(m₁+m₂) − m₂²ℓ²cos²θ = m₂ℓ²(m₁ + m₂sin²θ). Correct.
- Eq. (1.43) correct. Eq. (1.44): ∂H/∂p_x = p_x/D − cosθ p_θ/(ℓD). Correct.
- Eq. (1.47) with p_x = 0 and θp_θ² dropped: ẋ = −p_θ/(ℓm₁), θ̇ = (m₁+m₂)p_θ/(m₁m₂ℓ²) = p_θ/(μℓ²), ṗ_θ = −m₂gℓθ. Correct.
- ω² = m₂g/(μℓ) = (g/ℓ)(m₁+m₂)/m₁ = (g/ℓ)(1 + m₂/m₁). Correct. The limit m₁ ≫ m₂ gives g/ℓ, as the page says.
- Plot: the curve sqrt(1 + x) and the point (0.25, 1.118) are correct (√1.25 = 1.1180).
- Worked example (spherical pendulum, the page's own):
  - L, the diagonal T and H are correct.
  - ṗ_θ = p_φ²cosθ/(mℓ²sin³θ) − mgℓ sinθ is correct.
  - The steady circle gives φ̇² = g/(ℓcosθ). This is the standard conical pendulum (it also needs p_θ = 0, which is implicit in "steady").
  - 9.81/(0.50 × 0.5) = 39.24 s⁻², √ = 6.264 rad/s, 2π/6.264 = 1.003 s. Matches the page's 39.2 s⁻², 6.26 rad/s and 1.00 s.
- Quiz 1 (answer index 1, p_r²/2m + p_θ²/2mr²): correct.
- Quiz 2 (index 2, mv + eA): correct.
- Quiz 3 (index 1, 1.12): m₂/m₁ = 0.25, √1.25 = 1.118 → 1.12. Correct. The rod length cancels, as the calcs note says.
- Quiz 4 (index 1, T quadratic and V = V(q)): correct. The explanation's claim that the next section shows H and the energy coming apart is supported: Section 1.3 item 5 (p. 13 onwards) gives an example where H = E but energy is not conserved, and one where H ≠ E but H is conserved.
- Flashcards: all five are correct.
- Calcs file: `calc:test -k hamiltonian-mechanics-review` gives 16 passed. Every number on the page has an entry. I found no number missing from the calcs file.

## Coverage and order
- The page follows pp. 8-12 in the notes' order:
  - canonical momenta and phase space
  - Legendre transformation, eqs. (1.24)-(1.26)
  - the N = 1 proof, eqs. (1.27)-(1.28)
  - interpretation of the two equations
  - cone example and constraints (1.29), the Dirac reference, advantages of each formalism
  - special case H = E, eqs. (1.30)-(1.31)
  - general recipe, eqs. (1.32)-(1.35), with (1.33) described in words
  - charge in EM fields (1.36)
  - sliding-block pendulum, eqs. (1.37)-(1.47)
- Left out: the display of eqs. (1.45) and (1.46) (difference 1).
- Added, and marked as the page's own: Euler's theorem remark, the ω² form, the plot, the spherical-pendulum worked example.
- Section 1.3 starts on p. 12 and is correctly left to a later page.
- The claim "the posted notes have no section on Liouville's theorem" was checked: in Chapters 1-7 (all chapters on OCW), "Liouville" appears only once, in Chapter 1 p. 9.
- leadsTo 1.3: correct. Section 1.3 turns a cyclic coordinate (absent from L or H) into a conserved p_j, and item 5 discusses when H is the energy and when it is conserved.
- leadsTo 4.2: correct. Section 4.2 is "Poisson Brackets and the Symplectic Condition".
- The intro's claim that the course builds on this in Chapters 4 and 5 is correct: Chapter 4 is canonical transformations and Hamilton-Jacobi, and Chapter 5 is perturbation theory written for H(q, p, t).

## Licensing
- Chapter 1 has no "All rights reserved" or "Courtesy of" notices (grep of the text).
- The page reuses no figure. Fig. 1.3 (the sliding-block pendulum) is described in words only, and the plot is generated from a formula.
- No sentence is copied. A few sentences stay close to the notes' wording:
  - "promoted to coordinates ... on an equal footing with the q_i" (notes: "promoted to coordinates on equal footing with the generalized coordinates q_i")
  - "this course imposes constraints only on Lagrangians, never in the Hamiltonian formalism" (notes: "in this course we will only consider constraints imposed on Lagrangians and not in the Hamiltonian formalism")
  - "one uses p_i = ∂L/∂q̇_i to build H and then leaves L behind" (notes: "We can use ... to construct H from L and then forget about L")

  These are short, single clauses of standard content, acceptable under the writing rules. Rewording them further would be optional.
- The worked example and the quiz numbers are original.
- There are no OpenStax or LibreTexts sources.

## Notes
- No em dashes on the page (grep count 0).
- `content:check`: 0 errors. The only warning for this page is the missing review file, which this review supplies.
- Symbol meanings scoped to the page fit their uses:
  - μ is the reduced mass, φ is the scalar potential and also the azimuth in the example, T is the kinetic energy and its matrix, p_x is the total momentum, A has unit T m.
  - E's meaning mentions both the energy and the electric field of the Lorentz force. The page writes the field as $\vec E$. Fine.
  - θ uses the general "An angle." That is adequate, but a page-scoped meaning ("the pendulum angle from the downward vertical; in the worked example, the polar angle") would help the popup. Optional.
- There is no cosmology callout. None is needed: this is a review of foundations with no direct cosmology link, and leadsTo stays within 8.09.

## Resolution (2026-11-19, by the page author)

- Warning 1: eq. (1.45) is now displayed as a Formula (θ̇ and ṗ_θ, with the corrected denominator ℓ(m₁ + m₂ sin²θ)), and the slip note sits under it. A new calcs identity checks θ̇ = ∂H/∂p_θ; the existing slip check covers ṗ_θ. Eq. (1.46) is still described in words (the page goes straight to the p_x = 0 small-angle form, eq. 1.47).
- Paraphrase: the three clauses close to the notes ("equal footing", "constraints only on Lagrangians", "forget about L") are reworded.
- Other info notes and the optional θ meaning: no change. `npm run content:check` and `npm run calc:test` pass.
