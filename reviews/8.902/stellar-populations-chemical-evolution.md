---
page: content/year-5/8.902/stellar-populations-chemical-evolution.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec08.pdf (read; local copy, all 10 PDF pages: printed pp. 48–55 rendered as images and compared in detail, pp. 55–56 (G-dwarf problem, 3.G AGN) skimmed only to fix the boundary; text also extracted with pdftotext for the notice check)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: Stellar populations and the chemical evolution of galaxies

The source is sections 3.E "Stellar population synthesis" and 3.F "Chemical evolution of galaxies" of the 8.902 Lecture 8 notes (Vogelsberger, Fall 2023), up to the end of the closed-box model. Printed p. 48: 3.E introduction, SFR (218)–(222); p. 49: three third-party figures (Torrey et al. 2019 phase diagram, Krumholz et al. 2009 Σ_SFR vs Σ_gas, Madau & Dickinson 2014 cosmic SFR), molecular-gas paragraph, start of the IMF; p. 50: (223)–(226), IMF plot (J. Buchner), stellar spectra; p. 51: HR sketch, (227)–(231), population-synthesis notes; p. 52: 3.F, (232)–(234); p. 53: (235)–(240); p. 54: (241)–(246); p. 55: (247)–(253), start of the G-dwarf problem. The G-dwarf problem (pp. 55–56) and 3.G are covered by the Lecture 9 page and are not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The closed box", sentence before "Closed-box metallicities of gas and stars" | pp. 55, eqs. (248)–(252): metal budget Z_sM_s + ZM_g = (1−R)y∫ψ dt′, with M_s = (1−R)∫ψ dt′ (251), hence Z_s = y − Z M_g/(M − M_g) (252). | Only "(eqs. 248–251), which gives their mean metallicity Z_s". The one step a reader needs (Z_sM_s + ZM_g = yM_s) is not shown, so Z_s = y − Zu/(1 − u) appears without derivation. Foundation pages should cover the lecture fully. | Add one line, e.g. a Formula "Z_s M_s + Z M_g = (1 − R)\,y\int_0^t\psi\,dt' = y\,M_s" cited to eqs. (248)–(251), p. 55, then divide by M_s. |
| 2 | info | Formula "Exponential star formation history" (eq. 222) | p. 48: eq. (222) also prints "(t) ∝ e^{−t/τ}" without ψ; so does the variable list on p. 52 ("is the star formation rate"). | The page notes the missing ψ only for eq. (218) and silently restores it in (222). | Optional: "[The notes print eqs. (218) and (222) without the ψ.]" |
| 3 | info | Formula "Closed-box metallicities" (eq. 253) | p. 55: "gas : Z(s) = y ln(1/u(t))" (Z(s) for Z(t)). | Z(t), silently corrected. Trivial. | Optional bracket, or none. |
| 4 | info | Definition of the yield after eq. (241) | p. 54: "y is the mass of produced metals per remnant mass (white dwarfs, neutron stars, etc.)". | "mass of new metals produced per mass locked up in long-lived stars and remnants". The page's wording is the correct reading of the 1/(1 − R) factor ((1 − R) is the mass per unit formed that stays locked up, stars plus remnants), and the notes' "per remnant mass" is loose. But it differs from the notes without saying so. | Optional: "(the notes say 'per remnant mass'; the factor 1/(1 − R) makes it per mass that stays locked up, in long-lived stars and remnants)". |
| 5 | info | "Other forms (Chabrier, Kroupa) flatten out below about one solar mass" | p. 50 text names only Chabrier; Kroupa appears only in the legend of the all-rights-reserved IMF plot. | Names Kroupa and describes the low-mass flattening. Correct physics and only a name plus a qualitative fact, not reuse of the figure. | None needed. |
| 6 | info | Stefan–Boltzmann formula (eq. 226) | p. 50: log L = 2 log R + 4 log T (no constant). | Adds "+ constant". Correct (zero in solar units); a harmless improvement. | None. |
| 7 | info | Star formation paragraph | p. 49 describes the Krumholz et al. plot as Σ_SFR against Σ_gas for many galaxies, and adds that supernovae and shocks must be considered for precise predictions. | Neither the Σ_SFR–Σ_gas relation (Kennicutt–Schmidt) nor the supernova/shock remark is mentioned; the molecular-gas and cosmic-SFR points are. | Optional: one sentence that the SFR surface density rises steeply with gas surface density across galaxies, and that feedback (supernovae, shocks) matters. |
| 8 | info | Z_⊙ ≈ 0.02 (text, flashcard, worked example) | p. 52: Z_⊙ ≈ 0.02. | Same. Matches the notes; modern solar abundance analyses give about 0.014 (Asplund et al. 2009). Not a slip, a classic value. | Optional: "(more recent analyses give about 0.014)", marked as later. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (218) p. 48; (219)–(221) p. 48; (222) p. 48; (223) p. 50; (224) p. 50; (225) p. 50; (226) p. 50; (227) p. 51; (228)–(229) p. 51; (230) p. 51; (231) p. 51; (232) p. 52; (233) p. 52; (234) p. 52; (235)–(236) p. 53; (237) inline, p. 53; (238)–(239) p. 53; (240)–(241) pp. 53–54 (240 on p. 53, 241 on p. 54); (242) p. 54; (243) p. 54; (244) p. 54; (245)–(247) pp. 54–55 (245, 246 on p. 54, 247 on p. 55); (252)–(253) p. 55. Notation (𝓛_{λ,cp} for the notes' 𝓛_λ^cp, Z(τ₀)) is equivalent.

Bracketed slip notes, each verified against the PDF:
- Eq. (218): printed "(t) = dm/dt", ψ missing. Bracket correct (see finding 2 for eq. 222).
- Eq. (221) units: notes print 7.2 × 10²⁷ erg/s. The underlying calibration (Kennicutt 1998: SFR = 1.4 × 10⁻²⁸ L_ν, L_ν in erg/s/Hz) gives 1/1.4e-28 = 7.14 × 10²⁷ erg/s/Hz. Bracket correct. Cross-checks from the same paper: 1/7.9e-42 = 1.27 × 10⁴¹ erg/s (eq. 220 ✓); 2.2 × 10⁴³ erg/s / 3.828 × 10³³ erg/s = 5.7 × 10⁹ L_⊙ (eq. 219 ✓). (Kennicutt 1998 checked from standard knowledge, paper not re-read.)
- "Stars along the R = 1 line form the main sequence" (p. 50): verified in the PDF. Bracket correct: main-sequence radii range from roughly 0.1 R_⊙ (late M dwarfs) to about 10–15 R_⊙ (O stars), so the main sequence crosses lines of constant radius. "About 0.1 to 10" is a fair rounding.
- Eq. (234): printed "dM_g/dt = ψ − E" followed by "dM_g/dt = −ψ + E + f − e"; the first is dM_s/dt. Bracket correct; the page's dM_s/dt = ψ − E is right and consistent with (242).
- Eq. (243): printed "M_g dZ/dt = (1 − R)yψ + (Z_f − Z)f + Ze". Recomputed: M_g dZ/dt = d(ZM_g)/dt − Z dM_g/dt = [(1 − R)(y − Z)ψ + Z_f f − Ze] − Z[−(1 − R)ψ + f − e] = (1 − R)yψ + (Z_f − Z)f. The +Ze is wrong; bracket and page formula correct.

Other derivations checked: (238)–(240) from (235)–(236) with ψ(t − τ) ≈ ψ(t); (242) from (234) with E = Rψ and E_Z = RZψ + (1 − R)yψ: −Zψ + RZψ + (1 − R)yψ = (1 − R)(y − Z)ψ ✓; (244) with f = e = 0 ✓; (245) dividing gives (1/M_g)dM_g/dZ = −1/y ✓; (246)–(247) ln(M_g/M) = −Z/y ✓; (252) from Z_sM_s + ZM_g = yM_s ✓; (253) with u = M_g/M ✓; Z_s → y as u → 0 (u ln(1/u) → 0) ✓.

## Arithmetic and answer checks
- Worked example (a): 10¹⁰ × 10⁻³ = 10⁷ yr ✓. "Stars below about a solar mass outlive the present universe": with τ = 10¹⁰ M⁻³ yr and an age of 13.8 Gyr the limit is (10/13.8)^{1/3} = 0.90 M_⊙; "about a solar mass" is fair. (10¹⁰ yr for the Sun is a standard value, not in the notes.)
- Worked example (b), quiz 2 (recomputed with SciPy quad): number fraction above 8 M_⊙ for m^{−2.35} on [0.1, 100] = 0.00261 → "about 0.3%" ✓; mass fraction (m^{−1.35}) = 0.139 → 14% ✓. Note: the example uses a lower limit of 0.1 M_⊙ while the notes and the page's own text use m_l ≈ 0.08; with 0.08 the figures are 0.19% and 12.8%. The example states its limits explicitly, so this is consistent, not an error.
- Closed-box example: Z = 0.02 ln 10 = 0.04605 → 0.046 ✓ (2.30 Z_⊙ ✓); u/(1 − u) = 0.111 ✓; Z_s = 0.02 − 0.04605 × 0.1111 = 0.01488 → 0.0149 ✓, 0.744 Z_⊙ → 0.74 ✓.
- Plot: gas curve ln(1/u), stars 1 − ln(1/u)·u/(1 − u) (in units of y), both from eq. (253) ✓; the guard u < 0.999 avoids 0/0 at u = 1 (the true limit is 0, so nothing is lost). Point (0.1, 2.303) lies on the gas curve ✓. Caption values 2.3y and 0.74y ✓ (1 − 2.3026/9 = 0.744). The gas curve leaves the y-range 0–4 below u ≈ 0.018; harmless.
- Quiz 1 (answer 1, τ ∝ M/L with L ∝ M⁴): correct; explanation "10 M_⊙ lives about a thousand times shorter" ✓.
- Quiz 2 (answer 1, light; 0.3% above 8 M_⊙, 14% of mass): correct, see above.
- Quiz 3 (answer 2, Z = y ln 10 ≈ 2.3y): correct.
- Quiz 4 (answer 1, instantaneous recycling): matches p. 53; explanation correct.
- Flashcards: Salpeter card matches (223), (225); abundance card matches (233) and p. 52 (Fe/H = −1 → a tenth) ✓; closed-box card matches (253) ✓.
- Frontmatter summary: consistent with the page.
- `calcs/8.902/stellar-populations-chemical-evolution.yaml`: 10 entries (SFR calibrations and Milky Way 3 M_⊙/yr as fact; lifetime 10⁷ yr; quiz factor 1000; Salpeter number and mass fractions; IMF limits as fact; ln 10; closed-box gas, ratio, stars). Each `shown` string matches the page. `npm run calc:test -- -k stellar-populations`: 10 passed, 0 failed. Minor: the `imf-limits` `shown` entry is the raw MDX attribute fragment `x = 1.35" cite="reading1" at="eq. (225)`; it matches, but a cleaner string (e.g. `x = 1.35`) would be easier to maintain. Z_⊙ ≈ 0.02 is named in that entry's `where` but has no `shown` string.
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

## Coverage and order
- The page follows the notes' order: 3.E introduction (three ingredients) → SFR (218) and indicators (219)–(221) → exponential model (222) → SFR physics, phase diagram, molecular gas, cosmic SFR (p. 49, described in words) → IMF (223)–(225) and its uncertainty → stellar spectra and HR diagram (226) → lifetimes (227)–(229) and the low-mass case → population synthesis (230)–(231) and the iteration recipe → 3.F metallicity and abundances (232)–(233) → chemical evolution equations (234) → return rates (235)–(236) → instantaneous recycling (237)–(241) → IRA equations (242)–(243) → closed box (244)–(247) → stellar metallicity (248)–(253).
- Left out or condensed: the derivation (248)–(251) (finding 1); the Krumholz Σ_SFR–Σ_gas description and the supernova/shock remark (finding 7); the HR sketch and the notes' "units of φ are mass⁻²" remark (p. 49); the descriptions of each term under (235)–(236) are condensed into one paragraph but complete.
- Additions: the "Who is born, and who survives?" and "A closed-box galaxy" worked examples (original numbers), the closed-box plot, Kroupa (finding 5), "+ constant" (finding 6), and the slip brackets. All correct.
- `leadsTo` 8.902 Lecture 9 ("G-dwarf Problem and Active Galaxies" in `_course.json`): correct; the why-text matches the content of p. 55–56 and 3.G. Prerequisites `galaxy-observations` and `stability-jeans-toomre` exist; the "(the previous page)" reference for cold, dense gas collapsing fits `stability-jeans-toomre`. No cosmology callout; consistent with the other 8.902 pages. A cosmology link is available if wanted (the cosmic star formation history peaking at z ≈ 2 connects to the 8.286/8.902 structure-formation pages), but its absence is not a finding.

## Licensing
- pdftotext grep and visual check: four "All rights reserved ... excluded from our Creative Commons license" notices, all on figures: Torrey, Vogelsberger et al. 2019 (MNRAS, © Oxford University Press) and Krumholz et al. 2009 (ApJ, © AAS) on p. 49; Madau & Dickinson 2014 Fig. 9 (© Annual Reviews) on p. 49; the IMF plot by Johannes Buchner (© 2015) on p. 50. No "Courtesy of" notices.
- The page reproduces none of these figures and draws no replacement of them; it describes their content in words only ("figures not reproduced here"): small cold condensed fraction, star formation following molecular gas, cosmic SFR peaking at z ≈ 2. The phase percentages (e.g. 4.3% condensed) and the data points are not quoted. Kroupa/Chabrier flattening is general knowledge, not taken from the plot's data. Correct handling.
- The only graph on the page is generated from eq. (253). The HR sketch on p. 51 (the notes' own, CC-licensed) is not reused.
- No verbatim copying found: sentences are rewritten (e.g. the SFR-physics, IRA and metallicity-clock passages); only standard terminology ("instantaneous recycling", "coeval population", "main-sequence turnoff mass") is shared. No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page (en dashes in ranges and names only).
- Everything above was checked against the rendered PDF pages; the Kennicutt (1998) and Asplund (2009) values are from standard knowledge, not re-read sources, and are marked as such.

## Resolution (2026-11-17, by the page author)

1. Warning: the key step for Z_s is now shown as a Formula (Z_sM_s + ZM_g = (1 − R)y∫ψ dt′ = yM_s, eqs. 248–251), followed by the division by M_s.
2–3. Info: the ψ bracket now also mentions eq. (222), the variable list on p. 52 and the Z(s) for Z(t) in eq. (253).
4. Info: the yield definition now notes the notes' wording "per remnant mass".
5–8. No change needed (the worked example states its 0.1 M☉ limit).

Status set to `reviewed`.
