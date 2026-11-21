---
page: content/year-1/8.01/8-01-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset1_new/ (read, as pdftotext provided by the run: 5 printed pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read, as pdftotext provided by the run)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter5/ (read, as pdftotext provided by the run)
verdict: pass-with-notes
---

# Review: Problem Set 1: motion in one and two dimensions

Blind review in two passes (docs/PROBLEM-SETS-DESIGN.md §8). I wrote the blind solve below from the stripped statements and MIT's text only. I opened the full page and its calcs file afterwards.

## Blind solve

### My answers (written before opening the full page)
- p1a, 0 < t < t1: v_c = v0, x_c = v0 t. Braking, t1 < t < t2: v_c = v0 − c(t−t1)²/2, x_c = v0 t − c(t−t1)³/6; t2 = t1 + √(2v0/c).
- p1b: t2 = 1 + √(24/6) = 3 s; x_c(t2) = 36 − 8 = 28 m; v_b = (28 + 17)/3 = 15 m/s.
- p2a: trapezoid. Straight rise from 0 to aT on [0, T], level at aT on [T, 5T], straight fall to 0 on [5T, 6T].
- p2b: area = ½aT² + 4aT² + ½aT² = 5aT² = h, so a = h/(5T²).
- p3: v_r = At − Bt²/2, which is zero again at t* = 2A/B; y_r(t*) = 2A³/(3B²); stone at h − g t*²/2 = h − 2gA²/B²; h = 2A³/(3B²) + 2gA²/B².
- p4: flight time 2v0 sinθ/g, range R = 2v0² sinθ cosθ/g; the runner's position d + Bt³/6 = R gives B = 3g²(2v0² sinθ cosθ − g d)/(4 v0³ sin³θ).
- p5: the two flight times s and s + 4.0 s are both roots of v0 s − g s²/2 = h, so (Δs)² = (2v0/g)² − 8h/g and v0 = √(4g² + 2gh) = 21.978 m/s. The collision is at t = v0/g + 2 s = 4.2404 s after the first throw (0.2404 s after the second).

### Comparison (one line per answer id)
- p1-a-v: the page has `v0 - c*(t - t1)^2/2`, identical to mine. Agree.
- p1-a-x: the page has `v0*t - c*(t - t1)^3/6`, identical to mine. Agree.
- p1-b: page 15 m/s; mine 15 m/s. Agree.
- p2 (a), self-marked sketch: the page's trapezium (a Plot of v/(aT) against t/T) is the same as mine. Agree.
- p2-b: the page has `h/(5*T^2)`, identical. Agree.
- p3-h: the page has `2*A^2*(A + 3*g)/(3*B^2)`. Mine is 2A³/(3B²) + 2gA²/B², which factors to 2A²(A + 3g)/(3B²). Agree. Numerical check: A = 30, B = 6, g = 9.81 gives 990.5 m both ways.
- p4-b: the page has `3*g^2*(v0^2*sin(2*th) - g*d)/(4*v0^3*sin(th)^3)`. Mine has 2 sinθ cosθ, which equals sin 2θ. Agree, identical after the double-angle identity. I also reproduced the page's own example (v0 = 12 m/s, θ = 60°, d = 8 m gives B = 2.972 m/s³).
- p5-a: page 4.240 s; mine 4.2404 s. Agree. The page's closed form t_c = ½(t1 + √(t1² + 8h/g)) equals my v0/g + t1/2 with v0 = ½g√(t1² + 8h/g) = √(g²t1²/4 + 2gh), which is my √(4g² + 2gh) at t1 = 4 s.
- p5-b: page 21.98 m/s; mine 21.978 m/s. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 4 statement | The person "runs with a time-varying acceleration ... Bt" as soon as the ball is thrown, and stands at distance d (figure). Starting from rest and running in the direction of the throw are implied but not stated. | States both explicitly ("from rest", and the x-axis "in the direction of the throw"). | Fine as the natural reading of MIT's statement and figure. Optional: add "(as MIT's figure implies)" so readers know it is not an extra condition. |
| 2 | info | Problem 1(a) statement | Asks for v_c(t) and x_c(t) for the whole motion. | Asks for both stages, but the boxes take only the braking stage. The first stage is in the solution. | None needed: the statement says so clearly. |
| 3 | info | Introduction and Problem 1 | MIT's course notes, Example 4.6 of Chapter 4 (pp. 24–25), work the same car and bicycle with the same numbers (12 m/s, 1 s, 6 m/s³, 17 m). | Says so in the introduction. The solution is in the page's own words: it goes stage by stage, uses c > 0 where the notes use b < 0, and takes a shorter route to 36 − 8 = 28 m. | None. |
| 4 | info | "How to answer" and points | MIT gives no points. | Uses its own points, 100 in total (20, 15, 20, 25, 20; parts 12 + 8, 5 + 10, 10 + 10), and says so. | None. |

