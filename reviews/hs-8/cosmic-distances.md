---
page: content/year-0/hs-8/cosmic-distances.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read: 8.286 Lecture 4 transcript, 28 pages, printed footers checked; pp. 7–8 parsec, p. 11 Cepheids)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read: printed pp. 4 and 8; third-party images marked "courtesy", none used)
  - https://science.nasa.gov/universe/glossary/ (read; "Page Last Updated: Aug 25, 2026"; entries astronomical unit, arcsecond, bolometric luminosity, Cepheid, light-year, Magellanic Clouds, parallax, parsec, supernova, white dwarf)
  - https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-constant-and-tension/ (read; "Aug 04, 2025")
  - https://science.nasa.gov/image-detail/hubble-distance-ladder-stsci-01evsw8v60tdzv2m2v1m1j8as8/ (read; caption and credit; "Mar 07, 2024")
  - https://www.nasa.gov/news-release/nasas-hubble-extends-stellar-tape-measure-10-times-farther-into-space/ (read; "Nov 22, 2022")
  - https://nasa.gov/directorates/heo/scan/images/history/March1961.html (read)
  - Earlier lessons on disk (0.6, 0.7, 1.11, 2.12, 5.5, 5.13, 7.11, 8.6) and content/year-5/8.902, content/year-4/8.286 for leadsTo
verdict: pass-with-notes
---

# Review: Measuring cosmic distances (8.10)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Radar in the Solar System": "from the result they found the astronomical unit (AU) ... far more precisely than before" | NASA SCaN March 1961: JPL bounced radar off Venus "to determine Venus' distance from the Earth, as well as the value of an astronomical unit"; nothing on precision | "far more precisely than before" | Historically true, but not in the cited page. Drop "far more precisely than before" or say only "to measure the astronomical unit". |
| 2 | warning | "Cepheid variables", Leavitt and the Small Magellanic Cloud; reading2 `location` | NASA glossary, entry *Magellanic Clouds*: "While studying variable stars in the SMC, Henrietta Leavitt (1868-1921) discovered the period-luminosity relation for Cepheids"; entry *Cepheid* gives 1912 and Leavitt but not the SMC | reading2's location lists only "Cepheid variable (... Henrietta Leavitt in 1912)" | Add "Magellanic Clouds (Leavitt studied variable stars in the SMC)" to reading2's `location`. The entry is titled "Cepheid", not "Cepheid variable". "Brighter Cepheids have longer periods" is standard and correct. |
| 3 | info | "The parsec": "Even the nearest stars show a parallax of less than one arcsecond, so every star is more than a parsec away" | Uncited. NASA 14-104 says only that measurements to Alpha Centauri "vary only by one arc second" (a garbled sentence) | As written | Correct and standard (the nearest, Proxima Centauri, about 0.77 arcseconds). Say "every star other than the Sun". Could follow from the glossary (parsec 3.262 ly) plus a nearest-star distance, if a §2.0 page gives one. |
| 4 | info | "The parsec": "For a long time parallax worked reliably only out to a few hundred light-years. In a later development, in 2014, Hubble ..." | NASA 14-104 (2014): "works reliably well for stars within a few hundred light-years" | As written | Correctly marked as later. Since 2014, Gaia has measured parallaxes of over a billion stars, to thousands of light-years; the page reads as if Hubble's 2014 result were the frontier. Add one sentence about Gaia if a NASA page supports it (ESA text may not be adapted). |
| 5 | info | Worked example "A supernova in a faraway galaxy": L = 1.0 × 10³⁶ W "for this example" | No source | Example value | Realistic: a Type Ia peak luminosity is about 10³⁶ W (10⁴³ erg/s), a few billion Suns. As an assumption flagged "for this example" it is acceptable; no calcs `fact` needed. |
| 6 | info | "Type Ia supernovae": "they all reach roughly the same peak luminosity" | Glossary *Supernova*: "Type 1a supernovae exhibit roughly the same intrinsic brightness" | As written | Matches. Optionally add that astronomers correct for small differences using how fast each one fades (standard), so readers do not take them as perfectly identical. |
| 7 | info | Formula "Flux at a distance d", `at` "p. 8, eq. (15)" | On printed p. 8 the line just above eq. (15) reads "Since F_app = L/(4πD²)"; eq. (15) itself is the magnitude M_X = −2.5 log(L/4π(10 pc)²) + const | "p. 8, eq. (15)" | Write "p. 8, the line before eq. (15)". Same for "Distance from luminosity and flux". Eqs. (3)–(4) on printed p. 4 verified (written for F_ν; same law). |
| 8 | info | Formula "The parsec", `at` "p. 8 (board)" | Transcript p. 7: "Let me write this on the board"; p. 8: "a parsec is defined by that diagram ... the distance at which the angle subtended by one astronomical unit is one second of arc"; "I'll write these things on the board. One parsec equals 3.2616 light years" | Cited to p. 8, board | Correct page. The 3.086 × 10¹⁶ m value is the page's own computation (Guth gives only 3.2616 ly); that is clear from the formula. Fine. |
| 9 | info | Formula "One arcsecond in radians", `cite="reading2"` at "entry Parsec (1 arcsecond)" | Glossary entry *arcsecond*: "1/3,600th of a degree" | Cites the Parsec entry | Point `at` to the "arcsecond" entry. The radian conversion is the page's own (calcs `arcsec-in-rad`). |
| 10 | info | "Cepheid variables": "in Lecture 4 Guth calls them crucial to the cosmological distance scale" | Transcript p. 11: "Cepheid variables are crucial to determining the cosmological distance scale" | No page number | Add "(p. 11)". |
| 11 | info | reading3 (NASA *Hubble Constant and Tension*) | Verified: parallax, Cepheids calibrated nearby, Type Ia "much brighter", "milepost markers", stretching of light | Listed in `readings` but never cited in the text | Either cite it where the ladder is summarised (e.g. "Type Ia supernovae ... far brighter") or drop it from `readings`. |

