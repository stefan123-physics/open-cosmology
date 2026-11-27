---
page: content/year-4/8.07/8-07-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset07/ (read: pset07.pdf rendered page by page, and pdftotext)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read, pp. 1, 2, 4, 5, 7 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read, slides 3, 15, 20, 21, 23 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: chapter PDF, printed pages 2 and 8)
  - MIT 8.07 Problem Set 8 (pset08.txt, read for the "held over" note)
  - Griffiths: not opened (course rule)
verdict: pass-with-notes
---

# Review: Problem Set 7 (8.07, magnetostatics)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page; checked numerically in rv7/blind.py)
- p1a: v = E/B.
- p1b: e/m_e = E/(B^2 R).
- p1c: 1.2e4/((0.8e-3)^2 * 0.104) = 1.8029e11 C/kg -> 1.803 (in 1e11 C/kg); 2.51 % above CODATA 2018 1.75882e11.
- p2a: B = mu0 I L / (2 pi s sqrt(4 s^2 + L^2)) (= mu0 I L/(4 pi s sqrt(s^2+L^2/4))); quad of Biot-Savart agrees to 1e-15.
- p2b: B = 9 mu0 I/(2 pi L) = 36.0 uT (numerical integration: 36.0).
- p2c: B_z = mu0 I R^2 / (2 (R^2+z^2)^(3/2)) (20000-element loop sum agrees).
- p3a: B_z(0) = (mu0 n I/2)[z2/sqrt(z2^2+R^2) - z1/sqrt(z1^2+R^2)], along +z; worked case 0.95453 mu0 n I.
- p3b: B_z = mu0 n I.
- p4a: A = (B/2)(-y, x, 0); curl = B z^, div = 0; |A| = B s/2.
- p4b: curl(Bx y^) = B z^; lambda = B x y/2.
- p5a: no, speed constant (magnetic force perpendicular to v; numerical orbit: |v| constant to 1e-12).
- p5b: C = kappa = mu0 q_e q_m/(4 pi).
- p5c: dQ/dt = dL/dt - kappa dr^/dt = 0 (numerical orbit: Q constant to 1e-10).
- p5d: Q.r^ = -kappa, so cos theta = -mu0 q_e q_m/(4 pi Q) (numerical orbit confirms).
- p6a: m_z = q omega R^2/5 (triple integral: 0.2 for q=omega=R=1).
- p6b: B_avg,z = mu0 q omega/(10 pi R).
- p6c: A_phi = mu0 q omega R^2 sin(theta)/(20 pi r^2).
- p6d: exact for every r > R (J is degree-1 in angle, all l >= 2 moments vanish; equivalently each shell gives a pure dipole outside). Direct integration of A at r = 1.3R and 2R equals the dipole value to 1e-15.
- p7a-c: shown (trace of 7.1; contraction with p_j; epsilon-epsilon contraction gives m 4pi delta - m/3 * 4pi delta = (8pi/3) m delta -> 2mu0/3 m delta).
- p7d: integral of cos^2 theta dOmega = 4 pi/3 = 4.18879.
- p7e: second term gives (7.9); first term -> -surface integral with outward normal of r>eps equal to -r^, i.e. + oint phi r^_i r^_j dOmega -> (4pi/3) delta_ij phi(0).


