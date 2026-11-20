---
page: content/year-2/8.04/delta-well-node-theorem-oscillator.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes13/ (read: local PDF n13.pdf, Zwiebach, "Lecture 13: Delta Function Potential, Node Theorem, and Simple Harmonic Oscillator", printed pp. 1–12; page boundaries and equation numbers checked page by page with pdftotext -f N -l N)
verdict: pass-with-notes
---

# Review: The delta-function well, the node theorem and the oscillator equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Flashcard "Node theorem" | p. 5: the theorem is stated for a potential that is **continuous** and has V → ∞ as \|x\| → ∞ | "For a one-dimensional potential, the bound states ordered by energy … have 0, 1, 2, … nodes" (no conditions) | Add the conditions, e.g. "For a continuous one-dimensional potential with V → ∞ at large \|x\|, …". The body text (line 79) states them correctly; only the flashcard drops them, and a card is read on its own. |
| 2 | info | Notation | Notes write the unit-free energy as script ℰ (eq. 3.37) and the integration half-width as ε (eqs. 1.11–1.13) | Page uses ε for the energy and η for the half-width; only the change # → γ is stated (line 61) | The renaming is sensible (it avoids two meanings of ε on one page). Optionally add one bracket, e.g. after the jump formula "(the notes call this half-width ε)" and at eq. (3.38) "(the notes write ℰ)", so a reader moving between page and notes is not confused. |
| 3 | info | Line 122, bracketed note on the "odd coefficients" slip | p. 10: "a solution that contains only odd coefficients, a₂, a₄, …", followed by (3.53) a₀ + a₂u² + a₄u⁴ + ⋯ "would be even" | "(The notes call the even series's coefficients "odd", a slip.)" | Correct: the coefficients a₂, a₄ are even-indexed and the series is even, so "odd" is a slip. Could be made sharper as "(The notes call a₂, a₄, … "odd coefficients", a slip for even-indexed.)" Optional. |
| 4 | info | Plot, third curve | n/a (page's own plot) | The n = 2 curve has no label; the caption says the unlabelled curve is n = 2 | Fine as it is, if label layout forced it. If there is room, a label "n = 2" (e.g. as a point label near u = 0, ψ ≈ −0.53) would be clearer than the caption note. |
| 5 | info | "The harmonic oscillator: setting up" | p. 7: also gives V(x) = ½mω²x² (3.29), notes that the constant V(x₀) has no effect on the dynamics, and introduces ħω as the characteristic energy | Not mentioned except ħω on p. 8 | Optional; nothing is wrong. |

No formula, citation or physics errors found. Every `<Formula>` matches the notes:
- (1.1) p. 1; (1.5) p. 2 (eqs. 1.2–1.6 are on p. 2); (1.7)–(1.9) and (1.13)–(1.14) p. 3; (1.15)–(1.17) and (2.18)–(2.20) p. 4; node theorem statement and (2.21) p. 5; the two "impossible" cases p. 5–6 (Figs. 5, 6); the no-swap (degeneracy) argument at the top of p. 7; (3.22)–(3.28) p. 7; (3.30)–(3.37) p. 8; (3.38)–(3.45) p. 9; (3.46)–(3.53) p. 10; (3.54)–(3.60) p. 11; (3.61)–(3.70) p. 12. All page and equation numbers in the page's `at=` attributes and prose agree with the printed footers.
- The jump formula is the notes' Δ₀ definition (1.13) combined with (1.14), with ε renamed η: lim(ψ′(η) − ψ′(−η)) = −(2mα/ħ²)ψ(0) ✓.
- (1.17): −ħ²κ²/2m = −½ mα²/ħ² with κ = mα/ħ² (1.16) ✓; γ = ½ ✓ (notes: "# takes the value 1/2").
- (3.32) a² = ħ/(mω) ✓; (3.37) ε = 2E/(ħω) ✓; (3.38) ✓; (3.43)–(3.44) h″ − 2uh′ + (ε − 1)h = 0 ✓; (3.52) ✓; (3.64) ✓; (3.66)–(3.67) ✓; (3.68) generating function ✓; (3.70) ✓ with N_n unspecified, as the caption says.

## Arithmetic and answer checks
Recomputed in Python:
- Example (a): |E_b| = 511000 × 1.0² / (2 × 197.33²) = 6.5615 eV ✓ (6.56). 1/κ = 197.33² / 511000 = 0.07620 nm ✓ (0.0762). With ψ = √κ e^(−κ|x|) (normalized: ∫κe^(−2κ|x|)dx = 1 ✓), P(|x| < 1/κ) = 1 − e^(−2) = 0.86466 ✓ (0.865). Units: α in eV·nm, so E = mc²α²/(2(ħc)²) is dimensionally right ✓.
- Example (b): H₂″ = 8, −2uH₂′ = −16u², 4H₂ = 16u² − 8, sum 0 ✓. Recursion with ε = 5: a₂ = (1 − 5)/2 = −2 ✓, a₄ = (4 + 1 − 5)/12 · a₂ = 0 ✓; h = 1 − 2u² = −½(4u² − 2) = −½H₂ ✓.
- Example (c): 0.50 × (0.5, 1.5, 2.5) = 0.25, 0.75, 1.25 eV, spacing 0.50 eV ✓.
- Plot: the three expressions are π^(−1/4)e^(−u²/2), √2 π^(−1/4) u e^(−u²/2), π^(−1/4)(2u² − 1)/√2 e^(−u²/2), which equal H_n e^(−u²/2)/√(2ⁿ n! √π) for n = 0, 1, 2 ✓. Numerical ∫ψ²du over [−4, 4] = 1.0000, 1.0000, 0.99999 ✓. Extremes: max 0.751, min −0.644 (n = 1) and −0.531 (n = 2), all inside the range [−0.8, 1] ✓. Nodes: 0, 1 (u = 0), 2 (u = ±1/√2) ✓, as the caption says.
- Quiz 1: "Exactly one" ✓ (notes p. 3 and (1.17)).
- Quiz 2: jump −(2mα/ħ²)ψ(0) ✓ (1.14); "at a node it has no effect" ✓ (p. 4).
- Quiz 3: a_{j+2}/a_j → 2/j ✓ (3.55); e^{u²} has c_{j+2}/c_j = 2/(j + 2) ≈ 2/j ✓ (3.57); ψ ∼ e^{u²/2} ✓ (3.58).
- Quiz 4: n = 2, 0.50 × 2.5 = 1.25 eV ✓; no other choice equals the answer.
- Flashcards: delta-well state and energy ✓; oscillator energies and ψ_n ∝ H_n(u)e^(−u²/2), u = x√(mω/ħ) ✓; Hermite equation and H₀–H₃ ✓. Node-theorem card: see finding 1.
- Calcs file `calcs/8.04/delta-well-node-theorem-oscillator.yaml` matches the page's numbers. Two small points (not page errors): the `ground-state-equation` entry compares an expression with itself, so it checks nothing (it should be the second derivative of e^(−u²/2), e.g. `deriv("exp(-u**2/2)", "u", 2)` if the harness supports it, against (u² − 1)e^(−u²/2)); and the `hermite-H3` entry's `shown` string `'H_3 = 8u^3 - 12u" cite'` contains a stray fragment of the MDX attribute.

## Coverage and order
- The page follows the notes' order: section 1 (delta potential: intuition, units, solving, discontinuity, energy), section 2 (infinite well recap, node theorem, screened potential, two assumptions, the two cases, no swapping), section 3 (classical oscillator, Taylor expansion, quantum Hamiltonian, units cleaned, asymptotics, h(u), quick polynomial argument, series and recursion, non-termination, termination, energies, Hermite polynomials, generating function, ψ_n(x)).
- Left out (minor): eq. (3.29), the remark that V(x₀) has no effect, the intermediate steps (3.33)–(3.36), the coefficient table (3.50)–(3.51), (3.60)–(3.63), and the 2ⁿ convention of (3.65) is mentioned only as "normalized to start with 2ⁿuⁿ" (fine). The notes' general remark that ψ(x₀) = ψ′(x₀) = 0 implies ψ ≡ 0 (p. 5) is used implicitly in both bullets ✓.
- Added: the worked example, the plot with standard normalization (marked as the page's addition) and the quiz.
- No cosmology callout; acceptable, since the AGENTS.md rule asks for one only where a real connection exists. `leadsTo` 8.04 Lecture 15 matches the syllabus title ("The harmonic oscillator: Hermite polynomials and creation and annihilation operators") ✓.

## Licensing
- `grep -i "rights reserved\|courtesy"` on the notes text: no matches. The notes are under the course's CC BY-NC-SA licence; the only credit is "Andrew Turner transcribed Zwiebach's handwritten notes", which concerns the notes themselves, not a reproduced figure.
- Figs. 1–6 are not reproduced; the page says so, and its plot is generated from formulas ✓.
- No verbatim copying found. Closest phrases ("after all you could integrate it on a computer" → "a computer would happily integrate it"; "no assumption or loss of generality" → "without loss of generality"; "any minimum is locally flat") are rewritten or standard terminology.
- The worked example (electron, α = 1.0 eV nm; Hermite check; ħω = 0.50 eV) is original; the notes have no numerical examples. No OpenStax or LibreTexts material.

## Notes
- No em dashes in the page.
- Notation changes (γ for #, ε for script ℰ, η for the integration half-width ε) are consistent throughout the page, quiz and flashcards; only γ is announced (finding 2).
- The "odd coefficients" bracket is accurate (finding 3).
- Verdict pass-with-notes: no errors; finding 1 is worth fixing before `status: reviewed`.

## Resolution (2026-11-17, by the page author)

1. The node-theorem flashcard now states the conditions: a continuous potential with V → ∞ as |x| → ∞.
2. The introduction now lists all three notation changes: γ for the notes' #, η for their half-width ε, and ε for their script E.
3. The bracket now reads: the notes call a₂, a₄, … "odd"; they are the even-indexed ones.
4. The n = 2 curve now has its own label.
5. No change.
6. `ground-state-equation` now checks ψ₀″ = (u² − 1)ψ₀ with a finite-difference second derivative. The `" cite` fragment in the `hermite-H3` quote is deliberate: it pins the quote to the formula, since the same text also appears in a flashcard.
7. No change.

Status set to `reviewed`.
