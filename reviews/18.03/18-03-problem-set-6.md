---
page: content/year-2/18.03/18-03-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_06pdf/ (read: local PDF 1803-ps6.pdf, pages 1-3 rendered)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_06_solpdf/ (read: local PDF 1803-ps6s.pdf, pages 1-3 rendered; opened only after the blind answers were written)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_7ex/ (read: 7C-1, 7C-2 under "7C. Applications to resonant frequencies")
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_7sol/ (read: 4 handwritten pages; 7C-1 and 7C-2 on page 3)
verdict: pass-with-notes
---

# Review: Problem Set 6 (18.03): a triangle wave on a spring, steps and delta functions, impulse and step responses, and convolution

Order followed: the stripped statements and MIT's sheet were read first and every part solved; the "My answers" list below was written to this file before MIT's solutions, the full page or its calcs file were opened.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 22(b), Solution, step "Check the result" | (not in MIT) | "It is the companion, for a sine input, of the lesson's resonant solution $\dfrac{t\sin\omega_0t}{2\omega_0}$ for a cosine input." On this page "the lesson" of Problem 22 is the Fourier-series lesson, which does not contain this formula; it is in resonance-and-beats (formula "Resonant solution", p. 6), linked only inside a closed hint. | "of the lesson's resonant solution $\dfrac{t\sin\omega_0t}{2\omega_0}$ for a cosine input." → "of the resonant solution $\dfrac{t\sin\omega_0t}{2\omega_0}$ for a cosine input in [the lesson on resonance](/courses/18-03/resonance-and-beats)." |
| 2 | info | Problem 22(d), step "Irrational values (our addition)" | MIT stops at "rational (but not an odd integer)" | Shows x_p is the only periodic solution for irrational ω₀. The claim is true, marked as ours, and stated with the right strength (no "everywhere"/"only" beyond what is proved). One step, "Sinusoids of different frequencies cannot cancel", is applied to an infinite series without a reason. | Optional: after "cannot cancel" add "(the series converges uniformly, since its coefficients fall like 1/n⁴, so averaging against cos ω₀t and sin ω₀t over a long time picks out the frequency ω₀ alone)". |
| 3 | info | Problem 23(d), step "The formula for f" | Printed windowed sum has third piece $(u(t-1)-u(t-2))(t-2)$ | Flags it as a misprint for $u(t-2)-u(t-3)$ | Verified on the rendered solutions page: the window repeats the second one; the page's correction is right and MIT's collected result $u(t)t - u(t-1) - u(t-2) - \cdots$ is unaffected. No change. |
| 4 | info | 22(b) "The resonant response", 23(d) "Its generalized derivative" | Not in MIT's solution (MIT gives only f in 23(d)) | Own results, `cite="mit"` with at= "... (our own solution)" | Acceptable as labelled. No change. |
| 5 | info | Problem 24(d), step 3 | $a_2\cdot2 + a_1\cdot2t + a_0t^2 = 0$ | "the lower terms would leave steps and ramps behind" | The $a_0$ term leaves $a_0t^2u(t)$. Optional: "steps and ramps behind" → "a step, a ramp and a parabola behind". |
| 6 | info | Problem 25 intro bracket and 25(c) hint | $\int_0^t w(t-\tau)q(\tau)\,d\tau$ | Follows MIT; the convolution lesson writes $\int_0^t f(u)\,g(t-u)\,du$ (first function at u, the mirror order) | Harmless by commutativity (25(c) shows it). Optional: in the bracket add "and puts the first function at $u$". |
| 7 | info | Problem 22(c) | ω_r = smallest resonant value | Keeps MIT's ω_r; resonance-and-beats uses ω_r for practical resonance $\sqrt{\omega_0^2-2p^2}$ | Defined in the statement; no change needed. |

