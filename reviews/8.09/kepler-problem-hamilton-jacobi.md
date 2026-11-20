---
page: content/year-4/8.09/kepler-problem-hamilton-jacobi.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: Section 4.5 from page images of printed pp. 79-83; Sections 4.4 and 4.6 from the text layer)
  - MIT 8.09 Chapter 5 notes, Section 5.3 (read, text layer only, for the leadsTo claim)
  - content/year-5/Ferreras/rotation-curves.mdx and content/year-2/8.033/schwarzschild-orbits-perihelion.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: The Kepler problem, by Lagrange and by Hamilton-Jacobi

All 14 `<Formula>` blocks were compared with the page images. Each equation is the same as in the notes, and every equation number and printed page is right: (4.148)-(4.150) on p. 79, (4.151) on p. 79 with (4.152) on p. 80, (4.153)-(4.154) on p. 80, (4.155)-(4.157) on p. 81, (4.160)-(4.162) on p. 82, (4.163) and (4.166) on p. 82, (4.168)-(4.170) on p. 83. The equation numbers quoted in the text, (4.158), (4.159), (4.164), (4.165) and (4.167), are also right. I found no errors.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The effective potential", the sentence before eq. (4.153) | p. 80: "Writing the E-L equation for ṙ = dr/dt = …". This is a slip: the equation solved for ṙ is the energy equation (4.152), a first integral, not the Euler-Lagrange equation. | "Solving the energy equation for ṙ …". This is correct, but the page changes the notes without saying so. | AGENTS.md rule 4 asks for a short note in brackets, e.g. "(the notes call it the E-L equation; it is the energy equation (4.152))". |
| 2 | warning | Cosmology callout, first sentence | Not in the notes. The linked Ferreras page derives rotation curves from v_c² = GM(r)/r (force balance) and never uses an effective potential. | "The same effective-potential reasoning … underlies the rotation curves of Ferreras's dark-matter course: a circular orbit sits at the bottom of V_eff, and its speed measures the mass enclosed." | The physics is correct (dV_eff/dr = 0 gives mv²/r = dV/dr, i.e. v² = GM(r)/r for a spherical mass). But "underlies" suggests the linked page uses V_eff. Reword, e.g. "The circular orbit at the bottom of V_eff is the one rotation curves use: setting dV_eff/dr = 0 gives v² = GM(r)/r, so the speed measures the mass enclosed." |
| 3 | info | Orbit graph (second Plot), slider | Fig. 4.2 shows the circle, an ellipse, a parabola and a hyperbola, all with the same ℓ (they cross at ψ = ±90°). | The slider runs from ε = 0 to 0.6 at fixed p (fixed ℓ, which is right), so only circles and ellipses can be drawn. Above ε ≈ 0.465 the perigee p/(1 + ε) drops below 6371 km and the drawn orbit passes through the Earth. | Optional: cap the slider at 0.45, or say in the caption that larger ε would hit the Earth. The text already covers the parabola and the hyperbola, so nothing is missing. |
| 4 | info | leadsTo 4.6, "so bound orbits close" | Section 4.6 (pp. 89-90) shows ν_θ = ν_φ for any V(r) and ν_r = ν_θ = ν_φ for the Kepler potential. It relates the five constants to the orbital elements i, Ω, a, ε, ω. | "show that the radial and angular frequencies coincide (so bound orbits close), and relate the constants to the orbital elements" | Supported. "So bound orbits close" is the page's own inference, not stated in the notes, but it is correct. No change needed. |
| 5 | info | Text after eq. (4.155) | The notes do not give ψ′ a meaning. | "ψ′ the direction of closest approach" | Correct: r is smallest where cos(ψ − ψ′) = 1. This is a helpful addition. |

