---
page: content/year-4/8.08/8-08-problem-set-3.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb3/ (read: prb3.pdf rendered and pdftotext)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/c6796eafdf333fb55fb351654657b846_ising_model.pdf (read: all 7 pages rendered, pp. 21-27)
verdict: pass-with-notes
---

# Review: Problem Set 3 (8.08)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page)

Checked numerically in `ps3calc/blind.py` (brute-force sums, root finding, grid minimisation with random constants).

- p1a: <S> = 2 sinh(beta h) / (1 + 2 cosh(beta h)).
- p1b: <S>/h -> 2 beta/3 = 2/(3 kB T).
- p1c: each spin has z = 2 neighbours (S_i appears in two bonds); h_eff = 2J<S>; linearising <S> = (2/3) beta 2J <S> gives kB Tc = 4J/3, Tc = 4J/(3 kB). (Numerically: root at kT = 0.999 Tc, none at 1.001 Tc.)
- p1d: at T = Tc/2, beta*2J = 3; m = 2 sinh(3m)/(1+2 cosh(3m)) -> m = 0.937 (0.93657).
- p1e: exact 1D chain with short-range coupling: no spontaneous order at any T > 0; <S> = 0 at h = 0 (no phase transition; Tc = 0).
- p2a: critical point where the linear and quadratic coefficients both vanish: Tc = a1 h2/(a2 h2 + a3 h1), Pc = a1 h1/(a2 h2 + a3 h1). a3 enters, b does not (MIT's sheet lists h1,2, a1,2 and b: a slip, confirmed on the rendered PDF and by the calculation).
- p2b: line P = h1 T/h2 for T < Tc (where the quadratic coefficient is negative), ending at the critical point (Tc, Pc); a straight line through the origin direction, slope h1/h2. At a higher P than the line, h1T - h2P < 0, so the delta n > 0 minimum is deeper: the liquid (water) is stable (numerically confirmed).
- p2c: on the line the quadratic coefficient is (a2 + a3 h1/h2)(T - Tc); minima at +-sqrt((a2 + a3 h1/h2)(Tc - T)/(2b)); Delta n = sqrt(2 (a2 h2 + a3 h1)(Tc - T)/(b h2)). (Grid minimum 0.50242 vs formula 0.50242.)
- p2d: beta = 0.5.
- p3a: f' = m[a0(T - T0) - b m^2 + c m^4] = 0: m = 0 or m^2 = [b +- sqrt(b^2 - 4 a0 c (T - T0))]/(2c). Nonzero ones exist for T <= T1 = T0 + b^2/(4 a0 c).
- p3b: Tc = T0 + 3 b^2/(16 a0 c), mc = sqrt(3b/(4c)).
- p3c: s = -f0' - a0 m^2/2 (envelope theorem); Delta s = a0 mc^2/2 = 3 a0 b/(8c); L = 3 a0 b Tc/(8c).
- p3d: Tc - T0 = 3(40)/16 = 7.5 K; T1 - T0 = 40/4 = 10.0 K.
- p3e: b -> 0+: Tc -> T0, mc -> 0, L -> 0 and T1 -> Tc -> T0: the jump and the latent heat vanish and the transition becomes continuous (second order); b = 0 is a tricritical point.

### Comparison with the page (one line per answer id)

| id | Page | Mine | Agree |
|---|---|---|---|
| p1-avg | 2 sinh(h/kBT)/(1+2 cosh(h/kBT)) | same | yes |
| p1-curie | 2/(3 kB T) | same | yes |
| p1-tc | 4J/(3kB) | same (z = 2) | yes |
| p1-num | 0.937 | 0.93658 | yes |
| p1-exact | choice 2 (never orders) | never orders | yes (transfer-matrix check: d ln(lambda_max)/dh at h -> 0 is 0 for K = 0.5, 1.5, 3) |
| p2-tc | a1 h2/(a2 h2 + a3 h1) | same | yes |
| p2-pc | a1 h1/(a2 h2 + a3 h1) | same | yes |
| p2-line | h1 T/h2 (T < Tc) | same | yes |
| p2-side | choice 1 (water) | water | yes (G(+) deeper at P 0.1% above the line) |
| p2-dn | sqrt(2(a2 + a3 h1/h2)(Tc - T)/b) | sqrt(2(a2 h2 + a3 h1)(Tc - T)/(b h2)) | yes (identical algebraically; grid check 0.50242) |
| p2-beta | 0.5 | 0.5 | yes |
| p3-t1 | T0 + b^2/(4 a0 c) | same | yes |
| p3-tc | T0 + 3b^2/(16 a0 c) | same | yes |
| p3-mc | sqrt(3b/(4c)) | same | yes |
| p3-l | 3 a0 b Tc/(8c) | same | yes |
| p3-num-tc | 7.5 | 7.5 | yes |
| p3-num-t1 | 10.0 | 10.0 | yes |
| p3-limit | choice 0 | Tc -> T0, jump and L -> 0 | yes |

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(c), statement | Sum i = 1..N of S_i S_(i+1), no boundary condition stated | "(the last spin is coupled back to the first: the chain is closed into a ring, which changes nothing for large N)", not marked as ours | Mark it as our assumption where it stands, e.g. "(Our assumption, which the sum running up to the spin number N + 1 suggests: the last spin is coupled back to the first, ...)" |
| 2 | info | Problem 2(a), statement | "from the constants h1,2, a1,2 and b" (rendered PDF checked) | Notes that a3 enters and b does not | Correct: verified by algebra and numerically (both coefficients vanish at the page's Tc, Pc for random constants). No change. |
| 3 | info | Problem 1 parts | MIT's 1(b) is the chain | Page's 1(c) is the chain, 1(b) is our addition (marked) | Optional: say in the intro that MIT's 1(b) is our 1(c). |
| 4 | info | Problem 2(d) solution | not on the sheet | "Measured liquid-gas transitions give ... close to one third, as the lesson notes" | Supported: ginzburg-landau-theory.mdx line 178 gives beta ~ 0.33 for fluids and the 3D Ising class. Optional: link the lesson there. |

## Arithmetic and answer checks
- All 18 answers agree with the blind solve (table above); scripts in `review/ps3calc/blind.py` and `review/ps3calc/nums.py`.
- In-solution numbers recomputed: sinh 1 = 1.1752, cosh 1 = 1.5431, 0.575, tanh 1 = 0.762; iteration 20.036/21.135 = 0.948, then 0.939, fixed point 0.937; two-state check tanh(2m) = m gives 0.958 (0.9575); cubic expansion 2 sinh x/(1+2 cosh x) = (2/3)(x - x^3/6) + O(x^5) verified; 3/16 x 40 = 7.50 K, 40/4 = 10.0 K, 307.5 K, 310.0 K, 10 K window; tau = 3/16 = 0.1875 and minima at m^2 = 0.75 in the Plot's scaled units (scaling derived: f - f0 = (b^3/c^2)[tau x^2/2 - x^4/4 + x^6/6], tau = a0 c (T - T0)/b^2).
- Mean-field energy -2J<S> sum S_i + NJ<S>^2 checked against Wen p. 22 (with z = 2, (1/2) z N J <s>^2).
- Stationary-point nature in 3(a) checked: f'' = 2 m^2 g'(m^2) with g'(+ root) = sqrt(disc) > 0 (minimum), - root a maximum.
- Mistake hints: all true of their formulas (2J/kB is the two-state mean-field Tc with z = 2; 2J/(3kB) is z = 1; a1/a2 and a1/a3 drop a3P and a2T; sqrt(2 a2 (Tc - T)/b) is the result at fixed P = Pc; 3 a0 b Tc/(4c) uses a0 m_c^2; sqrt(b/(2c)) is m at T1). Each mistake differs from the answer over the whole `vars` ranges; all ranges keep expressions finite and real (Tc in [2,3] > T in [0.5,1.5]).
- Choice positions vary (2, 1, 0). p3-limit's correct option ties for longest (75 characters, with the wrong option 2): info only.
- `npm run calc:test` equivalent (`pytest tests/calc -k 8-08-problem-set-3`): 32 passed.
- Points: P1 4+3+7+3+3 = 20, P2 8+5+5+2 = 20, P3 4+6+5+3+2 = 20, total 60. MIT's sheet gives "(20 pts)" only for Problem 3 (checked on the rendered PDF): the page says so correctly.

## Coverage and order
- MIT's three problems in MIT's order; Problem 1(a), 1(b) and Problem 2(a)-(c) all present in MIT's order, with our additions marked "(Our addition.)".
- Problem 3 is our own problem (Huang 14.6 pointer), titled and listed as such in the intro, keeps MIT's remark (m, not S; s is the entropy). It does not duplicate any other 8.08 page (no other sixth-order/tricritical material in content/ or the worktrees).
- `covers: [2, 3]`: Chapter III (Ising model, GL theory, water critical point) and Chapter II (liquid-gas transition, prerequisite van-der-waals-phase-transitions); consistent with the sheet's topics and date (Feb. 16, 2005). `lecture: 3` correct.
- Citations to Wen's notes checked on the rendered PDF: p. 22 point 2 (mean-field replacement, written there for s = +-1), p. 26 point 4 (latent heat = Delta S T, zero for the symmetric case), p. 27 point 5 (h(Pc,Tc) = 0, r0(Pc,Tc) = 0): all correct. `cite="mit" ... (our own solution)` follows the convention of the reviewed 8.07 sets.
- The two Plots are generated from formulas, captions state the formula; the 3(b) Plot's slider range covers T < T0, Tc and T > T1.
- No hint gives a result away; the 2(c) form instruction ("use Tc in place of a1, and the line to eliminate P") fixes the variables but not the answer.

## Licensing
- MIT sheet: no "rights reserved", "courtesy" or third-party notice (rendered PDF). Huang's book not used or reconstructed. No figures redrawn. Wording rewritten; "Ginzberg" corrected to Ginzburg with a note.
- No em dashes; no `## Summary` with answers.

## Notes
- Symbols: page-scoped meanings exist for every symbol used (z, x, S, S_i, h, h_eff, E_mean, delta n, n_0, a_1..a_3, h_1, h_2, r_0, T_0, T_1, m, m_c, f, f_0, s, L, c, b, beta with both meanings). No problem found.
- p1-exact option "orders below 4J/3k_B" is plain text: "k_B" shows its underscore and the precedence reads ambiguously; optional "4J/(3k_B)" (info, as plain-text choices with underscores are used in reviewed 8.07 sets).

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-27, by the page author)

- Warning 1: the closed-ring condition in Problem 1 is now marked "(our assumption, which the sum running up to the spin number N + 1 suggests: …)".
- Info 6: the choice in `p1-exact` now reads "4J/(3k_B)".
- Other info items left as they are.
- `status: reviewed`.
