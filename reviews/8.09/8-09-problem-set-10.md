---
page: content/year-4/8.09/8-09-problem-set-10.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset10/ (read: pdftotext of the sheet, p. 2 rendered as an image to confirm the Problem 2 equations)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: pdftotext, printed page numbers checked against the PDF page layout)
verdict: needs-changes
---

# Review: Problem Set 10 (fixed points, bead on a spinning hoop, undamped driven pendulum, limit cycle, chaotic maps)

Writer: Opus. Reviewer: Opus (same model, blind).

The blind answers below were written into this file before the full page or the calcs file was opened. Every final answer on the page agrees with mine. The three errors are all citations.

## Blind solve

Writer: Opus. Reviewer: Opus (same model, blind).

### My answers (written before the full page was opened)

Scripts: scratchpad/809/rv10/s1.py to s5.py (Python, sympy/scipy/mpmath, own RK4).

**P1** Fixed points: 4, namely (0,0), (2,0), (-2,0), (1,-3); off-axis y = -3.
- (0,0): M = diag(4,-1), saddle (unstable along x, stable along y).
- (2,0): M = [[-8,2],[0,1]], eigenvalues -8, 1: saddle. Unstable eigenvector (2,9), slope 4.5; stable along x axis.
- (-2,0): M = [[-8,-2],[0,-3]], eigenvalues -8, -3: stable node. Slow eigenvector (-2,5), slope -2.5; fast along x axis.
- (1,-3): M = [[-2,1],[-3,0]], tau=-2, Delta=3: stable spiral, lambda = -1 +/- i sqrt2, angular frequency sqrt2 = 1.4142.
- Axes x=0 and y=0 are invariant lines.

**P2** (a) s = omega0 t, gamma = a omega0^2/g, b = beta/(m a omega0). Symmetry (theta, w) -> (-theta, -w).
(b) Fixed points (same for b = 0 and b != 0): w = 0 with theta = 0, pi, and (gamma > 1) +/- theta*, theta* = arccos(1/gamma).
Jacobian [[0,1],[cos2theta - cos theta/gamma, -b]].
theta = pi: saddle always. theta = 0: saddle for gamma > 1; for gamma < 1 centre (b = 0) or stable spiral/node (b > 0, spiral if b^2 < 4(1/gamma - 1)).
+/- theta*: Delta = 1 - 1/gamma^2 > 0: centres for b = 0, stable for b > 0; spiral below b = 2 sqrt(1 - 1/gamma^2) = 2 sqrt(gamma^2-1)/gamma, node above.
(c) H = w^2/2 - sin^2 theta/2 + (1 - cos theta)/gamma. Not the lab energy (the motor driving the hoop does work; the centrifugal term enters with the opposite sign to the lab kinetic energy of the rotation): it is the energy in the rotating frame (Jacobi integral). gamma = 2, start pi/3: U(pi/3) = -1/8, U(pi) = 1, U increasing on (pi/3, pi) so w(0) = sqrt(2(1 + 1/8)) = 1.5 exactly.
(d) b = 1, gamma = 2: b < sqrt3 = 1.732, so +/-pi/3 are stable spirals; nearby trajectories spiral in. Over-the-top threshold from pi/3 (numerical, rtol 1e-12): w(0) = 3.0564 (b = 1/2: 2.2382; b = 0 check: 1.5000).

**P3** (my RK4, 256 steps/period, 400 periods, tangent-vector Lyapunov, start (0,0,0), sheet sign -a cos phi):
(a) chaos (lambda ~ 0.1-0.18) over most of 0.29 < a < 2, with periodic windows (lambda ~ 0.001) at about 1.29-1.33, 1.35-1.38, 1.39-1.44.
(b) for 0 < a < 0.1: regular (quasi-periodic), lambda <= 0.0008, no chaos. Onset of chaos: sharp jump between a = 0.2871 (lambda 0.0027) and a = 0.2872 (lambda 0.118); so a = 0.287 (0.288 on a 0.001 grid).

