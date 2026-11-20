---
page: content/year-5/Ferreras/galaxy-clusters.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Section 2.3, printed pp. 23–25, plus the start of Section 2.4 for the forward reference (read, from fdm.pdf via pdftotext -layout; maths symbols garbled in the extraction and rebuilt from context)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: Galaxy clusters — Zwicky's missing mass

## Differences from the MIT source
(Source here = Ferreras, Section 2.3.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | info (uncertain) | Formula "Hydrostatic mass", Eq. (2.7), p. 25 | Extraction reads roughly "M(r) = −(r kT/(G m_P)) (d ln T/d ln r + d ln ρ_g/d ln r)"; whether the book writes μ in front of m_P is lost in the extraction. | M(r) = −(r kT/(G μ m_p)) (d ln ρ_g/d ln r + d ln T/d ln r), with μ ≈ 0.6 explained. | Physically correct either way (μ m_p is the mean particle mass). If the book omits μ, a short note "(the book writes m_p for the mean particle mass)" would make the difference explicit. Term order is swapped; harmless. |
| 2 | info | Worked example "Weighing a cluster" | Exercise 2.2, p. 23: find α for a truncated isothermal sphere; σ = 1000 km/s, R = 1.5 Mpc, L ≈ 10¹³ L⊙, compare with Fig. 2.4. | Same exercise with own numbers (800 km/s, 1.2 Mpc, 5 × 10¹² L⊙) and a full solution, α = 3. | Fine: rewritten with original numbers. Derivation checked: K = (3/2)Mσ², W = −GM²/R for M(r) = Mr/R, 2K + W = 0 ⇒ M = 3σ²R/G. It assumes the same isotropic σ throughout; could be stated. |
| 3 | info | Worked example "A cluster weighed by its X-ray gas" vs α = 3 | — | The local hydrostatic/Jeans estimate for ρ ∝ r⁻² gives M = 2σ²r/G, while the virial estimate above gives 3σ²R/G. | Both are correct (local equilibrium of an untruncated profile vs global virial theorem of a truncated sphere), but a reader may be puzzled by 2 vs 3. Optional one-line remark. |
| 4 | info | "Two ways to weigh a cluster", bias sentence | p. 25 asks the reader to think about the systematic effect when hydrostatic equilibrium fails. | "If the gas is not in equilibrium … this mass is biased." | Fine. Optional: say in which direction it usually goes (non-thermal pressure support makes hydrostatic masses too low), marking it as standard knowledge beyond the book. |
| 5 | info | Summary bullet 2 | The text gives no typical cluster masses or M/L; they follow from Exercise 2.2 (σ = 1000 km/s, 1.5 Mpc → 1.05 × 10¹⁵ M⊙; L ≈ 10¹³ L⊙ → M/L ≈ 100). | "σ ~ 1000 km/s, masses ~10¹⁴–10¹⁵ M⊙ and M/L of order 100" | Consistent with the exercise numbers; no change needed. |

Formula checks (equation numbers and printed pages verified against page headers in the extraction):
- M_dyn ≈ α σ² r/G, cited "Section 2.3, p. 23": unnumbered in the book, on p. 23. Matches.
- Eq. (2.7), p. 25: see finding 1.
- Eq. (2.8), p. 25: M(r) = −(r σ_r²/G)(d ln ν/d ln r + d ln σ_r²/d ln r + 2β), β = 1 − σ_t²/(2σ_r²). Matches the reconstructed book equation, and the page's definition of σ_t² (both tangential directions together) is the one that makes this β correct.
- L_X ∝ n_g² Λ(T) ∝ n_g² T^{1/2}: matches p. 25.

## Arithmetic and answer checks
- Cluster mass: 3 × 800² × 1200/4.30 × 10⁻⁶ = 5.36 × 10¹⁴ M⊙ ("≈ 5.4 × 10¹⁴"). M/L = 5.36 × 10¹⁴/5 × 10¹² = 107 ("≈ 110"). Correct.
- "Stars give at most about 10": consistent with Section 2.4 / Fig. 2.4 and the counting-ordinary-matter page.
- X-ray mass: 2 × 3.086 × 10²² × 1.381 × 10⁻²³ × 7 × 10⁷/(6.674 × 10⁻¹¹ × 0.6 × 1.673 × 10⁻²⁷) = 8.90 × 10⁴⁴ kg = 4.48 × 10¹⁴ M⊙. Correct.
- kT at 7 × 10⁷ K = 6.03 keV ("about 6 keV"); 10⁷ K = 0.86 keV ("of order a keV"). Correct.
- σ = √(kT/μm_p) = 981 km/s ("≈ 980"). Correct.
- Quiz Q1 (Zwicky), Q2 (5.4 × 10¹⁴ M⊙, answer index 1 correct), Q3 (long cooling time), Q4 (anisotropy β): all marked answers and explanations correct.
- Flashcards: all three correct (10⁷–10⁸ K for the ICM is a standard range; the book says ≳ 10⁷ K).
- `npm run calc:test` subset for the three reviewed pages passes (65 passed).

## Coverage and order
- Order follows the book: Zwicky 1933 and Coma → M_dyn ≈ ασ²r/G → Exercise 2.2 → order-of-magnitude excess → ICM (hydrostatic model, ≳ 10⁷ K, 10⁻³ cm⁻³, bremsstrahlung, X-ray profiles, still a large gap) → "How about…?" (Eqs. 2.7 and 2.8, analogy T ↔ σ_r², the two questions). Matches; the page answers both of the book's questions (anisotropy absent for gas because collisions make pressure isotropic; equivalent of hydrostatic equilibrium is dynamical/steady-state equilibrium). Both answers are correct.
- Left out (info): Fig. 2.4 (stellar M/L of simple stellar populations) — deferred to the next page; the Zwicky reference (Helvetica Physica Acta 6, 110). Fine.
- Added: the X-ray worked example and the "largest gravitationally bound objects" framing (standard fact).

## Licensing
- No figures used (Fig. 2.4 not reproduced). No third-party material.
- Verbatim check (6-word overlaps): only "as collisionless test particles in the cluster" and notation fragments. No copied paragraphs.
- CC BY-NC → CC BY-NC-SA adaptation with attribution and changes statement via `components/Credit.tsx`: fine.

## Notes
- Forward links: `leadsTo` 2.4 (counting-ordinary-matter) and 2.6 (gravitational-lensing) exist; reasons accurate.
- Zwicky "first evidence" in 1933 and Rubin "decades later" (quiz Q1 explanation) are fair and match pp. 17 and 23.
- Prerequisite `rotation-curves` exists.

## Resolution (2026-11-15, by the page author)

- Info (μ in Eq. 2.7 uncertain in the extraction): kept; μ m_p is the standard mean particle mass of the hydrostatic formula and the analogy kT/(μ m_p) ↔ σ_r² needs it.
- Info (α = 3 vs factor 2): the X-ray example now explains that its factor 2 is the local density slope, not the global virial α = 3.
- Info (direction of hydrostatic bias): the page now says the hydrostatic mass usually comes out too low, because turbulence and bulk motions add support the formula leaves out.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
