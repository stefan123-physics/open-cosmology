---
page: content/year-2/8.03/8-03-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset3/ (read: pdftotext and rendered pages, including the figures and the limits α → ∞, α → 0 in 3.1(c),(d))
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec4/ (read, PDF pp. 1-4)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec6/ (read, PDF pp. 1-3)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec8/ (read, PDF pp. 1-3)
verdict: pass-with-notes
---

# Review: Problem Set 3: coupled oscillators and normal modes

## Blind solve

My answers (written to this file before the full page was opened; statements only):

- p1a: θ̈1 = -ω0²(1+α)θ1 + αω0²θ2 ; θ̈2 = ω0²(1+α)(θ1 - θ2)
- p1b: ω1² = ω0²[(1+α) - √(α(1+α))], ω2² = ω0²[(1+α) + √(α(1+α))]
- p1c: α → ∞: ω1²/ω0² → 1/2 (pendulum of length 2L); ω2² ≈ 2αω0² → ∞ (light M1 between two rods under tension ≈ M2 g)
- p1d: α → 0: both → ω0² (ω² ≈ ω0²(1 ∓ √α)); two equal pendulums of length L, weakly coupled
- p2a: ω1² = 1/((L+M)C) (Q1 = Q2), ω2² = 1/((L-M)C) (Q1 = -Q2)
- p2b: lower mode (M > 0): equal currents in the same sense, in phase
- p2c: exchange symmetry 1 ↔ 2, S = [[0,1],[1,0]], eigenvectors (1,1), (1,-1) with eigenvalues ±1, so the modes are symmetric / antisymmetric
- p3a: ẍ1 = -(k/m)(2x1 - x2 - x3)
- p3b: ω² = 3k/m (twice, e.g. (1,-1,0), (1,1,-2)) and ω² = 0 ((1,1,1)); 2 different values of ω²
- p3c: the ω = 0 mode (1,1,1): rigid rotation round the ring, no restoring force, not an oscillation
- p4a: ÿ1 = -2ω0²y1 + ω0²y2 + ω0²A cos ωt ; ÿ2 = ω0²(y1 - y2)
- p4b: B1 = Aω0²(ω0² - ω²)/(ω⁴ - 3ω0²ω² + ω0⁴), B2 = Aω0⁴/(ω⁴ - 3ω0²ω² + ω0⁴)
- p4c: ω²/ω0² = (3 - √5)/2 = 0.381966 and (3 + √5)/2 = 2.618034; B2/B1 = 1/(1 - λ) = 1.618034 (lower), -0.618034 (upper)
- p5a: ÿ1 = (T/(ma))(y2 - 2y1), ÿ2 = (T/(ma))(y1 - 2y2)
- p5b: ω1² = T/(ma), mode (1,1); ω2² = 3T/(ma), mode (1,-1)
- p5c: B1 = ω0⁴Δ/((ω0² - ωd²)(3ω0² - ωd²)), B2 = ω0²(2ω0² - ωd²)Δ/((ω0² - ωd²)(3ω0² - ωd²)); ωd → 0 gives Δ/3, 2Δ/3

Numerical check written for this review (NumPy, independent of the page and its calcs): for Problem 1 the eigenvalues of M⁻¹K from the Lagrangian mass matrix [[1+α, α],[α, α]] and K = diag((1+α)ω0², αω0²) at three random (α, ω0) equal my closed forms to 1e-9, and the page's equation matrix [[1+α, -α],[-(1+α), 1+α]] has the same eigenvalues (α = 1.7: 0.5576, 4.8424). Problem 4 and 5 amplitudes from `numpy.linalg.solve` of the amplitude equations equal the closed forms at three random ω (also below resonance). Ring matrix eigenvalues 0, 3, 3. α = 10⁶: ω1²/ω0² = 0.50000013; α = 0.01: 0.90950, 1.11050.

Comparison, one line per answer id:

