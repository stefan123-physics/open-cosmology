---
page: content/year-1/18.01/limits-and-continuity.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-2-limits/ (read: lecture page, titled "Lecture 2: Limits")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec2/ (read: lecture notes "Lecture 2: Limits, Continuity, and Trigonometric Limits", 11 printed pages + OCW cover sheet, extracted with pdftotext; page images could not be rendered, no PDF renderer available)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/ryLdyDrBfvI-2.pdf (read: transcript, 11 pages)
  - content/year-4/8.286/age-of-the-universe.mdx (read: to check the 8.286 Lecture 8 link)
  - calcs/18.01/limits-and-continuity.yaml (read; `npm run calc:test` run: 916 passed)
verdict: needs-changes
---

# Review: Limits and continuity

Notes page numbers below are the printed footers (printed page N = PDF page N+1). Transcript pages = PDF pages.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "A zoo of discontinuities", removable paragraph, final bracket | Notes p. 4, as extracted: "sin(x)/x is defined for x = 0". The same extraction turns every ≠ into = (and drops θ completely): p. 3 "computed under the implicit assumption that x = x0", p. 11 "we always assume x = x0. In other words x − x0 = 0" — both can only be ≠. So the printed notes almost certainly read "defined for x ≠ 0", which is correct. (Not checked visually: no renderer was available. Treat as near-certain, not certain.) | "(The notes say $\sin x/x$ "is defined" at $x = 0$; they mean it is not.)" — blames MIT for a slip that is very probably a text-extraction artefact. | Delete the bracket. If you keep a remark, say what the notes say: $\sin x/x$ is defined for $x \ne 0$. Check the PDF page image first. |
| 2 | error | "The derivative's graph need not look like the function's" | Transcript p. 9: on the right branch "this function is going up" as x → 0⁺ (towards +∞), and the left branch goes down to −∞; the slope is negative on both sides. | "$1/x$ goes up on the left of 0 and down on the right" | This has the sides the wrong way round. Write e.g. "$1/x$ shoots up to $+\infty$ just right of 0 and down to $-\infty$ just left of 0, while $-1/x^2$ is negative everywhere…". |
| 3 | warning | "Left-hand and right-hand limits", bracket | Transcript p. 5: he puts the left-hand limit on the right side of the board "just to make things confusing" and says "I may have gotten that wrong", but the definitions he gives there are right. Transcript p. 6: one actual slip ("so that's the left-hand limit. Sorry … This is the right"). | "swaps 'left' and 'right' aloud more than once and corrects himself" | "more than once" is not supported. Write "once swaps 'left' and 'right' aloud and corrects himself (he jokes that he is "a little dyslexic")". |
| 4 | warning | Rate of change, example 2 (pumpkin) | Transcript p. 2: "the building is about 300 feet high … just for convenience purposes we'll use 80 meters because that makes the numbers come out simply." | "rounding the building to 80 m" | 300 ft ≈ 91 m, so 80 m is a chosen convenient value, not a rounding. Write "taking the height as 80 m (the building is about 300 ft) so the numbers come out simply". |
| 5 | info | Rate of change, example 2, bracket on gravity | Transcript p. 4: "acceleration due to gravity is 10 meters per second … the second derivative of this". 9.8 is never mentioned. | "which he rounds from 9.8 and calls '10 meters per second' in passing" | "rounds from 9.8" is the page's inference, not something Jerison says. Suggest: "(his '10 meters per second' should be 10 m/s², roughly g = 9.8 m/s²)". |
| 6 | info | "Left-hand and right-hand limits", the two-formula example | Notes pp. 3–4 use a different function: x + 1 for x > 0 and −x for x ≤ 0, with f(0) = 0, "continuous from the left at 0, not the right". | The page follows the lecture's version (−x + 2 for x < 0, f(0) = 1). | Fine as it is, since the citations for this example point to the transcript. You could say in one clause that the notes use a variant. |
| 7 | info | "Differentiable implies continuous", last line | Not in Lecture 2 (transcript or notes). | "The converse is false: $|x|$ is continuous at 0 but has a corner there." | Correct mathematics, and a reasonable addition. You may mark it as the page's own addition. |
| 8 | info | Worked example "The limits in numbers", step "Degrees" | — | "gives 0.017452, which is $\pi/180$" | sin(1°)/1 = 0.0174524, while π/180 = 0.0174533. They agree to 5 significant figures, and π/180 is the limit of sin(θ°)/θ. Say "≈ π/180 (the limit as θ → 0)". |
| 9 | info | Plot of the two trig quotients | — | range [−0.6, 1.2] | (1 − cos θ)/θ reaches about ±0.72 near θ = ±2.3, so the dashed curve is clipped for roughly θ ∈ [−3, −1.4]. Widen the range to about [−0.8, 1.2]. |

