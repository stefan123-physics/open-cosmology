---
page: content/year-2/18.06/linear-transformations-matrices.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-30-linear-transformations-and-their-matrices/ (lecture page not fetched separately; URL matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/7ad2350defc787c1261729c57131ec6c_Ts3o2I8_Mxc.pdf (read: all 18 transcript pages from a local copy, per-page text extracted with pdftotext -f N -l N; PDF page 19 is blank)
verdict: pass-with-notes
---

# Review: Linear transformations and their matrices

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The matrix of a transformation": the column rule (pp. 15–16) is stated before "Projection in a good basis" (pp. 11–14) | Strang sets up the two bases (pp. 10–11), then works the projection example (pp. 11–14), and only then writes down the column rule (pp. 15–16) and its check (p. 16). | Rule and check first, projection example second. The page citations make the reordering visible. | Acceptable as a teaching choice; optionally add "(Strang works the projection example first, pp. 11–14)" or move the rule after the projection. |
| 2 | info | "The derivative", last paragraph, "Matrix multiplication really came from linear transformations (p. 18)" | p. 18: "matrix multiplication really came from linear transformations". | Same seven words, unquoted, presented as Strang's view. | Put it in quotation marks (it is attributed already) or paraphrase. |
| 3 | info | "Same projection, standard basis": "the familiar $P = aa^T/a^Ta$ of chapter 4 (p. 14)" | The transcript renders it as "P was A, A transpose over A transpose A" (p. 14); spoken, "a" and "A" cannot be told apart, and for a line the chapter 4 formula is $aa^T/a^Ta$. | $aa^T/a^Ta$. | Correct as written; no change needed. Noted only because the transcript text reads like the subspace formula with capital A. |

No error-level differences were found. Every formula was checked against the transcript:
- Linearity, two rules, p. 2: the two operations (sums and scalar multiples, c = 2 and c = −1) are on p. 2. Correct.
- Linearity in one rule, p. 2: "I can combine those into one statement" (p. 2). Correct.
- $T(0) = 0$, p. 3: argued with v = 0, c = 3 on p. 3. Correct, and the page uses the same argument.
- Reflection $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, p. 6: matrix, roof tip and door upside down all on p. 6. Correct.
- Linearity on a basis, p. 9: $c_1T(v_1) + \cdots + c_nT(v_n)$ on p. 9. Correct.
- Columns of the matrix, pp. 15–16: first column on p. 15, second column on p. 16. Correct.
- Projection in its eigenvector basis, p. 13: matrix (1 0; 0 0) and A times (c₁, c₂) = (c₁, 0) on p. 13; Λ also p. 13. Correct.
- Same projection, standard basis, p. 14: correct.
- Matrix of the derivative, pp. 17–18: rows "zero, one, zero" and "zero, zero, two" on p. 17, "That's the matrix" on p. 18. Correct.

Other claims checked: courses used to begin with this lecture, physicists prefer no coordinates, every transformation leads to a matrix (p. 1); transformation / map / mapping, no axes needed (p. 2; "mapping" also p. 1); shift by $v_0$ adds only one $v_0$ (pp. 2–3); length from R³ to R¹, $c = -2$ fails (pp. 3–4); rotation by 45° linear (p. 4), house on the book cover, Section 7.1 (p. 5); $T(v) = Av$ linear (p. 5); R³ to R² via a 2 × 3 matrix (pp. 7–8); "no other examples" (p. 8); $v_1$, then independent $v_2$ gives the plane (pp. 8–9); coordinates from a basis, unique, (3, 2, 4) in the standard basis, eigenvector bases (pp. 9–10); two bases, matrix takes input to output coordinates (pp. 10–11); same basis for inputs and outputs, unit vectors on and perpendicular to the line (p. 12); eigenvalues 1 and 0 (pp. 13–14); physicist's choice, 45° line, (1, 0) and (0, 1) both to (½, ½), symmetric, P² = P, "handiest basis" (p. 14); derivative is linear, short list of derivatives (p. 17); inverse and product of matrices match the transformations (p. 18). All page citations agree with the transcript pages.

Lecturer slips (not repeated on the page, and minor enough not to need a bracketed note): output basis called "w1 up to wn" on p. 11 (page uses $w_m$); "vm, let's say, or vn" on p. 9; "m-dimensional space to n-dimensional space. n to m, I guess" on p. 10 (self-corrected).

## Arithmetic and answer checks
- `npm run calc:test -- -k linear-transformations`: 6 passed.
- Projection onto the 45° line: $aa^T/a^Ta$ with $a = (1, 1)$ gives all entries ½; $P^2$ entry = ¼ + ¼ = ½. Correct.
- Worked example (a): $v_1 = (1,1)/\sqrt2$ lies on $y = x$, $v_2 = (1,-1)/\sqrt2$ is perpendicular; reflection gives diag(1, −1). Standard basis: (1, 0) → (0, 1), (0, 1) → (1, 0), so columns (0, 1), (1, 0) and $A = \begin{pmatrix}0&1\\1&0\end{pmatrix}$. Correct.
- Worked example (b): columns (0,0,0), (1,0,0), (0,2,0), (0,0,3) give the 3 × 4 matrix shown; $A(4, -1, 5, 2) = (-1, 10, 6)$; $p'(x) = -1 + 10x + 6x^2$. Correct.
- calcs file: entries match the page. `ex-deriv` packs the output vector into one number (−1·10⁴ + 10·10² + 6 = −8994), which works but is opaque; `derivative-matrix` and `zero-fixed` are near-trivial. Acceptable; separate entries per component would be clearer.
- Quiz 1: answer 2 (rotation). Correct; shift, length and componentwise squaring are all nonlinear. Explanation correct.
- Quiz 2: answer 0. Correct; explanation matches p. 3.
- Quiz 3: answer 1. Correct.
- Quiz 4: answer 0. Correct; option 4 would give $(2c_3, c_2)$, option 3 is the wrong shape.
- Flashcards: all four correct.

## Coverage and order
- Follows Strang's order apart from finding 1: definition via projection (pp. 1–2), non-examples (pp. 2–4), rotation and house (pp. 4–5), $T(v) = Av$ and the upside-down house (pp. 5–6), R³ → R² (pp. 7–8), a basis is enough (pp. 8–9), coordinates (pp. 9–10), the matrix (pp. 10–16), the derivative (pp. 16–18), closing remark (p. 18).
- Nothing substantial left out. Strang's passing mention of "some formula that involved squaring" as a non-example (p. 3) appears only as a quiz distractor; fine.
- Additions: the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript text (searched). 18.06 Spring 2010 is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases; see finding 2 (one seven-word sentence that should be quoted) and the quoted "the handiest basis".
- Worked example: the transcript has no example like it, so it is not copied from the lecture. Part (b), the derivative from cubics to quadratics with matrix entries 1, 2, 3, is a standard example and very likely also appears in Strang's textbook (Introduction to Linear Algebra, Section 7.2); **not verified** (book not read). The polynomial $4 - x + 5x^2 + 2x^3$ and part (a) are the page's own, so the example as a whole is sufficiently original.

## Notes
- `leadsTo` 18.06 Lecture 31 "Change of basis; image compression" matches the syllabus in `_course.json`; Strang's p. 18 says he will continue the theme after Thanksgiving, which fits.
- Prerequisites `singular-value-decomposition` and `projections-onto-subspaces` both exist.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source and transcript URLs were not checked online (the local PDF supplied by the caller was used).

## Resolution (2026-11-16, by the page author)

1. Added that Strang works the projection example first (pp. 11–14) and then states the rule (pp. 15–16).
2. "Matrix multiplication really came from linear transformations" is now in quotation marks as Strang's words.
3. No change.

Calcs: `ex-deriv` split into three entries, one per output.

Status set to reviewed.
