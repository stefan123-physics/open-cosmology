---
page: content/year-2/18.06/eigenvalues-and-eigenvectors.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-21-eigenvalues-and-eigenvectors/ (read: its only PDF link is the transcript cited as reading1; licence CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/8d0f7baefcedee6596eaab43c55122fe_cdZnhQjJu4I.pdf (read: all 26 pages, each page extracted separately with pdftotext -f N -l N; the text layer interleaves a few stray sentence fragments across pages, noted below where it matters)
verdict: pass-with-notes
---

# Review: Eigenvalues and eigenvectors

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "A symmetric example", product of the eigenvalues "(pp. 10, 13, 20)" | The only coherent statement that the determinant is the product of the eigenvalues is on p. 20 ("did I tell you about the determinant being the product of the eigenvalues? No. But that's a good thing to know"), with a start on p. 16 ("Now the other neat fact is that the determinant, ..."). The p. 10 ("Their product was eight.") and p. 13 ("it had to be eight, because we factored into ...") bits are stray fragments of the PDF's text layer, not a statement in their surrounding sentences. | Cites pp. 10, 13, 20. | Cite "(pp. 16, 20)" or just "(p. 20)", which the `<Formula>` already uses. Uncertain which page the fragments belong to in the spoken lecture. |
| 2 | info | "A symmetric example", last paragraph (perpendicular eigenvectors, pp. 11–12) | Strang points out real eigenvalues and perpendicular eigenvectors of the permutation *before* computing $\det(A-\lambda I)$ for the (3 1; 1 3) example (p. 12: "That'll happen here too"). | Says it after the eigenvectors are found. | Fine as is, citations are right; optionally say "as Strang predicted before computing them". |
| 3 | info | "A rotation: complex eigenvalues", last sentence | p. 23: matrices symmetric "or, like, close to symmetric" keep real eigenvalues; in-between matrices have a symmetric and an antisymmetric part. Strang says nothing more about their eigenvalues. | "matrices in between, partly symmetric and partly antisymmetric, fall in between" | Say what Strang says: close-to-symmetric matrices still have real eigenvalues; the in-between cases are mixtures of a symmetric and an antisymmetric part. "Fall in between" is vague. |
| 4 | info | "A repeated eigenvalue", "$A - 3I$ has a single nonzero entry, $1$, in the corner (p. 25)" | Transcript p. 25 says only that $A - 3I$ is singular and its nullspace holds (1, 0); the matrix is not described. | Describes the matrix. | Correct maths; no change needed (the description is the page's own, not a claim about the transcript). |
| 5 | info | Flashcard 1 back, "$A$ only stretches it (or flips it) by the factor $\lambda$" | p. 2: λ may be negative, zero or imaginary. | "stretches it (or flips it)" | Optional: "multiplies it by the number λ (which may be 0, negative or complex)". |
| 6 | info | Summary bullet 5, "Symmetric matrices have real eigenvalues and perpendicular eigenvectors" | Strang says this for his examples and announces it as a general fact (pp. 11–12), not proved here. | Stated as a general rule. | Fine for this lecture; optionally "(shown later in the course)". With repeated eigenvalues the eigenvectors *can be chosen* perpendicular; not worth more detail here. |

No error-level differences were found. Every `<Formula>` was checked against the per-page transcript text:
- $Ax = \lambda x$, p. 2: correct.
- Swap permutation (0 1; 1 0), p. 6: correct ("A equals zero one one zero", p. 6).
- Sum of eigenvalues = $a_{11} + \cdots + a_{nn}$, p. 8: correct (Strang writes it out on p. 8).
- $(A - \lambda I)x = 0$, p. 9: correct.
- $\det(A - \lambda I) = 0$, "characteristic equation or the eigenvalue equation", p. 10: correct.
- (3 1; 1 3), p. 11: correct.
- $(3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8$, p. 13: correct ("lambda squared minus six lambda plus ... eight", p. 13).
- $\lambda^2 - (\text{trace})\lambda + \det A = 0$, p. 14: correct.
- Product = det, p. 20: correct (see #1 for the in-text page list).
- $(A + 3I)x = (\lambda + 3)x$, p. 17: correct ("this has eigenvalue lambda plus three ... same x", p. 17).
- $Q$ = 90° rotation, p. 20: correct; Strang reads the entries as cos, sin, −sin, cos, giving (0 −1; 1 0).
- $\lambda^2 + 1 = 0$, $\pm i$, p. 22: correct.
- (3 1; 0 3), $(3-\lambda)^2$, pp. 24–25: correct.

Other claims checked against the transcript: first of many eigenvalue lectures, matrices square (p. 1); function analogy (p. 1); λ may be negative, zero or imaginary (p. 2); λ = 0 ⇔ nullspace / singular (pp. 2–3); two unknowns multiplied, no elimination (p. 3); projection: b not an eigenvector, plane gives λ = 1, perpendicular gives λ = 0, no need for $A(A^TA)^{-1}A^T$ (pp. 3–5); permutation eigenvectors (1, 1) and (−1, 1), "not negative matrix" with a negative eigenvalue (pp. 6–7); n eigenvalues, degree-n equation (p. 8); trace gives the other eigenvalue in 2 × 2 (p. 8); "A repeated lambda is the source of all trouble in 18.06" (p. 10, quoted correctly); free variable set to 1 (p. 11); λ not subtracted from every entry (p. 13); 6 = trace, 8 = det (pp. 13–14); A − 4I singular "if that matrix isn't singular, the four wasn't correct" (p. 15); whole line of eigenvectors, choose a reasonable basis vector (p. 16); A = permutation + 3I, eigenvalues +3, eigenvectors unchanged (pp. 16–17); A + B argument wrong, A·B too, "eigenvalues are not, like, linear" (pp. 18–19); Q for orthogonal (p. 20); trace 0 vs det 1 clash (pp. 20–21); complex numbers enter 18.06 here, conjugate pair (pp. 22–23); $Q^T = -Q$, pure imaginary eigenvalues (p. 23); triangular eigenvalues on the diagonal (pp. 24–25); nullspace (1, 0), no second independent eigenvector, "degenerate", "the complete story" on Monday (pp. 25–26). All page citations agree with the printed transcript pages.

No lecturer slips needed correcting.

## Arithmetic and answer checks
- `npm run calc:test -- -k eigenvalues-and-eigenvectors`: 13 passed. Every entry matches the text it claims to cover.
- Lecture example: $(3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda-4)(\lambda-2)$; $A - 4I = (-1\ 1; 1\ -1)$ kills (1, 1); $A - 2I$ = all ones kills (−1, 1). Correct.
- Worked example (a): trace 7, det $10 - 4 = 6$, $(\lambda-6)(\lambda-1)$; $A - 6I = (-1\ 2; 2\ -4)$, $(2,1)$: $-2 + 2 = 0$; $A(2,1) = (12, 6)$; $A - I = (4\ 2; 2\ 1)$, $(1,-2)$: $4 - 4 = 0$; $A(1,-2) = (5-4, 2-4) = (1,-2)$; dot product 0. All correct.
- Worked example (b): eigenvalues 1, 3; trace 4, det 3; $B - I = (0\ 4; 0\ 2)$ gives (1, 0); $B - 3I = (-2\ 4; 0\ 0)$ gives (2, 1); $B(2,1) = (6, 3)$; $x_1\cdot x_2 = 2$. All correct. (Trace 4 / det 3 of B are not in the calcs file; trivial, optional to add.)
- Quiz 1: answer 2 ("1 (twice) and 0") correct for a plane in ℝ³.
- Quiz 2: $\lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$, answer 0 correct. (Not in the calcs file; optional to add.)
- Quiz 3: $(A+3I)x = 7x$, answer 1 correct.
- Quiz 4: answer 1 correct; distractors false ($\det Q = 1$, $Q$ antisymmetric, trace 0).
- Flashcards: all four correct (see #5 for a wording nuance).

## Coverage and order
- The page follows Strang's order: definition and λ = 0 (pp. 1–3), projection (pp. 3–5), permutation (pp. 6–7), trace (p. 8), characteristic equation (pp. 9–11), (3 1; 1 3) example with real eigenvalues/perpendicular eigenvectors, trace/det (pp. 11–16), adding 3I and the A + B / AB caution (pp. 16–19), rotation and complex eigenvalues (pp. 20–23), triangular matrix with a shortage of eigenvectors (pp. 24–26).
- Nothing of substance left out. Small omissions (not needed): the quadratic formula remark "b² − 4ac" (p. 14).
- Additions: the worked example (own numbers), and the explicit form of $A - 3I$ (#4).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched all pages). The OCW lecture page shows CC BY-NC-SA 4.0.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases, attributed ("a repeated lambda is the source of all trouble in 18.06", "the complete story") and standard terms.
- Worked example: matrices (5 2; 2 2) and (1 4; 0 3) are not used in the lecture (which uses (0 1; 1 0), (3 1; 1 3), Q and (3 1; 0 3)). Whether they coincide with an example in Strang's textbook (Introduction to Linear Algebra, Chapter 6) was **not verified** (book not read); the example is a generic check of trace, determinant and orthogonality, so a close copy is unlikely.

## Notes
- `leadsTo` 18.06 Lecture 22 ("Diagonalization and powers of A" in `_course.json`): the reason given (n independent eigenvectors → diagonalise, powers easy) is correct for that lecture and fits Strang's closing remark (p. 26).
- No `Callout kind="cosmology"`; no cosmology claims to check.
- "Determinants, from the last three lectures": Lectures 18–20 are the determinant lectures in the syllabus; correct.
- No em dashes on the page.
- Source URL and transcript URL match the OCW lecture page and the `_course.json` syllabus entry.

## Resolution (2026-11-16, by the page author)

1. The product-equals-determinant statement now cites pp. 16, 20.
2. The symmetric-example paragraph now says Strang points out real eigenvalues and perpendicular eigenvectors before computing, and that he announces (not proves) the rule.
3. The in-between sentence for the rotation now says what Strang says: close-to-symmetric matrices keep real eigenvalues; in-between ones have a symmetric and an antisymmetric part.
4. No change (the description of A − 3I is correct maths, the page's own wording).
5. Flashcard 1 now says A multiplies x by λ, which may be 0, negative or complex.
6. Summary bullet 5 now says "(announced here, shown later)".

Calcs: added the quiz's λ² − 7λ + 10 factorisation and the trace and determinant of B in part (b).

Status set to reviewed.
