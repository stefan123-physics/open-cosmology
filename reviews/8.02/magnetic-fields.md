---
page: content/year-1/8.02/magnetic-fields.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w06d1-1/ (read: local copy presentati_w06d1-1.html; its PDF e18d38e0b1eb8d1d98b6cd72f212cbf2_presentati_w06d1.pdf = presentati_w06d1-1.pdf/.txt, 31 pages, slide "P14- N" = PDF page N)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read: local copy ch8magneti_field.html; its PDF 90510e513af27a2dde30b890a61bbcd1_ch8magneti_field.pdf = ch8magneti_field.pdf/.txt, 28 pages)
  - content/year-4/8.286/magnetic-monopoles.mdx, inflation-solutions.mdx, horizon-problem.mdx, higgs-field.mdx (read: leadsTo and cosmology callout check)
  - content/year-1/8.02/_course.json (read: Session 14 entry and URL)
  - calcs/8.02/magnetic-fields.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k magnetic-fields`: 5 passed)
verdict: pass-with-notes
---

# Review: Magnetic fields and the force on moving charges

Citation convention checked: course-note pages are the printed footers. The TOC is PDF p. 1 (footer "0"); PDF p. 2 carries the odd footer "8-2" but is the TOC's p. 1 (Section 8.1); PDF p. 3 = p. 2, PDF p. 4 = p. 3, PDF p. 14 = p. 13, PDF p. 16 = p. 15, PDF p. 17 = p. 16 (checked with `pdftotext -f N -l N`). So printed page = PDF page − 1 holds throughout. Slides: "P14- N" = PDF page N, checked for all 31.

Scope: Sections 8.3–8.4 (force on wires, torque on loops, dipole in a field, the Earth dip-needle animation) are Session 15 and the exam review (slide 31) is out of scope, as the brief says.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Magnets and their fields", Earth paragraph (slide 13) | Slide 13: "North magnetic pole located in southern hemisphere" (pole named by the magnet convention: the pole field lines leave). | "its magnetic pole near the geographic north is actually a south pole, which is why it attracts the north ends of compass needles (slide 13)". | The physics is correct and agrees with the slide (same fact, other half of the dipole). But it states it differently without saying so, and the reader will meet the geographic name "North Magnetic Pole" for the Arctic one. Suggest adding both halves and the naming clash, e.g. "…is magnetically a south pole (geographers still call it the North Magnetic Pole); the slide puts it the other way round: the Earth's magnetic north pole lies in the southern hemisphere." |
| 2 | warning | Cosmology callout and `leadsTo` | 8.286 Lecture 22 (`magnetic-monopoles`) sets up the monopole problem and was taught by a substitute (Scott Hughes, per `higgs-field.mdx`); the dilution by inflation is Lecture 23 (`inflation-solutions`, "The monopole problem", (10²⁸)³ = 10⁸⁴); Guth names the monopole problem as one of three motivations in Lecture 21 (`horizon-problem`). | "In 8.286 Guth explains this 'monopole problem', and how inflation… dilutes the monopoles away"; `leadsTo` only Lecture 22. | The callout's claim is true of 8.286 as a whole, but the only link goes to a lecture Guth did not give and that does not contain the dilution. Add a second `leadsTo` to Lecture 23 ("Inflation dilutes the monopoles formed before it…"), and optionally write "8.286 (Lectures 21–23) sets out…" instead of "Guth explains". The `leadsTo` `why` ("one motivation for inflation") is correct (Lecture 21). |
| 3 | info | "The force on a moving charge", "which serves as the definition of B (p. 2; slide 19)" | Eq. (8.2.1) is at the foot of p. 2; "can be taken as the working definition of the magnetic field" is on p. 3. | p. 2. | "pp. 2–3". The formula's own `at="Eqs. (8.2.1)–(8.2.2), pp. 2–3"` is correct. |
| 4 | info | "Magnets and their fields", monopoles | Notes p. 1: monopoles "do not exist in isolation, although they are of theoretical interest"; slides 8–10: "Magnetic monopoles do not exist in isolation". | "monopoles, have never been found". | Deliberately more careful than MIT and consistent with the callout (GUTs predict them). Good; no change needed. Optionally mention MIT's "of theoretical interest" as the bridge to the callout. |
| 5 | info | Tesla/gauss sentence | Notes p. 3: gauss is "another commonly used non-SI unit"; slide 20: 1 T = 10⁴ G. | "the older gauss is 10⁻⁴ T". | Numerically right. "older" is not MIT's word; "non-SI" would match the source. |
| 6 | info | Not on page | Notes p. 2, Eq. (8.1.1): E is force per unit charge, but "due to the absence of magnetic monopoles, B must be defined in a different way". | Omitted. | A one-sentence bridge from "no monopoles" to "so B is defined through moving charges" would follow the notes' logic. Optional. |
| 7 | info | Flashcard "Circular motion…" and formula "Circular motion in a magnetic field" | Notes p. 12 take the charge as +q. | r = mv/qB, T = 2πm/qB, ω = qB/m. | Correct for positive q (as in the notes); optionally "|q|" in the flashcard. |

Every other formula and prose citation was checked against its location and is correct:
- Create/feel pattern: slides 3 and 11. Correct.
- Poles, like poles repel: notes p. 1, slide 4. Compass lines up, lines leave N and enter S: p. 1, slides 5–7. Strongest at the poles: p. 1. Correct.
- Cut magnet gives two dipoles, monopoles not isolated: p. 1 (Fig. 8.1.3), slides 8–10. Bar magnets create a dipole field and rotate to align: slides 8–9, 11 (τ = μ × B on slide 11). Correct.
- Gauss's law for magnetism, ∮B·dA = 0, "(2 of 4)" of Maxwell's equations: slide 10. Correct (`cite="reading2" at="slide 10"`).
- Earth is a dipole: slide 13; Experiment 5, Earth's field components at MIT, bar magnet: slides 14–16. Correct.
- Moving charges feel a force, TV demonstration: slides 17–19. Observations (1)–(4): notes p. 2. F_B = qv × B, |F_B| = |q|vB sin θ: Eqs. (8.2.1)–(8.2.2), pp. 2–3, and slide 19. Correct.
- 1 T = 1 N/(C·m/s) = 1 N/(A·m): notes p. 3, slide 20. Correct.
- Cross product magnitude, area of parallelogram (slide 23), right-hand rule through the smallest angle (slide 24), cyclic î, ĵ, k̂ and sign reversal (slide 25), dot/cross notation (slide 22). Correct.
- dW = F_B·ds = q(v × B)·v dt = 0: Eq. (8.2.3), p. 3 (the page drops MIT's intermediate q(v × v)·B dt; fine). "cannot speed up or slow down": p. 3. Correct.
- qvB = mv²/r: Eq. (8.5.1), p. 13 (Section 8.5 starts p. 12; "pp. 12–13" correct). r, T, ω: Eqs. (8.5.2)–(8.5.4), p. 13. Helix: p. 13. Correct.
- Lorentz force: Eq. (8.6.1), p. 15, slide 27 ("the final word on the force on a charge"). Velocity selector v = E/B: Eq. (8.6.3), p. 15, slides 28–29. Thomson e/m: pp. 15–16 (Eqs. 8.6.2–8.6.4). Mass spectrometer m = qB₀Br/E: Eq. (8.6.6), Section 8.6.2, p. 16. Correct.

## Arithmetic and answer checks
- (a) F = (1.602 × 10⁻¹⁹)(10⁶)(0.5) = 8.01 × 10⁻¹⁴ N. Correct.
- (b) qB = 8.01 × 10⁻²⁰; r = 1.673 × 10⁻²¹ / 8.01 × 10⁻²⁰ = 0.020886 m = 2.09 cm. Correct. T = 2π(1.673 × 10⁻²⁷)/(8.01 × 10⁻²⁰) = 1.3123 × 10⁻⁷ s ≈ 1.31 × 10⁻⁷ s. Correct; "the same for any speed" correct (non-relativistic).
- (c) E = vB = 5 × 10⁵ V/m. Correct.
- calcs/8.02/magnetic-fields.yaml: 5 entries (gauss-unit fact, force, radius, period, selector-field), all pass and match the page. The ω = qB/m formula and the m = qB₀Br/E relation have no numbers on the page, so no entries are needed.
- Quiz 1 (index 1, two smaller magnets): correct; explanation right. Quiz 2 (index 1, direction but not speed): correct; explanation right ("does work equal to qvB" is also dimensionally wrong, a fair distractor). Quiz 3 (index 0, v = E/B): correct; explanation right.
- Flashcards: all three correct (see row 7 for the sign of q).

## Coverage and order
- MIT order (slides): outline (1) → new topic (2) → grav./electric create-feel (3) → bar magnets, field lines, compass (4–7) → dipoles, no monopoles (8–9) → electric vs magnetic dipole cut, magnetic Gauss's law (10) → create/feel table (11) → Earth (12–13) → Experiment 5 (14–16) → does anything else feel B? TV demo, F = qv × B (17–19) → units (20) → cross product (21–25) → PRS right-hand rule (26) → Lorentz force (27) → velocity selector (28–29) → PRS Hall effect (30) → exam review (31). The page follows this order, inserting notes Sections 8.2 (no work, Eq. 8.2.3) and 8.5 (circular motion) between the cross product and the Lorentz force, which is also the notes' order (8.2 → 8.5 → 8.6). Fine.
- Left out: the PRS questions (slides 26, 30), in particular the Hall effect question on slide 30 (no explanation of the Hall effect on the page; optional one or two sentences, since it is the session's last physics item); the notes' "B must be defined differently" bridge (row 6); Animation 8.2 and the field-stress/momentum-conservation discussion (notes p. 14); Thomson's e/m formula (8.6.4) and the quoted precise value (p. 16) are described in words only. All minor.
- Added: the worked example and the cosmology callout. Nothing else goes beyond the sources.
- Prerequisites `dc-circuits` and `torque-and-cross-product` exist; links `/courses/8-02/gauss-law` and `/courses/8-01/torque-and-cross-product` point to existing pages (course slugs `8-02`, `8-01`).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the slide text, the Chapter 8 text, or either HTML resource page. The page has no images and reuses no figure (MIT's figures and the slides' photos are not used).
- No paragraph copied verbatim. Short phrases close to MIT: "the final word on the force on a charge" (slide 27, attributed to the slide), "cannot speed a particle up or slow it down" (notes p. 3), "arrow head"/"arrow tail" (slide 22). All acceptable as short phrases.
- The worked example (proton, 10⁶ m/s, 0.5 T) is original: MIT's solved problem 8.9.3 uses two particles accelerated through V with radii R and 2R, and the session slides have no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page.
- Physics of the poles and monopoles: verified correct (row 1 is about wording, not physics). Zero net magnetic flux follows from the absence of magnetic charge, as stated.
- Uncertain: whether Guth himself, rather than the Lecture 22 substitute, says in 8.286 that monopoles motivated inflation; the existing `horizon-problem` page reports him naming the monopole problem as one of three motivations in Lecture 21, which supports the `why` text. The 8.286 transcripts were not re-read for this review.
- Verdict pass-with-notes: no errors; rows 1 and 2 are worth fixing before `status: reviewed`.
