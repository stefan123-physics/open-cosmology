---
page: content/year-2/18.03/linear-first-order-equations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-3-solving-first-order-linear-odes/ (read: local copy lec.html; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/e2050548ce3563d310c88c1c80c0fa32_tVzaX9u6YAE.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L3", 18 pages of text, no printed page numbers, page-split text tp.txt; cited page = PDF page)
  - content/year-2/18.03/_course.json (read: Lecture 4 = "First-order Substitution Methods")
  - content/year-1/18.01/separation-of-variables.mdx (read: exists, target of the inline link)
  - calcs/18.03/linear-first-order-equations.yaml (read; `npm run calc:test -- -k linear-first`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: First-order linear equations and integrating factors

Citation convention checked: transcript pages are PDF pages (page breaks from the form feeds in tp.txt). The lecture has no slides; every equation was written on the board, so citing the transcript (`reading1`) is the only option and is correct. All seven formulas are at the cited page: "First-order linear equation" (p. 1, letters a, b, c named on p. 2), "Standard linear form" (p. 2), "Newton's law of cooling" (pp. 5–6), "Choosing the integrating factor" (p. 10), "Integrating factor" (p. 11), "Example 1" (p. 13), "Example 2" (p. 15), "Solution of the cooling law" (p. 17). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Example 1 and the bracketed note | p. 12: "XY prime minus Y equals, I had X2, X3, something like that, X3, I think, yeah, X2." He then writes the standard form as y′ − (1/x)y = x², multiplies by 1/x to get x on the right, integrates to y/x = x²/2 + C (p. 13, after first saying "X plus a constant" and correcting himself) and gets y = x³/2 + Cx. | Uses xy′ − y = x³; note: "Mattuck hesitates between x³ and x² ... his working, with x² in the standard form, belongs to x³, used here." | The reading is right: every later line (q = x², uq = x, y = x³/2 + Cx) belongs to xy′ − y = x³, and y = x³/2 + Cx satisfies it exactly (x(3x²/2 + C) − x³/2 − Cx = x³). With x² on the original right side the standard form would have q = x and the answer y = x ln x + Cx. The note is fair; strictly his last spoken word was "x²", so "hesitates" is the honest description. No change needed. |
| 2 | info | Example 2 | p. 14 has two slips: the derivative of 1 + cos x is called "negative cosine X" (should be −sin x), and the multiplied equation is read as "Y prime minus sign X equals 2X" (the y is dropped); p. 15 garbles the general solution ("X2 divided by X2 plus a constant divided by one plus cosine X"). | Correct throughout: ∫p dx = ln(1 + cos x), u = 1 + cos x, (1 + cos x)y = x² + C. | Optional, per writing rule 4: the −cos x slip is the only one a reader comparing with the transcript could trip on; a short bracket "(the transcript says −cos x here; the derivative of 1 + cos x is −sin x)" would do. The others are transcription noise. |
| 3 | info | Constant coefficients, last paragraph | p. 18: "This part disappears as T goes to zero. This goes to zero as T goes to infinity." | "dies away as t → ∞". | Mattuck corrects himself in the next sentence; the page is right and needs no note. |
| 4 | info | "Linear equations and the standard form", last sentence | "a disaster" (p. 3); "disastrously wrong answers" (p. 11). | "disastrously wrong answers (pp. 2–3)". | Optionally cite "pp. 2–3, 11". |
| 5 | info | Conduction paragraph | The constant is named "the conductivity" at the end of p. 5; the reason it is positive is on pp. 5–6. Initial condition T(0) = T₀ on p. 6, where he also says the condition could be given in other ways, e.g. the temperature as t → ∞. | "(p. 6)" for both. | Optionally "(pp. 5–6)". The alternative condition at infinity is left out (minor). |
| 6 | info | Models, "it is a general linear equation (p. 8)" | The varying k (Jell-O wall) and varying Tₑ are on p. 8; the conclusion "I can think of it as a general, linear equation. So, these models are not special" is at the top of p. 9. | p. 8. | Optionally "(pp. 8–9)". |
| 7 | info | Example 1, u = e^(−ln x) = 1/x; Example 2, u = 1 + cos x | Lecture does not discuss domains. | Same. | Optional: ln x assumes x > 0 (for x < 0, e^(−ln|x|) = −1/x up to sign, which works equally well); Example 2's u vanishes at x = π, where the solution (x² + 2)/(1 + cos x) blows up, so it holds on −π < x < π. A half-sentence would make the page a little more complete than the lecture. |
| 8 | info | Steady state and transient | p. 18 calls the integral term "the steady state solution" and Ce^(−kt) the transient, for the indefinite-integral form. | Same identification. | Faithful to Mattuck. Note only: with the definite integral from 0 (which the page also mentions, C = T₀), the integral term itself contains a decaying piece (for constant Tₑ it is Tₑ(1 − e^(−kt))), so the clean split is with the indefinite integral, as on the page. No change needed. |

Prose page references checked against the transcript:
- Opening (third lecture, no equation solved yet; solvable and frequent in models; two important methods with separation of variables): p. 1. Correct.
- Linear in y and y′, x arbitrary; analogy a₁y₁ + a₂y₂ = c: pp. 1–2. Homogeneous if right side zero: p. 2. Standard linear form, p = b/a, q = c/a: p. 2. Not the general first-order form y′ = −p y + q, "never use", sign of p: pp. 2–3. Correct.
- Models list (temperature/concentration, mixing, radioactive decay, bank interest, motion, rocket): pp. 3–4. Correct.
- Tank, partly insulated metal chamber, T and Tₑ, Newton's law of cooling by conduction only: pp. 4–5. Correct.
- Diffusion, salt, semi-permeable membrane, k₁(Cₑ − C): pp. 6–7. "Power of the method": pp. 7–8. Correct.
- Standard form dT/dt + kT = kTₑ; Tₑ general, k allowed to vary: p. 8 (see finding 6).
- Multiply by u, want the left side to be a derivative: pp. 9–10. u′ = pu, separate, ln u = ∫p dx: p. 10. u = e^(∫p dx), no arbitrary constant: p. 11. Method steps (standard form, find u, multiply both sides, integrate): pp. 11–12. Two common mistakes: p. 13 (mistake one and two), "please include the Q" p. 14. "(pp. 13–14)" correct.
- Example 1 standard form and u: p. 12; product-rule check: pp. 12–13; integration: p. 13. Correct.
- Example 2 equation: p. 13; standard form, u, original equation returns: p. 14; "(pp. 13–14)" correct. Not wasted, left side is ((1 + cos x)y)′: p. 15. y(0) = 1, "one equals C over two", C = 2: p. 15. Correct.
- k on both sides, units argument: p. 16. e^(kt), (e^(kt)T)′ = kTₑe^(kt): p. 16 into p. 17. Solution formula: p. 17. Definite integral from 0, C = T₀: p. 17. Transient/steady state, initial condition irrelevant in the long run: p. 18 (the page cites pp. 17–18, fine).

## Arithmetic and answer checks
- `npm run calc:test -- -k linear-first`: 6 passed. Recomputed by hand:
- Example 1: y = x³/2 + Cx, y′ = 3x²/2 + C; xy′ − y = 3x³/2 + Cx − x³/2 − Cx = x³. Correct. Intermediate steps: (1/x)·x² = x; ((1/x)y)′ = (1/x)y′ − (1/x²)y. Correct.
- Example 2: d/dx ln(1 + cos x) = −sin x/(1 + cos x) = p. Correct. (uy)′ = uq = 2x, so (1 + cos x)y = x² + C; at x = 0: 2·1 = C, C = 2; y = (x² + 2)/(1 + cos x). Correct.
- Cooling solution: standard form T′ + kT = kTₑ, u = e^(kt), (e^(kt)T)′ = kTₑe^(kt), T = e^(−kt)∫kTₑe^(kt) dt + Ce^(−kt). Correct.
- Worked example (coffee, original): T′ + 0.05T = 1, (e^(0.05t)T)′ = e^(0.05t), e^(0.05t)T = 20e^(0.05t) + C, T = 20 + Ce^(−0.05t), C = 70. T(20) = 20 + 70e^(−1) = 20 + 25.75 = 45.75 → "≈ 45.8 °C". Correct. T = 40: e^(−0.05t) = 20/70 = 2/7, t = ln 3.5/0.05 = 1.2528/0.05 = 25.06 → "≈ 25.1 minutes". Correct.
- Plot: curves 20 + 70e^(−0.05t) (T₀ = 90) and 20 − 15e^(−0.05t) (T₀ = 5) are both 20 + (T₀ − 20)e^(−kt) as the caption says; dashed line 20 is the steady state. Range 0–100 °C covers both; at t = 50 the curves are 25.7 and 18.8 °C. Caption correct.
- Quiz 1: dividing xy′ − y = x³ by x gives y′ − (1/x)y = x², answer 1. Correct; choice 0 is the general first-order form the course rejects, a fair distractor. Explanation correct.
- Quiz 2: e^(∫p dx), answer 1. Correct; explanation matches p. 10.
- Quiz 3: transient Ce^(−kt) → 0 since k > 0, answer 1. Correct.
- Flashcards: all three correct.
- Frontmatter summary: correct, including the sign remark and the steady-state/transient description.

## Coverage and order
- The page follows the lecture's order: definition and analogy → homogeneous → standard linear form and the sign warning → list of models → conduction (Newton's law, positive k, initial condition) → diffusion → models are general → integrating factor derivation → method and mistakes → Example 1 → Example 2 with initial condition → constant coefficients, units, solution, definite-integral form → steady state and transient.
- The mistakes paragraph sits before Example 1 on the page; in the lecture they are listed between Example 1 and Example 2 (pp. 13–14). Harmless reordering.
- Left out (minor): the boundary condition "as time goes to infinity" (p. 6); the reference to the notes' section "definite integral solutions" (p. 17); the announcement of a mixing problem in recitation and a second linear-equation lecture next week (p. 4). Nothing of substance missing.
- Added: the original coffee worked example and the plot. No cosmology callout, which is fine for this lecture (no honest direct link is claimed).

## Licensing
- No "rights reserved" or "courtesy" notice in the transcript or on the OCW lecture page.
- Text is rewritten, not copied; short standard terms only ("standard linear form", "integrating factor", "steady state", "transient"). The phrase "disastrously wrong answers" echoes p. 11 but is a short phrase.
- Examples 1 and 2 are MIT's, cited as such; the coffee example and plot are the page's own. No OpenStax or LibreTexts material.

## Forward links
- `leadsTo` 18.03 Lecture 4, "Substitution methods that turn other first-order equations into ones we can solve": matches `_course.json` ("First-order Substitution Methods"). Correct.
- Inline link `/courses/18-01/separation-of-variables` points to an existing page (18.01 Lecture 16). Correct.

## Notes
- Example 1 question (asked by the author): the page's reading is correct and fairly stated (finding 1). The transcript's spoken hesitation ends on "x²", but the written working (q = x² in standard form, answer x³/2 + Cx) is consistent only with x³ on the right of the original equation.
- The "as T goes to zero" slip on p. 18 is corrected by Mattuck in the next line; the page states it correctly and needs no note.
- All findings are info; none is an error. The page can be set to `reviewed` after the author decides on the optional notes.

## Resolution (2026-11-16, by the page author)

- Info: added the domains (Example 1 on x > 0; Example 2 valid on −π < x < π, blowing up where 1 + cos x = 0). The other optional notes (page ranges, the −cos x slip on p. 14, the order of the common mistakes, the condition at infinity) are left as they are; the page itself is correct in those places.
