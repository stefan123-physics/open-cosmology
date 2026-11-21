---
page: content/year-1/18.02/18-02-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps5/ (read: PDF text plus rendered printed page 1)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week5/ (read: PDF, printed pages 1-3 checked one by one)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/partial_diff/ (read: text, groups 2D, 2E, 2I)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/part_diff_sol/ (read: text, solutions present for 2D-1, 2D-2, 2D-3, 2D-8, 2D-9, 2E-7 and group 2I)
verdict: pass-with-notes
---

# Review: Problem Set 5: steepest directions, a linear estimate and a closest point by Lagrange multipliers

## Blind solve

### My answers (written before opening the full page)
- p1a: grad f(1/2,1) = (-1/4, -3/4); max = sqrt(10)/4 = 0.7906, min = -0.7906.
- p1b: max at u = (-1,-3)/sqrt10, theta = 251.6 deg; min at u = (1,3)/sqrt10, theta = 71.6 deg.
- p1c: u = (3,-1)/sqrt10 (theta 341.6 deg) and (-3,1)/sqrt10 (theta 161.6 deg).
- p1d: at (0.51,1.01), h=0.001: Q max ~0.8218 at ~249.5 deg (249 deg on a 1-deg grid), Q min ~-0.8237 at ~69.3 deg (69 deg), zeros at ~159.5 and ~339.3 deg. Exact gradient there (-0.2896, -0.7701), |grad| = 0.8228, angle 249.4 deg. Max along grad, min opposite, zeros tangent to level curve (perpendicular to grad).
- p2a: -(4,1,-1)/sqrt18 = (-4,-1,1)/(3 sqrt2) = (-0.9428, -0.2357, 0.2357).
- p2b: t = 1/18 along (-4,-1,1): (16/9, -19/18, 19/18) = (1.7778, -1.0556, 1.0556); g = 663/324 = 2.0463.
- p3a: 2(x-2) = 2 lam x, 2(y+1) = lam z, 2(z-1) = lam y, x^2 + yz = 2 (equivalently x-2 = lam x, etc.).
- p3b: z=-y: x = 2/(1-lam), y = -2/(2+lam), z = 2/(2+lam); quartic lam^4 + 2 lam^3 - 3 lam^2 - 16 lam - 2 = 0; real roots lam = -0.1283 and 2.3448. lam=-0.1283 -> (1.7725, -1.0686, 1.0686), distance 0.2473; lam=2.3448 -> (-1.4872, -0.4603, 0.4603), distance 3.5698. lam = 2: x = -2, z = y+1, y^2 + y + 2 = 0, discriminant -7: no real points. Within 1/100: x yes (0.0053), y and z no (0.0130).

### Comparison (one line per answer id)
- p1-a-max 0.7906 tol 0.0005: matches (sqrt10/4 = 0.790569).
- p1-a-min -0.7906: matches.
- p1-b-max 251.6 tol 0.05: matches (251.565); rejects 71.6 (the minimum) and 251.5 (a wrong rounding).
- p1-b-min 71.6: matches (71.565).
- p1-c-low 161.6: matches (161.565).
- p1-c-high 341.6: matches (341.565).
- p1-d-max 0.823 tol 0.003: matches (exact 0.8228 and Q max 0.8218 both accepted); rejects 0.7906, the value at (1/2, 1).
- p1-d-theta-max 249.4 tol 1.5: matches (exact 249.39; Q scan 249.49; a 1-degree grid gives 249 or 250, both accepted); rejects 251.6 (the (1/2, 1) angle, 2.2 away) and 69.4.
- p1-d-theta-zero 159.4 tol 1.5: matches (zero of Q at 159.46); rejects 161.6 (2.2 away).
- p1-d-geometry choice 1: correct.
- p2-a choice 2, (-4,-1,1)/sqrt18: matches.
- p2-b-x 1.7778, p2-b-y -1.0556, p2-b-z 1.0556, p2-b-g 2.0463: all match.
- p3-a choice 1: matches my system.
- p3-b-x 2/(1-lam) and p3-b-y -2/(2+lam): match. Each mistake hint is true of its formula (2/(1+lam) solves x-2 = -lam x; 2/(1-2lam) solves x-2 = 2 lam x; 2/(2+lam) is z; -2/(2-lam) solves 2(y+1) = lam y). vars lam in [-0.6, 0.3] avoids the poles lam = 1 and -2 and contains the root -0.1283.
- p3-b-coefficient -16: matches my quartic.
- p3-b-lambda -0.1283 tol 0.0002: matches (-0.128335).
- p3-b-px 1.7725, p3-b-py -1.0686, p3-b-pz 1.0686 tol 0.0002: match (1.772523, -1.068568, 1.068568).
- p3-b-within choice 1 "only x": matches (differences 0.0053 and 0.0130).
- p3-b-case2 choice 2 "no point at all": matches (y^2 + y + 2 = 0, discriminant -7).

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(b) solution, step "Check the result", last sentence | (not in MIT) | "The distance 0.2473 is a little more than the 1/sqrt18 = 0.2357 of the linear estimate, as it must be: the estimated point of Problem 2(b) has g = 2.0463, so it had not yet reached the surface." | The reason only shows that the surface lies beyond the estimate along that one line; it does not prove that no point of the surface is nearer than 0.2357 in another direction, so "as it must be" is not justified. Replace with: "The distance 0.2473 is a little more than the 1/sqrt18 = 0.2357 of the linear estimate. That fits: along the line of Problem 2(b) the estimated point, with g = 2.0463, had not yet reached the surface." |
| 2 | info | Problem 3(b) statement and solution, case lambda = 2 | "check that the other case lambda = 2 yields solutions (x, y, z) that are further away" | MIT's claim does not hold: the case gives no real point | Verified: with lambda = 2, x = -2, z = y + 1, constraint y^2 + y + 2 = 0, discriminant -7. This is with grad f = lambda grad g, the only convention in which adding the equations gives "lambda = 2" (the other convention gives 1/2), so it is MIT's slip, not a convention difference. The page is right and words it fairly. No change. |
| 3 | info | Introduction, lecture numbering | Sheet: "Lecture 13. Thu Oct. 4 Gradient...", "Lecture 14. Fri Oct. 5 Lagrange multipliers" | Site Lecture 12 = gradient, 13 = Lagrange | Offset verified: the Week 5 lecture summaries head the same dates "Lecture 12. Thu, Oct 4" and "Lecture 13. Fri, Oct 5", and _course.json has 12 "Gradient", 13 "Lagrange Multipliers". The stated reason ("counts the day of the first exam") is plausible but I did not check it against MIT's calendar (uncertain). |
| 4 | info | Last section, Part A list | Underlined items are the ones to hand in | Lists every item without marking which were handed in | Optional; Part A is not scored here. The list itself matches MIT exactly (2D/1abe, 2b, 3ac, 8, 9; 2E/7; 2I/1, 3), and MIT's solutions exist for all of them. |
| 5 | info | Problem 1(d) boxes | Applet at any point near (1/2, 1), with the point recorded | Boxes fixed to (0.51, 1.01) | A reader who uses the applet at another point (e.g. exactly (1/2, 1)) is marked wrong by the angle boxes; the box labels name (0.51, 1.01), so this is clear enough. No change needed. |

