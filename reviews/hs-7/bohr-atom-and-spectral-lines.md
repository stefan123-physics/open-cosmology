---
page: content/year-0/hs-7/bohr-atom-and-spectral-lines.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/optical-phenomena-and-properties-of-matter/12-optical-phenomena-and-properties-of-matter-03 (read; CCBY row 522 in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-02 (read; CCBY row 355)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes22/ (PDF read, printed pp. 1–8)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture12_part1/ (PDF read, all 31 slides; slides 7, 9, 10, 12, 15, 16 viewed as images)
  - https://ocw.mit.edu/courses/8-901-astrophysics-i-spring-2006/9d2060b793ec3a34dacd02dd885b3044_ps2.pdf (read; not cited by the page, see item 5)
  - public/phet/models-of-the-hydrogen-atom_1.0.11_en.html (UI strings read locally)
verdict: needs-changes
---

# Review: The Bohr atom and spectral lines

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Try it" | The bundled sim is the HTML5 version 1.0.11. Its strings have screens "Spectra" and "Energy Levels" and a switch between **Model** and **Experiment** ("In Model mode, there are various models of the hydrogen atom to explore ... In Experiment mode, the atom's structure is a mystery"); light source white or monochromatic; a spectrometer "(photons emitted / nm)". The word "Prediction" does not occur in the file (it was the old Java version's label). | "Switch the simulation to "Prediction" and try the models of the atom one by one." | "Switch the simulation to **Model** and try the models one by one (Billiard Ball, Plum Pudding, Classical Solar System, Bohr, de Broglie, Schrödinger). Fire white light at the atom, watch which photons are absorbed, and compare the spectrometer with the real hydrogen atom in **Experiment** mode." The rest of the paragraph fits the strings. |
| 2 | error | `source.readings[2].location` (8.033 slides) | Slide 7 is a Bohr diagram with n = 1, 2, 3 (not 4) and "ΔE = hν", marked "Image courtesy of Wikipedia" (third-party). Slide 15 is the n = 1–4 orbits around a proton ("Figure by MIT OCW"). Slide 10 (continuous, absorption and emission spectra, "Figure by MIT OCW") and slide 17 (Lyman, Balmer, Paschen series with 656, 486, 434, 410 nm, "Figure by MIT OCW") are correct. | "slide 7: Bohr orbits n = 1, 2, 3, 4 and ΔE = hν" | Write "slide 15: Bohr orbits n = 1 to 4 around a proton; slide 10: ...; slide 17: ...". Do not lean on slide 7: it is a Wikipedia image (CC BY-SA, "courtesy" material). The page uses no figure from it, so this is a citation fix only. |
| 3 | warning | "The energy levels of hydrogen": "Bohr found this from his rules" | No cited source says how Bohr obtained −13.6 eV/n². Historically he needed one more condition (angular momentum in whole multiples of h/2π) besides the three postulates the page lists. | "Bohr found this from his rules" (the rules on the page cannot give it) | E.g. "Bohr obtained this formula by adding one more rule about which orbits are allowed (it fixes their size); we do not need it here. At university the same energies come out of quantum mechanics, as in MIT's 8.04 notes cited here, where 13.6 eV is half of the energy scale 27.2 eV." Standard and correct then, without a new source. |
| 4 | warning | Quiz 1 (n = 4 level) untagged in calcs | The harness matches choices by magnitude (`numbers()` reads digits only, so "−0.85" is read as 0.85). | `level-4` has no `quiz:` tag | Add an entry that computes the magnitude and tag it: `{id: quiz-1-level-4, inputs: {E0: 13.6 eV, n: 4}, formula: E0 / n**2, expected: 0.85 eV, quiz: 1, ...}`. Only choice 0 ("−0.85") matches 0.85 (the others read 3.40, 54.4, 1.51), so the check works. Quiz 2 cannot be tagged on 0.66 (two choices show it); that is fine as it is. |
| 5 | info | Ionisation energy 13.6 eV | 8.04 notes 22 give e²/a₀ ≈ 27.2 eV (p. 4, eq. 2.4) and E = −Z²e²/(2a₀n²) (p. 7, eq. 2.31) but never print "13.6". MIT 8.901 PS2 problem 2 states "The ionization energy of hydrogen is χ₀ = 13.6 eV". | 13.6 eV derived as 27.2/2 | Correct as is (the page says it is half of 27.2 eV). Optionally add the 8.901 problem set as a reference for "ionisation energy 13.6 eV". |
| 6 | info | Balmer table, 4 → 2 computed λ | With the page's constants λ = 1.989 × 10⁻²⁵ / (2.55 × 1.6 × 10⁻¹⁹) = 487.50 nm exactly. | 488 nm | Rounding half up gives 488; correct. If you want to avoid the tie, write "487.5 nm" in the table (calcs tolerance 0.2 % already covers either). Not required. |
| 7 | info | Plot sliders | `u` 2–5 and `l` 1–4 allow "to level" ≥ "from level" (an upward or zero-length line) | Caption speaks of "the jump" and photon energy | Harmless; optionally say in the caption that choosing a higher "to" level shows an absorption, or restrict as you like. |
| 8 | info | Formula "Wavelength of the photon", `at="Sec. 12.3, worked example: E = hc/λ"` | Siyavula 12.3 uses E = hc/λ in "Worked example 4: Absorption". | — | Optionally "Worked example 4 (Absorption)". |

