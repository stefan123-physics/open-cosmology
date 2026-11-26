---
page: content/year-3/8.05/8-05-problem-set-3.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-3/ (read: pdftotext and the rendered PDF, page 1 checked as an image)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read, the writer's download: equations (3.53), (3.60), (3.62), (4.67), (4.81))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read, the writer's download: eqs. (1.4), (1.5), (1.8), (2.38)-(2.48), (4.63), (4.73); printed pp. 4, 7, 8 checked with pdftotext -f/-l)
verdict: pass-with-notes
---

# Review: Problem Set 3: Spin states along any axis, rotations, and linear algebra

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), statement (the paragraph before the hints) | Asks only whether U1 = U2 must hold; the reader has to find the answer | The number-box sentence in the statement already names W = x axis and U2 = line y = x, a second complement of W. That gives away both "No" and the counterexample before the reader answers the choice box `p5-same`, whose right answer is this same counterexample | Move the number-box sentence (and the `p5-w` box) so that it comes after `p5-same`, and introduce it as "After you have answered:". Or keep it where it is but leave out U2: "let W be the x axis; write (3, 5) as u + w with u on the line y = x …" still names the line. The cleanest fix is to move it |
| 2 | info | Problem 6, solution | Notes ch. 3, eqs. (2.38)-(2.48), contain the whole derivation of 6(a)-(d) | The solution follows that derivation, with the sums written out and each step cited to its equation | Fine as written. The intro could say that the notes work Problem 6 out in full (ch. 3, around eqs. (2.38)-(2.48)) |
| 3 | info | 4(c) | Equality iff a = cb, c real and positive | Adds the zero-vector case (c = 0 or b = 0) and says so | None (the notes, below eq. (4.74), state it as MIT does) |

## Arithmetic and answer checks
- 1(a): -(1+i√3)/(1+i) = √2 e^{i·195°}; θ = 2 arctan √2 = 109.47°, φ = 195.00° (numpy). n = (-0.911, -0.244, -0.333), length 1. 2c1*c2/6 = -(1+√3)/3 - i(√3-1)/3: correct.
- 1(b): fractions cos⁴(θ/2), cos²(θ/2) sin²(θ/2) = sin²θ/4, sin²(θ/2). They add to 1. Special angles 1,0,0 / ¼,¼,½ / 0,0,1: correct.
- 2: example cos γ = -0.25, γ = 104.48°, overlap² = 0.375. Direct amplitude 0.433(1 - i): correct.
- 3(b): R_y S_z R_y† = cos α S_z + sin α S_x (scipy expm, α = 0.7). The four-term expansion and σ2σ3σ2 = -σ3 are correct. Mistake 1 (R† S_z R = S_z cos α - S_x sin α) is described correctly.
- 3(c): R_y|+⟩ = (cos(α/2), sin(α/2)) (numerical check). It is an eigenvector of σ3 cos α + σ1 sin α.
- 4(a): λ = ab/bb, f_min = aa - ab²/bb. Each mistake hint checked: ab/aa minimises |b - λa|; -ab/bb minimises |a + λb|; aa - 2ab²/bb is f(0) plus the linear term only. All true.
- 4(b): ⟨a|b⟩ = -i, ⟨b|a⟩ = i, λ_best = i/5, a - (i/5)b = (1.2, 0.6i), f_min = 1.8: correct.
- 4(c): |a+b| = √7 = 2.6458, |a|+|b| = 3.650: correct.
- 5(a): (3,5) = (5,5) + (-2,0), w_x = -2: correct.
- 6: A = [[1,1],[2,3]], A⁻¹ = [[3,-1],[-2,1]], B21 = -2. T(u) = A⁻¹T(v)A = [[6,6],[-2,-1]], and T(v)A = A T(u) checks. Trace 5 gives T22 = -1. Det 6 gives T12 = 6. Eigenvalues 2 and 3: correct.
- Points: 10/10/10/15/10/10, as MIT gives them. The splits per part add up.
- Choice boxes: the right answers sit at positions 1, 2, 0, 3, 1, 3, 0, 2. The right answer is never the longest (lengths measured). There are ties: p3-op (19 = 19, distractor 0) and p4-clam (13 = 13 = 13). They are not the longest, so acceptable.
- Tolerances: 1% on 109.5 and 195 (±1.1°, ±2°) rejects the usual slips (70.5°, 165°) and accepts 3 significant figures. 1% on 0.375, 1.8 and 2.646 is fine.
- Answer vars: every range keeps the formula finite. In p4-lam and p4-fmin the letters aa, ab and bb are independent, so some samples break Schwarz (ab² > aa·bb). Harmless for checking by value.
- Calcs: every `shown:` string is on the page (script check). The routes are independent: expectation values, Cramer's rule, numerical solve. calc:test and content:check were not run by me.
- No control characters, no em dashes, no `## Summary`.

## Coverage and order
- Problems 1-6 and every part are there, in MIT's order with the same physics. The wording is the page's own. MIT's footnote on minimising over λ and λ* is kept as a note in 4(b). MIT's comment in 5(b) is kept, and so is "from Axler's book" (the book was not used).
- covers [4, 5, 6, 7] match the four prerequisite lessons (lectures 4-7).

## Licensing
- MIT's sheet has no "rights reserved" or "courtesy" notice. There are no figures. No OpenStax or LibreTexts material. Every example with numbers is the page's own.

