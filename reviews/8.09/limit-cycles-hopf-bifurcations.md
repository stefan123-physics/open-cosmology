---
page: content/year-4/8.09/limit-cycles-hopf-bifurcations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: local copy, text extraction plus rendered page images of printed pp. 173-182 for every equation and Fig. 7.61; Sections 7.1, 7.2, 7.5 and 7.6 text for the cross-references)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (not opened separately; same PDF)
verdict: pass-with-notes
---

# Review: Limit cycles, the Poincaré–Bendixson theorem and Hopf bifurcations

No errors found. Every formula, equation number and printed page checks out against the page images, and every number has been recomputed. The page's own additions are correct and marked as additions. There are two warnings, both about the torqued-pendulum bifurcation diagram (Fig. 7.61), and some minor notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Both at once", second bullet (saddle-node along τ = 1, large q) | p. 182: across the dashed line "the two fixed points are born, but the saddle persists". This is very likely a slip for "the cycle persists": the saddle is one of the two points just born. | "a saddle-node bifurcation creates the two fixed points while the cycle survives" | The page's version is the physically correct one, but it differs from the notes without saying so (AGENTS.md rule 4). Add a short bracket, e.g. "(the notes say 'the saddle persists'; the cycle is meant)". |
| 2 | warning | "Both at once", first sentences | p. 181–182: bistability "for q > 1"; "as q → 1 then τ_c → 1. For q ≤ 1 the limit cycle only exists for τ ≥ 1." Fig. 7.61 draws the three lines meeting at (q, τ) = (1, 1). | Repeats this as fact: "For q ≤ 1 the cycle exists only for τ ≥ 1". | The threshold q = 1 is a simplification. My numerical check (scipy, θ̈ + θ̇/q + sin θ = τ, started high above the cycle, integrated to t = 1500): at q = 0.95, τ = 0.99 the rotation persists while fixed points also exist, so coexistence begins below q = 1. τ_c(q) ≈ 0.985 (q = 1.0), 0.895 (1.2), 0.635 (2.0), 0.53 (2.5) agrees with the dot-dashed line of Fig. 7.61. From memory, and not checked here, Strogatz puts the meeting point near damping 1/q ≈ 1.19, i.e. q ≈ 0.84. Suggest "roughly q > 1 (the notes' sketch puts the meeting point at q = 1; a numerical solution puts it a little lower)", or drop the "q ≤ 1" sentence. |
| 3 | info | Van der Pol paragraph | p. 175: "first studied in 1927 in electric circuits and found to exhibit chaotic 'noise' when driven". The text does not describe the shape of the cycle. | "in the 1920s", "irregular 'noise'"; the cycle is "nearly a circle for small μ" and "slow phases alternating with fast jumps" for larger μ. | The description of the cycle's shape is read from Figs. 7.46–7.47 and is correct (relaxation oscillation). It is fine as it stands. The notes' word "chaotic" was softened to "irregular", which is reasonable. |
| 4 | info | Pitchfork in 2D | p. 177: the origin is "stable if μ < −2". | "a stable node for μ < −2" | This is correct and goes slightly beyond the notes: τ² − 4Δ = μ² + 4μ + 8 = (μ + 2)² + 4 > 0, so it is a node. No change needed. |
| 5 | info | "Small torque" | p. 180: "For τ ≤ 1 … there are two solutions". | Same ("two solutions in each turn"). | At τ = 1 the two points coincide (θ* = π/2). The wording could be "for τ < 1 (they merge at τ = 1)". Optional. |

