---
page: content/year-1/8.01/8-01-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset8/ (read: PDF text with pdftotext, and pages 1-6 rendered as images for the figures of Problems 1-3)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: Course Notes Chapter 14, pdftotext -layout, printed page footers checked)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (resolves; GM = 0.39860e15 m3/s2 and volumetric mean radius 6371 km match the page)
verdict: pass-with-notes
---

# Review: Problem Set 8: potential energy and energy conservation

## Blind solve

### My answers (written before opening the full page)
- p1a: v_top = sqrt(3 g R)  (N + mg = m v^2/R with N = 2mg)
- p1b: x = sqrt(7 m g R / k)  (1/2 k x^2 = 1/2 m (3gR) + m g (2R))
- p2a: T = m v0^2 / l - 5 m g  (v_top^2 = v0^2 - 4 g l)
- p2b: d = 2 sqrt(l (v0^2 - 4 g l) / g)  (fall 2l from rest vertically, t = 2 sqrt(l/g); top is directly above the bottom)
- p3a: v = 2 sqrt(g R)  (spring length^2 is 5R^2 at both top and bottom, so spring energy cancels)
- p3b: V = (3/2) sqrt(g R)
- p3c: m = 4 k R / g  (1/2 (4m) V^2 = 4 m g R + 1/2 k (9R^2 - 5R^2))
- p4a: v_esc = sqrt(2 G M_E / R_E)
- p4b: v_p = sqrt(G M_E / R_E)
- p4c: v_sat = sqrt(G M_E / (2 R_E))
- p4d: V = sqrt(3 G M_E / (8 R_E))  (= (1/2) sqrt(v_p^2 + v_sat^2))
- p5a: sketch: Gaussian well, minimum -U0 at x = 0, U -> 0 as |x| -> infinity; E line between; K = E - U at chosen point; turning points where U = E
- p5b: F_x = -(2 U0 x / a^2) exp(-x^2/a^2)
- p5c: v0 = sqrt(2 U0 (1 - exp(-1)) / m)

### Comparison with the page (one line per answer id)
- p1-a: page `sqrt(3*g*R)`, mine sqrt(3gR). Agree.
- p1-b: page `sqrt(7*m*g*R/k)`, mine sqrt(7mgR/k). Agree (also MIT notes Example 14.3, Eq. (14.17), p. 14-27).
- p2-a: page `m*v0^2/l - 5*m*g`. Agree.
- p2-b: page `2*sqrt(l*(v0^2 - 4*g*l)/g)`. Agree.
- p3-a: page `2*sqrt(g*R)`. Agree.
- p3-b: page `3*sqrt(g*R)/2`. Agree.
- p3-c: page `4*k*R/g`. Agree. Numerical check: integrating the bead's equation of motion on the ring (g = 9.8, R = 0.5, k = 4.9, m = 4kR/g = 1.0) from rest at the top gives v = 4.427188 m/s at the bottom (2 sqrt(gR) = 4.427189); the combined 4m object started at the bottom with (3/4)v stops at phi = 90.0000000 degrees, exactly at A.
- p4-a: page `sqrt(2*G*ME/RE)`. Agree.
- p4-b: page `sqrt(G*ME/RE)`. Agree.
- p4-c: page `sqrt(G*ME/(2*RE))`. Agree.
- p4-d: page `sqrt(3*G*ME/(8*RE))`. Agree.
- p5-a: self-marked sketch; the page's description (well of depth U0, even in x, U -> 0 from below, K = E - U as the gap, turning points at +-a sqrt(ln 2) = +-0.833a for E = -U0/2) agrees with mine.
- p5-b: page `-2*U0*x/a^2*exp(-x^2/a^2)`. Agree.
- p5-c: page `sqrt(2*U0*(1 - exp(-1))/m)`. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(c) solution, "The idea" | (claim about our own lesson) | "This is the satellite of the lesson on Newton's second law and circular motion." | That lesson works the Moon's orbit (gravity as the centripetal force, Kepler's third law); it has no satellite. Write e.g. "Gravity is the centripetal force, as for the Moon's orbit in the lesson on [Newton's second law and circular motion](...)." |
| 2 | warning | Problem 4(d), "Check the result" | (our own check) | "It is smaller than both speeds before the collision, as it should be: the two momenta do not point the same way, so part of the motion is lost." | Not a general rule: for perpendicular equal masses V = (1/2) sqrt(v1^2 + v2^2), which exceeds the smaller speed whenever v2 < v1/sqrt(3) (v2 -> 0 gives V -> v1/2 > v2). It holds here only because v_p^2 + v_sat^2 = 1.5 GM/R < 4 v_sat^2 = 2 GM/R. Replace with e.g. "It is smaller than both speeds before the collision: the moving mass doubles, and the two momenta are at right angles, so they only partly add." (drop "as it should be"). |
| 3 | info | Problem 2 statement | "Let g denote the magnitude of the gravitational constant" (MIT slip) | "The magnitude of the gravitational acceleration is g" | Correct. Under Writing rule 4 a bracketed note "(MIT writes gravitational constant)" could be added; optional. |
| 4 | info | Problem 1(a), Step "Forces at the top" | Notes Example 14.3 text: "Newton's Second Law in the radial direction, which is the downward direction", while Eq. (14.12) -mg - N = -m v^2/R has the signs of an outward unit vector | "With the radial direction pointing outwards, as in the notes" | The page follows the equation's signs, the consistent reading. No change needed. The notes' misprint in Eq. (14.15) ("vtop = sqrt(3mgR)") is not repeated. |
| 5 | info | Problem 3 statement and (a) check | Figure: spring anchor on the horizontal line through the centre, 2R to the left; A on the right at centre height; 3m at the top, m at the bottom | Same geometry in words; adds that the object slides down the left half | Verified: dU/dphi = -2kR^2 at the top, so the spring pulls the object to the left, and it reaches the bottom moving right, towards A. Correct. |
| 6 | info | Problem 4 | MIT puts the collision set-up inside part (b) | Collision set-up moved into part (d); simplifications (no air, no rotation, Earth at rest) and capital M_E, R_E added and flagged as ours | Fine; the order of questions (a) to (d) is MIT's. |

