---
page: content/year-4/8.286/sphere-metrics.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-11-non-euclidean-spaces-closed-universes/ (read via the Lecture 11 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/94d64e9de7dffb202372b30df69c48a5_ARuzDX55Xnk.pdf (read via a local copy, t11.txt. Pages 4–20, the range this page draws on, were read in full. Page numbers below are the transcript's page footers, where the footer number closes that page. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec11/ (read via local copies, l11.txt and l11.pdf. The PDF pages carrying slides 16–21 were rendered and inspected. Slides 2–16 repeat Lecture 10 and are marked "Slides courtesy of Mustafa Amin. Used with permission." Slides 17–21 are Guth's own. The URL itself was not fetched.)
  - A third-party notes file for Lecture 11 (notes-L11.md). Every point taken from it was checked against t11.txt and the rendered slides.
verdict: pass-with-notes
---

# Review: The metric of a sphere and of a closed universe

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | 3-sphere section, orthogonality argument ("changing ψ rescales (x, y, z) outward (a radial move), while changing θ or φ moves tangentially") | pp. 15–17: Guth takes the 4D dot product dr_ψ · dr_θ. First he notes that varying θ leaves w unchanged (dθ_w = 0), so the w term drops out whatever dψ_w is. Only then does he compare the xyz parts: radial (ψ) against tangential (θ, φ). | Gives only the xyz radial-versus-tangential step. | The argument is incomplete without the w step, because dr_ψ has a nonzero w component. Add a clause such as "varying θ or φ leaves w fixed, so the w-component of the ψ displacement contributes nothing to the dot product; in xyz, ..." |
| 2 | warning | Same sentence: "rescales (x, y, z) outward" | p. 16: changing ψ multiplies x, y, z by a common factor, which is "only in the radial direction". | "outward". | For ψ > π/2, increasing ψ makes sin ψ smaller, so the move is inward. The point is that the move is radial, not its sign. Replace "outward" with "by a common factor". |
| 3 | info | Coordinate ranges "0 ≤ φ < 2π" (body and flashcard) | p. 13: Guth says "0 is less than phi, is less than 2 pi", then corrects only θ and ψ to ≤. | 0 ≤ φ < 2π. | The page's half-open range is the standard, correct choice. It differs slightly from what Guth wrote on the board. No change needed. |
| 4 | info | Closing line of the 3-sphere section: "This, Guth says, is precisely the space of a closed universe: homogeneous and isotropic, but finite." | p. 17: "precisely the closed universe of cosmology", "the homogeneous isotropic description of a closed universe". He does not say "finite" there. | Puts "but finite" inside the attribution to Guth. | The claim is true. Move "finite" outside the attribution, e.g. "...homogeneous and isotropic. (It is also finite.)" |
| 5 | info | "Why spheres?" last sentence: "So the curved spaces cosmology needs are spheres (positive curvature), flat space, and their negatively curved relative." | In the "why spheres" passage (pp. 5–6) Guth argues only that the sphere is homogeneous and isotropic within its surface. The open case comes from L10 (Gauss–Bolyai–Lobachevski, recapped on p. 2) and is postponed to the next lecture (p. 25). | States all three cases as the conclusion of this passage. | This is correct and well supported elsewhere in the course. Optional: add "(the open case comes next lecture)". |
| 6 | info | u section: "each value of u labels **two** points ... u = 1 is the equator" | pp. 18–19: two points for every value of u (w > 0 and w < 0); u = 1 is the equator; the whole sphere is twice the 0 ≤ u ≤ 1 region. | Same as Guth. | This matches the source. Strictly, at u = 1 (w = 0) the two hemispheres meet, so that value is single-valued. Optional: "each value of u < 1". |
| 7 | info | Quiz 4 explanation: "A homogeneous, isotropic, positively curved three-dimensional space is a 3-sphere." | p. 17 gives the 3-sphere as *the* closed universe. Guth does not discuss uniqueness. | Same. | This is fine at course level. Globally, quotients such as RP³ are also locally homogeneous and isotropic. Leave as is, or say "is (locally) a 3-sphere". |
| 8 | info | 2-sphere metric Formula, `at="p. 7; slides 19–20"` | The metric itself is written on the board (p. 7). Slides 19 and 20 show only the components R dθ and R sin θ dφ. | Cites both. | The citation is correct. The slides support the two pieces, not the summed formula. |

### Formula and citation check
- 2-sphere metric, reading1 p. 7, slides 19–20. **Correct.** Varying θ gives R dθ, varying φ gives R sin θ dφ, the two are orthogonal, and Pythagoras gives the metric (p. 7). Slide 19 is titled "Varying θ:" and shows R dθ. Slide 20 is titled "Varying φ:" and shows R sin θ dφ.
- x² + y² + z² + w² = R², reading1 p. 10. **Correct.** The equation is spoken on p. 10.
- ψ: w = R cos ψ, √(x²+y²+z²) = R sin ψ, reading2 slide 21. **Correct.** Slide 21 ("A Sphere in 4 Euclidean Dimensions") shows ψ measured from the w axis, with R cos ψ and R sin ψ labelled against √(x²+y²+z²). The same definition is spoken on p. 11.
- 3-sphere metric, reading1 pp. 14–15. **Correct.** The ψ variation (R dψ) and the θ, φ variation (radius R sin ψ) are on p. 14. The final summed metric opens p. 15.
- u ≡ sin ψ and the metric R²[du²/(1−u²) + u²(dθ² + sin²θ dφ²)], reading1 p. 18. **Correct.** The page's derivation, du = cos ψ dψ = √(1−u²) dψ, matches p. 18.
- Brute-force route (x = R sin θ cos φ, ...; chain rule; repeated cos² + sin² = 1), pp. 8–9. **Matches.** No citation is given.
- Multiplying by sin ψ and the "any number of dimensions" recipe, pp. 12–13. **Matches.**
- Ranges 0 ≤ θ, ψ ≤ π (p. 13). **Match.** See row 3 for φ.

### Other claims verified
- "Why spheres": homogeneous, and isotropic *within the surface* rather than about the 3D centre (pp. 5–6). **Matches.**
- Forgetting the embedding space and Gauss's "inner properties" (p. 5, p. 8). **Match.**
- w as a time-like crutch for slicing (pp. 10–11): Guth says we "usually don't" visualise 4D. The slice is a point at w = −R, has radius R at w = 0, and shrinks back to a point at w = +R. **Matches.** The slice radius √(R² − w²) is the page's own (correct) addition, from x²+y²+z² = R² − w².
- Plot: sqrt(1 − w²) on [−1, 1] in units of R, with y range [0, 1.1]. **Correct.** The caption is consistent.
- Local flatness for u ≪ 1 (p. 19). **Matches.** Isotropy about the origin is manifest and homogeneity is "a hidden feature" (pp. 19–20). **Matches.** Moving the origin is a rotation in the 4D embedding space (p. 20). **Matches.**
- Coordinates are arbitrary, there is no natural system, and coordinates are not distances (p. 17). **Matches.**

## Arithmetic and answer checks
- Worked example: walking a distance r from the pole gives θ = r/R. Along that circle only φ varies, so C = ∫₀^{2π} R sin θ dφ = 2πR sin(r/R). **Correct.**
- The equator is at r = πR/2, so C = 2πR sin(π/2) = 2πR. The flat value is 2πr = π²R. The ratio is 2/π = 0.6366 ≈ 0.64. **Correct.**
- The example is not in Lecture 11. It is original, so there is no copying concern.
- Quiz (0-based answer index, as in the sibling pages):
  - Q1 → R sin θ dφ: **correct**.
  - Q2 → perpendicular: **correct**.
  - Q3 → R²[dψ² + sin²ψ(dθ² + sin²θ dφ²)]: **correct**.
  - Q4 → homogeneous and isotropic: **correct**. See row 7 for a nuance in the explanation.
  - All four explanations are accurate.
- Flashcards: the 2-sphere metric, the 3-sphere metric, the u form and the ranges are all **correct**.

## Coverage and order
- The page follows the lecture order: why spheres, then the 2-sphere metric (geometric, then brute force), then the 3-sphere and w-slicing, then ψ and the coordinate equations, then the ranges, then the metric with orthogonality, then arbitrary coordinates and u.
- Left out:
  - The Q&A on p. 8: the metric holds only for infinitesimal dθ and dφ, and finite distances come from integrating along the shortest path. This is worth a sentence because it ties to Gauss's idea.
  - The remark on p. 4 that a curved space cannot always be embedded in a Euclidean space of one higher dimension.
- Out of scope for this page: pp. 20–25 (R(t)² = a²/k, the "fudge factor", and the Robertson–Walker form). As far as I can see these belong to the sibling page robertson-walker-closed.mdx, which was not reviewed here.
- Pp. 1–4 (the L10 review) are correctly left to non-euclidean-geometry.mdx.

## Licensing
- No content from the Amin slides (slides 2–16) is reproduced. The page has no images. Its only nod to L10 is a generic line linking to the previous page. Local Euclideanness is presented through Guth's own p. 19 argument, not through Amin's slide 16 figure or g_xx formula.
- No slide images from Guth's slides 17–21 are reproduced either. Formulas such as w = R cos ψ are standard mathematics.
- No verbatim copying was found. The only quoted phrase is Gauss's "inner properties" (short, standard terminology).
- No OpenStax or LibreTexts material was found.
- Slide 9 in this deck carries "© Source unknown. All rights reserved." The page does not use it.

## Notes
- No error-level findings. The two warnings (rows 1–2) concern the completeness and wording of the orthogonality argument for the 3-sphere.
- The page has no `Callout kind="cosmology"` blocks and no `leadsTo`, so there are no forward links to check.
- `references: {}` is empty. That is acceptable because all citations use reading1 and reading2.

## Resolution (2026-11-14, by the page author)
- Orthogonality argument now includes Guth's first step (θ, φ leave w fixed) and says ψ rescales (x, y, z) by a common factor (radial), not "outward".
- "But finite" moved out of the attribution to Guth.
- Double-valued u limited to u < 1; u = 1 is the equator.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
