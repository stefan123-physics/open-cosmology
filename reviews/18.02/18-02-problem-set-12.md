---
page: content/year-1/18.02/18-02-problem-set-12.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps12/ (read; page 2 rendered at 110 and 300 dpi for the underlines)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week13/ (read, all pages, printed footers checked page by page)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read, Lecture 28)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week14/ (read, Lecture 33 opening, for the "Applications" mapping)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vect_intgrl_calc/ (read, groups 6F, 6G, 6H)
  - vec_int_calc_sol, stokes_theorem (V13), topological_ques (V14), relation_to_phy (V15) (not read; only linked by the page, no claim depends on their content)
verdict: needs-changes
---

# Review: Problem Set 12: Stokes' theorem on the four faces of a tetrahedron

## Blind solve

### My answers (written before opening the full page)
Corners P0=(0,0,0), P1=(1,0,1), P2=(1,0,-1), P3=(1,1,0); centroid (3/4, 1/4, 0). F = (0, yz, -y^2).

(a) Orientations compatible with the outward normal (cyclic order; N = (Pb-Pa)x(Pc-Pa)):
- face P0P1P3: P0 -> P1 -> P3, N = (-1, 1, 1) (P2 lies on the other side: (1,0,-1).N = -2)
- face P0P2P3: P0 -> P3 -> P2, N = (-1, 1, -1)
- face P0P1P2 (plane y = 0): P0 -> P2 -> P1, N = (0, -2, 0)
- face P1P2P3 (plane x = 1): P1 -> P2 -> P3, N = (2, 0, 0)

(b) P0->P1: y = 0 so F = 0, work 0. P1->P3: r = (1, t, 1-t), F.r' = t(1-t) + t^2 = t, work 1/2. P3->P0: z = 0, F = (0,0,-y^2) and r' = (-1,-1,0), work 0. Total **1/2**.

(c) curl F = (-3y, 0, 0).
- P0P1P3: r = uP1 + vP3 = (u+v, v, u), N = (-1,1,1): integral of 3v over the unit triangle = 1/2. **W = 0.5**
- P0P3P2: r = uP3 + vP2 = (u+v, u, -v), N = (-1,1,-1): integral of 3u = 1/2. **W = 0.5**
- P0P2P1: y = 0, curl F = 0. **W = 0**
- P1P2P3: x = 1, n = i, integral of -3y over the triangle |z| <= 1-y: -6(1/2 - 1/3) = **-1**
Sum 0. Numerical check (blind12.py, trapezoid line integrals round each loop in that order): 0.5, 0.5, 0.0, -1.0, and each N tested outward against the centroid.

(d) (i) Each of the six edges is shared by two faces, and the outward-compatible orientations traverse it in opposite directions, so the line integrals cancel in pairs. (ii) The sum is the flux of curl F out of the closed surface; by the divergence theorem it equals the triple integral of div curl F = 0 (directly: d/dx(-3y) = 0), so 0.

