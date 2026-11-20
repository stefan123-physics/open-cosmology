---
page: content/year-1/8.01/relative-velocity-and-recoil.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-6-continuous-mass-transfer/18-1-relative-velocity/ (read: saved HTML of segment pages 18.1–18.4 and the Week 6 page; Lesson 18 has exactly four segments, the next is 19.1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter11/ (read: Chapter 11 PDF, all of it, printed pp. 11-1 to 11-10; footers of pp. 11-2, 11-3, 11-4, 11-9, 11-10 checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/90c144eaf43266d22681be5aa82d2209_sN-m5WkbMyI.pdf (read: 18.1 transcript, 1 p.; URL matches the segment page's transcript link)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/7cb824b3e48fb549dfb88e8db423883d_L5jhg4q1Xvo.pdf (read: 18.2 transcript, 4 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/f8ae4488df1e3a4c0b0461b30fd7ee21_7TljYDljC5w.pdf (read: 18.3 transcript, 2 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/9d08e938c03840a9b3288dbd246bdb6c_V-fy33vi-64.pdf (read: 18.4 transcript, 1 p.; link matches)
verdict: pass-with-notes
---

# Review: Relative velocity and recoil

No errors found. Every formula citation, equation number and page number checks out against the transcripts and the printed footers of Chapter 11; every number and quiz answer recomputes; `calcs/8.01/relative-velocity-and-recoil.yaml` passes (`npm run calc:test`: 1346 passed, whole suite). `content:check` reports 0 errors for this page (only the "no review file" warning, which this file resolves). The 18.1 apple cases are read correctly, including the last two, where the person on the sidewalk throws. Two wording points are worth fixing: a quiz explanation that says "most of the push" goes into the sled (the push, i.e. the impulse, is equal on both bodies), and the phrase "whoever it is measured by" in the cosmology callout, which on a page about frame-dependent velocities reads as if the recession speed were the same for every observer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Quiz 4 explanation | n/a (physics). By Newton's third law the skater and sled receive equal and opposite impulses (60 × 0.6 = 36 = 15 × 2.4 kg·m/s). What the light sled takes most of is the relative speed (2.4 of the 3.0 m/s) and the kinetic energy (43.2 J vs 10.8 J). | "the light sled shoots back, and most of the push goes into it." | E.g. "the light sled shoots back and takes most of the 3.0 m/s relative speed (and most of the kinetic energy); the impulses on skater and sled are equal and opposite." |
| 2 | warning | Cosmology callout, "a galaxy 50 Mpc from A recedes from A at 3500 km/s, whoever it is measured by" | n/a (not MIT). | "whoever it is measured by" | The intended meaning is "whichever galaxy A is". As written it suggests the velocity is observer-independent, the opposite of the lesson. Suggest: "recedes from A at 3500 km/s, wherever A is." Optionally add "(for speeds well below c, where velocities simply subtract)" since the argument uses the Galilean law; 8.286 Lecture 4 (`homogeneous-expansion`, line 135) makes the same Galilean caveat. |
| 3 | info | "Solving in the ground frame", "because part of the push went into the cart" | 18.3 p. 1 gives only the algebra. | Explains $v_p < u$ by "part of the push went into the cart". | Same issue as row 1, milder: "because the cart moves backwards, the person's ground speed is $u$ minus the cart's recoil speed." |
| 4 | info | "Adding velocities", last apple case | 18.1 p. 1: "To the car the apple is going to the left at the speed of v car minus v apple." | Same. | Correct as long as $v_\text{car} > v_\text{apple}$, which MIT also assumes silently; optional "(assuming the car is faster than the apple)". |
| 5 | info | "Reference frames…", principle of relativity | Notes p. 11-4: "if there is no net force impressed on an object at rest in frame S, then there is also no net force impressed on the object in frame S′." | "an object with no net force on it moves uniformly in both. The notes read Newton's first law this way, as a principle of relativity" | Equivalent and in own words; fine. |
| 6 | info | Worked example "Rain on a windscreen" | n/a (own example). | "slanting towards the car at … 68° from the vertical" | Numbers right. "slanting back towards the car (it seems to come from ahead)" would make the direction unambiguous. |

## Arithmetic and answer checks
- Eq. (11.2.1) $\vec r\,' = \vec r - \vec R$ and Eq. (11.2.2) $\vec V = d\vec R/dt$: both on printed p. 11-3 (with (11.2.3)). Citation "Eq. (11.2.1), p. 11-3" correct; Section 11.1 on p. 11-2 correct; relatively inertial frames on p. 11-3 and the principle of relativity on p. 11-4, so "pp. 11-3–11-4" correct.
- Eqs. (11.3.1)–(11.3.2) on p. 11-4: correct; $\vec v\,' = \vec v - \vec V$ matches the notes' notation (primed = frame S′, $\vec R$ from O to O′).
- Example 11.1 (planes NE 160 m/s, SE 200 m/s) runs pp. 11-4 to 11-6 (Eqs. (11.4.2)–(11.4.3) on p. 11-6): "pp. 11-4–11-6" correct. The page quotes none of its numbers.
- 18.1 (transcript p. 1, the only page): car to the right at $v_\text{car}$, bike to the left at $v_\text{bike}$; the bike sees the sidewalk moving right at $v_\text{bike}$ and the car right at $v_\text{car} + v_\text{bike}$; the biker throws the apple forwards (left) at $v_\text{apple}$, the sidewalk sees $v_\text{apple} + v_\text{bike}$ to the left. Then "the person throws the apple forward": the car sees it going left at $v_\text{car} - v_\text{apple}$ and the bike sees it going right at $v_\text{apple} + v_\text{bike}$. Both results only fit an apple moving right at $v_\text{apple}$ in the sidewalk frame, so the page's reading (the person on the sidewalk throws to the right) is the correct one, and all four results on the page match.
- 18.2: momentum diagrams in the ground frame (p. 1) and the frame moving with $v_c$ (pp. 2–3); $u$ defined p. 2, "relative to the cart" pp. 2–3; $v_p = v_c + u$ ("vp equals the relative velocity of the two frames plus the velocity in the moving frame") p. 3. Citations "pp. 1–3", "pp. 2–3", "p. 3" correct.
- 18.3 p. 1: $0 = m_c v_c + m_p(v_c + u)$, $v_c = -m_p u/(m_c + m_p)$, then $v_p = v_c + u$. Correct; page's $v_p = m_c u/(m_c + m_p)$ verified ($-m_p u/(m_c+m_p) + u = m_c u/(m_c+m_p)$). Spoken "on the board" in a segment video; the transcript page is the right citation.
- 18.4 p. 1: initial momentum $-(m_p + m_c)v_c$, final $m_p u$, $v_c = -m_p u/(m_p + m_c)$. Correct.
- Example 11.3: problem p. 11-7, solution pp. 11-8 to 11-10. Eq. (11.4.19) $v_{f,\text{cart}} = m_3 v_0\cos\theta/(m_2 + m_1 + m_3)$ and the remark that vertical momentum is not conserved (normal force exceeds gravity while throwing) on p. 11-9: correct. Eq. (11.4.15) horizontal ball velocity $v_0\cos\theta - v_{f,\text{cart}}$ (p. 11-8) matches the page's sentence. Eq. (11.4.22) $\tan\varphi = \frac{m_1+m_2+m_3}{m_1+m_2}\tan\theta$ on p. 11-10: correct (the notes call the angle φ). Light-ball limit $\varphi \to \theta$: p. 11-10, correct. Recheck of (11.4.22): $\tan\varphi = v_0\sin\theta / [v_0\cos\theta(1 - m_3/M)] = (M/(m_1+m_2))\tan\theta$. Correct.
- Rain: $\vec v\,' = (0,-8.0) - (20,0) = (-20,-8.0)$; $\sqrt{464} = 21.54 \to 21.5$ m/s; $\tan^{-1}(2.5) = 68.2° \to 68°$. Correct.
- Sled: $-60 \times 3.0/75 = -2.4$ m/s; $v_p = 0.6$ m/s; $60\times0.6 + 15\times(-2.4) = 36 - 36 = 0$. Wrong-frame version $-60\times3.0/15 = -12$ m/s $= 5\times 2.4$. All correct.
- Throw: $2.0\times10\times\cos40°/82 = 15.321/82 = 0.1868 \to 0.187$ m/s; horizontal $7.6604 - 0.1868 = 7.4736 \to 7.47$; vertical $6.4279 \to 6.43$; $\tan^{-1}(6.4279/7.4736) = \tan^{-1}(0.86008) = 40.70°$; same from $(82/80)\tan40° = 1.025\times0.83910 = 0.86008$. Correct; the example uses its own numbers.
- Callout: $70 \times 50 = 3500$ km/s. Correct. $H_0 = 70$ km/s/Mpc is in `calcs/values.yaml` with role "example"; the page presents it as an example value, consistent with that role. The vector argument $\vec v_B - \vec v_A = H_0(\vec r_B - \vec r_A)$ is correct.
- Quiz 1: $30 - 1.5 = 28.5$ m/s east, answer index 1 ("28.5 m/s east"). Correct.
- Quiz 2: $\vec V$ = velocity of frame S′ relative to S, index 1. Correct.
- Quiz 3: −2.4 m/s, index 2. Correct; the −12 m/s distractor and explanation are right.
- Quiz 4: 0.6 m/s, index 2. Correct (explanation wording: row 1).
- Flashcards: law of addition, $v_c$ and $v_p = m_c u/(m_p+m_c)$, and the moving-frame card are all correct.
- calcs file: 17 entries (numbers and identities for the recoil formulas and Eq. (11.4.22)) match the page's shown values; suite passes.

## Coverage and order
- Lesson 18 segments 18.1 (relative velocity), 18.2 (set up the recoil problem), 18.3 (ground frame), 18.4 (moving frame) are all covered, in MIT's order, each in its own section ("Adding velocities", "Setting up a recoil problem", "Solving in the ground frame", "Solving in the moving frame").
- Notes Sections 11.1–11.3 are covered before the segments, which is a sensible order (definitions first). Eq. (11.2.3) ($\vec A = d\vec V/dt = 0$) is described in words, not shown.
- Section 11.4: Example 11.1 is summarised (no numbers), Example 11.3 is covered fully with an own worked example. **Example 11.2** (two particles moving in opposite directions round a circle, velocity of a relative to b, Eqs. (11.4.4)–(11.4.11)) is left out. The frontmatter declares "Examples 11.1 and 11.3", so this is disclosed; a one-sentence mention would complete the chapter (info).
- Example 11.3's part (a) final ball velocity Eq. (11.4.21) and the "unrealistic" heavy-ball limit $\varphi \to \pi/2$ are not given; the page covers the light-ball limit only (info).
- Additions not in MIT: the rain example, the sled example with the wrong-frame mistake, the throw example and the cosmology callout, all clearly the page's own.

## Licensing
- `grep -il "rights reserved\|courtesy"` over the chapter text, all four transcripts and the five saved OCW pages: no matches. Chapter 11 ends with the standard OCW citation note only.
- The chapter's Einstein epigraph and Figures 11.1–11.7 are not reused. No OpenStax or LibreTexts material.
- No verbatim copying found: the 18.1 apple paragraph and the recoil set-up are paraphrased; short standard terms ("law of addition of velocities", "relatively inertial", "momentum diagrams", "Galilean coordinate transformations") are fine. All worked examples use own numbers and situations.

## Notes
- `leadsTo`: 8.01 Lecture 19 is "Continuous Mass Transfer" (segments 19.1–19.7, the rocket problem), so "recoil repeated continuously, with fuel thrown out at a fixed speed relative to the rocket" is accurate. 8.286 Lecture 4 is "The Kinematics of the Homogeneous Expanding Universe"; its page `homogeneous-expansion` makes the same point (changing to another galaxy's frame reproduces Hubble's law, line 135 and quiz 2), so the link and its reason are correctly attributed.
- Prerequisites `centre-of-mass`, `conservation-of-momentum`, `kinematics-2d` all exist.
- Symbols scoped to `relative-velocity-and-recoil` in `data/symbols.json` (25 meanings: φ, t, d, v, r, R, V, v′, u, v_0, m_1, m_2, m_3, m_p, m_c, v_p, v_c, v_f,cart, v_car, v_bike, v_apple, r_A, r_B, v_A, v_B): all match their use on the page, and units are right. Two small points (info): the `v` meaning ("an object's velocity in frame S (the ground)") and the `r` meaning also cover $\vec v = H_0\vec r$ in the callout, where "frame S" is our galaxy, not the ground; adding "in the cosmology note, a galaxy's velocity/position as seen from us" would fit better. θ uses the general "An angle." and $H_0$ the general Hubble-constant meaning; both fit.
- No em dashes on the page. Source title "Lesson 18: Relative Velocity and Recoil (18.1–18.4)" matches `_course.json` and the OCW segment titles.
- The notes call the cart's recoil a speed (cart moving in −x) while the segments use a signed $v_c$; the page keeps the two conventions apart correctly ($v_{f,\text{cart}}$ positive, $v_c$ negative) and the symbol meanings say so.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** quiz 4's explanation now says the pushes (impulses) on skater and sled are equal, 36 kg·m/s each, and that the sled takes 2.4 of the 3.0 m/s of relative speed.
- **Warning 2:** the callout now says "wherever A is", and that subtracting velocities this way holds for speeds well below the speed of light.
- Info: the body text now says the cart takes the share m_p/(m_c + m_p) of the relative speed; the rain example says the rain comes from ahead of the car; the `r` and `v` meanings mention their use in the cosmology note. Example 11.2 and the heavy-ball limit of Example 11.3 are left out, as optional extras; the v_car > v_apple assumption is left as in MIT.
