---
page: content/year-1/18.02/velocity-and-keplers-second-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-6-keplers-second-law/ (read: local copy of the lecture page HTML; title "Lecture 6: Kepler's Second Law"; its transcript link is the reading2 URL below)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/dfd7a35b2f7fbd9a008b3431bc95188b_0D4BbCa4gHo.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec06", 4 dense pages, no printed page numbers; cited page = PDF page, text per page checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week3/ (read: local copy week3.pdf, linked as c13c3e11c5ec920d0d3d7ede037b5016_lec_week3.pdf; PDF p. 1 is a cover; Lecture 6 is entirely on printed p. 1 = PDF p. 2, confirmed with pdftotext -f 2 -l 2; Lecture 7 "Review" starts lower on the same page)
  - content/year-1/18.02/_course.json (read: Lecture 6 = Kepler's Second Law, Lecture 7 = Exam Review, Lecture 8 = Partial Derivatives)
  - content/year-5/Ferreras/rotation-curves.mdx (read, for the cosmology callout)
  - calcs/18.02/velocity-and-keplers-second-law.yaml (read; `npm run calc:test -- -k velocity-and-kep`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Velocity, acceleration and Kepler's second law

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 6 = printed p. 1). `reading1` = Week 3 summary, `reading2` = transcript. Every `<Formula>` cites `reading2` with a transcript page except "Area swept in a short time", which cites `reading1` "Lecture 6, p. 1"; every in-text "p. N" / "notes, p. 1" matches. No "rights reserved" or "courtesy" notice in the transcript or the Week 3 summary (grep of both text files: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Arc length and the unit tangent vector", arch length | Transcript p. 2: Auroux says he cannot integrate it now, "we'll see one later using a cool trick, and multi-variable calculus"; notes p. 1: "(can't do)". | Says the lecture leaves it unevaluated, then evaluates it with the half-angle identity: integrand 2 sin(t/2), length 8 radii. | The page's addition is correct and clearly marked as its own (bracketed). Strictly √(4 sin²(t/2)) = 2\|sin(t/2)\|, which equals 2 sin(t/2) on [0, 2π]; optionally add "(positive on 0 ≤ t ≤ 2π)" and the antiderivative step [−4 cos(t/2)] from 0 to 2π = 4 + 4 = 8. Optional: mention that Auroux promises a later method. |
| 2 | info | Worked example (a), r × v | z-component of r × v is x·v_y − y·v_x = 2 cos 3t · 6 cos 3t − 2 sin 3t · (−6 sin 3t). | Writes "2 cos 3t · 6 cos 3t + 2 sin 3t · 6 sin 3t". | The value 12 is right, but the shown expression hides the minus sign of the cross product and the minus of v_x. Optional: write "2 cos 3t · 6 cos 3t − 2 sin 3t · (−6 sin 3t)". |
| 3 | info | Cosmology callout | (Not in MIT.) | A star in a spherical galaxy or its dark matter halo sweeps equal areas whatever the force law; rotation curves are evidence for dark matter. | Correct for a spherically symmetric mass distribution (force central). The link is via central forces, not via equal areas: rotation curves use v_c² = G M(r)/r, which also rests on spherical symmetry. For a disc galaxy the pull is not exactly central (only the angular momentum about the symmetry axis is conserved); the callout's "spherical" wording keeps it correct. Optional: one clause saying that the circular speed at each radius is what rotation curves measure. |
| 4 | info | "Kepler's second law", "both halves of the law" | Transcript p. 3 and notes p. 1 include "the motion is in a plane" in Kepler's second law. | Follows the lecture. | Fine as the lecture's framing. Historically, planar orbits are usually counted with the first law; no change needed since the page follows MIT. |
| 5 | info | Coverage, after the r × v formula | Transcript p. 4: for any motion, r and v at a given instant span a plane (the instantaneous plane of motion); staying in one plane means r × v does not change direction. | Says "a fixed plane means a fixed direction" without the general remark. | Optional sentence. Also the edge case r × v = 0 (purely radial motion), where no plane is defined, is not discussed by either source; no change needed. |
| 6 | info | "Acceleration" | Transcript p. 1: a car at a constant 55 miles an hour on a tight turn. | Generic "car taking a tight curve"; quiz uses 80 km/h. | Rewritten, not copied. No change. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, pp. 1, 3)": parametric recap on p. 1, the vector motivation for Kepler on p. 3. Correct.
- Position vector OP, cycloid r(t) = ⟨t − sin t, 1 − cos t⟩ with angle = time at unit speed: transcript p. 1 (the text layer drops the bracket contents; notes p. 1 confirm). Correct.
- "Velocity" (`reading2`, p. 1): differentiate component by component, ⟨dx/dt, dy/dt, dz/dt⟩: p. 1; notes p. 1. Correct.
- Cycloid v = ⟨1 − cos t, sin t⟩, zero at t = 0, "moving just before and just after": p. 1; notes p. 1. Correct.
- "Speed of the cycloid" (`reading2`, p. 1): √((1 − cos t)² + sin² t) = √(2 − 2 cos t): p. 1 (plus signs lost in the text layer); notes p. 1. Correct. Top speed 2 at t = π, translation and rotation add (cancel at the bottom: notes p. 1): p. 1. Correct.
- "Acceleration" (`reading2`, p. 1): a = dv/dt, the a of F = ma, same as the everyday notion only on a straight line: p. 1. Correct. a = ⟨sin t, cos t⟩, ⟨0, 1⟩ at t = 0, slows, stops, reverses, vertical tangent: end of p. 1 and p. 2, so "(pp. 1–2)" is correct.
- \|dr/dt\| ≠ d\|r\|/dt, no simple formula, rarely needed: p. 2; notes p. 1. Correct.
- Arc length as a mileage counter with a reference point: p. 2. "Arc length and speed" (`reading2`, p. 2): ds/dt = \|v\| with the remark about an absolute value for back-and-forth motion: p. 2; notes p. 1. Correct.
- Unit tangent T̂ = v/\|v\|: p. 2; notes p. 1. "Velocity as direction times speed" (`reading2`, p. 2): dr/dt = dr/ds · ds/dt = T̂ ds/dt: p. 2; notes p. 1. Correct.
- Δr ≈ T̂ Δs, limit Δt → 0: p. 2; the student question (chord not tangent, slightly shorter than the arc) is at the top of p. 3, so "(pp. 2–3)" is correct.
- Kepler 1609, plane and constant areal rate, faster when closer, Newton late 17th century, "nearly obvious" with vectors: p. 3; notes p. 1 ("about 70 years later"). Correct.
- "Area swept in a short time" (`reading1`, "Lecture 6, p. 1"): area ≈ ½\|r × Δr\| ≈ ½\|r × v\|Δt: notes p. 1 exactly; also transcript p. 3. Correct.
- r × v normal to the plane of motion: end of p. 3 into p. 4, "(pp. 3–4)" correct. "Kepler's second law in vector form" (`reading2`, p. 4): "r cross v equals a constant vector": p. 4. Correct.
- Product rule for dot and cross products, keep the order: p. 4; notes p. 1. "Differentiating r × v" (`reading2`, p. 4): v × v + r × a = r × a: p. 4; notes p. 1. Correct.
- a parallel to r, central force, towards or away not decided, electric point charge: p. 4; notes p. 1. Correct. The 8.01 angular-momentum remark is the page's own and is correct (r × mv conserved when torque r × F = 0).

