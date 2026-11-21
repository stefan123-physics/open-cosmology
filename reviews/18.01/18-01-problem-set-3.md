---
page: content/year-1/18.01/18-01-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps3/ (read: PDF; rendered pages 1 and 2 checked for the symbols pdftotext drops)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec12/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec13/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec9/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec5/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/e_exrcs_scsn_1_7/ (read: exercise numbers and notice only)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/s_solutns_exrcis/ (read: notice only)
verdict: pass-with-notes
---

# Review: Problem Set 3: tangent lines, errors of measurement and Newton's method

I solved the set blind first (section "Blind solve" at the end, written before I opened the page) and compared afterwards. Every final answer on the page agrees with mine. I found no error.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Frontmatter `covers: [11, 12, 13]`, the intro "This set practises three lessons: maximum and minimum problems, …", and `prerequisites` | MIT's only max-min items are Problem 1 (Simmons, left out) and the Part I exercises 2C-… | No scored or optional problem on the page uses Lecture 11. Lecture 11 appears only in the linked Part I list. Because `covers` includes 11, the max-min lesson gets a "Practise" link to a set with no max-min problem in it | Drop 11 from `covers` (and `max-min-problems` from `prerequisites`). Reword the intro: "This set practises related rates and Newton's method … For maximum and minimum problems (Lecture 11) it lists MIT's own solved exercises at the end." If the run decides the Part I list counts as practice, keep 11 but say in the intro that Lecture 11 is practised only through the linked exercises |
| 2 | warning | Problem 3(a), `<Answer id="p3-a-deriv">`, `mistakes` | Asks for dL/dh by implicit differentiation, in any form | The listed "mistake" `h/sqrt(h^2 - 20000^2)` is a correct answer. A reader who types it sees "Not yet" next to a hint that starts "That is correct …". A listed mistake should be a wrong formula (agent file: "each mistakes hint is true of that wrong formula") | Remove this entry. Then either (preferred) ask for the form in h alone (`expr="h/sqrt(h^2 - 20000^2)"`, `vars={{ h: [20500, 60000] }}`, statement "type it as a function of h alone"; the solution already states this form), or keep `h/L` and add to the statement: "(The form with $h$ alone is right too, but this box checks the form with $L$.)" |
| 3 | warning | Problem 3(b), second hint | MIT's hint only says to treat the two cases separately | "Satellite 1 is the nearer one. If it is to the left of satellite 2, can you be to the right of satellite 2?" practically gives away the answer of the choice box `p3-b-side` | Replace it with a hint that leaves the step to the reader, e.g. "Compare $L_1$ and $L_2$. Which points of the line are nearer to $x_1$ than to $x_2$?" |
| 4 | info | Problem 3(a), formula "Sensitivity of the position", `cite="reading1" at="p. 4 …"` | Lecture 12 notes p. 4 differentiate with respect to time: 2L L̇ = 2h ḣ, so L̇/ḣ = h/L | 2L dL/dh = 2h | The citation is right (printed p. 4, Figure 4). Optionally add "(there with time derivatives)" to `at=` |
| 5 | info | Problem 3(a) solution | Asks for an explanation of ΔL/Δh ≤ dL/dh at the left end | Algebraic proof through the exact quotient (h1 + h0)/(L1 + L0), not the MVT | Correct, and a good fit because MIT puts the MVT lecture (14) on PS4. Checked: adding h0 L0 to both sides of h1 L0 ≤ h0 L1 gives the bound; it needs L0 > 0, which holds for h0 > 20,000 |
| 6 | info | Problem 4 statement and 4(b) | "(See Problem Set 1.)"; 4(b) asks only for the location in a | The reference to Set 1 is dropped; 4(b) adds "and how accurately" | Fine: the accuracy is what MIT's 10^-3 is there for. No change needed |
| 7 | info | Problem 6(a) | MIT's four checks (i)–(iv) are part of the statement, marked optional | Moved into the third hint | The statement says so. Fine |
| 8 | info | `covers` | 18.01 Set 2 lists the lessons whose methods it uses (5, 9, …) | Problems 2–4 rest on implicit differentiation (Lecture 5) and 5(c) on Lecture 9's quadratic approximation. Both are listed as prerequisites, not in `covers` | Optional: add 5 and 9 to `covers` to match Set 2, or leave as is |

