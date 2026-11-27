---
page: content/year-4/8.09/8-09-problem-set-3.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset3/ (read: pdftotext and pp. 3-4 rendered, pendulum figure at 400 and 1200 dpi)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: downloaded, pdftotext per page, printed footers pp. 29-51)
verdict: needs-changes
---

# Review: Problem Set 3: The rotation angle, the Foucault pendulum, Euler angles, a disk with a point mass and a rolling cone

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the "Blind solve / My answers" section at the end was written to this file before the full page or its calcs file was opened. Goldstein was not opened.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2 statement (line 233, "where φ is counted from x̂ towards ŷ, as in the figure"); 2(b) statement ("the solution discusses the sign"); 2(b) solution step "The sign" (line 339); intro bullet on Problem 2 | Sheet p. 3: "Demonstrate that the pendulum undergoes precession with φ̇ = ω sin λ". The figure (rendered at 1200 dpi) draws the φ arc between the base line of the plane of swing and the **ŷ** axis, not the x̂ axis: φ is marked from north (ŷ) towards the plane, i.e. counted from ŷ towards x̂, clockwise seen from above. Notes p. 35 likewise pair "φ̇ ≈ ω_Earth sin(λ)" with "the precession is clockwise in the northern hemisphere". With φ counted clockwise, MIT's +ω sin λ is right. | Says the figure counts φ from x̂ towards ŷ and that MIT's sign "would need φ counted the other way", i.e. that the sheet's sign is wrong for its own axes. | Make "φ counted from x̂ (east) towards ŷ (north)" an explicit **our choice** (the usual spherical convention), in the statement and the intro list. In "The sign" replace the verdict on MIT with: "The sheet's figure marks φ from ŷ (north) towards the plane of swing, that is clockwise seen from above; in that angle the same motion reads φ̇ = +ω sin λ, as the sheet and the notes (p. 35) write. With our φ, counted anticlockwise, it is φ̇ = −ω sin λ. Both say: clockwise in the north." Change the 2(b) statement's bracket to "(The sheet writes φ̇ = ω sin λ with its φ counted clockwise; with ours the sign is minus.)". Update the page-scoped φ meaning in data/symbols.json only if its wording changes. |
| 2 | warning | Problem 2 statement (line 233) and intro bullet: "The sheet's figure draws θ from the upward axis" | In the figure θ is marked **at the pivot** (the top end of the rod, on the z axis), between the rod and the part of the z axis below the pivot: from the downward vertical. The figure's axes have their origin below the pivot. | Says the figure measures θ from the upward axis and that θ from the downward vertical is our choice. | Write: "The sheet's figure marks θ at the pivot, between the rod and the vertical below it, as we do; our choice is to put the origin of the axes at the pivot (the figure's axes start below it)." Keep the "our choice" mark on the origin, not on θ. |

## Arithmetic and answer checks
All recomputed by me (sympy/numpy/scipy, scripts blind.py and fouc.py in the scratch folder), and `pytest tests/calc -k 8-09-problem-set-3` in the worktree: 43 passed.

- 1(a)-(c): ξ_a = (ξ₁+ξ₂)/√2, ξ_b = i(ξ₁−ξ₂)/√2 (page; mine had the other sign of ξ_b, which the page names as the alternative giving −Φ). With the page's sign, W = (1/√2)[[1,1,0],[−i,i,0],[0,0,√2]] and Ũ = W D W† = [[cos Φ, −sin Φ,0],[sin Φ, cos Φ,0],[0,0,1]]: entry (1,2) = ½(e^{iΦ}·i + e^{−iΦ}·(−i)) = −sin Φ. Correct. Numerical check on a random rotation (angle 1.1, axis (1,2,−0.5)): with my sign Ũ = [[0.4536, 0.8912,0],[−0.8912,0.4536,0],[0,0,1]], so the page's sign gives the transpose, as it says. det W = (1/2)(2i) = i, modulus 1. Correct.
- p1c-angle: Tr P = 0, Φ = arccos(−1/2) = 120.000°. Box 120, 1%: correct. p1c-axis: P(1,1,1) = (1,1,1); choice 0 correct; the other three are not fixed by P.
- 2(a): my sympy Lagrange equations from L = (mℓ²/2)(θ̇² + sin²θ φ̇²) + mℓ²ω[sin λ sin²θ φ̇ + cos λ(sin θ cos θ sin φ φ̇ − cos φ θ̇)] + mgℓ cos θ agree term by term with the page's θ and φ equations. The bracket sin λ cos θ − cos λ sin θ sin φ = −ω̂·r̂: checked. ωR_e term: ω×ẑ = ω(cos λ,0,0), so m R_e ω cos λ ẋ: correct.
- 2(b): small-angle equations and d/dt[θ²(φ̇ + ω sin λ)] = 0: correct. Numerical integration of the full (non-linearised) equations of part (a) with ω = 0.02 s⁻¹, ℓ = 1 m, θ₀ = 0.05, released from rest at φ = 0: the plane turns at −0.015046 rad/s against −ω sin λ = −0.015060 (0.1%); so φ̇ = −ω sin λ for φ counted from x̂ to ŷ. The same run shows θ never reaches 0 (min θ = 2.4×10⁻⁴ ≈ θ₀ ω sin λ/√(g/ℓ)): see Notes.
- p2b-time: 2π/(7.29×10⁻⁵ · sin 48.85°)/3600 = 31.795 h; sin 48.85° = 0.75299; 2π/ω = 23.94 h. Box 31.8 h, 1% (31.48-32.11): correct; a reader using a 24 h day gets 31.87 h and passes; using cos λ gives 36.4 h and fails.
- p2b-sense: clockwise (choice 2): correct.
- 3(a), (b): both derivations match mine (U ẑ, U_ψ x̂, third row of U); |ω|² = φ̇²+θ̇²+ψ̇²+2φ̇ψ̇ cos θ: checked by the calcs entry.
- p3c-dtdpsi: (I1−I2) w1 w2: correct. Mistakes (I2−I1)w1w2 and 0 differ from it over the whole vars range (I1 ∈ [1,2], I2 ∈ [3,4], w ≥ 0.5); hints true. p3c-force: torque about body z′ (choice 3): correct; Q_ψ = τ₃ argument correct.
- 4(a): disk about centre (MR²/4)diag(1,1,2); about A (MR²/8)[[13,−3,0],[−3,5,0],[0,0,18]]: matches mine. Boxes p4a-disk 1/4, p4a-xx 13/8, p4a-xy −3/8: correct; mistakes and hints correct (5/4 is the disk alone about A; +3/8 sign slip; 0).
- 4(b): eigenvalues 0.5, 1.75, 2.25 (numpy eigh); axes (1,3,0)/√10 and (3,−1,0)/√10; λ² − (9/4)λ + 7/8 = 0, discriminant 25/16. Boxes correct; p4b-axis choice 3 "(1, 3, 0)" correct.
- 4(c): L_A = MR²ω(−3/8 cos ωt, 5/8, 3/8 sin ωt): identical to mine. p4c-ly, p4c-lx correct; the sign mistake differs everywhere because ωt ≤ 1.4 < π/2 over the vars; hints true.
- 5(a): M = πρh³tan²α/3, CM 3h/4, I_∥ = (3/10)Mh²tan²α, I_⊥ = (3/20)Mh²(4+tan²α): match. Mistakes (cylinder volume, 2h/3, h/4, ½, the CM moment) all differ over α ∈ [0.2,0.6]; hints true.
- 5(b): (3/80)Mh²(1+4tan²α): match; mistake hint true.
- 5(c): I_yy = (3/20)Mh² sin²α(6+tan²α) equals my (3/20)Mh²(5 sin²α + tan²α) (sympy difference 0); I_yz = (3/20)Mh²(tan²α−4) sin α cos α equals my (3/20)Mh²(tan α − 5 sin α cos α). Mistakes: I_⊥ and I_zz (the second checked: I_⊥cos²α + I_∥sin²α = (3/20)Mh²[(4+t²)cos²α + 2t² sin²α]); sign flip differs everywhere since tan α < 2 in the range. Hints true.
- 5(d): |ω| = 2π/(τ tan α); T = (3π²/(10τ²))Mh²(1+5cos²α); both routes equal (sympy). The α = 45° hand check (21/80 from both routes; 9/64 + 39/320) recomputed: correct. Density form π³ρh⁵tan²α(1+5cos²α)/(10τ²): correct. Mistakes: 2π/τ and 2π tan α/τ coincide with the answer only at α = π/4, outside [0.2, 0.6]; CM-only 9π²Mh²cos²α/(8τ²) and the "ω = 2π/τ" form are correct statements of those slips.

## Coverage and order
- Five problems in MIT's order, parts in MIT's order; points per problem (10, 13, 9, 12, 16) and per part (4/2/4; 9/4; 2/4/3; 4/4/4; 5/2/4/5) equal the sheet's.
- Goldstein pointers (3(b), Problem 5) dropped, as the course rules say; all problems are stated in full on the sheet, so nothing is "our own problem".
- Added boxes are marked "our addition" and listed in the intro (1(c) matrix P, Paris time, Q_ψ, mass, axis and |ω| in Problem 5, every choice box).
- The frontmatter `summary` names the tasks only; it gives no box value or sign.

## Licensing
- The two figures ("Image by MIT OpenCourseWare") are described in words, not embedded or redrawn. No "All rights reserved" or "Courtesy of" material on the sheet. No OpenStax or LibreTexts. Wording is the page's own; the formulas quoted from the sheet are cited to it.
- Citations checked on the notes PDF (printed footers): eq. (2.5) and (2.6) p. 31; (2.15) p. 33; (2.25) p. 35; Foucault example p. 35; (2.43) p. 39; (2.49) p. 40; (2.55) p. 41; (2.58) p. 42; (2.68) p. 44; (2.70) p. 45 ("should be derived as exercise for the student"). All correct. The reading is cited by Formulas (eq. (2.6), (2.49), (2.68)).
- No em dashes, no `## Summary`, no control characters. data/symbols.json: add-only by meaning (0 meanings lost; script compared HEAD~1 and HEAD), 12 new entries plus page-scoped meanings.

## Notes
- (warning) 2(b) solution, step "The precession": "A pendulum set swinging from rest passes through the vertical, θ = 0, where this quantity is zero". Released from rest in the Earth's frame, θ²(φ̇ + ω sin λ) = θ₀²ω sin λ ≠ 0, and the bob misses the vertical (my integration: min θ = 2.4×10⁻⁴ for θ₀ = 0.05, ω = 0.02 s⁻¹, ℓ = 1 m, matching θ₀ω sin λ √(ℓ/g)). Fix: "A pendulum started from the vertical with a sideways push passes through θ = 0, where this quantity is zero, so it is zero all the time. One released from rest has the small constant θ₀²ω sin λ instead: its path is a very thin ellipse that misses the vertical by about θ₀ω sin λ √(ℓ/g), and its plane turns at the same rate."
- (info) The equations of 2(a) are checked "outside this file" only (calcs header). My sympy derivation agrees, so no change needed; a calcs identity at a few sample points would make it durable.
- (info) calcs entry p4b-trace-det checks only the sum 18/8 + 56/64 = 9/4 + 7/8, which would pass a wrong trace balanced by a wrong determinant. Split it into two entries.
- (info) 3(c) "as in the lesson on the symmetric top": that lesson exists (`symmetric-top-one-point-fixed`); a link would help.
- (info) MIT's 5(c) calls the rolling axes "body axes"; the page rightly says they turn with the line of contact, not with the cone. Consider adding "(the sheet calls them body axes)" so the difference is visible.
- (info) The lesson `rotating-frames-coriolis-force` writes φ̇ ≈ ω_Earth sin λ (notes p. 35) with "clockwise"; after fix 1 the set and the lesson no longer read as contradicting each other.

## Blind solve

Written from the stripped statements and MIT's sheet only (text and rendered pp. 3-4), before opening the full page or its calcs file. Checked with sympy/numpy (script blind.py in the reviewer's scratch folder).

