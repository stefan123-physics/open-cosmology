---
page: content/year-3/8.05/one-d-spectrum-variational.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-2-wave-mechanics-cont/ (read through its transcript, below; the video was not compared)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/b1bb0aea6fead2705b9bcd1b192e2db7_lnZR0TVNh2k.pdf (read: Lecture 2 transcript, 23 pages, extracted with pdftotext page by page; printed footer pages 1–23 match the PDF page numbers, checked for pages 1, 5, 10, 15, 20, 23)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: Zwiebach, "Wave Mechanics", sections 3–5, eqs. (3.1)–(5.26), checked equation by equation)
verdict: pass-with-notes
---

# Review: The one-dimensional spectrum and the variational principle

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Delta-well paragraph after the formula: "By dimensional analysis the answer is always a number times the true value." | Transcript p. 23: "it typically is like that because of dimensional units". The argument holds when the potential supplies the only energy scale (here $m\alpha^2/\hbar^2$) and the trial family adds no dimensional constant. | "always". Not true in general: a potential with two scales (e.g. a finite square well, depth and width) gives a bound that is not a fixed multiple of the true energy. | "Here the only energy scale is $m\alpha^2/\hbar^2$, so by dimensional analysis any such bound is a number times the true value." |
| 2 | info | Blockquote in "Continuity of ψ and ψ′" | Notes (4.2): "Both ψ and ψ′ are continuous unless the potential has delta functions or hard walls in which cases ψ′ may have finite jumps." Transcript p. 9 says nearly the same. | "ψ and ψ′ are continuous, unless the potential has delta functions or hard walls, where ψ′ can have finite jumps" | One sentence, the statement of a rule, and cited, so acceptable; but it is near-verbatim. Either reword (e.g. "Only delta functions and hard walls let ψ′ jump; ψ itself is always continuous") or keep it as an explicit quotation. |
| 3 | info | Formula "Delta well: Gaussian trial", `at="eqs. (5.25), (5.26)"` | The closed form $F(\beta) = \beta^2\hbar^2/4m - \beta\alpha/\sqrt\pi$ is the last line of eq. (5.24); (5.25) is $E_{gs} \le \min_\beta(\dots)$; (5.26) is the minimum. | Cites (5.25), (5.26). | `at="eqs. (5.24)–(5.26)"` (the calcs file already cites (5.24) for `F-beta`). |
| 4 | info | "The same counting for an energy above a step on one side only gives a continuous, non-degenerate spectrum" | Notes case (b), Fig. 1: energy below the potential at $x \to -\infty$ and above it at $x \to +\infty$. | "above a step on one side only" | Clearer: "for an energy below the potential far to one side and above it far to the other". |
| 5 | info | Corollary to Theorem 3: "$\psi(-x) = c\,\psi(x)$ with $c$ real" | Transcript p. 6 and notes (3.20) get $c$ real by first choosing $\psi$ real (Theorem 2). | Says "with $c$ real" without the reason. | Add "(taking ψ real, by Theorem 2)", as the 8.04 page does. Note that $c^2 = 1$ follows from applying the relation twice even for complex $c$, so the conclusion is unaffected. |
| 6 | info | Calculus of variations paragraph, history | Transcript pp. 14–15 names Leibniz, Newton and Jacob Bernoulli as solvers. | Lists the same three. | Correct but not complete: from general knowledge (not checked against a source here), L'Hôpital and Johann Bernoulli himself also solved it, and the solutions were published in *Acta Eruditorum* in May 1697. Optionally write "solved by, among others, ...". |
| 7 | info | Delta-well example | Notes p. 20 head it "Example. (Griffiths)". | No mention of Griffiths. | Optional credit: "(an example the notes take from Griffiths)". Not a licensing issue: the page rewrites MIT's version. |
| 8 | info | Calculus-of-variations paragraph cites "transcript pp. 14–16" | Zwiebach announces the variational problem in the last lines of p. 13. | pp. 14–16 | Optional: "pp. 13–16". The substance (story, brachistochrone) is on pp. 14–16, so this is acceptable as is. |