Formula citations (all `reading1`, the notes), checked against the printed page numbers:
- Average and instantaneous rate, p. 1: correct.
- Easy limit (x² + x)/(x + 1) at x = 3 = 12/4 = 3, p. 3: correct.
- One-sided limits, p. 4 (definitions of right-hand and left-hand limit): correct.
- Continuity, p. 3: correct.
- 1/x one-sided limits ±∞, p. 5: correct.
- Two trig limits, p. 9 (the cosine argument continues on p. 10): correct.
- Differentiable implies continuous, p. 11: correct.
All of these were also written on the board in the lecture (transcript pp. 1, 5, 5, 6, 8, 8, 10). Citing the notes is fine because the notes print each one. The notation matches.

## Arithmetic and answer checks
- Pumpkin: 80 − 5t² = 0 at t = 4 s ✓. Average (0 − 80)/(4 − 0) = −20 m/s ✓. h′(t) = −10t, so h′(4) = −40 m/s ✓. That is "twice as fast" ✓. 40 m/s = 89.5 mph ≈ 90 ✓. h″ = −10 m/s² ✓.
- Lecture's easy limit: (4 + 3)/(16 + 1) = 7/17 ✓. Notes' easy limit: 12/4 = 3 ✓.
- Two-formula example: right-hand limit 1 and left-hand limit 2 ✓. With f(0) = 1 the value matches the right-hand limit ✓.
- Worked example (a): left-hand limit 1 and right-hand limit 2, a jump; f(1) = 2, so it is continuous from the right ✓. (b) (x² − 4)/(x − 2) = x + 2, limit 4, removable ✓.
- sin 0.1/0.1 = 0.998334 ✓. (1 − cos 0.1)/0.1 = 0.049958 → 0.04996 ✓. sin 0.01/0.01 = 0.999983 → 0.99998 ✓. (1 − cos 0.01)/0.01 = 0.0049999 → 0.00500 ✓. (1 − cos θ)/θ ≈ θ/2 ✓. sin 1° = 0.0174524 ✓ (see note 8).
- Quiz 1: (1 + 2)/(1 + 4) = 0.6. Answer index 0 ✓.
- Quiz 2: a jump. Answer index 2 ✓. The explanation is right. (It uses the same function as worked example (a). That is acceptable, but a different function would test more.)
- Quiz 3: index 1 (+∞ from the right, −∞ from the left) ✓. The explanation matches transcript p. 8.
- Quiz 4: index 1 ✓. "Arc and half-chord" is correct: sin θ is half the chord of the angle 2θ. The π/180 remark is correct.
- Flashcards: all five are correct.
- calcs file: every number on the page has an entry, and the `source` locations match the notes and transcript pages above. `npm run calc:test`: 916 passed, including this file. `content:check`: 0 errors, and the only warning for this page is the missing review. Minor gaps: there is no entry for h″ = −10 or for "twice as fast" (40/20). Both are trivial.