## Arithmetic and answer checks
I recomputed every number independently (Python, 40-digit decimal), some before and some after opening the page.
- Problem 3 table: all 12 ratios match my values to the digits shown. Column h = 25,000: 1.666607, 1.666726, 1.6666607, 1.6666726, 1.66666607, 1.66666726. Column h = 20,001: 82.847, 200.0025, 97.622, 102.637, 99.755, 100.255. "Less than 0.004%" (largest is 0.0036%) and "within 0.3%" (0.25%) are both right.
- dL/dh is 100.0037 at h = 20,001 (box 100.0, 0.1%: ok) and 1.666785 at h = 24,999 (ok).
- The bound h ≥ 40,000/√3 = 23,094.01 km is right (box 23094, 0.5%: ok, and it accepts 23100).
- 3(b):
  - L1 = 6403.124 km and L2 = 48,000 km exactly. L2 ± L1 = 54,403 and 41,597 km (ok).
  - ΔL1 = 3.2796e-2 km and ΔL2 = 1.0833e-2 km = 10.83 m (box 10.8 m, 1%: ok). The exact value L(52,000.01) − 48,000 = 0.0108333 km agrees.
  - The ratio of the two errors is 3.03 ("a factor of three", ok). Over the interval, h/L changes by d(h/L)/dh × 0.01 ≈ 3.6e-8, so "does not change in its first seven figures" holds.
- 3(c): α1 = 72.25° and α2 = 22.62° (ok); 1/0.6 = 1.667 (ok).
- 4(a): dθ/da = 0.8 at a = 1 (ok). The finite-difference check atan(0.75125) − atan(0.75) = 0.000799 is right. The forms cos²θ(1 + 1/(4a²)), cos θ/a and 2(1 − sin θ) all agree (checked by algebra and at a = 1 and θ = −π/6).
- 4(b): a = 1/(2√3) = 0.288675 (box 0.2887, 0.5%: ok). dθ/da = 3 there, so Δa = 3.333e-4 (box 3.33, 1%: ok). The exact check values 0.288342 and 0.289009 and b = −1/6 are right.
- 4(c): a = (1 + sin θ)/(2 cos θ). The other root, (sin θ − 1)/(2 cos θ), is right. The listed mistake (tan θ + sqrt(tan²θ + 4))/2 is the root of a² − a tan θ − 1 = 0, as its hint says.
- 5(a):
  - Iterates 2.083333333333333, 2.080088888888889, 2.080083823064241 and 2.080083823051904 match mine. Their errors 3.2e-3, 5.1e-6, 1.2e-11 and 7.3e-23 are right.
  - 9^(1/3) = 2.08008 to 6 s.f. x2 rounds to 2.08009, and its error (5.07e-6) is also more than half a unit in the sixth figure. So k = 3; the box is correct and the answer does not depend on how "correct to 6 s.f." is read.
  - 2.080083823³ = 8.9999999993, which rounds to 9.000000 (ok).
- 5(b): the choices "larger" and "smaller" match my solve.
- 5(c): 599/288 = 2.0798611. The difference is 2.2271e-4 (box 2.23, 2%: ok). The linear approximation 25/12 equals Newton's x1 (ok). 3.25e-3 / 2.23e-4 = 14.6, so "about 15 times" is right.
- Problem 6: x3 and y3 match mine. The numerical checks 0.343 (0.342857) and 0.2165 (0.21654) are right. sqrt(1 − 0.601²) = 0.799249 and Δy/Δx = −0.751 (ok).
- 2(b) check point: y0 = 0.6495 and the slope −1.732 come out the same both ways (ok).
- Mistake hints: I checked every listed wrong formula against its hint in p2-slope, p3-c, p4-a-tan, p4-c, p5-a-formula, p6-a-x, p6-a-y, p6-b, p6-c-x and p6-c-y. This covers the signs, the parallel-ladder denominator 2 − 8 = −6, the halving when all four numbers are doubled, and 2 − 1/12. All hints are true. The one exception is item 2 above, which is not a wrong formula.
- `vars` ranges: all keep the answers finite (the p6-a denominator stays at or above 0.22; in p3-a, h ≥ 20,500).
- `npm run calc:test`: 13875 passed. `npm run content:check`: 0 errors (2 warnings, neither on this page).

## Coverage and order
- MIT's Part II order is kept: 2, 3(a–c), 4(a–c), 5(a–c), 6(a–d). The points are MIT's (2; 3+3+1; 3+2+0; 3+3+2; extra credit 3+2+2+1), so 22 scored plus 8 optional is right. The 1+1 split of Problem 2 is said to be the page's own.
- Left out, with the reasons stated: Problem 0 (course administration) and Problem 1 (Simmons 4.3/28 and 4.4/28). This is correct and follows the run decision.
- The Part I list matches MIT exactly (2C-1, 2, 5, 11, 13; 2E-2, 3, 5, 7; reading only for Lecture 13; Lecture 14 work on PS4). The exercise numbers exist in Section E, Section 2 "Applications of Differentiation".
- The page's own variants are all disclosed:
  - 3(b): the error margins are read as km.
  - Problem 4: a > 0 is assumed. This loses nothing, because θ = −π/6 has only the root a > 0; the negative root −√3/2 belongs to an angle in the second quadrant.
  - 4(a): the second box asks for the value at a = 1.
  - 5(a): "first k correct to 6 s.f." replaces the machine-dependent question. The solution still answers MIT's question (k = 3 on a 10-figure calculator, k = 4 in double precision), and I confirm both.
