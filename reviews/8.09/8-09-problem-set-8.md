---
page: content/year-4/8.09/8-09-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset8/ (read: pdftotext text and rendered p. 2)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: downloaded fresh, every cited equation and page checked)
verdict: pass-with-notes
---

# Review: Problem Set 8 (8.09): flows in corners and round a cylinder, a spherical sound wave, flow between coaxial cylinders and dimensional analysis

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed at worktree commit a4cd041 (`.claude/worktrees/ps-809-8`).

## Blind solve


### My answers (written before opening the full page or its calcs file)

Problem 1 (wall along theta = 0, C > 0, second wall = first half-plane counterclockwise not crossed)
- 1(a) phi = C r^2 cos 2theta: v_r = 2Cr cos 2theta, v_theta = -2Cr sin 2theta. Second wall at 90 deg. |v| = 2 C r. Stagnation point: only r = 0 (the corner). (Note: v_theta = 0 also at 180 deg, so a flat wall with stagnation flow onto it is another fitting geometry; the page's "first half-plane" rule selects 90 deg.)
- 1(b) phi = C r^4 cos 4theta: v_theta = -4C r^3 sin 4theta; second wall at 45 deg; |v| = 4 C r^3; stagnation only at r = 0.
- 1(c) phi = C r^(2/3) cos(2theta/3): v_theta = -(2/3) C r^(-1/3) sin(2theta/3); second wall at 270 deg (flow round a convex 90-degree corner); |v| = (2/3) C r^(-1/3) = 2C/(3 r^(1/3)); no stagnation point (speed diverges at r = 0).

Problem 2
- 2(a) phi = u (r + R^2/r) cos theta; v_r = u (1 - R^2/r^2) cos theta; v_theta = -u (1 + R^2/r^2) sin theta.
- 2(b) P(theta) = Pinf + (1/2) rho u^2 (1 - 4 sin^2 theta). Lowest P - Pinf = -(3/2) rho u^2 = -3375 Pa. Net force zero (d'Alembert).
- 2(c) dy/dx = v_y/v_x = -2R^2 x y / [ (x^2+y^2)^2 + R^2 (y^2 - x^2) ]. Stream function psi = u y (1 - R^2/(x^2+y^2)); psi/u = K gives the stated curve. K = h. For h = R/2: y - R^2/y = R/2 -> y = R(1/2 + sqrt(17/4))/2 = 1.2808 R.

Problem 3
- 3(b) v_r = f/(rho c r) - g/(rho c r^2) (f, g of r - c t; time-independent part dropped).
- 3(c) nabla^2 (r_hat / r^2) = 0 for r > 0.

Problem 4
- 4(a) v_z(r) = u ln(r/R1)/ln(R2/R1).
- 4(b) Inner: +2 pi eta u / ln(R2/R1); outer: -2 pi eta u / ln(R2/R1). Number: 2 pi (0.10)(0.20)/ln 1.5 = 0.3099 N/m.

Problem 5
- 5(a) 3 ratios; f D / V = F(L/D, V D / nu).
- 5(b) V2/V1 = 2.0. 5(c) f2/f1 = 4.0.

Problem 6
- 6(a) 4 ratios; F_D/(rho V^2 D^2) = F(rho V D/eta, omega D/V, V/c_S).
- 6(b) F_D/(rho V^2 D^2) = G(rho V D/eta, omega D/V); D'/D = 0.5; omega'/omega = 4.0; F_D'/F_D = 1.0.

Python checks (sympy, .venv): Laplacians of all four potentials 0; speeds 2Cr, 4Cr^3, 2C/(3 r^(1/3)); first zero of v_theta at pi/2, pi/4, 3pi/2; surface pressure rho u^2 (1 - 4 sin^2)/2; implicit slope of x^2+y^2 = R^2/(1-K/y) minus dy/dx simplifies to 0; nsolve y(1 - 1/y^2) = 0.5 -> 1.280776; P' = f/r satisfies the wave equation; v_r satisfies Euler (residual (g' - f)/(rho r^2) = 0) and the vector wave equation for f = sin(k s) and f = exp(-s^2) (residual 0); nabla^2(r_hat/r^2) = 0; 2 pi 0.1 0.2/ln 1.5 = 0.309925.

### Comparison (after opening the full page), one line per answer id

