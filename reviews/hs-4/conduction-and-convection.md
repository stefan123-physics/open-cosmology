---
page: content/year-0/hs-4/conduction-and-convection.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec04/ (read: MIT8_21s09_lec04.pdf, slides 1–18; only notices are "Photo courtesy of ... on Flickr" on slide 7, photos the page does not use)
  - https://ocw.mit.edu/courses/16-050-thermal-energy-fall-2002/resources/10_part3/ (read: 10_part3.pdf, Sec. 1.0, 2.0 with Table 2.1, 2.2 with Eqs. (2.19)–(2.20), 3.0; no rights-reserved or exclusion notice)
  - https://ocw.mit.edu/courses/4-42j-fundamentals-of-energy-in-buildings-fall-2010/resources/mit4_42jf10_heat/ (read: MIT4_42JF10_heat.pdf, Table 2.1 and the single-glazed-window example, Eqs. (2.16)–(2.18); first page "© 1991, 1997, 2004, 2005, 2010" Leon R. Glicksman, no "All rights reserved", no "excluded from our Creative Commons license"; resource page licence CC BY-NC-SA 4.0 with OCW's terms footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/states-of-matter-and-the-kinetic-molecular-theory/03-states-of-matter-and-the-kinetic-molecular-theory-02 (read: Table 3.1; CC BY footer; CCBY row 351 in docs/siyavula-licences.tsv; no OpenStax)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02 (CCBY row 441; Charles' law content confirmed in reviews/hs-4/temperature.md, same day; not re-read)
  - https://science.nasa.gov/sun/facts/ (read: "in the convection zone, the temperature drops below 3.5 million °F (2 million °C)"; "large bubbles of hot plasma (a soup of ionized atoms) move upward toward the photosphere"; last updated Sep 17, 2026)
  - https://science.nasa.gov/earth/earth-observatory/deep-freeze-and-sea-breeze-changing-land-and-weather-in-florida/ (read: published 17 May 2005, last updated 25 Nov 2025; sea breeze sentences; nothing on a night-time land breeze)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read, for leadsTo)
  - Later lessons that rely on 4.7: hs-7/thermal-radiation-and-photons (7.2), hs-8/how-stars-shine (8.5); content/year-3/8.044/first-law.mdx; content/year-4/8.08/viscosity-conduction-boltzmann-equation.mdx; content/year-1/18.02/diffusion-equation.mdx
verdict: pass-with-notes
---

# Review: Conduction and convection (4.7)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Frontmatter `summary`: "about 400 W/(m K) for copper" | 16.050 Table 2.1: Cu 390 | Table, flashcard 3 and Summary: 390 | Write "about 390 W/(m K)" in the summary too. |
| 2 | warning | "Three ways for heat to travel", radiation bullet: "carried by light, mostly infrared" | — | "infrared" is first introduced in lesson 5.8 (electromagnetic spectrum) | Term used before its lesson. It is a common word and the bullet defers radiation to 7.2, so not counted as an error, but gloss it: "mostly infrared, light our eyes cannot see (lesson 5.8)". |
| 3 | warning | "Layers in series and insulation": "the resistances simply add, as for electrical resistors in series (Block 6)" | 16.050 Sec. 2.2 and 8.21 slide 12 make this analogy for readers who know circuits | Analogy to something the reader has not met | Turn it round: "Block 6 will show that electrical resistors in series add in the same way." |
| 4 | warning | `leadsTo` 8.044 lecture 6 | 8.044 L6 (first law, heat as non-work energy change) has nothing on conduction or convection | The `why` is about the first law, not about this lesson's topic | Allowed by the §4 row (`8-044/first-law`), but the link is weak. Add `{ course: "8.08", lecture: 9 }` (content/year-4/8.08/viscosity-conduction-boltzmann-equation.mdx: heat conduction and thermal conductivity from kinetic theory), and optionally `18.02` lecture 29 (diffusion/heat equation from Fourier's law). |
| 5 | info | Formula "Heat conduction through a layer", `at="slide 10: ... qA = k(T_L − T_0)A/L"` | 8.21 slide 10: "qA = −k(T_L − T_0)A/L" (with a minus sign) | Sign dropped in the `at` text and the formula | Physics fine (P is the size of the flow, from hot to cold, as the page says), but quote the slide correctly: "qA = −k(T_L − T_0)A/L; here the size of the flow". |
| 6 | info | Convection examples: "At night the land cools faster and the flow can turn around"; "a freezer compartment sits at the top of an old fridge"; "the wind makes you feel colder on a cold day" (forced convection); "Despite its name, a radiator spreads much of its heat by convection"; gliders and birds in thermals; snow mostly air | NASA *Deep Freeze and Sea Breeze* covers only the daytime sea breeze; no cited source has the others | Uncited | Writer-flagged. All are standard and correct; acceptable as the page's own explanations. Keep the NASA citation directly after the sea-breeze sentence (as now), so it is not read as covering the night reversal. |
| 7 | info | k table mixes three MIT sources | 16.050 Table 2.1: Ag 420, Cu 390, Al 200, steel 50, H₂O 0.6, air 0.026; 8.21 slide 11: air 0.026, fiberglass 0.043, hard wood 0.16, concrete 1.4, steel 52; 4.42J: glass 0.5 BTU/(hr ft °F) | Table with a note saying which value comes from which source | Writer-flagged. Every value matches its stated source; the conversion 0.5 × 1.7307 = 0.865 → 0.87 W/(m K) is right. The sources differ slightly (steel 50 vs 52, wood 0.2 in 16.050 vs hard wood 0.16 in 8.21), well within "about". Fine. |
| 8 | info | "Most liquids also expand a little when warmed" | — | Uncited | True. Water between 0 and 4 °C is the exception; one bracket would pre-empt a sharp student, not required. |
| 9 | info | Quiz 1: "If the temperatures stay the same" | — | Halving relies on the temperature difference across the insulation staying the same | Write "If the temperatures of the two faces stay the same" so the still-air films (explained in the window example) do not make the answer only approximate. |
| 10 | info | Quiz 4 explanation (metal bench feels colder) | — | Explained by conductivity alone | Correct at VWO level (strictly the contact temperature depends on √(kρc), but conductivity dominates here). No change. |

