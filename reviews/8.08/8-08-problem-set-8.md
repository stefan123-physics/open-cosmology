---
page: content/year-4/8.08/8-08-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb8/ (read: 808/pdf/prb8.pdf rendered, and txt/prb8.txt)
  - MIT 8.08 Problem Set 9 (808/txt/prb9.txt), for the overlap check (read)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: printed pp. 62, 67, 68, 69 = PDF pages 15, 20, 21, 22)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/fed85ade1be7fc37f3526ef1f56207de_the_bose_gas_co.pdf (read: printed pp. 70–73 = PDF pages 1–4)
  - K. Huang, Statistical Mechanics: not opened (course rule)
verdict: needs-changes
---

# Review: Problem Set 8: Sodium atoms condensed in a trap, and the critical velocity, healing length and vortex core of a condensate

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written from the stripped statements and MIT's sheet only (pdf/prb8.pdf rendered and read), before the full page was opened. Numbers checked in Python: `808/ps8calc/blind.py`; comparison checks in `808/ps8calc/compare.py`.

### My answers
- p1(a): non-interacting ground state |ψ|² ∝ e^(−r²/r0²); ⟨r²⟩ = 3r0²/2, rms radius = √(3/2) r0 = 1.2247 r0 = 6.12×10⁻³ cm; independent of N. (Numerical integral: rms/r0 = 1.224745.)
- p1(b): n(r) = (μ − ½mω0²r²)/g inside, zero outside; R = √(2μ/(mω0²)); N = 4π m ω0² R⁵/(15 g), so R = (15 g N/(4π m ω0²))^(1/5) ∝ N^(1/5). (Numerical integral of n(r) returns N to 1e-15.)
- p1(c): n0 = μ/g = mω0²R²/(2g) ⇒ g = mω0²R²/(2n0); with g = 4πħ²a/m and mω0/ħ = 1/r0²: a = R²/(8π n0 r0⁴) (independent of m) = 2.807 nm for R = 0.021 cm, n0 = 10¹¹ cm⁻³, r0 = 5×10⁻³ cm. N = 8π n0 R³/15 = 1.552×10⁶. Side numbers: ω0 = ħ/(m r0²) = 1.105 s⁻¹ (0.176 Hz), μ/k_B = 74.4 pK, ħω0/k_B = 8.44 pK, R/r0 = 4.2. R that would give a = 2.75 nm: 0.02078 cm.
- p2(a): ω_k/k = √(ħ²k²/(4m²) + μ/m), smallest at k → 0: v_c = √(μ/m).
- p2(b): ψ = √n tanh(x/ℓ) solves the equation for ℓ = ħ/√(mμ). (Finite-difference residual 1.6×10⁻⁸ relative.)
- p2(c): ħ/(m r_c) = √(μ/m) ⇒ r_c = ħ/√(mμ) = ℓ.
- p2(d): m = 22.99 u, μ = k_B·100 nK: v_c = 6.014 mm/s, ℓ = 0.4593 μm.

### Comparison (one line per answer id)
- p1-rms: page √(3/2)·r0. Agrees.
- p1-ideal-n: page choice 2 "does not depend on N". Agrees.
- p1-radius: page (15gN/(4π m w0²))^(1/5). Agrees.
- p1-tf-n: page choice 0 "grows as N^(1/5)". Agrees.
- p1-a: page 2.81 nm. Agrees (2.807).
- p1-atoms: page 1.55 million. Agrees (1.552).
- p2-vc: page √(μ/m). Agrees.
- p2-ell: page ħ/√(mμ). Agrees.
- p2-rc: page ħ/√(mμ). Agrees.
- p2-vc-num: page 6.01 mm/s. Agrees (6.014).
- p2-ell-num: page 0.459 μm. Agrees (0.4593).

