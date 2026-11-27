---
page: content/year-3/8.05/8-05-problem-set-5.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-5/ (read: local PDF ps5.pdf, all 5 pages rendered, plus pdftotext)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-4/ (read: local ps4.pdf/txt, Problems 2 and 4)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: local ch3.pdf/txt)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-4/ (read: local ch4.pdf/txt)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-5/ (read: local ch5.pdf/txt, p. 2 rendered)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: local c1.txt)
verdict: pass-with-notes
---

# Review: Problem Set 5: Translations in position and momentum, projectors, and uncertainty at work

## Blind solve

### My answers (written to this file before the full page was opened)

- p1a: T_x† x̂ T_x = x̂ + x; T̃_p† p̂ T̃_p = p̂ + p.
- p1b: T_x T̃_p = e^{-ixp/ħ} T̃_p T_x, so [T_x, T̃_p] = (e^{-ixp/ħ} − 1) T̃_p T_x; θ = −xp/ħ (mod 2π); they commute iff xp = 2πħ n, n integer.
- p2a: g(x) = ħ²(1/s² − x²/s⁴).
- p2b: w(p) = −s² p/ħ (with ⟨x|p⟩ = e^{ipx/ħ}/√(2πħ)).
- p2c: ⟨p|[x̂, p̂]|ψ⟩ = iħ ⟨p|ψ⟩.
- p3a: S11 = S22 = 0, S21 = −S12 = −2.5; the theorem holds for symmetric real S; T_ij = 0 (vectors (1,0), (0,1), (1,1), (1,i)).
- p3b: dimension n(n−1)/2.
- p3c: the real matrix with no real eigenvector, rows (0,1), (−1,0) (rotation by 90°).
- p4a: eigenvalues 0 and 1.
- p4c: max |Pv|/|v| = √(1 + t²).
- p5a: missing entries: row 1 stars 0, 0; (2,2) = 1; (3,2) = −√2 ≈ −1.414; (3,3) = 0.
- p5b: eigenvalues 3, 2, −1: smallest −1, middle 2.
- p6a: γ = ħ/Δ².
- p6b: Δx = Δ/√2, Δp = ħ/(√2 Δ), product ħ/2.
- p8a: ⟨H⟩ = ħ²/(4ma²) + ka²/4; best a² = ħ/√(mk).
- p8b: E ≥ ħ²/(8m d²) + k d²/2; minimising d² = ħ/(2√(mk)).
- p8c: E_gs = (ħ/2)√(k/m); the true ground state is a Gaussian that saturates ΔxΔp = ħ/2.
- p9a: A1 eigenvalues 3, 1, 1, −1: largest 3, repeated 1.
- p9b: u_{3,2} = ½(1,1,−1,−1), u_{1,1} = ½(1,1,1,1), u_{1,−1} = ½(1,−1,1,−1), u_{−1,2} = ½(1,−1,−1,1); a2(a1=3) = 2, a2(a1=−1) = 2.
- p9c: yes, the four pairs (3,2), (1,1), (1,−1), (−1,2) are distinct.

Numerical checks (numpy, scratch script rv5/blind.py): [A1, A2] = 0 for both problems; A2 in the u-basis = [[3,0,0],[0,1,−1.414214],[0,−1.414214,0]]; eigvalsh(A2) = (−1, 2, 3); 4×4: eigvalsh(A1) = (−1, 1, 1, 3), eigvalsh(A2) = (−1, 1, 2, 2); each of the four ±1 vectors checked as a common eigenvector.

### Comparison (one line per answer id)

