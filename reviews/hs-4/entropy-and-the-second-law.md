---
page: content/year-0/hs-4/entropy-and-the-second-law.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec08/ (read: slide PDF, 17 PDF pages, text and slide 8 image)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec09/ (read: slide PDF, 17 PDF pages)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec10/ (read: slide PDF, 30 PDF pages; text only)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec04/ (read, slide 6 only, to compare the numbering used by lesson 4.5)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read, slides 9 and 10)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l8/ (read, all 13 slides)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l11/ (read, slides 8 to 14)
  - https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/second-law-entropy/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec17/ (read, p. 2)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read, pp. 4 and 5)
  - public/phet/diffusion_1.1.9_en.html (strings and settings read from the local copy)
verdict: needs-changes
---

# Review: Entropy and the second law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Try it" | The Diffusion sim (1.1.9, local copy) only allows a number of particles that is a multiple of 10, from 0 to 200 per side: `DIFFUSION_NUMBER_OF_PARTICLES_RANGE: new Range(0,200,0)`, `DELTAS: {numberOfParticles: 10, …}`, and the property is only valid when the number is divisible by 10 | "Try it with very few particles (two or three of each) and with many. With a handful of particles you may sometimes see all of one kind drift back to one side for a moment" | The fewest is 10 of each. With 10, the chance that all 10 of one kind are on one side at a given moment is about 1/1000 (this page's own table), so a reader will very rarely see it. Rewrite, e.g.: "Try it with the fewest particles the sim allows (10 of each) and with the most (200). With 10, watch how many of one kind are on the wrong side from moment to moment: the number jumps about a lot. With 200 it hardly changes. All 10 back on their own side would happen only about once in a thousand looks: the (1/2)^N rule at work." |
| 2 | warning | Formula "Chance that all N particles are in one half", `at` | 8.21 L8 slide 8 shows a picture of particles in the left half spreading over the whole box, with ΔS = N k_B ln 2. It does not state the (1/2)^N probability or the words "each particle has two places to be" | cites slide 8 for P = (1/2)^N as if the slide said it | Say it is derived: `at="slide 8 (ΔS = N k_B ln 2 when a gas spreads from one half into the whole box, so the number of states grows by 2^N; the chance 1/2^N of all N in one half follows from that)"` (writer flag 3) |
| 3 | warning | Section "Entropy and heat: ΔS = Q/T" | 8.044 L8 slide 8: dS₁ ≥ đQ₁/T_bath, with equality for a system in equilibrium with the bath; slide 13: quasi-static is required for the equality. 8.21 L10 slide 9: entropy gained ≥ Q/T, equality only when heat transfer is reversible | ΔS = Q/T is stated with only the condition "the temperature stays (nearly) the same". Earlier the same page has the free expansion, ΔS = N k_B ln 2 with no heat at all, and later "Work carries no entropy" | Add one sentence: ΔS = Q/T holds when the heat flows in gently (slowly, without stirring, friction or sudden expansion); in such irreversible processes the entropy can grow with no heat at all, as in the gas spreading into the empty half. Lesson 4.10 relies on this ("a slow expansion with no heat … leaves the entropy unchanged") |
| 4 | warning | Worked example "Why a fridge needs a plug" (a) | Arithmetic | "−5.60 + 5.03 = −0.56" | The shown terms add to −0.57; the exact value is −0.563. Write "−5.597 + 5.034 = −0.56", or show −0.57 with the rounded terms (and update the calcs entry) |
| 5 | info | "A litre of air holds about 2.5 × 10²² molecules (lesson 4.3)" | Lesson 4.3 gives 2.68 × 10²⁵ per m³ at 273 K; 2.5 × 10²² per litre is at 20 °C | attributes the number to lesson 4.3 | "(from pV = N k_B T, lesson 4.3, at 20 °C)" |
| 6 | info | Cosmology callout, Lecture 17 | Guth's slide p. 2: "for all processes except for inflation"; transcript p. 4: "for every process that we're going to discuss", "something of a mystery", "for reasons unknown … peculiarly low entropy" | Paraphrased correctly; "for reasons unknown" is Guth's short phrase, attributed | None needed |

