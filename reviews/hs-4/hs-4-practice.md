---
page: content/year-0/hs-4/hs-4-practice.mdx
reviewed: 2026-11-21
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02 (read: headings "Pressure-temperature relation" (p₁/T₁ = p₂/T₂) and "The ideal gas equation" (pV = nRT, R = 8,314) present; worked examples 1 to 13 and Exercises 7.2 to 7.6 listed; the only tyre is Worked example 7, a truck tyre with a changing volume (general gas equation), not the set's problem)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/intermolecular-forces/04-intermolecular-forces-02 (read: "High heat of vaporisation", 40,65 kJ/mol; no numerical examples or exercises)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (read, local text: Eq. (6.53) P(z) = P₀ − ρgz on p. 115; "Example the Archimedes principle" on p. 116)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l13/ (read: slide 5 ⟨p²⟩ = 3mkT, ⟨H₁⟩ = 3/2 kT; slide 8 P = NkT/V, E = (3/2)NkT)
  - https://ocw.mit.edu/courses/8-21-the-physics-of-energy-fall-2009/resources/mit8_21s09_lec04/ (read, printed slide numbers: 6 Q = c_p mΔT and water 4.18 J/(g K); 10 bar of length L, qA = −k(T_L − T_0)A/L; 11 fiberglass 0.043, hard wood 0.16 W/(m K); 15 dW = F dx = pA dx = p dV, work done by gas; the only "courtesy" items are Flickr photos on the phase-transition slide, not used)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l6/ (read: slide 8 dU = đQ + đW; slide 18 U = (3/2)NkT; slides 21–22 T V^(γ−1) = c, γ = 5/3 monatomic)
  - https://ocw.mit.edu/courses/3-012-fundamentals-of-materials-science-fall-2005/69147da16e467a72cfa145c1d13f644f_lec05t.pdf (read: p. 5 melting at constant temperature, heat of melting; p. 8 enthalpy of melting "stored in the solid upon freezing, and released again on melting")
  - https://ocw.mit.edu/courses/16-050-thermal-energy-fall-2002/resources/10_part3/ (read: Sec. 2.2, Eq. (2.19) R = L/kA, Eq. (2.20) R₁ + R₂ in series)
  - https://ocw.mit.edu/courses/3-00-thermodynamics-of-materials-fall-2002/77107dfe89f42703e711abc463ae79e8_lecture_14_oneside.PDF (read: p. 97 data table, ΔH_melting 6008 J, C_p ice 38.0)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l11/ (read: slide 8 efficiency = work out / heat in; slide 10 W_out = |Q_H| − |Q_C|; slides labelled L11B12 and L11B14: η ≤ 1 − T_C/T_H)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l8/ (read: slide 7 total entropy of an isolated system never decreases; slide 8 dS = đQ/T with a bath)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: p. 18 temperature falls as 1 over the scale factor, recombination about 4,000 K, decoupling "slightly colder"; p. 19 3,000 K)
  - https://www.grc.nasa.gov/www/k-12/airplane/fluden.html (read: density = mass / volume; updated 13 May 2021)
  - https://www.grc.nasa.gov/www/k-12/airplane/pressure.html (read: pressure force = pressure × area, perpendicular to the surface; updated 13 May 2021)
  - https://www.nist.gov/pml/owm/si-units-temperature (read: 0 °C is 273.15 K, one Celsius degree is an interval of 1 K)
  - https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html (read: 2.725 ± 0.002 K)
  - https://physics.nist.gov/cgi-bin/cuu/Value?na, ?k, ?ukg (not re-read: rounded CODATA values, unchanged from the reviewed lessons 4.3 and 4.4)
verdict: needs-changes
---

# Review: Block 4 practice set: matter and heat

All 41 answer boxes of Problems 1 to 11 (36 numbers, 3 formulas, 2 choices) agree with my blind solve. No wrong number, no wrong marked choice, no faulty formula box. Points: 10 × 10 = 100, every exercise's parts add to 10, plus optional Problem 11 (3 + 3 + 4 = 10). `npm run calc:test -- -k hs-4-practice`: 130 passed. `npm run content:check`: 0 errors; for this page only the warning that this review file was missing. No em dashes. No forbidden source.

The verdict is needs-changes because of one error. The `at` text of Q = mL in 6(b), and the reading's `location`, say the latent heat of fusion is "stored on freezing and released on melting". That is backwards: it is taken in on melting and given out on freezing, which is what 6(b)'s own solution says. The wording follows a slip in the MIT 3.012 notes, and lesson 4.6 has the same text. The warnings are mainly about wording and tolerances: 10(c) says the universe cools "in the same way", which invites the T V^(2/3) rule of 10(a); 10(d) cannot tell z from 1 + z; 1(b) accepts the fresh-water slip; 3(b) has only a small margin; and Problem 11's set-up sentence is not quite right physically.

## Blind solve

I solved the problems from the statements alone, with every `<Hint>`, `<Solution>` and `<Answer>` block removed by a script. My answers went into the scratchpad file `blind.txt` before I opened the rest of the page or the calcs file. Format: my answer | the page's answer.

- p1-a 240 kg/m³ | 240: agree
- p1-b 0.2341 | 0.234: agree
- p1-c 2.820 × 10⁵ Pa (281 995) | 2.82e5: agree
- p1-d 905 N (904.97) | 905: agree
- p2-a −196.15 °C | −196 (1%): agree
- p2-b 117.65 K | 118: agree
- p2-c 2.0234 | 2.02: agree
- p2-d volume, amount (mass, number of molecules) and thermal energy double; T and p do not | choice 0: agree (the choice names the volume and the thermal energy, which is right; mass and amount are not offered)
- p3-a 3.435 mol (T = 281.15 K) | 3.44: agree
- p3-b 2.5425 × 10⁵ Pa | 2.54e5: agree
- p3-c 0.09642 | 0.0965: agree
- p3-d 1.994 × 10²³ | 2.00e23: agree
- p4-a 6.21 × 10⁻²¹ J | 6.21e-21: agree
- p4-b 611.6 m/s | 612: agree
- p4-c m v²/(3 k_B) | m*v^2/(3*k): agree
- p4-d 0.45 J | 0.45: agree
- p5-a 2.508 × 10⁵ J | 2.51e5: agree
- p5-b 8.708 W | 8.71: agree
- p5-c 0.8824 kg | 0.882: agree
- p5-d m(θ − θ₂)/(θ₁ − θ₂) | m*(tf - tc)/(th - tc): agree
- p6-a 29 260 J | 29260: agree
- p6-b 1.169 × 10⁵ J | 1.17e5: agree
- p6-c 44.28 min | 44.3: agree
- p6-d 9.582 | 9.58: agree
- p7-a 32.11 W | 32.1: agree
- p7-b 0.3461 kg | 0.346: agree
- p7-c 29.47 W | 29.5: agree
- p7-d at the top (convection) | choice 0: agree
- p8-a 373.95 J | 374: agree
- p8-b −249.3 J | −249: agree
- p8-c 623.25 J | 623: agree
- p8-d −60 J | −60: agree
- p9-a 35.56 % | 35.6: agree
- p9-b 24 % | 24: agree
- p9-c +1.992 × 10⁴ J/K | 1.99e4: agree
- p9-d Q_h T_c/T_h | Q*tc/th: agree
- p10-a 142.2 K | 142: agree
- p10-b 110.8 J | 111: agree
- p10-c 681.25 K | 681: agree
- p10-d 365.97 ≈ 366 | 366: agree
- p11-a 1635 K | 1635: agree
- p11-b factor 4; 408.75 K | 409: agree (only the temperature has a box)
- p11-c 102.2 K | 102: agree

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | 6(b) Formula `at` (line 759) and `readings[4].location` (line 31) | MIT 3.012 Lecture 5, p. 8: enthalpy of melting "is thermal energy that is stored in the solid upon freezing, and released again on melting". This is a slip in the source: melting takes the heat in, freezing gives it out (ΔH_m > 0 for solid → liquid) | "the heat stored on freezing and released on melting" | Write "p. 8: the enthalpy of melting (latent heat of fusion): the heat taken in on melting and given out again on freezing; written here per kilogram", in both places. 6(b)'s own idea line ("it gives out its latent heat") and the L_f symbol meaning are already right. Lesson 4.6 (`phase-changes.mdx` line 127) has the same text and its review missed it, so fix it there too |
| 2 | warning | 10(c) statement | Lesson 4.10 / Guth L17 p. 18: the radiation's T ∝ 1/a, unlike a gas of atoms (∝ 1/a²) | "The universe cools in the same way as it expands." | Straight after 10(a) and (b), "in the same way" suggests the argon's T V^(2/3) rule, which gives 250² × 2.725 = 1.7 × 10⁵ K (the very slip that lesson 4.10's quiz warns about). Write instead "As the universe expands, the temperature of the background light falls as 1/a (lesson 4.10)." |
| 3 | warning | 10(c) check; 11(a) check | Guth L17 pp. 18–19: recombination (atoms form) at about 4000 K, decoupling at about 3000 K; lesson 4.10 says the same | "well below the 3000 K or so at which atoms formed" | "well below the 3000 K or so of decoupling, by which almost all the atoms had formed" (11(a) already says "of decoupling") |
| 4 | warning | Problem 11 set-up | Standard result, not in the cited sources: the few free electrons left after decoupling keep the gas at the radiation's temperature down to 1 + z ≈ 150 or so; only after that do the atoms cool on their own as 1/a² | "Follow a region of the young universe after the light and the atoms in it have stopped exchanging energy", with 1 + z = 600 | 11(c) already says "Suppose", which is honest. Make the set-up hypothetical too, e.g. "Imagine a region in which the light and the atoms no longer exchange energy". Optionally add to 11(c)'s check that in the real universe the atoms kept the light's temperature until about 1 + z ≈ 150 (marked as a later, standard result, uncertain as to the exact value) |
| 5 | info | 2(a) solution | 77 − 273.15 = −196.15 | "77 − 273.15 = −196 °C", then 2(b) uses −196.15 | "= −196.15 ≈ −196 °C" |

## Formulas and citations
- 1(a) ρ = m/V, `nasadensity`: the page has the definition. Correct.
- 1(b) F_B = ρ_fluid V g, reading1 p. 116 Archimedes example: present on p. 116 ("volume displaced times ρg"). Correct; the same locator as lesson 4.1.
- 1(c) p = p₀ + ρgh, reading1 Eq. (6.53) P(z) = P₀ − ρgz, h = −z: Eq. (6.53) is on p. 115. Correct.
- 1(d) p = F/A, `nasapressure`: "pressure force … equal to the pressure … times the surface area". Correct.
- 2(a) T = θ + 273.15, `nist`: correct.
- 3(a) pV = nRT and 3(b) p₁/T₁ = p₂/T₂, `mit` Sec. 7.2: both headings exist on the Siyavula page. Correct. Gauge pressure is not in Siyavula, but lesson 4.1 introduces it ("what many pressure gauges read: the pressure above that of the air") and the statement explains it again.
- 3(d) N_A and N = nN_A, `nist-na`: the constant is on the page. N = nN_A is the definition of the mole (lesson 4.3). Fine.
- 4(a) (3/2)k_BT, 4(b) √(3k_BT/m), 4(d) pV = Nk_BT, reading2 slides 5 and 8: all on the slides. Correct.
- 5(a) Q = mcΔT, reading3 slide 6: on printed slide 6 ("Q = c_p m ΔT", water 4.18 J/(g K)). Correct.
- 5(c) heat lost = heat gained, reading4 slide 8: slide 8 has "Heat is a flow of energy; Energy is conserved". Correct, with the same locator as lesson 4.5.
- 6(a) Q = mcΔT, reading3 slide 6: correct. 6(b) Q = mL, reading5 p. 8: the locator is right, but the wording is reversed (finding 1).
- 7(a) P = kAΔT/d, reading3 slide 10: printed slide 10 has the bar with qA = −k(T_L − T_0)A/L. Correct. The k values 0.043 and 0.16 are on printed slide 11.
- 7(c) R = d/(kA) and series P = ΔT/(R₁ + R₂), reading6 Eqs. (2.19), (2.20): correct.
- 8(a) U = (3/2)nRT, reading4 slide 18: "U = C_V T = 3/2 NkT". Correct. The `readings` location for reading4 lists only slides 8 and 9, not 18 or 21–22 (info).
- 8(b) W_by = pΔV, W = −pΔV, reading3 slide 15: printed slide 15 has "Work done by gas: dW = F dx = pA dx = p dV". Correct. W = −pΔV is the site's sign convention, as in lesson 4.8. reading3's location lists slides 6, 10 and 11 but not 15 (info).
- 8(c) ΔU = Q + W, reading4 slide 8: "dU = đQ + đW". Correct.
- 9(a) η_max = 1 − T_c/T_h, reading9 "slides 12 and 14": the slide labels L11B12 and L11B14 (PDF pages 13 and 15) give the bound. Correct with the printed labels, the same convention as lesson 4.9.
- 9(b) η = W/Q_h = 1 − Q_c/Q_h, reading9 slides 8 and 10: correct.
- 9(c) ΔS = Q/T, reading10 slide 8: correct.
- 10(a) T₂ = T₁(V₁/V₂)^(2/3), reading4 slides 21–22: correct.
- 10(c) T_then = (1 + z)T_now, reading11 p. 18: p. 18 has "the temperature just falls like 1 over the scale factor". Correct. Linking 1 + z to the ratio of scale factors is lesson 4.10's step, which that lesson cites to the 8.286 Lecture 5 transcript. The set does not list that reading, but it only uses the lesson's result. Fine.
- Constants in the introduction (g, R, k_B, N_A, u, c_water, L_f, L_v, c_ice) match lessons 4.1 to 4.6. In the calcs file, L_f = 6008/0.0180, L_v = 40 650/0.0180 and c_ice = 38.0/0.0180 all come from the read sources. 2.725 K is the FIRAS value and is in `calcs/values.yaml`.
- Seawater 1025 kg/m³ (writer's doubt): it is problem data, standard and correct for seawater, and needs no source. The ρ_fluid symbol meaning says "for water 1000 kg/m³", which is fine as a general remark (info).

## Arithmetic and answer checks
- Every number in the statements, solutions and checks was recomputed (see Blind solve). The extra check numbers also agree: 4.2 × 10⁻³, 0.240, 2.8 atm, 92 kg, 50 cm², 1.41 × 10³ N, 117.65, 16, 2.36 mol, 121 mol, 2.43 × 10⁵ Pa, 0.9035, 2.07 × 10²⁴, 4.14 × 10⁻²¹ J, 511 m/s, 802 K, 7.25 × 10¹⁹, 3.1 × 10⁴ W (13 kettles of 2.4 kW), 0.618 kg, 1.29 × 10⁵ J twice, 488 s, 4.0, 1.32 × 10⁴ J, 1.594 × 10⁵ J, 2657 s, 0.73, 3.75 ("almost four"), 1317 J, 1.13 × 10⁴ J, 1.262 × 10⁴ J, 0.32 W, 1.156 × 10⁵ J, 10 h, R₁ 0.872, R₂ 0.078, 8 %, 2.3 K, 25.7 K, ratio 11, ΔV 2.08 × 10⁻³ m³, 5/3, 125 J, 0.90 (Celsius slip), 38 MJ, −1.111 × 10⁵, +1.310 × 10⁵ J/K, 32.2 MJ, 0.444, −131 °C, 94.8 K, 199 J and 89 J, 367, 4, 409 K, 1635/16.
- Every number on the page is in the calcs file (130 entries pass).
- Formula boxes: 4(c), 5(d) and 9(d) are correct. Their `vars` keep the formulas finite and physical (5(d): θ₂ ≤ 30 < 35 ≤ θ ≤ 65 < 70 ≤ θ₁; 9(d): T_c < T_h). Every `mistakes` entry differs from the answer and its hint is true of that wrong formula (½mv² = k_BT; v not squared; inverted; cold-water mass; wrong denominator; inverted share > 1; maximum work; inverted; missing T_h).
- Choices: 2(d) choice 0 is right and choices 1 to 3 are wrong (temperature and pressure do not double; thermal energy does). 7(d) choice 0 is right. Choice 1 (bottom) and choice 2 ("still air … only the walls matter") are wrong, because cold air sinking from the top sets up convection.
- Tolerances: every correct route, with 273 or 273.15 and with rounded intermediate values, falls inside its box. Three boxes are weak at telling a right answer from a wrong one:
  - **3(b) (writer's doubt), warning.** Applying the pressure law to the gauge reading gives 2.435 × 10⁵ Pa, 4.2 % below 2.54 × 10⁵. It is rejected, but only 1.2 percentage points outside the 3 % band. With `tolerance="2%"` the band would be 2.489 to 2.591 × 10⁵. That still accepts 2.5425 (273.15), 2.5427 (273) and a rounded 2.5e5, and rejects the slip clearly. Number boxes cannot list mistakes (`lib/answers.ts` supports `mistakes` only for formulas), so a tighter tolerance is the only remedy.
  - **1(b), warning.** Using fresh water (1000 kg/m³) instead of the given 1025 gives 0.240, 2.6 % above 0.234, so it is accepted. The solution names 0.240 as the fresh-water value, so the box should reject it: use `tolerance="2%"` (0.229 to 0.239). That still accepts 0.234 and 0.2341. (1(c) and 1(d) also accept the fresh-water value, 1.6 % and 2.4 % off. That matters less, because the seawater effect there is small and the method is what is practised.)
  - **10(d), warning.** z = 366 and 1 + z = 367 differ by 0.27 %, so a reader who gives 1 + z is marked right. The solution even says that the difference "matters little here". If the box is meant to test z against 1 + z, choose a lower temperature, e.g. 60 K (1 + z = 22.0, z = 21.0, 4.8 % apart), with a tolerance of 2 %. Otherwise accept it knowingly and say in the label "(z, not 1 + z)".
- 11(b) asks two things (the growth factor and the temperature) but has one box, for the temperature. That is fine for an optional problem, but the label could say "Temperature of the light (K); the factor is in the solution" (info).
- Hints: none gives the result away. 10(a)'s hint gives 3.375 = 1.5³, which is a help with the arithmetic, not the answer.
- Every solution ends with a "Check the result" or "Check by another route" step with a number, a limit or a units check.

## Only earlier terms
- Every idea comes from lessons 4.1 to 4.10 (all ten are in `prerequisites`) or from earlier blocks: power (lesson 3.5), weight and force balance (Block 2), and unit prefixes such as MJ (Block 0). Gauge pressure is in 4.1; thermal energy and the two-cups-of-tea image in 4.2; the pressure law, moles and N_A in 4.3; rms speed and E_k,avg in 4.4; mixing in 4.5; latent heats and the heating curve in 4.6; thermal resistance, convection and "the freezer compartment at the top of an old fridge" in 4.7; ΔU = Q + W with W done on the gas, U = (3/2)nRT, "monatomic" and the factor 5/3 in 4.8; reservoirs, Q/T, efficiency and the Carnot limit in 4.9; T V^(2/3), T ∝ 1/a, 1 + z, decoupling and atoms cooling as 1/a² (lesson 4.10's own step) in 4.10.
- **warning:** 2(d)'s step title "Intensive and extensive". These words appear in lesson 4.2 only in its frontmatter (a reading's `location` and the `leadsTo` "why" line), not in its text. The step body explains the idea without them. Either rename the step ("What depends on the amount of gas") or define the words in a bracket.
- Conventions: 4.8's sign (W on the gas) is used in 8(b), 8(c), 8(d) and 10(b). 9(b) uses W for the work the station does, and its solution says so (lesson 4.9's convention). Both are covered by the W symbol meaning. Problem 2 uses 273.15 (as lesson 4.2) and Problems 3 and 10 use 273 (as lesson 4.3), which is fine.
- Symbols (writer's doubt on Δ): the page-scoped Δ meaning ("a change in a quantity, final minus initial") fits every use on the page; fine. **warning:** the R meaning says "In Problem 3, the universal gas constant …; in Problem 7, the thermal resistance". But R as the gas constant is also used in the introduction, Problem 8 (ΔU = (3/2)nRΔT, pΔV = nRΔT) and Problem 10(b). Write "In the introduction and Problems 3, 8 and 10 …". **info:** the V meaning (float, tyre, bulb) does not mention the argon of Problems 8 and 10 or the region of the universe in 11 (T V^(2/3), V ∝ a³).

## Coverage
- Each of the ten lessons has a problem: 4.1 → P1, 4.2 → P2, 4.3 → P3, 4.4 → P4, 4.5 → P5, 4.6 → P6, 4.7 → P7, 4.8 → P8, 4.9 → P9, 4.10 → P10 (and the optional P11).
- Not practised (info; none is needed for a ten-problem set): Boyle's and Charles's laws (only the pressure law and pV = nRT), the Maxwell distribution, isothermal work nRT ln(V₂/V₁), refrigerators and heat pumps, S = k_B ln Ω, cooling by evaporation, and the density change that drives convection (lesson 4.7's warm-air example). At VWO level, Boyle and Charles are the most commonly examined of these, so a later set could add one.

## Where this leads
- A practice set has no `leadsTo` and no `towards`. The block's `towards: true` lesson is 4.10, which this set does not replace. Not applicable.

## Licensing and AI terms
- Problems and numbers are the set's own. They differ from Siyavula's worked examples 1 to 13 and Exercises 7.2 to 7.6 (Siyavula's only tyre is a truck tyre with a changing volume), from the 8.21 slide examples (shower, house air, 0.2 m concrete wall) and from the lessons' worked examples.
- **warning (closeness to the lessons, not a licence problem):** 8(d) is lesson 4.8's worked example "Keeping the books" (b) almost word for word with new numbers. Lesson: "Later the piston is pushed in, doing 80 J of work on the gas, while 200 J of heat leaks out through the walls." Set: "Later the piston is pushed in, doing 150 J of work on the argon, while 210 J of heat leaks out through the walls." 10(a) and (b) follow lesson 4.10's "Helium pushing a piston" closely (insulated cylinder, 2.0 L, "slowly pushes the piston out until the volume is …"), with argon, 0.050 mol, 320 K and 6.75 L. The numbers are new, so the brief's rule is met. But a reader who has just studied those examples meets the same exercise again; consider a different situation for 8(d) (e.g. a bicycle pump squeezed while warm air leaks heat).
- No sentence copied from a source. The 3.012 wording in the `at` text is a paraphrase, and the paraphrase is reversed (finding 1).
- No figures or diagrams on the page.
- Siyavula: no logo or branding. "Everything Science" appears only inside one reading's citation title (as in lesson 4.5), which is attribution, not branding (info; the other Siyavula titles leave it out).
- MIT: no material marked "All rights reserved" or excluded from the CC licence is used. The 3.00 notes carry "© W.C Carter" in the header, but only two data values from them are used, with no "rights reserved" notice. The 8.21 slide 4 "courtesy" photos are not used.
- NASA: cited by page title, no insignia, no "according to NASA". ESO: not used. No OpenStax, Khan Academy, CK-12, IOPSpark, LibreTexts, Wikiwijs or Wikipedia.

## Notes
- The 3(c) answer means the fraction of the air that was in the tyre at 38 °C before letting air out, which is what the statement asks. 30/311 is the only reasonable reading.
- P11(c), writer's doubt: using lesson 4.10's own step (atoms alone cool as 1/a²) is fine, because that lesson states it and marks it as its own step. The issue is only the set-up sentence (finding 4).
- Format matches the reviewed `hs-3-practice.mdx`: frontmatter fields, the "How to answer" section, `<Exercise>`/`<Part>` with points, "The idea" plus steps plus a check in each solution, and an `optional` last problem.

## Resolution (2026-11-21, by the page author)

1. (error) Fixed: the `at` text of Q = mL in 6(b) and the `location` of reading 5 (MIT 3.012 Lecture 5) now say that the latent heat of fusion is taken in on melting and given out again on freezing. Lesson 4.6 is left to its own fix.
2. (warning) Fixed: 10(c) now says that the light cools in a different way from the argon: its temperature falls as 1/a (lesson 4.10).
3. (warning) Fixed: the 10(c) check now says "well below the 3000 K or so of decoupling, and below the 4000 K or so by which half of the hydrogen had become neutral atoms (lesson 4.10)". A calcs fact `hs4p-p10-recombination` (4000 K, Guth L17 p. 18) was added; `hs4p-p10-decoupling` quotes the new wording.
4. (warning) Fixed: Problem 11's set-up is now hypothetical: "Imagine a region of the young universe in which, from 1 + z = 600 on, the light and the atoms no longer exchange any energy." The optional remark about the real universe (atoms tied to the light until about 1 + z ≈ 150) was not added, because no cited source gives it.
5. (info) Fixed: 2(a) now reads "77 − 273.15 = −196.15 °C, about −196 °C" (calcs `shown` updated).
- Tolerances (warnings): 3(b) and 1(b) are now 2%. 3(b) accepts 2.489 to 2.591 × 10⁵ Pa and rejects the gauge slip 2.435 × 10⁵. 1(b) accepts 0.229 to 0.239 and rejects the fresh-water 0.240.
- 10(d) (warning): changed to a temperature of 60 K, so 1 + z = 22.0 and z = 21.0 (4.8% apart). The box has tolerance 2% and the label "Redshift z (not 1 + z)", and the statement says "Give z itself, not 1 + z". The check explains the difference. Calcs `hs4p-p10-d-1pz`, `hs4p-p10-d` and `hs4p-p10-d-check` were updated, and `hs4p-p10-d-gap` was added.
- 2(d) (warning): the step title "Intensive and extensive" is now "What depends on the amount of gas". The words are no longer used on the page.
- R symbol meaning (warning): it now names every use: "In the introduction and Problems 3, 8 and 10, the universal gas constant …; in Problem 7, the thermal resistance of a layer". The V meaning (info) now also names the argon of Problems 8 and 10 and the region of Problem 11. The W meaning now says W is positive when the gas is compressed (needed for the new 10(b)).
- Closeness to the lessons (warning):
  - 8(d) is now a new situation. A cyclist blocks the outlet of a bicycle pump and does 45 J of work on the air while 18 J of heat goes to the walls, so ΔU = +27 J (a mistake check gives 63 J). Calcs `hs4p-p8-d` and the new `hs4p-p8-d-slip` cover it.
  - Problem 10(a) and (b) are now a compression, not lesson 4.10's expanding helium. A fire piston holds 0.0020 mol of argon at 290 K and is squeezed without heat to 1/3.375 of its volume. (a) T₂ = 290 × 3.375^(2/3) = 290 × 2.25 = 653 K (about 380 °C; the power-1 mistake check gives 979 K). (b) The work done on the gas is W = ΔU = 1.5 × 0.0020 × 8.31 × 362.5 = 9.04 J (U goes from 7.23 J to 16.27 J). The title is now "A fire piston and the cooling universe", and the summary is updated. Calcs `hs4p-p10-ratio`, `-a`, `-a-celsius`, `-a-slip`, `-dU`, `-b`, `-U1` and `-U2` were rewritten.
- Not changed: 11(b)'s label (info; the growth factor is given in the solution). The `location` lines of readings 3 and 4 list fewer slides than are cited (info). The suggestion to add Boyle and Charles problems (coverage info).

Checks: `pytest -k hs-4-practice` 133 passed; `npm run test:answers` 65 passed; content check 0 error(s), no message for this page. Status set to reviewed. The new 8(d) and 10(a), (b), (d) numbers were recomputed independently in the calcs file but have not had a second blind solve.
- Second check of the changed parts (by the coordinator, 2026-11-21): 8(d) W = +45 J, Q = −18 J, ΔU = +27 J; 10(a) 3.375^(2/3) = 2.25, 290 × 2.25 = 652.5 → 653 K; 10(b) (3/2)(0.0020)(8.31)(362.5) = 9.04 J; 10(d) 60/2.725 = 22.02, z = 21.0. All agree with the page and calcs.