## Arithmetic and answer checks
- All 14 page results agree with my blind solve. `calc:test` on this calcs file (pytest -k): 48 passed. My own script recomputed every printed number: 2.71 m/s; 0.099 m; 6.26 m/s; 31.36 and 17.64 m2/s2; 4.2 m/s; T = 1.8375 -> 1.84 N; t = 0.571 s; d = 2.40 m = 3 l; 4.43 and 3.32 m/s; m = 1.0 kg; 22.05 = 19.6 + 2.45 J; one quarter of the KE lost in Problem 3; 11.19, 7.91, 5.59, 4.84 km/s; half the KE lost in Problem 4; 0.368, 0.833, 0.632, 1.124, 1.414; 79.5% (page "about 80%").
- Problem 4(d) remark (combined body bound): KE after 3/8 GM_E m/R_E against PE -GM_E m/R_E. Correct.
- Problem 3(c) check: U(phi) = 4mgR(1 - cos phi) + 2kR^2 sin phi; both terms increase on 0 to 90 degrees, dU/dphi = 4mgR at A, so the object turns back there. Correct (confirmed by the integration above).
- Every `mistakes` formula recomputed; each hint is true of its formula:
  - p1-a: sqrt(2gR) (N only), sqrt(gR) (N opposite to gravity, or N = 0), 3gR (no root).
  - p1-b: sqrt(3mgR/k) (no climb), sqrt(5mgR/k) (N = 0), sqrt(6mgR/k) (v^2 = 2gR), 7mgR/k (no root), sqrt(7mgR/(2k)) (half factors).
  - p2-a: -4mg is m v_top^2/l; -3mg from gravity taken outward; +mg is the tension at the bottom; -mg uses v0 at the top.
  - p2-b: fall through l; v0 instead of v_top; climb l (v0^2 - 2gl); speed only.
  - p3-a: sqrt(2gR); sqrt(4gR + 5kR^2/(3m)) is the spring giving up all of 5/2 kR^2; 4gR.
  - p3-b: sqrt(3gR) from KE conservation; 2 sqrt(gR); sqrt(gR)/2 from m v = 4m V.
  - p3-c: kR/g from KE conserved through the collision (V^2 = 3gR gives 2mgR = 2kR^2); (3 - sqrt 5)^2 kR/g from the square of the length difference; 4kR is a force; g/(4kR) has the unit 1/kg.
  - p4-a: sqrt(GM/R) surface orbit; sqrt(2GM/R^2) (quantity under the root is 2g, as the hint says); m inside the root.
  - p4-b, p4-c, p4-d: circular speed; halving the speed; launch speed; R instead of 2R in the centripetal term gives GM/(4R); scalar sum of momenta; KE conserved gives 3GM/(4R); |p|/m gives 3GM/(2R); V_y only. All correct.
  - p5-b, p5-c: sign; -U; U; missing 1/a^2 (U0 x is not a force); missing 2. E = 0 escape speed; U0/e; sum; missing 2; no root. All correct.
