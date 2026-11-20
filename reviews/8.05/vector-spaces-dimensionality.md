---
page: content/year-3/8.05/vector-spaces-dimensionality.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-5-linear-algebra-vector-spaces-and-operators/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/2d7c1a923283c6b26eccb556b5d75be3_eZzBK3oy-08.pdf (read: Lecture 5 transcript, 23 pages, extracted page by page with pdftotext; printed footer pages 1–23 match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: Zwiebach, "Spin One-half, Bras, Kets, and Operators", section 3 "Properties of Pauli matrices and index notation", eqs. (3.37)–(3.66), located with pdftotext -raw)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: Zwiebach, "Linear Algebra: Vector Spaces and Operators", October 21, 2013, pp. 1–6: section 1 in full and section 2 up to eq. (2.18))
verdict: pass-with-notes
---

# Review: Pauli matrix identities, vector spaces and dimension

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "General Hermitian 2 × 2 matrix", `cite="reading3" at="eqs. (1.9), (1.10)"` | Notes eq. (1.9) writes the general Hermitian matrix as $\begin{pmatrix}a_0 + a_3 & a_1 - ia_2\\ a_1 + ia_2 & a_0 - a_3\end{pmatrix}$ with $a_0,\dots,a_3$ real, and expands it as $a_0 1 + a_1\sigma_1 + a_2\sigma_2 + a_3\sigma_3$ (p. 4). Eq. (1.10) is that matrix set equal to zero. The letters $c, d, a, b$ are the transcript's (pp. 14, 22). | Uses $c, d, a, b$ and cites only the notes' equation numbers. The physics is the same: $a\sigma_1 + b\sigma_2 = \begin{pmatrix}0 & a - ib\\ a + ib & 0\end{pmatrix}$, checked numerically. | Either switch to the notes' $a_0, a_1, a_2, a_3$, or keep $c, d, a, b$ and add "(the transcript's letters; the notes write $a_0,\dots,a_3$)" and the transcript pages 21–22 to the citation. The worked example and the `hermitian-det` calc use $c, d, a, b$ too, so keeping the letters and adding the note is the smaller change. |
| 2 | info | Vector-space axioms 3–5 | Notes p. 2 order: 3 additive identity, 4 additive inverse, 5 multiplicative identity. In the lecture (p. 11) Zwiebach gives 4 = multiplicative identity and 5 = additive inverse, and remarks "in my list I put them in different orders in the notes". | Follows the notes' order, but cites "transcript pp. 10–11; notes p. 2". | Fine as it is; optionally add "(numbered as in the notes; the lecture swaps 4 and 5)". |
| 3 | info | Opening paragraph: "notes ... chapter 3, sections 1–2" | Notes section 2 ("Linear operators and matrices", pp. 5–11) goes on to operator examples, $L(V)$, products, $[T, S] = I$, null space, range and matrices. The lecture reaches only the definition at the top of p. 5. | Implies section 2 is covered. | Say "chapter 3, section 1 and the start of section 2". |
| 4 | info | "This shows, for instance, that matrix representations, traces and eigenvalues need no inner product" (cited transcript pp. 7–9) | Matrix representation without bras and kets is on p. 8. Traces and eigenvalues without an inner product are on p. 21. | Cites pp. 7–9 only. | Cite "transcript pp. 8, 20–21". |
| 5 | info | Eigenvalue section, "(The two facts are independent: ...)" | This is the student question on transcript p. 9, not pp. 2–3. | The paragraph's only citation is pp. 2–3. | Add "(transcript p. 9)" to the bracketed remark. |
| 6 | info | Direct sum example: "the plane is the direct sum of two lines through the origin" | Transcript p. 17: $\mathbb R^2$ as $\mathbb R^1 \oplus \mathbb R^1$ along two axes. | "two lines" | "two different lines through the origin": one line taken twice is not a direct sum. |
| 7 | info | Pauli identities and $\hat S_n$ | Lecturer slips, transcript p. 3: "sigma i sigma j is 2i epsilon i j k sigma k" (meant the commutator). p. 4: a spurious factor 2 in $2a_ib_j\delta_{ij}$, which he corrects on p. 5. p. 5: "k component of a dot b" (meant a cross b). p. 6: "isotopic" for isotropic. | The page states every one correctly. | No change needed. Rule 4 asks for a bracketed note only where the page differs from the lecture in a way a reader would notice. The p. 3 commutator slip is the only candidate, and the notes (3.39) agree with the page, so leaving it silent is acceptable. |
| 8 | info | Summary bullet 2 and frontmatter `summary` | Notes (3.51), (3.53), (3.60) carry the unit matrix $1$. | Writes $\{\sigma_i, \sigma_j\} = 2\delta_{ij}$, $\sigma_i\sigma_j = \delta_{ij} + \dots$ and $\vec a\cdot\vec b + \dots$ without the $1$. | Harmless shorthand, but the body and flashcard 1 keep the $1$. For consistency, add $\,1$ in the summary bullet. |

