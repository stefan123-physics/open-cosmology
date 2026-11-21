---
page: content/year-1/8.01/8-01-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset3/ (read: pdftotext text and page renders of all 7 pages, figures inspected)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read, pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 3: circular motion

The blind solve came first. I worked from the stripped statements, MIT's text and MIT's figures only, and wrote the answers below to this file before I opened the full page or the calcs file.

## Blind solve

### My answers (written before opening the full page)
- p1.a: N along the radius to the centre; vertical N cos θ = mg, horizontal N sin θ = m (R sin θ) ω² → ω = sqrt(g/(R cos θ)), 0 < θ < π/2.
- p1.b: cos θ = g/(R ω²) ≤ 1 needs ω ≥ sqrt(g/R) → ω₀ = sqrt(g/R).
- p2.a: friction up the slope at f = μ_s N: v_min = sqrt(R g (tan β − μ_s)/(1 + μ_s tan β)).
- p2.b: friction down the slope: v_max = sqrt(R g (tan β + μ_s)/(1 − μ_s tan β)).
- p3.a: T cos β = mg, T sin β = m l sin β ω² → ω = sqrt(g/(l cos β)).
- p3.b: v = ω l sin β (horizontal), fall time sqrt(2h/g) → d = sin β sqrt(2 h l / cos β) = sqrt(2 h l sin β tan β).
- p4.a: T_B = 2 m₂ d ω².
- p4.b: T_A = (m₁ + 2 m₂) d ω².
- p5.a: v = sqrt(GM/r): B (the lower orbit) is faster.
- p5.b: T = 2π sqrt(r³/(GM)): A (the higher orbit) has the longer period.
- p6.a: a_t = dα, a_r = d α² t² → f_s = m d α sqrt(1 + α² t⁴).
- p6.b: slip when d sqrt(α² + ω⁴) = μ_s g → ω = ((μ_s g/d)² − α²)^(1/4).

### Comparison (one line per answer id)
- p1-a: page `sqrt(g/(R*cos(theta)))` = mine. Same expression. I checked agreement at 20 000 random points inside the box's `vars`: max relative difference 0.
- p1-b: page `sqrt(g/R)` = mine.
- p2-a: page `sqrt(R*g*(sin(beta) - mu*cos(beta))/(cos(beta) + mu*sin(beta)))` = mine `sqrt(Rg(tanβ − μ)/(1 + μ tanβ))`. Dividing top and bottom by cos β turns one into the other; numerical max relative difference 5e-16.
- p2-b: page `sqrt(R*g*(sin(beta) + mu*cos(beta))/(cos(beta) - mu*sin(beta)))` = mine (same check, 4e-16).
- p3-a: page `sqrt(g/(l*cos(beta)))` = mine.
- p3-b: page `sin(beta)*sqrt(2*h*l/cos(beta))` = mine `sqrt(2 h l sinβ tanβ)` (4e-16).
- p4-a: page `2*m2*d*omega^2` = mine.
- p4-b: page `(m1 + 2*m2)*d*omega^2` = mine.
- p5-a: page choice 1 ("B, on the smaller orbit") = mine.
- p5-b: page choice 0 ("A, on the larger orbit") = mine.
- p6-a: page `m*d*alpha*sqrt(1 + alpha^2*t^4)` = mine `m sqrt((dα)² + (dα²t²)²)` (5e-16).
- p6-b: page `((mu*g/d)^2 - alpha^2)^(1/4)` = mine.