No disagreement on any final answer. The calcs file passes: `pytest -k 8-08-problem-set-8` gave 35 passed.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(b), `<Answer id="p2-ell">`, second mistake | (our own problem) | `{ expr: "hbar/sqrt(4*m*mu)", hint: "Check the second derivative of tanh: f'' = −(2/ℓ²) f(1 − f²), with a factor 2, not 1." }` | The hint is not true of that formula. Dropping the factor 2 gives 1/ℓ² = 2mμ/ħ², that is ℓ = ħ/√(2mμ) (the first listed mistake), not ħ/√(4mμ) (checked in compare.py: factor 1 gives ℓ = 0.707, the 4mμ formula is 0.5, in units ħ = m = μ = 1). Replace this mistake with `{ expr: "sqrt(2)*hbar/sqrt(m*mu)", hint: "That drops the ½ of the kinetic term: −(ħ²/m)ψ'' in place of −(ħ²/2m)ψ''. Then f'' = (mμ/ħ²)(f³ − f) and 2/ℓ² = mμ/ħ²." }` (check: 2/ℓ² = mμ/ħ² gives ℓ = √2 ħ/√(mμ)), and extend the first mistake's hint to say that the same formula comes from a second derivative of tanh without its factor 2. |
| 2 | warning | Problem 2(b) and 2(c) (and title, summary) | MIT's own Problem Set 9, Problem 1 (next week's sheet): a 1D condensate next to a hard wall (U = +∞ for x < 0), the amplitude suppressed near the wall, the coherence length ξ found variationally, and the remark that "the size of the vortex core is given by ξ" | Our 2(b): a condensate next to a hard wall, ψ(0) = 0, healing length ℓ; our 2(c): vortex core ≈ ℓ | Same set-up and the same conclusion as MIT's Set 9 Problem 1 (only the method differs: exact tanh at T = 0 versus a variational trial function near T_c). The course note forbids our own problems duplicating another set's. Replace 2(b) with a different superfluidity question from Wen p. 72: the excitation frequency in a flowing condensate is ω_k + v_s k; for v_s > v_c find the band of wave numbers whose frequency is negative (answer |k| < (2m/ħ)√(v_s² − μ/m), checked numerically in compare.py: 4.868×10⁶ m⁻¹ both ways for sodium, μ/k_B = 100 nK, v_s = 1.5 v_c). Keep 2(c) (core radius from the flow speed reaching v_c), and in 2(d) give r_c in place of ℓ. Update title, summary and intro ("how it heals next to a wall"). |
| 3 | warning | Problem 1(a) choice box `p1-ideal-n`, and 1(b) choice box `p1-tf-n` | – | (a)'s wrong choice "grows as N^(1/5), as the atoms push each other apart" is the right answer of (b) with its reason; (b)'s wrong choice "does not depend on N, as without interactions" states (a)'s answer | Drop the reasons that hand over the other part: e.g. (a) "grows as N^(1/5)" → "grows as N^(1/2), as each atom adds to the cloud's area"; (b) "does not depend on N, as without interactions" → "does not depend on N". |
| 4 | warning | Problem 1(c), first sentence | "Fig. 15.2 of Huang's book shows measured shapes of condensation" | "Now use a measured profile. (Our numbers, in place of the textbook's figure.) … R = 0.021 cm (our number)" | The radius is invented (chosen, as the Check says, to land near 2.75 nm), so calling the profile "measured" overstates it. Write "Now use a density profile with our illustrative numbers in place of the textbook's measured one." The honesty note in the Check ("we chose our illustrative radius so that it would be") is good; keep it. |
| 5 | warning | Problem 2(c) "What it means" and 2(d) Check | Wen p. 71 labels the "size of vortex core" on a sketch of f(r) without a formula | "the core of a vortex … is about one healing length across"; "its vortex cores are about half a micrometre wide" | r_c is a radius (distance from the axis), so the core is about one healing length in radius, about two across. Write "about one healing length in radius" and "vortex cores with a radius of about half a micrometre". |
| 6 | info | Solutions of Problems 1 and 2, `cite="mit" at="… (our own solution)"` | – | Formulas derived by us cite MIT's sheet with "(our own solution)"; for Problem 2 (our own problem) they cite "Problem 2, p. 1", where MIT has only the Huang pointer | Same convention as reviewed Sets 1–6 and the 8.07 sets; accepted. Optional: for Problem 2, "Problem 2, p. 1 (our own problem and solution)" would be more exact. |
| 7 | info | Intro, notation | – | "g … is the v₀ of the notes (reading 1, p. 67), called U₀ on p. 70" | The handwriting on pp. 67 and 70 makes υ₀ and U₀ hard to tell apart; I could not confirm that p. 70 writes a different letter from p. 67 (uncertain). Not wrong, just unverified by me. |