## Arithmetic and answer checks
- Every final answer agrees with my blind answers and with MIT's solutions (see Blind solve). No disagreement.
- Recomputed: 4/(3π) = 0.42441; −4/(9π(4−9)) = 0.028294; 4/(π(0.81−1)) = −6.7013; 4/(π(1.21−1)) = 6.0630; −4/(9π(0.81−9)) = 0.017274; 4π = 12.566; v(1) = ¼(1 − e⁻¹(cos 1 + sin 1)) = 0.12292; ½e⁻¹ sin 1 = 0.15478; (−1 − e^−π)/2 = −0.52161. All match the page.
- Resonant response −(A/2m)t cos mt: ẍ = A sin mt + (Am/2)t cos mt; plus m²x gives A sin mt. Correct. Large-ω₀ limit x_p ≈ g/ω₀²: correct. 22(e) period for ω₀ = 3/2: lcm(2π, 4π/3) = 4π. Correct.
- sympy (scratch blind6.py): 25(a) (k cos ωt + ω sin ωt − k e^−kt)/(k²+ω²); 25(b) (1 − cos ω₀t)/ω₀²; t²∗t = t∗t² = t⁴/12; t∗t = t³/6; (t∗t)∗t = t∗(t∗t) = t⁵/120; v̇ − w = 0; 2ẅ+4ẇ+4w = 0 with ẇ(0) = ½; 2v̈+4v̇+4v = 1 with v(0) = v̇(0) = 0.
- `pytest tests/calc -k 18-03-problem-set-6`: 45 passed. `npm run content:check`: 0 errors; the only warning for this page is "no review file yet".
- Answer boxes: each `expr`/`value` equals its solution's result; `vars` keep every formula finite (w0 ∈ [1.2, 2.8] avoids 1 and 3; D ∈ [0.5, 3]); number tolerances are absolute (lib/answers.ts): 0.03 on −6.70/6.06 (about 0.5%) and 0.01 on 12.57 reject the obvious slips (sign, 2π, 6π, ω₀ not squared) and accept 3 to 4 significant figures.
- Every listed mistake hint checked against its formula and true, e.g. (1 − e^−t cos t)/4 has slope ¼ at 0; (1 − e^−t(cos t − sin t))/4 has slope ½ at 0; (k cos ωt − ω sin ωt − k e^−kt)/(k²+ω²) has slope (k²−ω²)/(k²+ω²) at 0; (k cos + ω sin − e^−kt)/(k²+ω²) equals (k−1)/(k²+ω²) at 0; t⁵/20 = t³∗t; t⁵/30 = ∫τ⁴/6; t⁴/3 = ∫tτ²; t³/2 = ∫tτ; 4/(π(1−ω₀²)) is negative for ω₀ > 1, where the response is in phase.
- Choice answers: p22-b 2, p22-c-shape 1, p22-d 2, p22-e 0, p23-a 3, p23-b 1, p23-c-f 1, p23-c-df 2, p23-d-f 0, p23-d-df 3, p25-c-equal 1, p25-d-equal 0: all correct; none answerable from units; Unicode only.
- No hint gives a result away (24(d) hint 2 names the Laplace route, not the polynomials).

## Coverage and order
- All four Part II problems and every part, in MIT's order, MIT's points (22: 5×4; 23: 4×3; 24: 4+4+4+12; 25: 4×6; total 80). Part I (8 + 0 + 8 + 0 = 16) listed and linked: Notes 7C-1, 7C-2 (checked in the Notes exercises and on page 3 of the handwritten solutions) and MIT's own I.24 with its printed answers. Edwards and Penney left out, as the course rules require.
- Site lecture mapping checked: fourier-series-particular-solutions = 17, convolution = 21, laplace-discontinuous-inputs = 22, impulse-inputs-delta-function = 23; `covers: [17, 21, 22, 23]` and `lecture: 23` consistent. The "time domain before Laplace" remark matches MIT's calendar box (L23 to L25 before L26 "Laplace transform").
- Own additions are marked as such: 22(b) resonant response, 22(d) irrational case, 22(e) period box, 23(d) derivative, the extra number boxes and the graphs.
- Claims about lessons checked: the Fourier-series lesson writes ω₀ and ω_n as stated; the convolution lesson writes u for the variable and has t²∗t in its quiz.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the sheet, the solutions or Notes section 7. All graphs are generated from formulas; no MIT figure redrawn. Wording is the page's own (at most close paraphrase of standard remarks such as the convolution "choosing" the transient). No OpenStax or LibreTexts. Notes exercises linked, not rewritten.

## Notes
- No em dashes; no `## Summary` printing answers.
- The sheet and solution PDFs carry no printed page numbers; the physical pages are used and are right (sheet: 22 on p. 1; solutions: 22 to 24(d)(ii) on p. 1, 24(d)(iii) and 25 on p. 2).

## Blind solve

### My answers (written before opening the full page, its calcs file or MIT's solutions)

