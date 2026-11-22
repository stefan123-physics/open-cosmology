---
page: content/year-2/8.04/8-04-problem-set-8.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps8_2016/ (read, pdftotext of the 5-page PDF)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes13/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes14_15/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes16/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes17/ (read)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read)
verdict: pass-with-notes
---

# Review: Problem Set 8: Coherent states, a model molecule, and scattering off steps and barriers

## Blind solve

Solved from the stripped statements and MIT's sheet only, before the full page or the calcs file was opened (answers were written to this file first). Numbers come from NumPy/SciPy scripts in a scratch folder.

### My answers
- p1a: N = exp(-|alpha|^2/2)
- p1b: eigenvalue alpha
- p1c: <H> = hbar omega (|alpha|^2 + 1/2)
- p1d: Delta E = hbar omega |alpha|
- p1e: psi_alpha(x) = (m omega/(pi hbar))^{1/4} exp(-(x - sqrt2 d alpha)^2/(2 d^2)) times a constant (d = sqrt(hbar/(m omega))); |psi|^2 peaks at x = sqrt(2 hbar/(m omega)) Re alpha
- p2a: f = xi^2/lambda^2 = (1 + e^{-2 xi})^2; E(a -> 0) = -4 E_inf; E(a -> inf) = -E_inf
- p2b: V_r(2a) = beta E_inf / lambda
- p2c: minimum at a/a0 = lambda = 0.4013 (xi = 0.5381); V_tot/E_inf = -1.02549 there (a local maximum follows at lambda = 1.808, V_tot = -0.878 E_inf)
- p3: K_out = -pi^2 hbar^2/(16 m a^2 z0): negative, O(1/z0) -> 0, equal to -(1/(2 z0)) times the infinite-well ground energy pi^2 hbar^2/(8 m a^2); no singular contribution
- p4a: Psi_ref = -sqrt(a) int_0^khat dk Phi(k) e^{2i delta(E)} e^{-ikx} e^{-iEt/hbar}
- p4b: c1 = 1, c2 = 1/2, Delta K = 1/(2 beta), Delta u_min = beta
- p4c: E = V0 K^2/2; w = 1 - K^2 + iK sqrt(2 - K^2)
- p4d: Delta tau = 2/(K0 sqrt(2 - K0^2))
- p4e: c3 = sqrt2 = 1.41421, c4 = 1/2
- p4f: Delta K = 0.125, Delta u = 4, predicted Delta tau = 2; numerical peak at tau = 20: u = -17.918; measured delay 2.08. Spreading time 2 beta^2 = 32, so the shape changes slowly. Other peaks: tau = -20 at u = -19.98; tau = -5 highest at u = -0.84; tau = 0 highest at u = -0.73.
- p5a: 1/T = 1 + V0^2 sinh^2(2 kappa a)/(4E(V0 - E)); T(2mV0a^2/hbar^2 = 1, E = V0/2) = 0.2108
- p5b: T = 1/(1 + 2 m V0 a^2/hbar^2)
- p5c: no T = 1 below the top; E > V0: 1/T = 1 + V0^2 sin^2(2 k2 a)/(4E(E - V0)); E_n = V0 + n^2 pi^2 hbar^2/(8 m a^2)

