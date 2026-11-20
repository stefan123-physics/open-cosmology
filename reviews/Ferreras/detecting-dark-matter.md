---
page: content/year-5/Ferreras/detecting-dark-matter.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 6, Section 6.6, printed pp. 147–156 (read, from fdm.pdf via pdftotext -layout and -raw -enc UTF-8; maths symbols garbled in the extraction and rebuilt from context; the PDF could not be rendered as images because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: Detecting dark matter — direct, indirect and at colliders

## Differences from the MIT source
(Source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "Production at colliders" | "the run at the LHC that led to the discovery of the Higgs boson achieved a peak luminosity of ~2 × 10³⁴ cm⁻² s⁻¹, producing 1 Higgs boson per second" (p. 156) | Same figures, as "during the Higgs discovery the LHC reached a peak luminosity of about 2 × 10³⁴" | Faithful to the book, but the figure looks inaccurate for the 2012 discovery run: to my knowledge the 2012 peak was about 7.7 × 10³³ cm⁻² s⁻¹, and ~2 × 10³⁴ was reached only in Run 2 (2017–18). Not verified here (no outside sources fetched), so uncertain. Suggest attributing it ("Ferreras quotes …") or rephrasing as "at peak luminosities of order 10³⁴ cm⁻² s⁻¹, the LHC makes roughly one Higgs boson per second". |
| 2 | info | "Indirect detection", first paragraph | "cosmic rays (ground-based Cherenkov-light detectors such as MAGIC or the Cherenkov Telescope Array)" (p. 154) | Cherenkov telescopes "see the showers of very energetic photons in the atmosphere" | The page's description is physically the more accurate one (MAGIC and CTA are gamma-ray telescopes that image air showers), but it differs from the book without saying so. Fine to keep; optionally note it. |
| 3 | info | Line width after Eq. (6.17) | σ_λ ≈ 2λ₀ v/c with v "the typical velocity" of the particles (p. 154) | σ_λ ≈ 2λ₀ σ_v/c | Notation change only (σ_v is the dispersion defined for Eq. 6.12); the 10⁻³ relative width follows either way. |
| 4 | info | Event rate per unit detector mass | "R ~ ρσ⟨v⟩/(A m_? m_?), where A is the atomic number" (p. 150; mass subscripts garbled, uncertain) | ρ_χσ⟨v⟩/(A m_p m_χ), "A the mass number" | The page's form is the physically correct one (n_χ = ρ_χ/m_χ, and A m_p is the mass of one nucleus), and "mass number" is correct where the book says "atomic number". Optionally mark the correction in a bracket. Same for Eq. (6.13). |
| 5 | info | Text before Eq. (6.11) | Book derives Eq. (6.11) from a recoil momentum ~2m_χ v (valid for m_χ ≪ m_N), evaluated at m_χ = m_N = 100 GeV | Adds "(for m_χ well below m_N)" | The caveat is correct, but the formula's own reference values (100 GeV and 100 GeV) are not "well below". Also, the 50 keV prefactor corresponds to v ≈ 150 km/s in 2m_χ²v²/m_N (at 230 km/s it would be ~120 keV). Consider "an order-of-magnitude estimate, for v of order the halo dispersion" instead. |
| 6 | info | Order in "Direct detection" | Book order: Eq. (6.11) → detection techniques, LUX/LZ, CDMS → sensitivity curve shape → neutrino floor → underground backgrounds → event rate, SI/SD → Eqs. (6.12)–(6.13) → v_max, v_min → Exercise 6.4 / Eq. (6.14) → Eqs. (6.15)–(6.16), DAMA/LIBRA → crystals vs xenon, future detectors | Eq. (6.14) first, then (6.11), techniques, worked example, event rate, (6.12)–(6.13), limits and curve shape, neutrino floor, underground, modulation | Reordered for a cleaner derivation (exact recoil formula before the estimate). Acceptable; every element is present. |

Formula citations all match the printed page headers: Eq. (6.11) p. 149; Eqs. (6.12)–(6.14) p. 151 (6.14 is in Exercise 6.4, p. 151); Eqs. (6.15)–(6.16) p. 152; Eqs. (6.17)–(6.18) p. 154. Reconstructed forms agree with the page: E_R = μ²v²(1 − cos θ)/m_N; Maxwellian f(v) = (2πσ_v²)^{−3/2} exp(−v²/2σ_v²); f_LAB(v) = f_GLX(v + v_⊙ + v_⊕) (signs garbled in extraction); R = R₀ + R₁ cos[ω(t − t₀)], ω = 2π/yr; Gaussian line with λ₀ = h/(m_χ c); Γ_a = n_χ²⟨σv⟩, Γ_d = n_χ/τ_dec. v_min = √(m_N E_th/(2μ²)) follows from E_R,max = 2μ²v²/m_N ✓.

## Arithmetic and answer checks
- Recoil example: μ = 12 200/222 = 54.95 ≈ 55 GeV ✓; v/c = 230/299 792 = 7.67 × 10⁻⁴ ≈ 7.7 × 10⁻⁴ ✓; E_R = 2 × 55² × (7.7 × 10⁻⁴)²/122 = 2.92 × 10⁻⁵ GeV ≈ 29 keV ✓ (unrounded: 29.1 keV). Xenon nucleus ≈ 131.3 u × 0.9315 GeV/u = 122.3 GeV ✓.
- Quiz 4: same numbers, marked "About 30 keV" ✓.
- Event-rate example: n_χ = 0.3/100 = 3 × 10⁻³ cm⁻³ ✓; 1000/131 × 6.022 × 10²³ = 4.60 × 10²⁴ nuclei kg⁻¹ ✓; 3 × 10⁻³ × 10⁻⁴² × 2.3 × 10⁷ × 4.6 × 10²⁴ = 3.17 × 10⁻¹³ s⁻¹ kg⁻¹ ≈ 3.2 × 10⁻¹³ ✓; × 3.156 × 10⁷ s = 1.0 × 10⁻⁵ kg⁻¹ yr⁻¹ ✓ = 0.010 per tonne-year = one per 100 tonne-years ✓. (0.3 GeV cm⁻³ is the book's local density, Exercise 6.3, p. 148 ✓.)
- Relative line width: 2σ_v/c with σ_v ~ 150 km/s gives 10⁻³ ✓.
- Quiz 1–3: marked answers (1, 1, 1) correct; explanations consistent with pp. 149–152 (Earth's ~30 km/s, Sun ~200 km/s; DAMA/LIBRA unconfirmed) ✓.
- Flashcards: three strategies ✓; rate formula ✓ (with the A m_p m_χ form, finding 4); annual modulation ✓.
- Facts: v_esc ≈ 500 km/s ✓; DAMA 1–10 GeV, ~10⁻⁴⁰ cm² ✓; neutrino-floor drop near 10 GeV ✓; thermal benchmark ~10⁻²⁶ cm³ s⁻¹ ✓ (p. 155); LHC 13 TeV ✓; LZ/LUX 10²–10³ kg ✓; thresholds ~1 keV ✓.
- `npm run calc:test` subset: passed (43 tests across the three pages).

## Coverage and order
- Section structure follows the book: introduction (cross-section, "square one", upper limits) → direct detection → indirect detection → particle production → axion detection. Internal reordering within direct detection is noted in finding 6.
- Left out (minor): the differential rate dR/dE ∝ dσ/dE (p. 151); that dark matter dragged along with the solar neighbourhood would weaken the modulation (p. 152); the alternative indirect channels (excited states, mass splitting; p. 154); the explicit line-flux expression F₀ ∝ ∫ d³r n_χ²/r² (the page states the n_χ² scaling); the solar motion's ~200 Myr variation timescale; GEODM by name (the page says "tonne-scale germanium detectors"); Exercises 6.3–6.4 and the "How about …?" box (not required).
- Added: two original worked examples (recoil energy; event rate per tonne-year).

## Licensing
- Source CC BY-NC 4.0 → page CC BY-NC-SA 4.0 with the textbook credit footer (attribution, licence, changes) ✓.
- Figures 6.4, 6.5 (LUX/LZ limits) and 6.6 (from Abdallah et al. 2015) are not reproduced ✓.
- 6-word overlap check found only "the event rate per unit detector mass is" and "solar neutrinos (from ⁷Be and ⁸B)": standard phrases, no copied sentences or paragraphs ✓.
- No OpenStax/LibreTexts material ✓.

## Notes
- Forward link: `leadsTo` Ferreras 7.2 ("if no particle is ever found: the alternative of modifying gravity") is fair — Chapter 7 presents MOND as the alternative, and the `mond` page is lecture 7.2. No cosmology callout.
- Finding 1 rests on my own knowledge of LHC history, not on a source read in this review; treat it as uncertain until checked.

## Resolution (2026-11-15, by the page author)

- Warning (LHC luminosity during the Higgs discovery): now attributed ("Ferreras quotes that…"), because the reviewer could not confirm the figure.
- Info (caveat on Eq. 6.11): "for m_χ well below m_N" replaced by "a rough scaling; the exact prefactor depends on the halo speed assumed".
- Info (Cherenkov telescopes, line width with σ_v, mass number vs atomic number, reordering, omitted dR/dE): accepted. The page's statements are the physically correct ones.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Eq. 6.12: the book uses the one-dimensional normalisation 1/(σ_v√2π). The page keeps the three-dimensional (2πσ_v²)^(−3/2), which is the one that integrates to 1 over d³v, and says so in a note.

## Change after review (2026-11-15, by the page author, owner's request)

- Section on indirect detection: one sentence added after Eq. (6.17) saying that F₀ is a photon flux (photons per unit area per unit time; photons cm⁻² s⁻¹ in gamma-ray work) and F(λ) the same per unit wavelength. The book gives no unit; the sentence is marked as the page's reading, from F₀ counting annihilations (the book's expression after Eq. 6.17). No formula or number changed.
