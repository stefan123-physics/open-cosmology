---
page: content/year-3/8.06/perturbation-series-degenerate-levels.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l2-1/ (resource page not re-fetched; the four segment transcripts below were read)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/f5c0f0dae823708f84807a7446cf471d_p3NpyfNp78.pdf (read: L2.1 transcript, 6 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/be90a10d04f73c049d05359b366ab291_jhIU1msmvaY.pdf (read: L2.2 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/48b942eb2378cc1017e41086a9db3013_9JhX_UNcQvE.pdf (read: L2.3 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/0a4e9ffd6c613712eb1418fbe0a874d2_85xTt0cU3s.pdf (read: L2.4 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-1-non-degenerate-and-degenerate-perturbation-theory/ (read: MIT8_06S18ch1.pdf; pp. 9-18 as text, pp. 11, 14 and 17 also rendered as images to read the equations exactly)
  - https://doi.org/10.1103/PhysRev.184.1231 (could not read; checked only as quoted in notes eq. (1.1.63), and the coefficients against an independent numerical diagonalization)
verdict: needs-changes
---

# Review: The perturbation series, the anharmonic oscillator and degenerate levels

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "When can the series be trusted?", bracket after the square-root series | Notes eq. (1.1.46), as printed (rendered p. 11): `1 + z²/2 − z⁴/8 + z⁶/6 + (5/128) z⁸ + O(z¹⁰)`, i.e. the notes have the **same** z⁶/6 slip as the lecture, and also a wrong sign on the z⁸ term. The transcript (L2.1 p. 5) says "plus z6/6 ... Minus 5/128 z to the 8" | "In the recorded lecture the z⁶ coefficient is said as one sixth; the notes give the correct one sixteenth." | The page's formula itself (z⁶/16, −5z⁸/128) is correct; only the note is wrong. Rewrite it, e.g. "(Both the recorded lecture and the notes give the z⁶ coefficient as 1/6, and the notes print the z⁸ term with a plus sign; the correct values are 1/16 and −5/128.)" Keep `at="eq. (1.1.46)"` but the reader should know the cited equation differs. Update the `sqrt-series` entry in the calcs file (`where`) to say so. |
| 2 | error | "Degenerate levels: why the formulas fail", end of first paragraph | Notes after eq. (1.2.6): "the denominator is zero, and the δH matrix element is also zero, giving us an ambiguous result". That statement in the notes is itself wrong for this example: δH = [[0,1],[1,0]], so δH₂₁ = δH₁₂ = 1. The transcript (L2.3 pp. 1-2) does not discuss the state formula | "The first-order formula failed completely, and the state formula has zero over zero." | The state correction −Σ δH_kn/(E_k⁽⁰⁾ − E_n⁽⁰⁾) has numerator 1 and denominator 0, so it diverges (one over zero), not 0/0. Say "and the state formula divides by zero", optionally with a bracketed note that the notes call it 0/0. |
| 3 | warning | "The anharmonic oscillator", first sentence | L2.2 p. 1 / notes §1.1.2: an x⁴ term is added as an example of an anharmonic perturbation that makes the potential "blow up faster"; neither says real oscillators behave that way | "A real oscillator's potential grows a little faster than x², so its levels are no longer equally spaced" | Unsupported, and often untrue (molecular potentials such as Morse soften, not stiffen). Write e.g. "Adding an x⁴ term makes the potential grow faster than x², and the levels are no longer equally spaced." |
| 4 | info | "Two remarks", bracket on Zwiebach's slip | L2.1 p. 2: "I'm sorry here. I made a little mistake. That should be delta H." The transcript does not say what was written in its place | "Zwiebach first wrote the unperturbed Hamiltonian where δH belongs and corrected it at once." | Uncertain: cannot be verified from the transcript (video not compared). Either soften ("first wrote the wrong operator") or drop the bracket; the page's formula is correct either way. |
| 5 | info | "Two remarks", "so the λ² correction is negative" | Notes after eq. (1.1.40): "the second order correction ... is always negative", with each term negative | "negative" | Strictly "negative or zero" (zero if every δH_k0 vanishes); same point as finding 3 of the Lecture 1 review. Optional. |
| 6 | info | "When can the series be trusted?", 100 and 101 example | L2.1 p. 5 uses exactly this illustration (energies 100 and 101, perturbation "two or three") | Same numbers, own wording | Acceptable as an attributed illustration (the wording is rewritten); consider "Zwiebach's example:" so it is clearly MIT's, not the page's own. |
| 7 | info | Square-root formula, "branch points at z = ±i" | Notes and transcript say "branch cuts at z = ±i" | "branch points" | Fine (more precise); no change needed. |

## Arithmetic and answer checks
- Eq. (1.1.45): page's form `√(1 + λ²|V|²/(¼(E₁−E₂)²))` equals the notes' `√(1 + [λ|V|/(½(E₁−E₂))]²)`. Correct.
- Square-root series: √(1+u) = 1 + u/2 − u²/8 + u³/16 − 5u⁴/128, u = z². Page correct (see finding 1 for the citation).
- Convergence condition (1.1.47) and z = 2λ|V|/(E₁−E₂): correct. 100/101 example: ½|ΔE| = 0.5 < 2 or 3, so the series diverges. Correct.
- (x̂/d)⁴ = (â+â†)⁴/4 since x̂/d = (â+â†)/√2: correct, matches (1.1.51)-(1.1.52).
- (â+â†)⁴|0⟩: recomputed numerically (200-state truncation): components (3, 0, 8.4853, 0, 4.8990) = (3, 6√2, √24). Correct, matches (1.1.59).
- E₀⁽¹⁾ = 3/4 ħω, E₀ = ½ħω(1 + 3λ/2): correct (1.1.54)-(1.1.56).
- δH₂₀ = 6√2/4 = 3√2/2 ħω, δH₄₀ = √24/4 = √6/2 ħω: correct (1.1.60).
- E₀⁽²⁾ = −(9/2)/2 − (3/2)/4 = −9/4 − 3/8 = −21/8 ħω; inside ½ħω(…) this is −21/4 λ². Correct (1.1.61)-(1.1.62).
- Bender-Wu coefficients as printed in notes (1.1.63): 333/8, −30885/64, 916731/128. Independently: for H = p²/2 + x²/2 + g x⁴ the known series is ½ + ¾g − 21/8 g² + 333/16 g³ − 30885/128 g⁴ + …, which is the notes' series with g = λ. The transcript (L2.2 p. 5) says "30,855/64": the page's slip note is correct. Numerical check: exact E₀(0.01) = 0.5072562 ħω; series through λ⁴ gives 0.5072583, consistent.
- Worked example, λ = 0.1: terms 0.15, 0.0525, 0.041625, 0.048258, 0.071620 (λ⁵). All match the page (0.0416, 0.0483, 0.0716). "Shrink for three steps then grow": correct. Bracket to λ³: 1.139125; E₀ ≈ 0.56956 ħω, page 0.570. Correct.
- Exact E₀(λ = 0.1), by numerical diagonalization (150-200 number states): 0.559146 ħω. The page's estimate is 1.9% high: "a few per cent" is fair. "The error is roughly the size of the smallest term dropped" is loose: the first dropped term (λ⁴) is worth 0.024 ħω, the actual error 0.010 ħω. Suggest (info) quoting the accurate value 0.5591 ħω so the reader can see the error directly; stopping one term earlier (0.5488 ħω) is equally close, which is worth a sentence as "optimal truncation" is only good to about the size of the smallest term.
- Toy model: [[1,λ],[λ,1]] has eigenvalues 1 ± λ, eigenvectors (1, ±1)/√2. Correct.
- Quiz 1 (variational argument): answer 0 correct, explanation correct.
- Quiz 2 (convergence condition): answer 0 correct; explanation correct.
- Quiz 3 (first-order shift ¾λħω): answer 0 correct.
- Quiz 4 (δH diagonal in V_N): answer 0 correct, explanation matches (1.2.24).
- Flashcards: level repulsion matches (1.1.41) (with the λ² stripped consistently); the series in card 3 matches (1.1.63); cards 2 and 4 correct.
- Calcs file `calcs/8.06/perturbation-series-degenerate-levels.yaml`: every expected value recomputed and agrees. `sqrt-series` tolerance 1e-10 at z = 0.1 is safe (remainder 7z¹⁰/256 ≈ 3e-12). The `sqrt-series` `where`/`origin: mit` should mention that notes (1.1.46) prints z⁶/6 and +5z⁸/128 (finding 1). If the page adds the exact value 0.5591, add a calcs entry (numerical diagonalization cannot be done with the harness, so as `kind: fact` or via a known reference value).

## Citation checks
- Equation numbers verified against the rendered notes: (1.1.38), (1.1.39), (1.1.41), (1.1.43)-(1.1.44), (1.1.45), (1.1.46) [content differs, finding 1], (1.1.47), (1.1.49)-(1.1.50), (1.1.51)-(1.1.52), (1.1.54)-(1.1.56), (1.1.59), (1.1.61), (1.1.63), (1.1.64)-(1.1.66), (1.2.1)-(1.2.3), (1.2.7)-(1.2.8) (calcs), (1.2.12)-(1.2.14), (1.2.17), (1.2.21) (the λ¹ line; λ⁰ is 1.2.20), (1.2.24), (1.2.25). All correct.
- Transcript page citations, checked with `pdftotext -f N -l N` on each segment PDF: L2.1 pp. 1-2 (ground state overestimate; slip on p. 2), p. 3 (level repulsion), pp. 3-6 (validity), p. 5 (radius of convergence); L2.2 pp. 1-2 (set-up), pp. 2-3 (first order: "3" and 3/4 on p. 2, the factor 1 + 3λ/2 on p. 3), pp. 3-4 (second order), p. 5 (Bender-Wu, asymptotic series, exercise on the state); L2.3 pp. 1-2 (toy model, eigenvalues p. 1, "jump" p. 2), pp. 2-3 (set-up), p. 3 (hydrogen n = 2, four states), p. 4 (expansion with label k); L2.4 p. 1 (three-step plan), pp. 1-2 (diagonal condition and energies). All correct.
- `benderwu` cited "as quoted in the 8.06 notes, eq. (1.1.63)": honest, since the paper was not read. The footnote paraphrase (Bender and Wu's coefficients must be doubled because they take A₀ = 1/2) matches notes footnote 1.

## Coverage and order
- Order follows L2.1 → L2.2 → L2.3 → L2.4 and notes §1.1 (Remarks), §1.1.1, §1.1.2, §1.2.1, §1.2.2.
- Omitted: the λ² equation (1.2.22), which Zwiebach writes in L2.3 p. 5 (the page refers to it only in the three-step plan); the notes' Table 1.1 of partial sums of √(1+z²) (notes only, not in the lecture); notes' Exercise 3 (anharmonic spacing) and eq. (1.2.26). The first-order state (1.1.64)-(1.1.66) is mentioned with a pointer, as the lecture leaves it as an exercise. All acceptable; adding (1.2.22) would complete L2.3 (info).
- Added beyond MIT: the worked example (own, λ = 0.1) and the remark that degenerate levels need separate treatment, which the notes make at the end of §1.1.1. Fine.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the four transcripts and chapter 1 of the notes: no notices. Figure 1.3 (hand drawing) is not reused.
- No OpenStax or LibreTexts material. No verbatim paragraphs; spot-checked sentences against the notes (e.g. the remark on (1.2.24) and the asymptotic-series paragraph) are rewritten. The 100/101 illustration is MIT's (finding 6).

## Forward links
- `leadsTo` 8.06 Lecture 3 ("the first-order states, and what to do when the degeneracy survives first order"): L3 segment titles are "Remarks on a 'good basis'", "Degeneracy resolved to first order; state and energy corrections", "Degeneracy resolved to second order" (and continued). Correct. The page's closing sentence ("the subject of the next lecture") matches L2.4 p. 2.
- No `Callout kind="cosmology"`; none is needed for this lecture.

## Notes
- "Bender and Wu carried the expansion to very high order": the transcript says "probably 100 terms in the series or so" (hedged); the page's wording is fine.
- "few series in physics actually converge" is Zwiebach's own remark (L2.2 p. 5, "Very few things actually converge in physics"); consider attributing it ("as Zwiebach puts it").
- Bender-Wu paper not read; the coefficients were checked numerically and against the standard published series, not against the paper itself.

## Resolution (2026-11-18, by the page author)

Errors:
1. The z⁶ note now says that both the lecture and the notes give 1/6, and the notes print the z⁸ term with a plus sign; the correct values (1/16, −5/128) are used. The calcs `sqrt-series` entry says the same.
2. "Zero over zero" is replaced: the state formula divides δH₂₁ = 1 by a zero energy difference and diverges, with a bracket noting that the notes call it ambiguous.

Warning:
- The anharmonic paragraph no longer claims real potentials grow faster than x². It now says an x⁴ term is added and makes the potential grow faster.

Info:
- The L2.1 p. 2 slip bracket now says only what the transcript supports: Zwiebach corrects the second term to contain δH.
- The ground-state second-order correction is now "negative or zero".
- The 100/101 illustration is now attributed to Zwiebach.
- The λ² equation (1.2.22) is left out on purpose. It is used in Lecture 3, whose page will state it.
- Worked example: the sentence now says the error is smaller than the first term left out (true here: 0.010 ħω against 0.024 ħω). The exact value 0.5591 ħω is not quoted, because the calc tests cannot recompute it.