**P4** (a) w-dot = -x - a w (x^2 + w^2 - 1); limit cycle r = 1, amplitude 1, period 2 pi = 6.2832.
(b) only fixed point (0,0); M = [[0,1],[-1,a]], tau = a, Delta = 1. a > 0: unstable (spiral for 0 < a < 2, node for a > 2, degenerate node at a = 2); a < 0: stable (spiral for -2 < a < 0, node a < -2); a = 0: centre. Type changes again at a = 2. Proposal: limit cycle stable for a > 0, unstable for a < 0.
(c) r-dot = a r sin^2 theta (1 - r^2). Bifurcation at a = 0; name: a degenerate Hopf bifurcation (fixed point and cycle exchange stability, the cycle does not shrink to zero; at a = 0 a continuum of closed orbits). Other reasonable labels: "exchange of stability".

**P5** (a) r = 4, x0 = 0.3: dx15/dx0 = -27289, so delta_max = 1e-6/27289 = 3.66e-11.
(b) r3 = 3.5441, r4 = 3.5644; ratios 4.751, 4.656.
(c) cubic = -(r x - r + 1)(r^2 x^2 - r(r+1) x + r + 1): larger root (r + 1 + sqrt((r-3)(r+1)))/(2r); third root 1 - 1/r (the unstable fixed point).
(d) (iii) exp(-r x) is not chaotic (max Lyapunov < 0 found). First period doublings: (i) r = 1.319 (r sin x* = 1, x* = 0.8603); (ii) r = 2.000; (iii) r = e = 2.718.

### Comparison (one line per answer id)

