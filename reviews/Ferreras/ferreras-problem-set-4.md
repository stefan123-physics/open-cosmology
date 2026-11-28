---
page: content/year-5/Ferreras/ferreras-problem-set-4.mdx
reviewed: 2026-11-28
sources_read:
  - https://doi.org/10.14324/111.9781800084704 (read: local PDF of the book, Chapter 5, printed pp. 106-130; every formula, number and quoted phrase checked on the rendered page)
  - 8.286 lessons black-body-radiation, neutrinos-and-particle-counting, temperature-and-decoupling; 8.902 lessons big-bang-nucleosynthesis, dark-matter-freeze-out, why-cold-dark-matter (read, for the claims the page makes about them)
verdict: needs-changes
---

# Review: Problem Set 4: Thermal history, relics and growth in the radiation era

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page; script rv4s/solve.py in the scratch folder, each number by two routes)
- e1 A: n_gamma = 2 zeta(3)/pi^2 (kT/hbar c)^3 = 412.8 cm^-3 at 2.73 K (closed form = numerical Planck integral).
- e1 B: rho_gamma = (pi^2/15)(kT)^4/(hbar c)^3 = 0.2623 eV/cm^3.
- e1 C: 6 states x 3/4 x zeta(3)/pi^2 T_nu^3 = 338.5 cm^-3 at 1.95 K (337.7 with (4/11)^(1/3) T); rho_nu/rho_gamma = (7/8)(6/2)(1.95/2.73)^4 = 0.6833 (0.6813 with (4/11)^(4/3); both inside 1%).
- e2 A: monatomic gas, gamma = 5/3, rho ~ a^-3: T ~ rho^(2/3) ~ (1+z)^2, so T = T_d ((1+z)/(1+z_d))^2, i.e. `T*((1+z)/(1+w))^2`.
- e2 B: 2.73 x 21^2/151 = 7.973 K; photons 57.33 K.
- e3 A: n_e0 = 0.022 rho_c/m_p (X + Y/2) = 0.2162 m^-3 (rho_c = 1.8783e-26 h^2 kg/m^3).
- e3 B: 1 + z_dec = (H0 sqrt(W)/q)^(2/3); z_dec = 41.38 (checked with a root finder).
- e3 C: 1 + z_eq = 3214; decouple before equality if Omega_b h^2 < 4.71e-5.
- e4 A: I = (3/2) zeta(3) = 1.803 (quadrature agrees).
- e4 B: 7 pi^4 / (180 zeta(3)) = 3.151 kT.
- e4 C: g_* = 2 + (7/8) 6 (4/11)^(4/3) = 3.363.
- e5 A: n_0 = (3/4)(g zeta(3)/pi^2)/(2pi^2/45 x 10.75) x s_0 = 112.6 cm^-3; Omega h^2 = 0.01069 (= m/93.6 eV).
- e5 B: m = 0.12 x 10537 / (112.6 x 10.75/106.75) = 111.5 eV.
- e5 C: T_chi = (3.91/10.75)^(1/3) T0; Omega h^2 = 5.655e-6.
- e6 A: with the book's eq. (5.11) normalisation (Wien tail over the full Planck count 2 zeta(3)): F = e^-x (x^2+2x+2)/(2 zeta(3)) = 8.887e-4 at x0 = 11.15 (the exact Planck tail gives the same to 1e-5). Normalising the Wien tail by the Wien total (2) instead gives 1.068e-3 (20% higher).
- e6 B: F = 1e-9 at x0 = 26.47: kT = 84.23 keV, T = 0.977e9 K (normalisation 2: 83.61 keV, 0.970e9 K; both inside 2%).
- e6 C: t = (1.3/0.08423)^2 = 238 s (242 s with the other normalisation).
- e7 A: show; delta+ = 1 + 3y/2 satisfies (5.43) (substitution: 0 + (2+3y)(3/2)/(2y(1+y)) - 3(1+3y/2)/(2y(1+y)) = (3+9y/2-3-9y/2)/(...) = 0).
- e7 B: 2.5/1.015 = 2.463.
- e7 C: 16/2.5 = 6.4 (pure matter era: 10).

