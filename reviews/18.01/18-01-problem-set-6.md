---
page: content/year-1/18.01/18-01-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps6/ (read: pdftotext and the rendered PDF pages, for the pi and root signs)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec23/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec24/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/e_exrcs_scsn_1_7/ (read, notices only)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/s_solutns_exrcis/ (read, notices only)
verdict: pass
---

# Review: Problem Set 6: root-mean-square voltage, radioactive decay and Simpson's rule

## Blind solve

### My answers (written before opening the full page)
- p2: RMS = C/sqrt(2) (mean of sin^2 over a period 1/60 s is 1/2).
- p3a: 1 - 1/3 = 2/3 = 0.667.
- p3b: (1/4) * int_0^sqrt2 (2 - x^2) dx = (1/4)(4 sqrt2/3) = sqrt2/3 = 0.4714.
- p3c: W = 1/a.
- p3d: 1 - e^{-aT} = 1/2 at T = 1 gives a = ln 2 = 0.693147, W = 1/ln 2 = 1.442695; P([1,2]) = ln2 * int_1^2 e^{-t ln2} dt = e^{-a} - e^{-2a} = 1/2 - 1/4 = 0.25.
- p4a: C = y1. p4b: area = 2Ah^3/3 + 2Ch = (h/3)(2Ah^2 + 6C), B drops out by symmetry. p4c: 2Ah^2 = y0 - 2y1 + y2. p4d: (h/3)(y0 + 4y1 + y2).
- p5a: Simpson n = 4: 0.978219 (table 1, 0.995185, 0.923880, 0.634393, 0). p5b: n = 8: 0.977503. Exact (scipy quad) 0.977451; sqrt(pi/2) * 0.977451 = 1.225054, so MIT's printed 1.22505 is sqrt(pi/2) times the integral (slip confirmed independently).

### Comparison (one line per answer id)
- p2-rms: page C/sqrt(2); mine C/sqrt(2). Agree.
- p3-a: page 0.667 (2/3), tol 0.001; mine 2/3. Agree.
- p3-b: page 0.471 (sqrt2/3), tol 0.001; mine 0.47140. Agree.
- p3-c: page 1/a; mine 1/a. Agree.
- p3-d-a: page 0.6931 (ln 2), 0.5%; mine 0.693147. Agree.
- p3-d-w: page 1.4427 (1/ln 2), 0.5%; mine 1.442695. Agree.
- p3-d-p: page 0.25, tol 0.001; mine 1/4. Agree.
- p4-a: page y1; mine y1. Agree.
- p4-c: page y0 + y2 - 2*y1; mine y0 - 2y1 + y2. Agree (identical).
- p5-a: page 0.978219, tol 5e-6; mine 0.97821911. Agree.
- p5-b: page 0.977503, tol 5e-6; mine 0.97750347. Agree.
- p4-b and p4-d (show parts, no box): page's derivation (h/3)(2Ah^2 + 6C) and substitution to (h/3)(y0 + 4y1 + y2) matches mine step for step.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 5 intro | "The exact answer to five decimal places is 1.22505" | Integral is 0.97745; MIT's 1.22505 is sqrt(pi/2) times the integral; correction flagged as ours | None. Verified independently: scipy quad gives 0.97745142, and sqrt(pi/2) x 0.97745142 = 1.225054, which matches MIT's 1.22505 to all printed digits. The slip claim is correct and fairly worded. |
| 2 | info | Problems 4 and 5 | No split of the 6 and 4 points | Split 1+2+2+1 and 2+2, labelled "ours" in How to answer | None. |
| 3 | info | Problem 3(c) | No condition on a | "a > 0 (our addition)" | None; needed for convergence and disclosed. |
| 4 | info | Part I list | "Lecture 25 ... Trigonometric integrals" | Lecture 27, with the reason | None. Checked against _course.json: 25 = Exam 3 Review, 27 = Trig Integrals. |

