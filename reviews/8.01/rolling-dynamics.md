---
page: content/year-1/8.01/rolling-dynamics.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-12-rotations-and-translation-rolling/36-1-friction-on-a-rolling-wheel/ (read; segment pages 36.1–36.5 read as saved HTML, each with the CC BY-NC-SA 4.0 licence link; OCW navigation lists the lesson as "Lesson 36: Rolling Dynamics [36.1-36.5]"; the four transcript URLs in `source.readings` are the transcript links on their segment pages; 36.3 "Spool Demo" is a video page with no transcript)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter21/ (read; Chapter 21 PDF extracted with pdftotext -layout; Sections 21.1–21.5 and Examples 21.3–21.4, pp. 21-1 to 21-21, compared; page numbers from the printed footers "21-k" at the end of each page, checked against the table of contents and single-page extraction)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/7a68bd30efad5dfb2ecc00de312bd1f5_hxa6jAYA980.pdf (read; 36.1 transcript, video L36v02, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/bec126e6571dd0e2140215548dea4a59_CfTLS6YYPms.pdf (read; 36.2 transcript, video L36v03, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/761f3fec9008f98a8a2e68489441bc55_TvdmaZR6m8Q.pdf (read; 36.4 transcript, video L36v05, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/8df42d0ddfc99ab52dcced4017b8d2ec_RX88J2e4W0M.pdf (read; 36.5 transcript, video L36v04, 1 page)
  - content/year-1/8.01/_course.json (read; leadsTo target)
  - calcs/8.01/rolling-dynamics.yaml (read; `pytest tests/calc -k rolling-dynamics`: 10 passed)
verdict: needs-changes
---

# Review: Rolling dynamics

The transcripts have no printed page numbers, so "p. n" is the PDF page. Notes citations were checked against the printed footers (the PDF page is footer + 1, since PDF page 1 is the contents page).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Section "A yo-yo pulled along the ground", before the formula "Pull and friction on the yo-yo": "(p. 2; notes, Example 21.3, pp. 21-13–21-15)"; also `source.readings[0].location` "Examples 21.3 and 21.4" | Notes Example 21.3 (pp. 21-13 to 21-16) is a **different problem**: a yo-yo released from rest that **falls** on its vertical string (tension T = mg/(1 + 2b²/R²), Eq. (21.6.25); a_y = 2b²g/(R² + 2b²), Eq. (21.6.27); energy check Eq. (21.6.34)). Chapter 21 has no yo-yo pulled along the ground; that problem is only in the 36.4 transcript. | Cites Example 21.3 as the notes' version of the pulled yo-yo | Drop the notes citation here and cite 36.4 only. If the notes example is worth keeping, mention it as a separate, related case ("the notes' Example 21.3 treats a yo-yo falling on its string"), and fix `location` accordingly. |
| 2 | error | Section "Down an incline", "(pp. 2–3; notes, Example 21.4, pp. 21-15–21-20)" | Example 21.4 starts on p. 21-16 (contents page: "Example 21.4 ... 16"; its heading comes after the footer "21-15") and runs to p. 21-21 (Eqs. (21.6.59)–(21.6.60) follow the footer "21-20"). | pp. 21-15–21-20 | Change to "pp. 21-16–21-21". Note also that Example 21.4 treats only the uniform cylinder (a_x = (2/3) g sin φ, Eq. (21.6.42), p. 21-17), not general I_cm; "for the uniform cylinder" would make the cross-reference exact. |
| 3 | warning | Order: section "Two equations for a rolling body" placed before "Down an incline: the torque method" | MIT order is 36.1, 36.2, 36.3, 36.4, 36.5; the general statement (analyse torque about the CM and F = mA_cm separately) is 36.5, the last segment (although its video id L36v04 shows it was recorded before the yo-yo, L36v05). 36.2 p. 1 itself introduces the split into translation and rotation. | 36.5's principle comes second, before 36.2 | The reordering is sensible pedagogically (a general rule before its examples) and the section does cite "36.5 transcript", but the page does not say it departs from MIT's order. Add a short bracket, e.g. "(MIT states this general rule last, in 36.5; it is put first here)". |
| 4 | warning | Yo-yo setup: "the string leaves the bottom of the inner spool horizontally ... (36.4 transcript, p. 1)" | 36.4 p. 1 says only that the string is "wrapped around the spool" and pulled; it does not say from where. The geometry follows from p. 2: friction gives a torque in +k̂, the pull a torque in −k̂ ("minus b times the pulling force F"), which holds only if the string leaves the **bottom** of the axle (from the top both torques would have the same sign). | States the bottom geometry as said on p. 1 | Physics is correct. Say it is read off the torque signs (p. 2) and presumably the 36.3 demo, rather than citing p. 1 for it. |
| 5 | warning | Yo-yo section: no statement of the outcome | 36.4 p. 1 calls it "a very unusual problem" after the demo (36.3). The result F = f_s (R + I/mR)/(b + I/mR) > f_s means a = (F − f_s)/m > 0: the yo-yo rolls **towards** the puller, and friction points backward. | Friction "backward" is assumed in the force list; the direction of motion is never stated | Add one sentence: since F > f_s, the yo-yo accelerates in the direction of the pull and winds up the string, which is the surprise the demo shows; the assumed backward friction comes out positive, so the assumed direction was right. |
| 6 | warning | Worked example (a): "in general μ_s ≥ (1/3) tan φ for a cylinder" | This is notes Eq. (21.6.47), p. 21-18 (from Eqs. (21.6.44)–(21.6.46)). | Stated without a citation | Cite notes Eq. (21.6.47), p. 21-18. The number itself is right (see below). |
| 7 | warning | Callout "Galileo's rolling balls" | Not in 36.1–36.5 or Chapter 21. | Historical claim with no source; 5/7 g sin φ stated for a ball | The physics is right for a uniform ball rolling on a flat surface, and the t² law does survive (constant acceleration). But the claim is uncited, and Galileo's ball rolled in a groove, where it touches two edges at a radius r < R and accelerates at g sin φ/(1 + (2/5)R²/r²), less than 5/7 g sin φ. Either add a reference (Two New Sciences, 1638, Third Day) and "on a flat surface", or soften to "a ball rolling on a flat incline". |
| 8 | info | Section "Down an incline", formula "Rolling down an incline: the equations" | 36.2 p. 1 says "mg sine phi minus the friction force ... equal to the x component of the acceleration" (the m is dropped in speech); notes Eq. (21.6.37) has M a_x. | m a_x | Correct; no change needed (slip of speech). Likewise 36.4 p. 2 "F minus F equals ma" and "Icm m/R" are speech slips for F − f_s and I_cm/(mR); the page has the right forms. |
| 9 | info | "which agrees with the energy method (p. 3; notes, Section 21.5, Eq. (21.5.3), p. 21-7 ...)" | 36.2 p. 3: "And this agrees with our energy method." ✓. The notes' explicit energy check for the incline is Example 21.4, Second Approach, Eqs. (21.6.48)–(21.6.51), pp. 21-18–21-19. | Cites Eq. (21.5.3) | The claim is verified and the citation of (21.5.3) on p. 21-7 is correct. Optionally add the Example 21.4 energy approach as the direct parallel. |
| 10 | info | Section "Friction on a rolling wheel": "Gravity acts at the centre of mass and the normal force points through it, so neither has a torque ... (pp. 1–2)" | 36.1 p. 1 says gravity acts at the CM and that "it's precisely the static friction that is producing a torque"; the explicit "normal force produces no torque" argument is in 36.2 p. 2. | Cites 36.1 pp. 1–2 | Acceptable; optionally add "36.2 p. 2". |
| 11 | info | Section "Two equations": "notes, Section 21.3, pp. 21-2–21-6" | Section 21.3 begins on p. 21-1 (heading and Eq. (21.3.1) before the footer "21-1") and ends on p. 21-6. | pp. 21-2–21-6 | Change to pp. 21-1–21-6. Eqs. (21.4.1) on p. 21-6 and (21.4.4) on p. 21-7 ✓; Eq. (21.5.3) on p. 21-7 ✓. |
| 12 | info | Segment 36.3 mention | 36.3 (spool demo) comes before 36.4; the 36.4 transcript opens "we saw a demo of this". | Mentioned after the yo-yo derivation | Fine, but "Segment 36.3, just before this example in MIT's order, shows ..." would keep the order clear. |
| 13 | info | `source`, readings | Titles, segment URL and transcript URLs match OCW | Same | ✓ |

## Arithmetic and answer checks
- Formula "Translation and rotation": F^ext = mA_cm is Eq. (21.4.1), p. 21-6 ✓; τ_cm,z = I_cm α_z is Eq. (21.4.4), p. 21-7 ✓; 36.5 p. 1 gives the same split ✓.
- Formula "Rolling down an incline: the equations": translational equation 36.2 p. 1 ✓, f_s R = I_cm α and a_x = Rα p. 2 ✓ (notes Eqs. (21.6.37), (21.6.39)). Directions: friction up the slope, torque from friction forward-spinning ✓.
- Formula "Acceleration down the incline": a_x = mg sin φ/(m + I_cm/R²), 36.2 p. 3 ✓; f_s = I_cm a_x/R² as in p. 2 ✓. Recomputed by substitution ✓ (calcs `incline-a`).
- Formula "Speed at the bottom": v = √(2 s a_x), s = h/sin φ, giving √(2mgh/(m + I_cm/R²)), 36.2 p. 3 ✓ (calcs `incline-v`). For the uniform cylinder this gives √(4gh/3), notes Eq. (21.6.43) ✓.
- Formula "The yo-yo equations": F − f_s = ma and f_s R − bF = I_cm α, 36.4 p. 2 ✓; a = Rα, p. 2 ✓. Torque signs checked with k̂ into the page (î forward, ĵ down): friction −f_s î at r = R ĵ gives +f_s R k̂; pull F î at r = b ĵ gives −bF k̂ ✓, so the string leaves the bottom of the axle ✓ (row 4).
- Formula "Pull and friction on the yo-yo": eliminating a gives f_s(R + I/(mR)) = F(b + I/(mR)) ✓, 36.4 p. 2 ✓ (calcs `yoyo-formula`). Friction direction: f_s = F(b + I/mR)/(R + I/mR), positive and less than F, so friction does point backward and a > 0 ✓.
- Formula "Maximum pull": f_s ≤ μ_s N, N = mg, 36.4 p. 3 ✓.
- Worked example (a): g sin 30° = 4.9 m/s² ✓. Sphere 4.9/1.4 = 3.50 ✓; cylinder 4.9/1.5 = 3.267 ≈ 3.27 ✓; hoop 4.9/2 = 2.45 ✓. Cylinder friction f_s = ½ m × 3.267 = 1.633 m N ✓ (equals (1/3) mg sin φ, notes Eq. (21.6.44)). Normal force mg cos 30° = 8.487 m N ✓. μ_s ≥ 1.633/8.487 = 0.1925 ✓ = tan 30°/3 = 0.19245 ✓. "≥ 0.19" rounds the bound down; "≥ 0.192" or "about 0.19" would be stricter (info). The 1.63 m figure is not in the calcs file (info).
- Worked example (b): I/(mR) = R/2 = 0.025 m ✓; μ_s mg = 0.40 × 0.20 × 9.8 = 0.784 N ✓; ratio 0.075/0.045 = 1.667 ✓; F_max = 1.307 ≈ 1.31 N ✓; a = (1.307 − 0.784)/0.20 = 2.61 ≈ 2.6 m/s² ✓. Cross-check through the torque equation: (0.784 × 0.050 − 0.020 × 1.307)/(½ × 0.20 × 0.050²) = 0.01307/0.00025 = 52.3 rad/s², Rα = 2.61 m/s² ✓.
- Quiz 1: zero, index 0 ✓ (36.1 p. 1). Quiz 2: sphere, index 2 ✓; ratios 2/5, 1/2, 1 ✓. Quiz 3: static friction, index 2 ✓, explanation correct (36.2 p. 2). Quiz 4: (2/3) × 9.8 × 0.5 = 3.267 ≈ 3.27, index 1 ✓; distractors are the sliding, hoop and sphere values ✓.
- Flashcards: all three correct (f_s = I_cm a/R² ✓, v formula ✓, 0 ≤ f_s ≤ μ_s N ✓).
- Galileo callout: 1/(1 + 2/5) = 5/7 ✓ for a flat surface (see row 7).
- calcs/8.01/rolling-dynamics.yaml: all ten entries agree with my recomputation and pass. Two source tags are off: `cylinder-mu` cites `reading2 p. 2` (the 36.1 transcript has no μ_s bound); it should be `reading1`, Eq. (21.6.47), p. 21-18. `cylinder-normal` cites `reading3 p. 1` (36.2 never writes the normal force); notes Eq. (21.6.38), p. 21-17 fits better.

## Coverage and order
- 36.1 (static friction on a rolling wheel; zero on level ground at constant speed; nonzero down an incline) ✓.
- 36.2 (torque method down an incline; three equations; a_x; v at the bottom; agreement with energy) ✓; the "agrees with our energy method" claim is in the transcript, p. 3 ✓.
- 36.3 (spool demo, video only) mentioned ✓, after rather than before the yo-yo (row 12).
- 36.4 (yo-yo pulled along the ground, F in terms of f_s, F_max) ✓; the surprising direction of motion not stated (row 5).
- 36.5 (torque about the CM gives the spin dynamics, F = mA_cm the linear dynamics) ✓, moved forward to second place without saying so (row 3).
- Notes Sections 21.3–21.5 ✓ in summary. Not used: Examples 21.1, 21.2, 21.5, 21.6 (they belong to other segments/lessons) and Example 21.4's third approach (torque about a contact-line point), which belongs naturally with Lesson 37's angular momentum about a fixed point; optional.
- Added by the page: worked example, Galileo callout, quiz and flashcards. No cosmology callout, which is reasonable here.
- leadsTo: 8.01 Lecture 37 exists in `_course.json` ("Rolling Kinetic Energy & Angular Momentum") ✓; the reason ("orbital plus spin") fits its angular momentum half. It could also mention kinetic energy of rolling (info).

## Licensing
- All five segment pages and the chapter page carry CC BY-NC-SA 4.0. A grep found no "All rights reserved" or "Courtesy of" notice in the transcripts or Chapter 21 text. No figure is reused; the page has no diagram.
- The notes' Maxwell epigraph (p. 21-1) is not reproduced or quoted ✓.
- No copied paragraphs. Short phrases such as "instantaneously at rest", "rolling resistance, air resistance", "perfect hard wheel in a vacuum" (page: "a hard wheel in a vacuum") are paraphrased or standard. Acceptable.
- Worked examples: (b) uses its own numbers (MIT's yo-yo is symbolic) ✓. (a) is a standard sphere/cylinder/hoop race with its own angle; the cylinder friction bound repeats the notes' Example 21.4 result (Eq. (21.6.47)) as a numerical instance, which is fine as long as it is cited (row 6). No OpenStax or LibreTexts material.

## Notes
- Errors to fix: rows 1 and 2 (notes citations). Then the warnings: rows 3–7.
- "f_s ≈ 1.63 m newtons" (with m in kg) is understandable but awkward; "1.63 N per kilogram of mass" or keeping it symbolic as (1/3) mg sin φ would read better.
- `npm run content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the yo-yo section no longer cites notes Example 21.3 (a falling yo-yo); it cites the 36.4 transcript only, and the notes' `location` lists Example 21.4 alone.
- **Error 2:** Example 21.4 is cited as pp. 21-16–21-21, and described as the uniform-cylinder case.
- **Warnings:** a bracket says MIT states the general rule last (36.5); the string's exit point is now attributed to the torque directions on p. 2; the page now says the pull exceeds the friction, so the yo-yo rolls towards the puller (with 36.3, the spool demo, placed before 36.4 in MIT's order); the cylinder friction bound cites notes Eq. (21.6.47), p. 21-18; the Galileo note says "on a flat incline" and that his balls ran in a groove.
- Info: Section 21.3 is cited as pp. 21-1–21-6; the calcs entries `cylinder-mu` and `cylinder-normal` cite the notes' equations. The other info items are left as they are.
