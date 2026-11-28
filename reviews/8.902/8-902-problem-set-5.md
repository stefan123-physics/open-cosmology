---
page: content/year-5/8.902/8-902-problem-set-5.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_5_pdf/ (read: pdftotext text, p. 2 rendered as an image)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read; pp. 63 and 68 rendered)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec11.pdf (read; p. 73 rendered)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read)
  - https://arxiv.org/abs/1010.4743 (not opened; Guy et al. 2010 is cite-only, and the page uses none of its data)
verdict: pass-with-notes
---

# Review: Problem Set 5: the mass of the Local Group, and cosmology from Type Ia supernovae

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page)
Solved from S\stripped-set-5.mdx and MIT's sheet only. The numbers come from my own SciPy scripts (scratchpad\rev5\p1.py, p2.py).

Problem 1
- (a) v = dr/dt = (A sin eta)/(B(1 - cos eta)); with A = r/(1-cos eta), B = t/(eta - sin eta): v = (r/t) sin eta (eta - sin eta)/(1-cos eta)^2.
- (b) Energy: (1/2) rdot^2 - GM_T/r = E < 0; the cycloid solves it with A = GM_T/(2|E|), B = GM_T/(2|E|)^{3/2}, so A^3/B^2 = GM_T; substitute A, B.
- (c) vt/r = -2.4219; root on (pi, 2pi): eta = 4.297 (one root only).
- (d) M_T = 3.99e12 Msun; M/L = 133.
- (e) R = 2G(M_T/2)/v_c^2 = 355 kpc (using the sheet's formula M = v_c^2 R/(2G)); two halos of 355 kpc each vs separation 700 kpc: they (just) touch/overlap; with M31 heavier they overlap.
- (f) r_max = 2A = 998 kpc; t_max = pi B = 8.26 Gyr; collision 2 pi B - t = 2.81 Gyr from now (at t = 16.5 Gyr).

Problem 2
- (a) D_L(z=1): (1,0) 4947 Mpc; (0,1) 8445 Mpc; (0.3,0.7) 6515 Mpc; (1.2,0) 4770 Mpc; (0.3,0) 5790 Mpc.
- (b1) mu_cosmo(0.5, flat 0.3) = 42.23 mag; sigma_20 at alpha=beta=1 = sqrt(0.06^2+0.07^2+0.06^2) = 0.110 mag (sigma_int not included).
- (b2) Iterated fit: alpha = 1.50, beta = 2.74, M = -19.31, Omega_M = 0.29 (chi2 = 22.4 for 20 SNe), converged in 3-4 iterations.
- (b3) mu(z=1; 0.3) - mu(z=1; 0.5) = 0.222 mag; comparable to or smaller than the ~0.1-0.15 mag scatter per SN, so many SNe are needed; sensitivity weak.
- (c) Grey dust dims distant SNe, makes them look farther, mimicking Lambda (raises apparent D_L at high z, pushes data toward the Lambda-dominated curves); concern because it would fake acceleration; colour corrections / grey dust and z>1 deceleration turnover test it.
- (d) Grid (alpha, beta, M fixed): minimum near (0.43, 0.87) with chi2 22.28; flat fit only 0.10 above: flat universe is consistent (inside 1 sigma). Ellipse elongated along positive slope (major axis direction (0.58, 0.81), i.e. Omega_Lambda rises with Omega_M): at z ~ 0.5 the data measure roughly the deceleration q0 = Omega_M/2 - Omega_Lambda (or a combination ~0.8 Omega_M - 0.6 Omega_Lambda); more matter can be offset by more Lambda.

### Comparison (one line per answer id)
- p1-eta: page 4.297, mine 4.2972. Agree.
- p1-mass: page 3.99, mine 3.993. Agree.
- p1-ml: page 133, mine 133.1. Agree.
- p1-halo: page 177 kpc, mine (blind) 355 kpc. **Disagreement, resolved in the page's favour by calculation.** My blind answer used MIT's sheet formula M(<R) = v_c²R/(2G). For a circular orbit in a spherical mass distribution, m v_c²/R = G M(<R) m/R² (notes lec01 eq. (22), p. 10, checked), so M(<R) = v_c²R/G and R = G(M_T/2)/v_c² = 4.301e-6 × 1.9966e12 / 220² = 177.4 kpc. MIT's factor 2 matches the singular isothermal sphere written with σ (M = 2σ²R/G, v_c² = 2σ²), as the page says. With the factor the radius is 355 kpc. The page's value is the correct physics; the change is disclosed in the hint and solution only (warning 1). On overlap: page "separate (355 kpc of 700)"; mine with the sheet's formula "just touching". With the corrected formula I agree with the page.
- p1-rmax: page 998, mine 997.6. Agree.
- p1-tmax: page 8.26, mine 8.257. Agree.
- p1-tcoll: page 2.81, mine 2.815. Agree.
- p2-dl-flat: page 6515, mine 6514.6. Agree.
- p2-dl-closed: page 4770, mine 4770.2. Agree.
- p2-dl-open: page 5790, mine 5789.6. Agree.
- p2-mu: page 42.23, mine 42.230. Agree.
- p2-sig: page 0.110, mine 0.110. Agree.
- (b2, self-marked): page α 1.50, β 2.74, M −19.31, Ω_M 0.29, χ² 22.4, four rounds; mine α 1.499, β 2.742, M −19.311, Ω_M 0.294, χ² 22.38, converged at the fourth minimisation. Agree. Δχ² = 1 range: page 0.21 to 0.39, mine 0.213 to 0.386. Agree.
- p2-dmu: page 0.222, mine 0.2215. Agree.
- p2-dust: page choice index 2 (dims distant SNe more, distances too large, like Λ). Same as mine. Agree.
- p2-flat: page choice index 1 (flat inside 1σ, curved models allowed along the ellipse). Mine: flat Δχ² = 0.114 above the curved minimum. Agree.
- p2-tilt: page choice index 2 (Ω_Λ rises with Ω_M, about 1.4 per unit). Mine: soft direction (0.59, 0.81), slope 1.36 to 1.39. Agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(e) statement and the introduction ("One thing differs from MIT's sheet in substance") | M(<R) = v_c²R/(2G) (p. 2) | Uses v_c² = GM(<R)/R, so R is half of what the sheet's formula gives (177 against 355 kpc), and the overlap answer turns from "just touching" to "separate". The change is said only inside the first hint and the solution | In the (e) statement add: "(MIT's sheet writes M(<R) = v_c²R/(2G); for a circular orbit v_c² = GM(<R)/R, so we drop the 2: our correction, see the solution)". In the introduction change "One thing differs" to "Two things differ" and name this correction |
| 2 | warning | Problem 2(a), second hint | Notes eq. (297), p. 68: Ω_k(t) = −kc²/H²; eq. (298): Ω_k,0 = −kc²/H₀² | "the notes' Ω_k = −kc²/(a²H²)" | Write "the notes' Ω_k,0 = −kc²/H₀² (eq. (298))", or keep the a² form and add "(the notes write −kc²/H², the same at a = 1)". In the solution cite eq. (298) rather than "(297) at a = 1" |
| 3 | warning | Problem 2(a) D_L boxes, 2(b1) two check numbers, 2(b3) the Δμ measure, 2(c) and 2(d) choice boxes | MIT asks for plots, fits and explanations only | These numeric checks and choice questions are our own but are not marked "(our addition)" (the intro only says the points and splits are ours) | Add "(our addition)" after "As a check of your code…", "Two first numbers…", "As one measure…", and to the choice questions of (c) and (d) |
| 4 | warning | Problem 2(c) statement | n/a | The part has a choice box, but the statement only asks open questions and never names the box | Add to the statement: "Then choose the statement below that describes the effect (our addition)." |
| 5 | warning | Problem 2(d), second hint, with box p2-tilt | n/a | Hint 2 says "more matter makes D_L smaller, more Λ makes it larger"; only one of the four p2-tilt choices has Ω_Λ rising with Ω_M, so the hint decides the box | Replace choice 2 ("Along the Ω_M axis…") or choice 4 by a rising distractor with the wrong slope, e.g. "Along a line on which Ω_Λ rises with Ω_M by about ½ per unit (the line of constant q₀ = Ω_M/2 − Ω_Λ)." |
| 6 | warning | data/symbols.json | n/a | No page-scoped meanings for a, z, H_0, Ω_Λ, Ω_k, Ω_r, Ω_{m,0} (only Ω_{Λ,0} and Ω_M are scoped). They fall back to the 8.902 course or general meanings. The fallbacks fit (scale factor, redshift, Hubble constant "about 67–73", general Ω_k = −kc²/(a²H²)), but the run's rule asks for page-scoped meanings for every cosmology letter | Add page-scoped meanings: a (the radius or scale factor of the notes' expanding sphere; a → r in Problem 1(b); a = 1/(1 + z) in Problem 2), z (redshift of a supernova, taken as exact), H_0 (71 km/s/Mpc, as MIT's sheet assumes), Ω_Λ, Ω_k (= 1 − Ω_M − Ω_Λ), Ω_r (0 here), Ω_{m,0} (the notes' name for Ω_M) |
| 7 | info | Problem 1(d), "The mass" step | n/a | B = 8.293 × 10¹⁶ s; with the page's own constant 1 Gyr = 3.156 × 10¹⁶ s, 2.628 Gyr is 8.294 × 10¹⁶ s (8.295 unrounded). The calcs harness uses a slightly different Gyr. No effect on GM_T = 5.30 × 10³² | Optional: write 8.295 × 10¹⁶ s |
| 8 | info | data/symbols.json meanings | n/a | r_max "at η = π" repeats the first hint of (f); E "½ṙ² − GM_T/r" shows the set-up of (b); q_0 "Ω_M/2 − Ω_Λ" shows the key of the (d) explanation in "Symbols on this page" | Optional: shorten to "the greatest separation of the pair", "the energy per unit mass of the pair", "the deceleration parameter today" |
| 9 | info | Problem 2(a) statement | n/a | "give D_L at z = 1 … for three of them" does not say which three (the box labels do) | Name them: "(0.3, 0.7), (1.2, 0) and (0.3, 0)" |
| 10 | info | p2-flat choices | n/a | The right choice is the only hedged one and among the longest; a reader may guess it from form | Optional: make another choice equally hedged |
| 11 | info | Problem 2(a) solution plot | MIT asks for a z ≤ 5 plot and a zoomed z ≤ 1 plot | One plot; the caption says the zoom is its left fifth | Fine as a model solution; no change needed |

