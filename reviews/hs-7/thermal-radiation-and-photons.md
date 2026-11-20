---
page: content/year-0/hs-7/thermal-radiation-and-photons.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l15/ (slides PDF read, all 26 slides L15B1–L15B26; PDF page 23 is blank, so PDF pages 24–28 are slides 23–26)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-05 (read; CCBY row 277 in docs/siyavula-licences.tsv; footer "Creative Commons Attribution License")
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes1/ (PDF read, Sec. 3 "Loss of Determinism", printed pp. 5–6)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (Lecture 16 transcript read, printed pp. 20–23)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (Lecture 18 transcript read, printed pp. 10–16)
  - https://ocw.mit.edu/courses/8-901-astrophysics-i-spring-2006/9d2060b793ec3a34dacd02dd885b3044_ps2.pdf (read; not cited by the page, found while checking Wien's constant, see item 1)
  - public/phet/blackbody-spectrum_1.0.28_en.html (UI strings read locally)
verdict: needs-changes
---

# Review: Thermal radiation and Planck's photons

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formula "Wien's displacement law", `cite="mit" at="slide 22 (...)"`; calcs `wien-constant`, `wien-peak-equation` and every `b / T` entry | 8.044 slide L15B22 finds the maximum of u(ω, T) **per unit frequency**: ħω/kT ≈ 2.82. It gives no wavelength form and no 2.9 × 10⁻³ m K. MIT 8.901 Astrophysics I (Spring 2006), Problem Set 2, problem 1(c), states the Wien displacement law per unit wavelength, "T λ_max = 0.29 cm K" (= 2.9 × 10⁻³ m K), and names the equation 5(1 − e^(−y)) − y = 0, which is exactly the calcs entry `wien-peak-equation`. The problem set has no "rights reserved" or "courtesy" notice. | Constant cited to a slide that does not show it, with a long explanation in `at` | Add a reference, e.g. `wien: {title: "MIT 8.901 Astrophysics I (Spring 2006), Problem Set 2", url: https://ocw.mit.edu/courses/8-901-astrophysics-i-spring-2006/9d2060b793ec3a34dacd02dd885b3044_ps2.pdf, location: "Problem 1(c): T λ_max = 0.29 cm K; 1(b): σ = 5.67 × 10⁻⁵ erg cm⁻² s⁻¹ K⁻⁴"}`, and cite the formula as `cite="wien" at="Problem 1(c) (0.29 cm K = 2.9 × 10⁻³ m K)"`. Point the calcs `source` of `wien-constant`, `wien-peak-equation` and the `b / T` entries there too. The page's own derivation (4.965) is correct and can stay in calcs. The current slide-22 citation is honest but should then go, or become "compare 8.044 slide 22 for the peak per unit frequency". |
| 2 | error | calcs `electronvolt` (`source: {cite: reading1, at: 'Sec. 11.5'}`) | Siyavula 11.5 gives h = 6.63 × 10⁻³⁴ J·s, E = hf and E = hc/λ, but never mentions the electronvolt. | Electronvolt fact sourced to Siyavula 11.5 | Source it to lesson 6.4 (as the prose does), or to Siyavula Grade 12, 12.2 "Units of energy" (already used by lesson 7.3). `origin: page-own` or the right cite. |
| 3 | warning | calcs `boltzmann-constant` (`cite: mit, at: 'slide 22'`) | Slide 22 uses k in ħω/kT but gives no value of k_B. Slide 2 gives h/k_B ≈ 5 × 10⁻¹¹ K s only. | k_B = 1.38 × 10⁻²³ J/K "from" slide 22 | Mark it as a standard constant (the block's constant list) or cite a source with the value (e.g. NIST CODATA, allowed for values). |
| 4 | warning | Plot, slider `T` min 3500 | With the curves scaled to 1 at the 6000 K peak, the 3500 K peak is (3500/6000)⁵ ≈ 0.068, i.e. 3 % of the 0–2.4 axis: practically a flat line. The text right below says "At 3500 K most of the radiation is infrared", which the reader cannot see on the graph. (The 7000 K peak, 2.16, fits within 2.4; the 5000 K dashed peak is 0.40.) | — | Either raise the minimum to about 4500 K (peak 0.24, at 644 nm, still red), and change the sentence to "At 4500 K the peak is at the red end", or add to the caption that a cool body's curve is so low that it nearly vanishes on this scale, because the peak height grows as T⁵. The scaling itself (142.3, 484 nm, hc/k = 1.4413 × 10⁷ nm K) is correct. |
| 5 | info | "A disaster for classical physics" and "Planck's packets of energy" | Guth L16 pp. 21–22 (read): standing waves in a box as harmonic oscillators, kT each, no limit to short wavelengths ("Jean's Paradox"), saved by quantised energy nhν, "either put in a large amount of energy or none at all". | The page follows this closely and correctly, but `guth16` is never cited in the body (only listed in `references`). | Add a short pointer in the text, e.g. "(Guth's 8.286 Lecture 16 tells this story, transcript pp. 21–22)". Note: Guth calls it "Jeans's paradox"; the page's "ultraviolet catastrophe ... later called" is correct (the name is Ehrenfest's, 1911). Historically the equal-share (Rayleigh–Jeans) result was spelled out in 1900–1905, at the same time as or after Planck; "By the end of the 1800s ... physicists tried" plus "later called" is an acceptable simplification at this level. |
| 6 | info | "Around 1900 Max Planck found a formula" | No cited source gives the date; 8.04 notes 1 p. 5 places blackbody experiments "towards the end of the nineteenth century" and names Planck. | "Around 1900" | Standard and correct (Planck presented the formula and the quanta in October and December 1900). Can stay; "In 1900" would also be correct. |
| 7 | info | "Black bodies", "MIT's slides show this with two ovens joined through a filter" | 8.044 slides 5–6: two cavities A and B joined by a frequency or polarisation filter; conclusion u(ω, T) independent of shape and wall material. | Correct | Optionally add "(slides 5–6)". |
| 8 | info | Coverage (CP 14.7 in the §4 row) | Radiation as heat transfer normally includes emissivity and net exchange with the surroundings, P_net = σεA(T⁴ − T_s⁴). | Only P = σAT⁴, plus "a real surface radiates a little less" and a qualitative absorb/emit balance | Fine for VWO (Binas gives P = σAT⁴; emissivity is not core). Optional one sentence: an object at the same temperature as its surroundings absorbs as much as it emits, so net power is zero. |

