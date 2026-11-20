---
page: content/year-2/8.04/square-wells.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read: resource page, CC BY-NC-SA 4.0 footer)
  - MIT8_04S16_LecNotes11.pdf, Zwiebach, "Lecture 11", March 17, 2016, 10 printed pages + OCW terms page (read in full with pdftotext; footers checked page by page)
verdict: pass-with-notes
---

# Review: The infinite and finite square wells

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Odd solutions paragraph, bracket on eq. (2.35) | Eq. (2.35), p. 8: outside the well ψ = A e^{−k\|x\|} for \|x\| > a (the extracted text shows a literal k here, while κ elsewhere, e.g. (2.23), (2.32), is a separate glyph). The form is also even, not odd: the sign factor for x < −a is missing. | Bracket says the exponent −k\|x\| is a slip for −κ\|x\|; separately says the exponential carries "the sign of x, to be odd". | The k-for-κ note is correct. Optionally add that the notes' (2.35) also omits the sign factor (e.g. "and omits the factor sign(x)"), so the page's "with the sign of x" is visibly a correction rather than a paraphrase. |
| 2 | info (uncertain) | Infinite well, feature 2 | p. 4, item 2: "It is at x = a, the midpoint of the interval" (pdftotext -raw gives "x = a," with no fraction; in item 3 the fraction a/2 does extract as "a2", so this looks like a genuine slip in the notes, but this is not certain from text extraction alone). | "The first excited state's single node is at the midpoint a/2." | Page is physically right. If the slip is confirmed in the PDF, AGENTS.md rule 4 suggests a short bracket, e.g. "(the notes write x = a, a slip for a/2)". |
| 3 | info | "Reading the picture" | p. 8: each branch of ξ tan ξ starts at zero (at ξ = nπ) and diverges at odd multiples of π/2; p. 9: −ξ cot ξ is absent for ξ < π/2. | "the odd curves start at ξ = π/2" | Only the first odd branch starts at π/2 (later ones at 3π/2, 5π/2, …). Consider "each odd curve starts at an odd multiple of π/2, the first at π/2". Not wrong as written, just loose. |
| 4 | info | Infinite well, feature list | Notes list five features (p. 3–4); items 3 (alternating symmetry) and 4 (why: even potential after shifting) are separate. | Four features; notes' items 3 and 4 merged into one. | None needed. |
| 5 | info | Normalization sentence, "notes pp. 2–3, eq. (1.10)" | Eq. (1.9) (ψ_n = N sin) is on p. 2; eq. (1.10) is on p. 3. | Cites pp. 2–3 for (1.10). | Acceptable (covers 1.9–1.10); "p. 3, eq. (1.10)" would be more exact. |

All `<Formula>` citations checked against printed footers (pdftotext -f N -l N):
- (1.1) p. 1; (1.11) p. 3; (2.12) p. 4; (2.25) p. 7; (2.26)–(2.27) p. 7; (2.29) p. 7 and (2.31) p. 8 ("pp. 7–8" correct); (2.34) p. 8; (2.36) p. 8. All correct, and every formula matches the notes' notation and physics (V = −V₀ for |x| ≤ a, ξ = ka, η = κa, z₀² = 2mV₀a²/ħ², |E|/V₀ = η²/z₀², Ẽ = ξ²ħ²/(2ma²)).
- Inline citations also correct: (1.2) p. 1; boundary-condition and ψ′ discussion p. 2; (1.3)–(1.8) p. 2; (2.13), (2.14) p. 5; (2.15) p. 5 with the region list continuing on p. 6; (2.16)–(2.22) p. 6, (2.23)–(2.24) p. 7; (2.32)–(2.33) p. 8; quantization argument pp. 9–10; shapes (Figure 7 text) p. 10.

## Arithmetic and answer checks
- Worked example, recomputed independently (bisection in Python, m_ec² = 511 000 eV, ħc = 197.33 eV nm, V₀ = 10 eV, a = 0.20 nm):
  - z₀ = 0.20·√(1.022×10⁷)/197.33 = 3.2401 → "≈ 3.24" correct. z₀/π = 1.031, so z₀ just exceeds π: 2 even states (thresholds 0, π) and 1 odd (π/2 < z₀ < 3π/2) = 3 bound states. Correct.
  - Roots: ξ₁ = 1.19355, ξ₂ = 2.33628, ξ₃ = 3.22803 → page 1.194, 2.336, 3.228 correct.
  - η = 3.012, 2.245, 0.280 → page 3.01, 2.25, 0.28 correct.
  - E = −8.643, −4.801, −0.0745 eV → page −8.64, −4.80, −0.07 correct (third state indeed barely bound).
  - Ẽ₁ = 10 − 8.643 = 1.357 eV (also ξ₁²ħ²/(2ma²) = 1.357 eV) → "≈ 1.36" correct.
  - Infinite well of width 0.40 nm: π²(197.33)²/(2·511 000·0.16) = 2.350 eV → "≈ 2.35" correct. Comparison (1.36 < 2.35, leakage makes the well effectively wider) is correct physics and consistent with the notes' remark that ξ → π/2 as V₀ → ∞ (Ẽ → infinite-well ground state of width 2a).
