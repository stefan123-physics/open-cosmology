---
page: content/year-5/Ferreras/ferreras-problem-set-3.mdx
reviewed: 2026-11-28
sources_read:
  - https://doi.org/10.14324/111.9781800084704 (read: local book.pdf; rendered pp. 71, 78, 81, 91, 96, 97, 98)
  - content/year-5/8.902/power-spectrum.mdx (read, for the Fourier convention the page names)
verdict: pass-with-notes
---

# Review: Problem Set 3 (Ferreras, Chapter 4)

Writer: Opus. Reviewer: Opus (same model, blind).

The blind solve below was written from the stripped statements and the rendered book pages before the full page, its calcs and its symbols were opened.

## Blind solve

Written from `stripped-set-3.mdx` and the book's Exercises 4.1-4.4 (rendered pp. 71, 78, 81, 91, 96-98) only, before opening the page, its calcs or symbols. Script: scratchpad `rv3s/solve.py`.

### My answers
- p1 A: rho_m0 = Omega_m 3H0^2/(8 pi G) = 4.080e10 Msun/Mpc^3 -> **4.08** (check: 2.775e11 h^2 x 0.3 = 4.080).
- p1 B: rho_h = 330 x 4.08e10; d = (1e7/rho_h)^(1/3) = **9.06 kpc**.
- p1 C: softening a small fraction of d, of order 1 kpc (a few % to a few tens of % of 9 kpc): "~1 kpc". Open-ended in the book; a choice box is fair only if the options are separated by factors of ~10 (e.g. 10 pc / 1 kpc / 100 kpc).
- p1 D: rho_h = 178 x 27 x rho_m0; d = 9.06 (330/4806)^(1/3) = **3.71 kpc**.
- p1 E: N = rho_m0 (100 Mpc)^3 / 1e7 Msun = 4.08e9, N^(1/3) = **1598**.
- p2 A: F/(G m m_t) = **2y/(y^2+s^2)^(3/2) + 1/(y-s)^2 + 1/(y+s)^2** (checked by a brute-force vector sum at y=5, s=1: 0.165707).
- p2 B: F_exact = (4 + 3 x^2 + ...)/y^2, x = s/y; no linear term (the pair at y±s cancels it by symmetry) -> **C = 3/4**.
- p2 C: exact relative error at y = 5s: **3.567 %** (series alone gives 3.0 %).
- p2 D: exact error = 1 % at **y/s = 8.909** (series: sqrt(75) = 8.66).
- p3 A: virial 2K = -W; sudden loss keeps velocities, K' = K M_f/M_i, W' = -cGM_f^2/R_i; final E = W_f/2 gives R_i/R_f = 2 - alpha. For alpha >= 2 the energy is >= 0: the system is unbound and disperses.
- p3 B: adiabatic invariant: M R = const, so R_i/R_f = 1/alpha. Sudden puffs more, since 1/(2-alpha) >= alpha ((alpha-1)^2 >= 0).
- p3 C: alpha = 1/(1-f): **R_f/R_i = (1-f)/(1-2f)**.
- p3 D: M_f = 0.6 + 0.2 = 0.8 M_i, alpha = 1.25: sudden **1.3333**, slow **1.25**.
- p4 A: xi_g = <delta_g delta_g> = b^2 xi_DM if b is a constant (independent of position, linear, deterministic) -> b = (xi_g/xi_DM)^(1/2), taking b > 0.
- p4 B: substitute u = kr: xi ∝ r^-(n+3), **gamma = n + 3**, valid for -3 < n < -1 (convergence at small k needs n > -3; the oscillating integral at large k converges for n < -1), i.e. 0 < gamma < 2.
- p4 C: **n = -1.2**.
- p4 D: b = (5/4)^(gamma/2) = 1.25^0.9 = **1.2224**.
- p4 E: n = -2 gives gamma = 1 (shallower than 1.8); n = 1 lies outside the range where a power law P gives a power law xi (gamma = 4 formally, integral diverges). Galaxies' 1.8 needs n = -1.2, an intermediate slope: on few-Mpc scales the spectrum is in its turnover, between the two quoted limits (plus nonlinear growth and bias).

