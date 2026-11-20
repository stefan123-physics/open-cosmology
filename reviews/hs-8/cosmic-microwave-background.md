---
page: content/year-0/hs-8/cosmic-microwave-background.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (read: 8.286 Lecture 18 transcript, local copy; printed footer = PDF page, checked; pp. 9-17 read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: 8.286 Lecture 17 transcript, local copy; footer = PDF page; pp. 17-20 read)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec17.pdf (read: pp. 99-103; only notice is a public-domain NASA image)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l15/ (read: 10ed138fd40b1ec32f003451471b8abc_MIT8_044S13_L15.pdf, slide "8.044 L15B22"; no rights-reserved notice)
  - https://science.nasa.gov/mission/cobe/ (read)
  - https://www.nasa.gov/universe/cobe-satellite-marks-20th-anniversary/ (read)
  - https://science.nasa.gov/mission/wmap/ (read)
  - https://science.nasa.gov/mission/wmap/wmap-overview/ (read)
  - https://science.nasa.gov/mission/planck/ (read; last updated 26 Oct 2023)
  - public/phet/blackbody-spectrum_1.0.28_en.html (sim constants read: minTemperature 200, lightBulbTemperature 3e3, sunTemperature 5800, earthTemperature 250, siriusATemperature 9950)
verdict: pass-with-notes
---

