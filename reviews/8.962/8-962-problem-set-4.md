---
page: content/year-5/8.962/8-962-problem-set-4.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset04/ (read, local PDF + pdftotext)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset04_hint/ (read)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset02/ (read, Problem 6 on printed p. 3)
  - 8.962 Lecture 5–10 transcripts (read, local PDFs; cited pages checked one by one with pdftotext -f N -l N)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; values checked against CODATA 2018 from memory and the calcs file)
verdict: needs-changes
---

# Review: Problem Set 4 (8.962): Rindler spacetime, the relativistic Euler equation, hydrostatic equilibrium and conserved quantities

## Blind solve

### My answers (written before opening the full page)
- 1(a): Γ^t_tx = Γ^t_xt = g/(1+gx̄); Γ^x_tt = g(1+gx̄); all others zero. Count (ordered lower indices): 3.
- 1(b): U^t = 1/(1+gx̄), a^x = Γ^x_tt (U^t)² = g/(1+gx̄); |a| = g/(1+gx̄).
- 2(a): orthogonal part h^λ_ν ∇_μT^{μν} = 0 gives (ρ+P)U^μ∇_μU^λ = −h^{λμ}∂_μP. Parallel part U_ν∇_μT^{μν} = 0 gives U^μ∂_μρ + (ρ+P)∇_μU^μ = 0: energy conservation (first law of thermodynamics / relativistic continuity equation, dρ/dτ = −(ρ+P)∇·U).
- 2(b): Euler equation as stated; r component extra terms (coordinate basis, v^θ, v^φ angular rates): −r (v^θ)² − r sin²θ (v^φ)² (i.e. Γ^r_θθ(v^θ)² + Γ^r_φφ(v^φ)²); in general + Γ^i_{jk} v^j v^k.
- 2(c): dP/dx̄ = −(ρ+P) g/(1+gx̄) ⇒ ρ/ρ₀ = (1+gx̄)^{−(1+w)/w}.
- 2(d): w₀ρ' = −gρ ⇒ L = w₀/g; with c: L = w₀c²/g.
- 2(e): dP/dx = −ρg ⇒ ρ = ρ₀ exp(−x/L_N), L_N = kT/(μg); with w₀ = kT/(μc²), L = L_N exactly. Reason: equivalence principle (the accelerated frame is locally indistinguishable from a uniform gravitational field). Numbers: w₀ = 9.217 × 10⁻¹³ (9.217 in units of 10⁻¹³), L = 8.444 km. (29 u = 4.816 × 10⁻²⁶ kg; 4.8 × 10⁻²⁶ kg = 28.91 u.)
- 3(a): h^{tt} = 0 for a static fluid; a^θ = a^φ = 0 (g_tt independent of θ, φ), h^{θθ} = 1/r², h^{φφ} = 1/(r² sin²θ) ⇒ ∂_θP = ∂_φP = 0; static ⇒ ∂_tP = 0; P = P(r).
- 3(b): U^t = e^{−Φ}; U^μ∇_μU^r = Γ^r_tt (U^t)² = (1 − 2GM/r) Φ'; h^{rr} = 1 − 2GM/r ⇒ dP/dr = −(ρ+P)Φ'.
- 4(a): u = v dλ*/dλ; Du/dλ = 0 ⇔ d/dλ*(dλ*/dλ) = −κ dλ*/dλ ⇔ dλ/dλ* = C exp∫κ dλ* (C absorbed in the lower limit).
- 4(b): dλ/dλ* = (λ*)^n.
- 5(a): d/dτ[(u_α + eA_α)ξ^α] = eF_{αβ}ξ^αu^β − eF_{αβ}ξ^αu^β = 0 (Killing equation and L_ξA = 0). Other sign: (u_α − eA_α)ξ^α conserved.
- 5(b): ξ = ∂_t: u_t + eA_t = −γ + eEx conserved, = −1 at start ⇒ γ = 1 + eEx.

