---
page: content/year-2/18.06/projection-matrices-least-squares.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-16-projection-matrices-and-least-squares/ (not opened directly; the transcript linked from it was read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/b05d83bbdd6bcc995f2f8002093010c6_osh80YCg_GM.pdf (read: 19-page PDF, header "ocw-18.06-f99-lec16_300k", extracted per page; PDF page = cited page)
verdict: pass-with-notes
---

# Review: Projection matrices and least squares

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Summary, last bullet; flashcard "When is AᵀA invertible?" | pp. 15–17 prove only one direction: "if A has independent columns, then A transpose A is invertible". | "$A^TA$ is invertible **exactly when** $A$ has independent columns" (the body, correctly, says "if"). | The converse is true (dependent columns give $Ax = 0$ with $x \ne 0$, so $A^TAx = 0$), but the lecture does not state it. Either say "if" in the Summary/flashcard, or add one sentence in "Why AᵀA is invertible" giving the converse as the page's own addition. |
| 2 | info | "The best straight line", bracket after the Projection and error formula | Strang first writes $e = (1/6, -2/6, 1/6)$ on p. 12 and fixes the signs at the end of p. 12 and on p. 13 ("I want minus a sixth, plus seven-sixths to give the correct b equal one"). | "(Strang first takes the errors with the opposite signs and fixes them so that $p + e = b$, p. 12.)" | Correct; could cite "pp. 12–13". |
| 3 | info | Least squares formula | p. 6: "The Ax-b, this is the e" (so e = Ax − b in the spoken definition); later (pp. 12–13) e = b − p. | $\|Ax - b\|^2 = \|e\|^2$ and later $e = b - p$. | Fine (the norm is the same either way, and the page's sign matches the corrected one). No change needed; optionally note that the sign is fixed as $e = b - p$. |
| 4 | info | "The best straight line" | p. 4: Strang writes the line as "y = C + Dt". | $b = C + Dt$. | Fine (matches the previous page and the $b$ notation for heights). |

All formula citations were checked against the per-page text:
- Two extreme cases, pp. 2–3: $N(A^T)$ case on p. 2, $b = Ax$ and the cancellation on pp. 2–3. Correct.
- $b = p + e$, $e = (I - P)b$, pp. 3–4: the two pieces on p. 3, $I - P$ on p. 4. Correct. The symmetry and $(I-P)^2 = I - P$ statement is on p. 4. Correct.
- Least squares, pp. 5–7: errors and sum of squares p. 5, $\|e\|$ p. 6, $e_1^2 + e_2^2 + e_3^2$ p. 7. Correct.
- Normal equations, pp. 9–10: $A^TA$ = [3 6; 6 14] on p. 9, $A^Tb = (5, 11)$ and the two equations on p. 10. Correct.
- Error function $E$, pp. 10–11: first term at the end of p. 10, the other two on p. 11. Correct.
- Best line, p. 11. Correct. Elimination "2D = 1", "three C plus three is five" are on p. 11. Correct.
- Projection and error, pp. 12–13. Correct.
- Checks $p^Te = 0$ (p. 13) and $e \perp (1,1,1), (1,2,3)$ (p. 14), cited pp. 13–14. Correct.
- Proof, pp. 16–17; claim p. 15; "suppose $A^TAx = 0$, goal $x = 0$" pp. 15–16. Correct.
- Looking ahead (unit vectors, $A^TA = I$, orthonormal, cos/sin pair) p. 18; "next time" p. 19. Correct.

Other claims checked and supported: $N(A^T)$ = vectors perpendicular to the column space (p. 2); independent columns, a basis, but $b$ not in the column space (p. 5); "linear regression" (p. 7); outlier, "topsy-turvy", could be a mistake (p. 7); least squares "the most used" (p. 8); two pictures and $p$ in the column space because a line goes through the $p$'s (pp. 8–9); "most important equation in statistics. And in estimation" (p. 9); symmetric, invertible, later positive definite (p. 10); partial derivatives linear (p. 11); $p_1$ above $b_1$, $p_2$ below $b_2$ (p. 12); C and D are the combination giving $p$ (p. 14).

Lecturer slips: the page correctly notes that the transcript gives $b$ as "one, two, three" on p. 5 (the data and p. 9 make it $(1, 2, 2)$), and the sign flip of $e$ (p. 12). Other garbles are silently and correctly fixed: p. 9 "A transpose x -- A transpose b"; p. 10 "six D plus fourt-six C plus fourteen D"; p. 13 "can I change that to ten-sixths" (i.e. $5/3 = 10/6$, giving $+20/36$).

## Arithmetic and answer checks
- $A^TA$: $1+1+1 = 3$, $1+2+3 = 6$, $1+4+9 = 14$. $A^Tb$: $1+2+2 = 5$, $1+4+6 = 11$. Correct.
- Second equation minus twice the first: $(6C + 14D) - (6C + 12D) = 11 - 10$, so $2D = 1$, $D = 1/2$; $3C + 3 = 5$, $C = 2/3$. Correct.
- $p = (2/3 + 1/2, 2/3 + 1, 2/3 + 3/2) = (7/6, 5/3, 13/6)$. Correct.
- $e = b - p = (1 - 7/6, 2 - 5/3, 2 - 13/6) = (-1/6, 1/3, -1/6)$. Correct.
- $p^Te = -7/36 + 20/36 - 13/36 = 0$. Correct. $e \cdot (1,1,1) = 0$; $e \cdot (1,2,3)$ in sixths $= -1 + 4 - 3 = 0$. Correct.
- Worked example, points $(0,1), (1,3), (2,4), (3,4)$: $\sum t = 6$, $\sum t^2 = 14$, $A^TA = [4\ 6; 6\ 14]$; $A^Tb = (12, 0+3+8+12 = 23)$. Determinant $56 - 36 = 20$. $C = (168 - 138)/20 = 1.5$, $D = (92 - 72)/20 = 1$. $p = (1.5, 2.5, 3.5, 4.5)$, $e = (-0.5, 0.5, 0.5, -0.5)$; $\sum e = 0$, $e \cdot (0,1,2,3) = 0 + 0.5 + 1 - 1.5 = 0$; $\|e\|^2 = 1$. All correct.
- Quiz 1 (answer 1, $0$): correct, explanation correct.
- Quiz 2 (answer 2, squared vertical errors): correct.
- Quiz 3 (answer 1, $\|Ax\|^2$): correct.
- Flashcards: correct, apart from "exactly when" (finding 1: true, but beyond the lecture).
- `npm run calc:test -- -k projection-matrices`: 10 passed. The calcs file covers $A^TA$, $A^Tb$, $C$, $D$, $p_3$, $p^Te$, $e \cdot (1,2,3)$ and the example. Not covered (info): $p_1 = 7/6$, $p_2 = 5/3$, the components of $e$, $e \cdot (1,1,1) = 0$, and the example's $p$, $e$ and $e \perp$ checks; optional additions.

## Coverage and order
- The page follows the transcript's order: recap of P and the two extreme cases (pp. 1–3), $I - P$ (pp. 3–4), the best-line problem (pp. 4–5), least squares and $\|e\|^2$ (pp. 5–7), regression and outliers (pp. 7–8), two pictures (pp. 8–9), normal equations (pp. 9–10), calculus (pp. 10–11), solution (p. 11), $p$ and $e$ (pp. 12–13), perpendicularity checks (pp. 13–14), proof of invertibility (pp. 15–17), orthonormal columns preview (pp. 18–19).
- Nothing in the lecture is left out. Omitted only: the remark that the coming homework fits straight lines and that $p = A\hat x$ (p. 14), and Strang's aside that he has "two ways" to prove the invertibility (p. 16; only one is shown). Both are minor.
- Added: the original worked example (allowed) and the converse in the Summary (finding 1).

## Licensing
- No "rights reserved" or "Courtesy of" notice in the transcript text (grep of the extracted text found none).
- No verbatim copying beyond short phrases. Short quoted-style phrases ("topsy-turvy", "most important equation in statistics and estimation", "absolute favourite pair") are attributed to Strang and are brief.
- Worked example originality: the points $(0,1), (1,3), (2,4), (3,4)$ are not Strang's textbook Example ($(0,6), (1,0), (2,0)$, *Introduction to Linear Algebra* §4.3) nor the §4.3 problem-set data I recall ($b = 0, 8, 8, 20$ at $t = 0, 1, 3, 4$), and not the lecture's $(1,1), (2,2), (3,2)$. I cannot rule out that some other textbook uses these four points (uncertain), but nothing indicates copying.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: 18.06 Lecture 17 is "Orthogonal matrices and Gram-Schmidt"; the "why" (orthonormal vectors, orthogonal matrices, Gram–Schmidt) matches Strang's p. 19 preview ("why orthonormal vectors are great, and then to make vectors orthonormal by picking the right basis"). Correct.
- No `Callout kind="cosmology"`: none needed; no cosmology claims to check.
- No em dashes in the page text (en dashes only in page ranges and "Gram–Schmidt").
- The link to the previous page `/courses/18-06/projections-onto-subspaces` matches the existing page and the URL pattern used by the other 18.06 pages.
- Verdict pass-with-notes: no errors; fix finding 1 (or add the converse explicitly) before setting `status: reviewed`.

## Resolution (2026-11-16, by the page author)

1. Warning fixed: the flashcard and summary now say "when"; the converse is added as the page's own remark (dependent columns give Ax = 0, so AᵀAx = 0).
2. Sign-fix bracket cited to pp. 12–13.
3–4. Notation differences (e = b − p, b = C + Dt) kept; they do not change the results.

Status set to reviewed.
