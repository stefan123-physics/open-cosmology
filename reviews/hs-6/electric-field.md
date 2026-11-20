---
page: content/year-0/hs-6/electric-field.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-02 (read)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read, PDF extracted outside the repo)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter1fields/ (read, PDF extracted outside the repo)
verdict: pass-with-notes
---

# Review: The electric field

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Worked example "Measuring a field, then using it" (problem and step 2); worked example "A proton between two plates" (problem); calcs `ex1-electron-force`, `proton-*` | Block 6 convention (coordinator): e = 1.6 × 10⁻¹⁹ C, as Siyavula 9.2 (Worked example 2) and lesson 6.1 use | "charge −1.60 × 10⁻¹⁹ C", "charge 1.60 × 10⁻¹⁹ C", "1.60 × 10⁻¹⁹ × 1.5 × 10⁵" | Write 1.6 × 10⁻¹⁹ C in all three places and in the calcs inputs. No result changes (2.4 × 10⁻¹⁴ N, 2.4 × 10¹² m/s², 4.4 × 10⁵ m/s, 1.8 × 10⁻⁷ s, 4.0 × 10⁻¹⁵ N all stay). |
| 2 | warning | Section "A uniform field between two plates", last paragraph | MIT Ch. 2 Sec. 2.6 and solved problem 2.13.3 treat deflection by an electric field; CRT television sets in fact steered their beams with magnetic deflection coils | "This is how old television tubes and oscilloscopes steered their beams of electrons." | Say "This is how the tubes of old oscilloscopes steered their beams of electrons" (or "old oscilloscopes and some early cathode-ray tubes"); drop television, or say TV tubes used magnetic fields (lesson 6.9). |
| 3 | warning | Section "Field lines", second bullet | MIT 2.5: lines "begin on positive charges (or at infinity) and then terminate on negative charges (or at infinity)" | "Field lines start on positive charges and end on negative charges." The next sentence then shows a lone positive charge whose lines end nowhere | Add "(or go off to infinity / come in from far away)". |
| 4 | info | Section "Comparing with the gravitational field", last sentence | — | "...accelerates about 1800 times faster, and the other way." | "and in the opposite direction" is clearer for a beginner. |
| 5 | info | Section "Field lines" | Siyavula 9.3 rule: lines are drawn perpendicular to a charge or charged surface | Not stated as a rule (only "at right angles to the plates" later) | Optional: add as a bullet. |

