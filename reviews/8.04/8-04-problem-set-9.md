---
page: content/year-2/8.04/8-04-problem-set-9.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps9_2016/ (read: pdftotext, plus pages 1 to 3 rendered from the PDF with pdftoppm to read Problem 1's phase and the Problem 2 to 4 formulas)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes18/ (read, PDF; printed footers checked page by page)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes19/ (read, PDF; printed footers checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/ (read, PDF; printed footers checked)
verdict: needs-changes
---

# Review: Problem Set 9: Stationary phase, phase shifts and Levinson's theorem, and angular momentum

## Blind solve

### My answers (written before opening the page)

MIT's phase, read from the rendered PDF (p. 1, rendered on my own with pdftoppm): phi(lambda, x) = 50(x - lambda x^4/32). Conventions of notes Ch. 18: psi = e^{i delta} sin(kx + delta) for x > a; Levinson N_b = (delta(0) - delta(inf))/pi.

- 1(a) Delta = 2 sqrt(ln 2)/10 = sqrt(ln2)/5 = 0.16651. Integrating 1..3 is safe: Gaussian there is e^{-100} ~ 4e-44.
- 1(b) phi' = 50 - (25/4) lambda x^3 = 0 at x = 2 gives lambda* = 1. phi(1,x) ~ 75 - (75/2)(x-2)^2 (linear term zero).
- 1(c) excursion = 37.5 (Delta/2)^2 = 0.3750 ln2 = 0.2599 rad = 0.0827 pi. f ~ e^{75i} sqrt(pi/100) = e^{75i} x 0.17725.
- 1(d) f = e^{75i} sqrt(pi/(100 + 37.5 i)) = e^{i(75 - 0.17939)} x 0.17151 (phase to add: -(1/2) arctan(0.375) = -0.17939).
- 1(e) numerical f(1) = 0.17149 e^{i(75 - 0.17936)} (agrees with (d) to 1e-4; (c) is 3.4% too large). |f| max at lambda = 0.9916, |f|max = 0.17156 (slightly below lambda* = 1).
- 2(a) k'a -> z0. tan delta ~ u (tan z0 / z0 - 1). Exception z0 = pi/2 + n pi (cot z0 = 0): tan delta ~ 2/u, delta -> pi/2 mod pi. Numbers: z0=2: -2.0925; z0=5: -1.6761; z0=9: -1.0503.
- 2(b) k'/k -> 1, tan delta -> tan(k'a - ka) -> tan(z0^2/(2u)) -> 0.
- 2(c) f(u;z0) = [1 - (u'/u) cot u' tan u]/[tan u + (u'/u) cot u'], u' = sqrt(u^2 + z0^2); equivalently (u tan u' - u' tan u)/(u' + u tan u tan u').
- 2(d) closed form: delta = u' - u + arctan[(r-1) sin u' cos u'/(cos^2 u' + r sin^2 u')] - n pi, r = u/u', n = round(z0/pi). N_b = 1, 2, 3; delta(inf) = -pi, -2pi, -3pi. Distance at the largest u: z0=2, u=15: 0.1368 rad; z0=5, u=20: 0.6214 rad; z0=9, u=30: 1.3249 rad (approx z0^2/(2u)). Bound states for z0 = 5: 2.
- 3(a) cot delta = [tan ka + (k'/k) cot k'a]/[1 - (k'/k) cot k'a tan ka], k'^2 = 2m(E - V0)/hbar^2.
- 3(b) cot delta = [tan ka + (kappa/k) coth kappa a]/[1 - (kappa/k) coth kappa a tan ka].
- 3(c) delta(E = V0) = arctan 5 - 5 = -3.6266 rad; s = tanh(z0)/z0 - 1 = -0.80002. delta goes from 0 down, then back to 0 at infinity (no bound states).
- 4(a) h = ka/(2 lambda) + sin ka cos ka. A = e^{i delta} sin(ka + delta)/sin ka; |A|^2 = 1/[1 + (4 lambda/u) sin u cos u + (4 lambda^2/u^2) sin^2 u].
- 4(b) tan delta ~ -2 lambda ka/(1 + 2 lambda); small lambda: ~ -2 lambda ka; large lambda: ~ -ka. lambda -> inf: tan delta = -tan ka (delta = -ka, wall at x = a).
- 4(c) lambda = 5, resonances (peak of delay): ka = 2.8776, delay 14.13, |A| = 3.739; ka = 5.841, 3.96, 2.170; ka = 8.881, 2.02, 1.709. Levinson: no bound states, delta(0) = 0 and delta returns towards 0 (delta(10) = -0.200).
- 5(a) [Lz,x] = i hbar y, [Lz,y] = -i hbar x, [Lz,z] = 0. Boxes: y, -x.
- 5(b) [Lz,px] = i hbar py, [Lz,py] = -i hbar px, [Lz,pz] = 0. Boxes: py, -px.
- 5(c),(d) expectation of a commutator with Lz vanishes in an Lz eigenstate (Lz Hermitian).
- 6(a) dr/dx = sin th cos ph, dr/dy = sin th sin ph, dr/dz = cos th; dth/dx = cos th cos ph / r, dth/dy = cos th sin ph / r, dth/dz = -sin th / r; dph/dx = -sin ph/(r sin th), dph/dy = cos ph/(r sin th), dph/dz = 0.
- 6(b) Lx = i hbar (sin ph d_th + cot th cos ph d_ph); Ly = i hbar(-cos ph d_th + cot th sin ph d_ph); Lz = -i hbar d_ph. Lx/(i hbar) coefficients: sin ph, cos ph/tan th.
- 6(c) coefficient of d_th in Lx^2/(-hbar^2): cos^2 ph cot th. L^2 = -hbar^2 [ (1/sin th) d_th(sin th d_th) + (1/sin^2 th) d_ph^2 ].

### Comparison (one line per answer id)

- p1-width 0.1665: agrees (mine sqrt(ln 2)/5 = 0.16651).
- p1-safe choice 0: agrees (e^-100 = 3.7e-44).
- p1-lam 1: agrees.
- p1-taylor 75 - 37.5(x-2)^2: agrees.
- p1-exc 0.0827 (3%): agrees (0.08274). The full-phase values 0.0805 and 0.0851, which the solution says the box accepts, are inside by only 0.0003 and 0.00008 (warning 3).
- p1-mag0 0.1772: agrees (0.17725).
- p1-mag2 0.1715: agrees (0.17151).
- p1-ph2 -0.179: agrees (-0.17939).
- p1-num 0.1715: agrees (quad: 0.171489; phase -0.17936 relative to 75).
- p1-max 0.992: agrees (bounded minimisation: 0.99161, |f| = 0.171555).
- p2-ka z0: agrees.
- p2-slope tan z0/z0 - 1: agrees (checked against f(u)/u at u = 1e-4 for z0 = 2, 5, 9: -2.09252, -1.67610, -1.05026).
- p2-inf choice 0: agrees (tan delta(u = 200, z0 = 2) = 0.010022).
- p2-f: agrees (my form (u tan w - w tan u)/(w + u tan u tan w) is the same function).
- p2-gap2 0.137, p2-gap5 0.621, p2-gap9 1.325: agree (0.13676, 0.62138, 1.32490).
- p2-n5 2: agrees.
- p3-above, p3-below: agree.
- p3-top -3.627: agrees (arctan 5 - 5 = -3.62660).
- p3-slope -0.800: agrees (tanh 5/5 - 1 = -0.800018).
- p4-h u/(2 lam) + sin u cos u: agrees.
- p4-amp: agrees (my 1/[1 + (4 lam/u) sin u cos u + (4 lam^2/u^2) sin^2 u] is the same after expanding).
- p4-low -2 lam u/(1 + 2 lam): agrees.
- p4-wall choice 0: agrees.
- p4-u1 2.878, p4-delay1 14.13, p4-a1 3.74: agree (2.87758, 14.1321, 3.7393).
- p4-lev choice 0: agrees.
- p5-x y, p5-y -x, p5-px py, p5-py -px: agree.
- p6-thx cos theta cos phi / r, p6-phy cos phi/(r sin theta): agree.
- p6-lx-th sin phi, p6-lx-ph cos phi / tan theta: agree.
- p6-lx2 cos^2 phi / tan theta: agrees.

No disagreement on any final answer. The one error (row 1 below) is in a side remark of the 2(a) solution, where my blind solve gives 2/ka and the page 1/ka; a numerical check decides it for 2/ka.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(a), solution, step "Check the result" | (MIT asks only for the limit; this is the page's own remark) | "The argument fails when cot z0 = 0 ... then the large term of the denominator is missing and tan δ ≃ 1/ka goes to infinity." | Wrong coefficient, and the reason is not quite right. At z0 = π/2 + nπ, k'a ≈ z0 + (ka)²/(2z0), so cot k'a ≈ −(ka)²/(2z0) and (k'/k) cot k'a ≈ −ka/2: the second term of the denominator does not vanish but becomes as small as tan ka. The denominator is ka/2 and **tan δ ≃ 2/ka**. Numerical check (z0 = π/2, exact formula): u·tan δ = 1.999987 at u = 1e-2 and 1.9999999 at u = 1e-3. Replace with: "The argument fails when cot z0 = 0, that is for z0 = π/2, 3π/2, ...: then the second term of the denominator is no longer large (it is about −ka/2), the denominator is about ka/2, and tan δ ≃ 2/ka goes to infinity, so δ tends to π/2 rather than 0." Add a calcs entry (kind: limit, z0 = pi/2, u·f(u; z0) → 2). |
| 2 | warning | Problem 2(d), boxes p2-gap2, p2-gap5, p2-gap9 (tolerance 2%) and the third hint | "state how close δ at the upper value of u is to the expected value of δ(E = ∞)" (from the plots) | The third hint says δ approaches its final value "like z0²/(2u), from above". The 2% boxes then accept that estimate with no plot at all: 0.625 for z0 = 5 (0.6% from 0.621) and 1.350 for z0 = 9 (1.9% from 1.325). Only z0 = 2 (0.133, 2.6% off) is rejected. | Tighten the three tolerances to 0.5% (0.1368, 0.6214 and 1.3249 still pass; 0.625 and 1.35 are rejected). Optionally shorten hint 3 to "Part (b) tells you how δ approaches its final value", without the formula. |
| 3 | warning | Problem 1(c), box p1-exc (0.0827, 3%) and the sentence "The box accepts those values too." | (page's own box) | The full-phase values 0.0805 and 0.0851 lie inside by 0.0003 and 0.00008. A reader who uses the full phase with the rounded Δ = 0.167 gets 0.0855 on the upper side, which is rejected although the solution says such values are accepted. | Widen the tolerance to 5% (0.0786 to 0.0868). No likely mistake comes near: Δ instead of Δ/2 gives 0.331, 75 instead of 37.5 gives 0.165, radians instead of units of π give 0.260. Update the descriptions of calcs entries p1-exc-lo-box and p1-exc-hi-box. |

## Arithmetic and answer checks
- Problem 1: phase read from the rendered PDF, p. 1: φ(λ, x) = 50(x − λx⁴/32), as on the page. λ* = 1, φ(1, 2) = 75, φ'' = −75, excursion 37.5 ln2/100 = 0.2599 = 0.0827π; full phase 0.2528 and 0.2672 on the two sides. Frozen phase 0.17725 e^{75i}; quadratic 0.17151 e^{i(75 − 0.17939)}; numerical f(1) = 0.143671 − 0.093633 i = 0.171489 e^{−0.57758 i} (scipy quad from 1 to 3). Table values (0.00034, 0.0054, 0.0389, 0.1218, 0.1636, 0.1715) all recomputed. Maximum at λ = 0.9916, |f| = 0.171555, 0.04% above |f(1)|. Second-order formula at λ = 0.5: 0.038840, numerical 0.038871. The 3.4%, 3.2%, "one part in 10,000", 0.398 and 0.578 are correct.
- Problem 1 Plot: the solid curve's mathjs expression was evaluated with the repository's mathjs `compile` (as `components/Plot.tsx` does): 41 points from −0.4 to 0.4; values 0.000342165, 0.00536128, 0.0388714, 0.121767, 0.163579, 0.171489 at λ = 0, 0.25, 0.5, 0.75, 0.9, 1, equal to the quad integral. Against an independent integral the 0.02-step sum has a largest absolute error of 1.0e-9 over λ in [0, 1.3] (relative 2e-6 at λ = 0, where |f| is smallest); the truncation at ±0.4 costs e^{−16}. So it really is the integral, and the step is fine enough. The dashed curve's formula (Gaussian with linear term b = 50(1 − λ) and c = 100 + 37.5λi) was rederived: correct.
- Problem 2: the closed form δ = −u + atan((u/w) tan w) + π n(w) − π n(z0) agrees with my own form to 1e-12, is continuous (largest step 2e-4 on a 3e5-point grid), and agrees with MIT's route: integrating the page's dδ/du formula with quad gives −3.0048321, −5.6618086, −8.0998742, equal to the closed form to 1e-10. tan of the closed form equals f(u; z0) to 1e-11. Caption "stays above its final value" checked: smallest distances 0.067, 0.420, 1.325, all positive. Table and z0²/(2u) column correct; 1.325/(3π) = 14%. Threshold depths 1.571, 4.712, 7.854, 10.996 correct. The 2(b) sine/cosine form was checked by hand; 0.01002 at ka = 200 correct. mathjs evaluation of the z0 = 9 curve at u = 30: −8.099874.
- z0 = π/2 exception in 2(a): see row 1 (2/ka, not 1/ka). The closed form of 2(d) is used only for z0 = 2, 5, 9, away from the exception, as the page says.
- Problem 3: δ(z0) = −3.62660 from both sides (continuous); minimum −3.67014 at u = 5.24094, where k'a = 1.5707963 (so "exactly where k'a = π/2" holds numerically); δ(10) = −1.41157, δ(20) = −0.62113, δ(40) = −0.31664; −z0²/(2u) = −0.3125 at 40. δ ≤ 0 everywhere (largest −8e-5 near u = 0). Hard-wall and V0 = 0 limits correct. The Plot expression evaluated in mathjs gives the same values.
- Problem 4: matching condition, h, |A|² and the λ → ∞ limit rederived. The continuous δ with floor(u/π) checked against an unwrapped arctan, and evaluated in mathjs (`cot` works there; δ(0) = 0, δ(π) = 0). The delay formula |A|²(1 + 2λ sin²u/u²) − 1 equals the numerical derivative of δ to 1e-7. Delay peaks: 2.87758 / 14.1321 / 3.7393; 5.84149 / 3.9602 / 2.1698; 8.88114 / 2.0205 / 1.7092. |A| peaks at 2.87894, 5.84652, 8.88845 (page: 2.879, 5.847, 8.888). Lowest delay −0.90909 = −10/11 at u → 0, never lower in (0, 10]. δ(10) = −0.20047. All as on the page.
- The ±0.5% ka box (2.8636 to 2.8924) accepts the delay peak (2.8776) and the |A| peak (2.8789) and rejects π. It rejects the point where δ rises through −π/2 (about ka = 2.840, 1.3% lower), which Chapter 19 (p. 5) names as the signal of a resonance in its example. The box says "taken at the peak of the time delay", so this is acceptable (info 3).
- Problem 5: all six commutators and the expectation-value argument checked.
- Problem 6: the nine derivatives, L̂x, L̂y, L̂z and the whole L̂x²/(−ħ²) operator checked. The five-term L̂x² formula was tested numerically against applying (z∂y − y∂z) twice in Cartesian coordinates to the test function sin³θ cos 2φ + cos θ sin φ at r = 1.3, θ = 0.7, φ = 0.4: −2.8310750 (Cartesian, finite differences) against −2.8310751 (page's formula). L̂² cos θ = 2ħ² cos θ correct.
- Calcs file: p6-lx2 checks the box by applying L̂x/(iħ) twice to θ. The first application (giving sin φ) is taken from entry p6-lx-th; only the second is done in Cartesian coordinates. That is valid (D²θ picks out exactly the ∂/∂θ coefficient, since all second derivatives of θ with respect to θ, φ vanish) but only partly independent; my full numerical check above covers the rest (info 4).
- Formula boxes: every expr and mistake is finite over its vars; `tan` and `tanh` are in `FUNCTIONS` of lib/answers.ts and `cot`, `coth` are not, so the instruction to type 1/tan(...) and 1/tanh(...) is right. Each mistake hint is true of its formula (checked one by one, including the sign hints in 5(a), 5(b), 6(b) and the "minus the numerator" hint in 2(a)).
- p3-above: its vars ranges (k 1 to 1.4, k' 0.3 to 0.8, a 0.5 to 1) contain points where the denominator 1 − (k'/k) cot k'a tan ka is zero (for example ka = 0.6, k'a = 0.6), that is poles of cot δ. Agreement is tested relatively (1e-6), so equivalent forms still match except within about 1e-10 of a pole; harmless, but a range with ka up to 0.5 only would avoid the poles (info 5).

## Coverage and order
- All six MIT problems and every part, in MIT's order. Points 10, 10, 10, 15, 10, 10 as on MIT's sheet; the part splits add up.
- Additions, all declared in the introduction: the slope box in 2(a), two numbers in 3(c), the |A|² box in 4(a), the box in 6(c); the closed formula for the continuous phase shift (MIT invites "a simpler way"); the second-order |f(λ)| formula in 1(e), marked "This step is our addition". "(Look a little beyond λ = 1 as well.)" in 1(e) goes slightly beyond MIT's interval [0, 1]; harmless.
- Left out: the reading assignment (declared).
- `covers: [18, 19, 20]` matches the lessons phase-shifts-time-delay (lecture 18), levinson-resonances-breit-wigner (19) and angular-momentum-central-potentials (20). Problem 6 and the 5(d) check use only notes pp. 1 to 9 (up to eq. (3.5)), which that lecture-20 lesson covers. `lecture: 20` fits.

## Licensing
- MIT's sheet has no "All rights reserved" or "Courtesy of" notices and no figures; the page reproduces none. The W. Taylor suggestion is credited. The wording is the page's own; only short standard phrases match.
- No OpenStax, LibreTexts or other third-party material. All graphs are generated from formulas.

## Notes
- Citations: every `at=` checked against printed footers. Sheet: p. 1 (Problem 1), p. 2 (Problem 2), p. 3 (Problems 3, 4), p. 4 (Problems 5, 6). Chapter 18: (1.8) p. 3, (1.22) and (1.24) p. 5, (1.28), (1.29), (1.31), (1.33) p. 6. Chapter 19: (1.1) p. 1, (2.3) p. 3. Lectures 20 and 21: (1.5) p. 2, (1.10) and (2.2) p. 3, (2.5) and (2.9) p. 4, (2.15), (2.18), (2.19) p. 6, (3.5) p. 7. All correct.
- Letters with two meanings: m (mass in 2 to 4, quantum number in 5), φ (phase in 1, angle in 5 and 6), λ (Problems 1 and 4) and δ (phase shift; delta function in 4) are each announced in the text where the meaning changes, and their symbols.json meanings name both uses.
- Info 1: the 4(c) time-delay Plot uses the default 400 samples over [0.01, 10] (step 0.025); the first peak has a half-width of about 0.07, so the drawn peak may top out near 13.7 instead of 14.1. Optional: `samples={2000}`.
- Info 2: the symbols.json meaning of `m` names only Problem 5 for the quantum number, but the 6(c) check also says "the state with m = 0". Change "In Problem 5" to "In Problems 5 and 6".
- Info 3: in 4(c), one sentence could say that δ rises through −π/2 (the criterion of Chapter 19, p. 5) at ka ≈ 2.840, a little below the delay peak, so readers who use the notes' criterion see why the box asks for the delay peak.
- Info 4: p6-lx2 calcs entry only partly independent (see above); optionally add an entry that applies the Cartesian operator twice to θ.
- Info 5: p3-above vars include poles of cot δ (see above).
- No em dashes; no `## Summary`; status draft.

COUNTS: errors=1 warnings=2 info=5

## Resolution (2026-11-22, by the page author)

- Error 1 (Problem 2(a), the z₀ = π/2 exception): the sentence now says the second term of the denominator is about −ka/2, the denominator about ka/2, and tan δ ≃ 2/ka, so δ tends to π/2. New calcs entry `p2-pole` (kind: limit, z₀ = π/2) checks that u·f(u; z₀) tends to 2.
- Warning 2 (Problem 2(d) boxes): the tolerances of `p2-gap2`, `p2-gap5` and `p2-gap9` are now 0.5%, so the estimate z₀²/(2u) alone (0.625, 1.35) is rejected; hint 3 no longer gives the formula.
- Warning 3 (Problem 1(c) box): the tolerance of `p1-exc` is now 5%, so both full-phase values (0.0805, 0.0851) and the rounded-Δ value 0.0855 are accepted; the descriptions of calcs entries `p1-exc-lo-box` and `p1-exc-hi-box` follow.
- Info items need no change (the time-delay plot, the second meaning of m, the 4(c) box, the partly independent 6(c) check and the poles in the p3-above ranges were all found harmless).

Status set to `reviewed`.
