---
page: content/year-0/hs-6/light-as-an-electromagnetic-wave.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: a local copy of the Chapter 13 PDF; printed page numbers checked with pdftotext -f N -l N)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-02 (read)
verdict: needs-changes
---

# Review: Electromagnetic waves (lesson 6.12)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Formula "Energy per cubic metre of the fields", `at="Eqs. (13.6.1) and (13.6.2), pp. 14–15"` | Eqs. (13.6.1) and (13.6.2) are both on printed p. 15. Only the heading 13.6 is on p. 14 (PDF page 16 ends with footer "15"). | pp. 14–15 | `at="Eqs. (13.6.1) and (13.6.2), p. 15"` |
| 2 | warning | Worked example "Working out the speed of light", step "Compare" | MIT Eq. (13.4.15) gets 2.997 × 10⁸ m/s. Lesson 5.8 gives 299 792 458 m/s. The page's own inputs give 2.9986 × 10⁸ m/s. | "This is exactly the speed of light of lesson 5.8." | "This is the speed of light of lesson 5.8, to three figures." The page should not claim an exact match from rounded constants. |
| 3 | warning | Paragraph on Hertz (section "How electromagnetic waves are made") | The cited sources only say "confirmed by H. Hertz in 1887" (MIT p. 5). Siyavula 11.2 does not mention Hertz. | Spark gap between rods, a receiver loop with a gap a few metres away, reflection, a measured wavelength, and frequency × wavelength matching c | This is the writer's open point. The spark gap, the receiver loop and the reflection are standard, correct history, but no cited source supports them. Also, Hertz worked out his frequency from the circuit rather than measuring it, and his first speed values were not a clean match. Either cite a §2.0 source that describes the experiment, or cut the paragraph to what is standard and safe: sparks in the sender, sparks in a separate loop across the room, and waves that reflect like light. Drop the "speed matching that of light" clause, or soften it to "about the speed of light". |
| 4 | info | Worked example "The fields of a radio signal" | Not in the sources | "a radio can still pick up the wave, mostly through its electric field pushing electrons in the aerial" | This is true for a rod aerial. Many AM radios use a ferrite loop aerial, which responds to the magnetic field. Suggest "through a rod aerial, whose electrons are pushed by the electric field". |
| 5 | info | calcs `sun-distance`, `at: 'Example 13.1, p. 16'` | Example 13.1 starts on p. 16, but R = 1.50 × 10¹¹ m is in part (b) on p. 17. | p. 16 | `'Example 13.1(b), p. 17'`. It is fine to treat "150 million km" as a fact from MIT, and the page's rounding is correct. |

## Formulas and citations
- `c = 1/√(μ₀ε₀)`, Eq. (13.4.15), p. 9: correct. The equation is on printed p. 9 (PDF page 10), with the same μ₀ and ε₀ values.
- `E = cB`, Eq. (13.4.27), p. 11: correct.
- `u = ½ε₀E² + B²/(2μ₀)`, Eqs. (13.6.1) and (13.6.2): the physics is correct, but the page range is wrong (finding 1).
- `I = P/(4πr²)`, Eq. (13.6.13), p. 17: correct.
- Statement that the electric and magnetic energies are equal: supported by Eq. (13.6.10), p. 16 (calcs `energy-halves`).
- The directions (transverse, E ⊥ B, in phase): supported by MIT Sec. 13.4, pp. 6 and 11 (features 1 and 2, and "always in phase"), and by Siyavula 11.2 ("at right angles").
- Accelerating charges radiate, and stationary charges and steady currents do not: supported by MIT Sec. 13.8, p. 22, and Siyavula 11.2.
- Half-wave antenna with each rod a quarter wavelength: supported by MIT p. 23.
- "Light is an electromagnetic wave": supported by MIT p. 9.
- Hertz in 1887: supported by MIT p. 5. The details of the experiment are not supported (finding 3).
- The Siyavula reading's `location` text matches what 11.2 says (accelerating charges, changing fields that produce each other at right angles, no medium, speed c). Its worked examples (4.2 × 10⁻⁷ m and 200 nm, both solved for frequency) are not the page's.

## Arithmetic and answer checks
I recomputed every number by hand, and `npm run calc:test -- -k light-as-an` passed 22 of 22.
- μ₀ε₀ = 1.2566 × 10⁻⁶ × 8.85 × 10⁻¹² = 1.112 × 10⁻¹⁷ s²/m². The square root is 3.335 × 10⁻⁹ s/m, so c = 2.9986 × 10⁸ m/s ≈ 3.00 × 10⁸ m/s. Correct. The units are also right: T·m/A × F/m = s²/m².
- Plot: c = 0.3 m/ns. λ = 2.0 m gives f = 150 MHz. B₀ = 6/(3 × 10⁸) = 2.0 × 10⁻⁸ T = 20 nT. The expressions match the caption. Correct.
- Radio field: 0.030/(3.00 × 10⁸) = 1.0 × 10⁻¹⁰ T, and 5 × 10⁻⁵ / 1.0 × 10⁻¹⁰ = 5 × 10⁵ ("half a million"). Correct.
- TV antenna: 3.00 × 10⁸ / 6.00 × 10⁸ = 0.500 m, so each rod is 0.125 m and the whole antenna 0.25 m. Correct.
- Intensity: 5.0 × 10⁴ / (4π × 10⁸) = 3.98 × 10⁻⁵ ≈ 4.0 × 10⁻⁵ W/m², which is 40 millionths of a watt. Correct.
- Quiz 1 (index 0): answer 1 is correct, and the other choices are wrong.
- Quiz 2: travel north, E up, so B is east–west (E × B = up × east = north). Answer 2 is correct.
- Quiz 3: 4ε₀ makes c half as large. Answer 2 is correct.
- Quiz 4: 1.5 / 3.00 × 10⁸ = 5.0 × 10⁻⁹ T. Answer 2 is correct. The distractors are wrong: 4.5 × 10⁸ T comes from E × c, and 2.0 × 10⁻⁸ T is wrong. The ratio to the Earth's field, 5 × 10⁻⁵ / 5 × 10⁻⁹ = 10⁴, is correct.
- Quiz 5: answer 2 is correct, and the explanation is true.
- Flashcards: all true.
- Every number on the page is in the calcs file. The quiz indices are 0-based, as in the other hs-6 calcs files.

