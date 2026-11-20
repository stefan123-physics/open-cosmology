---
page: content/year-5/Ferreras/core-cusp-problem.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 3, Sections 3.3–3.4, printed pp. 62–69 (read, from the local fdm.pdf via pdftotext -layout and -raw; maths symbols garbled in the extraction and rebuilt from context; page images could not be rendered because pdftoppm is not installed). Chapter 2, p. 25 (Eq. 2.8 context) also read to check the book's anisotropy convention.
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: Cores or cusps? How baryons reshape dark matter halos

## Differences from the MIT source
(Source here = Ferreras, Chapter 3, Sections 3.3–3.4.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "The core–cusp problem", last paragraph | p. 66: "Towards the left of the plot, the contribution from stellar feedback is too weak …, and at high stellar mass ratio, the effect is small." No reason given for the high-mass end. | "With more, the deeper potential resists." | The reason is the page's own addition, not in the book. Either drop it or attribute it as a common interpretation (e.g. "usually attributed to the deeper potential well"). |
| 2 | info | Jeans equation paragraph, β | Ch. 2 (p. 25, Eq. 2.8): β = 1 − σ_t²/(2σ_r²); Ch. 3 (p. 67) gives β in the same form as far as the garbled extraction shows (uncertain). | β = 1 − σ_t²/(2σ_r²), but σ_t is never defined on the page (only in data/symbols.json via β). | Add "σ_t² = σ_θ² + σ_φ² the tangential dispersion" after the formula; Eq. 3.12 then follows at once. |
| 3 | info | Formula Eq. (3.10) | p. 67: written as … + dΦ/dr = 0. | Written with −dΦ/dr on the right. | Equivalent; fine. |
| 4 | info | Cored Einasto, "x = (r + r_c)/r_S" | p. 65: Eq. 3.3 with x defined from r, r_c and r_S; the operator is lost in the extraction (uncertain). | x = (r + r_c)/r_S. | Plausible (gives a finite central slope); confirm the sign against the printed page. |
| 5 | info | Lazar et al. compilation paragraph | p. 66: the same measurement on an NFW profile would give a slope around −1.5 at those radii (theoretically −1 at r = 0). | Not mentioned. | Optional: one clause, since it explains why "cuspy" in Fig. 3.4 means a value well below −1. (Value as extracted: "~ −1.5"; uncertain.) |
| 6 | info | Quiz 3, explanation | p. 68: anisotropy drops out at r₃ only if the dispersion profile is nearly flat (γ_σ ≈ 0). | "At special radii (where the stellar density slope is −3) its effect cancels." | Add "if the dispersion profile is flat". |
| 7 | info | Adiabatic contraction paragraph | Exercise 3.5 / Fig. 3.3 (p. 63–64): NFW halo, c = 5, Hernquist galaxy, f_d = 0.1, solved numerically. | Not used; the page has its own (original) isothermal-sphere example. | Fine. |

Formula checks (equation numbers and printed pages verified against the running page headers):
- Eq. (3.7), p. 63: r_i M_i(r_i) = r_f M_f(r_f) = r_f[M_g(r_f) + M_dm(r_f)], M_dm(r_f) = (1 − f_d) M_i(r_i). Matches. Conserved quantity r v(r) ∝ √(r M(r)) (p. 63) matches the page.
- Eq. (3.8), p. 65: ρ = ρ₀ / [1 + (r/r_c)²]. Matches.
- Eq. (3.9), p. 65: ρ = ρ₀ r_c³ / [(r + r_c)(r² + r_c²)], asymptotic slope −3. Matches.
- Eq. (3.10), p. 67: spherical Jeans equation. Matches (row 3).
- Eq. (3.11), p. 67: M(r) = −(r σ_r²/G)(γ⋆ + γ_σ + 2β), with γ⋆ = d ln ρ⋆/d ln r, γ_σ = d ln σ_r²/d ln r (definitions on p. 68). Matches; re-derived from Eq. 3.10.
- Eq. (3.12), p. 68: σ_tot² = σ_r² + σ_θ² + σ_φ² = (3 − 2β)σ_r². Matches (the book shows an intermediate step the page skips).
- Eq. (3.13), p. 68: M = (r/G)[σ_tot² − σ_r²(γ⋆ + γ_σ + 3)]. Re-derived by substituting 2βσ_r² = 3σ_r² − σ_tot² into 3.11: correct.
- Eq. (3.14), p. 68: M(r₃) = r₃σ_tot²/G ≈ 3r₃⟨σ²_LOS⟩/G (Wolf et al. 2010). Matches.

## Arithmetic and answer checks
- Adiabatic example: r_f = r_i² / [f_d R + (1 − f_d) r_i] follows from r_i·M_v r_i/R = r_f[f_d M_v + (1 − f_d)M_v r_i/R]. r_i = 10 kpc: 100/19.5 = 5.13 kpc (page ≈ 5.1, "half its radius"). r_i = 50 kpc: 2500/57.5 = 43.5 kpc (page ≈ 43). Correct. The assumption that all baryons lie inside 5 kpc is stated ("compact galaxy").
- Slope curves: pseudo-isothermal −2u²/(1+u²); Burkert −u/(1+u) − 2u²/(1+u²); NFW −(1+3x)/(1+x). All correct; caption limits (0 inside, −2 / −3 / −3 outside) correct.
- Dwarf example: r₃ = (4/3)(0.25) = 0.333 kpc (Wolf et al. r_{1/2} ≈ 4R_e/3); M = 3 × 0.333 × 81 / 4.30 × 10⁻⁶ = 1.88 × 10⁷ M☉. Page 1.9 × 10⁷. Correct. With 0.33 kpc: 1.86 × 10⁷, same rounding. M/L = 1.88 × 10⁷ / 10⁵ ≈ 190. Correct; half the light inside the 3D half-light radius is right by definition. G = 4.30 × 10⁻⁶ kpc (km/s)² M☉⁻¹ correct.
- Quiz 1 (answer 1), Quiz 2 (answer 2, slope 0), Quiz 3 (answer 1), Quiz 4 (answer 1, 1.9 × 10⁷): all correct.
- Flashcards: Eq. 3.7, cored profiles, Wolf estimator — all correct.
- `pytest tests/calc -k core-cusp-problem`: 14 passed.

## Coverage and order
- Follows the book: 3.3 adiabatic contraction (Blumenthal et al. 1986, assumptions, Eq. 3.7, effect on rotation curve, more realistic models, adiabatic expansion by feedback, disc vs elliptical caveat) → 3.4 core–cusp (Eqs. 3.8–3.9, cored Einasto, two families of solutions, Lazar et al. compilation, Jeans modelling Eqs. 3.10–3.14, Wolf et al., Lazar & Bullock r₂).
- Left out: Exercise 3.5 / Fig. 3.3 (row 7), the NFW reference slope in Fig. 3.4 (row 5), the Schwarzschild orbit-modelling method (p. 66) is not named — info.
- Added: two original worked examples; the slope plot.

## Licensing
- Fig. 3.3 (book's own) and Fig. 3.4 (Lazar et al. 2020, third party) are not reproduced; the range 10⁻³ ≲ M⋆/M_halo ≲ 2 × 10⁻² is quoted from the book's text. Good.
- 6-word overlap check: only short standard phrases ("observations of dwarf galaxies and low surface brightness galaxies", "the conserved quantity is r v(r)", "assumptions about the mass-to-light ratio"). No copied paragraphs.

## Notes
- Forward links: `leadsTo` Ferreras 3.5 (substructure), 4.4 (subgrid physics, covered by `simulating-galaxy-formation`), 6.2 (dark matter flavours, `dark-matter-particles`). All fair to the book: Chapter 4 discusses feedback recipes and Section 6.2 the WDM/SIDM/fuzzy alternatives named in Section 3.4.
- The book's "1–2 percent of the virial radius" and Lazar & Bullock 2020 / Wolf et al. 2010 attributions are correctly carried over.

## Resolution (2026-11-15, by the page author)

- Warning ("the deeper potential resists"): removed. The page now says only that with more stars the effect becomes small again, as the book does.
- Info (σ_t, cored-Einasto sign, NFW reference slope, quiz 3 condition, Exercise 3.5): accepted as they are. σ_t is defined in the anisotropy formula's usage, β = 1 − σ_t²/(2σ_r²) as on the galaxy-clusters page; the flat-dispersion condition is in the text right above Eq. 3.14.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Switched to the book's sign convention, γ_ρ = −d ln ρ⋆/d ln r and γ_σ = −d ln σ_r²/d ln r, so Eq. 3.11 reads M = (rσ_r²/G)(γ_ρ + γ_σ − 2β). The anisotropy is now β = 1 − (σ_⊥/σ_r)², as in the book. The book's Eq. 3.13 prints a minus where its own definitions give a plus; noted on the page, and recomputed in calcs (mass-total-identity).