- p1a-n 4 / mine 4: agree. p1a-y -3 / -3: agree.
- p1b-00 saddle, p1b-20 saddle, p1b-m20 stable node, p1b-13 stable spiral: all agree. p1b-freq 1.414 / sqrt2: agree.
- p1c-s1 4.5 / 4.5, p1c-s2 -2.5 / -2.5: agree (sympy eigenvectors (2/9, 1) and (-2/5, 1)).
- p2a-gamma a*omega0^2/g: agree. p2a-b beta/(m*a*omega0): agree. p2a-sym (theta, w) -> (-theta, -w): agree.
- p2b-th acos(1/gamma): agree. p2b-0 saddle, p2b-c centres: agree. p2b-bc 2*sqrt(1 - 1/gamma^2): agree.
- p2c-h w^2/2 - sin^2/2 + (1 - cos)/gamma: agree (sympy: -dU/dtheta - F = 0). p2c-e "No, rotating-frame energy": agree. p2c-w 1.5: agree (exact).
- p2d-near spirals in: agree. p2d-w 3.06 / my 3.05635 (DOP853, rtol 1e-12, bisection): agree; b = 1/2 2.238 and b = 0 1.500 also reproduced. A start just above threshold ends at theta = 5pi/3 = -pi/3 + 2pi, as the page says.
- p3a-win a = 1.40: agree (my lambda 0.0002 at 400 periods, 0.0003 at 1000; 0.60, 1.00, 1.90 chaotic at both lengths). The window edges on the page (about 1.30 to 1.43, chaotic slivers at 1.33-1.34 and 1.38) agree with my 300-step sweep (regular 1.297-1.329, 1.354-1.379, 1.392-1.436; chaotic 1.335-1.348 and 1.386). The 3-cluster section at a = 1.40 is reproduced: strobe points 300-307 at theta ~ -0.01, -0.53, -0.53, -0.01, -0.47, -0.44 with w ~ 0, +3.04, -3.04.
- p3b-small quasi-periodic: agree. p3b-onset 0.287 / my 0.2872 (regular at 0.2871, lambda 0.0027; chaotic at 0.2872, lambda 0.118): agree. The separatrix claim was spot-checked: start theta = 3.0, a = 0.05 gives lambda 0.080, theta = 3.1, a = 0.02 gives 0.088 (600 periods).
- p4a-wdot, p4a-amp 1, p4a-per 6.283: agree. p4b-type unstable spiral, p4b-a2 2, p4b-cyc stable: agree.
- p4c-rdot -a*r*sin^2(theta)*(r^2 - 1): agree (sympy factor). p4c-name degenerate Hopf: agree (my first choice too).
- p5a-d 3.66e-11 / mine 3.6645e-11 (mpmath derivative -27288.67): agree. Periodic-case differences 3.988e-6, 5.411e-8, 5.803e-12 at n = 10, 20, 30 reproduced.
- p5b-r3 3.5441, p5b-r4 3.5644, p5b-q1 4.751, p5b-q2 4.656: agree (my Newton solution 3.54409036, 3.56440727).
- p5c-p larger root, p5c-third 1 - 1/r: agree (sympy factorization identical).
- p5d-not (iii): agree. p5d-i 1.319, p5d-ii 2, p5d-iii 2.718: agree. The runs in the solution text were spot-checked and agree: (i) 2-cycle at 1.4 and 1.8, 4-cycle at 1.9, chaos at 2.0 (lambda 0.157) and 2.2 (0.37), 4-cycle at 2.6, fixed point at 3.0; (ii) 2, 2, 4, 16 points at 2.05, 2.2, 2.25, 2.3, chaos at 2.35, 6-cycle at 2.7, chaos to 3.0, escape at 3.01; (iii) negative lambda up to r = 20.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(b) solution, Formula "Problem 2(b): the side fixed points" (and calcs `p2b-th` source) | The bead-on-a-hoop example (eq. 7.35, theta* = ± arccos(g/(a omega^2))) is on p. 162 inside Section 7.2.4, "Subcritical pitchfork bifurcation" (heading on p. 160; 7.2.3 ends before it) | `at="Section 7.2.3, p. 162"` | Change to `at="Section 7.2.4, p. 162"` on the page and in calcs `p2b-th`. |
| 2 | error | Problem 5(c) solution, Formula "Problem 5(c): the 2-cycle", `cite="reading1" at="Section 7.5, p. 185"` (and calcs `p5c-p` source) | Notes pp. 184-185 define p and q only as the stable fixed points of f(f(x)); they give no closed formula for them | Explicit x = [r + 1 ± sqrt((r - 3)(r + 1))]/2r attributed to the notes | `cite="mit" at="Problem 5(c), p. 5 (our own solution)"`; same in calcs `p5c-p`. |
| 3 | error | Problem 1(b), "Check the result": "the linear classification holds for the full nonlinear flow (p. 170)" | The statement that nonlinear terms change only borderline cases is on p. 169 (end of Section 7.3.1); p. 170 has eq. (7.47) and the rabbits and sheep example | p. 170 | Change to "(p. 169)". |
| 4 | warning | Intro, list "Some choices are ours": "the split of each problem's points between its parts" | Sheet gives the part points for Problems 2-5 | The intro list claims every split as ours; "How to answer" correctly says only Problem 1's split is ours | Replace the bullet with "the split of Problem 1's 8 points into three parts". |
| 5 | info | Problem 5(b) statement | Sheet: "find the first four x values where bifurcations occur. Call them a1,2,3,4" (a slip: they are values of r) | "find the first four values of r ..." without saying the sheet wrote x | Optionally add "(the sheet says x values; it means values of r)". |

