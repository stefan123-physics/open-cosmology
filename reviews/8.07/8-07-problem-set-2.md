---
page: content/year-4/8.07/8-07-problem-set-2.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset02/ (read: pdftotext of the sheet, 7 printed pages)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/1ffda29d6ddadef8e37e4be9c071b4e7_MIT8_07F12_ln4.pdf (read: pdftotext, Lecture Notes 4, pp. 1-5)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read: pdftotext and rendered pages; Eq. (5.2.4) on printed p. 5 = PDF p. 6, Eq. (5.2.11) on printed p. 7 = PDF p. 8, both confirmed on the rendered page images)
  - Griffiths, Introduction to Electrodynamics (not opened, by course rule)
verdict: pass-with-notes
---

# Review: Problem Set 2: The Laplacian and averages, capacitors, electrostatic energy, virtual work and space charge

Order followed: the stripped statements and MIT's sheet were read first; the blind answers below were written to this file before the full page, its calcs file or the symbol meanings were opened.

## Blind solve

### My answers (from the stripped statements and MIT's sheet only)
- P1(a): surface term at r=R vanishes since g(R)=0; small sphere around origin contributes g*|grad f|*4 pi eps^2 ~ eps -> 0. Integral = 0.
- P1(b): d_i(g d_i f) = (d_i g)(d_i f) + g d_i d_i f.
- P1(c): int grad g . grad f = -int dOmega int_0^R df/dr dr = -4 pi (fbar(R) - f(0)); gives eq. (1.1).
  Box 1: V(0) - Vbar(R) = rho R^2/(6 eps0). (int_{r<R}(1/r - 1/R) d^3x = 2 pi R^2/3.)
  Box 2: lap V = 8, Vbar = 5 + 8 R^2/6 = 5.333 V.
- P2(a): E = q/(2 pi eps0 L r). (b) V(a)-V(b) = q ln(b/a)/(2 pi eps0 L). (c) C = 2 pi eps0 L/ln(b/a); per length 2 pi eps0/ln(b/a); cable 4.441e-11 F/m = 44.4 pF/m.
- P2(d): C -> eps0 A/d; exact excess for d=a/10: 0.1/ln(1.1) - 1 = 4.92 %.
- P3(a): E_r = Q r/(4 pi eps0 R^3) inside (Q/(4 pi eps0 r^2) outside). (b) V_in = Q (3 - r^2/R^2)/(8 pi eps0 R); V_out = Q/(4 pi eps0 r).
- P3(c): W = 3 Q^2/(20 pi eps0 R); 30 nC, 2.0 cm: 2.427e-4 J. (d) same W; fraction of field integral outside = 5/6 = 0.833.
- P4(a): F = Q^2/(2 eps0 A). (b) F = eps0 A V^2/(2 d^2); 400 cm^2, 1.5 mm, 300 V: 7.08e-3 N.
- P5(a): second-step work = P_ji Q_i Q_j + P_jj Q_j^2/2.
- P5(b): C = (C11 C22 - C12 C21)/(C11 + C22 + C12 + C21).
- P5(c): C11 = 4 pi eps0 ab/(b-a), C12 = C21 = -4 pi eps0 ab/(b-a), C22 = 4 pi eps0 b^2/(b-a); C = 4 pi eps0 ab/(b-a); 3 cm, 5 cm: 8.345 pF.
- P6(a): the current I (equivalently rho v). (b) v = sqrt(2 e V/m). (c) |rho| = (I/A) sqrt(m/(2 e V)).
- P6(d): beta = (I/(eps0 A)) sqrt(m/(2 e)).
- P6(e): V = (9 beta/4)^(2/3) x^(4/3); V(d/2)/V0 = 2^(-4/3) = 0.397.
- P6(f): K = (4 eps0 A/(9 d^2)) sqrt(2 e/m); 2.0 cm^2, 4.0 mm, 200 V: K = 2.917e-5 A/V^1.5, I = 0.0825 A = 82.5 mA.
- P7(a): F[f] = -4 pi f(0); for f = 3 exp(-r^2/b^2): -12 pi = -37.70.
- P7(b): c = 2 pi = 6.283.