## Formulas and citations
- **Wien's displacement law** (`cite="mit" at="slide 22 ..."`): see item 1. Physics and constant correct: hc/(4.965 k) = 2.903 × 10⁻³ m K with the page's constants.
- **Stefan–Boltzmann law** (`cite="mit" at="slide 15"`): slide L15B15 "STEFAN-BOLTZMANN LAW", σ = 56.7 × 10⁻⁹ W/m²K⁴. Correct slide and value (the slide writes e(T) = σT⁴ per unit area; the page multiplies by A, standard).
- **Planck's constant** (`cite="reading1" at="Sec. 11.5"`): Siyavula 11.5 gives h = 6,63 × 10⁻³⁴ J·s. Correct.
- **Energy of a photon** (`cite="reading1" at="Sec. 11.5"`): Siyavula 11.5 gives E = hf and E = hc/λ. Correct.
- `reading2` (8.04 notes 1, Sec. 3, pp. 5–6): checked; p. 5 has Einstein 1905, packets, "later given the name photons", E = hν, and "more photons" for a brighter beam of the same colour. Supports the Einstein paragraph and "more photons, not bigger ones".
- `guth16` pp. 21–22: correct printed pages (the PDF page and printed footer agree). See item 5.
- `guth18` pp. 11–15: correct. p. 11: 2.726 K; pp. 11–13: balloon and COBE measurements; p. 15: "this extremely accurately black-body curve proves" thermal equilibrium in the early universe. Supports the callout ("one of the strongest pieces of evidence that the universe was once hot and dense").
- `leadsTo`: 8.286 Lecture 16 is `black-body-radiation` (lecture 16) and 8.044 Lecture 15 is `thermal-radiation` (lecture 15): both match the §4 row and the topic.

