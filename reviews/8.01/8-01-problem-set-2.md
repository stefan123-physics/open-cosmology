---
page: content/year-1/8.01/8-01-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset2/ (read: PDF text and renders of all pages, figures included; resource page licence CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read, pdftotext)
verdict: needs-changes
---

# Review: Problem Set 2: Newton's laws with friction, ropes and springs

## Blind solve

### My answers (written to this file before the full page or calcs file was opened)
- p1 (a): F_max = mu_s*m1*g*(m1 + m2)/m2
- p1 (b): F_max = 0.5*2.2*9.8*7.0/4.8 = 15.72 N
- p2 (a): theta = atan(a/g)
- p2 (b): T = M*sqrt(g^2 + a^2)
- p2 (c): theta = atan((a - g*sin(alpha))/(g*cos(alpha)))  (positive when the bucket trails)
- p2 (d): T = M*sqrt(a^2 - 2*a*g*sin(alpha) + g^2)
- p3 (a): F_total = m*g*sin(theta)
- p3 (b): F_ww = m*g*sin(theta)*cos(theta)
- p4: F = mu*g*(m1 + 3*m2)
- p5 (a): x = d/2
- p5 (b): h_f = h - M*g/(2*(k1 + k2))

### Comparison with the page
- p1-a: page `mu*m1*g*(m1 + m2)/m2`. Same form. Agree.
- p1-b: page 15.7 N (calcs 15.72 N). Agree.
- p2-a: page `atan(a/g)`. Agree.
- p2-b: page `M*sqrt(g^2 + a^2)`. Agree.
- p2-c: page `atan((a - g*sin(alpha))/(g*cos(alpha)))`. Same form, same sign convention. Agree.
- p2-d: page `M*sqrt(g^2 + a^2 - 2*a*g*sin(alpha))`. Same polynomial under the root. Agree.
- p3-a: page `m*g*sin(theta)`. Agree.
- p3-b: page `m*g*sin(theta)*cos(theta)`. Agree.
- p4-f: page `mu*g*(m1 + 3*m2)`. Agree.
- p5-a: page `d/2`. Agree.
- p5-b: page `h - M*g/(2*(k1 + k2))`. Agree.

No disagreement in any final answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 1(a), `<Answer id="p1-a">`, 4th mistake `mu*m1*g*m2/(m1 + m2)` | (no MIT solution) | Hint: "Check a limit: a very heavy lower block hardly moves, so the push can be no larger than the largest friction force. Does your result agree?" | The hint is false of this formula: for m₂ → ∞, m₂/(m₁+m₂) → 1, so this wrong formula also tends to μ_s m₁ g and passes the named check (numbers below). Use the other limit, e.g. "Check a limit: friction easily accelerates a very light lower block, so the largest push should become very large. Your result goes to zero instead." |
| 2 | warning | Frontmatter `courtesy` | Chapter 7 PDF prints "© Peter Dourmashkin 2012"; Chapter 8 PDF prints no copyright line (only its PDF metadata names Dourmashkin as author); both end with OCW's standard footer | "The 8.01SC course notes, Chapters 7 and 8, are © Peter Dourmashkin and published by MIT OpenCourseWare under CC BY-NC-SA 4.0." | Say only what the PDFs show: "The 8.01SC course notes, Chapters 7 and 8, are by Peter Dourmashkin (Chapter 7 marked © Peter Dourmashkin 2012) and are published by MIT OpenCourseWare under CC BY-NC-SA 4.0." The credit itself is allowed: no "All rights reserved", no third-party "Courtesy of" material. |
| 3 | info | Problem 2(a), (b), (c) statements | "Express your answers in terms of the given variables M, g, and a as needed" (M listed in every part) | (a) "in terms of a and g"; (c) "in terms of g, α and a" | Omitting M tells the student that the mass drops out of the angle. Acceptable; MIT's "as needed" wording (e.g. "using any of M, g and a that you need") would keep that a discovery. Optional. |
| 4 | info | Problem 3 statement | MIT does not say the wedge stays at rest; its figure shows the wedge against the wall | "The wedge does not move." | Correct physics: the box's push on the wedge has a horizontal part towards the wall, so the wall holds it (the 3(b) solution explains this). Fine; could be marked as ours, like the remarks in 1(a) and 2(c), for consistency. |
| 5 | info | Problem 2(c) remark "You may take a > g sin α … This remark is ours, not MIT's" | MIT's figure shows the bucket trailing; no condition stated | Remark added and labelled as ours | Correct and fairly labelled. Keep. |
| 6 | info | Problem 1(a) symbolic part | MIT asks for the number only | Symbolic part, labelled as an addition | Fine; 6 + 4 points add to the 10 of the problem. Keep. |
| 7 | info | Frontmatter `covers: [4, 5, 6, 7]` | MIT's Problem Set 2 belongs to Week 2 (Lectures 4 to 7, including 5 Gravity) | covers Lecture 5 although only the weight mg is used | Keep: the Lecture 5 lesson (universal-gravitation) is where F = mg with g = GM_E/R_E² is taught, and MIT assigns the set to the whole week. |

