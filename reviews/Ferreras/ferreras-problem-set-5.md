---
page: content/year-5/Ferreras/ferreras-problem-set-5.mdx
reviewed: 2026-11-28
sources_read:
  - https://doi.org/10.14324/111.9781800084704 (read: local PDF of the book; pages 115-117, 122, 142, 144-145, 148, 151, 154, 159-162, 167-168, 179-180 rendered with pdftoppm and read as images)
verdict: pass-with-notes
---

# Review: Problem Set 5: Dark matter particles, MOND and a w-fluid

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the "Blind solve" answers below were written to this file from `stripped-set-5.mdx` and the book alone, before the full page, its calcs file (`calcs/Ferreras/ferreras-problem-set-5.yaml`) and its symbol meanings were opened. Page reviewed in worktree `ps-fer-5`, commit 346dae7.

## Blind solve

Written before opening the full page, its calcs file or its symbols (only `stripped-set-5.mdx` and the book's pp. 115-117, 122, 142, 144-145, 148, 151, 154, 159, 161-162, 167-168, 179-180, rendered). Scripts: scratchpad `ferreras/s5/solve.py` and `c2.py`. (Process note: this section was first written to this file before the page was opened; while assembling the final file a shell step overwrote it, and it was put back with the same answers, unchanged.)

My answers:
- 6.1A: t = a^2/(2 H0 sqrt(Omega_g)), a = kT0/1 MeV = 2.3525e-10, Omega_g = 2.5e-5/0.49: **t = 1.708 s**.
- 6.1B: Omega_r = Omega_g [1 + 3(7/8)(4/11)^(4/3)] = 1.6813 Omega_g: **t = 1.317 s**.
- 6.1C: g* = 2 + (7/8)(4 + 6) = 10.75; t = m_Pl/(3.32 sqrt(g*) T^2) hbar: **t = 0.738 s** (with the exact 8 pi^3 g*/90 instead of 1.66: 0.7376 s). It differs from B because e± were still relativistic (larger g*) and the neutrinos had T_gamma (no (4/11)^(1/3) yet), so H was larger at the same T.
- 6.2A: g m alpha^2 m_Pl x^(1/2) e^(-x) / (1.66 sqrt(g*) (2 pi)^(3/2)) = 1 → **x_f = 26.91**.
- 6.2B: **T_f = 3.717 GeV**.
- 6.2C: **t_f = 1.751e-8 s** → 1.751.
- 6.3A: rho_c = 5.163e-6 GeV/cm^3 (H0 = 70); 18 pi^2 × 0.3 rho_c × 8: **2.201e-3 GeV/cm^3**.
- 6.3B: **z_c = 9.29** (not reasonable for the whole halo: the mean density of a halo is far below the local density, which reflects the concentrated inner profile).
- 6.3C: r_h = 160.3 kpc, r_S = 16.03 kpc, mu(10) = ln 11 − 10/11; **rho(8 kpc) = 0.4393 GeV/cm^3** (mass check by quadrature: 1.0000).
- 6.3D: n = 3e-3 cm^-3; Gamma = n^2 sigma v = 9e-6 × 1e-44 × 2.3e7: **2.07** (×1e-42 cm^-3 s^-1).
- 6.4A: p_cm = mu v; q^2 = 2 p^2 (1 − cos theta); Delta E = q^2/2 m_N = mu^2 v^2 (1 − cos theta)/m_N.
- 6.4B: **Delta E_max = 2 mu^2 v^2/m_N = 2 m_chi^2 m_N v^2/(m_chi + m_N)^2**.
- 6.4C: m_N = 122.03 GeV, mu = 54.96 GeV: **29.14 keV** (checked by the lab-frame route 4 m_chi m_N/(m_chi + m_N)^2 × kinetic energy).
- 6.4D: **v_min = 95.27 km/s**.
- 7.1A: y = x f(x) rises steadily from 0 to infinity, so it can be inverted; f~(y) = (y/x(y))^2 = f(x(y))^2; y ≈ x^2 at small x gives f~ ≈ y; f → 1 gives f~ → 1.
- 7.1B: **f~(y) = 4/(1 + sqrt(1 + 4/y))^2** (= f(x(y))^2 with x = (y + sqrt(y^2 + 4y))/2).
- 7.1C: **f~(y) = 2/(1 + sqrt(1 + 4/y^2))** = 2y/(y + sqrt(y^2 + 4)).
- 7.2A: (125/70)^2 − 1 = **2.189** (the other reading, dark matter as a fraction of the total, is 0.686).
- 7.2B: a = 2.532e-11, a_N = 7.940e-12 m/s^2; a0 = a(a − a_N)/a_N: **5.54** (×1e-11 m/s^2).
- 7.2C: y = 0.0794; x = (y + sqrt(y^2 + 4y))/2; v = sqrt(x a0 R): **141.5 km/s**.
- 7.3A: u = z/r gives M dz/r^3 = M du/xi^2; alpha = alpha_N ∫0^1 f~^(-1/2)[s(1 − u^2)] du; f~ = 1 gives alpha_N.
- 7.3B: f~^(-1/2) = (s(1 − u^2))^(-1/2) and the integral is pi/2: **alpha = 2 pi sqrt(G M a0)/c^2** (independent of xi).
- 7.3C: **0.525 arcsec**; the plateau of the book's figure sits at about 0.25 to 0.3 arcsec, so the formula is about a factor 2 above the figure (the book says "~0.3").
- 7.3D: **alpha/alpha_N = 1.690** at s = 1 (checked by direct z-integration of Eq. 7.10: 1.6901).
- 8.1A: continuity, rho' + 3(a'/a)(rho + p) = 0 → d ln rho/d ln a = −3(1 + w); rho ∝ a^(−3(1+w)).
- 8.1B: **rho_r/rho_m ∝ 1/a**.
- 8.1C: 3^0.6 = **1.933**.
- 8.1D: **z_eq = [(1 − Omega_m)/Omega_m]^(−1/(3w)) − 1** (0.326 for w = −1 and 0.423 for w = −0.8 at Omega_m = 0.3).

