---
page: content/year-1/8.02/biot-savart-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w06d2/ (read: local copy presentati_w06d2.html; its PDF = presentati_w06d2.pdf/.txt, 33 pages, slide "P15- N" = PDF page N)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read: local copy ch8magneti_field.pdf/.txt, Section 8.3 = PDF pp. 4–7, printed pp. 3–6)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: local copy ch9sourc_b_field.pdf/.txt, Sections 9.1–9.2 = PDF pp. 3–14, printed pp. 2–13)
  - content/year-1/8.02/_course.json (read: Session 15 and Session 18 entries)
  - calcs/8.02/biot-savart-law.yaml (read; `npm run calc:test -- -k biot-savart`: 7 passed)
verdict: pass-with-notes
---

# Review: Forces on currents and the Biot–Savart law

Citation convention checked: course-note pages are the printed footers, printed page = PDF page − 1 for both chapters (checked with `pdftotext -f N -l N` on every page cited: Ch. 8 PDF 4–7, Ch. 9 PDF 3–14). Slides: "P15- N" = PDF page N, checked for all 33.

Scope: torque on loops (Ch. 8, Section 8.4) and Ampère's law (Ch. 9, Section 9.3 on) belong to later sessions and are rightly left out.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening sentence, "currents **create** magnetic fields (slides 1–3, 13–16)" | Slides 1–3 are the outline and the recap of Session 14 ("Last time"; dipoles create and feel B; F = qv × B). The "create" half runs from slide 13 to slide 29 (Biot–Savart, coil example, group problem), followed by field pressure and tension (slides 30–33). | "slides 1–3, 13–16". | Write "(slides 13–29)" or "(the second hour, slides 13–33)"; drop 1–3, or cite slide 1 only for the two-hour outline. |
| 2 | info | "Field pressure and tension", last sentence | Slide 33: for a positive charge moving out of the page in a downward B, the magnetic force combines (1) pressure pushing from the left and (2) tension pulling to the right. Slide 32 gives the same picture for a charge in an E field. | "piles up field lines on one side, and the imbalance pushes it the other way". | Correct as far as it goes, but only the pressure half of MIT's picture. Optionally add "and the bent lines on the other side pull it along by their tension". |
| 3 | info | "The Biot–Savart law", "the field is perpendicular both to the current and to the line to the field point (p. 2; slide 20)" | Notes p. 2 give the formula and the Coulomb comparison but do not say this in words; slide 20 is "The Right-Hand Rule #2" (ẑ × r̂ = θ̂). | Cites p. 2 for the perpendicularity. | The physics is right (it follows from the cross product). Cite slide 20 alone or say "it follows from the cross product". |
| 4 | info | "Currents create fields", "Parallel currents attract and opposite currents repel (slides 13–14)" | Slides 13–14 pose the question and name the demonstration; they do not state the result. Slide 15 links the visualisations; the result is stated in notes Section 9.2, p. 13. | Cites slides 13–14. | Optionally add "(the demonstration on slide 14; Chapter 9, p. 13)". |
| 5 | info | "A circular loop", "far away it falls as 1/z³, the field of a magnetic dipole" | Not stated in Sections 9.1–9.2 (notes p. 11 only say the field of eight charges in a ring has "the magnetic dipole pattern" far away; dipole fields are Section 9.5). | Uncited. | Correct physics (Eq. 9.1.15 for z ≫ R gives μ₀IR²/2z³). Fine as the page's own remark; optionally point to p. 11. |
| 6 | info | "A long straight wire", "every ds × r̂ points the same way, out of the page" | Example 9.1 (p. 4): current in +x, P at (0, a), so dB along +k̂, out of the page. | Says "a straight wire along the x-axis and a point at distance a" without the current direction or which side P is on. | Add "current in the +x direction, P on the +y side" so "out of the page" is defined. |
| 7 | info | Worked example title "Fields and forces from 10 amperes" | n/a | Part (b) uses 5 A. | Rename, e.g. "Fields and forces from everyday currents". |