### Comparison (one line per answer id)
- p1-v `E/B`: agrees.
- p1-em `E/(B^2*R)`: agrees.
- p1-num 1.803 (1%): agrees (1.80288).
- p2-seg `mu0*I*L/(2*pi*s*sqrt(4*s^2+L^2))`: agrees (identical form).
- p2-tri 36.0 uT: agrees.
- p2-ring `mu0*I*R^2/(2*(R^2+z^2)^(3/2))`: agrees.
- p3-b: agrees (identical form); p3-frac 0.955: agrees (0.95453).
- p3-inf `mu0*n*I`: agrees.
- p4-a `B*s/2`: agrees. p4-lam `B*x*y/2`: agrees.
- p5-speed choice 2 ("stays constant: the force is perpendicular to v"): agrees.
- p5-c `mu0*qe*qm/(4*pi)`: agrees. p5-cos `-mu0*qe*qm/(4*pi*Q)`: agrees (also checked on a numerically integrated orbit: cos theta = -0.49451 = -kappa/Q, constant to 1e-10).
- p6-m `q*w*R^2/5`: agrees. p6-bavg `mu0*q*w/(10*pi*R)`: agrees. p6-a `mu0*q*w*R^2*sin(th)/(20*pi*r^2)`: agrees.
- p6-exact choice 0 ("exact at every point outside the ball"): agrees; confirmed by direct 3D integration of A at r = 1.3R and 2R (equal to the dipole value to 1e-15).
- p7-cos2 4.189: agrees.
- p7-normal choice 1 ("-r^, pointing towards the origin"): agrees.
- No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How to answer", second paragraph: "The splits between parts are ours." | MIT gives the part points for Problem 3 (10 + 5), Problem 5 (5 each for a-d) and Problem 7 (5 each for a-d, 10 extra for e) | All splits called "ours" | "MIT gives the points of the parts of Problems 3, 5 and 7; the splits in Problems 1, 2, 4 and 6 are ours." |
| 2 | warning | Problem 6(b), formula "The average field of currents inside a sphere", `cite="mit" at="Problem 6, p. 2 (the result MIT says to use without proof, stated here)"`, and "MIT's sheet asks you to use the following result" | MIT's sheet only says "use Eq. (5.89), from Problem 5.57" of the textbook; no formula on the sheet | Identifies the textbook equation with this formula and cites MIT's sheet for it | The formula is correct (B_avg = (mu0/4pi) 2m/R^3; the page's own plausibility step derives it from the delta term of LN10 p. 7). Reword to "MIT's sheet asks you to use a textbook result for the average field without proof. That result is:" and cite it to `reading1` at "p. 7 (follows from the boxed delta-function term; see 'Why the result is plausible')", so the page does not assert the content of a textbook equation the writer may not open. |
| 3 | warning | Problem 6(d), second hint: "... is zero unless l = 1, by the orthogonality of spherical harmonics of different degree" | (our own part) | The hint states the conclusion that decides the choice box | End the hint at "... times a traceless product of degree l." and ask "What does the orthogonality of spherical harmonics of different degree say about this integral?" |
| 4 | warning | Intro: "Our additions to them are marked: ... and the choice box of Problem 7(e)" | MIT's 7(e) has no such question | Box p7-normal is not marked as our addition where it stands (3(a) and 7(d) are marked "(our addition)") | Part (e) text: "Carry out the two steps. The box below (our addition) asks about one step on the way." |
| 5 | info | Problem 1(c) | (textbook pointer) | Numbers chosen to give e/m 2.5% above CODATA; said openly in the check (10.4 cm measured vs 10.66 cm true) | Honest and acceptable: "In a test run" signals invented data and the check names the gap. The cause offered ("a beam that fans out or a field that is not quite uniform") is plausible but uncited; consider "for example" or drop it. |
| 6 | info | Problem 6, setup and parts | Textbook pointer with two instructions about parts (b) and (c) | Solid ball; (a) moment, (b) average field, (c) far A at (r, theta), (d) how good the dipole result is outside | From the reviewer's general recollection (textbook not opened; uncertain), the part sequence resembles the textbook problem's own. MIT's two instructions already fix (b) and (c), and (d) is asked and answered by a different route (multipole moments) in the page's own words, so no change required; noted for the owner's rule on reconstruction. |
| 7 | info | Readings | LN10 is dated 11/7/12 ("Lecture 25"); PS7 was due 11/2/12; LN10 p. 7 refers to "PS 7, Prob 7" | Set placed after the lessons of LN10 and LN11 (`covers: [10, 11]`) | Fine for this site's order; at MIT the set came before the dipole lectures. No change needed. |

## Arithmetic and answer checks
- All numbers recomputed independently (scratch script rv7/blind.py): e/m = 1.80288e11 C/kg (+2.505% vs CODATA 2018 1.75882e11); v = 1.50e7 m/s (5.0% of c); true radius 10.66 cm; triangle 36.0 uT; inscribed/circumscribed radii 2.887/5.774 cm and ring fields 43.5/21.8 uT; solenoid 0.9806, 0.9285, 0.95453 (4.5% below mu0 n I); m_z = 0.2 q w R^2 by triple integral; B_avg coefficient 1/(10 pi); A_phi exact outside equals dipole; int cos^2 dOmega = 4.18879.
- Mistake hints: every listed mistake formula is what its hint says (E/(BR) = v/R; half-segment field; sum of ring element sizes mu0 I R/(2(R^2+z^2)); shell moment qwR^2/3 gives mu0 q w/(6 pi R) and mu0 q w R^2 sin/(12 pi r^2); sign and 4pi slips in p5).
- vars ranges: all answers and mistakes finite; p5-cos keeps |kappa/Q| <= 0.36, physical; p3-b keeps z1 < z2.
- Number tolerances (1%) reject the plausible slips (CODATA 1.759 vs 1.803; one-end 0.981 vs 0.955; 4pi vs 4pi/3).
- Choice boxes: right answers at positions 2, 0, 1; none is the longest or shortest option.
- Every solution step checked; each part ends with a check (units, a limit or a second route). 7(e) signs (outward normal -r^ of the region r > eps) are correct.
- `npm run content:check` in the worktree: 0 errors (the only warning for this page: no review file yet). `npm run calc:test -- -k problem-set-7`: passed.

## Coverage and order
- All seven MIT problems in MIT's order, with MIT's points (115 + 10 extra). Problems 1, 2, 4, parts (a)-(c) of 5 and the setup of 6 are marked as our own; 3, 5(d) and 7 are MIT's, rewritten.
- Sheet slips verified on the rendered PDF: title "J.J. THOMPSON" (p. 1); "large compared to 1/a" with radius R (p. 1); "(4pi/3) delta_ij phi(r)" at the end of p. 4, while the corrected (7.8) on p. 3 has phi(0). All three corrections are right.
- MIT's 5(d) asks for theta; the page asks for cos theta (equivalent).
- "Held over" claim right: MIT's PS8 Problem 1 is this problem, "held over from Problem Set 7".
- Citations checked: (7.1)-(7.4) p. 2; (7.5)-(7.8) p. 3; (7.9)-(7.12) p. 4; LN10 p. 2 (expansion and moments, boxed), p. 4 (m, boxed), p. 5 (A dipole, boxed), p. 7 (B_dip, boxed); LN11 slide 3 (curl of e_i x r = 2 e_i), slide 15 (q v x B boxed), slide 20 (second derivatives of 1/r), slides 20-21 (div B_dip = 0), slide 23 (E_dip delta term -4pi/3 p); 8.02T Chapter 9 Eq. (9.1.1) printed p. 2 and Eq. (9.1.15) printed p. 8. All correct.

## Licensing
- MIT's sheet has no "All rights reserved" or "Courtesy of" notice; none seen in the parts of LN10, LN11 and the 8.02T chapter read. No figures. No OpenStax or LibreTexts. Wording is the page's own; MIT's 7(e) text is closely paraphrased but rewritten. The textbook was not used as text (see rows 2 and 6).

## Notes
- Links checked: biot-savart-law (8.02), magnetic-monopoles (8.286), the four 8.07 prerequisite lessons, and Problem Set 4 #p6 (average electric field, -p/(4 pi eps0 R^3)), which the 6(b) step cites correctly.
- No em dashes, no `## Summary`. Symbol meanings scoped to this page read correctly (units: q_m A m, kappa and Q kg m^2/s, lambda T m^2).
- The monopole cosmology remark (GUTs predict monopoles; 8.286 asks why so few) is fair.

COUNTS: errors=0 warnings=4 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: "How to answer" now says MIT gives the points of the parts of Problems 3, 5 and 7, and the splits in Problems 1, 2, 4 and 6 are ours.
- Warning 2: Problem 6(b) now says MIT's sheet asks for a textbook result without proof, "That result is:", and the Formula cites Lecture Notes 10 (reading1), p. 7, instead of MIT's sheet.
- Warning 3: the second hint of Problem 6(d) now ends with a question about the orthogonality of spherical harmonics instead of giving the result.
- Warning 4: Part 7(e) now marks its choice box "(our addition)".
- Info items left as they are.
- `status: reviewed`.