### Comparison (one line per answer id)
- p1-why: choice 2 ("the weight g is zero on the sphere"): agrees.
- p1-rho: rho*R^2/(6*eps0): identical to mine.
- p1-avg: 5.33 (1%): agrees (5.3333).
- p2-e: q/(2*pi*eps0*L*r): identical.
- p2-dv: q*log(b/a)/(2*pi*eps0*L): identical.
- p2-c: 2*pi*eps0*L/log(b/a): identical.
- p2-num: 44.4 pF/m (1%): agrees (44.407).
- p2-pct: 4.92 (2%): agrees (4.9206); see W1 on the tolerance.
- p3-ein: Q*r/(4*pi*eps0*R^3): identical.
- p3-vin: Q*(3*R^2 - r^2)/(8*pi*eps0*R^3): identical.
- p3-w: 3*Q^2/(20*pi*eps0*R): identical.
- p3-wnum: 243 uJ: agrees (242.67).
- p3-out: 0.833: agrees (5/6).
- p4-fq: Q^2/(2*eps0*A): identical.
- p4-batt: choice 1 (stored energy rises, battery supplies twice the rise): correct (C grows as the gap shrinks; dW = V^2 dC/2, battery work V^2 dC).
- p4-fv: eps0*A*V^2/(2*d^2): identical.
- p4-num: 7.08 mN: agrees (7.0832).
- p5-step: Pji*Qi*Qj + Pjj*Qj^2/2: identical.
- p5-c: (C11*C22 - C12*C21)/(C11 + C12 + C21 + C22): identical.
- p5-c11: 4*pi*eps0*a*b/(b - a): identical.
- p5-c22: 4*pi*eps0*b^2/(b - a): identical.
- p5-cnum: 8.34 pF: agrees (8.3447).
- p6-const: choice 3 (charge crossing a plane per second): agrees.
- p6-v: sqrt(2*e*V/m): identical.
- p6-rho: I/A*sqrt(m/(2*e*V)): identical.
- p6-beta: I/(eps0*A)*sqrt(m/(2*e)): identical.
- p6-vx: (9*be/4)^(2/3)*x^(4/3): identical.
- p6-half: 0.397: agrees (0.39685).
- p6-k: 4*eps0*A/(9*d^2)*sqrt(2*e/m): identical.
- p6-inum: 82.5 mA: agrees (82.51).
- p7-f: -37.7: agrees (-12 pi = -37.699).
- p7-c: 6.28: agrees (2 pi = 6.2832).

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Problem 2(d), box p2-pct, `tolerance="2%"` (writer's doubt) | (box is our addition) | The box asks how much larger the *exact* capacitance is (4.92 %). 2 % of 4.92 is +-0.098, so 5.0, the second-order series estimate 1 + u/2 that the page's own check step computes and calls only "close to" the exact value, is accepted. The box does not test what it asks. | Set `tolerance="1%"`: accepts 4.87 to 4.97 (every 3-figure rounding of 4.9206) and rejects 5.0. |
| I1 | info | Problem 2(b), "(MIT's ΔV, from the inner cylinder to the outer shell, is minus this.)" | "find the potential difference ΔV between the outer shell and the inner cylinder" (no sign convention) | States MIT's ΔV as V(b) - V(a) | MIT does not fix the sign. Reword: "(MIT's sheet does not fix the sign of ΔV; taken as V(b) - V(a), as in the 8.02 notes, it is minus this.)" (8.02 Ch. 5 writes ΔV = V_b - V_a, Eq. (5.2.10), p. 7). |
| I2 | info | Problem 7 intro, formula "The Laplacian of 1/r as a distribution" | eqs. (7.10a)-(7.10c): first line with ∂_i∂_i(1/r), then "=" for the two integrations by parts | Merges (7.10a) and writes both steps with ≡ | Acceptable as a summary of three numbered lines. Optional: write "=" for the steps, as on the sheet. |
| I3 | info | Problems 3 and 5(c) (writer's doubt) | MIT's problems | The prerequisite lessons work the same examples: electrostatic-energy-self-energy ("Energy of a uniformly charged ball, two ways": inside potential, 3/5, "five sixths outside") and conductor-surface-forces-capacitance ("The matrices for two concentric shells": C11, C12, C22, C). The boxes p3-ein, p3-vin, p3-w, p5-c11, p5-c22 and p3-out can be read off them. The problems are MIT's, so keeping them is right; p3-wnum and p5-cnum use numbers different from the lessons'. | Keep the problems. Optionally add a line to the intro ("Problem 3 and Problem 5(c) are worked as examples in the lessons: try them before looking back"), and replace the p3-out box, whose 5/6 is printed in the lesson, with a quantity not in it, e.g. the fraction of W stored beyond r = 2R: (1/16)/(3/20) = 5/12 = 0.417. |
| I4 | info | Symbol meaning `g-a-smooth` (data/symbols.json, pages: 8-07-problem-set-2) | g_a = -∇²(1/(4π√(r²+a²))) | "The Laplacian of the smooth function −1/(4π√(r² + a²)) of Problem Set 1, with a minus sign" | Ambiguous (reads as a double minus). Reword: "Minus the Laplacian of 1/(4π√(r² + a²)) (Problem Set 1); it acts like a delta function when a is small." |
| I5 | info | Problem 6 formulas, `cite="mit" at="Problem 6, p. 4 (our own problem)"` | p. 4 has only the textbook pointer and the advice for part (e) | Our own formulas cite MIT p. 4 | Acceptable, each is marked "our own problem". No change needed. |

## Arithmetic and answer checks
- Every number recomputed in Python (eps0 = 8.854e-12, e = 1.602e-19, m = 9.109e-31): 5.3333 V; 4.4407e-11 F/m; 4.9206 %; 2.4267e-4 J; 0.8333; 7.0832e-3 N; Q = 70.8 nC; 8.3447 pF; C22 = 13.91 pF; v(200 V) = 8.39e6 m/s (2.8 % of c); sqrt(2e/m) = 5.931e5; K = 2.9173e-5 A/V^1.5; I = 82.51 mA; 2^(-4/3) = 0.39685; -12 pi = -37.699; 2 pi = 6.2832. All match the page.
- Numerical integrals (scipy quad): int_0^R (1/r - 1/R) 4 pi r^2 dr at R = 0.5: 0.523599 = 2 pi R^2/3; F for f = 3 exp(-r^2/b^2), b = 1.7: -37.6991 = -12 pi; 2D check int_0^inf (4r^2 - 4) e^(-r^2) ln r 2 pi r dr = 6.28319. All as the page states.
- Steps checked: P1(a) small-sphere flux bound and the 1/r^2 bound on the integrand; check f = z; P1(b) check g = x, f = x^2; P1(c) total-derivative argument; P2(d) thin-gap limit and the claim that the mid-radius area is the best A (ratio u/((1 + u/2) ln(1 + u)) = 1 + O(u^2): true); P3(b) continuity, V(0) = 3/2 V(R) and the link to P1 (Q/(8 pi eps0 R) = rho R^2/(6 eps0): true); P3(d) prefactor 3Q^2/(16 pi eps0 R^6) times 4R^5/5 = 3Q^2/(20 pi eps0 R): true; P4 energy balances at fixed Q and fixed V and the consistency check; P5(a) symmetry from W = W' and the transpose-inverse proof; P5(b) back-substitution and 1/C = P11 - P12 - P21 + P22; P5(c) inverse of P, C22 = C11 + 4 pi eps0 b; P6 first integral (V'^2 = 4 beta V^(1/2)), separation, power check p - 2 = -p/2, Gauss check of the total space charge -4/3 eps0 A V0/d; P7(a),(b) with the epsilon-ball surface terms; Gaussian check of (a) (nabla^2 f = 3(4r^2/b^4 - 6/b^2) e^(-r^2/b^2): true); line-charge check of 2 pi. All correct; every solution ends with a check.
- Formula boxes: all vars ranges keep the answer and every listed mistake finite and real (p2-dv, p2-c, p5-c11, p5-c22 have a < b; in p5-c the denominator is at least 1.9 and the numerator positive). Each mistake differs from the answer over the ranges, and each mistake hint is true of its formula (checked one by one; e.g. p2-e "q/(2 pi eps0 r) has the units of a potential": true; p6-rho "I sqrt(m/(2eV)) is the charge per unit length": true; p3-w "Q^2/(40 pi eps0 R) is the inside energy only": true; p5-c "-C12 holds when conductor 2 encloses 1": true, since then C11 = -C21; p6-vx "(dV/dx)^2 = 4 beta sqrt V": true).
- Number boxes: 1 % everywhere except p2-pct (W1). Each 1 % box rejects the obvious slip (p1-avg 5.00 or 6.00; p3-wnum 202 for a shell; p4-num 14.2 without the half; p6-half 0.5; p7-f +37.7; p7-c -6.28). Units stated in every label.
- Choice boxes: right answers at positions 2, 1 and 3; the right one is not systematically the longest or shortest.
- Points: P1 4+3+8 = 15, P2 3+2+3+2 = 10, P3 3+4+4+4 = 15, P4 5+5 = 10, P5 6+4+5 = 15, P6 2+2+3+3+6+4 = 20 (85, as MIT); P7 12+8 = 20 extra credit, marked optional. Matches MIT's sheet.
- No hint gives a result away (hints point to the method; explicit factors appear only in mistake hints, shown after a wrong answer).