## Arithmetic and answer checks
- `npm run calc:test -- -k velocity-and-kep`: 10 passed. Recomputed by hand as well:
- Cycloid: (1 − cos t)² + sin² t = 1 − 2 cos t + cos² t + sin² t = 2 − 2 cos t. At t = π: √4 = 2. Correct.
- Arch length: √(2 − 2 cos t) = √(4 sin²(t/2)) = 2 sin(t/2) on [0, 2π]; ∫ = [−4 cos(t/2)] from 0 to 2π = 4 − (−4) = 8. Correct (the well-known 8r for a cycloid arch).
- Worked example (a): v = ⟨−6 sin 3t, 6 cos 3t⟩, speed 6; a = ⟨−18 cos 3t, −18 sin 3t⟩ = −9 r; (r × v)_z = 12 cos² 3t + 12 sin² 3t = 12; areal rate 12/2 = 6. All correct (see finding 2 for the displayed sign).
- Worked example (b), t = π/2: v = ⟨1 − 0, 1⟩ = ⟨1, 1⟩, speed √2 ≈ 1.414 = √(2 − 0); T̂ = ⟨1, 1⟩/√2 at 45°; a = ⟨1, 0⟩. All correct.
- Quiz 1: v = ⟨2t, 3⟩ → ⟨2, 3⟩ at t = 1; √13 ≈ 3.606 is the speed (distractor). Answer 0 correct.
- Quiz 2: constant speed on a curve, velocity turns, acceleration non-zero. Answer 1 correct (matches transcript p. 1).
- Quiz 3: r × v constant. Answer 1 correct; explanation "length twice the rate of sweeping" agrees with rate = ½\|r × v\|.
- Quiz 4: \|dr/dt\| ≠ d\|r\|/dt; circle example gives d\|r\|/dt = 0 with non-zero speed. Answer 1 correct.
- Flashcards: all three correct (r × v constant ⟺ d/dt(r × v) = r × a = 0 ⟺ a ∥ r).

