---
page: content/year-1/8.01/torque-and-angular-impulse.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-11-angular-momentum/34-1-torque-causes-angular-momentum-to-change-point-particle/ (read; segment pages 34.1–34.5 read as saved HTML; the four transcript URLs in `source.readings` confirmed as the transcript links on their segment pages; 34.4 "Demo: Bicycle Wheel" is a video page with no transcript, so its content was not checked)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter19/ (read; Chapter 19 PDF extracted with pdftotext -layout; Sections 19.3–19.9 and Example 19.7, pp. 19-8 to 19-27, compared; page numbers from the printed footers "19-k" at the end of each page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2722cb4dbb39e8b1004e864a4c9eabf3_DSk8HTcB7x0.pdf (read; 34.1 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/3e8167efc68ce4135695840e767202be_x5WavAj2M8A.pdf (read; 34.2 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d84ac5e9afe277a44461fa3b64892588_W3TqFzVh_rE.pdf (read; 34.3 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/57a8e181a2e113924d7673c0198995cf_c15RtHXBVuQ.pdf (read; 34.5 transcript, 4 pages)
  - content/year-1/8.01/_course.json, content/year-1/8.01/torque-and-angular-acceleration.mdx (read; leadsTo target and the linked "internal torques cancel in pairs" section)
  - calcs/8.01/torque-and-angular-impulse.yaml (read; `pytest tests/calc -k angular_impulse`: 9 passed)
verdict: pass-with-notes
---

# Review: Torque, angular impulse and conservation of angular momentum

The transcripts have no printed page numbers, so "p. n" is the PDF page. I checked every transcript citation against those pages, and every notes citation against the printed footers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph, "(34.1 transcript, p. 1)" | 34.1 p. 1 introduces τ_S = dL_S/dt as a second principle alongside F = dp/dt. It does not mention conservation; neither 34.1 nor any transcript of this lesson states "no torque, angular momentum conserved" in general (34.3 p. 2 says only that zero angular impulse leaves L constant). | "torque changes angular momentum, and when there is no torque, angular momentum is conserved (34.1 transcript, p. 1)" | Cite only the first half to 34.1, or move the citation: "(34.1 transcript, p. 1; notes, Section 19.4)". |
| 2 | warning | Section "A particle hits a pivoted ring", "lies on a frictionless table" | 34.5 p. 1: "this will be overhead view of a ring of radius r". No table and no friction are mentioned. | "A ring … lies on a frictionless table, pinned at a point P on its rim", cited "(34.5 transcript, pp. 1–3)" | The assumption is sensible (it removes friction torque and makes the motion horizontal), but it is the page's own. Say "seen from above (take the table to be frictionless)" or similar, so the citation does not cover it. The rest of the set-up is right: pivot P on the rim (p. 3: parallel axis distance r from the centre), moment arm r of the incoming object (p. 2), sticking (p. 2), contact point √2 r from P (p. 3). The geometry is consistent: with the centre at the origin and P = (0, −r), a line y = 0 is a distance r from P and meets the ring at (±r, 0), both √2 r from P. |
| 3 | warning | Worked example (b), "$L = mvL = 0.20 \times 6.0 \times 1.0$" and "$I = \frac{1}{3}ML^2 + mL^2$" | (page's own) | L is both the angular momentum and the rod length in one equation; M and m are rod and ball | Name the rod length ℓ or d (as the calcs file does, `d`), e.g. "$L = mv\ell = …$", "$I = \frac13 M\ell^2 + m\ell^2$". The symbols.json meaning for L on this page currently has to explain the clash ("also the magnitude of an angular momentum, as in L = mvL"); update it with the change. |
| 4 | info | "The notes do the same with a pivoted rod (notes, Example 19.7, pp. 19-21–19-25)" | Example 19.7 runs from p. 19-21 to the top of p. 19-26 (Eq. (19.5.46) and its last sentence are on 19-26). In it the object does not stick: it continues at v_i/2. | pp. 19-21–19-25 | "pp. 19-21–19-26". The angular momentum part (Eqs. (19.5.37)–(19.5.40)) is on pp. 19-22–19-24, so the present range covers what the page uses; optional. "Do the same" is fair (same principle: choose S at the pivot, momentum not constant because of the pivot force, notes p. 19-23). |
| 5 | info | Quiz 3 explanation; worked example (b) | Notes Example 19.7, p. 19-23: the gravitational forces on rod and object are parallel to r_S,cm and r_S,A during an instantaneous collision, so their torques about the pivot are zero. | Explanation names only the pivot force and the internal collision forces | Optionally add "and gravity, acting along the vertical through the pivot, has no torque at that instant". The answer itself is right. |
| 6 | info | `source.readings[0].location` | The page also cites Eqs. (19.5.20)–(19.5.29), which are in Section 19.7. | "Sections 19.3–19.6, 19.8 and 19.9, Example 19.7" | "Sections 19.3–19.9, Example 19.7". |
| 7 | info | Section "A particle hits a pivoted ring", the slip bracket | 34.5 p. 3: "The angular momentum of the ring is the angular momentum about the center of- … angular momentum about the center of mass, plus …", then "Icm ring plus m r squared", "the angular momentum about the particle", "mass of the ring was 1". | Bracket: the transcript says "angular momentum about the center of mass" where it means the moment of inertia | Confirmed: the slip is on p. 3 and the page's bracket is accurate. The other two slips on the same page ("angular momentum about the particle" for the particle's moment of inertia; "mass of the ring was 1" for m₁) are not repeated on the page, so no bracket is needed. |
| 8 | info | Callout "Equal areas in equal times" | Not in Lesson 34 or Chapter 19 (no mention of Kepler). | Gravity has no torque about the Sun, L constant, \|L\| = m r v⊥ = 2m dA/dt, hence Kepler's second law | Physics correct: dA/dt = ½ r v⊥, so m r v⊥ = 2m dA/dt. It is a standard result and the page's own addition (kind "note", uncited), which is acceptable. It fits 34.5 p. 1's remark that for central-force problems S is chosen at the centre. |

## Arithmetic and answer checks
- Formula "Torque and angular momentum: a particle": product rule, (dr_S/dt) × p = v × mv = 0, r_S × dp/dt = r_S × F = τ_S ✓. Transcript 34.1 p. 1 (product rule, v × mv = 0, second law), p. 2 (torque defined, equal to dL/dt) ✓, so `at="pp. 1–2"` ✓. Notes Eqs. (19.3.3)–(19.3.8) and (19.3.9) are on p. 19-9 ✓ (the derivation starts with (19.3.1)–(19.3.2) on p. 19-8, not cited, fine).
- "The rate of change of r_S is the velocity v, whatever S is": 34.1 p. 1 "no matter what the point s is" ✓; the page has already said S is fixed ✓.
- System: L_S = Σ r_S,j × p_j and dL/dt = Σ r_S,j × F_j (34.2 p. 1) ✓; internal torques cancel in pairs if the forces act along the joining line (p. 1) ✓; τ_ext = dL_sys/dt (p. 2) ✓. Notes Eqs. (19.5.2)–(19.5.3) p. 19-13, (19.5.4)–(19.5.6) p. 19-14, (19.5.9) p. 19-14 ✓. The link to torque-and-angular-acceleration goes to a page with a section "Internal torques cancel in pairs" ✓.
- τ_S,z = I_S α_z: notes Eq. (19.5.20) is on p. 19-18 (after the footer 19-17), Eq. (19.5.29) on p. 19-19 ✓.
- Angular impulse: 34.3 p. 1 (linear impulse, zero impulse → momentum unchanged) ✓, p. 2 (angular impulse = ΔL_S, zero → L constant, dependence on S) ✓. Notes Eqs. (19.4.1)–(19.4.2) p. 19-12 ✓; Section 19.9, Eqs. (19.5.47)–(19.5.48) p. 19-26 ✓. The page writes t_i, t_f (the notes' limits) where 34.3 writes 0 and t; same content.
- Conservation: Eqs. (19.3.14)–(19.3.16) p. 19-10 ✓; (19.5.35)–(19.5.36) p. 19-21 ✓. The "no isolated system has been found…experimental observation" remark is on p. 19-21 ✓.
- "For central forces, S is the centre of force (34.5 transcript, p. 1)": 34.5 p. 1, "We've examined central force problems in which we chose the point s to be the central point in which there was no torque" ✓. Fair attribution.
- Formula "Particle hits pivoted ring": L_i = m₂v_i r ✓ (p. 2); I_P = (m₁r² + m₁r²) + m₂(√2 r)² = 2(m₁ + m₂)r² ✓; m₂v_i r = 2(m₁ + m₂)r² ω_f (p. 3) ✓; ω_f = m₂v_i / (2(m₁ + m₂)r) (p. 4) ✓, so `at="pp. 3–4"` ✓. Pivot force has no torque about P (p. 1–2), internal torques cancel with ring + object as the system (p. 2) ✓.
- "Momentum is not conserved because of the pivot force": correct, and matches the notes p. 19-23 ("The external force means that momentum is not constant"). Check with the page's own rod example: before 0.20 × 6.0 = 1.2 kg m/s; after, ball 0.20 × (2.0 × 1.0) = 0.40 plus rod 1.2 × (2.0 × 0.5) = 1.2, total 1.6 kg m/s ≠ 1.2. The pivot supplies the difference ✓.
- Worked example (a): J = 2.0 × 0.50 = 1.0 kg m²/s ✓; ω = 1.0/0.25 = 4.0 rad/s ✓.
- Worked example (b): L = 0.20 × 6.0 × 1.0 = 1.2 kg m²/s ✓; I = ⅓ × 1.2 × 1.0² + 0.20 × 1.0² = 0.40 + 0.20 = 0.60 kg m² ✓; ω = 2.0 rad/s ✓; K before ½ × 0.20 × 36 = 3.6 J ✓; after ½ × 0.60 × 4.0 = 1.2 J ✓; lost 2.4 J = two thirds ✓.
- Quiz 1: index 0 ✓ (v × mv = 0; distractor "r_S is constant" is wrong because the particle moves). Quiz 2: 4.0 rad/s, index 2 ✓ (distractors 1.0 = J, 2.0, 8.0 = 2/0.25 plausible slips). Quiz 3: index 1 ✓ (momentum not conserved, as computed above; KE not conserved in a sticking collision). Quiz 4: index 0 ✓ (the collision force does have a torque about the pivot, 34.5 p. 2, so choice 3 is rightly wrong).
- Flashcards 1–3 ✓.
- calcs/8.01/torque-and-angular-impulse.yaml: all nine entries agree with my recomputation and pass. The `source` fields of the page-own rod entries cite reading5 (34.5), which has no rod; acceptable as "same method", but `reading1` (Example 19.7) would fit better (info).

## Coverage and order
- Page order: 34.1 → 34.2 → 34.3 → conservation (with 34.4 named) → 34.5, which is MIT's segment order ✓.
- 34.4 (bicycle wheel demo) is a video only; the page names it in one sentence and does not describe what happens in it, which is correct since there is no transcript to check.
- Notes: Sections 19.3, 19.4 (principle), 19.5, 19.6 (opening), 19.7 (fixed-axis result only), 19.8 and 19.9 (definition) are covered. Not covered: Example 19.4 (meteor flyby of Earth, p. 19-10), Example 19.8 (angular impulse on a steel washer, pp. 19-26–19-29), and the energy parts of Example 19.7. None is in the Lesson 34 videos; the meteor example would be a natural further example of a central force (info).
- Added by the page: worked example, Kepler note, quiz and flashcards.

## Licensing
- The segment pages carry CC BY-NC-SA 4.0. A grep found no "All rights reserved" or "Courtesy of" notice in the four transcripts, the 34.4 page or the chapter text. No figure is reused.
- No copied paragraphs. The closest wording is the notes' remark on p. 19-21 ("So far no isolated system has been encountered such that the angular momentum is not constant so our assumption that internal torques cancel is pairs can be taken as an experimental observation"), which the page paraphrases in one attributed sentence; acceptable.
- 34.5 is retold in the page's words with MIT's symbols (m₁, m₂, v_i, ω_f), which is appropriate for a cited derivation.
- Worked examples: (a) is original. (b), a clay ball sticking to the end of a rod on a pivot, shares its set-up with notes Example 19.7 (object striking a rod hanging from a frictionless pivot) but differs (sticking instead of v_i/2, own numbers, energy loss instead of swing height and mass ratio). It is a standard textbook situation and sufficiently rewritten. No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.01 Lecture 35: matches `_course.json` (lecture 35, "Rolling Kinematics", first segment 35.1 "Translation and Rotation of a Wheel"). "Rolling: translation and rotation together, linked by the condition for rolling without slipping" fits ✓.
- No `Callout kind="cosmology"`; the closing callout is kind "note", which is consistent with other 8.01 pages that have no real cosmology link (e.g. angular-momentum-rigid-body).
- Prerequisites angular-momentum-rigid-body (Lesson 33), momentum-and-impulse (Lesson 15) and torque-and-angular-acceleration (Lesson 31) exist ✓.
- `source.title` "Lesson 34: Torque and Angular Impulse (34.1–34.5)" matches `_course.json` and the segment pages ✓. The transcript PDFs are headed "MIT8_01F16_L33v01…v04"; that internal numbering differs from OCW's Lesson 34 and needs no mention.
- Not checked: the content of the 34.4 video.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the opening sentence now cites 34.1 for "torque changes angular momentum" and notes Section 19.4 (p. 19-10) for conservation.
- **Warning 2:** the 34.5 set-up now says "seen from above" (as in the transcript) and marks the frictionless table as an assumption in brackets.
- **Warning 3:** the rod's length in worked example (b) is now ℓ, so L is only the angular momentum (symbols and calcs updated).
- Info: Example 19.7 is cited as pp. 19-21–19-26; the notes' `location` now covers Sections 19.3–19.9; the rod entries in calcs cite Example 19.7; quiz 3's explanation adds that gravity has no torque about the pivot at that instant. Examples 19.4 and 19.8 are left out.
