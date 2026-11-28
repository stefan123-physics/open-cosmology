---
page: content/year-5/8.962/8-962-problem-set-2.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset02/ (read: local PDF pset02.pdf, pdftotext plus rendered pages 1 and 3; sheet header "8.962 Spring 2006", no rights-reserved or courtesy notice)
  - 8.962 Lecture 2 transcript (read, PDF pp. 10, 16, 17, 19, 20)
  - 8.962 Lecture 4 transcript (read, PDF pp. 5, 6, 10, 19, 20, 21)
  - 8.962 Lecture 5 transcript (read, PDF pp. 3, 4, 5, 16, 17, 19, 20)
  - 8.962 Lecture 6 transcript (read, PDF p. 3)
verdict: pass-with-notes
---

# Review: Problem Set 2: Dust, stress-energy tensors, conservation laws, the vector potential and an accelerated observer

## Blind solve

### My answers (written before opening the full page or calcs)
- P1: in the observer's rest frame U = (1,0,0,0) and N = (n, n v), so -N.U = N^0 = n. Example: gamma_rel = gamma(0.6) gamma(0.8)(1 + 0.48) = 1.25 x 5/3 x 1.48 = 3.0833; n = 2 x 3.0833 = 37/6 = 6.167.
- P2: N^a = gamma n0 (1, v^i); d_t(gamma n0) + d_i(gamma n0 v^i) = 0; gamma - 1 ~ v^2/2; dropped terms are O(v^2) relative to the kept terms.
- P3(a): T = rho0 u u: T00 = rho0/(1-b^2), T0x = rho0 b/(1-b^2), Txx = rho0 b^2/(1-b^2), rest zero.
- P3(b): torus volume 2 pi^2 a da^2; lab density Nm/(2 pi^2 a da^2) = gamma rho0 => rho0 = N m sqrt(1 - a^2 w^2)/(2 pi^2 a da^2); T00 = gamma^2 rho0 = N m /(2 pi^2 a da^2 sqrt(1 - a^2 w^2)). v = w(-y, x): T0x = -w y T00, T0y = w x T00, Txx = w^2 y^2 T00, Txy = -w^2 x y T00, Tyy = w^2 x^2 T00; all z components zero; zero outside the torus. One ring alone: d_j T^{xj} = -w^2 x T00 != 0 (the binding force is left out).
- P3(c): T00 and T^{ij} doubled, T^{0i} cancel (static, isotropic-in-plane stress); trace per point = -2 rho0 exactly (each ring contributes rho0 u.u = -rho0), so T/rho0 = -2.
- P4(a): d_t T^{a0} = -d_i T^{ai}; Gauss theorem, boundary term vanishes.
- P4(b): two integrations by parts, 2 int T^{ij}. Free particle E=5, x = 0.8 t: 5 x 2 x 0.64 = 6.4 (= 2 E v^2). Rings: the left-out binding force; T of the rings alone is not conserved, so the identity does not apply.
- P4(c): d_t int T00 r^4 = int T^{0k} 4 r^2 x^k; again: int T^{kl}(4 r^2 d_kl + 8 x^k x^l). Free particle, y=1: f = 5(0.64 t^2+1)^2, f''(2) = 111.104; RHS 4(3.2)(3.56) + 8(3.2)(2.56) = 111.104.
- P5(a): F^{0i} = E_i => E = -d_t A - grad A^0; F^{xy} = B_z = (curl A)_z. Example A^y = sin(t-x): E_y = -cos(t-x), B_z = -cos(t-x).
- P5(b): with this F^{mn}, d_n F^{mn} = 4 pi J^m; substituting F = d^m A^n - d^n A^m gives Box A^m - d^m d.A = -4 pi J^m (MIT's sign is right in this convention). The homogeneous pair (div B = 0, Faraday) holds for every A.
- P5(c): d_m d_n phi symmetric, cancels.
- P5(d): choose phi with Box phi = -d.A_old; then Box A^a = -4 pi J^a. Residual freedom: phi with Box phi = 0.
- P6(a): u^t = cosh(g tb), u^x = sinh(g tb).
- P6(b): U = (cosh g tb, sinh g tb), independent of xb; U^x = sinh(g tb).
- P6(c): the construction has no preferred tb: at any tb the astronaut (or a CSO) could restart it from the momentary rest frame and get the same coordinates shifted in tb (time-translation symmetry; a boost maps the family to itself), so A cannot depend on tb.
- P6(d): t = (1/g + xb) sinh(g tb), x = (1/g + xb) cosh(g tb) - 1/g, A = 1/(1 + g xb).
- P6(e): metric as stated; c^2/g = 9.1616e15 m -> 9.16.

### Comparison (one line per answer id)
- p1-n: page 6.167 (tol 1%); mine 37/6 = 6.167. Agree. Both routes (components in O, and n0 gamma_rel) recomputed.
- p2-gamma: page v^2/2; mine v^2/2. Agree.
- p2-order: page choice 2 (v squared); mine O(v^2). Agree. No other choice is true.
- p3a-tt / p3a-tx / p3a-xx: page rho0/(1-b^2), rho0 b/(1-b^2), rho0 b^2/(1-b^2); mine identical. Agree.
- p3b-rho0: page N m sqrt(1-a^2w^2)/(2 pi^2 a da^2); mine identical. Agree.
- p3b-tt: page N m/(sqrt(1-a^2w^2) 2 pi^2 a da^2); mine identical. Agree.
- p3b-tx: page -w y; mine -w y. Agree.
- p3b-xy: page -w^2 x y; mine -w^2 x y. Agree.
- p3c-what: page choice 3 (twice energy density and stresses, no flux/momentum density); mine the same. Agree.
- p3c-trace: page -2; mine -2. Agree.
- p4b-particle: page 6.4; mine 6.4. Agree.
- p4b-rings: page choice 1 (rings alone not conserved, binding stresses left out); mine the same. Agree; I also derived d_j T^{xj} = -T00 w^2 x for one ring, as the page states.
- p4c-particle: page 111.1; mine 111.104 (both sides, and a numerical second derivative 111.10400067). Agree.
- p5a-ey / p5a-bz: page -cos(t - x) for both; mine -cos(t - x) for both. Agree.
- p5b-which: page choice 2 (the two source-free equations); mine the same. Agree.
- p5d-left: page choice 0 (gauge function with Box phi = 0); mine the same. Agree.
- p6a-ut / p6a-ux: page cosh(g tb), sinh(g tb); mine identical. Agree.
- p6b-ux: page sinh(g tb); mine sinh(g tb), independent of xb. Agree.
- p6c-why: page choice 3 (no moment on the astronaut's clock is special); mine the same. Agree.
- p6d-t / p6d-x / p6d-a: page (1/g + xb) sinh(g tb), (1/g + xb) cosh(g tb) - 1/g, 1/(1 + g xb); mine identical. Agree.
- p6e-horizon: page 9.16 (x 10^15 m); mine 9.1616. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 6(a), box p6a-ut, mistake `1/sqrt(1 - g^2*tb^2)` | (our addition) | vars g [0.3, 1.5], tb [0.2, 1.5]: g*tb > 1 on about 28% of the box, where this mistake is NaN; `agree()` in lib/answers.ts then fails, so with 5 sample points the hint is shown only about 19% of the time (Monte Carlo: 0.7186^5 = 0.19) | Narrow the ranges of p6a-ut (and, for consistency, p6a-ux) to e.g. `g: [0.3, 1.0], tb: [0.2, 0.9]` (g*tb <= 0.9); cosh, sqrt(1+g^2 tb^2) and 1/sqrt(1-g^2 tb^2) still differ by far more than 1e-6 there |
| 2 | info | Problem 2, note on letters | Sheet writes "dn/dt + d(n v^i)/dx^i = 0" in the limit abs(v) << 1 | Page writes n0 (rest-frame density) and explains why | Fair to MIT: the limit only makes sense if the sheet's n is the rest-frame density, which is the convention of the textbook the 2006 sheet follows (N = nU with n in the momentarily comoving frame; attribution to Schutz is my recollection, not checked in this session). Optionally add one clause: "the sheet's n is the rest-frame density, so this is the same equation" |
| 3 | info | Problem 6 statement, rule 2 | Sheet fixes only the space coordinates at t̄ = 0 ("momentarily coincides") | "and t = 0 there too" | This choice of time origin is needed for the answer boxes but is not marked as ours, unlike "(at x̄ = 0, we take)" in rule 1. Optionally add "(our choice of origin)" |
| 4 | info | Problem 5, formula "The electromagnetic field tensor", cite reading2 at transcript p. 20 | Transcript p. 20: "filled with the E and the B like so" (board) | Full matrix with signs | Citation page is right, but the sign layout was on the board and cannot be checked from the transcript. I checked that this layout, with diag(-1,1,1,1), gives d_nu F^{mu nu} = 4 pi J^mu and hence exactly MIT's -4 pi J^alpha in 5(b), and E = -dA/dt - grad A^0 in 5(a). No change needed |
| 5 | info | Problem 2, choice p2-order, correct option | (our addition) | "about one part in ten thousand at a hundredth of the speed of light" | The solution's own number is gamma - 1 = 5.0e-5 (one part in twenty thousand). "About" and "of order" make it acceptable; optionally say "a few parts in a hundred thousand" |

## Arithmetic and answer checks
- `calc:test -k 8-962-problem-set-2`: 79 passed. `content:check`: 0 errors; the only warning for this page is the missing review file.
- Recomputed independently: P1 6.1667 (relative speed 0.94595, gamma 3.0833); P2 gamma - 1 at 0.01 = 5.0e-5, at 0.6 = 0.25; P3(a) at beta 0.6, rho0 2: 3.125, 1.875, 1.125; P3(b) torus volume 2 pi^2 a da^2, diameter reading area pi da^2/4 (factor 4 in every component, as stated); P4(b) 6.4 both sides; P4(c) 111.104 both sides (4 x 3.2 x 3.56 = 45.568, 8 x 5 x 1.28^2 = 65.536); P6(e) c^2/g = 9.1616e15 m = 0.968 light-years ("0.97", right); the small-g t̄ expansion x ~ x̄ + g t̄^2 (1 + g x̄)/2 is right; CSO hyperbola and proper acceleration g/(1 + g x̄) right; line element cross terms cancel.
- Sign of -4 pi J^alpha (Problem 5(b)): with F^{0i} = E_i, F^{xy} = B_z and eta = diag(-1,1,1,1), d_nu F^{0 nu} = div E = 4 pi rho and d_nu F^{i nu} = -dE_i/dt + (curl B)_i = 4 pi J^i, so d_nu F^{mu nu} = 4 pi J^mu; with F^{mu nu} = d^mu A^nu - d^nu A^mu this is Box A^mu - d^mu d.A = -4 pi J^mu. MIT's sign is right in the page's convention, and the static check (Poisson, nabla^2 A^0 = -4 pi rho) is right.
- Problem 3(b) remark: for T^{ij} = T00(r) w^2 (y^2, -xy; -xy, x^2), d_x T^{xx} + d_y T^{xy} = w^2 [ (y^2 x - x y^2) T00'/r - x T00 ] = -T00 w^2 x. Confirmed; the page's "(0 - x)" bookkeeping is right.
- Problem 4 identities: factors 2 (4b), 4 and 8 (4c) confirmed by my own integration by parts; d_k d_l r^4 = 8 x^k x^l + 4 r^2 delta^{kl} right.
- Problem 6(c): the page's argument (time-translation symmetry of the construction under a boost to the momentary rest frame at t̄0; another CSO's time coordinate must be a constant multiple of t̄) is sound and answers MIT's hint. No MIT solution exists to compare.
- Answer boxes: every expr equals its solution's result; vars ranges keep every answer finite (aw <= 0.8 in 3(b)); each listed mistake differs from the answer over its vars, and each hint is true of its formula (checked one by one, e.g. p6b `sinh(g*tb*(1+g*xb))` is the CSO's proper time (1 + g x̄) t̄ in the astronaut's formula; p6d-a `1` holds only at x̄ = 0). Exception: finding 1. Number tolerances (1%, or 0.01 for -2) accept 3 significant figures and reject the natural slips (6.4 vs 3.2; 111.1 vs 98.3 with y = 0 forgotten; 6.167 vs 2.5, 3.33 or 4.17). With c = 3e8, 9.174 also passes, which is acceptable.
- Choice boxes: right answers at positions 2, 3, 1, 2, 0, 3; lengths of right answers vs others: p2-order 78 of [74,63,78,101], p3c-what 87 of [105,75,68,87], p4b-rings 116 of [118,116,90,93], p5b-which 94 of [96,85,94,62], p5d-left 81 of [81,86,56,89], p6c-why 99 of [103,87,99,99]: never strictly longest or shortest. No distractor is also true (p3c option 1 fails on T^{0i}; p5d option 2 says "only a constant"; p5b option 0 includes Gauss's law).
- Hints: none gives a result away; the second hint of 6(d) gives the direction vector (sinh, cosh), which is a method step, not the answer.
- Points: 8 + 8 + 22 + 20 + 20 + 22 = 100; parts add up in every problem. MIT gives no points; the page says so.

## Coverage and order
- All six MIT problems and every part, in MIT's order: 1, 2, 3(a)-(c), 4(a)-(c), 5(a)-(d), 6(a)-(e). Same physics in every part. Additions are listed in the introduction and marked where they appear.
- Readings MIT's sheet gives that the page states as its own: n -> n0 in Problem 2 (finding 2), δa as the cross-section radius in 3(b) (stated, with the factor 4 for the diameter reading), x̄ = 0 for the astronaut (marked), t = 0 at t̄ = 0 (finding 3).
- `covers: [4, 5, 6]` fits: Problems 1, 2 and 5 rest on Lecture 4 (number-flux vector, conservation law, Faraday tensor and Maxwell's equations); 3 and 4 on Lecture 5 (stress-energy tensor, d_nu T^{mu nu} = 0, point-particle tensor); 6 reads a metric off a line element in non-Cartesian coordinates and ends with the clock-rate / tower redshift of Lecture 6. Problem 6 also uses the 4-acceleration of Lecture 2, which the page names as a prerequisite rather than in `covers`; fine.
- Transcript citations checked against the PDFs (no printed footer; PDF pages): L2 p. 10 (scalar product), pp. 16-17 (u.u = -1), p. 19 (E = -p.U), p. 20 (a = du/dτ, a.u = 0); L4 pp. 5-6 (n = γ n0; N = n0 u with components (n, n v) on p. 6), p. 10 (d_alpha N^alpha = 0), pp. 20-21 (F matrix, d_nu F^{mu nu} = 4 pi J^mu, cyclic identity); L5 pp. 3-4 (ρ = γ² ρ0), p. 5 (T = ρ0 u u), p. 17 (frame form of conservation), p. 20 (point-particle tensor, final form); L6 p. 3 (polar-coordinate line element). All correct. Sheet page numbers (Problems 1-4 p. 1, Problem 5 p. 2, Problem 6 p. 3) correct.
- Claims about lessons: the tanh(gτ/c) remark is in basis-vectors-metric-four-momentum; the tower redshift is in covariant-derivative-christoffel-metric; the virial theorem is used in gravitational-waves-quadrupole-formula ("Easter egg" from Problem Set 2). All verified.

## Licensing
- MIT's sheet has no "All rights reserved" or "Courtesy of" notice (grep and rendered pages). No figures on the page. Statements are rewritten in the page's own words; only standard phrases ("coordinate-stationary observers", "bounded system") are shared. No OpenStax, LibreTexts or other forbidden source.

## Notes
- Symbols: every page-scoped meaning in data/symbols.json for this slug was read; each fits all its uses on the page (ρ for charge density only in 5(b), with ρ₀ separate; φ as gauge function and as angle in 3(b) and the 6(e) polar line element; r as radius and as polar coordinate; A_i only in dA_i; E also as particle energy in Problem 4; t̄₀ in 6(c); a as ring radius and as 4-acceleration).
- No em dashes; no `## Summary` with answers; the frontmatter summary gives no results.
- Uncertain: the attribution of the sheet's n convention to Schutz (finding 2) is from memory, not checked against the textbook in this session.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1 fixed: the `vars` ranges of `p6a-ut` and `p6a-ux` are now `g: [0.3, 1.0], tb: [0.2, 0.9]`, so g·t̄ < 1 everywhere and the listed mistake `1/sqrt(1 - g^2*tb^2)` is defined at every sample point.
- Info 3 taken: rule 2 of Problem 6 now says "and t = 0 there too (our choice of origin)".
- Info 5 taken: the right option of `p2-order` now says "about one part in twenty thousand", matching v²/2 = 5.0 × 10⁻⁵ at v = 0.01.
- Info 2 and 4: no change needed.
- `status: reviewed`.

## Later change (2026-11-28, answer-box fix, owner decision)

Under the second-readings audit (`audits/answer-boxes/second-readings.md`, section A, #4 and #5): p3b-rho0 and p3b-tt now accept the diameter reading of δa through `alsoAccept`, with a note; the diameter reading was a listed mistake on p3b-rho0 only, so the two boxes now treat it the same way.
