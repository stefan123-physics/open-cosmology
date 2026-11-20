---
page: content/year-2/18.03/autonomous-equations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-5-first-order-autonomous-odes/ (read: local copy lec.html, title "Lecture 5: First-order Autonomous ODEs"; its only PDF link is the transcript cited as reading1; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/0a544cf76ef5c409ba87ad1309c86e9a_te6Mplq3DCU.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L5", 16 pages of text, no printed page numbers; each page extracted with `pdftotext -f N -l N`; cited page = PDF page)
  - content/year-2/18.03/_course.json (read: Lecture 5 = "First-order Autonomous ODEs", Lecture 6 = "Complex Numbers and Complex Exponentials")
  - content/year-2/18.03/direction-fields.mdx (read: exists, target of the inline link; states that integral curves cannot cross or touch)
  - calcs/18.03/autonomous-equations.yaml (read; `npm run calc:test -- -k autonomous`: 8 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Autonomous equations, critical points and stability

Citation convention checked: transcript pages are PDF pages. The lecture has no slides; every equation was written on the board, so citing the transcript (`reading1`) is the only option and is correct. All four formulas are at the cited page: "Autonomous equation" (p. 1: "dy dt is equal to ... no t on the right hand side", a function of y alone), "Bank account with embezzlement" (p. 6: "I simply subtract it from this", after dy/dt = ry on p. 5), "Logistic equation" (p. 9: "a minus by, the quantity times y, or in other words, ay minus b y squared"), "Logistic growth with harvesting" (p. 13: "ay minus b y squared ... and that will be h"). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Harvesting", "they merge into a single semi-stable point" | pp. 14–15: at h_m there is "one constant solution"; solutions above and below it both decrease. Mattuck does not use the word "semi-stable" here. | Calls the merged point semi-stable, citing pp. 14–16. | Correct by the lecture's own definition (p. 12: same-direction arrows on both sides = semi-stable), so the physics is right. Optional: make clear it is the page's inference, e.g. "(semi-stable in the sense of p. 12)". |
| 2 | info | "Critical points", step 2 of the method, "Mark this with arrows on the y-axis" (p. 5) | The two steps are on p. 5; the arrows are introduced on p. 7 with the bank example. | Cites p. 5 for the arrows. | Optionally "(pp. 5, 7)". |
| 3 | info | "Autonomous equations", isoclines | The sentence "every horizontal line is an isocline" starts at the foot of p. 1 and continues on p. 2; slope f(y₀) and translation invariance are on p. 2. | Cites p. 2 for the paragraph's second half (and p. 1 for the first). | Fine as is. |
| 4 | info | Bank example | p. 7 has two slips: "Its intercept is down here at w" (the intercept of ry − w on the f-axis is −w) and "once it's bigger than y over r" (should be w over r). | Correct throughout (critical point w/r, line of slope r). | No change needed; the page does not repeat the slips, and neither is likely to trip a reader comparing with the transcript. |
| 5 | info | "Harvesting", "salmon taken out of a fish farm, so many tonnes a day" | p. 13: Atlantic salmon in factory farms off Maine; "400 pounds of salmon each day". | Generic tonnes a day. | Fine; the page rewrites rather than copies the example. |
| 6 | info | "The logistic equation" | p. 11: solutions below the axis (y < 0) "have no physical significance" but exist and decrease away from 0; p. 10: a population that starts at exactly 0 or a/b stays there. | Not mentioned (the stability section only says solutions near 0 move away). | Optional half-sentence: negative solutions fall away from 0, which is part of why 0 is unstable from both sides. |
| 7 | info | Quiz 3, Harvesting section, Summary, frontmatter: `a^2/4b` | Lecture gives no formula. | $a^2/4b$, meaning a²/(4b). | Conventional and correct, but `a^2/4b` can be read as (a²/4)·b. Optional: write `a^2/(4b)` or `\frac{a^2}{4b}` in at least the Harvesting paragraph. |

Prose page references checked against the transcript:
- Opening "another day without solving" (p. 1, "once again, a day of solving no differential equations whatsoever"): rewritten, correct page.
- Separable but integrals may be hard or not worth it; qualitative information without solving: p. 1. Correct.
- Critical point = zero of f: p. 3. Constant solution, both sides zero: pp. 3–4. Barriers, other integral curves cannot cross: p. 4. Correct.
- Step one (find critical points) and step two (graph f, sign decides increase/decrease): p. 5. Correct.
- Bank account dy/dt = ry, exponential: p. 5; embezzler w at constant rate (not w·y): pp. 5–6; single critical point w/r: p. 6; line of slope r, above/below, "faster and faster": p. 7; translations: p. 8. "(pp. 6–8)" correct.
- Population ky, net growth rate, k should decline: p. 8; simplest choice a − by: p. 9; disease, rumour: p. 9; partial fractions: p. 9; critical points 0 and a/b: p. 9. Correct.
- Downward parabola, positive between zeros: p. 10; increase to a/b from below, decrease from above: p. 11. Correct.
- Stable / unstable: pp. 11–12; arrows towards / away: p. 12; tangent case, semi-stable: pp. 12–13. Correct.
- Harvesting at constant rate h (not h·y): p. 13; lowering the parabola, h_m = height of the peak: p. 14; two critical points moved in, none for large h, always decreasing: p. 15; h_m the maximum harvesting rate: p. 15; salmon decrease to zero: p. 16. Correct.
- Bracketed note "the lecture calls the calculation easy and leaves it": p. 14 ("which is easy to do because it's a parabola"), p. 15 ("whose value we could calculate"). Fair.

## Arithmetic and answer checks
- `npm run calc:test -- -k autonomous`: 8 passed. Recomputed by hand:
- h_m: the peak of ay − by² is at y = a/(2b); value a²/(2b) − a²/(4b) = a²/(4b). Correct.
- Plot: with u = y/(a/b) and time in units of 1/a, the logistic equation becomes u′ = u − u², solved by u = 1/(1 + Ce^(−t)). u(0) = 0.05 needs 1 + C = 20, C = 19; u(0) = 1.6 needs 1 + C = 0.625, C = −0.375. Both match the curves and the caption ("y = (a/b)/(1 + Ce^(−at))", starting values 0.05 a/b and 1.6 a/b). The high curve has 1 − 0.375e^(−t) > 0 for all t ≥ 0, so no blow-up on the domain. The y-range [0, 1.6] puts the high curve's start exactly on the top edge (cosmetic only; content:check places the labels without errors). Caption correct.
- Worked example (original numbers, not MIT's): a = 0.4, b = 0.002. (a) Critical points 0 and 0.4/0.002 = 200; f is a downward parabola, so 0 unstable, 200 stable. Correct. (b) h_m = 0.16/0.008 = 20 tonnes a year at y = a/(2b) = 100 tonnes. Correct. (c) 0.002y² − 0.4y + 15 = 0: discriminant 0.16 − 0.12 = 0.04, root 0.2, y = (0.4 ± 0.2)/0.004 = 150 and 50. f = −0.002y² + 0.4y − 15 is positive between 50 and 150, negative outside: 150 stable, 50 unstable; above 50 settles at 150, below 50 collapses. Correct. Units consistent (a per year, b per tonne per year, h tonnes per year).
- Quiz 1: zeros of f, answer 0. Correct; explanation correct.
- Quiz 2: a/b stable, answer 1. Correct; explanation matches p. 11.
- Quiz 3: h ≤ a²/4b, answer 0. Correct and matches p. 15 ("As long as you start above, and don't harvest it more than this rate"); "from a large enough start" is the right qualifier (for h < h_m one must start above the lower critical point; at h = h_m, at or above a/(2b)). Explanation correct.
- Flashcards: all three correct.
- Frontmatter summary: correct.

## Coverage and order
- The page follows the lecture's order: definition and name → separable but qualitative aim → horizontal isoclines and translation → critical points (three equivalent views) → barriers → two-step method → bank account → logistic equation (motivation, other uses, critical points, parabola, solutions) → stable / unstable / semi-stable → harvesting (lowering the parabola, h_m, none for large h).
- Left out (minor): negative solutions of the logistic equation (p. 11; finding 6), the textbook section references and the capital-P notation (p. 8), the remark that negative money is not interesting (p. 6). Nothing of substance missing.
- Left out: Mattuck's aside on p. 13 that "harvesting" is a euphemism in the same category as "ethnic cleansing", and his remark about Hitler and sanitary names. Leaving it out is right: it is a personal political opinion with no mathematical content, the page's job is the mathematics, and reproducing it would put a lecturer's opinion (on a charged comparison) on the site without adding anything to the lesson. The page's neutral wording "salmon taken out of a fish farm" keeps the example. No change needed.
- Added: the plot of two logistic solutions (generated from the formula), the explicit h_m = a²/4b (flagged as the page's own calculation), and the original fish-farm worked example.

## Licensing
- The lecture page and transcript carry no "All rights reserved" or "Courtesy of" notice (checked lec.html and the transcript text); the course is CC BY-NC-SA.
- No text copied from the transcript beyond standard terms (autonomous, critical point, stable, unstable, semi-stable, logistic equation, harvesting, maximum harvesting rate). The opening line paraphrases Mattuck's first sentence and is cited.
- No figures reused: the only graph is generated from a formula. No OpenStax or LibreTexts material.

## Notes
- leadsTo: 18.03 Lecture 6 is "Complex Numbers and Complex Exponentials" in `_course.json`; "needed for oscillating solutions" is a fair description of why the course turns to them next (they are used for the second-order constant-coefficient equations in Lectures 7–10). No cosmology callout or cosmology claim on the page, so nothing to check there.
- Prerequisite `substitution-methods` exists (Lecture 4, untracked new file in this run). The inline link `/courses/18-03/direction-fields` points to an existing page whose "Integral curves cannot cross or touch" section supports the claim.
- Possible enrichment, not required: by uniqueness (stated on the direction-fields page), solutions approach a/b but never reach it in finite time, which explains the asymptotic curves in the plot.
