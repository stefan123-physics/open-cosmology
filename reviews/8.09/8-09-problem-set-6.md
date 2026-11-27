---
page: content/year-4/8.09/8-09-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset6/ (read: sheet PDF via pdftotext, 3 pages)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read; pages 66, 73, 77, 85, 87, 88, 89, 90 checked against cited equations; p. 77 rendered)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read; p. 10 rendered for eq. (1.36))
verdict: needs-changes
---

# Review: Problem Set 6 (8.09): a charge in a magnetic field, a time-dependent force, the |x| and csc² potentials and an oscillator in three dimensions

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree commit reviewed: b158044 (branch of .claude/worktrees/ps-809-6).

## Blind solve

Written from the stripped statements and MIT's sheet only, before the full page or its calcs file was opened.

### My answers
- p1a: L = (m/2)(r'^2 + r^2 th'^2) + (eB/2) r^2 th' - k r^2/2, so p_th = m r^2 th' + eB r^2/2 and
  H = p_r^2/2m + (p_th - eB r^2/2)^2/(2 m r^2) + k r^2/2.
  (dW_r/dr)^2 = 2mE - (al - eB r^2/2)^2/r^2 - m k r^2 = 2mE + eB al - al^2/r^2 - (mk + e^2B^2/4) r^2;
  W = al th + integral of sqrt(...) dr.
- p1b: p_th = 0 for all t, so th' = -eB/(2m) (Larmor rate). Radial: (W_r')^2 = 2mE - (mk + e^2B^2/4) r^2,
  a plain oscillator, omega_r = sqrt(k/m + e^2B^2/(4m^2)). Path: straight-line oscillation through the centre
  in a frame turning at -eB/(2m); in the lab, a rosette passing through the centre each half period.
  Checked numerically (Lorentz-force ODE, m=1.3, k=2, e=0.7, B=1.9): th' = -0.51154 = -eB/2m; rotating-frame
  y stays < 3e-11; x_rot = cos(omega_r t) + (0.3/omega_r) sin(omega_r t) to 3e-11.
- p2a: S = x(al + mAt^2/2) - al^2 t/(2m) - al A t^3/6 - m A^2 t^5/40 (sympy: HJ residual 0).
- p2b: al = m v0, beta = 0: x(t) = v0 t + A t^3/6, p(t) = m v0 + m A t^2/2.
- p3a: J = (8/3) sqrt(2m) E^(3/2)/F.
- p3b: tau = dJ/dE = 4 sqrt(2mE)/F (dimensions: sqrt(kg J)/N = kg m/s / N = s).
- p4a: dW/dx = sqrt(2m(E - a/sin^2(x/x0))).
- p4b: a > 0 and E > a (well bottom V = a at x = pi x0/2; for a <= 0 the motion reaches the singularity).
- p4c: J = 2 pi x0 sqrt(2m)(sqrt(E) - sqrt(a)); nu = dE/dJ = sqrt(E/(2m))/(pi x0).
  quad check: J = 5.2038656685 (m=1, E=3, a=1, x0=0.8) vs formula 5.2038656685; nu from direct period integral
  0.487310500773 vs formula 0.487310500771; second point (2.1, 5, 0.7, 1.3) agrees to 1e-12.
- p4d: V ~ a + a (x - pi x0/2)^2/x0^2, k_eff = 2a/x0^2, nu0 = sqrt(a/(2m))/(pi x0) = nu(E -> a).
- p5a: H = sum_i J_i sqrt(k_i/m)/(2 pi); nu_i = sqrt(k_i/m)/(2 pi).
- p5b: J = pi (p^2/sqrt(km) + sqrt(km) x^2); with w = atan2(x sqrt(km), p)/(2 pi), sympy {w, J}_(x,p) = 1;
  {w_i, w_j} = {J_i, J_j} = 0 since each depends on one pair only.
- p5c: F2 = sum w_i J_i(J_new) gives w_a = w3, w_b = w2 - w3, w_c = w1 - w2 (sympy: (M^-1)^T).
  w_c' = nu1 - nu2 = 0 for k1 = k2; for k1 = k2 = k3, w_b and w_c are conserved.

