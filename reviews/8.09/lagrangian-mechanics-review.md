---
page: content/year-4/8.09/lagrangian-mechanics-review.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (read: resource page, title "8.09(F14) Chapter 1: A Review of Analytical Mechanics", CC BY-NC-SA 4.0, links the PDF below)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: local copy, printed pp. 1-7 compared as page images because the text extraction garbles equations; Section 1.5, pp. 21-22, read as text to check the leadsTo claim)
  - content/year-4/8.286/geodesic-equation.mdx (read, for the leadsTo claim)
  - content/year-5/8.902/inflation-scalar-field.mdx (read, for the leadsTo and callout claim)
verdict: pass-with-notes
---

# Review: Newton to Lagrange: inertial frames and the Euler–Lagrange equations

All 17 `<Formula>` blocks were checked against the page images of the notes (pp. 2-7). Every one matches the notes in content and notation, and every equation number and printed page is right. I found no errors. The findings below are wording, attribution and a cross-link claim that needs to be sharper.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "The same equations for fields", and `leadsTo` 8.902 Lecture 12 | (8.902 notes, as written on our page `inflation-scalar-field`) The inflaton has the Lagrangian density of eq. (367), but its equation of motion φ̈ + 3Hφ̇ = −dV/dφ (eq. 370) is obtained by putting ρ and p into the **energy conservation equation**, not by the Euler–Lagrange equations. Also, the flat-space ℒ of eq. (367) alone gives no 3Hφ̇ term: that needs the √−g (a³) factor of an expanding universe. | "its equation of motion is the Euler–Lagrange equation of a Lagrangian density" (callout); "its equation of motion is an Euler–Lagrange equation" (`leadsTo.why`) | The physics is right, but a reader who follows the link will not find an Euler–Lagrange derivation there. Suggested wording: "8.902 Lecture 12 defines the inflaton by a Lagrangian density and gets its equation of motion from energy conservation; the same equation is the Euler–Lagrange equation of that Lagrangian in an expanding universe." |
| 2 | warning | "Newton's law in two forms", para. 1 | Notes p. 2: "Momenta are likewise either Newtonian pᵢ = mᵢvᵢ or generalized pᵢ." The canonical momentum is defined on p. 8 (Hamiltonian half). | "or generalized momenta $p_i$, defined below." | Nothing below on this page defines them; they are defined on the next page (`hamiltonian-mechanics-review`). Say "defined on the next page" or define $p_i = \partial L/\partial \dot q_i$ in a short bracket. |
| 3 | info | Intro paragraph | Notes p. 1: "the prerequisite classical mechanics II course", no course number. | "The prerequisite course (8.223)" | Correct (8.223 is MIT's Classical Mechanics II; the course file's notes say so too), but it is not from the notes. Fine as is; optionally write "the prerequisite course, Classical Mechanics II (MIT 8.223)". |
| 4 | info | End of "Newton's law in two forms" | Not stated in the notes. | "The first form leads to Lagrangian mechanics, the second to Hamiltonian mechanics." | A standard and true remark, and the notes' structure (Lagrangian then Hamiltonian, with "2N 1st order equations" again on p. 8) supports it. Acceptable; optionally mark it as the page's own framing. |
| 5 | info | "A particle inside a cone" | Notes p. 7: "whose opening angle α defines ... tan(α) = √(x²+y²)/z". | "half-opening angle α" | The page's reading is the correct one (tan α = r/z measures α from the axis, and Fig. 1.4 shows that), so this is an improvement. Optionally add a brief bracket that the notes call α the opening angle, in the same way the page already notes "rolling". |
| 6 | info | "The Lagrangian and the Euler–Lagrange equations" | Notes p. 3: "as we will discuss later, ... even this generalization does not describe all possible classical mechanics problems." | "friction, in Section 1.4, needs more." | Verified: Section 1.4 is "Constraints and Friction Forces" and treats friction with generalized forces Rⱼ. The page names the topic more specifically than the notes do at this point, which is fair. |
| 7 | info | "Inertial frames", Galilean transformation | Notes p. 2 give the same boost r′ = r + v₀t, t′ = t as "the" solution of r̈ = 0 ⟺ r̈′ = 0. | Same. | Faithful to the notes. Strictly, constant translations and fixed rotations also preserve inertial frames (the page itself says a fixed rotation "is harmless"). Leave as is or add "(together with fixed shifts and rotations)". |
| 8 | info | Plot point label | n/a (page's own plot) | "45° pitch" | For a helix, "pitch" usually means the rise per turn (a length), not an angle. "45° slope" would match the caption. |

## Arithmetic and answer checks
- Worked example (bead on a helix, page's own): b = 5.0/(2π) = 0.7958 cm → "0.796 cm" ✓. R/b = 10/0.7958 = 12.566 (= 4π) → "12.6" ✓. R²/b² = 16π² = 157.91 → "158" ✓. 1 + R²/b² = 158.91 → "159" ✓. z̈ = −9.81/158.91 = −0.06173 m/s² → "−0.0617 m/s²" ✓.
- Physics of the example: with z = bφ, ẋ² + ẏ² = R²φ̇² = (R²/b²)ż², L = (m/2)(1 + R²/b²)ż² − mgz, z̈ = −g/(1 + R²/b²) ✓. With tan β = b/R, 1/(1 + R²/b²) = tan²β/(1 + tan²β) = sin²β ✓, the vertical component g sin β · sin β of the acceleration along a frictionless ramp ✓. "Two constraints, one coordinate" ✓.
- Plot: curve x²/(1 + x²) with x = b/R equals 1/(1 + R²/b²) ✓; point (1, 0.5) lies on it ✓; domain [0, 3] and range [0, 1] contain the curve (maximum 0.9 at x = 3) ✓.
- Page remark on the cone: setting r̈ = 0 in eq. (1.21) gives rθ̇² = g cot α, so θ̇² = g cot α / r ✓, and it is correctly labelled as the page's own remark. With mr²θ̇ fixed and r free, a circular orbit at any r exists ✓.
- Formulas against the notes (images of pp. 2-7): Galilean transformation (p. 2, unnumbered) ✓; rotation matrix (p. 2, unnumbered, same sign convention) ✓; (1.1) both unit-vector derivatives ✓; (1.2) ✓; (1.3) ✓; (1.4) ✓; (1.5) on p. 4 ✓; (1.6) ✓; (1.8) ✓; (1.10) ✓; (1.12) on p. 5, the bracket times ∂Q/∂q ✓; (1.14) on p. 5 ✓; (1.16) on p. 6 ✓; (1.18) on p. 6 ✓; (1.19) on p. 7 ✓; (1.21) ✓; (1.22)-(1.23) combined ✓ (the notes' "− 0" in (1.22) is dropped, which is harmless). The prose summary of the proof (∂L/∂q̇ has one term because ∂Q/∂q̇ = 0; ∂L/∂q has two; the 2nd and 4th terms cancel because d/dt ∂Q/∂q = ∂Q̇/∂q) matches eqs. (1.9)-(1.13) ✓.
- Radial equation in words: d/dt(mṙ) − mrθ̇² + ∂V/∂r = 0 is eq. (1.15) ✓. "L̇_z = τ_z" matches the notes' L̇_z = F_θ = τ_z ✓.
- Quiz 1 (answer 1): r̈′ ≠ 0 for θ = ωt is the notes' statement ✓. Distractor 3 is indeed wrong: for x = vt, y = 0 the rotating-frame acceleration at the origin (t = 0) is ÿ′ = −2vω ≠ 0 (Coriolis). Explanation ✓.
- Quiz 2 (answer 1): form invariance under point transformations, key step ∂Q̇/∂q̇ = ∂Q/∂q ✓.
- Quiz 3 (answer 1): rise per turn 2πb = circumference 2πR gives b = R, z̈ = −g/2 ✓; g sin²45° = g/2 ✓.
- Quiz 4 (answer 0): θ is cyclic in (1.19), so mr²θ̇ is constant; expansion m r(2ṙθ̇ + rθ̈) matches (1.23) ✓.
- Flashcards: all five agree with the notes and the page ✓ (the word "holonomic" in card 4 is not used by the notes until Section 1.4, but it is the standard and correct term).
- Calcs file: `npm run calc:test -- -k lagrangian-mechanics-review`: 12 passed. The entries cover every number on the page (b, R/b, R²/b², 159, −0.0617, sin²β identity, the 45° point, sin²45°), plus identity checks of (1.2), (1.10), (1.19) and the circular-orbit remark. The helix entries cite "reading1, Section 1.2, p. 5" (where the notes mention the bead on a helix) with `origin: page-own`, which is appropriate.

## Coverage and order
- The page follows the notes' order for pp. 1-7: Section 1.1 introduction and references (p. 1); trajectories, generalized coordinates, dot convention, momenta (pp. 1-2); Newton's law in two forms (p. 2); inertial frames, their approximations and the two tests (p. 2); Galilean transformations and their v ≪ c limit (p. 2); example 1, rotating frame (p. 2); example 2, polar coordinates and "non-inertial coordinates" (p. 3); Lagrangian, T − V and its generalizations, Euler–Lagrange equations (p. 3); Hamilton's principle and the forward reference to Section 1.5 (p. 4); the three advantages, with the point-transformation proof and the "two things" it implies (pp. 4-5); constraints, N − k coordinates, bead on a helix and sliding-support pendulum (p. 5); polar-coordinate example (pp. 5-6); cone example in four steps (p. 7). Nothing on pp. 1-7 is missing.
- Omitted details (acceptable): the intermediate equations (1.7), (1.9), (1.11), (1.13), (1.15), (1.17), (1.20) are described in words rather than displayed; the notes' reminder "L = r × p and τ = r × F" is not repeated. Figures 1.1-1.4 are not reproduced and no diagram replaces them (fine; a drawn cone or rotated frame would be optional).
- Added by the page: the bead-on-a-helix worked example and plot (original, own numbers; the notes only name this system), the circular-orbit remark (labelled as the page's own), the sin²β ramp interpretation.
- Split: the Hamiltonian half of Section 1.2 (from p. 8) is left to `hamiltonian-mechanics-review`, as the page says. Course-file note (not the page): the syllabus has a separate entry for Section 1.1 but no page has `lecture: 1.1`, so the course page may list Section 1.1 as unwritten. Consider pointing that entry at this page (for example with `coveredBy`, if the course page honours it for non-textbook courses; I did not check that).

## Licensing
- Resource page and PDF: CC BY-NC-SA 4.0; no "rights reserved" or "courtesy" notice in the Chapter 1 text (grep: 0 hits). No figure from the notes is reused or redrawn.
- No copied sentences found. The closest paraphrases are the intro paragraph (course history and prerequisite, p. 1) and the two tests for non-inertial frames (p. 2); both are reworded and restructured, with only standard phrases ("advanced undergraduates", "fictitious forces", "point transformation", "non-inertial coordinates", the last in quotes and attributed to the notes).
- No OpenStax or LibreTexts material.
- The slip "rolling" (p. 7) is noted in brackets and not repeated ✓. I found no other slips on pp. 1-7 that the page repeats.

## Notes
- leadsTo 8.09 Section 1.5: verified. Section 1.5 (pp. 21-22) derives the Euler–Lagrange equations (1.78) from the variation of a functional and applies it to Hamilton's principle ✓.
- leadsTo 8.286 Lecture 13: verified in substance. Our page `geodesic-equation` finds geodesics as paths of stationary length by varying the path with fixed endpoints and integrating by parts; it never uses the words "Euler–Lagrange", but the method is exactly that, so "the same Euler–Lagrange machinery" is fair. The attribution "the notes remark that general relativity replaces inertial frames by geodesic motion" matches p. 2 ✓. (The 8.286 page says the fact that free particles move on geodesics is taken up in Lecture 14; the `leadsTo` text does not claim otherwise ✓.)
- leadsTo 8.902 Lecture 12: see finding 1.
- Symbols: about 70 meanings scoped to this page were read. They fit the page (α as the half-angle from the axis, β = atan(b/R), b per radian, k = number of constraints, F_θ as a torque, L′, Q, S′ and so on). Minor: the shared meaning of S ("the action ...; also the name of an inertial frame S") carries the unit J s, which does not apply to the frame reading. That is cosmetic; a separate unitless meaning for the frame, or dropping the unit, would be cleaner. θ, r̂ and θ̂ use their general meanings, which fit.
- No em dashes in the page or the calcs file (grep: 0). The title uses en dashes in "Euler–Lagrange", which is allowed.
- Prerequisite slugs all exist (8.033 `brachistochrone-catenary`, `symmetry-galilean-invariance`; 8.01 `angular-momentum-point-particle`, `newtons-second-law-circular-motion`).
- I did not check online that OCW 8.09 has no lecture videos; the page's statement agrees with the course file's notes.

## Resolution (2026-11-19, by the page author)

- Warning 1 (8.902 claim): the callout and the leadsTo now say that 8.902 Lecture 12 defines the inflaton by a Lagrangian density and gets its equation of motion from energy conservation, and that in an expanding universe the same equation is the Euler–Lagrange equation of that Lagrangian.
- Warning 2: "generalized momenta, defined below" now links to the next page (hamiltonian-mechanics-review), where they are defined.
- Info: the cone paragraph now notes in brackets that the notes call α the opening angle, though it is the half-angle between axis and side.
- Info: the plot label is now "45° slope" (calcs `shown` updated).
- Outside the page: the symbol meaning of S no longer carries a unit field (the unit J s is given in the text for the action only). The `coveredBy` for Section 1.1 in `_course.json` is left to the lead (writers do not edit that file); reported.
- Other info notes need no change. `npm run content:check` and `npm run calc:test` pass.
