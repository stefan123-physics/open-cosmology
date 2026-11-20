---
page: content/year-2/18.06/multiplication-and-inverse-matrices.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-3-multiplication-and-inverse-matrices/ (read: local copy lec.html; title "Lecture 3: Multiplication and inverse matrices"; its only .pdf link is 07f82f7a07458fb3d79d1ba5cf53fa1e_FX4C-JpTFgY.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/07f82f7a07458fb3d79d1ba5cf53fa1e_FX4C-JpTFgY.pdf (read: local copy transcript.pdf, "MITOCW | ocw-18.06-f99-lec03_300k", 24 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page extracted separately with pdftotext -f N -l N and read)
  - content/year-2/18.06/_course.json (read: Lecture 4 = "Factorization into A = LU"; the Lecture 4 transcript was not read)
  - content/year-2/18.06/elimination-with-matrices.mdx (prerequisite, uncommitted; frontmatter and inverse paragraph read)
  - calcs/18.06/multiplication-and-inverse-matrices.yaml (read; `npm run calc:test -- -k multiplication-and-inv`: 7 passed)
verdict: pass-with-notes
---

# Review: Matrix multiplication and inverse matrices

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 multiplying already, many ways all giving the same answer, then inverses, AB = C, entry c₃₄ from row 3 and column 4; p. 2 row 3 · column 4, a₃₁b₁₄ + a₃₂b₂₄ + …; p. 3 the sum over k from 1 to n of a₃ₖbₖ₄, A is m × n, B must be n × p; p. 4 C is m × p, "the standard rule", second way by columns begins; p. 5 A times each column of B gives the columns of C, columns of C are combinations of columns of A; p. 6 coefficients come from B, third way by rows, rows of C are combinations of rows of B; p. 7 fourth way, row times column is a number, column times row is a full matrix, (2, 3, 4)(1, 6) set up; p. 8 answer rows (2, 12), (3, 18), (4, 24), "very special matrix", columns multiples of (2, 3, 4), rows multiples of (1, 6), AB = sum of columns of A times rows of B, extension with a second column (7, 8, 9); p. 9 second row (0, 0), first column times first row plus second times second, rows on the line through (1, 6), row space; p. 10 column space the line through (2, 3, 4), "really minimal matrix", "that's a third way" (slip, see below), block multiplication, A₁…A₄, B₁…B₄; p. 11 20 × 20 with 10 × 10 blocks, A₁B₁ + A₂B₃, block rows times block columns, "all five ways we're doing the same multiplications", inverses for square matrices; p. 12 most important question, A⁻¹A = I, left inverse is right inverse for square matrices (not easy to prove), rectangular different, invertible or non-singular; p. 13 singular case, (1 3; 2 6), determinant zero, other reasons, A times another matrix cannot give I; p. 14 columns of AB come from the columns of A, (1, 0) not on the line, "the reason I like best", Ax = 0; p. 15 key equations have zero on the right, x = (3, −1), 3 of column 1 minus 1 of column 2, multiply by A⁻¹; p. 16 x would be 0 but is not, conclusion, can never escape from zero, invertible example begins; p. 17 (1 3; 2 7), columns point in different directions; p. 18 A times column j of A⁻¹ is column j of I, two systems; p. 19 right-hand sides (1, 0) and (0, 1), Gauss–Jordan solve two equations at once; p. 20 augmented matrix, carry two extra columns, student corrects a board slip (2 and 3 switched); p. 21 subtract 2 of row 1 from row 2, upper triangular, "Gauss would quit, but Jordan says keep going", 3 of row 2 from row 1 gives 7; p. 22 −3, [A I] to [I A⁻¹], check 7 − 6, 21 − 21, −2 + 2, −6 + 7; p. 23 E as product of elimination matrices, two Es here; p. 24 EA = I so E = A⁻¹, EI = A⁻¹, n equations with n columns.

Formula locations: "Entry of a product" pp. 2–3; "Shapes" pp. 3–4; "Column times row" p. 8 (set up p. 7, answer p. 8); "Sum of columns times rows" pp. 8–9; "Block multiplication" pp. 10–11; "Inverse" p. 12; "A nonzero solution of Ax = 0" pp. 14–15 (Ax = 0 p. 14, x = (3, −1) p. 15); "Gauss–Jordan" pp. 21–22; "Why Gauss–Jordan gives the inverse" pp. 23–24. All correct; every equation matches the board as dictated.

Prose citations also checked: intro p. 1; dot product pp. 1–2; matching sizes p. 3; columns pp. 4–6 and combinations pp. 5–6; rows p. 6; row times column / column times row p. 7; multiples p. 8; row space and column space pp. 9–10; fourth way p. 8; blocks pp. 10–11, 10 × 10 blocks p. 11; same multiplications p. 11; key question pp. 11–12; left = right inverse, rectangular, non-singular p. 12; singular example and determinant p. 13; column argument p. 14; reason Strang likes best pp. 14–16; multiply by A⁻¹ pp. 15–16; conclusion p. 16; (1 3; 2 7) and directions p. 17; solving systems p. 18; two right-hand sides pp. 18–19; Jordan pp. 19–20; elimination steps pp. 21–22; result and check p. 22; why it works pp. 23–24. All correct.

"Rights reserved" / "courtesy" check: no occurrence in the transcript or in lec.html. Confirmed. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "A singular matrix": "Its determinant is 0, but there are better reasons (p. 13)." | p. 13: "Let me ask you other reasons"; p. 14: "This is even a more important reason. Well, how can I say more important? All those are important." | "better reasons" ranks them, which Strang explicitly declines to do (he only says the Ax = 0 reason is the one he likes best). | "Its determinant is 0, but there are other reasons, which do not need determinants (p. 13)." |
| 2 | info | "Columns times rows" | pp. 8–9: Strang extends the example with a second column (7, 8, 9) of A and a second row (0, 0) of B, showing the sum of two column-times-row pieces, where the second piece is zero. | Only the single column-times-row product is shown; the sum formula is stated in general. | Optional sentence: adding a second column times the zero row leaves the product unchanged. The worked example (a) already illustrates the sum, so this is not essential. |
| 3 | info | "Why it works", together with worked example (b) | The lecture's example has pivots 1, so E is only the product of the two elimination matrices (p. 23). | Worked example (b) ends by dividing the rows by the pivots 2 and ½, a step the lecture never needs; "Why it works" says E is "the product of the elimination matrices" only. A reader may wonder whether the division is covered. | One clause: "dividing rows by the pivots is also a multiplication by a (diagonal) matrix, so it is part of E too." |
| 4 | info | Prerequisites | — | `prerequisites: [elimination-with-matrices]` only. The site has 18.02 Lecture 3 (`matrices`: matrix multiplication, inverse by cofactors), which a reader may find useful. | Optional: link `/courses/18-02/matrices` in the inverse section or add it as a prerequisite. |

Lecturer slips and transcript garbles checked:
- p. 10 "So that's a third way": a slip; it was the fourth way (columns times rows). Not repeated; the page labels the ways correctly.
- p. 11 "all five ways": counts the block way as fifth; the page's "All these ways do the same multiplications" is consistent.
- p. 14 "They're all multiples of those columns": strictly combinations of the columns; the page correctly says combinations.
- p. 14 "let me change I to U": garble; ignored.
- pp. 15–16 "If I multiply A by A inverse on the left, I get X. If I multiply by A inverse on the right, I get zero": means the left-hand and right-hand sides of the equation, not left/right multiplication. The page's wording ("multiplying Ax = 0 by it would give x = 0") avoids the confusion.
- p. 20: the student points out a board slip (entries 2 and 3 switched), which Strang corrects; the page uses the corrected matrix (1 3; 2 7).
- None needs a bracketed note on the page.
- Background (info): the transcript file name "ocw-18.06-f99-lec03" shows a Fall 1999 recording republished in the Spring 2010 course; the page cites the Spring 2010 course correctly.

## Arithmetic and answer checks
- `npm run calc:test -- -k multiplication-and-inv`: 7 passed.
- Entry formula: c₃₄ = a₃₁b₁₄ + a₃₂b₂₄ + … = Σₖ a₃ₖbₖ₄, k from 1 to n. Correct (p. 3: "one to N").
- (2, 3, 4)(1, 6) = (2 12; 3 18; 4 24). Correct.
- (1 3; 2 6)(3, −1) = (3 − 3, 6 − 6) = (0, 0). Correct.
- Gauss–Jordan on (1 3 | 1 0; 2 7 | 0 1): row 2 − 2·row 1 = (0, 1 | −2, 1); row 1 − 3·row 2 = (1, 0 | 7, −3). A⁻¹ = (7 −3; −2 1). Correct. Check A⁻¹A = (7 − 6, 21 − 21; −2 + 2, −6 + 7) = I, exactly Strang's check (he multiplies A⁻¹ times A). Correct. (det A = 7 − 6 = 1, consistent.)
- Worked example (a): AB = (1·3 + 2·1, 1·1 + 2·4; 0·3 + 1·1, 0·1 + 1·4) = (5 9; 1 4). Columns times rows: (1, 0)(3, 1) = (3 1; 0 0); (2, 1)(1, 4) = (2 8; 1 4); sum (5 9; 1 4). Correct.
- Worked example (b): row 2 − ½ row 1: (1, 3 | 0, 1) − ½(2, 5 | 1, 0) = (0, ½ | −½, 1). Row 1 − 10·row 2: (2, 5 | 1, 0) − (0, 5 | −5, 10) = (2, 0 | 6, −10). Divide by 2 and by ½: (1, 0 | 3, −5), (0, 1 | −1, 2). A⁻¹ = (3 −5; −1 2). Full check AA⁻¹ = (6 − 5, −10 + 10; 3 − 3, −5 + 6) = I. Correct.
- Worked example (c): 2·(2, 3) − (4, 6) = (0, 0). Correct.
- Quiz 1: (3 × 2)(2 × 5) = 3 × 5, answer 1. Correct; explanation correct.
- Quiz 2: columns of A, answer 3. Correct (pp. 5–6); explanation correct.
- Quiz 3: answer 0. Correct (pp. 14–16); explanation correct. The distractors are weak but harmless.
- Correct-answer positions 1, 3, 0: varied.
- Flashcards: all three correct. Card 2 states "not invertible when some nonzero x has Ax = 0" as a criterion; the lecture proves only that direction and announces the full conclusion for later (p. 16), but as a fact about square matrices it is true.
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file (info): not checked are the other entries of (2, 3, 4)(1, 6), the Gauss–Jordan intermediate rows (−2, 1) and (7, −3), the check entries 7 − 6 = 1 and −2 + 2 = 0, example (a)'s other entries and its column-times-row sum, example (b)'s intermediate values (½, −½, 6, −10) and example (c). Adding them would complete it. As in the Lecture 1 file, the page-own entries `ex-a`, `ex-b-inverse` and `ex-b-check` carry `source: {cite: reading1, at: …}` pointing to the transcript, and `ex-b-inverse` says "det" while its `shown` text is the (1, 1) entry of AA⁻¹ (numerically the same, 1); harmless but slightly misleading.

## Coverage and order
- The page follows the lecture's order: entry rule (pp. 1–3) → shapes (pp. 3–4) → columns (pp. 4–6) → rows (p. 6) → columns times rows with the (2, 3, 4)(1, 6) example, row and column space (pp. 7–10) → blocks (pp. 10–11) → inverses, left = right, non-singular (pp. 11–12) → singular (1 3; 2 6): determinant, column argument, Ax = 0 (pp. 12–16) → (1 3; 2 7), systems, Gauss–Jordan, check (pp. 16–22) → why it works, E = A⁻¹ (pp. 23–24). Same order as MIT.
- Left out (minor): the (7, 8, 9)/(0, 0) extension of the fourth way (pp. 8–9, finding 2); "the key equations have zero on the right-hand side" (p. 15); the homework remark (p. 22); "n equations at the same time" for n × n (p. 24; the page's "solving systems" covers it). None essential.
- Added: the worked example (page-own).
- Inline link `/courses/18-06/elimination-with-matrices` and the prerequisite slug point to the uncommitted Lecture 2 page, which exists in the working tree (expected).
- `npm run content:check`: no error for this page; the only warning is "no review file yet". (The 2 errors reported are on `factorization-a-lu.mdx`, a different page.)

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("a very special matrix", "a minimal matrix", "the reason Strang likes best", "Gauss would not do") are brief, attributed or standard.
- Board examples ((2, 3, 4)(1, 6), (1 3; 2 6), (1 3; 2 7)) are used as the lecture's own examples with citations, as on other pages.
- Worked example: (a) and (c) use own numbers; (c) mirrors the structure of the lecture's singular example with different numbers, which is acceptable. (b)'s matrix (2 5; 1 3) is the matrix of Lecture 1's matrix-times-vector example (Lecture 1 transcript p. 18, per `reviews/18.06/geometry-of-linear-equations.md`), reused here for a different task (inversion). Not a copy of an MIT worked example, but not entirely own numbers either (info; changing it is optional). From memory (not checked against the book, so uncertain), Strang's *Introduction to Linear Algebra* Section 2.5 does its Gauss–Jordan example on the 3 × 3 second-difference matrix K = (2 −1 0; −1 2 −1; 0 −1 2); the page's examples do not match it. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.06 Lecture 4 ("Elimination written as a factorization, A = LU."): matches `_course.json` ("Factorization into A = LU"). Lecture 3 itself does not mention LU, so the claim rests on the Lecture 4 title; the Lecture 4 transcript was not read. Correct as far as checked.
- No `Callout kind="cosmology"` and no cosmology `leadsTo`. The lecture has no cosmology content, so nothing is wrong.
- Symbols: `content:check` reports no symbol error or warning for this page.

## Resolution (2026-11-16, by the page author)

1. "Better reasons" changed to "other reasons, all of them important" (pp. 13–14).
2. The (7, 8, 9) extension of the fourth way left out (optional; worked example (a) shows the sum).
3. "Why it works" now says that dividing by pivots is a diagonal-matrix multiplication and part of E.
4. No link to 18.02 added (optional).

Calcs: the description of `ex-b-inverse` corrected. Status set to reviewed.
