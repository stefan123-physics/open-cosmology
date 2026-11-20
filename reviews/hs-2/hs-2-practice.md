---
page: content/year-0/hs-2/hs-2-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read: worked examples and exercises listed, to check that no problem is copied)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read, same purpose)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read, same purpose; its G = 6.67e-11 and Earth mass 5.98e24, the set uses the lesson values 6.674e-11 and 5.97e24)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (PDF read: example list)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (PDF read: example list)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (PDF read: example list)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter17/ (PDF read: notice check only)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter18/ (resource page and PDF read: example list, CC BY-NC-SA, no rights-reserved notice)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter25new/ (resource page and PDF read: example list, CC BY-NC-SA, no rights-reserved notice)
verdict: pass-with-notes
---

# Review: Block 2 practice set: forces and gravity

## Blind solve

Solved from the statements-only copy (hints, answer boxes and solutions removed) before the page or `calcs/hs-2/hs-2-practice.yaml` was opened. Constants: g = 9.81 m/s², G = 6.674e-11, M_E = 5.97e24 kg, R_E = 6.371e6 m. Recomputed in Python.

**My answers**

| id | my answer | route |
|---|---|---|
| p1-a | 3770 N | 2400 cos30° + 1800 cos20° = 2078.5 + 1691.5 = 3769.9 |
| p1-b | 3815 N | R_y = 1200 − 615.6 = 584.4; √(3769.9² + 584.4²) = 3814.9 |
| p1-c | 8.81° N of E | atan(584.4/3769.9) |
| p2-a | zero | constant velocity, first law |
| p2-b | 4714.5 N | lift = mg + drag (drag points down while rising) = 4414.5 + 300 |
| p3-a | 1.60 m/s² | (210 − 58)/95 |
| p3-b | 7.20 m/s | 1.6 × 4.5 |
| p3-c | 16.2 m | ½ × 1.6 × 4.5² |
| p4-a | 0.80 m/s² | 76/95 (third law) |
| p4-b | 0.20 m/s² | 76/380 |
| p4-c | 0.50 m/s | (0.80 + 0.20) × 0.50 |
| p5-a | 2.13 m/s² | 0.25 × 9.81/1.15 = 2.1326 |
| p5-b | 5.37 N | 2 m₁m₂g/(m₁+m₂) = 5.374 |
| p5-c | T = 2 m₁ m₂ g/(m₁ + m₂) | substitute a in T = m₂(g + a) |
| p6-a | 141.3 N | 0.45 × 32 × 9.81 = 141.26 |
| p6-b | 1.27 m/s² | (141 − 0.32 × 313.92)/32 = 1.267 with the stated 141 N (1.275 with 141.26 N) |
| p6-c | 40.5 N | drag ∝ v²: 18 × 1.5² |
| p7-a | 122.6 N/m | 0.80 × 9.81/0.064 |
| p7-b | 28.4 cm | 18.0 + 1.3 × 9.81/122.6 (m) = 18.0 + 10.4 |
| p8-a | 49.9 N | 6.0 × 9.81 × cos32° = 49.92 |
| p8-b | 3.53 m/s² | 9.81 (sin32° − 0.20 cos32°) = 3.535 |
| p8-c | 5.32 m/s | √(2 × 3.535 × 4.0) |
| p9-a | 11.4 m/s | √(0.60 × 9.81 × 22) = 11.38 |
| p9-b | 3.05 m/s | √(9.81 × 0.95) |
| p10-a | 231 N | 9.81 (15 × 0.60 + 60 × 0.40)/1.40 = 231.2 (torques about the axle) |
| p10-b | 505 N | 75 × 9.81 − 231.2 = 504.5 |
| p11-a | 6.82e3 N | GMm/(8.371e6)² = 6823 |
| p11-b | 2640 km | (√2 − 1) × 6371 km = 2639 |
| p12-a | 2.6 au | (1.9 + 3.3)/2 |
| p12-b | 4.19 yr | 2.6^1.5 = 4.192 |
| p12-c | 1.74 | 3.3/1.9 (second law, r_p v_p = r_a v_a) |
| p13-a | 1.47e30 kg | 4π² r³/(G T²), T = 48 × 86400 s |
| p13-b | 1.98e41 kg | v² r/G |

