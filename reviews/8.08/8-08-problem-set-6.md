---
page: content/year-4/8.08/8-08-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb6/ (read: the sheet's PDF, text and rendered page)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/602f7128f333bcba16bc87697f785eb7_thermal_fluct.pdf (read: Chapter VI, pp. 41-47, rendered; pp. 46 and 47 checked line by line)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: Chapter VII, pp. 48-69, rendered; pp. 48-52, 55 and 58 checked, pp. 50 and 58 zoomed)
verdict: pass-with-notes
---

# Review: Problem Set 6 (8.08): fluctuations of a sliding wall, two-level atoms, Bose occupation noise, photons in an expanding universe

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written to this file before opening the full page; numbers from scratchpad 808/ps6calc/blind.py)
- p1a: A_tot(x) = -NkT ln x - NkT ln(2L - x) + const, so A'' = NkT/x^2 + NkT/(2L-x)^2 = 2NkT/L^2 at x = L (= 2PL; 20265 N/m for part c's numbers).
- p1b: <(x - xbar)^2> = kT/A'' = L^2/(2N), Delta x = L/sqrt(2N). (Exact: P(x) ∝ x^N (2L-x)^N is a Beta(N+1,N+1) law in x/2L, variance L^2/(2N+3); checked by quadrature for N = 3, 10, 50.)
- p1c: N = PL^3/(kT) = 2.446e22; Delta x = 0.452 pm.
- p1d: No. The position distribution comes from the configurational factor e^{-beta A(x)}; the wall's kinetic energy p^2/2M factorises out of the canonical weight, so its mass drops out (it sets only the time scale of the jitter).
- p2a: Ebar = N eps/(e^{beta eps} + 1).
- p2b: <(E - Ebar)^2> = N eps^2 e^{beta eps}/(e^{beta eps} + 1)^2.
- p2c: C_V = N eps^2 e^{beta eps}/(kB T^2 (e^{beta eps}+1)^2), so kB T^2 C_V equals p2b (checked numerically at three temperatures).
- p2d: delta E/Ebar = e^{beta eps/2}/sqrt(N) = e^{2.5}/sqrt(1000) = 0.3852.
- p2e: it grows as e^{eps/2kBT}/sqrt(N), exponentially, without bound as T -> 0 (the few excited atoms are a Poisson-like count).
- p3a: <(n - nbar)^2> = nbar(1 + nbar) (checked by a direct sum).
- p3b: ratio = (∫x^2 e^x/(e^x-1)^2 dx)/(∫x^2/(e^x-1) dx) = (pi^2/3)/(2 zeta(3)) = pi^2/(6 zeta(3)) = 1.368.
- p3c: Delta N0 = sqrt(N0(1+N0)) ≈ N0 = 1.0e6 (relative fluctuation about 1).
- p4a: S ∝ VT^3 fixed (adiabatic, quasi-static), so T_f = T_i/s.
- p4b: U_f/U_i = s^3 (1/s)^4 = 1/s.
- p4c: N ∝ VT^3, so N_f/N_i = 1.
- p4d: n = kappa (kB T/hbar c)^3 = 410.5 per cm^3 (kappa = 2 zeta(3)/pi^2 = 0.2436); T = 2725 K.
- p4e: S/(N kB) = (4/3)(pi^2/15)/kappa = 2 pi^4/(45 zeta(3)) = 3.602 (3.6017 with zeta(3) = 1.202).

### Comparison with the page (one line per answer id)
- p1-curv: page 2*N*kB*T/L^2. Agree.
- p1-dx: page L/sqrt(2*N). Agree.
- p1-num: page 0.452 pm. Agree (0.45209).
- p1-mass: page choice 1, "does not depend on the mass". Agree (but see W4 on a distractor).
- p2-e: page N*eps/(exp(eps/(kB*T)) + 1). Agree.
- p2-var: page N*eps^2*exp(eps/(kB*T))/(exp(eps/(kB*T)) + 1)^2. Agree.
- p2c (no box): page derives the Schottky C_V and k_BT²C_V; agrees with mine.
- p2-num: page 0.385. Agree (0.38524).
- p2-low: page choice 3, "grows, as 1/√(average number of excited atoms)". Agree (1/√(Np) = e^{βε/2}/√N for p << 1).
- p3-var: page nbar*(1 + nbar). Agree.
- p3-ratio: page 1.368. Agree (π²/(6ζ(3)) = 1.36843).
- p3-cond: page choice 2, "ΔN₀ about 10⁶". Agree.
- p4-t: page Ti/s. Agree.
- p4-u: page 1/s. Agree.
- p4-n: page 1. Agree.
- p4-dens: page 410.5. Agree (410.50).
- p4-early: page 2725 K. Agree.
- p4-s: page 3.602. Agree (3.6016 with exact ζ(3); 3.6017 with 1.202).

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Frontmatter `summary` (shown at the top of the page as `topic-summary`, and as the sub-line of every "Practise" link bar on the Chapter 6 and 7 lessons) | (no summary) | "jitters by L/√(2N), whatever its mass", "fluctuates by n̄(1 + n̄)", "cools as 1/(length)", "keeps its number of photons" | Gives away the boxes p1-dx, p1-mass, p3-var, p4-t and p4-n before the reader starts (the Set 1-3 summaries name topics only). Rewrite as topics, e.g.: "Four problems on thermal fluctuations and Bose gases: the jitter of a wall that slides freely between two gases in a heat bath, and whether it depends on the wall's mass; the energy fluctuations of a collection of two-level atoms; the fluctuations of the number of bosons in one level, for black-body photons and for a condensate; and black-body radiation in a slowly expanding universe: its temperature, its energy and its number of photons." |
| W2 | warning | Problem 3(c), solution step "The size", the bracket | Wen p. 58 writes N = Σ 1/(z e^{βε_k} − 1) and N₀ = 1/(z − 1), while his graph on the same page labels z = e^{βμ} | "The notes, p. 58, give N₀ = z/(1 − z) with z = e^{βμ} ...; they write it as 1/(z − 1), a slip for 1/(z^{-1} − 1)." | The notes never give z/(1 − z): the first half of the sentence attributes our formula to them. The slip itself is real (zoomed page checked), but it begins one line earlier, in the sum. Replace with: "(With ε = 0 the average is N₀ = z/(1 − z), z = e^{βμ}. The notes, p. 58, write N₀ = 1/(z − 1), from a sum written with z e^{βε} where z⁻¹e^{βε} is meant: a slip, since their own graph there takes z = e^{βμ} < 1.)" |
| W3 | warning | Problem 2(a), its only hint | (own problem) | "Each atom is excited with the probability p = e^{−βε}/(1 + e^{−βε}). The atoms are independent." | With p given, the box answer is just Nεp: the hint gives the result away. Weaken to: "Write the partition function of one atom first, with its two states; the atoms are independent, so their average energies add." |
| W4 | warning | Problem 1(d), p1-mass distractor "depends on the mass only at low temperature" | "Does your result depend on the mass of wall?" | The page's own solution says that when k_BT is small next to ħω "quantum mechanics changes this" | A reader who knows the quantum oscillator can defend this distractor, and the solution half-agrees with it. Replace it by a plainly wrong one, e.g. "grows with the mass, as Δx ∝ √M"; or keep it and drop the quantum remark (the problem is classical). |
| I1 | info | Problem 4(d), solution step "The past" | (our numbers) | "s = 1/1000 in part (a)" | The statement defines s > 1 (and so does data/symbols.json). Write: "From then to now every length grew by s = 1000, so 2.725 K = T_then/1000 and T_then = 2725 K." |
| I2 | info | Problem 1(b), Check step | (not on the sheet) | "Exactly, e^{−βA_tot} is proportional to x^N(2L − x)^N, and its variance is L²/(2N + 3)" | Correct for a classical ideal gas and a thin wall: x/2L is Beta(N+1, N+1), variance 1/(4(2N+3)), so Var x = L²/(2N+3); also checked by quadrature here and by calcs entry p1-exact. It is stated without derivation; add "(x/2L then follows a beta distribution; stated by us)". Optional. |
| I3 | info | Problem 3 statement: "for photons μ = 0 (reading 2, p. 49)" | p. 48: photons have no number conservation, so the canonical, not grand canonical, ensemble; p. 49: P(n_k) written without μ | μ = 0 cited to p. 49 | Right in substance; cite "pp. 48-49", since μ = 0 is never written and the reason is on p. 48. |
| I4 | info | Notation paragraph: σ "not the Stefan–Boltzmann constant of a radiating surface" | p. 51 calls σ = π²k_B⁴/15(ħc)³ "Stefan's const." | Says it is not the Stefan–Boltzmann constant | The page is right (σ_notes = 4σ_SB/c, the radiation constant) but differs from the notes' name without saying so. Optionally add "(the notes, p. 51, call it Stefan's constant)". |
| I5 | info | Solution formulas `cite="mit" at="Problem N, p. 1 (our own solution)"` | Not on the sheet | Labelled as ours | The convention accepted in the 8.07 and 8.08 Set 1-3 reviews. The only formula claimed as MIT's text, Δx = √⟨(x − x̄)²⟩ with x̄ = ⟨x⟩, is on the sheet (checked on the rendered PDF). No change. |