## Formulas and citations
- Three modes (8.21 slide 8; 16.050 Sec. 1.0) ✓: slide 8 lists conduction "between adjacent molecules", example "metal spoon in cup of hot coffee"; convection "through flow of liquid/gas", example "air rising over hot blacktop parking lot"; radiation. 16.050: radiation "through space without the necessary presence of matter" ✓. The page's spoon and car-park examples follow slide 8's examples in other words (fine).
- P = kAΔT/d (`mit`, slide 10) ✓ (see row 5 for the sign).
- Fourier 1807 (16.050 Sec. 2.0: "the generalization (made by Fourier in 1807)") ✓.
- R = d/(kA), P = ΔT/R (`reading1`, Eq. (2.19): "R = L/kA, the thermal resistance") ✓; series P = ΔT/(R₁ + R₂) (Eq. (2.20), composite slab) ✓. Also on 8.21 slide 12 ✓.
- Window: 16.050 Sec. 3.0 "a thin 'film' of slowly moving fluid through which most of the temperature difference occurs" ✓; 4.42J window example: convection inside and outside in series with the glass, L/k_g = 1/48 against 1/h_i + 1/h_e ≈ 1.33 (US units), so the glass is about 1.5% of the resistance ✓ ("only a small part of the barrier"). The page's 0.50 K out of 20 K for 4 mm glass is consistent with typical film resistances (≈ 0.17 m² K/W total) ✓.
- ρ₂/ρ₁ = T₁/T₂ (`reading4`, Charles' law with ρ = m/V) ✓, correct derivation.
- Siyavula Gr 10 Table 3.1: solids "tightly packed", "vibrate around a fixed point"; gases "large spaces" ✓.
- NASA *Sun: Facts*: convection zone below 2 million °C, rising bubbles of plasma toward the photosphere ✓; "first travels outward as radiation" ✓ (radiative zone). Phrasing "(NASA, *Sun: Facts*)" is a citation by title, not "according to NASA" ✓.
- NASA Earth Observatory: "The sea breeze occurs each day as the Sun heats the land more than it heats the ocean. The air above the land warms and rises, and cooler air ... flows inland." ✓ (paraphrased, not copied).
- Uncited but standard and correct: free electrons make metals good conductors (4.42J notes only that electrical conductors have the highest k), liquids and gases conduct poorly, trapped air in insulators, row 6 items.

## Arithmetic and answer checks
Recomputed independently; `pytest -k "heat-and-specific-heat or conduction-and-convection"`: 73 passed.
- Ratios: 390/0.026 = 15 000 ✓; 0.87/0.043 = 20.2 → "twenty" ✓; 50/0.16 = 312 → "hundreds of times" ✓.
- Window: A = 1.8 m² ✓; 0.87 × 1.8 × 0.50/0.0040 = 195.75 → 196 W ✓ ("two old light bulbs" of 100 W ✓); with 20 K: 7830 → 7.8 × 10³ W ✓.
- Wall: 1.4 × 12 × 18/0.15 = 2016 → 2.0 × 10³ W ✓; × 24 h = 48.4 → 48 kWh ✓; R₁ = 8.93 × 10⁻³ K/W ✓; R₂ = 0.1550 K/W ✓; sum 0.1640 ✓; P = 109.8 → 110 W ✓; 2016/109.8 = 18.4 → "about 18 times" ✓; 2.64 → 2.6 kWh ✓; drops 0.98 K and 17.0 K (sum 18) ✓.
- Plot caption: 0.16 × 20/0.05 = 64 W ✓; 0.043 × 20/0.05 = 17.2 → 17 W ✓; at d = 0.02 m and ΔT = 30 K wood reaches 240 W, inside the 250 W range ✓.
- Rising air: 1.20 × 293/308 = 1.1416 → 1.14 kg/m³ ✓; 4.9% → "about 5%" ✓; 0.0584 kg ✓; × 9.81 = 0.573 → 0.57 N ✓. 1.20 kg/m³ for air at 20 °C is right (1.204) ✓.
- Quiz 0: 200 × 0.020 × 4.0/0.0040 = 4000 W ✓; distractors 16 (no d), 2.0 × 10⁵ (no A), 0.064 (× d) all as stated ✓. Answer 0 ✓.
- Quiz 1: 150 W ✓ (row 9). Answer 0 ✓.
- Quizzes 2–4: answers 0 correct, others wrong ✓; explanations true.
- Flashcards: all true; card 3 values match the table ✓.
- Calcs: every number on the page has an entry; the k values are `kind: fact` with the right source keys (reading1 = 16.050, reading2 = 4.42J, mit = 8.21 slide 11) ✓.

## Only earlier terms
- temperature, heat, thermal energy (4.2 ✓, heat made precise in 4.5 ✓), particle picture and temperature as motion (4.4 ✓), density ρ = m/V and Archimedes (4.1 ✓), Charles' law (4.3 ✓), power and kWh (3.5 ✓), rearranging formulas (0.x ✓).
- Before their lessons: "infrared" (5.8; row 2), electrical resistors in series (Block 6; row 3), "photons" and radiation (7.2, explicitly deferred ✓), free electrons and electric current (Block 6, explicitly flagged ✓), "plasma (a gas of electrically charged particles)" (glossed ✓; charge itself is Block 6, as other High School lessons also say in passing), nuclear fusion (8.5, flagged ✓), photosphere (defined in 4.2 ✓).
- Thermal conductivity, thermal resistance, convection current, natural and forced convection: defined on the page.

## Coverage
- §4 row 4.7: conduction and convection, no PhET in §4 (§3.5 notes energy-forms-and-changes could fit, but 4.5 already uses it; fine to leave none), leads to `8-044/first-law`.
- Covered at VWO level: the three modes, particle picture, the conduction law P = kAΔT/d (Dutch textbooks write λ for k; mentioning "also written λ" would help Dutch students, info), insulation and layers in series, convection and its driving density difference, natural and forced convection, everyday and solar examples. Radiation is moved to 7.2 as §4 says ✓.
- Consistency with later lessons ✓: 7.2 says "Thermal radiation is the third way of moving heat, next to conduction and convection (lesson 4.7)" and 4.7 names all three and defers radiation to 7.2 ✓; 8.5 says convection-zone bubbles rise "like water boiling in a pan (lesson 4.7)", and 4.7 explains convection with the pan of water and the Sun's convection zone ✓ (8.5 says "2 million kelvin", 4.7 "2 million °C": the same to this precision).

## Where this leads
- `8.044` lecture 6 → content/year-3/8.044/first-law.mdx exists ✓; the `why` matches L6B7–L6B8 ✓, but the topic match is weak (row 4).
- `towards: false` ✓. No cosmology callout on this page; not required for a non-final lesson.

## Licensing and AI terms
- MIT 8.21, 16.050 and 4.42J: CC BY-NC-SA on OCW. 4.42J carries the author's copyright line "© 1991 ... 2010" but no "All rights reserved" and no exclusion notice, so it is under OCW's licence ✓. 8.21's only "courtesy" items are three Flickr photos on slide 7, not used ✓.
- Siyavula pages: CC BY footer, CCBY rows, no OpenStax ✓; no branding ✓.
- NASA: cited by title, no insignia, no "according to NASA" ✓.
- No copied sentences (NASA's sea-breeze sentence and 8.21's examples are reworded) ✓. Worked examples are the page's own: 8.21 slide 11/12 use 0.2 m concrete at 20/0 °C over 450 m² and 3 cm wood + 0.2 m fibreglass; 4.42J's window compares glass with plastic in US units; the page's window (1.8 m², 4 mm, 0.50 K), wall (12 m², 0.15 m concrete + 0.080 m fibre, 21/3 °C), pan and rising-air numbers are different ✓. No overlap with 4.5 or 6.8 examples ✓.
- Plot generated from a formula ✓. No forbidden source ✓. No em dashes ✓. Units in prose mostly in maths; "2 million °C" and "15 000 times" in prose are fine.

## Notes
- Writer flags: mixed k table (row 7, fine and properly attributed); uncited land breeze, freezer and wind-chill claims (row 6, true, acceptable).
- No errors found. Verdict pass-with-notes; rows 1–4 are worth fixing.

## Resolution (2026-11-21, by the page author)
- Row 1: summary now says about 390 W/(m K) for copper.
- Row 2: "infrared" glossed as light our eyes cannot see, with a pointer to lesson 5.8.
- Row 3: the analogy is turned round ("Block 6 will show that electrical resistors in series add in the same way").
- Row 4: added `leadsTo` 8.08 lecture 9 (heat conduction from kinetic theory) and 18.02 lecture 29 (Fourier's law to the diffusion equation).
- Row 5: the `at` text quotes slide 10 with its minus sign and explains that P is the size of the flow.
- Row 8: bracket on water between 0 and 4 °C added.
- Row 9: quiz 1 now says "the temperatures of the two faces of the insulation".
- Coverage: "Dutch textbooks write it as λ" added after the thermal conductivity.
- Rows 6, 7, 10: no change, as the review advises. Status set to reviewed.
