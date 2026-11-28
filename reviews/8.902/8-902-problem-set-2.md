---
page: content/year-5/8.902/8-902-problem-set-2.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_2_pdf/ (read, PDF text, 1 page)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec04.pdf (read, pp. 21–26)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec05.pdf (read, pp. 26–37)
verdict: needs-changes
---

# Review: Problem Set 2: Orbits in a logarithmic potential and the Mestel disc

Writer: Opus. Reviewer: Opus (same model, blind).


## Blind solve

Written from the stripped statements and MIT's sheet only, before opening the full page or its calcs file. Numbers from my own SciPy script (`work/p1.py` in the scratch folder): quadrature of the radial integrals plus a DOP853 integration (rtol = atol = 1e-12) over 100 radial periods.

### My answers

- **p1a, L:** $L = r_a v_a = r_a v_c/2$ (velocity purely tangential at apocentre). Units $v_c = r_a = 1$: $L = 0.5$.
- **p1a, ẍ:** $\ddot x = -v_c^2 x/(x^2+y^2)$ (and $\ddot y = -v_c^2 y/(x^2+y^2)$), from $-\nabla\Phi = -v_c^2\hat r/r$.
- **p1b, r_p/r_a:** root of $1/(8u^2) + \ln u = 1/8$ below 1: $r_p/r_a = 0.31089$.
- **p1b, T_r:** $T_r = 2\int_{r_p}^{r_a} dr/\sqrt{2(E-\Phi) - L^2/r^2} = 2.9849\, r_a/v_c$ (direct integration: apocentre returns at t = 2.98488613).
- **p1b, Δψ:** $\Delta\psi = 2\int L\,dr/(r^2\sqrt{\dots}) = 247.88°$ (between 180° and 360°, as for any potential between Kepler and harmonic).
- **p1c, choice:** an open rosette, not closed, that over many periods fills the annulus $r_p \le r \le r_a$; each apocentre is 247.88° ahead of the last.
- **p1c, turns in 100 periods:** $100\,\Delta\psi/360° = 68.856$ (integration: 68.85565; energy drift 1e-10).
- **p1d, choice:** dots crowd near the turning radii, above all at apocentre (the outer rim), where the star moves slowest; the inner rim at pericentre is also a sharp edge; the dots are sparse in between.
- **p1d, fraction of time at r > (r_p + r_a)/2:** 0.6394 (quadrature). Note: with plot steps of exactly T_r/50 the dots repeat the same 50 phases of the radial motion every period, so the dot fraction is 31/50 = 0.62 rather than 0.639, and the dots fall on a set of fixed radii (stroboscopic rings). MIT's "roughly 1/50th" avoids that.
- **p2A:** in the plane $\Phi = v_c^2\ln(R/r_\text{ref}) - v_c^2\ln 2$, so $v_c^2(R) = R\,\partial\Phi/\partial R = v_c^2$: flat. Epicycle frequency (notes eq. 151, $\kappa^2 = R\,d\Omega^2/dR + 4\Omega^2$ with $\Omega = v_c/R$): $\kappa^2 = 2v_c^2/R^2$, $\kappa = \sqrt2\,v_c/R$.
- **p2B:** for $0<\theta<\pi/2$, $\partial\Phi/\partial\theta = -v_c^2\sin\theta/(1+\cos\theta)$ $(= -v_c^2\tan(\theta/2))$. Radial part of $\nabla^2\Phi$: $v_c^2/r^2$; angular part: $(1/(r^2\sin\theta))\,\partial_\theta(-v_c^2\sin^2\theta/(1+\cos\theta)) = (1/(r^2\sin\theta))\,\partial_\theta(-v_c^2(1-\cos\theta)) = -v_c^2/r^2$. Sum 0, so $\rho = 0$ off the plane (same by symmetry below). At $\theta = \pi/2$, $\partial\Phi/\partial\theta$ jumps from $-v_c^2$ to $+v_c^2$: a kink, so $\nabla^2\Phi$ has a delta function and $\rho$ is infinite in the plane.
- **p2C:** $\partial\Phi/\partial z = -(1/r)\partial\Phi/\partial\theta$ at the plane is $+v_c^2/R$ just above and $-v_c^2/R$ just below; $\Sigma = (1/4\pi G)\times$ jump $= v_c^2/(2\pi G R)$. Numbers: $\Sigma = 220^2/(2\pi\times4.30\times10^{-3}\times8000) = 223.9$ M☉/pc². Mass: $M(<R) = \int_0^R 2\pi R'\Sigma\,dR' = v_c^2 R/G$ (= 9.0e10 M☉ for these numbers).

