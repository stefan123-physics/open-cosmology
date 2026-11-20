---
page: content/year-0/hs-5/electromagnetic-spectrum.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-04 (read)
  - https://imagine.gsfc.nasa.gov/science/toolbox/emspectrum1.html (read)
  - https://imagine.gsfc.nasa.gov/science/toolbox/emspectrum2.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read; semimajor axis 0.3844 × 10⁶ km)
  - calcs/hs-5/electromagnetic-spectrum.yaml (read)
  - content/year-0/hs-5/waves.mdx (prerequisite 5.3, read); content/year-0/hs-5/reflection-and-refraction.mdx (5.9, checked for the forward links)
  - content/year-2/8.03/electromagnetic-waves.mdx (leadsTo target, read)
  - public/phet/molecules-and-light_1.5.35_en.html (string table only)
verdict: needs-changes
---

# Review: Light and the electromagnetic spectrum

One error: quiz question 2 calls a 12.2 cm wave "inside the microwave band", but the page's own table (Siyavula Table 11.1) ends the microwave band at 0.1 m, so 12.2 cm is radio there. Everything else checks out: both formulas, every number, the table, the Moon example, the other quiz answers and the citations. The remaining findings are one warning and some notes.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Quiz 2 explanation (microwave oven, 2.45 GHz) | Siyavula Table 11.1: microwaves 10⁵ to 10⁸ nm (0.1 mm to 0.1 m), 3 × 10⁹ to 3 × 10¹² Hz; radio > 10⁸ nm, < 3 × 10⁹ Hz. NASA emspectrum1 counts radio from about 1 cm. The PhET sim's own spectrum window gives microwaves as 10⁻³ to 10⁻¹ m. | "0.122 m, about 12 centimetres: inside the microwave band." | 0.122 m > 0.1 m and 2.45 × 10⁹ Hz < 3 × 10⁹ Hz, so by the page's table this is radio. Either say "just past the border of the microwave band in the table: the borders are agreements, and ovens are always called microwave ovens", which also reinforces the section's point about borders, or choose a different oven-free example. The numbers and the marked answer (0.122 m) are correct. |
| 2 | warning | "Uses and dangers", last paragraph | Siyavula 11.4: "Usually" higher frequency means a higher degree of penetration (the same simplification) | "Roughly, the higher the frequency, the deeper the radiation goes into the body" | False across the whole spectrum: microwaves and radio go deeper into the body than visible light, and visible light goes deeper than ultraviolet (the page itself says microwaves heat food). It holds only from ultraviolet upwards. Write "From ultraviolet upwards, the higher the frequency, the deeper…" |
| 3 | info | "The sky in every band": ultraviolet and X-rays | NASA emspectrum1: "Hot" objects emit UV; hot gases emit X-rays | "the hottest stars"; "clusters of galaxies" | Not in the cited text, but standard and correct (O and B stars and white dwarfs peak in the UV; the gas between the galaxies in a cluster is at 10⁷ to 10⁸ K and is the classic X-ray source). Acceptable without a citation. The same applies to "stars still forming inside dusty clouds" (infrared), "the most violent events" (gamma rays) and the microwave glow (CMB, Block 8). |
| 4 | info | "Visible light and colour" | NASA emspectrum1: "violet, blue, green, yellow, orange, and red light have wavelengths between 400 and 700 nanometers" | Red near 700 nm, then orange, yellow, green and blue, down to violet near 400 nm | Same order, read from the other end. Correct, and consistent with the plot and with 5.9 (dispersion). |
| 5 | info | Radio band in the "sky" list | NASA: radio waves "emitted by stars and gases in space" | "stars and the cool gas between them" | "cool" and "between them" are added. They are correct (the cool gas between the stars is a main radio source), but not in the source. Fine. |
| 6 | info | Atmosphere paragraph, flashcard 4, quiz 5 explanation | NASA: "Radio frequencies, visible light and some ultraviolet light makes it to sea level" | The ozone layer stops "most" of the Sun's ultraviolet; the flashcard and quiz list only radio, visible and some infrared as reaching the ground | The paragraph is consistent with NASA ("most"). The flashcard and quiz explanation leave out the bit of near-UV that reaches the ground, which the page itself relies on for sunburn. Optional: add "(and a little ultraviolet)". |

