---
page: content/year-1/8.02/8-02-problem-set-6.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving05/ (read: solving05.pdf, all 10 pages; pages with Figures 2 and 4 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read: Sections 8.2, 8.3, 8.10, 8.11; printed pp. 23 to 27 rendered, incl. Figures 8.11.1 and 8.11.5)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ (read: Eqs. 6.1.3, 6.2.10, 6.3.2)
verdict: needs-changes
---

# Review: Problem Set 6: magnetic force, torque and magnetic moments

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written before opening the full page, its calcs file or its symbols. Sources read: stripped-set-6.mdx, solving05.pdf (all pages, Figures 2 and 4 rendered), ch8magneti_field.pdf (printed pp. 23 to 27, Figures 8.11.1 and 8.11.5 rendered). Numbers by Python (scratch rv6py/solve.py): segment-by-segment integration of I ds x B for the rectangle, the hinged square and the cone, compared with the closed forms.

### My answers
- p1(a): dq = rho A dx.
- p1(b): I = rho A v_d.
- p1(c): dF = rho A dx v_d x B; v_d dx = v_d ds (same direction), so dF = (rho A v_d) ds x B = I ds x B.
- p2(a): F4 = I a k x B i = I a B j: size IaB, into the page (+j).
- p2(b): F3 = 0, F1 = 0 (current parallel/antiparallel to B); F2 = -IaB j (out of the page); total force 0.
- p2(c): tau4 = (b/2) i x IaB j = (IabB/2) k, tau2 = (-b/2 i) x (-IaB j) = (IabB/2) k; total IabB k, size IabB. Sides 1, 3: no force, so no torque.
- p2(d): the loop turns about the vertical (k) axis through its centre, anticlockwise seen from above (side 4 pushed into the page, side 2 out), turning mu towards B; no translation.
- p2(e): mu = I a b (-j); mu x B = -IabB (j x i) = IabB k. Agrees.
- p3(a): hinge axis x, z up, loop direction (0, sin th, -cos th); anticlockwise from above gives mu = I l^2 (0, cos th, sin th); tau = mu x (-B k) = -I l^2 B cos th i; size I l^2 B cos(theta). (Numerical segment sum: 0.039319 vs formula 0.039319 at I=3, l=0.2, B=0.4, th=35 deg.)
- p3(b): torque along -x; increasing theta is rotation about +x, so theta decreases (the bottom side is pushed back towards the vertical; mu turns towards B).
- p3(c): gravity pulls theta down, so the magnetic torque must raise theta: clockwise as seen from above.
- p3(d): I l^2 B cos th = m g (l/2) sin th, I = m g tan th / (2 l B) = 17.83 A (MIT: "~20 A"). Segment sum with gravity: x-torque 0 at this current (clockwise).
- p3(e): net magnetic force on the closed loop is 0, so the pivots push up with m g = 0.49 N, vertically upward.
- p4(a): 0 (closed loop, uniform field).
- p4(b): A = pi R^2/2 + R^2 cot(theta/2); tau = I B R^2 (pi/2 + 1/tan(theta/2)) (mu perpendicular to B). Segment sum 0.401253 vs formula 0.401253 at R=0.3, theta=50 deg, I=1.5, B=0.8.
- p4(c): clockwise current: mu into the page; tau = mu x B points down the page, along the symmetry line from the tip towards the semicircle (-y). Segment sum confirms (-y).
- p5(a): J B = rho_m g, J = rho_m g / B = 1.744e9 A/m^2; east x north = up, so the current flows from west to east.
- p5(b): P/V = J^2 rho_e = 5.17e10 W/m^3 = 5.17e4 W/cm^3 (51730).

