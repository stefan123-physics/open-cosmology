---
page: content/year-0/hs-6/magnetic-fields-and-force.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/magnetism/15-magnetism-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/magnetism/15-magnetism-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/magnetism/15-magnetism-04 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/electrodynamics/11-electrodynamics-02 (read, "Electric motors" part)
  - MIT 8.02T Course Notes Chapter 8, Introduction to Magnetic Fields (read from a local pdftotext copy of the OCW PDF; Sec. 8.1, 8.2, 8.3, 8.5, Problems 8.11.1 and 8.11.8)
  - public/phet/magnets-and-electromagnets_1.0.9_en.html (UI strings searched)
verdict: pass-with-notes
---

# Review: Magnetic fields and magnetic force

No errors found. Physics, citations, every number and every quiz answer check out; `calc:test -k magnetic-fields-and-force` passes (34 entries) and `content:check` shows no error for this page (only the expected "planned prerequisite" warnings for Blocks 0 to 3).

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Quiz 3 | (no lesson of the High School introduces "ion"; a search of content/year-0 finds the word only here) | "A positive ion moves east…" | Use a term already introduced: "A proton moves east…" (or "a positively charged particle"). Explanation and calcs are unaffected. |
| 2 | warning | "Try it" | The sim (Magnets and Electromagnets 1.0.9) has a "Field Meter" checkbox, "Flip Polarity", "Compass", "Earth"/"Flip Earth" and "See Inside"; its "Magnetic Field" view is a grid of small compass needles, not field lines | "Check that the field lines run from the north pole to the south pole" | Field meter and flip-polarity claims are confirmed. Reword the field-line part, e.g. "Turn on the magnetic field: the grid of small needles shows the field pointing from the north pole round to the south pole." Optionally: "Turn on the Earth to see why the magnetic pole in the Arctic is a south pole." |
| 3 | warning | "The motor principle", 2nd paragraph | Siyavula 11.2: commutator reverses the current every half turn so the coil keeps turning | "the loop would only turn until it faced across the field, rock back and forth, and stop" | "faced across the field" is ambiguous. Say where it stops: "until its flat face is at right angles to the field". |
| 4 | info | Units paragraph | MIT Sec. 8.2: the gauss is "another commonly used non-SI unit" | "An older unit is the gauss" | Optional: "A unit still often used is the gauss (not SI)". "Older" is not wrong historically. |
| 5 | info | "Magnets and their poles", nail paragraph | Siyavula 15.2 covers domains and magnetising by rubbing but does not explain why a magnet attracts an unmagnetised nail with either pole | Explains it by induced opposite pole | Correct standard physics; no change needed. |
| 6 | info | Cutting a magnet | Siyavula 15.3: "tiny pieces"; MIT 8.1: two new magnets | "every piece, down to a single atom, is still a magnet with two poles" | True for magnetic atoms such as iron; fine at this level. Could soften to "down to the tiniest piece". |
| 7 | info | "Circles in a uniform field" | MIT 8.5 gives the helix; cyclotrons are not in the cited sources | "Machines that speed up particles in a circle (cyclotrons) are built on this fact" | Standard and correct (non-relativistic); no change needed. |
| 8 | info | Two like poles | Siyavula 15.3: lines diverge | "a spot in the middle where there is almost no field" | Correct (the field is zero at the midpoint for equal magnets); fine. |

## Formulas and citations
- `F = qvB`, cite reading3 "Sec. 11.2, Electric motors": Siyavula Gr 12 11.2 gives F = qvB (no sin θ, no angle). Correct.
- `F = qvB sin θ`, cite reading4 Eq. (8.2.2): MIT has F_B = |q| v B sin θ. The page says q, v, B are sizes, so |q| is covered. Correct.
- The tesla, reading4 "Sec. 8.2, after Eq. (8.2.2)": MIT gives 1 T = 1 N/(C·m/s) = 1 N/(A·m) right after (8.2.2). Correct.
- `qvB = mv²/r` Eq. (8.5.1), `r = mv/(qB)` Eq. (8.5.2), `T = 2πr/v = 2πm/(qB)` Eq. (8.5.3): all match MIT Sec. 8.5. Correct.
- `F = BIL` Eq. (8.3.1), "magnitude": MIT (8.3.1) is F = I(ℓ × B) with I = nqv_d A; the page's derivation (N = nAL electrons, each e v_d B) follows the same route. Correct.
- The "four things experiments show" match MIT Sec. 8.2 observations (1) to (4).
- Right-hand rule (first finger current/velocity, second finger field, thumb force) matches Siyavula 11.2 word for word in roles; I checked it gives F along v × B (index × middle = thumb for a right hand).
- Earth's field about 5 × 10⁻⁵ T: MIT Problem 8.11.1 (B ~ 5 × 10⁻⁵ T) and 8.11.8 (0.5 × 10⁻⁴ T). "The value the MIT notes use" is accurate. 1 T = 10⁴ G: MIT Sec. 8.2.
- Siyavula 15.4 supports: compass, field made by liquid metal in the outer core, magnetic poles near but not at geographic poles and shifting, magnetic north pole is a south pole of the bar-magnet model, magnetosphere, solar wind mainly protons and electrons, aurorae red or green, particles spiralling along field lines to the poles. Siyavula 15.2 supports moving charges making fields, ferromagnetism, domains, magnetising by rubbing. Siyavula 11.2 supports the torque on the coil and the split-ring commutator (reverses the current every half turn).
- MIT Chapter 8 text contains no "All rights reserved" or "courtesy" notice.

