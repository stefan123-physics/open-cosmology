---
page: content/year-2/18.03/18-03-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_pset_09pdf/ (read: text and rendered PDF, all 4 pages)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps9spdf/ (read after the blind solve: text and rendered PDF, all 4 pages)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_4ex/ (resolves; PDF read, 4D-2 present)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_4sol/ (resolves to MIT18_03S10_4sol.pdf; PDF not read)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_5ex/ (resolves; PDF read, 5B-4 present)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_5sol/ (resolves to MIT18_03S10_5sol.pdf; PDF not read)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/mathlets/ (read)
verdict: pass-with-notes
---

# Review: Problem Set 9: complex and repeated eigenvalues, phase portraits in the trace-determinant plane, and the matrix exponential

## Blind solve

### My answers (written before opening the full page, its calcs file or MIT's solutions)

**34(a)(i).** A = [[0.5, 1], [-2.25, 0.5]]; char. poly (λ - 0.5)² + 2.25 = 0, so λ = 0.5 ± 1.5i. For λ = 0.5 + 1.5i, v = (1, 1.5i). e^{λt}v has real part e^{t/2}(cos(3t/2), -1.5 sin(3t/2)) and imaginary part e^{t/2}(sin(3t/2), 1.5 cos(3t/2)).
**34(a)(ii).** x(0) = 1, y(0) = 0: x = e^{t/2} cos(3t/2), y = -1.5 e^{t/2} sin(3t/2). ẋ(0) = 0.5 > 0 (weasels increasing); ẏ(0) = -2.25 < 0 (voles decreasing). Voles next at baseline when sin(3t/2) = 0: t = 2π/3 ≈ 2.094.
**34(a)(iii).** Unstable spiral, clockwise (at (1,0) the velocity is (0.5, -2.25)). Positions at t = kπ/3: k=-2: (-e^{-π/3}, 0) ≈ (-0.351, 0); k=-1: (0, 1.5e^{-π/6}) ≈ (0, 0.889); k=0: (1, 0); k=1: (0, -1.5e^{π/6}) ≈ (0, -2.532); k=2: (-e^{π/3}, 0) ≈ (-2.849, 0).
**34(b).** Eigenvalue 1 (double) for every b. b = 0: A = I, complete, every nonzero vector is an eigenvector, normal modes e^t v for every v; unstable star. b ≠ 0: eigenvectors the nonzero multiples of (1, 0); normal modes c e^t (1, 0); defective; w = (0, 1/b), extra solution e^t (t, 1/b) (or e^t (bt, 1)); general solution c1 e^t (1, 0) + c2 e^t (bt, 1); unstable defective node.
**35(a).** tr A = a - 1, det A = 3 - a; line det = 2 - tr.
**35(b).** det = 0: a = 3; tr = 0: a = 1; det = (tr/2)²: tr² + 4 tr - 8 = 0, tr = -2 ± 2√3, a = -1 ± 2√3 ≈ 2.464 and -4.464.
**35(c).** -5 ≤ a < -1-2√3: stable node; a = -1-2√3: stable defective node; -1-2√3 < a < 1: stable spiral, counterclockwise; a = 1: center, counterclockwise; 1 < a < -1+2√3: unstable spiral, counterclockwise; a = -1+2√3: unstable defective node (counterclockwise sense); -1+2√3 < a < 3: unstable node; a = 3: unstable comb; 3 < a ≤ 4: saddle.
**35(d).** Eigenvector for λ: (1 + λ, 1). a = -1-2√3: λ = -1-√3, eigenline along (-√3, 1). a = -1+2√3: λ = -1+√3, eigenline along (√3, 1). a = 3: λ = 0 along (1, 1) (line of rest points), λ = 2 along (3, 1). a = 1: no eigenlines.
**36(a).** e^{A(z)t} = e^{at} [[cos bt, -sin bt], [sin bt, cos bt]] = A(e^{zt}); the two are equal.
**36(b).** x1 = e^{-t}(cos t + sin t), x2 = e^{-t} sin t. e^{At} = e^{-t} [[cos t + sin t, sin t], [-2 sin t, cos t - sin t]]: first row is (x1, x2), second row (ẋ1, ẋ2).
**36(c)(i).** u1 = (2e^{3t} - e^{2t}, 2e^{3t} - 2e^{2t}), u2 = (-e^{3t} + e^{2t}, -e^{3t} + 2e^{2t}).
**36(c)(ii).** e^{At} = [u1 u2]; det e^{At} = e^{5t} (checked by expansion; = e^{t·trA}).
**36(c)(iii).** A = [[4, -1], [2, 1]] (checked: A(1,1) = 3(1,1), A(1,2) = 2(1,2)).

