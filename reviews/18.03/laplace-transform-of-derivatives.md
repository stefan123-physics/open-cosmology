---
page: content/year-2/18.03/laplace-transform-of-derivatives.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-20-derivative-formulas/ (read: local copy lec.html; title "Lecture 20: Derivative Formulas"; its only .pdf link is b4e0484fdf2ebc7e6247e5e5fef88af7_qZHseRxAWZ8.pdf, matching the page's `reading1` URL and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/b4e0484fdf2ebc7e6247e5e5fef88af7_qZHseRxAWZ8.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L20", 19 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 21 = "Convolution Formula"; the Lecture 21 transcript was not read)
  - calcs/18.03/laplace-transform-of-derivatives.yaml (read; `npm run calc:test -- -k laplace-transform-of`: 9 passed)
verdict: needs-changes
---

# Review: Laplace transforms of derivatives and solving initial value problems

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "Okay, those are the formulas" (p. 1) and ends "good luck on Friday, and see you there" (p. 19). Formula locations: "Exponential type" p. 2 (absolute value, positive c and k, all t ≥ 0: all on p. 2); "Integrating by parts" pp. 9–10 (boundary term p. 9, the $-s e^{-st}f$ integral p. 10; the page merges the two minus signs into $+s\int$, which the lecture does on p. 11, fine); "Transform of a derivative" p. 11; "Transform of a second derivative" p. 12; "The initial value problem" pp. 13–15; "Solving for Y" pp. 16–18 (factored form p. 16, the three-term form pp. 16–17, coefficients pp. 17–18); "Solution" pp. 18–19. All correct. Prose citations also checked: improper integral and $\int t\,dt$ p. 1; "pull it down" p. 1; absolute value and negative t p. 2; $e^{100t}$ p. 2; sin t pp. 2–3; $t^n \le Me^t$ p. 3; continuity/L'Hôpital/maximum pp. 3–4; 1/t pp. 4–5; $e^{t^2}$ and "t > k" p. 5; physical problems p. 5; $e^{-t^2}$ p. 6 (the question is asked at the foot of p. 5, answered on p. 6); h(t) and the IVP requirement p. 6; a and b pp. 6–7; the three steps pp. 7–8; mountain p. 8; upper limit and s > k p. 10; lower limit and why an IVP is needed p. 11; "multiplying by s corresponds to taking the derivative" p. 11; not integrating by parts twice pp. 11–12; "fellow travelers" p. 12, "you must put them in" p. 13; operator method pp. 13–14; transformed equation p. 15; grouping p. 15; separate terms for each power pp. 16–17; cover-up p. 17; s = 0 pp. 17–18; 1/s² and shift pp. 18–19; particular vs complementary p. 19. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

**Reconstruction of the example problem.** The transcript never reads the equation out ("Problem? Okay.", p. 13). The page's $y'' - y = e^{-t}$, $y(0) = 1$, $y'(0) = 0$ is checked against every clue: the homogeneous solutions are $e^t$ and $e^{-t}$ (p. 13), so the characteristic polynomial is $r^2 - 1$ (no $y'$ term, coefficient of $y$ is $-1$); "the number here is negative one" and it is a characteristic root, needing the extra formula (p. 14), so the input is $e^{-t}$; the transform of the right side is "one over s plus one" (p. 15), so its coefficient is 1; "minus s times the value at zero, which is one, minus the value of the derivative. But, that's zero" (p. 15); "minus the Laplace transform of y, well, that's just capital Y" (p. 15); the factor $s^2 - 1$ (p. 16); and the final coefficients 3/4, 1/4, −1/2 (pp. 17–19) are exactly what this problem gives. The reconstruction is correct and unique. Optional: say on the page that the transcript does not read the equation out.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Graph caption: "so t³ ≤ 1.34 e^t for all t ≥ 0" | pp. 3–4: some constant M exists (not computed). | The bound 1.34 is too small: at t = 3, $1.34\,e^3 = 26.915 < 27 = 3^3$. The maximum is $27/e^3 = 1.3443 > 1.34$, so the stated inequality is false at and near t = 3. (The worked example (c) correctly says M = 1.35.) | "so t³ ≤ 1.35 e^t for all t ≥ 0" (or "t³ ≤ (27/e³) e^t"). Add a calcs entry for the bound. |
| 2 | error | Quiz 2 explanation: "$e^{t^2}$ eventually exceeds $ce^{kt}$ for every $k$, as soon as $t > k$." | p. 5: compares $e^{t^2}$ with $e^{kt}$ only (no c): $t^2 > kt$ once $t > k$. | With the constant $c$ included the claim is false: $e^{t^2} > ce^{kt}$ needs $t^2 > kt + \ln c$. E.g. $k = 1$, $c = e^{10}$, $t = 2$: $e^4 < e^{12}$. The answer (choice 0) is right; the explanation is not. | "…exceeds $ce^{kt}$ for every $c$ and $k$ once $t^2 > kt + \ln c$, which happens for all large $t$." (The body's sentence "whatever $k$, $t^2 > kt$ once $t > k$" compares with $e^{kt}$ only and is true; it may optionally add "the constant $c$ only delays this".) |
| 3 | warning | Summary bullet: "Powers and sinusoids qualify; $1/t$ and $e^{t^2}$ do not." | pp. 3–5: $t^n$ for positive integers n qualifies; Mattuck notes the $n!/s^{n+1}$ formula "only works for positive integers, not negative integers" (p. 5). | "Powers" contradicts the next clause, since $1/t = t^{-1}$ is a power. | "Powers $t^n$ ($n \ge 0$) and sinusoids qualify; …". |
| 4 | info | Exponential type: "Such functions do not seem to occur in physical problems (p. 5)" | p. 5: Mattuck says he has never seen one, twice adding "that may be just my ignorance". | Hedged ("do not seem to") but unattributed. | Optional: "Mattuck says he has never met one in a physical problem". |
| 5 | info | Exponential type: "then $F(s)$ exists for $s > k$" (summary, flashcard 1) | p. 1 and p. 10: the condition guarantees the integral converges; the lecture also says nothing about continuity. | Same as lecture. Strictly, piecewise continuity is also needed (the book's condition). | None needed; optionally "(for a piecewise continuous f)". |
| 6 | info | Plot | pp. 3–4: the argument is for general $t^n$ (Mattuck's example is $t^{100}$); a sketch of the ratio is described, not given numerically. | Uses $n = 3$ for a concrete graph. The page's own illustration; fine. | None. |

Lecturer slips and transcript garbles checked:
- p. 1: "The basic test for today" (for "task"): garble, not repeated.
- p. 4: "it's still t, to the t" (for $e^t$) and "Lopital": garbles, not repeated.
- p. 5: "as soon as t gets bigger than 10 to the 10 to the 23" after proposing Avogadro's number for k: a garbled or exaggerated number; not repeated.
- p. 11: "the Laplace transform of the original function, F of t" (for $F(s)$): slip, page writes $F(s)$.
- p. 18: "change s to s plus one, corresponds to multiplying by e to the t" (should be $e^{-t}$); Mattuck corrects it on p. 19 ("t times e to the negative t"). The page gives only the correct $te^{-t}$. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k laplace-transform-of`: 9 passed. Rechecked by hand below.
- $27e^{-3} = 1.34425$ (graph point 1.344 and worked example (c) 1.344 correct; caption "≈ 1.34" correct as a rounding, but see finding 1 for the inequality). At $t = 12$ the curve is $1728e^{-12} = 0.011$, inside the range; maximum 1.344 < 1.6 top of range. Derivative $(3t^2 - t^3)e^{-t}$ zero at t = 3. Correct.
- Integration by parts: $[e^{-st}f]_0^\infty - \int(-s)e^{-st}f\,dt = -f(0) + sF(s)$ for $s > k$. Correct. Second derivative: $s(sF - f(0)) - f'(0)$. Correct.
- Lecture example: $s^2Y - s - Y = \frac{1}{s + 1}$; $(s^2 - 1)Y = \frac{1 + s(s + 1)}{s + 1} = \frac{s^2 + s + 1}{s + 1}$; $Y = \frac{s^2 + s + 1}{(s + 1)^2(s - 1)}$. Correct. Cover-up: s = 1: $3/4$; s = −1 on $(s + 1)^2$: $1/(-2) = -1/2$; s = 0: $-1 = -\frac12 + c - \frac34$, $c = \frac14$. Recombined numerator: $-\frac12(s - 1) + \frac14(s + 1)(s - 1) + \frac34(s + 1)^2 = s^2 + s + 1$. Correct. Inverse: $\frac34e^t + \frac14e^{-t} - \frac12te^{-t}$. Check: $y(0) = 1$, $y'(0) = \frac34 - \frac14 - \frac12 = 0$; $(te^{-t})'' - te^{-t} = -2e^{-t}$, times $-\frac12$ gives $e^{-t}$; the exponentials solve the homogeneous equation. Correct.
- Worked example (a): $Y = \frac{2s + 6}{s^2 + 4}$, $y = 2\cos 2t + 3\sin 2t$; $y(0) = 2$, $y'(0) = 6$. Correct. (b): $(s + 3)Y = \frac{s + 6}{s}$; cover-up $\frac{6}{3} = 2$ at s = 0, $\frac{3}{-3} = -1$ at s = −3; $y = 2 - e^{-3t}$; check stated on page correct. (c): M = 1.35 works. Correct.
- Quiz 1: answer 0 correct. Quiz 2: answer 0 correct; explanation wrong (finding 2). Quiz 3: answer 0 correct (identical to worked example (a), so the quiz tests recall of the example rather than a new case; optional to change the numbers).
- Flashcards: all correct.
- Frontmatter summary: every statement matches the page and is correct.
- calcs file notes (info): `lecture-solution-initial` adds $y(0)$ and $y'(0)$ into one number (1 + 0), which would not catch errors that cancel; better two entries. The cover-up values 3/4 and −1/2 and the coefficient −1 in (b) have no entry of their own (they are covered indirectly by `lecture-solution-ode`). `ex-a` cites "p. 12" although it is the page's own example (harmless). The caption's bound (finding 1) has no entry; with one, the error would have been caught.

## Coverage and order
- The page follows the lecture's order: why existence matters (p. 1) → exponential type (p. 2) → examples sin t, tⁿ, 1/t, $e^{t^2}$, $e^{-t^2}$ (pp. 2–6) → the plan for an IVP (pp. 6–8) → L(f′) by parts (pp. 8–11) → L(f″) (pp. 11–13) → the example by operators vs Laplace (pp. 13–19). Same order as MIT.
- Left out (minor): "just because you can calculate the transform doesn't mean it's of exponential type" (p. 3); "k = 1 is good enough" stated explicitly (p. 3, implicit in $Me^t$); the remark that the $n!$ formula is for positive integers only (p. 5); that the transform is almost only used for linear constant-coefficient equations (p. 6); the parameter as a "variable constant" (p. 10); the choice whether to combine terms before solving (p. 15); the alternative $(as + b)/(s + 1)^2$ form and the cubic case (pp. 16–17); the exam remarks (p. 13).
- Added: the graph of $t^3/e^t$ and the worked example (original numbers).
- `prerequisites: [laplace-transform-introduction]` exists.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("fellow travellers", "pull it down", the mountain detour) are brief and cited.
- Worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 21 ("The convolution formula: the inverse transform of a product."): consistent with the syllabus title "Convolution Formula" (the convolution of f and g has transform F(s)G(s), so it inverts a product of transforms). The Lecture 20 transcript does not preview Lecture 21 (it ends with the Friday exam), and the Lecture 21 transcript was not read: likely correct, unverified in detail.
- No `Callout kind="cosmology"`: nothing to check.
- `content:check` was not run as part of this review; plot label placement not checked in a browser.

## Resolution (2026-11-16, by the page author)

1. Error 1: the caption now says t³ ≤ 1.35 e^t, which matches worked example (c). A calcs entry `bound-holds` checks that 1.35e³ > 27.
2. Error 2: the quiz 2 explanation now argues that e^(t²)/e^(kt) = e^(t(t − k)) is unbounded for every k, so no constant c helps.
3. Warning: the summary now says "Powers tⁿ (n ≥ 0)".
4. Info: the remark about physical problems is now attributed to Mattuck. The calcs check of the initial values is split into separate y(0) and y′(0) entries.

Quiz 3 and worked example (a) share a problem on purpose. Status set to `reviewed`.
