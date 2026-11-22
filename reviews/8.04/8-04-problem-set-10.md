---
page: content/year-2/8.04/8-04-problem-set-10.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps10_2016/ (read: pdftotext of the 4-page PDF; OCW page title "Assignment 10")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/ (read; PDF heading "Lectures 20 and 21: Quantum Mechanics in 3D and Central Potentials")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes22/ (read; PDF heading "Lectures 21 and 22: Hydrogen Atom")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes18/ (read; PDF heading "Chapter 18: Scattering in one dimension")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes19/ (read; PDF heading "Lecture 19"; OCW title "Lecture Note 19")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes8/ (read; PDF heading "Lecture 8"; OCW title "Lecture Note 8")
  - https://physics.nist.gov/cuu/Constants/ (not fetched; the values were checked against the CODATA 2018 SI inputs in the calcs file)
verdict: pass-with-notes
---

# Review: Problem Set 10: Angular momentum, spherical wells and the hydrogen atom

I reviewed this in two passes. First I solved every problem blind, from the stripped statements and MIT's sheet; the section "Blind solve" holds those answers, written before the full page was opened. Then I compared them with the full page, its calcs file and data/symbols.json in the worktree `.claude/worktrees/ps-804-10`. `calc:test` (pytest `-k problem-set-10`): 368 passed. `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 7(c) statement, box `p7-ps1`; intro paragraph listing additions | "What are the energy levels? How does the size of positronium compare with the size of a hydrogen atom?" (no number asked) | also asks for "the ground-state energy in eV". The intro's list of additions names only "the numbers in Problems 5(b) and 6(c)", and the 7(c) statement does not mark the eV value "our addition" | In the intro write "and the numbers in Problems 5(b), 6(c) and 7(c)". In 7(c) write "Then give the ratio of the sizes and, our addition, the ground-state energy in eV." |
| 2 | warning | frontmatter `source.readings` 4 and 5 | the PDFs are headed only "Lecture 19" and "Lecture 8"; the OCW titles are "Lecture Note 19" and "Lecture Note 8" | "Lecture 19: Levinson's Theorem and Resonances" and "Lecture 8: Momentum Space, Expectation Values of Operators, Time Dependence of Expectation Values", in quotes as if MIT gave them. Both are built from the section headings. Reading 4 also leaves out the third section, "Modeling the Resonance", which the lesson `levinson-resonances-breit-wigner` keeps in its title | Mark the added part as ours: "8.04 lecture notes, Lecture 19 (sections: Levinson's Theorem, Resonances, Modeling the Resonance) (Prof. Barton Zwiebach)" and "8.04 lecture notes, Lecture 8 (sections: Uncovering Momentum Space, Expectation Values of Operators, Time Dependence of Expectation Values) (Prof. Barton Zwiebach)". The other three reading titles match their PDF headings. |
| 3 | info | Problem 5(a), steps "A product state" and "Check the result" | "These probabilities are not correlated with the total momentum." | reads this as a product state with two free phases, and calls the state with γ₃ ≠ γ₂ "correlated after all" | Correct, and it is the standard reading; it matches my blind answer. Strictly, γ₃ ≠ γ₂ still gives joint probabilities that factorize for these two measurements (the page says so). The difference is entanglement, which shows up in other measurements. Optional: say "entangled" in the check step. |
| 4 | info | Problem 5(a), hint 2 | – | "four terms have four phases, one of them is the overall phase, and the lack of correlation ties one more down" | This gives away the number of phases (two) that the choice box asks about. Acceptable, because the expression itself is not given. Optional: end the hint at "Then count the phases." |
| 5 | info | Problem 4(b), step "States with l > 0" | (MIT asks only for the bound and does not mention l) | variational argument: a negative-energy state with l > 0 would give a negative l = 0 energy expectation value, and so an l = 0 bound state | The argument is correct. The phrase "the ground state has the lowest expectation value there is" assumes that a ground state exists. Optional rewording: "if the l = 0 equation had no bound state, its energy expectation value would be ≥ 0 for every allowed u". |
| 6 | info | Problem 7(b), box `p7-p` | "very accurate answer" | the box asks for the leading term, and lists the exact form as a mistake with a fair hint | Fine. The label says "Leading term". Over the `vars` range (b/a₀ ≥ 5×10⁻⁴) the exact form differs from the leading term by at least 7.5×10⁻⁴ relative, far above the checker's 10⁻⁶, so it is always caught. A reader who types a next-order form, (4/3)(b/a₀)³(1 − 3b/(2a₀)), gets a plain "wrong"; acceptable. |
| 7 | info | `covers: [20, 21, 22, 23]`, `lecture: 23` | – | – | Checked: the four lessons named in the intro have `lecture:` 20, 21, 22 and 23 in content/year-2/8.04, and 23 is the last lecture with lessons. Problem 1 practises Lectures 18 and 19, which are not in `covers`; the intro says so. Fine as long as Set 9 covers 18 and 19. |