### Comparison with the page (one line per answer id)

All formula answers were compared by value (numerically with scipy `expm` and by hand). `calc:test -k 18-03-problem-set-9` passes (81 checks). `content:check` gives 0 errors (the only warning for this page is "no review file").

- p34-re 0.5: agrees.
- p34-im 1.5: agrees.
- p34-vec 3i/2 (choice 0): agrees.
- p34-x e^{t/2}cos(3t/2): agrees.
- p34-y −(3/2)e^{t/2}sin(3t/2): agrees.
- p34-trend "the weasels increase and the voles decrease" (choice 1): agrees.
- p34-next 2.094: agrees (2π/3 = 2.0944).
- p34-pos −2.850: agrees (−e^{π/3} = −2.84965. My blind −2.849 was truncated; the page's rounding is right).
- p34-b-vec nonzero multiples of (1, 0) (choice 1): agrees.
- p34-b-zero all nonzero vectors (choice 0): agrees.
- p34-b-w 1/b: agrees.
- p35-tr a − 1: agrees.
- p35-det 3 − a: agrees.
- p35-line 2 − T: agrees.
- p35-b-det 3: agrees.
- p35-b-tr 1: agrees.
- p35-b-low −4.464: agrees.
- p35-b-high 2.464: agrees.
- p35-c-1 stable node: agrees.
- p35-c-2 counterclockwise stable spiral: agrees.
- p35-c-3 counterclockwise center: agrees.
- p35-c-4 unstable defective node: agrees.
- p35-c-5 unstable node: agrees.
- p35-c-6 unstable comb: agrees.
- p35-c-7 saddle: agrees. (Numerical eigenvalues at a = −5, −4.464, −2, 0, 1, 2, 2.464, 2.5, 3, 3.75, 4 confirm the whole list. The velocity at (1, 0) is (a, 1), with second entry 1 for every a, so every turning is counterclockwise.)
- p35-d-comb y = x (choice 0): agrees.
- p36-a-11 e^{at}cos bt: agrees.
- p36-a-12 −e^{at}sin bt: agrees.
- p36-a-same "equal" (choice 0): agrees.
- p36-b-x1 e^{−t}(cos t + sin t): agrees.
- p36-b-x2 e^{−t}sin t: agrees.
- p36-b-21 −2e^{−t}sin t: agrees.
- p36-b-22 e^{−t}(cos t − sin t): agrees.
- p36-c-u1x 2e^{3t} − e^{2t}: agrees.
- p36-c-u1y 2e^{3t} − 2e^{2t}: agrees.
- p36-c-u2x −e^{3t} + e^{2t}: agrees.
- p36-c-u2y −e^{3t} + 2e^{2t}: agrees.
- p36-c-det e^{5t}: agrees.
- p36-c-p 4, p36-c-q −1, p36-c-r 2, p36-c-s 1: agree.

My blind answers and the page do not disagree anywhere.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 34(b) statement, the sentence before the formula "The extra solution for a defective eigenvalue" | MIT's sheet gives no formula. The form u₂ = e^{λ₁t}(tv₁ + w) with (A − λ₁I)w = v₁ is in MIT's *solutions*, p. 1 | "MIT's notes give the form of the extra solution:", with `cite="solutions"` | Make the words match the citation and say that this is an addition to the sheet. For example: "MIT's sheet gives no method for this. MIT's solutions use this form (the lesson leaves the method to the problem set):". |
| 2 | warning | Problem 35, table of kinds, row "det A = (tr A/2)², tr A ≠ 0" | Sheet p. 3: "defective node (stable/unstable; clockwise/counterclockwise)" | For the defective node the row gives only "stable or unstable by the sign of the trace". Part (c) asks for "clockwise or counterclockwise, where that applies", and only the solution then adds a turning sense for the defective nodes | Add to that row: "a defective node also turns, clockwise or counterclockwise". |
| 3 | info | Problem 34(a)(iii), caption of the trajectory graph | (no statement) | "The other trajectories of the phase portrait are copies of this spiral, turned and scaled." | For a linear system every trajectory is a *scaled* copy of this one (a time shift moves along the same curve). A turned copy of an elliptical spiral is in general not a trajectory. Suggest "are scaled copies of this spiral". |
| 4 | info | Problem 35(d) solution, "MIT's pictures use a = 0, 1, 2, −1 + 2√3, 2.75, 3 and 4" | Solutions p. 2 also print "(a = −2√3 omitted.)", a slip for a = −1 − 2√3 (the next sentence names −1 − 2√3) | Not mentioned | No change needed: the page does not quote that phrase, and its list of values is right. A bracket note is optional. |
| 5 | info | Problem 35(d) "A solution for a = 1" and Problem 36(b) "The exponential of a companion matrix" | Neither formula is on MIT's sheet | `cite="mit"` with at="… (our own solution)" or "(our own remark)" | Acceptable as labelled. MIT's solutions p. 3 do say "The top entries coincide with x₁ and x₂", so the 36(b) remark could cite `solutions`, p. 3. |

## Arithmetic and answer checks
- Every number on the page recomputed: eigenvalues 0.5 ± 1.5i; positions (−0.351, 0), (0, 0.889), (1, 0), (0, −2.532), (−2.850, 0); e^{2π/3} = 8.12; t = 2π/3 = 2.094; x(2π/3) = −2.850; crossings −1 ± 2√3 = −4.464 and 2.464; trace/determinant checks 1.464/0.536 and −5.464/7.464; a = −5: 8 < 9; a = 2.5: 0.5 < 0.5625; eigenvalues and eigenvectors at a = −5, −1 − 2√3, 0, 1, 2, −1 + 2√3, 2.5, 3, 3.75; √11/2 = 1.658, √3/2 = 0.866, 2π/√2 = 4.443; A(4, 1) = 3(4, 1) at a = 3.75; the 36(c) determinant expansion; A = [[4, −1], [2, 1]]. All correct. e^{At} of 36(a), (b), (c) also checked against scipy `expm` at t = 0.7.
- Plots: every parametric curve checked against its system (34(b) b = 1 general solution; 35(d) a = −5 node; a = 0 spiral through (2, 4), which satisfies ẋ = −3y and ẏ = x − y; a = 1 ellipse; a = 3 comb rays from (±2, ±2) and the origin in direction ±(3, 1); a = 3.75 saddle). The curves stay inside their axes.
- Rotation claims checked: 34(a) clockwise (velocity (0.5, −2.25) at (1, 0)); 34(b) clockwise for b > 0 and counterclockwise for b < 0 (velocity (b, 1) at (0, 1)); 35 counterclockwise for every a; the stable defective node "bends counterclockwise" and is the time reverse of the b = 1 picture (clockwise outwards, reversed, is counterclockwise inwards): consistent.
- Answer boxes: tolerances (0.002 on three-decimal values, 0.005 on 0.5 and 1.5) accept 3 significant figures and reject every listed mistake. `vars` ranges keep every formula finite. p34-b-w samples only b in [0.5, 4]; the answer 1/b is also right for negative b, so this is fine.
- Every `mistakes` hint is true of its formula (checked one by one, e.g. p34-y −e^{t/2}sin(3t/2) starts with slope −1.5; p36-b-x1 e^{−t}(cos t − sin t) has slope −2; p36-c-u1x with c₁ = −1, c₂ = 2 gives second entry 3; p35-line T + 2 gives 4 and 4 − T gives 2 at a = 3; p36-b-22 e^{−t}(cos t + sin t) has derivative 0 at t = 0; p35-det −a − 3 and a − 3 are both −3 at a = 0).
- Every solution ends with a "Check the result" step (substitution, the value at t = 0, the derivative at 0 equal to A, or trace and determinant).
- No hint gives a final result away (35(b) hint 2 gives the quadratic and 36(c)(i) hint 2 the linear equations; both leave the solving to the reader).
- Calcs: 81 checks pass. Several identity entries only write the definition a second way (p35-tr: a − 1 against a + (−1); p35-det; p35-line; p34-b-ratio restates the same algebra). They are not independent checks, but each of these results was verified independently in this review. Optional: replace them with numerical checks (eigenvalue sum = trace, product = determinant at sample values of a). The other identity entries are real checks (solutions put back into the differential equations with numerical derivatives).

## Coverage and order
- Part II Problems 34 (a, b), 35 (a to d) and 36 (a, b, c(i) to c(iii)) are all present, in MIT's order, with the same mathematics.
- Points: 34 = 18 + 8 = 26, 35 = 4 + 4 + 18 = 26, 36 = 9 + 9 + 9 = 27 (79 in all), Part I 4 + 10 + 6 = 20: all as in MIT's solutions p. 1. The splits 34(a) 3 × 6, 35 (a) 2 + (b) 2 (from MIT's "(a) [4]", which covers sheet parts (a) and (b)) and 36(c) 3 + 3 + 3 are disclosed as the page's own. MIT's "(c) [4]" and "(b)-(c) [18]" map correctly to sheet parts (c) and (d), and the page says the solutions label the parts differently.
- Additions, all disclosed: the trace-determinant table (the sheet points to the Supplementary Notes), the 34(b) defective form (see finding 1), the 36(c)(ii) determinant box ("our own addition"), and the page's own a = 2.5 and 3.75 in 35(d) in place of MIT's 2.75 and 4 (justified: simple eigenvalues; a = 4 gives 3.303 and −0.303).
- Slips the page notes, confirmed on the rendered PDFs: solutions p. 2 print "1 + 2√3" twice for −1 + 2√3; solutions p. 2 print the imaginary part as e^{at}(sin bt, cos bt), where the fundamental matrix on p. 3 has −cos bt. Both correctly described.
- `covers: [26, 27, 29]` matches the lessons' `lecture:` numbers (repeated-and-complex-eigenvalues 26, sketching-linear-systems 27, matrix-exponentials 29) and MIT's calendar (L34, L35, L36). Lecture 28 (variation-of-parameters-systems, fundamental matrices) is only linked, which is fair: Problem 36 uses e^{At} = Φ(t)Φ(0)⁻¹ as the matrix-exponential lesson gives it.
- Vocabulary: "normal mode", "eigenline" and "dominance" are in sketching-linear-systems; "complete" and "defective" in repeated-and-complex-eigenvalues (which says the defective method is "given in the problem set"); normalized solutions in linear-operators-and-wronskian; reducing an equation to a system in first-order-systems. The trace-determinant plane, center, star, defective node and comb are defined on the page itself, correctly.
- Part I: 4D-2 and 5B-4 linked with their OCW solution PDFs; the Edwards and Penney exercises are named and left out. All four Notes URLs resolve to the right PDFs (resource titles MIT18_03S10_4ex.pdf, _4sol.pdf, _5ex.pdf, _5sol.pdf; 4D-2 and 5B-4 found in the exercise PDFs). The Mathlets page resolves but does not itself name "Linear Phase Portraits: Matrix Entry" (it links to MIT's Mathlets gallery), so the reference `location` slightly overstates (counted under info 5's kind of note, no separate count; optional wording "links to MIT's Mathlets gallery").

