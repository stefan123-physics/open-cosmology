---
page: content/year-2/8.04/8-04-problem-set-3.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps3_2016/ (read: ps3.pdf / ps3.txt)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes4/ (read: printed pages checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes5/ (read: printed pages checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes6/ (read: printed pages checked)
verdict: pass-with-notes
---

# Review: Problem Set 3: Commutators, stationary phase, Galilean invariance and the probability current

## Blind solve

### My answers (written before opening the full page)
- 1a, 1b: expand both sides; the B A C / A C B cross terms cancel. Shown.
- 1c: expanding gives 12 terms that cancel in pairs. Shown.
- 1d: [x^n, p] = i hbar n x^(n-1)  -> box `n*x^(n-1)`; [x, p^n] = i hbar n p^(n-1) -> box `n*p^(n-1)`.
- 1e: [xp, x^2] = x[p, x^2] = -2 i hbar x^2 -> box `-2*x^2`; [xp, p^2] = [x, p^2] p = 2 i hbar p^2 -> box `2*p^2`.
- 2a: stationary phase (phase of Phi is 0, phase of integrand kx): peak at x = 0. Psi = sqrt(pi)/L exp(i k0 x) exp(-x^2/(4L^2)); |Psi| = sqrt(pi)/L exp(-x^2/(4L^2)).
- 2b: phase k(x - x0): peak at x = x0. Psi = sqrt(pi)/L exp(i k0 (x - x0)) exp(-(x - x0)^2/(4L^2)); |Psi| = sqrt(pi)/L exp(-(x-x0)^2/(4L^2)).
- 3a: f = exp(i theta), theta(x, t) = -m v x/hbar + m v^2 t/(2 hbar) (= -m v x'/hbar - m v^2 t'/(2 hbar) in primed variables), f(0,0)=1.
- 3b: Psi' = A exp(i(k'x' - w't')), k' = k - m v/hbar (p' = p - m v), w' = w - k v + m v^2/(2 hbar) = hbar k'^2/(2m) (E' = p'^2/2m).
- 4: J = (hbar/(2 m i)) (Psi* grad Psi - Psi grad Psi*) = (hbar/m) Im(Psi* grad Psi).
- 5: d gamma/dt = 0 (H Hermitian, same H for both packets); |gamma(t)| stays equal to its small initial value; it does not grow.
- 6a: J = 0.
- 6b: J = N^2 S'/m.
- 6c: J = hbar k (|A|^2 - |B|^2)/m (cross terms cancel).

### Comparison with the page (one line per answer id)
- p1-xn: page `n*x^(n-1)`; mine the same. Agree.
- p1-pn: page `n*p^(n-1)`; mine the same. Agree.
- p1-xpx2: page `-2*x^2`; mine the same. Agree.
- p1-xpp2: page `2*p^2`; mine the same. Agree.
- p2-a-peak: page choice 0 "At x = 0"; mine x = 0. Agree.
- p2-a-abs: page `sqrt(pi)/L*exp(-x^2/(4*L^2))`; mine the same. Agree.
- p2-b-peak: page `x0`; mine x0. Agree.
- p2-b-abs: page `sqrt(pi)/L*exp(-(x-x0)^2/(4*L^2))`; mine the same. Agree (numerical check: L = 0.9, k0 = 4, x0 = 1.3, x = 2 gives 1.692981 by quadrature and by the formula).
- p3-theta: page `-(m*v*x - m*v^2*t/2)/hbar`; mine -mvx/hbar + mv^2 t/(2 hbar). Identical.
- p3-kprime: page `k - m*v/hbar`; mine the same. Agree.
- p3-omegaprime: page `omega - k*v + m*v^2/(2*hbar)`; mine the same. Agree.
- p5-overlap: page choice 0 (does not change); mine d gamma/dt = 0. Agree. Numerical check: two free Gaussians (centres -20 and +20, k = 1 and -0.5, hbar = 0.9, m = 1.3) evolved by FFT: |gamma| stays about 1e-17 at t = 0, 10, 40, 80, while int |Psi1||Psi2| dx grows from 5e-17 to 1.77.
- p6-a: page `0`; mine 0. Agree.
- p6-b: page `N^2*Sp/m`; mine N^2 S'/m. Agree.
- p6-c: page `hbar*k*(A^2 - B^2)/m`; mine the same. Agree.
- Problem 3(a) general check: the page's f applied to a superposition of three plane waves with different k satisfies the primed equation (finite-difference residual 2e-8). Problems 1(a)-(c) and 4 (derivations): the page's steps match mine.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(b), box `p3-omegaprime`; "How to answer" | MIT asks for Ψ′ and its momentum and energy; no prescribed form | The box expects `omega - k*v + m*v^2/(2*hbar)` with ω an independent variable, while "How to answer" says a box "accepts every correct way of writing the answer". The physically equal form ħk′²/(2m) = `(hbar*k - m*v)^2/(2*m*hbar)` (equal because ω = ħk²/2m) is marked wrong. | Add next to the box: "Keep ω in your answer: the box treats ω and k as independent, so do not replace ω by ħk²/2m." Optionally add a `mistakes` entry `(hbar*k - m*v)^2/(2*m*hbar)` with hint "Correct physics, but write it with ω: the box treats ω as independent of k." |
| 2 | info | Problem 3 statement, "The lesson showed that Ψ′ cannot simply equal Ψ" | Lecture 4 notes p. 3, eq. (1.13): the wavefunction "need not be invariant" (written Ψ ≠ Ψ′); the lesson says "need not equal" | "cannot simply equal" | Wording only: "The lesson argued that Ψ′ need not equal Ψ." |
| 3 | info | Problem 3(b) solution, "Momentum and energy in the primed frame", `at="notes p. 2, eq. (1.6), and p. 4, eq. (1.21)"` | (1.6) p′ = p − mv (p. 2) and (1.21) p = ħk, E = ħω (p. 4) are correct; E = p²/2m is around eq. (1.15)–(1.17), p. 3 | Cites (1.6) and (1.21) only | Optional: add "and p. 3, eq. (1.17)". |
| 4 | info | Problem 1(c), "Check the result" | (own check) | Pauli-matrix test: each nested commutator is separately zero for σ₁, σ₂, σ₃, so it does not test the cancellation between terms | Optional: call it a weak test, or use matrices for which each term is non-zero. |

## Arithmetic and answer checks
- All 15 answer ids agree with my blind solve. `pytest tests/calc -k "8.04 and problem-set-3"`: 20 passed.
- Points: 10 + 10 + 15 + 10 + 10 + 10 = 65, as on MIT's sheet; part splits add up (P1 1+1+2+4+2, P2 5+5, P3 10+5, P6 3+3+4).
- Problem 2(a) check: 1/e of the peak at x = ±2L and Φ at k − k0 = ±1/L: correct. Units of √π/L correct.
- Problem 3(a) derivation: both conditions and their solution g′ = i m v²/(2ħ) g re-derived: correct. Check v = p/m gives k′ = ω′ = 0: correct.
- Problem 6(c) example: |A| = 2, |B| = 1 gives 3ħk/m, 3/4 of 4ħk/m: correct.
- Problem 5 checks (Ψ₂ = Ψ₁ gives dN/dt = 0; Re γ and Im γ from conserved norms of Ψ₁ + Ψ₂ and Ψ₁ + iΨ₂): correct.
- Every listed mistake differs from its answer over the `vars`, and each hint is true of its formula (checked one by one, e.g. the conjugate f in p3-theta does raise k by mv/ħ; the sound-wave forms k′ = k, ω′ = ω − kv are right per Lecture 4 notes eqs. (1.11)–(1.12)). `vars` ranges are finite and physical.
- No hint gives the result away. Every solution ends with a check (units, a limit or a number).

## Coverage and order
- All six MIT problems in MIT's order, with all parts (1a–e, 2a–b, 3a–b, 4, 5, 6a–c). MIT's hint to 3(a) is kept as a remark. Reading assignment and due date omitted, as the intro says.
- Page additions: answer boxes, f(0, 0) = 1 (needed for a unique θ), the name "Jacobi identity", a choice box for Problem 5. Disclosed or harmless.
- `covers: [4, 5, 6]`, `lecture: 6`: consistent with the content.

## Licensing
- No "All rights reserved", "Courtesy of" or third-party notices in the problem-set PDF or the three lecture-note PDFs (grep checked).
- Statements rewritten in the page's own words; no figures on MIT's sheet, none redrawn. Merzbacher credit kept in words; the textbook is not used.

## Notes
- Citations checked against printed page numbers: Lecture 5 notes (2.10) p. 5, (2.13) p. 6, (2.28) p. 8; Lecture 4 notes (1.6) p. 2, (1.21) p. 4, (2.23)–(2.24) p. 4; Lecture 6 notes (2.8)–(2.9) p. 3, (2.10) p. 4, (2.12) p. 4, (3.6) p. 5, (4.1) p. 7. All correct. MIT sheet: P1–P2 p. 1, P3–P4 p. 2, P5–P6 p. 3: correct.
- Claims about lessons verified: Pauli matrices are in the schrodinger-equation lesson; probability-current quotes the 3D current without derivation ("left as homework"); de-broglie-waves-group-velocity has the stationary phase argument and calls the Galilean relation a homework problem.
- Symbols: page-scoped meanings exist for every symbol used (γ's double use explained, θ, Φ, σ₁–σ₃, φ, x₀, k′, ω′, N₁, N₂, Ψ′ …); units sensible.
- No em dashes; no `## Summary` with answers.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-22, by the page author)

- Warning 1 (box `p3-omegaprime`): the statement now asks for ω′ written with ω, because the box treats ω and k as independent, and the box lists `(hbar*k - m*v)^2/(2*m*hbar)` as a mistake whose hint says the physics is right but ω must be kept.
- Info: Problem 3 now says the lesson "argued that Ψ′ need not equal Ψ"; the "Momentum and energy in the primed frame" formula also cites Lecture 4 notes p. 3, eq. (1.17). The Pauli-matrix check of Problem 1(c) is left as it is (it is a check, not a proof).
- Status set to `reviewed`.
