---
page: content/year-1/18.02/critical-points-and-least-squares.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-9-max-min-and-least-squares/ (read only for its transcript link, which matches the page's reading2 URL `6dd35e167398fc08a07e16575f3963f6_UYe98CcxPbs.pdf`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/6dd35e167398fc08a07e16575f3963f6_UYe98CcxPbs.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec09", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week4/ (read: local copy week4.pdf; PDF p. 1 is a cover; Lecture 9 starts at the bottom of printed p. 1 = PDF p. 2 and printed p. 1 ends with the critical point (−1, 0) "(only one critical point)"; printed p. 2 = PDF p. 3 has the completed square, least squares, exponential/quadratic laws and Moore's law; Lecture 10 follows on the same page; checked with pdftotext -f 2 -l 3)
  - content/year-1/18.02/_course.json (read: Lecture 9 = Max-Min and Least Squares, Lecture 10 = Second Derivative Test)
  - content/year-4/8.286/homogeneous-expansion.mdx (read, for the cosmology callout and leadsTo: `lecture: 4`, Hubble's law v = Hr, Hubble diagram)
  - calcs/18.02/critical-points-and-least-squares.yaml (read; `npm run calc:test -- -k critical-points`: 12 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Tangent planes, critical points and least squares

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 9 = printed pp. 1–2). `reading1` = Week 4 summary, `reading2` = transcript. "Tangent plane" cites `reading1` "Lecture 9, p. 1": the formula is on printed p. 1, correct. All other formulas cite `reading2`; every page number is right (see list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 4 summary or the lecture page (grep of all three: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout, first sentence | (Not in MIT.) | "the Hubble constant is found from data by exactly this kind of fit." | The maths (D(H) = Σ(vᵢ − Hrᵢ)², dD/dH = −2Σrᵢ(vᵢ − Hrᵢ) = 0, H = Σrᵢvᵢ/Σrᵢ²) is correct. "Exactly" overstates it: modern determinations fit a distance–redshift (magnitude–redshift) relation with weights and calibration steps, and in a v–r diagram the large errors are in r, not v, whereas the lecture's method assumes the errors are in the vertical variable. The next sentence ("Real fits weight each galaxy…") softens this, but the two sentences pull against each other. Suggest "by a fit of this kind" and, optionally, one clause noting that the vertical-deviation choice treats velocities as the uncertain quantity, while for galaxies the distances are the harder measurement. |
| 2 | info | "Least squares", deviation choice | Transcript p. 3: measuring the vertical difference "is often more relevant because these guys actually may be expressed in different units"; perpendicular projection is mentioned as another valid choice giving a different answer. | "(better than perpendicular distance, since x and y may be in different units)" | "Better" is a little stronger than Auroux's "often more relevant". Optional: "(usually more relevant than perpendicular distance…)". |
| 3 | info | "Critical points", order | Transcript p. 2: definition, then the example and its critical point (−1, 0), then local min/max/saddle (x² + y², y² − x²), then completing the square. Notes p. 1: definition, "may be a local min, local max, or saddle", then the example. | Min/max/saddle discussion placed before the example. | Follows the notes' order, which is fine. No change needed. |
| 4 | info | "Other laws", order | Transcript p. 4: Moore's law data first, then the exponential fit via ln y, then quadratic laws. Notes p. 2: exponential, quadratic, then Moore's law example. | Exponential, Moore's law, quadratic. | Fine either way; content matches. |
| 5 | info | "Critical points", saddle examples | x² + y² and y² − x² as examples appear in the transcript (p. 2) but not in the Lecture 9 notes (they are in the Lecture 10 notes, printed p. 2). | Paragraph cites "(p. 2; notes, p. 1)". | The "notes, p. 1" reference supports the sentence "A critical point may be a local min, local max, or saddle", which is there; the examples come from the transcript p. 2. Correct as it stands. |
| 6 | info | Notation | The lecture uses a, b both for f_x(x₀, y₀), f_y(x₀, y₀) (transcript p. 1) and for the line coefficients (p. 3). | Same double use; the tangent-plane formula itself is written with f_x(x₀, y₀), f_y(x₀, y₀). | Faithful to MIT and `content:check` raises no symbol error. Optional: a one-line reminder at "Least squares" that a and b now mean something new. |
| 7 | info | Coverage | Transcript p. 3: frog-leg and chemistry examples; the homework problem predicting iPod numbers; "you cannot use that to predict the stock market"; the option of minimising average distance. | Not mentioned. | Asides; leaving them out is fine. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, p. 1)": using partial derivatives for min/max problems; least squares is announced later, but the opening sentence is a fair summary. Correct.
- Approximation formula Δz ≈ f_xΔx + f_yΔy, "one of the most important formulas", effects add as if x then y changed, higher-order terms: transcript p. 1 (said on the board); notes p. 1 ("Linear approximation formula"). Cited `reading2` p. 1. Correct.
- Two tangent lines y = y₀, z = z₀ + a(x − x₀) and x = x₀, z = z₀ + b(y − y₀): transcript p. 1 (with a, b as on the page); notes p. 1 (with f_x(x₀, y₀), f_y(x₀, y₀)). Cited `reading2` p. 1. Correct.
- Tangent plane, two lines determine the plane, cross-product alternative, "graph is close to its tangent plane": transcript p. 1; notes p. 1. Correct.
- Local max/min ⇒ both partials zero; f_x = 0 but f_y ≠ 0 argument (runs from the end of p. 1 onto p. 2, so "pp. 1–2" is right); first-order unchanged, quadratic terms, horizontal tangent plane z = constant: p. 2; notes p. 1. Correct.
- Critical point definition: transcript p. 2; notes p. 1. Cited `reading2` p. 2. Correct.
- "Necessary but not sufficient" (p. 2), local min with "elsewhere the function drops to a lower value", saddle as mountain pass, new phenomenon not in single-variable calculus: p. 2. Correct.
- Example f = x² − 2xy + 3y² + 2x − 2y, f_x = 2x − 2y + 2, f_y = −2x + 6y − 2, add to get 4y = 0, x = −1, only critical point (−1, 0), "keep two equations" tip: transcript p. 2; notes p. 1. Correct.
- Completing the square (x − y)² + 2y² + 2(x − y) = (x − y + 1)² + 2y² − 1 ≥ −1: transcript p. 2; notes p. 2. Cited `reading2` p. 2. Correct. "Auroux admits he built the example by expanding": p. 2 ("In fact, I cheated"). Equality only when both squares vanish: end of p. 2 into p. 3, so "pp. 2–3" is right.
- Least squares set-up, unknowns a and b not x and y: transcript p. 3; notes p. 2. Correct.
- Deviation, D(a, b): transcript p. 3; notes p. 2. Cited `reading2` p. 3. Correct (the transcript's "y1 − axi plus b" is a transcription slip; the page follows the notes' yᵢ − (axᵢ + b)).
- Largest deviation vs one bad measurement; squares "look good" and give a simple problem: p. 3. Correct.
- ∂D/∂a and ∂D/∂b with factors (−xᵢ) and (−1): transcript p. 3. Cited `reading2` p. 3. Correct.
- Dropping the 2s, the 2 × 2 system (Σxᵢ²)a + (Σxᵢ)b = Σxᵢyᵢ, (Σxᵢ)a + nb = Σyᵢ, coefficients are numbers: transcript p. 4 (the "drop the factors of two" sentence straddles pp. 3–4; the system itself is on p. 4); notes p. 2. Cited `reading2` p. 4. Correct.
- "Trust me" that it is a minimum: p. 4. Correct.
- Exponential laws via ln y = ln c + ax, b = ln c, direct minimisation unsolvable; Moore's law, log plot, doubling every 18 months or two years; quadratic laws → 3 × 3 system: transcript p. 4; notes p. 2. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k critical-points`: 12 passed. Recomputed by hand as well:
- Lecture example: f_x = 2x − 2y + 2, f_y = −2x + 6y − 2; sum 4y = 0 ⇒ y = 0, 2x + 2 = 0 ⇒ x = −1. Expanding (x − y + 1)² + 2y² − 1 = x² − 2xy + y² + 2x − 2y + 1 + 2y² − 1 = x² − 2xy + 3y² + 2x − 2y. f(−1, 0) = 1 − 2 = −1. Correct.
- Worked example (a): f = x²y; f(1, 2) = 2, f_x = 2xy = 4, f_y = x² = 1; plane at (1.1, 1.9): 2 + 0.4 − 0.1 = 2.3; exact 1.21 × 1.9 = 2.299. Correct.
- Worked example (b): points (0, 1), (1, 3), (2, 4), (3, 6): Σx = 6, Σx² = 14, Σy = 14, Σxy = 29; 14a + 6b = 29, 6a + 4b = 14; b = 3.5 − 1.5a, 5a + 21 = 29, a = 1.6, b = 1.1. Fitted values 1.1, 2.7, 4.3, 5.9; deviations −0.1, 0.3, −0.3, 0.1; D = 0.2. Correct (and Σ deviations = 0, Σ xᵢ·deviation = 0 + 0.3 − 0.6 + 0.3 = 0, as the normal equations require).
- Callout: H = Σrᵢvᵢ/Σrᵢ² from dD/dH = 0. Correct.
- Quiz 1: 3(0.1) − 2(0.2) = −0.1. Answer 0 correct.
- Quiz 2: both partials zero. Answer 1 correct; explanation right.
- Quiz 3: unknowns a and b. Answer 1 correct (transcript p. 3, notes p. 2).
- Quiz 4: fit a line to ln y against x. Answer 1 correct; explanation matches transcript p. 4.
- Flashcards: all three correct; the least-squares equations match notes p. 2 and transcript p. 4.

## Coverage and order
- The page follows the lecture: approximation formula → tangent lines and tangent plane → min/max and critical points → example → min/max/saddle types → completing the square → least squares set-up → deviation and D → critical point of D → 2 × 2 system → exponential laws/Moore's law → quadratic laws. Small reorderings (findings 3, 4) follow the notes.
- Left out: only asides (finding 7).
- Added: the worked example (original function and data), the cosmology callout.
- leadsTo: 18.02 Lecture 10 "Second Derivative Test" matches `_course.json` and the notes (Lecture 10: deciding min, max or saddle; Auroux on transcript pp. 2 and 4: "we will see tomorrow"). 8.286 Lecture 4 is the lecture of `homogeneous-expansion` (frontmatter `lecture: 4`), which introduces Hubble's law and a Hubble diagram; the reason given ("slope of the best straight line through distance and velocity data") is fair, although that page does not itself discuss fitting.

## Licensing
- No "rights reserved" or "courtesy" notice in any source read. The Moore's-law data plot and the 3D pictures shown in the lecture are described in words only; the page has no images or plots.
- Text is rewritten; no copied sentences found. Short phrases shared with the notes ("the graph is close to its tangent plane", "the unknowns here are a, b, not x, y", "total square deviation", "best-fit line") are standard terminology or one-line statements, acceptable.
- The worked example (x²y at (1, 2); the four data points) is original; the lecture's only computed example (x² − 2xy + 3y² + 2x − 2y) is credited to the lecture.
- No OpenStax or LibreTexts material.

## Notes
- The internal link `/courses/8-286/homogeneous-expansion` points to an existing page (course slug `8-286`); `content:check` reports no errors.
- No em dashes in the page.
- The frontmatter summary matches the page body.
- reading1 `location: "Lecture 9, pp. 1–2"` is right (printed pp. 1–2).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the callout now says "a fit of this kind", calls H = Σ r v / Σ r² the simplest version, and explains that the large uncertainties are in the distances, so real fits weight each galaxy accordingly.
- Info 2: "better than" is now "often more relevant than", as in the lecture.
- Info 5: a bracket reminds readers that a and b are now the line's slope and intercept.
- Info 3, 4 and 6 are left as they are.
