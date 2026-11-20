---
page: content/year-1/8.01/kinematics-2d.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter5/ (read, from a pdftotext conversion of the Chapter 5 PDF supplied by the caller; Sections 5.1, 5.2, 5.2.1 and Examples 5.1-5.2 read in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/ (read, segment list for Lesson 3: 3.1-3.5)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/3-5-demos-for-projectile-motion/ (read; page holds two demo videos, "Shooting an Apple" and "Relative Motion Gun"; videos not watched)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-1-kinematics/3-1-coordinate-system-and-position-vector-in-2d/ (segment title confirmed from the lesson index; videos for 3.1-3.4 not watched)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-4-the-kinematics-of-the-homogeneous-expanding-universe/ (read, from the Lecture 4 transcript text supplied by the caller)
verdict: pass-with-notes
---

# Review: Motion in two dimensions and projectiles

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot under "The path is a parabola" (`range={[0, 16]}`, `domain={[0, 45]}`) | n/a | Sliders allow v0 up to 20 m/s, θ0 up to 85° and h up to 10 m. The peak height is h + v0² sin²θ0/(2g), up to 30.3 m (v0 = 20, θ0 = 85°, h = 10). With h = 0 and v0 = 20 the top is cut off for every θ0 above about 62°. With h = 10 and v0 = 20 the range reaches 49.4 m (θ0 = 35°), past the 45 m domain. | Use `range={[0, 32]}` and `domain={[0, 50]}`, or lower the slider maxima (e.g. v0 ≤ 17 m/s, h ≤ 5 m, θ0 ≤ 75°). |
| 2 | warning | Coverage, end of "Projectile motion" / worked examples | Ch. 5 Example 5.2 "Hitting the Bucket" (aim straight at a dropped target; both fall the same distance, Eqs. (5.1.34)-(5.1.51)), and segment 3.5 shows it as the "Shooting an Apple" demo. | Not covered. The quiz question on two balls leaving a table touches the same idea but does not reach the "aim at the target" result. | Add a short original paragraph or quiz item: a ball thrown straight at a target released at the same instant hits it, because both fall ½gt² below their gravity-free paths. |
| 3 | info | Quiz Q3 (dropped vs pushed ball) | Ch. 5 states its model ignores air resistance. | The question does not say "ignoring air resistance", though the explanation relies on it. | Add "Ignoring air resistance," to the question, as Q1 does. |
| 4 | info | Plot, dashed curve "same speed at 45°" | n/a | The caption correctly says 45° is best "on level ground", but the dashed 45° curve is also drawn when h > 0, where it is no longer the longest (v0 = 20, h = 10: 49.1 m at 45° vs 49.4 m at 35°). | Optional: add "(for h > 0 the best angle is a little below 45°)" to the caption. |
| 5 | info | Formula "Projectile position and velocity", `at="Eqs. (5.1.16)–(5.1.17) with a_y = −g"` | (5.1.16)-(5.1.17) are written with a general a_y: y0 + v_y,0 t + ½ a_y t², v_y,0 + a_y t. | Substitutes a_y = −g. | Correct, and the `at` text says so. No change needed. |
| 6 | info | "Initial velocity components" | (5.1.7)-(5.1.8) also give v0 and θ0 back from the components, with a note that tan⁻¹ gives two angles. | Only (5.1.5)-(5.1.6). | Optional: add the inverse relations and the caveat. |
| 7 | info | Range formula in "Range on level ground", and Summary | Ch. 5 does not derive the level-ground range v0² sin(2θ0)/g or the 45° optimum. | States both. | Correct physics (checked); it is an addition beyond MIT, which is fine. Could say "not in the MIT notes" if the project marks additions. |
| 8 | info | Cosmology formula `cite="guth4"` | Guth, Lecture 4: dx/dt = c/a(t), with x in "notches" and a in meters per notch. | Same formula, no `at`. | Add `at="Lecture 4, light in comoving coordinates"` for consistency with the other formulas. |

All `<Formula>` equation numbers were checked against the chapter text: (5.1.1)-(5.1.3) position/velocity/acceleration, (5.1.5)-(5.1.6) launch components, (5.1.14)-(5.1.15) a_y = −g, a_x = 0 (printed in Section 5.2 with 5.1.x numbering, as the page says), (5.1.16)-(5.1.17) position and velocity, and (5.1.33) orbit equation in Section 5.2.1 with x0 = y0 = 0. The page's orbit equation matches (5.1.33) exactly. F_g = −mg ĵ matches (5.1.10).

## Arithmetic and answer checks
- Cliff example: t = √(40/9.8) = 2.020 s (page 2.02, correct); x = 8.0 × 2.020 = 16.16 m (page 16.2, correct); v_y = −9.8 × 2.020 = −19.80 m/s (correct); speed √(64 + 392) = 21.35 m/s (page 21.4, correct); angle tan⁻¹(19.8/8.0) = 68.0° below horizontal (correct).
- Range example: v_x,0 = 15 cos 35° = 12.29 m/s (page 12.3), v_y,0 = 15 sin 35° = 8.604 m/s (page 8.60); t = 2(8.604)/9.8 = 1.756 s (page 1.76); t_top = 0.878 s (page 0.88); y_max = 8.604²/19.6 = 3.777 m (page 3.78); range 12.29 × 1.756 = 21.57 m, and v0² sin 70°/g = 21.57 m (page 21.6). All correct.
- Plot caption: "On level ground, 45° gives the longest range" is correct (R ∝ sin 2θ0). Default plot (v0 = 15, θ0 = 35°, h = 0) peaks at 3.78 m and lands at 21.6 m, matching the worked example; the 45° dashed curve peaks at 5.74 m and lands at 22.96 m. Both fit inside the default axes. Clipping at other slider settings: see row 1.
- Quiz Q1 (answer 1, "It stays the same"): correct. Q2 (answer 2, "horizontal"): correct. Q3 (answer 2, "They land together"): correct without air resistance. Q4 (answer 2, "A parabola"): correct; the explanation matches the Section 5.2.1 derivation.
- Flashcards: all four correct and consistent with (5.1.1)-(5.1.6), (5.1.14)-(5.1.16).
- Drag claim in the warning callout: MIT Figure 5.1 caption gives b = 0.01 N·s²·m⁻², v0 = 30 m/s, θ0 = 21°, and the actual distance is 71.7% of the drag-free one. The page's "about 72%" is a fair rounding. The note about spin and curved paths is also in MIT's text.
- "Galileo's law of free fall": MIT calls it "Galileo's Law of Free Falling Bodies", at the same point (after Eq. (5.1.15)). Consistent.
- "Slope gives the direction, not the speed": matches MIT (5.1.30)-(5.1.32) and the sentence after them.

## Coverage and order
- OCW Lesson 3 segments: 3.1 Coordinate System and Position Vector in 2D, 3.2 Instantaneous Velocity in 2D, 3.3 Instantaneous Acceleration in 2D, 3.4 Projectile Motion, 3.5 Demos for Projectile Motion. The page follows this order: vectors r, v, a, then projectiles, then the PhET sim in place of the demos.
- Chapter 5 order (5.1 vectors, 5.2 projectile motion, Example 5.1, 5.2.1 orbit equation, Example 5.2) is followed, except that Example 5.2 / segment 3.5 "Shooting an Apple" is left out (row 2).
- MIT Example 5.1 (time to top and maximum height, stone thrown at 45° and 20 m/s from 2 m) has an original counterpart on the page ("Range on level ground"). The numbers and setup differ.
- Additions not in MIT: the remark that Cartesian unit vectors do not rotate, the velocity being tangent to the path and the acceleration not needing to be, the level-ground range formula, and the PhET sim. All are correct.

## Licensing
- The OCW lesson pages carry CC BY-NC-SA 4.0. The page declares the same license.
- Both worked examples are original (cliff roll-off at 8.0 m/s from 20 m; kick at 15 m/s, 35°). Neither copies MIT Example 5.1 or 5.2.
- No verbatim passages from Chapter 5 found. The James Joyce *Ulysses* epigraph at the head of Chapter 5 (third-party, copyrighted) is not reused. No "Courtesy of" figures are reused, and no OpenStax or LibreTexts material was found.
- The PhET "Projectile Motion" sim is embedded, not copied. PhET is CC BY-NC 4.0 (corrected 2026-11-14 from PhET's licensing page), which is compatible with this non-commercial site.

## Notes
- Cosmology callout checked against the 8.286 Lecture 4 transcript. Guth says that galaxies sit at "approximately" constant comoving coordinates, that the scale factor is physical distance per coordinate distance (meters per notch), and that the light-ray coordinate speed is dx/dt = c/a(t) in notches per second. The page's wording ("nearly fixed grid positions", physical distance = grid distance × a(t), coordinate speed shrinks as the grid stretches) is accurate and fairly attributed. "Shrinks" assumes a(t) is increasing, which holds for an expanding universe.
- The `leadsTo` text ("light crosses those coordinates at a rate set by the scale factor") matches the lecture.
- The video content of segments 3.1-3.5 was not watched. The comparison of claims rests on the Chapter 5 text.

## Resolution (2026-11-14, by the page author)
- Plot axes widened (x to 50 m, y to 31 m) so every slider setting stays on screen.
- Added "Aiming at a falling target" section covering the idea of MIT Example 5.2 / segment 3.5 demo, in original words.
- Quiz question 3 now says "ignoring air resistance"; cosmology formula now has a location.
- Open: video segments not compared. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
