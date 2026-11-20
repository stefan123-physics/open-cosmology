---
page: content/year-5/Ferreras/weak-lensing-and-machos.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), PDF text extracted with pdftotext -layout, Section 2.6 from "Weak gravitational lensing" to the end of Chapter 2, printed pp. 43–49 (read; Greek letters and operators garbled — equations reconstructed from context)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the extracted book was used, as instructed)
verdict: pass-with-notes
---

# Review: Weak lensing, the Bullet Cluster and MACHOs

## Differences from the MIT source
(Source here = Ferreras, Section 2.6, pp. 43–49.)

Formula pages:
- Eq. 2.35 is on p. 45.
- Eq. 2.36 is on p. 47.
- Eq. 2.37 is on p. 48.

All three page citations are correct.

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | `<Formula label="Kaiser–Squires inversion" … at="Eq. (2.35), p. 45">` | Eq. (2.35) expresses all three quantities through the Fourier-transformed lensing potential: κ̂ = −½(k₁² + k₂²)ψ̂, γ̂₁ = −½(k₁² − k₂²)ψ̂, γ̂₂ = −k₁k₂ψ̂. This is reconstructed from the garbled three-row layout and is uncertain in sign convention. | Writes γ̂ in terms of κ̂ and the inversion κ̂ = [(k₁² − k₂²)γ̂₁ + 2k₁k₂γ̂₂]/k². | The page's formulas are correct: I derived them from the book's relations and checked that the inversion is exact. But they are not literally Eq. 2.35. Either change `at=` to "derived from Eq. (2.35), p. 45", or show the ψ̂ form first and then the inversion. |
| 2 | info | "The Bullet Cluster" | p. 46: lensing maps the total mass and X-rays map the hot gas (most of the baryons). The dark matter halo is collisionless; the gas shows a bow shock. The book does not mention where the galaxies are. | "The lensing mass … passed through and sits with the galaxies, ahead of the gas on both sides." | Correct (Clowe et al. 2006), but this goes beyond the book. You could add an attribution or say "as the cluster images show". |
| 3 | info | "Microlensing and MACHOs", MACHO result | p. 49: the results suggest "about 10–30% of the gravitating mass in the form of 0.1–1 M_⊙ clumps"; a halo made fully of such clumps is ruled out. | "allows only a minor fraction of the halo — of order 10–30% — … and rules out a halo made entirely of them". | Close enough, but the book presents 10–30% as the preferred fraction, not as an upper limit. Consider "suggests about 10–30%". The quiz Q4 wording "at most a minor part" has the same slant. |
| 4 | info | Optical-depth number | The book gives no number. | Assumes a constant density of 0.01 M_⊙/pc³ out to 50 kpc and gets τ ≈ 2.5 × 10⁻⁶. | The arithmetic is right. Because halo density falls with radius, realistic full-halo values toward the LMC are about 5 × 10⁻⁷. Add "(an overestimate, since the halo thins out with distance)". |
| 5 | info | Flashcard "Microlensing signatures" | p. 47: achromatic and aperiodic (one-off). | Adds "symmetric". | True for a point lens with uniform relative motion, as the page's own plot shows. Not in the book, but fine. |
| 6 | info | Plot of μ(t) | — | The slider allows p down to 0.1, where the peak μ ≈ 10 exceeds the y-range of 6. | Raise `range` to about [0, 11], or set the minimum p to 0.2. |
| 7 | info | PBH paragraph | p. 49: PBHs are made in the early universe, "invoking inflation"; the Hawking-radiation lower limit is about 10¹¹ kg. | Same, attributed ("Ferreras gives about 10¹¹ kg"). | Fine. The attribution is appropriate, since the commonly quoted evaporation limit is about 5 × 10¹¹ kg. |

