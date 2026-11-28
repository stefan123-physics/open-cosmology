---
page: content/year-5/8.902/8-902-problem-set-4.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_4_pdf/ (read, local PDF + pdftotext)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read; p. 69 rendered as image)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec11.pdf (read; pp. 70-75 rendered as images)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec13.pdf (read; p. 86 rendered as image)
verdict: pass-with-notes
---

# Review: Problem Set 4 (8.902): quasar absorbers, absorber counts, sizes on the recombination surface

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before the full page was opened; statements and MIT's sheet only)
- p1a: z1 = 4711/1206 - 1 = 2.9063; z2 = 4836/1206 - 1 = 3.0100; Δχ = (c/H0)∫_{z1}^{z2} dz/E(z) = 99.62 Mpc (c/H0 = 4222.4 Mpc).
- p1b: 1+z21 = 4836/4711, z21 = 0.02653.
- p1c: Δχ ≈ c(z2 - z1)/H(z1) = c z21 (1+z1)/H(z1); H(z) = H0 sqrt(Ωm(1+z)^3 + ΩΛ); H(z1) = 306.06 km/s/Mpc; estimate Δχ ≈ 101.53 Mpc.
- p2a: dN/dz = n σ c (1+z)^2 / (H0 sqrt(Ωm(1+z)^3+ΩΛ)) (fixed proper σ); increases with z at every z (d/dx of x²/E ∝ 0.5 Ωm x⁴ + 2 ΩΛ x > 0).
- p2b: σ = 0.1561 Mpc²; disc radius 222.9 kpc.
- p3a: χ_rec = 13428 Mpc (13491 without radiation); comoving radius 1.785 Mpc; angle (diameter) 0.914 arcmin (radius reading: 0.457).
- p3b: 0.8534 deg.
- p3c: d_H = 249.6 kpc; M_tot = 4.749 × 10^18 M☉ (matter only 3.647 × 10^18).
- p3d: z_eq = 3639.8; d_H = 29.07 kpc; M_tot = 4.169 × 10^17 M☉.

