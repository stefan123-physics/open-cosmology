---
page: content/year-2/8.033/8-033-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps5/ (read: PDF, pdftotext and all 4 pages rendered as images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture11_dyn2/ (read: downloaded fresh; slides 2, 3, 4, 6, 10, 13, 14 rendered)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture10_dyn1/ (read: downloaded fresh; slides 10 and 16)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture8_euler/ (read: slide 3)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: slides 4, 13, 15, 16)
verdict: pass-with-notes
---

# Review: Problem Set 5: Relativistic dynamics, acceleration and rockets

## Blind solve

### My answers (written before opening the full page)
Convention: S' = Jim's frame, S = Sam's frame; S' moves at v = +0.6c in S, gamma = 1.25.
- p1a: 10/gamma = 8.0 km
- p1b: (0.6+0.6)/(1+0.36) = 15/17 = 0.88235c
- p1c: Sam also finds momentum and kinetic energy conserved (laws hold in every inertial frame), with other values. KE before in S = (17/8 - 1) m0c^2 = 1.125 m0c^2 (Sue's neutron at rest).
- p1d: Elastic collision in Jim's frame (the CM frame): both leave at 0.6c, back to back, each turned 30 deg. In S: Jim's (0.85352, 0.18296)c, turned 12.10 deg; Sue's (0.11680, -0.34872)c, 71.48 deg from the x axis on the other side; speed 0.3678c. Momentum conserved in S (py: 2.050*0.1830 = 1.075*0.3487; px: 1.875 before and after).
- p1e: 10^4/gamma = 8000 per s
- p2: fraction R^2/(4d^2) = 4.551e-10; 1.820e17 W; 1.573e22 J/day; 1.750e5 kg = 175 t per day
- p3: 1e41/c^2 = 1.113e24 kg/s = 3.51e31 kg/yr = 17.6 solar masses per year
- p4a: dt/dt' = gamma (1 + v u'_x/c^2); a_x = a'_x / [gamma^3 (1+v u'_x/c^2)^3]
- p4b: a_y = a'_y/(gamma^2 D^2) - (v u'_y/c^2) a'_x/(gamma^2 D^3), D = 1+v u'_x/c^2; the second term vanishes if u'_y = 0 or a'_x = 0
- p5a: u = g t / sqrt(1 + (g t/c)^2)
- p5b: x = (c^2/g)[sqrt(1 + (g t/c)^2) - 1]
- p5c: g t/c = 2.0632; u/c = 0.8999
- p6b: u = V ln(Mi/Mf); 3.0 ln 5 = 4.828 km/s
- p6c: 3000 ln 5 - 1.62*120 = 4634 m/s = 4.634 km/s
- p6d: a = a'/gamma^3 (u'_x = 0 in the instantaneous rest frame), dt' = dt/gamma gives 1/gamma^2; du/(1-u^2/c^2) = -V dM0/M0, so u/c = tanh[(V/c) ln(Mi/Mf)] = eq. (6.10)
- p6e: tanh x ~ x gives u = V ln(Mi/Mf). Mi/Mf = exp(artanh(0.5)/0.01) = 3^50 = 7.18e23
- p7: person 1 W/kg, Sun 2e-4 W/kg, ratio 5000
- p8: Delta U = G M^2/R (R to R/2) = 3.814e41 J; /4e26 W = 9.53e14 s = 30.2 Myr
- p9: theta_t = asin(sin 45 deg/1.5) = 28.13 deg
- p10a: Euler-Lagrange with t for x, q for y, qdot for y' gives (10.2)
- p10b: V = (1/2)k z^2 + M g z (z up), K = (1/2)M zdot^2; zddot = -(k/M) z - g, same as F = ma
- p10c: K = (1/2)M l^2 phidot^2, V = -M g l cos phi (+const); phiddot = -(g/l) sin phi; small angles: phi = phi0 cos(sqrt(g/l) t)

Numbers computed in C:/Users/rober/AppData/Local/Temp/claude/c0aebdeed99bcda4/7a53d4ea-6911-495d-bf72-b3fabae199a0/scratchpad/8033/rv5/blind.py.