## Arithmetic and answer checks
- Shear example: N = (3 × 0.3/0.02)² = 2025, so "√N ≥ 45, N ≈ 2000" is correct.
- μ(1) = 3/√5 = 1.342, and 2.5 log₁₀ 1.342 = 0.319 mag. The page's "1.34, 0.32 mag" is correct and matches the book (p. 47).
- Microlensing, with D_L = 10 kpc, D_S = 50 kpc, D_LS = 40 kpc and v = 200 km/s:
  - 0.5 M_⊙: r_E = 8.54 × 10¹¹ m = 5.71 AU, and t_E = 4.27 × 10⁶ s = 49.4 days (correct).
  - 10⁻⁶ M_⊙: t_E = 1.68 h (correct).
  - 30 M_⊙: t_E = 383 days, "about 380" (correct).
  - These lie inside the book's range of "hours to several months" for 10⁻⁶ to a few M_⊙.
- Optical depth: I independently derived ∫₀^{D_S} (ρ/M) π r_E² dD_L = (4πGρ/c²) D_S²/6 = 2πGρD_S²/(3c²), which matches Eq. 2.37. Numerically, τ = 2.51 × 10⁻⁶ for 0.01 M_⊙/pc³ and D_S = 50 kpc (correct; see #4).
- Plot expression: (u² + 2)/(u√(u² + 4)) with u² = p² + t² is correct.
- Weak-limit statements: ε = γ/(1 − κ) and ⟨ε⟩ ≈ γ match p. 44.
- Quiz:
  - Q1 answer 1 is correct.
  - Q2 answer 1 is correct.
  - Q3 answer 1 is correct.
  - Q4 answer 1 is correct (12 million stars, six years, 13–17 events, p. 49; see #3 on wording).
- Flashcards: all three are correct.
- calc tests: 73 passed (subset covering these three pages).

## Coverage and order
- The order matches the book:
  - weak vs strong lensing by angle, statistics, reach vs systematics
  - shapes around an isothermal lens (Figure 2.10)
  - Kaiser–Squires
  - systematics
  - the Bullet Cluster (Figure 2.11)
  - microlensing, MACHOs, signatures
  - Eq. 2.36, u(t)
  - timescales, optical depth (Eq. 2.37)
  - MACHO results (Figure 2.12)
  - the "How about…?" on event duration against mass
  - PBHs
- Left out: Figure 2.10 (the distorted images of a circular source around an SIS). A generated diagram would be a good addition but is optional.
- The book's "How about…?" task (event duration for 1 and 50 M_⊙) is covered by the page's own worked example, which uses 0.5, 10⁻⁶ and 30 M_⊙ instead.
- Added: the shear-noise example and the τ number. Both are correct.

## Licensing
- No paragraphs are copied.
- One sentence is a close paraphrase: "the lensed galaxies must be properly identified, the averages calibrated, and observational effects such as variations of the telescope's point spread function removed". This follows p. 46 closely. It is attributed ("As Ferreras puts it") and short, so it is acceptable, but rewording it further would be safer.
- No third-party figures are used:
  - Figure 2.11 (NASA/CXC/CfA, STScI, Magellan, ESO credits) is not reproduced.
  - Figure 2.12 (adapted from Alcock et al. 2000) is not reproduced.
  - The light-curve plot is generated from Eq. 2.36.
- Attribution comes from `TextbookCredit`. The CC BY-NC to CC BY-NC-SA adaptation is permitted.

## Notes
- Forward links:
  - Section 3.2 is "Properties of dark matter halos", which is correct.
  - Section 6.2 is "Dark matter flavours", the particle candidates, which is correct.
  - Section 7.4 is "Gravitational lensing in MOND". The book discusses the physical interpretation of the Bullet Cluster there (around p. 170, index "bullet cluster, 46, 170"), so the link is correct.
- The prerequisite `gravitational-lensing` exists.

## Resolution (2026-11-15, by the page author)

- Warning (Kaiser–Squires citation): now cited as "derived from Eq. (2.35)".
- Info (MACHO wording): now "suggests that compact objects of 0.1–1 M⊙ make up only a minor fraction of the halo — of order 10–30% — and rules out a halo made entirely of them".
- Info (optical depth an overestimate): a bracketed note says a constant density out to the LMC overestimates τ.
- Info (plot range): the y-range now goes to 11, so the peak at p = 0.1 is shown.
- Info (point-spread-function sentence): rewritten in our own words.
- Info (Bullet Cluster "with the galaxies", flashcard "symmetric"): kept; both are standard and correct.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
