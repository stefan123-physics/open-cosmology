---
page: content/year-3/8.044/8-044-problem-set-6.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps6/ (read: pdftotext and page 1 rendered; 3 printed pages + OCW sheet)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss6/ (read: pdftotext, printed footer checked on every page; 7 printed pages + OCW sheet; opened only after the blind solve below was written)
verdict: needs-changes
---

# Review: Problem Set 6: sound in a solid, a surface film, a Bose gas and a paramagnet

## Blind solve

### My answers (written before opening the full page, its calcs file or MIT's solutions)

Problem 1
- (a) (dP/dT)_V = alpha/kappa. dU = C_V dT + (alpha T/kappa - P) dV; adiabatic dQ = dU + P dV = 0 gives C_V dT + (alpha T/kappa) dV = 0.
- (b) dV = V0(alpha dT - kappa dP) inserted: dT (C_V + V0 alpha^2 T/kappa) = alpha T V0 dP, so
  DeltaT/DeltaP = alpha T / (c + alpha^2 T/kappa) = kappa alpha T / (kappa c + alpha^2 T), c = C_V/V0. Positive for alpha > 0: the two waves are in phase (temperature crests at the pressure crests).
- (c) alpha^2 T/kappa = 93 750 J m^-3 K^-1; denominator 3.09375e6; ratio 4.848e-9 K/Pa; DeltaT = 4.85e-4 K = 0.485 mK.

Problem 2
- (a) Maxwell from dF = -S dT + Ssurf dA: (dS/dA)_T = -(dSsurf/dT)_A = Nk/(A - b). (dC_A/dA)_T = T d/dT[Nk/(A-b)] = 0.
- (b) (dE/dA)_T = T(dS/dA)_T + Ssurf = 0, so E = E(T) = integral of C_A(T) dT + const.
- (c) S(T,A2) - S(T,A1) = Nk ln[(A2 - b)/(A1 - b)].

Problem 3
- (a) dE = C_V dT + [(3/2) a T^(5/2) + 2 b T^3 - c/V^2] dV.
- (b) d = 15a/4, e = 6b, f unrestricted (c also unrestricted).
- (c) E = (3/2) a T^(5/2) V + 2 b T^3 V + 2 f T^(1/2) + c/V + const.
- (d) S = (5/2) a T^(3/2) V + 3 b T^2 V + 2 f T^(1/2) + const.
  Check: F = E - TS gives P = -(dF/dV)_T = aT^(5/2) + bT^3 + c/V^2 (done by hand).

Problem 4
- (a) (dS/dM)_T = -(dH/dT)_M = -M/A; (dC_M/dM)_T = T d/dT(-M/A) = 0.
- (b) (dE/dM)_T = T(-M/A) + H = -T0 M/A; E = integral C_M(T) dT - T0 M^2/(2A) + const.
- (c) S = integral C_M(T)/T dT - M^2/(2A) + const.

