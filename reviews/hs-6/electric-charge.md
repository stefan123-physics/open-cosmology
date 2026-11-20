---
page: content/year-0/hs-6/electric-charge.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electrostatics/16-electrostatics-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electrostatics/16-electrostatics-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electrostatics/16-electrostatics-04 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electrostatics (chapter landing page, not read separately; the three sections above are its content)
verdict: pass-with-notes
---

# Review: Electric charge (lesson 6.1)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Earthing", lightning rod paragraph | 16.3 "Arrangement of charge": charge leaks off a sharp point, so lightning rods remove collected charge and reduce the risk of a strike | "lets that charge leak away; this makes a lightning strike less likely" | The source's claim is repeated, but it leaves out the rod's main job and the "prevents strikes" effect is disputed. Add that if lightning does strike, the rod and its wire carry the current safely to the ground instead of through the building. Keep the leaking-charge idea, which the source supports. |
| 2 | warning | "Charging by induction", electroscope sentence | 16.4: a charged rod near the plate separates charge by induction, the leaves get the same kind of charge and repel | "a charged object brought near the top pushes like charge into both leaves" | This is right for a negative rod, but for a positive rod nothing positive is pushed: electrons are pulled up out of the leaves. That contradicts the page's own rule that "only electrons are moved around". Rephrase, for example: "a charged object brought near the top moves electrons towards or away from the leaves, so both leaves get the same kind of charge, and they repel and spread apart." |
| 3 | info | "Charging by rubbing", triboelectric series | Table 16.1: hard rubber is in the lower middle (14th of 21, after amber, before nickel/copper, gold/platinum, polyester ... Teflon) | "rubber and plastics such as polyester and Teflon sit near the taking end" | Close enough at this level. To match the table, say "towards the taking end" or name only polyester and Teflon. |
| 4 | info | Formula "Charge is quantized" | Q = n q_e | Q = n e | Notation only. The site's e is the usual school and MIT symbol, so no note is needed on the page. |

## Formulas and citations
- `e = 1.6 × 10⁻¹⁹ C`, cite reading3, "Sec. 16.4, Unit of charge": correct. Siyavula gives q_e = 1.6 × 10⁻¹⁹ C to two figures. This matches the Block 6 convention (e = 1.6 × 10⁻¹⁹ C). No other value of e appears anywhere on the page or in its calcs. The page does not use k.
- `Q = n e`, cite reading3, "Sec. 16.4, Unit of charge": correct. The source writes Q = n q_e in that subsection.
- `Q = (Q₁ + Q₂)/2`, cite reading2, "Sec. 16.3, Arrangement of charge": correct. The equation is under the "Arrangement of charge" subheading (the second subsection, after "Conductors and insulators"), introduced as the final charge of two identical conducting spheres on insulating stands brought into contact. The page's condition "identical spheres", and its notes that other conductors share unequally and that insulators do not share, agree with the source and with 16.4 Example 5.
- Readings' `location` descriptions match what each section contains. 16.2 has charge types, neutral and charged objects, tribo-electric charging and the force between charges. 16.3 has conservation, conductors and insulators, and the arrangement of charge. 16.4 has the unit of charge, the electroscope, grounding and polarisation.
- Claims checked against the sources: amber, straw and the Greek origin of "electron" (16.2); glass rubbed with silk is positive and plastic rubbed with fur is negative (16.4); like charges repel and unlike attract, more strongly the closer they are (16.2); charge spreads over the outer surface of a conductor and crowds at points (16.3); conductors include metals and the human body, insulators plastic and glass (16.3); Millikan and Fletcher in 1909 with oil drops between charged plates (16.4); polarised objects stay neutral (16.4); a balloon bends a stream of water (16.4). Tap water, the ground, rubber, dry wood and dry air as conductors or insulators, and the hand-held metal rod argument, are standard and correct.
- The cosmology callout is correct: the electric force between two electrons is about 4 × 10⁴² times their gravitational attraction, and bulk matter is almost exactly neutral. Lesson 6.13 is the block's "Towards the universe" lesson in §4.

## Arithmetic and answer checks
All recomputed independently with e = 1.6 × 10⁻¹⁹ C:
- 1 C / e = 6.25 × 10¹⁸, which is "more than six billion billion". Correct.
- Comb: 4.0 × 10⁻⁹ / 1.6 × 10⁻¹⁹ = 2.5 × 10¹⁰, twenty-five billion. Correct.
- Spheres: +7.0 + (−3.0) = +4.0 nC, so +2.0 nC each. A changes by 5.0 nC, and so does B (−3.0 to +2.0). 5.0 × 10⁻⁹ / 1.6 × 10⁻¹⁹ = 3.125 × 10¹⁰, which is 3.1 × 10¹⁰ to two figures. Correct, and the direction (electrons from B to A) is right.
- Quiz 0 (balloon on wool): answer 1, "electrons moved from the wool to the balloon". Correct; wool is high in Table 16.1. The other choices are wrong: positive charge does not move in solids, charge is not created, and electrons moving the other way would make the balloon positive.
- Quiz 1: 6.4 × 10⁻¹⁸ / 1.6 × 10⁻¹⁹ = 40, and a positive charge means electrons were lost. Answer 1 is correct; the distractors are wrong.
- Quiz 2: (+6 − 10)/2 = −2 nC. Answer 2 is correct. "−4 nC each" (the total, not halved) and "−8 nC" are wrong.
- Quiz 3: 3.2 × 10⁻¹⁹ = 2e, 8.0 × 10⁻¹⁹ = 5e, 1.6 × 10⁻¹⁸ = 10e, and 4.0 × 10⁻¹⁹ = 2.5e. Answer 1 is correct.
- Quiz 4 (polarization): answer 2 is correct. The wall is an insulator, so the "conductor, electrons flow away" choice is wrong, and the wall gets no net charge.
- Flashcards: all true.
- Plot: Q/(10⁻¹⁹ C) = 1.6·floor(n) on 0 ≤ n ≤ 6 reaches 9.6, inside the range of 0 to 10. The caption is correct.
- Calcs file: every number on the page has an entry, and all expected values agree with my results. `origin: mit` on the two `kind: fact` entries is the convention Block 5 already uses for a source value, although the source here is Siyavula (see Notes).

