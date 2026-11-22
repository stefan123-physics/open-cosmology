---
page: content/year-2/8.04/8-04-problem-set-6.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps6_2016/ (read: ps6.pdf / ps6.txt from the run's scratch folder; printed pages 1 to 4)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes10/ (read; PDF fetched, printed page = PDF page)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read; printed page = PDF page)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes12/ (read; printed page = PDF page)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C12184906&Mask=1000 (read: notes section; 2.65073 eV is given as the latest theoretical value)
verdict: needs-changes
---

# Review: Problem Set 6: Square wells, degeneracy and the shooting method

## Blind solve

### My answers (written before opening the full page)
I worked these out from the stripped statements and MIT's sheet only. Scripts: `review/work/p6.py` and `review/work/p5an.py` in the scratch folder. Problem 5 was solved two ways: by shooting with solve_ivp, and by the exact piecewise solution with a root finder.

- p1a: not an eigenstate (two energies). Ψ(x,t) = (1/√3)√(2/a) sin(2πx/a) e^{−iE₂t/ħ} + √(2/3)√(2/a) sin(3πx/a) e^{−iE₃t/ħ}, with E_n = n²π²ħ²/(2ma²).
- p1b: P(E₁) = 0, P(E₂) = 1/3, P(E₃) = 2/3.
- p1c: ⟨x⟩ = a/2 − (32√2/(25π²)) a cos ωt = a/2 − 0.18341 a cos ωt. Here x₂₃ = −48a/(25π²), checked by quadrature.
- p1d: ⟨p⟩ = (16√2/5)(ħ/a) sin ωt = 4.5255 (ħ/a) sin ωt.
- p2a: W′ = ψ₁ψ₂″ − ψ₂ψ₁″ = (2m/ħ²)(V − E)(ψ₁ψ₂ − ψ₂ψ₁) = 0.
- p2b: W → 0 at ±∞, so W = 0 everywhere. Then (ψ₂/ψ₁)′ = 0 between zeros, and the ODE's uniqueness carries the constant across zeros, so ψ₂ = cψ₁.
- p2c: W = k. The failing step: on a circle nothing vanishes at infinity, so W need not be 0.
- p2d: the failing step is carrying ψ₂ = cψ₁ across the infinite barrier. There ψ vanishes on a whole interval, so the constant can differ between the two wells.
- p3a: E = (ħ²π²/2m)(n_x²/L_x² + n_y²/L_y²), N = 2/√(L_x L_y).
- p3b: the symmetry is x ↔ y (a diagonal reflection), which maps (n_x, n_y) to (n_y, n_x). Three states have n_x² + n_y² = 50. The next accidental degeneracy is at 65.
- p3c: (n_x² − n_x′²) = (L_x/L_y)²(n_y′² − n_y²). An irrational ratio forces both sides to be 0.
- p4a: η cot η = −ξ coth ξ, with η² + ξ² = z₀². Right side: −ξ cosh ξ / sinh ξ.
- p4b: two states. E₁/V₀ = 0.18436 and E₂/V₀ = 0.70747.
- p5a: quartic ground state e = 0.667986. C = −1/z₀². e₃ = 1.206517 and e₄ = 1.562500 (exactly 25/16).
- p5b: e₉ = 5.557414. A_L/A_R = 0.9597. The de Broglie prediction ((e−1)/e)^{1/4} = 0.9516.
- p6a: ε = −1.26923 |E₀| (with V₀ = 1.7402|E₀|), so E = −17.26 eV.
- p6b: repulsion (2/2.4)|E₀| = 11.33 eV, sum −5.93 eV. That lies above H + p (−13.6 eV), so the model ion is not bound. The real ion is at about −16.25 eV (D₀ ≈ 2.65 eV).

### Comparison, one line per answer id
- p1-eigen: choice 0 = mine. Agree.
- p1-prob1 / p1-prob2 / p1-prob3: 0, 0.3333, 0.6667 = mine. Agree.
- p1-x: a/2 − 32√2 a cos(ωt)/(25π²) = mine. Agree. All four listed mistakes differ by value, and each hint is true of its formula.
- p1-p: 16√2 ħ sin(ωt)/(5a) = mine. Agree. I rechecked the direct matrix element 24iħ/(5a) and the rms of 8.507 ħ/a.
- p2-w: k = mine. Agree.
- p2-two: choice 0 = mine. Agree.
- p3-e: agrees with mine. p3-n: 2/√(L_xL_y). Agree.
- p3-sym: choice 0 = mine. Agree. (The solution text has a wrong side claim, error 1 below.)
- p3-count: 3. p3-next: 65. Agree. The page's list of sums and the "85 next" claim are also correct.
- p4-rhs: −ξ cosh ξ/sinh ξ. Agree. p4-n: 2. p4-e1: 0.18436. p4-e2: 0.70747. Agree. η₁, ξ₁, η₂, ξ₂ and both plot coefficients (0.0029474, −0.0562615) recomputed.
- p5-quartic: 0.668 ± 0.002 (shooting gives 0.667986). Agree. Sign check: e = 0.65 runs off to +∞ and 0.70 to −∞, as the hint and solution say.
- p5-c: −1/z₀². Agree.
- p5-e3: 1.2065. p5-e4: 1.5625. Agree. The exact 25/16 explanation is verified (η = 5π/2, q = 3π/2).
- p5-e9: 5.557. Agree. The intermediate roots 2.084, 2.800, 3.561, 4.535 also agree.
- p5-ratio: 0.960. Agree. A_L = 1/η = 0.06751, A_R = 0.07034, and |sin q/sin η| = 0.9597 recomputed. The plot coefficient 1.04195 is recomputed and continuous at u = 1.
- p5-pred: 0.952. Agree.
- p6-e: −17.26 eV. Agree. The page uses z₀² = 1.7403 and gets ε = −1.2693; I used MIT's 1.7402 and got −1.2692. Both give −17.26 eV (info 1).
- p6-sum: −5.93 eV. Agree.
- p6-bound: choice 0 ("No"). Agree.

There were no disagreements on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 3(b) solution, step "The degeneracy from symmetry", last sentence | (MIT asks only to identify the symmetry degeneracies) | "The other reflections and the rotations of the square (such as x → L − x, or a half turn) turn each state into itself, up to a sign, and explain no degeneracy." This is false for the quarter turns and for the reflection in the other diagonal. For example, (x, y) → (y, L − x) sends ψ_{n_x,n_y} to ±ψ_{n_y,n_x}. | Replace with: "The reflections x → L − x and y → L − y and the half turn turn each state into itself, up to a sign. The quarter turns and the reflection in the other diagonal swap (n_x, n_y) and (n_y, n_x), up to a sign, so they explain the same degeneracy and no other." |
| 2 | warning | Problem 5(b), box `p5-ratio` (0.960, tolerance 2%) | Read A_L/A_R off the wavefunction, then compare with the de Broglie prediction | The 2% band (0.941 to 0.979) also accepts the prediction 0.952. A reader who types the predicted value into the "read off" box is marked correct, so the box does not tell the two apart, which is the point of the part. | Tighten to 0.5% (0.955 to 0.965, which still allows reading peaks off a fine plot) and change the text "accepts values within 2%" to match. Optionally list 0.952 as a mistake with the hint "That is the prediction from the wavelengths; read the heights of the two wave trains from your solution." |
| 3 | info | Problem 6(a), formula "The model ion, unit-free" | V₀ = z₀²\|E₀\| = 1.7402\|E₀\| (p. 3) | v = −z₀² = −1.7403, with ε = −1.2693. This is 1.3192² unrounded, against the 1.7402 quoted three lines above. | Either use 1.7402 (ε = −1.2692; E is still −17.26 eV), or add "(1.3192² = 1.7403; MIT rounds to 1.7402; this changes only the fifth digit of ε)". |
| 4 | info | Problem 6(b) statement "Compare with the measured ion", and the solution | "How does it compare with the experimental value?" | The solution uses NIST's 2.65073 eV and correctly calls it "a calculated value". The NIST note gives it as the latest theoretical value; the experimental value it mentions (Herzberg and Jungen) is derived from H₂ data. | Optional: say that the measured and calculated D₀ agree to about 0.001 eV, so the comparison with "the measured ion" stands. Only if this can be checked without reading the paywalled paper; otherwise say "the real ion" instead of "the measured ion". |
| 5 | info | Problem 5(a), box `p5-quartic` | MIT says "as you can find out by trial and error" and asks for no number | It is a scored box, but the intro's list of "our additions" leaves it out | Add "the quartic box of Problem 5(a)" to the intro's list of additions, or leave it as is: MIT implicitly asks for the value. |

## Arithmetic and answer checks
- I recomputed every number on the page (`review/work/chk.py`, `p5an.py`, `p6.py`): x₂₃ = −48a/(25π²); amplitude 0.183; swing 0.317a to 0.683a; ⟨p⟩ maximum 4.53 ħ/a and rms 8.51 ħ/a; sums-of-squares list; 85 = 4 + 81 = 36 + 49; rectangle example (2,2)/(4,1) → 20; η₁ 2.6978, ξ₁ 5.6745, η₂ 5.2849, ξ₂ 3.3983; plot coefficients for P4, P5 and P6 (1.02549, 0.37304, 0.56769, continuous at u = 2.2); e₃, e₄, e₉; the 4 + 4 nodes of the ninth state (η/π = 4.71, q/π = 4.27); the "less than 1%" deviation (0.85%); the fourth-level prediction 0.775; ε, κ = 1.1266, k = 0.6863; the exact even-state condition 2k = arctan(κ/k) + arctan((κ/k) tanh κγ), solved independently with the same root; its γ → ∞ limit κ = k tan k; gain 3.66 eV; repulsion 11.33 eV; sum −5.93 eV; −16.25 eV; 7.67 eV. All correct.
- P6 shooting: the even solution runs off upward for every ε I tried from −1.73 to −1.27, and downward at −1.26 and −1.20. This matches the page's claim that no lower state exists and its bracket of −1.30 / −1.20.
- Problem 6 protons "at the centres of the two wells" (±1.2 a₀, so R = 2.4 a₀): sound, and marked as our reading. "Binding energy" as MIT defines it is −5.93 eV. The claim that the model ion is not bound is correct: −5.93 eV > −13.6 eV (H(1s) + p), by 7.67 eV. Using D₀ (not D_e) for the real ion gives −16.25 eV, the energy of the ground vibrational level, which is fine.
- Problem 5(b) node wording: "8 nodes (the eighth excited state)" = MIT. The hint "the state with 8 nodes is the ninth level" and the solution's node count are correct.
- Answer boxes: every `expr` equals its solution's result. Every `vars` range keeps the formula finite. Every listed mistake differs by value and its hint is true of it. Tolerances reject the obvious slips (p6-e rejects −13.6; p6-sum rejects the R = 2a₀ result −3.66; p5-pred rejects the no-square-root value 0.906 and the inverse 1.050), apart from warning 2.
- No hint gives a final result away.
- Every solution ends with a "Check the result" step (a limit, units or a number).
- Calcs file: every answer box has a matching `answer:` entry, with independent routes (Rayleigh quotient for the quartic, a second algebraic form for the wells). It is consistent with the page.

## Coverage and order
- All six MIT problems are present, in MIT's order, with MIT's parts and MIT's points (10, 10, 10, 10, 15, 10). Part splits are ours and add up.
- Problem 2 is our own problem on MIT's title (MIT gives only "Griffiths Problem 2.45, p. 87"), clearly marked as ours in the problem and the intro. The proof is sound. It covers the zero-crossing step that is often skipped, the delta-function remark in (a) is correct, and the two counterexamples (circle; wells split by an infinite barrier) fail at the steps the page names. The page's statement that the lesson gives the result without proof matches Chapter 12, p. 1, property 2.
- The omitted Mathematica code and reading assignment are noted in the intro.

## Citations
I checked every `at=` against the printed page numbers: Ch. 10 eq. (1.15) p. 3, (1.18) p. 3, (2.23) p. 5; Ch. 11 eq. (1.11) p. 3; Ch. 12 eqs. (2.3) p. 4, (2.8) p. 6, (4.2)–(4.3) p. 11, the hard-wall start on p. 12. The MIT sheet citations are Problem 1–3(a) p. 1, 3(b)–5 statement p. 2, 5(a)/(b) and the Problem 6 constants p. 3, and the Problem 6 potential and parts p. 4. All are correct.

## Licensing
- The MIT sheet and the three lecture-note PDFs have no "All rights reserved" or "Courtesy of" notices (grep).
- No figure is redrawn from MIT. The four plots are generated from formulas.
- The statements are in the page's own words. Only problem titles and standard terms are shared with MIT.
- Griffiths is not used or quoted.
- NIST is used for one value only, which is allowed under Writing rule 11.

## Notes
- `content:check` in the worktree: 0 errors. The only warning for this page is the missing review file.
- Symbols: all meanings scoped to this page fit, and the swapped roles of η and ξ are explained. One small gap: the `k` meaning gives the unit 1/m, but in the Problem 6 solution k = √(z₀² − κ²) has no unit. Consider adding "in Problem 6, a unit-free number" (info, counted under 6 below).
- No em dashes and no `## Summary` with answers.
- Links checked: stationary-states (it has the particle on a circle), observables-measurement-uncertainty, momentum-space-expectation-values (it shows d⟨x⟩/dt = ⟨p⟩/m for a free particle and remarks it holds with V(x)), shape-of-wavefunctions (eq. 2.8), and 8.06 born-oppenheimer-approximation (it treats H₂⁺). All exist and support what is said.
- Info 6: the symbol meaning for `k` (see above).

COUNTS: errors=1 warnings=1 info=4

## Resolution (2026-11-22, by the page author)

- Error 1 (Problem 3(b), symmetry step): now says that x → L − x, y → L − y and the half turn turn each state into itself up to a sign, while the quarter turns and the reflection in the other diagonal swap (n_x, n_y) and (n_y, n_x), explaining the same degeneracy and no other.
- Warning 2 (box `p5-ratio`): tolerance tightened to 0.5%, so the box no longer accepts the predicted 0.952; the statement says why.
- Info: Problem 6(b) now compares with "the real ion" (NIST's 2.65 eV is a calculated value, as the page says). Left as they are: z₀² = 1.7403 (unrounded, same E to the quoted digits), the 5(a) box (MIT asks for that energy), and the unit of k (the general meaning; k in the unit-free Problem 6 solution is plain).
- Status set to `reviewed`.
