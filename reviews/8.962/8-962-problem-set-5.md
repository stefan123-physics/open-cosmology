---
page: content/year-5/8.962/8-962-problem-set-5.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset05/ (read: PDF and pdftotext; page 2 rendered to check the light-bending figure)
  - 8.962 Lecture 6 transcript (read: PDF pp. 11-17)
  - 8.962 Lecture 8 transcript (read: PDF pp. 5-8, 13-14)
  - 8.962 Lecture 9 transcript (read: PDF pp. 15-16)
  - 8.962 Lecture 10 transcript (read: PDF pp. 2-3, 17-20)
  - 8.962 Lecture 11 transcript (read: PDF pp. 4-7, 15-17)
  - NASA Earth and Sun fact sheets (not fetched; values GM = 3.9860e14 and 1.32712e20 m^3/s^2, R_sun = 695 700 km are the standard fact-sheet values)
verdict: pass-with-notes
---

# Review: Problem Set 5 (8.962): orbits and tides near the Earth, light bending, parallel transport on a sphere, Killing vectors and curvature

## Blind solve

### My answers (written before opening the full page)
- 1(a): Γ^θ_φφ = −sinθ cosθ (exact; the factor 1+2Φ cancels because Φ depends on r only). Non-zero Γ^θ: Γ^θ_rθ = Γ^θ_θr = 1/r + Φ'/(1+2Φ) ≈ (1−Φ)/r, and Γ^θ_φφ. du^θ/dτ = −2Γ^θ_rθ u^r u^θ − Γ^θ_φφ (u^φ)² = 0 at θ = π/2, u^θ = 0.
- 1(b): Γ^r_tt = GM/(r²(1+2Φ)), Γ^r_φφ = −r(1+Φ)/(1+2Φ) at θ = π/2, so Ω² = GM/(R³(1+Φ)) from the metric as written; to leading order Ω = √(GM/R³) (Kepler's third law). Period for R = 6771 km: T = 2π√(R³/GM) = 92.41 min.
- 1(c): d²ξ^x/dt² = Ω²[(3cos²Ωt − 1)ξ^x + 3 sinΩt cosΩt ξ^y]; d²ξ^y/dt² = Ω²[3 sinΩt cosΩt ξ^x + (3 sin²Ωt − 1)ξ^y]; d²ξ^z/dt² = −Ω² ξ^z. Boxes: −Ω² and Ω²(3cos²Ωt − 1).
- 1(d): ξ^z = L cos Ωt, ξ^x = ξ^y = 0 for all t: the bag oscillates through the orbital plane and is back at the shuttle (ξ = 0) after a quarter orbit, t = π/(2Ω) = 23.10 min; not got rid of.
- 2: Δφ = 4GM/b, half (2GM/b) from the dt² part, half from the (1+2Φ) spatial part; at the Sun's edge 1.751 arcsec (Newtonian half 0.876″). Ray bends towards the Sun (p^y < 0 for a ray at y = +b).
- 3: A^θ = cos(2π cosθ0), A^φ = −sin(2π cosθ0)/sinθ0; magnitude a (unchanged). Angle for θ0 = 70°: 123.13°.
- 4(a): R_θφθφ = R_φθφθ = a² sin²θ, R_θφφθ = R_φθθφ = −a² sin²θ; 4 non-zero of 16; R = 2/a².
- 4(b): δÂ^θ = ±dΩ Â^φ, δÂ^φ = ∓dΩ Â^θ: rotation by dΩ, length unchanged.
- 4(c): cap solid angle 2π(1 − cosθ0); agrees with Problem 3 modulo 2π (2π cosθ0 one way = 2π(1−cosθ0) the other way); octant triangle: π/2 sr → 90°.
- 5: ∇_ν∇_μ ξ^α = R^α_μνβ ξ^β (Carroll-type convention, as on the page); contraction gives □ξ^α = −R^α_β ξ^β. Sphere test: ∇_θ ξ^φ = cotθ; ∇_θ∇_θ ξ^φ = −1 = R^φ_θθφ; □ξ^φ = −1/a² = −R^φ_φ.
- 6(a): R^t_xtx = −(φ'' + φ'² + φ'ψ') (and R^t_xxt = −R^t_xtx, R^x_txt = e^{2(φ+ψ)}(φ'' + φ'² + φ'ψ'), R^x_ttx = −R^x_txt).
- 6(b): φ' = ψ' = 1/(2u), φ'' = −1/(2u²): sum 0, flat. ℓ = 2√(u/g); ds² = −(gℓ/2)² dt² + dℓ²; t̄ = ℓ sinh(gt/2), x̄ = ℓ cosh(gt/2) (Rindler wedge). g = 2, u = 0.5, t = 1: ℓ = 1, x̄ = cosh 1 = 1.543.

