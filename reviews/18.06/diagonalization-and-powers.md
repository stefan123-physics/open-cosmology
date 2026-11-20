---
page: content/year-2/18.06/diagonalization-and-powers.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-22-diagonalization-and-powers-of-a/ (lecture page not fetched separately; URL matches the syllabus entry for Lecture 22 in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e6dfacf484d184018188a4e70f93db81_13r9QY6cmjc.pdf (read: all 25 pages, text extracted per page with pdftotext -f N -l N; the PDF has no printed page numbers, so PDF page = transcript page)
verdict: pass-with-notes
---

# Review: Diagonalisation and powers of A

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Which matrices can be diagonalised", "When they differ, $A$ cannot be diagonalised" (and flashcard 3) | Strang shows only that the example $(2\ 1;\ 0\ 2)$ is not diagonalisable because its null space is one-dimensional (p. 12); he does not state the general criterion. | States the general rule (algebraic ≠ geometric multiplicity ⇒ not diagonalisable; flashcard: diagonalisable iff they agree for every eigenvalue). | The rule is correct. Optionally mark it as the general statement behind Strang's example ("in general, ..."), so it is not read as a quote from p. 12. |
| 2 | info | "Which matrices can be diagonalised", "The stability rule above was not proved for such matrices (p. 13)" | p. 13: the reasoning for $A^k \to 0$ did not cover repeated eigenvalues without enough eigenvectors. | Same. | Accurate. Optionally add that the rule $\lvert\lambda_i\rvert < 1 \Rightarrow A^k \to 0$ is still true for such matrices (proved later with the Jordan form), so readers do not think it fails. |
| 3 | info | "Difference equations", "Next lecture the same idea solves differential equations (p. 14)" | p. 14: "The next section is going to solve systems of differential equations"; p. 25: "next time will be differential equations". | Cites p. 14 only. | Optionally cite "pp. 14, 25". |
| 4 | info | "Fibonacci numbers", symmetric matrix (p. 19) | p. 19 also says the eigenvectors of a symmetric matrix will be orthogonal. | Mentions only real eigenvalues. | Optional: add "and orthogonal eigenvectors" (true here: $\lambda_1\lambda_2 + 1 = 0$). |
| 5 | info | "Which matrices can be diagonalised", MATLAB command | Strang says "eig of rand of ten ten" (p. 9), i.e. `eig(rand(10,10))`. | `eig(rand(10))`. | Equivalent in MATLAB (rand(10) is 10 × 10). No change needed. |

No error-level differences were found. Every formula and its citation was checked against the transcript:
- $AS = S\Lambda$, pp. 2–3: column-by-column product on p. 2, factoring out the diagonal matrix and naming it capital lambda on p. 3. Correct.
- $S^{-1}AS = \Lambda$ and $A = S\Lambda S^{-1}$, pp. 4–5: left multiplication on p. 4, right multiplication and "the new factorization ... replacement for LU ... QR" on p. 5. Correct.
- $A^2 = S\Lambda S^{-1}S\Lambda S^{-1} = S\Lambda^2S^{-1}$, p. 6. Correct.
- $A^k = S\Lambda^kS^{-1}$, p. 7. Correct.
- $A^k \to 0$ if all $\lvert\lambda_i\rvert < 1$, p. 8 (stated as a theorem, with the absolute value explained, on p. 8; the word "stable" on p. 7, which the page's "pp. 7–8" covers). Correct.
- $(2\ 1;\ 0\ 2)$, $\det(A - \lambda I) = (2-\lambda)^2$, $\lambda = 2, 2$, pp. 11–12. Correct. (The transcript garbles the matrix as "two one two zero" on p. 11, but the determinant it writes, "two minus lambda one zero two minus lambda", confirms $(2\ 1;\ 0\ 2)$; the page is right.)
- $u_{k+1} = Au_k$, $u_k = A^ku_0$, pp. 13–14. Correct.
- Eigenvector expansion of $A^ku_0$, pp. 14–15 ("its own merry way", p. 15). Correct.
- Fibonacci system with $u_k = (F_{k+1}, F_k)$ and $A = (1\ 1;\ 1\ 0)$, p. 18. Correct.
- $\lambda^2 - \lambda - 1 = 0$, $\lambda = (1 \pm \sqrt5)/2 \approx 1.618, -0.618$, pp. 20–21. Correct.

Other claims checked against their cited pages (all agree): "A multiplies its eigenvectors" (p. 4); few matrices lack $n$ independent eigenvectors (p. 4); pivots useless for $A^{100}$, a hundred $LU$s (p. 7); assumption of $n$ independent eigenvectors (p. 8); distinct eigenvalues give independent eigenvectors, proof in the text, random matrix (p. 9); repeated eigenvalue "may or may not" (p. 10); identity, every vector an eigenvector, $S^{-1}IS = I$ (pp. 10–11); null space of $A - 2I$ is the line through $(1, 0)$, $(0, 1)$ not in it, algebraic and geometric multiplicity (p. 12); distinct eigenvalues give multiplicity one both ways (p. 13); first-order system definition (p. 14); $u_0 = Sc$, $A^{100}u_0 = S\Lambda^{100}c$ (pp. 15–16); Fibonacci start $F_0 = 0$, $F_1 = 1$ (p. 16), "how fast" and $F_{100}$ (p. 17); adding $F_{k+1} = F_{k+1}$ (p. 18); symmetric, real eigenvalues (p. 19); trace 1, determinant −1, characteristic equation mirrors the recursion (p. 20); distinct, diagonalisable, $F_{100} \approx c_1\lambda_1^{100}$, growth factor (p. 22); $(-0.6)^{100}$ "practically nothing" (p. 23); eigenvector $(\lambda, 1)$ from $-\lambda^2 + \lambda + 1 = 0$ (pp. 23–24); $u_0 = (F_1, F_0) = (1, 0)$ and no time left for $c_1, c_2$ (p. 24); closing idea (pp. 24–25).

No lecturer slips needed correcting.

## Arithmetic and answer checks
- `npm run calc:test -- -k diagonalization`: **could not be confirmed.** The first run reported 16 failed (all 16 entries, failure messages not shown in the tail of the output); a few minutes later both the page and `calcs/18.06/diagonalization-and-powers.yaml` were no longer in the working tree (git status showed neither file), and reruns selected 0 tests. The failures most likely came from the files being moved during the run, but this is uncertain. The page author should rerun the test once the files are back.
- Every entry of the calcs file (as read at the start of the review) was recomputed by hand or with Python: all expected values are right. Fibonacci: $\lambda_1 = 1.6180340$, $\lambda_2 = -0.6180340$, sum 1, product −1, $1/(\lambda_1 - \lambda_2) = 1/\sqrt5 = 0.4472136$; $(\lambda_1^{100} - \lambda_2^{100})/\sqrt5 = 3.5422\times10^{20}$, and the exact $F_{100} = 354\,224\,848\,179\,261\,915\,075$ (iterated in Python), so "$\approx 3.54 \times 10^{20}$" is right; $\lambda_2^{100} = 1.26\times10^{-21}$.
- calcs file, minor (info): `ex-u1-second` checks only the formula side ($2\cdot5 - 2\cdot2$), not $Au_0 = 2\cdot3 + 3\cdot0$; `ex-u2-first` and `ex-u2-second` check only the direct side ($A(12, 6)$), and only the first component of the formula side is checked (`ex-u2-formula`); `ex-u1-first` is written as $(12) - (12) + 12$, which only tests that the two sides agree, in a roundabout way. The page-own example entries cite `reading1` at pp. 14, 15, 20, which the example does not come from (origin is correctly `page-own`). Suggest adding $2\cdot5^2 - 2\cdot2^2 = 42$ and $2\cdot3 + 3\cdot0 = 6$ as entries.
- **Page's own completion of the Fibonacci formula** (p. 24 onwards): it is marked as the page's own step in brackets ("Finishing it, as the page's own step"), and it is correct. $x_1 - x_2 = (\lambda_1 - \lambda_2, 0) = (\sqrt5, 0)$, so $(1, 0) = (x_1 - x_2)/\sqrt5$, giving $c_1 = 1/\sqrt5$, $c_2 = -1/\sqrt5$; the second component of $u_k$ is $F_k = (\lambda_1^k - \lambda_2^k)/\sqrt5$ (Binet's formula). Checks: $F_0 = 0$, $F_1 = 1$.
- Worked example: trace 7, det $12 - 2 = 10$, $\lambda^2 - 7\lambda + 10 = (\lambda-5)(\lambda-2)$. $A(1, 1) = (5, 5)$ ✓, $A(1, -2) = (2, -4) = 2(1, -2)$ ✓. $A - 5I$ and $A - 2I$ written correctly. $2(1, 1) + 1(1, -2) = (3, 0)$ ✓. $u_1 = (12, 6) = A(3, 0)$ ✓; $u_2 = (54, 42) = A(12, 6) = (48+6, 24+18)$ ✓. Large-$k$ direction $(1, 1)$, growth factor 5 ✓.
- Quiz 1: answer 1 ($S\Lambda^3S^{-1}$). Correct.
- Quiz 2: answer 1 (approaches zero). Correct; the question says "diagonalisable", so the lecture's assumption holds.
- Quiz 3: answer 2 (eigenvalues 1, 4, −2). Correct; "any triangular matrix" is rightly wrong, $(2\ 1;\ 0\ 2)$ being a triangular counterexample.
- Quiz 4: answer 1. Correct; explanation correct ($\lvert\lambda_2\rvert < 1$).
- Flashcards: all four correct.

## Coverage and order
- The page follows Strang's order: $AS = S\Lambda$ and diagonalisation (pp. 1–5), powers and stability (pp. 5–9), distinct versus repeated eigenvalues with the identity and $(2\ 1;\ 0\ 2)$ (pp. 9–13), difference equations (pp. 13–16), Fibonacci (pp. 16–25).
- Left out (info only): orthogonal eigenvectors of a symmetric matrix (p. 19); Strang's remark that the eigenvectors may be normalised to unit vectors (p. 15); the "static ($Ax = b$) versus dynamic" contrast (p. 23); homework mention (p. 25). None is essential.
- Additions: the completion of the Fibonacci formula (marked as the page's own) and the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched both text extractions). 18.06 Spring 2010 is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("A multiplies its eigenvectors", "its own merry way"), which is fine.
- Worked example: not Strang's lecture example (the lecture's only numerical examples are the identity, $(2\ 1;\ 0\ 2)$ and Fibonacci). $(4\ 1;\ 2\ 3)$ with eigenvalues 5 and 2 is a generic small matrix; whether it coincides with an example in Strang's *Introduction to Linear Algebra* (Section 6.2) or another well-known textbook was **not verified** (books not read). Matrices of this kind appear in many sources, but combined with $u_0 = (3, 0)$ and the $k = 1, 2$ check, a close copy is unlikely.

## Notes
- `leadsTo` 18.06 Lecture 23 "Differential equations and exp(At)" matches the syllabus and Strang's remarks (pp. 14, 25); "$e^{\lambda t}$ in place of $\lambda^k$" is a fair description of the next lecture.
- Internal link `/courses/18-06/eigenvalues-and-eigenvectors` matches the course slug `18-06`; the prerequisite page existed (untracked) at review time.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus.
- During the review the page and its calcs file disappeared from the working tree; the review is of the version read at the start (148 lines, `status: draft`).

## Resolution (2026-11-16, by the page author)

Note on the missing files: the page and its calcs file were moved aside briefly while the previous lesson was committed; they were restored unchanged and `npm run calc:test -- -k diagonalization` passes (19 tests after the additions below).

1. The algebraic/geometric multiplicity rule is now marked as the general statement ("In general, ..."), on the page and in flashcard 3.
2. Added that the stability rule still holds for non-diagonalisable matrices, as the Jordan form later shows.
3. "Next lecture ..." now cites pp. 14, 25.
4. The Fibonacci sentence now includes Strang's remark that the eigenvectors will be orthogonal.
5. No change.
6. Calcs: `ex-u1-first` simplified to the direct side; added the formula side of u₁, the direct second component of u₁ and the formula second component of u₂. The page-own entries keep the transcript page of the method they illustrate.
7. No change (generic numbers; textbook not checked).

Status set to reviewed.
