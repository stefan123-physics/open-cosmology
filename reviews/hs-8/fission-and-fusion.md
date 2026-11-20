---
page: content/year-0/hs-8/fission-and-fusion.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/22-02-introduction-to-applied-nuclear-physics-spring-2012/resources/mit22_02s12_lec_ch1/ (read; PDF 17 pages, printed page numbers = PDF page numbers)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture12_part1/ (read; 31 slides, slides 26 to 30 also rendered as images)
  - 22.01 Fall 2016 transcripts, Lectures 2 (NXrGOd7gdMw), 3 (Gd0QPYVYnQg), 6 (kZAFntUFx8I), 7 (nAtTW8ZW33s), 16 (qHPp458m1cs), 20 (RW2DPHAoXiQ) (all read page by page; no printed footers, so PDF page numbers are the only numbers)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (read, Eq. 3.3.5)
  - https://www-nds.iaea.org/amdc/ame2020/mass_1.mas20.txt (read; IAEA AMDC table)
  - NIST CODATA pages mpu, mnu, malu, mdu, mtu, muc2mev, rydhcev, k (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read, for a suggested fix: central temperature 1.571 × 10⁷ K)
  - Wang et al., AME 2020, Chinese Physics C (IOP Publishing): not read; values taken from the IAEA table above, as the page says
verdict: needs-changes
---