No answer differs from mine.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(b), solution, step "The smallest angular speed" | MIT (b) is only about the lower positions ("the only balanced position is at the bottom of the hoop"). | "For a slower spin no angle $\theta > 0$ satisfies both component equations of part (a)." As written this is false. At $\theta = \pi$ (the top of the hoop) both equations hold, with $\sin\theta = 0$ and $N = -mg$. The page's own remark two paragraphs later says the top is a balanced position. | Write "no angle $0 < \theta < 90°$ (no other point of the lower half) satisfies both component equations of part (a)." |
| 2 | info | Problem 2 statement | MIT asks for the whole range $v_\text{min} \le v \le v_\text{max}$ at once and puts no conditions on $\beta$ or $\mu_s$. | Splits the problem into (a) and (b) and adds $\tan\beta > \mu_s$ and $\mu_s\tan\beta < 1$. | None needed. The page says the split and the conditions are its own, and both conditions are right: without the first, $v_\text{min} = 0$; without the second, $v_\text{max}$ has no limit. I checked the slope against MIT's figure (p. 2): the road rises from the side nearer the centre up to the car at the outer edge, as the page says. |
| 3 | info | Problem 1 statement | θ is "with respect to the vertical", and the figure (p. 1) measures it from the downward vertical. | θ is measured from the line straight down. | Matches the figure. The remark about the top of the hoop is right and says it is the page's own: the top is always balanced and always unstable, since $U''(\pi) = -mgR - m\omega^2R^2 < 0$. |
| 4 | info | Problem 3 | "Let g be the gravitational constant"; the ball comes off "just as it passes the x-axis". | A bracket explains MIT's wording. The ball comes loose "as it passes above the x axis", and the solution notes that it lands to the side of the x axis. | Correct. In MIT's figure (p. 3) the ball comes off above the +x axis. Its velocity there is along the tangent (parallel to y), so it lands off the x axis and $d$ is measured along the tangent. |
| 5 | info | Problem 4 | MIT's Problem 4 is almost word for word Example 9.3 of the course notes (statement p. 9-10, solution pp. 9-11 and 9-12). | Says this openly and cites Example 9.3, p. 9-11 (T₂) and pp. 9-11, 9-12 (T₁). | Citations checked: the notes call the outer tension T₂ and the inner one T₁, as the page says. |
| 6 | info | Problem 6, solution of (a) | Notes Eq. (6.3.7) write $a_\theta = r\,d^2\theta/dt^2$. | Same, then "Here $r = d$". But $d$ is also the coin's distance, so $d^2\theta/dt^2$ appears next to $d\alpha$. | Optional: write the tangential part as $r\,\alpha$ or $r\ddot\theta$, so the derivative's $d$ and the distance $d$ are not side by side (content:check does not flag this). |
| 7 | info | Answer p4-a, mistake `4*m2*d*omega^2` | n/a | Hint: "Only omega is squared, not the factor 2 in the radius." | The formula equals $m_2 (2)^2 d\,\omega^2$, so the hint does fit it. But the same formula also comes from $v = 2d\omega$ with $a = v^2/d$ (dividing by the wrong radius). Optional wider hint: "Your result is twice too large. With $r = 2d$, $a = r\omega^2 = 2d\omega^2$: check that you did not square the 2, or divide $v^2$ by $d$ instead of $2d$." |

## Arithmetic and answer checks
- I recomputed every worked number by hand and in Python, and all are correct:
  - 1(a): 9.9 rad/s.
  - 1(b): 7.0 rad/s, cos θ = 0.49, θ = 60.7°.
  - 2: Rg = 588; fractions 0.1459 and 0.8909; v_min = 9.3 m/s; frictionless speed 16.6 m/s; v_max = 22.9 m/s; φ = 16.7°; the tan 8.3° and tan 41.7° routes give 9.3 and 22.9 m/s.
  - 3: ω = 2.82 rad/s, r = 0.860 m, v = 2.43 m/s, t = 0.639 s, d = 1.55 m both ways.
  - 5: 1/2 and 8.
  - 6: μ_s g/d = 26.13 s⁻², ω = 5.10 rad/s against 5.11 for a steady disk, time 2.55 s.
- I checked every solution step. Each part ends with a check (units, a limit or a number), and the limits are right:
  - μ_s → 0 gives √(Rg tan β), and β = 0 gives √(μ_s R g).
  - α → 0 gives √(μ_s g/d), which is notes Eq. (9.3.21); at dα = μ_s g, ω = 0.
  - The whole-system check of 4(b) holds: T_A = m₁dω² + m₂2dω².
- `<Answer>` boxes: each `expr` equals the result its solution reaches. The `vars` ranges keep every formula finite and physical:
  - p1-a, p3-a and p3-b: angles 0.3 to 1.3 rad, below π/2.
  - p2: tan β > μ_s throughout (tan 0.5 = 0.546 > 0.4), and μ_s tan β ≤ 0.34 < 1.
  - p6-b: μ_s g/d ≥ 5.4, above α ≤ 3.