## Licensing
- No "rights reserved" or "courtesy" notice in the sheet, the solutions or the Part I exercise PDFs read. The Mathlet screenshots in MIT's solutions (pp. 1 to 2) are not reproduced; every graph is generated from formulas and captioned as the page's own.
- No OpenStax, LibreTexts or Edwards and Penney text. The wording is the page's own (the weasel and vole statement is paraphrased). No em dashes; no `## Summary` with answers.

## Notes
- All `at=` page numbers checked against the rendered PDFs (sheet: 34(a) p. 1; 34(b), 35 and 35(b) p. 2; 35(d) and 36 p. 3. Solutions: 34 p. 1; 35(a) and (c) pp. 1 to 2; 36(a) pp. 2 to 3; 36(b) and (c) p. 3). All correct.
- What the page says about MIT's solutions is accurate: no sketches for 34(b); seven Mathlet pictures and no formulas for 35(d); "anti-damped"; MIT writes tr A = 2 − det A.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-21, by the page author)

- Warning 1 fixed: 34(b) now says MIT's sheet gives no method, and that MIT's solutions use the form shown (the lesson leaves the method to the problem set).
- Warning 2 fixed: the table row for det A = (tr A/2)² now adds that a defective node also turns, clockwise or counterclockwise.
- Info 3 taken: the 34(a)(iii) caption now says "scaled copies of this spiral".
- Info 4 and 5: no change in this pass (optional).
- Status set to `reviewed`.
