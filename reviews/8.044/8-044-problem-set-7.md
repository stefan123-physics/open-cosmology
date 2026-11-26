---
page: content/year-3/8.044/8-044-problem-set-7.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps7/ (read: PDF, pdftotext -layout, printed pages 1-3 checked one by one)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss7/ (read: PDF, pdftotext -layout, printed pages 1-5 checked one by one; opened only after the blind solve below was written)
verdict: pass-with-notes
---

# Review: Problem Set 7: a free expansion, a Carnot engine between two bodies, cooling helium, a torsional pendulum and the hydrogen atom

## Blind solve

My answers (written before opening the full page, its calcs file or MIT's solutions):

- p1a: the internal energy E (isolated, rigid container: Q = 0, W = 0); N too. Entropy is not conserved (rises).
- p1b: (dE/dV)_T = T(dP/dT)_V - P = a N^2/V^2, so E = (3/2)NkT - aN^2/V + const. E fixed: T_end = T_i - 4aN/(3kV0).
- p2a: T_F = sqrt(TH*TC) (total entropy constant: C0 ln(TF/TH) + C0 ln(TF/TC) = 0).
- p2b: W = C0(TH + TC - 2 sqrt(TH TC)) = C0(sqrt(TH) - sqrt(TC))^2, positive (work done on the outside world).
- p3a: a(1 - 1/16)/4 = b(1/T0 - 2), a/b = 128/15, so 1/T0 = 4, T0 = 0.25 K.
- p3b: dS_He = -7a/24, dS_salt = 6b; dS = 6b - 7a/24 = 52.67 x 10^4 erg/K (positive).
- p4a: <(theta - theta0)^2>^(1/2) = sqrt(kT/K); for K = 4.0e-9 N m/rad, T = 300 K: 1.018 microrad.
- p4b: <theta thetadot> = <theta><thetadot> = theta0 * 0 = 0 (factorised Boltzmann weight, even in thetadot).
- p5a: N2/N1 = 4 exp(-3A/(4kT)) (level degeneracy n^2: 4 vs 1). 300 K: 10^-170.76; 1000 K: 10^-50.81.
- p5b: g_n = n^2; Z = sum n^2 exp(A/(n^2 kT)) >= sum n^2, diverges.
- p5c: infinitely many bound states pile up below the ionisation limit; their size grows like n^2 a0, so high-n states are bigger than any container or spacing between atoms; the physical sum is cut off by the finite volume/density (and ionisation into the continuum, which needs the volume). The model of an isolated atom in infinite space is the failure, not statistical mechanics.

Comparison (page answer vs my blind answer; formulas compared symbolically and by value):
- p1-conserved: page choice 2 (internal energy) = mine. Agree.
- p1-dedv: page aN²/V² = mine. Agree.
- p1-tf: page Ti − 4aN/(3kV0) = mine. Agree (also = MIT p. 1).
- p2-tf: page sqrt(TH·TC) = mine. Agree.
- p2-w: page C0(√TH − √TC)² = mine C0(TH + TC − 2√(TH TC)) (identical on expansion). Agree.
- p2-sign: page choice 1 (positive) = mine. Agree.
- p3-t0: page 0.25 K = mine. Agree.
- p3-ds: page 6b − 7a/24 = mine. Agree.
- p3-ds-num: page 52.7 (×10⁴ erg/K) = mine 52.667. Agree.
- p4-rms: page sqrt(kT/K) = mine. Agree.
- p4-rms-num: page 1.02 μrad = mine 1.0177. Agree.
- p4-mean: page choice 0 (zero) = mine. Agree.
- p5-ratio: page 4 exp(−3A/(4kT)) = mine. Agree.
- p5-x300: page 170.76 = mine 170.757. Agree.
- p5-x1000: page 50.81 = mine 50.806. Agree.
- p5-g: page n² = mine. Agree.
- p5(b) and p5(c) arguments: same as mine (lower bound Σn²; finite volume and other atoms cut off the high-n states).

No disagreement between my blind answers, the page and MIT's solutions, apart from MIT's printed 300 K number (row 5 below), where the page and I agree against MIT.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(b), step "Check the result (our addition)", last sentence | MIT (p. 4) only argues ⟨θθ̇⟩ = ⟨θ⟩⟨θ̇⟩ = 0. | "the mean of a product of rms size kT/√(IK) vanishes". The rms of the product θθ̇ is √(⟨θ²⟩⟨θ̇²⟩) = √((θ0² + kT/K)·kT/I) (θ and θ̇ independent), which equals kT/√(IK) only when θ0 = 0; for θ0 ≠ 0 it is larger. | Write "of rms size at least kT/√(IK)", or speak of the product (θ − θ0)θ̇, whose rms size is exactly kT/√(IK). (Calcs entry p4-rms-product checks only √(kT/K)·√(kT/I), not the rms of θθ̇.) |
| 2 | warning | Problem 5(c), step "How large the troublesome states are (our addition)" | MIT (p. 5) gives no size estimate. | "The size of a state grows roughly as n² times the Bohr radius of the lesson on the hydrogen atom". The linked lesson /courses/8-04/hydrogen-atom gives a0 ≈ 0.529 Å but nowhere states the n² growth (searched: no n²a0, no ⟨r⟩ for general n). On the site the n² growth is stated in 8.04 Problem Set 10, solution 6(d) ("The size of the atom grows as n²a0, as in Bohr's model"). The physics is right (⟨r⟩ = [3n² − l(l+1)]a0/2). | Give a source for the n² growth, e.g. "grows roughly as n² times the Bohr radius (⟨1/r⟩ = 1/(n²a0), [8.04 Problem Set 10](/courses/8-04/8-04-problem-set-10), Problem 6(d)); the Bohr radius is 0.529 × 10⁻¹⁰ m (lesson on the [hydrogen atom](/courses/8-04/hydrogen-atom))". |
| 3 | info | Problem 2(b), step "Check the result", last sentence | Not in MIT. | "No other way of bringing the two bodies to a common temperature delivers more work, since a reversible engine is the most efficient one." True (proved below), but the reason given is loose: the bodies are finite, and the lesson's efficiency limit is stated for fixed T_H and T_C. | Optional: give the direct reason: "in any process the total entropy change C0 ln(T_F²/(T_H T_C)) ≥ 0, so T_F ≥ √(T_H T_C), and the work C0(T_H + T_C − 2T_F) is largest for the reversible engine." |
| 4 | info | Intro, notation paragraph | MIT's solutions write T_f (Problem 1) and T_F (Problem 2). | "MIT's solutions use the same letter as for the final temperature of Problem 2". Same letter with lower-case vs capital subscript; acceptable but loose. | Optional: "where MIT's solutions write T_f, close to the T_F of Problem 2". |
| 5 | info | Problem 5(a), bracket on MIT's slip | p. 5: "4.8 × 10⁻¹⁷⁰ at 300K and 1.6 × 10⁻⁵¹ at 1000K", with 1 meV = 11.6 K, 13.6 eV = 1.58 × 10⁵ K. | Calls 4.8 × 10⁻¹⁷⁰ a likely slip; with 11.6 K/meV the formula gives 2.1 × 10⁻¹⁷¹, about 23 times smaller; 1000 K agrees. | None. Confirmed: A/k = 157 760 K (11.6 K/meV) gives 2.07 × 10⁻¹⁷¹ (4.8e−170 / 2.07e−171 = 23.2); MIT's rounded 1.58 × 10⁵ K gives 1.14 × 10⁻¹⁷¹; 1.578 × 10⁵ K gives 1.75 × 10⁻¹⁷¹. No reading reproduces 4.8 × 10⁻¹⁷⁰. At 1000 K MIT's conversion gives 1.65 × 10⁻⁵¹, printed 1.6. The page's hedged wording ("looks like a slip") is right. |
| 6 | info | Problem 5(a), step "Check the result" | Not in MIT. | "in any sample of gas in thermal equilibrium not one atom would be found in the excited level". At 1000 K the ratio is 1.6 × 10⁻⁵¹, so ~10⁵¹ atoms would be needed for one; "any" is a slight overstatement. | Optional: "in any laboratory sample". |

## Arithmetic and answer checks
All numbers recomputed with Python (scratch scripts outside the repo):
- P1: (∂E/∂V)_T = T·Nk/(V − bN) − P = aN²/V². ΔPE = aN²(3/V0 − 1/V0) = 2aN²/V0; T_end = T_i − (2aN²/V0)/(3Nk/2) = T_i − 4aN/(3kV0). Box vars: largest drop 4·1.5·2/(3·0.5·3) = 2.67 < smallest T_i = 3, so T_end stays positive. Mistakes: T_i − 2aN/(kV0) is ΔPE/(Nk) (hint true); T_i − 2aN/(3kV0) is ΔPE taken as aN²/V0 (hint about V0/3 true); sign and ideal-gas mistakes true. dE/dV mistakes (0, sign, N power) true.
- P2: T_F = 200 K for 400 K and 100 K; W = C0(20 − 10)² K = 100 K·C0; contact gives 250 K and 2C0·50 K = 100 K·C0. Correct. Mistake hints (C0(TH − TC), T_F counted once, negative sign, (√TH + √TC)²) each true of its formula.
  Claim "no other way delivers more work" (row 3): for any process ending at a common T_F with work W out, energy gives W = C0(TH + TC − 2T_F) and the second law C0 ln(T_F²/(TH TC)) ≥ 0, so T_F ≥ √(TH TC) and W ≤ C0(√TH − √TC)². Verified.
- P3: 15a/64 = 30 (×10⁴ erg) = b(4 − 2) = 30; T0 = 0.25 K; 0.030 J. ΔS = 6b − 7a/24 = 90 − 37.33 = 52.67 (×10⁴ erg/K) = 0.0527 J/K. The answer and the mistake 7a/24 − 6b never coincide in the box range (equal only at a = 20.6b, outside a ∈ [50, 200], b ∈ [10, 30]). Mistake 2b − 15a/64 is indeed the two heats.
- P4: √(1.381e−23 · 300 / 4.0e−9) = 1.0177e−6 rad → 1.02 μrad (box 1%). Mistakes kT/K, √(2kT/K), √(K/kT) and their hints correct. ⟨θθ̇⟩ = 0 correct (see row 1 for the rms remark).
- P5: A/k = 1.5783e5 K; exponents 394.6 and 118.4; x = 170.757 and 50.806; ratios 1.75e−171 and 1.56e−51 (printed 1.6e−51). Rounding A/k to 1.58e5 lowers the 300 K ratio by 35% ("about a third", correct). Gap 10.2 eV; gap/kT = 118 and 395 ("more than a hundred times", correct). Number boxes use absolute tolerances (lib/answers.ts numberTolerance): 0.5 at 300 K and 0.3 at 1000 K accept A/k = 1.58e5 (shift 0.19 / 0.06) and MIT's 11.6 K/meV (170.68 / 50.78), and reject a forgotten factor 4 (shift 0.60). Good.
  5(b): n² states; mistakes 2n − 1, n, 2n² never equal n² for n ∈ [2, 7]. 5(c): α = 526.09; log10 n_max = (228.48 + 0.477)/3 = 76.3; log10(n_max² a0) = 152.6 − 10.28 = 142.4 → "about 10¹⁴² m". Correct.
- Points: 20 per problem; parts add up (5+15, 10+10, 10+10, 12+8, 10+6+4).
- Calcs file: every answer box has an entry with `answer:` and a route independent of MIT's algebra (numerical derivative, integrals, root, double integral). Entries checked by hand above; no mismatch.

## Coverage and order
- All five MIT problems and all parts, in MIT's order (1a, 1b, 2a, 2b, 3a, 3b, 4a, 4b, 5a, 5b, 5c), with the same physics and data (V0/3; a = 128 × 10⁴ erg K⁻⁴, b = 15 × 10⁴ erg K; A = 13.6 eV; 300 K and 1000 K).
- Additions are declared in the intro and marked in place (1(b) first box, Problem 2 contact comparison, 3(b) number, 4(a) numbers and density remark, 4(b) second argument, 5(b) box, 5(c) estimate). The 3(a) heat check (30 × 10⁴ erg, 0.030 J) is an unlisted extra check, which is fine.
- MIT gives no points; the intro says the points are the page's.
- Citations: sheet P1 and P2 p. 1, P3 and P4 p. 2, P5 p. 3; solutions P1 p. 1, P2 p. 2, P3 p. 3, P4 p. 4, P5 p. 5 (each checked with pdftotext -f N -l N against the printed footer). Every `at=` on the page and in the calcs file (incl. p3-constants "Problem 3, p. 2", Problem 4 "p. 2", Problem 5 "p. 3") matches.
- Every solution follows MIT's method and ends with a check (units, a limit or a number).
- Hints: none gives the final result away. Mildest: 2(b) hint 2 "look for a perfect square" hints at the form of the answer; acceptable. 5(a) hint 1 restates MIT's own hint.
- No `## Summary` with answers; no em dashes (0 found).

## Licensing
- Neither PDF carries "All rights reserved" or "Courtesy of" (grep, 0 hits); both fall under the course's CC BY-NC-SA licence.
- MIT's two drawings (container, pendulum) are described in words, not redrawn.
- Wording is the page's own. Closest to MIT is 5(c) "MIT's answer", a clearly attributed paraphrase of MIT's three points; acceptable.
- No OpenStax, LibreTexts or other forbidden sources.

## Notes
- Symbols (worktree data/symbols.json): every symbol on the page has a meaning scoped to this page (α, δ, ε_n, θ, θ0, θ̇, σ, a, b, A, C, C0, C_V, C_L, C_S, E, E_state, H, I, K, k, N, n, n_max, l, m_l, P, p, Q, Q_H, Q_C, Q_S, Q_L, S, S_H, S_C, S_S, S_L, T, T0, T_i, T_end, T_H, T_C, T_F, V, V0, W, W_out, Z, x, u, e, d, t, exp). T0 also has the general meaning "today's temperature of the cosmic background radiation", but lib/symbols.ts picks the page-scoped meaning first ("the starting temperature of the salt (Problem 3)"), so the right one shows. The double meanings of a, b, V and N are stated in their page meanings.
- Prerequisites and `covers` [10, 11, 12, 13] match maxwell-relations (10), heat-engines-carnot (11), canonical-ensemble (12), canonical-examples (13). The ½kT-per-quadratic-term remark in 4(a) is supported by canonical-examples; the ideal-gas free expansion in 1(a) by first-law.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-26, by the page author)

- Warning 1 (Problem 4(b), rms of θθ̇): fixed. The sentence now says "a product of rms size at least kT/√(IK)".
- Warning 2 (Problem 5(c), n² growth not in the linked lesson): fixed. The sentence now points to 8.04 Problem Set 10, Problem 6(d), for the n² growth, and to the hydrogen-atom lesson for the Bohr radius.
- Info 3 (Problem 2, why no other way gives more work): taken. The check now gives the entropy argument: the total entropy cannot fall, so T_F ≥ √(T_H T_C), and the work C₀(T_H + T_C − 2T_F) is largest at that bound, reached by the reversible engine.
- Info 4 (intro notation): taken, in words: MIT's solutions write T with a small f, close to the capital F of the final temperature in Problem 2.
- Info 6 (Problem 5(a)): taken: "in any laboratory sample of gas".
- Info 5: no change.

Status set to reviewed.