## Coverage and order
- Lecture order (transcript): rate of change and the four examples (pp. 1–4) → easy limits, and derivative limits are never easy (pp. 4–5) → one-sided limits and the two-formula example (pp. 5–6) → continuity (pp. 6–7) → jump with the Merton remark (p. 7) → removable, with sin x/x and (1 − cos x)/x stated (pp. 7–8) → infinite (pp. 8–9) → graph of −1/x² under 1/x, odd/even (p. 9) → sin(1/x) (p. 9) → differentiable implies continuous (p. 10). The trig proofs are deferred.
- The page follows this order, with two small moves. The derivative-graph section comes after sin(1/x), not before it. The trig-limit section comes before the theorem. Both moves follow the notes' order (notes pp. 6–7 and pp. 9–11), so they are acceptable.
- Omitted: notes p. 8, "Pumpkin Drop, Part II" (y = 400 − 16t², −5 ≤ t ≤ 5, with the graph of y′ underneath). It is not in the lecture, but it is part of the reading. (warning) Suggest one short paragraph, or an original equivalent, showing that the derivative of a parabola is a straight line. That would fit the "derivative's graph" section.
- Omitted, minor: Jerison's remarks that the ionosphere is GPS's main error source (p. 4), and that the real building is taller and air resistance matters (p. 3). These are optional.
- Added: |x| as a counterexample to the converse, (1 − cos θ)/θ ≈ θ/2, the degrees example, and the worked examples. All are correct.

## Licensing
- Neither the notes nor the transcript has an "All rights reserved" or "Courtesy of" notice (grep on both texts). Both fall under OCW's CC licence.
- No MIT figure is reused. The plot is generated from formulas.
- The worked examples (piecewise x² / 3 − x; (x² − 4)/(x − 2); the numerical trig values) are original. The pumpkin numbers are MIT's and are clearly attributed to Jerison.
- No verbatim copying beyond short attributed phrases ("back down to some rigorous details", "ugly" discontinuities) and standard terminology.

## Notes
- Merton remark: matches transcript p. 7 (Bob Merton, MIT professor during his Nobel-prize work, continuity of prices from the left or right; "left is the past and right is the future"). The page's attribution "Jerison mentions" is fair. Robert C. Merton shared the 1997 economics Nobel and was on the MIT faculty in the 1970s–80s. That fact comes from general knowledge and was not checked against a source here.
- The "infinite fortune and infinite debt" paraphrase matches transcript p. 9. The statement that writing lim 1/x = ∞ is "simply wrong" matches transcript p. 8.
- "In the lecture Jerison states both limits and leaves the proofs for later" matches transcript pp. 8 and 10 ("next time").
- leadsTo 18.01 Lecture 3: supported by transcript p. 10 ("a key step in the product and quotient rules"; "carry out these limits … next time"). I did not read the Lecture 3 transcript.
- Cosmology callout and leadsTo 8.286 Lecture 8: content/year-4/8.286/age-of-the-universe.mdx is Lecture 8 and covers a → 0 and infinite matter density at t = 0. The claim is correct. Calling the density's behaviour "an infinite discontinuity" stretches the term a little: t = 0 is the end of the model's domain, so only a one-sided limit exists. "A one-sided infinite limit" would be more exact. Consider adding the 8.286 page's caveat that the singularity is a prediction of the classical model and may not be physical. (info)

## Resolution (2026-11-15, by the page author)

- Error 1 (bracket on a notes slip): confirmed and fixed. The page image of notes p. 4 (rendered with pdftoppm) reads "sin(x)/x is defined for x ≠ 0", which is correct; pdftotext had dropped the ≠. The bracket is deleted.
- Error 2 (sides of 1/x reversed): fixed. The page now says 1/x shoots up to +∞ just right of 0 and down to −∞ just left of it.
- Warning (left/right slips): reworded: Jerison warns he may mix them up and once does so aloud before correcting himself.
- Warning ("rounding the building to 80 m"): reworded: the building is about 300 feet; he uses 80 m because the numbers come out simply.
- Coverage (notes p. 8, Pumpkin Drop Part II): added a paragraph on y = 400 − 16t² (feet), −5 ≤ t ≤ 5, and its derivative y' = −32t; calcs entry pumpkin2-derivative added.
- Info ("rounds from 9.8"): removed; the bracket now says 10 m/s² in this rounded model, and that "10 meters per second" is a slip for m/s².
- Info (|x| not in the lecture): marked as an addition.
- Info (π/180): now "≈ π/180 = 0.017453"; calcs entry pi-over-180 updated.
- Info (plot range): y-range widened to −0.8.
- Info (callout wording): now "a one-sided infinite limit", with the 8.286 page's caveat that the singularity marks where the model stops being trustworthy.
- Not changed: the two-formula example follows the lecture, not the notes, as the review notes is fine.
