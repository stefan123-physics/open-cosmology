---
page: content/year-2/18.06/projections-onto-subspaces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-15-projections-onto-subspaces/ (not opened directly; the transcript linked from it was read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/96a31504ec5d489d84113320b593eb0d_Y_Ac6KiQ1t0.pdf (read: 22-page PDF, header "ocw-18.06-f99-lec15_300k", extracted per page; PDF page = cited page)
verdict: pass-with-notes
---

# Review: Projections onto subspaces

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Projecting onto a line", bracket after the Properties of P formula | The transcript prints capital "P" for both the projection vector and the matrix, but Strang himself separates them on p. 8: "the formula for P, which is just ax, and then the formula for capital P, which is the matrix". So the clash comes from the transcript's capitalization, not from Strang. | "(Strang writes capital $P$ both for the projection and for the matrix; here the vector is $p$.)" | Reword, e.g. "(The transcript prints capital $P$ for both the projection and the matrix; Strang says 'capital P' for the matrix, p. 8. Here the vector is $p$.)" |
| 2 | info | "Projecting onto a subspace" | p. 11: if $b$ is already in the column space, its projection is just $b$ (the error is zero). | Not mentioned. | Optional: one sentence ("If $b$ is already in $C(A)$, then $p = b$ and $e = 0$", p. 11). |
| 3 | info | "Projecting onto a line", after the first formula | p. 3: the number $\hat x$ "has got a cosine theta built in", but angles are not needed. | Only the remark that trigonometry gives clumsy formulas (p. 2). | Optional; fine as is. |
| 4 | info | Frontmatter summary and Summary, last bullet | The words "least squares" do not occur in the Lecture 15 transcript; they are in the title of Lecture 16. | "to be solved by least squares" / "least squares, starting with the best line". | Acceptable (leadsTo names Lecture 16 correctly); could say "least squares (next lecture)". |
| 5 | info | Silent corrections | Other transcript slips: p. 2 "a is perpendicular to a is perpendicular to e"; pp. 11-12 "x bar" for $\hat x$ ("P is ax bar. And I'm looking for x bar"). | Page silently uses $e \perp a$ and $\hat x$. | No change needed; these are obvious garbles, and the main slips are already noted. |

Citations checked one by one against the transcript:
- Projection onto a line, "pp. 2-3": $a^T(b - xa) = 0$ and $x\,a^Ta = a^Tb$ on p. 2; $\hat x = a^Tb/a^Ta$ and $p = a\hat x$ on p. 3. Correct.
- Projection matrix onto a line, "pp. 4-5": $p = Pb$ p. 4, $P = aa^T/a^Ta$ p. 5. Correct.
- Column space = line through $a$, rank 1: p. 6. Correct.
- Properties of P, "p. 7": $P^T = P$ and the projecting-twice argument both on p. 7 (sentence ends on p. 8). Correct.
- The solvable problem $A\hat x = p$, "p. 9"; "more equations than unknowns" p. 8; hat remark p. 9. Correct.
- Basis $a_1, a_2$ independent but not necessarily perpendicular, $n$ columns: p. 10. $p = A\hat x$: p. 11. Correct.
- Error perpendicular to the columns, "p. 13": both equations and $A^T(b - A\hat x) = 0$ on p. 13. Correct. One column = line case p. 13; $e \in N(A^T)$, perpendicular to $C(A)$, pp. 13-14. Correct.
- Projection onto C(A), "pp. 15-17": $A^TA\hat x = A^Tb$ and $\hat x$ p. 15, $p$ p. 16, $P$ p. 17. Correct. "$A^TA$ is n by n" p. 15, 1-D comparison pp. 15-16. Correct.
- Tempting mistake pp. 17-18; square invertible gives $P = I$, p. 18. Correct.
- Symmetry p. 18, $P^2 = P$ p. 19. Correct.
- Line fitting: introduction p. 19, points p. 20 (including the (2, 1) slip and its correction), equations and matrix p. 21, multiply by $A^T$ and "numbers next time" pp. 21-22. Correct.
- Slip notes: "closest to a" is on p. 1 (correctly explained as meaning $b$); the (2, 1) slip is on p. 20. Both correct.
- Opening claim that $A^TA\hat x = A^Tb$ was announced in the previous lesson: consistent with the page orthogonal-vectors-and-subspaces and with Strang's "as I mentioned last time" (p. 8).

## Arithmetic and answer checks
- Doubling $a$: the factor 2 cancels; "appears twice above and twice below" matches Strang's "a four up above ... an extra four below" (p. 4). Correct.
- Line-fit equations: $C + D = 1$ and $C + 2D = 2$ give $C = 0$, $D = 1$; then $C + 3D = 3 \ne 2$, so no solution. Correct. Matrix rows (1, 1), (1, 2), (1, 3) and right side (1, 2, 2) match p. 21.
- Worked example (a): $a^Tb = 6$, $a^Ta = 3$, $\hat x = 2$, $p = (2,2,2)$, $e = (1,-2,1)$, $a^Te = 0$; $P = \tfrac13$ (all-ones matrix); each entry of $Pb$ = mean of $b$ = 2. All correct.
- Worked example (b): $A^TA = (2, 1; 1, 2)$, $A^Tb = (3, 5)$, $\hat x = (1/3, 7/3)$ (check: $2/3 + 7/3 = 3$, $1/3 + 14/3 = 5$), $p = (1/3, 8/3, 7/3)$, $e = (2/3, -2/3, 2/3)$, $a_1^Te = a_2^Te = 0$. All correct; $e$ is parallel to $a_1 \times a_2 = (1,-1,1)$, as it must be.
- Quiz 1 (answer 0, $P^T = P$ and $P^2 = P$): correct. Quiz 2 (answer 2, does not change): correct. Quiz 3 (answer 3, $N(A^T)$): correct. All explanations correct.
- Flashcards: all three correct.
- `npm run calc:test -- -k projections-onto`: 6 passed.
- Info: the calcs file does not store $p = (1/3, 8/3, 7/3)$, the entries of $A^TA$ and $A^Tb$, or the inconsistency of the three line-fit equations as separate checks; and the `shown` text of `ex-b-xhat2` points at "$A^Tb = (3, 5)$" rather than the $\hat x_2 = 7/3$ it computes. Optional tidy-up.

## Coverage and order
- The page follows the lecture's order: line projection (pp. 1-3), doubling $b$ and $a$ (pp. 3-4), projection matrix, rank, symmetry, $P^2 = P$ (pp. 4-8), why project (pp. 8-9), plane / column space (pp. 9-14), the three formulas (pp. 15-17), the $(A^TA)^{-1}$ pitfall and $P = I$ (pp. 17-18), properties of the general $P$ (pp. 18-19), line-fitting set-up (pp. 19-22).
- Left out: only the small remarks in rows 2 and 3. Nothing added beyond the original worked example.

## Licensing
- The transcript contains no "All rights reserved" or "Courtesy of" notice (searched the extracted text). No figures are used.
- No OpenStax or LibreTexts material.
- No verbatim copying of paragraphs. Close short paraphrases ("solve the closest problem that can be solved", "not the $x$ that does not exist", "projecting twice gives the same result as projecting once") are short phrases and acceptable.
- Worked example originality: the vectors ($b = (3,0,3)$ onto $(1,1,1)$; $b = (1,2,3)$ onto the span of $(1,1,0)$ and $(0,1,1)$) are not the lecture's (which uses letters only) and do not match the Section 4.2 examples of Strang's *Introduction to Linear Algebra* known to the reviewer (e.g. $b = (1,1,1)$ onto $a = (1,2,2)$; columns $(1,1,1)$, $(0,1,2)$ with $b = (6,0,0)$). Projection onto $(1,1,1)$ giving the averaging matrix is a generic idea that also appears in textbook exercises with other $b$. Uncertain whether an exact match exists in some edition's problem set; none was found. Treated as original.

## Notes
- leadsTo 18.06 Lecture 16 "Projection matrices and least squares": matches the `_course.json` syllabus and Strang's "next time I'll complete an example, numerical example" (p. 22). Fair.
- No `Callout kind="cosmology"` on this page; none needed for this lecture.
- The OCW lesson page itself was not opened in this review; only the transcript PDF (as extracted) was read.
- Verdict pass-with-notes: no errors, one wording warning (row 1).

## Resolution (2026-11-16, by the page author)

- Warning fixed: the capital-P note now says the transcript prints capital P for both, while Strang says "capital P" for the matrix (p. 8).
- Added the p. 11 remark that b in C(A) gives p = b, e = 0.
- The `ex-b-xhat2` calcs entry now points at the 7/3 it computes.
- Other info items left as they are.

Status set to reviewed.
