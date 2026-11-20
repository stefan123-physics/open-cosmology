---
page: content/year-2/8.04/schrodinger-equation.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes5/ (read: resource page checked for title and CC BY-NC-SA licence; the PDF "MIT8_04S16_LecNotes5.pdf", Zwiebach, Lecture 5, 8 printed pages, read in full from a local copy with pdftotext, page by page to confirm printed footer numbers)
  - Zwiebach 8.04 lecture notes, Lectures 6 and 7 (read, local copies; only to check the forward link and the uncertainty-principle bracket)
verdict: pass-with-notes
---

# Review: Momentum and position operators and the Schrödinger equation

All equation numbers and printed page numbers were checked against `pdftotext -f N -l N` per page. Mapping of the notes: p. 1 eqs. (1.1)–(1.5); p. 2 (1.6)–(1.12); p. 3 (1.13)–(1.19); p. 4 (1.20), (2.1)–(2.5) and the "explicit i" paragraph; p. 5 (2.6)–(2.12); p. 6 (2.13)–(2.17), matrix mechanics and the heading "Two basic properties"; p. 7 the two properties, (2.18)–(2.23); p. 8 (2.24)–(2.28), Section 3, (3.1)–(3.2). Every `at=` on the page matches this mapping.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Two features of the equation" paragraph, and quiz question 4 with its explanation | Notes p. 4: "it is impossible to find a solution for real Ψ" (the same overstatement as the page). | "it has no real solutions"; quiz: "no real solutions Ψ (other than zero)", explanation "both can only be zero". | The argument only shows that both sides must vanish: ∂Ψ/∂t = 0 and ĤΨ = 0. That does not force Ψ = 0: for V = 0, Ψ = a + bx (a, b real) is a real, time-independent solution, and any real zero-energy stationary state is one too. Reword to "no real solution that changes in time" (or "no real solution except static ones with ĤΨ = 0"), change the quiz's "(other than zero)" accordingly, and replace "both can only be zero" with "both sides would have to vanish, so Ψ could not evolve". A short bracket noting the notes' wording would follow the writing rule on lecturer slips. |
| 2 | warning | Bracket after the uncertainty principle (section "Linear operators and commutators") | Notes p. 6: the product of uncertainties "must always exceed ħ/2". Lecture 7 notes p. 3, eq. (1.15), state Δx Δp ≥ ħ/2 ("one can show") and "the product of uncertainties has a lower bound". | "always at least ħ/2 ... (The notes say "exceed"; the bound can be reached exactly, as a later lecture shows for Gaussian packets.)" | The correction to "at least" is right (Gaussians saturate the bound). But in the notes for Lectures 6–8 I found no lecture that shows Gaussian saturation: Lecture 7 states the bound without proof and evolves a Gaussian without computing Δx Δp. Unless a specific later 8.04 lecture does show it (uncertain; not checked beyond Lecture 8), cite Lecture 7 eq. (1.15) for "≥" and say "a Gaussian packet reaches it exactly" without attributing a demonstration to a later lecture. |
| 3 | info | Trace argument bracket ("Matrices that do not commute") | Notes p. 6: "One can show that there are no finite size matrices that commute to give a number times the identity", without a reason. | Gives the trace reason, marked as the page's own. | The argument is correct: for n×n matrices tr(AB) = tr(BA), so tr[A, B] = 0, while tr(iħ·1ₙ) = iħn ≠ 0. The phrase "the page's own one-line reason" reads oddly to a student; suggest "(a short reason, not given in the notes: ...)". |
| 4 | info | "What the wavefunction means" | Notes p. 8: Ψ gives "the probability" (the boxed statement), then (3.1) with |Ψ|². | "Born proposed instead that Ψ gives the probability ..." | Faithful to the notes, but strictly it is |Ψ|² that gives the probability density; "that |Ψ|² gives the probability density" is clearer and matches (3.1) directly. |
| 5 | info | Conventional wave equation | Notes p. 4 use V for the wave speed in (1.20) and for the potential elsewhere. | Same double use. | Matches the notes and `data/symbols.json` scopes V with both meanings on this page. Optionally write "(here V is a speed, not the potential)". |

