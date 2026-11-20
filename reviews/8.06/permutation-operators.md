---
page: content/year-3/8.06/permutation-operators.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l23-1/ (not opened online; the four transcripts below were read from local copies supplied for this review)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/756faafe0c17b8ec3e4aef42c94783b0_vK7T72HPQ10.pdf (read, local copy; L23.1, 6 PDF pages, each extracted with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/7070a873da36c7a7af947e0eff94f755_VaBMK5JSz2I.pdf (read, local copy; L23.2, 3 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/41a5effd1ab7ce32cefb8d9448fc85a4_3299996.pdf (read, local copy; L23.3, 6 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/0647e726d714ef6c55f8edb0bef118d7_NjhuAak0jmM.pdf (read, local copy; L23.4, 3 PDF pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/fb48dd49e8649557f1715f0415de4f4d_MIT8_06S18ch8.pdf (read, local copy; printed pp. 154-158 read from the rendered page images, equation numbers taken from the images)
verdict: needs-changes
---

# Review: Permutation operators

Transcript citations use PDF page numbers (the clips have no printed footers; pages restart at 1 per clip). Every transcript citation on the page was checked against `pdftotext -f N -l N` output, and every notes citation against the rendered page (printed page = PDF page + 150). The author's notes.md was not used. Neither the transcripts nor chapter 8 carries a "rights reserved" or "Courtesy of" notice (the chapter has only "© B. Zwiebach", under the course's CC BY-NC-SA licence).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Flashcard 3 ("The notation $P_\alpha$ for $N$ particles"), last sentence | Notes p. 157: "All transpositions are also Hermitian, but an arbitrary product of them is not hermitian"; the adjoint of a permutation is its inverse (8.2.30)-(8.2.31). (Zwiebach does say loosely in L23.4 p. 1 "The transposition operators are the Hermitian ones".) | "all are unitary, only the transpositions are Hermitian." | False as stated: since $P_\alpha^\dagger = P_\alpha^{-1}$, every permutation that is its own inverse is Hermitian: the identity $P_{12\cdots N}$, and for $N \ge 4$ products of disjoint transpositions such as $P_{2143} = (12)(34)$, $P_{3412}$, $P_{4321}$ (checked: S₄ has 10 self-inverse elements, only 6 of them transpositions). Write "all are unitary; the transpositions are also Hermitian, but a general permutation is not" (as the Summary already does), or "Hermitian exactly when it is its own inverse". |
| 2 | warning | "Even and odd permutations", first paragraph: "Adding two transpositions ... changes nothing, so the number can grow by two without changing the permutation; it never changes by one." | L23.3 p. 4 offers the add-two-transpositions remark as making the result "kind of clear"; notes p. 157 simply state the decomposition is "unique (mod 2)". Neither proves it. | Presents the remark as if it established that the number "never changes by one". | The remark only shows the count *can* change by two; that it cannot change by an odd number is a theorem (e.g. a transposition always changes the number of inversions by an odd amount, or via the sign of a determinant, which links to the prerequisite `properties-of-determinants`). Say "Zwiebach finds this plausible ...; it is a theorem that the parity is fixed", or add one sentence of the inversion-count argument. |
| 3 | info | "The projectors S and A", last sentence: "The lecture comes back to these in Lecture 24." | Not checkable from the Lecture 23 sources; L23.4 p. 3 only says the N-particle projectors come next time. | States it as fact. | Uncertain, not an error: plausible from the L24 title in `_course.json`. Consider "The next lecture builds the N-particle versions of these projectors." |
| 4 | info | "Permutation operators acting on operators", end: "A Hamiltonian of two identical particles is symmetric in this sense, which is how this result will be used." | L23.2 p. 2 only says the tool helps you "understand what it means to have a symmetric Hamiltonian". | A forward-looking claim stated as the page's own. | Physically correct; fine as the page's own remark. Optional: "(as the next lecture uses)". |
| 5 | info | Theorem and "So the even and the odd permutations are equal in number, $N!/2$ each." | Theorem 8.2.1 has no restriction stated; the proof needs (12), i.e. $N \ge 2$. | Same. | Optional "(for $N \ge 2$)". |

No other differences. Every formula matches its cited equation and page, and every transcript citation is on the page cited.

## Formula and citation checks
- (8.2.7) $P_{21}|u_i\rangle\otimes|u_j\rangle = |u_j\rangle\otimes|u_i\rangle$: notes p. 154, correct. Transcript description of the prescription and "we never flip these things" at L23.1 p. 2: correct. (8.2.6) remark: p. 154, fair (the notes say "possibly distinguishable").
- (8.2.8) $P_{21}P_{21} = 1$, p. 154: correct; transcript p. 3: correct.
- Matrix element $\langle u_k u_l|P_{21}|u_i u_j\rangle = \delta_{kj}\delta_{li}$: p. 154, between (8.2.10) and (8.2.11), correct (same index order as the notes). Board computation at L23.1 p. 3: matches.
- (8.2.9), (8.2.11) Hermitian; (8.2.12) unitary, p. 154: correct. "Could be a symmetry", L23.1 p. 4: correct.
- (8.2.13) $S, A$, p. 155: correct. Orthogonal-projector definition: L23.1 p. 4 and notes footnote 2, p. 155: correct. (8.2.14) is in footnote 2 on p. 155: correct.
- "Range and null space are orthogonal", cite reading1 p. 5: board computation $\langle v|P^\dagger(1-P)|\tilde v\rangle = 0$ on L23.1 p. 5: correct.
- "S and A square to themselves", cite reading1 p. 6: L23.1 p. 6, correct (Hermiticity of S, A is on p. 5, as the page says "pp. 5-6").
- (8.2.15) $S^2 = S$, $A^2 = A$, $S + A = 1$, $SA = AS = 0$, and $P_{21}S = S$, $P_{21}A = -A$ just before it: p. 155, correct and correctly labelled as notes-only.
- $B_1$, $B_2$ definitions: p. 155 (unnumbered, written $B(1)$, $B(2)$), correct; the page notes the bracket notation.
- (8.2.17), (8.2.18), (8.2.19) on p. 156: correct. Transcript L23.2 pp. 1-2 (U and U† on operators, computation), p. 2 (reverse by multiplying, $O(1,2)$, conjugating each factor): correct.
- (8.2.20)-(8.2.21) on p. 156: correct; (8.2.21) is an "iff", so "Reading the steps backwards gives the converse" is supported by the notes. Transcript pp. 2-3: correct.
- $N!$, $S_N$, SU(2)/SO(3) comparison, finite discrete group: L23.3 p. 1, correct.
- (8.2.28) $P_{3142}|abcd\rangle = |cadb\rangle$, p. 157: correct (the notes' (8.2.27) is the $u_1\ldots u_4$ version). "People define them in different ways": L23.3 pp. 1-2, correct.
- Inverse $P_{2413}P_{3142} = 1$, cite reading3 p. 2: board/spoken check on L23.3 p. 2, correct.
- (8.2.23) $P_{231}P_{312} = 1$, p. 156: correct.
- (8.2.24)-(8.2.26) $P_\alpha$, p. 156: correct; the page's formula is (8.2.26) without the particle subscripts. "If $\alpha(1) = 3$ ...": L23.3 p. 3, correct.
- $S_3$ list: notes p. 157 and L23.3 p. 3, correct. (8.2.29) $(12) = P_{213}$, $(13) = P_{321}$, $(23) = P_{132}$: p. 157, correct.
- Transpositions Hermitian and unitary: L23.3 p. 3, notes p. 157, correct. Product of transpositions, all unitary, not all Hermitian ($x$, $p$): L23.3 pp. 3-4, correct. (8.2.30)-(8.2.31): p. 157, correct and labelled as notes-only.
- Parity: L23.3 p. 4, notes p. 157, correct (but see finding 2). $S_3$ parities and "worth doing the table": L23.3 p. 5, correct; Table 8.1 on p. 158, correct.
- Theorem 8.2.1, p. 158 and L23.3 pp. 5-6: correct. (8.2.32) on p. 158: correct (notes write $(12)\sigma = (12)\sigma'$; page uses $P_{21}P_\alpha$ and says the notes write (12)). Onto: notes p. 158 $\beta = (12)(12)\beta$ (unnumbered) and L23.3 p. 6: correct. "Two to two" joke: L23.3 p. 6, fairly paraphrased.
- Symmetric states, p. 158 and L23.4 pp. 1-2; untenable first guess and (8.2.33), L23.4 pp. 2-3 and p. 158; Sym^N V, Anti^N V, L23.4 p. 3 and notes p. 158: all correct.

## The lecturer's slips (verified)
- "p213": L23.3 p. 2 reads "So I claim that is the inverse of this operator, p213 is the inverse of this. So you can check it. Again, p2413 times p3142 ...". Real, and the page's bracket states it fairly (the operator he builds and checks is $P_{2413}$).
- Garbled $S_3$ list: L23.3 p. 3: "then you could cycle them, p321, p231" ... "The middle one, 312, yes. I was supposed to be cycling them, 312 and 231, yes. Otherwise I would have repeated that. Good eye." Real; the page's description ("the first list goes astray on the board and a student corrects it") is fair. The transcript does not show the student's words, only Zwiebach's reply "Good eye", which implies a correction from the audience; acceptable.

## Arithmetic and answer checks
All permutation results were recomputed by a script using the notes' convention (8.2.26), $P_\alpha|x_1\cdots x_N\rangle = |x_{\alpha(1)}\cdots x_{\alpha(N)}\rangle$, with the right-hand factor acting first. With this convention the script reproduces every entry of the notes' Table 8.1 (rows $A$, columns $B$, entries $A\cdot B$), so the convention and the table agree.
- $P_{3142}|abcd\rangle = |cadb\rangle$; $P_{2413}P_{3142} = 1$; inverse of $P_{3142}$ is $P_{2413}$: correct.
- $P_{231}P_{312} = 1$: correct.
- Worked example (a): $P_{231}P_{213} = P_{132}$ and $P_{213}P_{231} = P_{321}$: correct, and they match Table 8.1 (row $P_{231}$, column (12) = (23) = $P_{132}$; row (12), column $P_{231}$ = (13) = $P_{321}$). The intermediate kets ($|bac\rangle \to |acb\rangle$; $|bca\rangle \to |cba\rangle$) are right. Not commuting: right.
- (b): $P_{2341}|abcd\rangle = |bcda\rangle$, inverse $P_{4123}$ (checked: $P_{4123}P_{2341} = 1$), odd (3 inversions; three neighbour exchanges 12, 23, 34 take abcd to bcda), inverse also odd, 12 even permutations of 4 (counted): all correct.
- (c): $P_{21}|\psi\rangle = 0.6|{+}{-}\rangle + 0.8|{-}{+}\rangle$; $S|\psi\rangle = 0.7(|{+}{-}\rangle + |{-}{+}\rangle)$; $A|\psi\rangle = 0.1(|{+}{-}\rangle - |{-}{+}\rangle)$; inner product $0.07 - 0.07 = 0$; squared norms $0.98$ and $0.02$, sum 1 = $0.8^2 + 0.6^2$: all correct. "range and null space of $S$": $A|\psi\rangle$ is in the null space of $S$, correct.
- Quiz 1: $P_{4312}|abcd\rangle = |dcab\rangle$ = choice 2, correct. The explanation's claim that choice 0 ($|cdba\rangle$) is the other convention (state $k$ sent to position $\alpha(k)$: a→4, b→3, c→1, d→2) is correct.
- Quiz 2: answer 1 correct; $P_{231}$ is even (2 inversions), inverse $P_{312}$, not Hermitian; choices 0, 2, 3 are false. Explanation correct.
- Quiz 3: squared norm ½, answer 3, correct.
- Quiz 4: answer 0 correct; explanation correct.
- Flashcards 1, 2, 4: correct. Flashcard 3: wrong last clause (finding 1); the $P_{3142}$ example on it is correct.
- calcs file `calcs/8.06/permutation-operators.yaml`: all 15 entries match the page; `npm run calc:test -- -k permutation` passes. Its header claim that the permutation results were checked separately and agree with Table 8.1 is confirmed by the script above. (Minor: `ex-c-norm-psi` cites eq. (8.2.5) as the source of a normalization check; harmless.)

## Coverage and order
- The page follows MIT's order: L23.1 (P₂₁, Hermitian, unitary, projectors and the proof, S and A), L23.2 (action on operators, symmetric operators), L23.3 (N particles, notation, inverse, $P_\alpha$, $S_3$, transpositions, unitarity vs Hermiticity, parity, Theorem), L23.4 (symmetric and antisymmetric states, $\epsilon_\alpha$, Sym^N V and Anti^N V). Nothing in the four clips is left out.
- Notes 8.2.2 up to (8.2.33) are covered; notes-only material is labelled as such: (8.2.6), (8.2.15) with $P_{21}S = S$, $P_{21}A = -A$, (8.2.23), (8.2.30)-(8.2.31), Table 8.1 (referred to, not reproduced). Not mentioned: the notes' remark that the inverse of a permutation has the same parity (p. 157), though the worked example uses it; and that transpositions of consecutive labels suffice (p. 157), which the worked example also uses. Optional to add.
- (8.2.34) (N-particle $S$ and $A$) is correctly left to the next lecture.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the sources. Table 8.1 is not reproduced (only referred to); the $S_3$ list and (8.2.29) are standard content written in the page's own layout.
- Prose is the page's own; quoted fragments are short ("a bit of group theory", in quotation marks). No verbatim paragraphs from the transcript or notes found. Worked example is original (own permutations and own spin state).
- No OpenStax or LibreTexts material.

## Prerequisites, leadsTo and symbols
- Prerequisites all exist (`identical-particles-exchange-degeneracy`, 8.05 `nmr-tensor-products`, 8.05 `hermitian-unitary-position-states`, 18.06 `properties-of-determinants`) and are relevant.
- leadsTo 8.06 Lecture 24: consistent with L23.4 p. 3 ("construct the projectors ... an extra postulate") and the syllabus title. No cosmology callout; none is needed for this lecture.
- Symbols added for this page (checked against `git show HEAD:data/symbols.json`): all new meanings are scoped to `permutation-operators` and match the page (P₂₁, P₁₂₃, P₃₁₂, P₂₃₁, transpositions (12), (13), (23) mapped correctly to P₂₁₃, P₃₂₁, P₁₃₂; P₃₁₄₂, P₂₄₁₃, P₄₃₁₂, P₂₃₄₁, P₄₁₂₃ described position by position correctly; P_α, P_β, P_γ, ε_α, S_N, S₃, ψ_S, ψ_A, B₁ = B⊗1, B₂ = 1⊗B, Kronecker deltas). `dagger` and `otimes` only gained this page in their page lists. No issue found.

## Notes
- Severity summary: 1 error (flashcard 3), 1 warning (parity argument), 3 info.
- The permutation convention on the page (label = which state goes to each position; right factor acts first) is the notes' convention and reproduces Table 8.1 exactly; all composition, inverse and parity claims on the page are correct.

## Resolution (2026-11-18, by the page author)
- Finding 1 (error): flashcard 3 now says all permutations are unitary, the transpositions are also Hermitian, but a general permutation is not (it is Hermitian exactly when it is its own inverse), consistent with the Summary. The body text nowhere says "only transpositions" are Hermitian (it says "many are not even Hermitian" and "not all Hermitian"), so nothing else needed changing.
- Finding 2 (warning): the parity paragraph now presents the add-two-transpositions remark as Zwiebach's plausibility argument, says the fixed parity is a theorem the lecture and notes state without proof, adds the one-line inversion-count argument, and links Properties of determinants (18.06).
- Finding 3 (info): "The lecture comes back to these in Lecture 24" replaced by "Lecture 24 builds the N-particle versions of these projectors and returns to S + A = 1 for two particles" (checked against the Lecture 24 page: L24.2 transcript p. 4).
- Finding 4 (info): the Hamiltonian remark is now marked as the page's own, with what the lecture actually says.
- Finding 5 (info): the theorem now says "for N ≥ 2".
- Status set to reviewed.