### My answers
- **1(a)** xi_a = (xi_1 + xi_2)/sqrt2, xi_b = -i(xi_1 - xi_2)/sqrt2 (both real because xi_1* = xi_2; orthonormal: xi_a.xi_a = xi_b.xi_b = 1, xi_a.xi_b = (-i/2)(1 - 1) = 0, both orthogonal to xi_3). The opposite sign of xi_b reverses the sense of Phi. Numerically on a random rotation: imaginary parts 0, Gram matrix = identity.
- **1(b)** xi_1 = (xi_a + i xi_b)/sqrt2, xi_2 = (xi_a - i xi_b)/sqrt2, so u_a = (s_1 + s_2)/sqrt2, u_b = i(s_1 - s_2)/sqrt2, u_3 = s_3: W = [[1,1,0],[i,-i,0],[0,0,sqrt2]]/sqrt2; columns orthonormal, W^dagger W = 1.
- **1(c)** U xi_a = cos Phi xi_a - sin Phi xi_b, U xi_b = sin Phi xi_a + cos Phi xi_b, so U~ = W D W^dagger = [[cos Phi, sin Phi, 0],[-sin Phi, cos Phi, 0],[0,0,1]] (numerically: random U with angle 1.1 gives [[0.4536, 0.8912,0],[-0.8912,0.4536,0],[0,0,1]], cos 1.1 = 0.4536, sin 1.1 = 0.8912). Tr U~ = 1 + 2 cos Phi. P (x,y,z) -> (z,x,y): Tr P = 0, cos Phi = -1/2, **Phi = 120 deg** (2.094 rad); axis **(1,1,1)/sqrt3** (P(1,1,1) = (1,1,1)); P e_x = e_y, so the active turn is +120 deg about (1,1,1) by the right-hand rule.
- **2(a)** With r = l(sin th cos ph, sin th sin ph, -cos th), omega = omega(0, cos lam, sin lam), V = -m g l cos th, to first order in omega and dropping the total derivative:
  L = (m l^2/2)(th'^2 + sin^2 th ph'^2) + m l^2 omega[ sin lam sin^2 th ph' + cos lam (sin th cos th sin ph ph' - cos ph th') ] + m g l cos th.
  theta: th'' - sin th cos th ph'^2 + (g/l) sin th - 2 omega sin lam sin th cos th ph' + 2 omega cos lam sin^2 th sin ph ph' = 0.
  phi: d/dt(sin^2 th ph') + 2 omega sin lam sin th cos th th' - 2 omega cos lam sin^2 th sin ph th' = 0, i.e. sin^2 th ph'' + 2 sin th cos th th' ph' + 2 omega sin th th'(sin lam cos th - cos lam sin th sin ph) = 0.
- **2(b)** Small th: d/dt[th^2 (ph' + omega sin lam)] = 0; for a swing through the vertical (or released from rest in the Earth's frame, to first order) the constant is ~0, so **ph' = -omega sin lam** with ph counted from x (east) towards y (north): clockwise seen from above in the north. With ph counted from y towards x (which is how the arc in MIT's figure is literally drawn, see the review), the same motion is ph' = +omega sin lam. Paris: omega sin lam = **5.489e-5 rad/s** (11.32 deg/h); one turn of the plane takes 2 pi/(omega sin lam) = **31.80 h** (1.1446e5 s).
- **3(a)** omega' = ph' (U z_hat) + th' (U_psi x_hat) + psi' z_hat' with U z_hat = (sin th sin psi, sin th cos psi, cos th), U_psi x_hat = (cos psi, -sin psi, 0): gives the sheet's result.
- **3(b)** In space: z_hat' = third row of U = (sin th sin ph, -sin th cos ph, cos th), line of nodes = (cos ph, sin ph, 0): gives the sheet's result.
- **3(c)** dT/d psi' = I3 w3; **dT/d psi = (I1 - I2) w1 w2** (since d w1/d psi = w2, d w2/d psi = -w1); equation: I3 w3' - (I1 - I2) w1 w2 = Q_psi, with Q_psi = N_3 (torque about z'), i.e. I3 w3' = (I1 - I2) w1 w2 + N3.
- **4(a)** Disk about centre: (M R^2/4) diag(1, 1, 2). About A (units M R^2): Ixx = 13/8, Iyy = 5/8, Izz = 9/4, Ixy = Iyx = -3/8, others 0.
- **4(b)** Principal moments (M R^2): **1/2, 7/4, 9/4** (0.5, 1.75, 2.25); axes (1,3,0)/sqrt10, (3,-1,0)/sqrt10, (0,0,1) (numpy eigh agrees).
- **4(c)** With omega = omega y_hat and m at (R,R,0) at t=0: m at (R cos wt, R, -R sin wt); **L_A = M R^2 omega(-3/8 cos wt, 5/8, 3/8 sin wt)**; check t=0: I.y_hat = (-3/8, 5/8, 0).
- **5(a)** M = pi rho h^3 tan^2 alpha / 3; CM on the axis at **3h/4** from the tip; I_y'y' = (3/10) M h^2 tan^2 alpha; I_x'x' = I_z'z' = (3/20) M h^2 (4 + tan^2 alpha) = (3/5) M h^2 (1 + tan^2 alpha /4); products 0.
- **5(b)** About CM: axis moment unchanged; perpendicular **(3/80) M h^2 (1 + 4 tan^2 alpha)**.
- **5(c)** Cone axis n = (0, cos alpha, sin alpha): I = I_perp(1 - n n) + I_par n n. I_xx = (3/20)Mh^2(4 + tan^2 a); **I_yy = (3/20) M h^2 (5 sin^2 a + tan^2 a) = (3/20) M h^2 sin^2 a (6 + tan^2 a)**; **I_yz = (3/20) M h^2 (tan a - 5 sin a cos a) = (3/20) M h^2 sin a cos a (tan^2 a - 4)** (negative for small alpha, as it must be with I_ab = -sum m y z); I_zz = I_perp cos^2 a + I_par sin^2 a; I_xy = I_xz = 0.
- **5(d)** Line of contact turns at Omega = 2 pi/tau; instantaneous axis = line of contact; v_CM = Omega (3h/4) cos a = |omega| (3h/4) sin a, so **|omega| = 2 pi/(tau tan a)**. T = I_yy omega^2/2 = **(3 pi^2 M h^2/(10 tau^2))(1 + 5 cos^2 a)**; the CM route (b) gives the same (sympy difference 0).

### Comparison (one line per answer id)
- p1a-pair: page choice 2 = my ξ_a, ξ_b up to the sign of ξ_b (page names both signs). Agree.
- p1c-angle: 120 = 120. Agree.
- p1c-axis: (1,1,1) = (1,1,1). Agree.
- p2b-sense: clockwise = clockwise. Agree.
- p2b-time: 31.8 h = 31.80 h. Agree.
- (2(b) formula, no box) φ̇ = −ω sin λ = mine for φ from x̂ to ŷ. Agree; the dispute is only about which φ the sheet's figure uses (Difference 1).
- p3c-dtdpsi: (I1−I2)w1w2 = mine. Agree.
- p3c-force: torque about body z′ = mine (Q_ψ = N₃). Agree.
- p4a-disk: MR²/4 = mine. Agree.
- p4a-xx: 13/8 MR² = mine. Agree.
- p4a-xy: −3/8 MR² = mine. Agree.
- p4b-small / p4b-mid / p4b-large: 0.5 / 1.75 / 2.25 = mine. Agree.
- p4b-axis: (1,3,0) = mine. Agree.
- p4c-ly: 5/8 MR²ω = mine. Agree.
- p4c-lx: −3/8 MR²ω cos ωt = mine. Agree.
- p5a-mass: πρh³tan²α/3 = mine. Agree.
- p5a-cm: 3h/4 = mine. Agree.
- p5a-axis: (3/10)Mh²tan²α = mine. Agree.
- p5a-perp: (3/20)Mh²(4+tan²α) = mine. Agree.
- p5b-perp: (3/80)Mh²(1+4tan²α) = mine. Agree.
- p5c-yy: (3/20)Mh²sin²α(6+tan²α) = my (3/20)Mh²(5sin²α+tan²α) (sympy difference 0). Agree.
- p5c-yz: (3/20)Mh²(tan²α−4)sinα cosα = my (3/20)Mh²(tan α − 5 sin α cos α) (sympy difference 0). Agree.
- p5d-axis: line of contact = mine. Agree.
- p5d-omega: 2π/(τ tan α) = mine. Agree.
- p5d-t: (3π²/10)Mh²(1+5cos²α)/τ² = mine. Agree.

No disagreement on any answer value. The one error is the page's claim about MIT's sign and figure.

COUNTS: errors=1 warnings=2 info=5

## Resolution (2026-11-27, by the page author)

- Error 1 (sign of φ̇ in Problem 2): checked on the figure rendered at 300 dpi; the φ arc runs from ŷ to the plane of swing, so the sheet's +ω sin λ is right for its φ. The page no longer calls MIT's sign wrong. "φ counted from x̂ (east) towards ŷ (north), anticlockwise seen from above" is now marked as our choice in the statement, in the Formula's `at` and in the intro list. The step "The sign" now reads as suggested (the sheet's φ from ŷ, clockwise, gives +ω sin λ, as the sheet and the notes p. 35 write; ours gives −ω sin λ; both say clockwise in the north). The 2(b) bracket now reads "(The sheet writes φ̇ = ω sin λ with its φ counted clockwise; with ours the sign is minus.)". The page-scoped φ meaning in data/symbols.json ("counted from east towards north") still matches and was kept.
- Warning 2 (θ in the figure): the statement now says the figure marks θ at the pivot, between the rod and the vertical below it, as the page does; "our choice" now applies to putting the origin of the axes at the pivot (statement, intro list and the Formula's `at`).
- Warning 3 (released from rest): "The precession" now says a pendulum started from the vertical with a sideways push has the constant zero, while one released from rest has the small constant θ₀²ω sin λ (a very thin ellipse whose plane turns at the same rate). A page-scoped meaning for θ₀ was added.
- Info (2(a) equations in calcs): new entries p2a-theta and p2a-phi check both equations against Lagrange's equations computed numerically (nested numerical derivatives along test paths) from the vector form ½|v|² + v·(ω × r) + G cos θ; the calcs header no longer says the check was outside the file.
- Info (p4b-trace-det): split into p4b-trace and p4b-det.
- Info (3(c)): "the lesson on the symmetric top" now links to /courses/8-09/symmetric-top-one-point-fixed.
- Info (5(c)): the statement now says "The sheet calls them body axes, but they turn with the line of contact, not with the cone".
- Info (lesson rotating-frames-coriolis-force): no change needed; after fix 1 the set and the lesson agree.
- `status: reviewed`.
