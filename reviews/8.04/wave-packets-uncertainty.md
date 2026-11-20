---
page: content/year-2/8.04/wave-packets-uncertainty.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes7/ (read: Zwiebach, Lecture 7 notes, 8-page PDF (7 pages of notes plus the OCW terms page), text extracted with pdftotext; equation numbers located per page with `pdftotext -f N -l N`; URL returns HTTP 200)
  - Zwiebach, Lecture 8 notes (read, only to check the `leadsTo` claim)
  - content/year-2/8.04/de-broglie-waves-group-velocity.mdx and schrodinger-equation.mdx (read, only to check the page's note on the 1/√(2π) convention)
verdict: pass-with-notes
---

# Review: Wave packets, uncertainty and the spreading of a free packet

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A flat momentum distribution", the sentence after eq. (1.16), and worked example (d) | Eq. (1.17): "Δx ≈ 2π/Δk → ΔxΔk ≈ 2π", given as an estimate without further comment | "Its central peak ends at the first zeros, x = ±2π/Δk. Estimating the width as Δx ≈ 2π/Δk …" | Matches the notes, but read next to the page's own definition Δx = 2x₀ (full width) it looks inconsistent: the central peak runs from −2π/Δk to +2π/Δk, so its full width is 4π/Δk. Say that 2π/Δk is the distance from the centre to the first zero (or the width at about half height), which is the notes' choice; either way the product is a constant of order a few. Same wording in example (d) ("so Δx ≈ 3.1 × 10⁻¹⁰ m"). |
| 2 | info | `leadsTo` (Lecture 8) | Lecture 8 notes cover momentum space and Parseval's theorem (§1), expectation values (§2) and the time dependence of expectation values, iħ d⟨Q⟩/dt = ⟨[Q, H]⟩, and commutator identities (§3). The words "Ehrenfest theorem" do not appear in the notes. | "Momentum space, Parseval's theorem, expectation values and the Ehrenfest theorem." | Matches the course syllabus title in `_course.json`, and the §3 result is the general form of Ehrenfest's theorem, so it is acceptable. "the time dependence of expectation values" would follow the notes more closely. |
| 3 | info | "Evolving a free packet", Gaussian: "(a homework problem in the course)" | "We will not do the calculations here … You will discover when evolving the Gaussian … The goal of your calculation will be to determine a(t)" | Calls it a homework problem | This is a fair reading of "you will discover" but the notes do not say "homework" in so many words. Optional: "left to the student in the notes". |
| 4 | info | Flat-distribution example | Notes' example text says "Find Ψ(x, t)" (a slip: only Ψ(x, 0) is computed) | Computes Ψ(x, 0) | Correct; no change needed. |
| 5 | info | Section 1 | Notes remark that Fig. 2 plots \|Ψ(x, 0)\| because Ψ is complex | Not mentioned (the page does say Ψ has real and imaginary parts, both centred on x = 0) | Optional. |

## Arithmetic and answer checks
- Citations, all checked against the printed footer page numbers: (1.1)–(1.2) p. 1; (1.3)–(1.9) p. 2; (1.10)–(1.15) p. 3; (1.16), (1.17), (2.18) p. 4; (2.19)–(2.27) p. 5; the "≪ / ≈" remark, (2.28), (3.1)–(3.4) p. 6; (3.5)–(3.8) p. 7. Every `at=` and every in-text page/equation reference on the page is correct, including "pp. 1–7", "eqs. (1.4)–(1.7) p. 2", "(1.10)–(1.11) p. 3", "(2.22)–(2.23)", "(2.24)–(2.25)" and "(2.27)" on p. 5, and "(3.7)–(3.8) p. 7".
- Formulas: (1.1)/(1.2) with 1/√(2π), the reality condition (1.3), (1.9), (1.12), (1.15) ΔxΔp ≥ ħ/2, (1.16), (2.19), (2.21) phase e^{−(i/2)(k−k₀)²ħt/m}, (2.23) (Δp)²t/(ħm) ≪ 1, (2.24)–(2.25), (2.27), (3.3), (3.4), (3.6) τ = 2ma²/ħ and (3.7) all agree with the notes in physics and notation.
- Eq. (1.16) recomputed: (1/√(2πΔk))·2 sin(Δk x/2)/x = √(Δk/2π)·sin(Δk x/2)/(Δk x/2). Correct; first zeros at Δk x/2 = ±π, i.e. x = ±2π/Δk. Correct.
- Eq. (3.7): [(2π)^{−1/4}a^{−1/2}]² = 1/(√(2π) a), exponent −x²/(2a²). Correct.
- Reality-condition argument (conjugate, k → −k, sign flips cancel, zero Fourier transform implies zero function): correct.
- Notes' exercise: m_e(10⁻¹⁰ m)²/ħ = 8.6 × 10⁻¹⁷ s ≈ 10⁻¹⁶ s; for 10⁻² m, 0.86 s ("about a second"). Correct.
- Worked example: (a) ħ/(2Δx) = 1.0546 × 10⁻³⁴/(2 × 10⁻¹⁰) = 5.273 × 10⁻²⁵ kg m/s; Δv = 5.273 × 10⁻²⁵/9.109 × 10⁻³¹ = 5.79 × 10⁵ m/s ("hundreds of km/s": 579 km/s). (b) 1.6726 × 10⁻²⁷ × 10⁻²⁰/1.0546 × 10⁻³⁴ = 1.586 × 10⁻¹³ s ≈ 1.6 × 10⁻¹³ s; m_p/m_e = 1836, "nearly two thousand". (c) 2 × 9.109 × 10⁻³¹ × 10⁻¹⁸/1.0546 × 10⁻³⁴ = 1.73 × 10⁻¹⁴ s ≈ 1.7 × 10⁻¹⁴ s. (d) 2π/(2.0 × 10¹⁰) = 3.14 × 10⁻¹⁰ m. All correct; all match `calcs/8.04/wave-packets-uncertainty.yaml`.
- Plot: `sin(D*x/2)/(D*x/2)` with value 1 at x = 0 is eq. (1.16) divided by its peak √(Δk/2π), as the caption says. Over the slider range Δk = 0.8–5 the first zeros (±7.85 to ±1.26) stay inside the domain [−12, 12]; the deepest minimum of sinc is −0.217, inside the y range [−0.35, 1.2]. Caption statements (smaller Δk widens the packet; zeros at ±2π/Δk) are correct.
- Quiz: Q1 answer 0 (Φ*(−k) = Φ(k)) correct; "Φ real" alone and "symmetric about its peak" are correctly wrong. Q2 answer 0 (doubles) correct. Q3 answer 0 correct; the explanation's quadratic term ½(k − k₀)²ħ/m is the quadratic term of ω, correct. Q4 answer 0 (t ≪ m(Δx)²/ħ) correct; explanation matches (2.23)–(2.25).
- Flashcards: all three correct (ΔxΔk ≈ 1, ΔxΔp ≥ ħ/2; t ≪ m(Δx)²/ħ and τ = 2ma²/ħ; the evolution recipe).
- Convention note: correct. Lecture 7 notes put 1/√(2π) in front of both integrals (eqs. 1.1–1.2, 2.18, 3.1–3.3); the earlier pages (de-broglie-waves-group-velocity, eq. 2.22 of Lecture 4; schrodinger-equation, eq. 1.17 of Lecture 5) write Ψ = ∫dk Φ(k)e^{i(kx−ωt)} without it, as the Lecture 4/5 notes do.

## Coverage and order
- The page follows the notes' order exactly: §1 Fourier pair, reality condition, width argument, ΔxΔk ≈ 1, ΔxΔp, Heisenberg bound, flat-step example; §2 Taylor expansion of ω, shape-change phase, conditions (2.22)–(2.27), interpretation, ≪ versus ≈, electron exercise; §3 four-step recipe and Gaussian example with τ and the density (3.7)–(3.8).
- Nothing in the notes is left out except trivial remarks (Fig. 2 plots |Ψ|; eq. (2.26) as an intermediate step; the ħc / mc² route of the numerical exercise). Nothing is added beyond the original worked example and plot.

## Licensing
- No figures reproduced: Figs. 1–5 of the notes are not used; the one graph is generated from eq. (1.16).
- No "All rights reserved" or "Courtesy of" notices in the notes (grep of the extracted text); the only credit line is the transcription note (Andrew Turner), which concerns the LaTeX version and does not need repeating.
- No verbatim copying found. Closest paraphrases are short: the sign-flip remark in the reality proof, and the interpretation of Δp t/m ≪ Δx ("velocity uncertainty through time produces position uncertainties comparable to the width"); both are reworded and acceptable.
- Worked example is original: (a) reuses the notes' Δx = 10⁻¹⁰ m but asks a different question (the momentum and velocity bound); (b)–(d) are new situations and numbers.
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"` block on the page; the only forward link is the 8.04 Lecture 8 `leadsTo` (see finding 2). Not a problem for a quantum-mechanics foundation page at this point.
- `references: {}` and no `readings`: fine, as everything is cited to the notes (`cite="mit"`).
- No errors found; finding 1 is the only one worth changing before setting `status: reviewed`.

## Resolution (2026-11-17, by the page author)

1. The flat-distribution paragraph and example (d) now say the central peak's full width is 4π/Δk and that the notes' estimate Δx ≈ 2π/Δk is the distance from the centre to the first zero.
2. No change (matches MIT's syllabus title).
3. "a homework problem in the course" changed to "which the notes leave to the student".
4.–5. No change.

Status set to `reviewed`.