## Arithmetic and answer checks
All recomputed by hand:
- Quiz 2 (charge): 3.2e-19 × 5.0e5 × 0.20 = 3.2e-14 N. Correct; distractors qv/B = 8.0e-13, qB = 6.4e-20, and "0" are all wrong.
- Quiz 3 (direction): v east (x̂), B up (ẑ): x̂ × ẑ = −ŷ, south. Correct.
- Quiz 4 (speed doubled): r doubles, T = 2πm/(qB) unchanged. Correct; the other choices are wrong.
- Quiz 5 (wire): 0.050 × 6.0 × 0.40 = 0.12 N; × sin 30° = 0.060 N. Correct; 0.12 (no sin), 0.10 (cos, 0.104) and 0 are wrong.
- Quiz 1 (three pieces, three north poles). Correct.
- Proton example: 1.6e-19 × 2.0e5 × 0.30 = 9.6e-15 N; at 30°, 4.8e-15 N; along, 0. Correct.
- Electron example: r = 9.11e-31 × 4.0e6 / (1.6e-19 × 1.5e-3) = 3.644e-24 / 2.4e-22 = 0.0152 m → 0.015 m. T = 2π × 3.796e-9 = 2.39e-8 s → 2.4e-8 s; 1/T = 4.19e7, "about 42 million". At 8.0e6 m/s, r = 0.0304 m → 0.030 m. Correct. (v/c ≈ 0.013, so non-relativistic is fine.)
- Balance example: B = 4.0e-3 / (2.0 × 0.050) = 0.040 T; F = 0.040 × 3.5 × 0.050 = 7.0e-3 N. Correct.
- Plot: peak 1000 × 0.040 × 2.0 × 0.050 = 4.0 mN (caption correct); slider maximum 0.080 × 3.0 × 0.050 = 12 mN, inside the 13 mN range.
- Earth's field 5e-5 T × 10⁴ G/T = 0.5 G, "half a gauss". Correct.
- Block 6 constants used: e = 1.6 × 10⁻¹⁹ C, m_e = 9.11 × 10⁻³¹ kg. Consistent.
- Every number on the page is in the calcs file; `npm run calc:test -- -k magnetic-fields-and-force`: 34 passed.

## Only earlier terms
- "ion" (quiz 3): not introduced in any High School lesson (finding 1).
- "kinetic energy" ("speed and kinetic energy stay the same"): introduced in lesson 3.2 (`kinetic-energy`, planned on the other PC), earlier by block order, but not in this page's `prerequisites` (it lists `work`). Info: add `kinetic-energy` to `prerequisites` (6.4 already lists it).
- I = n e v_d A: introduced in 6.6 (`current-and-ohms-law`, Eq. at line 121). Correct reference.
- Torque (2.10), circular motion (1.10), centripetal force (2.9), work (3.1), angles/sin (0.7): all planned lessons whose titles cover the idea; the lesson numbers quoted on the page match the `_course.json` syllabi.
- Proton, electron: used in 6.1 to 6.4. Fine.
- "Big Bang", "grand unified theories" appear only in the cosmology callout and are explained there in passing; acceptable for a forward-looking callout.

