---
page: content/year-5/8.902/galaxy-observations.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read; local copy, all 11 PDF pages rendered as images: printed pp. 3–12 plus the OCW end page, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
  - https://arxiv.org/abs/astro-ph/0606170 (read; full PDF, Table 1 on p. 21 of the preprint)
verdict: needs-changes
---

# Review: Observing galaxies: magnitudes, types, luminosities and velocities

The source is section 1 of the 8.902 Lecture 1 notes, "Key observations of galaxies": Part I title page (Sombrero, p. 3); 1.A radiative transfer, eqs. (1)–(5) on p. 4; magnitudes (6)–(10) and the UBVRI filter curves on p. 5; the JWST NIRCam filters and the Orion text on p. 6; the Orion images and (11)–(14) on p. 7; (15)–(18) and Cassiopeia A on p. 8; (19), 1.B galaxy types with photographs, and (20) on p. 9; (21), the Schechter sketch, (22)–(23) and the first dark matter bullets on p. 10; the remaining bullets, ellipticals, (24)–(26), the h note and 1.C on p. 11; (27) on p. 12.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Converting between the systems" (eq. 12, p. 7) | m_X(AB) − m_X(Vega) = −2.5 log(∫(F_ν)_AB T_X dν / (F_ν)_Vega T_X dν) (the notes also drop the ∫ in the denominator). This sign is wrong: from eq. (9), m_AB − m_Vega = −2.5 log(∫F T / ∫F_AB T) + 2.5 log(∫F T / ∫F_Vega T) = −2.5 log(∫F_Vega T / ∫F_AB T). Check with Vega itself: m_Vega = 0, m_AB = −2.5 log(F_Vega/F_AB). | Reproduces the notes' inverted ratio (silently adding the missing ∫). The page then contradicts itself: by its own eq. (12), in U (Vega fainter than the flat AB source, ratio AB/Vega > 1) one gets U_AB < U_Vega, the notes' eq. (13) sign, while the bracket says the correct sign is U_AB − U_Vega ≈ +0.79. | Write the formula as −2.5 log(∫(F_ν)_Vega T_X dν / ∫(F_ν)_AB T_X dν) and add a bracket: "[The notes' eq. (12) has the ratio upside down (and omits the ∫ in the denominator).]" The existing eq. (13) bracket then follows from the corrected formula. |
| 2 | warning | Bracket after eq. (23): "the square is needed for the conclusion" | p. 10: "v_c ∝ (1/r)∫4πr²ρ dr ⇒ ρ ∝ r⁻²". | Slip correctly identified (the notes do write v_c, not v_c²; confirmed on the rendered page), but the reason given is not right: if v_c is constant, both v_c and v_c² are constant, so the notes' (wrong) relation also gives M ∝ r and ρ ∝ r⁻². The square is needed for the relation to be correct, not for the conclusion. | "[The notes write v_c ∝ …; the correct relation, from eq. (22), is v_c² = GM(<r)/r. The conclusion is the same, since a constant v_c means a constant v_c².]" |
| 3 | warning | Eq. (7) and the line after it | (F_ν)_AB = 3.63×10⁻²⁰ erg s⁻¹cm⁻²Hz⁻¹ (units inside the equation). | Formula shows a bare number; the units follow as a separate line "in erg s⁻¹ cm⁻² Hz⁻¹," that ends in a comma, and the next paragraph starts a new sentence. Reads as a broken sentence, and read-aloud of the formula loses the units. | Put the units into the `tex` (as in eq. (1)) and delete the dangling line, or make it "…= 3.63×10⁻²⁰ in erg s⁻¹ cm⁻² Hz⁻¹." |
| 4 | info | "AB magnitudes in practice", `at="eqs. (10)–(11), pp. 5, 7"` | (10) on p. 5 is ∫(F_ν)_AB T_X dν = (F_ν)_AB; (11) on p. 7 is the displayed pair. | The displayed tex is only eq. (11); eq. (10) is in the prose before it. | Fine as is; optionally `at="eq. (11), p. 7"` and mention eq. (10) in the prose. |
| 5 | info | Bracket on eq. (13) | U_AB = U_Vega − 0.8, B_AB = B_Vega − 0.11, V_AB = V_Vega. | Says U is sign-reversed vs Blanton & Roweis (0.79), B ≈ −0.09. Verified against Table 1 of astro-ph/0606170: U 0.79, B −0.09, V 0.02. Correct, and the physical reason (Vega faint in the UV relative to a flat spectrum) is right. Only U is reversed; B has the right sign (−0.11 vs −0.09), as the page implies. | None, once finding 1 is fixed. Optionally note V 0.02 ≈ 0. |
| 6 | info | Schechter plot caption: "(The marked point stays at the default α.)" | — | At L = L*, log₁₀ of (α+1)·0 − 1/ln 10 = −0.434 for every α, so the point is on the curve for any α. | Drop the bracket, or say "the point L = L* lies at −0.434 for every α". |
| 7 | info | "Faint galaxies are far more numerous than bright ones" | p. 10: no such sentence; α ≈ −1.09. | True per unit L, but the page's own plot (per ln L) shows a nearly flat faint end, as its caption says. A reader may see a conflict. | "Per unit luminosity, faint galaxies outnumber bright ones; per logarithmic interval the numbers are nearly flat below L*, and galaxies brighter than a few L* are rare." |
| 8 | info | "the James Webb Space Telescope's infrared filters reach far beyond the visible range" | p. 6: JWST "measures slightly longer wavelengths". | "far beyond". NIRCam covers about 0.6–5 µm, so "far beyond" is defensible, but differs from the notes' wording. | Optional: "reach well into the infrared (to about 5 µm)". |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (1) p. 4; (2) p. 4; (3)–(4) p. 4; (5) p. 4; (6) p. 5; (7) p. 5; (8) p. 5; (9) p. 5; (10)–(11) pp. 5, 7 (finding 4); (12) p. 7 (finding 1); (14) p. 7; (15) p. 8; (16) p. 8; (18) p. 8; (19) p. 9; (21) p. 10; (22) p. 10; (23) p. 10; (24) p. 11; (25)–(26) p. 11; (27) p. 12. Eqs. (13), (17) and (20) are cited in prose with the right numbers.

Bracketed slip notes, verified on the rendered PDF:
- Eq. (3), squared F_ν(r₂): confirmed, the notes print "F_ν(r₂)² × 4πr₂²". The page's corrected form is right.
- Eq. (13), U offset: confirmed as printed (U_AB = U_Vega − 0.8); Blanton & Roweis Table 1 gives U_AB − U_Vega = +0.79, B −0.09. Bracket correct. But see finding 1: the page's eq. (12) carries the notes' sign error and contradicts this bracket.
- Eq. (23), v_c vs v_c²: confirmed, the notes print "v_c ∝". Reasoning in the bracket needs rewording (finding 2).
- The page also silently corrects "AO V" to "A0 V" (p. 5); fine.

Other claims checked against the notes: Vega's non-flat spectrum and the flat AB source (p. 5); ∫T_X dν = 1 normalization (p. 5, the page's "(with that normalization)" is fair given that T_X is plotted in percent); V-band agreement of the two systems (p. 7); SDSS ugriz (p. 7); Orion visible vs X-ray (p. 6); colours independent of distance, "higher g − r is red" (p. 8); Cassiopeia A combined from three X-ray bands (p. 8); surface brightness Σ or I, magnitudes per square arcsecond (p. 8); n ≈ 4 / n ≈ 1, "theory needs to explain this" (p. 9); the three galaxy types and their properties, NGC 2787 as the S0 example (p. 9); Schechter parameters φ* ≈ 0.02 h³ Mpc⁻³, α ≈ −1.09, L* ≈ 10¹⁰ L☉ h⁻² (p. 10); V_c ∼ 200 ± 50 km/s, stars then gas (p. 10); v_c ∝ r^(−1/2) for central mass (p. 10); the dark matter bullets (gas, MACHOs and microlensing, neutrinos as hot dark matter, WIMPs) and the five general theories (pp. 10–11); ellipticals σ_v ∼ 200–300 km/s, v_c ∼ 50–100 km/s (p. 11); h from H₀ = 100 h km/s/Mpc and the later formal proof of d ≈ cz/H₀ (p. 11); spectral classes O B A F G K M L T and eq. (27) (pp. 11–12). All match. The page's "roughly black bodies" softens the notes' "are blackbodies"; an improvement.