- Quiz 1: answer 0 correct (notes p. 2 argument).
- Quiz 2: E₃/E₁ = 9, answer 0 correct.
- Quiz 3: z₀ = 2. Even states need z₀ > 0, π, 2π, … → one; odd states need z₀ > π/2, 3π/2, … → one (2 > 1.571, 2 < 4.712). Total 2, answer 0 correct; explanation's counting rule is right.
- Quiz 4: answer 0 correct (notes p. 8: the arc always meets the first branch of ξ tan ξ). Distractor "Yes, if z₀ < π/2" is correctly wrong (that only removes odd states, notes p. 9).
- Flashcards: all three match (1.11), (2.26)–(2.27), (2.34), (2.36), (2.29), (2.31). "ψ_n has n − 1 nodes" matches the Figure 2 caption, p. 3.
- Plot: generated from mathjs expressions (circle √(Z² − ξ²), ξ tan ξ, −ξ/tan ξ clipped to 0 ≤ η ≤ 9), not an image; the notes' Figures 5–6 are not copied (they show separate fixed-radius plots; the page uses one combined plot with a slider). Caption "new crossings appear, one every π/2" is correct: the number of bound states is ⌈2z₀/π⌉. At the default z₀ = 5 the plot shows 4 crossings (2 even, 2 odd), consistent. Label placement was not tested in a browser (content:check covers it).
- calcs/8.04/square-wells.yaml exists and its expected values agree with the recomputation above; `npm run calc:test` was not run by this review.

## Coverage and order
- Page follows the notes' order exactly: infinite well (potential, ψ = 0 outside, boundary conditions and ψ′ discontinuity, solution, normalization, spectrum, features 1–5), then finite well (potential, bound-state energy range, Ẽ, regions, even solutions, ξ/η/z₀, energy formulas, matching, graphical solution, odd solutions, z₀ < π/2, quantization argument, Figure 7 shapes).
- Nothing in Chapter 11 is left out. Added material: the worked example only (original numbers).
- Not on the page but outside the chapter: the course syllabus title for Lecture 11 in `content/year-2/8.04/_course.json` adds "general properties of one-dimensional potentials", which Chapter 11 does not contain (that material is in later chapters). Course file, not this page; noted for the author. Also seen in passing: the syllabus entry for Lecture 13 points to `mit8_04s16_lecnotes12`, which may be a copy error (not verified further).

## Licensing
- The OCW resource page carries the CC BY-NC-SA 4.0 licence; the PDF has no "All rights reserved" or "Courtesy of" notices (grep of the full text found none). The only credit line ("Sarah Geller transcribed Zwiebach's notes …") is an authorship note, not a third-party image credit.
- No figures reproduced (Figures 1–7 are described in words or replaced by the generated plot).
- No verbatim copying found: the page paraphrases throughout; shared phrases are standard terminology ("bound states", "most deeply bound", "complete set").
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"`; acceptable for this lecture. `leadsTo` 8.04 Lecture 12 with "general properties of one-dimensional bound states, turning points and the shape of wavefunctions" is consistent with the notes' forward references ("we will later prove that the bound states of a one-dimensional even potential are either even or odd") and with the syllabus title for Lecture 12.
- The statement "(as on the circle) E > 0" for the infinite well: the notes say "as we did before, one can show that the energy E must be positive (do it!)"; the page's attribution to the previous lecture is fair.
- The claim that any normalizable 1D ground state has no nodes is stated in the notes (p. 4) without proof; the page states it the same way.
- No errors found; verdict pass-with-notes. All findings are optional improvements.

## Resolution (2026-11-17, by the page author)

1. The bracket on eq. (2.35) now also says the notes leave out the sign factor that makes the outside solution odd.
2. No note added: the text extraction drops the "/2" in "a/2" elsewhere on the same page (p. 4, item 3 prints "x = a2"), so the PDF most likely reads a/2.
3. "The odd curves start at ξ = π/2" now reads "start at ξ = π/2, 3π/2, … and rise to infinity at each multiple of π".
4.–5. No change.
6. `_course.json` is outside this run's scope (new lesson files only); noted in the run summary for the owner. The Lecture 13 URL pointing to `lecnotes12` is intended: MIT's notes 12 cover both Lecture 12 and the shooting method of Lecture 13.

Status set to `reviewed`.