## Formulas and citations
- **hf = E_upper − E_lower** (`cite="mit"` = Siyavula 12.3, "Emission spectra"): Siyavula: the photon's energy "is equal to the energy difference between the two energy levels", ΔE = E_f − E_i, and E = hf. Correct.
- **λ = hc/(E_upper − E_lower)**: from c = fλ (lesson 5.8) and Siyavula 12.3 worked example 4 (E = hc/λ). Correct.
- **E_n = −13.6 eV/n²** (`cite="reading2" at="p. 7, eq. (2.31), with p. 4, eq. (2.4)"`): printed footers checked: eq. (2.4) e²/a₀ ≈ 27.2 eV is on p. 4; eq. (2.31) E = −Z²e²/(2a₀) · 1/n² is on p. 7. Correct, with Z = 1. The page states the 13.6 = 27.2/2 step itself (honest).
- Measured Balmer wavelengths (calcs `reading3`, slide 17): 656, 486, 434, 410 nm on slide 17, "Figure by MIT OCW". Correct; the slide count is right (one slide per PDF page, 31 pages).
- `leadsTo` 8.04 Lecture 23 = `content/year-2/8.04/hydrogen-spectrum.mdx` (lecture 23), as in the §4 row. The `why` (levels from the Schrödinger equation, n² states per level, three quantum numbers) matches 8.04 notes 22 pp. 7–8 (table of states, "highly degenerate", n, l, m).

## Arithmetic and answer checks
All recomputed by hand (h = 6.63 × 10⁻³⁴, c = 3.00 × 10⁸, 1 eV = 1.6 × 10⁻¹⁹ J); `npm run calc:test -k` passes for every entry.
- Levels: −13.6, −3.40, −1.511, −0.850, −0.544, −0.378 eV ✓.
- 3 → 2: 1.889 eV; 3.022 × 10⁻¹⁹ J; f = 4.558 × 10¹⁴ Hz; λ = 6.58 × 10⁻⁷ m = 658 nm ✓ (measured 656.3 nm; the explanation that the difference is rounding is fair; the reduced mass also contributes, not needed here).
- 4 → 2: 2.55 eV, 487.5 nm (item 6); 5 → 2: 2.856 eV → 2.86, 435.3 nm ✓; 6 → 2: 3.022 eV → 3.02, 411.3 nm ✓.
- Series limit to n = 2: 3.40 eV, 365.6 nm → 366 nm ✓ ("just beyond the violet end") ✓.
- Series ranges: Lyman ≥ 10.2 eV (UV) ✓; Balmer 1.89–3.40 eV ✓; Paschen 0.66–1.51 eV (≥ 823 nm, infrared) ✓.
- Absorption example: gaps 10.2, 12.09, 12.75, 13.6 eV ✓; 11.0 eV matches none ✓; 15.0 − 13.6 = 1.4 eV ✓; 6 lines from n = 4 (4·3/2) ✓, including 4 → 2 (blue-green) and 3 → 2 (red) ✓.
- Ionising photon: 2.176 × 10⁻¹⁸ J; λ = 9.14 × 10⁻⁸ m = 91.4 nm ✓ (true value 91.2 nm; rounding).
- Quiz 0: answer 1 ✓. Quiz 1: −13.6/16 = −0.85 eV, answer 0 ✓; explanation's "dividing by 4 gives −3.40 eV, the n = 2 level" ✓. Quiz 2: 0.661 eV, λ = 1.88 × 10⁻⁶ m infrared, answer 0 ✓; choice 1 (same energy, "red") wrong ✓; 12.75 eV is 4 → 1 ✓. Quiz 3: 3.40 eV, answer 0 ✓; distractors 13.6, 10.2, 6.80 wrong ✓. Quiz 4: answer 0 ✓, explanation true.
- Flashcards: values and 91.4 nm ✓.

## Only earlier terms
- Diffraction grating: lesson 5.11 mentions gratings ✓ (not a prerequisite; consider adding `interference-and-diffraction-of-light`). Accelerating charges radiate: lesson 6.12 ✓ (not a prerequisite; consider adding `light-as-an-electromagnetic-wave`). c = fλ and 400–700 nm: lesson 5.8 ✓ (prerequisite). Electronvolt: lessons 6.4 and 7.2 ✓. Photons, E = hf: lesson 7.2 ✓ (prerequisite). Rutherford's atom, ions: lesson 7.1 ✓ (prerequisite).
- "Kinetic energy" (absorption example): Block 3 lesson 3.2, planned on PC 1; counts as introduced.
- Discharge tube, continuous/emission/absorption spectra, energy level, ground and excited state, ionisation energy, series names: all introduced on this page ✓.

