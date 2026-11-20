---
page: content/year-2/18.06/elimination-with-matrices.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-2-elimination-with-matrices/ (read: local copy lec.html; title "Lecture 2: Elimination with matrices"; its only .pdf link is 49c357a7166c58e09f76f25512872fd9_QVKj3LADCnA.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/49c357a7166c58e09f76f25512872fd9_QVKj3LADCnA.pdf (read: local copy transcript.pdf, "MITOCW | ocw-18.06-f99-lec02_300k", 20 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page extracted separately with pdftotext -f N -l N and read)
  - content/year-2/18.06/_course.json (read: Lecture 2 title and URL match the page; Lecture 3 = "Multiplication and inverse matrices"; Lecture 4 = "Factorization into A = LU")
  - calcs/18.06/elimination-with-matrices.yaml (read; `npm run calc:test -- -k elimination-with`: 8 passed)
verdict: pass-with-notes
---

# Review: Elimination with matrices

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 topics (elimination, not determinants; "the way every software package solves equations"; how it could fail; back substitution; Gauss "born earlier"; matrix language); p. 2 3 × 3 system Ax = b with b = (2, 12, 2), accept the first equation, multiply and subtract, knock out x, "subtract" convention, the pivot; p. 3 first pivot, multiplier 3, leaves 2 and −2, MATLAB does the left side first, the (2, 1) position; p. 4 the (3, 1) step with multiplier 0, second pivot, the (3, 2) step, third pivot 5, the board slip "0 2 −1" ("did I just invent a negative one?"); p. 5 slip corrected, U upper triangular, "the most common calculation in scientific computing", pivots can't be 0, pivots 1, 2, 5, determinant 10, failure when the first entry is 0; p. 6 exchange rows, 8 → 6 makes the second pivot position 0, a nonzero below rescues it, question about the 1; p. 7 −4 gives complete failure, not invertible, augmented matrix, the slip "I subtracted 2 of the first equation"; p. 8 b → (2, 6, 2) → (2, 6, −10) = c; p. 9 Ux = c written out, z = −2, y = 1, x = 2, back substitution "because the system is triangular", start of elimination matrices; p. 10 A times (3, 4, 5) is a combination of columns, row (1, 2, 7) times A; p. 11 = 1 row 1 + 2 row 2 + 7 row 3, the matrix that subtracts 3 row 1 from row 2; p. 12 rows (1, 0, 0) and (0, 0, 1), identity, −3; p. 13 E21 complete, entry (2, 3) check −3 + 1 + 0 = −2, name E21; p. 14 E32 with −2 in position (3, 2); p. 15 E32(E21 A) = U, moving parentheses; p. 16 associative law, "not that easy to prove", permutation matrix; p. 17 P for the 2 × 2 (a b; c d), do it to the identity, column exchange question; p. 18 on the right for columns, AB ≠ BA, commutative law false, a "better way" than multiplying E32 E21; p. 19 better to go from U back to A, all matrices on the board invertible, inverse of E21 set up; p. 20 add 3 row 1 back, E⁻¹.

Formula locations: "The system" pp. 1–2 (the matrix entries are read out on p. 9, b on p. 2); "Upper triangular result" pp. 3–5; "Triangular system" p. 9; "Row times matrix" pp. 10–11; "Elimination matrices" pp. 13–14 (E21 is built on pp. 12–13, E32 on p. 14); "Elimination in one line" pp. 15–16; "Inverse of an elimination matrix" p. 20 (set up on p. 19). All correct and all match what was written on the board.

Prose citations also checked: software package and Gauss p. 1; knock out x p. 2; first pivot pp. 2–3; multiplier 3 and (0, 2, −2) p. 3; (3, 1) multiplier 0 pp. 3–4; second and third pivots p. 4; U, most common calculation, pivots non-zero, determinant 10 p. 5; failure pp. 5–7 (row exchange pp. 5–6, the 8 → 6 case p. 6, the −4 case pp. 6–7); augmented matrix p. 7; c p. 8; back substitution p. 9; combination of columns p. 10; rows of E21 p. 12, −3 pp. 12–13; entry check p. 13; E32 E21 A = U p. 15; associative law pp. 15–16; permutations pp. 16–18 (P p. 17, columns on the right pp. 17–18, AB ≠ BA p. 18); inverse pp. 19–20. All correct.

"Rights reserved" / "courtesy" check: no occurrence in the transcript or in lec.html. Confirmed. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Back substitution: "(The transcript says "2 of the first equation" at one point; the multiplier is 3.)" | The slip is on p. 7 ("I subtracted 2 of the first equation away from the second equation"); on p. 8 Strang says it correctly ("3 of this away from this"). | The note sits in a sentence cited to p. 8 and gives no page, so a reader checking p. 8 finds the correct "3". | "(On p. 7 the transcript says "2 of the first equation"; the multiplier is 3, as p. 8 says.)" |
| 2 | info | Failure paragraph: "Changing the last entry 1 to $-4$" | p. 6–7: "this number 1", the coefficient of z in the third equation ("If this had been a negative 4 z"). | "Last entry" is clear only if the reader takes it as the last entry of A, not of the augmented matrix. | "Changing the coefficient of $z$ in the third equation from 1 to $-4$" (the arithmetic is right: (0, 4, −4) − 2(0, 2, −2) = (0, 0, 0)). |
| 3 | info | End of "Elimination matrices" | pp. 18–19: rather than multiply E32 E21, "there's a better way": think how to get from U back to A; reversing steps is where inverses come in. | Not mentioned; the page goes straight to "A first inverse". | Optional sentence: Strang prefers to undo the steps, going from U back to A, which is why inverses come next (this is the road to A = LU in Lecture 4). Could also add a `leadsTo` for Lecture 4. |
| 4 | info | Coverage of p. 3 | MATLAB finishes the left side first and then goes back to the right side; Strang does the same. | Omitted. The page carries b only in the back-substitution section, which is consistent with the lecture's order, so this is optional. | Optional half-sentence. |

Lecturer slips and transcript garbles checked:
- p. 1 "2 times this equation," before the opening words: a stray caption fragment. Not repeated.
- p. 4 board "0 2 −1" (should be −2), noticed by a student and corrected on p. 5. The page writes −2 throughout, which is correct; since the page does not differ from what Strang meant, no bracketed note is needed.
- p. 7 "2 of the first equation": the multiplier is 3. The page notes this (finding 1 is only about where).
- p. 9 "the correct value of z is negative" (number lost) and "2y is 2 minus 2, maybe x is 2" (garbled): the values z = −2, x = 2 are right; checked below.
- p. 13 "to get this 2 1 position to be Okay" (word lost: "0"); p. 16 "Can you just, like, tell me what that would ... be?" (line break misplaced). Harmless.
- p. 18 "their Gauss given order" (likely "God-given" misheard). Not repeated.
- p. 7 "There comes B" (capital for b). Not repeated.
- Background (info): the file name "ocw-18.06-f99-lec02" shows the video was recorded in Fall 1999 and republished in the Spring 2010 course; the page cites the Spring 2010 course correctly.

## Arithmetic and answer checks
- `npm run calc:test -- -k elimination-with`: 8 passed.
- Row 2 − 3 row 1: (3 − 3, 8 − 6, 1 − 3) = (0, 2, −2). Correct. Row 3 − 2 (new row 2): (0, 4 − 4, 1 + 4) = (0, 0, 5). Correct. U = (1 2 1; 0 2 −2; 0 0 5). Correct.
- Determinant: 1 · 2 · 5 = 10; by cofactors 1(8 − 4) − 2(3 − 0) + 1(12 − 0) = 4 − 6 + 12 = 10. Correct.
- Failure cases: 8 → 6 gives 6 − 6 = 0 in the second pivot position, with 4 below: an exchange works. Correct. 1 → −4 gives −4 − 2(−2) = 0 with nothing below: complete failure. Correct.
- Right side: 12 − 3 · 2 = 6; 2 − 2 · 6 = −10; c = (2, 6, −10). Correct.
- Back substitution: 5z = −10 ⇒ z = −2; 2y − 2(−2) = 6 ⇒ y = 1; x + 2 − 2 = 2 ⇒ x = 2. Check in the original equations: 2 + 2 − 2 = 2; 6 + 8 − 2 = 12; 4 − 2 = 2. Correct.
- Entry (2, 3) of E21 A: (−3, 1, 0) · (1, 1, 1) = −2. Correct.
- E21⁻¹ E21: row 2 = 3(1, 0, 0) + 1(−3, 1, 0) = (0, 1, 0); rows 1 and 3 unchanged: I. Correct. E32 has −2 in position (3, 2), which subtracts 2 times row 2 from row 3. Correct.
- P = (0 1; 1 0) times (a b; c d) = (c d; a b). Correct. (a b; c d) P = (b a; d c), the columns exchanged. Correct.
- Worked example: x + y + 2z = 4, 2x + 5y + 3z = 10, −x + 2y + 4z = 5. Row 2 − 2 row 1 = (0, 3, −1 | 2); row 3 + row 1 = (0, 3, 6 | 9); row 3 − row 2 = (0, 0, 7 | 7). Pivots 1, 3, 7; determinant 21, and by cofactors 1(20 − 6) − 1(8 + 3) + 2(4 + 5) = 14 − 11 + 18 = 21. z = 1; 3y − 1 = 2 ⇒ y = 1; x + 1 + 2 = 4 ⇒ x = 1. Checks: 1 + 1 + 2 = 4, 2 + 5 + 3 = 10, −1 + 2 + 4 = 5. The signs of E21 (−2 at (2, 1)), E31 (+1 at (3, 1), multiplier −1) and E32 (−1 at (3, 2)) are right and follow Strang's "subtract" convention (p. 2). All correct.
- Quiz 1: answer 2, the identity with −3 in position (2, 1). Correct (pp. 12–13); explanation correct. The distractor with +3 is the inverse, a fair trap.
- Quiz 2: answer 1, on the right. Correct (p. 18); explanation correct.
- Quiz 3: answer 0. Correct (pp. 6–7); explanation correct.
- Correct-answer positions 2, 1, 0: varied.
- Flashcards: all three correct. (The "Elimination" card leaves out row exchanges, acceptable for a one-line card.)
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file (info): not covered are the third entry of the new row 2 (1 − 3 = −2), the right-side entry 12 − 6 = 6, the back-substitution values y = 1 and x = 2 as steps (only the second original equation is checked), the first and third original equations, the two failure cases (6 − 6 = 0, −4 + 4 = 0), the product 1 · 2 · 5 itself, and the worked example's intermediate rows (right sides 2, 9, 7) and y, x. Adding them would complete it. As in the Lecture 1 file, the page-own entries `ex-det` and `ex-check` carry `source: {cite: reading1, …}` though the example is the page's own; harmless but slightly misleading.

## Coverage and order
- The page follows the lecture's order: topics and Gauss (p. 1) → the system (pp. 1–2) → forward elimination, pivots, multipliers (pp. 2–4) → U, determinant (p. 5) → failure and row exchanges (pp. 5–7) → augmented matrix and c (pp. 7–8) → back substitution (p. 9) → combination of columns, row times matrix (pp. 10–11) → E21 (pp. 11–13), entry check (p. 13), E32 (p. 14) → E32 E21 A = U, associative law (pp. 15–16) → permutations, rows left / columns right, AB ≠ BA (pp. 16–18) → inverse of E21 (pp. 19–20). Same order as MIT.
- Left out (minor): MATLAB does the left side first (p. 3; finding 4); the "better way" of going from U back to A (pp. 18–19; finding 3); "all the matrices on this board are invertible" (p. 19); "I could call it E" for the product (p. 16); "inverse of a matrix is coming next week" (p. 7). None essential.
- Added: the worked example (page-own).
- Frontmatter compared with `content/year-2/18.06/geometry-of-linear-equations.mdx`: same fields and form. `source.url` and title match `_course.json` and lec.html. The inline link `/courses/18-06/geometry-of-linear-equations` uses the course slug `18-06` and an existing page; the prerequisite slug exists.
- `npm run content:check`: the only warning for this page is "no review file yet"; no symbol error or warning for this page. (The run reports 2 errors, both for `multiplication-and-inverse-matrices.mdx`, a different page in progress.)

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("the method every software package uses", "the most common calculation in scientific computing", "add it back", Gauss "born earlier") are brief, attributed to the transcript page, and acceptable.
- The lecture's own system (1 2 1; 3 8 1; 0 4 1), b = (2, 12, 2), and the (1, 2, 7) and (3, 4, 5) products are used as the lecture's examples with citations, as on other pages.
- Worked example: from memory (not checked against the book, so uncertain), Strang's *Introduction to Linear Algebra* Sections 2.2–2.3 use 2x + 4y − 2z = 2, 4x + 9y − 3z = 8, −2x − 3y + 7z = 10 (pivots 2, 1, 4) and the 2 × 2 x − 2y = 1, 3x + 2y = 11; the page's system (pivots 1, 3, 7, solution (1, 1, 1)) does not match these or the lecture. It appears original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.06 Lecture 3 ("Matrix multiplication in all its ways, and inverse matrices."): matches `_course.json` ("Multiplication and inverse matrices") and the transcript (p. 13: "we will have by columns, by rows, by each entry at a time"; p. 16: matrix multiplication "still not telling you in every detail"; p. 7: "the inverse of a matrix is coming next week"; p. 20: "a little jump on what's coming on Monday"). Correct. The Lecture 3 transcript was not read.
- Optional: a second `leadsTo` to Lecture 4 (A = LU), which is where pp. 18–19's "from U back to A" leads; from the course title only, not from its transcript.
- No `Callout kind="cosmology"` and no cosmology `leadsTo`. The lecture has no cosmology content, so nothing is wrong.

## Resolution (2026-11-16, by the page author)

1. The slip note now names p. 7.
2. "Last entry" replaced by "the coefficient of z in the third equation".
3. Added Strang's remark about the better way (from U back to A, pp. 18–19) and a leadsTo to Lecture 4.
4. The MATLAB remark (p. 3) left out as optional.

Status set to reviewed.
