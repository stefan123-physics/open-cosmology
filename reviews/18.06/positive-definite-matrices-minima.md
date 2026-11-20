---
page: content/year-2/18.06/positive-definite-matrices-minima.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-27-positive-definite-matrices-and-minima/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/111608202724f78b5b19ef52dcbe61c9_vF7eyJ2g3kU.pdf (read: all 19 pages, per-page text extracted with pdftotext -f N -l N; PDF page = transcript page)
verdict: pass-with-notes
---

# Review: Positive definite matrices and minima

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph, last sentence | "I made a start on those briefly in a previous lecture" (p. 1). The immediately previous lecture (26) was complex matrices and the FFT; Strang refers to it separately on p. 4 ("after that last lecture that said what to do in the complex case"). The start on positive definite matrices was Lecture 25. | "The previous lecture made a start", linking to symmetric-matrices-positive-definite (Lecture 25). | "An earlier lecture (Lecture 25) made a start". |
| 2 | info | "A 3 × 3 example and an ellipsoid", bracketed note on half-axes | Strang: "The eigenvalues tell us the lengths of those axes, actually the lengths, or the half-lengths, or one over the eigenvalues, it turns out" (p. 19). Taken literally, "one over the eigenvalues" is a slip: for $x^TAx = 1$ and $x = tq$ with $Aq = \lambda q$, $\lambda t^2 = 1$, so the half-length is $1/\sqrt{\lambda}$. | "(Strang hesitates over the exact relation; for $x^TAx = 1$ the half-length along an eigenvector is $1/\sqrt{\lambda}$.)" | The note is mathematically correct. Optionally make the slip explicit, as AGENTS.md rule 4 suggests: "(Strang says "one over the eigenvalues"; for $x^TAx = 1$ the half-length along an eigenvector is $1/\sqrt{\lambda}$.)" |
| 3 | info | Quiz 4 explanation | p. 19 (see #2). | "the eigenvalues their lengths". | Optionally add "(half-lengths $1/\sqrt{\lambda}$)" so the quiz agrees with the bracketed note. |
| 4 | info | "Minima" section placement | Strang's calculus aside (second derivative positive, matrix of second derivatives positive definite) comes on pp. 9–10, between the bowl and completing the square; the explicit matrix $f_{xx}, f_{xy}; f_{yx}, f_{yy}$ comes on p. 14, after elimination. | Both parts are gathered into one section after elimination, citing p. 10 and pp. 14–15. | Acceptable regrouping (citations are correct). No change needed; optionally mention in passing that the calculus point first arises with the bowl (p. 10). |

Every formula was checked against the transcript:
- Four tests, pp. 1–2: eigenvalues and determinants (p. 1, "determinant test" named p. 2), pivots $a$ and $(ac-b^2)/a$ with "the product is the determinant" (p. 2), $x^TAx > 0$ with the star and "the definition ... would be this number four" (p. 2). Correct.
- Quadratic form for (2 6; 6 18), p. 4: written out with $a$, $2b$, $c$ on p. 4. Correct.
- Completing the square, pp. 11–12: $2(x+3y)^2$ with 18 $y^2$ on p. 11, "two left" on p. 12. Correct.
- Elimination $A = LU$, p. 13: multiplier 3, second pivot 2, L = (1 0; 3 1) on p. 13. Correct.
- Matrix of second derivatives, pp. 14–15: written on p. 14 with the symmetry argument; the determinant condition from 18.02 on p. 15. Correct.
- Second-difference matrix, pp. 15–17: matrix p. 15, determinants 2, 3, 4 and pivots 2, 3/2, 4/3 and eigenvalues p. 16, trace and determinant checks p. 17. Correct.
- $x^TAx$ for the 3 × 3 matrix, p. 17. Correct.

Other claims checked against the cited pages: "the guy to watch" and the three goals (p. 1); northwest determinants (p. 2); $c > 18$, $c = 19$ gives $38 - 36$, $c = 18$ semidefinite, eigenvalues 0 and 20 from the trace, one pivot, rank one (pp. 2–3); purely second degree, no linear or constant part (pp. 4–5); definition for all $x \neq 0$ (p. 5); $c = 7$: determinant $-22$, pivots 2 and $-11$ (p. 5); $(1, -1)$ gives $2 - 12 + 7$ (p. 6); up along both axes and along $x = y$, down along $x = -y$, saddle, maximum in some directions and minimum in others, eigenvector directions (pp. 7–8); determinant 4, trace 22, both positive (pp. 8–9); bowl, squares overwhelm the cross term (p. 9); leftovers $0y^2$ and $-11y^2$ (p. 12); ellipse at height 1, hyperbola for a saddle (p. 12); pivots outside, multipliers inside (pp. 13–14); "it's all connected together" and n × n (pp. 13–14); determinants grow linearly (p. 16); eigenvalues recalled from memory and checked (pp. 16–17); paraboloid, three squares times pivots (pp. 17–18); four dimensions, lopsided football (p. 18); sphere for the identity, rugby ball for a repeated eigenvalue, major/middle/minor axes, $A = Q\Lambda Q^T$ principal axis theorem (pp. 18–19). All page citations agree with the transcript pages.

## Arithmetic and answer checks
- `npm run calc:test -- -k positive-definite-matrices-minima`: 22 passed.
- Recomputed by hand: $38 - 36 = 2$; $c = 18$: det 0, trace 20; $14 - 36 = -22$, pivot $-11$; $2 - 12 + 7 = -3$; $40 - 36 = 4$, trace 22; $2(x+3y)^2 + 2y^2 = 2x^2 + 12xy + 20y^2$; $20 - 18 = 2$; 3 × 3 determinant $2\cdot3 - 1\cdot2 = 4$; eigenvalues sum 6, product $2(4-2) = 4$; $\det(A - \lambda I) = d^3 - 2d$ with $d = 2 - \lambda$, roots $d = 0, \pm\sqrt2$, so $\lambda = 2, 2 \mp \sqrt2$. All correct.
- Worked example (a): $3c - 16 > 0 \Rightarrow c > 16/3$; $3(x + \frac43y)^2 = 3x^2 + 8xy + \frac{16}{3}y^2$, leftover $\frac23y^2$; pivots 3 and $\frac23$, product 2 = $18 - 16$; $\lambda = (9 \pm \sqrt{81 - 8})/2 = (9 \pm \sqrt{73})/2 \approx 8.772, 0.228$. Correct.
- Worked example (b): leading determinants 4, $12 - 4 = 8$, $4(6-1) - 2(4-0) = 12$; pivots 4, 2, 3/2; $x^TBx = 4x_1^2 + 3x_2^2 + 2x_3^2 + 4x_1x_2 + 2x_2x_3$. Correct.
- calcs file: all 22 entries match the page text. Not covered (info only): the 3 × 3 pivots 3/2, 4/3 and the example's pivot product $3 \cdot \frac23 = 2$; trivially checkable, optional to add.
- Quiz 1: answer 1 ($c > 18$). Correct; explanation correct.
- Quiz 2: answer 1 (elimination, pivots outside, multipliers inside). Correct.
- Quiz 3: answer 2 (Hessian positive definite). Correct; explanation ($f_{xx}f_{yy} > f_{xy}^2$ as well) correct.
- Quiz 4: answer 2 (ellipsoid along eigenvectors). Correct; see #3 for the wording on lengths.
- Flashcards: all four correct (the semidefinite card's example, eigenvalues 0 and 20, matches p. 3).

## Coverage and order
- The page follows Strang's order: goals (p. 1), four tests (pp. 1–2), $c = 19, 18$ (pp. 2–3), quadratic form (pp. 4–5), $c = 7$ saddle (pp. 5–8), $c = 20$ bowl (pp. 8–12), completing the square as elimination (pp. 13–14), second-derivative matrix (pp. 14–15), 3 × 3 example and ellipsoid (pp. 15–19). The only regrouping is the calculus aside of p. 10 (see #4).
- Small omissions (info only): Strang's remark that for a pure quadratic the first derivatives vanish automatically at the origin, so the second derivatives decide (pp. 9–10); the "back to real matrices after the complex lecture" remark (p. 4). Neither is needed.
- Additions: the worked example (original numbers) and the $1/\sqrt{\lambda}$ half-axis note (flagged in brackets).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched both text extractions: 0 matches). 18.06 Spring 2010 is under CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("the guy to watch", "it's all connected together"), which is fine.
- Worked example: the lecture's 2 × 2 example is (2 6; 6 c) and its 3 × 3 example is the second-difference matrix; the page uses (3 4; 4 c) and a different 3 × 3 matrix $B$, so it is original with respect to the lecture. Whether the numbers coincide with an exercise in Strang's textbook (Introduction to Linear Algebra, Section 6.5) was **not verified** (book not read); they look generic.

## Notes
- `leadsTo` 18.06 Lecture 28 "Similar matrices and Jordan form" matches the syllabus in `_course.json`. The "why" (more on positive definite matrices, $A^TA$, then similar matrices) agrees with the existing draft page content/year-2/18.06/similar-matrices-jordan-form.mdx; the Lecture 28 transcript itself was **not** read for this review. Strang's Lecture 27 ends only with "See you on Friday" (p. 19), so no preview claim is needed.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page (0 found).
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1. The opening now says "An earlier lecture (Lecture 25) made a start".
2. The ellipsoid note now quotes Strang's words and gives the half-length 1/√λ.
3. Quiz 4's explanation now adds the half-lengths 1/√λ.
4. No change (regrouping kept; citations correct).

Calcs: added the 3 × 3 pivot product and the worked example's pivot product.

Status set to reviewed.
