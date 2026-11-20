---
page: content/year-0/hs-1/projectile-motion.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter5/ (read; PDF mit8_01scs22_chapter5.pdf, Sections 5.1, 5.2, Example 5.1, 5.2.1, Example 5.2; no "rights reserved" or "courtesy" notice; the PDF's own footer names "8.01 Classical Mechanics, Spring 2022")
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/vertical-projectile-motion-in-one-dimension/03-vertical-projectile-motion-in-one-dimension-02 (read; CC BY 3.0 footer present, listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/mathematics/grade-12/trigonometry/04-trigonometry-03 (read; CC BY 3.0 footer present, listed CCBY in docs/siyavula-licences.tsv)
verdict: needs-changes
---

# Review: Projectile motion

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Two motions at once": "Near the Earth's surface $g$ is the same for every object, light or heavy (reading 1, "Motion in a gravitational field")" | Siyavula 3.2 "Motion in a gravitational field" says the acceleration is towards the centre of the Earth and constant "regardless of the direction or magnitude of the velocity", about 9.8 m·s⁻². It says nothing about mass, light or heavy. MIT Sec. 5.2, p. 4–5 does: the acceleration "is a constant and is independent of the mass of the object" and is "constant for all bodies near the surface of the Earth" | Cites reading 1 for independence of mass | Cite the MIT notes, Sec. 5.2 (text after Eqs. (5.1.14) and (5.1.15)), for "light or heavy". Siyavula's sentence ("regardless of the direction or magnitude of the velocity") could instead be cited for the independence of the two motions, which it supports well. |
| 2 | error | calcs `newton-orbit-speed` and `orbit-speed-check` (the callout's "about 8 km/s") | MIT Ch. 5 treats uniform gravity only; it has no orbit speed, no Earth radius and no Newton's cannon | Both entries cite `mit`, Sec. 5.2; `orbit-speed-check` uses $R_E = 6.37\times10^{6}$ m with no source | A citation that does not support the number. Add a reference from §2.0 (e.g. NASA's Earth Fact Sheet, nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html, for the radius 6371 km and/or a NASA page on Newton's cannon or low orbits) to `references`, and cite it in both entries; or mark `newton-orbit-speed` as a standard figure recomputed by `orbit-speed-check` with the radius sourced. The value itself is right: $\sqrt{9.81 \times 6.371\times10^{6}} = 7.91$ km/s. |
| 3 | warning | Callout: "Block 8 shows how astronomers use the orbits of stars and gas in galaxies to weigh them, which is one of the clues to dark matter" | docs/HIGHSCHOOL-PLAN.md §4: weighing the Sun and the Galaxy with orbits (rotation curves) is lesson 2.13 (Block 2's "Towards the universe"); dark matter itself is 8.16 | Gives it to Block 8 only | "Block 2 ends by weighing the Sun and the Galaxy with orbits, and Block 8 shows how the orbits of stars and gas in galaxies point to dark matter." |
| 4 | warning | "Time of flight and range": "their values of $2\theta$, 60° and 120°, have the same sine (lesson 0.7, the unit circle)"; quiz 4 relies on the same fact ($\sin 50^\circ = \sin 130^\circ$) | Lesson 0.7 defines sine on the unit circle as the $y$-coordinate but never states $\sin(180^\circ - \alpha) = \sin\alpha$ (no 120°, 150° or symmetry statement found) | Treats it as known from 0.7 | Add one clause: "on the unit circle the points at $\alpha$ and $180^\circ - \alpha$ are mirror images in the $y$-axis, so they have the same height, the same sine". Then quiz 4 rests on this page. |
| 5 | warning | Calcs `shown` strings for `plot-height-30` ("the 60° throw goes three times as high") and `plot-height-ratio` ("The throws at 30° and 60° both land") | (calcs format) | The snippets do not contain the number they check | Use "(8.6 m against 2.9 m)" for `plot-height-30` and "the 60° throw goes three times as high" for `plot-height-ratio`. |
| 6 | info | "The highest point": "Use $v_f^{2} = v_i^{2} + 2a\,\Delta x$ ... for the vertical motion" | Siyavula and lesson 1.6 write $\Delta x$ for a displacement along a line | Uses $\Delta x$ for a vertical displacement on a page where $x$ is horizontal | Write "with $\Delta y$ in place of $\Delta x$", to avoid mixing the axes. Same in the cliff check step. |
| 7 | info | Formula "The trajectory", `at="Sec. 5.2.1, Orbit equation, Eq. (5.1.33)"` | MIT Eq. (5.1.33): $y = -\tfrac12 (g/v_{x,0}^2)x^2 + (v_{y,0}/v_{x,0})x$ | In $\tan\theta$ and $\cos^2\theta$ | Correct after substituting (5.1.5)–(5.1.6); add "with Eqs. (5.1.5) and (5.1.6) put in" to the `at`. |
| 8 | info | Formula "Range on level ground", `cite="reading2"` | Siyavula Maths 4.3 has "Derivation of sin 2α" only; no projectiles | Cites the maths page for a physics formula, with an `at` that says the range is derived here | Honest as written. Optional: cite `mit` "Sec. 5.2, Eq. (5.1.16), with y = 0 (derived here)" and keep reading 2 in the prose only. |
| 9 | info | Callout: "at about 8 km/s it never lands at all and circles the Earth" | (no source) | Air not mentioned | Newton's mountain stands above the air; add "(ignoring the air)" for accuracy. |

## Formulas and citations
- $a_x = 0,\ a_y = -g$, "Sec. 5.2, Eqs. (5.1.14) and (5.1.15)": checked, both in Sec. 5.2 (MIT numbers equations 5.1.x inside Sec. 5.2). Correct.
- $v_x = v_0\cos\theta,\ v_y = v_0\sin\theta$, "Eqs. (5.1.5) and (5.1.6)": checked (MIT writes $v_{x,0}$, $\theta_0$). Correct.
- Position, "Eq. (5.1.16), with the launch point as origin": MIT has $x_0 + v_{x,0}t$, $y_0 + v_{y,0}t + \tfrac12 a_y t^2$; with $x_0 = y_0 = 0$ and $a_y = -g$ it is the page's form. Correct, difference stated.
- Velocity, "Eq. (5.1.17)": checked. Correct.
- $t_{\text{top}}$, "Example 5.1, Eqs. (5.1.21) and (5.1.22)": checked. Correct.
- $y_{\max}$, "Example 5.1, Eq. (5.1.23) (there with a launch height d added)": checked, MIT gives $d + v_0^2\sin^2\theta_0/(2g)$. Correct, difference stated.
- $t_{\text{flight}}$, "Eq. (5.1.16) with y = 0 (derived here)": derivation on the page checked. Correct and honestly labelled.
- Range: algebra $v_0\cos\theta \cdot 2v_0\sin\theta/g = v_0^2\sin 2\theta/g$ checked; Siyavula 4.3 "Derivation of sin 2α" exists and gives $\sin 2\alpha = 2\sin\alpha\cos\alpha$ (from the compound-angle formula). See row 8.
- Trajectory: substitution checked: $y = x\tan\theta - g x^2/(2v_0^2\cos^2\theta)$. Correct; see row 7.
- Horizontal launch $t = \sqrt{2h/g}$, $x = v_0 t$: correct; `at` honest.
- Notation: SI, $g = 9.81$ m/s² (site convention; MIT and Siyavula use 9.8, as the calcs `g-site` entry says). No vector arrows; the page uses components only, consistent with lessons 0.8 and 1.3.
- Required content: the page states clearly that a constant acceleration gives a parabolic path ("The path is a parabola": eliminating $t$, quadratic in $x$, "Any constant acceleration gives a parabola ... as long as the starting velocity is not parallel to it", plus the flashcard and summary). The condition is right (parallel or zero initial velocity gives a straight line). The forward link to Block 6 (electron between charged plates) matches what Block 6 will need; Block 6 is not written yet, so PC 2 should make sure lesson 6.3 or 6.5 actually contains that example and links back here.
- Claims checked as standard and correct: landing speed and angle equal to the launch values on level ground; velocity along the trajectory; velocity at the top horizontal and non-zero; coin demonstration; air resistance shortens the range, makes the descent steeper and lowers the best angle below 45° (true for a launch at ground level with ordinary drag); MIT Figure 5.1 is indeed a computed drag example (71.7 % of the vacuum range).
- Callout (Newton's cannonball, orbits, dark matter): physics correct and not overstretched. It first says the parabola is an approximation for uniform gravity (which is exactly MIT's model, Sec. 5.2 p. 5 "modify the force law for objects no longer near the surface"), then gives Newton's thought experiment, then one sentence of forward pointer. Rows 2, 3 and 9 are the only issues.

## Arithmetic and answer checks
All recomputed independently in Python; `pytest tests/calc -k projectile-motion`: 45 passed. Every number on the page has a calcs entry.
- Free kick: $18\cos35^\circ = 14.745$ → 14.7; $18\sin35^\circ = 10.324$ → 10.3; $t_{\text{top}} = 1.0524$ → 1.05 s; $y_{\max} = 5.433$ → 5.43 m; $t_{\text{flight}} = 2.1049$ → 2.10 s; $R = 31.04$ → 31.0 m; check $324 \times \sin70^\circ/9.81 = 31.04$, $\sin 70^\circ = 0.9397$ → 0.940. Correct.
- At 1.5 s: $v_y = -4.391$ → −4.39 m/s; $y = 4.450$ → 4.45 m; $x = 22.12$ → 22.1 m. Correct ("past the top": 1.5 > 1.05).
- Three throws at 15 m/s: $15^2/9.81 = 22.936$ (plot constant 22.9358, and 45.8716 = twice it); ranges $22.936\sin60^\circ = 19.86$ → 19.9 m; 45°: 22.9 m; heights 8.601 → 8.6 m and 2.867 → 2.9 m; ratio exactly 3. Plot parametrisation ($s = t/t_{\text{flight}}$) checked: $x = (2v^2\sin\theta\cos\theta/g)s$, $y = (2v^2\sin^2\theta/g)(s - s^2)$ reproduces Eq. (5.1.16). Interactive plot domain 65 m ≥ max range 63.7 m (25 m/s, 45°); range 35 m ≥ max height 31.6 m (25 m/s, 85°). Correct.
- Cliff: $t = 2.0193$ → 2.02 s; $x = 24.23$ → 24.2 m; $v_y = 19.81$ → 19.8 m/s; speed $23.16$ → 23.2 m/s; angle $58.79^\circ$ → 58.8°; check $\sqrt{2 \times 9.81 \times 20} = 19.81$. Points at 0.5, 1.0, 1.5, 2.0 s: (6, 18.774), (12, 15.095), (18, 8.964), (24, 0.38). Correct; spacing 6.0 m correct.
- Callout: $\sqrt{gR_E} = 7.91$ km/s with $R_E = 6.371\times10^6$ m, "about 8 km/s". Correct (sourcing: row 2).
- Quiz 1: answer "9.81 m/s² straight down" correct; others wrong (zero; along the path; "zero vertically, but not horizontally" is the reverse of the truth). Explanation true.
- Quiz 2: $\sqrt{1.6/9.81} = 0.404$ → 0.40 s, same for both; faster lands twice as far. Correct.
- Quiz 3: $25\cos30^\circ = 21.65$ → 21.7 m/s; $25\sin30^\circ = 12.5$. Distractors 12.5 (sine), 25, 43.3 (= $25/\tan30^\circ$) all wrong. Correct.
- Quiz 4: 65° ($\sin130^\circ = \sin50^\circ$). 45° and 50° give other ranges ($\sin 100^\circ = 0.985 \ne 0.766$); 155° gives $\sin310^\circ < 0$, below ground. Correct.
- Quiz 5: four times. Correct.
- Flashcards: all five true. The parabola card's condition ("not parallel to the starting velocity") is right.

## Only earlier terms
- Vectors, components, Pythagoras for the size, $\tan^{-1}$ for the direction: lesson 0.8 (introducing-vectors) and 0.7. Introduced.
- Sine, cosine, tangent, $\tan\theta = \sin\theta/\cos\theta$, $\sin^2\theta$ notation, unit circle: lesson 0.7 (line 93 gives $\tan = \sin/\cos$; line 95 uses $\sin^2\theta$). Introduced; the page also explains $\sin^2$.
- $\sin(180^\circ - \alpha) = \sin\alpha$: not stated in 0.7 (row 4).
- $\sin 2\theta = 2\sin\theta\cos\theta$: introduced on this page, with reading 2 for the derivation. Fine.
- Parabola, opening downwards for a negative coefficient: lesson 0.6 (quadratics-and-power-laws). Introduced.
- Constant velocity (lesson 1.2), the four equations and braking distance $\propto v^2$ (lesson 1.6), free fall, $g = 9.81$, air resistance, "projectile" (lesson 1.7). Introduced.
- Projectile, trajectory, time of flight, range: defined on this page.
- Forward references only (fine, each marked with its block): forces (Block 2), electron, charged plates, electric field (Block 6), Newton's law of gravitation, orbit, dark matter (callout). "Electric field" is used in the parabola section and the flashcard before any lesson introduces it; acceptable as a labelled pointer, but the flashcard ("a charge in a uniform electric field") will mean little to a reader at this point (info).

## Coverage
- §4 row 1.8 "Projectile motion" (PhET projectile-motion, leads to `8-01/kinematics-2d`): independence of motions, components of the launch velocity, position and velocity at any time, highest point, time of flight, range and 45°, complementary angles, horizontal launch, parabola, air resistance, PhET sim. This covers the VWO horizontal and oblique throw well.
- Not covered: an oblique launch from a height (landing below the launch point, which needs the quadratic formula of lessons 0.6 and 1.6, as in MIT Example 5.1 with $d = 2$ m). This is a standard VWO exam situation (e.g. a shot put or a throw from a roof); worth one short worked example or a remark, or leave it to the Block 1 practice set (warning-level suggestion, not an error).
- The speed and angle at landing are covered (cliff example). Energy methods for projectiles belong to Block 3. Fine.

## Where this leads
- `leadsTo` 8.01 lecture 3 → `content/year-1/8.01/kinematics-2d.mdx` ("Motion in two dimensions and projectiles"), matching §4's `8-01/kinematics-2d`. Same topic; the "why" (vectors and integrating the acceleration) matches that page. Correct.
- `towards: false`: correct, 1.8 is not the block's last lesson (1.11 is).

## Licensing and AI terms
- No copied sentences found. Compared the page's prose with MIT Sec. 5.1–5.2.1 and Siyavula 3.2; the closest, "the x-component of the velocity remains unchanged throughout the flight" (MIT) vs "the horizontal velocity $v_x$ stays the same during the whole flight", is a standard idea in different words.
- No figures copied: all three graphs are `<Plot>`s generated from formulas; MIT Figures 5.1–5.11 are not reproduced (Figure 5.1 is only referred to).
- Worked examples and quiz are the page's own: MIT uses 20 m/s at 45° from 2 m and a ball-and-pail problem; Siyavula 3.2 uses vertical throws only (10 m/s, 19.6 m/s, a 92.4 m balloon drop and others). No overlap.
- No Siyavula logo, brand or "Everything Science" branding; both Siyavula pages carry the CC BY 3.0 footer and are listed CCBY in docs/siyavula-licences.tsv. Embedded Siyavula videos/sims not used.
- MIT Chapter 5 has no "excluded from our Creative Commons license" or "All rights reserved" notice. Its James Joyce epigraph (third-party text) is not used.
- No NASA material on the page; no insignia; no "according to NASA". ESO not used.
- No forbidden source cited or used (page and calcs searched for OpenStax, LibreTexts, Khan, CK-12).
- PhET projectile-motion is the sim named in §4.

## Notes
- The PDF behind the 8.01SC Fall 2016 resource URL is labelled "8.01 Classical Mechanics, Spring 2022" in its own footer (file name `mit8_01scs22_…`). The page's source title names 8.01SC; harmless, but the review of other Chapter-based pages has the same quirk.
- Calcs: only `quiz-kick-vx` carries `quiz: 2`; the other quiz entries have no `quiz:` key. Harmless if the format makes it optional.
- `content:check` reports nothing for this page except the missing review file (now written).

## Resolution (2026-11-20, by the page author)
1. "Light or heavy" now cites the MIT notes, Sec. 5.2, just after Eqs. (5.1.14) and (5.1.15); reading 1 is cited only for what it says (the acceleration is the same whatever the direction or size of the velocity).
2. Added reference `nasa-earth` (NASA Goddard, Earth Fact Sheet, volumetric mean radius 6371.000 km; checked with curl). Calcs: `newton-orbit-speed` replaced by `earth-radius` (fact, cites `nasa-earth`) and `orbit-speed-check` now uses R = 6371 km, expects 8 km/s within 2 % (√(gR) = 7.91 km/s), cites `nasa-earth` and says the speed is the page's own calculation, not in the source.
3. Callout now reads: Block 2 "ends by weighing the Sun and the Galaxy with orbits (lesson 2.13)", and Block 8 "shows how the orbits of stars and gas in galaxies point to dark matter (lesson 8.16)".
4. Added the unit-circle reason on this page: the points at α and 180° − α are mirror images in the y-axis, so sin(180° − α) = sin α. Quiz 4 now rests on it. (α needs a symbol meaning for this page: scratchpad/sym-fix-projectile-motion.json.)
5. `plot-height-30` now shows "(8.6 m against 2.9 m)" and `plot-height-ratio` "the 60° throw goes three times as high".
6. Both uses of v_f² = v_i² + 2aΔx (highest point, cliff check) now say "with Δy in place of Δx".
7. Trajectory `at` now adds "with Eqs. (5.1.5) and (5.1.6) put in".
8. Range formula now cites `mit` "Sec. 5.2, Eq. (5.1.16) with y = 0, combined with sin 2θ = 2 sin θ cos θ (reading 2, Sec. 4.3)"; reading 2 stays in the prose.
9. Callout says "(ignoring the air)" after "about 8 km/s".
Coverage note: added a section "Launched at an angle from a height" with the worked example "A stone from a roof" (15 m/s at 40° from 12 m: t = 2.83 s by the quadratic formula, other root −0.86 s, lands 32.5 m out; check via v_y = −18.1 m/s two ways and against the 1.97 s level-ground flight), with 10 new calcs entries (`roof-*`). Not changed: the electric-field flashcard (labelled forward pointer to Block 6, kept as the PC 2 hand-over item); the source title quirk (8.01SC URL, Spring 2022 PDF footer), harmless.
Checks: `pytest tests/calc -k projectile-motion` 55 passed; `content:check` reports only the α meaning for this page, left for the coordinator.
