---
page: content/year-0/hs-5/towards-the-universe-redshift.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect/06-doppler-effect-03 (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf (read, Lecture 3 transcript, 28 pages)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-5-cosmological-redshift-and-the-dynamics-of-homogeneous-expansion/ (read, with its transcript cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf)
  - https://imagine.gsfc.nasa.gov/features/yba/M31_velocity/spectrum/doppler_more.html (read)
  - https://imagine.gsfc.nasa.gov/features/yba/M31_velocity/spectrum/doppler_galaxies.html (read)
  - https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-beyond-temperature-and-composition/ (read)
  - https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift (read)
  - https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2.htm (read)
verdict: needs-changes
---

# Review: Towards the universe: redshift, stretched light from moving sources

Checked against all cited sources (downloaded to a scratch directory, not the repo), calcs/values.yaml, data/symbols.json, the prerequisite lessons 5.6 and 5.8, the 8.286 lessons `doppler-effect` (lecture 3) and `cosmological-redshift` (lecture 5), and docs/HIGHSCHOOL-PLAN.md §2.0 and §4 (row 5.13). `npm run calc:test` (27 checks for this page) passes; `npm run content:check` gives 0 errors and, for this page, only the expected warnings (prerequisite 1.11 planned, no review file yet).

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Quiz 5 | No earlier lesson (written, or planned by its title) introduces quasars; the word appears nowhere else in year-0 | "A quasar has a redshift $z = 2$" | Write "A very distant galaxy has a redshift $z = 2$" (answer and explanation then work unchanged). |
| 2 | warning | Formula "Redshift and speed" `at="pp. 15–19 (slow motion)"`; `references.mit3.location`; calcs `source.at` | Transcript pp. 15–19 derive the exact relativistic result 1 + z = √((1 + β)/(1 − β)) (final form p. 19) but never state its slow-motion limit. The slow-motion statement is on pp. 4–5: for small v/u both sound cases are proportional to v/u and differ only at second order. | Cites pp. 15–19 for z ≈ v/c "(slow motion)" as if the transcript said it there | `at="pp. 4–5 (slow motion, z ≈ v/u) and pp. 15–19 (relativistic formula, which for small β gives z ≈ β)"`, and the same wording in `references.mit3.location`. Pages 2–3 for the definition are correct (definition p. 2, the boxed z = v/u p. 3). |
| 3 | warning | "Fingerprints of elements" | Siyavula 6.3: each element "emits or absorbs" light at particular wavelengths; NASA Spectroscopy 101: hydrogen "emits and absorbs"; the NASA Hubble page shows dark absorption lines in galaxy spectra | Only emission ("A hot, thin gas … gives light only at a few sharp wavelengths"), then "Spread starlight … and these lines show up", which a reader will picture as bright lines | Add e.g. "A cooler gas in front of a light source absorbs the same wavelengths, so in starlight they usually appear as dark lines." Keep the forward pointer to 7.4/7.5. |
| 4 | warning | "From redshift to speed": "This is the same result you would get from the sound formula of lesson 5.6 with a moving source" | NASA Doppler Shift: the sound equations work for light only if the source is not moving near c; lesson 5.6 ("Light does it too") says the formula for light "is therefore not simply the sound formula with a different speed" | Unqualified "the same result" right after an approximate formula | Add "for slow sources" (e.g. "For slow sources this is the same result …"), so it does not seem to contradict lesson 5.6. |
| 5 | warning | "Hubble's discovery": "(lesson 1.11)" for light-years | Siyavula 6.3 defines the light-year in its Figure 6.3 caption; lesson 1.11 is planned, not written | Relies on 1.11 for "light-year" | Acceptable if 1.11 (title "light-travel time and looking back in time") defines the light-year; the writer of 1.11 must make sure it does. Otherwise add one clause here: "a light-year is the distance light travels in a year, about 9.5 × 10¹⁵ m". The megaparsec is explained here by its value in light-years, enough at this level ("parsec" itself is not explained; fine). |
| 6 | info | Callout "Where 8.286 starts" | 8.286 lecture 1 and most of 2 are an overview (inflation, the anthropic argument); the Doppler shift starts at the end of lecture 2 and fills lecture 3 | "The university course … begins exactly here" | "The technical part of the course begins here", or leave (a light overstatement). |
| 7 | info | "Stretched by space itself" | 8.286 L5 (pp. 4–6): wavelengths stretch with the scale factor; 1 + z = ratio of scale factors | "when the universe was three times smaller" | Correct; "three times smaller" is colloquial. Consider "when distances between galaxies were a third of today's", matching the z = 0.025 sentence just before. |
| 8 | info | Summary / flashcard "Hubble's discovery": "the first sign that the universe is expanding" | NASA Hubble page: many astronomers explored the idea of an expanding universe in the 1920s; historically Slipher measured most early galaxy redshifts and Lemaître proposed the relation in 1927 | Credits Hubble's law as "the first sign" | Fine at this level; optionally "the first strong evidence". The body text ("At the end of the 1920s Edwin Hubble compared the redshifts of galaxies with their distances") is correct, and more accurate than Siyavula's "measured the Doppler shift". |

## Formulas and citations
- **z = (λ_obs − λ_em)/λ_em**, cite `mit3` pp. 2–3: verified. Transcript p. 2: the ratio of wavelengths, observed over source, is defined to be 1 plus z; astronomers take out the one so that z = 0 means no shift. The page's form is the same definition with 1 subtracted; correct.
- **1 + z = λ_obs/λ_em**, cite `mit3` pp. 2–3: verified (p. 2). Calcs `z-ratio-form` checks the identity.
- **z ≈ v/c**, cite `mit3` pp. 15–19: physics correct (√((1+β)/(1−β)) = 1 + β + β²/2 + …), and the reviewed 8.286 lesson states the expansion; but the cited transcript pages do not say it. See finding 2. NASA Doppler Shift supports the low-speed use, the radial (line-of-sight) component and the sign convention (positive away).
- **v = H₀d**, cite `reading1` "Sec. 6.3, The expanding universe": verified, Siyavula boxes v = H₀ × d in that subsection.
- Siyavula 6.3 also supports: 1 Mpc = 3.3 million light years (Figure 6.3 caption); H₀ = 67,15 km·s⁻¹·Mpc⁻¹, "Latest value from Planck mission, 2013"; distant galaxies redshifted because space expands and the waves are stretched; no centre of the universe; the raisin-bread picture.
- NIST "Strong Lines of Hydrogen", air wavelengths: 4101.74, 4340.462, 4861.3615 (strongest component) and 6562.8518 Å (strongest component). The page's 656.3 nm and 486.1 nm and the list 410, 434, 486, 656 nm are correct roundings; `nist.location` matches.
- NASA Spectroscopy 101 supports: hydrogen at 410, 434, 486, 656 nm; all lines shift together; most galaxies redshifted, more so the farther away; the star wobble from a planet. NASA Galaxies: laboratory hydrogen lines above and below each galaxy spectrum, velocity from the shift, sign convention. NASA Hubble Cosmological Redshift: light stretched as space expands; Hubble's law; supports "Stretched by space itself".
- `mit5` (Lecture 5 transcript pp. 4–7): the light pulse is stretched with the scale factor; the ratio of wavelengths, or of scale factors, is defined to be 1 plus z. Supports "1 + z is the factor by which the universe has grown while the light travelled" and the 2.4 % sentence.
- "At the end of the 1920s": correct (Hubble 1929). "the Planck satellite's measurement of 2013 gave about 67 km/s/Mpc": correct (Siyavula 67.15; 8.286 quotes 67.3 for Planck 2013).
- H₀ against calcs/values.yaml: 70 km/s/Mpc has role "example: the round value for worked examples and quizzes" and is used that way; 67 km/s/Mpc has role "later: CMB-based H₀ … rounded", consistent with the page's use as Planck's CMB value. "Measurements give values close to 70" is fair for the 67–73 range.
- Symbols: λ, z, c, d, f, v, λ_obs, λ_em have meanings that apply on this page. `d` unit "m (Mpc)" and `v` "m/s (km/s)" follow the AGENTS.md rule (SI first, usual astronomy unit in brackets): fine. H₀ uses the general meaning "today's value of H, about 67–73 km/s/Mpc", which names the Hubble parameter H that a high-school reader has not met (info: a page-scoped meaning such as "The Hubble constant: how much faster a galaxy recedes per megaparsec of distance, about 70 km/s/Mpc" would read better; not required).

## Arithmetic and answer checks
All recomputed independently (Python):
- Star: z = −0.2/656.3 = −3.05 × 10⁻⁴ → shown −3.0 × 10⁻⁴ ✓; v = −91 km/s (−90 km/s with the rounded z) → "about 90 km/s" ✓. Hβ: 486.1 × (1 − 3.0 × 10⁻⁴) = 485.954 → 485.95 nm ✓; shift 0.146 → 0.15 nm ✓.
- Galaxy: 16.4/656.3 = 0.02499 → 0.025 ✓; 656.3 × 1.025 = 672.71 ✓; v = 7500 km/s (7497 unrounded) ✓; d = 7500/70 = 107.1 Mpc ✓; × 3.2616 = 349 million ly, × 3.3 = 354 million ly → "about 350 million light-years" ✓ with either factor.
- Relativistic: 1 + z = √((1+β)/(1−β)) gives β = (1.025² − 1)/(1.025² + 1) = 0.02469, 1.25 % below 0.025 → "about 1 % lower" ✓ (fair rounding).
- 1 − 1/1.025 = 0.0244 → "about 2.4 % smaller" ✓. z = 2 → 1 + z = 3 ✓.
- "1 Mpc ≈ 3.3 million light-years": 1 Mpc = 3.262 million ly; 3.3 is the correct two-figure rounding and Siyavula's value ✓.
- Plot: λ = 656.3(1 + b) and 486.1(1 + b) on b ∈ [−0.1, 0.1] span 437.5 to 721.9 nm, inside the range [400, 760] ✓; both pass through their laboratory wavelengths at b = 0 ✓; caption true (same fraction, more nanometres for the longer line). Curves are labelled, so colour is not the only cue.
- Quiz 1 (answer 0): shorter wavelengths → blueshift → approaching ✓; "no hydrogen" and "very far away" wrong ✓.
- Quiz 2 (answer 0): z = 0.6/434.0 = 1.382 × 10⁻³, v = 414.7 → 415 km/s away ✓; "towards us" wrong sign; 0.6 and 1.4 km/s wrong ✓.
- Quiz 3 (answer 2): 0.004 × 3.00 × 10⁵ = 1200 km/s ✓; others wrong ✓.
- Quiz 4 (answer 1): 70 × 200 = 14 000 km/s; /3.00 × 10⁵ = 0.0467 → 0.047 ✓; 14 (v in thousands) wrong ✓.
- Quiz 5 (answer 0): correct and explained; it does not imply any speed above c. For the record: in the standard model the Hubble-law recession speed v = H₀d of a z = 2 galaxy today is about 1.2c (comoving distance ≈ 5.3 Gpc for H₀ = 67.7, Ω_m = 0.31). The page never says such a galaxy is slower than c, so nothing to change; keep it that way (do not add "it moves slower than light"). The other choices are wrong ✓. Only the word "quasar" is a problem (finding 1).
- Flashcards: all six true.
- Calcs file: every number on the page is covered (c, Hα, Hβ, the four lines, both worked examples, the relativistic 1 %, 2.4 %, factor 3, Mpc in ly, both H₀ values, quizzes 2–4). Quiz indices are 0-based and correct (`quiz: 2`, `quiz: 3`); `quiz-star-z`/`quiz-star-v` have no `quiz: 1` field (info: add it so the quiz check matches the choice). `npm run calc:test`: 27 passed.

## Only earlier terms
- Doppler effect, siren, wavelength and frequency, medium: lesson 5.6 (written) ✓. Light as a wave, c = fλ, c = 3.00 × 10⁸ m/s, no medium, radio waves and X-rays, the spectrum: lesson 5.8 (written) ✓.
- Prism (lesson 5.9) and grating (lesson 5.11): earlier written lessons, not in `prerequisites` (info; fine, only mentioned).
- Light-year: relies on planned lesson 1.11, whose title covers light-travel time (plausible, not yet verifiable): finding 5. Megaparsec: defined on the page by its value in light-years ✓.
- Galaxy: already used in 5.6 and 5.8, and 1.11 will cover it ✓.
- Quasar: never introduced (finding 1, error).
- Special relativity, Einstein: named with a forward pointer to Block 8 ✓. Spectral lines: introduced minimally with pointers to 7.4 and 7.5 ✓ (see finding 3). "Spectrograph" and "Planck satellite": names in passing, clear from context (info).
- Line of sight, Hubble constant, km/s/Mpc: defined on the page ✓.

## Coverage
- §4 row 5.13: redshift, stretched light from moving sources, leading to 8-286 doppler-effect and cosmological-redshift. Covered: Doppler shift of light, red- and blueshift, z and 1 + z, z ≈ v/c, spectral lines as the method, Hubble's law, expansion (raisin bread), cosmological redshift. Complete at VWO level; the relativistic formula is rightly left to Block 8.

## Where this leads
- `8.286` lecture 3 = `year-4/8.286/doppler-effect.mdx`, "The Doppler effect and special relativity" ✓: the definition 1 + z = λ_O/λ_S and the relativistic formula with its small-β limit. The `why` text is accurate.
- `8.286` lecture 5 = `cosmological-redshift.mdx` ✓: the transcript confirms 1 + z as the ratio of scale factors. The `why` text is accurate.
- `towards: true` ✓; the cosmology claims (cosmological redshift as stretching of space, no centre, Hubble's law, 1 + z as growth factor, z = 2 not a speed of 2c) are correct and modestly stated; see info findings 6–8.

## Licensing and AI terms
- No sentence copied: compared with Siyavula 6.3, NASA Doppler Shift, Spectroscopy 101 and Hubble Cosmological Redshift; only standard phrases. The raisin-bread picture is also in Siyavula but is a standard analogy, rewritten in own words.
- Examples are original: 656.3 → 656.1 nm (blueshift) and 656.3 → 672.7 nm differ from the 8.286 page's 656.3 → 662.9 nm and 121.6 → 364.8 nm quasar; Siyavula's 67.15 appears only as a quoted value, not an exercise; NASA's 400 Hz siren is not used; the 8.286 page's z values (0.1, 0.6, 1, 1.5, 4, 0.0101) are not reused.
- No figures copied: the only diagram is a `<Plot>` generated from formulas, with a caption.
- No Siyavula logo or branding; "Everything Science" appears only inside the citation title, as on the other written hs-5 lessons (info).
- MIT: Lecture 3 and 5 transcripts carry the Creative Commons notice; nothing marked excluded is used.
- NASA: no insignia, no "according to NASA" phrasing (checked by search). NASA pages are cited as sources consulted, with read dates.
- No ESO text; no forbidden source. NIST is a data site; only line wavelengths used.

## Notes
- The writer's page numbers for `mit3` were checked in the PDF: pp. 2–3 for the definition is right; pp. 15–19 is right for the relativistic derivation but not for the slow-motion statement (finding 2).
- "1 Mpc ≈ 3.3 million light-years" is acceptable (3.26 rounded; Siyavula's value). "About 3.26 million" would change nothing else (350 million ly stays).
- Not checked: the rendered page in a browser (label layout passed `content:check`).

## Resolution (2026-11-20, by the page author)
1. (error) Fixed: quiz 5 now reads "A very distant galaxy has a redshift z = 2"; the third choice says "very distant galaxies" instead of "quasars". No calcs entry quoted the question. The word "quasar" no longer appears on the page.
2. (warning) Fixed after checking the local transcript PDF: pp. 4–5 state that for slow motion both sound cases are proportional to v/u and differ only at second order. The formula "Redshift and speed" now has at="pp. 4–5 (slow motion, z ≈ v/u) and pp. 15–19 (relativistic formula, which for small β gives z ≈ β)"; references.mit3.location names pp. 2–3, pp. 4–5 and pp. 15–19 with what each holds; the calcs entries that use z ≈ v/c (star-v, galaxy-v, quiz-star-v, quiz-galaxy-v, quiz-hubble-z) now cite "pp. 4–5 (slow motion), pp. 15–19". galaxy-relativistic keeps pp. 15–19.
3. (warning) Fixed: added "A cooler gas in front of a light source absorbs exactly the same wavelengths, so in starlight these lines usually appear as dark lines in the rainbow." The pointer to 7.4 and 7.5 is kept.
4. (warning) Fixed: "For slow sources this is the same result you would get from the sound formula of lesson 5.6 ...".
5. (warning) Fixed: the megaparsec sentence now says "(a light-year is the distance light travels in a year, lesson 1.11)".
6. (info) Applied: the callout says "The technical part of the university course on the early universe (MIT 8.286) begins here."
7. (info) Applied: "when distances between galaxies were a third of today's"; calcs z2-factor shown and where updated.
8. (info) Applied: "the first strong evidence that the universe is expanding" in the summary bullet, the flashcard and the frontmatter summary.
Other info: quiz: 1 was not added to quiz-star-z and quiz-star-v. The recomputed z (0.00138) is in no choice, and 415 km/s appears in two choices (away and towards), so the calc test's rule that only the marked choice may match cannot hold; the direction is checked by the explanation text instead. The optional page-scoped H0 meaning and the prerequisites for prism and grating were left as they are.
Checks: npm run calc:test -- -k towards-the-universe-redshift: 27 passed. npm run content:check: 0 error(s); for this page only the expected warning that prerequisite towards-the-universe-light-travel-time is planned but not written yet.

## Follow-up (2026-11-20)
Doppler citation corrected after the review of lesson 7.5 (spectra-in-astronomy, finding 1), checked in the L3 transcript PDF: z = v/u is boxed on p. 3 and the slow-motion discussion runs to p. 5; z = √((1+β)/(1−β)) − 1 is on p. 19, and Guth does not state z ≈ β for small β. The formula "Redshift and speed" now cites "pp. 3–5 (slow motion, z ≈ v/u) and p. 19 (relativistic formula; the small-β approximation is our step)"; references.mit3.location and the calcs `at` fields (pp. 3–5, p. 19) changed to match. No other change; status stays reviewed. calc:test for this page passes; content:check shows no error for it.
