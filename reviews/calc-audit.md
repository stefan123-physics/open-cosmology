# Audit of the calculation tests — 2026-11-15

Scope: the harness `tests/calc/test_calculations.py` and all 55 files in `calcs/` (466 entries after this audit:
400 value, 39 identity, 15 limit, 6 units, 6 fact). Method: an audit script compared every explicit tolerance with
the tolerance the printed digits justify, counted every `shown` string on its page, listed every identity's samples
and every `slip`/`later-data` entry with its page context, and grouped every H₀, T₀, age and Ω input across files.
An independent cross-check (`npm run calc:crosscheck`) recomputed 35 values from 22 pages and 13 identities with
NumPy/SciPy, without the harness.

**Lesson text and page values were not changed.** Possible page issues are listed below for the owner to decide.

Result: `npm run calc:test` — **501 passed in 3.4 s** (was 459 in 3.9 s).

---

## 1. Real errors on pages

None found. Every printed number recomputes to its printed digits, both in the harness and in the independent
cross-check. Four points for the owner to review (none is wrong as written; each could be clearer):

| Page | Where | Finding | Suggestion |
|---|---|---|---|
| `temperature-and-decoupling` | formula "With g = 10¾" | The lecture prints kT = 0.860 MeV/√t; the formula gives **0.8592** (0.859). The page's plot caption says the lecture rounds to 0.860, and a calcs entry checks 0.859. The T = **9.98** × 10⁹ K/√t beside it inherits the rounding: exactly it is **9.97** × 10⁹ K. | Add a short bracket at the formula: "[exactly 0.859 MeV and 9.97 × 10⁹ K; the lecture rounds]". |
| `spherical-collapse` | callout "Beyond the simple model" | "roughly 330 for Ω_m ≈ 0.3": the cited Bryan & Norman fit gives **337** (relative to the mean density). | "roughly 340" (or "about 335"). |
| `vacuum-energy-puzzle` | worked example "Checking the 120 orders of magnitude" | Ω_vac = 0.69 and H₀ = 67.7 km/s/Mpc are Planck-era values (the calcs entries mark them `later-data`), but the page does not say where they come from. | Add "(Planck values)" — or the calcs entries could be relabelled `page-own` if they are meant as round example values. |
| `homogeneous-expansion` | worked example "Recession velocity" | "a bit over 2% of the speed of light": the value is 2.33%. Correct; the test was too loose (see §2). | — |

---

## 2. Weak tests (found and fixed)

### Harness

| Problem | Fix |
|---|---|
| `integrate()` used a fixed 4,000-step Simpson rule and returned a silently wrong value near an integrable singularity at a limit (the cycloid integral was 5% wrong at θ = 3.14) and never noticed NaN or ∞. | `scipy.integrate.quad` (adaptive, never evaluates the limits). Raises `NumericError` on NaN/∞ or a domain error (a complex result), on SciPy's non-convergence warnings, or on an error estimate above max(10⁻⁹, 10⁻⁷ × |value|). Same YAML syntax. |
| `deriv()` used a fixed step h = 10⁻⁴·max(1, \|x\|): inaccurate for small x near a singular point, and unreliable for oscillating functions at large x. | Central differences with step halving and Richardson extrapolation, from 0.1·scale down to the round-off limit (10⁻⁸·scale for f′, 10⁻⁵·scale for f″); the answer is taken where successive estimates agree, steps that cross a singularity are skipped, and it raises if they never agree. (A first version picked a run of identical round-off zeros as "converged"; the round-off limit fixes that, and the regression tests cover it.) |
| `solve()` bisected and would return a pole as a root (tan across π/2). | `scipy.optimize.brentq`, then a check that f(root) is small compared with f at the ends; a pole raises. |
| Quiz check kept an unused `target` and a repeated final assert. | Removed; the rule "only the marked answer matches" is unchanged and now has its own tests. |
| `shown` strings only had to appear somewhere on the page, so a text that occurs twice could change in one place unnoticed. | New rule: every `shown` string must occur **exactly once** on its page. |
| Inputs could use a value of H₀ or T_CMB that no page quotes. | New test: every H₀ input (km/s/Mpc, or 100 h₀) and every T_CMB input must be a registered value in `calcs/values.yaml`. |

