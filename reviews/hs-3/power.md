---
page: content/year-0/hs-3/power.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-05 (read; CC BY footer present ("All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"); CCBY in docs/siyavula-licences.tsv line 560; no OpenStax or other third-party credit on the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter13/ (read: mit8_01scs22_chapter13.pdf downloaded to a scratch folder outside the repo, extracted with pdftotext; printed page numbers checked page by page; no "rights reserved" or "courtesy" notice found)
  - https://www.open.edu/openlearn/nature-environment/an-introduction-energy-resources/content-section-2.1 (read via WebFetch; curl was blocked by a Cloudflare challenge, so wording was checked through quoted extracts only)
  - https://www.open.edu/openlearn/nature-environment/an-introduction-energy-resources/content-section-0 and content-section---acknowledgements (read via WebFetch, for the licence statement)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; "Luminosity (10^24 J/s) 382.8"; last updated 9 May 2024)
  - Siyavula Grade 12 5.3 and 5.4: deliberately NOT opened (OpenStax-credited material)
verdict: pass-with-notes
---

# Review: Power (Lesson 3.5)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Quiz 3 (stem) | (physics) An incandescent ("old") bulb turns only about 2–5% of its electrical power into visible light; 25% is in the range of a good LED. | "An old light bulb takes in 12 W of electrical power and gives out 3.0 W as light ... 25%" | The arithmetic is right but the device is wrong for the number. Write "A lamp takes in 12 W ..." (or "An LED lamp"), or keep "old bulb" with e.g. 60 W in and 3.0 W of light (5%) and redo the choices and the calcs entries `quiz-lamp*`. |
| 2 | warning | Cosmology callout, last sentence | (standard astronomy) Cepheid luminosities are found from their pulsation period, Type Ia supernova luminosities from the shape of their light curve, both calibrated on nearer objects. | "Objects whose luminosity can be found in this way, such as certain pulsating stars and certain exploding stars" | "in this way" points back to nothing: the previous sentences explain how a *known* luminosity gives a distance, not how the luminosity is found. Write e.g. "Objects whose luminosity astronomers can work out without knowing their distance, such as certain pulsating stars (from how fast they pulse) and certain exploding stars, are used ...". The value 3.8 × 10²⁶ W and the rest of the callout are correct and suitably hedged ("as Block 8 will show"). |
| 3 | warning | "The watt", paragraph after the formula | Lesson 0.1 (powers-of-ten) introduces the prefixes (table: mega, kilo); lesson 0.2 (units-and-si) uses "The prefixes from the previous lesson". | "The prefixes of lesson 0.2 work as usual" | Write "The prefixes of lesson 0.1"; optionally add `powers-of-ten` to `prerequisites` (it is reached transitively anyway). |
| 4 | info | "Power is the rate of doing work", paragraph after the formula | MIT p. 13-18 says only that power "can be positive, zero, or negative depending on the sign of work"; the negative power of kinetic friction is Example 13.9, Eq. (13.7.17), p. 13-21. Siyavula 5.5: "In the case where the force and the velocity are in opposite directions the power will be negative", and the note to Worked example 11 (friction −10 W). | "negative when a force takes energy out, as friction does (reading 1, Sec. 13.7, p. 13-18)" | Cite "Sec. 13.7, p. 13-18 and Example 13.9, Eq. (13.7.17), p. 13-21". |
| 5 | info | Formula "The kilowatt-hour", `cite="mit"`, `at` | Siyavula Textbook Exercise 5.4 opens the kWh item with "The unit of power that is used on a monthly electricity account is kilowatt-hours", then calls it "a unit of energy" and gives 1 kWh = 3 600 000 J. OpenLearn 2.1: "One kilowatt hour is the energy delivered at a power of 1 kW for one hour ... i.e. 3600 kJ." | 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J, cited to the Siyavula exercise; text says firmly "a unit of energy, not of power" | The page is right and the Siyavula item is self-contradictory. Either cite OpenLearn 2.1 (which states it cleanly) or add `openlearn` as the cite. No change to the physics. |
| 6 | info | "Driving at a steady speed" | Siyavula Worked example 11 note: applied force +10 W, friction −10 W, net power 0. | "The driving force does positive work, the resistance does just as much negative work" | Fine at this level. Strictly, for a car or bicycle the road's forward friction force on a tyre that rolls without slipping does no work; the energy comes from the engine or the legs. Not needed for VWO; leave as is or add "(the energy comes from the fuel or the rider's muscles)". |
| 7 | info | Worked example "A ball dropped from a bridge" title; "Cycling into the wind" title | — | No bridge and no wind appear in the problems | Cosmetic: rename ("A falling ball", "Cycling at speed") or mention the bridge/wind in the statement. |
| 8 | info | Opening definition and "The watt" | Siyavula: "Power is defined as the rate at which work is done or the rate at which energy is transfered to or from a system." / "James Watt ... whose improvements to the steam engine were fundamental to the Industrial Revolution." | "Power is the rate at which work is done, or, which is the same thing, the rate at which energy is transferred from one object or form to another." / "the Scottish engineer James Watt, whose improved steam engines helped drive the Industrial Revolution" | Standard definition and a short factual clause, reworded; acceptable. No change needed. |