- `vars` ranges: in p2, v0^2 - 4gl >= 100 - 60 > 0 and T > 0 over the whole box (v0^2 >= 100 > 5gl max 75), so the formulas stay finite and physical. No other box has a singularity. Every mistake differs from its answer by a clear factor over the ranges.
- Hints: none states a final result. p4-d's third hint ("each component ... is half of one of the speeds ... Pythagoras") gives the method fully but leaves the algebra; acceptable.
- Points: 10 + 10 + 14 + 14 + 12 = 60, parts add up; MIT gives no points and the page says the points are ours.

## Coverage and order
- Five problems in MIT's order, each part in MIT's order. Added parts (1a; 3a, 3b) are steps on the way and are disclosed. The taut-string condition (Problem 2) and the simplifications of Problem 4 are flagged as ours. MIT's Problem 5(c) answer list includes x; the page drops it (the answer has no x), which is right.
- Citations checked against the printed footers of Chapter 14: Eqs. (14.3), (14.4) p. 14-16; Eq. (14.9) p. 14-18; Eq. (14.16) p. 14-14; Eq. (14.25) p. 14-15; Example 14.2 Eq. (14.6) p. 14-25; Example 14.3 Eqs. (14.10), (14.12) p. 14-26 and (14.17) p. 14-27; Problem 5 on p. 6 of MIT's set. All correct. (Chapter 14 restarts its equation numbers in several sections, so e.g. "(14.4)" occurs more than once; the page numbers make each citation unique.) The reading's `location` (Sections 14.4 to 14.6 and 14.9) covers every citation.
- `covers: [23, 24, 25]` matches the lectures of the three prerequisite lessons (potential-energy 23, energy-conservation 24, potential-energy-diagrams 25).

## Licensing
- MIT's set has no "All rights reserved" or "Courtesy of" notice. No MIT figure is reproduced or redrawn; the only graph (Problem 5a) is generated from the formula.
- Statements are rewritten. Problem 1's opening stays close to MIT's (and to notes Example 14.3) in structure ("held ... by a catch", "When the catch is removed"), but these are short standard phrases of a problem statement; acceptable. The page discloses that Problem 1 is worked as Example 14.3 in the notes; its solution adds its own numbers and limit checks.
- NASA values cited by title, no insignia. No OpenStax, LibreTexts or other forbidden source.

## Notes
- `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file (so symbols are covered). No em dashes; no `## Summary` section.
- Claims about lessons checked: potential-energy uses the same NASA GM and R_E (line 146); energy-conservation pairs the radial law with energy; potential-energy-diagrams gives F = -dU/dx and K = E - U (Eq. (14.9), p. 14-18). Only the "satellite" claim (row 1) is inaccurate.
- All linked slugs exist (potential-energy, energy-conservation, potential-energy-diagrams, conservation-of-momentum, universal-gravitation, kinematics-2d, newtons-second-law-circular-motion).

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-21, by the page author)

1. Warning fixed: Problem 4(c) now refers to the Moon's orbit in the lesson on Newton's second law and circular motion.
2. Warning fixed: the Problem 4(d) check now says why V is smaller here (the mass doubles and the momenta are at right angles), without "as it should be".
Info items need no change. Status set to reviewed.
