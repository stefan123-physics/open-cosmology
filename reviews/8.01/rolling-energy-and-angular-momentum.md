---
page: content/year-1/8.01/rolling-energy-and-angular-momentum.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-12-rotations-and-translation-rolling/37-1-kinetic-energy-of-translation-and-rotation/ (read; segment pages 37.1–37.4 read as saved HTML, each with the CC BY-NC-SA 4.0 licence link; OCW navigation lists the lesson as "Lesson 37: Rolling Kinetic Energy & Angular Momentum [37.1-37.4]"; the three transcript URLs in `source.readings` are the transcript links on their segment pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter20/ (read; Chapter 20 PDF extracted with pdftotext -layout; Sections 20.3–20.5 and Example 20.5, pp. 20-12 to 20-18, compared; page numbers from the printed footers "20-k" at the end of each page, checked by single-page extraction: PDF page = footer + 1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/babafa20713b91b3269e5587b8e5d744_ZMa-xKcM2L8.pdf (read; 37.1 transcript, video L35v06, 4 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/7bf5936f4cf5376e96e567b388575a18_xh_LCHvzp-Q.pdf (read; 37.2 transcript, video L35v07, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/e980e02d242a2e677bc99c1c19b5782d_V1I-vrXGl3A.pdf (read; 37.3 transcript, video L36v01, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-12-rotations-and-translation-rolling/37-4-summary-of-angular-momentum-and-kinetic-energy/ (read; text page with one summary figure, ls12_summary.svg, not reused)
  - calcs/8.01/rolling-energy-and-angular-momentum.yaml (read; `pytest tests/calc -k rolling-energy`: 12 passed)
verdict: needs-changes
---

# Review: Kinetic energy and angular momentum of a rolling body

The transcripts have no printed page numbers, so "p. n" is the PDF page. Notes citations were checked against the printed footers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Callout "The Earth's orbit and spin": "(notes, Example 20.5, pp. 20-15–20-16)" | Example 20.5 starts on p. 20-15 (heading and Figure 20.16 before the footer "20-15") and ends on p. 20-17: the ratio 3.77 × 10⁶ (Eq. (20.3.24)), the remark that it goes as the square of r_s,e/R_e, Eq. (20.3.25) and the solar/sidereal day note all follow the footer "20-16". | pp. 20-15–20-16, while quoting the ratio and its square law | Change to "pp. 20-15–20-17". |
| 2 | warning | Section "Kinetic energy: translation plus rotation": "so it becomes ½I_cm ω² (p. 3; notes, Section 20.4, pp. 20-17–20-18)"; also `source.readings[0].location` "Sections 20.3–20.4, Example 20.5" | Section 20.4 (pp. 20-17–20-18) ends with K = Σ½m_i v²_cm,i + ½m V²_cm, Eq. (20.4.3), valid for any system. The step to ½I_cm ω² for a rigid body is Section 20.5, Eqs. (20.5.1)–(20.5.2), p. 20-18. | Credits the ½I_cm ω² step to Section 20.4 | Cite "notes, Eqs. (20.4.3) and (20.5.1)–(20.5.2), pp. 20-17–20-18" and add Section 20.5 to `location`. |
| 3 | warning | `calcs/8.01/rolling-energy-and-angular-momentum.yaml`, entry `earth-ratio` | Eq. (20.3.24) is on p. 20-17 | `at: 'Eq. (20.3.24), p. 20-16'` | Change to p. 20-17 (the number itself is right). |
| 4 | info | Section "Angular momentum": "notes, Eqs. (20.3.4)–(20.3.10), pp. 20-12–20-14" | Eq. (20.3.4) is the first equation on p. 20-13; p. 20-12 holds Eqs. (20.3.1)–(20.3.3) | pp. 20-12–20-14 | Either "Eqs. (20.3.1)–(20.3.10), pp. 20-12–20-14" or "Eqs. (20.3.4)–(20.3.10), pp. 20-13–20-14". |
| 5 | info | Section "Angular momentum": "For a body symmetric about its spin axis the spin is I_cm ω" | 37.3 stops at L_cm (the sum); I_cm ω appears in 37.4 (planar rod) and in earlier lessons. | Stated without a source | Correct physics; optionally add "(as in 37.4)". |
| 6 | info | Section "Rolling down an incline, by energy": "the normal force does none either" | 37.2 p. 1 lists the normal force among the forces, then says there is no external work; it does not say why the normal force does no work. | States it as from p. 1 | Correct (N ⊥ motion). Fine as is, or say "(it is perpendicular to the motion)". |
| 7 | info | Formula "Speed at the bottom, by energy" | 37.2 p. 2 says "m plus 1/2 cm r square" in the final line (a speech slip for m + I_cm/R²). | m + I_cm/R² | Correct; no change needed. Similarly 37.1 p. 3 drops the ½ in "m total v center of mass squared" once; the page has the right form. |
| 8 | info | Notation | 37.3 uses point P and **R**; the notes and 37.4 use S and **r**_S,cm / **r**_s. | Body uses P and **R**; the 37.4 section uses **r**_S; quiz 4 and flashcard 2 use **R**_S,cm | Each matches its source, but three names for the same vector on one page may confuse. Consider one notation (e.g. **R**_S,cm throughout, mentioning that 37.3 calls the point P). |
| 9 | info | Callout "The Earth's orbit and spin" | The notes stress that the spin axis is tilted 23.5° to the orbit normal, so L_orbital (along k̂) and L_spin (along n̂) are not parallel, Eq. (20.3.25). | Compares magnitudes only | Optional: add "(the two vectors are not parallel: the spin axis is tilted by 23.5°)". |
| 10 | info | `source`, readings | Titles, segment URL, Chapter 20 title and URL, and transcript URLs match OCW | Same | ✓ |

## Arithmetic and answer checks
- Formula "Expanding the kinetic energy": 37.1 p. 2 ✓ (the two equal cross terms combine, the 2 cancels the ½, V_cm pulled out of the sum). Matches notes Eq. (20.4.2) ✓.
- Formula "Translational plus rotational kinetic energy": 37.1 pp. 3–4 ✓ (p. 3 sets Σm_j v_cm,j = 0 and v = r ω; p. 4 states the result and the names translational/rotational). Notes Eq. (20.5.2) ✓ (row 2).
- Formula "Speed at the bottom, by energy": 37.2 p. 2 ✓ (calcs `energy-speed` identity passes). The claim that static friction does no work because the contact point is instantaneously at rest is 37.2 p. 1 ✓.
- Formula "Orbital plus spin angular momentum": 37.3 pp. 2–3 ✓ (four terms, two vanish by Σm_j v_cm,j = 0 and Σm_j r_cm,j = 0 stated on p. 1; result R × m_total V + L_cm, called translational/orbital and spin on p. 3) ✓; notes Eqs. (20.3.11)–(20.3.15), pp. 20-14–20-15 ✓.
- Section "Fixed axis or translation and rotation?": matches the 37.4 text page (both forms, the parallel-axis argument with v_cm = ωd/2, and the advice to use I_S ω and ½I_S ω² for fixed-axis rotation) ✓.
- Worked example (a): ½ × 7.0 × 64 = 224 J ✓; K_rot = ½ × (2/5)mR² × (v/R)² = (2/5) × 224 = 89.6 J ✓; total 313.6 ≈ 314 J ✓. Orbital mvR = 7.0 × 8.0 × 0.11 = 6.16 ✓; spin (2/5)mvR = 2.464 ≈ 2.46 ✓; total (7/5)mvR = 8.624 ≈ 8.62 kg m²/s ✓.
- Physics of (a), checked by vectors (x̂ forward, ŷ up, ẑ out of the page, P on the floor in the plane of motion): **R** = (x, R, 0), **R** × m**V** = R ŷ × mv x̂ = −mvR ẑ; a ball rolling forward turns clockwise in this view, ω = −(v/R) ẑ, so the spin (2/5)mR²ω = −(2/5)mvR ẑ. Same direction ✓; total −(7/5)mvR ẑ, independent of x ✓; equal to I_P ω with I_P = (2/5)mR² + mR² = (7/5)mR² (parallel axis) ✓. The page's wording "the moment of inertia about the contact point, which is momentarily at rest" is correct as an instantaneous statement.
- Worked example (b): √((4/3) × 9.8 × 1.0) = 3.615 ≈ 3.6 m/s ✓; rotational fraction (½)/(1 + ½) = 1/3 ✓.
- Earth callout: m r² ω_orbit = 5.97e24 × (1.50e11)² × 1.991e-7 = 2.674e40 ≈ 2.7e40 ✓ (notes 2.68e40, Eq. (20.3.20)); (2/5) m R² ω_spin = 7.088e33 ≈ 7.1e33 ✓ (notes 7.10e33, Eq. (20.3.23)); ratio 3.773e6 ≈ 3.8 million ✓ (notes 3.77e6, Eq. (20.3.24)). ω_orbit = 2π/(365.25 × 86400) = 1.991e-7 ✓, ω_spin = 2π/86160 = 7.292e-5 ✓. The page says "treating the Earth as a uniform sphere" ✓, as the notes do before Eq. (20.3.16) ("If we approximate the earth as a uniform sphere", p. 20-16). "Grows like the square of the distance to the Sun over the Earth's radius" ✓ (p. 20-17; strictly also times T_spin/T_orbit, a fixed factor).
- Quiz 1: index 2 ✓; explanation right (37.1 p. 3). Quiz 2: index 1 ✓; explanation right (37.2 p. 1). Quiz 3: √(4gh/3) = 3.61 → "3.6 m/s", index 1 ✓; √(2gh) = 4.43 → "4.4" ✓. Distractors: 3.1 = √(gh) is the hoop ✓; 2.2 m/s matches no simple case (a sphere would give 3.7 m/s; info only). Quiz 4: index 0 ✓; explanation right (37.3 pp. 1–2).
- Flashcards: all three correct (card 2's "symmetric body" qualifier ✓; card 3 matches 37.4 ✓).
- calcs file: all 12 entries agree with my recomputation and pass; only the page tag in `earth-ratio` is off (row 3).

## Coverage and order
- 37.1 (kinetic energy of translation and rotation) ✓, first section.
- 37.2 (wheel rolling down an incline by energy; static friction does no work) ✓, second.
- 37.3 (angular momentum: orbital plus spin about a point P) ✓, third.
- 37.4 (summary: fixed axis vs translation and rotation, rod example, parallel-axis remark, advice) ✓, fourth. MIT order kept.
- Notes 20.3 (decomposition) ✓, Example 20.5 (Earth) ✓ as a callout, 20.4 ✓ and 20.5 (used but cited as 20.4, row 2). Not mentioned: the notes' remark that Eq. (20.4.3) holds for any system of particles (gas, firecracker, pool balls), p. 20-18. Optional one-liner; it would also support the page's frontmatter wording "a body".
- Added by the page: bowling-ball and cylinder worked example, quiz and flashcards.
- `leadsTo: []` and no cosmology callout: acceptable for the last 8.01 lesson, as the caller states (no 8.02 syllabus yet). The Earth's orbital vs spin angular momentum would be a natural future link if an astronomy page on planetary angular momentum appears (info).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the three transcripts, the 37.4 page or Chapter 20 (searched). All four segment pages carry CC BY-NC-SA 4.0.
- The 37.4 summary figure is not reused; the page has no figures.
- Worked example is original (bowling ball 7.0 kg, 0.11 m, 8.0 m/s; cylinder from 1.0 m); MIT's 37.2 example is the general wheel only. The Earth numbers are MIT's own and are clearly attributed to notes Example 20.5 ✓.
- No copied paragraphs found; the derivations are paraphrased. "To avoid confusion" (37.4) is a short phrase, fine.
- No OpenStax or LibreTexts material. No em dashes on the page.

## Notes
- Physics is correct throughout, including the bowling-ball angular momentum about a floor point (orbital and spin in the same direction, total (7/5)mvR = I_contact ω) and the Earth note.
- The one error is a page-range citation (row 1); rows 2 and 3 are citation fixes as well. After these, the page could pass.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the Earth callout now cites notes Example 20.5 as pp. 20-15–20-17.
- **Warnings:** the ½I_cm ω² step now cites Sections 20.4–20.5, Eqs. (20.5.1)–(20.5.2), and the notes' `location` includes Section 20.5; the `earth-ratio` calcs entry cites p. 20-17.
- Info: Eqs. (20.3.4)–(20.3.10) are cited as pp. 20-13–20-14; the symmetric-body spin I_cm ω is attributed to segment 37.4; the callout mentions the 23.5° tilt. The other info items are left as they are.
