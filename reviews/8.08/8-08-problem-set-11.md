---
page: content/year-4/8.08/8-08-problem-set-11.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb11/ (read: scratchpad txt/prb11.txt and pdf/prb11.pdf)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/35e4c4437626cad41f37a509d17fc8d0_transport.pdf (read: downloaded, pages rendered as images; PDF page N = printed page 92 + N up to p. 114, printed p. 115 = PDF page 22)
  - https://arxiv.org/abs/1510.07674 (not opened; checked from the known content of IAU 2015 Resolution B3)
  - CODATA 2018, AME 2020 (values checked against my own constants, not re-fetched)
verdict: needs-changes
---

# Review: Problem Set 11: Effusion from a vessel, sound and the heat capacity, diffusion from the Boltzmann equation, a krypton-filled window, and light escaping from the Sun

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page; numbers from review/ps11calc/blind.py)
- p1a: dN/dt = -(A/V) sqrt(kB T/(2 pi m)) N, so N = N0 e^{-t/t_e}, t_e = (V/A) sqrt(2 pi m/(kB T)).
- p1b: t_e = 2.017 h (2.0 L, d = 50 um so A = pi (25 um)^2, m = 20.180 u, 300 K).
- p1c: eps_out = 2 kB T (flux weight v^3; numerical integral 1.99999 kB T).
- p1d: decreases (each escaping atom carries 2kBT > 3/2 kBT mean; insulated, so E/N falls).
- p1e: alpha = sqrt(352.041/349.034) = 1.004298; n = ln[(3/97)/(0.72/99.28)]/ln alpha = 338.14. 338 stages give 2.998 %, 339 give 3.011 %; strictly 339 are needed to reach 3.0 % (to 3 s.f. 338 gives "3.00 %"). Expected answer ~338.
- p2a: gamma = 1 + kB/cv.
- p2b: sqrt(gamma/3) = sqrt(7/15) = 0.6831.
- p2c: c_s = sqrt(1.4 kB 300 K/(2.016 u)) = 1316 m/s.
- p2d: sqrt(298.15/288.15) - 1 = 1.720 %.
- p3a: D = tau kB T/m.
- p3b: eta = tau/m.
- p3c: j = -D n' + eta F n = 0 with F = -U' gives n'/n = -U'/(kB T) iff D = eta kB T; holds since tau kB T/m = (tau/m) kB T.
- p3d: notes' estimate tau vbar^2/6 = tau kB T/(3m); factor 3 (exact).
- p4a: lambda = kB T/(P sigma), sigma = 4 pi r^2 = 5.027e-19 m^2: 81.32 nm.
- p4b: K = 1.675 mW/(m K).
- p4c: q = K * 20 K/12 mm = 2.792 W/m^2.
- p4d: P = kB T/(sigma d) = 0.6867 Pa.
- p4e: stays (about) the same.
- p5a: n_e = M/(m_p (4/3) pi R^3) = 8.427e29 m^-3; lambda = 1/(sigma_T n_e) = 1.784 cm.
- p5b: N lambda^2 = R^2, t = N lambda/c = R^2/(lambda c).
- p5c: 2868 years.
- p5d: R/lambda = 3.900 (units of 1e10).

