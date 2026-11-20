---
page: content/year-2/8.033/schwarzschild-orbits-perihelion.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture23_bh3/ (read: local copy of the slide PDF, deck "Lecture 23", 26 slides; text via pdftotext, and every slide rendered as an image, slides 4 and 10 at 200 dpi, slides 8, 9, 11, 12, 18-26 at 120 dpi, slide 19's plot at 250 dpi. No transcript exists.)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture24_bh4/ (read, text only, to check the leadsTo claim about Lecture 26)
verdict: needs-changes
---

# Review: Orbits around a black hole and Mercury's perihelion

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout | (Not MIT; claim about the site's 8.286 pages.) `content/year-4/8.286/geodesic-equation.mdx` (Lecture 13) derives the geodesic equation and does not mention conserved quantities or momentum falling as 1/a. The 1/a result appears only on `christoffel-symbols.mdx` (Lecture 14), and only in brackets as "the standard result" of a homework problem, not derived. | "in the Robertson–Walker metric the [geodesic equation](/courses/8-286/geodesic-equation) shows that a freely moving particle's momentum falls in proportion to 1/a" | Link to `/courses/8-286/christoffel-symbols` (where the conserved quantity for a coordinate absent from the metric is shown, line 104, and the 1/a result is mentioned), and word it as "the standard result, set as an 8.286 homework problem". Consider changing `leadsTo` 8.286 Lecture 13 to Lecture 14 to match. The physics (p ∝ 1/a, from the conserved covariant spatial momentum) is correct. |
| 2 | warning | "Radial orbits" section | Slide 18: two curves of bookkeeper time against r for particles released from 100M a short time apart, with horizontal lines at fixed t. Slide 19: "Release two particles from r=30M a short time appart", but the plot shows a single curve only, for r ≈ 2M to 5M and t_bk ≈ 384 to 391, steepening near r = 2M. Neither slide states the answer to "Spaghetti or Pancake?". | "Slides 18–19 ... plot the 'bookkeeper' (far-away) time against radius for both: the leading particle ... pulls ahead, so radial separations grow. ... spaghetti, not pancake." | Say that slide 18 shows the gap growing (my reading of the plot: about 11M at t_bk = 100, about 13M at 300, more by 380; approximate). Describe slide 19 as it is: one curve near the horizon, where bookkeeper time runs off to infinity. In bookkeeper coordinates both particles pile up at r = 2M, so Δr at fixed t_bk eventually *shrinks*, which is a coordinate effect. Mark the answer (tidal stretching along the radius, squeezing sideways) as the page's own. |
| 3 | warning | "Circular orbits", first sentence | Slide 7 is only the title "CIRCULAR ORBITS". Slides 8–9 are plots with no text on stability. | "A circular orbit sits at a minimum (stable) or maximum (unstable) of Ṽ (slides 7–9)." The reading of slide 8 (stable outer branch and unstable inner branch, meeting at 6M, inner ones approaching 3M) is also the page's own interpretation. | Mark these as the page's own ("(the page's reading of the plots)"). The physics is correct: I checked it against L̃² = Mr²/(r − 3M), which has a minimum √12 M at r = 6M, and r → 3M as L̃ → ∞. Slide 8's dotted lines sit at L̃ ≈ 3.46, r = 3 and r = 6, which agrees. |
| 4 | warning | Table text: "at 4M a 'tourist' ... can orbit" | Slide 10 names the 4M orbit "Tourist orbit", with Ẽ = 1. It gives no explanation. | Says a tourist "who comes in from far away with just enough energy (Ẽ = 1) can orbit". It does not say that 4M < 6M, so this orbit is unstable. | Add "(an unstable orbit: it lies inside 6M)". Also, Ẽ = 1 means it is marginally bound: a body falling from rest at infinity can only approach this orbit, not settle into it. The explanation of the name is the page's own, so mark it so. |
| 5 | warning | Opening of "The orbit equations" | Slide 4: "For a particle moving in the Schwarzschild metric, the energy E and and angular momentum L are conserved. ... In terms of these two constants, the equations of motion become ... where the effective potential per unit rest mass is". | Several clauses are almost word for word: "For a particle moving in the Schwarzschild metric, the energy E and angular momentum L are conserved", "In terms of these two constants, the equations of motion are", "the effective potential per unit rest mass". | Rewrite in the page's own words (writing rule 1). For example: "Because the metric does not change with t or φ, two quantities stay fixed along the path..." |
| 6 | warning | Worked example (b) and summary | Lecture 26 slides (deck "Lecture 24") give the maximum accretion efficiency as 1 − 3^(−1/2) ≈ 42% (for a spinning hole). | Says 5.7% and that accreting black holes "such as quasars, are the most efficient engines known". It does not say that the 5.7% is for a non-rotating hole (only quiz 1 says "non-rotating"). | Add "for a non-rotating hole" in (b) and in the summary, and optionally "(spinning holes can do much better; see the next lecture)". |
| 7 | warning | `leadsTo` 8.033 Lecture 26 | Lecture 26 topics (slide "TODAY'S TOPICS"): lensing, Shapiro time delay, evidence for GR, time travel, mysteries for you to figure out, and "Some final words". | "The last lecture: more about black holes and the course in review." | Reword, e.g. "The last lecture: lensing, the Shapiro delay, the evidence for general relativity, time travel and open mysteries." I found no course review in the slide text. |
| 8 | warning | GPS sentence | Slides 13–15 cover GPS (24 NAVSTAR satellites, 11,000 miles, trilateration, distance = rate × time). They do not mention relativity. | "...which needs these relativistic corrections every day" | Say that relativity is not on these slides (the page's own remark, and the Lecture 7 page has the numbers). Also, "these" suggests the orbit equations. The GPS corrections are gravitational and velocity time dilation, so name them. "constellation of 24 'NAVSTAR' satellites" is the slide's wording; it is short and acceptable, but could be rephrased. |
| 9 | info | "Near-circular orbits" (slides 11–12) | Slide 11 is titled "GENERAL ORBITS". "Near-circular orbits" is slide 5's topic wording. | "Near-circular orbits do not close ... (slides 11–12)" | Optional: mention that slide 11 heads the section "general orbits". |
| 10 | info | Perihelion formula | Slide 12 gives only "43 arcseconds/century" and a Wikipedia image. | Formula cited "slide 12 (the 43 arcseconds; the formula is the page's own)". | Correctly marked. The formula is the standard result. "the anomaly that Newtonian theory could not explain" is also not on the slides (it is historically correct); mark it as the page's own if you want to be strict. |
| 11 | info | Orbit equation Formula, `γ_r` | Slide 4 uses γ_r without defining it here. It was defined in the Lecture 23 deck. | Uses γ_r² without defining it on this page. | Add "(with γ_r = 1/√(1 − 2M/r), from the [Schwarzschild page])". |

## Arithmetic and answer checks
- Slide 4 formula: every term matches the slide exactly: (dr/dτ)² = Ẽ² − Ṽ², dφ/dτ = L̃/r², Ṽ² = (1 − 2M/r)(1 + L̃²/r²), dt/dτ = Ẽ/(1 − 2M/r) = γ_r² Ẽ. The citation "slide 4" is correct, and the equations are on the slide. "Ẽ ≥ 1 is a necessary condition for escape" is on slide 4, and "only if" renders it correctly.
- Table: identical to slide 10, row by row: 3M (1, ∞, ∞), 4M (1/√2, 1, 4M), 6M (1/2, √(8/9), √12 M), ∞ (0, 1, ∞). Correctly cited.
- The page's own formulas behind the table: L̃² = Mr²/(r − 3M), Ẽ = (1 − 2M/r)/√(1 − 3M/r), v_shell = √(M/(r − 2M)). All are correct, and they reproduce every row: L̃(4M) = 4M, Ẽ(4M) = 1, v(4M) = 0.7071; L̃(6M) = 3.4641M = √12 M, Ẽ(6M) = 0.9428 = √(8/9), v(6M) = 0.5; v(3M) = 1 and Ẽ, L̃ → ∞ at 3M. As r → ∞: v → 0, Ẽ → 1, L̃ ≈ √(Mr) → ∞.
- 1 − √(8/9) = 0.05719, i.e. 5.7%. 0.0572/0.007 = 8.2, so "eight times" is correct.
- Mercury: 6π × 1.327e20 / ((2.998e8)² × 5.791e10 × (1 − 0.2056²)) = 5.018e-7 rad per orbit. 36525/87.969 = 415.2 orbits. Product 2.083e-4 rad = 42.97 arcsec, about 43. All correct. The input data (a, e, period, GM_sun) are standard values. The example is original: the slides contain no numbers here.
- Calcs file `calcs/8.033/schwarzschild-orbits-perihelion.yaml`: every formula and expected value agrees with my recomputation. The `origin`/`source` tags are reasonable (5.7% is marked page-own; the table rows are marked mit, slide 10).
- Quiz 1 (3M, index 3): correct. Quiz 2 (5.7%, index 0): correct. Quiz 3 (43 arcsec per century, index 1): correct; the explanation's 5.0e-7 and 415 orbits are correct. Quiz 4 (spaghetti, index 2): correct as physics. The explanation is the standard tidal argument, though the slides do not state it (see finding 2).
- Flashcards: all three are correct.

## Coverage and order
- The page follows the deck's order: welcome and recap (1–3), equations (4), topics (5), simulator (6), circular orbits (7–10), general orbits and Mercury (11–12), GPS (13–15), radial orbits (16–19), free-fall-time plots (20–26). Slide 4 comes before slide 5's topic list on the page only in the sense that the intro cites slide 5 first; this is harmless.
- Slides 20–26: free-fall time t_ff against r/M, with a vertical line at 2M, an infalling trajectory (20), red, green and blue curves (22), a dense grid of ingoing and outgoing rays (24), and outgoing rays outside the horizon (26). Calling them "river-model plots ... from the last lecture but one" agrees with `schwarzschild-black-holes.mdx` (Lecture 23, slides 17–23 of that deck), whose free-fall-time plots these slides repeat. The slides themselves do not say "river". Slide 5's topic "What really happens near the event horizon" is covered only by this one sentence, which is thin, but the slides have no text either.
- Nothing is left out. The fourmilab simulator link on slide 4 is not mentioned (optional).
- "These are the equations previewed on the last lecture's page": correct. `evidence-for-black-holes.mdx` gives the radial equation (with E, L per unit mass, written without tildes; the change of notation is harmless).

## Licensing
- Third-party figures in the deck: slide 1 and slide 12 ("Image courtesy of Wikipedia"), slide 3 ("Image courtesy of NASA"), slide 15 ("Figure by MIT OCW"). The page reuses none of them: it has no images at all. Slides 8, 9 and 18–26 are not reproduced either. No "All rights reserved" notice appears in the deck text.
- No OpenStax or LibreTexts material.
- Close wording: see finding 5 (slide 4's sentences) and finding 8 (the NAVSTAR phrase). The rest is the page's own phrasing.
- No em dashes on the page (I counted 0).

## Notes
- The physics of the circular-orbit discussion, the ISCO efficiency and the perihelion formula is correct. The main problems are attribution: the 8.286 callout link (error), and statements marked as slide content that are the page's own interpretation (slides 7–9, 18–19, the GPS remark).
- My reading of the slide 18 separations is approximate. What slide 19's single curve represents (one particle or both) is uncertain: the slide text says two particles, but only one curve is visible at 250 dpi.
- I did not run `npm run calc:test`. I recomputed every calcs entry independently in Python.

## Resolution (2026-11-17, by the page author)

- Error (callout): now links `christoffel-symbols` (8.286 Lecture 14), where the conserved quantity and the 1/a result appear; `leadsTo` changed to 8.286 Lecture 14.
- Spaghetti or pancake: the slides' content is described as shown, and the answer (spaghetti) is marked as the page's own, with the coordinate effect near the horizon noted.
- Slides 7–9: the stable/unstable reading is marked as the page's own.
- Tourist orbit: marked unstable (inside 6M); the name's explanation marked as the page's reading.
- Slide 4 wording rewritten; γ_r defined.
- 5.7% now says "non-rotating", with the 42% of a spinning hole mentioned.
- `leadsTo` Lecture 26 reason now matches that deck; GPS remark marked as the page's own; slide 11 titled "general orbits"; the Newtonian-anomaly remark marked as the page's.
