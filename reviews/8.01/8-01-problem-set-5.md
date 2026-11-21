---
page: content/year-1/8.01/8-01-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset5/ (read: PDF text and all six page renders; figures for Problems 1, 2 and 5 inspected)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read, pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 5: momentum, impulse and the centre of mass

## Blind solve

### My answers (written before opening the page, from the stripped statements and MIT's PDF only)
- p1a: u_min = ((m1 + m2)/m1) sqrt(2 mu g d)
- p1b: x_f = sqrt( (m1 u/(m1+m2))^2 - 2 mu g d ) * sqrt(2 h/g)
- p2: h_f = h0 + (mA/(mA+mB))^2 (v0^2 - 2 g h0)/(2 g)
- p3a: v = sqrt(2 g h0) = 6.261 m/s; dt = 2d/v = 3.19 ms, so 3.2 ms
- p3b: a = v^2/(2d) = 1960 m/s^2; N_ave = m(g + a) = 60 x 1969.8 = 1.182e5 N (1.176e5 N if mg is dropped, 0.5% apart)
- p3c: N_ave/(mg) = 1 + h0/d = 201; gravity negligible (0.5%)
- p3d: breaking force 1.6e8 x 3.2e-4 = 5.12e4 N; one leg 1.18e5 N, two legs 5.91e4 N each: breaks in both cases
- p4a: x_cm = L/2 (R_cm = (L/2) i)
- p4b: lambda0 = 4M/L; x_cm = 4L/5
- p5: L = (m2 d + m1 v0 (t1 - t0))/(m1 + m2)

### Comparison (one line per answer id)
- p1-a: page `(m1 + m2)/m1*sqrt(2*mu*g*d)`, identical to mine. Agree.
- p1-b: page `sqrt((m1*u/(m1 + m2))^2 - 2*mu*g*d)*sqrt(2*h/g)`, identical. Agree.
- p2-h: page `h0 + (mA/(mA + mB))^2*(v0^2 - 2*g*h0)/(2*g)`, identical. Agree.
- p3-a: page 3.2 ms (2%); mine 3.19 ms. Agree.
- p3-b: page 1.18e5 N (2%); mine 1.182e5 N. Agree.
- p3-c: page 201 (1%); mine 201. Agree.
- p3-d: page choice 2 "breaks, even when two legs share the force equally"; mine: breaks on one leg and on two. Agree.
- p4-a: page `L/2`. Agree.
- p4-b-lambda: page `4*M/L`. Agree.
- p4-b-x: page `4*L/5`. Agree.
- p5-dist: page `(m2*d + m1*v0*(t1 - t0))/(m1 + m2)`, identical. Agree.

