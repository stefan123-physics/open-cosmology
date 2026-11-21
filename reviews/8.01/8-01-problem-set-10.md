---
page: content/year-1/8.01/8-01-problem-set-10.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset10/ (read: PDF re-downloaded, same MD5 as the scratch copy; text via pdftotext, every drawing viewed as a rendered page image)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (read; PDF same as the scratch copy)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter17/ (read; PDF same as the scratch copy)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter18/ (read; PDF same as the scratch copy)
verdict: pass-with-notes
---

# Review: Problem Set 10: moments of inertia, torque and static equilibrium

## Blind solve

I solved the set from the stripped statements and MIT's PDF only (drawings viewed). The answers below were written into this file before I opened the full page or its calcs file.

### My answers
- p1-a1: I_cm = M R^2 / 2.
- p1-a2: I_rim = 3 M R^2 / 2 (parallel axis theorem).
- p1-b: I = rho*pi*d*(ro^4 - ri^4)/2 = M(ro^2 + ri^2)/2 with M = 0.07633 kg; I = 4.363e-5 kg m^2, so type 4.36.
- p2-a: I = M1 R^2/2 + M2 R^2/8.
- p2-b: a = 2 Mb g / (2 Mb + 4 M1 + M2).
- p2-c: t = sqrt(d (2 Mb + 4 M1 + M2) / (Mb g)).
- p3-a: T = m g / (2 sin beta) = 39.2 N.
- p3-b: alpha = 30.0 degrees, above the rod, pointing away from the wall.
- p3-c: F = 39.2 N.
- p4-a1: N1 (downhill foot) = (m g/2)(cos alpha + 2 h sin alpha / d).
- p4-a2: N2 (uphill foot) = (m g/2)(cos alpha - 2 h sin alpha / d).
- p4-b: d = 2 h tan alpha.
- p5-a1 (left wall, rotation counterclockwise as in MIT's drawing): N1 = m g (1 + mu) / (sqrt2 (1 + mu^2)).
- p5-a2 (right wall): N2 = m g (1 - mu) / (sqrt2 (1 + mu^2)).
- p5-b: tau = mu R (N1 + N2) = sqrt2 mu m g R / (1 + mu^2), in the direction of the rotation.
- p6-a: a = 2 m g sin beta / (2 m + mp).
- p6-b: t = sqrt(d (2 m + mp) / (m g sin beta)).

### Comparison (one line per answer id)
- p1-a1: the page has `M*R^2/2`. Agree.
- p1-a2: the page has `3*M*R^2/2`. Agree.
- p1-b: the page has 4.36 (tolerance 1%). Agree (4.3633).
- p2-a: the page has `M1*R^2/2 + M2*R^2/8`. Agree.
- p2-b: the page has `Mb*g/(Mb + 2*M1 + M2/2)`. Agree: it is mine with the top and bottom multiplied by 2 (ratio 1 to machine precision at 5 random points).
- p2-c: the page has `sqrt(d*(2*Mb + 4*M1 + M2)/(Mb*g))`. Agree.
- p3-a: the page has 39.2 N. Agree.
- p3-b: the page has 30 degrees. Agree.
- p3-c: the page has 39.2 N. Agree.
- p4-a1: the page has `m*g*(cos(alpha)/2 + h*sin(alpha)/d)`, downhill foot. Agree (ratio 1 at 5 random points).
- p4-a2: the page has `m*g*(cos(alpha)/2 - h*sin(alpha)/d)`, uphill foot. Agree.
- p4-b: the page has `2*h*tan(alpha)`. Agree.
- p5-a1: the page has `m*g*(1 + mu)/(sqrt(2)*(1 + mu^2))`. Agree. I checked it with a full 2D vector solve: contact points, the surface velocity omega x r for counterclockwise rotation, and friction against that velocity (mu = 0.1, 0.3, 0.8, m = 2 kg). N1 = 15.094, 16.529 and 15.211 N, which matches the formula to 1e-12.
- p5-a2: the page has `m*g*(1 - mu)/(sqrt(2)*(1 + mu^2))`. Agree (same vector solve: 12.350, 8.900 and 1.690 N).
- p5-b: the page has `sqrt(2)*mu*m*g*R/(1 + mu^2)`. Agree. The vector solve gives a friction torque per metre of R of -2.744, -7.629 and -13.521 N m (clockwise, against the rotation), the same size as the formula.
- p6-a: the page has `m*g*sin(beta)/(m + mp/2)`. Agree.
- p6-b: the page has `sqrt(d*(2*m + mp)/(m*g*sin(beta)))`. Agree.

There are no disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1(b) statement | "The density of the washer is rho = 7.8 x 10^3 kg m^-3"; no material is named | "A steel washer ... The density of the steel is ..." | Harmless, since 7.8e3 kg/m^3 is the density of steel, but MIT does not say steel. Optionally write "the density of the washer". |
| 2 | info | Problem 2, description of the drawing | The drawings are labelled "side view" (two circles, the rope of length L to the post, the block) and "top view" (the discs at a slant) | "face on" and "at a slant" | The page correctly describes what is drawn. Optionally mention MIT's own labels, because a reader who opens the PDF sees "side view" on the face-on drawing. |
| 3 | info | Problems 2, 5, 6 | MIT asks one question in each | Extra steps (2a, 2b, 5a, 6a) are added and each is marked "our own step". The assumptions (massless rope, no slipping, kinetic friction, mu < 1) are marked as ours too | None. The page stays faithful to MIT and flags the added parts. |
| 4 | info | Problems 3 and 4 | The course notes work these as Examples 18.2 and 18.3, with the same data | The intro says so. The Problem 3 solution follows the notes' route (torques about the hinge, then the force components), reworded. Problem 4 uses its own route (torques about the uphill foot, not about the centre of mass) | None. No sentences are copied from the notes. |

## Arithmetic and answer checks
- I recomputed every number in Python. Washer: ro^4 = 9.235e-7 and ri^4 = 0.332e-7, difference 8.903e-7 m^4; prefactor 49.0 kg/m^2; I = 4.363e-5. Full disc 0.0942 kg and 4.526e-5; hole 0.0179 kg and 0.163e-5; shares 19% and 3.6% (the page says "less than 4%"); washer mass 0.0763 kg. All correct.
- Problem 2 example (M1 = 4, M2 = 2, Mb = 1 kg, d = 1 m): a = 0.98 m/s^2, t = 1.43 s, free fall 0.45 s, v^2 = 1.96. Energies 0.98 J + 8.82 J = 9.8 J = Mb g d. Correct.
- Problem 3: T = 39.2 N, T sin 30 = 19.6 N, T cos 30 = 33.95 N (the page writes 33.9), F = 39.2 N, alpha = 30 deg. The argument that the three forces meet at one point, and the check with torques about the right end, are correct.
- Problem 4 example (70 kg, 20 deg, h = 1.0 m, d = 0.80 m): N1 = 616 N, N2 = 29 N, sum 645 N = 686 cos 20; narrowest stance 0.73 m. Correct. I checked the signs of the torque equation about the uphill foot with r x F (x downhill, y out of the slope).
- Problem 5 example (2.0 kg, 0.10 m, mu = 0.30): mg/sqrt2 = 13.86 N, N1 = 16.53 N, N2 = 8.90 N, friction forces 4.96 and 2.67 N, torque 0.763 N m by both routes. Correct.
- Problem 6 example (m = 2, mp = 4 kg, 30 deg, 1 m): a = 2.45 m/s^2, t = 0.90 s; sliding freely, 4.9 m/s^2 and 0.64 s. Correct.
- Answer boxes: every `expr` and `value` equals its solution's result. The `vars` ranges keep every formula finite and physical. I checked p4-a2 at its worst corner (alpha = 0.4, h = 1.1, d = 1.0): N2 = 0.032 mg, still above zero. For p5, mu <= 0.8 < 1. The 1% number tolerances are tight enough (for p3-b that is +/-0.3 deg).
- Mistakes: I checked each listed wrong formula against its hint, and every hint is true of its formula. For example, p2-b `Mb*g/(Mb + M1 + M2/4)` is exactly what using R/2 only once gives; p5 `m*g/(sqrt(2)*(1 - mu))` is what giving both friction forces the same sign gives; the left-wall-only p5-b mistake equals mu R N1. Each mistake differs from the answer over its vars.
- Hints: none gives a final result away. p5 Hint 2 gives the two friction directions. That is a key step but not the answer, so it is acceptable.
- Every solution ends with a "Check the result" step (units, plus limits or a numerical example).
- Calcs file: every answer id has an entry that reaches it by an independent route (numerical integral, numerical solve, energy, or torques about another point). I ran `pytest tests/calc -k problem-set-10` without writing a cache, and everything passed.
- Points: the parts add up to each exercise's total (8, 8, 8, 8, 8, 6), and the intro's total of 46 points is right.

## Citations
I checked every citation by matching each equation number to the printed page footer of the course-notes PDFs (pdftotext, one page at a time).
- (16.2.11) is on p. 16-9; (16.2.15) and (16.2.16) on p. 16-10; (16.2.19) and (16.2.20) on p. 16-11 (Example 16.3); (16.3.15) on p. 16-14. Example 16.4 is indeed a pulley with block m2 on a frictionless incline and block m1 hanging, and the formula as quoted matches. Correct.
- (17.3.23) is on p. 17-19. It reads (tau_S^ext)_z = I_S alpha_z and sits in Section 17.4.1 despite its number. (17.3.40) is on p. 17-22 (a = R alpha_z, in Example 17.10). Correct.
- (18.1.1) and (18.1.2) are on p. 18-2; (18.4.1) and (18.4.2) on p. 18-8; (18.4.3) to (18.4.5) on p. 18-9; (18.4.8) on p. 18-10; (18.4.13) to (18.4.16) on p. 18-11. Correct, and the formulas match the notes (the notes write the length as l, the page as L).
- Every `readings[].location` entry matches the notes' contents: Examples 16.2 to 16.4 in Sections 16.3 and 16.4; Section 17.4.1 and Example 17.10; Section 18.1 and Examples 18.2 and 18.3.
- The `cite="mit"` formulas from the page's own solutions name the right problem and PDF page (pp. 1 to 6).

## Coverage and order
- All six MIT problems are here, in MIT's order, with MIT's parts (1a i and ii, 1b; 3a to 3c; 4a and 4b) and MIT's data. Nothing is left out, and the added steps are marked as ours.
- `covers: [28, 29, 30, 31]` matches the four linked lessons (Lectures 28 to 31). The claim that static equilibrium has no lesson of its own on this site is true: no 8.01 lesson covers it, and the course syllabus here has no lecture for Chapter 18.

## Licensing
- MIT's problem set and Chapters 16 to 18 carry no "All rights reserved" or "Courtesy of" notices. I checked with grep on the extracted text and by viewing the drawings. No figure is redrawn: every drawing is described in words.
- No OpenStax or LibreTexts material. The statements are in the page's own words; only short standard phrases echo MIT ("one foot uphill and one downhill", "midway between the feet").

## Notes
- MIT's arrow in Problem 5 (zoomed render of p. 5) starts at the top of the cylinder and curves down the left side, so the rotation is counterclockwise, as the page says. MIT draws the two walls the same and does not label them. The page's labelling (N1 for the left wall, N2 for the right) is its own and is used consistently.
- The linked lessons exist and say what the page claims they say: `torque-and-cross-product` (for torques, the weight acts at the centre of mass), `torque-and-angular-acceleration` (a mass falling on a string wound round a wheel, and the section "The same problem with energy"), `moment-of-inertia` (parallel axis theorem), `contact-forces` (kinetic friction).
- No em dashes and no `## Summary` section; the headings are the problems.
- Symbols: page-scoped meanings exist for alpha, beta, mu, tau, omega, a, T, x, y, t, d, m and others. I did not run `content:check`; whoever started this review should run it.

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

No errors or warnings.
1. Done: "the density of the washer", as MIT has it.
2. Done: Problem 2 now gives MIT's labels "side view" and "top view" for its two drawings.
3, 4. No change.
Status set to reviewed.
