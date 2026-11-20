---
page: content/year-3/8.06/charged-particles-em-fields-gauge-invariance.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-4-charged-particles-in-em-fields-potentials-and-gauge-invariance/ (read: the page exists and its transcript link is xVZ-lIuIi7A_transcript.pdf, as the page's reading1)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/xVZ-lIuIi7A_transcript.pdf (read: L13.4 transcript, 4 pages, checked page by page with pdftotext -f/-l; no printed footers, PDF page numbers used)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l13-5-charged-particles-in-em-fields-schrodinger-equation/ (read: transcript link is yHfFsuYGgaQ_transcript.pdf, as reading2)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/yHfFsuYGgaQ_transcript.pdf (read: L13.5 transcript, 2 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/pages/lecture-notes/ (read: "Chapter 5: Particles in Electromagnetic Fields [not available]")
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/lecture-videos/ and the L14.1-L14.4 resource pages (read: titles only, for the leadsTo to Lecture 14)
  - content/year-4/8.286/grand-unified-theories.mdx (Lecture 21) and content/year-4/8.286/higgs-field.mdx, magnetic-monopoles.mdx (Lecture 22) (read, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: Charged particles in electromagnetic fields: potentials and gauge invariance

A faithful, well-ordered rewrite of L13.4 and L13.5. Every formula is on the transcript page cited, the Gaussian-unit signs are right, the one slip noted is real, all numbers recompute, and the quiz answers are correct. Only small notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Two curious effects", item 1 (Wilson loop) | L13.4 pp. 3-4: "if that constant is small or that constant is big, it's inequivalent. You won't find the gauge transformation" | "a small constant and a large one are inequivalent: no gauge transformation turns one into the other" | This repeats a simplification of the lecture. Strictly, constants whose line integrals around the loop differ by a multiple of 2πħc/q are related by a gauge function whose phase e^(iqΛ/ħc) is single-valued, and the next lecture (L14.2) turns on exactly this. You could add "in general" or "(for most values; see next lecture)". Also, a "Wilson loop" is strictly the phase e^(iq∮A·dl/ħc) along such a curve, not the curve itself. The page follows the transcript's loose wording, which is acceptable. |
| 2 | info | "Two curious effects", item 1 | L13.4 p. 3: "if you live on a torus or your sample is on a sphere" | Only the torus | Fine as it is. (A sphere is not a good example of a non-contractible loop anyway, so leaving it out is arguably better.) |
| 3 | info | Intro, "Pauli equation" | L13.4 p. 1: "the Dirac and Pauli equation" | Pauli equation only | No change needed. |

Verified and correct:
- Slip: L13.4 p. 2 says "E plus the 1 over c da/dt is the gradient of phi", then "E can be obtained as minus the gradient of phi minus 1 over c da/dt. I hope I have it right. Yes." The bracket on the page is accurate.
- Formulas and citations: ∇·B = 0, B = ∇×A (L13.4 p. 2); Faraday's law with ∇×(E + (1/c)∂A/∂t) = 0 (p. 2); E = −∇Φ − (1/c)∂A/∂t (p. 2); A′ = A + ∇Λ, Φ′ = Φ − (1/c)∂Λ/∂t (p. 2); the cancellation +(1/c)∂t∇Λ − (1/c)∂t∇Λ (pp. 2-3); E(Φ′,A′) = E(Φ,A), B(Φ′,A′) = B(Φ,A) (p. 3); equivalence class (p. 3); Wilson loop (pp. 3-4); torus and flux quantization (p. 4); Schrödinger equation iħ∂ψ/∂t = [(1/2m)((ħ/i)∇ − qA/c)² + qΦ]ψ (L13.5 p. 1); m v̂ = p − qA/c and the Lorentz-force remark (p. 1); "asking too much" (p. 1); ψ′ = e^(iqΛ/ħc)ψ, "not a constant phase. This depends on x and t", ⟨x⟩ unchanged, gauge-invariant operators (p. 2). All of these are on the pages cited. All are spoken board equations; there are no slides.
- Gaussian signs: Φ′ = Φ − (1/c)∂Λ/∂t with A′ = A + ∇Λ keeps E fixed, and ψ′ = e^(+iqΛ/ħc)ψ is the sign consistent with p − qA/c. The page agrees with the transcript on both.
- The quotes "put charitably" (L13.4 p. 1) and "more important than the fields" (p. 1) are accurate.
- Chapter 5 of the notes is marked "[not available]" on the OCW lecture-notes page, as the page says.
- The reading URLs are the transcript links on the two resource pages (HTTP 200). source.url is the L13.4 resource page.

## Arithmetic and answer checks
- (a) curl of (B/2)(−y, x, 0): ∂A_y/∂x − ∂A_x/∂y = B/2 + B/2 = B. Curl of (−By, 0, 0): −∂(−By)/∂y = B. A′ − A = (−By/2, −Bx/2, 0) = ∇(−Bxy/2). Correct; Λ has no t, so Φ′ = Φ.
- (b) qΛ/ħc = (−e)(−Bxy/2)/ħc = eBxy/2ħc. Correct. ℓ² = ħ/eB (SI) = 1.0546e-34/1.602e-19 = 6.583e-16 m², so ℓ = 25.66 nm ≈ 25.7 nm. The Gaussian form ħc/eB with B = 10⁴ G gives the same 6.58e-16 m². Phase = (1e-7)²/(2 × 6.583e-16) = 7.595 ≈ 7.6 rad. Correct. The SI remark (the phase reads qΛ/ħ with Λ in SI units) is right.
- (c) Λ = −cV₀t: ∇Λ = 0 and Φ′ = Φ − (1/c)(−cV₀) = Φ + V₀. ψ′ = e^(−iqV₀t/ħ)ψ gives energy E + qV₀. Correct. 1 statvolt = 299.79 V. For an electron and 1 V, qV₀ = −1 eV. 1 eV/ħ = 1.602e-19/1.0546e-34 = 1.519e15 rad/s ≈ 1.52 × 10¹⁵. Correct.
- calcs/8.06/charged-particles-em-fields-gauge-invariance.yaml: I checked every entry by hand. For example, e-field-gauge-invariant with Λ = a x²t³: ∂x(3ax²t²/c) − ∂t(2axt³/c) = 0. `npm run calc:test -- -k "charged-particles or thermal-transition"` gives 69 passed. Two minor points (info): the `shown` text of `phi-prime-sign` ends in `" cite`, which matches the page's source text but is untidy; and the page-own example entries carry `source: {cite: reading1/reading2 …}` although the numbers are the page's own (harmless, since `origin: page-own`).
- Quiz: Q1 answer 1 (Φ′ = Φ − (1/c)∂Λ/∂t), Q2 answer 3, Q3 answer 0 (p − qA/c), Q4 answer 2 (e^(iqΛ/ħc), position- and time-dependent). All the marked answers and explanations are correct. All four flashcards are correct.
- `npm run content:check`: 0 errors. The only warning for this page was the missing review file.

## Coverage and order
- The page follows L13.4 in order: the recap of the course and the break before the adiabatic approximation; fields versus potentials; B = ∇×A; Faraday's law; E; gauge transformations; the equivalence-class principle; the two curious effects (Wilson loop, torus flux quantization). It then follows L13.5: the Schrödinger equation, p ≠ mv, the velocity operator, the statement of gauge invariance with ψ′, ⟨x⟩, and gauge-invariant operators.
- It stops where L13.5 stops: the proof of gauge invariance and the physics are deferred, as in the transcript ("a nice story that we will develop next time"). Nothing from Lecture 14 is anticipated beyond a one-line pointer.
- Added material: the worked example (original; the transcripts contain no example) and the cosmology callout.

## Licensing
- The L13.4 and L13.5 transcripts carry no "All rights reserved" or "Courtesy of" notice. No figures exist or are reproduced (the torus-from-rectangle and Wilson-loop board sketches are described in words only).
- There is no verbatim copying beyond short phrases, which are quoted ("put charitably"). The worked example (symmetric versus Landau gauge, a constant shift of Φ) is a standard textbook exercise with the page's own numbers, not from MIT. No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and leadsTo 8.286 Lectures 21 and 22: fair and correctly attributed. grand-unified-theories.mdx (Lecture 21) gives Guth's gauge transformation of φ and A (slide 7) as the prototype gauge theory, leading to SU(3)×SU(2)×U(1) and SU(5). higgs-field.mdx (Lecture 22) says the classical gauge freedom becomes a local phase of the electron field, ψ → e^(ieΛ)ψ, and that this is what "U(1) gauge theory" means. magnetic-monopoles.mdx (Lecture 22) covers the GUT monopole problem, which motivates inflation.
- leadsTo 8.06 Lecture 14: correct. OCW lists L14.1 "Gauge invariance of the Schrodinger Equation", L14.2 "Quantization of the magnetic field on a torus", L14.3-L14.4 "Landau levels". "Motivates this Schrödinger equation" matches L13.5 p. 1 ("We're going to motivate that next time"); I did not read the L14 transcripts to confirm it.
- Symbols (data/symbols.json): the new page-scoped meanings (Λ, ψ, ψ′, hat, A, A′, A_x, A_y, B, E, E′, Φ, Φ′, V₀, p, q, v, r, e, x, y, z, L, m, c, t, i) fit their use here, and content:check reports no symbol warnings. Small points (info): the Φ meaning shared with other pages says "−eΦ is the electron's potential energy", while this page uses a general charge (qΦ); ℓ uses the general meaning "a length or distance", whose unit note mentions comoving notches, irrelevant here but harmless.

## Resolution (2026-11-18, by the page author)

- #1: The Wilson-loop passage is reworded: the non-contractible curve is described first, the inequivalence of a small and a large constant is hedged with "in general", and a bracket says that Zwiebach uses the name Wilson loops, that strictly the Wilson loop is the phase built from A along the curve, and that which constants turn out to be equivalent is a question for the next lecture.
- #2, #3: no change, as suggested.
- Calcs: the `shown` text of `phi-prime-sign` no longer ends in `" cite` (it is still unique on the page). The page-own example entries keep their reading citations, with `origin: page-own`.
- Symbols: this page no longer shares the Φ meaning "−eΦ is the electron's potential energy"; it has its own page-scoped meaning, "Φ: the scalar (electric) potential; qΦ is the potential energy of the charge q." The ℓ meaning is left as the general one.
- Status set to `reviewed`.

## Later correction (2026-11-18)

- 8.286 Lecture 22 was taught by a substitute lecturer (Scott Hughes) from Guth's notes, not by Guth (8.286 Lecture 22 transcript p. 1; as `higgs-field.mdx` says). The cosmology callout and the 8.286 Lecture 22 `leadsTo` reason now credit it that way; Lecture 21 stays attributed to Guth. (Found in the review of the Lecture 14 page.)
- The Wilson-loop bracket said that which constant potentials are equivalent "is a question for the next lecture"; Lecture 14 does not take it up, so it now says the question is one "this lecture leaves open".