## Coverage
§4 row: P 20.1; CP 22.1–22.5, 22.7 (old OpenStax sources, not read; topics judged from the row's lesson title and the 6.9/6.10 split). Covered: magnets and poles, ferromagnetism and domains, field lines, the Earth's field, force on a moving charge (with angle and right-hand rule), the tesla, circular motion and period, force on a current-carrying wire with angle, plus the motor principle (from Siyavula 11.2). Electromagnets are deliberately left to 6.10, which is correct by the plan. Mass spectrometer, velocity selector and Hall effect are left out; that is fine at VWO beginner level. Level is right for a beginner: sizes only, no cross product, directions by a hand rule.

## Where this leads
- 8.02 Lecture 14 ("Magnetic Fields (Experiment 5); Charges Moving in B Fields"), page `content/year-1/8.02/magnetic-fields.mdx`: its summary covers F = qv × B, no work, circles of radius mv/qB, the Lorentz force. The `why` text is accurate. Matches §4 (`8-02/magnetic-fields`).
- 8.286 Lecture 22 ("The Higgs Field and the Cosmological Magnetic Monopole Problem"), pages `magnetic-monopoles.mdx` etc.: on the same topic as the page's monopole paragraph and callout; not in §4 but a sensible extra link (info only). The callout's claims (GUTs predict monopoles made in huge numbers after the Big Bang; the monopole problem helped lead to inflation, the last lecture of 8.286) are correct and agree with the site's 8.286 pages (Lecture 23 introduces inflation, diluting monopoles). The callout has no citation; standard and correct, so acceptable. Optional: add a `references` entry to MIT 8.286 Lecture 22 if the owner wants every cosmology claim cited.
- `towards: false`; correct (6.13 is the block's towards lesson).

## Licensing and AI terms
- No sentence copied: the field-line rules ("never cross", "from the north pole to the south pole", closer together where stronger) are short standard phrases; all prose is rewritten.
- No figures; the only graph is a generated `<Plot>`.
- Worked examples and quiz questions are original: Siyavula's sections have only two qualitative worked examples (like/unlike poles) and no numerical ones; MIT's solved and additional problems (rolling rod, TV tube, levitating wire, etc.) are different.
- No Siyavula logo or brand; Siyavula cited as source pages only (CC BY 3.0).
- MIT Chapter 8: no "All rights reserved" or "courtesy" items used.
- PhET sim from `public/phet/` (in the manifest), used through the standard component; no NASA or ESO material.
- No forbidden source cited or read (the §4 row's OpenStax references were not opened).

## Notes
- Writer's open point 1 (PhET): "Field Meter" and "Flip Polarity" exist in the sim (UI strings `fieldMeter`, `Flip Polarity`); "field lines" do not (finding 2). The sim also has two screens "Bar Magnet" and "Electromagnet", so the bracket about the electromagnet screen is accurate.
- Writer's open point 2 (monopole callout uncited): acceptable, see "Where this leads".
- Writer's open point 3 (second leadsTo to 8.286): acceptable, see "Where this leads".

## Resolution (2026-11-20, by the page author)

- 1 (warning, quiz 3 "ion"): fixed. The question now reads "A proton moves east ...". Answer, explanation and calcs unchanged.
- 2 (warning, Try it): fixed. The text no longer speaks of field lines in the sim: it says the sim shows the field as a grid of small compass needles that point away from the north pole and round to the south pole, like the field lines of the lesson; the field meter and Flip Polarity parts stay; added "Turn on the Earth to see why the magnetic pole in the Arctic is a south pole."
- 3 (warning, motor): fixed. Now "the loop would only turn until its flat face is at right angles to the field, rock back and forth, and stop".
- 4 (info, gauss): fixed. Now "A unit that is still often used, although it is not an SI unit, is the gauss", following MIT Sec. 8.2. The shown strings in the calcs file ("1 T = 10^4 gauss", "about half a gauss") are unchanged.
- 5 (info, nail and either pole): no change; the reviewer judged it correct standard physics.
- 6 (info, "down to a single atom"): left as is. It is true for the magnetic atoms (iron, nickel, cobalt) the paragraph is about, and the point of the sentence (no lone pole at any size) is the one 8.286 Lecture 22 builds on; the reviewer judged it fine at this level.
- 7 (info, cyclotrons): left as is. Standard, correct (non-relativistic) consequence of T being independent of v; the reviewer asked for no change.
- 8 (info, two like poles): no change; correct.
- "Only earlier terms", kinetic energy: fixed. `kinetic-energy` (lesson 3.2) added to `prerequisites`.
- Siyavula licences: all four Siyavula pages the lesson cites (Gr 10 15.2, 15.3, 15.4; Gr 12 11.2) are CCBY rows in docs/siyavula-licences.tsv.

Checks: `npm run calc:test -- -k magnetic-fields-and-force`: 34 passed. `npm run content:check`: 0 error(s); for this page only the expected "planned but not written yet" prerequisite warnings (Blocks 1 to 3, other PC).
