---
page: content/year-1/8.01/rolling-kinematics.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-12-rotations-and-translation-rolling/35-1-translation-and-rotation-of-a-wheel/ (read; segment pages 35.1–35.5 read as saved HTML, each with the CC BY-NC-SA 4.0 licence link; OCW navigation lists the lesson as "Rolling Kinematics [35.1-35.5]"; the five transcript URLs in `source.readings` are the transcript links on their segment pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter20/ (read; Chapter 20 PDF extracted with pdftotext -layout; Sections 20.1–20.2.1 and Example 20.1, pp. 20-1 to 20-9, compared in full; page numbers from the printed footers "20-k" at the end of each page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2326c3a2f4df56c787c23ae916fd315c_oILq3xz_XtU.pdf (read; 35.1 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/60368eec56f805088b4c838e47176cf1_WxkwkGEVu-E.pdf (read; 35.2 transcript, 1 page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/feace693894ddf86681646be99ac83b8_lkeX42KQjac.pdf (read; 35.3 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/e1572dbf314502d452d8280587125e0b_1UD560RQ684.pdf (read; 35.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/be5ea5c19afff6b54c2cca921babfdbd_4r1xgrWbALg.pdf (read; 35.5 transcript, 2 pages)
  - content/year-1/8.01/_course.json, content/year-4/8.286/closed-universe-cycloid.mdx (read; leadsTo targets and the cosmology callout)
  - calcs/8.01/rolling-kinematics.yaml (read; `pytest tests/calc -k rolling`: 9 passed; `npm run content:check`: 0 errors, only warning was the missing review file)
verdict: pass-with-notes
---

# Review: Rolling kinematics

The transcripts have no printed page numbers, so "p. n" is the PDF page. I checked every transcript citation against those pages, and every notes citation against the printed footers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Coverage, section "The contact point" and the cycloid | 35.1 p. 1 sets the goal as "the position ..., the velocity ..., and the acceleration" of the rim point. Notes Example 20.1 (pp. 20-6 to 20-9) works out position, velocity and acceleration of a bead at distance b in both frames, Eqs. (20.2.19)–(20.2.38), and then sets b = R for Eq. (20.2.39). | Only the position for b = R (the cycloid) and the velocity of particular points. No acceleration, no general b. | Add a sentence or two: the acceleration is the same in both frames (A_cm = 0, Eq. (20.2.25)), V²/R towards the centre (Eq. (20.2.38), p. 20-9). So the contact point is at rest but is **not** unaccelerated: it accelerates upward at V²/R. That point is a common misconception and fits "it stops for an instant and turns back up". Optionally mention that a point at b < R traces a smoother curve (Eqs. (20.2.30)–(20.2.31), p. 20-8). |
| 2 | warning | Formula "The contact point", `cite="reading6" at="p. 1"` | 35.5 p. 1 gives the vector sum and says the magnitudes are equal, so the sum is 0. The component form (V_cm − Rω_cm) î = 0 is notes Eq. (20.2.18), p. 20-5 (from Eq. (20.2.9), p. 20-4). | The component form, cited to the transcript only | Keep the citation to the transcript and add the notes in `at` or the prose. The prose already says "notes, Eq. (20.2.18), p. 20-5", so this is a small fix: e.g. cite `reading1` at "Eq. (20.2.18), p. 20-5; 35.5 transcript p. 1". |
| 3 | info | Section "Rolling, slipping and skidding" | Notes list Case 2 = skidding (Eqs. (20.2.14)–(20.2.15)) and Case 3 = slipping (Eqs. (20.2.16)–(20.2.17)). 35.4 takes slipping second and skidding third. | Follows the transcript order (slipping, then skidding) | Fine; the citation range (20.2.12)–(20.2.17) covers both. No change needed. |
| 4 | info | Same section | 35.3 p. 2 names the cases "rolling without slipping, slipping, or sliding"; 35.4 calls the third one "skidding". | "skidding" | Correct, uses the 35.4 and notes term. |
| 5 | info | Notes 20.2.1, p. 20-6 | Because the contact point is at rest, any friction there is static friction, with a direction that depends on the other forces. | Not mentioned | Optional. This belongs naturally to Lesson 36 ("Friction on a rolling wheel"), which the leadsTo names. One forward sentence would be enough. |
| 6 | info | Cosmology callout | 8.286 Lecture 9 (closed-universe-cycloid.mdx): ct = α(θ − sin θ), a/√k = α(1 − cos θ), a wheel of radius α; a = 0 at θ = 0 and 2π. | Same equations, Big Bang and Big Crunch where the point touches the ground | Correct and consistent with the 8.286 page. The callout does not say whose result it is; optionally add "(Guth, 8.286 Lecture 9)". The 8.286 cycloid starts with the point on the ground (θ = 0), this page's starts at the top; same curve, shifted by half a turn. No change needed. |
| 7 | info | `source.title`, readings | OCW: "Rolling Kinematics [35.1-35.5]"; transcript links and chapter link as listed | Same | ✓ |

## Arithmetic and answer checks
- Formula "Velocity of a point on the wheel": v_P = V_cm + v'_P matches 35.1 p. 1 (written on the board as V + v_cm,P) and notes Eq. (20.2.1), p. 20-2 ✓. Notation v'_P follows the notes' primed convention.
- Rim speed R dθ/dt = Rω: 35.2 p. 1 ✓; notes Eq. (20.2.5) on p. 20-3 ✓.
- Ground-frame picture (35.3 p. 1): top adds, bottom cancels, front and back at right angles ✓.
- ΔX_cm = V_cm Δt and Δs = RΔθ: notes Eq. (20.2.10) is on p. 20-4 and (20.2.11) on p. 20-5, so "pp. 20-4–20-5" ✓. Eqs. (20.2.12)–(20.2.17) all on p. 20-5 ✓. Transcript: rolling without slipping pp. 1–2, slipping p. 2, skidding pp. 2–3 ✓.
- Contact point: Eq. (20.2.18) on p. 20-5 ✓; "instantaneously at rest" 35.5 p. 1 ✓; top at 2V_cm 35.5 p. 2 ✓.
- Cycloid, Eq. (20.2.39) on p. 20-9 ✓ (with θ = 0 at the top at t = 0, as in the notes, Eq. (20.2.21)). Checked: dx/dt = V(1 + cos φ), dy/dt = −V sin φ with φ = Vt/R. At φ = 0 (top): (2V, 0) ✓. At φ = π: x = πR, y = 0, velocity (0, 0) ✓, a cusp, so "stops for an instant and turns back up" ✓.
- Plot: x = s + sin s, y = 1 + cos s is Eq. (20.2.39) in units of R with s = Vt/R ✓. s from 0 to 12.566 = 4π gives two turns, x from 0 to 4π ≈ 12.57 inside the domain [0, 13] ✓; y from 0 to 2 inside [0, 4.6] ✓. Point (π, 0) "at rest on the ground" ✓ (also at 3π, unlabelled). Point (0, 2) "top: speed 2V" ✓. Caption agrees.
- Worked example (a): ω = 6.0/0.35 = 17.14 ≈ 17 rad/s ✓; top 12 m/s ✓. Front point: for a wheel rolling to the right (clockwise rotation), at the rightmost point the CM-frame velocity is (V cos φ, −V sin φ) at φ = π/2 = (0, −V), **straight down** ✓. Ground velocity (6.0, −6.0) m/s: speed √72 = 8.49 ≈ 8.5 m/s, 45° below the horizontal ✓. Consistent with 35.3 p. 1, where the back point's CM velocity "is pointing up".
- Worked example (b): Rω = 0.30 × 40 = 12 m/s < 20 m/s, skidding ✓; v_contact = V − Rω = +8.0 m/s, forward ✓ (Eq. (20.2.9) sign convention, î forward).
- Worked example (c): Rω = 0.30 × 50 = 15 m/s > 2.0 m/s, slipping ✓; v_contact = 2.0 − 15 = −13 m/s, i.e. 13 m/s backward ✓.
- Quiz 1: 6.0/0.30 = 20 rad/s, index 1 ✓ (distractors 1.8 = VR, 0.05 = R/V, 6.0 = V: plausible slips). Quiz 2: index 1 ✓. Quiz 3: V_cm = 20 > Rω = 12, skidding, index 2 ✓; contact point slides forward at 8 m/s ✓. Quiz 4: 2V_cm, index 1 ✓. All explanations correct.
- Flashcards: all three correct.
- calcs/8.01/rolling-kinematics.yaml: all nine entries agree with my recomputation and pass. One info point: `cycloid-contact` sums y(π), a middle term multiplied by 0, and V(1 + cos π) (= v_x at π). It does check y = 0 and v_x = 0, but the 0-multiplied term is dead and v_y = −V sin π is not checked. Clearer as two or three separate identities. The source citations in the calcs file (Eq. (20.2.9), p. 20-4; reading4 p. 1 for the front point; reading6 p. 2 for 2V) are correct.

## Coverage and order
- 35.1 (two frames, vector triangle, law of addition of velocities) ✓; 35.2 (CM frame: pure circular motion, speed Rω) ✓; 35.3 (ground frame: add the same V to every point; top, bottom, front, back) ✓; 35.4 (three conditions from ΔX_cm vs Δs) ✓; 35.5 (contact point at rest, top at 2V) ✓. The page follows MIT's segment order.
- Notes Section 20.2 (Eqs. (20.2.1)–(20.2.18)) ✓ in substance. The unit-vector and Cartesian decomposition (Eqs. (20.2.6)–(20.2.8)) is not reproduced; the page reasons with directions instead, which is enough here.
- Notes Example 20.1: only the b = R result (Eq. (20.2.39)) is used; velocity and acceleration of the bead and the general b case are left out (row 1).
- Notes 20.2.1 static-friction remark omitted (row 5). Section 20.1 and Figure 20.1 belong to the earlier rigid-body page.
- Added by the page: the cycloid Plot, the worked example, the cosmology callout, quiz and flashcards.

## Licensing
- All five segment pages and the chapter page carry CC BY-NC-SA 4.0. A grep found no "All rights reserved" or "Courtesy of" notice in the transcripts or the chapter text. No figure is reused; the Plot is generated from the formula.
- The notes' Copernicus epigraph (p. 20-1) is not reproduced or quoted ✓.
- No copied paragraphs. Closest wording: "spinning faster than it moves" (flashcard 2) against 35.4's "spinning faster than it's translating"; "instantaneously at rest" and "law of addition of velocities" are standard terms. Acceptable.
- The worked examples are original: a bicycle, a braking car and a wheel on ice with the page's own numbers. MIT's Example 20.1 is a bead on a spoke (V = 5 m/s, R = 0.25 m, b = 0.125 m), not used. No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.01 Lecture 36: matches `_course.json` (lecture 36, "Rolling Dynamics", first segment "36-1-friction-on-a-rolling-wheel") ✓. leadsTo 8.286 Lecture 9: matches closed-universe-cycloid.mdx (lecture 9) ✓; the "why" is correct.
- Prerequisites `rigid-body-kinematics` (Lesson 28, introduces the centre-of-mass frame) and `relative-velocity-and-recoil` (Lesson 18, law of addition of velocities) both exist and fit.
- No lecturer slips repeated. (35.2 p. 1 says "d phi dt" and then names the angle theta; the page uses θ throughout, which is fine.)
- The notes' Eq. (20.2.6) as extracted reads r̂ = sin θ î − cos θ ĵ, while Eq. (20.2.28) uses sin θ î + cos θ ĵ; uncertain whether this is a typo in the notes or an extraction artefact. The page does not use either, so no impact.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** a sentence now gives the accelerations: with constant V_cm every rim point accelerates at V_cm²/R towards the centre, the same in both frames (notes, Eqs. (20.2.25) and (20.2.38), pp. 20-7–20-9), so the contact point, though at rest, accelerates upward.
- **Warning 2:** the contact-point formula now cites the notes, Eq. (20.2.18), p. 20-5, and the text says the transcript shows the two velocities cancelling.
- Info: the cosmology callout names 8.286 Lecture 9; the calcs entry `cycloid-contact` is split into `cycloid-height` and `cycloid-vx`. The other info items are left as they are.
