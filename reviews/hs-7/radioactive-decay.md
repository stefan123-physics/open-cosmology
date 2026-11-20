---
page: content/year-0/hs-7/radioactive-decay.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/resources/radioactive-decay2014modes-energetics-and-trends/ (read: lecture page)
  - 22.01 Lecture 8 transcript, 41a605dddc4534df0141eb8987d2544b_YLp8RziRbpg.pdf (read, 18 pages; no printed page numbers, so PDF page = page)
  - 22.01 Lecture 31 transcript, c61eb2dc2ab817d8dc4f522044ae3c80_kzOFhSJFihI.pdf (read pp. 5, 12, 14)
  - 22.01 Lecture 11 transcript, 62654cb8d410ee907c9c3836015a1585_z_xyx-z6arc.pdf (read p. 2)
  - OpenLearn, The science of nuclear energy, 1.2.2 and 1.2.1, plus the course acknowledgements page (read through WebFetch; curl was blocked by a Cloudflare challenge)
  - MIT 8.033 (Fall 2006) lecture13_part2.pdf, slide 19 (read as an image)
  - MIT 22.02 lecture notes Ch. 1, Sec. 1.3 (p. 11) (read; not cited by the page)
verdict: needs-changes
---

# Review: Radioactive decay (7.8)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Paragraph before the plot ("Heavy nuclei often need many steps") | The plot draws dashed lines only for A = 238, 234 and 230 | "An alpha decay jumps two places down and two to the left, onto the next line but one" | On this graph an alpha decay lands on the *next* dashed line (A four lower). Write "onto the next dashed line, where A is 4 lower". |
| 2 | warning | Section "How far does the radiation get?", "charged **ions** (lesson 6.1)" | Lesson 6.1 (electric-charge) never uses the word ion; ionising appears in lesson 7.4 | Points to 6.1 | The word is defined in place, so only fix the pointer: "(ionisation, lesson 7.4)" or drop it. |
| 3 | warning | Section "The missing energy", "Trillions of them, mostly from the Sun, pass through your body every second" | No cited source | Uncited | "Trillions per second" is right (solar flux about 6 × 10¹⁰ per cm² per s, so of order 10¹⁴ per second through a body). But "mostly from the Sun" conflicts with the page's own callout: relic Big Bang neutrinos, about 336 per cm³, are more numerous. Write "Of the neutrinos we can detect, most come from the Sun" (or drop "mostly from the Sun") and cite a NASA page. |
| 4 | warning | Formula "A neutron turns into a proton", `cite="reading2" at="Sec. 1.2.2, Beta particles"` | OpenLearn 1.2.2 describes it only in words (neutron becomes a proton, emits an electron, "an antineutrino is also emitted") and writes no equation | Cites it as if the equation were there | Change `at` to say the source gives it in words, or cite reading1 p. 2 (Short: electron plus antineutrino, one more proton, same nucleons). |
| 5 | warning | Opening paragraph (Becquerel's wrapped plate, Curie) and reference `openlearn121` | OpenLearn 1.2.1's written text: 1896, uranium salts, radiation like X-rays that reacted with photographic plates; Curie, pitchblende, polonium and radium. The overnight-plate story is in the section's **BBC video** ("Chemistry: a volatile history"), which the acknowledgements list as third-party, outside the CC licence | Plate story told as fact; `openlearn121` is never cited in the text | The facts are standard history, so the risk is low. Keep the wording to what the written text supports (or standard history) and add a pointer to `openlearn121`. Do not take details from the video. |
| 6 | info | Section "The missing energy", Pauli "1930" | 8.033 slide 19 (confirmed): "proposed by Wolfgang Pauli 1931, detected by Fred Reines & Clyde Cowan 1956" | 1930 | 1930 is historically right (his letter of 4 December 1930); 1931 is his first public presentation. The reference's `location` already explains this. Optionally add a pointer to `mit8033` in the text, and "(the 8.033 slides give 1931, when he first presented it in public)". Reines and Cowan 1956 are confirmed by the slide; "beside a nuclear reactor" is standard. |
| 7 | info | Section "Radiation all around us", potassium-40 "about 4400 of its nuclei to decay every second (reading 3, p. 12)" | L31 p. 12: "potassium-40, about 4.4 kilobecquerels per human. So each of you is giving off 4,400 potassium gammas per second" | 4400 decays per second | **The page's figure is right and the lecture's wording is a slip.** 4.4 kBq means 4400 decays per second, but only about 11% of K-40 decays give a gamma ray (so about 480 gammas per second). My check: 140 g of potassium × 0.0117% K-40 = 2.47 × 10²⁰ nuclei; λ = ln 2 / 1.25 × 10⁹ yr = 1.76 × 10⁻¹⁷ /s; activity 4.3 kBq. Suggest "an adult's body" (the value scales with body mass), and per Writing rule 4 a short bracket: "(the lecture says 4,400 gamma rays; most of these decays give out a beta particle instead)". Put the same note in the calcs `where`. |
| 8 | info | "Random for one" section, heating or chemistry has no noticeable effect | 22.02 Ch. 1, Sec. 1.3, p. 11: decay is random; the probability per unit time is constant, "a characteristic of all radioactive decay" | Uncited | Cite 22.02 p. 11 for randomness and the constant chance per second. "Heating or binding into a molecule makes no noticeable difference" is standard and correct (electron-capture rates shift by only ~0.1%; C-14 is a beta-minus emitter). |
| 9 | info | Section "The missing energy", "(reading 1, p. 10)" | The beta-spectrum passage starts at the bottom of p. 9 and runs onto p. 10 | p. 10 | Write "pp. 9–10". |
| 10 | info | Section "Gamma decay", "Nuclear energy levels are spaced by MeV" | L8 p. 12: the Tc-99m gamma is about 140 keV | MeV | Write "keV to MeV". |
| 11 | info | "Medical X-rays and scans add a little more" | L31 p. 12: medical procedures are not counted in the background table | Uncited | In some countries (e.g. the US) medical doses are about as large as the natural background. Soften to "add more, how much depending on the country and on treatment", or leave it to lesson 7.10. |
| 12 | info | Quiz 3, "a few millimetres of aluminium"; table "a thin sheet of aluminium, or water" | OpenLearn 1.2.2: beta is stopped by "denser materials such as water or aluminium", no thickness; alpha "a sheet of paper or by clothing"; gamma "lead or concrete" | Matches; the thickness appears only in quiz 3 | Correct as standard physics. Optionally put "a few millimetres" in the table too, so the quiz uses only what the lesson says. |
| 13 | info | Section "Beta-plus decay" | L8 p. 3: "positron creation or electron capture", same end state | Electron capture not mentioned | Fine at VWO level; optional one-line mention. |

## Formulas and citations
- Alpha decay (reading1, pp. 1–2): p. 1 ends and p. 2 begins with "a helium nucleus ... z minus 2 protons and a minus 4 total nucleons". Correct.
- Neutron to proton (reading2, OpenLearn 1.2.2): in words only (finding 4).
- Beta-minus (reading1, p. 2): "should have one more proton ... the same" nucleons, electron and antineutrino. Correct. (Short's "an electron with no mass" is a slip, which the page rightly does not repeat.)
- Beta-plus (reading1, p. 3): positron, daughter Z − 1, needs "a certain amount of energy in order to create the positron". Correct.
- Gamma (reading1, p. 4): photon from an excited nucleus, star notation, same Z and A. Correct.
- Alpha energies "about 4 MeV or more" (p. 5): "most alpha particles tend to come out around 4 MeV or larger". Correct.
- Gammas after alpha or beta decay (p. 6): "a lot of alpha decays are immediately followed by a chain of gamma decays". Correct; p. 11 adds beta followed by gamma.
- Carbon-14 (pp. 11–12): confirmed.
- Inside vs outside the body, most gammas go through you (p. 17): confirmed.
- L31 p. 5 radon "about 50%"; p. 14 cosmic rays; L11 p. 2 becquerel "simply 1 decay per second". All confirmed.

## Arithmetic and answer checks
All recomputed; calc:test passes for this page.
- Ra-226 → Rn-222 (222 + 4, 86 + 2); Sr-90 → Y-90; C-14 → N-14; C-11 (β⁺, 20 min) → B-11; Bi-210 → Po-210 (β⁻); Po-210 → Pb-206 (α). All correct nuclear physics.
- U-238 → Pb-206: (238 − 206)/4 = 8 alpha; 92 − 16 = 76, so 6 beta-minus to reach 82; 14 decays. Correct (the standard chain).
- Plot: U-238 (92, 146), Th-234 (90, 144), Pa-234 (91, 143), U-234 (92, 142), Th-230 (90, 140), all on their dashed lines. Correct; the decay modes in the caption are right.
- Dice 6000/6 = 1000; 2.0e6 × 1/1000 = 2000 → 2000 Bq. Correct.
- Quiz 0: Am-241 → A 237, Z 93 (neptunium); answer 0 correct; the "Z = 96 would be beta-minus" remark is true. Quiz 1: I-131 → Xe-131; answer 1 correct; Te-131 (β⁺) and Sb-127 (α) explanations true. Quiz 2: beta only, answer 0 correct. Quiz 3: answer 0 correct. Quiz 4: answer 0 correct; the explanation (a two-body decay would give one sharp energy) is right.
- Calcs: `quiz-americium-A` and `quiz-americium-Z` lack `quiz: 0`; add it. `potassium-body` is right in value (see finding 7).

## Only earlier terms
- Z, N, A, notation, MeV, strong force: lesson 7.7 (prerequisite). Excited state, ionisation, 13.6 eV: lesson 7.4. Photon: 7.2. Gamma rays in the spectrum: 5.8. Conservation of charge: 6.1 (confirmed). Conservation of energy: 3.4, planned but not written; its row covers it.
- "Ions (lesson 6.1)": wrong pointer (finding 2).
- Positron, antiparticle, neutrino, antineutrino, activity, becquerel, background radiation: introduced on the page.
- Kinetic energy (alpha particles' energy): Block 3, planned; fine.

## Coverage
- §4 row 7.8: radioactive decay, PhET build-a-nucleus. Covered: alpha, beta-minus, beta-plus, gamma, balancing equations, the decay series, ionising vs penetrating power, randomness, activity, background. The PhET is embedded with a task that fits its Decay screen.
- Half-life is left to 7.9 and health to 7.10, as planned. Right for this level.

## Where this leads
- 8.286 L17 (`neutrinos-and-particle-counting`), as in the §4 row. The site's page covers neutrinos as part of the hot radiation and T_ν = (4/11)^(1/3) T, so the `why` ("a little colder than the cosmic microwave background") is accurate. Good match.
- The callout's claims (neutrinos about as plentiful as photons early on; relic neutrinos fill space; not detected directly) are correct and consistent with that page.

## Licensing and AI terms
- 22.01 transcripts carry the CC notice; no "rights reserved" or "courtesy" notice in the L8, L31 or L11 transcripts. No figures are used; the plot is generated.
- OpenLearn: the acknowledgements give CC BY-NC-SA 4.0 "except for third party materials". 1.2.2 has no listed third-party item. 1.2.1's video is BBC (third-party): see finding 5. The page uses no OpenLearn figures.
- 8.033 slide 19 is text; the slide deck's "courtesy" images are not used.
- No copied sentences found; the worked examples (radium, strontium-90, Bi/Po/Pb, counting decays) and quizzes (americium, iodine, the absorber test) are not in the sources.
- No Siyavula page is used, consistent with docs/siyavula-licences.tsv (no CCBY nuclear section listed). No forbidden source cited or read.

## Notes
- `npm run content:check`: no speech-gap warning for this page; the `{}^{\;\;0}_{-1}\mathrm{e}` spacing reads without a gap warning. The only warnings are "conservation-of-energy is planned" and "no review file yet".

## Resolution (2026-11-20, by the page author)

1. Fixed: "onto the next dashed line, where A is 4 lower".
2. Fixed: the pointer now reads "(ionisation, lesson 7.4)".
3. Fixed: "Of the neutrinos we can detect, most come from the Sun, where fusion makes them in huge numbers: trillions pass through your body every second without effect", citing NASA Science, "You're Always Surrounded by Neutrinos!" (read 2026-11-20: trillions pass through you; most neutrinos around Earth come from the Sun, made by fusion in its core), added as reference nasaNeutrinos. This no longer conflicts with the callout on relic neutrinos.
4. Fixed: the formula "A neutron turns into a proton" now cites reading1, transcript p. 2 (checked: electron and antineutrino, one more proton, the same nucleons), with `at` saying the lecture gives it in words. OpenLearn (reading2) is now pointed to for the table of what stops each radiation.
5. Fixed: the opening keeps to OpenLearn 1.2.1's written text (checked 2026-11-20 through WebFetch: 1896, uranium salts, radiation like X-rays affecting photographic plates; Curie, pitchblende, polonium and radium), with a pointer "(OpenLearn, The science of nuclear energy, 1.2.1)". The wrapped-plate story from the third-party BBC video was removed. The reference's `location` says the video was not used.
6. Done: inline note "(MIT's 8.033 slides give 1931, when he first presented the idea in public)".
7. Fixed: "an adult's body", with the bracket "(reading 3, p. 12; the lecture calls these 4400 gamma rays, but most of the decays give out a beta particle instead)"; the same note is in the calcs `where` of potassium-body.
8. Fixed: MIT 22.02 Chapter 1 added as reference mit2202 (Sec. 1.3, p. 11, checked in the PDF: a single decay is random, the probability per unit time is constant), with a pointer after "Radioactive decay is random".
9. Fixed: "(reading 1, pp. 9–10)" (checked: the beta spectrum passage starts at the end of p. 9); reading1's location updated likewise.
10. Fixed: "spaced by keV to MeV (thousands to millions of electronvolts) rather than by eV". The old pointer "(lesson 7.7)" for MeV was dropped, since lesson 7.7 no longer uses MeV after its own review; the MeV is now introduced at its first use ("An MeV is a million electronvolts, the energy unit of lesson 6.4") and electric-potential-and-voltage was added to the prerequisites.
11. Fixed: "Medical X-rays and scans add more, how much depending on the country and on the treatment."
12. No source found that gives a thickness (OpenLearn 1.2.2 names water or aluminium, no thickness; the L8 transcript does not give one), so quiz 3 now says "a thin sheet of aluminium cuts the count", as in the table.
13. Done: one sentence on electron capture after beta-plus decay (reading 1, p. 3, checked: the nucleus captures an inner electron, one proton fewer, same nucleons, the same end state as positron emission).
Calcs (from "Arithmetic and answer checks"): `quiz-americium-A` and `quiz-americium-Z` stay without `quiz: 0`: 237 appears in choices 0 and 3, and 93 in choices 0 and 2, so the quiz check cannot single out the answer.

Checks: `npm run calc:test -- -k radioactive-decay`: 30 passed. `npm run content:check`: no error for this page; one warning (prerequisite conservation-of-energy planned, not written yet).
