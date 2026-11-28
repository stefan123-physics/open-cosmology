---
page: content/year-1/8.02/8-02-problem-set-11.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving10/ (read: local PDF and pdftotext; page 1 rendered for the figure)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch14_inter_diffr/ (read: Sections 14.12 and 14.13, pp. 31 to 34)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: Sections 13.7, 13.8, 13.8.1, 13.13, 13.14.1 and 13.14.6, pp. 21 to 29 and 45 to 48)
verdict: needs-changes
---

# Review: Problem Set 11: double-slit interference, diffraction and radiation

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree page: `.claude/worktrees/ps-802-11/content/year-1/8.02/8-02-problem-set-11.mdx`, calcs `calcs/8.02/8-02-problem-set-11.yaml`, symbols `data/symbols.json` (page-scoped meanings).

## Blind solve

Written from `stripped-set-11.mdx`, `solving10` and Chapters 13 and 14 of the notes only, before opening the page, its calcs file or its symbols. Numbers by Python (`scratchpad/rv11py/s.py`), each by a second route (time average done numerically, phasor sum, numerical maximisation of sinc^2, force balance recomputed).

My answers:
- p1a (self): path difference m*lam means crests meet crests: in phase, fields add.
- p1b (self): the short perpendicular line cuts off Delta r = d sin(theta) (far screen: rays parallel), so d sin(theta) = m lam.
- p1c (self): half-wavelength odd multiples: crest meets trough, fields cancel.
- p1d: y = m lam D / d.
- p1e: y = (m + 1/2) lam D / d (m = 0 nearest O).
- p1f: O is dark (path difference 0 plus half cycle delay: destructive).
- p2a: phi = 2 pi d sin(theta) / lam.
- p2b (self): A = wt, B = wt + phi, (A+B)/2 = wt + phi/2, (A-B)/2 = -phi/2, cos even.
- p2c: <E^2> = 2 E0^2 cos^2(phi/2) = E0^2 (1 + cos phi) (numerical average at E0 = 1.3, phi = 0.7: 2.98258 both).
- p2d (self): cos^2(phi/2) = 1 when phi/2 = m pi, i.e. d sin(theta) = m lam.
- p2e: fringe spacing lam D/d = 3.99 mm; I/Imax at y = 0.50 mm: cos^2(pi d y/(lam D)) = 0.8529 (exact angle 0.85286, same).
- p2f: (show) <(E1+E2)^2> gives I1 + I2 + 2 sqrt(I1 I2) cos phi; Imin/Imax = (1 - 1/2)^2/(1 + 1/2)^2 = 1/9 = 0.1111.
- p3a: lam L / d = 60.0 um.
- p3b: 3 lam L / d = 180 um (third-order bright fringe, m = 3; the page's wording settles the MIT phrase "third-order fringe" as bright m = 3, the usual meaning).
- p3c: decreases, decreases, increases.
- p3d: the two headlights are independent, incoherent sources (no fixed phase relation; also not monochromatic).
- p3e: (show) three equal phasors sum to zero when phi = 2 pi n/3, n not a multiple of 3; first minimum phi = 2 pi/3 = 2.094 rad.
- p3f: lam L/(3d) = 1.80 mm.
- p4a: the factor 1/(beta/2)^2 also falls with beta, so the maximum of the product is shifted (to slightly smaller beta/2) from the maximum of sin^2.
- p4b (self): dI/d(beta/2) = 0 gives x cos x - sin x = 0, i.e. tan x = x (x = beta/2).
- p4c: beta/2 = 4.4934 and 7.7253 (vs 1.5 pi = 4.7124, 2.5 pi = 7.8540).
- p4d: I/I0 = 0.04719.
- p4e: d/a = 20; m = +-20 fall on the diffraction zeros and are missing: m = -19..19, 39 fringes.
- p4f: m = -3..3 inside, so 3 < d/a <= 4 (d/a = 4 gives exactly 7 with m = +-4 missing; 3.5 gives 7; 3 gives 5; 4.2 gives 9).
- p4g: the central maximum becomes narrower.
- p5a: accelerated (non-uniformly moving) charges.
- p5b: power per area = sigma E1 v = sigma^2 v^2 / (2 eps0 c) (notes Eq. 13.8.9, p. 28, prints this result).
- p5c: rod = lam/4 = c/(4f) = 8.33 cm.
- p5d: the steel frame is a conductor that reflects/absorbs (shields) the waves (Faraday-cage effect).
- p5e: A = G M m c/(2 I_E r_E^2) = 1.086e6 m^2 (about 1.09 km^2); independent of position, as both forces fall as 1/r^2.

### Comparison (my answer vs the page, one line per box)

- p1-d: m lam D/d = page `m*lam*D/d`. Agree.
- p1-e: (m + 1/2) lam D/d = page. Agree.
- p1-f: dark at O = page choice 3 ("a dark fringe where the bright one was"). Agree.
- p2-a: 2 pi d sin(theta)/lam = page. Agree.
- p2-c: 2 E0^2 cos^2(phi/2) = page. Agree.
- p2-e-spacing: 3.99 mm = page 3.99. Agree.
- p2-e-ratio: 0.8529 = page 0.853. Agree.
- p2-f: 0.1111 = page 0.1111. Agree.
- p3-a: 60.0 um = page. Agree.
- p3-b: 180 um = page. Agree.
- p3-c: shrinks; shrinks; grows = page choice 1. Agree.
- p3-d: incoherent sources = page choice 2. Agree.
- p3-e: 2.094 rad = page. Agree.
- p3-f: 1.80 mm = page. Agree.
- p4-a: falling 1/(beta/2)^2 moves the peak to smaller beta = page choice 0. Agree.
- p4-c-first: 4.4934 = page 4.493. Agree.
- p4-c-second: 7.7253 = page 7.725. Agree.
- p4-d: 0.04719 = page 0.0472. Agree.
- p4-e: 39 = page 39 (tolerance 0.4 rejects 40 and 41). Agree.
- p4-f: 3a < d <= 4a = page choice 3. Agree.
- p4-g: narrower = page choice 1. Agree.
- p5-a: accelerated charges = page choice 2. Agree.
- p5-b: sigma^2 v^2/(2 eps0 c) = page. Agree.
- p5-c: 8.33 cm = page. Agree.
- p5-d: conducting frame reflects/shields = page choice 0. Agree.
- p5-e-area: 1.086e6 m^2 = page 1.086e6. Agree (force balance recomputed: 9.7834 N on both sides at r_E).
- p5-e-where: independent, both 1/r^2 = page choice 1. Agree.

No disagreement on any final answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(c), listed mistake `2*E0^2` | (physics) two incoherent sources of amplitude E0 give <E^2> = E0^2/2 + E0^2/2 = E0^2; the page's own check in 2(c) says the phase-averaged value is E0^2 | hint: "That is what two incoherent sources give: their intensities just add." 2E0^2 is not the incoherent value; it is the in-phase (phi = 0) value | Change the hint to: "That is the value only where the waves arrive in step (phi = 0). Elsewhere the result depends on the phase shift." (Or change the mistake to `E0^2` and keep the incoherent-sources hint, which is then true.) |
| 2 | warning | Problem 3 intro | Additional Problem 14.13.3 is entirely on p. 33 (14.13.4 and 14.13.5 also start on p. 33) | "14.13.3 (pp. 33 to 34)" | Write "14.13.3 (p. 33)". |
| 3 | warning | Problem 5(b) | Notes Section 13.8.1 derives exactly this, Eqs. (13.8.7) to (13.8.9), p. 28, printing sigma^2 v^2/(2 eps0 c) | "(Our addition.)" with no word that the result is printed in the notes; the solution then cites Eq. (13.8.9) | As in 2(c), say so: "(Our addition: the notes work this out in Section 13.8.1, p. 28; here you do it.)" |
| 4 | info | Problem 3(b) | "the third-order fringe" (unqualified) | Statement specifies the third-order bright fringe, m = 3; solution notes the dark alternative (150 um) | None; the usual reading, stated in the statement. |
| 5 | info | Problem 3(f) | "the spacing between the successive minima" | Asks for n = 1 to n = 2 (1.80 mm) and explains the 3.60 mm gap across the principal maximum | None; a fair, stated narrowing. |
| 6 | info | Problem 4(c) | asks for the values of beta | asks for beta/2 | None; equivalent and stated. |
| 7 | info | Problem 4(a) | condition beta/2 = (m + 1/2) pi with m = 1, 2, 3, ... | no range of m given | Optional: add "m = 1, 2, 3, ...". |

Fidelity otherwise: Problem 1 follows Questions 1 to 5 and Problem 2 Questions 6 to 9 in MIT's order; the session figure (rendered, p. 1) matches the description in words (slit 1 above slit 2, O across from the midpoint, P at height y, angle theta, r1, r2, the perpendicular from slit 1 cutting off Delta r on ray 2). All problems come from the session, Additional Problems 14.13.1 to 14.13.6 and 13.14.1, and Conceptual Questions 14.12 Q1, Q3, Q4 and 13.13 Q2, Q4. No Solved Problem is used. Our numbers are marked "our choice", our questions "(our addition)".

## Arithmetic and answer checks
- Every number recomputed (script `scratchpad/rv11py/s.py`): 3.99 mm, phi = 0.787, half 0.394, 0.853 (small-angle and exact both 0.85286), an eighth of a spacing (0.1253), 1/9, 60.0/180/150 um, 2 pi/3 = 2.094, 1.80/3.60 mm, roots 4.4934 and 7.7253, shifts 4.6% and 1.6%, sin(4.4934) = -0.9761, 0.0472 and 0.0450, d/a = 20, 39 and 41, lam = 0.333 m, 8.33 cm, A = 1.086e6 m^2 (about 1042 m on a side, so "a kilometre on each side" is fair).
- Every calcs `shown:` string was found verbatim in the page text (script check). No em dashes, no control characters.
- Formula boxes: mistakes differ from the answer over the whole `vars` ranges (p1-d: D in [1,3] and d in [0.1,0.5] are disjoint, so the d/D swap never coincides; p1-e: (m + 1/2) = m/2 only at m = -1; p2-a: cos = sin only at theta = 0.785, outside [0.05, 0.6]; p2-c: cos^2 phi = cos^2(phi/2) first at phi = 2.094, outside [0.2, 1.9]; p5-b: v >= 2 and sigma v >= 4 keep the mistakes apart). Each hint is true of its formula except the `2*E0^2` hint in p2-c (error 1). The p5-b "one side" hint is true (Eq. 13.8.12, p. 29).
- Tolerances reject the obvious slips: p2-e-ratio rejects cos^2(phi) = 0.498; p4-c rejects 1.5 pi (4.9% off) and 2.5 pi (1.7% off) at 0.5%; p4-d rejects 0.0450 (4.7% off); p4-e (0.4) rejects 40 and 41; p5-e (2%) rejects the absorbing-sail 2.17e6; p5-c rejects the half-wave 16.7 cm; p3-b rejects 150; p3-f rejects 3.60.
- Solutions: every step checked; each part with a number or formula ends with a check (units, limit or number). 1(b) geometry correct (the angle at slit 1 opposite Delta r equals theta). 2(f) cross-term average correct. 4(b) derivative correct. 5(b) check against Eq. (13.8.12) correct.
- Citations checked against printed page numbers: session pp. 1 to 4 (Q2 and Q4 on p. 2; Q5, Q6 and the identity on p. 3; the summed field, the intensity, Q8 and Q9 on p. 4); Eq. (13.7.5) p. 21; Eqs. (13.8.6) and (13.8.9) p. 28; Eq. (13.8.12) p. 29; Section 13.8 starts on p. 22; 13.13 Q2 p. 45 and Q4 p. 46; 13.14.1 p. 46; 13.14.6(c) p. 48 (1350 W/m^2); 14.12, 14.13.1 and 14.13.2 p. 32; 14.13.3 and 14.13.4 p. 33; 14.13.5 pp. 33 to 34; 14.13.6 p. 34. Only the Problem 3 intro range is off (warning 2).

### Points the caller asked to settle
- 14.13.1 "third-order fringe": m = 3 bright, 180 um; the page says so in the statement. Fine.
- 14.13.2: 39 is right with the stated convention (m = +-20 fall on the envelope zeros and are missing); the solution mentions 41. Fine.
- 14.13.6: 3a < d <= 4a is right (d/a = 3 gives 5 fringes, 3.5 and 4 give 7, 4.2 gives 9), consistent with the 4(e) convention.
- Roots 4.493, 7.725 and I/I0 = 0.0472: confirmed by root finding and by direct numerical maximisation of sinc^2.
- Three-slit first minimum phi = 2 pi/3: confirmed by the phasor sum. The second hint ("close into a triangle ... what angle between neighbouring arrows") leads straight to it but does not state it; acceptable (info).
- Solar sail: GM = 1.327e20, r_E = 1.496e11, I = 1350 (the notes' value in 13.14.6, p. 48) are marked "our choice"; area 1.086e6 m^2 confirmed.
- Part 2(c): fair as a box; it is marked as worked out by MIT on p. 4. The 2(d) statement, visible at the same time, shows I = Imax cos^2(phi/2), which reveals the phi-dependence (not the factor 2). Info only.
- Choice lengths: P3(c) [21, 23*, 23, 21]; P4(a) [89*, 88, 87, 90]; P4(f) [37, 16, 32, 32*]: the right choice is never the odd one out by length (* = right). Right positions across the set: 3, 1, 2, 0, 3, 1, 2, 0, 1: varied. No choice answers another; none answerable from units.
- "How to answer" examples (`a*b/c`, `2*x^2*cos(y)`) answer no box. The `summary` names topics only. No statement sentence or hint states a box's value.

## Coverage and order
- Session: Questions 1 to 9, all used, in order (Problems 1 and 2). Q9's graph is a generated `<Plot>` with our numbers.
- Chapter 14: all six Additional Problems used (14.13.1 and .3 in Problem 3; .4 in 2(f); .5, .2, .6 in Problem 4); Conceptual Questions 1, 3, 4 used. Problem 4 puts 14.13.5 before 14.13.2 and 14.13.6, as its intro says.
- Chapter 13: Conceptual Questions 2 and 4 and Additional Problem 13.14.1 used.

## Licensing
- No "rights reserved" or "Courtesy of" notice in solving10, Chapter 13 or Chapter 14 (grep); none on the page. No MIT figure redrawn (session figure described in words only; both plots generated from formulas). No OpenStax. Wording is the page's own; the MIT phrases kept are standard terms ("path length", "third-order fringe", "the spacing between the successive minima", quoted as such).

## Notes
- Symbols: page-scoped meanings exist for every course-wide letter used (beta, theta, lambda, phi, omega, sigma, a, c, d, m, n, r, r_1, r_2, r_E, P, D, L, A, B, E, E_0, E_1, E_2, E_10, E_20, I, I_0, I_1, I_2, I_max, I_min, S, M, G, v, f, t, x, y, y_m, y_3, mu_0, B_0, eps_0). They fit and give no answer away (beta's meaning restates the definition already in Problem 4's statement).
- 3(d) solution: "many millions of times a second" understates how fast the phase of thermal light wanders (coherence times about 1e-14 s), but is not false.
- No `## Summary` with answers.

COUNTS: errors=1 warnings=2 info=7

## Resolution (2026-11-28, by the page author)

- Error 1 (false hint on the 2E0² mistake in 2(c)): the hint now says this is the value only where the waves arrive in step (φ = 0), and that elsewhere the result depends on the phase shift.
- Warning 2 (page range): the Problem 3 intro now cites 14.13.3 on p. 33.
- Warning 3 (5(b) marking): now "(Our addition: the notes work this out in Section 13.8.1, p. 28; here you do it.)".
- Info items: no change (the three-slit hint points at the method without stating φ; 2(d)'s cos²(φ/2) does not give the factor 2; choice lengths and positions are balanced).

Status set to `reviewed`.