### Comparison (one line per answer id)
- p1-dpdt: page `alpha/kappa` = mine. Agree.
- p1-ratio: page `alpha*T/(c + alpha^2*T/kappa)` = mine. Agree (also MIT p. 1).
- p1-phase: page choice "highest too" = mine (in phase for alpha > 0). Agree.
- p1-dt: page 0.485 mK (1%); mine 0.4848 mK. Agree.
- p2-dsda: page `N*k/(A - b)` = mine. Agree.
- p2-stretch: page "stays the same: the heat that flows in equals the work the film does" = mine ((dE/dA)_T = 0). Agree.
- p2-ds: page `N*k*log((A2 - b)/(A1 - b))` = mine. Agree.
- p3-dedv: page `1.5*a*T^2.5 + 2*b*T^3 - c/V^2` = mine. Agree.
- p3-d: page `15*a/4` = mine. Agree.
- p3-e: page `6*b` = mine. Agree.
- p3-free: page "a, b, c and f" = mine (c and f unrestricted, d and e tied to a and b). Agree (see warning 3 on the wording).
- p3-e-tv: page `1.5*a*T^2.5*V + 2*b*T^3*V + 2*f*T^1.5/3 + c/V`; mine had `2*f*T^0.5` in place of `2*f*T^1.5/3`. **My blind answer was wrong, the page is right**: the integral of f T^(1/2) dT is (2/3) f T^(3/2); I had integrated f T^(-1/2) (the entropy integrand) by mistake. Numerical check (scipy; a = 0.9, b = 1.7, c = 0.6, f = 1.3 at (T, V) = (1.3, 0.8) and (0.6, 1.7)): page's dE/dT - C_V = -8e-10 and 6e-10, mine -0.342 and +0.671; page's dE/dV - (T dP/dT - P) = 1e-9; the integral of C_V from 0 to T equals E(T) - E(0) to 1e-15. MIT p. 4 also has (2/3) f T^(3/2).
- p3-s: page `2.5*a*V*T^1.5 + 3*b*V*T^2 + 2*f*T^0.5` = mine. Agree (T dS/dT - C_V = 2e-9, dS/dV - dP/dT = 4e-10 numerically).
- p4-dsdm: page `-M/A` = mine. Agree.
- p4-dedm: page `-M*T0/A` = mine. Agree.
- p4-em: page `-M^2*T0/(2*A)` = mine. Agree.
- p4-sm: page `-M^2/(2*A)` = mine. Agree.
- MIT's solutions (read afterwards) agree with all of these.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Symbol `T_0` (18 uses: Problem 4 and "How to answer") | T₀ is the constant temperature in the paramagnet's law M = AH/(T - T₀) | `data/symbols.json` has no meaning of `T_0` scoped to this page, so the general meaning applies: "Today's temperature of the cosmic background radiation, 2.7255 K". The popup, "Symbols on this page" and the read-aloud name tell the reader the wrong thing | Add to the `T_0` entry a meaning with `pages: ["8-044-problem-set-6"]`: "The constant temperature in the paramagnet's equation of state M = AH/(T − T₀), which holds only for T > T₀ (Problem 4)." with `unit: "K"` |
| 2 | warning | Choice boxes `p1-phase`, `p2-stretch`, `p3-free` | (MIT has no choice boxes) | All three have the right answer first (`answer={0}`); the component does not shuffle, so "always pick the first" scores 3 of 3 | Reorder: `p1-phase` put "highest too" third (`answer={2}`); `p2-stretch` put the "stays the same" choice second (`answer={1}`); `p3-free` put "a, b, c and f" last (`answer={3}`), reordering each `choices` array to match |
| 3 | warning | Problem 3(b), box `p3-free` | MIT asks only for "the relationships between a through f" | "Which of the six constants does this condition leave free?" The relations d = 15a/4, e = 6b are symmetric: they leave two of a, b, d, e free, so "c, d, e and f" is as right as "a, b, c and f", and a reader who reads "tied" as "fixed" may pick "only c and f" | Reword the label: "Taking d and e from part (b), which constants can still be chosen freely?" (keep the choices) |