## Arithmetic and answer checks
- Every number recomputed independently (scratchpad 808/ps6calc/blind.py and compare.py): N = 2.446e22; Δx = 0.4521 pm; 2PL = 20265 N/m (2.03e4); p = 6.69e-3, Np = 6.69, 1 − p = 0.9933, δE/Ē = 0.3852; 1/√1000 = 0.0316 and the ratio 12.2 ("twelve times"); Schottky peak at k_BT/ε = 0.4168 ("0.42"); n̄(y = 1) = 0.582, n̄(1 + n̄) = 0.921; ∫x²eˣ/(eˣ − 1)² = π²/3 = 3.290; 2ζ(3) = 2.404; ratio 1.3684; κ = 0.24359; k_BT/ħc = 1190 m⁻¹, cubed 1.685e9 m⁻³, n = 410.50 cm⁻³; 4.1e11 cm⁻³ at 2725 K; S/Nk_B = 3.6016. All agree with the page.
- "A few hundred times smaller than an atom": 1e-10 m / 0.452 pm = 221. Fine.
- Problem 3(b) check, "most photons sit in levels with n̄ below 1": only 7.9% of black-body photons have x < ln 2 (n̄ > 1). True.
- Problem 4(a) check by single photons (a Planck spectrum with every energy divided by s is Planck at T/s) and 4(b) check (∫P dV = U_i(1 − 1/s)) re-derived: correct.
- Formula boxes: answers finite over every `vars` range; every mistake finite and different from the answer at 2000 random points per box. The checker samples random points (`lib/answers.ts`, `samplePoints`), so the exact coincidences at L = 1 (2NkT/L⁶) and N = 1 (the N² mistake) do no harm.
- Each mistake hint is true of its formula: one gas only (NkT/L², L/√N); the curvature in V instead of x (2NkT/L⁶); the mean square for Δx; the Boltzmann factor taken as the probability; Nε²p (mean square, not variance); N² growth; Poisson n̄; crowded-level n̄²; T ∝ 1/V; U fixed gives T ∝ V^{−1/4} = s^{−3/4}; U conserved; the energy-density ratio s^{−4}. Several mistake hints name the correcting factor (p1-curv "L⁴ times larger", p1-dx "its square root", p2-var "ε²p(1 − p)", p3-var "keep the term linear", p4-t "V^(−1/3)"); they appear only after that wrong answer, which the 8.07 Set 2 review accepted.
- Number tolerances: 1% everywhere, tight enough for 3 significant figures; for p4-n (value 1), fine.
- Choice boxes: right answer at positions 1, 3, 2; never the longest or the shortest (lengths 43/54/55/43, 50/40/44/46, 35/40/42/50).
- Calcs file: 39 entries; `pytest tests/calc -k 8-08-problem-set-6`: 39 passed. Its routes are independent of the page's (numerical derivative of the net force; the exact distribution integrated; the Planck spectrum stretched; the work integral). T_CMB = 2.725 K is the calcs/values.yaml value.
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Points: 5+5+5+5 = 20, 3+4+3+3+2 = 15, 5+6+4 = 15, 4×5 = 20; 70 in all, as the page says.
- Every part with a box or a derivation ends with a Check step; the three choice parts (1d, 2e, 3c) end with an explanation step instead, which is fine.

