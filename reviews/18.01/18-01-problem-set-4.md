---
page: content/year-1/18.01/18-01-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps4/ (read: PDF, pdftotext)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/e_exrcs_scsn_1_7/ (read: groups 2G, 3A, 3B, 3F incl. 3F-5, 4J)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/s_solutns_exrcis/ (read: confirmed it has no solution for 3F-5)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec14/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec15/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec16/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec18/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec9/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps3/ (read: to check the Problem 6 claim about Set 3)
verdict: pass-with-notes
---

# Review: Problem Set 4: inequalities for the logarithm, air pressure and a Riemann sum

## Blind solve

### My answers (written from the stripped statements and MIT's PDF only, before opening the page)
- p1a: MVT on [0, x]: f(x) = f(0) + f'(c) x = f'(c) x >= 0.
- p1b: f = x - ln(1+x), f(0) = 0, f' = x/(1+x) >= 0, so ln(1+x) <= x.
- p1c: g = ln(1+x) - x + x^2/2, g' = x^2/(1+x) >= 0; h = x - x^2/2 + x^3/3 - ln(1+x), h' = x^3/(1+x) >= 0.
- p1d: partial sums P_n of x - x^2/2 + x^3/3 - ...; for x >= 0, ln(1+x) <= P_n for odd n, >= P_n for even n. Next polynomial x - x^2/2 + x^3/3 - x^4/4, with ln(1+x) >= it.
- p1e: u = -x in [0, 1): g(u) = -u - ln(1-u), g(0) = 0, g' = u/(1-u) >= 0, so ln(1-u) <= -u.
- p2: both derivatives are tan x sec^2 x; (1/2)sec^2 x - (1/2)tan^2 x = 1/2, a constant.
- p4a: p = e^{-0.13 h}; p(10) = e^{-1.3} = 0.2725 kg/cm^2.
- p4b: 1 - e^{-0.013} = 0.01292 kg/cm^2; linear estimate: drop 0.013, i.e. 1.3%.
- p4c: p'(0) = -0.13, drop 0.013 kg/cm^2 (same as the estimate in b); Everest: 1 - 1.3 = -0.3 kg/cm^2, meaningless (step far too large).
- p5a: lower sum = (1/n) sum_{k=0}^{n-1} e^{k/n} = (e - 1)/(n(e^{1/n} - 1)).
- p5b: 1.
- p5c: e - 1 = 1.718.
- p6a: L^2 = (x0 - y0/m0)^2 + (y0 - m0 x0)^2.
- p6b: L^2 = (x - y/y')^2 + (y - x y')^2.
- p6c: G = y/y'^3 (sympy: d/dx of 6b minus 2(x + y/y'^3)(xy' - y)y'' simplifies to 0).
- p6d: astroid gives y'^3 = -y/x, so x + G = 0. y'' = 0: straight lines; not the required graph (y = L - x has a piece of length L*sqrt2). xy' - y = 0: lines y = Cx through the origin, both intercepts 0, L^2 = 0: extraneous, introduced by differentiating.

### Comparison (one line per answer id)
- p1-d-poly: page `x - x^2/2 + x^3/3 - x^4/4` = mine. Agree.
- p1-d-side: page choice 0 ("greater than or equal to that polynomial") = mine. Agree.
- p2-const: page 0.5 = mine. Agree.
- p4-a-formula: page `exp(-0.13*h)` = mine. Agree.
- p4-a-everest: page 0.2725 = mine (e^{-1.3} = 0.272532). Agree.
- p4-b-diff: page 0.01292 = mine (0.0129159). Agree.
- p4-b-percent: page 1.3 = mine. Agree.
- p4-c-drop: page 0.013 = mine. Agree.
- p4-c-everest: page -0.3 = mine. Agree.
- p5-a: page `(exp(1) - 1)/(n*(exp(1/n) - 1))` = mine. Agree.
- p5-b: page 1 = mine. Agree.
- p5-c: page 1.718 = mine. Agree.
- p6-a: page `(x0 - y0/m0)^2 + (y0 - m0*x0)^2` = mine. Agree.
- p6-b: page `(x - y/yp)^2 + (y - x*yp)^2` = mine. Agree.
- p6-c: page `y/yp^3` = mine. Agree.
- Proof parts (1a, 1b, 1c, 1e, the explanation in 2, 6d): the page's arguments match mine step for step. 6d adds a check that the astroid satisfies (b) itself (the constant is L^2), which I verified symbolically (x - y/y' = x^{1/3}L^{2/3}, y - xy' = y^{1/3}L^{2/3}) and numerically (sympy at L = 2, x = 1/3 gives 4).

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How to answer"; boxes p4-b-percent and p4-c-drop (also p2-const, p5-b, p4-c-everest) | (no boxes at MIT) | "How to answer" promises that a number box "says next to it, or in its question, how exact your value must be", but these boxes state nothing. For the two at 0.3% it matters: a reader who types the exact 1.292 (%) in p4-b-percent or 0.01292 in p4-c-drop gets a bare "wrong" (number boxes have no mistake hints) without being told the box wants the linear estimate. | 4(b), after the percentage request: "Type the estimate itself, not the exact drop." 4(c), after the Green Building request: "Type the linear estimate, not the exact value of part (b)." Optionally add "(exact)" or "to three decimals" to p2-const, p5-b and p4-c-everest so the promise holds for every box. |
| 2 | info | Problem 4 | 3F-5 also has part (d) (altitude in metres) | parts (a) to (c) only | None: MIT assigns 3F-5abc; the page says so. |
| 3 | info | Problem 6 intro | MIT PS3 Problem 2: every tangent line of x^{2/3} + y^{2/3} = 1 in the first quadrant has a piece of length 1 there | same | None: verified against MIT's PS3 PDF. |
| 4 | info | Formula boxes | (no boxes at MIT) | the checker refuses `e` ("I don't know the symbol e"); the page tells readers to type exp(1) | None; the refusal message is clear and "How to answer" covers it. |

## Arithmetic and answer checks
- Every number on the page recomputed: ln 2 = 0.693; at x = 0.5: 0.375, ln 1.5 = 0.4055, 0.4167, four-term polynomial 0.4010; ln 0.5 = -0.693; e^{-1.3} = 0.2725; e^{-0.013} = 0.98708, 1 minus that = 0.01292; exact drop 1.292%, the 1.3% estimate off by 0.65% of itself ("less than one part in a hundred": correct; "slightly too large" because e^x lies above its tangent: correct); -0.3 at Everest; n = 4 heights 1.2840, 1.6487, 2.1170, lower sum 1.5124, e^{1/4} - 1 = 0.28403; n(e^{1/n} - 1) = 1.0517, 1.0050, 1.0005 for n = 10, 100, 1000; lower sums 1.7097 (n = 100), 1.7174 (n = 1000); upper sum n = 4: 1.9420; 6(a) check L^2 = 8; 6(c) check with y = x^2 at x = 1: 4.5 both ways; 6(d) check: y = 0.6495, y' = -1.732, intercepts 0.5 and 0.8660, squares sum to 1. All correct.
- `pytest tests/calc -k 18-01-problem-set-4` (worktree venv): 60 passed. `content:check`: 0 errors (the 2 warnings are unused PhET sims, unrelated to this page).
- Answer checker (lib/answers.ts, run with tsx) on other correct forms: `(1-exp(1))/(n*(1-exp(1/n)))`, `(1/n)*(exp(1)-1)/(exp(1/n)-1)`, `y*yp^(-3)`, `y/(yp*yp*yp)`, `exp(-13*h/100)`, `((x0*m0 - y0)/m0)^2 + (y0 - m0 x0)^2`: all accepted.
- Problem 4 tolerances (writer's note): p4-b-diff at 0.3% of 0.01292 accepts [0.012881, 0.012959]: 0.01292, 0.012916, 0.0129 and 0.01291 are accepted, 0.013 rejected, as intended; no correct route to three or four significant figures is rejected. p4-b-percent and p4-c-drop (0.3%) reject the exact 1.292 and 0.01292, which is right for what is asked (see warning 1). p4-a-everest 1%: 0.27 and 0.273 accepted. p4-c-everest: the relative tolerance uses |value|, so -0.3 is accepted.
- `vars` ranges: p1-d-poly x in [0.2, 2]; p4-a h in [0.5, 10]; p5-a n in [2, 40]; p6 x0, y0, x, y in [1, 3] and m0, yp in [-2, -0.5]: every formula finite, and m0 < 0 matches the stated condition. Each listed mistake differs from the answer over its ranges, and each hint is true of its formula (checked: upper sum = e^{1/n} times the lower sum; the n + 1 term sum; the sign and placement slips in 6(a), 6(b); y/yp^2 missing one power; the sign of -y/yp^3; the "+1" and linear mistakes in 4(a)).
- Hints: none gives a result away (5(a) hint 3 gives only the standard geometric-sum formula; 6(c) hint 2 points at the common factor, not the result).
- Every solution ends with a check (a number, differentiation back, units, or a test function).

## Coverage and order
- Problems 1, 2(b), 4, 5, 6 in MIT's order; 0, 2(a), 3(a, b) are left out and the page says why (administration; Simmons 5.3/68, 8.6/5, 8.6/6). Verified against MIT's PDF.
- Points: P1 10 (2 x 5), P2 2 (MIT's share of 2(b)), P4 7 (2 + 3 + 2), P5 6 (split 3 + 1 + 2, labelled ours), P6 10 optional (2 + 2 + 3 + 3): MIT's. Scored 25 of MIT's 36 plus 10: the sum is right (3 + 10 + 4 + 6 + 7 + 6 = 36).
- Problem 4 is 3F-5(a) to (c) rewritten in full with MIT's numbers (0.13 per km, 1 kg/cm^2, 10 km, 100 m); Section S indeed has no 3F-5 (it goes from 3F-4 to 3F-6).
- Additions, all labelled as ours: 1(d) boxes and the proof of the conjecture, the Problem 2 box and "two students", the Problem 5 split, 6(a) m0 < 0, 6(c) form with the factor 2 and G, the 6(d) check that the constant is L^2. Problem 6 states the Set 3 result it uses; verified against MIT's PS3 (Problem 2).
- The Part I list matches MIT exactly: 2G-1b, 2b, 5, 6; 3A-1de, 2acegik, 3aceg; 3F-1cd, 2ae, 4bcd, 8b; 3B-2ab, 3b, 4a, 5; 4J-1 (set up only); Lecture 17 an exam; Lecture 19 work on PS 5. Linked to Sections E and S, not rewritten, as the run decision requires.

## Licensing
- No figures. No "rights reserved" or "courtesy" notice in the PS4 PDF, Sections E and S, or the lecture notes used. No OpenStax or LibreTexts. Simmons items left out. The wording is the page's own; phrases close to MIT are short (e.g. "Pretend ... 100 metres tall").

## Notes
- Citations: lecture-note pages are the printed footers (PDF page - 1), verified with pdftotext: Lec 14 p. 2 (third form of the MVT, "for some c, a < c < x"), Lec 15 p. 3 (uniqueness up to a constant) and p. 4 (the sin x cos x example and the shift by 1/2), Lec 16 p. 1 (dy/dx = -xy, y = e^{-x^2/2}), Lec 18 p. 4 ("pick any c_i"), Lec 9 p. 2 (e^x ~ 1 + x). The PS4 citations p. 1 (1b, 1c) and p. 2 (1e, 2b, 5, 6c) match the PDF's printed pages.
- No em dashes, no `## Summary`, internal links resolve (mean-value-theorem, antiderivatives, separation-of-variables, definite-integrals); fundamental-theorem-1 does compute the integral of e^x from 0 to 1 as e - 1, as the page says.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-21, by the page author)

- Finding 1 (warning): fixed. Problem 4(b) now ends with "Type the estimate itself, not the exact drop." and Problem 4(c) says "Type the linear estimate, not the exact value of part (b)." The other three boxes now say how exact they are: Problem 2 asks for the exact value (`p2-const`), Problem 5(b) says the box wants the exact value (`p5-b`), and Problem 4(c) says the Mount Everest box wants its value within 1% (`p4-c-everest`). No number, tolerance or answer changed, so the calcs file is unchanged.
- Findings 2 to 4 (info): no change needed.
- Checks after the fixes: `content:check` 0 errors, `calc:test -k 18-01-problem-set-4` passed, `test:answers` passed. Status set to `reviewed`.