## Arithmetic and answer checks
- Problem 1(c): alpha^2 T/kappa_T = (5.0e-5)^2 x 300/8.0e-12 = 93 750 J m^-3 K^-1 (page 9.4e4); share 3.125% (page 3.1%); ratio 0.015/3.09375e6 = 4.848e-9 K/Pa (page 4.85e-9); Delta T = 0.4848 mK (page 0.485); without the second term 0.500 mK (page 0.500). All correct.
- `p1-dt` tolerance 1%: accepts 0.480 to 0.490, so 3 significant figures pass; the slip named in the check (0.500 mK, the expansion term left out) is 3.1% off and is rejected. The box lists no `mistakes`, so that reader gets no targeted hint (info 3).
- Every formula box: `vars` keep the answer and every mistake finite (p1-ratio's `c - alpha^2*T/kappa` stays above 3 - 2.88 > 0 on the ranges; A - b >= 1 and A1 - b >= 1 in Problem 2); every mistake differs from the answer over the ranges.
- Mistake hints checked one by one; each is true of its formula: e.g. p3-d `25*a/4` is d/dT of T x (5/2)aT^(3/2) without taking off dP/dT; p3-s first mistake is exactly E/T without the c term; p2-ds last mistake is the integral of 1/(A - b)^2; the p4 sign and factor-1/2 slips are as stated.
- No hint gives a result away: the hints give methods (first law, Maxwell relation from dF, matching powers of T) and the intermediate dV = alpha V0 dT - kappa_T V0 dP, not the boxed answers.
- Solution steps and closing checks verified: 1(a) solving the equation of state for P; 1(b) units, the alpha = 0 limit, and the C_P form (C_P - C_V = TV alpha^2/kappa_T is in maxwell-relations; the enthalpy Maxwell relation (dT/dP)_S = (dV/dS)_P is right); 2(a) (dC_A/dA)_T = -T times the second T-derivative of the tension; 2(b) isothermal stretch, heat in = work done; 2(c) the b = 0 limit and T Delta S = -integral of tension dA; 3(a) the "power minus one" rule; 3(c), 3(d) differentiating back; 4(c) the M-part of F, M^2(T - T0)/(2A), gives back H. Each part ends with a check.
- Calcs file: 31 entries; `pytest tests/calc -k 8-044-problem-set-6` in the worktree passes 31 of 31. Every answer box has a calcs entry by an independent route (explicit entropy or free energy, numerical derivatives and integrals).
- Points: 25 (9+10+6) + 20 (8+7+5) + 30 (8+7+8+7) + 25 (8+10+7) = 100, stated as ours.

## Coverage and order
- All four MIT problems, in MIT's order, with MIT's parts (2a-b, 3a-d, 4a-c) in order. Problem 1 is one question on MIT's sheet; the split into (a) adiabatic condition and (b) ratio follows MIT's solution and is declared. Additions, each marked as ours: the 1(c) numbers, the C_P check, the 2(c) entropy change, the free-constants box, the T0 = 0 remarks.
- MIT's "you should be able to put your answer in the following form" is reflected; the badge picture in MIT's solutions is not reproduced, and the page says so.
- Citations: sheet p. 1 Problem 1, p. 2 Problems 2 and 3, p. 3 Problem 4 (checked on the rendered page and the footers). Solutions: p. 1 Problem 1; p. 2 Problem 2(a); p. 3 2(b) and 3(a); p. 4 3(b), 3(c) and the dS differential of 3(d); p. 5 the 3(d) integration and result, and 4(a) up to the Maxwell relation; p. 6 the C_M slope, 4(b), and 4(c) up to g(M); p. 7 the end of 4(c). Every `at=` matches.

## Licensing
- Neither PDF carries "All rights reserved" or "Courtesy of" (checked with grep). The only image in the solutions (p. 1, the badge) is not used. No MIT figure redrawn.
- Wording is the page's own; the motivation paragraph of Problem 1 is paraphrased, not copied. MIT phrases kept only as standard terms ("magic square"). No OpenStax or LibreTexts material.

## Notes
- Linked lessons exist and say what the page claims: maxwell-relations (lecture 10) has the energy equation (slide 4), C_P - C_V = TV alpha^2/kappa_T, (dP/dT)_V = alpha/kappa_T and the magic square; heat-engines-carnot (lecture 11) starts with the elastic rod; paramagnets (lecture 16) has Curie's law; bose-einstein-condensation is lecture 22, the end of the course. `covers: [10, 11]` and the prerequisites fit.
- No em dashes; no `## Summary`.
- Page-scoped symbol meanings (alpha, kappa, kappa_T, V_0, a, b, c, d, e, f, g, f', g', A, A_1, A_2, N, M, H, C_V, C_P, C_A, C_M, K_E, K_S, T', x, t, v, F, S, U, E, Q, W, delta) fit this page; T_0 is the exception (error 1).
- (info 1) My blind answer to 3(c) had an integration slip; the page is right (numerical check above). No change needed.
- (info 2) `\Delta` takes the general meaning "a change or difference"; here Delta P(x, t) is a departure and Delta P, Delta T alone are amplitudes. The P and T meanings already say so, so this is acceptable; optionally add a page-scoped Delta meaning. The script letters (calligraphic S, F, G) are not scanned as symbols (`\mathcal` takes a text argument in lib/tex-scan.ts), so the remarks about them in the S and F meanings are harmless but never shown for those letters.
- (info 3) `p1-dt` could list the slip 0.500 mK with a hint ("That leaves out the second term of the denominator, alpha squared T over kappa_T"), if number boxes support `mistakes`.

COUNTS: errors=1 warnings=2 info=3

## Resolution (2026-11-26, by the page author)

- Error 1 (T₀ had the cosmic background meaning on this page): fixed. The `T0` entry has a new meaning scoped to this page: "The constant temperature in the paramagnet's equation of state M = AH/(T − T₀), which holds only for T > T₀ (Problem 4)", unit K.
- Warning 1 (the right choice always first): fixed. `p1-phase` now has it third (`answer={2}`), `p2-stretch` second (`answer={1}`), `p3-free` fourth (`answer={3}`).
- Warning 2 (`p3-free` was ambiguous): fixed. The label now reads "Taking d and e from part (b), which constants can still be chosen freely?"
- Info notes: no change.

Status set to reviewed.