## Formulas and citations
Slide numbering (writer flag 2): the page and `readings` use the number printed on each slide. Checked per PDF page with `pdftotext -f N -l N`:
- 8.21 Lecture 8 and Lecture 9: the printed number ("8 / 16") is the PDF page minus one (OCW cover page first). All page citations match the printed numbers. Lesson 4.5 does the same (8.21 Lecture 4 "slide 6" is printed "6 / 18", PDF page 7, Q = c_p m ΔT), so the convention is consistent across the block.
- 8.21 Lecture 10: here the printed number **equals** the PDF page (the title slide, PDF page 2, is printed "2"). The page's citations (slides 5, 8, 12, 30) match the printed numbers and content. The calcs file header ("the PDF page is one more") is wrong for Lecture 10 only (info; fix the comment). Slide 30 carries the footer "8.21 Lecture 12" although it is in the Lecture 10 PDF; its text ("An engine cycle run backwards → a refrigerator or a heat pump") is what the page cites (info).
- 8.044 slides are labelled "L8B2" etc.; all citations match.

Per formula:
- P = (1/2)^N, cite mit slide 8: see table row 2 (derived, not on the slide).
- S = k_B ln Ω, cite reading3 slide 2: matches ("S ≡ k ln Ω … logarithmic measure of the microscopic degeneracy"). "Also slide 7 of the main source": 8.21 L8 slide 7 has S = k_B ln n for n equally likely states. Correct.
- ΔS ≥ 0, reading3 slide 7: matches. The prose cite "8.21 Lecture 8, slide 8" for "grows until equilibrium … maximum" matches the slide's second-law box.
- ΔS = Q/T, reading3 slide 8 and NASA: both support it (NASA: ΔS = ΔQ/T). See row 3 for the missing condition. 8.21 L10 slide 9 states the same with the "≥ … equality only when reversible" condition and could be added.
- "The two descriptions … agree … (8.044 Lecture 8, slides 3 to 8)" (writer flag 4): slides 3–5 derive 1/T = ∂S/∂E from counting and slide 8 gives dS = đQ/T for a system at a bath. This supports the claim; acceptable.
- ΔS_total = −Q/T_h + Q/T_c, nasa-2law: matches the NASA page ("The term (Q/Tc) will always be greater than (-Q/Th) because Th is greater than Tc").
- W = Q_h − Q_c, reading4 slide 10: matches (W_out = |Q_H| − |Q_C|); the ΔU = 0 of the closed cycle is on slide 9, not 10 (info). Reading 1 (8.21 L9) slide 2: W = Q_in − Q_out, correct.
- η = W/Q_h = 1 − Q_c/Q_h, reading4 slides 8 and 10: correct.
- Q_c/T_c ≥ Q_h/T_h cited to "8.21 Lecture 8, slide 11": slide 11 has Q_in = T₊ΔS, Q_out ≥ T₋ΔS. Correct.
- η_max = 1 − T_c/T_h, mit slide 11 and reading4 slides 12, 14: correct (8.044 slide 14: η ≤ 1 − T_min/T_max for any cycle).
- "run very slowly (8.21 Lecture 9, slide 6)": slide 6 (quasi-equilibrium, slow expansion, reversible processes for efficient engines). Correct.
- 40% and 25% (8.21 L8 slide 12): the table gives coal steam plant T₊ 800 K, Carnot 62%, real 40%; Otto engine T₊ 2300 K, 87%, 25%; T₋ ≈ 300 K. Correct; the page's 62.5% is the unrounded value of the table's 62%.
- Q_h = Q_c + W, reading2 slide 8: matches ("Conservation of energy around a cycle … QH = QL + W"). Slide 11 states it explicitly for a heat-extraction device; either is fine.
- Heat pumps (reading2 slide 5), engine run backwards (slide 30), CoP comparing heat delivered with work (slide 12): all match the slide text.
- Clausius callout cited to 8.044 Lecture 6 slide 9 ("When đW = 0, heat flows from high T to low T"): supports the physics; the "Clausius form" wording is standard and NASA names Clausius among those who stated the law (writer flag 1). Acceptable.
- NASA: "Clasius [sic], Kelvin, and Carnot proposed various forms of the second law"; heat flowing cold → hot "would not violate the first law". The page's paraphrase is correct.
- Callout: Guth L17 slides p. 2 and transcript p. 4 checked; correct (writer flag 8: citing Guth only is fine, he is MIT OCW).

