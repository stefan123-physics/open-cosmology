---
page: content/year-3/8.044/8-044-problem-set-1.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps1/ (read: local PDF and pdftotext; the Problem 5 formula on p. 4 checked on the rendered PDF page)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss1/ (read only after the blind solve: local PDF and pdftotext; pages 1, 5 and 8 checked as rendered images)
verdict: pass-with-notes
---

# Review: Problem Set 1: six probability densities, from a doped semiconductor to photons in a cavity

## Blind solve

My answers were written into this file before the full page, its calcs file or MIT's solutions were opened. They are kept verbatim below.

### My answers
- p1a: P(x)=0 for x<0; P=0.8(1-e^{-x/l}) for 0<=x<d; jump 0.2 at x=d; P = 1 - 0.8 e^{-x/l} for x>d; P -> 1.
- p1b: <x> = 0.8 l + 0.2 d
- p1c: <x^2> = 1.6 l^2 + 0.2 d^2; Var = 0.96 l^2 - 0.32 l d + 0.16 d^2
- p1d: <e^{-x/s}> = 0.8 s/(s+l) + 0.2 e^{-d/s}
- p2a: a = b/pi
- p2b: P(x) = 1/2 + (1/pi) atan(x/b)
- p2c: <x> = 0 by symmetry (principal value; the integral is not absolutely convergent)
- p2d: x = +-b; half-width b
- p2e: <x^2> and Var diverge (infinite); cut-off integral = (2b/pi)(L - b atan(L/b))
- p3a: v = omega sqrt(x0^2 - x^2)
- p3b: p(x) = 1/(pi sqrt(x0^2 - x^2))
- p3c: most probable near x = +-x0, least probable x = 0, mean 0; P(|x|<x0/2) = (2/pi) asin(1/2) = 1/3 = 0.3333
- p4a: p(-hbar)=1/6=0.1667, p(0)=1/3=0.3333, p(hbar)=1/2=0.5
- p4b: steps of 1/6, 1/3, 1/2 at -hbar, 0, hbar; P(hbar/2) = 0.5
- p5a: p = (2 pi x0^2)^{-1/2} exp[-(x - 2 alpha x0 cos wt)^2/(2 x0^2)]
- p5b: mean 2 alpha x0 cos(omega t); variance x0^2
- p5c: Gaussian of fixed width x0 oscillating rigidly with amplitude 2 alpha x0, period T; peak 1/sqrt(2pi) = 0.3989 /x0
- p6a: <n> = a/(1-a)
- p6b: Var = a/(1-a)^2 = N(1+N) = N + N^2; factor 1+N over Poisson
- p6c: f(x) = (1-a) a^x; phi = -1/ln a = 1/ln(1+1/N) -> N + 1/2 ~ N; for N=10 phi = 10.4921

