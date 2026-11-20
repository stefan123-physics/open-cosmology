---
page: content/year-5/Ferreras/rotation-curves.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 2 intro and Sections 2.1–2.2, printed pp. 14–23 (read, from fdm.pdf via pdftotext -layout and -raw; maths symbols garbled in the extraction and rebuilt from context; no page images could be rendered)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: pass-with-notes
---

# Review: Rotation curves — the flat signature of dark matter

## Differences from the MIT source
(Source here = Ferreras, Sections 2.1–2.2.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning (uncertain) | "A spherical galaxy", Formula "Potential of a spherical mass distribution", cited Eq. (2.2), p. 15 | The extraction of Eq. (2.2) is garbled, but its pieces (a term GM(r)/r, an integral with d³r′ and a lower limit r′ > r, a denominator r′) point to the standard form Φ(r) = −GM(r)/r − G ∫_{r′>r} ρ(r′)/r′ d³r′. | Φ(r) = −G ∫_r^∞ M(r′)/r′² dr′ | The two are mathematically identical for a finite total mass (integration by parts), so the physics is right. If the book's form is as reconstructed, either show that form or add "(equivalent form)" to the label. Check against the PDF image; I could not render it. |
| 2 | warning | Summary, last bullet | p. 22–23: L_i ∝ v_MAX^{α_i} (α_i ≈ 4, passband-dependent); the baryonic version relates stellar plus gas *mass* to v_MAX. | "The (baryonic) Tully–Fisher relation, L ∝ v_max⁴" | The baryonic relation is about mass, not luminosity. Write e.g. "The Tully–Fisher relation, L ∝ v_max⁴ (and its tighter baryonic version for M_stars + M_gas)". |
| 3 | info | "Gravity as a potential" | p. 15: F_g = −∇Φ (force per unit mass). | F = −m∇Φ for a particle of mass m. | Fine: the page's version is the force itself and is correct. |
| 4 | info | "From the rotation curve to the mass", gravothermal sentence | p. 19: an isothermal profile corresponds to "the equivalent of thermodynamic equilibrium"; "a gravitating system achieving complete equilibrium results in collapse (gravothermal catastrophe)". | "Complete equilibrium is in fact impossible for gravity: such a system keeps contracting". | Fair paraphrase; no change needed. |
| 5 | info | Worked example "The spider pattern" | Exercise 2.1, p. 21: show v(R) cos φ sin i. | Worked solution of the same exercise. | Fine: the exercise is the book's, but the solution and the 60°/200 km/s example are the page's own. The derivation is correct (velocity v(−sin φ, cos φ, 0) in the disc; tilt about the major axis; line-of-sight component v cos φ sin i). |
| 6 | info | Plot | Book's Fig. 2.1 compares point mass, uniform sphere and isothermal sphere with NGC 4303 data (data courtesy Prof. Sofue; image NASA/ESA). | Own plot: Hernquist-like stellar curve plus cored isothermal halo, added in quadrature. | Fine and not copied. Formulas checked: v² = G M⋆ r/(r+a)² with G M⋆ = 43 000 × M⋆[10¹⁰ M⊙] (km/s)² kpc, and v² = v₀²[1 − (r_c/r) arctan(r/r_c)]. Minor: with M⋆ = 15 and a = 1 the stellar curve peaks near 400 km/s, above the 300 km/s y-range, so it is clipped. |

Formula checks (equation numbers and printed pages verified against the page headers in the extraction):
- Eq. (2.1), p. 15: ∇²Φ = 4πGρ. Matches.
- Eq. (2.2), p. 15: see finding 1 (page and number correct; form possibly different).
- Eq. (2.3), p. 15: a(r) = −GM(r)/r² ê_r. Matches.
- Eq. (2.4), p. 16: M(r) = 4π∫₀^r ρ(s)s²ds = r v_c²(r)/G. Matches.
- Eq. (2.5), p. 19: λ_obs = λ₀(1 + v/c). Matches.
- Eq. (2.6), p. 22: L_i ∝ v_MAX^{α_i}. Matches.

## Arithmetic and answer checks
- 1 kpc = 3.0857 × 10¹⁹ m ("about 3 × 10¹⁹ m"); Sun at 8 kpc (book footnote 2). Correct.
- G = 4.30 × 10⁻⁶ kpc (km/s)² M⊙⁻¹: matches the book (p. 18) and the SI value.
- Worked example: M = 40 × 180²/4.30 × 10⁻⁶ = 3.01 × 10¹¹ M⊙. 5 × 10¹⁰/3.01 × 10¹¹ = 0.166 (a sixth), dark fraction 83%. Visible mass alone: √(4.30 × 10⁻⁶ × 5 × 10¹⁰/40) = 73.3 km/s. All correct.
- Spider example: 200 × sin 60° = 173.2 km/s. Correct.
- NGC 2841: 35 × 300²/4.30 × 10⁻⁶ = 7.33 × 10¹¹ M⊙ (book: 7.3 × 10¹¹). log(L_V/L⊙) = (4.83 + 22.3)/2.5 = 10.85. M/L_V = 7.33 × 10¹¹/7.11 × 10¹⁰ = 10.3 ≈ 10. All correct.
- Quiz Q1 (isothermal sphere), Q2 (3 × 10¹¹ M⊙: same numbers as the worked example, correct), Q3 (Doppler, S shape), Q4 (luminosity vs maximum speed, roughly v⁴): all marked answers and explanations correct.
- Flashcards: all three correct.
- `npm run calc:test` subset for the three reviewed pages passes (65 passed).

## Coverage and order
- Order follows the book: 2.1 (Poisson equation, distribution function, FoGDFE) → 2.2 (spherical potential and acceleration → hot vs cold systems → Eq. 2.4 → three simple curves → Vera Rubin, quadrature, isothermal anchor, gravothermal catastrophe → measuring: Doppler, long slit, IFU, Exercise 2.1 → NGC 2841 → planetary nebulae and globular clusters → Tully–Fisher, BTFR, fine-tuning, MOND). Matches. The NGC 2841 paragraph is moved before "Measuring a rotation curve" (the book has it after Exercise 2.1); harmless.
- Left out (info): the "How about…?" box on pp. 18–19 (Moon's orbit → Earth mass ≈ 5.7 × 10²⁴ kg; Sun at 8.5 kpc and 220 km/s → Milky Way mass ≈ 10¹¹ M⊙, recomputed 9.6 × 10¹⁰ M⊙). The G-in-astronomical-units part is used. Optional: a sentence on the Milky Way estimate would cover the box.
- Left out (info): description of Figs 2.2 and 2.3 details ([N II]/Hα and [S II] lines; the arctan model in Fig. 2.3 caption). Figures are third-party/courtesy and correctly not used.
- Added: the dark-fraction worked example and the interactive plot (own material).

## Licensing
- No third-party figures used (Fig. 2.1 Sofue/NASA-ESA, Fig. 2.2 courtesy Dr Böhm/ESO, Fig. 2.3 SAMI/SDSS are not reproduced). Plot generated from formulas.
- Verbatim check (6-word overlaps): only the companion book's title and short standard phrases ("in regions with very little gas", "the maximum speed of the rotation curve", "over a wide range of galaxy masses"). No copied paragraphs.
- CC BY-NC → CC BY-NC-SA adaptation with attribution and changes statement via `components/Credit.tsx`: fine.

## Notes
- Forward links: `leadsTo` 2.3 (galaxy-clusters), 3.2 (dark-matter-halos) and 7.2 (mond) exist; the reasons match the book (Chapter 3 gives the real halo profile; MOND proponents read the BTFR as evidence against CDM, p. 23).
- "As the next pages show" (stellar M/L cannot reach 10) is borne out by Section 2.4 and the counting-ordinary-matter page.
- Prerequisites `the-dark-matter-problem` and `doppler-effect` (8.286) exist.
- The book's citation "de Block et al. 2007, AJ, 136, 2648" is not repeated on the page; nothing to fix.

## Resolution (2026-11-15, by the page author)

- Warning (Eq. 2.2 form, uncertain): the formula is labelled "(an equivalent form)"; the page's −G∫_r^∞ M(r′)/r′² dr′ equals the book's two-term form, as the review notes.
- Warning (summary): now distinguishes the Tully–Fisher relation (luminosity) from its baryonic version (stellar plus gas mass against v_max); calcs quote updated.
- Info (the book's "How about…?" box on pp. 18–19 not reproduced): left out on purpose; its idea (G in astronomical units, weighing a galaxy from one orbit) is covered by the original worked example. Plot clipping above 300 km/s at extreme slider values: accepted.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Eq. 2.2 now in the book's form, Φ = −G∫ρ/|r′−r| d³r′ = −GM(<r)/r, with a note that the last form holds where no mass lies outside r (the general form, −G∫_r^∞ M/r′² dr′, is given in the note). The earlier "uncertain" finding is settled.