## Coverage and order
- MIT Problem 1 (the wall) keeps MIT's physics, MIT's definition of Δx and MIT's question about the mass, in our words; the split into (a)-(d) is ours, and our additions (the curvature box, the numbers, the choices, the origin of x) are marked where they stand. MIT's sketch is described in words, not redrawn, and the description matches the rendered sheet (box, wall with a double arrow, "Wall", x axis below).
- MIT Problems 2 and 3 (Huang 10.3 and 10.5, number only) are our own problems, marked in their titles and in the intro, on Chapter VI (energy fluctuations, k_BT²C_V of p. 46) and Chapters VI and VII (occupation fluctuations of the Bose distribution of pp. 49 and 55). Huang was not used. No duplication of Sets 1-5 (Set 2's spin ½ is a Curie-law problem; Set 5's pendulum is the fluctuation of one parameter, not of energy or occupation).
- MIT Problem 4: MIT's own part (c) (the factor by which the number of photons changes) is kept as part (c), rewritten; the setup and parts (a), (b), (d), (e) are ours and are so marked in the title and the intro; (d) and (e) also carry "(Our numbers.)" and "(Our addition.)". Parts (a) and (b) have no mark of their own, but the exercise's title and first paragraph say they are ours: acceptable.
- `covers: [6, 7]` and `lecture: 7` fit the sheet's date (March 9) and topics; all four prerequisites exist (two Chapter 6 and two Chapter 7 lessons).