### Comparison (one line per answer id)
- p1-jump: the page's "jumps up by 0.2 and stays up" matches mine. Agree.
- p1-cum: the page's 1 - 0.8*exp(-x/l) matches mine. Agree.
- p1-mean: 0.8 l + 0.2 d matches mine and MIT p. 1. Agree.
- p1-var: 0.96 l^2 - 0.32 l d + 0.16 d^2 matches mine. MIT p. 1 prints -0.16 d^2 in its last line (confirmed on the rendered PDF). The page corrects this and says so. Agree with the page.
- p1-imp: 0.8/(1 + l/s) + 0.2 exp(-d/s) is algebraically identical to my 0.8 s/(s+l) + 0.2 e^{-d/s} and matches MIT p. 2. Agree.
- p2-a: b/pi. Agree (MIT p. 3).
- p2-cum: 1/2 + atan(x/b)/pi. Agree (MIT p. 3).
- p2-mean: choice 0. Agree. The page's remark on the symmetric limit matches my note. Checked: with the limits -L and 2L the integral is (b/2pi) ln 4 = (b/pi) ln 2.
- p2-half: b. Agree (MIT p. 3: x = +-b).
- p2-var: choice "both infinite". Agree (MIT p. 3).
- p2-cut: (2b/pi)(L - b atan(L/b)) matches mine. Agree.
- p3-speed: omega sqrt(x0^2 - x^2). Agree (MIT p. 4).
- p3-density: 1/(pi sqrt(x0^2 - x^2)). Agree (MIT pp. 4-5).
- p3-most: the turning points. Agree (MIT p. 5).
- p3-middle: 0.3333. Agree.
- p4-minus 0.1667, p4-zero 0.3333, p4-plus 0.5. Agree (MIT p. 6).
- p4-cum: 0.5. Agree.
- p5-density: (2 pi x0^2)^(-1/2) exp[-(x - 2 alpha x0 cos wt)^2/(2 x0^2)]. Agree (MIT p. 7).
- p5-mean 2 alpha x0 cos(omega t), p5-var x0^2. Agree (MIT p. 7 gives sigma = x0).
- p5-behave: a Gaussian of fixed shape swinging between -2 alpha x0 and 2 alpha x0 with angular frequency omega. Agree.
- p5-peak: 0.3989. Agree.
- p6-mean: a/(1-a). Agree (MIT p. 8).
- p6-var: N(1+N). p6-factor: 1+N. Agree (MIT p. 9).
- p6-env: (1-a) a^x. p6-phi: 1/log(1+1/N). p6-phi10: 10.49 (exact value 10.4921). Agree (MIT pp. 9-10).

None of the answers disagree. All 93 entries of calcs/8.044/8-044-problem-set-1.yaml pass (pytest tests/calc/test_calculations.py -k 8-044-problem-set-1: 93 passed).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1(c), variance step | Solutions p. 1, last line: 0.96 l^2 - 0.32 ld - 0.16 d^2 | +0.16 d^2, with a note in brackets on MIT's sign slip | None. I confirmed the slip on the rendered PDF; the note is correct and fair. |
| 2 | info | Problem 6(b), sum for the mean square | Solutions p. 8 label the variance part "c)" | Notes the wrong label; the part continues on p. 9 | None. Confirmed on the rendered p. 8. |
| 3 | info | Problem 2(d) | The sheet asks for "the values at which the density falls to one half" | Asks for the half-width as a distance (box = b); the solution gives x = +-b | None needed; the physics is the same. |
| 4 | info | Problem 2(c) | "<x> = 0 by symmetry" | The same, plus a remark (correctly hedged) that the integral converges only as a symmetric limit | None. The remark is right (checked numerically in calcs entry p2-mean-asym). |
| 5 | info | Problem 3, statement | MIT's wording of the pencil experiment and of the "time inversely proportional to speed" sentence | Paraphrased closely in places, as it has to be to keep the physics | Acceptable; no sentence is copied verbatim. |

## Arithmetic and answer checks
- Every answer box matches my blind answer (the same formula, or equal by value). I recomputed every numerical box value: 1/3 = 0.3333, 1/6 = 0.1667, 1/sqrt(2 pi) = 0.3989, 1/ln 1.1 = 10.4921.
- Numbers in the solutions, recomputed:
  - P just below and just above the jump for d = 1.5 l: 0.6215 and 0.8215.
  - P(2b) = 0.8524 (page: 0.85), leaving 14.8 % beyond (page: 15 percent).
  - Maximum of the Lorentzian: 1/pi = 0.318; half of it: 0.159.
  - Problem 4 variance: 2/3 - 1/9 = 5/9.
  - Problem 6 with a = 0.75: mean 3, variance 12, standard deviation 3.46 against 1.73 for a Poisson density, phi = 1/ln(4/3) = 3.476. The envelope weights 0.25 * 0.75^n in the plot match to every digit shown.
  - phi ~ N + 1/2 from the second-order expansion is correct.
- Second routes, checked:
  - The two-group variance, 0.8 l^2 + 0.16 (l - d)^2, expands to the same result.
  - The fraction-of-a-period route gives p(x) = omega/(pi |xdot|).
  - The phase route gives 1/3 for the middle half of the range.