### Comparison (one line per answer id)

- p1a-l: page `ra*vc/2` = mine. Agree.
- p1a-acc: page `-vc^2*x/(x^2 + y^2)` = mine. Agree (calcs check against a numerical gradient passes).
- p1b-rp: page 0.3109, mine 0.31089. Agree.
- p1b-tr: page 2.985, mine 2.98489 (quadrature and the DOP853 apocentre events at t = 2.98488613). Agree.
- p1b-dpsi: page 247.9°, mine 247.880°. Agree (4.326 rad also right).
- p1c-shape: page choice 2 (rosette filling the ring) = mine. Agree.
- p1c-turns: page 68.86, mine 68.8557 (quadrature) and 68.85565 (integration). Agree.
- p1d-where: page choice 1 (bands along both edges). Mine said "near the turning radii, above all at apocentre, inner rim also sharp". My own 10-ring count per unit area (2.25, 1.00, 0.78, 0.70, 0.66, 0.64, 0.67, 0.72, 0.86, 1.95 times the mean) shows the inner edge is slightly denser per area than the outer, so "above all at apocentre" was true of dots per unit radius, not per unit area. The page's answer (both edges) is right; no disagreement on the choice.
- p1d-frac: page 0.639, mine 0.6394. Agree. Page's stroboscopic remark (exactly T_r/50 gives 62%) = my 0.62 (31/50). Agree.
- p2a-kappa: page `sqrt(2)*vc/R` = mine. Agree.
- p2b-dphi: page `-vc^2*sin(theta)/(1 + cos(theta))` = mine. Agree.
- p2c-sigma: page 224, mine 223.93. Agree.
- p2c-mass: page `vc^2*R/G` = mine. Agree (9.0e10 M☉ also right: 9.005e10).

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "How to answer", formula-box example | (n/a) | Example typing `vc^2*x/(x^2 + y^2)`, which is the answer of box p1a-acc apart from its minus sign | Use an example unrelated to any box, e.g. `vc^2*R/(R^2 + ra^2)` |
| 2 | warning | Formulas at lines 101, 111, 185, 195 (`at="Problem 1(a), p. 1 …"`, `"Problem 1(b), p. 1 …"`) and the calcs `at:` of p1a-*, p1b-*, p1c-*, p1d-* | MIT's Problem 1 has no parts (one task) | Cites "Problem 1(a)" / "1(b)" as if they were MIT locations | Write `at="Problem 1, p. 1 (our part (a); our own solution)"` (same for (b)); in calcs `at: 'Problem 1, our part (a) (our own solution)'` etc. |
| 3 | info | 1(c) solution, "The shape" | (n/a) | "each apocentre lies 112.1° short of the one before" | Reword: "each apocentre lies 247.9° further round than the one before, 112.1° short of a full turn" |
| 4 | info | 1(d) solution, "A trap with the time step" | MIT: "roughly 1/50th" | Dots at exactly T_r/50 "line up on a few circles" | Correct, but there are about 26 (phases k and 50 − k share a radius); "on about two dozen circles" is more exact |
| 5 | info | 1(b) "The effective potential" | Notes eq. (130), p. 31 is written for the axisymmetric case with L_z | Cited for the spherical Φ_eff with L | Fine (same form); optionally add "(written there with L_z)" |
| 6 | info | 2(C) solution | Sheet writes Σ(r, θ) = v_c²/(2πGr) | Calls Σ(r, θ) a slip, uses R | Agreed; no change |

