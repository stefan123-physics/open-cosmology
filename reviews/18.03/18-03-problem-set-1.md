---
page: content/year-2/18.03/18-03-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps1pdf/ (read: local PDF, text and rendered page 3)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps1spdf/ (read: local PDF, text and rendered page 2; opened only after the blind solve)
  - calcs/18.03/18-03-problem-set-1.yaml (read after the blind solve)
  - Notes and Exercises 1ex/1sol, Mathlets page (not read; only linked from the page)
verdict: needs-changes
---

# Review: Problem Set 1 (18.03): a virus-slowed herd, the isoclines of y' = y^2 - x, Euler's method on y' = 2x and a trust fund

## Blind solve

### My answers (written before opening the page, its calcs file or MIT's solutions)
- p0a: a in years; k0 in years (k(t) is 1/year, so k0 = k*(a+t)^2 has units yr^2/yr = yr).
- p0b: x' = k0 x/(a+t)^2.
- p0c: x = C exp(-k0/(a+t)), C any real (C = 0 is the lost solution x = 0; C < 0 from |x|); valid on t > -a and on t < -a separately (C may differ on the two intervals).
- p0d: stabilises; C = x0 e^{k0/a}, limit x -> x0 e^{k0/a}.
- p1a: isoclines x = y^2 - m, parabolas opening right with vertex (-m, 0).
- p1b: separatrix y(0) ~ 0.72901 (scipy bisection, rtol 1e-12); it approaches the upper half of the nullcline y = +sqrt(x) from above (y - sqrt x ~ 1/(4x); numeric 0.026 at x = 8 vs 0.031).
- p1c: isocline slope 1/(2y) = -1 -> b = -1/2, a = b^2 + 1 = 5/4: (1.25, -0.5).
- p1d: f(x) = -sqrt(x); y(x) above f for large x, independent of y(a) (y = -sqrt x + 1/(4x) + ...; numeric: y + sqrt x at x = 100 is 0.0025016 for y(1.25) = -0.6 and -3).
- p1e: c = d^2.
- p1f: y'' = 2yy' - 1 = -1 at a critical point, so every critical point is a strict local maximum: true.
- p2a: y(1) = 1.
- p2b: y_2 = 0.5.
- p2c: y_3 = 2/3 = 0.6667.
- p2d: y_n = (n-1)/n = 1 - 1/n; converges to 1.
- p2e: error 1/n = h, exactly proportional to h; agrees.
- p3a: x' = I x - q.
- p3b: x = q/I + (x0 - q/I) e^{It}.
- p3c: x0 = q/I = 240000 dollars.
- p3d: x0 = (q/I)(1 - e^{-20 I}) = 240000(1 - e^{-1}) = 151708.93 dollars.