- Every listed mistake differs from its answer, and every mistake hint is true of its formula. Checked:
  - a = b/(2pi) gives an area of 1/2.
  - 0.8/(1 + s/l) + 0.2 e^{-d/s} tends to 0.2 as s goes to infinity.
  - At b/2 the density is 4/5 of its maximum, and at sqrt(2) b it is 1/3.
  - (b/pi)(...) is the integral from 0 to L.
  - 2N^2 + N is <n^2>.
  - 1/log(N/(1+N)) is negative.
  - The 4 x0^2 and 2 x0^2 hints of Problem 5 are right.
- The vars ranges keep every formula finite and real (p3: x0 in [2,3] and |x| <= 1.5; p6: a in [0.1, 0.9] and N >= 0.5).
- Tolerances:
  - The 1 % tolerance on 0.3333, 0.1667, 0.5 and 0.3989 rejects the obvious wrong values.
  - p6-phi10 has a 0.5 % tolerance. It rejects N = 10 (4.7 % off) but accepts the approximation N + 1/2 = 10.5 (0.08 % off). This cannot be avoided while 3 significant figures are still accepted, and N + 1/2 is a fair answer at that precision (info only).
- Points: 20 + 20 + 15 + 15 + 15 + 15 = 100, and the part points add up in every exercise. MIT gives no points, and the page says so.
- No hint gives a final result away. The hints of 2(a) and 3(b) give the standard integrals (pi and pi/2), not the constant.

## Coverage and order
- All six MIT problems and all their parts are present, in MIT's order (1a-d, 2a-e, 3a-c, 4a-b, 5a-c, 6a-c). Only the due date is left out, as the page says.
- Every addition is labelled "our addition": P(x) beyond d, the second variance route, the remark on the order of the limits, the cut-off integral, the middle-half probability, the variance and P(hbar/2) in Problem 4, the peak height, the a = 0.75 numbers, the envelope box, phi for N = 10 and the 1/2 correction. The introduction lists them correctly.
- MIT's comments are summarised faithfully: in Problem 3, why p(x) does not depend on time, and the quantum figure; in Problem 5, the coherent state, the classical delta function and the laser.

## Citations
- Sheet (cite="mit"): Problem 1 p. 1, Problem 2 p. 2, Problems 3 and 4 p. 3, Problems 5 and 6 p. 4. All match the printed footers.
- Solutions (reading1), all matching the printed footers:
  - Problem 1(a) to (c): p. 1. Problem 1(d): p. 2.
  - Problem 2: p. 3.
  - Problem 3(a) and the start of 3(b): p. 4. The final p(x) of 3(b): p. 5.
  - Problem 4: p. 6. Problem 5: p. 7.
  - Problem 6(a): p. 8. The sums of 6(b): p. 9. Problem 6(c): p. 9. The large-mean limit: p. 10.
- The formulas are transcribed correctly, including the Problem 5 wavefunction (checked against the rendered sheet p. 4, not the garbled text).

## Licensing
- Neither PDF has an "All rights reserved" or "Courtesy of" notice (checked by grep and by eye).
- MIT's figures are not reproduced: every graph is a `<Plot>` computed from a formula. The quantum-oscillator figure on solutions p. 5 (no credit line) is only described.
- No sentence is copied verbatim from MIT; the only shared wording is standard terminology. No OpenStax or LibreTexts material.

## Notes
- Claims about the lesson, checked against content/year-3/8.044/one-random-variable.mdx: the sifting property, the Gaussian with mean a and variance sigma^2, Poisson variance = mean, and "the standard deviation measures the width" are all in the lesson. The links /courses/8-044/one-random-variable and /courses/8-05/coherent-states point to existing pages.
- The page-scoped symbol meanings (alpha, beta, gamma, xi, epsilon, phi, a, b, C, c, L, l, s, x-0, L-x and others) fit their uses on this page. phi is correctly called a pure number in 6(c).
- No em dashes and no `## Summary` section.

COUNTS: errors=0 warnings=0 info=6

## Resolution (2026-11-26, by the page author)

No errors or warnings to fix. The six info notes need no change: the two MIT slips are already noted on the page, and the other notes confirm the page. Status set to reviewed.
