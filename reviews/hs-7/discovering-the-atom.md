---
page: content/year-0/hs-7/discovering-the-atom.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-02 (read; CCBY row 355 in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-03 (read; CCBY row 356)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (PDF read, Secs. 8.5 and 8.6.1; no rights-reserved or courtesy notice)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (PDF read, Eqs. 3.1.12 and 3.3.5)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (PDF read, Sec. 13.8, printed p. 22)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0 (read: 5.29177210544 × 10⁻¹¹ m)
  - https://physics.nist.gov/cgi-bin/cuu/Value?rp (read: 8.4075 × 10⁻¹⁶ m)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture12_part1/ (slides read, to check the leadsTo target and slide 6)
  - public/phet/rutherford-scattering_1.2.2_en.html (UI strings read locally)
verdict: pass-with-notes
---

# Review: Discovering the atom and its nucleus

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "How empty is an atom?", quiz 4, summary | (No cited source gives a nuclear density.) The textbook density of nuclear matter is about 2.3 × 10¹⁷ kg/m³ (m_u / (4/3 π (1.2 fm)³)); the page's 7 × 10¹⁷ is a single proton's mass divided by the sphere of its rms charge radius. | "nuclear matter has a density of about 7 × 10¹⁷ kg/m³" | Call the computed value "the density of a proton" and say nuclear matter in general is "about 10¹⁷ to 10¹⁸ kg/m³" (or "a few × 10¹⁷"). Quiz 4 still works: the answer is "about 10¹² kg" either way; you could phrase the choices as orders of magnitude. |
| 2 | warning | "Thomson finds the electron", worked example and flashcard "How Thomson measured e/m" | 8.02T Sec. 8.6.1: Thomson used the velocity selector v = E/B (8.6.3) **with the accelerating voltage** V, giving e/m = E²/(2VB²) (8.6.4). Historically he measured deflections, not a full circle. | The circle method (v = E/B, then r = m_e v/(eB) with E switched off) is presented as "His trick" and as how Thomson measured e/m. | Say that this is "a modern classroom version of Thomson's measurement" (the formulas are fine and both are cited correctly to 8.5.2 and 8.6.3), and reword the flashcard front, e.g. "Measuring e/m with two fields". |
| 3 | warning | "Rutherford's gold-foil experiment", "What was seen" | Siyavula 4.3 says only that some particles were "slightly deflected" (path B); no cited source mentions large angles or particles bouncing back, or a rate. | "a few were turned through large angles, and a very few, roughly one in many thousands, came bouncing back" | The physics is right (Geiger and Marsden 1909 reported about 1 in 8000 reflected, from platinum), and it is the key fact of the lesson, so give it a source the site may read: e.g. MIT 8.033 Lecture 13 slide 6 (the gold-foil figure the 8.033 page already reads as "a few bounced back") or another MIT/OpenLearn text; otherwise keep "a very few" and drop the rate. Add a short bracket that the page goes beyond Siyavula's simplified account (Siyavula even says a Thomson atom would give "no deflection"; the page's "at most a tiny change" is the better statement). |
| 4 | warning | Same section | Not in any cited source. Rutherford (1911) gives the Geiger–Marsden gold foil as about 4 × 10⁻⁵ cm thick, i.e. of order a thousand atoms (gold atoms are about 0.29 nm apart). I could not check this against a permitted source; treat as uncertain. | "a gold foil only a few hundred atoms thick" | Use "a gold foil less than a micrometre thick" or "about a thousand atoms thick", or simply "very thin". |
| 5 | info | Worked example "An alpha particle against a gold nucleus", step 3 | r = 4.5 × 10⁻¹⁴ m is a centre-to-centre distance, so it bounds the nucleus' **radius**. | "the gold nucleus must be smaller than about 4.5 × 10⁻¹⁴ m. That is more than two thousand times smaller than the atom (10⁻¹⁰ m)" (compares a radius with a diameter) | "its radius must be less than about 4.5 × 10⁻¹⁴ m, over a thousand times less than the atom's radius". |
| 6 | info | Quiz 4 explanation | 7 × 10¹⁷ × 5.0 × 10⁻⁶ = 3.5 × 10¹² kg | "≈ 3 × 10¹² kg" | Write "about 3.5 × 10¹² kg" (or use the unrounded 6.7 × 10¹⁷, which gives 3.4 × 10¹²). The calcs tolerance of 20% hides this. |
| 7 | info | Callout "When the universe had no atoms" | No cited source. | "after a few hundred thousand years" | Correct (about 380 000 years). Cite the site's 8.286 lesson on recombination / the CMB (e.g. link `/courses/8-286/cmb-spectrum` or the recombination page) or a NASA page by title and URL. |
| 8 | info | Names and dates | Siyavula 4.2 gives Thomson 1897, plum pudding 1904, Rutherford 1911, Bohr's orbits (no year), Democritus. | Adds Geiger and Marsden, Bohr 1913, Dalton "around 1800", "fifth century BC". | All standard and correct; no change needed. |