The remaining claims check out against the source:
- Section 4.4 (eqs. 4.144-4.147, the proof that a cyclic coordinate separates; Q₁ = ∂W/∂α₁ = t + β₁ in eq. 4.134) supports "by Section 4.4 a cyclic coordinate separates" and "the transformation equations of Section 4.4".
- Section 5.3 (eq. 5.29: perturbation −h/rⁿ with n ≥ 2; eq. 5.40: the GR effective potential; 42.98″/century for Mercury) supports the second leadsTo.
- "Section 4.6 turns them into action variables" matches eqs. (4.209)-(4.215).

## Arithmetic and answer checks
I recomputed every number by hand, independently of the calcs file:
- k = 3.986e14 × 1000 = 3.986e17 J m. ε = 7000/21000 = 1/3. p = 7000 × 4/3 = 9333 km.
- ℓ² = 1000 × 3.986e17 × 9.3333e6 = 3.7203e27, so ℓ = 6.099e13 kg m²/s (page: 6.10e13).
- Perigee: −k/r_p = −5.694e10 J; ℓ²/(2m r_p²) = 3.7203e27/9.8e16 = 3.796e10 J; sum −1.898e10 J.
- Apogee: −k/r_a = −2.847e10 J; ℓ²/(2m r_a²) = 3.7203e27/3.92e17 = 0.949e10 J; sum −1.898e10 J.
- 2Eℓ²/(mk²) = −1.4123e38/1.5888e35 = −0.8889, so ε = √0.1111 = 1/3.
- E = −k/(r_p + r_a) = −3.986e17/2.1e7 = −1.898e10 J. Calling r_p + r_a = 2a "the major axis" is correct.
- Reduced mass: m·M/(m + M) differs from 1000 kg by about 2e-19 relative. "Its own mass" is fine.
- V_eff graph: k = 3.986e17/(1e10 × 1e6) = 39.86 and ℓ²/2m = 1.8602e24/1e22 = 186.0. Both curves give −1.898 at r = 7 and r = 14. The minimum is at r = 2 × 186.0/39.86 = 9.333, with value −39.86²/(4 × 186.0) = −2.135. That minimum is the circle of radius p, so "the circular orbit with the same angular momentum" is right. Range −3 to 1: the curve leaves the top of the plot below r ≈ 4.5, which is acceptable.
- Orbit graph: at ε = 1/3 the extremes are x = 7.0 (ψ = 0, right) and x = −14.0 (ψ = π, left), matching the caption. At ε = 0.6 the apogee x = −23.3 fits the domain [−26, 12], and the semi-minor axis 11.7 fits the range ±15. The ε = 0 circle has radius 9.333.
- Quiz 1 (parabola, index 2), quiz 2 (index 1), quiz 3 (1/3, index 0) and quiz 4 (total angular momentum, index 1) are all correct. Their explanations are correct, and the distractors are clearly wrong.
- All four flashcards agree with eqs. (4.152), (4.155)-(4.156), (4.158)-(4.162) and (4.165)-(4.170).
- The calcs file covers every number on the page. The identity `kepler-problem-hamilton-jacobi` (that eqs. 4.155-4.156 solve the energy equation) is algebraically right. I did not run `npm run calc:test`.

## Coverage and order
- The page follows Section 4.5 in order:
  - reduction to one body, planar motion, cyclic ψ;
  - energy and V_eff (Fig. 4.1);
  - t(r) and ψ(r);
  - the Kepler conic and ε (Fig. 4.2);
  - Hamilton-Jacobi in the plane, (4.157)-(4.162);
  - Hamilton-Jacobi in spherical coordinates, (4.163)-(4.170).
- Nothing in the section is left out.
- Fig. 4.1 (four energy levels and their turning points) is conveyed in words: one turning point for E ≥ 0, two for E < 0, the minimum for the circle. The page's own V_eff graph shows the E < 0 case.
- Fig. 4.2 (four conics with the same ℓ, labelled with ε and E) is conveyed by the paragraph after eq. (4.156). The orbit slider at fixed p reproduces the "same ℓ" idea for ellipses only (see table, row 3).
- Additions: the worked example, the two graphs and the cosmology callout. All are clearly the page's own.

