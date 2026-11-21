---
page: content/year-2/18.03/18-03-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps7pdf/ (read: pdftotext and rendered PDF, both pages)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps7spdf/ (read: pdftotext and rendered PDF, both pages; opened only after the blind answers were written)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_3ex/ (read: exercise PDF text, 3A-9 and 3B-1 located)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/section-3-solutions/ (read: rendered pp. 2-3, handwritten)
verdict: pass-with-notes
---

# Review: Problem Set 7: rules of the Laplace transform, and impulse, step and ramp responses found with it

## Blind solve

### My answers (written before opening the full page, MIT's solutions or the calcs file)
Checked with sympy (scratch script, outside the repo).

- 26(a): L[f(at)](s) = (1/a) F(s/a). Check f = t^n: L[a^n t^n] = a^n n!/s^(n+1) = (1/a) n!/(s/a)^(n+1). For n = 3: 6a³/s⁴.
- 26(b): F G = double integral over x, y > 0 of f(x)g(y)e^{-s(x+y)}; x = t − τ, y = τ, Jacobian 1, region 0 < τ < t, t > 0; gives ∫_0^∞ e^{-st}(∫_0^t f(t−τ)g(τ)dτ)dt = H(s).
- 26(c): F(s) = (1 − e^{−s})/s for s ≠ 0, F(0) = 1; converges for every s (whole complex plane).
- 27(a): w(t) = (1/a) e^{−bt/a} u(t); v(t) = (1/b)(1 − e^{−bt/a}) u(t) for b ≠ 0; b = 0: v = t/a.
- 27(b)(i): x = t/b − a/b² + (a/b²) e^{−bt/a} (b ≠ 0); x = t²/(2a) (b = 0).
- 27(b)(ii): w * t gives the same; at a = 2, b = 1, t = 2: 2/e = 0.7358.
- 27(b)(iii): A = −a/b², B = 1/b, C = a²/b²; b = 0: x = t²/(2a).
- 28(a): w = (1/3) e^{−t} sin t.
- 28(b), D⁴ − I: w = (1/2)(sinh t − sin t).
- 28(b) as printed, D⁴ + I: w = (1/√2)[sin(t/√2)cosh(t/√2) − cos(t/√2)sinh(t/√2)] (w(0)=w'(0)=w''(0)=0, w'''(0)=1, w'''' + w = 0 checked symbolically).

### Comparison (one line per answer id)
- p26-a (choice (1/a)·F(s/a)): agrees; also MIT.
- p26-a-cube (6*a^3/s^4): agrees.
- p26-b-region (0 < τ < t): agrees; also MIT.
- p26-c ((1 − exp(−s))/s): agrees; also MIT.
- p26-c-region (every complex s): agrees; also MIT.
- p27-a-w (exp(−bt/a)/a): agrees; also MIT.
- p27-a-v ((1 − exp(−bt/a))/b): agrees (MIT's printed solution gives only w; the page's own solution, correctly marked).
- p27-b-i (t/b − a(1 − e^{−bt/a})/b²): agrees; also MIT.
- p27-b-i-zero (t²/(2a)): agrees; also MIT.
- p27-b-ii-num (0.736, tolerance 0.004): agrees (2/e = 0.73576).
- p27-b-iii-a (−a/b²), p27-b-iii-b (1/b), p27-b-iii-c (a²/b²): agree; also MIT.
- p28-a (e^{−t} sin t / 3): agrees; also MIT.
- p28-b ((sinh t − sin t)/2): agrees; also MIT's final line.
- p28x-w (D⁴ + I): agrees with mine (same expression).
No disagreement with MIT anywhere.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 26(c) solution, step "The region of convergence" | (no comparison with L(1)) | "Compare $\mathcal{L}(1) = \dfrac{1}{s}$, which needs $s > 0$." right after "exists for every $s$, real or complex" | "which needs $s > 0$." → "which needs the real part of $s$ to be positive." (consistent with the complex-plane answer and the box choice "s with real part larger than 0") |
| 2 | warning | Problem 27(a) statement | Asks for w and v of aD + bI; no separate b = 0 case | "For $v$ take $b \ne 0$ first, then say what happens for $b = 0$." (an addition not marked as ours in the statement) | "then say what happens for $b = 0$." → "then say what happens for $b = 0$ (this case is our own addition)." |
| 3 | info | Problem 27(a) solution, Formula "Unit step response" | n/a | `at="Part II, Problem 27(a) (our own solution)"` has no page | add ", p. 2", as the "Transform of a generalized derivative" formula has |
| 4 | info | Problem 26(c), plot | n/a | dashed 1/s drawn for s > 0.14, peak 7.14, range top 7 | harmless (clipped); `s > 0.15` keeps it inside |

Claims about MIT's documents, checked on the rendered PDFs:
- 26(c) misprint: confirmed. The sheet prints "f(t) = 0 for t > 0"; MIT's solution splits the integral at 1 (∫_1^∞ 0·e^{−st}). The page's note is correct.
- 28(b): confirmed. The sheet prints "(b) D⁴ + I". MIT's solution factors s⁴ + 1 with r = (1+i)/√2, says "This is not pretty, and (per the web) I don't expect more", then "[What I intended to ask was for the weight function for D⁴ − I ... I apologize for the mistake.]", with [14] points on (b).
- MIT slip in 28(b): confirmed. MIT prints "a = b = 1/4" and "u(t)(1/4)(e^t + e^{−t} + ie^{it} − ie^{−it})". Cover-up at s = −1 gives 1/((−2)(2)) = −1/4, so b = −1/4 and the bracket should read e^t − e^{−t}; MIT's final "(1/2)(sinh t − sin t)" is correct. The page's note says exactly this.
- The 28(b) split is a sound choice: MIT's own solution and its 14 points are for D⁴ − I, so scoring D⁴ − I follows MIT's solution; the printed operator is kept as an optional problem, clearly labelled as ours (points and solution) and flagged in the statement. Our D⁴ + I answer was checked independently (blind solve) and by the calcs (fourth derivative, Laplace transform by numerical integration).

## Arithmetic and answer checks
- Every number recomputed: F(1) = 0.6321; v(2) = 0.6321 and w(2) = 0.1839 (a = 2, b = 1); 2/e = 0.736; decomposition test 0.5 = 0.5; w(2) = 1.359 (D⁴ − I), 1.308 (D⁴ + I), t³/6 = 1.333, gaps 0.025 and 0.026 ("about 0.025", fine); hint numbers 1/3 and 4/3 for A = −1/b² at a = 2, b = 1, s = 1. All correct.
- Every listed mistake hint is true of its formula: 6a⁴/s⁴ is F(s/a) alone; (e^{−s} − 1)/s is negative for s > 0; (1 − e^{−bt/a})/(ab) has slope 1/a² at 0; t/b + a(1−e^{−bt/a})/b² has slope 2/b; (cosh t − sin t)/2 is 1/2 at 0 and comes from c₂ = +1/4; (sinh t + sin t)/2 has slope 1; (sinh t − sin t)/4 has third derivative 1/2; (cosh t sin t − sinh t cos t)/4 is the D⁴ + 4I response (roots ±1 ± i); the unscaled D⁴ + I form has w'''(0) = √2; the "+" form has slope 1 at 0. All true.
- Optional-problem derivation checked step by step: constants −ρ/4 at each root, signs of the decomposition, w = −Re(r sinh rt), real part (1/√2)(sinh α cos β − cosh α sin β), and the three derivatives in "Four derivatives".
- `vars` ranges: positive and away from singular points (b ∈ [0.5, 2] keeps 1/b finite; s ∈ [0.3, 4] avoids 0 in p26-c). Number tolerance 0.004 on 0.736 (0.5%) accepts three significant figures and rejects the listed slips.
- Choice boxes: Unicode strings, not answerable from units.
- In the worktree: `npm run content:check` 0 errors (only "no review file yet" for this page); `npm run calc:test -- -k problem-set-7` 250 passed.
- No hint gives a result away; the D⁴ + I hint 1/p'(ρ) is a method, not the answer.
- Every solution ends with a check (limit, number, second route or derivative test).

## Coverage and order
- Part II: Problems 26 (a, b, c), 27 (a, b(i), b(ii), b(iii)), 28 (a, b) in MIT's order; points 10/10/6, 4/6/6/6, 6/14 = MIT's (68 total). Optional D⁴ + I after, marked ours.
- Part I: MIT 26 (L[e^{zt}], described, not solved), 27 (Notes 3A-9 including the second complex-exponential computation, 3B-1; EP 4.3: 1, 5 left out), 28 (EP only). Part I points 6 + 10 + 12 = 28 match MIT's solutions. Notes links verified: 3A-9 is on p. 2 and 3B-1 on p. 3 of the handwritten section-3 solutions; I.26 at the top of the Part II solutions is the complex-exponential 3A-9(a) computation, as the page says.
- Lecture mapping and `covers` [19–23] match the lessons' `lecture:` values.
- Formula `at=` citations checked against the solutions PDF (26, 27(a), 27(b)(i) on p. 1; 27(b)(ii) set-up at the foot of p. 1, its integration by parts on p. 2; 27(b)(iii) and 28 on p. 2) and the sheet (27(a) rule on p. 2): correct.

## Licensing
- No rights-reserved or courtesy notice in either PDF. No figure reused; the three plots are generated from formulas. Wording is the page's own; quoted MIT phrases are short ("not pretty"). Edwards and Penney exercises left out.

## Notes
- The own-words reconciliation of L(ẋ) = sX with sF(s) − f(0) in the Problem 27 statement is correct.
- Cross-references checked: Problem Set 6, 24(a) gives (1/2)e^{−t} sin t for 2D² + 4D + 4I, and 24(c) shows v̇ = w; the convolution lesson uses u, v and the other order. Correct.
- No em dashes, no `## Summary`.

COUNTS: errors=0 warnings=2 info=2

## Resolution (2026-11-21, by the page author)

1. Warning 1: the 26(c) region of convergence now says L(1) needs the real part of s to be positive.
2. Warning 2: the 27(a) statement now marks the b = 0 case as our own addition.
3. Info 3: the "Unit step response" citation now gives p. 2.
4. Info 4: the 26(c) dashed curve now starts at s = 0.15, so it stays inside the graph.

`status` is now `reviewed`.
