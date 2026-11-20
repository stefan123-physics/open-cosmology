---
page: content/year-2/18.06/singular-value-decomposition.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-29-singular-value-decomposition/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/0f4d618b79d74403afcbaef310117f03_TX_vooSnhm8.pdf (read: all 18 pages, per-page text extracted with pdftotext -f N -l N; page numbers checked against the PDF)
  - 18.06 Lecture 30 and Lecture 31 transcripts (read, searched, to check the claims about the sign puzzle and the leadsTo entries)
verdict: pass-with-notes
---

# Review: Singular value decomposition

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Strang's first example", sign puzzle paragraph (line 93) | Strang himself suggests the fix and rejects it: "I could have had the minus sign here for that eigenvector, but I'm not happy about that", worrying about "positive entries down the diagonal of sigma" (p. 12). On p. 10 he also says that, knowing the other pieces, he "could put those together and figure out what the Us are", the route $u_i = Av_i/\sigma_i$. | "Strang leaves the sign puzzle for later (pp. 12–13)", then the page's own resolution. | Optional: say that Strang considered flipping the eigenvector's sign (p. 12) and that flipping $u_2$ leaves $\Sigma$ positive, which answers his worry; and that the $u_i = Av_i/\sigma_i$ route he mentions on p. 10 avoids the problem. |
| 2 | info | Same paragraph / frontmatter `summary` ("a puzzle he left for later") | Strang promises to resolve it "on Wednesday" (p. 12). The Lecture 30 transcript does not return to it (searched for sign, SVD, singular; it opens on linear transformations), nor does Lecture 31. | "leaves the sign puzzle for later". Accurate; the page makes no claim that a later lecture resolves it. | Optional: "(the later lecture transcripts do not return to it)". No change required. |
| 3 | info | Bracketed note on Strang's slip (line 67) | p. 5: "a basis for the null space, v(r+1) down to vm"; then "I'll complete that to an orthonormal basis for the whole space, R^m. I complete this to ... R^n". | Strang says $v_m$ and swaps $\mathbf{R}^m$ and $\mathbf{R}^n$ for a moment. | The $v_m$ slip is certain. The $\mathbf{R}^m$/$\mathbf{R}^n$ swap depends on what "that" and "this" point to on the board, which the transcript cannot show; given it follows directly on the $v$'s, the page's reading is plausible but **uncertain**. Optional softening: "seems to name the two spaces the other way round". |
| 4 | info | Formula "AᵀA removes U" (pp. 6–7) | Strang writes "sigma one squared sigma two squared" (p. 6). | Diagonal runs to $\sigma_n^2$, while the Summary and flashcards define only $\sigma_1, \dots, \sigma_r > 0$. | Optional: add "($\sigma_{r+1} = \dots = \sigma_n = 0$)" after the formula, so the $n \times n$ diagonal is consistent with rank $r$. |
| 5 | info | "the trace gives the nonzero eigenvalue at once (p. 16)" | Strang says one eigenvalue is 0 since the rank is one, "and then you know that the other eigenvalue is going to be a hundred and twenty five" (p. 16); the word trace is not used. | Attributes the trace reasoning to p. 16. | Fine as an explanation of his "you know"; optionally "(the trace, 80 + 45)" as the page's gloss. |
| 6 | info | "its own eigenvectors are not orthogonal (pp. 4–5)" | p. 5: "which isn't symmetric, so I can't use its eigenvectors, they're not orthogonal". | Same. | Optional extra: $(4\ 4; -3\ 3)$ has complex eigenvalues $3.5 \pm 3.43i$ (trace 7, determinant 24), so it has no real eigenvectors at all, which makes the point stronger. |
| 7 | info | `leadsTo` Lecture 30, why | Lecture 30 discusses the "good basis" as the eigenvector basis (projection example); it does not mention the SVD. | "the matrix depends on the bases chosen, and the SVD chooses the best ones." | Fair as the page's own connection (it follows Lecture 29 pp. 17–18), but not a claim Lecture 30 makes. Optional: "... and Lecture 29's SVD is one way to choose good ones". |
| 8 | info | `leadsTo` Lecture 31, why | Lecture 31's compression uses Fourier and wavelet bases (JPEG); the SVD is not named in its transcript. | "Change of basis and image compression." | Correct as a title. No change needed; avoid implying SVD compression if the reason is expanded. |

