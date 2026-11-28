---
page: content/year-1/8.02/8-02-problem-set-4.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving04/ (read: Problem Solving 4 PDF, pdftotext and pages 5 and 6 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read: Chapter 5 PDF, pdftotext, printed pp. 42 and 43 rendered for Figures 5.12.1 to 5.12.4)
verdict: needs-changes
---

# Review: Problem Set 4: capacitance, stored energy and dielectrics

Writer: Opus. Reviewer: Opus (same model, blind).

The blind answers below were written into this file before the full page, its calcs file or its symbols were opened (statements only, from the stripped file, plus MIT's two PDFs).

## Blind solve

Writer: Opus. Reviewer: Opus (same model, blind).

### My answers (written before opening the full page)
- P1(a) E = Q/(2π ε0 ℓ r); (b) ΔV = Q ln(b/a)/(2π ε0 ℓ); (c) C = 2π ε0 ℓ/ln(b/a); (d) U = Q² ln(b/a)/(4π ε0 ℓ); (e) U = Q²/(2C); (f) C = 2π(8.85e-12)(1)/ln 4 = 40.1 pF.
- P2(a) ΔV = q/C; (b) dW = q dq/C; (c) W = Q²/(2C); (d) equal to the stored energy of P1(d) (no losses, quasi-static).
- P3(a) Q0 = 120 μC; (b) common ΔV = 120/9 = 13.3 V, Q1 = 80.0 μC, Q2 = 40.0 μC; (c) U = 0.800 mJ vs 1.20 mJ before (1/3 lost, 0.400 mJ).
- P4(a) C = κ ε0 A/d; (b) C = (ε0 A/d)[κ1/2 + κ2κ3/(κ2+κ3)].
- P5(a) factor 2; (b) W = Q² d/(2 ε0 A); (c) factor ln(2b/a)/ln(b/a) = 1 + ln2/ln(b/a); energy from the external work pulling the outer cylinder out against the attraction; (d) factor ln(b/a)/ln(2b/a); stored energy falls, charge flows back into the battery, which takes up |VΔQ| = 2|ΔU| (the field energy lost plus an equal amount of external work).
- P6(a) 2/3 μF = 0.667 μF; (b) Q1 = Q2 = 8.00 μC, Q3 = Q4 = 144/7 = 20.6 μC; (c) Q1 = 7.2, Q2 = 9.6, Q3 = 21.6, Q4 = 19.2 μC (left pair at 7.2 V, right pair at 4.8 V, Ceq = 2.4 μF, total 28.8 μC).
- P7(a) C = ε0 A(κ1+κ2+κ3)/(3d); (b) C = 3 ε0 A/[d(1/κ1+1/κ2+1/κ3)]; (c) yes: the interfaces are planes of constant potential (D normal and continuous), so thin metal sheets could be slipped in without change.
- P8(a) D = Q/(4π r²); (b) E = Q/(4π κ ε0 r²) inside, Q/(4π ε0 r²) outside.
- P9(a) E = λ/(20π ε0 r) inside, λ/(2π ε0 r) outside (and for r < a); (b) −9λ/10; (c) +9λ/10.
- P10(a) d = κ ε0 A/C = 4.118 mm, E = 13.36 kV/m (13.4); (b) 6.16 nC; (c) 5.02 nC; (d) 520 nC/m².
- P11(a) field of one plate Q/(2 ε0 A) (force Q²/(2 ε0 A)); (b) dU = (Q²/(2ε0A)) dx so F = Q²/(2ε0A); (c) F/A = Q²/(2ε0A²) = ε0E²/2 with E = Q/(ε0 A); (d) E = sqrt(2p/ε0) = 151.3 MV/m.
- P12(a) u = κ ε0 E²/2; (b) W = Q² d/(2 κ ε0 A); (c) u = Q²/(2 κ ε0 A²).
- P13(a) positive, stored as extra field energy; (b) ×9; (c) raises it (dielectric strength of the material above that of air); (d) capacitance rises (κ of a polar dielectric grows as T falls).

### Comparison (one line per answer id)
- p1-a Q/(2*pi*eps0*l*r): agrees.
- p1-b Q*log(b/a)/(2*pi*eps0*l): agrees.
- p1-c 2*pi*eps0*l/log(b/a): agrees.
- p1-d Q^2*log(b/a)/(4*pi*eps0*l): agrees.
- p1-e Q^2/(2*C): agrees.
- p1-f 40.1 pF: agrees (mine 40.111 with eps0 = 8.85e-12; 40.130 with CODATA eps0, both inside 2%).
- p2-a q/C: agrees.
- p2-b q*dq/C: agrees.
- p2-c Q^2/(2*C): agrees.
- p2-d choice 1 (equal): agrees.
- p3-a 120: agrees.
- p3-b1 80, p3-b2 40: agree.
- p3-c 0.800 mJ: agrees (and 1.20 mJ before, a third lost: agrees).
- p4-a kappa*eps0*A/d: agrees.
- p4-b eps0*A/d*(kappa1/2 + kappa2*kappa3/(kappa2+kappa3)): agrees (identical form).
- p5-a 2: agrees.
- p5-b Q^2*d/(2*eps0*A): agrees.
- p5-c1 log(2*b/a)/log(b/a): agrees. p5-c2 choice 0 (external work against the attraction): agrees.
- p5-d1 log(b/a)/log(2*b/a): agrees. p5-d2 choice 3 (back into the battery, with the work done): agrees; the solution's split (battery takes ΔV|ΔQ| = 2|ΔU|, half from the field, half from external work) matches mine.
- p6-a 0.667: agrees. p6-b1 8.00, p6-b2 20.6: agree. p6-c1 7.20, p6-c2 9.60, p6-c3 21.6, p6-c4 19.2: agree.
- p7-a eps0*A*(k1+k2+k3)/(3d): agrees. p7-b 3*eps0*A/(d*(1/k1+1/k2+1/k3)): agrees. p7-c choice 2 (yes, equipotential boundaries): agrees.
- p8-a Q/(4*pi*r^2): agrees. p8-b1 Q/(4*pi*kappa*eps0*r^2), p8-b2 Q/(4*pi*eps0*r^2): agree.
- p9-a1 lam/(20*pi*eps0*r), p9-a2 lam/(2*pi*eps0*r): agree. p9-b -0.9, p9-c 0.9: agree.
- p10-a 13.4 kV/m: agrees (13.357 unrounded, 0.3% from the box value). p10-b 6.16, p10-c 5.02, p10-d 520: agree.
- p11-a Q/(2*eps0*A): agrees. p11-d 151 MV/m: agrees (151.30 with 1.013e5 N/m²).
- p12-a kappa*eps0*E^2/2, p12-b Q^2*d/(2*kappa*eps0*A), p12-c Q^2/(2*kappa*eps0*A^2): agree.
- p13-a choice 2 (positive, into the field), p13-b choice 0 (×9), p13-c choice 3 (raised), p13-d choice 1 (rises): agree.

No disagreement between the blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "What you need" (dielectric strength sentence), Problem 13(c) solution, Problem 13(d) solution; calcs entries `strength-table`, `p11-ratio`, `p13-table` | The table of κe and dielectric strength (air 3, paper 16, glass 9 MV/m) and the sentence "the alignment is not complete due to random thermal motion" are on printed p. 16 of Chapter 5 (PDF p. 17). Section 5.5 starts on p. 15, but these are on the next page. | "in the notes' table on p. 15" (twice) and "The notes explain (Section 5.5, p. 15)" | Change all three to p. 16 ("the notes' table on p. 16", "Section 5.5, p. 16"), and `at:` of the three calcs entries to "Section 5.5, table on p. 16" (p11-ratio: "and the table on p. 16"). |
| 2 | warning | Problem 13(d) statement | Conceptual Question 4: "If a dielectric-filled capacitor is cooled down, what happens to its capacitance?" (any dielectric) | Asks about a **polar** dielectric (water as example) | Keep the narrowing (it makes the answer definite) but say so: "(The notes ask about any dielectric; we take a polar one, our choice, for which the answer is clear.)" |
| 3 | info | Problem 1(e) statement | The sheet says "If you use your expression for C from questions 4 above" | Quotes it as "your expression for $C$ from question 4" | Quote exactly: "your expression for C from questions 4 above", or drop the quotation marks. |
| 4 | info | Problem 1(a) statement | Question 1 asks for the direction **and** magnitude of the field | Gives the direction in the statement ("It points radially outwards") and boxes only the size | Acceptable (no box can take a direction); optionally say "MIT also asks for the direction: radially outwards". |
| 5 | info | Problems 8 and 9 statements | 5.12.3(a, b) ask for D and E in all three regions (r < R1 too); 5.12.4(a) asks for E for r < a too | Boxes only for the dielectric and the outside; the solutions give the other regions | Fine as is (the solutions cover them); optionally add "(the notes also ask for r < R₁ / r < a: see the solution)". |
| 6 | info | Problems 9, 10, 11(d) solutions | The notes print −9λ/10, +9λ/10, 13.4 kV/m, 6.16 nC, 5.02 nC, 520 nC/m², 151 MV/m | The intro says the notes print a few final numbers for 5.12.4 to 5.12.6; the solutions compute every value independently and do not present the printed values as a source | Fine. Optionally add "(the notes print the same value)" after each, so a reader sees the agreement. |

## Arithmetic and answer checks
- All numbers recomputed with my own Python (scratchpad, not the calcs file): 40.11 pF; 120, 80, 40 μC; 1.20 and 0.800 mJ; 2/3 μF, 8, 20.57, 7.2, 9.6, 21.6, 19.2 μC; d = 4.118 mm, E = 13.357 kV/m (13.351 with CODATA ε₀), Q = 6.16 nC, Q_P = 5.019 nC, P = 520.1 nC/m², check (Q − Q_P)/(ε₀A) = 13.36 kV/m; E = 151.30 MV/m (101,341 N/m²: 151.33; 101,353: 151.37; 101,325: 151.30, so "All three give 151 MV/m" is right); 14.7 lb/in² = 101,353 N/m² right; ln 20/ln 10 = 1.301; 151/3 ≈ 50.
- Every formula box evaluated on 20,000 random points plus every corner of its `vars`: all answers finite and non-zero; every listed mistake finite. Each mistake hint is true of its formula.
- Mistakes that coincide with the answer on a set of measure zero (p1-a point-charge form at ℓ = 2r; p4-b when κ₂ = κ₃; p7-a/p7-b when κ₁ = κ₂ = κ₃; several unit-mismatched mistakes on a surface): harmless, since `lib/answers.ts` compares at random points.
- **Warning (7):** p5-c1 mistake `2` and p5-d1 mistake `1/2` equal the answer exactly at the corner a = 0.5, b = 1 of the `vars` (b/a = 2, where ln(2b/a)/ln(b/a) = ln 4/ln 2 = 2). The brief asks that every mistake differ from the answer everywhere in the range. Fix: change `a: [0.2, 0.5]` to `a: [0.2, 0.4]` in both boxes (then b/a ≥ 2.5).
- Number boxes: all 2%; each likely slip is rejected (p10-a without κ: 72 kV/m; p11-d without the 2: 107 MV/m; p1-f with log10: 92 pF; p3-c taking the energy before: 1.2 mJ; p9-b with 1/κ: −0.1; p5-a reversed: 0.5). 13.36 kV/m (unrounded) lies inside the 2% of 13.4.
- Points: 12 + 8 + 7 + 7 + 9 + 9 + 8 + 6 + 6 + 8 + 6 + 6 + 8 = 100, and every exercise's parts add to its total.
- Choice boxes: right answer at positions 1, 0, 3, 2, 2, 0, 3, 1 (varied); no right answer is clearly the longest or shortest.
- Every solution ends with a check (units, a limit, a sum or a number), and the two "show that" parts, 11(b) and 11(c), say "No box: compare with the solution".
- `calc:test -k "8.02 and problem-set-4"`: 210 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1 and 2 follow Questions 1 to 5 of Problem Solving 4 in MIT's order, with MIT's sub-steps of Question 5 (a to d). Problems 3, 4, 5 are the sheet's homework Problems 1, 3, 4 in order and complete (parts a, b; a, b; a to d). The reason for leaving out homework Problem 2 is right: it asks for the field and energy density, the energy in a shell 2πrL dr and its integral compared with ½C(ΔV)², which is Questions 1 and 4 again with a wire for the inner cylinder; Problem 1(d)'s solution names it.
- Problems 6 to 12 are Additional Problems 5.12.1 to 5.12.7 in the notes' order, each with all its parts; Problem 13 is Conceptual Questions 1 to 4 in order. None of them is a Solved Problem (5.10.1 to 5.10.4: a capacitor network, two dielectrics side by side, a spherical capacitor with two dielectrics, a plate on a spring); none of these appears.
- Situations checked against the rendered figures: homework 3(b) (κ₁ the left half, κ₂ on top and κ₃ below in the right half, each d/2), 5.12.1 (C₁, C₂ top branch, C₃, C₄ bottom, + terminal on the C₁/C₃ side, S joining the two middle points), 5.12.2 (side by side, then stacked), 5.12.3 (sphere in a dielectric shell): all described correctly in words.
- Page citations checked against printed page numbers (chapter PDF page = printed + 1, confirmed): Eqs. (5.1.1) p. 2, (5.2.2) p. 4, (5.2.4) p. 5, (5.2.7) p. 6, (5.3.3) p. 9, (5.3.7) p. 10, (5.4.4) p. 13, (5.5.5) p. 19, (5.5.21), (5.5.23), (5.5.24) p. 23; Section 5.9 p. 36; Conceptual Questions pp. 41 and 42; 5.12.1 p. 42, 5.12.2 pp. 42 and 43, 5.12.3 p. 43, 5.12.4 pp. 43 and 44 (its parts on p. 44), 5.12.5 p. 44, 5.12.6 pp. 44 and 45 (its parts on p. 45), 5.12.7 p. 45; session Questions 1 and 2 p. 2, 3 and 4 p. 3, 5 p. 4, homework 1 p. 5, 3 pp. 5 and 6, 4 p. 6. All right except the table/thermal-motion page (finding 1).
- Slip notes checked: "concentric spherical cylinders" (sheet p. 1) right; "questions 4" (finding 3, wording only); 5.12.4(b, c) "spherical shell" right; 5.12.7(b)'s pointer "(problem 4-1a above)" right as described; 5.12.6(d) 101,341 N/m² and 151 MV/m right.
- Intro: says plainly that MIT's written homework for 8.02T is not on OCW, what the set is built from, where each problem comes from, that the notes print a few final numbers for 5.12.4 to 5.12.6 but no working, and (How to answer) that the points are ours. Summary, intro, How to answer example (`Q*ln(3*r)/(5*eps0)`, `kappa1*kappa2`) and hints give no answer away. Two mild cases, info only: Problem 2(b)'s hint ("charge times ΔV") with part (a) gives the result in one step; Problem 11(a)'s box equals the target force of the statement divided by Q, which follows MIT's own "we would like to show" framing.
- Overlap with Sets 1 to 3: none of their problems is reused. Set 3 Problem 1 (Problem Solving 3) also finds the field between two coaxial cylinders, but with a solid insulating inner cylinder and without ΔV, C or U; the overlap is MIT's own and is fine.

## Licensing
- Neither PDF has a "rights reserved" or "courtesy" notice (grep on both texts). No MIT figure is redrawn: every figure is described in words. No OpenStax or LibreTexts material. Wording is the page's own throughout; only short standard phrases match MIT.

## Notes
- Symbols: every letter used on the page (Q, q, C, A, d, E, D, P, p, U, W, V, F, r, a, b, h, x, s, S, i, σ, λ, κ, μ, ℓ, ε₀ and every subscripted form) has a meaning scoped to `8-02-problem-set-4`, covering the intro and "What you need" too (a and b as path end points, s as the path step); content:check reports no symbol problem.
- No em dashes; no `## Summary`; `covers: [7, 8]`, `lecture: 11`, `order: 90` match the plan in TASKS.md and the lessons' lecture numbers; both source URLs answer 200.
- Gauss's law in a dielectric is written $\oint\kappa\vec E\cdot d\vec A = q_{\text{free}}/\varepsilon_0$ where Eq. (5.5.23) has $\oint\vec E\cdot d\vec A = Q/(\kappa_e\varepsilon_0)$; the same for a uniform κ, fine.

COUNTS: errors=1 warnings=2 info=6

## Resolution (2026-11-28, by the page author)

- Error 1: the dielectric-strength table and the thermal-motion sentence are now cited at p. 16 (What you need, Problem 13(c) and (d)); calcs `strength-table`, `p13-table` and `p11-ratio` likewise.
- Warning 2: Problem 13(d) now says the notes ask about any dielectric and that taking a polar one is our choice.
- Warning 3: the `vars` range of a in p5-c1 and p5-d1 is now [0.2, 0.4], so b/a ≥ 2.5 and the listed mistakes 2 and 1/2 never equal the answer.
- Info 1: the sheet's words are now quoted exactly ("from questions 4 above"). Other info items left as they are.
