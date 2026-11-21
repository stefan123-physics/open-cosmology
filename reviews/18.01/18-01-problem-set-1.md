---
page: content/year-1/18.01/18-01-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps1/ (read: MIT's PDF, pdftotext, 3 printed pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec1/ (read: PDF, printed pp. 1-7)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec2/ (read: PDF, printed pp. 1-2 checked)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec3/ (read: PDF scan without printed page numbers)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/g_graphng_fnctns/ (read: Section 3, equations (6) and (7))
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/e_exrcs_scsn_1_7/ (read: Section 1 exercise numbering, poor OCR)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/s_solutns_exrcis/ (read: header only)
  - OCW Assignments page and Course reader page (read: Simmons title, authorship of the reader)
verdict: pass-with-notes
---

# Review: Problem Set 1: rates of change, tangent lines and the product rule

## Blind solve

### My answers (written before opening the full page)
- p1a: p(x) = (x^2 + 1)/(x^2 - 1)
- p1b: q(x) = -2x/(x^2 - 1) = 2x/(1 - x^2)
- p2a: L0 = 15000; ratios 1.66661 (+1), 1.66673 (-1), 1.666661 (+0.1), 1.666673 (-0.1), 1.6666661 (+0.01), 1.6666673 (-0.01), all near h0/L0 = 5/3; C = 2
- p2b: L0 = sqrt(40001) = 200.0025; ratios: +1: 82.847, -1: 200.0025, +0.1: 97.62, -0.1: 102.64, +0.01: 99.755, -0.01: 100.255. Strictly C must exceed 200.0025, so the simplest round C is 300 (250 or 201 also work; C = 200 fails by 0.0025 in the Δh = -1 case, where L = 0). Less accurate than (a): the error is magnified about 100 times instead of 5/3.
- p3: the tangent from (0, 1100) touches y = 1000 - x^2 at x = ±10; the ant first sees the (top of the) tower at y = 900 ft.
- p5a: V(0) = 20, V(5) = 5, average outflow 15/5 = 3 L/min
- p5b: V'(t) = -2(10 - t)/5, V'(5) = -2, outflow 2 L/min
- p7a: D(uvw) = u'vw + uv'w + uvw'
- p7b: D(u1...un) = sum over i of u1...u_i'...un; induction by D((u1...un) u_{n+1}) = D(u1...un) u_{n+1} + (u1...un) u_{n+1}'.

(Numbers from a Python run with the worktree's .venv: L(h) = sqrt(h^2 - 20000^2), difference quotients at h0 = 25000 and 20001.)

### Comparison (one line per answer id)
- p1-even: page (x^2 + 1)/(x^2 - 1). Agrees.
- p1-odd: page -2*x/(x^2 - 1). Agrees (the page also gives 2x/(1 - x^2)).
- p2-a-ratio: page 1.667 (tolerance 0.5%). Agrees (1.66661).
- p2-a-c: page 2 (tolerance 0.01). Agrees.
- p2-b-ratio-plus: page 82.85. Agrees (82.847).
- p2-b-ratio-minus: page 200.0 (tolerance 0.5%, accepts 200.0025). Agrees.
- p2-b-accuracy: page "less accurately". Agrees.
- p2(b) bound (no box): page C = 300, with C = 200 discussed as "the size right". Agrees with my strict reading.
- p3-y: page 900 feet. Agrees.
- p5-a: page 3 L/min. Agrees.
- p5-b: page 2 L/min. Agrees.
- p7-a: page du*v*w + u*dv*w + u*v*dw. Agrees.
- p7(b) (self-marked): page states the n-term formula and proves it by splitting off u_{n+1}, base case n = 2. Agrees.

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(a), answer box `p2-a-c` | "choosing the simplest round number C that works for all three cases" | The box accepts only 2 (tolerance 0.01); the solution does not say that other round bounds (1.7, 1.8, 5) also hold, so a reader who types 1.7 is marked wrong without explanation | Add one sentence to the step "The bound": "Any number from 1.67 up also works, for example 1.7; 2 is the simplest whole number, and that is what the box expects." Optionally ask for "the simplest whole number C" in the statement of (a). |
| 2 | info | Problem 2, statement | "Δh = 1, 10^-1, 10^-2 ... all three cases", with h = h0 ± Δh | "six values Δh = ±1, ±0.1, ±0.01 ... all six cases" | None: same content, the ± made explicit. |
| 3 | info | Problem 2(b), bound | MIT gives no solution | C = 300 strictly, no answer box, with an honest note on C = 200 | None. Verified: the largest ratio is 200.0025 > 200, so 300 is the strict simplest round bound; leaving it without a box is right. |
| 4 | info | Frontmatter `covers: [1, 2, 3, 4]` | MIT dates the Part II problems Wed / Thurs (Lecture 1) / Fri (Lecture 2, only the Simmons Problem 6) / Tues (Lecture 3) | Covers Lectures 1 to 4 | Acceptable: MIT's Lecture 2 notes (printed p. 2, "Sensitivity of measurements: An example is carried out on Problem Set 1") tie Problem 2 to Lecture 2, and the Part I list covers Lecture 4. No scored problem needs Lecture 4 (the chain rule appears only in the check of 2(a)). If "Practise" links should appear only where a scored problem fits, use `[1, 2, 3]`. |
| 5 | info | Problems 5(a), 5(b), 7(a), statements | "Find the average rate at which water drains during the first 5 minutes." / "find the formula for the derivative of their product, D(uvw)." | Near-identical single sentences | Short task sentences, within "short phrases"; reword if a stricter standard is wanted. |
| 6 | info | Problem 7, `<Formula label="Product rule">` | Product rule in the Lecture 3 notes, a scan with no printed page numbers | `at="PDF p. 3"` | None: verified on PDF page 3 (page 1 is the OCW cover); matches the citation style of the lesson `derivatives-of-sine-and-cosine` ("PDF p. 3"). |

## Arithmetic and answer checks
- Every number on the page recomputed independently (Python) or by `npm run calc:test` (13837 passed, including this page's entries): L0 = 15000; L(25001) = 15001.66661; the six ratios of (a); sqrt(40001) = 200.0025; sqrt(80004) = 282.8498; ΔL = 82.8473; the six ratios of (b) (99.7550 printed as 99.76 and 100.2550 as 100.25, both fine to 4 significant figures); the miss of 2.5 m; h0/L0 = 100.004; ratio 60.0 to 5/3; a 10 m error gives 0.998 km; line of sight 2000 ft at the start; contact x0 = 10, y = 900; slope -20 both ways; m^2 = 400 double root; 2 sqrt(1000) = 63.2 ft; V(0) = 20, V(5) = 5, 15 L drained; V = 20 - 4t + t^2/5; dV/dt = -4 + 2t/5; (25 - (5 - Δt)^2)/(5Δt) = 2 - Δt/5, giving 1.8 and 1.98; outflow 4 L/min at t = 0 and 3 at t = 2.5.
- Problem 1 number check: p(3) = 1.25, q(3) = -0.75, sum 0.5 = f(3), difference 2 = f(-3). Correct.
- Answer boxes: formula `vars` x in [1.5, 4] avoid x = ±1 (finite); the p7 vars, all in [0.5, 3], are finite. Number tolerances: 0.5% on 1.667, 82.85, 200.0 and 900 accepts 3 significant figures; 1% on 3 and 2 is fine.
- Mistake hints, each checked true of its formula: p1-even: (2x^2+2)/(x^2-1) is the sum f(x)+f(-x); -2x/(x^2-1) is odd; (x^2-1)/(x^2+1) is 0.8 at x = 3 against 1.25; f(2) = 1/3, f(-2) = 3. p1-odd: 2x/(x^2-1) is positive at x = 2 while f(2) - f(-2) = -8/3 < 0; -4x/(x^2-1) is f(x) - f(-x); (x^2+1)/(x^2-1) is even. p7-a: u = v = w = x gives 1 for du*dv*dw against 3x^2; the other three are described correctly. Every mistake differs from its answer.
- Every solution ends with a check (parity plus numbers in Problem 1, the limit as the derivative in Problem 2, slope and discriminant checks in Problem 3, a return to the definition in Problem 5, the x^n power rule in Problem 7).
- Hints: none gives a final result away (Problem 3 hint 3 sets up the tangent line but leaves the solving to the reader).
- Points: 3 (2 + 1, split marked as ours) + 6 (3 + 3) + 4 + 4 (2 + 2) + 6 (2 + 4) = 23, all MIT's. MIT's Part II total 3 + 3 + 6 + 4 + 6 + 4 + 8 + 6 = 40, as the page says.

## Coverage and order
- Part II kept: Problems 1, 2, 3, 5, 7 in MIT's order, same physics and same parts. Left out: Problem 0 (collaboration statement, course administration), Problem 4 (Simmons 3.1/21, parabolic mirrors) and Problem 6 (Simmons 2.5/19d, 19f, 19g, 20c, 20g, 22a, 22b, limits). All three omissions are stated on the page. "Problem 6 was the only one on limits" agrees with MIT's text (its items are from Simmons 2.5, set for the Lecture 2 day).
- Part I list checked line by line against MIT's PDF: Recitation 0 (1A-1a, 2a, 3abe, 6a, 7a), Lecture 1 (1C-3abe, 4ab use 3, 5, 6; 1B-2, 1C-1a from the definition), Lecture 2 (1D-1bcefg, 4a; 1C-2, 1D-3ade, 6a, 8a with the "diff = cont." hint), Lecture 3 (1E-1ac, 2b, 3, 4a, 5a; 1J-1e, 2), Lecture 4 (1F-1ab, 2, 6, 7bd; 1J-1abm, 1G-1b, 5ab). All match. Only MIT's "(trace axes onto your answer sheet)" for 1C-6 and the Simmons reading assignments are left out, which is fine.
- Spot check against Section E (the scan): 1A-3, 1A-6, 1A-7, 1B-2, 1C-1 (a) and (b), 1C-2 (OCR "10-2"), 1C-3 to 1C-6 (OCR "1C-68"), 1D-1 to 1D-8, 1E-1 to 1E-5, 1F-1, 1F-2, 1F-6, 1F-7, 1G-1, 1G-5, 1J-1 (parts a to r, so m exists) and 1J-2 all exist with the parts named.
- The antiderivative note (MIT puts it under Lecture 3) is moved to the end of the list: fine.

## Licensing
- MIT's PS1, lecture notes, Notes G and Sections E and S: no "All rights reserved" and no "Courtesy of" notices (grep of all texts). OCW course material, CC BY-NC-SA.
- No MIT figure reused; the one graph is a generated `<Plot>` from y = 1000 - x^2.
- Simmons: only named. The OCW Assignments page confirms the title: Simmons, George F., *Calculus with Analytic Geometry*, 2nd ed., McGraw-Hill, 1996. No Simmons problem text is reproduced. The wording on the page is safe.
- Authorship: OCW's Course reader page says the notes are by Prof. Arthur Mattuck and the exercises and solutions by Prof. David Jerison (except exercise section 7, by Mattuck). The page's credits (Mattuck for Notes G, Jerison for E and S) are correct.
- Part I is linked to OCW, not rewritten, as the 18.01 run decision says.

## Notes
- Citations verified: Notes G Section 3, equations (6) and (7) (even and odd definitions); MIT PS1 printed p. 2 for Problems 1, 2, 3 and p. 3 for Problem 5; Lecture 1 notes printed p. 3 (tangent line through (x0, y0), "Finding the tangent line") and p. 6 (d/dx x^n = n x^(n-1), "This result extends to polynomials"); Lecture 2 notes printed p. 1 (average against instantaneous rate of change); Lecture 3 PDF p. 3 (product rule).
- Claims about lessons checked: `chain-rule-and-higher-derivatives` introduces the operator D, so "as in the lesson on higher derivatives" is right; the Lecture 1 notes derive the power rule from the binomial expansion (printed p. 6), as the check of Problem 7 says; lesson slugs, titles and lecture numbers 1 to 4 match the links and prerequisites.
- `npm run content:check`: 0 errors; its 2 warnings are about unused PhET sims, not this page. No em dashes; no `## Summary`.
- The split of (x - 1)/(x + 1) holds for x other than ±1, as the page remarks; correct.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

- **1 (warning, box `p2-a-c`):** fixed. The statement of Problem 2(a) now asks for "the smallest whole number C that holds in all six cases", with a bracket saying that MIT asks for the simplest round number and that the smallest whole number makes the answer definite. The step "The bound" now says that any number from 1.67 up bounds the six ratios (for example 1.7) and that 2 is the smallest whole number above them, which is also the simplest round one. "How to answer" calls C "the whole number C". The box still accepts only 2. The calcs entry `p2-a-bound` quotes the new sentence.
- **2, 3, 6 (info):** no change needed.
- **4 (info, `covers`):** kept as `[1, 2, 3, 4]`, with `lecture: 4`. No scored problem needs Lecture 4, but the set is MIT's assignment for Lectures 1 to 4, its Part I list on this page has a row of Lecture 4 exercises (chain rule and higher derivatives) with MIT's solutions, and the check of Problem 2(a) uses the chain rule. So the "Practise" link on the chain-rule lesson leads to real practice for it.
- **5 (info, near-identical task sentences):** left as they are: single short task sentences with no other natural wording.
- Checks after the changes: `content:check` 0 errors, `calc:test -k 18-01-problem-set-1` and `test:answers` pass. Status set to `reviewed`.
