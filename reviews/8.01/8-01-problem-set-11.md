---
page: content/year-1/8.01/8-01-problem-set-11.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset11/ (read: PDF text and rendered drawings of all 5 problems)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter19/ (read, pdftotext, printed footers checked)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (not fetched; GM = 3.986e14 m^3/s^2 is the standard value)
verdict: pass-with-notes
---

# Review: Problem Set 11: angular momentum

## Blind solve

### My answers (written from the stripped statements and MIT's PDF before the full page was opened)
- p1-a: omega_z = -m2 v / (R (m1 + 2 m2)). L about the pivot = 0; I_ring,P = 2 m1 R^2; the bug at 2R moves with v + 2R omega_z along the tangent.
- p1-b: omega = 0 (the bug at the pivot has r = 0, so the ring alone must have L = 0).
- p2-a: omega_f = 3v/(8d) (clockwise positive; L_i = 2mvd/3 - mvd/3 = mvd/3; I_P = md^2/3 + 4md^2/9 + md^2/9 = 8md^2/9).
- p2-b: (Kf - Ki)/Ki = 1/16 - 1 = -15/16 = -0.9375.
- p3-a: omega_f = 12 v_i/(7d).
- p3-b: v_f = v_i/7.
- p4-a: v_f = v0 (2 mR - m)/(2 mR + m) (a rebound to the left needs 2 mR > m).
- p4-b: omega_f = 2 m v0 / (R (m + 2 mR)).
- p5-a: v1 = sqrt(G mp/R).
- p5-b: vp = sqrt(3 G mp/(2R)).
- p5-c: Delta v = (1 - sqrt(3/2)) sqrt(G mp/R), about -0.2247 sqrt(G mp/R).
- p5-d: slow down.

Blind cross-check: p3 and p4 also solved as a one-dimensional elastic collision with the effective mass I_P / (lever arm)^2 (4m/3 for the rod, 2 mR for the hoop); same results.

### Comparison with the page
- p1-a: page `-m2*v/((m1 + 2*m2)*R)`: identical to mine. Agree.
- p1-b: page choice 0, "zero": agree.
- p2-a: page `3*v/(8*d)`: identical. Agree.
- p2-b: page value -0.9375 (tolerance 1%): agree.
- p3-a: page `12*vi/(7*d)`: identical. Agree.
- p3-b: page `vi/7`: identical. Agree.
- p4-a: page `(2*mR - m)*v0/(2*mR + m)`: identical. Agree.
- p4-b: page `2*m*v0/((2*mR + m)*R)`: identical. Agree.
- p5-a: page `sqrt(G*mp/R)`: agree.
- p5-b: page `sqrt(3*G*mp/(2*R))`: agree.
- p5-c: page `(1 - sqrt(3/2))*sqrt(G*mp/R)`: agree.
- p5-d: page choice 1, "slow down": agree.

No disagreement. `pytest tests/calc -k problem-set-11` (run in the worktree with `-p no:cacheprovider`): 37 passed, including every `answer:` link.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(a), Answer p4-a, first `mistakes` hint | (no MIT text; physics check of our hint) | "This is the rebound speed from a free body of mass m_R, or from a hoop that turns about its centre." | A hoop pivoted at its centre and hit along a line through its centre gets no torque at all, so the second half of the sentence is not true of this formula. The formula comes from using m_R R² (the moment of inertia about the centre) as the moment of inertia about P. Reword to: "This is the rebound speed from a free body of mass m_R: it uses the moment of inertia m_R R² about the centre. The hoop turns about the point P of its rim: its moment of inertia about P is larger than m_R R²." |
| 2 | info | Problem 5(b), Formula "Potential energy of gravitation (two bodies)", `at="Eq. (14.16), p. 14-14"` | MIT's Chapter 14 prints the label "(14.16)" four times. The cited one, U^G(r) = -G m1 m2 / r, is on p. 14-14 in Section 14.4.3 | p. 14-14 is given, so the citation is correct | Optional: `at="Eq. (14.16), Section 14.4.3, p. 14-14"` so the repeated label cannot confuse. |
| 3 | info | Problem 1(b), first hint | (no MIT text) | "How much of it can the bug have when it is at the pivot itself?" | Together with the second hint (r = 0) this nearly gives the answer of a 4-point multiple-choice part. Acceptable as hints are opened one at a time; optionally make the first hint less direct. |

Statements against MIT's drawings (rendered at 200 dpi): Problem 1, pivot at the bottom and the bug's arrow at the upper left pointing down-left, which is anticlockwise: matches the page. Problem 2, rod up from P, object at 2d/3 moving right and object at d/3 moving left, both on the rod in the "after" drawing: matches, and the page's note on "sticks" is accurate. Problem 3: object comes from the left, hits the midpoint, rebounds, rod turns clockwise: matches. Problem 4: P at the top of the hoop, object level with the centre moving right, afterwards moving left, the omega_f arrow below the hoop pointing right (anticlockwise): matches the page, and the page's remark on "at its midpoint" is accurate. Problem 5: furthest point 3R on the left, closest point R on the right on the circle of spaceship 1, both orbits in the same sense: matches.