## Licensing
- Neither figure is redrawn. The page's graphs use their own numbers (an Earth satellite with perigee 7000 km and apogee 14000 km) and a different presentation: one energy line with turning points labelled perigee and apogee, and one ellipse with the Earth drawn to scale and a slider.
- I found no paragraph copied from the notes. Some short phrases are close but acceptable: "As an extended example", "Suppose instead that we did not know the plane of the orbit" (the notes have "as if we did not know the plane of the orbit"), and "the constants of the method are the physical constants of the orbit" (the notes have "the constants are physically relevant parameters").
- No rights-reserved or courtesy material (the course lead checked this; the section has no credits of its own). The page uses no OpenStax or LibreTexts material.
- No em dashes on the page (grep count 0). Attribution is to "the notes" throughout. The readings title "pp. 60–91" is right: the PDF has 33 pages, and the last one is the OCW terms page.

## Notes
These are notes on the symbol meanings scoped to this page in data/symbols.json. None is an error.
- `p` has the unit "m", but the meaning also covers the linear momentum p⃗ in L⃗ = r⃗ × p⃗, which is in kg m/s. One unit cannot fit both uses. Drop the unit, or say "m (as the semi-latus rectum)". The semi-latus rectum part fits the page, and so does the use of p for the conic's size in the worked example and orbit caption.
- `\alpha` (shared with hamilton-jacobi-equation) reads "in the examples, the energy" with unit J. On this page α appears only with subscripts, and α_ψ and α_θ are angular momenta. If the bare entry shows in "Symbols on this page", it is misleading here. Consider dropping this page from that meaning, if content:check allows it.
- Missing units:
  - `\dot\vec r`: m/s.
  - `\alpha_\psi`, `\alpha_\theta`, `\alpha_\varphi`: kg m²/s.
  - `\beta_1`: s, because α₁ = E here.
  - `\alpha_1`: J here.

  These are optional, since the rules ask for units only where they are clear.
- `\psi'` says "(the perihelion)". For the page's Earth satellite it is the perigee; "(the pericentre)" would cover both.
- All other scoped meanings fit how the page uses each symbol: ε, θ, φ, ψ, ℓ, k, m, r, L, M, R, E, V, V_eff, W, W_1, W_r, W_θ, W_φ, r_p, r_a, ψ₀, r₀, r′, ψ̇, ṙ, p_r, p_ψ, p_θ, p_φ, ℓ_z, E_min, β₂, z.
- Cosmology callout: both linked pages exist. The Ferreras page has slug `rotation-curves` in course slug `fundamentals-of-dark-matter`; the 8.033 page has slug `schwarzschild-orbits-perihelion` in course slug `8-033`.
  - "Speeds that stay flat far outside the visible stars were one of the first signs of dark matter" fits the Ferreras page, which calls them "the most direct evidence".
  - "In general relativity the effective potential gains an extra term, and orbits no longer close" is supported by the 8.033 page (effective potential, precession, 43″/century) and by 8.09 eq. (5.40).

## Resolution (2026-11-19, by the page author)

- Warning 1 (E-L slip, p. 80): the page now says in brackets that the notes speak of the Euler-Lagrange equation, while it is the energy equation that is solved for ṙ.
- Warning 2 (callout): reworded to "the same physics ... gives the rotation curves", and it now says that dV_eff/dr = 0 is the force balance v² = GM(r)/r used on the Ferreras page.
- Info (slider): ε now runs from 0 to 0.45, so the orbit stays outside the Earth.
- Info (symbols): `p` no longer carries a unit on this page; the bare α has its own meaning for this page (a Hamilton-Jacobi constant, with α₁ the energy and α_ψ, α_θ, α_φ angular momenta); ψ′ now says "pericentre: perigee for the satellite". Units for the α and β constants left out on purpose, since they differ between constants.
- Info ("so bound orbits close"): kept; it follows from the equal frequencies that Section 4.6 shows.
- Status set to reviewed.
