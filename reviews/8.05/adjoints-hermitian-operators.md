---
page: content/year-3/8.05/adjoints-hermitian-operators.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-8-linear-algebra-vector-spaces-and-operators-cont/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/1eef153e5b5d5721aa4382f202f6594c_a9FHHS6n-r4.pdf (read: Lecture 8 transcript, Zwiebach, 19 pages, extracted with pdftotext page by page; printed footer pages 1–19 match the PDF page numbers; the video id a9FHHS6n-r4 in the header matches the URL)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: Zwiebach, "Linear Algebra: Vector Spaces and Operators", chapter 3, pp. 19–27 extracted with pdftotext -raw; sections 6 and 7 checked equation by equation)
  - Lecture 9 transcript (Zwiebach), opening page and a search for "projector", read only to check the `leadsTo` claim
verdict: needs-changes
---

# Review: Linear functionals, adjoints and Hermitian operators

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The adjoint of an operator", first paragraph: "Call that vector $T^\dagger u$ (transcript p. 5)" | Transcript p. 5 only announces the aim ("given an operator T … you can define T dagger") and the $T^*$/bar remark. The argument the sentence summarises (the map $v \mapsto (u, Tv)$ is a linear functional, so it is an inner product with a vector that depends on $u$, named $T^\dagger u$, "at this moment it's just a map") is on p. 6. | Cites p. 5 only. | "(transcript pp. 5–6)". |
| 2 | warning | "Hermitian operators", last sentence: "an operator that preserves every length turns out to be **unitary**" | Transcript p. 19 says this informally ("Is it unitary? You will say, yes, must be."). The notes (p. 26, eq. (7.37)) define a unitary operator as **surjective** and length-preserving, "tailored … to be useful even for infinite dimensional spaces": in infinite dimensions a length-preserving operator need not be unitary (the right shift from Lecture 6 preserves lengths and is not surjective). | Unconditional. | "an operator that preserves every length on a finite-dimensional space turns out to be unitary (the notes also require it to be surjective, which matters in infinite dimensions)". |
| 3 | info | Opening: "notes chapter 3, sections 6–7" | Lecture 8 ends at (7.28)–(7.30). The rest of section 7 (Hermitian eigenvalues real, orthogonal eigenvectors (7.31)–(7.36), unitary operators (7.37)–(7.45)) is Lecture 9 (its opening page restates the Hermitian theorem and moves on). | Implies all of section 7. | "section 6 and the start of section 7 (to eq. (7.30))". |
| 4 | info | Opening: "the most important construction of the linear algebra part of 8.05" | Transcript p. 2 calls the adjoint "a little subtle, a little hard to understand"; p. 8 calls the properties "the main result of daggers". No source ranks it as the most important construction. | A superlative not in the source. | "a central construction" or "a subtle but essential construction". |
| 5 | info | Formula "Rules for adjoints", `cite="reading1" at="p. 7"` | $(ST)^\dagger$ is on p. 7; the $(S^\dagger)^\dagger = S$ proof runs from p. 7 to p. 8 (Zwiebach corrects his $u$/$v$ mix-up on p. 8). Both claims are also in the notes, p. 22 (unnumbered). | p. 7. | `at="pp. 7–8"`, or cite reading2 p. 22. |
| 6 | info | "Linear functionals": "A student asked whether infinite dimensions are allowed" | Transcript p. 4: a student asks "We're assuming V is finite dimensional, correct?", and another mentions continuity; Zwiebach says he will check. | Paraphrase slightly different. | Optional: "A student asked whether the proof assumes finite dimensions; …". |
| 7 | info | "(The notes use a different example with the same lesson, eq. (6.1).)" | Notes (6.1): $\phi(v) = 3v_1 + 2v_2 - 4v_3$, with $u = (3, 2, -4)$. | Correct citation; "with the same lesson" reads oddly. | "(The notes make the same point with $3v_1 + 2v_2 - 4v_3$, eq. (6.1).)" |
| 8 | info | "The same in Dirac notation": the identity and $T = \sum T_{ij}\,\lvert e_i\rangle\langle e_j\rvert$ | Transcript pp. 13–15 writes both on the board as equations. | Given in words and a bullet with Unicode brackets, not as `<Formula>` with a citation. | Optional: make both `<Formula>` blocks with `cite="reading1"` (`at="pp. 13–14"` and `at="pp. 14–15"`), if `lib/speech.ts` handles bras and kets. |
| 9 | info | "When (v, Tv) = 0": "Polarisation identity" (formula label and flashcard) | Neither the transcript nor the notes uses the name (grep: 0 hits); the notes call (7.27) simply "the last two relations". | Names it. | Fine (standard name); optionally "(the standard name; Zwiebach does not name it)". |

