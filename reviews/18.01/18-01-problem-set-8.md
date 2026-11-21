---
page: content/year-1/18.01/18-01-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps8a/ (read: PDF text and page renders 1801-ps8a)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps8b/ (read: PDF text and page renders 1801-ps8b)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec31/ (read, lec31.pdf, every page)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec32/ (read, lec32.pdf, every page)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec34/ (read, lec34.pdf, every page)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec35/ (read, lec35.pdf, every page)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec22/ (read, lec22.pdf, every page)
  - E/S exercise and solution PDFs (references exercisesE, solutionsS): not read; the page only links to them and lists exercise numbers, which were checked against MIT's sheets
verdict: needs-changes
---

# Review: Problem Set 8: curves, the catenary, polar areas, a factorial integral and a soap bubble

Blind review. My answers below were written into this file from the stripped statements and MIT's two sheets alone, before the full page or its calcs file was opened.

## Blind solve

### My answers (written before opening the full page)
- a1(a): p = 2/k, (x/a)^(2/k) + (y/a)^(2/k) = 1. k = 1 quarter circle x² + y² = a²; k = 2 segment x + y = a; k = 3 astroid arc x^(2/3) + y^(2/3) = a^(2/3).
- a1(b): k = 1: πa/2; k = 2: √2 a.
- a1(c): ds/dt = a k sin t cos t √(cos^(2k−4) t + sin^(2k−4) t) (k > 0); L = ∫₀^{π/2} of that. k = 1: πa/2; k = 2: √2 a; k = 3: 3a/2.
- a2(a): shown directly from the exponentials.
- a2(b): x² − y² = 1, only the right branch (x ≥ 1) of the hyperbola.
- a2(c): length sinh x₁.
- a2(d): S = π(x₁ + sinh x₁ cosh x₁) = π(x₁ + sinh(2x₁)/2).
- a3(a): r = a sec θ = a/cos θ, 0 ≤ θ ≤ arctan(h/a); area ah/2.
- a3(b): y = (1 − x²)/2 (parabola, focus at the origin, top at (0, ½)).
- a3(c): 2/3 = 0.667.
- a3(d): C = 1/4 = 0.25; ∫ sec⁴ from −π/4 to π/4 = 8/3; area 2/3.
- b1(a): 0.
- b1(b): converges for n ≥ 0 (for large x, xⁿe⁻ˣ < 1/x², by (a) with m = n + 2).
- b1(c): cₙ = n + 1.
- b1(d): A(0) = 1, A(n) = n!, A(5) = 120.
- b1e: x = u² gives 2∫₀^∞ e^(−u²) du = √π = 1.772.
- b2(a): shown (disks).
- b2(b): 2πrh (checks 0, 2πr², 4πr²).
- b2(c): h/r = 1, a hemisphere, h = r = (3V/(2π))^(1/3).