## Arithmetic and answer checks
- Every worked number recomputed: p1 -0.0286 to -0.029 rad/s; p2 1.25 rad/s, momentum 9/16 mv, Ki 1.2 J, Kf 0.075 J; p3 5.0 rad/s, 0.50 m/s, the rod gets 24/49 m vi² = 48/49 of the energy; p4 1.8 m/s, 4.8 rad/s, R omega 1.2 m/s, energies 0.45 = 0.162 + 0.288 J; p5 v1 = 7.546 km/s, vp = 9.242 km/s, Delta v = -1.696 to -1.70 km/s, ratios 1.225, 1.414, 0.408, 0.577, -0.225. All correct.
- Problem 1 any-angle formula: rederived in components (pivot at the origin, bug at R(sin phi, 1 - cos phi), relative velocity v(cos phi, sin phi)); L_bug,z = m2 (1 - cos phi)(Rv + 2R² omega_z). The page's formula is right; it is negative on (0, 2 pi), so "ends at rest, turned clockwise" is right. The massless-ring limit -v/(2R) is right.
- Every `mistakes` formula rederived and its hint checked: p1-a all four true (sign; v taken relative to the table gives -m2 v/(m1 R); I about the centre gives -2 m2 v/((m1 + 4 m2) R); bug at R gives -m2 v/((2 m1 + m2) R)). p2-a all four true (9v/8d adding; sign; 3v/5d without the rod; 12v/23d with I_cm). p3-a all four true (6vi/7d sticking; 3vi/2d stopping dead; 3vi/d with I_cm; 2vi/d free rod). p3-b all four true (vi/2 is the size with I_cm; 5vi/7 is |vi - omega d|). p4-a: see row 1; the other three are true. p4-b all four true (the sticking case m v0/(2(mR + m)R) is the lesson's formula). p5 all mistakes true (sqrt(4/3) is v2 = 0; sqrt(1/2) is the circle of radius 2R; sqrt(1/6) is v2).
- `vars` ranges: finite and physical everywhere; the p4 ranges (m in [0.1, 1], mR in [1, 3]) keep 2 mR > m, so the rebound is to the left as MIT states. Formulas are compared at relative 1e-6 (lib/answers.ts), which separates every listed mistake from the answer (closest pair: p4-a with mR = 3, m = 0.1, 3 % apart).
- p2-b tolerance 1 % accepts -0.938 (3 significant figures) and rejects nearby wrong values such as -0.9.
- Every solution ends with a check (units, limits, numbers).

## Coverage and order
- Five problems in MIT's order, MIT's parts in MIT's order. Added parts are labelled as our own: 3(b), 4(b), and 5(a), 5(b) as steps (stated on the page). MIT's Problem 5 asks one question with a parenthetical; split into (c) and (d), stated on the page.
- MIT gives no points; the page says the points are its own. Parts add up (12, 12, 12, 10, 14 = 60).

## Licensing
- MIT PDF and Chapters 14, 16, 19: no "All rights reserved" or "Courtesy of" notices (grep). No MIT drawing is redrawn: the page describes the drawings in words.
- Statements are rewritten in the page's own words; short quotations ("sticks", "at its midpoint") are marked as MIT's. No OpenStax or LibreTexts.
- NASA Earth Fact Sheet cited by title for GM only; no insignia.

## Citations
- reading1 Eq. (19.5.36), p. 19-21: correct (principle of conservation, Section 19.8, printed page 19-21).
- Eq. (19.5.27), p. 19-19 (L_S,z = I_S omega_z): correct. Eq. (19.5.31), p. 19-21 (ring, I = MR² about its centre): correct.
- reading2 Eq. (16.2.16), p. 16-10 (parallel axis theorem, Section 16.3.3): correct.
- "Example 19.7, Eq. (19.5.39), p. 19-24" (rod about its end, (1/3) m l²): correct. Example 19.7 spans pp. 19-21 to 19-26: correct. ½ I omega² used in Example 19.7 on p. 19-25: correct.
- Example 19.4 (meteor flyby) pp. 19-10 to 19-12, with m vi h = m vp R_E on p. 19-12: correct.
- reading3 Eq. (14.16), p. 14-14: correct (see row 2).
- `source.readings[].location` sections (19.4, 19.7, 19.8; 16.3; 14.4): correct.

## Notes
- Claims about lessons checked: torque-and-angular-impulse works a ring pivoted on its rim, hit along a line a distance r from P by an object that sticks (omega_f = m2 vi/(2(m1 + m2) r)), matching the page's remark and the p4-b sticking hint; elastic-collisions has the relative-velocity rule and the (m1 - m2)/(m1 + m2) formula; moment-of-inertia has the parallel axis theorem; potential-energy uses U = -GMm/r; newtons-second-law-circular-motion has the Moon's orbit. The notes' Example 19.7 (rod hit by an object) and 19.4 (meteor) are fairly described as relatives, not the same problems.
- No em dashes, no `## Summary` with answers, no hint gives a result away (row 3 is borderline).
- Symbols: the 40 meanings scoped to this page were read and fit their use. I did not run `content:check`, so symbol completeness is not verified by me.

COUNTS: errors=0 warnings=1 info=2

## Resolution (2026-11-21, by the page author)

1. Warning 1 fixed: the first mistake hint of box p4-a now reads as the review suggests (a free body of mass m_R, using m_R R² about the centre, while the hoop turns about P on its rim, where its moment of inertia is larger).
2. Info items need no change.

Status set to `reviewed`.