## Formulas and citations
- **Power** P = W/Δt, `cite="mit"` (Siyavula 5.5), `at="Power (ESCMJ), definition box, written there P = W/t"`: correct; the definition box gives P = W/t and the `at` states the notation change. MIT Eq. (13.7.2), p. 13-18, gives the same as the average power ΔW/Δt.
- **The watt** 1 W = 1 J/s = 1 kg m²/s³, `reading1`, "Sec. 13.7, p. 13-18": correct; MIT p. 13-18: "The SI units of power are called watts [W] and [1 W] = [1 J · s⁻¹]". The base-unit form follows from 1 J = 1 kg m²/s², which lesson 3.2 (kinetic-energy, line 75) gives, as the `at` says.
- **P = Fv**, `cite="mit"`, "Power (ESCMJ), derivation from W = FΔx cos θ, in the case where F and Δx are in the same direction": correct; Siyavula derives P = FΔx cos θ / t → FΔx/t → Fv with exactly that condition. Page writes Δt for Siyavula's t (explained under the first formula).
- **Efficiency** η = useful out / in (energy or power), `cite="openlearn"`, "2.1 Some basic concepts": correct; OpenLearn 2.1: "The ratio of the useful output to the input (i.e. the ratio of useful work done to the energy supplied) is called the energy efficiency of the process and is usually expressed as a percentage." The symbol η and the power form are the page's own; the `at` says the power form follows by dividing by the same time. Correct.
- **Kilowatt-hour**: see item 5. The number is right.
- `source.readings[0].location`: correct. Sec. 13.7 starts on p. 13-17 (Eq. (13.7.1)); Eqs. (13.7.2) and (13.7.3) and the watt are on p. 13-18; Example 13.8 runs pp. 13-18 to 13-20 (Eqs. (13.7.4)–(13.7.5) on 13-18, (13.7.6)–(13.7.12) on 13-19, Figure 13.8 on 13-20).
- In-text citations "(reading 1, Sec. 13.7, Eq. (13.7.2))" for average power and "(Eq. (13.7.3))" for instantaneous power: correct. MIT defines the instantaneous power as the limit Δt → 0; the page's "average power over a time interval so short that the rate hardly changes inside it" is a fair VWO-level wording, linked to lesson 0.10.
- "F v with the average velocity gives the average power": correct for a constant force, as MIT Eq. (13.7.2) (P_ave = F_x v_ave,x).
- Horsepower "about 750 W", "Watt chose it to compare his engines with the horses": matches Siyavula ("approximately 750 W ... derived by James Watt to give an indication of the power of his steam engine in terms of the power of a horse"). (1 mechanical hp = 745.7 W; "about 750 W" is fine.)
- "Your electricity bill counts kilowatt-hours ... (OpenLearn, 2.1)": supported ("an electricity bill, which states the number of 'Units' ... The 'Units' quoted are kilowatt hours").
- Sun's luminosity 3.8 × 10²⁶ W, `sunfact`: NASA Sun Fact Sheet gives 382.8 × 10²⁴ J/s = 3.828 × 10²⁶ W. Correct; the `references.sunfact.location` quotes it exactly.
- Note on the human body ("muscles turn food energy into work with a low efficiency ... several times faster"): standard and correct (muscle efficiency roughly 20–25%); Siyavula's "Simple measurements of human power" box makes the same point.

