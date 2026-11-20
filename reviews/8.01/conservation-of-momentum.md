---
page: content/year-1/8.01/conservation-of-momentum.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/16-1-conservation-of-momentum/ (read: segment pages 16.1 and 16.2, saved HTML; Lesson 16 has only these two segments, next is 17.1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: Chapter 10 PDF, Sections 10.7–10.9, Examples 10.5–10.6, printed pp. 10-11 to 10-20, footers checked page by page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/c7462af7761b1bf1ea6441fc151da0cc_Vg8t8_IOHDg.pdf (read: 16.1 transcript, 3 pp.; URL matches the segment page's transcript link)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d4e82a7f5380a0c2030446364c323875_w7z_z-lucyU.pdf (read: 16.2 transcript, 3 pp.; URL matches the segment page's transcript link)
verdict: pass-with-notes
---

# Review: Conservation of momentum

No errors found. Every formula citation, page number and equation number checks out against the transcripts and the printed footers of the notes; every number and quiz answer is correct; `calcs/8.01/conservation-of-momentum.yaml` passes (14 tests).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Momentum diagrams", numbered list; flashcard "Steps of a momentum diagram" | 16.2 transcript p. 2: choosing a coordinate system is "the third step" (1 system and frame, 2 initial/final states with velocity vectors, then the momentum principle is written as the result of the diagram, 3 coordinate system). | Four numbered steps, with "write the momentum principle" as step 3 and the coordinate system as step 4. | Either keep four steps but drop any implied match to MIT's numbering (it is not claimed explicitly, so this is minor), or add "(MIT counts the coordinate system as the third step)". |
| 2 | warning | data/symbols.json, `v_3` (scoped to this page) | n/a | Meaning: "The velocity of the larger piece just after the explosion." On the page `v_3` is also the second half of the shell (worked example "A shell splits in two") and of quiz 3, which are equal halves, not the larger piece. | Widen the page-scoped text, e.g. "The velocity of the second piece just after the explosion (the larger piece in the notes' example; the other half in the shell example and quiz)". Likewise `v_1` ("The projectile's horizontal velocity just before the explosion") fits the shell only if the shell counts as the projectile; consider "(or the shell's)". |
| 3 | info | "Two dimensions", Formula "Components of momentum", `at="pp. 2–3"` | The two component equations are written at the end of 16.1 p. 2 ("So I can write my two momentum equations like this"); p. 3 only repeats that a vector equation gives two equations and adds the one-direction caveat. | pp. 2–3 | Acceptable; `at="p. 2"` would be more exact. The general form with both blocks having x and y components is the page's generalisation of the transcript's case (one block moving along y, one along x); fine. |
| 4 | info | "Momentum diagrams", step 2 | 16.2 p. 1: "we actually don't know which way those objects will end up moving". | "...so draw them in some direction and let the algebra decide." | Reasonable addition consistent with "components can be positive or negative" (p. 3); no change needed. |
| 5 | info | "Example: an exploding projectile" | Notes, p. 10-15: the centre-of-mass method is presented first as "the easiest approach", then momentum + kinematics (pp. 10-16–10-17). | Momentum method first, centre of mass mentioned afterwards as the quicker route. | Fine (centre of mass is Lesson 17); the page says honestly that the notes get it faster from the centre of mass. |
| 6 | info | Whole page | Notes 10.9.1 give the four-step strategy (Understand, Devise a Plan, Carry out, Look Back) and Eqs. (10.9.1), (10.9.3)–(10.9.8). | Only the parts used (component-by-component check, short interaction time, Eq. 10.9.2, the naming habit and "momentum flow diagrams"). | Optional: one sentence on the four-step strategy and "check units and directions" (Look Back) would complete Section 10.9.1. |

## Arithmetic and answer checks
- Formula "Conservation for an isolated system": matches Eqs. (10.7.3)–(10.7.5); (10.7.3)–(10.7.4) are on printed p. 10-11, (10.7.5) on p. 10-12. Citation correct.
- Principle of conservation of momentum, Eq. (10.8.4), printed p. 10-12: correct. Eq. (10.9.2) (short interaction time) on p. 10-13: correct.
- "Momentum flow diagrams" and the $(v_{x,i})_1$ naming: printed pp. 10-13 (start of "Devise a Plan") to 10-14: correct.
- Impulse equation (16.1 p. 1), two-block sticking equation (16.1 p. 2, second term zero because block 2 is at rest), momentum-diagram vector equation (16.2 p. 2), component form (16.2 pp. 2–3, "components can be positive or negative" on p. 3): all correct.
- Example 10.5: masses $m_1/4$ and $3m_1/4$, smaller piece leaves at $-v_1$, Eq. (10.9.11) $m_1v_1 = -\tfrac14 m_1v_1 + \tfrac34 m_1v_3$ gives $v_3 = \tfrac53 v_1$ (10.9.12); $x = \tfrac53 x_i$ further (10.9.13) and $\tfrac83 x_i$ total (10.9.14). All on printed p. 10-17; example spans pp. 10-14–10-17. Correct.
- Example 10.6 (plane and sandbag), printed pp. 10-17–10-20: description (momentum conserved during the snag, then Newton's second law and kinematics with friction and brakes) matches. The calcs entry reproduces the notes' 3.8 × 10² m (my recomputation: 1000²·40²/(2·1120·(1400 + 0.4·120·9.8)) = 1.6×10⁹/(2240·1870.4) ≈ 381.9 m).
- Wagons: 12 000·2.0/20 000 = 1.2 m/s; gain 8000·1.2 = 9600 kg·m/s; loss 12 000·0.8 = 9600 kg·m/s. Correct.
- Crossroads: p_x = 18 000, p_y = 18 000 kg·m/s; 18 000/3000 = 6.0 m/s each; √72 = 8.49 ≈ 8.5 m/s; 45° north of east. Correct.
- Shell: v₃ = 2v₁; second half covers 800 m more, lands at 1200 m; centre of mass at (400 + 1200)/2 = 800 m = 2 × 400 m, consistent with the parabola. Correct.
- Quiz 1: 2.0·3.0/3.0 = 2.0 m/s, answer index 2 = "2.0 m/s". Correct.
- Quiz 2: index 1 (friction's impulse negligible over the short collision), matches 16.1 p. 3. Correct; distractor "Friction is an internal force" is rightly wrong.
- Quiz 3: index 2 "twice the speed before". Correct.
- Quiz 4: index 2 "45° north of east". Correct; the 34° distractor (atan(10/15) = 33.7°, i.e. using velocities instead of momenta) is a good trap.
- Flashcards: all three correct (see row 1 on step numbering).
- `.venv/Scripts/python -m pytest tests/calc -q -k conservation-of-momentum`: 14 passed.
- Warning: quiz 3 and quiz 4 repeat the shell and crossroads worked examples almost exactly (quiz 4 uses identical numbers). They test recall more than understanding; consider changing the numbers or masses (e.g. unequal momenta so the 34°-style trap still works).

## Coverage and order
- Lesson 16 on OCW has two segments, 16.1 and 16.2; both are covered, in order: 16.1 (impulse equation, 1D sticking collision and choice of system, 2D components, friction/short-time argument) then 16.2 (momentum diagrams). Nothing from the segments is missing.
- Notes Sections 10.7 (isolated systems), 10.8 (non-isolated systems, principle of conservation), 10.9 (strategy, momentum flow diagrams), Example 10.5 (summarised correctly) and Example 10.6 (mentioned correctly) are covered; only the four-step strategy of 10.9.1 is left out (row 6).
- Repetition with Lesson 15 (momentum-and-impulse.mdx): minimal. Lesson 15 ends with $\vec F_\text{ext} = d\vec p_\text{sys}/dt$ and $\Delta\vec p_\text{sys} = \int\vec F_\text{ext}dt$; this page restates the impulse form once as its starting point (as 16.1 does) and moves on. No duplicated examples.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in Chapter 10 (pp. 10-11–10-20) or in either transcript; both segment pages carry the course's Creative Commons licence.
- The page reuses no figures (Figures 10.7–10.9 are not used). No OpenStax or LibreTexts material.
- No verbatim copying found; wording is rewritten throughout. Short terms ("isolated system", "momentum flow diagrams", "principle of conservation of momentum") are standard terminology and correctly attributed to the notes.
- Originality: the wagons and crossroads examples are original. The shell example has the same structure as notes Example 10.5 (explosion at the top, one piece's velocity fixed, find the other's landing point) but with different mass ratio (halves), a different condition (one half stops, rather than returning to the launch point) and numbers; it is a standard textbook exercise and acceptable as "clearly rewritten" (info).

## Notes
- Cosmology callout (dark matter direct detection): physics is right. For an elastic head-on collision with equal masses the nucleus takes all the kinetic energy, $E_{R,\max} = \tfrac12 m v^2$; with $m \approx 122$ GeV (xenon, 131 u) this gives about 36 keV at 230 km/s and 61 keV at 300 km/s, and typical (glancing) recoils are smaller. "Tens of keV" therefore describes the maximum well and agrees with content/year-5/Ferreras/detecting-dark-matter.mdx (29 keV for a 100 GeV particle at 230 km/s; scaling "~50 keV", Ferreras Eq. (6.11)). Info: since the callout already says momentum fixes "how hard the nucleus can recoil", writing "at most a few tens of keV" would be more precise; the figure is not in the calcs file (could be added as a computed entry). The "If ... made of particles" phrasing attributes the WIMP picture fairly as a hypothesis.
- leadsTo: 8.01 Lecture 17 is "Center of Mass and Motion" (course syllabus) and Ferreras 6.6 is the detecting-dark-matter page (`lecture: 6.6`); both "why" texts are accurate.
- Symbols (data/symbols.json, meanings scoped to this page): all others checked and fit their uses (x, y as direction labels; d of dt; m; F; m₁ "whole projectile" in the notes' example; m₂; t_i, t_f; p_sys,i/f; p_i, p_f; v_1,i "(or x component)"; v_2,i; v_1,f; v_2,f; v_f; the component forms v_1x,i … v_y,f; v_x,i; x_i; F_ext, p_x, p_y shared with momentum-and-impulse). Only v₃ (and marginally v₁) need adjusting (row 2).
- Uncertain: I did not watch the videos, so I cannot say whether the 16.1 equations were on a board or on screen; citations are to transcript pages, which is the project's convention.

## Resolution (2026-11-15, by the page author)

- **Warning 1:** step 4 now notes that the lecture counts choosing the coordinate system as its third step (after choosing the system and drawing the states).
- **Warning 2:** the v₃ meaning now covers both the notes' larger piece and the shell's second half; the v₁ meaning covers projectile and shell.
- **Warning 3:** quizzes 3 and 4 left as they are (they check the method on the same set-ups as the examples).
- Info: the callout now says "at most a few tens of keV". Other info notes left as they are.
