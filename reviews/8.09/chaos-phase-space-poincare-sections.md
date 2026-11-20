---
page: content/year-4/8.09/chaos-phase-space-poincare-sections.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: extracted text of the whole chapter, plus page images at 110 dpi of printed pp. 142-148 and 152 for every equation checked; pp. 149-151 read from the text and the 80 dpi images)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (link checked: HTTP 200; resource page, not compared further)
verdict: pass-with-notes
---

# Review: Introduction to chaos: phase space, fixed points and Poincaré sections

Compared with Stewart's typed 8.09 notes, Chapter 7: chapter opening (pp. 142-143) and Section 7.1 (7.1.1-7.1.4, pp. 143-152), plus Sections 7.2, 7.4.1 and 7.6 for the forward links. Printed page = PDF page + 141, checked on the page footers. All 13 `<Formula>` citations, all numbers, the quiz and the flashcards were checked. No errors found; seven findings below are warnings or info.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "What chaos means": Formula "Exponential separation of nearby trajectories"; also the flashcard and the Summary | p. 142: $\lvert\delta(t)\rvert \propto \delta_0 e^{\lambda t}$ (proportional) | $\lvert\delta(t)\rvert \approx \lvert\delta_0\rvert e^{\lambda t}$ | Either write $\propto$ as the notes do, or keep $\approx$ (it is the usual form, and the worked example needs it) and add a short bracket such as "(the notes write ∝; we take the constant as 1)". |
| 2 | warning | "Fixed points and attractors", basin-of-attraction paragraph | p. 147: with finite q the basins are diagonal strips; Fig. 7.4 (q = 5) shows two trajectories spiralling into θ = 0, one after a single pass over the top | "a pendulum started with enough speed goes over the top a few times before it is caught by one of them (p. 147)" | The physics is right, but the notes do not say "a few times", and the citation implies they do. Write "goes over the top one or more times" and mark it as the page's own explanation, or remove "(p. 147)" from that clause. |
| 3 | warning | Worked example "Dimensionless numbers for a real pendulum", step "Unit of time" | (no counterpart) | "a small free swing ($\omega = 1$ in these units)" | On this page $\omega$ is the angular velocity $\dot\theta$ (eq. 7.9). Here it means the natural angular frequency, so the reader sees one symbol with two meanings. Write "(natural angular frequency 1 in these units)". |
| 4 | warning | Plot 3 (linear driven oscillator), domain/range | n/a | `domain={[-2.5, 2.5]}` for θ; caption "for 0 ≤ t ≤ 40" | The trajectory starts at θ(0) = 2B·cos 0 + 0.7457 cos(−0.3029) = 2.712 (ω(0) = −0.200) and stays outside θ ≤ 2.5 until t ≈ 0.37, so its start is cut off and the drawn curve seems to enter from the edge. Widen the θ domain to about [−3, 3] or use B = 1.5. |
| 5 | warning | End of "The linear driven oscillator and limit cycles" | p. 149: "An attractor that is a closed orbit rather than a single point is called a limit cycle." | "An attractor that is a closed orbit rather than a point is a **limit cycle**." | Almost word for word. It is a one-line definition, but rephrase it, e.g. "When the attractor is a closed loop instead of a single point, it is called a limit cycle." |
| 6 | info | "What chaos means", aperiodic bullet; "Bifurcation diagrams", last paragraph; condition 1 | p. 143 topological-mixing sentence; p. 152 "Other parameter choices also lead to qualitatively similar bifurcation plots, with quantitatively different windows…"; p. 147 "For linear systems we already know the solutions, which are exponential or oscillating and hence not chaotic" | The three page sentences keep the notes' sentence structure closely ("points starting in any open region of phase space eventually spread to overlap any other region…"; "Other parameter choices give qualitatively similar diagrams with different windows…"; "Linear equations have exponential or oscillating solutions, which are known and not chaotic") | Acceptable as standard wording; consider reordering or rephrasing them a little more. |
| 7 | info | "Fixed points and attractors", undamped pendulum paragraph | p. 147: the top can be reached only "if E = 0 exactly" (E is never defined in the notes, so the zero of energy is unclear) | Defines $E = \frac12\omega^2 - \cos\theta$ and says "exactly $E = 1$" | The page's version is right for its own E, and it calls E "our label". A bracket such as "(the notes, with energy measured from the top, write E = 0)" would help a reader comparing the two. Optional. |
| 8 | info | eq. (7.16) paragraph | p. 148: amplitude "exhibits resonant behavior at ω_D = 1" | "the familiar resonance near ω_D = 1" | The page is more accurate: the maximum of $a/\sqrt{(1-\omega_D^2)^2+\omega_D^2/q^2}$ is at $\omega_D=\sqrt{1-1/(2q^2)}$. This correction is silent; under writing rule 4 it could get a brief bracket. Optional. |
| 9 | info | Basin of attraction definition; fixed-point types | p. 147 calls the *neighbourhood* whose trajectories converge "the basin of attraction"; p. 146 Fig. 7.3 caption calls the top points saddles while the p. 147 text calls them "unstable" | Set of all starting points that flow to the attractor (the standard definition); the upright points are "saddles" | Both are fine and agree with the Fig. 7.3 caption and standard usage. No change needed. |
| 10 | info | eq. (7.3) text | p. 144: "A cos(ω_D t) is the driving force" | "a periodic driving torque" | Torque is the correct word for the term in (7.3). No change needed. |

