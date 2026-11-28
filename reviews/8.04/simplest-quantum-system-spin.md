---
page: content/year-2/8.04/simplest-quantum-system-spin.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/the-simplest-quantum-system/ (read; its transcript is 87eb1b43…_-8mPXAsX3DY.pdf = reading1)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/87eb1b43458c045cdb0cf678de50c28c_-8mPXAsX3DY.pdf (read, 3 PDF pages)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/1aa1caad11a0ebe332065e9440fbf410_8NKsBpjXRt0.pdf (read, 4 PDF pages; matches segment "Hamiltonian and emerging spin angular momentum" = reading2)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/44c69b5eca28dccea96037ec70eb5cec_3Cij8HYKXOk.pdf (read, 3 PDF pages; matches segment "Eigenstates of the Hamiltonian" = reading3)
verdict: pass-with-notes
---

# Review: The simplest quantum system and the discovery of spin

Writer: Opus. Reviewer: Opus (same model).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Angular momentum appears", last bracket | (not in the lecture: a site addition) | "Historically, spin was found from experiment instead, in the Stern–Gerlach experiment with which 8.05 begins." | Oversimplified: Stern–Gerlach (1922) was designed to test space quantization of orbital angular momentum and was read as electron spin only after Uhlenbeck and Goudsmit proposed spin in 1925 from atomic spectra. Replace with: "(Historically, spin came from experiment instead: Uhlenbeck and Goudsmit proposed it in 1925 to explain atomic spectra, and the Stern–Gerlach experiment of 1922, with which 8.05 begins, was then understood as a measurement of it.)" |
| 2 | warning | Callout "Spin and the 21 cm line" | (site addition) | "Atomic hydrogen is the most common gas in the universe" | Most of the universe's hydrogen today is ionized (intergalactic gas), so the claim is wrong for *atomic* hydrogen. Write: "Hydrogen is the most common element in the universe, and neutral hydrogen gas fills the discs of galaxies, so this line maps the gas in our Galaxy and in others; …" |
| 3 | info | Inner product paragraph | Transcript p. 3: "take the value of the second wave function at the same point complex conjugating it", and the column is read out as "alpha one, beta one". | States the correct rule, and in brackets notes both slips. | Checked against the transcript text: both slips are there as described; the bracket is accurate and follows AGENTS rule 4. No change. (They may be transcription errors rather than Zwiebach's; "In the transcript" covers that.) |
| 4 | info | "Spin states along z, x and y" | The lecture writes "up", "down" and column vectors. | Uses kets $|{\uparrow}\rangle$, $|{\pm x}\rangle$, while earlier sections use the inner product $(\phi,\psi)$. | Labels marked as the page's own; mixing (φ, ψ) with kets is harmless but a one-line remark ("kets are just names for the columns") would help a Year II reader. Optional. |

## Arithmetic and answer checks
Recomputed independently with NumPy (complex matrices):
- σ₁σ₂ = diag(i, −i) = iσ₃, [σ₁, σ₂] = 2iσ₃: correct. With S = cσ, [S_x, S_y] = iħS_z holds for c = ħ/2 only (checked c = 0.5, 0.7 with ħ = 1: true, false), supporting the "1/2 is forced" statement and quiz 4.
- S_y(1, i) = (ħ/2)(1, i): correct. (1, ±1)/√2 eigenvectors of σ₁, (1, ±i)/√2 of σ₂: correct.
- Worked example χ = (3/5, 4/5): norm 1; P(±z) = 0.36, 0.64; ⟨S_z⟩ = −0.14ħ; P(+x) = 0.98, P(−x) = 0.02, ⟨S_x⟩ = 0.48ħ; overlap with |+y⟩ = (0.4243 − 0.5657i) = (3/5 − 4i/5)/√2, |·|² = 0.5, ⟨S_y⟩ = 0; mean spin (ħ/2)(0.96, 0, −0.28), length ħ/2, i.e. 16.3° below the x axis. All correct. Example is original (the lecture has none).
- Quiz: Q1 "4" (index 1) correct; Q2 iħS_z (index 0) correct; Q3 (|↑⟩ + i|↓⟩)/√2 (index 2) correct, explanation right; Q4 (index 3) correct, and "σ₃ has eigenvalues ±2" is properly wrong (±1). Positions 1, 0, 2, 3: varied.
- Flashcards correct.
- calcs file: all `shown:` strings found verbatim on the page; calc tests pass (38 passed for both pages). The 21 cm wavelength is a `kind: fact` (1420.4 MHz → 21.1 cm): correct.
- Formula citations checked page by page: stationary states and Hermitian conjugate reading1 p. 1; two-point wavefunction p. 2; inner product p. 3; general Hermitian matrix reading2 p. 1; Pauli matrices pp. 1–2 (written p. 1, named p. 2); frequencies and spin operators p. 2; commutator p. 3; ω·S p. 4; up/down reading3 p. 1; x states p. 2; y states p. 3. All right; "board" plausible throughout (no slides exist; each is dictated as written).

## Coverage and order
- Follows the three segments 24.2, 24.3, 24.4 in MIT's order and covers every point: particle in a box and delta well too complicated; what QM needs; two points; interferometer, box with partition, spin; inner product and the 8.05 "infinite column"; Hermitian = conjugate transpose; general 2 × 2 Hermitian matrix; Pauli matrices; dropping the identity (oscillator ½ħω); units, S_i, commutators; Schrödinger "five minutes"; ω·S, precession, NMR; S_z eigenstates; 1/2 forced; photon spin 1; x and y states; complex numbers essential; qubits, entanglement, Bell inequalities.
- Additions, marked: the |±x⟩/|±y⟩ labels, the worked example, the Stern–Gerlach history bracket (finding 1), the 21 cm callout (finding 2).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the three transcripts or segment pages. No figures. Text rewritten in own words; no copied sentences found (short phrases such as "the simplest quantum system", "spin one-half" only). No OpenStax or LibreTexts material.

## Notes
- `leadsTo` targets exist: 8.05 L3 (position-momentum-stern-gerlach), L4 (spin-one-half-states-operators), L16 (photon-states-spin-precession), L25 (hyperfine-21cm-adding-angular-momenta); the callout links to rotation-curves and the 8.05 hyperfine page resolve. 21 cm physics in the callout (F = 0 below F = 1, Doppler tracing of rotation, redshifted 21 cm as an early-universe probe) is right apart from finding 2.
- Symbols: `content:check` 0 errors, no symbol warnings for this page. Page-scoped meanings fit: a and b (state coefficients), a₀…a₃ (Hamiltonian coefficients, J), H, z, x, y, ε (grid spacing), σ, σ_i, ω, ω_i, S, S_i, e (Euler), E, r, ψ, Ψ, χ, ↑, ↓. No cosmology meaning leaks onto the page.
- No em dashes; `## Summary` present.

COUNTS: errors=0 warnings=2 info=2

Writer: Opus. Reviewer: Opus (same model).

## Resolution (2026-11-28, by the page author)

- Warning 1: the history bracket now says that Uhlenbeck and Goudsmit proposed spin in 1925 from atomic spectra, and that the Stern–Gerlach experiment of 1922 was then understood as a measurement of it.
- Warning 2: the 21 cm callout now says hydrogen is the most common element and that neutral hydrogen gas fills the discs of galaxies.
- Info items left as they are.
