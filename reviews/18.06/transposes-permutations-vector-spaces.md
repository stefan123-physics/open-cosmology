---
page: content/year-2/18.06/transposes-permutations-vector-spaces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-5-transposes-permutations-spaces-r-n/ (read: title, resources, licence notices)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/c69adb4aa79fccdc5d4225163689471e_JibVXBElKL0.pdf (read, as per-page extracted text, pp. 1–21)
verdict: pass-with-notes
---

# Review: Transposes, permutations and vector spaces

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Transposes and symmetric matrices", the sentence before the "A symmetric product" formula and the bracketed note after it | p. 6: the 3×2 matrix (columns (1, 2, 4) and (3, 3, 1)) is called R. p. 7: "the column was one two four three three one. I called that one R transpose, … and I called this guy one two four three three one. I called that R." He then takes rows (1, 3), (2, 3), (4, 1) of the **left** factor: (1,3)·(1,3) = 10, (1,3)·(2,3) = 11, (1,3)·(4,1) = 7. So on p. 7 the left factor (the 3×2 matrix) is labelled "Rᵀ", and with that labelling the product really is "RᵀR". | The numbers 10, 11, 7 "belong to RRᵀ" and "Strang calls the product RᵀR". | The arithmetic claim is **verified**: with R the 3×2 matrix (as on p. 6 and on this page), the 3×3 product with first row 10, 11, 7 is RRᵀ, and RᵀR = (21 13; 13 19). But the slip is in Strang's naming, which swaps between p. 6 and p. 7, not in the numbers. Suggested wording: "On p. 7 Strang names the factors the other way round, so the 3×3 product he multiplies out (first row 10, 11, 7) is, with R the 3×2 matrix as here, RRᵀ." Uncertain: only the transcript was compared, not the board in the video. |
| 2 | warning | "A symmetric product" formula, `at="p. 7"` | p. 7 gives only 10, 11, 7 and the symmetric 11 and 7. The remaining entries and the 2×2 product RᵀR do not appear anywhere in the lecture. | The full 3×3 RRᵀ and the 2×2 RᵀR, cited to p. 7 | The bracket after the formula says "completed here", which is good. Consider noting it in the label or caption as well (e.g. label "A symmetric product (completed on this page)"), so the citation is not read as covering numbers MIT never gave. |
| 3 | info | "Row exchanges", "24 of size 4 … (pp. 3–4)" | n! is on p. 3; 24 and 120 are both on p. 4 | pp. 3–4 | Acceptable. The calcs entry `perms-4` could cite p. 4. |
| 4 | info | "Inverse of a permutation" paragraph | p. 4: "matrices that have P transpose P equal the identity" | "Matrices with QᵀQ = I" | Renaming to Q (orthogonal matrices, later in the course) is fine and not a misquote. |
| 5 | info | PA = LU paragraph | p. 3: "any invertible A we get this" | Invertibility is mentioned in the first sentence ("A perfectly good invertible matrix") but not with PA = LU itself | Optional: say "for every invertible A" next to the formula. |

Every other formula citation was checked and matches the transcript:
- PA = LU: p. 2.
- PᵀP = I and P⁻¹ = Pᵀ: P⁻¹ = Pᵀ in words on p. 3, "P transpose P is the identity" on p. 4.
- The transpose example: pp. 4–5.
- (Aᵀ)ᵢⱼ = Aⱼᵢ: p. 5.
- (RᵀR)ᵀ = Rᵀ(Rᵀ)ᵀ = RᵀR: pp. 8–9.
- Rⁿ as column vectors with real components: p. 13.
- Column space C(A): named on p. 19, with the combinations on pp. 18–19.

The prose citations also check out:
- MATLAB and small pivots: p. 2.
- "Almost every one, we don't need a P": p. 3.
- The little group of permutations: p. 4.
- Symmetric matrices: pp. 5–6.
- "That's where they come from in so many practical applications": p. 9.
- The two operations on vectors: p. 9.
- "Some decent rules": p. 10.
- The examples (3, 2), (0, 0), (π, e): p. 10.
- The sum, and R² as the xy-plane: p. 11.
- The zero vector, and (3, 2, 0) in R³: p. 12.
- The eight rules: p. 13.
- The quarter plane: pp. 13–14.
- Multiplying by −5, and the word "closed": p. 14.
- The line through the origin: pp. 15–16.
- The subspaces of R²: pp. 16–17.
- 17·0 and the subspaces of R³: p. 17.
- (4, 5, 5): p. 18.
- The plane: pp. 19–20.
- Five vectors in R¹⁰: p. 20.
- Ax = b in the next lecture: p. 21.

## Arithmetic and answer checks
- The transpose of R (3×2, columns (1, 2, 4) and (3, 3, 1)) is (1 2 4; 3 3 1). Correct.
- RRᵀ uses the rows (1,3), (2,3), (4,1):
  - (1,1) = 10, (1,2) = 11, (1,3) = 7.
  - (2,2) = 4 + 9 = 13, (2,3) = 8 + 3 = 11.
  - (3,3) = 16 + 1 = 17.
  - All of them are correct, and the matrix is symmetric.