## Arithmetic and answer checks
Recomputed independently (all agree unless noted):
- 2⁴ = 16; C(4,2) = 6, C(4,3) = C(4,1) = 4; 1+4+6+4+1 = 16.
- (1/2)¹⁰ = 9.766 × 10⁻⁴ → 9.8 × 10⁻⁴, 1/1024 ≈ 1 in 1000; (1/2)¹⁰⁰ = 7.89 × 10⁻³¹ → 7.9 × 10⁻³¹.
- 1.01 × 10⁵ × 10⁻³ / (1.38 × 10⁻²³ × 293) = 2.50 × 10²² per litre.
- N_A k_B ln 2 = 6.02e23 × 1.38e-23 × 0.6931 = 5.758 → 5.76 J/K (= R ln 2).
- Ice: 0.50 × 3.34e5 = 1.67e5 J; /273 = 611.7 → 612 J/K.
- Blocks: −3.0 + 4.0 = +1.0 J/K; reverse −1.0.
- Engine: 2000 − 700 = 1300 J, 0.35 both ways.
- Carnot: 1 − 300/600 = 0.50; 1 − 300/800 = 0.625; 1 − 300/2300 = 0.8696 → 87%; 37.5% thrown away.
- Station: 1.0/0.40 = 2.5 GW; 1.5 GW to cooling water.
- Fridge: 1500/268 = 5.597, 1500/298 = 5.034, total −0.563 (see row 4 for the shown −5.60 + 5.03); Q_h ≥ 1667.9 → 1668 J; W ≥ 167.9 → 168 J. Cross-check by the Carnot CoP: 268/30 = 8.93, 1500/8.93 = 168 J.
- Heat pump: 2.0 + 1.0 = 3.0 kJ, three times the 1.0 kJ an electric heater gives. Plausible (the Carnot CoP between ~273 and ~293 K is ~15).
- Quiz 1: answer 0 correct; choice 2 is the first law, choice 3 the zeroth law (lesson 4.2 states it), choice 4 wrong (lake vs spark in 4.2). Explanation true.
- Quiz 2: 1.2, 2.0, +0.8 (answer 0); −0.8 and 3.2 wrong; 0 wrong. Correct.
- Quiz 3: 527 °C = 800 K, 27 °C = 300 K → 62.5% (answer 0); 1 − 27/527 = 0.9488 → 94.9%; 37.5% = T_c/T_h; 100% impossible. Correct.
- Quiz 4: (1/2)⁴ = 1/16 (answer 0). Correct.
- Quiz 5: 1500 J, 30% (answer 0); 1500/3500 = 42.9% → 43%; others wrong. Correct.
- Flashcards: all true.
- Plot: expression 100(1 − Tc/T), NaN below T_c; caption values match.
- Calcs file: every number above is in it; `npm run calc:test -- -k entropy-and-the-second-law`: 58 passed. Calcs `source` notes slightly off (info): `fridge-min-work-identity`, `fridge-min-heat-out` and `fridge-min-work` cite reading2 slide 10 (the engine case); the refrigerator inequality is slide 11. `ice-latent-heat` could also cite 8.21 L10 slide 16 ("Enthalpy of melting (at 0 °C) ≈ 334 kJ/kg") besides lesson 4.6 (writer flag 6; k_B as a NIST later-data fact is fine).
- Writer flag 5 (unsourced): the car-engine loss reasons, "a real fridge needs several times this minimum" and the illustrative heat-pump numbers are standard and correct (8.21 L10 slide 13's ideal refrigerator CoP 9.6 against typical real CoPs of 2 to 4 fits "several times"); no source needed at this level. Info only.
- Writer flag 10: percentages as plain text in quiz choices are fine.

## Only earlier terms
- Earlier and correctly referenced: thermal equilibrium and zeroth law (4.2), random molecular motion (4.4), k_B, mole and N_A, pV = N k_B T (4.3), L_f (4.6), ΔU = Q + W with W on the gas (4.8; the page explicitly switches to W done by the engine, consistent with 4.8's own last paragraph pointing to 4.9), thermal energy and "irreversible" (3.4), efficiency and the watt (3.5), ln (0.9), giga (0.1), inflation (introduced in 0.9 exponentials-and-logs, so it may appear in the callout), the early universe at one temperature (4.5's callout).
- Introduced on this page before use: second law, macrostate, microstate, entropy, Ω, isolated system (also in 3.4/3.7), reservoir, heat engine, Q_h, Q_c, η (lesson 3.5 defines efficiency without a symbol), Carnot limit, refrigerator, heat pump.
- "lesson 8.15" is a forward pointer only, not a term the reader needs. Fine.
- Consistency with 4.10 (towards-the-universe-cooling): 4.10 says "a slow expansion with no heat flowing in leaves the entropy of the gas (lesson 4.9) unchanged". 4.9 never states this explicitly (it follows from ΔS = Q/T only once the reversibility condition of row 3 is added). Adding row 3's sentence, or one line "a slow change with no heat (Q = 0) leaves S unchanged" (8.21 L9 slide 7: "dQ = 0 … dS = 0"), closes the gap.

## Coverage
- §4 row 4.9: old OpenStax sections P 12.3, 12.4; CP 15.3, 15.4, 15.6, 15.7 (topics: second law, heat engines, Carnot, entropy, statistical interpretation); sim `diffusion`. All these topics are covered; refrigerators and heat pumps are added as well. The §4 sources were replaced by MIT OCW and NASA as required; no Siyavula page is used, which is reasonable because Siyavula's Grade 10–12 Physical Sciences does not treat entropy (§2.0 names MIT RES.8-010 as the entropy support; 8.21 and 8.044 are also MIT OCW and allowed). Info.
- Not covered, minor at VWO level: the Kelvin(-Planck) statement is not named, though "Every heat engine must throw some heat away" is that statement (worth one sentence, since the page names Kelvin); the steps of the Carnot cycle (two isotherms, two adiabats) are not described; the coefficient of performance is not defined (the heat pump's "three times" is it in words). None of these is needed at this level.
- Level: the counting and S = k_B ln Ω go beyond a usual VWO exam but are clearly marked "You do not need to calculate with this formula at this level". Appropriate.

## Where this leads
- 8.044 lecture 8 → `content/year-3/8.044/entropy-temperature-second-law.mdx` exists; its summary (S = k ln Ω, 1/T = ∂S/∂E, ΔS ≥ 0, dS ≥ δQ/T) matches the `why` text.
- 8.044 lecture 11 → `content/year-3/8.044/heat-engines-carnot.mdx` exists and proves η ≤ 1 − T_C/T_H and η ≤ 1 − T_min/T_max. The `why` says the cycle "is drawn on pressure-volume and temperature-entropy diagrams": the page draws the P–V diagram and describes the T–S rectangle in words (no T–S plot). Info: "drawn on a pressure-volume diagram and described as a rectangle on a temperature-entropy diagram", or leave as is.
- `towards: false` is right (4.10 is the block's last lesson). The cosmology callout's claims match Guth's L17 slide and transcript.

## Licensing and AI terms
- No sentence copied: compared the page with the 8.21, 8.044 and NASA texts; only short standard phrases ("total entropy of an isolated system", "for reasons unknown", attributed to Guth). No issue.
- No figures copied: the only figure is a generated Plot. The 8.21 L8 slide 8 picture (gas spreading) is described in words only.
- Worked examples and quiz questions are the page's own: 8.21's refrigerator example (20 °F / 70 °F, CoP 9.6) and water-heater example are not reused; the four-molecule count is a standard illustration, not taken from any of the cited sources. The power-station and car numbers are quoted facts from 8.21 L8 slide 12, cited.
- 8.21 Lecture 10: slides 4, 5, 6, 14 and 18 have "image removed due to copyright restrictions" notices, and slide 4 has an "Image courtesy of EPA" chart. The page uses only the text of slides 5, 8, 12 and 30, none of the images and none of the household-energy figures from slide 4 (5.1%, 4.4%, 7%). Its `location` says "text only". No issue. No "rights reserved" or "courtesy" notices in the other PDFs (grep over all extracted text).
- NASA: no insignia; cited by title. "NASA's guide to the second law makes the key point …" reports what a named NASA page says and is cited, so it is not the forbidden "according to NASA" phrasing of AI output; to be stricter: "The NASA Glenn page *Second Law, Entropy* points out …" (info).
- No ESO material. No Siyavula branding. No forbidden source cited or read. PhET attribution is printed by the component (not changed).

## Notes
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file.
- The PhET sim has one screen ("Diffusion"); "Number of Particles", "Remove Divider", "Reset Divider", "Center of Mass", "Particle Flow Rate", "Stopwatch" are its exact strings. The default number of particles is 0 on each side, so the reader must set them, as the page says.
- Uncertain: whether a reader with 10 particles of each kind could ever catch all 10 on one side depends on how fast the sim's particles move and how long one watches; at about 1 in 1000 snapshots it is possible but rare, so "sometimes" overstates it.

## Resolution (2026-11-21, by the page author)
- Row 1 (error), "Try it": rewritten for the simulation's real settings (10 to 200 particles per side, in steps of 10). It now compares 10 of each with 200 of each: with 10 the count on the wrong side jumps about a lot, with 200 it hardly changes. It uses $(1/2)^{10}$, about 1 in 1000, to say how rarely all 10 of one kind would be back on their own side. The claim "with a handful of particles you may sometimes see" is gone.
- Row 2: the `at` of P = (1/2)^N now says the formula is derived from slide 8's ΔS = N k_B ln 2 (the number of states grows by 2^N).
- Row 3: ΔS = Q/T now asks for heat that flows in "gently". A new paragraph gives the condition: slow, with no stirring, friction or sudden expansion. In general the entropy rises by at least Q/T (8.044 L8 slides 8 and 13; 8.21 L10 slide 9). Two bullets follow. A slow change with no heat leaves the entropy unchanged (8.21 L9 slide 7), as lesson 4.10 uses. A sudden free expansion raises the entropy by N k_B ln 2 with no heat. The Formula `at` now mentions dS ≥ đQ/T and the quasi-static condition.
- Row 4: the fridge sum now reads −5.597 + 5.034 = −0.56. The calcs entries `fridge-freezer-loss` and `fridge-kitchen-gain` now expect 5.597 and 5.034 J/K, and their `shown` strings were updated to match.
- Row 5: "A litre of air at 20 °C holds about 2.5 × 10²² molecules (from the ideal gas law, lesson 4.3)". The calcs `shown` string was updated.
- Info items:
  - Calcs header: slide numbering corrected, since for 8.21 Lecture 10 the printed number equals the PDF page.
  - Fridge calcs entries now cite reading2 slide 11, the refrigerator case. These are `fridge-min-work-identity`, `fridge-min-heat-out`, `fridge-min-work` and `heat-pump-delivered`.
  - The formula Q_h = Q_c + W now cites slide 11 (also slide 8).
  - The `at` of W = Q_h − Q_c now says ΔU = 0 over a cycle is on slide 9.
  - L_f is still cited to lesson 4.6 only. 8.21 L10 slide 16 does not give the value in its text, and its image is from Wikimedia.
  - The `leadsTo` text for 8.044 lecture 11 now says the cycle is "drawn on a pressure-volume diagram and described as a rectangle on a temperature-entropy diagram".
  - The Kelvin form is now named in one sentence after "Every heat engine must throw some heat away".
  - The NASA sentence now starts "The NASA Glenn page *Second Law, Entropy* makes the key point".
- Lesson 4.8, now in the checkout, uses ΔU = Q + W with W the work done on the gas. That matches this page's remark that its own W is the work the engine does.
- `npx tsx scripts/check-content.ts`: 0 errors. `pytest -k entropy-and-the-second-law tests/calc`: 58 passed. Status set to `reviewed`.