## Arithmetic and answer checks
All recomputed by hand with h = 6.63 × 10⁻³⁴, c = 3.00 × 10⁸, k = 1.38 × 10⁻²³, e = 1.6 × 10⁻¹⁹, b = 2.9 × 10⁻³, σ = 5.67 × 10⁻⁸; `npm run calc:test -k` for both pages: all entries pass.
- Skin: 307 K; 2.9e-3/307 = 9.45 × 10⁻⁶ m → 9.4 μm ✓; 9.4 μm / 700 nm = 13.4 ("more than ten times") ✓.
- Bulb: 2.9e-3/2900 = 1.0 × 10⁻⁶ m = 1000 nm ✓.
- Hot plate: 600⁴ = 1.296 × 10¹¹; × 5.67e-8 × 0.020 = 146.97 W → 147 W ✓; peak 4.83 μm ("about 5 micrometres") ✓.
- Green laser: hc = 1.989 × 10⁻²⁵ J m; /532 nm = 3.739 × 10⁻¹⁹ J ✓; /1.6e-19 = 2.337 eV → 2.34 ✓; 1.0e-3/3.739e-19 = 2.67 × 10¹⁵ s⁻¹ → 2.7 × 10¹⁵ ✓.
- FM photon: 6.63 × 10⁻²⁶ J ✓; 4.14 × 10⁻⁷ eV ✓; 2.34/4.1e-7 = 5.7 × 10⁶ ("millions") ✓.
- 3500 K peak 829 nm (infrared) ✓; 7000 K peak 414 nm (visible) ✓.
- CMB: 2.9e-3/2.7 = 1.07 × 10⁻³ m → 1.1 mm ✓; T_CMB 2.7 K matches calcs/values.yaml use.
- Plot: hc/k = 1.4413 × 10⁷ nm K ✓; at λ = 484 nm, T = 6000 K, x = 4.963, eˣ − 1 = 142.06, value 1.002 ✓.
- Quiz 0 (thermal radiation): answer 2 ✓; explanation true.
- Quiz 1: 2.9e-3/4.1e-6 = 707 K → 710 K ✓ (answer 1); 434 °C → "about 430 °C" ✓. Distractors 71 K, 1.2 × 10⁻⁸ K (multiplied), 1400 K wrong ✓.
- Quiz 2: 2⁴ = 16, answer 3 ✓.
- Quiz 3: 1.326 × 10⁻¹⁹ J, 0.829 eV → 0.83 eV, answer 0 ✓; 1.3 × 10⁻¹⁹ eV is the joule value with the wrong unit, a good distractor.
- Quiz 4: answer 1 ✓; explanation true.
- Calcs quiz tags use 0-based indices (quiz 1, 2, 3), consistent with the harness (`front["quiz"][int(e["quiz"])]`).

## Only earlier terms
- Accelerating charges radiate: lesson 6.12 (`light-as-an-electromagnetic-wave`) says so ✓. Electronvolt: lesson 6.4 ✓ (prerequisite). c = fλ, 400–700 nm: lesson 5.8 ✓. Standing waves: lesson 5.4 ✓.
- Jiggling particles faster when hotter (4.4 `kinetic-theory`), conduction and convection (4.7), absolute zero and kelvin (4.2 `temperature`), thermal equilibrium: Block 4 is planned but not written (PC 1). `content:check` warns "coming" for `kinetic-theory` and `conduction-and-convection`; their lesson-list titles cover the ideas. `temperature` (kelvin, absolute zero) is used but not a prerequisite: consider adding it.
- "Energy shared out evenly" (equipartition) is explained in place ✓. "Spectrum" is used as in lesson 5.8 ✓.