### Comparison (one line per answer id)
- p1-rhom: page 4.08, mine 4.080. Agree.
- p1-d0: page 9.06 kpc, mine 9.056. Agree.
- p1-eps: page choice 2 ("comparable to the spacing in a halo or a few times smaller: a few kpc, not much less"), mine "about 1 kpc to a few kpc". The marked choice is the best of the four (the other three are off by factors of 10 or more), so the box is fair; but see warning W1 on the wording.
- p1-d2: page 3.71 kpc, mine 3.708. Agree.
- p1-nside: page 1598, mine 1597.9. Agree.
- p2-exact: page 1/(y-s)^2 + 1/(y+s)^2 + 2y/(y^2+s^2)^(3/2), mine the same (also checked by a vector sum at y=5, s=1: 0.165707). Agree.
- p2-c: page 0.75, mine 3/4 (numerical limit 0.75003 at y/s = 1000). Agree.
- p2-y5: page 3.57 %, mine 3.567 %. Agree.
- p2-open: page 8.91, mine 8.909. Agree.
- p3 A, B (show parts): the page's derivations match mine (2 - alpha, unbound at alpha >= 2; M R = const, 1/alpha; sudden puffs more). Agree.
- p3-fast: page (1 - f)/(1 - 2f), mine the same. Agree.
- p3-dm-fast: page 1.333, mine 1.3333. Agree.
- p3-dm-slow: page 1.25, mine 1.25. Agree.
- p4 A (show part): page b^2 factor, b constant, positive root. Agree.
- p4-gamma: page n + 3, mine n + 3; validity -3 < n < -1 on both. Agree.
- p4-n: page -1.2, mine -1.2. Agree.
- p4-bias: page 1.222, mine 1.2224. Agree.
- p4-confront: page choice 1 ("sample the bend between the two slopes"), mine "an intermediate effective slope between the two limits". Same reading; the wording about where the spectrum turns over is loose (warning W2).

No disagreement in any final answer.

