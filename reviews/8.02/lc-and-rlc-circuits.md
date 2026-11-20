---
page: content/year-1/8.02/lc-and-rlc-circuits.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w11d1/ (read: local copy presentati_w11d1.pdf/.txt, 24 slides labelled "P25- 1" to "P25- 24", label = PDF page; this is both `source.url` and `reading2`)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap11inductance/ (read: local copy chap11inductance.pdf/.txt, Sections 11.5-11.6 and the Summary 11.7; printed page = PDF page - 1, confirmed with pdftotext -f/-l on PDF pages 21-27)
  - content/year-1/8.02/_course.json (read: Session 25 and Session 26 entries, for the leadsTo)
  - content/year-1/8.01/tension-and-springs.mdx (read: link target, Hooke's law)
  - calcs/8.02/lc-and-rlc-circuits.yaml (read; `npm run calc:test -- -k lc-and-rlc`: 8 passed)
  - `npm run content:check`: 0 errors, 0 warnings
verdict: needs-changes
---

# Review: LC oscillations and damped RLC circuits

Citation convention checked: course-notes pages are the printed footers. Verified page by page: p. 20 = Eqs. 11.5.1-11.5.2; p. 21 = 11.5.3-11.5.9; p. 22 = 11.5.10-11.5.12; p. 23 = 11.5.13-11.5.18; p. 24 = Figure 11.5.5 only; p. 25 = Section 11.6 start, 11.6.1-11.6.4; p. 26 = 11.6.5-11.6.8 and Table 11.6.1. Slide numbers are the "P25- N" labels. No "rights reserved" or "courtesy" notice in either source.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Plot>` in "Damping: the RLC circuit" | Eq. 11.6.4: Q = Q₀e^(−γt)cos(ω′t + φ), with ω′ = √(ω₀² − γ²) (Eq. 11.6.6). | Caption: "computed from Q = Q₀e^(−Rt/2L)cos(ω′t) with R/2L = 0.1ω₀ (so ω′ ≈ 0.995ω₀)". The curve is `exp(-0.1*u)*cos(u)`, i.e. it oscillates at ω₀, not ω′. By u = 30 the phase is off by 0.15 rad (about 9°). The graph is not computed from the formula its caption names. | `expr: "exp(-0.1*u)*cos(sqrt(0.99)*u)"` (or `cos(0.99499*u)`). The envelope `exp(-0.1*u)` is correct. |
| 2 | warning | "Damping" paragraph after the dictionary, and flashcard 2 | Table 11.6.1, p. 26: the current row is "±I" ↔ v, with the note "the sign of the current I depends on the physical situation under consideration". (Slide 15 writes v ↔ I without a sign.) | "$I \leftrightarrow v$", while the page itself uses I = −dQ/dt, so in its own convention I corresponds to −dx/dt, not v. | Write "I (up to sign) ↔ v" or "dQ/dt ↔ v", or add a bracket: "(with I = −dQ/dt the current matches −v; the notes write ±I)". |
| 3 | warning | "Damping", "For small R (underdamping)" | p. 25: "For small R (the underdamped case, see Appendix 1)"; p. 26: "There are three possible scenarios", details in Appendix 1 (Section 11.8). | Only the underdamped case; the other two are not named and the condition for "small" is not given. | One sentence: the oscillating solution needs R/2L < ω₀, i.e. R < 2√(L/C); at larger R the circuit is critically damped or overdamped and the charge dies away without oscillating. (The Session 25 slides do not cover this, so it is optional for the lecture but the cited reading does mention it.) |
| 4 | info | Plot, `φ = 0` | Eq. 11.6.4 has a general phase φ fixed by the initial conditions. | Plotted with φ = 0. With φ = 0, I(0) = −dQ/dt(0) = (R/2L)Q₀ ≠ 0, so the curve is not exactly a capacitor released with no current (that needs tan φ = −γ/ω′, φ ≈ −0.1 rad here). | Harmless at γ = 0.1ω₀; optional to say "(phase φ = 0)" in the caption. |
| 5 | info | "LC circuit" formula, `at="Eqs. (11.5.3) and (11.5.6), p. 21"` | Eq. 11.5.3 is Q/C + L d²Q/dt² = 0; the form d²Q/dt² + Q/LC = 0 is on slide 19 (and in the Summary, p. 28). | d²Q/dt² + (1/LC)Q = 0. | Correct physics (11.5.3 divided by L); optionally add slide 19 to the `at`. Prose citation "(Section 11.5, pp. 20-21; slide 19)" for Q/C − L dI/dt = 0 (Eq. 11.5.4, p. 21) is correct. |
| 6 | info | "Energy in an LC circuit" formula, `at="Eq. (11.5.12), p. 22"` | Eq. 11.5.12 is U = (Q₀²/2C)cos² + (Q₀²/2C)sin² = Q₀²/2C; the form Q²/2C + ½LI² is Eq. 11.5.1 (p. 20) and slide 20. | U = Q²/2C + ½LI² = Q₀²/2C. | Correct; optionally cite "Eqs. (11.5.1) and (11.5.12), pp. 20-22" or slide 20, which shows exactly this line. |
| 7 | info | "Real inductors" | Slide 7: "1. Time constant from I or V. 2. Check inductor resistance from V just before switch." | "$L$ from the time constant of the current or voltage". | The time constant is L/(R + R_L), so L needs the total resistance, including the R_L found in step 2. Optional bracket. |
| 8 | info | "A mass on a spring" | Slide 12 also gives the phase-shift picture (φ = π/2 shifts the curve by a quarter period). Slide 3: inductors "are the opposite of capacitors". Slide 15 includes ε ↔ F. | Not mentioned. | Optional. |

Every formula and page/slide reference was checked:
- Opening "slides 1, 8, 23": outline, Experiment 10 Part I, Part II. Correct.
- LR current (ε/R)(1 − e^(−t/τ)) "slides 2-4": on slide 4. Correct. Real inductor emf −L dI/dt − IR_L: slide 6. Correct. Measuring L and R_L: slide 7. Correct.
- m d²x/dt² + kx = 0, SHM: slide 10 and Eq. 11.5.15, p. 23. Correct. Formula "SHM", Eqs. 11.5.16-11.5.17, p. 23. Correct. Energy sloshing: slide 11; total ½kx₀²: Eq. 11.5.18, p. 23. Correct. T = 2π/ω₀, f = 1/T: slide 12. Correct.
- Analogy "slides 13-15": slides 14-15 (13 is a title slide). Correct.
- Setup "slide 16". Correct. Q(t), I(t) Eqs. 11.5.8-11.5.9, p. 21 (I = −dQ/dt = ω₀Q₀ sin from Eq. 11.5.7 with φ = 0). Correct, signs consistent with I = −dQ/dt.
- Quarter-cycle phase "slides 17, 20": slide 17 (trade-off charge/current) and slide 20 ("Notice relative phases"). Acceptable.
- U_E and U_B with cos², sin²: Eqs. 11.5.10-11.5.11, p. 22, slide 20. Correct.
- I²R dissipation: Eq. 11.6.1, p. 25; slides 21-22. Correct. Damped mechanical oscillator: Eq. 11.6.7, p. 26 ("pp. 25-26" acceptable). RLC equation Eq. 11.6.3, p. 25. Correct, and the sign check with I = −dQ/dt (Q/C − L dI/dt − IR = 0 → L Q̈ + R Q̇ + Q/C = 0) holds. Damped solution Eqs. 11.6.4-11.6.6, pp. 25-26 (γ = R/2L substituted). Correct. ω′ also on slide 22. R = 0 limit: p. 26. Correct. Table 11.6.1, p. 26. Correct location (see row 2 for the sign).

## Arithmetic and answer checks
- Worked example (L = 10 mH, C = 1 μF, Q₀ = 5 μC, R = 20 Ω): LC = 10⁻⁸ s², ω₀ = 10⁴ rad/s; f = 1591.5 Hz ≈ 1592 Hz; I₀ = ω₀Q₀ = 0.05 A; Q₀²/2C = 25×10⁻¹²/2×10⁻⁶ = 1.25×10⁻⁵ J = ½(0.01)(0.05)² = 1.25×10⁻⁵ J; R/2L = 1000 s⁻¹; ω′ = √(9.9×10⁷) = 9949.9 rad/s ≈ 9950, 0.50% lower ("half a percent" correct); 2L/R = 1 ms; oscillations in 1 ms = 1 ms × 9949.9/2π = 1.58 ≈ 1.6. All correct. Underdamped check: 2√(L/C) = 200 Ω > 20 Ω, so the oscillating solution applies.
- Plot caption: √(1 − 0.1²) = 0.99499 ≈ 0.995. Correct number, but see row 1: the curve does not use it.
- Quiz 1 (index 1, 1/√LC): correct; explanation right. Quiz 2 (index 1, all in the inductor, current maximal): correct. Quiz 3 (index 1, the mass): correct; explanation right.
- Flashcards: 1 correct (I = ω₀Q₀ sin with I = −dQ/dt). 2: see row 2 (current ↔ velocity up to sign). 3 correct (general phase φ; "small R").
- calcs/8.02/lc-and-rlc-circuits.yaml: 8 entries, all pass, matching the page. Info: the "half a percent lower" claim has no entry (1 − 9949.87/10⁴ = 0.501%), and `energy` computes only ½LI₀², not Q₀²/2C (both equal 1.25×10⁻⁵ J). If row 1 is fixed, nothing in calcs needs to change.

## Coverage and order
- Slide order: outline (1) → LR recap (2-5) → non-ideal inductor (6-7) → Experiment 10 Part I (8) → mass on a spring (9-12) → LC analogy (13-15) → LC circuit (16-17) → PRS (18) → LC equation (19) → energy (20) → damping (21-22) → Experiment 10 Part II (23) → PRS (24). The page follows this order exactly, with Sections 11.5-11.6 of the notes interleaved where they fit.
- Left out: slide 5 (LR output-voltage traces, a measured graph), PRS questions (18, 24), the lab procedure itself (8, 23), the phase-shift picture (12), the over- and critically damped cases from Appendix 11.8 (row 3), and the notes' Figures 11.5.2-11.5.5 (energy oscillation plots).
- Added: the worked example and the damped-oscillation plot (generated from a formula, see row 1). Nothing else goes beyond the sources.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the slides or Chapter 11 (grep on both text files: 0 hits). No MIT figure is reused; the only graph is a generated `<Plot>`.
- No text copied verbatim beyond short phrases. "doesn't like to accelerate / to be charged" (slides 14-15) is paraphrased as "does not like to accelerate / to be charged"; this is short and attributed to the slides. Acceptable.
- The worked example is original (different values from anything in Sections 11.5-11.6 or the slides; Chapter 11's solved LC problem 11.11.6 was not compared in detail, but the page's numbers are its own round values).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: 8.02 Session 26 is "Driven Harmonic Motion (RLC); Experiment 11: Driven RLC Circuit" in `_course.json`. The "why" (driven RLC and resonance, an AC source keeps the oscillation going) matches. Correct.
- No cosmology callout; none is needed for this lecture.
- Prerequisite link "for springs, see 8.01" goes to `tension-and-springs` (Hooke's law, 8.01 Lesson 7); it does not cover simple harmonic motion, which the page introduces from the slides itself. Fine as worded.
- `source.title` says "LC Circuits; LRC Circuit"; `_course.json` lists Session 25 as "LC and LRC Circuits". Cosmetic.

## Resolution (2026-11-16, by the page author)

- Error: the plotted charge is now exp(−0.1u) cos(√0.99 u), so it oscillates at ω′ as the caption says.
- Warnings: the analogy now pairs I with ±v (sign set by the current convention), in the text and flashcard; added the condition R < 2√(L/C) for oscillation and that larger R gives critical or overdamping (pp. 25–26).
- Info: the time constant of a real inductor is L/(R + R_L); added a calcs entry for "half a percent lower". Other info notes: no change.
