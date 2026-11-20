---
page: content/year-1/18.02/second-derivative-test.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-10-second-derivative-test/ (read only for its transcript link, which matches the page's reading2 URL `9c2738f5bbc2c2914fd90471f7792116_3_goGnJm5sA.pdf`; no "rights reserved" or "courtesy" notice on the page)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/9c2738f5bbc2c2914fd90471f7792116_3_goGnJm5sA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec10", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week4/ (read: local copy week4.pdf; PDF p. 1 is a cover; Lecture 10 starts on printed p. 2 = PDF p. 3 and ends on printed p. 3 = PDF p. 4; printed p. 2 ends with "if AC − B² < 0 then saddle", printed p. 3 starts with "if AC − B² = 0 then can't conclude"; checked with pdftotext -f 3 -l 4)
  - content/year-1/18.02/_course.json (read: Lecture 10 = Second Derivative Test, Lecture 11 = Chain Rule)
  - content/year-4/8.286/false-vacuum.mdx (read, for the cosmology callout and leadsTo: `lecture: 23`, old inflation with a local minimum, tunnelling, graceful exit problem, new inflation with a plateau, Guth's paper "published in January 1981")
  - calcs/18.02/second-derivative-test.yaml (read; `npm run calc:test -- -k second-derivative-test`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: The second derivative test

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 10 = printed pp. 2–3). `reading1` = Week 4 summary, `reading2` = transcript. "The three numbers" cites `reading1` "Lecture 10, p. 2": the definitions of A, B, C are on printed p. 2, correct. All other formulas cite `reading2`; every page number is right (see list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 4 summary or either lecture page (grep: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The quadratic case", order of the three cases | Transcript p. 2: 4ac − b² < 0 (saddle), then = 0 (degenerate), then > 0 (min/max). Notes p. 2: > 0, < 0, = 0. | < 0, > 0, = 0. | Follows neither order exactly; harmless since the cases are independent. No change needed. |
| 2 | info | "The quadratic case", degenerate bullet | Transcript p. 2 (answers to student questions): a degenerate quadratic is a degenerate min or max depending on the sign of a; a general function can also have a degenerate saddle, e.g. x³ + y³ at the origin. | Not mentioned; the later paragraph says higher terms can turn the point "into a minimum or a saddle". | Optional: one sentence with Auroux's x³ + y³ example of a degenerate saddle, which makes the "no conclusion" case concrete. |
| 3 | info | "The second derivative test", case list | Notes p. 2: "if A > 0 (or C), local min". | Only A is mentioned. | Optional: note that when AC − B² > 0, A and C have the same sign, so C can be used instead. |
| 4 | info | Formula "Through the quadratic formula" | Transcript p. 3: "write this now instead as y² times a times (x over y)² plus b(x over y) plus c"; it is an argument using the discriminant, not the quadratic formula itself. | Label "Through the quadratic formula"; the formula divides by y without comment. | Optional: label "Through the discriminant", and a bracket that the points with y = 0 give w = ax², which has the sign of a. Neither source mentions y = 0, so this is not a difference from MIT. |
| 5 | info | Cosmology callout, "Guth's original 1980 version" | (Not in MIT 18.02.) false-vacuum.mdx: Guth's paper was "published in January 1981". | "1980 version" | Defensible (the paper was submitted in 1980), but for consistency with the 8.286 page consider "Guth's original version of inflation (published 1981)" or "proposed in 1980". |
| 6 | info | Cosmology callout, last sentence | false-vacuum.mdx: new inflation (Linde; Albrecht and Steinhardt, 1982) uses a flat plateau, and Planck/BICEP data now favour plateau-shaped potentials. | "newer versions use a flat plateau instead" | Fair as a summary, though not every later model has a plateau. Optional: "new inflation (1982) used a flat plateau instead". |
| 7 | info | Coverage | Transcript p. 1: analogy with the one-variable second derivative test; p. 2: the change of coordinates u = x + (b/2a)y that makes the difference of squares explicit; p. 2: "secretly" a, b, c will be ½f_xx, f_xy, ½f_yy. | Not mentioned (the x⁵ example from p. 2 is included in the degenerate paragraph). | Asides; leaving them out is fine. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, p. 1)": deciding min, max or saddle is the main topic. Correct.
- Contour plots: maxima/minima as shrinking level curves, need to read values to tell them apart, saddle as a figure eight: transcript p. 1. Correct.
- Global max by comparing local maxima; global min/max may be on the boundary or at infinity: transcript p. 1; notes p. 2 ("global min/max may be either at a critical point, or on the boundary of the domain/at infinity"). Correct.
- Quadratic w = ax² + bxy + cy², critical point at the origin: transcript p. 1; notes p. 2. Correct.
- x² − 2xy + 3y² = (x − y)² + 2y², minimum: transcript p. 1; notes p. 2. Correct.
- Completing the square, a ≠ 0: first form a(x + b/2a y)² + (c − b²/4a)y² on transcript p. 1; the 1/(4a) form with 4ac − b² on p. 2; notes p. 2 has both. Cited `reading2` pp. 1–2. Correct; the identity is also verified in calcs (`completed-square`).
- Three cases, degenerate valley w = x², "a direction in which nothing happens", critical points along a line: transcript p. 2; notes p. 2. Correct.
- Discriminant view w = y²(a(x/y)² + b(x/y) + c), two roots ⇒ both signs ⇒ saddle, no roots ⇒ constant sign ⇒ min or max: transcript p. 3; notes p. 2. Cited `reading2` p. 3. Correct.
- f_xx, f_xy, f_yx, f_yy; f_xy = f_yx admitted without proof ("the fact that we will admit"): transcript p. 3; notes p. 2. Correct.
- A, B, C and the four cases: transcript p. 3; notes pp. 2–3 (the "= 0" case is on p. 3). Correct.
- Check on the quadratic case: w_x = 2ax + by, w_xx = 2a, w_xy = b, w_y = bx + 2cy, w_yx = b, w_yy = 2c, AC − B² = 4ac − b²: transcript p. 3; notes p. 3 ("Checked quadratic case"). Correct.
- Quadratic approximation: linear terms on transcript p. 3, quadratic terms and "no one half in the middle" on p. 4; notes p. 3. Cited `reading2` pp. 3–4. Correct, and the formula matches the notes term for term.
- At a critical point the linear terms vanish, a = A/2, b = B, c = C/2, type unchanged: transcript p. 4; notes p. 3. Correct.
- Degenerate case: higher-order terms, however small, can bend the flat direction up or down into a minimum or a saddle; inspect or plot: transcript p. 4; notes p. 3 ("would need higher order derivatives"). Correct.
- Example f = x + y + 1/(xy), x, y > 0; f_x = 1 − 1/(x²y), f_y = 1 − 1/(xy²); divide to get x = y, then y³ = 1, only critical point (1, 1): transcript p. 4; notes p. 3. Correct.
- Second derivatives 2/(x³y), 1/(x²y²), 2/(xy³); A = 2, B = 1, C = 2, AC − B² = 3: transcript p. 4 (says "three"); notes p. 3. Cited `reading2` p. 4. Correct.
- Local minimum, "in fact ... the global minimum"; maximum: f → ∞ as x or y → ∞ or → 0: transcript p. 4; notes p. 3. Correct. The value f(1, 1) = 3 is the page's own (not stated in either source) and is right.

## Arithmetic and answer checks
- `npm run calc:test -- -k second-derivative-test`: 10 passed. Recomputed by hand as well:
- Completing the square: (1/4a)·4a²(x + by/2a)² = ax² + bxy + b²y²/(4a); adding (4ac − b²)y²/(4a) = cy² − b²y²/(4a) gives ax² + bxy + cy². Correct (formula and flashcard 3).
- Lecture example: f_xx = 2/(x³y), f_xy = 1/(x²y²), f_yy = 2/(xy³) (differentiated by hand); at (1, 1): 2, 1, 2; AC − B² = 4 − 1 = 3 > 0, A > 0, local min; f(1, 1) = 1 + 1 + 1 = 3. That it is the global minimum also follows from AM–GM: x + y + 1/(xy) ≥ 3·(x·y·1/(xy))^(1/3) = 3. Correct.
- Worked example f = x³ − 3x + y²: f_x = 3x² − 3 = 0 ⇒ x = ±1; f_y = 2y = 0 ⇒ y = 0. f_xx = 6x, f_xy = 0, f_yy = 2. At (1, 0): 6·2 − 0 = 12 > 0, A = 6 > 0, minimum, f = 1 − 3 = −2. At (−1, 0): (−6)·2 = −12 < 0, saddle, f = −1 + 3 = 2. f(x, 0) → −∞ as x → −∞, so no global minimum. All correct. The example is original (the lecture's only example is x + y + 1/(xy)).
- Quiz 1: a = 1, b = 4, c = 1, 4ac − b² = 4 − 16 = −12 < 0, saddle. Answer 2 correct.
- Quiz 2: AC − B² = (−3)(−2) − 1² = 5 > 0, A < 0, local maximum. Answer 1 correct.
- Quiz 3: AC − B² = 0, no conclusion (transcript p. 4, notes p. 3). Answer 2 correct; explanation right.
- Quiz 4: critical point, boundary or infinity (transcript pp. 1 and 4, notes pp. 2–3). Answer 1 correct.
- Flashcards: all three correct.
- calcs file (info): the page-own worked-example entries carry `source: {cite: reading2, at: …}` although the numbers are not in the transcript; harmless, since `origin: page-own` marks them correctly. f_xy and f_yy of the lecture example are not checked as identities (only f_xx is); optional.

## Coverage and order
- The page follows the lecture: contour plots and types → global min/max, boundary and infinity → quadratic case and Lecture 9's example → completing the square → three cases → discriminant view → second derivatives and f_xy = f_yx → the test → check on the quadratic case → quadratic approximation → degenerate case → example x + y + 1/(xy). Only the order of the three quadratic cases differs (finding 1).
- Left out: the degenerate-saddle example x³ + y³, the "or C" remark, the u-coordinate change and the one-variable analogy (findings 2, 3, 7). None changes the content.
- Added: the original worked example, the cosmology callout.
- leadsTo: 18.02 Lecture 11 is "Chain Rule" in `_course.json`; the reason ("Differentials and the chain rule for functions of several variables") fits that lecture. 8.286 Lecture 23 is the lecture of `false-vacuum` (frontmatter `lecture: 23`), whose "Original inflation" paragraph describes the false vacuum as "a local minimum at φ = 0 that is not the lowest point", classically stable and escaping only by tunnelling. The reason given is accurate and fairly attributed. The callout's link `/courses/8-286/false-vacuum` points to an existing page (same link used in Ferreras' quintessence page).

## Licensing
- No "rights reserved" or "courtesy" notice in any source read. The lecture's computer plots and contour plots are described in words only; the page has no images or plots.
- Text is rewritten; no copied sentences found. Short phrases shared with the sources ("a direction in which nothing happens", "can't conclude", "quadratic approximation", "degenerate critical point") are standard terminology or short attributed paraphrases, acceptable.
- The worked example is original; the lecture's example is credited to the lecture.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes in the page.
- The frontmatter summary matches the page body.
- reading1 `location: "Lecture 10, pp. 2–3"` is right (printed pp. 2–3).
- The callout's physics is consistent with false-vacuum.mdx: a local minimum is "stable to small changes" (classically stable), tunnelling is the only escape, the old model did not work (Guth's own words on that page), new inflation uses a plateau.

## Resolution (2026-11-16, by the page author)

- Info 3: the minimum case now says "A > 0 (or equally C > 0)".
- Info 4: the formula label is now "Through the discriminant", and the text says y ≠ 0.
- Info 5 and 6: the callout now says the original version was published in 1981 and names "new inflation" (1982).
- Info 1, 2 and 7 are left as they are.