## Formulas and citations
- `eE = evB ⇒ v = E/B`, cite reading2 at "Sec. 8.6.1, Eq. (8.6.3)": matches 8.02T Ch. 8, Eq. (8.6.3) (printed p. 15). Correct.
- `r = m_e v/(eB)`, cite reading2 at "Eq. (8.5.2)": matches r = mv/(qB), Eq. (8.5.2) (printed p. 13). Correct.
- `U = kQq/r`, cite reading3 at "Eq. (3.3.5), written with k = 1/(4πε₀)": matches U₁₂ = q₁q₂/(4πε₀ r₁₂), Eq. (3.3.5). Correct, and the change of notation is stated.
- `r = kQq/E_k`, cite reading3 at "Eq. (3.3.5) with conservation of energy": the page's own step, labelled as such. Fine.
- `e/m_e = v/(rB)` in the text (not a Formula) combines (8.5.2) and (8.6.3); the reading's location and calcs entry `thomson-e-over-m` name Eq. (8.6.4), which is a different route (E²/(2VB²)). Change the calcs `source.at` to "Eqs. (8.5.2) and (8.6.3)" and the reading location to match (warning, calcs only).
- calcs `me-value` cites reading2 Sec. 8.6.1, which gives e/m (1.758820174 × 10¹¹ C/kg) but not m_e. Point it at the Block 6 constant / lesson 6.1, or label it page-own (info).
- reading1 location "the mass of a hydrogen atom, 1.67 × 10⁻²⁷ kg": confirmed in Siyavula 4.3.
- reading4 (8.02T Sec. 13.8, "Electromagnetic waves are produced when electric charges are accelerated … a charge must radiate energy") supports the radiation argument; it is listed but not cited in-line (the text points to lesson 6.12 instead). Fine.
- NIST values match CODATA 2022 exactly (a₀ = 5.29177210544 × 10⁻¹¹ m, r_p = 8.4075 × 10⁻¹⁶ m).

