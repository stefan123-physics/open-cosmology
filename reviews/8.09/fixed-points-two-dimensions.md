---
page: content/year-4/8.09/fixed-points-two-dimensions.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: extracted text of Sections 7.1 (eq. 7.8), 7.3 and 7.4; page images at 80 dpi of printed pp. 166-173 for every equation, caption and fixed-point list checked)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (resource page; not compared further)
verdict: pass-with-notes
---

# Review: Fixed points in two dimensions: classification and conserved quantities

Compared with Stewart's typed 8.09 notes, Chapter 7, Section 7.3 (7.3.1 "Motion Near a Fixed Point" with "General Categorization" and "Analysis of a General 2-Dimensional System", and 7.3.2 "Systems with a conserved E"), printed pp. 164-173 (printed page = PDF page + 141, checked on the footers of the images). All 12 `<Formula>` citations, every number, the 3 plots, the 4 quiz questions and the 5 flashcards were checked. Calcs file passes (`pytest tests/calc -q -k fixed-points-two`: 22 passed). No errors found; four warnings and several info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Linear systems in the plane", **Two uncoupled flows**: "if $a = -1$ ... trajectories are straight rays ... All three are **stable nodes**." | Fig. 7.28 caption (p. 165): "Stable Node a = −1" | All three cases called stable nodes | At $a = -1$ the matrix is $M = -I$, which the page itself (following eq. 7.45, p. 167) calls a **star**. The page repeats the notes' loose label and so contradicts its own later definition. Write "the cases $a < -1$ and $-1 < a < 0$ are stable nodes; $a = -1$ is a stable star (see below)", or note that the notes call it a node. |
| 2 | warning | "How far to trust linearization": "Of these, only for a centre is the stability itself at stake"; Summary bullet 4; flashcard 4 ("Only for centres can the stability itself change") | p. 169: "This implies nonlinear terms may only affect the stability of centers." | Same claim, applied to all four borderline cases | The claim holds for stars and degenerate nodes, but not for non-isolated fixed points ($\Delta = 0$, a zero eigenvalue). Counter-example: $\dot x = x^2$, $\dot y = -y$ linearizes to $M = \operatorname{diag}(0, -1)$ (a line of Lyapunov-stable fixed points), but the origin of the full system is isolated and not Lyapunov stable (any $x_0 > 0$ runs away). Either restrict the statement ("of the cases with $\Delta > 0$, only for a centre...") or add that a zero eigenvalue ($\Delta = 0$) can also change stability, and mark that the notes' sentence overstates it. |
| 3 | warning | Frontmatter `summary`: "In two dimensions ∇·f = 0 is the same as having such an E" | p. 172: "the ∇·f = 0 definition of conservative is equivalent to having a conserved E" (but p. 171: Ė = 0 "is generally not equivalent to ∇·f = 0") | "is the same as" | Only one direction is true: ∇·f = 0 gives a conserved H, but a conserved E does not imply ∇·f = 0 (e.g. $\dot x = g\,\partial E/\partial y$, $\dot y = -g\,\partial E/\partial x$ with non-constant $g > 0$ conserves E with non-zero divergence). The body text ("means there is such an E") and flashcard 5 (equivalence with a *Hamiltonian* form) are correct; the summary also contradicts the page's own sentence "This is not the same as ∇·f = 0 in general". Change to "In two dimensions ∇·f = 0 guarantees such an E". |
| 4 | warning | Formula "The conserved function of a 2D divergence-free flow", cited "p. 172, eq. (7.50)" | (7.50): $H = \int^y f_x(x,y')\,dy' - \int^x f_y(x',y)\,dx'$ (running $y$), giving $\partial H/\partial y \in \{f_x, 2f_x\}$ | Second integral at $y_0$; exact Hamilton's equations | The change is correct (verified: with the page's H, $\partial_y H = f_x$ exactly and $\partial_x H = \int_{y_0}^y \partial_x f_x\,dy' - f_y(x,y_0) = -[f_y(x,y) - f_y(x,y_0)] - f_y(x,y_0) = -f_y$, using ∇·f = 0). The bracket after the formula discloses it, which is good. Optional: put "(corrected)" or "adapted from" in the `at=` text so the citation itself does not suggest the notes print this form. Note also the notes' own result is not quite "$f_x$ or $2f_x$" either: with a lower limit $x_0$ it is $2f_x(x,y) - f_x(x_0,y)$; the page's "Hamilton's equations up to a rescaling" paraphrase of the notes is fair as a description of what they claim. |
| 5 | info | Linear systems, definitions paragraph: "On the line of fixed points at $a = 0$, each point is Lyapunov stable ... but not attracting" | p. 166: "Picking one fixed point from Fig. 7.30, most trajectories will be Lyapunov stable but not attracting" (confused wording: it is the fixed point, not trajectories, that is Lyapunov stable) | Each point Lyapunov stable, not attracting | Verified correct: at $a = 0$, $\dot x = 0$, $\dot y = -y$, a trajectory from $(x_* + \delta x, \delta y)$ moves vertically to $(x_* + \delta x, 0)$, never farther than it started, and does not reach $(x_*, 0)$. The page's wording improves the notes'. The "conversely ... attracting without being Lyapunov stable" sentence matches p. 166. |
| 6 | info | "The trace–determinant diagram": "Every unstable fixed point with $\Delta > 0$ has $\tau > 0$" | p. 169: "all unstable fixed points have τ > 0, while all stable fixed points have τ < 0" | Adds "with $\Delta > 0$" | The page's qualifier is right (saddles are unstable for any τ). It silently tightens the notes; fine as is, or add "(the notes omit this condition)". |
| 7 | info | Rabbits and sheep, "the stable manifold of the saddle, a curve through the unstable node and the saddle" | p. 170: "A diagonal line passing through the unstable node and saddle point" | "a curve" | Fair improvement: at (1, 1) the stable eigenvector is $(\sqrt2, 1)$, slope $1/\sqrt2$, so the boundary is not the line $y = x$. No change needed. |
| 8 | info | Example after (7.53) | (7.55), p. 173, prints $\partial^2H/\partial a^2 = -a$ | $\partial^2H/\partial x^2 = -a$ | Another typo in the notes (∂a² for ∂x²); the page silently uses the correct form. Optionally mention it alongside the other flagged slips. |

### Slips flagged by the page (all verified against the page images)
- **det M in (7.42)**: p. 166 prints "Δ ≡ det(M) = ac − bd". For M of (7.38) it is ad − bc. Page's correction is right. (Calcs `eigen-formula` checks λ₊λ₋ = ad − bc.)
- **Captions of Figs. 7.36 and 7.38** (p. 168): "Stable spiral with α > 0" and "Unstable Spiral with α < 0"; the text of case 3 has α < 0 stable, α > 0 unstable. Page's note is right.
- **Rabbit fixed point** (p. 170): the bullet reads "x* = (2, 0) gives λ₊ = −1 and λ₋ = −3", while (7.49) and the closing sentence give (3, 0). Recomputed: at (3, 0), M = [[−3, −6], [0, −1]], eigenvalues −3 and −1; (2, 0) is not a fixed point ($\dot x = 2 \ne 0$). Page right.
- **Construction of H in (7.50)** (p. 172): verified as in row 4. Page right.

## Arithmetic and answer checks
- Citations: (7.37), (7.38) p. 164; (7.39), (7.40) p. 164 (text continues to p. 165); definitions pp. 165-166; (7.41)-(7.44) p. 166; (7.45) and the degenerate-node M p. 167; complex case and Figs. 7.36-7.38 p. 168; Δ-τ list pp. 168-169; trust paragraph and (7.46) p. 169; (7.47)-(7.49) and the fixed-point analysis p. 170; 7.3.2 opening and "no attracting fixed points" p. 171; theorem, (7.50)-(7.54) p. 172; (7.55), (7.56), Fig. 7.41 discussion p. 173. All correct. Every formula's content matches the image (apart from the disclosed corrections).
- Competition model Jacobian [[3 − 2x − 2y, −2x], [−y, 2 − x − 2y]]: correct. (0,0): diag(3, 2), unstable node. (0,2): [[−1, 0], [−2, −2]], τ = −3, Δ = 2, λ = −1, −2. (3,0): λ = −3, −1. (1,1): [[−1, −2], [−1, −1]], τ = −2, Δ = −1, λ = −1 ± √2 (0.414, −2.414): saddle. All correct.
- Pendulum worked example: notes' (7.8) without drive is θ̈ + θ̇/q + sin θ = 0, so the page's system is right. Bottom: τ = −1/q, Δ = 1; spiral iff q > 1/2. q = 2: λ = (−0.5 ± √(0.25 − 4))/2 = −0.25 ± 0.968i; decay e^(−t/4). Top: Δ = −1, λ = (−0.5 ± √4.25)/2 = 0.781, −1.281. All correct.
- Spiral plot: with θ(0) = 1, θ̇(0) = 0, θ = e^(−t/4)(cos ωt + (0.25/ω) sin ωt), ω = √15/4 = 0.96825, 0.25/ω = 0.25820; θ̇ = −(|λ|²/ω) e^(−t/4) sin ωt = −1.03280 e^(−t/4) sin ωt (|λ|² = Δ = 1). Correct. Dot at Δ = 1, τ = −1 (q = 1): τ² = 1 < 4, stable spiral region, as drawn.
- Double well: H = ½y² − ½x² + ¼x⁴; H(±1, 0) = −¼; separatrix y = ±x√(1 − x²/2), reaches ±√2 = ±1.41; H = −0.15 lies in (−¼, 0), so one closed curve per well; H = 0.3 reaches x = ±√(1 + √2.2) = ±1.58 (inside the domain ±2) and y_max = √1.1 = 1.05 (inside ±1.5). Correct.
- Example (7.51)-(7.56): H = y²/2 − ax²/2 + x³/3; H_xx = −a + 2x: −a at 0, a at x = a. Centre value H = −a³/6 < 0. "H < 0 near the centre bound, H > 0 unbound": correct; the qualifier "near the centre" is needed, since H < 0 also contains unbound orbits at x < 0 (e.g. the left curve of Fig. 7.41), and the page has it.
- Quiz 1: τ = 1, Δ = 2, τ² − 4Δ = −7, λ = ½ ± (√7/2)i: unstable spiral (choice 2). Correct.
- Quiz 2: q = 1/2 (choice 1). Correct.
- Quiz 3: centre (choice 2). Correct (see row 2 for the "only centres" wording in the explanation's companion flashcard; the quiz itself is fine since none of the other choices can change).
- Quiz 4: (1, 0) centre (choice 1); H_xx = 2, H_yy = 1. Correct.
- Flashcards 1, 3, 5 correct; flashcard 2 correct; flashcard 4 see row 2.

## Coverage and order
- The page follows the notes' order: general linear system, uncoupled example, stability definitions, eigenvalue problem, three cases, Δ-τ summary and diagram, reliability of linearization, general 2D system, rabbits and sheep, 7.3.2 definition, three results, example (7.51)-(7.56). Nothing left out; Figs. 7.27-7.41 are described in words, not reproduced.
- Additions: the damped-pendulum and double-well worked examples (own material, clearly separate from the notes' examples) and the Δ-τ plot (generated from τ² = 4Δ).
- `leadsTo` Section 7.4: verified in ch7 text. 7.4 introduces limit cycles as isolated closed trajectories (p. 173), 7.4.1 the Poincaré-Bendixson theorem ("a method for showing they exist"), 7.4.2 Hopf bifurcations, where "a spiral ... changes stability" and a limit cycle appears. The "why" is accurate.
- No cosmology callout on this page; none required.

## Licensing
- No figure is reproduced. The Δ-τ plot shows the same standard information as Fig. 7.39 but is drawn from a formula with the page's own labels and caption; acceptable. The double-well phase portrait is the page's own example (the notes' Fig. 7.41 uses ẍ = ax − x²).
- No "All rights reserved" or "Courtesy of" notice in Section 7.3 (none found in the extracted text).
- Paraphrase: prose is rewritten throughout. Closest passages are the stability definitions (standard definitional wording, acceptable) and "Nonlinear terms ... tip ... into a neighbouring region" (notes: "Nonlinear terms can tip a borderline case to a nearby case"); a short phrase, acceptable. The rabbits-and-sheep sentence "The rabbits breed faster (3 against 2 in the linear terms), while the sheep compete better (2 against 1 in the cross terms)" follows the notes' sentence structure and parentheses closely; consider rephrasing (info).
- No OpenStax or LibreTexts material.

## Notes
- Verdict pass-with-notes: no wrong physics or wrong numbers on the page; the four warnings (rows 1-4) are a self-contradiction inherited from Fig. 7.28, an overstatement inherited from p. 169, an overstated summary sentence, and an optional citation wording.
- Internal links resolve to existing pages (one-dimensional-bifurcations, 18.03 sketching-linear-systems and repeated-and-complex-eigenvalues); the 8.09 course slug is `8-09`.
- The "chapter on vibrations (Chapter 3)" reference matches `_course.json` (Chapter 3, "Vibrations and Oscillations").

## Resolution (2026-11-19, by the page author)

1. The uncoupled example now says that the notes call all three cases stable nodes, but a = −1 (M = −I) is a star; the other two are stable nodes.
2. The claim that only centres can change stability is restricted to the isolated cases (Δ > 0) in the body, flashcard 4 and the summary. The body adds the counter-example ẋ = x², ẏ = −y for non-isolated fixed points.
3. The frontmatter summary now says ∇·f = 0 "guarantees" such an E.
4. The `at=` of eq. (7.50) now reads "adapted (see below)".
5–8. No change needed. The rabbits-and-sheep sentence is rephrased in our own structure.