All other citations were checked against the extracted text:
- Transcript: projectors and measurement (p. 1), two notations (pp. 1–2), linear functional definition (p. 2), $3v_1 - v_2 + 7v_3$ introduced (p. 2) and $u = (3, -1, 7)$ (p. 3), theorem statement (p. 3), proof with orthonormal basis and the conjugate entering on the left (p. 4) and the vector $u$ (pp. 4–5), uniqueness via $v = x$ (p. 5), $T^*$ and bar notation (p. 5), linearity of $T^\dagger$ (pp. 6–7), $\mathbb{C}^3$ example (p. 8), coefficient collection (p. 9) and $T^\dagger u$ (p. 10), matrix columns and both matrices (p. 10), $(T^\dagger)_{ij} = (T_{ji})^*$ (p. 11), $g_{ij}$ for a non-orthonormal basis and basis-independent definition (p. 12), $\langle u|T|v\rangle$ (p. 12), $(u, T^\dagger v) = (v, Tu)^*$ (p. 13, board), $T_{ij} = (e_i, Te_j)$ (p. 13), identity as $\sum|e_i\rangle\langle e_i|$ (pp. 13–14), single term an orthogonal projector (p. 14), $T = \sum T_{ij}|e_i\rangle\langle e_j|$ (pp. 14–15), products of matrices (p. 15), 90° rotation and complex theorem (p. 16), "traced a lot of my confusions" (p. 16), strategy $u = Tv$ (p. 16), $u \pm v$ (p. 17), $u \pm iv$ (pp. 17–18), the identity (p. 18), Hermitian criterion and proof (pp. 18–19), unitary remark (p. 19). All correct apart from findings 1 and 5.
- Notes: p. 20 linear functional (unnumbered, correct page), (6.1), (6.5), footnote on continuous functionals in Hilbert space (p. 21), (6.8), (6.12)–(6.14) (the page's formula is (6.13) plus (6.14), with (6.12) implied), (6.15), (6.20), (6.22), (7.24), (7.25), (7.27), (7.28). Each number is the right equation and matches in content. The page's proof of the hard direction of (7.28) follows the transcript (p. 19, via $((T^\dagger - T)v, v) = 0$) rather than the notes' (7.30); both are correct.

## Arithmetic and answer checks
Recomputed by hand and with NumPy:
- $\mathbb{C}^3$ matrices: the conjugate transpose of $T$ is $\begin{pmatrix}0&1&-3i\\2&i&1\\-i&0&7\end{pmatrix}$, equal to the page's $T^\dagger$ and to notes (6.20); $T^\dagger u = (u_2 - 3iu_3, 2u_1 + iu_2 + u_3, -iu_1 + 7u_3)$ matches notes (6.18) and transcript p. 10.
- Polarisation identity (7.27): checked algebraically ($u \pm v$ pair gives $2(u,Tv) + 2(v,Tu)$; $u \pm iv$ pair gives $2i(u,Tv) - 2i(v,Tu)$; dividing the latter by $i$ and adding gives $4(u,Tv)$) and numerically for a random complex $3 \times 3$ matrix and random complex $u$, $v$: both sides $4.7783 - 3.5241i$.
- $(u, T^\dagger v) = (v, Tu)^*$: $(u, T^\dagger v) = (Tu, v) = (v, Tu)^*$. Correct.
- Hermitian proofs: both directions correct as written.
- Worked example (a): $(u, Tv) = u_1^*v_1 + (2iu_1^* + 3u_2^*)v_2$, so $T^\dagger u = (u_1, -2iu_1 + 3u_2)$; matrices $\begin{pmatrix}1&2i\\0&3\end{pmatrix}$ and $\begin{pmatrix}1&0\\-2i&3\end{pmatrix}$, conjugate transpose confirmed. Correct.
- Worked example (b): $H^\dagger = H$; $Hv = (3 + i, 1 + 4i)$; $(v, Hv) = (3 + i) + (-i)(1 + 4i) = 3 + i - i + 4 = 7$ (NumPy: $7 + 0i$). Correct.
- Quiz 1 (answer 0, $(2, i)$): $(u, v) = 2v_1 - iv_2$ for $u = (2, i)$; checked numerically. Distractor $(2, -i)$ gives $2v_1 + iv_2$. Correct.
- Quiz 2 (answer 0, $T^\dagger S^\dagger$): correct.
- Quiz 3 (answer 0, $(T_{ji})^*$): correct, (6.22); the explanation's orthonormal caveat matches p. 12 / notes p. 23.
- Quiz 4 (answer 0, 90° rotation): correct; reflection in the $x$ axis gives $v_1^2 - v_2^2$, not always 0.
- Flashcards: all three correct.
- `calcs/8.05/adjoints-hermitian-operators.yaml`: 7 entries, all pass (`npm run calc:test -- -k adjoints`: 7 passed). Thin spots (info): five entries (`quiz-functional`, `ex-adjoint-entry`, `ex-Hv-first`, `ex-expectation`, `ex-expectation-imag`) store the already-worked result (`-(-1)`, `-(2)`, `2 + 1`, `3 + 4`, `1 - 1`) and do not recompute anything from the inputs; `polarisation-real-part` checks only (7.25) for real components and its `where` calls $A$ "symmetric" although $q \ne r$ is allowed. Optional: store real/imaginary parts as formulas of the inputs (e.g. Re$(v, Hv) = 2|v_1|^2 + 3|v_2|^2 + 2\,$Re$((1 - i)v_1^*v_2)$ at $v = (1, i)$), and add a check of (7.26) or (7.27).

## Coverage and order
- The page follows the transcript's order: projectors to read and the two notations (pp. 1–2) → linear functionals and the $\mathbb{R}^3$ example → theorem, proof, uniqueness, infinite-dimensional question → adjoint definition → linearity → $(ST)^\dagger$, $(S^\dagger)^\dagger$ → $\mathbb{C}^3$ example and matrices → general matrix rule and non-orthonormal bases → Dirac notation, flip rule, $T_{ij}$, identity, $T$ as ket-bra sum → $(v, Tv) = 0$ theorem with the real counterexample and proof → Hermitian criterion → unitary teaser. The lecture ends at p. 19 with the unitary remark; so does the page (before its worked example).
- Left out (minor): the problem-set problem on best approximation with projectors (p. 1); Weinberg's book using parenthesis notation (p. 2); the notation $\phi_u(v)$ (p. 3, notes (6.6)); the explicit reading of $T_{21} = 1$, $T_{31} = 3i$ from $Te_1$ (p. 10, notes (6.19)); the remark that a formula for the adjoint with $g$ exists if $g$ is invertible (p. 12).
- Notes section 7 beyond (7.30) is Lecture 9 material (finding 3).
- `leadsTo` 8.05 Lecture 9 ("Dirac's bra and ket notation in full, and projectors"): Lecture 9 opens with the Hermitian theorem, real eigenvalues and unitary operators before the bra-ket material, and uses projectors in the uncertainty discussion. The claim is correct but incomplete; optionally "Eigenvalues of Hermitian operators, unitary operators, then Dirac's bra and ket notation in full".
- Added: the worked example, the page's own.
- Prerequisite `eigenvalues-inner-products` exists (`content/year-3/8.05/eigenvalues-inner-products.mdx`). Source URL matches the 8.05 `_course.json` Lecture 8 entry.

## Licensing
- Neither the Lecture 8 transcript nor notes chapter 3 carries an "All rights reserved" or "Courtesy of" notice (grep on both texts): only the standard OCW Creative Commons header. Nothing needs `courtesy:`.
- The page has no images. No OpenStax or LibreTexts material.
- No near-verbatim sentences found. Closest: "This is no accident" (notes p. 21, "This is no accident, in fact"; a short standard phrase) and "traces some of his own early confusion in quantum mechanics to not knowing this theorem" (transcript p. 16, "I traced a lot of my confusions in quantum mechanics to not knowing about this theorem"), which is attributed and reworded; fine. The $\mathbb{C}^3$ example is MIT's (transcript p. 8, notes (6.15)), clearly presented as the lecture's, with the working summarised rather than copied. The worked example is original (neither source has a $2 \times 2$ example or the expectation value computation).
- No em dashes on the page (grep for "—" found none). En dashes appear only in ranges.

## Notes
- No `Callout kind="cosmology"`; appropriate for this lecture.
- The Hermitian criterion is stated for a complex inner product space in the flashcard but not in the formula or the summary bullet ("Consequently $T$ is Hermitian if and only if …"). It follows the preceding complex-space theorem, so this is clear from context; optionally add "on a complex space" (on a real space the 90° rotation has $(v, Tv) = 0$ real for all $v$ but is not symmetric).
- Verdict: one citation error (finding 1) and one warning (finding 2) to fix; the rest are optional.

## Resolution (2026-11-17, by the page author)

- Error: the definition of T†u now cites transcript pp. 5–6.
- Warning: the remark on length-preserving operators is restricted to finite dimensions, noting that the notes also require surjectivity and that the right shift is the counterexample.
- Info: the opening line now says "a central construction" and "section 6 and the start of section 7"; the rules for adjoints cite pp. 7–8; the remark on eq. (6.1) is reworded; the polarisation identity is named as a usual name not used in the lecture; the Hermitian criterion and its summary bullet say "on a complex space"; the calcs description no longer calls A symmetric. The Dirac-notation results stay in words, because read-aloud cannot say kets inside formulas. The other calcs entries and the leadsTo text are unchanged.
