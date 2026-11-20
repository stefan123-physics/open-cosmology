---
page: content/year-4/8.07/rotations-index-notation.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln2/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/f6b37803c7e97ba1689313a270ad2b82_MIT8_07F12_ln2.pdf (read, local copy; 4 PDF pages = printed pp. 1-3 + OCW citation page; text extracted with pdftotext, all pages rendered with pdftoppm at 110 dpi, the p. 2 figure again at 300 dpi)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/video_galleries/video-lectures/ and .../pages/lecture-summaries/ (read, only to check the leadsTo and callout claims about 8.962 Lectures 1-2)
verdict: needs-changes
---

# Review: Rotations in index notation

Lecture Notes 2 are typed, three content pages (printed "p. 2", "p. 3" running heads; p. 1 has none; printed page = PDF page). Equations (2.1)-(2.2) are on p. 1, (2.3)-(2.8) on p. 2, (2.9)-(2.10) on p. 3; (2.8) and (2.10) are boxed. The diagonal-term formula on p. 3 is unnumbered. All 12 `<Formula>` citations were checked against the rendered pages and are correct in equation number, page and content (signs of (2.3) and (2.5), the minus sign of the ε term in (2.10), R_z(φ)_ij with i rows and j columns). The author's notes.md was not used. No "rights reserved" or "Courtesy of" notice anywhere in the PDF; the only figure (p. 2) is Guth's own and is not reproduced.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The rotated basis vectors", bracket after Eq. (2.3): "[The figure in the notes labels the unit vector along the $x$ axis $\hat e_z$; it should be $\hat e_x$ ...]" | The p. 2 figure labels the unit vector along the x axis **ê_x** (checked on the page rendered at 300 dpi: labels ê_y, ê′_y, ê′_x, ê_x, axes x and y, "z out of the page"). There is no slip. (The garbled pdftotext output may have suggested one; the image does not.) | Attributes a non-existent slip to Guth. | Delete the bracket. |
| 2 | warning | "Index notation in brief" (first section) | LN2 never defines the summation convention, δ_ij or ε_ijk (δ and ε appear only in the aside on p. 3; "j is summed ... since it is a repeated index" is the only hint, p. 3). LN1 does not define them either (searched). ê_i·ê_j = δ_ij is not in the notes. | Opens with "The notes use three pieces of notation without stopping to define them, so here they are." This implies, but does not plainly say, that the section is the page's addition, and it comes before the first section that follows the notes. | Make it explicit, e.g. "(This section is this page's addition; the notes take the notation as known.)" The content of the section is correct (cyclic/anticyclic orders of ε, δ as identity entries, free and dummy indices). |
| 3 | warning | leadsTo 8.962 Lecture 1, `why`; cosmology callout | OCW 8.962 (Spring 2020) lecture summaries: Lecture 1 "Introduction and the Geometric Viewpoint on Physics" covers Lorentz transformations, 4-vectors, "component notation", the inner product and the metric tensor; Lecture 2 is "Introduction to Tensors" (1-forms, tensors, raising and lowering indices). | `why`: "General relativity is written in index notation from its first lecture: quantities are tensors, defined by how their components change under a change of coordinates". Callout: "quantities such as the metric are tensors defined by how their components transform". | "Index notation from the first lecture" is supported (component notation, Lorentz transformations, metric in Lecture 1). Tensors proper start in Lecture 2, and 8.962 announces a geometric viewpoint, in which tensors are usually introduced as geometric objects (linear maps) whose components then transform in a definite way. Uncertain: I did not read the 8.962 lectures themselves. Suggest pointing the leadsTo to Lecture 2 (or adding it), and softening to "tensors, whose components change in a definite way under a change of coordinates". |
| 4 | info | "Rotating a vector by rotating its basis": "This works because a rotation is linear ..." | The notes simply assert that the same coefficients with rotated basis vectors give the rotated vector (p. 1). | Adds a justification (linearity). | Correct physics; fine as the page's own explanation. Optionally mark it as such. |
| 5 | info | "Rotation about any axis": "Guth's argument needs a little more about rotational invariance than the course covers" | p. 3: "If we knew just a little more about rotational invariance than we are going to include in this course, we would be able to conclude that both sides ... behave as tensors." | Faithful. The Summary's "true for every axis because both sides behave as tensors" states as established what Guth presents as an argument the course does not complete. | Acceptable; optionally "(an argument the notes only sketch)". |

