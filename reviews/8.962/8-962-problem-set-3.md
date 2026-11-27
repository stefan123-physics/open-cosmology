---
page: content/year-5/8.962/8-962-problem-set-3.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset03/ (read, pdftotext and PDF)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset03_hint/ (read)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset02/ (read, Problem 6 on p. 3)
  - MIT 8.962 Problem Set 4 sheet (read, to check where Problem 7(d)-(f) went)
  - 8.962 Lecture 4, 5, 6, 8, 9 transcripts (read; every cited page checked with pdftotext -f N -l N)
  - Carroll, Spacetime and Geometry (not read, by design: copyrighted; Problems 5 and 6 judged as our own problems)
verdict: pass-with-notes
---

# Review: Problem Set 3 (8.962): accelerated observer, perfect fluids, 3+1 split, connection identities

## Blind solve

### My answers (written before opening the full page)
- 1(a) x(t) = sqrt(1/g^2 + t^2) - 1/g (hyperbola, asymptote x = t - 1/g).
- 1(b) flash from x = -d at t = 0 reaches the astronaut at t = d(2 - g d) / (2(1 - g d)); t -> infinity as d -> 1/g; for d >= 1/g never. Events with t > x + 1/g never reach the astronaut.
- 1(c) boundary t = x + 1/g (the null line through x = -1/g, t = 0); in the astronaut's coordinates x̄ = -1/g; c^2/g = 9.162e15 m = 0.9684 ly.
- 2(a) T^{x'y'} = -eps P sin(ph) cos(ph); T^{x'x'} = P(1 + eps cos^2 ph). 2(b) largest |T^{x'y'}| at 45 deg.
- 3(a) E.U = F^{ab}U_aU_b = 0; B.U = 0 (eps antisymmetric in U_aU_b). 3(b) shown (numerical test: max error 1e-16). 3(c) a = 1, b = 1 (eps_0123 = +1; random numerical fit a = b = 1, residual 1e-31). MIT's eps-eps identity holds with this sign convention (checked numerically).
- 3(d) E^y = gamma E0 = E0/sqrt(1 - v^2); B^z = -gamma v E0 (numerically checked).
- 4(c) Gamma^r_phph = -r; Gamma^ph_rph = 1/r.
- 5(a) Gamma^r_phph = -r sin^2 th; Gamma^th_phph = -sin th cos th (also Gamma^r_thth = -r, Gamma^th_rth = Gamma^ph_rph = 1/r, Gamma^ph_thph = cot th).
- 5(b) div V = 2 r cos th (V = z^2 ẑ, div = 2z).
- 5(c) V_ph = w r^2 sin^2 th; curl^r = 2 w cos th; curl^th = -2 w sin th / r.
- 6(a) theta component = -sin th0 cos th0; geodesic only for the equator th0 = 90 deg.
- 6(b) A^th = cos(ph cos th0); A^ph = -sin(ph cos th0)/sin th0.
- 6(c) A^th(2 pi) at th0 = 70 deg: cos(2 pi cos 70 deg) = -0.5465; sphere is curved (holonomy).
- 7(c) states nabla_lambda g^{mu nu} = 0 (metric compatibility for the inverse metric).
- 7(f) Box r^n = n(n+1) r^(n-2).

Numerical checks behind these answers (my own NumPy script, scratch folder): Levi-Civita built with eps_0123 = +1, eta = diag(-1,1,1,1); random antisymmetric F and random observer: E.U = 1e-17, B.U = 0, reconstruction of part (b) max error 1.1e-16, least-squares fit of F_{mu nu} = a (U^E) + b *(U^B) gives a = 1, b = 1 (residual 2e-31); MIT's identity eps^{abrs} eps_{mnrs} = 2(d^a_n d^b_m - d^a_m d^b_n) holds exactly in this signature; Problem 3(d) with v = 0.6: E^y = 1.625 = gamma E0, B^z = -0.975 = -gamma v E0 (E0 = 1.3). c^2/g = 0.968384 ly. cos(2 pi cos 70 deg) = -0.546500.