## Arithmetic and answer checks
- `npm run calc:test -- -k 8-01-problem-set-2`: 35 passed. Every `answer:` entry ties to its box; each formula answer is checked by an independent route (numerical solve, other component equation, other axes θ = φ − α for 2(c), power balance for Problem 4). I checked the θ = φ − α route by hand: on the slope the door's downward direction is tilted backwards by α from the true vertical, so the angle from the door is the angle from the vertical minus α. Correct.
- Every number on the page recomputed: 10.78 N, 2.25 m/s², 7.0 kg, 15.72 N, 4.94 N (both ways); 17.0°, 51.2 N, 49.0 N; 1.298, 9.651, 7.7°, 48.7 N; 9.8 N, 0.866, 8.49 N, half the weight at 45°; 12.25 N, 14.7 N; 0.147 m, 0.353 m. All correct.
- Mistake p1-a #4, numerical check (μ_s = 0.5, m₁ = 2.2 kg, g = 9.8 m/s²): m₂ = 10⁶ kg gives correct 10.780 N, mistake 10.780 N (μ_s m₁ g = 10.780 N); m₂ = 10⁻³ kg gives correct 23 727 N, mistake 0.0049 N. So the heavy-lower-block limit named in the hint cannot expose this mistake; the light-lower-block limit does (finding 1).
- All other mistake hints checked and true of their formulas: p1-a `mu*(m1 + m2)*g` is the answer for a push on the lower block; p2-a `asin(a/g)` follows from T = Mg; p2-b `M*g^2/sqrt(g^2 + a^2)` = Mg cos θ, the weight's part along the rope; p2-c `atan(a*cos(alpha)/(g - a*sin(alpha)))` is the angle from the true vertical (a − g = (a cos α, g − a sin α)); p3-b `m*g*cos(theta)^2` = N cos θ and `m*g*sin(theta)^2` = vertical part of the net force on the box; p4 mistakes each miss or double the term named; p5-b `h - M*g*(k1 + k2)/(2*k1*k2)` is two series pairs in parallel. Each listed mistake differs from the answer over the `vars` ranges.
- `vars` ranges: all formulas finite and physical. p2-c and p2-d use a ∈ [5, 8], α ∈ [0.1, 0.4], so a > g sin α (at most 3.9) everywhere, matching the stated remark; the "true vertical" mistake keeps g − a sin α > 0. p5-b has k₁ > k₂ throughout, so the `k1 - k2` mistake stays finite.
- p1-b number box: value 15.7, 1% tolerance, accepts 15.72 and rejects likely wrong numbers (10.78, 7.39, 34.3).
- Solution steps: each solution has "The idea", force and axis steps, the second law, the result and a "Check the result" step with units, limits and a number. All checks correct, including the 2(c) remark on a = g sin α (rope along the door, tension Mg cos α) and the 2(d) free-fall limit (α = 90°, a = g gives T = 0).
- Hints: none gives a final result away. Problem 4 hint 1 states the cord constraint (block 1 moves right at the same speed), a setup fact, not the answer.
- Citations checked against the printed footers of the notes: Eq. (7.3.5) F = ma on p. 7-7; Eq. (7.4.1) third law on p. 7-8; Eq. (8.1.1) F = k|x| on p. 8-3; Eq. (8.3.5) f_k = μ_k N on p. 8-14; Eq. (8.3.7) (f_s)_max = μ_s N on p. 8-15. All correct. Calcs facts cite "Problem 1, p. 1", the printed page of MIT's PDF. The reading's location lists Section 8.5 (Tension in a Rope), which no formula cites; harmless.