## Arithmetic and answer checks
- Worked example 1: cos 30° = 0.866025, sin 30° = 0.5. A′₁ = 2.598076 − 0.5 = 2.098076 ≈ 2.098; A′₂ = 1.5 + 0.866025 = 2.366025 ≈ 2.366; A′₃ = 2. Lengths: 9 + 1 + 4 = 14; 2.098² = 4.4016 ≈ 4.402, 2.366² = 5.5980 ≈ 5.598, total 14.000. Correct. "Columns of R perpendicular unit vectors, so R orthogonal": correct.
- Worked example 2 recomputed from (2.10): R_ij = −½δ_ij + ½ − ½ Σ_k ε_ijk. Diagonal 0; R₁₂ = ½ − ½ε₁₂₃ = 0, R₂₁ = 1, R₂₃ = ½ − ½ε₂₃₁ = 0, R₃₂ = ½ − ½ε₃₂₁ = 1, R₃₁ = ½ − ½ε₃₁₂ = 0, R₁₃ = ½ − ½ε₁₃₂ = 1. Rows (0,0,1), (1,0,0), (0,1,0): correct. Columns give ê′_x = ê_y, ê′_y = ê_z, ê′_z = ê_x, as stated. Direction check against the active convention: Rodrigues' formula for an active right-handed rotation, R v = v cos φ + (n̂ × v) sin φ + n̂(n̂·v)(1 − cos φ), has matrix (n̂ × v)_i = ε_ikj n̂_k v_j = −ε_ijk n̂_k v_j, i.e. exactly (2.10); and a counterclockwise (right-handed) third of a turn about (1,1,1) carries x → y → z → x. So the cyclic shift is in the right direction. R(3,1,2) = (2,3,1): correct; length √14; row sums 1 so R n̂ = n̂: correct.
- n̂ = ê_z check of (2.10): R₁₂ = −ε₁₂₃ sin φ = −sin φ, R₂₁ = +sin φ, R₃₃ = cos φ + (1 − cos φ) = 1, other off-diagonal terms 0: correct, agrees with (2.5).
- Quiz 1: (2,0,5) → (2 cos 30°, 2 sin 30°, 5) = (1.732, 1, 5); answer index 1 correct; explanation correct.
- Quiz 2: clockwise rotation of the axes by φ; answer index 3 correct; matches the notes' last sentence of the p. 1 parenthesis.
- Quiz 3: column j of R holds the components of ê′_j (from (2.4)); answer index 0 correct; first column (cos φ, sin φ, 0) = ê′_x correct.
- Quiz 4: φ = π: −δ_ij + 2n̂_in̂_j; answer index 2 correct; "keeps n̂, reverses the perpendicular part" correct; for ê_z, diag(−1, −1, 1) correct.
- Flashcards: all four correct and consistent with the notes.
- Calcs file `calcs/8.07/rotations-index-notation.yaml`: 24 entries covering both worked examples, quiz 1 and quiz 4, and the n̂ = ê_z check; formulas checked by hand; `pytest tests/calc -k rotations` gives 24 passed.
- VectorDiagram: original arrows (1,0) and (0,1) in grey (`color: -1` = `--fg-soft`), rotated (0.866, 0.5) and (−0.5, 0.866) = (cos 30°, sin 30°) and (−sin 30°, cos 30°): correct for a counterclockwise 30° turn; caption accurate. The grey arrows are unlabelled; the caption names them, which suffices.