`tests/calc/test_harness.py` (27 tests): the cycloid integral at θ = 3.0, 3.1, 3.14 (α = 1) equals θ − sin θ
within 10⁻⁶; ∫₀¹ x^(−1/2) = 2; ∫₀^∞ e^(−x²) = √π/2; ∫₀¹ 1/x, a NaN integrand and √(x − ½) on [0, 1] raise;
derivatives of sin x at 0 and 10⁶, x^(2/3) at 10⁻⁶ and 10⁸, 1/x at 10⁻³, eˣ at 30 (second derivative), x³, cos x;
1/x at 0 raises; |x| at 0 raises or returns the symmetric 0; roots at tiny and huge scales; tan's pole raises; no
sign change raises; the spherical-collapse cycloid parameter near turnaround and collapse; three quiz-rule cases.

### Tolerances (73 explicit; all checked against the page wording)

| Entry | Was | Now | Reason |
|---|---|---|---|
| `doppler-effect:siren-semitones` | ±0.15 | printed digits (±0.05) | 1.45 rounds to 1.5 |
| `horizon-problem:quiz-opposite-sides` | ±1 | printed digits (±0.5) | 46.1 |
| `horizon-problem:plot-pure-matter-time` | ±2,000 yr | printed digits (±500 yr) | 265,130 yr |
| `radiation-dominated-universe:water-ratio-1s` | ±10,000 | printed digits (±5,000) | 447,000 |
| `homogeneous-expansion:recession-fraction-of-c` | 0.025 ± 0.005 (2–3%) | 0.0225 ± 0.0025 (2.0–2.5%) | "a bit over 2%" |

Kept, because the page's wording justifies them (each `where` says why): `radiation-dominated-universe:horizon-1s-moon`
(1.56, "about one and a half"), `temperature-and-decoupling:quiz-decoupling` (Guth's "about 380,000" against the
estimate's 372,600), `temperature-and-decoupling:kT-1s-lecture` (the lecture's rounding, see §1),
`robertson-walker-closed:radius-vs-horizon` (7.07, "several times"), `supernova-evidence:vacuum-hdl` (rounded factor),
`spherical-collapse:bryan-norman-mean` ("roughly", see §1), the four `dark-matter-freeze-out:timeline-*` (±0.5 in
log₁₀: "about 10⁻¹¹ s" is an order of magnitude), and the numerical tolerances (10⁻⁴…10⁻⁹) of identities and limits.
The rest are tighter than the printed digits. No percentage tolerances exist.

Many values sit close to the edge of their rounding (e.g. 2600.50 printed as 2601). That is correct rounding, not a
weak test; it does mean a change in a shared constant can flip a last digit, which the tests would then report.

### `shown` strings

Eight strings occurred twice on their page (the same value in a quiz explanation and a flashcard, or in a formula and
the summary): `anthropic-multiverse:vacua-count`, `grand-unified-theories:standard-model-parameters`,
`horizon-problem:guth-ratio`, `mass-energy-and-radiation:hydrogen-fraction`, `matter-radiation-equality:z-eq`,
`neutrinos-and-particle-counting:t-nu`, `spherical-collapse:delta-c-from-delta-ta`,
`spherical-collapse:virial-overdensity`. Each now quotes every place separately with enough context to be unique,
so both places are checked. Short strings that occur once (e.g. `$s = 2.67$`) already point to one place and were
kept.

### Samples