### Comparison (one line per answer id)
- p1-a `rho*A*dx`: agrees.
- p1-b `rho*A*vd`: agrees.
- p1-c (self-marked): steps agree with mine.
- p2-a choice 2 "IaB along +j (into the page)": agrees.
- p2-b choice 0 "sides 3 and 1 zero; side 2 IaB along -j; total zero": agrees.
- p2-c `I*a*b*B`: agrees.
- p2-d choice 2 "turns about the vertical axis, normal swings towards the field": agrees (k x (-j) = +i, checked).
- p2-e (self-marked) IabB k: agrees.
- p3-a `I*l^2*B*cos(theta)`: agrees (also by segment integration).
- p3-b choice 2 "shrinks": agrees.
- p3-c choice 1 "clockwise as seen from above": agrees (segment sum: the x-torque of magnetic forces plus gravity is 0 at 17.83 A only for clockwise; anticlockwise leaves -0.0168 N m).
- p3-d 17.8 A (2%): agrees (17.835 A).
- p3-e choice 3 "0.49 N straight up": agrees.
- p4-a choice 1 "zero": agrees.
- p4-b `I*B*R^2*(pi/2 + 1/tan(theta/2))`: agrees (segment sum 0.401253 = formula).
- p4-c choice 1 "along the line of symmetry, from the tip towards the semicircle": agrees (-y by segment sum).
- p5-a 1.74e9 A/m² (2%) and p5-a-dir choice 1 "towards the east": agree.
- p5-b 5.17e4 W/cm³ (2%): agrees (51730).

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "How to answer", second paragraph | (not MIT; rule: no hint or text gives a result away) | "for example `rho*A*dx`, `I*a*b*B` or `I*l^2*B*cos(theta)`": these are, character for character, the answers of boxes p1-a, p2-c and p3-a (21 points) | Replace the three examples with formulas that answer nothing on the page, e.g. `q*v*B*sin(phi)`, `m*g/(2*B)`, `x^2*y*cos(phi)`; keep the typing advice. |
| 2 | warning | Problem 2(c), first sentence of the statement | Q13 asks for the total torque; Q9 (total force) is answered before it on the tear-sheet | "The two forces you found are equal and opposite, but they act on opposite sides of the loop." This sits above the p2-b box on the same page and tells the reader F2 = -F4, which leaves only choices 0 and 2 of p2-b and gives the total force of choice 0 | Reword to "The forces on sides 4 and 2 act on opposite sides of the loop, so they can turn it." (no statement that they are equal and opposite). |
| 3 | info | Problem 3, parts (c) to (e) | Notes 8.11.2: (a) direction, (b) torque from the forces, (c) current, (d) pivot force, (e) torque from the dipole moment | Notes' (b) and (e) are folded into part (a) (dipole route) and its "Check with the forces" step; the page does not say so | Optional: add to the paragraph before (c): "The notes' parts (b) and (e), the torque from the forces and from the dipole moment, are part (a) above." |
| 4 | info | Problem 3, paragraph before (c) | Notes: "The loop carries a current I so that it is in equilibrium" | The statement above still says "The current I flows anticlockwise as seen from above", and (c) then asks which way it flows | Optional: add "Its direction is now to be found." to the paragraph before (c). |
| 5 | info | "What you need", Formula "Current density, and the power turned into heat" | Eq. (6.1.3) is I = ∫ J · dA (p. 2) | Cited for J = I/A⊥ | Optional: at="Eq. (6.1.3) with uniform J, …". |
| 6 | info | Problem 3(e) | Notes 8.11.2(d): "the force exerted on the axis by the pivots" | "What force do the pivots of the hinge exert on the loop?" | None needed: the axis is the loop's top side, so the answer is the same (0.49 N up). |

## Arithmetic and answer checks
- All numbers recomputed in Python: I = 0.05 x 9.8 x tan 20° / (2 x 0.10 x 0.050) = 17.835 A; tau_g = 8.38e-3 N m and Iℓ²B cos 20° at 17.8 A = 8.36e-3 N m (page 8.4e-3 for both: right); mg = 0.49 N; pi/2 + 1 = 2.5708 (page 2.57); J = 1.7444e9 A/m² = 1744 A/mm² (page "about 1700"); rho_e J² = 5.173e10 W/m³ = 5.17e4 W/cm³ = 52 kW (right).
- Physical checks: copper heats at 5.17e10 / (8900 x 385) = 1.5e4 K/s, so reaching and passing the melting point (about 1060 K rise plus latent heat) takes about 0.1 s: "within a fraction of a second" is right. 52 kW / about 2.5 kW per kettle is about 20 kettles: right. "Hundreds of times" a household density of a few A/mm²: right.
- Every direction checked by an independent coordinate calculation: rectangle (x right, z up, y into the page), hinged loop (x along the hinge, z up, loop along (0, sin θ, -cos θ); anticlockwise from above gives mu = Iℓ²(0, cos θ, sin θ), torque along -x, and increasing θ is rotation about +x), cone (x right, y up, z out; clockwise as in the rendered Figure 8.11.5, whose arrow runs along the arc from the bottom of the semicircle to its left end), wire (x east, y north, z up). All agree with the page, including the solution claims in p2-d (normal swings towards +i), the p3-a check step (slanted-side forces lie along the hinge; bottom-side lever arm ℓ cos θ), p3-e (hinge-side and bottom-side forces equal and opposite) and p4-c (mu swings towards B).
- Formula answers: every listed mistake differs from the answer over the whole `vars` range (sin vs cos in p3-a meet only at θ = 0.785, outside [0.1, 0.7]; ℓ vs ℓ² meet only at ℓ = 1, outside [0.05, 0.5]); each mistake hint is true of its formula. Number boxes at 2% reject the obvious slips (p3-d: factor 1/2 dropped gives 35.7 A, tan inverted gives 135 A; p5-b: W/m³ gives 5.17e10).
- Calcs file: every `shown:` string occurs verbatim in the page (scripted check); the identity entries use independent routes (integrals, a numerical solve, the force route for the dipole result). Not run by me: `npm run calc:test` and `content:check` (no repository commands run in the worktree).
- Every solution ends with a check (units, a limit, a number or the other route), except p2-d and p3-e, which end with the physical argument; acceptable.

