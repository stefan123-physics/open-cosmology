---
page: content/year-3/8.06/nondegenerate-perturbation-theory.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l1-1/ (read: resource page, title and CC BY-NC-SA 4.0 licence confirmed)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/1a90d86f5c96ff9949cd7be671d69ae5_OZXEb8FxZQ.pdf (read: L1.1 transcript, 6 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/771e18a0a772db645ab2f3b377c6c4ec_dodj1I-IjWM.pdf (read: L1.2 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/bc40405cb7bdba2738f043e477b2f66f_-pMowqywuIY.pdf (read: L1.3 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/39386fea86a9df20331980403abbe33a_bTZbn7M2Hc.pdf (read: L1.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-1-non-degenerate-and-degenerate-perturbation-theory/ (read: notes chapter 1, eqs. (1.0.1)-(1.1.45) and Figures 1.1-1.2)
  - L2.1-L2.4 and L3.1-L3.4 transcript titles and L2.1 text (read, to check claims about later lectures)
verdict: pass-with-notes
---

# Review: Non-degenerate perturbation theory

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The perturbative equations", paragraph defining a non-degenerate state (cited "L1.1 transcript p. 6") | The definition of a non-degenerate state (strict inequalities) and the introduction of n(λ), E_n(λ) are on L1.1 p. 5; the power-series ansatz is on p. 6 | Whole paragraph cited to p. 6 | Cite "L1.1 transcript pp. 5–6" |
| 2 | info | Opening paragraph, "notes section 1.1" | The motivating examples, eqs. (1.0.1)–(1.0.2) and Figure 1.1 are in the chapter introduction, before section 1.1 begins | "notes section 1.1" | "notes chapter 1 introduction and section 1.1" |
| 3 | info | "The second-order energy", last paragraph: "the ground state is always pushed down at second order" | Notes Remark 1 (eq. 1.1.40): each term is negative; the correction is zero if every δH_k0 vanishes. The same paragraph of the page already says "never positive" | "always pushed down" | "never pushed up" or "pushed down (or left unchanged)" to match the quiz answer "Negative or zero" |
| 4 | info | Worked example, step (b): "all higher corrections vanish" | (Page's own example.) For the field-shifted oscillator, all energy corrections beyond second order vanish, but the state corrections do not (the displaced ground state has components along every \|k⁽⁰⁾⟩) | "all higher corrections vanish" | "all higher energy corrections vanish" |
| 5 | info | Flashcard 1 back: "set each power of λ to zero" | L1.2 p. 2 / notes p. 5: the coefficient of each power of λ must vanish | "set each power of λ to zero" | "set the coefficient of each power of λ to zero" |
| 6 | info | "What can happen to the spectrum": four-fold level splits "three plus one at first order" | The transcript (L1.1 p. 4) does not say at which order; the notes (text with Figure 1.1, p. 3) say the split into 3 + 1 is at first order and the three split at second order | Matches the notes; cited to both | None needed; the page's "only at higher order" is a little vaguer than the notes' "to second order" |

I found no formula, sign or equation-number errors. Formula by formula:
- (1.0.2) H(λ) = H⁽⁰⁾ + λδH, λ ∈ [0, 1]: matches notes eq. (1.0.2) (the interval is stated in the text just above it).
- (1.1.1) eigenstates and orthonormality: matches.
- (1.1.7) the ansatz: matches.
- (1.1.13) the λ⁰, λ¹, λᵏ equations: match the notes (which also list λ², λ³). The sign convention (E_n⁽¹⁾ − δH on the right) is the same as on the board (L1.2 p. 2).
- (1.1.14) orthogonality choice: matches.
- (1.1.21) E_n⁽¹⁾ = ⟨n⁽⁰⁾|δH|n⁽⁰⁾⟩: matches.
- (1.1.26) E_n⁽ᵏ⁾ = ⟨n⁽⁰⁾|δH|n⁽ᵏ⁻¹⁾⟩: matches.
- (1.1.30), (1.1.31) δH_kn and Hermiticity: match (the notes use the indices m, n; same definition).
- (1.1.32) components of |n⁽¹⁾⟩: matches, including the sign.
- (1.1.34) |n⁽¹⁾⟩: matches.
- (1.1.35), (1.1.36) E_n⁽²⁾: the page's first equality is (1.1.23)/(1.1.35) and the final form is (1.1.36); correct.
- (1.1.37): the page gives only the energy line of (1.1.37); correct as quoted.

Transcript page citations, all checked against the PDF pages: L1.1 pp. 1–2 (examples), pp. 2–3 (the two roles of λ), pp. 3–5 (spectrum picture), p. 5 (unperturbed basis, ordering with ≤); L1.2 pp. 1–2 (order-by-order equations), p. 3 (recursive solution), pp. 3–4 (orthogonality: the vague argument, then the "add c|n⁽⁰⁾⟩" argument); L1.2 p. 4 + L1.3 p. 1 (first-order energy); L1.3 pp. 1–2 (order-k energy); L1.4 p. 1 (components along ⟨k⁽⁰⁾|), p. 2 (energy denominators, "interesting and difficult", degeneracy among other states harmless), p. 3 (second-order energy). All correct apart from finding 1.

Lecturer slip: the page's bracketed note on L1.4 is accurate. In L1.4 p. 2 Zwiebach writes δH_nk in the formula for |n⁽¹⁾⟩, and on p. 3 says "I have kn. I copied it wrong" before using δH_nk = (δH_kn)*. The page's formula uses the correct δH_kn. A second, harmless slip: in L1.1 p. 3 he says the meaning of "small" will be clarified "by the end of this lecture", but it comes in L2.1. The page correctly says "the next lecture returns to this".

## Arithmetic and answer checks
- Example (a): ⟨0|x̂|0⟩ = 0; x̂|0⟩ = √(ħ/2mω)|1⟩, so |δH_10|² = q²ℰ²ħ/2mω and E_1⁽⁰⁾ − E_0⁽⁰⁾ = ħω, which gives E_0⁽²⁾ = −q²ℰ²/2mω². Correct.
- Example (b): ½mω²x² − qℰx = ½mω²(x − qℰ/mω²)² − q²ℰ²/2mω². Correct. Second order is exact for the energy (see finding 4 for the wording).
- Example (c), recomputed with ħ = 1.054571817×10⁻³⁴ J s: ω = 1 eV/ħ = 1.519×10¹⁵ s⁻¹ (page 1.52×10¹⁵ ✓); shift = (1.602×10⁻¹⁹)²(10⁷)²/(2 · 9.109×10⁻³¹ · ω²) = 6.10×10⁻²⁵ J (page 6.1×10⁻²⁵ ✓) = 3.81×10⁻⁶ eV (page 3.8×10⁻⁶ ✓). "A few millionths of the level spacing" (spacing 1 eV): ✓. As a further check, the mixing ratio |δH_10|/ħω ≈ 1.95×10⁻³, so the perturbation really is small.
- The calcs file (calcs/8.06/nondegenerate-perturbation-theory.yaml) covers every number and both identities in the example, plus a 2×2 check of the second-order formula. Its entries match the page. Minor bookkeeping only: the `complete-square` entry gives `source: reading5 eq. (1.1.36)`, which is not where completing the square comes from (it is the page's own step), and `second-order-matrix` is marked `origin: mit` although the 2×2 matrix is a check the page author built (the notes' own 2×2 example, eqs. (1.1.43)–(1.1.45), belongs to Lecture 2). Info only.
- Quiz 1 (answer 0, ⟨n⁽⁰⁾|δH|n⁽⁰⁾⟩): correct; explanation correct.
- Quiz 2 (answer 0, adding c|n⁽⁰⁾⟩ gives another solution): correct; this is Zwiebach's precise argument (L1.2 pp. 3–4). The distractor "states must stay normalized" is correctly wrong (the notes say explicitly that |n(λ)⟩ is not normalized).
- Quiz 3 (answer 0, a denominator vanishes): correct (L1.4 p. 2; notes after eq. 1.1.34).
- Quiz 4 (answer 0, "negative or zero"): correct (notes eq. 1.1.40).
- Flashcard 2: all four formulas correct, including signs.
- Summary frontmatter: weight δH_kn/(E_n⁽⁰⁾ − E_k⁽⁰⁾) = −δH_kn/(E_k⁽⁰⁾ − E_n⁽⁰⁾). Consistent.

## Coverage and order
- The page follows L1.1 → L1.2 → L1.3 → L1.4 in order: motivation and examples; λ and its two roles; picture of the spectrum (non-degenerate, split pair, 3 + 1 split, the x², x⁴, x⁸ analogy); unperturbed basis and the definition of non-degeneracy; ansatz; order-by-order equations; recursive structure; orthogonality choice (both arguments); E⁽¹⁾; E⁽ᵏ⁾; components of |n⁽¹⁾⟩ and energy denominators; |n⁽¹⁾⟩ through the resolution of the identity; E⁽²⁾ and its reality; summary to O(λ²). Nothing from Lecture 1 is missing.
- Additions beyond the transcript: the superscript-sum consistency check (from the notes, p. 5, ✓); the remark that E⁽²⁾ is manifestly real (notes after eq. 1.1.36, ✓); the ground-state sign of E⁽²⁾ (notes Remark 1, eq. 1.1.40, which Zwiebach covers at the start of L2.1). This addition is short, and the page points to the next lecture for it. Fine.
- Not on the page (all belong to Lecture 2 or are exercises): the first-order overestimate of the ground state (1.1.38–39), level repulsion (1.1.41), Exercises 1–2, validity of the expansion (§1.1.1). Leaving them out is correct for a Lecture 1 page.
- Claims about later lectures: "degenerate perturbation theory (the next two lectures)" is right (L2.3–L2.4, L3.1–L3.4); "a more careful version" for splitting only at higher order is right (L3.3–L3.4, "Degeneracy resolved to second order"); "what small means … the next lecture returns to this" is right (L2.1 "Remarks and validity of the perturbation series"); "the next lecture explains why [the ground state goes down]" is right (L2.1 p. 1). leadsTo (8.06 Lecture 2: validity, anharmonic oscillator, degenerate theory) matches the L2.1–L2.4 titles.
- No `Callout kind="cosmology"`. Acceptable: the page makes no cosmology claims, so there is nothing to check.

## Licensing
- The L1.1 resource page carries CC BY-NC-SA 4.0. None of the four transcripts or notes chapter 1 has an "All rights reserved" or "Courtesy of" notice (grep checked). The notes carry only the author line "© B. Zwiebach" under the course's CC licence.
- No figure is reproduced. Figure 1.1 is described in words only.
- No verbatim copying found. Short paraphrases that stay close to the source: "make life both interesting and difficult" (attributed: "as Zwiebach puts it") and "the most widely used tool…" (own wording). Both are acceptable.
- The worked example (charged oscillator in a uniform field) is not in notes chapter 1 or the L1 transcripts. It is a standard textbook exercise, written here with the page's own numbers. No OpenStax or LibreTexts material.

## Notes
- Prerequisite slugs exist (content/year-3/8.05/ground-state-bounds-spectral-theorem.mdx, content/year-2/8.04/creation-annihilation-operators.mdx).
- No em dashes on the page.
- "Physically, it is like the strength of an applied field": the transcript (L1.1 p. 2) says only "an extra parameter of the physics". The field image comes from the notes (p. 2, "an atom in an external magnetic field that can be varied continuously"), so it is supported.
- The page cites transcript pages as PDF pages of each segment transcript. The PDFs have no printed footers, so the PDF page is the only page number available.
- The issues are all minor (finding 1 is a citation refinement); no errors.

## Resolution (2026-11-18, by the page author)

1. The non-degenerate definition now cites L1.1 transcript pp. 5–6.
2. The opening now cites "notes chapter 1, introduction and section 1.1".
3. "Always pushed down" is now "never pushed up" at second order.
4. Example step (b) now says all higher **energy** corrections vanish (the state corrections do not).
5. Flashcard 1 now says "set the coefficient of each power of λ to zero".
6. No change needed (the 3 + 1 split is from the notes, which the page cites).

Calcs: `second-order-matrix` is now `origin: page-own`. The `complete-square` entry keeps its source citation (the second-order formula it supports) and is already marked `page-own`.