## Coverage
- §4 row 7.2 (P 21.1; CP 14.7, 29.1, 29.3; A 5.2): thermal radiation, black body, spectrum shape, Wien, Stefan–Boltzmann, ultraviolet catastrophe, Planck's quanta, photon energy E = hf = hc/λ in J and eV, photon numbers: all covered at VWO level. Missing only emissivity and net radiative exchange (item 8), which are not essential at this level.

## Where this leads
- Both targets exist and match the §4 row and the topic. `towards: false` is right (7.11 is the block's last lesson). The `why` texts are correct (8.286 L16: energy density ∝ T⁴, photon number density ∝ T³; 8.044 L15: T⁴ from thermodynamics, modes in a box, classical divergence, Planck spectrum, all on slides 13–22).

## Licensing and AI terms
- No sentence copied from Siyavula, the 8.044 slides, the 8.04 notes or Guth's transcripts; the photon-energy wording is a standard phrase.
- Worked examples (skin 34 °C, bulb 2900 K, hot plate, 532 nm laser, 100 MHz radio) and quiz items are not Siyavula's (its examples: 3 × 10¹⁸ Hz, 200 nm; exercises: 10¹² Hz, 600 nm).
- The plot is generated from Planck's formula; no figure reused. The 8.044 slides and Siyavula 11.5 carry no "courtesy" or "rights reserved" items used by the page.
- Siyavula URL is a CCBY row (277). No Siyavula branding. No NASA, ESO or forbidden source used. PhET used through the component.
- PhET "Try it": the sim has a temperature slider, presets (Sun, Light Bulb, Earth, Sirius A strings present) and "Graph Values" / intensity; the instructions fit.

## Notes
- `content:check` passes for this page (only the two "coming" warnings and "no review file yet"); `calc:test` passes.
- Symbol meanings (σ, T, f, P, A, h, E, λ_max) are scoped to the page and correct; f's meaning rightly warns that T is a temperature here.
- Writer's open points: Wien source, see item 1 (MIT 8.901 PS2 1(c) is the allowed source that states it directly); plot scaling, item 4; "around 1900", item 6 (fine); Guth L16 pp. 21–22 and L18 pp. 11–15 are correct printed pages.

## Resolution (2026-11-20, by the page author)
1. Fixed. MIT 8.901 PS2 downloaded and read (2 pages; no "rights reserved" or "courtesy" notice): problem 1(c) gives T λ_max = 0.29 cm K and the peak equation 5(1 − e^(−y)) − y = 0. Added reference `wien` and cited the formula as `cite="wien" at="Problem 1(c): 0.29 cm K = 2.9 × 10⁻³ m K, from the peak condition 5(1 − e^(−y)) = y"`; the slide-22 citation is gone. Calcs `wien-constant`, `wien-peak-equation` (shown text now the peak condition in the citation) and every Wien entry (b / T, skin, bulb, plate, quiz 1, CMB) now cite `wien`. The plot entries (normalisation, hc/k) still cite slide 22, which shows Planck's spectrum.
2. Fixed. Siyavula Grade 12, 12.2 "Units of energy" (CCBY row 521) read: 1 eV = 1,6 × 10⁻¹⁹ J. Added it as reference `evunit`; calcs `electronvolt` now cites it.
3. Fixed. Added reference `nist-k` (NIST CODATA, k = 1.380 649 × 10⁻²³ J/K, exact; read 2026-11-20); calcs `boltzmann-constant` cites it, rounded by the page.
4. Fixed. Slider minimum raised to 4500 K; the sentence now reads "At 4500 K the peak lies at the red end of the visible band; at 7000 K the peak is in the visible band, near its violet end." Calcs `plot-peak-3500` replaced by `plot-peak-4500` (644 nm).
5. Fixed: added "(Guth tells this story in his 8.286 Lecture 16, transcript pp. 21–22.)" at the end of "A disaster for classical physics".
6. Changed to "In 1900 Max Planck found".
7. Added "slides 5–6".
8. Left as is (optional; emissivity is not core at this level).

Checks: `npm run calc:test -- -k thermal-radiation-and-photons` 31 passed; `npm run content:check` 0 errors, only the two "coming" prerequisite warnings for this page. Status set to reviewed.