## Arithmetic and answer checks
- Every number in the solutions and in the calcs file was recomputed independently (scripts in the reviewer's scratch folder, `rv10/s1.py` to `s8.py`: sympy, SciPy DOP853, own vectorised RK4 with tangent vector, mpmath). No arithmetic error found.
- Checked by hand or by script: M(2, 9) = (2, 9) and M(2, -5) = -3(2, -5); Delta values 1/gamma - 1, -1 - 1/gamma, 1 - 1/gamma^2; 2 pi sqrt2 = 8.89; 2/(1 - 0.49) = 3.92; 4 + 2(3.2) - 3.2^2 = 0.16; 1e-6/2^15 = 3.05e-11; 3 + 0.4495/(1 - 1/4.669) = 3.572; next Feigenbaum ratio 4.668; 0.7995 and 0.5130 at r = 3.2; -1.319 sin 0.8603 = -1.000; exact r = 4 derivative formula 2^n sin(2^{n+1} pi u0)/sin(2 pi u0) checked.
- Problem 3 table: lambda and max |w| for the regular rows reproduce exactly (0.10: 0.0008, 0.197; 0.25: 0.0017, 0.506; 1.40: 0.0002, 3.044). The chaotic rows agree only in kind, as expected for chaotic orbits with a different round-off: mine 0.30: 0.103, 2.42; 0.60: 0.136, 2.88; 1.00: 0.143, 3.24; 1.25: 0.135, 3.98; 1.50: 0.138, 4.13; 1.90: 0.188, 4.81 (page 0.11/2.3, 0.15/2.9, 0.17/3.3, 0.17/3.9, 0.17/4.1, 0.17/4.7). See note 3.
- `<Answer>` audit: every expr equals the solution's result; vars ranges keep the formulas finite (p2b-th and p2b-bc gamma in [1.2, 5]; p5c in r in [3.05, 3.44]; p4c r in [0.2, 0.9]). Each mistake differs from the answer and its hint is true of that formula, with one exception:

| # | Severity | Where | Problem | Suggested fix |
|---|----------|-------|---------|---------------|
| 6 | warning | p2b-th, mistake `acos(gamma)` | For gamma in [1.2, 5], acos(gamma) is not a real number; `lib/answers.ts` turns it into NaN and `agree()` never matches NaN, so a reader who types acos(gamma) gets a bare "wrong" and this hint can never show | Replace with a finite mistake, e.g. `{ expr: "asin(1/gamma)", hint: "This angle has sin θ = 1/γ. The fixed point needs cos θ = 1/γ (the bracket cos θ − 1/γ vanishes)." }` |

- Tolerances: p3b-onset 2% accepts 0.281 to 0.293, which covers 0.287 and the grid value 0.288; p5b-r3/r4 absolute 0.0005 matches "four decimals"; p5b-q1/q2 3% is loose enough for values read off a plot; it also accepts the limit 4.669 for q1 (within 3% of 4.751), which is acceptable because the box checks the reader's ratio, not the limit.
- Choice boxes: right answers sit at positions 0, 2, 1, 4, 2, 1, 0, 2, 3, 2, 2, 3, 0, 2, 1 (good spread). But:

| # | Severity | Where | Problem | Suggested fix |
|---|----------|-------|---------|---------------|
| 7 | warning | p4c-name, p3b-small, p2c-e | The correct choice is clearly the longest option (p4c-name by about 30 characters; p3b-small and p2c-e by 10-20) | p4c-name: shorten the right option to "a degenerate Hopf bifurcation: fixed point and cycle exchange stability" and give one distractor a similar explanation; p3b-small: lengthen e.g. "periodic, with the period of the drive" to "periodic, repeating exactly once every drive period"; p2c-e: shorten to "No: it is the energy in the rotating frame; the hoop does work". |

## Coverage and order
- All five MIT problems and every MIT part are present, in MIT's order, with MIT's points (8, 15 = 2+5+5+3, 10 = 4+6, 12 = 4+4+4, 15 = 3+4+3+5). Problem 1's 2+4+2 split is marked as ours.
- Every added box is marked "our addition" and listed in the intro; every own choice (starts, strobe times, Lyapunov test, r values, ranges) is marked.
- MIT's sheet citations checked: Problem 1 and 2 on p. 2, Problems 3 and 4 on p. 3, Problem 5 and 5(a), (b) on p. 4, 5(c) and 5(d) on p. 5: all correct.
- Notes citations checked against the printed page numbers: eq. (7.9) p. 144, (7.35) p. 162, (7.42)/(7.43) p. 166, (7.47) p. 170, Section 7.3.2 p. 172, (7.57) p. 174, (7.64) p. 178, (7.74) p. 184, (7.77) p. 185, (7.79) p. 186, (7.81) p. 187, (7.83) p. 188, Lyapunov exponent p. 186, Section 7.6 exists: all correct, except items 1 to 3 above.

| # | Severity | Where | Problem | Suggested fix |
|---|----------|-------|---------|---------------|
| 8 | warning | Intro paragraph "Some boxes are our additions" ("the angular frequency of the spiral ... in Problem 1", "the damping at which a spiral turns into a node in Problem 2(b)") and Problem 1(b) statement ("at the one fixed point whose eigenvalues are complex") | Before the reader starts, these tell them that Problem 1 has exactly one spiral, which narrows the four type boxes of 1(b); the "spiral turns into a node" in 2(b) is less harmful, since the part statement asks for it anyway | Intro: "an angular frequency in Problem 1"; 1(b): "give the angular frequency (the imaginary part of the eigenvalues) at each fixed point whose eigenvalues are complex", or put this box after the type boxes with "if you found one". |
| 9 | warning | calcs `p5b-r2` (and `p5c-p`) `source: {cite: reading1, at: 'Section 7.5, p. 185'}` | The notes do not give r2 = 1 + √6 or the 2-cycle formula (searched the whole chapter text for √6 and for the closed form) | Change both sources to `{cite: mit, at: 'Problem 5(b) (our own solution)'}` / `'Problem 5(c) (our own solution)'`. |

## Licensing
- No text copied from the sheet or the notes beyond standard terms; statements are rewritten.
- The sheet's logistic-map figure ("Image is in the public domain") is not reproduced; the page's plot is generated from exact formulas. The phase portrait of Problem 2(c) is generated from H. No MIT figure is redrawn.
- MIT's Mathematica notebooks are mentioned only by name; the page contains no Mathematica code and none of the notebook's logic beyond the equations printed on the sheet. Our numbers are said to come from Python.
- No "All rights reserved" or "Courtesy of" material found in the sheet or the notes (grep on both texts).
- No OpenStax or LibreTexts material.

## Notes
1. Symbols: every letter with a cosmology meaning used on the page (a, b, r, k, H, M, z, x, t, e, m, g, s, q, p, u, w, f, F, U, and Greek α, β, γ, δ, Δ, λ, μ, τ, φ, ω, ω₀, ω_D, θ_*, δ_F, r_α ...) has a meaning scoped to `8-09-problem-set-10` in `data/symbols.json`; θ and π fall back to their general meanings ("An angle", "π ≈ 3.14159"), which fit. No 8.286 meaning leaks onto the page. Units are right (β in kg·m/s, consistent with m a θ̈ being a force).
2. No em dashes on the page (grep count 0). No `## Summary` with answers. The frontmatter summary gives no answer.
3. (info) Problem 3 table: the chaotic rows' λ and max |w| depend on round-off and the exact time stepping; my independent RK4 run gives values 10-20% different (see above), while the classification is identical. Consider a sentence such as "In the chaotic rows, λ and the largest |w| change by 10 to 20% with the integrator; only their size matters."
4. (info) Hints: the second hint of 5(d) ("Map (iii) is decreasing in x ...") effectively names the non-chaotic map for the first box. As a second hint this is acceptable; if you want the box to test more, move the monotonicity argument into the solution and keep the hint general ("What can a decreasing map do after two steps?").
5. (info) Problem 4(c) compares with eq. (7.57), whose θ̇ = +1; here θ̇ ≈ −1 (clockwise). Harmless, since the comparison is about ṙ only.
6. (info) Problem 3's sign note ("the sign of the drive differs from the notes; it only shifts the drive's phase by half a period") is correct; from the fixed start θ = w = φ = 0 the numbers would change with the other sign, which the page implicitly covers by tying everything to the sheet's equation.

COUNTS: errors=3 warnings=5 info=5

## Resolution (2026-11-28, by the page author)

- Error 1: the side fixed points of Problem 2(b) are now cited to Section 7.2.4, p. 162 (page and calcs `p2b-th`).
- Error 2: the 2-cycle of Problem 5(c) is now cited as our own solution (`cite="mit"`, "Problem 5(c), p. 5 (our own solution)"); calcs `p5c-p` likewise.
- Error 3: the nonlinear classification in Problem 1(b) is now cited to p. 169.
- Warning 4: the intro's "our choices" list now names only the split of Problem 1's 8 points into three parts.
- Warning 5: the `acos(gamma)` mistake (NaN over the whole range) is replaced by `asin(1/gamma)` with a hint that fits it.
- Warning 6: the right choices of `p4c-name` and `p2c-e` are shorter, and one distractor each of `p4c-name` and `p3b-small` is longer, so the right choice is no longer clearly the longest.
- Warning 7: the intro now says "an angular frequency" and Problem 1(b) "at each fixed point whose eigenvalues are complex", so neither tells the reader how many spirals there are.
- Warning 8: calcs `p5b-r2` and `p5c-p` now cite our own solution, not the notes.
- Info items left as they are.