All other citations were checked against the extracted text:
- Notes: (3.2), (3.3) rescaled $\mathcal E$, $\mathcal V$ and the equation $\psi'' + (\mathcal E - \mathcal V)\psi = 0$; (3.12) $\psi_r$, $\psi_{im}$ with $\frac12$ and $\frac1{2i}$; (3.19) $\psi_s$, $\psi_a$ with $\frac12$; (4.2) continuity rule; (5.13) $E_{gs} \le \langle\hat H\rangle_\psi = \int d\vec x\,\psi^*\hat H\psi$; (5.20) $F[\psi]$. Each is that equation and matches in content. The tilde for the notes' calligraphic letters is stated on the page and applied consistently. Writing $d^3x$ for the notes' $d\vec x$ is fine.
- Transcript: bound state (p. 1); rescaling (p. 2); Theorem 1 (pp. 2–3); Theorem 2 (pp. 3–4); its corollary (pp. 4–5); Theorem 3 (pp. 5–6); its corollary and the general-exam anecdote (pp. 6–7); non-bound state, normalization, localized superpositions (p. 7); continuity cases (pp. 8–9; the discussion begins at the foot of p. 7); counting argument (pp. 10–12); Theorem 4 and the square-well argument and homework (pp. 12–13); variational bound (pp. 16–18); unnormalized form (pp. 18–19); functional, infinite directions, saddles (pp. 19–20); delta well (pp. 21–23). All correct, no off-by-one errors.
- Theorem 1 sketch: the page's $(\psi_1\psi_2' - \psi_2\psi_1')' = 0$ is the negative of notes (3.6), which is equivalent. "Vanishes at infinity" uses bounded derivatives (notes, below (3.7)), which is fine.
- The page's "(Zwiebach recalls a qualifying-exam problem ...)" matches transcript p. 7 ("part two general exam at MIT", the doctoral qualifying exam).
- Node theorem: the page does not define "node". The notes' definition (p. 15) prints "ψ(x₀) = 0 and ψ′(x₀) = 0". That is evidently a typo for ψ′(x₀) ≠ 0 (both vanishing would force ψ ≡ 0), and the page does not repeat it.

