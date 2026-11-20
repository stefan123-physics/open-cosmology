---
page: content/year-1/18.01/average-value-and-probability.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-23-work/ (read: local copy lec.html, title "Lecture 23: Work, Probability"; transcript link R9a_NHXrBcg.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec23/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 23: Work, Average Value, Probability"; OCW cover + printed pp. 1-10 = PDF pp. 2-11)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/R9a_NHXrBcg.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec23")
  - content/year-1/18.01/_course.json (read: Lecture 24 = "Numerical Integration")
  - content/year-1/18.01/volumes.mdx and logarithm-and-areas.mdx (read, for "500 candy bars as in Lecture 22" and "√π/2 promised in Lecture 21")
  - content/year-5/8.902/press-schechter.mdx (read, for the 8.902 Lecture 16 leadsTo and the callout; the 8.902 notes themselves were not re-read)
  - calcs/18.01/average-value-and-probability.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k average-value`: 13 passed)
  - data/symbols.json (read: all 25 meanings scoped to `average-value-and-probability`)
  - `npm run content:check`: the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Average value, weighted averages and probability

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-10, as on the other 18.01 pages. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example "A weighted average price" and quiz 3 | Transcript p. 6: stock bought at $10, then $20, then $30, share counts left unspecified ("this many shares"). | Uses the same three prices, 10, 20 and 30 dollars, with its own share counts (100, 50, 50). | Writing rule 1 asks for original numbers in worked examples. Change the prices (e.g. 12, 18 and 25 dollars) and recompute; the prose mention of MIT's 10/20/30 can stay. Update calcs `stock-weighted`/`stock-unweighted` and quiz 3. |
| 2 | warning | data/symbols.json, `y` meaning scoped to this page | - | "Height: on the semicircle, y = √(1 − x²); in the cauldron, height above the bottom (in metres)." On the page $y$ is also the horizontal coordinate of the Gaussian volume ($r^2 = x^2 + y^2$, slices "at fixed $y$", $A(y) = e^{-y^2}Q$), and the curves $y = 1 - x^2$ and $y = x$ of the probability examples. | Add "; in the Gaussian volume, the second horizontal coordinate (r² = x² + y²)". |
| 3 | info | Formula "A probability as a ratio of areas", `cite="reading2" at="p. 10"` | Transcript p. 10 has the two integrals (board) and the value 5/18; the values $5/24$, $4/3$, $5/32$ are not in the source. | Shows the corrected result $5/32$ inside a formula cited to p. 10. | Acceptable, since the bracket right after explains the slip. Optional: write "(the evaluation is ours)" in that bracket. |
| 4 | info | Slip bracket after the parabola probability | Transcript pp. 10-11: "it turns out to be 5/18, we won't do it" (p. 10); "this number 5/18 ... is probably wrong ... it should be less than 1/4" (p. 11). | "The lecture quotes 5/18, then doubts it, since the answer should be less than 1/4; it is 5/32 ≈ 0.16, pp. 10–11." | Correct and fairly worded (writing rule 4 satisfied). The transcript on p. 10 also names the quantity "P(x < 1/2)" a moment after defining "x > 1/2"; the page rightly does not repeat it. |
| 5 | info | Title, opening | Despite the OCW titles ("Work, Probability"; notes "Work, Average Value, Probability"), neither the transcript nor the notes contain anything on work. | Page title omits "work" and says nothing about it. | Optional: one sentence such as "(Despite MIT's title, this lecture does not cover work.)", so a reader following the MIT link is not puzzled. |
| 6 | info | "The average depends on the variable" | Notes p. 2, Example 1, prints "Find the average of y = 1 − x²" (a typo for √(1 − x²); the figure and result π/4 are for the semicircle). Notes p. 3 also compute the unweighted average over $y$, $\int_0^1 (100 - 30y)\,dy = 85$. | Uses $\sqrt{1 - x^2}$ (correct) and $(100 + 70)/2 = 85$ only. | Fine. |
| 7 | info | "Darts and the Gaussian integral", last sentence: "which gives the limit √π/2 promised in Lecture 21" | Notes p. 10 do not mention Lecture 21; the connection is the page's own. Lecture 21's page (logarithm-and-areas) does say the area function of $e^{-t^2}$ levels off at $\sqrt\pi/2$. | Cites "(notes, p. 10)" at the end of the sentence. | Correct claim. Optional: link "Lecture 21" to /courses/18-01/logarithm-and-areas, as Lecture 22 is linked above. |
| 8 | info | Cosmology callout | Press–Schechter (press-schechter page) uses the density contrast smoothed on the scale of a mass $M$ and extrapolated with linear theory, threshold $\delta_c \approx 1.69$, and needs a factor of 2. | "at any place the density contrast δ is drawn from a normal distribution ... the probability that a region is dense enough to collapse ... the starting point of the Press–Schechter count". | Correct as stated ("starting point"). Optional precision: "the density contrast, smoothed over a region and computed with linear theory", so the δ here matches the 8.902 page. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt / notes.txt:
  - "Continuous average", reading1 p. 1: notes p. 1 end, $\lim (y_1 + \cdots + y_n)/n = \frac{1}{b-a}\int_a^b f\,dx$. Correct.
  - "Average height, with respect to x", reading2 p. 2: $\frac12\int_{-1}^1\sqrt{1-x^2}\,dx$, area of the semicircle $\pi/2$, answer $\pi/4$, all p. 2. Correct.
  - "Average height, with respect to θ", reading2 p. 3: $\frac1\pi\int_0^\pi\sin\theta\,d\theta = -\frac1\pi(\cos\pi - \cos 0) = 2/\pi$ and $\pi^2 > 8$, all p. 3. Correct.
  - "Weighted average", reading2 p. 5: board formula, divide by $\int_a^b w\,dx$, p. 5. Correct.
  - "Average temperature of the cauldron", reading2 p. 9: $\int T\pi y\,dy / \int \pi y\,dy = 40\pi/(\pi/2) = 80$, p. 9. Correct.
  - "A probability as a ratio of areas", reading2 p. 10: integrals on p. 10; see finding 3.
  - "Probability with a weight", reading2 p. 11: general formula $\int_{x_1}^{x_2} w\,dx / \int_a^b w\,dx$, p. 11. Correct.
  - "The Gaussian integral", reading1 p. 10: $\pi = V = Q^2$, $Q = \sqrt\pi$, notes p. 10. Correct.
- Prose citations: cauldron postponed (p. 1); Riemann sum, $\Delta x/(b-a) = 1/n$ (p. 1; notes p. 1); average of a constant (p. 2; notes p. 2, "53"); $d\theta$ pieces longer near the ends (pp. 3-5); "picked at random" interpretation (p. 4); weighted average (pp. 5-6); stock example and "two different integrals" (p. 6); cauldron set-up, $T = 100 - 30y$ (p. 6), disks because T is constant on horizontals (p. 7), $40\pi$ (p. 7), units and 500 candy bars (pp. 7-8), weighted average and 85 °C comparison (p. 9; notes pp. 3-4, "more water at cooler temperatures in the upper parts"); probability as part over whole (pp. 9-11); darts announced (pp. 11-12); notes darts pp. 4-6, Gaussian pp. 7-10. All match.
- $\int_0^1(100 - 30y)\pi y\,dy = \pi(50 - 10) = 40\pi$; $\int_0^1 \pi y\,dy = \pi/2$; ratio 80. Correct. $40\pi\times10^3$ kcal $/250 = 503 \approx 500$ bars. Correct (and Lecture 22's page does give 500 bars, so "as in Lecture 22" holds).
- $\pi/4 = 0.785$, $2/\pi = 0.637$, $\pi^2 = 9.87 > 8$. Correct.
- Parabola: part $\int_{1/2}^1(1-x^2)\,dx = \tfrac23 - \tfrac{11}{24} = \tfrac{5}{24}$; whole $\tfrac43$; ratio $\tfrac{5}{32} = 0.156$, less than $\tfrac14$. Correct.
- Stock example: $(1000 + 1000 + 1500)/200 = 17.50$; unweighted 20. Correct (see finding 1 on originality).
- Triangle example: $(\tfrac12 - \tfrac18)/\tfrac12 = \tfrac34$. Correct and original; the "why not one half" step is right.
- Darts: with $e^{-r_1^2} = \tfrac12$, $\tfrac16(e^{-4r_1^2} - e^{-9r_1^2}) = \tfrac16(\tfrac1{16} - \tfrac1{512}) = 0.0101$; the notes drop $e^{-9r_1^2}$ and get $1/96 = 0.0104$. "About 1%" correct either way. "A sixth of the ring" = 3 to 5 o'clock (notes p. 4). Correct.
- Gaussian: $\int_0^\infty e^{-r^2}2\pi r\,dr = \pi$; $A(y) = e^{-y^2}Q$; $V = Q^2$. Correct. Normal density $\frac{1}{\sqrt{2\pi}\sigma}e^{-x^2/2\sigma^2}$ as on notes p. 10. Correct.
- Quiz 1: index 1. Correct.
- Quiz 2: index 1 ($2/\pi$). Correct; explanation right.
- Quiz 3: index 1 (17.50). Correct; same as the worked example, so it tests recall (info).
- Quiz 4: index 2 (3/4). Correct; same as the worked example (info).
- Flashcards: all four correct.
- Calcs file: 13 entries, all pass. `triangle-probability` is page-own but carries `source: {cite: reading2, at: 'p. 11'}` (the general formula); harmless.
- No em dashes on the page.

## Coverage and order
- Transcript order: cauldron postponed; average value from a Riemann sum (p. 1); average of a constant (p. 2); semicircle with respect to $x$ (pp. 2-3); with respect to arc length $\theta$, why lower, questions (pp. 3-5); "always dividing by the total" (p. 5); weighted average and the constant check (p. 5); stock example, $f$ cannot be factored out (p. 6); cauldron energy by disks, units, candy bars, what the integral means (pp. 6-8); average final temperature 80 °C vs 85 °C (pp. 8-9); probability, parabola, 5/18 and doubt (pp. 9-11); general formula (p. 11); darts announced (pp. 11-12).
- The page follows this order. The stock worked example comes after the cauldron rather than before it, but the stock idea is introduced in prose at the right place. The darts calculation and Gaussian integral are presented as from the notes, correctly.
- Omitted, all minor: the calorie conversion details (1 cal per °C·mL, $(100\text{ cm/m})^3$, about 125 thousand kcal), which the Lecture 22 page already gives; the student question on what the integral means (p. 8); the student exchange about $\cos\pi$ (p. 4); the notes' antiderivative of $re^{-r^2}$ worked out (notes p. 5).
- Not in source and added by the page: the triangle example, the cosmology callout, the Lecture 21 connection.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, transcript or the lecture/notes pages (grep of all local copies). The page reuses no figure and has no graphic.
- The text is rewritten; no sentence copied from the notes or transcript. Shared phrases are standard ("part over whole", "weighted average", "continuous average", "witches' cauldron", "little brother" is avoided in favour of "someone").
- Worked example 2 is original; worked example 1 reuses MIT's prices (finding 1).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 18.01 Lecture 24 "Numerical integration" matches `_course.json`; the "why" (no antiderivative known, as for $e^{-x^2}$) is fair. Whether the Lecture 24 video opens with the darts example announced on p. 12 was not checked (Lecture 24 transcript not read).
- leadsTo 8.902 Lecture 16: press-schechter.mdx is `lecture: 16`; its "Gaussian statistics" section and $F = \tfrac12\text{erfc}(\delta_c/\sqrt2\sigma)$ (×2) match the callout's description as a Gaussian tail probability. Fairly worded.
- Callout: "fluctuations left by inflation are, to a very good approximation, Gaussian" is the standard result (consistent with the 8.902 page); unattributed but uncontroversial.
- Symbols (25 meanings scoped to this page): all fit apart from finding 2. Minor wording: `d` "As in dx, dy, dθ and dr: the variable of integration" (d marks the variable rather than being it; "marks the variable of integration" would be exact); `circ` "Degrees Celsius of temperature (°C)" (the symbol is the degree sign; with C it gives °C). Both info. δ (with δ_c), σ, Q, P, w, r, r₁, T (°C), sample-point symbols all correct.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the share-price example and quiz 3 now use the page's own prices (12, 18 and 30 dollars; average 18.00 dollars); calcs updated.
- **Warning 2:** the `y` meaning now covers the Gaussian volume's second horizontal coordinate.
- Info: the page says the lecture has no "work" despite its OCW title; "Lecture 21" is now a link. The other info items are left as they are.
