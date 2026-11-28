---
page: content/year-5/Ferreras/ferreras-problem-set-2.mdx
reviewed: 2026-11-28
sources_read:
  - https://doi.org/10.14324/111.9781800084704 (read: local book.pdf, printed pp. 52-65 = PDF pp. 66-79, rendered at 110 dpi and checked against pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 2: Halo sizes and profiles, spin and adiabatic contraction

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in the worktree `.claude/worktrees/ps-fer-2` (commit 731d275), with `calcs/Ferreras/ferreras-problem-set-2.yaml` and the page-scoped meanings in `data/symbols.json`. `npm run content:check` in the worktree: 0 errors (the only message for this page: no review file yet). `pytest tests/calc -k ferreras-problem-set-2`: 82 passed. `test-answers`: 65 passed.

## Blind solve

(Written before the full page, its calcs and its symbols were opened: from `stripped-set-2.mdx` and the book's pp. 52-64 only. Python: `scratchpad/rv2s/solve.py`, `scratchpad/rv2s/s35.py`, each answer by two routes.)

### My answers
- 3.1 A: R = [3M / (4π · 180 · Ω_m,0 ρ_c,0 (1+z_c)³)]^(1/3), ρ_c,0 = 3H0²/(8πG); z_c = 0: **R = 319.2 kpc**.
- 3.1 B: R ∝ 1/(1+z_c): z_c = 1: **159.6 kpc**; R = 200 kpc at **z_c = 0.596** (root-find check identical).
- 3.1 C: discussion (halo about 10-30 times the 10-20 kpc disc; depends on z_c, Ω_m, H0 and the 180 vs 200 convention).
- 3.2 A: **γ = -2 x^α**, = -2 at x = 1 for any α.
- 3.2 B: NFW γ = -1 - 2x/(1+x) = -(1+3x)/(1+x). Equal at x = 0.1: **α = ln(0.5909)/ln(0.1) = 0.2285**; at x = 10: **α = ln(1.4091)/ln 10 = 0.1489**. (Numerical-derivative check: slopes -1.1818 and -2.8182 agree.) "α ≈ 0.2" a fair summary (0.15-0.23 over two decades).
- 3.3 A: NFW M ∝ ln(1+x) - x/(1+x) → ln x; Hernquist M ∝ x²/(1+x)² → 1. **NFW x_vmax = 2.1626**, **Hernquist x_vmax = 1**.
- 3.3 B: Hernquist r_e/r_S = 1/(√2-1) = **2.4142**; NFW truncated at c = 5: **r_e/r_S = 2.2166** (closed-form root and quadrature agree).
- 3.4 A: **ω0 = sqrt(G M / R³)**.
- 3.4 B: L = (2/5)MR²ω, |E| = (3/10)GM²/R: λ = (2/5)√(3/10) ω/ω0, **C = 0.2191**; λ = 0.04: **ω/ω0 = 0.1826**. (Numerical double integral of L and W gives C = 0.21909.) If |E| = |W| were used instead, C = (2/5)√(3/5) = 0.3098.
- 3.4 C: fully rotation-supported sphere: λ = C ≈ 0.22 (order 1 only in a loose sense, a factor about 4.5 below 1). Rotational fraction of KE: (1/5)MR²ω² / ((3/10)GM²/R) = (2/3)(ω/ω0)² = **0.02222**.
- 3.5 A (G = 1, r_h = 1, M_i(1) = 1, r_S = a = 0.2, f_d = 0.1): **r_f(0.1) = 0.09615**; **v_f/v_i (0.05) = 1.0712**; **v_f/v_i (0.7) = 0.9826**. Final curve rises faster inside, slightly lower outside (peak 1.061 at r ≈ 0.36 vs initial 1.062 at 0.433).
- 3.5 B (a = 0.04): **r_f(0.1) = 0.06964**; peak at **r = 0.0864**, **v_f = 1.2492** (bounded minimiser and 800-point grid agree).

### Comparison (one line per answer id)
| Box | Mine | Page | Tolerance | Result |
|---|---|---|---|---|
| e1-r0 | 319.15 kpc | 319 | 2% | agree |
| e1-r1 | 159.58 kpc | 160 | 2% | agree |
| e1-zc | 0.5958 | 0.596 | 2% | agree |
| e2-gamma | -2 x^α | -2*x^a | formula | agree (identical) |
| e2-a01 | 0.22848 | 0.228 | 1% | agree |
| e2-a10 | 0.14894 | 0.149 | 1% | agree |
| e3-nfw | 2.16258 | 2.163 | 0.5% | agree |
| e3-hern | 1 | 1 | 1% | agree |
| e3-re-hern | 2.41421 | 2.414 | 0.5% | agree |
| e3-re-nfw | 2.21660 | 2.217 | 1% | agree |
| e4-w0 | sqrt(GM/R³) | sqrt(G*M/R^3) | formula | agree (identical) |
| e4-c | 0.21909 | 0.219 | 1% | agree |
| e4-ratio | 0.18257 | 0.183 | 1% | agree |
| e4-krot | 0.022222 | 0.0222 | 1% | agree |
| e5-rf | 0.096149 | 0.0961 | 1% | agree |
| e5-v005 | 1.07122 | 1.071 | 0.5% | agree |
| e5-v07 | 0.98265 | 0.983 | 0.5% | agree |
| e5-rf-compact | 0.069636 | 0.0696 | 1% | agree |
| e5-rpeak | 0.08635 | 0.086 | 3% | agree |
| e5-vpeak | 1.24922 | 1.249 | 1% | agree |

All 20 boxes agree with my blind answers; there is no disagreement to settle.

## Differences from the book (Ferreras, Chapter 3)
| # | Severity | Where on page | Book / lesson says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Exercise 3.1, Part C statement | Book p. 52: luminous disc "~10-20 kpc". The lesson `dark-matter-halos` (its worked example) says "a stellar disc perhaps 10 kpc across, or 5 kpc in radius" | "(about 10 to 20 kpc, as the book and lesson say)" | Write "(about 10 to 20 kpc, as the book says on p. 52)". |
| 2 | info | Exercise 3.1, Part A, Step "Check" | The lesson prints "≈ 0.21 Mpc, or about 210 kpc"; 0.206 is not printed there | "finds 0.206 Mpc (rounded there to 210 kpc)" | "finds about 0.21 Mpc (0.206 Mpc before rounding)". The arithmetic is right (0.2063 Mpc; scaled 318.8 kpc). |
| 3 | info | Exercise 3.4, Part C, Step "Full support" | Book p. 62: "Systems that are mostly supported by rotation have λ ~ 1" | λ = C = 0.22, "of order one in the loose sense the book means: it is five times the typical halo's 0.04" | Fair reading (the book's remark is a bare order-of-magnitude statement; 0.219 is a factor 4.6 below 1). Say "about 5.5 times" (0.219/0.04 = 5.48) and add "and a factor of about 4.5 below 1" so the reader sees both comparisons. |
| 4 | info | Exercise 3.4, Part A | The book does not define "fully supported by rotation" | Equatorial centrifugal balance, ω0 = sqrt(GM/R³), marked "our reading" | Fair and stated. An alternative reading (all of the virial kinetic energy in rigid rotation) gives ω0² = (3/2)GM/R³ and C = 0.268; optionally mention it beside the 0.310 remark. |
| 5 | info | Exercise 3.4, Part B | The book does not say which E enters Eq. 3.6 | E = W/2 (virial total), C = 0.219; check gives C = 0.310 if E = W | Fair and the usual convention (the total energy), stated as "our reading". The alternative numbers 0.3098 and 0.129 are right, and the 1% tolerance rejects 0.310. No change needed. |
| 6 | info | Exercise 3.5, normalisation | Book: "NFW dark matter halo of unit mass and concentration c = 5 ... Hernquist profile with the same scale radius", f_d = 0.1; no units | G = 1, r_h = 1, M_i(r_h) = 1, galaxy total mass f_d with a = r_S, each marked "our reading" / "our choice of normalisation" | Clear and fair. The consequence (only (5/6)² = 69% of the galaxy inside r_h, so outer shells move out) is explained in the solution. Optional: say in the preamble that the galaxy's mass inside r_h is therefore 0.069, not 0.1. |

## Arithmetic and answer checks
- Every number in every solution step recomputed (Python): ρ_c = 1.360e11 M☉/Mpc³, ρ̄0 = 4.080e10, 3.264e11 at z = 1; EdS radius 213.6 kpc; 18π² = 177.7; slopes -1.182, -2.818, -1.262, -3.170; NFW bracket 0.4677 and bracket/x 0.2162, 0.2160, 0.2154; ln 6 - 5/6 = 0.9584; r_e = 0.443 r_h; C² = 0.048; 98% random motion; M_i(0.1) = 0.07526; back-substitution 0.00752; r_i = 0.0526 (lands at 0.05) and 0.687 (lands at 0.7); v_f/v_i(0.2) = 1.024; final peak 1.061 at 0.36 vs initial 1.062 at 0.433; Part B v_f/v_i(0.05) = 1.764, M_i(0.086) = 0.0594, uncontracted v_c = 1.079, dark-matter share 65.3%. All correct. M☉ = 1.3271244e20/G = 1.98841e30 kg: correct.
- C = 0.21909 also confirmed by a direct double integral of L and W for a uniform sphere.
- Listed mistakes, checked at 200 000 random points over the `vars` ranges: the e2-gamma mistakes differ from the answer by at least 80%, 100% and 10.6% (the closest, -(2/α)(x^α - 1), could coincide only at x = (1-α)^(-1/α) ≤ 4, outside x ∈ [5, 10]); the e4-w0 mistakes by at least 200%, 41% and 15%. Every hint is true of its formula.
- Tolerances reject the obvious slips: 200 instead of 180 (308 kpc, -3.5%), Ω_m = 1 (214 kpc), r_vmax instead of r_e (2.163 vs 2.217, -2.4%), C with E = W (0.310), K_rot/K with that C (0.0111).
- Every calcs `shown:` string matches the page text; `calc:test` for this page passes.

## Coverage and order
- All five numbered exercises of Chapter 3 (3.1-3.5), in the book's order, each cited to the right printed page (pp. 52, 56, 56, 62, 64; checked on the rendered footers). Equation citations Eq. 3.1 (p. 55), 3.2 (p. 55), 3.3 (p. 56), 3.6 (p. 62), 3.7 (p. 63) are correct, and the formulas match the rendered equations.
- Additions are marked "(our addition)" (3.1B z_c for 200 kpc, 3.3B, 3.4C energy fraction, 3.5B); our numbers are marked "our choice" (z_c = 0 and 1, matching at x = 0.1 and 10). Exercise 3.3 is flagged as worked in the lesson and followed by a new part of our own, as the course note requires. No "How about ...?" box is turned into a problem.
- `covers: [3.1, 3.2, 3.3]` and `lecture: 3.3` fit (Exercise 3.1 closes Section 3.1 on p. 52).
- Points 20 + 20 + 15 + 20 + 25 = 100; the parts add up; the points are stated as ours.

## Licensing
- The intro credits the author, UCL Press 2025 and CC BY-NC 4.0, says the exercises are rewritten in our words and the hints and solutions are ours. Changes are indicated.
- Statements are rewritten. The closest wording is in Exercise 3.4 ("the angular velocity ... it would have if it were fully supported by rotation"), a short standard phrase. No sentence is copied.
- Figure 3.3 is not reproduced or redrawn. FoGDFE is not used (the factor 180 comes from the lesson and 8.902 spherical-collapse, both of which state it). No OpenStax or LibreTexts. No em dashes and no control characters.

## Points the caller asked to settle
- **Exercise 3.4 reading.** "Fully supported by rotation" = equatorial centrifugal balance; E = virial total = W/2; C = (2/5)·sqrt(3/10) = 0.219. My blind solve took the same reading independently and got 0.2191. With E = W one gets 0.310, which the page mentions in its check. Both readings are stated and the page's is the usual one. Sound.
- **Exercise 3.5 normalisation.** Stated clearly in the preamble (G = 1, r_h = 1, M_i(r_h) = 1, r_S = 0.2, galaxy total mass f_d, a = r_S), each marked as our reading or choice. I solved blind with this reading and matched every box. See info item 6 for an optional extra sentence.
- **Figure 3.3 axis label vs curve (writer's claim).** Verified on the rendered p. 63. The axis says √(M(<y)/y) ∝ v_ROT with y ≡ r/r₂₀₀. For an NFW halo of unit mass inside r₂₀₀ = 1 with c = 5, √(M(<y)/y) is 0.87 at y = 0.1, 1.00 at 0.2 and 1.04 at 0.7, peaking at y = 0.43. The book's initial (dashed) curve reads about 0.35, 0.43 and 0.465 there, nearly flat from 0.3 on. That matches √(m(x)/x) with x = r/r_S and m in units of 4πρ0 r_S³: 0.380, 0.439 and 0.455 (peak 0.465 at x = 2.16), plotted against y = x/5. So the label does not describe the plotted quantity: the claim holds (curve normalised in r_S units, label in r₂₀₀ units). The book's final curve (peak about 0.58, roughly 30% above the initial one at y = 0.2) also shows a much stronger effect than the page's Part A (+2% at 0.2), which points to a different galaxy normalisation in the book. The page does not itself assert a slip in the book; it says the normalisation is not spelled out and that readers should not expect a match. That is fair. If the writer wants to state the mismatch on the page, the numbers above support it.
- **"λ ~ 1" on p. 62 (writer's claim).** Verified: the book's sentence is a bare "λ ~ 1" for rotation-supported systems, with no derivation. In the uniform-sphere model full support gives 0.22. Calling the remark order-of-magnitude only is fair (see info item 3 for the wording).

## Notes
- Symbols: 46 page-scoped meanings (α, β, γ, λ, ω, ω0, a, c, x, r, z, z_c, C, h, L, M, R, E, K, K_rot, I, g, M_i, M_g, M_dm, f_d, r_i, r_f, v_i, v_f, v_c, r_h, M_h, r_S, ρ0, ρ_S, r_e, r_vmax, M_0, M_H, M_NFW, γ_NFW, x', r', d, exp). All fit and none gives an answer away. ρ, G, Ω_m,0, H_0 and ρ_c fall back to the general cosmology meanings, which fit this page. α serves both as the Einasto shape parameter and as the inner exponent of the double power law (Exercise 3.3 statement), and its meaning covers both.
- Answer leaks: the "How to answer" examples (0.25, 1.2e5, a*b/c, sqrt(a)/b^2) are not answers. No statement, preamble or hint gives away a box's value. Exercise 3.4 Part C's statement repeats (3/10)GM²/R, an ingredient of Part B, but Part B's own statement and hint already give it (E = W/2). The lesson quotes γ = -2x^α and x ≈ 2.163, which is by design for 3.2A and 3.3A, and the page says so.
- The 3.4C remark that a fully rotation-supported disc needs a larger λ than the sphere is plausible (standard estimates give λ ≈ 0.4-0.5 for a self-gravitating disc supported by rotation), but I did not check it against a source here: uncertain, harmless.
- The 3.1C remark that with a cosmological constant the virial factor relative to the background is larger at late times is correct (about 330 at z = 0 for Ω_m = 0.3), and it is marked as our remark.
- `summary` names topics only. There is no `## Summary` section with answers.
- H0 = 70 and Ω_m,0 = 0.3: content:check passes (the values are in calcs/values.yaml); the book uses h = 0.7 and Ω_m,0 = 0.3 on p. 53.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-28, by the page author)

- Warning 1 (lesson misquoted): Exercise 3.1(C) now says "about 10 to 20 kpc, as the book says on p. 52".
- Info 2: the 3.1(A) check now reads "finds about 0.21 Mpc (0.206 Mpc before rounding)"; calcs `shown:` updated.
- Info 3: the 3.4(C) check now says the full-support spin is "about 5.5 times the typical halo's 0.04 and a factor of about 4.6 below 1" (1/0.219 = 4.56; the review's 4.5 is rounded down); new calcs entries `e4-ratio-typical` and `e4-ratio-one`.
- Info 4–6: no change (both readings of 3.4 are already discussed; the 3.5 normalisation is stated).

Status set to `reviewed`.