## Arithmetic and answer checks
- **Numbers.** Each one recomputed independently with numpy/scipy:
  - z₀ = 2: root ξ = 1.89549, η = 0.63805, E/V₀ = −0.10178 → −0.102 ✓
  - z₀ = 5: thresholds π/2 and 3π/2 = 4.712 < 5 < 5π/2 = 7.854, so 2 states ✓ (calc:test confirms the roots 2.596 and 4.906)
  - −(7/16)×13.598 = −5.9491 → −5.95 eV ✓. With 13.606 it is −5.9526, the same to three figures ✓
  - αc = 299792.458/137.035999 = 2187.69 km/s → 2188 ✓
  - (4/3)(1/52917.7)³ = 8.9978×10⁻¹⁵ (8.9975×10⁻¹⁵ with the next-order correction) → 9.0×10⁻¹⁵ ✓; first correction (3/2)(1.8897×10⁻⁵) = 2.8×10⁻⁵ ✓
  - −13.606/2 = −6.803 → −6.80 ✓; 2×1836.15/1837.15 = 1.9989 ✓
  - E_R with the reduced mass: 13.5983 ✓
  - 92/137.036 = 0.671 ✓; α² = 5.33×10⁻⁵ ✓; Δr = (√3/2)a₀ = 0.866 a₀ ✓; ½×511000/137.036² = 13.6 eV ✓
  - the peak of P(r) is 4e⁻² = 0.541, inside the plot range of 0.6 ✓
- **Problem 3 expansion.** ψ = f[(Y₂₂+Y₂,₋₂)/√6 + (Y₃₂+Y₃,₋₂)/√3]: checked numerically at three (θ, φ) points (difference ≤ 7×10⁻¹⁸), normalization 1.0000 ✓.
- **Problem 3, the given harmonics.** The page gives Y₂,±₂ = ¼√(15/2π) sin²θ e^{±2iφ} and Y₃,±₂ = ¼√(105/2π) sin²θ cosθ e^{±2iφ}.
  - Both are normalized (numerical integration gives 1.0000).
  - They follow from the notes' recipe (notes 20–21, p. 9, eqs. (3.24) and (3.26): P_l^m = (1−x²)^{|m|/2} d^{|m|}P_l/dx^{|m|}, Y_lm = √((2l+1)/(4π)·(l−m)!/(l+m)!) (−1)^m e^{imφ} P_l^m). The constants come out as 3√(5/(96π)) = ¼√(15/2π) and 15√(7/(480π)) = ¼√(105/2π), with sign (−1)² = +1 ✓.
  - For m < 0, eq. (3.27) on p. 10, Y_{l,−m} = (−1)^m Y*_{lm}, gives the same constant for m = −2 ✓.
  - The phase convention is the notes'.
- **Answer boxes.** In every `<Answer>`, the expr or value equals the solution's result, and the `vars` ranges keep every expression finite and physical. Tolerances accept three significant figures and reject each listed mistake (checked by value): p3-dl2 2.83 ±1% rejects 8; p6-kms ±1% rejects 1547; p7-pnum ±2% rejects b³/a₀³ = 6.75×10⁻¹⁵; p4-z2 ±2%; p5-int ±1% rejects −6.80, −8.50 and −11.05.
- **Mistake hints.** Each one is true of its formula:
  - p4-e: 8ma² is a well of width 2a; (n−½)² comes from cosines that vanish at a.
  - p5-e: −5/8 is equal weights; −13/16 swaps the probabilities.
  - p6-v, p6-vz, p6-r, p7-r, p7-r2, p7-rmax, p7-p and p7-ps: all checked.
  - The "shell volume left out" hints for a₀/2, a₀²/2 and 2b/a₀ all match the same wrong density, (2/a₀)e^{−2r/a₀} renormalized without the r², so they are consistent.
- **Choice boxes.** p1-term, p2-deg, p3-out, p4-match, p5-form and p6-rel: the marked answers are correct and the other choices are wrong.
- **Solution steps.**
  - Problem 1: the split into exponentials (notes 18, eq. (1.8)), e^{2iδ} = 1 + 2iA_s, the continuation to k = iκ and the uniqueness argument are all right.
  - Problem 4(b) check: I derived e^{2iδ} = e^{−2ika}(k′cot k′a + ik)/(k′cot k′a − ik) independently from k′cot k′a = k cot(ka+δ). The pole is at k′cot k′a = −κ ✓.
  - Problem 6(b): [r·p, T] = 2iħT, and [r·p, V] = −iħ r dV/dr, which is +iħV for the Coulomb potential ✓.
  - Problem 6(a): (E − E*)(ψ, Ωψ) = 0 ✓.
  - Every solution ends with a check (units, a limit or a number) ✓.