## Coverage and order
- The page follows the notes' order: motivation (p. 1), active vs passive and the parenthesis on rigorous definition (p. 1), (2.1)-(2.2), figure and (2.3), (2.4)-(2.5) with the rows/columns remark, (2.6)-(2.8), matrix-multiplication remark and (2.9), the aside with the diagonal formula, (2.10), the ê_z check and the tensor argument, plus the footnote meaning of "aside" (not needed later, not on exams). Nothing in the notes is left out.
- Added by the page: "Index notation in brief" (see #2), the linearity remark (#4), the remark that index notation goes beyond matrices for three-index objects and non-adjacent sums (a fair reading of the notes' two conditions), two original worked examples, quiz and flashcards.

## Licensing
- No "All rights reserved" or "Courtesy of" material in LN2. The page's diagram is generated from components (30°, not Guth's general φ figure with angle arcs); not a redraw of a protected figure.
- No verbatim copying beyond short phrases. The closest paraphrases are "easier to imagine an object turning than to imagine your own head spinning" (notes: "easier to imagine an object rotating than it is to imagine one's own head spinning") and the rigid block / stream of water from a tap example; both are reworded and short. Acceptable; optionally loosen the first.
- No OpenStax or LibreTexts material.

## Notes
- Prerequisites `vector-analysis`, `multiplication-and-inverse-matrices`, `orthogonal-matrices-gram-schmidt` exist and fit (ê_x notation and rotational invariance; matrix products; orthogonal matrices).
- leadsTo 8.07 Lecture 3 ("Integral Formulation of Basic Equations", LN3) matches the syllabus title. I did not read LN3 to verify the listed contents (line-integral potential, Gauss's law, field energy); the local ln3.txt holds only the OCW cover page. Uncertain, but plausible for that title.
- Callout: "The 8.286 pages on curved space use the same index notation" is supported (`christoffel-symbols`, `geodesic-equation` use g_ij-style indices). The paraphrase of Guth's closing remark is fair.
- Symbols (data/symbols.json diff for this page): new or extended meanings for δ, δ_ij, ε, ε_ijk, ε₁₂₃, ε₂₁₃, ε_ij3, φ (rotation angle, rad), x/y/z (axes), i/j/k (indices), A, A′, A_i, A_j, A₁-A₃, A_x-A_z, ê_x-ê_z, e_i, e_j, e′, n̂, n_i, n_j, n_k, R, R_z, R_ij, R₁₁-R₃₃. All meanings fit the page; ε_ij3 meaning (+1 for (1,2), −1 for (2,1), else 0) and ε₂₁₃ = −1 are correct. Minor: n_i / n_j meanings say "unit vector n⃗ (n_x, n_y or n_z)" while this page writes n̂; harmless. Spoken forms are inconsistent in style ("R one one" vs "R sub i j"); harmless.
- The page says the notes "box" the result: (2.8) is boxed on p. 2 (citation "eq. (2.8), p. 2" correct; the sentence "where j is summed" continues on p. 3, so "pp. 2-3" in the text is also fine).

## Resolution (2026-11-18, by the page author)

1. (error) Deleted the bracket claiming the p. 2 figure labels the x-axis vector ê_z: the figure says ê_x, there is no slip. No calcs entry referred to it. The author's notes.md is corrected too.
2. (warning) "Index notation in brief" now opens by saying it is this page's addition, that the notes take the notation as known and that δ and ε appear only in the aside.
3. (warning) The 8.962 leadsTo now points to Lecture 2 ("Introduction to Tensors"): index (component) notation from the first lecture, tensors introduced in the second, "whose components change in a definite way under a change of coordinates". The callout is softened the same way and no longer says how 8.962 defines tensors ("a central idea", not "the organising idea").
4. (info) Kept the linearity remark as the page's own explanation (it reads as such).
5. (info) The Summary now says the general formula holds "by an argument the notes only sketch: both sides behave as tensors".
- Licensing: the two closest paraphrases are reworded further ("picturing a turning object comes more naturally than picturing your own head going round"; "fine for something rigid but much less clear for something that flows, such as running water").
- The Lecture 3 leadsTo was checked against the LN3 page images (p. 1: integral form of E = −∇V, V as a line integral, ∇·E = ρ/ε₀ and ∇×E = 0; the energy topics later in the notes): it fits.
- Status set to reviewed.
