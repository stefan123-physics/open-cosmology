---
page: content/year-2/8.04/probability-current.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes6/ (read: Zwiebach, Lecture 6 notes, 9-page PDF, text extracted with pdftotext; printed footer page numbers 1-8 checked per page; URL returns HTTP 200)
verdict: needs-changes
---

# Review: Normalization, Hermitian operators and the probability current

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "A total derivative" (cites p. 5, eq. (3.3)) | ∂ρ/∂t = −∂/∂x [ (ħ/2im)(Ψ* ∂Ψ/∂x − Ψ ∂Ψ*/∂x) ] = −∂/∂x [ (ħ/m) Im(Ψ* ∂Ψ/∂x) ]; consistent with J = (ħ/2im)(Ψ*Ψ' − ΨΨ*') in eq. (3.10) | `\frac{\partial\rho}{\partial t} = \frac{\hbar}{2im}\frac{\partial}{\partial x}(\dots) = -\frac{\partial}{\partial x}(\frac{\hbar}{m}\text{Im}(\dots))`: the middle expression has the wrong sign, and the two equalities contradict each other (since (ħ/2im)(z − z*) = (ħ/m) Im z) | Write `= -\frac{\partial}{\partial x}\left(\frac{\hbar}{2im}\left(\Psi^*\frac{\partial\Psi}{\partial x} - \Psi\frac{\partial\Psi^*}{\partial x}\right)\right)`. Verified independently: from the Schrödinger equation ∂ρ/∂t = (iħ/2m)∂(Ψ*Ψ' − ΨΨ*')/∂x, and iħ/2m = −ħ/2im; a numerical finite-difference check on a test wavefunction gives ∂ρ/∂t = +2.559, the page's middle expression −2.559, and −∂J/∂x = +2.559. Consider adding a formula check for this to the calcs file. |
| 2 | info | "Conservation, at last": "So the Hamiltonian is Hermitian on these wavefunctions" | The notes conclude only dN/dt = 0 (eq. (3.11)), i.e. condition (2.11) with Ψ₁ = Ψ₂; they do not state the full Hermiticity (2.12) at this point | Concludes Hermiticity | Correct in substance (for a real potential, ∫Ψ*ĤΨ real for all Ψ implies Ĥ Hermitian by polarization), but goes beyond the notes; either say "so condition (2.11) holds" or add a brief bracketed note that the general case follows. |
| 3 | info | "With the explicit Hamiltonian the potential terms cancel (for a real potential)" | Notes write V(x,t)Ψ*Ψ − V(x,t)Ψ*Ψ without stating that V is real (it is implicit) | Adds "(for a real potential)" | Fine as an added clarification. |
| 4 | info | Section 3, eq. (3.13) | Notes' (3.13) has a typo "dt" inside the integral where dx is meant | Page writes dx correctly | Nothing needed. |