## Formulas and citations
- `<Formula label="The speed of light in vacuum" tex="c = 3.00 \times 10^{8}\ \text{m/s}" cite="reading1" at="Sec. 11.2" />`: correct. Siyavula 11.2 says "approximately 3 × 10⁸ m·s⁻¹" and that it uses this value for all calculations. The exact 299 792 458 m/s in the text is from NASA emspectrum2 (in the calcs file as `c-exact`, cite nasa2). It is not cited inline, but it is an exact defined value. Info only.
- `<Formula label="The wave equation for light" tex="c = f\lambda" cite="reading1" at="Sec. 11.2" />`: correct. Siyavula 11.2 writes v = f·λ and then replaces v with c. The page's notation (c, f, λ, SI) matches the site; NASA's ν for frequency is not used, which is correct for the site's notation.
- reading2 (11.3): the band order, Table 11.1 ranges and Table 11.2 uses are cited correctly. reading3 (11.4): penetration, ionising damage to DNA, sunscreen partly blocking UV and the ozone layer are all there.
- nasa1: the bands, 400 to 700 nm, radio about 1 cm to 1 km, what is seen in each band, which bands reach the ground, balloons 35 km, rockets for a few minutes, orbit: all there. nasa2: c, λ = c/ν, and the telescope list (Hubble visible, Spitzer infrared, Planck microwave, Chandra X-ray, Fermi gamma) all match its figure caption.
- moon: semimajor axis 0.3844 × 10⁶ km = 3.844 × 10⁸ m, rounded to 3.84 × 10⁸ m. Correct. The semimajor axis is a fair stand-in for "average distance".
- Statements checked against Siyavula: no medium needed, passes through water and air and is slower in a medium (11.2); "Nothing travels faster" and "transverse" are standard and correct; uses (Table 11.2, 11.4 for mobile phones); UV causes sunburn and damages skin and eyes; X-rays image bones; gamma rays sterilise equipment and food (11.4, Table 11.2). All supported.

