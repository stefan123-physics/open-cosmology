---
page: content/year-5/Ferreras/halo-substructure.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 3, Section 3.5, printed pp. 69–74 (read, from the local fdm.pdf via pdftotext -layout and -raw; maths symbols garbled in the extraction and rebuilt from context; page images could not be rendered because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: needs-changes
---

# Review: Substructure — the missing satellites and "too big to fail"

## Differences from the MIT source
(Source here = Ferreras, Chapter 3, Section 3.5.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | error | Summary, third bullet | p. 72: the fluctuation behind a Milky Way-sized halo has a scale of about 1 Mpc. | "Substructure in a Milky Way halo (from a region about 1.8 Mpc across)". | The worked example gives 1.8 Mpc as the **radius** (comoving), so the region is about 3.6 Mpc across. Write "from a region of radius about 1.8 Mpc". |
| 2 | warning | "Solutions from the baryon side", too big to fail; Quiz 4 | p. 73: even for the most massive subhalos (M ≳ 10¹⁰ M☉) "there is a mismatch between observations and numerical simulations"; in this range feedback is unlikely to have stopped star formation. | "…yet the bright satellites they should host are not seen"; Quiz 4: "yet no such satellites are seen". | The book does not say this, and it is not the usual statement of the problem (Boylan-Kolchin et al. 2011): the bright satellites exist, but they are less dense in their centres than the most massive simulated subhalos, so they cannot live in them — leaving those subhalos without visible galaxies. Rephrase, e.g. "simulations predict massive subhalos denser than any observed bright satellite; such subhalos should have formed stars, so they should be seen". |
| 3 | warning | Worked example "A self-interacting halo as a polytrope" | "How about…?" box, pp. 73–74: Eqs. (3.15) P = Kρ^{1+1/n}, (3.16) hydrostatic equilibrium and dM/dr, (3.17) Lane–Emden, (3.18) θ = (1 + ξ²/3)^{−1/2} for n = 5; boundary conditions θ(0) = 1, θ′(0) = 0. | The same equations as inline maths in a worked example, with no equation citations. | Not an original example: it is the book's exercise, worked out. The four equations are the book's numbered equations, so give them as `<Formula … cite="mit" at="Eq. (3.15), p. 73">` etc. (p. 74 for 3.18) and label the example as Ferreras's exercise. |
| 4 | info | Order | The polytrope box is at the very end of the section, after too big to fail. | Placed inside "Solutions from the dark matter side". | Reasonable regrouping (it is about SIDM); optional note. |
| 5 | info | "Halos within halos" | p. 69: "the power of the density fluctuations increases monotonically towards small scales". | "The fluctuations also have more power towards small scales", linked to the 8.902 power-spectrum page. | Faithful to the book, but strictly it is the mass variance σ(M) (or k³P(k)) that grows towards small scales; P(k) itself falls at large k. The linked page shows P(k), so readers may be confused. Optional: "the fluctuation amplitude σ(M) keeps growing towards small masses". |
| 6 | info | SIDM paragraph | p. 72: SIDM interactions "would appear as high-energy photons" in dense galaxy centres. | "It might even produce an observable signal, high-energy photons from the densest galaxy centres." | Faithful to the book. Elastic self-scattering need not produce photons; consider "Ferreras suggests…" to attribute the claim. |
| 7 | info | Polytrope example | p. 73: an isothermal solution corresponds to n → ∞. | Not mentioned. | Optional one clause; it connects to the isothermal sphere of the earlier pages. |
| 8 | info | "Galaxies below about 10⁹ M☉ are traditionally called dwarfs" | p. 70: "galaxies with masses below 10⁹ M☉". | Same. | Fine. |

Formula checks: the page has no `<Formula>` components (see row 3). Inline equations checked:
- P = Kρ^{1+1/n}, dP/dr = −GM(r)ρ/r², dM/dr = 4πr²ρ, ρ = ρ₀θⁿ, r = aξ, Lane–Emden (1/ξ²)(ξ²θ′)′ = −θⁿ with θ(0) = 1, θ′(0) = 0: match Eqs. 3.15–3.17 and p. 74 (reconstructed from the garbled extraction; standard forms).
- θ = (1 + ξ²/3)^{−1/2} for n = 5 (Eq. 3.18): matches; "no boundary" (never reaches θ = 0) matches p. 74.

## Arithmetic and answer checks
- Milky Way halo: r = (3 × 10¹² / (4π × 4.08 × 10¹⁰))^{1/3} = 1.802 Mpc; k = π/r = 1.743 Mpc⁻¹. Page 1.8 Mpc, 1.7 Mpc⁻¹. Correct. (k = π/r matches the book's definition, λ = 2r, p. 71.)
- Subhalo 10⁹ M☉: r = 0.180 Mpc, k = 17.4 Mpc⁻¹. Page 0.18 Mpc, 17 Mpc⁻¹. Correct.
- n = 5 check: ξ²θ′ = −(ξ³/3)(1 + ξ²/3)^{−3/2}; its derivative = −ξ²(1 + ξ²/3)^{−5/2}; divided by ξ² gives −θ⁵. Correct.
- 1000 / 50 = 20: "factor of twenty" correct.
- Numbers quoted from the book: 50 (Milky Way) and 30 (Andromeda) satellites, a few hundred M☉ in stars, 1000 subhalos, 10⁹ M☉ dwarfs, 10⁵ M☉ ultra-faint dwarfs, 178 and 330 contrasts, 3 keV → 10⁹ M☉ halos and stellar masses below a few × 10⁷ M☉, z ≳ 3, ~10¹⁰ M☉ too-big-to-fail subhalos, 250 kpc (Fig. 3.5 caption), SDSS York 2000, DES 2016, PAndAS Huxor 2014, Sánchez-Almeida 2021: all match pp. 69–74.
- Quiz 1 (answer 1), Quiz 2 (answer 0), Quiz 3 (answer 0): correct. Quiz 4 (answer 1): the marked choice is the intended one, but its wording "yet no such satellites are seen" has the problem in row 2.
- Flashcards: correct (Lane–Emden and n = 5 solution verified above).
- `pytest tests/calc -k halo-substructure`: 16 passed.

## Coverage and order
- Follows the book: free streaming vs CDM, subhalos survive because they are concentrated → endless hierarchy, resolution limits, dark galaxies → Milky Way and Andromeda satellites vs ~1000 subhalos → "How about…?" on halo definitions → ~1 Mpc scale and dark matter solutions (WDM, SIDM, high-z cost) → baryonic solutions → too big to fail → polytrope box (moved, row 4).
- Nothing substantive left out; the n → ∞ isothermal remark is missing (row 7).
- Added: original worked example on comoving scales and wavenumbers.

## Licensing
- Fig. 3.5 (Bullock & Boylan-Kolchin 2017, third party) is not reproduced; only its 250 kpc extent is mentioned in words. Good.
- 6-word overlap check: only short phrases and names ("in warm and hot dark matter models", "the too big to fail problem", "the Sloan Digital Sky Survey", "a combination of K, n and the central density"). No copied paragraphs.

## Notes
- Forward links: `leadsTo` Ferreras 4.2 (simulations and their resolution; page `simulating-galaxy-formation`), 4.7 (abundance matching; covered by `galaxies-in-halos`), 6.2 (dark matter flavours; `dark-matter-particles`). All fair. The inline link to the 8.902 `power-spectrum` page resolves (see row 5).
- Prerequisite `power-spectrum` exists (content/year-5/8.902/power-spectrum.mdx).

## Resolution (2026-11-15, by the page author)

- Error (summary "1.8 Mpc across"): corrected to "1.8 Mpc in radius".
- Warning (too big to fail): reworded in the text and quiz 4. The massive simulated subhalos do not match the observed satellites, which are less dense in their centres; feedback cannot have kept those subhalos dark.
- Warning (polytrope): now presented as the book's "How about…?" material, with Eqs. 3.15–3.18 as <Formula> components citing pp. 73–74, and the n → ∞ isothermal limit added. The verification is a worked example labelled as the book's exercise.
- Info (self-interacting dark matter photon signal): now attributed to Ferreras.
- Info ("more power towards small scales"): kept as the book states it; the linked power-spectrum page gives the precise statement.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
