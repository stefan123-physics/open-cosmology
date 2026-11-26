---
page: content/year-3/8.044/8-044-problem-set-3.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps3/ (read: local PDF, pdftotext and rendered pages 1-4)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss3/ (read: local PDF, pdftotext per page; opened only after the blind answers below were written)
verdict: pass-with-notes
---

# Review: Problem Set 3: clearing impurities, energy fluctuations in a gas, temperature, work along paths and a ferromagnet

Reviewed from the worktree `.claude/worktrees/ps-8044-3` (commit e3a1231). The blind solve was done from the stripped statements file and MIT's sheet only; the full page, its calcs file and MIT's solutions were opened afterwards.

## Blind solve

### My answers (written before opening the full page, its calcs or MIT's solutions)
- p1 mean: <d> = 36 * (2a/3) = 24a
- p1 variance: one sweep <x^2> = 4a^2/3, var = 8a^2/9; 36 sweeps: Var d = 32a^2 (sigma = 4*sqrt(2) a = 5.657a)
- p1 density: p(d) ~ 1/sqrt(64 pi a^2) exp(-(d-24a)^2/(64a^2)) = exp(-(d-24a)^2/(64a^2)) / (8 sqrt(pi) a)  (CLT, Gaussian)
- p2a: E1 ~ Gamma(3/2, kT): mean 3kT/2, var 3(kT)^2/2, ratio sqrt(2/3) = 0.8165
- p2b: N = 2.69e25 m^-3 * 1e-6 m^3 = 2.69e19; ratio = sqrt(2/3)/sqrt(N) = 1.574e-10
- p3a: PV/(nR) = CH/M = Theta + C'H'/M'
- p3b: M = CH/T (Curie's law); M' = C'H'/(T - Theta) (Curie-Weiss law); PV = nRT (ideal gas)
- p4a: W_a = V1[ kappa (P2^2 - P1^2)/2 - alpha P1 (T2 - T1) ]
- p4b: W_b = V1[ kappa (P2^2 - P1^2)/2 - alpha P2 (T2 - T1) ]
- p4c: W_c = V1[ kappa (P2^2 - P1^2)/2 - alpha (P1+P2)(T2 - T1)/2 ]; least work (algebraically) for alpha > 0: path b
- p5a: W_a = sigma T1^4 (V1 - V2)/3 (heating step at constant V does no work)
- p5b: W_b = sigma T1^4 V1 [ (V1/V2)^(1/3) - 1 ] = sigma V1 T1^3 (T2 - T1)
- pp a: exact; S = 2x^5/5 + x^2 y^3 + 3y^5/5 (C = 0 for S(0,0)=0)
- pp b: not exact (d/dy e^y = e^y differs from d/dx[x(e^y+1)] = e^y + 1)
- pp c: exact; S = y + (1 + y - x)e^x - 1
- p6a: f(H) = aH
- p6b: M = aH/(1 - T/Tc) + bH^3 + M0 (1 - T/Tc)^(1/2)

### Comparison (one line per answer id)
- p1-mean: page 24a = mine. Agree; MIT p. 1 <d> = 24a.
- p1-var: page 32a^2 = mine. Agree; MIT p. 1 sigma^2 = 32a^2.
- p1-density: page exp(-(d-24a)^2/(64a^2))/(8a sqrt(pi)) = mine (equal at 5 random points to 1e-9; normalisation 1 in calcs). Agree with MIT p. 1.
- p2-single: page 0.816 (1%) = mine sqrt(2/3) = 0.8165. MIT p. 2 gives 0.82 (accepted by the box).
- p2-gas: page 1.57e-10 (2%) = mine 1.574e-10. MIT p. 2 gives 1.6e-10 (accepted, 1.6% off).
- p3-ha: page CH/M = mine. MIT p. 3 (lower-case c in the solutions; the sheet has C).
- p3-hb: page Theta + C'H'/M' = mine. MIT p. 3.
- p3-ma: page CH/T = mine. MIT p. 3.
- p3-mb: page C'H'/(T - Theta) = mine. MIT p. 3.
- p3-name: page choice 0 (Curie law) = mine. MIT p. 3 "Curie Law Paramagnet".
- p4-a: page = mine. MIT p. 3.
- p4-b: page = mine. MIT p. 4.
- p4-c: page = mine (also against a numerical line integral: -1.53 both). MIT p. 4.
- p4-least: page choice 0 (path b) = mine. MIT p. 4: path b least, path a most.
- p5-a: page sigma T1^4 (V1 - V2)/3 = mine. MIT p. 5.
- p5-b: page sigma T1^4 V1 ((V1/V2)^(1/3) - 1) = mine (numerical integral 3.62874 vs formula 3.62874). MIT p. 5.
- pp-a: page (2x^5 + 5x^2y^3 + 3y^5)/5 = mine (C = 0). Matches MIT's printed answer.
- pp-b: page choice 0 (not exact, cross derivatives differ by 1) = mine. Matches MIT's sheet.
- pp-c: page y + (1 + y - x)e^x - 1 = mine. MIT's printed form with C = -1 for S(0,0) = 0.
- p6-f: page aH = mine. MIT p. 6.
- p6-m: page M0 sqrt(1 - T/Tc) + aH/(1 - T/Tc) + bH^3 = mine. MIT p. 6.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Choice boxes p3-name, p4-least, pp-b | (MIT has no choice boxes) | All three have the right answer first, `answer={0}`; the component does not shuffle, so a reader learns that the first choice is always right | Move the correct choice to different positions, e.g. p3-name to position 2 (`answer={2}`), p4-least to position 1 (`answer={1}`), pp-b to position 3 (`answer={3}`), reordering each `choices` array to match |
| 2 | warning | Problem 4(c), third `mistakes` hint of `p4-c` | MIT p. 4: integral of P dP = (1/2)(P2^2 - P1^2) = (1/2)(P1 + P2)(P2 - P1) | "The integral of P dP gives P₂² − P₁² = (P₂ + P₁)(P₂ − P₁)" (drops the 1/2, so the sentence is false as written) | Replace with: "The integral of P dP gives half of P₂² − P₁², that is ½(P₂ + P₁)(P₂ − P₁). Dividing by P₂ − P₁ leaves half the sum, not half the difference." |
| 3 | info | Problem 4 statement, "both constants" | Sheet does not say that K_T and alpha are constant; MIT's solutions integrate them as constants | States them as constants without marking it | Optional; it is what MIT's solution assumes |
| 4 | info | Problem 2(b) check step | MIT: 1.6 x 10^-10 | "sharp to about one part in ten thousand million" (1.57e-10 is about one part in 6.4 x 10^9) | Optional: "to about one part in six thousand million" |

## Arithmetic and answer checks
- Every number on the page recomputed: 2a/3, 4a^2/3, 8a^2/9, 24a, 32a^2, peak 1/(8 sqrt(pi)) = 0.0705, sd sqrt(32) = 5.66, 24/sqrt(32) = 4.24; 3/2, 15/4, 3/2, sqrt(2/3) = 0.816; N = 2.69e19, 1.574e-10; P/kT at 101325 Pa and 273.15 K = 2.687e25 per cubic metre; path difference alpha V1 (P2-P1)(T2-T1); path c = mean of a and b; Problem 5 example 7/24 = 0.292, ratio 3.43, pressure factor 2^4 = 16, V2/V1 = 1/8 gives T2 = 2T1. All correct.
- Calcs file: `pytest tests/calc -k 8-044-problem-set-3` run in the worktree: 66 passed. Every `<Answer>` with an expr or value has a calcs entry tied by `answer:`.
- `content:check` run in the worktree: 0 errors; the only warning for this page is the missing review file.
- `vars` ranges: all formulas finite and physical (p3-mb has T in [3,5] > Theta in [0.5,2]; p6-m has T/Tc <= 0.9; p5 has V1 > V2). Every listed mistake differs from the answer at the sample points (checked numerically for p1-density, p4-c, p5-b).
- Mistake hints: each is true of its formula (p1 48a^2 = 36 x 4/3, 1152a^2 = 36^2 x 8/9, 36a; p4 sign and missing 1/2; p5 missing 1/3 and (V2/V1)^(1/3); pp-a 10x^4; pp-c product rule; p6 a/Tc, bH^3, 3bH^2, power 2), apart from the wording slip in #2.
- Number tolerances: 0.816 at 1% accepts MIT's 0.82 and 3-figure answers; 1.57e-10 at 2% accepts MIT's 1.6e-10.
- Choice boxes: each marked answer is correct; distractors are wrong (p3-name option 4 describes salt B, but the box asks about salt A, so only option 0 is right).
- No hint gives a result away; the third hint of 6(b) gives both temperature integrals, close to the answer but it still leaves the g(H) step and the constant.

## Coverage and order
- Problems 1 to 6 and the practice problem appear in MIT's order (practice problem between 5 and 6, as on the sheet). All parts covered: 2(a), 2(b), 3(a), 3(b), 4 three paths, 5 two paths, practice (a)-(c), 6(a), 6(b).
- Additions are all marked on the page: mean and variance boxes in Problem 1, the recognition choice in 3(b), the least-work choice in 4(c), the numerical example in Problem 5. The density of E1 shown in 2(a) is the Set 2 result MIT's sheet tells the student to use (cited to MIT's solutions p. 2, where it appears).
- Citations: every `at=` page checked against the printed footers. Sheet: Problem 1 p. 1; Problems 3 and 4 p. 2; Problem 5 and the practice problem p. 3; Problem 6 p. 4. Solutions: Problem 1 p. 1; Problem 2 p. 2; Problem 3 p. 3; Problem 4 path a and dW p. 3, paths b and c and the least-work remark p. 4; Problem 5 p. 5; Problem 6 p. 6. All correct.
- Points add up (12 + 10 + 12 + 18 + 14 + 6 optional + 14); MIT gives none, and the page says so.