## Arithmetic and answer checks
Recomputed in Python (`.venv`):
- −2.5 log₁₀(3.63×10⁻²⁰) = 48.600. Correct.
- 5 magnitudes: 10^(5/2.5) = 100. Correct.
- Worked example "Weighing a spiral galaxy": M = (2×10⁵)² × 3.086×10²⁰ / 6.674×10⁻¹¹ = 1.850×10⁴¹ kg → "1.8×10⁴¹" correct; /1.989×10³⁰ = 9.30×10¹⁰ M☉ → "9×10¹⁰" correct; ×3 = 2.79×10¹¹ → "2.8×10¹¹" correct (note 3 × 9 = 27 vs 28 only because (a) is rounded; immaterial).
- Worked example "Distance modulus": cz = 1500 km/s; d = 21.43 Mpc; μ = 5 log₁₀(2.143×10⁷) − 5 = 31.655 → "31.65" (31.655 exactly; either 31.65 or 31.66 acceptable); m = 10.655 → "10.65". Correct. "Easily visible in a small telescope" for an integrated m ≈ 10.7 galaxy: fair. (At 1500 km/s a typical peculiar velocity of a few hundred km/s would change d by ~20%; not needed on this page.)
- Sérsic plot: log₁₀(I/I₀) = −x^(1/n)/ln 10 is correct (ln(I/I₀) = −x^(1/n)). n = 1 is a straight line, n = 4 has the coefficient 1 rather than 7.67, which the label "de Vaucouleurs form" and the caption ("each curve uses its own scale radius", r₀ = r_e/7.67⁴) cover. The slider extreme n = 0.5 reaches −6.9 at x = 4, inside the range [−10, 0].
- Schechter plot: number per unit ln L = φ(L)·L = φ* (L/L*)^(α+1) e^(−L/L*), so log₁₀ = (α+1)x − 10^x/ln 10 with x = log₁₀(L/L*). Correct. Point (0, −0.4343) correct. Slider extremes stay in [−6, 3] (α = −1.6: 1.80 at x = −3, −4.94 at x = 1; α = −0.5: −1.50, −3.84).
- Quiz 1 (answer 2, 100): correct. Quiz 2 (answer 1): correct; explanation right. Quiz 3 (answer 1, ρ ∝ r⁻²): correct; explanation uses v_c² correctly. Quiz 4 (answer 1): correct, matches p. 9 and p. 11.
- Flashcards: card 1 matches (6), (14), (15); card 2 matches (18), (19) and p. 9; card 3 matches (21) and its parameters.
- `calcs/8.902/galaxy-observations.yaml`: all 13 entries match the text they quote on the page. `npm run calc:test -- -k galaxy-observations`: 13 passed. Minor: `ab-zero-point` cites "p. 7" (correct for eq. 11); `velocities` cites "pp. 10–11" (200 ± 50 is p. 10, the elliptical values p. 11; fine).