## Arithmetic and answer checks
Recomputed by hand and with the repository's calc suite (`pytest tests/calc/test_calculations.py -k one-d-spectrum`: 11 passed):
- Gaussian norm: $\int e^{-\beta^2x^2}dx = \sqrt\pi/\beta$, correct.
- Kinetic term: $\int(\psi')^2 = \beta^4\int x^2e^{-\beta^2x^2} = \beta\sqrt\pi/2$; times $\hbar^2/2m$, divided by $\sqrt\pi/\beta$, gives $\beta^2\hbar^2/4m$. Potential term: $-\alpha\psi(0)^2\beta/\sqrt\pi = -\alpha\beta/\sqrt\pi$. So $F(\beta)$ is correct.
- $dF/d\beta = 0$ gives $\beta = 2m\alpha/(\sqrt\pi\hbar^2)$. Substituting: $m\alpha^2/\pi\hbar^2 - 2m\alpha^2/\pi\hbar^2 = -m\alpha^2/\pi\hbar^2 = \frac2\pi(-m\alpha^2/2\hbar^2)$. Correct. $2/\pi = 0.6366$, so "about 0.64" is right. The transcript (p. 22) drops the minus sign in "$E_{gs} \le m\alpha^2/\pi\hbar^2$". The page correctly has $-m\alpha^2/\pi\hbar^2$ and does not repeat the slip.
- Worked example (a): $\psi' = a - 2x$, $\int_0^a(a-2x)^2dx = a^3/3$; $\int_0^a x^2(a-x)^2dx = a^5/30$; $F = (\hbar^2/2m)(10/a^2) = 5\hbar^2/ma^2$. Correct. The boundary term $\psi\psi'$ vanishes at both walls, so integrating by parts is valid. As a cross-check, $-\psi'' = 2$ and $\int_0^a 2x(a-x)dx = a^3/3$ agree. $\pi^2/2 = 4.9348$; $5/4.9348 = 1.0132$, so "1.3% above" is correct.
- (b): $\hbar^2/(m_ea^2)$ for $a = 1$ nm is $1.2209 \times 10^{-20}$ J $= 0.07620$ eV. $5 \times 0.0762 = 0.381$ eV and $4.935 \times 0.0762 = 0.376$ eV are correct. The unrounded exact value, 0.37605 eV, matches the Lecture 1 page.
- Quiz 1 (answer 0): correct. The explanation is right, and $c^2 = 1$ holds.
- Quiz 2 (answer 0): correct (transcript pp. 8–9, notes (4.2)). Distractor "any discontinuity of V" is properly wrong (finite jumps leave ψ′ continuous).
- Quiz 3 (answer 0): correct (notes (5.20)). The explanation (normalized expansion) is correct.
- Quiz 4 (answer 0): correct. The explanation correctly notes that $0.64E_{gs} > E_{gs}$ because the energies are negative. The distractor $\frac\pi2E_{gs}$ would lie below $E_{gs}$ and could not be an upper bound.
- Flashcards: all three are correct. Card 3's "every eigenstate is a stationary point" matches transcript p. 20 and notes p. 21 item 3.
- `calcs/8.05/one-d-spectrum-variational.yaml`: every number on the page has an entry. The `F-beta` identity correctly uses $\psi(0)^2 = 1$; `two-over-pi` (0.6366 vs 0.64, tolerance 0.005) passes. Page-own entries cite `reading2` eq. (5.20) as their source; that is acceptable since the example applies $F[\psi]$.

## Coverage and order
- The page follows the lecture's order: bound state → rescaling → Theorems 1–3 with corollaries → non-bound states → continuity of ψ, ψ′ → counting argument → Theorem 4 → calculus of variations and history → variational bound and proof → unnormalized $F[\psi]$ → functional and saddles → delta-well example → closing remarks (excited states, attractive potentials). It ends where the lecture ends.
- Left out (minor, acceptable): the student questions on physical delta-function potentials (nucleus, pp. 9–10); the attribution of the counting argument to Shankar (p. 10); Leibniz's dates (9 and 16 June 1696) and the transcript's "one year" deadline (pp. 15). Leaving out the deadline is good, since from general knowledge the original deadline was six months, later extended. The audience question on degeneracy (p. 20) is folded into "degeneracy does no harm".
- Notes material not in the lecture and not on the page: Fig. 2 (spectrum types for a generic potential); the five-delta-function example (4.3)–(4.10), which Zwiebach points to for homework (p. 13); the remark that better trial functions give lower bounds. Leaving these out is acceptable for a lecture page. Optionally, one sentence could point to the five-delta example.
- Added: the worked example (parabola in an infinite well). It is a common textbook exercise but is in neither the lecture nor the notes, so it is original with respect to MIT.
- `leadsTo` 8.05 Lecture 3 matches the syllabus entry ("Wave mechanics (cont.) and the Stern–Gerlach experiment"). Notes p. 21 lists the excited-state and attractive-potential results as exercises, consistent with "more on the variational principle".
- Internal links: `/courses/8-04/shape-of-wavefunctions` (8.04 Lecture 12; covers no degeneracy, reality up to a phase, even/odd) and `/courses/8-04/delta-well-node-theorem-oscillator` (8.04 Lecture 14; has "The delta-function well" and "The node theorem" sections) both exist, and the 8.04 course slug is `8-04`. Both are apt. The prerequisites `wave-mechanics-eigenstates` and `delta-well-node-theorem-oscillator` are existing slugs.

## Licensing
- Neither the transcript nor the notes carries an "All rights reserved" or "Courtesy of" notice (grep on both extracted texts: 0 hits). Nothing needs `courtesy:`. The page has no images. The notes' Figures 1–6 are not reproduced.
- No OpenStax or LibreTexts material.
- No near-verbatim passages apart from the one-sentence continuity rule (finding 2). Everything else is paraphrased: the theorems, the counting argument, the history and the proof. Shared fragments are standard terminology ("trial wavefunction", "functional", "discrete, non-degenerate spectrum").
- No em dashes on the page (grep: 0).

## Notes
- **Brachistochrone history.** The transcript muddles it: on pp. 14–15 it correctly says Johann Bernoulli posed the problem in 1696. It then says "this question by Jacob Bernoulli ... to demonstrate ... that his older brother, Jacob Bernoulli ... was ... incompetent" (p. 15), where the first "Jacob" should be Johann. The page states the history correctly: Johann posed the 1696 challenge, and Leibniz, Newton and Jacob solved it. It does not repeat the slip. It omits the rivalry sentence entirely, so no bracketed correction is required. Newton's least-resistance problem (Principia, result stated without derivation) is described neutrally as "in a fluid". That is fine; the transcript's "viscous fluid" is loose, since Newton's model was a rare medium.
- The page's "saddle, with directions in which $F$ decreases" generalizes the transcript's "one direction in which you go down" (for the first excited state) correctly to higher states.
- No `Callout kind="cosmology"`. That is appropriate for this lecture.
- `npm run content:check`: 0 errors. The only warning for this page is the missing review file (which this file resolves).
- Verdict: no errors. Finding 1 should be fixed. The rest are optional.

## Resolution (2026-11-17, by the page author)

- Warning 1: the dimensional-analysis sentence is now limited to this example, where mα²/ħ² is the only energy scale.
- Info:
  - The continuity rule is reworded, not quoted.
  - The delta-well formula now cites eqs. (5.24)–(5.26).
  - The second counting case now reads "above the potential on one side but below it on the other".
  - The Theorem 3 corollary says c is real once ψ is taken real (Theorem 2).
  - The list of brachistochrone solvers now says "among others".
  - The delta-well example is credited to Griffiths, as in the notes.
- No change needed for the p. 13 announcement of the variational problem.