## Licensing
- Neither PDF carries "All rights reserved" or "Courtesy of" notices (grep of both texts). MIT's sketches are replaced by graphs computed from formulas (Problems 1, 4, 5, 6) or by words; no MIT figure reproduced.
- Wording is the page's own. The only phrase taken from MIT is the attributed "paramagnet with an ordering phase transition to a ferromagnet" (short, marked as MIT's words). No OpenStax or LibreTexts material.

## Notes
- Claims about lessons checked: thermodynamic-variables has as its third example of an equation of state M = cH/(T - T0), "a simple paramagnet" (so "the lesson's own third example" is right), the "any monotonic function" remark, the exact-differential test and the integration recipe; first-law writes δW and defines alpha, kappa_T, chi_T. Links follow the style of Sets 1 and 2.
- Symbols: all page-scoped meanings in the worktree's data/symbols.json read; each fits its use on this page (a, C, d, M, sigma, u, x carry per-problem meanings). Units given where one unit applies.
- No `## Summary`, no em dashes (count 0).
- info: `p6-f` lists `b` and `Tc` in `vars` though `aH` uses neither; harmless (it lets a reader's wrong `a*H/Tc` be evaluated).
- info: the worktree is based on 6f3b254, before the commits of 8.044 Sets 1 and 2; merge `data/symbols.json` by meaning when this branch goes onto main.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-26, by the page author)

- Warning 1 (the right choice always first): fixed. `p3-name` now has it third (`answer={2}`), `p4-least` second (`answer={1}`), `pp-b` fourth (`answer={3}`).
- Warning 2 (a `p4-c` mistake hint dropped a factor ½): fixed as suggested: "The integral of P dP gives half of P₂² − P₁², that is ½(P₂ + P₁)(P₂ − P₁). Dividing by P₂ − P₁ leaves half the sum, not half the difference."
- Also: Set 2 is now on the site, so Problem 2's mention of "Problem 4 of Problem Set 2" is a link.
- Info notes: no change.

Status set to reviewed.
