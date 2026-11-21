---
page: content/year-1/8.01/8-01-problem-set-12.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset12/ (read: PDF text, and all five drawings rendered at 150 to 400 dpi)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter20/ (read, pdftotext; footers checked per page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter21/ (read, pdftotext; footers checked per page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (read, pdftotext; footers checked per page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter19/ (read, pdftotext; footers checked per page)
verdict: pass-with-notes
---

# Review: Problem Set 12: rolling

## Blind solve

### My answers (written to this file before the full page or its calcs were opened)

Figure readings made before solving. Problem 2 (400 dpi crop): the arc at the ring centre runs from below the centre round its right side to an arrowhead pointing up, so the ring turns **counterclockwise**; the arc inside the ball runs from upper left over the top to an arrowhead at lower right, so the ball spins **clockwise**; the v_cm arrow points up and to the right along the ring, i.e. counterclockwise about the ring centre. Problem 4: the dashed string leaves the **bottom** of the dashed axle circle (the side facing the plane) and runs parallel to the plane, up the slope.

- p1a: x(t) = x0 + V t + R sin(V t / R)
- p1b: y(t) = R + R cos(V t / R)
- p2a: contact-point no-slip condition (v_cm - b omega) = R Omega, so v_cm = R Omega + b omega
- p2b: Omega_b = (R Omega + b omega)/(R - b)
- p3a: L about ridge = m v0 s/2, I_ridge = 2 m s^2/3, omega_a = 3 v0/(4 s)
- p3b: (1/2)(2ms^2/3) omega_a^2 = m g (s/2)(sqrt2 - 1), v0_max = sqrt(8 g s (sqrt2 - 1)/3)
- p4a: f = m g sin(phi)/3 - 5F/9 (with a = 4F/(9m) - (2/3) g sin(phi))
- p4b: F_max = (3/5) m g (sin(phi) + 3 mu cos(phi)), from |f| = mu m g cos(phi) with f < 0
- p5a: omega0 = 5 v0 h/(2 R^2)
- p5b: v_f = (5 v0 + 2 R omega0)/7
- p5c: h/R = 4/5

### Comparison (one line per answer id)
- p1-a: page `x0 + V*t + R*sin(V*t/R)`; same as mine. Agree.
- p1-b: page `R + R*cos(V*t/R)`; same. Agree.
- p2-a: page `R*Omega + b*omega`; same, and the page reads the arrow senses in MIT's drawing exactly as I did (ring counterclockwise, ball clockwise). Agree.
- p2-b: page `(R*Omega + b*omega)/(R - b)`; same. Agree.
- p3-a: page `3*v0/(4*s)`; same. Agree.
- p3-b: page `sqrt(8*g*s*(sqrt(2) - 1)/3)`; same. Agree.
- p4-a: page `m*g*sin(phi)/3 - 5*F/9`; same. Agree.
- p4-b: page `3*m*g*(3*mu*cos(phi) + sin(phi))/5`; same (checked by value at three random points, difference below 1e-16). Agree.
- p5-a: page `5*v0*h/(2*R^2)`; same. Agree.
- p5-b: page `(5*v0 + 2*R*omega0)/7`; same. Agree.
- p5-c: page value 0.8, tolerance 1%; mine 4/5. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 2 statement | Gives only "the angular speed of the ball is ω" and the ring's Ω "as shown in the figure"; does not say in which frame ω is measured | States the arrow senses read from the drawing, and that both angular speeds are measured by a non-rotating observer, marked as the page's own reading | None needed; the assumption is declared and matches the drawing (checked at 400 dpi). |
| 2 | info | Problems 1, 2, 4, 5 | One question per problem (only Problem 3 has parts (a), (b)) | Splits into parts and adds 2(b) | Already said on the page each time ("our addition", "a step on the way"). |
| 3 | info | Problem 3 statement | Speed called v in the text and v0 in the questions | Uses v0 throughout and says so | None. |
| 4 | info | Problem 1 statement | "center of mass of the bicycle" | Speaks of the wheel centre, noting that MIT's figure shows the wheel alone (figure checked: it labels the wheel centre "cm") | None. |
| 5 | info | Introduction | (n/a) | Tells the reader that Example 20.1 of the notes, quoted in the rolling-kinematics lesson, is Problem 1 with another origin | Fine as is; it is honest and asks the reader to try first. |

## Arithmetic and answer checks
- All own-number checks recomputed: 2πR/V = 0.4712 s; 2πR = 1.885 m; x = 2.885 m shown as 2.88 (correct rounding of 2.88496); v_cm = 1.6 m/s; Ω_b = 1.6/0.45 = 3.556 rad/s; 3/(4√2) = 0.530; K after/before = (3/16)/(1/2) = 3/8; v0 = √(8·9.8·0.20·0.41421/3) = 1.471 m/s, ω_a = 5.518 rad/s, rise 0.0414 m; F_max = 0.588·(0.9 cos 20° + sin 20°) = 0.698 N, μN = 0.2763 N, f = 0.1117 − 0.3880 = −0.2763 N (equal to μN), a = 3.104 − 2.235 = 0.87 m/s²; t = 2·1.4/(7·0.2·9.8) = 0.204 s, v_f = 1.8 m/s. All correct.
- Side results checked: f changes sign at F = (3/5) mg sin φ; the smallest-pull remark F ≥ (3/5) mg (sin φ − 3μ cos φ) is right; the contact-point route (lever arms 2R/3 and R sin φ, I = (3/2) mR²) gives the same a; the rotating-frame route of Problem 2 gives b(ω+Ω) + (R−b)Ω = RΩ + bω; the glued-ball limit ω = −Ω gives Ω_b = Ω; h = (2/5)R gives ω0 = v0/R; the time-domain check of 5(c) (v = v0 + μgt, ω = ω0 − (5μg/2R)t) gives t = 2v0/(7μg) and v = (9/7)v0.
- Each listed mistake recomputed, and its hint is true of that formula: p3-a 3v0/s (I_cm only), 6v0/(5s) (d = s/2), √(3/2)v0/s (energy kept), √2 v0/s (centre keeps v0); p3-b √(gs(√2−1)) (all KE kept), √(8√2 gs/3) (full height), the unrooted form, the factor-of-two form; p4-a: string on the far side of the axle gives mg sin φ/3 − F/9, no pull torque gives (mg sin φ − F)/3 (both derived independently); p4-b: no pull torque gives mg(3μ cos φ + sin φ), friction at its limit up the slope gives the minus sign, level ground gives (9/5)μmg; the p1, p2 and p5 mistakes likewise correct.
- `vars` ranges: all finite and physical (R > b in Problem 2; h < R in Problem 5; Rω0 > v0 over the p5-b range, consistent with forward spin). p5-c tolerance 1% accepts 3 significant figures and rejects 0.4 and 2/7.
- Every solution ends with a check (units plus a limit and/or a number). No hint gives a result away.
- Points: 10 + 8 + 14 + 14 + 14 = 60, and the parts add up; MIT gives none, and the page says the points are its own.
- Calcs file: every answer box has an identity entry by an independent route (numerical integral, rotating frame, direct moment-of-inertia integral, contact-point torques, time-domain solve), and every number on the page has an entry. I did not run `npm run calc:test` (read-only review); the entries' formulas were checked by hand.

## Citations (course notes, printed page footers checked per PDF page)
- Eq. (20.2.13) p. 20-5; (20.2.30)/(20.2.31) p. 20-8 (Example 20.1); (20.2.39) p. 20-9; (20.2.1) p. 20-2; (20.3.15) p. 20-15: all correct.
- Eqs. (21.4.1) p. 21-6 and (21.4.4) p. 21-7; Example 21.5 (bowling ball, starts without spin, angular momentum about a point on the ground); (21.6.68) and (21.6.70) on p. 21-23: all correct.
- Eq. (16.2.16) p. 16-10 (in Section 16.3.3) and (16.3.2) p. 16-12 (Section 16.4): correct, and they match the readings' `location`.
- Eq. (19.5.36) p. 19-21 (Section 19.8): correct.
- The formulas quoted from the notes match the notes' content (rolling condition, bead position, velocity addition, orbital plus spin, F = mA and τ = Iα, parallel axis theorem, fixed-axis kinetic energy, conservation of L, (7/5)mRv_f).

## Coverage and order
- All five MIT problems, in MIT's order, with the same physics. Problem 2's drawing (arrow senses) and Problem 4's drawing (string from the bottom of the axle, parallel to the plane, up the slope) are described correctly; the Problem 1, 3 and 5 drawings are described correctly too (bead turned clockwise by θ; cube before/after with a small ridge; level cue at height h above the centreline).
- Claims about lessons checked: rolling-kinematics quotes Eq. (20.2.39); rolling-dynamics has the incline formula and "Maximum pull" for a string from the bottom of the axle, which gives (9/5)μmg with b = R/3 and I = ½mR²; moment-of-inertia has the parallel axis theorem; torque-and-angular-impulse has conservation of angular momentum about a pivot. All linked slugs exist.

## Licensing
- No MIT figure is redrawn; each drawing is described in words. No "rights reserved" or "Courtesy of" notice in the problem set or in the four chapters cited. Wording is the page's own; no sentences copied from MIT. No OpenStax or LibreTexts material.
- No em dashes; no `## Summary` with answers.
- Symbols: the 50 meanings that apply to this page were listed; no existing meaning was reworded or widened (the page was only added to page lists of fitting meanings, or got new page-scoped meanings).

## Notes
- info: Problem 3 follows MIT in assuming the cube stays on the ridge while it tips; the page's bracket on the exact border value is a good touch.
- info: p5-c lists no `mistakes`; optional values to add: 0.4 (rolling from the start, h = 2R/5) and 2/7.
- info: reviewed from worktree commit 7a3919d; `content:check` and `calc:test` were not run by the reviewer.

COUNTS: errors=0 warnings=0 info=8

## Resolution (2026-11-21, by the page author)

No errors or warnings to fix; the info items need no change. Status set to `reviewed`.