Nineteen identities were extended into the hard regions:
- the cycloid integral up to θ = 3.14 (singular endpoint), the cycloid solution near θ = 0, π and 2π;
- metric integrals with r = 0.999/√k (singular endpoint) and r → 0; the χ substitution at χ = 0.01 and 5;
- the sinh and cycloid age formulas near θ = 0 and π/2, and at θ = 6 and 8;
- R = cH⁻¹/√(Ω − 1) at Ω = 1.0001 and 10; matter and radiation growth modes from t = 10⁻³ to 10³;
- a ∝ t^(2/3) from t = 10⁻⁴ to 10⁴; exponential expansion at χt = 30; a great circle passing near the pole;
  the u-metric at ψ = 0.01 and 1.55; the orbit equation at a 1.45 rad launch; the Gaussian tail at σ = 30.

The two one-sample identities (`spherical-collapse:x-collapse`, `virial-is-18-pi-squared`) compare pure numbers
with no variable, so one sample is complete. One new check needed care: ½(dã/dt̃)² − α/ã at θ = 0.05 subtracts two
terms near 800 to get −½, which magnifies the derivative's relative error; its samples start at θ = 0.2.

### Consistency across pages

| Quantity | Values used as inputs | Verdict |
|---|---|---|
| H₀ (km/s/Mpc) | 67.3 (17 uses), 70 (19), 68 (9), 67.7 (8), 67 (11, = h₀ 0.67), 67.4 (2), 100 (h scaling), 500 (Hubble 1929) | All are registered values with a role; each page states its value. `cosmological-constant` and `open-closed-flat` use 67 because their pages state h₀ = 0.67. |
| h₀ | 0.67, 0.674, 0.7, 0.72 (page text) | **Newly registered** (`calcs/values.yaml`): the registry only recognised H₀ written with "km/s/Mpc". |
| T_CMB | 2.725 (17), 2.7255 (9), 2.7 (4) | Registered; 2.7 is Guth's rounded value for quick estimates, 2.7255 the later Fixsen value. |
| Age of the universe | 13.8 Gyr (13) | One value. |
| Ω | Ω_m 0.24/0.2 (High-Z 1998 and open comparison), 0.3/0.30/0.31/0.315, Ω_vac 0.69/0.7/0.76 | Each is the value its page states, with the role in the value registry. |
| r_s of the Sun | — | No calculation uses it (the black-hole page works in units of r_s and its own mass). |

### `slip` and `later-data` entries (19)

| Entries | Explained on the page? |
|---|---|
| `grand-unified-theories:proton-lifetime-limit`; `higgs-field:higgs-mass`, `katrin-limit`, `cosmological-mass-sum`, `minimum-mass-sum` | Yes — "Later developments" callouts. |
| `matter-radiation-equality:we-*-2018` (5) | Yes — worked example "Equality with later measurements (Planck 2018, after this lecture)". |
| `temperature-and-decoupling:T-decoupling-planck`, `t-decoupling-planck` | Yes — the worked example names Planck 2018. |
| `dark-matter-freeze-out:notes-time-2ev`, `notes-length-3ev` (slip) | Yes — the bracket "[The notes print the normalising masses as 2 keV and 3 keV …]". |
| `dark-matter-freeze-out:equality-temperature`, `equality-kt` | Yes — the bracket "[With today's parameters equality is at 1 + z ≈ 3400 …]". |
| `spherical-collapse:bryan-norman-mean` | Yes — callout "Beyond the simple model" cites Bryan & Norman. |
| `vacuum-energy-puzzle:rho-c`, `u-vac` | **No** — see §1. |

### Missing kinds (formula checks added)

Fourteen checks on ten pages that only had value checks:

| Page | New check |
|---|---|
| `black-body-radiation` | identity: Planck's integral ∫₀^∞ x³/(eˣ − 1) = π⁴/15 gives the π²/30 of u (0/0 at x = 0); value: ζ(3) = 1.202 from ½∫x²/(eˣ − 1); units: entropy density is J/(K·m³) |
| `spacetime-interval` | identity: a Lorentz transformation keeps x² − (ct)², up to β = 0.999 |
| `doppler-effect` | limit: relativistic z/β → 1 at low speed; identity: γ(1 + β) = √((1 + β)/(1 − β)) |
| `age-with-vacuum-energy` | identity: the age integral equals the closed form for Ω_vac from 0.001 to 0.999; limit: → 2/3 as Ω_vac → 0 |
| `horizon-distance` | identity: t₀^(2/3)∫₀^t₀ t^(−2/3) dt = 3t₀ (singular at 0), t₀ from 10⁻⁶ to 10⁴ |
| `age-of-the-universe` | identity: a = b t^(2/3) gives H = 2/(3t) |
| `matter-radiation-equality` | identity: ρ ∝ a⁻⁴ satisfies ρ̇ = −3(ȧ/a)(ρ + p/c²) with p = ρc²/3 for any a(t) |
| `temperature-and-decoupling` | units: (45ħ³c⁵/16π³gG)^(1/4)/√t is an energy |
| `cmb-spectrum` | value: the Wien factor 2.82 as the root of x = 3(1 − e⁻ˣ) (it was only an input before) |
| `expanding-sphere` | identity: E = ½ȧ² − (4π/3)Gρᵢ/a is constant along the closed solution |

---

## 3. Suggestions

**Formula checks for the 27 pages that still have only value (or fact) checks**, where a formula can be tested
directly:
- `falling-into-a-black-hole`: the proper time to the centre as an integral of the radial geodesic, and its Newtonian limit far outside r_s.
- `geodesic-equation`: a straight line in polar coordinates satisfies the page's geodesic equations (identity with `deriv`).
- `cosmological-redshift`: 1 + z = a(t₀)/a(t_e) from the light-travel integral for a ∝ t^(2/3).
- `flatness-problem`, `inflation-solutions`: |Ω − 1| ∝ t^(2/3) in the matter era and ∝ e^(−2χt) during inflation, from the Friedmann equation.
- `eternal-inflation`: the volume growth e^(3χt) × ½ per half-life as an identity.
- `horizon-problem`: the ratio of horizon distances from the integrals, not only their quoted values.
- `newtons-static-universe`, `magnetic-monopoles`, `why-cold-dark-matter`, `dark-matter-freeze-out`: units checks of the page's main formulas (Jeans length, monopole mass, radiation-era t(T)).
- `power-spectrum`: σ ∝ M^(−(n+3)/6) from the integral with P = Akⁿ (identity).
- `age-closed-universe`, `robertson-walker-spacetime`, `homogeneous-expansion`: identities with the cycloid/metric already tested elsewhere.

**Harness:**
- A `deriv`-based identity that subtracts two large terms (as in the expanding-sphere case) loses accuracy; when writing new ones, prefer samples where the terms are of order one, or rewrite the expression.
- `units` checks could use the planned symbol units (`docs/CALC_TESTS_PLAN.md` §7, item 5) to cover every formula automatically.
- Run `npm run calc:crosscheck` after changes to constants or to many calcs files; extend its list when new pages get calculations.

---

## Resolution (2026-11-15, owner approved the page changes)

| Page | Change | Recorded in |
|---|---|---|
| `temperature-and-decoupling` | Bracket after the formula "With g = 10¾": exactly 0.859 MeV and 9.97 × 10⁹ K, which the lecture rounds to 0.860 MeV and 9.98 × 10⁹ K. New calcs entries `kT-1s-exact-note`, `T-1s-exact-note`. | `reviews/8.286/temperature-and-decoupling.md` |
| `spherical-collapse` | "roughly 330" → "roughly 340"; `bryan-norman-mean` now uses the printed digits' tolerance. | `reviews/8.902/spherical-collapse.md` |
| `vacuum-energy-puzzle` | The inputs are now labelled "Planck 2018 values, rounded"; the value registry roles of H₀ = 67.7 and Ω_vac = 0.69 say the same. | `reviews/8.286/vacuum-energy-puzzle.md` |
| `homogeneous-expansion` | No page change needed (the test was tightened in the audit). | — |

503 tests pass; `npm run calc:crosscheck` shows no differences apart from the lecture's documented rounding.