## Arithmetic and answer checks
Recomputed independently (Python):
- c / v_sound = 3.00 × 10⁸ / 340 = 8.82 × 10⁵: "almost 900 000" is fine (2% off). With 5.5's 343 m/s it is 8.75 × 10⁵, which still reads as "almost 900 000".
- Moon echo: 2 × 3.84 × 10⁸ = 7.68 × 10⁸ m; / 3.00 × 10⁸ = 2.56 s. With the exact c and 3.844 × 10⁸ m: 2.564 s. Correct. (The distance is centre to centre; from the surface it is 0.04 s less. Not worth mentioning at this level.)
- 530 nm = 5.30 × 10⁻⁷ m; f = 3.00 × 10⁸ / 5.30 × 10⁻⁷ = 5.660 × 10¹⁴ Hz. Correct. "more than half a million billion" (> 5 × 10¹⁴): correct.
- 96.0 MHz: λ = 3.00 × 10⁸ / 9.60 × 10⁷ = 3.125 m, printed 3.13 m. Info: this is exactly on a rounding boundary (calc:test passes because |3.125 − 3.13| = 0.004999…), and with the exact c it is 3.12 m. "3.1 m" or "about 3.1 m" would avoid the edge; the car comparison and "half a millionth of a metre" (530 nm ≈ 0.5 × 10⁻⁶ m) are fine.
- Table: 3.00 × 10⁸ / λ for 1 m, 1 cm, 10⁻⁵ m, 500 nm, 100 nm, 5 nm, 10⁻¹² m gives 3.00 × 10⁸, 3.00 × 10¹⁰, 3.00 × 10¹³, 6.00 × 10¹⁴, 3.00 × 10¹⁵, 6.00 × 10¹⁶, 3.00 × 10²⁰ Hz. All correct.
- Writer's point 3: every typical wavelength lies inside its Siyavula range (1 m > 0.1 m; 1 cm in 0.1 mm–0.1 m; 10⁴ nm in 700–10⁵ nm; 500 in 400–700; 100 in 10–400; 5 in 1–10; 10⁻³ nm < 1 nm), and every frequency lies inside Siyavula's frequency range for that band. The borders 10⁵ nm = 0.1 mm and 10⁸ nm = 0.1 m are converted correctly. Consistent.
- Plot: 3000/λ is f in 10¹⁴ Hz for λ in nm (checked). 3000/400 = 7.50 and 3000/700 = 4.2857 (caption 4.29): correct, and they agree with Siyavula's 4.3 to 7.5 × 10¹⁴ Hz. The curve stays inside the y-range (7.89 at 380 nm, 4.17 at 720 nm).
- Quiz 1 (sound from a flare): answer 1 correct. Choices 0, 2 and 3 are wrong as explanations (the Sun does vibrate, as helioseismology shows, so choice 2 is false; the ozone layer does not absorb sound). Info: choice 0 is a hypothetical that would be true if a medium existed (about 14 years at 340 m/s), but it is not the reason. Acceptable.
- Quiz 2: 3.00 × 10⁸ / 2.45 × 10⁹ = 0.1224 m: answer 1 (0.122 m) correct. The other choices are the result × 0.1, × 10 and the product f·c: all wrong. The explanation's band claim is error #1.
- Quiz 3 (increasing wavelength): answer 1 (gamma, UV, visible, microwaves) is the only correct order. Correct.
- Quiz 4: 3.00 × 10⁸ / 6.0 × 10¹³ = 5.0 × 10⁻⁶ m = 5000 nm, in 700 nm–0.1 mm: infrared. Answer 2 correct; the others are wrong.
- Quiz 5 (Chandra): answer 1 correct; the others are false.
- Flashcards 1 to 4: correct (see #6 for card 4).
- Calcs file: every number on the page is covered. Info: `quiz-infrared` has no `quiz: 3` while `quiz-microwave-oven` has `quiz: 1`; add it for consistency. `npm run calc:test` was not run by the reviewer.
- Writer's point 4 (`origin: mit` for values from Siyavula/NASA): `mit` is one of the allowed values in docs/CALC_TESTS_PLAN.md and is used the same way (value from the cited source) in 30 entries across the hs calcs files, so it is acceptable. Info: `moon-distance` is marked `later-data`, but it is not a newer value replacing a source value (Siyavula gives no Moon distance); `mit` (from the cited `moon` reference) or `page-own` fits better. The same goes for `balloon-height` (35 km is quoted straight from nasa1, so `mit`).

## Only earlier terms
- Medium, transverse, wavelength, frequency, period, v = fλ, Hz: lesson 5.3 (written, read). 340 m/s for sound: 5.3. The page correctly contrasts this with 5.3's mechanical waves.
- Scientific notation and powers of ten: 0.1 `powers-of-ten` is planned, not written; its lesson-list title covers the idea. Counted as introduced. nm, MHz and GHz are defined in the text where first used.
- Molecules (Try it, "break molecules apart"): Block 4's "Kinetic theory: temperature is motion" (planned) comes earlier. Fine. DNA, cells, bacteria, ozone layer, radar: everyday words.
- Electric and magnetic fields: only named as coming in Block 6 / lesson 6.12 (`light-as-an-electromagnetic-wave`), not used. Correct.
- Photons: not used. "Why the high-frequency end is so much more harmful … is a question for Block 7" and "The simulation draws the light as small packets; … lesson 7.2" (7.2 is "Thermal radiation and Planck's photons") defer them correctly. Writer's point 1: see Notes.
- Forward links: 5.9 (refraction, and the prism/rainbow, covered there under "Dispersion"), 5.12 (polarization, uses transversality), 6.12 and 7.2 all exist in the lesson list with matching topics. 5.9 reuses this page's 530 nm laser, consistently.
- Galaxies, clusters of galaxies, the "oldest light" (Block 8): plain words or flagged as later. Fine.

## Coverage
- docs/HIGHSCHOOL-PLAN.md §4 row 5.8: light as a wave family sorted by wavelength, c, c = fλ, the bands, visible light; what is waving is deferred to 6.12 (§4 note). All covered.
- Siyavula 11.2 to 11.4: no medium, c, c = fλ, the bands and Table 11.1, uses (Table 11.2), penetration and harm, the ozone layer. All covered. The wave–particle part of 11.2 is left out on purpose (Block 7): right for this order.
- VWO level: correct. Optional: the UVA/UVB distinction (11.4) is left out; not needed here.

## Where this leads
- `{ course: "8.03", lecture: 12 }` = content/year-2/8.03/electromagnetic-waves.mdx, "Electromagnetic waves" (lecture 12): it derives the wave equation for E and B from Maxwell's equations in vacuum and finds that the speed is c = 1/√(μ₀ε₀). The `why` is accurate. `towards: false` is correct (5.8 is not the block's last lesson).