# Review: Binding energy, fission and fusion

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Text after the helium-4 example, and reference `nistRy` location | 13.6 eV and the hydrogen ionisation energy are lesson **7.4** (`bohr-atom-and-spectral-lines`, §4 row 7.4); 7.5 is "Spectra in astronomy" and does not give 13.6 eV. Lesson 8.3 correctly says 7.4 | "Freeing the electron of hydrogen takes 13.6 eV (lesson 7.5)"; nistRy: "(lesson 7.5)" | Change both to lesson 7.4 |
| 2 | warning | `nistRy` reference (writer's open point on the 13.6 eV entry) | NIST `rydhcev` is R∞hc = 13.605 693 eV, the Rydberg energy for an infinitely heavy nucleus; hydrogen's own ionisation energy is 13.598 eV (reduced mass) | "the energy that frees the electron of hydrogen from its ground state" | Either drop `nistRy` and rely on lesson 7.4 (which cites its MIT source for 13.6 eV; the calcs `hydrogen-ionisation` fact can cite lesson 7.4's source), or reword the location to "Rydberg energy R∞hc; hydrogen's ionisation energy is close to it, 13.6 eV". Both round to 13.6, so no number changes |
| 3 | warning | Formula "One way uranium-235 can split" `at`, and reading6 location | 22.01 L20 p. 1 is the course introduction only; the absorption, compound nucleus and two fission products are on p. 2, neutron emission and later betas and gammas on p. 3, ν̄ ≈ 2.4 on p. 4 | at="pp. 1–2"; location "pp. 1–2: … later betas and gammas" | Use pp. 2–3 (and "p. 4: about 2.4"); the in-text "(MIT 22.01 Lecture 20, pp. 1–4)" can become pp. 2–4 |
| 4 | warning | Paragraph after the barrier example: "In practice fusion starts at lower temperatures … some nuclei moving much faster than the average, and quantum physics lets two nuclei now and then slip through the electric barrier" | No cited source covers the fast tail or tunnelling (searched all eight MIT sources) | Unsourced (writer's open point); also uses tunnelling before lesson 8.6 (waves of matter) | The physics is correct and standard. Give it a permitted, concrete anchor: NASA Sun Fact Sheet, "Central temperature: 1.571 × 10⁷ K" (about 16 million kelvin, some 200 times below the 3.4 × 10⁹ K estimate) shows that fusion runs far cooler than the estimate; then keep the two reasons as plain words and point forward ("lesson 8.6 explains how quantum physics allows this"). Add the NASA value to calcs as a fact |
| 5 | warning | Same paragraph, quiz 3, flashcard and summary: "many millions of kelvin" | 22.01 L2 p. 24 (Short): fusion-reactor plasma is "up to like millions or tens of millions of Kelvin" | "many millions of kelvin" | The page's phrase is safe, but Short's figure is low for a D–T power plant (such plasmas run near 10⁸ K); do not repeat it as a number (Writing rule 4). Keep "many millions" or write "tens of millions of kelvin or more", and in reading2's location quote Short as he said it, without endorsing the range. Only state a 100-million figure if a §2.0 source gives it |
| 6 | warning | Callout "Where the elements come from" | 22.01 L2 p. 8: stars build up to iron cores | "Heavier elements were made much later, by fusion inside stars, which can build nuclei up the curve as far as the iron peak but no further … The same curve … tells us where the atoms around us were made." | Leaves the reader thinking all heavier elements come from fusion. Add one sentence: elements beyond iron (gold, uranium) are made when nuclei capture neutrons, in dying and exploding stars and in collisions of neutron stars (a NASA page could be cited by title and date), or say "elements up to iron" instead of "heavier elements" |
| 7 | warning | Barrier example: "½mv² … $\tfrac32 k_B T$ (lesson 4.4, with k_B = 1.38 × 10⁻²³ J/K)" | §4 row 4.4 "Kinetic theory: temperature is motion" (`kinetic-theory`, planned, PC 1). Its listed old source (CP 13.4) is the section that gives the mean kinetic energy 3/2 kT, so the row covers the idea; but the new Block 4 main source (Siyavula kinetic molecular theory) may treat it only qualitatively | Uses 3/2 k_B T and the symbol k_B as known | Counts as introduced (planned prerequisite, title and row cover it). Ask PC 1 (or add an item to OWNER-TODO / the two-PC handoff) to make sure 4.4 states E_k,avg = 3/2 k_B T with k_B; until then this lesson may add a one-line reminder of what the formula means |
| 8 | info | "Helium-4 is a special case … which is why it sits high above the curve" | The plotted curve starts at A = 8 (NaN below); the formula at A = 4 would give 3.8 MeV | "sits high above the curve" | Fine with the caption's "Very light nuclei such as helium-4 do not follow the smooth curve"; optionally "far above what the formula gives (about 3.8 MeV)" |
| 9 | info | "Altogether one fission gives about 200 MeV (MIT 22.01 Lecture 7, p. 12)" | Short: fission gives "like 200 MeV of recoil energy" | Total including the later decays | The page's physics (fragments ≈ 184 MeV here, about 200 MeV in all) is right and better than the spoken "recoil"; no change needed, or add "(Short calls it all recoil energy; most of it is)" |

## Formulas and citations
- **Mass defect Δm = Zm_p + Nm_n − M** and **E_b = Δm c²** (mit = 22.02 Ch. 1, Sec. 1.2.1, p. 6): supported; the notes write B = [Zm_p + Nm_n − m_N]c² and then the atomic-mass form with Zmₑ subtracted, which the page's bracket sentence follows. Correct.
- **1 u × c² = 931.5 MeV** (Sec. 1.1.2, p. 6, "c² = 931.502 MeV/u"): supported; the page rounds to 931.5 and its check with CODATA (931.494) is in calcs. Correct.
- **Q = (m_before − m_after)c²** (reading4 = 22.01 L6, p. 2): supported ("initial masses minus the final masses … how much energy is available … Q"). Also in 22.02 p. 12.
- **n + ²³⁵U → ¹⁴⁰Xe + ⁹⁴Sr + 2n** (reading6 = 22.01 L20): the general process is on pp. 2–3, not p. 1 (finding 3); the `at` says the split is the page's own example. Balanced: 236 = 236, 92 = 92.
- **D + T → ⁴He + n** (reading2 = 22.01 L2, p. 7): supported; the sentence runs onto p. 8 ("… helium and another / neutron"). "pp. 7–8" would be exact (info).
- **U = ke²/r** (mit802ch3, Eq. 3.3.5): Eq. (3.3.5) is U₁₂ = q₁q₂/(4πε₀r₁₂). Correct; lesson 6.4 already has U = kQq/r.
- **8.033 Lecture 13 slides** (OCW file lecture12_part1; the deck's own slide 3 says "Lecture 12", the site's 8.033 syllabus numbers it 13, consistent with `atoms-photons-nuclei`): slide 27 "Rest mass and binding energy" (binding energy = rest energy of free nucleons minus that of the nucleus) supports the location; slide 28 has the semi-empirical formula E_binding/c² ≈ [15.8A − 18.3A^(2/3) − 0.714 Z²/A^(1/3) − 23.2 (A − 2Z)²/A + (−1)^Z 12/A^(1/2)] MeV, pairing omitted for odd A; slide 30 is the B/A curve with "Fusion" and "Fission" arrows (image courtesy of Wikipedia: cited for the idea only, not reproduced). All three locations correct.
- **Plot curve**: the expression uses exactly slide 28's coefficients (15.8, 18.3, 0.714 with Z², 23.2), without the pairing term (stated in the caption), with Z = A/(2 + 0.01539 A^(2/3)). Setting ∂B/∂Z = 0 gives Z = 92.8A/(185.6 + 1.428A^(2/3)) = A/(2 + 0.015388 A^(2/3)), so 0.01539 is right (calcs identity `stability-z` also checks it). Curve values: A = 12: 6.91; 16: 7.46; 56: 8.67; 62: 8.68; 94: 8.59; 140: 8.29; 235: 7.58; 238: 7.56 MeV. Maximum 8.682 MeV at A = 65 (8.681 at A = 62). Caption "peaks at about 8.7 MeV near A = 60" is correct; calcs `curve-peak` "where" says "(at A = 62)": the true maximum is A ≈ 65 (info).
- "MIT 22.02 notes, Sec. 1.2.2, pp. 7–8" (liquid drop, volume and surface terms): correct. "Sec. 1.3.1, p. 11" (Coulomb repulsion grows as Z², the nuclear force as A): correct, the sentence is on p. 11 in 1.3.1.
- 22.01 checks: L2 p. 7 (torus, magnets, plasma, D + T), p. 8 (binding energy per nucleon, fusion of light and fission of heavy nuclei, iron as the limit), p. 24 (plasma temperature, see finding 5); L3 p. 4 (Q = energy released; boron carbide control rods); L7 p. 11 (hydrogen as moderator), p. 12 (≈ 200 MeV per fission, thermal ≈ 0.025 eV, water as moderator); L16 p. 3 (3.5 million times coal, said by the TA), pp. 4–5 (steam turbine, control rods); L20 p. 4 (ν̄ ≈ 2.4). All correct as PDF page numbers. Enrichment, mentioned in the reactor list, is in L16 and L20 rather than L3 or L7; the list's "(MIT 22.01 Lectures 3, 7 and 16)" covers it through L16 (info).
- IAEA AME 2020 (mass_1.mas20): ²H 1112.2831, ⁴He 7073.9156, ¹²C 7680.1446, ¹⁶O 7976.2072, ⁵⁶Fe 8790.3563, ⁶²Ni 8794.5555, ⁹⁴Sr 8593.8344, ¹⁴⁰Xe 8290.8875, ²³⁵U 7590.9151, ²³⁸U 7570.1262 keV: all ten match the reference and the rounded table.
- NIST CODATA (proton, neutron, alpha, deuteron, triton masses in u; 931.494 103 72 MeV; R∞hc 13.605 693 122 990 eV; k = 1.380 649 × 10⁻²³ J/K): all confirmed today.

## Arithmetic and answer checks
Recomputed every number; `npm run calc:test -k hs-8 and fission-and-fusion` passes.
- 1 MeV = 1.6 × 10⁻¹³ J; 1.66 × 10⁻²⁷ × 9.0 × 10¹⁶ = 1.494 × 10⁻¹⁰ J → 1.49 × 10⁻¹⁰; ÷ 1.6 × 10⁻¹³ = 933.8 → 934 MeV. OK.
- Helium-4: 4.03188 u; Δm = 0.03037 u; 0.753% → 0.75%; 28.29 → 28.3 MeV; 4.53 × 10⁻¹² J → 4.5 × 10⁻¹²; 7.07 MeV per nucleon. OK. 28.3 MeV / 13.6 eV = 2.08 × 10⁶, "about 2 million". OK.
- Fission estimate: 1783.65 → 1783.7; 1160.6; 807.46 → 807.5; 1968.1; Q = 184.4 → 184 MeV (with unrounded AME values 184.7). OK. 200 MeV / 13.6 eV = 1.47 × 10⁷, "some 15 million". OK.
- Reactor: 3.2 × 10⁻¹¹ J; 9.375 × 10¹⁹ → 9.4 × 10¹⁹ s⁻¹; 235 × 1.66 × 10⁻²⁷ = 3.90 × 10⁻²⁵ kg; × 86 400 → 3.17 kg → 3.2 kg/day. OK (a realistic figure for 3 GW thermal). Check of the TA's 3.5 million: 3.2 × 10⁻¹¹ J / 3.90 × 10⁻²⁵ kg = 8.2 × 10¹³ J/kg, against coal at roughly 2.5 to 3 × 10⁷ J/kg gives 3 × 10⁶: consistent.
- D–T: 5.02905; 5.01017; 0.01888 u; × 931.5 = 17.59 → 17.6 MeV (CODATA unrounded: 17.59). Per u: 3.52 and 0.847; ratio 4.15, "about 4 times". OK.
- Barrier: 1.512, 1.731, sum 3.243 → 3.24 fm; U = 7.11 × 10⁻¹⁴ J → 7.1 × 10⁻¹⁴; 0.444 → 0.44 MeV; T = 3.43 × 10⁹ K → 3.4 × 10⁹. OK.
- Quiz 0: 16 × 7.98 = 127.7 → 128 MeV correct; 64 (protons only) explained; 0.50 MeV (7.98/16) not in calcs (info). Quiz 1: 9.3 MeV correct. Quiz 2: answer 2 correct (2 × 2 × 1.11 = 4.45 MeV → 28.3 MeV, about 24 MeV released); the other three cost energy, as explained. Quiz 3: answer 1 correct; explanation true. Quiz 4: answer 1 correct; moderator distinction right.
- Flashcards: all values check (0.03037 u, 28.3 MeV, 7.07; peak about 8.8, uranium about 7.6; 200 MeV, 2 or 3 neutrons; 17.6 MeV, 0.44 MeV).

## Only earlier terms
- Earlier lessons used correctly: u, Z, N, A, isotopes, deuterium and tritium, R = R₀A^(1/3) with R₀ ≈ 1.2 fm, femtometre, strong force acting on nearest neighbours, natural uranium mostly ²³⁸U, and the "missing mass" puzzle (all 7.7, `the-nucleus`, which ends its last section on exactly that puzzle); decay of neutron-rich fragments and radioactive waste (7.8); Coulomb repulsion (6.2) and U = kQq/r (6.4); generator (6.11, `electromagnetic-induction`, which covers generators); MeV and E = mc² (8.3).
- 13.6 eV is credited to the wrong lesson (finding 1).
- 3/2 k_B T: planned lesson 4.4 (finding 7).
- Tunnelling ("quantum physics lets two nuclei … slip through") comes before 8.6; plain words, no term used (finding 4).
- Defined in place: mass defect, binding energy, binding energy per nucleon, Q, fission, fusion, chain reaction, moderator, control rods, plasma.

## Coverage
- §4 row 8.4 (P 22.4; CP 31.6, 32.5, 32.6): binding energy and mass defect, the B/A curve, fission and chain reactions, reactors, fusion and its temperature. All covered at VWO level, with Q from masses and from binding energies (both VWO skills).
- §3.5 lists the PhET sim `build-a-nucleus` as fitting 8.4; the page uses none (info; content:check warns about unused sims, and 7.7/7.8 may already use it).

## Where this leads
- 8.033 Lecture 13 → `content/year-2/8.033/atoms-photons-nuclei.mdx` (lecture 13, reviewed), as in the §4 row. The "why" (binding energy as missing rest energy, the semi-empirical formula behind the graph, fusion and fission read off the curve) matches slides 27, 28 and 30.
- `towards: false` is right (8.4 is not the block's last lesson).

## Licensing and AI terms
- No copied sentences; transcripts are paraphrased.
- No reused figure: the B/A graph is generated from the slide-28 formula. 22.02 Ch. 1 has "© Brookhaven National Laboratory. All rights reserved" (Fig. 3, p. 10), "© Neil Spooner" and a "Courtesy of Thomas Jefferson National Accelerator Facility" item; 8.033's slide 30 is "Image courtesy of Wikipedia" and slide 29 "courtesy of the National Nuclear Data Center". None is used; 22.02's own Fig. 1 B/A plot is not copied either.
- IAEA credited by name in the `ame2020` reference, no logo, no implied endorsement. The AME paper's journal (Chinese Physics C, IOP Publishing) is cited only; the values come from the IAEA's own table file, which is the right way round under the IOP rule.
- NIST: values looked up, no bulk download. No forbidden source; no OpenStax text (the §4 row's old section numbers were not opened).
- Worked examples (helium-4, Xe/Sr split from tabulated B/A, 3 GW reactor, D–T energy, barrier temperature) are not the sources' exercises.

## Notes
- `npm run content:check`: 0 errors; for this page only "prerequisite kinetic-theory is planned" and "no review file yet".
- Writer's open points answered: cooler real fusion and "many millions" (findings 4 and 5); 3/2 k_B T and lesson 4.4 (finding 7); 13.6 eV origin (findings 1 and 2); the Plot formula and coefficients (correct, see Formulas); 22.01 page numbers (correct as PDF pages, except L20, finding 3); AME 2020 values (all ten match).

## Resolution (2026-11-20, by the page author)
1. Fixed: the text after the helium-4 example now says lesson 7.4.
2. Fixed by dropping `nistRy`. The 13.6 eV now cites a new reference `mit804h`, MIT 8.04 (Spring 2016) Lectures 21 and 22 notes, p. 7, eq. (2.31), the same source lesson 7.4 uses for it. Calcs: hydrogen-ionisation (origin mit), he4-vs-hydrogen and fission-vs-hydrogen now cite it. No numbers changed.
3. Fixed: the fission formula's `at` is "pp. 2–3", reading6's location now splits p. 2 (absorption, compound nucleus, two fragments), p. 3 (two or three neutrons, later betas and gammas) and p. 4 (about 2.4); the in-text citation is pp. 2–4. Calcs fission-nucleons and fission-protons updated.
4. Fixed: the paragraph now gives the NASA Sun Fact Sheet's central temperature, 1.571 × 10⁷ K (checked on the page today), "about 16 million kelvin and some 200 times cooler than our estimate", keeps the two reasons in plain words and points to lesson 8.6 for how quantum physics allows slipping through the barrier. New reference `sunfact`; calcs sun-central-temperature (fact) and barrier-over-sun (3.4 × 10⁹ / 1.571 × 10⁷ = 216).
5. Kept "many millions of kelvin" (no number). reading2's p. 24 location now reports Short's range as his spoken words, not as fact.
6. Fixed with the simpler option: the callout says "Elements up to iron were made much later, by fusion inside stars" and "where many of the atoms around us were made". No neutron-capture sentence added, since no cited permitted source on the page supports it.
7. Kept the 3/2 k_B T credit to lesson 4.4 (with k_B = 1.38 × 10⁻²³ J/K stated in the example). For PC 1: please make sure lesson 4.4 (`kinetic-theory`) states the mean kinetic energy of a gas particle, 3/2 k_B T, with the symbol k_B.
8. Fixed: calcs curve-peak now evaluates at A = 65 (maximum 8.682 MeV; the caption's "near A = 60" stays true). "sits high above the curve" replaced by "is so tightly bound for such a light nucleus (the point He-4 on the graph)"; the callout's "high on the left of the curve" became "of the graph". New calcs entry quiz-o16-divided (7.98/16 = 0.50 MeV). The optional PhET `build-a-nucleus` was not added: lessons 7.7 and 7.8 already use it.
9. No change (as the review allows).

No symbol changes. Checks: `npm run calc:test -- -k fission-and-fusion` all pass; `npm run content:check`: 0 errors, for this page only the planned-prerequisite warning (kinetic-theory). Status set to reviewed.
