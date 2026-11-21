---
page: content/year-2/18.03/18-03-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps3apdf/ (read, pdftotext)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_03_iipdf/ (read from the PDF page images; pdftotext garbled)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps3spdf/ (read, text and PDF images; opened only after the blind answers were written)
  - 18.03 Lecture 5 transcript 0a544cf76ef5c409ba87ad1309c86e9a_te6Mplq3DCU.pdf (read, p. 9 checked)
  - 18.03 Lecture 9 transcript 1fd3fae817756ec8d0326808c7f918a4_vP-oRQqmeg4.pdf (read, p. 18 checked)
  - 18.03 Lecture 10 transcript 43b495023daa3a460d0c1eab841ec11f_YQ7HEE8-OfA.pdf (read, p. 15 checked)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_1ex/ and mit18_03s10_2ex/ (read: 1E-1, 2C-1, 2G-1)
verdict: pass-with-notes
---

# Review: Problem Set 3: hunting oryx, linearizing near equilibrium, a saloon door and its damping

The blind solve was done first, from the stripped statements and MIT's two sheets only. My answers were written to this file before the page, its calcs file or MIT's solutions were opened.

## Blind solve

### My answers (written before opening the full page, calcs or MIT solutions)

- p8a: a = 0 gives the logistic equation ẏ = y(1 − y) with stable equilibrium y = 1 (one kilo-oryx); −a removes a constant number a of kilo-oryx per year, independent of y.
- p8b: equilibria y = (1 ± √(1 − 4a))/2. a < 1/4: two; upper (1 + √(1−4a))/2 stable, lower (1 − √(1−4a))/2 unstable. a = 1/4: one, y = 1/2, semi-stable. a > 1/4: none.
- p8c: a = 0.1875 = 3/16: stable 3/4 kilo-oryx = 750 oryx; critical 1/4 kilo-oryx = 250 oryx.
- p8d: five kinds: y > 3/4 decreasing to 3/4 (blows up to +∞ at some finite earlier time); y ≡ 3/4; 1/4 < y < 3/4 increasing from 1/4 (t → −∞) to 3/4 (t → +∞); y ≡ 1/4; y < 1/4 decreasing from 1/4 (t → −∞), crossing 0 (extinction) and going to −∞ in finite time.
- p8e: a = y − y² (equivalently y² − y + a = 0), a parabola with vertex (1/4, 1/2).
- p9a: u̇ = −u/2 − u²; autonomous; u = 0 critical.
- p9b: u̇ = −u/2; u = c e^{−t/2}.
- p9c: y ≈ 3/4 + c e^{−t/2}; y(11) − y0 ≈ b e^{−1/2} ≈ 0.6065 b; y(12) − y0 ≈ b e^{−1} ≈ 0.3679 b.
- p9d: p and q constant.
- p11a: p(s) = 0.5 s² + 1.5 s + 0.625 (∝ s² + 3s + 5/4); roots −1/2, −5/2. (k = 0.62: −0.495, −2.505.)
- p11b: x = c1 e^{−t/2} + c2 e^{−5t/2}, c1 = (5x0 + 2ẋ0)/4, c2 = −(x0 + 2ẋ0)/4.
- p11c: exponential iff ẋ0 = −x0/2 or ẋ0 = −5x0/2 (any x0; (0,0) trivially). For x0 = 1: ẋ0 = −0.5 or −2.5.
- p11d: for x0 > 0: zero at some t > 0 iff ẋ0 < −5x0/2 (x0 = 0.25: ẋ0 < −0.625); for x0 < 0: ẋ0 > −5x0/2. Zero time t = ½ ln((x0 + 2ẋ0)/(5x0 + 2ẋ0)).
- p12a: b = √(4mk) = √1.25 = √5/2 ≈ 1.118; double root −√5/2 ≈ −1.118; x = (c1 + c2 t) e^{−√5 t/2}.
- p12b: roots −1/4 ± i√19/4 ≈ −0.25 ± 1.0897 i; x = e^{−t/4}(c1 cos(√19 t/4) + c2 sin(√19 t/4)).
- p12c: x = (4/√19) e^{−t/4} sin(√19 t/4); zeros every 4π/√19 ≈ 2.883 (all four gaps equal); same rate (constant spacing); pseudo-period 8π/√19 ≈ 5.766; every solution's successive zeros are 4π/√19 apart.