## Arithmetic and answer checks
All recomputed independently with the stated constants; `npm run calc:test -k hs-7` passes.
- v = 2.0 × 10⁴ / 1.0 × 10⁻³ = 2.0 × 10⁷ m/s; v/c = 0.067 ("about 7%"). OK.
- e/m = 2.0 × 10⁷ / (0.114 × 1.0 × 10⁻³) = 1.754 × 10¹¹ C/kg → 1.75. OK. Consistency: r = m_e v/(eB) = 9.11 × 10⁻³¹ × 2.0 × 10⁷ / (1.6 × 10⁻²²) = 0.1139 m. OK.
- e/m_p = 9.58 × 10⁷ C/kg → 9.6; ratio 1.75 × 10¹¹ / 9.58 × 10⁷ = 1830 ("about 1800"). OK.
- 4 m_p / m_e = 7333 ("more than 7000"; real α mass gives 7294). OK.
- 5.0 MeV = 8.0 × 10⁻¹³ J; kQq = 9.0 × 10⁹ × 158 × 2.56 × 10⁻³⁸ = 3.640 × 10⁻²⁶ J m; r = 4.55 × 10⁻¹⁴ m → 4.5. OK. 10⁻¹⁰ / 4.55 × 10⁻¹⁴ = 2200. OK (see finding 5).
- Plot coefficient 9.0 × 10⁹ × 2 × (1.6 × 10⁻¹⁹)² / 1.6 × 10⁻¹³ / 10⁻¹⁴ = 0.288; point 0.288 × 79/5 = 4.55. Gold at 2 MeV = 11.4 fits the range 0–12. OK.
- 2a₀ = 1.058 × 10⁻¹⁰ m; 2r_p = 1.682 × 10⁻¹⁵ m; ratio 6.29 × 10⁴; (6.3 × 10⁴)⁻³ = 4.0 × 10⁻¹⁵; 1 cm × 6.3 × 10⁴ = 630 m. OK.
- Proton volume 4/3 π (0.84 × 10⁻¹⁵)³ = 2.48 × 10⁻⁴⁵ m³; density 6.7 × 10¹⁷ → "7 × 10¹⁷"; ÷ 1000 = 6.7 × 10¹⁴. OK (see finding 1 for the label).
- Quiz 3 (index 2): 4.5 × 10⁻¹⁴ × 5/8 = 2.81 × 10⁻¹⁴ → 2.8, answer index 2. Correct. Distractors: 7.3 (inverted, 4.55 × 8/5 = 7.28), 4.5 (unchanged), 1.8 (1/E², 4.5 × 25/64 = 1.76). All wrong. OK.
- Quiz 4 (index 3): 3.5 × 10¹² kg, answer "about 3 × 10¹² kg" is the right choice (others 10¹⁸, 10⁶, 3 kg). See finding 6.
- Quizzes 1, 2, 5: marked answers correct, other choices wrong, explanations true.
- Flashcards: all true; "nucleus (a proton) about 1.7 × 10⁻¹⁵ m … some 60 000 times smaller" consistent with 6.3 × 10⁴. The "How Thomson measured e/m" card: see finding 2.

## Only earlier terms
- Electric field and force eE (lesson 6.3 `electric-field`) is used but not listed in `prerequisites`; it is reached through `electric-potential-and-voltage`. Fine (info).
- `density-and-pressure` (4.1) and `conservation-of-energy` (3.4) are planned, not written (content:check warns "coming"); their lesson-list titles cover density and energy conservation. Counts as introduced.
- MeV: introduced in lesson 6.4 (checked). eV, kQq/r, r = mv/(qB), accelerating charges radiate (6.12), centripetal acceleration (1.10): all in the cited earlier lessons (checked).
- Alpha particle, radioactive, nucleus, spectral lines: explained where first used, with forward references to 7.4 and 7.8. Fine.

## Coverage
- §4 row 7.1 (topic "Discovering the atom and its nucleus", PhET rutherford-scattering): covered — Dalton, Thomson's electron and e/m, plum pudding, gold foil, nuclear model, sizes, closest approach, failure of the classical atom. Good VWO level; the closest-approach estimate and e/m are a little above minimum VWO but well scaffolded.
- Not covered (not needed here): Chadwick and the neutron (Siyavula 4.2; lesson 7.7 covers it), Millikan's oil drop (only mentioned as "measured separately").

## Where this leads
- 8.04 Lecture 1 (`key-features-of-quantum-mechanics`): matches the §4 row; the link is general (quantum mechanics as the cure for the unstable atom). Acceptable.
- 8.033 Lecture 13 (`atoms-photons-nuclei`, the added second target): appropriate. Its slides 6–7 show the gold-foil experiment and Bohr orbits, then photons and nuclear binding energy, as the `why` says.
- `towards: false`, correct for the first lesson of the block.

