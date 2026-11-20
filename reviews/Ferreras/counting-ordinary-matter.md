---
page: content/year-5/Ferreras/counting-ordinary-matter.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), PDF text extracted with pdftotext -layout, Sections 2.4–2.5, printed pp. 26–31 (read; Greek letters and operators garbled in the extraction)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the extracted book was used, as instructed)
verdict: pass-with-notes
---

# Review: Counting the ordinary matter — stars, gas, and systems without dark matter

The page has no `<Formula>` blocks: every equation is inline. So there are no display-equation citations to check. All claims were checked against printed pp. 26–31.

## Differences from the MIT source
(Source here = Ferreras, Sections 2.4–2.5.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | info | "Stellar mass from light", bracketed note on the Salpeter slope | Exercise 2.3 (p. 27) writes the Salpeter IMF as dN/d log M ∝ M^−2.35, and Exercise 2.4 (p. 29) does the same for its generic slope. The main text (p. 28) calls Salpeter "a simple power law in stellar mass". | dN/dM ∝ M^−2.35, with a bracketed note that the book's Exercise 2.3 writes it per log mass. | Author's decision (a) **verified as correct**: Salpeter (1955) has ξ(log m) ∝ m^−1.35, which is the same as dN/dM ∝ M^−2.35. So the slope 2.35 is per unit mass, and the book's "d log M" is a slip. You could add "and 2.4" to the note. |
| 2 | warning | Coverage, end of "Gas" | Exercise 2.4 (p. 29): for a generic power-law IMF with L ∝ M³ and lifetime ∝ M^−3, find how the stellar M/L of a simple stellar population changes with age, and compare with Figure 2.4. | Not covered. The page also does not show how Υ_s changes with age (Figure 2.4), only in words. | Add a short paragraph, or a generated plot of M/L against age from this toy model. That would cover the exercise and stand in for Figure 2.4. |
| 3 | info | WE "A globular cluster's mass" | The book's Exercise 2.5 (p. 30) uses M 13 with a King model (σ₀ = 7.1 km/s, r_c = 1.5 pc, r_t = 47 pc, M_s ≈ 6 × 10⁵ M_⊙). | Uses its own cluster and the estimate M ≈ 3σ²r/G. | Fine as an original example. M ≈ 3σ²r/G is a rough virial estimate (other prefactors are also used) and is not from the book; you could call it "a rough virial estimate". |
| 4 | info | "Stellar systems without dark matter": "up to about a million old stars" | The book gives no number of stars. It only says globular clusters are "dense and small", and Exercise 2.5 gives M 13 about 6 × 10⁵ M_⊙. | "up to about a million old stars" | The statement is correct (general knowledge), but `calcs/Ferreras/counting-ordinary-matter.yaml` (id `gc-million`) cites it to p. 30, which does not say it. Mark it as page-own general knowledge. |
| 5 | info | WE "How much dark matter is in the Solar System?" | The book's "How about…?" (p. 31) uses NGC 4303's flat rotation curve between 5 and 10 kpc. | Uses the Milky Way: 220 km/s at 8 kpc, with all of it treated as dark matter. | Original example, which is fine. But the whole 220 km/s, including the disc's share, is attributed to dark matter, so 0.014 M_⊙/pc³ (0.5 GeV/cm³) is at the high end. Commonly quoted values are about 0.01 M_⊙/pc³ (0.3–0.4 GeV/cm³). Add "an upper estimate, since stars and gas also contribute to the rotation". |
| 6 | info | Intro and "Gas" | p. 26: the most massive planet is ≲10⁻³ of its star. p. 29: CO "or H₂" molecular lines; Y ≈ 0.24 floor that rises with time. | Matches. 1/(1−Y) ≈ 1.3 is the page's own step, and it says that metals are ignored. | None. |

## Arithmetic and answer checks
- Salpeter, dN/dM ∝ M^−2.35 over 0.1–100 M_⊙:
  - 0.1–1 M_⊙: 95.5% by number ("about 96%", which is fine) and 60.7% by mass ("61%", correct).
  - 8–50 M_⊙: 0.247% by number ("0.25%", correct) and 11.2% by mass ("11%", correct).
- Globular cluster: M = 3 × 25 × 0.003 / 4.30 × 10⁻⁶ = 5.23 × 10⁴ M_⊙ (correct). M/L = 1.74, "≈ 1.7" (correct). This is a plausible value for an old population.
- Isothermal density: ρ = 220² / (4π × 4.30 × 10⁻⁶ × 64) = 1.40 × 10⁷ M_⊙/kpc³, which is 0.014 M_⊙/pc³ and about 0.53 GeV/cm³ (correct).
- Neptune's orbit: 30.07 AU = 1.458 × 10⁻⁷ kpc (correct). The book also gives 1.46 × 10⁻⁷ kpc.
- Mass inside Neptune's orbit: 1.82 × 10⁻¹³ M_⊙ = 3.63 × 10¹⁷ kg (correct). A 70 km sphere of that mass has a density of about 2.0 g/cm³, which is plausible for a rocky or carbonaceous asteroid.
- 0.2 dex = a factor of 1.58, "about 1.6" (correct). 1/(1 − 0.24) = 1.32, "≈ 1.3" (correct).
- Quiz:
  - Q1 answer 1 is correct.
  - Q2 answer 1 (61%) is correct. The distractor "About 11%" is the 8–50 M_⊙ mass share, which is fine.
  - Q3 answer 1 is correct (p. 28: "does not increase to more than ~10 (V band)"; outskirts and clusters "tens to a few hundred").
  - Q4 answer 2 is correct (p. 30).
- Flashcards: all three are correct.
- `npm run calc:test` subset (`pytest tests/calc -k "counting-ordinary-matter or gravitational-lensing or weak-lensing"`): 73 passed.

## Coverage and order
- The page follows the book's order: what goes into the baryonic budget, the passbands, the IMF (bottom-heavy and top-heavy), M/L from colours and spectra, SSP models (BC03 vs MILES, Figure 2.4), metallicity and IMF effects, the ceiling of about 10, degeneracies and 0.2 dex, the maximal disc, gas, then Section 2.5 (globular clusters, tidal stripping, dwarfs, dark-matter-free dwarfs as an open question, the Solar System).
- Left out: Exercise 2.4 (see #2) and the book's specific M 13 King-model exercise (replaced by an original example). Figure 2.4 is described in words only.
- Added: the worked Salpeter fractions (own intervals; the book's exercise uses 10–20 and 0.1–0.5 M_⊙) and the asteroid comparison. Both are fine.

## Licensing
- No paragraphs are copied. The text is rewritten, with only short standard phrases ("age–metallicity degeneracy", "maximal disc", "pressure supported").
- No third-party figures are used. Figure 2.4 is not reproduced.
- Worked examples are original (own intervals, own cluster, Milky Way instead of NGC 4303).
- Attribution and change notes are handled by `TextbookCredit` in `components/Credit.tsx`, and the attribution string in `_course.json` matches the book's required wording. Putting the CC BY-NC 4.0 source into a CC BY-NC-SA 4.0 page is allowed by the licence.

## Notes
- Forward links checked: Section 2.6 is gravitational lensing, and Section 4.7 is "Abundance matching". The book (p. 29) explicitly defers the low-mass star-formation-efficiency argument to Chapter 4 abundance matching. Both `leadsTo` entries are correct.
- The prerequisite `galaxy-clusters` exists.
- "they die within tens of millions of years" (stars of 8–50 M_⊙) is correct general knowledge and is not in the book. That is fine.

## Resolution (2026-11-15, by the page author)

- Warning (Exercise 2.4 and Figure 2.4, M/L against age): the page now says that a population's mass-to-light ratio rises with age as the bright massive stars die first, citing the book's Figure 2.4 and Exercise 2.4. No plot added: a meaningful M/L–age curve needs population-synthesis models, not a formula.
- Info (Salpeter note): now names Exercises 2.3 and 2.4.
- Info (M ≈ 3σ²r/G): the page's own estimate, taken from the truncated isothermal sphere derived on the galaxy-clusters page; no change.
- Info (gc-million): already recorded as page-own in calcs.
- Info (local dark matter density): the page now says it is an upper estimate, because it attributes all of the 220 km/s rotation to dark matter.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