### Comparison (page vs mine; one line per box)
- e1-ng: page 413, mine 412.8. Agree.
- e1-rg: page 0.262, mine 0.2623. Agree.
- e1-nn: page 338, mine 338.5. Agree.
- e1-ratio: page 0.683, mine 0.6833 (0.681 with the exact 4/11 is also accepted, as the page says). Agree.
- e2-temp: page `T*((1+z)/(1+w))^2`, mine identical. Agree.
- e2-temp20: page 7.97, mine 7.973. Agree.
- e3-ne: page 0.216, mine 0.2162. Agree.
- e3-zf: page `(H*sqrt(W)/q)^(2/3)`, mine identical. Agree.
- e3-z: page 41.4, mine 41.38. Agree.
- e3-obmax: page 4.71e-5, mine 4.710e-5. Agree.
- e4-integral: page 1.803, mine 1.8031. Agree.
- e4-mean: page 3.15, mine 3.151. Agree.
- e4-gstar: page 3.36, mine 3.363. Agree.
- e5-cold: page 0.0107, mine 0.01069. Agree.
- e5-m: page 112, mine 111.5 (0.4%, inside 2%). Agree.
- e5-hot: page 5.65e-6, mine 5.655e-6. Agree.
- e6-frac: page 8.89e-4, mine 8.887e-4 (book's eq. 5.11 normalisation). Agree; see W2 on the statement.
- e6-kt: page 84.2, mine 84.23. Agree.
- e6-temp: page 0.977, mine 0.9775. Agree.
- e6-t: page 238, mine 238.2. Agree.
- e7-g1: page 2.46, mine 2.463. Agree.
- e7-g10: page 6.4, mine 6.4. Agree.
- e7 A (no box): the page's derivation matches mine step by step (delta-dot = yH delta', d ln H/d ln y = -(4+3y)/(2(1+y)), 3 minus that = (2+3y)/(2(1+y)), 4 pi G rho_m = (3/2) H^2 y/(1+y)); the growing-mode substitution is right.

No disagreement on any final answer.

## Differences from the MIT source
(Here the source is the book, as for every page of this textbook course.)