- 22(a): with g = (4/π) Σ_{n odd} (−1)^((n−1)/2) sin(nt)/n², x_p = (4/π) Σ_{n odd} (−1)^((n−1)/2) sin(nt) / (n²(ω₀² − n²)), valid when ω₀ is not an odd integer.
- 22(b): ω₀ = 1, 3, 5, … (odd positive integers).
- 22(c): ω_r = 1. x_p ≈ (4/π) sin t/(ω₀² − 1): just below 1 a large negative multiple of sin t (antiphase with g); just above 1 a large positive multiple of sin t (in phase).
- 22(d): homogeneous solutions a cos ω₀t + b sin ω₀t added to the 2π-periodic x_p give a periodic sum iff ω₀ is rational. Answer: ω₀ rational and not an odd integer (ω₀ = p/q, period 2πq). If "periodic" is read as "of period 2π": ω₀ = 2, 4, 6, … For irrational ω₀ only x_p is periodic.
- 22(e): yes; for those ω₀ every solution x_p + c₁ cos ω₀t + c₂ sin ω₀t is periodic.
- 23(a): f = −t u(t); f′ = −u(t) (continuous at 0, no delta).
- 23(b): f = (1 − t)u(t); f′ = δ(t) − u(t).
- 23(c): f = (2t − 1)(u(t) − u(t−1)); f′ = 2(u(t) − u(t−1)) − δ(t) − δ(t−1).
- 23(d): f = t u(t) − Σ_{n≥1} u(t − n); f′ = u(t) − Σ_{n≥1} δ(t − n).
- 24(a): w = ½ e^−t sin t for t > 0.
- 24(b): v = ¼ − ¼ e^−t (cos t + sin t) for t > 0.
- 24(c): v̇ = ¼e^−t(cos t + sin t) − ¼e^−t(cos t − sin t) = ½e^−t sin t = w.
- 24(d): (i) D/2; (ii) D²; (iii) D³/2.
- 25(a): (k cos ωt + ω sin ωt − k e^−kt)/(k² + ω²).
- 25(b): (1 − cos ω₀t)/ω₀².
- 25(c): t²∗t = t∗t² = t⁴/12; equal.
- 25(d): t∗t = t³/6; (t∗t)∗t = t∗(t∗t) = t⁵/120; equal.

All convolutions and 24(a) to (c) checked with sympy (scratch script blind6.py).

### Comparison with the page (one line per answer id)
- p22-a-c1: page 4/(π(ω₀²−1)); mine the n = 1 term, same. Agree.
- p22-a-c3: page −4/(9π(ω₀²−9)); mine the n = 3 term, same. Agree.
- p22-b: page "an odd positive integer"; agree (MIT agrees).
- p22-c-below: page −6.70; mine −6.7013. Agree.
- p22-c-above: page 6.06; mine 6.0630. Agree.
- p22-c-shape: page antiphase; agree (MIT agrees).
- p22-d: page "a rational number that is not an odd integer"; agree (MIT agrees).
- p22-e: page "Yes"; agree (MIT agrees).
- p22-e-period: page 12.57 (4π); mine 4π = 12.566. Agree.
- p23-a: page −u(t); agree.
- p23-b: page −u(t) + δ(t); agree.
- p23-c-f, p23-c-df: page (u(t) − u(t−1))(2t − 1) and 2(u(t) − u(t−1)) − δ(t) − δ(t−1); agree.
- p23-d-f, p23-d-df: page u(t)t − u(t−1) − u(t−2) − ⋯ and u(t) − δ(t−1) − δ(t−2) − ⋯; agree.
- p24-a: page exp(−t) sin t/2; agree.
- p24-b: page (1 − e^−t(cos t + sin t))/4; agree.
- p24-d-1, p24-d-2, p24-d-3: page D/2, D², D³/2; agree.
- p25-a: page (k cos ωt + ω sin ωt − k e^−kt)/(k² + ω²); agree.
- p25-b: page (1 − cos ω₀t)/ω₀²; agree.
- p25-c, p25-c-equal: page t⁴/12, "the same function"; agree.
- p25-d-tt, p25-d, p25-d-equal: page t³/6, t⁵/120, "the same function"; agree.

COUNTS: errors=0 warnings=1 info=6

## Resolution (2026-11-21, by the page author)

1. Warning 1: the 22(b) check now names the resonant solution of [the lesson on resonance](/courses/18-03/resonance-and-beats), not "the lesson's".
2. Info 5: the 24(d) step now says the lower terms would leave a step, a ramp and a parabola behind.
3. The other info items need no change (the 22(d) argument is marked as our own and stated as a sketch).

`status` is now `reviewed`.
