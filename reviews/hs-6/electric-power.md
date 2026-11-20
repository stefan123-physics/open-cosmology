---
page: content/year-0/hs-6/electric-power.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electric-circuits/11-electric-circuits-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-05 (read)
  - https://www.siyavula.com/read/science/grade-7/energy-transfer-to-surroundings/15-energy-transfer-to-surroundings (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11 (contents page, read for the licence statement)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ and its PDF 6b2cf7ec2d597d7459930a7e6f700bea_chapter6current.pdf (read, Section 6.3, pp. 6–7)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read)
verdict: needs-changes
---

# Review: Electric power and energy (lesson 6.8)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "How efficient is a kettle?" | (physics) Heating 1.0 kg of water to 100 °C from tap temperature (10–20 °C) takes c·m·ΔT ≈ 4.18×10³ × 80 ≈ 3.3×10⁵ J (3.8×10⁵ J from 10 °C) | 1.8 kW for 3.0 min = 3.24×10⁵ J in; "heating that water takes 2.8×10⁵ J (you can work this out with the specific heat of lesson 4.5)" → η = 86% | 2.8×10⁵ J corresponds to ΔT ≈ 67 K, i.e. a start at about 33 °C, which the problem never states. A reader who follows the invitation and works it out from 20 °C gets more heat out than electrical energy in (η ≈ 1.03). State the start temperature and make the numbers consistent, e.g. "1.0 kg of water from 20 °C to 100 °C needs 3.3×10⁵ J" and "takes 3.5 minutes" → E_in = 1800 × 210 = 3.78×10⁵ J, η = 0.88. Use the specific heat value lesson 4.5 will use, and add a calcs entry for the heat (c·m·ΔT) as well as the new input and efficiency. |
| 2 | warning | "Kilowatt-hours and the electricity bill", first paragraph | (arithmetic) a 1.8–2 kW kettle uses 1.1–1.2×10⁵ J per minute | "A kettle uses tens of thousands of joules every minute" | Understated by a factor of about ten in wording: write "more than a hundred thousand joules every minute" (or "about two thousand joules every second"), and add a calcs entry. |
| 3 | warning | "Power ratings of appliances", fuse sentence | (physics) 2000 W + 2000 W = 4000 W is only 1.09 × 3680 W. A standard 16 A circuit breaker is made not to trip at up to 1.13 × its rated current for an hour, and a fuse at up to about 1.25 × | "a 2000 W heater and a 2000 W kettle together on one circuit will trip it" | The overload is too small for "will trip it" to be true in practice. Either make the overload clear (e.g. a 2000 W heater, a 2000 W kettle and a 1000 W toaster: 5000 W, 22 A) or soften to "is more than the circuit is made for, and the breaker may switch it off". Add a calcs entry for the sum and the ratio. |
| 4 | warning | Coverage (lesson row in §4: P 19.4; CP 20.4, 20.5) | The §4 row includes CP 20.5 (alternating versus direct current) | Every mains example uses "230 V" with P = VI, but the page never says the mains is alternating and 230 V is its effective value | Add one or two sentences: the mains voltage alternates; 230 V is the effective value, chosen so that P = VI and P = V²/R give the average power of a heater just as for a steady voltage (more in 6.11). Or record in docs/HIGHSCHOOL-PLAN.md §4 that AC moves to 6.11. |
| 5 | warning (minor) | `<Formula label="Cost of electrical energy" … at="Sec. 11.3, Using electricity">` and the calcs entries `kettle-cost`, `lamp-filament-cost`, `lamp-led-cost`, `lamp-saving` | C = E × price is in "Worked example 14: Cost of electricity" in the subsection "Electrical energy"; "Using electricity" is the tariff-table exercise with no formula | at "Sec. 11.3, Using electricity" | Change `at` to "Sec. 11.3, Electrical energy, Worked example 14 (cost of electricity)" in the page and calcs file. |

