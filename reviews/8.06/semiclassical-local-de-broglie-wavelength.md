---
page: content/year-3/8.06/semiclassical-local-de-broglie-wavelength.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l6-5/ (read: resource page, saved copy; title "L6.5 Semiclassical approximation and local de Broglie wavelength", its transcript link is the reading1 PDF below)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/4dd6627c0017c9e1db18c8f3f3c4b9ee_4BM58741VOg.pdf (read: L6.5 transcript, 6 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-3-semiclassical-approximation/ (read: notes chapter 3, section 3.1 on PDF pp. 1-3 as text; pp. 2 and 3 also rendered as images to read eqs. (3.1.2)-(3.1.16) exactly)
verdict: pass-with-notes
---

# Review: The semiclassical approximation: local momentum and the phase of the wavefunction

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph | L6.5 p. 1: "We will also consider, after we've finished WKB, time-dependent perturbation theory, where still things start slowly varying in time" (garbled). Notes section 3.1 says nothing about what comes after WKB | "time-dependent perturbation theory, for slow variation in time, comes later (L6.5 transcript p. 1; notes section 3.1)" | Time-dependent perturbation theory treats small time-dependent perturbations, not slow ones; slow variation in time is the adiabatic approximation (8.06 Lectures 15-16, per the syllabus in `_course.json`). Write e.g. "time-dependent perturbation theory, for Hamiltonians that change in time, comes later", and drop "notes section 3.1" from that citation (it is only in the transcript). |
| 2 | warning | Formula "Schrödinger equation with the local momentum" | Notes eqs. (3.1.4)-(3.1.6) are one-dimensional: −ħ²∂²ψ/∂x² = p²(x)ψ. The Laplacian form is the lecture's (L6.5 p. 3: "All these vectors, that's why I'm Laplacian") | −ħ²∇²ψ = p²(x)ψ, cited `reading2` at eqs. (3.1.4)-(3.1.6) | The physics is right, but the cited equations are written with ∂²/∂x². Either write ∂²/∂x² to match the notes, or cite `reading1` at "p. 3" (or both, "p. 3; notes eqs. (3.1.4)-(3.1.6) in one dimension"). Note that the notes say the chapter "will focus on one-dimensional problems"; the page never says so. |
| 3 | warning | Formula "Free particle" | Notes (3.1.16) and the line after it give only S = p·x − Et and ∇S = p. ∂S/∂t = −E is said in the lecture (L6.5 p. 6: "the derivative of S with respect to time is minus the energy") | Formula includes ∂S/∂t = −E, cited only `reading2` at eq. (3.1.16) | Add the transcript to the citation, e.g. `cite="reading1" at="p. 6"` for the formula, or mention eq. (3.1.16) and L6.5 p. 6 together. The formula itself is correct. |
| 4 | info | "WKB and the semiclassical idea", "The mathematician Harold Jeffreys" | Transcript p. 1 and notes 3.1: "a mathematician, Jeffreys" (no first name) | "Harold Jeffreys" | Correct: Sir Harold Jeffreys (1891-1989), the British mathematician and geophysicist, is the J of JWKB. The added first name is not attributed to Zwiebach, so no change needed. Uncertain detail: his paper (Proc. London Math. Soc., series 2, vol. 23) is often dated 1924 by publication; the page follows Zwiebach's 1923, which is fine as cited. |
| 5 | info | Classical action paragraph | L6.5 p. 6: "spatial derivatives are the momentum, and the time derivatives are the energy" (sign loose; just before, for the free particle, he says "minus the energy") | "its gradient is the momentum and its time derivative is minus the energy" | The page is correct (Hamilton-Jacobi: ∂S/∂q = p, ∂S/∂t = −H) and consistent with the lecture's free-particle line. Optionally add a bracket that the lecture says "the energy" here, per writing rule 4; not required since the sign is right in the lecture two paragraphs earlier. |
| 6 | info | "The phase gradient as a momentum" | Notes (3.1.15): p(x) ≃ ∇S, "not of general validity"; for "basic" WKB solutions ∇S is the classical local momentum | p(x) ↔ ∇S, "an analogy, not a rule" | Fine; notation (↔ for ≃) differs harmlessly. |
| 7 | info | Worked example title | — | "An electron climbing a potential step by step" | "step by step" may suggest a step potential, while the problem says the potential rises slowly. Consider "An electron climbing a slowly rising potential". |
| 8 | info | Section "WKB and the semiclassical idea" | L6.5 p. 1: "classical physics gives you intuition about the quantum wave function" | "classical physics gives the intuition for the quantum wavefunction" | Short phrase, close to the transcript but acceptable (standard explanation of the name). |

## Arithmetic and answer checks
- (a) √(2 × 511,000 × 10) = 3196.87 eV → "≈ 3,197 eV" correct; λ = 1239.84/3196.87 = 0.38783 nm → 0.388 correct. At V = 7.5 eV: K = 2.5 eV, √(2 × 511,000 × 2.5) = 1598.44 eV, λ = 0.77566 nm → 0.776 correct; "four times smaller, so p halves" correct.
- (b) √(2 × 511,000 × 2) = 1429.69 eV → "≈ 1,430" correct; κ = 1429.69/197.33 = 7.245 nm⁻¹ → 7.25 correct; 1/κ = 0.1380 nm → 0.14 correct.
- (c) 10 nm ≈ 13-26 wavelengths of 0.39-0.78 nm: "reasonable" is fair. As an extra check with the refined criterion the next lecture introduces (|dλ/dx| small): for a linear rise of 7.5 eV over 10 nm, dλ/dx = λ₀·½(1 − V/E)^(−3/2)·(dV/dx)/E reaches 0.388 × 0.5 × 8 × 0.075 = 0.12 at the top, still small, so the verdict holds. 0.5 nm is about one wavelength (between 0.39 and 0.78 nm): correct.
- Gradient algebra: ∇ψ = (∇ρ/(2√ρ)) e^{iS/ħ} + (i/ħ)∇S ψ; ψ*∇ψ = ½∇ρ + (i/ħ)ρ∇S; Im = ρ∇S/ħ; J = (ħ/m)·ρ∇S/ħ = ρ∇S/m. Correct, matches (3.1.11)-(3.1.14).
- Free particle: S = p·x − Et, ∇S = p, ∂S/∂t = −E, ρ = 1. Correct.
- Quiz 1 (λ(x) = h/p(x) = 2πħ/√(2m(E − V))): answer 0 correct; explanation correct.
- Quiz 2 (J = ρ∇S/m): answer 0 correct; explanation correct.
- Quiz 3 (p̂²ψ = p²(x)ψ is exact but not an eigenvalue equation): answer 0 correct; explanation matches notes after (3.1.6) and L6.5 p. 3.
- Flashcards: all three correct; card 3 matches L6.5 p. 2 and notes 3.1 ("small and slowly varying").
- Calcs file `calcs/8.06/semiclassical-local-de-broglie-wavelength.yaml`: every formula recomputed by hand above and agrees; `npm run calc:test` passes (4723 passed). Minor (info): `one-wavelength` is a page-own fact but its `source` points to notes section 3.1, which says nothing about 0.5 nm; `range-low`/`range-high` reuse the same formulas as `lambda-10`/`lambda-2-5` (harmless).

## Citation checks
- Notes equation numbers verified on the rendered pages: (3.1.1) λ = h/p; (3.1.2) p² ≡ 2m(E − V); (3.1.3) λ(x) ≡ h/p(x) = 2πħ/p(x); (3.1.4)-(3.1.6) Schrödinger equation and p̂²ψ = p²ψ [1D, finding 2]; (3.1.7), (3.1.8) k and κ; (3.1.9), (3.1.10) polar form and ρ = |Ψ|²; (3.1.11), (3.1.12) gradient and Ψ*∇Ψ; (3.1.13), (3.1.14) current; (3.1.15) p ≃ ∇S; (3.1.16) free particle [∂S/∂t not there, finding 3]. All numbers correct.
- Transcript page citations, checked with `pdftotext -f N -l N`: p. 1 (WKB names, 1926, Jeffreys 1923, JWKB, slowly varying in space, time-dependent perturbation theory later); pp. 1-2 (slit/aperture, λ ≪ L); p. 2 (ħ → 0, units, other universes, comparison with unit-free perturbation parameter, refined to "varies very slowly"); pp. 2-3 (local momentum and local wavelength: p² on p. 2, "2πħ/p(x)" runs onto p. 3); p. 3 (p̂²ψ = p²(x)ψ, "illegal eigenvalue", exact); p. 4 (allowed/forbidden, k and κ, polar form, units of S); p. 5 (gradient, current, surfaces of constant phase, fluid analogy); pp. 5-6 (not a rigorous identification); p. 6 (free particle, classical action). All correct.

## Coverage and order
- Order follows L6.5 exactly (history → λ and the classical limit → ħ → 0 → local momentum and wavelength → p̂²ψ = p²ψ → k and κ → polar form → current → ∇S as momentum → free particle → action), and notes section 3.1 in the same order.
- Omitted (info): the lecture's aside that S is "the beginning of the path integral formulation" (p. 4); the notes' statement that the chapter is one-dimensional (see finding 2). Both optional.
- Added beyond MIT: the worked example (own numbers, electron with E = 10 eV). Fine.
- The Zeeman part of Lecture 6 (L6.1-L6.4) is on its own page, as intended; the opening paragraph makes clear this page is the last video.

## Licensing
- `grep -il "rights reserved\|courtesy"` on L6.5.txt and ch3.txt: no notices. No figures are used (the lecture's board sketches of the potential and of surfaces of constant phase are not redrawn).
- No OpenStax or LibreTexts material. No verbatim paragraphs: sentences spot-checked against the transcript and notes (the history paragraph, the eigenvalue remark, the current and fluid paragraphs) are rewritten; only short standard phrases coincide (finding 8).

## Forward links
- `leadsTo` 8.06 Lecture 7 ("the WKB expansion in powers of ħ, the approximate wavefunctions, when they are valid, and how to join them across turning points"): L7 segments are "The WKB approximation scheme", "Approximate WKB solutions", "Validity of the WKB approximation", "Connection formula stated and example". Correct.
- No `Callout kind="cosmology"`; none needed.

## Notes
- No errors found; the warnings are a doubtful physics description of time-dependent perturbation theory (finding 1) and two citations whose content is in the transcript rather than the cited notes equations (findings 2, 3).
- Video not compared (owner decision); review is against transcript and notes only.

## Resolution (2026-11-18, by the page author)

Warnings:
1. The opening now says only that approximations for changes in time come later, citing the transcript alone. It also says that the chapter works in one dimension.
2. The Schrödinger equation with the local momentum is now in the notes' one-dimensional form (−ħ² d²ψ/dx² = p²ψ), with a bracket saying that Zwiebach writes it with the Laplacian (L6.5 p. 3).
3. The free-particle formula now shows only S and ∇S (notes eq. (3.1.16)); ∂S/∂t = −E follows in the text, cited to L6.5 p. 6.

Info:
- The example title is now "An electron climbing a slowly rising potential".
- Calcs `one-wavelength` now cites L6.5 p. 2 (λ compared with the length scale).
- Jeffreys' first name and 1923 (as in the source), the loose sign in "the time derivatives are the energy" (the page states the correct −E), and the close phrase are left as they are.