- RᵀR uses the columns (1,2,4) and (3,3,1): 1 + 4 + 16 = 21, 3 + 6 + 4 = 13, 9 + 9 + 1 = 19. Correct.
- 4! = 24 and 5! = 120. Correct.
- (1, 2, 4) + (3, 3, 1) = (4, 5, 5). Correct.
- (3, 2) + (π, e) = (3 + π, 2 + e). Correct.
- Worked example (a), with A = (0 2 1; 1 1 3; 2 4 8):
  - Exchanging rows 1 and 2 gives PA = (1 1 3; 0 2 1; 2 4 8).
  - Row 3 − 2·row 1 = (0, 2, 2). Row 3 − 1·row 2 = (0, 0, 1).
  - U = (1 1 3; 0 2 1; 0 0 1) and L = (1 0 0; 0 1 0; 2 1 1), with l₂₁ = 0 because row 2 already has 0 in column 1.
  - LU rows: (1,1,3), (0,2,1), (2,4,8) = PA. Correct.
  - det U = 2 ≠ 0, so A is invertible, as PA = LU with a full set of pivots requires.
- Worked example (b), with R = (1 0; 2 1; 0 3): column dot products 1 + 4 + 0 = 5, 0 + 2 + 0 = 2, 0 + 1 + 9 = 10, so RᵀR = (5 2; 2 10). Correct.
- Worked example (c):
  - v₁ + v₂ + v₃ = 0 is a plane through the origin, so it is a subspace.
  - The sum = 1 set has no zero vector, so it is not.
  - (1,2,0) + (2,−1,0) = (3,1,0). It is not a multiple of (1,2,0) (3·2 − 1·1 = 5 ≠ 0) and not a multiple of (2,−1,0) (3·(−1) − 1·2 = −5 ≠ 0), so the union is not closed under addition. All correct.
- Quiz 1 (answer 2, "A line through the origin"): correct. All three reasons in the explanation are right:
  - Nonnegative vectors fail under multiplication by −1.
  - The shifted plane has no zero vector.
  - Two lines are not closed under addition.
- Quiz 2 (answer 1, "2×2 and symmetric"): correct.
- Quiz 3 (answer 2, "120"): correct.
- Flashcards: all four are correct. C(A) ⊂ Rᵐ when A has m rows is right.
- `npm run calc:test -- -k transposes-perm`: 12 passed.
- Calcs file notes (info):
  - `rtr` checks only the sum 21 + 13 + 19 = 53, and `ex-b` only 5 + 2 + 10 = 17. Sums cannot catch two compensating errors. Separate entries per matrix entry would be stronger.
  - `ex-c` tests only one of the two lines. A second entry 3·(−1) − 1·2 = −5 would cover the other.
  - `ex-a-row3` cites the transcript p. 2 for the page's own example. It is harmless (origin: page-own), but `source` could be dropped.

## Coverage and order
- The page follows the lecture's order: PA = LU and MATLAB's pivoting (pp. 1–3), then permutations and n! (pp. 3–4), transposes (pp. 4–5), symmetric matrices and RᵀR (pp. 5–9), vector spaces, R², R³ and Rⁿ (pp. 9–13), the quarter plane (pp. 13–14), subspaces of R² and R³ (pp. 14–17), and the column space (pp. 18–21).
- Small things the page leaves out (info only):
  - The examples of permutations that cycle four rows, or exchange 1↔2 and 3↔4 (p. 3).
  - MATLAB's prime notation for the transpose (p. 4).
  - Strang's numeric symmetric example with off-diagonal 1, 7, 9 (p. 6).
  - The remark that complex vectors come much later (p. 13).
  - The names Z and L for the subspaces (p. 17).
  - The remark that the transpose of a product reverses the order "just like inverses" (p. 8). This one is mentioned only implicitly.
  - None of these is essential.
- Nothing is added beyond the original worked example and the completion of the RRᵀ/RᵀR products (see table, row 2).

## Licensing
- The OCW lecture page shows the course's CC BY-NC-SA 4.0 licence and no "courtesy" or "All rights reserved" notice. A grep of the transcript text for "rights reserved" and "courtesy" found nothing.
- No verbatim copying beyond short standard phrases ("closed", "column space", "flip across the main diagonal", "some decent rules", the latter paraphrased).
- Worked example: the matrices A = (0 2 1; 1 1 3; 2 4 8) and R = (1 0; 2 1; 0 3), and the three subsets in (c), do not appear in the lecture. I did not check them against Strang's textbook (not read), but they do not match the PA = LU examples I recall from *Introduction to Linear Algebra* §2.7. They look original (uncertain only to that extent).
- No OpenStax or LibreTexts material, and no images.

## Notes
- leadsTo Lecture 6 ("The column space and the nullspace, and what they say about Ax = b") matches the 18.06 Lecture 6 title "Column space and nullspace" and the p. 21 announcement. There is no cosmology callout, so there are no cosmology claims to check.
- The frontmatter summary is consistent with the body.
- No em dashes on the page.
- Verdict pass-with-notes: no errors. Row 1 is worth rewording so that the "slip" is attributed to the naming of the factors rather than to the numbers.

## Resolution (2026-11-16, by the page author)

- The R Rᵀ / RᵀR sentence reworded: Strang's names swap between pp. 6 and 7, not his numbers.
- The formula label now says "(completed here)".
- 24 and 120 cited to p. 4 (page and calcs).
- "Every invertible A" added next to PA = LU.
- QᵀQ = I kept as a renaming; the rtr, ex-b and ex-c calcs entries strengthened (each entry of RᵀR and of the example's RᵀR checked; both lines tested in ex-c).

Status set to reviewed.