## Formula citations (each checked on the page image)
- p. 142 (Fig. 7.1 and text), exponential separation: on p. 142, correct place; notation difference in finding 1.
- eq. (7.1), (7.2), p. 143: correct.
- eq. (7.3), p. 144: $ml^2\ddot\theta + ml^2\gamma\dot\theta + mgl\sin\theta = A\cos(\omega_D t)$, matches.
- eqs. (7.4)-(7.7) quoted in the text: $a = A/(mgl)$; $(l/g)\ddot\theta + (\gamma l/g)\dot\theta + \sin\theta = a\cos\omega_D t$; $t' = \sqrt{g/l}\,t$, $\omega_D' = \sqrt{l/g}\,\omega_D$; $1/q = \sqrt{l/g}\,\gamma$: all match p. 144.
- eq. (7.8), (7.9), p. 144: match.
- eq. (7.10), (7.11), p. 145: match. The page merges the fluid line into its text and writes $d\mathcal V/dt$ for $\dot{\mathcal V}$, which is fine.
- eq. (7.12), p. 146: matches term for term.
- eq. (7.13), p. 146 (quoted in the text): matches.
- eq. (7.14), p. 146: matches.
- eq. (7.15), p. 148: matches.
- eq. (7.16), p. 148: matches, including $e^{-t/(2q)}$, $\sqrt{1-1/(4q^2)}$, the amplitude denominator, and $\tan\delta = \omega_D/(q - q\omega_D^2)$. The page renames δ to ψ and says so, which is good.
- Prose page citations (pp. 142, 143, 145, 146-147, 147, 147-148, 148, 149, 149-150, 150, 152) all point to the right printed page.