## Differences from the MIT source
(Here "MIT" is the book: Ferreras, *Fundamentals of Dark Matter*, UCL Press 2025.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| W1 | warning | Problem 1(C): the right choice and the solution steps "Why not much smaller" and "The estimate" | Open: "a rough estimate of the force resolution" (p. 78) | Right choice: "a few kpc, not much less"; solution: "ε must not be far below d", "ε ~ d, a few kpc to about 10 kpc", "Real simulations take ε a few times below the spacing" | Overstated against practice. EAGLE (the lesson's own example, m_DM = 9.7e6 Msun, almost exactly m1) uses a softening of about 0.7 kpc (Schaye et al. 2015, quoted from memory, not re-read here: uncertain), about d/13; the Power et al. (2003) criterion ε ≈ 4 r200/√N200 gives 4 × 261/√1e5 ≈ 3.3 kpc for the page's Milky-Way halo. Change the choice to "a fraction of the spacing in a halo: about 1 to a few kpc" and the estimate to "ε of order 1 to 3 kpc, a few to ten times below d"; delete "to about 10 kpc" and "not much less"; keep the distractors and the position. |
| W2 | warning | Problem 4(E): right choice and solution step "The reading" | n ~ 1 at very large scales, "turning over to n ~ -2 at smaller scales" (p. 98) | "galaxy pairs a few Mpc apart sample the bend between the two slopes, where the spectrum is turning over" | The turnover (peak) of the matter spectrum is at k ≈ 0.02 h/Mpc, wavelengths of hundreds of Mpc, not a few Mpc. On few-Mpc scales the CDM spectrum is past its peak and curves slowly (linear effective slope roughly -1.5 to -2), and nonlinear growth makes it shallower; an effective n ≈ -1.2 there is what γ ≈ 1.8 needs. Reword the choice to "galaxy pairs a few Mpc apart see an intermediate effective slope, between the two quoted limits", and add to the solution: the peak lies at hundreds of Mpc; the intermediate slope on few-Mpc scales comes from the gradual curvature of the CDM spectrum plus nonlinear growth (and bias). |
| W3 | warning | Problem 2(C) statement | The book gives no distance | "when the group is at y = 5s" | Mark it "(our choice)", as the course note requires for numbers the book leaves open. |
| I1 | info | Problem 2 preamble | "the two-dimensional system included in the figure" (p. 81) | Planar arrangement with ordinary 3D (inverse-square) gravity, stated in brackets | Fair reading, stated. No change. |
| I2 | info | Problem 4 preamble, Formula "Correlation function from the power spectrum" | Only a reference to the companion volume (FoGDFE §7.5) | cite="mit" at "Exercise 4.4, p. 98 (... stated here in our words)" | Honest as it stands. Better: add the 8.902 notes (eq. (408), p. 89, the source of the lesson's 3D form) to `references` and cite that. The formula agrees with the lesson's ξ = (2π)^-3 ∫ P e^{ik·r} d³k after the angular integral. |
| I3 | info | Problem 3(B) solution, "The idea" | (none) | "rv is conserved, since the force stays central" | Angular momentum is conserved for any rate of loss in a spherical system; what slowness adds is that orbits stay circular, so v² = GM/r still holds at the end. One clause would make this clear. |

## Arithmetic and answer checks
- Every number in the solutions recomputed (scratchpad `rv3s/solve.py`): H0 = 2.269e-18 s^-1; ρc = 9.20e-27 kg/m³ = 1.360e11 Msun/Mpc³; 1 Mpc³ = 2.938e67 m³; ρh = 1.346e13; volume per particle 7.43e-7 Mpc³; box spacing 62.6 kpc; 330^(1/3) = 6.91; Milky-Way radius 261 kpc, 28.8 ≈ 29 spacings; z = 2 density 1.961e14 (14.6 times), ratio 2.44; N = 4.08e9, N² = 1.7e19; 1598 × 62.6 kpc = 100 Mpc; 1/16, 1/36, 10/26^1.5 = 0.07543, sum 0.16571; leading term 3.0 %; error at y/s = 8.66 is 1.06 %; angles 0.4 rad = 23°, 0.22 rad = 13°; α = 1.5 doubles the size; (5/4)^1.8 = 1.494, (5/4)^0.9 = 1.222. All correct.
- Calcs file: `pytest tests/calc -k ferreras-problem-set-3` in the worktree: 51 passed. Formula answers have independent checks (p2-exact as the derivative of the summed potential, p3-fast by solving the energy balance, p4-gamma by integrating a damped power-law spectrum). `content:check` on the worktree: 0 errors (warning only for the missing review file of this page).
- Formula boxes: p2-exact mistakes (4/y², no cosine, sine instead of cosine, axis pair only) are finite on y ∈ [3, 6], s ∈ [0.3, 1] and never equal the answer there (they coincide only at s = 0 or y = s); each hint is true of its formula. p3-fast mistakes 1/(1-f) and the inverse differ for f ∈ [0.05, 0.4] (equal only at f = 0); hints true. p4-gamma mistakes n+2, -(n+3), 3-n differ on n ∈ [-2.8, -1.2] (equal only at n = -3 or 0); hints true. The checker's agreement test is 1e-6 relative (lib/answers.ts), so even the closest pair (no cosine at s = 0.3, y = 6, relative difference about 6e-4) is rejected.
- Number tolerances reject the obvious slips: p1-d0 (box average 62.6; Δ = 200 gives 10.7), p1-d2 (no (1+z)³ or comoving: 11.1), p2-y5 (series 3.0), p2-open (series 8.66, 2.8 % off), p3-dm (swapped 1.25 and 1.333), p4-bias (b² = 1.494, inverse 0.818).
- Choice boxes: options of similar length, right answers at positions 2 and 1, no backslash TeX.
- Points: 26 + 24 + 24 + 26 = 100; part splits add up.

## Coverage and order
- Exercises 4.1 (p. 78), 4.2 (p. 81), 4.3 (p. 91), 4.4 (p. 98) are all used, in the book's order, each rewritten. `covers: [4.2, 4.4, 4.6]` matches where they sit (4.1 and 4.2 in §4.2, 4.3 in §4.4, 4.4 in §4.6). Citations checked on the rendered pages: eq. (4.2) p. 78; Δ = 178 and 330 on p. 71 (a "How about" box: Δ = 178 "at those redshifts where most galaxy formation takes place, rising to Δ = 330 at the present time"); best resolution about 100 pc, p. 78; eq. (4.14) p. 96; eq. (4.15) p. 97.
- Added parts are marked "(our addition)" (1D, 1E, 2D, 3C, 3D, 4D) and the page's own numbers "our choice" / "our numbers", except y = 5s (W3). The book's "consider the role of dark matter" is answered by 3D and its solution.
- The sketch of Exercise 4.2 (p. 81) is described in words, not redrawn; Figure 6.3 (credited to Planck) is not reproduced, and the page has no graph or image.

## Licensing
- Intro credits: author, UCL Press 2025, CC BY-NC 4.0, exercises rewritten in our words, solutions ours, changes listed. No sentence copied from the book beyond short terms ("puffing up", "simple arguments", flagged as the book's words). No figure reproduced. No OpenStax, nothing from FoGDFE. No em dashes.

## Notes
- Symbols: page-scoped meanings exist for every letter with a cosmology meaning on the page (α, γ, δ, ε, ξ, z, c, k, Φ, x, y, d, n, m, f, v, r, P, A, C, b, s, h, N, M, R, E, K, W, ρ forms), and none gives an answer away. Two popup and read-aloud issues:
  - W4 (warning): Δ (the halo density contrast of Problem 1) falls back to the general meaning "A change or difference in a quantity, e.g. Δx = x₂ − x₁". Add a meaning scoped to `ferreras-problem-set-3`: "The density contrast of a halo: its mean density divided by the background matter density."
  - W5 (warning): the shared entry `W-f` has `spoken: "W friction"` (from 8-01-problem-set-7), so read-aloud says "W friction" for this page's potential energy W_f. Give this page its own entry for the form `W_f` (spoken "W sub f"), or change the shared spoken name to "W sub f" and keep "friction" in the 8.01 meaning text.
- Values: Ω_m,0 = 0.3, h = 0.7 (H0 = 70) pass content:check's quoted-value test.
- `summary` names topics only. The "How to answer" examples (0.25, 1.2e5, a*b/c, (x+1)^2/sqrt(x)) are not the answer to any box. No hint states an earlier box's answer, and no statement sentence gives a box away.

COUNTS: errors=0 warnings=5 info=3

## Resolution (2026-11-28, by the page author)

- W1: Problem 1(C) right choice now "a fraction of the spacing in a halo, a few to ten times smaller: about 1 to a few kpc" (same position, distractors kept); the solution now says ε must not be many orders of magnitude below d (step renamed "Why not far smaller") and estimates "ε of order 1 to 3 kpc, a few to ten times below d ≈ 9 kpc"; "to about 10 kpc" and "not much less" removed. The argument uses only the page's own numbers; the EAGLE softening and the Power et al. criterion were not added, since they were quoted from memory.
- W2: Problem 4(E) right choice now "galaxy pairs a few Mpc apart see an intermediate effective slope, between the two quoted limits" (same position); the solution places the peak of the spectrum at k ≈ 0.02 h per Mpc (hundreds of Mpc) and explains the intermediate slope on few-Mpc scales by the slow curvature of the CDM spectrum past its peak plus nonlinear growth (bias already mentioned). Calcs entry p4-peak added (kind: fact).
- W3: Problem 2(C) now says "at y = 5s (our choice)".
- W4: data/symbols.json: Δ has a meaning scoped to this page ("The density contrast of a halo: its mean density divided by the background matter density.").
- W5: data/symbols.json: the shared `W-f` entry's spoken name is now "W sub f"; the 8-01-problem-set-7 meaning ("The work done by the friction force.") is unchanged, and this page keeps its own meaning on the entry.
- I1: no change.
- I2: done. The Lecture 14 notes of 8.902 were checked on the rendered page: eq. (408), printed p. 89, ends in the boxed ξ(r) = (2π)⁻³ ∫ P(k) e^{ik·r} d³k. Added as reference `vogelsberger14`; the formula now cites it at "eq. (408), p. 89 (there in three dimensions; this form follows after the angular integral)".
- I3: added to Problem 3(B), "The idea": rv is conserved for a loss at any rate; what slowness adds is that each orbit stays circular, so v² = GM/r still holds at the end.

- Follow-up by the page author (same day): the quoted peak position "k ≈ 0.02 h per Mpc" and its calcs fact `p4-peak` were removed, because no source on the site gives that number; the solution now says the peak lies near the horizon scale at matter–radiation equality, with a link to the 8.902 power-spectrum lesson.