- **Points.** 5, 5, 10, 10, 10, 15 and 10, as MIT gives them. The part splits add up (P3 5+2+3, P4 5+5, P5 5+5, P6 3+5+4+3, P7 4+3+3) ✓.

## Coverage and order
- All seven MIT problems and all their parts are there, in MIT's order. MIT's reading assignment (Griffiths 4.1–4.3) is left out, and the page says so. The intro keeps MIT's note that Problems 3 and 5 are based on Ohanian.
- The additions are marked (the choice boxes of 1, 2, 4(a), 5(a) and 6(c); the 4(b) examples; the numbers of 5(b) and 6(c)), except the 7(c) eV value (finding 1).
- **Citations to the sheet.** Every statement formula cites the right printed page: p. 1 for Problems 1–3, p. 2 for Problems 4–5, p. 3 for Problems 6–7.
- **Citations to the notes.** Every one was checked against the printed footer page, and all are correct:
  - notes 18: p. 3, eqs. (1.8) and (1.11)
  - notes 19: p. 8, eq. (3.11); p. 9, eq. (3.15). Page 9 also says that bound states are poles of A_s on the positive imaginary axis, which supports Problem 1.
  - notes 20–21: p. 9, eqs. (3.24) and (3.26); p. 10, eqs. (3.27) and (3.28); p. 11, eqs. (4.6), (4.7) and (4.10); p. 12, eq. (4.15)
  - notes 22: p. 2, eq. (1.13); p. 3, eqs. (1.18) and (1.20); p. 4, eqs. (1.23)–(1.25), (2.3) and (2.4) (e²/a₀ = α²mc² ≈ 27.2 eV); p. 7, eq. (2.31); p. 10, eq. (2.36)
  - notes 8: p. 6, eq. (3.37)

## Licensing
- A grep of the sheet and of the five note PDFs finds no "All rights reserved" or "Courtesy of" notice. No figures are reused: both plots are generated from formulas. The wording is the page's own. No OpenStax or LibreTexts material, and Ohanian's textbook is not used.

## Notes
- Claims about lessons checked: `stationary-states` shows the oscillating cross term, and `square-wells` has the infinite well on 0 < x < a and defines z₀² = 2mV₀a²/ħ² with width 2a, as used here.
- Symbols: every meaning the set uses is scoped to this page (new, or an existing meaning extended to it). No general meaning was widened, and content:check passes them.
- No em dashes, and no `## Summary` with answers.

## Blind solve