### Comparison with the page (one line per answer id)

| id | Page | Mine | Agree |
|---|---|---|---|
| p8-b-count | 0.25 | 1/4 | yes |
| p8-b-upper | 1/2 + sqrt(1/4 − a) | (1 + √(1 − 4a))/2 | yes (identical) |
| p8-b-kind | semi-stable | semi-stable | yes |
| p8-c-stable | 750 | 750 | yes |
| p8-c-crash | 250 | 250 | yes |
| p8-d-low | falls, no animals after finite time | same | yes |
| p8-e | y − y² | a = y − y² | yes |
| p9-a-y0 | 0.75 | 3/4 | yes |
| p9-a | −u/2 − u² | −u/2 − u² | yes |
| p9-b | exp(−t/2) | c e^{−t/2}, c = 1 | yes |
| p9-c-11 | 0.6065 | e^{−1/2} = 0.60653 | yes |
| p9-c-12 | 0.3679 | e^{−1} = 0.36788 | yes |
| p9-d | both constant | both constant | yes |
| p11-a-poly | s²/2 + 3s/2 + 5/8 | ½s² + 1.5s + 0.625 | yes (see finding 1 on the monic form) |
| p11-a-r1 / r2 | −0.5 / −2.5 | −1/2 / −5/2 | yes |
| p11-b-c1 | (5x0 + 2v0)/4 | (5x0 + 2ẋ0)/4 | yes |
| p11-b-c2 | −(x0 + 2v0)/4 | −(x0 + 2ẋ0)/4 | yes |
| p11-c-slow / fast | −0.5 / −2.5 | −0.5 / −2.5 | yes |
| p11-d-edge | −5x0/2 | −5x0/2 | yes |
| p11-d-number | −0.625 | −0.625 | yes |
| p11-d-dir | ẋ₀ < −0.625 | ẋ0 < −0.625 | yes |
| p12-a-b | 1.118 | √5/2 = 1.1180 | yes |
| p12-a-x | (1 + √5/2 t) e^{−√5 t/2} | c1 = 1, c2 = b | yes |
| p12-b-re / im | −0.25 / 1.0897 | −1/4 / √19/4 = 1.08972 | yes |
| p12-c-x | (4/√19) e^{−t/4} sin(√19 t/4) | same | yes |
| p12-c-gap | 2.883 | 4π/√19 = 2.88292 | yes |
| p12-c-period | 5.766 | 8π/√19 = 5.76585 | yes |
| p12-c-rate | same rate | same rate | yes |

No disagreement between my blind answers, the page and MIT's solutions, apart from MIT's two sign slips (below), which the page corrects.

