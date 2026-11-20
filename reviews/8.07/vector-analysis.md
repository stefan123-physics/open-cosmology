---
page: content/year-4/8.07/vector-analysis.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln1/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/64baa9cb5023c49bc9147bee5416b6ec_MIT8_07F12_ln1.pdf (read, local copy; 6 PDF pages, content pp. 1-5 + OCW citation page; each page extracted with pdftotext -f N -l N and rendered with pdftoppm, figures and the p. 5 slip checked on the images)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/f6b37803c7e97ba1689313a270ad2b82_MIT8_07F12_ln2.pdf (read, local copy; only to check the leadsTo claim, the "later notes" claim and the rotation convention of the worked example)
verdict: pass-with-notes
---

# Review: Vector analysis: why the dot product has a cosine

Lecture Notes 1 are typed, 5 content pages, printed running head "p. N" (p. 1 has no head); printed page = PDF page. The notes have no numbered equations, so every citation is a page number. All 20 `<Formula>` citations were checked against the rendered pages. The author's notes.md was not used. No "rights reserved" or "Courtesy of" notice anywhere in the PDF; the only third-party credit is the p. 3 figure line "(Source: Modified from chortle.ccsu.edu/vectorlessons/vch12/rightHandRule.gif.)", and that figure is not reproduced on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The cross product", bracket after the right-hand rule: "(The notes show this with a picture of a hand; this page describes it in words.)" | p. 3 figure is a **screw** standing upright (turning from A towards B drives it along A × B), labelled "Right-hand Rule", credited "Modified from chortle.ccsu.edu". No hand is drawn. | "a picture of a hand" | "(The notes show this with a picture of a right-handed screw, credited to another site; this page describes it in words.)" The words of the page (fingers curl from A to B, thumb along n̂) are correct physics; only the description of the source is wrong. |
| 2 | warning | "The dot product, and a question": "(The notes write his name under the dot; here a subscript G marks it.)" | p. 2: the rival is written $\vec A\cdot\vec B\big\rvert_{\text{Guth}}$, an evaluation-style vertical bar after the product with "Guth" as its subscript. | "under the dot" | "(The notes mark it with a bar and the subscript 'Guth' after the product; here a subscript G marks it.)" |
| 3 | warning | "What a vector is", end: "Later notes will refine this definition: a vector is something whose components change in a definite way under rotations." | Notes 1 say nothing about a later definition. Notes 2 describe how components change under an active rotation, $A'_i = R_{ij}A_j$ (2.8), but never restate the definition of a vector in those terms; the word "tensors" appears only in the aside after (2.10). | Presents the refinement as what later notes do. | Soften: "Notes 2 show how a vector's components change under a rotation, which is the starting point of the more careful definition used later in physics." Or cite where it is done, if a later 8.07 note does it. |
| 4 | info | "Operations on vectors", scalar multiplication: "stretches the length by \|a\|, and reverses the direction if a is negative" | p. 1 shows only the picture "2 × (arrow) = (twice as long arrow)". | States the general rule. | Correct and standard; fine as the page's own wording. |
| 5 | info | "Why the cosine: the proof", "(and that numbers come out of it as in the scalar rule)" and "(and a product with the zero vector is zero, since 0⃗ = 0 ê_x and numbers come out of the product)" | p. 4 uses $\hat e_x\cdot\vec 0 = 0$ and pulls the components out of the expansion without saying why; p. 2 lists the scalar-multiplication property only for the ordinary dot product, and the claim on p. 2 names only "rotational invariance and the distributive law". | Adds the scalar rule as an assumption and justifies $\hat e_x\cdot\vec 0=0$. | A genuine improvement (the argument does need it). Optionally flag it as the page's own remark, e.g. "(The notes use this without comment.)" The quiz 1 question still names only the two properties, matching the notes' claim; acceptable. |
| 6 | info | "The cross product", "The notes state this without proof; the component form below makes it plausible" | p. 3 "one can show that ... const \|A\|\|B\| sin θ n̂"; no proof anywhere in Notes 1. | Correct description. | None. |
| 7 | info | "Cross products of the basis vectors" | p. 5 writes the self-products as the scalar "0". | $\vec 0$ | Correct (the cross product is a vector); a silent correction of notation, not worth a bracket. |
| 8 | info | "Where the notes stop": "The rest of the vector analysis that 8.07 assumes (Griffiths' first chapter) is vector calculus" | Notes 1 end with the determinant (p. 5) and say nothing about vector calculus. | The page's own bridge to 18.02. | Clearly the page's addition (the section is titled "Where the notes stop"); accurate (Griffiths Ch. 1 does contain gradient, divergence, curl and the integral theorems). No change needed. |

