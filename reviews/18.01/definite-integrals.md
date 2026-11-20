---
page: content/year-1/18.01/definite-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-18-definite-integrals/ (read: local copy lec.html; its PDF link is hjZhPczMkL4.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec18/ (read: local copy n.html, links lec18.pdf, marked Creative Commons License; notes.pdf/notes.txt, "Lecture 18: Definite Integrals", OCW cover + printed pp. 1-5 = PDF pp. 2-6; text layer only, figures not inspected as images)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/hjZhPczMkL4.pdf (read: local copy transcript.pdf, page-split text tp.txt, 10 PDF pages, "ocw-18-01-f07-lec18")
  - content/year-1/18.01/_course.json (read: Lecture 19 = First Fundamental Theorem)
  - content/year-4/8.286/horizon-distance.mdx (read: Lecture 8, horizon integral and 3ct₀, for the callout and leadsTo)
  - calcs/18.01/definite-integrals.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k definite`: 13 passed)
  - data/symbols.json (read: all 17 meanings scoped to `definite-integrals`)
  - `npm run content:check`: the only message for this page is the missing review file (the 2 errors belong to work-in-two-and-three-dimensions.mdx, another page in progress)
verdict: pass-with-notes
---

# Review: Definite integrals and Riemann sums

Citation convention checked: transcript pages are PDF pages (no printed numbers), notes pages are the printed footers 1-5, as on the other 18.01 pages. Every page citation on the page was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example "Filling a tank and paying back a loan", part (b) | Notes p. 4: "if you borrow \$1000/month, then f(t) = 12,000/year"; "r = interest rate (e.g., 6 % is r = 0.06/year)". | Uses exactly the notes' numbers: borrowing at \$12 000 per year and 6% interest. The computed totals (\$12 360, \$12 367) are not in the notes, but the set-up is MIT's own illustration. | Writing rule 1 asks for own numbers in worked examples. Change to e.g. \$9 000 per year at 4% (simple: 9 000 × 1.02 = \$9 180; continuous: 9 000 × (e^0.04 − 1)/0.04 ≈ \$9 181.6) and update `loan-simple`, `loan-continuous` in the calcs file and the `r` symbol meaning ("0.06 for 6%"). |
| 2 | warning | "A pattern", Archimedes remark: "it may have held mathematics back, because no one saw the simple pattern until calculus (p. 7)" | Transcript p. 7: his method was "so brilliant that it may have set back mathematics by 2,000 years ... people couldn't see this pattern ... couldn't get to the cubic ... it wasn't until calculus fit everything together that people were able to make serious progress". | Attributed to the lecturer ("in his view") for the "held back" part, which is fair; but "no one saw the simple pattern until calculus" reads as historical fact. | Historically the pattern was found before Newton and Leibniz (Ibn al-Haytham's sums of fourth powers c. 1000; Cavalieri, Fermat and Roberval had ∫₀ᵇ xⁿ dx = bⁿ⁺¹/(n+1) in the 1630s-40s, usually counted as precursors of calculus). Keep the whole clause inside the attribution ("because, he says, people could not see the pattern...") or add a short bracket: "(the general rule for xⁿ was in fact found by Cavalieri and Fermat in the 1630s, just before calculus)". |
| 3 | info | "Area under a curve" and "The parabola, by hand": transcript slip | Transcript p. 5: "1/3 (n+1)^3 / n^3. And that's 1/3 + (1 + 1/n)^3." | "(The transcript has '1/3 + (1 + 1/n)^3' at this point; it is a product, p. 5.)" | Verified: the slip is in tp.txt p. 5 and the correction is right ((n+1)³/(3n³) = ⅓(1 + 1/n)³). The notes p. 3 have it correctly. No change. |
| 4 | info | "Integrals as cumulative sums", notes slip | Notes p. 5: "∫₀¹ f(t)dt ... which represents the total borrowed in one year in dollars per year." | "(notes, p. 5, which call the total borrowed 'dollars per year'; it is in dollars)" | Verified; correct (dollars/year × years = dollars, as the transcript p. 9 says). No change. |
| 5 | info | "Integrals as cumulative sums": continuous vs simple interest | Transcript pp. 9-10: daily steps, Δt = 1/365, interest "compounded continuously", owe P e^(rt), total ∫₀¹ f(t) e^(r(1−t)) dt; example rate 0.05. Notes pp. 4-5: monthly steps, Δt = 1/12, tᵢ = i/12, simple interest P(1 + rt), total ∫₀¹ f(t)(1 + r(1 − t)) dt. | Follows the transcript (daily, continuous) and states the notes' simple-interest integral, cited notes p. 5. | Both formulas verified. The page does not say the notes use monthly steps (Δt = 1/12, a sum of 12 terms); optional bracket. The simple-interest rule P(1 + rt) itself is on notes p. 4. |
| 6 | info | "A pattern": "Two more examples need no sums at all ... (transcript, p. 7; notes, p. 3)" | Transcript pp. 6-7 does f(x) = x by the triangle and f(x) = 1 by the rectangle. Notes p. 3 has only f(x) = x, done by a sum, (b²/n²)(1 + 2 + ... + n) → ½b², then identified with the triangle; f(x) = 1 is not in the notes. | Cites the notes as if they did both examples without sums. | Cite "transcript, pp. 6-7; the notes, p. 3, do f(x) = x by a sum as well". Example 2 is announced at the end of p. 6. |
| 7 | info | "Integrals as cumulative sums": "an amount borrowed at time t grows by e^{r(1−t)}" | Transcript p. 10: "You owe e^r times the amount of time left in the year". | "grows by e^{r(1−t)}" | "grows by a factor e^{r(1−t)}" reads more precisely ("grows by" can be read as an added amount). |
| 8 | info | "A pattern": "The lecturer adds a historical remark" | The transcript does not name the lecturer. | "The lecturer". | Other 18.01 pages name David Jerison; whether Jerison gave this recorded lecture was not verified from the sources read (uncertain). Leaving "the lecturer" is safe. |
| 9 | info | Opening paragraph | Notes p. 1: "Integrals are used to calculate cumulative totals, averages, areas." | Mentions areas and cumulative sums, not averages. | Optional: mention that averages are a third use (they come in a later lecture). |

No errors found. Every formula matches its cited location:
- "Definite integral", area = ∫ₐᵇ f(x) dx: transcript p. 1 (board, "known as limits on it ... start at a and end at b").
- "Sum of the rectangles", (b/n)(b/n)² + ... + (b/n)(nb/n)² = (b³/n³)(1² + ... + n²): transcript p. 3 (the 1 → 1² rewrite is at the end of p. 3); also notes p. 1.
- "Trapping the sum", ⅓n³ < 1² + ... + n² < ⅓(n+1)³: notes pp. 2-3 (inner and outer pyramid on p. 2, combined "In all" on p. 3); transcript p. 4. Strict inequalities hold for all n ≥ 1.
- "The area under x²", limit = b³/3: transcript p. 5 ("it's 1/3 b^3"); also notes p. 3.
- "Summation notation", Σaᵢ = a₁ + ... + aₙ and (1/n³)Σi² → ⅓: transcript p. 6.
- "The pattern", b, b²/2, b³/3: transcript p. 7. Guess b⁴/4: p. 7. d/db(b³/3) = b², A′(b) = f(b): notes p. 3.
- "Riemann sum and definite integral", lim Σ f(cᵢ)Δx = ∫ₐᵇ f(x) dx with Δx = (b − a)/n: notes p. 4; transcript p. 8 ("a mathematician from the 1800s", Δx → dx, Leibniz).
- "Total borrowed", Σᵢ₌₁³⁶⁵ f(i/365)Δt ≈ ∫₀¹ f(t) dt: transcript p. 9. Continuous-compounding total: p. 10. Simple-interest total: notes p. 5.
- Prose citations: third unit / second half of calculus (p. 1), three steps (pp. 1-2; notes p. 1), "factor out what you can" (pp. 5-6), summation and distributive law (p. 6), dt and units (p. 9): all verified.

## Arithmetic and answer checks
- Right sum, n = 4: (1 + 4 + 9 + 16)/64 = 30/64 = 0.46875 ≈ 0.469: correct. Left: (0 + 1 + 4 + 9)/64 = 14/64 = 0.21875 ≈ 0.219: correct. Midpoints: (1 + 9 + 25 + 49)/256 = 84/256 = 0.328125 ≈ 0.328: correct. Right over, left under for increasing x²: correct.
- ∫₀² x³ dx = 4: correct. Tank: left 14, right 18, trapezoid ½(2 + 6) × 4 = 16 = ∫₀⁴(2 + t) dt: correct.
- Loan: 12 000 × (1 + 0.06 × ½) = 12 360: correct ("each dollar borrowed for half a year on average" is right). 12 000 × (e^0.06 − 1)/0.06 = 12 000 × 1.030609 = 12 367.3 ≈ \$12 367: correct.
- Callout: a = b t^(2/3) gives ℓ = t₀^(2/3) ∫₀^t₀ c t^(−2/3) dt = 3ct₀: correct, and agrees with horizon-distance.mdx (8.286 Lecture 8).
- Quiz 1 (index 1, area): correct; explanation right. Quiz 2 (index 3, 0.46875): correct; the distractors are the left sum, the midpoint sum and the true value, a good set. Quiz 3 (index 2, 4): correct. Quiz 4 (index 2, 16 litres): correct.
- Flashcards: all three correct.
- Plot: `(ceil(4*x)/4)^2` on [0, 1] gives (k/4)² on ((k−1)/4, k/4], the right-end heights; at x = 0 it is 0 (one sample point). With 400 samples the breakpoints 0.25, 0.5, 0.75 fall exactly on samples, so each jump is drawn as a near-vertical segment one sample wide (it reads as the rectangle's side, which is fine). Range [0, 1.1] contains everything. Caption numbers correct. The plot shows only the tops, as the caption says.
- calcs/18.01/definite-integrals.yaml: 13 entries, all pass, covering every number on the page. Notes (info): `sum-of-squares-bounds` does not test the inequality its `where` describes: its formula reduces to 385 − n(n+1)(2n+1)/6 = 0 at n = 10, i.e. the closed form, not the bounds 333.3 < 385 < 443.7; better to store two `expected` checks or a formula that is positive only when both bounds hold. Page-own entries `tank-*` (cite reading2 p. 9), `horizon-flat` (cite reading2 pp. 9-10) and `right/left/midpoint-sum` (reading1 p. 4) carry 18.01 sources that do not contain these numbers; `horizon-flat` should point at the 8.286 horizon page or have no source.

## Coverage and order
- Order follows the transcript: unit 3 and the two views (p. 1), notation (p. 1), three steps (pp. 1-2), x² by right-end rectangles (pp. 2-3), staircase pyramid and student question (pp. 3-5), limit and the slip (p. 5), "factor out" answer (pp. 5-6), summation notation (p. 6), examples x and 1 and the pattern (pp. 6-7), Archimedes (p. 7), Riemann sums (p. 8), cumulative sums with borrowing and continuous interest (pp. 9-10). The notes' A′(b) = f(b) remark is placed with the pattern, where the notes have it.
- Left out (acceptable): the student question about adding areas vs volumes (pp. 4-5; the page's "unit-thick layers" answers it implicitly), the slope-2 detail of the pyramid's sides (p. 4), the "you will forget f = 1 in 18.02" aside (p. 7), the notes' monthly Δt = 1/12 (row 5), "averages" (row 9).
- Added: original Riemann-sum comparison (right/left/midpoint), the tank example, the loan computation (row 1 on its numbers), a generated plot, and the cosmology callout.
- leadsTo: 18.01 Lecture 19 is "First Fundamental Theorem" in _course.json and the transcript p. 8 says the fast method comes "tomorrow": correct. 8.286 Lecture 8 is the horizon-distance page: correct.

## Licensing
- Lecture page and notes page marked Creative Commons License; transcript p. 1 carries the standard CC notice. No "All rights reserved" or "Courtesy of" text in notes.txt, tp.txt, lec.html or n.html (grep). The page reproduces no figure (the notes' Figures 1-5 are not used; the plot is generated from formulas).
- No verbatim copying beyond short standard phrases ("area under a curve", "cumulative sum", "Riemann sum", "on the nose", "staircase pyramid"). The x² derivation necessarily follows MIT's steps but is rewritten. The loan set-up reuses MIT's numbers (row 1).
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: the horizon integral ℓ = a(t₀)∫₀^t₀ c dt/a(t), the stretching factor a(t₀)/a(t), and 3ct₀ for a flat matter universe all match 8.286 Lecture 8 (horizon-distance.mdx, which also gives 3ct₀ = 2c/H₀). "Three times the naive light-travel distance" (ct₀) is right. Fair analogy to the borrowing sum; nothing attributed to Guth that he did not say.
- Symbols scoped to `definite-integrals` (a, b, c, cᵢ, d, e, f, i, n, r, t, x, y, a₁, a₂, aᵢ, aₙ): all fit the page. a and t correctly mention their cosmology-callout uses; c's meaning points to cᵢ as a separate entry. If row 1 changes the rate, update r's "0.06 for 6%". Symbols with course-wide meanings (Δx, Δt, t₀, ℓ) were not re-checked here; content:check reports nothing missing for this page.
- "Bernhard Riemann" and "nineteenth-century" go beyond the transcript's "a mathematician from the 1800s" but are correct (1826-1866).
- No em dashes on the page.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the loan example now uses the page's own numbers, \$9000 per year at 4%: \$9180 with simple interest, about \$9182 compounded continuously (calcs and the `r` meaning updated).
- **Warning 2:** the Archimedes remark is now kept inside the lecturer's view, with a bracket that Cavalieri and Fermat had the rule for xⁿ in the 1630s.
- Info: the two easy examples cite transcript pp. 6–7 and say the notes do f(x) = x with a sum; the notes' monthly steps are mentioned; "grows by a factor of"; the `sum-of-squares-bounds` calcs entry now describes what it checks. The other info items are left as they are.
