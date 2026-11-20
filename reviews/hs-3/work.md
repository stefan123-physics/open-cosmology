---
page: content/year-0/hs-3/work.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/work-energy-and-power/05-work-energy-and-power-02 (read, twice; CC BY footer present, CCBY in docs/siyavula-licences.tsv line 557)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter13/ (read: PDF mit8_01scs22_chapter13.pdf downloaded to a scratch folder outside the repo and extracted; no "rights reserved" or "courtesy" notice found)
  - MIT 8.286 Lecture 15 (not re-read from OCW; checked against this site's reviewed page content/year-4/8.286/matter-radiation-equality.mdx, which cites dU = −p dV to the Lecture 15 transcript, p. 24, board)
verdict: pass-with-notes
---

# Review: Work (Lesson 3.1)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Stretching a spring", paragraph after the formula | (Parallel draft 3.3 `gravitational-potential-energy.mdx`, section "A first look: energy in a stretched spring", introduces **elastic potential energy**, ½kx², and says lesson 3.4 puts the two kinds together.) | "Lesson 3.4 shows that the work you did is stored in the spring as **elastic potential energy**" | Say "Lesson 3.3 shows ..." (or "Lessons 3.3 and 3.4"), so the forward reference matches the lesson that actually introduces the term. |
| 2 | warning | Worked example "Pushing a box against friction", Check step | Friction on the page is 49.05 N. | "Had you pushed with exactly 49 N, the box would slide at constant speed and the net work would be zero." | 49 N is not exactly the friction (49.05 N), and it holds only if the box is already moving. Write "with a push equal to the friction, about 49 N, a box that is already sliding would keep a constant speed ...". |
| 3 | info | Cosmology callout | Lecture 15 (via the site's 8.286 page): the pressure work, p = ρc²/3, is what turns 1/a³ into 1/a⁴; it is the same loss as the redshift of each photon. | "that is one reason why the energy of radiation is diluted faster than that of matter" | "One reason" suggests a second, separate reason. The `leadsTo` text already says "this work is why". Suggest "and that work is why the energy of radiation falls faster than that of matter (the same loss shows up as the redshift of each photon)". Optional: "when no heat flows in" after "loses that much energy". |
| 4 | info | Opening paragraph | Siyavula's definition box: work is done when a force acts "in or against the direction of motion". | "a force does work on an object when the object moves while the force pushes or pulls it" | Slightly loose (a perpendicular force pushes while the object moves and does no work); the next sections correct it. Could add "along or against its motion". |
| 5 | info | "Work as the area under a graph" | MIT Sec. 13.5: work is the signed area of F_x(x) between x_i and x_f. | "Area below the horizontal axis (a force pointing backwards) counts as negative work." | True when the object moves in the +x direction, which is the case throughout the page. Fine at this level; could add "for an object moving forwards". |

## Formulas and citations
- `W = F Δx cos θ`, `cite="mit"` (= the Siyavula 5.2 source URL), at "5.2 Work, definition box": correct. Siyavula's box gives exactly W = FΔx cos θ with W in J, F in N, Δx in m, θ the angle between force and displacement. The prose also cites MIT Sec. 13.8.2; that is Eq. (13.8.16), W = (F cos β)Δx, MIT's angle being β. Correct.
- `1 J = 1 N·m = 1 kg·m²/s²`, reading1, Sec. 13.4, Eq. (13.4.3): correct (MIT: [1 N·m] = [1 kg·m·s⁻²][1 m] = [1 kg·m²·s⁻²] = [1 J]). "After James Joule": the MIT notes name the unit after Joule in Sec. 13.2; standard.
- `W_net = F_net Δx cos θ`, mit, "Net work, Approach 2": correct. Siyavula's Approach 2 computes the work from the resultant force with this formula; Approach 1 (sum of the separate works, with signs) matches the page's method 1.
- `W = −μ_k F_N Δx`, reading1, Sec. 13.4, Eq. (13.4.5), "there with F_N = mg on a level surface": correct. MIT (13.4.5) is W_f = −μ_k mg Δx. Info: MIT's Eq. (13.4.14), W_f = −μ_k N Δx (Example 13.4, force at an angle), is the general form with F_N and could be cited as well.
- `W = mgh`, reading1, Sec. 13.4, Example 13.5, Eq. (13.4.16): correct. MIT gives W_g = −mgΔy for gravity, negative for a rising body; the `at` says that the lifting force does the opposite at steady speed. Correctly explained.
- `W = area under the force–displacement graph`, reading1, Sec. 13.5, Eq. (13.5.3) and Figure 13.5: correct. MIT: "The work integral is the area under this curve". Siyavula 5.2 says explicitly that it deals only with constant forces and has no graphs, so citing MIT for this is right.
- `W = ½kx²`, reading1, Sec. 13.5, Example 13.6, Eq. (13.5.5): correct with the stated adaptation. MIT gives the work done **by** the spring, −½k(x_f² − x_i²); with x_i = 0 and the hand doing the opposite, this is +½kx². The `at` says so.
- Notation: SI, g = 9.81 m/s², F_N and μ_k as in lesson 2.6, k and extension x as in lesson 2.7. Matches the site.
- Reference `mit286`: title and URL match `content/year-4/8.286/_course.json`, Lecture 15. The site's 8.286 page `matter-radiation-equality` shows dU = −p dV for a gas pushing a piston (force pA times dx), cited to the Lecture 15 transcript, p. 24 (board), so the reference supports the callout. I did not re-read the transcript itself.

## Arithmetic and answer checks
Everything was recomputed independently (Python):
- Apple: 0.10 × 9.81 × 1.0 = 0.981 ≈ 1 J. OK.
- Trolley: 45 × 12 = 540 J; 45/9.81 = 4.59 → 4.6 kg. OK.
- Sledge: 80 cos 35° = 65.53 → 65.5 N; 80 sin 35° = 45.89 → 45.9 N; 80 × 15 × cos 35° = 982.98 → 983 J ≈ 9.8 × 10² J; 80 × 15 = 1200 J. OK. The vector diagram (6.55, 4.59) at 10 N per square matches.
- Ball: 0.15 × 9.81 × 4.0 = 5.886 → −5.9 J going up, +5.9 J coming down. OK.
- Box: F_N = 196.2 N; F_f = 49.05 N; push 400 J; friction −196.2 → −196 J; net 203.8 → 204 J both ways (F_net = 50.95 N). OK. (See difference 2 for the "exactly 49 N" remark.)
- Crate: 8.0 × 9.81 × 1.5 = 117.72 → 118 J; ramp sin θ = 0.5, θ = 30°, push 39.24 → 39.2 N, × 3.0 = 117.7 → 118 J. OK.
- Spring: kx = 30 N at 0.12 m and 60 N at 0.24 m; ½ × 0.12 × 30 = 1.8 J; ½ × 250 × 0.24² = 7.2 J; 5.4 J; ratios 3 and 4; average-force check 15 × 0.12 = 1.8 J. OK.
- Quiz 1: 60 × 5.0 × cos 40° = 229.8 → 230 J (answer index 2 = "230 J"). Distractors: 300 J (no cosine), 192.8 → 193 J (sine), 12 (60/5). Explanation true. OK.
- Quiz 2: zero work (index 1). The other choices are wrong; explanation true.
- Quiz 3: 2.5 × 9.81 = 24.525 → 24.5 N; × 0.80 = 19.62 → 19.6 J (index 1). Distractors: 2.0 (no g), 24.5 (the force), −19.6 J (gravity's work, not yours). OK.
- Quiz 4: N·m (index 1). N/m (spring constant), kg·m/s (momentum), kg·m/s² (newton): explanation true.
- Quiz 5: ½ × 400 × 0.050² = 0.50 J (index 0). 1.0 J (no half), 20 N = kx, 10 = half of it. OK.
- Flashcards: all five true.
- Calcs file: every result-like number on the page has an entry, and each `expected` matches my values. Minor gaps (info): the quiz-1 distractor "12" (60/5) has no entry; `ramp-angle` computes sin θ = 0.5 but `shown` quotes "30°" (asin is not computed); the "10" distractor of quiz 5 is only mentioned in a `where`. The header's list of Siyavula and MIT example numbers that were not reused agrees with what both sources contain.

## Only earlier terms
- Prerequisites (all earlier High School lessons, all written): angles-and-trigonometry (0.7, which covers cos beyond 90° on the unit circle, with cos 180° = −1: supports the sign table), introducing-vectors (0.8, components), rates-of-change-and-area (0.10, area under a velocity–time graph), newtons-second-law (2.3), weight-normal-and-tension (2.5), friction-and-drag (2.6, F_f = μ_k F_N), springs-and-hookes-law (2.7, F = kx, extension), inclined-planes (2.8, mg sin θ), centripetal-force (2.9). All references to lesson numbers in the text (1.1, 0.7, 0.8, 0.10, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9) point to the right lessons.
- Displacement (lesson 1.1) and satellites in circular orbits (lessons 2.9, 2.11, 2.12) are used without being listed as prerequisites; they are reached through the listed ones. Info only.
- "Energy" is used before it is defined. It is the everyday word here, the joule was named as the unit of energy in lesson 0.2, and Siyavula itself introduces work as energy transfer. Acceptable for the block's opening lesson.
- Forward references, all marked as such: lesson 3.2 (work–energy theorem), 3.3 (gravitational potential energy), 3.4 (heat from friction; elastic energy, see difference 1), 3.6 (momentum, quiz 4), 3.12, and "pressure, Block 4" in the callout, which is explained in brackets at the point of use. Block 4 lesson 4.1 "Density and pressure" covers it later.

## Coverage
- §4 row 3.1 "Work": the lesson covers the definition W = FΔx cos θ, the joule, positive, negative and zero work, net work by both methods, friction, lifting (with the ramp), and work as the area under an F–x graph including ½kx². That is the full VWO content for work (W = F s cos α, area under the F–s graph) and all of Siyavula 5.2.
- Left out: the scalar (dot) product form W = F·Δx (MIT 13.8.2). It is not needed at VWO level, and lesson 0.8 does not introduce the dot product. Also left out: MIT's point that the displacement is that of the point of application (static friction while walking). That is university level, so fine.
- No PhET sim is planned for 3.1 in §4, and none is used.

## Where this leads
- `8.01` lecture 20: `content/year-1/8.01/work-and-kinetic-energy.mdx` ("Kinetic energy and work in one dimension") covers work, the area under the force–position graph as an integral, and the work–kinetic energy theorem. Same topic. OK.
- `8.286` lecture 15: the pressure work dU = −p dV for radiation is in that lecture (site page `matter-radiation-equality`). OK.
- `towards: false` is correct: 3.12 is the block's "Towards the universe" lesson. The callout's cosmology claims are correct apart from the wording in difference 3.

## Licensing and AI terms
- Siyavula 5.2 carries the CC BY footer and is listed CCBY in docs/siyavula-licences.tsv. The page uses no logo or brand, and "Everything Science" is not used as branding.
- MIT Ch. 13 PDF: no "rights reserved" or "courtesy" notice (grep on the extracted text).
- No copied sentences found. The page's wording on positive and negative work, the strongman (which Siyavula describes as carrying sleds, which matches "carrying heavy loads"), net work and the area under the graph is paraphrased. The Siyavula sentences compared were "In this case the object on which the force is applied gains energy", the Net work opening and Approaches 1 and 2. MIT's "The work integral is the area under this curve" was compared too.
- Worked examples and quiz are original. Siyavula's examples (500 N/20 m car, 300 N/25 m braking, 20 N/5 m/60° box, 300 N and 100 N over 20 m), its exercises (10 N blocks, 20 N/5 m lift, roller coaster, suitcase, 50 N pram at 30°, 2000 N lift, 60 kg student) and MIT's cup example (2.0 N, 0.5 m, μ_k = 0.1, 30°) are not reused. Quiz 1 (rope at 40°) and quiz 3 (steady lift) are the same type as Siyavula's worked example 3 and lift exercise, with different situations and numbers. That is allowed.
- All diagrams are generated: a VectorDiagram and a Plot from F = 250x. No figure is copied.
- No NASA or ESO material, so no insignia or ESO AI credit is needed. No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) is cited.

## Notes
- The parallel draft `kinetic-energy.mdx` (3.2) names the same MIT PDF "Chapter 13: Energy, Kinetic Energy, and Work". The PDF's own title, which this page uses correctly, is "Chapter 13 The Concept of Energy and Conservation of Energy". Fix that in the 3.2 review.
- Difference 1 is a cross-lesson consistency issue between 3.1 and the 3.3 draft. Decide which lesson owns "elastic potential energy" and align both.
- No dev server or build was run (as instructed); `content:check` and `calc:test` were not run by this reviewer.

## Resolution (2026-11-20, by the page author)
1. "Stretching a spring": the forward reference now reads "Lesson 3.3 gives this stored energy its name, **elastic potential energy**, and lesson 3.4 puts it to full use", matching 3.3 (which previews ½kx²) and 3.4 (which uses it fully).
2. Box example, Check step: now "Had you pushed with a force equal to the friction (49.05 N) on a box that was already sliding, it would keep a constant speed and the net work would be zero." Calcs entry `box-friction` `shown` updated to match.
3. Cosmology callout: now "that work is why the energy of radiation falls faster than that of matter (the same loss shows up as the stretching of each light wave; MIT 8.286, Lecture 15)", and "when no heat flows in" added. "Stretching of each light wave" used instead of "redshift of each photon", since redshift and photons are not yet introduced at this point of the High School.
4. Opening paragraph: "when the object moves along or against the direction of the force".
5. Area section: "For an object moving forwards, area below the horizontal axis ... counts as negative work."
Calcs info items: `ramp-angle` now computes θ = asin(0.5) = 30° directly; new entry `quiz-rope-divide` for the quiz 1 distractor "12 J". The quiz 5 "10 J" distractor stays described in a `where` only (cheap to add later, not a result). The MIT 13.4.14 citation for W = −μ_k F_N Δx was not added: 13.4.5 with the stated F_N = mg note is correct.
Checks: `pytest tests/calc -k work` all pass; `content:check` reports no error for this page (the one error is in conservation-of-energy, a different lesson).
