---
page: content/year-4/8.286/age-closed-universe.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-9-the-dynamics-of-homogeneous-expansion-part-v/ (not fetched; content read via the local transcript and slides below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/267c7e3266416a08c2d8445fb5817888_U9n-Y_ZC-2M.pdf (read via local copy t09.txt, video ID U9n-Y_ZC-2M matches the filename; transcript pp. 17-23 read in full. URL not fetched, so I could not confirm that the link resolves.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec09/ (read via local copy l09.pdf; slides 4-7 rendered as an image and checked visually, slide text also checked with pdftotext)
  - Third-party study notes notes-L9.md (used only as a guide; every point used here was checked against t09.txt or l09.pdf)
  - Lecture 10 materials: not available locally and not read
verdict: pass-with-notes
---

# Review: The age of a closed universe from H and Ω

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "The open universe" | Lecture 9 was given on Tuesday, October 8, 2013 (slide header). It ends "We will continue on Thursday" (t09 p. 23), i.e. two days later, in the same week. The transcript does not say what Thursday's lecture covers. | "Guth ends the lecture before reaching it and continues the following week." | "Continues the following week" is wrong: the next lecture is that Thursday. Also it is not verified here that Lecture 10 does the open case at all. Suggest: "Guth ends the lecture before reaching it ('We will continue on Thursday')." The first half of the callout (the "last!" in the slide title, the open case not reached in L9) is correct. |
| 2 | warning | Frontmatter `leadsTo` (Lecture 10: "The meaning of a/√k as a radius of curvature: non-Euclidean geometry.") | In L9 (pp. 16-17) Guth says the geometric meaning of a/√k will come in later lectures. From my own knowledge, the Fall 2013 Lecture 10 is titled "Introduction to Non-Euclidean Spaces", so the link is plausible. I could not read Lecture 10, so this is **uncertain**. | Lecture 10 explains a/√k as a radius of curvature. | Keep, but check against the Lecture 10 page/transcript before setting `status` beyond draft. If Lecture 10 starts by finishing the open-universe age, consider mentioning that too (it would also resolve finding 1). |
| 3 | info | Table "Quadrant of θ" | Slide 7 columns: Quadrant / Phase / Ω / Sign Choice / sin⁻¹(). Rows: 1 Expanding, 1 to 2, Upper, 0 to π/2; 2 Expanding, 2 to ∞, Upper, π/2 to π; 3 Contracting, ∞ to 2, Lower, π to 3π/2; 4 Contracting, 2 to 1, Lower, 3π/2 to 2π. | Same rows and values, all match exactly. Last column relabelled "θ range" instead of "sin⁻¹()". | Fine: the relabelling is clearer and correct (the column is the value the arcsin must return, i.e. θ). Optionally note that Guth heads it sin⁻¹(). |
| 4 | info | "From H and Ω..." paragraph: "even a closed universe starts out at exactly the critical density" (bold) and Summary "starts at Ω = 1" | "at very early times omega is driven to 1 even in a closed universe" (p. 20). | "starts out at exactly the critical density" | Ω = 1 holds only in the limit t → 0 (at θ = 0 itself, ρ and ρ_c are both infinite). Consider "Ω → 1 as t → 0" or "starts out arbitrarily close to the critical density". |
| 5 | info | Age formula sentence "Guth writes the result with an inverse sine" and the arccos remark | Guth chooses arcsin because the answer already contains sin θ, and notes anything with an inverse cosine can be rewritten with an inverse sine (pp. 20-21). | Arcsin attributed to Guth; arccos form clearly presented as the page's own equivalent, used for the plot. | Correct and fairly attributed. No change needed. |
| 6 | info | Worked example, Step "Development angle": "θ = π/2 (first quadrant, expanding)" | Slide 7: θ = π/2 (Ω = 2) is the boundary between quadrants 1 and 2. | "first quadrant" | Harmless (arcsin(1) = π/2 on either branch). Could say "the boundary of the first and second quadrants". |
| 7 | info | Coverage | L9 pp. 17-23 also has the student question about what the universe looks like at Ω = ∞ (temporarily static, finite density depending on α; Guth calls it "a good homework problem"). | The page says H = 0 and the density is finite, but not "temporarily static". | Optional one-line addition. |

## Arithmetic and answer checks
- ρ = Ωρ_c, ρ_c = 3H²/(8πG) → (8π/3)Gρ = H²Ω; Friedmann in ã: H² = H²Ω − c²/ã². Matches t09 p. 18.
- ã = c/(|H|√(Ω−1)): from ã² = c²/[H²(Ω−1)], positive root, |H| because H < 0 when contracting. Matches pp. 18-19.
- α = (4π/3)Gρã³/c² = (H²Ω/2)ã³/c² = cΩ/[2|H|(Ω−1)^{3/2}]. Recomputed, matches p. 19. Flashcard 2 matches.
- c/(|H|√(Ω−1)) = α(1 − cos θ) → 2(Ω−1) = Ω(1 − cos θ) → cos θ = (2−Ω)/Ω, Ω = 2/(1+cos θ). Recomputed, matches p. 19. Flashcard 1 matches.
- Ω narrative (1 → 2 at θ = π/2 → ∞ at θ = π → back to 1 at the Big Crunch; at turnaround H = 0 so ρ_c = 0 while ρ finite): matches p. 20 and slide 7.
- sin θ = ±√(1 − cos²θ) = ±√(Ω² − (2−Ω)²)/Ω = ±2√(Ω−1)/Ω. Correct. (The transcript garbles this as "square root of 2 times omega minus 1 over omega"; the page has the correct form, matching slides 6-7.)
- Age formula with ± inside the arcsin and ∓ outside, signs always opposite: matches slides 6 and 7 exactly (rendered and checked) and p. 21. Citation `reading2` at "slides 6–7" is correct. The other two formulas are blackboard results cited to the transcript (`reading1`), also correct.
- Sign consistency check (mine): lower sign gives arcsin(−s) + s with sin θ = −s, i.e. θ − sin θ. Consistent with ct = α(θ − sin θ) in every quadrant when the branch from the table is used.
- Plot expression Ht = Ω/[2(Ω−1)^{3/2}]·{arccos((2−Ω)/Ω) − 2√(Ω−1)/Ω}, recomputed: Ω = 1.001 → 0.6665; 1.01 → 0.6653; 1.1 → 0.6539; 2 → 0.5708; 10 → 0.3515. Flat limit Ω → 1⁺: with s = 2√(Ω−1)/Ω, arcsin s − s ≈ s³/6 → Ht → 2/3. Correct. Marked point (2, 0.5708) correct; range [0, 0.75] contains the curve. arccos returns θ ∈ [0, π], so it is valid for the whole expanding phase (Ω from 1 to ∞), as the page says.
- Worked example (H = 67.3 km/s/Mpc, Guth's Planck value from slide 1): 1/H = 14.53 Gyr → "14.5" OK. Age (π/2 − 1)/H = 8.29 Gyr → "8.3" OK. Flat age (2/3)/H = 9.69 → "9.7" OK. Lifetime 2πα/c = 2π·Ω/[2H(Ω−1)^{3/2}] = 2π/H at Ω = 2 = 91.3 Gyr → "91" OK. Maximum size: ã now = α(1 − cos π/2) = α, a_max/√k = 2α, so a doubles, consistent with a_max = Ω/(Ω−1) = 2 on the open-closed-flat page (line 111, derived from the conserved energy). All correct. The example (Ω = 2) is original; Guth gives no numerical example here.
- Quiz 1: answer index 2, "It rises from 1 to ∞". Correct; explanation correct.
- Quiz 2: answer index 1, "Younger: t ≈ 0.571 H⁻¹, versus 2/3 H⁻¹". Correct; explanation (more matter, more deceleration, faster expansion in the past, so less time to reach today's H) is correct.
- Quiz 3: answer index 1, "2". Correct.
- Flashcard 3: (π/2 − 1)H⁻¹ ≈ 0.571 H⁻¹. Correct.
- Open-universe callout, hyperbolic functions (from my knowledge, not from L9): the k < 0 solution is ct = α(sinh θ − θ), a/√|k| = α(cosh θ − 1). The claim is correct.

## Coverage and order
- The page covers t09 pp. 17-23 (the second half of Lecture 9) in Guth's order: motivation (H, Ω measurable), ρ_c and Ω, ã and α in terms of H and Ω, cos θ(Ω), Ω evolution, sin θ and the age formula, branch ambiguity, quadrant table, "our universe would be in quadrant 1". Nothing in that segment is out of order.
- The first half of L9 (review, questions, solving the integral, cycloid, lifetime) is on the separate `closed-universe-cycloid` page, consistent with `order: 2`.
- Added beyond MIT, and labelled as such or clearly the page's own: the arccos equivalent, the Ht(Ω) plot, the Ω = 2 worked example, the flat-limit statement in the plot caption and Summary, the open-universe callout.
- Omitted: the Ω = ∞ "temporarily static" Q&A (finding 7).

## Licensing
- Slides 6-7 carry no "©", "All rights reserved" or "Courtesy of" notices; the formula and the quadrant table are factual content, re-typeset rather than copied as an image. No MIT logo or slide images reused.
- No verbatim transcript passages found. "almost everything cancels" vs Guth's "most things cancel away" is ordinary wording.
- Page licence CC BY-NC-SA 4.0 is compatible with OCW.

## Notes
- No error-level findings. Two warnings: the "following week" wording in the open-universe callout (the next lecture was two days later, same week) and the unverified Lecture 10 `leadsTo` (plausible from the lecture title as I recall it, but not checked against a source).
- notes-L9.md was checked against the transcript and slides for every point used here and was accurate.

## Resolution (2026-11-14, by the page author)
- Open-universe callout now says Guth continues in the next lecture, two days later (not "the following week").
- "Starts at exactly the critical density" changed to "arbitrarily close … as t → 0".
- Added that at Ω = ∞ the universe is momentarily static.
- Lecture 10 link kept: its OCW title is "Introduction to Non-Euclidean Spaces" (from the 8.286 syllabus in content/year-4/8.286/_course.json).
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
