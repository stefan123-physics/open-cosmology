---
page: content/year-1/18.01/derivatives-of-sine-and-cosine.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-3-derivatives/ (read: OCW video page, titled "Lecture 3: Derivatives", "Instructor: Prof. David Jerison"; its "Topics covered" line repeats Lecture 1's)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec3/ (read: lecture notes "Lecture 3 (presented by Kobi Kremnizer): Derivatives of Products, Quotients, Sine, and Cosine", OCW cover + 4 pages, scanned; read through pdftotext OCR only, page images could not be rendered (no PDF renderer available), so garbled formulas were reconstructed from context and are marked uncertain where it matters)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/kCPVBl953eY.pdf (read: transcript "ocw-18-01-f07-lec03", 13 pages, page-by-page with pdftotext -f N -l N)
  - Lecture 2 transcript (ocw-18-01-f07-lec02) p. 9-10 (read: to check who lectures Lecture 3)
  - content/year-1/18.01/limits-and-continuity.mdx (read: overlap check)
  - content/year-4/8.286/closed-universe-cycloid.mdx (read: cosmology callout check)
  - content/year-1/8.01/_course.json, content/year-1/8.01/uniform-circular-motion.mdx (read: leadsTo check)
  - calcs/18.01/derivatives-of-sine-and-cosine.yaml (read; `npm run calc:test`: 945 passed; `npm run content:check`: 0 errors, 0 warnings)
  - data/symbols.json (read: all meanings scoped to derivatives-of-sine-and-cosine, plus the general θ, Δ, π meanings)
verdict: needs-changes
---

# Review: Derivatives of sine and cosine, and the product and quotient rules

Transcript pages = PDF pages (13). Notes pages are cited as "PDF p. N" with the OCW cover as p. 1: PDF p. 2 = sum rule proof, derivatives at 0, start of the sine calculation; PDF p. 3 = end of the sine calculation, cosine, product rule proof; PDF p. 4 = Figure 1, the rectangle "proof" of the product rule; PDF p. 5 = the quotient rule proof. All checked with `pdftotext -f N -l N`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Opening paragraph (and the comment at the top of the calcs file) | The OCW video page for Lecture 3 lists "Instructor: Prof. David Jerison"; the transcript file is "ocw-18-01-f07-lec03" (the 2007 recordings, same series as Lecture 2, which the Lecture 2 page attributes to Jerison). The lecturer picks up Lecture 2's "I'm gonna have to carry out these limits … next time" (Lecture 2 transcript p. 9) with "I promised you I would do that, and I'll have to do that this time" (transcript p. 3). Only the **scribed notes** say "presented by Kobi Kremnizer" (notes PDF p. 2), i.e. the Fall 2006 class those notes were taken in. | "Lecture 3 (given by Kobi Kremnizer, standing in for the course lecturer)" | Attribute the recorded lecture to Jerison and, if wanted, say the lecture notes come from a class presented by Kobi Kremnizer. "Standing in for the course lecturer" is not stated anywhere in the sources; drop it. (I did not watch the video, but the OCW instructor line and the "I promised you" continuity both point to Jerison.) Fix the calcs header comment too. |
| 2 | warning | "Radians, not degrees", first paragraph | Transcript p. 8: radians "applies to both B and A, it's a scale change in A and doesn't really matter but in B it's very important." | "Both proofs compare a straight length with an arc length … They only work if the angle is measured by that arc length." | Say that radians are essential for B; for A the limit is 0 in any unit (a change of unit only rescales it), as the lecturer remarks. The derivative formulas themselves of course need radians. |
| 3 | warning | Quiz 3 explanation | Transcript p. 5/8: "green" is the lecturer's chalk colour for the bow string. | "compares the vertical green segment with the arc" | The page has no figure with a green segment. Write "the vertical chord (the bow string)". |
| 4 | warning | "Why A and B are true" and "A second, purely geometric proof" | The lecture works entirely from board pictures (bow and string, the exaggerated bow for A, the triangle PQR, transcript pp. 4-12). | Words only; no diagram. The PQR argument (rotating both lines by 90°) is hard to follow without a picture. | Add an original, generated diagram (e.g. a parametric `<Plot>` of the unit circle with the chord, arc, and the triangle PQR, or an extended diagram component) with a text alternative. Do not reproduce MIT's board drawings. |
| 5 | warning | "Two limits from Lecture 2 finish the job", "Why A and B are true", "Radians, not degrees", quiz 3, flashcard 2 | Lecture 2 transcript defers the trig limits to Lecture 3; Lecture 2 notes (end) already prove them. | The Lecture 2 page already states both limits with a plot, gives the same geometric reason (arc vs vertical segment, the gap 1 − cos θ much smaller than θ), a worked example with θ = 0.1, 0.01 and the degree factor π/180, a quiz on sin θ/θ whose explanation already gives π/180, and the flashcard "Two trigonometric limits" with exactly the same content as this page's flashcard "The two limits behind them". | Keep the bow-and-string proofs here (they are the Lecture 3 lecture), but link back to the Lecture 2 section and its worked example instead of re-deriving the degree factor; drop or rephrase flashcard 2 so `/review` does not show the same card twice (e.g. a card on "A and B are the derivatives of cos and sin at 0"). |
| 6 | info | "A second, purely geometric proof", last paragraph | Transcript p. 12: "When you'll really need this is probably in 18.02 … the way that you actually develop the theory of arc length." | "is how arc length is developed later, in multivariable calculus." | Fine; you could name 18.02 so it can become a link later. |
| 7 | info | Product rule, rectangle paragraph | Notes PDF p. 4 (Figure 1 and its text). | "The notes picture this as a rectangle…" with no location. | Add "(notes, PDF p. 4)". The figure is described in words, not copied: good. |
| 8 | info | Product and quotient rules | Notes PDF p. 5 also give a proof of the quotient rule (via Δu, Δv and a common denominator). The OCR of its last line reads "u'v − uv' / u2", very probably an OCR error for v² (could not check the image). | Mentions only that the notes prove the product rule. | Either mention that the notes also prove the quotient rule (and leave the details to the Lecture 4 page, since the lecture says "we'll prove these next time", transcript p. 13), or say explicitly that both proofs follow on the Lecture 4 page. |
| 9 | info | `source.title` | OCW's resource page is titled "Lecture 3: Derivatives"; the notes are titled "Derivatives of Products, Quotients, Sine, and Cosine"; the calendar says "Derivatives of products, quotients, sine, cosine". | "MIT 18.01 Lecture 3: Derivatives of Products, Quotients, Sine, and Cosine" | Fine (the more informative title, from the notes and calendar). No change needed. |

Formula citations, each checked against the source text:

| Formula | Cite | Verified |
|---|---|---|
| Sum and constant rules | reading2 p. 1 | yes, spoken on p. 1 |
| Proof of the sum rule | reading1 PDF p. 2 | yes |
| Addition formula for sine | reading2 p. 2 | yes ("sin (a + b) is sin a cos b plus cos a sin b") |
| Difference quotient of sine | reading2 pp. 1-2 | yes (starts end of p. 1, corrected on p. 2) |
| Grouping the terms | reading2 p. 2 | yes |
| The limits A and B | reading2 pp. 2-3 | yes (values p. 2, named A and B p. 3) |
| Derivative of sine | reading2 p. 3 | yes ("the derivative of the sine is the cosine", top of p. 3) |
| Addition formula for cosine | reading2 p. 3 | yes |
| Difference quotient of cosine, regrouped | reading2 p. 3 | yes |
| Derivative of cosine | reading2 p. 3 | yes |
| Derivatives at zero | reading2 pp. 3-4 | yes (also notes PDF p. 2) |
| Bow string over bow | reading2 p. 5 | yes |
| The gap goes to zero faster | reading2 pp. 5-6 and 9 | yes (1 − cos θ over θ p. 5, the gap p. 6, "faster than this theta" p. 9) |
| Only in radians | reading2 p. 8 | yes |
| The geometric proof | reading2 pp. 9-12 | yes (setup pp. 9-10, angle p. 11, PR ≈ Δθ cos θ and the limit p. 12) |
| Product rule | reading2 p. 12 | yes (stated in words on p. 12) |
| Quotient rule (v ≠ 0) | reading2 p. 12 | yes, including "only works when v is not 0" |
| Proof of the product rule | reading1 PDF p. 3 | yes: adds and subtracts u(x+Δx)v(x), uses continuity of u (notes, as far as the OCR shows); the regrouping on the page is algebraically correct |

The derivations themselves are correct: the regroupings for sine and cosine, the derivatives at 0, the bow-string ratio and the PQR argument all match the transcript and are mathematically right.

## Arithmetic and answer checks
- Worked example 1: (sin 1.001 − sin 1)/0.001 = 0.5398815 → "0.53988" correct; cos 1 = 0.5403023 → "0.54030" correct; difference 0.000421 < 0.0005, so "agree to within 0.0005" correct.
- Worked example 2(a): (x² sin x)′ = 2x sin x + x² cos x; at π/2: π·1 + (π²/4)·0 = π ≈ 3.14. Correct.
- Worked example 2(b): (tan x)′ = (cos²x + sin²x)/cos²x = 1/cos²x; at π/4, cos² = 1/2, so 2. Correct.
- Degrees: π/180 = 0.0174533 → "0.01745" correct; "per degree" is the right unit.
- Plot caption: tangent slope of sin at a equals cos a; sin peaks at π/2 ≈ 1.57 where cos crosses 0. Correct. Slider range 0 to 6.28 and y-range ±1.4 fit the curves.
- Cosmology callout: d[α(1 − cos θ)]/dθ = α sin θ and d[α(θ − sin θ)]/dθ = α(1 − cos θ). Both correct.
- Quiz 1 (answer −sin x): correct. Quiz 2 (answer: sin θ/θ → 1 and (cos θ − 1)/θ → 0): correct; the distractors are all false (choice 4 contains the true statement cos θ → 1 but pairs it with the false θ/sin θ → 0, so it is still wrong as a whole). Quiz 3 (answer: chord vs arc): correct; see finding 3 about "green". Quiz 4 (2x sin x + x² cos x): correct. Quiz 5 (where v = 0): correct.
- Flashcards: all five correct.
- calcs file: every number on the page is covered (quotient-at-one, cos-one, quotient-error, product-at-half-pi, tan-at-quarter-pi, degrees-slope, plot-peak) and identities check the sine/cosine regroupings, both derivatives, the product rule (one example) and the quotient rule (via tan). `npm run calc:test` passes (945 passed). Not covered, optional: the "Derivatives at zero" formula and limits A and B (could be checked numerically with small h), and the add-and-subtract identity of the product-rule proof. The calcs header comment repeats the Kremnizer attribution (finding 1). The `quotient-error` entry checks 0.0004 ± 0.0001 while the page says "within 0.0005"; consistent, fine.

## Coverage and order
- Transcript order: two kinds of formulas (p. 1) → derivative of sin (pp. 1-3) → derivative of cos (p. 3) → remark: derivatives at 0 give everything (pp. 3-4) → proof of B, bow and string (pp. 4-5) → proof of A, the gap (pp. 5-9, with student questions) → radians (p. 8) → second, geometric proof for all θ (pp. 9-12) → product and quotient rules stated, proofs deferred (pp. 12-13). The page follows this order exactly.
- Notes order differs slightly (derivatives at 0 before the sine calculation, then product proof, rectangle picture, quotient proof). The page brings in the notes' sum-rule proof, product-rule proof and rectangle picture at sensible places.
- Left out: the notes' proof of the quotient rule (PDF p. 5), see finding 8. The lecture's "zoom out" picture for A (vertex sent far away, "to the Stata Center") is replaced by "zoom in, keep the picture big enough to see", which is the same idea; fine.
- Added by the page (not in MIT): the sin/cos plot with a tangent, the numerical check at x = 1, the x² sin x and tan x examples, the degree factor π/180. All correct and clearly the page's own.

## Licensing
- Transcript is under OCW's Creative Commons licence (header on p. 1). No "All rights reserved" or "Courtesy of" notice found in the transcript, the notes text or the two OCW pages.
- Notes Figure 1 (the rectangle) is described in words, not reproduced. Good.
- No verbatim copying beyond short phrases: "short pieces of curves are nearly straight" (the lecturer's principle, quoted as such), "bow and its string" (his metaphor), "group the terms so that each zero stays over a zero" (close to "We must group the terms so that a 0 stays over a 0", one short sentence; acceptable, could be reworded), "change one factor at a time". No OpenStax or LibreTexts material.
- Worked examples are original (MIT does no numerical examples in this lecture).

## Notes
- Cosmology callout and leadsTo 8.286 Lecture 9: the parametrisation ct = α(θ − sin θ), a/√k = α(1 − cos θ) matches content/year-4/8.286/closed-universe-cycloid.mdx (formula "Evolution of a closed universe", Lecture 9). The derivatives quoted are right. One honest caveat is missing: getting da/dt from these needs the chain rule for a parametric curve, da/dt = (da/dθ)/(dt/dθ) = c√k sin θ/(1 − cos θ), which is Lecture 4 material; "comes from exactly the two derivatives on this page" slightly overstates it. Suggest "comes from these two derivatives together with the chain rule (Lecture 4)". "Enough matter to stop its own expansion" is right for the matter-only models of 8.286 Lecture 9; fine as written.
- leadsTo 8.01 Lecture 9 (Uniform Circular Motion): the 8.01 Lesson 9 page does differentiate cos θ(t) and sin θ(t), but the velocity is already derived on the Lesson 8 page (circular-motion-position-velocity), and both use the chain rule. Consider "The acceleration of uniform circular motion comes from differentiating cos θ(t) and sin θ(t) (with the chain rule)", or link Lesson 8 for the velocity.
- leadsTo 18.01 Lecture 4: correct; the transcript (pp. 12-13) defers both proofs to the next lecture, and Lecture 4 is "Chain rule, higher derivatives" in the OCW calendar.
- Symbols: the scoped meanings for a, b, c, d, k, n, t, u, u′, v, v′, x, y, P, Q, R, O and α are accurate for this page (α in m and k in 1/notch² follow the 8.286 convention). θ on this page falls back to the general meaning "An angle.", which fits the lesson; in the cosmology callout θ is the cycloid's development angle, and the general meaning is acceptable there. Δx, Δy, Δθ use the general Δ meaning, which fits. No symbol issues found; content:check reports no symbol warnings.
- No em dashes on the page (content:check: 0 warnings).

## Resolution (2026-11-15, by the page author)

- **Error fixed (attribution):** the opening now says that OpenCourseWare lists David Jerison as the instructor of the recorded lectures, and that the written notes record the 2006 class as presented by Kobi Kremnizer; "standing in" is gone. The calcs header says the same.
- **Radians:** the section now says that the proof of B needs radians, while for A the unit only rescales a quantity that tends to 0 (transcript p. 8).
- **Quiz 3:** "green segment" replaced by "the vertical chord (the bow string)".
- **Figures added:** two generated, interactive figures with text alternatives: the bow, string and gap on the unit circle (slider θ), and the triangle PQR of the geometric proof (sliders θ and Δθ).
- **Repetition of Lecture 2:** the degrees example now points back to Lecture 2 with a link; the duplicate flashcard of the two limits is replaced by two new ones (why the derivatives at 0 decide everything; the geometric proof).
- Info items: "18.02 (multivariable calculus)"; the rectangle picture is located at notes PDF p. 4; the notes' start of the quotient-rule proof (PDF p. 5) is mentioned; the cosmology callout now says the expansion rate "starts from" these derivatives, with the chain rule of the next lecture; the 8.01 link now names the acceleration of circular motion and the chain rule.

Status set to `reviewed`.
