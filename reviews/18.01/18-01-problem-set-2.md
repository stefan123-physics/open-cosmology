---
page: content/year-1/18.01/18-01-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps2a/ (read, pdftotext of the PDF)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps2b/ (read, pdftotext of the PDF)
  - MIT 18.01 Problem Set 1 (read, for Part II Problems 1 and 7b, which 2A Problems 1 and 6 build on)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec4/ (read; printed page checked)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec5/ (read; printed page checked)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec6/ (read; printed page checked)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec9/ (read; printed pages checked)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec10/ (read; printed page checked)
verdict: pass-with-notes
---

# Review: Problem Set 2: chain rule, inverse functions, approximations and a golf ball

I wrote the blind solve (at the end of this file) before opening the full page or its calcs file. Every final answer on the page agrees with it.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | 2B Problem 1(b), answer box b1-b1, mistake `2*pi*R^2 - pi*r^2` | (not MIT; a mistake hint) | Hint: "Check the sign of x under the root: the area of a small cap must go to zero with r." | That formula is not a sign-of-x error: a wrong sign gives `-pi*r^2`. It is the linearised band 2πR√(R² − r²) ≈ 2πR²(1 − r²/(2R²)), so the "1 −" in front of the root was dropped. Replace the hint with: "That is about 2πR√(R² − r²), the band between the equator and the plane. The cap is 2πR² minus that, so keep the 1 − in front of the root: the area of a small cap must go to zero with r." |
| 2 | info | 2B Problem 1(d), statement | "With the diameters actually given, it would have been impossible for the number of dimples given to be placed ... Give a (reasonable) estimate for the largest number of dimples that can fit on our golf ball." | "with the sizes the contest gave, that many dimples could not have been placed on the ball without overlapping." | The page reads this as the contest's original sizes, which MIT does not publish, while 100 dimples do fit on the changed ball. That is the only reading consistent with the numbers: 100 discs cover 25% of the ball. The solution's last step says so. A reader may still take "the sizes the contest gave" to mean the 3 cm / 3 mm of part (c). Suggest: "with the contest's original sizes (which MIT changed and does not give)". |
| 3 | info | 2A Problem 1, statement | "Graph the even and odd functions you found in Problem 1, Part II of PS1." | E and O are given only in the first hint. | Fair: hints cost no points, and the two parts follow in two lines from E = (f(x) + f(−x))/2 and O = (f(x) − f(−x))/2. Checked: E = (x²+1)/(x²−1), O = 2x/(1−x²), and their sum is (x−1)/(x+1). Optionally put these two definitions in the statement, so a reader without Set 1 can derive the parts without opening a hint. |
| 4 | info | 2A Problem 1(b) | Problem 1 is one 4-point item (graphs only). | Split 3 + 1, with (b) a multiple-choice symmetry check "of our own". | Declared on the page ("This part is our own addition"). Acceptable. |
| 5 | info | 2A Problem 1, MIT's remark on graphing calculators | MIT allows a graphing calculator for checking, if it is mentioned in Problem 0. | Left out (Problem 0 is left out too). | None needed. |

## Arithmetic and answer checks
- All 58 calcs entries pass (`pytest tests/calc -k 18-01-problem-set-2`: 58 passed). `content:check` (worktree): 0 errors, and no warning names this page.
- **Golf ball.** I recomputed every value independently with π = 3.14, R = 1.5 and r = 0.15:

  | Quantity | Value |
  |---|---|
  | 4πR² | 28.26 |
  | 100πr² | 7.065 |
  | S1 | 35.325 exactly (a rounding tie) |
  | 25πr⁴/R² | 0.017663 |
  | S2 | 35.30734 |
  | √2.2275 | 1.492481 |
  | h | 0.0075188 |
  | One cap | 0.070828 |
  | S3 | 35.30725 |
  | S1 − S3 | 0.01775 (0.050%) |
  | S2 − S3 | 8.9e-5 |
  | Error ratio | 200.2 |

  All of these match the page.
- **Golf-ball number boxes.**
  - Box b1-c4 (35.325 ± 0.006, absolute) accepts 35.32, 35.325 and 35.33: both roundings of the tie, as the solution text says.
  - Boxes b1-c5 and b1-c6 (35.307 ± 0.004) accept 35.31, 35.307, 35.3073 and 35.3072. They reject 35.30, 35.32 and the flat value 35.325.
  - `lib/answers.ts` reads a bare number as an absolute tolerance, so "0.006" and "0.004" work as intended.
  - The "How to answer" sentence ("correct to two decimal places") fits these tolerances.
