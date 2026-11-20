---
page: content/year-5/Ferreras/galaxies-in-halos.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Sections 4.5–4.7, printed pp. 94–102 (read, from the local fdm.pdf via pdftotext -layout and -raw; maths symbols are garbled in the text extraction, so the display equations were rebuilt by decoding the PDF content streams of printed pp. 94, 96–99 glyph by glyph with their SymbolMT glyph names and positions; page images could not be rendered because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: needs-changes
---

# Review: Galaxies in halos — mass functions, halo occupation and abundance matching

## Differences from the MIT source
(Source here = Ferreras, Chapter 4, Sections 4.5–4.7.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | error | Eq. (4.18) "Satellite galaxies", the plot and the worked example | p. 98: N_SAT = (M/M₁)^α above the cut-off M₀, and 0 below it. The decoded glyph stream of the numerator contains only "M" (no minus sign and no M₀; the page's fonts have no minus glyph in that region). | N_sat = ((M − M₀)/M₁)^α for M > M₀ (the Zheng et al. 2005 form), cited as Eq. (4.18). | Either write the book's form (M/M₁)^α, M > M₀, or keep (M − M₀)/M₁ and say it is the common variant of the literature, not Ferreras's Eq. (4.18). If the book's form is used, update the plot expression and the worked example: (10¹⁴/10¹³·³) = 5.01, ⟨N⟩ ≈ 6 (unchanged to the quoted precision), and calcs/Ferreras/galaxies-in-halos.yaml (nsat-cluster). |
| 2 | warning | Abundance matching bullets, quiz 4, flashcard 3, worked example "Where are a halo's baryons?", summary | p. 102 and Fig. 4.3: the ratio plotted is M_s/M_DM, compared with "the original 18.6% fraction" / "cosmological limit". 18.6% equals Ω_b/Ω_DM (0.0224/0.120 = 0.187), i.e. baryons relative to dark matter. | Calls 18.6% the "cosmic baryon fraction" and treats it as a fraction "of the halo mass"; the worked example takes 0.186 × (halo mass) as the baryons the halo started with. | The usual cosmic baryon fraction Ω_b/Ω_m is ≈ 0.157–0.16. Say "18.6% — the cosmic ratio of baryons to dark matter (Ferreras's 'cosmological limit')", and in the worked example call 10¹² M☉ the dark matter mass (or use f_b ≈ 0.16 for a total halo mass, giving 1.6 × 10¹¹ M☉ and an efficiency ≈ 0.19). The "about a sixth" conclusion follows the book either way. |
| 3 | info | Eq. (4.18), condition | p. 98: the decoded comparison glyph in the first case is "≤" (SymbolMT 0xA3), with "<" in the second; this looks like a typesetting slip in the book (uncertain, from glyph decoding only). | M > M₀ / M ≤ M₀ | The page's conditions are the sensible ones; no change needed. If the book really prints ≤ in the first case, a bracket note is optional. |
| 4 | info | Eqs. (4.19)–(4.20) citation | Both equations are on printed p. 99; L_MIN is defined at the top of p. 100. | "pp. 99–100" | Acceptable; "p. 99" would be exact. |
| 5 | info | HOD paragraph | p. 98: "the average number is approximately 1 around the threshold mass chosen". | Same; the worked example then gives ⟨N⟩ = 0.5 at M_min. | Not a contradiction (with the erf form N_cen = ½ exactly at M_min), but a reader may notice; one clause ("reaching 1 just above M_min") would help. |
| 6 | info | HOD paragraph | p. 97–98: "Statistically, a more massive halo forms later, and has lower concentration" (the reason halo mass is the main HOD variable). | Not mentioned. | Optional. |
| 7 | info | Worked example, step Stars | — | 3 × 10¹⁰ M☉ "roughly the Milky Way's stellar mass" | The Milky Way's stellar mass is usually quoted as about 5–6 × 10¹⁰ M☉; "roughly" covers it, "about half the Milky Way's stellar mass" would be more accurate. |
| 8 | info | Constraining the simulations, list | p. 95: the GSMF constraint is "normally considered at present time (low redshift)". | "further tests are needed, usually at low redshift where data are best" | The book says this of the GSMF, not of the further tests; small shift, harmless. |

Formula checks (equation numbers and printed pages checked against the running page headers; printed p = PDF p − 14):
- Eq. (4.13), p. 94: Φ(M) = Φ₀ (M/M*)^α e^{−M/M*}. Matches.
- Eq. (4.14), p. 96: ξ(r) = (r/r₀)^{−γ}. Matches. r₀ ≈ 3–5 Mpc on p. 97; γ ≈ 1.8 from Exercise 4.4 (p. 98). Matches.
- Eq. (4.15), p. 97: b(r) ≡ [ξ_g(r)/ξ_DM(r)]^{1/2}. Matches. The page's explanation (b defined on δ, ξ quadratic in δ) is the content of Exercise 4.4 (δ = ρ/ρ̄ − 1, b = δ_g/δ_dm). Correct.
- Eq. (4.16), p. 98: ⟨N⟩(M_h) = Σ_{N=0}^∞ N P(N | M_h). Matches.
- Eq. (4.17), p. 98: N_CEN = ½[1 + erf((log M − log M_min)/σ_log M)]. Matches.
- Eq. (4.18), p. 98: see row 1.
- Eq. (4.19), p. 99: Φ(L) = ∫₀^∞ Φ(L | M_h) n(M_h) dM_h. Matches.
- Eq. (4.20), p. 99: ⟨N⟩(M_h) = ∫_{L_MIN}^∞ Φ(L | M_h) dL. Matches.

## Arithmetic and answer checks
- N_cen at M_min: ½(1 + erf 0) = 0.5. Correct (worked example, quiz 3).
- N_cen at 10¹⁴ M☉: (14 − 12)/0.2 = 10, erf 10 = 1, N_cen = 1. Correct.
- N_sat (page's form): (10¹⁴ − 10¹²)/10¹³·³ = 4.96 ("≈ 5.0"); ⟨N⟩ = 5.96 ("≈ 6"). Correct for the page's formula; book's form gives 5.01 and 6.01 (row 1).
- 3/18.6 = 0.161 ("about a sixth", "≈ 0.16"). Correct.
- 0.03 × 10¹² = 3 × 10¹⁰; 0.186 × 10¹² = 1.86 × 10¹¹ ("≈ 1.9 × 10¹¹"); 3 × 10¹⁰/1.86 × 10¹¹ = 0.161. Correct (interpretation: row 2).
- z = 1.5 at "about 4 billion years": book p. 102 says 4 Gyr; flat ΛCDM with Ω_m ≈ 0.3, H₀ ≈ 70 gives ≈ 4.2 Gyr. Correct.
- Plot: expressions implement Eqs. (4.17) and the page's (4.18) with M₀ = M_min, as the caption says; default parameters match the worked example.
- Quiz 1 (answer 1, GSMF): correct per p. 94. Quiz 2 (answer 1, bias): correct per p. 97. Quiz 3 (answer 1, 0.5): correct. Quiz 4 (answer 1, about one sixth): correct per p. 102; explanation's feedback attribution (SNe at low mass, AGN at high mass) per pp. 88 and 102.
- Flashcards: Schechter form, 1-halo/2-halo switch at 1–2 Mpc (p. 97), abundance-matching result (p. 102). Correct, apart from the "cosmic baryon fraction" wording (row 2).
- `pytest tests/calc -k "simulating-galaxy-formation or galaxies-in-halos"`: 35 passed.

## Coverage and order
- Follows the book's order: 4.5 (dark matter part reliable; subgrid calibration; GSMF and Schechter; degeneracy; size–mass, morphology–mass, Tully–Fisher and baryonic TF, age/metallicity–mass, colour bimodality) → 4.6 (HOD motivation, threshold, centrals and satellites, ξ(r), 1-halo/2-halo, bias, halo bias, Eqs. 4.16–4.18, mock catalogues, Bernoulli/Poisson, assembly bias and fossil groups, CLF Eqs. 4.19–4.20) → 4.7 (abundance matching, Moster et al. 2010, 3% vs 18.6%, z = 1.5, WHIM and ICM, downsizing).
- Left out: Exercise 4.4 (bias from δ; relation between n and γ) — partly used in the bias explanation; the remark that halo bias traces the fraction of diffuse dark matter; the remark that CDM predicts many dwarf satellites in Milky-Way halos (only "miss faint dwarfs" kept); "more massive halos form later and are less concentrated" (row 6). Nothing essential.
- Added: an original HOD plot (generated from the formulas), and two original worked examples.

## Licensing
- Source is CC BY-NC 4.0; adaptation into this CC BY-NC-SA 4.0 page is allowed with attribution (footer from components/Credit.tsx, TextbookCredit; not checked in a rendered build).
- Figure 4.3 (based on the Moster et al. 2010 relation) is not reproduced; only its numbers are quoted with attribution. The HOD plot is the site's own, generated from formulas. Correct.
- No copied paragraphs found; "blue cloud ... red sequence" and similar phrases are standard terminology.
- No OpenStax or LibreTexts material.

## Notes
- Forward link: leadsTo Ferreras 7.3 ("MOND's view of the scaling relations, such as the baryonic Tully–Fisher relation"). Section 7.3 is covered by mond-tests (syllabus coveredBy), which discusses the Tully–Fisher and baryonic Tully–Fisher relations (Eq. 7.9). Correct and fairly attributed; the in-text "(Chapter 7)" matches the book's p. 95 pointer.
- "assembly bias again" refers back to dark-matter-halos, which introduces the term. Fine.
- Row 1 rests on decoding the PDF glyph stream, not on a rendered page image; the absence of any minus sign and of a second M₀ in the numerator of Eq. (4.18) makes it high-confidence, but a glance at printed p. 98 would settle it.

## Resolution (2026-11-15, by the page author)

- Error (Eq. 4.18): the satellite term now uses the book's form, (M/M₁)^α for M > M₀. The plot, the worked example (N_sat = 10¹⁴/10^13.3 ≈ 5.0, so ⟨N⟩ ≈ 6 is unchanged) and calcs (nsat-cluster, n-total-cluster) all follow it, and the plot caption mentions the (M − M₀)/M₁ variant used by some authors.
- Warning (18.6% is the baryon-to-dark-matter ratio): relabelled everywhere (text, quiz 4, flashcard 3, worked example, summary) as the cosmic ratio of baryons to dark matter, compared with the stellar-to-dark-matter mass ratio, as in the book. The "about a sixth" result is unchanged.
- Info (Eqs. 4.19–4.20 page): now cited as p. 99.
- Info (3 × 10¹⁰ M⊙): now "about half the Milky Way's stellar mass".
- Info ("≤" in the book's Eq. 4.18 condition, ⟨N⟩ = 0.5 at M_min): no change; the page's conditions are standard and its threshold value is consistent with Eq. 4.17.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
