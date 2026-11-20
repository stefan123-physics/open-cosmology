---
page: content/year-4/8.09/continuity-equation-vorticity.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: pdftotext text plus rendered images of printed pp. 109-112, every equation checked on the images)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the resource page of the same PDF)
  - content/year-4/8.286/expanding-sphere.mdx (read, for the forward link)
  - content/year-5/8.902/linear-perturbations.mdx (read, for the forward link)
verdict: pass-with-notes
---

# Review: The continuity equation and vorticity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Formula "Expanding the mass condition", `at="eqs. (6.24)–(6.25)"` | (6.24) is the displayed line `0 = δV dρ/dt + ρ dδV/dt = δV(dρ/dt + ρ∇·v)`; (6.25) is the next display, `dρ/dt + ρ∇·v = 0` (p. 110) | The Formula shows only the content of (6.24); (6.25) appears in the following inline sentence | Cite `eq. (6.24)` on the Formula and add "(eq. 6.25)" after the inline result, as is already done for (6.26) |
| 2 | info | Plot, marked point | (page's own example) | The point is fixed at (2, 0.3012) while the α slider moves the curve, so for any α ≠ 0.2 the point leaves the curve | Optional: say "for α = 0.2" next to the point (the caption already does), or tie the point to the curve |
| 3 | info | "Vorticity" section, paraphrase | "nowhere is the matter making up the fluid created or destroyed. If the density changes, then there must be an incoming or outgoing flux"; "(which becomes an inflow with the minus sign)" | "mass is nowhere made or destroyed: if the density somewhere changes, mass must have flowed in or out"; "the minus sign turns it into the inflow" | Acceptable rewording of short sentences; could be loosened further, not required |

No differences in physics, notation or equation numbering were found. Checked against the page images:
- (6.20) `∫_V dV ∇·v = ∮_∂V dS n̂·v = ∮_∂V dS·v`, p. 109: matches.
- (6.21) `dV/dt = ∮ v·dS = ∫ ∇·v dV`, p. 110: matches.
- (6.22) `dδV/dt = δV ∇·v`, p. 110: matches.
- (6.23) `dδm/dt = d(ρδV)/dt = 0`, p. 110: matches.
- (6.26) inline and (6.27) `∂ρ/∂t + ∇·(ρv) = 0`, p. 110: matches.
- (6.28) `∂/∂t ∫_V dV ρ = −∮_∂V dS n̂·(ρv)`, p. 111: matches.
- Vorticity `Ω = ∇×v`, unnumbered, p. 111: correct.
- (6.29) Stokes' theorem, p. 111: matches.
- Rotating-frame identity, unnumbered, p. 112 (setup begins at the foot of p. 111, so "pp. 111–112" is right): the notes write `ω∇·r − ω·∇r`; the page's `ω(∇·r) − (ω·∇)r = 3ω − ω` is the same with brackets made explicit. Correct.
- Incompressible (p. 110), irrotational (p. 111), "Ω/2 is the angular velocity of the fluid" (p. 112), uniform / `v_x(x)x̂` gives Ω = 0 (p. 111): all stated as in the notes.

## Arithmetic and answer checks
- Worked example 1: ∇·(αr) = 3α = 0.6 s⁻¹. With uniform ρ, the continuity equation gives ∂ρ/∂t = −3αρ, so ρ = ρ₀e^(−3αt); e^(−1.2) = 0.3012 ≈ 0.30. Correct. Uniform initial density stays uniform because ∇·v is uniform: correct.
- Plot point y = 0.3012 = e^(−1.2): correct. With α up to 0.5 and t ≤ 5 the curve stays within the range [0, 1.05].
- Worked example 2: rigid rotation v = ω×r, ∇×v = 2ω = 6 rad/s along the axis; ωr = 0.3 m/s; circulation 2π(0.1)(0.3) = 0.1885 m²/s; flux 6·π·0.01 = 0.1885 m²/s. Correct, and the two sides agree.
- Quiz 1: answer 1 (fractional rate of volume change) correct; explanation correct.
- Quiz 2: answer 0 correct; the distractor `∂ρ/∂t + ρ v·∇ρ = 0` is indeed wrong; explanation matches (6.25)-(6.27).
- Quiz 3: answer 1 (0.30) correct. Distractors: 0.67 = e^(−0.4) = 0.670 (as the explanation says, e^(−αt)); 0.55 ≈ e^(−0.6) = 0.549. Correct.
- Quiz 4: answer 2 (6 rad/s along ẑ) correct; Ω/2 = 3 rad/s.
- Flashcards: all five correct (shear flow v_x(y) has vorticity, v_x(x)x̂ has none; ∇×v′ = ∇×v − 2ω).
- Calcs file: every entry recomputed by hand. `continuity-expanded`: d/dx[(2+sin x)x²] = x² cos x + 2x(2+sin x), correct. `rotating-curl`: for ω×r = (−ωy, ωx, 0), ∂(ωx)/∂x − ∂(−ωy)/∂y = 2ω, correct. Values 0.6, 0.30, 0.30, 0.67, 0.3012, 6, 0.3, 0.188, 0.188 all correct. `npm run calc:test` was not run in this review (no build commands allowed); the `shown` strings were compared with the page text by eye and match.

## Coverage and order
- The page follows Section 6.2.1 in the notes' order: divergence theorem (6.20); swept volume and (6.21)-(6.22); incompressibility; mass conservation (6.23)-(6.25); (6.26)-(6.27) continuity equation; mass flux interpretation and integral form (6.28); vorticity; uniform/one-direction flow; Stokes (6.29); rotating fluid and shear flow pictures; irrotational; rotating frame and Ω/2. Nothing in 6.2.1 is left out.
- Additions: the two worked examples and the plot (page's own, clearly marked) and the cosmology callout. Section 6.2.2 onward is left for the second page, as stated in the intro.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notices on these pages (grep of the chapter text found none). The four figures of 6.2.1 (control volume, swept cylinder, inflowing cube, rotating and shear circles) are not reproduced or redrawn; the page describes the rotating and shear pictures in words only.
- Paraphrase: the text is rewritten throughout; a few short sentences stay close in structure (finding 3), within the "short phrases" allowance.
- Worked examples are original (the notes have no numerical examples in this section).
- No OpenStax or LibreTexts material.

## Notes
- Forward links checked:
  - 8.286 Lecture 6 (`expanding-sphere`): that page indeed states that the mass inside a shell is fixed while the volume grows as a³, so ρ = ρᵢ/a³. The callout's further step, dρ/dt = −3Hρ with H = ȧ/a giving ρ ∝ a⁻³, is correct and is presented as this page's own link, not attributed to Guth. Fair.
  - 8.902 Lecture 13 (`linear-perturbations`): that page starts from the continuity, Euler and Poisson equations (line 60 of the page). The claim is correct.
  - 8.09 Section 6.2 second page `euler-equation-fluid-conservation` does not exist yet; expected, as the caller said.
- Prerequisites `continuum-limit-fluid-variables` (8.09), `divergence-theorem` and `stokes-theorem` (18.02) exist. Internal link format `/courses/8-09/...` matches the course slug `8-09`.
- Notes' slips not repeated: "Stoke's theorem", "closed area" (for closed surface), "origianl", "provides a measures". The page uses the right words without comment, which is fine since none changes the physics.
- No em dashes in the page.
- Uncertain / not checked: whether `content:check` passes (symbols such as Ω, ω, δV, δm need page-scoped meanings); not run here.

## Resolution (2026-11-19, by the page author)

1. The Formula "Expanding the mass condition" now cites eq. (6.24) only, and "(eq. 6.25)" follows the inline result $d\rho/dt + \rho\nabla\cdot\vec v = 0$.
2. Plot point left as it is: the caption says it marks the value for α = 0.2.
3. Both sentences reworded further ("no mass is ever created or lost: any change of density at a point has to be paid for by mass carried in or out"; "with the minus sign the right side counts what enters").

Status set to reviewed.
