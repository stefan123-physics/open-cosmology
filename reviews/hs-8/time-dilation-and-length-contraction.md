---
page: content/year-0/hs-8/time-dilation-and-length-contraction.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: PDF, 23 slides, rendered as images; slides 4, 5, 6, 9, 12, 13, 21, 22 checked)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read: slide 15)
  - https://pdg.lbl.gov/2024/listings/rpp2024-list-muon.pdf (read)
  - https://ntrs.nasa.gov/api/citations/20120010317/downloads/20120010317.pdf (read: 93 slides; slides 9, 26, 27, and the courtesy notices)
  - https://science.nasa.gov/solar-system/10-things-einstein-got-right/ (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
verdict: needs-changes
---

# Review: Time dilation and length contraction

The writer's slide citations were taken from the 8.033 page; I checked every one against the Lecture 5 and Lecture 4 slide PDFs themselves. Slide numbers are PDF page numbers.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "GPS needs relativity": "According to the NASA overview, without a correction their clocks would gain about 38 μs per day" | Reviewer rules / AGENTS.md rule 11 (NASA row): never phrase AI-assisted text as "according to NASA". | "According to the NASA overview" | Rephrase as a cited source, e.g. "A 2012 NASA Goddard presentation on GPS (Moreau) gives the size of the correction: without it, the satellite clocks would gain about 38 μs per day…". The number itself is right (slide 27). |
| 2 | warning | "Proper time": "The proper time is always the shortest time between two events, and every observer agrees on its value (MIT 8.033 Lecture 5, slides 21 and 22)" | Slide 21: proper time = time measured in a frame where the events are at the same place. Slide 22: all observers agree on proper time. Nothing about "shortest". | "always the shortest time between two events" | Not true in general and it clashes with the twin paradox on the same page: the stay-at-home twin's clock is also a single clock present at both events (departure and reunion) and records the **longer** time. Say instead: "it is shorter than the time between the same two events measured in any other inertial frame, where they happen at different places". Keep the slide 21–22 citation for the definition and for "every observer agrees". |
| 3 | warning | Muons: "its mean lifetime is 2.2 μs (Particle Data Group), which in the language of lesson 7.9 is a half-life of 2.2 × ln 2 = 1.52 μs" | Lesson 7.9 (`half-life`) introduces λ and t½ = ln 2/λ but never "mean lifetime". | Uses "mean lifetime" and t½ = τ ln 2 without introducing either. | Add one clause: "the mean lifetime is 1/λ, so the half-life is ln 2 times the mean lifetime". |
| 4 | warning | Worked example "Muons reaching the ground", step (a), and calcs `muon-halflives-plain`, `muon-fraction-plain`, `muon-one-in` | — | 40.1/1.52 = 26.4; (½)^26.4 = 1.1 × 10⁻⁸; "about 1 muon in 90 million". | Unrounded: 40.08 μs / 1.5228 μs = 26.3 half-lives, (½)^26.3 = 1.2 × 10⁻⁸, about 1 in 84 million. 40.1/1.52 is 26.38, which also rounds to 26.4 only because of the rounded inputs. Suggest "26.3 half-lives, (½)^26.3 = 1.2 × 10⁻⁸: about 1 muon in 80 million". The calcs entries hard-code the rounded inputs (`formula: 40.1 / 1.52`), so `calc:test` cannot catch this; compute them from d, v, c and τ instead. Step (b) is fine ("about a third": unrounded 1.66 half-lives, 0.32). |
| 5 | info | Muons: "MIT's slides pose the puzzle (Lecture 5, slide 6): even at the speed of light, a muon would cover only about half a kilometre in one half-life" | Slide 6: created about 10 km up, "Half life 1.56 × 10⁻⁶ second", light travels 0.47 km; γ ≈ 7 at 0.99c, ≈ 71 at 0.9999c; "Leads to twin paradox". | Uses PDG 1.52 μs (0.46 km), not the slide's 1.56 μs. | Faithful in substance. The slide's 1.56 μs differs from the measured 2.1969811 μs × ln 2 = 1.523 μs; since the page does not quote 1.56, no note is required. Optional bracket. |
| 6 | info | "γ stays very close to 1 up to about a third of the speed of light" (plot caption) | — | — | γ(1/3) = 1.061, 6% above 1. "Close to 1 (within about 6%) up to a third of c" or "up to about a tenth of c (0.5%)" is more exact. |
| 7 | info | "For a jet aircraft at 250 m/s the difference from 1 is about 3 × 10⁻¹³" | — | 3 × 10⁻¹³ | v²/2c² = 3.5 × 10⁻¹³. "about 3.5 × 10⁻¹³" (calcs `gamma-jet` expects 3e-13 with a loose tolerance). |
| 8 | info | "NASA's overview of GPS" | NTRS 20120010317 is a presentation by M. C. Moreau (NASA GSFC), given by L. Winternitz at the 37th Annual Time and Frequency Metrology Seminar, 7 June 2012. | "NASA's overview of GPS" | Acceptable; "a NASA Goddard presentation on GPS (2012)" is more accurate and avoids implying an official NASA statement (ties in with finding 1). |

