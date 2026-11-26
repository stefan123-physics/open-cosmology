---
page: content/year-3/8.06/8-06-problem-set-4.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-4/ (read, pdftotext of the PDF, 7 printed pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-3-semiclassical-approximation/ (read, MIT8_06S18ch3.pdf, for eqs. (3.2.28), (3.3.1), (3.3.6), (3.4.44)-(3.4.46))
  - https://arxiv.org/abs/hep-ph/0306198 (not read; the page says it read only the abstract, and only the attribution to MIT's sheet was checked)
  - https://dlmf.nist.gov/9.9 (not fetched; zeros checked with scipy.special.ai_zeros: -2.33810741, -4.08794944)
verdict: pass-with-notes
---

# Review: Problem Set 4: WKB at work, from Airy functions to tunnelling

## Blind solve

### My answers (written before opening the full page)
- 1(a) X = hbar^2 [ p''/(2p) - 3 p'^2/(4 p^2) ].
- 1(b) X/p^2 = (lambda'^2 - 2 lambda lambda'')/(16 pi^2); conditions 3 lambda'^2/(16 pi^2) << 1 and |2 lambda'^2 - lambda lambda''|/(8 pi^2) << 1, i.e. |lambda'| << 1 and |lambda lambda''| << 1.
- 1(c) X/p^2 = -5 hbar^2/(32 m g s^3) = -(5/16)(L/s)^3; |X/p^2| < 0.01 for s > 31.25^(1/3) L = 3.150 L.
- 2(a) u = x/L - E/(g L).
- 2(b) -k^2 psi~ = i dpsi~/dk, psi~ = exp(i k^3/3); psi(u) = (1/pi) int_0^inf cos(k^3/3 + k u) dk.
- 2(c) zeros -2.33811, -4.08795; nu = 2.33811, 4.08795.
- 3(a) E_n = [ (3 pi/2)(n + 3/4) ]^(2/3) (m g^2 hbar^2/2)^(1/3).
- 3(b) E_0 = 1.396e-12 eV (exact Airy value 1.407e-12 eV); turning point x0 = E0/(m g) = 13.6 micrometres.
- 3(c) E = m g h = 9.81e-3 J; n ~ 8.9e30 (level spacing ~7.3e-34 J).
- 4(a) E = alpha x0^4.
- 4(c) beta = (pi/(2 sqrt2 I))^(4/3) = 1.37651, delta = 1/2, eps = 4/3; e~ = 0.54627, 2.36356, 4.67052, 7.31480, 10.2265, 13.3638; relative errors n=0: -18.22 %, n=2: -0.560 %, n=5: -0.116 % (-0.117 % with beta = 1.3765).
- 5(a) psi_ii = (2D/sqrt k) cos(theta - chi - pi/4).
- 5(b) even: tan theta = 2 e^phi; odd: tan theta = -2 e^phi.
- 5(c) Delta = hbar omega e^(-phi)/pi (even level lower by hbar omega e^(-phi)/(2 pi), odd higher by the same).
- 5(d) tau = 2 pi hbar/Delta = 2 pi^2 e^phi/omega.
- 5(e) phi = 4 sqrt(2m) (F a - E)^(3/2)/(3 hbar F) = (4/3)((Fa-E)/E_F)^(3/2); E_0 = (3pi/8)^(2/3) E_F = 1.1155 E_F, hbar omega = pi E_F/(2 sqrt(1.1155)) = 1.4873 E_F, phi = 6.5321, Delta = 6.89e-4 E_F. (Finite-difference check, 16001 points: exact splitting 5.748e-4 E_F, levels 1.0185 and 1.0191 E_F; WKB is 20% high.)
- 6(a) k = N; E_- - E_+ = 2 lambda^N / V0^(N-1) (N = 1: 2 lambda, exact).
- 6(b) lambda = hbar^2/(2 m l^2); l^2 V0 = hbar^2/(2 m eps); Delta = 2 V0 eps^N = 2 V0 exp[-sqrt(eps) ln(1/eps) W sqrt(2 m V0)/hbar].
- 6(c) t = pi hbar/Delta; rate = Delta/(pi hbar) = (2 V0/(pi hbar)) exp(-c W sqrt(2mV0)/hbar), c = sqrt(eps) ln(1/eps); same W sqrt(V0) scaling as WKB, but c <= 2/e = 0.7358 (at eps = e^-2) < 2, so weaker suppression than WKB.

### Comparison with the page (one line per answer id)
- p1-x: page hbar^2(p2/(2p) - 3 p1^2/(4p^2)) = mine. Agree.
- p1-ratio: (l1^2 - 2 lam l2)/(16 pi^2) = mine. Agree.
- p1-lin: -5 hbar^2/(32 m g s^3) = mine. Agree.
- p1-dist: 3.15 (1%) = mine 3.1498. Agree.
- p2-u: x/L - E/(gL) = mine. Agree.
- p2-ode: choice 2, psi~' = i k^2 psi~ = mine. Agree.
- p2-arg: k^3/3 + k u = mine. Agree.
- p2-e1: 2.338 (0.2%) vs 2.33811. Agree; WKB 2.3203 (0.77% off) is rejected, as the page says.
- p2-e2: 4.088 (0.1%) vs 4.08795. Agree; WKB 4.0818 (0.15% off) is rejected; 4.09 (3 s.f.) is accepted.
- p3-en: [9 pi^2 m g^2 hbar^2 (n+3/4)^2/8]^(1/3) = mine (same expression). Agree.
- p3-e0: 1.40 (1.5%, window 1.379 to 1.421) admits WKB 1.396 and exact 1.407. Agree.
- p3-height: 13.6 um (1.5%, window 13.40 to 13.80) admits WKB 13.62 and exact 13.72. Agree.
- p3-n: 8.91e30 (2%) = mine 8.913e30. Agree.
- p4-e: alpha x0^4. Agree.
- p4-eps 1.333, p4-delta 0.5, p4-beta 1.3765, p4-e0 0.546. Agree (beta = 1.376507).
- p4-err0: -18.2 % (2%). Mine -18.22 %. Agree.
- p4-err5: -0.12 +/- 0.03 absolute. Mine -0.1161 % (-0.1167 % with beta = 1.3765). Agree; a 4-digit beta 1.376 gives -0.153 % (rejected) and 1.377 gives -0.08 % (rejected), consistent with "keep five digits".
- p5-ii: choice 3, cos(theta - chi - pi/4) = mine. Agree.
- p5-even: 2 e^phi = mine. Agree. p5-odd: choice 1, -2 e^phi = mine. Agree.
- p5-split: hbar omega e^-phi/pi = mine. Agree.
- p5-tau: 2 pi^2 e^phi/omega = mine. Agree.
- p5-phi: 4 sqrt(2m)(Fa - E)^(3/2)/(3 hbar F) = mine. Agree.
- p5-num: 6.9e-4 E_F (3%) = mine 6.893e-4. Agree (WKB value; see Notes for the exact value 5.75e-4).
- p6-k: choice 2, k = N. Agree.
- p6-split: 2 lam^N/V0^(N-1) = mine. Agree; exact diagonalisation (lambda = 0.01, V0 = 1) gives 1.9996e-4, 1.9996e-6, 1.9996e-8 for N = 2, 3, 4 against 2e-4, 2e-6, 2e-8.
- p6-lam: hbar^2/(2 m l^2). Agree.
- p6-splitb: 2 V0 eps^(W sqrt(2 m eps V0)/hbar). Agree.
- p6-t: pi hbar/Delta. Agree.
- p6-scale: choice 2, "always smaller than 1". Agree (max c = 2/e = 0.7358).
- p6-c: 0.736 (1%). Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 5(b), Formula "Even state inside the barrier", at="Problem 5, eq. (2), p. 4" | MIT's eq. (2) is C/sqrt(kappa) cosh((1/hbar) int_0^x dy kappa(y)), with kappa a momentum | cosh(int_0^x kappa dy), with kappa a wavenumber (hbar kappa = sqrt(2m(V-E)), the page's stated notation) | Optional: add "(in this page's notation, MIT's kappa/hbar is our kappa)" to `at=`. |
| 2 | info | Problem 2(b) statement | MIT adds that the integral shows Ai decays fast for u > 0 and oscillates for u < 0 | omitted | Optional one sentence; not needed for any box. |
| 3 | info | Problem 4(c) statement | MIT asks for the relative errors for n = 0, 2 and 5 | "Type the relative errors in per cent" but there are boxes only for n = 0 and n = 5 (the n = 2 value is in the solution table) | Say "Type the errors for n = 0 and 5" or add a p4-err2 box (-0.56 %, tolerance 0.03 absolute). |
| 4 | info | Problem 6(c) | "tunneling rate (tunneling probability per unit time)" | rate = 1/t for the first time of probability 1, flagged as our choice | Fine as is; flagged on the page. |

All formula citations checked: MIT page numbers (Problem 1 p. 1; Problem 2 eq. (1) p. 1, (a)-(c) p. 2; Problem 3 pp. 2-3; Problem 4 pp. 3-4 with eq. (1) on p. 4; Problem 5 and its eq. (2) p. 4; Problem 6 eqs. (3), (4) p. 5, eq. (5) p. 6, 6(c) pp. 6-7) are the printed pages. Notes chapter 3: (3.2.28) is dlambda/dx << 1; (3.3.1) is the connection for a forbidden region on the right; (3.3.6) is int_0^a k dx = (n + 3/4) pi for a wall and a soft turning point; (3.4.44) is the general connection with the forbidden region on the right; (3.4.45) and (3.4.46) are the decaying and growing relations with the forbidden region on the left (growing exponential with a minus sign corresponds to +sin). All the page's uses match. The (n + 1/2) pi rule is cited to MIT's sheet, Problem 4(b) eq. (1), not to the notes, and the page derives it: correct.

## Arithmetic and answer checks
- Every number recomputed (script in the reviewer's scratch folder): 31.25^(1/3) = 3.1498; Ai(1) = 0.1352924 from the turned-path integral (matches scipy airy); that integral vanishes at -2.33811 and -4.08795 (residuals 2e-6, 4e-7) and its finite-difference second derivative at u = 1.5 equals 1.5 Ai(1.5) (0.107624 both); (9 pi/8)^(2/3) = 2.3203, ((3 pi/2)(7/4))^(2/3) = 4.0818; energy scale 6.018e-13 eV; E0 = 1.396e-12 eV (exact 1.407e-12); heights 13.62 and 13.72 um; n + 3/4 = 8.913e30; dE/dn = 7.337e-34 J = h/0.903 s; I = 0.874019, beta = 1.376507, the full table of e~_n and errors matches to the digits shown; harmonic-well check for phi = 4: exact splitting 0.0058299 hbar omega vs e^-4/pi = 0.0058300; pi e^10 = 69,198 ("about 69,000"); 5(e): E = 1.11546, hbar omega = 1.48728, phi = 6.53211, e^-phi = 1.456e-3, Delta = 6.893e-4; 6(a) N = 2 and N = 3 closed forms checked against diagonalisation; 2/e = 0.7358 at eps = e^-2 = 0.135; 1/(16 pi^2) = 0.00633.
- Formula boxes: every `expr` is the solution's result; `vars` ranges keep each formula finite and real (5(e): F in [1,2], a in [2,3], E in [0.2,1] gives Fa - E > 0). Every listed mistake differs from the answer and every mistake hint is true of its formula (checked each: e.g. 3(a) "3 pi (n+3/4) hbar g sqrt(m/2)/2" is indeed E^(3/2); 6(a) "-2 lam^N/V0^(N-1)" hint on the sign is right; 6(b) mistakes correspond to dropping sqrt(eps), inverting it, and an extra eps factor).
- Number-box tolerances: 2(c) 0.2 % and 0.1 % accept the exact zeros and 3-s.f. rounding (2.34, 4.09) and reject the WKB values; 3(b) 1.5 % accepts both WKB and exact as the page says; 4 n = 5 window [-0.15, -0.09] accepts beta to five digits and rejects the four-digit values; 5(e) 3 % accepts 6.9 and 7 and rejects the exact numerical 5.75.
- Choice boxes: correct positions 2, 3, 1, 2, 2 (varied); the correct choice is never the conspicuously longest.
- Hints: none prints the result of its own part; 5(e) hint 2 uses dtheta/dE = pi/(hbar omega), which the 5(c) statement itself gives; 3(b) hint points to part (a) without its number. Fine.
- Every solution ends with a check (units, limit or number).
- Points: 10 + 10 + 10 + 10 + 20 + 20 = 80, as MIT; part splits add up in each problem.

## Coverage and order
- All six MIT problems, in MIT's order, with MIT's parts in MIT's order; Problem 1(c), the 3(b) height, the 4(c) full table, the 6(c) largest-c box and the 6(a) small-N checks are additions, each marked on the page and listed in the intro.
- Problem 5 is clearly marked as our own (intro, exercise title "The double well (our own problem)", opening paragraph, and `at=` of its formulas). It follows the method of MIT's hint (wavefunction in region (iii) fixed by symmetry, consistency of two region-(ii) forms). Its results are correct: tan theta = +/-2 e^phi, Delta = hbar omega e^-phi/pi, tau = 2 pi^2 e^phi/omega. Carrying the growing exponential through x1 by symmetry is justified on the page with MIT's own remark ("by symmetry, the exponentially small piece ... is known exactly").
- `covers: [7, 8]`: the sheet has no time-dependent perturbation theory, so stopping at 8 is right. Problem 1 practises the local wavelength of lecture 6 (lesson `semiclassical-local-de-broglie-wavelength`), but lecture 6 also holds the Zeeman lesson, which would get a wrong "Practise" link; leaving 6 out is a defensible choice (info).

## Licensing
- No MIT figure is reproduced: Figure 1 of MIT's sheet is described in words. The Plot in 5(e) is generated from the page's own formula. No "rights reserved" or "courtesy" notice in the problem set or in chapter 3 of the notes (grep: 0).
- Statements are in the page's own words; no long verbatim runs from the sheet found.
- Griffiths is named only as MIT's pointer and stated as not used. Nesvizhevsky et al.: cited as on MIT's sheet (Nature 415, 297 (2002) and arXiv:hep-ph/0306198 both appear on p. 3), with the honest note that only the arXiv abstract was read; the description of the experiment in the 3(b) check (mirror below, absorber above, no transmission below the lowest state's height) is the standard account of that paper and is uncertain only to the extent that the reviewer did not re-read the abstract. The Nature paper (Springer Nature) is cited only, in line with AGENTS.md rule 11.
- DLMF Table 9.9.1 values -2.33811, -4.08795 agree with scipy's ai_zeros.

## Notes
- 5(e) "estimate" (asked by the writer): the WKB splitting 6.89e-4 E_F and a finite-difference value (16001 points on [-14, 14] and [-18, 18], stable to 4 digits) of 5.748e-4 E_F differ by 20 %; the exact pair sits at 1.0185 and 1.0191 E_F against the WKB level 1.1155 E_F (9 % high, because of the kink at the bottom of each well). The page calls the result an estimate and explains why the lowest state is least reliable, so the wording and the 3 % box (which tests the WKB arithmetic the question asks for) are acceptable. Optional: add the exact value to the check, e.g. "A numerical solution of the Schrödinger equation gives 5.7 × 10⁻⁴ E_F: the WKB estimate is 20 % high." (needs a calcs entry).
- 6(c): the main text compares c with the 2 of the WKB probability (as MIT's wording invites), and the check argues the fairer comparison is with the amplitude exponent 1; both statements are true (c <= 0.736 < 1 < 2) and the choice box "always smaller than 1" is consistent with both. The explanation offered (lattice step 1/sqrt(eps) times the decay length) is a plausible reading, not something MIT states; acceptable as the page's own commentary.
- No em dashes, no `## Summary`.
- Symbols file (data/symbols.json) was not audited entry by entry; `content:check` enforces it.

COUNTS: errors=0 warnings=0 info=6

## Resolution (2026-11-26, by the page author)

No errors or warnings. Info 1: the `at=` of "Even state inside the barrier" now says that MIT's κ/ħ is the page's κ. The other info items are left as they are (optional).