# Review: The cosmic microwave background (8.15)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Worked example "The oldest light, then and now"; quiz 3 | Lesson 7.11 (`towards-the-universe-reading-starlight`, l. 200-204 and its quiz "Why do we receive it as microwaves...") already does exactly this: 3000/2.725 = 1100, peak 970 nm then, 1.06 mm now, with almost the same quiz question, correct answer and "dust" distractor | Presented as new; 7.11 is neither mentioned nor in `prerequisites` | Add `towards-the-universe-reading-starlight` to `prerequisites`, open the example with "Lesson 7.11 found..." and keep it as a short recap, and replace quiz 3 by a new question (e.g. the peak at some other redshift, or why the spectrum stays a black body). |
| 2 | warning | Section "A black body, cooled by the expansion": "2.725 K, the value Guth uses in 8.286"; calcs `t-cmb` cites reading1 p. 11 | L18 p. 11 gives the curve for 2.726 K; L17 p. 19 and L18 p. 9 use 2.7 K. None of the cited sources gives 2.725 K | 2.725 K attributed to Guth | The value is right (and in calcs/values.yaml), but cite it to a source on the page: NASA COBE FIRAS 2.725 ± 0.002 K, as lessons 7.11 and 8.13 do, or say "COBE measured 2.725 K". |
| 3 | warning | Worked example "How small is one part in 100 000?" | WMAP Overview: "one part of the sky has a temperature of 2.7251 K, while another part ... 2.7249 K" (an example of two patches) | "The warmest and coldest spots on WMAP's map differ by only about two ten-thousandths of a kelvin" | NASA does not say warmest vs coldest (the extremes of the map are a few hundred μK on either side). Write "Two patches of WMAP's map can differ by only about two ten-thousandths of a kelvin". |
| 4 | info | Section "A glowing fog clears": **surface of last scattering** | Not in L17, L18, the 8.902 L17 notes or the NASA pages read (searched) | Defined in its own words | Standard term and correctly defined (also used on this site's 8.286 page `temperature-and-decoupling`). Acceptable as standard; no change needed. |
| 5 | info | Same section: 380 000 vs 375 000 years | L17 p. 19 and L18 p. 9: about 380 000 years (L17 p. 19 also "about 400,000"); WMAP Overview: about 375 000 | Both given, each attributed | Correct and honest. |
| 6 | info | Recombination 4000 K vs decoupling 3000 K | L17 pp. 18-19: recombination at about 4000 K (half of the hydrogen neutral), decoupling colder, about 3000 K; L18 p. 9 repeats it | Body and flashcard 1 match | Correct. The frontmatter `summary` ("Once it had cooled to about 3000 K ... the electrons were caught into neutral atoms") compresses the two; "by then most electrons had been caught" would match the body. |
| 7 | info | Formula "Wien's displacement law", `at` | Slide 22 (L15B22) finds the maximum per unit frequency, ħω/kT ≈ 2.82; the constant 2.9 × 10⁻³ m K is not on the slide | Explains this in `at` | Same wording as lesson 7.6 (accepted in reviews/hs-7/colours-of-stars.md row 10). Lesson 7.2 cites MIT 8.901 PS2 Problem 1(c), which states 0.29 cm K per unit wavelength; that is a closer source. |
| 8 | info | "where $a$ is the scale factor of lesson 8.11" | Lesson 8.11 only mentions $a(t)$ in its last paragraph; lesson 8.13 (`the-big-bang`, "The scale factor: a ruler that grows") defines it and already derives $T \times a$ = constant | 8.11 | Write "lesson 8.13", and say that 8.13 already met $T \propto 1/a$. |
| 9 | info | Worked example step "At decoupling": "with a dull orange tail of visible light" | Lesson 7.2 calls the 2900 K bulb wire "almost white" | "dull orange" | My black-body integral: about 8% of a 3000 K black body's power lies in 380-700 nm, and its colour is a warm yellow-orange. Use one description in both lessons ("a warm yellowish glow"). |
| 10 | info | Section "A hiss from every direction": "who were not looking for it" | L18 p. 10 does not say so | Stated | Standard history and correct; fine uncited. |
| 11 | info | "The background is the same in every direction to about one part in 100 000"; quiz 4 | 8.902 L17 notes p. 101: l = 1 is the dipole anisotropy due to the motion of the Earth | No dipole mentioned | Optional: one clause "once the small effect of our own motion (about one part in 1000) is removed". |
| 12 | info | Section "Ripples": "the **Planck** satellite (launched in 2009)" | NASA COBE anniversary page: "ESA's Planck satellite" | No agency | Optional: "ESA's Planck satellite", so it is not read as a NASA mission. |

## Formulas and citations
- Wien's law: see row 7. Tex has the unit inside (`\text{m K}`).
- $T \propto 1/a$, cited reading2 p. 18 (board): L17 p. 18 "What I'm about to write next is only true if g is fixed ... t is just proportional to 1 over the scale factor": written on the board, so "(board)" is supported. L18 p. 9 repeats it in the summary.
- $T_\text{then} = (1+z)\,T_\text{now}$: labelled as the page's own step from $T \propto 1/a$ and lesson 5.13. Correct.
- reading1 locations verified: p. 10 Penzias and Wilson, one frequency, cold load (liquid helium), same reading in every direction, back-to-back papers with Dicke, Peebles, Roll and Wilkinson; p. 11 curve for 2.726 K; p. 12 COBE "first satellite dedicated", launched 1989, first data January 1990; p. 13 "fantastically good fit" (quoted on the page as Guth's words), Mather and Smoot Nobel 2006; p. 15 thermal equilibrium needs a dense early universe; p. 16 WMAP and Planck dedicated to the anisotropies, COBE made initial measurements. All correct, and the printed footers equal the PDF pages.
- reading2 locations verified: p. 18 4000 K and "recombination" (Guth's remark on the meaningless "re" is reported correctly); pp. 18-19 decoupling colder, about 3000 K; p. 19 about 380 000 years; pp. 19-20 image of the universe at decoupling (the page rewrites Guth's face-and-eyes comparison in its own words).
- reading3 (8.902 L17 p. 100, section 1.A): z ≈ 1000, dark-matter wells already formed, ΔT/T ≈ 10⁻⁵, "without dark matter we would expect ΔT/T ≈ 10⁻³". The page's "ripples about a hundred times larger would have been needed to grow today's galaxies in time" is a fair reading when combined with 8.902 L13 p. 86. "slightly cooler or warmer" matches the Sachs-Wolfe and Doppler items on p. 100.
- NASA: COBE launch 18 Nov 1989 and all-sky map; COBE anniversary page (spectrum agrees exactly with the Big Bang; hot and cold spots linked to density variations that gave rise to clusters and voids; Nobel 2006; WMAP and ESA's Planck followed); WMAP launch 30 June 2001, end 19 Aug 2010; WMAP Overview (375 000 years; COBE found the differences in 1992 on large angular scales; age 13.77 billion years to within half a percent; space within 0.4% of flat; 5% atoms, 25.0% dark matter, 70% dark energy); Planck launch 14 May 2009. All verified. 13.8 is 13.77 rounded and is in calcs/values.yaml.
- Plot: a generated Planck curve per unit wavelength (see next section). No figure from any source.

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test`: all entries of this page pass (the only 3 failures in the run are in `hs-8/dark-energy`, not this page). `content:check`: 0 errors; the only warning for this page is "no review file yet".
- 2.9e-3/2.725 = 1.0642e-3 m ✓; with the exact b = 2.8978e-3 m K, 1.063 mm, so "about 1 mm" holds either way. 2.9e-3/3000 = 9.67e-7 m (970 nm) ✓. 3000/2.725 = 1100.9 ✓; 1.06e-3/9.7e-7 = 1093 ("1100", within 1%) ✓.
- 300/2.725 = 110.1 ✓; 2.9e-3/300 = 9.67e-6 m ("about 10 micrometres") ✓.
- 2.725/100 000 = 2.7e-5 K (27 μK) ✓.
- Plot: the curve (T/2.725)⁵ u⁻⁵ (e^4.965 − 1)/(e^(4.965/u) − 1), u = λ/(2.9/T), is Planck's B_λ normalised to today's peak. The T⁵ scaling is right (λ_peak⁻⁵ ∝ T⁵), and 4.965 is the per-wavelength peak condition, so the maximum sits at λ = 2.9/T mm. Numerical maxima on [0.1, 5] mm: T = 2.725, at 1.0642 mm, height 1.000 ✓; T = 3.5, at 0.829 mm, height 3.50; T = 4, at 0.725 mm, height 6.815 ✓ ("0.73 mm", "almost seven times"). 4/2.725 = 1.468 ("1.47 times smaller") ✓. The range [0, 7] contains the T = 4 peak (6.82) ✓.
- Quiz 1: answer 0 ✓; the other three are wrong ✓.
- Quiz 2: 5 × 2.725 = 13.625 ("13.6 K", choice 2) ✓; 2.725/5 = 0.545 (divides instead of multiplying) ✓; 2.725 and 3000 K wrong ✓; peak 2.9e-3/13.6 = 2.13e-4 m ✓.
- Quiz 3: answer 0 ✓ (see row 1 for the duplication with 7.11).
- Quiz 4: answer 0 ✓; the explanation is true (one frequency only, L18 p. 10).
- Quiz 5: answer 0 ✓; the distractors are wrong ✓.
- Flashcards: all true.
- PhET: the "Light Bulb" preset is 3000 K and the minimum is 200 K, both as the page says ✓. At 3000 K the sim's peak is 2.898e-3/3000 = 966 nm, which matches "compare it with the 970 nm".
- Not in calcs (dates and quoted facts only, info): 1989, 1990, 1992, 2001, 2009, 2010, 2006, "25 years", "two ten-thousandths of a kelvin", 700 nm, PhET's 200 K.

## Only earlier terms
- Present in earlier lessons: black body, Wien's law (7.2, 7.6); Bohr model, ionise (7.4); redshift 1 + z (5.13); microwave band (5.8); scale factor (8.13, see row 8); recombination, decoupling, 380 000 years, T × a constant (already in 8.13, with 8.13 as a prerequisite); age 13.8 billion years and WMAP's 5/25/70 (8.12); dark energy (named in 8.12); "flat" (8.12, there as "just balanced", here the geometric sense; for our universe the two coincide, so fine).
- "thermal equilibrium": in 7.2 (l. 181); Block 4 (heat), planned on the other PC, covers it too.
- New terms are defined on the page: ionised, opaque, transparent, recombination, decoupling, surface of last scattering, anisotropies, seeds of galaxies.
- "power spectrum" appears only in the closing callout and `leadsTo` as a preview of university work. Fine.
- "dark matter" is used before lesson 8.16, but lesson 2.13 introduced it. Fine.

## Coverage
- §4 row 8.15 (NASA COBE, WMAP, Planck pages; PhET `blackbody-spectrum`; leads to `8-286/cmb-spectrum` and `8-902/cmb-anisotropies`): all covered at VWO level. The page covers the opaque fog, recombination and decoupling, the discovery, the black-body spectrum and its cooling, COBE's spectrum, the anisotropies, what the anisotropies tell us, and the PhET exercise.
- Left out: the dipole (row 11) and secondary effects (Sunyaev-Zel'dovich, lensing). None is needed at this level.

## Where this leads
- `{8.286, 18}` resolves to `cmb-spectrum` and `cosmological-constant`. The "why" (history of the measurement, Planck's formula, proof of a dense equilibrium phase) matches L18 pp. 10-15 and the `cmb-spectrum` page ✓.
- `{8.902, 17}` resolves to `cmb-anisotropies`. The "why" (dark-matter wells, power spectrum, acoustic peaks) matches notes pp. 100-103 ✓. The callout's "read off the amounts of matter, dark matter and dark energy" matches section 1.C, p. 103 ✓.
- `towards: false` is correct (8.19 ends the block).

## Licensing and AI terms
- No copied sentences. Guth's "fantastically good fit" is quoted and attributed. The face-and-eyes comparison is rewritten. NASA phrases ("the oldest light") are short and standard.
- The only graph is generated from Planck's formula. The PhET sim is unmodified (`content:check` verifies the hash).
- The worked examples and quizzes are the page's own (none of the sources has exercises), but example 1 and quiz 3 repeat this site's lesson 7.11 (row 1).
- No NASA insignia and no "according to NASA" phrasing (checked). No ESO, Siyavula or forbidden source is used or cited (checked: no OpenStax, LibreTexts, Khan, CK-12 or IOPSpark). No em dashes. The 8.044 slides and 8.902 L17 notes carry no rights-reserved notice on the parts used.

## Notes
- No errors found. Rows 1-3 are worth fixing before `status: reviewed`.
- 8.15 gives WMAP's 25% dark matter and 70% dark energy; 8.16 gives NASA's 27% and 68%. Each is attributed, but see dark-matter review row 7.

## Resolution (2026-11-20, by the page author)
1. Fixed. `towards-the-universe-reading-starlight` (7.11) added to `prerequisites`. The worked example now opens with "Lesson 7.11 found..." and gives its three results (peak now 1.06 mm, peak at decoupling 970 nm, stretch 1100) in one short recap step, then adds two new steps: what the glow looked like (row 9) and how much more power per square metre the fog radiated, (3000/2.725)^4 = 1100^4 = 1.5 x 10^12, explained as 1100 (each photon's energy) times 1100^3 = 1.3 x 10^9 (volume), using the Stefan-Boltzmann law of lesson 7.2. Quiz 3 replaced by a new question with own numbers: a 2000 K black body stretched 4 times arrives as a black body at 500 K with its peak at 5.8 x 10^-6 m (distractors: 8000 K with peak 3.6 x 10^-7 m, not a black body, same temperature only fainter). New calcs entries brightness-ratio, volume-factor, quiz3-peak-start, quiz3-peak-stretched, quiz3-temperature, quiz3-wrong-peak; shown texts of the removed old quiz 3 dropped from peak-decoupling and stretch-factor.
2. Fixed. The Guth claim is gone: "as measured by NASA's COBE satellite (2.725 ± 0.002 K; NASA, COBE FIRAS Overview)", with the `firas` reference copied from lessons 7.11 and 8.13 (value checked on the LAMBDA page today). Calcs `t-cmb` now cites firas, origin later-data.
3. Fixed: "Two patches of WMAP's map can differ by only about two ten-thousandths of a kelvin".
4. No change needed (standard term).
5. No change needed.
6. Fixed: the frontmatter summary now names recombination (half the hydrogen neutral by about 4000 K) and decoupling (about 3000 K, 380 000 years) separately.
7. Fixed: Wien's law now cites MIT 8.901 PS2 Problem 1(c) (0.29 cm K per unit wavelength), as lessons 7.2 and 8.13 do; the 8.044 reference, no longer used, was removed and all calcs sources changed to `wien`.
8. Fixed: "the scale factor of lesson 8.13, which already met this rule".
9. Fixed: "dull orange" removed. The step now says only a small share of the power was visible, and to an eye inside the fog it would have looked like the warm white of an old light bulb, in line with lesson 7.2.
10. No change needed.
11. Fixed: "Once the small effect of our own motion through the radiation is removed, the background is the same in every direction to about one part in 100 000"; reading3's location now also names p. 101 (the dipole is due to the motion of the Earth).
12. Fixed: "ESA's Planck satellite".

Checks: `npm run calc:test -- -k cosmic-microwave-background`: 27 passed. `npm run content:check`: 0 error(s); no error or warning for this page. Status set to reviewed.