No error-level differences were found. Every formula citation was checked against the printed pages:
- $A = U\Sigma V^T$, pp. 1, 5: orthogonal, diagonal, orthogonal and "any matrix whatsoever" on p. 1; $A = U\Sigma V^{-1} = U\Sigma V^T$ on p. 5. Correct.
- $Av_i = \sigma_iu_i$, pp. 3–4: $Av_1$, $Av_2$ on p. 3, $Av_r = \sigma_ru_r$ on p. 4. Correct.
- Matrix form $AV = U\Sigma$, pp. 4–5: matrices pulled out p. 4, used on p. 5. Correct.
- $A^TA = V\Sigma^TU^TU\Sigma V^T$, pp. 6–7: computed and collapsed on p. 6, read as $Q\Lambda Q^T$ on p. 7. Correct.
- $AA^T = U\Sigma\Sigma^TU^T$, p. 10: correct (first mentioned in words on p. 7, written on p. 10).
- Example matrix, p. 4: correct ("four four minus three three").
- $A^TA = (25\ 7; 7\ 25)$, p. 8: correct.
- $AA^T = \mathrm{diag}(32, 18)$, p. 11: correct.
- Rank-one matrix, p. 13; $A^TA = (80\ 60; 60\ 45)$ computed p. 15, eigenvalues 125, 0 and $\sigma_1 = \sqrt{125}$ on p. 16: "pp. 15–16" correct.
- Its SVD, p. 16: $v_2 = (0.6, -0.8)$, $u_2 = (2, -1)/\sqrt5$, factor $1/\sqrt5$ taken out, all on p. 16. Correct.

Other claims checked: "final and best factorization" (p. 1); symmetric positive definite case with one $Q$ (p. 1; $AQ = Q\Sigma$ remark p. 4); Gram–Schmidt basis not kept orthogonal (p. 2); $\sigma$ not $\lambda$ (p. 3); nullspaces give zeros (pp. 3, 5); "great matrix", positive semidefinite (p. 6); positive square roots (p. 7); eigenvectors $(1, 1)$, $(1, -1)$ with 32 and 18, normalised by $\sqrt2$ (pp. 8–9); $AB$ and $BA$ same eigenvalues (p. 11); $\sqrt{32}/\sqrt2 = 4$ correct, second row $(3, -3)$ instead of $(-3, 3)$ (p. 12); row space multiples of $(4, 3)$, column space $(1, 2)$ (pp. 13–14); $v_1 = (0.8, 0.6)$, $u_1 = (1, 2)/\sqrt5$ (pp. 14–15); null vectors multiplied by zero (p. 17); four subspaces, Gram–Schmidt in chapter 4, eigenvalues needed because the bases diagonalise, no coupling (p. 17); dimensions $r$, $r$, $n - r$, $m - r$ and "very last lectures" (p. 18). All page citations agree with the transcript pages.

Page's own resolution of the sign puzzle: checked. $Av_2 = (4 - 4, -3 - 3)/\sqrt2 = (0, -6)/\sqrt2$; divided by $\sqrt{18}$: $-6/\sqrt{36} = -1$, so $u_2 = (0, -1)$. Then row 2 of $U\Sigma V^T$ is $-\sqrt{18}\,v_2^T = -3(1, -1) = (-3, 3)$, which matches $A$; row 1 is $\sqrt{32}\,v_1^T = (4, 4)$. NumPy's SVD gives the same factors up to a simultaneous sign flip of $(u_1, v_1)$. Correct, and correctly marked as the page's own addition.

