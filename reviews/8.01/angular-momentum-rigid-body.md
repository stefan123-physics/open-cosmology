---
page: content/year-1/8.01/angular-momentum-rigid-body.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-11-angular-momentum/33-1-worked-example-angular-momentum-of-2-rotating-point-particles/ (read; segment pages 33.1–33.5 read as saved HTML, each with the CC BY-NC-SA 4.0 licence link; the four transcript URLs in `source.readings` confirmed as the transcript links on their segment pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter19/ (read; Chapter 19 PDF extracted with pdftotext -layout; Sections 19.6–19.7, Examples 19.5, 19.6 (A and B) and 19.6 "Circular Ring", pp. 19-13 to 19-21, compared in full; page numbers from the printed footers "19-k" at the end of each page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d797b8b5aabbab962e6f37716c360e3b_mHVnpuhfpvI.pdf (read; 33.1 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/3556693cdc38e86e63dca0ae044cd3b5_rd9d0WBFzt8.pdf (read; 33.2 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-11-angular-momentum/33-3-summary-so-far/ (read; text page, three bullet points)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/eb7ca16c90f0a32c99fc02461bec9df0_tO6Wh_HhifI.pdf (read; 33.4 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/02f59b9d60328e43433f61225dc6b9c7_NbXDgm7UyVM.pdf (read; 33.5 transcript, 1 page)
  - content/year-1/8.01/_course.json, content/year-1/8.01/angular-momentum-point-particle.mdx (read; leadsTo target and the earlier derivation that 33.4 repeats)
  - calcs/8.01/angular-momentum-rigid-body.yaml (read; `pytest tests/calc -k rigid`: 26 passed)
verdict: needs-changes
---

# Review: Angular momentum of a rigid body

The transcripts have no printed page numbers, so "p. n" is the PDF page. I checked every transcript citation against those pages, and every notes citation against the printed footers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Quiz 4 explanation; flashcard 2; Summary bullet 3 ("there may also be a perpendicular part, depending on S") | 33.4 p. 2 and notes Eq. (19.5.18): L_B = L_A + r_B,A × p_sys, so the angular momentum is the same about every point when p_sys = 0. 33.3 links the dependence on S to an axis "not the axis of symmetry (such as an axis passing through one end of an object)". In that example the centre of mass is off the axis. | Quiz 4: the perpendicular part "depends on where S is on the axis", stated for any unsymmetric body | Wrong as a general rule. If the axis passes through the centre of mass, p_sys = 0. A body that is not symmetric (for example a dumbbell tilted on an axis through its centre) then has a perpendicular part that is the same for every S. The page's own section "When the total momentum is zero" shows this. Say: "which in general depends on where S is (unless the centre of mass is on the axis)". Make the same change in flashcard 2 and Summary bullet 3. |
| 2 | warning | Section "Any body on a fixed axis", second bullet of the 33.3 summary | 33.3: for an axis that is not a symmetry axis, "the angular momentum is parallel to ω only when calculated at the point of intersection between the axis of rotation and the object, L_intersect = I_intersect ω". | Same claim, as MIT's summary | This holds for a flat body lying in the plane perpendicular to the axis, such as a rod or plate turning about an axis through one end. It fails for a general 3D body: a tilted dumbbell has no such point, and a 3D body meets the axis along a segment, not at one point. The page attributes the claim to MIT ("The course summarises"), but a short bracket would prevent a wrong generalisation: "(for a flat object rotating in its own plane)". |
| 3 | info | "The second term is tilted away from the axis"; "(b) … The tilted part is larger than the axial part"; quiz 1 choice "tilted away from the axis" | 33.1 p. 3 and notes Eq. (19.5.22): the second term is along r̂, perpendicular to the axis. | "tilted" for the term itself | The term is perpendicular (radial). It is L_S,1 as a whole that is tilted. Say "The second term is perpendicular to the axis, so it tilts L_S,1 away from it", and in (b) say "the perpendicular part". The quiz choice is fine. |
| 4 | info | Worked example (b), the bearing remark | Not in MIT (page's own) | The perpendicular part rotates; changing L needs a torque, "which is why a lopsided rotor makes its bearings shake" | Correct: dL/dt = −hmRω² θ̂, which equals the torque about S of the centripetal force. For a single ball, though, the bearings must also supply a rotating net force mRω² = 0.50 × 0.20 × 16 = 1.6 N, because the centre of mass is off the axis. Optionally: "the bearings must supply both a rotating force and a rotating torque". Not wrong as written. |
| 5 | info | Section "Kinetic energy in terms of angular momentum" | 33.5 p. 1: "we see that omega squared is equal to L over i" (a slip; ω = L/I). | "Eliminating ω = L/I" | Correct. Per writing rule 4, a bracket is optional because the page does not repeat the slip. |
| 6 | info | Section "Any body on a fixed axis", "the component along the axis comes only from the perpendicular distances" | Notes p. 19-19, after Eq. (19.5.22): the z-component "arises entirely from the second term, r∥ × p" (a slip in the notes: the second term in (19.5.22) is the radial one; the z-part comes from r⊥ × p). | Correct physics | No change needed. |
| 7 | info | `source.title` | OCW lists Lesson 33 as "Angular Momentum of a Rigid Body [33.1-33.5]" in the course navigation. | Same | ✓ |

## Arithmetic and answer checks
- Formula "One particle, about S": (R r̂₁ + h k̂) × mRω_z θ̂₁ = mR²ω_z (r̂ × θ̂) + hmRω_z (k̂ × θ̂) = mR²ω_z k̂ − hmRω_z r̂₁ ✓ (k̂ × θ̂ = −r̂ because r̂, θ̂, k̂ are cyclic). Matches 33.1 pp. 2–3 and notes Example 19.5 (p. 19-15) ✓.
- Direction in worked example (b): S is below the plane, so h > 0 is the upward offset from S to the ball. The term −hmRω r̂ then points from the ball towards the axis, so **"pointing inward towards the axis" is correct** ✓. It rotates with r̂, so "rotating with the ball" is correct ✓. The bearing remark is correct but incomplete (row 4).
- Formula "Two particles, about S": r̂₂ = −r̂₁, the radial terms cancel, giving 2mR²ω_z k̂ ✓ (33.1 p. 3; notes Eq. (19.5.10), p. 19-15).
- Formula "Ring about its axis": MR²ω = Iω (33.2 pp. 1–2) ✓. The same result is in notes Eqs. (19.5.30)–(19.5.32), pp. 19-20–19-21 (Example 19.6 "Circular Ring", not cited, as intended).
- Formula "Fixed axis": Σ m_j r⊥,j² ω_z = I_S ω_z matches Eqs. (19.5.24) and (19.5.27). Both are on p. 19-19 ✓. Eq. (19.5.22) is on p. 19-19 (the decomposition r = r⊥ + r∥ is introduced on p. 19-18), so "pp. 19-18–19-19" ✓. Eqs. (19.5.23)–(19.5.27) on p. 19-19 ✓. Eq. (19.5.29) τ_S,z = I_S α_z on p. 19-19 ✓.
- Formula "Angular momentum about two points": L_B = r_B,A × p_sys + L_A uses the transcript's notation (vector triangle and distribution p. 1, result and p_sys = 0 case p. 2) ✓. The previous page states it as L_A = L_B + r_A,B × p_sys with A and B swapped. Both are the same relation; info only.
- Centre-of-mass frame remark: 33.4 p. 2 ✓.
- Formula "Rotational kinetic energy": ½Iω² with ω = L/I gives L²/2I ✓ (33.5 p. 1). The p²/2m analogy is on p. 1 ✓.
- Worked example (a): I = 2 × 0.30 × 0.16 = 0.096 kg m² ✓; L = 0.48 kg m²/s ✓; L² = 0.2304, 2I = 0.192, K = 1.2 J ✓; ½ × 0.096 × 25 = 1.2 J ✓.
- Worked example (b): 0.50 × 0.04 × 4.0 = 0.080 ✓; 0.30 × 0.50 × 0.20 × 4.0 = 0.12 kg m²/s ✓; 0.12 > 0.080 ✓.
- Worked example (c): I = ½ × 10 × 0.09 = 0.45 kg m² ✓; L = 45 kg m²/s ✓; K = 2025/0.90 = 2250 J ✓ (½ × 0.45 × 10⁴ = 2250 ✓).
- Quiz 1: index 0 ✓. Quiz 2: index 1 ✓. Quiz 3: 2250 J, index 2 ✓ (distractors: 20 J ≈ I·L, 100 J = L/I, 4500 J = L²/I, plausible slips). Quiz 4: index 1 ✓. The explanation is wrong in general (row 1).
- Flashcards: card 1 ✓, card 3 ✓, card 2 needs the qualification in row 1.
- calcs/8.01/angular-momentum-rigid-body.yaml: all nine entries agree with my recomputation and pass. Two `source` fields are loose (info): `flywheel-i` cites reading3 p. 2 for I = ½MR² of a disc, which 33.2 does not give (it comes from the moment-of-inertia lesson); `dumbbell-i` cites reading2 p. 3, which is acceptable (2mR²).

## Coverage and order
- 33.1 (two particles, cylindrical vectors, cancellation, extension to a ring) ✓; 33.2 (ring from pairs, pear-shaped body from rings and discs, L = Iω) ✓; 33.3 (three summary points, given as bullets inside the fixed-axis section) ✓; 33.4 (L about two points, p_sys = 0, centre-of-mass frame) ✓; 33.5 (K = L²/2I, analogy with p²/2m) ✓. The page follows MIT's segment order. Notes Section 19.7 is placed between 33.2 and 33.3, where it supplies the reason for 33.3's first point. That is a sensible place.
- Handling of 33.4: the page gives one formula and two short paragraphs, and says the result was "already met in the previous lesson", with a link. This is the brief reference back that was asked for, not a repeat ✓. The previous page states that 33.4 derives the result in the next lesson, so the two pages agree.
- Notes 19.6 opening (Eqs. (19.5.1)–(19.5.9): τ_ext = dL/dt for a system, internal torques cancel) is not covered. Example 19.6 (A and B) is covered by the previous page. Example 19.6 "Circular Ring" is not used, as intended. The opening of 19.6 belongs with Lesson 34 (torque changes angular momentum), and the page points there ("next lesson"). Acceptable.
- Added by the page: the worked example, the closing note, the quiz and flashcards.

## Licensing
- The five segment pages carry CC BY-NC-SA 4.0. A grep found no "All rights reserved" or "Courtesy of" notice in the transcripts, the 33.3 page or the chapter text. No figure is reused.
- No copied paragraphs. The closest wording is the three 33.3 bullets, which the page paraphrases closely. For example, MIT has "When an object rotates about a fixed axis that is not the axis of symmetry (such as an axis passing through one end of an object), the angular momentum about a point on the axis depends on the location of the point along the axis"; the page has "If the axis is not a symmetry axis (say it passes through one end of an object), the angular momentum about a point on the axis depends on where that point is". These are short single-sentence summaries, attributed to the course, so they are acceptable. "one more reason" (33.4) is a short phrase.
- The worked examples are original. (a) is a dumbbell with its own numbers. (b) is a single ball with no partner, the page's own twist on Example 19.5. (c) is a flywheel. None copies MIT. No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.01 Lecture 34: matches `_course.json` (lecture 34, "Torque and Angular Impulse") and OCW's Lesson 34 "Torque and Angular Impulse [34.1-34.5]". "Torque changes angular momentum: τ = dL/dt, and angular impulse" fits the 34.1 segment slug ("torque causes angular momentum to change") ✓.
- Closing callout: kind "note", with no cosmology link and no `cosmology` leadsTo, as required ✓. The physics is correct. With no external torque L is constant; K = L²/2I rises as I falls; the extra energy is the work done pulling the mass in. The skater and the core collapsing into a neutron star are standard illustrations (stated qualitatively, so nothing to recompute). "the coming lessons show" conservation: Lesson 34 or later, plausible; I did not check which segment states it.
- Prerequisites `angular-momentum-point-particle` and `moment-of-inertia` both exist ✓. "the torque equation of the earlier lesson" refers to torque-and-angular-acceleration, which exists, but the text does not link it (optional).

## Resolution (2026-11-16, by the page author)

- **Error 1:** quiz 4's explanation, flashcard 2 and Summary bullet 3 now say the perpendicular part depends on S only in general, not when the centre of mass is on the axis; the first 33.3 bullet gets the same bracket.
- **Warning 2:** a bracket says the "parallel only at the crossing point" statement holds for a flat body turning in its own plane.
- Info: "tilted" now describes L_S,1 as a whole, with the extra term called perpendicular; the bearing remark adds the rotating force mRω² = 1.6 N (new calcs `rotor-force`); `flywheel-i` no longer cites 33.2 for the disc's ½MR². The 33.5 and notes slips are left unmentioned since the page writes the correct forms.
