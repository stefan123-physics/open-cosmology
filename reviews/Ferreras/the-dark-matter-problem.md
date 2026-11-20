---
page: content/year-5/Ferreras/the-dark-matter-problem.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 1, Sections 1.1–1.2, printed pp. 1–13 (read, from fdm.pdf via pdftotext -layout and -raw; maths symbols garbled in the extraction and rebuilt from context)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/ and joviansatfact.html (not fetched; values checked against the book's Table 1.1 and standard values)
verdict: pass-with-notes
---

# Review: The dark matter problem — weighing the sky with gravity

## Differences from the MIT source
(Source here = Ferreras, Chapter 1.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "How we learn about the sky", last paragraph | p. 3: "one particle/physical manifestation that is in front of our eyes and has persistently avoided detection. That is dark matter." | "Ferreras puts it plainly: it is in front of our eyes, and it has persistently avoided detection. That is **dark matter**." This is the book's wording almost word for word (a 6-word overlap check finds it), presented as a paraphrase. | Put the quoted part in quotation marks ("in front of our eyes and has persistently avoided detection") or rewrite it in your own words. |
| 2 | info | "Missing things", Neptune | p. 4: Neptune was found through "observational efforts by John Couch Adams … and Urbain Le Verrier"; "roughly a couple of decades passed" between proposal and confirmation. | Adams and Le Verrier "calculated where an unseen planet would have to be"; found in 1846. Also adds dates the book does not give (Herschel 1781, GR 1915, Pluto 1930). | No change needed. The page's version is historically more accurate (Adams and Le Verrier computed the position; Galle observed it), and the added dates are correct. |
| 3 | info | "Weighing the Sun", plot and text | Fig. 1.2 shows the *mass* estimated from each planet; only Neptune is called slightly off. | Plots *speeds* 2πr/T against the Kepler curve, and says "Only Neptune stands a little apart". | Fine. Recomputed from Table 1.1: Neptune gives 2.039 and Saturn 2.015 (×10³⁰ kg) against about 1.99 for the rest, so Neptune is the clear outlier, as the book says. |
| 4 | info | Worked example "Emptier than any vacuum" | "How about…?" box p. 11: 10⁻¹⁰ mbar = 10⁻⁸ Pa at T = 100 K; dark matter at about ρc, particle mass 100 GeV. | 10⁻⁹ Pa at 293 K; dark matter at ρc, 100 GeV/c². | Fine: the book's exercise is rewritten with its own numbers. Optional: say in the problem that the full ρc (not the "quarter" quoted just above) is used as an upper estimate, as the book's exercise does, so the two statements are not read as contradicting each other. |
| 5 | info | "A density from cosmology" | p. 10: ρc "of the order 10⁻²⁶ kg/m³". | ρc ≈ 9.2 × 10⁻²⁷ kg/m³. | Fine: the page gives the computed value for H₀ = 70, consistent with the book's order of magnitude. |
| 6 | info | Worked example "Weighing Jupiter", step Check | — | "Io's own mass does not matter: it cancels" | Strictly the orbit gives M_J + m_Io; Io is about 5 × 10⁻⁵ of Jupiter's mass. Optional: "is negligible" instead of "cancels". |
| 7 | info | Formula `cite="mit"` | — | Every formula is cited `cite="mit"`, which here resolves to the book's DOI (source.url). | Works with the site's citation mechanism; no change needed. |

Formula checks (all equation numbers and printed pages verified against the page headers in the extraction):
- Eq. (1.1), p. 6: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄_e. Matches (the book's text says the anti-neutrino is needed for lepton number).
- Eq. (1.2), p. 7: F = −G Mm/r² ê_r. Matches, including the minus sign and unit vector.
- Eq. (1.3), p. 8: a = GM/r² = v²/r ⇒ v² = GM/r. Matches.
- Eq. (1.4), p. 10: ρc = 3H₀²/(8πG). Matches.
- Inline σ² ≈ α G M_g/R_g (p. 8): matches the book (garbled in extraction, but "numerical factor not too different from 1" is clear).

## Arithmetic and answer checks
- Earth radii: 384 400/6371 = 60.3 (book: about 60); 1.496 × 10⁸/6371 = 23 481 ≈ 23 500 (book: "nearly 24 thousand"). Correct.
- Planet speeds 2πr/T from Table 1.1 (AU = 1.496 × 10¹¹ m, day = 86 400 s): 47.84, 35.02, 29.79, 24.14, 13.07, 9.69, 6.82, 5.49 km/s. All plot points correct. Kepler curve normalisation √(GM⊙/1 AU) = 29.78 km/s. Correct.
- Solar mass from Table 1.1: mean 1.999 × 10³⁰ kg, standard deviation 0.018 × 10³⁰ kg → (2.00 ± 0.02) × 10³⁰ kg. Matches book and page; 1.98847 × 10³⁰ kg is the book's "official" value.
- Io: T = 1.769 × 86 400 = 1.528 × 10⁵ s; M = 4π²(4.218 × 10⁸)³/(6.674 × 10⁻¹¹ × (1.528 × 10⁵)²) = 1.900 × 10²⁷ kg. Correct; M_J/M⊙ = 9.6 × 10⁻⁴ ("about one thousandth"). Correct.
- ρc for H₀ = 70 km/s/Mpc: 9.20 × 10⁻²⁷ kg/m³ = 5.5 hydrogen atoms per m³ ("roughly five"). Correct.
- 10 Mpc × 70 km/s/Mpc = 700 km/s. Correct.
- 70 kg / (ρc/4) = 3.04 × 10²⁸ m³; cube side 3.12 × 10⁹ m = 3.1 million km = 8.1 Earth–Moon distances. Correct.
- Vacuum: n = 10⁻⁹/(1.381 × 10⁻²³ × 293) = 2.47 × 10¹¹ m⁻³ = 2.5 × 10⁵ cm⁻³. Correct.
- 100 GeV/c² = 1.783 × 10⁻²⁵ kg; n = 9.2 × 10⁻²⁷/1.78 × 10⁻²⁵ = 0.052 m⁻³ = 5.2 × 10⁻⁸ cm⁻³, one per 19.4 m³ ("20 cubic metres or so"). Ratios: 2.5 × 10⁵ (vacuum/ISM) and 1/5.2 × 10⁻⁸ = 1.9 × 10⁷ ("about 20 million"). Correct.
- 1930 → 1956 = 26 years ("a quarter of a century"). Correct.
- Quiz Q1 (only gravity), Q2 (v² = GM/r), Q3 (Mercury/Vulcan), Q4 (negligible except over huge volumes): all marked answers and explanations correct. Q4's explanation (cube about 3 million km) agrees with the text.
- Flashcards: all three correct.
- `npm run calc:test` subset for this page passes (65 tests passed for the three reviewed pages together).

## Coverage and order
- Order follows the book: 1.1 (light and other messengers → dark matter avoids detection → four forces → historical "missing" cases: Neptune, Vulcan, Planet X, neutrino, the Sun's energy → weighing the Sun → critical density → "How about…?") then 1.2 (multidisciplinary problem, chapter overview). Matches.
- Left out (info only): Figure 1.1 (Uchuu simulation, "Courtesy of" a third party — correctly not used) and its caption's definitions of parsec and megaparsec and the 0.76 Mpc Milky Way–Andromeda distance; Figure 1.3 (Tait 2015, third party — correctly not used); the Cowan–Reines detail ("Project Poltergeist", inverse beta decay); the forward reference to the "How about…?" box on dark matter in the Solar System in Chapter 2.
- Added: the Kepler-third-law form M = 4π²r³/(GT²), the Io worked example, and the note on the 8.286/8.902 overlap with Chapter 5. All correct and clearly the page's own.

## Licensing
- The book is CC BY-NC 4.0; adapting it into a CC BY-NC-SA 4.0 page is allowed with attribution and a statement of changes, which `components/Credit.tsx` provides for textbook pages (attribution text in `_course.json`).
- No third-party figure is used (Figs 1.1 and 1.3 are credited to others in the book; neither appears). The plot is generated from formulas; the planet data are NASA factual values via the book's Table 1.1.
- Verbatim check (6-word overlaps): only short phrases ("by Clyde Cowan and Frederick Reines", "between two masses M and m") plus the near-quotation in finding 1.

## Notes
- Forward links: `leadsTo` 2.2 (rotation-curves) and 2.3 (galaxy-clusters) exist and the reasons are accurate; the claim that dark matter was first proposed in the clusters in the 1930s matches Section 2.3 (Zwicky 1933).
- The cosmology callout's description of 8.286 and 8.902 is a fair summary of those pages (8.902 Lecture 19 covers hot vs cold dark matter).
- Prerequisites `universal-gravitation` (8.01) and `open-closed-flat` (8.286) exist.

## Resolution (2026-11-15, by the page author)

- Warning (near-quote, p. 3): the sentence is rewritten in our own words ("It is all around us, yet no detector of any kind has registered it"); no attribution-style paraphrase remains.
- Info (Io's mass): now "Io's own mass is negligible here (about 0.005% of Jupiter's)"; the figure is recomputed in calcs (io-mass-fraction).
- Info (vacuum example uses the full ρ_c): the problem now says the full critical density is taken as a round upper figure and that dark matter is about a quarter of it.
- Info (historical dates not in the book): kept; they are standard and correct, as the review confirms.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
