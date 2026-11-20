---
page: content/year-0/hs-7/the-nucleus.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-04 (read; CC BY footer; CCBY row in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-05 (read; CCBY row)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-02 (read; CCBY row)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-03 (read; CCBY row)
  - MIT 22.02 (Spring 2012) lecture notes Chapter 1, MIT22_02S12_lec_ch1.pdf (read, printed pp. 5-11)
  - MIT 22.02 (Spring 2012) lecture notes Chapter 5, MIT22_02S12_lec_ch5.pdf (read, Sec. 5.1, printed p. 69; not cited by the page, proposed below)
  - NIST CODATA values and NASA Earth Fact Sheet (not re-fetched; values checked against the stored CODATA 2022 figures)
verdict: needs-changes
---

# Review: The nucleus: protons, neutrons, isotopes (7.7)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Section "Atomic mass units and the missing mass", worked example "The binding energy of helium-4", quiz 4, last flashcard, summary | docs/HIGHSCHOOL-PLAN.md §4: binding energy belongs to 8.4 "Binding energy, fission and fusion", and the plan (line after the Block 8 table) puts special relativity at the start of Block 8 *because* binding energy needs E = mc² first | Teaches mass defect and binding energy with E = Δm c², with a forward pointer "Einstein's relation, which Block 8 explains (lesson 8.3)" | E = mc² is used before it is introduced, and the content duplicates 8.4. Either keep only a qualitative sentence (a nucleus weighs a little less than its parts; lesson 8.4 explains why) and move the helium-4 example, quiz 4 and the flashcard to 8.4, or get the owner's decision to keep it here and record it in the plan. |
| 2 | error | Worked example "The binding energy of helium-4", step "Compare" | 22.02 p. 7 defines the separation energies S_n, S_p (energy to remove one nucleon) separately from B/A | "Freeing a nucleon from helium-4 takes about half a million times as much" (using 7.1 MeV) | 7.1 MeV is the average binding energy per nucleon, not the energy to free one nucleon (removing a neutron or proton from helium-4 takes about 20 MeV). Reword: "Per nucleon, helium-4 is bound about half a million times as strongly as the electron in hydrogen." |
| 3 | warning | Section "What holds a nucleus together?", the three properties; flashcard "The strong nuclear force" | 22.02 Ch. 5, Sec. 5.1, p. 69: stronger than Coulomb at short distance; short range ("nuclei in a molecule" feel only the Coulomb force); "does not depend at all on the particle charge, e.g. it is the same for protons and neutrons" | Same claims, with no source cited (the readings name only Ch. 1) | Add 22.02 Chapter 5 (p. 69) as a reading; it supports all three bullets and the "nothing of it is felt at the size of an atom" sentence. |
| 4 | info | Same section, "Light stable nuclei have about as many neutrons as protons" | 22.02 Sec. 1.2.2 D (p. 9): "roughly the same number of neutrons and protons in stable nuclei"; Sec. 1.2.3 (p. 9): Z ≈ A/2 for light nuclei, Z ≈ 0.41A for heavy ones | Same, uncited in the text | Supported by reading4; optionally point to it ("reading 4, p. 9"). Uranium-238: 92/238 = 0.39, consistent. |
| 5 | info | Formula "Radius of a nucleus" | 22.02 p. 6 gives R = R₀A^(1/3) without a value; p. 8 uses R₀ = 1.25 fm | R₀ ≈ 1.2 fm, with the difference stated in `at` | Acceptable: 1.2 fm is a standard rounded value and the page says the notes use 1.25 fm. Optionally say in the text "about 1.2 fm (values of 1.2 to 1.25 fm are used)". |
| 6 | info | Section "Protons and neutrons" | Siyavula 4.4 says the proton is "10 000 times heavier" than the electron | "about 1800 times" | The page is right and the source wrong (1.67e-27 / 9.11e-31 = 1833). No change needed; optionally note it in the review resolution. |
| 7 | info | Cosmology callout | (standard) | helium-4 is "the most tightly bound light nucleus" | Per nucleon, carbon-12 (7.7 MeV) is more tightly bound than helium-4 (7.1 MeV); helium-4 is the most tightly bound of the very lightest nuclei. Suggest "an unusually tightly bound nucleus". |
| 8 | info | Section "Protons and neutrons" | Siyavula Table 4.2: 1.6749 vs 1.6726 × 10⁻²⁷ kg | "about 0.1% more" | The ratio is 0.14%; "about 0.1%" is fine at this level. |

## Formulas and citations
- A = Z + N (reading4, Sec. 1.1.1): on printed p. 5, correct.
- Notation ᴬ_Z X (`mit` = Siyavula 4.4, "Atomic number and atomic mass number", standard notation): correct; Siyavula uses ⁵⁶₂₆Fe.
- R = R₀A^(1/3) (reading4, Sec. 1.1.3, p. 6): correct; R₀ = 1.25 fm is on p. 8, as the `at` says.
- Density formula (reading4 + lesson 4.1): derivation, correct (A cancels).
- 1 u = 1.66 × 10⁻²⁷ kg (reading3, "How heavy is an atom?"): Siyavula 4.3 gives exactly this; the "one twelfth of carbon-12" definition is on 22.02 p. 6 (Siyavula only describes the "carbon standard").
- Mass defect and E = Δm c² (reading4, Sec. 1.2.1, p. 6): the notes write B = [Z m_p + N m_n − m_N] c² on p. 6, matching. See finding 1 for the ordering problem.
- Siyavula 4.2: Rutherford 1920 prediction and Chadwick 1932, confirmed. Siyavula 4.5: "same place" (isos topos), same chemistry, may differ in stability, confirmed.

## Arithmetic and answer checks
All recomputed independently; `npm run calc:test -k "the-nucleus or radioactive-decay"` passes (82 tests).
- 197 − 79 = 118; 238 − 92 = 146; 235 − 92 = 143; 14 − 6 = 8. Correct.
- 3 × 1.67e-27 = 5.01e-27 kg; 3/238 = 1.26%. Correct.
- R: 1.2 × 16^(1/3) = 3.02, 1.2 × 197^(1/3) = 6.98, 1.2 × 238^(1/3) = 7.44 fm; (238/16)^(1/3) = 2.46. Correct.
- U-238: m = 3.97e-25 kg, V = 1.73e-42 m³, ρ = 2.30e17 kg/m³; 3m_p/(4πR₀³) = 2.31e17. Ratio to water 2.3e14. Correct.
- Earth: V = 2.60e7 m³, 3V/4π = 6.2e6, R = 184 m ("180 m"), diameter 367 m ("370 m"). Correct.
- Two protons at 1.0 fm: 230.4 N; /9.81 = 23.5 kg; a = 1.38e29 m/s²; gravity 1.86e-34 N; ratio 1.24e36. Correct.
- Helium-4: 4.03188 u, Δm = 0.03037 u (0.753%), 5.04e-29 kg, 4.54e-12 J, 28.4 MeV, 7.1 MeV per nucleon (accepted value 28.3 MeV). 7.1e6/13.6 = 5.2e5; 28e6/13.6 = 2.1e6. Correct (but see finding 2 for the wording).
- Quiz 0: 6 protons, 8 neutrons, answer 1 correct. Quiz 1: answer 2 correct. Quiz 2: 8^(1/3) = 2, answer 1 correct. Quiz 3: 230/4 = 57.6 ≈ 58 N, answer 3 correct; distractor explanation true. Quiz 4: NIST masses give Δm = 0.002388 u; 0.0024 × 1.66e-27 × 9e16 = 3.59e-13 J = 2.24 MeV, answer 2 correct (accepted 2.22 MeV).
- Calcs file: quiz 0 and quiz 4 entries are untagged: add `quiz: 0` to `quiz-c14-neutrons` and `quiz: 4` to `deuteron-defect-u`, `quiz-deuteron-joule`, `quiz-deuteron-mev`. Two entries cite an unrelated source: `proton-density-71` cites `nistMp` (the value comes from lesson 7.1), `hydrogen-ionisation` cites `mit` (Siyavula 4.4) for a lesson 7.4 value. Info only.

## Only earlier terms
- E = Δm c² ("Einstein's relation"): used before lesson 8.3. See finding 1 (error).
- Electronvolt: lesson 6.4 (electric-potential-and-voltage) introduces it, confirmed.
- 13.6 eV: lesson 7.4, confirmed. Proton density 7 × 10¹⁷ kg/m³: lesson 7.1, confirmed (discovering-the-atom.mdx).
- Density (lesson 4.1, `density-and-pressure`) is planned but not written; its §4 row covers density, so it counts as introduced.
- Weight W = mg and Newton's second law (suitcase, acceleration): Block 2, fine.
- Femtometre, nucleon, isotope, atomic mass unit, mass defect, strong force: introduced on the page.

## Coverage
- §4 row 7.7: protons, neutrons, isotopes; PhET build-a-nucleus. Fully covered (Z, N, A, notation, isotopes of H, C and U) and the PhET is embedded with a sensible task.
- Extra beyond the row: nuclear size and density, the strong force (both appropriate here, and the plan's old CP 31.3 covers them), and binding energy (belongs to 8.4; finding 1).
- VWO level: R = R₀A^(1/3) is beyond the core syllabus but is explained simply; fine.

## Where this leads
- The §4 row names `8-286/neutrinos-and-particle-counting` (8.286 L17). I read that page: it is about neutrinos and counting species and says nothing about nuclei, so it is a poor match (plan flag F9 already says so).
- The page links 8.033 L13 (`atoms-photons-nuclei`: Z, A, isotopes and binding energy as missing rest mass) and 8.902 L20 (`big-bang-nucleosynthesis`: deuterium binding 2.22 MeV, the bottleneck). Both are real lectures on this site on the topic. **Accept the departure** and update the §4 row. Note 8.033 L13 is also 8.4's target; if binding energy moves to 8.4 (finding 1), reword the 8.033 `why` to stress Z, A and isotopes. The 8.033 page calls A "atomic weight (the slide's term; today ... the mass number)", so "uses the same words" is slightly loose; acceptable.
- `towards: false`: correct, 7.11 is the block's last lesson.

## Licensing and AI terms
- All four Siyavula URLs are CCBY rows in docs/siyavula-licences.tsv; pages show the CC BY footer. No Siyavula branding.
- 22.02 Chapter 1 contains two all-rights-reserved figures (Brookhaven chart of nuclides, p. 10; Neil Spooner, beta-decay figure) and a "Courtesy of Jefferson Lab" figure; the page uses none of them. The graph is generated from R = 1.2A^(1/3).
- No copied sentences found (e.g. Siyavula "Rutherford predicted (in 1920) that another kind of particle must be present in the nucleus" vs page "Rutherford suggested in 1920 that the nucleus also holds a neutral particle"). Worked examples (gold, uranium isotopes, uranium density, Earth as nuclear matter, two protons, helium-4) are not Siyavula's (it uses Fe-56 and its own exercises).
- NASA: cited as "(NASA, Earth Fact Sheet)" for a value, no insignia, no "according to NASA". Fine.
- No forbidden source cited or read.

## Notes
- No `\phantom` in the page; `npm run content:check` reports no speech-gap warning for this page (only "density-and-pressure is planned" and "no review file yet").
- PhET build-a-nucleus is in the manifest (content:check passes).

## Resolution (2026-11-20, by the page author)

1. Fixed by following the plan's order (E = mc² in lesson 8.3, binding energy in 8.4). Removed from this page: the formulas "Mass defect" (Δm = Z m_p + N m_n − M) and "Binding energy" (E = Δm c², both cited to 22.02 Ch. 1, Sec. 1.2.1, p. 6), the worked example "The binding energy of helium-4" (m_p = 1.00728 u, m_n = 1.00866 u, M = 4.00151 u from NIST CODATA 2022 alpha-particle mass; parts 4.03188 u, Δm = 0.03037 u = 0.75% = 5.04 × 10⁻²⁹ kg, E = 4.5 × 10⁻¹² J = 28 MeV, 7.1 MeV per nucleon, compared with 13.6 eV for hydrogen), quiz 4 (deuteron: Δm = 0.0024 u from NIST masses, E = 3.6 × 10⁻¹³ J = 2.2 MeV; choices eV / keV / MeV / GeV), the flashcard "Mass defect and binding energy", the summary bullet on binding energy, and the NIST references nistMalpha and nistMd. The writer of lesson 8.4 may reuse these ideas and numbers (mind finding 2: 7.1 MeV is the average binding energy per nucleon, not the energy to free one nucleon). In their place the section "Atomic mass units and the missing mass" keeps the atomic mass unit and the proton and neutron masses in u, and ends with one qualitative paragraph: a nucleus has slightly less mass than its separate nucleons (22.02 Ch. 1, p. 6), the missing mass is linked to the energy holding it together, and lesson 8.4 works out how. New quiz 4: why heavy stable nuclei have more neutrons than protons (answer: neutrons add strong attraction without electric repulsion). New flashcard: the atomic mass unit. The summary bullet now covers the atomic mass unit and the qualitative missing mass. Prerequisites bohr-atom-and-spectral-lines and electric-potential-and-voltage dropped (13.6 eV and the electronvolt are no longer used). Calcs: the helium-4, deuteron and hydrogen-ionisation entries removed.
2. Went with 1: no per-nucleon comparison is left on the page.
3. Fixed: MIT 22.02 Chapter 5 added as reading5 (Sec. 5.1, p. 69, checked in the PDF: stronger than Coulomb at short distances, short range, the same for protons and neutrons), with a pointer "(MIT 22.02 notes, Chapter 5, p. 69)" before the three properties.
4. Fixed: pointer "(MIT 22.02 notes, Chapter 1, p. 9)" added to the sentence on light stable nuclei (checked: p. 9, "roughly the same number of neutrons and protons in stable nuclei"); reading4's location now names p. 9 for it.
5. Left as is (R₀ = 1.2 fm with the difference stated in `at`).
6. No change: the page's "about 1800 times" is right (1.67e-27 / 9.11e-31 = 1833); Siyavula 4.4's "10 000 times" is the source's slip.
7. Fixed: "an unusually tightly bound nucleus"; the callout's last sentence now says "How tightly these nuclei hold together decides…" instead of naming binding energies.
8. Fixed where calc:test allows: `proton-density-71` is now computed (m_p over the volume of a sphere of radius 0.84 fm, as in lesson 7.1) and cites the new reference nistRp (NIST CODATA proton radius, the source lesson 7.1 uses); `hydrogen-ionisation` and the quiz 4 deuteron entries were removed with finding 1. `quiz-c14-neutrons` stays without `quiz: 0`: two choices of quiz 0 contain 8 ("6 protons and 8 neutrons", "8 protons and 6 neutrons"), so the quiz check cannot single out the answer.
Where this leads: 8.033 L13 and 8.902 L20 kept; the 8.033 `why` now stresses atomic number, mass number and isotopes; the 8.902 `why` says "how tightly deuterium holds together" instead of "binding energy".

Checks: `npm run calc:test -- -k the-nucleus`: 38 passed. `npm run content:check`: no error for this page except four symbol meanings still scoped to it that it no longer uses (c, M, E, m_n), to be removed from data/symbols.json by the coordinator; one warning (prerequisite density-and-pressure planned, not written yet).