## Licensing and AI terms
- No copied sentences. Closest paraphrases, all reworded: Siyavula 11.2 "Although an electromagnetic wave can travel through empty space, it can also travel through a medium (such as water and air)" vs page "It can also pass through some materials, such as air, water and glass"; NASA "Balloon experiments can reach 35 km above the surface … Rocket flights … only for a few minutes" vs page "balloons reach about 35 km, rockets give a few minutes above the air". The uses list restates Table 11.2 facts in new words.
- Worked examples and quiz are original: the Moon echo, 530 nm green, 96.0 MHz FM, the 2.45 GHz oven and 6.0 × 10¹³ Hz all differ from Siyavula's 4.2 × 10⁻⁷ m (WE1), 200 nm (WE2) and the 400 nm exercise. The table's UV pick is 100 nm, not 200 nm. Info: the plot caption gives f at 400 nm = 7.50 × 10¹⁴ Hz, which is also the answer to Siyavula's 400 nm exercise. It is a band-edge value that Table 11.1 itself prints, not a copied exercise; acceptable.
- No figure copied: the only graph is a generated Plot; the table is a page-own selection with Siyavula's ranges, converted, and cited.
- Siyavula: named only in the citation title, not used as branding. Siyavula's footer licenses the text CC BY; compatible with the page's CC BY-NC-SA 4.0.
- NASA: no images or insignia. Writer's question on "(its average distance, from NASA's Moon Fact Sheet)": this attributes a single data value to the table it comes from. It is a data citation, not a claim that NASA wrote or endorses the page's text, so it is not "according to NASA" phrasing. Acceptable. Optional: drop the parenthetical and rely on the Sources list ("the Moon's average distance, 3.84 × 10⁸ m").
- Nothing from a forbidden source.

## Notes
- Writer's point 1 (PhET `molecules-and-light` 1.5.35): the "Try it" text matches the sim. Its light sources are microwave, infrared, visible and ultraviolet; its molecules include CO, N₂, O₂, CO₂, H₂O, NO₂ and O₃; water and CO₂ vibrate or bend under infrared, ozone breaks apart under ultraviolet, and N₂ and O₂ absorb nothing. "The simulation draws the light as small packets", with the pointer to 7.2, is honest and does not depend on photons. Info: the sim's labels and its screen-reader descriptions say "photon" ("Photon absorbed. Molecule breaks apart."), so a screen-reader user will hear the word. Optional: "(the simulation calls them photons)". The sim's spectrum window also draws its own band borders (microwaves 1 mm to 10 cm, UV 10 to 400 nm), which differ a little from the table; the page's sentence on borders being agreements covers this.
- Writer's point 2: colour order, "hottest stars" and "clusters of galaxies" are correct; see rows 3 and 4.
- Spitzer (ended 2020) and Planck (ended 2013) are no longer observing; "Examples are" does not claim they are, so this is fine.
- No em dashes on the page.

## Resolution (2026-11-20, by the page author)

1. Error, quiz 2 explanation: fixed. It now says 0.122 m (12 cm) lies just past the table's 0.1 m border of the microwave band, yet everyone calls these waves microwaves, so the borders between the bands are agreements, not sharp lines. The marked answer (0.122 m) is unchanged. The calcs entry `quiz-microwave-oven` notes the border.
2. Warning, "Uses and dangers": fixed. The sentence now begins "From ultraviolet upwards, the higher the frequency, the deeper the radiation goes into the body and the more harm it can do".
3. Info (hot stars, galaxy clusters and the other sky examples): no change, as the review says.
4. Info (colour order): no change.
5. Info (radio from cool gas): no change.
6. Info (a little ultraviolet reaches sea level): applied. Flashcard 4 now adds "and a little ultraviolet (enough for sunburn)", the quiz 5 explanation lists "a little ultraviolet" among what reaches the ground, and the Summary line on the atmosphere says the same. The right answer of quiz 5 is unchanged.
Formulas and citations notes: no change needed.
Arithmetic notes: the FM example now reads "(3.00 × 10⁸)/(96.0 × 10⁶) ≈ 3.1 m" instead of 3.13 m (3.125 was on the rounding edge; 3.12 with the exact c); calcs `fm-wavelength` updated to 3.1 m. `moon-distance` and `balloon-height` origins changed from `later-data` to `mit` (both are values taken straight from a cited source: the Moon Fact Sheet reference and nasa1). `quiz: 3` was not added to `quiz-infrared`: the choices of that question are band names (ultraviolet, visible, infrared, microwave), with no numbers to match, so the calc test's quiz rule cannot apply; the value 5.0 × 10⁻⁶ m in the explanation is still checked through `shown`.
Notes, PhET: applied, "(the simulation calls them photons)" added after "small packets" in Try it. The other notes need no change.

Checks: `npm run calc:test -- -k electromagnetic-spectrum`: 31 passed. `npm run content:check`: 0 error(s); the only warning for this page is the planned prerequisite `powers-of-ten` (shown as "coming"). No symbol changes were needed.
