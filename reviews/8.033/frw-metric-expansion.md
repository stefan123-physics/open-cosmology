---
page: content/year-2/8.033/frw-metric-expansion.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture17_cosmo1/ (read: slide PDF "Lecture 17", 19 slides, as extracted text and as rendered images of every slide; no transcript exists)
verdict: needs-changes
---

# Review: The FRW metric and the expanding universe

All formulas were compared with the rendered slide images, not only the extracted text, because the text layer loses the equations.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The FRW metric and the expansion", paragraph after the age formula (slide 18) | Right panel of slide 18: size of the universe against time. All curves touch the q₀ = 0 straight line at "Now". The arrow labelled 1/H₀ runs from where that straight line reaches zero size to "Now". | "All curves share today's slope, 1/H₀" | The shared slope today is ȧ₀ = H₀a₀, not 1/H₀. Suggest: "All curves have the same size and slope today (the same H₀). Extending today's slope back in a straight line reaches zero size 1/H₀ ago (the age for q₀ = 0). The more the expansion decelerates, the younger the universe." |
| 2 | error | "Key fact", slide 14 sentence | Slide 14 plots density fluctuations against scale (millions of light years). At 10 million ly the curve and the green data are about 2 to 3. The curve passes 1 at about 100 million ly. The largest-scale CMB points (about 4 × 10⁴ million ly) lie between about 6 × 10⁻⁵ and 2 × 10⁻⁴. | "falls from about 1 on scales of ten million light years to about 10⁻⁴" | "falls from a few on scales of ten million light years (about 1 at a hundred million) to about 10⁻⁴ on the largest scales …". The rest of the sentence (four kinds of data on one curve) matches the slide. |
| 3 | warning | "Key fact", slide 15 paragraph; quiz 4 | Slide 15: Walker "(British; 1935 paper with H P Robertson showed …)" | Repeats that it was a joint paper: "whose 1935 paper with H. P. Robertson showed …" | Robertson and Walker worked independently and did not write a joint paper. Robertson published in ApJ 82 (1935); Walker's paper appeared in Proc. London Math. Soc. (1937, received 1935). Under writing rule 4 the page should not repeat the slip. Suggest: "Howard P. Robertson (1935) and Arthur Geoffrey Walker (British, 1935–37) showed independently that …", with a short bracketed note that the slide calls it a joint paper. Quiz 4 ("Robertson and Walker") stays correct, but "showed in 1935" could be "in the mid-1930s". (I am confident of the independent papers; the exact Walker dates come from memory and are worth checking.) |
| 4 | warning | Note after the Hubble-parameter formula; calcs `slide-unit` (origin: slip) | Slide 7: h ≈ H₀ × 9.7846 Gyr | "the slide's last digits are slightly off" | 9.7846 is exactly what a 365-day year gives: 3.08568 × 10¹⁷ s / 3.1536 × 10⁷ s = 9.7846 × 10⁹. A Julian year (365.25 d) gives 9.7779. This is a choice of year length, not a careless slip. Suggest: "(the slide uses a 365-day year; with the Julian year used in astronomy, 1/(100 km s⁻¹ Mpc⁻¹) = 9.778 Gyr. The difference does not matter here.)" Update the calcs `where`/`origin` to match. |
| 5 | warning | "Key fact", slide 13 description | Slide 13: a wedge-shaped redshift-survey picture "courtesy of Enoch Lau/Wikipedia", with an arrow to an inset of the Hubble Ultra Deep Field. The slide does not name the survey. | "a slice of the Sloan Digital Sky Survey" | Uncertain: the two-wedge image credited to Enoch Lau on Wikipedia is, as far as I know, the 2dF Galaxy Redshift Survey, not SDSS. Either check it or write "a slice of a galaxy redshift survey". The slide-14 figure's legend does say "SDSS galaxy clustering", so the SDSS name may have been carried over from there. |
| 6 | warning | Last sentence before the cosmology callout | Slide 19 in the OCW PDF has only the credit line ("Figure 8 from 'What is the Universe made of? How old is it?' by Charles Lineweaver", arXiv astro-ph/9911294). The figure itself was removed and the slide is black. | "Slide 19 shows a figure from a review by Charles Lineweaver on what the universe is made of and how old it is." | Say the figure was removed from the OCW version and only its credit remains. Do not describe its content: the slide does not show it. |
| 7 | info | Friedmann paragraph | Slide 8 itself has both lines: the ρ, k form and the Ω form. | "here also written with the density parameters …" | "here also" can read as if the page added the Ω form. Suggest "written both with ρ and k and with the density parameters …". The definition 1 + z = a₀/a is the page's own addition (not on the slide), which is fine. |
| 8 | info | Age paragraph | Slide 8 gives only t(z) = ∫ dz′/((1 + z′)H(z′)). | Derives it from dt = −dz/((1 + z)H). | Correct, and clearly the page's own step. Optionally mark it "(the step is ours)". |
| 9 | info | Recap, slide 4 exercise | φ = −MG/r | "φ = −M/r (and c = G = 1)" | Same thing with G = 1, and slide 4 states c = G = 1. Fine. |
| 10 | info | Recap, exercise answers | No answers on the slides. | Answers marked as the page's own, "to first order" | All correct. Given the metric (1 + 2φ)dt² − dx², they are exact. Only the metric itself is first order in φ, so "to first order in φ" would be more precise. R (the Earth's radius) and r (the orbit radius) are not defined. |
| 11 | info | Slide 15, Walker | "Walker 1909-?" | Gives no dates for Walker | Optional: Walker died in 2001 (from memory; check it before adding). The page already corrects Lemaître's death year (1966, correct). |

