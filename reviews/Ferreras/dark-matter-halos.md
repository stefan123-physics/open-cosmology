---
page: content/year-5/Ferreras/dark-matter-halos.mdx
reviewed: 2026-11-15
sources_read:
  - Ferreras, Fundamentals of Dark Matter (UCL Press 2025), Chapter 3 introduction and Sections 3.1–3.2, printed pp. 50–62 (read, from the local fdm.pdf via pdftotext -layout and -raw; maths symbols garbled in the extraction and rebuilt from context; page images could not be rendered because pdftoppm is not installed)
  - https://doi.org/10.14324/111.9781800084704 (not fetched; the local PDF was used)
verdict: needs-changes
---

# Review: Dark matter halos — mass, profile, concentration, shape and spin

## Differences from the MIT source
(Source here = Ferreras, Chapter 3, Sections 3.1–3.2.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | error | Slope plot, caption | p. 55: halos reach slope −2 at the scale radius and are shallower inside, steeper outside — said of the simulated (NFW-like) halos only. | "All the curved profiles are shallower than isothermal inside r_S and steeper outside." | Wrong for the Hernquist curve the plot itself draws: γ = −(1 + 4x)/(1 + x) = −2 at x = 0.5, so Hernquist is already steeper than −2 between 0.5 r_S and r_S (γ(1) = −2.5). Say "NFW and Einasto are shallower than isothermal inside r_S and steeper outside; Hernquist crosses −2 at r_S/2". |
| 2 | warning | Worked example "How big is a halo?", step Compare | — | Halo radius ≈ 210 kpc vs "a stellar disc perhaps 10 kpc across: the halo is some twenty times larger." | Compares a radius with a diameter. Radius vs radius (210 vs 5 kpc) or diameter vs diameter (420 vs 10 kpc) gives about 40×. Either say "a disc of radius about 10 kpc: some twenty times smaller than the halo radius" or change the factor to about 40. (calcs file should follow.) |
| 3 | warning | Worked example "Mass and rotation curve of an NFW halo" | Exercise 3.3, p. 56: show the NFW mass diverges logarithmically, Hernquist converges, and find r_vmax in both cases. | Solves the book's Exercise 3.3 for NFW (r_vmax ≈ 2.16 r_S); Hernquist only mentioned for the finite mass; no Hernquist r_vmax. | Not an original example (it is the book's exercise worked out, not copied text). Acceptable as a solution if labelled as "Ferreras's Exercise 3.3"; optionally add the Hernquist case (v_c² ∝ x/(1+x)², peak at x = 1, r_vmax = r_S) to complete it. |
| 4 | info | Eq. (3.5) triaxiality | p. 61: T built from 1 − s² and 1 − q²; numerator/denominator order cannot be read reliably from the garbled extraction (uncertain). | T = (1 − q²)/(1 − s²), "from 0 (oblate) to 1 (prolate)". | The page's form is the standard (Franx et al. 1991) definition and is consistent with s = a3/a1, q = a2/a1 (q = 1 → T = 0 oblate; q = s → T = 1 prolate). The 0/1 interpretation is the page's addition; correct. Confirm the fraction order against the printed page. |
| 5 | info | Introduction, first paragraph | p. 50: "We see in Chapter 5 that this component cannot be attributed to a baryonic particle." | "(Chapter 5, on this site the 8.286 and 8.902 pages, shows that it cannot be made of baryons either.)" | Sentence is ungrammatical. E.g. "(Ferreras's Chapter 5 — on this site, the 8.286 and 8.902 pages — shows …)". |
| 6 | info | Einasto paragraph | Exercise 3.2, p. 56: the Einasto slope is "comparable" to NFW for α ≈ 0.2. | "with α ≈ 0.2 it closely follows the NFW profile." | Slight overstatement: at x = 0.01 NFW gives −1.04, Einasto −0.80; at x = 10, −2.82 vs −3.17. "Is comparable to" or "roughly follows" is closer to the book and to the numbers. |
| 7 | info | Shape, baryons | p. 61: "feedback and radiative transfer tends to produce rounder halos, with a lower velocity anisotropy". | "feedback and radiation make halos rounder". | Fine; "radiative transfer" is the book's term. |
| 8 | info | Mass section | p. 53 and Fig. 3.1 (Murray et al. HMF code, h = 0.7, Ω_m = 0.3): cluster halos non-negligible only at z ≲ 2. | Same, without naming the figure. | Fine; the third-party figure is not reused. |

