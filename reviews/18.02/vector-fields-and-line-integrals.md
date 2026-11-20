---
page: content/year-1/18.02/vector-fields-and-line-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-19-vector-fields/ (read: local copy lec.html, title "Lecture 19: Vector Fields"; its only .pdf link is 041811d6aab8d55bc3f2959880eed05c_xrypSZU8cBE.pdf, matching the transcript reading; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/041811d6aab8d55bc3f2959880eed05c_xrypSZU8cBE.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec19", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week8/ (read: local copy week8.pdf; PDF p. 1 is a cover; Lecture 19 on printed pp. 2–3 = PDF pp. 3–4. Printed p. 2 runs from the Lecture 19 header through vector fields, the four examples, work and the line integral, the parabola example, parametrisation independence (x = sin θ, y = sin² θ) and the start of "New notation … dr = ⟨dx, dy⟩"; printed p. 3 has ∫ M dx + N dy, "the notation is dangerous", the example in differentials, the geometric approach and both circle examples, then Lecture 20)
  - content/year-1/18.02/_course.json (read: Lecture 19 = Vector Fields, 20 = Path Independence)
  - content/year-4/8.286/newtons-static-universe.mdx (read, for the cosmology callout and leadsTo: lecture 5)
  - content/year-1/8.01/work-in-two-and-three-dimensions.mdx (exists; target of the inline 8.01 link)
  - calcs/18.02/vector-fields-and-line-integrals.yaml (read; `npm run calc:test -- -k vector-fields-and`: 8 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: needs-changes
---

# Review: Vector fields and line integrals

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 8 summary, `reading2` = transcript. Formulas "Vector field" (`reading2`, p. 1), "Work as a line integral" (`reading2`, p. 2), "Computing a line integral" (`reading2`, p. 2), "The example" (`reading2`, p. 3), "Line integral in differentials" (`reading1`, "Lecture 19, p. 3"), "The example again" (`reading2`, p. 3) and "Tangential component" (`reading2`, p. 4) are all at the cited place. The limit in "Work as a line integral" is said in words on transcript p. 2 ("a limit as we cut into smaller and smaller pieces of the sum") and written as lim over Δr → 0 in the notes p. 2; the page's form is the notes' form, which is fine. The reading assignment is used consistently. No "rights reserved" or "courtesy" notice in the transcript or the Week 8 summary. The NASA wind and hurricane images (transcript p. 1) are only described in words on the page. No em dash on the page (grep: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Section "The notation M dx + N dy", last paragraph: "(pp. 3–4; notes, p. 3)" | The parametrisation remark (x = sin θ, y = sin² θ, 0 ≤ θ ≤ π/2, same 1/3, "in practice we always choose the simplest parametrization") is on notes printed **p. 2** (PDF p. 3), before the M dx + N dy notation. The shortcut "take x itself, y = x², dy = 2x dx" is only in the transcript (p. 4), not in the notes. | Cites notes p. 3. | Change to "(pp. 3–4; notes, p. 2)". |
| 2 | warning | Section "Work and the line integral", paragraph after "The example": "going along the $x$-axis and then round, against this rotating field, would give a negative work (p. 3)" | Transcript p. 3: "say I chose to instead go like this and then around like that, first I wouldn't do any work because here the force is perpendicular … then I would be going against the force all the way around." The path is only on the board; the transcript does not say which way along the x-axis or which way round. | States it as a general fact about "the x-axis and then round". The most natural reading, along the x-axis to (1, 0) and then up to (1, 1), gives ∫ −y dx + x dy = 0 + ∫₀¹ 1 dy = **+1**, not a negative number. A negative value needs a clockwise detour (e.g. out along the negative x-axis to (−√2, 0) and clockwise round the circle of radius √2 to (1, 1): −√2 · √2 · 3π/4 = −3π/2). | Either say which path ("out along the negative $x$-axis and then clockwise round, against the field") with a note that the board path is not in the transcript, or replace with a computed contrast: via (1, 0) the work is 1, not 1/3. Either way the point (path dependence) survives. |
| 3 | info | Section "The notation M dx + N dy", first sentence "(transcript, p. 3; notes, p. 3)" | Notes introduce dr = ⟨dx, dy⟩ ("this is in fact a differential") at the bottom of printed p. 2; the integral ∫ M dx + N dy is on p. 3. | notes, p. 3. | Optionally "notes, pp. 2–3". |
| 4 | info | Section "Vector fields", quote | Transcript p. 1: "In a corn field, every where you have corn." | "in a corn field, everywhere you have corn" | Harmless normalisation of a transcription; optionally keep the transcript spelling or drop the quotation marks. |
| 5 | info | Section "Work and the line integral": "The force and the path are both given, independently of each other (pp. 2–3)" | Transcript p. 2 ("These two guys I can choose completely independently of each other"). | pp. 2–3 | Optionally "(p. 2)". |
| 6 | info | Cosmology callout | Lecture 19 works in the plane; the force field mentioned on p. 1 is "a vector that is pointing down" near the Earth and "the gravitational field of planets, stars and so on". | "the force per unit mass a test particle would feel there", in an infinite (three-dimensional) universe. | Correct physics; the per-unit-mass refinement and the move to 3D are the page's own, which is fine. Optionally add "(in space, with three components)". |

Prose page references checked against the sources:
- Opening (new topic, put double integrals aside, completely different things): transcript p. 1. Correct.
- Definition F = M î + N ĵ, M, N functions of x, y, a vector at every point: transcript p. 1; notes p. 2. Correct.
- Velocity fields (wind maps), force fields (gravity of the Earth, planets, stars): p. 1; notes p. 2 ("wind flow", "gravitational field"). Correct.
- Drawing: choose points, stop when the pattern is clear, accuracy not the aim, computers can do it: p. 1. Correct.
- Four examples: 2î + ĵ constant; x î horizontal, zero on the y-axis, left for x < 0; x î + y ĵ radial, magnitude = distance, "a source at the origin that is pouring fluid out"; ⟨−y, x⟩ rotated 90° counterclockwise: p. 1; notes p. 2. Uniform rotation, time 2π, unit angular velocity, ⟨y, −x⟩ the other way: p. 2. "(pp. 1–2; notes, p. 2)" correct.
- Work F · Δr, energy provided by the force, change in kinetic energy if the only force: p. 2; notes p. 2. Correct.
- Cut C into pieces, limit of sums, written ∫_C F · dr: p. 2; notes p. 2. Correct.
- Small time intervals, displacement ≈ velocity × Δt, ∫ F · dr/dt dt, F evaluated on the trajectory at time t: p. 2; notes p. 2. Correct.
- Example x = t, y = t², 0 ≤ t ≤ 1, parabola from (0, 0) to (1, 1): p. 2; notes p. 2. Computation ⟨−t², t⟩ · ⟨1, 2t⟩ → t² → 1/3: p. 3; notes p. 2. Correct.
- Line integral does not tell you the motion (18.03, a rail or a hand forcing the path): p. 3. Correct.
- dr = ⟨dx, dy⟩, F · dr = M dx + N dy, everything in one parameter ("it could be x, it could be y, it could be time"): p. 3; notes pp. 2–3 (finding 3). The example redone with dx = dt, dy = 2t dt → 1/3: p. 3; notes p. 3. Correct.
- Depends on C, not on the parametrisation; sin θ, sin² θ "a lot of trig"; choose the simplest, possibly x itself: transcript end of p. 3 and p. 4 (correct); notes p. 2, not p. 3 (finding 1).
- Δr tangent, length Δs, dr = T̂ ds, dividing by dt gives v = T̂ ds/dt: p. 4; notes p. 3. Correct.
- F · T̂ the tangential component; useful only when field and curve are simply related ("an evil formula with x cubed plus y to the fifth"): p. 4. Correct.
- Circle of radius a, F = x î + y ĵ → 0; F = −y î + x ĵ → F · T̂ = a, work 2πa²; checked with x = a cos θ, y = a sin θ: p. 4; notes p. 3. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k vector-fields-and`: 8 passed. Recomputed by hand:
- "The example": ⟨−t², t⟩ · ⟨1, 2t⟩ = −t² + 2t² = t²; ∫₀¹ t² dt = 1/3. Correct.
- "The example again": −t² dt + t · 2t dt = t² dt → 1/3. Correct.
- Sine parametrisation: dx = cos θ dθ, dy = 2 sin θ cos θ dθ; −sin² θ cos θ + 2 sin² θ cos θ = sin² θ cos θ; ∫₀^{π/2} = [sin³ θ / 3] = 1/3. Correct (the notes add that it is the substitution t = sin θ; the page does not need it).
- Circles: F = x î + y ĵ is radial, T̂ tangential, F · T̂ = 0 → 0. F = −y î + x ĵ has |F| = a on the circle and is parallel to T̂ (counterclockwise): a · 2πa = 2πa². Parametric check: −a sin θ · (−a sin θ) + a cos θ · a cos θ = a², × 2π. Correct.
- Worked example (a): x = 1 − t, y = t, dx = −dt, dy = dt; −y dx + x dy = t dt + (1 − t) dt = dt → 1. Correct.
- Worked example (b): unit circle counterclockwise from (1, 0) to (0, 1), |F| = 1 and F ∥ T̂, so the work is the arc length π/2 = 1.5708 → "1.571". Correct; and 1 ≠ π/2 shows path dependence. Correct.
- Worked example (c): segment x = 2t, y = t: G = ⟨t, 2t⟩, r′ = ⟨2, 1⟩, 2t + 2t = 4t → 2. Parabola x = 2t, y = t²: G = ⟨t², 2t⟩, r′ = ⟨2, 2t⟩, 2t² + 4t² = 6t² → 2. Both equal f(2, 1) − f(0, 0) = 2 for the potential f = xy, consistent with the "next lecture" remark. Correct.
- Quiz 1: ⟨−y, x⟩ is counterclockwise rotation, answer 1. Correct; explanation matches transcript pp. 1–2.
- Quiz 2: F = ⟨t, t⟩, r′ = ⟨1, 1⟩, 2t → 1, answer 1. Correct.
- Quiz 3: F ⊥ curve → F · T̂ = 0 → zero work, answer 1. Correct.
- Flashcards: all three correct and match notes pp. 2–3.
- Frontmatter summary: correct.
- Calcs file (info): page-own entries (`quiz-2`, `example-a`, `example-c-*`) carry `source: {cite: reading2, …}`, as in earlier 18.02 calcs; harmless. `circle-rotation` checks 2πa² at a = 1.5 (14.137), fine as a formula check.

## Coverage and order
- The page follows the lecture's order: new topic → definition of a vector field → wind and force-field examples → drawing → the four standard examples (incl. the student questions on ⟨y, −x⟩ and unit angular velocity) → work and the line integral → computing it with dr/dt dt → the parabola example → questions (different path, line integral is not a trajectory) → the M dx + N dy notation and the example redone → independence of parametrisation → geometric approach dr = T̂ ds → the two circle examples. This is the transcript's order; the notes put the parametrisation remark before the new notation, the page follows the transcript.
- Left out (minor): the hurricane image (p. 1); the student question "why can't you just do F · dr" (p. 3), which is answered implicitly by the next section; the remark that M dx + N dy versus F · dr is like a differential versus a gradient, "same content" (p. 3); the explicit parametric computation for the radial-field circle ("a bunch of trig things, it cancels out", p. 4). None is essential.
- Added: the original worked example (straight segment vs arc for ⟨−y, x⟩; ⟨y, x⟩ on two paths, anticipating Lecture 20), the 8.01 link and the cosmology callout. The worked example is not a copy: notes Lecture 20 also uses F = y î + x ĵ, but on a different curve (sector of the unit disc), with different numbers.

## Licensing
- No paragraph is copied. Short phrases kept from MIT are standard or very short: "the notation is dangerous" (notes p. 3, a four-word phrase, paraphrased otherwise), the quoted "corn field" line, attributed to Auroux.
- No "All rights reserved" or "Courtesy of" material in either source. The NASA wind images shown in the lecture (p. 1) are not reproduced, only mentioned in words. No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: the claim that it "is not clear what the field of an infinite uniform distribution should be" matches `newtons-static-universe` (Lecture 5): the infinite sum of pulls is ambiguous (shells centred on P give g = 0, shells centred on Q do not), and Gauss's law settles that g cannot vanish everywhere, so the universe must expand or collapse. The callout states only the difficulty, not the resolution; fair, and the link carries the rest. "Newton's attempt to describe an infinite static universe" fairly describes Newton's view as given on that page (letters to Bentley).
- leadsTo: 18.02 Lecture 20 = "Path Independence" (`_course.json`); the reason matches notes p. 3 (Lecture 20: gradient fields, fundamental theorem for line integrals). 8.286 Lecture 5: `newtons-static-universe` has `lecture: 5`; the reason "the gravitational field of a uniform, infinite distribution of mass" matches its content. Both correct.
- Inline link `/courses/8-01/work-in-two-and-three-dimensions` points to an existing 8.01 page.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the parametrisation paragraph now cites notes p. 2.
- **Warning 2:** the "different path" sentence now names a path, along the x-axis to (1, 0) and up to (1, 1), and gives its work, 1, against 1/3 (calcs `other-path`).
- Info: the notation sentence cites notes pp. 2–3, and "independently of each other" cites p. 2. The other info items are left as they are.