## Arithmetic and answer checks
- I recomputed every number by hand and in Python, and all are correct:
  - Problem 1: t2 = 3 s, x_c(t2) = 28 m, 45 m / 3 s = 15 m/s, braking distance 16 m.
  - Problem 2 example: 1 m/s², 2 m/s, 12 s.
  - Problem 3 example: t_m = 10 s, 500 m, 490.5 m, h = 990.5 m.
  - Problem 4 example: t_f = 2.119 s, R = 12.71 m, R − d = 4.71 m, B = 2.972 m/s³, runner's speed 6.67 m/s.
  - Problem 5: 8h/g = 4.077 s², √20.077 = 4.4808 s, t_c = 4.2404 s, v0 = 21.978 m/s, v0/g = 2.2404 s, v0²/2g = 24.62 m, fall in 2.000 s = 19.62 m, whole flight 4.481 s.
- Calcs tests for this file (pytest -k "8-01"): 34 passed, one per calcs entry. With `solutions: own` there is no MIT solution to compare with, so the calcs file checks every formula answer by an independent route (numerical integration or a numerical root).
- I checked every solution step. Each solution ends with a check: units, continuity at t1, differentiating back, the limits g = 0, d = R and h = 0, or numbers. The Problem 5(a) algebra is correct: y1 − y2 = 0 gives v0 = g(t_c − t1/2), and then t_c² − t1 t_c − 2h/g = 0.
- Answer boxes:
  - p1-a-v and p1-a-x: vars v0 ∈ [10, 20], c ∈ [1, 3], t ∈ [2, 3], t1 ∈ [0.5, 1.5]. The smallest t2 is 0.5 + √(20/3) = 3.08 s, which is more than 3 s, so every sample lies in the braking stage (physical). I checked each mistake for velocity:
    - v0 − c(t−t1)t: a(t) times t.
    - v0 − c(t−t1)²: a(t) times (t − t1).
    - v0 − ct²/2 + c t1 t: the integral taken from 0. It gives v0 + c t1²/2 at t1, as the hint says.
    - v0 + c(t−t1)²/2: the sign error.
    - −c(t−t1)²/2: only the change since t1.
  - For position I checked: v0 t1 missing, /3, /2, and the sign error. Every hint is true of its formula.
  - p1-b: 15 m/s with 1% tolerance, which suits two significant figures.
  - p2-b: vars h ∈ [10, 30], T ∈ [1, 3]. Mistakes checked:
    - h/(18T²): a(6T)²/2.
    - h/(4T²): the level part only.
    - h/(6T²): rectangles under the slopes.
    - h/(9T²/2): only one triangle.
    - 2h/T²: the first stage only.
    All hints are true.
  - p3-h: vars A ∈ [5, 30], B ∈ [1, 6], g ∈ [9, 10]; the formula is finite throughout. Mistakes checked:
    - 2A³/(3B²): the rocket's top height.
    - 2gA²/B²: the stone's fall.
    - A²(2A + 3g)/(6B²), verified: a hit at t = A/B, with the rocket at A³/(3B²) and the stone having fallen gA²/(2B²).
    - A − 3g: the sign error.
    All hints are true.
  - p4-b: vars v0 ∈ [20, 30], θ ∈ [0.5, 1.0], g ∈ [9, 10], d ∈ [1, 10]. The smallest range is about 400·sin(1)/10 = 33.7 m, more than 10 m, so B > 0 everywhere (physical). Mistakes verified:
    - d = 0 gives 3g² cosθ/(2v0 sin²θ).
    - +gd: the sign of d.
    - x = d + ½Bt² gives g(v0² sin2θ − gd)/(2v0² sin²θ). Its units are those of an acceleration, as the hint says.
    - /8: the ½ in v dropped, so x = Bt³/3.
    - g²/4: the ⅓ dropped, so x = Bt³/2.
    - 6g²/(v0³ sin³θ): half the flight time, with R kept.
    All hints are true.
  - p5-a: 4.240 s with 0.05% tolerance (±0.0021 s) accepts 4.239 to 4.242, which suits four significant figures.
  - p5-b: 21.98 m/s with 0.05% tolerance (±0.011) also accepts 21.97, the value the rounded 2.240 s gives. So the solution's warning about the last figure does no harm.
