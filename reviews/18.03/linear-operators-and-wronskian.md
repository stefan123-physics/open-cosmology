---
page: content/year-2/18.03/linear-operators-and-wronskian.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-11-theory-of-general-second-order-linear-homogeneous-odes/ (read: local copy lec.html, title "Lecture 11: Theory of General Second-order Linear Homogeneous ODEs"; its only .pdf link is 2002c12a3d7460cb5ba26e1d9e0f2b43_rZ3-nFV6l8w.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/2002c12a3d7460cb5ba26e1d9e0f2b43_rZ3-nFV6l8w.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L11", 17 pages of text, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 11 = Theory of General Second-order Linear Homogeneous ODEs, Lecture 12 = Continuation: General Theory for Inhomogeneous ODEs; the Lecture 12 transcript was not read)
  - calcs/18.03/linear-operators-and-wronskian.yaml (read; `npm run calc:test -- -k linear-operators`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Linear operators, the Wronskian and normalized solutions

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts mid-sentence ("y prime and y double prime. So, q of x times y equal zero.", p. 1) and ends with "we'll talk more about stuff next time, linear equation next time." (p. 17). Formula locations: "Linear homogeneous equation" pp. 1–2 (tail of the equation on p. 1, "q y equals zero" recopied on p. 2; it is never spoken in full, which the page does not claim); "Operator form" pp. 2–3 ($D^2y$, $pDy$ on p. 2; factoring out $y$ and $Ly = 0$ on p. 3); "Linearity laws" p. 4 (begun at the foot of p. 3, both laws stated on p. 4); "Proof of superposition" p. 6 (begun at the foot of p. 5, carried out on p. 6); "Equations for the constants" p. 8; "Wronskian" pp. 9–10 (determinant condition and name on p. 9, "let's write its definition" at the foot of p. 9, "here's the Wronskian" p. 10); "Normalized solutions" p. 12; "Normalized solutions of y″ − y = 0" p. 14; "Solution of the initial value problem" p. 15. All correct. Prose citations also checked: independence and the zero-function case p. 1; two questions pp. 1–2; any order p. 2; shorthand and black box p. 3; $D$ linear p. 4, product rule pp. 4–5, homework p. 5; linear combination defined p. 5; "plugging in" remark p. 6; initial value problem pp. 6–7; unknowns $c_1$, $c_2$ pp. 8–9; 18.02 p. 9; dependent gives $W \equiv 0$ p. 10; theorem pp. 10–11; Abel p. 11; other pairs $u_1$, $u_2$ p. 11; $e^x$, $e^{2x}$ pp. 11–12; examples pp. 12–14; engineers pp. 15–16; existence and uniqueness p. 16; final argument pp. 16–17. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Initial values section, "For independent solutions it is the second, so the constants can be found at every $x_0$." | The lecture proves only the converse direction (dependent ⇒ $W \equiv 0$, p. 10) and then simply assumes the Wronskian of the independent pair is never zero ("In particular, it's not zero here", p. 11). | States it as following from the theorem. It does not: the dichotomy alone allows independent solutions with $W \equiv 0$; ruling that out needs the uniqueness theorem (if $W(x_0) = 0$, a nontrivial combination with zero initial values at $x_0$ exists and must be the zero solution). | Add a short bracket, e.g. "(that independent solutions cannot have $W \equiv 0$ follows from the uniqueness theorem below; the lecture takes it for granted)". |
| 2 | info | Theorem and flashcard 2, "either $W = 0$ for all $x$, or never zero" | p. 10 states it without hypotheses; p. 16 assumes $p$, $q$ continuous for all $x$ for the existence and uniqueness theorem. | No hypothesis on $p$, $q$. | Optionally add "($p$, $q$ continuous)" to the theorem, matching the hypothesis given later on the page. |
| 3 | info | Abel bracket, "is now Norway's great culture hero" | p. 11: "Norway's greatest culture hero"; also "of tuberculosis". | "great culture hero". | Optional: "greatest". |
| 4 | info | Abel bracket, "his work unrecognised in his lifetime" | p. 11: "none of which was recognized in his lifetime". | Repeats the lecture's claim, attributed ("The lecture mentions…"). | Fine as attributed. Historically it is an overstatement (Crelle's journal printed several of his papers from 1826, and the Berlin appointment arrived just after his death); optionally soften to "largely unrecognised". |
| 5 | info | Wronskian formula, "$= y_1y_2' - y_2y_1'$" | p. 9 gives only the determinant entries ("y1, y2, y1 prime, y2 prime"); the expansion is not spoken. | Writes the expansion within the cited formula. | Fine (standard 2×2 expansion); no change needed. |
| 6 | info | Final section, "with initial values $u(0) = a$ and $u'(0) = b$ (pp. 16–17)" | p. 17 uses $u(x_0) = u_0$, $u'(x_0) = u_0'$ while the normalized solutions were taken at 0 (a small inconsistency in the lecture); the $u$ argument is on p. 17 only. | Uses 0 consistently, which is the correct version. | Optionally cite "p. 17". |
| 7 | info | Worked example (c), "Check: $y'(0) = -2\cosh 0 = -2$" | n/a | Omits the vanishing term $6\sinh 0$. | Optionally write $y'(0) = 6\sinh 0 - 2\cosh 0 = -2$ (the calcs entry already does). |

Abel's dates: the page's 1802–1829 is right (born 5 August 1802, died 6 April 1829), so he died aged 26, as the lecture and page say. The transcript's "18011826 or something like that" (p. 11) is garbled, and the page's note says so. The lecture also says the "centenary of his birth … was just celebrated last year" (p. 11); 2002 was the bicentenary. The page does not repeat this, which is right.

Further lecturer slips checked and not repeated:
- p. 7 "plug in x equals zero" while the initial point is $x_0$; the page uses $x_0$. Correct.
- p. 11 "they must be independent, either a constant multiple of each other" (should be "neither"); not on the page.
- p. 14 "this one … hyperbolic sine of x, and this is the one which is called hyperbolic cosine" (the board order was $Y_1$ then $Y_2$, so the spoken order looks reversed); the page pairs $Y_1 = \cosh x$, $Y_2 = \sinh x$. Correct.
- p. 15 "if you use y1 and y2, the solution is… a times Y1…" (lower case for the normalized pair); the page uses $Y_1$, $Y_2$. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k linear-operators`: 9 passed. Recomputed by hand:
- Superposition: $L(c_1y_1 + c_2y_2) = c_1Ly_1 + c_2Ly_2 = 0$. Correct.
- Dependent pair: $y_2 = cy_1$ gives $W = y_1cy_1' - cy_1y_1' = 0$. Correct.
- $y'' - y = 0$: roots ±1; $Y_1$: $c_1 + c_2 = 1$, $c_1 - c_2 = 0$ gives $c_1 = c_2 = \tfrac12$, $Y_1 = \cosh x$; $Y_2$: $c_1 + c_2 = 0$, $c_1 - c_2 = 1$ gives $\tfrac12, -\tfrac12$, $Y_2 = \sinh x$. Correct; $\cos x$, $\sin x$ are already normalized for $y'' + y = 0$. Correct.
- $y = aY_1 + bY_2$: $y(0) = a$, $y'(0) = b$. Correct.
- Worked example (a): $W = e^{-at}(e^{-at} - ate^{-at}) + ate^{-2at} = e^{-2at}$. Correct.
- (b): $W = -2 - 2 = -4$. $Y_1$: $c_1 = c_2 = \tfrac12$, $\cosh 2x$; $Y_2$: $c_1 + c_2 = 0$, $2c_1 - 2c_2 = 1$ gives $c_1 = \tfrac14$, $c_2 = -\tfrac14$, $\tfrac14(e^{2x} - e^{-2x}) = \tfrac12\sinh 2x$. Correct.
- (c): $3\cosh 2x - 2\cdot\tfrac12\sinh 2x = 3\cosh 2x - \sinh 2x$; $y(0) = 3$, $y'(0) = 6\sinh 0 - 2\cosh 0 = -2$; satisfies $y'' = 4y$. Correct.
- Quiz 1: answer 0 (linearity); distractors wrong ($p$, $q$ need not be constant; product rule irrelevant, as p. 5 says; invertibility not used). Explanation correct.
- Quiz 2: answer 0 ($\cos^2 x + \sin^2 x = 1$); explanation correct.
- Quiz 3: answer 0 ($4Y_1 - Y_2$); explanation correct.
- Flashcards: all three correct (see finding 2 for the missing hypothesis on card 2).
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: every result on the page has an entry except $Y_1 = \cosh 2x$ in (b) and $y(0) = 3$ in (c), both trivial (info). `abel-age` is a `fact` entry cited to p. 11; 26 is right for 1802–1829.

## Coverage and order
- The page follows the lecture's order: equation and the importance of linearity (p. 1) → independence, the zero-function case (p. 1) → the two questions (pp. 1–2) → superposition, any order (p. 2) → operator form, $L$, black box, inverse problem (pp. 2–3) → linearity laws, $D$ linear, product rule irrelevant, homework (pp. 3–5) → linear combination, proof of superposition (pp. 5–6) → initial value problem at $x_0$, equations for $c_1$, $c_2$, unknowns (pp. 6–9) → determinant condition, Wronskian (pp. 9–10) → dependent ⇒ $W \equiv 0$, the either/or theorem, Abel (pp. 10–11) → other independent pairs (p. 11) → normalized solutions and the two examples (pp. 12–14) → why engineers like them (pp. 15–16) → existence and uniqueness and the final argument (pp. 16–17).
- Left out (minor): the "V" pronunciation remark (p. 9); homework details (problem 5, part two; recitation exercises); the Simmons biography reference, tuberculosis and the Oslo statue (p. 11); the barred-constant notation for $u_1$, $u_2$ (p. 11); the "hi there" dialogue illustrating uniqueness (p. 17).
- Added: the worked example (original), and the expansion of the Wronskian (finding 5).
- `prerequisites: [damped-oscillations]`: the page exists and was committed as fa6ef8a during this review.
- Opening link "[the last two lectures](/courses/18-03/second-order-constant-coefficients)" points to Lecture 9 only; Lecture 10 is `damped-oscillations` (info, optional).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. The opening sentence ("theoretical, but some of its ideas are among the most important in the course") is a close echo of p. 1 but short and cited.
- The examples $y'' + y = 0$ and $y'' - y = 0$ are the lecture's own, cited as such. The worked example is original: (b) mirrors the lecture's $y'' - y$ calculation with $y'' - 4y$, but adds the Wronskian, a non-trivial $Y_2 = \tfrac12\sinh 2x$ and an initial value problem, so it is clearly rewritten.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 12 ("The general theory for inhomogeneous equations, built on the same linear operator."): consistent with the Lecture 12 title "Continuation: General Theory for Inhomogeneous ODEs" and with the lecture's own pointers (p. 2 "we are going to be using these [linear operators] for the rest of the term"; p. 17 "linear equation next time"). That Lecture 12 uses the same operator $L$ was not verified (its transcript was not read); mark as uncertain until that page is written.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.
- The calcs file and page were briefly absent from the working tree during this review (while Lecture 10 was committed); the calcs tests and content check were run on the version restored afterwards (139 lines, same length as the version read first; content not compared byte for byte).

## Resolution (2026-11-16, by the page author)

1. Warning: the page now says that "never zero for independent solutions" also uses the uniqueness theorem, which the lecture takes for granted (p. 11).
2. The theorem and flashcard 2 now state that p and q are continuous.
3. "great" became "greatest culture hero"; the expanded Wronskian is marked as the page's own; the final argument now cites p. 17.
4. Example (c)'s check now includes y(0) = 3 cosh 0 and the 6 sinh 0 term; the opening links both Lecture 9 and Lecture 10.

The remaining notes (Abel's recognition as the lecture tells it, the trivial calcs gaps) are left as they are. Status set to `reviewed`.