## Notes
- Citations checked against the notes text: ch. 2 (3.53) σiσj product rule, (3.60), (3.62) (n·σ)² = 1, (4.67) n, (4.81) |n;+⟩. Ch. 3: (1.4) F^∞, below (1.5) the two-subspace direct-sum test, p. 4 below (1.8) independent list ≤ spanning list, p. 7 T(0) = 0, p. 8 left shift not injective and right shift injective, (2.38)-(2.48) change of basis, (4.63) the perpendicular vector, below (4.73) saturation. All match.
- MIT page numbers: 1(a)/(b) and 2 p. 1, 3 p. 2, 4(a) p. 2, eq. (2) runs over pp. 2-3, 4(c) and 5 p. 3, 6 p. 4: all correct.
- Symbols: about 100 page meanings and 14 new entries. Spot-checked, and every one is correct for this page. There are no duplicate forms across entries (script check of all forms and tex). T-ii's page-scoped meaning, λ_best and the index p are as the writer said.

## Blind solve

### My answers (written before opening the full page)
- 1(a): ratio of amplitudes -(1+i√3)/(1+i) = √2 e^{i 195°}; tan(θ/2) = √2, so θ = 109.47°, φ = 195°.
- 1(b): passes magnet 2 with cos²(θ/2); then found |+⟩: cos⁴(θ/2); |−⟩: cos²(θ/2) sin²(θ/2) = sin²θ/4; never reaches magnet 3: sin²(θ/2). Checks: θ=0 → 1,0,0; θ=π/2 → 1/4,1/4,1/2; θ=π → 0,0,1.
- 2: |⟨n';+|n;+⟩|² = cos²(t/2)cos²(tp/2) + sin²(t/2)sin²(tp/2) + 2cos(t/2)cos(tp/2)sin(t/2)sin(tp/2)cos d = (1 + cos t cos tp + sin t sin tp cos d)/2 = (1+cos γ)/2. Example (60°,0°),(120°,90°): cos γ = −1/4, overlap² = 3/8 = 0.375.
- 3(a): (n·σ)² = I, so even powers give I cos(α/2), odd give −i n·σ sin(α/2); R R† = I(cos² + sin²) = I.
- 3(b): R_y S_z R_y† = cos α S_z + sin α S_x (checked numerically, α = 0.7).
- 3(c): R_y(α)|+⟩ = cos(α/2)|+⟩ + sin(α/2)|−⟩ = |n;+⟩ with θ = α, φ = 0; eigenstate of S_n = cos α S_z + sin α S_x, n = (sin α, 0, cos α): S_z-up rotated by α about y.
- 4(a): λ_min = ab/bb, f_min = aa − ab²/bb ≥ 0; saturated iff a = λb (parallel) or b = 0.
- 4(b): λ = ⟨b|a⟩/⟨b|b⟩, f_min = ⟨a|a⟩ − |⟨a|b⟩|²/⟨b|b⟩; saturated iff a ∝ b (or b = 0). Example: ⟨a|b⟩ = −i, f_min = 2 − 1/5 = 1.8.
- 4(c): |a+b|² = |a|²+|b|²+2Re⟨a|b⟩ ≤ (|a|+|b|)²; equality iff Re⟨a|b⟩ = |⟨a|b⟩| = |a||b| iff a = cb, c > 0 (or a vector zero). Example: |a+b| = √7 = 2.6458.
- 5(a): No. Counterexample in R²: W = x axis, U1 = y axis, U2 = line y = x. Example (3,5) = (5,5) + (−2,0): w_x = −2.
- 5(b): the lists (e_1,…,e_m) are linearly independent for every m; a finite spanning list of length N would contradict m = N+1. Infinite dimensional.
- 5(c): T(u−v) = 0 ⇔ Tu = Tv; null T = {0} ⇒ injective; injective and T0 = 0 ⇒ null T = {0}. Left shift: null contains (1,0,0,…), not injective.
- 6(a): A_{ik}(v) = columns of u's: A = [[1,1],[2,3]]; Σ_j A_ij B_jk = δ_ik, B(u) = A(v)^{-1} = [[3,−1],[−2,1]]; B_21 = −2.
- 6(b): T(u) = A^{-1} T(v) A = [[6,6],[−2,−1]]: T_11(u) = 6, T_21(u) = −2 (checked T(v)A = A T(u)).
- 6(c): tr(A^{-1}TA) = tr T = 5; T_22(u) = 5 − 6 = −1.
- 6(d): det = 6: 6·(−1) − T_12·(−2) = 6 ⇒ T_12(u) = 6.

### Comparison with the page (one line per answer id)
- p1-theta: page 109.5, mine 109.47: agree.
- p1-phi: page 195, mine 195: agree.
- p1-plus: cos⁴(θ/2): agree.
- p1-minus: cos²(θ/2) sin²(θ/2): agree.
- p1-lost: sin²(θ/2): agree.
- p2-angles: (1 + cos t cos tp + sin t sin tp cos d)/2: agree.
- p2-example: 0.375: agree.
- p3-series: (n·σ)² = I: agree.
- p3-rot: Sz cos α + Sx sin α: agree.
- p3-up / p3-down: cos(α/2), sin(α/2): agree.
- p3-op: Sz cos α + Sx sin α: agree.
- p4-lam: ab/bb; p4-fmin: aa - ab²/bb; p4-sat: one vector a multiple of the other: agree.
- p4-clam: ⟨b|a⟩/⟨b|b⟩; p4-example: 1.8: agree.
- p4-tri: 2.646: agree.
- p5-same: No (y axis and y = x); p5-w: -2: agree.
- p5-list: a list is finite: agree with my reasoning. p5-shift: not injective: agree.
- p6-b21 -2, p6-rel A⁻¹TA, p6-t11 6, p6-t21 -2, p6-t22 -1, p6-t12 6: agree.

No disagreement.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1 (5(a) statement gave the answer away): the example with W the x axis and U₂ the line y = x, and its number box, now come after the choice box `p5-same`, introduced with "After you have answered:".
- Info items: no change.
