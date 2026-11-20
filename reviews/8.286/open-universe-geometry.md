---
page: content/year-4/8.286/open-universe-geometry.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-12-non-euclidean-spaces-open-universes-and-the-spacetime-metric/ (not fetched; content read via the local transcript and slides below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/21d454d325f85ab73f2e29dc992e0de0_dBhMcn7UDs0.pdf (read, local copy of the Lecture 12 transcript, 28 PDF pages; pp. 6-22 checked line by line with pdftotext per PDF page; page numbers below are the printed footers)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec12/ (read, local copy of the Lecture 12 slides; slide 9 checked on the rendered page)
  - local study notes notes-L12.md (used as a guide only; its transcript page numbers were found to be one lower than the printed footers from about p. 6 onward)
verdict: needs-changes
---

# Review: The geometry of open universes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Formula label="The same metric in terms of ψ" … at="p. 7">` | The ψ-form metric (a²/k)[dψ² + sin²ψ(…)] and the "negative definite" warning are on transcript p. 8 (PDF page whose footer is 8, starting "Now notice, however, that things are a little bit tricky"). p. 7 has only the r-form and the stock analogy. | cites p. 7 | Change to `at="p. 8"`. (Slide 9 also shows the ψ form with R² in place of a²/k.) |
| 2 | error | `<Formula label="The open universe with an imaginary angle" … at="pp. 16–17, worked out here">` | The imaginary-ψ discussion runs from the top of p. 17 ("For k negative … is r negative?") through the top of p. 18 ("go to minus k … it'll become positive definite again"). p. 16 is about the rotation argument. | cites pp. 16–17 | Change to `at="pp. 17–18, worked out here"`. The "worked out here" label is right: Guth wrote no formula. |
| 3 | error | `<Formula label="Proper radius in an open universe" … at="p. 20">` | The integral and the sinh⁻¹ result are on p. 21. p. 20 covers the closed case (equator, double-valued r) and the start of the flat case. | cites p. 20 | Change to `at="p. 21"`. |
| 4 | info | Paragraph after the imaginary-angle formula: "Both sign problems cancel: dψ² becomes −dχ² and a²/k becomes −a²/|k|" | Guth names only dψ² turning negative (p. 17). | Same two signs. | The maths is right, but the angular term also flips: sin²ψ = −sinh²χ. So the whole bracket changes sign, not just dψ². Suggest "the whole bracket changes sign (dψ² → −dχ², sin²ψ → −sinh²χ), and so does a²/k". |
| 5 | info | "but states that each step works equally well for negative k" | p. 14: "I'm not really going to prove this either, but it's a claim … it also seems highly plausible". | "states" | Optional: "claims, without proof, that…", to match his hedge. |
| 6 | info | `references.weinberg` | The theorem is attributed correctly (p. 19, "Steve Weinberg's gravitation and cosmology textbook"). | The reference is defined, but nothing in the body cites it. | Optional: add a `cite="weinberg"` to the theorem sentence, or drop the unused reference. |
| 7 | info | Plot caption | — | "In a closed universe r stops at 1 (the equator…)" | Correct, but the closed curve shows only the northern hemisphere: past the equator r falls again while ℓ keeps growing to π. Optional: say so in the caption, to match the double-valued-r bullet. |

Everything else checked agrees with the source:
- RW metric: slide 9, boxed. Agrees.
- Stock-price analogy, k may be +, 0 or −: p. 7. Agrees.
- "No glaring contradictions" / "right limits" answers, then homogeneity + isotropy: pp. 8–9. Agrees.
- Isotropy clear, homogeneity hidden by the choice of origin: pp. 9–10. Agrees.
- Three-step recipe (4D coordinates → 4×4 rotation to (0,0,0,R) → back to r′, θ′, φ′): pp. 12–14. Agrees.
- "I've never done it either, to be honest": p. 14. Agrees.
- The rotation leaves the metric's form unchanged: p. 16. Agrees.
- Negative-definite but still homogeneous/isotropic space, and "the magical form": pp. 17–18. Agrees.
- Weinberg theorem, not proved in the lecture: p. 19. Agrees.
- Closed case: singular at kr² = 1 (the equator), r_max = 1/√k, r double-valued, finite volume: p. 20. Agrees.
- Flat and open cases are infinite; r is not a physical distance: pp. 20–21. Agrees.
- Guth's "faster than linear, I think. I take that back. I'm not sure.": p. 21. The page handles this correctly. ℓ grows like ln r (slower than linear), and the circumference grows exponentially with ℓ.
- sin(iχ) = i sinh χ ("the sine of an imaginary variable is … the cinch of a real variable"): p. 22. Agrees.
- GBL geometry = 2D open RW metric; Klein's coordinates are complicated only for showing homogeneity: p. 22. Agrees.

## Arithmetic and answer checks
- Imaginary angle, with k = −|k|, √k = i√|k| and ψ = iχ:
  - r = sin(iχ)/(i√|k|) = i sinh χ/(i√|k|) = sinh χ/√|k|. This is real, and positive for χ > 0, so it answers the p. 17 question.
  - (a²/k)[dψ² + sin²ψ(dθ² + sin²θ dφ²)] = (−a²/|k|)[−dχ² − sinh²χ(…)] = (a²/|k|)[dχ² + sinh²χ(…)]. Positive definite. Correct.
  - Cross-check: with r = sinh χ/√|k|, dr²/(1 + |k|r²) = dχ²/|k| and r² = sinh²χ/|k|, which gives the same metric. Correct.
- Proper radius: d/dr[sinh⁻¹(√−k r)/√−k] = 1/√(1 − kr²) for k < 0. Correct.
  - sinh⁻¹x ≈ ln 2x for large x, so the "logarithm" statement is right.
  - Circumference 2πa r = 2πa sinh(√|k| ℓ/a)/√|k|, which is exponential in ℓ. Correct.
- Plot (mathjs syntax, a = 1, |k| = 1):
  - closed curve `r <= 1 ? asin(r) : NaN`: ℓ = sin⁻¹ r for r ≤ 1, ending at π/2 ≈ 1.571.
  - flat curve: ℓ = r.
  - open curve: asinh(3) ≈ 1.818.
  - All values fit within the y-range [0, 3.2]. The NaN guard stops mathjs from returning complex values for r > 1. Correct.
- Worked example:
  - Closed: sin⁻¹(1) = π/2 ≈ 1.571, a quarter of a great circle of radius R = a/√k = 1. Correct.
  - Open: sinh 3 = 10.018 ≈ 10.0, and sinh 1 = 1.1752 ≈ 1.18 at ℓ = 1. Correct.
  - Ratio 10.02/1.175 = 8.5 ("more than eight times"); ℓ goes from 1 to 3 ("triples"). Correct.
- Quiz:
  - Q1, answer 1 (a²/k negative → negative definite). Correct.
  - Q2, answer 1 (infinite, sinh⁻¹ unbounded; "slowly, like a logarithm"). Correct.
  - Q3, answer 1 (r falls back to 0 as ψ → π, two places per r). Correct.
  - Q4, answer 1 (RW theorem, Weinberg for the proof). Correct.
- Flashcards: all three are correct and match the source.

## Coverage and order
- The page follows the lecture order for sections B–D:
  - k < 0 via the r-form (p. 7)
  - ψ-form caveat (p. 8)
  - what "works" means (pp. 8–9)
  - homogeneity recipe (pp. 9–16)
  - imaginary ψ and positive definiteness (pp. 17–18)
  - theorem (p. 19)
  - finite/infinite (pp. 20–21)
  - GBL (p. 22)
- One small reordering: the page puts the imaginary-ψ explanation (pp. 17–18) before the homogeneity recipe (pp. 9–16). This is reasonable for readability and is not misleading.
- Left out (acceptable for this page):
  - the slide review of Lecture 11 (slides 1–8), which is covered by the earlier pages
  - the Q&A on why the origin is (0,0,0,R) and not all zeros (p. 14)
  - the "most objects are not round" remark
  - metric signature (3 positive, 1 negative eigenvalue) and string theory (pp. 18–19)
  - Guth's remark that a wall in space would be unmotivated, and that GR's usual postulates rule out space just ending (pp. 20–21). The page only says "nothing in the metric is singular".
- The spacetime interval (pp. 22–28) is left to the sibling page `spacetime-interval.mdx` (not reviewed here).
- Added: the χ-form formula and the circumference remark. Both are marked as the page's own working ("worked out here", "in fact").

## Licensing
- The slides carry no "Courtesy of", © or image-credit notices; the deck is under OCW CC BY-NC-SA. The page reuses no slide images and links to them only.
- No verbatim transcript text beyond single words: "magical" is quoted, and the stock analogy is paraphrased.
- No OpenStax or LibreTexts material.
- The worked example is original: no such example appears in the lecture.
- License field (CC BY-NC-SA 4.0) is compatible.

## Notes
- The three citation errors share one cause: the study notes (notes-L12.md) number the transcript pages one lower than the printed PDF footers from about p. 6 onward. I confirmed this by extracting each PDF page separately (`pdftotext -f N -l N`): for example, the page whose footer reads "8" starts with "Now notice, however…".
- Other L12 citations taken from these notes may have the same offset, for example in `spacetime-interval.mdx`, which I did not check. The notes themselves should be corrected.
- The slide citation (slide 9) is correct: confirmed on the rendered slide, which is numbered "9".
- The reading URLs were not fetched online. The transcript file name contains the lecture's video ID dBhMcn7UDs0, which matches the local copy. The slides URL is plausible but unverified.
- The "Lecture 10" link for GBL points to `non-euclidean-geometry` (lecture: 10), which is consistent. Guth only says GBL was "a homework problem … or extra credit" covered earlier.

## Resolution (2026-11-14, by the page author)
- Errors fixed: citations corrected to transcript p. 8 (ψ form), pp. 17–18 (imaginary angle, argued in words; formula worked out on the page) and p. 21 (proper radius).
- sin²ψ → −sinh²χ sign flip now mentioned; Guth's homogeneity claim described as an expectation; Weinberg theorem tied to transcript p. 19; plot caption notes the northern hemisphere.
- Status set to `reviewed`.