## Arithmetic and answer checks
- Every number on the page recomputed in Python (independently of calcs): period 1/60 s; 240pi/60 = 4pi; integral of sin^2 over a period 1/120; 1/sqrt2 = 0.7071; 120 sqrt2 = 169.7; 4 sqrt2/3 = 1.886; slip value 4/3 and 1/3; (1 - e^-10)/2 = 0.49998; ln 2 = 0.6931, 1/ln 2 = 1.4427; 1/2 + 1/4 + 1/4 = 1; p4(b) check [x^3 + 2.5x^2 + 2x] = 5.5 - (-0.5) = 6; p4(c) check y = x^2 gives 2; p4(d) checks 2h and 2/3.
- Problem 5 tables: a = 1.253314, a/4 = 0.313329, a/8 = 0.156664, all t values, all cos(t^2) values to 6 d.p. correct; weighted sums 9.366071 and 18.718438 (weight-4 sum 3.152881, weight-2 sum 2.553458); Delta x/3 = 0.1044428 and 0.0522214; errors 0.000768 and 0.000052; ratio 14.8, "about 15" fine; Lecture 24 notes p. 5 do state error of order (Delta x)^4.
- Answer boxes: every expr/value equals its solution's result; vars ranges finite (a in [0.5, 3]; C in [50, 400]; y ranges keep each listed mistake distinct from the answer, e.g. (y0 + y2)/2 in [4, 6] vs y1 in [10, 12]). Each mistake hint is true of its formula (C^2/2 is the mean square; 2C/pi the mean of |V|; 0 the mean of V; -1/a sign slip; y2 - y0 = 2Bh; y0 + y2 - y1 removes C only once; etc.).
- Tolerances: p3-a/p3-b at 0.001 accept 3-d.p. answers and reject 1/3 and 1/2-type slips; p5 at 5e-6 accepts six-decimal answers from unrounded work.
- Hints: none gives a result away (p3-d hint 1 says only that no fraction is left; p5 hint 2 gives the Simpson weights, which are the method, not the answer).
- Every solution ends with a check (limit, units, numeric example or error comparison).
- Calcs file covers every number and every answer box, with independent routes (numerical integration, Lagrange parabola, numerical root solve). Not run here; values match my own computation.

## Coverage and order
- MIT Part II Problems 2, 3(a)-(d), 4 (four steps) and 5 (four and eight intervals) all present, in MIT's order, same physics. Problems 0 and 1 left out with stated reasons (administration; Simmons textbook not open); Part II total 3 + 7 + 4 + 6 + 6 + 4 = 30 matches MIT, page scores 20.
- Part I list matches MIT's sheet exactly: 4B-2eg, 5; 4C-1a, 2, 3; 4J-3; 4D-2, 3, 5; 3G-1ad, 4; 5B-9, 11, 13, 16; 5C-5, 7, 9, 11. Simmons 249/5, 6, 15 correctly noted as left out.
- Citations: PS6 printed p. 1 holds Problem 2, p. 2 holds Problems 3 to 5, as cited. Lecture 23 notes: average-value formula on printed p. 1, "probability = part/whole" on printed p. 4. Lecture 24 notes: parabola area (2 Delta x)(y0 + 4y1 + y2)/6 on printed p. 3 (equal to the page's h/3 form with h = Delta x), Simpson's rule on p. 4, error order (Delta x)^4 on p. 5. All correct (printed footer numbers, OCW cover page excluded).
- Linked lessons volumes, average-value-and-probability, numerical-integration, trig-integrals exist in the worktree.

## Licensing
- No "rights reserved" or "Courtesy of" notice in PS6, Lecture 23/24 notes, or Sections E/S (grep). No MIT figure redrawn (the sketch in 4(a) is described in words only). Statements are reworded; MIT's remark about symmetry and looking ahead is paraphrased and attributed. Section E/S exercises are linked, not copied. No OpenStax or LibreTexts.

## Notes
- No em dashes; no "## Summary"; the page has 29 symbol meanings scoped to it in data/symbols.json (content:check not run by me).
- Problem 5 tolerance 5e-6 means a reader who rounds a to 1.2533 lands about 1e-5 off and is refused; the page warns explicitly not to round, so this is acceptable (info, not counted separately).

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

No errors or warnings; the four info items need no change (the reviewer confirmed the Problem 5 slip note independently). Status set to reviewed.