### Comparison with the page (one line per answer id)
- p1a-ttx: page g/(1 + g*x) = mine. Agree.
- p1a-xtt: page g*(1 + g*x) = mine. Agree.
- p1a-count: page choice "3" = mine. Agree.
- p1b-acc: page g/(1 + g*x) = mine. Agree.
- p2a-parallel: page choice 2 (local energy conservation, dilution plus pdV work) = mine (U^μ∂_μρ + (ρ+P)∇_μU^μ = 0). Agree; derivation j^νU_ν = −U^μ∂_μρ − (ρ+P)∇_μU^μ rechecked by hand.
- p2b-extra: page −r*vth^2 − r*sin(th)^2*vph^2 = mine. Agree.
- p2c-rho: page (1 + g*x)^(−(1 + w)/w) = mine. Agree.
- p2d-scale: page w0*c^2/g = mine. Agree.
- p2e-ln: page k*T/(mu*g) = mine. Agree.
- p2e-w0: page 9.217 (× 10⁻¹³) = mine (9.21708e-13 with exact k and c). Agree.
- p2e-lkm: page 8.444 km = mine (8444.34 m). Agree.
- p2e-why: page choice 1 (fluid at rest is accelerated relative to free fall in both cases; equivalence principle) = mine. Agree.
- p3b-acc: page choice 3, (1 − 2GM/r) dΦ/dr = mine. Agree.
- p4b-f: page s^n = mine. Agree.
- p5a-sign: page choice 0, (u_α − eA_α)ξ^α = mine. Agree.
- p5b-gamma: page 1 + e*E*x = mine. Agree.
- Show-that parts without boxes (2(a) Euler, 2(b) reduction, 3(a), 3(b), 4(a), 5(a)): every step of the page's solutions matches my own derivation; no disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Introduction, paragraph on NIST constants | (not MIT; CODATA 2018) k and c are exact; the atomic mass constant is a measured value, 1.660 539 066 60(50) × 10⁻²⁷ kg | "three constants from NIST (CODATA 2018), all exact: ... and, in one remark, the atomic mass constant 1.660539 × 10⁻²⁷ kg (rounded here)" | Write "three constants from NIST (CODATA 2018): the Boltzmann constant ... and the speed of light ..., both exact, and, in one remark, the atomic mass constant $1.660539\times 10^{-27}$ kg (a measured value, rounded here)". |
| 2 | warning | Problem 2(b), box p2b-extra, third mistake | n/a | mistake expr `-vth^2/r - sin(th)^2*vph^2/r` with hint "That would fit velocities in metres per second along unit vectors" | With orthonormal (unit-vector) components the centripetal term is −(v_θ̂² + v_φ̂²)/r, with no sin²θ, so the hint does not describe this formula. Change the expr to `-(vth^2 + vph^2)/r` (still distinct from the other mistakes over the vars ranges), or reword the hint. |
| 3 | warning | data/symbols.json, page-scoped meaning of `x` (also `y`, `z`) | n/a | x: "Without a bar: the height in Problem 2(e) and an inertial coordinate in Problem 5(b)"; y, z: "A space coordinate across the acceleration" | The check of Problem 4(b) uses Cartesian x, y, z of flat space ("x = (λ*)^{n+1}/(n+1), y = z = 0"), a use none of these meanings names. Add "and a Cartesian coordinate of flat space in the check of Problem 4(b)" to x, and make y, z read "A space coordinate (ȳ, z̄ in Rindler spacetime, across the acceleration) ...". |
| 4 | info | Problem 2(a), check step | L9 p. 16: test bodies with no force follow geodesics (dust not mentioned) | "each grain of dust moves on a geodesic (transcript of Lecture 9, p. 16)" | Acceptable (the page supports "free bodies move on geodesics"); optionally write "as free test bodies do (transcript of Lecture 9, p. 16)". |
| 5 | info | data/symbols.json, meaning of `\rho` | n/a | "In the nonrelativistic equations of Problems 2(b) and 2(e), with c = 1, it is the mass density" | 2(e) is in ordinary units; optionally drop "with c = 1" for 2(e). |
| 6 | info | Frontmatter readings | n/a | reading1 (Lecture 5) and reading3 (Lecture 7) are cited only in prose ("transcript of Lecture 5, p. 11"; "Lecture 7, pp. 5 to 6 / p. 9"), not by a `cite=` | Fine as is (pages verified); no change needed. |
| 7 | info | Problem 2(e) statement | MIT gives no numbers | "about 29 atomic mass units, roughly the mean for the molecules of air" (unsourced) | True (dry air ≈ 28.97 u; 4.8e-26 kg = 28.9 u, in the calcs file). Optional: no source needed for this standard fact; leave as is. |

