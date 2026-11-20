---
page: content/year-2/18.06/four-fundamental-subspaces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/55c07f16c1f8592e3f0457652ab11634_nHlE7EgJFds.pdf (read, as extracted per-page text, pp. 1–24; PDF page = cited page)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-10-the-four-fundamental-subspaces/ (read as saved HTML; only the Creative Commons licence notice, no "rights reserved" or "courtesy" notice; title matches `_course.json`)
verdict: pass-with-notes
---

# Review: The four fundamental subspaces

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Left nullspace", last sentence ("In general the last m − r rows of E are a basis for N(Aᵀ) ... (p. 21)") | p. 21: "in all examples, we have seen how to produce a basis for the left null space ... We had to keep track of E". Strang does not state the general "last m − r rows of E" rule in words; it is implied by the example (p. 20). | States the general rule as if from p. 21. | Mathematically correct (E is invertible, so its rows are independent, and its last m − r rows give the zero rows of R). Optionally say "(the general rule behind the example, p. 21)". |
| 2 | info | Quiz 2 explanation and Summary bullet 4 ("and so does the nullspace") | Lecture 10 says only that the row space is kept and the column space changes (pp. 12–15); nullspace invariance is from earlier lectures. | Adds the nullspace. | Correct mathematics; no change needed. Could add "(Lecture 7)" if a link is wanted. |
| 3 | info | "Bases" section order | Transcript gives the column-space basis together with its dimension (p. 7), before the row-space and nullspace dimensions (pp. 8–10). | Gives all four dimensions first, then all bases. | Minor regrouping; order of the material within the lecture is otherwise followed. Fine as is. |
| 4 | info | "Row space", "The example from last time" | p. 11: "maybe we had this matrix in the last lecture". | States it was last time. | Verified: the Lecture 9 page uses the same matrix (independence-basis-dimension.mdx line 94), so the claim is right. |
| 5 | info | "Row space", independence reason "each has a 1 where the others have 0" | p. 14: "we've got r pivots, r non-zero rows ... they're independent". | Gives the identity-block reason. | Own (correct) explanation; fine. |

No errors found. Every `<Formula>` citation was checked against the transcript page:
- "Where the four subspaces live", pp. 5–6: correct (p. 5 states Rⁿ/Rᵐ; p. 6 the picture).
- "The four dimensions", pp. 7–10: correct (column space r p. 7, row space r p. 8, nullspace n − r p. 10, left nullspace m − r p. 10).
- "Row reduction of the example", pp. 11–12: correct (matrix and steps p. 11, R p. 12).
- "Row space basis", p. 13: correct ((1, 0, 1, 1) and (0, 1, 1, 0) are named on p. 13).
- "Why 'left'", pp. 15–16: correct.
- "Gauss–Jordan on a rectangular matrix", pp. 17–18: correct ([A I] p. 17, EA = R p. 18).
- "E for the example", pp. 19–20: correct (operations on I p. 19, E stated p. 20).

All inline page citations checked as well (p. 1 two jobs; pp. 1–2 the (3, 3, 8) error and two equal rows; p. 3 rows span, basis only if independent; p. 4 left nullspace name; p. 6 basis and dimension; p. 8 "wonderful fact"; p. 10 pivot/free split and m columns of Aᵀ; p. 12 (1, 1, 1) in C(A) not C(R); p. 13 first r rows of A not always; p. 15 reversing steps; p. 18 E = A⁻¹ "chapter two"; p. 20 combinations of rows giving the zero row, "could have seen it earlier"; p. 21 review; pp. 21–24 matrix space M, eight rules, multiplication irrelevant, upper triangular/symmetric/diagonal, dimension 3, others next time). All match.