## Licensing and AI terms
- All Siyavula URLs are CCBY rows in docs/siyavula-licences.tsv (rows 355, 356). NIST cited by title and URL. MIT 8.02T chapters carry no "rights reserved" or "courtesy" notice (grep of the extracted text).
- No forbidden source cited or used. No NASA or ESO material.
- No copied sentences found. The one close phrase is "like plums in a pudding (or raisins in a cake)" beside Siyavula's "much like plums in a pudding or raisins in a fruit cake": a standard image, acceptable.
- Worked examples (E = 2.0 × 10⁴ V/m, B = 1.0 × 10⁻³ T; 5.0 MeV α on gold; blueberry scale) and quizzes are not Siyavula's or MIT's own (Siyavula's exercise 4.1 is a matching table; its scale image is a stadium and a pea).
- No figures copied: one generated `<Plot>`, plus the PhET sim (with its attribution component).
- No Siyavula branding.

## Notes
- PhET "Try it" (writer's open point): checked against the strings in `public/phet/rutherford-scattering_1.2.2_en.html`. The sim has two screens, "Rutherford Atom" and "Plum Pudding Atom", a "Traces" checkbox, an alpha-energy slider (both screens) and proton and neutron controls on the Rutherford Atom screen ("adjust … the number of protons and neutrons comprising the atoms in the foil"). The page's description is accurate.
- content:check: 0 errors; warnings only for the two planned prerequisites and the missing review file.

## Resolution (2026-11-20, by the page author)
1. Fixed. The text now says the computed 7 × 10¹⁷ kg/m³ is the density of a proton ("Take the simplest nucleus") and adds that every nucleus lies at about 10¹⁷ to 10¹⁸ kg/m³, heavier nuclei a little less dense. Quiz 4 now starts "A proton has a density of about 7 × 10¹⁷ kg/m³" and asks about a teaspoon of matter this dense. The summary says "a proton has a density of about 7 × 10¹⁷ kg/m³ (nuclear matter in general about 10¹⁷ to 10¹⁸ kg/m³)".
2. Fixed. The text now says Thomson himself measured how far the beam was deflected, and that the crossed-fields-then-circle method shown is "a modern classroom version of his measurement". Flashcard front changed to "Measuring e/m with two fields". calcs thomson-e-over-m now cites Eqs. (8.5.2) and (8.6.3); reading2's location names Eqs. (8.5.2) and (8.6.3) as the ones combined and notes that Thomson's own route, Eq. (8.6.4), uses the accelerating voltage.
3. Fixed. Source found and checked: MIT 8.033 Lecture 13 slides, slide 6 (PDF downloaded and the slide rendered; the figure, "Figure by MIT OCW", shows most alpha particles passing straight through the gold foil, a few turned through large angles and some coming back out on the source side; no rights-reserved notice in the deck). Added as reference mit8033 (figure described in words, not reused). The rate "roughly one in many thousands" was dropped, since the slide gives none; the page keeps "a very few came bouncing back towards the source" and adds a bracket that this goes beyond the simplified Siyavula account, pointing to the MIT slide.
4. Fixed: "a very thin gold foil, less than a micrometre thick".
5. Fixed: step 3 now says the gold nucleus "must have a radius of less than about 4.5 × 10⁻¹⁴ m", "more than a thousand times less than the radius of an atom (about 0.5 × 10⁻¹⁰ m, half of the width 10⁻¹⁰ m)". calcs nucleus-vs-atom updated (0.5 × 10⁻¹⁰ / 4.5 × 10⁻¹⁴ = 1110).
6. Fixed: quiz 4 explanation and all four choices now use 3.5 (7 × 10¹⁷ × 5.0 × 10⁻⁶ = 3.5 × 10¹² kg); calcs quiz-teaspoon expects 3.5e12 kg with tolerance 0.5%.
7. Fixed: the callout now says "about 380 000, as the university course works out in 8.286 Lecture 17", cited as reference mit8286 (Lecture 17 transcript, p. 19, "about 380,000 years", checked against the printed page footer). New calcs fact decoupling-time.
8. calcs me-value now cites a new reference nistMe (NIST CODATA electron mass, as in lesson 6.4), origin later-data. Names and dates: no change, as the review says.

Checks: npm run calc:test -- -k discovering-the-atom: 28 passed. npm run content:check: 0 error(s); for this page only the two "planned but not written yet" prerequisite warnings.
