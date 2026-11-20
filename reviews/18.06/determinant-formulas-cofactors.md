---
page: content/year-2/18.06/determinant-formulas-cofactors.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-19-determinant-formulas-and-cofactors/ (read, via the transcript linked from it)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/fa572a369c5feb991dabe351a9741f03_23LLB9mNJvc.pdf (read: 28 pages, per-page text extracted; PDF page = printed page)
verdict: pass-with-notes
---

# Review: Determinant formulas and cofactors

No errors found. Every formula matches the transcript, every sign in the 3 × 3 formula is right, every number recomputes, and every quiz answer is correct. The notes below are about citation ranges and small gaps in coverage.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Three by three" formula, `at="pp. 6–8"` | The first survivor, a₁₁a₂₂a₃₃ (plus sign), comes on p. 5. The remaining five terms and their signs come on pp. 6–8. | Cites pp. 6–8 | Use `at="pp. 5–8"`. The text before it ("survivors take one entry from each row and each column", pp. 5–6) is cited correctly. |
| 2 | info | "From the properties to a formula", "most have a column of zeros (p. 4)" | p. 4 says "a lot of them would be zero". The reason (a column of zeros, so the matrix is singular) is given on p. 5. | p. 4 | Use "(pp. 4–5)". |
| 3 | info | "The big formula", "Proving det AB = det A det B from it would take weeks (p. 12)" | "like next week we would still be working on it". He also says it has probably been done historically but "won't be repeated in 18.06". | "would take weeks" | Optional: change to "would still be going on next week". This is close enough in meaning. |
| 4 | info | "The big formula", p. 12 | Strang adds that det A = det Aᵀ would be easier to see from the big formula. | Not mentioned | Optional: add one clause. |
| 5 | info | "Tridiagonal matrices of ones", recursion step | Strang expands the 3 × 3 cofactor down a **column** and justifies this by the transpose rule ("we could use cofactors of columns just as well as rows", p. 27). He also says he skips the other entries because they multiply zeros (p. 28). | Expands "down its first column" with no reason given. The flashcard says "any row (or column) works". | Optional: add "(columns work as well as rows, because det Aᵀ = det A)". |
| 6 | info | "Tridiagonal matrices of ones", A₃ | Strang computes \|A₃\| = −1 two ways (p. 24 by the big formula, p. 25 by subtracting row 3 from row 2 and then using cofactors). | States \|A₃\| = −1 (pp. 24–25) without either method | Optional. The value is right and can be checked from the recursion. |
| 7 | info | "Cofactor" formula tex | "the determinant of the n minus one matrix" (p. 20) | "the n − 1 matrix with row i and column j removed" | Matches Strang's wording, but "(n − 1) × (n − 1) matrix" (as in the flashcard) would be clearer. |
| 8 | info | "A 4 × 4 example" | The matrix is only on the board. The transcript names only the permutations 4 3 2 1 (+) and 3 2 1 4 (−). | Does not show the matrix | No fix needed. I rebuilt a matrix that fits the transcript (row 1 has ones in columns 3 and 4, row 2 in 2 and 3, row 3 in 1 and 2, row 4 in 1 and 4). It has exactly these two nonzero terms, and rows 1 + 3 = rows 2 + 4 = (1, 1, 1, 1), so everything the page says about it is consistent. The board matrix itself cannot be verified (uncertain). |

