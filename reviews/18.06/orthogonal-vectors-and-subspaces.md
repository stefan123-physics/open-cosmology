---
page: content/year-2/18.06/orthogonal-vectors-and-subspaces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/47d18e420743b6c0ff2851531f805bfc_YzZUIYRCE38.pdf (read: per-page text of the Lecture 14 transcript, pp. 1–24; PDF page = printed page)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-14-orthogonal-vectors-and-subspaces/ (not read separately; the transcript is its content)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/b05d83bbdd6bcc995f2f8002093010c6_osh80YCg_GM.pdf (read, Lecture 16 transcript, only to check the page's claim about a later lecture)
verdict: pass-with-notes
---

# Review: Orthogonal vectors and subspaces

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | End of "Coming next", "Why this holds is for the next lecture (p. 23)" | p. 23: "as soon as I can why that's true" (no lecture named); "you'll see next time how A transpose A enters everything" refers to the role of AᵀA, not to the proof. The proof that AᵀA is invertible when the columns are independent (AᵀAx = 0 ⇒ xᵀAᵀAx = ‖Ax‖² = 0 ⇒ Ax = 0) is given in **Lecture 16** (transcript, around "Why does this matrix A transpose A, why is it invertible if the columns of A are independent?"), not Lecture 15. | Proof promised for "the next lecture" | "Strang promises the reason as soon as he can (p. 23); it comes in Lecture 16." Optionally add a `leadsTo` entry for 18.06 Lecture 16. |
| 2 | info | "Coming next", rank-one AᵀA | p. 22: "suppose I change to that A" (the new A is only on the board); the transcript gives the entries nine, nine (p. 22) and twenty-seven (p. 23), and says the matrix has rank one. | "if the second column of A is 3 times the first … entries 3, 9, 9 and 27", with a bracket saying the transcript gives only 9, 9, 27 and that a second column (3, 3, 3) fits. | Fair as written. Checked: if the first column stays (1, 1, 1) and A has rank one, the second column is k(1, 1, 1); 3k = 9 and 3k² = 27 both give k = 3, so (3, 3, 3) is the only fit, and the (1, 1) entry 3 follows. Optionally move the bracket's "inferred" wording into the main sentence so the "3 times" is not read as Strang's words. |
| 3 | info | "Why, from Pythagoras", bracket on "length fourteen" | p. 4: "So the vector one, two, three has length fourteen." (just after correctly saying "length squared … fourteen") | Notes the slip: length squared 14, length √14. | Fair and correct, in line with the writing rule on lecturer slips. No change. |
| 4 | info | "Orthogonal complements", last sentence | p. 16: "I even call this part one of the fundamental theorem … maybe I should call it part two now … part three will be about bases … Orthogonal bases." | "Strang calls this part of the fundamental theorem … (the dimensions being one part, orthogonality another, and orthogonal bases still to come)" | Fair: the page avoids Strang's part one/part two self-correction without misstating it. Could say "part two" explicitly. No change needed. |
| 5 | info | "Orthogonal subspaces" formula | Definition given in words on p. 8 ("every vector in S is orthogonal to every vector in T"). | Written as sᵀt = 0 with letters s, t. | Notation is the page's own; same content. Fine. |
| 6 | info | "Coming next", rank-one case | p. 22 also mentions the zero matrix as the extreme case of a non-invertible AᵀA; p. 23 explains the singularity by "a product of matrices of rank one … not … rank bigger than one". | Omitted. | Optional one clause each; coverage is otherwise complete. |

All formula citations were checked against the transcript pages:
- xᵀy = x₁y₁ + … = 0: p. 2. Correct.
- Pythagoras ⇒ 2xᵀy = 0: expansion on p. 5, xᵀy = yᵀx and "two of these" on pp. 5–6. Correct.
- Orthogonal subspaces: p. 8. Correct.
- Ax = 0 row by row: pp. 10–11 (row one, row two on p. 10, "Row m of A" on p. 11). Correct.
- (c₁ row₁ + c₂ row₂ + …)ᵀx = 0: p. 12. Correct.
- A = (1 2 5; 2 4 10): p. 13. Correct.
- AᵀAx̂ = Aᵀb: equation p. 20, x̂ named p. 20, "best solution solves this equation" p. 21; cited pp. 20–21. Correct.
- A = (1 1; 1 2; 1 5), AᵀA = (3 8; 8 30): A on p. 21, entries 3, 8, 8, 30 on p. 22. Correct.
- N(AᵀA) = N(A), rank(AᵀA) = rank(A): p. 23. Correct.
All the prose page citations (p. 1 opening, pp. 3–6, pp. 6–7 zero vector, pp. 8–9 blackboard/floor, p. 9, pp. 9–10 plane cases, p. 12 left nullspace, pp. 12–13, pp. 13–15, p. 15 normal vector and "all", p. 16, pp. 16–17, p. 17 satellite and pulse rate, p. 18 throwing away equations, pp. 19–20 square and symmetric) match the transcript text on those pages.

## Arithmetic and answer checks
- (1, 2, 3): 1 + 4 + 9 = 14. Correct.
- y = (2, −1, 0) (reconstructed from p. 4: "one and two making three, two and minus one making one, three and zero making three"): xᵀy = 2 − 2 + 0 = 0; ‖y‖² = 5; x + y = (3, 1, 3); ‖x + y‖² = 9 + 1 + 9 = 19 = 14 + 5. Correct.
- Rank-one 2 × 3 matrix: nullspace dimension 3 − 1 = 2. Correct.
- AᵀA for columns (1, 1, 1), (1, 2, 5): 3, 1 + 2 + 5 = 8, 1 + 4 + 25 = 30; determinant 90 − 64 = 26 ≠ 0. Correct.
- Rank-one AᵀA (3 9; 9 27): determinant 81 − 81 = 0. Correct.
- Worked example (a): x₁ = x₂ − 2x₃; special solutions (1, 1, 0) and (−2, 0, 1); dot products with (1, −1, 2): 1 − 1 + 0 = 0 and −2 + 0 + 2 = 0; 1 + 2 = 3. Correct.
- Worked example (b): xᵀy = 2 + 0 − 2 = 0; ‖x‖² = 9, ‖y‖² = 2; x + y = (3, 1, 1), ‖x + y‖² = 11 = 9 + 2. Correct.
- Worked example (c): AᵀA = (3, 0+1+3; 4, 0+1+9) = (3 4; 4 10); determinant 30 − 16 = 14 ≠ 0; columns (1, 1, 1) and (0, 1, 3) independent. Correct.
- `npm run calc:test -- -k orthogonal-vectors`: 8 passed. The calcs file covers every number on the page. (`ex-null` checks only the second special solution's dot product; the first, 1 − 1 + 0, is trivial.)
- Quiz 1 (answer 3, "No: their dimensions must add to 3"): correct; r + (n − r) = 3, two lines give 2. The distractor "Yes, for a rank-one matrix" is wrong because then the nullspace is a plane. Correct.
- Quiz 2 (answer 1, independent columns): correct, p. 23. Explanation correct (slightly awkward wording "which is only zero exactly when"; could read "which is just the zero vector exactly when").
- Quiz 3 (answer 0, they share the x-axis): correct, matches pp. 8–9 (Strang himself calls them "like a xz plane … and a xy plane").
- Flashcards: all four correct.
- Frontmatter summary: consistent with the body and the transcript.

## Coverage and order
- The page follows Strang's order: orthogonality chapter and big picture (p. 1) → orthogonal vectors and dot product test (p. 2) → Pythagoras with (1, 2, 3), (2, −1, 0) and the letter proof (pp. 3–6) → zero vector (pp. 6–7) → orthogonal subspaces, blackboard and floor, subspaces of the plane (pp. 7–10) → row space ⊥ nullspace, combinations, column space ⊥ left nullspace (pp. 10–13) → two lines in R³ and the (1 2 5; 2 4 10) example, orthogonal complements (pp. 13–15) → fundamental theorem parts (p. 16) → least squares motivation (pp. 16–18) → AᵀA square and symmetric, AᵀAx̂ = Aᵀb, examples, N(AᵀA) = N(A), invertibility (pp. 19–23).
- No MIT segment is left out. Minor omissions: the zero-matrix remark (p. 22) and the "product of rank-one matrices" reason (p. 23); see table rows 6.
- Nothing is added beyond the lecture apart from the worked example and the slip notes.

## Licensing
- The Lecture 14 transcript text contains no "rights reserved" or "courtesy" notice (grep on the extracted text: no match). The page uses no MIT figures.
- No OpenStax or LibreTexts material.
- No verbatim copying found: the page paraphrases throughout; Strang's colourful phrases ("ninety-degree chapter", "dumb normal vector", "MIT only built it like so-so") are not reused. Short standard terms ("orthogonal complements", "fundamental theorem of linear algebra", "central equation") are fine.
- Worked example: the matrices (1 −1 2; 2 −2 4) and (1 0; 1 1; 1 3) and the vectors (2, 1, 2), (1, 0, −1) are not the lecture's. I did not check Strang's textbook (*Introduction to Linear Algebra*, Section 4.1) line by line; the familiar textbook least-squares matrix is (1 0; 1 1; 1 2), which differs from (c). Considered original (uncertain only as far as the textbook was not opened).

## Notes
- Prerequisite link `/courses/18-02/dot-product` resolves to `content/year-1/18.02/dot-product.mdx` (slug `dot-product`, 18.02 Lecture 1, "Vectors and the dot product"); course slug `18-02` matches `_course.json`. The link to `/courses/18-06/four-fundamental-subspaces` matches an existing page. Both are fair: the page uses the dot product as the orthogonality test.
- `leadsTo` 18.06 Lecture 15 ("Projections onto subspaces: where AᵀAx̂ = Aᵀb comes from") matches the syllabus title and is fair: Lecture 15 derives the normal equations from projection. See row 1 for the proof of invertibility, which is in Lecture 16.
- No `Callout kind="cosmology"` on this page; none is required for a maths lecture without a direct cosmology link.
- `npm run content:check`: 0 errors; the only warning for this page was the missing review file, which this file resolves.

## Resolution (2026-11-16, by the page author)

- Warning fixed: the proof that AᵀA is invertible is now credited to Lecture 16, and a leadsTo for Lecture 16 is added.
- The inferred rank-one matrix is now described as inferred in the main sentence; Strang's rank remark (p. 23) added.
- Quiz 2 explanation reworded.
- Other info items left as they are.

Status set to reviewed.
