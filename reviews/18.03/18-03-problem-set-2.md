---
page: content/year-2/18.03/18-03-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps2pdf/ (read: pdftotext and all 4 pages rendered at 110 dpi)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps2spdf/ (read: all 3 pages rendered; opened only after the blind solve below was written)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_2ex/ (read: PDF downloaded, group 2E checked; 2E-1, 2E-2, 2E-7, 2E-9, 2E-10, 2E-15 exist; 2E-15 is the integral of e^(2x) sin x by complex exponentials)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_2sol/ (not opened; only linked by the page)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/assignments/ (read: lists http://math.mit.edu/mathlets/mathlets/complex-exponential/ for Problem Set 2, so the page's Mathlet link is MIT's own)
verdict: needs-changes
---

# Review: Problem Set 2: a decay chain on Tatooine, complex numbers, complex exponentials and a sinusoidal input

The blind solve (section "Blind solve", "My answers") was written to this file before the full page, its calcs file or MIT's solutions were opened. Every final answer on the page agrees with mine and with MIT's solutions. The one error is a false statement in a mistake hint; the warnings are answer-box tolerances that reject 3-figure answers, and three small inaccuracies in the wording.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | 4(b), `<Answer id="p4-b-sigma">`, mistake `log(2)*tS` | (not in MIT) | "That has the dimension of time squared if t_S is a time." ln 2 is a pure number, so ln 2 · t_S has the dimension of a time, not time squared. The hint is false. | Replace the hint by: "That has the dimension of a time, since ln 2 is a pure number. σ is a rate, with dimension 1 over time: divide by t_S." |
| 2 | warning | Number boxes p5-a-1, p5-a-2, p5-a-3, p5-a-5, p5-b-mod, p6-d-1, p6-d-3-im (all `tolerance="0.002"`) | (not in MIT) | Tolerances are absolute (`lib/answers.ts`, `numberTolerance`). Three-figure answers are rejected: 1.41 vs 1.4142 (off 0.0042), 1.73 vs 1.7321 (0.0021), −2.36 vs −2.3562 (0.0038), 2.36 vs 2.3562 (0.0038), 6.28 vs 6.2832 (0.0032). The labels do not say how exact the value must be, although "How to answer" says each question does. | Set `tolerance="0.005"` on these seven boxes (every listed wrong alternative, such as −π/4, 5π/4, π/4, 2, is still far outside), or add "(to 4 significant figures)" to each label. |
| 3 | warning | 6(d) solution, step "Functions 1, 2 and 4" | (ii) "The trajectory is the positive real axis." | "so the trajectory is the real axis: for t ≥ 0 the segment from 1 towards 0" | Write "the positive real axis" (e^(−t) is never zero or negative); the first choice of p6-d-2-shape can say "the positive real axis" too. |
| 4 | warning | 7(a), the bracketed misprint note | Sheet: "write 2 + 2i in the form Ae^(iφ). Substitute this into e^(2it)/(2 + 2i)" | The note names only "the number 2 + 2i"; the fraction e^(2it)/(2 + 2i) is misprinted on MIT's sheet as well. | "MIT's printed sheet has 2 + 2i and the fraction e^(2it)/(2 + 2i) in the instructions for the second route, a misprint: …" |
| 5 | warning | Last section, description of MIT's Part I Problem 6(b) | "Write each of the following functions f(t) in the form A cos(ωt − φ)": (i) cos 2t + sin 2t, (ii) cos πt − √3 sin πt, (iii) cos(t − π/8) + sin(t − π/8) | "as a single cosine $A\cos(t - \phi)$" | Write $A\cos(\omega t - \phi)$ (two of the three have ω = 2 and ω = π). |

## Arithmetic and answer checks
Every number on the page was recomputed (Python, numpy/scipy; Problem 4 also by numerical integration of the ODE system with solve_ivp):
- y(10) = ½(e^(−1) − e^(−2)) = 0.11627 (solve_ivp: 0.1162721); z(10) = 0.51585 (solve_ivp: 0.5158485); t_max = ln 2/0.1 = 6.9315; prefactor ½; bounds 1/μ = 5 and 1/σ = 10; the limit μ → σ gives 1/σ, the peak of ½σt e^(−σt). All ✓. The z formula of the page equals 1 − x − y (coefficient of e^(−σt): −1 − σ/(2(μ−σ)) = (σ/2 − μ)/(μ − σ)) and matches MIT's.
- 5(a): √2 = 1.4142, √3 = 1.7321, −3π/4 = −2.3562, √3/2 = 0.8660; ((1+i)/√2)^(−13) = (−1+i)/√2 with phase 2.3562 (numpy). The table matches MIT's entry for entry (MIT writes row 3 as (−1−i)/√2 with 5π/4; the page explains the switch to −3π/4 for the box).
- 5(b): numpy roots of z⁴ + 4: ±1 ± i; of z² + 2z + 2: −1 ± i; |z| = 4^(1/4) = 1.4142 ✓.
- 6(b): e^(ln 2 + 3πi) = −2 ✓; a = 0.6931 ✓. 6(c): coefficients −6 and 4 ✓; check at t = π/4 gives −1 ✓.
- 7(a): 1/(√3 + i) = 0.43301 − 0.25i, modulus 0.5, phase lag 0.52360 ✓. 7(b): w = 0.230769 − 0.153846i ✓. 7(c): |w| = 0.27735 ✓; check ẋ_p(0) + 3x_p(0) = 4/13 + 9/13 = 1 ✓.
- Mistake hints: p4-c-y (slope σ at t = 0; y negative for μ > σ; ẏ(0) = σ(μ−σ)/(2(μ+σ)) ≠ σ/2), p4-d-formula (negative time; μ + σ; units), p4-f-q, and p7-c-xp (ẋ + 3x at t = 0 is 5/13 and 12/13, both recomputed) are all true of their formulas. Only the p4-b-sigma hint for `log(2)*tS` is false (table #1). The other two p4-b-sigma hints are true (1/t_S leaves 1/e ≈ 37%; t_S/ln 2 is a time).
- `vars` ranges: σ ∈ [0.1, 0.5], μ ∈ [0.6, 1.5] keep μ ≠ σ, every formula finite and every amount positive; t ∈ [0.5, 2] (4(f)) and [0.1, 1.4] (7(c)) are fine.
- Points equal MIT's (solutions pp. 1–2): Problem 4: 2+4+4+4+2+4 = 20; 5: 10+8 = 18; 6: 2+3+3+8 = 16; 7: 8+5+5 = 18; total 72. Part I 4+6+8+6 = 24 ✓.
- Calcs file `calcs/18.03/18-03-problem-set-2.yaml`: every answer box has an entry, most with an independent route (convolution integral, `solve` for the root of the slope, numerical derivatives); expected values match the page. calc:test was not run by the reviewer.
- Every solution ends with a check step (6(d)'s check is "by construction" plus the other sign of w; acceptable).
- No hint gives its own part's result away.

## Coverage and order
- Part II Problems 4 to 7, all parts, in MIT's order, same physics, in the page's own wording. Part I is listed with links (2E numbers verified in the Notes PDF); Edwards and Penney omitted on purpose and said so.
- Extras marked as ours: the sin 4t box in 6(c) ✓; the sign choice of w in 6(d) ✓ (stated in the problem). The numerical boxes y(10) and t_max (σ = 0.1, μ = 0.2) are page additions framed clearly by their labels. The ż choice box of 4(b) is not an extra: MIT asks for the equation of z as well, so it needs no "ours" mark.
- The exponential column of 6(a) placed in the 5(a) table follows MIT's own solution, which answers "5(a) and 6(a)" together ✓.
- Lecture mapping matches `_course.json`: Problem 4 → site Lecture 3, Problems 5 and 6 → Lecture 6, Problem 7 → Lectures 7 and 8; `covers: [3, 6, 7, 8]` and the four prerequisite slugs exist with exactly those lecture numbers. Links use the course slug `18-03` ✓.

## Licensing
- Neither MIT PDF carries an "All rights reserved" or "Courtesy of" notice. No figure redrawn: the graph in 4(a) and the spiral in 6(d) are generated from formulas. (The 4(a) graph uses the same σ = 0.1, μ = 0.2 as MIT's solution graph; it is computed from the page's own formulas, not copied.)
- Wording is the page's own; no sentence of MIT's statement or solution copied beyond standard terms. Tatooine, Startium, Midium and Endium are MIT's names and are credited as MIT's setting.
- No OpenStax or LibreTexts; the Mathlet is only linked.

## Notes
- info: the second hint of 7(c) shows w = (3 − 2i)/13, the result of 7(b). That part comes first, so this is acceptable, but a reader who opens 7(c)'s hints before answering 7(b) sees it.
- info: no lecture-transcript readings; formulas cite `solutions` with the right pages (Problem 4 on p. 1, Problems 5 to 7 on p. 2 of MIT's solutions PDF, which has no printed page numbers, so the PDF page is used) ✓.
- info: no `## Summary`, no em dashes; t_S, x_p and 30 meanings scoped to this page are in the worktree's `data/symbols.json` (content:check was not run by the reviewer).

## Blind solve

### My answers
(Written before the full page, the calcs file and MIT's solutions were opened.)
- 4(a): x falls from 1 to 0 (exponential), y rises from 0, peaks once, then falls to 0; z rises monotonically from 0 to 1. Limits: x -> 0, y -> 0, z -> 1.
- 4(b): sigma = ln2/t_S, mu = ln2/t_M. xdot = -sigma x; ydot = (sigma/2) x - mu y; zdot = (sigma/2) x + mu y. Sum = 0.
- 4(c): x = e^{-sigma t}; y = sigma/(2(mu - sigma)) (e^{-sigma t} - e^{-mu t}); z = 1 - x - y = 1 - e^{-sigma t} - sigma/(2(mu-sigma)) (e^{-sigma t} - e^{-mu t}).
- 4(d): ydot = 0 gives sigma e^{-sigma t} = mu e^{-mu t}, t_max = ln(mu/sigma)/(mu - sigma) (positive for either order of sigma, mu).
- 4(e): linear homogeneous system with zero data except x: all three double: x = 2e^{-sigma t}, y and z doubled, z -> 2.
- 4(f): q(t) = (t + 2) e^t; general solution x = e^t + c/t^2 (on t > 0 or on t < 0).
- 5(a): (i) 1 - i, |z| = sqrt2, Arg = -pi/4. (ii) sqrt3 + i, 2, pi/6. (iii) -(1+i)/sqrt2, 1, -3pi/4. (iv) 1/2 + i sqrt3/2, 1, pi/3. (v) e^{-13 i pi/4} = e^{3 i pi/4} = (-1 + i)/sqrt2, 1, 3pi/4.
- 5(b): z^4 = -4: z = +-1 +- i (all four sign choices) = sqrt2 e^{i(pi/4 + k pi/2)}. z^2 + 2z + 2 = 0: z = -1 +- i.
- 6(a): sqrt2 e^{-i pi/4}; 2 e^{i pi/6}; e^{-3 i pi/4}; e^{i pi/3}; e^{3 i pi/4}.
- 6(b): z = ln 2 + (2k + 1) pi i, k integer.
- 6(c): cos 4t = cos^4 t - 6 cos^2 t sin^2 t + sin^4 t.
- 6(d): (i) w = 2 pi i, trajectory: unit circle, counterclockwise, once per unit time. (ii) w = -1, trajectory: positive real axis (the segment (0,1] for t >= 0), moving towards 0. (iii) w = -1 + 2 pi i, trajectory: a spiral winding counterclockwise in to 0. (iv) w = 0, trajectory: the single point 1.
- 7(a): 1/(sqrt3 + i) = (sqrt3 - i)/4, so Re = (sqrt3/4) cos 3t + (1/4) sin 3t; A = 1/2, phi = pi/6: (1/2) cos(3t - pi/6). Second route: sqrt3 + i = 2 e^{i pi/6}, B = 1/2, phi = pi/6, same real part.
- 7(b): w = 1/(3 + 2i) = (3 - 2i)/13; general z = e^{2it}/(3 + 2i) + c e^{-3t} (c complex).
- 7(c): x_p = Re(z_p) = (3 cos 2t + 2 sin 2t)/13 = (1/sqrt13) cos(2t - arctan(2/3)) (1/sqrt13 = 0.27735, arctan(2/3) = 0.58800); general x = x_p + c e^{-3t}.

### Comparison (my answer vs page, one line per answer id)
- p4-a-limits: (0, 0, 1) = choice 0 ✓ (shapes agree with the page and MIT)
- p4-b-sigma: ln 2/t_S ✓ (one mistake hint false, see #1)
- p4-b-ydot: ẏ = −μy + ½σx = choice 1 ✓
- p4-b-zdot: ż = ½σx + μy = choice 0 ✓
- p4-c-y: identical formula ✓ (page's z equal to mine by value and algebra)
- p4-c-num: 0.1163 ✓
- p4-d-formula: (ln μ − ln σ)/(μ − σ) ✓
- p4-d-num: 6.93 ✓
- p4-e: all doubled = choice 0 ✓
- p4-f-q: (t + 2)e^t ✓
- p4-f-general: e^t + C/t² = choice 0 ✓
- p5-a-1: 1.414 ✓
- p5-a-2: 1.732 ✓
- p5-a-3: −2.356 ✓
- p5-a-4: 0.866 ✓
- p5-a-5: 2.356 ✓
- p5-b-quartic: ±1 ± i = choice 0 ✓
- p5-b-mod: 1.414 ✓
- p5-b-quadratic: −1 ± i = choice 0 ✓
- p6-a-1: √2 e^(−iπ/4) = choice 0 ✓
- p6-a-4: e^(iπ/3) = choice 0 ✓
- p6-b-re: 0.6931 ✓
- p6-b-im: odd multiples of π = choice 0 ✓
- p6-c-coeff: −6 ✓
- p6-c-imag: 4 ✓
- p6-d-1: 2π = 6.283 ✓
- p6-d-3-re: −1 ✓
- p6-d-3-im: 6.283 ✓
- p6-d-2-shape: choice 0 ✓ (wording "real axis", see #3)
- p6-d-3-shape: counterclockwise spiral in through 1 = choice 0 ✓
- p7-a-a: 0.4330 ✓
- p7-a-b: 0.25 ✓
- p7-a-amp: 0.5 ✓
- p7-a-phi: 0.5236 ✓
- p7-b-re: 0.2308 ✓
- p7-b-im: −0.1538 ✓
- p7-b-general: c e^(−3t) = choice 0 ✓
- p7-c-xp: (3 cos 2t + 2 sin 2t)/13 ✓
- p7-c-amp: 0.2774 ✓
- MIT's solutions agree with the page and with me on every result; no three-way disagreement.

COUNTS: errors=1 warnings=4 info=3

## Resolution (2026-11-21, by the page author)
- #1 (error, hint for `log(2)*tS`): replaced by the suggested hint (dimension of a time, since ln 2 is a pure number; divide by t_S).
- #2 (warning, tolerances): `tolerance="0.005"` on p5-a-1, p5-a-2, p5-a-3, p5-a-5, p5-b-mod, p6-d-1 and p6-d-3-im. Every listed wrong alternative is still far outside; the number boxes have no listed mistakes of the near kind.
- #3 (warning, "real axis"): the 6(d) solution and the first choice of p6-d-2-shape now say "the positive real axis".
- #4 (warning, misprint note): the bracket in 7(a) now names the fraction e^(2it)/(2 + 2i) as well.
- #5 (warning, Part I 6(b)): now "A cos(ωt − φ)".
- The "ours" mark on the ż box of 4(b): the page carries none, so nothing to remove (MIT asks for it).
- Info items: no change. Status set to `reviewed`.