- The page's remark that MIT's hint "names the first case twice" is right: MIT prints "x1 < x2 and x2 > x1".
- The claims about Set 1 (h = 25,000 and 20,001, C = 2, the table values) match the reviewed 18.01 Problem Set 1 page on `main`. The claims about lessons (implicit-differentiation: the circle and arctan; curve-sketching: concave up) match those files.
- Citations: the `at=` pages for MIT's set match the printed footers (printed page = PDF page − 1). These are p. 1 for Problems 2 and 3(a), pp. 1–2 for 3(b), p. 2 for Problem 4 and 6(a), and p. 3 for 6(b) and 6(c). In the lecture notes, L5 pp. 1–3, L9 pp. 1 and 5, L12 p. 4 and L13 p. 3 also match the printed footers and contain what is cited.

## Licensing
- No MIT figure is redrawn; both plots are generated from formulas.
- Neither the set nor the four lecture notes has an "All rights reserved" notice. Sections E and S say "Copyright David Jerison and MIT 1996, 2003", with no rights-reserved clause, and the page only links to them.
- The Simmons items are left out. There is no OpenStax or LibreTexts material.
- The wording is the page's own. The only MIT phrases kept are short standard ones ("interval of uncertainty", credited to MIT).
- No em dashes, and no `## Summary` that gives away answers.

## Notes
- Answers to the writer's questions:
  - 3(a): the range h ≥ 40,000/√3 and the algebraic proof are correct (item 5).
  - 3(b): reading the margins as km and the accuracy ±10.8 m are correct.
  - Problem 4: assuming a > 0 is harmless (see Coverage).
  - 5(a): the variant answer 3 is correct. 5(c): 2.23e-4 is correct.
  - The 3(a) "mistake" `h/sqrt(h^2 - 20000^2)` is not acceptable as a listed mistake (item 2).
  - The citation page numbers are right.

## Blind solve

### My answers (written before opening the page)
- p2a: dy/dx = -(y/x)^(1/3) = -y^(1/3)/x^(1/3).
- p2b: tangent at (x0, y0) meets the axes at (x0^(1/3), 0) and (0, y0^(1/3)); length sqrt(x0^(2/3) + y0^(2/3)) = 1.
- p3a: dL/dh = h/L = h/sqrt(h^2 - 20000^2). At h = 25,000: 5/3 = 1.666667 (table fits to about 1e-4 for Δh = ±1 and better for smaller Δh); at h = 20,001: 100.0037 (fits only for Δh = ±0.01; ±1 gives 82.85 and 200.00). ΔL/Δh ≤ dL/dh(left end) because L = sqrt(h^2 - c^2) is concave (L'' = -c^2/L^3 < 0), so L' decreases and by the MVT the quotient equals L'(ξ) for some ξ to the right of the left end. |ΔL| ≤ 2|Δh| when the left end of the interval satisfies h ≥ 40,000/√3 ≈ 23,094.0 km.
- p3b: L1 = sqrt(21000^2 - 20000^2) = 6403.12 km, L2 = sqrt(52000^2 - 20000^2) = 48,000 km exactly. If x1 < x2: x = x2 - 48,000 km; if x1 > x2: x = x2 + 48,000 km. Accuracy from satellite 2: dL2/dh2 = 13/12, so ±1.0833e-2 km ≈ ±10.8 m (satellite 1 alone would give ±32.8 m; the 1e-10 is negligible).
- p3c: dL/dh = 1/cos α = sec α.
- p4a: tan θ = b/a; dθ/da = cos²θ (a² + 1/4)/a² = cos²θ (1 + 1/(4a²)) = cos θ / a (using a² + 1/4 = sqrt(a² + b²)). At a = 1: 0.8.
- p4b: a = 1/(2√3) ≈ 0.288675; dθ/da = 3 there, so Δa ≈ 1e-3/3 ≈ 3.33e-4.
- p4c: a = (tan θ + sec θ)/2 = (1 + sin θ)/(2 cos θ); gives 1/(2√3) at θ = -π/6 and da/dθ = a sec θ, consistent.
- p5a: x_{k+1} = x_k - (x_k^3 - 9)/(3 x_k^2) = (2x_k^3 + 9)/(3x_k^2). x1 = 2.0833333333, x2 = 2.0800888889, x3 = 2.0800838230642, x4 = 2.080083823051904 (= double precision value of 9^(1/3)). 9^(1/3) = 2.08008 (6 s.f.). First k with x_k = 2.08008 to 6 s.f.: k = 3. Surpasses IEEE double at k = 4.
- p5b: x0 = 2 < 9^(1/3); every x_k for k ≥ 1 is > 9^(1/3); x1 > x0; x_k < x_{k-1} for k ≥ 2. Reason: x^3 - 9 is convex for x > 0, tangent lines lie below the graph.
- p5c: 9^(1/3) = 2(1 + 1/8)^(1/3) ≈ 2(1 + 1/24 - 1/576) = 2.0798611; difference from exact ≈ -2.227e-4 (quadratic too small; next term 10/(81·512) ≈ 2.4e-4 as estimate).
- p6a: x3 = x1 x2 (y1 - y2)/(x2 y1 - x1 y2), y3 = y1 y2 (x2 - x1)/(x2 y1 - x1 y2).
- p6b: x2^2 + y2^2 = 1; lim Δy/Δx = -x1/y1.
- p6c: X = x1^3, Y = y1^3.
- p6d: X^(2/3) + Y^(2/3) = x1^2 + y1^2 = 1.