### Comparison (one line per answer id)
- p1-sep 8.0 km: agrees.
- p1-speed 0.882: agrees.
- p1-law choice 0 ("both conserved, other values"): agrees.
- p1-ke 1.125: agrees.
- p1-angle-jim 12.1 deg: agrees (12.099).
- p1-angle-sue 71.5 deg: agrees (71.482).
- p1-rate 8000 per s: agrees.
- p2-tonnes 175: agrees (174.996).
- p3-rate 17.6: agrees (17.557).
- p4-dt (1 + v*ux/c^2)/sqrt(1 - v^2/c^2): agrees (identical form).
- p5-u g*t/sqrt(1 + (g*t/c)^2): agrees.
- p5-x (c^2/g)*(sqrt(1 + (g*t/c)^2) - 1): agrees.
- p5-speed 0.900: agrees (0.89988).
- p6-u 4.83 km/s: agrees (4.8283).
- p6-moon 4.63 km/s: agrees (4.6339).
- p6-ratio 7.18e23: agrees (7.1790e23).
- p7-ratio 5000: agrees.
- p8-time 30.2 Myr: agrees (30.210).
- p9-angle 28.1 deg: agrees (28.126).
- p10-spring -k*z/M - g: agrees.
- p10-pendulum -(g/l)*sin(phi): agrees.
- Self-marked parts (p4a/b derivations, p6a, p6d, p6e limit, p10a): the page's derivations match mine step for step.

No disagreements. The calcs file passes: `pytest tests/calc -k 8-033-problem-set-5` in the worktree, 129 passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), `<Answer id="p5-u">`, mistake `g*t/sqrt(1 - (g*t/c)^2)` | (answer-box design) | vars g [4, 6], t [1, 2], c [4, 5], so g t/c runs from 0.8 to 3. The listed mistake is NaN wherever g t > c. `checkFormula` in lib/answers.ts compares with `agree()`, which needs finite values at all 5 sample points. A simulation of 100,000 five-point samples found no sample where this mistake is finite at all 5 points, so its hint can never be shown. A reader who types it just gets "wrong". | Narrow the ranges so that g t < c everywhere, e.g. `c: [20, 30]` (g t/c at most 0.6), and drop "Your form has no real value once g t passes c" from the hint, or keep that sentence as a plain remark. The other mistakes stay different from the answer in that range (tanh differs by about 1% at g t/c = 0.2, far more than 1e-6). |
| 2 | warning | Problem 1(d), statement | "After this collision, one of the neutrons was scattered through an angle of 30 deg." No word about the other neutron or the geometry. | "In Jim's frame the collision is symmetric: both neutrons leave it at 0.60c, each turned by 30 deg ..., back to back." It is stated as a given fact and is not listed among the changes in the introduction. | The reading is correct and is the only one possible: (c) makes the collision elastic, and Jim's frame is the zero-momentum frame of a Jim-neutron/Sue-neutron pair (two of Jim's own neutrons cannot meet), so both outgoing speeds are 0.60c, back to back, each turned 30 deg. Say so in one sentence, e.g. "(MIT's sheet names only one neutron. This follows from part (c): in Jim's frame the total momentum is zero and the collision is elastic, so ...)". |
| 3 | warning | Problem 10, opening paragraph | MIT quotes Marion & Thornton: "In two papers in 1834 and 1835, Hamilton announced the dynamical principle on which it is possible to base all of mechanics ..." and "Of all the possible paths along which a dynamical system may move from one point to another within a specified time interval ..., the actual path followed is that which minimizes the time integral of the difference between the kinetic and potential energies." | "Hamilton's principle, published in 1834 and 1835, is a single rule from which all of mechanics can be built. In our own words: of all the paths along which a system could move from one given state to another in a given time, the path really taken is the one that makes the time integral of the difference between kinetic and potential energy as small as possible." | The page does not copy the quotes word for word, but both sentences follow the third-party (not CC) textbook passage clause by clause. Hamilton's principle is standard physics, so restate it apart from M&T's sentence shape, e.g. "Hamilton's principle (1834–35): between two fixed times and fixed end configurations, the motion that actually happens makes the action I = ∫L dt stationary." Drop or recast the "1834 and 1835 ... all of mechanics" clause. |
| 4 | info | Problem 2, statement | MIT gives only the Sun's power. MIT's Problem Set 1 gives the Earth–Sun distance 1.5e11 m but no Earth radius. | "Take Earth's radius to be 6.4e6 m and its distance from the Sun 1.5e11 m, the values of Problem Set 1." | The 6.4e6 m is our PS1 page's own value. Say "the values used in our Problem Set 1" (or "MIT's Problem Set 1 gives the distance; the radius is ours"). |
| 5 | info | Problem 7, "Making sense of it" | (no explanation on the sheet) | "a given hydrogen nucleus waits billions of years before it fuses (the lesson explains why: the nuclei repel each other, and only the fastest get close enough)" | The lesson (momentum-energy-sun, slide 12) explains why fusion needs the hot core, not why it takes billions of years. The long wait comes mostly from the first pp step being a weak-interaction process, on top of the Coulomb barrier (tunnelling). Change the bracket to "(the lesson explains why fusion needs the hot core: ...)" or add the weak-interaction reason. |
| 6 | info | Problem 4(a), second hint | (design) | Gives dt = gamma(dt' + v dx'/c^2) and dx' = u'_x dt'. | With these, the box answer dt/dt' is one substitution away. That is acceptable for an intermediate result, but you could move the hint after a first hint that only names the inverse Lorentz transformation. |
| 7 | info | Frontmatter `covers: [8, 9, 10, 12]` | Only the optional Problems 9 and 10 use Lectures 8 and 9 (and Problem 9 explicitly does not need the calculus of variations). Problem 1 relies on Lecture 5 kinematics. | covers 8 and 9 | Acceptable: Lecture 9's lesson (brachistochrone) does use Lagrangian ideas that Problem 10 practises. It is the writer's call whether optional-only use should earn the "Practise" link on Lecture 8 and 9 lessons. No change required. |

