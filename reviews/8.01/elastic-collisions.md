---
page: content/year-1/8.01/elastic-collisions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-9-collision-theory/27-1-worked-example-elastic-1d-collision/ (read; segment page with Creative Commons licence footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter15/ (read; Chapter 15 PDF extracted with pdftotext -layout; Sections 15.2.1, 15.4.1, 15.5 (Example 15.1) and 15.6.1 (Examples 15.5, 15.6) compared in full; printed footers "15-k" used for page numbers)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/07fafafc5ffff77918d10e35e3dc1733_6-7BOpZ2k04.pdf (read; segment 27.1 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/536e52af853fe8978d8448bb4c88f3ee_B6a9FaYI730.pdf (read; segment 27.2 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/3977f0de920b2ee44fd0a38549f12e05_ayIgWaBE0aw.pdf (read; segment 27.3 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/c4734b8b98ecde9d1fab678ebffda4b5_yA203Lrd39E.pdf (read; segment 27.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/8e27d4cdb174a33b2fdc51e61c9847f2_1s6_4qX-u2o.pdf (read; segment 27.5 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2cb395af7226688f683e10ab08419ad1_UE-O9TiKOw0.pdf (read; segment 27.6 transcript, 4 pages)
  - content/year-4/8.286/temperature-and-decoupling.mdx and content/year-4/8.286/neutrinos-and-particle-counting.mdx (read; the two Lecture 17 pages the leadsTo resolves to)
  - content/year-1/8.01/_course.json and lib/content.ts (read; leadsTo targets and how they resolve)
verdict: pass-with-notes
---

# Review: Elastic collisions

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Two-dimensional section, "Billiard players know it: after a glancing hit on a still ball, the two balls separate at a right angle." | Notes Examples 15.5/15.6 prove the 90° result for two equal point masses with no other effects. Nothing about billiards. | Stated as exact for billiards | Real billiard balls roll and spin; the 90° rule holds only approximately, for a sliding ("stun") cue ball; a rolling cue ball leaves at a clearly smaller angle. Add "roughly, when the cue ball slides without spin" or drop the sentence. |
| 2 | warning | leadsTo 8.286 Lecture 17, why: "Before decoupling, photons kept bouncing off free electrons…" | Lecture 17 has two pages: neutrinos-and-particle-counting (order 1) and temperature-and-decoupling (order 2). `cosmologyDestinations()` in lib/content.ts lists every written page of the lecture with the same `why`. | One entry intended for decoupling | The "Where this leads" box will also show the neutrinos page with a reason about photons and electrons, which does not fit it. Not fixable in the page alone; accept it, or (site change) let leadsTo name a slug. Uncertain whether the owner minds; flagging so it is a decision, not an accident. |
| 3 | warning | calcs/8.01/elastic-collisions.yaml, `jupiter-speed` (kind: fact) | 27.5 p. 1 names Jupiter and Saturn but gives no orbital speed. | Fact cited to `reading6, p. 1` | The value (about 13.1 km/s) is right, but the source is not the transcript. Mark it as the page's own figure without a reading citation, or cite a reference (e.g. NASA's Jupiter fact sheet) in `references`. |
| 4 | info | "Three cases are worth knowing (notes, pp. 15-10)" | Eqs. (15.4.18)–(15.4.21) all lie on printed p. 15-10. | "pp." for one page | Write "p. 15-10". |
| 5 | info | Relative velocity, "(notes, Section 15.2.1, p. 15-3)" | Eqs. (15.2.5)–(15.2.6) are on p. 15-3; the end of the sentence and the boxed statement ("independent of the choice of relatively inertial reference frames") are at the top of p. 15-4. | p. 15-3 | Optionally "pp. 15-3–15-4". |
| 6 | info | Formula "Momentum in two dimensions", cited with notes Eqs. (15.6.5)–(15.6.6) | The notes' Figure 15.9 has particle 1 deflected upward, so Eq. (15.6.6) reads 0 = m₁v₁,f sin θ₁,f − m₂v₂,f sin θ₂,f. The 27.6 transcript (pp. 2–3) has particle 2 up and particle 1 down, as on the page. | Transcript orientation | Correct and equivalent (the whole equation times −1). Optionally say the notes draw the figure upside down, so a reader comparing them is not confused. |
| 7 | info | Slingshot, "gravity does the job of the collision: long before and long after, the planet's pull is negligible, and the kinetic energy of the pair is the same" | 27.5 just applies the energy-momentum principle without justifying why a flyby counts as elastic. | Adds the justification | The physics is right (in the planet's frame the probe climbs back out of the same potential). It is the page's own addition; fine as it stands. |
| 8 | info | Energy-momentum principle section | 27.3 p. 3 calls the principle "a very powerful tool for simply analyzing one-dimensional elastic and inelastic collisions"; it holds only for elastic ones. | Correctly says elastic only, no note | Not repeated, so no change needed. A bracketed note is optional under writing rule 4. |

## Arithmetic and answer checks
- Quadratic (27.1): v₁ᵢ² = v₁f² + 2(½v₁ᵢ − ½v₁f)² gives 0 = (3/2)v₁f² − v₁ᵢv₁f − ½v₁ᵢ²; divided by 3/2 this is the page's v₁f² − (2/3)v₁ᵢv₁f − (1/3)v₁ᵢ² = 0 ✓ (p. 3). Discriminant 4/9 + 4/3 = 16/9, roots (2/3 ± 4/3)/2 v₁ᵢ = v₁ᵢ and −v₁ᵢ/3 ✓ (p. 4). v₂f = ½ + 1/6 = 2/3 v₁ᵢ ✓ (p. 5).
- Slip note "divide through by 2/3; it means dividing by 3/2, p. 3": confirmed on 27.1 p. 3 ✓.
- Slip note on 27.4 p. 1 (minus sign dropped when recalling the principle; m₁ dropped in the momentum equation): both confirmed ✓ ("V relative initial was equal to V relative final"; "V1x initial plus m2 V2x initial").
- Linear system (27.4): adding gives 2v₁ᵢ = 3v₂f, v₂f = 2v₁ᵢ/3, v₁f = −v₁ᵢ/3; relative velocity after −v₁ᵢ ✓ (p. 2).
- Energy-momentum derivation (27.3): rearranged momentum and factored energy on p. 2 ✓; linear equation v₁ᵢ + v₁f = v₂f + v₂ᵢ at the foot of p. 2 ✓; principle on p. 3 ✓. Matches notes Eqs. (15.4.3)–(15.4.9) on pp. 15-8–15-9 ✓ (15.4.3 momentum, 15.4.4 energy, 15.4.6 linear, 15.4.8 definition on p. 15-8; 15.4.9 on p. 15-9).
- General formulas: (15.4.14) on p. 15-9 and (15.4.17) on p. 15-10 ✓; coefficients match ✓. Limits (15.4.18)–(15.4.21) described correctly ✓. Example 15.1 starts on p. 15-12, Eq. (15.5.1) on p. 15-13 ✓.
- Plot: (1 − q)/(1 + q) and 2/(1 + q) with q = m₂/m₁ are the target-at-rest cases of the general formulas ✓; at q = 1 object 1 stops ✓; range [−1.2, 2.2] contains both curves on [0, 5] ✓; caption correct ✓.
- Worked example (a): v₁f = (0.5 − 1.5)/2 × 4 = −2.0 m/s, v₂f = 1.0/2 × 4 = 2.0 m/s ✓; substitution 2.0 = 2.0v₁f + 6.0 ✓; K 4.0 J before, 1.0 + 3.0 J after ✓.
- Worked example (b): p = 6.0 − 3.0 = 3.0 kg m/s ✓; 3.0 = 3.0v₁f + 6.0 gives −1.0 m/s, v₂f = 5.0 m/s ✓ (also from the general formulas: 1 − 2 = −1, 4 + 1 = 5) ✓; K 9 + 4.5 = 13.5 J before, 1 + 12.5 = 13.5 J after ✓.
- Motorway 60 − 50 = 10 mph (27.2 p. 1) ✓; opposite motion gives 2v₁ₓ (p. 2) ✓.
- Slingshot: v_rel,i = vᵢ + V, v_rel,f = −v_f + V, principle gives v_f = vᵢ + 2V ✓ (27.5 p. 2); MIT's 3V → 5V on pp. 2–3 ✓. Jupiter's mean orbital speed is about 13.07 km/s, so "about 13 km/s" ✓; 10 + 26 = 36 km/s ✓. "Real flybys are not head-on … gain less" ✓ (2V is the maximum, for a full reversal). "The planet loses the same energy the probe gains" ✓ (Sun frame).
- New Horizons: launched January 2006, Jupiter flyby 28 February 2007, on to Pluto ✓. The transcript's own example is Saturn and it credits the technique to New Horizons without naming the planet; the page's "Jupiter in 2007" is the correct planet.
- 2D (27.6): orientation (1 below, 2 above) p. 2 ✓; momentum equations pp. 2–3 ✓; energy p. 3 ✓; four unknowns and three equations p. 3 ✓; "see which of the four is given" pp. 3–4 ✓. Notes Eqs. (15.6.5)–(15.6.6) and energy Eq. (15.6.8) on p. 15-18 ✓ (pdftotext misplaces the labels; the notes' own text "Substituting Eq. (15.6.11) into Eq. (15.6.8)" confirms 15.6.8 is the energy equation). Equal-mass results Eqs. (15.6.20)–(15.6.29) on pp. 15-20–15-22 ✓.
- Glancing-puck example: v₁f = 5.0 cos 60° = 2.5 m/s ✓; θ₂ = 30° ✓; v₂f = 2.5 × 0.866/0.5 = 4.33 m/s ✓ (= 5.0 sin 60°); x-check 1.25 + 3.75 = 5.0 ✓; energy 6.25 + 18.75 = 25 ✓.
- Quiz 1: equal masses swap, index 1 ✓. Quiz 2: −8 m/s, index 2 ✓. Quiz 3: 5 + 2 × 10 = 25 km/s, index 3 ✓; relative speed 15 km/s ✓. Quiz 4: 4 unknowns, 3 equations, index 0 ✓. All explanations correct.
- Flashcards: all four correct.
- calcs/8.01/elastic-collisions.yaml: every entry agrees with my recomputation; `npm run calc:test` passed (1594 tests) and the pytest cache lists this file's ids, so it was collected ✓. Only the source of `jupiter-speed` is off (row 3).

## Coverage and order
- Sections follow the segment order exactly: 27.1 (quadratic) → 27.2 (relative velocity) → 27.3 (energy-momentum principle) → 27.4 (linear solution) → 27.5 (slingshot) → 27.6 (2D). No segment content is missing.
- Added from the notes, cited: frame independence of relative velocity (15.2.1), general final velocities and the three limits (15.4.1), equal-mass 2D results (Examples 15.5, 15.6). Added by the page: plot, two worked examples, the Jupiter numbers, the cosmology callout.
- Not covered (not in segments 27.1–27.6): Section 15.4.2 (1D collision in the CM frame), the general unequal-mass 2D solution (15.6.14)–(15.6.19), Example 15.7, Section 15.7. Reasonable for this lesson; presumably left for the deep-dive material.

## Licensing
- Segment page carries the Creative Commons licence; the page uses CC BY-NC-SA 4.0 ✓.
- No "All rights reserved" or "Courtesy of" notice in the transcripts or the chapter text (grep found none). No figure reused; the plot is generated from formulas.
- No copied paragraphs found. Short standard phrases only ("laboratory frame", "energy-momentum principle"). The motorway 60/50 mph example and the 3V → 5V slingshot are MIT's, presented as MIT's and paraphrased ✓.
- Worked examples (a) and (b) are original. The glancing-puck example follows the method of notes Example 15.5 (3.0 m/s at 30°, giving 60° and 1.5 m/s) with new numbers and the angles swapped (5.0 m/s at 60°); it is clearly rewritten, acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: free electrons for the first few hundred thousand years (decoupling about 380,000 years) ✓; Thomson scattering is the low-energy (hν ≪ mₑc²) limit of Compton scattering, elastic in the electron's rest frame, photon changes direction and keeps almost all its energy ✓; short mean free path made the universe opaque ✓; capture of electrons into neutral atoms freed the photons, the CMB ✓. The "electron as heavy target" analogy is fair. Consistent with temperature-and-decoupling.mdx (recombination ~4,000 K, decoupling ~3,000 K, ~380,000 years).
- leadsTo 8.01 Lecture 28 exists in _course.json as "Motion of a Rigid Body" ✓ (no page yet, so it shows as planned). leadsTo 8.286 Lecture 17: correct lecture for decoupling; see row 2 about the second Lecture 17 page.
- Prerequisites types-of-collision and relative-velocity-and-recoil exist ✓; opening link /courses/8-01/types-of-collision uses the same pattern as other 8.01 pages ✓. No em dashes on the page ✓.
- Transcript 27.1 p. 1 "the incoming momentum, 1/2 x initial" is a captioning garble; the page rightly ignores it. 27.2 p. 2 "moving together at the same speed" means towards each other; the page says "towards each other" ✓.
- Symbols were not part of this review.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the billiards sentence now says "close to a right angle" and why it is only rough (real balls roll and spin).
- **Warning 2:** the 8.286 Lecture 17 "why" is now general enough to fit both pages of that lecture: particles colliding in the hot early universe, photons bouncing off electrons until it became transparent.
- **Warning 3:** Jupiter's orbital speed now cites NASA's Jupiter fact sheet (new reference `nasa-jupiter`, 13.06 km/s), on the page and in `jupiter-speed`.
- Info: "p. 15-10" corrected; Section 15.2.1 cited as pp. 15-3–15-4. The other info items are left as they are.