## Arithmetic and answer checks
- Eq. (7.57) exact solution (the page's addition): with u = r², u̇ = 2u(1 − u), so r = [1 + (r₀⁻² − 1)e^(−2t)]^(−1/2). Correct. The plot constants are 99 for r₀ = 0.1 and −0.75 for r₀ = 2. Correct.
- Eq. (7.60): x ẋ + y ẏ = r² − (x² + y²)² − 4x²y² = r²(1 − r² − r² sin²2θ). Verified by hand. 4x²y² = r⁴ sin²2θ is correct.
- The ṙ = 0 curve r = 1/√(1 + sin²2θ) touches r = 1 at θ = 0, π/2, … and r = 1/√2 at π/4, …. Correct.
- "The only fixed point is the origin" (the page's addition): r²θ̇ = x ẏ − y ẋ = r² + 4xy³, so on the ṙ = 0 curve, θ̇ = 0 needs 1 + sin²2θ + 4 cos θ sin³θ = 0. Its minimum over θ is 0.2776 (at θ = 5.054), so there are no other fixed points. Verified numerically (calcs entry `annulus-no-other-fixed-point` agrees).
- Eq. (7.62): the Jacobian at the origin is [[μ+1, 1], [1, −1]], with trace μ and determinant −(μ+2). Correct. Eq. (7.63): (μ+2)x − x³/6 = 0 gives x* = ±√(6(μ+2)). Correct.
- Hopf plot (the page's addition): r² = μ/[1 + (μ/r₀² − 1)e^(−2μt)] solves ṙ = μr − r³. With μ = 0.5 and r₀ = 0.05, μ/r₀² − 1 = 199 and e^(−2μt) = e^(−s). Correct. √0.5 = 0.707, given as 0.71. Correct.
- Subcritical worked example and quiz 3, μ = −0.1: √0.6 = 0.7746; r² = 0.1127 and 0.8873; r = 0.336 and 0.942. ṙ/r at r = 0.6 is −0.1 + 0.36 − 0.1296 = +0.130. The stability assignments are right (inner cycle unstable, outer stable). Correct.
- Fold of cycles at μ = −1/4 (the page's addition): 1 + 4μ = 0. Correct. On the cycle-radius plot μ = r⁴ − r² has its minimum −0.25 at r = 0.7071, so the branch split between "stable" and "unstable" there is correct. Minor: the stable branch is drawn for s up to 1.05, which ends at μ = 0.113, while the axis runs to μ = 0.4. Extending the range to about s = 1.143 (μ = 0.400) would fill the axis. Optional.
- Torqued-pendulum worked example (τ = 0.8, q = 0.5): arcsin 0.8 = 0.9273 and π − 0.9273 = 2.2143. The Jacobian [[0, 1], [−cos θ*, −1/q]] gives Δ = cos θ* and trace −2. At θ* = 0.927: Δ = 0.6 and 4 − 2.4 = 1.6 > 0, a stable node. At θ* = 2.214: Δ = −0.6, a saddle. All correct.
- Eq. (7.67) is eq. (7.66) rewritten. Correct. The trapping band also checks: ω̇ < 0 for ω > q(τ + 1) and ω̇ > 0 for ω < q(τ − 1), which is > 0 when τ > 1.
- Quiz: answers 1, 1, 1, 1 are all correct, and the explanations are right. The flashcards are correct.
- Calcs: `pytest tests/calc -k limit-cycles-hopf`: 21 passed. Every number on the page has an entry.

## Formula citations (all checked against page images)
- (7.57) p. 174; (7.58) p. 175; (7.59) and (7.60) p. 176; (7.61) p. 176; (7.62) and (7.63) p. 177; (7.64) p. 178; (7.65) p. 179; (7.66) and (7.67) p. 180. All equation numbers, printed pages and the notation (ẋ = ω for van der Pol, 1/q damping, τ for torque) match.
- Narrative page citations also check out. Theorem and trapping-region use: p. 175. "No chaos in 2D": pp. 175–176. Saddle-node example: pp. 176–177. The "slide into one another" argument: p. 177. Hopf definition: pp. 177–178. Eigenvalues μ ± iω: p. 178. Subcritical figure captions 7.57–7.58: p. 179. Fig. 7.60: p. 181. Fig. 7.61 and its discussion: pp. 181–182.

## Coverage and order
- The page follows the notes' order. It covers the limit-cycle definition and stability types (Figs. 7.42–7.44), the centre contrast, (7.57), van der Pol, 7.4.1 (the theorem, how it is used, "no chaos in 2D", example (7.59)/(7.60)), 7.4.2 (the saddle-node (7.61) with Figs. 7.49–7.51, the crossing-curves argument, the pitchfork (7.62)/(7.63)), Hopf (eigenvalue Figs. 7.52–7.54, supercritical (7.64), subcritical (7.65)), and the torqued pendulum ((7.66), Fig. 7.59, (7.67), Fig. 7.60, Fig. 7.61 with its three bifurcations). Nothing is left out.
- Fig. 7.61's lines are assigned correctly (checked on the 110 dpi render): solid red at τ = 1 for q < 1 is the infinite-period bifurcation; dashed black at τ = 1 for q > 1 is the saddle-node; dot-dashed blue τ_c(q) is the homoclinic bifurcation.
- The marked additions are all verified correct: the exact radial solutions, the fold at μ = −1/4, the cylinder remark and the footnote slip. On the cylinder remark: a band of ω on the cylinder maps smoothly onto a planar annulus (for example (θ, ω) → e^ω(cos θ, sin θ)), so "the conclusion holds, but the strict planar theorem needs this adaptation" is accurate. On the footnote slip: footnote 2 (p. 180) points to Eq. (7.35), which is the bead on a rotating hoop (p. 162). The overdamped torqued pendulum is Eq. (7.36) (p. 163). The page is right.
- "The hysteresis example of Section 7.2" is Eq. (7.34) and Fig. 7.22, ẋ = rx + x³ − x⁵. Correct. "Promised in Section 7.1, for the condition n ≥ 3" matches p. 145 (line "n ≥ 3 (We will see why this is necessary later.)"). Correct.

## Licensing
- No MIT figure is reproduced. All three plots are computed from formulas. The trapping-annulus plot shows the same idea as Fig. 7.48 but is the page's own computation (the actual ṙ = 0 curve of eq. 7.59), not a redrawing.
- No "All rights reserved" or "Courtesy of" material is used. There is no OpenStax or LibreTexts material.
- Paraphrase: the prose is rewritten throughout. The closest passages are the theorem statement, which is near the notes' wording (acceptable for a theorem), "unable to cross itself, eventually runs out of room" (notes: "cannot self intersect and it eventually runs out of room to wander") and "trajectories have room to wander for ever" (notes: "'more room' to wander and can do so forever"). These are short phrases and acceptable; rewording them is optional.
- Originality of worked examples: the subcritical example at μ = −0.1 is original (the notes use μ = −0.2, only in a figure). The torqued-pendulum example's τ = 0.8 is the same value as the horizontal line in MIT's Fig. 7.59 (fixed points about 0.93 and 2.21 are drawn there). The q = 0.5 classification is the page's own work, so this is acceptable. Choosing another τ (e.g. 0.6) would make the example clearly independent. Info only.

## Forward links
- leadsTo 7.5: the notes open Section 7.5 (p. 182) with "There is no chaos with 2 variables … is there a simpler way?" and go on to 1D maps and the logistic map (7.69). Correct.
- leadsTo 7.6: Section 7.6.1 gives the Lorenz equations (7.86). For r > r_H trajectories are bounded, with no stable fixed points or cycles, which leaves "chaos with a strange attractor" (pp. 189–190). The page's "With three variables the Poincaré–Bendixson argument fails, and the Lorenz equations wander for ever on a strange attractor" is a fair summary. The link to P–B is the page's framing (the notes make it in 7.4.1), not wrong.
- There is no cosmology callout. None is needed: the page links only within 8.09.

## Notes
Numbered findings:
1. (warning) Fig. 7.61 saddle-node line: the notes say "the saddle persists" and the page says "the cycle survives". Add a bracket noting the notes' slip.
2. (warning) The q = 1 threshold for bistability is a simplification in the notes. Numerically, coexistence already occurs at q = 0.95 (τ = 0.99). Soften the claim "for q ≤ 1 the cycle exists only for τ ≥ 1".
3. (info) The van der Pol cycle description comes from the figures, not the text. It is correct, and "chaotic" was softened to "irregular".
4. (info) "Stable node" for μ < −2 is a correct refinement of the notes' "stable".
5. (info) At τ = 1 exactly the two fixed points merge. "Two solutions for τ ≤ 1" is inherited from the notes.
6. (info) On the cycle-radius plot the stable subcritical branch stops at μ ≈ 0.11. Extend s to about 1.143 so it reaches μ = 0.4.
7. (info) τ = 0.8 in the worked example is the same value MIT's Fig. 7.59 draws. Consider another value.
8. (info) A few short phrases ("runs out of room", "room to wander for ever") are close to the notes. Optional rewording.

## Resolution (2026-11-19, by the page author)

1. Added a bracket: on the saddle-node line the notes write "the saddle persists", evidently meaning the cycle.
2. The q = 1 threshold is now attributed to the notes' sketch and called approximate; the page notes that the fixed points and the cycle already coexist slightly below q = 1 (e.g. q = 0.95, τ = 0.99), so the three boundaries meet somewhat below q = 1.
3–5. No change needed.
6. The stable subcritical branch of the cycle-radius plot now runs to s = 1.143, i.e. to μ ≈ 0.4.
7. The worked example now uses τ = 0.6 (θ* = 0.644 and 2.498, cos θ* = ±0.8, τ_M² − 4Δ = 0.8), independent of the notes' Fig. 7.59. The calcs file is updated to match.
8. The two phrases ("runs out of room", "room to wander for ever") are reworded.
