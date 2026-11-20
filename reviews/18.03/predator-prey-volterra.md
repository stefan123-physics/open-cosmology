---
page: content/year-2/18.03/predator-prey-volterra.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-33-relation-between-non-linear-systems-and-first-order-odes/ (read: local copy lec.html; title "Lecture 33: Relation Between Non-linear Systems and First-order ODEs", matching `source.title`; its only .pdf link is 9dab4a7709efd106856ea8a6c49970f5_kRR9EVzr4lc.pdf, matching the page's `reading1` URL)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/9dab4a7709efd106856ea8a6c49970f5_kRR9EVzr4lc.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L33", 5 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/f080891568d01bc60ff18f15b77f8e8c_MIT18_03S10_gs.pdf (downloaded to check the worked example's originality against the course notes; scanned images, no text layer: could not read)
  - calcs/18.03/predator-prey-volterra.yaml (read; `npm run calc:test -- -k predator-prey`: 5 passed)
verdict: pass-with-notes
---

# Review: Nonlinear systems and first-order equations: Volterra's predator–prey model

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript page = PDF page. Page boundaries: p. 1 three cryptic words, reading G7 and 7.4, dx/dt = f, dy/dt = g, velocity field and trajectories, eliminating t by division, dy/dx = g/f "the equation of the first day of the term", what is lost (lengths, direction of travel; arrows snipped to line elements; direction field; explicit or implicit solutions; integral curves), the gain (may be solvable); p. 2 linear example (solutions c₁(cos t, −sin t), c₂(sin t, cos t), dy/dx = −x/y, separation, x² + y² = C, eliminating t from the solutions), "in my end is my beginning", the predator–prey system x′ = −ax + bxy, y′ = cy − dxy, "sharx" and "yumfish", the two differences from the robin–earthworm homework, critical point equations, (0, 0) and (c/d, a/b), linearization at the origin, diagonal-matrix remark; p. 3 eigenvalues −a, c: saddle, axis behaviour, a = b = c = d = 1, Jacobian and J(1, 1), centre, trace–determinant picture, borderline, centre/spiral sink/spiral source possible but not saddle or node, Volterra introduced the equations, eliminating t begun; p. 4 dy/dx factored, separation, no partial fractions, y − ln y = ln x − x + c₁, exponentiation, x e^(−x) · y e^(−y) = C, contour curves of h, u e^(−u) (L'Hôpital, max 1/e at 1), mountain with peak at (1, 1), horizontal-line argument, clockwise, population story, fishing at rate k begun; p. 5 fishing term for the food fish, new system, new critical point (with the d/b slip), Volterra's principle, DDT in ponds in the '50s, birds and insects.

Formula locations: "Eliminating t" p. 1; "Volterra's predator–prey system" p. 2; "Linearization at (1, 1)" p. 3; "The first-order equation" pp. 3–4 (dy/dx at the end of p. 3 and repeated at the top of p. 4, separation on p. 4); "Integral curves" p. 4; "With fishing" p. 5 (the terms are introduced at the end of p. 4, the combined system is on p. 5); "New equilibrium" p. 5. All correct.

Prose citations also checked: three things p. 1; first day of the term, what is lost, snipping arrows, integral curve, the gain p. 1; example and its two routes p. 2; poetry line p. 2; sharx/yumfish and the robin comparison p. 2; critical points p. 2; origin linearization and saddle pp. 2–3; axis behaviour p. 3; setting constants to 1 p. 3; borderline discussion p. 3; Volterra p. 3; no partial fractions, integration, contour curves, u e^(−u), horizontal lines, clockwise, population cycle p. 4; fishing pp. 4–5; principle and DDT p. 5. All correct.

"Rights reserved" / "courtesy" check: neither occurs in the transcript or in lec.html. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Fishing: Volterra's principle", last paragraph; frontmatter `summary` ("also seen when DDT in ponds raised mosquito numbers"); quiz 3 explanation ("spraying ponds with DDT increased the mosquitoes") | p. 5: Mattuck's own account, from memory ("this is what happened in the '50s … that is exactly what was observed"; "the same thing was observed with the bird population and insects … ends up killing more birds than it does insects"). | Stated as established fact in the site's voice (the page cites p. 5 but does not say it is the lecturer's account). I could not verify the pond/mosquito and tree/bird stories against a source; the textbook example usually given for this effect is a different one (DDT in citrus groves increasing scale insects by killing their ladybird predators), so these specific claims are uncertain. AGENTS.md rule 5 asks for honest attribution. | "Mattuck gives a more modern example: in his account, …"; in the summary and quiz explanation: "in Mattuck's example, …". Keep "as he says was observed" rather than "as was indeed observed". |
| 2 | warning | "Volterra's way out": "Volterra, who introduced and studied these equations" | p. 3: "the person who introduced these equations and studied them systematically … was Volterra". | Repeats the lecture's attribution without comment. From general knowledge: Alfred Lotka published the same equations first (1920 for a chemical model, 1925 in *Elements of Physical Biology*), Volterra independently in 1926; they are usually called the Lotka–Volterra equations. A reader will meet that name elsewhere. | Add a bracket: "(Alfred Lotka had found the same equations independently a year or so earlier; they are usually called the Lotka–Volterra equations.)" Keep "Volterra's principle", which is his. |
| 3 | info | "Fishing": "not intuitive, but observed, and the reason Volterra took up the problem" | p. 5: "that was observed experimentally at a slightly different context. And that is why Volterra started working on the problem." | Drops "in a slightly different context". (Historically, from general knowledge: D'Ancona's Adriatic fish-market data, where reduced fishing during the First World War raised the share of predatory fish; consistent with the principle, but the reverse experiment.) | "observed, in a somewhat different setting, and the reason …". Names and details optional and only if checked. |
| 4 | info | "Fishing": "The critical point gives roughly the average populations" | p. 5: "sort of the average shark population". | Follows the lecture. For this model the time averages over one cycle equal the critical point exactly (standard result, obtained by integrating x′/x and y′/y over a period). | Optional: "(in fact exactly the averages over one cycle)". |
| 5 | info | "Sharks and food fish" / summary bullets | p. 3: setting a = b = c = d = 1 "doesn't change qualitatively any of the mathematics". | Closed orbits are shown only for a = b = c = d = 1 (the summary bullet says so); flashcard 2 states closed cycles around (c/d, a/b) in general. True in general (conserved quantity x^c e^(−dx) · y^a e^(−by)), and the worked example shows one general case, but the page never states it. | Optional sentence after the main argument: "For general constants the same steps give x^c e^(−dx) · y^a e^(−by) = C, again a single peak at (c/d, a/b)." |
| 6 | info | Fishing formula and Volterra's principle | Implicit. | No condition on k. For k ≥ c the food fish' growth term c − k is no longer positive and the interior equilibrium leaves the first quadrant. | Optional: "(for k < c)". |
| 7 | info | "From a system to a first-order equation": "In the lecture's words, in my end is my beginning" | p. 2: Mattuck quotes "a great line of poetry", unsure of the order ("or maybe it's in my beginning is my end"). | Fine as a quotation. The lines are T. S. Eliot's (*East Coker*, 1940: it opens "In my beginning is my end" and closes "In my end is my beginning"). | Optional: "(T. S. Eliot's line, quoted in the lecture)". |

