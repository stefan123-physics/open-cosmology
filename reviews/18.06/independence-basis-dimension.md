---
page: content/year-2/18.06/independence-basis-dimension.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/36ad03fa0fce88a4b97f846156c11b8b_yjBerM5jWsc.pdf (read, as extracted per-page text, pp. 1–24; PDF page = cited page)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-9-independence-basis-and-dimension/ (read as saved HTML; no "rights reserved" or "courtesy" notice; URL and title match `_course.json`)
verdict: pass-with-notes
---

# Review: Independence, basis and dimension

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Bracketed note after the "Basis of Rⁿ" formula | p. 13: "I hope that 3 3 8 would do it. At least it's not the sum of those two vectors. But I believe that's a basis." On p. 15 he goes back to "where I put 3 3 8" as his basis of R³. | Says (3, 3, 8) is not a basis: all three vectors lie in the plane x = y, two equal rows, singular. | **Verified correct.** (1,1,2) and (2,2,5) are independent and both lie in the plane x = y, so they span exactly that plane. (3, 3, 8) is in it: (3, 3, 8) = 2(2, 2, 5) − (1, 1, 2). The determinant is 0. The note could give this explicit combination, which is more concrete than "lies in the plane". Optional. |
| 2 | info | Same note, "(5, 7, −14) would work: that matrix has determinant −2" | p. 13: "if I had picked, 5 7 -14 how would we know do we have a basis or don't we?" The transcript does not make clear whether (5, 7, −14) replaces the third vector or is meant some other way. | Reads it as the third vector next to (1,1,2), (2,2,5). | **Verified:** with columns (1,1,2), (2,2,5), (5,7,−14) the determinant is 1(−28−35) − 2(−14−14) + 5(5−4) = −63 + 56 + 5 = −2 ≠ 0, so this is a basis. Reading it as the third vector is the natural one. You could say "as the third vector" so the reading is explicit. |
| 3 | info | "Dimension of the nullspace" formula, second basis vector (−1, 0, 0, 1) | pp. 22–23: the second special solution was written on the board. The transcript gives only its description (free variables 0, 1; "is that fourth column a combination of my pivot columns? Yes"). It does not read out its entries. | (−1, 0, 0, 1). | **Verified** against the row-reduced form. R has rows (1, 0, 1, 1) and (0, 1, 1, 0), so x₁ = −x₃ − x₄ and x₂ = −x₃. That gives (−1, −1, 1, 0) and (−1, 0, 0, 1). Since the entries come from the board, which the transcript does not read out, the citation is fine. |
| 4 | info | "Other bases" paragraph | p. 21 also mentions (6, 4, 6), the sum of the first three columns, before choosing (7, 5, 7). | Gives (2, 2, 2) and (7, 5, 7) only. | Fine as is. |
| 5 | info | Start of "Dimension" | p. 15 opens with a one-line remark: independent columns are a basis for the column space. | Not mentioned. | Optional. The point is already implied in "Span and basis". |

Every other formula and citation checked out against the transcript. 18.06 Spring 2010 has no slides, so every equation is board or spoken, and the transcript page is the right citation.
- The independence definition is on p. 3.
- Independence and the nullspace (N(A) = {0}, r = n, no free variables; dependent when Ac = 0 for some c ≠ 0, r < n) is on pp. 7–8.
- The test for a basis of Rⁿ (an invertible n × n matrix) is on pp. 13–14: "n vectors give a basis if the n by n matrix…" on p. 13, "Invertible" on p. 14.
- The dimension definition is on p. 16.
- The example matrix with columns (1,1,1), (2,1,2), (3,2,3), (1,1,1) is on p. 17. The page's rows (1,2,3,1), (1,1,2,1), (1,2,3,1) are correct.
- Rank = number of pivot columns = dim C(A) = 2 is on pp. 19–20.
- The nullspace basis and dim N(A) = n − r are on pp. 22–24.

The claims are supported as cited:
- The four words and "a set of vectors is independent, a space has a dimension" are on p. 1.
- More unknowns than equations, with at most m pivots and at least n − m free variables, is on pp. 1–2.
- v and 2v (2v₁ − v₂ = 0) is on p. 4. The zero vector, "six", and "independence is dead" are on p. 5.
- Three vectors in the plane, put in a 2 × 3 matrix, is on pp. 5–6.
- A free column is a combination of earlier columns: p. 7. Vectors that need not be columns: p. 8.
- Span and the smallest space: p. 9. A basis is a "sequence", "enough and not too many", and "tells everything about the subspace": p. 10.
- The identity basis and N(I) = {0} are on pp. 11–12. (1,1,2), (2,2,5) are independent but do not span: p. 12. (3,3,7) "a goof": p. 13. The plane basis, with (3,3,7) spoiling independence: p. 14.
- Many bases, all the same size: pp. 15–16. Six is just right, seven too many, five not enough: p. 16.
- The other bases (columns 1&3, 2&3, 2&4; (2,2,2), (7,5,7)): pp. 20–21. "Right number of independent vectors is automatically a basis": p. 21.