## Formulas and citations
- E = QV, cite reading1 at "Sec. 6.3, ΔU = Δq ΔV": correct. MIT 8.02T Ch. 6, Sec. 6.3 (p. 6) states that a charge q moved through the battery gains potential energy ΔU = q ΔV and loses it in the resistor. Optional: add "p. 6".
- E = VIt, cite mit at "Sec. 11.3, Electrical energy (E = Pt with P = VI)": correct. Siyavula 11.3 gives E = P × t under "Electrical energy" and P = I·V under "Electrical power". The combination is the page's own step, and the `at` says so.
- P = VI, cite mit at "Sec. 11.3, Electrical power": correct ("Electrical power is the rate at which electrical energy is converted…", P = I·V).
- P = E/t = (Q/t)V = IV, cite reading1 at "Eq. (6.3.1)": correct (MIT Eq. 6.3.1, p. 7: P = ΔU/Δt = (Δq/Δt)ΔV = IΔV). The page's sentence "This is exactly the power the battery supplies" matches MIT's "This is precisely the power supplied by the battery". MIT neglects the battery's internal resistance; the page does not need to mention it at this level.
- P = I²R = V²/R, cite mit at "Sec. 11.3, Equivalent forms": correct. Siyavula derives both forms from Ohm's law under that subheading. (Siyavula's own Worked example 8 misprints "P = V²R"; the page has the correct form.) Also in MIT Eq. 6.3.2.
- Joule, P = I²R, 1841: supported by Siyavula 11.3 ("This discovery, published in 1841…"), the page's own source.
- 1 kWh = 1000 W × 3600 s = 3.6×10⁶ J, cite reading2 at "Sec. 5.5, the kilowatt-hour": correct. Siyavula Gr 12 5.5 gives 1 kWh = 3 600 000 J in the "Power" exercise part of the section. Siyavula 11.3 also defines the kWh ("the use of 1 kW for 1 hr").
- Cost formula: see finding 5.
- η = E_out/E_in = P_out/P_in, cite siy-eff: Siyavula Natural Sciences Gr 7, 15.1 "Useful and wasted energy" describes efficiency only in words ("how much of the input energy is transferred to useful output energy") and through Sankey percentages; it gives no formula. The page says so ("The Siyavula text describes it in words; written as a ratio it is"), and the `location` says so. Acceptable; the ratio is the standard definition.
- Sun's luminosity 3.8×10²⁶ W: NASA Sun Fact Sheet lists 382.8 × 10²⁴ J/s = 3.828×10²⁶ W. Correct, and in calcs as `kind: fact`.

## Arithmetic and answer checks
All recomputed independently; `npm run calc:test -k electric-power`: 37 passed.
- Headlamp: t = 600 s; Q = 4.5 × 600 = 2700 C; E = 2700 × 12 = 32 400 J ≈ 3.2×10⁴ J. Correct.
- Hair dryer: 230 × 8.0 = 1840 W; 1840 × 300 = 552 000 J ≈ 5.5×10⁵ J. Correct.
- Rear window: I = 12/1.2 = 10 A; V²/R = 144/1.2 = 120 W; I²R = 120 W; VI = 120 W. Correct.
- Lamp label: 60/230 = 0.261 A; 230²/60 = 881.7 Ω ≈ 880 Ω. Correct.
- Heater at 115 V: R = 230²/2000 = 26.45 Ω; 115²/26.45 = 500 W. Correct.
- Fuse: 230 × 16 = 3680 W. Correct (but see finding 3 on what happens at 4000 W).
- Kettle month: 2.0 × 0.25 = 0.50 kWh/day; × 30 = 15 kWh; × €0.30 = €4.50; 15 × 3.6×10⁶ = 5.4×10⁷ J. Correct.
- LED vs filament: 0.060 × 1825 = 109.5 kWh, €32.85; 0.008 × 1825 = 14.6 kWh, €4.38; saving €28.47 ≈ €28. Correct. 60 W filament ≈ 8 W LED in light output is a fair typical figure (about 800 lumens each).
- Kettle efficiency: arithmetic 2.8/3.24 = 0.864 → 86%, 14% rest: correct as arithmetic, but the physics is inconsistent (finding 1).
- Power line: 100 A, 100² × 5.0 = 5.0×10⁴ W = 5% of 10⁶ W; 10 A, 500 W = 0.05%. Ratio 100. Correct.
- Sun in 2 kW kettles: 3.828×10²⁶/2000 = 1.91×10²³ ≈ 2×10²³. Correct.
- Quiz 0: 230 × 4.0 = 920 W (choice 2). Distractors 57.5 (= 230/4), 234 (= 230 + 4), 0.017 (= 4/230) all wrong. Correct.
- Quiz 1: I²R, doubled current → 4× (choice 2). Correct.
- Quiz 2: 2.5 × 4.0 = 10 kWh (choice 2). Distractors 0.63, 6.5, 10 000 wrong. Correct.
- Quiz 3: 400/500 = 80% (choice 1); 100 W wasted. Correct.
- Quiz 4: R = V²/P, 25 W lamp has 4× the resistance (choice 1). Correct.
- Flashcards: all true.
- Plot: P = V²/R and V²/(2R) for R from 20 to 100 Ω, V 0–250 V; caption true. (At R = 20 Ω the solid curve leaves the 2500 W range above about 224 V; it is clipped, which is fine.)
- Missing from calcs: the "tens of thousands of joules every minute" claim (finding 2) and the 4000 W total on one circuit (finding 3). The entries `quiz-double-current`, `quiz-heater-kwh` and `quiz-lamp-resistance-ratio` lack `quiz: 1`, `quiz: 2` and `quiz: 4` (the other quiz entries have their index); add them (info).