### My answers (written before opening the full page)
- P1: A_s = (e^{2i delta} - 1)/(2i); psi = (e^{2i delta} e^{ikx} - e^{-ikx})/(2i). At k = i kappa, e^{ikx} = e^{-kappa x} (decaying) and e^{-ikx} = e^{kappa x} (growing). A bound state needs the coefficient of the growing term to vanish relative to the decaying one: e^{-2i delta} = 0. So e^{2i delta}, and with it A_s, is infinite at k = i kappa, kappa > 0.
- P2: A(B psi_a) = B A psi_a = a (B psi_a). Since a is non-degenerate, B psi_a = b psi_a (b may be 0). Without non-degeneracy, only a basis of common eigenfunctions is guaranteed, not that every eigenfunction of A is one of B.
- P3(a): psi = f(r)[ (Y22 + Y2,-2)/sqrt6 + (Y32 + Y3,-2)/sqrt3 ]. L^2: 6 hbar^2 with P = 1/3, 12 hbar^2 with P = 2/3. Lz: +2 hbar and -2 hbar, P = 1/2 each.
- P3(b): <L^2> = 10 hbar^2, <Lz> = 0.
- P3(c): <L^4> = 108 hbar^4, Delta L^2 = sqrt8 hbar^2 = 2 sqrt2 hbar^2 = 2.83 hbar^2; Delta Lz = 2 hbar.
- P4(a): u = sin(n pi r/a), E_n = n^2 pi^2 hbar^2/(2 m a^2). The same as a 1D infinite well of width a (0<x<a), or equivalently the odd states of a symmetric 1D well of width 2a.
- P4(b): for l = 0, K cot(Ka) = -kappa needs Ka > pi/2 with K^2 < 2mV0/hbar^2, so there is no bound state if V0 a^2 < pi^2 hbar^2/(8m). For l > 0 the centrifugal term is positive, so each l > 0 radial Hamiltonian is >= the l = 0 one; if l = 0 has no bound state, none has. z0 = 5: 2 states (pi/2, 3pi/2 < 5 < 5pi/2). z0 = 2: xi = 1.8955, eta = 0.6380, E/V0 = -eta^2/z0^2 = -0.1018.
- P5(a): psi = (1/sqrt2)(e^{i p0.X/hbar} + e^{i alpha} e^{-i p0.X/hbar}) x ((1/2) phi100(x) + (sqrt3/2) e^{i beta} phi211(x)), up to box normalization of the plane waves. A product, with two free phases alpha and beta.
- P5(b): <E> = p0^2/(2M) - (7/16) E_R; internal part -7/16 x 13.598 eV = -5.949 eV.
- P6(a): stationary psi = e^{-iEt/hbar} phi; <[Omega,H]> = (phi,(Omega H - H Omega) phi) = E<Omega> - E<Omega> = 0, using that H is Hermitian.
- P6(b): [r.p, T] = 2 i hbar T and [r.p, V] = -i hbar r.grad V. With V = -e^2/r, r.grad V = -V, so [r.p, H] = i hbar (2T + V). Its expectation value is zero, which gives <T> = -<V>/2. (The first written version of this line had a sign slip in an intermediate step; the result was the same.)
- P6(c): sqrt<v^2>/c = alpha/n; not relativistic (alpha/n <= 1/137). Ground state with Z protons: Z alpha. Ground state of hydrogen: alpha c = 2187.7 km/s.
- P6(d): <1/r> = 1/(n^2 a0).
- P7(a): <r> = 3a0/2, <r^2> = 3 a0^2, most probable r = a0.
- P7(b): P ~ (4/3)(b/a0)^3 = 9.00e-15 (8.9975e-15 with the next-order correction).
- P7(c): reduced mass m/2, so E_n = -E_R/(2n^2), ground state -6.80 eV. The Bohr radius is 2 a0, so positronium is twice the size of hydrogen (ratio 2).

### Comparison (one line per answer id)
- p1-term: page choice 0 (growing term e^{κx} absent, e^{2iδ} infinite) = mine ✓
- p2-deg: choice 0 (only a basis of common eigenfunctions) = mine ✓
- p3-out: L² 6ħ² or 12ħ², Lz ±2ħ = mine ✓
- p3-p12: 0.667 = 2/3 ✓
- p3-pz: 0.5 ✓
- p3-l2: 10 ✓
- p3-lz: 0 ✓
- p3-dl2: 2.83 = 2√2 ✓
- p3-dlz: 2 ✓
- p4-e: n²π²ħ²/(2ma²) = mine ✓
- p4-match: choice 0 (1D well on 0 < x < a; odd states of a well of width 2a) = mine ✓
- p4-count: 2 ✓
- p4-z2: −0.102 (mine −0.1018) ✓
- p5-form: choice 0 (a product, one relative phase in each factor) = mine ✓
- p5-e: p0²/(2M) − 7E_R/16 = mine ✓
- p5-int: −5.95 eV (mine −5.949) ✓
- p6-v: α/n ✓
- p6-rel: choice 0 (not relativistic) ✓
- p6-vz: Zα ✓
- p6-kms: 2188 (mine 2187.7) ✓
- p6-r: 1/(n²a₀) ✓
- p7-r: 3a₀/2 ✓
- p7-r2: 3a₀² ✓
- p7-rmax: a₀ ✓
- p7-p: 4b³/(3a₀³) ✓
- p7-pnum: 9.0e-15 (mine 8.998e-15) ✓
- p7-ps: −E_R/(2n²) ✓
- p7-ps1: −6.80 eV ✓
- p7-size: 2 ✓
- Problems 2, 6(a), 6(b) and 4(b), the "show that" parts with no box: the page's proofs agree with mine. Like mine, 4(b) also treats l > 0 with the centrifugal-term argument.

My answers and the page's agree everywhere.

COUNTS: errors=0 warnings=2 info=7

## Resolution (2026-11-22, by the page author)

No errors. Warnings:
- 1 (Problem 7(c) extra number): the intro now lists "the numbers in Problems 5(b), 6(c) and 7(c)", and 7(c) says "Then give the ratio of the sizes and, our addition, the ground-state energy in eV."
- 2 (reading titles): readings 4 and 5 now give the lecture number with the PDF's section headings in brackets, including "Modeling the Resonance" for Lecture 19, so they no longer look like MIT's titles.

Info items need no change: the 5(a) reading, its hint, the 4(b) argument, the 7(b) box and `covers` were all confirmed correct; the wording stays as it is.

Status set to `reviewed`.