## Coverage and order
- All seven MIT problems in MIT's order, with MIT's parts in order. Left out, and said so in the intro: due date, reading assignment, the extra-credit grading note; the Griffiths comparisons are replaced by the 8.02 course notes (citations verified on the rendered pages).
- Problem 6 (MIT: Griffiths pointer, title and advice only) is our own problem, marked "(our own problem)" in its title and first line and listed in the intro, with MIT's 20 points. It is well posed (cathode at V = 0, zero emission speed, steady state, the space-charge-limited condition dV/dx(0) = 0 stated with its reason), all six parts are correct, and MIT's advice "for part (e)" is placed on the page's part (e), where it applies. Whether its part structure resembles the textbook problem could not be checked (the textbook may not be opened); nothing on the page reads as taken from it.
- Problem 7 is optional; MIT's long introduction is summarised in the page's own words. Equation numbers and pages: (7.1) p. 4, (7.6) p. 5, (7.7), (7.10), (7.11) p. 6, (7.12), (7.14) p. 7: correct.
- Other citations checked against the printed pages: sheet (1.1), (1.2) p. 1; (1.3)-(1.5) p. 2; (3.1), (3.2), (5.1) p. 3; P5(a) pp. 3-4; P5(b),(c), P6 p. 4. Lecture Notes 4: (4.15) p. 4, (4.17) and (4.18) p. 5. 8.02 Ch. 5: (5.2.4) p. 5, (5.2.11) p. 7. All correct.
- Claims about Lecture Notes 4 checked in its text: shell energy Q^2/(8 pi eps0 R) (eq. 4.5) and the pressure sigma^2/(2 eps0) = (1/2) sigma E_out on a sphere (eq. 4.11): both there.
- Renaming MIT's φ to f (writer's doubt): stated in the intro and in the symbol meanings of f and φ; consistent with Problem Set 1. No objection.

## Licensing
- MIT's sheet has no rights notice or "Courtesy of" credit. The Problem 2 sketch is described in words, not redrawn; the only figure is a generated Plot of V/V0 = (x/d)^(4/3).
- Griffiths not used; its equation and example references are replaced by the 8.02 course notes (MIT OCW). No OpenStax or LibreTexts material. Text rewritten throughout; no verbatim sentences from the sheet beyond titles and standard terms.
- No em dashes (count 0), no control characters, no "## Summary".

## Notes
- Symbols: the 82 meanings scoped to this page were read; units are sensible (C and C_ij in F, P_ij in 1/F, W in J). Only g-a-smooth reads ambiguously (I4). K and beta have no unit (A/V^(3/2), V^(3/2)/m^2); optional.
- The calcs file ties every answer id to an entry; I did not run calc:test, but every value was recomputed independently above.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-27, by the page author)

- Warning 1: box p2-pct now has `tolerance="1%"`, so it accepts 4.87 to 4.97 and rejects the series estimate 5.0.
- Info 1: Problem 2(b) now says MIT's sheet does not fix the sign of ΔV; taken as V(b) − V(a), as in the 8.02 notes, it is minus this.
- Other info items: kept as they are.

Status set to `reviewed`.
