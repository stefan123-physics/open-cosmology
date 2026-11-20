---
page: content/year-2/18.06/symmetric-matrices-positive-definite.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-25-symmetric-matrices-and-positive-definiteness/ (read: transcript link e92d794482d7b331dfa7f9324f2f5150_UCc9q_cAhho.pdf and CC BY-NC-SA 4.0 licence confirmed)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e92d794482d7b331dfa7f9324f2f5150_UCc9q_cAhho.pdf (read: all 18 pages, extracted page by page with pdftotext -f N -l N; the jumbled proof on pp. 3–7 was read per page)
verdict: pass-with-notes
---

# Review: Symmetric matrices and positive definiteness

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Signs of pivots and eigenvalues", last sentences of the paragraph after the formula (p. 14) | Strang says, still about symmetric matrices, that nobody should confuse pivots with eigenvalues: the only equality between them is that their products agree (both equal det A), which says nothing about the 50 individual values, "which this [the sign rule] does" (p. 14). | "The pivots are not the eigenvalues. What they share without symmetry is only the product." This turns Strang's point into a claim about non-symmetric matrices that he does not make on p. 14. The claim is roughly true, but it is attributed to p. 14 and loses the contrast he draws (the product says nothing about individual eigenvalues; the sign rule does). | e.g. "The pivots are not the eigenvalues: their only exact link is the product, since both give det A (the pivots when there are no row exchanges). That says nothing about the individual eigenvalues; the sign rule does (p. 14)." |
| 2 | info | `<Formula label="Strang's example" ... at="p. 16">` | The matrix is introduced on p. 15 ("Five three two two"); pivots, determinant and eigenvalues are worked out on p. 16. | `at="p. 16"`; the preceding sentence correctly says pp. 15–16. | `at="pp. 15–16"`. |
| 3 | info | "Strang's example" (reading of "five three two two") | The transcript says only "Five three two two" (p. 15); later "Five and three, the trace" gives trace 8 and the determinant is "eleven" (p. 16). | Shows $\begin{pmatrix}5&2\\2&3\end{pmatrix}$ with no comment. | The reading is correct: diagonal 5 and 3 (trace 8), symmetric with off-diagonal entries equal, and $15 - b^2 = 11$ gives $b = \pm2$; "two two" fixes $b = 2$. Pivots 5, 11/5 and eigenvalues $4 \pm \sqrt5$ follow (Strang's "I think five" on p. 16 means $\sqrt5$). Optional: a short bracket "(the transcript reads 'five three two two'; trace 8 and determinant 11 fix the matrix)". |
| 4 | info | "Positive definite matrices", the diagonal counterexample | "a matrix minus one minus three", determinant positive, pivots negative, "eigenvalues ... also the same" (p. 17); "that minus one there is negative" (p. 18). | $\begin{pmatrix}-1&0\\0&-3\end{pmatrix}$. | Reading is correct: only a diagonal matrix with entries −1, −3 has pivots and eigenvalues both equal to −1, −3, determinant 3 and first sub-determinant −1. No change needed. |
| 5 | info | `leadsTo` | Strang: "in this lecture and particularly next Wednesday and Friday" the course comes together, "this will be the positive definite section" (p. 18); also the next lecture (Monday) repeats $\bar x^Tx$ for complex vectors (p. 9). | Only Lecture 26 (complex matrices) is listed. | Optionally add Lecture 27 "Positive definite matrices and minima" (syllabus entry exists in `_course.json`). |

Every formula was checked against the transcript:
- Spectral theorem $A = Q\Lambda Q^{-1} = Q\Lambda Q^T$, pp. 3–4: $S\Lambda S^{-1}$ on p. 2, letter Q and $Q^{-1} = Q^T$ on p. 3, transposing the product gives it back pp. 3–4. Correct.
- Conjugate and transpose, p. 5: $\bar A\bar x = \bar\lambda\bar x$, A real, transposed to $\bar x^TA^T = \bar x^T\bar\lambda$, symmetry used (p. 5, end; "at that moment I used the assumption" top of p. 6). Correct.
- The comparison, pp. 6–7: multiplying by $x$ on the right and by $\bar x^T$ on the left (p. 6), "same left hand side ... same right hand side", $\lambda\bar x^Tx = \bar\lambda\bar x^Tx$ (p. 7). Correct. (Strang first multiplies by $\bar x$ by mistake and corrects himself on p. 6; the page shows only the corrected version, which is right.)
- Length squared, pp. 8–9: components, $a \pm ib$, $iab$ and $-iab$ cancel (p. 8); positivity and cancelling (p. 9). Correct.
- Spectral sum, pp. 11–12: columns times rows on p. 11; projection matrices on p. 12. Correct.
- Pivots and eigenvalues, p. 14: correct.
- Strang's example, p. 16 (see #2): correct.
- Determinant test, pp. 17–18: correct.

Other claims checked against their pages: "most important class" and Markov eigenvalue 1 (p. 1); proof of perpendicularity left to the book (p. 1); identity, "can be chosen", repeated eigenvalue plane, full set (pp. 1–2); "one of the famous theorems" (p. 3); spectrum of light, principal axis theorem, directions do not couple (p. 4); complex eigenvalues of a real matrix in pairs (p. 5); "multiply numbers by their conjugates" and next lecture (p. 9); $\bar A^T = A$, 99% real (pp. 9–10); chapter four projection $aa^T$ without dividing (p. 12); stability (p. 13); 50 × 50, "20 years ago, or 30", very bad way, fine for 2 × 2 and 3 × 3, highly unreliable (p. 13); pivots safely and quickly, 28 positive, shift by 7 (p. 14); next section of the book, "all pivots positive ... the good way to test" (pp. 15–16); pivots, determinants, eigenvalues coming together (p. 18). All citations agree with the printed transcript pages.

Lecturer slips: on p. 13 Strang says "If I had a real matrix, I could find those 50 pivots" where he means a symmetric one (he says "for symmetric, I'm always talking about symmetric matrixes" on p. 14). The page states the rule for symmetric matrices, which is right; no note is needed.

## Arithmetic and answer checks
- `npm run calc:test -- -k symmetric-matrices`: 15 passed.
- Strang's example: det = 15 − 4 = 11; second pivot 3 − (2/5)·2 = 11/5; λ² − 8λ + 11 = 0, λ = 4 ± √(16 − 11) = 4 ± √5; 4 − √5 = 1.764 ≈ 1.76. Correct.
- diag(−1, −3): determinant 3, first sub-determinant −1. Correct.
- Worked example (a): trace 15, det 54 − 4 = 50, roots 10 and 5. $(A - 10I)(1, 2) = (-4 + 4, 2 - 2) = 0$; $(A - 5I)(2, -1) = (2 - 2, 4 - 4) = 0$; dot product 0. $10q_1q_1^T = 2\begin{pmatrix}1&2\\2&4\end{pmatrix}$, $5q_2q_2^T = \begin{pmatrix}4&-2\\-2&1\end{pmatrix}$, sum (6 2; 2 9). Pivots 6 and 9 − 4/6 = 50/6 = 25/3; sub-determinants 6 and 50. All correct.
- Worked example (b): pivots 1 and 1 − 9 = −8; λ² − 2λ − 8 = (λ − 4)(λ + 2); product of pivots −8 = 4 · (−2). Correct.
- calcs file: every entry matches the page. The `conj-product` identity checks only the real part (the vanishing imaginary part is not tested); the source citations of some page-own entries (`ex-perp` at p. 1, `ex-c-pivot`/`ex-c-char` at p. 14) point to the related idea rather than a computation, which is harmless.
- Quiz 1: answer 1 ($Q\Lambda Q^T$). Correct; distractors are all false.
- Quiz 2: answer 1 ($\bar x^Tx > 0$). Correct.
- Quiz 3: pivots 3, −1, 2, 5: three positive, so three positive eigenvalues; answer 1 ("3"). Correct.
- Quiz 4: answer 1 (first sub-determinant −1). Correct.
- Flashcards: all five correct (the "without row exchanges" qualifier on the pivot product matches p. 14).

## Coverage and order
- Order matches the transcript: two main facts (pp. 1–2), $S\Lambda S^{-1}$ to $Q\Lambda Q^T$ and the spectral theorem (pp. 2–4), proof of real eigenvalues (pp. 4–9), complex "good" matrices (pp. 9–10), sum of projections (pp. 11–12), signs of pivots and eigenvalues (pp. 12–14), positive definite matrices, example, determinant test (pp. 14–18).
- Left out (info): Strang's closing remark that the "real climax" is to bring pivots, determinants and eigenvalues together for n × n matrices that are not necessarily symmetric (p. 18). Optional one sentence.
- Additions: the worked example (both parts) and the parenthetical link of $q_iq_i^T$ to $aa^T/a^Ta$ with $a^Ta = 1$ (Strang says the same in words, p. 12).
- The worked example asks for "the spectral factorisation" but never writes $Q$ and $\Lambda$ out as matrices (only the sum of projections). Info: add $Q = \frac{1}{\sqrt5}\begin{pmatrix}1&2\\2&-1\end{pmatrix}$, $\Lambda = \mathrm{diag}(10, 5)$, or reword the task.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched the extracted text). The OCW lecture page carries CC BY-NC-SA 4.0.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short attributed phrases ("the most important class", "one of the famous theorems", "multiply numbers by their conjugates").
- Worked example: Strang's only lecture examples are (5 2; 2 3) and diag(−1, −3); the page's (6 2; 2 9) and (1 3; 3 1) are different. Whether they coincide with an example in Strang's textbook (Section 6.4/6.5) was **not verified** (book not read); the matrix $A - 5I = \begin{pmatrix}1&2\\2&4\end{pmatrix}$ is a common textbook matrix, but here it arises as a step, not as a copied example.

## Notes
- `leadsTo` Lecture 26 "Complex matrices; fast fourier transform" matches the syllabus and Strang's remark that the next lecture continues with $\bar x^Tx$ (p. 9). See #5 for Lecture 27.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page.
- The frontmatter `summary` agrees with the body (pivots 5 and 11/5, sub-determinants 5 and 11, eigenvalues 4 ± √5).

## Resolution (2026-11-16, by the page author)

1. The pivots/eigenvalues sentence now says that their products agree (both give det A) but say nothing about the individual numbers, while the sign rule does; "without symmetry" removed.
2. The example's Formula now cites pp. 15–16.
3. Added a bracket explaining how "five three two two" is read (trace 8, determinant 11).
4. No change.
5. `leadsTo` now also lists Lecture 27.
6. Added Strang's closing remark about the climax of the course for non-symmetric n × n matrices.
7. The worked example now writes out Q and Λ.
8. Calcs: added the cancelling imaginary parts; the page-own entries keep the transcript page of the method they illustrate.

Status set to reviewed.
