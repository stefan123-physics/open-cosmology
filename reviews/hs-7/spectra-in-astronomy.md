---
page: content/year-0/hs-7/spectra-in-astronomy.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-03 (read; CC BY footer; row CCBY in docs/siyavula-licences.tsv line 522)
  - https://imagine.gsfc.nasa.gov/science/toolbox/spectra1.html (read; "Updated: August 2013", footer "Page Last Updated: Thu, Nov 20, 2014")
  - https://science.nasa.gov/learn/basics-of-space-flight/chapter6-3/ (read)
  - https://www.nasa.gov/history/spots-waves-and-wind-a-solar-science-timeline-full-text/ (read)
  - https://science.nasa.gov/image-article/apod-1996-may-20-helios-helium/ (read)
  - https://imagine.gsfc.nasa.gov/features/yba/M31_velocity/spectrum/doppler_more.html (read; its formulas are images, text read)
  - https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2.htm (read)
  - https://physics.nist.gov/PhysRefData/Handbook/Tables/heliumtable2.htm (read)
  - https://physics.nist.gov/PhysRefData/Handbook/Tables/sodiumtable2.htm (read)
  - MIT 8.286 Lecture 3 transcript PDF (downloaded to scratch, pdftotext; printed page footers checked)
verdict: pass-with-notes
---

# Review: Spectra in astronomy

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formulas "Doppler shift of a spectral line" and "Speed from the shift of a line", `at` (and `references.mit3.location`) | L3 transcript: the boxed result "z is equal to v over u" (observer moving) is on printed **p. 3**; the source-moving result and the remark that both agree for small v/u are on p. 4, continuing to the top of p. 5. On pp. 15–19 Guth derives z = √((1+β)/(1−β)) − 1 (p. 19) but never states z ≈ β for small β (no "approximately", "first order" or "small beta" in the transcript). | "pp. 4–5 (slow motion, z ≈ v/u) and pp. 15–19 (for small β, z ≈ β = v/c)" | Cite "pp. 3–5 (z = v/u for slow motion)" and "p. 19, z = √((1+β)/(1−β)) − 1, which for small β is ≈ β (our step)". The same `location` text is in lesson 5.13 (towards-the-universe-redshift); fix it there too. |
| 2 | warning | Worked example "What is the glowing cloud made of?", step "The other two lines" | NIST He I relative intensities: 447.1 nm 200, 501.6 nm 100, 587.6 nm 500, **667.8 nm 200** | "The other two helium lines are fainter" | 667.8 nm is as strong as 447.1 nm in NIST's table, so the reason given for its absence does not hold. Either add 667.8 to the measured lines (and keep "501.6 is fainter"), or say "the 501.6 nm line is fainter, and 667.8 nm may fall outside this measurement". |
| 3 | info | Helium section | NASA timeline: Janssen "detects unknown spectral line during an eclipse", "later scientists" named it helium; APOD credits Lockyer with the yellow line during an eclipse. Neither gives a date. | Janssen sees the line on 18 August 1868; Lockyer concludes it is a new element | The page's account is consistent with both NASA pages and with the standard history, so the disagreement between the NASA pages is handled well. The exact date "18 August" is uncited (it is correct): either drop the day or cite it. |
| 4 | info | "The dark lines in sunlight" | NASA Basics: Kirchhoff compared wavelengths with "the results of laboratory experiments" (no flame named) | Kirchhoff compared them with lines of elements heated in a flame | Standard and correct (Bunsen burner flames); acceptable uncited. |
| 5 | info | Kirchhoff rule 1 | NASA Basics: "a luminous solid or liquid" | "hot solid, liquid or dense gas" | Physically better than the source; fine. |
| 6 | info | "What else the spectrum tells", Temperature | Spectra-1 says lines indicate temperature, no mechanism | Balmer lines weak in very hot and in cool stars | Correct (they peak near 10 000 K) but uncited. The reason only works because the visible hydrogen lines are absorbed from level n = 2, which the sentence does not say; suggest "(the visible hydrogen lines start from the second level, lesson 7.4)". |
| 7 | info | Paragraph after the binary example | not in cited sources | "The same method has found many planets around other stars" | True and standard; acceptable uncited, or add a NASA exoplanet page. |

## Formulas and citations
- Δλ/λ_em = v/c and v = c Δλ/λ_em: correct physics, notation consistent with lesson 5.13 (z = Δλ/λ_em, sign positive for recession, matches NASA Doppler page "positive if the source is moving away", line-of-sight only, v ≪ c). Page numbers: see finding 1.
- Siyavula 12.3 (main source): read; supports emission and absorption spectra from energy levels, element identification in astronomy and line shifts. It does not mention Kirchhoff, Fraunhofer, helium or spectroscopes; those come from the NASA readings, which do support them (Kirchhoff 1859 three laws, Fraunhofer 1817; spectrometer = slit + prism).
- NASA Spectra-1 supports composition, temperature and density, magnetic fields, line widths and motion, lines shifting back and forth for an orbiting star, and changes over time: every bullet of "What else the spectrum tells" is covered except "how much of each element" (standard).
- NIST: every wavelength checked: H 4101.74, 4340.462, 4861.36, 6562.85 Å; He 4471.479, 5015.678, 5875.61, 6678.15 Å; Na 5889.950, 5895.924 Å. All rounded correctly to 0.1 nm. Tagging them `origin: later-data` is reasonable (they are modern measurements, not quoted from a teaching source).