## Formulas and citations
- d = ct/2: correct; the SCaN page supports the round-trip radar idea (113 million km round trip in about six and a half minutes) and the AU goal.
- d = 1 AU/p (p in radians) from tan p ≈ p: correct; small-angle rule is in lesson 0.7 ("d ≈ D/θ"). Parsec definition at transcript p. 8 verified.
- 1 arcsec = π/(180 × 3600) rad = 4.848 × 10⁻⁶ rad ✓ (row 9).
- 1 pc = 1.496 × 10¹¹/4.848 × 10⁻⁶ = 3.086 × 10¹⁶ m ✓; glossary parsec 3.262 ly; Guth 3.2616 ly ✓.
- d(pc) = 1/p(arcsec): glossary entry *Parsec* ✓.
- F = L/(4πd²), d = √(L/4πF), d₂ = d₁√(F₁/F₂): correct; 8.902 printed pp. 4 and 8 (row 7).
- AU = 149 597 870.7 km ("formally defined") ✓; light-year 9.46 × 10¹⁵ m (glossary 9.5 trillion km) ✓; Sun 3.828 × 10²⁶ W (glossary 3.83 × 10²⁶ W) ✓.
- NASA 14-104: 7500 ly in Auriga, six months apart, a few hundred ly limit, Cepheids the bottom rung for Type Ia ✓. Image caption *Three Steps*: Cepheids (LMC), Type Ia supernovae "much brighter", galaxy light reddening with distance ✓; "shows the upper three" matches the caption.
- Glossary *Supernova*: Type Ia = exploding white dwarf after merging or accreting past its stability limit; can outshine a galaxy; fades over weeks or months ✓. *White dwarf*: about the Sun's mass at about Earth's size ✓.

## Arithmetic and answer checks
Recomputed independently; `npm run calc:test -k "black-holes or cosmic-distances"` passes (88 checks).
- Venus: 3.00e8 × 276/2 = 4.14 × 10¹⁰ m ✓ (41 million km; a plausible distance near inferior conjunction); 276 s = 4.6 min ✓. Not the source's numbers (SCaN gives 6.5 min round trip): original.
- Coin: 0.02/4.848e-6 = 4125 m ("4 km") ✓.
- Parsec in ly: 3.086e16/9.46e15 = 3.262 ✓.
- p = 0.125″: 8.0 pc ✓; 2.472 × 10¹⁷ m ✓; 26.1 ly ✓.
- 7500 ly: 2300.6 pc ✓; 1/2300 = 4.35 × 10⁻⁴″ ✓ (< 1/2000 = 5 × 10⁻⁴) ✓.
- Plot: L/d² at d = 2 with L = 4 equals 1/1² ✓.
- Cepheids: 2000 × √10⁶ = 2.0 × 10⁶ pc ✓ = 2.0 Mpc ✓; × 3.26 = 6.52 million ly ✓.
- Supernova: 1e36/3.828e26 = 2.61 × 10⁹ ✓; 1e36/(4π × 2e-15) = 3.98 × 10⁴⁹ m² ✓; √ = 6.31 × 10²⁴ m ✓; / 3.09e22 = 204 Mpc ✓; / 9.46e15 = 6.67 × 10⁸ ly ✓. At about 200 Mpc the expansion changes these by a few per cent; the page flags the catch in the next section ✓.
- Quiz 0: 1/0.050 = 20 pc ✓ (answer 2), 65.2 ly ✓; 0.050 pc, 5.0 pc, 200 pc wrong ✓.
- Quiz 1: 1/25 ✓ (answer 2); others wrong ✓.
- Quiz 2: √100 = 10 ✓ (answer 1); 100× (forgets the square root), 10 000× (squares) and "equal" wrong ✓.
- Quiz 3: 30-day Cepheid more luminous, so farther ✓ (answer 1).
- Quiz 4: answer 0 ✓; the other three are false ✓; explanation true.
- Flashcards: all true.

