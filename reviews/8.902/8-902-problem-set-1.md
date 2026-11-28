---
page: content/year-5/8.902/8-902-problem-set-1.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_1_pdf/ (read: text of pp. 1 to 3 via pdftotext; the SDSS galaxy pictures on p. 1 deliberately not rendered or viewed; the SDSS FITS zip not downloaded or opened)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec02.pdf (read)
verdict: needs-changes
---

# Review: Problem Set 1: Light profiles, redshifts, luminosities and the mass of two galaxies

Writer: Opus. Reviewer: Opus (same model, blind).

Order followed: the stripped statements and MIT's sheet were read alone, every part was solved in Python (scratch scripts `rv/solve.py`, `rv/solve2.py`), and the answers below were written into this file before the full page, the calcs file or the symbols were opened.

## Blind solve

### My answers (written from the stripped statements and MIT's sheet only; own Python, scratch rv/solve.py, rv/solve2.py)
- 1(a) sky: S1 = mean(120.2, 120.3, 120.0) = 120.167 DN/pixel; S2 = mean(120.0, 120.1, 120.2) = 120.100 DN/pixel.
- 1(b) ring 10-12": area 44π = 138.23 arcsec^2, pixel 0.394^2 = 0.15524 arcsec^2 -> 890.5 pixels (table 892). Median: robust against outliers (foreground stars, cosmic rays, bad pixels, the noise tail) that drag a mean.
- 1(c) mu = 20 - 2.5 log10[(I-S)/(0.15524 N20)]: Galaxy 1 (I-S = 26.03) mu = 22.889 mag/arcsec^2; Galaxy 2 (I-S = 67.9) mu = 21.914 mag/arcsec^2.
- 1(d) OLS of log10(I-S) on r and r^1/4, 15 points r = 1..29:
  Galaxy 1: r_s = 5.804", r_e = 11.53" (rms residual exp 0.172 dex, dV 0.036) -> de Vaucouleurs.
  Galaxy 2: r_s = 8.285", r_e = 58.2" (rms exp 0.047, dV 0.093) -> exponential.