- No hint gives a result away.

## Coverage and order
- Five problems in MIT's order, with the parts in MIT's order. The physics and the given numbers are the same: 17 m, 12 m/s, 1 s and 6 m/s³; 5.0 m, 4.0 s and 9.81 m/s². The answers ask for four and two significant figures, as MIT does. The statements are rewritten in the page's own words.
- `covers: [1, 2, 3]` matches the three prerequisite lessons (lectures 1, 2 and 3).

## Licensing
- MIT's problem set and the two course-note chapters carry no "All rights reserved" or "Courtesy of" notice (grep on the three texts). MIT's figures for Problems 3 and 4 are not redrawn. The only graph (Problem 2) is generated from a formula.
- No OpenStax or LibreTexts material. No em dashes (0 found). No `## Summary` that gives away answers.

## Notes
- Citations, checked against the course-notes text:
  - Eqs. (4.4.2) v = v0 + at and (4.4.9) x = x0 + v0t + ½at² are printed in Section 4.5 "Constant Acceleration". The notes number these equations 4.4.x even though they sit in Section 4.5, so "Sec. 4.5, Eqs. (4.4.2) and (4.4.9)" is right as printed.
  - Eqs. (4.5.19) and (4.5.21) are in Section 4.6 "One Dimensional Kinematics and Integration". They state v(t) − v(ti) = ∫a dt and x(t) = x(ti) + ∫v dt. The page rearranges the first; the content is the same.
  - Eqs. (5.1.5), (5.1.6) and (5.1.16) are in Section 5.2 "Projectile Motion": v_x,0 = v0 cosθ0, v_y,0 = v0 sinθ0, and r(t) with a_y.
  - `at="Problem 1, p. 1"` and `at="Problem 3, p. 3"` match MIT's printed pages.
- Example 4.6 of Chapter 4 (pp. 24–25 of the notes) is indeed the same problem with the same numbers, as the writer says. Note that the notes number two different examples "4.6".
- Wording in the Problem 5(a) check: "which is right for cans thrown from and caught at the same point". Nobody catches the cans in this problem. Suggested: "which is right: a can thrown up comes back to the point of the throw after 2v0/g, and here that time equals t1" (info).
- The Problem 5 boxes list no mistakes. Optional: add `{ value: 0.2404, hint: "That is the time after the second throw. The question asks for the time after the first." }` to p5-a (info).
- `npm run content:check`: 0 errors. The only warning for this page is the missing review file.

COUNTS: errors=0 warnings=0 info=6

## Resolution (2026-11-21, by the page author)
- Info 1: the Problem 5(a) check now says a can thrown up comes back to the point of the throw after 2v₀/g, which here equals t₁.
- Info 2: not done; number boxes have no per-mistake hints in the answer component.
- Info 3: not done; the statement already gives both assumptions plainly.
- No errors or warnings. Status set to reviewed.
