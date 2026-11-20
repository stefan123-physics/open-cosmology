---
page: content/year-2/18.06/solving-ax-0-special-solutions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-7-solving-ax-0-pivot-variables-special-solutions/ (read: saved lecture page HTML, licence notices only; CC BY-NC-SA 4.0, no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/5b376d43a2a5dd24d86e69aa67406111_VqP2tREMvt0.pdf (read, as per-page extracted text, pp. 1–19; header "ocw-18.06-f99-lec07_300k"; cited page = PDF page)
verdict: pass-with-notes
---

# Review: Solving Ax = 0: pivot variables and special solutions

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The reduced row echelon form R", last paragraph | p. 13: "there's a Matlab command or a teaching code command, NULL ... produces the null basis, the null space matrix, NULL of A"; p. 14 describes how it works (compute R, ones and zeros in the free variables, copy out the pivot variables) | "Strang's teaching code `null` builds N exactly this way" | The transcript is ambiguous about whether it means MATLAB or the teaching code. From general knowledge (not the transcript, so marked uncertain): Strang's 18.06 teaching code for this is named `nulbasis`, and MATLAB's built-in `null(A)` returns an orthonormal basis, not N = [−F; I], unless it is called as `null(A, 'r')`. Suggest wording such as "a teaching code (Strang calls it the null basis) builds N exactly this way", or name `nulbasis` after checking the OCW teaching-codes page. |
| 2 | info | The example matrix, first row (1, 2, 2, 2) | The transcript speaks only rows 2 and 3 ("Two four six eight and three six eight ten", p. 1) | Row 1 = (1, 2, 2, 2) | Verified from the spoken elimination steps: p. 2 "two times that row away ... I get zero zero" (row 1 starts 1, 2); "two twos away from the six leaves me with a two", "two twos away from the eight leaves me with a four", and the same with three twos from 8 and 10 (row 1 ends 2, 2); p. 5 "negative two plus two" and p. 7 "Two for x1, minus four, and two" fit x₁ + 2x₂ + 2x₃ + 2x₄. No change needed. |
| 3 | info | Nullspace formula, constant d | Strang names only the first multiple ("C", p. 6); the second is added with "a plus sign" (p. 8) | c and d | Fine; d is the natural name. No change needed. |
| 4 | info | Lecturer slip, not repeated | p. 11: "I had subtracted two of this, which knocked out this guy"; on p. 10 he subtracted **one** copy of row 2 from row 1 | "Subtracting row 2 from row 1" | The page is correct. A short bracketed note is optional (AGENTS rule 4 applies only when a reader comparing with the lecture would see a difference). |
| 5 | info | Source title | Transcript header "ocw-18.06-f99-lec07": recorded Fall 1999, reused in the Spring 2010 OCW course | Cites the Spring 2010 OCW course | Correct as cited; noted for completeness, as on earlier 18.06 reviews. |

Every formula citation was checked against the page cited:
- The example A, pp. 1–2: correct (rows 2–3 spoken p. 1, row 1 implied by p. 2, see #2).
- Echelon form U, pp. 2–3: correct (first stage p. 2, row 2 from row 3 with multiplier one p. 3).
- Rank = number of pivots = 2, p. 4: correct ("That number we will call the rank", p. 4).
- Ux = 0 equations, p. 5: correct (second equation "2x3 + 4x4 = 0" spoken on p. 5; first equation shown on the board, consistent with U).
- Nullspace c(−2, 1, 0, 0) + d(2, 0, −2, 1), pp. 6–8: correct.
- r pivot variables, n − r free, p. 9: correct (begins at the end of p. 8, stated p. 9).
- R = [1 2 0 −2; 0 0 1 2; 0 0 0 0], p. 10: correct ("One, two, zero, minus two, zero, zero, one, two").
- Block form and x_pivot = −F x_free, pp. 12–14: correct (block layout pp. 12–13, the equation p. 14).
- N = [−F; I], p. 13: correct.
- Aᵀ and its U, pp. 14–16: correct (row exchange p. 15, stop at column 3 p. 16).
- R and N for the transpose, pp. 18–19: correct.

Other claims checked and supported: elimination keeps the nullspace and changes the column space (p. 2); column 2 with zeros in and below the pivot position signals dependence (p. 3); the zero row comes from row 3 being a combination of rows 1 and 2 (p. 9); `rref` gives R (p. 10, "reduced row echelon form of A"); free-column numbers reappear with signs switched (pp. 11–12); A and Aᵀ have the same number of pivot columns, "a great fact" (p. 16); the c in the answer as a reminder that it is a whole space (pp. 17–18); Ax = b next (p. 19).

## Arithmetic and answer checks
- A: row 2 − 2·row 1 = (0, 0, 2, 4); row 3 − 3·row 1 = (0, 0, 2, 4); row 3 − row 2 = 0. U as shown. Rank 2. Correct.
- Special solutions: x₂ = 1, x₄ = 0 gives x₃ = 0, x₁ = −2; x₂ = 0, x₄ = 1 gives x₃ = −2 and x₁ = −(2·0 + 2·(−2) + 2·1) = 2. A(−2, 1, 0, 0) = 0 and A(2, 0, −2, 1) = (2 − 4 + 2, 4 − 12 + 8, 6 − 16 + 10) = 0. Correct.
- Column statements: −2·col 1 + col 2 = 0; 2·col 1 − 2·col 3 + col 4 = (2 − 4 + 2, 4 − 12 + 8, 6 − 16 + 10) = 0. Correct.
- R: row 1 − row 2 of U = (1, 2, 0, −2); row 2 / 2 = (0, 0, 1, 2). Free columns (2, 0) and (−2, 2); with signs switched they give the pivot entries (−2, 0) and (2, −2) of the special solutions. Correct.
- Aᵀ: rows (1, 2, 3), (2, 4, 6), (2, 6, 8), (2, 8, 10) are the transpose of A. After column 1: (0, 0, 0), (0, 2, 2), (0, 4, 4); exchange, subtract 2·(0, 2, 2): U as shown. R = [1 0 1; 0 1 1; 0 0 0; 0 0 0], F = (1, 1)ᵀ, N = (−1, −1, 1). Aᵀ(−1, −1, 1) = (0, 0, 0, 0). Correct.
- Worked example B = [1 3 0 2; 2 6 1 7; 1 3 2 8]: row 2 − 2·row 1 = (0, 0, 1, 3); row 3 − row 1 = (0, 0, 2, 6); minus 2·(0, 0, 1, 3) = 0. Rank 2, pivots in columns 1 and 3. Row 1 already has 0 above the column-3 pivot, which is already 1, so R = [1 3 0 2; 0 0 1 3; 0 0 0 0] and F = [3 2; 0 3]. Correct. Special solutions (−3, 1, 0, 0) and (−2, 0, −3, 1); B times each: (−3 + 3, −6 + 6, −3 + 3) = 0 and (−2 + 2, −4 − 3 + 7, −2 − 6 + 8) = 0. The pivot entries (−3, 0) and (−2, −3) are the columns of −F. Correct.
- (b): at most 3 pivots in 3 rows, so at least 5 − 3 = 2 free variables. Correct.
- Quiz 1: n − r = 5 − 3 = 2, answer index 1 = "2". Correct.
- Quiz 2: answer index 2 = "one free variable equal to 1, the others 0". Correct; the explanation is right.
- Quiz 3: answer index 3 = [−F; I]. Correct; explanation x_pivot = −F x_free with x_free = I is right.
- Flashcards: all three correct.
- calcs/18.06/solving-ax-0-special-solutions.yaml: all eight entries recomputed by hand and match; `npm run calc:test -- -k solving-ax-0` gives 8 passed. Info: the calcs only check that the final vectors lie in the nullspace and the two free-variable counts; they do not check the entries of U, R or F (for A, Aᵀ or B). Optional: add entries for, e.g., the R rows or F of the worked example.

## Coverage and order
- The page follows the lecture's order: example and expectations (p. 1), elimination keeps the nullspace (p. 2), skipping column 2 and echelon form (p. 3), rank (p. 4), pivot/free columns and back substitution (pp. 4–8), counting n − r (pp. 8–9), zero row explanation (p. 9), R (pp. 9–12), block form and N (pp. 12–14), transpose example (pp. 14–19).
- The page moves "the zero row appeared because row 3 was a combination of rows 1 and 2" (said by Strang on p. 9, as an afterthought) up to the echelon-form section, with the correct page cited. Fine.
- Small omissions (info): Strang's remark that three equations in four unknowns must have solutions (p. 4); "later I will ask you for a basis for the nullspace, then I just want this vector" (p. 18). Neither is essential; the first could be one sentence.
- No additions beyond MIT except the original worked example.

## Licensing
- The transcript text and the lecture page have no "All rights reserved" or "Courtesy of" notices (searched); the course is CC BY-NC-SA 4.0.
- No verbatim copying found: the page paraphrases throughout; quoted wording is limited to short standard terms ("special solutions", "echelon", "staircase", "free columns", "a great fact" attributed to Strang).
- No OpenStax or LibreTexts material.
- Worked example: the matrix B is not Strang's lecture matrix and does not match the main examples I know from Strang's *Introduction to Linear Algebra* Section 3.2 (e.g. [1 1 2 3; 2 2 8 10; 3 3 10 13]). I cannot rule out that it coincides with some textbook exercise (uncertain), but it appears original. Part (b) is a standard fact (more unknowns than equations), stated in the page's own words.

## Notes
- leadsTo 18.06 Lecture 8 ("Solving Ax = b: row reduced form R") is correct; the transcript itself announces Ax = b for the next class (p. 19). The "particular solution plus the nullspace" description matches that lecture's content (not checked against the Lecture 8 transcript here).
- No cosmology callout; acceptable for this mathematics lecture since there is no direct link to claim.
- No em dashes on the page.
- The internal link `/courses/18-06/column-space-and-nullspace` uses the same URL form as the other 18.06 pages.
- Verdict pass-with-notes: no errors found; finding #1 (the `null` command naming) should be fixed or softened before setting `status: reviewed`.

## Resolution (2026-11-16, by the page author)

1. The sentence naming the teaching code `null` is softened: the page now says only that Strang mentions a MATLAB or teaching-code command that builds N this way (no command name).
2. Added the p. 4 remark that three equations in four unknowns must have nonzero solutions.
3. Other info notes (calcs coverage, the "basis" remark) left as they are.

Status set to reviewed.
