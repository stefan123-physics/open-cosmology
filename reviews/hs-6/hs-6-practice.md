---
page: content/year-0/hs-6/hs-6-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (read, local PDF: Eqs. (3.1.10), (3.1.12), (3.2.1))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read, local PDF: Eqs. (5.1.1), (5.2.4), (5.4.1)–(5.4.6))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ (read, local PDF: Eqs. (6.2.7), (6.2.10), (6.3.1), (6.3.2))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap7dc_circuits/ (read, local PDF: Eqs. (7.2.5), (7.2.7), (7.3.2), (7.3.4), (7.3.5))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read, local PDF: Eqs. (8.2.2), (8.5.2))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read, local PDF: Eqs. (9.1.7), (9.2.1), (9.4.3))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read, local PDF: Eq. (13.4.27))
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter1fields/ (Sec. 1.6; not re-read, same locator as electric-field.mdx, checked in its review)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w09d2/ (slide 26; not re-read, same locator as electromagnetic-induction.mdx, checked in its review)
  - Siyavula Gr 10 16.3, 16.4, 11.2; Gr 11 2.4, 9.2, 9.3, 10.3; Gr 12 5.5 (all read; all eight URLs are CCBY rows in docs/siyavula-licences.tsv)
verdict: pass-with-notes
---

# Review: Practice set: electricity and magnetism

All 50 answer boxes agree with an independent blind solve (below). No wrong physics in any answer, no wrong number, no wrong citation, no forbidden source. Points add up to 139. The notes are about answer tolerances that reject correctly rounded answers, the position of the correct choice, one symbol meaning, one muddled sentence and one Siyavula locator.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | frontmatter `references.siy112.location` | Siyavula 11.2 says the electric and magnetic fields oscillate in planes at right angles to each other; the page text (read 2026-11-20) has no sentence that they are also at right angles to the direction of travel ("direction" and "transverse" do not occur) | "the electric and magnetic fields at right angles to each other and to the direction of travel" | Drop "and to the direction of travel" from the locator. 11(d) has no `<Formula>`, so nothing else changes; if a citation for transversality is wanted, use MIT 8.02T Ch. 13 (Sec. 13.4) as lesson 6.12 does. |

## Formulas and citations
- Every MIT equation number checked in the downloaded 8.02T chapter PDFs: (3.1.10) U = q₀V, (3.1.12) 1 eV, (3.2.1) uniform field, (5.1.1) Q = C|ΔV|, (5.2.4) parallel plates, (5.4.2) U = ½C|ΔV|², (5.4.5)–(5.4.6) external force and work pulling the plates apart, (6.2.7) Ohm, (6.2.10) R = ρl/A, (6.3.1) P = IΔV, (6.3.2) P = I²R = ΔV²/R, (7.2.5) ΔV = ε − Ir, (7.2.7) I = ε/(R + r), (7.3.2) series, (7.3.4) two-branch junction, (7.3.5) parallel, (8.2.2) F = |q|vB sin θ, (8.5.2) r = mv/(|q|B), (9.1.7) long wire, (9.2.1) force between parallel wires, (9.4.3) solenoid, (13.4.27) E = cB. All correct and support what the page uses them for.
- Siyavula sections read: 16.3 gives Q = (Q₁ + Q₂)/2 for identical conductors; 16.4 the elementary charge; 9.2 Coulomb's law with k = 9.0 × 10⁹; 9.3 E = kQ/r²; 2.4 G = 6.67 × 10⁻¹¹; 5.5 the kWh; 10.3 Φ = BA cos θ, Faraday's law with N and the minus sign, Lenz's law; 11.2 c = fλ. All eight URLs are `CCBY` rows in docs/siyavula-licences.tsv.
- "Our own step" formulas (1(d), 2(c), 3(b), 3(e), 8(d), 12(a)) each cite the formulas they are built from, as the hs-5 review asked. No `cite="mit"` on the page.