### Comparison (page answer vs mine)
- p1a-x: (sqrt(1+g^2t^2)-1)/g, agrees.
- p1b-t: d(2-gd)/(2(1-gd)), agrees.
- p1b-limit: choice 2 (grows without limit), agrees.
- p1c-line: x + 1/g, agrees.
- p1c-xbar: -1/g, agrees.
- p1c-ly: 0.968, agrees (0.9684).
- p2a-xy: -eps P sin ph cos ph, agrees.
- p2a-xx: P(1 + eps cos^2 ph), agrees.
- p2b-angle: 45, agrees.
- p3a-why: choice 2 (antisymmetry), agrees.
- p3c-a: 1, agrees. p3c-b: 1, agrees (random numerical fit above).
- p3d-ey: E0/sqrt(1-v^2), agrees. p3d-bz: -v E0/sqrt(1-v^2), agrees.
- p4c-rpp: -r, agrees. p4c-prp: 1/r, agrees.
- p5a-rpp: -r sin^2 th, agrees. p5a-tpp: -sin th cos th, agrees.
- p5b-div: 2 r cos th, agrees.
- p5c-vphi: w r^2 sin^2 th, agrees. p5c-curlr: 2 w cos th, agrees. p5c-curlt: -2 w sin th / r, agrees.
- p6a-acc: -sin th cos th, agrees. p6a-which: choice 1 (equator), agrees.
- p6b-at: cos(ph cos th), agrees. p6b-ap: -sin(ph cos th)/sin th, agrees.
- p6c-at: -0.5465, agrees.
- p7c-means: choice 3 (covariant derivative of the inverse metric vanishes), agrees.
- p7f-box: n(n+1) r^(n-2), agrees.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(b), solution, step "Check the result" | (calcs file header: the random-field test of (b), the identity and a = b = 1 were run "outside this file") | "A numerical test with a random field and a random observer (in our calculation file) confirms the formula" | The claim does not match the calcs file, which holds only the scalar test of part (d). Either change "(in our calculation file)" to "(run while writing this set; the calculation file keeps the component test of part (d))", or drop the bracket. |
| 2 | warning | Frontmatter `source.readings` (reading1, Lecture 4 transcript) | Lecture 4 gives the field tensor matrix (transcript p. 20) | reading1 is listed but never cited; the checks of Problem 3(a) and 3(b) say "the lesson's matrix" without a citation | Cite it where the matrix is used, e.g. add "(transcript of Lecture 4, p. 20)" after "the electric field E_i of the lesson's matrix" in 3(a), or remove reading1. |
| 3 | info | Introduction, Problem 7(d)-(f) | Lecture 9 transcript p. 6: "three parts of problem 7 that I moved from PSET 3 to PSET 4"; MIT's posted Set 4 sheet (the 2006 sheet) does not contain them | Keeps (d)-(f) here, says why | Correct and honest. Optionally add: "MIT's Set 4 sheet on OCW does not contain them." |
| 4 | info | Problem 6, formula "Christoffel symbols of the unit sphere" and all solution formulas of Problems 5 and 6 | MIT's p. 3 has only the pointer to Carroll (and the curl definition for Problem 5) | cite="mit" at "Problem 6, p. 3 (our own problem)" | Acceptable under the set's convention ("our own problem" is stated). Could cite Problem 5(a) of this page or Lecture 6 instead. |
| 5 | info | frontmatter `covers: [5, 6, 8, 9]` | Set 3 was due over Lectures 5-9 | Lecture 7 (equivalence principle) not covered | Fine: no problem uses Lecture 7's material; Problem 1 rests on Set 2, Problem 3 on Lectures 4-5. Leave as is. |

