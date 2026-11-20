---
page: content/year-5/Ferreras/simulating-galaxy-formation.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 4 introduction and Sections 4.1–4.4, printed pp. 75–93 (read, from the local fdm.pdf via pdftotext -layout and -raw; maths symbols are garbled in the text extraction, so every display equation was rebuilt by decoding the PDF content streams of printed pp. 77–80, 83 and 90 glyph by glyph with their SymbolMT glyph names and positions; page images could not be rendered because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: Simulating galaxy formation — gravity, gas and "subgrid" physics

## Differences from the MIT source
(Source here = Ferreras, Chapter 4, Sections 4.1–4.4.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | Hydrodynamics, text after Eqs. (4.6)–(4.9) | p. 83: u is called "the energy density (u)". The equations themselves are du/dt = −(P/ρ)∇·v + [Q − Λ(T, Z, ρ)]/ρ and p = (γ − 1)uρ, which only make sense for u = energy **per unit mass** (and Q, Λ per unit volume). | "the internal energy per unit mass u" | The page is physically right and the book's wording is loose. Since the page departs from the book's words without saying so, add a short bracket, e.g. "(Ferreras calls u the energy density; with P = (γ − 1)ρu it is the energy per unit mass, and Q and Λ are rates per unit volume, hence the division by ρ)". |
| 2 | warning | Eq. (4.8) on the page | p. 83: cooling function written Λ(T, Z, ρ) (decoded glyphs: Λ ( T , Z , ρ ) over a denominator ρ). | Λ(T, Z), and text "which depends on temperature T and metallicity Z". | Write Λ(T, Z, ρ) in the formula and mention the density dependence, or say the page drops it. The normalisation (Q − Λ)/ρ itself matches the book. |
| 3 | warning | Worked example "Can supernovae unbind a dwarf galaxy's gas?", step Efficiency | — | "in a galaxy a hundred times more massive the binding energy is ten thousand times larger" | True only at the same radius (GM²/R with R fixed), and the supernova budget also grows with the stellar mass formed. The calcs entry says "(same radius)" but the page does not. Add "at the same radius" and note that a bigger galaxy is also larger; or rephrase as "binding energy grows as M², faster than the supernova energy, which grows with M". |
| 4 | info | Equation of state, Eq. (4.9) | p. 83: written with lowercase p = (γ − 1)uρ (P elsewhere). | P = (γ − 1)ρu | Fine; the page's consistent P is better. |
| 5 | info | Subgrid physics, SAM paragraph | pp. 85–86: halo merger trees from Press–Schechter theory "and extensions thereof". | "from Press–Schechter theory or a dark-matter-only simulation" | The simulation option is standard practice but not in the book; acceptable. |
| 6 | info | Star formation paragraph | p. 86: also says star formation depends on the cold (molecular) phase and that cosmological runs add a condition on the gas dynamics (converging flows or Jeans instability). | Not mentioned. | Optional one-line addition for full coverage. |
| 7 | info | Supernova worked example | p. 87 "How about ...?": 10¹⁰ M☉ truncated isothermal sphere, 1 kpc, 100 M☉/yr for 100 Myr, one SN per 100 M☉, find the efficiency. | Same set-up with own numbers (10⁹ M☉, 2 kpc, 1 M☉/yr, 50 Myr). | Numbers are original; the structure is the book's exercise. Consider "(after Ferreras's 'How about ...?' on p. 87)". |
| 8 | info | Supernova worked example, step Efficiency | p. 87: "only a fraction of it can be tapped for feedback". | "Most of a supernova's energy is radiated away" | Not in the book; broadly right for remnants in dense gas, but stated as fact. Could soften to "only part of it couples to the gas". |
| 9 | info | Black hole worked example | Eq. (4.12) as in the book. | 9.2 e-foldings × 45 Myr "about 410 Myr" | 9.21 × 45.04 = 414.8 Myr; "about 415 Myr" (or "about 400 Myr") is closer. The e-folding time ignores the (1 − ε_r) factor of the usual Salpeter time (it would be ≈ 50 Myr); fine, since the page follows the book's Eq. (4.12). |
| 10 | info | Initial conditions | p. 81: 100 Mpc boxes miss "galaxy clusters or compact massive galaxies", n ≲ 1/(100 Mpc)³. | "such as massive galaxy clusters" | Fine; compact massive galaxies dropped. |

Formula checks (equation numbers and printed pages checked against the running page headers; printed p = PDF p − 14):
- Eq. (4.1), p. 77: ∇²Φ(r) = 4πG m_DM Σᵢ δ³(r − rᵢ). Matches (decoded: ∇ ² Φ ( r ) = 4 π G m_DM Σ δ (3) ( r − r_i )).
- Single-particle potential −G m_DM/r, p. 77. Matches.
- Eq. (4.2), p. 78: Φ(r; ε) = −G m_DM/√(r² + ε²). Matches.
- Eq. (4.3), p. 78: r̈ᵢ = −G m_DM Σ_{j≠i}^N (rᵢ − rⱼ)/[(rᵢ − rⱼ)·(rᵢ − rⱼ) + ε²]^{3/2}. Matches the page's |rᵢ − rⱼ|² form.
- Eq. (4.4), p. 79: ∇²Φ = 4πGρ ⇒ −k²Φ_k = 4πGρ_k. Matches.
- Eq. (4.5), p. 80: F = −∇Φ ⇒ F_k = −ik Φ_k. Matches (page shows only the Fourier form; fine). Citation "Eqs. (4.4)–(4.5), pp. 79–80" correct.
- Eq. (4.6), p. 83: dρ/dt = −ρ∇·v. Matches.
- Eq. (4.7), p. 83: dv/dt = −∇P/ρ − ∇Φ. Matches.
- Eq. (4.8), p. 83: du/dt = −(P/ρ)∇·v + [Q − Λ(T, Z, ρ)]/ρ. Matches except the ρ argument of Λ (row 2). Heating and cooling are both divided by ρ in the book, as on the page.
- Eq. (4.9), p. 83: p = (γ − 1)uρ. Matches (row 4).
- Eq. (4.10), p. 83: d/dt = ∂/∂t + v·∇. Matches.
- Eq. (4.11), p. 90: dM_BH/dt = 4π(GM_BH)²ρ/(c_s² + v²)^{3/2}. Matches.
- Eq. (4.12), p. 90: dM_Edd/dt = 4πGM_BH m_p/(ε_r σ_T c); ε_r = L/(Ṁ_BH c²) = 0.1. Matches.
- Radius of influence GM_BH/c∞², pp. 88–89 (unnumbered). Matches.

## Arithmetic and answer checks
- Tree example: N² = 10²⁰; log₂10¹⁰ = 33.2, N log₂N = 3.32 × 10¹¹; ratio 3.01 × 10⁸ ("about 300 million"); 10²⁰/10¹⁵ s = 10⁵ s = 1.16 days ("about a day"); 3.3 × 10¹¹/10¹⁵ = 3.3 × 10⁻⁴ s ("well under a second"). Correct.
- Radius of influence: G × 10⁷ M☉/(30 km/s)² = 1.47 × 10¹⁸ m = 0.048 kpc ("about 0.05 kpc", as in the book). Correct.
- Dwarf binding energy: GM²/R = 6.674 × 10⁻¹¹ × (1.989 × 10³⁹)²/(6.171 × 10¹⁹) = 4.28 × 10⁴⁸ J = 4.28 × 10⁵⁵ erg. Correct. GM²/R is the exact potential energy (magnitude) of a truncated singular isothermal sphere (M(r) ∝ r). Correct.
- Supernovae: 1 M☉/yr × 5 × 10⁷ yr = 5 × 10⁷ M☉ → 5 × 10⁵ SNe → 5 × 10⁵⁶ erg; 4.28 × 10⁵⁵/5 × 10⁵⁶ = 8.6% ("about 9%"). Correct.
- E-folding time: 0.1 × 6.652 × 10⁻²⁹ × 2.998 × 10⁸/(4π × 6.674 × 10⁻¹¹ × 1.673 × 10⁻²⁷) = 1.42 × 10¹⁵ s = 45.0 Myr. Correct (quiz 4, flashcard 3, worked example, summary).
- Growth 10⁵ → 10⁹ M☉: ln 10⁴ = 9.21; × 45.0 Myr = 415 Myr; page "about 410 Myr" (row 9).
- Quiz 1 (answer 1, three pillars): correct per p. 76.
- Quiz 2 (answer 1, softening): correct per pp. 77–78; "about 100 pc at best" per p. 78.
- Quiz 3 (answer 1, N² and N log N): correct per pp. 78–79.
- Quiz 4 (answer 1, about 45 million years): correct.
- Flashcards: Plummer form, PP/tree/PM scaling and Φ̂_k = −4πGρ̂_k/k² (from Eq. 4.4), Eddington rate and 45 Myr — all correct.
- `npm run calc:test` subset (`pytest tests/calc -k "simulating-galaxy-formation or galaxies-in-halos"`): 35 passed.

## Coverage and order
- Follows the book's order: 4.1 three pillars → 4.2 Poisson solvers (synthetic particles, EAGLE mass, softening, PP, GRAPE, tree, PM, P³M, initial conditions) → 4.3 hydrodynamics (Eulerian/Lagrangian, Eqs. 4.6–4.10, IllustrisTNG galaxy described in words) → 4.4 subgrid physics (overcooling, SAMs, star formation, SN feedback, nuclear activity, Bondi and Eddington, AGN modes, stellar populations, dust and radiative transfer, magnetic fields and cosmic rays).
- Left out: Exercise 4.1 (force resolution from halo density), Exercise 4.2 (monopole error), Exercise 4.3 (puffing-up by AGN mass loss), the "How about ...?" on EAGLE vs TNG seed thresholds; the "analogous (not equivalent) to the covariant derivative" remark after Eq. (4.10); the star-formation dynamical criteria (row 6); the remark that the event horizon 2GM/c² is far smaller than the radius of influence. None is essential; the exercises belong to future problem pages.
- Added: two original worked examples (tree cost; black-hole growth time) and one adapted from the book's "How about ...?" (row 7).

## Licensing
- Source is CC BY-NC 4.0; adapting into this CC BY-NC-SA 4.0 page is allowed with attribution. The footer for `kind: textbook` courses (components/Credit.tsx, TextbookCredit) prints the publisher's attribution and licence; not checked in a rendered build.
- No figures reused: Figure 4.1 (tree diagram) is not reproduced; Figure 4.2 (IllustrisTNG, from Crain and van de Voort 2023, a third-party image) is only described in words. Correct.
- No copied paragraphs found. Closest paraphrases: the pillars list (p. 76) and the overcooling sentence ("many old, massive, compact galaxies with little rotational support", p. 85 → "too many old, massive, compact galaxies with little rotation"). Short and acceptable, but the overcooling phrase could be reworded further.
- No OpenStax or LibreTexts material.

## Notes
- Forward link: leadsTo Ferreras 4.6 ("mass functions, halo occupation and abundance matching") matches galaxies-in-halos (lecture 4.6, Sections 4.5–4.7). No cosmology callout; none needed on a cosmology-course page.
- Internal links to /courses/8-902/linear-perturbations and /courses/8-902/power-spectrum point to existing pages (slugs exist); the book itself points to Chapter 7 of FoGDFE for the power spectrum.
- Eq. (4.8)–(4.9) check (requested): the book divides both Q and Λ by ρ and uses P = (γ − 1)ρu, so u is energy per unit mass in practice even though the book calls it "energy density"; the page's normalisation is the book's. Decoded with high confidence from the PDF glyph stream (numerator row: Q − Λ ( T , Z , ρ ); denominator ρ under P and a second ρ under the bracket).

## Resolution (2026-11-15, by the page author)

- Warning (u is energy per unit mass): a bracketed note now says the book calls u the energy density, but with P = (γ − 1)ρu and the source terms divided by ρ it is the energy per unit mass.
- Warning (Λ(T, Z, ρ)): the cooling function now carries its density dependence, in the formula and in the text.
- Warning (binding energy scaling): now "a galaxy a hundred times more massive, of the same size".
- Info (410 vs 415 Myr): now "about 415 Myr"; calcs use the unrounded 45.04 Myr.
- Info (credit for the supernova example): the worked example is now titled as adapted from a "How about…?" box in the book.
- Info (overcooling paraphrase, uncovered exercises): accepted; the overcooling sentence is a short summary, not a copied passage.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
