---
page: content/year-5/8.962/conserved-momenta-riemann-tensor.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/2b5174a8dcad7bd8c2a296931ef443b3_JWSdeg4jkoY.pdf (read: Lecture 10 transcript, local text with PDF page markers, pp. 1-22)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-10-spacetime-curvature/ (not opened; the transcript is the only cited source, as instructed)
  - Lecture 11 transcript (read, for the leadsTo)
  - Lecture 14 transcript (read, for the leadsTo)
verdict: pass-with-notes
---

# Review: Conserved momenta, the Newtonian limit and the Riemann tensor

The lecture has no slides; every equation was written on the board and is reconstructed from Hughes's words, so all citations are to transcript pages (PDF page numbers, the PDF has no printed footer). Every `at=` page number was checked against the page markers and is correct. The physics of every `<Formula>` was checked independently (Carroll's conventions). No errors were found.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Curvature from parallel transport round a loop", para 2 | "if I'm a one-dimensional being living on the surface of this thing, that's a straight line" (p. 13) | "a straight line for a two-dimensional being on the sphere" | The correction is right, but AGENTS.md rule 4 asks for a brief bracketed note when the page differs from the lecture because of a slip, e.g. "(Hughes says 'one-dimensional')". |
| 2 | warning | "What the Riemann tensor does", para 1 | Precession of the equinoxes from "the action of tides from the Earth and the moon on a planet like the Earth" (p. 20) | "the tides of the Sun and Moon on the Earth's bulge" | Physics on the page is right (lunisolar torque on the equatorial bulge). Add a short bracket noting the lecture's wording. |
| 3 | info | Commutator paragraph | "the commutator of partial derivatives acting upon a four-vector" (p. 19) | Commutator of covariant derivatives | Correct on the page (the commutator of partials vanishes). Optionally note the slip in brackets, as for #1 and #2. |
| 4 | info | "Curvature from parallel transport", para 2 | Rotation equals angle sum minus 180° on a 2D manifold that "may have to be" of constant curvature, "a surface, a plane, or a hyperbola" (p. 13) | "For a surface of constant curvature, Hughes says, the vector turns by the angle sum minus 180°" | Attribution is fair and the hedge is Hughes's. Optionally add that by Gauss-Bonnet the rule holds for any geodesic triangle on any surface (the rotation is the integral of the Gaussian curvature over the triangle), so the restriction is unnecessary. |
| 5 | info | Opening paragraph | The transcript speaks of "an uncomfortable couple of weeks", spring break and isolation (p. 1, p. 20) but never names the pandemic or the month | "given in March 2020 as MIT was about to close for the pandemic" | Historically correct context (Spring 2020, the lecture before spring break), but it is outside the transcript. Acceptable; no change needed. |
| 6 | info | Newtonian limit, last paragraph | Einstein's papers used "this spacetime" for the perihelion of Mercury (p. 12) | "using a spacetime like this one for the perihelion of Mercury" | Attributed as Hughes's recollection, fine. Physics aside: a metric linear in Φ is not enough for the full perihelion shift (g_00 is needed to order Φ²), so "like this one" is the right hedge. No change needed. |