All MIT statements are followed in order (Problems 1-7, parts in MIT's order), in the page's own wording; MIT gives no points and the page says its points are its own (sums: 15+10+20+15+15+10+15 = 100; part points add up in each problem). The hint sheet's two forms are reproduced as formulas and correctly cited (reading6, p. 1); the derivation is the page's own. The Set 2 citations (Problem 6(a), (d), (e), p. 3) are right: the worldline and the transformation are results of those parts, not printed on the sheet, and the page says so.

Citations checked against the PDFs (8.962 transcripts have no printed footer; PDF pages): L5 p. 10 ("isotropic spatial stress"), p. 23 (L matrix introduced), p. 24 (matrix and inverse for polar coordinates); L6 p. 6 (Gamma^phi_rphi = 1/r, Gamma^r_phiphi = -r), pp. 10-12 (one-forms, general rule, T^{mu nu}), pp. 16-17 (Christoffel from the metric); L8 p. 3 (transformation of the partial derivative), pp. 5-6 (demand one), pp. 6-7 (parallel transport), p. 17 (spherical metric, g = r^4 sin^2 th); L9 p. 5 (Levi-Civita times sqrt g), p. 6 (moved parts), pp. 8-10 (party trick), p. 11 (divergence), pp. 12-13 (antisymmetric tensors), pp. 15-16 (geodesic equation). All correct.

## Arithmetic and answer checks
- `npm run calc:test -k "8.962 and problem-set-3"`: 74 passed. `content:check`: 0 errors; the only warning for this page is the missing review file.
- Every formula box: answer finite over its `vars` (p1b-t has g d <= 0.8 < 1; p3d v <= 0.9). Every listed mistake differs from the answer over the ranges (closest pairs, e.g. x + g vs x + 1/g, -g vs -1/g, cos(ph sin th) vs cos(ph cos th), coincide only at isolated points, so multi-point checking rejects them).
- Every mistake hint checked and true of its formula, including the less obvious ones: p1b-t `d/(1-gd)` (small-d correction g d^2 instead of g d^2/2: true); p5b-div `r cos^3 + 2 r cos sin^2` (= d_r V^r + d_th V^th: true); p3d-bz sign hint (eps^{zxty} = -1: true); p6b-at `cos(ph sin th)` (fails the equator test: true); p7f `n(n+2)` (true).
- Number boxes: p1c-ly 0.968 +-1% (my 0.96838); p2b-angle 45 +-1%; p3c-a/b 1 +-1% (reject -1, 0, 2); p6c-at -0.5465 +-0.006 (rejects +0.5465 and cos(2 pi sin 70 deg) = 0.93; my -0.546500).
- Recomputed in solutions: flash example t = 0.75, x = 0.25 on the hyperbola; light year 9.4607e15 m; c^2/g = 9.162e15 m; determinant and trace check of Problem 2; 3(d) gamma = 1.25, B^z = -0.75 E0, invariant E^2 - B^2 = E0^2; 4(c) MIT-form check (y^4 + 2x^2y^2 + x^4)/r^3 = r; 5(a) e_phi derivative check and party-trick sums; 5(b) Christoffel route sum; 5(c) unit-vector curl 2 omega e_z; 6(c) angle 2.1490 rad = 123.13 deg, A^phi(2 pi) = -0.8912, length 1; 7(a)-(c) polar checks; 7(f) n = 2 gives 6, n = -1 gives 0. All correct.
- Signs that rest on conventions (b = 1, B^z < 0, eps^{xy}_{0z} = +1, B^x = F_yz) all verified with eps_0123 = +1 as stated on the page and in the lessons (volumes-conservation-laws, transcript of L4 p. 15), and the field matrix F^{0i} = E_i, F^{xy} = B_z of that lesson.
- The claim in 3(c) "b does not depend on the sign convention of the Levi-Civita tensor" is right (eps enters twice); the dependence on the minus sign in B and on the metric's sign through U.U is also right.
- Every solution ends with a "Check the result" step (units, limit or number).
- Choice boxes: right answers at positions 2, 2, 1, 3; in none is the right answer the strictly longest or shortest (lengths 82 of 65-105; 80 of 34-89; 51 of 48-87; 70 of 54-83). No distractor is also true (p3a "vanishing trace ... makes its contraction with any two vectors zero" is false; p7c distractors false).

## Coverage and order
- Problems 1-4 and 7 follow MIT's statements and order of parts. Additions are marked where they appear, as the introduction lists (1(b) flash, 1(c) light years, 2(b) angle, 3(d), 4(c), 7(f)).
- Problems 5 and 6 replace MIT's pointers to Carroll with our own problems on Lectures 6, 8 and 9 (divergence and curl in spherical coordinates with MIT's curl definition; geodesics and parallel transport on the unit sphere). Both are correct and suit those lectures; Carroll was not used, and the page says so.
- `covers: [5, 6, 8, 9]` fits: Problem 2 (L5), Problems 4, 5, 7(a)-(c) (L6), Problem 4(b), 6 (L8), Problems 5(b), 6(a), 7(d)-(f) (L9). See table row 5 on Lecture 7.

## Licensing
- MIT's sheets carry no "rights reserved" or "courtesy" notices (grep of all three sheets). No MIT figure is redrawn; the only graph is generated from the page's own formula.
- Carroll is named only as the target of MIT's pointers; no text, problem or figure from the book appears.
- The wording is the page's own; MIT's sentences are not copied (short standard phrases only, e.g. "particle horizon", "projection tensor").
- No `## Summary` with answers; no em dashes (count 0).

## Notes
- Symbols: the 67 `-ps3` entries found in data/symbols.json were spot-checked (F_ty = -E0, F_yz = B_x, Gamma_phiphir = r, Gamma^i_ir = 2/r, eps_rthph = sqrt g, e_hat theta, delta_mu, D_xy ...): all fit their uses. The page-scoped meanings of shared letters (g: acceleration in Problem 1, metric/determinant elsewhere; P: pressure and projection tensor; a, b; U; A, including the tensor of 7(d); epsilon vs varepsilon) cover every use. Info: the meaning of x, "the Cartesian coordinate x of the inertial frame", is a little narrow for the Cartesian x of the plane in Problem 4(c) and of space in Problem 5; "a Cartesian coordinate x (of the inertial frame in Problems 1-3)" would fit all uses.
- Info: the first hint to 1(c) ("events with t - x >= 1/g cannot affect the astronaut") nearly states the first box of 1(c); acceptable because part (b) already establishes it, as MIT's sequence intends.
- Info: the second hint to 6(b) gives the oscillator equation; the reader still has to fix the frequency, phase and A^phi. Acceptable.
- Uncertain: none of the physics; I did not run `npm run test:answers` (the checker itself is outside this page).

COUNTS: errors=0 warnings=2 info=6

## Resolution (2026-11-27, by the page author)

- Warning 1 fixed: the 3(b) check now says the random-field test was "run while writing this set; the calculation file keeps the component test of part (d)".
- Warning 2 fixed: reading1 (Lecture 4 transcript) is now cited where 3(a) compares with the lesson's matrix: "(Lecture 4 transcript, p. 20)".
- Info on the symbol x taken: this page's meaning now begins "A Cartesian coordinate x (of the inertial frame in Problems 1–3)".
- Other info items: no change needed.
- `status: reviewed`.
