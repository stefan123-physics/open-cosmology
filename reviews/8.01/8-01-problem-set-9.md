---
page: content/year-1/8.01/8-01-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset9/ (read; PDF downloaded fresh, byte-identical to the scratch copy; all six drawings looked at on the rendered pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter15/ (read; PDF downloaded fresh, cited pages rendered)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read; PDF downloaded fresh, p. 14-21 rendered)
verdict: pass-with-notes
---

# Review: Problem Set 9: collisions

## Blind solve

### My answers (written before opening the full page)
- p1: v_{p,x,f} = -v_{p,0} - 2 v_{b,0}
- p2: v_f = 2 v_e
- p3a: h = m_b v_{c,0}^2 / (2 g (m_b + m_c))
- p3b: cube speed (m_b - m_c) v_{c,0}/(m_b + m_c) (moving back, -x); block speed 2 m_c v_{c,0}/(m_b + m_c) (+x)
- p4: x_max = v_1 sqrt(m_1 m_2 / (k (m_1 + m_2)))
- p5a: V = m_b v_0/(M + m_b)
- p5b: d = m_b v_0 / sqrt(k (M + m_b))
- p5c: K_after/K_before = m_b/(M + m_b)
- p5d: d_total = 3 m_b^2 v_0^2 / (8 mu_k g (M + m_b)^2)
- p6: tan theta_{1,f} = 2

### Comparison with the page
- p1-v: page `-vp0 - 2*vb0`, mine the same. Agree.
- p2-v: page `2*ve`, mine 2 v_e. Agree.
- p3-a: page `mb*vc0^2/(2*g*(mb + mc))`, mine the same. Agree.
- p3-b-cube: page `(mb - mc)*vc0/(mb + mc)`, mine the same. Agree.
- p3-b-block: page `2*mc*vc0/(mb + mc)`, mine the same. Agree.
- p4-x: page `v1*sqrt(m1*m2/(k*(m1 + m2)))`, mine the same. Agree.
- p5-a: page `mb*v0/(M + mb)`, mine the same. Agree.
- p5-b: page `mb*v0/sqrt(k*(M + mb))`, mine the same. Agree.
- p5-c: page `mb/(M + mb)`, mine the same. Agree.
- p5-d: page `3*mb^2*v0^2/(8*mu*g*(M + mb)^2)`, mine the same. Agree.
- p6-tan: page value 2 (1%), mine 2. Agree. Independent check: scipy `fsolve` on the three equations (momentum x, momentum y, energy, v_{1,i} = 1) gives v_{1,f} = 0.74536, v_{2,f} = 0.47140, theta_{1,f} = 1.10715 rad, tan = 2.0000000002.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How to answer", second paragraph | (not MIT; give-away check) | Typing examples `-vp0 - vb0`, `mb*v0/(M + mb)` and `v1*sqrt(m1/k)`. The second is exactly the answer of Problem 5(a) (`p5-a`); the first and third are listed mistakes of p1 and p4. | Use neutral examples that answer no box and match no listed mistake, e.g. `-u0 - 3*w0`, `m*u/(m + 4*M)`, `u*sqrt(M/k)` (or names not used in the set). |
| 2 | warning | Introduction, first paragraph | (not MIT) | "in four of the problems a collision is followed by a climb, a spring or a rough table" | Only three problems fit (3: climb; 4: spring; 5: spring and rough table). Write "in three of the problems". |
| 3 | info | Problem 1, statement | MIT only says m_b is much greater than m_p | Adds "so take its velocity to be unchanged by the collision" | Acceptable reading of MIT's assumption; it also hints at the method. No change needed. |
| 4 | info | Problem 2, statement | MIT gives no frame | "think of the frame of the Sun" and "it catches up with the Earth from behind" | Consistent with MIT's drawing and v_i = 4 v_e > v_e. No change. |
| 5 | info | Problems 3 and 4, statements | MIT's drawing only | "(This is our reading of the drawing.)", "(our assumption)" | Correctly marked as our own assumptions; the drawing does show the arc tangent to the table at its foot. No change. |
| 6 | info | Problem 1, Formula "Energy-momentum principle", Eq. (15.4.7), p. 15-8 | Eq. (15.4.7) on p. 15-8 is v_{1x,i} - v_{2x,i} = v_{2x,f} - v_{1x,f}; the name "energy-momentum principle" is given on p. 15-9 to the relative-velocity form, Eq. (15.4.9) | Labels (15.4.7) with that name | Same content; fine as is. |