### Comparison (one line per answer id)
- p1-n: exp(-A^2/2) = mine. Agree.
- p1-eig: choice 0 (alpha) = mine. Agree.
- p1-h: hbar*omega*(A^2 + 1/2) = mine. Agree.
- p1-de: hbar*omega*A = mine. Agree.
- p1-x0: sqrt(2*hbar/(m*omega))*ar = mine. Agree. The page's |C| and its fixed phase C = (m omega/(pi hbar))^{1/4} e^{-|alpha|^2/2 - alpha^2/2} rederived by doing the Gaussian overlap with phi_0: correct.
- p2-f: xi^2/lam^2 = mine. Agree.
- p2-fxi: (1 + exp(-2*xi))^2 = mine. Agree.
- p2-e0: -4 = mine. Agree.
- p2-einf: -1 = mine. Agree.
- p2-vr: beta*Einf/lam = mine. Agree.
- p2-crit: 0.40 (5%) vs my 0.4013. Agree.
- p2-vmin: -1.025 (1%) vs my -1.02549. Agree.
- p3-k: -pi^2*hbar^2/(16*m*a^2*z0) = mine. Agree.
- p3-meaning: choice 0 ("falls as 1/z0") = my interpretation. Agree.
- p4-c1: 1. p4-c2: 0.5. p4-dk: 1/(2*beta). p4-du: beta. All = mine. Agree.
- p4-e: K^2/2. p4-wre: 1 - K^2. p4-wim: K*sqrt(2 - K^2). All = mine. Agree.
- p4-dtau: 2/(K0*sqrt(2 - K0^2)) = mine. Agree.
- p4-c3: 1.414 (0.5%) vs sqrt2 = 1.41421. p4-c4: 0.5. Agree.
- p4f-dk 0.125, p4f-du 4, p4f-dtau 2 = mine. Agree.
- p4f-peak: -17.9 (2%) vs my -17.918. Agree.
- p4f-delay: 2.1 (15%) vs my 2.082. Agree.
- p5-below: = mine. Agree.
- p5-num: 0.211 vs my 0.21077 (sinh^2(sqrt2) = 3.7445, 1/T = 4.7445). Agree.
- p5-at: 1/(1 + 2*m*V0*a^2/hbar^2) = mine. Agree.
- p5-never: choice 0 ("No") = mine. Agree.
- p5-res: V0 + n^2*pi^2*hbar^2/(8*m*a^2) = mine. Agree.

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(c), the V_tot Plot with the beta slider | (our graph, not on MIT's sheet) | `range={[-1.6, 0]}` with slider `min: 0.1`; the caption says "Lower β and the dip deepens". For β ≤ 0.15 the minimum lies below −1.6 (β = 0.15: −1.627 at λ = 0.179; β = 0.1: −1.957 at λ = 0.127), so the dip the caption describes is cut off at the bottom of the graph | Change the Plot to `range={[-2.1, 0]}` (or raise the slider to `min: 0.16`) |
| 2 | info | Problem 4(f), caption of the model Plot | (our graph) | "Its peaks agree with the numerical integral to within a few per cent." Largest differences found: τ = −5 outer fringe, height 0.194 (model) vs 0.1835 (integral), 5.7%, at u = −6.72 vs −7.01; τ = 20 height 0.1665 vs 0.1738, 4.2% | Optional: "to within about 6 per cent" |
| 3 | info | Problem 1(e), second hint | (hint is ours) | Names its constants c1 and c2, the same names as the constants of Problem 4(b) | Optional: call them b1 and b2 |

## Arithmetic and answer checks
- Problem 1: all five results rederived. The displaced-ground-state form expanded term by term matches the normalized wavefunction; the phase e^{-i x0 p0/(2ħ)} = e^{-i Re α Im α} is right.
- Problem 2: the restated PS7 result rederived from the jump condition (ξ(1 + tanh ξ) = 2λ, equivalent to ξ/(1 + e^{−2ξ}) = λ). λ = 1: ξ = 1.10886, E = −1.22957 E∞ (page 1.109, −1.230). Table for β = 0.31: −0.8219, −0.9979, −1.0255, −1.0145, −0.9196 (page −0.822, −0.998, −1.0255, −1.0145, −0.920). Minimum λ = 0.40130, ξ = 0.53809, V = −1.025495 E∞. Maximum at λ = 1.8085, V = −0.8783 (page 1.81, −0.878). Minimum and maximum merge at β = 0.4398 (page "about 0.44"). 2a = 0.80 a0; binding 2.55% of E∞ (page "about 2.5%"). All correct.
- Problem 3, the "3%" claim at z0 = 100 (recomputed): solving η tan η = √(z0² − η²) exactly (ka = 1.555243, κa = 99.98791) and normalizing the exact wavefunction exactly (inside plus both tails) gives K_out = −0.0059864 ħ²/(ma²); the formula gives −0.0061685. Ratio 1.0304, a 3.0% difference, as the page says (page values −0.00599 and −0.00617 correct). It shrinks as z0 grows (z0 = 300: 1.0%; z0 = 1000: 0.30%). −E1/(2z0) per side checked. The η/ξ swap remark is correct: the sheet has η = ka, ξ = κa; Chapter 11 eq. (2.33) has ξ = ka, η = κa.
- Problem 4(a)-(e): c1 = 1, c2 = 1/2, ΔK = 1/(2β), Δu = β, E = V0K²/2, w = 1 − K² + iK√(2 − K²) with |w| = 1, Δτ = 2/(K0√(2 − K0²)), c3 = √2, c4 = 1/2 all rederived. The sign convention w = e^{2iδ}, δ = arctan(k/κ), matches Chapter 16 eqs. (3.21)-(3.22). Checks at K = 1 (w = i, δ = π/4) and K = √2 (w = −1) correct.
- Problem 4(f) numbers and graph caption (recomputed: trapezoid rule with 20001 points in K, cross-checked with adaptive quadrature at τ = 20):
  - τ = −20: one peak at u = −19.98, height 0.1683 (page −20.0, 0.168).
  - τ = −5: maxima at u = −7.011, −4.053, −0.844, heights 0.1835, 0.2510, 0.2656 (page −7.0, −4.1, −0.85; 0.184, 0.251, 0.266).
  - τ = 0: maxima at u = −6.838, −3.794, −0.728, heights 0.1147, 0.3725, 0.6787 (page −6.8, −3.8, −0.73; 0.115, 0.373, 0.679).
  - τ = 20: peak at u = −17.918, height 0.1738 (page −17.9, 0.174); measured delay 2.082 (page 2.1).
  - Free-Gaussian height π/√(256 + 100) = 0.1665 (page 0.167). Spreading factor √(1 + 400/1024) = 1.179 (page 1.18); time scale 2β² = 32. Φ at the cut-off: exp(−16(√2 − 1)²) = 0.064 (page 6%). Standing-wave maxima −π/4 − nπ = −0.79, −3.93, −7.07 correct for sin²(Ku − π/4), which is Chapter 16's sin²(kx − δ).
  - Model Plot expression rederived: amplitude π/√(β⁴ + τ²/4), exponent 8(u − τ)²/(256 + τ²/4), reflected centre at u = −(τ − 2), interference −2G1G2 sin 2u from −w(K0) = −i. It matches the caption's description; see row 2 for how far it is from the integral.
- Problem 5 barrier set-up and matching (checked step by step): C and D from x = a; the combination at x = −a that removes B; the bracket product 2 + i(k/κ − κ/k); (A/F)e^{−2ika} = cosh 2κa + i(κ² − k²)/(2kκ) sinh 2κa; 1/T = 1 + (k² + κ²)²/(4k²κ²) sinh² 2κa. All correct. At E = V0, matching with C + Dx gives 1/T = 1 + k²a², the κ → 0 limit of part (a). The continuation from Chapter 17 eq. (1.7) with V0 → −V0 (k2 → iκ, sin² → −sinh², and the denominator changes sign) is correct. Number: sinh²√2 = 3.7445, T = 0.2108; T = 0.5 at E = V0 for z0 = 1. E > V0 formula and E_n correct; excluding n = 0 is justified.
- Answer boxes: every expr is the solution's result. Every vars range keeps the formula finite and physical (p5-below has V0 in [2, 4] above E in [0.3, 1.5]; K and K0 stay below √2). Every listed mistake differs from the answer and its hint is true of that formula (checked each, including p3's −π²ħ²/(8ma²z0) = both regions or a lost 2; p5-at's mV0a²/(2ħ²) = width a; p4-wre's 1 − K²/2 = 1 − E/V0; p1-de's ħωA² = ħω times the variance). Tolerances (0.5% for c3, 5% for a/a0, 1% for V_min, 2% and 15% in 4(f)) reject the listed mistakes and accept 3 significant figures.
- No hint gives a result away. Problem 4(d)'s hint quotes δ′(E) from the lesson (Chapter 16 eq. (3.25)), which is an input, not the answer.
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file. I did not run `calc:test`.

## Citations
- MIT sheet: every `at=` page agrees with the printed page (Problem 1 p. 1; Problem 2 pp. 1-2; Problem 3 eqs. (1)-(2) and the approximations p. 2, the integral p. 3; Problem 4 eqs. (1)-(5) p. 3, parts (b)-(f) p. 4; Problem 5 p. 4).
- Lecture notes, checked against the printed footers page by page: Ch. 14-15 p. 2 eqs. (1.10), (1.12), (1.14); p. 3 eqs. (1.20), (1.22); p. 5 eq. (2.5) (its second line, [â, (â†)^k] = k(â†)^{k−1}); p. 6 eq. (2.19); p. 7 eqs. (2.21), (2.25). Ch. 16 p. 5 eqs. (3.18), (3.21)-(3.22); p. 6 eq. (3.25); p. 7 eq. (4.31); p. 9 eqs. (4.37), (4.40). Ch. 17 p. 2 eq. (1.7); p. 3 eq. (1.14). Ch. 13 p. 4 eq. (1.17). Ch. 11 p. 8 eq. (2.33). All correct.
- The reference to "Problem Set 4, Problem 3" for the spreading Gaussian matches that page's Problem 3 ("Evolving the Gaussian wave packet").

## Coverage and order
- All five MIT problems are present in MIT's order, with MIT's points (15, 15, 5, 20, 10). Parts follow MIT's order. Problem 5's (a)-(c) split follows MIT's three lines (E < V0, E = V0, then T = 1 below and E > V0).
- `covers: [14, 15, 16, 17]` matches this site's lecture numbers: delta-well-node-theorem-oscillator (lecture 14), creation-annihilation-operators (15), step-potential-scattering (16), resonant-transmission (17), the same numbers as in `content/year-2/8.04/_course.json`. Problem 3 draws on square-wells (lecture 11), which is named in the intro and the prerequisites; leaving it out of `covers` is reasonable (the lesson would otherwise get a "Practise" link to a set that is mostly about later lectures). `lecture: 17` is the last lecture covered.
- Problem 5 fidelity: MIT gives only a title (Griffiths 2.33) and three lines, so the set-up is ours. The barrier V0 on |x| < a, width 2a, is the standard form of that exercise and matches the lessons' well of width 2a; the page says so in the Formula's `at=` and in the intro.
- Additions are all marked (boxes in 1(e), 2(a), 2(c), 3 and 5(a)); the omission of MIT's reading assignment and the replacement of Mathematica by any tool are both stated.

## Licensing
- MIT's sheet carries no "All rights reserved" or "Courtesy of" notice and no figures; the page redraws nothing, and its graphs are generated from formulas.
- Griffiths's textbook is named (as MIT names it) but not used. No OpenStax or LibreTexts material.
- The wording is the page's own; nothing is copied from the sheet beyond short standard phrases.
- No em dashes; no `## Summary` with answers.

## Notes
- The calcs file has an entry for each answer box, with routes independent of the page (Hermite series, exact finite well, repeated reflections inside the barrier).
- Row 1 is cosmetic, but it is the only finding that changes what a reader sees.

COUNTS: errors=0 warnings=1 info=2

## Resolution (2026-11-22, by the page author)

No errors. Warning and info items:
- Warning 1 (Problem 2(c) graph): the Plot range is now [-2.1, 0], so the dip stays on the graph down to the slider's lowest value β = 0.1 (minimum −1.957).
- Info (Problem 4(f) model caption): "to within a few per cent" is now "to within about 6 per cent", matching the largest difference found (5.7% at τ = −5).
- Info (Problem 1(e) hint): the hint's constants are renamed b₁ and b₂, so they no longer share names with c₁ and c₂ of Problem 4(b).
- Status set to `reviewed`.