## Arithmetic and answer checks
- `npm run calc:test -- -k independence-basis`: 9 passed.
- det[(1,1,2),(2,2,5),(3,3,8)] = 1(16−15) − 2(8−6) + 3(5−4) = 1 − 4 + 3 = 0. Rows 1 and 2 of the matrix are both (1, 2, 3). Confirmed: **not** a basis. This is a lecturer slip, correctly flagged in brackets as AGENTS.md rule 4 asks.
- det with (5, 7, −14) as the third column = −2. Confirmed: a basis.
- (3, 3, 7) = (1,1,2) + (2,2,5). Correct.
- A(−1, −1, 1, 0) = (−1−2+3, −1−1+2, −1−2+3) = 0, and A(−1, 0, 0, 1) = 0. Both correct.
- Sum of the four columns = (7, 5, 7). Correct. Columns 1&3, 2&3 and 2&4 are each independent pairs, so each is a basis of C(A), the plane x = z. (2, 2, 2) and (7, 5, 7) both lie in x = z and are independent. Correct.
- Worked example (a):
  - v₁ + v₂ = (1, 1, 2, 3) = v₃ and 2v₁ + v₂ = (2, 1, 3, 5) = v₄. v₁ and v₂ are not parallel, so the rank is 2.
  - The nullspace has dimension 4 − 2 = 2, with basis (−1, −1, 1, 0) and (−2, −1, 0, 1). Both check.
  - (1, 2, 3, 4) = v₁ + 2v₂. Correct.
- Worked example (b): the matrix with columns (1,1,0), (0,1,1), (1,0,1) has rows (1,0,1), (1,1,0), (0,1,1). Expanding along the first row gives 1(1·1 − 0·1) − 0 + 1(1·1 − 1·0) = 2. Correct: it is a basis.
- Quiz 1: five vectors in R⁴ are always dependent (index 1). Correct, and the explanation is right.
- Quiz 2: invertible (index 3). Correct.
- Quiz 3: a 5 × 7 matrix of rank 3 has dim N = 7 − 3 = 4 (index 0 = "4"). Correct.
- The flashcards are correct.

## Coverage and order
- The page follows the transcript's order exactly: the n > m fact, independence (definition, plane examples, columns of a matrix), span, basis, bases of R³ and the invertibility test, the plane basis, uniqueness and dimension, the worked column-space and nullspace example, and dim N = n − r.
- Nothing substantive is left out. Only the minor points in rows 4–5 are omitted.
- Nothing is added beyond the original worked example and the slip note.

## Licensing
- The transcript and the lecture page carry no "All rights reserved" or "Courtesy of" notice, so no `courtesy:` entry is needed.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases used as quoted terminology or bolded: "independence is dead", "enough vectors, and not too many", "a goof". These are acceptable.
- The worked example is original in its numbers (vectors in R⁴), but its structure mirrors Strang's example: one column is the sum of the first two, and it shares the nullspace vector (−1, −1, 1, 0). Its other dependence and the span-membership question are new. Rewritten enough to pass. Severity: info.
- Part (b) uses (1,1,0), (0,1,1), (1,0,1). This is a very common textbook triple. I could not check whether it appears in Strang's *Introduction to Linear Algebra* (uncertain). It is too generic to count as copying, but a less standard triple would remove any doubt. Severity: info.

## Notes
- `leadsTo` Lecture 10 ("The four fundamental subspaces and their dimensions") matches the syllabus title, and p. 22 says the nullspace discussion "will go on to the next lecture". Correct.
- There is no `Callout kind="cosmology"`. This is consistent with the other 18.06 pages so far, none of which has one, so there is no cosmology claim to check.
- There are no em dashes on the page.
- The slip note follows AGENTS.md rule 4 (brief and in brackets). It is accurate.

## Resolution (2026-11-16, by the page author)

1. The slip note now gives the explicit combination (3, 3, 8) = 2(2, 2, 5) − (1, 1, 2), says "as the third vector" for (5, 7, −14), and notes that Strang corrects it at the start of Lecture 10.
2. Worked example (a) changed so it no longer mirrors the lecture's structure: v₃ = 2v₂ − v₁ = (−1, 2, 1, 0), nullspace basis (1, −2, 1, 0), (−2, −1, 0, 1); calcs updated.
3. Part (b) kept (a common triple, info only). Other info items left as they are.

Status set to reviewed.