## Arithmetic and answer checks
- Citations: every equation number and printed page checked against the footer page numbers: (1.3)–(1.4) p. 1; (1.5) p. 1, (1.6) p. 2 (page says pp. 1–2, correct); (1.7)–(1.8), (1.10)–(1.11) p. 2; (2.3)–(2.6), (2.8)–(2.9) p. 3; (2.10), (2.12)–(2.14) p. 4; (3.1)–(3.6) p. 5; (3.7)–(3.13) p. 6; (4.1)–(4.7) p. 7; analogy table p. 8. All correct.
- Formulas (1.4), (1.7)–(1.8), (2.3)–(2.4), (2.8)–(2.9), (2.10), (2.12), (2.13), (3.4)–(3.6), (3.9)–(3.11), (3.13), (4.1)–(4.2), (4.6)–(4.7) match the notes in content and notation. Only (3.3) is wrong (finding 1).
- Units paragraph: [Ψ] = L^(−1/2), [Ψ*∂Ψ/∂x] = L^(−2), [ħ/m] = L²/T, [J] = 1/T; 3D: [Ψ] = L^(−3/2), [J] = 1/(T L²). Correct, matches (3.7)–(3.8), (4.3)–(4.4).
- Worked example (a): ∫e^(−2|x|/a)dx = a, C = 1/√a; (2/a)∫₀^a e^(−2x/a)dx = 1 − e^(−2) = 0.8647 ≈ 0.865. Correct.
- Worked example (b): Ψ*Ψ' = ik|A|², Im = k|A|², J = ħk|A|²/m. ħk/m_e = 1.0546e-34 × 1e10 / 9.109e-31 = 1.158e6 m/s ≈ 1.16e6; with |A|² = 1 m⁻¹, J ≈ 1.16e6 s⁻¹. Correct.
- Worked example (c): Ψ* = Ae^(−ikx) + Be^(ikx), Ψ' = ik(Ae^(ikx) − Be^(−ikx)); product = ik[(A² − B²) + AB(e^(2ikx) − e^(−2ikx))] and ik·AB·2i sin 2kx = −2kAB sin 2kx is real, so J = (ħk/m)(A² − B²). Algebra correct; A = B gives zero current. Correct.
- Plot: curve exp(−2|x|) is a|Ψ|² against x/a for Ψ = e^(−|x|/a)/√a; area in these units ∫e^(−2|u|)du = 1; points at x = ±1, y = e^(−2) = 0.1353; caption's 1 − e^(−2) ≈ 0.865. All correct.
- Quiz 1: Ψ/√4 = Ψ/2, density |Ψ|²/4. Answer 0 correct.
- Quiz 2: Hermitian. Answer 0 correct; explanation matches (2.10)–(2.12).
- Quiz 3: −0.5 + 0.2 = −0.3 per second, decreasing. Answer 0 correct.
- Quiz 4: 1/time. Answer 0 correct; explanation matches (3.7)–(3.8), (4.4).
- Flashcards: all three correct and consistent with the notes (p. 2, p. 4, eqs. (3.4)–(3.6)).
- calcs/8.04/probability-current.yaml: numbers match the page. The `ex-two-waves` identity check is tautological (`k*(A**2 - B**2) + 0*sin(2*k*x)` vs `k*A**2 - k*B**2`): it does not test the algebra of part (c). Suggest replacing it with an explicit complex expression, e.g. Im of conj(A e^{-ikx}... ) computed directly, if the harness supports complex numbers (uncertain).

## Coverage and order
- The page follows the notes' order: Section 1 (normalization, conditions at infinity, 1/N, normalizable, plane waves), Section 2 (ρ, N(t), conservation of probability, Hermitian operator, Hermitian conjugate, importance of Hermitian operators), Section 3 (total derivative, current, units, dN/dt = 0, segment), Section 4 (3D, units, Q_V, Gauss, analogy).
- Omitted (minor): the restatement of the Schrödinger equation (1.1)–(1.2); the consistency check (1.9); the explicit integral form (2.7); Q_V's definition is given inline without eq. (4.5); the notes' remark that the 3D conditions at infinity were not discussed but make the flux at infinity vanish; the analogy table (summarised in prose). None changes the physics.
- Added: the plot and worked example (page's own, labelled as such).

## Licensing
- The PDF carries only the standard OCW footer (CC BY-NC-SA via OCW terms); no "All rights reserved" or "Courtesy of" notices (grep found none). The acknowledgment that Sarah Geller transcribed the notes is not a third-party credit requirement.
- Prose is rewritten. Close echoes are short: "does not truly describe a single particle" (notes: "does not truly represent a single particle"), "Pleasantly" (notes: "a pleasant surprise"), "perfect analogy". Acceptable as short phrases; optionally reword the first.
- The worked example is original: the notes contain no worked example; the plane-wave current is standard textbook material, not copied from these notes.
- No OpenStax or LibreTexts material seen.

## Notes
- No cosmology callout; `leadsTo` points to 8.04 Lecture 7 (wave packets, uncertainty, Fourier transforms). I did not read the Lecture 7 notes, so the description of Lecture 7's content is unverified (uncertain).
- The introduction's "notes pp. 1–8" is correct.

## Resolution (2026-11-17, by the page author)

1. Fixed: the "A total derivative" formula now reads ∂ρ/∂t = −(ħ/2im) ∂/∂x(Ψ*∂Ψ/∂x − Ψ∂Ψ*/∂x), consistent with its last expression and eq. (3.3); calcs entry `current-sign` added.
2. "So the Hamiltonian is Hermitian on these wavefunctions" replaced by "So dN/dt = 0: the condition on Ĥ found above holds for these wavefunctions".
3.–4. No change.
5. `ex-two-waves` now checks Im(Ψ*Ψ′) = k(A² − B²) from the real and imaginary parts of Ψ and Ψ′, not an expression against itself.
7. No change.
8. "does not truly describe a single particle" reworded to "on its own it cannot represent one particle".
9. The Lecture 7 notes (read for the next page) cover wave packets, uncertainty and Fourier transforms; Parseval's theorem is in the Lecture 8 notes, so the leadsTo wording stands.

Status set to `reviewed`.