- **True π (info).** With the true π the exact area is 35.3252, which rounds to 35.33: the same as the flat-disc answer with π = 3.14. The page asks for π = 3.14 throughout, so no change is needed. This could make a good remark.
- **b1 check at r/R = 0.5.** Exact 2π(1 − √0.75) = 0.8418, linear π/4 = 0.7854, quadratic 0.8345. The quadratic error is 0.87%, below 1%. Correct.
- **b1(c) check "next term smaller by a factor of about x/2".** The cubic term x³/16 divided by the quadratic term x²/8 is x/2 = −0.005, a factor of 200. This agrees with the computed error ratio.
- **b1d.**
  - 4R²/r² = 400; π/(2√3) = 0.9069; 4πR²/(2√3 r²) = 362.8 ≈ 363. 100 discs cover 25% of the ball.
  - Using the cap area 0.070828 instead of πr² gives 399 and 361.9.
  - The page's "about 350; anything from 300 to 400 with a sound argument" is reasonable.
  - Uncertain: the exact maximum for this packing problem (a Tammes-type problem) has no closed form. It does lie below the honeycomb estimate, as the page says.
- **b2.** f′(±1/√3) = ∓9/(8√3) = ∓0.6495; f″(0) = −2; f(±1/√3) = 3/4. All correct. The b2 boxes (0.577 and 0.75, at 1%) are fine.
- **Formula answer boxes.**
  - Each `expr` equals the solution's result (checked by value; see Blind solve).
  - Every `vars` range keeps the formula finite and real: x⁴ ≤ 1, so cos(x⁴) > 0, in a2-a; r < R in all b1 boxes; |x| < 1 in a4-a.
  - Every listed mistake differs from the answer by far more than the checker's relative tolerance of 1e-6 on those ranges. The smallest gap is b1-b1 against A2: a relative difference of r²/(4R²) ≥ 0.007.
- **Mistake hints.** I checked them one by one. All are true of their formula except b1-b1 `2*pi*R^2 - pi*r^2` (table row 1). Two are a little loose but still true:
  - a2-a `12*x^3/cos(x^4)^6` squares the tangent's derivative instead of the tangent;
  - b2-a2 `8*x^2/(1+x^2)^3` drops the first product-rule term.
