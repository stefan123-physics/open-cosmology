---
page: content/year-1/8.01/8-01-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset6/ (read: pdftotext and page renders pp. 1-6, figures inspected)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter11/ (read: pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter12/ (read: pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 6: relative velocity, recoil and the flow of mass

The blind solve was done first, from the stripped statements and MIT's PDF only. The answers below were written to this file before the full page and its calcs file were opened.

## Blind solve

### My answers (written before opening the full page)
- p1a: speed sqrt(0.5^2 + 1.0^2) = 1.118 m/s; theta = atan(1.0/0.5) = 63.43 deg from straight across toward downstream.
- p1b: 1600 m downstream (1.0 m/s x 1600 s).
- p1c: 800/0.5 = 1600 s.
- p2a: vf1 = v1 + m u/(m1 + m) (m1 without ball, u relative to astronaut 1 after the throw).
- p2b: common speed V = [(m1+m)v1 + m2 v2]/(m1+m2+m); u = (m1+m) m2 (v2 - v1) / [m (m1+m2+m)].
- p3a: 3000 ln(2.81/0.35) = 6249.0 m/s.
- p3b: 3000 ln(2.81/0.78) = 3844.9 m/s.
- p3c: 3000 ln(6.4/2.1) = 3343.1 m/s (tank released with no push).
- p3d: 7188.0 m/s.
- p3e: two-stage is faster (7188 > 6249) because the dead mass of the stage-one tank is not accelerated during stage two.
- p4a: water at rest: d(m v)/dt = m g -> dv/dt = g - k v^2.
- p4b: vT = sqrt(g/k).
- p5a: dv/dt = -b v/(m0 + b t) (Delta v = -b v Delta t/(m0 + b t) to first order).
- p5b: v = m0 v0/(m0 + b t).

### Comparison (one line per answer id)
- p1-a-speed: page 1.12 m/s; mine 1.118 m/s. Agree (0.2%, inside the 1% box).
- p1-a-angle: page 63.4 deg; mine 63.43 deg, same convention (from straight across, turning toward downstream). This matches MIT's figure, where theta is drawn from the dashed across-line to a velocity tilted toward the flow arrow. Agree.
- p1-b: page 1600 m; mine 1600 m. Agree.
- p1-c: page 1600 s; mine 1600 s. Agree.
- p2-a: page `v1 + m*u/(m1 + m)`; mine identical. Agree.
- p2-b: page `m2*(m1 + m)*(v2 - v1)/(m*(m1 + m2 + m))`; mine identical. Agree. Numerical check: m1 = 60, m = 4, m2 = 76, v1 = 1, v2 = 2 gives u = 8.686 m/s, and following the catch on its own gives 1.543 m/s for both astronauts.
- p3-a: page 6249 m/s; mine 6249.0. Agree.
- p3-b: page 3845 m/s; mine 3844.9. Agree.
- p3-c: page 3343 m/s; mine 3343.1. Agree.
- p3-d: page 7188 m/s; mine 7188.0. Agree.
- p3-e: page choice 1 (the two-stage rocket is faster because it no longer carries the empty stage-one tank); mine the same. Agree.
- p4-a: page `g - k*v^2`; mine g - k v_r^2. Agree.
- p4-b: page `sqrt(g/k)`; mine identical. Agree.
- p5-a: page `-b*v/(m0 + b*t)`; mine identical. Agree.
- p5-b: page `m0*v0/(m0 + b*t)`; mine identical. Agree.

My blind answers and the page agree everywhere.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 5(a) | "determine a differential relation for the change in speed of the vehicle Δv", using t, Δt, m0 and b | Asks the reader to type dv/dt (the limit of Δv/Δt) in terms of v, t, m0 and b. The statement says so openly, and the solution gives both the Δv form and the dv/dt form | Acceptable as it is. The change is announced, MIT's Δv form is in the solution, and a formula box cannot cleanly take a Δt. The remark that MIT's list of symbols leaves out the speed is correct. |
| 2 | info | Problem 2 statement | The text does not pin down m1 or the frame of u | Two readings are fixed and labelled as ours: m1 is without the ball, and u is relative to astronaut 1 after the throw | None needed. Both fit MIT's figure, which labels the ball m apart from m1, and the convention of the recoil lesson (`v_p = v_c + u` with v_c the final cart velocity, relative-velocity-and-recoil.mdx line 168). |
| 3 | info | Problem 3(c) | Says nothing about how the tank is released | "Released gently, with no push", labelled as ours | None needed. MIT's Example 12.5 makes the same assumption without stating it (it simply adds the two gains). |
| 4 | info | Problem 4 | Says nothing about the velocity of the cloud water | Water at rest, labelled as ours, with a note that the result depends on it | None needed. This is the standard reading, and it gives the form MIT asks for (in terms of k, g and v_r). |
| 5 | info | Problem 1 | Figures with two frames (the land and boat A) | The situation is described in words, with bank axes: x across, y downstream | None needed. MIT's j-hat points along the flow. The page uses different axis labels, but its angle convention is the same as MIT's. |

## Arithmetic and answer checks
- I recomputed every number on the page and all are correct:
  - Problem 1: 1.118 m/s, 63.43 deg, 1600 s, 1600 m, 26.7 min, sqrt(800^2 + 1600^2) = 1788.9 m, and 1789/1.118 = 1600 s.
  - Problem 2, part (a) example: 1.5 m/s and -6.5 m/s; the momentum is 64 kg m/s before and 60 x 1.5 - 4 x 6.5 = 64 kg m/s after.
  - Problem 2, part (b) example: 1.543 m/s, 8.686 m/s, -7.143 m/s, and (152 - 28.57)/80 = 1.543 m/s.
  - Problem 3: ln 8.03 = 2.08; 6249; 3.603; 3845; 6.4; 3.048; 3343; 7188; 3.603 x 3.048 = 10.98 and 3000 ln 10.98 = 7188; 939; 3000 ln(7.8/3.5) = 2404; 3845 + 2404 = 6249.
  - Problem 4: sqrt(9.8/0.2) = 7.0 m/s.
  - Problem 5: 100 kg, 200 kg and 1.5 m/s.
- The notes round their values to 6250, 3840, 3340 and 7190 m/s (Eqs. (12.3.92)-(12.3.95), pp. 12-23 to 12-24). Each is within 0.1% of the page's unrounded value, so the 1% boxes accept a reader who copies them. The page says this openly.
- Answer boxes:
  - Every `expr` and `value` equals the result of its solution.
  - The `vars` ranges keep every formula finite and physical: masses and speeds positive, v2 > v1 in p2-b, and k > 0.
  - Formulas are compared to 1 part in 10^6 (`agree` in lib/answers.ts). So the checker can tell every listed mistake apart from the answer, even where they are close in value (for example "g" against g - k v^2 when k v^2 is small).
- Mistake hints, each checked against its formula:
  - p2-a: "v1 + m*u/m1" is the reading where u is measured before the throw; "((m1+m)v1 + m u)/m1" is the reading where the ball moves at -u.
  - p2-b: "m1 m2 (v2-v1)/(m(m1+m2+m))" carries the before-the-throw reading into part (b); "(m1+m)(v2-v1)/(2m)" takes the common speed to be the average; "(m1+m)(v2-v1)/m" brings astronaut 1 up to v2.
  - p4-a and p4-b: the unit hints are correct.
  - p5-a: "-b*v*t/(m0+b*t)" is a speed, as the hint says.
  - p5-b: "v0 exp(-bt/m0)" falls faster than m0 v0/(m0+bt), because 1/(1+x) > e^-x, as the hint says. "v0 - b v0 t/m0" turns negative for t > m0/b, as stated.
  - All of these hints are true.
- p3-e: choice 1 is correct. The "nothing dropped" check in the solution gives 6249 m/s again, which correctly shows that the whole gain comes from dropping the tank.
- Every solution ends with a check: units, limits, a number, or a second route.
- No hint gives the result away. For example, P1 hint 2 says "add them as vectors", and P2(b) hint 3 says to put the common speed into part (a), not the final formula.
- Calcs:
  - `calc:test` passed for this file (126 tests passed with `-k problem-set-6`, which may include other courses' set 6).
  - Each formula answer is checked by an independent route: numerical solves, finite steps, a numerical integral, and an explicit tanh/cosh solution for Problem 4.
  - `content:check` gave 0 errors site-wide (2 warnings, none for this page).
- Points: 10 + 12 + 16 + 10 + 12 = 60, and the parts add up within each problem. MIT gives no points, and the page says that the points are its own.

## Coverage and order
- All five MIT problems are present with every part (1a-c, 2a-b, 3a-e, 4a-b, 5a-b), in MIT's order and with the same physics.
- The page adds only two kinds of change: small assumptions that it labels as its own (items 2-4 above), and a multiple-choice form for P3(e) in place of MIT's open question "does your answer make sense?". The solution to P3(e) then answers that question in prose.

## Licensing
- MIT's problem-set PDF and Chapters 11-12 carry no "All rights reserved" or "Courtesy of" notice (checked with grep). The page does not redraw MIT's figures; it describes the situations in words.
- The statements are rewritten, not copied. They share only the given numbers and standard terms with MIT. Problem 3 uses MIT's own numbers, which are also those of notes Examples 12.4 and 12.5, and the page says so openly. There is no OpenStax or LibreTexts material.
- There are no em dashes, and no `## Summary` section that gives the answers away.

## Citations
- Eq. (11.3.2), p. 11-4 (law of addition of velocities): correct equation and printed page.
- Eq. (12.2.1), p. 12-3 (F_ext = dp_sys/dt): correct. The equation sits on printed page 12-3.
- Eq. (12.3.84), p. 12-21 (v_f - v_i = u ln(m_i/m_f)): correct.
- "Problem 4, p. 4" for the growth law: this is MIT's printed page 4, so it is correct.
- Claims about other lessons, all checked:
  - The rocket-equation lesson quotes the notes' 6250, 3840, 3340 and 7190 m/s (line 119), and it shows that burn time matters in gravity (u ln R - g t_f).
  - The resistive-forces lesson has v^2 drag and the terminal speed sqrt(mg/beta), so the comparison in P4 is fair.
  - The recoil lesson takes u relative to the cart after the jump.

## Notes
- info: Chapter 12 of the notes uses the number "Example 12.4" for two different examples: Boat and Fire Hose (p. 12-12) and Single-Stage Rocket (p. 12-23). The page always means the rocket, and the frontmatter says "(the two rocket examples)", so no fix is needed. Adding the title "Single-Stage Rocket" once in the intro would remove any doubt.
- Writer notes, all verified:
  - The points are the page's own.
  - P3 is the rocket of notes Examples 12.4 and 12.5, with unrounded values.
  - P1 measures the angle from straight across, toward downstream, as MIT does.
  - P2 labels both of its readings as its own.
  - P3(c) assumes the tank is released with no push.
  - P4 takes the cloud water at rest, giving v_T = sqrt(g/k).
  - P5(a) asks for dv/dt instead of Δv, which is acceptable (item 1).
  - P5(b) gives m0 v0/(m0 + b t).

COUNTS: errors=0 warnings=0 info=6

## Resolution (2026-11-21, by the page author)
- No errors or warnings. The info items record labelled departures from MIT and need no change. Status set to reviewed.
