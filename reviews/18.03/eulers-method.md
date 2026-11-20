---
page: content/year-2/18.03/eulers-method.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-2-eulers-numerical-method-for-y-f-x-y/ (read: local copy lec.html; its transcript link is d58c252755364e4d66f6b55d01847261_LbKKzMag5Rc.pdf, matching reading1)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/d58c252755364e4d66f6b55d01847261_LbKKzMag5Rc.pdf (read: local copy transcript.pdf, 19 PDF pages, no printed page numbers, page-split text tp.txt; "MITOCW | 18-03_L2")
  - content/year-2/18.03/_course.json (read: Lecture 3 = "Solving First-order Linear ODEs")
  - calcs/18.03/eulers-method.yaml (read; `npm run calc:test -- -k eulers-method`: 9 passed)
verdict: pass-with-notes
---

# Review: Euler's method and better numerical methods

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers; page breaks taken from the form feeds in tp.txt, 19 pages, agreeing with `pdfinfo`). No "rights reserved" or "courtesy" notice in the transcript or the OCW lecture page. The lecture has no slides; every equation was written on the board, so citing the transcript is the only option and is correct.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Better methods", last sentence of the RK4 paragraph | Transcript p. 17: halving the RK4 step divides the error by 16 with four slope evaluations; "suppose, instead, you halve four times" (Euler), which also gives 1/16 and, he says, increases the evaluations "by four"; "so, in some sense, it really doesn't matter whether you use a very fancy method ... nothing is free." This comparison is a lecturer slip: halving Euler's step four times multiplies the number of steps (and evaluations) by 16, not 4, and Euler would need about 16 times as many steps to gain a factor 16 in error. In practice RK4 is far cheaper for a given accuracy, which is why it is the standard method (p. 17). | "Higher order is not free: a method with more evaluations per step does more work for its accuracy (p. 17)." | The sentence echoes the slip and can be read as "higher order does not pay". Suggest: "Each RK4 step costs four evaluations of $f$, but for a given accuracy it needs far fewer steps than Euler, which is why it is the standard method (p. 17). (In the lecture the comparison with halving Euler's step four times is slightly off: that multiplies Euler's work by 16, not 4.)" Per writing rule 4. |
| 2 | info | Same paragraph | p. 17: "the numerical method which draws all those curves that you believe in on the computer screen is the RK4 method", referring to the course's computer visuals (Mathlets) and "the programs" students will use. | "it is what draws the solution curves in most computer programs" | Slight generalisation; many general-purpose solvers use adaptive embedded Runge–Kutta pairs (e.g. RK45) rather than fixed-step RK4. Suggest "it is what draws the solution curves in the course's computer visuals" or "a standard choice in such programs". |
| 3 | info | "A pitfall", `(transcript, p. 18)` | p. 18: "Pitfalls, number one ... you'll find" (left to the homework); "number two" is the blow-up example. The equation itself was on the board ("illustrated by the following equation. What could be simpler?"); only its solutions 1/(c − x) are spoken. | Presents one pitfall; states the equation as y′ = y². | y′ = y² is the right equation (it is the one whose separated solutions are 1/(c − x); verified). Optionally mention that a first pitfall was left to the problem set. Also optional: separation of variables misses the solution y = 0, which has no singularity. |
| 4 | info | "Euler's method", example | p. 4: "this equation, as far as I know, cannot be solved in terms of elementary functions." | "which cannot be solved with elementary functions" | Correct as stated (it is a Riccati equation whose solutions need Bessel functions); the hedge is not needed. No change. |
| 5 | info | "Better methods" | p. 14: these methods were found "around the turn of the last century ... mostly by some German mathematicians"; p. 17: Runge and Kutta "both German mathematicians". | Not mentioned. | Optional historical aside (Runge 1895, Heun 1900, Kutta 1901). |

