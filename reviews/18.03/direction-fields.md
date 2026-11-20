---
page: content/year-2/18.03/direction-fields.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-1-the-geometrical-view-of-y-f-x-y/ (read: local copy lec.html, title "Lecture 1: The Geometrical View of y'= f(x,y)"; its first .pdf link is a8a314e926b989118d2cd4a131a6c298_XDhJ8lVGbl8.pdf, matching `reading1`; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/a8a314e926b989118d2cd4a131a6c298_XDhJ8lVGbl8.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L1d", 18 pages, no printed page numbers; cited page = PDF page; text extracted page by page with `pdftotext -f N -l N` and every citation checked against it)
  - content/year-2/18.03/_course.json (read: Lecture 2 = "Euler's Numerical Method for y'=f(x,y)", Lecture 3 = "Solving First-order Linear ODEs")
  - content/year-4/8.286/friedmann-equation.mdx (read, title and summary: the 8.286 Lecture 7 page)
  - calcs/18.03/direction-fields.yaml (read; `npm run calc:test -- -k direction`: 7 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
  - The lecture video was not compared (owner decision: transcripts are sufficient); the board itself could not be seen.
verdict: pass-with-notes
---

# Review: Direction fields, isoclines and integral curves

Citation convention checked: `reading1` = the transcript, page = PDF page. All three formulas are at the cited place: "Solutions are integral curves" (`reading1`, pp. 3–5: the "little theorem" is stated at the end of p. 3 / start of p. 4, and its "proof" by translating both sides runs to "same, same" on p. 5); "Isocline" (`reading1`, p. 6: "f of (x, y) equals, in general, it will be C"); "Existence and uniqueness" (`reading1`, pp. 15–16: statement end of p. 15, "one and only one", existence/uniqueness parts and both hypotheses on p. 16). The lecture has no slides; all three were board work, so a transcript citation is the right kind. No "rights reserved" or "courtesy" notice in the transcript or the lecture page. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Section "When the theorem does not apply", bracket on the sign slip | Transcript p. 16: "dy over one minus y"; p. 18: "dy / dx equals one minus y divided by x", i.e. xy′ = 1 − y. p. 17: integrating gives "the log of one minus y" (it should be −ln\|1 − y\|), then "one minus y equals Cx", "y is equal to one minus Cx", "lines whose intercept is at one … any slope whatsoever". | The transcript writes 1 − y and drops a sign when integrating; with 1 − y the solutions would be y = 1 − C/x; the page uses xy′ = y − 1, whose solutions are the lines y = 1 + Cx. | **The reading is right and fairly stated.** Checked: ∫dy/(1 − y) = −ln\|1 − y\|, so xy′ = 1 − y gives 1 − y = C/x, y = 1 − C/x (hyperbolas, plus y = 1 for C = 0); the lines y = 1 − Cx fail it (x·(−C) = −Cx ≠ Cx unless C = 0). With 1 − y, through (0, 1) there is only y = 1 among function solutions, so the lecture's "uniqueness fails at (0, 1)" needs the lines; xy′ = y − 1 is the equation the lecture's picture and conclusions belong to. Note that the lecture's family y = 1 − Cx and the page's y = 1 + Cx are the same set of lines (C of either sign), so "the lines it describes belong to xy′ = y − 1" is exact. Uncertain: whether the slip is Mattuck's on the board or the transcriber's (the board was not seen; the equation is only ever given in words). Optional: add "(the board was not checked)" or similar; otherwise no change needed. |
| 2 | info | Opening paragraph, "rule rather than the exception (p. 1)" | "since those equations are the rule rather than the exception" is at the top of p. 2; p. 1 has the examples. | Cited to p. 1. | Change to "(pp. 1–2)" or "(p. 2)". |
| 3 | info | Opening paragraph | Mattuck contrasts three equations (p. 1): y′ = x/y (separable), y′ = y − x² (not separable but "easily solvable", taught "next Friday") and y′ = x − y² (no elementary solution, "in blue … recalcitrant"). | Mentions only y′ = x/y and "others look just as simple but have no solution" with elementary functions. | Optional: name y′ = x − y² as the lecture's example of an unsolvable equation, and y′ = y − x² as the look-alike that is solvable. |
| 4 | info | Example y′ = −x/y, circles | p. 10: "the square root of C1 minus, let's make this squared because that's the way people usually put the radius, minus x squared", i.e. probably √(C₁² − x²) with C₁ the radius (the transcript is ambiguous). | x² + y² = C₁ and y = √(C₁ − x²) on −√C₁ < x < √C₁. | Mathematically equivalent and consistent; no change needed. |
| 5 | info | Example y′ = 1 + x − y, "all solutions approach y = x as x → ∞ (p. 15)" | pp. 14–15: the argument is for curves in the corridor ("all these curves joined that little tube"); Mattuck admits he "would have to work a little to justify that". | States it for all solutions. | True (y = x + Ce^(−x), as the Plot shows); optional "(the lecture argues it for curves caught in the strip; the formula of Lecture 3 confirms it for all)". |
| 6 | info | Plot caption | — | Uses C both for the solution constant (y = x + Ce^(−x), C = 2, 0, −2) and for the isocline label ("isocline C = 0"). | Optional: call the solution constant c or A in the caption to avoid two meanings of C in one graph. |
| 7 | info | Formula "Existence and uniqueness" and flashcard | p. 16: f and ∂f/∂y continuous "near, in the vicinity of" (x₀, y₀); the conclusion is stated without saying on what interval. | Same, "one and only one solution through (x₀, y₀)". | Matches the lecture. Optionally add "(on some interval around x₀)", since the y′ = −x/y example on the same page shows solutions need not extend over all x. |

Prose page references checked against the transcript:
- Standard form y′ = f(x, y), y′ = x/y separable: p. 1. Correct. Geometric and numerical first day: p. 2. Correct (the opening cites "pp. 1–2").
- Analytic vs geometric, y₁(x) notation, direction field and integral curve: pp. 2–3; line element of slope f(x, y), integral curve tangent at every point: p. 3. Correct.
- Computer method (equally spaced points, compute f, draw line element): p. 5. Correct. Human method, pick slope C first, f(x, y) = C, level curve, "isocline", dashed: p. 6. Correct. As many line elements as you like: pp. 6–7. Correct.
- y′ = −x/y: isoclines y = −x/C through the origin, p. 7; perpendicular, negative reciprocals, p. 8; Cy = −x, C = 0 is the y-axis, x-axis as "C = ∞" in quotation marks with vertical elements, pp. 8–9; circles, separation of variables to confirm, p. 9 (C₁ named on p. 10); limited domain, no way to predict it, p. 10. All correct.
- y′ = 1 + x − y: introduced end of p. 10; cannot separate, isoclines y = x + 1 − C, p. 11; C = 1 through the origin and line elements along the line, p. 12; isocline and integral curve at once, corridor between C = 0 and C = 2, "lobster trap", p. 13; y = x checked as a solution, p. 15. Correct.
- Principle 1, no crossing: p. 14. Principle 2, no touching, curves cannot join y = x: p. 15; theorem: pp. 15–16; existence from continuity of f, uniqueness from ∂f/∂y: p. 16. Correct.
- Euler's method skipped, "one page of notes": p. 16. Correct; it is the subject of Lecture 2 per `_course.json`.
- Counterexample: separation p. 16–17, lines through (0, 1), no solution elsewhere on the y-axis, "oversupplied" (0, 1), pp. 17; standard form not defined on x = 0, failure in practice through f undefined, p. 18. Correct (see finding 1 for the sign).

## Arithmetic and answer checks
- `npm run calc:test -- -k direction`: 7 passed (note: `-k direction-fields` selects nothing, because the hyphen is read as "and not"). Recomputed by hand:
- y = √(C₁ − x²): y′ = −x/√(C₁ − x²) = −x/y. Correct.
- y = x in y′ = 1 + x − y: 1 = 1 + x − x. Correct.
- Isoclines of 1 + x − y: y = x + 1 − C; C = 0 → y = x + 1, C = 1 → y = x, C = 2 → y = x − 1. The strip between C = 0 and C = 2 is x − 1 < y < x + 1; on the upper edge the elements have slope 0 < 1 (curves enter downwards), on the lower edge slope 2 > 1 (curves enter upwards). "Points into the strip" correct.
- Plot: y = x + Ce^(−x) gives y′ = 1 − Ce^(−x) and 1 + x − y = 1 − Ce^(−x). Correct for all C; it is the solution of the linear equation y′ + y = 1 + x, so "found by the methods of Lecture 3" (first-order linear ODEs) is right. Caption claim: the C = 2 curve has its minimum where 1 − 2e^(−x) = 0, x = ln 2 ≈ 0.693, y = ln 2 + 1 ≈ 1.693, which lies on y = x + 1; and x + 2e^(−x) = x + 1 only at x = ln 2. So "crosses it at its lowest point" is correct. The C = −2 curve never meets y = x + 1. Curves fit the window: x + 2e^(−x) at x = −1 is 4.44 < 5; x − 2e^(−x) enters the window at (0, −2).
- xy′ = y − 1: dy/(y − 1) = dx/x, ln\|y − 1\| = ln\|x\| + c, y = 1 + Cx; check x·C = (1 + Cx) − 1. Correct. Slip check: y = 1 − C/x gives xy′ = C/x = 1 − y. Correct.
- Worked example y′ = x + y: isoclines y = C − x (slope −1); C = 0 → y = −x horizontal elements; C = 1 → y = 1 − x slope 1. C = −1 → y = −x − 1, elements of slope −1 along a line of slope −1: an integral curve; y′ = −1 = x + (−x − 1). y = Ce^x − x − 1: y′ = Ce^x − 1 = x + y. y″ = Ce^x, so convex (turning up) for C > 0, concave for C < 0; distance from the line is Ce^x, growing: "repels" correct. All correct.
- Quiz 1: answer 1 (level curve, parallel elements). Correct; explanation matches p. 6.
- Quiz 2: answer 1 (one slope per point). Correct; matches p. 14.
- Quiz 3: answer 1, y = x. Checked all four: y = x + 1 gives 1 vs 0; y = −x gives −1 vs 1 + 2x; y = 1 gives 0 vs x; only y = x works, and it is the C = 1 isocline. Correct.
- Flashcards: all three correct and consistent with pp. 3, 6 and 15–16.

## Coverage and order
- The page follows the lecture's order: standard form and unsolvable equations → analytic vs geometric → direction field, integral curve, the "same, same" theorem → computer vs human drawing, isoclines → y′ = −x/y → y′ = 1 + x − y with the corridor → no crossing → no touching, existence and uniqueness → Euler's method deferred → the counterexample and where theorems fail in practice.
- Left out (minor): the three opening equations (finding 3); the computer's options for spacing and line length (pp. 5–6); the negative square-root branch of the circle solution (p. 10); the "pitcher plant" image (pp. 13–14); the remark that in mathematics "one solution" means "at least one" (p. 16). None is needed for the content.
- Added: the original worked example y′ = x + y (own equation, not in the lecture; shows a repelling straight solution as a contrast to the attracting y = x), and the Plot computed from the Lecture 3 solution formula, which the lecture does not have.
- `prerequisites: [separation-of-variables]`: the 18.01 page exists (`content/year-1/18.01/separation-of-variables.mdx`), and the inline link `/courses/18-01/separation-of-variables` uses the course slug `18-01`. Fine.
- `leadsTo`: 18.03 Lecture 2 is Euler's numerical method in `_course.json`, and the transcript (p. 16) defers Euler's method to the notes, so the "why" is right. 8.286 Lecture 7: the page there is `friedmann-equation` ("The Friedmann equation"); the Friedmann equation (ȧ/a)² = (8π/3)Gρ − kc²/a² is indeed first-order in a(t), so the "why" is accurate. There is no `Callout kind="cosmology"` on the page; only `leadsTo` makes the forward claim, and it attributes nothing to Guth.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page; nothing to credit beyond MIT OCW.
- No paragraph copied: the prose paraphrases in different words. Short phrases kept from the lecture are standard terminology (line element, isocline, integral curve, existence and uniqueness) plus one attributed image in quotation marks ("like a lobster trap", p. 13), which is fine.
- The worked example is original (own equation and solution family). The two lecture examples are retold with the lecture's equations, as expected for a rewrite.
- No OpenStax or LibreTexts material.

## Notes
- The sign-slip bracket (finding 1) is correct mathematics and a fair statement of the transcript; it follows the AGENTS.md rule on lecturer slips. Its only uncertainty is whether the error is on the board or in the transcription, which this review could not check.
- The source title "MIT 18.03 Lecture 1: The Geometrical View of y′ = f(x, y)" matches the OCW page and `_course.json`; the reading URL matches the lecture page's transcript link.
- The video is from 2003 (Mattuck says "this being 2003", p. 5) although the course is listed as Spring 2010; the page makes no date claim, so nothing to change.

## Resolution (2026-11-16, by the page author)

- Info 1: the sign-slip bracket now adds that the board itself was not checked.
- Info 2–3: "rule rather than the exception" cites pp. 1–2, and the lecture's opening pair (y′ = y − x² solvable, y′ = x − y² not) is now mentioned.
- Info 7: the existence statement now says the solution exists on some interval around x₀.
- Info 4–6: no change.