Lecturer slips and transcript garbles checked:
- p. 5: "The new critical point is c minus k over d and a plus k over d", corrected moments later to "a plus k over b". The page writes (a + k)/b and notes the slip in brackets. Correct; the bracket is optional (it is a self-correction within the same passage), harmless to keep.
- p. 4: "x over e to the x … is equal to yet another constant, one over c2" and "in fact it is a partial fraction so this degree must be bigger": garbled wording around a correct computation; the page's "divide first" is the evident meaning.
- p. 4: "When u is small this has approximately the value one": the factor e^(−u) is meant; the page's "rises like u" is correct.
- p. 4: "the function has the value zero, so it is biggest there": "smallest" is meant; the page says "value 0 on the axes". Not repeated.
- p. 3: "spiral synchs", "nodal synchs": transcription of "sinks". Not repeated.

## Arithmetic and answer checks
- `npm run calc:test -- -k predator-prey`: 5 passed.
- Elimination example: dy/dx = −x/y ⇒ y dy = −x dx ⇒ x² + y² = C; (c₁cos t)² + (−c₁sin t)² = c₁². Correct.
- Critical points: x(−a + by) = 0, y(c − dx) = 0 ⇒ (0, 0) and (c/d, a/b). Linearization at the origin diag(−a, c): opposite signs, saddle. Correct.
- Jacobian of (−x + xy, y − xy): [[−1 + y, x], [−y, 1 − x]]; at (1, 1): [[0, 1], [−1, 0]], trace 0, det 1, centre. Correct.
- Separation: dy/dx = y(1 − x)/(x(y − 1)) ⇒ (y − 1)/y dy = (1 − x)/x dx ⇒ y − ln y = ln x − x + c₁ ⇒ x e^(−x) y e^(−y) = C. Correct (also verified by the calcs identity h_x x′ + h_y y′ = 0).
- u e^(−u): derivative (1 − u)e^(−u), zero at u = 1, value 1/e = 0.36788; the plot's point 0.3679 and the range [0, 0.45] are correct; domain [0, 6] shows the decay. Caption statements correct; the curve is generated from the formula.
- Direction: at (2, 1), x′ = −2 + 2 = 0 and y′ = 1 − 2 = −1 < 0, so the orbit moves down on the right of (1, 1) with x horizontal: clockwise. Correct.
- Fishing: −ax − kx = −(a + k)x, cy − ky = (c − k)y; new point ((c − k)/d, (a + k)/b). Correct.
- Worked example (a): critical points (0, 0) and (3, 2); J = [[−2 + y, x], [−y, 3 − x]], J(3, 2) = [[0, 3], [−2, 0]], trace 0, det 6, λ² + 6 = 0, λ = ±i√6. Correct.
- Worked example (b): (y − 2)/y dy = (3 − x)/x dx ⇒ y − 2 ln y = 3 ln x − x + c ⇒ x³e^(−x) y²e^(−y) = C; u³e^(−u) peaks at u = 3, u²e^(−u) at u = 2 (derivatives (3 − u)u²e^(−u), (2 − u)u e^(−u)). Correct (calcs identity also passes).
- Worked example (c): ((3 − 1)/1, (2 + 1)/1) = (2, 3). Correct.
- Quiz 1: answer 1 (dy/dx = g/f). Correct; explanation correct.
- Quiz 2: answer 2 (centre, borderline). Correct per p. 3; explanation correct.
- Quiz 3: answer 0. Correct per p. 5; explanation see finding 1 (attribution).
- Correct-answer positions 1, 2, 0: varied.
- Flashcards: all three correct (card 2 general case: see finding 5; card 3: see finding 6).
- Frontmatter summary: every statement matches the page and the transcript, apart from the unattributed DDT claim (finding 1).
- Calcs file (info): the J(1, 1) entries, the trace 0 / det 1 of the main centre and the (2, 3) prey coordinate (a + k)/b = 3 are not checked; adding them would complete it. The page-own entries carry `source: {cite: reading1, …}` pointing to the transcript although the numbers are the page's own (same harmless pattern as limit-cycles).

