---
page: content/year-2/18.03/repeated-and-complex-eigenvalues.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-26-continuation-repeated-real-eigenvalues/ (read: local copy lec.html; title "Lecture 26: Continuation: Repeated Real Eigenvalues"; its only .pdf link is e3fe10ac32bc7c5a166ddb8df3254ae0_hEtWqTPPXuc.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/e3fe10ac32bc7c5a166ddb8df3254ae0_hEtWqTPPXuc.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L26", 5 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately)
  - content/year-2/18.03/_course.json (read: Lecture 27 = "Sketching Solutions of 2x2 Homogeneous Linear System with Constant Coefficients"; the Lecture 27 transcript was not read)
  - calcs/18.03/repeated-and-complex-eigenvalues.yaml (read; `npm run calc:test -- -k repeated-and-complex`: 6 passed)
verdict: pass-with-notes
---

# Review: Repeated and complex eigenvalues

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 opening recap, "two cases", fish tank set-up, the equations with a = 1, A − λI, start of the main-diagonal term; p. 2 "minus the principle term", the 1·1·1 terms, the three anti-diagonal terms, sign change, binomial expansion, λ³ + 6λ² + 9λ, constant term "A minus 2 minus 6" (8 garbled as "A"), factoring, double root −3, comparison with repeated roots of second-order equations, λ = 0 system, no inverse matrix, "where did this come from", start of the constant-solution argument; p. 3 constant solution (1, 1, 1), check, λ = −3 gives a₁ + a₂ + a₃ = 0, eigenvectors (1, 0, −1), (1, −1, 0), (0, 1, −1) not new, general solution, limit t → ∞, complete, incomplete/defective, problem set problem 2, start of the spectral theorem; p. 4 symmetric matrix, theorem, equilibrium theory, complex programme, the sitcom system, λ² + 1, eigenvector equations, a₂, separation into real and imaginary vectors, cos t + i sin t; p. 5 real part, x = cos t, y, ellipse, 2π, "26 episodes".

Formula locations: "Fish-tank system" p. 1; "Characteristic equation" p. 2; "Constant solution" p. 3 (argument pp. 2–3); "Equation for the eigenvectors" p. 3; "General solution" p. 3; "The system" p. 4; "Complex solution" pp. 4–5 (see finding 4); "Real solution" p. 5. All correct.

Prose citations also checked: smooth case / two cases p. 1; fish tank, heater, insulation, stirring, conductivity a, both neighbours, a = 1, symmetry p. 1; no trace-determinant formula for 3 × 3 p. 1; main diagonal pp. 1–2; other terms and sign change p. 2; constant term and double root p. 2; inverse matrix and "each field has its own tricks" p. 2; constant solution pp. 2–3; λ = −3 p. 3; complete / incomplete / defective, problem set p. 3; spectral (principal axis) theorem pp. 3–4; equilibrium theory p. 4; complex programme p. 4; sitcom pp. 4–5; trace 0, determinant 1, one eigenvalue enough p. 4; ellipse, period 2π, episodes p. 5. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page. The inline link `/courses/18-03/eigenvalues-linear-systems` points to the (uncommitted, expected) Lecture 25 page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example (c): $x' = x - 2y$, $y' = x - y$ | Lecture example (p. 4): $x' = x + 2y$, $y' = -x - y$. | Substituting $y \to -y$ in MIT's system gives exactly $x' = x - 2y$, $y' = x - y$. So (c) is the lecture's example in disguise: same trace 0, determinant 1, eigenvalues $\pm i$, ellipses. The working is rewritten (and correct), but CONTENT_GUIDE/AGENTS rule 1 asks for original numbers, and with $a = 0$ again the reader never sees the $e^{at}$ factor of the method the page states ($\vec\alpha\,e^{(a + bi)t}$, quiz 3). | Use a system with $a \neq 0$, e.g. $x' = -x - 2y$, $y' = 2x - y$: trace −2, determinant 5, $\lambda = -1 \pm 2i$; for $-1 + 2i$, $\vec\alpha = (1, -i) = (1, 0) + i(0, -1)$; real part $e^{-t}(\cos 2t, \sin 2t)$, imaginary part $e^{-t}(\sin 2t, -\cos 2t)$ (both checked by hand to satisfy the system); a spiral, which also prepares Lecture 27. Update calcs `ex-c-real`. |
| 2 | warning | Sitcom sentence: "her feelings $x$ respond normally to his, his $y$ neurotically to hers" | p. 4: her equation is "normal" (she loves more when he does: $+2y$; "all the world loves a lover": $+x$). His is "neurotic" because when he finds he loves her more than yesterday, $y'$ goes down: that is the $-y$ term, his reaction to his **own** feelings. The $-x$ term is not explained. | Says his neurosis is a response to her feelings, which is not what the lecture explains. | E.g. "her feelings $x$ grow when his do (and when her own do); his $y$ falls whenever he notices he is more in love (the $-y$ term)". |
| 3 | info | "Its real part is a real solution (p. 5)" | p. 5: only the real part is computed "since I have a limited amount of time"; the imaginary part is said to give another. | Same: one real solution only, while the section's programme promises two. | Optional: add the imaginary part, $x = \sin t$, $y = \frac{1}{2}\cos t - \frac{1}{2}\sin t$ (checked: satisfies both equations), and the general solution as a combination. |
| 4 | info | "Complex solution" formula, `at="pp. 4–5"` | The whole expression (real and imaginary vectors times $\cos t + i\sin t$) is written on p. 4; p. 5 only takes its real part. | pp. 4–5. | Optional: `at="p. 4"`. |
| 5 | info | "the solution curves are ellipses" | p. 5: eliminating $t$ gives a quadratic in $x$, $y$ equal to zero, an ellipse; "go around that way" (direction shown on the board). | Ellipse stated without the equation; direction of travel not given. | Optional: add $2x^2 + 4xy + 4y^2 = 1$ (checked for $x = \cos t$, $y = -\frac{1}{2}(\cos t + \sin t)$) and "clockwise" (at $t = 0$ the point $(1, -\frac{1}{2})$ moves with velocity $(0, -\frac{1}{2})$, i.e. downwards at the right-hand end, so clockwise in the usual axes). |
| 6 | info | Summary: "purely imaginary ones give closed orbits" | Not stated generally in the lecture; only the example. | General claim. | Correct for 2 × 2 real systems with $\pm bi$, $b \neq 0$; optionally say "(for 2 × 2 systems)". |

Lecturer slips and transcript garbles checked:
- p. 4: second eigenvector equation read as "negative a1 plus minus (1 minus i) times a2"; correct is $-a_1 + (-1 - i)a_2 = 0$ (A − iI has $-1 - i$ in the corner). The page's bracketed note is correct; check: with $a_1 = 1$, $a_2 = -\frac{1 - i}{2}$: $-1 + (1 + i)(1 - i)/2 = 0$.
- p. 4: Mattuck first says "a2 is 1 minus i divided by 2", then corrects to the negative. The page uses the corrected value.
- p. 5: "y is minus one-half times cosine t, minus one-half times sine t, plus sine t": the trailing "plus sine t" is wrong (would not satisfy the equations). The page's note and formula are correct.
- p. 2: "It is A minus 2 minus 6" (8 garbled as "A"); "lambda squared erm"; the page writes $8 - 2 - 6$, correct.
- p. 3: "principle axis theorem" (principal); p. 3 "real end-by-end" ($n \times n$); "It is not independent delta": garbles, not repeated.
- The sitcom: the lecture names the characters and the show; the page names neither and describes "a couple in a TV sitcom". Appropriate; nothing about the plot is reproduced.

## Arithmetic and answer checks
- `npm run calc:test -- -k repeated-and-complex`: 6 passed.
- Characteristic polynomial: det(A − λI) with diagonal $d = -2 - \lambda$, off-diagonal 1: $d^3 + 2 - 3d = -(\lambda + 2)^3 + 2 + 3(\lambda + 2)$; negated: $\lambda^3 + 6\lambda^2 + 12\lambda + 8 - 2 - 3\lambda - 6 = \lambda^3 + 6\lambda^2 + 9\lambda = \lambda(\lambda + 3)^2$. NumPy `np.poly(A)` gives [1, 6, 9, 0]; eigenvalues 0, −3, −3. The page's description (main diagonal $-(\lambda + 2)^3$, $1 + 1$, three terms $-(-2 - \lambda)$) is correct. Constant $8 - 2 - 6 = 0$. Correct.
- λ = 0: $A(1, 1, 1)^T = 0$ (each row $-2 + 1 + 1$). Correct.
- λ = −3: $A + 3I$ has all entries 1, so $a_1 + a_2 + a_3 = 0$; $(1, 0, -1)$ and $(1, -1, 0)$ satisfy it and are independent; $(1, 0, -1) - (1, -1, 0) = (0, 1, -1)$. Correct. General solution and limit as $t \to \infty$ correct.
- Sitcom system: trace $1 - 1 = 0$, determinant $(1)(-1) - (2)(-1) = 1$, $\lambda = \pm i$ (NumPy agrees). Eigenvector for $i$: NumPy normalised to $a_1 = 1$ gives $a_2 = -0.5 + 0.5i = -\frac{1 - i}{2}$. Split $(1, -\frac{1}{2}) + i(0, \frac{1}{2})$. Correct. Real part $(1, -\frac{1}{2})\cos t - (0, \frac{1}{2})\sin t$: $x = \cos t$, $y = -\frac{1}{2}\cos t - \frac{1}{2}\sin t$; substituted: $x' = -\sin t = x + 2y$, $y' = \frac{1}{2}\sin t - \frac{1}{2}\cos t = -x - y$. Correct. Period $2\pi$; closed curve is an ellipse ($2x^2 + 4xy + 4y^2 = 1$, discriminant $16 - 32 < 0$).
- Plot: curve expressions match the formula; the point $(1, -0.5)$ is the solution at $t = 0$; $|y| \le \frac{\sqrt 2}{2} \approx 0.71$ fits the range $[-1, 1]$, $|x| \le 1$ fits $[-1.5, 1.5]$. Caption accurate. Label placement not checked in a browser (`content:check` does that).
- Worked example (a): column sums of A are 0, so $(x_1 + x_2 + x_3)' = 0$; the limit $c_3(1, 1, 1)$ then has $3c_3$ = initial total, so the final temperature is the average. Correct.
- (b): $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$, $(\lambda - 2)^2$, $A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ gives $a_2 = 0$ only: one eigenvector, defective; not symmetric. Correct. (Whether this is the same matrix as the lecture's problem set problem 2 was not checked; the problem set was not read. It is a standard textbook example in any case.)
- (c): trace 0, determinant $-1 + 2 = 1$, $\pm i$; $(1 - i)a_1 - 2a_2 = 0$ gives $\vec\alpha = (2, 1 - i)$ (NumPy agrees); real part $(2\cos t, \cos t + \sin t)$, imaginary part $(2\sin t, \sin t - \cos t)$; both substituted into the system by hand: correct. See finding 1 on originality.
- Quiz 1: answer 0 correct; explanation correct.
- Quiz 2: answer 0 (real symmetric) correct; the distractors are rightly wrong ($\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has trace 0, is upper triangular and 2 × 2-embeddable in 3 × 3, and is defective). Explanation correct.
- Quiz 3: answer 0 correct; explanation correct.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: entries match the page. Not covered (info): $\lambda = \pm i$ for both 2 × 2 systems, $a_2 = -\frac{1 - i}{2}$, $(1, 1, 1)$ and $(1, -1, 0)$, the imaginary part in (c), example (a). The `complex-solution-y` entry's `shown` anchor ("travelled round and round") is weak; the y formula is already anchored by `complex-solution`. `ex-c-real` cites `reading1` p. 4 though page-own (`origin: page-own` set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: recap and two hard cases (p. 1) → fish tank model and equations (p. 1) → characteristic equation (pp. 1–2) → λ = 0, no inverse matrix, constant solution (pp. 2–3) → λ = −3, two eigenvectors, a third not new, general solution, long-time limit (p. 3) → complete / defective (p. 3) → spectral theorem (pp. 3–4) → complex eigenvalues: programme, example, eigenvector, real part, ellipse (pp. 4–5). Same order as MIT.
- Left out (minor): the opening recap of the eigenvalue method (p. 1; covered by the prerequisite page); the comparison with repeated roots of second-order equations, where one multiplied by $t$ (p. 2); that any constant multiple such as $(20, 20, 20)$ is included (p. 3); that the defective word is the one used in 18.06 (p. 3); that the diagonal entries of a symmetric matrix are unconstrained (p. 4); the eliminated quadratic equation and direction of travel (p. 5; finding 5). None is essential.
- Added: the plot, the worked example (page-own), and the bracketed slip notes.
- `prerequisites: [eigenvalues-linear-systems]`: written but not yet committed (expected, per the task).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("a dependent system", "follow the same program", "far from obvious" for "very unobvious", "enough for a season of episodes") are brief and acceptable.
- The sitcom's characters and show are not named; no third-party material is reproduced.
- Worked examples (a) and (b) are original; (c) is the lecture's system under $y \to -y$ (finding 1). No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 27 ("Sketching the solutions of 2 × 2 linear systems: nodes, saddles, spirals and centres."): the first part matches the Lecture 27 title in `_course.json`, and this lecture ends by sketching the ellipses with a phase-plane program (p. 5). That Lecture 27 covers nodes, saddles, spirals and centres is the standard content of that topic and very likely, but unverified here because the Lecture 27 transcript was not read (uncertain).
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. Warning 1: worked example (c) now uses x′ = −x − 2y, y′ = 2x − y. Its eigenvalues are −1 ± 2i, so the e^(−t) factor appears, and the solutions are e^(−t)(cos 2t, sin 2t) and e^(−t)(sin 2t, −cos 2t). The calcs entries are replaced to match.
2. Warning 2: the sitcom sentence now says his feelings fall the more he loves her, which is the −y term.
3. Info:
   - The imaginary-part solution and the clockwise direction are now given.
   - The complex-solution formula cites p. 4.
   - "Closed orbits" is now qualified as holding for 2 × 2 systems.

Status set to `reviewed`.
