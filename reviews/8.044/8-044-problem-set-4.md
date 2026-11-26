---
page: content/year-3/8.044/8-044-problem-set-4.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps4/ (read: pdftotext and rendered pages 1, 2, 4, 5 of the PDF)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss4/ (read after the blind solve: pdftotext and rendered pages 10 and 14)
  - lessons first-law, microcanonical-ensemble, entropy-temperature-second-law, entropy-thermodynamic-variable (checked only for the relations the hints quote)
verdict: needs-changes
---

# Review: Problem Set 4: heat capacities, a Curie law paramagnet, classical moments, a strange chain and oscillators

## Blind solve

### My answers
(Written to this file before the full page, the calcs file or MIT's solutions were opened.)
- p1: C_P = (dU/dT)_P + P(dV/dT)_P = (dU/dT)_P + alpha V P. Water near 0 C (alpha < 0): C_P < (dU/dT)_P.
- p2a: C_P = 7/2 Nk; T_c = T_d = 2T1, T_b = 4T1. Q_acb = 5/2 + 7 = 19/2 NkT1; Q_adb = 7/2 + 5 = 17/2 NkT1; Q_ab = 15/2 + 3/2 = 9 NkT1.
- p2b: C_ab = 3Nk (P dV = Nk dT/2 on P = (P1/V1)V).
- p3a: C_M = (dU/dT)_M; C_H - C_M = [(dU/dM)_T - H](dM/dT)_H; dU = C_M dT + [H + (C_H - C_M)/(dM/dT)_H] dM.
- p3b: C_H = bT + M^2/a; U = bT^2/2.
- p3c: (dU/dH)_M = -C_M chi_T/(dM/dT)_H; (dU/dM)_H = H + C_H/(dM/dT)_H; not the same as (a) (they differ by C_M/(dM/dT)_H).
- p3d: (dU/dH)_M = b a^2 H/M^2; (dU/dM)_H = -b a^2 H^2/M^3; U = b a^2 H^2/(2M^2) = bT^2/2, same as (b).
- p3e: (dT/dM)_{Q=0} = [H - (dU/dM)_T]/C_M.
- p3f: (dT/dM)_{Q=0} = M/(ab); T = T0 + (M^2 - M0^2)/(2ab).
- p3g: adiabatic slope = a/(T + M^2/(ab)) = a^2 b/(abT + M^2) < a/T.
- p4a: -mu <= m_i <= mu; -N mu <= M <= N mu; -N mu H <= E <= N mu H. Max M = N mu, max E = N mu H.
- p4b: 2N (two angles per moment).
- p4c: M = N mu^2 H/(3kT).
- p4d: unphysical if M > N mu, i.e. kT < mu H/3; Omega good for kT >> mu H (M << N mu).
- p4e: Omega' = (2mu)^(N-1) exp[-3(M-m)^2/(2(N-1)mu^2)].
- p4f: p(m) = (1/(2mu))[1 + 3Mm/(N mu^2)], normalized (the odd term integrates to zero).
- p4g: <m> = M/N = mu^2 H/(3kT), as expected.
- p5a: S = k[N ln N - n ln n - (N-n) ln(N-n)].
- p5b: F = (kT/(2l)) ln[n/(N-n)].
- p5c: L = N l tanh(lF/(kT)).
- p5d: L ~ N l^2 F/(kT); alpha = -1/T; the weight goes up.
- p6a: dp dq = (2/omega) dx dx'; Phi = (2 pi E/omega)^N/N!, c = 2 pi/omega.
- p6b: S = Nk[ln(2 pi E/(N omega)) + 1].
- p6c: 1/T = Nk/E, E = NkT.
- p6d: p(p,q) = (omega/(2 pi kT)) exp[-(p^2/2m + m omega^2 q^2/2)/kT]; independent (it factorizes).

### Comparison (page answer vs mine vs MIT)
- p1-sign: smaller (choice 0) = mine. MIT only says either sign is possible; the box is the page's addition and is correct.
- p2-cp: 7/2 Nk = mine = MIT p. 2.
- p2-acb: 19/2 NkT1 = mine = MIT p. 2.
- p2-adb: 17/2 NkT1 = mine = MIT p. 2.
- p2-ab: 9 NkT1 = mine = MIT p. 3.
- p2-cab: 3Nk = mine = MIT p. 3.
- p3-diff: (UM - H)*MT = mine = MIT p. 4.
- p3-dudm: (CH - CM)/MT + H = mine = MIT p. 4.
- p3-ch: bT + M^2/a = mine = MIT p. 5.
- p3-u: bT^2/2 = mine = MIT p. 5.
- p3-duh: -CM*chi/MT = mine = MIT p. 6.
- p3-dum2: CH/MT + H = mine = MIT p. 6.
- p3-same: different (choice 0) = mine = MIT p. 6.
- p3-coefh: b a^2 H/M^2 = mine = MIT p. 7.
- p3-coefm: -b a^2 H^2/M^3 = mine = MIT p. 7.
- p3-uhm: b a^2 H^2/(2M^2) = mine = MIT p. 7.
- p3-adgen: -(UM - H)/CM = mine = MIT p. 8.
- p3-adslope: M/(ab) = mine = MIT p. 8.
- p3-adpath: T0 + (M^2 - M0^2)/(2ab) = mine = MIT p. 8.
- p3-slope: (a/T)/(1 + M^2/(abT)) = mine a^2 b/(abT + M^2) (equal by value: (a,b,T,M) = (1,1,1,1) gives 0.5 both; (2,0.5,3,1) gives 0.5 both; (0.5,2,1.5,2) gives 0.0909 both) = MIT p. 9.
- p4-mmax: N mu = mine = MIT p. 10.
- p4-emax: N mu H = mine = MIT p. 10.
- p4-nvar: 2N = mine = MIT p. 10.
- p4-eos: N mu^2 H/(3kT) = mine = MIT p. 10.
- p4-valid: kT >> mu H (choice 0) = mine; MIT writes kT >> mu H/3, the same condition in order of magnitude, and the page's solution shows MIT's form.
- p4-omp: (2mu)^(N-1) exp[-3(M-m)^2/(2(N-1)mu^2)] = mine = MIT p. 10.
- p4-pm: (1/2mu)(1 + 3Mm/(N mu^2)) = mine = MIT p. 11 (MIT's last line is the linear form).
- p4-mean: M/N = mine = MIT p. 11.
- p5-s: k[N ln N - (N-n) ln(N-n) - n ln n] = mine = MIT p. 12.
- p5-f: -(kT/2l) ln((N-n)/n) = mine (kT/2l) ln(n/(N-n)) = MIT p. 12.
- p5-l: N l tanh(lF/kT) = mine = MIT p. 13.
- p5-alpha: -1/T = mine = MIT p. 13.
- p5-weight: goes up (choice 0) = mine (MIT leaves it as an experiment).
- p6-jac: 2/omega = mine (MIT shows the factors sqrt(2m) and sqrt(2/(m omega^2)), p. 14).
- p6-c: 2 pi/omega = mine = MIT p. 14.
- p6-s: Nk[ln(2 pi E/(omega N)) + 1] = mine; MIT p. 14 stops at k ln{(2pi/omega)^N E^N/N!}, and the page says so.
- p6-e: NkT = mine = MIT p. 14.
- p6-pq: (omega/2 pi kT) exp[-p^2/2mkT - m omega^2 q^2/2kT] = mine = MIT p. 15.
- p6-indep: independent (choice 0) = mine = MIT p. 15 ("S.I.").

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | All five choice boxes: p1-sign (l. 68), p3-same (l. 486), p4-valid (l. 911), p5-weight (l. 1271), p6-indep (l. 1494) | (no choice boxes on MIT's sheet) | Every box has `answer={0}`: the correct choice is always the first, and the component does not shuffle. In p1-sign and p6-indep the correct choice is also the longest. | Reorder the choices so the correct ones sit in different positions, e.g. p1-sign answer 2, p3-same answer 1, p4-valid 0, p5-weight 3, p6-indep 1 (move the choice texts and set `answer` to match); avoid the correct choice being clearly the longest. |
| 2 | warning | Problem 6(a), Formula "New variables" (l. 1313) | x_i = p_i/sqrt(2m) for 1 <= i <= N; x_i = sqrt(m omega^2/2) q_(i-N) for N+1 <= i <= 2N (sheet p. 5) | `x_i = \frac{1}{\sqrt{2m}}\,p_i …, x = \sqrt{\frac{m\omega^2}{2}}\,q_i`: the second x has no index, which reads as a typo in a cited formula | Write `x_{N+i} = \sqrt{\frac{m\omega^2}{2}}\,q_i` (MIT's variables, renumbered) and keep the sentence on MIT's numbering. |
| 3 | warning | data/symbols.json, meanings scoped to this page: `H` unit "A/m"; `mu`, `m_i` unit "J/T"; `M` unit "A m²" | Energy epsilon_i = -m_i H and work H dM (MIT's convention, no mu_0) | With these units -m_i H comes out in J·A/(T·m), not J, and H dM in A², not J | On this page give `H` the unit T (the field as mu_0 H, so that m_i H is an energy), or drop the unit of H for this page; keep mu, m_i, M in J/T (= A m²). |
| 4 | info | Problem 3 statement | MIT's sheet does not state the work (it appears in the solutions, p. 4: d/Q = dU - H dM) | The statement gives δW = H dM | Fine: it is needed to solve the problem. Optionally say it is added. |
| 5 | info | Problem 4(f) and the p4-pm mistake list | "an expression for p(m) including powers of m no higher than the first is adequate"; MIT's last line is the linear form | The exponential form (1/2mu)exp(3Mm/(N mu^2)), which also has no power of m above the first, is a listed mistake | The hint explains it; optionally word the box request as "to first order in m (expand the exponential)". |
| 6 | info | Problem 4(c) hint (l. 854) | MIT uses H/T = -(dS/dM)_N with E = -MH | The hint quotes the lesson's (dS/dM) = -H/T with E held fixed | Follows MIT and the lesson; no change needed. |

## Arithmetic and answer checks
- Every boxed answer recomputed independently (Blind solve above) and against MIT's solutions; all agree.
- MIT's 2(b) comment values for C_V = 3/2 Nk recomputed: C_P = 5/2, Q(acb) = 3/2 + 5 = 13/2, Q(adb) = 5/2 + 3 = 11/2, ΔU = 9/2, Q(ab) = 9/2 + 3/2 = 6, C_ab = 2 (in Nk or NkT1). Correct.
- Stirling check in 5(a): N = 1000, n+ = 300: Stirling 610.86k, exact ln of the binomial 607.27k, difference 0.59%. Correct.
- 5(d) remark alpha = -(1/T)·2x/sinh 2x from L = Nl tanh x: (1/L)dL/dT = -(x/T) sech²x/tanh x = -(1/T) x/(sinh x cosh x). Correct.
- 6(d) remark with Omega proportional to dPhi/dE: (omega/2pi)((N-1)/E)(1 - eps/E)^(N-2); its integral over the plane is ((N-1)/E) ∫₀^E (1 - eps/E)^(N-2) d eps = 1. Correct.
- 3(d) exactness check: both cross derivatives are -2ba²H/M³. Correct. 3(f) entropy check dS = b dT - (M/a) dM. Correct.
- Captions: 3(g) graph with a = b = T = M = 1: adiabat H = s(s²+1)/2, slope 1/2 at s = 1, crosses the isotherm there. 4(f) graph with M = 0.1 N mu: mu p from 0.35 to 0.65. 6(d) contours: e^(-1/2) = 0.61, e^(-2) = 0.14. All correct.
- Mistake hints: each listed wrong formula checked against its hint (signs, missing factors, the monatomic values 13/2, 11/2, 6, 2, the uninverted dH/dM form of 3(g), the energy density (1/kT)e^(-eps/kT) of 6(d), the l·n+ form of 5(c)); every hint is true of its formula.
- `vars` ranges keep every formula finite and physical (n+ < N in Problem 5, M well below N mu in Problem 4, a negative temperature coefficient MT in Problem 3).
- Hints: none gives a final result away. The 5(d) hint ("a constant divided by T") is close but still leaves the step to the reader.
- Calcs file calcs/8.044/8-044-problem-set-4.yaml: the answer entries use independent routes (numerical derivatives and integrals, a non-Curie model magnet for 3(a) and 3(c)); the entries read agree with the page.

## Coverage and order
- All six problems and all parts (2a–b, 3a–g, 4a–g, 5a–d, 6a–d) present, in MIT's order. Due date left out. MIT gives no points; the page's points add up (10, 20, 30, 25, 20, 25).
- Citations: every `at=` checked against the printed page numbers. Sheet: P1 and P2 p. 1; P3 p. 2; P4 sums p. 3, Omega p. 4; P5 p. 4; P6 p. 5. Solutions: P1 p. 1; P2 C_P pp. 1–2, (a) p. 2, W(ab) and Q(ab) pp. 2–3, (b) and comment p. 3; P3 (a) p. 4, (b) p. 5, (c) p. 6, (d) p. 7, (e) and (f) p. 8, (g) p. 9; P4 (a)–(e) p. 10, (f) and (g) p. 11; P5 (a) and (b) p. 12, (c) and (d) p. 13; P6 (a)–(c) p. 14, (d) p. 15. All correct.
- MIT slips the page claims, verified on the rendered PDFs: "using S = -k ln Omega" beside 4(c) (solutions p. 10; the working uses S = k ln Omega) is real; "p(M)" in the statement of 4(e) (sheet p. 4) is real; MIT's solutions call the enclosed volume Omega where the sheet has Phi (solutions p. 14) is true; MIT stopping before Stirling in 6(b) is true.
- The page's own additions (boxes, checks and remarks) are listed in the introduction and marked in place.

## Licensing
- No "All rights reserved" or "Courtesy of" notice on either PDF (grep and visual check). MIT's sketches are not copied: the Problem 2 graph is generated from PV = NkT and the path definitions in the text (same geometry as MIT's figure, which the problem itself fixes); the M(H), M(T) sketches of Problem 3 and the chain of Problem 5 are described in words. No OpenStax or LibreTexts material. The wording is the page's own; only standard terms are shared with MIT.

## Notes
- Symbols: every symbol has a meaning scoped to this page (content:check in the worktree: 0 errors; for this page only the missing review file is warned). The meanings fit the page (a, b, c, d doubling as path points and constants is stated in each meaning); the only problem found is the unit of H (row 3).
- No `## Summary` with answers; no em dashes.
- Hints and solutions follow MIT's method in new wording; each solution ends with a check.

COUNTS: errors=1 warnings=2 info=3

## Resolution (2026-11-26, by the page author)

- Error 1 (every choice box had the right answer first): fixed. The right choice now stands at `p1-sign` 2, `p3-same` 1, `p4-valid` 0, `p5-weight` 3, `p6-indep` 1 (0-based). The right choices of `p1-sign` and `p6-indep` were shortened so that they are no longer clearly the longest: "smaller than (∂U/∂T) at constant P: the surroundings do work on a fluid that shrinks as it warms" and "independent: the joint density is a function of p times a function of q".
- Warning 2 (unindexed x in the "New variables" formula): fixed. It now reads x_{N+i} = √(mω²/2) qᵢ, with a page-scoped symbol entry for x_{N+i}.
- Warning 3 (units of H did not give energies): fixed. On this page H means "the magnetic field, taken as μ₀H in tesla, so that −mᵢH and H dM are energies", unit T.
- Info notes: no change.

Status set to reviewed.
