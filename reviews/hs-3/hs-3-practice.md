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

## Addition (2026-11-21)

Lesson 3.12 (towards-the-universe-expanding-ball) now exists and is reviewed, so the set was extended:

- New counted **Problem 12, "Will this ball of galaxies stop?"** (10 points; exercise id `p13`), on lesson 3.12 only, with our own model values (H = 2.0 × 10⁻¹⁸ s⁻¹ given in SI units, ρ = 1.2 × 10⁻²⁶ kg/m³; none of the lesson's numbers). Parts: (a) ρ_c = 3H²/(8πG) = 7.15 × 10⁻²⁷ kg/m³; (b) choice: ρ/ρ_c = 1.68, so the ball stops and falls back; (c) v/v₀ = 0.664 at r = 1.5 r₀ from v² = v₀²[1 − (ρ/ρ_c)(1 − r₀/r)]; (d) formula box r_max/r₀ = q/(q − 1), q = ρ/ρ_c.
- The optional meteoroid problem is now **Problem 13**, but keeps its exercise id `p12` and answer ids `p12-a` to `p12-c`, so that progress already stored in readers' browsers keeps its meaning (renaming it would credit old optional answers to the new counted problem). The new problem therefore has id `p13`.
- `covers` now includes 12, `prerequisites` includes the lesson, the summary and introduction say twelve lessons and 110 points (Problems 1 to 10 count 9 points each, Problems 11 and 12 count 10 points each; Problem 13 is optional). Readings 14 and 15 added (MIT 8.286 Lecture 7 and Lecture 6 transcripts, as cited in lesson 3.12).
- Calcs: 10 new entries `hs3p-p13-*` (with `answer:` ties for p13-a, p13-c, p13-d); the points entry is now 110. Symbols: `hs-3-practice` added to the lesson 3.12 meanings of H, v₀ and r₀; a new page meaning for q; this page's own meanings of m, v, r, M and r_max extended to name the ball of galaxies.
- Checks: `pytest -k hs-3-practice` 120 passed; `npm run test:answers` 65 passed; content check 0 error(s).

**Problem 12 has not been reviewed: it needs a blind solve** before the set counts as reviewed again (Problems 1 to 11 and 13 are unchanged apart from the renumbered heading of the meteoroid problem).

## Review of the addition (2026-11-21)

Scope: only the new counted **Problem 12** (exercise id `p13`, "Will this ball of galaxies stop?", 10 points) and the frontmatter and introduction changes (`covers`, `prerequisites`, summary, readings 14 and 15, point total 110, the renumbered optional Problem 13 = id `p12`). Problems 1 to 11 and 13 were not re-reviewed.

Sources read for this addition (downloaded to a scratch folder outside the repo, text extracted with `pdftotext`):
- https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a8d35e02dbabc99e6a5fb7af82012b61_m00PjHTq6jU.pdf (8.286 Lecture 7 transcript; pp. 17 and 20 read)
- https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/1a0af97c8db7221f47634e47e0bb3324_vKLqWj0FRyc.pdf (8.286 Lecture 6 transcript; pp. 18, 28 and 29 read)
- Lesson 3.12, `content/year-0/hs-3/towards-the-universe-expanding-ball.mdx` (what the block teaches)

### Blind solve (statements only)

Done from the statement text with hints, solutions, answers and calcs removed. One leak: the extraction kept the continuation line of the part (d) `<Answer>` (its `mistakes` list), so the three wrong forms were seen before part (d) was solved; the solve below does not depend on them.

With G = 6.674 × 10⁻¹¹ N m²/kg² (introduction), H = 2.0 × 10⁻¹⁸ s⁻¹, ρ = 1.2 × 10⁻²⁶ kg/m³:
- **p13-a:** ρ_c = 3H²/(8πG) = 1.2 × 10⁻³⁵ / 1.6773 × 10⁻⁹ = **7.154 × 10⁻²⁷ kg/m³**.
- **p13-b:** q = ρ/ρ_c = **1.677** > 1, so the edge energy is negative: **it reaches a largest size, stops and falls back**.
- **p13-c:** with GM/r₀ = (q/2)H²r₀² (since (4π/3)Gρ_c = H²/2), energy conservation gives v²/v₀² = 1 − q(1 − r₀/r); at r = 1.5 r₀: 1 − 1.6774/3 = 0.4409, **v/v₀ = 0.664**.
- **p13-d:** v = 0 gives r₀/r = 1 − 1/q, so **r_max/r₀ = q/(q − 1)** (2.476 for this universe; 2 at q = 2).

Comparison with the page (one line per answer id):
- p13-a: page 7.15e-27, tolerance 3%. Agrees (7.154e-27).
- p13-b: page answer 0 ("It reaches a largest size, stops and falls back together"). Agrees; the other three choices are wrong (q > 1 rules out "expands for ever"; gravity alone cannot speed the expansion up; the radius cancels).
- p13-c: page 0.664, tolerance 3%. Agrees (0.6640).
- p13-d: page `q/(q - 1)`, vars q in [1.1, 5]. Agrees (equal by value at q = 1.1, 1.677, 2, 5: 11, 2.476, 2, 1.25).

### Findings

| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| A1 | warning | Problem 12(a), "Check the result" | (own check: 3H/(8πG) = 6.0 × 10⁻¹⁸/1.677 × 10⁻⁹ = 3.58 × 10⁻⁹, which is 1/H = 5.0 × 10¹⁷ times ρ_c) | "Forgetting to square H would give a number about 10¹⁸ times too large" | The factor is 1/H = 5 × 10¹⁷, a factor 2 off "about 10¹⁸", and the result would not even be a density (wrong unit), so "times too large" compares unlike quantities. Either say "about 5 × 10¹⁷ times larger, and not even in kg/m³" with a calcs entry for it (none exists now), or drop the sentence and keep the unit check. |
| A2 | info | Problem 12(a), statement | — | "Type a number like `1.2e-26`." | The example is exactly the given density ρ, which a reader could take as a hint or type in. Use a neutral example such as `3.4e-27`. |
| A3 | info | Problem 12 and 13, ids | — | heading "Problem 12" has exercise id `p13` (anchor `#p13`, answer ids `p13-a` to `p13-d`); heading "Problem 13" has id `p12` | Not confusing for readers: the visible text (introduction, headings, the symbol meanings that say "in Problem 12", calcs comments) consistently uses the displayed numbers, and the `Exercise` component shows only "Problem" / "Optional problem" plus the title, never the id. Only a hand-typed fragment `#p12` / `#p13` would land on the other-numbered problem; the heading anchors `#problem-12` / `#problem-13` are correct. Keeping `p12` for the meteoroid is right for stored progress. No other page or code links to these ids (searched content, lib, components). |
| A4 | info | This review file, older sections | — | "Blind solve" and the earlier tables call the meteoroid problem "Problem 12" / `p12` | Historical text, correct at the time; the "Addition" section explains the renumbering. No change needed. |
| A5 | info | frontmatter `status: reviewed` | AGENTS.md: reviewed only when a review exists and all findings are fixed | status stayed `reviewed` while the addition still awaited its blind solve | With this review done and no errors found, `reviewed` can stand once A1 is fixed or recorded as accepted. |

### Formulas and citations (new problem)
- Readings numbering checked: reading14 = Lecture 7 transcript, reading15 = Lecture 6 transcript (the 14th and 15th entries of `source.readings`).
- `E_mech/m = ½v² − GM/r`, cited reading15 pp. 28–29: correct. p. 28 has E = ½ȧ² − (4π/3)Gρ_i/a and E_phys = m r_i² E; p. 29 writes it as ½m(ȧ r_i)² − GmM/(a r_i) and identifies it as kinetic plus potential energy of a test particle on the boundary. "(board)" matches how lesson 3.12 cites it.
- `M = (4/3)πr³ρ`, cited reading15 p. 18: correct (mass inside the shell of initial radius r_i is (4π/3) r_i³ ρ_i).
- `ρ_c = 3H²/(8πG)`, cited reading14 p. 20 (board): correct (E = 0 critical case, "3H squared over 8 pi G"; ρ > ρ_c closed, ρ < ρ_c open).
- Speed of the edge, cited reading14 p. 17 (board) with the note that the ρ/ρ_c form is lesson 3.12's: correct (p. 17 has ȧ² = 2E + (8π/3)Gρ_i/a). The `location` strings of readings 14 and 15 match these pages.
- The hydrogen-atom mass 1.67 × 10⁻²⁷ kg in the check of (a) has no reference on this page; it is lesson 3.12's value (cited there to NIST) and the calcs entry says so. Acceptable for a check line.

### Arithmetic and answer checks
- Recomputed independently (Python): ρ_c = 7.1541 × 10⁻²⁷; q = 1.67736; 1 − q/3 = 0.44088 (page 1 − 0.559 = 0.441); v/v₀ = 0.66399; critical-ball check √(1/1.5) = 0.8165 (page 0.816); 1.677/0.677 = 2.477 (page 2.48, "about two and a half"); 4.28 atoms per m³ (page 4.3). All match.
- Calcs: every number of the new problem has a `hs3p-p13-*` entry except the "about 10¹⁸" of A1. `hs3p-p13-d` is an identity checked against a numerical root of 1 − q(1 − 1/X) = 0: sound. `npm run calc:test -- -k hs-3-practice`: 120 passed.
- Tolerances: 3% on (a) and (c) accepts rounding of G or of q (q = 1.68 gives 0.663) and rejects real mistakes. (d): q ∈ [1.1, 5] keeps q/(q − 1) finite (pole at q = 1 excluded) and physical (q > 1, as the statement asks).
- Mistakes: `(q - 1)/q` is the reciprocal, below 1 for q > 1, so its hint is true; `1/(q - 1)` gives 1 at q = 2, so its hint ("should grow to twice") is true; `q` with "solve for r₀/r first" is reasonable. Each differs from the answer over the range (`q` equals it only at the single point q = 2).
- Hints: (a) gives the definition of ρ_c and says the radius cancels; (c) points to the lesson's formula. Neither gives a result away.
- Every part's solution ends with a check (units and atoms per m³; radius cancels; comparison with the critical ball; the q = 2 and q → 1 limits).

### Only earlier terms
- Everything used is taught in lesson 3.12: Hubble's law v = Hr, the evenly filled ball and its mass, energy per kilogram of the edge galaxy, critical density, ρ/ρ_c, the speed formula, the largest size where v = 0, dark energy (named in the (b) check), hydrogen atoms per cubic metre. "Like a probe fired below the escape speed" is lesson 3.11. H is given in s⁻¹, so no km/s/Mpc conversion is needed. The general formula q/(q − 1) is new but generalises the lesson's worked example (q = 2 and q = 1.25): appropriate for a practice problem.
- `prerequisites` now lists `towards-the-universe-expanding-ball` (lesson 3.12, written and reviewed).

### Coverage
- `covers` is now 1 to 12, and lesson 3.12 is practised in its main points (critical density, sign of the energy, how the edge slows, largest size). Not practised: converting H₀ from km/s/Mpc and the Newtonian Friedmann equation; fine to leave out here (the conversion is in the lesson's quiz).

### Originality and licensing
- Numbers are the page's own: lesson 3.12 uses H = 2.27 × 10⁻¹⁸ s⁻¹ (70 km/s/Mpc), ρ_c = 9.20 × 10⁻²⁷ kg/m³, q = 2 and 1.25; Guth uses h₀ = 0.67 and 8.4 × 10⁻³⁰ g/cm³. The problem uses H = 2.0 × 10⁻¹⁸ s⁻¹, ρ = 1.2 × 10⁻²⁶ kg/m³, q = 1.677 and r = 1.5 r₀. No sentence copied from the transcripts (compared with pp. 17, 18, 20, 28, 29). No figure. Only MIT OCW (CC BY-NC-SA) is added; no forbidden source cited or used.

### Frontmatter and introduction
- `covers: [1 … 12]`, `prerequisites` plus lesson 3.12, summary ("Twelve problems and one optional extra", "an expanding ball of galaxies"), introduction ("twelve lessons", "Problems 1 to 10 count 9 points each and Problems 11 and 12 count 10 points each, 110 in all; Problem 13 is optional", Earth values for "Problem 13"): all consistent with the headings and the `points` attributes (10 × 9 + 10 + 10 = 110; the meteoroid is `optional`). The calcs points entry is updated to 110.

### Verdict of the addition
pass-with-notes: no errors; fix or accept warning A1.

### Resolution of the addition (2026-11-21, by the page author)
- A1: the sentence on forgetting to square H now says the result is not even in kg/m³ ("check the units"), with no factor quoted, so no calcs entry is needed.
- A2: the example input is now `3.5e-27`, not the given density.
- A3–A5: no change; the page stays `status: reviewed`.

## Source change (2026-11-21)

Siyavula Physical Sciences Grade 12, 5.3 Work-energy theorem and 5.5 Power contain OpenStax material, so under Writing rule 10 they are no longer cited and were not opened again. Their citations were replaced by MIT 8.01SC Classical Mechanics (Fall 2016), Course Notes, Chapter 13: Energy, Kinetic Energy, and Work (page numbers are the printed footers of the chapter PDF, checked with pdftotext on 2026-11-21), now the set's main `source` (`cite="mit"`). The 5.5 reading (reading 4) was removed and readings 5 to 15 became readings 4 to 14.

Citations changed:
- Frontmatter: main `source` 5.3 → MIT 8.01SC Chapter 13; reading 4 (5.5 Power) removed.
- Formula "Work–energy theorem": mit "Work-energy theorem (ESCMD), definition box" → mit "Sec. 13.6, Eq. (13.6.1), p. 13-16 (written there W = ΔK = ½mv_f² − ½mv_i², with K for E_k)".
- Formula "Power": reading4 "Power (ESCMJ), definition box, written there P = W/t" → mit "Sec. 13.7, Eq. (13.7.2), p. 13-18 (average power, the rate at which work is done, written there P_ave = W/Δt)".
- Renumbered (same sources and locations): reading5 → reading4 (Gr 12 2.2 Momentum), 6 → 5 (2.5 Impulse), 7 → 6 (2.4 Conservation of momentum), 8 → 7 (MIT Ch. 15), 9 → 8 (MIT Ch. 12), 10 → 9 (MIT Ch. 19), 11 → 10 (MIT Ch. 14), 12 → 11 (Gr 10 22.3), 13 → 12 (MIT Ch. 16), 14 → 13 (8.286 Lecture 7), 15 → 14 (8.286 Lecture 6).
- Introduction: "Siyavula's chapters on work, energy and power, mechanical energy, …" → "Siyavula's chapters on work, mechanical energy, …, and on MIT 8.01SC's course notes on kinetic energy, work and power, collisions, …".
- calcs/hs-3/hs-3-practice.yaml: 3 entries mit "Work-energy theorem (ESCMD) …" → mit "Sec. 13.6, Eq. (13.6.1) …"; 6 entries reading4 → mit "Sec. 13.7, Eq. (13.7.2)" (problem) or "Sec. 13.7" (checks and numbers); every reading5 to reading15 renumbered as above.

No problem, hint, solution, answer or number changed. `content:check` 0 errors; `pytest tests/calc -k "kinetic-energy or power or hs-3-practice"` passes.