## Arithmetic and answer checks
All recomputed independently (Python, g = 9.81 m/s²); `pytest tests/calc -k "power and hs"`: 101 passed.
- Stairs: 55 × 9.81 × 4.2 = 2266.1 J ≈ 2.3 × 10³ J; /6.0 = 377.7 W ≈ 380 W; 377.7/750 = 0.50 ("half a horsepower"); 2266/15 = 151 W ≈ 150 W. Correct.
- Falling ball: mg = 4.905 ≈ 4.9 N; v = 14.715 ≈ 14.7 m/s; P = mg²t = 72.18 ≈ 72 W (point A 72.2); distance 11.036 ≈ 11 m; W = 54.13 ≈ 54 J; average 36.09 ≈ 36 W (point B 36.1); ½ × 0.50 × 14.715² = 54.13 J = W. Correct. Plot: curve 0.5·9.81²·t reaches 96.2 W at t = 2, inside the range [0, 100]; the dashed curve (half) is the average power from 0 to t, since the average velocity of uniform acceleration from rest is half the final one; matches MIT p. 13-20 ("the instantaneous power at any time is twice the average power between t = 0 and that time").
- Cyclist: 22 × 8.0 = 176 ≈ 180 W; 40 × 12 = 480 W; 480/176 = 2.73 ≈ 2.7; 12/8 = 1.5. Physically plausible: R + kv² fits with R ≈ 7.6 N, k ≈ 0.225 kg/m (C_D A ≈ 0.37 m² at ρ = 1.2 kg/m³), realistic for an upright rider.
- Lift: 650 × 9.81 = 6376.5 N ≈ 6.4 × 10³ N; × 1.5 = 9564.75 W ≈ 9.6 kW; 15 m × 6376.5 = 95 647 J ≈ 9.6 × 10⁴ J, /10 s = 9.6 kW. Correct.
- Hoist: 90 × 9.81 × 0.95 = 838.8 W ≈ 840 W; 838.8/1200 = 0.699 ≈ 0.70 (70%); 1200 − 838.8 = 361 ≈ 360 W. Correct.
- Kettle: 180 s; 2000 × 180 = 3.6 × 10⁵ J; 0.050 h × 2.0 kW = 0.10 kWh; 0.10 × 0.30 = 0.03 euro; 3.6 × 10⁵/3.6 × 10⁶ = 0.10. Correct.
- 1 kWh = 1000 × 3600 = 3.6 × 10⁶ J. Correct.
- Quiz 1: 4800/60 = 80 W (correct, index 0). Distractors: 4800/1 = 4.8 kW, 4800 × 60 = 288 kW, "80 J" wrong unit. All wrong, explanation true.
- Quiz 2: 6.0 kN × 1.5 m/s = 9.0 kW (correct, index 0). 6.0/1.5 = 4.0; 6.0 × 1.5 = 9.0 W without kilo; 6.0 + 1.5 = 7.5. All wrong, explanation true.
- Quiz 3: 3.0/12 = 25% (correct, index 0); 75%, 400% and "depends on time" wrong; explanation true. (Realism of the device: item 1.)
- Quiz 4: 8.0 W × 150 h = 1200 Wh = 1.2 kWh (correct, index 0); 0.040 kWh (one day), 1200 kWh, 40 kWh (8 kW × 5 h): all wrong, explanation true.
- Quiz 5: same mgh, half the time → twice the power (correct, index 0); others wrong; explanation true.
- Flashcards: all five true (1 W = 1 kg m²/s³; P = FΔx/Δt = Fv; negative power against the motion; efficiency below 100%; 1 kWh = 3.6 × 10⁶ J).
- calcs file: every result number on the page is present (worked examples, plot points and slope, horsepower and luminosity facts, quiz answers and distractors). Small gaps, not affecting correctness: the unrounded 6376.5 N and 176 W appear only as inputs of other entries, and quiz 5's "twice" has no entry.

## Only earlier terms
- Work, W = FΔx cos θ (3.1), E_k (3.2), E_p and mgh (3.3), thermal energy and energy conservation (3.4), 1 J = 1 kg m²/s² (3.2): all introduced in reviewed prerequisites (all four Block 3 lessons 3.1–3.4 exist and have `status: reviewed`).
- Scalar: lesson 0.8 (introducing-vectors), reached through `work`. Prefixes kilo/mega: lesson 0.1 (see item 3 for the wrong lesson number). Slope and graphs: 0.5; tangent and instantaneous rate: 0.10 (rates-of-change-and-area), and 1.3. Average velocity: 1.2 (via free-fall). Weight mg: 2.5 (via work). Net force zero at constant velocity: 2.2. Drag growing with speed: 2.6 (friction-and-drag, F_D ∝ v²). v = gt and ½gt²: 1.6/1.7.
- New on this page and defined where first used: power, watt, horsepower, average and instantaneous power, efficiency (η, with a symbols.json meaning scoped to `power`), kilowatt-hour, luminosity (in the callout).
- Everyday words used without definition (electrical power, mains, LED, electricity bill): acceptable; electricity itself is Block 6, and the page uses it only as an energy source, not as physics.
- No term found that is used before it is introduced.