## Coverage and order
- Session: Questions 1 to 4 become Problem 1 (Q2 and Q3 merged into part b), Questions 5 to 15 become Problem 2 (Q10 to Q13 merged into part c, which asks only the size; the direction is in the solution), Questions 16 and 17 become Problem 3(a), (b). MIT's order is kept. Every `at=` page checked against the printed "Solving5-N" footers (Q1 to Q3 p. 2, Q4 p. 3, Q5 to Q7 p. 4, Q8 to Q10 p. 5, Q11 to Q14 p. 6, dipole text, electric-dipole torque and Q15 p. 7, Q16 and Q17 p. 8): all right.
- Notes: 8.11.2 (pp. 23 and 24), 8.11.6 (p. 26) and 8.11.8 (p. 27) are Additional Problems; none is a Solved Problem. Printed page numbers checked (PDF page = printed page + 1). Eqs. (8.2.1) p. 2, (8.3.1) and (8.3.3) p. 4, (8.3.5) p. 5, (6.1.3) p. 2, (6.2.10) p. 5, (6.3.2) p. 7: all right.
- Figures described in words match the rendered MIT figures: Figure 2 (axes, side numbers, side lengths, current direction, n = -j), Figure 4 / 8.11.1 (hinge AA' along the top side, θ from the vertical, B down), Figure 8.11.5 (tip up, semicircle down, B to the right, current clockwise).
- Problem 4 asks for the torque in R and θ instead of MIT's ℓ; the statement says so, and ℓ = R/sin(θ/2) is given in the solution. Equivalent: ½ℓ² sin θ = R² cot(θ/2).
- No part goes beyond MIT, so no "(our addition)" marks are needed; the θ = 90° check number is marked "(ours)". The diameter d of 8.11.8 is dropped and the solution notes that it cancels.
- Points 15 + 25 + 30 + 15 + 15 = 100; the page says the points are ours. `summary` names topics only.

## Licensing
- `grep -il "rights reserved\|courtesy"` on solving05, ch8magneti_field and chapter6current: no match. No MIT figure is redrawn; every situation is described in words. The wording is the page's own (checked against the session and notes text). No OpenStax, no LibreTexts. No em or en dashes, no control characters, no `## Summary`.

## Symbols
- 44 page-scoped meanings checked. The course-wide letters used (B, I, R, L, P, A, a, r, t, v, n, d, ρ, μ, τ, plus F, J, q, s, h, m, g, p, x, b, ℓ) all have meanings for this page that fit and give nothing away. θ, π, the unit vectors, ×, ∫, ∮ and cot fall back to general meanings that fit (the unit-vector meanings "x, y, z direction" fit the axes each problem defines). E occurs only as E_ext, which has a page meaning.

## Notes
- Answer positions: 2, 0, 2, 2, 1, 3, 1, 1, 1. Four of the last five are position 1, and in p3-e and p4-a the right choice is the shortest (info; optional: move the right choice of p4-c or p5-a-dir).
- p4-a choice "IB(π + 2)R, …" is not in `$…$` while the other choices with maths are (info: write `$IB(\pi + 2)R$`).
- Opening the solution of p3-c states the answer of p3-b ("Part (b) showed that an anticlockwise current … makes θ smaller"); usual for sequential parts (info, no fix needed).
- Intro claim checked: the lessons for Lectures 14 and 15 do not treat the torque on a loop or the dipole moment; magnetic-dipoles is Lecture 17, after the session (Lecture 16).

COUNTS: errors=1 warnings=1 info=7

## Resolution (2026-11-28, by the page author)

- Error 1 (typing examples were answers): "How to answer" now uses `q*v*B*sin(phi)`, `m*g/(2*B)` and `x^2*y*cos(phi)`, none of which answers a box.
- Warning 2 (2(c) gave away p2-b): the sentence now reads "The forces on sides 4 and 2 act on opposite sides of the loop, so they can turn it."
- Info items: no change (the folded 8.11.2 parts, citation wording, choice positions and lengths are acceptable as they stand).

Status set to `reviewed`.