### Comparison (after opening the page; one line per answer id)
- p1-te: page V/A*sqrt(2*pi*m/(kB*T)) = mine. Agree.
- p1-num: page 2.02 h (1%) = mine 2.017. Agree.
- p1-e: page 2*kB*T = mine. Agree.
- p1-cool: page "falls" (answer 1) = mine. Agree.
- p1-stages: page 338 (1%) = mine 338.14. Agree on the number; see W7 on the wording (338 stages give 2.998 %).
- p2-gamma: page 1 + kB/cv = mine. Agree.
- p2-ratio: page 0.683 = mine 0.6831. Agree.
- p2-h2: page 1316 m/s = mine 1316.1. Agree.
- p2-pipe: page 1.72 % = mine 1.720. Agree.
- p3-d: page tau*kB*T/m = mine. Agree.
- p3-eta: page tau/m = mine. Agree.
- p3 (c) (no box): page j = -D n' + eta F n, n ∝ e^(-U/kBT), D/eta = kBT = mine. Agree.
- p3-ratio: page 3 = mine. Agree.
- p4-lam: page 81.3 nm = mine 81.32. Agree.
- p4-k: page 1.68 mW/(m K) = mine 1.675. Agree (with the consistent 6σ; Wen's box gives 3.35, see W1).
- p4-q: page 2.79 W/m² = mine 2.792. Agree.
- p4-p: page 0.687 Pa = mine 0.6867. Agree.
- p4-trend: page "stays about the same" (answer 2) = mine. Agree.
- p5-lam: page 1.78 cm = mine 1.784. Agree.
- p5-t: page R^2/(lam*c) = mine. Agree.
- p5-yr: page 2870 yr (2%) = mine 2868. Agree.
- p5-factor: page 3.90 = mine 3.900. Agree.

No disagreement on any final answer. `node scripts/calc-test.mjs -k 8-08-problem-set-11`: 70 passed. Intermediate numbers rechecked in review/ps11calc/chk.py (growth factor 4.264605, its ln 1.450350, ln α 0.0042892, shares route 332.7, 29.5 cents, N₂ 353.06 m/s, v̄(Kr) 243.99 m/s, ρ̄ 1409.5 kg/m³, σ_T n_e 56.06 per m, R/c 2.3206 s, (R/λ)² 1.52e21, neon λ at 10 Pa 1.68 mm).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| E1 | error | Problem 1(e) solution, step "The number of stages"; calcs `p1-logs` `where:` | (our own problem) | "$\alpha^k = 4.2648$ gives $k = \ln 4.2646/\ldots$" | The growth factor is 4.2646 (computed 4.264605). Change "4.2648" to "4.2646" in the page and in the `where:` of calcs `p1-logs`. |
| W1 | warning | Problem 4, Formula "Heat conductivity of a gas" (p. 104) and part (b) "from the notes' formula" | Wen's boxed result on p. 104 is $K = \frac{c_v}{3\sigma}\sqrt{2k_BT/m}$ (checked on the rendered page; the viscosity box on p. 102 has the same $3\sigma$) | $\frac{c_v}{6\sigma}\sqrt{2k_BT/m}$, cited to p. 104 with no note | The page's 6σ is right (⅙ n v̄ λ c_v with nλ = 1/σ), but a reader who uses the notes' box gets 3.35 mW/(m K), outside the 2% box. Add after the Formula: "(The notes' box on p. 104 writes $3\sigma$; with $K = \frac16 n\bar v\lambda c_v$ and $n\lambda = 1/\sigma$ it is $6\sigma$, as the lesson notes.)" (Writing rule 4.) |
| W2 | warning | Problem 1 as a whole | (pointer to Huang 7.1) | effusion from a vessel: exponential emptying, energy 2k_BT per escaping atom, UF₆ separation | The draft Set 12 (scratchpad review/ps12-stripped.mdx, Problem 1, also "our own problem") repeats the same vessel, the escaping energy and the UF₆ separation factor with the same masses. One of the two must change: since Set 11 comes first, change Set 12's Problem 1 to another Chapter IX topic (or drop the overlapping parts here). |
| W3 | warning | Problem 4(b), Check | (not in source) | "measured conductivities of the noble gases are several times larger than this simple formula gives" | A measured value with no source. Either add a measured krypton conductivity (about 9.4 mW/(m K) at 300 K; e.g. NIST Chemistry WebBook, lookup allowed) to `references` and calcs as `kind: fact`, or reword: "The estimate is rough: the lesson found the simple formula low by a factor of about 2.4 for the viscosity of argon, and the radius 0.20 nm is only our value." |
| W4 | warning | Problem 5(c), Check | (not in source) | "detailed solar models give much longer times" | Unsourced claim about solar models. Either cite a model result (e.g. Mitalas and Sills 1992, ApJ 401, 759, about 1.7 × 10⁵ years; cite only, Writing rule 11) or end the sentence at "... so the mean free path is shorter and the escape slower than in our model." |
| W5 | warning | Problem 5 statement | (our own problem) | "mass $M_\odot = 1.988 \times 10^{30}$ kg (the IAU's nominal values)" | IAU 2015 Resolution B3 gives a nominal radius and a nominal GM⊙, not a nominal mass (the reference's own `location` says "nominal solar mass parameter"). Write "radius 6.957 × 10⁸ m (the IAU's nominal value) and mass 1.988 × 10³⁰ kg (the IAU's nominal GM⊙ divided by G)" and add G to the CODATA `location`. |
| W6 | warning | Problem 1(e) solution, "$\alpha^k$ … $k = \ldots$" | | $k$ = number of stages | On this page `k` has the page-scoped meaning "the wave vector k⃗", so the tap-to-explain popup is wrong here. Use another letter with its own page-scoped meaning (e.g. $N_s$, "the number of stages"), or write the step in words. |
| W7 | warning | Problem 1(e) statement and solution | | "How many stages raise the share … to 3.0%?" … "= 338 stages" | $\ln 4.2646/\ln\alpha = 338.1$: 338 stages give 2.998%, 339 give 3.011%, so 338 does not quite reach 3.0%. Write "$k = 338.1$: about 338 stages (338 give 2.998%, which rounds to 3.0%)", or ask "About how many stages …". The 1% box already accepts both. |
| W8 | warning | Problem 1(a), first mistake hint | Wen p. 94 writes "Why? Physical picture" and gives no speed | "the typical speed √(k_BT/m) of Wen's picture" | The notes give no such picture on p. 94 (p. 95 begins hydrodynamics). Drop "of Wen's picture": "That takes the flux as the density times a typical speed √(k_BT/m)." |
| I1 | info | Problem 2(b), Check | p. 97: "c ~ thermal velocity of particle" | "sound is always a little slower than the molecules, of the same order, as the notes say" | The notes say only "of the same order"; "a little slower" is ours (true for γ ≤ 5/3). Optional: "of the same order, as the notes say (p. 97); for an ideal gas it is always a little slower." |
| I2 | info | Problem 3(d) | p. 102 writes ν = √(2mk_BT)/3σ; p. 104 "Using v̄ = √(2k_BT/m)" | "v̄ = √(2k_BT/m) as in their formulas for viscosity and heat conduction (pp. 102 and 104)" | Acceptable; v̄ is written out only on p. 104 (and p. 116). |

## Arithmetic and answer checks
- Every number on the page recomputed (review/ps11calc/blind.py, chk.py); all agree with my values except the typo E1. Calcs suite for this page: 70 passed.
- Mistake hints checked by algebra: p1-te √(m/kT) (flux n√(kT/m)) and √(m/3kT) (flux n√(3kT/m)) true; p1-e 3/2 kT (mean inside) and kT (the v_x-weighted x part) true; p2-gamma 1 + c_v/k_B gives 5/2 for c_v = 3k_B/2, true; p3-d 3τk_BT/m from ⟨v²⟩ true; p3-eta m/τ the friction coefficient true; p5-t 3R²/(λc) from ⟨x²⟩ = 2Dt with D = λc/6 true, and R/c true. W8 concerns only the attribution in one hint.
- `vars` ranges: all formulas finite and positive. p2-gamma (at c_v = k_B), p3-eta (at τ = m) and p5-t's R/c (at R = λ = 1) meet their listed mistake only on a line or a point; random sampling separates them (info; optional narrowing, e.g. k_B in [0.5, 1.2], c_v in [1.5, 4]).
- Tolerances: tight enough to reject each plausible slip (p1-stages 1% rejects the shares route 332.7; p2-ratio rejects the monatomic 0.745; p4-lam rejects σ = πr²; p4-k rejects Wen's 3σ box, which is why W1 matters; p2-pipe 2% accepts the small-change approximation 1.735 and rejects 3.47). p3-ratio 1% on an exact 3 is sensible: it rejects 3π/4 = 2.36, 1.5 and 6 (info).
- Choice boxes: p1-cool right answer at position 1, p4-trend at position 2; neither is the longest or shortest; the wrong choices are plainly wrong.
- Hints: none gives a box's result away. Frontmatter summary names topics only; no `## Summary` section; "How to answer" examples (`0.25`, `-1.5`, `sqrt(x/(2*y))^3`) are not answers. No em dashes (count 0).
- Points: 20 + 15 + 20 + 20 + 15 = 90; parts add up in every problem (5+3+5+2+5, 5+3+3+4, 6+6+4+4, 5+5+3+4+3, 3+5+4+3).

## Coverage and order
- MIT's sheet has five Huang pointers and two remarks; every problem on the page is "our own problem", marked in its title and listed in the intro. MIT's remark on its Problem 4 (estimate the mean free path first) is kept and built into our Problem 4; the remark on its Problem 3 (an n! missing in Huang) is left out with a reason. Points stated as ours. `covers: [9]`, `lecture: 9` fit the date (April 20, 2005) and Chapter IX.
- Overlap with later sheets: MIT Set 12 Problem 4(a) also asks a mean free path at 1 atm (air), but ours goes on to the conductivity of krypton: no duplication of substance (info). The real duplication is with our own Problem 1 of the draft Set 12 (W2). No overlap found with Sets 1–10 of 8.08 or the 8.09 sets (grep for effusion, krypton, Thomson, uranium, organ pipe).

## Licensing
- No figures. No text copied from Wen's notes or the sheet. Huang not used. AME 2020 credited to the IAEA (no logo); IAU via arXiv; CODATA via NIST. Nothing marked "rights reserved" used. Pass.

## Wen citations (each checked on the rendered page)
- p. 93: λ = 1/(σn), σ = π(2r)² = 4πr². Correct.
- p. 94: Boltzmann f(p), flux of effusion I = n√(k_BT/2πm). Correct.
- p. 96: adiabatic condition, entropy S = Nk[5/2 − ln(nλ_T³)]. Correct.
- p. 97: c = √(γP₀/ρ₀) = √(γk_BT/m), γ = 5/3. Correct.
- p. 98: D ≃ λv̄/6. Correct.
- p. 100: random walk ⟨x²⟩ = Δx₁² + … = Nλ², and ⟨x²⟩ = 6Dt. Correct.
- p. 102: viscosity independent of n. Correct (box has 3σ, see W1).
- p. 104: K = ⅙ n v̄ λ c_v, v̄ = √(2k_BT/m), independent of n. Correct location; box has 3σ (W1).
- p. 106: Drude du/dt = −u/τ + eE/m. Correct.
- p. 108: g₀ = e^(−β(ε_k − μ)) for a classical gas. Correct.
- p. 109: δg = −τ v_k·∂g₀/∂r − (τ/ħ)F·∂g₀/∂k. Correct.
- p. 115: diffusion with force, D = ηk_BT from the Boltzmann distribution. Correct (the PDF skips a number here: printed p. 115 is PDF page 22).

## Symbols
- Page-scoped meanings exist for every letter with a cosmology or general meaning that the page uses (T, n, λ, τ, σ, c, k, z, N, R, μ, ρ, γ, α, A, U, P, D …). None gives a box's answer (η's unit s/kg is just its unit). Problem: `k` is also used for the number of stages (W6). c_s, M_⊙, ħ, ⟨⟩ and the bar fall back to correct general meanings.

## Uncited qualitative claims in Check steps
- P4(b) "measured conductivities of the noble gases are several times larger": needs a source or rewording (W3).
- P5(c) "detailed solar models give much longer times": needs a source or rewording (W4).
- P1(e) "a real stage passes about half of it, gains less, and a real plant needs many more stages": correct (with a cut of ½ the gain is ln 2 ≈ 0.69 of the ideal one, by a Rayleigh-type balance; real gaseous-diffusion cascades had well over a thousand stages); general knowledge, acceptable without a source (info).
- P4(e) vacuum-flask remark and P4(b) "krypton is used in windows": correct general knowledge (info).

## Forward links
- Callout: Silk damping is on the linked 8.902 Lecture 17 page (cmb-anisotropies, lecture 17); decoupling is the linked 8.286 Lecture 17 page (temperature-and-decoupling, lecture 17). The √(λct) diffusion length is consistent with Problem 5. Correct.

## Notes
- calcs `p5-year` cites `iau` for the Julian year of 365.25 days; Resolution B3 does not define it (harmless, info).
- AME 2020 input masses in calcs (U-235 235.0439299, U-238 238.0507882) may be older AME values in the last digits; irrelevant at the 3 decimals shown (uncertain, info).

COUNTS: errors=1 warnings=8 info=8

## Resolution (2026-11-27, by the page author)

- E1: Problem 1(e) now uses α^k = 4.2646, also in the calcs entry `p1-logs`.
- W1: after the heat-conductivity Formula the page notes that the notes' box on p. 104 writes 3σ, and that with K = ⅙ n v̄ λ c_v and nλ = 1/σ it is 6σ.
- W2: the effusion overlap is resolved in Set 12, whose own Problem 1 was replaced (Wiedemann–Franz law); this set keeps effusion.
- W3: the Problem 4(b) check now compares with the lesson's argon viscosity (factor about 2.4) instead of an uncited measured value.
- W4: the uncited remark on detailed solar models is removed.
- W5: the Sun's mass is now "the IAU's nominal GM⊙ divided by G", with G in the CODATA reference.
- W6: the number of stages is written in words, so k keeps its page meaning.
- W7: Problem 1(e) asks "About how many stages", and the solution notes that 338 stages give 2.998 %.
- W8: the first mistake hint of Problem 1(a) no longer attributes a speed to Wen.
- `status: reviewed`.
