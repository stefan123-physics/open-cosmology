---
page: content/year-1/18.02/gradient-fields-and-curl.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-21-gradient-fields/ (read: local copy lec.html, title "Lecture 21: Gradient Fields"; its .pdf link is 90688325c5dc28fe81d2538dd60427cf_z5TPjZrsp2k.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/90688325c5dc28fe81d2538dd60427cf_z5TPjZrsp2k.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec21", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read: local copy week9.pdf, file 14a8493b19c42b8fbbeb9d05b5c0fd52_lec_week9.pdf; PDF p. 1 is a cover; Lecture 21 on printed pp. 1–2 = PDF pp. 2–3. Printed p. 1 runs from the Lecture 21 header through the test, the claim, both examples, methods 1 and 2, the curl summary with (*), the definition curl F = N_x − M_y and the first sentence of the velocity interpretation; printed p. 2 has the examples ⟨a, b⟩, ⟨x, y⟩, ⟨−y, x⟩ (curl 2), the force-field interpretation and the force/mass, torque/moment-of-inertia analogy, then Lecture 22)
  - content/year-1/18.02/_course.json (read: Lecture 21 = Gradient Fields; Lecture 22 = Green's theorem)
  - content/year-1/18.02/path-independence.mdx, second-derivative-test.mdx and content/year-1/8.01/torque-and-angular-acceleration.mdx: exist, targets of the inline links
  - calcs/18.02/gradient-fields-and-curl.yaml (read; `npm run calc:test -- -k gradient-fields-and`: 8 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Testing for gradient fields, potentials and curl

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 9 summary, `reading2` = transcript. All six formulas are at the cited place:
- "Gradient fields pass the test" (`reading2`, p. 1): transcript p. 1 ("f sub xy equals f sub yx, and that means M sub y equals N sub x", put in a box). Correct; also notes p. 1.
- "The two pieces" (`reading2`, p. 2): transcript p. 2 (∫₀^{x₁} 4x² dx = 4/3 x₁³; ∫₀^{y₁} (3y² + 4x₁²) dy = y₁³ + 4x₁²y₁). Correct; also notes p. 1.
- "The potential" (`reading1`, "Lecture 21, p. 1"): notes p. 1 (f(x₁, y₁) = 4/3 x₁³ + y₁³ + 4x₁²y₁ (+constant), and in method 2 with x, y). Correct.
- "Matching f_y" (`reading2`, p. 3): transcript p. 3 (f_y = 0 + 4x² + g′; 4x² + g′(y) = 3y² + 4x²; g′ = 3y²; y³ + constant). Correct; also notes p. 1.
- "Curl" (`reading1`, "Lecture 21, p. 1"): notes p. 1, "Definition: curl(F) = N_x − M_y". Correct.
- "The rotational analogy" (`reading1`, "Lecture 21, p. 2"): notes p. 2 (Force/Mass = acceleration = d/dt(velocity); Torque/Moment of inertia = angular acceleration = d/dt(angular velocity)). Correct; also transcript p. 4.

No "rights reserved" or "courtesy" notice in the transcript or the Week 9 summary (grep: no match). The lecture's board picture of the broken path is described in words only. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Section "Curl", "the curl measures the **torque** on a test object, per unit moment of inertia (p. 4; notes, p. 2)" | Notes p. 2: "curl F = torque exerted on a test mass, measures how F imparts rotation motion" (no "per unit moment of inertia"). Transcript p. 4: "the torque it exerts on a mass per unit moment of inertia". | Uses the transcript's more precise wording and cites both. | Correct as written; the combined citation is fine. Optionally "(p. 4; cf. notes, p. 2)". |
| 2 | info | Section "The test", paragraph "Conversely" | Transcript p. 3 (student question): failing the test proves for sure that F is not a gradient field; passing it while F is not defined everywhere leaves "a bit of ambiguity". Transcript p. 1: if N_x = M_y holds for a field not defined everywhere, still look for a potential, but it may turn out not to be well-defined (the potential may come back with a different value around a hole). | The page has the counterexample on the problem set and "a region without holes", but not the one-way use of the test or why a hole breaks it. | Optional one sentence: "Failing the test always proves F is not a gradient; passing it with a hole in the domain leaves the question open, because a potential may not return to the same value around the hole." |
| 3 | info | Section "Finding the potential: method 1" | Transcript pp. 1–2: guessing a potential often works but is "not a valid method on next week's test"; guessing does not always work. | Not mentioned. | Optional; an exam remark, can be left out. |
| 4 | info | Section "Curl" | Transcript p. 3: student asks whether this curl matches the physics one; Auroux believes it is the same (not the opposite sign), and curl in space comes "in two or three weeks". | Not mentioned. | Optional. The page already says both methods work in three variables. |
| 5 | info | Callout "Constants and potentials" | Not in MIT; transcript p. 2 compares the constant with the one-variable antiderivative constant. | Antiderivative comparison plus the physics remark that only differences of potential energy or voltage matter. | Correct and clearly the page's own remark; no cosmology claim, so no `cosmology` callout is needed. Note that the page's f is the mathematicians' potential (F = ∇f), opposite in sign to potential energy (as path-independence.mdx explains); the callout's statement holds either way. |

Prose page references checked against the sources:
- Opening (two questions: test and finding the potential): transcript p. 1. Correct.
- Test via f_xy = f_yx: p. 1; notes p. 1. Correct. Link to second-derivative-test.mdx, which has f_xy = f_yx (flashcard). Fine.
- Converse for F defined and differentiable everywhere in the plane: p. 1; notes p. 1 ("Claim: Conversely…"). Counterexample on "your problem set this week" (last problem): p. 1; notes p. 2 (Lecture 22) names it PS8 Problem 2. "Region without holes", "simply connected", later: p. 1. Correct.
- ⟨−y, x⟩: M_y = −1, N_x = 1; the unit-circle work from last time: p. 1; notes p. 1. Correct.
- a-example (4x² + axy, 3y² + 4x²): M_y = ax, N_x = 8x, a = 8, "equal everywhere, don't solve for x": p. 1; notes p. 1. Correct.
- Method 1: only after passing the test (p. 2); FTC from the origin, f(0, 0) an integration constant, "add one … even add 18" (p. 2); simplest path along the x-axis then vertically, one of dx, dy zero (p. 2; notes p. 1). Correct.
- Subscript 1 to avoid confusion with integration variables: p. 2. Correct.
- Constant optional, "plus 18": p. 2. Other way round, or radially / straight line if polar coordinates are suspected: p. 2. Correct.
- Method 2: equations (1), (2) (p. 2; notes p. 1); integration "constant" depends on y (pp. 2–3; notes p. 1); match with (2) (p. 3). Correct.
- x left in g′(y) means something is wrong: p. 3. Shortcut of integrating both and merging, 1 + tan² vs sec²: p. 3. Both methods work in three variables: p. 3. Correct.
- Recap: gradient ⟺ conservative ⟹ N_x = M_y, converse in the whole plane or a simply connected region: p. 3; notes p. 1 with (*). ∮ notation: p. 3. Correct.
- Curl measures failure to be conservative; test is curl F = 0: p. 3; notes p. 1. Correct.
- Vorticity (p. 3), twice the angular velocity of the rotation component (p. 4; notes pp. 1–2), constant field and ⟨x, y⟩ curl 0, ⟨−y, x⟩ "one plus one equals two", unit angular speed (p. 4; notes p. 2). Correct.
- Hurricanes, tornadoes, sign = clockwise or counterclockwise: p. 4. Correct.
- Force field and the analogy: p. 4; notes p. 2. A light floating object spins at the curl "up to a factor of two": p. 4. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k gradient-fields-and`: 8 passed. Also recomputed by hand:
- C₁: ∫₀^{x₁} 4x² dx = 4/3 x₁³. C₂: ∫₀^{y₁} (3y² + 4x₁²) dy = y₁³ + 4x₁²y₁. Correct.
- f = 4/3 x³ + 4x²y + y³: f_x = 4x² + 8xy = M, f_y = 4x² + 3y² = N. Correct.
- Method 2: f_y = 4x² + g′(y) = 3y² + 4x² ⟹ g′ = 3y², g = y³ + c. Correct.
- curl⟨a, b⟩ = 0, curl⟨x, y⟩ = 0 − 0 = 0, curl⟨−y, x⟩ = 1 − (−1) = 2. Correct.
- Worked example (original: own field ⟨2xy + 3, x² + 4y⟩, own point (1, 2), own G): (a) M_y = 2x = N_x; f = x²y + 3x + g(y), f_y = x² + g′ = x² + 4y ⟹ g = 2y²; f = x²y + 3x + 2y², and ∇f = ⟨2xy + 3, x² + 4y⟩. (b) y = 0: M = 3, ∫₀¹ 3 dx = 3; x = 1: N = 1 + 4y, ∫₀² (1 + 4y) dy = 2 + 8 = 10; total 13; f(1, 2) = 2 + 3 + 8 = 13. (c) curl(x²y î) = 0 − x² = −x², not a gradient; negative = clockwise, |curl| grows with |x|, zero on the y-axis, so "strongest far from the y-axis" is right. All correct.
- Quiz 1: M = 2x + y, N = x + 3: M_y = 1 = N_x, defined everywhere; potential x² + xy + 3y (f_x = 2x + y, f_y = x + 3). Answer 0. Correct.
- Quiz 2: M_y = 2ay, N_x = 6y, equal everywhere ⟹ a = 3. Answer 1 ("$a = 3$"). Correct; the distractor a = 6 catches forgetting the factor 2.
- Quiz 3: ⟨−3y, 3x⟩: N_x − M_y = 3 − (−3) = 6; rotation ⟨−ωy, ωx⟩ with ω = 3, so twice the angular velocity. Answer 2 ("$6$"). Correct.
- Flashcards: all three correct; "later: in a simply connected region" matches transcript p. 3 and notes p. 1 (*).
- Frontmatter summary: correct, including "torque per unit moment of inertia" (transcript p. 4; see finding 1).

## Coverage and order
- The page follows the transcript order exactly: recall and the two questions (p. 1); the test, the converse and its condition, the two examples (p. 1); method 1 (p. 2); method 2 and its pitfalls (pp. 2–3); recap, ∮, curl, test curl F = 0 (p. 3); velocity interpretation, examples, weather (pp. 3–4); force interpretation and analogy, floating object (p. 4). The notes follow the same order.
- Omitted: the remarks in findings 2–4, the poll on which method students prefer, and the flashcard vote. Nothing substantive missing.
- Added: the worked example and the note callout (both page-own, clearly separate), and the inline link to the 8.01 torque page.

## Licensing
- No rights-reserved or courtesy material in either source; nothing to credit beyond the MIT source and readings already in the frontmatter.
- No copied paragraphs. The prose is a rewrite. Short phrases close to the sources ("defined and differentiable everywhere in the plane", "measures the failure to be conservative", "twice the angular velocity of the rotation component") are standard terminology from the notes and acceptable.
- MIT's own example (4x² + 8xy, 3y² + 4x²) is used in the body with citations, as a lesson rewrite should; the worked example and all three quiz questions use different, original fields.
- No OpenStax or LibreTexts material.

## Notes
- Closing callout is `kind="note"`, not `cosmology`, and the page has no cosmology claim; that is appropriate, since Lecture 21 has no direct cosmology link of its own beyond what path-independence.mdx already covers. Its content is correct (see finding 5).
- leadsTo: 18.02 Lecture 22 = Green's theorem (`_course.json`; notes p. 2 "18.02 Lecture 22 … Green's theorem"; transcript p. 4 ends "next time we are going to see Green's theorem which is actually going to tell us a lot more about curl and failure of conservativeness"). The `why` ("relates the work around a closed curve to the curl inside it") matches the notes' statement ∮_C F · dr = ∬_R curl F dA. Correct.
- Inline links: /courses/18-02/path-independence (Lecture 20), /courses/18-02/second-derivative-test and /courses/8-01/torque-and-angular-acceleration all point to existing pages.
- Calcs file: the `shown` string of `c2-integral` (`'= y_1^3 + 4x_1^2 y_1" cite'`) includes part of the MDX attribute; harmless (the test passes) but it could be trimmed to `'= y_1^3 + 4x_1^2 y_1'`.
- Verdict: no errors; all findings are optional (info).

## Resolution (2026-11-16, by the page author)

- Info 2: a sentence now says that failing the test proves a field is not a gradient, while passing it with a hole in the domain leaves the question open.
- The calcs anchor for c2-integral no longer includes the attribute quote.
- Info 1, 3, 4 and 5 are left as they are.