Book slips claimed by the writer (checked on the rendered pages): Eq. 8.9, p. 180 prints d ln rho/da (the denominator is "da": a true slip). p. 151 "reduced mass of the dark matter particle–nucleon system" (as printed; for coherent scattering off the nucleus Eq. 6.14 needs the nucleus). p. 179 "w = 1 is the equation of an ideal gas, at constant temperature" (as printed; an isothermal ideal gas has p = (kT/m) rho, so w = kT/mc^2 ≪ 1, and w = 1 is stiff matter).

### Comparison (one line per answer id)
- e1-t: page 1.71 s, mine 1.708 s. Agree.
- e1-tnu: page 1.32 s, mine 1.317 s. Agree.
- e1-tg: page 0.738 s, mine 0.7377 s. Agree.
- e2-xf: page 26.9, mine 26.906. Agree (the page's sensitivity claims, g* = 80 → 27.0 and g = 1 or 4 → 26.2 or 27.6, recomputed: 27.02, 26.20, 27.61).
- e2-tf: page 3.72 GeV, mine 3.717. Agree.
- e2-t: page 1.75, mine 1.751. Agree.
- e3-rho1: page 0.00220, mine 0.0022013. Agree.
- e3-zc: page 9.29, mine 9.292. Agree.
- e3-rho8: page 0.439, mine 0.4393 (the c = 8 and 12 variants, 0.367 and 0.504, recomputed). Agree.
- e3-gamma: page 2.07, mine 2.07. Agree.
- e4-emax: page 2 m^2 M v^2/(m + M)^2, mine 2 m_chi^2 m_N v^2/(m_chi + m_N)^2. Identical.
- e4-xe: page 29.1 keV, mine 29.14. Agree.
- e4-vmin: page 95.3 km/s, mine 95.27. Agree.
- e5-simple: page 1/(1/2 + sqrt(1/4 + 1/y))^2, mine 4/(1 + sqrt(1 + 4/y))^2. Identical; checked at y = 0.01, 0.3, 2, 50.
- e5-standard: page 1/(1/2 + sqrt(1/4 + 1/y^2)), mine 2/(1 + sqrt(1 + 4/y^2)). Identical; checked at the same points.
- e6-excess: page 2.19, mine 2.189. Agree (same reading; the page also gives the other reading, 0.686, as I did).
- e6-a0: page 5.54, mine 5.542. Agree.
- e6-v: page 141 km/s, mine 141.46. Agree.
- e7-deep: page 2 pi sqrt(G M a0)/c^2, mine the same. Identical.
- e7-arcsec: page 0.525, mine 0.5253. Agree.
- e7-ratio: page 1.690, mine 1.6901 (the u-integral and a direct z-integration of Eq. 7.10 agree; s = 100 → 1.0066 and s = 0.01 → 15.708 also recomputed).
- e8-ratio (choice): page answer 1, "Falls as 1/a", mine rho_r/rho_m ∝ 1/a. Agree.
- e8-z2: page 1.933, mine 1.9332. Agree.
- e8-zeq: page ((1 - W)/W)^(-1/(3w)) - 1, mine the same. Identical; the 0.33 and 0.42 checks recomputed.

No disagreement on any of the 23 boxes. Calcs: `pytest tests/calc -k ferreras-problem-set-5` in the worktree: 140 passed; every `shown:` string (140) found verbatim in the page; `npm run content:check` in the worktree: 0 errors (only the expected "no review file yet" warning for this page).

## Differences from the MIT source
(Here "MIT source" means the book, Ferreras 2025.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | Exercise 6.4, Parts B to D (our addition) | (not in the book) | Part C uses exactly the numbers of the prerequisite lesson `detecting-dark-matter`: its worked example "How hard does a WIMP hit?" and its quiz question both take a 100 GeV particle at 230 km/s on a xenon nucleus of 122 GeV and print the answer, about 29 keV, with the formula 2μ²v²/m_N of Part B. The page does not say so (it cites only the lesson's rough scaling), so a reader who did the lesson already has box e4-xe. | Either change our numbers, e.g. m_χ = 50 GeV (our choice): μ = 35.47 GeV, ΔE_max = 12.1 keV, and with the 5 keV threshold v_min = 147.6 km/s (recompute e4-xe, e4-vmin, their calcs and checks, and the scaling comparison: 50 keV × 0.25 × 100/122 = 10.2 keV); or keep them and say "(worked in the lesson Detecting dark matter)" with a link, as the course note asks for exercises already worked in a lesson. |
| 2 | info | Exercise 7.3(C) statement | p. 168 states in the text "α₀ ~ 0.3 arcsec" for this case; the plateau of Figure 7.4 agrees with it (about 0.26 arcsec on the rendered figure). | "The book reads a limiting value of about 0.3 arcsec off its figure (p. 168)"; the intro says the comparison is with "the deflection angle the book quotes in words". | Align the two, e.g. "The book quotes about 0.3 arcsec for this limit (p. 168, below Figure 7.4)". |
| 3 | info | Exercise 7.3(C) solution, "Comparison with the book" | Figure 7.4 plateau about 0.26 arcsec. | "we could not reproduce the book's value". | Optional, and uncertain if added: the figure's plateau matches π√(GMa₀)/c² = 0.263 arcsec, exactly half of Eq. 7.10 as printed, so the figure may use a factor 2 instead of 4 in the MOND branch. I checked that the figure's standard curve fits the page's reading of the x-axis (Newtonian acceleration at ξ): at a/a₀ = 1 the solid line reads about 0.33 to 0.34 arcsec, the page's α_N = 0.334 arcsec, and Eq. 7.11 (a ≈ 6a₀ at 1 arcsec) agrees with s. The page's 0.525 arcsec is right for the formula as printed (checked by direct z-integration). |
| 4 | info | Exercise 6.1(C) and the 6.2 formula block | Eq. 5.23 is printed with g^{1/2} (p. 117). | g_*^{1/2}. | None needed: the book defines g_* for exactly this sum (Eq. 5.18, pp. 115-116) and Eq. 5.35 uses g_*. "(the book writes g)" could be added. |

Claimed book slips (each checked on the rendered page):
- Eq. 8.9, p. 180: the book prints d ln ρ/da = −3(1 + w). Confirmed; the correct left side is d ln ρ/d ln a (ρ ∝ a^(−3(1+w))). The page's bracketed note is right and fairly worded.
- p. 151, Exercise 6.4: "μ is the reduced mass of the dark matter particle–nucleon system". Confirmed as printed. For the recoil of the whole nucleus N in χ + N → χ + N, Eq. 6.14 needs the χ–nucleus reduced mass (my derivation: p_cm = μv, q² = 2p²(1 − cos θ), ΔE = q²/2m_N). The page presents this as "our reading", not as an error, which is fair.
- p. 179, after Eq. 8.8: "w = 1 is the equation of an ideal gas, at constant temperature". Confirmed as printed. An isothermal ideal gas has p = (kT/m)ρ_mass, so w = kT/mc² ≪ 1; w = 1 is stiff matter (a kinetic-dominated scalar field, ρ ∝ a⁻⁶). The page's "Our remark" is correct physics and does not overstate.

Readings the page states (all fair, all labelled):
- 6.1: photons only with T ∝ 1/a (Part A) is the plain reading of the book's data (it gives only Ω_γ,0 h²); Parts B and C, marked "(our addition)", show what neutrinos and e± change. H₀ = 70 drops out, as the page says.
- 6.2: α = 0.01 (the normalisation of the book's Eq. 6.10, p. 144, confirmed), ⟨σv⟩ = α²/m² exactly, g = 2, g* = 100 ("of order 100", p. 116, confirmed); x_f is insensitive to them (checked).
- 6.3: 18π² times the background density at z_c (standard Einstein-de Sitter virial overdensity, labelled our choice); Eq. 6.18 printed without ½ (confirmed on p. 154); "rate of events" read as annihilations per unit volume per second, with the ½ for identical particles mentioned. Fair.
- 7.2: "fractional mass excess" read as M_DM/M_bar = 2.19, with the other reading (0.686 of the total) given in the solution. Fair.
- 7.3: α/α_N as a function of s = GM/(a₀ξ²); consistent with the axis of the book's Figure 7.4 (row 3).

## Arithmetic and answer checks
- Every number in every solution and check was recomputed (scripts `s5/solve.py`, `c2.py`, `c3.py`, `c4.py` in the scratchpad). All agree to the digits shown, including: K = 1.071e-11 and ln(1/K) = 25.26; ⟨σv⟩ = 1.17e-25 cm³ s⁻¹ and Ωh² = 0.085; H(T_f) = 1.880e-17 GeV; ρ_c,0 = 5.163e-6 GeV cm⁻³; r_h = 160.3 kpc and ρ_S = 0.493; n_χσv = 6.9e-40 s⁻¹ and 3.0e-22 in 13.8 Gyr; σ = 4.3e-34 cm² and ×4e10; the deep-MOND speed 132 km/s and M = 2.28e10 M☉; ξ(s = 1) = 11.8 kpc, α_N = 0.334 arcsec, MOND 0.565 arcsec; 3^0.6 = 1.933; (7/3)^(1/3) = 1.326 and (7/3)^(1/2.4) = 1.423.
- Solutions: each step is right and each part ends with a check (units, a limit, an independent route or a number). The 6.4(A) centre-of-mass derivation, the 7.1 quadratic roots, the 7.3 substitution u = sin φ and the 8.1 first-law derivation were all verified.
- Formula boxes: the `vars` ranges keep every answer and mistake finite (content:check passes; by hand, 1 + w ∈ [0.05, 0.4] in e8-zeq). Each mistake differs from the answer everywhere in range: the e4-emax mistakes are ½, (m+M)²/M² and (m+M)/m times the answer; the e5 mistakes differ from the answers by at least 1.8% relative over y ∈ [1.5, 5] (closest pair: y/√(1+y²) and the e5-standard answer at y = 5) and far more at most points, so the random-point comparison rejects them; the e5 "1/y instead of y" mistakes coincide with the answers only at y = 1, outside the range; the e7-deep mistakes are fixed ratios 2/π and ½, or differ by GM/a ≠ 1 in range; the e8-zeq mistakes coincide only at Ω_m = 0.5, outside the range. Every mistake hint is true of its formula (each checked; for example the first e5-simple mistake is a_N/a, and the second e8-zeq mistake uses ρ_w ∝ a^(−3(1+w)) alone).
- Number tolerances reject the obvious slips: e1-t against forgetting h (2.44 s); e1-tg against today's g* (1.31 s); e2-t against dropping the factor 2; e3-rho1 against no Ω_m (0.0073) or no (1+z)³ (2.75e-4); e3-gamma against the ½ (1.04); e4-xe against θ = 90° (14.6) or μ = m_χ (96.5); e6-excess against 3.19 and 0.686; e6-a0 against the deep-MOND a²/a_N (8.07); e6-v against 132; e7-arcsec against π (0.263) or 4 (0.334); e7-ratio against π/2.
- The one choice box (e8-ratio) cannot be answered from length or units; the right choice is neither the longest nor the shortest.
- Points: 12 + 14 + 16 + 12 + 12 + 10 + 14 + 10 = 100, and each exercise's parts add up.

## Coverage and order
- All eight numbered exercises of Chapters 6 to 8 (6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 8.1) are used, in the book's order; I found no other EXERCISE box in these chapters.
- Parts beyond the book are marked "(our addition)": 6.1 B and C; 6.4 B, C and D; 7.1 C; 7.2 C; 7.3 D; 8.1 C and D. Our numbers are marked "our choice".
- The book's "Discuss the cases of dark matter, dark energy and a photon fluid" (8.1) is carried in the statement and answered in Part B's solution; fine.
- The overlap of 7.2 with the worked example of the lesson `mond` is acknowledged in the intro (the lesson uses other numbers: 15 kpc, 150 and 90 km/s), and Part C is new. The overlap of 6.4 C with `detecting-dark-matter` is not acknowledged (row 1).
- `covers` lists 6.1 to 6.6, 7.1 to 7.4 and 8.1 to 8.4; 7.5 (no exercises, coveredBy mond-tests) is left out, which is reasonable. `lecture: 8.4` is the last section covered.
- The statements are rewritten in the page's own words (closest is 6.3, "Justify the result with a reasonable collapse redshift and scale radius for the halo", a short paraphrase of a technical instruction; acceptable).
- No answer leak found: the "How to answer" examples (`0.25`, `1.2e5`, `a*b/c`, `sqrt(a)/b^2`) are not answers; no statement, preamble or hint gives a box's value; the `summary` names topics only; the symbol meanings give nothing away (K, s, r_h and y only restate definitions in the statements).

## Licensing
- No figure of the book is reproduced or redrawn; Figures 7.2 and 7.4 are described in words only, and the page uses only the numbers the exercise text states (7.2) and the value the book states in its text (7.3). No `<Plot>` on the page.
- Credits: author, title, publisher (UCL Press, 2025), licence CC BY-NC 4.0, "rewritten in our own words", solutions ours, and "our reading", "our choice" and "our addition" marking the changes. `source.url` is the book's DOI. `license: CC BY-NC-SA 4.0` as on the other Ferreras pages.
- No OpenStax, LibreTexts or other restricted source; the only references are CODATA 2018 (NIST) and IAU 2015 B3. The author's other book (FoGDFE) is not used. No em dashes in the page.

## Notes
- Symbols: every letter with a course-wide meaning used on the page has a page-scoped meaning (`pages: ["ferreras-problem-set-5"]`) or a general or course meaning that fits (θ angle, ρ density, Ω density parameter, H Hubble parameter, G, n_eq). Minor (info): the page-scoped `a` meaning names Exercises 7.1 and 7.2 for the acceleration, but the 7.3 statement also uses a/a₀; the `M` meaning names the halo (6.3) and the lens (7.3), but M is also the baryonic mass in the check of 7.2(C). Adding those uses would make the popups exact.
- Outside this page (info): the lesson `mond-tests` says "Ferreras finds a limit of about 0.3 arcseconds" with no note that Eq. 7.10 as printed gives 0.525 arcsec; once row 3 is settled, the lesson could get the same short note.
- Values: H₀ = 70, Ω_m,0 = 0.3, T = 2.73 K and 13.8 Gyr pass the values check (content:check 0 errors).

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-28, by the page author)

- Warning 1 (6.4(C) repeats the lesson's numbers): the part now says the same numbers are worked in the lesson Detecting dark matter, with a link, so the reader checks against it afterwards. Numbers kept.
- Info 1 (7.3(C) wording): now "The book quotes about 0.3 arcsec for this limit (p. 168, below Figure 7.4)".
- Info 2 (the figure's plateau matching half of Eq. 7.10): no change on the page, which already says its value differs from the book's and that the order of magnitude agrees; the possible factor 2 in the figure is not checkable from the book.
- Info 3–5: no change (g versus g_* is a notation point; the symbol meanings already fit; the mond-tests lesson note is a separate follow-up).

Status set to `reviewed`.

## Changes after the owner's feedback (2026-11-28, by the page author)

- 6.3(D): the box now also accepts the rate with the factor ½ for identical particles (1.035, shown as 1.04 in the solution), with a note; new calcs entry e3-gamma-also (docs/ANSWER-BOX-FIX-PLAN.md Step 4).
- 7.2(B): the statement now says to type only the number in front of 10⁻¹¹; the box also answers 5.54e-11 with a power-of-ten hint (site-wide, Step 4).
- 7.3(C): the comparison step now gives our reading of the book's 0.3 arcsec: half of our limit, 0.263 arcsec, the deflection without the factor 2 of general relativity, close to the plateau of Figure 7.4; new calcs entry e7-arcsec-newton.
- The typed-formula preview of 7.3(B) and 6.4(B) (red `\cdota_0`, `\cdotm_N`) is fixed in shared code for every page (Steps 1-3).
