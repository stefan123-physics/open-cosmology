---
page: content/year-2/18.06/orthogonal-matrices-gram-schmidt.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-17-orthogonal-matrices-and-gram-schmidt/ (not opened directly; the transcript linked from it was read)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e87f2914b2eb2f53e38688040c04b9b1_0MtwqhIwdrI.pdf (read: 24-page PDF, header "ocw-18.06-f99-lec17_300k", extracted per page; PDF page = cited page)
verdict: pass-with-notes
---

# Review: Orthogonal matrices and Gram–Schmidt

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Examples paragraph after the "Four by four" formula | p. 6: "we know how to do it for two, four, sixteen, sixty-four and so on" (Strang's list skips 8 and 32). | "The construction works for sizes 2, 4, 16, 64, …" | The block-doubling construction shown on the page gives every power of 2 (2, 4, 8, 16, 32, …). Repeating Strang's list suggests that 8 is not covered. Write "2, 4, 8, 16, … (every power of 2)" and, if you like, add a short bracket saying that the lecture lists 2, 4, 16, 64. |
| 2 | warning | "Four by four" formula, cited p. 6 | p. 6 describes the matrix only in words: "take that matrix up in the corner and I'll sort of repeat that pattern, repeat it again, and then minus it down here", then divide by 2. No entries are read out. | Gives an explicit $4\times4$ matrix with no note that the entries are a reconstruction. | The matrix $\frac12\begin{pmatrix}H & H\\ H & -H\end{pmatrix}$ with $H = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$ matches the description and is correct (checked: $Q^TQ = I$). Add a short note such as "(entries written out here from Strang's spoken description)". |
| 3 | warning | Worked example, step (b) | (not from MIT) | The problem asks for "$(2, 0, 0)$", and step (b) then writes $q_1^Tb = \sqrt2$, etc. | In part (a) $b = (1, 1, 0)$, and $q_1^T(1,1,0) = 1/\sqrt2$, not $\sqrt2$. The numbers are right for $(2,0,0)$, but the letter clashes. Give the new vector its own name (for example $v = (2,0,0)$) and write $q_i^Tv$. |
| 4 | info | Examples paragraph, "there is none of size 5" | p. 6: "there couldn't be a five by five I think" (hedged). | States it as a fact. | The fact is true (and the page's own bracket gives the general rule), so no change is needed. You could attach the "none of size 5" to the "Not from the lecture" bracket, or keep Strang's "I think". |
| 5 | info | Examples paragraph, third column $(2,-2,1)/3$ | p. 8: Strang puts 1, 2, 2 into a third column and "fix[es] up the signs" ("maybe I'd make a minus sign there"); the final entries are not read out. | "Strang then finds a third column from the entries 1, 2, 2 with suitable signs, for instance $(2, -2, 1)/3$." | Correct: up to an overall sign this is the only unit vector orthogonal to both columns (cross product $(1,2,2)\times(-2,-1,2) = (6,-6,3)$). "for instance" marks it as the page's choice. It could be stated more clearly, for example "(the transcript does not give the entries; one choice that works is …)". |
| 6 | info | Orthonormal vectors section, "Strang would prefer 'orthonormal matrix'" cited p. 4 | The preference is stated on p. 3 and the convention ("only … when it's square") on p. 4. | Cited p. 4. | Optionally cite pp. 3–4. |
| 7 | info | "Two by two" formula | p. 5: Strang says the $\pm1$ matrix over $\sqrt2$ is the rotation with $\theta = \pi/4$, "or maybe minus pi over four or something". | Calls only the first matrix "rotation-type" and does not repeat the $\pi/4$ remark. | Good: $\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ has determinant $-1$, so it is a reflection, not a rotation. Leaving out the slip is right; a short bracket saying it is a reflection (not a rotation, as said in the lecture) would be in line with writing rule 4, but it is optional. |
| 8 | info | Permutation example | p. 4: entries read out as "zero, zero, one, one, zero, zero, zero, one, zero". | Columns $(0,1,0)$, $(0,0,1)$, $(1,0,0)$. | This matches reading the spoken entries row by row. The other reading (column by column) gives the transpose, which is also a permutation, so the claim is correct either way. |

All formula citations were checked against the per-page text:
- Orthonormal vectors, p. 1 (the $q_i^Tq_j$ definition and the "normalized" wording). Correct.
- $Q^TQ = I$, pp. 2–3 (the rows-times-columns argument starts on p. 2, "the identity matrix" is on p. 3). Correct. The rectangular case ("might have just two columns") is on p. 3. Correct.
- $Q^T = Q^{-1}$ for square $Q$, p. 4. Correct.
- Two by two, p. 5 (cos/sin columns with a minus sign; $(1,1;1,-1)$ divided by $\sqrt2$). Correct.
- Four by four, p. 6. Correct page (see row 2 about the entries).
- $P = Q(Q^TQ)^{-1}Q^T = QQ^T$, p. 9. Correct. "$I$ if Q is square", p. 10; symmetric and $(QQ^T)^2 = QQ^T$, pp. 10–11. Correct.
- Normal equations with $Q$, $\hat x_i = q_i^Tb$, p. 11. Correct; "just a dot product" is at the top of p. 12, and the page cites pp. 11–12 for that sentence. Correct.
- Goal not triangular, p. 12; $q = A/\|A\|$ and Schmidt's "contribution", p. 13; error vector $e$, pp. 14–15. Correct.
- $B = b - \frac{A^Tb}{A^TA}A$ (p. 15) and the check $A^TB = 0$ (p. 16), cited pp. 15–16. Correct. "Will not be zero because independent", p. 15. Correct.
- $C = c - \frac{A^Tc}{A^TA}A - \frac{B^Tc}{B^TB}B$, cited pp. 17–18: set up on p. 17, the formula itself on p. 18. Correct. $q_3 = C/\|C\|$, p. 18. Correct.
- Example: vectors on p. 19, $A^Tb = A^TA = 3$ on p. 19, $B = (0,-1,1)$ and its check on p. 20, division by $\sqrt3$, $\sqrt2$ and the matrix $Q$ on p. 21. Correct. Same column space, pp. 21–22. Correct.
- $A = LU$ / $A = QR$, p. 22. Correct. $R$ entries $a_1^Tq_1$, $a_2^Tq_1$, $a_1^Tq_2 = 0$, $a_2^Tq_2$, p. 23; the reason (later $q$'s perpendicular to earlier vectors), p. 24. Cited pp. 23–24. Correct. The page's $R$ layout puts $a_1^Tq_2$ below the diagonal and $a_2^Tq_1$ above it, which is what Strang means once he corrects himself on p. 23 ("a1 transpose q2, sorry a2 transpose q1").

## Arithmetic and answer checks
- $(1,2,2)\cdot(-2,-1,2) = -2 - 2 + 4 = 0$; $|(1,2,2)|^2 = |(-2,-1,2)|^2 = 9$. Correct.
- Inferred third column $(2,-2,1)/3$: dot products with $(1,2,2)$ and $(-2,-1,2)$ are $2-4+2 = 0$ and $-4+2+2 = 0$, length 3. With all three columns $Q^TQ = I$ (checked numerically). Correct.
- $4\times4$ matrix: all six column pairs are orthogonal and every column has length 2 before dividing by 2; $Q^TQ = I$ (checked numerically). Correct.
- Lecture example: $A^Tb = 1+0+2 = 3$, $A^TA = 3$, $B = (0,-1,1)$, $A^TB = 0$. Lengths $\sqrt3$, $\sqrt2$. Correct.
- Completed $R$: $a_1^Tq_1 = 3/\sqrt3 = \sqrt3$, $a_2^Tq_1 = 3/\sqrt3 = \sqrt3$, $a_2^Tq_2 = 2/\sqrt2 = \sqrt2$, $a_1^Tq_2 = 0$. Check: $\sqrt3\,q_1 + \sqrt2\,q_2 = (1,1,1) + (0,-1,1) = (1,0,2)$. Correct (NumPy's QR gives the same $R$ up to the sign convention). It is marked "(completed here; Strang only sketches its entries)", which fits p. 23 ("three over three and one over square root of three … something there, but actually it's got a zero there").
- Worked example (a): $A^Tb/A^TA = 1/2$, $B = (1/2, 1, -1/2)$; $A^Tc/A^TA = 1/2$; $B^Tc = 1/2$, $B^TB = 3/2$, ratio $1/3$; $C = (0,1,1) - (1/2,0,1/2) - (1/6,1/3,-1/6) = (-2/3, 2/3, 2/3)$. $A^TC = 0$, $B^TC = -1/3 + 2/3 - 1/3 = 0$. $q_1 = (1,0,1)/\sqrt2$, $q_2 = (1,2,-1)/\sqrt6$ (since $|B| = \sqrt6/2$), $q_3 = (-1,1,1)/\sqrt3$. All correct.
- Worked example (b), for $v = (2,0,0)$: $q_1^Tv = 2/\sqrt2 = \sqrt2$, $q_2^Tv = 2/\sqrt6$, $q_3^Tv = -2/\sqrt3$. Sum $(1,0,1) + \frac13(1,2,-1) + \frac23(1,-1,-1) = (2,0,0)$. Correct (only the letter is a problem, see row 3).
- Quiz 1: answer $Q^T$ (index 2). Correct; the explanation is right.
- Quiz 2: answer $\hat x = Q^Tb$ (index 0). Correct; the explanation is right.
- Quiz 3: answer index 3 (later $q$ perpendicular to earlier columns, so $q_i^Ta_j = 0$ for $i > j$). Correct; the explanation is right. The distractors are clearly wrong ($A$ need not be square; $R$ is triangular by construction, not by convention).
- Flashcards: all three are correct and match the lecture.
- Frontmatter summary: every number in it (B, q₁, q₂, the examples) agrees with the body.
- `npm run calc:test -- -k orthogonal-matrices`: 8 passed. The calcs file covers the rectangular example, the inferred third column (marked `origin: page-own`), one column pair of the $4\times4$ matrix, $B$, $R_{22}$, and the worked example. Optional: add $R_{11} = R_{12} = \sqrt3$ and a full $Q^TQ = I$ check for the $4\times4$ matrix (only columns 2 and 4 are checked now).

## Coverage and order
- The page follows the lecture's order: orthonormal vectors (p. 1), $Q^TQ = I$ (pp. 2–3), the name "orthogonal matrix" (pp. 3–4), examples (pp. 4–8), projection and normal equations (pp. 8–12), Gram–Schmidt for two and three vectors (pp. 12–18), the numerical example (pp. 19–22), $A = QR$ (pp. 22–24).
- Left out (minor): Strang's remark on p. 8 that square roots are "the punishing thing" in Gram–Schmidt (dividing by lengths always brings them in, which is why the 1, 2, 2 examples are nice); the "please look in the book" pointer for the triangular $R$ (p. 24). Neither is needed.
- Added: the general rule for Hadamard sizes (marked "Not from the lecture"), the completed $R$ (marked), the explicit $4\times4$ entries (not marked, see row 2) and the worked example (original, see Licensing).
- `leadsTo`: 18.06 Lecture 18 "Properties of determinants" matches the course syllabus and MIT's lecture order. There is no cosmology callout; for this lecture none is required, and the page makes no cosmology claims.

## Licensing
- The transcript text contains no "rights reserved" or "courtesy" notice (searched; 0 matches). The page uses no figures.
- No long verbatim passages. Two short phrases stay close to the transcript: "gives the best possible answer" (p. 3) and "perhaps the most important formula in some major parts of mathematics" (p. 11, "probably the most important formula in some major parts of mathematics"). Both are short and clearly attributed as Strang's view in context; consider rewording the second or marking it as Strang's words.
- Worked example: the vectors $(1,0,1)$, $(1,1,0)$, $(0,1,1)$ are not from this lecture (Strang uses $(1,1,1)$ and $(1,0,2)$), and the expansion of $(2,0,0)$ in part (b) is the page's own. This triple is a common choice in many linear algebra books' exercises; I could not check whether it appears in Strang's textbook, so whether it is fully original is uncertain. Since it is a generic exercise worked in the page's own words, this is not a licence problem.
- Lecturer/transcript slips are handled: "Adhemar" is noted as the transcript's spelling of Hadamard, and "Graham" as its spelling of Gram. The page spells both names correctly everywhere else.

## Notes
- The later fact "the size must be 1, 2 or a multiple of 4, and whether every multiple of 4 is possible is still an open question" is correct (the Hadamard conjecture is still open; 668 is the smallest order not settled) and clearly marked as not from the lecture. It is not a post-2013 development, so no date is needed.
- The opening sentence "The last lecture of the orthogonality chapter" matches p. 1.
- No numbers on the page need `calcs/values.yaml` (no cosmological constants).

## Resolution (2026-11-16, by the page author)

1. Hadamard sizes: the page now says Strang lists 2, 4, 16, 64 and that the construction gives every power of 2; "none of size 5" is attributed to Strang ("he thinks").
2. The 4 × 4 matrix is marked as written out from Strang's spoken description.
3. Worked example: the vector in (b) is now v; c changed to (1, 2, 3) so the triple is less of a stock exercise (C = (−4/3, 4/3, 4/3), same q₃); calcs updated.
4. Citation pp. 3–4 for the "orthonormal matrix" remark; a phrase close to the transcript reworded.
5. Other info items left as they are.

Status set to reviewed.
