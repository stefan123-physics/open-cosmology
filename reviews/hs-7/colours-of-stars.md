---
page: content/year-0/hs-7/colours-of-stars.mdx
reviewed: 2026-11-20
sources_read:
  - https://science.nasa.gov/universe/stars/ (read; "Last updated Aug 12, 2026")
  - https://science.nasa.gov/exoplanets/stars/ (read; last updated Dec 11, 2024)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec08.pdf (read with pdftotext; printed pp. 50–51)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l15/ (slides PDF read; slides 15 and 22)
  - https://science.nasa.gov/sun/facts/ (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; last updated 9 May 2024)
  - https://science.nasa.gov/universe/what-is-betelgeuse-inside-the-strange-volatile-star (read; 2023-05-03, last updated 2026-03-09)
  - https://science.nasa.gov/missions/hubble/astronomers-use-hubble-to-weigh-dog-stars-companion/ (read; 2005-12-13)
  - https://heasarc.gsfc.nasa.gov/docs/RXTE_Live/class.html (read)
  - MIT 8.286 Lecture 18 transcript PDF (read; printed pp. 11–15)
  - public/phet/blackbody-spectrum_1.0.28_en.html (preset names and temperatures)
verdict: needs-changes
---

# Review: Colours and temperatures of stars

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Spectral-classes table (M row), quiz 5 explanation, flashcard 1; calcs `m-star-temperature` cites `heasarc-classes` | HEASARC "Classification of Stars" gives **no** temperature for M stars (no temperature table at all; only "over 25 000" K for one O star). The exoplanet "Stars" page gives colours but no temperatures. | M stars "about 3000 K" | The figure is right (M dwarfs about 2400–3700 K) but no cited source supports it. Cite a source that gives it (a NASA or other §2.0 page with class temperatures) or change it to "below about 3500 K" with a source; fix the calcs `source`. |
| 2 | warning | Spectral-classes table: Sirius A class A, Betelgeuse class M | No cited page gives a spectral type for either (NASA Sirius page: "bluish-white"; Betelgeuse page: "red supergiant", "orange-red") | Sirius A in row A, Betelgeuse in row M | Both are correct (A1 V and M1–2 Ia), but they are inferred. Either cite a source with the types or say "white, so class A" / "red, so class M" so it reads as an inference from colour. |
| 3 | warning | "Spectral classes", first paragraph; HR section first sentence | HEASARC: Cannon assigned each star its place in O B A F G K M at Harvard; no dates, no number of stars; the HR diagram is shown but Hertzsprung and Russell and dates are not named | "In the early 1900s ... hundreds of thousands of stars"; "Around 1910 Ejnar Hertzsprung and Henry Norris Russell" | Both statements are historically correct (Henry Draper Catalogue, about 225 000 stars, 1918–24; Hertzsprung 1911, Russell 1913), but uncited. Add a source or soften ("many thousands"); "around 1910" is fine as written once a source is found. Add `heasarc-classes` as the source for Cannon in the text location. |
| 4 | warning | Worked example "Sirius and its small companion", step "Combine" | NASA: "Sirius B is about 10,000 times fainter than Sirius itself" (not said whether visible light or total) | "In visible light ... about 10 000 times: Wien's law puts the peak of Sirius B at about 115 nm, deep in the ultraviolet, so most of its power is invisible to us." | The reading as visible light is right (V magnitudes −1.46 and 8.44 give about 9000), but the reason is half-stated: Sirius A's peak (280 nm) is in the ultraviolet too. A black-body integral (my own check) puts about 31 % of Sirius A's power in 400–700 nm and about 6 % of Sirius B's, so 1200 × 31/6 ≈ 6000. Suggest: "a larger share of Sirius B's power falls in the ultraviolet (its peak is at 115 nm, Sirius A's at 280 nm), so in visible light the difference is bigger, several thousand times; NASA quotes about 10 000." |
| 5 | warning | Main sequence bullet | NASA Stars page: main-sequence stars fuse hydrogen into helium | "steadily fusing hydrogen into helium in their cores" | Fusion is introduced only in 8.4/8.5 (and nuclei in 7.7). Add a short gloss ("joining hydrogen nuclei into helium, which releases energy; lesson 8.5"). |
| 6 | warning | `source` (main source "Stars - NASA Science") | Page supports main sequence as the longest phase, giants, white dwarfs as Earth-sized cooling remnants; nothing on colours, classes or the HR diagram. Last updated 2026-08-12 | title and URL only | Add the read date (and "last updated 2026-08-12") to the title as for the other NASA pages, and a `location`; the brief requires date for NASA citations. |
| 7 | info | Betelgeuse temperature | NASA: "about 6,000 °F (over 3,300 °C)" | "a little over 3300 °C, so about 3600 K" | 3300 + 273 = 3573 K; 6000 °F = 3589 K. "About 3600 K" is fine. |
| 8 | info | HR section, Betelgeuse size | NASA: about 700 times the Sun's size; "would stretch past Jupiter's orbit" | 700 times; would swallow the orbits of the inner planets | 700 R_Sun = 3.26 au, inside Jupiter's orbit (5.2 au), so the page's wording is the self-consistent one (NASA's own two numbers disagree). Keep. |
| 9 | info | Opening paragraph | NASA: Betelgeuse is Orion's left shoulder as seen from Earth; Sirius is in Canis Major | "top-left star"; Sirius "lower down and to the left" | Correct for a northern-hemisphere observer (the Dutch reader). Fine. |
| 10 | info | Wien formula `at` (reading3, slide 22) | Slide 22 gives the maximum per unit frequency, ħω/kT ≈ 2.82; no 2.9 × 10⁻³ m K | constant 2.9 × 10⁻³ m K, with the `at` explaining the difference | The `at` says so honestly and matches lesson 7.2. Acceptable. |
| 11 | info | "Try it" | PhET Blackbody Spectrum presets: Sun 5800 K, **Sirius A 9950 K**, Light Bulb 3000 K, Earth 250 K | "Pick the preset for the Sun, then for Sirius" | Presets exist. Say the sim uses 9950 K for Sirius A, so the reader is not puzzled by the difference from 10 500 K. "colour bar" may not match the sim's wording (it shows a coloured star and a rainbow strip); unchecked in the running sim. |

## Formulas and citations
- L = 4πR²σT⁴: 8.902 Lecture 8 notes, printed p. 50: "From the Stefan-Boltzmann law L = 4πR²σT_eff⁴ ... log(L) = 2 log(R) + 4 log(T) (226)". Correct citation. p. 51: stars move through the HR diagram as they age. Correct. (The notes contain third-party figures marked "All rights reserved"; the page uses none of them.)
- L₁/L₂ = (R₁/R₂)²(T₁/T₂)⁴: follows from eq. (226); the `at` says so. Good.
- σ = 5.67 × 10⁻⁸: 8.044 L15 slide 15 ("56.7 × 10⁻⁹ watts/m²K⁴", Stefan–Boltzmann law). Correct.
- CMB about 2.7 K: Guth L18 p. 11 (2.726 K, black body), pp. 12–15. Correct.
- Sun data: Sun Fact Sheet 695 700 km, 382.8 × 10²⁴ J/s, 5772 K (all match); Sun: Facts 5500 °C surface, 700 000 km, core over 15 million °C (supports "millions of kelvin in the core"; cite it there).
- Sirius data: 2.4 million km, 10 500 K, 12 000 km, 25 200 K, "10 000 times fainter", "brightest star in our nighttime sky": all match the NASA Hubble page.
- Exoplanet "Stars" page: colours O blue … M red, "from hottest and biggest to coolest and smallest" (supports the main-sequence size remark), Sun G-type, white dwarfs Earth-sized, red dwarfs about 73 % of the Milky Way (supports "Most stars in our galaxy are small, cool M stars"; add that to the reading's `location`).

## Arithmetic and answer checks
Recomputed independently (Python):
- Wien: 2.9e-3/3600 = 806 nm (810); /10 500 = 276 nm (280); /5772 = 502 nm (500); /25 200 = 115 nm. Quiz 2: 2.9e-3/460e-9 = 6304 K; mistake 6.3e-6 K. All correct.
- Sun: 4πR² = 6.087e18 m²; σT⁴ = 6.293e7 W/m²; L = 3.831e26 W vs measured 3.828e26 W. Correct.
- Sirius: 200² = 4.0e4; (10 500/25 200)⁴ = 0.0301; ratio 1206; (25 200/10 500)⁴ = 33.2. Correct.
- HR points: Sirius A log₁₀(32.6) = 1.513; Sirius B log₁₀(0.0270) = −1.569. Correct. Lines are log₁₀ of (R/R_Sun)²(T/5772)⁴. Correct.
- Quiz 3 (R ×3 → 9), quiz 4 (25 200/5772 = 4.37 "more than four times"; 0.027 ≈ 1/37 "about a fortieth"; R_B/R_Sun = 0.86 %, area 7.4e-5): correct. Quiz 1 and 5: correct, distractors wrong.
- Betelgeuse 700 R_Sun = 3.26 au (> Mars 1.52 au). Correct.
- Every number is in the calcs file. The calcs quiz indices are 0-based (quiz: 1 = the 460 nm question), consistent with the rest of the repo as far as I can tell.
- Plot 1: (λ/λ_max)⁻⁵(e^4.965 − 1)/(e^{4.965 λ_max/λ} − 1) is Planck's shape normalised to 1 at λ_max = 2.9e6 nm K/T; peaks 242–967 nm stay inside the 100–2000 nm domain. Correct.

## Only earlier terms
- Black body, Wien, Stefan–Boltzmann (7.2), dark lines (7.5), electromagnetic bands (5.8), powers of ten and log₁₀ (hs-0 exponentials-and-logs, a prerequisite). Fine.
- "fusing hydrogen into helium": before 8.4/8.5 (finding 5).
- "luminosity" is defined here. Fine.

## Coverage
- §4 row 7.6 (A 17.1, 17.2; NASA "Stars"; PhET blackbody-spectrum): colour and temperature, luminosity, spectral classes, HR diagram, PhET. Covered at VWO level.
- Betelgeuse left off the HR plot: with the lesson's own numbers (700 R_Sun, 3600 K) it would sit at log₁₀(L/L_Sun) = 4.87 (about 74 000 Suns), x = 3.6, inside the plotted range and above the R = 100 line. Adding it would show a supergiant on the diagram the text describes (optional, info).
- HR temperature axis increasing to the right: the caption says astronomers draw it the other way; acceptable. The text's "on the cool side" / "on the hot side" avoids left/right, which is good.
- Overlap with 7.5: small. 7.5 explains line strength vs temperature in one bullet; 7.6 adds the classes and refers back. Fine.

## Where this leads
- 8.044 lecture 15 → content/year-3/8.044/thermal-radiation.mdx exists and is the black-body lecture; matches §4 (`8-044/thermal-radiation`). Good. `towards: false` correct.

## Licensing and AI terms
- No Siyavula source used. NASA pages cited by title and URL, all with a read date except the main source (finding 6). No insignia; no "according to NASA" wording in the text.
- No copied sentences found; worked examples are the page's own.
- MIT 8.902 notes: only the equation used, none of the "All rights reserved" figures. 8.044 slides: equations only.
- PhET used via the component (attribution printed by `components/PhET.tsx`); sim is in the manifest (content:check passes).
- No forbidden source. content:check: no errors for this page (only "no review file").

## Resolution (2026-11-20, by the page author)
1. (error) Fixed. No permitted page gives a temperature for class M as such. The NASA Science Universe glossary (entry "dwarf star", last updated 2026-08-25, read 2026-11-20, new reference nasa-glossary) gives main-sequence surface temperatures down to 2200 °C, orange K dwarfs at 3600 to 5000 °C, and red dwarfs of class K or M. The page now says M stars are the coolest, "down to about 2500 K" (2200 + 273 = 2473 K), in the table, quiz 5 explanation and flashcard 1 (which now reads "Betelgeuse about 3600 K, the coolest stars about 2500 K"). Calcs: m-star-temperature-celsius (fact, nasa-glossary) and m-star-temperature (2200 + 273, about 2500 K) replace the old entry.
2. (warning) Fixed by wording as an inference from colour: "Sirius A (white, so class A)" and "Betelgeuse (red, so class M)".
3. (warning) Fixed. Cannon: new reference nasa-lifecycles (NASA Imagine the Universe, The Life Cycles of Stars, section "These Stars are Classified", last updated 2025-05-30): Cannon at the Harvard College Observatory classified some five hundred thousand stars in the sequence O B A F G K M. Text now: "At the Harvard College Observatory ... Annie Jump Cannon, who classified the spectra of some half a million stars there"; "early 1900s" dropped. HR: new reference gingerich (O. Gingerich, arXiv:1302.0862, abstract: Hertzsprung's first diagrams 1911, Russell 1913); text now "In 1911 Ejnar Hertzsprung, and in 1913 Henry Norris Russell, each plotted ...". Calcs cannon-stars and hr-years added.
4. (warning) Fixed. New step "In visible light": both peaks are in the ultraviolet (280 and 115 nm); a black-body integral over 400 to 700 nm gives about 31 % of Sirius A's power and about 6 % of Sirius B's (calcs sirius-a-visible-share 0.312 and sirius-b-visible-share 0.064, computed with integrate and the Block 7 constants), so about 1200 × 31/6 ≈ 6000 times in visible light (unrounded 5850); NASA's "about 10,000 times fainter" kept as a quote, with the remark that real stars are not perfect black bodies. Calcs sirius-visible-ratio-computed added, sirius-visible-ratio `shown` updated.
5. (warning) Fixed: "joining hydrogen nuclei into helium nuclei, which releases the energy the star shines with (lesson 8.5 shows how)".
6. (warning) Fixed: main source title now carries "last updated 2026-08-12, read 2026-11-20" and what the page supports (the schema has no `location` field for the main source, so it is in the title).
7, 8. (info) Kept (reviewer: fine). The optional Betelgeuse point on the HR plot was not added.
9. (info) Kept.
10. (info) Kept (the `at` already explains the frequency/wavelength difference).
11. (info) Fixed: "Try it" says the simulation's Sirius A preset is 9950 K, a little below this lesson's 10 500 K.
Summary note (exoplanet reading): its location now includes that red dwarfs (M stars) make up about 73 % of the Milky Way's stars, supporting "Most stars in our galaxy are small, cool M stars".
Status set to reviewed.
Checks: npm run calc:test -- -k colours-of-stars: 47 passed. npm run content:check: no error or warning for this page (the 4 errors in the run are symbol scopes of the-nucleus, another lesson being fixed in parallel).
