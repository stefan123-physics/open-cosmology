---
page: content/year-0/hs-5/waves.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/transverse-pulses/07-transverse-pulses-01 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/transverse-pulses/07-transverse-pulses-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/transverse-waves/08-transverse-waves-01 … -07 (all seven read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/longitudinal-waves/09-longitudinal-waves-01 … -05 (all five read)
  - content/year-0/hs-5/simple-harmonic-motion.mdx (prerequisite 5.1, read)
  - content/year-2/8.03/travelling-waves-reflection.mdx and beaded-string-wave-equation.mdx (leadsTo target and its predecessor, read)
verdict: pass-with-notes
---

# Review: Waves: speed, frequency, wavelength

No errors found. Every formula, number, citation and quiz answer checks out against Siyavula Grade 10 chapters 7 to 9. The warnings below are about wording, a claim that goes beyond the cited sections, and the `leadsTo` reason.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Intro, "Pulses and the medium", Summary bullet 1, page `summary` | Siyavula 8.1: "A wave is simply the disturbance of a medium" (same simplification) | Every wave carries energy "through a medium" | Say "a mechanical wave" or add one line saying that light (Lesson 5.8) is a wave that needs no medium. Otherwise 5.8 contradicts this lesson's summary. |
| 2 | warning | "Transverse and longitudinal waves", last paragraph | Siyavula 9.1 gives water waves as an example of *transverse* waves | Water waves are a mixture, and the surface water moves in small circles | The page is right and the source is simplified, but no cited section supports the claim. Keep it and mark it as going beyond the textbook, or cite a supporting source from §2.0 (e.g. an MIT RES.8-009 or OpenLearn section). |
| 3 | warning | "The wave equation", bullet "speed is set by the medium" | Siyavula 7.2: pulse speed "depends on the properties of the medium"; 9.5 Worked example 2: the frequency is set by the source and stays the same | Adds "Sound travels faster in water than in air; a tighter rope carries waves faster" | Both claims are correct standard physics, but the cited sections (8.1–8.7, 9.1–9.5, 7.1–7.2) do not contain them. Cite the 7.2 statement for "set by the medium", and either cite a source for the two examples or leave them as plain, uncited illustrations (acceptable). |
| 4 | warning | Plot caption and formula | (not in source) | Uses `x` for the position along the rope and `y` for the displacement, without defining them in the text | In 5.1, `x` was the *displacement* of the mass. Add one sentence before the plot, e.g. "x is the position along the rope and y how far that point is displaced". Check that the `data/symbols.json` meanings of x and y fit this page. |
| 5 | info | "The wave equation" | Siyavula 8.7 and 9.5: "We call this equation the wave equation" | "This is often called the wave equation" | Correct as in the source. Consider a short note that at university (8.03 Lecture 8 onwards) "the wave equation" means a different equation (∂²y/∂t² = v²∂²y/∂x²), with v = fλ as one of its consequences. This avoids confusion at the `leadsTo` step. |

## Formulas and citations
- `<Formula label="Wave speed" tex="v = \frac{\lambda}{T} = f\lambda" cite="mit" at="Sec. 8.7, the wave equation" />`: correct. Siyavula 8.7 (Speed of a transverse wave) derives v = λ/T from "in one period the wave travels one wavelength" and then v = λ·f, calling it the wave equation. 9.5 repeats this for longitudinal waves. The notation (v, f, λ, T, SI) matches the site. Under AGENTS.md, `cite="mit"` means the page's `source.url`, here Siyavula chapter 8: correct.
- The page's derivation follows the same idea as 8.7 (one wavelength per period), in its own words.
- Inline use of f = 1/T: introduced in 5.1 (cited there to Siyavula 8.6). Fine.
- Definitions:
  - medium and pulse: 7.1, 7.2
  - wave as a train of pulses: 8.2
  - transverse: 8.2
  - crest and trough: 8.3
  - amplitude: 8.4 and 7.2
  - wavelength, including "neighbouring points in phase": 8.4, 8.5
  - period and frequency: 8.6, 9.4
  - longitudinal, compression and rarefaction: 9.1, 9.2, 9.3

  All match the sources.
- The page uses each point's oscillation period, while Siyavula 8.6 uses "time between successive crests passing a fixed point". These are equivalent. The page's link to SHM is correct for a source that moves in SHM.
- Calcs `ripple-wavelength-m` cites "Sec. 8.5, wavelength". Wavelength is introduced in 8.4; 8.5 gives the in-phase definition. Either works; 8.4 is more exact (info).
- `readings` entry 1 is chapter 7 (7.1–7.2) and `reading2` is chapter 9. Calcs `fork-wavelength` cites reading2 Sec. 9.5: correct.

## Arithmetic and answer checks
I recomputed every number independently with Python:
- **Quiz 2:** λ = 308/220 = 1.400 m. ✔ The distractors come from plausible mistakes:
  - 0.71 = 220/308 (inverted)
  - 528 = 308 + 220 (added)
  - 6.8 × 10⁴ = 308 × 220 = 67 760 (multiplied)
- **Ripples in a tank:** 1.5 cm = 0.015 m; v = 12 × 0.015 = 0.18 m/s = 18 cm/s. ✔
- **Ocean swell:** f = 1/10 = 0.10 Hz; v = 150/10 = 15 m/s; 15 × 3.6 = 54.0 km/h. ✔ The numbers are also physically realistic. Deep-water theory gives λ = gT²/2π = 156 m and v = gT/2π = 15.6 m/s for T = 10 s, so the 150 m and 15 m/s are consistent.
- **Tuning fork:** λ = 340/256 = 1.328 m, so 1.33 m. ✔
- **Plot:** y = 0.1 cos(2π(x − 1.5t)/λ) has amplitude 0.10 m and moves in the +x direction at 1.5 m/s for every λ. The caption is correct. The speed does not depend on the λ slider, which is consistent with "speed set by the medium". The range ±0.15 contains the curve.
- **Calcs file:**
  - All nine entries match the page.
  - The `quiz:` indices are 0-based, as in simple-harmonic-motion.yaml. "quiz 1" is the guitar question and "quiz 3" the doubling question: consistent.
  - The identity v/(2f) = 0.5·v/f is trivially true.
- **Quiz:**
  - Q1, answer index 1 (oscillates about the same spot): correct. The others are wrong.
  - Q2, index 1 (1.4 m): correct.
  - Q3, index 1 (parallel): correct. "in circles" and "at the wave speed" are wrong.
  - Q4, index 1 (the wavelength halves): correct. The speed is fixed by the rope, and the amplitude is not set by the frequency.
  - All explanations are true.
- **Flashcards:** all three are correct.

## Only earlier terms
- From 5.1 (written, read): period T, frequency f, hertz, f = 1/T, amplitude A, simple harmonic motion, oscillation, rest/equilibrium position, cosine.
- From 1.2 (`speed-and-velocity`, not yet written): "speed is distance over time" and m/s. The lesson title and §4 row (P 2.2, CP 2.3 → speed and velocity) cover this, so it counts as introduced.
- "Energy" (Block 3), "tension" (2.3 "Weight, normal force and tension", in the PhET "Try it" text) and "perpendicular/right angles" (Block 0) are all from earlier blocks. Fine.
- "in phase" is defined on the page itself.
- Sound is used as an example before 5.5. It is an everyday word and is only named as longitudinal. Fine.
- Symbols x (position along the rope) and y (displacement) appear in the plot caption without being defined (see warning 4). λ is defined.
- No term is used before it is introduced. No error.

## Coverage
- §4 row 5.3 (topics of P 13.1, 13.2; CP 16.9):
  - what a wave is: covered
  - transverse and longitudinal: covered
  - amplitude, wavelength, period, frequency: covered
  - v = fλ: covered
  - speed set by the medium: covered
  - PhET wave-on-a-string: present

  All covered at VWO level.
- Not covered:
  - the mechanical/electromagnetic distinction from P 13.1 (see warning 1)
  - pulse length and pulse speed v = D/t from Siyavula 7.2 (not needed)
  - phase difference as a fraction of a wavelength

  Dutch VWO uses phase difference (faseverschil); it fits better in 5.4 (superposition). Not an error at this level.

## Where this leads
- 8.03 Lecture 10 (`travelling-waves-reflection`) is the right target: travelling waves f(x − v_pt), and each point moves only up and down.
- Warning: the `why` says "its speed is derived from the forces inside the medium". Lecture 10 does not derive the speed. v_p = √(T/ρ_L) is derived in 8.03 Lecture 8 (`beaded-string-wave-equation`). Either reword the reason to "…written as a function of x − vt, and you see how energy travels and how waves reflect", or add a second `leadsTo` to 8.03 Lecture 8 for the speed.
- `towards: false`: correct (not the block's last lesson).

## Licensing and AI terms
- **No copied sentences.** I compared:
  - Siyavula 8.2 "A wave is a periodic, continuous disturbance that consists of a train or succession of pulses" with the page's "A wave is a regular, continuing train of pulses". This is a reworded short definition; acceptable.
  - Siyavula 8.7 "in a time of 1 period, the wave will travel 1 wavelength in distance" with the page's own longer explanation. Standard reasoning, own words.
  - Siyavula 7.1 "the medium does not travel with the pulse" with the page's "the medium as a whole stays where it is". Own words.
- **Worked examples differ from Siyavula's:**
  - Siyavula: string at 10 Hz and 0.25 m (8.7 WE4); cork at 1 Hz with 20 cm ripples and 2 m (8.7 WE5); note A at 440 Hz and 0.784 m (9.5 WE1); exercises such as Tom on the pier (4 crests in 8 s, 4 m) and the 2450 MHz microwave.
  - Page: 12 Hz, 1.5 cm ripple tank; 10 s, 150 m swell; 256 Hz, 340 m/s fork, solved for λ rather than v.
  - The ripple setting resembles WE5, but the question, numbers and unknown are different. ✔
- Quiz Q4 (shake twice as often) is conceptually close to the Siyavula 8.7 exercise "a wave travelling at the same speed with twice the frequency" (a drawing task) and to 9.5 WE2. It is a standard idea in original wording. Info only.
- **No figures copied:** the plot is generated from a formula, and the PhET sim is the site's own embed (Siyavula's embedded sim is not reused).
- **Branding:** no Siyavula logo or brand on the page. The main `source.title` contains "Everything Science" as part of the book title in the citation. That is attribution, not branding, and simple-harmonic-motion.mdx does the same (info).
- **Licences:** Siyavula is CC BY 3.0, and the page is CC BY-NC-SA 4.0. They are compatible with attribution.
- No forbidden source is cited. No MIT or NASA material is used.

## Notes
- The swell example is a nice, physically consistent choice (it matches deep-water dispersion), though the page does not need to say so.
- Siyavula writes units as m·s⁻¹ and uses decimal commas. The page uses m/s and decimal points as on the site. No note needed.
- The "Try it" text (frequency changes the wavelength, not the speed; tension changes the speed) is correct for Wave on a String.

## Resolution (2026-11-20, by the page author)

1. **Warning, every wave "through a medium":** the summary now speaks of waves on a rope or in water; the introduction says this lesson is about mechanical waves, which need a material, and that light (lesson 5.8) can cross empty space; the summary bullet says "A mechanical wave".
2. **Warning, water waves as circles:** the unsupported sentence is replaced by "Ripples on water are usually treated as transverse waves", in line with Siyavula 9.1.
3. **Warning, speed examples:** the uncited water/air comparison is removed; "a tighter rope carries waves faster" now points to the next lesson, which derives it (MIT Lecture 7, Eq. (15)).
4. **Warning, plot symbols:** a sentence now defines x (position along the rope) and y (displacement), noting that in 5.1 x was a mass's displacement; the plot's y axis is labelled y; x and y have meanings for this page in data/symbols.json.
5. **Warning, `leadsTo` reason:** reworded; 8.03 lecture 8 (`beaded-string-wave-equation`), where the wave speed on a string is derived, is added; lecture 10 keeps the x − vt and reflection reason.
6. **Info:** the page now says that at university "the wave equation" means a deeper equation for the whole wave; the calcs entry `ripple-wavelength-m` cites Sec. 8.4–8.5. Phase difference is left for later lessons.

`npm run content:check`: 0 errors; `npm run calc:test -- -k hs-5/waves`: all pass.
