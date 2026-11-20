---
page: content/year-1/8.01/tension-and-springs.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/7-1-pushing-pulling-and-tension/ (read, plus segment pages 7.2–7.4 for the lesson's segment list)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; Chapter 8 PDF, pp. 8-1 to 8-6 and 8-17 to 8-21 checked page by page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/39256fd439428dc74585370597a0302e_RBaBEjzMr4E.pdf (read; 7.1 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/c7481cb04d36faea22c801884237bce0_CfBeCHrQj_U.pdf (read; 7.2 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/665d5bd5c530102543c3e30414743e2f_dHMGV_WOG7w.pdf (read; 7.3 transcript, 5 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/4197da38c8455172fb072c006e308e9d_rCP_-Wuikwo.pdf (read; 7.4 transcript, 3 pp.)
verdict: needs-changes
---

# Review: Tension in ropes and the spring force

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Block 2 (positive upwards)", `at="transcript 7.3, p. 3"` | The block-2 equation ("on 2, F 2 equals M 2 a 2 … t is positive and m 2 g is minus") is on p. 4 of the 7.3 transcript. Only the block-1 equation $m_1 g - T = m_1 a_1$ is at the bottom of p. 3. | p. 3 | Change to `at="transcript 7.3, p. 4"`. Change the same thing in `calcs/8.01/tension-and-springs.yaml`, entry `atwood-tension-2` (source `transcript 7.3, p. 3` → p. 4, where $T = m_2 a + m_2 g$ is written out). |
| 2 | warning | Formula "Third-law pair at a cut" (`cite="reading1"`, `at="Eq. (8.5.4), p. 8-19; transcript 7.1, p. 2"`) and "Hooke's law" (`cite="reading1"`, `at="Eq. (8.1.2), p. 8-4; transcript 7.4, p. 2"`) | Both equations are in the notes and also on the board: $F_{RL} = -F_{LR}$ in 7.1 p. 2 and $-kx\,\hat i$ in 7.4 p. 2. | Each `at` names a transcript, but `cite` links only the notes (reading1). The transcripts are reading2 and reading5, so the link a reader follows does not lead to the transcript named. | Leave `at` as the notes location only and add a short sentence or a second reference to the transcript (reading2 / reading5). Or accept this as a known pattern. The page/equation numbers themselves are correct. |
| 3 | warning | Section "Solving a pulley system", Assumptions: "(Lesson 12 and later rotation lessons drop these assumptions; with a massive pulley the two tensions differ.)" | 7.3 p. 2: "a little bit later on, when we talk about pulleys that have mass with friction between them, the tension on the two sides … will not be the same". It does not name a lesson. | This is credited to Lesson 12 as well as to the rotation lessons. | Uncertain: Lesson 12 ("Pulleys and Constraints") is about constraint conditions. Whether it uses massive pulleys was not checked, and the notes' Example 8.9 (constraint conditions) treats pulleys as massless. Safer: "later lessons on rotation drop these assumptions". |
| 4 | warning | Worked example "Two blocks over a pulley", step "Support of the pulley" | 7.3 assumes only a frictionless rope–pulley contact (so the pulley stays at rest) and a light rope. | "the support carries $2T \approx 47.0$ N". This holds only if the pulley's own mass is negligible, and the problem never says so. | Add "light (massless) pulley" to the problem statement, or say "the rope pulls down on the pulley with $2T$". |
| 5 | info | Section "When is the tension the same all along the rope?" | 7.2 p. 2 has two lecturer slips. Case one is introduced as "the acceleration of the rope is non-zero" when a zero acceleration is meant. And "Tb minus Ta equals mass of the rope" leaves out "times a". The board equation is right. | The page correctly gives $T_b - T_a = m_\text{rope} a_\text{rope}$ and case 1 as zero acceleration. | Following writing rule 4, you may add a brief bracketed note that the page corrects a slip in the spoken transcript. This is optional. |
| 6 | info | Plot "Acceleration of block 1" caption | — | "approaches g, never exceeding it, when one block is much heavier". When $m_1 \ll m_2$ the curve tends to $-g$, which the plot also shows. | "approaches $\pm g$ (its size never exceeds $g$)". |
| 7 | info | Plot of $F_x$ against $x$ (pre-tension) | Eq. (8.1.4) allows $F_0 \ne F_1$. The page says it uses equal values, which is fine. | The $y$-range is ±12 N. With the sliders at $k = 100$ N/m and $F_0 = 5$ N, $|F_x|$ reaches 15 N at $x = \pm 0.1$ m and is clipped. | Widen the range to ±16, or lower the slider maxima. |
| 8 | info | "Where does the force come from? … the electric forces between them resist both." | 7.4 p. 2 says "an atomic force in nature". The notes (Section 8.2, pp. 8-5 to 8-6) talk about atoms and charges obeying Coulomb's law. | electric forces between atoms | The claim is supported by notes Section 8.2, which is outside the cited Sections 8.1.1/8.5.1. No change needed. You could cite 8.2 if you want it complete. |
| 9 | info | Section "When is the tension the same…", text after "Light rope" formula | Notes p. 8-18 contain an internal inconsistency ("Because the rope is not accelerating … $F_{A,2} - F_{1,2} = m_2 a$"). | The page summarises Eqs. 8.5.1–8.5.3 as "the pull is passed on unchanged". That is correct and does not repeat the inconsistency. | None. |

Formula citations checked and found correct: Eq. (8.5.4) on p. 8-19; Eq. (8.5.5) and Eq. (8.5.6) on p. 8-20; Eqs. 8.5.1–8.5.3 on pp. 8-18 to 8-19 (8.5.1 on 8-18, 8.5.2–8.5.3 on 8-19); $T_b - T_a = m_\text{rope}a$ in 7.2 transcript p. 2 (reading3 = 7.2, correct); block 1 equation in 7.3 p. 3; $a = (m_1-m_2)g/(m_1+m_2)$ in 7.3 p. 4; Eq. (8.1.1) on p. 8-3; Eq. (8.1.2) on p. 8-4; Eqs. (8.1.3) and (8.1.4) on p. 8-5. Notation matches the notes ($\vec F_{R,L}$, $\vec F_{L,R}$, $T(x_P)$, $F_{A,R}$, $F_0$, $F_1$).

## Arithmetic and answer checks
All recomputed with $g = 9.8$ m/s²:
- Sled: $30 - 0.40 \times 2.0 = 29.2$ N, correct. Difference 0.8 N; $0.8/30 = 2.7\%$, so "under 3%" is correct.
- Pulley: $a = (1/5)(9.8) = 1.96$ m/s², correct. $T = 2.0(11.76) = 23.52 \approx 23.5$ N; check $3.0(7.84) = 23.52$ N, correct. Weights 19.6 N and 29.4 N, correct. $2T = 47.04 \approx 47.0$ N, correct. $49 - 47.04 = 1.96$ N $= (m_1+m_2)\,a_\text{cm}$ with $a_\text{cm} = (m_1 - m_2)a/(m_1+m_2) = 0.392$ m/s² downwards, correct.
- $T = m_2(g+a) = 2m_1m_2g/(m_1+m_2)$: algebra correct (it is the page's own addition, not stated in 7.3).
- Spring: $k = 0.25 \times 9.8 / 0.049 = 2.45/0.049 = 50$ N/m, correct; $a = 50 \times 0.060/0.25 = 12$ m/s², correct, and more than $g$.
- Quiz 1: $(2.0/8.0)(9.8) = 2.45$ m/s², and the marked choice (index 1) is correct.
- Quiz 2: same tension at both ends for a negligible-mass rope; marked choice (index 1) is correct and agrees with 7.2 p. 3 and Eq. (8.5.6).
- Quiz 3: $200 \times 0.030 = 6.0$ N. With $x<0$, $F_x = -kx > 0$, which points away from the wall. The marked choice (index 1) is correct.
- Quiz 4: tension is the magnitude of the third-law pair, matching Eq. (8.5.5) and 7.1 p. 2. Marked choice (index 1) is correct.
- Flashcards: all four agree with the sources. The "separate unit vector" card assumes $m_1 > m_2$, which the page states.
- Plot expressions agree with the formulas they claim: $(m-m_2)g/(m+m_2)$ and Eq. (8.1.4) with $F_1 = F_0$.
- `calcs/8.01/tension-and-springs.yaml` covers every number on the page, including the quiz values and both derivation identities. `npm run calc:test -k tension` gives 17 passed. The only mismatch is the source page in `atwood-tension-2` (finding 1). The `atwood-tension-1`, `atwood-weight-*` entries cite "p. 3", which is acceptable because block 1's equation is there.

## Coverage and order
- Lesson 7 has four segments, 7.1–7.4 (the OCW navigation shows no 7.5). The page follows them in order: pushing/pulling and the definition of tension (7.1), uniform tension and the light rope (7.2), the two-block pulley (7.3), Hooke's law (7.4). The notes put Hooke's law (8.1.1) before tension (8.5.1). The page uses the video order, which is reasonable.
- 7.1: the page leaves out the lecturer's motivating set-up (a block on a table pulled by a string over a pulley to a hanging mass). This is a minor omission. Everything else is covered: pushing vs pulling, tug of war, imaginary cut, third-law pair, tension as magnitude.
- 7.2: both cases are covered, as is the "massless is a modelling phrase" point (7.2 p. 3).
- 7.3: all steps are covered: identifying moving objects (blocks and rope), third-law pairs, the pulley's force on the rope, light-rope assumption, separate unit vectors, constraint $a_1 = a_2$, the three checks (units, equal masses, sign), and the remark on a shared axis (p. 5). Not mentioned: the lecturer's remark that the frictionless assumption means the pulley stays at rest (p. 1).
- 7.4: equilibrium and dynamic pictures, coordinate choice, restoring force, linear, spring constant units, atomic origin are all covered. The lecturer's closing pointer to a measurement experiment is reflected in the "Hooke's law as a model" part.
- Notes 8.1.1 (measurement, Figs. 8.1–8.3 content, Newtonian induction, Eq. 8.1.3, pre-tension Eq. 8.1.4) and 8.5.1 (Eqs. 8.5.1–8.5.6) are fully covered. Example 8.3 (massive rope) is correctly left to Lesson 13.
- Additions not in MIT: the heavy-rope remark ("tension larger at the pulling end"), which is correct as a consequence of $T_b - T_a = m a$; the tension formula for the pulley; the three worked examples; two plots. All are correct.

## Licensing
- `grep -i "rights reserved\|courtesy"` over the Chapter 8 text, all four transcripts and the saved OCW segment pages finds nothing. No figures are reused; the plots are generated from formulas.
- No OpenStax/LibreTexts material.
- The text is rewritten. Only standard terms are shared with the notes ("imaginary slice/cut", "restoring force", "linear restoring force", "Newtonian induction", "pre-tension"). No sentence is copied verbatim.
- The worked examples are original. MIT gives no numerical examples in these segments, and the sled, 3.0/2.0 kg pulley and spring-measurement numbers are the page's own.

## Notes
- leadsTo: Lesson 12 "Pulleys and Constraints" and Lesson 13 "Massive Rope" match the syllabus in `_course.json`. Lesson 23 "Potential Energy" for spring energy is plausible but I did not check it against Lesson 23's segments (uncertain).
- The page has no `Callout kind="cosmology"`. That is acceptable under writing rule 6 if no real connection is claimed. Nothing in this lesson is mis-attributed to cosmology.
- The opening line "Lesson 6 dealt with surfaces that push" matches the existing `contact-forces` page (Lesson 6).
- Once finding 1 is fixed (and preferably 3 and 4), the page can be set to `status: reviewed`.

## Resolution (2026-11-15, by the page author)

- Error (block 2 equation cited to transcript 7.3 p. 3): fixed to p. 4, in the page and in calcs entry atwood-tension-2.
- Warning (at= naming a transcript that cite= does not link): the transcript parts were removed from the "Third-law pair at a cut" and "Hooke's law" citations, which now cite only the notes (Eq. 8.5.4, p. 8-19; Eq. 8.1.2, p. 8-4).
- Warning (Lesson 12 and massive pulleys): reworded to "Later lessons on rotation drop these assumptions".
- Warning (2T support needs a massless pulley): the worked example now states a light, frictionless pulley and says "(light) pulley" in the support step.
- Info (lecturer slips in 7.2): a bracketed note after the second-law formula says the segment first says "non-zero" and drops the factor a_rope, and that the page uses the corrected form.
- Info (caption "approaches g"): now "approaches g (or −g), never exceeding it in size".
- Info (pre-tension plot clipping): y-range widened to ±16 N, which covers the slider maxima (15 N).
- Not changed: "electric forces" between atoms is standard physics and is also in notes Section 8.2.
