---
page: content/year-1/18.02/18-02-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps8/ (read: PDF and pdftotext text)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week7/ (read; printed page 2 checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week8/ (read; printed page numbers checked on rendered pages)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/line_intgrl_plan/ (read; page 1 rendered to check stars and parts)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/line_integrl_sol/ (downloaded copy present; not compared in detail)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/plane_vector_fld/ and grad_fld_n_diff/ (downloaded copies present; only used as link targets)
verdict: pass-with-notes
---

# Review: Problem Set 8: a line integral that is a moment of inertia, the polar angle as a potential, and radial fields

## Blind solve

### My answers (written before opening the full page)
- p1: along C, dy-term absent, so ∫_C F·dr = ∫_{x1}^{x2} (x² f(x) + f(x)³/3) dx. I₀ = ∬_R (x²+y²) dA = ∫_{x1}^{x2} ∫_0^{f(x)} (x²+y²) dy dx = ∫_{x1}^{x2} (x² f + f³/3) dx. Equal. (Numerical check f = 1 + 0.5 sin x + x²/4 on [−0.5, 1.7]: both 5.801814.)
- p2(a): θ_x = −y/(x²+y²), θ_y = x/(x²+y²): ∇θ = F for x > 0.
- p2(b): θ₂ − θ₁ (independent of r₁, r₂). Numerical check on a curved path: 1.570796 = θ₂ − θ₁.
- p2(c): C₁ (cos t, sin t), t: 0→π, integrand 1: π ≈ 3.142. C₂ (cos t, sin t), t: 0→−π (or (cos t, −sin t), t: 0→π): −π ≈ −3.142.
- p2(d): N_x = (y²−x²)/(x²+y²)² = M_y, curl = 0 for (x,y) ≠ (0,0).
- p2(e): not conservative on the whole domain (C₁, C₂ share endpoints, integrals π ≠ −π); conservative on x > 0 (F = ∇θ there, so integrals depend only on endpoints).
- p3(a): r_x = x/r, r_y = y/r; N_x − M_y = n r^{n−2} x y − n r^{n−2} x y = 0.
- p3(b): g'(r)/r = r^n, so g = r^{n+2}/(n+2) for n ≠ −2; n = −2: g = ln r. A potential exists for every n (domain: plane for n ≥ 0, plane minus origin for n < 0). Finite-difference checks at n = −3, −2, −0.5, 1.5: residuals < 2e−10.

### Comparison (one line per answer id)
- p1 (show): page reduces both sides to ∫(x² f + f³/3) dx, as mine. Agree.
- p2-a (show): θ_x = −y/(x²+y²), θ_y = x/(x²+y²). Agree.
- p2-b: page `theta2 - theta1`; mine θ₂ − θ₁. Agree.
- p2-c1: page 3.142 (tolerance 0.002); mine π = 3.14159. Agree.
- p2-c2: page −3.142; mine −π. Agree.
- p2-d (show): page N_x = M_y = (y² − x²)/(x²+y²)². Agree.
- p2-e1: page choice 2 ("No, the two half circles of part (c) give different values"). Agree.
- p2-e2: page choice 3 ("Yes, there it is the gradient of θ"). Agree.
- p3-a-rx: page `x/r`; mine x/r. Agree.
- p3-a-nx: page `n*x*y*r^(n-2)`; mine n x y r^{n−2}. Agree.
- p3-a-curl: page choice 1 ("zero at every point where defined, for every n"). Agree.
- p3-b-g: page `r^(n+2)/(n+2)`; mine r^{n+2}/(n+2). Agree.
- p3-b-n: page −2; mine −2. Agree.
- p3-b-log: page `log(r)`; mine ln r. Agree.

No disagreement between the blind solve and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(e), statement (line 349) | The statement asks both questions: is F conservative over its entire domain of definition? Is it conservative over the right half-plane x > 0? Justify. | The prose says only "answer two questions, each with its reason". The questions appear only in the two `<Answer>` labels, which read-aloud skips and search does not index (the stripped statement had no questions at all) | Add to the Part's prose: "Is $\vec F$ conservative over its whole domain, the plane without the origin? Is it conservative over the right half-plane $x > 0$?" |
| 2 | warning | Problem 3(a), `<Answer id="p3-a-nx">` vars (line 443) | (checker setup) | `x: [0.5, 1], y: [0.5, 1], r: [1.5, 3]`: no sample can satisfy r = √(x²+y²), since √(x²+y²) ≤ √2 < 1.5. `lib/answers.ts` samples r as an independent letter, so a correct answer written with x² + y² (e.g. `n*x*y*r^n/(x^2+y^2)`) is marked wrong, against "accepts every correct way of writing the answer" in How to answer | Use ranges that overlap the possible set (e.g. `r: [1.2, 1.4]` with x, y in [0.5, 1]; the listed mistakes still differ by a factor r or n), and add to the box text: "write every power of the distance with `r`, not with `x^2 + y^2` or `sqrt(x^2 + y^2)`". |
| 3 | warning | Problem 3(b), solution, step "The special case" (line 558) | (our remark, not MIT) | "For $n \le -2$ it grows without bound there." For n < −2, r^{n+2}/(n+2) tends to −∞; for n = −2 "it" (r^{n+2}/(n+2)) is not the potential at all, and ln r tends to −∞. "Grows" suggests +∞ | "For $n \le -2$ the potential ($r^{n+2}/(n+2)$, or $\ln r$ when $n = -2$) tends to $-\infty$ at the origin." |
| 4 | info | Problem 3(b), step "Compare with Problem 2", n = −3 remark (line 574) | (our remark) | "the inverse-square pattern of gravity and of the electric force" | Right in size; the field r⁻³(x î + y ĵ) points outward, like the force between like charges, not gravity's pull. Optionally add "in size". |
| 5 | info | Problem 1, check step (line 123) | (our remark) | Green's theorem look-ahead | Verified: with ∂R counterclockwise, C is traversed backwards, M = 0 on the axis and dx = 0 on the vertical sides, so ∫_C F·dr = ∬_R (x²+y²) dA. No change needed. |

## Arithmetic and answer checks
- Every Answer value and expression matches the blind solve (above).
- Problem 1 check: ∫₀¹(x² + 1/3)dx = 2/3; unit square ∬(x²+y²) = 2/3. Correct.
- 2(a) check: |F| = 1/r. Correct. 2(d) check at (−1, 2): 3/25. Correct.
- 2(e): ∮ = π − (−π) = 2π. Correct.
- 3(a) check with n = 2: N_x = M_y = 2xy. Correct.
- 3(b): (2^0.001 − 1)/0.001 = 0.69339 → 0.6934; ln 2 = 0.6931. Correct. n = −3 gives −1/r. Correct.
- Mistake hints: each verified true of its formula (theta1 − theta2 reversed; r2·theta2 − r1·theta1; theta2 + theta1; 1/(2r), x/(2r), 2x/r, r/x with |r_x| = |x|/r ≤ 1; n·y·r^(n−1), n·x·y·r^(n−1), x·y·r^(n−2); r^(n+1)/(n+1), r^(n+2), r^(n+1); 1/r, and −1/r as the n = −3 potential).
- Tolerances: number boxes 0.002 (accept 3.141, 3.142, 3.1416; reject the sign mistake and π/2); −2 ± 0.01. Formula vars keep every expr and mistake finite (n + 2 ≥ 1.5, n + 1 ≥ 0.5, r ≥ 0.3). See finding 2 for the physical range of p3-a-nx.
- Choice boxes: the marked options (2, 3, 1) are correct; every distractor is false for its stated reason.
- Calcs file: `pytest tests/calc -k problem-set-8` in the worktree: 291 passed (the filter also includes other courses' Problem Set 8 files). The p3 entries use Pythagorean triples so that r = √(x²+y²) holds; p2-b is checked along a straight segment, p2-c along broken lines.
- No hint gives a result away (3(b) hint 2 asks which power fails without naming it).

## Coverage and order
- Part B: Problems 1, 2(a)–(e), 3(a)–(b), all in MIT's order with MIT's points (3; 1+2+2+1+2 = 8; 2+2 = 4; total 15). MIT's closing note to Problem 2 (sheet p. 2) is rewritten in the 2(e) solution.
- Part A list matches MIT's sheet exactly (4A/1bd, 2abc, 3abcd, 4; 4B/1abcd, 2ab; 4C/1, 2, 3; 4C/5a by method 1, 5b by method 2, 6ab by both). On the rendered Notes page no assigned exercise is starred (4C-4* and 4C-6c* are not assigned). 4A-4 (wire field, size k/r, right-hand rule = counterclockwise) is k times the Problem 2 field; 4A-2b, c are ∇ln r and ∇f(r). Correct.
- Lecture mapping: MIT 21/22/23 (Thu Oct 25, Fri Oct 26, Tue Oct 30) = site 19/20/21; the Week 8 and 9 summaries carry these dates under Lectures 19, 20, 21, and `_course.json` has 19 Vector Fields, 20 Path Independence, 21 Gradient Fields. The "two exam days" explanation is right (Exam 2 is MIT Lecture 17 on the PS6 sheet). The day labels per problem are correct.
- `covers: [17, 19, 20, 21]`, `lecture: 21`: fine. 17 is justified by I₀ (Week 7 summary, Lecture 17, p. 2); leaving out 16 is reasonable.
- The textbook reading (Edwards and Penney) is left out, and the page says so.

## Citations
- `mit` at= "Part B, Problem 1/2, p. 1", "Problem 3, p. 2", closing note p. 2: match the sheet's printed pages.
- reading3 "Lecture 17, p. 2" (I₀ = ∬ r² δ dA): printed p. 2 of Week 7. Correct.
- reading1 "Lecture 19, p. 2" (∫ F·dr/dt dt), "Lecture 19, p. 3" (M dx + N dy; F·T̂ ds), "Lecture 20, p. 4" (fundamental theorem): printed pages 2, 3, 3, 4 of Week 8 (numbers at the top of the rendered pages). Correct.
- reading2 "Lecture 21, p. 1" (curl = N_x − M_y; the claim needing F defined and differentiable at every point of the plane): Week 9 printed p. 1. Correct. "Lecture 22, p. 2" (the unit-circle remark that names PS8 Problem 2): correct and fairly attributed.
- Frontmatter reading locations are correct.

## Licensing
- No figures. Statements are in the page's own words; MIT's formulas are cited. No "All rights reserved" or "Courtesy of" notices in the sheet, the summaries or Notes section 4. No OpenStax or LibreTexts. The textbook is named but not used. Part A exercises are linked, not copied.

## Notes
- No `## Summary` with answers; no em dashes; frontmatter identical to the stripped copy.
- `solutions: own` is right: OCW has no Part B solutions.
- The curl box as a choice box is fine: the formula boxes for r_x and N_x carry the calculation, and the choice records the result.
- "Potentials without a constant" is well specified (general one with no constant term; ln r, zero at r = 1); the solution shows (+c) and explains the constant of the ray integral.
- `content:check` (symbols, labels) was not run in this review.

COUNTS: errors=0 warnings=3 info=2

## Resolution (2026-11-21, by the page author)

No errors. The three warnings and one info item are fixed in the page:
1. Problem 2(e): MIT's two questions (conservative over the whole domain? over the right half-plane x > 0?) are now in the part's prose, not only in the box labels.
2. Problem 3(a), box p3-a-nx: `vars` are now x, y in [0.5, 1] and r in [1.2, 1.4], so r = sqrt(x² + y²) is possible; the listed mistakes are still finite and different from the answer everywhere (they differ by a factor r/x > 1, r > 1 or n > 1). The statement now says to write every power of the distance with `r`, because the boxes treat `r` as a letter of its own. The other r-boxes were checked: p3-a-rx (x in [0.6, 1], r in [1.5, 3]) has no y, so every sample is possible; p3-b-g and p3-b-log contain r (and n) only.
3. Problem 3(b), "The special case": the remark now reads "For n ≤ −2 the potential (r^(n+2)/(n+2), or ln r when n = −2) tends to −∞ at the origin."
4. (info) The n = −3 remark now says "in size, the inverse-square pattern".
5. (info) No change needed.

`content:check`, `calc:test -k 18-02-problem-set-8` and `test:answers` pass. Status set to reviewed.
