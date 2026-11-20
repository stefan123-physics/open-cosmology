---
page: content/year-2/18.03/second-order-constant-coefficients.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-9-solving-second-order-linear-odes-with-constant-coefficients/ (read: local copy lec.html, title "Lecture 9: Solving Second-order Linear ODE's with Constant Coefficients"; its only .pdf link is 1fd3fae817756ec8d0326808c7f918a4_vP-oRQqmeg4.pdf, matching the page's `reading1` URL; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/1fd3fae817756ec8d0326808c7f918a4_vP-oRQqmeg4.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L9", 18 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 9 = Solving Second-order Linear ODE's with Constant Coefficients, Lecture 10 = Continuation: Complex Characteristic Roots; the Lecture 10 transcript was not read)
  - calcs/18.03/second-order-constant-coefficients.yaml (read; `npm run calc:test -- -k second-order-const`: 12 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Second-order linear equations with constant coefficients

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The transcript runs from "We're going to start." (p. 1) to the end of the reduction-of-order calculation (p. 18, "except for the last problem, now"). Formula locations: "Homogeneous second-order equation" p. 1 (described in words, A and B named on p. 1); "General solution" p. 2 ("c one y one plus c two y two", sentence begun at the foot of p. 1); "Spring–mass–dashpot" p. 4 (both forms, the divided one "plus k divided by m times x"); "Characteristic equation" p. 6; "Distinct real roots" p. 6; "The example's solution" p. 9; "Complex roots a ± bi" p. 13 (real and imaginary parts on p. 12, general solution with constants factored on p. 13); "Underdamped example" p. 14 (c₁ = 1, c₂ = 2, √5, φ, cos(t − φ) all on p. 14); "Critically damped equation" p. 16; "Reduction for the double root" pp. 17–18 (derivatives p. 17, $e^{-at}u'' = 0$ and $u = c_1t + c_2$ p. 18); "Second solution" p. 18. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Case 3, "(The transcript drops the $p(t)y'$ term when stating this.)" | p. 16: "I'll use the books notation with p's and q's. y prime plus q y equals zero." The spoken equation is incomplete; it is not clear which part is missing (it could equally be read as the tail "…p y′ + q y" with $y''$ lost). | Says specifically that the $p(t)y'$ term is dropped. | Optionally "(The transcript states this equation incompletely, as 'y prime plus q y equals zero'.)" |
| 2 | info | Case 2 example, "(The lecture estimates $\phi$ at about 70°…)" | p. 14: "70 … plus or minus five"; p. 15 says "72" once and then "pi over two plus 70" for the first crossing. | Mentions only the p. 14 estimate. | Fine as is; optionally add "(pp. 14–15)". The correction to 63.4° is right. |
| 3 | info | Opening, link "[first-order linear equations](/courses/18-03/sinusoids-and-linear-models)" | n/a | The link text says first-order linear equations, but the target is Lecture 8 (sine–cosine identity and first-order models); `linear-first-order-equations` (Lecture 3) also exists. | Optionally point the link at `linear-first-order-equations`, or reword to "the previous lecture". |
| 4 | info | Case 3, "and the general solution is $e^{-at}(c_1 + c_2t)$" | The lecture stops at the second solution $te^{-at}$ (p. 18); it does not write the general solution. | States it without a citation, directly after p. 18. | Fine (it follows at once from the assumed form $c_1y_1 + c_2y_2$); optionally mark it as the page's own step. |
| 5 | info | Case 1, "it returns slowly without oscillating" | p. 10: "where it just returns in the long run is called the over-damped case". | Adds "slowly". | Harmless; optional. |

No lecturer slip is repeated. The three slips the page notes were verified:
- p. 6 "r squared plus ar plus b equals zero" (lower case, after capital A and B on pp. 1, 6). Note correct.
- p. 14 "phi is 70 [degrees] plus or minus five"; arctan 2 = 63.43°. Note correct (63.4° lies just outside the lecturer's own 70° ± 5°, so the correction is warranted).
- p. 16 incomplete equation; see finding 1.

Further slips checked and not repeated:
- p. 1 "a function of the dependent variable, x or t" (should be independent); the page says "a function of $t$". Correct.
- p. 5 "switching back to using t as the dependent variable", corrected in the next line by the lecturer. The page has no such statement.
- p. 14 "y prime of zero equals one, equals zero"; the page uses $y'(0) = 0$. Correct.
- p. 18 "e to the a t u double prime" (sign dropped), corrected in the same sentence; the page has $e^{-at}u''$. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k second-order-const`: 12 passed. Recomputed by hand:
- Characteristic equation: substituting $e^{rt}$ gives $(r^2 + Ar + B)e^{rt} = 0$. Correct.
- Case 1 example: $r^2 + 4r + 3 = (r+3)(r+1)$; $c_1 + c_2 = 1$, $-3c_1 - c_2 = 0$; adding gives $-2c_1 = 1$, so $c_1 = -\tfrac12$, $c_2 = \tfrac32$. Check: $y(0) = 1$, $y'(0) = \tfrac32 - \tfrac32 = 0$. Correct.
- Theorem proof: real and imaginary parts separate only because A and B are real. Correct.
- Case 2 general solution: Re and Im of $e^{(a+bi)t}$ are $e^{at}\cos bt$, $e^{at}\sin bt$. Correct.
- Case 2 example: $r = (-4 \pm \sqrt{16 - 20})/2 = -2 \pm i$. $y(0) = c_1 = 1$; $y'(0) = -2c_1 + c_2 = 0$ gives $c_2 = 2$. $\cos t + 2\sin t = \sqrt5\cos(t - \phi)$ with $\cos\phi = 1/\sqrt5$, $\sin\phi = 2/\sqrt5$, $\tan\phi = 2$, $\phi = 63.43°$. Correct.
- Case 3: $(r+a)^2 = r^2 + 2ar + a^2$. With $y = e^{-at}u$: $y' = e^{-at}(u' - au)$, $y'' = e^{-at}(u'' - 2au' + a^2u)$; $a^2y + 2ay' + y'' = e^{-at}[(a^2 - 2a^2 + a^2)u + (2a - 2a)u' + u''] = e^{-at}u''$. Correct; the order "multiply the three lines by $a^2$, $2a$ and 1" matches the lines $y$, $y'$, $y''$.
- Plot: B = 3 curve is the Case 1 example (max 1 at t = 0, decreasing). B = 4: $y = e^{-2t}(1 + 2t)$, $y(0) = 1$, $y'(0) = -2 + 2 = 0$; correct critically damped solution. B = 5: $y' = -5e^{-2t}\sin t$, so it crosses zero where $\tan t = -\tfrac12$, $t = \pi - 0.4636 = 2.678$ ("after t ≈ 2.7", correct), with its minimum at $t = \pi$, $y = -e^{-2\pi} = -0.0019$ ("dips just below zero", correct; inside the range [−0.1, 1.1]). Generated from formulas.
- Worked example (a): roots −2, −3; $c_1 + c_2 = 0$, $-2c_1 - 3c_2 = 1$ give $c_2 = -1$, $c_1 = 1$; $x'(0) = -2 + 3 = 1$. Correct.
- (b): $r = (-2 \pm \sqrt{4 - 40})/2 = -1 \pm 3i$; $c_1 = 2$, $-c_1 + 3c_2 = 1$ gives $c_2 = 1$; amplitude $\sqrt{4 + 1} = \sqrt5$, $\phi = \arctan\tfrac12 = 0.4636$ rad → 0.464, 26.57° → 26.6°. Correct.
- (c): $(r + 3)^2 = r^2 + 6r + 9$, so $k = 9$; $x = e^{-3t}(c_1 + c_2t)$. Correct.
- Quiz 1: answer 0 ($(r+2)(r+4)$, roots −2, −4); distractors wrong (choice 2 has the wrong signs; 3 and 4 drop terms). Explanation correct.
- Quiz 2: answer 0 ($e^{-t}(c_1\cos 2t + c_2\sin 2t)$); explanation correct.
- Quiz 3: answer 0 ($te^{-at}$); $2e^{-at}$ dependent, $e^{at}$ and $e^{-2at}$ not solutions. Explanation correct.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and is correct. (Labelling distinct real roots "the overdamped case" assumes the damped-spring setting, as the lecture does.)
- Calcs file: every printed number and every solution on the page has an entry; values pass at the default tolerance. Page-own entries carry `source: {cite: reading1, …}` (info, harmless, as in earlier calcs files).

## Coverage and order
- The page follows the lecture's order: the equation, homogeneous vs inhomogeneous (p. 1) → assumed general solution, two constants, find two solutions, initial values fix c₁, c₂ (pp. 1–2) → spring–mass–dashpot, Hooke's law, damping, standard form (pp. 2–4) → independence (pp. 4–5) → try $e^{rt}$ (p. 5) → characteristic equation and its three cases (p. 6) → Case 1 and the numerical example (pp. 6–9) → overdamped picture (p. 10) → Case 2, complex solution, theorem and proof (pp. 10–12) → real solutions and the single-oscillation remark (pp. 12–13) → example with spring constant 5 and its graph (pp. 13–15) → critically damped case, $(r+a)^2$, the ODE (pp. 15–16) → reduction of order with $y_1u$ (pp. 16–18). The page places independence (pp. 4–5) in the first section rather than after the model, a harmless move.
- Left out (minor): that the coefficients could be functions of t in a more general linear equation (p. 1); the book's p, q notation (p. 1); the Mathlet "visual" for problems 3 and 4 (pp. 4, 9); Euler and the exponential trial (p. 5); "the units are different" remark comparing 4 and 3 (p. 7); that in the physical case the roots are negative or have negative real part, which is why the double root is written −a with a > 0 (p. 15); the Goldilocks image (p. 15); Euler as the "fourth way" (p. 16).
- Added: the general solution $e^{-at}(c_1 + c_2t)$ (finding 4), the Plot comparing B = 3, 4, 5, and the original worked example.
- `prerequisites: [sinusoids-and-linear-models]`: the page exists (Lecture 8, now committed as dbc7487 during this review).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; prose paraphrases. Short echoes ("theorem to the rescue" → "The rescue", "door closers", "an exponential, which controls the amplitude") are short phrases or standard terminology.
- The Case 1 and Case 2 examples are the lecture's own (4, 3 and 4, 5 with y(0) = 1, y′(0) = 0), cited as such, which is the right way to present them. The worked example "Three springs" is original (different coefficients, initial values and a find-k question).
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 10 ("More on complex characteristic roots: damped oscillations, their frequency and the different kinds of damping"): consistent with the Lecture 10 title "Continuation: Complex Characteristic Roots". The details ("their frequency", "the different kinds of damping") were not verified because the Lecture 10 transcript was not read; mark as uncertain until that page is written.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.
- The source title and URLs match the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

1. The p. 16 note now says only that the transcript states the equation incompletely.
2. The ~70° note now cites pp. 14–15.
3. The opening link text now reads "first-order linear models", matching the Lecture 8 page it points to.
4. The general solution $e^{-at}(c_1 + c_2t)$ is now marked as following from the general form, not stated in the lecture.
5. "Returns slowly" became "in the long run it just returns".

The coverage omissions listed in the review are left as they are. Status set to `reviewed`.
