---
page: content/year-2/18.03/18-03-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps4pdf/ (read, 4 pages; pdftotext)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps4spdf/ (read, 2 pages; page 2 is the OCW footer only)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_2ex/ (read; Notes exercises 2C-8 and 2F-6 checked)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_2sol/ (read as images: handwritten scan without a text layer)
  - 18.03 Lecture 13 transcript, 2fe63eb0..._9KbpbBMThTE.pdf (read, 17 pages)
  - 18.03 Lecture 14 transcript, 3408f054..._Y9_zrupnz0Q.pdf (read, 15 pages)
  - 18.03 Lecture 8 transcript (not opened: listed in readings, but no Formula cites reading1)
verdict: pass-with-notes
---

# Review: Problem Set 4: forced oscillations, complex gain and practical resonance

The blind solve was done first, from the stripped statements and MIT's sheet only. The answers are in the section "Blind solve" at the end and were written down before the page, the calcs file and MIT's solutions were opened. All 22 answer boxes agree with my answers and, up to 15(b), with MIT's solution.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | 13(a), third listed mistake of `p13-a` (divides by 9) | n/a | hint: "The denominator is the squared size of p(α) = 5 + 4i, which is 25 + 16, not a number from the real part alone." | 9 is 5 + 4, not a number from the real part alone (that would be 5 or 25). Replace "not a number from the real part alone" with "not 5 + 4". |
| 2 | warning | 15(b), first listed mistake of `p15-b` (`-t^2 - 3`) | n/a | hint: "Check the equation: the derivative of −t² − 3 is −2t, which has no t³ in it." | The check as written makes no sense (a derivative does not need a t³ term). Replace with: "Check the equation: with x = −t² − 3, x''' − x' = 0 − (−2t) = 2t, not t² + 1." |
| 3 | info | 13(a) solution, note in brackets | MIT writes z_p = e^{(3+4i)t}/(5+4i) = (5+4i)/(25+16)·e^{3t}(cos 4t + i sin 4t), then x_p = e^{3t}(5/41 cos 4t + 4/41 sin 4t), then x = e^{3t}(3/25 cos 4t + 4/25 sin 4t) + ce^{−2t} | flags both slips and says the x_p line is right | Correct as written, checked against the PDF text (pdftotext -raw): 1/(5+4i) is (5−4i)/41, and (3/25, 4/25) gives ẋ + 2x = 1.24 at t = 0 (calcs `p13-a-mit-slip`). No change. |
| 4 | info | 16(d) statement | MIT asks the student to "Write down a formula for the complex gain H(ω) for general values of b, k, and ω" | gives H(ω) = k/(k − ω² + ibω) in the statement | Removes a small piece of what MIT asks. That is acceptable because the boxes ask for the consequences. Optional: "Write the complex gain H(ω) for general b and k (the formula of Problem 14 with 4 and ½ replaced by k and b)." |
| 5 | info | `p16-d-gain` vars `k: [1, 9], b: [0.2, 2]` | n/a | the listed mistakes k/b and 1/b equal √k/b at k = 1, and √k·b equals it at b = 1, both inside the ranges | Five random points will practically never all land there, so this is not an error. For ranges where every listed mistake differs everywhere: `k: [2, 9], b: [0.2, 0.8]`. |
| 6 | info | Formulas of 15(c) and 16(a) to (d), `cite="mit" at="Problem … (our own solution)"` | n/a | no page number | Optional: add "p. 2" (15(c)) and "p. 3" (16), e.g. `at="Problem 16(b), p. 3 (our own solution)"`. |
| 7 | info | frontmatter `source.readings[0]` (Lecture 8 transcript) | n/a | listed but never cited by a Formula | Acceptable as a reading (the second hint of 13(b) points to Lecture 8's identity). |

## Arithmetic and answer checks
- I recomputed every value box and formula box in Python (`.venv`): the 13(a) x_p; 0.5; π/4 = 0.785398; 4π/√7 = 4.749642; 1/√2 = 0.707107; 0.5; 0.5; x_h with b = −3/(2√7) = −0.566947; gain 4; π/4; H, g(ω), tan φ; t e^{−t}; −t³/3 − 3t; e^{2t}(t²/10 − 9t/50 + 111/500); √(31/8) = 1.968502; 32/√63 = 4.031621; (√65 − 1)/4 = 1.765564; 4√2/ω = 3.203992; √k/b. All agree with the page.
- Tolerances are absolute (`numberTolerance` in `lib/answers.ts`). Each one accepts an answer to 3 significant figures and rejects the obvious slips: 0.002 in 16(a) rejects ω = 2, and 0.005 rejects a largest gain of 4.
- I checked each listed formula mistake against its hint:
  - p13-a: the 3 + 4i divisor differs from the answer by at least 15 % on [0.1, 0.6]. The sign hint is true. For /9, ẋ + 2x = 41/9 at 0 (true).
  - p13-e: with the sine sign flipped, ẋ_h(0) = 1 (true). Forgetting to differentiate e^{−t/2} gives b = −1/√7 (true). With the cosine only, ẋ_h(0) = 1/4 (true).
  - p14-b-gain: all three hints are true, including the gain of 1 at ω = 0.
  - p14-b-tan: all three hints are true.
  - p15-a: both hints are true (t²e^{−t}/2 gives ẋ + x = t e^{−t}).
  - p15-b: #2 gives t² − 5 and #3 gives t² − 1 (true); for #1 see row 2 of the table.
  - p15-c: both hints are true. For (t²+1)/10 the difference −0.18t + 0.122 is zero only at t = 0.678, outside the vars range.
  - p16-d: at k = 4, b = 0.5 the mistakes give 8, 2 and 1 (true).
- The choice boxes p14-b-complex and p16-d-rel cannot be answered from units alone, and their choices use Unicode, no backslash TeX.
- Every part ends with a check (a substitution, a limit or a number). Verified:
  - 13(a): 31/41 + 10/41 = 1.
  - 13(b): −½ + ½ + 1 = 1.
  - 13(c): MIT's average gap (14.19 − 2.36)/5 = 2.366, doubled 4.732, is 0.37 % from 4.7496. The page's "about half a per cent" is acceptable.
  - 14(a): substituting 4 sin 2t works.
  - 15(c): 10a = 1, 18a + 10b = 0, and 20/50 − 81/50 + 111/50 = 1.
  - 16(a): D_min = 63/64. The lecture's form √(ω₀² − 2p²) with p = ¼ gives √(31/8).
  - 16(b): the phase lag at ω_r is 82.76° (page: "about 82.8°"), and 4 − ω² = ω/2 = 0.88278.
  - 16(c): |p| = 1.24849. The minimum of Im H is −4.0157 at ω = 1.984, so "the lowest point is near there" is true.
  - 16(d): for m = 1 the practical resonance condition is ω_r² = k − b²/2 (from minimising (k − u)² + b²u), as the page says.
- Points: 4+4+4+4+5 = 21, 8+8 = 16, 6+6+6 = 18 and 10+6+4+6 = 26, 81 in all. MIT's points for 13, 14, 15(a) and 15(b) match its solutions, and the Part I points 3+8+5+4 = 20 match.
- Calcs file: each entry tied to an answer box takes its own route (convolution integrals, numerical roots, real coefficients). I did not run `npm run calc:test`, but I recomputed every expected value and all of them match.

## Coverage and order
- Part II: Problems 13 (a to e), 14 (a, b), 15 (a to c) and 16 (a to d) are all there, in MIT's order and with the same physics. Each time a Mathlet measurement is replaced by a computation, the page says so. The mass m = 1 for the Amplitude and Phase Mathlet is what MIT's solution uses (its equation is ẍ + ½ẋ + 4x = 4 cos 2t).
- MIT's solutions do stop after 15(b) (PDF p. 2 holds only the OCW footer). The page says so and marks 15(c) and 16 as its own.
- Part I: Notes exercises 2F-6 b, c, d and 2C-8 c, d exist in the Notes exercise PDF with those letters:
  - 2F-6: b) y''' + y'' − y' + 2y = 2 cos x, c) y'' − 2y' + 4y = eˣ cos x, d) y'' − 6y' + 9y = e^{3x}.
  - 2C-8: c) y'' + y' + y = 2x eˣ, d) y'' − y = x², y(0) = 0, y'(0) = −1.
- The Notes solutions PDF (a handwritten scan) has 2C-8 on PDF p. 6 and the 2F group from p. 10, so "where it gives one" is fair. Part I 14 (d³x/dt³ − x = e^{2t}) is restated, with a pointer to MIT's printed answer (e^{2t}/7 + …, which agrees with p(2) = 7). The Edwards and Penney items are left out, as the course rules say.
- Lecture links: Lecture 7 (`sinusoidal-input-response`, the Formula "Polar form of a reciprocal") and Lecture 8 (the sine and cosine identity) are the right site lectures. `covers: [8, 10, 12, 13, 14]` matches the lessons' `lecture:` fields.
- Transcript citations. The OCW transcripts have no printed page numbers, so the page numbers are PDF pages.
  - Lecture 13, p. 4: the exponential input theorem (yes, "exponential input" four times on p. 4).
  - Lecture 13, pp. 9–10: the exponential shift rule (yes).
  - Lecture 13, pp. 13–14: the resonant ERF (yes: p. 13 puts p'(a) in the denominator, p. 14 gives the formula x e^{ax}/p'(a) and its proof).
  - Lecture 14, p. 15: practical resonance ω_r = √(ω₀² − 2p²) (yes, "omega nought squared minus two p squared" on p. 15).
- Sheet page citations are correct: Part I is on p. 1, Problems 13 to 15 on p. 2, Problem 16 on p. 3 (calcs).

## Licensing
- The sheet, the solutions and the Notes exercises have no "rights reserved" or "courtesy" notice (grep). No figure is reproduced; the Mathlets are only named. MIT's measured numbers (the 13(c) zeros, the 13(d) readings) are quoted and credited to MIT. The statements are in the page's own words, with no copying beyond short standard phrases. No OpenStax or LibreTexts material.
- No em dashes and no `## Summary`.

## Notes
- No hint gives a result away. The first hint of 16(b) asks "What is tan 45°?", which is fine. The 15(c) hint names the shift rule but not the coefficients.
- I did not check symbol entries one by one and did not run `content:check`.
- The Notes solutions PDF has no text layer, so I checked it by rendering pages as images: 2C-8 d is on p. 6, and 2F-1 to 2F-3 are on p. 10. I did not find the page with 2F-6 itself; the page's wording "where it gives one" allows for that.

## Blind solve

### My answers (written before opening the full page, MIT's solutions or the calcs file)
- 13(a): x_p = e^{3t}(5 cos 4t + 4 sin 4t)/41; general x = x_p + c e^{-2t}.
- 13(b): a = b = 1/2; A = 1/sqrt2 = 0.70711, phi = pi/4 = 0.78540; general x = (cos t + sin t)/2 + e^{-t/2}(c1 cos(sqrt7 t/2) + c2 sin(sqrt7 t/2)).
- 13(c): pseudoperiod 4 pi/sqrt7 = 4.74964.
- 13(d): amplitude 1/sqrt2 = 0.70711; x_p(0) = 0.5; xdot_p(0) = 0.5.
- 13(e): x_h = -e^{-t/2}( (1/2) cos(sqrt7 t/2) + (3/(2 sqrt7)) sin(sqrt7 t/2) ).
- 14(a): gain 4; phase lag pi/2, time lag pi/4 = 0.78540.
- 14(b): H = 4/(4 - w^2 + i w/2); g = 4/sqrt((4 - w^2)^2 + w^2/4); tan phi = w/(2(4 - w^2)) = w/(8 - 2w^2).
- 15(a): x_p = t e^{-t}; general (t + c) e^{-t}.
- 15(b): x_p = -t^3/3 - 3t; general + c1 + c2 e^t + c3 e^{-t}.
- 15(c): x_p = e^{2t}(t^2/10 - 9t/50 + 111/500); general + c1 + c2 e^{-t/2}.
- 16(a): w_r = sqrt(31/8) = 1.96850 (not 2); max gain 32/sqrt63 = 4.03162.
- 16(b): w = (sqrt65 - 1)/4 = 1.76556.
- 16(c): gain there 4 sqrt2/w = 3.20399.
- 16(d): phase lag pi/2 iff w^2 = k (independent of b); gain there k/(b w) = sqrt(k)/b (2/b for k = 4, w = 2); the strut stays on the negative imaginary axis, only its length changes with b.

### Comparison (after opening the page, MIT's Part II solutions and the calcs file)
- p13-a: page exp(3t)(5cos4t+4sin4t)/41 = mine = MIT's x_p line. Agree.
- p13-b-a: 0.5 = mine = MIT. Agree.
- p13-b-phi: 0.7854 = mine = MIT (pi/4). Agree.
- p13-c: 4.7496 = mine = MIT (4 pi/sqrt7). Agree.
- p13-d-amp / p13-d-x0 / p13-d-v0: 0.7071 / 0.5 / 0.5 = mine = MIT. Agree.
- p13-e: page formula = mine = MIT (a = -1/2, b = -3/(2 sqrt7)). Agree.
- p14-a-gain / p14-a-lag: 4 / 0.7854 = mine = MIT. Agree.
- p14-b-complex (choice 0, 4/(4 - w^2 + i w/2)), p14-b-gain, p14-b-tan: = mine = MIT. Agree.
- p15-a: t e^{-t} = mine = MIT. Agree.
- p15-b: -t^3/3 - 3t = mine = MIT. Agree.
- p15-c (own solution, no MIT): e^{2t}(t^2/10 - 9t/50 + 111/500) = mine. Agree.
- p16-a-wr / p16-a-gmax (own): 1.9685 / 4.0316 = mine. Agree.
- p16-b (own): 1.7656 = mine. Agree.
- p16-c (own): 3.204 = mine (4 sqrt2/w = 3.20399). Agree.
- p16-d-gain (own): sqrt(k)/b = mine. Agree. p16-d-rel: choice 0 "w^2 = k, whatever b is" = mine. Agree.

COUNTS: errors=0 warnings=2 info=5

## Resolution (2026-11-21, by the page author)

1. Warning 1: the third p13-a mistake hint now says the denominator is 25 + 16, "not 5 + 4".
2. Warning 2: the first p15-b mistake hint now checks the equation: with x = −t² − 3, x''' − x' = 2t, not t² + 1.
3. Info: the `p16-d-gain` ranges are tightened to k in [2, 9], b in [0.2, 0.8], so every listed mistake differs from the answer everywhere. The other info items are left as they are.

`status` is now `reviewed`.
