---
page: content/year-4/8.286/christoffel-symbols.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-14-the-geodesic-equation/ (read via the Lecture 14 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9cf8a66ecf4f21637b50ab2b75bb38e8_-yIKKST-_Mw.pdf (read via a local copy split by PDF page, p14.txt. Pages 1–13 and 16–17 were read in full, and the end of p. 26 was checked. Printed footers were checked with pdftotext on pp. 9, 12 and 17, and they equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec14/ (read via a local copy, slides14.txt. Slides 1–5 summarise Lecture 13.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps6/ (read. Problem Set 6 was downloaded and converted with pdftotext. Used only to check the cosmology callout.)
verdict: pass-with-notes
---

# Review: Simplifying the geodesic equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example ("the circle of latitude θ = 60°") and quiz question 3 | (Page-internal, not an MIT claim.) In the metric dθ² + sin²θ dφ², θ is the polar angle (colatitude), as Guth defines it on p. 13: θ = 0 is the North Pole. | Calls θ = 60° a "circle of latitude". The plot just below uses **latitude** (45° for the ends). θ = 60° is latitude 30°. | Say "the circle θ = 60° (latitude 30°)" in the problem statement and the quiz. Or label the plot's axis and slider "latitude = 90° − θ", so readers do not mix up the two angles. |
| 2 | info | Recap: "For the Robertson–Walker metric that is an 8.286 homework problem: it shows how massive particles slow down … just as photons lose energy." | p. 3 says only that the homework needs the full spacetime metric to find geodesics. The point that massive particles slow down, like photons losing energy, is made on **p. 13**, after the derivation. | Merged into the recap without a page reference. | The content is correct. Optionally add "(pp. 3, 13)" or move the sentence to just before the callout, matching Guth's order. |
| 3 | info | Bracketed note on the sign of Γ | p. 12: "d squared x i, ds squared is equal to-- we know it's going to be equal to stuff times the product of two derivatives." No sign is spoken. Guth adds that books agree on the definition "up to the sign". | "[The transcript does not make the sign on the board audible; with Γ defined as above, the derivation gives the minus sign shown, which is the most common convention.]" | **Verified correct and fair** (derivation below). No change is needed. |
| 4 | info | Expanded-form Formula and the note about corrections | pp. 10–11: Guth first writes "½ ∂_i g_jk − 2 ∂_k g_ij" with a misplaced closing bracket. A student corrects the bracket, and then a second student points out that the derivatives should be dx^j/ds dx^k/ds, not dx^i/ds dx^j/ds ("attempt number four, or did I lose count"). | Final form ½∂_i g_jk − ∂_k g_ij, with "a misplaced bracket and two wrong indices". | **Verified correct.** ½(∂_i g_jk − 2∂_k g_ij) with the bracket covering everything equals the page's form. "Two wrong indices" (i→j, j→k on the derivatives) fits the transcript. |
| 5 | info | Newton / brachistochrone bracket | p. 5: Newton "got home at 4:00 AM, or something like that, from the mint … solved it by morning". Guth says Johann Bernoulli "invented" the calculus of variations in 1696. Slide 4 is headed "calculus of variations, 1696". | "[Guth has him coming home at 4 a.m.; the usual version of the story has him home at 4 p.m. and done by 4 a.m.]" The page says Bernoulli "posed" the problem. | The transcript quote is verified. The "4 p.m. … 4 a.m." version agrees with the commonly quoted account by Newton's niece Catherine Conduitt. This reviewer checked that from general knowledge, not from a source fetched here. "Posed" is more accurate than Guth's "invented". No change is needed. |
| 6 | info | Bracket after the spacetime Formula | p. 17: "the partial of g lambda sigma with respect to x nu". | "[Guth says … with respect to x^ν; the free index must be μ, as written here.]" | **Verified correct.** ν is already summed with dx^ν/dτ on the left, so the free index must be μ. |
| 7 | info | "Spacetime notation": "maxima or saddle points as well as minima" | p. 17: "maxima and stationary points as well as minima". | Saddle points. | This is acceptable and more precise. No change is needed. |
| 8 | info | Recap: "Guth's review of Lecture 13 (slide 1) adds one word … local" | Slide 1 already contains "local free-falling observer". On pp. 1–2 Guth says he had not emphasised the word last time. | Same meaning. | Fine as written. |

### Formula and citation check
- Arc-length form, `reading1` "p. 9 (board)". **Correct.** On p. 9 Guth says "now we'll continue on the blackboard" and then states the formula and boxes it. The notation ∂g_jk/∂x^i matches.
- Expanded form, "pp. 10–11 (board)". **Correct** (see row 4).
- g^{il} g_{lj} = δ^i_j, "p. 11 (board)". **Correct.** The indices i, l, j are the ones Guth uses.
- Γ form, "p. 12 (board)". **Correct.** The definition ½ g^{il}(∂_j g_lk + ∂_k g_lj − ∂_l g_jk) matches the transcript term by term. Only the sign of the d²x/ds² equation is not spoken (row 3).
- Spacetime form, "p. 17 (board)". **Correct**, with the index slip corrected (row 6).
- None of these equations are on the Lecture 14 slides (slides 1–5 cover only Lecture 13 material), so "board" is correct for all of them.

### Sign derivation (point 1)
From d/ds[g_ij x′^j] = g_ij x″^j + ∂_k g_ij x′^k x′^j:
g_ij x″^j = (½∂_i g_jk − ∂_k g_ij) x′^j x′^k. Symmetrise the last term in j, k: ∂_k g_ij x′^j x′^k = ½(∂_k g_ij + ∂_j g_ik) x′^j x′^k. Multiply by g^{li}:
x″^l = −½ g^{li}(∂_j g_ik + ∂_k g_ij − ∂_i g_jk) x′^j x′^k = −Γ^l_jk x′^j x′^k. The page's minus sign is right for its definition of Γ.

## Arithmetic and answer checks
All values were recomputed with a Python script.
- Worked example, θ equation: d/ds[θ′] = ½ · 2 sinθ cosθ φ′², so θ″ = sinθ cosθ φ′². **Correct.**
- φ equation: no metric component depends on φ, so sin²θ φ′ is conserved. **Correct.**
- Christoffel symbols: Γ^θ_φφ = ½ g^θθ(−∂_θ g_φφ) = −sinθ cosθ. Γ^φ_θφ = ½ g^φφ ∂_θ g_φφ = cotθ. All the others are zero. **Correct.** −Γ^θ_φφ φ′² reproduces the θ equation. **Correct.**
- Circles: φ′ = 1/sinθ₀ gives the requirement cotθ₀. cot 60° = 0.57735 ≈ 0.577. cot 90° = 0. φ equation: sin²θ₀/sinθ₀ = sinθ₀, which is constant. **Correct.**
- Plot formula: a great circle symmetric about φ = 0 satisfies tan(lat) = C cos φ, with C = tan b₀ / cos D from the endpoints. **Correct.**
- Caption: the peak is atan(tan 45°/cos 60°) = atan 2 = 63.435°, which gives **63.4°**. The great-circle length is acos(sin²b₀ + cos²b₀ cos 2D) = acos(0.25) = 1.31812, which gives **1.318**. Numerically integrating the arc length along the plotted curve gives the same 1.31812. The latitude-circle length is cos 45° × 2 × 60° in radians = 1.48096, which gives **1.481**. **All correct.** "Bulges towards the pole" is correct.
- Quiz 1 (answer 1): correct. A = 1 is the arc-length choice, and constancy is what matters (p. 9).
- Quiz 2 (answer 1): correct (p. 11).
- Quiz 3 (answer 1): correct. cot 60° ≈ 0.577. See row 1 for the latitude/colatitude wording.
- Quiz 4 (answer 1): correct. "Only a change of notation" is on p. 17.
- Flashcards: all four match the formulas, which were checked above.

## Coverage and order
- The page follows the transcript order: recap (pp. 1–8, slides 1–5), arc length (pp. 8–9), expanded form (pp. 9–11), inverse metric (p. 11), Christoffel symbols (p. 12), spacetime notation (pp. 16–17). The only change is the homework remark from p. 13 (row 2).
- Guth's verbal recap of the Lecture 13 derivation (pp. 4–8: index notation, Einstein summation, the path, its variation, integration by parts) is reduced to a link back through the prerequisite. This is acceptable, because the `geodesic-equation` page covers it.
- pp. 13–16 and 17–26 (Schwarzschild metric, radial infall) are on `falling-into-a-black-hole`. Guth announced the energy of radiation for this lecture but did not reach it (p. 26), so nothing in Lecture 14 is left uncovered by the two pages together.
- The sphere worked example and the great-circle plot are additions. They are original, and Guth gives no example in this part of the lecture.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the transcript and slide text found nothing. The transcript carries the standard OCW Creative Commons notice.
- No verbatim copying was found. Short quoted phrases ("window dressing") are attributed to Guth and are fine.
- No OpenStax or LibreTexts material is used, and the diagram is generated from a formula.

## Notes
- Cosmology callout: **verified.** 8.286 Fall 2013 Problem Set 6, Problem 1 ("Geodesics in a flat universe") asks students to show that dx/dτ falls off as 1/a² and that the relativistic momentum falls off as 1/a(t). The page's "momentum falls as 1/a(t)" is therefore both standard and exactly the homework result. The homework uses the **flat** Robertson–Walker metric. Optionally add PS6 as a `references` entry and cite it in the callout.
- `leadsTo` points to Lecture 14 itself, which is the next page `falling-into-a-black-hole`. This is acceptable. A forward link to the lecture where massive-particle momentum or the 1/a behaviour is used later would be more useful, if one exists.
- Guth says "Christofel"; the page's spelling "Christoffel" is correct.

## Resolution (2026-11-14, by the page author)

- Warning (θ = 60° called a "circle of latitude"): the worked example and quiz 3 now say that θ is the polar angle, so θ = 60° is the circle at latitude 30°.
- Info (where the "particles slow down like photons" remark comes from): the recap now attributes it to p. 13, and says that p. 3 only mentions the homework.
- Info ("saddle" vs Guth's wording): the spacetime section now reads "maxima or other stationary points", as Guth says on p. 17.
- Info (`leadsTo` pointing to Lecture 14 itself): kept on purpose. It links to the next page of the same lecture, the black-hole infall.
- Info (PS6 as a reference): not added. The callout already names the homework without citing it.

## Update (2026-11-26, attribution check)

- "Most books instead give a formula for d²xⁱ/ds²" is now attributed to Guth, who says "most general relativity books" and calls his own form the best one for finding geodesics (transcript p. 9).