Every formula and every prose page reference was checked against its cited location:
- Opening: most equations are solved numerically; the computer computes and plots points: p. 1. Correct. "Basic method of which others are refinements": p. 1. Correct.
- Formula "Initial value problem", `p. 1`: y′ = f(x, y), y(x₀) = y₀, "IVP": p. 1. Correct.
- Start along the line element, step h, recompute, repeat; broken-line approximation: pp. 1–2. Correct. Euler used it to prove existence, not to compute: p. 1. Correct.
- Slope Aₙ = f(xₙ, yₙ), triangle with run h and rise hAₙ: pp. 2–3. Correct.
- Formula "Euler's method", `pp. 3–4`: the three equations are stated at the end of p. 3 and named "these three equations which define Euler's method" on p. 4. Correct.
- Example y′ = x² − y², y(0) = 1, h = 0.1: p. 4; table with columns n, xₙ, yₙ, Aₙ, hAₙ: p. 5; row 0 on p. 5, rows 1–2 and the answer 0.82 on p. 6. "(pp. 4–6)", "(p. 5)", "(pp. 5–6)" all correct.
- Straight line would be exact; convex → too low, losing ground; concave → too high: pp. 7–8. Correct. The lecturer's slip on p. 8 ("Euler is going to be too high, sorry, too low") is not repeated. Good.
- Convex ⇔ y″ > 0, find y″ from the equation: pp. 8–9. Correct.
- Formula "Second derivative from the equation", `p. 9`: y″ = 2x − 2yy′ and y″(0) = 2·0 − 2·1·(−1) = 2: p. 9. Correct.
- Convex, so 0.82 too low: pp. 9–10 (statement on p. 9, "convex Euler, too low" on p. 10). Correct. No prediction if convexity changes: p. 10. Correct.
- Error e defined: p. 10 (and again p. 12). Smaller steps follow better, bigger worse: p. 11. "(pp. 10–11)" correct.
- Formula "Euler is first order", `p. 12`: e ≈ c·h, "first-order method", not the order of the equation, "halve the step size, halve the error": p. 12. Correct.
- Keep halving until the curve stops changing; more efficient methods exist: p. 13. Correct.
- Aₙ systematically wrong if convex/concave; aim for a better slope: pp. 13–14. Correct.
- Formula "Heun's method", `pp. 14–15`: Bₙ drawn on p. 14, average of Aₙ and Bₙ, temporary value "y n plus one twiddle", Bₙ = slope at (xₙ₊₁, ỹₙ₊₁): p. 15. Correct, and the tilde notation matches the lecture.
- Names Heun, improved Euler, modified Euler, RK2; second order, e ≈ ch², halving quarters the error: p. 16. Correct.
- Cost = function evaluations; Euler once, Heun twice: p. 16. Correct.
- RK4: four slopes, error ∝ h⁴, weighted average divided by 6 (sum of the weights), the standard method: pp. 17–18. Correct (see rows 1–2).
- Pitfall: 1/(c − x) by separation: p. 18; y(0) = 1, asked for y(2), the computer follows the branch to infinity: p. 19; each solution has its own singularity, not predictable from the equation: p. 19. "(pp. 18–19)", "(p. 19)" correct.

## Arithmetic and answer checks
- Table: A₀ = 0² − 1² = −1, hA₀ = −0.1, y₁ = 0.9, x₁ = 0.1; A₁ = 0.01 − 0.81 = −0.80, hA₁ = −0.08; x₂ = 0.2, y₂ = 0.82. All correct and equal to the lecture's values (pp. 5–6).
- y″(0) = 2·0 − 2·1·(−1) = 2. Correct.
- Plot, Euler line: slope y₀ = 1 on [0, 0.5] → y(0.5) = 1.5; slope 1.5 on [0.5, 1] → y(1) = 2.25. Expression `x <= 0.5 ? 1 + x : 1.5 + 1.5*(x - 0.5)` matches.
- Plot, Heun line: first slope (1 + 1.5)/2 = 1.25 → y(0.5) = 1.625; second slope 1.625·1.25 = 2.03125 → y(1) = 1.625 + 1.015625 = 2.640625. Expression `x <= 0.5 ? 1 + 1.25*x : 1.625 + 1.625*1.25*(x - 0.5)` matches. Both lines are continuous at x = 0.5.
- Caption: slopes 1 and 1.5 (Euler), Heun 2.64 against e ≈ 2.72, eˣ convex. All correct. The y-range [0.9, 2.8] contains all three curves (minimum 1, maximum e = 2.718).
- Worked example (a): 1.5² = 2.25, error e − 2.25 = 0.468 ≈ 0.47; 1.25⁴ = 2.44141 ≈ 2.441, error 0.277 ≈ 0.28; ratio 0.468/0.277 = 1.69 ≈ 1.7; ratio → 2 as h → 0 for a first-order method. Both below e (convex). All correct.
- Worked example (b): Aₙ = yₙ, ỹ = yₙ(1 + h), Bₙ = ỹ, average yₙ(1 + h/2), so factor 1 + h + h²/2 = 1 + 0.5 + 0.125 = 1.625; 1.625² = 2.640625 ≈ 2.641, error 0.0777 ≈ 0.08. "Better than Euler with twice as many steps": Euler h = 0.25 is 4 steps (4 evaluations), Heun h = 0.5 is 2 steps (also 4 evaluations), error 0.08 < 0.28. Correct; optionally say "with the same number of evaluations of f", which is the fairer comparison the lecture's p. 16 argument invites.
- y = 1/(c − x): y′ = 1/(c − x)² = y². With c = 1: y(0) = 1, blows up at x = 1. Correct.
- Quiz 1 (index 1, yₙ + h f(xₙ, yₙ)): correct; explanation right. Quiz 2 (index 1, too low): correct; explanation right. Quiz 3 (index 1, "4"): e ∝ h², halving h gives 1/4. Correct.
- Flashcards: all three correct and consistent with the page.
- calcs/18.03/eulers-method.yaml: 9 entries, all pass, values agree with the page. Info: no separate entries for A₀/hA₀, for the Plot's second Heun slope (2.03125) or for the caption's "2.64" (covered in substance by `heun-result`, 2.641). Optional.