## Arithmetic and answer checks
- All eleven answers recomputed independently (see Blind solve); all agree.
- 1(a): 61.2 μm = √1.5 × 50 μm. ω0 = 1.105 s⁻¹. Correct.
- 1(b): N integral, R formula correct; mistakes: uniform ball with density μ/g gives (3gN/(2π mω0²))^(1/5) (true); trap without ½ gives (15gN/(8π mω0²))^(1/5) (true). Both differ from the answer by factors 1.20 and 1.15, well outside a formula tolerance.
- 1(c): r0⁴ = 6.25×10⁻¹⁸ m⁴, 8π n0 r0⁴ = 15.71 m, a = 2.81 nm, g = 1.03×10⁻⁵⁰ J m³, (8π/15)n0 = 1.676×10¹⁷ m⁻³, R³ = 9.26×10⁻¹² m³, N = 1.55×10⁶; ideal peak N/(π^(3/2) r0³) = 2.23×10¹² cm⁻³, ratio 22; μ/k_B = 74.4 pK. All correct.
- 1(c) Check: "the cloud is four times wider than the ideal condensate" compares the Thomas–Fermi edge R with r0 (where the ideal density has fallen to 1/e). Comparing like with like, the rms sizes differ by 2.2 (TF rms = √(3/7) R). Info: say "its edge lies 4.2 r0 from the centre" or "its rms size is 2.2 times that of the ideal condensate".
- Weak trap: the page does say it (1(a) Check ω0 = 1.10 s⁻¹; 1(c) Check μ/k_B = 74 pK, "tiny because MIT's trap is so weak"). Good. Info: with MIT's r0 the ideal-gas condensation temperature of 1.55 million atoms would be only about 0.9 nK (ħω0(N/ζ(3))^(1/3)/k_B); real sodium traps are tens to hundreds of times stiffer (r0 of a few μm). An optional sentence that MIT's r0 makes a much weaker trap than real experiments would help readers; not required.
- Thomas–Fermi validity: R/r0 = 4.2, Na/r0 = 87, μ/ħω0 = 8.8: the approximation is reasonable, as the page says.
- 2(a): mistakes √(2μ/m) (½mv² = μ: true) and 0 (free bosons, ω_k/|k| = ħ|k|/2m: true).
- 2(b): see error 1. The first mistake's hint (ħ²/2mℓ² = μ estimate) is true.
- 2(c): mistake 2πħ/√(mμ) (h in place of ħ): true.
- 2(d): m = 3.818×10⁻²⁶ kg, μ = 1.381×10⁻³⁰ J, μ/m = 3.617×10⁻⁵ m²/s², √(mμ) = 2.296×10⁻²⁸, v_c = 6.01 mm/s, ℓ = 0.459 μm. Correct.
- Points: 5 + 8 + 7 = 20, 4 + 5 + 3 + 3 = 15, total 35. Correct.
- vars ranges: all answers and mistakes finite and distinct over the ranges given.
- Hints: none gives a final result. 1(c) hint 2 says only R, n0, r0 remain (strong but not the result; acceptable). The "How to answer" example `(3*g*N/(m*w0))^(1/4)` is not any box's answer (info: it does share the letters of the 1(b) box; a neutral example would be cleaner).
- Every solution ends with a Check step (units, limits or numbers). Problem 2(c) has no separate Check step; its "What it means" step serves.

## Coverage and order
- Problem 1: MIT's parts (a), (b), (c) in MIT's order, with the stated changes (rms definition, our R in place of Huang's figure, g = 4πħ²a/m stated by us, an extra N box), each marked where it stands, as the intro says. MIT's maximum density 10¹¹ cm⁻³ and r0 = 5×10⁻³ cm kept. Formulas on MIT's sheet (trap, GP equation, Thomas–Fermi equation) correctly cite "Problem 1/1(b), p. 1"; the ∂²_r → ∇² change is said.
- Problem 2: MIT gives only "Problem 15.9 in K. Huang's book"; ours is marked "(our own problem)" in the title and in the intro. Topic (superfluidity, Wen pp. 69–72) fits the set's date and Chapter VII. But see warning 2 for the overlap with MIT Set 9 Problem 1.
- Citations to Wen checked on the rendered PDFs: p. 62 (∫|ψ|² = N normalisation) yes; p. 67 (contact interaction, GP equation, ground-state condition) yes; p. 68 (U = 0, n = μ/v0) yes; p. 69 boxed ω_k² = (ħ²k²/2m + 2μ)k²/2m and v_s = √(μ/m) yes; p. 71 (vortex ψ = f(r)ψ0 e^{iφ}, v_s = (ħ/m)∇φ, so speed ħ/(mr); core size sketched, not given) yes; p. 72 (v_c from the excitation curve, as a sketch; "no superfluid flow for free boson condensed state", v_c = 0) yes.
- Summary names topics only, no results. No `## Summary` section. No em dashes (0 found).

## Licensing
- Huang's figure and equation are not reproduced or reconstructed; the page says so. No "rights reserved" or "courtesy" material on MIT's sheet. Wording is our own; no verbatim MIT sentences beyond standard terms. No OpenStax or LibreTexts.

## Notes
- Symbols: page-scoped meanings exist for every letter used (μ, ψ, ω, ℓ, a, k, T, n, m, f, g, r, N, R, v₀, r₀, U, ω₀, n₀, r_c, v_c, U₀, ψ₀, ω_k, primes). OK.
- The writer's calcs file checks each answer by an independent route (numerical integrals, root finding), and all 35 entries pass.
- Same model wrote and reviewed this page; my answers were fixed in this file before the page was opened.

COUNTS: errors=1 warnings=4 info=2

## Resolution (2026-11-27, by the page author)

- Error 1 and Warning 2: Problem 2(b), the healing length next to a hard wall, overlapped MIT's own Problem Set 9, Problem 1, and carried the false mistake hint. It is replaced by the question from Wen p. 72: the band of wave numbers with negative frequency in a flowing condensate, |k| < (2m/ħ)√(v_s² − μ/m), with two listed mistakes whose hints are true. 2(c) keeps the radius where ħ/(mr) = v_c as an estimate of the core radius; 2(d) asks for r_c and (our addition) k_max at v_s = 1.5 v_c, 4.87 × 10⁶ m⁻¹. Title, summary, intro, calcs and symbols updated. (The new part was checked by the page author against the Bogoliubov condition ε_k(ε_k + 2μ) < (ħv_s k)², which gives the same band.)
- Warning 3: the wrong choices in 1(a) and 1(b) no longer state the other box's answer.
- Warning 4: 1(c) now says the density profile uses our illustrative numbers in place of the textbook's measured one.
- Warning 5: the vortex core is described by its radius.
- `status: reviewed`.