## Only earlier terms
- μ₀ = 4π × 10⁻⁷ T m/A and "permeability of free space": lesson 6.10 (`fields-from-currents`).
- Earth's field 5 × 10⁻⁵ T: lesson 6.10.
- ε₀ = 8.85 × 10⁻¹² F/m, the farad, and the energy per cubic metre ½ε₀E²: lesson 6.5 (`capacitors`).
- Transverse rope wave: 5.3. Intensity and P/(4πr²): 5.5. Spectrum and c = 3.00 × 10⁸ m/s: 5.8. Polarization: 5.12. All are written.
- Faraday's law: lesson 6.11 talks about an induced emf or voltage, not an electric field. The page bridges this itself ("The electric field that drives the charges round is there even when there is no wire"), so the idea is introduced here, which is fine. MIT's table on p. 4 supports it ("Changing magnetic flux produces an electric field").
- The magnetic energy B²/(2μ₀), "displacement current" (only named, as a university term) and "antenna" are all introduced on this page. Fine.
- No term is used before it is introduced.

## Coverage
- The §4 row (CP 24.1, 24.2 and 24.4, not read: OpenStax) covers Maxwell's equations, production of EM waves, and energy in EM waves. All three are covered at VWO level: Maxwell's idea is qualitative, with no four equations (right for a beginner), plus production by accelerating charges and antennas, energy density and intensity.
- Not covered: the average intensity in terms of E₀ (I = cε₀E₀²/2), and radiation pressure. Neither is needed at this level (info).
- No repetition of 5.8 or 5.12. The spectrum and polarization are each mentioned in one clause, as links back, and the page adds what 5.8 promised ("What is waving (electric and magnetic fields) comes in lesson 6.12").
- The level is right for VWO. The worked examples are short and one-step.

## Where this leads
- 8.02 Lecture 28 → `maxwell-equations-and-em-waves`: covers the displacement current, the wave speed and the Poynting vector. The "why" text is correct.
- 8.02 Lecture 32 → `generating-em-waves`: covers the kink in the field of a moving charged sheet and the dipole antenna. The "why" text is correct.
- `towards: false` is correct: 6.13 is the block's last lesson.

## Licensing and AI terms
- No copied sentences. "Accelerating charges send out electromagnetic waves" is close to Siyavula's "Accelerating charges emit electromagnetic waves" and MIT's opening of 13.8, but it is a short standard phrase.
- No figures are reused. The only figure is a generated Plot.
- The worked examples and quiz questions are original. They differ from Siyavula's two worked examples and from MIT's Examples 13.1 and 13.2.
- No Siyavula branding. The Siyavula URL is a CCBY row in docs/siyavula-licences.tsv ("11.2 Wave-like nature of EM radiation").
- MIT Chapter 13 has no "All rights reserved", "Courtesy of" or "excluded" notice (searched the full text).
- No forbidden source is cited or used. The OpenStax sections in the §4 row were not opened.

## Notes
- The step-by-step picture of each changing field making the next one further on is a common simplification. MIT p. 23 uses the same language for the far region ("continuous induction of a magnetic field due to a time-varying electric field and vice versa"), so it is acceptable at this level.
- I did not run `content:check` (symbols, labels); the page author should run it.

## Resolution (2026-11-20, by the page author)
1. Fixed. The energy-density Formula now has `at="Eqs. (13.6.1) and (13.6.2), p. 15"` (checked with pdftotext: both equations are on the page with printed footer 15). No calcs entry repeated the old range.
2. Fixed. The step "Compare" now says "This is the speed of light of lesson 5.8, to three figures."
3. Fixed. The Hertz paragraph now keeps only the sparks across a small gap between two rods, the small sparks in a separate loop with a gap a few metres away, and that the waves could be reflected, just like light. The sentence about measuring the wavelength and a speed matching that of light was dropped. The year 1887 stays cited to MIT Sec. 13.3, p. 5 (calcs `hertz-year`, checked in the PDF).
4. Fixed. The radio example now says the radio picks up the wave "for example through a rod aerial, whose electrons are pushed back and forth by the electric field."
5. Fixed. calcs `sun-distance` now has `at: 'Example 13.1(b), p. 17'` (checked: R = 1.50 × 10¹¹ m is in part (b) on printed p. 17).

Checks: `npm run calc:test -- -k light-as-an` 22 passed; `npm run content:check` 0 error(s), no message for this page. Status set to reviewed.
