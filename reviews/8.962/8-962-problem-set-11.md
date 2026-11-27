---
page: content/year-5/8.962/8-962-problem-set-11.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset11/ (read: PDF, pdftotext plus pages 2 and 3 rendered with pdftoppm)
  - 8.962 Lecture 18 transcript 4a374ede…_wBvXOb59l-k.pdf (read, 20 PDF pages)
  - 8.962 Lecture 20 transcript 96fab1aa…_PVYTNKZDHBo.pdf (read, 16 PDF pages)
  - 8.962 Lecture 22 transcript 9cb27977…_ZqF-7bjnzCU.pdf (read, 18 PDF pages)
  - 8.962 Lecture 23 transcript 7ed0f539…_uNWqE3LS1E.pdf (read, 18 PDF pages)
  - NASA Sun fact sheet, CODATA 2018 (values checked from memory of the published numbers, not fetched)
verdict: needs-changes
---

# Review: Problem Set 11 (dust collapse, star cluster, numerical black-hole orbits)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written before opening the full page or its calcs file (from the stripped statements and MIT's sheet only).

### My answers
- 1(a): Friedmann with curvature term 1/(a²R0²): ȧ² = (1−cosη)/(R0²(1+cosη)) = [2/(1+cosη) − 1]/R0², which equals 8πGρ0/(3a) − 1/R0² iff ρ0 = 3/(8πG R0²). Second Friedmann equation also satisfied (sympy residual 0).
- 1(b): at τ = πR0/2 (η = π) a = 0: the dust reaches zero size, density diverges, a curvature singularity (crunch); the solution cannot be continued; the star has by then formed a black hole and the singularity is at r = 0 inside the horizon.
- 1(c): R = 2GM/(1 − Ê²)  (equivalently Ê² = 1 − 2GM/R).
- 1(d): integral checked numerically = sqrt(R*³/8GM)(η+sinη) at η = 0.5, 1.7, π. Time to reach r = 0: τ = π sqrt(R*³/(8GM)).
- 1(e): R0 = sqrt(R*³/(2GM)); sin χs = R*/R0 = sqrt(2GM/R*), χs = arcsin sqrt(2GM/R*).
- 1(f) (R* = 5GM): R0 = 7.90569 GM, χs = 0.684719; surface at r = 2GM at η_h = arccos(−0.2) = 1.772154; generator leaves centre at η = η_h − χs = 1.087435; τ = (R0/2)(η + sin η) = 7.7985 GM. (Surface crosses 2GM at τ = 10.878 GM; crunch at τ = 12.418 GM.)
- 1(g): sketch: surface r(τ) falling from 5GM to 0; horizon generator starting at the centre at τ ≈ 7.80 GM, growing outward and meeting the surface at r = 2GM, then staying at r = 2GM.
- 2(a): e^{2Λ} = (1 − 2Gm/r)^{-1}; dΦ/dr = Gm/(r(r − 2Gm)). The crucial difference: no radial pressure (TOV with p = 0 in the Φ' equation; the support is by tangential stress / orbital motion, so there is no hydrostatic dp/dr equation).
- 2(b): V_eff = e^{2Φ}(1 + L̂²/r²) with e^{2Φ+2Λ}ṙ² = Ê² − V_eff. Circular: L̂ = r sqrt(Gm/(r − 3Gm)), Ê = e^{Φ} sqrt((r − 2Gm)/(r − 3Gm)), Ω = e^{Φ} sqrt(Gm/(r²(r − 2Gm))) (Ω² = e^{2Φ}Φ'/r).
- 2(c): V'' at the circular orbit (with m' = 4πr²ρ, Φ'' from (a)) = 2G e^{2Φ}(r m − 6G m² + 4πr⁴ρ)/(r²(r − 3Gm)(r − 2Gm)). Stable iff x(1 − 6x) + 4πGρr² > 0 with x = Gm/r, i.e. Gm/r < [1 + sqrt(1 + 96πGρr²)]/12 (and Gm/r < 1/3 for a circular orbit to exist). With ρ = 0 locally it reduces to Gm/r < 1/6.
- 2(d): e^{2Φ(r)} = (1 − 2GM/R)^{3/2} (1 − 2GMr²/R³)^{-1/2}. Inside, 4πGρr² = 3x, condition 4x − 6x² > 0 (x < 2/3), weaker than existence x < 1/3. At the edge, outward push into vacuum needs GM/R < 1/6. Max GM/R = 1/6 ≈ 0.1667 (under the "edge counts" reading; with the ρ-free reading Gm/r < 1/6 also 1/6).
- 2(e): GM/R = 1/6: z_surface = (2/3)^{-1/2} − 1 = 0.2247; z_centre = (2/3)^{-3/4} − 1 = 0.3554. z ~ 0.3 reachable only for light from the deep interior, marginally; z ≈ 6.5 impossible (max ~0.36).
- 3(a): GM/c³ = 49.255 μs, GM/c² = 14.766 km. d²r/dτ² = −1/r² + L̂²/r³ − 3L̂²/r⁴.
- 3(b): Ê = 1.1: critical unstable circular orbit Ê² = (r−2)²/(r(r−3)) gives r_c = 25/7 = 3.5714 GM, L̂_c = 4.7246 GM. Capture for L̂ < 4.7246; escaping orbits can get down to just above 3.571 GM (own RK4: L̂ = 1.0001 L̂_c turns at 3.6125 GM, analytic 3.6125).
- 3(c): turning points 10 and 50: L̂ = 4.58349 GM, Ê = 0.983904; periapsis advance per radial cycle 91.33° (own RK4 451.330° − 360°; quadrature 91.330°).
- 3(d): r = 10: L̂ = sqrt(100/7) = 3.77964 GM, Ê = 0.8/sqrt(0.7) = 0.956183, period 2π·10^{3/2} GM = 198.692 GM = 9.7865 ms.
- 3(e): r = 3.5: Ê = 1.133893, L̂ = 4.949747; V'' = 2(r−6)/(r³(r−3)) = −80/343; e-folding proper time 1/sqrt(40/343) = sqrt(343/40) = 2.9283 GM (own RK4 measured 2.926 to 2.931). Outward push escapes (Ê > 1), inward plunges.

Key code (own fixed-step RK4 on y = (r, ṙ, φ, t), step 0.01 GM, second-order equation r̈ = −1/r² + L²/r³ − 3L²/r⁴):
```python
acc=lambda r,L:-1/r**2+L**2/r**3-3*L**2/r**4
def deriv(y,L,E):
    r,v,ph,t=y; return np.array([v,acc(r,L),L/r**2,E/(1-2/r)])
# RK4 step: k1..k4, y += h/6*(k1+2k2+2k3+k4)
```
Results: 3(c) advance 91.32975° (RK4) vs 91.32975° (quad); 3(e) r0 = 3.5 + 1e-6 escapes to r = 100 at τ ≈ 217 GM, r0 = 3.5 − 1e-6 plunges to r = 2.01 at τ ≈ 42 GM; δL̂/L̂ = ±1e-6 gives escape / plunge likewise.

### Comparison with the page (one line per answer id)
- p1a-rho0 `3/(8*pi*G*R0^2)`: agrees.
- p1b-end (choice 2, crunch): agrees.
- p1c-turn `2*G*M/(1-E^2)`: agrees.
- p1d-tc `pi*sqrt(Rstar^3/(8*G*M))`: agrees (but see error 1 on its mistake hint).
- p1e-r0 `sqrt(Rstar^3/(2*G*M))`: agrees.
- p1e-chi `asin(sqrt(2*G*M/Rstar))`: agrees.
- p1f-eta 1.087: agrees (1.087435).
- p1f-tau 7.80 GM: agrees (7.7985).
- p2a-e2l `1/(1-2*G*m/r)`: agrees.
- p2a-dphi `G*m/(r*(r-2*G*m))`: agrees.
- p2b-ang, p2b-en, p2b-om: agree (same expressions).
- p2c-bound `(1 + 4*pi*r^3*rho/m)/6`: **same condition, different expression.** My bound is (1 + sqrt(1 + 96πGρr²))/12. Both are correct: the page's condition Gm/r < (1 + 4πr³ρ/m)/6 is, after multiplying by 6Gm/r > 0, 6x² − x − 4πGρr² < 0 with x = Gm/r, whose solution is x < (1 + √(1 + 96πGρr²))/12. But as formulas they differ in value (G = 1, m = 1, r = 10, ρ = 10⁻³: page 2.261, mine 0.5485), so the box rejects the explicit bound. See error 2.
- p2d-e2phi: agrees. p2d-max 0.1667: agrees.
- p2e-zs 0.225, p2e-zc 0.355: agree. p2e-q (choice 1): agrees.
- p3a-t 49.25 μs, p3a-l 14.77 km: agree (49.255, 14.766). p3a-rdd: agrees.
- p3b-lc 4.725, p3b-r 3.571: agree. p3b-lim (3GM): agrees.
- p3c-en 0.9839, p3c-ang 4.583, p3c-adv 91.3°: agree. p3c-lim (4GM): agrees (peak of height 1 at r = 4GM; periapsis must lie outside a peak at r > 4GM).
- p3d-ang 3.780, p3d-en 0.9562, p3d-period 9.79 ms: agree.
- p3e-en 1.134, p3e-tau 2.93 GM: agree. p3e-both (3GM < r ≤ 4GM): agrees.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 1(d), `<Answer id="p1d-tc">`, first mistake | (our box) | mistake `pi/2*sqrt(Rstar^3/(8*G*M))` with hint "That is the value at η = π/2, where r = R*/2" | False: at η = π/2, η + sin η = π/2 + 1, so τ(π/2) = (π/2 + 1)√(R*³/8GM), not (π/2)√(…). Change the hint to "The factor is η + sin η at η = π, which is π, not π/2: the surface reaches r = 0 at η = π, not at η = π/2." (or replace the mistake by `(pi/2 + 1)*sqrt(Rstar^3/(8*G*M))` with the hint "That is the time to reach r = R*/2, at η = π/2; r = 0 is η = π.") |
| 2 | error | Problem 2(c), `<Answer id="p2c-bound">` | "What local condition must Gm(r)/r satisfy if all orbits at r are to be stable?" | asks for "the bound that Gm(r)/r must stay below … in terms of r, m and ρ", accepts only (1 + 4πr³ρ/m)/6 | That bound still contains m, so it is not unique: the explicit bound (1 + √(1 + 96πGρr²))/12 is the same condition (shown above) but a different value, and a correct reader is marked wrong. Fix: ask for X in "Gm/r < (1/6)(1 + X)" with expr `4*pi*r^3*rho/m` (mistake `0`, hint as now for 1/6), or state the required form in the question: "write the condition as Gm/r < (1/6)(1 + …) and give the right side". Optionally add the explicit form to the solution's Step "The condition". |
| 3 | error | Problem 1(g), solution, after the Plot | (sketch only) | "Inside the horizon curve, light can still escape for a while; everything inside the region it bounds, after it has formed, is trapped." | The first clause is wrong: events at r < r_H(τ) are inside the event horizon and no light from them escapes. Replace with: "Outside the horizon curve, light from the collapsing dust can still escape for a while (until the surface crosses it); every event inside the region it bounds is trapped." |
| 4 | warning | Intro list "Some choices are ours"; Problem 2(c) statement | "What local condition must Gm(r)/r satisfy" (no mention of ρ) | Box demands the density-dependent condition; 1/6 is given only as a mistake hint | The page's condition is the right necessary-and-sufficient one (my derivation agrees, V″ formula checked with sympy), and the statement says "in terms of r, m and ρ", so a reader is told. But MIT's wording admits the simpler sufficient form Gm/r < 1/6 (needed wherever ρ = 0), and the page does not flag the reading. Add to the intro list: "in Problem 2(c), the exact local condition, with the density term; the sufficient condition Gm/r < 1/6, which holds wherever there is no matter, is discussed in the solution". |
| 5 | warning | Problem 1(g), solution, end of "The diagram" | (not in source) | "…which is why the horizon is a global notion, as the lesson for Lecture 22 stresses." | Neither the lesson `event-horizons-kruskal-kerr.mdx` nor the Lecture 22 transcript says this (grep for "global", "entire future", "teleolog": none). Drop "as the lesson for Lecture 22 stresses", or write "(a point the lecture does not make)". |
| 6 | info | frontmatter `covers: [20, 21, 22, 23]` | Problem 1(a)–(b) use the closed RW solution of Lecture 18 | Lecture 18 lesson is a prerequisite and reading1 but not in `covers` | Consider `covers: [18, 20, 21, 22, 23]` so the Lecture 18 lesson gets a "Practise" link; author's choice. |

## Arithmetic and answer checks
All numbers recomputed with my own code (scripts in the scratch folder `rev11code/`: `p12.py`, `p3.py`, `p3e.py`, `p3e2.py`, `chk.py`).
- 1(a): sympy residuals of both Friedmann equations with ρ = 3/(8πG R0² a³) are 0.
- 1(d): quad of the integral equals √(R*³/8GM)(η + sin η) at η = 0.5, 1.7, π (agreement 1e-11). Newtonian free-fall identity π√(R³/8GM) = (π/2)√(R³/2GM) holds.
- 1(f): R0 = 7.905694, χs = 0.684719, η_h = 1.772154, η_e = 1.087435, τ_e = 7.79846, τ_h = 10.87804, crunch 12.41824, r(η_e) = 3.662: all page values agree. Plot formulas (surface and horizon) are R* a(η) and R0 a(η) sin(η − η_e): correct.
- 2(a)–(c): V″ at the circular orbit by sympy = 2G e^{2Φ}(rm − 6Gm² + 4πr⁴ρ)/(r²(r − 3Gm)(r − 2Gm)), same as the page. P_t = ½ρ r Φ′ = ½ρv² checked against v² = rΦ′. 
- 2(d)–(e): e^{2Φ} formula, 1/6, z_s = 0.22474, z_c = 0.35540 agree. Transverse-Doppler check 1 + z = Ê e^{−2Φ} = √2 at the surface for a radially emitted photon: correct.
- 3(a): GM/c³ = 49.2547 μs, GM/c² = 14.7662 km.
- 3(b): r_c = 25/7 exactly (E² = 121/100), L̂_c = √(625/28) = 4.72456. Own RK4 (h = 0.005, start r = 200): L̂ = 1.0001, 1.001, 1.01 L̂_c turn at 3.6125, 3.7048, 4.0291 (page 3.613, 3.705, 4.029); 0.999 L̂_c captured. Total φ swept at 1.0001 L̂_c (solve_ivp) = 2.25 turns (page "about 2.2").
- 3(c): p = 50/3, e = 2/3 closed forms give L̂ = 4.583492, Ê = 0.983904, V(10) = V(50) = 0.968067. Own RK4 (h = 0.01): Δφ − 360° = 91.32975°; the page's χ-integral gives 91.32975°; weak-field 64.8°; radial period 1105.8 GM (page 1106).
- 3(d): L̂ = 3.779645, Ê = 0.956183, T = 198.692 GM = 9.7865 ms.
- 3(e): V″ = −80/343 = −0.233236, λ = 0.341494, 1/λ = 2.92836. Own RK4 (h = 0.001) from 3.5 ± 1e-6: |r − 3.5| passes 0.1 at τ = 35.861 (out, escapes to r = 100) and 35.627 (in, plunges to 2.01): page 35.9 and 35.6. ln(2·0.1/1e-6)/λ = 35.74; 36.8 e-folds ≈ 108 GM (page "37 … roughly 110"); 0.144 ms; orbit 15.55 GM of proper time; minimum of V for L̂² = 24.5 at r = 21. All agree.
- Tolerances: 1% on numerical results is loose enough for a careful reader's own integrator (my RK4 values are within 0.01%) and tight enough to reject every listed mistake. p3b-r at 1% would reject a numerical minimum taken at 1.001 L̂_c (3.705, +3.7%), but the statement asks for the limit, so fair.
- `<Answer>` vars ranges: all finite and physical (2Gm/r ≤ 0.2 in Problem 2 boxes, r > 3Gm everywhere; E in [0.2, 0.9] for p1c).
- Mistake hints: all true except p1d-tc's first (error 1).
- `calc:test -k problem-set-11`: 300 passed. `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- All of MIT's parts are present in MIT's order: 1(a)–(g), 2(a)–(e), 3(a)–(e). Added boxes are announced in the intro and in each part.
- Slips handled and stated: "found in (b)" in 1(d) refers to (c) (confirmed on the rendered page 2); "8.962 Spring 2006" header; E vs Ê notation. The rendered sheet shows "z ≃ 6.5"; the page's "about 6.5" is right.
- 1(g) sketch replaced by a computed graph, as the intro says.
- Every "our choice" in the intro is marked at its part (2(b) V_eff, 2(d) edge reading, 2(e) static source, Problem 3 orbits and integrator), except the 2(c) reading (warning 4).

## Licensing
- MIT sheet: no figures, no "rights reserved" or "Courtesy of" notice (checked text and rendered pages). Page wording is its own; the formulas quoted from the sheet are cited to it.
- No OpenStax or LibreTexts material; NASA and CODATA values cited by title only.
- Citations checked against PDF pages: L18 p. 13 (Friedmann equations named F1/F2), L20 pp. 11–12 (tt component, m(r)) and pp. 13–14 (rr component with pressure), L22 pp. 4–5 (√(1 − 2GM/r) energy ratio on p. 4), L23 p. 5 (effective potential), pp. 8–10 (circular orbits, Kepler law on p. 10), p. 11 (r_ms = 6GM at the bottom of p. 11). All correct.

## Notes
- The page's reading of 2(d) (edge star pushed outward into vacuum) is reasonable and gives 1/6; the ρ-free reading of 2(c) gives the same 1/6, so p2d-max is safe under either reading.
- "about 2.2 turns" (3(b)): the total angle swept is 2.25 turns; "about 2.25 turns" would be more exact (info).
- Claims about the Lecture 21 lesson (plots proper and Schwarzschild time of infall, cycloid for a rock) verified in `buchdahl-equations-of-state-schwarzschild.mdx`.
- No `## Summary`, no em dashes (grep).

COUNTS: errors=3 warnings=2 info=3

## Resolution (2026-11-27, by the page author)

- Error 1 (p1d-tc): the mistake stays (π/2 in place of π); its hint now reads "The factor is η + sin η at η = π, which is π, not π/2: the surface reaches r = 0 at η = π." (At η = π/2 the factor is π/2 + 1, so the old hint was false.)
- Error 2 (p2c-bound): the box now asks for X in Gm/r < (1/6)(1 + X), with `expr` 4πr³ρ/m and the mistake 0 (hint: that gives the bound 1/6, which holds where the density is zero). The solution step "The condition" adds the explicit form Gm/r < (1 + √(1 + 96πGρr²))/12. In the calcs file, `p2c-bound` checks the new expression against the numerical V″ of the uniform cluster, and a new entry, `p2c-explicit`, checks the explicit form by root finding. Page-scoped meanings were added for X and x.
- Error 3 (1(g)): the sentence now reads "Outside the horizon curve, light from the collapsing dust can still escape for a while (until the surface crosses it); every event inside the region it bounds is trapped."
- Warning 4: the intro's list of our choices now includes the exact local condition of Problem 2(c), with the density term; the sufficient condition Gm/r < 1/6 is discussed in the solution.
- Warning 5: "as the lesson for Lecture 22 stresses" is dropped.
- Info 6: `covers` is now [18, 20, 21, 22, 23]; the Lecture 18 lesson was already a prerequisite.
- Info (3(b)): "about 2.2 turns" becomes "about 2.25 turns" (2.245 by our run, 2.25 by the reviewer's); the calcs fact entry is updated to match.
- Info (3(e), 37 e-foldings and about 110 GM): no change needed. The page uses ln(2Δ/ε) with Δ = 1, ε = 10⁻¹⁶, which gives 109.9 GM.
- `status: reviewed`.
