---
page: content/year-5/8.902/press-schechter.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec16.pdf (read: local copy, pdftotext plus rendered pages 96, 97, 98 for the Greek letters)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec14.pdf (read: local copy, only to check eq. 405 on printed p. 88, which the page cites in a bracket note)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not fetched; it is only the index page used as source.url)
verdict: pass-with-notes
---

# Review: How many halos? — the Press–Schechter mass function

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "How good is it?" | The p. 98 caption says only that the lines are "fairly similar", with Press–Schechter deviating "slightly more" from the other models. | "predicting too many halos around the characteristic mass and too few of the rarest, most massive ones". This is a correct reading of the p. 98 figure (the blue PS curve lies above the others from about 10^10.5 to 10^14.5 M_sun and below them near 10^15 M_sun) and agrees with the literature (Sheth & Tormen 1999; Jenkins et al. 2001). But the notes do not say it, and the page does not mark it as added. Also, in the figure PS lies above the fits at all masses *below* M*, not only near it. | Add a short attribution, e.g. "(read off the notes' figure; this is the standard result of Sheth & Tormen 1999)", and say "too many halos below and around the characteristic mass". |
| 2 | warning | Intro (Press & Schechter 1974) and cloud-in-cloud paragraph (Bond, Cole, Efstathiou & Kaiser 1991) | The notes give neither reference. They only say "See Problem Set 6 for a description of the Extended Press-Schechter formalism that explains the fudge factor" (p. 98). | Both facts are correct (Press & Schechter, ApJ 187, 425, 1974; Bond, Cole, Efstathiou & Kaiser, ApJ 379, 440, 1991), and the BCEK addition is marked as "added here". But `references: {}` is empty, so neither paper is cited. | Add both papers to `references` (with ADS or DOI URLs). Optionally also name "Problem Set 6", as the notes do. |
| 3 | info | Paragraph after eq. 450, bracket note | Eq. 450 prints `1/2π` and `Ŵ_R(k)` not squared (verified on rendered p. 96). Eq. 405 (Lecture 14 notes, printed p. 88) has `1/2π²`. | The slip note is correct, but its reasoning reads "the window enters squared because δ̄ is a product (convolution) in Fourier space". δ̄ is a convolution in real space, so it becomes a product in Fourier space. | Reword: "because the real-space convolution becomes the product δ̂·Ŵ_R in Fourier space, and the variance takes its modulus squared". Optionally say where eq. 405 is ("Lecture 14 notes, p. 88"). |
| 4 | info | Quiz Q2 explanation | (not in notes) | "The excursion-set approach … gives exactly the factor 2" | The body text correctly says this holds for a sharp-k window. Add "for a sharp-k window" in the quiz explanation too, so the two agree. |
| 5 | info | Eqs. 456, 458 | The notes write Ω_M(z). | Ω_m(z) | Harmless notation change that matches eq. 448. No action needed. |

All bracketed slip notes were checked against the rendered pages and are accurate:
- Eq. 449: the notes have δ(x⃗) inside the ∫d³y integrand. Confirmed (p. 96).
- Eq. 450: prefactor 1/2π, window not squared. Confirmed (p. 96). Eq. 405 has 1/2π² (Lecture 14, p. 88). Confirmed.
- Eq. 453: "∂/∂M − dσ_R(z)/dM ∂/∂σ_R(z) = …", with "−" where "=" is meant. Confirmed (p. 97).
- Eq. 454, third line: printed as dσ_R/dM · δ_c/(√(2πσ_R²) D(z)) e^{…}. The correct line is δ_c/(√(2π) σ_R² D), so the printed line is missing a factor 1/σ_R. The second and fourth lines are correct. Confirmed at the resolution of the rendered PNG. The sqrt bar appears to cover σ_R². I could not zoom further (no image tools available), so the exact extent of the bar is slightly uncertain. Either way, the fourth line is the one that is used later, and it is correct.
- Sign: σ_R falls with M, so dσ_R/dM < 0 and ∂F/∂M < 0. The notes never use absolute values. The page's note that the magnitude is meant is correct.
- Eq. 456: the left-hand side is still labelled ∂F(M,z)/∂M after dividing by M/ρ_cΩ_M. Confirmed (p. 97).
- Eq. 457: printed ∫_0^1 dM. Confirmed (p. 97). The page's ∫_0^∞ |∂F/∂M| dM = 1 is the intended statement.
- p. 98 caption: "Press and Schechter 1973". Confirmed. The paper appeared in 1974 (ApJ 187, 425). (Uncertain and not on the page: the same caption dates Sheth, Mo & Tormen and Jenkins et al. to 2002. Both papers are usually cited as 2001. The page gives no years for them, so nothing needs changing.)

Formula citations (equation number and printed page), checked against the rendered pages:
- (448) p. 96: matches.
- (449) p. 96: matches (with the corrected δ(y⃗)).
- (450) p. 96: corrected form, with the change noted.
- (451) "p. 96–97": correct. The equation is on p. 96 and σ_R(z) = σ_R D(z) is on p. 97.
- (452) p. 97: matches.
- (454) p. 97: matches the first and last lines in combined form.
- (456) p. 97: matches.
- (457) p. 97: corrected form, with the change noted.
- (458) p. 97: matches the boxed equation exactly.
- Eqs. (453) and (455) are referenced in the text, not shown as Formulas. They are correct.

