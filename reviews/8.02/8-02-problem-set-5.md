---
page: content/year-1/8.02/8-02-problem-set-5.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap7dc_circuits/ (read: local PDF and pdftotext; pp. 25-27 rendered at 130 and 400 dpi)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ (read: local PDF and pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 5: current, resistance, DC circuits and RC circuits

Writer: Opus. Reviewer: Opus (same model, blind).

Blind order kept: the stripped statements and the two chapters were read and every part solved (section "Blind solve" below, written to this file first); only then were the page (worktree `ps-802-5`, commit 588757d), its calcs file and its page-scoped meanings in `data/symbols.json` opened.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro, first paragraph | Conceptual Question 6.6.1 (area ratio) is used as a number box (p2-b); only 6.6.3 (p2-c) and 7.10.3 (p6-d) become choice boxes | "plus three of their Conceptual Questions turned into choice boxes" | Write "plus three of their Conceptual Questions turned into answer boxes" (or "two as choice boxes, one as a number box"). |
| 2 | warning | Problem 3(a), second hint | The problem uses σ_a to σ_d for surface charge (Section 6.7.8) | "Ohm's law in a material: $\vec J = \sigma\vec E = \vec E/\rho$", σ as conductivity, on the same problem where σ_a to σ_d are charges per area | Write the hint as "Ohm's law in a material: $\vec E = \rho\vec J$." and remove "; in J = σE, the conductivity 1/ρ" from the page-scoped σ meaning in data/symbols.json. |
| 3 | info | Problem 1(b) solution | Answer printed as 52.5 min | 52.6 min, with "(the notes print 52.5 min; the difference is rounding)" | None: 0.855/2.710e-4 s = 3155 s = 52.58 min; the page is right and says so. The 2% box accepts both. |
| 4 | info | Problem 5 statement | Asks only for the currents | Also asks for the directions (the boxes check sizes only) | Optional: "Size of the current in the 2.0 Ω resistor:" etc. in the box labels, so a reader who types a signed value from their own convention sees why it is marked wrong. |
| 5 | info | Problem 3(a) | Asks for E1 and E2 | Box for E1 only; E2 given in the solution | None (MIT's whole question is answered in the solution). |

## Arithmetic and answer checks
- All numbers recomputed (scratch `rv5py/solve.py`): J = 3.686e6 A/m², v_d = 2.710e-4 m/s (also as I/(neA)), t = 3155 s = 52.58 min; 54 Ω; 0.25; power ratio 2; U = 20/19 V, currents 105/19 = 5.526 A, 5/19 = 0.263 A, 110/19 = 5.789 A (linear solve of junction + two loop equations); 3.846, 1.538, 2.308 A; Q = 68.57 μC; τ = 29.71 μs (confirmed by integrating the circuit's differential equation: q(τ)/Q = 1 - 1/e to 1e-12, final charge 68.57 μC). Problem 4 confirmed by a two-loop linear solve at random points; Problem 3 by a series-layer solve and σ = ε0(E_right - E_left) at three random points.
- Every solution step checked, including the Problem 5 branch equations and loop check (10 - 11.05 + 1.05 = 0), the Problem 4 example (3/11 = 0.273 A, 3/20.5 = 0.146 A), the Problem 6(c) derivation and check Q/τ = 68.57/29.71 = 2.31 A = I3(0), and 5τ ≈ 150 μs. Each solution ends with a check (units, a limit, a junction or loop sum).
- Formula boxes p3-a, p3-b, p3-c, p3-d1, p3-d2, p4-a, p4-b equal my answers. vars ranges keep every answer and mistake finite and positive. Each listed mistake differs from the answer over the whole range (lib/answers.ts compares at 1e-6 relative) and each hint is true of its formula (p3-b's third mistake is exactly the three layers combined in parallel; p4-b's "eps/(R + 2*r)" is the internal resistances in series). p3-a's mistake I/(rho1*A) equals the answer only at the range edge rho1 = 1, which random points do not hit; harmless.
- Number boxes at 2%: the slips I tried are rejected (R3C = 16 μs, Cε = 160 μC, 40/14 = 2.86 A, 18 Ω, 0.5 for the area ratio).
- Choice boxes: right positions 2, 3, 1, 2, 0 (varied); none answerable from units; the choices do not answer each other. p3-e's right choice is the longest of its four, but choice 3 mirrors it at almost the same length, and elsewhere the right choice is short (p2-c, p6-d).
- Hints: none gives a result away. The second hint of 3(d) states σ = ε0(E_right - E_left); that is the method MIT asks for (Gauss's law), not the answer.
- calcs: `node scripts/calc-test.mjs -k 8-02-problem-set-5`: 163 passed. Every `answer:` entry equals its box; every `shown:` string appears verbatim in the page (scripted check). `npx tsx scripts/check-content.ts` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Every problem is an Additional Problem (6.7.4, 6.7.6, 6.7.8, 7.11.1, 7.11.2, 7.11.5) or a Conceptual Question (6.6.1, 6.6.3, 7.10.3); no Solved Problem (6.5.x, 7.9.x) is used. Parts follow MIT's order; the extra box of 1(a) and Part 6(c) are marked "(our addition)"; 6(d) says how it adapts CQ 7.10.3.
- Circuits described in words, checked against the rendered figures. Figure 7.11.1: series, + of one battery to - of the other, R across the free ends; parallel, like terminals joined, R across the pairs: matches. Figure 7.11.2 (rendered at 400 dpi): the 20 V battery sits on the top-left wire with its long (+) plate towards the left corner, so towards the 2.0 Ω resistor, and its short (-) plate towards T; the 10 V battery sits on the bottom-left wire with + towards the left corner and - towards B; the 30 V battery in the right branch has + up towards the 5.0 Ω resistor and - towards B; 4.0 Ω between T and B. All match the page's words. Figure 7.11.5: ε, switch S and R1 in series, then R2 alone and R3 + C side by side back to the battery: matches.
- Points ours (said in "How to answer"): 15 + 10 + 25 + 15 + 15 + 20 = 100; parts add up in every problem.
- Not used: 6.7.1-6.7.3, 6.7.5, 6.7.7, 7.11.3, 7.11.4, 7.11.6. No 8.02 lesson uses the chosen problems as worked examples (checked by grep).

## Licensing
- `grep -il "rights reserved\|courtesy"` on both chapter texts: nothing. No figure redrawn (circuits in words). Statements are in the page's own words (compared with 6.7.4, 6.7.6, 6.7.8, 7.11.1, 7.11.2, 7.11.5); only short standard phrases coincide. No OpenStax or LibreTexts; no em dashes in the page.

## Notes
- Citations: every `at=` checked against the printed footer page of the PDFs: Eq. (6.1.5) p. 2; (6.2.7), (6.2.10) p. 5; (6.3.1), (6.3.2) p. 7; (7.2.5) p. 3; (7.2.7) p. 4; (7.3.2) p. 4; (7.3.5) p. 5; (7.4.1) p. 6; (7.4.2) p. 7; (7.6.9) p. 10; Section 6.6 p. 13; 6.7.4 pp. 14-15; 6.7.6 pp. 15-16; 6.7.8 pp. 16-17; 7.10 p. 25; 7.11.1 pp. 25-26; 7.11.2 p. 26; 7.11.5 p. 27. All correct, and each equation's content matches. `cite="mit"` is used only for Chapter 7, `reading1` for Chapter 6.
- Symbols: page-scoped meanings exist for ε, μ, ρ, σ, τ, k, t, d, n, e, v, r, P, A, C, q, L, R, E, U, V, J, I and every subscripted form used; they fit the page and give no answer away (σ: see finding 2).
- `summary` names topics only. `prerequisites` and `covers: [10, 12]` match the lessons dc-circuits (lecture 10) and rc-circuits (lecture 12); lesson links use `/courses/8-02/…` like other 8.02 pages.

## Blind solve

Written from `stripped-set-5.mdx`, Chapter 6 (6.6, 6.7.4, 6.7.6, 6.7.8) and Chapter 7 (7.10, 7.11.1, 7.11.2, 7.11.5) only, before the full page, calcs or symbols were opened. Numbers from `rv5py/solve.py` (scratch), each checked by a second route.

### My answers
- p1a: J = n q v (parallel to v for q > 0), unit A/m². For electrons (q = -e) J points opposite to the electrons' velocity (the direction of conventional current).
- p1b: J = 115/31.2e-6 = 3.686e6 A/m²; v_d = J/(n e) = 2.710e-4 m/s (checked as I/(n e A)); t = 0.855/v_d = 3155 s = 52.6 min (MIT prints 52.5 min).
- p2a: R ∝ ℓ/A with volume fixed, so ×9: 54 Ω.
- p2b: A1/A2 = R2/R1 = 1/4 = 0.25.
- p2c: P = V²/R: the lower-resistance (second) conductor gets twice the power.
- p3a: J equal in all layers (steady state: otherwise charge piles up without limit at the interfaces); E1 = ρ1 I/A.
- p3b: R = d(2ρ1 + ρ2)/(3A); ρ1 = ρ2 = ρ gives ρd/A.
- p3c: drops Vρ1/(2ρ1+ρ2), Vρ2/(2ρ1+ρ2), Vρ1/(2ρ1+ρ2); middle = Vρ2/(2ρ1+ρ2); sum V.
- p3d: σa = 3ε0Vρ1/(d(2ρ1+ρ2)) = -σd; σb = 3ε0V(ρ2-ρ1)/(d(2ρ1+ρ2)) = -σc.
- p3e: ρ2 ≫ ρ1: almost all of V across the middle layer, E1 → 0, σa, σd → 0, σb → +3ε0V/d, σc → -3ε0V/d: a parallel-plate capacitor of gap d/3, the outer layers acting as conductors.
- p4a: I_s = 2ε/(2r + R).
- p4b: I_p = 2ε/(r + 2R) (= ε/(R + r/2)).
- p4c: equal when r = R; series larger when R > r; parallel larger when r > R.
- p5 (Figure 7.11.2 rendered: description matches every polarity): V_T - V_B = 20/19 V. 2.0 Ω: 105/19 = 5.53 A, from T down the left branch (from the 20 V battery towards the 10 V one); 4.0 Ω: 5/19 = 0.263 A from T to B; 5.0 Ω: 110/19 = 5.79 A from the 30 V battery towards T. Junction check 5.789 = 5.526 + 0.263.
- p6a: uncharged capacitor acts as a wire: I1 = 40/(8 + 2.4) = 3.85 A; I2 = 1.54 A; I3 = 2.31 A.
- p6b: no current through R3 at the end; V_C = 40·6/14 = 17.14 V; Q = 68.6 μC.
- p6c: τ = (R3 + R1R2/(R1+R2))C = 7.43 Ω × 4 μF = 29.7 μs.
- p6d: R1 and R2 change the final charge; R3 does not.

### Comparison (one line per answer id)
- p1-a: page choice 2 "against the velocity of the electrons"; mine the same. Agree.
- p1-b1: page 3.69e6 A/m²; mine 3.686e6. Agree.
- p1-b2: page 2.71e-4 m/s; mine 2.710e-4. Agree.
- p1-b3: page 52.6 min; mine 52.58. Agree.
- p2-a: page 54 Ω; mine 54. Agree.
- p2-b: page 0.25; mine 0.25. Agree.
- p2-c: page choice 3 "the second, twice as much"; mine the same. Agree.
- p3-a: page rho1*I/A; mine ρ1 I/A. Agree.
- p3-b: page d*(2*rho1 + rho2)/(3*A); mine the same. Agree.
- p3-c: page V*rho2/(2*rho1 + rho2); mine the same. Agree.
- p3-d1: page 3*eps0*V*rho1/(d*(2*rho1 + rho2)); mine the same. Agree.
- p3-d2: page 3*eps0*V*(rho2 - rho1)/(d*(2*rho1 + rho2)); mine the same. Agree.
- p3-e: page choice 1 (V across the middle layer, σa, σd → 0, σb, σc → ±3ε0V/d); mine the same. Agree.
- p4-a: page 2*eps/(R + 2*r); mine 2ε/(2r + R). Agree.
- p4-b: page 2*eps/(2*R + r); mine 2ε/(r + 2R). Agree.
- p4-c: page choice 2 (equal at R = r; series larger when R > r); mine the same. Agree.
- p5-a: page 5.53 A; mine 5.526. Agree (direction agrees: from T down the left branch).
- p5-b: page 0.263 A; mine 0.263. Agree (T to B).
- p5-c: page 5.79 A; mine 5.789. Agree (towards T).
- p6-a1: page 3.85 A; mine 3.846. Agree.
- p6-a2: page 1.54 A; mine 1.538. Agree.
- p6-a3: page 2.31 A; mine 2.308. Agree.
- p6-b: page 68.6 μC; mine 68.57. Agree.
- p6-c: page 29.7 μs; mine 29.71. Agree.
- p6-d: page choice 0 "R₁ and R₂, but not R₃"; mine the same. Agree.

No disagreement.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-28, by the page author)

- Warning 1 (intro): now "three of their Conceptual Questions turned into answer boxes (two choice boxes and one number box)".
- Warning 2 (σ in Problem 3(a)): the hint now reads "Ohm's law in a material: E = ρJ", and the page's σ meaning no longer mentions conductivity.
- Info items: no change (the page already notes 52.6 against the notes' 52.5 min; the box labels name what is asked; E₂ follows from E₁ in the solution).

Status set to `reviewed`.
