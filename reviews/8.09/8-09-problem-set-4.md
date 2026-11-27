---
page: content/year-4/8.09/8-09-problem-set-4.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset4/ (read: pdftotext and the PDF pages 2 and 3 rendered at 150 dpi to check the three figures)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/aa6e7a8b4e0b5eeef24bce949d4fdb27_MIT8_09F14_Chapter_3.pdf (read)
verdict: pass-with-notes
---

# Review: Problem Set 4: a heavy symmetric top, three masses on a circle, the double pendulum and a bar on two springs

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind solve below was written into this file (from the stripped statements and MIT's sheet only) before the full page or its calcs file was opened. Every derivation was checked by my own calculation in Python (.venv: numpy, scipy, sympy); key code and numbers are quoted below.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(c), solution "The idea" and Step "The three frequencies" | (sheet: work to linear order in θ0) | "A coupling of first order changes the frequencies only at second order", stated without condition | True only when the uncoupled sway and rocking frequencies are not close (g/a not near 6k/m); for near-degenerate values the V13 coupling splits them at first order and the boxed ω² = 6k/m + 3gθ0/ℓ fails. Add after "only at second order": ", provided g/a is not close to 6k/m (here 16.4 against 100 s⁻²)". |
| 2 | info | Problem 3(b), Step "Check the result" | PS1: the normal modes were for equal masses and equal lengths | "For equal masses Problem Set 1 found the ratio 1 + √2 = 2.414" | Write "For equal masses and lengths". |
| 3 | info | Mistake hints of p4b-v33 ("adds mgℓθ0 to V33"), p4c-w2 ("adds 3gθ0/ℓ"), p3b-w2 ("the box asks for the larger"), p4a-s0 (third mistake) | n/a | Each hint, shown after a near-miss, states the missing piece outright | Acceptable (each is exactly true of its wrong formula); optionally soften the first two to name the effect without the term, e.g. "Turning the bar also pulls each end in by ℓφ²/2, against the tension: what does that add to V?" |
| 4 | info | Problem 2(a), mistake hint of `sqrt(6*V0*...)` | n/a | "the matrix entries are the second derivatives, twice the coefficients of the quadratic form" | Only the diagonal entries are twice the coefficient (off-diagonal Vij equals the coefficient of θiθj). True of this slip; could say "the diagonal entries". |
| 5 | info | Problem 1(b), Step "Check the result" | n/a | "|ω|² ... is constant, as it should be for a motion that repeats" | The reason is weak (constancy follows from Ω, θ, ω3 constant, as the sentence's formula shows). Could drop "as it should be for a motion that repeats". |

## Arithmetic and answer checks
All recomputed independently in Python; scripts in the reviewer's scratch folder (bar.py, bar2.py, boxes.py).

- **p1a-tau1, p1a-tau2**: τ = R ẑ × (−mg ẑ_I), ẑ_I in body components (sinθ sinψ, sinθ cosψ, cosθ) from notes Eq. (2.70): τ = mgR sinθ (cosψ, −sinψ, 0). Matches. Torque along the line of nodes, as the notes say (p. 48).
- **p1b-w3**: Ω cosθ + ω′. Matches; reason choice (index 3) correct.
- **p1c-wmin**: θ equation (I1 − I3)cosθ Ω² − I3ω′Ω + mgR = 0; discriminant gives ω′ ≥ (2/I3)√(mgR(I1 − I3)cosθ). Matches.
- **p1c-num**: Python `2/I3*sqrt(m*g*R*(I1-I3)*cos(30°))` = 109.06 rad/s; box 109 ± 1% accepts; ω3-type slip 123.66 and no-cos slip 117.19 and missing-factor-2 54.5 all rejected. Merging rate 17.99 rad/s (page 18.0), 17.36 turns/s (page "about 17"). Correct.
- **p1c-tops**: I3 ≥ I1 for tops above the fixed point; answer index 2 correct; distractors false.
- **p2a-w**: V = const + ½·4κ θᵀPθ, P = [[2,−1,−1],…], κ = V0e^{−4π/3}; eigenvalues of P: 0, 3, 3; ω² = 12V0e^{−4π/3}/(ma²). Matches; list choice "0, ω and ω" (index 0) correct. Normalisation with T̂ (1/(a√(3m)), 1/(a√(2m)), 1/(a√(6m))) matches mine.
- **p2b-zero**: ξ̈1 = 0, index 1 correct; ξ_i = Aᵀ T̂ θ coefficients a√(m/3), a√(m/2), a√(m/6) checked.
- **p2c**: gap changes in mode 2 (α −2, β +1, γ +1) and mode 3 (α 0, β −3, γ +3) checked.
- **p2d-th1**: (3, −2, −1) sums to zero, so θ(t) = (ω0/ω) sin ωt (3, −2, −1). ξ̇2(0) = 5a√(m/2)ω0, ξ̇3(0) = 3a√(m/6)ω0, and A ξ gives (5/2)(1,−1,0) + (1/2)(1,1,−2) = (3,−2,−1). Matches.
- **p3a**: T11 = 4mℓ1², T12 = mℓ1ℓ2, T22 = mℓ2², V11 = 4mgℓ1, V22 = mgℓ2. Matches; det T̂ = 3m²ℓ1²ℓ2² checked.
- **p3b-w2**: 3ℓ1ℓ2λ² − 4g(ℓ1+ℓ2)λ + 4g² = 0, λ± = (2g/(3ℓ1ℓ2))[ℓ1+ℓ2 ± √(ℓ1² − ℓ1ℓ2 + ℓ2²)]. Matches. Equal-mass slip formula g(ℓ1+ℓ2+√(ℓ1²+ℓ2²))/(ℓ1ℓ2) re-derived: correct as a description of that slip. ℓ2 → 0 limit g/ℓ1 checked.
- **p3b-ratio**: √3 = 1.732. Matches. PS1 ratio 1 + √2 = 2.414 checked.
- **p3c-ratio**: θ2/θ1 = 4(g − ℓω²)/(ℓω²): fast −2, slow +2. Matches. Normalisations 1/(2ℓ√(3m)), 1/(2ℓ√m), T̂-orthogonality and centre-of-mass positions (ℓθ1/2 and 3ℓθ1/2) checked.
- **p4a-s0**: 2k(a − s0)cosθ0 = mg → s0 = a − mg/(2k cosθ0). Matches. Spring-length formulas s1, s2 re-derived from the stated ceiling and end positions: correct.
- **p4a-inertia**: m(2ℓ)²/12 = mℓ²/3. Matches. Coordinates choice index 1 correct.
- **p4b (the point to judge with care)**: SymPy, exact potential V = mgY + (k/2)(d1 − s0)² + (k/2)(d2 − s0)², gradient at equilibrium [0, 0, 0], exact Hessian:
  - V11 = 2k sin²θ0 + mg cosθ0/a → mg/a
  - V22 = 2k cos²θ0 + mg sin²θ0/(a cosθ0) → 2k (SymPy printed −2k s⁴ + 2k s² + 2k c⁴ + …, which equals 2kc² + …)
  - V13 = ℓ(2ak cosθ0 − mg) sinθ0/a → ℓθ0(2k − mg/a)
  - V33 = ℓ(2akℓ cos³θ0 − mgℓ cos²θ0 + mg(a sinθ0 + ℓ))/(a cosθ0) = 2kℓ²c² + mgℓ s/c + mgℓ²s²/(ac) → 2kℓ² + mgℓθ0
  - V12 = V23 = 0.
  The page's second-order V, k(sx + cℓφ)² + kc²y² + (F/a)(cx − sℓφ)² + (F/a)s²y² + Fsℓφ² with F = mg/(2c), reproduces every one of these exact entries (not only to first order). Boxes p4b-v33 = 2kℓ² + mgℓθ0 and p4b-v13 = 2kℓθ0 − mgℓθ0/a match mine, with the page's stated signs (x right, y up, φ counterclockwise lifting the right end, same as in my SymPy set-up). The statement makes the order (first order in θ0, given in (b) and (c)) and the sign conventions clear enough to reach the boxed forms.
- **p4c-w2**: 3V33/(mℓ²) = 6k/m + 3gθ0/ℓ. Matches.
- **p4c-num**: 6k/m = 100, 3gθ0/ℓ = 11.772, ω = 10.572 rad/s. Exact generalized eigenvalues of the full Hessian with T̂ = diag(m, m, mℓ²/3) (scipy.linalg.eigh): ω = 4.063, 5.759, 10.554 rad/s; first-order matrices: 4.032, 5.774, 10.577. Box 10.57 ± 1% accepts the exact 10.554 and rejects 6k/m alone (10.0) and I = mℓ²/12 (21.1). Page's "differ by less than 1%" and calcs notes "it is 10.55 / 4.06 / 5.76" correct.
- **p4c-flat**: index 2 correct (V13 = 0, rocking √(6k/m)); the swing keeps g/a to first order (exact V11 = 2k sin²θ0 + mg cosθ0/a).
- **Mode-mixing coefficients** ε_x = −V13/(V33 − ω_x² mℓ²/3) and ε_φ = −V13/(V11 − ω_φ² m) re-derived from the rows of (V̂ − ω²T̂)a = 0: correct.
- **Every formula box against its listed mistakes** (200 000 random points in each `vars` range, boxes.py): all answers and mistakes finite; every mistake differs from its answer everywhere; smallest relative differences 5e−4 (p4a-s0 vs a − mg/(2k)), 1.2e−3 (p1b-w3 vs W + wp), 3e−3 (p4b-v33, p4c-w2 vs their θ0-free slips), all far above the checker's 1e−6 agreement (lib/answers.ts `agree`). Every mistake hint is true of its wrong formula (checked one by one).
- **Choice boxes**: right answers at positions 3, 2, 0, 1, 1, 2; right choice lengths 67 of [74,62,58,67], 40 of [39,59,40,34], 10 of [10,10,13,16] (tied shortest, with a same-length false choice), 46 of [49,46,31,36], 55 of [31,55,66,30], 70 of [74,73,70,61]; no backslash TeX in choices; no choice answerable from units; no second right answer.
- `npm run calc:test` in the worktree: 21690 passed.

## Coverage and order
- Problems 1 to 4 and every part in MIT's order; MIT's points 10 (3+2+5), 16 (6+3+3+4), 14 (4+4+6), 20 (7+5+8), total 60, all match.
- Same physics as the sheet in each part. The reading list and the Goldstein pointer of Problem 4 are left out, as the course note asks; Goldstein is not named on the page.
- MIT figures checked on the rendered PDF: Problem 2 masses counterclockwise from top right are θ1, θ2, θ3 with α between 1 and 2, β between 2 and 3, γ between 3 and 1, as the page's "our choice" says; Problem 3 angles from the downward vertical; Problem 4 springs lean inwards from ceiling points further apart than the bar, bar shown with φ lifting the right end, all as the page describes in words.
- Every box is named in its part's statement; "our choice" is marked for the Problem 2 numbering, the Problem 3 lengths and the Problem 4 coordinates and signs, and listed in the intro with the other additions. The frontmatter `summary` and the intro give away no box.
- Citations checked on the PDFs (printed footer pages): Eq. (2.70) p. 45, (2.74) p. 46, (2.86) p. 48; Eq. (3.3) p. 52, (3.9) p. 53, (3.20) p. 55, (3.27), (3.28), (3.30) p. 56. All correct; formula texts match the notes. Reading titles' page ranges (pp. 29–51, pp. 52–59) correct. Both readings are cited.

## Licensing
- No MIT figure embedded or redrawn; the three figures ("Image by MIT OpenCourseWare") are described in words. No "All rights reserved" material on the sheet. No OpenStax or LibreTexts. Statements are in the page's own words. Goldstein never opened or named.

## Notes
- No `## Summary`; no em dashes; no control characters (checked with grep).
- The page treats the Problem 1 top correctly as using Stewart's (Goldstein's) Euler angles; the τ components and their signs depend on that convention, which the statement names ("those of the notes").
- `npm run content:check` in the worktree: 0 errors, 3 warnings site-wide; the only one for this page is "no review file yet", which this file resolves. Symbols, exercise ids, points, formula ranges and mistakes all pass the checker.

## Blind solve

### My answers (written from the stripped statements and MIT's sheet only)

P1 (Goldstein/Stewart Euler angles, notes Eq. (2.70); body components of z_I = (sinth sinpsi, sinth cospsi, costh))
- p1a: tau = R e3 x (-m g z_I) = mgR sin(th) * (cos psi, -sin psi, 0): tau1 = m*g*R*sin(th)*cos(psi), tau2 = -m*g*R*sin(th)*sin(psi), tau3 = 0 (torque along the line of nodes).
- p1b: w1 = W sin th sin psi, w2 = W sin th cos psi, w3 = W cos th + wp. omega3 constant from the third Euler equation (I1 = I2, tau3 = 0); with W and th constant, wp = w3 - W cos th is constant.
- p1c: theta equation for steady precession: (I1 - I3) cos th W^2 - I3 wp W + m g R = 0; real W needs I3^2 wp^2 >= 4 m g R (I1 - I3) cos th, so wp_min = (2/I3) sqrt(m g R (I1 - I3) cos th).
  Toy top: wp_min = 109.06 rad/s (Python). [omega3-type slip 2 sqrt(I1 mgR cos th)/I3 = 123.66; dropping cos: 117.19]
  Tops that satisfy it for every wp, standing above the fixed point (cos th > 0): I3 >= I1 (oblate / "fat" tops). (Also any top hanging below, cos th < 0, if I1 > I3.)

P2 (order 1,2,3 counterclockwise; alpha = 2pi/3 + th2 - th1 etc.)
- V = const + (1/2) kappa [(th2-th1)^2 + (th3-th2)^2 + (th1-th3)^2], kappa = 4 V0 e^{-4pi/3}; T = (1/2) m a^2 sum thdot^2.
- p2a: frequencies 0, w, w with w = sqrt(12 V0 exp(-4 pi/3)/(m a^2)) = (2/a) sqrt(3 V0/m) e^{-2pi/3}. Normalised (a^T T a = 1) modes: (1,1,1)/(a sqrt(3m)), (1,-1,0)/(a sqrt(2m)), (1,1,-2)/(a sqrt(6m)) (any orthonormal pair in the degenerate plane).
- p2b: zeta_k = a_k^T T theta; zeta_1 proportional to th1+th2+th3 obeys zeta1'' = 0 (free rotation); the other two obey zeta'' + w^2 zeta = 0.
- p2c: mode 0: rigid rotation of all three together; degenerate pair: e.g. 1 and 2 move opposite with 3 at rest; 1 and 2 together with 3 opposite at twice the amplitude (centre of mass angle fixed).
- p2d: initial velocity (3,-2,-1) w0 sums to zero, so no zero-mode part: theta_i(t) = (w0/w) sin(w t) * (3, -2, -1)_i; theta1 = 3*w0*sin(w*t)/w.

P3 (m1 = 3m, m2 = m)
- p3a: T11 = 4 m l1^2, T22 = m l2^2, T12 = m l1 l2; V11 = 4 m g l1, V22 = m g l2, V12 = 0.
- p3b: 3 l1 l2 w^4 - 4 g (l1+l2) w^2 + 4 g^2 = 0, w^2 = (2g/(3 l1 l2)) [ (l1+l2) +/- sqrt(l1^2 - l1 l2 + l2^2) ]; larger: (2g/(3 l1 l2))(l1+l2+sqrt(l1^2-l1 l2+l2^2)). Both positive since (l1+l2)^2 - (l1^2 - l1 l2 + l2^2) = 3 l1 l2 > 0. Equal lengths: w^2 = 2g/l and 2g/(3l); ratio sqrt(3) = 1.732.
- p3c: theta2/theta1 = 4(g - l1 w^2)/(l2 w^2) (general); equal lengths: fast mode -2, slow mode +2.

P4 (ceiling points at (+/-D, 0), D = l + a sin th0; equilibrium centre at (0, -a cos th0); coordinates (x, y, phi) of the centre, x right, y up, phi counterclockwise)
- p4a: vertical balance 2 k (a - a0) cos th0 = m g, so a0 = a - m g/(2 k cos th0). Coordinates (x, y, phi). L = (m/2)(xdot^2 + ydot^2) + (1/2)(m l^2/3) phidot^2 - m g y - (k/2)(d1 - a0)^2 - (k/2)(d2 - a0)^2, with d1, d2 the distances from the ceiling points to the bar ends (x -/+ l cos phi, y -/+ l sin phi). I = m l^2/3.
- p4b (sympy, exact Hessian at equilibrium, then first order in th0; gradient checked zero):
  exact V11 = 2k sin^2 th0 + m g cos th0/a -> m g/a; V22 -> 2k; V12 = V23 = 0;
  V13 exact = l (2 a k cos th0 - m g) sin th0/a -> l th0 (2k - m g/a);
  V33 exact = l(2akl cos^3 th0 - g l m cos^2 th0 + g m (a sin th0 + l))/(a cos th0) -> 2 k l^2 + m g l th0.
  T = diag(m, m, m l^2/3).
- p4c: to first order in th0: bounce (y) w^2 = 2k/m, decoupled; sway (mostly x) w^2 = g/a; rocking (mostly phi) w^2 = 3 V33/(m l^2) = 6k/m + 3 g th0/l; sway and rocking mix at order th0 (shifts of their w^2 are order th0^2, assuming g/a not close to 6k/m).
  Numbers (m 0.60, l 0.25, k 10.0, a 0.60, th0 0.10, g 9.81): w^2 = 100 + 11.772 = 111.772, w = 10.572 rad/s. Exact Hessian eigenvalue: 10.554 rad/s (0.17 % off, inside 1 %).
  th0 = 0: V13 = 0, the three motions decouple exactly into pure sway, pure bounce, pure rocking; rocking w^2 = 6k/m.

### Comparison (one line per answer id)
- p1a-tau1: page mgR sinθ cosψ; mine the same. Agree.
- p1a-tau2: page −mgR sinθ sinψ; mine the same. Agree.
- p1b-w3: page Ω cosθ + ω′; mine the same. Agree.
- p1b-why: page index 3 (τ3 = 0 and I1 = I2 keep ω3 fixed); mine the same reason. Agree.
- p1c-wmin: page 2√(mgR(I1 − I3)cosθ)/I3; mine the same. Agree.
- p1c-num: page 109 rad/s; mine 109.06. Agree.
- p1c-tops: page index 2 (I3 larger than I1); mine I3 ≥ I1. Agree.
- p2a-w: page √(12V0e^{−4π/3}/(ma²)); mine the same. Agree.
- p2a-list: page 0, ω, ω; mine the same. Agree.
- p2b-zero: page free equation (ξ̈ = 0); mine the same. Agree.
- p2d-th1: page 3ω0 sin(ωt)/ω; mine the same. Agree.
- p3a-t12: page mℓ1ℓ2; mine the same. Agree.
- p3a-v11: page 4mgℓ1; mine the same. Agree.
- p3b-w2: page (2g/(3ℓ1ℓ2))(ℓ1 + ℓ2 + √(ℓ1² − ℓ1ℓ2 + ℓ2²)); mine the same. Agree.
- p3b-ratio: page 1.732; mine √3. Agree.
- p3c-ratio: page −2.00; mine −2. Agree.
- p4a-s0: page a − mg/(2k cosθ0); mine the same. Agree.
- p4a-coords: page index 1 (x, y of the centre and φ); mine the same. Agree.
- p4a-inertia: page mℓ²/3; mine the same. Agree.
- p4b-v33: page 2kℓ² + mgℓθ0; mine (SymPy) the same. Agree.
- p4b-v13: page 2kℓθ0 − mgℓθ0/a; mine (SymPy) ℓθ0(2k − mg/a). Agree.
- p4c-w2: page 6k/m + 3gθ0/ℓ; mine the same. Agree.
- p4c-num: page 10.57 rad/s; mine 10.572 (exact matrices 10.554). Agree.
- p4c-flat: page index 2; mine the same. Agree.

No disagreement between my blind answers and the page's.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: Problem 4(c) now says the first-order coupling changes the frequencies only at second order "provided g/a is not close to 6k/m (here 16.4 against 100 s⁻²)".
- Info 2: Problem 3(b) check now says "For equal masses and lengths".
- Info 3: no change (each hint is true of its formula).
- Info 4: the Problem 2(a) mistake hint now says the diagonal entries are twice the coefficients of the squares.
- Info 5: Problem 1(b) check now says |ω|² is constant "since Ω, θ and ω₃ are".
- `status: reviewed`.
