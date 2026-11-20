---
page: content/year-4/8.09/lagrange-multipliers-constraint-forces.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: local copy, pdftotext text of printed pp. 23-28 plus rendered images of pp. 25, 26, 27 and 28, used for every garbled equation)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (not opened separately; it is the resource page of the same PDF)
  - 8.09 Chapter 2 notes, Section 2.5 "Symmetric Top with One Point Fixed" (local text, read) for the leadsTo
verdict: pass-with-notes
---

# Review: Lagrange multipliers: constraint forces, a mass leaving a sphere, a rolling hoop and a sliding wedge

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "A hoop rolling down a ramp", constraint | p. 26: "h = aθ̇ − ẋ = a" | h = aθ̇ − ẋ = 0, with a bracket saying the notes print "= a" | Verified: the constraint aθ̇ = ẋ means h = 0; "= a" is a slip. Page handles it correctly (AGENTS.md rule 4). No change needed. |
| 2 | info | "A hoop rolling down a ramp", eq. (1.100) | p. 27: "mẍ − mg sin φ = λ" (image checked: +λ) | "mẍ − mg sin φ = −λ", with a bracket explaining the sign | Verified independently: d/dt(∂L/∂ẋ) − ∂L/∂x = mẍ − mg sin φ and λ ∂h/∂ẋ = −λ. With the printed +λ, the second equation (ma²θ̈ = λa, θ̈ = ẍ/a, so mẍ = λ) would give mẍ − mg sin φ = mẍ, i.e. g sin φ = 0, a contradiction; the notes' results ẍ = (g/2) sin φ and λ = ½ mg sin φ (1.101) follow only from −λ. The page's correction is right. |
| 3 | warning | Symbol meanings (data/symbols.json), `t_1` | p. 26: t₁ is the time at which the mass leaves the sphere (eqs. 1.96-1.98) | The only meaning scoped to this page reads "The start and end times of the paths compared in Hamilton's principle", which fits eq. (1.90) but not t₁ in "Projectile after leaving" and the t₁ integral | Extend the page-scoped meaning of `t_1` to say "in eq. (1.90), the start time of the paths compared; for the sphere, the time the mass leaves it" (or split into two sentences). |
| 4 | info | Wedge, "Two checks" | p. 28: the α → 0 vanishing is stated inside the m₂ → ∞ case (fixed incline) | States as a separate check that as α → 0 both accelerations vanish | Also true for finite m₂ (λ₁ → m₁g, so ẍ₁, ẍ₂, ÿ₁ → 0); checked by hand. Fine as written. |
| 5 | info | Wedge, after eq. (1.102) | "the CM of m₁ and m₂ has no overall force acting on it" | "no horizontal force acts on the pair" | The page's wording is the more accurate one (only the horizontal sum m₁ẍ₁ + m₂ẍ₂ = 0 follows from (1)+(3)). Fine. |
| 6 | info | Symbol meanings, `\ell` | (not in MIT) | ℓ (ramp position of the bottom, rod length in the worked example) falls back on the general meaning "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one", with a notch unit remark | Optional: add a page-scoped meaning ("the length of the ramp, measured to its bottom; in the worked example, the length of the rod", unit m). |

