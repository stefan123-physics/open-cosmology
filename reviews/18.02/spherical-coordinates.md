---
page: content/year-1/18.02/spherical-coordinates.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-26-spherical-coordinates/ (read: local copy lec.html, title "Lecture 26: Spherical Coordinates", canonical URL matches `source.url`; its only .pdf link is ee609387e71dee7352b7f42764042549_RMBGQtwkoyU.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/ee609387e71dee7352b7f42764042549_RMBGQtwkoyU.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec26", 15 short pages, no printed page numbers; cited page = PDF page; text per page checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read: local copy w11.html, "Week 11 Summary", canonical URL matches; PDF c081c812df4a020e26de273c7cea957c_lec_week11.pdf; PDF p. 1 is a cover; Lecture 26 = printed p. 1 (PDF p. 2), which ends at "…we have only one", and printed p. 2 (PDF p. 3), which starts "component to compute. Then F_z = …" and ends Lecture 26 with the Newton's theorem computation before "18.02 Lecture 27")
  - content/year-1/18.02/_course.json (read: Lecture 26 = Spherical Coordinates, Lecture 27 = Vector fields in 3D)
  - content/year-4/8.286/expanding-sphere.mdx (read: lecture 6; "By the shell theorem, a shell feels only the mass inside it", M(r_i) = (4π/3) r_i³ ρ_i)
  - calcs/18.02/spherical-coordinates.yaml (read; `npm run calc:test -- -k spherical-coord`: 7 passed)
  - `npm run content:check`: no error or warning for this page except the missing review file (the 2 errors reported are on another, unfinished page, flux-through-surfaces.mdx)
verdict: pass-with-notes
---

# Review: Spherical coordinates and gravitational attraction

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 11 summary, `reading2` = transcript. Every formula is at the cited place:
- "Spherical to cylindrical and rectangular" (`reading2`, p. 3): transcript p. 3 ("z equals rho cos phi … r will be rho sine phi … x … rho sine phi cos theta … y … rho sine phi sine theta … rho is the square root of r squared plus z squared … x squared plus y squared plus z squared"). Correct; also notes p. 1.
- "Surface element of a sphere" (`reading2`, p. 7): transcript p. 7 ("delta s, is going to be approximately … a squared sine phi delta phi delta theta … a squared sine phi d phi d theta"). Correct; also notes p. 1.
- "Volume element in spherical coordinates" (`reading1`, "Lecture 26, p. 1"): notes printed p. 1 (dV = ρ² sin φ dρ dφ dθ, twice). Correct; also transcript p. 7.
- "Volume of the cap" (`reading2`, pp. 10–11): bounds assembled on pp. 8–10 (ρ from (1/√2) sec φ to 1 on p. 9, φ to π/4 and θ to 2π on p. 10), answer "2pi over three minus 5pi over six root two" on p. 11. Correct; also notes p. 1.
- "Gravitational force of a solid" (`reading2`, p. 13): transcript p. 13 ("the triple integral over your solid of G m x, y, z over rho cubed, delta dV"). Correct; also notes p. 1.
- "The z component" (`reading2`, p. 14): transcript p. 14 (F_z = G m ∫∫∫ z/ρ³ δ dV, then "Gm triple integral of delta cos phi sine phi d rho d phi d theta"). Correct; in the notes the first form is on p. 1, the spherical form on p. 2 (the prose says "notes, pp. 1–2", right).
- "Newton's theorem" (`reading1`, "Lecture 26, p. 2"): notes printed p. 2: bounds 0..2π, 0..π/2, 0..2a cos φ, result (4/3)πGmδa = GMm/a², M = (4/3)πa³δ. Correct. The transcript (pp. 14–15) states the theorem without the computation, as the page says.

No "rights reserved" or "courtesy" notice in the transcript, the Week 11 summary or the two OCW pages (grep: no match). The page has no figures, so no lecture diagram is reproduced. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bold statement in "Newton's theorem", flashcard 3, frontmatter `summary` | Transcript p. 15 and notes p. 2: the attraction of the planet on a test mass outside it (the computation is for a mass on the surface). | "A sphere … attracts like a point of the same mass at its centre", with no restriction to outside points. Inside a uniform ball the force is smaller (∝ distance from the centre), so the unqualified flashcard is false for interior points. | Add "on a mass outside it or on its surface" in the flashcard back and the bold statement (the summary can say "on an outside mass"). |
| 2 | warning | Read-aloud of "Volume of the cap" and "Newton's theorem" | | TeX correct and renders, but `texToSpeech` gives "the integral over 0 of to the power pi over 4, end of power, …" for `\int_0^{\pi/4}` and "… to the power pi over 2, end of power" in the Newton formula (tested by running both through lib/speech.ts). Same site-wide bug as in the triple-integrals review #1. Also "5 pi over 6 the square root of 2" leaves open whether √2 is in the denominator. | Fix the `\int_…^{…}` rule in lib/speech.ts (site-wide); optionally have products in a denominator grouped ("over the quantity 6 root 2"). Not a fault of the page text. |
| 3 | info | "Gravitational force of a solid": `\int\int\int_R` | Notes and transcript write a triple integral sign with R below. | `\int\int\int_R` renders with the R only on the last ∫ and wide spacing. | Optional: `\iiint_R` (check that read-aloud supports it; content:check warns `\iint` is unsupported on another page, so leave it if `\iiint` is not handled either). |
| 4 | info | Paragraph "Integrating in this order, ρ first, …" | Transcript p. 5: the ray / north-south / around-the-axis description comes before the surface element is derived. | Placed after the dV formula. | Fine as a reordering for readability; no change needed. |
| 5 | info | "Newton's theorem", density | Transcript p. 15: uniform density, "or actually it's enough for the density to depend just on distance to the center"; notes p. 2 state uniform density only. | Gives both, cited to transcript and notes; the formula assumes uniform δ (δ pulled out of the integral). | Fine. Optional: say the computation shown is for uniform δ. |
| 6 | info | Cosmology callout, shell theorem | Lecture 26 does not state or prove the shell theorem (interior force zero). | "(The companion fact, that a uniform spherical shell exerts no net force on anything inside it, lets the matter outside be ignored.)" Correct physics and consistent with expanding-sphere.mdx line 69 ("a shell feels only the mass inside it"). | Optional: add "not proved in this lecture" so readers do not look for it here. |
| 7 | info | Not covered | Transcript p. 8: exercise to redo the cap in cylindrical coordinates (also notes p. 1); p. 12: first approximation by a point mass at the centre of mass is not exact for non-homogeneous or oddly shaped solids; p. 14: a solid with no symmetry axis (the Pyramid of Giza) must be done in x, y, z; p. 15: a planet away from the origin gives awkward bounds, the surface case is the tractable one; p. 3/p. 10 class questions. | Omitted. | Optional: one sentence for the centre-of-mass remark (it motivates the integral) and the cylindrical exercise, which would also make a good extra worked example (V = ∫₀^{2π}∫₀^{1/√2}∫_{1/√2}^{√(1−r²)} r dz dr dθ gives the same 0.2432). |

Prose page references checked against the sources:
- Opening, space analogue of polar coordinates: transcript p. 1. Correct.
- ρ, φ, θ definitions and ranges: pp. 1–2; notes p. 1. Correct (ρ from 0 to ∞ p. 1, φ from 0 to π across pp. 1–2, θ p. 2).
- Latitude/longitude analogy, φ = 0 at the North Pole, π at the South Pole: p. 2; notes p. 1. Correct.
- Polar coordinates in the rz half-plane with the angle from the z-axis: pp. 2–3. Correct.
- Centre symmetric problems on the z-axis: p. 3. Correct.
- ρ = a sphere; φ = π/4 cone, cos = sin, z = r; φ = const a cone; φ = π/2 the xy-plane, "flattest" cone; φ < π/2 upper half-space: p. 4; notes p. 1. Correct.
- Grid of a globe; parallel of radius a sin φ, arc a sin φ Δθ; meridian (great circle) of radius a, arc a Δφ: pp. 5–6; notes p. 1. Correct.
- Box ΔV = ΔS Δρ with a replaced by ρ: p. 7; notes p. 1. Correct.
- Cap is last lecture's slanted cap rotated: p. 8; notes p. 1. Correct (the plane z = 1 − y of Lecture 25 is at distance 1/√2 from the origin).
- Enter through the plane ρ = (1/√2) sec φ, leave through ρ = 1: pp. 8–9. Correct.
- φ from 0 to π/4, by the slice (p. 9) or by ρ = 1 and cos φ = 1/√2 (p. 10); notes p. 1 ("edge of the region is at z = r = 1/√2"). Correct.
- Evaluation not done, sec³ and a substitution: p. 11. Correct.
- Horizontal plane like a line not through the origin in polar coordinates: p. 10. Correct.
- Average distance and moments of inertia about the z-axis as applications: p. 11. Correct.
- Inverse-square law, sum over pieces, Earth example: p. 12; notes p. 1. Correct (the page's "far side of the Earth" paraphrases the Boston/Somerville/China example).
- Test mass at origin, magnitude GΔMm/ρ², direction ⟨x, y, z⟩/ρ: pp. 12–13; notes p. 1. Correct.
- ΔM = δ ΔV; vector integral componentwise; ρ³ = (x² + y² + z²)^{3/2} unpleasant: p. 13. Correct.
- z-axis as axis of symmetry, force along z, powers of ρ cancel: p. 14; notes pp. 1–2. Correct.
- Black-hole remark: p. 15. Correct.
- Sphere tangent to the xy-plane at the origin, ρ = 2a cos φ from the inscribed right triangle with hypotenuse 2a: notes p. 2. Correct.

## Arithmetic and answer checks
- Cap: inner integral (1 − sec³φ/(2√2))/3; ∫₀^{π/4} sin φ/cos³φ dφ = [1/(2cos²φ)]₀^{π/4} = (2 − 1)/2 = ½; so V = 2π · (1/3)(1 − 1/√2 − 1/(4√2)) = 2π/3 − 5π/(6√2) ≈ 2.0944 − 1.8512 = 0.2432. Matches MIT (p. 11; notes p. 1). Also equals πh²(3 − h)/3 with h = 1 − 1/√2 (calcs `cap-volume`, `cap-closed-form`).
- Newton: ∫₀^{π/2} 2a cos²φ sin φ dφ = 2a/3; times 2π gives 4πa/3; so F_z = (4/3)πGmδa = G(4/3 πa³δ)m/a² = GMm/a². Correct (calcs `newton-theorem`, checked only at a = 1.7, but the hand derivation is general).
- Worked example (a): ∫ρ³ dρ = ¼, ∫₀^π sin φ dφ = 2, ∫dθ = 2π, product π; π/(4π/3) = 3/4. Correct (calcs `average-distance`). "Most of the volume of a ball is near its surface" is a fair reading (half the volume lies beyond ρ = 0.794).
- Worked example (b): (1/3)(1 − 1/√2)(2π) = 0.61343 ≈ 0.613. Correct (calcs `cone-volume`). 0.613 − 0.243 = 0.370; exactly 2π/3(1 − 1/√2) − (2π/3 − 5π/(6√2)) = π/(6√2) = (1/3)π(1/√2)²(1/√2) = 0.37024. Correct (calcs `lower-cone`). The example is original (MIT only names the average distance as an application, without computing it).
- Quiz 1: φ = π/2 is the xy-plane; answer 2. Correct, explanation correct.
- Quiz 2: dV = ρ² sin φ dρ dφ dθ; answer 1. Correct, explanation correct.
- Quiz 3: ρ = √(3² + 4²) = 5; answer 1. Correct (calcs `quiz-3`).
- Flashcards: 1 and 2 correct; 3 correct for outside or surface points only (see #1).
- `npm run calc:test -- -k spherical-coord`: 7 passed.

## Coverage and order
- The page follows the lecture order: definitions and conversions (pp. 1–3), surfaces (p. 4), surface and volume elements (pp. 5–7), the cap example (pp. 8–11), applications (p. 11), gravitational attraction (pp. 12–14), Newton's theorem (pp. 14–15), plus the notes' computation (notes p. 2). One paragraph (integration order) is moved after dV (#4).
- Omissions listed in #7 are minor; no MIT segment of substance is left out.
- leadsTo: 18.02 Lecture 27 is "Vector fields in 3D"; notes p. 2 list "Vector fields in space" and "Flux" for it. Correct. 8.286 Lecture 6 is the expanding-sphere page (lecture: 6), which uses the mass inside a shell as a point mass. Correct and fairly stated.

## Licensing
- All sources are under OCW's CC BY-NC-SA licence; no "All rights reserved" or "Courtesy of" notices found.
- No copied paragraphs: the prose is rewritten. Short phrases close to the transcript ("flattest of cones", "shooting a ray from the origin") are standard and brief.
- No OpenStax or LibreTexts material.

## Notes
- The cosmology callout is accurate: in Guth's model (expanding-sphere.mdx) the mass inside a shell acts as if at the centre (Newton's theorem) and the outer shells exert no net force (the shell theorem). The page correctly marks the second as a companion fact; it is not in Lecture 26 (#6).
- The frontmatter `summary` is long (about 75 words); fine for the schema, which passed.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the statement of Newton's theorem, flashcard 3, the summary and the Summary bullet now say it holds for a mass outside the sphere or on its surface.
- **Warning 2 (read-aloud of integrals with grouped upper limits):** a bug in lib/speech.ts, site code this run may not change; recorded as an owner note in docs/RUN-lessons-run-2.md.
- Info: the Newton computation now says "uniform density δ"; the callout says the shell theorem is not proved in this lecture. The other info items are left as they are.