## Arithmetic and answer checks
- Every number on the page recomputed in Python: gradient (-1/4, -3/4), |grad f| = 0.7906, angles 71.57, 251.57, 161.57, 341.57, unit vector (0.3162, 0.9487), cos/sin 251.57 = -0.316/-0.949; f(0.51, 1.01) = 0.3647 and all eleven Q values of the table (-0.2911, -0.8237, -0.7706, -0.0066, 0.0077, 0.2881, 0.8218, 0.8218, 0.7696, 0.0046, -0.0098) exact to 4 dp; gradient at (0.51, 1.01) (-0.2896, -0.7701), length 0.8228, angle 249.4; "agrees to within about 0.001" and "about 2 degrees smaller" correct; |grad g| = sqrt18 = 4.243; point (16/9, -19/18, 19/18), g = 663/324 = 2.0463, g = 3 - 18t + 15t^2 and 15/324 = 0.0463; quartic and its roots -0.1283, 2.3448; both points and distances 0.2473, 3.5698; check values 3.1418, 1.1419, 1.9999, gradients (-0.4550, -0.1372, 0.1372) and (3.5450, 1.0686, -1.0686), ratios -0.1283 and -0.1284 (page "-0.128"). All correct.
- Tolerances: angle boxes (0.05) accept 251.6, 251.57, 251.565 and reject neighbouring wrong roundings; the 1(d) tolerances (0.003, 1.5 degrees) are loose, but still reject the values at (1/2, 1) (0.7906; 251.6 and 161.6 are 2.2 degrees away) and the opposite-direction angle. 3(b) number boxes (0.0002) accept 4-dp answers.
- Every solution ends with a check (two simple directions; cos/sin and dot product; perpendicularity; Q against the gradient; g along the line exactly; lambda nonzero; point on the surface and parallel gradients).
- The existence argument in 3(b) ("points far from the origin are far from P0", grad g = 0 only at the origin, which is not on the surface) is correct.
- Hints: none gives a result away.
- Calcs file: every box has an entry with an independent route (numerical derivatives, root of the unreduced constraint, direct minimisation over z). I did not run calc:test, but every expected value agrees with my own computation.

## Coverage and order
- Part B Problems 1-3 with parts a-d, a-b, a-b, in MIT's order and with MIT's points (2+1+1+4, 2+3, 2+4 = 19). Part A listed and linked, not scored (by design); textbook reading left out (by design, stated).
- 1(d): the applet is replaced by an own difference-quotient experiment, clearly labelled as ours, with the applet still offered; the geometric relationship is asked as MIT asks it.
- Formula citations: "Part B, Problem 1, p. 1", "Problem 2, p. 1" and "Problem 3(b), p. 2" match the printed page numbers of MIT's sheet. Reading citations "Lecture 12, p. 2" (dw/ds = grad w . u = |grad w| cos theta) and "Lecture 13, p. 2" (grad f = lambda grad g) match the printed footers of the Week 5 summaries (PDF page 3 = printed page 2). The frontmatter location "Lecture 12, pp. 1-2, and Lecture 13, pp. 2-3" is right.

## Licensing
- MIT's sheet and the summaries carry no "All rights reserved" or "Courtesy of" notice. No figures. Statements are reworded, not copied; MIT's hint and suggestion are paraphrased and attributed. No OpenStax or LibreTexts. The textbook is not used.

## Notes
- No `## Summary` with answers; no em dashes (grep: 0).
- I did not run content:check (symbols, speech) on the worktree; not verified here.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

1. Warning fixed: the last sentence of the check in Problem 3(b) now reads "The distance 0.2473 is a little more than the 1/√18 = 0.2357 of the linear estimate. That fits: along the line of Problem 2(b) the estimated point, with g = 2.0463, had not yet reached the surface."
2. Info items need no change.

Status set to `reviewed`.