## Arithmetic and answer checks
All numbers recomputed with Python:
- P1: -3.0 - 2 x 2.0 = -7.0 m/s; general Eq. (15.4.14) with 2.7 g and 7.0 kg gives -6.99614 m/s, shown -6.996. Correct.
- P2: relative speed 3 v_e; v_f = 2 v_e; KE fraction (2/4)^2 = 1/4. Correct.
- P3: V = 0.50 m/s; 0.40 J, 0.10 J, 0.30 J; h = 0.30/(0.20 x 9.8) = 0.1531 m = 0.75 x 4/19.6. (b) 1.0 m/s and 1.0 m/s; momentum 0.40 = 0.40 kg m/s; KE 0.10 + 0.30 = 0.40 J. Correct.
- P4: V = 0.50 m/s; 2.0 J - 0.50 J = 1.5 J; x_max = sqrt(3/300) = 0.10 m. Correct.
- P5: v_a = 4.0 m/s; x_1 = 4.0 sqrt(1/400) = 0.20 m; ratio 0.020; 400 J and 8.0 J; 98 % lost; D = 48/39.2 = 1.2245 m (shown 1.22); 8.0 - 2.0 = 6.0 J; 4.9 N x 1.2245 m = 6.0 J. Correct.
- P6: v_{2,f} = sqrt2/3 v_{1,i} = 0.4714; v_{1,f} = sqrt5/3 = 0.7454; theta = 63.43 deg; 5/9 + 4/9 = 1; 63.4 + 45 = 108.4 deg. Correct.
- Points: 6 + 6 + 12 + 7 + 13 + 6 = 50; part splits 5 + 7 = 12 and 2 + 3 + 3 + 5 = 13. Correct.
- `<Answer>` boxes: every expr equals the solution's final result; all vars ranges keep the formulas finite and physical (m_c in [0.5, 1.5] < m_b in [2, 5], as the statement requires; mu, g, k, M positive). Every listed mistake differs from the answer over its ranges (p4 `m1*v1/sqrt(k*(m1 + m2))` and p3-b-cube `2*mc*vc0/(mb + mc)` coincide with the answer only on the measure-zero sets m1 = m2 and m_b = 3 m_c; random sampling separates them). Each mistake hint was checked to describe its formula correctly (e.g. p2 `6*ve` is the head-on case: relative speed 5 v_e, v_f = 4 v_e + 2 v_e; p3-b-block `2*mc*vc0/mb` is the block speed if the cube returned at v_{c,0}; p5-d with 16 is the farthest point; p5-d `mb^2*v0^2/(2*mu*g*(M + mb)^2)` is all KE lost).
- Every solution ends with a check (units, limits, a numerical example, or an energy/momentum re-check). The physical remarks were checked: P3(b) "block ends with twice V" (time reversal in the frame moving with V) is right; P5(d) remark that the measured return speed stands in for k is right; P6 opening angle above 90 deg for a heavier target is right.
- Calcs file: `pytest tests/calc -k problem-set-9` in the worktree: 189 passed. `npm run content:check` in the worktree: 0 errors (only warning for this page: no review file yet).

## Citations (printed page footers checked on the rendered PDFs)
- Ch. 15: Eq. (15.4.7) p. 15-8; (15.4.14) p. 15-9; (15.4.17) p. 15-10; (15.2.14) p. 15-5; (15.2.19) p. 15-6; (15.5.3) p. 15-13; (15.5.5) p. 15-14; (15.6.5), (15.6.6) and (15.6.8) p. 15-18. All correct. Eq. (15.6.8) confirmed on the rendered page: it is (1/2) m1 v1,i^2 = (1/2) m1 v1,f^2 + (1/2) m2 v2,f^2 ((15.6.7) is K_i = K_f); pdftotext misplaces the number, the rendering does not.
- Ch. 14: Eq. (14.7) U_g = mgy p. 14-12; Eq. (14.12) U_s = (1/2) k x^2 p. 14-13; Eq. (14.25) (K_f + U_f) = (K_i + U_i) p. 14-15; Section 14.7, p. 14-21: W_nc = Delta K + Delta U is numbered (14.6) there (the chapter restarts its numbering in several sections; the page's wording "the equation numbered (14.6) there" is accurate). All correct.
- Readings `location` lists match the sections actually cited.

## Coverage and order
- Six problems, in MIT's order, with MIT's parts (3a, 3b; 5a to 5d) in MIT's order. Same physics and same given variables in every part. Nothing left out or added. `covers: [26, 27]` matches the syllabus (Week 9, collision theory).

## Licensing
- MIT's problem set, Chapters 14 and 15: no "All rights reserved" or "Courtesy of" notice found (grep on all three texts).
- No MIT drawing is reproduced or redrawn; drawings are described in words, with own assumptions marked. Statements are reworded, not copied. Example numbers are the page's own; none matches a notes example (Example 15.7 uses m/3 and is a different problem).
- No OpenStax or LibreTexts material. No em dashes; no `## Summary`.

## Notes
- Internal links (/courses/8-01/types-of-collision, elastic-collisions, potential-energy, energy-conservation) point to existing lessons; the claims attributed to them (energy-momentum rule, slingshot v_f = v_i + 2V with a head-on planet, angle convention below/above the axis, right angle for equal masses, lost fraction m2/(m1 + m2)) were checked in those lessons.
- Hints do not give results away (apart from finding 1, which is outside the hints).

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-21, by the page author)

1. Warning fixed: the typing examples in "How to answer" are now `-u0 - 3*w0`, `m*u/(m + 4*M)` and `u*sqrt(M/k)`, which answer no box and match no listed mistake.
2. Warning fixed: the intro now says "in three of the problems".
Info items need no change. Status set to reviewed.
