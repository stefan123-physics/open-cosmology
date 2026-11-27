---
page: content/year-4/8.08/8-08-problem-set-5.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb5/ (read: pdftotext and the PDF rendered at 110 dpi)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/8fc1b022e964e44ab41b87b5f8cd45cf_grand_canonical.pdf (read: pp. 31-34 rendered)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/71302466172a4c0f5f069a31b3c8a6d4_random_variable.pdf (read: pp. 38-40 rendered)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/602f7128f333bcba16bc87697f785eb7_thermal_fluct.pdf (read: p. 42 rendered)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the CODATA values in the calcs file were checked only for their effect on the tolerances)
verdict: pass-with-notes
---

# Review: Problem Set 5: Electrons and holes, two dice, a pendulum in thermal equilibrium and a biased random walk

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written into this file before the full page was opened; numbers from `review/ps5calc/blind.py`)
- p1a: equilibrium mu_e + mu_h = 0 (the energy Delta goes to phonons/photons, which have no chemical potential); spinless classical gas n = lambda^-3 exp(beta(mu - Delta/2)); n_e n_h = lambda^-6 e^{-beta Delta}; n_i = (m kB T / 2 pi hbar^2)^{3/2} exp(-Delta/(2 kB T)).
- p1b: n_e = n_d/2 + sqrt(n_d^2/4 + n_i^2), n_h = -n_d/2 + sqrt(n_d^2/4 + n_i^2) = n_i^2/n_e.
- p1c: lambda = 4.305e-9 m; n_i = 7.28e15 m^-3; n_h = 5.29e10 m^-3. (A spin factor 2 per species would give n_i = 1.46e16.)
- p2a: not independent (k+ = 2 forces k- = 0); P(k- = 0 | k+ = 4) = 1/3 = 0.333.
- p2b: independent (exact enumeration of the 36 rolls: P(m+, m-) = 1/36 = (1/6)(1/6) for every pair).
- p2c: correlation 0 (uncorrelated but dependent).
- p3a: U = Mg x^2/2L; Delta x = sqrt(kB T L/(M g)), xbar = 0.
- p3b: 0.2055 nm.
- p3c: hbar omega/kB T = 2.52e-13.
- p4a: <X> = n(2p - 1) l.
- p4b: 4 n p(1 - p) l^2.
- p4c: mean 220, sigma 9.950, z = 2.0603, P = 0.01968 (exact binomial 0.019876; without the half step 0.0222).
- p4d: z = 4.045, P = 2.61e-5 (exact 2.72e-5).

### Comparison (one line per answer id)
- p1-ni: page (mkBT/2 pi hbar^2)^{3/2} e^{-D/2kBT}, identical to mine. Agree.
- p1-ne: identical to mine. Agree.
- p1-nh: identical to mine. Agree.
- p1-num-ni: page 7.28e15, mine 7.2765e15. Agree.
- p1-num-nh: page 5.29e10, mine 5.2948e10. Agree.
- p2-indep-k: page choice 1 "not independent". Agree (enumeration: not independent).
- p2-cond: page 0.333, mine 1/3. Agree.
- p2-indep-m: page choice 3 "independent". Agree (enumeration: independent).
- p2-corr: page choice 1 "zero". Agree (enumeration: exactly 0).
- p3-dx: page sqrt(kB*T*L/(M*g)), identical to mine. Agree.
- p3-num: page 0.206, mine 0.2055. Agree.
- p3-quantum: page 2.52e-13, mine 2.522e-13. Agree.
- p4-mean: page n*l*(2*p - 1), identical to mine. Agree.
- p4-var: page 4*n*l^2*p*(1 - p), identical to mine. Agree.
- p4-left: page 0.0197, mine 0.01968. Agree.
- p4-longer: page choice 2 "about 3 x 10^-5", mine 2.61e-5. Agree.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(b) statement | Gives only M = 1 g, L = 10 cm, T = 300 K | "with $g = 9.81$ m/s² (our value) and $k_B = 1.381 \times 10^{-23}$ J/K": g is marked, the k_B value is not, although the intro says the values of g and k_B are marked where they stand | Write "with $g = 9.81$ m/s² and $k_B = 1.381 \times 10^{-23}$ J/K (our values)" |
| 2 | info | Problem 1(a) Check, last bracket | Wen's Chapter VIII law of mass action, as the lesson semiconductors-and-diodes reports, leaves the spin factors out and the 2 reappears in its result | "Chapter VIII of the notes includes this factor" | Optional: "the result of Chapter VIII includes this factor 2". Not wrong as it stands |
| 3 | info | Problem 4(c) statement | (our own problem) | "as the lesson does" for the half step, without naming the lesson | Optional: link the lesson random-variables-binomial-distribution, whose worked example uses 259.5 (checked) |
| 4 | info | Solution Formulas cited `cite="mit"` with "(our own solution)" / "(our own problem and solution)" | Not on MIT's sheet | Labelled as ours | The convention accepted in the 8.07 Sets 2, 6, 8 and 8.08 Sets 1-3 reviews. Every statement formula cited `mit` (e + h <-> Delta, k+ and k-, m+ and m-, Delta x = sqrt<(x - xbar)^2>) is on MIT's sheet, p. 1 (checked on the rendered PDF). No change |
| 5 | info | Problem 1(a) Check | (no MIT solution) | "each pair costs Delta, but it makes two particles, each of which gains its own share of the entropy" | Right in spirit; the cleaner reason is the square root of n_e n_h, which is proportional to e^{-Delta/kBT}. Optional |