## Coverage
- §4 row 7.4 (CP 30.3; A 5.4, 5.5): emission and absorption line spectra, why Rutherford fails, Bohr's postulates, hydrogen levels, energy-level diagram, Lyman/Balmer/Paschen, ionisation, limits of the model: covered at VWO level.
- Not covered: Bohr orbit radii (r_n = n²a₀) and the Rydberg/Balmer formula 1/λ = R(1/n₁² − 1/n₂²). Neither is needed for VWO (E_n = −13.6 eV/n² with ΔE = hf is what VWO uses); fine to leave out. Item 3 is the only place where the missing quantisation rule matters.

## Where this leads
- One target, 8.04 Lecture 23 (`hydrogen-spectrum`), correct topic and matching the §4 row. `towards: false` is right. The cosmology callout (re-ionisation in the hot early universe, then neutral atoms and free light, the CMB) is correct and makes no numerical claim.

## Licensing and AI terms
- No sentence copied. The discharge-tube description paraphrases Siyavula 12.3 ("glass tube with a metal plate at both ends") in different words; fine.
- Worked examples and quiz items are not Siyavula's: its only worked example in 12.3 is an absorption line at 642 nm identified as the 2 ↔ 3 transition; the page's examples go the other way (levels → wavelength) with different numbers.
- No figure reused: the energy-level diagram is a generated Plot. The 8.033 "courtesy of Wikipedia" images (slides 1, 7, 13, 23, 30) are not used; see item 2 for the citation of slide 7.
- Siyavula URLs are CCBY rows (522 and 355). No Siyavula branding. No forbidden source. PhET used through the component (item 1 for the wording).

## Notes
- `content:check` passes for this page (only "no review file yet"); `calc:test` passes.
- Symbols: E_n, E_1, E_2, E_3 meanings were added to the existing site-wide entries whose ids are `newton-error-n`, `newton-error-1` and so on. The id is legacy naming used by many pages and is not shown to readers; adding page-scoped meanings there is correct (one entry per form). E_4 (`E-4`) is spoken "E sub four" while E_1 to E_3 are "E one", "E two"...: an inconsistency in the older entries, not in this page; leave it or harmonise later. E_upper, E_lower, n, f, h, E, c, λ meanings are scoped and correct.
- Writer's open points: quiz 1 tag, item 4 (can be tagged by magnitude); 488 vs 487.5, item 6 (fine); Bohr's derivation, item 3; 8.033 slide numbers, item 2 (slides 10 and 17 right, slide 7 wrong content and third-party; use 15); PhET, item 1.

## Resolution (2026-11-20, by the page author)
1. Fixed. "Try it" now reads: on the "Spectra" screen, switch to Model and try the models one by one (Billiard Ball, Plum Pudding, Classical Solar System, Bohr, de Broglie, Schrödinger), fire white light, and compare the spectrometer with the real hydrogen atom in Experiment mode. Checked in public/phet/models-of-the-hydrogen-atom_1.0.11_en.html: "Prediction" does not occur; "In Model mode", "Experiment", "Spectra", "Energy Levels" and all six model names do.
2. Fixed. The 8.033 reading location now cites slide 15 (Bohr orbits n = 1 to 4 around a proton), slide 10 and slide 17; slide 7 (Wikipedia courtesy image) is no longer cited.
3. Fixed. Now: "Bohr obtained this formula by adding one more rule about which orbits are allowed (it fixes their size); we do not need that rule here. At university the same energies come out of quantum mechanics, ..."
4. Fixed. Added calcs entry `quiz-1-level-4` (13.6 eV / 4² = 0.85 eV, `quiz: 1`); calc:test accepts it. `level-4` keeps the signed value.
5. Done (info): MIT 8.901 Problem Set 2 read (problem 2: "The ionization energy of hydrogen is 13.6 eV"; no rights-reserved or courtesy notice). Added as reference `ps8901`, mentioned in the text after the ionisation energy, and a calcs fact `ionisation-energy-fact` cites it.
6. Not changed (488 nm is the correct rounding of 487.50).
7. Not changed (harmless).
8. Not changed (optional).
Also (Only earlier terms): added prerequisites `interference-and-diffraction-of-light` (gratings) and `light-as-an-electromagnetic-wave` (accelerating charges radiate).

Checks: `npm run calc:test -- -k bohr-atom-and-spectral-lines` 41 passed; `npm run content:check` 0 errors, no warning for this page. Status set to reviewed.