## Arithmetic and answer checks
- Momentum form: p^α = m u^α with dλ = dτ/m gives p^α = dx^α/dλ and dp^α/dλ + Γ^α_βγ p^β p^γ = 0. Correct.
- Lowered index: p^α∇_α p_β = p^α∂_α p_β − Γ^γ_αβ p_γ p^α = 0, and p^α∂_α = m d/dτ, so m dp_β/dτ = Γ_γαβ p^γ p^α = Γ_γβα p^α p^γ. Expanding Γ_γβα = ½(∂_β g_γα + ∂_α g_γβ − ∂_γ g_βα), the last two terms cancel against the symmetric p^α p^γ, leaving ½ ∂_β g_αγ p^α p^γ. Correct, and the explanation (minus sign of the lower-index Christoffel term, metric moved through ∇) matches pp. 4-5.
- Killing proof: m d(C^β p_β)/dτ = p^α∇_α(C^β p_β) = C^β p^α∇_α p_β + p^α p^β ∇_α C_β; first term zero by the geodesic equation, second zero by symmetric/antisymmetric split plus Killing's equation ∇_(α C_β) = 0. Correct.
- Weak-field Christoffel: Γ^i_00 = ½ g^{iα}(2∂_0 g_α0 − ∂_α g_00) = −½ g^{ij} ∂_j g_00 with g^{ij} = δ^{ij}/(1 − 2Φ) and ∂_j g_00 = −2∂_jΦ, so Γ^i_00 = ∂_iΦ/(1 − 2Φ) ≈ ∂_iΦ. Correct (calcs entry gamma-i00 passes).
- Newtonian limit: m dp^i/dτ = −Γ^i_00 (p^0)² ≈ −m²∂_iΦ, so dp^i/dτ = −m∂_iΦ. Correct. The page's bracket about the dropped m matches p. 11 (the student's question, "There was an m and an m squared here"). The slip is not repeated.
- Loop sign: verified independently by integrating the transport equation dV/ds = −Γ_σ V numerically round a small square (side 10⁻³) for a random non-abelian 2×2 connection (scratch script, not in the repo): first along x^σ, then x^λ, then back, δV/ε² = (1.10101, 0.01907) against −R V = (1.10087, 0.01923), with R = ∂_σΓ_λ − ∂_λΓ_σ + Γ_σΓ_λ − Γ_λΓ_σ (matrix form of the page's R^α_μσλ). So δV^α = −R^α_μσλ V^μ δx^σ δx^λ is right for the stated orientation, including the sign of the quadratic terms. The page correctly marks this sign as its own working (the transcript does not fix it). The calcs entry loop-holonomy-sign only tests the abelian (derivative) part; a non-abelian check like the one above would also cover the ΓΓ terms (optional).
- Riemann definition matches Carroll (3.113) with ρσμν → αμσλ. Commutators: [∇_μ,∇_ν]V^ρ = R^ρ_σμν V^σ and [∇_μ,∇_ν]p_σ = −R^λ_σμν p_λ (torsion-free). Correct.
- n²(n² − 1)/12: n = 1 → 0, n = 2 → 4·3/12 = 1, n = 4 → 16·15/12 = 20; 4⁴ = 256. Correct.
- Earth example: GM/(Rc²) = 3.986e14/(6.371e6 × 8.98755e16) = 6.961e-10; square 4.85e-19 ≈ 5e-19; GM/R² = 9.820 m/s². Sign of −c²∂_rΦ = −GM/R² correct for Φ = −GM/(rc²). Correct.
- Holonomy example: 60 + 90 + 90 − 180 = 60°; area (1/6)(2πa²) = πa²/3, divided by a² gives π/3 = 60°. Correct.
- Sphere Riemann: R^θ_φθφ = ∂_θ(−sinθ cosθ) − 0 + 0 − Γ^θ_φφ Γ^φ_θφ = (sin²θ − cos²θ) + cos²θ = sin²θ. R_θφθφ = a² sin²θ, det g = a⁴ sin²θ, ratio 1/a². Correct. Plot of sin²θ on [0, π] and its caption correct.
- Quiz 1 (answer 1, p_φ conserved): correct, explanation right. Quiz 2 (90°): correct. Quiz 3 (1 and 20): correct. Quiz 4 (−m∂_iΦ): correct; the −m² distractor is Hughes's slip, fine.
- Flashcards: all five checked, correct.
- calc:test for this page: 14 passed (run with the worktree's .venv, `-k conserved-momenta-riemann`).

## Coverage and order
- Order follows the lecture: opening remarks; recap of geodesics and the 75% remark; momentum form and the m → 0 limit; lowered-index form and conserved p_β; Killing-vector proof; energy −p_t and asymptotic flatness; weak-field metric and Newtonian limit with the m/m² correction; preview of the two derivations of the field equations and the Jerusalem anecdote; curvature by holonomy (flat triangle, sphere triangle); the parallelogram calculation; Riemann tensor, tensor character, commutator, Schutz sign remark; curvature coupling and tides; component count; preview of Lecture 11.
- Left out (minor, acceptable): the remark that an equation with right-hand side proportional to u has a non-affine parameter (p. 3); the mention that a variation of the Killing calculation is on the next problem set (pp. 7-8); the Wikipedia/MathWorld pointer for holonomy (p. 14); the n = 3 case, which Hughes also skips (p. 21).
- Added, marked or clearly the page's own: three worked examples, the Gauss-curvature interpretation 1/a², the explicit one-form commutator with indices, the explicit loop sign (flagged as the page's own working), the remark that the non-tensorial parts cancel (stated by Hughes on p. 19).

## Licensing
- The transcript carries no "All rights reserved" or "Courtesy of" notice (grep checked); no figures reused; the plot is generated from a formula.
- Wording is a paraphrase throughout; the only quotations are short ("The end is near", "Nein nein nein!"). No OpenStax or LibreTexts material.
- Worked examples are original (Earth, 60° triangle). The sphere Riemann component is the standard textbook calculation (also in Carroll), not taken from MIT; written in the page's own words. Fine.

## Notes
- leadsTo Lecture 11: verified. L11 works through the symmetries giving n²(n² − 1)/12, defines Ricci tensor and scalar by contraction, derives the Bianchi identity and the divergence-free Einstein tensor.
- leadsTo Lecture 14: verified. L14 solves the linearized field equations, finds h̄_00 = −4Φ_N and recovers this metric ("a metric that I quoted in a previous lecture ... here it is. This is the Newtonian limit"), so Φ is the Newtonian potential.
- Cosmology callout: constant-curvature spatial sections, closed universe as a three-sphere with curvature set by k/a², angle sums of triangles, and CMB angular sizes as a geometry test are correct and fairly stated. That 8.286 discusses the CMB angular-size test was not checked in this review (uncertain, but plausible from the 8.286 CMB lectures).
- No em dashes in the page (count 0).
- Symbols file was not reviewed here.

## Resolution (2026-11-19, by the page author)

- Findings 1 and 2: bracketed notes now record Hughes's slips ("one-dimensional being", p. 13; "the Earth and the moon", p. 20).
- Finding 3: a bracketed note records "partial derivatives" for covariant ones (p. 19).
- Finding 4: the angle-excess rule now adds that by Gauss–Bonnet it holds for a geodesic triangle on any surface.
- Finding 5: the opening now says only that teaching was about to be disrupted, naming the pandemic as context stated in the next lecture.
- Finding 8: the callout no longer claims that 8.286 discusses the CMB angular-size test; it states the idea in general terms.
- Findings 6 and 7: no change.