## Only earlier terms
- Atom, electron and "positive part": introduced on the page itself in plain words, pointing ahead to 7.1 for the discovery. Fine for a beginner. Atoms and particles should also appear in Block 4 (4.4 kinetic theory, planned on the other PC).
- Force, and force pairs (lesson 2.4 `newtons-third-law`), conservation law (3.4 `conservation-of-energy`), powers of ten and the prefixes μ and n (0.1 `powers-of-ten`, 0.2 `units-and-si`): all are prerequisites. They are planned and not yet written in this repository (Blocks 0–4 are PC 1's). Their §4 titles cover the ideas, so they count as introduced. Check that 0.2 really covers the prefixes micro and nano when it is written.
- Conductor, insulator, neutral, coulomb, polarization, induction and earthing are all defined before use.

## Coverage
- §4 row for 6.1: "Electric charge", P 18.1; CP 18.1, 18.2 (old OpenStax sources, ignored). Target `8-02/fields-gravitational-and-electric`. The §3.5 row is "Charging by rubbing; like and unlike charges" with PhET `balloons-and-static-electricity`. All of it is covered.
- The page also covers everything in Siyavula 16.2–16.4: two kinds of charge, tribo-electric charging and the series, the force between charges, conservation, conductors and insulators, the arrangement of charge, sharing between identical spheres, quantisation, the electroscope, earthing, induction and polarisation. This is at, or slightly above, VWO level. Nothing important is missing.
- PhET instructions ("Show all charges", two balloons) match the sim's controls.

## Where this leads
- `8.02` lecture 1 is `content/year-1/8.02/fields-gravitational-and-electric.mdx` (lecture: 1), the target named in §4. The topic (charge as the source of a field, analogous to gravity) matches. `towards: false` is correct, because 6.1 is not the block's last lesson.

## Licensing and AI terms
- Sources are Siyavula online pages only (CC BY 3.0), cited by URL. There are no Siyavula logos or branding: the source title "Siyavula, Everything Science: ..." is a citation, not branding.
- No sentence is copied. I compared the definitions (conservation, electrostatic force, neutral) and the amber anecdote with the source's wording; all are rewritten.
- The worked examples and quiz are the page's own. The comb (−4.0 nC), the spheres (+7.0 and −3.0 nC), the ball (+6.4 × 10⁻¹⁸ C) and the quiz spheres (+6 and −10 nC) differ from Siyavula's Example 3 (−1.92 × 10⁻¹⁷ C, 120 electrons), Example 4 (−5 and −3 nC) and Examples 5–7. Siyavula's Example 6 is internally inconsistent (−96 × 10⁻¹⁸ vs −9.6 × 10⁻¹⁸ C), and nothing on the page depends on it.
- There are no figures. The only graph is a generated `<Plot>`.
- No forbidden source is cited or used (no OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman or Tong). The page has no NASA or ESO content.
- No em dashes.

## Notes
- Calcs `quiz-spheres-share-size` computes −(Q₁ + Q₂)/2 = +2 nC "to match the answer choice −2 nC". It duplicates `quiz-spheres-share` with a flipped sign, which reads oddly. If `calc:test` can match the negative value, put `quiz: 2` on `quiz-spheres-share` and drop the extra entry (info).
- The two `kind: fact` entries say `origin: mit`, but the value comes from Siyavula 16.4. This follows the Block 5 convention, so it is probably the field's meaning of "taken from the cited source"; leave it unless the coordinator wants a different label (info).
- The staircase plot may draw the jumps at whole n as vertical segments, which could suggest values between the steps. The caption says that these never occur, so this is acceptable (info, not checked in a browser).
- "every charge you can find is a whole number of elementary charges": true for free particles. Quarks (±⅓e, ±⅔e) are never found alone, so no change is needed at this level (info).
- Symbols: data/symbols.json has page meanings for e, n, Q, Q₁ and Q₂ on `electric-charge`, all fitting.

## Resolution (2026-11-20, by the page author)
1. Fixed. The lightning rod paragraph now says the rod lets some charge leak away, which "may make a strike a little less likely", and that its main job is a safe path: if lightning strikes, the rod and its thick wire carry the current into the ground instead of through the building.
2. Fixed. The electroscope sentence now says the charged object moves electrons in the metal: a negative object pushes electrons down into the leaves, a positive one pulls electrons up out of them; either way both leaves get the same kind of charge as the object and repel. This is right for both signs and keeps "only electrons move".
3. Fixed. Rubber now "lies towards the taking end", with polyester and Teflon "right at it", matching Table 16.1.
4. Left as is: notation only; e is the site's usual symbol, as the review says.
5. Tried and reverted. With `quiz: 2` on `quiz-spheres-share` (expected -2 nC), calc:test found no choice matching -2 (it does not read the minus sign in the choice "−2 nC each"), so the extra entry `quiz-spheres-share-size` stays.
6. Left as is: `origin: mit` on the fact entries follows the Block 5 convention; a change of label is for the coordinator.
7. Left as is: the caption already says values between steps never occur.
Notes on quarks and symbols: no change needed, as the review says.

Checks: `npm run calc:test -- -k electric-charge`: 18 passed. `npm run content:check`: 0 error(s); the page's only warnings are the five planned-but-unwritten High School prerequisites (shown as "coming").
