---
page: content/year-1/18.02/line-integrals-in-space.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-30-line-integrals/ (read: local copy lec.html; it links d9a3cefd83872472a9c5df0f694d9439_seO7-TwXH_I.pdf and lec_week13, matching the page's readings)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/d9a3cefd83872472a9c5df0f694d9439_seO7-TwXH_I.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec30", 4 pages; cited page = PDF page; text per page checked in tp.txt; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week13/ (read: local copy week13.pdf; Lecture 30 is printed pp. 1–2 = PDF pp. 2–3; printed p. 2 starts at "How to remember the formula?")
  - content/year-1/18.02/_course.json (read: Lecture 30 = Line Integrals, Lecture 31 = Stokes' Theorem)
  - content/year-1/18.02/diffusion-equation.mdx (read: introduces the del notation, target of the "del" link)
  - calcs/18.02/line-integrals-in-space.yaml (read; `npm run calc:test -- -k line-integrals-in-space`: 7 passed)
verdict: pass-with-notes
---

# Review: Line integrals, gradient fields and curl in space

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 13 summary, `reading2` = transcript. Transcript page map: p. 1 = diffusion recap, line integrals in space, ∫P dx + Q dy + R dz, twisted-curve example (= 1), choice of parameter, three-segment path (0 + 0 + 1), "F is conservative"; p. 2 = ∇(xyz), fundamental theorem, f(1,1,1) − f(0,0,0) = 1, the three-condition test from mixed partials, simply connected caveat, exact differentials, the a, b example (a = 2, b = 3), the student question on 3bz², start of the line-integral method for the potential; p. 3 = end of that method ("three line integrals instead of two"), the antiderivative method in full, curl defined, curl = 0 iff conservative, curl in space is a vector field, del recalled, ∇ × F as a determinant (start); p. 4 = expansion of the determinant, "don't remember the formula, set up the cross product", rotation about the z-axis, curl = 2ω k̂, translation/expansion/rotation/shear, ping-pong ball, Stokes on Thursday. Notes p. 1: everything up to the curl formula; notes p. 2: del, ∇·F, the determinant, rotation example, "curl measures the rotation component".

The seven formulas:
- "Work in space" (`reading2`, p. 1): transcript p. 1. Correct (also notes p. 1).
- "Along the twisted curve" (`reading2`, p. 1): transcript p. 1, integrand t³·3t² + t⁴·2t + t⁵ = 6t⁵, integral 1. Correct.
- "Fundamental theorem for line integrals" (`reading1`, "Lecture 30, p. 1"): notes p. 1. Correct (stated in words on transcript p. 2).
- "Test for a gradient field" (`reading2`, p. 2): transcript p. 2. Correct.
- "The potential" (`reading1`, "Lecture 30, p. 1"): notes p. 1, f = x²y + yz³ − z⁴ + c. Correct.
- "Curl" (`reading2`, p. 3): component formula and the del-cross-F determinant set up on transcript p. 3; the determinant is expanded on p. 4. Correct (see finding 5).
- "Curl of a rotation" (`reading2`, p. 4): transcript p. 4, ⟨−ωy, ωx, 0⟩, curl 2ω k̂. Correct.

No "rights reserved" or "courtesy" notice in the transcript text, the Week 13 summary text or the lecture page (grep: no match). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Finding the potential", "**By a line integral** … (p. 3; notes, p. 1)" | The method (f(x₁, y₁, z₁) = line integral along a well-chosen path plus a constant, along x, then y, then z) is described on transcript p. 2; p. 3 has only its end ("add them together", "three line integrals instead of two … same idea"). | p. 3 | "(pp. 2–3; notes, p. 1)". |
| 2 | warning | "Curl", after the determinant | Transcript p. 3 stresses "an important difference": in space the curl is a **vector field**, not a scalar function as in the plane. | Not said in words (only visible from the formula) | Add one sentence: unlike the plane, where curl was a scalar, the curl in space is a vector field (p. 3). |
| 3 | warning | Callout "A spinning planet": "so its curl is $2\Omega$ everywhere along the axis" | (Page's own note.) The curl of ⟨−Ωy, Ωx, 0⟩ is 2Ω k̂ at every point, not only on the axis. | The phrase reads as "only at points on the axis" | "so its curl is $2\Omega\,\hat k$ at every point: length $2\Omega$, pointing along the axis". Optionally add "measured in a non-rotating frame". |
| 4 | info | Order of "Finding the potential" | Transcript: line-integral method first (pp. 2–3), then antiderivatives (p. 3). Notes p. 1: antiderivatives first, "Other method" second. | Antiderivatives first (follows the notes) | Fine; optionally swap to follow the lecture or say the order follows the notes. |
| 5 | info | `<Formula label="Curl">`, `at="p. 3"` | Determinant set up on p. 3, expanded component by component on p. 4. | p. 3 | Optional: `at="pp. 3–4"`. |
| 6 | info | "The fundamental theorem and gradient fields" | Transcript p. 2: the test restated for differentials: P dx + Q dy + R dz is exact (= df) under the same three conditions; the a, b example is posed as an exact differential. Also: the pattern (mixed partials equal for every pair) works in any number of variables. | Not mentioned | Optional sentence. |
| 7 | info | "Line integrals in space", after the twisted-curve example | Transcript p. 1 / notes p. 1: choose the parameter yourself (time, a coordinate such as z here, an angle); "1 degree of freedom". | Not mentioned | Optional half-sentence. |
| 8 | info | Opening | Transcript p. 1 / notes p. 1 begin with the recap of the diffusion-equation derivation (covered on `diffusion-equation`). | Not mentioned | Fine (previous page covers it); optional pointer. |

## Arithmetic and answer checks
- `npm run calc:test -- -k line-integrals-in-space`: 7 passed.
- Twisted curve: yz = t³, xz = t⁴, xy = t⁵; t³·3t² + t⁴·2t + t⁵ = 6t⁵; ∫₀¹ 6t⁵ dt = 1. Correct.
- Three segments: 0 + 0 + ∫₀¹ dz = 1. Correct. f = xyz: f(1,1,1) − f(0,0,0) = 1. Correct.
- a, b example: P_y = ax = 2x = Q_x gives a = 2; P_z = 0 = R_x; Q_z = 3z² = bz² = R_y gives b = 3. Correct.
- Potential: f_x = 2xy, f_y = x² + z³, f_z = 3yz² − 4z³ all check for x²y + yz³ − z⁴. Correct.
- Curl of rotation: Q_x − P_y = ω − (−ω) = 2ω. Correct.
- Worked example (a): P_y = 0 = Q_x, P_z = 2x = R_x, Q_z = 2z = R_y; f = x²z + yz² gives f_x = 2xz, f_y = z², f_z = x² + 2yz. Correct. (b) f(1, 2, 3) = 3 + 18 = 21. Correct. (c) curl ⟨y, −x, z⟩ = ⟨0, 0, −1 − 1⟩ = ⟨0, 0, −2⟩; ⟨y, −x⟩ at (1, 0) is (0, −1): clockwise seen from above, angular velocity 1; z k̂ has zero curl. Correct. The example is original.
- Closing note: sidereal Ω = 2π/86164 s = 7.292 × 10⁻⁵ rad/s; 2Ω = 1.458 × 10⁻⁴ s⁻¹ ≈ 1.46 × 10⁻⁴. Correct (wording: finding 3).
- Quiz 1: "three" (index 2). Correct; explanation correct.
- Quiz 2: ⟨0, 0, 2⟩ (index 0). Correct; explanation correct.
- Quiz 3: f(2, 1, 3) = 6 (index 0). Correct.
- Flashcards: all three correct.
- calcs file: the page-own entries (example-work, quiz-3, earth-curl, earth-omega) carry `source: {cite: reading2, …}` although the numbers are the page's own; harmless, noted only.

## Coverage and order
- Order follows the lecture: line integrals in space, twisted-curve example, three-segment path, conservative / ∇(xyz), fundamental theorem, three-condition test, simply connected caveat, a, b example, finding the potential, curl definition, curl = 0 iff conservative, del-cross determinant, "set up the determinant", rotation interpretation, ping-pong ball. Only the two potential methods are swapped (finding 4).
- Left out: diffusion recap (previous page), curl as a vector field rather than scalar (finding 2), exact-differential language (finding 6), choice of parameter (finding 7), the student question on 3bz² (fine to omit), the remark ∇·F = div F on p. 3 / notes p. 2 (the del link covers it).
- Added: the worked example and the "spinning planet" note (both the page's own, correctly attributed as such: no claim is put on MIT).
- Every in-text page citation checked: all correct except finding 1.
- leadsTo 18.02 Lecture 31 "Stokes' theorem, which relates the work around a closed curve in space to the flux of the curl": matches _course.json (Lecture 31 = Stokes' Theorem), transcript pp. 3–4 ("the theorem that is going to replace Green's theorem for work … Stokes' theorem") and the Lecture 31 statement in the Week 13 notes. Correct.

## Licensing
- No paragraph copied from the transcript or notes. Close short phrases: "how much F fails to be conservative" (transcript p. 3, notes p. 1) and "length is twice the angular velocity and its direction is the axis of rotation" (notes p. 2: "length of curl = twice angular velocity, and direction = axis of rotation"); short standard statements, acceptable.
- The lecture's own examples (⟨yz, xz, xy⟩, the a, b field) are reproduced as lecture content, rewritten; the worked example uses its own fields and numbers.
- No rights-reserved or courtesy material; no OpenStax/LibreTexts material; no figures.

## Notes
- Transcript p. 4 first says "rotating about the x-axis" and corrects itself to the z-axis; the page correctly uses the z-axis without comment (a slip, not needing a note).
- The closing note is `kind="note"`, not a cosmology callout, and makes no cosmology claim; nothing to check there beyond finding 3.
- Not checked: `npm run content:check` was not run in this review.

## Resolution (2026-11-16, by the page author)

- Finding 1: the paragraph on finding the potential by a line integral now cites "(pp. 2–3; notes, p. 1)".
- Finding 2: added that in space the curl is a vector field, not a number as in the plane (transcript p. 3).
- Finding 3: the closing note now says the curl is 2Ω k̂ at every point, of length 2Ω and pointing along the axis.
- Finding 5: the curl formula now cites transcript pp. 3–4.
- Findings 4, 6 and 7: no change (order follows the notes; optional additions left out; the calcs citations are harmless).