**Comparison with the page (one line per answer id)**

- p1-a: page 3770 (tol 5%) — agrees.
- p1-b: page 3810 (3815 in the solution) — agrees.
- p1-c: page 8.8 — agrees.
- p2-a: page choice 0 "zero" — agrees; the other two choices are wrong.
- p2-b: page 4710 (4714.5 in the solution) — agrees.
- p3-a: 1.6 — agrees. p3-b: 7.2 — agrees. p3-c: 16.2 — agrees.
- p4-a: 0.8 — agrees. p4-b: 0.2 — agrees. p4-c: 0.5 — agrees.
- p5-a: 2.13 — agrees. p5-b: 5.37 — agrees.
- p5-c: expr `2*m1*m2*g/(m1 + m2)` — identical to mine.
- p6-a: 141 — agrees.
- p6-b: page 1.28 (computed with 141.3 N); mine 1.27 with the stated 141 N. The difference (1%) is inside the 5% tolerance, so both are accepted; see warning W1.
- p6-c: 40.5 — agrees.
- p7-a: 123 — agrees. p7-b: 28.4 — agrees.
- p8-a: 49.9 — agrees. p8-b: 3.53 — agrees. p8-c: 5.32 — agrees.
- p9-a: 11.4 — agrees. p9-b: 3.05 — agrees.
- p10-a: 231 — agrees. p10-b: 505 — agrees.
- p11-a: 6820 — agrees. p11-b: 2640 — agrees.
- p12-a: 2.6 — agrees. p12-b: 4.19 — agrees. p12-c: 1.74 — agrees.
- p13-a: 1.47e30 — agrees. p13-b: 1.98e41 — agrees.

No disagreement in any final answer.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| W1 | warning | Problem 6(b) statement and solution | (own problem) The statement fixes the push at "that same 141 N" | Solution step: $a = (141.3 - 100.5)/32 = 1.28$; the check uses $(\mu_s-\mu_k)g$, which also assumes 141.26 N. With the stated 141 N the result is 1.267 ≈ 1.27 m/s². Accepted by the 5% box, but a careful student gets 1.27 and sees 1.28 | Either say "the push that just starts it, 141.3 N" in the statement or compute with 141 N and give 1.27 m/s² (then the $(\mu_s-\mu_k)g$ check is "the same to rounding") |
| W2 | warning | Problem 6(b) statement | — | Part (b)'s statement prints 141 N, the answer to part (a), which the reader sees before answering (a) | Write "Once it slides, you keep pushing with the force you found in (a)" |
| W3 | warning | `data/symbols.json`, meaning of `x` scoped to hs-2-practice | — | "In Problem 1, the x-direction (east); in Problem 7, the extension of the spring". The letter x also appears in $\Delta x$ (displacement) in Problems 3(c) and 8(c), where the popup would give the wrong meaning | Add "in Problems 3 and 8, Δx is the distance travelled (displacement)" to the meaning |
| W4 | warning | Problem 6(c) | — | A cyclist's drag question sits inside "Moving a bookcase", unrelated to the bookcase; readers may look for a link | Rename the exercise (e.g. "Friction and drag") or say "(c) A separate question:" |
| I1 | info | Problem 13(a), check | Sun's mass ≈ 1.99e30 kg | "a little less than the mass of the Sun" for 1.47e30 kg, which is about 0.74 solar masses | "about three quarters of the Sun's mass" would be more exact |
| I2 | info | Problem 5(c) `vars` and mistake hint | — | `vars` allow m₂ > m₁ although m₁ is the heavier mass; the answer is symmetric so this is harmless, but the `m2*g` hint ("the tension is larger because that mass accelerates upwards") is only true for m₁ > m₂ | Optional: m1 [2, 5], m2 [0.1, 1.9] |
| I3 | info | Problem 11(b) hint | — | "Half the field needs r² twice as large" is one step from r = √2 R | Acceptable as a last hint; it leaves the height to compute |