### MIT's two sign slips (checked)
- 8(e): MIT prints y² − y − a = 0 (solutions p. 1, checked on the PDF image). Its own 8(b) has y² − y + a = 0, and with a > 0 the printed form has the roots ½ ± √(¼ + a), which are not critical points (put y = 3/4, a = 3/16: 9/16 − 3/4 − 3/16 = −3/8 ≠ 0). The page's correction to a = y − y² is right.
- 9(a): MIT prints u̇ = (¼ − u)(u − ¾) − 3/16 = −½u − u². Expanding the printed middle: (¼ − u)(u − ¾) − 3/16 = u − u² − 3/8 (at u = 0.1: −0.285, while −½u − u² = −0.06), so the printed factor is a slip and the result is right with (u + ¾). The page's bracket note is right.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 11(a), answer box `p11-a-poly` (label `$p(s) =$`) | "What is the characteristic polynomial?"; its solution writes p(s) = ½s² + 3/2 s + 5/8 = ½(s² + 3s + 5/4) | The box marks the monic s² + 3s + 5/4 as a mistake ("it is not m s² + bs + k"), but neither the statement nor the label says that p(s) means m s² + bs + k. A reader who divides by m has written a correct characteristic polynomial and is marked wrong. | `label="$p(s) =$"` → `label="The characteristic polynomial $p(s) = ms^2 + bs + k$, with these numbers, $p(s) =$"` (or accept the monic form). |
| 2 | warning | Problem 12(a) formula "Second solution" (line 795), Problem 12(b) prose (line 849), Problem 8(a) formula "Logistic equation" (line 87); data/symbols.json | (notation) | On this page `a` is the hunting rate, but `y = t\,e^{-at}` (the lecture's letters: a is the size of the double root, y the unknown) and "For complex roots $a \pm \omega i$ the real solutions are $e^{at}$" use `a` for other things. The page's meanings of `a` and `y` do not cover these uses, and `b` in `(a - by)\,y` has no meaning for that use. | Line 849: `For complex roots $a \pm \omega i$ the real solutions are $e^{at}$ times` → `For complex roots $-\alpha \pm \omega i$ the real solutions are $e^{-\alpha t}$ times`. Before line 795 add "(the lecture writes the double root as $-a$ and the unknown as $y$; here they are $-b$ and $x$)". In data/symbols.json, add to this page's `a` meaning "; in the cited lecture formula y = t e^(−at), the size of the double root", to `y` "; in that formula, the unknown function", to `b` "; in the lesson's logistic equation (a − by)y, the crowding coefficient (1 here)". |
| 3 | warning | Problem 11 statement, first paragraph | "Saloon doors can swing through the door frame. A good door damper will slow a swinging door down so that either it comes to rest without swinging through, or, if you shove the door hard toward the frame, it swings through and comes to rest from the other side. This is a characteristic of 'overdamping.'" | "Saloon doors can swing through the door frame. A good door damper slows a door so that it comes to rest without swinging through, or, if you shove the door hard towards the frame, so that it swings through and comes to rest from the other side. This is a feature of overdamping." (three sentences, nearly verbatim) | Replace with: "A saloon door can swing right through its frame. A good damper either brings the door to rest on the side it started from or, after a hard shove towards the frame, lets it pass through once and settle on the other side. Behaviour like this belongs to overdamping." |
| 4 | info | Problem 8 statement | Units of t and a not stated (implied by "187.5 oryx ... in an average year") | "time t in years", "a, measured in kilo-oryx per year" | None needed; a fair reading of MIT. |
| 5 | info | Problem 9(c) formula "The two estimates" | MIT's solution gives only y ≈ ¾ + c e^{−t/2}; the estimates of y(11), y(12) are not printed | Cited to `solutions` with "(our own working out of MIT's last question)" | None needed; marked honestly. |
| 6 | info | Problem 9(c) statement | "estimate y(11) and y(12)" | adds "Give the two excesses ... as multiples of b" | Our addition for the boxes; acceptable. |

## Arithmetic and answer checks
- Every number on the page recomputed (Python): roots −0.5, −2.5; k = 0.62 roots −0.49501, −2.50499 (page −0.495, −2.505); √1.25 = 1.11803; √19/4 = 1.08972; 4π/√19 = 2.88292; 8π/√19 = 5.76585; 3 × 2.88292 = 8.649 and 4 × 2.88292 = 11.532; e^{−1/2} = 0.60653, e^{−1} = 0.36788, 0.3679/0.6065 = 0.6066; MIT's measured gaps 2.93, 2.83, 2.93, 2.83, mean 11.52/4 = 2.88; discriminant 2.25 − 1.25 = 1. All correct.
- calc tests for the page (pytest `tests/calc -k "problem-set-3 and 18"` in the worktree): 318 passed, none failed (the filter also picks up other files).
- Every mistake hint checked against its formula: p8-b-upper (the 2a residual is true; the halving hint is true), p8-e (y² − y = −¼ at ½; 2y(1 − y) = ½ at ½), p9-a (signs and linear terms true), p9-b (derivatives −u and −2u true), p11-a-poly (the factor m; 2p(s)), p11-b-c1 (x0 = 0, ẋ0 = 1 gives c1 = ½ > 0, the wrong form −½), p11-b-c2 (sums 6x0/4 + v0 and 0), p11-d-edge (−x0/2 is c2 = 0; at +5x0/2, c1 = 2.5x0, c2 = −1.5x0, ratio −0.6), p12-a-x (slopes −√5/2 and −√5 = −2b), p12-c-x (slope √19/4 = 1.09; no decay; growth). All true.
- `vars` ranges: all finite and physical; the listed mistakes differ from the answer across each range (smallest gap, p9-a against −u/2: u² ≥ 0.01 against |answer| ≥ 0.06). Number tolerances (0.5 to 1%) accept 3 significant figures and reject the listed slips.
- No hint gives a final result away (12(b) hint 2 gives the normalised polynomial, a step, not the roots).
- Every solution ends with a "Check the result" step (a substitution, a limit or a number).
- Choice answers correct: p8-b-kind (semi-stable), p8-d-low (0), p9-d (0), p11-d-dir (0), p12-c-rate (0).