## Coverage and order
- The page follows the lecture's order: conversion to a first-order equation and what is lost/gained (p. 1) → linear example and "in my end is my beginning" (p. 2) → the sharks/food-fish model, comparison with the robins, critical points, saddle at the origin (pp. 2–3) → constants set to 1, Jacobian, centre (p. 3) → borderline case in the trace–determinant plane (p. 3) → Volterra's elimination of t, integration, contour curves, single peak, no spirals, clockwise, population story (pp. 3–4) → fishing, new equilibrium, Volterra's principle, DDT (pp. 4–5). Same order as MIT.
- Left out (minor): the "three cryptic words" (never read out in the transcript; the page says "three things" without naming them, which is fine); the reading assignment G7 / 7.4 and the suggested exercises (p. 1); the other borderline cases of the trace–determinant picture (defective and zero eigenvalues, p. 3) and the parabola; the remark that the homework system had four critical points (p. 2). None essential.
- Added: the worked example and the plot (page-own), the bracketed slip note.
- `prerequisites: [limit-cycles]` exists. Inline links `/courses/18-03/limit-cycles` and `/courses/18-03/direction-fields` use the same form as other 18.03 pages; both target pages exist.
- `npm run content:check`: for this page only "no review file yet" (the errors listed belong to `content/year-2/18.06/geometry-of-linear-equations.mdx`, a different page).
- No `leadsTo`: correct, Lecture 33 is the last lecture in the syllabus.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("snipped to a standard length, pointy end and all", "the equation of the first day of the term", "sharx", "yumfish", "in my end is my beginning") are brief and attributed to the lecture by context and citation. Acceptable.
- Worked example: x′ = −2x + xy, y′ = 3y − xy with k = 1 is not from the lecture. It does not match the textbook examples I know (Boyce–DiPrima's x(1 − 0.5y), y(−0.75 + 0.25x); Edwards–Penney's 200x − 4xy, −150y + 2xy; Blanchard–Devaney–Hall's 2R − 1.2RF, −F + 0.9RF), but I could not search textbooks systematically, and the course's own GS notes (scanned, no text) could not be read. Small-integer Lotka–Volterra systems are common, so a match somewhere cannot be ruled out (uncertain); the structure (critical points, conserved quantity, fishing shift) is the lecture's own method applied to new numbers, which is the usual way to make an original example. No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"` and no `leadsTo`: nothing to check.
- Historical claims: Volterra and the equations (finding 2); Volterra's motivation (finding 3); DDT and birds (finding 1, Mattuck's account, unverified). Volterra's principle as a name: correct.
- The plot uses `u` and labels "u e^(−u)", "max 1/e": short labels; label placement is checked by `content:check`, which reported no label problem for this page.

## Resolution (2026-11-16, by the page author)

1. Warning 1: the DDT stories are now attributed to the lecture, in the text, the summary and the quiz 3 explanation.
2. Warning 2: a bracket notes that Lotka published the same equations first and that they are usually called the Lotka–Volterra equations.
3. Info:
   - "Observed, in a slightly different context".
   - The critical point is the average over a cycle, provided k < c.
   - The Eliot line is attributed.

The worked example uses the page's own numbers; no textbook match was found. Status set to `reviewed`.
