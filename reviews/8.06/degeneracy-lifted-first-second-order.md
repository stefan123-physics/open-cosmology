---
page: content/year-3/8.06/degeneracy-lifted-first-second-order.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l3-1/ (resource page not fetched; the four segment transcripts below were read)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/1a2b132f3bbea0a2e5d37a66fb32024c_R6RePgr4oBo.pdf (read from a local copy: L3.1 transcript "Remarks on a 'good basis'", 5 pages, checked page by page with pdftotext -f/-l; that the URL serves this file was not re-checked online)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/25eb37b2107d4e74d5ed6f13f675f0a7_Du9eDHwGeAw.pdf (read from a local copy: L3.2 transcript, 6 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/3eb28fc753ecac4a502bfd6c5e6b5852_A4-kg_F34qc.pdf (read from a local copy: L3.3 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/22c56bf0564af21d133b219313380eb3_nYlmkoiq4CI.pdf (read from a local copy: L3.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-1-non-degenerate-and-degenerate-perturbation-theory/ (read: MIT8_06S18ch1.pdf, pp. 17-24 as text; pp. 18-24 also rendered as images to read every cited equation exactly)
verdict: pass-with-notes
---

# Review: Degenerate perturbation theory: good bases, first and second order

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Step three" and "When the degeneracy survives first order" | L3.1 p. 1 recaps the order-λ and order-λ² equations; L3.3 p. 3 writes them again for the unknown states (notes eqs. (1.2.21)-(1.2.22) and (1.2.48)). The Lecture 2 review's resolution says (1.2.22) was left out "on purpose. It is used in Lecture 3, whose page will state it." | The page projects "the order-λ² equation" three times (and the order-λ equation twice) but never writes either one. The reader cannot follow "its left side vanishes" or "the term with E⁽¹⁾ drops out" without it. | Add one `<Formula>` before "Step two" with the order-λ and order-λ² equations, cite reading5 eqs. (1.2.21), (1.2.22) (L3.1 transcript pp. 1-2). Optionally add the λ² line of (1.2.48) for the ψ_I states in the last section (L3.3 transcript p. 3). |
| 2 | info | "Where we left off", sentence on other degeneracies in V̂ | L3.1 p. 1: "You focus on a particular non-degenerate space. Whether there are other non-degenerate spaces doesn't matter." (a slip: he means *degenerate*) | "degenerate perturbation theory looks at one degenerate level at a time and treats the rest as the rest" | The page is right and the lecture misspoke. Writing rule 4 asks for a brief bracket when the page differs from the lecture because of a slip, e.g. "(In the recording Zwiebach says 'non-degenerate' here; he means degenerate.)" Optional. |
| 3 | info | "A shortcut" and quiz 1 | Notes (1.2.29) name the K eigenvalues λ_p, λ_q; on the board (L3.1 p. 4) Zwiebach uses [K, δH], which gives (λ_p − λ_q) | κ_p, κ_q, commutator [δH, K], factor (κ_q − κ_p) | Correct and identical to notes (1.2.29) apart from the letter. The page's bracket says only that "on the board" the letter is lambda; the notes use lambda too. Could say "(Zwiebach, on the board and in the notes, writes these eigenvalues as λ …)". |
| 4 | info | Formula "δH on a degenerate basis state", cited (1.2.28) | The step in L3.2 pp. 3-4 / notes uses the bra form (1.2.34) and the result (1.2.35) | (1.2.28), the ket form | Correct as cited ((1.2.28) is what the page writes). Optionally add "(the bra form is eq. (1.2.34))". |
| 5 | info | "Degenerate perturbation theory with the degeneracy lifted at first order", cited (1.2.41) | Notes write the λ² term as δH_{nk,p} δH_{p,nk}; the box also gives the full first-order state | \|δH_{p,nk}\|², energy only | Equal by Hermiticity; the state half of the box is described in words ("corrected at order λ by the two pieces above"). Fine. |
| 6 | info | Quiz 1 and the commuting-operator formula | Notes use p, q for two degenerate states too | ⟨n⁽⁰⁾;p\|, \|n⁽⁰⁾;q⟩ for degenerate states, while \|p⁽⁰⁾⟩ elsewhere means a state of V̂ | Same clash as the notes. Using q, r (or k, l) for the degenerate states would avoid it. Optional. |

## Arithmetic and answer checks
- Every displayed formula was re-derived from the order-λ and order-λ² equations, not only matched to the notes:
  - (1.2.24)/(1.2.25), (1.2.27), (1.2.29) [sign: ⟨p\|δH K − K δH\|q⟩ = (κ_q − κ_p)δH_pq], (1.2.31), (1.2.32), (1.2.28): correct.
  - Master equation (1.2.36): from 0 = ⟨n;l\|(E⁽¹⁾_{n,k} − δH)\|n⁽¹⁾;k⟩ + E⁽²⁾_{n,k}δ_lk with (1.2.32): the V̂ piece gives +Σ_p δH_{nl,p}δH_{p,nk}/(E_p − E_n), the V_N piece (E⁽¹⁾_{n,k} − E⁽¹⁾_{n,l})⟨n;l\|n⁽¹⁾;k⟩. Correct, signs as in the notes.
  - (1.2.37) (l = k) and (1.2.39) (l ≠ k): correct. The order-counting remark (two powers of δH over one) is correct.
  - (1.2.41) energy line: correct.
  - (1.2.42), (1.2.44), (1.2.46), (1.2.54): correct.
  - (1.2.60)-(1.2.62): re-derived from (1.2.56)-(1.2.59): −Σ_p δH_{nl,p}⟨p\|ψ_I⁽¹⁾⟩ + E⁽²⁾ a_{Il} = 0 with (1.2.54) gives Σ_k (M_lk − E⁽²⁾δ_lk) a_Ik = 0. Correct. M⁽²⁾ is Hermitian (M_lk* = M_kl): correct.
  - The page only names (1.2.63)-(1.2.65). I checked (1.2.65), the third-order energy, by deriving it from the λ³ equation (the a⁽¹⁾_{I,J} terms drop out because M⁽²⁾ is diagonal in the good basis). It is correct. I did not check (1.2.64). Small slip in the notes, not carried onto the page: (1.2.63) ends "+ λ³E⁽³⁾ + … O(λ³)", where O(λ⁴) is meant.
- Notes slips: no slip in any equation the page cites (unlike Lecture 2's (1.1.46)).
- Worked example, recomputed (NumPy, full 3×3 diagonalization as well):
  - λ²M⁽²⁾ = −[[0.0009, 0.0012], [0.0012, 0.0016]] eV: correct.
  - Eigenvalues 0 and −0.0025 eV; eigenvectors (4, −3)/5 and (3, 4)/5: correct (the matrix has rank 1, trace −0.0025).
  - Dark combination: 0.03×4 − 0.04×3 = 0. Bright coupling: 0.03×0.6 + 0.04×0.8 = 0.05 eV = √(0.03² + 0.04²). Correct.
  - First-order admixture −0.05\|3⟩ (from (1.2.54) with λ absorbed): correct.
  - Exact: the 3×3 matrix [[0,0,0.03],[0,0,0.04],[0.03,0.04,1]] has eigenvalues −0.00249378, 0 (to 1e-19), 1.00249378 eV. So the dark state is exact at 0, and ½(1 − √1.01) = −0.0024938 ≈ −0.00249 eV: correct.
  - Relative difference 0.0025/0.0024938 − 1 = 0.249 % ("about 0.25 %"): correct. 1/0.05 = 20: correct.
  - (a): δH = 0 inside the pair, so E⁽¹⁾ = 0 for both and every basis is diagonal: correct. The example really is "degeneracy lifted at second order", as the eigenvalues of M⁽²⁾ differ.
  - The example is the page's own (MIT gives no worked example in Lecture 3; L3.3 p. 2 mentions only a two-dimensional illustration with (1,1), (1,−1)).
- Quiz 1: answer 0 correct; explanation correct, including the "if the first-order shifts all differ" caveat.
- Quiz 2: answer 0 correct (notes (1.2.38)-(1.2.39), L3.2 pp. 5-6).
- Quiz 3: answer 0 correct (1.2.37); distractor 4 correctly rejected (division by zero).
- Quiz 4: answer 0 ("0 and −2.5 meV") correct; −0.9/−1.6 meV are the diagonal entries, not eigenvalues; the other two distractors are wrong because the trace is −2.5 meV and the determinant 0.
- Flashcards: all four are correct. The "good basis" card matches notes remark 1 (p. 18), card 3 matches (1.2.32), card 4 matches (1.2.60)-(1.2.62).
- Calcs file `calcs/8.06/degeneracy-lifted-first-second-order.yaml`: every expected value recomputed by hand and agrees; `pytest tests/calc -k degeneracy-lifted` passes (15 tests). `exact-lower` (−0.00249) and `agreement` (0.25) use the default half-last-digit tolerance and pass with margin (differences 3.8e-6 and 6e-4). Minor (info): `quiz-wrong-diagonals` checks only −0.9 meV, not −1.6 meV; `commutator-rule` and `second-order-vs-exact` are weak spot checks (the first is trivially an identity), which is acceptable.

## Citation checks
- Equation numbers checked against the rendered notes pp. 18-24: (1.2.24), (1.2.25), (1.2.27), (1.2.28), (1.2.29), (1.2.31), (1.2.32), (1.2.36), (1.2.37), (1.2.39), (1.2.41), (1.2.42), (1.2.44), (1.2.46), (1.2.54), (1.2.60), (1.2.61), (1.2.62), plus (1.2.63)-(1.2.65) in the prose. All correct.
- Transcript pages, each checked with `pdftotext -f N -l N`:
  - L3.1: p. 1 (set-up, V_N and V̂, single-label \|p⁽⁰⁾⟩); p. 2 (δH diagonal); pp. 2-3 (lifted degeneracy, fan-out, "valid even if the degeneracy is not lifted" on p. 3); pp. 3-5 (the K rule; L_z and hydrogen on p. 3 and p. 5).
  - L3.2: p. 1 (orthogonality, V_N piece); p. 2 (energy difference nonzero, the sum); pp. 2-3 ("technically wrong" p. 2, "I was sloppy when I first solved those equations" p. 3); pp. 3-5 (step 3, resolution of the identity p. 4, master equation p. 5); p. 5 (l = k and the inconsistency); p. 6 (dividing, order counting).
  - L3.3: pp. 1-2 (not lifted; no textbook p. 1; homework p. 1); p. 4 (the V̂ piece).
  - L3.4: pp. 1-2 (λ² projection, M⁽²⁾, eigenvalue problem); pp. 2-3 (rest of the states; exercises p. 3).
  - All correct.
- Claims attributed to Zwiebach:
  - "admits he once made [the mistake] himself" (L3.2 p. 3): supported.
  - "knows no textbook that treats this case to the end" (L3.3 p. 1: "It's not in any of the textbooks that I know … doesn't quite do everything till the bitter end"): a fair summary.
  - "the homework has cases of it" and "this happens often" (L3.3 p. 1): supported.
  - "This will be the working tool for the hydrogen atom" (L3.1 p. 3): supported.

## Coverage and order
- Order follows L3.1 → L3.2 → L3.3 → L3.4 and notes §1.2.2 (remarks 1-3, steps 2-3) and §1.2.3. The L3.1 remarks are in the same order: lifting, then "good basis", then the K rule.
- Omitted:
  - The perturbative equations themselves (finding 1).
  - (1.2.40) and the state half of the (1.2.41) box (described in words).
  - The orthonormality condition (1.2.45) (notes only).
  - Zwiebach's two-dimensional illustration of a "jump" to the good basis (L3.3 p. 2).
  - His aside that a degeneracy surviving to second order is outside the treatment (L3.3 p. 1). The page does say "we assume" the levels separate at λ².
  - The last three omissions are acceptable (info).
- Added beyond MIT: the worked example (own) and the remark that δH is diagonal in every basis when the shifts are equal (implied by L3.3 p. 2 and notes (1.2.42)). Fine.

## Licensing
- `grep -il "rights reserved\|courtesy"` on all four transcripts and chapter 1 of the notes: no notices. No figure is reused (the notes have none in §1.2.2-1.2.3).
- No OpenStax or LibreTexts material.
- No verbatim paragraphs. I spot-checked sentences against the notes and transcripts: the good-basis definition, the order-counting paragraph (closest to the notes' wording: shares "two powers of δH" and "properly first order", the rest rewritten) and the "Step two" paragraph. All are paraphrased; only short standard phrases are shared ("master equation", "good basis").

## Forward links
- `leadsTo` 8.06 Lecture 4 ("Hydrogen fine structure: scales, coupled basis, Pauli and Dirac equations" in `_course.json`): "the good basis there is the coupled basis of total angular momentum" is standard physics, and it matches L3.1 p. 3 ("very useful in about a week, when we apply some of these things to the hydrogen atom"). The Lecture 4 transcripts were not read, so the exact wording of that lecture is not verified (uncertain, low risk).
- No `Callout kind="cosmology"`; none is needed for this lecture.

## Notes
- The page's choice of κ for the K eigenvalues (to avoid a clash with the perturbation parameter λ) is a sensible improvement and is flagged on the page.
- The summary bullet "certifies a good basis without diagonalizing" is correct only with the lifted-degeneracy assumption that the bullet itself states. Quiz 1 and flashcard 2 word it carefully.
- The URL-to-file mapping of the four transcript PDFs was not checked online. The local copies' title lines (L3.1-L3.4) match the page's reading titles.

## Resolution (2026-11-18, by the page author)

Warning:
1. The order-λ and order-λ² equations are now written out in "Where we left off", as one `<Formula>` citing notes eqs. (1.2.21), (1.2.22) and L3.1 pp. 1–2, with the convention that each correction is orthogonal to |n⁽⁰⁾;k⟩.

Info:
- The L3.1 p. 1 slip ("non-degenerate space" for the degenerate subspace) is now noted in brackets.
- The bracket on the eigenvalue letter now says that both the board and the notes use λ.
- The (1.2.28) step now adds that the bra form, notes eqs. (1.2.34), (1.2.35), is what lets δH act as the number E_n,l⁽¹⁾.
- |δH_p,nk|² for δH_nk,p δH_p,nk (equal by Hermiticity) and the double use of p (as in the notes) are left as they are.