### Comparison with the page (opened after the answers above were written)
Every box was evaluated against my formula on 200 000 random points of its own `vars` box (NumPy); every mistake was evaluated on the same points.
- p1a-wr: agrees (max rel. diff 0). Mistakes: all three differ everywhere (min rel. diff 9e-3, 5e-3, 1e-4, all far above the checker's 1e-6); hints true.
- p1b-rate: agrees. Mistakes +eB/2m and −eB/m differ; hints true.
- p1b-freq: agrees. Mistakes differ; hints true (A² term = e²B²r²/(8m), matches my sympy H).
- p1b-path: "a rosette: swings through the centre along a turning line" (index 2) agrees with my ODE check.
- p2a-s: agrees (4e-16). Mistakes differ (min rel. 3e-4, 9e-2, 1e-2); hints true.
- p2b-x: agrees. Mistakes differ; hints true.
- p3a-j: agrees. p3b-tau: agrees. Mistakes are the half and quarter, hints true.
- p4a-dw: agrees; integrand finite on the whole box (x/x₀ in [1.14, 1.4], a/sin² ≤ 1.21 < E).
- p4b-cond: "a > 0 and E > a" (index 0) agrees.
- p4c-j: agrees; my quad integral 5.2038656685 vs formula 5.2038656685.
- p4c-nu: agrees; direct period integral 0.487310500773 vs 0.487310500771.
- p4d-nu0: agrees.
- p5a-h: agrees. p5b-j: agrees; sympy {w, J} = 1.
- p5c-wa, p5c-wb, p5c-wc: agree with my (M⁻¹)ᵀ route (independent of the page's F₂ route). p5c-one: w_c (index 3), p5c-two: w_b and w_c (index 1): agree.
- Disagreements: none.

Key code (abridged; run with the repo .venv, `python -I`):
```python
# P1: H from the Lagrangian, then Lorentz-force ODE with p_theta = 0
L = m/2*(rd**2 + r**2*thd**2) + e*B*r**2*thd/2 - k*r**2/2      # sympy
# -> H = p_r^2/2m + (P - eB r^2/2)^2/(2 m r^2) + k r^2/2
sol = solve_ivp(lorentz, [0, 20], [1, 0, 0.3, -e*B/(2*m)], rtol=1e-11, atol=1e-12)
# thetadot = -0.511538 = -eB/2m; in the frame turning at -eB/2m: y < 3e-11, x = cos(Wt) + (0.3/W) sin(Wt) to 3e-11
# P4: J = 2*x0*quad(sqrt(2m(E - a/sin(u)^2)), u1, pi-u1); T = 2*x0*quad(1/sqrt(2(E - a/sin^2)/m), ...)
# P5: (M.inv().T) * [w1, w2, w3] with M = [[1,1,1],[1,1,0],[1,0,0]] -> [w3, w2 - w3, w1 - w2]
```
`pytest tests/calc -k 8-09-problem-set-6`: 24 passed. `npm run content:check` in the worktree: 0 errors (the only warning for this page is the missing review file).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Symbols: `\Omega` and `\Omega_0` used in Problems 1(a), 1(b), 4(d) and 5(a) | (notes: Ω is the oscillator's angular frequency) | data/symbols.json has no meaning of Ω or Ω₀ scoped to this page, so the popup, "Symbols on this page" and read-aloud fall back to the general cosmology meanings: "The density parameter Ω = ρ/ρ_c" and "Today's value of Ω". content:check does not catch it because the general meaning applies to every page. | Add page-scoped meanings (`pages: ["8-09-problem-set-6"]`): Ω = "An angular frequency: in Problem 1, √(k/m + (eB/2m)²), the frequency of the radial oscillation; in the notes' oscillator formulas and Problem 5, √(k/m)", unit rad/s; Ω₀ = "The angular frequency 2πν₀ of small oscillations at the bottom of the well (Problem 4(d))", unit rad/s. |
| 2 | warning | Problem 5(a) solution, Formula "Oscillator action" (eq. 4.190) | In (4.190) x₀ is the oscillator's amplitude, √(2mE)/(mΩ) (eq. 4.189) | Quotes J = π√(2mE) x₀ on a page where x₀ is Problem 4's cell length; the page-scoped meaning of x₀ ("the length that sets the width of the cells … in Problem 4") is shown for it | Quote only J = 2πE/Ω from (4.190) (keep the citation), or rename the amplitude (e.g. x_max) and say it is the amplitude. |
| 3 | info | Problem 5(c) choice boxes p5c-one, p5c-two; labels "When k1 = k2…" | sheet: w_{a,b,c}, k₁ = k₂ | Choices "w_b", "w_a and w_b" etc. and the labels are plain text, so readers see the underscore | Write the choices as "$w_b$", "$w_b$ and $w_c$" and the labels with $k_1 = k_2$ (choices are KaTeX-rendered; no backslash needed). |
| 4 | info | Problems 2 and 3, part statements | single questions | Splits into (a)/(b) are listed as "our additions" in the intro but the parts themselves are not marked | Optional: add "(The split into two parts is ours.)" under each exercise heading. |

## Arithmetic and answer checks
- All 21 boxes agree with my blind answers (see Blind solve). Every listed mistake is finite over its `vars` box and differs from the answer at every sampled point; every mistake hint is true of its formula.
- Problem 1(b) path graph: x = sin s cos(−0.15 s), y = sin s sin(−0.15 s), s to 20.944 = π/0.15 (half a turn of the line); the line turns clockwise for eB > 0, as the caption says. Agrees with my ODE.
- Problem 1(b) rotating-frame check (Coriolis cancels the magnetic force of the motion along the line; magnetic minus centrifugal gives m(eB/2m)² r inward): verified by hand, correct.
- Problem 4(d) cross check J ≈ 2π(E − a)/Ω₀: πx₀√(2m)(E − a)/√a = 2π(E − a)x₀/√(2a/m), verified.
- Problem 5(c): H = ν₃J_a + (ν₂ − ν₃)J_b + (ν₁ − ν₂)J_c expands to Σν_iJ_i, verified.
- p1a-wr `vars`: about 0.4% of the box (large α_θ, small r) gives a negative (∂W_r/∂r)², i.e. a classically forbidden radius. Harmless for checking; info only.
- Calcs independence: p1a-wr (unexpanded square), p1b-rate (root of p_θ = 0), p1b-freq (curvature of the radial potential), p2a-s (numerical ∫f²/2m), p2b-x (integrated velocity), p3 and p4(c) (quadrature of ∮p dx and ∮dx/ẋ), p4d-nu0 (numerical V″), p5a-h (energy from the sheet's map), p5b-j (∮p dx) are independent of the page's algebra. p4d-limit is tautological (E sampled equal to a; it cannot fail) and p5c-wa/wb/wc use the same F₂ derivative as the page; both are backed by independent entries or by my (M⁻¹)ᵀ check. Info only.

## Coverage and order
- All five MIT problems, in MIT's order, with MIT's parts in order: 1(a)(b), 2, 3, 4(a)–(d), 5(a)–(c).
- Points match the sheet: 12 (6 + 6), 10, 10, 18 (2 + 4 + 8 + 4), 10 (3 + 3 + 4); total 60. The 6/4 and 5/5 splits of Problems 2 and 3 are declared ours.
- The sheet's formulas are cited to the right places: Problem 1 and eq. (1) p. 2, eq. (2) p. 2, Problem 3 p. 2, eq. (3) p. 3, 5(b) and 5(c) p. 3.
- Notes citations all checked on the PDFs (section, equation, printed page): (1.36) §1.2 p. 10; (4.43), (4.52) §4.2 p. 66; (4.104), (4.107) §4.4 p. 73; (4.130), (4.131) §4.4 p. 77; (4.173), (4.179) §4.6 p. 85; (4.190), (4.191), (4.192) §4.6 p. 87; (4.202) §4.6 p. 88; (4.207) §4.6 p. 89. The quoted forms match the notes. Both readings are cited.
- The sheet's 4(c) hint (Goldstein §10.8 integrals) is replaced by the notes' polar-action integral (4.202)/(4.207); the substitution α_θ → √E, α_φ → √a is exact and the conditions of (b) are exactly 0 < α_φ < α_θ. A fair replacement, declared in the intro and in the part.
- The closing remark of 5(c) (notes' Kepler J₁ = J_φ, J₂ = J_θ + J_φ, J₃ = J_r + J_θ + J_φ, two constant angles) matches eq. (4.215), p. 90.
- Statements pin down a unique form for every formula box (α_θ = canonical p_θ; α fixed as ∂S/∂x at t = 0 and S(0, 0) = 0; integrand sign for motion towards larger x; ν in cycles per unit time; J(x, p) of one direction; w's as linear combinations). Every box is named in its part's statement. No hint gives a result away. No `## Summary`; summary and intro give away no box.
- "Our choice" items (SI units, e and sign of B, α and the constant of S, the cell 0 < x < πx₀, the letter ν_i) are marked where they appear and listed in the intro.

## Licensing
- The sheet has no figures and no rights notices; the page embeds nothing from it. The graph is generated from formulas.
- Goldstein is never quoted; the intro refers to it only as "a mechanics textbook". No OpenStax or LibreTexts. Wording is the page's own; MIT's statements are paraphrased.
- No em dashes; no control characters.

## Notes
- Prerequisites (hamilton-jacobi-equation, kepler-problem-hamilton-jacobi, action-angle-variables, action-angle-variables-kepler) and `covers: [4.4, 4.5, 4.6]` fit the topics.
- The intro's statement that the notes write the angle variable as ω is right (eq. 4.174, p. 85).

COUNTS: errors=1 warnings=1 info=4 (info: table rows 3 and 4, the p1a-wr vars range, the two non-independent calcs routes)

## Resolution (2026-11-27, by the page author)

- Error 1: data/symbols.json now has meanings scoped to this page for Ω ("An angular frequency: in Problem 1, √(k/m + (eB/2m)²), the frequency of the radial oscillation; in the notes' oscillator formulas and Problem 5, √(k/m).", rad/s) and Ω₀ (the angular frequency 2πν₀ of small oscillations at the bottom of the well, Problem 4(d), rad/s), so the cosmology meanings no longer show.
- Warning 2: the Formula "Oscillator action" now quotes only J = 2πE/Ω from eq. (4.190), so the notes' amplitude x₀ no longer clashes with Problem 4's cell length x₀.
- Info (5(c) display): the two choice boxes and their labels now write $w_a$, $w_b$, $w_c$ and $k_1 = k_2$ as maths.
- Other infos: no change.
- `status: reviewed`.
