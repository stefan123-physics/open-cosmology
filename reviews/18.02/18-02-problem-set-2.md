---
page: content/year-1/18.02/18-02-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps2/ (read: PDF text and rendered page image, underlines visible)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read: pdftotext per page, printed footers checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week3/ (read: pdftotext per page, printed footers checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vectors_matrices/ (read: OCR text, poor quality but exercise numbers and stars legible)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vectr_mtrics_sol/ (read: OCR text, checked for 1I-7, 1J-10, 1K-3)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/pages/syllabus/ (read: textbook edition)
verdict: pass-with-notes
---

# Review: Problem Set 2: the distance between two lines, and two gears joined by an elastic band

## Blind solve

### My answers (written before opening the full page)
- p1a: u = B - A = (1,-3,1), w = D - C = (-1,4,-2), n = u x w = (2,1,1). Planes 2x+y+z = 8 (contains (AB)) and 2x+y+z = 6 (contains (CD)). Distance |8-6|/sqrt(6) = 2/sqrt(6) = sqrt(6)/3 = 0.816 (0.81650).
- p1b: P1 = (2+t1, 4-3t1, t1), P2 = (1-t2, 1+4t2, 3-2t2). Conditions 11 t1 + 15 t2 = 11 and 15 t1 + 21 t2 = 17 (determinant 6), so t1 = -4, t2 = 11/3 = 3.667. P1 = (-2,16,-4), P2 = (-8/3, 47/3, -13/3), P2 - P1 = (-2/3,-1/3,-1/3), length sqrt(6)/3 = 0.816.
- p2a: no slip: rim speed 2*1 = 2, so the small gear turns at omega = 2. Large peg (2 sin t, -2 + 2 cos t); small peg (sin 2t, 1 - cos 2t). x(t) = sin t + (1/2) sin 2t, y(t) = cos t - (1/2) cos 2t - 1/2.
- p2b: v(t) = (cos t + cos 2t, -sin t + sin 2t); v(0) = (2, 0); a(t) = (-sin t - 2 sin 2t, -cos t + 2 cos 2t); a(0) = (0, 1).

### Comparison (one line per answer id)
- p1-a-d1: page 8, mine 8. Agree.
- p1-a-d2: page 6, mine 6. Agree.
- p1-a-distance: page 0.816 (tol 0.002), mine 2/sqrt(6) = 0.81650. Agree.
- p1-b-t1: page -4, mine -4. Agree.
- p1-b-t2: page 3.667 (tol 0.002), mine 11/3 = 3.66667. Agree.
- p1-b-distance: page 0.816, mine sqrt(6)/3 = 0.81650. Agree.
- p2-a-x: page sin(t) + sin(2*t)/2, mine identical. Agree.
- p2-a-y: page cos(t) - cos(2*t)/2 - 1/2, mine identical. Agree.
- p2-b-vx: page cos(t) + cos(2*t), mine identical. Agree.
- p2-b-vy: page -sin(t) + sin(2*t), mine identical. Agree.
- p2-b-v0: page 2, mine 2 (v(0) = (2,0)). Agree.
- p2-b-a0: page 1, mine 1 (a(0) = (0,1)). Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Introduction, third paragraph | "With each problem is the day it can be done." | "MIT labels each problem with the day on which its lecture was given." | Optional: "MIT labels each problem with the day from which it can be done (the day of its lecture)". The mapping itself (Friday = Lecture 5, Tuesday = Lecture 6) is correct. |
| 2 | info | Problem 2 statement and 2(a) solution | MIT does not state that the gears touch at the origin, nor the small gear's angular speed | Adds "The two gears touch at the origin" and derives omega = 2 from no slipping | None needed: the centres are 3 apart = 2 + 1, so they touch at (0,0); the derivation (equal rim speeds, 2 x 1 = 1 x omega) follows from MIT's "without slipping at the contact point" and is correct. Both rims move in +x at the contact point, consistent with clockwise / counterclockwise. |
| 3 | info | "More practice" section | "Hand in the underlined problems only; the others are for more practice." (underlined on the sheet: 1H/3abc; 1E/1cde, 2, 6; 1E/3c, 4, 5; 1I/3ab, 5; 1J/2, 4, 6, 9, 10; 1K/3; textbook 12.4/50) | Lists all exercises without saying which MIT asked to hand in | Optional; nothing is scored here, so nothing is wrong. |

## Arithmetic and answer checks
- Recomputed by hand: direction vectors, cross product (2, 1, 1), N.AB = 0, N.CD = 0, d values 8 and 6 (also via B and D), AC = (-1,-3,3), AC.N = -2, BD = (-3,4,0), BD.N = -2, |N| = sqrt 6, distance 0.8165. All correct.
- P1P2 components (-1 - t1 - t2, -3 + 3t1 + 4t2, 3 - t1 - 2t2): correct. The two dot products expand to 11 - 11t1 - 15t2 and -17 + 15t1 + 21t2: correct. Elimination 6t1 = 231 - 255 = -24, 6t2 = 187 - 165 = 22: correct. P1, P2, the segment and the plane checks (8 and 6): correct.
- One-parameter remark: with t1 = t2 = t the conditions become 11 - 26t = 0 and -17 + 36t = 0; 11/26 = 0.423 and 17/36 = 0.472 differ. Correct.
- Problem 2: peg vectors from the angles pi/2 - t and 2t - pi/2 simplify correctly to (2 sin t, 2 cos t) and (sin 2t, -cos 2t). Check at t = pi: Q1 = (0,-4), Q2 = (0,0), midpoint (0,-2): correct. Path: y has maximum 1/4 (at cos t = 1/2) and minimum -2; |x| <= 1.3, so the Plot window [-2.4,2.4] x [-2.4,0.8] holds the whole curve. Just before t = 2pi, x < 0, so "comes back to the origin from the left" is right; caption matches the formulas.
- Velocity, acceleration and the values at 0 are correct; the centripetal check (2 down for the large peg, 4 up for the small one, average (0,1)) is correct.
- Answer boxes: every value/expr equals the solution's result. Tolerances 0.002 on 0.816 and 3.667 accept correctly rounded 3-decimal answers and reject plausible slips (2, 0.333, 0.423 ...). vars t in [0.2, 0.7] keep every formula finite; each listed mistake differs from the answer on that range.
- Mistake hints checked one by one: each is true of its formula (sum instead of half; the same angle t for both gears gives cos t - cos t/2 - 1/2; the small peg starting left gives -sin 2t/2; missing centres give 1/2 at t = 0; the small peg above its centre gives 1 at t = 0; chain-rule and sign slips in v). None gives the result away.
- Hints: none states a final answer; 2(a) hint 2 asks how fast the small gear turns without saying 2.
- calcs/18.02/18-02-problem-set-2.yaml read: entries match the page and use independent routes (rotation-angle formulas, numerical derivatives, three routes to the distance). I did not run calc:test or content:check.
- Each part's solution ends with a check step (a second route, a value at a special time, or a mechanics check): yes, all four parts.

## Coverage and order
- Part B: both problems, parts in MIT's order, MIT's points (6 = 3+3, 6 = 4+2). MIT's warning about independent parameters is kept and labelled as MIT's.
- Part A list compared item by item with MIT's sheet: Lecture 4 1H/3abc, 7; 1E/1abcde, 2, 6. Lecture 5 1E/3abc, 4, 5; 1I/1, 3abd, 5. Lecture 6 1J/1, 2, 3, 4, 5, 6, 9, 10; 1K/3. All match. Seven textbook exercises (12.4/23, 32, 50, 51; 12.5/3, 4, 33) correctly counted and left out; Edwards and Penney, 6th edition, confirmed on the OCW syllabus page. "15 points" matches; "most of them from the Notes" is right (20 Notes items vs 7 textbook).
- Starred exercises: 1E-7 carries a star in the Notes (confirmed); 1I-7 is the cycloid exercise, unstarred, with a solution in MIT's solutions ("OP = OA + AB + BP"). The page's description of both is correct. None of the assigned exercises is starred (1H-3d is starred, but only 3abc are assigned).
- Citations: reading1 "Lectures 4 and 5, pp. 2-4": in the Week 2 summaries Lecture 4 starts on printed p. 2, Lecture 5 on printed p. 3 and runs onto p. 4. Correct. reading2 "Lecture 6, p. 1" (v = dr/dt): on printed p. 1 of the Week 3 summaries. Correct. Part B is on printed p. 1 of the sheet. Correct.
- Lesson claims checked against the lessons: the line form Q(t) = Q0 + t Q0Q1 (parametric-equations), the cycloid built from simpler vectors (same lesson), "perpendicular to the normal means parallel to the plane" (planes-and-linear-systems), velocity component by component (velocity-and-keplers-second-law). The lessons' lecture numbers are 4, 5, 6, so "MIT's lecture numbers are the same as this site's" holds.

## Licensing
- The sheet has no "All rights reserved" or "Courtesy of" notice. Statements are rewritten in the page's own words (only standard terms and MIT's advice, labelled as MIT's). No MIT figure is redrawn; the Plot is generated from the page's own formulas. Notes exercises are linked, not reproduced. No OpenStax, LibreTexts or textbook content.

## Notes
- No em dashes; no `## Summary` with answers.
- Not checked by me: the symbols registry, and runs of content:check / calc:test / test:answers.

COUNTS: errors=0 warnings=0 info=3

## Resolution (2026-11-21, by the page author)

No errors or warnings. Of the info items:
1. Fixed: the introduction now says MIT labels each problem with the day from which it can be done (the day of its lecture).
2. and 3. Left as they are (the additions are correct and marked as ours; Part A is not scored).

Status set to `reviewed`.