## Formulas and citations
- `E = F/q`, cite reading1 "Sec. 9.3, electric field strength": correct. Siyavula 9.3, subsection "Electric field strength", gives E = F/q in N·C⁻¹ and calls E a vector.
- `F = qE`, cite mit802ch1 "Sec. 1.6, after Eq. (1.6.2)": correct. The text after Eq. 1.6.2 says Q creates a field E "which exerts a force F_e = qE on q". (Siyavula 9.3 also gives the rearranged form.)
- `E = kQ/r²`, cite reading1: correct; Siyavula 9.3 derives it from Coulomb's law (Sec. 9.2) and notes that E does not depend on the test charge.
- `a = qE/m`, cite mit802 Eq. (2.6.2): correct (Sec. 2.6, charge between oppositely charged parallel plates, Newton's second law).
- `v = √(2qEd/m)`, cite mit802 Eq. (2.6.3): correct (MIT: released from rest at the positive plate, y = plate distance; the page uses d).
- `g = F/m`, cite mit802ch1 Eq. (1.5.2): correct (gravitational field as force per unit mass, written as a limit there).
- k = 9.0 × 10⁹ N m²/C²: matches Siyavula 9.2 ("9.0 × 10⁹ N·m²·C⁻²") and MIT Eq. 1.6.1–1.6.2 text, and the Block 6 convention. Plot uses 9.0 too. Note: lesson 6.2 (coulombs-law.mdx) currently uses 8.99 × 10⁹ and e = 1.602 × 10⁻¹⁹; that is a finding for 6.2, not this page, but until 6.2 is changed the two lessons disagree.
- Reference locations: `mit802` location "Sec. 2.4 … 2.5 … 2.6, Eqs. 2.6.1–2.6.3" and `mit802ch1` "Sec. 1.5 … 1.6, Eq. 1.6.2, unit N/C" all checked against the PDFs: correct.
- Claims not in Siyavula 9.3 (it has no parallel plates): the uniform field between plates is supported by MIT 2.6 (which defers the proof to Ch. 4); "lines bulge at the edges" is standard and correct. The 4πr² density argument is standard (MIT 2.5 bullet on lines per unit area; lesson 5.5 uses the same geometry) and correct.
- Superposition `E = E₁ + E₂`: supported by MIT Eq. (2.4.3) and Siyavula 9.3 ("the net resulting field is the sum of the fields"); field zero midway between equal like charges: Siyavula 9.3 says so.

## Arithmetic and answer checks
All recomputed independently (Python):
- Quiz 0: 5.0e-5 / 2.0e-9 = 2.5 × 10⁴ N/C, east. Correct; distractors wrong (west = sign error, 1.0 × 10⁻¹³ = F·q, 4.0 × 10⁴ = q/F scaled). OK.
- Quiz 1: 900 × (2/6)² = 100 N/C. Correct.
- Quiz 2: south. Correct.
- Quiz 3: m_p/m_e = 1.67e-27/9.11e-31 = 1833 (CODATA 1836): "about 1800" fine. Answer 1 correct; others wrong.
- Quiz 4: uniform field, same force. Correct.
- Example 1: 6.0e-4/4.0e-9 = 1.5 × 10⁵ N/C; 1.6e-19 × 1.5e5 = 2.4 × 10⁻¹⁴ N, west. Correct.
- Sphere: 9.0e9 × 2.0e-6 / 0.0225 = 8.0 × 10⁵ N/C; 1.5e-9 × 8.0e5 = 1.2 × 10⁻³ N, towards the sphere. Correct.
- Midpoint: 9.0e9 × 12e-9 / 0.09 = 1200 N/C; 9.0e9 × 2.0e-9 / 0.09 = 200 N/C; same direction (towards the −2 nC charge), total 1.4 × 10³ N/C. Correct, and the remark about points outside the pair is correct.
- Proton: a = 2.395 × 10¹² → 2.4 × 10¹² m/s²; a/g = 2.4 × 10¹¹ (> 10¹¹, true); v = √(2a × 0.040) = 4.38 × 10⁵ → 4.4 × 10⁵ m/s (440 km/s); t = v/a = 1.83 × 10⁻⁷ → 1.8 × 10⁻⁷ s; mg = 1.64 × 10⁻²⁶ → 1.6 × 10⁻²⁶ N; qE = 4.0 × 10⁻¹⁵ N; ratio 2.4 × 10¹¹. All correct.
- Plot: 9.0·Q/r² with Q in nC gives N/C: correct (identity in calcs). At Q = 4 nC, r = 0.1 m, E = 3600 N/C, within the 0–9000 range; at Q = 10, r < 0.1 is outside the domain, so the max shown is 9000 N/C at r = 0.1: fits exactly.
- Calcs file: every number on the page has an entry; `npm run calc:test -- -k electric-field` (pytest via .venv): 22 passed. Small points: `quiz-field-from-force` lacks `quiz: 0` (the inverse-square entry has `quiz: 1`); `k-coulomb` has `origin: mit` while its `source` is Siyavula reading2 (info).

## Only earlier terms
- Lessons named in the text match the High School syllabi: 0.8 vectors, 1.8 projectile motion, 2.11 Newton's law of gravitation, 5.5 sound and intensity (inverse square, 4πr², written), 6.2 Coulomb's law (written: point charge, k, electric vs gravity strength), 6.4 (written: E = V/d, uniform field). Block 1 constant acceleration (v² = 2ad, v = at) is a prerequisite.
- Blocks 0–4 are planned but not written (PC 1). Their lesson-list titles cover vectors, constant acceleration, projectile motion, Newton's second law, weight (mg) and the law of gravitation. **Uncertain:** the page says "lesson 2.11 already described gravity this way, even if it did not use the word" and uses g = GM/r² as if known. Whether 2.11 gives g = GM/r² cannot be checked yet; recheck when 2.11 is written (warning to keep in mind, not an error now).
- Electron and proton masses: introduced in 6.2 (hydrogen-atom example). e: 6.1.
- "tangent" (field-line bullet) is used without introduction in any written earlier lesson; it is in brackets and the sentence works without it, and 0.10 (rates of change) will likely introduce it. Info.
- "oscilloscope", "television tube": not explained (see finding 2).
- New terms defined in bold on first use: electric field, test charge, electric field strength, point charge, field lines, dipole, uniform, gravitational field. Good.

## Coverage
- §4 row 6.3 (old sources P 18.3; CP 18.4, 18.5, 18.7) and Siyavula 9.3: field concept, test charge, E = F/q, E = kQ/r², field lines and their rules, single charges, unlike pair, like pairs (both signs), unequal charges, superposition: all covered.
- Added beyond Siyavula, appropriate for VWO: uniform field between plates, motion of a charge in it, comparison with the gravitational field. Good VWO fit (VWO treats charged particles in a homogeneous field).
- Not covered: two-dimensional superposition (Siyavula Worked example 7, Pythagoras) – the page only adds collinear fields. Old CP 18.7 topic (conductors in electrostatic equilibrium: field zero inside a conductor, lines perpendicular to the surface, charge at points/lightning rods) is absent; Siyavula 9.3 also omits it. Both are info: optional at this level; a short 2D example could be added since vectors (0.8) is a prerequisite.
- PhET Charges and Fields (row sim `charges-and-fields`): used; the instructions match the sim's controls ("Electric Field" checkbox, sensors).

## Where this leads
- 8.02 lecture 1 = `content/year-1/8.02/fields-gravitational-and-electric.mdx` (MIT 8.02T Session 1). The "why" (E = k_e q r̂/r², q₀E, g = −GM r̂/r² side by side) matches that page. Correct.
- 8.02 lecture 5 = `gauss-law.mdx` (Session 5): field lines ∝ charge → flux, sphere and plane fields. Correct.
- Both match the §4 row. `towards: false` correct (not the block's last lesson).

## Licensing and AI terms
- No sentence copied. Closest wording: "Field lines never cross: at a crossing the field would have two directions at once" vs MIT 2.5 "No two field lines can cross each other; otherwise the field would be pointing in two different directions at the same point": a paraphrase of a standard idea, fine. "Field lines are a drawing, not something real" vs Siyavula's point that lines are a representation and not real: standard idea, own words.
- No figures copied: only a generated Plot and the PhET sim.
- Worked examples are the page's own. The midpoint example is the same type as Siyavula Worked example 6 (two opposite charges, point between) but uses different charges, distance and point (the midpoint); not copied. Proton example follows MIT 2.6's setup (released from rest at the positive plate) with own numbers. Quiz questions are own.
- No Siyavula logo or "Everything Science" branding (the name appears only in the citation title, as a citation).
- MIT 8.02T Ch. 1 and Ch. 2 PDFs: no "All rights reserved" or "Courtesy" notice (grep on the extracted text found none).
- No forbidden source cited or read. PhET is CC BY-NC 4.0 (attribution printed by the component).

## Notes
- Siyavula 9.3 numbers were not used as authority (its Worked example 6 total and Exercise 9.2 Q1 contain arithmetic errors, confirmed on reading); the page does not reuse them.
- Physics checked and correct throughout: direction conventions, dipole field weak far away, zero field between equal like charges, superposition, uniform field, gravity comparison table.

## Resolution (2026-11-20, by the page author)
1. Fixed. The electron and proton charge is now 1.6 × 10⁻¹⁹ C (Block 6 convention, as Siyavula 9.2 and lesson 6.1) in the first worked example (problem and step 2) and in the proton example (problem and acceleration step). Calcs inputs of ex1-electron-force and all proton-* entries changed to 1.6e-19 C, and the shown strings updated. No result changes.
2. Fixed. The sentence now says this is how the tubes of old oscilloscopes steered their electron beams, and adds in brackets that old television tubes did the same job with magnetic fields, which lesson 6.9 describes.
3. Fixed. The second field-line bullet now says lines start on positive and end on negative charges, or go off to (or come in from) very far away when there is no charge of the other sign to end on.
4. Fixed. "and the other way" is now "and in the opposite direction".
5. Fixed. New bullet: field lines leave or arrive at a charge, or a charged surface such as a metal plate, at right angles to it. Checked on Siyavula 9.3 (rule "drawn perpendicular to a charge or charged surface"); reading1's location now names this rule.
6. Partly done. `quiz: 0` cannot be added: choices 0 and 1 of quiz 0 have the same number (2.5 × 10⁴ N/C) and differ only in direction, so the calc test's quiz check finds two matching choices and fails; a comment in the calcs entry says so. `k-coulomb` keeps `origin: mit`, as Block 5 does for every value taken from Siyavula (the test allows only mit, page-own, later-data and slip); a header comment in the calcs file now explains this, and records e = 1.6e-19 C.
7. Left as is. "tangent" is in brackets and the sentence works without it; lesson 0.10 (rates of change) is planned to introduce it.
8. Left the reference to lesson 2.11 (PC 1's block, planned, not written yet), but the page now states the law itself: a mass m at distance r from a mass M feels F = GMm/r², with G the gravitational constant; dividing by m gives g = GM/r². So the section stands alone whatever 2.11 contains.
9. Handled on lesson 6.2 (coulombs-law), not on this page.

Checks: `npm run calc:test -- -k electric-field`: 22 passed. `npm run content:check`: no errors and no new warnings for this page (only the "planned, coming" prerequisite warnings for Blocks 0 to 2); the remaining errors in the run belong to other Block 6 lessons still being written.