- p1-a1: page `w0^2*(-(1 + alpha)*theta1 + alpha*theta2)` = mine. Agree.
- p1-a2: page `(1 + alpha)*w0^2*(theta1 - theta2)` = mine. Agree.
- p1-b1: page `w0^2*(1 + alpha - sqrt(alpha*(1 + alpha)))` = mine. Agree.
- p1-b2: page `w0^2*(1 + alpha + sqrt(alpha*(1 + alpha)))` = mine. Agree.
- p1-c: page 0.5 = mine (and ω2² ≈ 2αω0² in the solution = mine). Agree.
- p1-d: page choice 0 "Both frequencies approach ω₀" = mine. Agree.
- p2-a1: page `1/((L + M)*C)` = mine. Agree.
- p2-a2: page `1/((L - M)*C)` = mine. Agree.
- p2-b: page choice 0 "Equal and circulating the same way round" = mine. Agree.
- p2 (c), self-marked: swap matrix, eigenvectors (1,1), (1,-1) = mine. Agree.
- p3-a: page `(k/m)*(x2 - 2*x1 + x3)` = mine. Agree.
- p3-b1: page `3*k/m` = mine. Agree.
- p3-b2: page choice 1 "2" = mine. Agree.
- p3-c: page choice 1 (the whole ring turning steadily) = mine. Agree.
- p4-a1: page `w0^2*(A*cos(w*t) - 2*y1 + y2)` = mine. Agree.
- p4-a2: page `w0^2*(y1 - y2)` = mine. Agree.
- p4-b1: page `A*w0^2*(w0^2 - w^2)/(w^4 - 3*w0^2*w^2 + w0^4)` = mine. Agree.
- p4-b2: page `A*w0^4/(w^4 - 3*w0^2*w^2 + w0^4)` = mine. Agree.
- p4-c1: page 0.382 = mine (0.381966). Agree.
- p4-c2: page 2.618 = mine (2.618034). Agree.
- p4-c3: page 1.618 = mine (1.618034). Agree.
- p5-a1: page `(T/(m*a))*(y2 - 2*y1)` = mine. Agree.
- p5-a2: page `(T/(m*a))*(y1 - 2*y2)` = mine. Agree.
- p5-b1: page `T/(m*a)` = mine. Agree.
- p5-b2: page `3*T/(m*a)` = mine. Agree.
- p5-c1: page `Delta*w0^4/((w0^2 - wd^2)*(3*w0^2 - wd^2))` = mine. Agree.
- p5-c2: page `Delta*w0^2*(2*w0^2 - wd^2)/((w0^2 - wd^2)*(3*w0^2 - wd^2))` = mine. Agree.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Introduction, first paragraph | The sheet has a figure for every problem: Figures 1 to 5 (double pendulum, two circuits, ring, hanging masses, two beads) | "MIT's sheet has a drawing for four of them." | "MIT's sheet has a drawing for four of them." → "MIT's sheet has a drawing for each of them." |
| 2 | warning | Problem 2, Part b statement | 3.2(b): "What current patterns correspond to these normal modes?" (both modes) | "What current pattern belongs to the lower-frequency mode?" The solution does describe the other mode, but the question is narrower than MIT's without saying so. | "What current pattern belongs to the lower-frequency mode?" → "What current pattern belongs to each mode? The box asks about the lower-frequency one." |
| 3 | info | Problem 1(a) solution, step "The tensions" | (no solution on OCW) | "Up to second order both $\cos\theta$ are 1." Taken literally this is wrong (cos θ = 1 - θ²/2). | → "To first order in the angles both $\cos\theta$ are 1." |
| 4 | info | Problem 3(c) statement | "Because the masses are connected in a circle some of the results of normal mode calculations do not correspond to oscillatory motion." | "Because the masses are joined in a ring, one of the results of the normal-mode calculation does not describe an oscillation." Reworded, but the sentence frame follows MIT closely. Acceptable for a problem statement. | Optional, e.g. "One of the normal modes you found is not an oscillation at all. Which one, and why does the ring allow it?" |

