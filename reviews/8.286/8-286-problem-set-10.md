---
page: content/year-4/8.286/8-286-problem-set-10.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps10/ (read, pdftotext of the PDF)
  - Lecture 23 transcript 2aa1ecae..._PsfyE1-s9Rs.pdf (read pp. 11-12; footer = PDF page)
  - Lecture 8 transcript 58ae3113..._OtJFD9HNnoc.pdf (read p. 18)
  - Lecture 19 transcript b891ffb6..._U_Ot1PTuUv4.pdf (read pp. 6-8, 14)
  - Lecture 16 transcript 20c456df..._6b83DypBeYg.pdf (read p. 25)
  - Lecture 17 transcript 156c9d26..._KY91PsqCy_8.pdf (read p. 12)
verdict: pass-with-notes
---

# Review: Problem Set 10: how much inflation is enough?

## Blind solve

### My answers (written before opening the full page)
- p1: optional pointer to Set 9 P5, nothing to solve here.
- p2a (k>0, a_min at t=0): a(t) = (sqrt(k) c/chi) cosh(chi t).
- p2b (k<0, kappa=-k, a(0)=0): a(t) = (sqrt(kappa) c/chi) sinh(chi t).
- p2c: cosh, sinh -> e^{chi t}/2 at large t (k=0 is already exponential); A = sqrt(k) c/(2 chi).
- p3a: radial ray, ds^2=0, dtheta=dphi=0: c dt = a~ dpsi, psi = int c dt/a~; physical distance = a~(t) psi = a(t) int_0^t c dt'/a(t') (the sqrt(k) cancels).
- p3b: l = (c/H0) int_0^1 dx / sqrt(Or + Om x + Ok x^2 + Ov x^4) with integral 3.1800 -> 46.20 Gly, 1.4166e4 Mpc (Ok = 0 or -9.2e-5 differ by 3e-5 relative). (t0 = 13.81 Gyr same model.)
- p4a: kT_RH = (30/(pi^2 g_RH))^{1/4} E_f; E16=1, g=300: 3.173e15 GeV -> 3.17 (units 1e15 GeV).
- p4b: g_s0 = 2 + (7/8)(6)(4/11) = 43/11 = 3.909; a0/ae = (g_RH/3.909)^{1/3} T_RH/T_gamma0 (= 5.74e28 for the reference values).
- p4c: Z_min = l_h H_i (a_e/a_0)/(beta c); Z1 = 9.14e26 -> 9.14 (units 1e26); f = E16 (g_RH/300)^{-1/12} / beta. (With MIT's fallback 3ct0, Z1 = 8.19e26.)
- p4d: N_min = ln(9.143e26) = 62.08.

### Comparison (one line per answer id)
- p2-a: page sqrt(k)*c/chi*cosh(chi*t). Agrees.
- p2-b: page sqrt(kappa)*c/chi*sinh(chi*t). Agrees.
- p2-c: page sqrt(k)*c/(2*chi). Agrees.
- p3-b-gly: page 46.2. Mine 46.20 (integral 3.1800 with Ok = -9.2e-5; 3.17998 flat). Agrees.
- p3-b-mpc: page 14170. Mine 14166. Agrees (0.03%).
- p4-a: page Ef*(30/(pi^2*g))^(1/4). Agrees.
- p4-a-num: page 3.17. Mine 3.173. Agrees.
- p4-b: page (11*g/43)^(1/3)*TRH/T0. Mine (g/3.909)^(1/3) TRH/T0, identical (43/11 = 3.909). Agrees.
- p4-c-z1: page 9.15. Mine 9.143 with the constants the page lists (calc:test, using its own constant set, gets 9.15). 0.08% apart, well inside 2%. Agrees.
- p4-c-f: page E16*(g/300)^(-1/12)/beta. Agrees.
- p4-d: page 62.1. Mine 62.08. Agrees.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1, link `/courses/8-286/8-286-problem-set-9#p5` | (not about MIT) | Points to Set 9 P5 for the whole problem | Set 9 is not in this worktree (only in `.claude/worktrees/ps9`). Merge Set 9 before (or with) Set 10, otherwise the only route to Problem 1 is a dead link. Verified that ps9's `p5` is the same problem (same kT_c, M_M c^2, g_GUT = 200, four 5-point parts, 20 points), so the pointer itself is right once merged. |
| 2 | info | Problem 1, `optional` | Required, 20 points | Optional, no boxes, pointer to Set 9 | Fair: the statement says plainly it was required at MIT and why it is optional (no double counting). The score of Set 10 is then 40, not MIT's 65; the intro says so. No change needed. |
| 3 | info | Problem 4 intro and 4(c) box | Fallback 3ct0 allowed for students who skipped Problem 3 | Box (2%) expects the Problem 3 value; 3ct0 gives 8.19 to 8.20, about 10% low, and is rejected | Disclosed in the statement and the solution gives the fallback value, so it is fair. Optional improvement: one more sentence in the statement giving the fallback result range is not needed; leave as is. |
| 4 | info | 3(b) "The curvature term" | Lists three Omegas summing to 1.000092 | Takes Omega_k,0 = -9.2e-5, says flat gives the same to four figures | Verified: integral 3.18007 vs 3.17998 (3e-5 relative). Lecture 19 p. 7 does define Omega_k,0 as 1 minus the others. Correct as written. |
| 5 | info | 4(c) mistake `E16*(g/300)^(-1/4)/beta` | (our own) | "That is the power of g from the reheating temperature alone" | Strictly, T_RH alone would give Z proportional to g^(+1/4) (Z goes as 1/T_RH). The hint reads as "you copied T_RH's power", which is the likely slip, so it is acceptable; could say "That is the power of g in the reheating temperature, carried straight into Z". |

## Arithmetic and answer checks
- All numbers in solutions recomputed (script in scratchpad): H0 = 2.181e-18 s^-1; c/H0 = 1.3746e26 m = 4455 Mpc = 14.53 Gly; integral 3.180; no radiation 3.240 -> 47.1 Gly; 1/sqrt(Or) = 104; max of u-integrand 3.56 ("about 3.6"); 3ct0 = 41.4 Gly; cosh 3 = 10.068, e^3/2 = 10.043, tanh 3 = 0.9951, e^-6 = 0.25%; rho_f = 2.32e84 kg/m^3 (= 2.3e81 g/cm^3); H_i = 3.60e37 s^-1; c/H_i = 8.32e-30 m; 4.371e26/8.32e-30 = 5.25e55; kT_gamma0 = 2.348e-4 eV; temperature ratio 1.351e28; (3300/43)^(1/3) = 4.25; a0/ae = 5.74e28; Z1 c/H_i = 0.76 cm; g = 100 / 1000 factors 1.096 / 0.905; H_i^-1 = 2.78e-38 s, 62 of them 1.7e-36 s; ln(9.15e26) = 62.08. All correct.
- Every step checked; each solution ends with a check (units, limit or number).
- Answer boxes: expr/value match the solutions; vars ranges finite and physical (t >= 0.3 separates sinh from cosh; g in [30, 3000] keeps powers finite). Tolerances: 1% on 3(b) rejects the no-radiation 47.1 (2% off); 2% on Z1 accepts 9.14 to 9.15 and rejects 3ct0; 0.2 on N_min is fine. Every listed mistake differs from the answer and every mistake hint is true of its formula (see note 5).
- Hints: none gives the result away.
- `npm run calc:test -k problem-set-10`: 73 passed.

## Coverage and order
- Same four problems in MIT's order, same points (20/15/25/20 extra). Part splits of Problems 2 and 4 are declared as the site's own; part points sum to the problem points (6+6+3, 10+15, 4+5+7+4).
- MIT's P3(b) note on the effective horizon and P4's model are faithfully rewritten in own wording.

## Citations
- MIT PS10: Friedmann eq. p. 2, integrals pp. 2-3, Planck values p. 3, (P4.1)-(P4.3) p. 4, (P4.4)-(P4.7) p. 5: all match the printed pages.
- Lecture 23 pp. 11-12: verified. a = const e^{chi t} is at the foot of p. 11, chi = sqrt(8 pi G rho_f/3) at the top of p. 12; "leave out the curvature term ... becomes small quickly" is on p. 11. Citation correct.
- Lecture 8 p. 18 (horizon distance, l_p,horizon), Lecture 19 p. 14 (psi metric, a tilde = a/sqrt k), pp. 6-8 (F(x), Omega_k definition, x dx/sqrt F), Lecture 16 p. 25 (entropy density 2 pi^2/45), Lecture 17 p. 12 ((4/11)^(1/3)): all verified, footer = PDF page.

## Licensing
- No MIT figures; no rights-reserved material; text is rewritten, not copied. No OpenStax or LibreTexts. No em dashes; no `## Summary`.

## Notes
- Claim "1 cm would do" (4(c) check): the exponential-expansion lesson, line 131, does say "1 cm at the end of inflation would do, and 10 cm is generous", as Guth's estimate from his sample numbers; the page attributes it to "the lesson ... rough estimate from Guth's sample numbers". Fair. (Guth's target was about 40e9 ly; here it is 46 Gly, close enough for "agrees".)
- "About 65 e-foldings ... grows to 10 cm" is the lesson's own worked example (64.7); fair. "Guth estimates this expansion with aT constant" matches the lesson's cite of Lecture 23 p. 19 (not re-read).
- 2(a) remark that the k > 0 solution is the closed slicing of de Sitter space matches the lesson (which says open or closed); the k < 0 one is the open slicing, which the page could add.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

- Warning 1: Set 9 (with its Problem 5, `#p5`) is brought onto the run branch before this set, so the link in Problem 1 resolves.
- Info: the hint for the mistake `E16*(g/300)^(-1/4)/beta` now says "That is the power of g in the reheating temperature, carried straight into Z."
- Other info notes: no change needed.
- Status set to `reviewed`.