## Arithmetic and answer checks
- All numbers recomputed (Python, exact k and c): w₀ = 9.21708 × 10⁻¹³; L = kT/(μg) = 8444.34 m; L ln 2 = 5.853 km; c²/g = 9.1616 × 10¹⁵ m = 0.968 ly ("about one light-year" fine); gL/c² = 9.2 × 10⁻¹³; 4.8e-26 kg / m_u = 28.906; 29 m_u = 4.8156e-26 kg.
- 2(c) check: w = 1/3 gives exponent −4 and 2⁻⁴ = 1/16; w = 0.001, gx̄ = 0.001: (1.001)^(−1001) = 0.36770, e⁻¹ = 0.36788 (page 0.3677 and 0.3679). Correct.
- 2(d) check at g = w₀ = x̄ = 1: dP/dx̄ = −¾ρ, (ρ+P)g/(1+gx̄) = ¾ρ. Correct.
- 1(a) Euler-Lagrange check (both geodesic equations) rederived by hand. Correct.
- 3(b): Γ^r_tt = (1 − 2GM/r)e^{2Φ}Φ', a^r = (1 − 2GM/r)Φ', size √(1 − 2GM/r)Φ'. Correct.
- 5(b) check: F_tx = −E, dγ/dτ = eE dx/dτ; u^x = sinh(eEτ), x = [cosh(eEτ) − 1]/(eE). Correct.
- Temperature remark in 2(e): w ∝ 1/(1 + gx̄) means locally measured T ∝ 1/√(−g_tt) (Tolman's relation). Correct and marked as the page's own remark.
- Calcs: `pytest tests/calc -k 8-962-problem-set-4`: 52 passed. Every answer box has an `answer:` entry checked by an independent route. The page makes no "(in our calculation file)" claim.
- Boxes: every formula box's vars keep the answer and every listed mistake finite and real (all ranges positive, 1 + g x > 0); every mistake differs from the answer over its ranges; mistake hints are true of their formulas except item 2 above. Number boxes 1% (accept 3 s.f.; no listed mistakes to reject; a factor-10 slip such as 92.17 is rejected).
- Choice boxes: right answers at positions 1, 2, 1, 3, 0; lengths of right answers vs others: [1,1,1,1], 141 vs max 143, 193 vs max 244, 17 vs 5–24, 17 vs 13–28: never strictly longest or shortest. No distractor is also true (particle-number conservation is not implied by ∇·T = 0; Rindler spacetime is flat; P = wρ alone gives no profile; no self-gravity).
- Points: 8 + 30 + 8 + 6 + 8 = 60, parts add up; the page says MIT gives no points and the points are its own. Correct.

## Coverage and order
- Problems 1–5 in MIT's order; parts of Problem 2 (a)–(e) in MIT's order; Problem 3 split into (a) P = P(r) and (b) the equation, which is MIT's single statement in its order. Same physics throughout.
- Additions are all marked as ours: count in 1(a), part 1(b), choice boxes in 2(a), 3(b), 5(a), the box in 2(b), numbers in 2(e), 4(b), 5(b).
- Carroll pointer dropped and said so without naming the book; no Carroll content used.
- Line element of Problem 1 attributed to MIT Problem Set 2, Problem 6 (checked: printed p. 3, astronaut with |a| = g, t̄ the astronaut's proper time).
- Hint sheet's advice (split j^ν into parts along and orthogonal to U; "examine what the first equation corresponds to") followed and credited.
- `covers: [5, 6, 7, 8, 9, 10]`: justified. L5 perfect fluid (Problem 2), L6 Christoffel symbols (1, 2(b), 3), L7 equivalence principle (2(e), ∇·T = 0), L8 Lie derivative and Killing vectors (5), L9 geodesics and affine parameters (4; L9 p. 19 names "PSET 4"), L10 conserved momenta and the weak-field Γ^i_tt (2(e), 5). Overlap with Set 3 ([5, 6, 8, 9]) and Set 5 ([8–11]) is normal.
- Citations: MIT sheet pages correct (Problems 1–2 on p. 1, Problems 3–5 on p. 2; Eq. (1), (2), (3) labels right). Transcript pages checked against the PDFs: L5 p. 11 (perfect fluid in a general spacetime), L6 p. 15 (∇g = 0), L6 pp. 16–17 (Γ from the metric), L7 pp. 5–6 (freely falling frames), L7 p. 9 (weak equivalence principle), L8 pp. 6–7 (derivative along a curve), L8 p. 11 (Lie derivative of a one-form), L8 p. 13 (Killing's equation, end of page), L9 p. 13 (∂ → ∇ for T by the equivalence principle), L9 pp. 15–16 (∇_u u expanded, geodesic equation), L9 pp. 18–19 (κ, λ*, the PSET 4 exercise, a λ + b), L9 pp. 19–22 (variational route), L10 pp. 6–7 (p_α ξ^α conserved), L10 pp. 8–10 (weak-field metric g_tt = −(1 + 2Φ) at the end of p. 8 and p. 9, Γ^i_tt ≈ ∂_iΦ on p. 10). All correct.

## Licensing
- No MIT figure; no "All rights reserved" material in the sheet, hint sheet or transcripts; no Carroll, OpenStax or LibreTexts material. Statements and hints are reworded, not copied (only standard phrases such as "relativistic Euler equation", "density scale height"). MIT's apology/deadline note on the hint sheet is not reproduced.
- No em dashes; no `## Summary` with answers.

## Notes
- Solutions are thorough and each ends with a check (units, limits, or a number). Sign conventions (metric signature, sign of e in the force law) are stated where they matter.
- 3(b) check: "For constant Φ the pressure is constant: no gravity" is loose when M ≠ 0 (space is still curved), but fine as a statement about the Euler equation.

COUNTS: errors=1 warnings=2 info=4

## Resolution (2026-11-27, by the page author)

- Error 1 fixed: the introduction now says k and c are exact and the atomic mass constant is "a measured value, rounded here".
- Warning 1 fixed: the third listed mistake of `p2b-extra` is now `-(vth^2 + vph^2)/r`, which is what velocities along unit vectors would give, so its hint is true of its formula.
- Warning 2 fixed: this page's meanings of x, y and z now also name "a Cartesian coordinate of flat space in the check of Problem 4(b)".
- Info items: no change needed.
- `status: reviewed`.