## Only earlier terms
- Voltage as energy per coulomb (6.4), I = Q/t, Ohm's law and electron collisions in a wire (6.6), series and parallel, short circuit, fuse, ammeter and voltmeter (6.7, 6.6): all in written lessons of this block; checked by search.
- Power P = E/t and the watt (lesson 3.5 `power`) and conservation of energy (3.4 `conservation-of-energy`): planned but not written yet (the other PC's blocks); their lesson-list titles cover these ideas, so they count as introduced. `content:check` warns about both, as expected.
- Thermal energy (4.2) and specific heat (4.5 `heat-and-specific-heat`): planned, titles cover them. Counts as introduced.
- "transformers" (power-line example): not introduced before; induction is lesson 6.11. Info: add "(lesson 6.11)" or "devices called transformers (lesson 6.11)".
- MW, kV prefixes: lesson 0.2 units. η: introduced on the page. Luminosity: defined in the callout.
- "In lessons 6.3 and 6.4 the same letter was the electric field": true (both use E for the field).

## Coverage
- §4 row 6.8: "Electric power and energy", old sources P 19.4, CP 20.4, 20.5 (not opened; only the topic names are used), PhET none listed but §3.5 assigns `circuit-construction-kit-dc` to 6.8, which the page uses. Leads to `8-02/dc-circuits`.
- Covered: E = QV = VIt, P = VI, I²R and V²/R, Joule heating, which resistor gets most power in series and parallel, power ratings, change of power with voltage, fuse rating, kWh and cost, efficiency, high-voltage transmission. This is a full VWO treatment of electrical energy and power (including efficiency and kWh, which VWO uses).
- Missing: AC and the effective value of the mains voltage (CP 20.5 in the row), see finding 4. Optional at this level: a sentence on household safety (earth wire, residual-current device), which VWO courses often place with fuses; not required.

## Where this leads
- `8.02` lecture 10 = `content/year-1/8.02/dc-circuits.mdx` ("Current, resistance and DC circuits"). It derives P = IΔV = I²R = (ΔV)²/R from Ch. 6 Sec. 6.3 and checks the power balance Iε = I²R + I²r with internal resistance. The `why` text is accurate.
- `towards: false`; correct (6.13 is the block's last lesson).

## Licensing and AI terms
- No sentence copied. Closest pairs: Siyavula "A kilowatt hour is simply the use of 1 kW for 1 hr" vs page "the energy used by a power of 1 kW in one hour" (standard definition); MIT "This is precisely the power supplied by the battery" vs page "This is exactly the power the battery supplies" (a short standard phrase, acceptable).
- Worked examples and quiz are original: Siyavula 11.3 uses 5 V/2 Ω, 15 Ω/4 A, a series 6 V cell, a 30 W bulb for 8 h, a 900 W microwave at 61.6 c/kWh; 5.5 uses mechanical power examples; Gr 7 15.1 uses Sankey percentages (torch, TV, hair dryer in joules). None reused.
- No figures copied: the one graph is a generated `<Plot>`. No Siyavula logo or brand. PhET attribution comes from the component. MIT Ch. 6 PDF and resource page carry no "rights reserved" or "courtesy" notice. NASA: cited by fact-sheet title, no insignia, no "according to NASA".
- No forbidden source is cited or was read (no OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong).
- Efficiency source (writer's flag): Siyavula Natural Sciences Grade 7 is the same provider under the same terms, and this page itself shows "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" with a link to CC BY 3.0 (verified in the page's HTML). It is used only for the idea of useful and wasted energy, which the page turns into the standard ratio. Acceptable under §2.0. But the source tables in docs/HIGHSCHOOL-PLAN.md §2.0 and AGENTS.md Writing rules 11 name only *Everything Science* / *Everything Maths* Gr 10–12; info for the owner: add "other Siyavula textbooks (e.g. Natural Sciences Gr 7–9), same CC BY 3.0 terms" to both tables, or replace the reference by a Grade 10–12 page if one defines efficiency.
- Info for the owner (as already noted in reviews/hs-6/electric-potential-and-voltage.md): the Grade 11 section page 11.3, fetched logged out, has only the site footer "Except where otherwise noted, this site is covered by a closed copyright license. All rights reserved." and no CC notice, while the Grade 11 contents page and the Grade 7 page carry the CC BY statement for all textbook content. §2.0 relies on that statement; worth confirming once with Siyavula that the per-section pages fall under it.
- Example values (writer's flag): €0.30/kWh is stated as an example ("The examples below take €0.30 per kWh", and the price is said to depend on country and contract); the 16 A fuse is introduced with "say". Both acceptable as example values. A typical value, not a sourced figure, so `page-own` in calcs is right.

## Notes
- The Grade 7 page says a filament lamp turns about 10% of its energy into light; the page's claim that the old lamp "must turn most of its energy into heat" could cite siy-eff for that (optional).
- Plot `R` slider label is "R"; fine.
- `content:check`: 0 errors; this page's only warnings are the two planned prerequisites and the missing review file (this file).

## Resolution (2026-11-20, by the page author)

1. Fixed. The kettle example now states 1.0 kg of water heated from 20 °C to 100 °C and gives the specific heat (4180 J per kg per degree, lesson 4.5). New step "Useful energy": 4180 × 1.0 × 80 = 3.34 × 10⁵ J. The time is now 3.5 minutes (210 s): E_in = 1800 × 210 = 3.78 × 10⁵ J, η = 0.88 (88%, the other 12% warms the kettle and the air). Calcs: new `kettle-water-heat` and `kettle-time`, `kettle-input` and `kettle-efficiency` updated. No quiz, flashcard or summary used the old numbers.
2. Fixed: "A 2 kW kettle uses more than a hundred thousand joules every minute: 2000 × 60 = 1.2 × 10⁵ J". Calcs `kettle-per-minute`.
3. Fixed: the overload is now a 2000 W heater, a 2000 W kettle and a 1000 W toaster, 5000 W or 5000/230 = 22 A on the 16 A circuit, "far more than it is made for, and the breaker switches the circuit off". Calcs `overload-total`, `overload-current`.
4. Fixed on the page (docs/HIGHSCHOOL-PLAN.md not changed): a new paragraph after the fuse sentence says the mains voltage alternates 50 times a second (alternating current, unlike a battery's direct current), that 230 V is its effective (rms) value, the steady voltage giving a heater the same average power, so P = VI and P = V²/R work with 230 V, and points to lesson 6.11. Source checked and added as reference `siy-ac`: Siyavula Physical Sciences Grade 12, 11.3 Alternating current (subsections "Current and voltage", rms values, and "Power", P_av = I_rms V_rms; it states 50 Hz). Calcs fact `mains-frequency`.
5. Fixed: `at` of the cost formula is now "Sec. 11.3, Electrical energy, Worked example 14 (cost of electricity)", in the page and in the calcs entries `kettle-cost`, `lamp-filament-cost`, `lamp-led-cost`, `lamp-saving`.
6. Not changed (owner question): whether to add "other Siyavula textbooks (Natural Sciences Gr 7–9), same CC BY 3.0 terms" to docs/HIGHSCHOOL-PLAN.md §2.0 and AGENTS.md Writing rules 11. The page keeps the Grade 7 reference.
7. Not changed (owner question): confirming with Siyavula that the per-section pages fall under the CC BY statement.
8. Not changed: the €0.30/kWh and 16 A example values are acceptable as stated (the review agrees); optional notes (filament lamp 10%, "p. 6" on the MIT citation, household safety) left as they are.
9. Fixed: "transformers (lesson 6.11)".
10. `quiz: 1` added to `quiz-double-current`. `quiz: 2` and `quiz: 4` make calc:test fail (it compares quiz 2 in SI units against choices in kWh; quiz 4 has word choices), so those entries carry a comment instead.

Checks: `npm run calc:test -- -k electric-power`: 43 passed. `npm run content:check`: no errors for this page; its only warnings are the two planned prerequisites (`power`, `conservation-of-energy`). The one error in the whole check (symbol x scoped to "capacitors") belongs to another lesson. Status set to reviewed.

## Re-sourcing (2026-11-20)

Reason: docs/siyavula-licences.tsv marks Siyavula Physical Sciences Gr 11, 11.3 Power and energy (the former main source) as ARR (closed copyright, All rights reserved). Siyavula allows reuse only of material clearly marked with a Creative Commons licence, so every citation of it was removed.

- Main source: now MIT 8.02T Course Notes, Chapter 6, Section 6.3 (Electrical Energy and Power), formerly reading1. `cite="mit"` now means the MIT notes. Siyavula Gr 12, 5.5 Power (CCBY in the TSV) moved from reading2 to reading1.
- E = QV: reading1 -> mit, Sec. 6.3 (ΔU = Δq ΔV).
- E = VIt: was Siyavula 11.3 Electrical energy -> mit, Sec. 6.3 with Δq = I Δt (Eq. 6.3.1).
- P = VI: was Siyavula 11.3 Electrical power -> mit, Eq. (6.3.1). The second display of P = IV now also cites mit, Eq. (6.3.1).
- P = I²R = V²/R: was Siyavula 11.3 Equivalent forms -> mit, Eq. (6.3.2) (checked in the local copy of the notes).
- Joule 1841: the date came only from the ARR page; dropped. The term "Joule heating" stays as general knowledge, named after Joule, without a citation.
- Cost of electrical energy: the Formula cited the ARR page's Worked example 14; removed. Cost = kWh × price is now a plain sentence without a citation (general knowledge).
- 1 kWh = 3.6 × 10⁶ J: unchanged, Siyavula Gr 12 5.5 (CCBY; the kilowatt-hour and 3 600 000 J are on that page), now reading1.
- calcs/hs-6/electric-power.yaml: every `source` updated the same way (Sec. 11.3 Electrical power / Electrical energy -> mit Sec. 6.3, Eq. (6.3.1); Equivalent forms -> mit Sec. 6.3, Eq. (6.3.2); reading1 -> mit; reading2 -> reading1; the three cost entries and the €28 saving -> reading1, Sec. 5.5, the kilowatt-hour). No number or `shown` text changed.
- Other Siyavula links checked: Gr 12 5.5 Power and Gr 12 11.3 Alternating current (`siy-ac`) are CCBY rows in the TSV. The Natural Sciences Gr 7 chapter 15 page (`siy-eff`) is not in the TSV; its footer was fetched with curl on 2026-11-20 and reads "Creative Commons Attribution License", and its text does describe useful and wasted energy and efficiency. Its URL was updated to the address it redirects to (/read/za/natural-sciences/grade-7/...).
- Wording: the page text was compared with the ARR page; no sentence, definition or example follows it (its worked examples use 5 V / 2 Ω, 15 Ω / 4 A, series networks and a 900 W microwave at 61.6 c/kWh; the page's examples are its own).
- Checks: `npm run calc:test -- -k electric-power` 43 passed; `npm run content:check` 0 error(s), the page's only warnings are the two planned prerequisites (power, conservation-of-energy). Status stays reviewed.

## Follow-up (2026-11-20): Siyavula 5.5 removed

Siyavula Physical Sciences Grade 12, 5.5 Power may contain examples taken from OpenStax without credit, so it is no longer cited (Writing rule 10; the page was not opened again). The reading was removed from the frontmatter. The kilowatt-hour formula now cites mit at "Eq. (6.3.1), power as energy per unit time; 1000 W × 3600 s is our own step" (P = ΔU/Δt, checked in the earlier review). In calcs/hs-6/electric-power.yaml the eleven entries that cited reading1 (Sec. 5.5) now cite mit, Eq. (6.3.1), with the kilowatt-hour as our own step; kwh-joules changed from origin mit to page-own. No number, `shown` text or prose changed. calc:test, test:answers and content:check pass. Status stays reviewed.