- 1(e) No single law fits all: Galaxy 2 has a central excess over the exponential (+0.15 dex at r = 1") -> a central bulge on top of the disk; Galaxy 1's centre falls below the de Vaucouleurs law (-0.085 dex), core flattened by seeing/resolution; small deviations at the outer edge.
- 2(a) Wien (F_lambda peak): Galaxy 1 peak 7000 A -> T = 2.898e7/7000 = 4140 K; Galaxy 2 peak 4600 A -> 6300 K. Types: K (Galaxy 1) and F, near the F/G boundary (Galaxy 2).
- 2(b) Galaxy 1 Ca II centroid 8792.05 A, z = 0.029273, v = 8776 km/s; Galaxy 2 H-alpha centroid 6677.17 A, z = 0.017396, v = 5215 km/s. (Table-rounded wavelengths give the same to 0.01 A.)
- 2(c) d1 = 123.6 Mpc, d2 = 73.45 Mpc; R1 = d1 r_e = 6.907 kpc (de Vaucouleurs r_e), R2 = d2 r_s = 2.950 kpc (exponential r_s).
- 2(d) Totals: G1 dV π I0 r_e^2 · 8!/7.67^8 (computed as 2π I0 r_e^2 · 4·7!/7.67^8; this line first said "2π", a slip in the note only, the code used the right factor) = 4.308e5 counts -> m1 = 14.365; G2 exp 2π I0 r_s^2 = 7.856e5 counts -> m2 = 13.778. M1 = -21.095, M2 = -20.552. L_G = 0.9 × 10^(-0.4(M - 5.1)) L_sun: L1 = 2.71e10 L_sun, L2 = 1.64e10 L_sun.
- 3(a) Gaussian fit (A, lambda_c, sigma free, continuum 1, 31 rows): A = 0.356, lambda_c = 8792.27 A, sigma_lambda = 7.633 A, sigma_v = c sigma_lambda/lambda_c = 260.3 km/s (267.9 if divided by the rest wavelength, which is wrong for an observed width).
- 3(b) sigma_star = sqrt(260.3^2 - 90^2) = 244.2 km/s.
- 3(c) M = sigma^2 R / G (notes eq. 52) = 244.2^2 × 6907 pc / 4.30091e-3 = 9.58e10 M_sun; M/L = 9.58e10 / 2.71e10 = 3.54 (3.18 if divided by L_G/L_sun,G = 3.0e10 "Suns"). Mass exceeds the light by a factor of a few: unseen mass / stars less luminous than the Sun (and dark matter), interpretation-dependent.

### Comparison (one line per answer id; mine vs page)
- p1a-s1: 120.167 vs 120.17 (tol 0.02): agree.
- p1a-s2: 120.100 vs 120.10: agree.
- p1b-npix: 890.5 vs 890 (tol 2%): agree; table 892 accepted.
- p1b-median: outliers (stars, cosmic rays) vs choice 1: agree.
- p1c-mu1: 22.889 vs 22.89: agree.
- p1c-mu2: 21.914 vs 21.91: agree.
- p1d-rs1: 5.804 vs 5.80: agree.
- p1d-re1: 11.527 vs 11.5: agree.
- p1d-rs2: 8.285 vs 8.28: agree.
- p1d-re2: 58.18 vs 58.2: agree.
- p1d-which: G1 de Vaucouleurs, G2 exponential vs choice 2: agree.
- p1e-break: G2 central excess +0.149 dex (factor 1.41), bulge vs choice 3: agree.
- p2a-t1: 4140 K vs 4140: agree.
- p2a-t2: 6300 K vs 6300: agree.
- p2a-type: K and F vs choice 3: agree.
- p2b-lc2: 6677.17 vs 6677.2: agree.
- p2b-v2: 5215 vs 5215: agree.
- p2b-lc1: 8792.05 vs 8792.1: agree.
- p2b-v1: 8776 vs 8776: agree.
- p2c-d1: 123.60 vs 123.6: agree.
- p2c-d2: 73.45 vs 73.4: agree.
- p2c-r1: 6.907 vs 6.91: agree.
- p2c-r2: 2.950 vs 2.95: agree.
- p2d-m1: 14.365 vs 14.36: agree.
- p2d-m2: 13.778 vs 13.78: agree.
- p2d-l1: 2.707e10 vs 2.71e10: agree.
- p2d-l2: 1.640e10 vs 1.64e10: agree.
- p3a-sl: 7.633 vs 7.63: agree.
- p3a-sv: 260.25 vs 260: agree.
- p3b-ss: 244.2 vs 244: agree.
- p3c-m: 9.58e10 vs 9.58e10: agree.
- p3c-ml: 3.54 vs 3.54: agree as a mass-to-band-luminosity ratio; but see difference 1 for the comparison with Sun-like stars that the solution draws from it.
- p3c-means: "more mass than Sun-like stars would give" vs choice 0: agree.

Every final answer agrees. A careful reader following the stated rules (sky = mean of 3 outer rings; OLS of log10(I - S) on r and r^(1/4) at r = 1..29; weights F - 1 and 1 - F over all rows; curve_fit with continuum fixed at 1) lands on the page's numbers well inside the tolerances: rounding the table wavelengths changes the centroids by 0.01 Å; rounding the pixel area to 0.155 changes mu by 0.002 mag. The page states everything needed (scale, calibrations, grid constants w, rest wavelengths, H0, M_sun,G, the 90%, sigma_c, G).

Tolerances against plausible wrong routes (my numbers): rest wavelength 8545 Å gives v1 = 8668 km/s (1.2% off, rejected at 1%); sigma_v divided by the rest wavelength 8542 gives 267.9 km/s (3% off, rejected at 2%); omitting the 0.9 gives L1 = 3.01e10 (11% off, rejected); no division by the pixel area in 1(c) gives mu1 = 24.91 (rejected); v^2 = 3 sigma^2 gives 2.9e11 (rejected); sigma_c = 95 (the sheet's) gives 242.3 km/s (accepted at 2%, harmless). No box has `mistakes` or `vars`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 3(c), solution step "Compared with the stars", and its second hint | Sheet: compare the mass with "the number of stars in the galaxy determined in (2D)"; the band luminosity of a Sun is 0.9 L_sun (the sheet's own assumption in 2(D)) | "the luminosity 2.71e10 L_sun would mean 2.7e10 stars, of 2.7e10 M_sun in all"; hint: "A galaxy of Sun-like stars has one solar mass per solar luminosity" | L in 2(d) is the band luminosity in units of the Sun's total luminosity, and each Sun gives only 0.9 L_sun in the band, so the number of Sun-like stars is 2.71e10/0.9 = 3.01e10 (mass 3.0e10 M_sun) and the virial mass is 9.58e10/3.01e10 = 3.18 times it. Fix the step to "would mean 2.71e10/0.9 = 3.0e10 Sun-like stars, of 3.0e10 M_sun; the virial mass is 3.2 times more", keep the box as M/L = 3.54 but say a population of Suns would have M/L = 1/0.9 = 1.11 in these units (3.54/1.11 = 3.2), and change the hint to "A galaxy of Sun-like stars has 1/0.9 = 1.1 solar masses per solar luminosity of band light". Alternatively redefine the box as mass over the number of Suns (3.18) and update calcs `p3c-ml`. Numerical check: 9.577e10/(2.7066e10/0.9) = 3.185 (rv/chk.py). |
| 2 | warning | Problem 1(c) and 1(d) statements; intro "Two steps of the sheet's Problem 1(A) are left out" | 1(C): "re-plot the profile"; 1(D): "Overplot your estimate of the model onto the data" | 1(c) asks only for mu in one bin; 1(d) asks for fits and the better law, with no plot of the model over the data; the intro lists only the two 1(A) omissions | Add to 1(c) "re-plot the profile in mag/arcsec^2 (no box for the plot)" and to 1(d) "plot each fitted line over the points (no box)", or add both to the intro's list of steps changed. |
| 3 | info | Intro, Ca II note | Sheet: rest wavelength 8545 Å for Ca II | 8542 Å, "the strongest line of the Ca II triplet" | Correct: the triplet lines are at 8498, 8542 and 8662 Å (air), 8542 the strongest. No change. |
| 4 | info | Problem 3(b) | Sheet: control stars' sodium line widths, 95 km/s | 90 km/s, same line; both changes said in the intro and solution | No change. |
| 5 | info | Tools section, distance modulus and mu | Notes eq. (14) names the distance modulus mu (m - M = 5 log(D/10 pc) ≡ mu) | mu is surface brightness throughout | Optional: one clause "(the notes use mu for the distance modulus; here mu is surface brightness)". |
| 6 | info | Problem 2(b), check step | (not on the sheet) | "the relativistic formula would lower v by about z/2" | True for the special-relativistic Doppler formula (1.46% and 0.87%); for a cosmological redshift v = cz is the low-z limit of Hubble's law, not an SR approximation. Optional: say "the special-relativistic Doppler formula". |
| 7 | info | Problem 2(a), check step | (not on the sheet) | "the peak is uncertain by about 100 Å, or 1.5%" | 100/7000 = 1.4% for Galaxy 1, 100/4600 = 2.2% for Galaxy 2; optional "1.5% and 2%". |
| 8 | info | Problem 1(d), check step | (not on the sheet) | "At the centre of the profile, r = 15 arcseconds" | Could be read as the galaxy's centre; optional "In the middle of the fitted range, r = 15 arcseconds". |

## Arithmetic and answer checks
- All 33 boxes recomputed independently (above); `calc:test -k 8-902-problem-set-1`: 97 passed.
- 1(a) side numbers: 729 - 120 first bin; 123.0 - 120.17 = 2.8 DN at 29"; sqrt(120) = 10.95 DN per-pixel noise; outer rings within 0.3 DN: all checked.
- 1(c) side numbers: 26.03/(0.1552 × 2400) = 0.0699; 67.9/(0.1552 × 2550) = 0.172; difference 0.98 mag: checked.
- 1(d) slopes -0.0748, -1.808, -0.0524, -1.206; intercepts 4.678, 2.451; rms 0.172/0.036 and 0.047/0.093; checks 13.2 vs 13.1 DN and 46.2 vs 43.7 DN at r = 15: all reproduced.
- 1(e) residuals: G2 +0.149 at r = 1, -0.03 to -0.043 at r = 5 to 13; G1 -0.085 at r = 1, max |res| 0.085, -0.061 at r = 27: reproduced. Generating models (G1 dV r_e = 10", 31 DN at r_e; G2 exp 230 DN, 9" plus bulge 2", 80 DN; sky 120.0) reproduce the table medians outside the central bin to about 1 DN (rv/chk.py). With the true sky 120.0 the G1 fit gives r_e = 12.0", so the sky error moves r_e towards 10" and most of the bias comes from the central bin; the page's wording ("the small error of the sky level, the medians of wide bins ... all move a fit") is still true.
- 2(a) 2.898e7/7000 = 4140 K, /4600 = 6300 K. Generating blackbodies 4300 K and 6500 K at z = 0.0293, 0.0174 put the observed F_lambda peaks at 6937 Å and 4536 Å, nearest table points 7000 and 4600: consistent.
- 2(b) weight sums 3.334 and 6.252; z = 0.02927, 0.01739; checked.
- 2(c) 206265 arcsec/rad; R = 6.907, 2.950 kpc; 3.4 r_s ≈ 10 kpc: checked.
- 2(d) 8!/7.67^8 = 0.003366; I0 = 10^4.678 = 47600 and 10^2.451 = 282.8 DN/pixel; r_e = 29.26 px, r_s = 21.03 px; N = 4.31e5, 7.86e5; M_G = -21.10, -20.55; L = 2.71e10, 1.64e10 L_sun. The integral of the de Vaucouleurs law (pi I0 r_e^2 8!/b^8) was re-derived. Generating laws hold 4.526e5 and 8.008e5 counts (95% and 98% recovered): checked. L* = 1e10/0.71^2 = 1.98e10 L_sun: checked.
- 3(a) curve_fit: A = 0.356, lambda_c = 8792.27, sigma = 7.633 Å (3.8 pixels of 2.02 Å); one pixel = c ln10 × 1e-4 = 69.0 km/s: checked.
- 3(b) sqrt(260.3^2 - 90^2) = 244.2; "6%" correction, (90/260)^2 ≈ 1/9: checked.
- 3(c) M = 244.2^2 × 6907/0.0043 = 9.58e10 M_sun (with G = 4.30091e-3: same to 0.03%). Comparison with Sun-like stars: see difference 1. Notes' example v ≈ 200 km/s for 1e11 M_sun in 10 kpc (eq. 53, p. 15): checked.
- Points: 6+6+6+14+8 = 40, 8+10+8+9 = 35, 9+6+10 = 25, total 100; said to be ours.
- Choice boxes: right answer at positions 1, 2, 3, 3, 0; the right choice is never clearly the longest or shortest; each distractor is false on the data.
- No hint gives a result away (they give methods and constants only).

## Coverage and order
- MIT's steps kept in order: 1(A) profiles with sky subtracted, 1(B) 2" median bins, 1(C) mag/arcsec^2, 1(D) two fits and which law, 1(E) single-component failure; 2(A) Wien temperatures and types, 2(B) Hα and Ca II centroids and velocities, 2(C) Hubble distances and radii, 2(D) luminosities with the 90% assumption; 3(A) Gaussian width in Å and km/s, 3(B) quadrature subtraction, 3(C) virial mass and comparison with the stars.
- Left out and said so: the 1-pixel-bin plot and refining the centre (1(A)), reading FITS files with ds9/Astropy. Left out without saying so: the re-plot in 1(C) and the overplot of the model in 1(D) (difference 2).
- Our additions, all marked: pixel count in 1(b), apparent magnitudes in 2(d), M/L in 3(c). Our numbers, all marked: tables, w values, calibrations 2400/2550, M_sun,G = 5.1, sigma_c = 90 km/s, points.
- Citations: sheet pages (p. 1 grid formula; 1(B) to 1(D) and 2(A) on p. 2; 2(B) on pp. 2 and 3; 2(C), 2(D), 3 on p. 3) all right. Notes (printed footers checked with `pdftotext -f N -l N`): eq. (6) p. 5, eq. (14) p. 7, eq. (15) and (17) p. 8, Section 1.B galaxy types p. 9, eqs. (21) and (23) p. 10, eqs. (24), (26) and the 200 to 300 km/s dispersion p. 11, eqs. (52) and (53) p. 15: all right, and the section names (1.A, 1.B, 2.A) are right. Every derived closed form is marked "(our own solution)"; Wien's constant is cited to the sheet with a note that only the law is named there (acceptable).
- Summary and intro name topics only; no `## Summary` with results; no em dashes (0 found).

## Licensing
- The SDSS notice ("Galaxy images © Sloan Digital Sky Survey. All rights reserved ... excluded from our Creative Commons license", p. 1) is respected: the page uses no SDSS image, spectrum or FITS file, has no images at all, and says so accurately in the intro. Its tables are generated data (calcs `p1-table`, `p2-data` as page-own facts); the grid constants w differ from the sheet's (3.5810/3.5815 vs 3.5823/3.5825), the calibrations differ (2400/2550 vs 2328/2496), the line positions differ (8792 vs 8741 Å; 6677 vs 6679 Å).
- Only MIT's steps and a few constants (0.394"/pixel, 71 km/s/Mpc, 6563 Å, 90%) are taken from the sheet, credited. Wording is the page's own; no sentence copied from the sheet. No OpenStax, LibreTexts or third-party figures.
- The notes' "Courtesy of" galaxy pictures (p. 9) are not used.

## Notes
- `content:check`: 0 errors; the only warning for this page is the missing review file. All page letters with cosmology meanings (H_0, L, M, R, z, mu, lambda, I, r, d, T, sigma and its subscripts, c, G, m, F, N, v, e) have meanings scoped to `8-902-problem-set-1` in data/symbols.json; \bar falls back to the general "mean value" meaning, which fits the centroid.
- calcs `shown:` strings were spot-checked against the page text (intro values, p1e-made, p2a-made, p2b-made): they match.
- Source URLs (sheet resource page, lec01, lec02) return 200.
- Writer: Opus. Reviewer: Opus (same model, blind).

COUNTS: errors=1 warnings=1 info=6

## Resolution (2026-11-28, by the page author)

- Error 1 (Problem 3(c), stars against band light): the step now says the luminosity counts band light, each Sun gives 0.9 of its luminosity in the band, so the light means 2.71 × 10¹⁰/0.9 = 3.0 × 10¹⁰ Sun-like stars; such a population has M/L = 1.11 in these units and the virial mass is 3.2 times more. The box stays M/L = 3.54. The hint now says 1/0.9 ≈ 1.1 solar masses per solar luminosity of band light. New calcs entries `p3c-nstars`, `p3c-ml-sun`, `p3c-ratio-suns`; the old quote in `p3c-stars` removed.
- Warning 2 (dropped plots): the introduction now says that re-plotting the profiles in magnitudes per square arcsecond (1(C)) and drawing the fitted models over the points (1(D)) have no box.
- Info items left as they are.
