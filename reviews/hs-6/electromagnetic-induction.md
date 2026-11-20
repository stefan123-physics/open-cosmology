---
page: content/year-0/hs-6/electromagnetic-induction.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electromagnetism/10-electromagnetism-03 (read; CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/electrodynamics/11-electrodynamics-02 (read; CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/electrodynamics/11-electrodynamics-03 (read; CC BY footer)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha10faraday_law/ (read, PDF; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w09d2/ (read, PDF; no "rights reserved" or "courtesy" notice)
verdict: pass-with-notes
---

# Review: Electromagnetic induction (lesson 6.11)

No errors found. Every formula citation was checked against the source at the place named, every number was recomputed by hand (and `calc:test` passes all 31 entries of the calcs file), and every quiz answer is right. The findings below are warnings and notes.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Why power lines use high voltage" and worked example "Losses in a power line" | Lesson 6.8 (electric-power.mdx, "Why power lines use high voltages") already gives the same argument (P = VI, loss I²R, loss falls with the square of the current) and a worked example of the same structure with the same 5.0 Ω line (1 MW at 10 kV and 100 kV), ending "transformers (lesson 6.11) near the houses bring the voltage down again". | Repeats the argument in a full paragraph and adds a second worked example of the same kind (10 MW, 5.0 Ω, 10 kV and 400 kV). | Cut to a two-sentence recap that points to lesson 6.8, and replace the example with one that needs this lesson, e.g. the turns ratio of a transformer that takes 400 kV down to 10 kV (40 : 1) and the current on each side for the same 10 MW. Remove the matching calcs entries if the example goes. |
| 2 | warning | "Generators and alternating current", paragraph on the mains | Siyavula 11.3: AC in South Africa "is generated at a frequency of 50 Hz". Nothing about how fast generators turn. | "made by generators that turn 50 times a second, so it alternates at 50 Hz" | True only for the simplest (two-pole) generator; hydro and many other generators have more poles and turn more slowly. Say that the voltage alternates 50 times a second, which for the simple one-coil generator of this lesson means 50 turns a second. |
| 3 | warning | Introduction | MIT Sec. 10.1 and Siyavula 11.2 say generators make most electricity; neither says every power station does. | "in every power station a magnet and a coil turn past each other" | Not true of solar farms (photovoltaic cells have no generator). Write "in almost every power station" or "in every power station except solar farms". "Almost all the world's electricity" is fine. |
| 4 | warning | calcs file, `lamp-power` and `lamp-primary-current` | Session 21 slide 26 gives only ε_s/ε_p = N_s/N_p and the step-up/step-down terms; no currents or power. | The two entries cite `reading3, slide 26` for P = V_sI_s and I_p = P/V_p. | Cite what they rest on: the power balance is derived on the page from energy conservation and P = VI (lesson 6.8). Siyavula 11.3 supports it in words ("transmitted along power lines at low current"), so `siy-ac, Sec. 11.3` is a fair citation, or mark them as derived. |
| 5 | info | "A rod moving through a field", first paragraph | MIT pp. 6–7: charges separate until the electric field of the separated charges balances qvB, E = vB, and the potential difference between the ends is the motional emf. | "charges pile up at one end until an emf builds up between the ends" | Slightly loose: the charges pile up until their electric field stops further charge moving; the potential difference then left between the ends equals the emf. One clause would make it exact. |

## Formulas and citations
- **Φ = BA cos θ** (`cite="mit"`, Sec. 10.3, Magnetic flux): `mit` is the page's `source.url`, Siyavula Gr 11 10.3. The formula is there under "Magnetic flux", with θ the angle between B and the normal to the loop. Correct. (MIT's Chapter 10 also has a "Sec. 10.3", Induced Electric Field; the credits show the Siyavula title, so no change needed.)
- **1 Wb = 1 T m²** (reading1, p. 2, below Eq. (10.1.2)): on printed p. 2 directly below Eq. (10.1.2). Correct. Siyavula names the weber but gives no T m², so citing MIT is right.
- **ε = −N ΔΦ/Δt** (`mit`, Sec. 10.3, Faraday's law): exactly Siyavula's form, including that the minus sign gives the direction. Correct.
- **ε = BLv** (reading1, Eqs. (10.2.1) and (10.2.4), p. 7): both equations are on printed p. 7 (10.2.1: V = El = Blv; 10.2.4: ε = −Blv from Faraday's law). Correct. MIT writes l, the page L; fine.
- **ε = NBAω sin(ωt)** (reading1, Eq. (10.4.3), p. 12): Eq. (10.4.3) is on printed p. 12 (10.4.1 is on p. 11). Correct. The calcs entry's "Eqs. (10.4.1) to (10.4.3), pp. 11 and 12" is also correct.
- **V_s/V_p = N_s/N_p** (reading3, slide 26): slide P21-26 has ε_s/ε_p = N_s/N_p, step-up for N_s > N_p, step-down for N_s < N_p. The page writes V for ε; for an ideal transformer with negligible coil resistance that is the same. Correct.
- Reading locations: reading1 "Sections 10.1, 10.2 and 10.4" match the PDF (10.1 with 10.1.1 flux and 10.1.2 Lenz's law; 10.2 motional emf; 10.4 generators). reading3 "slides 28 and 29" are the transmission slides (P21-28, P21-29). Correct.
- **Writer's open point 1, V_pI_p = V_sI_s uncited:** it is inline prose, not a `<Formula>`, and the page derives it in one sentence from conservation of energy, which is sound for an ideal transformer at VWO level. Acceptable as written; adding "(P = VI, lesson 6.8)" would show where it comes from. Only the calcs citation needs changing (finding 4).
- **Writer's open point 2, peak √2 × 230 ≈ 325 V citing Siyavula 11.3:** checked: 11.3 "Current and voltage" gives V_rms = V_max/√2 and works examples with it. Correct. (Siyavula uses 240 V for South Africa; the page keeps lesson 6.8's 230 V.)
- **Writer's open point 3, cos to sin in words:** the sentence is correct: the emf is largest where the flux changes fastest, at θ = 90° where Φ = 0, and zero when the coil faces the field. Acceptable at this level. Optional: draw the flux as a second, dashed curve in the plot so the reader sees the emf peak where the flux crosses zero.
- Claims checked against the sources: Faraday 1831 (MIT p. 1); relative motion only, meter swings the other way on withdrawal (MIT p. 1); three ways to change the flux (MIT Eq. (10.1.5), slide 4); induced north pole facing an approaching north pole and south pole facing a receding one (Siyavula 10.3, solenoid cases; MIT pp. 5–6); power in equals I²R for the rod (MIT Eq. (10.2.8)); slip rings and brushes, split-ring commutator, DC output that still rises and falls, rotating field needs no brushes (Siyavula 11.2); transformers, high voltage and low current, 50 Hz, rms (Siyavula 11.3). All supported.

## Arithmetic and answer checks
Recomputed independently:
- Tilted loop: A = 0.080 × 0.050 = 4.0 × 10⁻³ m²; Φ = 0.40 × 4.0 × 10⁻³ = 1.6 × 10⁻³ Wb; × cos 60° = 8.0 × 10⁻⁴ Wb; cos 90° = 0. Correct.
- Electromagnet: Φ = 0.30 × 2.0 × 10⁻³ = 6.0 × 10⁻⁴ Wb; ε = −150 × (−6.0 × 10⁻⁴)/0.050 = +1.8 V. Correct.
- Rod: ε = 0.60 × 0.25 × 4.0 = 0.60 V; I = 0.30 A; F = 0.60 × 0.30 × 0.25 = 0.045 N (also B²L²v/R = 0.36 × 0.0625 × 4.0/2.0 = 0.045 N); Fv = 0.18 W; I²R = 0.09 × 2.0 = 0.18 W. Correct.
- Generator: ω = 2π × 50 = 314.16 rad/s; NBAω = 100 × 0.20 × 0.010 × 314.16 = 62.8 V ≈ 63 V. Correct. Plot: largest peak (N = 200, f = 60 Hz) 150.8 V, inside ±160 V; smallest (N = 20, f = 10 Hz) 2.5 V, nearly flat on that axis but correct.
- Mains peak: √2 × 230 = 325.3 V. Correct.
- Lamp transformer: N_s = 1150 × 12/230 = 60; P = 18 W; I_p = 18/230 = 0.0783 A ≈ 0.078 A. Correct.
- Power line: 1000 A, 5.0 MW (half of 10 MW); 25 A, 3125 W = 0.03125% ≈ 0.031%; 5.0 × 10⁶/3125 = 1600 = 40². Correct.
- Quiz 1 (answer "zero"): correct. Quiz 2 (6.0 V): 400 × 3.0 × 10⁻⁴/0.020 = 6.0 V; 0.015 V is the result without N, as explained. Quiz 3 (north pole, pushes away): correct by Lenz's law; the other choices are wrong. Quiz 4 (doubles): peak NBAω ∝ ω. Correct. Quiz 5 (12 V): 230 × 120/2300 = 12 V; inverted ratio 230 × 2300/120 = 4408 V ≈ 4.4 kV. Correct.
- Calcs file: every number on the page has an entry; quiz indices are 0-based as the harness expects (`quiz: 1`, `quiz: 4`). `calc:test` filtered to this page: 31 passed. `content:check` reports only the expected "conservation-of-energy is planned" warning and the missing review file for this page.

## Only earlier terms
- emf (6.7), Ohm's law (6.6), P = VI, I²R, 230 V, 50 Hz, AC and the effective (rms) value (6.8), qvB, F = BIL, the right-hand rule, the split-ring commutator and the motor (6.9), the grip rule for a loop with the thumb out of the north face, solenoid, iron core and electromagnet (6.10), ω = 2πf and radians per second (5.1), cos θ (angles-and-trigonometry): all introduced earlier; checked in the lesson files.
- Conservation of energy (lesson 3.4, `conservation-of-energy`) is planned but not written (PC 1); its lesson-list title covers the idea, so it counts as introduced.
- Normal to a surface, magnetic flux, weber, slip rings, brushes, primary, secondary, step-up and step-down are introduced on the page.
- `current-and-ohms-law` (6.6) is used ("by Ohm's law (lesson 6.6)") but is not in `prerequisites`; it is reached through `series-and-parallel` and `electric-power`, so this is fine (info).

## Coverage
- §4 row 6.11: "Electromagnetic induction", PhET `faradays-law`. The page covers flux, Faraday's law, Lenz's law with the energy argument, motional emf, the AC and DC generator, peak and rms, the transformer and transmission: the VWO core (inductie, flux, inductiespanning, wisselspanning, transformator, transport van energie) and all of Siyavula Gr 11 10.3, Gr 12 11.2 and 11.3 except self-induction and inductors and applications such as car alternators, which are not needed here.
- Eddy currents appear only through "induction hobs"; 8.02 Lecture 21 picks them up. Fine at this level.
- 6.9 and 6.10 are recapped only briefly (qvB, BIL, commutator, grip rule), which is right. Overlap with 6.8: finding 1.

## Where this leads
- 8.02 Lecture 20 (`faradays-law`, "Faraday's law of induction"): covers ε = −N dΦ/dt with Φ = ∫B·dA and the induced, circulating electric field. The `why` is accurate.
- 8.02 Lecture 21 (`transformers-and-magnetic-materials`, "Eddy currents, transformers and magnetic materials"): covers eddy currents, magnetic brakes, mutual inductance, the transformer and transmission. The `why` is accurate.
- `towards: false`: correct, 6.11 is not the block's last lesson.

## Licensing and AI terms
- All three Siyavula URLs are `CCBY` rows in docs/siyavula-licences.tsv (lines 418, 508, 509), and each page's footer says CC BY.
- Neither MIT PDF has an "All rights reserved", "Courtesy of" or "excluded from our Creative Commons license" notice.
- No copied sentences. The Lenz's law statement is a rewording of the standard statement, not MIT's or Siyavula's sentence; "A generator turns mechanical energy into electrical energy" is a standard phrase.
- Worked examples and quiz questions are the page's own: Siyavula's are a 5-turn 0.50 m square coil, a 9-turn solenoid of unknown radius, a 4-turn coil at 35°, and laptop and camera chargers; MIT's transmission example is 120 kW over 0.40 Ω at 240 V and 24 kV. None match the page's.
- No figures from any source: one generated `<Plot>` and the pinned PhET simulation.
- No Siyavula branding: the name appears only in the source credits.
- No forbidden source cited or used (no OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman or Tong). No NASA or ESO material.

## Notes
- "Like the one in a phone charger": modern chargers use a small high-frequency transformer in a switch-mode supply, not a 50 Hz step-down transformer. Not wrong, but "a doorbell transformer" or "an old-style mains adapter" is more exact (info).
- calcs `mains-frequency` uses `origin: mit` for a Siyavula fact; the file header defines `origin: mit` as "a value taken from a cited source", so it follows the convention (info).
- The physics of the Lenz section, the generator, the DC generator, the transformer on DC ("a brief pulse when you switch on or off") and the transmission argument is correct.

## Resolution (2026-11-20, by the page author)

1. Fixed. "Why power lines use high voltage" is now a two-sentence recap that points to lesson 6.8 (P = VI, loss I²R falling with the square of the current) and says transformers make the step up and down possible. The "Losses in a power line" example is replaced by an original one that needs this lesson, "A substation transformer": 12 MW arriving at 400 kV, stepped down to 10 kV; (a) turns ratio 40 and a 10 000-turn primary for a 250-turn secondary, (b) 30 A in the line and 1200 A out of the secondary, the current rising by the same factor 40. The five line-* calcs entries were removed and five substation-* entries added (turns ratio and primary turns cite reading3 slide 26; the currents cite siy-ac Sec. 11.3 with the power balance derived on the page).
2. Fixed. The mains paragraph now says the voltage alternates 50 times a second (50 Hz); for the simple one-coil generator of this lesson that means 50 turns a second, while large generators with several pairs of magnet poles turn more slowly and still give 50 Hz. The calcs `mains-frequency` shown strings were updated.
3. Fixed: "in almost every power station".
4. Fixed. `lamp-power` and `lamp-primary-current` now cite siy-ac Sec. 11.3, noting P = VI from lesson 6.8 and the power balance derived on the page from conservation of energy.
5. Fixed. The rod paragraph now says the charges pile up until the electric field of the separated charges pushes on each charge as hard as qvB, in the opposite direction, so no more charge moves; the potential difference then left between the ends is the emf (MIT pp. 6–7, checked in the local PDF text).

Optional notes: "(P = VI, lesson 6.8)" added after the power balance. The phone-charger example is now "a doorbell circuit or an old-style mains adapter". The `origin: mit` convention for `mains-frequency` is kept (file header defines it). The suggested dashed flux curve in the plot was not added.

Checks: `npm run calc:test -- -k electromagnetic-induction`: 30 passed. `npm run content:check`: 0 error(s); the only warning for this page is the expected "conservation-of-energy is planned but not written yet". No symbol changes were needed. Status set to reviewed.
