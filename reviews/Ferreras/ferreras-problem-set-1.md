---
page: content/year-5/Ferreras/ferreras-problem-set-1.mdx
reviewed: 2026-11-28
sources_read:
  - https://doi.org/10.14324/111.9781800084704 (read: local book.pdf, Chapter 2, pp. 19-46; every exercise and every formula used was checked on the rendered page, PDF page = printed page + 14)
verdict: pass-with-notes
---

# Review: Practice Set 1: Galaxies, clusters, stars and lenses

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in the worktree `.claude/worktrees/ps-fer-1` (commit c3d3a03), with `calcs/Ferreras/ferreras-problem-set-1.yaml` and the page-scoped meanings in `data/symbols.json`. `npm run calc:test -- -k ferreras-problem-set-1`: 68 passed. `npm run content:check` in the worktree: 0 errors (the only warning for this page is the missing review file). No em dashes, no OpenStax.

## Blind solve

Written before opening the full page, its calcs file or its symbol meanings. Inputs: `stripped-set-1.mdx` and the book's Chapter 2 (rendered pages 21, 23, 24, 27, 29, 30, 33, 36, 37, 41, 42). Numbers recomputed in Python (`rv1s/solve.py` in the scratch folder), each formula checked by a second route (sympy derivative or integral, numerical root, direct lens-equation check).

