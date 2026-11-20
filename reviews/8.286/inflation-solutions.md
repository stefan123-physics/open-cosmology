---
page: content/year-4/8.286/inflation-solutions.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-23-inflation/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/2aa1ecae1246c3e9b9fca11aefb81dcb_PsfyE1-s9Rs.pdf (read, Lecture 23 transcript, pp. 19–25 checked line by line; printed footer = PDF page)
  - Lecture 23 slides, mit8_286f13_lec23 (read as text; slides 1–3; slide 2 graph is "© Science. All rights reserved", slide 3 image removed by MIT)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-2-inflationary-cosmology-is-our-universe-part-of-a-multiverse-part-ii/ and its transcript (read, only to check the cosmology callout)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-1-inflationary-cosmology-is-our-universe-part-of-a-multiverse/ (description only)
verdict: needs-changes
---

# Review: How inflation solves the problems of the Big Bang

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Flatness plot: `points` and caption | Not in MIT (the plot is the page's own). Guth's sample expansion is a factor of $10^{28}$ (p. 21). | Point at x = 64.7, y = −56.2, and the caption says "the 64.7 e-folds of a 10²⁸ expansion". | $\ln(10^{28}) = 28\ln 10 = 64.47$, so a $10^{28}$ expansion is **64.5 e-folds**, and $-2\times64.47/\ln 10 = -56.0$. Change the point to `{ x: 64.5, y: -56, … }` and the caption to "64.5 e-folds" (or "about 64.5"). The current y = −56.2 matches x = 64.7 on the curve, so the point is on the line but at the wrong place for $10^{28}$. |
| 2 | warning | Frontmatter `source.readings`; "The CMB" section | The details "Graph by Max Tegmark, for A. Guth & D. Kaiser, Science 307, 884 (Feb 11, 2005), updated to include WMAP 7-year data" are on the **slides** (slides 1–2), not in the transcript. | The page uses these facts and says "as the slide says", but the slides are not listed as a reading. | Add the Lecture 23 slides (`…/resources/mit8_286f13_lec23/`) as `reading2`. You could also add the citation "Science 307, 884 (2005)" to `references`, as a reference to the article only. |
| 3 | info | Horizon section, "about 50 horizon distances apart (46 in Guth's calculation)" | p. 19: "about maybe 50 horizon distances, we calculated". | Says 50, with Guth's Lecture 21 value of 46 in brackets. | This is correct and matches `horizon-problem.mdx` (46). No change needed. |
| 4 | info | CMB section, alternatives list | p. 24: inflation without dark energy, "making omega equal [one] out of matter, out of ordinary matter". | "with Ω = 1 made of matter". | This is a fair reading. The transcript's "what" is a transcription slip for "one". Guth's "ordinary matter" means non-vacuum matter, and the page's "matter" avoids implying baryons only. Fine as written. |
| 5 | info | CMB section, "Guth notes that the curve is partly fitted" | p. 24: "this data is to some extent fit to the model". | Same meaning. | No change needed. |

### Formula citations (all checked)
- "First Friedmann equation", `reading1` p. 21: correct. Guth says it aloud on p. 21 ("H squared equals 8 pi over 3 G row minus Kc squared over a squared"). The board is implied, since it is not on any slide.
- "Suppression of the curvature term" $(10^{28})^2 = 10^{56}$, p. 21: correct. Both the $10^{-27}$ cm → 10 cm expansion ($10^{28}$) and the factor $10^{56}$ are on p. 21.
- "Dilution of monopoles" $(10^{28})^3 = 10^{84}$, p. 22: correct ("10 to the 28 cubed is 10 to the 84").

### Bracketed slip notes
- "Planck seven-year data": confirmed. On p. 23 Guth says "Shown here is the Planck seven year data" (twice). The slide credit says "updated to include WMAP 7-year data", and on p. 24 Guth himself compares Planck with "the data from WMAP". The note is correct and well placed.
- "dark matter" for dark energy: confirmed on p. 24 ("putting in the amount of dark matter that we need to fit the data that we also measure from the supernovae"). The supernova data measure dark energy, and the next alternative is "inflation without dark energy", so the correction is justified. It is a reasonable editorial interpretation, not a certainty, but it is clearly the intended meaning.

## Arithmetic and answer checks
- $28\ln 10 = 64.47$ e-folds. $2/\ln 10 = 0.8686$, which matches the caption's "≈ 0.87 per e-fold". $-2(64.47)/\ln 10 = -56.0$. See finding 1: 64.7 is wrong.
- Caption formula: from $H^2 = \frac{8\pi}{3}G\rho - kc^2/a^2$ with $\Omega = 8\pi G\rho/(3H^2)$, we get $\Omega - 1 = kc^2/(a^2H^2)$, so $(\Omega-1)/\Omega = 3kc^2/(8\pi G\rho_f a^2) \propto e^{-2\chi t}$ for $a \propto e^{\chi t}$. This is correct, and $\chi$ matches the notation in `exponential-expansion.mdx`. The curve expression `L - 2*x/log(10)` uses mathjs `log` (the natural log), so it is correct. The "for |Ω − 1| ≪ 1" qualifier is appropriate, because only $\log|(\Omega-1)/\Omega|$ falls exactly linearly.
- At x = 70 the curve reaches −60.8, slightly below the range of −60. This is harmless: it is clipped at the edge.
- $(10^{28})^2 = 10^{56}$ and $(10^{28})^3 = 10^{84}$ are both correct.
- "far more than the 10⁻¹⁸ needed at one second": consistent with p. 20 and `flatness-problem.mdx`.
- Quiz Q1 (answer 1): correct. The explanation matches p. 20 (a tenth of a Hubble length).
- Quiz Q2 (answer 2): correct. The explanation ($10^{28}$ → $10^{56}$) matches p. 21.
- Quiz Q3 (answer 1): correct. Pages 21–22 support both dilution by $10^{84}$ and constant energy density / reheating. "Reheating" is not Guth's word on these pages, but it is the standard term and is used on the earlier pages of this lecture.
- Quiz Q4 (answer 1): correct (p. 23).
- Quiz Q5 (answer 1): correct (pp. 24–25). The explanation is accurate.
- Flashcards: all four are correct. Flashcard 2's "(by ~$10^{-56}$ for $10^{28}$ expansion)" is loosely worded, because $|\Omega-1|$ is reduced **by a factor** $10^{56}$, not "by $10^{-56}$". Suggest "reduced by a factor ~$10^{56}$" (info).

## Coverage and order
- Transcript pp. 19–25 run in this order: horizon/homogeneity (pp. 19–20), flatness (pp. 20–21), monopoles (pp. 21–22), small-scale nonuniformities and quantum fluctuations (pp. 22–23), CMB graph and alternatives (pp. 23–24), Planck 2013 (p. 24), six-parameter fit, height and opacity (pp. 24–25), and conclusion (p. 25). The page follows exactly this order.
- The first part of p. 19 (the expansion factor $10^{16}$ GeV / $k$·2.7 K, and 450 × 10⁹ ly versus about 40 × 10⁹ ly) is covered in `exponential-expansion.mdx` (Formula at p. 19). It is correctly not repeated here.
- Omitted: the closing thanks to the class (p. 25). This is appropriately omitted. Slide 3 (the Planck 2013 image, removed by MIT for copyright) is mentioned only as "Planck's data, released in March 2013, fit even better". That is fine.
- Nothing is added beyond MIT except the plot and the two callouts, which are clearly marked.

## Licensing
- The slide 2 graph is "© Science. All rights reserved. This content is excluded from our Creative Commons license." The page reproduces none of it: there is no image, no data, no curve and no colours. It only describes in words what Guth says about the graph (axes, data versus the inflation curve, three alternatives), and it explicitly says the graph is excluded and is described, not reproduced. This is acceptable.
- The slide 3 image was removed by MIT for copyright. The page does not use it or link to it.
- No "Courtesy of" material is used. There is no OpenStax or LibreTexts material.
- No verbatim paragraphs are copied. A few short phrases follow the transcript closely: "Everything we see had a causally connected past" (p. 20), "when they were finally seen, they were just right" (p. 23), and "quantum theory comes to the rescue" (p. 23). These are single short sentences or clauses, so they are acceptable, but the first could be reworded slightly (info).
- The plot is generated from a formula. It is not a static image.

## Notes
- **Later-developments callout:** Planck 2018 gives $n_s = 0.9649 \pm 0.0042$, so "≈ 0.965" is correct. BICEP/Keck 2021 (BK18) gives $r_{0.05} < 0.036$ at 95% CL, which is correct. The callout is clearly marked as post-2013. Optional refinements (info):
  - Planck 2013, released before this lecture, had already measured $n_s \approx 0.960 \pm 0.007$, so the tilt itself is not purely a later development. Only its precision is. Consider "confirm with greater precision".
  - Later combined analyses tighten the bound slightly (e.g. BK18 + Planck PR4 give $r < 0.032$). ACT DR6 (2025) combined with Planck gives a somewhat higher $n_s \approx 0.974$. Neither makes the callout wrong.
- **Cosmology callout and `leadsTo`:** Lectures 1–2 are titled "Inflationary Cosmology: Is Our Universe Part of a Multiverse? Part I/II" (from `_course.json` and OCW). The Lecture 2 transcript calls them "the overview lecture" and discusses how "most inflation models tend to become eternal" and eternal inflation. The callout's claims (overview given at the start of the course, multiverse, eternal inflation from the same false-vacuum physics) are therefore supported. Lecture 2 also covers the landscape and anthropic arguments, which could be mentioned but are not required.
- The prerequisites `exponential-expansion`, `horizon-problem`, `flatness-problem` and `magnetic-monopoles` all exist.
- The opening line "the problems from Lectures 21 and 22" is correct: the horizon and flatness problems are in Lecture 21, and the monopole problem in Lecture 22.

## Resolution (2026-11-14, by the page author)

- Error: the plot point and caption now use 64.5 e-folds (28 ln 10) and −56.0 for a 10²⁸ expansion.
- Warning: the Lecture 23 slides are now listed as a reading, labelled as © Science and not reproduced.
- Info: flashcard 2 now says |Ω − 1| is reduced by a factor ~10⁵⁶; the "causally connected past" sentence is reworded; the callout gives n_s = 0.965 ± 0.004 and notes Planck 2013 had already found about 0.96.