### Comparison, one line per answer id
- a1-a: page 2/k; mine 2/k. Agree.
- a1-b-1: page πa/2; mine πa/2. Agree.
- a1-b-2: page √2·a; mine √2·a. Agree.
- a1-c-speed: page a k sin t cos t √(cos^(2k−4)t + sin^(2k−4)t); mine identical. Agree. (Numerical arc lengths for k = 1, 2, 3, 2.5 by scipy quad: 1.5708, 1.4142, 1.5000, 1.4426, the last matching the general integral.)
- a1-c-3: page 3a/2; mine 3a/2. Agree.
- a2-b: page choice 1 (right-hand branch of x² − y² = 1); mine the same. Agree.
- a2-c: page sinh(x1); mine sinh x₁. Agree.
- a2-d: page π(x₁ + sinh(2x₁)/2); mine π(x₁ + sinh x₁ cosh x₁), equal by sinh 2x = 2 sinh x cosh x; at x₁ = 1 both 8.83865, and ∫₀¹ 2π cosh² x dx = 8.83865 numerically. Agree.
- a3-a-r: page a/cos(theta); mine a sec θ. Agree.
- a3-a-area: page ah/2; mine ah/2. Agree.
- a3-b: page (1 − x²)/2; mine the same. Agree.
- a3-c: page 0.667; mine 2/3. Agree.
- a3-d: page 0.25; mine 1/4 (polar integral ½∫₀^π dθ/(1 + sin θ)² = 0.666667 and ¼∫ sec⁴ = 0.666667 numerically). Agree.
- b1-a: page 0; mine 0. Agree.
- b1-c: page n + 1; mine n + 1. Agree.
- b1-d-0: page 1; mine 1. Agree.
- b1-d-formula: page choice 0 (n!); mine n!. Agree.
- b1-d-5: page 120; mine 120. Agree.
- b1e-value: page 1.772; mine √π = 1.77245 (quad of e⁻ˣ/√x on (0, ∞): 1.7724539). Agree.
- b2-b: page 2πrh; mine 2πrh. Agree.
- b2-c-ratio: page 1; mine 1 (bounded numerical minimum of S(h) = 2V/h + 2πh²/3 for V = 1: h = 0.78159, r = 0.78159, h/r = 0.999997). Agree.
- b2-c-shape: page choice 2 (exactly half a sphere); mine hemisphere. Agree.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | 13 solution formulas of 8B: lines 819, 887, 895, 946, 1020, 1078, 1084, 1137, 1145, 1198, 1200, 1206, 1210 | These solve problems of the 8B sheet, which is `reading1` | `cite="mit"` with `at="Problem Set 8B, …"`. `mit` is the page's `source.url`, the **8A** sheet, so the citation link points to the wrong document (the calcs file correctly uses `reading1` for the same formulas) | Change `cite="mit"` to `cite="reading1"` in those 13 formulas, and drop "Problem Set 8B, " from their `at` to match the other 8B citations (e.g. `at="Part II, Problem 1(b) (our own solution)"`) |
| 2 | warning | 8A Problem 2(d), statement paragraph ("Of all surfaces that join the two circles at its ends, the catenoid has the least area") | MIT makes this claim | Restated as an unqualified fact. It holds only for circles that are not too far apart. For this piece (radii 1 and cosh x₁), the two flat discs have area π(1 + cosh² x₁), which is less than the catenoid's π(x₁ + sinh x₁ cosh x₁) once x₁ > 1.5237 (my numerical root; e.g. x₁ = 2: discs 47.61, catenoid 49.15). The answer box allows x₁ up to 2. (The stability limit of the catenoid itself is not checked here and is uncertain.) | Add a qualifier, e.g. "MIT's set adds why it is interesting: for circles that are not too far apart, the catenoid has the least area of all surfaces joining them…", or a bracketed note that for wide gaps the film breaks into two flat discs |
| 3 | warning | Lecture numbers of the notes in solution text and `source.readings` titles ("Lecture 34 notes", "Lecture 35 notes") | The OCW note files are headed "Lecture 34: Indeterminate Forms" and "Lecture 35: Improper Integrals" (MIT's own calendar numbers) | The introduction says MIT's Lectures 34 to 37 are Lectures 35 to 38 on this site, but the solutions then cite "(Lecture 34 notes, p. 3)" for L'Hôpital and "(Lecture 35 notes, p. 5)" for improper integrals. A reader may look for this site's Lecture 34. The citations are not wrong (those are the notes' own headings), but this is unclear. | Add one sentence to the lecture-number paragraph: "The lecture notes for L'Hôpital's rule and improper integrals keep MIT's numbers 34 and 35." |

## Arithmetic and answer checks
- Every number on the page was recomputed (scipy/numpy): π/2 = 1.571, √2 = 1.414, cos³(π/4) = 0.354, cosh 1 = 1.5431, sinh 1 = 1.1752, cosh² 1 = 2.3811, sinh² 1 = 1.3811, chord √(1 + 0.5431²) = 1.138, sinh(2)/2 = 1.8134, area 8.839, bounds 7.384 and 11.394, tan⁻¹ 0.75 = 0.6435, triangle 6, parabola at x = 2 gives −1.5 and distance 2.5, 1000e⁻¹⁰ = 0.0454, 27000e⁻³⁰ = 2.53e−9 (page 2.5 × 10⁻⁹), ∫₀⁴⁰ x²e⁻ˣ = 2.000, A(2) = 2, A(3) = 6, A(5) = 120, bounds 2 + e⁻¹ = 2.368 and 2e⁻¹ = 0.736, V = 1: r = 0.782, area 3.838, sphere radius 0.620, area 4.836, ratio 1.2599 (26 percent). All correct.
- Points: 8A Part II items 3 + 7 + 9 + 11 = 30, as the sheet says. Sub-part points 3+1+3, 3+1+3+2, 3+2+2+4, 1+2+2+1 (+5 extra), 4+2+3 all match MIT's sheets. The page's total of 42 (7 + 9 + 11 + 6 + 9) is right.
- **The claimed MIT slip, verified.** On the rendered 8B sheet, the Part II heading reads "(17 points + 5 extra)". The items carry 3 (Problem 0), "6 + 5 pts: 1 + 2 + 2 + 1 + (5 extra)" (Problem 1) and "9pts: 4 + 2 + 3" (Problem 2), which is 18 + 5. The page's reading (a slip in the heading, use the item points) is correct, and it is hedged ("seems to be").
- Lecture mapping, checked against `_course.json`: OCW/site 31 Parametric Equations, 32 Polar Coordinates, 33 Exam 4 Review, 35 Indeterminate Forms, 36 Improper Integrals, 37 Infinite Series, 38 Taylor's Series. MIT's sheet numbers 30, 31, 34–37 therefore map to 31, 32, 35–38, as the page says. "Lecs 34-36" on 8B Problem 1: the problem indeed needs only L'Hôpital and improper integrals.
- `<Answer>` boxes. Every `expr`/`value` equals its solution's result, and every `vars` range keeps the answer finite (`content:check` in the worktree: 0 errors; the only warning for this page is the missing review file). Mistake hints were checked one by one and each is true of its formula (e.g. `2*pi*h^2` is right at h = r and gives 8πr² at h = 2r; `pi*(2*r*h - h^2)` is the base-disc area; `pi*(x1/2 + sinh(2*x1)/4)` is π∫cosh² dx, the disc volume; `cosh(x1) - 1` is ∫ sinh; `6*a` is the full astroid length, checked numerically).
- Tolerances: 0.667 ± 0.001 accepts 0.667, 0.6667 and 0.666 and rejects 0.66. 1.772 ± 0.001 accepts 1.772 and 1.773 and rejects 1.77 (diff 0.0025). Both are suitable for "three decimal places".
- Each solution ends with a check (a known value, a bound, a limit or a numerical integral). Every solution step was followed and is correct, including the extraneous-root remark in 3(b), the AM–GM argument that cosh t ≥ 1, the real-m extension in 1(a) and the end-point analysis in 2(c) (critical h³ = 3V/(2π) inside 0 < h³ ≤ 6V/π).
- Hints do not give away any boxed result. The most direct is b1e hint 3 (it reduces the problem to "half of √π"), but it is the third hint and the convergence proof is still left.
- Citations to lecture notes, checked against the printed page numbers (PDF page minus the OCW cover): Lecture 31 notes p. 2 (band 2πy ds) and pp. 3–4 (unit sphere slice); Lecture 32 notes p. 4 (½r² dθ); Lecture 34 notes p. 3 (∞/∞ and x → ∞ allowed) and pp. 3–4 (Example 8, e^{ax}/x¹⁰); Lecture 35 notes p. 1 (Example 1), p. 3 (Example 3, √π/2), p. 4 (comparison), p. 5 (limit comparison), p. 6 (Example 10 "from PS8", and ∫₀¹ dx/√x = 2); Lecture 22 notes p. 1 (disks). All correct. The problem-statement citations (8A p. 1/p. 2, 8B p. 1/p. 2) are also correct.
- Links and lesson claims checked: the anchors `#parametric-curves`, `#arc-length`, `#surface-area-of-revolution`, `#the-method-of-disks` and `#reduction-formulas` exist. The polar-coordinates lesson has the line x = 2 in its worked example and calls ds/dt the speed. trig-integrals gives ∫sec⁴. average-value-and-probability finds the Gaussian integral by one volume computed two ways. max-min-problems has the open can. improper-integrals has the p-test and ∫e^{−kx}.

## Coverage and order
- Every Part II problem of 8A (1, 2, 3) and 8B (1(a)–(d), 1(e) as an optional exercise, 2) is present in MIT's order, with MIT's sub-parts and points. Problem 0 (collaboration) is left out, as the introduction explains.
- Part I exercise lists match MIT's sheets exactly (4E-2, 3, 8; 4F-1d, 4, 5, 8; 4G-2, 5; 4H-1bfg; 4H-2a, 3f; 4I-2, 3; 6A-1befgj, 5, 6c; 6B-1, 2, 7afkm, 8c; 7A-1abc; 7B-1abf; 7B-2acde). The statements that MIT's Lecture 37 lists no exercises (it points to a final-exam handout) and that no Simmons exercises are assigned are both true.
- The page's additions (boxes for intermediate steps, the choice boxes, the labels c-i/c-ii, a > 0, "every real m") are all declared in the page.

## Licensing
- No MIT figures are reproduced. The plots are generated from formulas. No "All rights reserved" or "Courtesy of" notices are in either sheet or in the five note PDFs (grep).
- The wording is our own throughout. The closest paraphrase is the soap-film paragraph of 2(d) ("Dip two circles of wire in soapy water and, with some coaxing, a soap film forms…"), which follows MIT's sentence closely but is attributed ("MIT's set adds") and short (info).
- No OpenStax or LibreTexts material. The E/S PDFs are linked, not copied.
- The page has no em dashes and no `## Summary` with answers.

## Notes
- info: the number boxes a3-d (C) and b1e have no listed mistakes. Likely slips are C = 0.125 (forgetting du = 2 dv) and C = 0.5, and 0.886 (√π/2, forgetting the factor 2) for b1e. Adding them would give useful hints, if number boxes support `mistakes`.
- warning (counted above as part of the findings list; see item 4 below): the a3-b mistake `sqrt(1 - x^2)` can almost never be recognised. With `vars x: [-2, 2]`, about half the sample points have |x| > 1, where it is NaN, and `sameFormula` in `lib/answers.ts` requires every point to be finite. A reader typing it gets a plain "wrong" with no hint (about 97% of the time with 5 points). Fix: narrow `vars` to `x: [-0.9, 0.9]` (the answer and the other mistakes stay distinct there), or drop this mistake.
- info: the slip in MIT's 8B heading is verified (see above).
- info: `content:check` run in the worktree passes (0 errors). The repo was not modified.

### Findings list (for the author)
1. error: 13 8B solution formulas cite `mit` (the 8A sheet). Change them to `reading1`.
2. warning: the catenoid "least area" claim is false for x₁ > 1.524 (two discs are smaller). Qualify it.
3. warning: "Lecture 34/35 notes" next to the intro's mapping 34 → 35 is confusing. Add one sentence explaining the notes' numbering.
4. warning: the a3-b mistake `sqrt(1 - x^2)` is dead with `x: [-2, 2]`. Narrow `vars` to `[-0.9, 0.9]` or drop it.
5. info: number boxes a3-d and b1e could list mistakes (0.125, 0.5; 0.886).
6. info: b1e hint 3 is close to giving the value (acceptable as the last hint).
7. info: the 2(d) soap-film sentence is a close but attributed paraphrase of MIT.
8. info: the MIT 8B points slip is verified.

COUNTS: errors=1 warnings=3 info=4
