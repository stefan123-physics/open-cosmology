---
page: content/year-1/8.01/circular-motion-acceleration.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/10-1-circular-motion-2013-acceleration/ (read; segment page; its navigation shows Lesson 10 = segments 10.1, 10.2, 10.3, 10.4)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/10-2-angular-acceleration/ (read; segment page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/10-3-worked-example-angular-position-from-angular-acceleration/ (read; segment page, not cited by the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/7b3919589b0659bbc7fd6df11cdfa168_lufK0UlJ7aE.pdf (read; 10.3 transcript, 1 p.; not cited by the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/10-4-review-of-rotational-kinematics/ (read; text-only summary page, not cited by the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read; Chapter 6 PDF, printed pp. 5–7 and 6-10 to 6-15 checked page by page with pdftotext; printed page = PDF page − 1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/0d45daac5bb25ee5cc7a94fccd6b9860_0PrwAbgoMA.pdf (read; 10.1 transcript, 2 pp.; p. 1 ends at "And that is our acceleration.")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/5eb9adeee43f9025d6ce5a4b0a51d574_prCwfSiWuq0.pdf (read; 10.2 transcript, 3 pp.; p. 1 ends with case 1a, p. 2 with the ω_z graph of case 2a, p. 3 = rest of 2a and 2b)
verdict: needs-changes
---

# Review: Circular motion: tangential acceleration and angular acceleration

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "From angular acceleration back to angle", text before the formula and the `<Formula label="Constant angular acceleration">` (reading1, "Example 6.3, p. 14 (method)") | Chapter 6 never states ω_z = ω_z,0 + α_z t or θ = θ₀ + ω_z,0 t + ½α_z t². Example 6.3 (p. 6-14) integrates a non-constant α_z(t) = b(1 − t/t₁) and gets ω_z(t₁) = bt₁/2 and θ(t₁) − θ(0) = bt₁²/3. Segment 10.3 integrates a non-constant a_θ = A − Bt to v_θ and arc length s. | "For a **constant** α_z ... they [the notes] give the familiar forms:" followed by the constant-α formulas cited to Example 6.3. | Do not attribute the constant-α forms to the notes. Say they follow from the same integrations (as in Lesson 2 for a constant a_x) and cite that, or derive them in a sentence and cite the integration step to 10.3 (new reading) or Example 6.3 "(method; the constant case is not worked there)". Also fix `constant-alpha-angle` in the calcs file (row 2 under Notes). |
| 2 | warning | frontmatter `source.readings`, the last section | Lesson 10 has four segments: 10.1, 10.2, **10.3 "Worked Example - Angular Position from Angular Acceleration"** (video, transcript as above) and **10.4 "Review of Rotational Kinematics"** (text summary). | Only 10.1 and 10.2 are listed; source title says "(10.1–10.2)". The last section covers the idea of 10.3 (integrate the acceleration back to velocity and position) but cites only the notes. | Add the 10.3 transcript as a reading and cite it in the last section (note that 10.3 works with the tangential components a_θ, v_θ and arc length s = rθ, not with α_z and θ directly). Add 10.4 to readings or mention that the summary list on 10.4 is covered (it also gives a_r = −v²/r, already on the Lesson 9 page). Update the source title to "(10.1–10.4)". |
| 3 | warning | `<Formula label="Speeding up or slowing down">`, cite reading1 "p. 13" | Notes p. 6-13 list the four cases (i)–(iv) in words with signs of dθ/dt and d²θ/dt²; they do not write a criterion ω_z α_z ≷ 0. The transcript also argues case by case. | Shows the product criterion as if it were a notes equation. | Keep the formula but mark it as the page's summary of the four cases, e.g. `at="summarises the four cases, p. 6-13"`, or make it running text. |
| 4 | warning | `<Formula label="Radial component">` "a_r = −r(dθ/dt)² ≤ 0", cited to transcript 10.1 | Notes Eq. (6.3.8), p. 7: a_r = −r(dθ/dt)² = −rω² **< 0**. Transcript 10.1 p. 2: "always ... a non-zero inward radial component". | "≤ 0" and "never positive"; cites only the transcript. | The page's "≤ 0" is the more accurate statement (a_r = 0 at the instant dθ/dt = 0 in the "stops and turns back" case the page itself describes), but it differs from both sources without saying so. Add a short bracket ("the notes write < 0; it is zero at the instant the object stops") and consider citing Eq. (6.3.8), p. 7 as well. Also soften "there is always an inward pull" in the same paragraph, which contradicts that instant. |
| 5 | info | Bracketed remark on "clockwise", section "Speeding up and slowing down" | Transcript 10.1 p. 2: "when d squared theta dt squared is positive, it means d theta dt is increasing. And so if this object is going in this clockwise direction, we call that speeding up." | The page's first case assumes dθ/dt > 0 and says the lecturer's "clockwise" should be anticlockwise. | Justified: with θ increasing anticlockwise (notes 6.5.1, p. 6-10), an increasing dθ/dt means speeding up only if dθ/dt > 0, i.e. anticlockwise; for clockwise motion it would be slowing down (case 2a in 10.2). Uncertain only in that the board drawing (video) was not compared, so the arrow the lecturer pointed at is unknown; the wording "calls the first case motion" is fine. |
| 6 | info | Section "When dθ/dt is not constant" | Transcript 10.1 p. 1: "if d theta dt is positive, for instance, the object is speeding up ..., or if d theta dt is negative, the object is slowing down" (a slip: the sign that decides this is that of d²θ/dt² relative to dθ/dt). | The page silently states it correctly. | Optional per writing rule 4: no bracket is strictly needed since the page does not quote that sentence; leave as is or add a short note. |
| 7 | info | Section "Four cases for the signs" | Notes p. 6-13 group the cases by the direction of α⃗ (i) ω>0, α>0; (ii) ω<0, α>0; (iii) ω>0, α<0; (iv) ω<0, α<0, and the lead-in says "for the direction of the angular velocity" (should be acceleration). Transcript order: 1a, 1b, 2a, 2b (grouped by ω_z). | Table follows the transcript order; "the notes list them with the same signs". | Correct as written. The table matches both sources row by row (see below). |
| 8 | info | Citation format | Printed footers from p. 10 on are "6-10", "6-11", … | "pp. 12–13", "p. 13", "p. 14"; the Lesson 8 page uses "p. 6-11". | Use "pp. 6-12 to 6-13", "p. 6-13", "p. 6-14" for consistency with the other 8.01 pages and the printed footers. |
| 9 | info | Section "The product rule gives both parts" | Notes Eqs. (6.3.4)–(6.3.5) evaluate dθ̂/dt via Cartesian components and the chain rule; transcript 10.1 says "we've already analyzed this piece" (Lesson 9). | Uses dθ̂/dt = −(dθ/dt) r̂ from Lesson 8 and says the notes reach it via Cartesian components. | Correct and fairly stated; the Lesson 8 page has this formula (Eqs. (6.2.4), (6.2.7), p. 3, verified on printed p. 3). |

All other formula citations were checked and are correct: Eq. (6.3.1) p. 5 (notes write a_r r̂ + a_θ θ̂, same as the page); Eqs. (6.3.2), (6.3.3), (6.3.6), (6.3.7) all on p. 6; the "Angular acceleration" formula (α⃗ = d²θ/dt² k̂, α_z = d²θ/dt² = dω_z/dt) is said on transcript 10.2 p. 1; Eq. (6.5.7) is on p. 6-12 and Eq. (6.5.8) (α = |d²θ/dt²|) on p. 6-13, SI unit rad s⁻² on p. 6-12. "The lecture goes through all four cases on pp. 1–3 of the transcript" is correct. "The notes work an example with an angular acceleration that falls linearly to zero" is correct (Example 6.3, p. 6-14).

## Arithmetic and answer checks
- Worked example (r = 50 m, d²θ/dt² = 0.020 rad/s², t = 10 s): dθ/dt = 0.20 rad/s; v = 10 m/s; a_θ = 1.0 m/s²; a_r = −50 × 0.04 = −2.0 m/s²; |a| = √5 = 2.236 ≈ 2.24 m/s²; arctan(0.5) = 26.57° ≈ 26.6°; equal parts when rα = rα²t², t = 1/√α = 7.071 ≈ 7.07 s; at t = 0, a_r = 0 so the acceleration is purely tangential. All correct.
- Angle turned: ½ × 0.020 × 100 = 1.0 rad; arc 50 m. Correct.
- Plot: radial curve rα²t² = 0.02 t² at the default values, 2.0 at t = 10 (matches the point), 8.0 at t = 20 (inside the y-range 0–10); tangential line at 1.0. Caption's crossing time t = 1/√α is correct for any r. Correct.
- Quiz 1 (answer 2, between inward radius and forward tangent): correct.
- Quiz 2 (answer 2, 6.0 m/s²): 3.0 × 2.0 = 6.0. Correct.
- Quiz 3 (answer 2, clockwise and slowing down): matches case 2a of transcript 10.2 and case (ii) of notes p. 6-13. Correct.
- Quiz 4 (answer 1, rad/s²): correct (notes p. 6-12).
- Quiz 5 (answer 1, when dθ/dt is constant): correct; distractor "when dθ/dt is zero" is rightly wrong (a_θ depends on d²θ/dt²).
- Flashcards: all four correct.
- Four-cases table against notes p. 6-13 and transcript 10.2: row 1 (ω>0, α>0, speeding up; v_x>0, a_x>0) = case 1a / (i); row 2 (ω>0, α<0, slowing, "braking") = case 1b / (iii); row 3 (ω<0, α>0, slowing, stops and turns back; v_x<0, a_x>0) = case 2a / (ii); row 4 (ω<0, α<0, speeding up; v_x<0, a_x<0) = case 2b / (iv). All match. The ω_z-against-time graph description matches transcript p. 2.
- calcs/8.01/circular-motion-acceleration.yaml: `npm run calc:test` passes (974 passed). The identities were checked by hand: θ(t) = 0.3t³ + 0.5t gives θ̇ = 0.9t² + 0.5, θ̈ = 1.8t, and the x-component check uses θ̂_x = −sin θ, r̂_x = cos θ, consistent with Eq. (6.3.6). Two problems:
  - `constant-alpha-angle` has `origin: mit` and `source: Example 6.3, p. 14`; MIT does not give this formula (difference 1). Change to `origin: page-own` and fix the source when the page is fixed.
  - `car-omega`, `car-angle-turned` and `car-arc` cite "p. 14"/"Example 6.3" as their source; these are page-own numbers using the constant-α forms, so the same citation fix applies. The header comment says "segments 10.1–10.2"; update if 10.3/10.4 are added.
- data/symbols.json meanings scoped to `circular-motion-acceleration` (α, ω, a, d, v, r, t, a_r, a_θ, α_z, ω_z, ω_z,0, θ₀, v_x, a_x): all fit their use on the page; units correct (rad/s², rad/s, m/s², m, s). `npm run content:check` reports no symbol warnings for this page (only "no review file yet"). The α meaning ("alone, its size |d²θ/dt²|") also fits the slider label in the graph.

## Coverage and order
- Page order follows MIT: 10.1 (radial part recalled, product rule, components, speeding up / slowing down), then 10.2 (angular acceleration, analogy with v_x, a_x, four cases, ω_z graph). The worked example and graph inserted between them are original additions.
- Notes Section 6.3 and Section 6.5.2 are fully covered. Notes Example 6.1 (θ = At³ − Bt, p. 7) is not used; not required.
- Missing: segment 10.3 (worked example, integrating a_θ = A − Bt to v_θ(t) = v_θ0 + At − ½Bt² and Δs = v_θ0 t + ½At² − ⅙Bt³) is only covered in spirit by the last section, which does not cite it, and the page never mentions that one can integrate the tangential component to get the arc length. Segment 10.4 (summary list) is not cited. See difference 2.
- Repetition with Lesson 9: modest and justified. The radial component formula appears again (Lesson 9 page already cites Eq. (6.3.8), p. 7), but here it is part of the general result and is not re-derived; the page refers back to Lessons 8 and 9 instead. No needless repetition found.
- The page has no `Callout kind="cosmology"`; that is acceptable, there is no strong cosmology link here.

## Licensing
- No "rights reserved" or "Courtesy of" notices in Chapter 6, the three transcripts, or the segment pages (grep checked). No OpenStax or LibreTexts material.
- No verbatim copying found. Two close paraphrases of short standard phrases: "Both unit vectors turn as the object moves, so neither is constant in time" (notes p. 6: "change direction and hence are not constant in time") and the wording of the product rule (transcript 10.1 p. 1); both are fine as standard terminology.
- The worked example (car on a 50 m track) is original; Example 6.3 is used only for its method and not reproduced.

## Notes
- leadsTo Lesson 11 ("Newton's 2nd Law and Circular Motion", title confirmed in `_course.json` and the OCW navigation): the reason given (radial force supplies the centripetal part, tangential force changes the speed) is consistent with the notes (p. 6 mentions "the presence of some tangential force"; Section 6.4 links a_θ = 0 to zero tangential force). I did not read the Lesson 11 transcripts, so its exact content is unverified.
- The claims about Lesson 8 (angular velocity vector ω⃗ = (dθ/dt) k̂; dθ̂/dt = −(dθ/dt) r̂) and Lesson 9 (radial part) were checked against those pages and are correct.
- Videos were not compared (owner decision); the "clockwise" remark is judged from the transcript only.

## Resolution (2026-11-15, by the page author)

- **Error 1 fixed:** the constant-α formulas are no longer credited to the notes. The section now presents segment 10.3's worked example (a_θ = A − Bt integrated to v_θ(t) and the arc length s(t), new formula citing the 10.3 transcript, p. 1), mentions the notes' Example 6.3 (p. 6-14) as the same method, and gives the constant-α case as the page's own special case (B = 0). In the calcs file `constant-alpha-angle` is now `page-own`; `car-omega`, `car-angle-turned` and `car-arc` cite the 10.3 method; a new identity `integration-103` checks 10.3's integration.
- **Warning 2 fixed:** source title now (10.1–10.4); the 10.3 transcript is reading4; 10.4 (text page) is a reference (`seg104`) and is cited for a new review formula of the two components.
- **Warning 3 fixed:** the "speeding up or slowing down" formula is introduced as the page's own summary of the four cases the notes list in words, cited as "the four cases, p. 6-13".
- **Warning 4 fixed:** a bracket explains that the notes write a_r < 0 and the lecturer "non-zero", while a_r = 0 at an instant of rest, hence ≤ 0; "always an inward pull" softened (also in the summary).
- Info 8: notes page numbers now in the printed "6-12"/"6-13"/"6-14" style. Info 6 (the lecturer's slip about the sign of dθ/dt) left without a bracket, as the page states the rule correctly.
- New symbol meanings for v_θ, v₀, A, B, t′ and s on this page.

Status set to `reviewed`.