| # | Severity | Where on page | Book / check says | Page says | Suggested fix |
|---|----------|---------------|-------------------|-----------|---------------|
| E1 | error | Exercise 5.5(B), solution step "Check and discussion" | Not in the book (the page's own claim). By the freeze-out lesson's own scaling the comoving free-streaming length is l_h ∝ 1/m: about 160 Mpc for 2 eV gives about 3 Mpc for 112 eV, and less (of order 1 Mpc) because this relic is colder than the photons by (3.91/106.75)^(1/3) = 0.33, so it turns non-relativistic while the photons are about three times hotter than m/3. | "they become non-relativistic only near k_BT ~ m/3 ~ 40 eV ... As the freeze-out lesson shows for a 2 eV particle, that erases structure on scales the size of superclusters" (read as applying to the 112 eV relic) | Replace with: "They become non-relativistic when their own temperature is about m/3 ≈ 40 eV (the photons are then about three times hotter). With the freeze-out lesson's scaling l_h ∝ 1/m (about 160 Mpc for 2 eV), a 112 eV relic smooths out structure only below about a megaparsec, the scale of large galaxies: it is warm rather than hot. A light relic that erased supercluster scales (a few eV) gives far too little dark matter (part A); one heavy enough to give Ω h² = 0.12 still erases the smallest galaxies, which are observed." Add calcs entries for the scale estimate. |
| W1 | warning | Exercise 5.5(C), second hint | Course note: hints must not state an earlier box's answer | "$\Omega_\gamma h^2 = \rho_\gamma/(\rho_cc^2/h^2) = 0.262/10{,}537 = 2.49 \times 10^{-5}$ (Exercise 5.1)" prints the answer of box e1-rg (0.262) | Write: "Divide the photon energy density of Exercise 5.1(B) by ρ_c c²/h² = 10,537 eV/cm³ to get Ω_γ h²." |
| W2 | warning | Exercise 5.6(A), statement | Book eq. (5.11), p. 111: ξ = e^(−x)(x²+2x+2)/(2ζ(3)), the Wien tail divided by the full Planck count | "drop the −1 in the Planck distribution (the Wien limit) and find the fraction F(x₀)" | A reader who also drops the −1 in the total divides by 2 instead of 2ζ(3) and gets 1.068e-3, 20% off and rejected by the 2% box (part B is unaffected: 83.6 keV and 0.970e9 K are accepted). Say: "drop the −1 in the tail only, and divide by the total number of photons of the full Planck distribution, as the book's eq. (5.11) does". |
| I1 | info | Exercise 5.3(C), statement | "Under what conditions would the decoupling take place during the radiation dominated phase?" | An upper limit on Ω_b h² with h₀, Ω_m and the composition fixed | A fair reading, and the solution also states the general condition in words; could be labelled "(our reading)" like the other choices. |
| I2 | info | Exercise 5.3 framing | "a simple estimate" for "a fully ionised mixture" in the matter era | z_dec ≈ 41, then explains that full ionisation is what fails and that the CMB decoupled at z ≈ 1100 after recombination | Fair: this is exactly what the book's stated assumptions give (41.38 independently, root-finder check), and the page is honest about the gap. The remark that reionisation at z < 10 does not recouple the photons is right (Γ/H = 0.13 at z = 10). No change needed. |
| I3 | info | Exercise 5.4, statement | p. 115: "Assuming zero gravitational potential", right after a paragraph that sets the chemical potential to zero | Reads it as μ = 0 ("our reading") | Verified on the rendered page: the writer's claim holds. |
| I4 | info | Exercise 5.4(C) | p. 116: "with g_* ~ 3" | 3.36; "the book's ~3 is a rounding of 3.36" | Verified: 2 + (7/8)·6·(4/11)^(4/3) = 3.3626. |
| I5 | info | Exercise 5.1(C), statement | p. 114: g "is 2 for photons or electrons, and 1 for neutrinos" | g = 1 per neutrino and per antineutrino, 6 states | Verified on p. 114. 1.95 K against (4/11)^(1/3) × 2.73 K = 1.9486 K: 0.6833 against 0.6813, both inside the 1% box, as the page says. |
| I6 | info | Exercise 5.1(C), last step | (Not in the book) | "If neutrinos have masses of a fraction of an eV, as oscillations show, they are no longer relativistic today" | Oscillations fix mass differences; the lightest neutrino may be (nearly) massless. Suggest "If at least two neutrinos have masses of order 0.01 to 0.1 eV, as oscillations imply, those are no longer relativistic today". |

## Arithmetic and answer checks
- All 22 boxes recomputed independently (closed forms checked against numerical integrals or a root finder): all agree, see the comparison above.
- Intermediate numbers in the solutions recomputed and correct: 1192.2 m⁻¹, 1.6945e9 m⁻³, 0.24359, 4.128e8 m⁻³, 0.65797, 4.202e-14 J/m³, 2.70 kT, 0.3644, 0.2603, 412 K, 0.01934, 57.3 K, 4.132e-28 kg/m³, 0.247 m⁻³, 4.311e-21 s⁻¹, 1.1893e-18 s⁻¹, 275.9, 42.4, 3.28e-16 s⁻¹ (both), 1.3% radiation share, 63.3 for Ω_m = 1, 0.1347, 3214, 1.431e-10 and 3.064e-13 s⁻¹, 467, 0.208, 0.03874, 2906 cm⁻³, 112.6 cm⁻³, 0.0574, 93.6 eV, 11.23 × 9.93 = 111.5 eV, 1.076e-3, 2.49e-5, 0.2596, iteration 25.94, 26.43, 26.47, F(26.47) = 1.0e-9, 2.6e10 K, ln 2 → 2.6%, 2.46, 6.4, 0.64, 1.007.
- Ω_r,0 h₀² = 4.19e-5 in the 5.3(C) statement: 4.185e-5 at 2.73 K with (4/11)^(4/3). Correct.
- e2-temp: vars T [100, 1000], z [0, 20], w [100, 200]; both mistakes (`T*(1+z)/(1+w)`, `T*((1+z)/(1+w))^5`) differ from the answer everywhere in range (z < w always); both hints are true (the 5th power keeps T V^γ fixed).
- e3-zf: x = H√W/q spans about 150 to 510 over the vars, so the ^(3/2) and ^(1/3) mistakes never coincide with ^(2/3) (that needs x = 1); `(H/q)^(2/3)` differs by W^(1/3) ≠ 1. Hints true.
- Tolerances reject the obvious slips: e1-nn (12 states 677, 3 states 169, neutrinos at 2.73 K 929), e3-ne (X + Y/4 gives 0.201, −7%), e3-z (Ω_m = 1 gives 62), e4-mean (boson value 2.70), e4-gstar (cubes give 3.91; no 7/8 gives 3.56), e5-cold (no 3/4 gives 0.0142), e7-g1 (exactly 5/2 is 1.5% off). e6-frac also rejects the other normalisation (W2).
- Points: 15 + 10 + 15 + 15 + 20 + 15 + 10 = 100; the parts of every exercise add up.
- Calcs: every `answer:` id matches a box (22 of 22) and every `shown:` string occurs in the page text. Minor: e6-temp has `expected: 0.977 K` for a value in units of 10⁹ K, and e1-rg `0.262 1/cm**3` for eV/cm³ (the eV divided out); harmless unit labels.

## Coverage and order
- All seven numbered exercises of Chapter 5 (5.1 to 5.7) are used, in the book's order; parts beyond the book are marked "(our addition)", chosen numbers "our choice", readings "our reading". No "How about ...?" box is turned into a problem (5.6 cites eq. 5.11 from one).
- Citations checked on the rendered pages: eq. (5.4) p. 106; eq. (5.10) p. 109; Exercise 5.2 p. 110; eq. (5.11) p. 111; 0.67 barn p. 112; eq. (5.13) p. 113; Exercise 5.3 and g = 1 for neutrinos p. 114; eqs. (5.15) to (5.17) and Exercise 5.4 p. 115; eqs. (5.20), (5.21) and "g_* ~ 3" p. 116; eq. (5.22) p. 117; eqs. (5.32) to (5.35) pp. 121 and 122; Exercise 5.5 p. 122; Exercise 5.6, "T ~ 10⁹ K", "90 keV", "1.3/√t" and "around 200 s" p. 125; eq. (5.42) p. 128; eqs. (5.43), (5.44) and "only ~5/2" p. 130. All correct.
- Lesson claims checked: the nucleosynthesis lesson's 0.07 MeV, 8 × 10⁸ K, 200 s and η ~ 5 × 10⁻¹⁰; the Mészáros effect in why-cold-dark-matter; 3000 K in temperature-and-decoupling. The freeze-out lesson's supercluster scale applies to eV masses, not to 112 eV (E1).
- `covers: [5.1 ... 5.5]` and `lecture: 5.5` match the book's sections (Exercise 5.6 is in §5.4, 5.7 in §5.5).

## Licensing
- Intro credits author, publisher and CC BY-NC 4.0, says the exercises are rewritten in our words and the solutions are ours. Statements are paraphrased; no copied sentences found (short standard phrases, and the book's words only where quoted).
- Figure 5.3 (taken from Cyburt et al. 2016) is not used; no figure is reproduced. FoGDFE not used. No OpenStax. No em dashes (0 found).

## Notes
- The ~80 page-scoped symbol meanings fit their uses and give nothing away.
- The summary names topics only. The "How to answer" typing examples (`0.25`, `1.2e5`, `a*b/c`, `sqrt(a)/b^2`) are not the answer to any box. No statement sentence gives a box away.
- I did not run `npm run content:check` or `calc:test` (no changes to the repository); calcs were compared by hand and with my own script.

COUNTS: errors=1 warnings=2 info=6

## Resolution (2026-11-28, by the page author)

- E1: fixed. Exercise 5.5(B) "Check and discussion" now says the relic is warm rather than hot: its own temperature is lower by (3.91/106.75)^(1/3) = 0.332, it turns non-relativistic at about m/3 ≈ 40 eV with the photons about three times hotter, and with the freeze-out lesson's 160 Mpc for 2 eV and l_h ∝ m⁻¹ its scale is 160 Mpc × (2/112) × 0.332 ≈ 0.95 Mpc (calcs e5-temp-factor, e5-nonrel, e5-photons-hotter, e5-fs-scale). Conclusion restated as suggested: a few-eV relic gives far too little dark matter, a heavier one still erases the smallest galaxies. New l_h meaning scoped to this page.
- W1: fixed. The second hint of 5.5(C) now reads "Divide the photon energy density of Exercise 5.1(B) by ρ_c c²/h² = 10,537 eV/cm³ to get Ω_γ h²" (10,537 recomputed in calcs e3-rhoc-ev); e5-og now ties to the 2.489e-5 printed in the solution.
- W2: fixed. 5.6(A) says to drop the −1 in the tail only and divide by the total number of photons of the full Planck distribution, as the book's eq. (5.11) does.
- I1: done. 5.3(C) is marked "(our reading of the book's "under what conditions")".
- I2: no change needed.
- I3: no change needed.
- I4: no change needed.
- I5: no change needed.
- I6: done. 5.1(C) now says oscillations show that at least two neutrinos have masses of order 0.01 to 0.1 eV, and those are no longer relativistic today.
- Calcs unit labels: e1-rg now in eV/cm³ and e6-temp dimensionless (units of 10⁹ K); e3-rhoc-ev also given in eV/cm³.