All other citations were checked against the extracted text:
- Notes chapter 2: (3.41) is $M^2 + \alpha M + \beta 1 = 0$ and (3.42) the eigenvalue step, which is correct. (3.51) is $\{\sigma_i, \sigma_j\} = 2\delta_{ij}1$, correct. (3.53) is $\sigma_i\sigma_j = \delta_{ij}1 + i\epsilon_{ijk}\sigma_k$, correct. (3.60) is $(\vec a\cdot\vec\sigma)(\vec b\cdot\vec\sigma) = (\vec a\cdot\vec b)1 + i(\vec a\times\vec b)\cdot\vec\sigma$, correct. The calcs file's (3.61), $(\vec a\cdot\vec\sigma)^2 = |\vec a|^2 1$, is also correct.
- Notes chapter 3: (1.5) is the direct sum $V = U_1\oplus\dots\oplus U_m$, correct. (1.8) is the linear-independence equation (the notes state "only has the solution $a_i = 0$" in words, and the page puts this as an implication, which is fine). The linear-operator definition $T(u+v) = Tu + Tv$, $T(au) = aTu$ is at the top of p. 5, correct. (1.9)/(1.10): see finding 1.
- Transcript pages: matrix equation pp. 1–2, trace argument pp. 2–3, commutator and anticommutation p. 3, $\{\sigma_i,\sigma_j\}$ and $AB = \frac12\{A,B\} + \frac12[A,B]$ p. 4, $\vec a\cdot\vec\sigma$ and multiplying by $a_ib_j$ pp. 4–5, $(\vec n\cdot\vec\sigma)^2 = 1$ and $\hat S_n$ pp. 5–6, isotropy p. 6, operator triplets and the $\vec S\times\vec S$ homework pp. 6–7, Axler and 18.700 pp. 7–8, vectors and numbers, field $F$ pp. 9–10, closure p. 10, axioms pp. 11–12, consequences p. 12, examples pp. 13–16, subspace and direct sum pp. 16–17, list, span, finite/infinite-dimensional pp. 18–19, polynomials infinite-dimensional p. 19, $e_i$ list p. 19, linear independence and basis pp. 19–20, dimension p. 20, dimension $N$ and $MN$ p. 21, Hermitian dimension 4 pp. 21–22, sequences/functions infinite-dimensional p. 22, linear maps and operators pp. 22–23. Every page citation matches, apart from the refinements in findings 4 and 5.
- The operator-triplet cross product $(\vec X\times\vec Y)_k = \epsilon_{ijk}X_iY_j$ follows the transcript (p. 7). Notes (3.66) write it as $(\vec X\times\vec Y)_i = \epsilon_{ijk}X_jY_k$. The two are equivalent, and this paragraph cites only the transcript.