## Arithmetic and answer checks
- All 13 boxes recomputed independently (above). Own SciPy script: quadrature with the substitution r = r̄ − ½(r_a − r_p) cos u, plus DOP853 rtol = atol = 1e-12 over 100 T_r: energy drift 1.0e-10, L drift 6.7e-11, r between 0.3108852 and 1.0000000.
- Leapfrog table recomputed (kick-drift-kick, 100 T_r): 6.451e-3, 4.052e-4, 1.622e-5 for 50, 200, 1000 steps per period; ratios 15.9 and 25.0 confirm second order; 50-step error over periods 90–100 (6.42e-3) equals that over periods 0–10 (6.45e-3), so "does not grow with time" holds; 6.45e-3/0.125 = 5.2% ("5%").
- Dots at 0.06 spacing: 5001 dots span 300 = 100.506 T_r; 63.97% outside r̄ ("64.0%"); ring densities as above ("2.3", "2.0", "0.65"). T_r/50 = 0.05970.
- r_a/v_c for 10 kpc, 200 km/s = 48.89 Myr; T_r = 145.9 Myr ("146"); r_p = 3.1 kpc. 360°/√2 = 254.56°.
- Σ = 48400/216.14 = 223.93 M☉/pc²; M = 9.005e10 M☉; G = 6.674e-11 × 1.989e30/3.0857e16/1e6 = 4.302e-3.
- Derivations of 2(B) and 2(C) checked against notes eqs. (90)–(98): radial part v_c²/r², angular bracket −1 (eq. 94), jump of ∂φ₀/∂θ from −1 to +1, Σ = v_c²/(2πGr) (eq. 98). Page's Gauss-box route with Φ = v_c² ln[(r + |z|)/(2r_ref)] is correct: ∂Φ/∂z → ±v_c²/R.
- Every `<Answer>`: expr/value equals its solution; vars ranges finite (θ ∈ [0.2, 1.4] keeps 1 − cos θ ≥ 0.02 for the "below the plane" mistake; x, y ≥ 0.3 keep `-vc^2/x` finite); each mistake differs from the answer and its hint is true of that formula (2Ω solid body, Ω point mass, sign, below-plane derivative, point-mass inverse square, half Σ). Tolerances: p1d-frac 2% rejects the stroboscopic 0.62; p1c-turns 1% rejects 70.7 (epicycle estimate).
- Choice boxes: right answer at positions 2 and 1; lengths 67/59/66/62 and 56/59/61/60, the right one neither longest nor shortest.
- `calc:test` on this page: 35 passed. `content:check`: 0 errors; only warning for this page is the missing review file.
- Every solution ends with a check step (units, limits, epicycle estimate or numbers).

## Coverage and order
- Both MIT problems and all three parts of Problem 2 are covered in MIT's order. MIT's single Problem 1 task (integrate, plot at ~T_r/50, 50–100 orbits, line and dot plots, comment) is split into (a)–(d), said as our choice; every plot and comment the sheet asks for is either given a box (choice boxes for the line and dot plots) or self-marked, as "How to answer" says.
- Sheet's instructions (ready-made integrator recommended, hand in code) are reflected in the intro.
- Points: 30 and 10 (MIT's "triple weight"), parts 6+8+10+6 and 3+3+4 add up; split marked ours.
- Covers [4, 5], lecture 5, order 90: as in TASKS.md.
- Citations checked against printed pages: Poisson p. 22 before (79); (90) p. 23; (93), (94) p. 24; (95)–(98) pp. 24–25; Lecture 5 (102) p. 26, (104)–(105) p. 27, (110), (112) p. 28, (119) p. 29, (130) p. 31, (150) p. 34, (151) p. 35. All right.

## Licensing
- No figure from the sheet or notes is used; the "© Astronomical Returns. All rights reserved" figure of the Lecture 5 notes (p. 30) is not used or redrawn. The only graph is generated from a formula.
- Statements are rewritten in the page's own words; no verbatim MIT text beyond standard terms. No OpenStax or LibreTexts material.

## Notes
- No `## Summary` section; the frontmatter summary and intro give no results (apart from finding 1).
- No em dashes. Symbols: every symbol has a meaning scoped to `8-902-problem-set-2` (Φ, ρ, Σ, κ, Ω, ψ, θ, z, G, M, R, r, L, E, F, m, v, A, u, x, y, t, d, Δ, the dotted and subscripted forms); no cosmology fallback found.
- Links `/courses/8-902/orbits-and-epicycles` and `/courses/8-902/potential-density-pairs` exist, at lectures 5 and 4 as stated.
- The page is a draft; it can be set to `reviewed` once findings 1 and 2 are fixed.

COUNTS: errors=1 warnings=1 info=4

## Resolution (2026-11-28, by the page author)

- Error 1 ("How to answer" example gave away p1a-acc): the example is now `vc^2*R/(R^2 + ra^2)`, which answers no box.
- Warning 2 (Problem 1 has no parts on the sheet): the four Formula citations now read "Problem 1, p. 1 (our part (a); our own solution)" (and (b)), and every calcs `at:` for Problem 1 reads "Problem 1, our part (x) (…)".
- Info 3: the apocentre sentence now says "247.9° further round than the one before, 112.1° short of a full turn".
- Other info items left as they are.
