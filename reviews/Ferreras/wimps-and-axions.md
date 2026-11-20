---
page: content/year-5/Ferreras/wimps-and-axions.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 6, Sections 6.4–6.5, printed pp. 143–147 (read, from fdm.pdf via pdftotext -layout and -raw -enc UTF-8; maths symbols garbled in the extraction and rebuilt from context; the PDF could not be rendered as images because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: WIMPs and axions — the leading cold candidates

## Differences from the MIT source
(Source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | info | Formula "WIMP relic density" (Eq. 6.10) and following paragraph | Eq. (6.10): Ω_WIMP h² ≈ 0.1 (2 × 10⁻²⁶ cm³ s⁻¹/⟨σv⟩) ≈ 0.1 (0.01/α)² (m_χ/100 GeV)^? — the extraction shows the square on the (0.01/α) factor but not clearly on the mass factor; the text then speaks of "the degeneracy m/α²" (extraction reads "m /α 2"; uncertain whether this is (m/α)² or m/α²) | (0.01/α)² (m_χ/100 GeV)², "depends only on the combination m_χ/α" | The page's form is the one consistent with the book's own assumption ⟨σv⟩ ∝ α²/m² (relic density ∝ 1/⟨σv⟩ ∝ m²/α²). If the printed book has m/α² or a linear mass factor, that is a book slip, and the page is right to differ; consider a short bracket saying so once checked against the rendered PDF. Uncertain. |
| 2 | info | "Supersymmetry" paragraph | "The difference between such a pair is called R-parity … an sparticle cannot decay into a Standard Model particle" (p. 145) | "If a quantity called R-parity is conserved, a superpartner cannot decay into Standard Model particles alone" | The page silently corrects loose wording in the book (R-parity is a multiplicative quantum number, and the forbidden decays are those into SM particles only). Fine physics; optionally note the difference briefly (writing rule 4). |
| 3 | info | Axion mass limits, second bullet | "axions with a stronger coupling to electrons are ruled out with masses m_a [symbol lost] 10⁻² eV" (p. 147) | "excluded above about 10⁻² eV" | The relation symbol is lost in the extraction; "above" is the physically sensible reading (heavier axions couple more strongly). Uncertain, no change suggested. |
| 4 | info | Worked example, step 2 | Book: stronger interactions "would also produce signatures in a direct detection experiment" (p. 144) | "Such a particle would interact much more readily in a detector" | Follows the book. Strictly, the annihilation ⟨σv⟩ ∝ α²/m² is the same for both particles; the detector (scattering) rate depends on the model. Optional: "with a ten-times stronger coupling, it would be expected to interact more readily". |
| 5 | info | Axions, second paragraph | Book gives a reason for the small mass: it "cannot be too large in order to agree with the observational evidence at the electroweak scale" (p. 146) | "it must be small, typically well below 1 eV" | Reason omitted; acceptable. |

Formula citation: Eq. (6.10) is on printed p. 144 ✓. The supersymmetry text runs pp. 144–145 and the axion section pp. 146–147 (calcs file sources match).

## Arithmetic and answer checks
- Eq. (6.10) at reference values: 0.1 × (0.01/0.01)² × (100/100)² = 0.1 ✓; consistent with Ω_dm h² ≈ 0.12 within the formula's precision ("lands on the observed density" ✓).
- Worked example: m_χ/α = 100/0.01 = 10⁴ GeV ✓; α = 1000/10⁴ = 0.1 ✓ ("ten times stronger" ✓). Check: (0.01/0.1)² × (1000/100)² = 1, same density ✓; and α²/m² = 10⁻⁸ GeV⁻² for both ✓.
- Quiz 1 (answer 1, 2 × 10⁻²⁶ cm³/s from Eq. 6.10 ✓), quiz 2 (answer 1, WIMPless miracle, p. 144 ✓), quiz 3 (answer 1, R-parity, p. 145 ✓), quiz 4 (answer 1, strong CP, θ ≲ 10⁻¹⁰, p. 146 ✓): all marked answers and explanations correct.
- Flashcards: relic-density card ✓; LSP card ✓ (Higgs 125 GeV, 2012; no superpartners at LHC, p. 145); axion card ✓ (0.5 eV–200 keV from red giants; below ~10⁻³ eV with supernovae and laboratory searches, p. 147).
- Other numbers: 0.1–1 TeV WIMP scale ✓ (p. 145); axion range 10⁻¹² eV–1 MeV ✓ (p. 146); five classes of superpartners (squarks, gluinos, charginos, neutralinos, sleptons) ✓.
- `npm run calc:test` subset: passed (43 tests across the three pages).

## Coverage and order
- Order follows the book: 6.4 (definition and requirements → Eq. 6.10 and WIMP miracle → degeneracy and WIMPless miracle → sterile neutrino/SUSY candidates → R-parity, LSP, neutralino, sneutrinos excluded → Higgs 2012 and LHC) → 6.5 ((pseudo-)Nambu–Goldstone bosons with the footnote's meaning of "pseudo" → θ term and strong CP → Peccei–Quinn → mass, ALPs → thermal vs non-thermal production → mass range → stellar processes and limits).
- Left out: Exercise 6.2 (freeze-out temperature of a 100 GeV particle) — exercises not required. Nothing substantive from the text is missing.
- Added: an original worked example on the m/α degeneracy; link to the 8.286 Higgs page.

## Licensing
- Source CC BY-NC 4.0 → page CC BY-NC-SA 4.0 with the textbook credit footer (attribution, licence, changes) ✓.
- Figure 6.4 is not reproduced ✓.
- 6-word overlap check found only standard phrases ("non relativistic at freeze out", "a superpartner with the opposite statistics", "squarks gluinos charginos neutralinos and sleptons", "in the mass range of the Large Hadron Collider"); no copied sentences or paragraphs ✓.
- No OpenStax/LibreTexts material ✓.

## Notes
- Forward link: `leadsTo` Ferreras 6.6 ("direct, indirect and collider searches for WIMPs, and cavity searches for axions") matches Section 6.6 ✓. No cosmology callout. Prerequisites `dark-matter-particles` and `higgs-field` exist.
- The page states the Higgs discovery and LHC non-detections as in the book (2025), which is current; no post-2013 attribution issue arises since the source is 2025.

## Resolution (2026-11-15, by the page author)

- No warnings. Info items accepted: the (m/α)² scaling follows from the book's own ⟨σv⟩ ∝ α²/m², and the R-parity wording is the standard definition.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Eq. 6.10 now in the book's form, Ω h² ~ 10⁻²⁶ cm³ s⁻¹/⟨σv⟩ ≃ 0.1(0.01/α)²(m/100 GeV). The book writes m to the first power, but its own ⟨σv⟩ ∝ α²/m² gives m², so the square is kept with a bracketed note. Quiz 1, flashcard 1 and the summary use the book's 10⁻²⁶ benchmark. A new calc (wimp-weak-cross-section) checks that α = 0.01 and m = 100 GeV give about 0.1.
