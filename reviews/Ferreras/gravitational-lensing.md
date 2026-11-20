---
page: content/year-5/Ferreras/gravitational-lensing.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), PDF text extracted with pdftotext -layout, Section 2.6 up to "Weak gravitational lensing", printed pp. 31–43 (read; Greek letters and operators garbled — equations reconstructed from the surviving structure and context)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the extracted book was used, as instructed)
verdict: pass-with-notes
---

# Review: Gravitational lensing — weighing mass by bending light

## Differences from the MIT source
(Source here = Ferreras, Section 2.6. `cite="mit"` points to the book via `source.url`, which is the site's convention.)

**Formula citations.** I checked every `<Formula>` against the reconstructed equation and the printed page header. All the equation numbers and pages are right:

| Equations | Printed page |
|---|---|
| 2.9 | p. 32 |
| 2.10 | p. 32 |
| 2.11 | p. 33 |
| 2.12–2.13 | p. 33 |
| 2.14–2.15 | p. 34 |
| 2.17–2.19 | p. 35 |
| 2.20–2.23 | p. 36 |
| 2.24–2.26 | p. 37 |
| SIS Σ and θ_E, 2.28 | p. 38 |

The physics of each formula matches the book, as far as the garbled extraction lets me tell. I re-derived 2.13 (sign), 2.23 and the θ_E definitions independently.

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "Strong lensing", after the cored isothermal sphere | Eq. (2.29), p. 38: lens equation of the cored isothermal sphere, β = θ − θ_E(√(θ² + θ_c²) − θ_c)/θ, with θ_c = r_c/D_L (reconstructed; uncertain in detail). Figure 2.6 shows the one-image and three-image regimes. Eq. (2.30) gives its lensing potential, and Eq. (2.31) gives the elliptical potential. | Says in words that the cored lens makes one or three images and that real lenses use elliptical potentials. Eqs. 2.29–2.31 are not given, and there is no plot standing in for Figure 2.6. | Add Eq. 2.29 as a `<Formula>` and a generated `<Plot>` of β(θ) for two core sizes (the caustic is where dβ/dθ = 0). That covers Figure 2.6 without using the book's figure. |
| 2 | info | Coverage | Exercise 2.7 / Eq. (2.27), p. 37: deflection, κ and γ for a power-law profile ρ ∝ r^−n. | Not mentioned. | Optional: one sentence giving κ ∝ θ^(1−n), which fits the isothermal case n = 2. |
| 3 | info | "Weighing a lens" (HE 2149−2745) | Eq. (2.32), p. 41: point mass, β = 1.01″, θ_E = 2.73″, then 18.3 kpc, 6.8 kpc, and Eq. (2.33) M ≈ 2.2 × 10¹² M_⊙. Eq. (2.34): isothermal, β = 0.51″, θ_E = 0.849″, M ≈ 7.8 × 10¹⁰ M_⊙. | Mentions the system and its redshifts and does not use its numbers. | Author's decision (b) **verified as correct**. See the HE 2149 check below: the book's 2.73″ is exactly 4 × the correct 0.683″, and its 18.3 kpc and 2.2 × 10¹² M_⊙ inherit that error. I suggest a short bracketed note on the page, in line with writing rule 4, e.g. "[The book's point-mass Einstein radius for this lens, 2.73″, is four times what its image positions give (0.68″); we therefore use our own numbers.]" |
| 4 | info | WE "Light bending" vs quiz 3 | — | The worked example gives the Newtonian value as "about 0.87″" (from c = 3.00 × 10⁸ m/s: 0.874″). Quiz 3 gives "about 0.88″" (1.75/2). | Harmless rounding. You could use "about 0.87″" in both. |
| 5 | info | "Why light bends", WE step 2 | The book (p. 33) says only that GR doubles the Newtonian result. | Adds the 1919 eclipse expedition. | Correct general knowledge and fairly worded. No change needed. |
| 6 | info | "Strong lensing", CASTLES | Figure 2.7 is "Courtesy CASTLES team". | Mentions CASTLES by name and does not reproduce the figure. | Fine. No `courtesy:` entry is needed because the figure is not used. |

## Arithmetic and answer checks
- Distances (flat, H₀ = 70, Ω_m = 0.3), computed with SciPy:
  - z_L = 0.5, z_S = 2.0: D_L = 1259.1, D_S = 1726.6, D_LS = 1097.1 Mpc. The page's 1259, 1727 and 1097 are correct.
  - D_LS/D_S = 0.635 (correct).
- Σ_cr (z_L = 0.5, z_S = 2) = 2079 M_⊙/pc², "≈ 2100" (correct).
- Sun: 2GM/(c²b) = 4.24 × 10⁻⁶ rad = 0.874″, and GR gives 1.748″ (correct).
- WE "Einstein radius": θ_E = 4π(250/299 792)² × 0.635 = 5.54 × 10⁻⁶ rad = 1.143″ (correct). ξ_E = 6.98 kpc, "≈ 7.0" (correct).
- WE "Point mass or isothermal sphere?":
  - θ_E(PM) = √0.48 = 0.693″ and β = 0.80″ (correct).
  - SIS: θ_E = 0.80″, β = 0.40″, σ = 209 km/s ("about 210", correct).
  - M = θ_E²c²D_L D_S/(4G D_LS): 1.16 × 10¹¹ and 1.56 × 10¹¹ M_⊙ ("1.2" and "1.6", correct). The ratio is 1.34 ("a third", correct).
  - Point-mass magnifications: 1.125 and 0.125, a ratio of 9 (2.39 mag). SIS: 3 and 1, a ratio of 3 (1.19 mag). These are correct. The magnification formulas |1 − (θ_E/θ)⁴|⁻¹ and |1 − θ_E/θ|⁻¹ are correct.
- **HE 2149−2745 (checking the book):**
  - Correct point-mass Einstein radius: θ_E = √(1.354 × 0.344) = 0.683″, and β = 1.354 − 0.344 = 1.010″. The book's β = 1.01″ is right. Its θ_E = 2.73″ = 4 × 0.683″, which looks like a factor-4 slip, i.e. 4θ_E² taken as θ_E².
  - With 2.73″ and the book's distances, I reproduce its 18.3 kpc and 2.2 × 10¹² M_⊙. So those values inherit the slip. With 0.683″ they would be 4.6 kpc and 1.4 × 10¹¹ M_⊙.
  - With the correct θ_E, the source position (6.8 kpc) stands.
  - Isothermal: θ_E = 0.849″ and β = 0.505″ match the book.
  - The book's M_iso = 7.8 × 10¹⁰ M_⊙ could not be reproduced. The projected mass πΣ_cr(D_Lθ_E)² gives 2.1 × 10¹¹ M_⊙, and the 3-D SIS mass within D_Lθ_E gives 1.35 × 10¹¹. Eq. 2.34 is too garbled to tell which formula was meant, so **this is uncertain**.
  - Exercise 2.8 (flux difference 1.6 mag): with the corrected θ_E the point mass predicts 2.98 mag and the SIS predicts 1.49 mag. The SIS is favoured.
  - Conclusion: the author's decision not to quote the book's point-mass numbers is right.
  - The calcs file header already records this.
- My book-distance check (z = 0.6 and 2.03) gives D_L = 1379, D_S = 1724, D_LS = 996 Mpc, against the book's 1382 / 1724 / 992. The small differences are not used on the page.
- Plot: the expressions follow Eq. 2.26 and the SIS images β ± θ_E. The inner images are negative, meaning the opposite side, which is consistent. The caption is accurate.
- Quiz:
  - Q1 answer 1 is correct (p. 31: independent of the dynamical state; projected 2-D mass).
  - Q2 answer 2 is correct.
  - Q3 answer 1 is correct (0.875″; see #4).
  - Q4 answer 2 (0.80″) is correct, and the explanation's PM value of 0.69″ is correct.
- Flashcards: all three are correct (Eqs. 2.9, 2.25/p. 38, 2.21).
- calc tests: 73 passed (subset covering these three pages).

## Coverage and order
- The order matches the book:
  - alignment and projected-mass caveats
  - lens equation, distances
  - refractive index, path integral, Newtonian vs GR (Exercise 2.6)
  - thin lens, lensing potential
  - circular symmetry ("How about…?")
  - 2-D Poisson equation, κ, Σ_cr, where lenses are found
  - Liouville, magnification, Jacobian, shear, caustics
  - symmetric lens, point mass, Einstein ring, strong vs weak
  - SIS, cored SIS, elliptical models, doubles and quads
  - HE 2149, degeneracies, flux ratios, stellar-mass comparison (Leier et al. 2011)
- Left out: Eqs. 2.27, 2.29–2.31 (see #1, #2) and the book's footnote 5 (evolution of the lens and source populations). The HE 2149 numbers are left out deliberately (#3).
- Added: the solar deflection example and the Σ_cr value for z = 0.5/2. Both are correct.

## Licensing
- No paragraphs are copied. The prose is rewritten throughout.
- No third-party figures are used. Figures 2.7 (CASTLES), 2.8 (HST image) and 2.9 (Leier et al.) are not reproduced. The only plot is generated from Eq. 2.26 and the SIS formula.
- The worked examples are original. They use their own lens (z = 0.5/2.0, 1.20″/0.40″) rather than HE 2149.
- Attribution and change notes come from `TextbookCredit` with the publisher's attribution string. The CC BY-NC to CC BY-NC-SA adaptation is permitted.

## Notes
- Forward links:
  - Section 3.2 is "Properties of dark matter halos", which is correct.
  - Section 7.4 is "Gravitational lensing in MOND", which is correct and fairly described.
- The prerequisites `counting-ordinary-matter` and `luminosity-and-redshift` exist.
- The equation reconstructions for 2.12–2.15, 2.19–2.20 and 2.22–2.23 are partly inferred from the garbled extraction. They agree with the standard lensing formalism, which the book clearly follows, but I could not compare symbols one by one.

## Resolution (2026-11-15, by the page author)

- Warning (Eqs. 2.29–2.31 only in words): Eq. 2.29, the lens equation of the cored isothermal sphere, is now a <Formula>. Eqs. 2.30–2.31 (its lensing potential and the elliptical potential) stay in words. No Figure 2.6-style plot: the existing plot already shows how the number of images changes with source position.
- Info (Exercise 2.7 / Eq. 2.27): a sentence now gives the power-law result, α ∝ θ^(2−n).
- Info (HE 2149−2745): a bracketed note now says why the book's point-mass numbers are not used (its 2.73″ is four times the √(1.354 × 0.344) ≈ 0.68″ that its image positions give), and that its isothermal values agree.
- Info (0.87″ vs 0.88″): intentional. The worked example computes 2GM/(c²b) = 0.87″; quiz 3 says "half of 1.75″, about 0.88″". Both are in calcs.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Eq. 2.9 now written as the book does (θ = β + (D_LS/D_S)α̂) and Eq. 2.12 with |Φ|. Two book misprints noted in brackets: the critical density after Eq. 2.17 is printed upside down, and Eq. 2.21 prints (1 − κ²) instead of (1 − κ)².
