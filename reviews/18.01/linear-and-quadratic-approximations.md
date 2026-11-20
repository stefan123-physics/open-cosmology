---
page: content/year-1/18.01/linear-and-quadratic-approximations.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-9-linear-and-quadratic-approximations/ (read, via the two readings below)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec9/ (read: lecture notes PDF, printed pages 1–6 after an OCW cover sheet)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/BSAA0akmPEU.pdf (read: transcript, 11 pages, page = PDF page)
  - content/year-4/8.286/doppler-effect.mdx and reviews/8.286/doppler-effect.md (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Linear and quadratic approximations

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Section "The quadratic list and the best-fitting parabola", list and formula "Basic quadratic approximations" (cited "transcript, p. 10; notes, p. 5") | The lecture works out f''(0) only for sin x, cos x and eˣ (transcript p. 10), then the geometric picture, then stops: "we'll save these other derivations for next time" (p. 11). ln(1 + x) and (1 + x)ʳ come only from the notes (p. 5; the notes prove case 4 only). | Presents all five as one list with a joint transcript/notes citation; nowhere says the lecture ran out of time. | Add a short bracket, e.g. "[The lecture stops after eˣ and the cosine picture; the last two entries are from the notes, p. 5.]" and cite the ln/power items to the notes only. |
| 2 | warning | Cosmology callout "Small redshifts", last sentence | Per the 8.286 Doppler page and its review (reviews/8.286/doppler-effect.md, item on the small-β expansion): z ≈ β + β²/2 is "the page's own result, not Guth's". I did not read the 8.286 Lecture 3 transcript myself, so this rests on that review. | "The 8.286 lecture on the Doppler effect uses exactly this approximation." | Say "The Open Cosmology page on the Doppler effect (8.286 Lecture 3) quotes this result", or drop the claim about the lecture. The physics in the callout is correct (see checks). |
| 3 | info | Section "Combining approximations by algebra", student-question paragraph (p. 9) | The question comes after the GPS example (transcript p. 9), and Jerison adds that for second derivatives this method is "far superior" to differentiating twice; a second student asks whether one must drop x² terms when differentiating (answer: no, they vanish at 0). | Moved before the GPS section; the second question and the "superior for second derivatives" remark are left out. | Acceptable reordering; optionally add one sentence on the second question. |
| 4 | info | Section "Quadratic approximation", "Where the ½ comes from" | Notes use f = a + bx + cx². | a₀ + a₁x + a₂x². | None: own notation, correct. |
| 5 | info | Section "A real use", GPS bracket | Jerison (p. 8) says the engineers offset the transmitter frequency by "exactly this" (speed) correction. | Reports this as Jerison's claim and adds in brackets that gravity (general relativity) gives a larger effect that the lecture does not discuss. | The bracket is correct (gravitational effect about +45 μs/day against about −7 μs/day from speed) and clearly marked as not from the lecture. Optionally add that the real factory frequency offset covers the combined effect, so "exactly this" is a simplification. |

All formula citations were checked against the sources:
- "Linear approximation" (reading2 p. 1): boxed formula on transcript p. 1. Correct.
- "Logarithm near 1" (reading2 p. 1): transcript p. 1; also notes p. 1. Correct.
- "Average rate close to the derivative" (reading2 p. 2): transcript p. 2. Correct.
- "Basic linear approximations" (reading1 p. 2): notes printed p. 2. Correct.
- "Combining two approximations" (reading2 p. 7): the product is set up at the end of p. 6, expanded and truncated to 1 − (7/2)x on p. 7. Correct (pp. 6–7 would be slightly more exact).
- "Time dilation" (reading2 p. 7): transcript p. 7 (the transcription drops the minus sign in "1 v^2/c^2"). Correct.
- "Time dilation, linear approximation" (reading2 p. 8): transcript p. 8. Correct.
- "Quadratic approximation" (reading1 p. 4): notes printed p. 4; also transcript p. 9. Correct.
- "Basic quadratic approximations" (reading1 p. 5): notes printed p. 5. Correct.
- "A quadratic product" (reading1 p. 6): notes Example 5, printed p. 6, result 1 − (5/2)x + (27/8)x². Correct.
- Inline citations (base point 0 on p. 3, table pp. 3–5, geometry p. 4, shift of base point p. 5 and notes p. 1, ln 1.1 p. 5, hard/easy pp. 5–6, student question p. 9, ln 1.1 quadratic p. 10, "½ next time" p. 10, cosine parabola pp. 10–11, GPS notes pp. 3–4, quadratic GPS and Example 5 notes pp. 5–6): all match.
- Lecturer slip: the transcript does say "(1-u)^(1/2)" on p. 7. The page's bracket (the exponent is −½) is correct and brief. The notes have −1/2.

## Arithmetic and answer checks
- `pytest tests/calc -k linear-and-quadratic`: 25 passed.
- ln 1.1 = 0.09531; quadratic 0.1 − 0.005 = 0.095. Correct.
- Example 3: (1 − 3x)(1 − x/2) = 1 − (7/2)x + (3/2)x²; f′(0) of e^(−3x)(1 + x)^(−1/2) = −3 − 1/2 = −7/2. Correct. Notes' version with e^(−2x): 1 − (5/2)x. Correct.
- GPS: (4/3×10⁵)² = 1.8 × 10⁻¹⁰ ("about 10⁻¹⁰", as MIT says). Quadratic coefficient of (1 − u)^(−1/2): (−½)(−3/2)/2 = 3/8. Correct.
- Example 5: (1 − 2x + 2x²)(1 − x/2 + 3x²/8): x² coefficient 2 + 1 + 3/8 = 27/8. Correct.
- Worked example 1: (a) 1.01, true 1.0099505. (b) (1 + 4x)^(1/2) ≈ 1 + 2x, times 1 − x gives 1 + x − 2x², linear part 1 + x. (c) (8.0/3.0×10⁵)² = 7.11 × 10⁻¹⁰; ½ × 7.11 × 10⁻¹⁰ × 86 400 s = 3.07 × 10⁻⁵ s ≈ 31 μs. All correct.
- Worked example 2: e^0.1 ≈ 1.105 (true 1.105171); √1.02 ≈ 1 + 0.01 − 0.00005 = 1.00995. Linear error 4.95 × 10⁻⁵, quadratic error 4.9 × 10⁻⁷ (< 10⁻⁶). Correct.
- Cosmology callout: (1 + β/2 − β²/8)(1 + β/2 + 3β²/8) = 1 + β + β²/2 + O(β³), so z ≈ β + β²/2. Correct, and it matches line 119 of doppler-effect.mdx.
- Quiz: Q1 1 + rx (index 1). Q2 0.05 (index 2), true 0.04879. Q3 index 1. Q4 1 − x²/2 (index 2). Q5 1.105 (index 1). All marked answers and explanations correct.
- Flashcards: all four correct.
- Plot: the curves are log(1 + x), x and x − x²/2 (mathjs `log` is natural). The caption's values at x = 0.1 (0.0953, 0.1, 0.095) are correct; the domain avoids x = −1.
- Calcs file (info): `quadratic-exact-for-quadratic` only checks f′(0) = a₁, not a₂ = f″(0)/2 as its `where` says; `sqrt102-errors` checks only the linear error, not "under 10⁻⁶". Both claims are true (checked by hand above), but the tests do not cover them.

## Coverage and order
- The page follows the lecture's order: boxed formula, ln x at 1, Δf/Δx reading, standard list at 0 (table), geometric pictures, why we shift to 1 + x, ln 1.1 and "hard vs easy", Example 3, GPS, quadratic formula, ln 1.1 quadratic, sin/cos/eˣ second derivatives, best-fitting parabola. The only reordering is the student question (item 3).
- Completion from the notes: the ½ explanation is honestly marked ("The lecture leaves this for the next time"), and the quadratic GPS term and Example 5 are introduced as "The notes apply...". The ln(1 + x) and (1 + x)ʳ quadratic entries are **not** marked as notes-only (item 1).
- Left out from the notes: Example 3 of the notes (lim (1 + 2x)¹⁰ − 1)/x = 20, done both by the derivative and by linear approximation, p. 3) and the footnote shortcut 1/√(1 + x) = (1 + x)^(−1/2) ≈ 1 − x/2 (p. 3; the page in effect uses this shortcut). Warning-level only if full notes coverage is wanted; the lecture itself does not have them.
- leadsTo 18.01 Lecture 10 (syllabus: "Curve Sketching"): "why the ½" follows Jerison's promise on transcript p. 10. Uncertain: I did not read the Lecture 10 transcript to confirm it opens with this.
- Repetition: no real overlap with exponentials-and-logarithms.mdx or chain-rule-and-higher-derivatives.mdx (neither gives tangent-line approximations or the standard list). limits-and-continuity.mdx mentions ΔL ≈ (dL/dh)Δh for a flat-Earth GPS model; that complements this page and does not duplicate it.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes or the transcript (grep found none). The transcript carries the standard CC notice.
- No OpenStax or LibreTexts material.
- The text is a rewrite. Short paraphrases of Jerison ("hard" / "easy", "best fit parabola", "tons of" quadratic terms → "one of many") are fine. No verbatim paragraphs.
- Worked examples are original (√1.02, √(1 + 4x) e^(−x), a clock at 8.0 km/s, e^0.1). MIT's Examples 3, 4 (GPS) and 5 appear in the body with citations, as lecture content, not as the page's worked examples.

## Notes
- Symbols (data/symbols.json): 18 meanings scoped to this page (x, y, f, f′, f″, x₀, e, r, u, a₀, a₁, a₂, T, T′, v, c, β, z). All fit the page. The u meaning correctly covers its three uses (1 + x, −3x, v²/c²). T and T′ match the page's convention (satellite and ground). c "3 × 10⁸ m/s, here km/s" is fine.
- Status `draft`: correct until the findings are resolved.
- No em dashes found in the page text.

## Resolution (2026-11-15, by the page author)

- **Quadratic list (warning 1):** the sentence before the list now says the lecture works out the first three entries and saves the rest for next time (transcript, pp. 10–11), and that the ln(1 + x) and (1 + x)ʳ entries are from the notes (p. 5).
- **Cosmology callout (warning 2):** now refers to the 8.286 page on the Doppler effect, not the lecture.
- Info notes (moved student question, notes' Example 3 and footnote, the combined GPS offset, the two weaker calcs checks, the Lecture 10 link) left as they are; the reviewer confirmed the claims by hand.
