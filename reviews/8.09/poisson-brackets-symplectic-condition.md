---
page: content/year-4/8.09/poisson-brackets-symplectic-condition.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: local copy, page images of printed pp. 66-69 for every equation, text layer for Section 4.3 context)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_4/ (not fetched; it is the resource page of the same PDF)
verdict: pass-with-notes
---

# Review: Poisson brackets and the symplectic condition

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `data/symbols.json`, entry `d` scoped to this page | (not MIT) | The only meaning of `d` for this page is "Marks an infinitesimal change, as in dq or dt". The page also uses `d` as the bottom right entry of $M = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$ and in $ad - bc$ (section "Two consequences"); `a`, `b`, `c` all have a matrix-entry meaning, `d` does not. | Add "in the 2 × 2 matrix M, its bottom right entry" to the `d` meaning for this page (or a separate scoped meaning). |
| 2 | info | "From the symplectic condition to the brackets", bracketed slip note | Eq. (4.68) ends in $(M^\top JM)_{ij}$, "the same as Eq. (4.65)"; eq. (4.70) then also reads $M^\top JM = J$. | Says the chain gives $MJM^T$ (eq. (4.62)) and the notes' $M^TJM$ is a slip that does not affect the proof. | Verified correct (see checks). Optionally mention that (4.70) repeats the same form, since the page silently skips (4.70). |
| 3 | info | "The link to quantum mechanics" | "a popular approach (first studied by Dirac)" | "Dirac first proposed turning a classical theory into a quantum one ..." | Historically fair (Dirac 1925); slightly stronger wording than the notes. No change needed. |
| 4 | info | Notation throughout | $\mathbb{1}_{n\times n}$, $0_{n\times n}$, transpose $\top$ | $I_n$, $0_n$, superscript $T$ | Both are defined on the page; the change is harmless. Optional one-line note that the notes write a double-struck 1. |

No errors found in formulas, citations or physics.

## Formula and citation checks (against page images)
- (4.43) Poisson bracket, p. 66: matches, including the subscript $q,p$ and the order $\partial v/\partial q_i\,\partial u/\partial p_i$ of the second term.
- (4.44) p. 66, (4.48) p. 66, (4.49) p. 66: match. The page lists (4.45)-(4.47) in words with "for constants a and b", as the notes do.
- (4.50) cited in text, (4.51) p. 66: match; the page correctly notes the notes omit hats in (4.51).
- (4.52) p. 66: matches (the theorem with $Q_j(q,p,t)$, $P_j(q,p,t)$, "if and only if").
- (4.53) p. 66: matches ($I_n$ for $\mathbb{1}_{n\times n}$).
- (4.54) p. 67: matches; "det J = 1" stated in the notes on p. 67. "Orthogonal" is the page's word for $J^TJ = JJ^T = I$; correct.
- (4.55) p. 67: matches (the $\nabla_{\vec\eta}H$ alternative is described in words as "the gradient of H").
- (4.56)-(4.57), (4.58) p. 67, (4.60) p. 67: match. (4.59) is a repeat of (4.55) and is not cited; fine.
- (4.61) p. 68: matches term by term. (4.62) p. 68: matches. (4.63)-(4.64) p. 68: the page's prose derivation ($MJ = J(M^T)^{-1}$, multiply by $J$ on both sides, use $J^2 = -I$, get $JM = (M^T)^{-1}J$) is correct and agrees with (4.64). (4.65) p. 68: matches.
- (4.66), (4.67) p. 68: match.
- (4.68) p. 68: the page writes $(MJM^T)_{ij}$, the notes $(M^\top JM)_{ij}$. Checked: $(\partial\xi_i/\partial\vec\eta)_k = M_{ik}$, so $(\partial\xi_i/\partial\vec\eta)^T J\,\partial\xi_j/\partial\vec\eta = \sum_{kl} M_{ik}J_{kl}M_{jl} = (MJM^T)_{ij}$. The page is right and the notes have a slip; the page flags it honestly. Citing the page's corrected formula to (4.68) is acceptable given the bracketed note.
- (4.69) p. 68: cited in text, correct.
- (4.71)-(4.73) p. 69: the page's formula starts from the middle of (4.73) after stating the chain rule $\partial u/\partial\vec\eta = M^T\partial u/\partial\vec\xi$ (correct: $\partial u/\partial\eta_j = \sum_i M_{ij}\,\partial u/\partial\xi_i$). Matches.
- (4.74) p. 69 (in words, $V_\xi = |\det M|V_\eta$) and (4.75) p. 69: match.
- All printed page numbers verified against the image footers (p-07 = 66 ... p-10 = 69).

