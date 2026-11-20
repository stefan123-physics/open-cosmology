---
page: content/year-2/18.06/similar-matrices-jordan-form.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-28-similar-matrices-and-jordan-form/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/0f4bac6de07c6e13d35de60e556af4be_TSdXJw83kyA.pdf (read: all 21 pages, extracted page by page with pdftotext -f N -l N, so every page citation was checked against the printed transcript page)
verdict: pass-with-notes
---

# Review: Similar matrices and the Jordan form

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Counting eigenvectors is not enough", bracketed sentence about the 7 (line 106) | p. 18: Strang changes "this zero" to a seven and notes "The eigenvalues are all still zero" and the rank is "still two", then says it is similar to the matrix with a zero there. The transcript does not say which zero; for the eigenvalues to stay 0 it must be above the diagonal. | "Changing one of its zeros to 7, while keeping rank 2, gives a similar matrix". Keeping rank 2 is not enough, and that is exactly the point of this section: a 7 at (2, 1) keeps rank 2 but gives eigenvalues ±√7, 0, 0. Above the diagonal, positions (1, 3), (1, 4) and (2, 4) keep rank 2 and the 3 + 1 structure (checked: N² ≠ 0, N³ = 0); (3, 4) raises the rank to 3. | Say where the 7 goes, e.g. "Changing the zero at position (1, 3) to 7 keeps every eigenvalue 0 and the rank 2, and gives a similar matrix" and, if wanted, add that the transcript does not name the position. |
| 2 | info | Strang's example, Formula "Another member of the family" (line 78) | p. 8: Strang says M is "one four one zero" and that its inverse is "one minus four zero one"; his product AM is "two nine one and six". | M = (1 4; 0 1). This is the only reading consistent with the stated inverse and the result B = (−2 −15; 1 6), which I recomputed. "One four one zero" is a slip in the speech or the transcription (it has no inverse of that form: (1 4; 1 0) has inverse (0 1; 1/4 −1/4)). | Optional, by writing rule 4: add a short bracket such as "(the transcript reads the entries as 'one four one zero'; the inverse Strang writes, (1 −4; 0 1), shows M = (1 4; 0 1))". |
| 3 | info | The two 4 × 4 nilpotent matrices (lines 106–108) | pp. 17 and 19: the transcript only says "a one off the diagonal, say a one there" and "let me just move the one"; the positions come from the block description on p. 19 (first: a 3 × 3 block and a 1 × 1 block; second: two 2 × 2 blocks). | Ones at (1, 2), (2, 3) and at (1, 2), (3, 4). This reconstruction is correct: it is the only arrangement of two superdiagonal ones giving 3 + 1 and 2 + 2 respectively, and both have rank 2 and nullity 2. | Optional: say the positions are read off the block structure Strang describes. |
| 4 | info | "Jordan block" Formula J = (4 1; 0 4), `at="pp. 14–15"` | The matrix first appears on p. 13 ("four four one zero", again in board reading order), is called the best member on p. 14 and named after Jordan on p. 15. | pp. 14–15. | Optional: `at="pp. 13–15"`. |
| 5 | info | "Main fact" Formula, `at="p. 9"` | Stated at the end of p. 8 ("They have the same eigenvalues") and written down on p. 9. | p. 9. | Fine as is (p. 9 is where it is written); "pp. 8–9" would also do. |
| 6 | info | "In general $a$ and $8 - a$ on the diagonal…" (line 104) | pp. 16–17: any a and 8 − a, fill in to get trace 8 and determinant 16; all similar. | Same, but the sentence does not repeat that the choice a = 4 with both off-diagonal entries 0 gives 4I, which is not in the family. The summary and flashcard say "not 4I". | Optional: add "(except 4I itself)". |
| 7 | info | Coverage, p. 18 | Strang: Jordan puts "a one above the diagonal for every missing eigenvector". | Not stated (the page says one block per eigenvector, which is equivalent). | Optional: add the sentence; it explains why 4 × 4 with two eigenvectors has two ones. |