My answers:
- p1a: show (x = R cos φ along the major axis, y = R sin φ cos i on the sky; the velocity component along the line of sight is v cos φ sin i).
- p1b: v = 180 / sin 50° = **234.97 km/s**.
- p1c: (i) flat curve: v_los ∝ x/R = cos φ, so isovelocity lines are **straight lines through the centre** (radial "legs"); (ii) solid body: v_los ∝ x, so they are **straight lines parallel to the minor axis**.
- p2a: W = −GM²/R (sympy), 2K + W = 0 with K = (3/2)Mσ² (σ one-dimensional) gives **α = 3**. (With σ read as the 3D dispersion α = 1; with Jeans equilibrium of an untruncated isothermal sphere, ρ = σ²/(2πGr²), α = 2.)
- p2b: M = 3σ²R/G = **1.046 × 10¹⁵ M☉** (SI and astro-unit routes agree).
- p2c: M/L = **104.6**; stellar fraction 5/104.6 = **4.78 %**.
- p2d: uniform sphere W = −3GM²/(5R), **α = 5**.
- p3a (dN/dM ∝ M^−2.35): N(0.1–0.5)/N(10–20) = **730.8**. (Book's literal dN/dlogM ∝ M^−2.35, i.e. dN/dM ∝ M^−3.35: 6.09 × 10⁴.)
- p3b: mass ratio = **10.02**. (Literal book convention: 730.8.)
- p3c: L(massive)/L(low) = **322.4**. (Literal book convention: 6.15.)
- p4a: **p = (4 − x)/3** (light ∝ M_t^{4−x}, M_t ∝ t^{−1/3}, mass ≈ const for x > 2); numerical check with M_low = 10⁻³: local slope 0.545 vs 0.55.
- p4b: 6^0.55 = **2.679**.
- p4c: right: M/L rises with age, because the bright massive stars die while the mass sits in long-lived low-mass stars; misses: the curves of Fig. 2.4 rise faster (roughly ∝ t, about ×4.5 from 2 to 12 Gyr versus ×2.7), and the toy model has no remnants, metallicity, IMF shape or band dependence and no normalisation.
- p5a: ρ₀ = 9σ₀²/(4πG r_c²) = **3731 M☉/pc³**.
- p5b: M = (4/3)π r_c³ ρ₀ = 3σ₀² r_c/G = **5.274 × 10⁴ M☉**.
- p5c: M = 2σ₀² r_t/G = **11.02 × 10⁵ M☉** (1.10 × 10⁶).
- p5d: dynamical mass between ~5 × 10⁴ (core) and an upper bound ~1.1 × 10⁶ inside r_t, of the order of the stellar 6 × 10⁵ M☉: **no dark matter needed**.
- p6a: show (∫ b dt/(b² + c²t²)^{3/2} = 2/(bc), numerically 2.000 for b = c = 1).
- p6b: GR 4GM/(c²b) = **3.948″**.
- p7a: show (sympy: κ and γ from (2.23) match (2.27); (2.22) with this κ returns α).
- p7b: **μ = θ/(θ − θ₀)**.
- p7c: 1 − κ − γ = 1 − (θ/θ₀)^{1−n}; **θ_r = θ₀ (2 − n)^{1/(n−1)}** (numerical roots at n = 1.3, 1.5, 1.8 agree).
- p8a: θ_E = √(θ₊|θ₋|) = **0.6825″** (the lens equation returns both images).
- p8b: |μ₊/μ₋| = (θ₊/θ₋)², Δm = **2.975 mag**.
- p8c: θ_E = **0.849″**, Δm = 2.5 log₁₀(θ₊/|θ₋|) = **1.488 mag**.
- p8d: **isothermal** (1.49 vs observed 1.6; point mass 2.98).
- p8e: M = θ_E² c² D_L D_S/(4G D_LS) = **2.126 × 10¹¹ M☉** (same through σ_SIS = 226 km/s and M = πσ²R/G).

Book slips checked on rendered pages: Eq. (2.21) prints (1 − κ²) − γ² (p. 36): slip confirmed. Eq. (2.32) prints θ_E = √(4[(θ₊ − θ₋)² − β²]) = 2.73″ (p. 41): that is 4 × 0.6825″ (correct θ_E² = [(θ₊ − θ₋)² − β²]/4); the book's 18.3 kpc and 2.2 × 10¹² M☉ follow from 2.73″ (recomputed 18.29 kpc, 2.198 × 10¹²), so they inherit it (correct: 4.57 kpc, 1.37 × 10¹¹ M☉). Eq. (2.34) (p. 42): M_iso = c²/(2πG) (D_L² θ_E²) is dimensionally wrong; the printed 7.8 × 10¹⁰ is reproduced by c² D_L θ_E²/(2πG) (7.795 × 10¹⁰), which lacks the factor D_S/(4 D_LS)·2π; correct mass inside θ_E 2.13 × 10¹¹ M☉. Also Eq. (2.22) prints α(φ) on the left (minor). Exercise 2.3's "dN/dlog M ∝ M^−2.35" is itself inconsistent with Salpeter (dN/dM ∝ M^−2.35, i.e. dN/dlog M ∝ M^−1.35).

### Comparison (one line per answer id)

| id | Mine | Page | Agree |
|---|---|---|---|
| p1-b | 234.97 km/s | 235 (1%) | yes |
| p1-c1 | straight lines through the centre | choice 1, same | yes |
| p1-c2 | lines parallel to the minor axis | choice 2, same | yes |
| p2-a | 3 (σ one-dimensional) | 3 (1%) | yes |
| p2-b | 1.046 | 1.05 (2%) | yes |
| p2-ml | 104.6 | 105 (2%) | yes |
| p2-fstar | 4.78 % | 4.8 (2%) | yes |
| p2-d | 5 | 5 (1%) | yes |
| p3-n | 730.8 | 731 (1%) | yes |
| p3-m | 10.02 | 10.0 (1%) | yes |
| p3-l | 322.4 | 322 (1%) | yes |
| p4-p | (4 − x)/3 | (4 - x)/3 | yes (identical) |
| p4-b | 2.679 | 2.68 (1%) | yes |
| p5-rho | 3731 M☉/pc³ | 3730 (2%) | yes |
| p5-core | 5.274 | 5.27 (2%) | yes |
| p5-tidal | 11.02 | 11.0 (2%) | yes |
| p5-d | no dark matter needed | choice 1, same | yes |
| p6-b | 3.948″ | 3.95 (1%) | yes |
| p7-b | θ/(θ − θ₀) | th/(th - th0) | yes (identical) |
| p7-c | θ₀(2 − n)^{1/(n−1)} | th0*(2 - n)^(1/(n - 1)) | yes (identical) |
| p8-a | 0.6825″ | 0.682 (1%) | yes |
| p8-b | 2.975 | 2.98 (1%) | yes |
| p8-c-te | 0.849″ | 0.849 (1%) | yes |
| p8-c-dm | 1.488 | 1.49 (1%) | yes |
| p8-d | isothermal | choice 1, same | yes |
| p8-e | 2.126 | 2.13 (2%) | yes |

No disagreement on any of the 26 boxes or the "show" parts (1a, 6a, 7a, first half of 7c).

Extra checks of the page's own claims, by my own calculation:
- Problem 5(b) and 5(c) checks ("our numerical King model": about 2.7 × 10⁴ M☉ inside r_c and about 3 × 10⁵ M☉ in all): I solved King's (1966) model myself (W₀ fixed by r_t/r_c = 47/1.5, giving W₀ = 6.89) and got 2.70 × 10⁴ and 3.00 × 10⁵ M☉ with r_c² = 9σ²/(4πGρ₀) and σ = 7.1 km/s (with c = 1.54: 2.70 × 10⁴ and 3.20 × 10⁵). Confirmed. For this W₀ the model's central one-dimensional dispersion is 0.98 of its velocity parameter σ, so using the measured σ₀ for that parameter costs about 4% in mass.
- The three claimed book slips, on the rendered pages. Eq. (2.21), p. 36, prints [(1 − κ²) − γ²]: slip, confirmed. Eq. (2.32), p. 41: the printed θ_E = 2.73″ is 4.000 × √(θ₊|θ₋|), and the book's 18.3 kpc and 2.2 × 10¹² M☉ follow from 2.73″ (I get 18.29 kpc and 2.198 × 10¹²): confirmed; the page's wording ("four times this value, and carries the factor into its projected radius (18.3 kpc) and its point-mass mass") is correct (the mass carries the factor squared, 16). Eq. (2.34), p. 42: M_iso = c²/(2πG)(D_L²θ_E²) has units kg·m, so "one distance too many" is right; the printed 7.8 × 10¹⁰ M☉ is what c² D_L θ_E²/(2πG) gives (7.795 × 10¹⁰), as the calcs comment says; the correct mass inside θ_E is 2.126 × 10¹¹ M☉ (also via σ_SIS = 226 km/s and M = πσ²R/G), ratio 2.73: confirmed.
- IMF convention: the book's Exercise 2.3 (p. 27, rendered) writes dN/dlog M ∝ M^−2.35. Salpeter's 2.35 is the slope of dN/dM (dN/dlog M ∝ M^−1.35), and the book's own text on p. 28 calls Salpeter "a simple power law in stellar mass". The page's reading is the standard one, stated in a bracket, and matches the lesson counting-ordinary-matter. It does change every number: with the literal book form (dN/dM ∝ M^−3.35) the answers would be 6.09 × 10⁴ (3a), 730.8 (3b), 6.15 (3c), p = (3 − x)/3 (4a) and 6^0.217 = 1.47 (4b). The page anticipates this: (3 − x)/3 is a listed mistake of p4-p with a correct hint. Fair reading.
- Fudge factor: with σ the one-dimensional (line-of-sight) dispersion, as the book defines it ("the standard deviation of the distribution of the velocities of the cluster galaxies"), the virial theorem gives α = 3; a 3D σ gives 1. The page states its reading and gives the 3D value in the check. Fair, but see warning 1 on α = 2.
- Exercise 2.5 reading: the King core-radius relation r_c² = 9σ₀²/(4πGρ₀) is King's standard definition, stated correctly; the uniform-core and isothermal estimates are labelled as an estimate and an upper bound, and the checks give the full King values. A fair reading of an exercise that otherwise needs the other book.

## Differences from the MIT source
(The "MIT source" here is the book: Ferreras, *Fundamentals of Dark Matter*, UCL Press 2025.)

| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(a) solution "Check"; Problem 5(c) | α "comparable to 1" (p. 23) | P2a gives α = 3 from the virial theorem for a truncated isothermal sphere; P5c uses the self-gravitating isothermal density ρ = σ²/(2πGr²), whose M(r) = 2σ²r/G means α = 2 for the same profile. A reader who solves 2(a) with the Jeans equation gets 2, is marked wrong, and the set never says why the two differ. | Add to the P2a check: "A self-gravitating isothermal sphere with this σ has ρ = σ²/(2πGr²) and M = 2σ²R/G (α = 2, used in Problem 5). Cutting it off at R with no outer pressure drops the surface term of the virial theorem, which is why the truncated sphere here gives α = 3." Optionally list "2" as a mistake of p2-a with that hint. |
| 2 | warning | Problem 7(c), `mistakes` of p7-c, entry `th0/(2 - n)` | n/a | Hint: "the factor (θ/θ₀) appears to the power 1 − n, not to the power −1." Treating the power as −1 gives θ₀(2 − n), not θ₀/(2 − n); θ₀/(2 − n) comes from dropping the power (power +1). Hint not true of its formula. | Change to: "This forgets to take the root: (θ/θ₀) appears to the power 1 − n, not to the power 1." |
| 3 | warning | Problem 5(d) solution "The comparison" | Dynamical masses comparable to stellar masses (p. 30) | "Even the generous isothermal estimate, 1.1 × 10⁶ M☉, is less than twice the stars' mass, and a full King model gives about half of it." "It" reads as the isothermal estimate (half = 5.5 × 10⁵), but the King total is 3 × 10⁵, about half the stars' mass. | Write "…and a full King model gives about 3 × 10⁵ M☉, about half the stars' mass." |
| 4 | warning | Choice boxes p5-d and p8-d | n/a | In both, the right choice is the longest (p5-d: 75 characters against 66 to 73; p8-d: 79 against 54 to 73). Three of the four choice boxes have the answer in position 1 (p1-c1, p5-d, p8-d; p1-c2 at 2). | Shorten the right choices (e.g. p5-d "at most about twice as much, little room for dark matter"; p8-d "the isothermal sphere, whose prediction lies closer") and move one answer to position 0 or 3. |
| 5 | warning | Page-scoped symbol meanings in `data/symbols.json` | n/a | `c` has only "The speed of light" for this page, but Problem 5 writes "concentration $c = 1.54$". `r` covers Problems 2 and 5 only, but Problem 7 writes ρ(r) ∝ r^−n for the lens; `R` covers Problems 1 and 2 only, but Problem 7(a)'s hint and solution use R as the projected radius (Σ(R), z = R u). The popups give a wrong meaning there. | `c`: add "Problem 5: the concentration of the King model, log₁₀(r_t/r_c)." `r`: add "Problem 7: the distance from the centre of the lens." `R`: add "Problem 7: the projected distance from the lens centre." |
| 6 | warning | Problem 5, Formula "Core radius of a King model" | Not printed in the book (Exercise 2.5 points to FoGDFE §8.4) | `cite="mit" at="Exercise 2.5, p. 30 (King-model fact stated by us)"`: cited to a page that does not print it. | Add a reference (I. R. King 1966, AJ 71, 64; cite only, IOP/AAS rule) and cite it; and say in the text that σ₀ stands in for King's velocity parameter (they differ by about 2% for this cluster). |
| 7 | info | Problem 7 statement, Eq. (2.22) | The book prints α(φ) on the left of Eq. (2.22), p. 36 | Page writes α(θ) without comment | Optionally add "(the book prints α(φ), a typo)" next to the (2.21) note. |
| 8 | info | Problem 2 statement | The book calls the factor γ | Page renames it α and says so; γ's page meaning lists only the shear | Optionally add "Problem 2: the book's name for the factor α" to the γ meaning. |

## Arithmetic and answer checks
- Every answer value and every intermediate number in the solutions recomputed (Python, two routes for each formula); all agree with the page and the calcs entries (68 calcs tests pass; every `shown:` string appears in the page).
- Formula answers: p4-p checked against a numerical light integral with a finite lower mass limit (slope 0.545 at M_low = 10⁻³ against 0.55); p7-b by sympy from (2.21) and (2.23); p7-c by numerical roots at n = 1.3, 1.5, 1.8.
- `vars` ranges finite and physical: p4-p x ∈ [2.1, 3.5] (inside 2 < x < 4); p7-b θ ∈ [1.5, 3], θ₀ ∈ [0.7, 1] (always θ > θ₀); p7-c n ∈ [1.2, 1.8] (inside 1 < n < 2), θ₀ ∈ [0.5, 2].
- Listed mistakes differ from their answers everywhere in range (equalities only at x = 4 for p4-p; at θ₀/θ = 0 or 1 for p7-b; at n = 0, 1 or 2 for p7-c, all outside the ranges). Hints true of their formulas, except p7-c `th0/(2 - n)` (warning 2). The p4-p hint for (3 − x)/3 is right: a slope x per log interval means dN/dM ∝ M^−(x+1) and p = (3 − x)/3.
- Tolerances reject the obvious slips: p2-a 1% rejects 1 and 2; p2-b 2% rejects α = 1, 2 (0.35, 0.70); p5-core rejects the King value 2.7; p5-tidal rejects 3σ²r/G (16.5) and the King total (3.0); p8-b and p8-c-dm are far apart; p8-e rejects the point-mass 1.37 and the book's 0.78.
- Every part ends with a check (units, a limit or a number) apart from the one-line arithmetic parts 3a, 3b and 4b, and the discussion parts 4c and 5d.
- Points: 10 + 15 + 10 + 12 + 13 + 10 + 15 + 15 = 100; each exercise's parts add up.

## Coverage and order
- All eight numbered exercises of Chapter 2 (2.1 to 2.8) are used, in the book's order, one problem each. Parts beyond the book (1b, 1c, 2d, 3c, 6b, 7b, 7c, 8e) are marked "(our addition)"; the stellar mass-to-light ratio 5 in 2(c) is marked "our choice". No "How about ...?" box is turned into a problem.
- Exercise 2.1 and 2.2(a) are worked in the lessons rotation-curves and galaxy-clusters (checked: worked examples "The spider pattern" and "Weighing a cluster", with other numbers) and are marked so, with new parts added.
- Exercise 2.8's question (magnifications, choose the model) is parts (b) to (d); (a) and (c) supply the Einstein radii that the book computes in Eqs. (2.32) and (2.34), here correctly.
- Statements are rewritten; no sentence copied from the book. Figures 2.3, 2.4 and 2.8 are not reproduced; the facts needed (Figure 2.4's trend, the image positions) are given in words and agree with the rendered figures.
- Citations checked on the rendered pages: p. 21 (Ex. 2.1), p. 23 (Section 2.3, Ex. 2.2), p. 24 (Fig. 2.4), p. 27 (Ex. 2.3), p. 30 (Ex. 2.5), p. 33 (Ex. 2.6), p. 36 (Eqs. 2.21 to 2.23), p. 37 (Eqs. 2.25, 2.27), p. 38 (SIS images), p. 40 (distances), p. 41 (image positions), p. 42 (Ex. 2.8). All correct, apart from warning 6.

## Licensing
- The intro credits author, publisher, year and CC BY-NC 4.0, says the exercises are rewritten in our words and the hints and solutions are ours, and lists the changes (lesson-worked parts, additions, figures not reproduced, King facts stated by us, slips noted). Adequate.
- No figure of the book reproduced or redrawn (Figure 2.7, "Courtesy CASTLES team", is not used). No OpenStax, no LibreTexts, no FoGDFE content.

## Notes
- No answer leaks found: the "How to answer" examples (`0.25`, `1.2e5`, `a*b/c`, `x^2`, `sqrt(y)`) are not the answer of any box; no hint states an earlier box's answer; the `summary` names topics only. The Problem 8 statement's "magnified as you found in Problem 7(b)" does not give 7(b) away.
- Values: H₀ = 70 and Ω_m,0 = 0.3 are in calcs/values.yaml (role "example"), as the book uses them.
- Lesson links and anchors exist (#measuring-a-rotation-curve, #zwicky-and-the-coma-cluster, #stellar-mass-from-light, #why-light-bends, #weighing-a-lens-and-its-dark-matter). The claim "the lesson on gravitational lensing notes the same slip" holds. (Outside this page: that lesson says the book's "isothermal values agree with the image positions", true of θ_E and β but not of the mass 7.8 × 10¹⁰ M☉ in Eq. 2.34; the lesson could note that slip too.)
- The calcs check for p2-a (`3 / integrate('u * 1 / u', 'u', 0, 1)`) is nearly trivial; a check of W by another route (e.g. −½∫ρΦ dV numerically) would be stronger. Not required.

COUNTS: errors=0 warnings=6 info=2

## Resolution (2026-11-28, by the page author)

- W1: the Problem 2(a) check now explains α = 2 (a self-gravitating isothermal sphere, ρ = σ²/(2πGr²), held by the pressure of the stars outside, so the virial theorem has a surface term; used in Problem 5) against α = 3 (truncated, nothing outside). New calcs entry p2-a-sis. Number boxes take no listed mistakes (lib/answers.ts checkNumber has only value and tolerance), so "2" is not listed for p2-a.
- W2: the p7-c hint for th0/(2 - n) now ends "not to the power 1".
- W3: Problem 5(d) now says a full King model gives about 3 × 10⁵ M☉, about half the stars' mass.
- W4: right choices shortened (p5-d "a mass at most about twice as large, so little room for dark matter", 67 characters against 66 to 73; p8-d "the isothermal sphere, since its prediction lies closer to 1.6", 62 against 54 to 74); p5-d's answer moved to position 3. No calcs entry referred to the choice positions.
- W5: this page's meanings extended: c (Problem 5: the King concentration, a pure number), r (Problem 7: distance from the lens centre), R (Problem 7: projected distance from the lens centre).
- W6: reference king1966 added (I. R. King 1966, AJ 71, 64, https://doi.org/10.1086/109857; bibliographic record only, not opened), the core-radius relation is cited to it, and the statement says σ₀ stands in for King's velocity parameter, about 2% apart here (our own King model, W₀ = 6.892: central one-dimensional dispersion 0.980 of the parameter; calcs fact p5-king-sigma).
- Info 7: the Problem 7 note now says the book prints α(φ) for α(θ) on the left of Eq. (2.22).
- Info 8: the γ meaning for this page now says the book also uses γ for the factor Problem 2 calls α (the α meaning already said so).
- Outside this page: the gravitational-lensing lesson note on Eq. (2.34) is left for a separate follow-up.

- Follow-up by the page author (same day): the W1 paragraph in the 2(a) check no longer prints the isothermal sphere density, its mass formula or the factor 2, which together gave away the Problem 5(c) box; it now names the self-gravitating isothermal sphere and the surface term only. Calcs entry p2-a-sis removed.