## Coverage and order
- MIT order: motivation and IVP (p. 1) → Euler's idea, broken line (pp. 1–2) → derivation and the three equations (pp. 2–4) → example y′ = x² − y² with a table (pp. 4–6) → too high or too low, convex/concave, y″ from the equation (pp. 6–10) → error and step size, first order, halving (pp. 10–13) → better slope: Heun/RK2, second order, cost in evaluations (pp. 13–16) → RK4 (pp. 17–18) → pitfalls: number one left to the homework, number two blow-up of y′ = y² (pp. 18–19). The page follows this order exactly.
- RK4: the lecture deliberately gives no formula ("I won't bother telling you what you do", p. 17), only four slopes and a weighted average divided by 6; the page says the same and no more. Correct.
- Convex/concave argument: complete, including the caveat when convexity changes (p. 10). The lecture's remark on sign conventions for the error (p. 10: true minus Euler, or absolute value) is reduced to "the difference between the true value and Euler's"; fine.
- Left out (minor): the homework pitfall, the historical remarks (row 5), the "feed a cold, starve a fever" grammatical digression (pp. 12–13; irrelevant), the recommendation to use the Euler computer visual (p. 12).
- Added: the Plot and the worked example on y′ = y (original), and the bracket on "first order" (which is in the lecture, p. 12).
- leadsTo 18.03 Lecture 3 "Linear first-order equations, which can be solved exactly with an integrating factor": correct; _course.json lists Lecture 3 as "Solving First-order Linear ODEs", and the lecture opens by saying linear equations are postponed to next time (p. 1). No cosmology callout; acceptable (no `leadsTo` into 8.286 is claimed). Optional: a note that the Friedmann equation for a(t) with matter, radiation and vacuum energy is normally integrated numerically in this way.

## Licensing
- The transcript and lecture page carry the OCW CC BY-NC-SA licence; no "rights reserved" or "courtesy" notices.
- No verbatim copying found: the prose is rewritten. Short shared phrases ("broken line approximation", "initial value problem", "first-order method", "halve the step size, halve the error" paraphrased as "halve the step and you halve the error") are standard terminology.
- The table example is MIT's own (y′ = x² − y², h = 0.1) presented as the lecture's example, which is appropriate; the boxed worked example (y′ = y, h = 0.5 and 0.25) is original.
- No OpenStax or LibreTexts material. Plot is generated from formulas.

## Notes
- No em dashes on the page (checked); "Runge–Kutta" uses an en dash, which is allowed.
- The prerequisite `direction-fields` and the inline link `/courses/18-03/direction-fields` point to the Lecture 1 page in the same working tree.
- Verdict pass-with-notes: no physics, number, citation or licence errors. Row 1 is a warning because the page's sentence carries over a lecturer slip in the cost comparison; fixing it is recommended before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Warning: the cost remark is now attributed to Mattuck, with a bracket correcting his comparison (four halvings multiply Euler's work by 16, so RK4 is far cheaper for the same accuracy).
- Info 2: RK4 now draws the curves in "the course's computer visuals".
- Info 3: added that separation of variables misses y = 0 and that pitfall number one was left to the problem set.
- Info 4: no change.
