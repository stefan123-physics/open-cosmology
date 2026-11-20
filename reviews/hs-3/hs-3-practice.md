---
page: content/year-0/hs-3/hs-3-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-02 (read: definition of work, W = FΔx cos θ; "Approach 2" for net work present; worked examples 1 to 5 and Exercise 5.1 listed, no lawnmower)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-03 (read: "5.3 Work-energy theorem (ESCMD)"; worked examples 6 to 8 and Exercise 5.2, no curling stone)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-05 (read: "5.5 Power (ESCMJ)", P = W/t; worked examples 11 to 14 incl. a borehole pump, Exercise 5.4)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-02 (read: E_P = mgh, h the perpendicular height from the reference point; exercise with a 70 kg hiker and huts above sea level)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-03 (read: "22.3 Kinetic energy (ESAHL)", E_K = ½mv²)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-05 (read: heading "Using the law of conservation of energy (ESAHP)" present; worked examples 7 to 10 incl. an 850 kg roller coaster)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-02 (read: "Change in momentum (ESCJ9)", Case 1 object bouncing off a wall, present)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-04 (read: "Collisions (ESCJG)", "Inelastic collisions (ESCJJ)", "Worked example 14: An inelastic collision" present; no skaters, beanbags or carts)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-05 (read: "2.5 Impulse (ESCJK)" definition, area under a force–time graph; Example 16 cricket ball hit back by a bat)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter12.pdf (read, local text: Eqs. (12.3.79), (12.3.84), (12.3.100), (12.3.101) present; Examples 12.4/12.5 single- and two-stage rocket in empty space)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter14.pdf (read, local text: Eq. (14.12) U_s = ½kx², Eq. (14.16) U_G = −Gm₁m₂/r; Example 14.2 Toro, its Eqs. (14.2) and (14.6))
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter15.pdf (read, local text: Eqs. (15.4.14) and (15.5.5) present)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter19.pdf (read, local text: Eqs. (19.5.24), (19.5.26), (19.5.27), (19.5.35), (19.5.36), Secs. 19.7 and 19.8 present; no rotating-stool example)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter16/ (not re-read: locator Sec. 16.3.1, Eq. (16.2.4) copied unchanged from the reviewed lesson 3.10)
  - https://www.open.edu/openlearn/nature-environment/an-introduction-energy-resources/content-section-2.1 (read: efficiency as useful output over input, "usually expressed as a percentage"; 1 kWh "1 kJ per second for an hour, i.e. 3600 kJ")
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read: mass 5.9722 × 10²⁴ kg, volumetric mean radius 6371.000 km)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read: escape velocity 2.38 km/s)
verdict: pass-with-notes
---

# Review: Block 3 practice set: energy and momentum

All 42 answer boxes (37 numbers or formulas, 5 choices) agree with an independent blind solve: no wrong number, no wrong marked choice, no faulty formula box. Points add up to 100 (10 × 9 + 10) plus the optional Problem 12 (10). `npm run calc:test -- -k hs-3-practice`: 110 passed. `npm run test:answers`: 65 passed. `npm run content:check`: 0 errors (only the warning that this review file was missing). No em dashes; every unit on the page is inside maths.

No errors were found, so the verdict is pass-with-notes. The warnings are: the formula box of 9(e) needs `exp( )`, which no reader is told to type (`e^x` is refused); Problem 2(c) quotes lesson 1.7 where lesson 1.6 is meant; and the Earth's mass is said to be rounded "as in lesson 2.11", which uses 5.9722 × 10²⁴ kg.

## Blind solve

Solved from `pc2-handover/work/hs-3-practice-statements.md` and the Block 3 lessons only, written to the scratchpad file `blind.md` before the page or the calcs file was opened. My answer | the page's:

- p1-a 656 J (655.6) | 656: agree
- p1-b none (weight at 90°) | choice 0: agree
- p1-c −656 J | −656: agree
- p2-a 54.7 J (54.72) | 54.7: agree
- p2-b 1.95 N (1.954) | 1.95: agree
- p2-c m v²/(2d) | m*v^2/(2*d): agree
- p3-a 5.27 × 10⁵ J (526 993) | 5.27e5: agree
- p3-b the same on both routes | choice 0: agree
- p3-c −706 J | −706: agree
- p4-a 25.1 m/s (25.06) | 25.1: agree
- p4-b 16.6 m/s (16.57) | 16.6: agree
- p4-c 1.97 × 10⁴ J (19 653) | 1.97e4: agree
- p4-d 0.358 m | 0.358: agree
- p5-a 1.47 × 10³ W (1471.5) | 1470: agree
- p5-b 70 % (70.07) | 70: agree
- p5-c 0.14 kWh | 0.14: agree
- p6-a 6.27 kg m/s | 6.27: agree
- p6-b 523 N (522.5) | 523: agree
- p6-c 1.05 × 10³ N (1045) | 1050: agree
- p7-a −0.605 m/s | −0.605: agree
- p7-b 0.475 m/s | 0.475: agree
- p7-c zero | choice 0: agree
- p8-a 1.125 m/s | 1.13: agree
- p8-b 0.875 | 0.875: agree
- p8-c 6.45 cm | 6.45: agree
- p8-d −6.75 m/s | −6.75: agree
- p9-a 3.3 × 10⁴ N | 33000: agree
- p9-b 3.94 m/s² | 3.94: agree
- p9-c 2.16 × 10³ m/s (2157.8) | 2160: agree
- p9-d 1.18 × 10³ m/s (1176.8) | 1180: agree
- p9-e 1 − e^(−Δv/u) | 1 - exp(-dv/u): agree
- p10-a 5.58 kg m²/s | 5.58: agree
- p10-b 2.18 rad/s (2.1797) | 2.18: agree
- p10-c 6.08 J (from 3.35 J before) | 6.08: agree
- p10-d the work of her arm muscles pulling the dumbbells in | choice 0: agree
- p11-a 2.03 km/s (2026.6 m/s) | 2030: agree
- p11-b 1890 km (r_max = 3.450 × 10⁶ m) | 1890: agree
- p11-c 2GMR/(2GM − v²R) | 2*G*M*R/(2*G*M - R*v^2): agree
- p11-d escapes, about 0.86 km/s far away | choice 0: agree (the page's check gives 856 m/s)
- p12-a 1.11 × 10⁴ m/s (11 097) | 11100: agree
- p12-b 1.23 × 10⁸ J | 1.23e8: agree
- p12-c 3.08 × 10⁷ W | 3.08e7: agree

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Problem 9(e), formula box | `lib/answers.ts`: only `pi` is a constant; `exp( )` is a function. The box's help text names `*`, `/`, `^` and `sqrt( )` only | Expected answer `1 - exp(-dv/u)`; the statement says only "Type `dv` for Δv, and `u`" | Add to the statement: "write $e^{x}$ as `exp(x)`". A reader who types `1 - e^(-dv/u)` gets "I don't know the symbol e" and may not find `exp`. (Alternatively add `e` to `CONSTANTS` site-wide.) |
| 2 | warning | Problem 2(c), "Check by another route" | hs-1 syllabus: lesson 1.6 "Equations for constant acceleration", 1.7 "Free fall"; lesson 3.2 attributes $v_f^2 = v_i^2 + 2a\Delta x$ to lesson 1.6 | "$0 = v^{2} - 2ad$ (lesson 1.7)" for a stone sliding on ice | Change to "(lesson 1.6)". |
| 3 | warning | Frontmatter `earthfact.location`; calcs `hs3p-intro-earth` | Lessons 2.11 and 3.11 use 5.9722 × 10²⁴ kg (newtons-law-of-gravitation.mdx l. 173, escape-speed.mdx l. 138); 5.97 × 10²⁴ appears in lesson 2.4 | "rounded here to 5.97 × 10²⁴ kg, as in lesson 2.11" | Say "rounded from NASA's 5.9722 × 10²⁴ kg (as in lesson 2.4)", or use 5.9722 (12(a) would be 11 099 m/s, no change at 3 significant figures). |
| 4 | info | Problem 10 statement | (none) | "The moment of inertia of the student and the stool alone is 2.4 kg m²" | Her arms move too, so strictly her own moment of inertia changes. Consider "take it as 2.4 kg m² throughout" so the model is explicit. |
| 5 | info | Problem 10(d), "Check the result" | (physics) | "If she lets her arms out again ... she gets the energy back as work done on her arms" | True as work done on her arms, but muscles cannot store it again: it ends as heat in her muscles. Consider "...the dumbbells do work on her arms instead, and the kinetic energy falls back to 3.35 J". |
| 6 | info | Problem 11(a), check | Moon 7.346 × 10²² kg, 1737.4 km (NASA) | "this moon is a little smaller and lighter than ours" | 4.80 × 10²² kg is about two thirds of the Moon's mass; "smaller and lighter" without "a little" is more accurate. (The numbers are Europa's; fine unnamed.) |
| 7 | info | Problem 8(d) statement | (none) | "the box is empty and the cart has a spring bumper, so that cart and box still have 1.75 kg" | "so that" makes the mass read as a consequence of the bumper; "and cart and box together still have 1.75 kg". |