## Licensing
- The sheet has no "rights reserved", "courtesy" or third-party notice (rendered page checked). No MIT figure is reproduced. Huang's book was not opened or reconstructed. No OpenStax or LibreTexts material. The wording is our own; nothing of the sheet is copied beyond standard terms.

## Notes
- Citations to Wen's notes checked on the rendered pages: p. 46 point ③ (⟨(E − Ē)²⟩ = k_BT²C_V; δE/Ē ~ 1/√N; ideal gas δE = √(2/3) E/√N, used in a p2-low distractor): correct. p. 47 point ④ (⟨(x − x̄)²⟩ = k_BT/(∂²A/∂x²); −∂P/∂V = k_BTN/V²; ΔV/V = 1/√N): correct. p. 50 (n = κ(k_BT/ħc)³, κ = (1/π²)∫x²/(eˣ − 1) dx = "0.23…"): correct, and the slip the page points out is real (the integral is 0.2436). p. 51 (U/V = σT⁴, σ = π²k_B⁴/15(ħc)³): correct. p. 52 (P = U/3V; ε_k ∝ V^{−1/3}): correct. p. 55 point ③ (P(n_k) = e^{−βn(ε−μ)}(1 − e^{−β(ε−μ)})): correct. p. 58 (N₀ = 1/(z − 1)): the slip is real; see W2 for the wording.
- Wen's boxed Bose distribution on p. 55 has a sign slip of its own (⟨n_k⟩ = 1/(e^{−β(ε−μ)} − 1)); the page writes the correct n̄ = 1/(e^{β(ε−μ)} − 1) without citing it, so nothing needs to change.
- Problem 3(b): giving ∫x/(eˣ − 1) dx = π²/6 in the statement is not too generous. It is a standard integral the reader would otherwise look up; it hints that integration by parts is the route, but leaves the variance sum, the reduction to integrals, the integration by parts and the ratio to the reader. Keep it.
- Problem 1, mass: the classical argument (p and x factorise) is right; the quantum remark is true (ħω/k_B ~ 3e-8 K for a 1 g wall on the 2e4 N/m spring), but see W4.
- Problem 3(c), "What it means": ΔN₀ ~ N₀ is the known failure of the grand canonical ensemble for a condensate; the fixed-N remark is fair.
- Symbols: every symbol has a meaning for this page (β, δ, ε, ζ, κ, μ, σ, z, c, k, T, x, y, n, P, Q, A, s, L, N, p, M, S, E, U, V and the subscripted ones); content:check passes. Small point: the meaning of x carries the unit m, which fits Problem 1 but not the dimensionless x = βħck of Problem 3(b); dropping the unit is optional.
- No em dashes; no `## Summary` section.

COUNTS: errors=0 warnings=4 info=5

## Resolution (2026-11-27, by the page author)

- W1: the frontmatter `summary` now names the topics only and gives no results.
- W2: the bracket in Problem 3(c) now says that with ε = 0 the average is N₀ = z/(1 − z), and that the notes, p. 58, write N₀ = 1/(z − 1) from a sum written with z e^{βε} where z⁻¹e^{βε} is meant.
- W3: the hint of Problem 2(a) now asks for the one-atom partition function first and no longer gives p.
- W4: the defensible wrong choice in `p1-mass` is replaced by "grows with the mass, as Δx ∝ √M".
- I1: the Problem 4(d) solution now uses s = 1000 from then to now.
- Other info items left as they are.
- `status: reviewed`.
