---
page: content/year-2/8.04/momentum-space-expectation-values.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes8/ (read: OCW resource page, titled "Lecture Note 8", CC BY-NC-SA 4.0 licence link)
  - Zwiebach, 8.04 Lecture Notes, Chapter 8 ("Lecture 8", February 29, 2016), PDF, 7 pages, printed footers 1-6 (read: pdftotext -layout and per-page extraction)
  - Zwiebach, 8.04 Lecture Notes, Chapters 2-13 (searched only, for any mention of Ehrenfest)
verdict: pass-with-notes
---

# Review: Momentum space and expectation values

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Course syllabus (`content/year-2/8.04/_course.json`, lecture 8 title), not the page itself | Chapter 8 has three sections: "Uncovering momentum space", "Expectation Values of Operators", "Time dependence of expectation values". The word "Ehrenfest" appears nowhere in Chapters 2-13 of the notes. | The syllabus title is "Momentum space, expectation values, the Ehrenfest theorem and commutators". | Drop "the Ehrenfest theorem" from the syllabus title, or keep it only if another MIT source for Lecture 8 (for example the video) covers it. The page handles this honestly: its Ehrenfest step is marked as its own. |
| 2 | info | Worked example, step (d) | (Not in MIT.) | It derives d⟨x⟩/dt = ⟨p⟩/m "for a free particle". | Correct as stated. You could add that the result holds for any V(x), because [x̂, V(x̂)] = 0. This would match the usual statement of Ehrenfest's first relation. |
| 3 | info | Frontmatter `source.title` | The OCW resource is titled "Lecture Note 8". | "MIT 8.04 Lecture 8: Momentum Space, Expectation Values of Operators, Time Dependence of Expectation Values (lecture notes, Chapter 8)" | Acceptable, because it is built from the notes' own section headings. No change is required. |
| 4 | info | Section 1, delta function | Eq. (1.4) has e^{ik(x−x')}. The notes then let k → −k and "record the integral representation of the delta function using the other sign" as (1.5). | The page shows the (1.4) form and cites "eqs. (1.4)–(1.5)". | Optional: cite "eq. (1.4)" for the displayed form. Using (1.4)–(1.5) to mean "both forms" is also defensible. |
| 5 | info (uncertain) | Notation Ψ, Φ, Φ̃ throughout | pdftotext drops the Greek glyphs, so I could not check whether the notes use upper-case or lower-case ψ/φ in Chapter 8. | Upper case Ψ, Φ, Φ̃. | None needed. The physics and normalisation match. |

Checked and found correct (no finding):
- Every citation's equation number and printed page: (1.1) p. 1; (1.2)–(1.3) p. 1; (1.4) p. 1 and (1.5)–(1.6) p. 2; (1.7)–(1.9) p. 2; (1.10)–(1.11) p. 2; (1.12)–(1.17) p. 3; (2.18)–(2.24) p. 4; (2.25)–(2.33) p. 5; (3.34)–(3.43) p. 6. The commutator product rules are (3.41) [A, BC] and (3.42) [AB, C], and the Jacobi identity is (3.43). These are all correct.
- Fourier pair with 1/√(2π) (1.1). Delta function (1.4). δ(ax) = δ(x)/|a| (1.6). Parseval (1.9), "or more generally, Plancherel's theorem".
- The rescaling Φ̃ = Φ/√ħ is correct. From (1.10), ψ = (1/(√(2π) ħ)) ∫ φ(p) e^{ipx/ħ} dp, and setting φ = √ħ φ̃ gives the symmetric pair (1.11) with 1/√(2πħ).
- 3D: (2πħ)^{−3/2} factors (1.14), δ³ with 1/(2π)³ (1.16), and Parseval (1.17).
- ⟨x̂⟩ (2.20), ⟨p̂⟩ in momentum space (2.22), and its position-space form (2.26)–(2.27). The general ⟨Q̂⟩ (2.28).
- ⟨T̂⟩: the second-derivative form (2.30), the manifestly positive form ħ²/(2m) ∫|∂Ψ/∂x|² (2.31), and the momentum-space form (2.32).
- L_z = x p_y − y p_x = (ħ/i)(x ∂_y − y ∂_x) agrees with the third component of (2.33).
- iħ d⟨Q̂⟩/dt = ⟨[Q̂, Ĥ]⟩ (3.37) is stated for operators with no explicit time dependence, as in the notes, and the page correctly describes the role of hermiticity (3.35).

## Arithmetic and answer checks
- Normalisation: |Ψ|² = (2πa²)^{−1/2} e^{−x²/(2a²)} is a normal density with standard deviation a. So the integral is 1, ⟨x⟩ = 0 (even integrand) and ⟨x²⟩ = a². Correct.
- ⟨p⟩ for real Ψ: ∫ΨΨ' dx = ½[Ψ²] from −∞ to ∞ = 0. Correct.
- Ψ' = −x Ψ/(2a²), so ∫|Ψ'|² = ⟨x²⟩/(4a⁴) = 1/(4a²). That gives ⟨T⟩ = ħ²/(2m) · 1/(4a²) = ħ²/(8ma²). Correct.
- Electron with a = 0.10 nm: 197.33² = 38 939.1 and 8 × 511 000 × 0.01 = 40 880. The ratio is 0.9525 eV, so "≈ 0.95 eV" is correct.
- (c) Multiplying by e^{ik₀x} leaves |Ψ|² unchanged. The derivative gains ik₀Ψ, and the real part's contribution is still 0, so ⟨p⟩ = ħk₀. Correct.
- (d) [x̂, p̂] = iħ, so [x̂, p̂²] = [x̂, p̂]p̂ + p̂[x̂, p̂] = 2iħ p̂. Then [x̂, Ĥ] = iħ p̂/m, which gives iħ d⟨x⟩/dt = iħ⟨p⟩/m, so d⟨x⟩/dt = ⟨p⟩/m. Correct.
- Ehrenfest claim: d⟨x⟩/dt = ⟨p⟩/m is the standard first relation of Ehrenfest's theorem, alongside d⟨p⟩/dt = −⟨∂V/∂x⟩. It is correct, and it is fairly attributed as the page's own application, not MIT's.
- Quiz 1: answer 0 (Parseval) is correct.
- Quiz 2: δ(3x) = δ(x)/3, answer 0, is correct (eq. (1.6)).
- Quiz 3: answer 0 (integration by parts gives a square) is correct, and the explanation matches (2.31)–(2.32).
- Quiz 4: answer 0 (constant) is correct, from (3.37).
- Flashcards: all four match the notes: (1.4)/(1.6), (1.11)/(1.13), (2.28) and (3.37).
- `calcs/8.04/momentum-space-expectation-values.yaml`: I recomputed every entry by hand: normalisation 1, ⟨x²⟩ = 0.36 for a = 0.6, 1/(4a²) = 0.6944, 0.9525 eV, ∫δ(3x) = 1/3, and the commutator identity −xψ'' + (xψ)'' = 2ψ' for ψ = sin(qx). All are consistent with the page. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the notes' order: Section 1 (delta function, Parseval, momentum space, 3D), then Section 2 (expectation values, ⟨p⟩ derivation, ⟨Q̂⟩, kinetic energy, other operators), then Section 3 (time dependence, commutator rules).
- Omitted, all minor: the two "exercise" prompts (verify (1.12) from (1.9), and derive the 3D Parseval identity) and the full 3D substitution (1.15), which is only summarised.
- Added: the worked example (Gaussian expectation values, electron kinetic energy, boosted packet, d⟨x⟩/dt). It is clearly marked as the page's own.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notices; I checked this with grep. The OCW page links CC BY-NC-SA 4.0. The notes credit Andrew Turner's LaTeX transcription, but that is an acknowledgement, not an image credit, so it needs no `courtesy:` entry.
- I found no verbatim copying beyond short standard phrases ("Parseval's theorem, or more generally, Plancherel's theorem", "manifestly positive"). The prose is rewritten.
- The worked example is original. Chapter 8 contains no Gaussian example and no numbers.
- No OpenStax or LibreTexts material is used.
- No em dashes appear on the page.

## Notes
- No cosmology callout is present. That is acceptable for this foundation lecture, which has no direct cosmology link. `leadsTo` points to 8.04 Lecture 9 with the reason "Hermitian operators as observables, the measurement postulate, and uncertainty". This matches the Chapter 9 contents (sections "Observables and Hermitian operators" and "Uncertainty").
- Uncertain: whether the notes use upper- or lower-case Greek letters (finding 5). I could not verify this from the text extraction.

## Resolution (2026-11-17, by the page author)

1. Not changed in this run: the run adds only new lesson files, so the Lecture 8 title in `content/year-2/8.04/_course.json` is left for the owner (noted in the run summary). The page itself names Ehrenfest only for its own step (d).
2. Step (d) now adds that the result holds in any potential V(x), since x̂ commutes with V(x̂).
3. No change.
4. The delta-function formula now cites notes p. 1, eq. (1.4) alone.
5. No change.

Status set to `reviewed`.