## Arithmetic and answer checks
- Worked example (a): $Q = q^2$, $P = p/(2q)$: $\{Q,P\} = 2q\cdot\frac{1}{2q} - 0 = 1$. Correct. This transformation is the page's own Section 4.1 worked example ($F_2 = q^2P$), confirmed in the previous page.
- Worked example (b): $\tan Q = m\omega q/p$ follows from the notes' $p = m\omega q\cot Q$ (Section 4.1); $P = (p^2 + m^2\omega^2q^2)/(2m\omega)$ follows from $H = \omega P$. Derivatives $\partial Q/\partial q = m\omega p/D$, $\partial Q/\partial p = -m\omega q/D$, $\partial P/\partial p = p/(m\omega)$, $\partial P/\partial q = m\omega q$ (with $D = p^2 + m^2\omega^2q^2$) all correct; bracket $= (p^2 + m^2\omega^2q^2)/D = 1$. At $q = 1$ m, $p = 2$ kg m/s, $m = 1$ kg, $\omega = 2$/s: $m\omega q = 2 = p$, $Q = \pi/4$, $P = 8/4 = 2$ J s (units of action, correct), each term $4/8 = 1/2$. All correct.
- Quiz 1: $\{q^2, p\} = 2q$; answer index 0 correct; distractors $-2q$, $2p$, $0$ all wrong. Explanation and product-rule check correct.
- Quiz 2: $\{Q,P\} = 2\cdot1 - 1\cdot a = 2 - a = 1 \Rightarrow a = 1$; answer index 1 = "$a = 1$" correct. $\det M = 2 - a$, so the det remark is right.
- Quiz 3: answer index 1 correct; $\det J = 1$ for the block matrix (checked: $\det\begin{pmatrix}0&I\\-I&0\end{pmatrix} = \det(I) = 1$).
- Quiz 4: $\{\eta_i,\eta_j\} = J_{ij}$ (eq. (4.67)); answer index 1 correct; explanation correct.
- Flashcards: all five statements correct.
- 2 × 2 claim: computed $M^TJM$ for $M = \begin{pmatrix}a&b\\c&d\end{pmatrix}$, $J = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$: $= \begin{pmatrix}0 & ad-bc\\ -(ad-bc) & 0\end{pmatrix} = (ad-bc)J$. Correct; "preserves areas (and orientation)" follows from $\det M = 1$.
- Graph: $Q = 2\cos s + \sin s$, $P = \cos s + \sin s$ is the stated map applied to the unit circle; $\det M = 2 - 1 = 1$; enclosed area $\pi$. Image extent $|Q| \le \sqrt5 \approx 2.24$, $|P| \le \sqrt2$, inside domain $[-3,3]$ and range $[-2.5,2.5]$.
- Calcs file: entries agree with the page. Info: `twobytwo-symplectic` compares `aa*dd - cc*bb` with `aa*dd - bb*cc`, which is true by commutativity and does not test the matrix product; the claim itself was verified by hand above. Consider replacing it with an explicit entry of $M^TJM$ (e.g. `aa*(cc*0 + dd*1) + cc*(-aa*1 ... )` written out) if a real check is wanted.

## Coverage and order
- The page follows Section 4.2 in order: definition (4.43), fundamental brackets (4.44), properties (4.45)-(4.49), commutator and canonical quantization (4.50)-(4.51), theorem (4.52), notation (4.53)-(4.55), time-independent proof (4.56)-(4.65), matrix Poisson bracket (4.66)-(4.69), and the two consequences (4.71)-(4.75). The worked example is inserted after the theorem, an addition clearly marked as the page's own.
- Not covered: (4.59) (a restatement of (4.55)) and (4.70) (a restatement in the slipped form). Nothing of substance omitted.
- Claim "Section 4.3 indicates how the argument extends to time-dependent transformations, referring to Goldstein": verified, the notes' Section 4.3 (text layer, near eq. (4.99)) says "This logic can be used to extend our proof of the Theorem in Section 4.2 to fully account for time dependent transformations. (see Goldstein)."
- Claim "Section 4.3 shows that the motion is indeed a canonical transformation": verified (Section 4.3: the Hamiltonian is the generator of time evolution; the infinitesimal transformation it generates corresponds to the physical motion).
- leadsTo (8.09 Section 4.3): its description (time derivative as a bracket with H, conservation laws, H generating the motion) matches Section 4.3's content.

## Licensing
- No rights-reserved or courtesy notices in Section 4.2 (course lead's check; nothing seen on the four page images either).
- Paraphrase: no copied sentences. Closest wordings are standard terms ("equal footing", "canonical invariants", "symplectic condition", "canonical quantization"). The notes' "Here we can multiply functions in either order" is rewritten.
- Worked example and graph are original (own transformation pairs, own numbers, own linear map); the graph is generated from formulas.
- No OpenStax or LibreTexts material.

## Notes
- Linked pages exist: `content/year-3/8.05/time-evolution-heisenberg-picture.mdx` (shows $[\hat x_H, \hat p_H] = i\hbar$ and the Heisenberg equation, and mentions Poisson brackets, so "the quantum side of this correspondence" is fair) and `content/year-3/8.044/microcanonical-ensemble.mdx` (has a "Liouville's theorem" section and uses it to justify the equilibrium density, so "uses the theorem" is accurate). Link format `/courses/8-05/...`, `/courses/8-044/...` matches other pages.
- No em dashes in the page. Attribution is honest ("the notes prove", "the notes print"), and the departure from the notes at (4.68) is stated in brackets as required by writing rule 4.
- Symbol meanings scoped to this page (about 65) were read; apart from item 1 (`d`) they fit the page's usage. `omega`'s text ("ω = √(k/m)") is accurate though the page itself does not write k; `i` covers both the index and the imaginary unit in iħ; `s` covers both the worked-example substitution and the graph parameter.

## Resolution (2026-11-19, by the page author)

- Warning (d meaning): added the meaning "The bottom right entry of a 2 × 2 matrix." for d, scoped to this page, beside the infinitesimal-change meaning.
- Info (eq. (4.70)): the bracket about the (4.68) slip now says that eq. (4.70) repeats the slipped form.
- Info (Dirac): "Dirac first proposed" changed to "Dirac was the first to study", closer to the notes.
- Info (calcs tautology): `twobytwo-symplectic` now sums the (1,2) entry of MᵀJM term by term with the entries of J, so it tests the product.
- Info (notation): left as it is; both I_n and the superscript T are defined on the page.
- Status set to reviewed.