## Arithmetic and answer checks
- Eq. (1.3): (ħ/i)(ik) = ħk. Correct.
- Eq. (1.6): iħ(−iω) = ħω. Correct.
- Eq. (1.10): p̂²/2m = (ħ/i)²/(2m) ∂²/∂x² = −ħ²/(2m) ∂²/∂x². Correct.
- Plane-wave check (1.13)–(1.14): left side ħωΨ, right side −ħ²(ik)²/(2m)Ψ = ħ²k²/(2m)Ψ. Correct. ω(k) = ħk²/(2m) in (1.17) follows from (1.14). Correct.
- Group velocity (1.19): dω/dk = ħk/m = p/m. Correct.
- [x̂, p̂]ψ = x(ħ/i)ψ′ − (ħ/i)(ψ + xψ′) = −(ħ/i)ψ = iħψ. Correct.
- Pauli products: σ₁σ₂ = diag(i, −i), σ₂σ₁ = diag(−i, i), difference diag(2i, −2i) = 2iσ₃. Recomputed [σ₂, σ₃] = 2iσ₁ and [σ₃, σ₁] = 2iσ₂ (σ₃σ₁ = [[0,1],[−1,0]], σ₁σ₃ = [[0,−1],[1,0]], difference [[0,2],[−2,0]] = 2iσ₂). Correct.
- 3D: (ħ/i)∇e^{i k·x} = ħk e^{i k·x}; p̂² = (ħ/i)²∇² = −ħ²∇². Correct.
- Worked example (a): λ = 2π/20 nm = 0.3142 nm ("≈ 0.314"). E = 197.33² × 400 / 1,022,000 = 38,939.1 × 400 / 1,022,000 = 15.24 eV ("≈ 15.2"). Correct.
- Worked example (b): x²(ħ/i)ψ′ − (ħ/i)(2xψ + x²ψ′) = −2(ħ/i)xψ = 2iħxψ, so [x̂², p̂] = 2iħx̂. Correct.
- Worked example (c): σ₂σ₃ = [[0, i], [i, 0]], σ₃σ₂ = [[0, −i], [−i, 0]], difference [[0, 2i], [2i, 0]] = 2iσ₁. Correct.
- Quiz 1 (answer ħkΨ): correct. Quiz 2 (not definite momentum, still a solution): correct; matches notes (1.15)–(1.16). Quiz 3 (iħ): correct. Quiz 4: marked answer is the notes' reason, but the question's "(other than zero)" and the explanation's "both can only be zero" are not strictly true (finding 1).
- Flashcards: all four correct.
- `calcs/8.04/schrodinger-equation.yaml` covers the commutator, dispersion, a Pauli entry, the trace identity and all three example numbers; values agree with my recomputation. (The `pauli-12` entry is a token check of one matrix entry, not the full matrix product.)

## Coverage and order
- The page follows the notes' order exactly: Section 1 (momentum operator, energy operator, free equation, general solution, Fourier time evolution, group velocity, complex wavefunctions, not a conventional wave equation), Section 2 (potential, Hamiltonian, position operator, linear operators, commutator, [x̂, p̂], uncertainty remark, correspondences (2.14), Pauli matrices, matrix mechanics, two basic properties, 3D), Section 3 (Born's interpretation, normalization).
- Not shown as formulas but covered in words: (1.7)–(1.9), (1.12), (1.15)–(1.16), (2.1)–(2.2), (2.6)–(2.9), (2.14), (2.18)–(2.21), (2.26)–(2.27).
- Left out: the exercise after (1.17) (verify that (1.17) solves the equation), the component form (2.22), the explicit 3D Hamiltonian (2.25) (implied by (2.28)), and Born's dates (1882–1970). All minor.
- Added: the worked example and the trace argument (both marked as the page's own).
- leadsTo 8.04 Lecture 6 ("normalization, the probability current, and Hermitian operators"): matches the Lecture 6 notes' contents (normalization and time evolution, Hermitian Ĥ in Section 2, probability current in Sections 3–4). No cosmology callout; none is needed.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice (grep of the full text); the OCW page links CC BY-NC-SA 4.0. The footnote crediting Sarah Geller for the LaTeX transcription is an acknowledgment, not a third-party rights notice.
- No verbatim copying found. Closest paraphrases: "two operators are equal when they do the same thing to everything" (notes: "they give the same result acting on anything"), the matrix-mechanics sentence (Heisenberg 1925, Born and Jordan), and "experiments never find fractions of particles going off in many directions, but whole particles". These are rewritten sentences of factual content; acceptable. "the most fundamental commutation relation in quantum mechanics" is a short phrase.
- The worked example is original: the notes have no numerical example, and [x̂², p̂] and [σ₂, σ₃] are standard exercises not worked in the notes.
- No OpenStax or LibreTexts material.

## Notes
- All 17 `<Formula>` citations (page and equation numbers) verified correct; all formulas use the notes' notation (ħ/i rather than −iħ, Ê then Ĥ, σᵢ, δᵢⱼ).
- The prose citation "(notes p. 4)" for the two features, "(notes pp. 6–7)" for the two properties and "(notes pp. 7–8)" for 3D match the printed pages.
- Uncertain: whether any 8.04 Spring 2016 lecture after Lecture 8 shows Gaussian saturation of Δx Δp = ħ/2 (finding 2); I checked only the notes for Lectures 6–8.

## Resolution (2026-11-17, by the page author)

1. "No real solutions" corrected: the page now says both sides would have to vanish, so a real wavefunction cannot change in time (with Ψ = a + bx as a real, unchanging free solution), and marks the notes' stronger wording. Quiz 4 asks why a real wavefunction cannot evolve, and its explanation matches.
2. The uncertainty bracket now cites the Lecture 7 notes, eq. (1.15), for Δx Δp ≥ ħ/2 and says Gaussian packets reach the bound, without crediting a lecture for it.
3. The trace remark now reads "a short reason, not given in the notes".
4. Born's rule sentence adds "more precisely, |Ψ|² gives the probability density".
5. Added "(here V is the wave's speed, not a potential)" after eq. (1.20).

Status set to `reviewed`.
