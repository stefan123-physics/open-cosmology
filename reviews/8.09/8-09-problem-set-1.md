---
page: content/year-4/8.09/8-09-problem-set-1.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset1/ (read: pdftotext text and page 2 rendered at 100 dpi to check the figure)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: downloaded, pdftotext, every cited equation and page checked)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/pages/assignments/ (read, for the intro's claim about the double-pendulum animation)
verdict: pass-with-notes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 1 (8.09): Lagrangians and Hamiltonians for two bodies, a double pendulum, a spinning hoop, a spring on a table and a jerk

Reviewed page: worktree `.claude/worktrees/ps-809-1`, commit 1d542df. Order kept: blind solve first (below, written before the full page or calcs file was opened), then the comparison.

## Blind solve

Written from the stripped statements and MIT's sheet only, before opening the full page or its calcs file. Checked with sympy/numpy (script blind.py in the reviewer's scratch folder; outputs quoted).

### My answers
- **1(a)** L = ½M|Ṙ|² − MgZ + ½μ|ṙ|² + G m1 m2/r, μ = m1 m2/(m1+m2). Splits because gravity's uniform field acts only on the total mass (force Mg on the CM), and the mutual force depends only on r; the cross terms m1 r1·... cancel by the definition of R. CM moves as a free-falling particle, relative motion as one body of mass μ in the potential −Gm1m2/r. Box (μ): `m1*m2/(m1+m2)`.
- **1(b)** L_r = ½μ(ṙ² + r²θ̇² + r² sin²θ φ̇²) + Gm1m2/r. EL: μr̈ = μrθ̇² + μr sin²θ φ̇² − Gm1m2/r²; d/dt(μr²θ̇) = μr² sinθ cosθ φ̇²; d/dt(μr² sin²θ φ̇) = 0. Box: r̈ = r θ̇² + r sin²θ φ̇² − G(m1+m2)/r² (sympy output matches).
- **1(c)** H = p_r²/(2μ) + p_θ²/(2μr²) + p_φ²/(2μr² sin²θ) − Gm1m2/r. ṙ = p_r/μ, θ̇ = p_θ/(μr²), φ̇ = p_φ/(μr² sin²θ); ṗ_r = p_θ²/(μr³) + p_φ²/(μr³ sin²θ) − Gm1m2/r²; ṗ_θ = p_φ² cosθ/(μ r² sin³θ); ṗ_φ = 0. Box: `pphi^2*cos(th)/(mu*r^2*sin(th)^3)`.
- **2(a)** T = ½(m1+m2)ℓ1²θ̇1² + ½m2ℓ2²θ̇2² + m2ℓ1ℓ2 cos(θ1−θ2) θ̇1θ̇2; V = −(m1+m2)gℓ1 cosθ1 − m2gℓ2 cosθ2. EOMs: (m1+m2)ℓ1²θ̈1 + m2ℓ1ℓ2[cos(θ1−θ2)θ̈2 + sin(θ1−θ2)θ̇2²] + (m1+m2)gℓ1 sinθ1 = 0; m2ℓ2²θ̈2 + m2ℓ1ℓ2[cos(θ1−θ2)θ̈1 − sin(θ1−θ2)θ̇1²] + m2gℓ2 sinθ2 = 0. Box 1: m2 ℓ1 ℓ2 cos(θ1−θ2). Box 2: ω² = (2 ± √2) g/ℓ, ratio = 1 + √2 = 2.4142 (sympy and a numeric eigenvalue check agree).
- **2(b)** With c = cos(θ1−θ2): H = [ℓ2² p1² + 2ℓ1² p2² − 2ℓ1ℓ2 c p1p2] / [2mℓ1²ℓ2²(2 − c²)] − 2mgℓ1 cosθ1 − mgℓ2 cosθ2. θ̇1 = (ℓ2 p1 − ℓ1 c p2)/(mℓ1²ℓ2(2 − c²)); θ̇2 = (2ℓ1 p2 − ℓ2 c p1)/(mℓ1ℓ2²(2 − c²)); ṗ1 = −∂H/∂θ1, ṗ2 = −∂H/∂θ2 (ṗ1 = −A − 2mgℓ1 sinθ1, ṗ2 = A − mgℓ2 sinθ2, with A = θ̇1θ̇2 mℓ1ℓ2 sin(θ1−θ2)).
- **3(a)** Constraints r = R, φ = ωt (both holonomic, the second time-dependent). L = ½mR²(θ̇² + ω² sin²θ) − mgR cosθ. θ̈ = sinθ (ω² cosθ + g/R).
- **3(b)** The Jacobi integral h = ½mR²θ̇² − ½mR²ω² sin²θ + mgR cosθ (L has no explicit t). Not the energy: E = T + V = h + mR²ω² sin²θ, which changes because the motor does work.
- **3(c)** Equilibria: θ = 0 (top, always unstable), θ = π (bottom: stable for ω < ω0, unstable for ω > ω0), and cosθ = −g/(Rω²) (exists for ω > ω0 = √(g/R), stable). Small oscillations about the off-axis point: Ω² = ω² sin²θ = ω² − g²/(R²ω⁴)... i.e. Ω = ω√(1 − (g/Rω²)²). Numbers: g/(Rω²) = 0.4905; angle from the downward vertical 60.63°; Ω = 8.714 rad/s (finite-difference check 8.7144); ω0 = 7.004 rad/s < 10, so the off-axis point exists. Box 1: `sqrt(g/R)`.
- **4(a)** L = ½m1(ẋ1² + ẏ1²) + ½m2(ẋ2² + ẏ2²) − ½k(√((x1−x2)² + (y1−y2)²) − b)².
- **4(b)** CM (X, Y), relative polar (r, θ): L = ½M(Ẋ² + Ẏ²) + ½μ(ṙ² + r²θ̇²) − ½k(r − b)². EOM: MẌ = 0, MŸ = 0, d/dt(μr²θ̇) = 0, μr̈ = μrθ̇² − k(r − b). Box: r̈ = rθ̇² − (k/μ)(r − b).
- **4(c)** Cyclic X, Y, θ: P_X, P_Y, p_θ = μr²θ̇ conserved. Steady turning: r0 = kb/(k − μω²), exists only for ω < √(k/μ); r0 grows without bound as ω → √(k/μ) (spring stretches; in reality it breaks / leaves Hooke's range). Numbers: μ = 0.12 kg, ω_max = 10.0 rad/s.
- **5** Derivation: δS = ∫[∂L/∂q δq + ∂L/∂q̇ δq̇ + ∂L/∂q̈ δq̈] dt; integrate by parts once for the δq̇ term and twice for δq̈; boundary terms vanish because δq = δq̇ = 0 at ends; gives the stated equation. Example: L = −½mxẍ − V(x) gives −½mẍ − 0 − ½mẍ − V′(x) = 0, so mẍ = −V′(x) (sympy agrees); this L differs from ½mẋ² − V by −½ d(mxẋ)/dt.
- **6** d/dt(∂(dF/dt)/∂q̇) = d/dt(∂F/∂q) = F_qq q̇ + F_qt = ∂/∂q(dF/dt), so the extra terms cancel identically; the EL equation of L′ equals that of L.

### Comparison, one line per answer id
- p1a-mu: page `m1*m2/(m1 + m2)` = mine. Match.
- p1a-why: page choice 1 (field acts on the centre of mass only) = my reasoning. Match.
- p1b-rdd: page `r*thd^2 + r*sin(th)^2*phd^2 - G*(m1 + m2)/r^2` = mine (sympy). Match.
- p1c-pth: page `pphi^2*cos(th)/(mu*r^2*sin(th)^3)` = mine (sympy −∂H/∂θ). Match.
- p2a-cross: page `m2*l1*l2*cos(th1 - th2)` = mine (sympy coefficient of θ̇1θ̇2 in T). Match.
- p2a-ratio: page 2.414 = mine 1 + √2 = 2.41421 (sympy and numeric eigenvalues 0.5858, 3.4142). Match.
- p2b-th1dot: page `(l2*p1 - l1*cos(Δ)*p2)/(m*l1^2*l2*(1 + sin(Δ)^2))` = mine with 2 − c² = 1 + sin²Δ. Match.
- p3a-thdd: page `sin(th)*(w^2*cos(th) + g/R)` = mine. Match.
- p3b-cons: page choice 3 (the Hamiltonian h, not T + V) = mine. Match.
- p3c-w0: page `sqrt(g/R)` = mine. Match.
- p3c-angle: page 60.6° = mine 60.627°. Match.
- p3c-osc: page 8.71 rad/s = mine 8.7144 (closed form and finite difference). Match.
- p4b-rdd: page `r*thd^2 - k*(r - b)/mu` = mine. Match.
- p4c-r0: page `k*b/(k - mu*w^2)` = mine. Match.
- p4c-wmax: page 10.0 rad/s = mine (μ = 0.12 kg). Match.
- p4c-fast: page choice 2 (grows, no upper limit as ω → √(k/μ)) = mine. Match.
- p5-ex: page choice 2 (mẍ = −V′(x)) = mine (sympy). Match.
- p6-mom: page choice 2 (p changes by ∂F/∂q, motion unchanged) = mine (∂(dF/dt)/∂q̇ = ∂F/∂q). Match.
- Non-box results: Lagrangians, all Euler–Lagrange equations, both Hamiltonians and all Hamilton's equations, h of 3(b), stability of 3(c), conserved momenta of 4(c), derivations of 5 and 6: all agree with my solve.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | frontmatter `summary` (printed at the top of the page and as the subtitle of every "Practise" link bar) | (no summary) | "a conserved quantity that is not the energy" and "a uniform rotation whose radius grows without limit as the spin approaches a maximum" | These two phrases give away the choice boxes p3b-cons (rules out "the energy T + V") and p4c-fast (states choice 2). Rewrite, e.g. "A bead on a spinning hoop (our own problem): what is conserved, and where the bead can rest." and "Two masses joined by a spring on a table: the coordinates that show the symmetries, the conserved momenta, and steady turning." |
| 2 | info | `covers: [1.2, 1.3, 1.5]` | Problem 3 (any hoop problem) uses a time-dependent holonomic constraint; in the notes holonomic and rheonomic constraints are Section 1.4 | covers omits 1.4 | Optional: the page treats the constraint only lightly (substitute r = R, φ = ωt), and the sheet puts constraints on Problem Set 2, so leaving 1.4 out is defensible. No change needed. |
| 3 | info | Problem 3(b) solution, "by the rule of the notes, Ḣ = −∂L/∂t" | Notes: eq. (1.26) ∂H/∂t = −∂L/∂t, p. 8; "If H (or L) has no explicit time dependence, then H … is conserved", p. 14 | rule named without a location | Optional: add "(Section 1.2, eq. (1.26), p. 8)" in the text. |
| 4 | info | Choice boxes | | Right answers at positions 1, 3, 2, 2, 2; the right choice is the shortest in p3b-cons and p5-ex | Fine under course rule 1 (not always the shortest), but consider moving one of the three index-2 answers. |

Fidelity to MIT: Problems 1, 2, 4, 5, 6 have MIT's physics, part order and wording rewritten; points 12, 20, 12, 10, 6 match the sheet (p. 2 and p. 3), and the extra problem is optional with its own 4 points, not scored. Part splits (4/4/4, 12/8, 4/3/5, 2/4/4) add up. Problem 3 is our own, marked "(our own problem)" in the title, the statement and the intro; it uses the sheet's spherical coordinates with the origin at the hoop's centre, keeps MIT's 12 points, and its topic (point mass on a hoop) fits the sheet's title. Goldstein was not opened. The figure (rendered page 2): both angles from the downward vertical, same sense; the statement describes it correctly in words and the figure is not embedded or redrawn. The intro's claim that the assignments page lists an animation that is not MIT's own: confirmed (it links to an animated GIF on Wikipedia).

## Arithmetic and answer checks
All checked with `/home/raimonvibe/Documenten/Web Development/open-cosmology-final/.venv/bin/python -I` (sympy, numpy); scripts in the reviewer's scratch folder (`blind.py`, `c12.py`).

Key outputs:
```
P1b rdd: (-G*m1 - G*m2 + (sin(th)**2*phd**2 + thd**2)*r**3)/r**2
P1c ptheta dot: pp**2*cos(tt)/(mu*rr**2*sin(tt)**3)
P2a coeff: l1*l2*m2*cos(t1 - t2);  ratio 2.4142135623730954; eig [0.5858, 3.4142]
P2b th1dot: (l2*p1 - c*l1*p2)/(l1**2*l2*m*(2 - c**2))
P3 thdd: (R*w**2*cos(q) + g)*sin(q)/R;  alpha 60.6265°, Omega 8.71441 (finite diff 8.71441), w0 7.0036
P4 mu 0.12, wmax 10.0
P5: -m*x'' - V'(x)
```
Page formulas checked symbolically against these (all differences simplify to 0):
- 2(a) both equations of motion (general m1, m2: E1/ℓ1 and E2/(m2ℓ2) against the page's two lines): 0, 0.
- 2(b) H (its value on p = Tθ̇ equals T + V): 0; θ̇1, θ̇2 against ∂H/∂p1, ∂H/∂p2 and against T⁻¹p: 0; ṗ1 = −C1 + C2 − 2mgℓ1 sinθ1 and ṗ2 = C1 − C2 − mgℓ2 sinθ2 against −∂H/∂θ1,2: 0, 0.
- 1(c) the six Hamilton's equations; 1(b) the three EL equations; 3(b) h and T + V; 3(c) f′(π) = ω² − g/R, f′(0) = ω² + g/R, f′(θ0) = −ω² sin²θ0; 4(c) small-ω expansion r0 ≈ b(1 + μω²/k): all correct by hand and sympy.
- Numbers in the text: ω0 = √(9.81/0.20) = 7.004 → "7.00" ✓; cos α0 = 0.4905 ✓; α0 = 60.6° ✓; ω_osc = 8.71 ✓; μ = 0.12 kg ✓; √(12.0/0.12) = 10.0 ✓.
- Checks in solutions: Kepler's third law with total mass (1b), ṗθ reproduces the θ equation of (b) (1c), m2 → 0 and frozen-θ1 limits (2a), Δ = 0 check (θ̇1 = (p1 − p2)/(mℓ²)) (2b), p1 + p2 = angular momentum about the pivot so C1, C2 cancel and only gravity's torque is left (2b), dh/dt = 0 (3b), limits ω → ω0, ω → ∞ (3c), ω → 0 and spring frequency (4b, 4c), reduction to ordinary EL (5): all correct. Every solution ends with a check.

`<Answer>` boxes (vars ranges and mistakes, checked by hand/algebra):
- p1a-mu: both mistakes differ everywhere; hints true.
- p1b-rdd: mistake 2 (Gm1m2) equals the answer only where (m1 − 1)(m2 − 1) = 1, impossible on [0.5, 1.5]²; mistake 1 differs since sin²θ < 1 on [0.3, 1.3]; hints true.
- p1c-pth: sinθ ≠ 0 on range; three mistakes (sign, factor 2, sin² power) differ everywhere; hints true.
- p2a-cross: cos(θ1 + θ2) = cos(θ1 − θ2) would need θ1 = 0 or θ2 = 0 (outside range); Δ ∈ [−1.1, −0.2] so cosΔ ≠ 0 and the (m1 + m2) mistake differs; hints true (the ½ hint is exactly the factor-2 slip).
- p2a-ratio: 1% rejects ω² ratio 5.83 and the inverse 0.414.
- p2b-th1dot: Δ ∈ [−0.6, −0.1], so 1 + cos²Δ ≠ 1 + sin²Δ (needs |Δ| = π/4) and cosΔ·p2 ≠ 0; denominators positive; hints true.
- p3a-thdd: θ ∈ [1.8, 2.9] ⊂ (π/2, π), so ω² sinθ cosθ ≠ 0 and both mistakes differ; hints true.
- p3c-w0, p3c-angle (rejects 119.4°, the angle from the upward vertical), p3c-osc (rejects ω = 10): fine; a reader with g = 9.8 gets 60.66°, inside 1%.
- p4b-rdd: mistakes differ for r ∈ [1, 2] > b ∈ [0.2, 0.8]; hints true.
- p4c-r0: k − μω² ≥ 2 − 1.125 > 0 on range, finite; mistake hint ("shorter than b") true.
- p4c-wmax: 1% rejects √(k/M) = 4.90 and √(k/m1) = 6.32.
- No hint gives a result away or an estimate that passes a box.

calcs/8.09/8-09-problem-set-1.yaml: every `answer:` entry has the same expr/value as its box; each is checked by a route independent of the closed form (numerical derivative, Cramer's rule, root finder). `npm run content:check` in the worktree: 0 errors (only warning for this page: no review file yet). `npm run calc:test` in the worktree: 21538 passed, exit 0 (includes every entry of this calcs file).

## Coverage and order
- Problems 1 to 6 in MIT's order, all parts in MIT's order. The reading list and announcements are left out, as the intro says. Nothing of MIT's left out except the Goldstein pointer (replaced by our own problem, declared).
- Additions are listed in the intro and marked where they appear: answer boxes, normal modes in 2(a), all of Problem 3, numbers and graph of 4(c), the example in 5. The one modelling choice (direction of the relative vector in Problem 4) is marked "our choice" in the hint and listed in the intro.

## Licensing
- Sheet: CC BY-NC-SA; only notice "Image by MIT OpenCourseWare" on the figure; the figure is described in words, not embedded or redrawn.
- Chapter 1 notes: `grep -i "rights reserved|courtesy"` found nothing.
- Goldstein not used; no OpenStax or LibreTexts; no text copied verbatim (the sheet's sentences are rewritten; the displayed equations of Problems 5 and 6 are MIT's results, correctly cited `cite="mit"` p. 3).
- The Wikipedia animation is correctly not linked.

## Citations
All `reading1` locations verified on the PDF (printed page = PDF page): eq. (1.4) p. 3, eq. (1.5) p. 4, eq. (1.14) p. 5, eqs. (1.24) and (1.25) p. 8, eq. (1.35) p. 10, eq. (1.49) and the cyclic-coordinate proof p. 12; section numbers (1.2 for 1.4–1.35, 1.3 for p. 12) correct. `cite="mit"` locations: Problems 1–2 (and Problem 3's slot) on p. 2, Problems 4–6 on p. 3: correct.

## Notes
- Symbols: page-scoped meanings for every letter with another course meaning (H, T, k, R, M, μ, ω, φ, h, L, S …); units correct (F in J s, ṗθ in N m, f′ in 1/s²). content:check passes them.
- No `## Summary` section, no em dashes, no control characters.
- Problem 5's remark that a third-derivative mechanics needs an L "in which these terms combine suitably" is vague but not wrong.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the frontmatter `summary` no longer gives away the choice boxes p3b-cons and p4c-fast. It now says "A bead on a spinning hoop (our own problem): what is conserved, and where the bead can rest." and "…the conserved momenta, and steady turning."
- Info (Problem 3(b)): the rule Ḣ = −∂L/∂t now names its place in the notes (Section 1.2, eq. (1.26), p. 8).
- Infos (covers, choice positions): no change.
- `status: reviewed`.