- **Multiple choice a1-b.** Answer index 1 ("E′ odd, O′ even") is correct.
- **Hints.** No hint gives a result away. The first hint of 2A-1 gives E and O, but those are inputs (Set 1's results), not the answer to this problem.
- **Closing checks.** Every solution ends with a check: a special case, a limit, a symmetry or a number. 2A-1(a) ends with the formula check and plots; 2B-2(c) ends with the plot and a description of the matching points.

## Coverage and order
- **Part II.** All of Part II of 2A (Problems 1, 2, 3, 4, 6) and of 2B (Problems 1(a) to (d), 2) is on the page, in MIT's order.
- **Left out, and the page says so.** Problem 0 of each half; 2A Problem 5 (Simmons 8.2/8ac, 10, 11; 8.4/18, 19a); and Part I, which is listed at the end and linked to OCW's Sections E and S without being rewritten. This is what the run decision for 18.01 prescribes.
- **Points.**
  - MIT's 2A Part II: 30 = 2 + 4 + 5 + 3 + 4 + 10 + 2.
  - MIT's 2B Part II: 16 = 2 + 10 + 4, plus 3 extra.
  - Without Problems 0 and 2A-5 this leaves 18 + 14 = 32, as the page says.
  - The splits 2 + 3, 1 + 2, 3 + 1 and 2 + 4 + 4, and the 3 extra-credit points, are MIT's.
  - The 3 + 1 split of 2A-1 and the 1 + 1 + 2 split of 2B-2 are the page's own, and both are declared.
- **Part I list.** Checked against MIT's text. The exercises for Lectures 5, 6, 7, 9 and 10 all match: 1F-3, 5, 8c; 1A-5b; 5A-1abc (sin, cos, sec only); 5A-3fh; 1H-1, 2, 3a, 5b; 1I-1cdefm; 1I-4a; 5A-5abc; 2A-2, 3, 7, 11, 12ade; 2B-1 and 2B-2 parts a, e, h; 2B-4, 6ab, 7ab. "25 points" = 15 + 10 is correct.
- **`covers: [4, 5, 6, 9, 10]`.** Lecture 4 (chain rule, higher derivatives) is what 2A Problems 2 and 3 use, so including it is right. Lecture 7 (logarithmic differentiation, used in 2A Problem 6) has no lesson page on the site. Its content, (ln u)′ = u′/u, is in the Lecture 6 lesson, which is covered. Fine.
- **Third derivative written y⁽³⁾ "as in the lesson".** The chain-rule lesson uses u⁽³⁾ (line 165), so the claim is true.
- **Claims about other lessons.**
  - The implicit-differentiation lesson gives d/dx arcsin x = 1/√(1 − x²).
  - The approximations lesson gives (1 + x)ʳ ≈ 1 + rx + r(r − 1)x²/2.
  - The curve-sketching lesson defines an inflection point through f″.

  All three claims are true.

## Citations
- **MIT set pages.** These are the printed footer numbers; the PDFs have an OCW cover page.
  - 2A Problems 1 and 2(a) are on p. 1; 2(b) to 6 are on p. 2.
  - The 2B formula, 1(a) and the footnote are on p. 1; 1(b) to (d) and Problem 2 are on p. 2.

  Every `at=` matches.
- **Lecture notes.** Printed page = PDF page − 1, confirmed on each PDF.
  - Lecture 4, p. 1: d/dx f(g(x)) = f′(g(x))g′(x) (reading2). Matches.
  - Lecture 5, p. 2: d/dy f⁻¹(y) = 1/(dy/dx) (reading3). Matches.
  - Lecture 6, p. 5: (ln u)′ = u′/u (reading4). Matches.
  - Lecture 9, p. 2: (1 + x)ʳ ≈ 1 + rx; p. 5: the quadratic version (reading5). Matches.
  - Lecture 10, p. 6: the second-derivative test table (reading6). Matches.

## Licensing
- No "All rights reserved" or "Courtesy of" notice appears in any of the source files (grep). No figure is reproduced; all graphs are `<Plot>`s generated from formulas.
- The statements are rewritten in the page's own words. MIT's distinctive phrases ("changed to protect the innocent", "careless examiner") are not copied. No Simmons text is reproduced, and there is no OpenStax or LibreTexts material.
- There is no `Callout kind="cosmology"` or `leadsTo` on this page, so there is nothing to check there.

## Notes
- The plots inside the Solutions (2A-1, 2B-2) are fine. They stay hidden until the solution is opened, so they do not give the sketches away.
- `sec` typed as `1/cos`: the "How to answer" note says so, and the a2-a answer uses it. Equivalent forms, such as `3*tan(x^4)^2*4*x^3*(1+tan(x^4)^2)`, are equal by value.
- The 2B-2 plot draws f′ and f″ both dashed, in one frame. They are labelled, but giving them different dash styles would make them easier to tell apart (info only).
- There are no em dashes and no `## Summary` with answers.

## Blind solve

### My answers
- **a1.**
  - f = (x−1)/(x+1); E = (x²+1)/(x²−1) and O = 2x/(1−x²).
  - E is even, with a local maximum E(0) = −1 and asymptotes at x = ±1. E → 1 from above as |x| → ∞.
  - E′ = −4x/(x²−1)² is odd: positive for x < 0, negative for x > 0.
  - O is odd, with O(0) = 0, and increases on every interval. Its slope is 2 at 0, and O → 0 at ∞ (from below for x > 1).
  - O′ = 2(1+x²)/(1−x²)² > 0 is even, with minimum 2 at 0.
- **a1 (b).** The derivative of the even part is odd; the derivative of the odd part is even.
- **a2 (a).** 12x³ tan²(x⁴) sec²(x⁴).
- **a2 (b).** 2 sin y cos y (cos²y − sin²y) = sin 2y cos 2y = ½ sin 4y, by both routes.
- **a3.** (a) y″ = u″v + 2u′v′ + uv″. (b) y‴ = u‴v + 3u″v′ + 3u′v″ + uv‴.
- **a4.** (a) −1/√(1−x²), because sin y ≥ 0 on [0, π]. (b) arccos x + arcsin x = π/2, a constant.
- **a6.** ln y = Σ ln uᵢ, so y′/y = Σ uᵢ′/uᵢ and y′ = Σ uᵢ′ Π_{j≠i} uⱼ.
- **b1 (a).** h = R − √(R² − r²); A = 2πR(R − √(R² − r²)).
- **b1 (b).** A = 2πR²(1 − √(1 − (r/R)²)), with x = −(r/R)². A1 = πr²; A2 = πr² + πr⁴/(4R²).
- **b1 (c).**
  - S1 = 4πR² + 100πr²; S2 = 4πR² + 100πr² − 25πr⁴/R²; S3 = 4πR² + 200πr² − 200πR(R − √(R² − r²)).
  - With π = 3.14, R = 1.5 and r = 0.15: S1 = 35.325 exactly (a tie: 35.33 by rounding half up), S2 = 35.30734, and S3 = 35.30725, which rounds to 35.31.
  - S1 is off by 0.0178, so it is wrong under the contest rule. S2 is off by 8.9e-5, so it is right.
  - S1 uses A1 = πr²: the linear approximation of (b) is exactly the flat disc.
  - With the true π, S3 = 35.3252, which rounds to 35.33.
- **b1d.**
  - Each dimple occupies a cap of angular radius α with sin α = 0.1.
  - The area ratio 2/(1 − cos α) ≈ 399; with the hexagonal density π/(2√3) ≈ 0.907 this gives ≈ 362.
  - A reasonable estimate is about 350 to 360.
  - This is well above 100, so 100 dimples do fit on this ball; MIT's impossibility remark refers to the contest's original sizes.
- **b2.**
  - (a) f′ = −2x/(1+x²)², f″ = (6x² − 2)/(1+x²)³.
  - (b) Critical point (0, 1), a maximum. Inflection points (±1/√3, 3/4); the positive one is (0.5774, 0.75).
  - (c) At x = 0, f′ = 0 and f″ has its minimum −2. At x = ±1/√3, f″ = 0 and f′ has its extremes ±3√3/8 ≈ ±0.6495 (maximum at −1/√3, minimum at +1/√3).

### Comparison (one line per answer id)
- a1-b: choice 1 (the symmetry swaps: E′ odd, O′ even) = mine. Agree.
- a2-a: `12*x^3*tan(x^4)^2/cos(x^4)^2` = 12x³tan²(x⁴)sec²(x⁴). Agree.
- a2-b: `sin(2*y)*cos(2*y)` = mine (= ½ sin 4y). Agree.
- a3-b: `u3*v0 + 3*u2*v1 + 3*u1*v2 + u0*v3` = mine. Agree.
- a4-a: `-1/sqrt(1 - x^2)` = mine. Agree.
- b1-a: `2*pi*R*(R - sqrt(R^2 - r^2))` = mine. Agree.
- b1-b1: `pi*r^2` = mine. Agree.
- b1-b2: `pi*r^2 + pi*r^4/(4*R^2)` = mine. Agree.
- b1-c1: `4*pi*R^2 + 100*pi*r^2` = mine. Agree.
- b1-c2: `4*pi*R^2 + 100*pi*r^2 - 25*pi*r^4/R^2` = mine. Agree.
- b1-c3: `4*pi*R^2 + 200*pi*r^2 - 200*pi*R*(R - sqrt(R^2 - r^2))` = mine. Agree.
- b1-c4: 35.325 = mine (35.325). Agree.
- b1-c5: 35.307 (± 0.004) against my 35.30734. Agree.
- b1-c6: 35.307 (± 0.004) against my 35.30725. Agree.
- b1d (no box): the page's honeycomb estimate is ≈ 363, with "about 350" as the answer; mine is ≈ 362, with 350 to 360. Agree.
- b2-a1: `-2*x/(1 + x^2)^2` = mine. Agree.
- b2-a2: `(6*x^2 - 2)/(1 + x^2)^3` = mine. Agree.
- b2-b1: 0.577 = 1/√3 = mine. Agree.
- b2-b2: 0.75 = mine. Agree.
- Argument parts (a1(a), a3(a), a4(b), a6, b2(c)): the page's reasoning matches mine step by step.

COUNTS: errors=0 warnings=1 info=6

## Resolution (2026-11-21, by the page author)

- **1 (warning, b1-b1 mistake hint).** Replaced the hint of `2*pi*R^2 - pi*r^2` with the review's wording: it is about 2πR√(R² − r²), the band between the equator and the plane; keep the "1 −" in front of the root.
- **2 (info, 2B-1(d)).** The statement now says "with the contest's original sizes (which MIT changed and does not give)".
- **3 (info, 2A-1).** The statement now gives E(x) = ½(f(x) + f(−x)) and O(x) = ½(f(x) − f(−x)); the worked-out parts stay in the first hint.
- **True π (info).** Added a remark of our own to the golf ball solution: with the true π the exact area is 35.3252 cm², which rounds to 35.33. New calcs entry `b1-exact-area-true-pi`.
- **2B-2 plot (info).** `<Plot>` has only solid and dashed lines, so f″ is now solid and f′ stays dashed; the caption says which is which.
- **4 and 5 (info).** No change needed.
- Checks: `content:check` 0 errors, `calc:test -k 18-01-problem-set-2` and `test:answers` pass. Status set to `reviewed`.