Formula checks (all against the slide images):
- FRW metric, cite slide 7: matches slide 7 exactly. It also appears on slides 3 and 16 (the page says "slides 7 and 16"; slide 3 could be added). Correct.
- H ≡ ȧ/a and h ≡ H₀/(100 km s⁻¹ Mpc⁻¹) ≈ H₀ × 9.7846 Gyr, cite slide 7: matches.
- Friedmann equation (both forms), cite slide 8: matches, including the Ω_γ, Ω_m, Ω_k, Ω_Λ powers 4, 3, 2, 0.
- t(z) integral, cite slide 8: matches.
- Newtonian metric (1 + 2φ)dt² − dx² − dy² − dz² (inline, slides 3–4): matches slides 3 and 4. Slide 5 does write (1 − 2φ), confirmed in the image. The claim that the previous page noted this slip is confirmed: equivalence-principle-metrics.mdx line 101 discusses the 1 − 2φ factor.

## Arithmetic and answer checks
- 1/(100 km s⁻¹ Mpc⁻¹) with a Julian year: 9.7779 Gyr (page 9.778, correct). With a 365-day year: 9.7846 (the slide's figure; see finding 4).
- Hubble time 9.778/0.70 = 13.97 → "about 14.0 billion years": correct. Quiz 2 (9.78/0.70 ≈ 14.0, answer index 2): correct.
- Age integral for Ω_m = 0.3, Ω_Λ = 0.7: the closed form (2/(3√Ω_Λ)) sinh⁻¹√(Ω_Λ/Ω_m) = 0.96410. My own midpoint-rule integration (2 × 10⁵ steps) gives 0.96410. "About 0.964": correct. The closed form is right for flat matter plus Λ.
- Age 13.97 × 0.9641 = 13.47 → "about 13.5 billion years": correct (flashcard and summary too). "A little less than the Hubble time" and the reason given are correct.
- H(z = 1) = H₀√(0.3 × 8 + 0.7) = √3.1 H₀ = 1.7607 H₀ → "1.76 H₀"; 70 × 1.7607 = 123.2 → "about 123 km/s/Mpc": correct.
- Ω_m = 0.05 + 0.25 = 0.3: correct. Every 2005 value matches slide 8 (Ω_b 0.05, Ω_d 0.25, Ω_Λ 0.7, Ω_k 0, h 0.70).
- Planck 2018 h ≈ 0.674 (H₀ = 67.4 ± 0.5): correct, and marked as a later development.
- Quiz 1 (index 0, expansion rate): correct. Quiz 3 (index 3, radiation, (1 + z)⁴): correct. Quiz 4 (index 1, Robertson and Walker): correct as an answer; see finding 3 on the "joint paper" wording.
- Flashcards: the FRW metric and the Friedmann equation match slides 7 and 8. The age card is correct (13.5 Gyr).
- calcs/8.033/frw-metric-expansion.yaml: every formula and expected value recomputed. All agree with the page. The `slide-unit` entry is labelled `origin: slip` (see finding 4). The `history-years` fact says "Robertson and Walker 1935" (see finding 3).
- calcs/values.yaml additions: '123' (computed), '13.5' (computed), '14.0' (computed Hubble time, not the age) and '0.70' (historical, the 2005 slide value) all describe the page's use correctly. The existing Ω entries '0.3'/'0.7' are labelled "example: the round present-day value". Here they are the 2005 measurements on the slide. This is acceptable, but a little loose (info).
- `npm run content:check`: 0 errors. The only warning for this page was the missing review file.

## Coverage and order
- Slide order: 1 (Friedmann, welcome back), 2 (GR summary), 3–5 (metrics, exercise), 6 (title: Cosmology 1/4, topics), 7 (key formula summary), 8 (Friedmann equation, 2005 parameters, age), 9 (Key fact 1), 10–13 (Powell map, HUDF, Kitt Peak, redshift survey with HUDF inset), 14 (density fluctuations vs scale), 15 (Friedmann, Lemaître, Walker), 16 (slide 7 repeated with "Let's derive some implications!"), 17 (balloon), 18 (q₀ figure), 19 (Lineweaver credit only).
- The page covers every slide. It puts the key-fact block (slides 9–15) before the FRW and Friedmann formulas (slides 7–8). This is a sensible reordering, since slide 16 repeats slide 7 after the key facts. It is not stated, though. Optionally add "(the slides list the formulas first, on slides 7–8, and return to them on slide 16)".
- Slide 3's "(Why?)" prompt and its Minkowski-in-polar and Schwarzschild metrics are covered only as "the last lecture's gallery of metrics". That is acceptable for a recap.
- Slide 6's topic "Brief history of the Universe" has no slides in this deck. The page lists it only as a topic, which is fine.
- The page's claim that MIT's class sessions make this "Lecture 18" (deck "Lecture 17") matches `_course.json`. It cannot be checked against the slides themselves (uncertain, info).

## Licensing
- The page reuses no images. Slide 10 (Richard Powell, "used with permission"), slides 1/12/13 (Wikipedia, Enoch Lau), slides 11/13 (NASA), slides 2/17/18 ("Figure by MIT OCW") and slide 19 (Lineweaver, arXiv) are only described in words. Slide 14's figure is uncredited in the PDF and is not reproduced. Good.
- The 1993 biography quote (slide 1) is paraphrased, not quoted. Good.
- No "All rights reserved" notice in the deck.
- Wording: a few short phrases follow the slides closely, such as "implies special relativity", "implies both gravitational redshift and Newtonian gravity", "the key to problems is working with metrics and the calculus of variations", and "homogeneous … and isotropic … on large scales". These are short standard phrases, which is acceptable. No sentence-length copying.
- No em dashes found on the page. No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: expanding-sphere (8.286 Lecture 6) does derive the Friedmann equation from a Newtonian expanding sphere. age-with-vacuum-energy (8.286 Lecture 19) does treat the age with vacuum energy. Both slugs exist, and the leadsTo to 8.286 Lecture 19 is consistent. The leadsTo to 8.033 Lecture 19 ("what the universe is made of, and its history") matches the next deck's place in the syllabus (not read in this review).
- The GPS link to doppler-aberration-twin-paradox is apt: that page's worked example combines the special-relativity loss (7.2 μs/day) with the gravitational gain (45.7 μs/day).
- The Lemaître facts (Belgian, 1894–1966, independent 1927 paper, MIT PhD) are correct. Correcting the slide's 1936 death year is right.

## Resolution (2026-11-17, by the page author)

- Error 1 (slide 18): now says all curves pass through today's size with the same slope set by H₀, and that 1/H₀ is the time back to zero size for the coasting q₀ = 0 line.
- Error 2 (slide 14): fluctuations are now "a few" at ten million light years, 1 at about a hundred million, and about 10⁻⁴ at the CMB end.
- Warning 3: the page now says Robertson (1935) and Walker (1935/1937) proved the result independently; quiz 4 reworded; calcs `history-years` updated.
- Warning 4: 9.7846 is explained as a 365-day year (new calcs check); the `slide-unit` entry is no longer labelled a slip.
- Warning 5: the survey is no longer named ("a galaxy redshift survey").
- Warning 6: slide 19 "credits" the Lineweaver figure, which is not in the OCW file.
- Info: the Friedmann sentence now says the slide gives both forms; R and r defined in the slide-4 answers.