## Coverage and order
- Part II Problems 8 (a to e), 9 (a to d), 11 (a to d), 12 (a to c) all present, in MIT's order, with MIT's points (8: 3+3+3+5+2 = 16; 9: 4 × 3 = 12; 11: 4+4+3+4 = 15; 12: 6+6+5 = 17; total 60).
- Part I listed, not rewritten: 8 → Notes 1E-1; 9 → MIT's own ẋ + 2x = 1 exercise (described and linked); 11 → 2C-1ab; 12 → 2C-1cde and 2G-1; Edwards and Penney items left out, as the page says. Part I points 8 + 12 + 9 + 7 = 36 match MIT's solutions header. The descriptions of 1E-1, 2C-1 a to e (a, b real roots; c, d complex; e double root) and 2G-1 were checked against the Unit 1 and Unit 2 exercise PDFs.
- Lesson mapping checked: autonomous-equations is lecture 5, second-order-constant-coefficients 9, damped-oscillations 10, inhomogeneous-equations-and-stability 12; `covers: [5, 9, 10]` fits. The autonomous-equations lesson does treat logistic growth with constant harvesting h and the bank account dy/dt = ry − w, as the solutions say.
- Transcript citations: Lecture 5 p. 9 (logistic dy/dt = (a − by)y), Lecture 9 p. 18 (second solution y = e^{−at} t), Lecture 10 p. 15 (ω₁² = ω₀² − p²): each is on the cited page (these transcripts have no printed footer; PDF page = page). Sheet citations ("first half, Problem 9, p. 2"; "Problem 11, p. 2"; solutions pp. 1 to 2) correct.

## Licensing
- No rights-reserved or courtesy notice in any of the three PDFs. MIT's applet screenshot in the 8(d) solution is not reused; the page's only graph is generated from a formula.
- Statements are mostly in the page's own words; the exception is the first paragraph of Problem 11 (finding 3).
- No OpenStax, LibreTexts or Edwards and Penney material.

## Notes
- No em dashes; no `## Summary`; choice strings have no backslash TeX.
- The intro's explanation of the missing Problem 10 (MIT's Lecture 10 was Hour Exam I) matches the sheet's calendar.
- MIT's second-half sheet dates Problem 11 "F 29 Feb" (no such date in 2010); the page ties it to Lecture 11 without the date, which is fine.

COUNTS: errors=0 warnings=3 info=3

## Resolution (2026-11-21, by the page author)

1. Warning 1: the p11-a-poly box label now says "The characteristic polynomial $p(s) = ms^2 + bs + k$, with these numbers, $p(s) =$", so the monic form is clearly not what is asked.
2. Warning 2: the complex-roots sentence no longer uses $a$ ("a decaying exponential times a cosine and a sine"); before the cited lecture formula $y = t\,e^{-at}$ the page now says the lecture writes the double root as $-a$ and the unknown as $y$, here $-b$ and $x$. The page meanings of a, y and b in data/symbols.json now name these uses (a: the size of the double root in the lecture formula; y: its unknown; b: the crowding coefficient of (a − by)y, 1 here).
3. Warning 3: the first paragraph of Problem 11 is rewritten in our own words.
4. Info items: no change needed.

`status` is now `reviewed`.