## Arithmetic and answer checks
- I recomputed every number on the page (script in rv5/). Further checks besides the boxes:
  - p1 invariant mass: sqrt(3.125^2 - 1.875^2) = 2.5.
  - p1(d) momentum and energy checks: py balance 0.3751 vs 0.3749 (rounding); energies 2.050 + 1.075 = 3.125.
  - p1(d) Newtonian limits: 15 and 75 deg; angle sum 83.6 deg.
  - p1(e) spacing: 17.99, 22.49 and 10.58 km both ways.
  - p2 "about 2 kg every second": 2.03.
  - p3 "a fifth of the Earth": 0.185.
  - p5(c): c/g = 0.969 yr, x = 1.25 ly, Newton 2.06 ly.
  - p6(c): thrust 2.0e5 N vs weight 1.62e4 N, ratio 12.3.
  - p6(e): about 0.12 Earth masses; 0.010c = 2998 km/s; tanh(0.01 ln 5) = 0.016093 vs 0.016094; 0.449/0.483; 0.923/1.61; 4.5 km/s = 1.5e-5 c, needing a mass ratio of 10^2903.
  - p7: 2.5e9 J/kg vs 4.4e13 J/kg, ratio about 17,500, "about 18,000" fair.
  - p8: 7e9/30.2e6 = 232, "more than 200 times".
  - p9: crossing x = 1, x0 = 1.5345, times 3.115 vs 3.151 (y0/c).
  - p10: period 2.007 s.
