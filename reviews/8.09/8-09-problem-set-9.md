---
page: content/year-4/8.09/8-09-problem-set-9.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset9/ (read: the sheet PDF, pdftotext plus page 2 rendered to check the figure's axes)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read, pp. 127-133)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read, every cited page, printed footers mapped page by page)
verdict: needs-changes
---

# Review: Problem Set 9 (8.09): a film flowing down a slope, fixed points of a damped pendulum, the Lorenz equations, a chaotic circuit and three bifurcations

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind answers below were written to this file from the stripped statements and MIT's sheet before the full page, its calcs file or data/symbols.json were opened. Every result was checked with my own Python (SymPy series, SciPy DOP853 integrations and root finding), scripts in the scratchpad, not in the repo.

## Blind solve

Writer: Opus. Reviewer: Opus (same model, blind).

### My answers (written before opening the full page)

Problem 1
- (a) Steady incompressible Navier-Stokes: (v·∇)v = −∇p/ρ + g + ν∇²v, with ∇·v = 0 (∂v/∂t = 0).
- (b) Symmetry (infinite plane, steady, translation in x and z): v = v_x(y) x̂ only (∇·v = 0 then holds automatically), p = p(y). BCs: v_x(0) = 0 (no slip); dv_x/dy = 0 at y = h (no shear stress from the air).
- (c) v_x(y) = (g sinθ/ν)(h y − y²/2); p(y) = p_atm + ρ g cosθ (h − y). Surface speed g sinθ h²/(2ν) = 0.2129 m/s for h = 0.5 mm, θ = 10°, ν = 1e-6, g = 9.81.

Problem 2
- (a) n even: ψ̇ = w, ẇ = −w/q − ψ. n odd: ψ̇ = w, ẇ = −w/q + ψ.
- (b) q = ∞, even: ψ = ψ0 cos t, w = −ψ0 sin t (ellipse/circle). Odd: ψ = A e^t + C e^{−t}, w = A e^t − C e^{−t}; growing along w = ψ (45° line, w = θ − nπ), decaying along w = −ψ.
- (c) λ = −1/(2q) ± sqrt(1/(4q²) − 1). q > 1/2: amplitude decay rate 1/(2q), angular frequency sqrt(1 − 1/(4q²)) (inward spiral). q < 1/2: slower rate 1/(2q) − sqrt(1/(4q²) − 1) (node; approach along the slow eigendirection).
- (d) λ = −1/(2q) ± sqrt(1 + 1/(4q²)); κ = sqrt(1 + 1/(4q²)) − 1/(2q); growing direction w = κψ, angle to θ axis arctan κ; q = 1: κ = 0.618034, angle 31.717°. Decaying mode rate 1/(2q) + sqrt(1 + 1/(4q²)) along w = −(that) ψ.

Problem 3
- (a) ∇·f = −σ − 1 − b < 0; rate 13.667 for σ = 10, b = 8/3.
- (b) Origin; and x = y = ±sqrt(b(r − 1)), z = r − 1 (r > 1). x² = b(r − 1); z = r − 1; x = sqrt(72) = 8.4853 for r = 28, b = 8/3.
- (c) Linear: ẋ = σ(y − x), ẏ = rx − y, ż = −bz. λ_z = −b; λ± = [−(σ+1) ± sqrt((σ−1)² + 4σr)]/2. Larger eigenvalue λ+ ; r < 1: all three negative, origin a stable node (attracts all nearby trajectories); r > 1: λ+ > 0, saddle (one unstable direction, two stable). σ = 10, r = 28: λ+ = (−11 + sqrt(1201))/2 = 11.8277.

Problem 4 (my own DOP853 runs, rtol 1e-10, start x = v = 0 at t = 0, strobe at t = 2πk/ω_D after 400 periods, q_c = 10, ω_D = 2/3)
- (a) ẋ = v, v̇ = −v/q_c − x³ + B cos φ, φ̇ = ω_D. Period at B = 9.6: period 2 (two strobe values, x ≈ 1.898 and 2.527).
- Scan (step 0.2): period 1 at 6.0, 6.4–7.0, 8.2–9.2; period 3 at 6.2 (window); period 5 at 7.2–7.3; chaos 7.4–8.0; period 2 at 9.4–9.82; period 4 at 9.84–9.88; period 8 at 9.90; chaos 9.92–10.6; period 3 at 10.8–11.0.
- (b) Period quadrupling: B ≈ 9.84–9.88.
- (c) Show-only.

Problem 5
- (a) Fixed points x = 0 and x = ln r (r > 0); r_c = 1; transcritical; f'(ln r) = −r ln r.
- (b) f'(x) = x/(1 + x); minimum f(0) = r; r_c = 0; saddle-node (two fixed points for r < 0, none for r > 0).
- (c) f ≈ (1 + r)x − (r³/3)x³; c = −r³/3; r_c = −1; c(−1) = +1/3 > 0: subcritical pitchfork (nonzero fixed points exist for r < −1 while the origin is stable).

### Comparison (one line per answer id)

| id | page | mine | agree |
|---|---|---|---|
| p1a-ns | choice 1: (v·∇)v = −∇p/ρ + ν∇²v + g | same | yes |
| p1b-sym | choice 2: v = vₓ(y) x̂, p = p(y) | same | yes |
| p1b-bc | choice 0: vₓ(0) = 0, ∂vₓ/∂y = 0 at h | same | yes |
| p1c-v | g sinθ y(2h − y)/(2ν) | (g sinθ/ν)(hy − y²/2) | yes (identical) |
| p1c-p | patm + ρg cosθ (h − y) | same | yes |
| p1c-us | 0.213 m/s (1%) | 0.21294 | yes |
| p2a-even | −w/q − ψ | same | yes |
| p2a-odd | −w/q + ψ | same | yes |
| p2b-w | −ψ0 sin t | same | yes |
| p2b-dir | choice 2: grows along w = ψ, decays along w = −ψ | same | yes |
| p2c-decay | 1/(2q) | same | yes |
| p2c-freq | sqrt(1 − 1/(4q²)) | same | yes |
| p2c-slow | 1/(2q) − sqrt(1/(4q²) − 1) | same | yes |
| p2d-kappa | sqrt(1 + 1/(4q²)) − 1/(2q) | same | yes |
| p2d-angle | atan(κ) | same | yes |
| p2d-deg | 31.7 (1%) | 31.717 | yes |
| p3a-div | −(σ + 1 + b) | same | yes |
| p3a-rate | 13.67 (1%) | 13.667 | yes |
| p3b-x2 | b(r − 1) | same | yes |
| p3b-z | r − 1 | same | yes |
| p3b-num | 8.49 (1%) | 8.4853 | yes |
| p3c-lam | (−(σ+1) + sqrt((σ−1)² + 4σr))/2 | same | yes |
| p3c-below | choice 3: stable node | same | yes |
| p3c-above | choice 1: saddle with one growing direction | same | yes |
| p3c-num | 11.83 (1%) | 11.8277 | yes |
| p4a-vdot | −v/qc − x³ + B cos φ | same | yes |
| p4a-b96 | choice 1: twice the period | period 2 (x = 1.898, 2.527) | yes |
| p4b-four | choice 2: B = 9.87 | period 4 at 9.84 to 9.88; 9.87 gives 1.623, 1.817, 2.529, 2.572 | yes |
| p5a-rc | 1 | 1 | yes |
| p5a-type | choice 1: transcritical | same | yes |
| p5a-slope | −r log r | same | yes |
| p5b-rc | 0 | 0 | yes |
| p5b-type | choice 1: saddle-node | same | yes |
| p5b-slope | x/(1 + x) | same | yes |
| p5c-rc | −1 | −1 | yes |
| p5c-type | choice 3: subcritical pitchfork | same | yes |
| p5c-c | −r³/3 | −r³/3 (SymPy series: x(r + 1) − r³x³/3 + O(x⁵)) | yes |

Every boxed answer agrees with my blind answer. The one disagreement is in a solution step (row 1 below).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 5(c), solution step "Next to the origin" | (no solution from MIT; checked by calculation) | "The other fixed points, $x^2 \approx -3(1 + r)/r^3$, exist for $r < -1$ (where $1 + r < 0$ and $r^3 < 0$)" | Wrong sign. From (1 + r) + c x² = 0 with c = −r³/3, x² = 3(1 + r)/r³. With 1 + r < 0 and r³ < 0 that is positive; the page's −3(1 + r)/r³ is negative, so its own bracket contradicts it. Numbers: at r = −1.2 the corrected formula gives 0.347 (x ≈ 0.59, true root 0.659); the page's formula gives −0.347. At r = −2 it gives +0.375 against −0.375. Replace with `$x^2 \approx 3(1 + r)/r^3$`. |
| 2 | warning | Problem 4(c), "Our numbers" table and the sentence under it | Asks for pictures showing sensitivity to initial conditions | "the gap grows by a factor of roughly 100 every 5 periods, until after about 20 periods it is as large as the attractor" | One chaotic run cannot be reproduced. My run with the same recipe (DOP853, rtol 1e-12, 300 periods from (0, 0), offset 1e-8 in x) gave 6.3e-7, 9.3e-6, 2.7e-3 and 9.0e-2 at 5, 10, 20 and 25 periods, against the page's 1.3e-6, 3.0e-4, 0.34 and 4.2. Two tangent-vector estimates of the largest Lyapunov exponent at B = 10.3 (400 and 800 periods, two starts) give 0.69 and 0.68 per drive period, a factor of about 30 per 5 periods on average. Suggested text: "in our run the gap grew by a factor of about 100 every 5 periods (on average over the attractor the factor is about 30, a largest Lyapunov exponent of about 0.7 per drive period); a reader's run will give different numbers, because the run is chaotic, but the same steady exponential growth followed by saturation". |
| 3 | warning | Problem 3(c), step "Check the result" | n/a | "The three eigenvalues add up to $\tau - b = -(\sigma + 1 + b)$ ... For $\sigma = 10$, $r = 28$: $11.83 + (-22.83) = -11$." | The number check adds only two eigenvalues, so it shows τ = −11, not the divergence. Write "$11.83 + (-22.83) + (-2.67) = -13.67$, the rate of (a)" (or say it checks τ = −(σ + 1)). |
| 4 | warning | data/symbols.json, meanings for `8-09-problem-set-9` | n/a | The intro uses $\vec\eta = \vec x - \vec x^\star$ (the displacement from a fixed point) and a phase-space point $\vec x$, but the page-scoped η meaning is only "The shear viscosity of the water, η = ρν", and the page-scoped x meaning covers only Problems 1, 3, 4 and 5 | Extend the η meaning: "In Problem 1, the shear viscosity of the water, η = ρν. In the introduction, η⃗ = x⃗ − x⃗*, the displacement from a fixed point." Add to the x meaning: "In the introduction, x⃗ is a point of phase space." |
| 5 | info | Problem 2(b) and 2(c) statements | (b) "You either have elliptical oscillations around the fixed point, or the fixed point is a saddle point"; (c) "The fixed points are either attractors or saddle points" | Says which is which: n even oscillation / attractor, n odd saddle | This gives away a little of what (a) should lead to. Acceptable because (a)'s boxes come first, but saying "(our wording)" or keeping MIT's either/or would be more faithful. |
| 6 | info | Problem 4(c), step "Pictures to make" | n/a | "its slope is the largest Lyapunov exponent (Section 7.6.2 of the notes)" | The notes define the Lyapunov exponent as the largest λⱼ at the end of Section 7.6.1 (p. 191). Section 7.6.2 links it to fractals. Optionally cite "Section 7.6.1, p. 191". |
| 7 | info | Problem 1(c), "Check the result" | n/a | "the pressure at the plane, p_atm + ρgh cos θ, is the weight per unit area of the water column pressing on the plane" | More exactly, it is the part of that weight normal to the plane (per unit area of the plane). Optional wording. |

## Arithmetic and answer checks
- Problem 1: surface speed 9.81 × sin 10° × (5e-4)²/(2e-6) = 0.21294 m/s. Profile = half of the two-plate profile (6.125) with −k = ρg sin θ and plates 2h apart: checked. The unit check and the count of 3 conditions are right.
- Problem 2: matrix trace −1/q and determinant (−1)ⁿ are right. Energy near the top, ½w² − cos(π + ψ) ≈ ½(w² − ψ²) + 1: right. "Clockwise" spiral with ψ across and w up: right (ψ = cos t, w = −sin t). For q = 0.2: s± = 0.2087 and 4.7913, product 1, sum 5. For q = 1: κ = 0.618034, arctan = 0.5536 rad = 31.717°. The decaying root is λ₋ = −(√(1 + 1/(4q²)) + 1/(2q)), and the angle shrinks as damping grows (κ falls as q falls).
- Problem 3: e^(−41/3) = 1.16e-6 ("about a millionth"). x = √72 = 8.4853, and ẏ there is 0. Eigenvectors (σ, σ + λ±) are right. λ₋ = −22.83. The r < 1 / r > 1 classification matches the notes (p. 189).
- Problem 4: my SciPy runs (DOP853, rtol 1e-10, start (0, 0), strobe at 2πk/ω_D after 400 periods) agree with the page's table and sweep. Period 1 at 6.0 and at 8.2 to 9.3, with x = 0.675 at 8.5; period 2 at 9.4 to 9.82, with x = 1.898 and 2.527 at 9.6; period 4 at 9.84 to 9.88, with the four values at 9.87 exactly as on the page; period 8 at 9.90 and 16 distinct values at 9.91; chaos from 9.92 to 10.6 (62 distinct values of 64 at 10.3); period 3 at 10.7 to 11.0 (10.8 gives 0.647, 1.633, 2.830). From starts (1, 0), (−1, 0.5) and (0.5, −1), B = 9.6 gives the second pair (0.769, 0.892), as the page says. At 7.6 I count 59 distinct values, not 58. That small difference is expected in chaos (info). Things the page's sweep does not mention, though they agree with its "most of" wording: a period-3 point at B = 6.2 and period 5 at 7.2 to 7.3. The mapping q_c = 5q, B = 6a is right.
- Problem 5: (a) f′(ln r) = −r ln r, and the expansion at r = 1 + ε gives x(ε − x). "Touches zero from below" at r = 1 is right, because f ≤ 0 everywhere. (b) The nose of the curve is at (0, 0) and it opens to negative r. (c) The root at r = −2 is 0.9575. At r = −1.2 the root is 0.65857 with f′ = 0.3205. Both match the page. The one error is the x² formula in row 1.
- Answer boxes: every `vars` range keeps its formula finite and real (p2c-slow uses q < 0.5, p5a-slope uses r > 1, p3c-lam has a positive radicand). Every listed mistake differs from the answer over its range, and each mistake hint is true of its formula. The 1% tolerances accept 3-figure answers and reject the listed mistakes (13.67 against 12.67; 31.7° against 58.3°).
- Calcs file: every `shown:` string appears on the page (checked by script). The numbers in its entries match my recomputation. Problem 4 is recorded as `kind: fact`, which is right. The 5(c) x² formula of row 1 has no calcs entry. Suggested addition: an identity checking x² ≈ 3(1 + r)/r³ against the numerical root near r = −1 (for example r = −1.05).
- Choice boxes: the right answers are at positions 1, 2, 0, 2, 3, 1, 1, 2, 1, 1, 3, so they vary. None is the longest or the shortest option.

## Coverage and order
- All five MIT problems are present in MIT's order, with every part in order, and the points match MIT's (10; 2/4/4; 15; 2/4/4/5; 10; 2/3/5; 13; 3/6/4; 12; 4/4/4).
- The sheet's reading list, both pictures and the Mathematica instructions are left out, and the intro says so. The "our addition" boxes and "our choice" items are all marked where they appear: the axes, the air exerting only pressure, ψ, the start and strobe times of Problem 4, and the split of points within Problem 5.
- I checked the figure of Problem 1 on the rendered sheet: x points down the slope, as the page says.
- Citations checked against the printed footers. Chapter 6: eq. (6.112) p. 128; (6.113), (6.117) and no-slip p. 129; (6.120) p. 130; (6.121), (6.123) and (6.125) p. 131. Chapter 7: (7.8) and (7.9) p. 144; (7.11) p. 145; (7.12) p. 146; (7.16) p. 148; p. 149 (portraits fill the plane); Fig. 7.7 p. 152; (7.20) p. 155; (7.26) p. 157; (7.32) p. 159; (7.33) p. 160; (7.42) and (7.43) p. 166; (7.86), the fixed points and the supercritical pitchfork p. 189; divergence −(σ + b + 1) p. 190. All are correct. Sheet pages: Problems 1 and 2 on p. 2, Problem 3 on p. 3, Problem 4 on p. 4, and Problem 5's cases on p. 5. Correct. For one optional citation change see row 6.
- There is no `## Summary` with answers. The frontmatter summary and the intro give away no result (the summary's "show that the Lorenz equations shrink volumes" is the statement itself). No hint gives a boxed result away. The hint for 5(a) gives f′(x) in general, but the box asks for its value at x* and the type.

## Licensing
- No MIT figure is reproduced or redrawn. Problem 1's figure ("Image by MIT OpenCourseWare") is described in words, and the Lorenz picture (public domain) is left out. The Mathematica demonstration (by Nasser Abbasi, as the notes credit it) is not reused. No "All rights reserved" material and no OpenStax or LibreTexts material. Statements are reworded, and the only phrases kept are short standard ones ("strange attractor", "butterfly effect"). Solutions are the page's own (`solutions: own`).

## Notes
- Problem 4: the intro says results come "after discarding the first 400 periods", but the coarse sweep used 300 and part (c) starts after 300. Both are stated where they are used, so this is info only.
- Symbols: the page has page-scoped meanings for all the letters on the recurring list that it uses (Ω, H, T, a, k, σ, δ, ρ, z, λ, r: Ω_q, a, k, σ, δ, ρ, z, λ, r, plus ν, η, ζ, κ, τ, Δ, ψ, φ, B, b, q, h, p, v, x, y), apart from the gaps in row 4. It does not use μ, ℓ, H, T, R or M. θ has no page-scoped meaning and falls back to the general "An angle.", which fits both uses (the tilt in Problem 1, the pendulum angle in Problems 2 and 4). A scoped meaning naming both uses would be clearer (info).
- No em dashes on the page (grep).
- I did not run `npm run content:check` or `calc:test`; the review reports my own recomputation only.

COUNTS: errors=1 warnings=3 info=7

## Resolution (2026-11-28, by the page author)

- Error 1 (Problem 5(c), wrong sign): now $x^2 \approx 3(1 + r)/r^3$.
- Warning 2 (Problem 4(c)): the sentence under the table now says "in our run", gives the average factor of about 30 per 5 periods (largest Lyapunov exponent about 0.7 per drive period) and says a reader's run will give other numbers but the same growth and saturation.
- Warning 3 (Problem 3(c) check): now adds all three eigenvalues, $11.83 + (-22.83) + (-2.67) = -13.67$, the rate of (a); new calcs entry `p3c-trace`, `p3c-minus` quote updated.
- Warning 4 (symbols): page-scoped meanings for η and x now cover η⃗ = x⃗ − x⃗* and the phase-space point x⃗ of the introduction.
- Info: the Lyapunov exponent is now cited to Section 7.6.1; the introduction says the coarse sweep and part (c) discard 300 periods. Other info items left as they are.