## Arithmetic and answer checks
- `npm run calc:test -- -k hs-6-practice`: 101 passed. `npm run content:check`: 0 errors; for this page only the "no review file yet" warning.
- Every number in solutions and checks recomputed by my own route (scratch script): all agree (e.g. 1(b) 15.5 mg; 2(d) a/g = 4.3 × 10¹³; 3(d) mgd = 5.77 × 10⁻¹⁶ J; 3(e) 1202 V; 4(d) 7.97 × 10⁻⁸ J; 9(d) 477.5 turns and 200 × the Earth's field; 11(b) 5 × 10⁷; 12(c) 1.20 × 10⁵⁷ nucleons, 1.08 × 10³⁹ charges, 1.11 × 10¹⁸ per charge).
- Points: 12 + 13 + 13 + 11 + 11 + 11 + 11 + 12 + 12 + 12 + 9 + 12 = 139; each exercise's parts add up to its total.
- **warning, tolerances.** The "How to answer" box says "small differences from rounding are accepted", and the data are mostly given to two significant figures, but a 1% box rejects the correctly rounded two-figure answer in seven parts: p1-a (1.9e10, 1.1% off), p1-b (1.5e-4, 1.3%), p4-b (13 nC, 2.3%), p5-a (2.2 Ω, 1.9%), p5-b (3.2 V, 1.5%; also 3.3 V from a rounded R = 2.2 Ω), p12-b (3.5e16, 1.5%), p12-c (1.7e20, 1.2%). Raise these to 3% (or at least 2% for p1-a and p12-c and 3% for the others); 3% still rejects every real slip I tried (a missed square, a factor 2, a wrong unit prefix). p3-c's absolute 0.2 and p9-d's 1% (accepts 477, 478 and 480) are right.
- Formula boxes: p1-d, p2-c, p3-e, p8-d, p12-a each equal my formula (checked by value; the calcs identity entries confirm). `vars` ranges keep every formula finite and physical (p1-d: both charges positive, as the "same sign" statement needs; p3-e and p12-a define `e`, which the checker treats as a plain symbol, so `n*e` works).
- `mistakes`: all different from the answer and every hint true of its wrong formula (p1-d third is the inverse; p2-c second is the distance from Q₂, correct; p3-e `m*g*d/e` equals the answer only at n = 1, harmless; p8-d second is v/B; p12-a second is N²).
- Multiple-choice keys (p4-d 0, p5-d 1, p10-d 0, p11-d 0, p12-d 0) are correct and every other choice is wrong.
- **warning, choice position.** Choices are not shuffled by components/exercise/Answer.tsx, and the correct option is the first in four of the five choice parts; in 4(d), 10(d) and 12(d) it is also by far the longest option and the only one with a "because/so" explanation. A learner can score by picking the first or longest option. Move the key to different positions and shorten the right answers (e.g. 4(d): "The voltage doubles to 12 V and the stored energy doubles"; let the solution explain where the energy comes from). The same pattern is in the earlier practice sets (9 of 11 keys at 0); worth a site-wide note.
- Every part ends with a check except the qualitative 4(d), 5(d), 10(d), 11(d), 12(d), whose reasoning step is enough. Info.
- Hints: none gives a result away. 2(c), 8(d) and 12(a) state the key equation to start from (12(a): "Set k(Ne)² = Gm²"), which leaves only algebra for a 4-point part. Acceptable as a first hint; consider making the first hint a question ("Which two forces must be equal? Does r matter?") and the equation a second hint. Info.

## Only earlier terms
- Every idea is taught in a Block 6 lesson: charge sharing, quantization, Millikan (6.1 electric-charge); Coulomb's law (6.2); E = kQ/r², F = qE (6.3); V = Ed, electronvolt, qV = ½mv² (6.4); parallel-plate capacitor, energy, disconnecting the battery (6.5, including its PhET task on changing the gap at fixed charge); resistivity (6.6); series, parallel, internal resistance (6.7); kWh and cost (6.8); F = qvB, r = mv/(qB) (6.9); long wire, parallel wires, solenoid (6.10); flux, Faraday, Lenz, transformer (6.11); E = cB, c = fλ (6.12); gravity against electricity, neutrality, 10¹⁸ nucleons (6.13).
- info: "mass spectrometer" is in no lesson, but Problem 8 describes the setup fully (charged atoms, field at right angles, half circle onto a detector), so it is self-contained. "Geostationary" is not used; the 3.6 × 10⁷ m height is given.

## Symbols
- **warning** `Q_1` and `Q_2` are defined on this page as the "size of the charge". In Problem 1(c) the formula Q = (Q₁ + Q₂)/2 needs the charges with their signs (+9.0 and −3.0 nC; lesson 6.1 and Siyavula 16.3 say "with their signs"). Change the meaning to e.g. "Charge of the first of two spheres or point charges, with its sign in Q = (Q₁ + Q₂)/2 (Problem 1(c)); in Problem 2, the one from which x is measured."
- Combined meanings (n: electrons in 1 and 3, turns per metre in 9; N: turns in 9 and 10, electrons in 12; r: distance, wire radius, internal resistance, circle radius; d, m, V, Q) each name their problem. Acceptable for a set spanning a block; `r` with four uses is the least comfortable. Info.

## Coverage
- All thirteen lessons are exercised: 6.1 (P1a, P3c), 6.2 (P1), 6.3 (P2), 6.4 (P3, P8d), 6.5 (P4), 6.6 (P5), 6.7 (P6), 6.8 (P7), 6.9 (P8), 6.10 (P9), 6.11 (P10), 6.12 (P11), 6.13 (P12). Level is right for VWO: one- to three-step problems plus one algebraic generalisation per problem.

## Where this leads
- Not applicable to a practice set (no `leadsTo`).

## Licensing and AI terms
- No problem is Siyavula's: I compared with the worked examples and exercises of 16.3, 16.4, 9.2, 9.3 and 10.3 (Siyavula's sphere examples use −5/−3 nC and charges in units of 10⁻¹⁸ C, never followed by a Coulomb force; their field examples use +3/−4 nC at 50 cm; their Faraday examples use 5, 9 and 4 turns with a changing field, not a coil pulled out). MIT sources used are course notes, not problem sets.
- Overlap with the lessons' own worked examples (fine for practice, listed for the author):
  - info: P1 is close to lesson 6.1's "Two identical metal spheres … +7.0 nC and −3.0 nC … touch"; P1 uses +9.0/−3.0 nC and adds the force before and after and the general ratio. Consider other charges (e.g. +8.0 and −2.0 nC) so the first step is not the lesson's example with one number changed.
  - info: P12(a) is lesson 6.13's balance condition Gm² = ke² written for N charges, and 12(c) ends at the lesson's "one extra charge per 1.1 × 10¹⁸ nucleons" (the solution says so, and the route through the star's charge is new). 12(b) and the dust framing are new. Acceptable; the problem works as a revision of 6.13 rather than new ground.
  - info: 2(c) and 9(b) are both zero-field points; 9(b)'s check contrasts 1/r² with 1/r, which makes the repetition useful. Fine.
- No figures, no Siyavula branding, no NASA material, no em dashes (the en dashes in "Eqs. (5.4.5)–(5.4.6)" are ranges). No forbidden source.

## Notes
- **warning** 7(d) check: "A heater is one of the most expensive appliances in a home, because it turns all its power into heat." Every appliance's energy ends up as heat; a heater costs a lot because its power is high (2 kW) and it runs for hours. Suggest: "A heater is one of the most expensive appliances in a home: its power is high and it runs for hours."
- info: a few check-step numbers have no calcs entry: 4(c) "millions of times more" (a 220 μF, 330 V flash stores 12 J, 3 × 10⁸ times more: true), 5(a) "0.2 Ω or so" for a household cable (1.7 × 10⁻⁸ × 25/2.5 mm² = 0.17 Ω: true), 9(a) "about as strong as the Earth's field" (6.7 vs 5 × 10⁻⁵ T: true). Add entries if the numbers inventory flags them.
- info: calcs `hs6p-p11-b-earth` and the 9(d) check cite `reading7` Eq. (9.1.7) for the Earth's field of 5 × 10⁻⁵ T; that equation is the long-wire field. Cite where lesson 6.10 takes the Earth's field from.
- info: 3(d) "drifts slowly upwards" from a drop that "hangs still" is fine (steady drift = balanced forces); a student who keeps q = 4.81 × 10⁻¹⁹ C gets 3605 eV, inside the 1% box.
- info: the dust grain mass 1.0 × 10⁻¹⁷ kg fits a grain about 0.1 μm across; the statement's "starlight and collisions with gas" charging is correct.

## Blind solve

My answers (written before opening the page; copy in scratchpad/reviews/hs-6-practice-blind.md):

- p1-a: 1.875 × 10¹⁰ electrons; page 1.88e10: agree
- p1-b: 1.52 × 10⁻⁴ N, attraction; page 1.52e-4: agree
- p1-c: 5.06 × 10⁻⁵ N (repulsion); page 5.06e-5: agree
- p1-d: (Q₁ + Q₂)²/(4Q₁Q₂); page same: agree
- p2-a: 1800 N/C; page 1800: agree
- p2-b: 1800 N/C, total 0; page 1800 (and 0 in the solution): agree
- p2-c: d√Q₁/(√Q₁ + √Q₂); page d/(1 + √(Q₂/Q₁)), equal: agree
- p2-d: 4.22 × 10¹⁴ m/s²; page 4.22e14: agree
- p3-a: 1.0 × 10⁵ V/m; page 1.0e5: agree
- p3-b: 4.81 × 10⁻¹⁹ C, negative; page same: agree
- p3-c: 3; page 3: agree
- p3-d: 3600 eV; page 3600: agree
- p3-e: mgd/(ne); page same: agree
- p4-a: 2.21 nF; page 2.21: agree
- p4-b: 13.3 nC; page 13.3: agree
- p4-c: 3.98 × 10⁻⁸ J; page 3.98e-8: agree
- p4-d: V doubles to 12 V, energy doubles (work done pulling); page choice 0: agree
- p5-a: 2.16 Ω; page 2.16: agree
- p5-b: 3.25 V; page 3.25: agree
- p5-c: 0.541 Ω; page 0.541: agree
- p5-d: four times (8.66 Ω); page choice 1: agree
- p6-a: 2.0 Ω; page 2.0: agree
- p6-b: 3.6 A; page 3.6: agree
- p6-c: 7.2 V; page 7.2: agree
- p6-d: 1.2 A; page 1.2: agree
- p7-a: 1000 W; page 1000: agree
- p7-b: 8.70 A; page 8.70: agree
- p7-c: 500 W; page 500: agree
- p7-d: €54; page 54: agree
- p8-a: 8.0 × 10⁻¹⁵ N; page 8.0e-15: agree
- p8-b: 0.0995 m; page 0.0995: agree
- p8-c: 3.3 cm; page 3.3: agree
- p8-d: √(2mV/q)/B; page same: agree
- p9-a: 6.7 × 10⁻⁵ T; page 6.67e-5: agree
- p9-b: 2.4 cm; page 2.4: agree
- p9-c: 2.0 × 10⁻³ N/m, attract; page 2.0e-3: agree
- p9-d: 477.5 (477 to 480) turns; page 477 (1%): agree
- p10-a: 6.25 × 10⁻⁴ Wb; page 6.25e-4: agree
- p10-b: 1.25 V; page 1.25: agree
- p10-c: 0.25 A; page 0.25: agree
- p10-d: Lenz, own field along the magnet's, opposes the pull; page choice 0: agree
- p10-e: 40 turns; page 40: agree
- p11-a: 2.5 cm; page 2.50: agree
- p11-b: 1.0 × 10⁻¹² T; page 1.0e-12: agree
- p11-c: 0.12 s; page 0.12: agree
- p11-d: both horizontal, at right angles to each other; page choice 0: agree
- p12-a: (m/e)√(G/k); page same: agree
- p12-b: 3.45 × 10¹⁶; page 3.45e16: agree
- p12-c: 1.72 × 10²⁰ C; page 1.72e20: agree
- p12-d: large bodies stay neutral, gravity only adds; page choice 0: agree

No statement was ambiguous or missing data. Open-ended wordings ("What happens?" in 4(d), "In which directions" in 11(d)) turned out to be choice boxes, which is fine.

## Resolution (2026-11-20, by the page author)

1. Warning, siy112 locator: dropped "and to the direction of travel"; the locator now reads "the speed of light and c = fλ; the electric and magnetic fields at right angles to each other".
2. Warning, tolerances: p1-a, p1-b, p4-b, p5-a, p5-b, p12-b and p12-c raised from 1% to 3%, so correctly rounded two-figure answers pass (p1-b 1.1e-4, p4-b 13, p5-a 2.2, p5-b 3.2 or 3.3, p12-b 3.5e16 or 3.4e16, p12-c 1.7e20). p1-a is now an exact 1.5e10 (see 6).
3. Warning, choice position: the keys now sit at different places (p4-d 2, p5-d 3, p10-d 1, p11-d 3, p12-d 2), and the right answers were shortened so none is the longest option: 4(d) "The voltage doubles to 12 V and the stored energy doubles" (the solution still explains where the energy comes from); 10(d) "It makes its own field along the magnet's field, so you must pull harder"; 12(d) "Large bodies stay almost exactly neutral, but gravity only attracts and adds up" (two distractors reworded slightly longer). No calcs entry referred to a choice index.
4. Warning, Q₁ and Q₂: new meanings "The charge of the first/second of two spheres or point charges, with its sign" (Q₁ keeps the note on Problem 2) in the coordinator's file sym-hs-6-practice-fix.json, for ids Q-1 and Q-2-cap; data/symbols.json not edited.
5. Warning, 7(d) check: now "A heater is one of the most expensive appliances in a home: its power is high and it runs for hours."
6. Info, P1 close to lesson 6.1: the charges are now +8.0 nC and −2.4 nC. Recomputed: 1(a) 1.5 × 10¹⁰ electrons (exactly 15 000 000 000); 1(b) 1.08 × 10⁻⁴ N, about the weight of 11 mg; 1(c) shared charge +2.8 nC, 4.41 × 10⁻⁵ N, total +5.6 nC, ratio 2.45, products 19.2 and 7.84 nC². Calcs entries updated, with new entries for the two products.
7. Info, hints: 2(c), 8(d) and 12(a) now open with a guiding question; the equation to start from is the second hint.
8. Info, check numbers and citation: new calcs entries hs6p-p4-c-flash (220 μF at 330 V: 3 × 10⁸ times more), hs6p-p5-a-cable (25 m of 2.5 mm²: 0.17 Ω), hs6p-p9-a-earth (6.67/5 = 1.3) and hs6p-p9-d-earth (200 times). hs6p-p11-b-earth and the new Earth-field entries now cite reading7, Problem 9.13.12, p. 67 (the Earth's field, 0.5 gauss), checked in the local Ch. 9 text; that is where lesson 6.10 takes it from.
Other infos (combined meanings of n, N, r; overlap of P12 with lesson 6.13; mass spectrometer described in full) left as they are, as the review accepts them.

Checks: `npm run calc:test -- -k hs-6-practice` 107 passed; `npm run test:answers` 65 passed; `npm run content:check` 0 error(s), no line for this page. Status set to reviewed.

## Follow-up (2026-11-20): Siyavula 5.5 removed

Siyavula Physical Sciences Grade 12, 5.5 Power may contain examples taken from OpenStax without credit, so it is no longer cited (Writing rule 10; the page was not opened again). The reference siy55 was removed. The kilowatt-hour formula in Problem 7(d) now cites reading4 (MIT 8.02T Course Notes, Chapter 6) at "Eq. (6.3.1), power as energy per unit time; 1000 W × 3600 s is our own step". In calcs/hs-6/hs-6-practice.yaml the three entries hs6p-p7-d-energy, hs6p-p7-d and hs6p-p7-d-joule now cite reading4, Eq. (6.3.1), with the kilowatt-hour as our own step. No number, `shown` text or prose changed. calc:test, test:answers and content:check pass. Status stays reviewed.