## Coverage and order
- The page follows the notes' order: 1.A flux, intensity, (1)–(5); magnitudes, Vega/AB, monochromatic and band magnitudes (6)–(13); filters, JWST, Orion; absolute magnitude and distance modulus (14)–(15); colours (16) and Cassiopeia A; surface brightness (17)–(19); 1.B galaxy types; luminosity (20) and Schechter (21); rotation curves (22)–(23) and dark matter; ellipticals; redshift and Hubble's law (24)–(26) with h; 1.C population synthesis (27).
- Nothing in the section is left out. Figures (flux sketches p. 4, filter curves p. 5, NIRCam p. 6, Orion p. 7, Cassiopeia A p. 8, galaxy photographs p. 9, Schechter sketch p. 10) are described in words or replaced by generated plots.
- Additions (own material): the Sérsic and Schechter plots, the two worked examples, the microlensing explanation in plain words, the bracketed corrections.

## Licensing
- Andromeda (p. 9, "Courtesy of Robert Gensler. Used with permission.") and M87 (p. 9, "Courtesy of Canada-France-Hawaii Telescope / Coelum. Used with permission.") are not reproduced; the page only names the galaxies and says the photographs are credited to others. No `courtesy:` field is needed since the material is not used.
- The NIRCam figure (public domain), the Orion and Cassiopeia A images (made by Vogelsberger with SAOImage DS9), NGC 2787 (NASA/Hubble Heritage) and Sombrero (ESO, CC BY) are not reused; filter curves, Orion and Cassiopeia A are only described.
- No "All rights reserved" notice in the notes (checked every page). OCW end page only; CC BY-NC-SA.
- No verbatim copying beyond short phrases ("theory needs to explain this", attributed; "one of the first hints of dark matter"). Worked examples are original.
- No OpenStax or LibreTexts material. Blanton & Roweis is cited only for two numbers in `references`.

## Notes
- `leadsTo` 8.902 Lecture 2 ("Structure of Galaxies"): consistent with `_course.json` and with the running header of p. 12 ("2. Structure and a qualitative picture of galaxies"). No cosmology callout needed on a cosmology-course page.
- Prerequisite `luminosity-and-redshift` exists (8.286). The "observational-cosmology page" mentioned in prose exists (`observational-cosmology-distances`); consider making it a link.
- No em dashes in the page.
- Verdict needs-changes because of finding 1 (the page reproduces a sign error from the notes' eq. (12) that contradicts its own eq. (13) bracket). Findings 2 and 3 should be fixed before `status: reviewed`.

## Resolution (2026-11-17, by the page author)

1. Error (eq. 12): the conversion formula now has the Vega flux in the numerator and the AB flux in the denominator, consistent with eq. (9) and with the +0.79 offset for U; a bracket notes that the notes print the ratio upside down and drop the integral in the denominator, with the check using Vega itself.
2. Warning (eq. 23 bracket): now says the conclusion is the same either way, but the relation itself needs v_c².
3. Warning (eq. 7): the units now sit in the sentence before the formula and in its label (keeping them out of the TeX avoids the read-aloud reading "10⁻²⁰ erg" as "20 ergs", which content:check flags); the dangling line is gone.
4. Info: the Schechter caption now says the marked point lies at −0.43 for every α; the JWST sentence now says "somewhat longer, infrared wavelengths". The (10)–(11) citation is kept because the sentence before the formula states eq. (10). The "far more numerous" remark is left as is (true per unit L).

Status set to `reviewed`.