## Arithmetic and answer checks
- Eq. (1.92): with L = (m/2)(ṙ² + r²θ̇²) − mgr cos θ, d/dt(∂L/∂ṙ) − ∂L/∂r = mr̈ − mrθ̇² + mg cos θ = λ ∂f/∂r = λ. Correct. Eq. (1.93): d/dt(mr²θ̇) − mgr sin θ = 0. Correct.
- On the sphere: −maθ̇² + mg cos θ = λ with θ̇² = (2g/a)(1 − cos θ) gives λ = mg(3 cos θ − 2) (1.94). Correct. arccos(2/3) = 48.19°. Plot curve 3cos(x°) − 2, point (48.19, 0), λ(0) = mg as the caption says; range [−2.2, 1.3] contains the curve (minimum −2 at 90°).
- Rescaled constraint: λ′ ∂f′/∂r = 2aλ′ at r = a, so 2aλ′ = λ. Correct.
- After leaving: z₁ = a cos θ₁ = 2a/3, x₁ = a sin θ₁ = √5 a/3 = 0.7454a, θ̇₁² = 2g/(3a), ż₁ = −a sin θ₁ θ̇₁, ẋ₁ = a cos θ₁ θ̇₁. Correct.
- Eq. (1.98): (2g/a)(1 − cos θ) = (4g/a) sin²(θ/2). t₁ = √(a/4g) ∫ dθ / sin(θ/2): from θ̇ = 2√(g/a) sin(θ/2). Correct. The integral diverges logarithmically as θ₀ → 0, so the page's remark that a particle exactly at rest on top stays there is right (page's own remark, consistent with an unstable equilibrium).
- Hoop: see row 2. ẍ = (g/2) sin φ, λ = ½ mg sin φ, θ̈ = (g/2a) sin φ. The generalized constraint force on x is λ ∂h/∂ẋ = −λ, i.e. up the slope, as the page says.
- Wedge (1.102): ∂f₁/∂x₁ = −tan α, ∂f₁/∂y₁ = 1, ∂f₁/∂x₂ = tan α, ∂f₁/∂y₂ = −1, ∂f₂/∂y₂ = 1; all four equations as on the page. From ÿ₁ = (ẍ₁ − ẍ₂) tan α: λ₁(1/m₁ + tan²α/m₁ + tan²α/m₂) = g, i.e. λ₁ = g/(1/(m₁cos²α) + tan²α/m₂) = m₁m₂g cos²α/(m₂ + m₁ sin²α). Common-denominator form verified by hand ((m₂ + m₁sin²α)/(m₁m₂cos²α)). Limits m₂ → ∞: λ₁ = m₁g cos²α, ẍ₁ = −g sin α cos α, ÿ₁ = −g sin²α. Correct.
- Worked example (page's own): L = (m/2)(ṙ² + r²θ̇²) + mgr cos θ; r equation mr̈ − mrθ̇² − mg cos θ = λ, so λ = −mℓθ̇² − mg cos θ; energy from θ = 90°: mℓθ̇² = 2mg cos θ, |λ| = 3mg cos θ. 3 × 0.20 × 9.81 = 5.886 → 5.89 N; weight 1.962 → 1.96 N. Correct.
- Quiz 1: answer index 1 (≈48°, cos θ = 2/3). Correct. Quiz 2: index 1 (½ g sin φ). Correct, explanation right. Quiz 3: index 2 (5.89 N). Correct; distractors 1.96 N (mg) and 3.92 N (2mg, the centripetal part alone) are sensible. Quiz 4: index 2. Correct.
- Flashcards: all five checked against the above; correct.
- calcs file: all 13 entries recomputed by `pytest tests/calc -k lagrange-multipliers-constraint` (13 passed). Entries checked by hand as well; `hoop-acceleration` is correctly marked `origin: slip`.

## Coverage and order
- Page follows pp. 23-28 in order: purpose of multipliers (p. 23), eqs. (1.85)-(1.90) (p. 24), potential interpretation and (1.91) with the friction remark (p. 25), sphere example (1.92)-(1.98) (pp. 25-26), hoop (1.99)-(1.101) (pp. 26-27), wedge (1.102)-(1.104) (pp. 27-28). Every numbered equation 1.85-1.104 is shown and every citation (equation number and printed page) is correct: 1.85-1.90 on p. 24, 1.91-1.94 on p. 25, 1.95-1.99 on p. 26, 1.100-1.101 on p. 27, 1.102-1.104 on p. 28 (checked on the rendered pages).
- Omitted: the notes' explicit unconstrained polar equations after leaving the sphere (p. 26, unnumbered); the page summarises them as "the equations lose their λ". Acceptable.
- Added: the worked example (pendulum rod tension) and the plot of λ/mg, both the page's own; the remark that a particle exactly at the top stays there.
- The argument after (1.87) (choose k multipliers to kill k brackets, the rest vanish by independence) follows the notes' own reasoning; fine.

## Licensing
- No "rights reserved" or "courtesy" notices in the Chapter 1 PDF. Figures 1.7, 1.11 and 1.12 are not reproduced; the only graphic is a generated plot from the page's formula.
- Text is paraphrased throughout; no sentence copied. Closest phrasing: quiz 4 explanation "The multiplier has a different meaning and units" versus the notes' "The meaning of λ′ is different, and it has different units": a short standard phrase, acceptable.
- No OpenStax or LibreTexts material. No em dashes in the page (count 0).

## Notes
- leadsTo (8.09 Section 2.5, symmetric top with one point fixed): Section 2.5 uses the Euler equations and then the Lagrangian in Euler angles with cyclic coordinates φ and ψ (ch2 notes, p. 45 onward); it does not use Lagrange multipliers. The page's wording ("treated with the Lagrangian methods of this chapter") is fair as written.
- No cosmology callout; none is needed here (no real cosmology connection in this section).
- Symbol meanings scoped to the page fit, except `t_1` (row 3) and the optional `\ell` (row 6). λ's meaning ("the multiplier of a single constraint; for f = r − a the radial force") also covers the hoop (friction) and the pendulum rod; acceptable. λ₁, λ₂ carry unit N, correct as they are forces here.

## Resolution (2026-11-19, by the page author)

- Warning (symbols): t₁ now has a meaning scoped to this page that covers both the start time in Hamilton's principle and the time the mass leaves the sphere.
- Info: ℓ now has a meaning scoped to this page (ramp length to its bottom; pendulum rod length in the worked example).
- Other info notes: no change. `npm run content:check` and `npm run calc:test` pass.
