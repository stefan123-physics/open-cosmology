---
page: content/year-2/8.033/8-033-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps1/ (read: PDF, 2 pages, pdftotext plus page-by-page check; one image on p. 1, no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture2_symme1/ (read: slides 10-16 checked as images and against the reviewed lesson)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture3_symme2/ (read: slide 13 checked as image)
  - Resnick, Introduction to Special Relativity, Ch. 1 problem 7 (not read: not used by the site; Problem 3's reconstruction is checked only against MIT's one-line pointer)
verdict: pass-with-notes
---

# Review: Problem Set 1: Galilean relativity and the speed of light

## Blind solve

### My answers (written before opening the full page)
- p1a: the 22 min of summed excesses is the extra light-travel time from A to D: light crosses the diameter of Earth's orbit, 2 AU = 3.0e11 m.
- p1b: c = 3.0e11 / 1320 s = 2.27e8 m/s.
- p2a: omega^2 R = (2 pi/86400)^2 * 6.4e6 = 3.38e-2 m/s^2.
- p2b: (2 pi/3.156e7)^2 * 1.5e11 = 5.95e-3 m/s^2.
- p2c: v^2/R = (3e5)^2/3.09e20 = 2.91e-10 m/s^2.
- p2d: r_E = d/(1+80) = 4.69e6 m; omega = 2 pi/(27.3 d); a = 3.33e-5 m/s^2 (3.37e-5 with d/80; G M_moon/d^2 gives 3.4e-5).
- p3a: x' = x - vx t, y' = y - vy t, z' = z - vz t, t' = t.
- p3b: matrix [[1,0,0,-vx],[0,1,0,-vy],[0,0,1,-vz],[0,0,0,1]]; entry (2,4) = -vy.
- p4a: P' = sum m(u - v) = P - (m1+m2) v, same before and after, so conserved.
- p4b: Delta P' = Delta P - v(M1+M2-m1-m2) = v(m1+m2-M1-M2); zero for v != 0 only if mass conserved.
- p5a: K' = K - vP + M v^2/2; Delta K' = Delta K - v Delta P = Delta K (momentum conserved, masses fixed).
- p5b: Yes: energy conservation holds in every frame and the energy converted to internal forms is frame-independent, so whether KE is conserved is frame-independent (momentum conservation needed as well).
- p5c: 3 J lost in both frames (train: 16.5 J before, 13.5 J after).
- p6a: W_T = F (a t^2/2) = m a^2 t^2/2; W_G = F (v t + a t^2/2) = m a^2 t^2/2 + m v a t.
- p6b: Delta K_T = m (a t)^2/2; Delta K_G = m(v+at)^2/2 - m v^2/2 = same expressions.
- p7a: y = h - g x^2/(2 v^2); x_floor = v sqrt(2h/g).
- p7b: both frames: F = -mg y-hat, a = -g y-hat; only the initial velocity differs (0 vs v x-hat), so the same law gives a line vs a parabola.
- pa: Delta c/c <~ Delta t / t = 2e-4 s / (6000 * 3.156e7 s) = 1.06e-15.

### Comparison (one line per answer id)
- p1-c: page 2.27e8 m/s; mine 2.2727e8. Agree.
- p2-a: page 0.0338 m/s^2; mine 0.033846. Agree.
- p2-b: page 5.95e-3; mine 5.9453e-3. Agree.
- p2-c: page 2.91e-10; mine 2.9126e-10. Agree.
- p2-d: page 3.33e-5; mine 3.3289e-5 (the d/80 variant, 3.371e-5, is 1.2% off and is still accepted by the 2% tolerance). Agree.
- p3-x: page x - vx*t; mine identical. Agree.
- p3-entry: page -vy; mine -vy. Agree.
- p4-dp: page -(M1 + M2 - m1 - m2)*v; mine v(m1+m2-M1-M2); equal at three random points (e.g. 2.14536 both). Agree.
- p5-k: page K - v*P + M*v^2/2; mine identical. Agree.
- p5-loss: page 3 J; mine 3 J. Agree.
- p7-path: page h - g*x^2/(2*v^2); mine identical. Agree.
- p7-range: page v*sqrt(2*h/g); mine identical. Agree.
- pa-limit: page 1.06e-15; mine 1.0562e-15. Agree.
- Self-marked parts (p1a, p4a, p5a second half, p5b, p6a, p6b, p7b): the page's reasoning matches mine in every case.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), `<Answer id="p5-k">` `vars` | (no box on MIT) | `K: [10, 50], P: [2, 8], M: [1, 4], v: [1, 5]` lets K < P^2/(2M) (e.g. K = 10, P = 8, M = 1 needs K >= 32), so test points include impossible states and negative K' (K' = -17.5 J at K=10, P=8, M=1, v=5) | Use `K: [30, 50], P: [1, 4], M: [1, 4], v: [1, 5]`: then K >= P^2/(2M) everywhere (max 8 < 30) and K' >= K - P^2/(2M) > 0 |
| 2 | warning | Problem 7(a), `<Answer id="p7-path">` `vars` | (no box on MIT) | `x: [0.5, 3]` with `h: [1, 2], g: [9, 10], v: [5, 20]` reaches past the landing point (x_floor = 2.24 m at h=1, g=10, v=5), where y = -0.8 m: below the floor | Use `x: [0.2, 2]` (x_floor >= 5*sqrt(2/10) = 2.24 m everywhere), or note the formula is only physical for 0 <= x <= x_floor |
| 3 | info | Problem 7(a) statement | "Sketch the trajectory that an observer at rest on the ground measures." | Also asks for y(x) and x_floor, with two boxes | Fine as the quantitative form of MIT's "reconcile, quantitatively"; optionally add "(our addition)" as done for 5(c) |
| 4 | info | Problem 3 statement | "Resnick, Chapter 1, problem number 7 ... generalize equations 1.1a and 1.1b" | Reconstructs the task as a velocity (vx, vy, vz) with parallel axes and coinciding origins | The reconstruction is the natural reading of MIT's pointer; the Resnick problem was not read, so its exact wording is unverified. The page says openly that it is a reconstruction. No change needed |
| 5 | info | Problem A, second hint | (no hints on MIT) | "For small changes Delta t/t = Delta c/c in size. The travel time t is 6000 years" | Leaves only one division; does not state the number, so acceptable. Could drop the second sentence to keep a step for the reader |
| 6 | info | Problem 1 intro | "In 1675 ... Olaus Roemer" | "In the 1670s ... Ole Rømer" | Correct and fine; 1675/1676 dating differs between sources |

## Arithmetic and answer checks
All recomputed with Python (scratch scripts blind.py and check2.py):
- P1: 3.0e11/1320 = 2.2727e8 m/s; 1 - 2.2727e8/2.9979e8 = 0.242 ("24% too low"); 3e11/c = 1000.7 s ("1001 s", 16.7 min). Correct.
- P2a: 0.033846 m/s^2; equator speed 465.4 m/s; 0.345% of g ("0.35%"); sidereal day raises by 0.548% ("half a percent"). Correct.
- P2b: 5.945e-3; omega r = 29.86 km/s ("29.9"); ratio rotation/orbit 5.69 ("about six"); speed ratio 64.2 ("64"). Correct.
- P2c: 2.913e-10; period 2 pi r/u = 6.47e15 s = 205 Myr; ratio to (b) 2.04e7 ("20 million"). Correct.
- P2d: r_E = 4.691e6 m (inside Earth, 6.4e6 m); 27.3 d = 2.3587e6 s; 3.329e-5; gravity route 9.8 (6.4e6/3.8e8)^2/80 = 3.475e-5, ratio 1.043 ("about 4%"). Order of sizes stated correctly.
- P5c: ground 9 J to 6 J, train 16.5 J to 13.5 J, loss 3 J both; formula check 9 - 30 + 37.5 = 16.5 J. Correct.
- P6: W_T, W_G, Delta K_T, Delta K_G algebra correct; lesson example 0.5 x 30 x 10 = 150 J, 175 - 25 = 150 (lesson line 114: 30 to 40 m/s with m = 0.50 kg gives 175 J; train frame 0 to 10 m/s gives 25 J). Correct.
- P7 Plot: y = 2 - 9.8 x^2/200 from the stated values; fall time sqrt(4/9.8) = 0.639 s; x_floor 6.39 m; within domain [0, 7]. Correct.
- PA: 6000 x 3.156e7 = 1.8936e11 s; 2e-4/1.8936e11 = 1.056e-15; x 3e8 = 3.2e-7 m/s ("a third of a micrometre per second"); GRB comparison 1e17/1.894e11 = 5.3e5 and 100/2e-4 = 5e5 ("half a million" each). Correct.
- Answer boxes: every `value`/`expr` equals its solution's result and its calcs entry. Tolerances (2%, 1% for 5(c)) accept 3-significant-figure answers and the 365-day year, sidereal day and d/80 variants, and reject the factor-2 slip in P1 (radius instead of diameter: 1.14e8). Every listed mistake differs from the answer over its `vars` and each hint is true of its formula (checked: x + vx t, x - vx, x; vy, 0; sign flip and 0 in P4b; four K' variants; three y(x) variants; two x_floor variants).
- Each solution ends with a check (units, a limit, or a number): yes in every part.

## Coverage and order
- Problems 1-7 and A in MIT's order, with MIT's points (3, 6, 6, 9, 9, 6, 6 = 45); Problem 0 (3 points, name/staple) left out and said so; Problem A given 3 optional points, said so.
- Additions declared: Problem 2's extra constants ("MIT's sheet leaves the rest to the student"), Problem 5(c) ("Our own addition"). Problem 7's y(x)/x_floor not declared (info #3).
- MIT's notes kept: the u/v convention (intro paragraph), the Doppler remark in P1, the "returns in special relativity" note in P3(b)'s check, the x-axis restriction in P5.
- Page citations: Problems 1-2 on PDF p. 1, Problems 3-7 and A on p. 2 (checked with pdftotext -f 2 -l 2). All `at=` page numbers correct.
- Slide citations checked: reading1 slide 10 (r' = r - vt, t' = t; the slide also lists "Are we in an inertial frame? (PS1)"), slide 12 (velocity addition), slide 13 (F = ma invariant, initial conditions not), slide 14 (work-energy theorem), slide 15 (basketball, p' = p + mv in the slides' sign); reading2 slide 13 (gamma-ray bursts, Delta c/c ~ Delta t/t <~ 1e-15, 1e17 light-seconds, ~1e2 s). All correct.

## Licensing
- MIT's PDF has one image (Problem 1 orbit drawing) with no rights notice; the page does not redraw it, only describes it in words. Fine.
- Statements are rewritten in the page's own words; no MIT sentence is copied beyond short standard phrases and the Problem 6 formula (which is the problem's given result).
- No Resnick or French material used; no OpenStax or LibreTexts.
- Page-scoped symbol meanings (data/symbols.json in the worktree, 80 entries) checked: each fits its use on this page (e.g. r covers both the circle radius and Earth's radius in the gravity check; M_1, M_2 note MIT's primes). No em dashes; no `## Summary`.

## Notes
- Problem 1 solution's d_n (distance at the arrival of the light) makes t_n + d_n/c exact, not just first order; the telescoping to 2R is correct and independent of D_J.
- Problem 5(b): the argument (internal energy is frame-independent; energy and momentum conservation together) is sound and links back to Problem 4.
- Claims about the lessons (slide numbers, the worked example 25 J / 175 J, the gamma-ray-burst limit) match the reviewed lessons symmetry-galilean-invariance and speed-of-light-michelson-morley.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-21, by the page author)

- Warning 1 fixed: `p5-k` vars are now `K: [30, 50], P: [1, 4], M: [1, 4], v: [1, 5]`, so K ≥ P²/(2M) everywhere; the calcs samples were moved inside the new ranges.
- Warning 2 fixed: `p7-path` vars now use `x: [0.2, 2]`, before the landing point for every h, g, v in range; calcs samples moved inside it.
- Info (Problem 7(a)): the statement now says the equation and the distance are our addition.
- Other info notes: no change.

Status set to `reviewed`.