### Comparison (one line per answer id)
- p1-a-012 (face P0P1P2): page P0, P2, P1 (choice 0); mine P0 -> P2 -> P1. Agree.
- p1-a-013 (face P0P1P3): page P0, P1, P3 (choice 0); mine P0 -> P1 -> P3. Agree.
- p1-a-023 (face P0P2P3): page P0, P3, P2 (choice 1); mine P0 -> P3 -> P2. Agree.
- p1-a-123 (face P1P2P3): page P1, P2, P3 (choice 1); mine P1 -> P2 -> P3. Agree.
- p1-b: page 0.5; mine 1/2. Agree.
- p1-c-012: page 0; mine 0. Agree.
- p1-c-013: page 0.5; mine 1/2. Agree.
- p1-c-023: page 0.5; mine 1/2. Agree.
- p1-c-123: page -1; mine -1. Agree.
- Part (d) (self-marked): page gives edge cancellation and div curl F = 0 via the divergence theorem; same as mine. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Part (d) solution, Formula "The edges cancel", `at=` | The cancellation of the line integrals over inner boundaries of small pieces is step 3) of the "Proof" of Stokes in **Lecture 31**, printed p. 3 of the Week 13 summary. Lecture 32 on pp. 3-4 covers simply connected regions, path independence, the Moebius strip and surface independence via div(curl F) = 0; it has no edge cancellation. | `cite="reading1" at="Lecture 32, pp. 3–4 (the same cancellation inside a surface)"` | Change to `at="Lecture 31, p. 3 (the same cancellation inside a surface)"`. |
| 2 | warning | Last section, table row "Lectures 32 and 33: MIT's 'Applications' lecture" | MIT's "Applications" lecture (calendar Lecture 37, Thu Dec 6) is summary Lecture 33 (Week 14 summary: "Applications of div and curl to physics"), i.e. site Lecture 33 only. The topics of 6G-1 (simply connected regions, Notes V14) and 6H-1/6H-2 (div curl F = 0; flux of a curl out of a closed surface) were taught in summary Lecture 32 (Fri Nov 30, Week 13 pp. 3-4), i.e. site Lecture 32. | Presents one MIT lecture as site Lectures 32 and 33 and links only div-curl-and-maxwell. | Reword the row, e.g. "Lecture 33: MIT's 'Applications' lecture, [div curl and Maxwell's equations](/courses/18-02/div-curl-and-maxwell); its exercises' topics (simply connected regions, div curl = 0) were taught in Lecture 32, [Stokes' theorem, path independence and div curl = 0](/courses/18-02/stokes-and-path-independence)", keeping 6G-1, 6H-1, 6H-2. |
| 3 | warning | Part (c), third hint | (page's own hint) | "Its size is $dy\,dz$ on every face, and its sign is that of the outward normal." On the face P0P1P2 (plane y = 0) the i component of n dS is 0, not ±dy dz (the face projects onto a segment of the yz-plane). | "Its size is $dy\,dz$ on every face except the one in the plane $y = 0$ (there it is zero), and its sign is that of the outward normal." |
| 4 | info | Part (a) solution, Formula "Compatibility of an order of corners with the normal", `at="Lecture 31, pp. 2–3 (the left-hand and right-hand rules)"` | Both rules are on printed p. 2 only. The cross-product test itself is not in the summary. | pp. 2–3 | `at="Lecture 31, p. 2 (the left-hand and right-hand rules; the cross-product test is our own)"`. |
| 5 | info | Stokes' theorem Formula, `at="Lecture 31, pp. 2–3"` | Statement is on p. 2; p. 3 continues the proof and an example. | pp. 2–3 | Acceptable; "p. 2" would be exact. |
| 6 | info | Part A table | Rendered sheet underlines (hand in) only **6F-1b, 6F-2, 6F-5**; 6F-1a, 6F-3, 6G-1, 6H-1, 6H-2 are not underlined. | Lists all items without marking the hand-in ones. | The list matches MIT exactly. Optional: add "(MIT asked for 6F-1b, 6F-2 and 6F-5 to be handed in)". |
| 7 | info | Part (c) statement and intro | MIT adds "(you can avoid some calculations by re-using your answers from PS 11)". | Omitted; intro says Set 11 is not needed. | Fine. When 18.02 Problem Set 11 is published, link it in the intro sentence about "the same tetrahedron". |

## Arithmetic and answer checks
- All four orientations recomputed (cross products and triple product against the fourth corner); the page's normals (-1,1,1), (-1,1,-1), (0,2,0) reversed to -j, and (2,0,0) are correct. The edge check at the end of (a) was verified edge by edge: each of the six edges is walked once each way.
- (b): edge P1->P3 integrand t(1-t) + t^2 = t, integral 1/2; the other two edges give 0. Correct.
- (c): curl F = (-3y, 0, 0) correct. Planes x = y + z (P0P1P3) and x = y - z (P0P2P3) checked at the corners; projections (0,0),(0,1),(1,0) and (0,0),(0,-1),(1,0), area 1/2, integral of y = 1/6. Face x = 1: triangle (0,1),(0,-1),(1,0), area 1, centroid y = 1/3, flux -1. The direct check on P1P2P3 (integrands -s and -(1-u), each -1/2) is correct. Hint 2's formula n dS = ±(1, -x_y, -x_z) dy dz is correct.
- (d): div of a curl expanded correctly; sum 0 + 1/2 + 1/2 - 1 = 0.
- Independent numerical check (blind12.py, trapezoid line integrals round each loop): 0.5, 0.5, 0.0, -1.0.
- Answer boxes: tolerance 0.005 is absolute (lib/answers.ts, numberTolerance), so 3-figure answers are accepted, wrong signs and 1/3, 1/6 etc. rejected; value 0 works with an absolute tolerance. No `mistakes` lists (none required).
- Choice boxes (writer's flag 5): each offers the compatible cyclic order and its reverse, the only two orientation classes, so the two options are complete and the marked one is correct in all four; the "How to answer" section explains cyclic equivalence. Correct option is first in two boxes and second in two. Fine.
- calcs/18.02/18-02-problem-set-12.yaml: 52 tests pass (`pytest tests/calc -k problem-set-12`). p1-div-curl (`deriv('-3*0.7 + 0*u', ...)`) and p1-c-012 (`integrate('-3*0*0 + 0*u', ...)`) are tautological constant checks; info only.
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Every solution ends with a check ((a) edge test, (b) cross-reference to (c), (c) direct line integral on P1P2P3, (d) numeric sum). No hint gives a result away.

## Coverage and order
- Part B: same problem, same four parts in MIT's order, MIT's points 2+2+3+2 = 9; Part A's 5 points stated. Own wording throughout.
- Part A: list matches the sheet exactly (6F/1ab, 2, 3, 5; 6G/1; 6H/1, 2). Underlined on the rendered sheet: 6F-1b, 6F-2, 6F-5 only (writer's flag 1).
- Lecture mapping (writer's flag 2): calendar L34 (Thu Nov 29) = summary/site Lecture 31; L35 (Fri Nov 30) = site 32; L37 "Applications" (Thu Dec 6) = site 33. See finding 2.
- Citations checked against printed footers (writer's flag 3): Week 13 PDF page 2 = printed 1 (Lecture 30), printed 2 = Lecture 31 start (curl formula, Stokes statement, both orientation rules), printed 3 = Lecture 31 proof step 3 (cancellation) and Lecture 32 start, printed 4 = div(curl F) = 0 and Exam 4 review. Week 11: Lecture 28 starts printed p. 3, divergence theorem on p. 4. So readings' `location` ("Lectures 31 and 32, pp. 2–4"; "Lecture 28, pp. 3–4"), `at="Lecture 31, p. 2 (the formula for the curl)"` and `at="Lecture 28, p. 4"` are correct; only the (d)(i) citation is wrong (finding 1).
- Intro claims (sheet calls Stokes Lecture 34; site 31; follow-up 32) correct.

## Licensing
- The PS12 sheet carries no "All rights reserved" or "Courtesy of" notice. No figures. The problem is restated in own words; the corner coordinates and field are necessarily MIT's.
- Textbook section 15.7 named but not used. No OpenStax or LibreTexts. Notes section 6 is linked, not copied.

## Notes
- No em dashes; no `## Summary` with answers.
- PS 11 (writer's flag 4): the page correctly avoids depending on it; link later (finding 7).
- `covers: [31, 32]` leaves out 33 although Part A lists its exercises; acceptable since Part A is unscored.

COUNTS: errors=1 warnings=2 info=4

## Resolution (2026-11-21, by the page author)

1. (error) Part (d)(i), "The edges cancel": now cites `Lecture 31, p. 3 (the same cancellation inside a surface)`.
2. (warning) Part A table: the row now reads "Lecture 33: MIT's 'Applications' lecture, div curl and Maxwell's equations; the topics of these exercises were taught in Lecture 32, Stokes' theorem, path independence and div curl = 0", with the same three exercises.
3. (warning) Part (c), third hint: the size of the î component of n̂ dS is now "dy dz on every face except the one in the plane y = 0 (there it is zero)".
4. (info) The compatibility rule now cites Lecture 31, p. 2 and says the cross-product test is our own; the Stokes statement cites p. 2.
5. (info) The hand-in marks of Part A and the link to Problem Set 11 are left for later (Set 11 is not merged yet); the other info items need no change.

`content:check`, `calc:test -k 18-02-problem-set-12` and `test:answers` pass. Status set to reviewed.