The p. 5 slip the page reports is **real**: the rendered p. 5 reads "ê_y × ê_z = −ê_z, and cyclic permutations." (directly under "ê_x × ê_y = ê_z, and cyclic permutations,"). The intended relation is ê_y × ê_x = −ê_z; the page's bracket says this correctly and briefly.

Every formula otherwise matches its cited page:
- p. 1: subtraction $\vec A-\vec B=\vec A+(-\vec B)$ (notes use ≡); $a(\vec A+\vec B)=a\vec A+a\vec B$. Correct.
- p. 2: dot product (notes use ≡); Guth-dot product with sin θ; const \|A\|\|B\| cos θ. Correct.
- p. 3: cross product with n̂; const \|A\|\|B\| sin θ n̂; component form; addition in components; Griffiths x̂, ŷ, ẑ and "many other books" î, ĵ, k̂. Correct.
- p. 4: expanded dot product; basis self-products = 1 and ê_x·ê_y = 0; $A_xB_x+A_yB_y+A_zB_z$; ê_x·ê_y = ê_x·(−ê_y) by a 180° rotation about x; the distributive-law line; const$(A_xB_x+A_yB_y+A_zB_z)$; orientation of A along x. All on p. 4, all correct.
- p. 5: expanded cross product; self-products; ê_x × ê_y = ê_z and cyclic; the component formula in the notes' own order (ê_z, ê_x, ê_y terms); the determinant (notes write det( ), page uses vertical bars). Correct.

Guth's proof is presented correctly and fairly: (i) rotational invariance makes the three self-products one constant; (ii) a half-turn about x fixes ê_x and sends ê_y to −ê_y, so ê_x·ê_y = ê_x·(−ê_y); (iii) the sum is 2 ê_x·ê_y but by the distributive law equals ê_x·0⃗ = 0; (iv) orienting A along x gives const A_xB_x = const \|A\|\|B\| cos θ. Same order and logic as p. 4.

