---
page: content/year-4/8.09/8-09-problem-set-2.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset2/ (read: pdftotext and page 2 rendered at 150 dpi)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read, pdftotext per page)
  - Goldstein, Classical Mechanics (not opened, by course rule)
verdict: pass-with-notes
---

# Review: Problem Set 2 (8.09), damped spherical pendulum, bead on a helix, hoop on a cylinder, hanging rope, falling ladder

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind solve below was written into this file (from the stripped statements and MIT's sheet only) before the full page or its calcs file was opened. Worktree commit reviewed: ee8c74d "8.09 Problem Set 2 (draft)".

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | frontmatter `summary` ("hangs in the curve that minimizes its energy, a catenary") and intro paragraph 1 ("its curve is the catenary met in [the brachistochrone and the hanging chain]") | Sheet asks the reader to find "the form of this curve" | Names the curve before Problem 4(b), whose box asks for exactly that curve, y = c cosh((x − x0)/c); the summary is also printed under every "Practise" link | Summary: replace "hangs in the curve that minimizes its energy, a catenary" by "hangs in the curve that minimizes its energy; find that curve and the equations for its constants". Intro: cut to "Problem 4 uses [the calculus of variations](/courses/8-09/calculus-of-variations-review) of the same section." and move the 8.033 link into the closing check of 4(b) ("the catenary met in ...") |
| 2 | warning | frontmatter `summary` ("an angular momentum that decays exponentially") | Sheet only asks for the equations of motion | Gives the form of the answer to box p1b-lz before the reader solves | Replace with "and what friction does to its angular momentum" |
| 3 | warning | Problem 1(b), box statement | (no boxes at MIT) | "The boxes are our additions. In the first ... In the second ..." but the part has a third box, p1b-energy (rate of change of E), which the statement never announces or asks | Add: "In the third, choose the rate at which the energy E = T + V changes." |
| 4 | warning | Intro list of choices (Problem 5 bullet) vs Problem 5(g) statement | 5(g): "the equations of motion in (a) and (d)" | Intro: "we read these as the equations of (b) and (e)"; 5(g) statement: "Solve the equations of motion of parts (c) and (e)" | Make both say the same; "(c) and (e)" fits the hint (it integrates θ̈ = −(3g/2ℓ) cos θ from (c)), so change the intro bullet to "(c) and (e)" |
| 5 | info | Problem 4(a) box | — | The box is a choice on why the length needs no constraint, not a check of f itself; the right choice says rope comes from the heaps "at no cost in energy", which is true of the heaps (height zero) but the span's own energy does change | Optional: "rope can be drawn from or returned to the heaps, whose energy is zero, so the span's length is free" |
| 6 | info | Problem 3 | Pointer to Goldstein Ch. 2 #14 with a coordinate hint | Own problem, marked in the title, intro and statement, set up as the sheet says (ρ, θ, φ; two multipliers; holonomic + semi-holonomic), keeps MIT's 12 points; fits Section 1.5 (it is the notes' particle-on-a-sphere and hoop-on-a-ramp examples, pp. 25–27, combined) | None |
| 7 | info | Problem 4 reading | "rope of infinite length ... pulleys at heights y1, y2 above the earth" | Ends lie in heaps on the ground, stated as "our reading" in the intro and the statement | None: fair, and the solution's tension check (T = σg y_i at each pulley) shows it is the physically consistent reading |

## Arithmetic and answer checks
All checked with my own Python (`.venv/bin/python`, numpy/scipy/sympy); scripts in the scratch folder (blind2.py, check2.py). Every final answer of the page agrees with my blind answer.

- p1a-diss 3πηaℓ²(θ̇² + sin²θ φ̇²): same as mine. Mistakes (6π…, missing sin²θ) differ over the whole vars range; hints true.
- p1b-thdd, p1b-lz Lz0·exp(−6πηa t/m): same as mine. Mistake 3π… rejected (t ≥ 0.5). p1b-energy: −2𝓕 is right (𝓕 quadratic in velocities, Euler's theorem); right choice at index 1, not the longest.
- p2a-zdot, p2a-torque, p2b-lz: identical to mine (sympy factorisation of m a b²(2zż² + z²z̈) gives exactly the page's form; z equation residual 0). Large-z limit m b v0 √D(h) z checked. Mistakes differ everywhere in range (z ∈ [2,4] > h ∈ [0.5,1.5]).
- p3a-roll (R + r)θ̇/r, p3b-thdd g sinθ/(2(R + r)), p3b-friction mg sinθ/2, p3c-normal mg(2cosθ − 1): same as mine. Sign of λ2: by virtual work at the contact point, δW = F[(R + r)δθ − rδφ], so λ2 is the tangential friction force; −½mg sinθ (pointing back) is right.
- p3c-angle 60.0°: exact. p3d-slip 36.9°: brentq 36.8699° (exact cos θ = 0.8); "for any μs the hoop slips before it leaves" true (ratio → ∞ at 60°). Particle comparison 48.19° checked.
- p4b-curve c cosh((x − x0)/c): same as mine. p4c-c 4.55 m: roots of c cosh(2/c) = 5 are 0.789812 and 4.553690. Span energy ½c[d + c sinh(d/c)] checked against a quadrature (19.4320 both); deep 26.266, drop 25.0; min of cosh u/u = 1.50888 at u = 1.19968; largest separation 6.63 m; cosh(2/4.554) = 1.0980. All page figures right.
- p5a-inertia Mℓ²/12; 5(b) equations; p5c-thd2 3g(sinθ0 − sinθ)/ℓ; λ1 = (3Mg/4)cosθ(3sinθ − 2sinθ0); p5d-height (2/3)ℓ sinθ0; p5e-thdd; p5f-floor M(g − (ℓ/2)sinθ θ̇²)/(1 + 3cos²θ): all identical to mine.
- p5e mistake −(3g/2ℓ)cosθ equals the answer only where θ̇² = 3g sinθ/(2ℓ); over the box's vars this is at most 4.24 while θ̇² ≥ 4.84, so the mistake differs everywhere (good choice of range).
- Ladder numbers, ℓ = 3.0 m, θ0 = 60°, g = 9.81: leaves the wall at 35.2644° (page 35.3°), top at 1.732 m (1.73); t_wall = 0.562970 s by quad and by an ODE event (page 0.563); landing t = 0.840346 s by two independent formulations (reduced θ equation, and a multiplier system in (x, θ) with only the floor constraint) and by the quadrature of 1/|θ̇| (page 0.840); θ̇ at landing −2.7907 rad/s (−2.79); first 10° take 0.3685 s (0.37); top end 0.1290 m from the wall at landing (0.13); upright release leaves at 41.81° (41.8).
- Part (f), "never leaves the floor": my own bound (energy, dropping ẋ², gives 3s² − 6ss0 + 4 > 0 for s0 ≤ 1) and the page's sharper bound (≤ 8/3 < 4, ẋ1² = 3gℓs1³/8 kept) both hold; I rechecked the page's θ̇²(θ) after the wall from the energy. Before the wall λ2 = (Mg/4)[(3s − s0)² + cos²θ0] > 0. Numerically the smallest floor push over the whole fall is 0.2041 Mg (page: "never below 0.20 Mg"). Confirmed.
- Tolerances: 1% on all five number boxes; windows 34.95–35.65°, 4.50–4.60 m, 36.53–37.27° accept 3-figure answers and reject the obvious slips (60° vs 48.2°, deep root 0.790 m).
- `npm run calc:test -- -k 8-09-problem-set-2`: 72 passed. `content:check` in the worktree: 0 errors; the only warning for this page is "no review file yet".

## Citations
- Chapter 1 PDF printed page numbers equal PDF page numbers. Eq. (1.71) p. 20 and (1.73), (1.74) p. 21 in Section 1.4; Stokes example (F = 3πηaẏ², friction 6πηaẏ, decay exp(−6πηat/m′)) p. 21, Section 1.4; Section 1.5 starts on p. 22 and (1.78) is on p. 22; (1.88), (1.89) p. 24; (1.91) p. 25. All `at=` values correct.
- Sheet: Problems 1–3 on printed p. 2, 4–5 on p. 3, as the page says. The hint renders as ∫dt z̈/ż = ln(ż) (checked on the rendered page), as the page has it.
- Points: 8, 12, 12, 8, 20 (60) and part points 4+4, 8+4, 3+2+4+3+3+5 match the sheet; the 3+4+3+2 and 3+3+2 splits are marked as ours; 5(g) optional with 4 own points.

## Coverage and order
- All five problems and every MIT part, in MIT's order. Additions (all boxes, Problem 3 entire, 3(d), the numbers of 4 and 5, the plot, 5(g) as optional) are listed in the intro and marked where they appear.
- `covers: [1.4, 1.5]`, `lecture: 1.5` fit the content (dissipation function, Section 1.4; calculus of variations and multipliers, Section 1.5).

## Licensing
- The helix figure ("Image by MIT OpenCourseWare") is described in words, not embedded or redrawn. The ladder plot is generated from formulas. No "rights reserved" material; Goldstein not used; no OpenStax or LibreTexts. Statements are reworded; only short standard phrases match the sheet.

## Notes
- No `## Summary` section, no em dashes, no control characters in the page.
- Hints: none gives a number that alone passes a box; 4(c) hint 2 states the equation 5.0 = c cosh(2.0/c), which still needs solving and a choice of root; acceptable.
- Choice positions vary (1, 2, 0); choice strings have no backslash TeX.

## Blind solve

### My answers (written from the stripped statements and MIT's sheet only)

P1 (theta from downward vertical, v^2 = l^2(thd^2 + sin^2 th phd^2)):
- 1a: F = 3 pi eta a l^2 (thd^2 + sin^2(th) phd^2)
- 1b: thdd = sin th cos th phd^2 - (g/l) sin th - (6 pi eta a/m) thd ;
       phi eq: d/dt(m l^2 sin^2 th phd) = -6 pi eta a l^2 sin^2 th phd, so Lz = Lz0 exp(-6 pi eta a t/m)
P2 (D(z) = 1 + b^2 + a^2 b^2 z^2):
- 2a: zdot = v0 sqrt(D(h)/D(z)); Z_theta = d/dt(m r^2 thd) = m a b^2 v0^2 z D(h) (2 + 2b^2 + a^2 b^2 z^2) / D(z)^2
- 2b: E = (m/2) D(z) zdot^2 = (m/2) v0^2 D(h) const; Lz = m a b^2 z^2 v0 sqrt(D(h)/D(z)); dLz/dz = m a b^2 v0 sqrt(D(h)) z (2D - a^2b^2z^2) D^(-3/2) > 0
P3 (rho, theta from upward vertical, phi in space):
- 3a: L = (m/2)(rhod^2 + rho^2 thd^2) + (m/2) r^2 phd^2 - m g rho cos th; f1 = rho - (R+r) = 0 (holonomic); g2 = (R+r) thd - r phd = 0 (semi-holonomic form, integrable); phd = (R+r) thd / r
- 3b: thdd = g sin th / (2(R+r)); friction |lambda2| = m g sin th / 2
- 3c: lambda1 = m g (2 cos th - 1); leaves at th = 60.0 deg
- 3d: sin th / 2 = mu (2 cos th - 1), mu = 0.5 -> sin th = 0.6, th = 36.87 deg
P4:
- 4a: f = y sqrt(1 + y'^2) (times sigma g); the hanging ends add only constants sigma g (y1^2 + y2^2)/2; length between pulleys is free (no constraint)
- 4b: y = c cosh((x - x0)/c)
- 4c: y1 = c cosh((x1 - x0)/c), y2 = c cosh((x2 - x0)/c); for 5.0 m, 4.0 m apart: 5 = c cosh(2/c), roots c = 0.790 m and c = 4.554 m; shallow root gives lowest point 4.55 m
P5 (I = M l^2/12; f1 = x - (l/2) cos th = 0 (wall), f2 = y - (l/2) sin th = 0 (floor)):
- 5a: I = M l^2/12; L = (M/2)(xd^2 + yd^2) + (M l^2/24) thd^2 - M g y
- 5b: M xdd = lam1; M ydd + M g = lam2; (M l^2/12) thdd = (l/2)(lam1 sin th - lam2 cos th)
- 5c: thd^2 = 3 g (sin th0 - sin th)/l; t = int_th^th0 dth' / sqrt(3g(sin th0 - sin th')/l)
- 5d: lam1 = (3Mg/4) cos th (3 sin th - 2 sin th0) = 0 at sin th = (2/3) sin th0; top height (2/3) l sin th0; for 60 deg: 35.26 deg, t = 0.5630 s
- 5e: xdd = 0; thdd = (3 sin th cos th thd^2 - 6 (g/l) cos th)/(1 + 3 cos^2 th)
- 5f: lam2 = M (g - (l/2) sin th thd^2)/(1 + 3 cos^2 th) > 0, since energy gives thd^2 <= 12 g (s0 - s)/(l(1+3cos^2)) and then 3s^2 - 6 s s0 + 4 > 0 for s0 <= 1. Before the wall: lam2 = Mg(1/4 + 9s^2/4 - 3 s s0/2) >= Mg(1 - s0^2)/4 >= 0.
- 5g: lands at t = 0.8403 s (thd at landing -2.791 rad/s)

Python (.venv, scipy quad and solve_ivp at rtol 1e-12; sympy for P2):
- P2: sympy residual of the z equation with zdot = v0 sqrt(D(h)/D(z)) is 0; Z_theta factorised as above.
- P3d: brentq gives 36.8699 deg (exact: sin = 0.6, cos = 0.8).
- P4: roots of c cosh(2/c) = 5: 0.789812, 4.553690.
- P5: leave angle 35.2644 deg; t_wall by quad 0.562970 s, by ODE event 0.562970 s; t_flat 0.840346 s by two independent formulations (reduced theta equation; a multiplier system in (x, theta) with only the floor constraint). Minimum lam2/M after the wall 2.00 m/s^2 > 0.

### Comparison with the page (one line per answer id)
- p1a-diss: agrees.
- p1b-thdd: agrees.
- p1b-lz: agrees.
- p1b-energy: agrees (−2𝓕).
- p2a-zdot: agrees.
- p2a-torque: agrees (same factorised form).
- p2b-lz: agrees.
- p3a-roll: agrees.
- p3b-thdd: agrees.
- p3b-friction: agrees.
- p3c-normal: agrees.
- p3c-angle: agrees (60.0°).
- p3d-slip: agrees (36.9°).
- p4a-free: agrees (choice 2: length is free because rope comes from the heaps).
- p4b-curve: agrees.
- p4c-c: agrees (4.55 m, shallow root).
- p5a-inertia: agrees.
- p5b-lambda1: agrees (horizontal push of the wall).
- p5c-thd2: agrees.
- p5d-height: agrees.
- p5d-angle: agrees (35.3°).
- p5d-time: agrees (0.563 s).
- p5e-thdd: agrees.
- p5f-floor: agrees.
- p5g-land: agrees (0.840 s).

No disagreements, so no error under the `solutions: own` rule.

COUNTS: errors=0 warnings=4 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the summary now says the rope "hangs in the curve that minimizes its energy; find that curve and the equations for its constants". The introduction no longer names the catenary, and the link to the 8.033 lesson on the brachistochrone and the hanging chain moved into the closing check of the 4(b) solution.
- Warning 2: the summary now says "and what friction does to its angular momentum".
- Warning 3: the Problem 1(b) statement now names the third box ("choose the rate at which the energy E = T + V changes").
- Warning 4: the introduction now reads MIT's "(a) and (d)" in 5(g) as the equations of (c) and (e), as the 5(g) statement and hint do.
- Info (4(a) wording): the right choice now reads "rope can be drawn from or returned to the heaps, whose energy is zero, so the span's length is free".
- Other infos: no change.
- `status: reviewed`.