| id | mine | page | agree |
|---|---|---|---|
| p1a-wall | 90 | 90 | yes |
| p1a-stag | corner r = 0 | "at the corner, r = 0" (index 1) | yes |
| p1a-speed | 2Cr | 2*C*r | yes |
| p1b-wall | 45 | 45 | yes |
| p1b-stag | corner r = 0 | index 3, "at the corner, r = 0" | yes |
| p1c-wall | 270 | 270 | yes |
| p1c-stag | none | index 0, "nowhere at finite r" | yes |
| p1c-speed | 2C/(3 r^(1/3)) | 2*C/(3*r^(1/3)) | yes |
| p2a-phi | u(r + R^2/r) cos th | same | yes |
| p2a-vr | u(1 - R^2/r^2) cos th | same | yes |
| p2a-vt | -u(1 + R^2/r^2) sin th | same | yes |
| p2b-p | Pinf + rho u^2 (1 - 4 sin^2)/2 | same | yes |
| p2b-min | -3375 Pa | -3375 | yes |
| p2b-force | zero | index 1, "none: the pushes cancel" | yes |
| p2c-slope | -2R^2xy/[(x^2+y^2)^2 + R^2(y^2 - x^2)] | -2R^2xy/((x^2+y^2)^2 - R^2(x^2 - y^2)) | yes (identical denominator) |
| p2c-k | h | h | yes |
| p2c-top | 1.2808 | 1.28 (1%) | yes |
| p3b-v | (f/r - g/r^2)/(rho c) | same | yes |
| p3c-lap | 0 | index 2, "zero for every r > 0" | yes |
| p4a-vz | u ln(r/R1)/ln(R2/R1) | same | yes |
| p4b-f1 | +2 pi eta u/ln(R2/R1) | same | yes |
| p4b-f2 | -2 pi eta u/ln(R2/R1) | same | yes |
| p4b-num | 0.3099 N/m | 0.310 (1%) | yes |
| p5a-n | 3 | 3 | yes |
| p5a-rel | fD/V = F(VD/nu, L/D) | index 3 | yes |
| p5b-v | 2 | 2 | yes |
| p5c-f | 4 | 4 | yes |
| p6a-n | 4 | 4 | yes |
| p6a-rel | F(Re, omega D/V, V/c_S) | index 1 | yes |
| p6b-d | 0.5 | 0.5 | yes |
| p6b-w | 4 | 4 | yes |
| p6b-f | 1 | 1 | yes |

No disagreement: 32 boxes, all equal to my blind answers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1, statement | "Find the geometry of a fixed surface that is consistent with each of these potential flows" | Walls are half-planes; one along theta = 0; the box asks for "the first half-plane counterclockwise from theta = 0 that the flow does not cross" (marked our choice, listed in the intro) | None needed. This is a fair reading: the standard answers are a 90 deg corner, a 45 deg corner and flow round a 270 deg (convex right-angled) edge, and the rule makes every box single-valued. The other valid reading for (a), stagnation flow onto a flat wall (v_theta = 0 also at 180 deg), is mentioned in the 1(a) check. |
| 2 | info | Problem 1, stagnation boxes | "Identify any stagnation points at finite r" | Corner r = 0 counted as a stagnation point in (a), (b); none in (c) | None needed. r = 0 is finite; |v| = 2Cr and 4Cr^3 vanish there, and 2C/(3r^(1/3)) diverges there. The page's own definition ("a point where the fluid is at rest") makes the choice unambiguous; no distractor is a second right answer. |
| 3 | info | Problem 4 | One unsplit question, 10 points | Parts (a) 6 and (b) 4, said to be our split, plus "forces counted along +z" as our choice | None needed; disclosed in the statement and the intro. |

## Arithmetic and answer checks
- All my Python checks (sympy/numpy in the main checkout's `.venv`) are listed under "My answers": Laplacians zero; wall angles from the first zero of v_theta (pi/2, pi/4, 3pi/2); surface pressure; streamline slope equals minus psi_x/psi_y of the given family (difference simplifies to 0); `nsolve(y*(1 - 1/y**2) - 0.5)` = 1.280776; spherical wave, Euler residual (g' - f)/(rho r^2) = 0, vector wave equation residual 0 for two pulse shapes; nabla^2(r_hat/r^2) = 0; 2 pi 0.1 0.2/ln 1.5 = 0.309925.
- Solution steps re-derived by hand and agree: 1(a)-(c) flow directions with C > 0 (v_r = -4Cr^3 on the 45 deg wall, v_r < 0 on the 270 deg wall); Cartesian dipole uR^2 x/(x^2+y^2); mean of 1 - 4 sin^2 = -1; psi_y = [s^4 - R^2(x^2 - y^2)]/s^4; vector-Laplacian brackets f''/r - 2f/r^3 and -f'/r^2 + 2f/r^3, sum f''/r - f'/r^2; narrow-gap limit; gap Reynolds number 900 x 0.2 x 0.005/0.1 = 9; 70/343 = 0.204, 140/343 = 0.408; V halved gives Re/4.
- Mistake separation, checked on a 9-point-per-variable grid over every `vars` range (lib/answers.ts compares at relative 1e-6). Smallest relative difference between the answer and each listed mistake: p1a-speed 0.50; p1c-speed 0.24, 0.33; p2a-phi 0.054, 0.025; p2a-vr 0.054; p2a-vt 2.0, 0.054; **p2b-p 9.8e-4 and 5.6e-4** (Pinf 9e4..1.1e5 Pa, theta 0.6..1.3 keeps clear of sin^2 = 1/4, where the sign-flip mistake would coincide); p2c-slope 0.87, 2.0; p2c-k 0.25; p3b-v 0.033, 0.065, 2.0; p4a-vz 0.36, 0.26; p4b-f1 0.19, 0.68, 2.0; p4b-f2 2.0, 0.33. All answers finite over their ranges. The p2b-p mistakes are therefore at least 560 times the checker tolerance apart from the answer everywhere: distinguishable.
- Every mistake hint is true of its wrong formula (checked each: e.g. p2a-phi "v_r at r = R is 2u cos theta" for the minus sign; p2b-p "speed u sin theta" gives (1 - sin^2); p4b-f2 second mistake is the gradient at R1 times 2 pi R2).
- Number boxes: units named in the statements (degrees, Pa, N/m, ratios as decimals); 1% tolerances; 1.28 vs exact 1.2808 is 0.06% off.
- Choice boxes: right answers at positions 1, 3, 0, 1, 2, 3, 1; the right choice is never the longest; none decidable from units alone; no backslash TeX; no statement names the right choice.
- calcs: `pytest tests/calc -k 8-09-problem-set-8` in the worktree: 56 passed. Entries use independent routes (numerical roots, derivatives, a numerical time integral of the Euler equation for a Gaussian pulse, `solve` for the streamline height).