## Arithmetic and answer checks
Recomputed with NumPy:
- (a) $c + d = 3$, $c - d = -1$ give $c = 1$, $d = 2$. $a - ib = 1 - 2i$ gives $a = 1$, $b = 2$. $1 + 1\sigma_1 + 2\sigma_2 + 2\sigma_3$ reproduces $M$ exactly. Correct.
- (b) $|\vec v|^2 = 1 + 4 + 4 = 9$. $\vec v\cdot\vec\sigma$ is traceless with square $9\cdot 1$, so its eigenvalues are $\pm3$. Since $1$ commutes with everything, $M$ has $1 \pm 3 = 4, -2$. `numpy.linalg.eigvalsh(M)` gives $[-2, 4]$. Correct.
- (c) $\operatorname{tr} M = 2 = 4 - 2$. $\det M = -3 - (1 - 2i)(1 + 2i) = -3 - 5 = -8 = 4\times(-2)$. Correct.
- (d) $\sigma_1\sigma_2 = i\sigma_3$: checked by matrix multiplication and against notes (3.45). Correct.
- Quiz 1 (answer 0, $+1$ and $-1$): correct ($\lambda^2 = 1$, sum $= 0$).
- Quiz 2 (answer 0): correct, eq. (3.60). Distractor 4 is false in general because $(\vec a\times\vec b)$ changes sign.
- Quiz 3 (answer 0): correct (transcript p. 14, notes p. 3, example 3). The explanation's "$iH$ is anti-Hermitian" is right.
- Quiz 4 (answer 0): correct (transcript pp. 18–19, notes p. 4).
- Flashcards: all three correct. Card 1 has the right commutator $[\sigma_i,\sigma_j] = 2i\epsilon_{ijk}\sigma_k$ (notes (3.39)).
- `calcs/8.05/vector-spaces-dimensionality.yaml`: `ex-norm` (9) and `ex-det` (−8) are correct. `hermitian-det` is a correct identity. `pauli-product-real` only checks that $(c + |v|) + (c - |v|) = 2c$, which is trivially true and does not exercise eq. (3.60), although its `shown` is (3.60). The eigenvalues 4 and −2, the trace 2 and the coefficients $c = 1$, $d = 2$, $a = 1$, $b = 2$ have no entries of their own. Optional: add entries for them. Running `pytest tests/calc -k vector-spaces` gave 17 passed.

## Coverage and order
- The page follows the lecture's order: eigenvalues from a matrix equation → trace → commutator/anticommutator → $\sigma_i\sigma_j$ → $\vec a\cdot\vec\sigma$ identity → $\hat S_n$ eigenvalues and isotropy → operator triplets → Axler → vectors and numbers, field → axioms → consequences → six examples → subspace → direct sum → list, span, finite/infinite dimension → polynomials, $e_i$ → linear independence → basis → dimension, no inner product → Hermitian dimension 4 → infinite-dimensional examples 5, 6 → linear map/operator, fixed by basis action. The lecture ends at the operator definition (p. 23), and so does the page.
- Left out (minor): "any finite-dimensional vector space has a basis" (p. 20); the student question on $\mathbb R^2$ bases (p. 20); Zwiebach's personal comments on the book (pp. 8–9). Notes material not in the lecture is correctly left out: the epsilon identities (3.63)–(3.65), the "length of independent list ≤ length of spanning list" remark, and the alternative uniqueness check for direct sums.
- Added: the worked example, which is the page's own. Also "$M\times N$ matrices dimension $MN$", stated as a fact where the lecture and notes leave it as an exercise. That is acceptable.
- `leadsTo` 8.05 Lecture 6 ("null space, range, inverses and matrix representations") matches the notes' section 2 continuation and Zwiebach's closing remark (p. 23). The prerequisite `spin-one-half-states-operators` exists.

## Licensing
- Neither the transcript nor notes chapters 2 and 3 carries an "All rights reserved" or "Courtesy of" notice (grep on all three texts). Nothing needs `courtesy:`.
- Axler's *Linear Algebra Done Right* is named only as the book the lecture follows (the transcript and notes both say this). Nothing from the book is quoted or reproduced. The axioms and definitions are standard and follow Zwiebach's notes, rewritten. No problem.
- No OpenStax or LibreTexts material. No images.
- No near-verbatim sentences found. The closest wordings are standard definitions ("a subset that is itself a vector space"; "a list that spans V and is linearly independent"; "the vectors themselves are not called real or complex", compare notes p. 2 "we never speak of the vectors themselves as real or complex"). These are short and standard. The worked example is original: neither the lecture nor the notes has a numerical example.
- No em dashes on the page (grep for "—" found none). En dashes appear only in page ranges and the $2 \times 2$ label text, which is fine.

## Notes
- No `Callout kind="cosmology"` and no cosmology `leadsTo`, which is appropriate for this lecture.
- Verdict: no errors. Finding 1 (the notes' equation cited with the transcript's letters) should be fixed or stated. The rest are optional.

## Resolution (2026-11-17, by the page author)

- Warning: the general Hermitian matrix now cites transcript pp. 21–22, whose letters (a, b, c, d) the page uses. A note gives the notes' names a₀ to a₃ (eqs. (1.9)–(1.10)).
- Info:
  - The axiom order is noted as the notes' order.
  - The coverage of notes chapter 3 is now stated precisely.
  - The inner-product remark cites pp. 8 and 20–21, and the independence of the two facts cites p. 9.
  - The direct-sum example now says "two different lines".
  - The calcs entry for (3.60) now tests a real consequence, and the eigenvalue 4 has its own entry.
  - The summaries keep their short form.
