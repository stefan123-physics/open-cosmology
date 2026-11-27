---
page: content/year-3/8.06/8-06-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-8/ (read: ps8.pdf / pdftotext, printed pp. 1-5)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-6-adiabatic-approximation/ (read, PDF already downloaded; printed pp. 12-14 checked)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-7-scattering/ (read, PDF already downloaded; printed pp. 136-149 checked)
  - https://physics.nist.gov/PhysRefData/XrayMassCoef/tab1.html (read, saved copy: gold 1.932E+01 g/cm3)
  - https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=Au (not re-read; 196.97 g/mol is the standard value 196.966569 rounded)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not re-read; values are the exact SI 2019 e and N_A and CODATA 2018 eps0, rounded)
verdict: pass-with-notes
---

# Review: Problem Set 8: Phase shifts, a spherical well, a shell of delta function and the Born approximation

Blind solve done first (section below, written before the full page was opened). Every final answer of the page agrees with mine. No Griffiths material was opened; the exact 1D delta reflection coefficient in 6(c) was derived independently and agrees.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | 5(d) solution, step "The rate", last sentence | MIT rounds e = 1.6e-19 C (for the beam current) | "With MIT's rounded e and a density of 19.3 g/cm³ the result is the same to three digits" | True only if the rounded e is used for the beam alone (3.7285, rounds to 3.73). Using e = 1.6e-19 C everywhere in SI (e²/4πε₀ with E = 8 MeV in joules) gives 3.7184, i.e. 3.72. Write: "With MIT's rounded e for the beam current and a density of 19.3 g/cm³ the result is still 3.73 (3.72 if the rounded e is also used in e²/4πε₀)." |
| 2 | warning | data/symbols.json, page-scoped meaning of `a`; also shared `\gamma_l` meaning | - | `a` = "The scattering length…"; but the "How to answer" paragraph writes "they call the range of the potential $a$", and the `\gamma_l` meaning (used in the 3(a) check) reads "R_l′(a)/(kR_l(a)) = β_l/ka", with a as the range | Add to the page-scoped meaning of `a`: "(The lessons use a for the range of the potential; on this page the range is b or R.)" |
| 3 | info | Problem 5(d) statement | "a detector which occupies a cone of angular extent dθ = dφ = 10⁻²" | "a detector that covers dθ = dφ = 10⁻² radians"; dΩ = sinθ dθ dφ | Fine (the reading dΩ = sinθ dθ dφ is MIT's evident intent); no change needed. |
| 4 | info | Problem 4(c) first box | - | "to four digits", tolerance 0.5% (accepts 3.065 to 3.095) | The tolerance accepts the estimate π(1 − 1/λ) = 3.0788 and the tan(x+δ₀) = ∞ root 3.0801 as well as the exact 3.0798; that is reasonable, but "to four digits" promises more than the box checks. Optionally say "to three or four digits". |
| 5 | info | 4(c) δ₀ graph caption | - | "The phase shift falls along the hard-sphere line −kR" | For λ = 10 the curve leaves the line noticeably before the first rise (δ₀ min is −2.17 against −kR ≈ −2.86 at the rise). Optionally "falls roughly along". |

## Arithmetic and answer checks
- All 107 calcs entries pass (`pytest tests/calc -k 8-06-problem-set-8`: 107 passed).
- Independent numbers (scipy): first root of tan x = x: 4.493409 (box 4.493, 0.5%; rejects 3π/2 = 4.712, 4.9% off). Root of x + 50 sin x cos x = 0 below π: 3.079839 (box 3.080, 0.5%; rejects π, 2.0% off); root of tan x = −x/50: 3.080069 (page 3.0801 ✓); estimate π(1 − 1/50) = 3.0788 (page 3.079 ✓); strip width (π/50)² = 0.0039 ✓.
- 3(c) check: γb = 4.8 gives qb = 2.5753, κb = 4.0507 and qb = 4.7867, κb = 0.3566 ✓ (page 2.575/4.051, 4.787/0.357).
- 3(e) check: γb = 1.6 gives κb = 0.04568 ✓; exact σ₀ at k = κ is 3149.7 b² (page 3150 ✓); formula 4π/(2κ²) = 3011.6 b² (page 3012 ✓); 4.6% apart ✓.
- 3(d): 1 − 4/π = −0.27324 ✓. Plot curves: values and slopes at r = b continuous; all four inside the y range at r = 3b ✓.
- 4(c) graphs: δ₀ expression is continuous (largest step 7e-4 over 2e5 points), satisfies tan δ₀ of part (a) to 5e-12, range −2.17 to 0 (inside [−3.4, 0.8]); σ₀/4πR² peaks at 0.83 (inside [0, 1.05]) ✓.
- 5(d): n = 5.9069e28 m⁻³ ✓; Ṅ = 3.1208e9 s⁻¹ ✓; dσ/dΩ(π/2) = 2.0220 b/sr ✓ (e²/4πε₀ = 1.43996 MeV fm ✓); rate 3.7273 s⁻¹ → 3.73 ✓; fraction 1.19e-9 ✓; Q₁Q₂/E = 28.4 fm ✓; mass ratio 49.2 ✓; MIT's 3.125e9 ✓. See finding 1 for the "same to three digits" claim.
- 2(b): |f|² equals the boxed form and the k form to 1e-16 at random points ✓.
- 6(c): exact r = −κ₀/(κ₀ + ik) re-derived; R = κ₀²/(κ₀² + k²) ✓; R_B/R = 1 + R_B ✓; threshold E = 10 mα²/2ħ² ✓; r = r_B/(1 + κ₀/ik) ✓.
- Every `<Answer>` expr/value equals its solution's result. `vars` ranges keep every answer finite (3(a): qb ≤ 1.4 < π/2, γb ≤ 1.08 < π/2; 4(a): denominator positive). Each listed mistake differs from the answer over its ranges, and each hint is true of its formula (checked one by one, including p2-dsdo where d1 ∈ [2.6, 3] makes cos(δ₀ − δ₁) far from 1, and p4-tan's attractive-shell mistake = λ → −λ). Info: the p3-tan mistake with "q − k tan(kb) tan(qb)" in the denominator has a pole inside the ranges (k = 0.5, b = 1, q = 1.4 gives −0.18); harmless for recognising it, no change needed.
- Choice boxes: right answers at positions 2, 3, 0, 1, 2, 1, 3; none is the strictly longest or shortest option; no distractor is also true (6(a): sin(k|x|)/2k and −e^(−ik|x|)/2ik are Green's functions but not outgoing, as the question demands).
- Every solution ends with a "Check the result" step (units, limits or numbers).

## Coverage and order
- All six MIT problems, in MIT's order, with MIT's points (10, 15, 20, 15, 15, 15); part points add up. Parts follow MIT's order; the split of Problem 1 into (a)/(b) and the added boxes are declared in the introduction.
- `covers: [16, 17, 19, 20, 21, 22]` fits: Problem 1 is the adiabatic theorem and geometric phase (site lectures 16, 17), Problems 2-6 scattering (19-22). `lecture: 22` is the Born approximation lecture. Lecture 18 (Born-Oppenheimer) is rightly left out.
- Sign convention: δ_l defined by sin(kr − lπ/2 + δ_l) in the introduction, positive = attraction; used consistently in 2(a), 3(a) (positive for the well), 3(b) (a < 0 for a shallow well), 4(a)/(b) (negative δ₀, positive a for the repulsive shell) and in every tan δ₀ box.
- Citations: MIT sheet printed pages correct for every `at=` (Problem 1 p. 1; 2, 3, 3(a)-(c) p. 2; 3(d), 3(e), comment, 4, 5 p. 3; 5(b), 5(c), 5(d), 6 p. 4; 6(a) pp. 4-5; 6(b), 6(c) p. 5). Notes: ch. 6 eqs. (5.1)-(5.4) p. 12, (5.14) p. 13, (5.18) p. 14; ch. 7 (7.1.13) p. 136, (7.2.8) p. 137, (7.2.18) and (7.2.20) p. 139, optical theorem below (7.2.21) p. 140, (7.2.27) p. 141, (7.3.5) p. 145, (7.3.29) p. 148, (7.3.35) and (7.3.37) p. 149: all verified with pdftotext.

## Licensing
- The sheet and the two chapters carry no "rights reserved" or "courtesy" notices (grep). No figures reused; all graphs generated from formulas.
- No Griffiths content: Problems 5 and 6 are solved from the lesson and from scratch; the exact delta reflection coefficient is derived on the page. No OpenStax or LibreTexts. Wording is the page's own.
- NIST and CODATA values cited by title, used as data only.

## Notes
- No em dashes; no `## Summary` with answers.
- Symbol meanings scoped to the page fit their uses, apart from finding 2.
- Lesson links (8.04 resonances, the six prerequisite lessons) point to existing slugs.

## Blind solve

### My answers (written before opening the full page)
- 1(a): Psi^A(T) = e^{i theta_n(T)} e^{i gamma_n^A(T)} |psi_n^A(T)>, theta_n = -(1/hbar) int E_n dt, gamma_n = i int <psi_n|d psi_n/dt> dt. With psi^A = e^{i alpha} psi^B: gamma^A - gamma^B = -alpha_n(T) (so gamma^B - gamma^A = +aT).
- 1(b): the same state, phase included: e^{-i alpha} from gamma^A cancels e^{+i alpha} in |psi^A(T)>.
- 2(a): s and p waves; tan d0 = G k/(k0 - k); d1 = 2 be k^3; d0 ~ k, d1 ~ k^3, as the rule says.
- 2(b): ds/dOmega = (1/k^2)[sin^2 d0 + 9 sin^2 d1 cos^2 th + 6 sin d0 sin d1 cos(d0 - d1) cos th].
- 2(c): sigma0 = 4 pi G^2/((k0-k)^2 + G^2 k^2); sigma1 = 12 pi sin^2(2 be k^3)/k^2.
- 2(d): sigma ~ 4 pi G^2/((k-k0)^2 + G^2 k0^2) (Breit-Wigner, p wave ~48 pi be^2 k^4 negligible); at k = k0: 4 pi/k0^2.
- 2(e): sigma = (4 pi/k^2)(sin^2 d0 + 3 sin^2 d1); Im f(0) = (sin^2 d0 + 3 sin^2 d1)/k; optical theorem holds.
- 3(a): tan d0 = (k tan(qb) - q tan(kb))/(q + k tan(qb) tan(kb)); d0 = -kb + arctan[(k/q) tan(qb)].
- 3(b): a = b - tan(g b)/g, a/b = 1 - tan(gb)/(gb); first zero gb = 4.4934; at gb = (n+1/2)pi, d0 -> pi/2 (mod pi), sigma0 -> 4 pi/k^2, the unitarity bound (reached, not broken).
- 3(c): threshold at gb = (n+1/2) pi; n+1 bound states including the threshold one (n strictly bound).
- 3(d): u = sin(g r) inside, u = C(r - a) outside; a/b(pi/4) = 1 - 4/pi = -0.2732.
- 3(e): sigma0 = 4 pi/(k^2 + 1/a^2), E_B = hbar^2/(2 m a^2), c = 2 pi hbar^2/m.
- 4(a): cot(x + d0) = cot x + L/x; tan d0 = -L sin^2 x/(x + L sin x cos x).
- 4(b): a = L R/(1 + L).
- 4(c): away from resonances d0 ~ -kR (hard sphere); resonance where x + L sin x cos x = 0; for L = 50, n = 1: x = 3.0798; quasi-bound states of the interior (k R ~ n pi).
- 5(a): f = -(2 m be/hbar^2)/(mu^2 + K^2); ds = (2 m be/hbar^2)^2/(mu^2+K^2)^2; sigma = 16 pi m^2 be^2/(hbar^2 mu^2 (hbar^2 mu^2 + 8 m E)).
- 5(b): ds = (Q1 Q2/(4E))^2 / sin^4(th/2).
- 5(c): d2N/dt dOmega = Ndot n T ds.
- 5(d): Ndot = 3.121e9 /s; n = 5.907e28 m^-3; ds/dOmega(pi/2) = 2.022 b; dOmega = 1e-4 sr; rate = 3.73 /s.
- 6(a): G(x) = e^{ik|x|}/(2ik) = -(i/2k) e^{ik|x|}.
- 6(b): r = (1/2ik) int e^{2ikx'} U dx'; R = |r|^2 = (m/hbar^2 k)^2 |int e^{2ikx'} V|^2.
- 6(c): R_B = m al^2/(2 hbar^2 E); exact R = 1/(1 + 2 hbar^2 E/(m al^2)); R_B/R = 1 + 1/eps < 1.1 for eps = E/(m al^2/2hbar^2) > 10.

Numbers checked (scipy): tan x = x root 4.493409; x + 25 sin 2x = 0 root 3.079839; rate 3.7273 /s (CODATA 2018 exact e, N_A; NIST 19.32, 196.97).

### Comparison (one line per answer id)
- p1-gamma: −aT = mine ✓
- p1-same: "the same state, phase included" = mine ✓
- p2-waves: s and p = mine ✓
- p2-tan0: Γk/(k0 − k) = mine ✓
- p2-d1: 2βk³ = mine ✓
- p2-dsdo: same expression = mine ✓ (numerical check 1e-16)
- p2-s0, p2-s1: = mine ✓
- p2-peak: 4π/k0² = mine ✓; p2-why: δ₀ = π/2 = mine ✓
- p2-imf: (sin²δ₀ + 3 sin²δ₁)/k = mine ✓
- p3-tan: = mine ✓
- p3-a: b − tan(γb)/γ = mine ✓; p3-zero 4.493 = mine ✓; p3-unit: δ₀ → π/2, σ₀ → 4π/k² = mine ✓
- p3-thresh: (n + 1/2)π = mine ✓; p3-count: n + 1 = mine ✓
- p3-ab: −0.273 = mine ✓
- p3-c: 2πħ²/m = mine ✓
- p4-tan: = mine ✓; p4-a: λR/(1 + λ) = mine ✓; p4-res: 3.080 = mine (3.0798) ✓; p4-sig: levels of a particle in a sphere = mine ✓
- p5-f, p5-sig: = mine ✓; p5-ruth: (Q1Q2/4E)²/sin⁴(θ/2) = mine ✓; p5-rate: ds n T Ndot = mine ✓
- p5-n 5.907, p5-inc 3.121, p5-ds 2.022, p5-count 3.73 = mine ✓
- p6-g: e^(ik|x|)/(2ik) = mine ✓
- p6-born: mα²/(2ħ²E) = mine ✓; p6-exact: mα²/(mα² + 2ħ²E) = mine ✓; p6-ten: 10 = mine ✓

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1 (5(d), rounded e): now "With MIT's rounded e for the beam current and a density of 19.3 g/cm³ the result is still 3.73 (3.71 if the rounded e is also used in e²/4πε₀)". The review's 3.72 was rechecked: the rate goes as e⁴ in the cross section, so (1.6/1.602177)⁴ = 0.9946 times 3.7285 gives 3.708, which rounds to 3.71. New calcs entry `p5-count-mit-both`.
- Warning 2 (symbol a): the page-scoped meaning now adds "(The lessons use a for the range of the potential; on this page the range is b or R.)".
- Info: 4(c) now asks "to three or four digits"; the δ₀ graph caption now says the phase shift "starts down along the hard-sphere line −kR (dashed) and stays near it". The other two info items need no change.
- `status: reviewed`.