- p1-mom: page index 0 "p̂ + p" = mine. Agree.
- p1-theta: page −x*p/hbar = mine. Agree.
- p1-cond: page "a whole multiple of 2πħ" = mine. Agree.
- p2-g: page hbar^2*(1/s^2 − x^2/s^4) = mine. Agree.
- p2-w: page −p*s^2/hbar = mine. Agree.
- p2-comm: page "iħ ψ̃(p)" = mine. Agree.
- p3-kind: page "symmetric" = mine. Agree (the three wrong choices are really insufficient: the 90° rotation is invertible, orthogonal and antisymmetric, yet has (u, Su) = 0).
- p3-s21: page −2.5 = mine. Agree.
- p3-count: page n*(n−1)/2 = mine. Agree.
- p3-tri: page "rows (0, 1) and (−1, 0)" = mine. Agree; only one choice is right (rows (0,0),(1,0) has the eigenvector (0,1)).
- p4-eig: page "0 and 1" = mine. Agree.
- p4-max: page sqrt(1+t^2) = mine. Agree.
- p5-m22: 1 = mine. Agree.
- p5-m32: −1.414 = mine. Agree.
- p5-m33: 0 = mine. Agree.
- p5-min: −1 = mine. Agree.
- p5-mid: 2 = mine. Agree.
- p6-gamma: hbar/D^2 = mine. Agree.
- p6-dx: D/sqrt(2) = mine. Agree.
- p6-dp: hbar/(sqrt(2)*D) = mine. Agree.
- p8-h: hbar^2/(4*m*a^2) + k*a^2/4 = mine. Agree.
- p8-a2: hbar/sqrt(m*k) = mine. Agree.
- p8-f: hbar^2/(8*m*d^2) + k*d^2/2 = mine. Agree.
- p8-d2: hbar/(2*sqrt(m*k)) = mine. Agree.
- p8-e: hbar/2*sqrt(k/m) = mine. Agree.
- p8-why: "the true ground state is a Gaussian with Δx Δp = ħ/2" = mine. Agree.
- p9-max: 3 = mine. Agree.
- p9-twice: 1 = mine. Agree.
- p9-a2top: 2 = mine. Agree.
- p9-a2low: 2 = mine. Agree.
- p9-vec: "(1, −1, 1, −1)" = mine. Agree.
- p9-label: "Yes, although each matrix alone has a repeated eigenvalue" = mine. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How to answer", first paragraph | (not MIT) | The example of plain typing is `hbar/(2*sqrt(m*k))`, which is exactly the answer of box p8-d2 (the minimising (Δx)² in Problem 8(b)). The page prints a box answer before the problem is attempted. | Replace the example with an expression that answers no box, e.g. `sqrt(2)*hbar/(m*L)` or `hbar^2/(2*m*L^2)`. |
| 2 | warning | Problem 9(a), second hint | (not MIT) | "The vectors that K sends to zero are eigenvectors of A₁ with eigenvalue 1." With hint 1 ("only two combinations", so a two-dimensional null space) this states the answer of box p9-twice outright. | Drop "with eigenvalue 1", e.g. "The vectors that K sends to zero are eigenvectors of A₁: with which eigenvalue, and how many independent ones are there?" |
| 3 | info | Intro, first paragraph | MIT gives no lesson mapping | Problem 4 (P² = P, orthogonal projectors) is listed under the Lecture 9 lesson. Orthogonal projectors are notes ch. 3 §5 and the Lecture 8 lesson's reading; the Lecture 9 lesson mentions a projector only in passing. | Optional: list Problem 4 under the Lecture 8 lesson, or say it practises notes ch. 3 §5. |
| 4 | info | Many solution formulas | n/a | 34 own-solution formulas use `cite="mit"` with "(our own solution)" / "(our own addition)", including the invented family P = [[1, t], [0, 0]] in 4(c). The course note says formulas not on MIT's sheet go to the lecture notes; but the same practice was accepted in the review of Set 4 (32 such citations), and these steps have no notes equation. | None needed for consistency with Sets 3 and 4. |
| 5 | info | p1-theta box | MIT asks only for the commutator | θ is defined only modulo 2π; the box accepts −xp/ħ but rejects, e.g., 2π − xp/ħ. | Optional: add "(the value that vanishes when xp = 0)" to the question. |

## Arithmetic and answer checks
- All 32 box answers agree with my independent blind solve (above).
- Solution steps rechecked by hand: P1 commutators and the small-x, small-p expansion check (−ixp/ħ on both sides); the wavefunction check (multiply then shift gives phase −xp/ħ); P2 derivatives, ⟨p̂²⟩ = ħ²/(2s²), the odd-function argument; P3 test vectors (1,0), (0,1), (1,1), (1,i), the 2i check, S² = −I, eigenvectors (1, ±i) with eigenvalues ±i, the eigenvalues of the four matrices in p3-tri; P4 the Pythagoras step, the choice a = −t(u,v)* and the bracket t|v|² − 2, case 2, the necessity check, null space (t, −1), range (1, 0), P† rows; P5 the columns A₂|u_j⟩, trace 4 and determinant −6, eigenvectors (1,1,−1) and (−1,2,1) of A₂ (also annihilated by A₁); P6 p̂ψ, γ, the sign argument, Δx, Δp = γΔx, the swapped-role γ = −Δ²/ħ = −Δx/Δp; P8 ⟨x²⟩ = a²/2, ⟨p²⟩ = ħ²/(2a²), both minima and the equal-terms check, consistency a²/2 = ħ/(2√(mk)); P9 the action of K, the four eigenvectors, A₂ swapping (1,0,1,0) and (0,1,0,1), U column by column, D₁ and D₂. All correct.
- Every solution ends with a "Check the result" step (units, limits, traces, independent routes).
- Mistake hints: each is true of its wrong formula (checked one by one; e.g. −xp/(2ħ) is the phase relating e^A e^B to e^{A+B}; 1 + t is |Pv| for v = (1,1); ħ/√(mk) is the minimiser obtained by losing the 4; ħ/(2Δ²) belongs to the exponent −x²/(4Δ²)).
- `vars` ranges: all positive and away from zero, formulas finite; the listed mistakes differ from the answers over the whole ranges.
- Number tolerances (lib/answers.ts: plain value = absolute, "%" = relative): 0.01 absolute for −2.5, 1, 0, −1, 2, 3; 0.5% for −1.414 (accepts −1.41, rejects −1.4). Appropriate.
- Choice positions 0, 2, 1, 2, 1, 3, 1, 3, 0 across the nine choice boxes; the right choice is never the longest string; none is answerable from units alone; no wrong choice is also a sufficient condition.
- Calcs file: `pytest tests/calc -k 8-05-problem-set-5` in the worktree: 56 passed. Independent routes are used (numerical derivatives and Fourier integrals, root finders, the Schrödinger equation for p8-e, characteristic polynomial, trace and sum-of-squares checks).
- Points: 5 + 5 + 10 + 10 + 5 + 5 + 8 + 10 = 58 = 65 − 7, as stated; part splits add up in every problem.