## Coverage and order
- All five MIT problems, in MIT's order, with MIT's parts in MIT's order (1: one question, split into a and b; 2: a to d; 3: a, b; 4: one; 5: a, b). Same physics and same given quantities; MIT's numbers in Problem 1 kept.
- Geometry read from MIT's figures (page renders) and compared with the statements: P1 force on the upper block m₁ (correct); P2 θ measured from the back door, rope tied at the top rear of the truck, bucket trailing; in (c) the door is at right angles to the road, the truck faces downhill and a points down the slope (correct); P3 the wedge's upright side against the wall, slope running down away from it (correct); P4 block 2 on block 1, cord from block 2 round a pulley on the right back to block 1 (correct); P5(a) Figure B: spring horizontal, ropes over pulleys at both ends to hanging m/2 blocks (correct); P5(b) k₂ springs to the ceiling, k₁ springs to the floor, pillar under the centre C (correct).
- Statement alone: I solved the whole set from the stripped statements and used the figures only to confirm. The words carry all the geometry needed; a student without the figures can solve every part.
- Points: MIT gives none; the page says its 60 points are its own. They add up (10 + 20 + 10 + 10 + 10).

## Licensing
- MIT's figures are not redrawn; each situation is described in words. Statements are rewritten, not copied (only short standard phrases).
- MIT's problem-set PDF and the course-note chapters carry no "All rights reserved" and no "Courtesy of" notices (checked by grep on the text). The OCW resource page links CC BY-NC-SA 4.0.
- No OpenStax or LibreTexts material.
- The `courtesy` line is allowed but slightly overstates what the Chapter 8 PDF prints (finding 2).

## Notes
- Angle answers typed as `atan(...)` in radians: "How to answer" explains this, and each angle box lists the bare tangent as a mistake with a hint to use atan( ). Fine.
- No em dashes on the page; no `## Summary` with answers.
- Links to the four lessons use the `/courses/8-01/<slug>` form used elsewhere in the course.

COUNTS: errors=1 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

- Finding 1 (error): the hint of the fourth listed mistake of `p1-a` (`mu*m1*g*m2/(m1 + m2)`) now names the light-lower-block limit, which that formula fails: "Check a limit: friction easily accelerates a very light lower block, so the largest push should become very large. Your result goes to zero instead."
- Finding 2 (warning): the `courtesy` line now says only what the PDFs show: the notes are by Peter Dourmashkin, Chapter 7 is marked "© Peter Dourmashkin 2012", and both are published by MIT OpenCourseWare under CC BY-NC-SA 4.0.
- Finding 4 (info): the sentence "The wedge does not move" in the statement of Problem 3 is now marked as our remark, like the additions in Problems 1(a) and 2(c).
- Findings 3, 5, 6 and 7 (info): no change. In Problem 2 the parts keep naming only the quantities their answers use; the reviewer judged this acceptable.
- The calcs file needed no change: no number or formula on the page changed. `content:check` (0 errors), `calc:test -k 8-01-problem-set-2` and `test:answers` pass. `status: reviewed`.