No errors found.

## Formulas and citations
- The set has no `<Formula>` blocks; formulas appear inline in solutions. Every one is a formula of a Block 0–2 lesson: components and Pythagoras (hs-0 vectors, lesson 2.1), $F_\text{net} = ma$ (2.3), third law (2.4), the pulley equations and $a = (m_1-m_2)g/(m_1+m_2)$ (2.5, worked example with 3.0/2.0 kg), $\mu_s F_N$, $\mu_k F_N$, $F_D = \tfrac12\rho C_D A v^2$ (2.6), Hooke's law (2.7), $g(\sin\theta - \mu_k\cos\theta)$ (2.8), $\mu_s g r = v^2$ and $v = \sqrt{gr}$ (2.9), torques about a pivot (2.10), $GMm/r^2$ (2.11), $T^2 = a^3$ in years and au and $r_p v_p = r_a v_a$ (2.12), $M = 4\pi^2 r^3/(GT^2) = v^2 r/G$ (2.13), and the kinematics equations $v_f = v_i + a\Delta t$, $\Delta x = \tfrac12 a\Delta t^2$, $v_f^2 = v_i^2 + 2a\Delta x$ (hs-1 constant-acceleration). All correct.
- The general tension $T = 2m_1m_2g/(m_1+m_2)$ is not in lesson 2.5; the problem asks the reader to derive it, which is fair at this level.
- `source` and `readings` are all §2.0 sources (Siyavula Gr 11 Ch. 2 sections 2.2–2.4, MIT 8.01SC course notes Ch. 7, 8, 9, 17, 18, 25). The intro says the problems are the site's own and the methods those of the lessons; that is accurate. The calcs file cites readings for each value (e.g. `intro-G` to reading2, 2.4); fine.
- Constants: g = 9.81, G = 6.674e-11, M_E = 5.97e24 kg, R_E = 6.371e6 m match the Block 2 lessons. Problem 11(b)'s check uses GM/R² = 9.82 N/kg (correct: 9.816) and states it as what the formula gives, so the difference from 9.81 is explained.

## Arithmetic and answer checks
- Every number in statements, solutions and checks recomputed independently (Python): all correct to the shown rounding, including the checks: 25.9 km/h, 2.2 m/s², 38 kg·m/s each, 4.41 and 6.87 N, 100.5 N, 7.85 N, 31.2 N, 9.98 N, 5.20 m/s², tan 32° = 0.62, 1.50 s, 41 km/h, 235.4 and 88.3 N·m, 735.8 N, handle-torque check 505 N, 1.18e4 N, both 0.58 ratios, 4.91 N/kg, 17.58, 4.147e6 s, 5.30e4 m/s, 1.47e-10 m/s².
- Every shown number has a calcs entry (checked by id list in `calcs/hs-2/hs-2-practice.yaml`); each `<Answer calc="…">` has an entry with `answer:` and the same expected value.
- Tolerances: all 5%; every answer box value lies within 5% of the exact result. Numbers rounded in the boxes (3810, 4710, 123, 505) are well inside.
- p5-c: `vars` keep the formula finite (m₁ + m₂ ≥ 0.6); each mistake is different from the answer over the ranges and each hint is true of its formula (with the caveat I2).
- p2-a choices: only "zero" is right; the explanations of why the others are wrong are correct.
- Every solution ends with a Check step (units, a limit, an alternative route or a number). Good.
- Points: Problems 1–4: 3+3+3, 4+5, 3+3+3, 3+3+3 = 9 each; Problems 5–12: 3+2+3, 3+3+2, 4+4, 2+3+3, 4+4, 4+4, 4+4, 2+3+3 = 8 each; 36 + 64 = 100. Problem 13 is `optional`, 5+5 = 10, and says it does not count.
- Hints: none states a final result (I3 is close but leaves the computation).