## Arithmetic and answer checks
- Every final answer recomputed (see Blind solve); all 27 answer ids agree.
- Worked numbers recomputed: α = 1: 2 ∓ √2 = 0.586, 3.414; α = 0.01: 0.9095, 1.1105; L = 1, M = 0.4, C = 1: 0.714, 1.667; poles of Problem 4 at ω = 0.618 ω0 and 1.618 ω0; B2 = -A at ω = ω0 (1 - 3 + 1 = -1); ring trace check 0 + 3 + 3 = 6; beaded-string check 4 sin²(π/6) = 1, 4 sin²(π/3) = 3; Problem 5 static limit Δ/3, 2Δ/3. All correct.
- Every solution ends with a check (limit, units or a number): yes, all 14.
- Answer boxes: each `expr`/`value` equals the solution's result. `vars` ranges keep every formula finite: Problem 2 M ∈ [0.1, 0.8] < L ∈ [1, 2]; Problem 4 ω/ω0 ≥ 3/1.5 = 2 > 1.618; Problem 5 ωd² ≥ 9 > 3ω0² (at most 6.75), and 2ω0² - ωd² never zero. Every listed mistake differs from the answer throughout the range (e.g. p1-a2 mistake `w0^2*(theta1 - theta2)` differs because α ≥ 0.2).
- Each mistake hint is true of its formula; all checked. Examples: p4-b1 numerator (2ω0² - ω²) is indeed non-zero at ω = ω0; p5-c2 numerator (ω0² - ωd²) indeed gives Δ/3 at ωd = 0; p5-b2 `2*T/(m*a)` is indeed bead 1 with bead 2 held still; p5-c1 `Delta*w0^2/(...)` indeed has dimension length/frequency²; p3-b1 `2*k/m` hint's k(-1 - 2 + 0) = -3k is right.
- Number boxes: 1% tolerance; dimensionless ratios, so no unit needed.
- Choice boxes use Unicode, none answerable from units alone.
- Hints: none gives a final answer away. p4-c hint 2 (B2/B1 = 1/(1 - λ)) and p5-c hint 2 (the factorised determinant) give steps only.
- calcs/8.03/8-03-problem-set-3.yaml: every formula box has an `answer:` entry with an independent route (Lagrange equations for 1(a), Lagrangian determinant for 1(b), loop determinant for 2(a), potential energy for 3(a), 4(a), 5(a), circulant eigenvalue for 3(b), dispersion relation for 5(b)). `pytest tests/calc -k problem-set-3` in the worktree: 350 passed (includes other sets' files). Info: the "Cramer" entries for 4(b) and 5(c) only compare each answer with the same fraction with the denominator unexpanded, so they check the expansion, not the solution; the separate back-substitution entries (p4-b-back-substitution, p5-c-back-substitution) give the independent check, so nothing must change.
- `content:check` on the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Five problems in MIT's order (3.1 to 3.5), 20 points each as MIT gives; the part split is marked as ours in "How to answer".
- All MIT parts covered with the same physics. 3.2(b) is split into (b) current pattern and (c) symmetry argument; see Difference 2.
- Conventions the page adds (sign of M in Problem 2, numbering and sense of x in Problem 3, upward y in Problem 4) are stated; Problem 2 marks them as ours.
- `covers: [4, 5, 6, 7, 8]` matches the `lecture:` of the five prerequisite lessons.
- Problem-set citations checked on the PDF: 3.1(a),(b) p. 1; 3.1(c),(d) and 3.2 p. 2; 3.3 text and 3.4 p. 3; 3.5(a)-(c) p. 4. All `at=` values correct.
- Lecture-note page numbers checked on the PDFs: Lecture 4 notes p. 3 has M Ẍ = -KX and det[M⁻¹K - ω²I] = 0 (correct); Lecture 6 notes p. 2 has (M⁻¹K - ωd²I)B = M⁻¹F and the two amplitude equations (correct); Lecture 8 notes p. 2 has mÿj = (T/a)(y(j-1) - 2yj + y(j+1)) (correct).
- Claims about lessons checked: driven-coupled-oscillators-symmetry uses Cramer's rule (yes); symmetry-infinite-oscillators uses the mirror matrix (0 -1; -1 0) and the commutation condition (yes, so the remark on its minus signs is right); coupled-oscillators-normal-modes has the translating ω = 0 mode x = c + vt and the six-constant count (yes); beaded-string-wave-equation has ω² = 4ω0² sin²(ka/2) with ka = nπ/(N+1) (yes); damped-free-oscillators has the LC analogy (yes); 8.02 transformers-and-magnetic-materials covers mutual inductance (yes).

## Licensing
- No MIT figure reproduced or redrawn; situations are described in words. The Problem 4 graph is generated from the page's formulas.
- No "rights reserved" or "Courtesy of" notice in the problem set or the three lecture-note PDFs (grep on the extracted text).
- No OpenStax, LibreTexts or Georgi material.
- Statements are rewritten; Problem 3(c) is the closest to MIT's sentence (Difference 4, info).

## Notes
- No `## Summary` printing answers; no em dashes.
- Info: Problem 1(a) check, "because the whole pair is accelerated sideways together", is vague; the precise reason is that with θ1 = θ2 = θ both masses have the same sideways acceleration -gθ. Optional: → "because both masses then have the same sideways acceleration, $-g\theta$."
- Info: Problem 4(c) check, "The golden ratio ... appears because the problem is a chain of two equal masses and two equal springs", is loose. Optional: → "The golden ratio $\varphi = 1.618$ appears because the roots of $\lambda^2 - 3\lambda + 1 = 0$ are $1/\varphi^2$ and $\varphi^2$."
- Fix the two warnings before setting `status: reviewed`.

COUNTS: errors=0 warnings=2 info=6

## Resolution (2026-11-21, by the page author)

1. Warning 1: the intro now says MIT's sheet has a drawing for each of the problems.
2. Warning 2: Problem 2(b) now asks for the current pattern of each mode and says the box asks about the lower-frequency one.
3. Info 3: "Up to second order" is now "To first order in the angles".
4. Info 7: the golden-ratio check now says the roots of λ² − 3λ + 1 = 0 are 0.382 and 2.618, one over the square of 1.618 and its square.
5. Info 4, 5 and 6: left as they are (the wording is our own; the back-substitution entries give the independent check).

`status` is now `reviewed`.