## Only earlier terms
- Small-angle rule and radians (0.7), inverse square law (0.6, 5.5), radio waves at c (1.11, line "a radio signal ... also moves at c"), astronomical unit (2.12), Mpc and redshift growing with distance (5.13), flux and luminosity F = L/(4πd²) (7.11, which also points forward to "parallax, lesson 8.10"), white dwarf (7.6, 8.5): all present (checked on disk). 2.12 is not in `prerequisites` but the page defines the AU itself.
- Arcsecond, arcminute, parallax, parsec, standard candle, Cepheid, period–luminosity relation, Type Ia supernova, Small Magellanic Cloud: defined on the page.
- No term used before introduction found.

## Coverage
- §4 row 8.10 (topic measuring cosmic distances; leads to `8-902/observational-cosmology-distances`, `8-286/luminosity-and-redshift`): radar, parallax and the parsec, inverse square law and standard candles, Cepheids, Type Ia supernovae, redshift: covered at VWO level.
- Left out: apparent and absolute magnitudes and the distance modulus (in the 8.902 reading, p. 8), other rungs (RR Lyrae, Tully–Fisher), and Gaia (row 4). Magnitudes are not needed at VWO level if lesson 7.11 avoided them; the rest is optional.
- No PhET sim; §4 names none.

## Where this leads
- `8.902` lecture 11 → `content/year-5/8.902/observational-cosmology-distances.mdx`: luminosity and angular-diameter distances, energy and arrival rate each reduced by 1 + z, agreement only at small z ✓; matches the "why".
- `8.286` lecture 19 → `content/year-4/8.286/luminosity-and-redshift.mdx`: intensity of a standard candle against redshift, the formula the 1998 supernova teams fitted ✓.
- Both §4 targets present. `towards: false` ✓.

## Licensing and AI terms
- MIT 8.286 transcript and 8.902 notes: CC BY-NC-SA; no "All rights reserved" text used; 8.902's third-party images are not reproduced. The only figures are a generated `ParallaxDiagram` and a generated `Plot`; NASA's distance-ladder illustration is explicitly not reproduced.
- No copied sentences: NASA wording ("milepost markers", "bottom rung", "half the angle a star appears to move") is reworded. NASA 14-104's analogy "a dime seen from two miles away" and the page's "2 cm coin seen from 4 kilometres away" share an idea, with the page's own numbers; acceptable.
- NASA cited by page title; no "according to NASA", no insignia ✓. No ESO material used.
- Worked examples (Venus echo, 0.125″, 7500 ly, two Cepheids, supernova) and quiz questions are original; the sources have no exercises.
- No forbidden source. No em dashes. Units inside maths (`\text{}`) throughout.

## Notes
- Writer's flags: (1) Type Ia 1.0 × 10³⁶ W: row 5, realistic and labelled as an example; (2) nearest stars under one arcsecond: row 3, correct and standard; (3) Leavitt/SMC from the NASA glossary: verified in the *Magellanic Clouds* entry, row 2.
- No errors found; verdict pass-with-notes once rows 1, 2 and 11 are handled.

## Resolution (2026-11-20, by the page author)
1. Fixed: dropped "far more precisely than before" from the radar paragraph; it now says only that the 1961 Venus radar gave the astronomical unit, as the SCaN page does.
2. Fixed: reading2's location now names the entry "Cepheid" (relation found by Leavitt in 1912) and adds "Magellanic Clouds (Leavitt found the period-luminosity relation while studying variable stars in the SMC)". Both entries checked on the glossary page today.
3. Fixed: now "Every star other than the Sun, even the nearest, shows a parallax of less than one arcsecond, so all of them are more than a parsec away."
4. Not changed: no NASA page cited here supports a Gaia sentence, and ESA text may not be adapted, so Gaia is left out. The Hubble 2014 sentence stays, marked as a later development.
5. No change needed (example value, flagged as such).
6. Not changed: the page already says "roughly the same peak luminosity", which matches the glossary.
7. Fixed: both flux formulas (and their calcs entries for the supernova example) now cite "p. 8, the line before eq. (15)"; reading1's location says the same.
8. No change needed.
9. Fixed: the arcsecond formula now cites the glossary entry "Arcsecond: 1/3600 of a degree" (checked: "1/3,600th of a degree"); reading2's location lists the entry; calcs entries arcsec-in-rad and coin-distance updated.
10. Fixed: added "(transcript p. 11)" after "Guth calls them crucial to the cosmological distance scale".
11. Fixed: reading3 is now cited in "Type Ia supernovae": the supernovae are much brighter than Cepheids and serve as mileposts for farther galaxies (NASA's page "Hubble Constant and Tension"; wording checked on the page today and reworded).

Checks: npm run calc:test -- -k cosmic-distances: 28 passed. npm run content:check: no error or warning for cosmic-distances. Status set to reviewed.