## Coverage and order
- MIT Problems 1–6, 8, 9 are present, in MIT's order, with MIT's points; parts in Problems 1–4 match MIT's parts. Problem 7 (only a pointer to Griffiths 3.32) is skipped and said so in the intro, as the course note requires.
- Additions (θ, Gaussian examples, S₂₁, the count, the choice boxes, the family in 4(c), Δx and Δp, the two widths, the p9 choice box) are marked as ours, in the intro list and in each part.
- `covers: [8, 9, 10, 11]` fits the topics: Problem 3 is the theorem of Lecture 8; Problems 1–2 the position and momentum states of Lecture 9; Problem 6 the saturation condition of Lecture 10; Problems 5, 8, 9 the ground-state lower bound and simultaneous diagonalisation of Lecture 11. `lecture: 11` and the five prerequisites match. (OCW's calendar puts Set 5 at Lecture 9; the wider range is justified by the content and overlaps Sets 4 and 6 acceptably.)

## Citations
- `cite="mit"` page numbers checked against the printed pages of MIT's PDF: Problems 1, 2 and 2(a) p. 1; 2(b), Problem 3, 4(a) p. 2; the 4(b) test, 4(c), Problem 5 (incl. eq. (1)) and Problem 6 p. 3; Problems 8 and 9 p. 4. All correct.
- Problem Set 4: Problem 2(b) eq. (1) e^A B e^{−A} = B + c, p. 2; Problem 4 eq. (2) e^{A+B} = e^B e^A e^{c/2} = e^A e^B e^{−c/2}, p. 2; "Problem 2(c)" for T̂(a)† x̂ T̂(a) = x̂ + a. Correct.
- Notes ch. 1 (reading4): (6.27) [x̂, p̂] = iħ, (5.20) variational functional. Correct.
- Notes ch. 3 (reading1): (4.72) Pythagorean identity, (4.73) Schwarz, (6.8) adjoint definition. Correct.
- Notes ch. 4 (reading2): (3.89) completeness, (3.91) x̂|x⟩ = x|x⟩, (3.99) ⟨p|p̂ = p⟨p|, (3.100) ⟨x|p⟩, (3.112) ⟨x|p̂|ψ⟩, (3.113) the exercise ⟨p|x̂|ψ⟩ = iħ d/dp. Correct.
- Notes ch. 5 (reading3): (1.2) uncertainty as a norm, (1.9) (ΔA)² = ⟨A²⟩ − ⟨A⟩² (checked on the rendered p. 2), (2.31) saturation condition, (4.51), (4.54), (4.56)–(4.59) the lower-bound argument, (4.61) with 0.4724 and the true 0.668. Correct.
- The "complete set of commuting observables" remark matches notes ch. 5 §8.

## Licensing
- MIT's sheet carries no "All rights reserved" or "Courtesy of" notice. No figures. No text copied verbatim beyond short standard phrases. Griffiths is not used or quoted (Problem 7 skipped). No OpenStax or LibreTexts material.

## Notes
- Symbols: the ~90 page-scoped meanings in the worktree's data/symbols.json were read; the letters with cosmology meanings (a, H, k, T) have page-scoped meanings that fit this page, and every symbol I found in the page's maths has a meaning. I did not run `content:check`, so a missing form remains possible but none was observed.
- No em dashes, no stray control characters, no `## Summary`.
- No cosmology callout or `leadsTo`, as expected for a problem set.
- The claims about lessons (Lecture 8 polarisation-identity proof with u ± v and u ± iv; Lecture 11 quartic bound 0.4724 against 0.668, and the oscillator remark) match the lesson files.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the plain-typing example in "How to answer" is now `hbar^2/(2*m*L^2)`, which answers no box.
- Warning 2: Problem 9(a), second hint, no longer names the eigenvalue: it asks which eigenvalue and how many independent eigenvectors.
- Info 1: the intro now links Problems 3 and 4 to the Lecture 8 lesson (projectors) and Problems 1 and 2 to the Lecture 9 lesson.
- Info 2 and 3: kept as they are (same practice as the reviewed Set 4; the box statement fixes θ by the condition it must satisfy).

Status set to `reviewed`.