## Arithmetic and answer checks
- Counterexample (page's own, labelled "A quick example"): A = ê_x, B = ê_y, C = −ê_y; each sine product 1·1·sin 90° = 1, sum 2; B + C = 0⃗ gives 0. Correct.
- Worked example (original numbers, not from MIT): A·B = 2 − 4 − 6 = −8; \|A\|² = 14, \|B\|² = 21, product 294; cos θ = −8/√294 = −0.46657, θ = 117.81°, page 117.8°. Correct.
- A × B: x = (−1)(−2) − 3·4 = −10; y = 3·1 − 2·(−2) = 7; z = 2·4 − (−1)·1 = 9. (−10, 7, 9). Correct. A·(A×B) = −20 − 7 + 27 = 0; B·(A×B) = −10 + 28 − 18 = 0; \|A×B\|² = 230, √230 = 15.166 ≈ 15.17; 294 − 64 = 230. Correct.
- Rotation: a counterclockwise quarter-turn about z seen from above (active, the same convention as Notes 2, Eq. (2.4) with φ = 90°: ê_x → ê_y, ê_y → −ê_x) sends (x, y, z) → (−y, x, z). A' = (1, 2, 3), B' = (−4, 1, −2). A'·B' = −4 + 2 − 6 = −8. A'×B' = (2·(−2) − 3·1, 3·(−4) − 1·(−2), 1·1 − 2·(−4)) = (−7, −10, 9), and (−10, 7, 9) under the same map is (−7, −10, 9). Correct and consistent.
- Quiz 1: answer 1 (rotational invariance and distributive law) matches p. 2/p. 4; explanation correct.
- Quiz 2: answer 2 correct (1 + 1 = 2 versus 0); the sine version is rotationally invariant, so choice 4 is rightly wrong; choice 1 rightly wrong (sin 90° is +1 for both).
- Quiz 3: answer 0, (−10, 7, 9). Distractor 2 is B × A = (10, −7, −9), correct; distractor 4 (2, −4, −6) are the products A_xB_x etc., summing to −8, as stated.
- Quiz 4: ê_z × ê_y = −(ê_y × ê_z) = −ê_x, answer 3. Correct.
- Flashcards 1-4: all correct and consistent with pp. 1-5.
- `calcs/8.07/vector-analysis.yaml`: every number on the page has an entry; `npm run calc:test` passes (5495 passed). The `half-turn-about-x` identity (cos t + 2(1 + sin t) = 1 at t = π) is an awkward but valid way to test both components at once. Several page-own entries cite "p. 2"/"p. 3" as source; harmless (they are marked `origin: page-own`).
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file (now written).

## Coverage and order
- Page order = notes order: definition and "no position" (p. 1), operations (p. 1), dot product, properties, Guth-dot query (p. 2), cross product, properties, "why sin" (p. 3), component form and addition (p. 3), dot product in components (p. 4), proof (p. 4), cross product in components and determinant (p. 5). Nothing in the notes is left out.
- Additions: the sine counterexample, the VectorDiagram, the worked example, the notation remark on î, ĵ, k̂ for 18.02 pages, and the closing vector-calculus section. All are the page's own and recognisable as such.
- The notes' p. 2 figure "always tail to tail!" is rendered in words ("when their tails are put together"). Good.

## Licensing
- OCW 8.07 is CC BY-NC-SA 4.0; Notes 1 carry no "rights reserved" or "Courtesy of" notice.
- The p. 3 right-hand-rule picture ("Modified from chortle.ccsu.edu") is **not** reproduced; the page describes the rule in words. Good. (Only the description of that picture is inaccurate, finding 1.)
- The VectorDiagram (ê_x, ê_y, −ê_y on axes) depicts the same situation as the p. 4 figure, but it is generated from data, carries a different scale note, and the p. 4 figure is CC-licensed material with no notice. No problem.
- No text copied verbatim beyond short phrases ("hired a very good advertising agency", "serious marketing problem", "had better agree"), which are attributed to Guth in context. Acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Prerequisites: all seven slugs exist (`vectors` in 8.01; `dot-product`, `determinants-and-cross-product`, `gradient`, `div-curl-and-maxwell`, `divergence-theorem`, `stokes-theorem` in 18.02). The first three fit; the four vector-calculus pages are used only in the closing section. They are what 8.07 assumes, so listing them is defensible, but they could equally be plain links (info).
- The page is called a foundation page, but the brief asks about 8.02: none of the prerequisites is an 8.02 page, and none is needed here (info).
- leadsTo: 8.07 Lecture 2 ("Rotations in Index Notation"). Correct; the Kronecker delta and Levi-Civita symbol appear in Notes 2 only in Eq. (2.10), inside an "aside" Guth says will not be needed or examined. "with the Kronecker delta and the Levi-Civita symbol" is true but slightly overstates their role; optional softening (info).
- No `Callout kind="cosmology"`: acceptable, since Notes 1 have no real cosmology link (the course's cosmology links start with the multipoles).
- Intro: "8.07 is MIT's second semester of electromagnetism" is loose (8.07 follows 8.02 and is the intermediate course; "second course" might read better), and "at the level of Griffiths" is fair (Griffiths is the textbook). Info.
- Symbols (data/symbols.json, 19 meanings scoped to `vector-analysis`): e-hat-x/y/z (forms e_x, e_y, e_z, spoken "e hat sub x") are new entries and correct; A, B, C, A_x…B_z, A', B', n̂, a are correct for the page. One gap: the meanings for x, y, z on this page say "The x axis: in x̂, Griffiths' name…, and in the cyclic order x → y → z", but the worked example also uses x, y, z as the components of a generic vector ("a vector (x, y, z) becomes (−y, x, z)"). Suggest adding "and the components of a vector in the rotation of the worked example" (warning-level, but not counted in the table since it is not an MIT difference).
- No em dashes found in the page.

## Resolution (2026-11-18, by the page author)

- Finding 1 (warning): the bracket now says the notes show a right-handed screw (credited to another website), turning from A towards B and advancing along n̂; the page still describes the rule in words.
- Finding 2 (warning): Guth's notation is now described as a vertical bar after the product with the subscript "Guth".
- Finding 3 (warning): the claim about later notes is replaced by "The next notes show how a vector's components change under a rotation, the starting point of the more careful definition used later in physics."
- Finding 5 (info): the scalar-rule assumption in the proof is now flagged as one the notes use without comment.
- Symbols: the page-scoped meanings of x, y, z now also cover their use as the components of a vector in the worked example's rotation.
- leadsTo (info): now says the Kronecker delta and the Levi-Civita symbol appear in Notes 2 only in a short aside.
- Intro (info): "second semester of electromagnetism" is now "second, intermediate course in electromagnetism, after 8.02".
- Findings 4, 6, 7, 8 and the prerequisites note: no change (the review found them correct or acceptable).
- Status set to `reviewed`.
