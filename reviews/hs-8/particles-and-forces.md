---
page: content/year-0/hs-8/particles-and-forces.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3747051d1048b4df855d7574a3a8360c_PK1KNojfvMQ.pdf (read: Lecture 21 transcript, pp. 21-25)
  - https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/resources/mit8_701f20_lec1-1/ (read: MIT8_701f20_lec1.1.pdf, slides 1-6)
  - https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/7f194278ac49fbf53f965618c5fb61be_QDIdZR9G2UU.pdf (read: Lecture 1.3 transcript; the matching slides were not opened, slide 4 is excluded from MIT's licence)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3ef27cdafbe29bfb9991e9265544754e_seBwiL9InII.pdf (read: Lecture 22 transcript, pp. 6, 7, 12, 13)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/2aa1ecae1246c3e9b9fca11aefb81dcb_PsfyE1-s9Rs.pdf (read: Lecture 23 transcript, p. 16)
  - https://pdg.lbl.gov/2024/tables/rpp2024-sum-quarks.pdf (read)
  - https://pdg.lbl.gov/2024/tables/rpp2024-sum-baryons.pdf (read: p = uud, n = udd, proton 938.272 MeV)
  - https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf (read)
  - https://pdg.lbl.gov/2024/reviews/rpp2024-rev-phys-constants.pdf (read)
  - https://www.nasa.gov/universe/nasas-fermi-catches-thunderstorms-hurling-antimatter-into-space/ (read; F. Reddy, 10 Jan 2011)
  - https://science.osti.gov/hep/Highlights/2012/HEP-2012-10-b (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read)
verdict: needs-changes
---

# Review: Particles and the four forces (8.7)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Section "Forces that were once one", first paragraph; calcs `electroweak-scale` | 8.286 L22 p. 6 (Hughes): in a "perfect world", where "everything is a nice balmy 10 to the 16th GeV", SU(2) would govern both the electric and weak interactions; pp. 6-7 give no energy for electroweak unification. L23 p. 16 says only that the strengths are *measured* at about 100 GeV. No cited source gives "about 100 GeV and above" | "at energies of about 100 GeV and above, roughly the rest energy of the W and Z, the two act as a single electroweak force (8.286 Lecture 22, pp. 6–7)"; calcs cites reading4 p. 16 | The physics is standard (the electroweak scale is about 100 to 250 GeV), but the citation does not support the number and the cited page names a different energy. Cite pp. 6-7 only for "at high energies the two are governed by one symmetry, broken by the Higgs field", and mark "about 100 GeV, roughly the W and Z rest energy" as the page's own estimate (in the text and in the calcs `source`, e.g. `origin: page-own`). |
| 2 | warning | Section "Antimatter", "Every particle has an antiparticle with the same mass and the opposite charge (MIT 8.701 Lecture 1.1, slide 4)" | Slide 4: "Antiparticles, such as a positron, are not identical to particles, such as the electron"; nothing about mass or charge | Attributes same mass and opposite charge to slide 4 | Standard and correct, but not in the cited slide. Cite the NASA Fermi page for "positron = antimatter counterpart of the electron" and lesson 7.8 for its charge +e, and mark the general rule as standard. Optionally add "some neutral particles, like the photon, are their own antiparticle". |
| 3 | warning | Worked example "How hot for the forces to merge?" and the sentence before it | Lesson 4.4's ⟨E_k⟩ = (3/2)k_BT holds for non-relativistic particles; at 100 GeV the particles are ultra-relativistic (mean energy about 3k_BT, and cosmologists usually take E ≈ k_BT) | T = 2E/(3k_B), giving 7.7 × 10¹⁴ K and 7.7 × 10²⁸ K as if exact | Fine as an order of magnitude, but say so: "a rough estimate: at such speeds the (3/2)k_BT rule only gives the order of magnitude". E ≈ k_BT gives 1.2 × 10¹⁵ K and 1.2 × 10²⁹ K; same orders. |
| 4 | warning | Section "Forces as exchanged particles", paragraph after the plot: the strong force's short range explained by confinement alone | 8.286 L21 p. 24 (answer to a student): the gluon is massless but confined; the string between quarks breaks by making quark–antiquark pairs | "Gluons, like quarks, cannot travel freely, so the strong force stays locked inside protons, neutrons and their nearest neighbours" | Matches Guth, but the force between *nucleons* (lesson 7.7's nearest-neighbour force, range about 10⁻¹⁵ m) is a leftover of the strong force, carried by pions (rest energy about 140 MeV). The page's own r ≈ h/(2πmc) gives 1.4 × 10⁻¹⁵ m for it, a neat check. Either add one sentence on this or soften to "confinement is part of the answer". |
| 5 | warning | Section "The building blocks", "The heavy copies decay within a tiny fraction of a second, so they are found only in cosmic rays and in particle accelerators" | 8.286 L21 pp. 21-22 lists the three generations, including the muon and tau neutrinos; neutrinos do not decay | Applies to all heavy copies, including "each with a neutrino of its own" | Restrict to the charged ones: "The heavier quarks and the muon and tau decay within a tiny fraction of a second ...". |
| 6 | warning | Flashcard "The Higgs boson": "gives quarks, leptons and the W and Z their rest mass" | 8.286 L22 p. 12: in the Standard Model with the Higgs coupling "the neutrino mass is zero"; neutrino masses are put in by hand | "leptons" without exception | Write "gives quarks, the electron and its heavier copies, and the W and Z their rest mass" (the body text, "elementary particles", has the same small issue). |
| 7 | warning | Last paragraph before the callout: "the forces separated into the four we see today (8.286 Lecture 22, p. 7)" | L22 p. 7: as the universe cools, the Higgs field picks out a direction and the symmetry breaks; gravity is never part of the scheme (L21 p. 23, as the page itself says) | Four forces separate | Write "the strong, weak and electromagnetic forces separated into the three we see today". |
| 8 | warning | `leadsTo` `{ course: "8.286", lecture: 21 }` | §4 row 8.7 names `8-286/grand-unified-theories` | The link resolves to all three lecture-21 pages: `flatness-problem`, `horizon-problem` and `grand-unified-theories`, each shown with the same "why" text about the Standard Model and GUTs | Two of the three do not match the "why". The schema takes only `{course, lecture}`, so either accept it, or add lecture 22 (`higgs-field`, `magnetic-monopoles`) and reword the "why" so it fits all lecture-21 pages. Flag for the owner. |
| 9 | info | Strength table, weak "about 10⁻⁵" | 8.701 L1.3: "If you just look at the charge itself ... the weak interaction and the electromagnetic interaction are actually quite comparable" | G_F m_p² = 1.03 × 10⁻⁵ as the weak strength (own estimate, labelled as such) | Correct as a low-energy effective strength. One clause would help: "its basic charge is about as strong as the electric one; it is feeble only because its carriers are so heavy (MIT 8.701 Lecture 1.3)". |
| 10 | info | Section "Forces that were once one": "The strengths ... change at higher energies" | PDG Table 1.1 note: α = 1/137.036 at Q² = 0, about 1/128 at Q² ≈ m_W² | Uncited | The PDG note is a ready citation for the running of α. |
| 11 | info | GUT formula and text "To good accuracy, the three meet" | L23 p. 16: meeting "decent" in the Standard Model, "much better" with supersymmetry | "To good accuracy"; "attractive but has not been confirmed" | Faithful to Guth. Optionally add that in the plain Standard Model the three lines nearly, not exactly, meet. |
| 12 | info | Section "The Higgs boson", proton mass from quark motion | No cited source (writer's note) | 9.0 MeV of 938 MeV, the rest from quark motion and the strong-force field | Standard and correct. PDG quark masses are scheme-dependent "current" masses at 2 GeV; "about 1%" is fine at this level. |

## Formulas and citations
- Proton charge from quarks: PDG u +2/3 e, d −1/3 e; p = uud, n = udd (baryon table). ✓
- e⁺ + e⁻ → γ + γ: NASA Fermi page ("both particles immediately are annihilated and transformed into gamma rays"; 511 000 eV). ✓ Notation matches lesson 7.8.
- E = m_e c² = 0.511 MeV: NASA 511 000 eV; lesson 8.3. ✓
- r ≈ h/(2πmc): the page's own, as the writer says. It is the decay length ħ/(mc) of the Yukawa potential that 8.701 L1.3 discusses (transcript p. 1: a massive carrier gives a Yukawa potential whose range shrinks with mass; W and Z masses "80, 90", weak range 10⁻¹⁸ m). Correct physics; the cited transcript supports the qualitative claim. The excluded slide 4 was not opened and the page's plot (range against mass) is not a copy of its Yukawa-potential figure.
- E_GUT ≈ 10¹⁶ GeV: L23 p. 16 verified.
- Carrier table: L21 p. 22 (photon, gluon, Z⁰, W±; weak = the only non-gravitational interaction of neutrinos) ✓; PDG: photon < 1 × 10⁻¹⁸ eV, gluon 0, graviton < 1.76 × 10⁻²³ eV, W 80.3692 GeV, Z 91.1880 GeV ✓.
- Leptons feel no strong force (L21 p. 22) ✓; confinement, constant force and pair creation (L21 p. 24) ✓; the Standard Model leaves out gravity (L21 p. 23) ✓.
- Higgs field fills space, symmetric at high energy, picks a direction as the universe cools (L22 p. 7) ✓; quarks and leptons get rest mass when h ≠ 0 (L22 pp. 12-13) ✓ (see row 6).
- Higgs: DOE Office of Science, 4 July 2012, ATLAS and CMS at CERN's LHC, 125-126 GeV ✓; PDG 125.20 GeV ✓.
- α = 1/137.036, G_F = 1.1663788 × 10⁻⁵ GeV⁻² (PDG Table 1.1) ✓.
- 8.701 L1.1 slide 2 (particles created and annihilated) and slide 5 (force by emission and absorption of bosons) ✓; slide 4 see row 2.
- Sun's central temperature 1.571 × 10⁷ K (fact sheet) ✓.

## Arithmetic and answer checks
Recomputed independently (Python); `npm run calc:test` passes, `content:check` 0 errors for this page.
- Charges: 2(2/3) − 1/3 = 1; 2/3 − 2/3 = 0; after the down→up change 2/3 − 1 + 0 = −1/3 ✓.
- 0.511 × 1.6 × 10⁻¹³ = 8.18 × 10⁻¹⁴ J ✓; λ = 6.63 × 10⁻³⁴ × 3 × 10⁸/8.18 × 10⁻¹⁴ = 2.43 × 10⁻¹² m ✓; 2 × 0.511 = 1.022 MeV ✓.
- G_F m_p² = 1.1664 × 10⁻⁵ × 0.9383² = 1.03 × 10⁻⁵ ✓. ke²/(Gm_p²) = 1.24 × 10³⁶ ✓; (1/137)/1.24 × 10³⁶ = 5.9 × 10⁻³⁹ ✓ (equal to Gm_p²/(ħc) = 5.9 × 10⁻³⁹ with exact constants).
- 80.4/0.938 = 85.7 ("about 86") ✓; 91.2/0.938 = 97 ✓.
- W: 1.286 × 10⁻⁸ J ✓; r = 2.46 × 10⁻¹⁸ m ✓ (plot point 2.46 ✓); 10⁻¹⁵/2.46 × 10⁻¹⁸ = 406 ("≈ 400"), 0.25% ✓. Plot: at 10 GeV r = 19.7 (inside range 0-20) ✓; "ten times heavier, ten times shorter" ✓.
- Quark masses 2 × 2.16 + 4.70 = 9.02 MeV, 0.96% of 938 ✓.
- 100 GeV = 1.6 × 10⁻⁸ J; T = 7.73 × 10¹⁴ K ✓; /1.571 × 10⁷ = 4.9 × 10⁷ ("about fifty million") ✓. 10¹⁶ GeV = 1.6 × 10⁶ J; T = 7.7 × 10²⁸ K ✓ (see row 3).
- Quiz 0: answer 2 (udd) ✓; uuu = +2e, uud = +e, ddd = −e, all wrong ✓.
- Quiz 1: 2.0 × 10⁻⁶ × 9 × 10¹⁶ = 1.8 × 10¹¹ J ✓ (answer 2); 9.0 × 10¹⁰ (antimatter only), 6.0 × 10² (c not squared), 1.8 × 10¹⁷ (2.0 kg) ✓.
- Quiz 2: Z: 1.459 × 10⁻⁸ J, r = 2.17 × 10⁻¹⁸ m ✓ (answer 0); no 2π: 1.36 × 10⁻¹⁷ ("1.4 × 10⁻¹⁷") ✓; 2.2 × 10⁻¹⁵ is a factor-1000 distractor, not explained in the explanation (fine).
- Quiz 3: answer 2 (weak) ✓.
- Quiz 4: answer 0 ✓; the other choices wrong ✓.
- Flashcards: true, apart from row 6.

## Only earlier terms
- All used ideas are in earlier lessons or defined here: nucleus, strong force, nearest neighbours (7.7); beta decay, positron, neutrino, antineutrino (7.8); E = mc², 0.511 MeV, photon momentum E = pc (8.3); Coulomb's law (6.2); gravitation (2.11); the 1.24 × 10³⁶ ratio (6.13); E = hf = hc/λ (7.2); (3/2)k_BT (4.4, planned, not yet written; the lesson-list title "Kinetic theory: temperature is motion" covers it); field (6.3); Big Bang (mentioned in 7.x and 8.3-8.4).
- "Boson" is used (W and Z bosons, Higgs boson) without saying what it means; harmless as a name, info only.
- "Cosmic rays" come from lesson 7.10 (`radiation-and-health`), not in `prerequisites`; add it (info).
- "Magnetic monopoles" (callout) and inflation (8.18) are forward pointers, plainly described; fine.
- Lesson 8.6 (uncertainty principle) comes just before; r ≈ h/(2πmc) could be motivated from it (a borrowed energy mc² for a time ħ/(mc²) travels at most about c times that). Optional.

## Coverage
- §4 row 8.7 (leads to `8-286/grand-unified-theories`): quarks and leptons, antimatter and annihilation, the four forces with strength and range, exchange particles, the Higgs field and boson, electroweak and grand unification, at VWO level. Covered.
- Left out: colour charge (three colours, L21 p. 21), hadrons other than p and n (mesons), conservation of lepton number. Not needed at VWO level; one sentence on mesons would fit naturally with rows 4 and confinement.

## Where this leads
- See row 8: lecture 21 of 8.286 has three pages; only `grand-unified-theories` matches the "why". `towards: false` ✓.
- The cosmology callout (Guth uses the Standard Model and GUTs to set up the monopole problem and inflation) is correct and matches L21 p. 21.

## Licensing and AI terms
- No sentence copied. Closest paraphrases, all short and acceptable: quiz 3 "Almost anything that involves neutrinos is a weak process" (Guth L21 p. 22: "Essentially, anything that involves neutrinos is going to be weak interaction"); "one force, which looks like three at lower energies" (Guth L23 p. 16: "made to look like three interactions at lower energies"). Consider rewording the first.
- No figure copied; the only graph is generated from the formula. The excluded 8.701 slide 4 was not used.
- Worked examples and quiz questions are the page's own; the transcripts have no exercises.
- PDG summary tables are CC BY 4.0 and cited; DOE and NASA pages cited by title; no NASA insignia; no "according to NASA".
- No CERN text, Particle Adventure, Wikipedia or other forbidden source used (the DOE page is the source for the 2012 date).

## Notes
- The weak 10⁻⁵ and gravity 5.9 × 10⁻³⁹ are the page's own, labelled so, and recompute correctly.
- The skater analogy is labelled as showing only repulsion; good.

## Resolution (2026-11-20, by the page author)

1. Fixed. "Forces that were once one" now cites 8.286 Lecture 22, pp. 6-7 only for "at very high energies the two would be governed by one symmetry, which the Higgs field breaks as the universe cools", and gives "about 100 GeV, the rest energy of the W and Z" explicitly as our own rough estimate. Calcs `electroweak-scale` is now `origin: page-own` with source pdgb (W and Z masses, the 100 GeV scale the page's own estimate); `ew-energy-J` and `ew-temperature` cite the same.
2. Fixed. The general rule "same mass and opposite charge" is now stated as a standard result of particle physics, with no citation to 8.701 Lecture 1.1 slide 4 (the NASA Fermi page, checked, says only that the positron is the electron's antimatter counterpart; lesson 7.8 gives its charge +e). The slide 4 item was also removed from the reading1 location. Added that a few neutral particles, such as the photon, are their own antiparticle.
3. Fixed. The text before the worked example now says the (3/2)k_BT rule is for particles much slower than light and gives only the order of magnitude here; the formula is written T ≈ 2E/(3k_B), and the problem asks for an order-of-magnitude estimate. Numbers unchanged.
4. Fixed. The paragraph now says confinement is part of the answer, and that the force between nucleons (lesson 7.7) is a leftover of the strong force carried mainly by pions (rest energy about 140 MeV, PDG 2024 meson summary: 139.57 MeV for a charged pion, new reference pdgm). Worked in the text: mc² = 2.24 × 10⁻¹¹ J, r ≈ 1.4 × 10⁻¹⁵ m. New calcs entries pion-mass, pion-rest-J, pion-range. The pion picture is stated without attribution (no cited source names who proposed it).
5. Fixed: "The heavier quarks and the muon and tau decay within a tiny fraction of a second".
6. Fixed. Flashcard: "gives quarks, the electron and its heavier copies (the muon and the tau), and the W and Z their rest mass". Body: added that in the Standard Model neutrinos get no mass from the Higgs field (8.286 Lecture 22, p. 12); "gives mass only to the elementary particles" reworded to "accounts only for the masses of the elementary particles"; frontmatter summary and Summary bullet now name the quarks, the electron and the W and Z.
7. Fixed: "the strong, weak and electromagnetic forces separated into the three we see today".
8. Not changed, as decided by the coordinator. Owner flag: `leadsTo` {course 8.286, lecture 21} resolves to three pages (flatness-problem, horizon-problem, grand-unified-theories), of which only grand-unified-theories matches the "why"; the schema takes only {course, lecture}.
9. Done: one clause added after the weak strength: its basic charge is about as strong as the electric one, it is feeble only because its carriers are so heavy (8.701 Lecture 1.3; transcript checked: "quite comparable"). Reading2 location updated.
10. Not done (optional citation).
11. Not done (optional).
12. No change needed.
Other info notes: quiz 3 explanation reworded away from Guth's phrasing ("So whenever a neutrino is made or absorbed, the weak force is at work."); `radiation-and-health` added to prerequisites.

Checks: `npm run calc:test -- -k particles-and-forces`: 46 passed. `npm run content:check`: 0 error(s); the only warning for this page is the planned prerequisite kinetic-theory.