## Coverage and order
- The page follows the lecture's order exactly: position vector and cycloid → velocity → speed → acceleration (car example, cycloid at t = 0) → \|dr/dt\| ≠ d\|r\|/dt → arc length → unit tangent and v = T̂ ds/dt → why dr/ds = T̂ (with the student question) → Kepler's second law → area via cross product → r × v constant → product rule → r × a = 0 → central force, electric charges.
- Left out: only the general remark that r and v span an instantaneous plane for any motion (finding 5) and Auroux's promise of a later method for the arch length (finding 1). Both minor.
- Added: the arch-length evaluation (correct, marked as the page's own), the 8.01 angular-momentum link, the worked example (original numbers), the cosmology callout.
- leadsTo: Lecture 8 "Partial Derivatives" matches `_course.json`; the note that Lecture 7 is the exam review matches both the syllabus and the Week 3 summary ("18.02 Lecture 7 ... Review"). Correct.

## Licensing
- No "rights reserved" or "courtesy" notice in either source. No figures are reused; the page has no images.
- Text is rewritten throughout; I found no copied sentence beyond standard terminology ("position vector", "unit tangent vector", "central force"). The mileage-counter and tight-turn analogies come from the lecture but are rephrased.
- The worked example (circle of radius 2 at angular rate 3; cycloid at t = π/2) and the quiz numbers are original; the lecture's only worked case is the cycloid at t = 0 and t = π.
- No OpenStax or LibreTexts material.

## Notes
- The cosmology callout's link `/courses/fundamentals-of-dark-matter/rotation-curves` points to an existing page (Ferreras, slug `rotation-curves`), whose content (circular speed from enclosed mass, Keplerian fall versus flat curves) fits the callout. The claim is stated fairly and not attributed to MIT.
- Internal links `/courses/18-02/parametric-equations` and `/courses/8-01/angular-momentum-point-particle` point to existing pages; `content:check` reports no errors.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

- Info 1: the arch-length bracket now says sin(t/2) ≥ 0 on [0, 2π], gives the antiderivative −4 cos(t/2), and mentions that the lecture promises a later method.
- Info 2: the z-component of r × v in worked example (a) now shows x v_y − y v_x with its signs (calcs updated).
- Info 3: the callout adds that the central pull sets the speed of a circular orbit, which is what rotation curves measure.
- Info 4–6 are left as they are.
