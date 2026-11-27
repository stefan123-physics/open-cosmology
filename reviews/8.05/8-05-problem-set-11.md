---
page: content/year-3/8.05/8-05-problem-set-11.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-11/ (read: pdftotext of the sheet, PDF at hand)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-9/ (read: pdftotext; p. 34 rendered and read for (7.77)-(7.82))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-10/ (read: pdftotext; p. 6 rendered and read for (2.19)-(2.27))
verdict: needs-changes
---

# Review: Problem Set 11 (8.05, Fall 2013)

Order followed: the stripped statements and MIT's sheet were read first; the "My answers" list below was written to this file before the full page, its calcs file and its symbol meanings were opened.

## Blind solve

### My answers (written before opening the full page)
- p1a: L3 = hbar diag(1,0,-1); L^2 = 2hbar^2 I; L+ = sqrt2 hbar (E12+E23); L1 = (hbar/sqrt2)[[0,1,0],[1,0,1],[0,1,0]]; L2 = (i hbar/sqrt2)[[0,-1,0],[1,0,-1],[0,1,0]]. <1,1|L1|1,0> = hbar/sqrt2; <1,1|L2|1,0> = -i hbar/sqrt2.
- p1b: [L1,L2] = i hbar L3 holds (checked by matrix product).
- p1c: |m1=1> = (|1>+sqrt2|0>+|-1>)/2; |m1=0> = (|1>-|-1>)/sqrt2; |m1=-1> = (|1>-sqrt2|0>+|-1>)/2 (overall phases free).
- p1d: m3 = 1, 0, -1 with probabilities 1/4, 1/2, 1/4.
- p1e: after m3=-1, L1 gives 1, 0, -1 with 1/4, 1/2, 1/4; after m1=-1, L3 gives 1, 0, -1 with 1/4, 1/2, 1/4.
- p2a: beta = m e^2/hbar = hbar/a0; gamma = -beta^2/(2m) = -e^2/(2a0).
- p2b: <H> - gamma = (1/2m) sum_k ||(p_k - i beta x_k/r) psi||^2 >= 0; equality for psi = N e^{-r/a0}, N = 1/sqrt(pi a0^3).
- p3a: |<100,Z=2|100,Z=1>|^2 = (16 sqrt2/27)^2 = 512/729 = 0.7023.
- p3b: 1 (the state stays spherically symmetric; H of He-3+ conserves L).
- p4a: v0 = pi/2 = 1.5708.
- p4b: u = sin(eta r/a) inside, e^{-xi r/a} outside, eta^2 = v0^2 - xi^2, eta cot eta = -xi.
- p4c: v0 = 5 has 2 bound l=0 states (pi/2 and 3pi/2 < 5 < 5pi/2); E + V0 ~ pi^2 (1 - 2/v0) in units hbar^2/(2ma^2) (equivalently pi^2/(1+1/v0)^2 to this order).
- p4d: integrals both -(4pi/3) V0 L^3; the regulated well has v0^2 = 2 m V0 L^3/(hbar^2 a) -> infinity, ground energy ~ -V0 (L/a)^3 + pi^2 hbar^2/(2ma^2) -> -infinity: no limit. Natural energy hbar^6/(m^3 G^2): absurd because binding grows as the coupling G goes to zero.
- p5a: V_eff = l(l+1)/x^2 - g' e^{-x}/x; lambda = 2mE/(hbar^2 alpha^2); g' = 2 m g/(hbar^2 alpha).
- p5b: smallest g' with V_eff < 0 somewhere, l = 2: 6e = 16.31 (minimum of e^x/x at x = 1). Necessary, not sufficient: my own shooting at E = 0 puts the first l = 2 bound state at g' = 21.89.
- p5c: second most tightly bound of four l=2 levels: one node; u ~ x^3 as x -> 0; u ~ exp(-sqrt(-lambda) x) as x -> inf; outer lobe larger than inner. My finite differences (h = 0.005-0.01, box to x = 300-400): four l=2 states for 68.57 < g' < 90.25 (thresholds 21.89, 34.42, 49.97, 68.57, 90.25, 115.0); outer/inner ratio of |u| 1.50 to 1.52 over that window (1.507 at g' = 80), node at x = 0.27-0.37.
- p6a: uncoupled matrix: diag(eps+epp, eps-epp, -eps-epp, -eps+epp) with 2epp between |2> and |3>. <ud|H'|ud> = eps - epp; <ud|H'|du> = 2 epp; eigenvalues eps+epp, -eps+epp, -epp +/- sqrt(eps^2+4epp^2); lowest -epp - sqrt(eps^2+4 epp^2).
- p6b: coupled: diag(eps+epp, epp, -eps+epp, -3epp), <1,0|H'|0,0> = eps; same eigenvalues.
- p6c: coupled basis for weak fields, uncoupled for strong.
- p6d: shifts +eps, 0, -eps, 0 for |1,1>, |1,0>, |1,-1>, |0,0>; |1,0> + (eps/(4 epp))|0,0>, |0,0> - (eps/(4 epp))|1,0>. Box: 0 and c = eps/(4 epp).