### Comparison (one line per answer id)
- p1-z1: page 2.906, mine 2.9063. Agree.
- p1-z2: page 3.010, mine 3.0100. Agree.
- p1-dchi: page 99.6 Mpc, mine 99.62. Agree.
- p1-z21: page 0.02653, mine 0.026534. Agree.
- p1-hz: page H0*sqrt(Om*(1+z)^3+OL), mine identical. Agree.
- p1-hz1: page 306.1, mine 306.06. Agree.
- p1-dchi-approx: page 101.5, mine 101.53. Agree.
- p2-dndz: page n*sigma*c*(1+z)^2/(H0*sqrt(Om*(1+z)^3+OL)), mine identical. Agree.
- p2-trend: page "increases at every redshift" (index 1), mine the same. Agree.
- p2-sigma: page 0.156 Mpc², mine 0.1561. Agree.
- p2-radius: page 223 kpc, mine 222.9. Agree.
- p3-chirec: page 13430 Mpc, mine 13428. Agree.
- p3-theta-gal: page 0.914 arcmin (diameter), mine 0.914 (diameter reading). Agree.
- p3-theta-200: page 0.853 deg, mine 0.8534. Agree.
- p3-dh-rec: page 249.6 kpc, mine 249.56. Agree.
- p3-mass-rec: page 4.75 (10^18 M☉), mine 4.749. Agree.
- p3-zeq: page 3640, mine 3639.8. Agree.
- p3-mass-eq: page 4.17 (10^17 M☉), mine 4.169. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(c) solution, Check step, last sentence | (no statement; the page's own part (a) takes the angle a sphere subtends as diameter/χ) | "it spans 274.8/13 430 rad = 1.2° on the sky today"; 274.8 Mpc is the comoving horizon *radius*, the whole sphere spans 2.3° | Write "its radius subtends 274.8/13 430 rad = 1.2° on the sky today (the whole horizon sphere about 2.3°)", or use the diameter, 2.3°, consistent with part (a); update calcs entry p3-horizon-angle and its `shown`. |
| 2 | warning | data/symbols.json | n/a | H, a, z and T (letters with cosmology meanings, all used on the page) have no meaning scoped to `8-902-problem-set-4`; they fall back to the 8.902 course meanings (Hubble parameter; scale factor, 1/(1+z) in the past; redshift; temperature in kelvin). Those are correct here, but the brief requires page-scoped meanings. | Add page-scoped meanings: H (the Hubble parameter H(z) = H₀E(z); H(z₁) at galaxy 1's epoch), a (scale factor, a = 1/(1+z), 1 today), z (redshift of an absorber or of the epoch), T (today's CMB temperature, 2.725 K in Problem 3); none naming a result. |
| 3 | info | Problem 1(a), Formula "Comoving distance between the two galaxies", `at="eqs. (334)–(335), p. 74, with Ω_r,0 = 0"` | (334)-(335) on p. 74 are D_A integrals (with the factor 1/(1+z)); dχ = (c/H₀) dz/E(z) is stated on p. 75 just before (341) | cites the D_A equations for χ | `at="eq. (314), p. 71, and dχ before eq. (341), p. 75"`, or add "(D_A without the factor 1/(1+z))". |
| 4 | info | Problem 1(c), Formula "Hubble parameter of the model", `cite="reading2" at="eq. (334), p. 74 (the integrand…)"` | H² = H₀²E² is boxed eq. (302), Lecture 10, p. 69 | cites the integrand of a D_A formula | `cite="reading1" at="eq. (302), p. 69"` (the step text already says so). |
| 5 | info | Problem 1(b) solution, "Stretching in two stages" | eq. (310), p. 70: a_obs/a_em = 1 + z (general); (311) is the a₀ = 1 case | cites (311) | Cite eqs. (309)–(310), p. 70, which hold for an observer at a₁ ≠ 1. |
| 6 | info | Problem 3(c), Formula "Proper horizon distance" | Lecture 13 eq. (399), p. 86: l_horizon = a∫₀ᵗ c dt/a(t) | cites Lecture 11 eq. (314) with a_em = 0 | Optionally cite reading3, eq. (399), p. 86, which is exactly this definition. |
| 7 | info | Problem 3 boxes χ_rec, d_H, z_eq | MIT asks only for the angles and masses | intermediate boxes, natural steps of MIT's parts; the intro lists additions for Problems 1 and 2 but not these | Optionally add to the intro: "In Problem 3 we also check χ_rec, d_H and z_eq on the way." |
| 8 | info | Problem 1(c) statement | "Hubble constant H(z) at the earlier epoch" | "at the epoch of galaxy 1" | Reasonable reading (earlier than today); no change needed. |

## Arithmetic and answer checks
- All 18 box values recomputed independently (SciPy quad); see the blind solve. All agree to 3 significant figures or better.
- Solution steps recomputed: E(z1) = 4.3107, E(z2) = 4.4770; ∫dz/E = 0.023593; trapezoid 99.64 Mpc; χ to the galaxies 6176 and 6276 Mpc; z2 - z1 = 0.1036 ("four times" z21: ratio 3.906); cz21 = 7955 km/s; proper separation 25.99 Mpc; midpoint estimate 99.61 Mpc; estimate 1.9% high; growth of dN/dz from z = 0 to 2: 3.034; log slope 2 - 1.5 Ωm(1+z)³/E² ≥ ½ (derivation correct); E(2) = 2.9665, H(2) = 210.6, c/H(2) = 1423.4; σ without (1+z)² = 1.405 Mpc²; 223/15 = 14.9 ("more than ten times"); Ω_r,0 = 8.24e-5 (photons at 2.725 K times 1.6813 for three neutrino species, h = 0.71); ρcrit,0 = 2.775e11 h² = 1.399e11 M☉/Mpc³; ρm,0 = 4.197e10; R = 1.785 Mpc; θ = 2.659e-4 rad = 54.8″; no-radiation χ_rec 13491 (+0.47%); 200 Mpc → 0.853°, 1.7 Moon diameters; horizon integral 0.06507 (the exact Λ-free form agrees); E²(1100) = 5.215e8; matter fraction 77%; no-radiation horizon ×1.691, mass 1.76e19 (3.7×, "about four"); 1 + z_eq = 3641, integral 0.02507, comoving horizon 105.8 Mpc, d_H 29.07 kpc, ρtot 4.05e21, M 4.17e17, half 2.1e17; 3640 vs 3700: 1.6% lower. All correct. Only the 1.2° wording is a problem (row 1): radius 1.172°, diameter 2.345°.
- Calcs: pytest `tests/calc -k 8-902-problem-set-4` in the worktree: 91 passed. Every `shown:` string of the calcs file was found verbatim in the page.
- Answer boxes: p1-hz vars (H0 50-100, Om 0.1-0.5, OL 0.5-0.9, z 0.5-5) keep the answer and all three mistakes finite and positive; each mistake differs from the answer at random points (e.g. answer 216.3 vs mistakes 713.6, 219.2, 128.5). Each mistake hint is true of its formula. p2-dndz: vars positive, both mistakes finite; hint 1 (comoving σ, missing (1+z)²) and hint 2 (proper density with comoving path) describe their formulas correctly.
- Tolerances: p1-dchi (1%) rejects the estimate 101.5; p1-dchi-approx (1%) rejects 99.6; p1-z21 rejects z2 - z1; p3-theta-gal (2%) rejects the radius reading 0.457; p3-mass-rec (2%) rejects matter only 3.65; p3-chirec (1%) accepts the no-radiation 13491, acceptable since radiation is the page's own choice.
- Choice box p2-trend: four options of similar form, not answerable from length or units; it is the set's only choice box, so position variation does not apply.
- Hints: none gives a result away. Each solution ends with a Check step.
- Points: 12+8+15 = 35, 12+13 = 25, 12+6+12+10 = 40, total 100, all stated as ours (MIT gives none).

## Coverage and order
- Problems 1-3 and parts A-C, A-B, A-D in MIT's order, same physics. Each MIT question has a box or a self-marked step (1C's "show" is in the solution; its H(z) and estimate have boxes).
- Additions are labelled: redshift and H(z1) boxes (intro), halo radius "(Our addition:)", every value MIT leaves open in Problem 3 ("our value", "our reading", "our choice"), the proper-area reading of σ in Problem 2 "(our reading)". Row 7 covers the unmentioned intermediate boxes of Problem 3.
- Citations checked against the rendered PDFs (printed footer page numbers): lec10 eq. (295) p. 68, eq. (302) p. 69, eqs. (304)-(305) p. 69 (matter-radiation equality, confirmed on the rendered page), z = 3700 p. 69; lec11 eq. (311) p. 70, (314) p. 71, (318) p. 72, (334)-(335) p. 74, (339)-(341) p. 75; lec13 eq. (396) p. 86 (z = 1100 appears there) and the remark that growth changes once a mode enters the horizon, p. 86. All page numbers correct; rows 3-6 concern the best-matching equation. MIT sheet: Introduction p. 1, Problems 1 and 2 p. 1, 3(A) p. 1, 3(B) and 3(C) p. 2: correct.
- Frontmatter `summary` names topics only, no results. No `## Summary` section.