Every other formula and prose citation was checked against its location and is correct:
- Cyclotron recap: slides 4–5. Wire deflected one way or the other with the current: notes Section 8.3, p. 3 (Fig. 8.3.1); jumping-wire demo slide 8; slides 6–9 cover current-carrying wires. Correct.
- I = nqv_dA and F_B = I L × B: Eq. (8.3.1), p. 4; slide 7 derives F = I(L × B) from (charge/s)·m × B. Correct (slide 7 has no drift velocity, but the pair of citations is fair).
- F_B = I∫ₐᵇ ds × B: Eq. (8.3.3), p. 4 (Eq. 8.3.2 dF = I ds × B on the same page). Correct.
- Curved wire = straight wire between ends (Eq. 8.3.4) and zero force on a closed loop (Eq. 8.3.5): p. 5. Correct.
- Example 8.1, semicircular loop, F₁ = 2IRB k̂, F₂ = −2IBR k̂: pp. 5–6. Correct.
- E of a point charge: slide 17. B of a moving charge: slide 18 and Eq. (9.1.20), printed p. 10 (Section 9.1.1 starts p. 9); r̂ from charge to field point and the non-relativistic restriction: p. 10. Correct.
- μ₀ = 4π × 10⁻⁷ T m/A: Eq. (9.1.2), p. 2, and slide 18. Correct.
- Biot–Savart dB = (μ₀/4π) I ds × r̂/r²: Eq. (9.1.1), p. 2, and slide 19. "Remarkably like Coulomb's law" for dq: Eq. (9.1.3), p. 2. "Three integrals, one per component": Eq. (9.1.4) and text, p. 3. Correct.
- Finite wire, x = a cot θ, B = (μ₀I/4πa)(cos θ₂ + cos θ₁): Example 9.1, pp. 3–5, Eq. (9.1.5) p. 5. Infinite wire B = μ₀I/2πa: Eq. (9.1.7), p. 5, with (θ₁, θ₂) = (0, 0) so both cosines are 1. Circular lines and right-hand rule: p. 6. Correct.
- Coil at the centre: legs contribute nothing, ds ∥ r̂ (slide 24); ds ⊥ r̂, ds = R dθ, dB = μ₀I dθ/4πR (slide 25); B = μ₀I/2R (slide 26, "into page" for MIT's sketch); "an EASY Biot–Savart problem, no vectors involved" (slide 27). Correct.
- Ring on its axis, x and y components cancel, B_z = μ₀IR²/2(R² + z²)^{3/2}: Example 9.2, pp. 6–8, Eqs. (9.1.13)–(9.1.15) all on printed p. 8. Correct.
- Parallel wires: B₂ = μ₀I₂/2πa perpendicular to wire 1, F₁₂ = μ₀I₁I₂ℓ/2πa towards wire 2; same direction attract, opposite repel: Section 9.2, pp. 12–13, Eq. (9.2.1) p. 13. Correct.
- Field tension along lines and pressure across them: slides 30–31. Correct.

## Arithmetic and answer checks
- (a) B = (2 × 10⁻⁷)(10)/0.05 = 4.0 × 10⁻⁵ T. Correct; "comparable to the Earth's field" (about 25–65 μT) is fair.
- (b) (4π × 10⁻⁷)(5)/0.2 = 3.1416 × 10⁻⁵ T ≈ 3.14 × 10⁻⁵ T; × 100 = 3.14 × 10⁻³ T. Correct (assumes a thin, flat coil whose turns all have radius 0.1 m; fine, optionally say so).
- (c) (2 × 10⁻⁷)(10 × 10)/0.05 = 4.0 × 10⁻⁴ N/m, attractive (same direction). Correct.
- (d) (10)(0.2)(0.5) = 1 N. Correct.
- Plot: curve 1/(1 + u²)^{3/2} is Eq. (9.1.15) divided by B₀ = μ₀I/2R, with u = z/R, as in the notes' own Fig. 9.1.7 (p. 9), but drawn from the formula, not copied. Half value: 1 + u² = 2^{2/3}, u = 0.7664 ≈ 0.77. Caption correct. Domain [−3, 3], range [0, 1.1] contain the peak of 1.
- calcs/8.02/biot-savart-law.yaml: 7 entries (μ₀ fact, half-height, wire field, coil one turn, coil 100 turns, force between wires, force on wire), all pass and match the page text.
- Quiz 1 (index 0, attract): correct; explanation right. Quiz 2 (index 1, zero): correct; explanation matches Eq. (8.3.5). Quiz 3 (index 1, 1/a): correct.
- Flashcards: all three correct.

## Coverage and order
- MIT order (slides): outline (1) → recap: dipoles, F = qv × B (2–3) → cyclotron motion (4–5) → force on wires, jumping wire (6–9) → PRS predictions and Experiment 6 (10–11) → mid-term evaluation (12) → lab summary, parallel currents (13–14) → "moving charges also create fields" (15) → E of a point charge, B of a moving charge, μ₀ (16–18) → Biot–Savart (19) → right-hand rule #2 (20) → moving-charge animation, wire demo (21–22) → coil at the centre (23–27) → PRS (28) → group problem: coil, point P "much harder" (29) → field pressure and tension (30–33).
- The page follows this order, inserting from the notes the long straight wire (Example 9.1) after Biot–Savart (where slide 22's wire demonstration sits), the ring on its axis (Example 9.2) after the coil centre, and the quantitative parallel-wire force (Section 9.2) before pressure and tension. The moving-charge field before Biot–Savart follows the slides (the notes have the reverse order). Fine.
- Left out: Experiment 6 itself (slides 10–11; the page only names it; no lab handout was among the sources, so I cannot say what it measured); PRS questions (slides 10, 28); the group problem (slide 29): the figure is not in the text extraction, so it is uncertain whether P is on the axis; if so, the page's axis section answers it; the finite symmetric wire, Eq. (9.1.6); the dipole force on the axis, Example 9.2(b), Eqs. (9.1.16)–(9.1.17) (fits better with the dipole sessions); superposition of point charges, Eq. (9.1.21), and Animations 9.1–9.3. All minor.
- Added: worked example and the 1/z³ remark (row 5). Nothing else goes beyond the sources.
- Prerequisites `magnetic-fields` and `continuous-charge-distributions` exist; links `/courses/8-02/magnetic-fields` and `/courses/8-02/continuous-charge-distributions` point to existing pages.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the slide text, the Chapter 8 or 9 text, or the HTML resource pages (`grep -ic`: 0 in all six files). The page uses no image; the axis plot is generated from Eq. (9.1.15).
- No paragraph copied verbatim. Short phrases close to MIT: "remarkably like Coulomb's law" (notes p. 2: "remarkably similar to the Coulomb's law"), "an easy Biot–Savart problem with no vectors" (slide 27, attributed), "permeability of free space" (standard term). All acceptable.
- The worked example is original: the slides have no numerical example, and the notes' Section 9.11 solved problems are symbolic (arc, rectangular loop, hairpin, two wires, strip). Numbers 10 A, 5 cm, 0.1 m, 100 turns, 0.5 T are the page's own.

## Notes
- `leadsTo` 8.02 Lecture 18: `_course.json` lists Session 18 as "Levitation (Experiment 8); Ampère's Law", and the `why` ("Ampère's law, which gives the field of symmetric currents without integrating") is correct (notes Section 9.3 derives the long-wire field this way, Example 9.3). No cosmology callout on this page, which is reasonable; no cosmology claim to check.
- Slide 26 gives the centre field's direction ("into page" for MIT's sketch); the page gives no direction for it. Optionally add "along the axis, by the right-hand rule" for completeness.
- Not verified: the lecture video (not among the sources; review against notes and slides only, as the project allows).

## Resolution (2026-11-16, by the page author)

- Warning 1: the opening citation now gives slides 1, 4–12 and 13–33.
- Info: the pressure/tension paragraph now includes the pulling (tension) half and slide 32's electric example; the perpendicularity remark cites slide 20; the parallel-currents result cites notes p. 13; the 1/z³ remark is marked as the page's own; the long-wire direction now states the current direction and side; the worked example's title no longer says 10 amperes. Coverage gaps: no change.