- Formula boxes: vars are finite and physical (v < c, |u'_x| < c in p4; phi below pi/2 in p10). Each mistake differs from the answer by far more than 1e-6. Each mistake hint is true of its formula. The exception is item 1 above: that hint is unreachable.
- Number-box tolerances (1–2%) accept 3 significant figures. They reject the obvious slips: 10 km for p1a; 1.2 or 0.6 for p1b; 0.5 (Jim's KE) for p1c; 30 deg for p1d; 12,500 for p1e; 4.83 against 4.63 in p6c.
- Choice p1-law: answer 0 is correct, and the three distractors are wrong for the reasons the solution gives.

## Coverage and order
- All six required problems and all four optional ones appear in MIT's order. MIT's parts are in order. The unlettered first part of Optional Problem 10 becomes (a), and the page says so.
- Points: P1 3+3+3+3+3, P2 3, P3 3, P4 9, P5 6, P6 3+3+6+6+3, as on MIT's sheet. Total 57 against MIT's 60, because the 3 points for name and stapling are left out (stated). The 5/4 split in P4, the 2/2/2 split in P5 and the optional points (3, 3, 3, 6) are the page's own, and the page says so.
- Problem 5: MIT names only French problem 7-8 plus the hint d(gamma u)/dt = g. The page builds its own problem on that hint and says so. Its content (constant proper force from rest, u(t), x(t)) is what the hint implies. I could not check the French problem itself (the textbook was not opened, correctly).
- Problem 6(a) misprint: verified on the rendered PDF, p. 2. Eq. (6.2) is printed `dM0/dt' Vex = -M0 du0/dt'`, so "du0" stands where du' belongs. The page's note is correct.
- Optional Problem 9 diagram: verified. MIT says "The geometry is shown in the diagram", but pages 3 and 4 of the PDF have no figure (page 4 holds only the feedback line). The page's note is correct, and it draws its own figure from a formula.
- Citations: the PDF's pages carry printed numbers 1–4. (4.1), (4.2), Problem 5 and (6.1) are on p. 1. (6.2)–(6.10) and Problem 6(b)–(e) are on p. 2. Optional Problems 7–10 are on p. 3. Every `at=` matches, including "pp. 1–2" for (6.1)/(6.2).
- Slide citations checked: Lecture 12 deck (titled "Lecture 11" on slide 2, as the reading title says):
  - slide 3: P = m0 gamma_u u;
  - slide 4: K = m0(gamma - 1)c^2;
  - slide 6: system invariant and one Lorentz matrix;
  - slide 10: F = gamma^3 m0 a along the motion, gamma m0 a across it;
  - slide 13: rest-frame force transformation, F'_x = F_x, F'_y = F_y/gamma;
  - slide 14: the acceleration pair, "derive on a problem set (probably PS7)".

  Lecture 10:
  - slide 10: "WHY FOR SO LONG?";
  - slide 16: E = mc^2, 0.7%.

  Lecture 5:
  - slide 4: time dilation;
  - slide 13: length contraction;
  - slide 15: inverse Lorentz transformation of differentials;
  - slide 16: velocity addition.

  Lecture 8, slide 3: the Euler–Lagrange equation is listed only as a topic, and the page says "listed there; written out in the lesson". All correct.
- Claims about lessons checked against the worktree lessons:
  - momentum-energy-sun: 4.4e9 kg/s, the 10%/70%/0.7% estimate, 2.2e17 s, about 7 billion years.
  - force-acceleration-interstellar-travel: the Alpha Centauri probe uses the classical rocket equation; the photon rocket gives M_i/M_f = sqrt((1+beta)/(1-beta)).

  All match. The one inexact claim is item 5 above.

## Licensing
- MIT's PDF has no "All rights reserved" or "Courtesy of" notice. The only courtesy credit in the cited slides ("Image courtesy of Wikipedia", Lecture 12 deck slide 1) is not used.
- The Marion & Thornton quotes are not reproduced word for word. The paraphrase is close in structure (item 3).
- French's textbook problem is not used. No OpenStax or LibreTexts material. No MIT figure is redrawn: the Problem 9 plot is generated from Snell's law.
- I found no sentences copied verbatim from MIT beyond short standard phrases and the quoted Jim observations, which are short dialogue lines needed to state the problem.

## Notes
- Blind solve and comparison: 0 disagreements.
- No `## Summary` with answers. No em dashes (grep count 0).
- Symbols: the page-scoped meanings in the worktree's data/symbols.json fit this page (for example g as force per unit rest mass in P5 and gravity in P6/P10, R as the short ratio in 6(d) and the radius in P8, L with three scoped uses). content:check reports no symbol problems.
- Hints do not give away final results. The p4a hint 2 is the closest (item 6).

COUNTS: errors=0 warnings=3 info=4

## Resolution (2026-11-21, by the page author)

- Finding 1 (warning): the box of Problem 5(a) now has `c: [20, 30]`, so g t/c stays below 0.3 and the listed mistake with the minus sign is finite at every sample point; its hint no longer says the form has no real value. The calcs entry `p5-u` samples the same range.
- Finding 2 (warning): Problem 1(d) now says in brackets that MIT's sheet names only one neutron and why both leave at 0.60c, back to back, each turned by 30 degrees (part (c) and the zero-momentum frame).
- Finding 3 (warning): the opening of Problem 10 restates Hamilton's principle in our own form (fixed end configurations, the action stationary to first order) and no longer follows the textbook sentence; the bracket notes that MIT's sheet quotes a textbook.
- Finding 4 (info): Problem 2 now says the distance is MIT's Problem Set 1 value and the radius is our own.
- Finding 5 (info): the bracket in Problem 7 now says what the lesson explains (why fusion needs the hot core) and adds the weak-interaction first step as the reason for the long wait.
- Findings 6 and 7 (info): no change.
- `status: reviewed`. `calc:test -k 8-033-problem-set-5` (129 passed) and `test:answers` pass; `content:check` run after the merge onto `main`.