## Coverage and order
- Problems 1-6 and all parts in MIT's order; MIT's points kept (12 = 4+4+4, 16 = 6+4+6, 10 = 3+4+3, 10 = 6+4 ours, 6 = 3+1+2, 6 = 3+3; total 60). Rendered sheet p. 2 checked against the statements.
- MIT's "roughly sketch a streamline" is answered by three formula-generated Plots in the solutions (xy = const, r^4 sin 4theta = 0.05, r^(2/3) sin(2theta/3) = 0.4: the correct stream functions).
- Every box beyond MIT's is marked "(our addition)" in its part and listed in the intro; every modelling choice is marked "our choice" and listed. Every box is named in its part's statement.
- No `## Summary`; frontmatter summary and intro name no answer. No em dashes, no control characters. Frontmatter identical to the stripped file.

## Citations
- Chapter 6 PDF (39 pp., same file as the URL in `readings`): (6.70), (6.71), (6.74) on printed p. 121; (6.95), (6.100) p. 125; (6.104) p. 126; (6.107) p. 128; (6.113), (6.114), (6.117) p. 129; parallel plates p. 132; (6.129), (6.130) p. 133; counting rule and Reynolds number written R on p. 134. All match the page. The notes' (6.117) says "n_hat is the normal vector pointing out of the surface"; the page's "out of the surface into the fluid" agrees with the notes' own example (bottom plate n_hat = y_hat, p. 132).
- Sheet citations "p. 2" (Problems 1-3) and "p. 3" (Problems 4-6) match the printed page numbers.

## Licensing
- The sheet has no figures and no rights notices beyond OCW's standard footer; nothing embedded. No Goldstein, Symon, Landau-Lifshitz or Smits text used (the sheet's reading list is dropped, as the intro says). Wording is the page's own.

## Symbols
- Ran `symbolsOnPage` (lib/symbols.ts) on the page in the worktree: 107 symbols, every one with a meaning; each letter's popup text fits this page: theta, phi, chi, psi, rho, sigma, omega, Gamma, eta, nu (kinematic viscosity), C, n, k, a, b, A, B, R (cylinder radius, with the note about the notes' Reynolds R), R_1, R_2, K, h, s, f (pulse shape and shedding frequency), g, F, G, H, D, L, V, u, x, y, z, P, P', P_inf, rho_0, c_S, c_s, p, Phi, F_D, F_1, F_2, F_i, sigma_zr and the v components. Nothing falls back to a cosmology or other-course meaning (t, nu, v, P, v_y, v_i, v_j and partial_x/y resolve to meanings worded "Time", "The kinematic viscosity", "The speed of the fluid", "Pressure of the fluid", fluid components: all fit). General entries used only for operators, pi, r_hat and generic vector/unit-vector notation.

## Notes
- info: p2c-k asks for K "typed with `h` and `R`" though the answer is h alone; harmless (R is needed for the listed mistake h - R) and does not mislead.
- info: p6a choice strings write "V/c_S" with a plain underscore, which displays literally; acceptable in a choice string (no TeX allowed there).
- `npm run content:check` was not run by the reviewer.

COUNTS: errors=0 warnings=0 info=5

## Resolution (2026-11-27, by the page author)

- No errors or warnings.
- Info 4: the p2c statement now says K is "typed with `h` (and `R` if needed)".
- Infos 1–3 and 5: no change (recorded only).
- `status: reviewed`.