No error-level differences were found. Every formula was checked against the transcript:
- Sum of positive definite matrices, p. 2: correct.
- $x^TA^TAx = (Ax)^T(Ax) = \|Ax\|^2 \ge 0$, p. 4: correct ("put those parentheses in a good way", length squared).
- $B = M^{-1}AM$, pp. 6–7: definition starts on p. 6 and runs onto p. 7. Correct.
- $M^{-1}AM = B$ with the numbers, p. 8: correct (see check below).
- Main fact, p. 9: correct.
- Proof, p. 11 (starts with $Ax = \lambda x$ on p. 10): correct.
- Loner $M^{-1}(4I)M = 4I$, p. 14: correct.
- More members (5 1; −1 3) and (4 0; 17 4), p. 16: correct. Strang puts the 17 "down there", so (2, 1) is a fair reading; either corner gives determinant 16 and eigenvalues 4, 4.
- Two Jordan structures, pp. 17–19: correct (see #3).
- Jordan block $J_i$, p. 19: correct (repeated $\lambda_i$, ones above, one eigenvector).
- Jordan form with $d$ = number of eigenvectors, p. 20: correct. Writing $A = MJM^{-1}$ is equivalent to $J = M^{-1}AM$, matching the page's definition.

Other claims checked: inverse via eigenvalues $1/\lambda$, pivots no help (pp. 1–2); Strang's apology for reusing A (p. 3); "like the square of a number" (p. 3); 11 × 5, rank 5, no row exchanges or small pivots (p. 5); "the heart of linear algebra" and SVD on Monday, "Ten years ago, five years ago it wasn't in the course" (p. 6); Λ as the outstanding member (p. 7); eigenvalues 3 and 1 (p. 8); triangular member with 3 and 1 (p. 10); eigenvectors "moved around", diagonalisation gives (1, 0), (0, 1) (p. 12); λ₁ = λ₂ may fail to diagonalise, two families (p. 13); one eigenvector, 10 or a million (pp. 14–15); climax when Strang took 18.06, numerically not good, right for algebra (p. 15); same number of eigenvectors (p. 17); "nightmares" (p. 17); rank 2, nullspace dimension 2 (p. 18); good case $d = n$, $J = \Lambda$, not told how to compute (p. 20); what 18.06 was about 20 years ago (p. 21). All page citations agree with the printed transcript pages.

Lecturer slips: p. 1 "x transpose I x" for $x^TAx$ (not repeated on the page; fine). "one four one zero" for M (see #2).

## Arithmetic and answer checks
- `npm run calc:test -- -k similar-matrices`: 17 passed.
- Strang's example: AM = (2 9; 1 6); M⁻¹(AM) = (2 − 4, 9 − 24; 1, 6) = (−2 −15; 1 6). Trace 4, determinant −12 + 15 = 3, eigenvalues 3 and 1. Correct.
- (5 1; −1 3): trace 8, det 15 + 1 = 16. (4 0; 17 4): det 16. Both not 4I, so in the Jordan-block family. Correct.
- 4 × 4 matrices: rank 2, nullity 2 for both; first has N² ≠ 0 (blocks 3 + 1), second N² = 0 (blocks 2 + 2), so not similar. Correct.
- Worked example (a): M⁻¹ = (1 −1; 0 1); AM = (5 7; 1 5); B = (4 2; 1 5). Trace 9 for both, det 20 − 2 = 18 for both; λ² − 9λ + 18 = (λ − 6)(λ − 3). (A − 6I)(2, 1) = (−2 + 2, 2 − 2) = 0; M⁻¹(2, 1) = (1, 1); B(1, 1) = (6, 6). Correct.
- (b): C = (6 1; −1 4), trace 10, det 24 + 1 = 25, eigenvalues 5, 5; C − 5I = (1 1; −1 −1), rank 1, eigenvector (1, −1). Not 5I, so similar to (5 1; 0 5). Correct.
- (c): AᵀA = (14 13; 13 21) (1+4+9, 2+8+3, 4+16+1); det 294 − 169 = 125 > 0; columns independent. Correct.
- calcs file (info): `member-1` adds trace and determinant into one number (24), `ex-am` and `ex-b` pack two entries as 10a + b, and `ex-dets` adds two determinants; a wrong pair could still give the expected total (e.g. trace 9, det 15). Splitting them into separate entries would make the checks stronger. Entries for AᵀA (2, 2) = 21, B's second row (1, 5), M⁻¹x = (1, 1) and C's trace 10 are missing. Page-own entries cite transcript pages, which is harmless but not meaningful.
- Quiz 1: answer 1 (rank n). Correct.
- Quiz 2: answer 2 ($M^{-1}x$). Correct, explanation correct.
- Quiz 3: answer 1 ((5 1; −1 3)). Correct: the distractors are 4I (similar only to itself), diag(3, 5) and (4 1; 0 3) (different eigenvalues).
- Quiz 4: answer 1 (one block per independent eigenvector). Correct (p. 20).
- Flashcards: all four correct.

## Coverage and order
- The page follows Strang's order: positive definite recap (inverse, sum, AᵀA; pp. 1–6), definition of similar matrices and Λ (pp. 6–7), the 2 × 2 example (pp. 7–10), proof (pp. 10–12), repeated eigenvalues and the two families (pp. 12–17), the 4 × 4 nightmare examples (pp. 17–19), Jordan blocks and Jordan's theorem (pp. 19–21).
- One small rearrangement: Strang's remarks on Jordan as the old climax and its numerical fragility (p. 15) are moved to the Jordan's theorem section, with both page numbers cited. Fine.
- Omissions (info only): "a one above the diagonal for every missing eigenvector" (p. 18).
- Additions: the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched). 18.06 Spring 2010 is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases ("outstanding member", "the heart of linear algebra", "moved around", "nightmares", "numerically not a good thing"), which is fine.
- Worked example: original numbers (A = (5 2; 1 4), M = (1 1; 0 1), C, a 3 × 2 matrix); not Strang's lecture example. Part (b) uses the same construction as Strang's (5 1; −1 3) (diagonal λ ± 1, off-diagonal 1 and −1) shifted to eigenvalue 5; that is a legitimate rewritten exercise. Whether any of the numbers coincide with Strang's textbook (Introduction to Linear Algebra, Section 6.6) was **not verified** (book not read).

## Notes
- `leadsTo` 18.06 Lecture 29 "Singular value decomposition" matches `_course.json` and Strang's announcement (pp. 6, 21). The description ("orthogonal matrices on both sides, for every matrix") is accurate for the SVD but is not stated in this transcript; it is a fair forward description.
- No `Callout kind="cosmology"`; nothing to check.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1. The bracket about the 7 now says the eigenvalues stay zero and the rank stays 2, names (1, 3) as an example position above the diagonal, and notes that the transcript does not say which zero. Strang's "a one above the diagonal for every missing eigenvector" (finding 7) is added there.
2. Added a bracket on reading "one four one zero" as M = (1 4; 0 1).
3. Added that the positions of the ones in the 4 × 4 examples are fixed by the block structures Strang describes.
4. The Jordan block now cites pp. 13–15.
5. No change.
6. Added "except 4I itself".
8. Calcs: added AᵀA (2, 2) = 21, B's second row, M⁻¹x and the trace of C. The combined entries are kept (each combination has a unique decoding).

Status set to reviewed.
