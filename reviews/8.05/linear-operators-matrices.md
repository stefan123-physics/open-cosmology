---
page: content/year-3/8.05/linear-operators-matrices.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-6-linear-algebra-vector-spaces-and-operators-cont/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/41822d74577d0c4f2a8b9b00eba1a37e_8yvmHBGcNbg.pdf (read: Lecture 6 transcript, Aram Harrow, 25 pages, text extracted with pdftotext page by page; printed footer pages 1–25 match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: Zwiebach, "Linear Algebra: Vector Spaces and Operators", October 21, 2013, 28-page PDF, text extracted with pdftotext -raw; sections 2–3 (pp. 5–14) checked equation by equation, section 4 opening read for scope)
  - Lecture 7 transcript (Detmold), pp. 1–3 read only to check the `leadsTo` claim
verdict: needs-changes
---

# Review: Linear operators, matrices and eigenvalues

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Invariant subspaces and eigenvalues", last paragraph: "every operator on a complex space has an eigenvalue" | Notes p. 13: "every linear operator on a **finite-dimensional** complex vector space has at least one eigenvalue". Transcript p. 25: "every **matrix** has a complex eigenvalue". | Drops the finite-dimensional condition. As stated it is false: the page's own right shift has no eigenvalue even over the complex numbers ($Rx = \lambda x$ forces $\lambda x_1 = 0$, $x_1 = \lambda x_2$, …, so $x = 0$ for every $\lambda$). | "…so every operator on a finite-dimensional complex vector space has an eigenvalue (in infinite dimensions even this can fail: the right shift has none)…". |
| 2 | warning | Rotation paragraph: "A rotation … by angle $\theta$ about the $z$ axis … has the eigenvalue $1$ … and no other real eigenvector" | Transcript p. 24: rotation "by some small angle"; notes p. 12: "by a fixed angle small about the z axis". | Any angle $\theta$. False for $\theta = 0$ (identity: every vector is an eigenvector) and for $\theta = \pi$ (eigenvalue $-1$ on the whole $xy$ plane; checked numerically: eigenvalues $-1, -1, 1$). | "by an angle $\theta$ that is not $0$ or $\pi$ (Harrow takes a small angle)". |
| 3 | warning | "Null space and range": "the matrix with a single $1$ in the upper right corner and zeros elsewhere, null space and range are both the span of $e_1$" | Transcript pp. 12–13 and notes eq. (2.21): the $2 \times 2$ matrix $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ (Harrow: "1 plus 1 is equal to 2"). | Size not stated. For an $n \times n$ matrix with $n > 2$ the null space is spanned by $e_1, \dots, e_{n-1}$ and only the range is span$(e_1)$ (checked: rank 1 for $3 \times 3$), so the sentence is only true for $2 \times 2$. | "For the $2 \times 2$ matrix with a single $1$ in the upper right corner…". Optionally cite notes eq. (2.21), where Zwiebach poses this as an example. |
| 4 | warning | "Matrices", last paragraph: "in general basis-independent quantities are symmetric functions of the eigenvalues" | Transcript p. 22: Harrow hedges ("at least for matrices with eigenvalues"; "we'll see … in a future lecture"). | Stated as a general fact. It is not: rank is basis-independent but not a function of the eigenvalues (the page's own $2 \times 2$ corner matrix and the zero matrix both have eigenvalues $0, 0$ but ranks 1 and 0). | Attribute and narrow: "Harrow points out that trace and determinant are the sum and product of the eigenvalues, and that such invariants belong to the family of symmetric functions of the eigenvalues." |
| 5 | info | Same paragraph: "(shown in the homework)" | Harrow defers the proof to the problem set (p. 22), but the notes prove it: eqs. (2.46)–(2.48), trace (2.47), determinant (2.48). | Mentions only the homework. | "(shown in the notes, eqs. (2.47)–(2.48), and in the homework)". The calcs file already cites (2.48). |
| 6 | info | Formula "Matrix of an operator", `at="eq. (2.25)"` | Notes (2.25) is the written-out form $Tv_j = T_{1j}v_1 + \dots + T_{nj}v_n$; the summation form shown on the page is (2.26). | Cites (2.25) for the sum form. | Same equation, so acceptable; `at="eqs. (2.25), (2.26)"` would be exact. |
| 7 | info | Formula "Matrix of a product", `at="eq. (2.32)"` | Notes (2.32): $(TS)_{ij} = \sum_p T_{ip}S_{pj}$. Transcript pp. 20–21 uses indices $i, j, k$ as on the page. | $(TS)_{ik} = \sum_jT_{ij}S_{jk}$. | Correct (relabelled indices, following the lecture). No change needed. |
| 8 | info | "$\lambda$ is an eigenvalue and $u$ an eigenvector. The condition $u \ne 0$ matters" | Notes p. 12 and transcript p. 24: $u \ne 0$ is required for $\lambda$ to be an eigenvalue, but both explicitly still call the zero vector an eigenvector. | Implies eigenvectors are nonzero (the common textbook convention). | Optional: "(Zwiebach and Harrow still count $0$ as an eigenvector; the condition is what makes $\lambda$ an eigenvalue)". |
| 9 | info | Opening: "notes chapter 3, sections 2–3" | Notes section 3 continues with (3.51)–(3.57) (the $T - \lambda I$ argument, linear independence theorem, characteristic polynomial), which the Lecture 7 transcript covers (pp. 1–3). | Implies all of section 3. | "sections 2 and the start of 3 (to eq. (3.50))". |

All other citations were checked against the extracted text:
- Transcript: linearity and field (p. 2), "acts like multiplication", squaring-each-entry counterexample, operators $L(V)$ (p. 3), polynomial operators (p. 3), left shift (p. 4), right shift with 0 forced by linearity (p. 5), zero operator (p. 5), output need not fill the space and identity (p. 6), $L(V)$ is a vector space (p. 6), associativity, identity, inverses not always (p. 7), non-commutativity and $[T, S] = I$ (p. 8), null space, examples and injectivity (pp. 9–10), range and surjectivity (p. 10), rank–nullity with degrees-of-freedom intuition (p. 11), diagonal $3, 0, -1, 4$ example (p. 12), corner matrix (pp. 12–13), "different sides of the map" (p. 14), left/right inverse and $S = S'$ proof (pp. 14–15), existence conditions (pp. 15–16), finite-dimensional equivalence (p. 16), shifts and the infinite hotel, infinite-dimensional statement (p. 17), basis and $T_{ij}$ (pp. 18–19), $b_i = \sum_jT_{ij}a_j$ (pp. 19–20), product (pp. 20–21), identity matrix, basis as coordinates (p. 21), trace/determinant (pp. 21–22), invariant subspace and trivial cases (p. 23), eigenvalue equation (pp. 23–24), spectrum and "spectral" usage (p. 24), rotation matrix (p. 24, matrix entries match), 90° rotation and complex numbers (p. 25). All correct.
- Notes: linearity (p. 5, unnumbered; correct page), (2.15)–(2.17) commutator, (2.18) null space, (2.19) range, (2.20) rank–nullity, (2.23)–(2.24) invertibility (finite: invertible ⇔ injective ⇔ surjective; infinite: invertible ⇔ injective and surjective), (2.25) matrix, (2.32) product, (3.50) eigenvalue equation. Each is that equation and matches in content. The inverse proof on the page is notes eq. (2.22) (uncited there, cited to the transcript; fine).

## Arithmetic and answer checks
Recomputed by hand and with NumPy:
- (a) $D$ in basis $(1, x, x^2)$: columns $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$ give $\begin{pmatrix}0&1&0\\0&0&2\\0&0&0\end{pmatrix}$, correct. Rank 2, null space the constants (dim 1), $1 + 2 = 3$, correct. $D^3 = 0$ and all eigenvalues $0$, correct. Not invertible, correct.
- (b) $R(1, -i) = (i, 1) = i(1, -i)$ and $R(1, i) = (-i, 1) = -i(1, i)$, correct. Trace $0 = i + (-i)$, determinant $1 = i \times (-i)$, correct.
- Quiz 1 (answer 0, identity): correct, eqs. (2.15)–(2.17).
- Quiz 2 (answer 0, 3): correct, $5 - 2 = 3$.
- Quiz 3 (answer 0, left shift): correct, transcript p. 17, notes p. 8.
- Quiz 4 (answer 0): correct. Distractors are false as they should be ($\det = 1$, trace $0$).
- Flashcards: all three correct.
- Lecture examples restated on the page: diagonal $(3, 0, -1, 4)$ null space span$(e_2)$, range span$(e_1, e_3, e_4)$, correct; corner matrix correct for $2 \times 2$ only (finding 3).
- `calcs/8.05/linear-operators-matrices.yaml`: the five entries are right and pass (`pytest tests/calc -k linear-operators`: 14 passed). Thin spots (info): `rotation-eigen` checks only the first component of $R(1, -i)$; the second component ($1 = i \cdot (-i)$), the $\lambda = -i$ eigenvector and trace $0$ are not stored. Optional to add.

## Coverage and order
- The page follows the transcript's order: motivation → linear maps and operators → examples (polynomials, shifts, zero, identity) → $L(V)$ as a vector space with a product → associativity, identity, non-commutativity, $[T, S] = I$ → null space and range → rank–nullity → the two example matrices → left/right inverses → finite vs infinite dimensions with the shifts and the hotel → matrices, matrix-vector and matrix-matrix products → basis independence, trace and determinant → invariant subspaces → eigenvalues, spectrum → rotation examples. The lecture ends at p. 25 with the complex-numbers remark. So does the page (before its worked example).
- Left out (minor): Harrow's further remark that the space splits into the null space and a complement on which $T$ is one-to-one (p. 11; partly reflected by "different sides of the map"); null space and range depend on $V$ and the field (p. 18); invertible = bijection (p. 18); the explicit basis notation $T(\{v\})$ (p. 21, notes (2.27)); the planned inner products, which the lecture did not reach (p. 1).
- Notes material in sections 2–3 not on the page: sum/scalar of operators (2.13), the remark that in finite dimensions a one-sided inverse suffices (p. 7), the column check (2.28)–(2.29), the full change-of-basis derivation (2.34)–(2.48). Acceptable for a lecture page, apart from finding 5. (3.51)–(3.57) belong to Lecture 7 (finding 9).
- `leadsTo` 8.05 Lecture 7 ("Eigenvalues over the complex numbers, and inner products") matches the Lecture 7 opening (eigenvalues finished, characteristic polynomial, then inner products and Dirac notation).
- Added: the worked example, marked as the page's own.
- Prerequisite `vector-spaces-dimensionality` exists (`content/year-3/8.05/vector-spaces-dimensionality.mdx`). Source URL matches the 8.05 `_course.json` Lecture 6 entry; the transcript URL's video id (8yvmHBGcNbg) matches the transcript PDF header.

## Licensing
- Neither the transcript nor the notes carries an "All rights reserved" or "Courtesy of" notice (grep on both texts): only the standard OCW Creative Commons header. Nothing needs `courtesy:`.
- The page has no images. No OpenStax or LibreTexts material.
- No near-verbatim sentences found. Closest paraphrases: "The output need not fill the space: the zero operator maps everything to one point" (transcript p. 6, "sends all the vectors to a single point") and the infinite-hotel sentence (p. 17); both are rewritten, short and fine. The worked example is original: neither source writes the matrix of $d/dx$ or computes the rotation's complex eigenvectors.
- No em dashes on the page (grep for "—" found none). The en dashes present are in ranges and "Rank–nullity", which is fine.

## Notes
- No `Callout kind="cosmology"`. That is appropriate for this lecture.
- "This is the same structure as $[\hat x, \hat p] = i\hbar$": Harrow only says it is "related to" position and momentum (p. 8). With $\hat p = -i\hbar\,d/dx$, $[d/dx, x] = 1$ gives $[\hat x, \hat p] = i\hbar$, so the claim is correct.
- "A left inverse exists exactly when $T$ is injective": Harrow proves only one direction and leaves the converse as an exercise (p. 15). The statement is true (in infinite dimensions it uses the existence of complements), so no change needed.
- Verdict: one error (finding 1, an unconditional claim that is false and contradicted by the page's own right shift) and three warnings (findings 2–4) to fix. The rest are optional.

## Resolution (2026-11-17, by the page author)

- Error 1: the claim now reads "every operator on a finite-dimensional complex space has an eigenvalue", with the right shift named as the infinite-dimensional exception.
- Warning 2: the rotation has no other real eigenvector "for an angle that is not 0 or 180°".
- Warning 3: the corner matrix is now explicitly the 2 × 2 one.
- Warning 4: the symmetric-functions remark is attributed to Harrow as a suggestion, with the corner matrix versus the zero matrix (same eigenvalues, different rank) as a counterexample.
- Info: trace and determinant independence now cites notes eqs. (2.47)–(2.48); the matrix formula cites eqs. (2.25)–(2.26); the notes' convention of counting 0 as an eigenvector is mentioned; the intro cites "section 2 and the start of section 3". The optional extra calcs component was not added.