## Formulas and citations
- Every `<Formula>` on the page is copied, with its `cite`/`at`, from the reviewed Block 3 lessons, and the reading numbers map to the right sources: reading1 Siyavula 5.2 (work, net work), reading2 22.2 (mgh), reading3 22.5 (ESAHP), reading4 5.5 (ESCMJ), reading5 2.2 (ESCJ9 Case 1), reading6 2.5 (ESCJK), reading7 2.4 (ESCJG, ESCJJ Worked example 14), reading8 MIT ch. 15 (Eqs. 15.4.14, 15.5.5), reading9 ch. 12 (Eqs. 12.3.79, 12.3.84, 12.3.100–101), reading10 ch. 19 (Eqs. 19.5.24/26/27/36), reading11 ch. 14 (Eq. 14.12; Example 14.2 Eqs. (14.2), (14.6); Sec. 14.7), reading12 Siyavula 22.3 (ESAHL), reading13 ch. 16, `mit` = Siyavula 5.3 (ESCMD), `openlearn` 2.1. Each heading or equation number was found in the source read this session, except ch. 16 (not re-read).
- MIT ch. 14 Example 14.2: the example's own Eq. (14.2) is $E_i = \tfrac12 m v_{esc}^2 - Gm_tm/R$ and (14.6) $v_{esc} = \sqrt{2Gm_t/R}$, as cited.
- The `earthfact` and `moonfact` values match NASA (5.9722 × 10²⁴ kg, 6371.000 km; 2.38 km/s). `earthfact` is not cited in any `cite=`, only through the introduction's numbers; acceptable.
- All forbidden sources: none cited or used.