## Arithmetic and answer checks
- All numbers recomputed independently (`review/ps5calc/blind.py`): kBT = 4.143e-21 J; mkBT/2 pi hbar^2 = 5.397e16 m^-2, its 3/2 power 1.254e25; Delta/2kBT = 21.267, e^-21.27 = 5.80e-10; n_i = 7.28e15; cube side (1/n_i)^(1/3) = 5.16 um ("about 5"); n_d/n_i = 1.37e5; n_h = 5.29e10; n_i/n_h = 1.38e5; 5e28/1e21 = 5e7. Dice: P(k+=2) = 1/36, P(k-=1) = 5/36, product 5/1296, P(k-=0) = 1/6; m+ and m- independent by full enumeration of the joint table (all 36 cells 1/36), so m+ = (n1+n2) mod 6 is independent of m- = n1 mod 6. Pendulum: <x^2> = 4.22e-20 m^2, Delta x = 0.2055 nm, omega = 9.905 s^-1, hbar omega = 1.045e-33 J, ratio 2.52e-13, inverse 3.97e12 ("some 4e12"). Walk: 220, 99.0, 9.950, z = 2.060, 0.01968, 1/0.0197 = 50.8 ("one in 51"), 40 l; exact binomial cdf(199; 400, 0.55) = 0.019876 (SciPy), so the `kind: fact` value 0.0199 is right; the Gaussian is 0.97% below exact ("within 1%"); without the half step z = 2.010 and the tail is 0.02221, 11.7% above exact ("12%"); n = 1600: 880, 19.90, 80.5, z = 4.045, 2.61e-5.
- Tolerances: p4-left 2% accepts 0.0193 to 0.0201 (the Gaussian answer and the exact binomial both in; the no-half-step 0.0222 out). p1-num boxes 3%: CODATA values (7.23e15, 5.22e10) inside, the spin-doubled n_i (1.46e16) out. p3-num 2% and p2-cond 1% fine.
- Formula boxes: every `vars` range keeps the answer and each mistake finite and distinct (p4-mean with p in [0.6, 0.9] keeps n l p and n l(1 - 2p) apart; p4-var with p in [0.1, 0.4] keeps n l^2 apart). Each mistake hint is true of its formula (checked: sqrt(2kTL/Mg) is "<U> = kT"; sqrt(kTL/2Mg) is U = Mg x^2/L; kT/(MgL) is dimensionless; nd + ni gives the product (nd + ni)ni; ni^2/nd is the strong-doping limit and exceeds the exact n_h; the prefactor 2 is the spin count; the lambda^3 form is a volume).
- Choice boxes: right answers at positions 1, 3, 1, 2; none is clearly the longest or the shortest.
- Hints: none gives a box's result. The "How to answer" typing example `exp(-a*T)/(1 + y^2)` is not an answer.
- In the worktree: `pytest tests/calc -k problem-set-5` passes; `npm run content:check` gives 0 errors, and the only warning for this page is the missing review file.

## Coverage and order
- MIT Problems 1 (a, b), 2 (a, b), 3 (a, b) are all present, in MIT's order, in our own wording, with the same physics. Additions (1c, the 2(a) number box, 2c, 3c) are marked "(Our addition)" where they stand.
- MIT Problem 4 is only a pointer to a numbered problem in Huang's book; it became our own problem (a biased random walk, Chapter V), marked in its title, in the intro and in its first paragraph. It does not duplicate a problem of the other 8.08 sets (checked the written Sets 1-3 and the stripped Sets 4 and 6).
- Problem 1's spinless-gas assumption is marked "(our assumption ...)" in the statement and discussed in the Check; mu_e + mu_h = 0 follows from Wen's sum nu_i mu_i = 0, with the released energy carrying no chemical potential: correct.
- `lecture: 6`, `covers: [4, 5, 6]` fit the date (March 2, 2005) and the topics (Chapter IV reactions, Chapter V random variables, Chapter VI fluctuations); the three prerequisite lessons exist, with lectures 4, 5 and 6.
- Citations to Wen checked on the rendered pages: Chapter IV p. 34 (under "4 Applications", item (c) "Chemical reactions", which starts on p. 33): the boxed sum nu_i mu_i = 0, mu_H = kBT ln(n_H lambda_H^3) + eps_H and the law of mass action are all on p. 34. Chapter V p. 38: the boxed P12 = P1 P2 test and the correlation <s1 s2> - <s1><s2> at the bottom. p. 39, point 3: <k> = pn, <k^2> = n^2p^2 + np(1 - p). p. 40, point 4: the Gaussian for the mean X with variance <(x - <x>)^2>/n, as the page says ("written there for the mean of the variables; applied to their sum k by us"). Chapter VI p. 42: P proportional to e^{-beta A} and <(N - Nbar)^2> = kBT/(d^2A/dN^2). All correct.

## Licensing
- MIT sheet: no "rights reserved", "courtesy" or third-party notice (checked on the rendered PDF). No MIT figure used; no text copied (statements rewritten). Huang's book not used or reconstructed. No OpenStax or LibreTexts material. CODATA cited only for values.

## Notes
- No em dashes; no `## Summary` with answers.
- Symbols: page-scoped meanings exist for every symbol used (beta, Delta, lambda, mu, mu_e, mu_h, omega, z, k, T, x, n, e, h, m, g, P, A, L, p, M, U, k_B, X, n_1, n_2, n_i, n_e, n_h, n_d, k_+, k_-, m_+, m_-, leftrightarrow); content:check reports no symbol problem.
- The claim that a zero correlation proves independence for two 0/1 variables is in the lesson random-variables-binomial-distribution (checked) and is true.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: the Problem 3(b) statement now marks both values as ours ("with g = 9.81 m/s² and k_B = 1.381 × 10⁻²³ J/K (our values)").
- Info items left as they are.
- `status: reviewed`.