### Comparison (one line per answer id)
- p2-slope: page -(y/x)^(1/3) = mine. Agree.
- p3-a-deriv: page h/L = mine. Agree (see item 2 on the listed "mistake").
- p3-a-near: page 100.0 = mine 100.0037. Agree.
- p3-a-range: page 23094 km = mine 23,094.0 km. Agree.
- p3-b-l2: page 48000 km = mine. Agree.
- p3-b-side: page x2 - 48,000 km = mine. Agree.
- p3-b-acc: page 10.8 m = mine 10.83 m. Agree.
- p3-c: page 1/cos(alpha) = mine sec α. Agree.
- p4-a-tan: page b/a = mine. Agree.
- p4-a-value: page 0.8 = mine. Agree.
- p4-b-a: page 0.2887 = mine 0.288675. Agree.
- p4-b-error: page 3.33 (×1e-4) = mine 3.333e-4. Agree.
- p4-c: page (1 + sin θ)/(2 cos θ) = mine. Agree.
- p5-a-formula: page x - (x^3 - 9)/(3x^2) = mine. Agree.
- p5-a-x1: page 2.08333 = mine. Agree.
- p5-a-root: page 2.08008 = mine. Agree.
- p5-a-k: page 3 = mine. Agree.
- p5-b-x1: page "larger" = mine. Agree.
- p5-b-x2: page "smaller" = mine. Agree.
- p5-c-quad: page 2.07986 = mine 2.0798611. Agree.
- p5-c-diff: page 2.23 (×1e-4) = mine 2.227e-4. Agree.
- p6-a-x: page x1 x2 (y1 - y2)/(x2 y1 - x1 y2) = mine. Agree.
- p6-a-y: page y1 y2 (x2 - x1)/(x2 y1 - x1 y2) = mine. Agree.
- p6-b: page -x1/y1 = mine. Agree.
- p6-c-x: page x1^3 = mine. Agree.
- p6-c-y: page y1^3 = mine. Agree.
- Parts that ask for a proof or explanation (2(b), the 3(a) inequality, the reason in 5(b), 6(d)): I checked every step of the page's solutions. Each ends with a numerical or limiting check.

COUNTS: errors=0 warnings=3 info=5

## Resolution (2026-11-21, by the page author)

- Item 1 (warning): fixed. `covers` is now `[12, 13]` and `max-min-problems` is no longer a prerequisite. The intro says the set practises related rates and Newton's method, and that for maximum and minimum problems (Lecture 11) it lists MIT's own solved exercises at the end.
- Item 2 (warning): fixed. The entry `h/sqrt(h^2 - 20000^2)` is removed from the mistakes of `p3-a-deriv`. The box keeps the form `h/L`, and the statement now adds: "(The form with h alone is right too, but this box checks the form with L.)"
- Item 3 (warning): fixed. The second hint of 3(b) now reads "Compare L1 and L2. Which points of the line are nearer to x1 than to x2?"
- Item 4 (info): the citation of Lecture 12 notes p. 4 now adds "there with time derivatives".
- Items 5 to 7 (info): no change needed.
- Item 8 (info): left as is. Lectures 5 and 9 stay prerequisites and are not added to `covers`.
- Checks after the changes: `check-content.ts` 0 errors, `calc:test -k 18-01-problem-set-3` passed, `test:answers` passed. The calcs file needed no change (no number or formula answer changed).
- `status: reviewed`.