## Arithmetic and answer checks
All recomputed independently (Python):
- Quiz 4 (index 3): Δλ = 0.5 nm; v = 3.00e5 × 0.5/501.6 = 299.04 km/s, away. Distractor without division 1.5e5 km/s = c/2. Correct; marked answer 0 right.
- Binary example: 3.00e5 × 0.12/589.0 = 61.1 km/s; −61 km/s; 589.6 × 0.12/589.0 = 0.1201 nm → 589.72 nm; mean 589.00 nm. All correct.
- He–Na gap 589.0 − 587.6 = 1.4 nm (NIST 1.43 nm). Correct.
- Slider: 9000/3e5 = 3 %; 656.3 × 0.03 = 19.7 ≈ 20 nm. Correct.
- Plot: dips at λ_em(1 + v/300000), emission curve fixed, as the caption says. At v = −9000 km/s the 410.2 nm dip moves to 397.9 nm, outside the 400–700 nm domain (info: harmless, or start the domain at 390 nm).
- Every number on the page is in the calcs file; ids and `shown` strings match.
- Quiz 1, 2, 3, 5: marked answers right, distractors wrong, explanations true.

## Only earlier terms
- Spectroscope parts: prism (5.9), grating (5.11), black body (7.2), energy levels and emission/absorption (7.4), redshift and z (5.13), orbits (Block 2, Kepler lesson exists). All earlier.
- "ionised" (Temperature bullet): introduced in 7.4 (ionisation energy of hydrogen). Fine.

## Coverage
- §4 row 7.5 (A 5.3, 17.3; NASA "Spectra - Introduction"): spectroscopes, Kirchhoff's three kinds, Fraunhofer lines and composition, helium, temperature and motion from spectra, Doppler of lines. Covered at VWO level.
- Overlap: little with 7.6 (one sentence on line strength and temperature, and 7.6's "Spectral classes" refers back here; that split is fine). More overlap with **7.4** (Kirchhoff cases 2–3 and "same wavelengths" are 7.4's flashcard and quiz, same Siyavula source) and **5.13** (Doppler of a lab line, same formula, same L3 citation). As a recap it is acceptable; consider shortening "Rules 2 and 3 belong together" to a back-reference.

## Where this leads
- 8.04 lecture 23 → content/year-2/8.04/hydrogen-spectrum.mdx exists; topic matches; §4 row says `8-04/hydrogen-spectrum`. Good. `towards: false` correct (7.11 is the block's last lesson).

## Licensing and AI terms
- Siyavula URL is a CCBY row. No Siyavula branding. Worked example and quiz differ from Siyavula's Worked example 4 (642 nm unknown gas) and Exercise 12.2 (474 nm, 5 → 2).
- NASA pages cited by title, URL and read date; no insignia; no "according to NASA" phrasing in the text.
- No sentence copied that I found; the NASA phrases ("lines shift back and forth", "orbiting another star") are paraphrased.
- Graphs generated from formulas. MIT L3 transcript: no restricted material used.
- No forbidden source cited or used. content:check: no errors for this page (only "no review file").

## Notes
- The plot sketch (all lines the same width, flat continuum) is honestly labelled a sketch.

## Resolution (2026-11-20, by the page author)
1. (warning) Fixed. Checked in the local L3 transcript PDF (pdftotext page by page; PDF pages equal the printed footers): the boxed z = v/u is on p. 3, the source-moving case and the small-v/u agreement on pp. 4 to 5, and z = √((1+β)/(1−β)) − 1 on p. 19. Both Doppler formulas now cite "pp. 3–5 ... and p. 19 (the small-β approximation is our own step)"; references.mit3.location rewritten the same way; calcs `at` fields updated (pp. 3–5, p. 19). The same fix was made in lesson 5.13 (see its review's Follow-up).
2. (warning) Fixed. 667.8 nm added to the measured lines of the worked example; the step now names 447.1, 587.6 and 667.8 nm as helium lines and says the fourth, 501.6 nm, is the faintest of the four (NIST relative intensity 100 against 200, 500, 200; added to the nistHe location). Calcs he-668, he-502, he-447 and h-486 `shown` updated.
3. (info) Fixed: the day "18 August" dropped ("in 1868"); calcs helium-1868 updated.
4, 5. (info) Kept as written (reviewer: acceptable).
6. (info) Fixed: the Temperature bullet now says the visible hydrogen lines are absorbed only by atoms whose electron is in the second level (lesson 7.4).
7. (info) Kept (true and standard).
Coverage note: the "Rules 2 and 3 belong together" paragraph shortened to a back-reference to lesson 7.4.
Plot note: domain now starts at 390 nm, so the 410.2 nm dip stays visible at v = −9000 km/s (397.9 nm).
Status set to reviewed.
Checks: npm run calc:test -- -k spectra-in-astronomy: 30 passed. npm run content:check: no error or warning for this page (the 4 errors in the run are symbol scopes of the-nucleus, another lesson being fixed in parallel).