## Arithmetic and answer checks
- Every number in statements, solutions and checks recomputed independently (Python): all agree. Notable checks: 1(c) −655 J by the force route; 4(c) 12 % of 1.632 × 10⁵ J; 6(b) 323 times the weight; 8(d) momentum 2.25 kg m/s and kinetic energy 5.70 + 4.43 = 10.1 J both conserved; 9(d) 981/2158 = 0.45; 9(e) 1 − e^(−2158/2200) = 0.625 = 1500/2400; 10(d) 2.73 J; 11(b) constant-g estimate 855 km (g = 1.316 m/s²); 11(d) 856 m/s; 12(b) 12.6 km lift of a 1000 kg car; 12(c) about 10⁴ kettles of 3 kW.
- Every number on the page has a calcs entry (110 entries; `calc:test` passes); every `<Answer>` carries `calc=` and the calcs `answer:` ties match.
- Tolerances: all 3 %, which accepts the rounded values (1.13 for 1.125, 1470 for 1471.5, 2160 for 2157.8, 1180 for 1176.8, 1050 for 1045) and rejects every listed slip.
- Formula boxes: 2(c) vars m ∈ [1, 30], v ∈ [0.5, 5], d ∈ [1, 50], finite; 9(e) dv ∈ [500, 9000], u ∈ [1500, 4500], finite, result in (0, 1); 11(c) G ∈ [1, 2], M ∈ [10, 20], R ∈ [1, 2], v ∈ [0.5, 2]: the denominator 2GM − Rv² ≥ 20 − 8 = 12 > 0, so finite, and v stays below the escape speed (v² ≤ 4 < 2GM/R ≥ 10), so physical.
- Listed mistakes all true of their formulas: 2(c) `m*v^2/d` (no ½), `m*v/(2*d)` (no square), `v^2/(2*d)` (the deceleration); 9(e) `exp(-dv/u)` (mass fraction left), `exp(dv/u)` (mass ratio m_i/m_f), `1 - exp(dv/u)` (negative); 11(c) `R + R^2*v^2/(2*G*M)` (constant g = GM/R², h = v²/2g), `2*G*M/v^2` (surface potential energy dropped), `2*G*M*R/(2*G*M + R*v^2)` (smaller than R).
- Choice boxes: each marked answer is right and each other choice wrong (1(b), 3(b), 7(c), 10(d), 11(d)); 11(d) "circular orbit" is rightly excluded for a vertical launch.
- Every solution ends with a check (units, a second route, a limit or a size comparison). No hint gives the result away; 11(b)'s second hint warns against v²/2g without giving the number.
- Statements are unambiguous enough to give one answer each (see table rows 4 and 7 for two wordings worth tightening).

## Only earlier terms
- All ideas come from Block 3 lessons 3.1 to 3.11 and earlier blocks: work at an angle and net work (3.1), work–energy theorem (3.2), mgh and the zero level (3.3), mechanical energy, ½kx², thermal energy and W_nc (3.4), power, efficiency and kWh (3.5), momentum change and the triangle force–time graph (3.6), conservation of momentum (3.7), perfectly inelastic and elastic collisions with the fraction-lost and v₁f formulas (3.8), thrust, the rocket equation and the −gt term (3.9), moment of inertia, L = Iω, ½Iω² and point masses (3.10; "point mass" also in lesson 2.11), −GMm/r, escape speed, bound/unbound and J/kg (3.11); ln and e from lesson 0.9.
- `exp( )` as a typed function is not introduced anywhere a reader would see it (row 1).
- "Meteoroid" (Problem 12) is used nowhere else on the site; its meaning is clear from the statement. Info only.

## Coverage
- Each of lessons 3.1 to 3.11 is practised: 3.1 (P1), 3.2 (P2), 3.3 (P3), 3.4 (P4, P8c), 3.5 (P5, P12c), 3.6 (P6), 3.7 (P7), 3.8 (P8), 3.9 (P9), 3.10 (P10), 3.11 (P11, P12). Level is VWO and slightly above (rocket equation, −GMm/r), matching the lessons.
- Frontmatter `lecture: 12`, `covers: [1 … 11]`: correct for now. Lesson 3.12 (towards-the-universe-expanding-ball) is not written, no problem practises it, and `lecture: 12` with `order: 90` puts the set after it, as hs-0, hs-1 and hs-7 put theirs on the last (towards) lesson. When 3.12 is written, consider adding 12 to `covers` (hs-0, hs-1, hs-2 and hs-7 include their towards lesson) and changing "the eleven lessons of Block 3" in the introduction. Info.
- Constants: g = 9.81 m/s², G = 6.674 × 10⁻¹¹, R_E = 6.371 × 10⁶ m as in the lessons; Earth's mass see row 3.

