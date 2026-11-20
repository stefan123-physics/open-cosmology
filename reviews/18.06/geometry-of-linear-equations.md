---
page: content/year-2/18.06/geometry-of-linear-equations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-1-the-geometry-of-linear-equations/ (read: local copy lec.html; title "Lecture 1: The geometry of linear equations"; its only .pdf link is f4e7ccf6e84b66c908c250fb85323f64_J7DzL2_Na80.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/f4e7ccf6e84b66c908c250fb85323f64_J7DzL2_Na80.pdf (read: local copy transcript.pdf, "MITOCW | ocw-18.06-f99-lec01_300k", 20 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page extracted separately with pdftotext -f N -l N and read)
  - content/year-2/18.06/_course.json (read: Lecture 1 title and URL match the page; Lecture 2 = "Elimination with matrices"; the Lecture 2 transcript was not read)
  - content/year-2/18.03/direction-fields.mdx and content/year-1/18.02/{dot-product,matrices,planes-and-linear-systems}.mdx (frontmatter and summaries read, for comparison and prerequisites)
  - calcs/18.06/geometry-of-linear-equations.yaml (read; `npm run calc:test -- -k geometry-of-linear`: 7 passed)
verdict: pass-with-notes
---

# Review: The geometry of linear equations

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 introduction (textbook, course web page), fundamental problem, n equations in n unknowns, row picture, column picture (starred), matrix form; p. 2 the 2 × 2 system 2x − y = 0, −x + 2y = 3, "a matrix is just a rectangular array of numbers", coefficient matrix, vector of unknowns, b, Ax = b, start of the row picture; p. 3 (0, 0) and (1, 2) on the first line, "linear" has "line" in it, (1/2, 1), second line misses the origin; p. 4 (−3, 0), (−1, 1), lines meet at (1, 2), check −1 + 4 = 3; p. 5 column picture "the key point", linear combination, "the most fundamental operation in the whole course"; pp. 6–7 drawing column 1 = (2, −1), column 2 = (−1, 2), one of column 1 plus two of column 2 tucked on the end; p. 8 lands at (0, 3) = b, 2 − 2 = 0 and −1 + 4 = 3, all combinations fill the whole plane; p. 9 the 3 × 3 system and its matrix, b = (0, −1, 4); p. 10 row picture, equation two, origin not on it, points (1, 0, 0), (0, 0, 1), (0, −½, 0), "it's a plane"; p. 11 each row a plane, two planes meet in a line, three in a point; p. 12 planes not parallel, harder to see in three and four dimensions, column picture with the three columns; p. 13 drawing the columns, "specially chosen by the lecturer", b is column 3, x = 0, y = 0; p. 14 z = 1, solution (0, 0, 1), elimination next lecture, new right-hand side column 1 + column 2 = (1, 1, −3); p. 15 can Ax = b be solved for every b, do the combinations of the columns fill three-dimensional space; p. 16 yes for this matrix, non-singular, invertible, columns in one plane, column 3 = column 1 + column 2, singular; p. 17 not invertible, nine dimensions, random MATLAB matrix invertible, ninth column = eighth; p. 18 eight-dimensional plane in nine-dimensional space, Ax = b, how to multiply a matrix by a vector, (2 5; 1 3) times (1, 2), "my favorite way. It's columns again"; p. 19 one of column 1 plus two of column 2 = (12, 7), by rows (dot products), "A times x is a combination of the columns of A"; p. 20 if b were (12, 7) the solution would be (1, 2), elimination next time.

Formula locations: "A 2 × 2 system" p. 2; "Column picture" p. 5; "A 3 × 3 system" p. 9; "Column picture in three dimensions" p. 12; "Multiplication by columns" p. 19 (the matrix and vector are set up on p. 18, the computation is p. 19). All correct; every equation matches the board as dictated.

Prose citations also checked: three pictures p. 1; matrix definition and Ax = b p. 2; points on line 1 and the word linear p. 3; points on line 2, solution and check p. 4; column picture and linear combination p. 5; drawing pp. 6–8; componentwise p. 8; fill the plane p. 8; plane points p. 10; line then point p. 11; hard to picture, four dimensions p. 12; column picture p. 12; b = column 3 pp. 13–14; new right-hand side p. 14; elimination next lecture p. 14; every b p. 15; invertible and singular p. 16; nine dimensions pp. 17–18; favourite way pp. 18–19; rows as dot products p. 19; "Ax is a combination of the columns" p. 19. All correct.

"Rights reserved" / "courtesy" check: no occurrence in the transcript or in lec.html. Confirmed. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Every right-hand side?": "A random $9 \times 9$ matrix is invertible" | p. 17: "If I used MatLab and just used the random command, picked out a nine by nine matrix, I guarantee it would be good." | Stated as a flat fact in the site's voice. Strictly, a random matrix (continuous distribution) is invertible with probability one, not always. | "A randomly chosen $9 \times 9$ matrix is (with probability one) invertible", or attribute: "Strang guarantees that a random …". |
| 2 | info | Intro: "The vectors and dot products of 18.02 come in at once." | Dot products appear only at the very end (p. 19), when multiplying by rows. | "At once" overstates it. | "Vectors come in at once, and dot products at the end." |
| 3 | info | Placement of the `<Plot>` | The row-picture graph belongs to pp. 2–4. | The plot (row picture) sits at the end of the column-picture paragraph, so a reader meets a row-picture graph right after the column-picture text. | Move the plot up, after the row-picture paragraph, or say "Back to the row picture:" in the caption. Optional: add a `<VectorDiagram>` of the column picture (column 1 plus two of column 2 reaching (0, 3)), which is the lecture's "key picture" (p. 8). |
| 4 | info | Column picture of the 2 × 2 system | p. 8: "the combinations of this and this would fill the whole plane". | Correct. The page also does not mention p. 20 (if b were (12, 7), the solution of the matrix-vector example's system would be (1, 2)), which ties matrix multiplication back to solving. | Optional sentence after the multiplication formula. |
| 5 | info | Prerequisites | — | `prerequisites: [dot-product]` only. The site already has 18.02 Lecture 3 (`matrices`: matrices, AX = B, inverse) and Lecture 4 (`planes-and-linear-systems`: a 3 × 3 system as three planes meeting, invertible vs singular). The latter is exactly the row picture in three dimensions and the singular case. | Add `planes-and-linear-systems` (and possibly `matrices`) to the prerequisites, or link it in the 3 × 3 row-picture paragraph. |

Lecturer slips and transcript garbles checked:
- p. 2 "-x 2y=3" and p. 9 "-x 2y": the plus sign is lost in the transcript; the board equation is −x + 2y = 3. The page is correct.
- p. 9 "-3z, -3ys, I should keep the ys in that line": self-correction; third equation −3y + 4z = 4. The page is correct.
- p. 9 "Our matrix A is this right-hand side": a slip for left-hand side (the coefficients). Not repeated.
- p. 14 "The solution with this new right-hand side is clear. took one of these and none of those": garbled (a line of text is missing). The solution of A x = (1, 1, −3) is (1, 1, 0), as the page says; checked below.
- p. 20 "right-hand side B": capital for b. Not repeated.
- None needs a bracketed note on the page.
- Background (info, no change needed): the transcript file name "ocw-18.06-f99-lec01" shows the video was recorded in Fall 1999 and republished in the Spring 2010 course; the page cites the Spring 2010 course correctly, as the course file does.

## Arithmetic and answer checks
- `npm run calc:test -- -k geometry-of-linear`: 7 passed.
- 2 × 2 system: (1, 2) gives 2 − 2 = 0 and −1 + 4 = 3. Correct. Line 1 through (0, 0) and (1, 2): 0 = 0, 2 − 2 = 0. Line 2 through (−3, 0): 3 + 0 = 3; (−1, 1): 1 + 2 = 3. Correct.
- Column combination: 1·(2, −1) + 2·(−1, 2) = (0, 3). Correct.
- 3 × 3 plane −x + 2y − z = −1: (1, 0, 0) gives −1; (0, 0, 1) gives −1; (0, −½, 0) gives −1. Correct.
- 3 × 3 solution (0, 0, 1): A(0, 0, 1) = column 3 = (0, −1, 4) = b. Correct. Column 1 + column 2 = (2 − 1, −1 + 2, 0 − 3) = (1, 1, −3); A(1, 1, 0) = (1, 1, −3). Correct.
- Matrix times vector: 1·(2, 1) + 2·(5, 3) = (12, 7); rows 2 + 10 = 12, 1 + 6 = 7. Correct.
- Worked example (a): x + 2y = 5, 3x − y = 1. (5 − x)/2 = 3x − 1 ⇒ 5 − x = 6x − 2 ⇒ x = 1, y = 2; check 1 + 4 = 5, 3 − 2 = 1. Column picture 1·(1, 3) + 2·(2, −1) = (5, 1). Correct.
- Worked example (b): (1, 0, 1) + (0, 1, 1) = (1, 1, 2), so column 3 is the sum of the first two; combinations a(1, 0, 1) + c(0, 1, 1) = (a, c, a + c), the plane z = x + y. (1, 2, 3): 1 + 2 = 3, reached by 1·(1, 0, 1) + 2·(0, 1, 1). (1, 2, 4): 4 ≠ 3, unreachable. (Also det = 1·(2 − 1) − 0 + 1·(0 − 1) = 0: singular.) Correct.
- Worked example (c): 2·(3, −2) − 1·(1, 4) = (5, −8); by rows 6 − 1 = 5, −4 − 4 = −8. Correct.
- Plot: curves y = 2x (from 2x − y = 0) and y = (3 + x)/2 (from −x + 2y = 3) are right; they meet at x = 1, y = 2, the marked point; (−3, 0) and (−1, 1) lie on the dashed line inside the window [−4, 3] × [−2, 4]. Caption correct. Generated from formulas, not an image. `content:check` reports no label problem.
- Quiz 1: answer 1 (combination of the columns equal to b). Correct (pp. 5, 12, 19); explanation correct.
- Quiz 2: answer 2, (12, 7). Correct (p. 19); the distractor (7, 12) is the swapped order, a fair trap. Explanation correct.
- Quiz 3: answer 0 (columns in one plane). Correct (p. 16); explanation correct. (Strictly "a plane through the origin", which any plane containing three vectors drawn from the origin is; fine.)
- Correct-answer positions 1, 2, 0: varied.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file (info): not checked are the column-picture first component 2 − 2 = 0, the plane points (1, 0, 0) and (0, 0, 1), the 3 × 3 solution (0, 0, 1) and the new right-hand side (1, 1, −3) with solution (1, 1, 0), the column form of the matrix-vector product, example (a)'s y = 2 and column check (5, 1), example (b) entirely (third column = sum, 1 + 2 = 3, 1 + 2 ≠ 4) and example (c)'s first component 5. Adding them would complete it. The page-own entries `ex-a` and `ex-c` carry `source: {cite: reading1, at: …}` pointing to the transcript although the material is the page's own; harmless but slightly misleading.

## Coverage and order
- The page follows the lecture's order: the problem and three pictures (p. 1) → 2 × 2 system and matrix form (p. 2) → row picture (pp. 2–4) → column picture (pp. 5–8) → 3 × 3 system (p. 9) → row picture, planes (pp. 10–12) → column picture (pp. 12–14) → new right-hand side, elimination next (p. 14) → every b, invertible vs singular (pp. 15–17) → nine dimensions (pp. 17–18) → matrix times vector by columns and by rows (pp. 18–19). Same order as MIT.
- Left out (minor): the course textbook and web page (p. 1); the third point (½, 1) on line 1 (p. 3); the remark that the three planes meet in one point because they are "not parallel, not special" (p. 12); the closing remark that (12, 7) as a right-hand side would have solution (1, 2) (p. 20, finding 4). None essential.
- Added: the worked example (page-own) and the plot.
- Frontmatter compared with `content/year-2/18.03/direction-fields.mdx`: same fields and form (quoted title, `course: "18.06"`, lecture 1, order 1, `source` with lecture page URL and transcript PDF as `reading1`, `references: {}`, `status: draft`). The `source.url` and title match `_course.json` and lec.html. The inline link `/courses/18-02/dot-product` uses the 18.02 course slug `18-02` and an existing page; the prerequisite slug `dot-product` exists.
- `npm run content:check`: 0 errors; the only warning for this page is "no review file yet".

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("the most fundamental operation in the course", "Ax is a combination of the columns of A", "specially chosen", "a kind of eight-dimensional plane") are brief, attributed or standard, and acceptable.
- Board examples (the 2 × 2 and 3 × 3 systems, the (2 5; 1 3) product) are used as the lecture's own examples with citations, as on other pages.
- Worked example: from memory (not checked against the book, so uncertain), Strang's *Introduction to Linear Algebra* Section 2.1 uses x − 2y = 1, 3x + 2y = 11 and the 3 × 3 system x + 2y + 3z = 6, 2x + 5y + 2z = 4, 6x − 3y + z = 2, and its Chapter 1 singular example is the cyclic-difference matrix; the page's (a), (b) and (c) do not match these. (a) shares the solution (1, 2) with the lecture's system but is a different system. They appear original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.06 Lecture 2 ("Elimination: the systematic way to solve Ax = b."): matches `_course.json` ("Elimination with matrices") and the transcript (p. 14: elimination is "the systematic way that everybody, every bit of software … would solve the equations"; p. 20: "a systematic way, using elimination"). Correct. The Lecture 2 transcript was not read.
- No `Callout kind="cosmology"` and no cosmology `leadsTo`. The lecture itself has no cosmology content, so nothing is wrong; `_course.json`'s `cosmologyNeeds` (metric as a matrix, rotations as orthogonal matrices) fits later lectures better than this one. Optional only.
- Symbols: `content:check` reports no symbol error or warning for this page.

## Resolution (2026-11-16, by the page author)

1. The claim about random matrices is now Strang's and says "with probability one".
2. The introduction no longer says dot products come in at once. It links the 18.02 pages on dot products and on planes and linear systems, and the second is added as a prerequisite.
3. The closing remark of p. 20 is added: with b = (12, 7), x = (1, 2).

The plot stays as the row picture. Status set to `reviewed`.
