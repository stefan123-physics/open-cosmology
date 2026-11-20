---
page: content/year-5/8.962/equivalence-principle-local-lorentz-frames.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/5ceefe9356be954268527b93f35628a9_gnWKpHUj11w.pdf (read: local copy of the Lecture 7 transcript, pdftotext output with PDF page markers; the PDF has no printed footer, so PDF page numbers are the citation pages)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-7-the-principle-of-equivalence-continued-parallel-transport/ (not fetched: video page; the lecture has no slides or notes, and the brief was to cite the transcript only)
verdict: needs-changes
---

# Review: The equivalence principle and local Lorentz frames

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout "Free fall in the expanding universe" | Not in the lecture (page's own addition). Standard GR: the Robertson-Walker curvature involves ä/a, (ȧ/a)² and k/a² (e.g. R = 6(ä/a + ȧ²/a² + k/a²)), i.e. second derivatives of the *metric*, which include squares of first derivatives of a. | "its curvature, built from second derivatives of the scale factor, cannot be transformed away" | Wrong as stated: a flat universe with a ∝ t has ä = 0 but nonzero curvature, and the empty open (Milne) universe, a = t with k = −1, is an RW metric whose curvature is zero (it *is* Minkowski space in other coordinates). Reword, e.g. "its curvature, built from second derivatives of the metric (terms in ä/a, (ȧ/a)² and k/a²), is not zero for any universe containing matter, radiation or vacuum energy, so it cannot be transformed away". |
| 2 | warning | "Tides: why the frame must be small", paragraph 1 (p. 7) | p. 7 first says the bottom person goes down, then, describing the sketch, slips: "the person at the bottom moving up and away". | "the bottom one drifts down and away" | The page is right; per writing rule 4, add a short bracket such as "(in the recording Hughes once says 'up and away' for the bottom person; down is meant)", or leave it if the slip is judged too minor to mention. |
| 3 | info | "Vectors on a curved manifold", naive-derivative Formula (p. 18) | Hughes writes the ordinary difference quotient on the board but the transcript does not say its exact form; q is at x^α + dx^α. | lim over dx^β of (A^α(q) − A^α(p))/dx^β | Acceptable as a schematic reconstruction. Optionally say "with q displaced from p along x^β only" so the quotient is well defined. |
| 4 | info | Same section, "just as in the flat-space calculation of the last lecture" (p. 19) | "for the same reason that we ran into problems when we began working with vector spaces and curvilinear coordinates"; "very similar to the notes I've already posted" (pp. 18-19). | "just as in the flat-space calculation of the last lecture" | Fair summary; "curvilinear coordinates" would match Hughes's wording more closely. |

All seven `<Formula>` citations were checked against the transcript:
- Christoffel symbols from the metric, p. 2: Hughes says "the result looks like this" on p. 2. Formula is the standard one, correct index placement.
- Redshift up a tower, p. 3: spoken on p. 3 ("omega t equals ... put my c squareds back in"). ω_t = ω_b(1 − gh/c²) is the correct first-order result.
- Metric in new coordinates, p. 11: transformation matrix "takes the usual form" and "given by doing this coordinate transformation", both p. 11. g_{ᾱβ̄} = Λ^α_ᾱ Λ^β_β̄ g_{αβ} with Λ^α_ᾱ = ∂x^α/∂x^ᾱ is correct.
- Taylor expansion of the metric, p. 12: matches Hughes's spoken expansion on p. 12, in barred coordinates ("Let's do the expansion in the bar coordinate").
- Locally Lorentz coordinates, p. 15: written "schematically" at the bottom of p. 15. Correct.
- L ~ 1/√(∂²g), pp. 16-17: the statement runs across the page break. Correct.
- Naive derivative, p. 18: correct page (see row 3).

## Arithmetic and answer checks
- Order zero: symmetric 4×4 gives 4·5/2 = 10, Λ gives 16, and 16 − 10 = 6 = n(n−1)/2 (3 rotations + 3 boosts). Correct (p. 14).
- Order one: 10 × 4 = 40 constraints; 4 × (4·5/2) = 40 freedoms. Correct (p. 14).
- Order two: 10 × 10 = 100; symmetric triples 4·5·6/6 = 20; 4 × 20 = 80; 100 − 80 = 20. Correct (p. 15). The page notes Hughes's spoken "m" for n in the formula; checked, he says "n times m plus 1 times n plus 2" (p. 15).
- 4⁴ = 256 and 20 independent Riemann components (p. 16). Correct.
- Worked example n = 3: 3·4/2 = 6 and 9, leaving 3 (SO(2,1): one rotation, two boosts). 6×3 = 18 and 3×6 = 18. 6×6 = 36, 3·4·5/6 = 10, 3×10 = 30, so 6 are left. n²(n²−1)/12 = 9·8/12 = 6, and 16·15/12 = 20 for n = 4. All correct. The general identity holds: [n(n+1)/2]² − n·n(n+1)(n+2)/6 = n²(n+1)[3(n+1) − 2(n+2)]/12 = n²(n²−1)/12, so the "indeed" in the example is exact for every n. The example is original: Hughes counts only n = 4.
- Plot: the Newtonian radial tidal acceleration is (2GM/r³)Δz, so d²z/dt² = ω²z with ω² = 2GM/r³ is correct, and z = ±L cosh(ωt) solves it with zero initial velocity. cosh(1.5) = 2.352, inside the x domain [−2.6, 2.6]; the y range [0, 1.6] covers s ∈ [0, 1.5]. The caption marks the formula as the page's own illustration. Correct.
- Calcs file: every entry agrees with the page; the expected values were recomputed by hand above. `riemann-independent-4d`, `n3-*` and the tidal entries are correctly marked `page-own`.
- Quiz 1 (answer index 1, congruent world lines): correct; explanation right (pp. 4-5).
- Quiz 2 (index 1, tides): correct (p. 7).
- Quiz 3 (index 2, 100 and 80, 20 left): correct; explanation's 10×10 and 4×20 right.
- Quiz 4 (index 1, rotations and boosts): correct (p. 14).
- Flashcards: all five are consistent with the transcript (WEP and 10⁻¹³ p. 9, attributed as Hughes's figure; Einstein EP and Carroll's name p. 10; strong EP with Moon, pulsars, LIGO pp. 10-11; counting pp. 14-15; curved manifold, cylinder and tangent spaces pp. 17-18).
- Later development: MICROSCOPE final result (Touboul et al., PRL 129, 121102, 2022) gives an Eötvös parameter of order 10⁻¹⁵ (about (−1.5 ± 2.7) × 10⁻¹⁵ combined). "About a part in 10¹⁵" is fair, and the page marks it as a later development. From memory, not re-fetched.

## Coverage and order
- The page follows the lecture's order: recap (pp. 1-2) → Schild part one recap and redshift (pp. 2-3) → Schild part two (pp. 3-5) → freely falling frames (pp. 5-7) → tides, tall elevator, non-congruent world lines (pp. 7-8) → Euclid's axiom and the sphere (p. 8) → weak EP and free-fall tests (p. 9) → why WEP is not enough, Einstein EP (p. 10) → strong EP aside (pp. 10-11) → local Lorentz frame counting (pp. 11-15) → Riemann count and the curvature scale (pp. 16-17) → curved manifolds, cylinder, tangent spaces, naive derivative, parallel transport (pp. 17-20).
- Nothing substantive from the lecture is left out. Small omissions that do not need adding: the remark that the relative velocities stay constant ("1 metre per second" example, p. 6) is summarised rather than given; the FFF abbreviation is dropped.
- Additions: the tidal plot (marked as the page's own), the n = 3 worked example (own), the MICROSCOPE note (marked as a later development), the cosmology callout (see row 1). All are marked or clearly the page's own.

## Licensing
- The transcript has no "All rights reserved" or "Courtesy of" notices. The lecture has no slides or figures, and the page reuses none.
- Paraphrase: no transcript sentence is pasted. Close echoes are short, standard or attributed ("maths is just counting", "weasel word", "congruent"). Hughes's colourful phrases ("plummeting", "drop mic", "vomitous") are not reused.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo Lecture 8 (parallel transport, Lie transport, Killing vectors) matches the syllabus title "Lie Transport, Killing Vectors, Tensor Densities" and Hughes's "two [transports] that the physics picks out" (p. 19). Lecture 8's content itself was not read, so the detail "defines parallel transport properly, with the covariant derivative" is unverified but plausible. leadsTo Lecture 10 ("Spacetime Curvature") for the Riemann tensor is consistent with "just in a couple lectures" (p. 16).
- Attribution: "Hughes recalls ... perhaps better by now", "Carroll's name for it", "Hughes credits the argument to Alfred Schild" (spelling note included), and the student's answer about rotations and boosts are all honestly attributed.
- No em dashes found in the page.
- Signature (−,+,+,+) is stated and used consistently (diag(−1, 1, 1, 1), p. 13).

## Resolution (2026-11-19, by the page author)

- Finding 1 (error): the cosmology callout now says the Robertson–Walker curvature consists of second derivatives of the metric (involving ä/a, (ȧ/a)² and k/a²) and is non-zero, so cannot be transformed away, in any universe containing matter, radiation or vacuum energy (which excludes the empty Milne case).
- Finding 2: a bracketed note now records Hughes's slip on p. 7 ("up and away" for the bottom person).
- Finding 3: the naive derivative is now introduced as schematic, with q displaced along x^β only.
- Finding 4: "the flat-space calculation" now reads "curvilinear coordinates in flat spacetime".