## Coverage
- §4 row 3.5 (Power; no PhET sim): covered. Siyavula 5.5 topics: definition, P = W/t, the watt and James Watt, horsepower, P = Fv, negative power, worked lifting and climbing examples, human power, kWh: all covered. MIT Sec. 13.7: average and instantaneous power, falling-object power (linear in t, twice the average): covered.
- Beyond the sources but at VWO level: efficiency η (from OpenLearn), E = PΔt and energy cost.
- Left out (info, not needed at this level): the general P = Fv cos θ for a force at an angle (Siyavula derives it, the page treats only along/against); Siyavula's "power rating" of machines and the zero power of a forklift holding a crate still; MIT's dK/dt = F_net v (Eq. 13.7.19), which the `leadsTo` why mentions for the university lesson.

## Where this leads
- `leadsTo` 8.01 lecture 20: page `content/year-1/8.01/work-and-kinetic-energy.mdx` ("Kinetic energy and work in one dimension", lecture 20) has a "Power" section with P = dW/dt = F·v and dK/dt = F_x v_x. The `why` is accurate and matches §4 (`8-01/work-and-kinetic-energy`).
- `towards: false`: correct, 3.5 is not the block's last lesson. The cosmology callout is correct apart from the wording in item 2.

## Licensing and AI terms
- Siyavula 5.5: CC BY footer present; cited by title and URL; no logo or "Everything Science" branding; "(Siyavula, Power (ESCMJ))" in the text is attribution, not branding. No OpenStax-credited material on 5.5; 5.3 and 5.4 were not opened.
- No copied sentences found (item 8 shows the two closest, both standard and reworded). OpenLearn's kWh wording ("the energy delivered at a power of 1 kW for one hour") vs the page's "the energy transferred by 1 kW in one hour": a standard definition, reworded.
- Worked examples vs Siyavula 5.5: Worked example 11 (10 N box, 1 m/s), 12 (100 kg crate, 8 m in 4 s), **13** (60.0 kg woman, 3.00 m stairs, 3.50 s, final speed 2.00 m/s, with ½mv²) and **14** (borehole, 15.0 m, 20.0 l/s, with the kinetic energy of the water) are not reused. The page's stair climb shares the everyday setting of Worked example 13 (a woman running up stairs) but has its own numbers (55 kg, 4.2 m, 6.0 s), a steady speed with no kinetic-energy term, and its own check; nothing of Worked example 14 appears. Quiz 5 (same mass, same stairs, 10 s vs 20 s) is a comparison question like Exercise 5.4's Jack and Jill / Bill and Bob, but with a different set-up and answer (Jack and Jill: twice the mass, half the time, same power). Acceptable. Lift and hoist examples use the method of Worked example 12 with own numbers.
- MIT Example 13.8 (0.2 kg from 15 m to 5 m) is not reused: the page uses 0.50 kg and 1.5 s. MIT Figure 13.8 is not copied: the page's graph is a `<Plot>` generated from P = mg²t.
- MIT chapter 13 PDF: no "rights reserved" or "courtesy" notice.
- OpenLearn: the course page carries a Creative Commons badge (alt text "by-nc", image file "by-nc-sa"), and the Acknowledgements section links CC BY-NC-SA 4.0 and excludes only listed third-party items (figures in Section 1, a course image) as proprietary; no AI or TDM clause. Section 2.1 text is OU material; only its ideas are used. Consistent with §2.0 (CC BY-NC-SA 4.0). The site footer "©1999-2026. All rights reserved" is the website-wide notice, not the course licence.
- NASA: cited by page title only, no insignia, no "according to NASA" phrasing.
- No ESO text; no forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs) cited or used.