- I tested every listed mistake at 20 000 random points. None comes within the checker's 1e-6 agreement of the answer anywhere. The closest is p6-b `sqrt(mu*g/d)`, at 1.3e-5 at its nearest point, so the checker still tells it apart at its 5 sample points.
- I checked every mistake hint against its formula. Each hint describes a real way to reach that formula, and the test it suggests is true. For example:
  - p1-a `sqrt(g*cos(theta)/R)` does go to 0 at 90°.
  - p2 `sqrt(R*g*cos(beta)*(sin(beta) - mu*cos(beta)))` is exactly what N = mg cos β in the horizontal equation gives.
  - p2 `tan(beta) - mu` is what you get when friction is left out of the vertical equation.
  - p6-b `sqrt((mu*g/d)^2 - alpha^2)` is in 1/s².
  
  The one exception is p4-a `4*m2*d*omega^2`, whose hint names only one of two possible causes (row 7).
- No hint gives the final result away. Hint 2 of p4-a and hint 3 of p6-a come close but still leave the last step to the reader.
- Choice boxes: p5-a (answer 1, B) and p5-b (answer 0, A) are correct. The page is right that MIT's "same mass" condition is not needed, because the satellite's mass cancels.
- Calcs file `calcs/8.01/8-01-problem-set-3.yaml`: every formula answer is checked by a second, independent route (the tangential equation, axes along the road, numerical solves, the centre of mass). `pytest tests/calc -k 8-01-problem-set-3`: 41 passed. `npm run content:check`: 0 errors and no warning for this page.

## Coverage and order
- All six MIT problems are here, in MIT's order, with their parts in MIT's order. Problem 2 is split into two parts, and the page says the split is its own. Nothing is left out. The only additions are checks and remarks, each marked as the page's own.
- The points (10, 14, 12, 8, 6, 10 = 60; the parts add up) are the page's own. The page says MIT gives none, which matches MIT's PDF.

## Licensing
- MIT's PDF has no "All rights reserved" and no "Courtesy of" notice: I checked the text of every page and the page images, and page 7 is only the standard OCW footer. A search of course-note chapters 6, 8 and 9 found no such notice either, so no courtesy line is needed.
- No MIT figure is copied or redrawn: the page describes each situation in words.
- The statements are in the page's own words and share only standard phrases with MIT. Problem 4 openly refers to Example 9.3 of the notes; its solution follows the same steps but in its own wording.
- No OpenStax or LibreTexts material. No em dashes on the page.

## Notes
- I checked every citation against the printed page numbers of the notes, and all are correct:
  - Chapter 9: Eq. (9.1.2) p. 9-2; (9.2.2) p. 9-3; (9.2.4) p. 9-5 (written for the Moon); (9.3.21) p. 9-16; Example 9.3 pp. 9-11 and 9-12.
  - Chapter 6: (6.2.15) p. 5; (6.3.7) p. 6; (6.3.8) p. 7; (6.4.4) and (6.4.7) p. 8.
  - Chapter 8: (8.3.7) p. 8-15.
  
  The notes write Eq. (9.1.2) with $(d\theta/dt)^2$ and the page writes $\omega^2$; it is the same law.
- I checked the page's claims about the lessons:
  - The frictionless banked turn √(rg tan φ) and Kepler's third law are in `newtons-second-law-circular-motion`.
  - The worked example of two masses on a shaft, with numbers, is in `circular-motion-dynamics-examples`.
  - All five linked lesson slugs exist, and `covers: [8, 9, 10, 11]` matches the lecture numbers of the prerequisite lessons.
- There is no `## Summary` section giving the answers away.

COUNTS: errors=0 warnings=1 info=6

## Resolution (2026-11-21, by the page author)

- Row 1 (warning), Problem 1(b): the sentence now reads "no angle 0 < θ < 90° (no other point of the lower half) satisfies both component equations of part (a)", so it no longer contradicts the remark about the top of the hoop.
- Row 6 (info), Problem 6(a): the cited formula is now written as a_θ = rα, a_r = −rω², with a note in its citation that the notes write the time derivatives of θ. The page no longer has a derivative's d next to the distance d; the page's meaning of d in data/symbols.json was shortened to match.
- Row 7 (info), answer p4-a: the hint of the mistake `4*m2*d*omega^2` now says the result is twice too large and names both causes (squaring the 2, or dividing v² by d instead of 2d).
- Rows 2 to 5 (info): no change needed.
- No number or answer changed, so the calcs file is unchanged. content:check 0 errors, calc:test -k 8-01-problem-set-3 and test:answers pass. Status set to reviewed.