## Arithmetic and answer checks
- Forecast horizon: ln(10⁴)/0.5 = 9.2103/0.5 = 18.42 ✓; ln(10⁷)/0.5 = 16.118/0.5 = 32.24 → 32.2 ✓; ln(1000)/0.5 = 13.82 ✓; ln 10/0.5 = 4.61 ✓.
- Plot 1: `-6 + 0.5*t/log(10)` (mathjs `log` = natural log) is log₁₀ of 10⁻⁶e^{0.5t} ✓; crosses −2 at t = 18.42 and t = 32.24 ✓; "shifts the line down by 3" ✓.
- Real-pendulum example: √(0.50/9.81) = 0.22576 s ✓; 2π × 0.22576 = 1.4185 s ✓; 1/q = 0.18061 ✓, q = 5.537 → 5.5 ✓; ω_D' = 0.4515 → 0.45 ✓.
- Volume e-folding: q · √(l/g) = 1/γ = 1.25 s ✓; $e^{-t/q}$ follows from (7.11) with constant divergence (and agrees with the notes' §7.6, λ₁+λ₂+λ₃ = −1/q) ✓.
- Plot 2: E = 0, 1, 2 curves ω = ±√(2(E + cos θ)); separatrix √(2(1+cos θ)) = 2|cos(θ/2)| ✓; fixed points (0,0) centre and (±π, 0) saddles ✓; all curves fit in ±3.2 (max √6 = 2.449) ✓.
- Plot 3 (q = 3, ω_D = 0.6, a = 0.5): amplitude 0.5/√(0.4096 + 0.04) = 0.74569 ✓; ψ = atan(0.6/1.92) = 0.30288 ✓; ω amplitude 0.6 × 0.74569 = 0.44741 ✓; transient frequency √(35/36) = 0.98601 ✓; ω(s) expression is the exact derivative of θ(s) ✓. Independent check: integrated θ̈ + θ̇/3 + θ = 0.5 cos 0.6t with SciPy from the curve's own starting point; it agrees with the plotted expressions at t = 5, 20, 40 to 2×10⁻⁵ ✓. Range issue in finding 4.
- Quiz 1: answer index 1 (18.4) ✓. Quiz 2: −1/q ✓. Quiz 3: index 1 ✓ (the reason is the Poincaré–Bendixson theorem, notes §7.4.1, p. 175: "there is no chaos in 2 dimensions"). Quiz 4: index 1 ✓. All explanations are correct.
- Flashcards: all five are correct and agree with the notes.
- Calcs file: `pytest tests/calc -k chaos-phase` gives 26 passed. Its entries cover every number on the page.

## Coverage and order
- The page follows the notes' order: chapter-opening definition of chaos (pp. 142-143, before the "7.1" heading but part of the same material) → 7.1.1 (first-order form, Hamilton example, existence and uniqueness, the damped driven pendulum made dimensionless) → 7.1.2 (no crossings, phase-space volume, conservative and dissipative, eq. 7.12) → eq. 7.13 / Fig. 7.3 and 7.1.3 (fixed points, attractor, basins, conditions for chaos, linear driven oscillator, Fig. 7.5, limit cycle) → 7.1.4 (projections, Poincaré section, Fig. 7.6 values, bifurcation map and its table).
- Nothing in 7.1 is left out. Small omissions that need no change: Fig. 7.4's q = 5, and the remark that the bifurcation diagram shows "a change in the fixed points of the system".
- Additions (all marked as the page's own or harmless): the two worked examples, the e^{−t/q} volume factor, the inverted-pendulum aside, and the three generated plots.
- "The notes defer the reason to Section 7.4" is correct (the notes say "later"; §7.4.1 gives it).
- The table values (1.0; 1.07; 1.15-1.28; 1.35) and the Poincaré values (0.9, 1.07, 1.19, 1.35; q = 2, ω_D = 2/3, 30 cycles) were checked against the page image of p. 152 and the text of p. 150 ✓.

## Licensing
- The chapter has no "All rights reserved" notice (grep of the full text; the pages read show none).
- The page reproduces neither of the Abbasi Mathematica figures (Figs. 7.6 and 7.7). It credits their origin in a bracket and draws no Poincaré section or bifurcation diagram. The numbers in the bifurcation table are facts quoted with a citation. ✓
- The three plots are generated from formulas. Plot 2 shows the same system as the notes' own Fig. 7.3, but it is computed afresh and is not a redraw. ✓
- No OpenStax or LibreTexts material. Paraphrase is generally good; near-verbatim sentences are in findings 5 and 6.
- Both worked examples are original (own numbers; the notes have none).

## Forward links
- 7.2: correct. Section 7.2 (p. 153) opens by calling the period doubling of Fig. 7.7 "a particular example of a bifurcation", then studies saddle-node, transcritical and pitchfork bifurcations of one-variable systems ẋ = f(x, r).
- 7.6: fair. §7.6.1 gives the Lorenz equations (three first-order equations) and their strange attractor (D ≈ 2.05). §7.6.2 ties fractal dimension to Lyapunov exponents through the Kaplan–Yorke relation d_F = 1 + λ₁/|λ₂| (shown for a generic λ₁ > 0, λ₂ < 0, λ₃ = 0 example, not computed for Lorenz). "Tied to the exponent λ of this page" is a fair summary, since §7.6 defines the Lyapunov exponent as the largest separation rate.
- There is no cosmology callout. That is appropriate for this page.

## Notes
- Internal links `/courses/18-03/nonlinear-autonomous-systems` and `/courses/8-03/driven-oscillators-resonance`, and both prerequisites, exist in the worktree.
- No em dashes on the page.
- Verdict: pass-with-notes. There are no errors. Findings 1-5 are worth fixing before `status: reviewed`; 6-10 are optional.

## Resolution (2026-11-19, by the page author)

1. The formula for exponential separation now says in the text that the notes write a proportionality and that the page states it as an approximate equality, with δ₀ the starting separation.
2. "Goes over the top a few times" is now "goes over the top before it is caught", citing p. 147 and Fig. 7.4.
3. The real-pendulum example no longer uses ω for the natural frequency ("natural angular frequency 1 in these units").
4. Plot 3's θ domain widened to [−3, 3], so the start of the trajectory (θ = 2.71) is inside the graph.
5. The limit-cycle sentence is rewritten in our own structure.
6. The topological-mixing, linear-systems and "other parameter choices" sentences are rewritten in our own structure.
7. Added a bracket: the notes' "E = 0" measures energy from the top, where the page's E is 1.
8. Added a bracket: the notes put the resonance "at" ω_D = 1, exactly true only for very weak damping.
9–10. No change needed.