## Arithmetic and answer checks
Script: Python `math.erfc`, δ_c = 1.686.
- Today: ν = 1.686/0.5 = 3.372. ν/√2 = 2.384. erfc(2.384) = 7.46×10⁻⁴. The page's "≈ 7.5×10⁻⁴" and "less than 0.1%" are correct.
- z = 1, EdS: D = 1/(1+z) = 0.5, so ν = 6.744 and ν/√2 = 4.769. erfc = 1.54×10⁻¹¹. The page's "≈ 1.5×10⁻¹¹" is correct.
- Ratio: 7.46×10⁻⁴ / 1.54×10⁻¹¹ = 4.84×10⁷. The page's "about 5×10⁷" is correct. With δ_c = 1.69 (the notes' value) the ratio would be 5.3×10⁷, so the statement holds either way.
- Plot: with σ(M) = δ_c (M/M*)^(−α) and α = (n+3)/6, we get ν = (M/M*)^α / D and dlnσ/dM = −α/M. Putting these into eq. 458 gives M²N/ρ̄ = √(2/π) α ν e^(−ν²/2). This is confirmed analytically and numerically (finite-difference dlnσ/dM for three (n, D, M) cases agrees with the closed form to 1e-9 relative accuracy). Both `expr` strings implement this with x = log₁₀(M/M*), ν = 10^(αx)/D. The caption's claims are correct: the curve is the mass fraction per ln M, and the cutoff moves to lower M for smaller D. The power law σ ∝ M^(−(n+3)/6) is the standard result for P ∝ kⁿ. For very small D and large x the expression underflows to log10(0) = −∞. `components/Plot.tsx` converts non-finite values to NaN, so this is harmless. The y-range [−6, 0] contains the curve's maximum (log₁₀(0.798·α·e^(−1/2)) ≈ −0.9 for α = 0.25).
- Normalisation: √(2/π)∫₀^∞ e^(−ν²/2) dν = 1.0000 numerically. So the ×2 mass function puts all the mass in halos, and the uncorrected one gives ½ (F(M→0) = ½ erfc(0) = ½). This is correct as stated.
- Quiz Q1 (answer 1): correct.
- Quiz Q2 (answer 1): correct. See finding 4 for the sharp-k qualifier.
- Quiz Q3 (answer 2): correct. The exponential factor e^(−δ_c²/2σ²D²) falls steeply as D decreases.
- Quiz Q4 (answer 1): correct. The formula in the question uses the corrected 1/2π² and |Ŵ|².
- Flashcards: R(M), F(M,z) with the ×2 remark, N(M,z) with |dlnσ/dM| and ρ̄ = ρ_cΩ_m, and cloud-in-cloud are all consistent with eqs. 448, 452 and 458.

## Coverage and order
- Section 2.F (pp. 96–98) is covered completely and in MIT's order: R(M) (448), smoothing (449), variance (450), Gaussian PDF (451), the PS assumption and F (452), chain rule (453), derivative (454–455), conversion to number density (456), normalisation and fudge factor (457–458), the pointer to Extended Press–Schechter, and the comparison figure.
- Added material, all correct and marked or easy to recognise: the ν = δ_c/(σD) discussion, M*, hierarchical growth, the illustrative power-law plot, and the worked example. The page does not name "Problem Set 6" (info).
- Prerequisites `spherical-collapse` and `power-spectrum` exist in `content/year-4/8.902/`.
- `leadsTo` 8.902 Lecture 17 ("Anisotropies in the CMB" in `_course.json`) is accurate.

## Licensing
- `grep -i "rights reserved\|courtesy"` on lec16.txt and lec14.txt finds no matches. No "All rights reserved" or "Courtesy of" notices.
- The p. 98 mass-function comparison figure is not reproduced. The page has only its own formula-generated `<Plot>` and describes the figure in words.
- No verbatim copying found beyond standard terminology ("fudge factor", "halo mass function", "Gaussian random field"). The prose and the worked example are original. The worked example (erfc at σ = 0.5, D = 1 and 1/2) does not appear in the notes.
- No OpenStax or LibreTexts material.

## Notes
- No errors found. The page reproduces the notes' derivation correctly, and every slip note is accurate.
- The claims not taken from the notes are correct: Press & Schechter 1974; Bond, Cole, Efstathiou & Kaiser 1991; the excursion-set result giving exactly a factor 2 for a sharp-k window (that is the case where the random walk is Markovian); and PS overpredicting below and around M* while underpredicting the rarest halos. They should be cited in `references` and the last one attributed (findings 1–2).
- The page may move to `status: reviewed` once findings 1–2 are dealt with (they are warnings, not errors) and a Resolution section is appended.

## Resolution (2026-11-15, by the page author)

- Warning 1: the callout now says the notes only state that Press–Schechter "deviates slightly more"; the specific claim (too many halos below and around M*, too few of the rarest) is marked as not from the notes and attributed to Sheth & Tormen (1999) and the notes' figure.
- Warning 2: `references` now lists Press & Schechter (1974), Bond, Cole, Efstathiou & Kaiser (1991) and Sheth & Tormen (1999), and the text names the first two with journal details.
- Info 3: the eq. 450 note now says δ̄ is a convolution in real space, i.e. a product in Fourier space.
- Info 4: the quiz Q2 explanation now says "for a sharp-k window".
- Coverage note: the text now names Problem Set 6.
- Info 5 (Ω_m vs Ω_M): no change.
