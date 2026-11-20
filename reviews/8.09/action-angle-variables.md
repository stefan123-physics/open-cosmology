---
page: content/year-4/8.09/action-angle-variables.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: page images of printed pp. 83-87 for every equation and Figures 4.3-4.8; text layer for context)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_4/ (the OCW resource page of the same PDF; content read through the PDF above)
  - MIT 8.09 Chapter 5 notes, Section 5.2 (text layer, for the leadsTo claim) (read)
verdict: pass-with-notes
---

# Review: Action-angle variables: frequencies without solving the motion

Scope: notes Section 4.6 from its start (p. 83) up to, not including, "Multiple Variables" (p. 87), eqs. (4.171)-(4.191) and Figures 4.3-4.8.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, step "Numbers", last sentence | (page's own example) | "Swinging out to the horizontal makes the pendulum about 18% slower." | The period is 18.0% longer (2.369/2.007 = 1.180), but the frequency is 15.3% lower (0.422/0.498 = 0.847). "18% slower" reads as a frequency statement. Write "makes the period about 18% longer (the frequency about 15% lower)". |
| 2 | info | Section "The pendulum", description of Figure 4.6 | Fig. 4.6 shows J(Ẽ) with a discontinuity at Ẽ = 1, the curve dropping. | "J rises with energy but jumps at Ẽ = 1" | Correct as far as it goes; the jump is downward, to exactly half: J(1⁻) = 8√(2m²ga³)·√2 = 11.31√(2m²ga³), J(1⁺) = 5.657√(2m²ga³) (checked numerically). Saying "drops to half" would make the reason given (two halves of the loop versus one) quantitative. Optional. |
| 3 | info | Section "The action variable" | Notes do not say J is an area. | "For a libration it is the area enclosed by the orbit." | Correct addition (true for a closed orbit traversed clockwise in the (q, p) plane, which is the usual orientation); not in the notes but uncontroversial. No change needed. |
| 4 | info | `leadsTo` 5.2 | Section 5.2 takes the action-angle variables of the small-angle part H₀ (a harmonic oscillator, eq. (5.21)), treats −mgaθ⁴/24 as the perturbation, finds the secular frequency shift (5.27)-(5.28), and compares it with ν_full(E) "determined numerically ... in our study of action-angle variables" (Fig. 5.2). | "uses the pendulum's action-angle variables again, treating the finite-amplitude pendulum as a perturbed harmonic oscillator and finding how its frequency shifts with amplitude" | Fair. Strictly, 5.2 uses the action-angle variables of the small-angle oscillator (this page's eqs. (4.185)-(4.191)) and compares with this page's ν(Ẽ). Could say "the oscillator's action-angle variables from this section, and compares with the pendulum's ν(E)". Optional. |

No formula errors found. Every `<Formula>` matches the notes symbol for symbol:
- (4.171), (4.172) p. 84: correct page and form.
- (4.173), (4.174), (4.175), (4.177), (4.178), (4.179), (4.180) p. 85: correct. (4.176) ω = νt + β and (4.187) are quoted inline with their numbers, correctly.
- (4.181), (4.182), (4.183) (second line only, which is the notes' final form), (4.184), (4.185) p. 86: correct.
- (4.186), (4.188)-(4.189) (combined into one display, faithfully), (4.190), (4.191) p. 87: correct.

## Arithmetic and answer checks
Recomputed with SciPy:
- ∫₀^{π/2} dθ/√(cos θ) = 2.62206 (page 2.622). 2√(2·1/9.8) = 0.90351 s (page 0.9035). τ = 2.36905 s (page 2.369); cross-check 4√(a/g) K(m = 1/2) = 2.36905 s, the standard large-amplitude result. ν = 0.42211 Hz (page 0.422). ν₀ = √9.8/2π = 0.49823 Hz (page 0.498); τ₀ = 2.00709 s (page 2.007). τ/τ₀ = 1.1803 (page "about 18%", see finding 1).
- Derivation in the example: dJ/dE = (1/mga) dJ/dẼ; differentiating under the integral of (4.183) gives 4√(2m²ga³)/(mga) · ½∫dθ/√(Ẽ + cos θ); √(2m²ga³)/(mga) = √(2a/g), so τ = 2√(2a/g)∫₀^{θ₀}dθ/√(Ẽ + cos θ). Correct; the boundary term is zero (integrand vanishes at θ₀, dθ₀/dE finite for θ₀ = 90°). Mass drops out: correct.
- Ẽ = −cos 90° = 0: correct, a libration.
- Graph: p_θ/√(m²ga³) = √2·√(Ẽ + cos θ) = √(2(Ẽ + cos θ)), matching the curves' expressions. Ẽ = −0.5 loop spans |θ| ≤ π/3 with peak 1; Ẽ = 0.5 spans |θ| ≤ 2π/3, peak 1.73; separatrix peak 2, zero at ±π; Ẽ = 1.8 between 1.26 and 2.37. All fit the range ±3. Caption statements correct.
- Quiz 1 (answer index 1): correct; Δω = 1 per period, rate ν. Distractor "2π per period at ∂H/∂q" is wrong under these conventions, as intended.
- Quiz 2 (index 1): cos θ₀ = −0.5, θ₀ = 120°: correct. Distractor θ₀ = 60° corresponds to Ẽ = −0.5, wrong as intended.
- Quiz 3 (index 1): x₀ = √(2E/m)/Ω, p₀ = √(2mE), πx₀p₀ = 2πE/Ω; ν = Ω/2π. Correct; distractors wrong.
- Quiz 4 (index 1): correct; τ = dJ/dE diverges logarithmically at the separatrix (Fig. 4.7 caption says "logarithmic divergent").
- Flashcards: all five correct, including J of the libration (eq. (4.183)) and ν → √(g/a)/2π as Ẽ → −1 (Fig. 4.8 caption).
- calcs/8.09/action-angle-variables.yaml: entries match the page's numbers; the x₀ samples in `osc-action` are consistent with x₀ = √(2mE)/(mΩ) (checked all three). I did not run `npm run calc:test`.

## Coverage and order
- Follows the notes' order: two kinds of periodic motion (Figs. 4.3, 4.4 described in words), pendulum Hamiltonian and separatrix (Fig. 4.5), action variable, angle variable, Δω = 1 and ν = 1/τ, ν = ∂H/∂J, pendulum J for Ẽ > 1 and Ẽ < 1, ν = (∂J/∂E)⁻¹ and Figs. 4.6-4.8, small-angle limit and general oscillator (4.185)-(4.191). Nothing left out of pp. 83-87 apart from the notes' aside that the argument notation W(q, J) is "abused slightly" (immaterial).
- Description of Figs. 4.6-4.8 checked against the images: J discontinuous at Ẽ = 1 (yes, a drop; see finding 2); dJ/dE has a spike at Ẽ = 1, logarithmically divergent and integrable (yes); ν starts at √(g/a)/2π as Ẽ → −1, falls to zero at Ẽ = 1, rises for rotations (yes, Fig. 4.8 shows exactly this).
- Additions beyond the notes, all correct and marked as the page's own: J as enclosed area, the worked example, the link to Section 4.1 and to 8.06, the old-quantum-theory remark.
- Section 4.1 link: the page canonical-transformations-generating-functions has P = E/ω and Q = ωt + δ for the oscillator. Then J = 2πE/Ω = 2πP and the angle variable νt + β = (Ωt + δ)/2π = Q/2π (with β = δ/2π). Both claims correct.
- 8.06 link: content/year-3/8.06/adiabatic-invariants-classical-quantum.mdx exists; it has ∮p dx = 2πE/ω = 2πI as the adiabatic invariant and the Bohr-Sommerfeld rule. The page's description fits. "the action was set equal to a whole number of Planck constants" (J = nh) is the historical old-quantum-theory rule; the 8.06 page uses the refined 2πħ(n + ½). Not a conflict, since the page says "in the old quantum theory".
- Link to the next page `/courses/8-09/action-angle-variables-kepler` is expected (page being written). The course slug `8-09` matches `_course.json`.
- Prerequisite link to `hamilton-jacobi-equation` (Section 4.4) for W is correct.

## Licensing
- No courtesy or rights-reserved notices in these pages of the notes (confirmed visually on pp. 83-87; consistent with the course lead's check).
- The phase-portrait Plot is computed from eq. (4.181) and is not a copy of Fig. 4.5: different energies (Ẽ = −0.5, 0.5, 1.8 versus the figure's unspecified two loops and one upper rotation curve), both rotation directions, no arrows, no "Rotation"/"Libration/Oscilation" labels, domain exactly ±π, axes labelled. Figs. 4.3, 4.4, 4.6-4.8 are described in words only.
- Paraphrase: rewritten throughout. The closest passages ("For either kind of periodic motion, the notes replace the new momentum P = α₁ ... by another constant, the action variable"; "a definite integral over one period of the motion in phase space"; "the coordinate need not be an angle for the method to work") are short, standard phrasing and attributed to the notes. No verbatim paragraphs.
- Worked example (1 m pendulum released from 90°) is original; the notes have no numerical example here.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes in the page (checked). En dashes appear only in ranges (pp. 83–91, eqs. (4.188)–(4.189)), which is fine.
- Slips in the notes: none affecting the physics in pp. 83-87. Typos only ("Oscilation" in Fig. 4.5 and the Fig. 4.6 caption; "Often, we then J = J(E)" missing a verb on p. 85); the page does not repeat them.
- Attribution is honest: "the notes replace ...", "The notes evaluate this graphically", the remark that the notes write Ω to keep it apart from ω (p. 87 says exactly this).
- Symbols scoped to this page in data/symbols.json all fit how the page uses them: ω (angle variable, not an angular velocity, dimensionless), ν (Hz), τ (s, = dJ/dE), J (J s), W (J s), Ω (rad/s, √(g/a) for the pendulum), β, θ, θ₀ (with Ẽ = −cos θ₀), x (arc length aθ), x₀ = √(2mE)/(mΩ), p₀ = √(2mE), ν₀, p_θ (= ma²θ̇, kg m²/s), ω̇ (= ν), a, m, g, E, H, P, Q, p, q, α₁, d, t. Ẽ is covered by the general `\tilde` accent meaning ("its meaning is given where it is introduced"), which fits since the page defines Ẽ = E/(mga). The `\alpha` meaning scoped to this page ("A constant of the Hamilton-Jacobi solution") is acceptable; I am not certain whether the scanner sees a bare α on the page (only α₁ appears), so `content:check` will tell whether that scope is needed.
- I did not run `npm run content:check` or `npm run calc:test`; numbers were recomputed independently above.

## Resolution (2026-11-19, by the page author)

- Warning 1 ("18% slower"): now "the period about 18% longer (the frequency about 15% lower)"; both numbers are in the calcs file.
- Info 2: the description of Figure 4.6 now says J drops to exactly half its value as Ẽ crosses 1 (calcs entry `J-halves-at-separatrix`).
- Infos 3 and 4: left as they are (the area statement is correct; the 5.2 link is fair).
- Symbols: the α meaning stays only if content:check needs it (it reports no unused meaning).
- Status set to reviewed.