## Only earlier terms
- Every idea used is in Blocks 0–2: resultant and components (hs-0, 2.1), equilibrium and constant velocity (2.2), free-body diagrams (2.1, 2.5), static/kinetic friction and drag with v² (2.6), extension and spring constant (2.7), slopes (2.8), centripetal force, flat bend and least speed at the top of a vertical circle, including the whirled bucket in the text (2.9), centre of gravity and torques (2.10), gravitational field strength in N/kg (2.11), semi-major axis, au, perihelion/aphelion and the second and third laws (2.12), weighing with orbits and dark matter (2.13), equations of constant acceleration (hs-1).
- Symbols reused with two meanings: T (tension in Problem 5, period in 12–13), a (acceleration; semi-major axis in 12), x (direction in 1, extension in 7). Each is clear from its problem, and `data/symbols.json` has page-scoped meanings naming the problems for T and a; the x meaning misses Δx in Problems 3 and 8 (W3).

## Coverage
- One problem per lesson: 2.1 (P1), 2.2 (P2), 2.3 (P3), 2.4 (P4), 2.5 (P5), 2.6 (P6), 2.7 (P7), 2.8 (P8), 2.9 (P9), 2.10 (P10), 2.11 (P11), 2.12 (P12), 2.13 (P13, optional). All thirteen lessons are practised, at VWO level.

## Where this leads
- A practice set has no `leadsTo` or `towards`; prerequisites is the block's last lesson, `towards-the-universe-weighing-with-orbits`. The dark-matter remark in Problem 13(b)'s check agrees with that lesson (flat rotation curves; mass from orbits compared with visible mass).

## Licensing and AI terms
- No problem copied: compared with Siyavula 2.2–2.4 worked examples and exercises (tugboats there are 100 kN each with a range question, not components; no balloon, scooter, astronaut, bookcase, spring, wheelbarrow, 2000 km satellite or half-g height) and with MIT 8.01SC Ch. 7, 8, 9, 18, 25 examples (none match). Compared with the Block 2 lessons' worked examples: P5 has the same set-up as lesson 2.5's pulley example and P13(b) is close to lesson 2.13's Milky Way example (2.3e20 m, ~200 km/s, ~1e41 kg), both with new numbers; acceptable for practice, noted only.
- No figures. No Siyavula logo or "Everything Science" branding; Siyavula is named only as a credit in the intro. MIT chapters read are CC BY-NC-SA with no rights-reserved notice. No NASA or ESO material. No forbidden source cited or used.

## Notes
- `set: 1` is forced by the schema; fine.
- The previous review file at this path was overwritten, as the reviewer instructions require.

## Resolution (2026-11-20, by the page author)

- W1: Problem 6(b) now computes with the push of (a) rounded to 141 N: $a = (141 - 100.5)/32 = 1.27$ m/s². Answer box changed from 1.28 to 1.27; calcs `p6-b` now uses the 141 N push (expected 1.27). The check keeps $(\mu_s - \mu_k)g = 1.28$ m/s², now described as the result with the unrounded push, "the same to rounding" (calcs `p6-b-check` wording and shown string updated). Blind solve: the page answer for p6-b (1.27) now equals the reviewer's 1.27.
- W2: Part (b) no longer prints 141 N: "you keep pushing with the force you found in (a), rounded to three significant figures".
- W3: New wording of the `x` meaning for this page sent to the coordinator in `sym-fix-hs-2-practice.json` (adds "in Problems 3 and 8, Δx is the distance travelled (displacement)"); data/symbols.json not edited here.
- W4: Problem 6 renamed "Friction and drag: a bookcase and a cyclist", with an opening line saying (a) and (b) are about a bookcase and (c) about a cyclist, and (c) starts "Now a separate situation." Points unchanged (3 + 3 + 2 = 8; total still 100).
- I1: Problem 13(a) check now says "about 0.74 of the Sun's mass: an ordinary star, a little lighter than the Sun"; new calcs entry `p13-a-sun` (Sun's mass 1.989 × 10³⁰ kg, as in lesson 2.13).
- I2: p5-c `vars` narrowed to m1 [2, 5], m2 [0.1, 1.9], so m₁ > m₂ and the `m2*g` hint is always true.
- I3: Problem 11(b) hint softened to "How must $r$ change for the field to fall to half its value?"