## Arithmetic and answer checks
- 2 × 2 by splitting (pp. 2–3): the four pieces are correct. The first and fourth have a column of zeros, so the sum is 0 + ad − bc + 0. The minus sign comes from one row exchange (p. 3). Correct.
- 3 × 3 formula, signs checked by the parity of each permutation of the column numbers. (1,2,3) +, (1,3,2) −, (2,1,3) −, (2,3,1) + (two exchanges, p. 8), (3,1,2) +, (3,2,1) −. This matches the transcript pp. 5–8 term for term.
- 4 × 4 counter-diagonal: (4,3,2,1) is restored by exchanging rows 1 and 4, then rows 2 and 3. That is even, so the sign is plus (p. 9). Correct.
- n! terms: 2, 6, 24, 120, 720 (p. 10). The quiz answer 5! = 120 (choice index 1) is correct.
- Grouping by row 1: a₁₁(a₂₂a₃₃ − a₂₃a₃₂) + a₁₂(−a₂₁a₃₃ + a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁). Expanding this gives exactly the six-term formula. Correct.
- Cofactor sign: (−1)^(i+j), giving a checkerboard with + in the corner (p. 21). The quiz says C₂₃ carries a minus, since (−1)⁵ = −1 (choice index 2). Correct.
- Quiz Q3: the 4 × 4 counter-diagonal is plus (index 0), and the explanation is right.
- 2 × 2 by cofactors: C₁₁ = d and C₁₂ = −c, so det = ad + b(−c) (p. 22). Correct.
- Tridiagonal ones: |A₁| = 1 and |A₂| = det[[1,1],[1,1]] = 0. |A₃| = 1·1·1 − 1·1·1 − 1·1·1 = −1 (big formula), which agrees with the recursion 0 − 1.
- Recursion check: in A₄, the cofactor of a₁₂ is minus the determinant of rows 2–4, columns 1, 3, 4. That matrix is [[1,1,0],[0,1,1],[0,1,1]]. Its first column is (1, 0, 0), so the determinant is 1 · |A₂|. Hence |Aₙ| = |Aₙ₋₁| − |Aₙ₋₂|, as on p. 27. Correct.
- Sequence: 1, 0, −1, −1, 0, 1, 1, 0, … (A₇ = 1 − 0 = 1, A₈ = 1 − 1 = 0). The period is 6, and 61 = 6·10 + 1, so |A₆₁| = |A₁| = 1 (p. 28). Correct.
- Worked example (a): det[[2,0,1],[1,3,0],[0,1,4]]. Big formula: (1,2,3) gives +24, (1,3,2) gives 2·0·1 = 0, both terms with a₁₂ = 0 vanish, (3,1,2) gives +1·1·1 = 1, and (3,2,1) gives 1·3·0 = 0. Total 25. Cofactors: 2(12 − 0) − 0 + 1(1 − 0) = 25. The page is correct, including the statement that a₁₃a₂₁a₃₂ has a plus sign.
- Worked example (b): for a tridiagonal matrix with diagonal 3 and off-diagonals 1, Dₙ = 3Dₙ₋₁ − (1·1)Dₙ₋₂. D₁ = 3, D₂ = 8, D₃ = 21 (direct check: 3(9 − 1) − 1(3 − 0) = 21), D₄ = 63 − 8 = 55. Correct.
- `npm run calc:test -- -k determinant-formulas`: 6 passed. The calcs file covers 27, 120, |A₃|, the period, 25 and 55. Small gap: |T₂| = 8 and |T₃| = 21 are only checked inside the |T₄| formula, not as entries of their own. This is optional.

## Coverage and order
- The page follows the transcript's order: introduction (p. 1), 2 × 2 by linearity (pp. 1–4), 3 × 3 survivors (pp. 4–9), the 4 × 4 counter-diagonal remark (p. 9), the big formula (pp. 9–12), the improvised 4 × 4 example (pp. 12–16), cofactors (pp. 16–22), the three formulas (p. 23), and tridiagonal matrices of ones (pp. 23–28).
- Small omissions: det A = det Aᵀ from the big formula (p. 12); the second method for A₃ (p. 25); and the transpose justification for column expansion (p. 27). All are listed in the table above as info.
- Nothing is added beyond MIT except the worked example, the word "minor" (which is in the transcript, p. 21) and the summary.

## Licensing
- I searched the transcript text (all 28 pages) for "rights reserved", "courtesy", "license" and "creative": no matches. The lecture has no slides. Nothing on the page is marked "All rights reserved".
- No OpenStax or LibreTexts material.
- No copied passages. Short quoted phrases ("survivors", "one entry from each row and each column", "big formula") are Strang's terms or standard terminology, which is acceptable.
- Worked example: (a) has its own numbers. (b) avoids Strang's tridiagonal −1, 2, −1 matrix, as the author intended, and is not the lecture's matrix of ones. Its determinants 3, 8, 21, 55 are the even-indexed Fibonacci numbers F₄, F₆, F₈, F₁₀. Strang's *Introduction to Linear Algebra* §5.2 has Fibonacci-tridiagonal exercises. I could not check whether this exact 3, 1 matrix appears there (uncertain). If you want to rule out any resemblance, change the diagonal to 4, which gives 4, 15, 56, 209.

## Notes
- The `leadsTo` link to 18.06 Lecture 20, "Cramer's rule, inverse matrix, and volume", matches `_course.json` and is accurate.
- There is no cosmology callout. That is fine for this mathematics page.
- Lecturer slips that the page correctly does not repeat:
  - p. 3: "property c to factor out the c", which he corrects to "the property again".
  - p. 14: he first says the 3 2 1 4 term "would be a plus", then corrects it to "a minus one".
- No em dashes on the page. The prerequisite link `/courses/18-06/properties-of-determinants` follows the same pattern as the other 18.06 pages.
- Suggested additions (optional): note the Fibonacci pattern in (b), and change the citations in table rows 1 and 2.

## Resolution (2026-11-16, by the page author)

1. 3 × 3 formula cited to pp. 5–8; the column-of-zeros remark to pp. 4–5.
2. Cofactor definition now says (n − 1) × (n − 1).
3. Worked example (b) changed to diagonal 4 (determinants 4, 15, 56, 209) to avoid the Fibonacci tridiagonal exercises; calcs updated, with |T₃| as its own entry.
4. Other info items left as they are.

Status set to reviewed.