Formula checks (equation numbers and printed pages verified against the running page headers in the extraction):
- Eq. (3.1), p. 55: γ = d ln ρ / d ln r, −2 for the isothermal sphere. Matches.
- Eq. (3.2), p. 55: ρ(x; α, β) = ρ₀ / [x^α (1 + x)^β], x = r/r_S; (2,0) isothermal, (1,2) NFW, (1,3) Hernquist; inner α ≈ 1.5 or 0 claimed by others (p. 56). Matches.
- Eq. (3.3), p. 56: ρ = ρ_S exp[−(2/α)(x^α − 1)]. Matches (reconstructed; exponent factor 2/α consistent with Exercise 3.2's statement that the slope is −2 at r_S for any α). Slope γ = −2x^α derived on the page: correct.
- c = r_h / r_S, p. 57 (unnumbered in the book). Matches.
- Eq. (3.4), p. 61: s = a3/a1, q = a2/a1, p = a3/a2. Matches.
- Eq. (3.5), p. 61: see row 4 (uncertain order in extraction; page's form is standard).
- Eq. (3.6), p. 62: λ = L|E|^{1/2} / (G M^{5/2}). Matches (absolute value on E reconstructed; standard Peebles definition).

## Arithmetic and answer checks
- ρ_c = 3H₀²/(8πG) at H₀ = 70: 1.360 × 10¹¹ M☉/Mpc³; × 0.3 = 4.079 × 10¹⁰ M☉/Mpc³. Page: 1.36 × 10¹¹, 4.08 × 10¹⁰. Correct.
- R = (3 × 3 × 10¹¹ / (800π × 4.08 × 10¹⁰))^{1/3} = 0.2063 Mpc. Page: ≈ 0.21 Mpc, 210 kpc. Correct. "Twenty times larger": see row 2.
- NFW enclosed mass: ∫₀ˣ x′/(1+x′)² dx′ = ln(1+x) − x/(1+x). Correct.
- Peak condition: d/dx[m(x)/x] = 0 ⇔ x m′(x) = m(x) with m′ = x/(1+x)² ⇒ ln(1+x) = x²/(1+x)² + x/(1+x). Correct; root x = 2.1626 (recomputed with brentq). Page 2.163 / 2.16. Correct.
- Slope formulas in the plot: NFW −(1+3x)/(1+x), Hernquist −(1+4x)/(1+x), Einasto −2x^α, isothermal −2. All correct; caption claim wrong for Hernquist (row 1).
- Quiz 1 (answer 1): correct; 10–20 kpc and 100–200 kpc match p. 52.
- Quiz 2 (answer 1, (1,2) = NFW): correct; explanation correct.
- Quiz 3 (answer 2, ≈ 2.16 r_S): correct.
- Quiz 4 (answer 1): correct, matches p. 58.
- Flashcards: NFW (slope −1, −3, −2 at r_S; mass bracket) correct; concentration correct; spin λ ≈ 0.04, log-normal, random-motion support — matches p. 62.
- `npm`-side: `pytest tests/calc -k dark-matter-halos`: 17 passed.

## Coverage and order
- Order follows the book: 3.1 anatomy → 3.2 mass → density profile → size and concentration (incl. splashback/backsplash) → shape → angular momentum.
- Left out (info): Exercise 3.1 (10¹² M☉ halo at 180× the background at collapse) — replaced by an original example with own numbers, good; the first "How about…?" box (p. 57–58: v_c, r_vir ≈ v_c / [10 H(z_coll)], concentration rising with collapse redshift in Einstein–de Sitter); the second box (p. 58–59: c₁₄ ≈ 6.5 M₁₄^−0.1 and the z_vir–mass trend); Exercise 3.4 (spin ratio Ω/Ω₀ vs λ); the remark (p. 59) about what the dark matter halos of backsplash galaxies are like. The r_vir–v_c–H(z) relation is the most substantive omission; consider a short paragraph.
- Added (info): the oblate/prolate meaning of T; the Einasto slope formula (correct).

## Licensing
- Book is CC BY-NC 4.0; adaptation into a CC BY-NC-SA page is allowed with attribution (course `_course.json` carries the attribution string).
- Figures 3.1 (Murray et al. HMF code) and 3.2 (Uchuu, Ishiyama et al. 2021) are not reproduced; the only diagram is a generated `<Plot>`. Good.
- A 6-word overlap check against the whole book found only short standard phrases (e.g. "diffuse gas mostly hydrogen and helium", "the difference is that baryons can lose energy", "total angular momentum energy and mass"). No copied paragraphs.

## Notes
- Forward links: `leadsTo` Ferreras 3.4 (core–cusp, page exists) and 4.2 (numerical simulations; syllabus 4.2 is "A numerical solution to Poisson's equation", page `simulating-galaxy-formation`) — both fair. Inline links to 8.902 `spherical-collapse` and `press-schechter` resolve (course slug `8-902`).
- No `Callout kind="cosmology"` on this page; not required for a cosmology-role course.
- The "≈ 180" (spherical collapse) and "200 × background at virialisation" figures match pp. 51 and 57, including footnote 6 on alternative definitions.

## Resolution (2026-11-15, by the page author)

- Error (plot caption): corrected. NFW and Einasto are shallower than isothermal inside r_S and steeper outside; Hernquist steepens faster, already reaching −2 at r = r_S/2.
- Warning (halo vs disc size): now compares radius with radius. The halo's 210 kpc radius is some forty times the 5 kpc radius of a 10 kpc disc; calcs updated (halo-vs-disc: 210/5 = 42).
- Warning (NFW worked example is Exercise 3.3): now titled "(the book's Exercise 3.3)" and completed with the Hernquist result (v_c peaks at x = 1, the scale radius).
- Info (ungrammatical Chapter 5 sentence): rewritten.
- Info ("closely follows" NFW): now "its slope is comparable to that of the NFW profile", as in the book.
- Info (Eq. 3.5 orientation; uncovered "How about…?" boxes and Exercise 3.4): T = (1 − q²)/(1 − s²) kept as the standard definition; the boxes and exercise are left out on purpose.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