## Arithmetic and answer checks
- `npm run calc:test -- -k singular-value`: 19 passed.
- Worked example (a): $A^TA$: $26$, $18$, $74$ correct; trace 100, determinant $1924 - 324 = 1600$; $(\lambda - 80)(\lambda - 20)$. $(26\ 18; 18\ 74)(1, 3) = (80, 240)$, so $v_1 = (1, 3)/\sqrt{10}$, $v_2 = (3, -1)/\sqrt{10}$. $\sigma = 4\sqrt5, 2\sqrt5$. $Av_1 = (20, 20)/\sqrt{10}$, $u_1 = (1, 1)/\sqrt2$; $Av_2 = (10, -10)/\sqrt{10}$, $u_2 = (1, -1)/\sqrt2$. $\sigma_1\sigma_2 = 40 = \det A = 35 + 5$. All correct; cross-checked with NumPy (singular values 8.944 and 4.472, same singular vectors).
- Worked example (b): $B^TB = (20\ 10; 10\ 5)$, trace 25, $\sigma_1 = 5$; $u_1 = Bv_1/5 = (5, -10)/(5\sqrt5) = (1, -2)/\sqrt5$ (signs consistent); $5u_1v_1^T = B$; $B(1, -2) = 0$ and $B^T(2, 1) = 0$, so $v_2$, $u_2$ are in the right nullspaces. Correct.
- Rank-one SVD product: $U\Sigma = (5\ 0; 10\ 0)$, times $V^T$ gives $(4\ 3; 8\ 6)$. Correct.
- calcs file: all 19 entries match the page text. Two weak checks (info): `aat` only tests the sum $32 + 0 + 18 = 50$, which would not catch an error moved between entries; `r1-eig` adds the zero determinant to the trace. Consider separate entries for $AA^T$ (1, 1) = 32 and (1, 2) = 0. Nothing for (b)'s $v_2$/$u_2$ nullspace checks; optional.
- Quiz 1: answer 1 (eigenvectors of $A^TA$). Correct; explanation correct.
- Quiz 2: answer 1 ($7$ and $2$). Correct.
- Quiz 3: answer 1 (one). Correct.
- Quiz 4: answer 3 (nullspace of $A^T$). Correct; dimension $m - r$ correct.
- Flashcards: all three correct.

## Coverage and order
- The page follows Strang's order: SVD and the symmetric positive definite case (p. 1), the row-space/column-space picture (pp. 2–4), matrix form and nullspaces (pp. 4–5), $A^TA$ and $AA^T$ (pp. 6–7, 10), first example (pp. 8–13), rank-one example (pp. 13–17), the four subspaces (pp. 17–18).
- Nothing substantial is left out. Small omissions (info only): Strang's own rejected suggestion of flipping the eigenvector sign and his remark that $U$ could be found from the other pieces (finding 1).
- Additions: the sign-puzzle resolution (flagged as the page's own), the trace gloss (finding 5) and the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Lecture 29 (or 30) transcript text (searched). 18.06 Spring 2010 is under CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("the final and best factorization of a matrix", attributed to p. 1; "any matrix whatsoever"), which is fine.
- Worked example: original. (a) $(5\ 5; -1\ 7)$ is neither the lecture's $(4\ 4; -3\ 3)$ nor the textbook example $(3\ 0; 4\ 5)$, nor a multiple of either; (b) $(2\ 1; -4\ -2)$ is not the lecture's $(4\ 3; 8\ 6)$. Whether these numbers coincide with an exercise in Strang's *Introduction to Linear Algebra* was **not verified** (book not read); they look generic.

## Notes
- `leadsTo` Lectures 30 and 31 match the syllabus titles in `_course.json`; see findings 7–8 on the reasons.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1. The sign-puzzle paragraph now says Strang considers flipping an eigenvector but wants no minus sign in Σ, and that he remarked U could be found from the other pieces (p. 10); the page's own fix is presented as that route, with Σ staying positive.
2. Added that the later transcripts do not return to the puzzle.
3. The R^m/R^n part of the slip note is softened to "seems to".
4. Added σ_{r+1} = ⋯ = σ_n = 0 after the AᵀA formula.
5. The trace is now presented as the page's own check, not Strang's words.
6. Added that (4 4; −3 3) has complex eigenvalues 3.5 ± i√11.75.
7. The Lecture 30 `leadsTo` reason no longer mentions the SVD.
8. No change.
9. Calcs: AAᵀ entries (1, 1) and (1, 2) tested separately; the complex eigenvalues added.

Status set to reviewed.
