---
page: content/year-1/8.02/8-02-problem-set-1.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving01/ (read: PDF text, pages Solving1-2 and Solving1-3 also as images)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter1fields/ (read: Sections 1.6, 1.10, 1.11)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read: Sections 2.7 to 2.10, 2.13 list, 2.14, 2.15; printed pp. 38, 40 and 42 also as images)
verdict: needs-changes
---
# Review: Problem Set 1: line and surface integrals, fields, charge distributions and dipoles

Writer: Opus. Reviewer: Opus (same model, blind).

Method: blind solve first (below; written before the page was opened), then the full page, its calcs file and its symbol meanings. Every answer and every number was recomputed in a scratch sympy/numpy script; `pytest tests/calc -k 8-02-problem-set-1` in the worktree passes (299 passed). Every calcs `shown:` string was found verbatim on the page. `npm run content:check` was not run by the reviewer (to leave the worktree untouched).

## Blind solve

My answers (written from the stripped statements, MIT's Problem Solving 1 and Chapters 1 and 2 only, before opening the page; checked with sympy/numpy in a scratch script):

- p1-a: I1 = 1/2 (y = 0, x = s, s from 0 to 1).
- p1-b: I2 = 3/2 (x = 1, y = s, integral of 1 + s from 0 to 1).
- p1-c: I' = 2, not sqrt(2) = 1.414: a line integral in general depends on the path, not only on the end points.
- p2-a: 0 (x = 0, F = y i, ds = dy j, F.ds = 0).
- p2-b: -1 (Fx dx + Fy dy = -ds/sqrt2, s from 0 to sqrt2).
- p2-c: total -1; Green: (dFy/dx - dFx/dy) = -2 times area 1/2 = -1. Agrees.
- p3-a: Q = k a^2 b^2 / 4.
- p3-b: Q = 2 pi k R^3 / 3 (the sin theta term integrates to zero).
- p4-a: (i) b A, (ii) 0.
- p4-b: dA = R dtheta dz, n = cos theta i + sin theta j, E.n = E0 sin theta, flux = 2 E0 R h.
- p5-a: tangent direction (dx, dy) parallel to (Fx, Fy), so dy/dx = Fy/Fx.
- p5-b: dy/dx = -x/y, so x^2 + y^2 = const: circles centred on the origin; field points clockwise (at (0, y>0) it points along +x), size r.
- p5-c: -2 pi R^2 (F = -r theta-hat).
- p6-a: Ex = 2 ke q a / (a^2 + y^2)^(3/2).
- p6-b: for |y| >> a, Ex ~ 2 ke q a / |y|^3 = ke p / |y|^3, falls as 1/|y|^3 (not 1/y^2), pointing along +x, opposite to p (p points from -q to +q, along -x).
- p7-a: lambda0 = Q / (2R).
- p7-b: Fy = -pi ke q Q / (4 R^2).
- p8-a: p = 2e d = 3.2e-28 C m, along +j (from -2e up to +2e).
- p8-b: tau = p x E = -9.6e-28 k N m: size 9.6e-28 N m, along -k (into the xy plane seen from +z, clockwise).
- p8-c: No: the forces the two charges exert on each other are equal, opposite and along the line joining them, so they give no net torque (or force).
- p9-a: tau = -pE sin theta ~ -2qaE theta, I theta'' = -2qaE theta: SHM.
- p9-b: omega = sqrt(2 q a E / I) (frequency f = omega / 2pi).
- p10-a: on the line, outside the pair, on the side of the smaller charge -q (to its left); distance d/(sqrt3 - 1) = 1.366 d from -q.
- p10-b: the field at P does not change (it does not depend on the test charge).
- p10-c: a net force (field non-uniform) and, in general, a torque (none only when aligned with the field).

### Comparison with the page (after opening it), one line per answer id

- p1-a: page 0.5. Agrees. (Box has no tolerance: see W1.)
- p1-b: page 1.5. Agrees. (Box has no tolerance: see W1.)
- p1-c: page choice 2, "I' = 2, larger than I: ... can depend on the path". Agrees.
- p2-a: page 0, tolerance 0.01 absolute (lib/answers.ts: a tolerance without % is absolute). Agrees; 0.01 rejects the plausible slips +-0.5 and +-1.
- p2-b: page -1. Agrees. (Box has no tolerance, so it accepts -0.5 to -1.5: see E1.)
- p2-c (no box): page -1 by both routes, Green -2 x 1/2. Agrees.
- p3-a: page k*a^2*b^2/4. Agrees (sympy identical).
- p3-b: page 2*pi*k*R^3/3. Agrees.
- p4-a1: page b*A. Agrees.
- p4-a2: page choice 3, "zero". Agrees.
- p4-b: page 2*E0*R*h. Agrees.
- p5-a (no box): page compares slopes / cross product. Agrees.
- p5-b: page choice 1, circles, clockwise. Agrees.
- p5-c: page -2*pi*R^2. Agrees.
- p6-a: page 2*ke*q*a/(a^2 + y^2)^(3/2). Agrees (sympy vector sum identical).
- p6-b: page choice 3, 1/y^3 and opposite to p. Agrees.
- p7-a: page Q/(2*R). Agrees.
- p7-b: page -pi*ke*q*Q/(4*R^2). Agrees.
- p8-a: page 3.2e-28 C m, 2%. Agrees. p8-a-dir: choice 0, +j. Agrees.
- p8-b: page 9.6e-28 N m, 2%. Agrees. p8-b-dir: choice 2, -k. Agrees.
- p8-c: page choice 1, no torque. Agrees.
- p9-a (no box): page I theta'' = -2qaE sin theta ~ -2qaE theta. Agrees.
- p9-b: page sqrt(2*q*a*E/I). Agrees.
- p10-a: page choice 2, left of -q. Agrees. p10-a-dist: page 1.37 (2%), exact 1.3660. Agrees.
- p10-b: page choice 3, unchanged. Agrees.
- p10-c: page choice 0, both force and torque. Agrees.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| E1 | error | Problem 2(b), `<Answer id="p2-b" value="-1">` | (answer box behaviour, not MIT) | No `tolerance`, so lib/answers.ts uses the printed digits of "-1": +-0.5. The box accepts -1.414 (-sqrt2, the slip of integrating -ds over the length sqrt2 without the 1/sqrt2) and -0.707 as correct, and contradicts "How to answer" ("within 2% of ours"). | Add `tolerance="2%"` (or `tolerance="0.01"`). |
| W1 | warning | Problem 1(a) and 1(b), `p1-a` value="0.5", `p1-b` value="1.5" | (answer box behaviour) | No `tolerance`: accepted windows are 0.45 to 0.55 (10%) and 1.45 to 1.55, not the "within 2%" that "How to answer" promises. No listed slip falls in them, but the page text is wrong for these boxes. | Add `tolerance="2%"` to both. |
| W2 | warning | Problem 6(b) | Additional Problem 1.11.3 asks only for the field on the y-axis | Part (b), the far field of the pair (1/y^3, opposite to p), is not in the notes and is not marked "(Our addition.)"; the intro says parts marked "our addition" are not in either source, so an unmarked part reads as MIT's. | Start Part (b) with "(Our addition.)". |
| W3 | warning | Problem 9(b) | 2.15.5 asks "What is the frequency of oscillation?" | Asks for the angular frequency omega, without saying it differs from the notes (the solution does give omega/2pi). | Add to the statement: "(The notes ask for the frequency; the box takes omega, and f = omega/2pi.)" |
| W4 | warning | Problem 10(a), second hint | (hint wording) | "On the other side, at the distance s from -q, set ..." names the side (left of -q), which is the answer of the choice box p10-a: a reader opening hint 2 before answering gets that box for free. | Reword: "Once you have found the side, call the distance from -q s and set the two field sizes equal." |
| W5 | warning | Problem 8(c), choices of p8-c | (choice design) | The right choice ("add no torque: their pull on each other is equal, opposite and along one line", 77 characters) is clearly the longest (others 64, 47, 38). | Shorten it, e.g. "add no torque: their forces on each other cancel along one line", or lengthen a distractor. |
| W6 | warning | symbols, theta | (recurring check 1) | theta is used as the polar angle (Problems 3, 4), the angle on the semicircle (7) and the swing angle (9), but has no meaning scoped to `8-02-problem-set-1`; only the general "An angle." applies. | Add a page-scoped meaning: "An angle: the polar angle in the plane (Problems 3, 4 and 7, measured from the y-axis in Problem 7) or the angle of the dipole from the field (Problem 9)." |
| I1 | info | Problem 1(c), solution | MIT asks whether the integral is path independent; it prints no answer | "...depends on the path ... (Problem 1(c), p. 2)" reads as if MIT states it. | "(our own answer to Problem 1(c), p. 2)". |
| I2 | info | Problems 6(a) and 7(b) | Notes ask for "the electric field" (1.11.3) and "the total force" (2.15.4(b)) | Page asks only E_x / F_y and tells the reader the other components vanish by symmetry. Fine for a box; slightly easier than the notes. | Optionally let the hint, not the statement, say which components cancel. |
| I3 | info | Problem 8(b), choice "along -k, into the xy plane" | | "into the xy plane" is loose for a vector normal to that plane. | "along -k, into the page with the xy plane drawn as usual". |
| I4 | info | Problem 6(b) choices | | Right choice slightly the longest (61 vs 56, 55, 46): acceptable. | none needed |
| I5 | info | "How to answer" | | Mentions typing theta and lambda0, which no formula box needs; harmless. | none needed |

## Arithmetic and answer checks
- All 26 answer ids agree with my blind answers (list above); formula answers identical in sympy, numbers equal to 3 figures.
- Numbers recomputed: p = 2(1.6e-19)(1e-9) = 3.2e-28 C m; tau = p j x (3i + 3j) = -9.6e-28 k N m, and pE sin45 with E = 3sqrt2 = 4.24 N/C gives the same; omega = sqrt(2qaE/I) from I theta'' = -2qaE theta; s = d/(sqrt3 - 1) = 1.3660 d, 2.3660 d, squares 1.866 and 5.598 (ratio 3.000); pi/4 = 0.785, 2/pi = 0.637; line integrals 1/2, 3/2, 2 vs sqrt2; triangle 0, -1, 0, Green -2 x 1/2 = -1; circle -2 pi R^2 (parametrised); surface integrals k a^2 b^2/4, 2 pi k R^3/3, 2 E0 R h; dipole field on the y-axis 2 ke q a/(a^2+y^2)^(3/2) by vector sum; semicircle lambda0 = Q/(2R), F_y = -pi ke q Q/(4R^2) by integration.
- Each listed mistake is finite over its whole vars range (all denominators positive: a, R >= 0.1, I >= 0.1) and differs from the answer; each hint correctly describes its formula (checked: k a b, k a^2 b^2/2, pi k R^2, k R^3 (2pi-2)/3, a A, sqrt(a^2+b^2) A, pi E0 R h, E0 R h, +2 pi R^2, -2 pi R, the three p6-a slips, Q/(pi R), Q/R, the three p7-b slips including the even semicircle -2 ke q Q/(pi R^2), and the three p9-b slips).
- Tolerances: p2-a absolute 0.01 for the zero answer is right (lib/answers.ts reads a tolerance without % as absolute) and rejects +-0.5 and +-1; p8-a, p8-b, p10-a-dist at 2% reject the slips e d (1.6e-28), p|E| (1.36e-27) and 1/(sqrt3+1) = 0.366. p1-a, p1-b and p2-b have no tolerance: see E1 and W1.
- Every solution ends with a check (unit, limit, second route or number); the three "show" parts (2(c), 5(a), 9(a)) say they have no box and say how to self-mark.
- Points: 12+12+10+14+10+10+10+10+6+6 = 100; every part sum equals its problem. The page says the points are ours.
- Choice positions vary (right index 0 three times, 1 twice, 2 three times, 3 three times).
- calcs: every `shown:` string appears on the page; the tests for this page pass.

## Coverage and order
- Problem Solving 1: all four problems, in MIT's order and with MIT's steps (Example 1 quoted; C1 done for the reader; the arc-length parametrisation of C2; MIT's three hints for the cylinder kept as hints). Problem 2(c) is marked as our addition. MIT's sphere-area example (p. 6) is background, not a problem: fine to leave out.
- Sources stated in the intro checked against the notes: Problem 5 = 1.11.1(a) + 1.11.8; Problem 6 = 1.11.3; Problem 7 = 2.15.4; Problem 8 = 2.15.8; Problem 9 = 2.15.5; Problem 10 = Conceptual Questions 3, 4, 5. All correct; none is a Solved Problem (1.10.x, 2.13.x). Physics and set-ups agree with the notes' figures (semicircle angle from +y; dipole with + above -; -q left of 3q).
- Page citations checked against the printed footers: Solving1-1 to 1-9; Chapter 1 Eq. (1.6.2) p. 13, 1.11.1 and 1.11.3 p. 22, 1.11.8 pp. 24-25 (equation on p. 25); Chapter 2 Eq. (2.7.1) p. 10, (2.8.3) p. 13, (2.10.1)-(2.10.2) p. 17, CQ 3-5 pp. 38-39, 2.15.4 pp. 40-41, 2.15.5 p. 41, 2.15.8 pp. 42-43. All correct.
- Intro: says MIT's written homework for 8.02T is not on OCW, what the set is built from and where each problem comes from; the three lessons are linked in course order. Frontmatter `lecture: 3`, `order: 90`, `covers: [1, 2]` match the plan in TASKS.md.
- Claims about lessons checked: "circulation" (fields-gravitational-and-electric, Section 1.4), point-dipole field opposite to p at right angles to the axis and the net force p dE/dx (electric-dipoles): all present in those lessons.

## Licensing
- No "rights reserved" or "courtesy" notice in Problem Solving 1 or in Chapters 1 and 2 (grep of the text and the resource pages).
- No MIT figure is reproduced or redrawn: every situation is described in words, and the page has no diagram.
- Statements are rewritten in the page's own words; no sentence copied from MIT beyond standard terms.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes; no `## Summary`; the summary, intro and the "How to answer" example (`3*q*sin(phi)/(L^2 + y^2)`) give no answer away.
- Symbols: every letter used in the page's maths has a meaning scoped to this page except theta (W6); unit vectors i, j, k, n, r are covered.
- The page has no `Callout kind="cosmology"` and no `leadsTo`; nothing to check there.

COUNTS: errors=1 warnings=6 info=5

## Resolution (2026-11-28, by the page author)

- Error 1 (p2-b accepted −√2 and −0.707): `tolerance="2%"` added.
- Warning 1: p1-a and p1-b now have `tolerance="2%"`, as "How to answer" promises.
- Warning 2: Problem 6(b) now starts "(Our addition.)".
- Warning 3: Problem 9(b) now says the notes ask for the frequency, the box takes ω, and f = ω/2π.
- Warning 4: the second hint of 10(a) no longer names the side; it says to find the side first, then set the two field sizes equal.
- Warning 5: the right choice of p8-c is shortened to "add no torque: their forces on each other cancel along one line".
- Warning 6: θ now has a page-scoped meaning for Problems 3, 4, 7 and 9.
- Info items left as they are.