## Arithmetic and answer checks
- Lecture 9 correction: matrix with columns (1, 1, 2), (2, 2, 5), (3, 3, 8) has rows (1, 2, 3), (1, 2, 3), (2, 5, 8): two equal rows, rank 2. Correct.
- Row reduction of A (rows (1, 2, 3, 1), (1, 1, 2, 1), (1, 2, 3, 1)): subtracting row 1 gives (0, −1, −1, 0) and 0; times −1 gives (0, 1, 1, 0); row 1 − 2·row 2 = (1, 0, 1, 1). The intermediate matrix and R on the page are correct.
- E: I → rows 2, 3 minus row 1 → (−1, 1, 0), (−1, 0, 1); row 2 × (−1) → (1, −1, 0); row 1 − 2·row 2 → (−1, 2, 0). E = [[−1, 2, 0], [1, −1, 0], [−1, 0, 1]], matches the transcript (p. 20). EA computed row by row: (1, 0, 1, 1), (0, 1, 1, 0), (0, 0, 0, 0) = R. Correct.
- y = (−1, 0, 1): −row 1 + row 3 = 0; m − r = 3 − 2 = 1. Correct.
- Worked example B: row 2 − 2·row 1 = (0, 0, 1, 2), row 3 − 3·row 1 = (0, 0, 1, 2), row 3 − row 2 = 0. R = [[1, 2, 0, 1], [0, 0, 1, 2], [0, 0, 0, 0]] is already reduced (zero above the column-3 pivot). Rank 2, pivot columns 1 and 3. Correct.
  - C(B): (1, 2, 3), (0, 1, 1). Correct.
  - C(Bᵀ): (1, 2, 0, 1), (0, 0, 1, 2). Correct.
  - N(B): x₂ = 1, x₄ = 0 gives (−2, 1, 0, 0); x₂ = 0, x₄ = 1 gives x₃ = −2, x₁ = −1, so (−1, 0, −2, 1). Both checked against all three rows of B: zero. Correct.
  - E's last row: (−3, 0, 1) − (−2, 1, 0) = (−1, −1, 1); −(1, 2, 0, 1) − (2, 4, 1, 4) + (3, 6, 1, 5) = 0. Correct.
  - Counts 2 + 2 = 4 = n, 2 + 1 = 3 = m. Correct.
- Quiz 1: 5 × 8, rank 3, dim N(Aᵀ) = 5 − 3 = 2, answer index 2 = "2". Correct.
- Quiz 2: answer "The row space". The other choices are wrong: the column space changes, and so does the left nullspace (for the lecture example N(Aᵀ) is spanned by (−1, 0, 1) but N(Rᵀ) by (0, 0, 1)). Correct, unique answer.
- Quiz 3: (Aᵀy)ᵀ = yᵀA, answer index 1. Correct.
- Flashcards: all three correct.
- `npm run calc:test -- -k four-fundamental`: 8 passed.
- calcs file (info): `ex-E-row3` checks only the first entry of (−1, −1, 1), and there is no entry for the first special solution (−2, 1, 0, 0) or for the reduced matrix R of B; I verified these by hand above. Optional: extend the formulas to cover all entries.

## Coverage and order
- The page follows the lecture's order: correction of Lecture 9 (pp. 1–2), the four subspaces and where they live (pp. 3–6), dimensions (pp. 6–10), row-space basis via R (pp. 11–15), left nullspace via Gauss–Jordan and E (pp. 15–21), review (p. 21), matrix spaces (pp. 21–24). Only the small regrouping in row 3 above.
- Nothing from the lecture is left out. The sketch of the four spaces (p. 5) is described in words and formula, not drawn; acceptable.
- Nothing is added beyond the worked example and the nullspace remark (row 2).

## Licensing
- The OCW lecture page shows only the Creative Commons licence; the transcript text has no "rights reserved" or "courtesy" notice.
- No verbatim copying found: wording is rewritten. Short phrases such as "wonderful fact" and "cleanest possible" are attributed paraphrases of Strang's words and short enough.
- Worked example B is original: it is not Strang's lecture matrix, nor the Lecture 7 matrix [[1, 2, 2, 2], [2, 4, 6, 8], [3, 6, 8, 10]], nor any example from Strang's textbook that I know of (uncertain only in the sense that I cannot rule out every textbook exercise, but the numbers are not a familiar Strang example).
- No OpenStax or LibreTexts material.

## Notes
- Lecturer slips not repeated: p. 12 "Those row operations preserve the row space. So the row, so the column spaces are different" (garbled); p. 10 "m variables when I go to A x equals 0" (means Aᵀy = 0); p. 5 "this three by six matrix" (no such matrix on the board); p. 13 "first R rows" (transcription of r). The page states all of these correctly without comment, which is appropriate since they are transcription/speech noise rather than mathematical claims.
- Strang's (1, 1, 2) + (2, 2, 5) = (3, 3, 7) is correct; the page's account of the error matches pp. 1–2.
- leadsTo Lecture 11 "Matrix spaces, rank-one matrices and small-world graphs" matches the syllabus title "Matrix spaces; rank 1; small world graphs". No cosmology callout; this is a mathematics page, and none of the other 18.06 pages have one, so no fault.
- No em dashes in the page text.

## Resolution (2026-11-16, by the page author)

1. The general rule for the left nullspace basis is now marked as drawn from Strang's example.
2–5. Info notes left as they are (the nullspace remark is standard and correct; the regrouping of dimensions and bases is deliberate; the calcs are checked by hand in the review).

Status set to reviewed.