### Comparison (page vs mine vs MIT), one line per answer id
- p0-a: same (years, years). MIT same.
- p0-b: same. MIT same.
- p0-c: same. MIT same.
- p0-d: same. MIT same.
- p1-b: same (y = sqrt x). MIT same.
- p1-c-a / p1-c-b: same (1.25, -0.5). MIT same.
- p1-d-f: same (-sqrt x). MIT same (MIT also allows -sqrt(x+m), misreported on the page: see #1).
- p1-d-side: same (above, whatever y(a)). MIT same.
- p1-e: same (d^2). MIT same.
- p1-f: same (-1; all maxima). MIT same.
- p2-a: same (1). p2-b: same (0.5). p2-c: same (0.6667). p2-d: same ((n-1)/n). p2-e: same (1/n). MIT same.
- p3-a, p3-b: same. MIT same (MIT's general-C form is the same family).
- p3-c: same (240000). MIT same.
- p3-d: same (151708.93). MIT same.
No disagreement on any final answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 1(d): statement (line 448) and solution step "Squeeze" (line 502) | MIT solutions p. 2: "f(x) = -sqrt(x), or indeed f(x) = -sqrt(x + m) for any m" (m under the root, a sideways shift; verified on the rendered page, pdftotext drops the root bar). For m < 0 some solutions have y(x) < -sqrt(x + m) for some x > a. | Statement: "MIT also accepts the same function with a constant added". Solution: MIT writes "-sqrt x + m for any m: any constant can be added, and it adds to the squeeze nothing but a constant shift". Wrong maths too: y - (-sqrt x + m) -> -m, so -sqrt x + m (m != 0) is not asymptotic to y. | Statement: "(MIT also accepts -sqrt(x + m) for any constant m, the same curve shifted sideways, which differs from -sqrt x by an amount that goes to 0; a single form is easier for a box to check.)" Solution: "[MIT writes f(x) = -sqrt(x + m) for any m: since sqrt(x + m) - sqrt x -> 0, all of these are asymptotic to the same solutions. MIT then notes that for m < 0 some solutions lie below -sqrt(x + m) for some x > a, so the comparison would depend on m. With the plain -sqrt x the answer is always 'above'.]" |
| 2 | error | Problem 1(b), solution step "What you see" (line 370) | MIT solutions pp. 1-2: solutions below the separatrix each have one local maximum (on the nullcline) and become asymptotic to -sqrt x; nothing says the maximum is on the lower half. | "Those that start low rise a little, reach a maximum on the lower half of the parabola x = y^2, and then fall along it." For starts on x = 0 with 0 < y(0) < 0.729 the maximum is on the upper half: scipy event y' = 0 gives y(0) = 0.3 -> max at (0.0925, 0.3042); 0.5 -> (0.2894, 0.5379); 0.7 -> (0.9839, 0.9919). Only y(0) < 0 puts it on the lower half (y(0) = -1 -> (0.5805, -0.7619)). | "Those that start lower rise, reach a maximum where they meet the parabola x = y^2 (on its upper half if they start between y = 0 and the separatrix, on its lower half if they start below y = 0), and then fall and follow its lower half, y = -sqrt x." |
| 3 | error | Problem 2(d): formulas "Euler's approximation with n steps" (line 753) and "The approximation of y(1)" (line 759) | Sheet p. 3: the n-step approximation and the convergence question belong to Problem 2(a); 2(b) is only the exact error. | `at="Part II, Problem 2(b) (our own solution)"` | Change both to `at="Part II, Problem 2(a) (our own solution)"`; also the calcs entries p2-d, p2-d-sum-4, p2-d-sum-5, p2-d-limit, p2-d-n2, p2-d-n3. Keep 2(b) for the error (line 800, p2-e entries). |
| 4 | warning | Problem 2: formulas "One Euler step" (line 607), "Euler with two steps" (line 673), "Euler with three steps" (line 707); calcs p2-b, p2-c | Sheet p. 3 only asks the questions; the step rule y_{k+1} = y_k + 2 x_k h and the n = 2, 3 tables are in MIT's solutions (pp. 2-3). | All cited `cite="mit" at="Part II, Problem 2, p. 3"` (the sheet, which does not contain them). | "One Euler step": `cite="mitSolutions" at="Problem 2, p. 2"`. Two and three steps: `at="Part II, Problem 2(a) (our own solution)"`, like the other solution formulas; same in calcs p2-b, p2-c. |
| 5 | warning | Problem 1(d), hints (lines 455 and 461) | - | Hint 1 says the solution ends up "above the nullcline" (gives away the second box); hint 2 names y = -sqrt x and says a solution squeezed between it and -sqrt(x - 1) "has no choice" (gives away the first box). | Hint 1: "Use part (c): can the solution cross the isocline m = -1 for x > a? Where must it be, compared with the nullcline, once x is large?" Hint 2: "Write the lower branches of the isocline m = -1 and of the nullcline as functions of x. What happens to the distance between them as x grows?" |
| 6 | warning | Problem 1(e), check step (line 550) | - | "(1, -1) ... is a point of the left branch of the parabola for m = 0". The parabola x = y^2 opens to the right; its branches are upper and lower, and (1, -1) is on the lower one. | "...a point of the lower branch of the parabola for m = 0, y = -sqrt x, where the line element is horizontal." |
| 7 | info | Problem 1(d), observations | Sheet (ii) speaks of the "m = 1 isocline", (iii) of crossing the nullcline; MIT's solution says it will not follow (ii) and (iii) "as explained on the website" and proves two nullcline statements instead. | Two observations, the second being MIT's solution's two nullcline statements, said in brackets. The added argument (an increasing function cannot stay below -sqrt x -> -infinity) is correct and is MIT's "Finally I claim" argument in other words. | None (writer's flag is fine). |
| 8 | info | Problem 1(a) | Sheet list m = -1, 0, 1, 2; mathlet instructions m = -2, 0, 1, 2. | Uses the list and says so. | None. |
| 9 | info | Problem 0(c), solution | x = C e^{-k0/(a+t)}, C = 0 allowed. | Adds that C may differ on t < -a and t > -a. Correct. | None. |
| 10 | info | Problem 3(c), answer box | 240 000 dollars exactly. | `tolerance="0.5%"` accepts 238 800 to 241 200 (calcs uses 1). | Optional: `tolerance="1"` so that a slip such as 241 000 is not accepted. |

## Arithmetic and answer checks
- p0-a choice 0 (a in years, k0 in years): correct; distractors wrong.
- p0-b k0*x/(a+t)^2: equals mine. Mistakes (first power, rate alone, multiplying): each hint true of its formula.
- p0-c C*exp(-k0/(a+t)): equals mine and MIT's. Mistake hints: d/dt of C e^{k0/(a+t)} gives -k0 x/(a+t)^2 (true); exponent -k0/(a+t)^2 differentiates to 2k0/(a+t)^3 = k(t)*2/(a+t) (true); C - k0/(a+t) is ln|x| up to a constant (true). vars finite (a + t >= 0.7).
- p0-d x0*exp(k0/a): equals mine and MIT's. Mistake hints true.
- p1-b choice 0 (y = sqrt x): equals mine and MIT's. Separatrix y(0) ~ 0.73: my bisection 0.729011, calcs fact (backward integration from x = 200) 0.7290: agree. y - sqrt x ~ 1/(4x) from above confirmed numerically (0.0263 vs 0.0313 at x = 8, converging).
- p1-c-a 1.25, p1-c-b -0.5: equal mine and MIT's. Absolute tolerances 0.01, 0.005 (lib/answers.ts) fine.
- p1-d-f -sqrt(x): equals mine and MIT's primary answer. Mistake hints true.
- p1-d-side choice 0: equals mine and MIT's. y + sqrt x at x = 100 = 0.0025016 for y(5/4) = -0.6, -1, -2, -4, -8 (my scipy Radau, rtol 1e-12): the page's "0.0025 in every case" confirmed.
- p1-e d^2: equals mine and MIT's. Mistakes d and sqrt(d) differ from d^2 on [0.5, 2.5] except at single points; hints true.
- p1-f choice 0 (y'' = -1): equals mine and MIT's.
- p2-a 1, p2-b 0.5, p2-c 0.6667, p2-d (n-1)/n, p2-e 1/n: equal mine and MIT's. (n+1)/n is the right-end sum 2h^2 n(n+1)/2 (true); (n-1)/(2n) loses the 2 (true).
- p3-a I*x - q and p3-b q/I + (x0 - q/I) e^{It}: equal mine and MIT's. All three p3-b mistake hints checked by differentiation: true.
- p3-c 240000, p3-d 151708.93: 240000(1 - e^{-1}) = 151708.9341 (Python); MIT $151,708.93. p3-d tolerance 0.02 dollars absolute: fine.
- Every one of the 18 solutions ends with a check step (units, a limit or a number).
- Points: P0 15, P1 18, P2 2+5+5+5+3 = 20, P3 20: MIT's values; Part I 9+6+4+4 = 23 as stated. The 5 + 3 split of MIT's 8 is stated as the page's own: acceptable.
- 1 - e^{-1} = 0.63212056, "about 63 per cent", 20 x 12 000 = 240 000: correct.

## Coverage and order
- All of MIT Part II, Problems 0-3, in MIT's order; MIT 2(a) becomes page parts (a)-(d) and MIT 2(b) page 2(e), in order.
- Added boxes (separatrix asymptote, side of f, x0 form in 3(b)) are marked or explained.
- Part I listed by day with links (1A-5c, 1C-1abe, 1C-4); textbook exercises left out on purpose and said so; matches the sheet.
- "MIT's lecture numbers are the same as this site's": sheet L1-L3 = site lectures 1-3 (_course.json): correct.

## Licensing
- No MIT figure reused or redrawn (MIT's isocline picture is not reproduced; the page's plot is generated from x = y^2 - m).
- No "All rights reserved" or "Courtesy of" notices in sheet or solutions.
- Wording is the page's own; the closest phrases ("teach his nephew self-reliance", "run out of money in exactly twenty years") are short paraphrases of MIT's scenario. "exactly h" is a two-word quote. No OpenStax or LibreTexts material.

## Notes
- No em dashes; no `## Summary` with answers.
- Writer's flags: points split, 1(d) restatement (see #7), slope list, added boxes, y(0) ~ 0.73 and 0.0025 (both confirmed numerically), C exp(-k0/(a+t)) and x0 forms, the -sqrt x box (fine as a box, but MIT's alternative is misdescribed, #1), continuous payments (MIT also treats q = 12 000 per year as continuous), "dollars"/"per cent", the 1(b) hints (acceptable): all fine apart from #1.
- Symbols and glossary not checked here (content:check covers them).

COUNTS: errors=3 warnings=3 info=4

## Resolution (2026-11-21, by the page author)

- #1 (error, 1(d) MIT's alternative): the statement and the bracket in the "Squeeze" step now say MIT accepts -sqrt(x + m), the curve shifted sideways, with the reason (sqrt(x + m) - sqrt(x) goes to 0) and MIT's remark for m < 0.
- #2 (error, 1(b) maxima): the text now says the maximum is on the upper half of x = y^2 for starts between y = 0 and the separatrix, on the lower half for starts below y = 0, and that the solution then falls along y = -sqrt(x).
- #3 (error, 2(d) citations): "Euler's approximation with n steps" and "The approximation of y(1)" now cite Problem 2(a) (our own solution); the calcs entries p2-d, p2-d-sum-4, p2-d-sum-5, p2-d-limit, p2-d-n2 and p2-d-n3 likewise. The error formula and the p2-e entries keep 2(b).
- #4 (warning, Euler step citations): "One Euler step" now cites MIT's solutions (`mitSolutions`, Problem 2, p. 2); the two-step and three-step formulas, and calcs p2-b and p2-c, cite 2(a) as our own solution.
- #5 (warning, 1(d) hints): both hints rewritten as the review suggests, so neither gives away a box.
- #6 (warning, 1(e) check): "left branch" changed to "lower branch ... y = -sqrt(x)".
- #10 (info, 3(c) tolerance): set to an absolute 1 dollar; no listed mistake is affected.
- #7, #8, #9: no change needed.

Status set to `reviewed`.
