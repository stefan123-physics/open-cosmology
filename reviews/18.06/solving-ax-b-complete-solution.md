---
page: content/year-2/18.06/solving-ax-b-complete-solution.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/224769c9e399493a99ac441ba670eebf_9Q1q7s1jTzU.pdf (read, as extracted per-page text, pp. 1–20; PDF page = cited page)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-8-solving-ax-b-row-reduced-form-r/ (not opened; URL and title match `_course.json`)
verdict: pass-with-notes
---

# Review: Solving Ax = b: the complete solution

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Note after the four-case table ("Strang briefly attaches the wrong case to a row of his summary board…") | p. 18: he writes the second row as "r = m smaller than n", then gives it R = identity with zero rows and "zero or one solution" (the r = n < m case); p. 19: "Oh, I'm not! … This is the case r = n", and he relabels it. | Says only that he attaches "the wrong case to a row". This is accurate but vague. | Optionally say which: he first labelled the "I over 0, 0 or 1 solution" row as r = m < n and corrected it to r = n < m. |
| 2 | info | Four-case table, row r = m < n | p. 19: he first says "either one or infinitely many solutions", then "Actually, I guess there's always an infinite number, because we always have some null space". | ∞ solutions. | Correct: it matches his final answer (n − m ≥ 1 free variables). A short bracket noting the self-correction is optional. |
| 3 | info | Note after the complete-solution formula ("slightly misquotes the first equation") | p. 8: "the first equation was two x3 plus two x4 equaling zero", then checks "Two minus four and two gives zero" (that is x1 + 2x3 + 2x4 with (2, 0, −2, 1)). The real first equation is x1 + 2x2 + 2x3 + 2x4 = 0. | Describes a slight misquote of the first equation while he checks the special solutions recalled from memory (p. 7). | Accurate. No change needed. |
| 4 | info | "When is there a solution?", rows of A | p. 1: when writing down the matrix he says the third row is "6 3 8 10" (a spoken slip; earlier on the same page he says 3 6 8 10). | Uses 3 6 8 10 without comment. | The correct value is used. A note is optional since the slip is a one-word misstatement corrected on the same page. |
| 5 | info | Four-case `<Formula>` | (layout) | `\begin{array}{cccc}` declares 4 columns but each row has 3 entries. | Harmless in KaTeX. Could be `{ccc}`. |

Every other formula and citation checked out:
- Elimination on [A b] (p. 2): the final row has right side b3 − b2 − b1, as on p. 2. Strang shows the intermediate row (0 0 2 4 | b3 − 3b1) as well; leaving it out is fine.
- The particular solution (−2, 0, 3/2, 0) is on p. 6. Particular plus nullspace is on pp. 6–7.
- The complete solution with (−2, 1, 0, 0) and (2, 0, −2, 1) is on pp. 7–8. Both special solutions are correct for this matrix (x1 + 2x2 + 2x3 + 2x4 = 0 and 2x3 + 4x4 = 0).
- r ≤ m and r ≤ n are on pp. 10–11. The full-column-rank A and R = [I; 0] are on p. 13, running onto p. 14 for R. The four cases are on pp. 18–19.
- Every equation was on the board. There are no slides for this lecture, so the transcript is the right citation.

The claims are supported as cited:
- Solvability is the same as b in C(A) (p. 3). The row-combination form is on p. 4, and "not immediate … both equivalent to solvability" is on p. 4.
- Strang tells students to check x_p in the original system (p. 6). "This pattern shows up through all of mathematics" is on p. 6.
- There is no constant in front of x_p (p. 8). The solution set is a shifted two-dimensional "flat thing" that does not contain zero (pp. 9–10).
- "Many applications" is on p. 12. b = (4, 3, 7, 6) with x = (1, 1) is on pp. 14–15.
- Full row rank gives no zero rows and no condition on b (p. 15), with n − m free variables (p. 16). The transposed example has pivots in columns 1 and 2 and R = [I F] (pp. 16–17).
- [[1, 2], [3, 1]] is invertible with R = I (pp. 17–18). I and F may be interleaved (p. 19). "The rank tells you everything about the number of solutions" is on p. 20.