## Licensing
- No figures on the page; nothing from lec10's Wikimedia plot (p. 63, marked "CC BY-SA 4.0 … All rights reserved") or lec11's distance plot (p. 74) is reproduced or described.
- Statements are in the page's own words; only short standard terms are shared ("Hubble flow", MIT's title "Baby Pictures").
- No OpenStax; MIT's sheet has no textbook pointers. No em dashes (0 found).

## Notes
- Symbols: 44 page-scoped meanings exist (λ, σ, χ, z₁, z₂, z₂₁, n, N, R, R_halo, d_H, M_H, M_gal, ρ_tot, ρ_crit,0, E, f_k, D_A …); none gives away an answer (z_rec = 1100 and M_gal = 10¹² are given in the statements). θ uses the general "An angle." meaning, which fits. See row 2 for H, a, z, T.
- Links to the two prerequisite lessons resolve to existing 8.902 pages (Lectures 10 and 11).
- Not run by the reviewer: `npm run content:check`, the build.

COUNTS: errors=0 warnings=2 info=6

## Resolution (2026-11-28, by the page author)

- Warning 1 (horizon angle): the Problem 3(c) check now says the horizon's radius subtends 274.8/13 430 rad = 1.2° and the whole sphere about 2.3°; new calcs entry `p3-horizon-angle-diameter` (2.3°) beside `p3-horizon-angle`.
- Warning 2 (symbols): page-scoped meanings for H, a, z and T added to `data/symbols.json` (`pages: ["8-902-problem-set-4"]`), none naming a result.
- Info items: no change (the citations given are correct equations of the notes; the reviewer's alternatives are equally valid).

Status set to `reviewed`.
