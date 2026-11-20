---
page: content/year-1/18.02/triple-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-25-triple-integrals/ (read: local copy lec.html, title "Lecture 25: Triple Integrals"; its only .pdf link is 38639286417c91d6080856f6affd754f_44R5HgbrUmc.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/38639286417c91d6080856f6affd754f_44R5HgbrUmc.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec25", 5 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week10/ (read: local copy w10.html, "Week 10 Summary"; PDF f7eb65206a728a6010805ff4a8421312_lec_week10.pdf; PDF p. 1 is a cover; Lecture 25 starts on printed p. 2 = PDF p. 3, under the Exam 3 review list, and printed p. 3 = PDF p. 4 starts at "Average value of f over R")
  - content/year-1/18.02/_course.json (read: Lecture 25 = Triple Integrals, Lecture 26 = Spherical Coordinates)
  - content/year-4/8.286/expanding-sphere.mdx (read: lecture 6, M(r_i) = (4π/3) r_i³ ρ_i, mass inside a shell fixed)
  - calcs/18.02/triple-integrals.yaml (read; `npm run calc:test -- -k triple-integrals`: 7 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Triple integrals and cylindrical coordinates

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 10 summary, `reading2` = transcript. Every formula is at the cited place:
- "Triple integral" (`reading2`, p. 1): transcript p. 1 ("the integral over this region over function f dV … dx dy dz or any permutation of that"). Correct; also notes p. 2.
- "Bounds for z" (`reading2`, p. 1): transcript p. 1 ("dz first, and then, say, dy dx … from the bottom surface … x squared plus y squared … four minus x squared minus y squared"). Correct; also notes p. 2.
- "The volume in rectangular coordinates" (`reading1`, "Lecture 25, p. 2"): notes printed p. 2 (PDF p. 3), the full V = ∫∫∫ with ±√2, ±√(2 − x²). Correct; the same bounds are spoken on transcript p. 2.
- "The volume in cylindrical coordinates" (`reading2`, p. 2): transcript p. 2 ("keep dz … r dr dθ … four minus r squared … r goes from zero to root two, and theta goes from zero to two pi"). Correct; also notes p. 2.
- "Volume element" (`reading2`, p. 3): transcript p. 3 ("dx dy dz becomes r dr d theta dz"). Correct; also notes p. 2.
- "Centre of mass" (`reading2`, p. 3): transcript p. 3 ("x bar is one over the mass times triple integral of x density dV. And, same thing with y and z"). Correct; notes p. 3 give x̄ only.
- "Moments of inertia about the axes" (`reading1`, "Lecture 25, p. 3"): notes printed p. 3 (PDF p. 4): I_z = ∫∫∫ r²δ dV = ∫∫∫ (x² + y²)δ dV, I_x = ∫∫∫ (y² + z²)δ dV, I_y = ∫∫∫ (x² + z²)δ dV. Correct; the transcript states them in words on p. 4.
- "Moment of inertia of a cone" (`reading2`, p. 4): transcript p. 4 (bounds r 0 to z/a, θ 0 to 2π, z 0 to b; "you should end up getting pi b to the five over 10a to the four if I got it right"). Correct; also notes p. 3.
- "The cap" (`reading2`, p. 5): transcript p. 5 gives the y bounds 0 to 1 and the x bounds ±√(2y − 2y²); the z bounds (1 − y to √(1 − x² − y²)) are spoken at the end of p. 4. The assembled integral in order dz dx dy is written only in the notes, printed p. 3. Acceptable (see #3).

No "rights reserved" or "courtesy" notice in the transcript, the Week 10 summary or the two OCW pages (grep: no match). No diagrams from the lecture are reproduced (the page has no figures). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Read-aloud of five formulas: "Bounds for z", "The volume in rectangular coordinates", "The volume in cylindrical coordinates", "Moment of inertia of a cone", "The cap" | | The TeX is correct and renders correctly, but `texToSpeech` (lib/speech.ts) garbles an integral whose upper limit is a group: e.g. the cylindrical volume is read "the integral over r squared of to the power 4 minus r squared, end of power, d z r d r d theta", and the cone "the integral over 0 of to the power z over a, end of power". Tested by running every `<Formula>` tex through `texToSpeech`. `content:check` does not flag it. The same fault is on earlier pages (e.g. polar-double-integrals "The quarter disc in polar coordinates", double-integrals "Over the quarter disc"), so it is a site-wide speech bug, not a fault of this page. | Fix the `\int_…^…` rule in lib/speech.ts so it runs before `groupTex` adds "end of power" (or matches the grouped form); then re-test these formulas. Not a reason to change the page. |
| 2 | warning | Frontmatter `summary` and last bullet of `## Summary`: "a solid cone z = ar up to z = b has I_z = πb⁵/(10a⁴)" | Transcript p. 4 and notes p. 3: density δ = 1. | Omits δ = 1 (the body says it). | Add "of density 1" (or "with δ = 1") in both places. |
| 3 | info | Formula "The cap", `cite="reading2" at="p. 5"` | The full triple integral is written in the notes, printed p. 3; the transcript states the z bounds on p. 4 and the x, y bounds on p. 5. | Cites transcript p. 5 only. | Optional: `at="pp. 4–5"`, or cite `reading1` "Lecture 25, p. 3". |
| 4 | info | "A cap of the ball", bounds for y | Transcript p. 5 ("the bounds on y will be zero to one", left as an exercise); notes p. 3 explain: x² < 2y − 2y² has solutions only for 0 < y < 1, or from the picture. | Uses 0 to 1 in the formula without saying where it comes from. | Optional one clause: "y runs from 0 to 1, where 2y − 2y² ≥ 0". |
| 5 | info | "Cylindrical coordinates", θ | Transcript p. 2: θ is measured from the x-axis counterclockwise; with the x-axis towards us, θ = 0 is to the front. Notes p. 2: "angle from xz-plane". | "θ the angle from the x-axis (which in the usual drawing points towards us)". | Fine; optional "counterclockwise seen from above". |
| 6 | info | "Applications", symmetry sentence | Transcript p. 3: x̄ = ȳ = 0, and z̄ can also be found by the top-bottom symmetry (the two paraboloids are mirror images in z = 2, so z̄ = 2). Notes p. 3 give only x̄ = ȳ = 0. | Mentions x̄ = ȳ = 0 only. | Optional: add z̄ = 2 by the symmetry about z = 2. |
| 7 | info | Cosmology callout and `R` | The page uses R for the solid region throughout; the callout uses R for the radius of the ball. The symbol entry R for this page says both ("in the cosmology note, the radius of the ball"). | Two meanings of R on one page. | Acceptable as documented; optional: write "a ball of radius R₀" or reuse the expanding-sphere page's r_i. |
| 8 | info | Cosmology callout, "the mass is the triple integral ∫∫∫ ρ dV = (4π/3)R³ρ" | Lecture 25 does not compute a ball's volume; Lecture 26 (spherical coordinates) is where it is done naturally. | States the result without derivation. | Fine (the result is standard and correct, and the leadsTo to Lecture 26 is there); optional "(computed in spherical coordinates next lecture)". |
| 9 | info | Not covered | Transcript pp. 3–5: question about describing a full vertical plane in cylindrical coordinates; density units remark; centre of mass equivalent for forces and translation, not rotation; motivation for I (spinning tops, gears); exercise to set up the cone with dz first; course logistics (Monday holiday). | Omitted. | Optional; the exercise (cone with dz first: ∫₀^{2π}∫₀^{b/a}∫_{ar}^{b} r² · r dz dr dθ) would make a good addition. |

Prose page references checked against the sources:
- Opening (same as the plane with one more coordinate; review the plane first): transcript p. 1. Correct.
- Triple integral as sum of f times small volumes: p. 1; notes p. 2. Correct.
- Setting up bounds is the new difficulty; simple integrands: p. 1. Correct.
- Two paraboloids, volume = ∫∫∫ 1 dV, curved top and bottom, circular edge by rotation symmetry: p. 1; notes p. 2. Correct.
- z first because top and bottom are easy for given (x, y); x first would need front and back: p. 1. Correct.
- Inner bounds may depend on both outer variables: p. 2 (first lines). Correct.
- Shadow; bottom below top gives x² + y² ≤ 2, disc of radius √2: p. 2; notes p. 2. Correct. (The notes' text has a typo "4 − x² − y² > x² − y²"; the page correctly has x² + y².)
- Symmetry by 2, 4 or 8: p. 2 (also p. 3). Correct.
- After the inner integral 4 − 2x² − 2y², the height; polar coordinates make it easy: p. 2. Correct.
- Cylindrical coordinates definition: pp. 2–3; notes p. 2. Correct.
- r = a cylinder; θ = constant a half-plane because r ≥ 0: p. 3; notes p. 2. Correct.
- ΔV = ΔA Δz: p. 3; notes p. 2. Correct.
- z first or last = shells vs discs: p. 3. Correct.
- Mass, average, weighted average, centre of mass: p. 3; notes pp. 2–3 (mass on p. 2, the rest on p. 3). Correct.
- Symmetry works only if density is symmetric: p. 3. Correct.
- I uses squared distance; r to the z-axis, √(y² + z²) to the x-axis: pp. 3–4; notes p. 3. Correct.
- Flat objects: the old "about the origin" was about the z-axis: transcript end of p. 3 into p. 4; notes p. 3 ("consistent with I₀ in 2D case"). Correct. The link to polar-double-integrals goes to the page with I₀ = ∫∫ r²δ dA. Correct.
- Cone: z = ar, slope a, up to z = b, δ = 1; slices are discs of radius z/a; first slice z = 0, last z = b: p. 4; notes p. 3. Correct.
- Cap: unit ball above z = 1 − y; z from plane to sphere; shadow by squaring gives x² < 2y − 2y², an ellipse, projection of a slanted circle: pp. 4–5; notes p. 3. Correct.
- For the volume alone, rotate the cap onto the z-axis; not always possible for other integrands: p. 5. Correct.

## Arithmetic and answer checks
- Shadow: x² + y² ≤ 4 − x² − y² ⇔ 2(x² + y²) ≤ 4 ⇔ x² + y² ≤ 2, radius √2 ≈ 1.4142. Correct (calcs `shadow-radius`).
- Paraboloid volume (the page's own evaluation): inner integral (4 − r²) − r² = 4 − 2r²; 2π ∫₀^√2 (4 − 2r²) r dr = 2π [2r² − r⁴/2]₀^√2 = 2π (4 − 2) = 4π ≈ 12.566. Correct (calcs `paraboloid-volume`). The page rightly says the lecture leaves it unevaluated (notes p. 2: "evaluation easy, not done").
- Cone: ∫₀^{z/a} r³ dr = z⁴/(4a⁴); times 2π gives πz⁴/(2a⁴); ∫₀^b gives πb⁵/(10a⁴). Correct (calcs `cone-inertia`, identity with a = 1.5 fixed and b sampled; a is not varied, but the hand derivation above is general).
- Cap shadow: (1 − y)² < 1 − x² − y² ⇔ 1 − 2y + y² < 1 − x² − y² ⇔ x² < 2y − 2y². Correct. Squaring is valid because 1 − y ≥ 0 on the region (y ≤ 1). The region is x² + 2(y − ½)² < ½, an ellipse, as stated.
- Worked example (cylinder r ≤ 1, 0 ≤ z ≤ 2, δ = z; original, not in MIT):
  - M = ∫₀¹ r dr · 2π · ∫₀² z dz = ½ · 2π · 2 = 2π ≈ 6.2832. Correct (calcs `cylinder-mass`).
  - ∫∫∫ z · z dV = ½ · 2π · 8/3 = 8π/3; z̄ = (8π/3)/(2π) = 4/3 ≈ 1.33, above the mid-height 1. Correct (calcs `cylinder-zbar`).
  - I_z = ∫₀¹ r³ dr · 2π · ∫₀² z dz = ¼ · 2π · 2 = π = ½ M · 1². Correct (calcs `cylinder-inertia`). The remark that the vertical distribution of mass does not matter is right here because δ depends only on z.
- Callout: ∫₀^R 4πs² ds = (4π/3)R³; times uniform ρ gives the mass. Correct (calcs `ball-mass`; its `source` says `reading2` p. 3 although the lecture does not contain it; `origin: page-own` is right, so the source line is optional to tidy).
- Quiz 1: dV = r dr dθ dz; answer 1. Correct, explanation correct.
- Quiz 2: r = 2 is a cylinder of radius 2 about the z-axis; answer 2. Correct, explanation correct.
- Quiz 3: I_x = ∫∫∫ (y² + z²)δ dV; answer 1. Correct; explanation correct.
- Flashcards: all three correct (z-first recipe; cylindrical coordinates, dV, r = a cylinder, θ = constant half-plane; I_z, I_x, I_y).
- `npm run calc:test -- -k triple-integrals`: 7 passed.

## Coverage and order
- The page follows the lecture order: triple integral definition, paraboloid example (z first, shadow, rectangular bounds, polar), cylindrical coordinates (definition, r = a, θ = constant, dV), applications (volume, mass, average, centre of mass, moments of inertia), Example 2 (cone, dr dθ dz order), Example 3 (cap). Matches transcript pp. 1–5 and notes pp. 2–3.
- Omitted: see #9 (classroom questions, motivation, logistics, the cone exercise). Nothing of substance in the notes is missing.
- Added: the 4π evaluation (marked as the page's own), the worked example (original), the cosmology callout.
- Notation: ∫∫∫ is written as three `\int` signs, as asked. Read-aloud says "the integral of the integral of the integral over R of f d V", which is understandable; the limits problem is #1. Visually the subscript R sits under the last sign only, a common convention.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in any source read; nothing to credit beyond MIT OCW.
- No paragraphs copied. Closest wording: "the first slice is z = 0, the last z = b" vs notes "the first slice is z = 0, the last one is z = b", a short technical phrase; acceptable.
- Worked example is original (own solid and density). No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: correct and fairly attributed. The 8.286 expanding-sphere page (Lecture 6) uses M(r_i) = (4π/3) r_i³ ρ_i for the mass inside a shell, fixed as long as shells do not cross, and the resulting deceleration ä = −(4π/3)Gρa; "its gravity slows the expansion" matches. The leadsTo entry (8.286, Lecture 6) is right; the 8.286 page's lecture field is 6.
- leadsTo 18.02 Lecture 26 = "Spherical Coordinates" in `_course.json`; the reason given ("regions like balls and cones") is correct.
- Prerequisite `simply-connected-regions` (Lecture 24) is the previous lecture's page; it exists (still untracked in git).
- The transcript hedges the cone result ("if I got it right"); the page states it as fact, which is fine because it is verified above.
- Verdict pass-with-notes: no errors; #1 is a site-wide read-aloud bug to fix in lib/speech.ts, #2 a small wording fix on the page.

## Resolution (2026-11-16, by the page author)

- **Warning 1 (read-aloud of integrals with grouped upper limits):** this is a bug in lib/speech.ts, site code that this lessons run may not change. It is recorded as an owner note in docs/RUN-lessons-run-2.md. The page's TeX is correct.
- **Warning 2:** the summary and the Summary bullet now say the cone has density 1.
- Info: the page now gives z̄ = 2 by symmetry, and says why y runs from 0 to 1 in the cap. The other info items are left as they are.