## Where this leads
- A practice set has no `leadsTo` or `towards`; none is present. Not applicable.

## Licensing and AI terms
- No sentence copied from any source; text is the writer's own.
- No figures at all.
- Originality against the sources: no problem is a source's own. Closest resemblances, all with different numbers and different questions: P3 vs Siyavula 22.2's exercise of a hiker between huts with heights above sea level (P3 adds path independence and a negative E_p; info, a different setting would remove the echo); P5 vs Siyavula 5.5 Example 14 (borehole pump; theirs is a flow rate with kinetic energy, ours adds efficiency and kWh); P6(a, b) vs Siyavula 2.5 Example 16 (cricket ball hit back; standard pattern); P4 vs Siyavula 22.5 Example 9 (roller coaster; ours adds friction loss and a buffer spring). MIT examples (Toro, single/two-stage rocket in empty space, ch. 19 examples) differ.
- Against the lessons (writer's flags): 6(c) inverts the lesson 3.6 kick quiz (peak from impulse, not impulse from peak) inside a reversal problem; fine. P7 adds a catch to the push-apart examples of 3.7; fine. Also close: P11 follows the structure of lesson 3.11's "Two probes fired straight up" (one bound probe's height, one escaping), on another body with a formula part added; P10 follows lesson 3.10's "Two weights on a rod" and skater examples. All acceptable for a practice set that drills the lessons' methods; info.
- No Siyavula logo or "Everything Science" branding; no MIT material marked "All rights reserved" or "excluded from our Creative Commons license" (none in chs. 12, 14, 15, 19); NASA cited by page title, no insignia, no "according to NASA"; no ESO text; no forbidden source.

## Notes
- 8(c) treats the cart as sliding (no rotational energy of its wheels); standard at this level.
- 9(d) uses constant g; the statement says so.
- 12(c) treats the braking as taking all the kinetic energy and ignores the potential energy lost during the 4 s; "almost to a stop" covers it at this precision.
- The introduction's points sentence (9 × 10 + 10 = 100, Problem 12 optional) matches the `points` attributes.

## Resolution (2026-11-20, by the page author)

1. (warning) Fixed: Problem 9(e) now says "write e^x as `exp(x)`" in the statement. lib/answers.ts unchanged.
2. (warning) Fixed: Problem 2(c) check now cites lesson 1.6 (constant-acceleration equations).
3. (warning) Fixed: `earthfact.location` and the calcs entry `hs3p-intro-earth` now say "rounded ... as in lesson 2.4", the lesson that uses 5.97 × 10²⁴ kg.
4. (info) Fixed: Problem 10 now says "Take the moment of inertia of the student and the stool alone (without the dumbbells) as 2.4 kg m² throughout". 2.4 kg m² is the value all the parts use (4.65 = 2.4 + 2.25; 2.56 = 2.4 + 0.16), so no number changed.
5. (info) Fixed: 10(d) check now says the dumbbells do work on her arms instead and the kinetic energy falls back to 3.35 J (no wording about getting the energy back). The 3.35 J is added to the `shown` list of `hs3p-p10-c-before`.
6. (info) Fixed: 11(a) check now says the moon is smaller than ours and has only about two thirds of its mass (4.80/7.346 = 0.65).
7. (info) Fixed: 8(d) now reads "and cart and box together still have 1.75 kg".
- Licensing note on P3 (hiker between huts, info): the setting is changed to a cyclist riding from a village at 1850 m to a mountain pass at 2640 m on an 11 km hairpin road (7 % average gradient), with the lake 120 m below the village; all numbers and answers unchanged. Title "A mountain pass by bike"; the summary is updated.
- Not changed: the coverage note about lesson 3.12 (not written yet).

Checks: `npm run calc:test -- -k hs-3-practice` 110 passed; `npm run test:answers` 65 passed; `npm run content:check` 0 error(s), no message for this page. Status set to reviewed.
