---
page: content/year-1/8.02/8-02-problem-set-9.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving08/ (read: local PDF solving08.pdf, text; pp. 5 and 6 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap11inductance/ (read: local PDF, text; pp. 48 and 50 rendered, Figures 11.13.1, 11.13.3, 11.13.4; printed page of every cited equation checked page by page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha12ac_circuits/ (read: local PDF, text; p. 39 rendered, Figure 12.11.6; equation pages checked)
verdict: pass-with-notes
---

# Review: Problem Set 9: inductance, LR and LC circuits, and driven RLC circuits

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree reviewed: `.claude/worktrees/ps-802-9` (commit ff06e15: page, `calcs/8.02/8-02-problem-set-9.yaml`, page-scoped meanings in `data/symbols.json`). Scripts in the scratch folder: `rv9py/blind.py` (sympy), `rv9py/indep.py` (scipy ODE integration of each circuit), `rv9py/chk.py` (calcs `shown:` strings, em dashes, listed mistakes over 2000 random points), `rv9py/eqpages.py` (printed page of each cited equation), `rv9py/sym2.py` and `rv9py/symdiff.py` (page meanings; diff of `data/symbols.json` against HEAD~1).

## Blind solve

Written from `stripped-set-9.mdx`, `solving08` (pp. 1 to 6, rendered pp. 5 and 6) and the notes Chapter 11 pp. 48, 50, 51 and Chapter 12 pp. 38, 39 (rendered), before the full page, its calcs or its symbols were opened. Algebra in sympy (`rv9py/blind.py`); independent route: numerical integration of each circuit ODE with scipy (`rv9py/indep.py`), reading amplitude and phase from the steady state.

### My answers
- 1(a) I0 = V0/R, phi = 0; L = 0 and C -> infinity (1/(omega C) -> 0); <P> = V0^2/(2R).
- 1(b) I(t) = -(V0/(omega L)) cos(omega t) = (V0/(omega L)) sin(omega t - pi/2); I0 = V0/(omega L), phi = +pi/2 (lags by a quarter cycle); R = 0, C -> infinity; <P> = 0.
- 1(c) I(t) = omega C V0 cos(omega t) = omega C V0 sin(omega t + pi/2); I0 = omega C V0, phi = -pi/2 (leads); current largest when omega t = 0 mod 2 pi, i.e. when the emf is zero and rising (a quarter period before the emf peaks); only the resistor takes energy on average.
- 2(a) phi = +pi/4 > 0: current lags; box = inductor.
- 2(b) |Z| = 100/10 = 10 ohm = sqrt(2) R, so R = 5 sqrt(2) = 7.071 ohm; omega L = R so L = R/10 = sqrt(2)/2 = 0.7071 H. (ODE check: I0 = 10.000 A, phi = 0.78540.)
- 2(c) in phase at omega = 1 (resonance, needs both), lagging at omega = 2 (inductive above resonance): both an inductor and a capacitor in series.
- 2(d) LC = 1 and 2L - 1/(2C) = 1 give L = 2/3 H, C = 3/2 F. (ODE check: phi(1) = 0, phi(2) = 0.785398.)
- 2(e) at resonance I0 = V0/R = 1 A, <P> = I0 V0 / 2 = 0.5 W.
- 3(a) I0 = eps/R1 (the closed switch shorts R2).
- 3(b) L dI/dt + (R1 + R2) I = eps; with eps dropped, I(t) = I0 exp(-(R1 + R2) t / L).
- 3(c) from (b): -L dI/dt(0+) = (R1 + R2) I0 = eps (R1 + R2)/R1. (With the battery kept, exactly: eps R2/R1. The statement asks "from your result of part (b)", so eps (R1 + R2)/R1 is the asked-for value; both are >> eps when R2 >> R1.) Fair: yes, the total emf is about R2/R1 times eps.
- 3(d) drop across R2 = I0 R2 = eps R2/R1; with R2 = 100 R1 the ratio is 100.
- 4(a) I(t) = (eps/R)(1 - exp(-R t/L)).
- 4(b) I -> eps/R; U_B = L eps^2/(2 R^2).
- 4(c) Q_max = (eps/R) sqrt(LC).
- 4(d) t = T/4 = (pi/2) sqrt(LC). (ODE check: 1.5707963 for LC = 1.)
- 4(e) Q/Q0 = cos(pi/3) = 1/2; U_L / U_L,max = sin^2(pi/3) = 3/4; on paper U_C fraction 1/4, |I|/I_max = sqrt(3)/2 = 0.866.
- 5(a) omega0 = 1/sqrt(LC) = 1.0e9 rad/s.
- 5(b) Q = omega0 L / R = 10.
- 5(c) I0 = V0/R = 1.0e-7 A.
- 5(d) V_C = I0/(omega0 C) = 1.0e-4 V (= Q V0).

### Figures and source points settled before opening the page
- Figure 11.13.1 (rendered p. 48): emf, R1, L in one loop; S and R2 side by side (S across R2) in the top wire. The stripped statement's words match.
- Figure 11.13.3 / 11.13.4 (rendered p. 50): battery, R and S1 in series along the top wire; L on the right across the battery chain; C with S2 in a middle branch, also across L. The stripped statement's words match.
- Figure 12.11.6 (rendered p. 39): antenna, R, L, C in series to ground. Matches.
- Solving 8 p. 5 (rendered): "The amplitude of the driving emf, eps0, is 100 Volts/meter": the slip is real.

### Comparison (one line per answer id)
- p1-a1: page "L = 0 and C infinitely large" (choice 2) = mine. Agree.
- p1-a2: page V0^2/(2*R) = mine. Agree.
- p1-b1: page V0/(omega*L) = mine. Agree.
- p1-b2: page phi = +pi/2, lags (choice 0) = mine. Agree.
- p1-c1: page omega*C*V0 = mine. Agree.
- p1-c2: page "emf zero and rising, a quarter cycle before the emf peaks" (choice 1) = mine. Agree.
- p1-c3: page "the resistor alone" (choice 3) = mine. Agree.
- p2-a: page lags, inductor (choice 3) = mine. Agree.
- p2-b1: page 7.07 ohm = mine 7.0711. Agree.
- p2-b2: page 0.707 H = mine 0.70711. Agree.
- p2-c: page inductor and capacitor in series (choice 2) = mine. Agree.
- p2-d1: page 0.6667 H = mine 2/3. Agree.
- p2-d2: page 1.5 F = mine 3/2. Agree.
- p2-e: page 0.5 W = mine. Agree.
- p3-a: page eps/R1 = mine. Agree.
- p3-b: page I0*exp(-(R1 + R2)*t/L) = mine. Agree.
- p3-c1: page eps*(R1 + R2)/R1 = mine (the value "from part (b)" that the statement asks for, which is also MIT's wording "Using your results from (b)"; see warning 4 about the exact value eps*R2/R1). Agree.
- p3-c2: page "fair" (choice 0) = mine. Agree.
- p3-d1: page eps*R2/R1 = mine. Agree.
- p3-d2: page 100 = mine. Agree.
- p4-a: page eps/R*(1 - exp(-R*t/L)) = mine. Agree.
- p4-b: page L*eps^2/(2*R^2) = mine. Agree.
- p4-c: page eps*sqrt(L*C)/R = mine. Agree.
- p4-d: page pi/2*sqrt(L*C) = mine. Agree.
- p4-e1: page 0.5 = mine. Agree.
- p4-e2: page 0.75 = mine. Agree.
- p5-a: page 1e9 rad/s = mine. Agree.
- p5-b: page 10 = mine. Agree.
- p5-c: page 1e-7 A = mine. Agree.
- p5-d: page 1e-4 V = mine. Agree.

No disagreement on any of the 30 answers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(d) statement (line 383) | Q14: "the capacitance or of the inductance, or of both, as the case may be" | "Find the inductance, in henries (first box), and the capacitance, in farads (second box)": visible while answering 2(c), it tells the reader the box holds both (answers p2-c) | Keep MIT's "or both, as the case may be" and make each box able to say "absent": "Find what the box holds. Type the inductance in henries in the first box, and 1/C in 1/F in the second box; type 0 in a box whose element is not there." (answers 2/3 and 2/3; update p2-d2 to `value="0.6667"`, its calc and the solution line). Any wording that asks for both an inductance and a capacitance answers 2(c) |
| 2 | warning | Problem 3(b) statement (line 478) | MIT (b): "Assume that the battery emf is negligible compared to the total emf ..." (MIT also presupposes it) | "(just after the switch opens it is small compared with the total emf around the loop, as part (c) checks)": answers choice box p3-c2 ("Was it fair?") in advance | Replace the bracket with "(part (c) asks whether this is fair)" |
| 3 | warning | Problem 3(c), choice box p3-c2, right choice (line 542) | n/a | "fair: the total emf is about R₂/R₁ times ε, far more than ε": shown in the same part as formula box p3-c1, it gives the size of p3-c1's answer (and, to leading order, p3-d1's εR₂/R₁) | Reword: "fair: the total emf is many times ε when R₂ ≫ R₁" |
| 4 | warning | Problem 3(c), formula box p3-c1 (lines 532 to 538) | MIT (c): "Using your results from (b)" | Expects ε(R₁ + R₂)/R₁ (right for the question asked). A reader who keeps the battery and types the exact value εR₂/R₁, which the page's own solution calls exact, is told only "wrong": the formula check's tolerance is 1e-6 relative (`lib/answers.ts` line 202) and the two differ by R₁/(R₁ + R₂) = 0.5% to 3.8% over the `vars` ranges | Add the mistake `{ expr: "eps*R2/R1", hint: "That is the exact value with the battery kept. This part asks for the value from your part (b), where ε was left out." }` (finite, and different from the answer at every point of the ranges) |
| 5 | warning | Problem 4(c), mistake hint of `eps*sqrt(L/C)/R` (line 683) | n/a | "Setting Q²/2C equal to L I²/2 gives Q = I√(LC)": with I = ε/R from (b), this states the answer | "Check the units: √(L/C) is a resistance, so this is not a charge. Set the capacitor's largest energy equal to the inductor's energy and solve again." |
| 6 | info | Problem 4(c) solution, Formula "Largest charge on the capacitor", `at="Section 11.13.7(d), pp. 50 and 51 ..."` (line 694) | 11.13.7(d) is printed entirely on p. 50 (rendered); only (e) is on p. 51 | pp. 50 and 51 | `at="Section 11.13.7(d), p. 50 (our own solution, with Eq. (11.5.12))"` |
| 7 | info | Problem 1 statement (line 74) | n/a | "A generator with the emf $V(t) = V_0\sin\omega t$, is connected": stray comma | Delete the comma before "is connected" |
| 8 | info | Problem 1(c), second and third boxes | Q7 asks amplitude and phase; Q8 the capacitor's average power | Phase asked as "when is the current largest"; Q8 widened to "which of the three elements takes energy on average" | None needed: a fair rewording of MIT's Questions 7, 3, 6 and 8, not new physics |
| 9 | info | Problem 2(a), the "volts per metre" note | Solving 8 p. 5 (rendered): "The amplitude of the driving emf, ε0, is 100 Volts/meter" | Calls it a slip; an emf is in volts | None: verified on the rendered page; the claim is right |
| 10 | info | Problems 3 and 4, circuits in words | Figure 11.13.1 (p. 48, rendered): emf, R₁, L in one loop, S drawn across R₂ in the top wire. Figures 11.13.3 and 11.13.4 (p. 50, rendered): ε, R, S₁ in series on the top wire; C with S₂ in a middle branch; L on the right, both across the battery chain | Matches in both cases | None |

## Arithmetic and answer checks
- Every number recomputed: Z = 10 Ω, R = 5√2 = 7.0711 Ω, L = 0.70711 H (ODE steady state: I₀ = 10.000 A, φ = 0.785398); L = 2/3 H, C = 3/2 F (ODE: φ = 0 at 1 rad/s, 0.785398 at 2 rad/s, I₀ = 1 A at 1 rad/s); reactances 4/3, 1/3 and 2/3 Ω; ⟨P⟩ = 0.5 W; 3(c) approximate ε(R₁ + R₂)/R₁ and exact εR₂/R₁, difference ε; 3(d) ratio 100 and the 1200 V pulse; 4(d) first charge maximum at T/4 (ODE: 1.5707963 for LC = 1) and Q_max = I₀√(LC) (ODE: 1.0000); 4(e) 0.5, 0.25, 0.866, 0.75 (ODE: 0.5000 and 0.7500); Problem 5: ω₀ = 1.0e9 rad/s, f₀ = 159.2 MHz, Q = 10, Δω = 1e8 rad/s, I₀ = 1e-7 A, V_C0 = 1e-4 V = Q V₀. All agree with the page, and every solution step is right (including the exact current with the battery kept in 3(c) and the claim in 3(d) that the drop does not depend on the approximation).
- Points: P1 5 + 7 + 8 = 20, P2 5 + 8 + 3 + 6 + 3 = 25, P3 3 + 6 + 7 + 4 = 20, P4 4 + 3 + 4 + 4 + 5 = 20, P5 3 + 4 + 4 + 4 = 15; total 100.
- Formula boxes: each listed mistake evaluated at 2000 random points of its `vars` ranges: all finite, all different from the answer (smallest relative difference 11%, p3-b). Ranges are physical (R₂ = 50 to 200 with R₁ = 1 to 2 keeps R₂ ≫ R₁; ωC ≥ 1.2 and C ≥ 1.5 keep the ωC vs 1/(ωC) and √(LC) vs √(L/C) slips apart). Every mistake hint is true of its formula (p1-a2 `V0^2/(4*R)` is indeed V_rms I_rms / 2).
- Number boxes (1%) accept 3-figure answers (7.07, 0.707, 0.667, 1.5, 0.5) and reject a capacitance in 2(b) (0.0141 F), R = 10 Ω, swapped L and C, 0.25 for 0.75, 0.866 for 0.5.
- Choice boxes: right positions 2, 0, 1, 3, 3, 2, 0 (varied); none answerable from units or length; the physics of every choice verified.
- calcs: `pytest tests/calc -k "problem-set-9 and 8.02"` in the worktree: 75 passed. Every `shown:` string occurs verbatim in the page; every `answer:` entry matches its box; formula entries use independent routes (numerical cycle averages, derivatives put back into the loop equation, the integral of the current, numerical roots).
- "How to answer" typing examples `V0*exp(-R*t/(2*L))` and `sqrt(L/C)/R` answer no box (checked against all 13 formula answers).

## Coverage and order
- Problem 1 = Examples 1 to 3 (Questions 1 to 8, pp. 2 to 4) in MIT's order: amplitude and phase, which L and C (R and C), power, for R, L and C in turn.
- Problem 2 = Sample Problems 1 and 2 (Questions 9 to 15, pp. 5 and 6) in MIT's order; Q9 and Q10 joined in one choice, Q11 and Q12 as (b), Q13 to Q15 as (c) to (e).
- Problem 3 = Additional Problem 11.13.4 (p. 48), parts (a) to (d) in order; MIT's comparison in (d) becomes the ratio box.
- Problem 4 = Additional Problem 11.13.7 (pp. 50 and 51): MIT (b) and (c) joined in page (b), MIT (d) and (e) as page (c) and (d); page (e) = Additional Problem 12.11.6 (p. 38), all four ratios asked (two boxed, two on paper).
- Problem 5 = Additional Problem 12.11.9 (p. 39), (a) to (d) in order.
- No Solved Problem is used (11.11 and 12.9 untouched), and no lesson uses these problems. No question goes beyond MIT's text, so the absence of "(our addition)" marks is right; no numbers of our choice are needed.
- Citations checked against printed pages: Eqs. (11.3.4) p. 9, (11.4.5) and (11.4.7) p. 17, (11.4.13) p. 19, (11.5.3) and (11.5.6) p. 21, (11.5.12) p. 22, (12.4.16) p. 16; session Eqs. (8.1) and (8.2) p. 1; Questions 3, 4, 7, 11, 12, 14, 15 on pp. 2, 3, 4, 5, 5, 6, 6; 11.13.4 p. 48, 11.13.7(a) and (c) p. 50, (e) p. 51, 12.11.6 p. 38, 12.11.9 p. 39. All correct except the extra "and 51" of row 6.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the solving08, Chapter 11 and Chapter 12 texts: no hits. No figure is redrawn; the circuits are described in words and match the rendered originals. Wording is the page's own. No em dashes, no OpenStax, no `## Summary`.

## Notes
- Solutions without a closing check step: 2(a), 2(c), 2(e), 3(a), 4(a), 4(b), 4(d), 5(a) to 5(c) (mostly one-line results; 4(e)'s "the fractions add to 1" and 5(d)'s "= Q" are good checks). Optional: one line each (units of L/R, the t → 0 and t → ∞ limits of 4(a), and so on).
- Symbols: 43 page-scoped meanings (9 new entries, the rest added to existing entries); the diff against HEAD~1 changes no other page's meaning. All fit and none gives an answer away. Δω (lines 68 and 807) falls back to the general "A change or difference" meaning, which fits only loosely; optional: add `8-02-problem-set-9` to the existing "Written Δω: the width of the resonance peak" meaning (pages: driven-rlc-circuits).
- `summary` names topics only.
- Not run: `npm run content:check`, `test:answers`.

COUNTS: errors=0 warnings=5 info=5

## Resolution (2026-11-28, by the page author)

- W1 (Problem 2(d) gave away 2(c)): the statement now keeps MIT's "or both, as the case may be" and asks for $L$ in henries and $1/C$ in 1/F, typing 0 in a box whose element is absent; p2-d2 is now `value="0.6667"` (label $1/C$), the solution formula gives $1/C = \frac23\ \text{F}^{-1}$, and its check says both boxes are non-zero, so the box holds both (C = 1.5 F); calc p2-C2 updated to 0.6667 with the new `shown:`.
- W2 (3(b) bracket answered p3-c2): replaced by "(part (c) asks whether this is fair)".
- W3 (p3-c2 right choice gave p3-c1's size): now "fair: the total emf is many times ε when R₂ ≫ R₁".
- W4 (exact value εR₂/R₁ marked only wrong): added the mistake `eps*R2/R1` with the suggested hint.
- W5 (p4-c hint stated the answer): the hint now says √(L/C) is a resistance and asks to set the two energies equal again, without the result.
- Info 6: the 4(c) citation (page and calcs) is now "Section 11.13.7(d), p. 50".
- Info 7: stray comma before "is connected" deleted.
- Info 8 to 10: no change needed.
- Notes: a short "Check" step added to the solutions of 2(a), 2(c), 2(e), 3(a), 4(a), 4(b), 4(d), 5(a), 5(b) and 5(c) (the 5(a) check's 1000 Ω reactances have calcs entries p5-XL0 and p5-XC0); the page is added to the existing Δω meaning "width of the resonance peak" (pages: driven-rlc-circuits). Status set to reviewed.
