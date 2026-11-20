---
page: content/year-1/8.02/rc-circuits.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w05d1/ (read: local copy presentati_w05d1.pdf/.txt, "Class 12", 23 slides; slide number = "P12- N" label = PDF page; slides 5–7 have a truncated label "P12-" and were placed by PDF page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap7dc_circuits/ (read: local copy chap7dc_circuits.pdf/.txt, Course Notes Chapter 7; printed page = PDF page − 1, confirmed for PDF pages 9–16 with `pdftotext -f N -l N`; Sections 7.5–7.7 read in full, 7.9 searched for overlap with the worked example)
  - content/year-1/8.02/_course.json (read: Lecture 12 = "Working with Circuits; RC Circuits (Experiment 4)", Lecture 24 = "Inductance and LR Circuits; Energy in Inductors")
  - calcs/8.02/rc-circuits.yaml (read; `pytest tests/calc -k rc-circuits`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Measuring circuits and RC circuits

Citation convention checked: notes pages are the printed footers (printed p. N = PDF page N + 1); slide numbers are PDF pages. No "rights reserved" or "courtesy" notice in the slides, the chapter, or either OCW resource page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Measuring voltage, current and resistance", ohmmeter bullet | Slide 7: an ohmmeter is hooked in parallel across the element; "here we are measuring R1" (a resistor drawn inside a circuit); ohmmeters "typically won't work if the resistor is powered (connected to a battery)". | "...which must be disconnected from the rest of the circuit (slide 7)." | The slide's condition is that the circuit be unpowered, not that the element be isolated. Say "the circuit must not be powered (no battery connected)"; if you also want the isolation advice (other paths in parallel would change the reading), add it as the page's own remark, not attributed to slide 7. |
| 2 | warning | "Measuring voltage, current and resistance" (Section 7.5 coverage) | Notes p. 8 (Section 7.5) also: the course multimeter's ammeter has 1 Ω on the 250 mA DC range (a 0.25 V drop, correctable if the meter resistance is known); an ammeter becomes a voltmeter by adding a series resistor, so the larger R, the less current is diverted; the resistor colour code (pp. 8–9, with the 43 Ω yellow-orange-black-gold example). | Only the ideal-meter statements. | Add a short paragraph: the 1 Ω / 0.25 V example of a real meter's effect, the series-resistor construction of a voltmeter (it explains *why* a voltmeter has large resistance), and one sentence on the colour code (own example value). Or say explicitly that the page leaves them out. |
| 3 | info | "Charging a capacitor", "Separating variables ... (pp. 10–11; slide 13)" | Eqs. (7.6.5)–(7.6.9), separation through the result, are all on printed p. 10. | pp. 10–11. | `p. 10`. |
| 4 | info | "Exponential growth and decay", measuring τ | Slide 20: when fitting the curve, "make sure you exclude data at both ends". | "fit the curve" without the caveat. | Optional: add the caveat (it matters for Experiment 4 data). |
| 5 | info | Capacitor voltage | Notes give V_C(t) = ε(1 − e^(−t/RC)) (7.6.10, p. 11) and V_C(t) = (Q/C)e^(−t/RC) (7.6.23, p. 14). | Not displayed; used in the worked example (V_C = q/C) and in quiz 2. | Optional: one sentence or Formula for V_C(t). |

Every formula and prose reference was checked against its cited location:
- Opening "(slides 1, 8, 22)": outline, Experiment 4 Part I, Part II. Correct.
- Meters "(Section 7.5, p. 8; slides 4–7)": correct. Ideal voltmeter infinite resistance, ideal ammeter zero resistance: p. 8. Correct. Slide 5 voltmeter in parallel, very large resistance; slide 6 ammeter in series, very low resistance. Correct.
- Charging set-up, I₀ = ε/R: Section 7.6.1, pp. 9–10 (7.6.1 on p. 9); slides 11–12. Correct. I = +dq/dt toward the positive plate: slide 10. Correct.
- Formula "Charging: the loop equation" ε − q/C − R dq/dt = 0, `at="Eq. (7.6.3), p. 10"`: notes 0 = ε − IR − V_C = ε − R dq/dt − q/C on p. 10; same as slide 12 (ε − Q/C − IR = 0). Correct, sign convention matches.
- dq/(q − Cε) = −dt/RC: Eq. (7.6.6), p. 10, and slide 13. Correct.
- Formula "Charge on a charging capacitor", Eq. (7.6.9), p. 10. Correct (also slide 13).
- Q = Cε when V_C = ε: Eqs. (7.6.11)–(7.6.12), p. 11. Correct.
- Formula "Current while charging", Eq. (7.6.13), p. 11 (also slide 14). Correct, positive sign with I = +dq/dt.
- Time constant in seconds: p. 12 and slide 13 ("RC is the time constant, and has units of seconds"). Correct. Eqs. (7.6.14) (factor e⁻¹ = 0.368) and (7.6.16) (0.632) on p. 12. Correct.
- Discharging "(Section 7.6.2, pp. 13–14; slides 16–18)": correct. I = −dq/dt for current away from the positive plate (7.6.18, slide 10 and 17); q/C − IR = 0 (7.6.17, slide 17); q/C + R dq/dt = 0 (7.6.19). Signs correct.
- Formula "Discharging capacitor", Eqs. (7.6.22) and (7.6.24), p. 14: q = Qe^(−t/RC), I = −dq/dt = (Q/RC)e^(−t/RC). Correct; the current is positive and decays, as in the notes.
- General comment (slide 19: final(1 − e^(−t/τ)) or initial·e^(−t/τ), τ = prefactor on d/dt) and measuring τ (slide 20). Correct. Note on "prefactor on d/dt": strictly this holds when the equation is written with unit coefficient on the q term (q + RC dq/dt = ...), as the slide's example implies; the page repeats the slide's wording, which is acceptable.

## Arithmetic and answer checks
- e⁻¹ = 0.3679 ≈ 0.368; 1 − e⁻¹ = 0.6321 ≈ 0.632. Correct.
- Worked example: τ = 10⁴ Ω × 10⁻⁴ F = 1 s. I₀ = 9/10⁴ = 0.9 mA. Q = 100 μF × 9 V = 900 μC. 1 − e⁻² = 0.86466; 900 × 0.86466 = 778.2 μC ≈ 778 μC; V_C = 9 × 0.86466 = 7.78 V. t½ = ln 2 = 0.6931 s ≈ 0.693 s. All correct.
- Info: part (c) says "The charged capacitor is then discharged" without saying whether from 7.78 V (after 2 s) or fully charged at 9 V; the answer does not depend on it and the step says so ("whatever the starting voltage"), so this is only a wording point.
- Plot: curves 1 − exp(−u) and exp(−u) on u = t/RC ∈ [0, 5] match q/Q (7.6.9) and I/I₀ (7.6.13). Points (1, 0.632) and (1, 0.368) lie on the curves (0.6321, 0.3679). Caption correct and says the graph is computed from the formulas.
- Quiz 1 (index 1, in parallel, very large): correct; explanation right. Quiz 2 (index 2, 63%): V_C(τ)/ε = 1 − e⁻¹ = 0.632, correct. Quiz 3 (index 1, half as fast, τ doubles): correct; final charge Cε independent of R, right.
- Flashcards: charging q and I correct; discharging q and I = (Q/RC)e^(−t/RC) correct (matches 7.6.24 and the Section 7.7 summary); "after each τ the remaining difference falls by a factor e (to 37%)" correct for both growth and decay.
- calcs/8.02/rc-circuits.yaml: 9 entries, all pass, values agree with the page; source locations checked (7.6.1 p. 9, 7.6.9 p. 10, 7.6.10–7.6.11 p. 11, 7.6.14–7.6.16 p. 12, 7.6.23 p. 14). Info: `plot-points` computes (1 − e⁻¹) + e⁻¹ = 1, which is true for any value and so does not test either point; the two points are already covered by `one-tau-voltage` and `one-tau-current`, so this entry could be removed or split into two checks of 0.632 and 0.368.

## Coverage and order
- MIT order (slides): outline (1) → last time, Ohm's law and series/parallel (2–3) → measuring V, I, R (4–7) → Experiment 4 Part I (8) → RC circuits: sign of I for charging/discharging (9–10) → charging (11–14) → PRS charging (15) → discharging (16–18) → general comment (19) → exponential decay and measuring τ (20) → demonstrations (21) → Experiment 4 Part II (22) → PRS multiloop circuit with a capacitor in one loop (23). The page follows this order; the course notes Sections 7.5–7.6 follow the same order.
- Left out: the recap (slides 2–3, covered on dc-circuits), the PRS questions and demos (slides 15, 21, 23; their content is in figures not in the text layer, so not checkable), the Section 7.5 material in row 2, the V_C(t) formulas (row 5), the "exclude data at both ends" caveat (row 4). Of these, row 2 is the only real gap in the assigned reading. Info: slide 23's topic (a capacitor in one loop of a multiloop circuit, i.e. no steady current through the capacitor branch once charged) could make a good extra quiz question.
- Added: the original worked example. Nothing else goes beyond the sources.
- leadsTo: 8.02 Lecture 24 is "Inductance and LR Circuits; Energy in Inductors" in `_course.json`; the reason ("a current rises and decays with the time constant L/R") is correct physics for LR circuits. The Session 24 slides were not read for this review, so whether they use exactly the symbol τ = L/R is unverified, but the claim is standard and not attributed to MIT. There is no cosmology callout, which is fine for this page.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the slides PDF, the chapter PDF or the two OCW resource pages.
- No figures reused; the only graphic is a Plot generated from formulas.
- No text copied verbatim beyond short standard phrases ("very common curve in physics/nature" is paraphrased as "everywhere in physics and nature"; "the charge already present ... makes it harder" is paraphrased as "it opposes more charge"). Acceptable.
- The worked example (9 V, 100 μF, 10 kΩ, half-life of the discharge) is original: no such numbers in Chapter 7 or the slides.
- No OpenStax or LibreTexts material. No em dashes on the page.

## Notes
- Verdict pass-with-notes: no errors found. Rows 1 (ohmmeter condition attributed to slide 7) and 2 (missing Section 7.5 material) are worth fixing before `status: reviewed`; the rest are optional.

## Resolution (2026-11-16, by the page author)

- Warning 1: the ohmmeter bullet now says the element must not be powered (slide 7); disconnecting it from the rest of the circuit is marked as the page's own advice.
- Warning 2: added the notes' practical details from Section 7.5 (1 Ω meter on the 250 mA range and its 0.25 V drop, ammeter to voltmeter with a series resistor, the colour code), with calcs entries.
- Info: separation of variables cited to p. 10; V_C(t) for charging (Eqs. 7.6.10–7.6.12) and discharging (Eq. 7.6.23) now stated; slide 20's "exclude data at both ends" added; the trivial plot-points calcs entry removed; part (c) now starts from 9 V.