### Comparison with the page (one line per answer id)
- p1a-gamma: page −sin θ cos θ; mine −sin θ cos θ. Agree.
- p1a-kinds: page "two kinds: rθ and φφ" (index 2); mine the same. Agree.
- p1b-omega: page √(GM/R³), with GM/(R³(1+GM/R)) listed as a mistake; mine √(GM/R³) leading order, exact Ω² = GM/(R³(1+Φ)) for the metric as written. Agree (and the page's warning that the 1/(1+Φ) cannot be trusted is right: an O(Φ²) term in g_tt changes Γ^r_tt by a fraction O(Φ)).
- p1b-period: page 92.4 min; mine 92.414 min. Agree.
- p1c-zz: page −Ω²; mine −Ω². Agree.
- p1c-xx: page Ω²(3cos²Ωt − 1); mine the same. Agree (off-diagonal and ξ^y equations on the page also match mine).
- p1d-xi: page L cos Ωt; mine L cos Ωt. Agree.
- p1d-time: page 23.1 min; mine 23.104 min. Agree.
- p1d-fate: page "swings through the shuttle's position twice in every orbit, first after a quarter orbit" (index 2); mine the same. Agree.
- p2-angle: page 4GM/b; mine 4GM/b. Agree.
- p2-share: page "half and half" (index 3); mine the same. Agree.
- p2-sun: page 1.75″; mine 1.7512″. Agree.
- p3-ath: page cos(2π cos θ₀); mine the same. Agree.
- p3-aph: page −sin(2π cos θ₀)/sin θ₀; mine the same. Agree.
- p3-mag: page a; mine a. Agree.
- p3-angle: page 123.1°; mine 123.127°. Agree.
- p4a-riemann: page a² sin²θ; mine the same. Agree.
- p4a-count: page 4; mine 4. Agree.
- p4a-ricci: page 2/a²; mine 2/a². Agree.
- p4c-cap: page 2π(1 − cos θ₀); mine the same. Agree.
- p4c-compare: page "agree: the two angles add to 2π, one turn in opposite senses" (index 1); mine the same. Agree.
- p4c-triangle: page 90°; mine 90°. Agree.
- p5-nabla: page cot θ; mine cot θ. Agree (also ∇_θ∇_θξ^φ = −1 = R^φ_θθφ and □ξ^φ = −1/a² agree).
- p6a-riemann: page −(φ″ + φ′² + φ′ψ′); mine the same. Agree.
- p6b-ell: page 2√(u/g); mine the same. Agree.
- p6b-xbar: page 1.543; mine cosh 1 = 1.5431. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 6(a), solution, "Check the result" | (not in MIT) | "If φ is constant every component is zero: then dt and e^{−ψ}dx are flat coordinates after a change of the variable x." | Differentials are not coordinates, and for a constant φ = c ≠ 0 the flat time is e^{c}t, not t. Write: "If φ is a constant c, every component is zero: t̄ = e^{c}t and x̄ = ∫e^{−ψ}dx are flat coordinates." |
| 2 | warning | Problem 6(b), solution, "Check the result" | (not in MIT) | "x = x₀, where g_tt = 0, is mapped to the corner of the wedge and its edges x̄ = ±t̄" | At any finite t the point x = x₀ (ℓ = 0) maps to the corner t̄ = x̄ = 0 only; the edges x̄ = ±t̄ are reached only in the limit ℓ → 0 with t → ±∞. Write: "x = x₀, where g_tt = 0, is mapped to the corner of the wedge; its edges x̄ = ±t̄ are reached only as t → ±∞, so they are a horizon of these coordinates." |
| 3 | info | Problem 1(a), statement | "du^θ/dt = 0 if u^θ = 0 and θ = π/2 at t = 0" | du^θ/dτ = 0 | Equivalent (dt/dτ ≠ 0); a bracket "(MIT writes d/dt; the two are equivalent here)" is optional. |
| 4 | info | Intro | Sheet points to Carroll 3.3, Schutz p. 171 and a MathWorld page | Neither textbook named; "one textbook" for the sign warning; MathWorld replaced by a sentence | Correct handling, as intended. |

## Arithmetic and answer checks
- Every number recomputed: T = 2π√(R³/GM) = 5544.9 s = 92.41 min; Ω = 1.1332e-3 rad/s; ΩR = 7.67 km/s; Φ_Earth = 6.55e-10; T/4 = 1386 s = 23.10 min; GM_sun/c² = 1476.6 m; 4GM/(c²b) = 8.49e-6 rad = 1.751″; Φ_sun edge = 2.12e-6; plot GM/b = 0.04 is 18 846 ≈ "about 19 000" times the solar value, slope −0.16; 2π cos 70° = 123.13°; octant 4π/8 = 90°; ℓ = 1, x̄ = cosh 1 = 1.543, t̄ = sinh 1 = 1.175. All correct.
- All Christoffel symbols of Problem 1 (spherical, exact in Φ) and the Cartesian first-order ones checked by hand: correct. R^i_ttj = ∂_i∂_jΦ with Φ = +GM/r gives the stretching tide: correct sign.
- Problem 4(b) loop formula and its sense checked numerically (script in the review scratch folder, loop.py): carrying (A^θ, A^φ) = (1, 0) and (0, 1) round a 10⁻³ loop at θ = 1 in the order +θ, +φ, −θ, −φ gives δA/h² = (0, 1.0003) and (−0.7083, 0), against the page's (0, 1) and (−sin²1 = −0.7081, 0). Correct sign and sense; consistent with Problem 3 (turn by 2π cos θ₀ towards −e_φ = turn by the cap's solid angle towards +e_φ).
- Problem 3 checked numerically: ODE integration at θ₀ = 70° gives (−0.54650, −0.89121), equal to the closed forms.
- Problem 2 page claim of a numerical null-geodesic check verified independently (bend.py): full metric gives p^y/p^x = −4GM/b × (1.0032, 1.0003) for GM/b = 10⁻³, 10⁻⁴; with the spatial factor set to 1, −2GM/b × the same factors. Claim true.
- Problem 5 proof checked line by line (cyclic sum, three-term identity, pair exchange, contraction on indices 1 and 3): correct in the page's convention, which matches MIT's commutator identities.
- Problem 6: Γ^t_tx = φ′, Γ^x_tt = φ′e^{2(φ+ψ)}, Γ^x_xx = −ψ′; R^t_xtx and R^x_txt and the lowered components correct; flatness and the transformation (cross terms cancel, cosh² − sinh² = 1) correct; the absolute-value form also works for g < 0 (ℓ negative, only ℓ² and (gℓ/2)² enter).
- Answer boxes: formula tolerance is 1e-6 relative (lib/answers.ts); every listed mistake differs from the answer over its vars (closest: πθ₀² vs 2π(1 − cos θ₀) at θ₀ = 0.3 differ by 0.75%, still rejected; the 1/(1+Φ) mistake differs by ≥ 4% over the ranges). All vars ranges keep expressions and mistakes finite. Number tolerances (1%) reject the natural wrong numbers (84.4 min with R = 6371 km, 0.876″, 236.9°, cosh 2 = 3.76). Every mistake hint is true of its formula.
- Choice boxes: right answers at positions 2, 2, 3, 1; lengths 59/83, 99/103, 78/90, 103/106 (answer/longest): never the longest, never the shortest. No distractor is true (p4c-compare's "θ₀ = π/3" option is numerically true for that circle but its "only" claim is false).
- calc:test for this file: 89 passed. content:check: 0 errors (only the "no review file yet" warning for this page).
- "Not in our calculation file" / "(in our calculation file)" claims: Problem 1(d) integration (not in file: true), Problem 2 (file checks the integral: true, p2-integral/p2-angle/p2-path), Problem 3 (file differentiates the solution: true, p3-first/second-equation), Problem 4(b) loop run (not in file: true; p4b-loop-size is a fact entry), Problem 6(a) (numerical derivatives for one family of functions: true, p6a-definition), Problem 6(b) (side x > x₀ with numerical derivatives: true, p6b-gtt/gxx/gtx). The Rindler-wedge remark has no calcs entry and claims none.

## Coverage and order
- All six MIT problems and all their parts, in MIT's order; Problem 5 split into (a)-(c) and Problem 4/others' extra boxes are marked as our additions in the intro and in each statement. MIT gives no points; the page says the points are its own.
- covers [8, 9, 10, 11] fits: parallel transport and Killing vectors (L8), geodesic equation (L9), momentum form, Newtonian limit and Riemann tensor (L10), Riemann symmetries, Ricci and geodesic deviation (L11). Lecture 6 is cited only for the Christoffel formula and the covariant-derivative rule, which are prerequisites; not adding 6 to covers is reasonable.
- Citations checked against the transcript PDFs (PDF page counts): L6 pp. 16-17 (Christoffel from the metric, formula on p. 17) and p. 12 (general rule, plus for upper, minus for lower); L8 pp. 6-7 (parallel transport) and p. 13 (Killing's equation named at the end of p. 13); L9 p. 16 (geodesic equation boxed); L10 pp. 2-3 (momentum form) and pp. 18-19 (loop result and Riemann tensor, p. 19); L11 pp. 4-5 (symmetries incl. three-term), pp. 6-7 (Ricci, trace on 1 and 3), pp. 15, 17 (geodesic deviation derived p. 15, named p. 17). All correct. Sheet pages p. 1 (Problem 1), p. 2 (Problem 2), p. 3 (Problems 3-6) correct.
- Lesson claims checked: the 8.962 Riemann lesson works R^θ_φθφ = sin²θ as an example (true); the geodesic-deviation lesson writes −∂_i∂_jΦ ξ^j with Φ = −GM/r (true); the parallel-transport lesson has a circle in the flat plane (true); the loop formula and its orientation match the lesson.

## Licensing
- The sheet has no "rights reserved" or "courtesy" notices. MIT's light-bending figure is not redrawn: the geometry is described in words and the Plot is generated from the page's own first-order path formula, which is correct (slope 0 on the left, −4GM/b on the right).
- Carroll and Schutz are not named, quoted or fetched; the MathWorld link is not used. MIT's historical note is paraphrased in the page's own words, attributed to the sheet, and its radar precision marked as a 2006 statement. No OpenStax or LibreTexts material. No em dashes. No `## Summary` giving answers.

## Notes
- Symbols: the 47 new entries (Γ sub tr, R sub txtx, T sub αβγ, x garbage, ∇ sub φ, φ″ and so on) have sensible names and spoken forms; every page-scoped meaning I read fits its uses on the page (Φ = +GM/r with the sign remark, α also the turning angle, κ, ℓ, x₀, u, n, v, L, b). Info only: three older entries reused here keep global names that fit only one use: `\Gamma_\phi\phi` is named "Christoffel symbol theta phi phi" but here also stands for Γ^r_φφ and Γ^ν_φφ, `\Gamma_\theta\phi` "Christoffel symbol phi theta phi", and `\nabla_\theta` "angular gradient" (here the covariant derivative along θ). The page-scoped meanings explain the other uses, so no change is needed for this page.
- Hints: none gives a result away. The second hint of 4(c) points firmly at the comparison choice, which is acceptable for a hint.
- Fidelity: same physics and order of parts as MIT, own wording throughout; the Φ sign convention (MIT's +GM/r, minus the lessons' Φ) and MIT's x = sin θ cos φ slip are stated in the intro.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1 fixed: the 6(a) check now reads "If φ is a constant c, every component is zero: t̄ = e^c t and x̄ = ∫e^{−ψ}dx are flat coordinates."
- Warning 2 fixed: the 6(b) check now says x = x₀ is mapped to the corner of the wedge, and its edges x̄ = ±t̄ are reached only as t → ±∞, so they are a horizon of these coordinates.
- Info items: no change needed.
- `status: reviewed`.
