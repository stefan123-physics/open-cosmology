---
page: content/year-2/18.03/sketching-linear-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-27-sketching-solutions-of-2x2-homogeneous-linear-system-with-constant-coefficients/ (read: local copy lec.html; title "Lecture 27: Sketching Solutions of 2x2 Homogeneous Linear System with Constant Coefficients"; its only .pdf link is 1fb878a36d36bb734e8ee41785f8302f_e3FfmXtkppM.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`; page licence CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/1fb878a36d36bb734e8ee41785f8302f_e3FfmXtkppM.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L27", 17 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 28 = "Matrix Methods for Inhomogeneous Systems"; the Lecture 28 transcript was not read)
  - calcs/18.03/sketching-linear-systems.yaml (read; `npm run calc:test -- -k sketching-linear`: 6 passed)
verdict: needs-changes
---

# Review: Sketching the solutions of 2 × 2 linear systems

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts mid-sentence ("As a matter of fact, it plots them very accurately"); the page's reading that "it" is the computer is an inference, but p. 4 ("the computer will plot it by actually calculating values") supports it.

Page boundaries: p. 1 opening, nonlinear equations, "model of war", a = −1, d = −3, b·y and c·x, two states, x and y as departures from normal budgets, pull to spend less; p. 2 Chambers of Commerce, "three times as loudly", war-like positive coefficients, arms races, first case x′ = −x + 2y, y′ = −3y, "so what factor"; p. 3 matrix, characteristic equation, roots −3 and −1, 2a₁ + 2a₂ = 0, (1, −1), λ = −1 gives 2a₂ = 0; p. 4 eigenvector (1, 0), general solution, parametric equations as in 18.02, "sketch … without doing any work"; p. 5 four easy solutions, pink solution at (1, −1) shrinking; p. 6 never reaches the origin, comes in from infinity, "eigenvector determines the line … eigenvalue determines which way", orange solution, continuity of the velocity field; p. 7 nearby trajectories, "how do they come in?", recopied solution, which term dominates, t = 10; p. 8 e⁻¹⁰ vs e⁻³⁰, t = −100, follows the "yellow" (orange) line as t → ∞, moon and blackboard; p. 9 parallel not coincident, turn and join, peace, node, sink, nodal sink / sink node, source node announced; p. 10 e^{3t}, e^{t}, reversed arrows, dominance swapped, nodal source; p. 11 unstable, stable, asymptotically stable, second case b = 3, c = 5, λ² + 4λ − 12, roots −6, 2, 5a₁ + 3a₂ = 0; p. 12 eigenvector (3, −5), λ = 2, (1, 1), general solution, incoming pink, outgoing orange; p. 13 fill in by continuity, fine points left to the problem set, 18.02 contour lines, saddle point, mountain pass; p. 14 "the saddle", neither source nor sink, unstable, physically impossible to start on the pink line, "they all lose", "a model of what not to do", third case y′ = 2x − 3y; p. 15 −y ("Buddhist governor"), λ² + 4λ + 5, quadratic formula, −2 ± i, form of a real solution; p. 16 x = a₁cos t + b₁sin t, bounded, periodic, quadratic equation, conic sections; p. 17 ellipses, spiral sink, velocity at (1, 0) = (−1, 2), counterclockwise, peace.

Formula locations: "Competition model" p. 1 (described in words and on the board, correct); "Solution" p. 4; "Saddle solution" p. 12; "Complex eigenvalues" p. 15. All correct.

Prose citations also checked: skill needed for nonlinear equations p. 1; two states pp. 1–2; departures p. 1; return to normal, three times as loudly pp. 1–2; war-like terms and arms races p. 2; b = 2, c = 0 pp. 2–3; characteristic equation p. 3; eigenvectors pp. 3–4; parametric curves and sketching p. 4; four easy solutions pp. 5–6; eigenvector/eigenvalue rule p. 6; continuity pp. 6–7; dominance pp. 7–9; parallel, not on it pp. 8–9; turn to join p. 9; node, nodal sink, asymptotically stable pp. 9–11; peace p. 9; nodal source pp. 10–11 (the example starts at the foot of p. 9); b = 3, c = 5 p. 11; eigenvectors pp. 11–12; in/out p. 12; continuity p. 13; saddle pp. 13–14; unstable, physically impossible, nobody gains p. 14; b = −1, c = 2 pp. 14–15; form of real solution pp. 15–16; conic, ellipses pp. 16–17; spiral sink, direction, peace p. 17. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `## Summary`, second bullet: "the slower term wins as $t \to \infty$, the faster as $t \to -\infty$" | p. 10: for the source $(1,-1)e^{3t} + (1,0)e^{t}$, the $e^{3t}$ term (the faster one) dominates as $t \to \infty$ and $e^{t}$ as $t \to -\infty$. | A general rule that holds only for the sink. For the nodal source the page itself mentions it is backwards, and for the saddle "slower/faster" is undefined ($e^{2t}$ vs $e^{-6t}$). The frontmatter `summary` states the rule correctly ("the term with the less negative (or larger) eigenvalue dominates"). | "the term with the larger eigenvalue wins as $t \to \infty$, the one with the smaller eigenvalue as $t \to -\infty$". |
| 2 | info | Saddle: "The states spend without limit and nobody gains tourists" | p. 14: "Since it is mostly this section of the diagram that makes sense", i.e. Mattuck restricts the interpretation to trajectories going out along $+(1, 1)$; along $-(1, 1)$ both budgets would fall without limit, which has no meaning in the model. | Unqualified. | Optional: "Along the outgoing direction that makes sense, both states spend without limit …". |
| 3 | info | Spiral paragraph: $Ax^2 + Bxy + Cy^2 = D$ and $x = a_1\cos t + b_1\sin t$ | p. 16 uses the same letters ($A x^2 + B y^2 + C xy = D$; $a_1, b_1$). | The capital $A$ is also the system matrix in the same section, and $b$ is the model parameter ($b = -1$ in this very case); a reader can confuse the conic coefficient $A$ with the matrix and $b_1$ with $b$. Not wrong, inherited from MIT. | Optional: use $P, Q, R, S$ for the conic coefficients and $p_1, q_1 \dots$ (or $u_1, v_1$) for the trig coefficients; check `data/symbols.json` meanings if letters change. |
| 4 | info | Nodal sink: "These are parametric curves, unlike the ones met in 18.02" | p. 4: they are parametric equations "just like what you studied in 18.02"; what differs is the kind of curve (18.02 plotted things like $\cos t, \sin t$). | Can be read as "unlike 18.02, these are parametric". | "These are parametric curves, as in 18.02, but not of any kind plotted there". |
| 5 | info | Plot | (page-own) | Only the fast eigenline $y = -x$ is drawn dashed; the slow eigenline is the $x$-axis, which the caption names but the graph does not mark. Correct, but a reader may look for a second dashed line. | Optional: add `{ expr: "0", label: "eigenline (1, 0)", dash: true }` if labels fit, or leave as is. |

Lecturer slips and transcript garbles checked:
- p. 8: "it follows the yellow line" for the orange (1, 0) line; p. 10 also mixes "orange"/"yellow". The page uses vectors, not colours: not repeated.
- p. 11: "the eigenvector that goes with that is minus 1" (garbled start of the row computation); "I didn't check" whether the second row agrees. Checked: second row for λ = −6 is $5a_1 + 3a_2 = 0$, identical, so (3, −5) is right.
- p. 11: Mattuck calls the sink "stable … asymptotically stable" and dislikes "asymptotically"; the page uses the standard term. Fine.
- p. 16: "the only curves that satisfy equations like that are hyperbola, parabolas … and ellipses" (plus degenerate pairs of lines, p. 17). The page says only that bounded, repeating conics are ellipses, which is correct.
- Garbles not repeated: "poll" (pull, p. 1), "bucket" (buck it, p. 2), "simper times" (p. 2), "waive my hands" (p. 6), "Peace reins" (p. 9), "it has now traversed the solution" (p. 10), "characteristic equations is" (p. 15).

## Arithmetic and answer checks
- `npm run calc:test -- -k sketching-linear`: 6 passed.
- Independent NumPy check of eigenvalues/eigenvectors: $\begin{pmatrix}-1&2\\0&-3\end{pmatrix}$: −1 with (1, 0), −3 with (1, −1). $\begin{pmatrix}-1&3\\5&-3\end{pmatrix}$: 2 with (1, 1), −6 with (1, −5/3) ∝ (3, −5). $\begin{pmatrix}-1&-1\\2&-3\end{pmatrix}$: −2 ± i. All match the page.
- Characteristic polynomials: trace −4, det 3 → $\lambda^2 + 4\lambda + 3 = (\lambda+3)(\lambda+1)$; det $3 - 15 = -12$ → $(\lambda+6)(\lambda-2)$; det $3 + 2 = 5$ → $(-4 \pm \sqrt{-4})/2 = -2 \pm i$. Correct.
- Eigenvector equations: λ = −3: $(-1+3)a_1 + 2a_2 = 2a_1 + 2a_2 = 0$; λ = −1: $0a_1 + 2a_2 = 0$; λ = −6: $5a_1 + 3a_2 = 0$ (both rows); λ = 2: $-3a_1 + 3a_2 = 0$ and $5a_1 - 5a_2 = 0$. Correct.
- Spiral direction: $A(1, 0)^T = (-1, 2)$, positive $y$-velocity on the positive $x$-axis → counterclockwise. Correct.
- Dominance example: $t = 10$ gives $e^{-10}$ vs $e^{-30}$ (p. 8). Correct.
- Plot: the four parametric curves are exactly $c_1(1,-1)e^{-3s} + c_2(1,0)e^{-s}$ with $(c_1, c_2) = (1,1), (-1,-1), (1,-1), (-1,1)$. Checked with SciPy `solve_ivp` (rtol 1e-11) from $s = -0.6$ to $s = 3$: maximum deviation 3e-12, so each is a true trajectory. Along them $x + y = c_2e^{-s}$ never changes sign, so no curve crosses the dashed eigenline $y = -x$, as it must not. At the window edge the slopes are about −0.87 and −1.13 (parallel to (1, −1) to within the accuracy the caption claims); near the origin $y/x \to 0$ (coming in along the $x$-axis). Caption correct. The start $s = -0.6$ puts the curves outside the window (e.g. (7.87, −6.05)); they enter it on the edge, fine. Label placement not checked in a browser (`content:check` does that).
- Worked example (a): triangular, eigenvalues 1, 2, both positive → nodal source, unstable. Correct.
- (b): $\lambda^2 - 1 = 0$, λ = ±1; λ = 1 eigenvector (1, 1) outgoing, λ = −1 eigenvector (1, −1) incoming → saddle. Correct.
- (c): trace −2, det $1 - (4)(-1) = 5$, $\lambda^2 + 2\lambda + 5 = 0$, $\lambda = -1 \pm 2i$ → spiral sink; $A(1, 0)^T = (-1, -1)$, negative $y$-velocity on the positive $x$-axis → clockwise. Correct (NumPy agrees).
- Originality of the worked example: three new matrices, not the lecture's (no shared entries pattern beyond (a) being triangular like the lecture's first case, and of the opposite type). Not a disguised copy.
- Quiz 1: answer 0 (saddle). Correct; explanation correct (for every solution not on the incoming line).
- Quiz 2: answer 0 ($e^{-t}$). Correct; "along $\vec\alpha_2$" assumes $c_2 \ne 0$, which the question implies (info only).
- Quiz 3: answer 0 (spiral sink). Correct; explanation correct.
- Flashcards: all three correct. Card 2 ("same-sign real eigenvalues: node") holds for distinct eigenvalues; repeated ones (star or defective node) are still nodes, so acceptable.
- Frontmatter summary: every statement matches the page and is correct (including the dominance rule, unlike the Summary bullet, finding 1).
- Calcs file: `shown` strings occur on the page. Coverage is thin: `spiral-direction` checks only the first component (−1), not the 2 that decides counterclockwise; `saddle-eigvec` checks only the first row; `spiral-real-part` checks −4/2 but not the imaginary part; nothing checks the nodal-sink eigenvectors, λ = 2 with (1, 1), worked example (a) and (b), the determinant 5 in (c), or the (−1, −1) velocity that decides "clockwise". All of these are correct (above), but the file would not catch a later edit to them (info). `ex-c` cites `reading1` p. 15 although page-own (`origin: page-own` set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: why sketch (p. 1) → competition model (pp. 1–2) → nodal sink: eigenvalues, eigenvectors, solution (pp. 2–4) → four easy solutions (pp. 5–6) → continuity (pp. 6–7) → dominance (pp. 7–9) → names node / nodal sink, interpretation (p. 9) → nodal source, stability terms (pp. 9–11) → saddle (pp. 11–14) → spiral sink, conic argument, direction of turning (pp. 14–17). Same order as MIT.
- Left out (minor): the explicit parametric form $x = c_1e^{-3t} + c_2e^{-t}$, $y = -c_1e^{-3t}$ (p. 4); that for λ = −3 the second equation is 0 = 0 and "that is not what usually happens" (p. 3); the dominance analysis for the source done explicitly (p. 10; the page compresses it to "reversed arrows", which is the correct conclusion); the "fine points" of the saddle picture left to the problem set (p. 13); that the general complex-case solution is $c_1$ times one such real solution plus $c_2$ times another, all looking alike (p. 16); the degenerate conic (pair of lines, pp. 16–17); and Mattuck's remark that computing the complex eigenvector would not help to sketch anyway (p. 15). None is essential.
- Added: the graph and the worked example (page-own).
- `prerequisites: [repeated-and-complex-eigenvalues]` and the inline link `/courses/18-03/repeated-and-complex-eigenvalues`: the page exists (commit d22070a).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("the eigenvector gives the line, the sign of the eigenvalue the direction", "parallel, not on it", "mountain pass", "a model of what not to do", "peace") are brief, cited and acceptable. The state names and the "Buddhist governor" framing are not reused.
- The worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 28 ("Matrix methods for inhomogeneous systems."): matches the Lecture 28 title in `_course.json`. The draft page for Lecture 28 (`content/year-2/18.03/variation-of-parameters-systems.mdx`, untracked) has this page as its prerequisite and treats inhomogeneous systems with fundamental matrices, consistent with the claim. The Lecture 28 transcript itself was not read (the claim rests on the OCW title).
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. Error: the summary now says that the term with the larger eigenvalue wins as t → ∞ and the one with the smaller eigenvalue as t → −∞. This holds for sinks, sources and saddles alike.
2. Info:
   - The 18.02 remark now says the equations are parametric as in 18.02 but describe a new kind of curve.
   - The saddle's runaway spending is limited to the meaningful part of the picture, along (1, 1).
   - The calcs file adds the (1, 1) eigenvector and both velocity checks behind "counterclockwise" and "clockwise".

The letter clashes come from the lecture and are left as they are. Status set to `reviewed`.