## Formulas and citations
- Light clock tick Δt₀ = 2d/c and the Pythagoras relation, `cite="mit" at="slides 5–6 (light clock); worked out on this page"`: slides 5 and 6 both say only "The light clock movie says it all" with a link (http://www.anu.edu.au/Physics/qt/). The formulas are not on the slides; the `at` note and the body ("the triangle below is worked out on this page") say so honestly. Acceptable. The algebra (multiply by 4, (c² − v²)Δt² = 4d², Δt = (2d/c)/√(1 − v²/c²)) is correct, and calcs `light-clock-pythagoras` checks it.
- Lorentz factor, reading1 (L4) slide 15: γ ≡ 1/√(1 − β²) = 1/√(1 − v²/c²) is on slide 15. Correct.
- Time dilation Δt = γΔt₀, slide 4 "written there as Δt′ = γΔt": slide 4 ends "So in S′, the clock appears to tick at intervals Δt′ = γΔt > Δt, i.e., slower!" Correct.
- Length contraction L = L₀/γ, slides 12–13: slide 12 gives x₂′ − x₁′ = L/γ, slide 13 "measured length is L′ = L/γ, i.e., shorter". Correct (optionally add "written there as L′ = L/γ").
- Proper time, slides 21 and 22: slide 21 defines the proper time interval (frame where the events are at the same place), slide 22 "All observers agree on proper time" and "on rest length". Correct for those statements; see finding 2 for "shortest".
- Twin paradox "which MIT's slide 6 mentions straight after the muons": slide 6 ends "Leads to twin paradox". Correct.
- PDG reference: URL works; the 2024 muon listing gives the mean life 2.1969811 ± 0.0000022 × 10⁻⁶ s ("OUR AVERAGE"). Correct. Citation in the PDF: S. Navas et al. (PDG), Phys. Rev. D 110, 030001 (2024). PDG content is CC BY 4.0 (AGENTS.md table), as the reference title says.
- NASA GPS slides: slide 9 "Semi-synchronous, circular orbits (~20,200 km … altitude)", "Repeating ground tracks (11 hours 58 minutes)", "Redundant cesium and/or rubidium clocks". Slide 27: fixed fractional frequency offset −4.46475 × 10⁻¹⁰; second-order Doppler (moving clock slower) and gravitational shift; "Without this offset, GPS satellite clocks would gain ~38 microseconds per day relative to clocks on the ground (~11 km range error)". Both slides as cited. (Slide 9 gives 11 h 58 min as the ground-track repeat; the orbital period is the same, half a sidereal day, so using it as the period is correct.) No courtesy notice on slides 9 or 27; courtesy notices (Thomas D. Powell, The Aerospace Corporation) are on slides 16 and 19–23, which the page does not use.
- NASA "10 Things Einstein Got Right": published 29 May 2019, modified 19 March 2025 (page metadata), as the reference says. Section "Bonus: Your GPS!" says the net effect puts satellite clocks ahead and that without relativity "your phone would guide you miles out of your way". The page's "kilometres off course" is a fair metric paraphrase.
- NASA Earth Fact Sheet: volumetric mean radius 6371.000 km. Correct.

## Arithmetic and answer checks
All recomputed independently (c = 3.00 × 10⁸ m/s); `npm run calc:test -k …` passes.
- Light clock: 2 × 0.90/3.00e8 = 6.0 ns; γ(0.60) = 1.25; 7.5 ns; half tick 3.75 ns: light 1.125 m, ship 0.675 m, √(0.675² + 0.90²) = 1.125. Correct.
- γ: 0.1c → 1.00504 (approx. 1.005); 0.5c → 1.155; 0.9c → 2.294; 0.998c → 15.82. Correct. Plot points (0.6, 1.25) and (0.9, 2.294) on the curve; range 0–8 holds γ(0.99) = 7.09.
- Muons: t½ = 2.1969811 × ln 2 = 1.5228 μs; c × t½ = 457 m ("about half a kilometre"); trip 12 000/(0.998 × 3.00e8) = 40.08 μs; (a) see finding 4; (b) 15.82 × 1.5228 = 24.09 μs ("24.0"; 24.1 unrounded), 40.08/24.09 = 1.66, (½)^1.66 = 0.316 ("0.31", "about a third"). Muon's view: 40.08/15.82 = 2.53 μs, ground moves 0.998c × 2.53 μs = 0.759 km; 12/15.82 = 0.759 km. Correct.
- GPS: r = 26 571 km, T = 43 080 s, v = 3875 m/s ("3.88 × 10³"), v/c = 1.29 × 10⁻⁵, v²/2c² = 8.34 × 10⁻¹¹, × 86 400 = 7.21 μs; × c = 2.16 km. Correct. 38 + 7 = 45 μs/day for gravity: matches the standard split (about 45.7 and 7.2 μs/day); fine at this precision. Slide 27's offset 4.46475 × 10⁻¹⁰ × 86 400 s = 38.6 μs/day, consistent with "about 38".
- Light: 300 m per microsecond. Correct.
- Twin: 20/1.25 = 16 years. Correct.
- Quiz 0: γ(0.80) = 5/3, 50 min; 18 min is ÷γ. Correct. Quiz 1: clock moving with the muon. Correct. Quiz 2: 2.0/1.25 = 1.6 m. Correct. Quiz 3: turning round breaks the symmetry. Correct. Quiz 4: runs slow by a few μs/day from SR alone; "about 3.9 km/s", "about 7 μs". Correct.
- Flashcards: all true.

## Only earlier terms
- Pythagoras (0.7), v = 2πr/T (1.10, `circular-motion`), half-life and ln 2 (7.9), postulates and frames (8.1): all prerequisites, all written.
- "Mean lifetime": not introduced earlier (finding 3).
- "General relativity" and gravity changing clock rates: forward reference to lesson 8.8 (`curved-spacetime`, planned in §4 row 8.8), stated as a later lesson. Fine.
- "Cosmic rays", "muon", "light clock", "proper time", "rest length", "Lorentz factor" are introduced on the page.

## Coverage
- §4 row 8.2 (time dilation and length contraction): both covered, with proper time, rest length, γ, muons, GPS and the twin paradox. VWO level throughout (light clock with Pythagoras, no Lorentz transformation). Nothing important missing.

## Where this leads
- 8.033 Lecture 5 (`time-dilation-length-contraction`, lecture 5): same topic. The `why` says the course "adds the relativity of simultaneity"; lesson 8.1 already introduced it, so "adds" is slightly off: suggest "and uses the relativity of simultaneity (lesson 8.1) to show why the two effects do not contradict each other". Info.
- `towards: false`: correct.

## Licensing and AI terms
- No sentence copied from the slides, PDG or NASA pages; all worked examples and quiz items use the page's own numbers (12 km, 0.998c; the slides use 10 km, 0.99c and 0.9999c).
- No figure reused; the only graph is generated. The MIT slides used carry no courtesy notice on the slides cited; the NASA presentation's courtesy slides (16, 19–23) are not used.
- NASA: no insignia; cited by title, URL and date read. One "according to … NASA" phrasing (finding 1).
- PDG: CC BY 4.0, credited in `references`.
- No forbidden source cited or used.

## Notes
- Verdict needs-changes because of finding 1 (an AI-terms wording rule; a one-line fix). Findings 2–4 should be fixed before `status: reviewed`.
- The writer's open points are settled: slide citations verified against the PDF (all correct); the light-clock triangle is honestly marked as the page's own working; the PDG URL and τ = 2.1969811 μs are correct; NASA GPS slides 9 and 27 say what the page uses and carry no courtesy notice; the GPS numbers (7.2 μs/day SR, 38 μs/day net, 45 μs/day gravity) are right.

## Resolution (2026-11-20, by the page author)

1. Fixed: no "according to NASA" any more. The GPS section now names the source as "A 2012 NASA Goddard presentation on GPS (Moreau)" for the orbit, and "The same presentation gives the size of the net effect: without a correction, their clocks would gain about 38 μs per day" for the 38 μs.
2. Fixed: "The proper time is shorter than the time between the same two events measured in any other inertial frame, where they happen at different places, and every observer agrees on its value (slides 21 and 22)." The summary line now says "in every other inertial frame the time between the same two events is longer", so nothing clashes with the twin paradox.
3. Fixed with one clause in words (no new symbol): "The mean lifetime is 1 divided by the decay constant of lesson 7.9, so the half-life is ln 2 times the mean lifetime: 2.2 × ln 2 = 1.52 μs."
4. Fixed: step (a) now keeps one more digit, "40.08/1.523 = 26.3 half-lives, and (½)^26.3 = 1.2 × 10⁻⁸: about 1 muon in 84 million would survive" (unrounded 26.32, 1.19 × 10⁻⁸, 83.8 million). The calcs entries of the whole muon chain (`muon-halflives-plain`, `muon-fraction-plain`, `muon-one-in`, `muon-dilated-half-life`, `muon-halflives-dilated`, `muon-fraction-dilated`, `muon-own-time`, `muon-ground-moves`) now compute from h = 12 000 m, v = 0.998c, c and the PDG mean life 2.1969811 μs instead of hard-coded quotients, with tight tolerances; step (b) and the muon's view (24.0, 1.67, 0.31, 2.54 μs, 0.76 km) pass within 0.5% of the unrounded chain and stay as they were, as the review allowed.
5. No change: the page does not quote the slide's 1.56 μs, so no bracket is needed.
6. Fixed: the plot caption now says γ "stays within about 0.5% of 1 up to a tenth of the speed of light".
7. Fixed: "about 3.5 × 10⁻¹³"; calcs `gamma-jet` now expects 3.5e-13 at 2%.
8. Fixed together with finding 1 ("A 2012 NASA Goddard presentation on GPS (Moreau)").
Where this leads: the `why` now says the course "uses the relativity of simultaneity (lesson 8.1) to show why the two effects do not contradict each other", instead of "adds".

Checks: `npm run calc:test -- -k time-dilation-and-length-contraction` 42 passed; `npm run content:check` 0 error(s), no message for this page. Status set to reviewed.