### Comparison (one line per answer id)
- p1-l1: page 0.707 (units of ħ) = mine ħ/√2. Agree.
- p1-l2: page choice "−iħ/√2" = mine. Agree.
- p1-m10: page "(|1,1⟩ − |1,−1⟩)/√2" = mine. Agree.
- p1-amp: page 0.707 = mine √2/2. Agree.
- p1-p0: 0.5 = mine. Agree.
- p1-p1: 0.25 = mine. Agree.
- p1-e0: 0.5 = mine. Agree.
- p1-again: "1, 0, −1 with 1/4, 1/2, 1/4" = mine. Agree.
- p2-beta: hbar/a0 = mine. Agree.
- p2-gamma: −e2/(2 a0) = mine. Agree.
- p2-norm: 1/sqrt(pi a0^3) = mine. Agree.
- p3-ground: 0.702 = 512/729 = mine. Agree.
- p3-l0: choice "1" = mine. Agree.
- p4-thr: 1.571 = mine. Agree.
- p4-inside: "sin(ηr/a)" = mine. Agree.
- p4-count: 2 = mine. Agree.
- p4-corr: π²(1 − 2/v₀) = mine to first order. Agree, but see W1: the box rejects equivalent first-order forms.
- p4-scale: "1/a" = mine (v₀² = 2mV₀L³/(ħ²a)). Agree.
- p4-nat: ħ⁶/(m³G²) = mine. Agree.
- p5-gp: 2mg/(ħ²α) = mine. Agree.
- p5-lam: 2mE/(ħ²α²) = mine. Agree.
- p5-min: 16.3 = 6e = mine. Agree.
- p5-nodes: 1 = mine. Agree.
- p5-small: "x³" = mine. Agree.
- p5-lobes: "the outer one" = mine. Agree.
- p6-diag: ε − ε′ = mine. Agree.
- p6-off: 2ε′ = mine. Agree.
- p6-low: −ε′ − √(ε² + 4ε′²) = mine. Agree.
- p6-mixel: ε = mine. Agree.
- p6-weak: "the coupled one" = mine. Agree.
- p6-lowest: "stays the lowest level for every B" = mine (E₃ − E₄ = 2ε′ − ε + ρ > 0). Agree.
- p6-first: 0 = mine. Agree.
- p6-mix: ε/(4ε′) = mine. Agree.
- Text claim in the 5(b) "Check the result": "first bound state near g′ = 25". This disagrees with my calculation (21.9). See E1.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| E1 | error | Problem 5(b), solution step "Check the result" (and calcs `p5-numerics`) | (not on the sheet: the page's own numerical claim) | "Our own numerical solution of the scaled radial equation for l = 2 finds the first bound state near g′ = 25 and four bound states at g′ = 80." | The first l = 2 bound state appears at g′ = 21.9, not near 25. At g′ = 25 the level is already at λ = −1.02, and at g′ = 22 one state exists (λ = −0.024). Evidence: finite differences (h = 0.01, box to x = 400) and E = 0 shooting (threshold where the x³ growing part vanishes) agree: thresholds 21.89, 34.42, 49.97, 68.57, 90.25. Replace with: "finds the first bound state at g′ ≈ 21.9 (above the necessary 6e = 16.3) and four bound states for 68.6 < g′ < 90.2, for example at g′ = 80." Update `where:`/`shown:` of calcs `p5-numerics` to match. |
| W1 | warning | Problem 4(c), box `p4-corr` | "find a little better approximation ... including the first nontrivial correction" | Formula box accepts only π²(1 − 2/v₀) | Squaring the page's own η ≃ π(1 − 1/v₀) gives `pi^2*(1 - 1/v0)^2`, and π²/(1 + 1/v₀)² is also right to this order (and closer to the exact value). The box rejects both: they differ from π²(1 − 2/v₀) by 1.6% and 3.6% at v₀ = 8. Either add to the label "written as π²(1 + c/v₀), dropping terms of order 1/v₀²", or add these two forms as `mistakes` with the hint "Right to this order: expand and keep only the term in 1/v₀." |
| I1 | info | Problem 6(d), "Check the result" | notes ch. 10 after (3.12) warn that the first-order formula assumes the state evolves smoothly (degenerate levels) | First-order shifts of the degenerate triplet are taken from (3.12) | This is correct here because H′ commutes with J_z, so states of different m never mix. One clause saying so would close the gap. |
| I2 | info | Problem 5(c), third hint | (no hint on the sheet) | "A particle spends less time where it is fast, so the wavefunction is smaller there" | Close to giving the `p5-lobes` choice away, but the reader still has to work out where the particle is fast. Acceptable. |
| I3 | info | Problem 6(c), plot caption | - | "one rising and one falling with the slope of ±ε" | Slightly odd wording. The levels rise and fall like ±ε (slope ±1 in the plotted units). Could read "rising and falling like ±ε". |

## Arithmetic and answer checks
- All 33 answer boxes recomputed independently (see Blind solve). All agree.
- Problem 1: L₁L₂ and L₂L₁ and the commutator checked by matrix multiplication; L² diagonal 2ħ² correct; eigenvectors orthonormal; hint 2's row equations correct.
- Problem 2: the product of the brackets is p² + β² − 2ħβ/r, so β = me²/ħ = ħ/a₀ and γ = −e²/(2a₀). Mistake hints: `2*hbar/a0` corresponds to a divergence of 1/r (true); `2*hbar/(3*a0)` to 3/r (true); `-2*e2/a0` follows from β = 2ħ/a₀ (true); `1/a0` units (true); N mistakes (N², 4π, radial part only) true.
- Problem 3: overlap 16√2/27, P = 512/729 = 0.7023; general (2√(Z₁Z₂)/(Z₁+Z₂))³ correct; spot check with the helium-ion 2s state: overlap −1/2, probability 1/4, recomputed analytically, correct; 1 − 512/729 = 0.298 correct.
- Problem 4: thresholds (n − ½)π; v₀ = 5 gives 2 states; graph points (2.279, 1.951), (2.679, 5.369), (5.226, 2.948) satisfy both equations; v₀ = 20: η² = 8.9488 (my root finder), formula 8.883, error 0.74%; π² off by 10.3%. Regulated well: v₀² = 2mV₀L³/(ħ²a); first state at a = 8mV₀L³/(π²ħ²) correct; p = 3, q = −2 correct; 1D delta natural energy mg²/ħ² correct. `p4-nat` mistake hints true (m G²/ħ² is energy × length⁴; the G^(2/3) hint correct).
- Problem 5: g′, λ, V_eff correct, mistake hints true. 6e = 16.31. V_eff minima: g′ = 40: −32.2 at x = 0.312; g′ = 80: −192.4 at x = 0.152 (caption correct). At g′ = 80 my finite differences give four levels λ = −107.5, −38.02, −11.35, −1.64 (calcs −107.4, −38.0, −11.3, −1.6: agree); second level: node x = 0.31, bumps at x = 0.17 and 0.56, outer/inner = 1.507 (1.50 to 1.52 over the whole four-level window 68.6 < g′ < 90.2), so the page's "1.5 times" is right; √(−λ) = 6.166, the page's 6.16 fine. Model curve: u(0.175) = 0.547, u(0.57) = −0.799; its true extrema at 0.175 and 0.572 with ratio 1.46 (page's 1.5 fine to one decimal). The 5(b) claim that g′ > e·l(l+1) is necessary but not sufficient is correct (16.31 < 21.89). Only the threshold "near g′ = 25" is wrong (E1).
- Problem 6: matrices in both bases checked numerically (ε = 0.3, ε′ = 1): eigenvalues −3.022, 0.7, 1.022, 1.3 match the closed forms. Eigenvectors in both bases verified, including the page's cross-check identity 4ε′² + 2εε′ − 2ε′ρ. Strong-field limits and the no-crossing statements correct. All mistake hints of p6-diag, p6-off, p6-low, p6-mixel and p6-mix are true of their formulas.
- Number-box tolerances (1%) reject the obvious wrong values; the right choices sit at varied positions and are not systematically the longest or shortest.

## Coverage and order
- MIT's six graded problems are all present, in MIT's order, with MIT's parts in order and MIT's points (10, 10, 5, 20, 10, 10 = 65). Part splits are the page's own, and it says so.
- The six "practice problems, do not hand in" are left out, and the intro says so clearly and names their topics.
- The page's additions (the Problem 4(c) count box, the Problem 5(b) smallest-g′ box) are marked as ours. The renaming e → ξ in Problem 4 is stated.
- `covers: [21, 22, 23, 24, 25]` and `lecture: 25` differ from OCW's calendar (24-26); the intro says the lectures were chosen from the topics. Fine.

## Citations
- Notes ch. 9 (reading1): (2.26)-(2.29) ladder action, with (2.29) the formula: correct; (3.16) orthogonality of the Y_lm: correct; (4.9), (4.10), (4.14) radial equation and u → 0: correct; (4.20)-(4.23) small-r behaviour: correct; (4.27) large-r decay: correct; (5.44) infinite-well l = 0 levels: correct; (7.76) Bohr radius: correct; (7.77) and the lines after (7.78) give 27.2 eV and −13.6 eV: correct; (7.80) (rendered p. 34) is the ground-state condition (p̂_k − iβx̂_k/r)|Ψ₀⟩ = 0: correct; (7.82) E = −e²/(2a₀)·1/(ν+l)²: correct.
- Notes ch. 10 (reading2), rendered p. 6: (2.20) Ĵ⁽¹⁾·Ĵ⁽²⁾ = ½(J₊J₋ + J₋J₊) + J_zJ_z and (2.21) the same in tensor notation: correct; (2.27) lists all four triplet and singlet states: correct ((2.11)-(2.18) is the derivation, fine); (3.7)-(3.12) Feynman-Hellmann and the first-order shift: correct.
- Sheet page numbers: Problem 1 p. 1, Problems 2 and 3 p. 2, Problem 4 pp. 3-4 (4(d) p. 4), Problem 5 pp. 4-5, Problem 6 p. 5: all `at=` values correct. The factorized Hamiltonian is cited to the sheet p. 2 (it is also notes (7.79)): fine.
- Lesson claims: the Lecture 23 lesson does give the "some wells have no bound states" remark and the singular 3D delta function; the Lecture 2 lesson has the node theorem; Lecture 3 is Stern-Gerlach. All correct.

## Licensing
- The sheet carries no rights notice; no figures reused; all graphs generated from formulas; wording is the page's own (spot-checked against the sheet: no copied sentences). No textbook problems involved. No OpenStax or LibreTexts.

## Notes
- No em dashes; no `## Summary` that prints answers; no stray carriage returns.
- Symbol meanings for the page (data/symbols.json, `pages: [8-05-problem-set-11]`) read; they fit their uses (β a momentum, γ an energy, λ both uses noted, δ both uses, c both uses, x all uses, m both uses, g including the 1D check).

COUNTS: errors=1 warnings=1 info=3

## Resolution (2026-11-27, by the page author)

- Error 1: Problem 5(b), "Check the result", now says the first l = 2 bound state appears at g′ ≈ 21.9, well above the necessary 6e, and that there are four bound states for 68.6 < g′ < 90.2, for example at g′ = 80. The calcs entry `p5-numerics` (where and shown) is updated with the thresholds 21.89, 34.42, 49.97, 68.57, 90.25.
- Warning 1: box `p4-corr` now lists π²(1 − 1/v₀)² and π²/(1 + 1/v₀)² as mistakes with the hint "Right to this order, but the box wants the expanded form: expand and keep only the term in 1/v₀."
- Info items: kept as they are.

Status set to `reviewed`.
