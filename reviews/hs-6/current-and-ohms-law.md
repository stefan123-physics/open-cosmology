---
page: content/year-0/hs-6/current-and-ohms-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electric-circuits/11-electric-circuits-02 (read)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ (read; PDF 6b2cf7ec2d597d7459930a7e6f700bea_chapter6current.pdf downloaded to a scratch folder outside the repo and extracted with pdftotext)
  - public/phet/ohms-law_1.4.33_en.html (local copy, strings inspected)
verdict: needs-changes
---

# Review: Current, resistance and Ohm's law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Try it" | The pinned PhET *Ohm's Law* 1.4.33 has only two sliders: voltage (V) and resistance (R); its strings contain only `voltage`, `resistance`, `current` (the resistivity symbol ρ comes from a shared library and is not a control). Resistivity, length and area are controls of a different sim (*Resistance in a Wire*), which is not in `public/phet/`. | "Change the voltage of the battery and the resistivity, length and area of the resistor … a longer resistor lets less current through, and … a thicker one lets more through." | Rewrite the instructions for the controls the sim has: change V and R, check that doubling V doubles I and doubling R halves I (and read V/I off the sim). Leave the length/area check to the text, or add *Resistance in a Wire* to `public/phet/` (pinned copy + manifest) as a second sim. |
| 2 | warning | Plot "lamp" curve and caption | No source gives a lamp model; Siyavula 11.2 only says the filament's resistance rises as it heats. | "for a small 6 V lamp, from the simple model I = 0.30 × (V/6.0)^0.6 A", plotted from 0 to 12 V. | (a) The curve runs to 12 V, twice the lamp's rating, where a real 6 V lamp would burn out: cut it at 6 V (`V <= 6 ? 0.30*(V/6)^0.6 : NaN`) or say "a small 12 V lamp" and rescale. (b) The power law has R = V/I ∝ V^0.4, which goes to 0 Ω as V → 0 and gives a vertical tangent at the origin; a real cold filament has a finite resistance (roughly a tenth of its hot value), so its graph starts as a straight line. Say in the caption that the model is made up to show the shape and is not accurate near 0 V (or use a model with a finite cold resistance). The model's numbers are right: 0.102 A at 1.0 V and 0.30 A at 6.0 V, matching the worked example. |
| 3 | warning | "Ohm's law", first sentence | Neither source describes Ohm's experiment. Historically Ohm (1827) varied the length of wire in the circuit and used a thermocouple as a steady source; he did not set and double "the voltage" in the modern sense. | "Ohm measured the currents through metal wires: when he doubled the voltage across a wire, the current through it doubled too." | Make it non-historical: "Ohm found that, for a metal wire, the current is proportional to the voltage across it: double the voltage and the current doubles." |
| 4 | warning | "Ohmic and non-ohmic conductors" | Siyavula 11.2 lists light bulbs and diodes (and transistors) as non-ohmic. The VWO checklist (from the owner's topic list, not read here) normally also has the NTC thermistor and the LDR, and Dutch VWO uses conductance G = I/V in siemens. | Bulb and diode only; no conductance. | Consider one or two sentences on an NTC (resistance falls as it warms) and an LDR (falls in light), and optionally G = 1/R. Owner to decide against the VWO checklist. |
| 5 | info | "Electric current", currents in daily life | MIT p. 1: "mega-amperes in lightning to nano-amperes in your nerves" (in paraphrase). Kettle current not in any source. | "an electric kettle about ten amperes"; MIT credited for nerves and lightning. | Correct (2.3 kW at 230 V is 10 A). Could add a calcs entry (P/V) or leave as a standard figure. MIT could be named as "MIT notes" with a cite to reading3; it already is in words. |
| 6 | info | "Electrons drift slowly" | MIT Problem 6.7.4 gives n = 8.49 × 10²⁸ /m³ for copper; no source says "per atom". | "(one or so for every atom)" | Standard and correct (copper has about 8.5 × 10²⁸ atoms/m³ and one conduction electron each). Fine as is. |
| 7 | info | Hose paragraph | No source. | "the push travels along the wire very fast, at a large part of the speed of light" | Correct and standard (the signal is an electromagnetic wave guided by the wires, typically 0.5c to nearly c). Fine; optionally "(lesson 6.12)". |
| 8 | info | Meters | Siyavula 17.2: ammeter in series, voltmeter in parallel, start on the highest range. No source gives meter resistances. | "very small resistance" / "very large resistance" | Correct and standard. Fine. |
| 9 | info | Superconductors | Siyavula 17.3: superconductors have no resistance and only work at very low temperatures, the highest being HgBa₂Ca₂Cu₃Oₓ at −140 °C. | "At ordinary pressure, even the best ones known today only do this far below the freezing point of water." | Correct, and Siyavula 17.3 (reading1) supports it: say so, e.g. "(the best known, a copper oxide, needs about −140 °C)", with a calcs fact entry if the number is added. |
| 10 | info | "Electric current" | Lesson 6.1 writes Q = ne. | "Q = Ne, as in lesson 6.1" | Fine, since n is needed for number density here; perhaps add "(here N, because n is used below for something else)". |
| 11 | info | Diode | — | "lets almost no current through in one direction and conducts easily in the other" | Simplified: forward conduction starts only above about 0.6 V for silicon. Acceptable at this level. |
| 12 | info | Resistivity definition | MIT defines ρ = 1/σ, RA/l. | "the resistance of a cube of the material one metre on each side" | Add "between two opposite faces" for precision. |

## Formulas and citations
- `I = Q/t`, cite mit (= source.url, Siyavula Gr 10 17.2), "Flow of charge": Siyavula gives I = Q/Δt in that subsection. Correct.
- `1 A = 1 C/s`, cite mit, "Sec. 17.2, Current": Siyavula defines the ampere as one coulomb per second in 17.2 (under "Flow of charge"; there is no subheading "Current" other than the section title). Acceptable; "Flow of charge" would be more exact (info).
- `I = n e v_d A`, reading3 Eq. (6.1.4): MIT has I_avg = ΔQ/Δt = n q v_d A. Page notes q → e. Correct. The page's derivation (charge in length v_d t) follows MIT's Δx = v_d Δt argument.
- `R = V/I`, reading2 Sec. 11.2: Siyavula 11.2 gives I = V/R rearranged to R = V/I. Correct.
- `1 Ω = 1 V/A`, reading1 Sec. 17.3 "Resistance": Siyavula 17.3 defines the ohm as a volt per ampere. Correct (MIT Eq. 6.2.8 also).
- `V = IR`, reading3 Eq. (6.2.7): correct.
- `R = ρL/A`, reading3 Eq. (6.2.10), l → L noted: correct. Siyavula 17.3 gives only R ∝ L/A (not in CAPS), consistent.
- Resistivity table: MIT table at 20 °C (read with `pdftotext -raw`, since the layout version scrambles columns): silver 1.59 × 10⁻⁸, copper 1.72 × 10⁻⁸, aluminium 2.82 × 10⁻⁸, nichrome 100 × 10⁻⁸, glass 10¹⁰ to 10¹⁴ Ω m. The page's rounded values all match. "At room temperature" for MIT's 20 °C is fine.
- Siyavula 17.2 mentions Franklin's guess and conventional current; MIT p. 1 states positive-charge convention and conduction in electrolytes and ionized gases, supporting the salt-water / neon sentence.
- Calcs file sources: `lamp-model-*` and `lamp-ratios` cite reading2 "Ohmic and non-ohmic conductors", but the model is the page's own; `origin: page-own` is right, the `source` line is slightly misleading (info).

## Arithmetic and answer checks
All recomputed independently; `npm run calc:test -- -k current-and-ohms-law`: 35 passed.
- Quiz 0: 2.0 min = 120 s; Q = 0.40 × 120 = 48 C. Distractors: 0.80 (minutes not converted), 300 (t/I), 0.0033 (I/t). Only 48 C correct.
- Quiz 1: 5.5/220 = 0.025 A. Distractors 40 (R/V), 1210 (VR), 0.25 (decimal slip). Correct.
- Quiz 2: ρ(2L)/(2A) = ρL/A, unchanged. Correct.
- Quiz 3: flatter I–V graph → R = V/I rises; answer 1 correct, others wrong.
- Quiz 4: ammeter series, voltmeter parallel. Correct.
- Bulb: 240 s; Q = 36 C; N = 36/1.6e-19 = 2.25 × 10²⁰ → 2.3 × 10²⁰ (> 10²⁰, "a hundred billion billion"). Correct.
- Drift: A = 1.5e-6 m²; v_d = 3.0/(8.5e28 × 1.6e-19 × 1.5e-6) = 3.0/20 400 = 1.47 × 10⁻⁴ m/s ≈ 0.147 mm/s ≈ 1/6.8 mm/s ("a seventh"); t = 6.8 × 10³ s = 1.89 h ("almost two hours"). Correct.
- Ohm (a) 9.0/330 = 0.0273 A = 27 mA; (b) 3.0/0.12 = 25 Ω. Correct.
- Lamp: 1.0/0.10 = 10 Ω; 6.0/0.30 = 20 Ω; ×6 V, ×3 I, ×2 R. Correct. Model: 0.30 × (1/6)^0.6 = 0.102 A; at 12 V 0.455 A (inside the 0.6 A range).
- Nichrome/copper: 1.0e-6/1.72e-8 = 58 ("about 60"). Glass/copper ≥ 1e10/1.72e-8 = 5.8 × 10¹⁷ ("at least 10¹⁷"). Correct.
- Cable: 1.7e-8 × 20/1.5e-6 = 0.227 Ω → 0.23 Ω. Correct.
- Nichrome: π(2.0e-4)² = 1.257 × 10⁻⁷ m²; L = 10 × 1.257e-7/1.0e-6 = 1.26 m → 1.3 m. Correct.
- Flashcards: copper 1.7 × 10⁻⁸ Ω m, "a fraction of a millimetre per second": consistent.
- Not in calcs (all fine as quoted standard figures, optional to add): kettle ~10 A, few mA indicator, 100 km.

## Only earlier terms
- Free electrons / conductors: lesson 6.1 says electrons in conductors "can move freely from atom to atom"; "free electrons" is defined in bold here. Fine.
- e = 1.6 × 10⁻¹⁹ C, Q = ne: lesson 6.1. Battery, terminal, voltage, potential difference: lesson 6.4. Electric field: 6.3. Kinetic energy: Block 3. Prefixes milli/nano: lessons 0.1–0.2. Temperature: Block 4.
- "In series" and "in parallel" are used before lesson 6.7, but the page explains each in place (break the circuit and put the meter in the gap / leads on the two ends). Acceptable.
- "Resistor", "diode", "filament", "I–V graph", "drift speed" are defined here.
- Speed of light (Block 5) fine.

## Coverage
§4 row 6.6: current, resistance and Ohm's law (old sources P 19.1; CP 20.1–20.3), PhET ohms-law. Covered: current and the ampere, conventional current, electron counting, drift speed, resistance and the ohm, microscopic cause, Ohm's law, ohmic/non-ohmic with I–V graphs, resistivity with a table, temperature dependence (qualitative), superconductors, ammeter and voltmeter. Not covered: the temperature coefficient formula ρ = ρ₀(1 + αΔT) (not needed at VWO level), NTC/LDR and conductance G (see row 4; likely on the VWO checklist). Level is right for a VWO beginner; the drift-speed section goes slightly beyond VWO but is clearly worked.

## Where this leads
- `8.02` lecture 10 = `content/year-1/8.02/dc-circuits.mdx` ("Current, resistance and DC circuits"), matching §4 (`8-02/dc-circuits`). That page does cover J, drift speed, J = σE and R = ρℓ/A, so the `why` is accurate. `towards: false` correct (not the block's last lesson).

## Licensing and AI terms
- Sources used are all on the §2.0 / AGENTS.md list (Siyavula online pages, MIT OCW CC BY-NC-SA). The MIT Chapter 6 resource page shows no "All rights reserved" or "Courtesy" notice, and the PDF text contains none (grep).
- No forbidden source cited or named (OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong: none found). The §4 row's old "P/CP" (OpenStax) references were not opened.
- No sentence copied. Closest overlaps are standard ideas reworded: Siyavula 17.3's phone-charger and thin-filament examples and "thicker connecting wires barely warm up" appear in the page in different words (same everyday examples, acceptable); "how hard it is to drive a current" vs Siyavula's "how hard it is to push electricity" is a short standard phrase. MIT's lightning/nerves range is paraphrased and credited.
- Worked examples and quiz numbers differ from Siyavula's (45 C/1 s, 53 C/2 s, 95 electrons; R = 10 Ω, I = 4 A; Exercise 11.2 values) and from MIT Problem 6.7.4 (115 A, 31.2 mm², 85.5 cm). Original.
- Only generated graphs; PhET used via the pinned local copy with the component's attribution. No Siyavula branding. No NASA/ESO material.

## Notes
- calc:test for this page passes (35 entries).
- The writer's flagged claims (one free electron per atom, signal speed, meter resistances, kettle ~10 A, superconductors) are all correct physics; only the superconductor claim has direct source support (Siyavula 17.3), which the page could cite. The lamp model is honestly labelled as a model but needs rows 2a/2b.

## Resolution (2026-11-20, by the page author)

1. (error) Fixed. "Try it" now describes the two sliders the pinned Ohm's Law sim really has, voltage V and resistance R: check that doubling V doubles I, that doubling R halves I, and that V/I gives the resistance on the slider. No new sim added; length and area stay in the text (R = ρL/A).
2. (warning) Fixed. The lamp curve is cut at the lamp's rated 6 V (`V <= 6 ? 0.30*(V/6)^0.6 : NaN`). The caption says the curve is drawn only up to 6 V and that the made-up model is only illustrative near 0 V, because a real cold filament still has some resistance and its graph starts as a short straight line.
3. (warning) Fixed. Ohm's law is stated without the history: "Ohm found that, for a metal wire, the current is proportional to the voltage across it: double the voltage and the current doubles."
4. (warning) Fixed, with MIT OCW sources only (no Siyavula page covering these was found; the Siyavula Grade 9 resistance page and an OpenLearn electronics page were checked: the first has no thermistor, LDR or conductance, the second shows only an "All rights reserved" footer, so it was not used). New paragraph in "Ohmic and non-ohmic conductors": the NTC thermistor (ceramic, resistance falls as it warms, used to measure temperature; MIT 6.071J Lab 1 handout p. 7) and the LDR (resistance falls with more light, used in light sensors; MIT 6.01SC Problem Wk.8.4.1). Conductance G = 1/R = I/V as a Formula citing MIT 6.071J "Resistive circuit analysis. Kirchhoff's Laws" p. 5, Eq. (1.6), with the siemens (Eq. 1.7), and a one-line example G = 1/25 = 0.040 S (new calcs entry `conductance-example`). The three sources are added under `references` (mit6071kirchhoff, mit6071lab1, mit601); the National Instruments "Courtesy" notices in the 6.071J handouts concern only figures, none of which is used. The Summary mentions NTC, LDR and G. The new symbol meaning for G (conductance, page-scoped) is in the coordinator's sym-current-and-ohms-law-fix.json.
5. (info) Left as is (kettle about 10 A is standard; MIT is already credited in words).
6. (info) Left as is.
7. (info) Left as is.
8. (info) Left as is.
9. (info) Fixed. The superconductor sentence now cites reading 1 (Siyavula 17.3) in words and gives its record, a copper oxide at about -140 °C; calcs fact `superconductor-record`.
10. (info) Fixed: "(here with a capital N, because n is used below for something else)".
11. (info) Left as is (acceptable at this level).
12. (info) Fixed: "the resistance between two opposite faces of a cube".
Also: the ampere Formula now cites "Sec. 17.2, Flow of charge"; the calcs `source` of `lamp-model-low` and `lamp-model-high` now says that reading 2 only states that a filament resists more as it heats and that the model is the page's own.

Checks: `npm run calc:test -- -k current-and-ohms-law`: 37 passed. `npm run content:check`: 0 error(s), no message for this page (the G meaning still needs sym-current-and-ohms-law-fix.json applied; until then the general meaning of G would show).

## Re-sourcing (2026-11-20)

docs/siyavula-licences.tsv marks Siyavula Gr 10 17.2 (Current), 17.3 (Resistance) and Gr 11 11.2 (Ohm's Law) as "All rights reserved", so every citation of them was removed. No Siyavula section marked CCBY in the TSV covers current or resistance (the CCBY electricity rows are Gr 11 9.3 Electric field, 10.2 Magnetic field of a current, Gr 12 11.2 to 11.3 generators and AC, and 13.5 electrochemistry), so the page no longer cites Siyavula at all.

- Main source: now MIT 8.02T Course Notes Chapter 6, Current and Resistance (was reading 3). New reading 1: MIT 8.02T Chapter 2, Coulomb's Law, Eq. (2.1.1), for the electron charge. Old readings 1 to 3 removed; references (MIT 6.071J, 6.01SC) unchanged.
- Formulas (all checked in the local text of Ch. 6): I = Q/t, was Siyavula 17.2, now mit Eq. (6.1.1); 1 A = 1 C/s, was 17.2, now mit Sec. 6.1 after Eq. (6.1.1); I = n e v_d A, now mit Eq. (6.1.4); R = V/I, was Siyavula 11.2, now mit Eq. (6.2.6); 1 ohm = 1 V/A, was Siyavula 17.3, now mit Eq. (6.2.8); V = IR, mit Eq. (6.2.7); R = rho L/A, mit Eq. (6.2.10).
- Calcs sources: Sec. 17.2 entries now mit Eq. (6.1.1); elementary-charge and bulb-electrons now reading1 Eq. (2.1.1) (MIT gives 1.602e-19 C, the page uses the block's 1.6e-19 C); the Sec. 11.2 entries now mit Eq. (6.2.6); lamp-model-low/high now mit Sec. 6.2, Fig. 6.2.2 and Eq. (6.2.11) (non-ohmic curve, resistivity grows with temperature; model is the page's own); lamp-ratios now mit Fig. 6.2.2; all reading3 entries now mit. The fact superconductor-record (Siyavula 17.3, -140 C) was deleted.
- Text rephrased where it followed the ARR pages: the Franklin paragraph (conventional current now stated as in MIT Sec. 6.1); the definition of resistance ("measures how strongly it opposes a current"); the cause of resistance (the phone charger, white-hot filament and thick-leads examples of Siyavula 17.3 replaced by collisions and mean free path as in MIT Sec. 6.1, with a toaster/heater and house wiring as examples); the Ohm's law statement; the lamp paragraph (Siyavula 11.2's "room temperature to about 1000 C" removed, now based on MIT Eq. (6.2.11), resistivity grows with temperature); the superconductor sentence no longer names a record or the Siyavula text.
- Checks: npm run calc:test -- -k current-and-ohms-law: 36 passed. npm run content:check: 0 error(s), no message for this page.
