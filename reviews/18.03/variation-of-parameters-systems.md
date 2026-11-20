---
page: content/year-2/18.03/variation-of-parameters-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-28-matrix-methods-for-inhomogeneous-systems/ (read: local copy lec.html; title "Lecture 28: Matrix Methods for Inhomogeneous Systems"; its only .pdf link is 2369b04a6e868df2f41f33d72345a9aa_2SuTN8rpe4I.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/2369b04a6e868df2f41f33d72345a9aa_2SuTN8rpe4I.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L28", 16 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 29 = "Matrix Exponentials"; the Lecture 29 transcript was not read)
  - calcs/18.03/variation-of-parameters-systems.yaml (read; `npm run calc:test -- -k variation-of-param`: 6 passed)
verdict: pass-with-notes
---

# Review: Fundamental matrices and inhomogeneous systems

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 subtext "thinking in terms of matrices", 2 × 2 (also true n × n), constant matrix, Theorem A begins; p. 2 x₁, x₂ linearly independent ("neither is a constant multiple of the other"), easy part (linearity + superposition), hard part ("no other solutions"); p. 3 two constants "not adequate", Theorem B, Wronskian := det(x₁, x₂), relation to the old Wronskian set as homework; p. 4 more general definition, identically zero (dependent) or never zero (independent), start of the fundamental matrix ("put them all together in a single matrix"); p. 5 "fundamental matrix for A", X := (x₁ x₂), two properties, det X ≠ 0; p. 6 never zero, X′ = AX as a matrix differential equation, differentiate entry by entry; p. 7 AX = (Ax₁ Ax₂), "in one breath", start of inhomogeneous systems; p. 8 x′ = Ax + r(t), Theorem C, x = x_c + x_p by linearity and superposition; p. 9 finding x_p was the work for single equations, tan t (homework), Laplace and Fourier unsuitable, any input, mixing problem announced; p. 10 two 1-litre tanks, flows 3, 2, 2, balance gives 1 L/h in each, concentration 5e^{−t} and 0, inflow minus outflow; p. 11 x′ = −3x + 2y + 5e^{−t}, y′ = 3x − 4y, the matrix; p. 12 column (5e^{−t}, 0), outside pipes make it inhomogeneous, variation of parameters, "Lagrange, I am not sure", parameters that vary; p. 13 v₁, v₂, x_p = Xv with v on the right, check of the product; p. 14 on the left it fails, substitute, product rule X′v + Xv′; p. 15 = AXv + r, cancellation, Xv = r, X⁻¹ on the left, inverse exists, "I forgot the prime"; p. 16 integrate each entry, x_p = X∫X⁻¹r dt, 2 × 2 inverse rule, leave the integral, no constants, tank problem left to recitation.

Formula locations: "General solution of the homogeneous system" pp. 1–2; "Wronskian of two solutions" p. 3; "Fundamental matrix" p. 5; "Matrix differential equation" p. 6; "Inhomogeneous system" p. 8; "Two tanks with salt coming in" pp. 11–12 (scalar equations p. 11, column (5e^{−t}, 0) p. 12); "Trial particular solution" p. 13; "Substitution" pp. 14–15 (left side p. 14, right side p. 15); "Variation of parameters" pp. 15–16 (v′ = X⁻¹r p. 15, x_p p. 16). All correct.

Prose citations also checked: subtext and theory first p. 1; Theorem A pp. 1–3; independence p. 2; easy/hard parts pp. 2–3; Theorem B pp. 3–4; generalization as homework pp. 3–4; "those who work with systems" p. 4; properties pp. 5–7; columns interpretation pp. 6–7; inhomogeneous system pp. 7–8; Theorem C p. 8; special methods for single equations pp. 8–9; tan t p. 9; tank set-up pp. 9–12 (concentrations p. 10); "outside pipes" p. 12; Lagrange, varying constants pp. 12–13; v on the right pp. 13–14; on the left p. 14; product rule, order kept pp. 14–15; cancellation and the missing prime p. 15; inverse, integrate pp. 15–16; 2 × 2 inverse rule, leave the integral, no constants, recitation p. 16. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Theorem C paragraph: "for **any** input, even one like $\tan t$, which neither the Laplace transform nor Fourier series can handle (p. 9)" | p. 9: tan t is the right-hand side of a single equation in the second part-two homework problem, which the students will solve by turning it into a system; Laplace fails because nobody knows the transform of tan t, and Fourier series are "not a good choice" for a function that goes to infinity at π/2. | Reads as if tan t were an input of a system in the lecture. The substance (the method works for any input, tan t included) is correct. | Optional: "even for a single equation with input $\tan t$, once it is written as a system (a homework problem), which neither …". |
| 2 | info | Quiz 2, choice "On the left: $\vec v X$" and explanation | p. 14: written "on the other side" one gets v₁x₁ + v₂y₁, "not at all what I want". | With $\vec v$ a column vector, $\vec v X$ is not even defined (a 2 × 1 times a 2 × 2); Mattuck's left product is the row $(v_1, v_2)$ times X. The marked answer is right; the distractor is only loosely stated. | Optional: explanation "a column vector cannot stand on the left of $X$; as a row, $(v_1\;v_2)X$ gives $v_1x_1 + v_2y_1$, not the combination wanted". |
| 3 | info | Quiz (all three questions) | (not MIT) | The correct answer is choice 0 in every question, and the quiz component (`components/Quiz.tsx`) does not shuffle; it is also the longest choice in Q1 and Q3. The same pattern holds for most 18.03 pages (67 of 81 answers are 0). | Vary the position of the correct answer (course-wide). |
| 4 | info | Opening: "as on the [previous pages](/courses/18-03/sketching-linear-systems) (p. 1)" | p. 1: "like you will have on your homework"; constant until the end of the term. | Fine; the "(p. 1)" supports the constant-matrix assumption, not the link. | None needed. |

Lecturer slips and transcript garbles checked:
- p. 15: Xv = r and v = X⁻¹r are first written without the prime ("Of course this is not right. I forgot the prime here."). The page writes $X\vec v\,' = \vec r$ and notes "(The lecture first writes $X\vec v = \vec r$ and adds the prime.)" Accurate: in the transcript both lines lacked the prime and it was added afterwards.
- p. 12: "This method is for solving x prime equals Ax" (should be Ax + r): not repeated; the page states the method for $\vec x\,' = A\vec x + \vec r$.
- p. 11: "Is it y 2 liter?" garbled; the coefficient 2y is right and the page has it.
- p. 2 "department of fuller explanation", p. 8 "complimentary", p. 9 "peaked", p. 14 "rate shape", p. 3 "end-by-end" (p. 1, n-by-n): garbles, not repeated.
- p. 12: "discovered a couple hundred years ago by, I think, Lagrange, I am not sure": the page keeps the hedge ("the lecture guesses Lagrange"). Fine.

## Arithmetic and answer checks
- `npm run calc:test -- -k variation-of-param`: 6 passed.
- Tank flow balances: tank 1 loses 3 L/h to tank 2 and gains 2 L/h from it, so 1 L/h must enter from outside; tank 2 gains 3 and loses 2 (back) + 2 (out) = 4, so 1 L/h must enter. Matches p. 10 and the page. Salt: x′ = −3x + 2y + 1·5e^{−t}, y′ = 3x − 2y − 2y + 1·0 = 3x − 4y, with amount = concentration in 1-litre tanks. Matrix $\begin{pmatrix} -3 & 2 \\ 3 & -4 \end{pmatrix}$ and forcing $(5e^{-t}, 0)$ correct. (Column sums −3 + 3 = 0 and 2 − 4 = −2: the only salt leaving the system is via the 2 L/h outflow from tank 2, consistent.)
- Worked example, recomputed by hand: $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, eigenvalues ±1, eigenvectors (1, 1), (1, −1). $\det X = e^t(-e^{-t}) - e^{-t}e^t = -2$. $X^{-1} = \frac{1}{-2}\begin{pmatrix} -e^{-t} & -e^{-t} \\ -e^t & e^t \end{pmatrix} = \frac12\begin{pmatrix} e^{-t} & e^{-t} \\ e^t & -e^t \end{pmatrix}$ (the page's rule "swap the diagonal, change signs of the others, divide by the determinant" applied). $X^{-1}(0, e^{2t}) = \frac12(e^t, -e^{3t})$; integral $(\frac12 e^t, -\frac16 e^{3t})$. $X\vec v = (\frac12 e^{2t} - \frac16 e^{2t}, \frac12 e^{2t} + \frac16 e^{2t}) = (\frac13 e^{2t}, \frac23 e^{2t})$. Check: $x' = \frac23 e^{2t} = y$; $y' = \frac43 e^{2t} = x + e^{2t}$. Correct. Cross-check by undetermined coefficients: $(a, b)e^{2t}$ with $2a = b$, $2b = a + 1$ gives $a = \frac13$, $b = \frac23$. Correct.
- Example originality: the system x′ = y, y′ = x + e^{2t} does not occur in the transcript (the lecture does no worked example; it leaves the tank problem for recitation). Original.
- Quiz 1: answer 0 ($X' = AX$, $\det X \ne 0$). Correct; explanation correct.
- Quiz 2: answer 0 (on the right). Correct; see finding 2 on the distractor.
- Quiz 3: answer 0 ($X\int X^{-1}\vec r\,dt$). Correct; explanation correct.
- Flashcards: all three correct ("no integration constant needed" matches p. 16).
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file: `shown` strings occur on the page. `ex-v` only checks $\frac12 - \frac16 = \frac13$ (the x-component at t = 0); it does not check $X^{-1}$ or $\vec v$ itself, though `ex-xp-x`/`ex-xp-y` verify the final $\vec x_p$ solves the system, which is what matters (info: an identity check of $\vec v' = X^{-1}\vec r$, or of $X\vec v = \vec x_p$ at several t, would make it stronger). `ex-wronskian`, `ex-xp-*` cite `reading1` pp. 5/16 although page-own (`origin: page-own` is set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: matrices as subtext, 2 × 2 constant system (p. 1) → Theorem A (pp. 1–3) → Theorem B, Wronskian (pp. 3–4) → fundamental matrix and its two properties (pp. 4–7) → inhomogeneous systems, Theorem C (pp. 7–8) → x_p easy for any input, tan t (p. 9) → tank example (pp. 9–12) → variation of parameters (pp. 12–16) → 2 × 2 inverse, no constants, recitation (p. 16). Same order as MIT.
- Left out (minor): the theory holds for n × n too (p. 1); that "two arbitrary constants" is not an adequate proof (p. 3); Mattuck's illustration that a never-zero Wronskian is like $e^t$ or a constant (p. 4); the remark that putting r(t) on the right side makes "inhomogeneous" less visually obvious than for second-order equations (p. 8); that without the outside pipes the flows would have to change (3 instead of 2, p. 12) for a closed homogeneous system; the preview that the fundamental matrix and "v on the right" return next lecture (pp. 4, 14). None is essential; the n × n remark could be one clause.
- Added: the worked example (page-own).
- `prerequisites: [sketching-linear-systems]`: that page exists in the working tree but is not yet committed (expected, per the task). The inline link `/courses/18-03/linear-operators-and-wronskian` points to an existing page.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("in one breath", "matrix differential equation", "variation of parameters", "the subtext") are brief standard or attributed phrases and acceptable.
- The worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 29 ("The matrix exponential, a fundamental matrix written in one formula."): matches the Lecture 29 title "Matrix Exponentials" in `_course.json`, and this transcript says the fundamental matrix is the topic "this period and next one on Monday" (p. 4) and that v on the right "is going to plague us on Monday" (p. 14). That $e^{At}$ is a fundamental matrix (the one equal to $I$ at $t = 0$) is standard; that Lecture 29 presents it that way is very likely but unverified here because the Lecture 29 transcript was not read (uncertain).
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. The tan t remark now says it is the input of a single equation, which a homework problem solves by turning it into a system.
2. The wrong quiz 2 choice now reads "on the left, as a row vector times X".
3. The correct answers in quizzes 1 and 3 have been moved off the first position. That most 18.03 answers sit at position 0 is noted for the owner in the run log.

The omitted remarks are left out as before. Status set to `reviewed`.
