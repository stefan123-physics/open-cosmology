---
page: content/year-1/8.01/vectors.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter3/ (read; course notes Ch. 3 PDF, text extracted with pdftotext, Sections 3.1–3.3 compared in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/review-vectors/ (read; segment list 0.1–0.6 and license footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/review-vectors/0-1-vectors-vs--scalars/ through 0-6-going-between-representations/ (pages fetched, but they contain only the video player, titles and a transcript-PDF link; the video transcripts were NOT read, so segment-level content could not be compared)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/video_galleries/video-lectures/ (read; lecture titles only, the Lecture 4 video/notes were not read)
verdict: pass-with-notes
---

# Review: Vectors

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout, "In 1929 Edwin Hubble found..." | (not in 8.01 source) | Credits the velocity–distance law to Hubble alone in 1929 | Physics is right, history is simplified: most of the redshifts were Slipher's, and Lemaître published the relation in 1927. Consider "In 1929 Edwin Hubble showed..." or add a short note on Lemaître and Slipher. |
| 2 | warning | Polar ↔ Cartesian `<Formula>` (Eqs. 3.2.2–3.2.5) | Eq. (3.2.5) θ = tan⁻¹(y/x), with the quadrant rule given later in 3.3 (after Eq. 3.3.9) | Same formula, with no quadrant caveat at that point | Matches MIT. The arctangent-trap callout appears later, so a short "(check the quadrant, see below)" here would help. |
| 3 | warning | Frontmatter `readings.location: Sections 3.1–3.3` | Section 3.3 includes 3.3.2 "Transformation of Vectors in Rotated Coordinate Systems" (Eqs. 3.3.20–3.3.32) and Example 3.1 | The page does not cover rotated coordinates, the r̂/θ̂ ↔ î/ĵ transformations (Eqs. 3.2.6–3.2.9), or unit vectors from components (Eq. 3.3.11) | Narrow the location to "3.1–3.3.1 (excluding rotated coordinates)", or mention what is left out. |
| 4 | info | Polar unit vectors paragraph | In cylindrical coordinates r̂ points away from the z-axis (3.2.2) | "r̂ points straight away from the origin" | Correct in the plane (polar). It only differs for cylindrical coordinates, which the paragraph also mentions. Optionally add "(from the z-axis, in cylindrical coordinates)". |
| 5 | info | Vector addition section | MIT lists four addition properties (commutative, associative, identity Eq. 3.1.3, inverse Eq. 3.1.4) and scalar-multiplication rules (Eqs. 3.1.5–3.1.9: associativity, distributivity, identity) | Gives the first two as a formula and the zero vector/opposite in prose. Leaves out the distributive laws. | Acceptable simplification. Optionally add c(A+B)=cA+cB. |
| 6 | info | Cosmology callout, `cite="guth"` | 8.286 (2013) Lecture 4 is titled "The Kinematics of the Homogeneous Expanding Universe" (confirmed from the OCW video list) | Cites Lecture 4 with that exact title. The reference URL points to the video gallery, not the lecture itself. | The title and number are correct. Optionally link the Lecture 4 page directly. |

All six formula citations match the MIT notes: (3.1.1)–(3.1.2), (3.1.10), (3.2.2)–(3.2.5), (3.3.4), (3.3.5), (3.3.6)–(3.3.8) and (3.3.14). Each has the same physics and the same equation numbers. The page's notation (hats, |A| ≡ A, θ measured counterclockwise from +x) matches MIT.

## Arithmetic and answer checks
- Worked example, rover: A = (5.0 cos30°, 5.0 sin30°) = (4.330, 2.500) m ✓; B = (3.0 cos120°, 3.0 sin120°) = (−1.500, 2.598) m, shown as 2.60 ✓; C = (2.830, 5.098) m, shown as (2.83, 5.10) ✓; |C| = √34.00 = 5.831, shown as 5.83 m ✓; θ_C = tan⁻¹(5.098/2.830) = 60.96°, shown as 61.0° ✓.
- Worked-example check: the legs are 90° apart (120° − 30°) ✓; √(25+9) = 5.831 ✓; tan⁻¹(3/5) = 30.96°, shown as 31.0° ✓; 30° + 30.96° = 60.96°, shown as 61.0° ✓. The two methods agree.
- Diagram 1: A = (4,1), B = (1,3) drawn from (4,1), so the sum is (5,4). In the VectorDiagram component the sum uses `--plot-3`, which is green in both themes (#15803d / #4ade80), so "green arrow" in the caption is correct ✓.
- Diagram 2: A = (4,3), so |A| = 5 ✓ and θ = tan⁻¹(3/4) = 36.87°, shown as 36.9° ✓.
- Rover diagram: endpoints (4.33, 2.5) and (2.83, 5.1) lie inside the extent [−1,6]×[−1,6] ✓, and the components match the worked example ✓.
- Arctangent-trap callout: (−2,3) and (2,−3) have the same ratio −1.5 and point in opposite directions ✓. Adding 180° when A_x < 0 is correct ✓.
- Quiz answers are 0-based (`lib/schema.ts`, `components/Quiz.tsx`):
  - Q1, answer 2 = "Temperature at a point" ✓
  - Q2, answer 1 = 5: √(9+16) = 5 ✓
  - Q3, answer 2 = 127°: tan⁻¹(−4/3) = −53.13°, and 180° − 53.13° = 126.87° ✓. The explanation is right: (−3,4) and (3,−4) give the same ratio.
  - Q4, answer 1 ✓
  - Q5, answer 1 ✓, consistent with MIT Eq. (3.2.1) and the statement that Cartesian coordinates are the only system where that equation holds for every pair of points.
- Flashcards: all six are correct and consistent with Eqs. (3.3.5), (3.3.6), (3.1.10), (3.3.14) and the four-element list in 3.2 ✓.
- Hubble callout physics: v = H r is correct as the vector form of Hubble's law. A positive scalar keeps the direction, so the motion is radial ✓. The claim that the same law holds for every comoving observer, so there is no centre, is correct (r' = r − r₀ gives v' = H r'). Two small points: "every galaxy moves straight away from us" ignores peculiar velocities, and the law is exact only for proper distance and velocity. Both are fine at this level.

## Coverage and order
- MIT segment titles: 0.1 Vectors vs. Scalars → 0.2 Vector Operators → 0.3 Coordinate Systems and Unit Vectors → 0.4 Magnitude and Direction → 0.5 Vector Decomposition into Components → 0.6 Going Between Representations.
- The page follows this order, except that it introduces components (0.5 material) before magnitude and direction (0.4). That is the order of the course notes (Eq. 3.3.4 before 3.3.5–3.3.9). Because the transcripts were not read, I could not confirm what 0.4 actually covers. The ordering difference is minor (info, uncertain).
- Additions not in MIT: the PhET simulation, the arctangent-trap callout (an expanded version of MIT's quadrant remark after Eq. 3.3.9), the original rover example, and the 8.286 Hubble callout.
- Omissions: Example 3.1 (3D components) is not reproduced, which is fine since the page has its own example. Rotated-coordinate transformations, the polar↔Cartesian unit-vector relations and the 3D unit-vector formula (3.3.11) are also missing (see row 3). Sections 3.4+ (cross product) are correctly out of scope.

## Licensing
- The MIT sources checked (lesson pages, Chapter 3 PDF resource page) are CC BY-NC-SA 4.0. The page declares CC BY-NC-SA 4.0 ✓.
- No "All rights reserved" or "Courtesy of" material was found in Chapter 3 Sections 3.1–3.3 (text search). The page uses no MIT figures, because its diagrams are generated from numbers.
- No OpenStax or LibreTexts material was detected.
- There is no verbatim copying beyond standard terminology. A few lines closely track MIT:
  - the list "Position, displacement, velocity, acceleration, force and momentum" (MIT 3.1.1)
  - the scalar examples mass and temperature
  - the four-element coordinate-system list (MIT 3.2)

  These are standard lists and acceptable, but rewording the vector list slightly would be safer.
- The worked example is original (MIT's Example 3.1 uses different vectors in 3D).

## Notes
- No error-level findings.
- Uncertain: the content of the 8.01SC video segments 0.1–0.6 (transcripts not read) and the exact content of 8.286 Lecture 4. Only the lecture's title and number were verified, and they match. That this kinematics lecture covers Hubble's law and its observer-independence is plausible but was not checked against the video.

## Resolution (2026-11-14, by the page author)
- Hubble's law callout now credits Slipher's redshifts and Lemaître (1927) alongside Hubble (1929).
- Quadrant caveat added right after the polar ↔ Cartesian formula.
- Readings location narrowed to Sections 3.1–3.3.2 (rotated coordinates and cross products are left for later pages).
- Open: segment order vs. 0.4/0.5 and video transcripts not compared. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