## Arithmetic and answer checks
- b3 = 1 + 5 = 6, and (1, 5, 17) fails: correct.
- For b = (1, 5, 6) the right side becomes (1, 5 − 2, 6 − 5 − 1) = (1, 3, 0): correct.
- x3 = 3/2 and x1 = 1 − 2(3/2) = −2. A x_p = (−2 + 3, −4 + 9, −6 + 12) = (1, 5, 6): correct.
- Special solutions: (−2, 1, 0, 0) gives −2 + 2 = 0 in row 1 and 0 in row 2. (2, 0, −2, 1) gives 2 − 4 + 2 = 0 in row 1 and −4 + 4 = 0 in row 2: correct.
- Full column rank: the 2 × 2 block [[1, 3], [2, 1]] has determinant −5, so the rank is 2. The column sum is (4, 3, 7, 6), so x = (1, 1): correct.
- Full row rank: [[1, 2], [3, 1]] has determinant −5, so the pivots are in columns 1 and 2: correct. The square example is invertible: correct.
- Worked example, matrix B = [[1, 3, 0, 2], [2, 6, 1, 7], [1, 3, 2, 8]]:
  - R2 − 2R1 = (0, 0, 1, 3) and R3 − R1 = (0, 0, 2, 6). The last right side is b3 − b1 − 2(b2 − 2b1) = 3b1 − 2b2 + b3. The condition b3 = 2b2 − 3b1 is correct.
  - 2(2, 6, 1, 7) − 3(1, 3, 0, 2) = (1, 3, 2, 8) = row 3: correct.
  - b = (1, 4, 5): 2·4 − 3 = 5 passes. The reduced right side is (1, 4 − 2, 0) = (1, 2, 0). That gives x1 = 1, x3 = 2 and x_p = (1, 0, 2, 0). B x_p = (1, 2 + 2, 1 + 4) = (1, 4, 5): correct.
  - Special solutions (−3, 1, 0, 0) and (−2, 0, −3, 1) match the Lecture 7 page, and both give B x = 0 (checked against all three rows). The rank is 2 < 3 and 2 < 4, which is the "0 or ∞" case: correct.
- Quiz 1 (answer 1, "A(3x_p) = 3b"): correct, and so is the explanation.
- Quiz 2 (5 × 3, rank 3 → "0 or 1"): correct. r = n < m.
- Quiz 3 (full row rank r = m): correct. "Square matrices" is rightly wrong, because singular square matrices exist.
- Flashcards: all three are correct. The rank card matches Strang's final four cases.
- `npm run calc:test -- -k solving-ax-b`: 7 passed.
  - Not covered by calcs (info): the two Lecture 8 special-solution checks, the page example's special solutions, the reduced right side (1, 2, 0), and x = (1, 1).
  - The page-own entries `ex-row3` and `ex-condition` give MIT transcript pages as their `source` (p. 4, pp. 2–3), although these numbers are not in the transcript. Harmless, but they could be cited as the method only.

## Coverage and order
- The page follows the lecture order: solvability by elimination on [A b] (pp. 1–4), particular solution (pp. 4–6), adding the nullspace (pp. 6–8), the picture in R⁴ (pp. 9–10), rank bounds (pp. 10–11), full column rank (pp. 11–15), full row rank (pp. 15–17), full rank (pp. 17–18), the summary board (pp. 18–19), and the closing sentence (p. 20).
- Left out (trivial asides only): the Matlab remark (p. 2), the quiz/final remark (p. 4), and "the square invertible chapter two case … now we're into chapter three" (p. 18). None matter.
- Added: the worked example (the page's own).
- Forward link: Strang says on p. 9 that the dimension of a subspace comes "next time". `leadsTo` points to Lecture 9 (Independence, basis and dimension), and its claim that the dimension of N(A) is the number of free variables is correct. Lecture 9 does establish dim N(A) = n − r; I know this from the course content, not from a transcript I read.
- There is no `Callout kind="cosmology"`, which is fine for an 18.06 page.

## Licensing
- The transcript text contains no "rights reserved" or "courtesy" notice (searched with grep). 18.06 Spring 2010 is CC BY-NC-SA on OCW.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases. Two lines are close paraphrases of Strang's own sentences and are acceptable as standard statements:
  - "if a combination of the rows of A gives the zero row, the same combination of the entries of b gives 0" (p. 4)
  - "The rank tells everything about the number of solutions" (p. 20)
- Originality of the worked example: matrix B is not used anywhere in Lecture 8. It comes from the site's own Lecture 7 page, and its right side (1, 4, 5) is new. I did not compare it with Strang's textbook (*Introduction to Linear Algebra*, Section 3.4) because I had no copy. As far as I recall, the textbook's Section 3.4 example uses a different matrix, but I am not certain of this.

## Notes
- Both lecturer slips the page mentions are described accurately: the misquoted equation on p. 8, and the summary-board mix-up on pp. 18–19. The second note could name the swapped case (finding 1).
- The four-case table matches what Strang finally says on pp. 18–19: r = m = n gives R = I and 1 solution. r = n < m gives [I; 0] and 0 or 1 solutions. r = m < n gives [I F] and ∞ solutions. r < m, r < n gives [I F; 0 0] and 0 or ∞ solutions. The rows are in his final order.
- There are no errors, so the verdict is pass-with-notes.

## Resolution (2026-11-16, by the page author)

- The pp. 18–19 note now names the case Strang mislabels (the [I; 0] row, first called r = m < n, corrected to r = n < m) and his self-correction from "one or infinitely many" to infinitely many.
- The array specification changed to three columns.
- The silent correction of "6 3 8 10" (p. 1) is left without a note: it is a transcription slip.
- Calcs coverage left as is (info only).

Status set to reviewed.
