---
page: content/year-1/18.02/matrices.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-3-matrices/ (read via the local copy of its transcript; lecture page HTML not re-checked in this review)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/8cee7d239b4595b8afbd6d674ace575d_bHdzkFrgRcA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec03", 4 dense pages, no printed page numbers; cited page = PDF page, text per page checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read: local copy week2.pdf; PDF p. 1 is a cover, Lecture 3 on printed pp. 1–2 = PDF pp. 2–3, confirmed with pdftotext -f/-l; printed p. 1 ends after "X = A⁻¹U", printed p. 2 starts with the cofactor method)
  - content/year-4/8.286/spacetime-interval.mdx (read: 8.286 Lecture 12; states that observers related by Lorentz transformations agree on s²)
  - content/year-1/18.02/_course.json (read: Lecture 3 = Matrices, Lecture 4 = Square Systems)
  - calcs/18.02/matrices.yaml (read; `npm run calc:test -- -k matrices`: 17 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Planes through three points, and matrices

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are the printed footers (Lecture 3 = printed pp. 1–2 = PDF pp. 2–3). `reading1` = Week 2 summary, `reading2` = transcript; every `cite` uses the right key for the page it names. No "rights reserved" or "courtesy" notice in the transcript or the Week 2 summary.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Opening paragraph | The cross product and plane run over pp. 1–2; matrices run from p. 2 to the end of p. 4. | "(transcript, pp. 1–2)" for the whole lecture outline. | Write "pp. 1–4", or "pp. 1–2 and 2–4". |
| 2 | info | "The identity and a rotation", formula "Rotation by 90°" | Transcript p. 3 transcribes the matrix as "\|0,1; - 1,0\|" (the caption reads it column by column); the lecture's own check (R î = ĵ, R ĵ = −î, (x, y) → (−y, x)) and the notes p. 1 give R = [0 −1; 1 0]. | R = [0 −1; 1 0], cited to the notes (`reading1`, p. 1). | Correct, and citing the notes rather than the garbled transcript line is right. No change needed. |
| 3 | info | Cosmology callout | (Not in MIT.) The lecture itself notes (p. 2) that a change of coordinates is linear only if the two systems share an origin; otherwise there are constant terms. | "the relation between their coordinates, the Lorentz transformation, is linear". | True for Lorentz transformations proper (shared origin event) and always true for coordinate differences; with shifted origins the relation is a Poincaré transformation with constant terms. Optional: add "(taking a shared origin event)", which echoes the lecture's own caveat. Otherwise the claim and the link to `spacetime-interval` (8.286 Lecture 12, which says observers related by Lorentz transformations agree on s²) are correct and fairly attributed. |
| 4 | info | "Matrices and linear changes of coordinates" | p. 2: constant terms appear if the origins differ, "which I will not insist on". | "if the two systems share an origin the relation is linear". | Fine; the constant-term remark is implied. |
| 5 | info | "What a product means" | p. 3: the oranges, bananas, carrots analogy is the lecturer's. | Uses the same analogy unattributed. | Short phrase, not a licence problem. Optional: "as the lecture puts it". |
| 6 | info | "The inverse matrix" | Notes p. 1 write the system as AX = U, X = A⁻¹U; transcript p. 3 as AX = B, X = A⁻¹B. | AX = B, cited to the transcript. | Consistent with the cited source. No change. |

Every formula and prose page reference was checked against its cited location:
- "Order matters, and A × A = 0" (`reading1`, Lecture 3, p. 1): notes p. 1 "A × B = −B × A, A × A = 0"; transcript p. 1 the same, with the i-component a₂b₃ − a₃b₂ and the flat parallelogram. Correct.
- "The plane as a flat box" (`reading2`, p. 1): transcript p. 1, det(P₁P, P₁P₂, P₁P₃) = 0, "squished" parallelepiped. Correct; also notes p. 1.
- "The plane through its normal vector" (`reading2`, p. 1): transcript p. 1, P₁P · N = 0, N = P₁P₂ × P₁P₃, other order gives the opposite vector, infinitely many normals. Correct.
- Triple product = determinant, equal for every P, zero only in the plane: transcript p. 2 (including the student question). Correct.
- Linear changes of coordinates and the made-up 3 × 3 example: transcript p. 2. Formula "A linear relation as a matrix product" (`reading1`, Lecture 3, p. 1): notes p. 1 show exactly this matrix equation, AX = U. Correct. Rows-dot-column, 3 × 3 and 3 × 1 sizes: p. 2. Correct.
- 3 × 4 times 4 × 2 gives 3 × 2, entry 14, the "A to the left, B above" layout, size as tall as A and as wide as B: p. 2. Correct. "When AB makes sense" (`reading2`, p. 2): "the width of A must equal the height of B", p. 2. Correct.
- "Composing transformations" (`reading2`, p. 3): (AB)X = A(BX), f(g(x)), associativity, not for the cross product, AB ≠ BA, sizes may not match: p. 3. Correct (p. 2 ends just before this point).
- Identity (zero matrix contrast, 1s on the diagonal, first row î, n × n): p. 3; notes p. 1 show I₃ₓ₃. Correct.
- Rotation, columns are the images of î and ĵ, R² = −I, R⁴ = I: p. 3; notes p. 1 "Rî = ĵ, Rĵ = −î, R² = −I". Correct.
- "The inverse matrix" (`reading2`, p. 3): AM = MA = I, square only: p. 3; notes p. 1. Correct.
- "Solving a linear system" (`reading2`, pp. 3–4): stated at the end of p. 3, derived (A⁻¹AX = A⁻¹B) at the top of p. 4. Correct. XA undefined, A⁻¹ on the left: p. 4. Correct.
- "Inverse by cofactors" (`reading2`, p. 4): adjoint divided by det A, small matrices only, software uses other methods: p. 4; notes p. 2 "A⁻¹ = (1/det A) adj(A)". Correct.
- Steps minors (top-left 4·2 − 5 = 3), checkerboard cofactors (linked to the cross product's middle minus), transpose: p. 4; notes p. 2. Correct.
- "The lecture's inverse" (`reading1`, Lecture 3, p. 2): notes printed p. 2, A⁻¹ = (1/3)[3 −3 3; 1 1 −4; −2 1 2]. Correct. "It gives the old coordinates from the new ones": p. 4. Correct.

## Arithmetic and answer checks
- Lecture's product entry: 1·0 + 2·3 + 3·0 + 4·2 = 14. Correct.
- Lecture's A = [2 3 3; 2 4 5; 1 1 2]: minors (recomputed) [3 −1 −2; 3 1 −1; 3 4 2], matching notes p. 2; cofactors [3 1 −2; −3 1 1; 3 −4 2]; adjoint [3 −3 3; 1 1 −4; −2 1 2]; det A = 2·3 − 3·(−1) + 3·(−2) = 3. A·adj(A) = 3I checked for all nine entries. Correct.
- R² = [0 −1; 1 0]² = [−1 0; 0 −1] = −I; R⁴ = I. Correct.
- Worked example (a): P₁P₂ = ⟨−1, 2, 0⟩, P₁P₃ = ⟨−1, 0, 3⟩, cross product ⟨6, 3, 2⟩ (each component as written on the page, including the −(…) on the middle one); 6(x − 1) + 3y + 2z = 0 gives 6x + 3y + 2z = 6; P₂ and P₃ both give 6 (and it is the intercept form x/1 + y/2 + z/3 = 1 times 6). Correct.
- Worked example (b): M = [1 2 0; 0 1 1; 1 0 1]; minors [1 −1 −1; 2 1 −2; 2 1 1], cofactors [1 1 −1; −2 1 2; 2 −1 1], adjoint [1 −2 2; 1 1 −1; −1 2 1], all recomputed and correct; det M = 3; M·adj(M) = 3I checked for all nine entries; X = row sums of adj(M) = ⟨1, 1, 2⟩; M⟨1, 1, 2⟩ = ⟨3, 3, 3⟩. Correct. Example is original (own points and matrix).
- Quiz 1 (index 1, −A × B): correct; explanation right. Quiz 2 (index 0, AB of size 2 × 4): correct; "BA would need 4 = 2" right. Quiz 3 (index 1, B then A): correct. Quiz 4 (index 1, A⁻¹B): correct.
- Flashcards: all three correct.
- calcs/18.02/matrices.yaml: 17 entries, all pass, values agree with the page. Info: the `shown` anchors of `inverse-a-row3-col3` ("It gives the old coordinates") and `inverse-a-offdiag` ("divided by the determinant") point at prose rather than at the number they check; optional to anchor them on the inverse matrix itself. The minors of M and the other lecture minors have no entries (they are covered indirectly by the M·adj(M) and A·adj(A) checks; optional).

## Coverage and order
- MIT order (transcript): recap of the cross product (p. 1) → B × A = −A × B, A × A = 0 (p. 1) → plane through three points: determinant, then normal vector (p. 1) → why the two agree, student question (p. 2) → matrices: linear changes of coordinates, the 3 × 3 example, rows times column (p. 2) → general product, entry 14, layout, width = height (p. 2) → meaning of AB, associativity, AB ≠ BA (p. 3) → identity (p. 3) → rotation by 90°, R² = −I (p. 3) → inverse, AX = B (pp. 3–4) → cofactor method on the lecture's A (p. 4). The page follows this order exactly.
- Left out (minor): the opening recap of the cross-product definition (covered on the previous page); the student question on how R was found (writing u = 0x − 1y, v = 1x + 0y, p. 3); IA = A for a matrix (p. 3); the remark that inverting by hand will be on the exam (p. 4).
- Added: worked example, cosmology callout. Nothing else beyond the lecture.
- leadsTo: 18.02 Lecture 4 "Square Systems": notes Lecture 4 cover equations of planes and 3 × 3 systems with X = A⁻¹B. Correct. 8.286 Lecture 12: `spacetime-interval` is a Lecture 12 page and discusses Lorentz transformations and invariance. Correct.

## Licensing
- No paragraph copied from the transcript or the notes; prose is rewritten. Phrases such as "a table of numbers", "width of A = height of B" and the oranges/bananas/carrots analogy are short (see #5).
- The 3 × 3 example matrix, its inverse, and the 14 entry are quoted as MIT's and cited; the worked example uses its own numbers.
- No "All rights reserved" or "Courtesy of" material in either source; the lecture's colour picture of the normal vector is not reproduced. No OpenStax or LibreTexts material.

## Notes
- The cofactor-step wording ("the same minus as on the middle term of a cross product") matches the lecturer's remark on p. 4.
- Verdict pass-with-notes: no errors found; all findings are info level.

## Resolution (2026-11-16, by the page author)

- Info 1: the opening now cites transcript pp. 1–4.
- Info 3: the callout now says the Lorentz transformation is linear when both observers take the same event as origin.
- Info 5: the oranges, bananas and carrots analogy is now credited to the lecture.
- Info 2, 4 and 6 need no change; the other calcs anchors are left as they are (they pass and point to the right section).