No disagreements. `npm run calc:test -- -k "problem-set-5 or problem_set_5"`: 94 passed. The calcs file checks every formula answer by an independent route (numerical solves in time for P1 and P2, numerical integrals for P4, and for P5 an integral of particle 1's velocity in the exact inverse-cube motion). I re-derived that P5 model: for an attraction k/r^3, d^2(r^2)/dt^2 = 4E/mu is constant, so r^2 = d^2 - 2 d v0 t + (v0^2 - w^2) t^2 with w^2 = k/(mu d^2), and the first zero is at t = d/(v0 + w), as the calcs comment says. `npm run content:check`: 0 errors, and neither of its 2 warnings names this page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | P4(b), `p4-b-x`, mistake `5*L/4` | (not from MIT; hint check) | "The centre of mass of a rod cannot lie beyond its end. Have the two integrals changed places?" | The second sentence is not true of 5L/4: swapping the two integrals gives (λ0 L/4)/(λ0 L²/5) = 5/(4L), which is not even a length. Replace the question with, for example: "The ratio is (L^5/5)/(L^4/4) = 4L/5: check that your fraction is not upside down." |
| 2 | info | P3(d) statement and choice box | "Will the person break his ankle?" (no model given) | Adds that the thinnest part of the tibia passes on the whole force of the ground on that foot, and asks about one leg and about two legs sharing equally (both labelled as ours) | Fair reading. With MIT's numbers every reasonable interpretation gives "breaks" (1.18e5 N against 5.1e4 N for one bone, or against 1.02e5 N for two). The three choices exclude each other and are unambiguous under the stated assumptions; the solution says the margin on two legs is small (15%). No change needed. |
| 3 | info | P2 statement | Figure: trampoline at ground level, clown standing on a platform of height h0 | Same in words; adds v0² > 2gh0, labelled as ours | None. |
| 4 | info | P1 statement | Figure: d from the block to the edge, x_f from the foot of the drop | Same in words | None. |
| 5 | info | P4 | Position "in terms of L, M and î" | Boxes ask for x_cm with R_cm = x_cm î stated. MIT's Problem 4 is the notes' Example 10.3 with x³ in place of x²; the page says so | None. |

## Arithmetic and answer checks
- P1 numbers: (0.010 + 1.99)/0.010 = 200; sqrt(2·0.40·9.8·1.5) = 3.429, so 3.43 m/s; u_min = 686 m/s ✓. (b) 900/200 = 4.5 m/s; 2μgd = 11.76; sqrt(20.25 − 11.76) = 2.914, so 2.91 m/s; sqrt(1.6/9.8) = 0.404 s; x_f = 1.18 m ✓.
- P2 numbers: 100/19.6 = 5.10 m; v1² = 41.2, v1 = 6.42 m/s; v2 = 3.85 m/s; 0.36·41.2/19.6 = 0.757 m; h_f = 3.757, so 3.76 m ✓.
- P3: v = 6.261 m/s; Δt = 3.194 ms; a = 1960 m/s²; mv/Δt = 1.176e5 N; plus 588 N gives 1.182e5 N; ratio 201; weight share 0.50%; F_break = 5.12e4 N; per leg 5.91e4 N; two bones 1.02e5 N; stress per bone on two legs 1.85e8 N/m², shown as 1.8e8 ✓; 201/21 = 9.6, "about ten times smaller" ✓; d = 10 cm makes Δt ten times longer ✓; "the average force is a lower bound for the largest force" ✓.
- P4: λ0 = 4M/L, x_cm = 4L/5; the pattern (n+1)M/L and (n+1)L/(n+2) checked, and against Example 10.3 (λ0 = 3M/L, x_cm = 3L/4, Eqs. (10.5.13) and (10.5.14), p. 10-9) ✓.
- P5 numbers: 9.0 m, 0.50 m/s, 2.0 m, L = 11 m, particle 2 moves 1.0 m, coasting 8.0 m ✓. Limits in the check (m2 → ∞ gives d; m1 → ∞ gives v0(t1 − t0)) are correct.
- Answer boxes: all `vars` ranges keep the formulas real and physical (P1b: V ≥ 5.9 m/s against 2μgd ≤ 9 m²/s²; P2: v0² ≥ 100 against 2gh0 ≤ 60; P5: t1 − t0 ≤ 3 s while d/v0 ≥ 5 s, so L ≤ d as an attraction requires). Points add up (20 + 15 + 25 + 20 + 20 = 100; parts 10+10, 7+8+5+5, 5+15).
- Mistake hints, each checked against its formula: P1a's sqrt((m1+m2)/m1)·sqrt(2μgd) is indeed what equal Σ m v² would give; the (m1+m2)/m2 light-bullet limit is right; P1b's hints are right; P2's "grabbed at ground level" formula is right; P4's L²/2, M/(4L), 4M/L⁴ and L/5 (from λ0 = M/L) hints are right; P5's swapped-mass limit argument is right. Exception: finding 1.
- Tolerances: p3-b at 2% accepts 1.176e5 N (gravity dropped), and p3-c at 1% accepts 200; both are the 0.5% effect that part (c) itself calls negligible, so acceptable. Readers using g = 9.81 stay well inside every tolerance.
- Hints: none gives a result away.

## Coverage and order
- Problems 1 to 5 and their parts are in MIT's order with the same physics. Points are ours (MIT gives none) and the page says so.
- Writer notes verified: no energy methods (energy starts at Lecture 20, week 7); v² = v0² + 2aΔx is derived as a labelled own step from Eqs. (4.4.2) and (4.4.9); P1 geometry matches MIT's figure; P2's platform and added condition are labelled; P3 uses MIT's numbers with g = 9.8 as the page says.

## Citations
- Eq. (10.2.1) p. 10-1; (10.2.5) p. 10-2; (10.2.6) to (10.2.8) pp. 10-2 and 10-3; (10.5.3) and (10.5.4) p. 10-7; (10.6.2) and (10.6.3) p. 10-10; (10.7.5) p. 10-12: all checked against the printed footers of Chapter 10 ✓.
- Eqs. (4.4.2) p. 11 and (4.4.9) p. 12, in Section 4.5 of Chapter 4 (MIT's own equation numbering) ✓. Eq. (8.3.5) p. 8-14 ✓. "Problem 4(b), p. 4" ✓.
- The claim that the centre-of-mass lesson works out the uniform rod the same way is true (`centre-of-mass.mdx`, section "A uniform rod, step by step"). The three linked lessons exist (Lectures 15, 16, 17 = `covers`).

## Licensing
- MIT's set has no "All rights reserved" or "Courtesy of" notice. No figure is reproduced or redrawn; situations are described in words. The wording is the page's own (only standard terms shared). No OpenStax or LibreTexts. ✓

## Notes
- No em dashes; no `## Summary` that gives answers away.
- The P1(b) check says that for u = u_min the block "tips over the edge"; strictly, at u_min it just stops at the edge (part (a) calls this the limiting case). Harmless as a limit statement; not counted.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)
- Warning 1: the hint for the mistake `5*L/4` in box `p4-b-x` now reads "The centre of mass of a rod cannot lie beyond its end. The ratio is (L^5/5)/(L^4/4) = 4L/5: check that your fraction is not upside down."
- Info items: no change needed. Status set to reviewed.