## Arithmetic and answer checks
- Problem 1, own SciPy (brentq): vt/r = −2.42186, single root on (0, 2π) at η = 4.29723 (246.2°); sin η = −0.9151, η − sin η = 5.2123, 1 − cos η = 1.4034; A = 498.8 kpc = 1.539 × 10²² m; B = 2.6284 Gyr; GM_T = 5.30 × 10³² m³/s²; M_T = 3.993 × 10¹² M☉; M/L = 133.1; R = 177.4 kpc (v_c² = GM/R) or 354.9 kpc (sheet's formula); r_max = 997.6 kpc; t_max = 8.257 Gyr; t_coll = 16.515 Gyr, 2.815 Gyr from now. All page values agree.
- Problem 1(a) small-η limit 2/3 and 1(b) energy constant −A²/(2B²): derivations checked step by step; the matching of the cos η terms is correct; each solution ends with a check (sign and limit; bound energy and units; back-substitution; M/L meaning; factor-2 discussion; cycloid symmetry).
- Problem 2(a): own quad integration with sin/sinh forms: D_L(1) = 4946.9 (1,0), 8444.8 (0,1), 6514.6 (0.3,0.7), 4770.2 (1.2,0), 5789.6 (0.3,0) Mpc; D_L(5)/(c/H₀) = 6.51 (closed), 30.0 (Λ only). The page's I(1) values 0.7714, 0.5711, 0.6527 and sin/sinh factors 0.5649, 0.6856 match. The matter-only closed forms in the plot expressions (Ω − 2 = −1.7 and −0.8; Ω² = 0.09 and 1.44) and the EdS form are correct. Ratio of the curves at z = 1 is 1.77 (under 2, as the caption says).
- 2(b1): μ_cosmo(0.5) = 42.230; σ_20 = 0.110; Hubble-law μ = 41.62 (D = 2111 Mpc). Agree.
- Table: regenerated from the stated recipe (default_rng(2); s, c drawn in that order; σ_m = σ_c = 0.02 + 0.04z, σ_s = 0.02 + 0.05z; α 1.5, β 3.1, M −19.3, σ_int 0.10; noise added). It matches every entry of the page's table exactly (largest difference 0). The recipe in the calcs file and the solution of (b2) is therefore true.
- 2(b2): iterated fit reproduced (above). Literal σ_int² = 0.10 case: α 1.469, β 2.707, M −19.303, Ω_M 0.307, χ² 4.90, as the page says. χ²/dof = 22.38/16 = 1.40. Agree.
- 2(b2) plot: the 20 residual points recomputed with the rounded fit (1.50, 2.74, −19.31, 0.29) agree with the page to 0.001 mag; σ_i range 0.069 to 0.204 (page "0.07 to 0.20"); Ω_M ± 0.2 curves at z = 1 are +0.33 and −0.22. Agree.
- 2(b3): Δμ(z = 1) = 0.2215; at z = 0.03 it is 0.0097 (page "0.01"); "± 0.09" = half the Δχ² = 1 range. Agree.
- 2(c): the claim that, relative to the open matter-only curve (0.3, 0), the ΛCDM excess peaks near z ≈ 1 and then falls is right: 0.216 (z = 0.5), 0.256 (z = 1), 0.234 (1.5), 0.189 (2), 0.086 (3) mag.
- 2(d): Nelder-Mead minimum (0.4109, 0.8644), χ² 22.269; flat best fit Δχ² = 0.114; (0.3, 0) Δχ² = 21.31; (1, 0) Δχ² = 77.71; on a 0.01 grid the Δχ² < 2.3 region spans Ω_M 0 to 0.87 and Ω_Λ 0.20 to 1.49; Hessian soft direction (0.591, 0.807), slope 1.364. All agree with the page. The long axis is about 99° from the flat line, so "nearly at right angles" is fair.
- q₀ = Ω_M/2 − Ω_Λ and D_L ≈ (c/H₀)[z + ½(1 − q₀)z²] are correct.
- Tolerances: 1 to 3 % on the number boxes and 0.02 mag on μ; they reject the obvious slips (e.g. the sheet-formula 355 kpc on p1-halo, the Hubble-law μ = 41.62 on p2-mu). No formula boxes, so no `vars` or `mistakes` to check.
- Choice positions: 2, 1, 2 (varied enough); no choice is answerable from units.
- Calcs `shown:` strings: spot-checked about 30 against the page text; all present verbatim.

## Coverage and order
- Problem 1 (A) to (F) and Problem 2 (A) to (D) are all present, in MIT's order; MIT's (B) is split into (b1) data and checks, (b2) fit and plot, (b3) sensitivity comment, as the introduction says. MIT's three (B) deliverables (best fit, plot with ±0.2 curves, sensitivity comment) are all asked.
- Points: 30 + 60 keeps MIT's "double weight" for Problem 2; part points add up (4+6+5+5+5+5 = 30; 12+6+12+6+8+16 = 60).
- The wording is the page's own; no MIT sentence is copied beyond standard phrases.
- MIT's slips handled: σ_int² = 0.10 is read as σ_int = 0.10 mag, disclosed, with the literal reading checked in the solution; the factor 2 in M(<R) is corrected (disclosed only in hint and solution, warning 1).
- No hint gives a number away; hint 2 of (d) decides one choice box (warning 5).

## Licensing
- No figure from the notes is reproduced: the "Courtesy of" galaxy images of lec01 (p. 9) and the "All rights reserved" Wikimedia plot of lec10 (p. 64) are not used. All graphs are generated from formulas.
- The SNLS data of Guy et al. (2010) are not used: the page's table is its own, generated from a stated model and marked "our choice"; the reference is bibliographic only (arXiv abstract link). I did not open the paper or its abstract.
- No textbook pointer from MIT's sheet is used. No OpenStax or LibreTexts. No em dashes (0 found).
- The frontmatter summary names topics only, no answer. There is no `## Summary` section with results.

## Notes
- Citations checked against the printed page numbers of the PDFs: lec10 eqs. (273) and (274) p. 63, eq. (297) p. 68; lec11 eq. (314) p. 71 (it includes the da/(a²E(a)) form the page quotes), eq. (315) p. 72, eqs. (322) and (324) p. 73 (eq. (324) is the Einstein–de Sitter D_A and D_L pair, so the EdS citation is right); lec01 eq. (14) p. 7, eq. (22) p. 10. MIT sheet: Problem 1 formulas p. 1, Problem 1(E) p. 2, Problem 2(B) formulas p. 3, contour levels p. 4. All correct.
- Prerequisite slugs exist (four 8.902 lessons and 8.286 closed-universe-cycloid). The page's link to the 8.286 cycloid lesson is fair.
- The page's suggestion that MIT's 2 may come from M = 2σ²R/G is offered as a guess ("may be its origin"); fair wording.

COUNTS: errors=0 warnings=6 info=5

## Resolution (2026-11-28, by the page author)

- 1 (warning, factor 2 in M(<R)): the introduction now says "Two things differ" and names the correction first; the statement of 1(e) now says that MIT's sheet writes M(<R) = v_c²R/(2G), that for a circular orbit v_c² = GM(<R)/R, and that we drop the 2 (our correction, see the solution). The answer (177 kpc) and the solution are unchanged.
- 2 (warning, Ω_k with a²): hint 2 of 2(a) now quotes the notes' Ω_k,0 = −kc²/H₀² (eq. (298)); the solution cites reading 1, eq. (298), p. 68, instead of "(297) at a = 1".
- 3 (warning, unmarked additions): "(our addition)" added after "As a check of your code", "Two first numbers, to check the pieces of your code", "As one measure", the new choice sentence of 2(c) and "the two choice questions" of 2(d).
- 4 (warning, 2(c) box not named): the statement of 2(c) now ends "Then choose the statement below that describes the effect (our addition)."
- 5 (warning, hint 2 of 2(d) decides p2-tilt): choice 2 ("Along the Ω_M axis") is replaced by a rising distractor with the wrong slope, the line of constant q₀ = Ω_M/2 − Ω_Λ (½ per unit); the Check step of the solution now says why that line is right only very close to us. The answer index (2) is unchanged.
- 6 (warning, symbol meanings): page-scoped meanings added to the existing entries a, z, H0, Omega-vac (form \Omega_\Lambda), Omega-k, Omega-r and Omega-m (form \Omega_m,0); no existing meaning reworded or removed.
- 7 (info, 8.293): now 8.294 × 10¹⁶ s, from the page's own 1 Gyr = 3.156 × 10¹⁶ s; the calcs entry p1-B-seconds uses that constant, and its `shown:` string is updated.
- 8 (info, meanings that echo hints): this page's own meanings shortened: r_max "The greatest separation of the Milky Way and M31.", E "In Problem 1, the energy per unit mass of the pair. In Problem 2, E(z) = H(z)/H₀ …", q_0 "The deceleration parameter today."
- 9 (info, which three): the statement of 2(a) now names (0.3, 0.7), (1.2, 0) and (0.3, 0).
- 10 (info, p2-flat form): the first (wrong) choice is now hedged too ("…although curved models along the ellipse fit well").
- 11 (info, one plot): no change, as the review suggests.

Status set to `reviewed`.