## Notes
- No errors found; three warnings (quiz 3 realism, the callout's "in this way", the prefix lesson number) and several info items. Verdict pass-with-notes.
- The calcs header correctly lists the source examples that were not reused.
- OpenLearn wording was checked through WebFetch extracts (curl was blocked by Cloudflare), so the comparison for copied sentences there relies on the quoted sentences returned, not a full-text diff.
- No dev server or build was run (machine memory limit); only the calcs tests for this page.

## Resolution (2026-11-20, by the page author)
1. Quiz 3 now reads "An LED lamp takes in 12 W ...", so 25% fits the device; numbers, choices and calcs `quiz-lamp*` unchanged (the `where` of `quiz-lamp` now names the LED lamp).
2. Callout rewritten: "Objects whose luminosity astronomers can work out without knowing their distance, such as certain pulsating stars (from how fast they pulse) and certain exploding stars, are used ...".
3. "The prefixes of lesson 0.1"; `powers-of-ten` added to `prerequisites`.
4. Citation now "(reading 1, Sec. 13.7, p. 13-18 and Example 13.9, Eq. (13.7.17), p. 13-21)".
5. The kilowatt-hour formula now cites `openlearn`, "2.1 Some basic concepts (one kilowatt-hour is the energy delivered at a power of 1 kW for one hour, 3600 kJ)"; calcs `kwh-joules` source changed to match. The Siyavula exercise is no longer cited.
6. Added "(the energy comes from the fuel or the rider's muscles)" after the negative work of the resistance.
7. Worked examples renamed "A falling ball" and "Cycling at speed" (calcs `where` texts updated).
8. No change needed.

Checks: `pytest tests/calc -k "power and hs"` 101 passed; `content:check` reports no error or warning for this page (remaining errors belong to escape-speed and momentum-is-conserved).

## Source change (2026-11-21)

Siyavula Physical Sciences Grade 12, 5.5 Power contains examples that look like OpenStax's, so under Writing rule 10 it is no longer cited and was not opened again. Its citations were replaced by MIT 8.01SC Classical Mechanics (Fall 2016), Course Notes, Chapter 13: Energy, Kinetic Energy, and Work (page numbers are the printed footers of the chapter PDF, checked with pdftotext on 2026-11-21), Sec. 13.7, which is now the page's main `source` (`cite="mit"`; it was reading 1 before), and for the horsepower by NIST Guide to the SI (SP 811), Appendix B.9 (new reference `nist811`: horsepower (550 ft·lbf/s) = 7.456 999 E+02 W). The kilowatt-hour entries that cited Siyavula's Textbook Exercise 5.4 now cite OpenLearn 2.1 (`openlearn`), already a reference of the page.

Citations changed:
- Frontmatter: main `source` 5.5 → MIT 8.01SC Chapter 13; `readings` now empty (the chapter was reading 1); reference `nist811` added.
- Formula "Power": mit "Power (ESCMJ), definition box, written there P = W/t" → mit "Sec. 13.7, Eq. (13.7.2), p. 13-18 (average power, the rate at which work is done, written there P_ave = W/Δt)".
- Formula "Power of a constant force along the motion": mit "Power (ESCMJ), derivation from W = FΔx cos θ …" → mit "Sec. 13.7, Eqs. (13.7.1) to (13.7.3), pp. 13-17 and 13-18 (W = F_x Δx for a force along the motion, so P_ave = F_x v_ave,x and P = F_x v_x)".
- Formula "The watt": reading1 → mit (same location, Sec. 13.7, p. 13-18).
- Prose, four places: "(reading 1, Sec. 13.7 …" → "(MIT 8.01SC notes, Sec. 13.7 …".
- Prose, horsepower: "about 750 W: Watt chose it to compare his engines with the horses they replaced (Siyavula, Power (ESCMJ))" → "about 750 W (NIST Guide to the SI, Appendix B.9)". The history clause about James Watt was dropped: neither MIT Chapter 13 nor NIST says it, and no other allowed source for it was found. The physics (about 750 W) is unchanged.
- calcs/hs-3/power.yaml: `horsepower` and `stairs-hp` → nist811 (B.9, horsepower = 745.7 W, about 750 W); `stairs-work` → mit Sec. 13.7, Example 13.8, Eq. (13.7.6) (work of gravity); `lift-force` → mit Sec. 13.7, Eq. (13.7.3) with mg of Example 13.8, Eq. (13.7.8); 8 entries "P = Fv" → mit Sec. 13.7, Eq. (13.7.3); 5 entries "P = W/t" → mit Sec. 13.7, Eq. (13.7.2); 8 entries "Power (ESCMJ)" → mit Sec. 13.7, Eq. (13.7.2); 8 entries "Textbook Exercise 5.4" → openlearn 2.1 (the kilowatt-hour as 1 kW for one hour); 11 entries reading1 → mit (same locations); header comment updated.

No other explanation, number, quiz or worked example changed. `content:check` 0 errors; `pytest tests/calc -k "kinetic-energy or power or hs-3-practice"` passes.
