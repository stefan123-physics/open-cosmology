# Review: symbol meanings (`data/symbols.json`)

**Date:** 2026-11-15
**Reviewer:** independent check (stage 1b item 13 of `docs/SYMBOLS_PLAN.md`)
**Scope:** all 127 entries in `data/symbols.json`, against all 56 lesson pages.

## What was checked

- **Meaning resolution.** `npm run scan -- --notation --json` was used to find which pages use each key (TeX command, single letter or subscripted form). For every (symbol, page) pair, the meaning a reader sees was worked out with the same rule as `lib/symbols.ts` `meaningFor`: page scope, then course scope, then the general meaning. Each one was checked against the page's own TeX (formulas, inline maths, plot labels, quiz, flashcards; dumped with `pageTex` + `texNotation`) and, where unclear, the surrounding prose.
- **Facts** in every meaning text: constants, values, formulas and definitions.
- **Subscript prefix matching** in `components/SymbolPopups.tsx` (`s.startsWith(c.sub)`): every compound form against every other subscript with the same base on the same page. Sub-before-superscript order in KaTeX output was confirmed (`H_0^2` renders `0` before `2`).
- **Spoken names and pronunciation hints**, including what `lib/speech.ts` `texToSpeech` actually says for sample formulas from the site.
- `npm run content:check` passes (0 errors, 0 warnings). By design it does not warn about Latin letters or subscripted forms without a meaning.

## Verdict

**Mostly sound, with 7 errors to fix.** Nearly all scoped meanings match their pages. The errors are cases where a course-wide meaning or a compound meaning reaches a page that uses the letter for something else. Most of them come from a letter that only appears in a subscript, a superscript or a coordinate list (`k_\text{max}`, `z_0`, `r_0^{cc}`), or from a second use on the same page that the scoped text leaves out. One meaning text contradicts the formula it quotes (M_J).

"Shown in" says where the wrong text appears. **popup** = tap-to-explain inside a formula. **list** = "Symbols on this page" and the `/symbols` page index. Latin letters only get a popup in maths italic outside sub/superscripts, so some errors are visible only in the list.

## 1. Wrong meaning for how the page uses the symbol

| Severity | Symbol id | Page(s) | Meaning shown | Problem | Suggested fix |
|---|---|---|---|---|---|
| error | `k` | vacuum-energy-puzzle | "The curvature constant: k > 0 closed, k = 0 flat, k < 0 open (Guth's units: 1/notch²)" (course 8.286) | The page uses k only in `k_\text{max}`, the wavenumber cut-off: "for wavenumbers up to $k_\text{max}$. Take $k_\text{max} = 1/\ell_P$". The `k-max` popup is correct, but the list also shows k as curvature. | Add a page-scoped meaning for `vacuum-energy-puzzle`: "A wavenumber; k_max is the largest one included." (Or have `pageNotation` not count a base letter when it only appears as the base of a known compound.) |
| error | `z` | open-universe-geometry | "Redshift: 1 + z = a(observed)/a(emitted), how much the universe has stretched since the light left" (course) | The only z on the page is a Cartesian embedding coordinate: "compute its four-dimensional coordinates $(x_0, y_0, z_0, w_0)$ on the 3-sphere". | Add `open-universe-geometry` to the existing "A Cartesian coordinate, with x, y (and w on the 3-sphere)" meaning. |
| error | `a` | newtons-static-universe | "A number in the integral limits; in d a⃗ (with an arrow) a small piece of surface area." (page scope) | The page also uses the scale factor: "The [next page] turns this into an equation for $a(t)$." Tapping that a gives the integral-limit meaning. | Extend the text: "…; a(t) is the scale factor (next lesson)." |
| error | `rho-m` | magnetic-monopoles | "The mass density of matter (dark matter and baryons)." | Here ρ_m is a **magnetic charge density**: "a magnetic charge density would appear as $\nabla\cdot\vec B = 4\pi\rho_m$ in Gaussian units". | Meanings need scopes for compounds too: add a page-scoped meaning for `magnetic-monopoles`: "Magnetic charge density (Gaussian units)." |
| error | `z` | doppler-effect | "Redshift: 1 + z = a(observed)/a(emitted), how much the universe has stretched since the light left" (course) | This page defines z from the **Doppler shift** of a moving source: "$1 + z \equiv \frac{\lambda_O}{\lambda_S} = \frac{\Delta t_O}{\Delta t_S}$", with sound examples ($1 + z = 1 + v/u = 1 + 30/343$). Only one formula is cosmological. The text says expansion causes it, which is wrong for most of the page. | Page-scoped meaning: "Redshift, 1 + z = λ_observed/λ_emitted; here from the source's motion (Doppler), later from cosmic expansion, 1 + z = a(t_O)/a(t_S)." Better still, make the course meaning start from the general definition 1 + z = λ_observed/λ_emitted. |
| error | `c` | power-spectrum | "The speed of light, c ≈ 2.998 × 10⁸ m/s." (course) | c appears only as a superscript label: "$r_0^{cc} = 5 \times 20^{1/1.8} …$" (cluster–cluster correlation length). It shows in the list only, since Latin letters in superscripts get no popup. | Either have `texNotation` skip letters in superscripts that are word labels (as it does for subscripts), or add a page meaning: "In r₀^cc, a label (cluster–cluster), not the speed of light." |
| warning | `ell` | vacuum-energy-puzzle | "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one." (general) | The page's ℓ is ℓ_P, the **Planck length**: "$\ell_P = \sqrt{\hbar G/c^3} \approx 1.6 \times 10^{-33}$ cm". The general text tells the reader that "ℓ_p" (which looks the same) is a physical distance. The `ell-p` compound does not match (it is case-sensitive), so nothing explains ℓ_P. | Add a compound entry `\ell_P` "Planck length, √(ħG/c³) ≈ 1.6 × 10⁻³⁵ m", or a page-scoped ℓ meaning. |
| warning | `k` | vectors (8.01) | none (no meaning) | k appears in the unit vector k̂ (`\hat k`). No popup or list entry, so nothing is wrong, but the 8.01 pages leave i, j, k unexplained. | Optional: page meaning "In k̂: the unit vector along z." |
| info | `a`, `c`, `z` | acceleration-1d, kinematics-2d, newtons-laws, position-and-velocity-1d, universal-gravitation, vectors | none | 8.01 uses a = acceleration (plus the scale factor a(t) in the cosmology callouts: "$\frac{dx}{dt} = \frac{c}{a(t)}$", "$\frac{d^2 a}{dt^2} > 0$ (today)"), c = speed of light (callouts) or a scalar ("Multiplying $\vec A$ by a number $c$"), z = a Cartesian axis. None of these is explained. H already has page-scoped meanings on two of these pages. | Add `courses: ["8.01"]` meanings: a = "Acceleration; in the cosmology notes, a(t) is the scale factor". Add page meanings for c and z. |
| info | `H` | horizon-problem, matter-radiation-equality, supernova-evidence, vacuum-energy-puzzle | "The Hubble parameter H = ȧ/a…" | These pages use H only as H₀. The list shows both H and H₀. That is correct, just redundant. | None needed; same root cause as the `k` / `c` errors above. |
| info | `sigma-8` | power-spectrum | "…rms density fluctuation in spheres of radius 8 h⁻¹ Mpc… (about 0.8)" | Prefix matching gives this meaning to σ_{8,gal} and σ_{8,mass} in "$\sigma_{8,\text{gal}} = b\,\sigma_{8,\text{mass}}$". The "about 0.8" applies to mass, not galaxies. | Optional: "…; σ₈,gal for galaxies = b σ₈,mass." |
| info | `t0` | open-closed-flat | "Today: the present age of the universe (about 13.8 billion years)." | The page computes the age of a flat matter-only model: "$t_0 = \tfrac23 \times 14.5 = 9.7$". A reader may see this as a clash. | Optional: "The present time (the age of the universe; about 13.8 billion years in the standard model)." |

## 2. Factual errors in meaning text

| Severity | Symbol id | Page(s) | Meaning shown | Problem | Suggested fix |
|---|---|---|---|---|---|
| error | `M-J` | linear-perturbations, why-cold-dark-matter | "The Jeans mass: the mass inside a sphere one Jeans length across, (4/3)πρ̄λ_J³." | "Across" means diameter λ_J, but (4/3)πρ̄λ_J³ is a sphere of **radius** λ_J (8× more). The pages use the radius form: "$M_J = \frac{4}{3}\pi\bar\rho\lambda_J^3$". | "…the mass inside a sphere of radius one Jeans length, (4/3)πρ̄λ_J³." |
| info | `c-s` | why-cold-dark-matter | "The speed of sound in the gas." | The page also uses c_s for the radiation-dominated photon fluid: "$c_s = \frac{c}{\sqrt3}$". | "The speed of sound (in the gas, or c/√3 in a radiation fluid)." |
| info | `n-s` | inflation-overview, inflation-solutions, power-spectrum | "…P ∝ kⁿ; measured n_s ≈ 0.965." | The exponent is written n, the symbol is n_s. | "P ∝ k^(n_s)". |
| info | `a` (8.902) | dark-matter-freeze-out | "…(a = 1 today, 1/(1 + z) in the past)." | This page writes $a/a_0$, so it does not assume a₀ = 1. Harmless. | None, or add "(or a/a₀)". |

All checked values are correct: G = 6.674 × 10⁻¹¹; c = 2.998 × 10⁸ m/s; ħ = 1.055 × 10⁻³⁴ J·s; k_B = 1.381 × 10⁻²³ J/K; M_⊙ = 1.99 × 10³⁰ kg; ρ_c ≈ 9 × 10⁻²⁷ kg/m³ (3H₀²/8πG = 8.6 × 10⁻²⁷ for H₀ = 67.7, 9.2 × 10⁻²⁷ for 70); n_s ≈ 0.965; σ₈ ≈ 0.8; z_eq ≈ 3400; t_eq 50 000–75 000 yr; T₀ = 2.7255 K; H₀ 67–73; h₀ 0.67–0.7; Ω_m ≈ 0.3; Ω_vac ≈ 0.7; Ω_r ≈ 9 × 10⁻⁵; ζ(3) ≈ 1.202; α ≈ 1/137; m_e c² ≈ 0.511 MeV; δ_c ≈ 1.69; ξ = (3π/4)² = 5.55; e ≈ 2.718. All checked definitions are correct: Ω_k = −kc²/(a²H²); ρ_n = ρ_m + ρ_r; ρ_i is the density when a = 1; H_vac = √(8πGρ_vac/3); r_s = 2GM/c²; T_ν = (4/11)^(1/3) T_γ; p_vac = −ρ_vac c²; ρ_c = 3H²/8πG; γ = 1/√(1 − β²); ω = 2πν; τ_coll = 1/(n_eq⟨σv⟩); ν = δ_c/(σD); χ = √(8πGρ_f/3); Δ = 1 + δ.

## 3. Subscript forms that can match something else (prefix matching)

Every compound form was compared with every other subscript on the same base, on pages where the compound is in use. Only these prefix matches occur:

| Severity | Symbol id | Page(s) | Meaning shown | Problem | Suggested fix |
|---|---|---|---|---|---|
| info | `rho-m` | age-with-vacuum-energy | "The mass density of matter…" on ρ_{m,0} | Correct (",0" = today). | None. |
| info | `rho-vac` | age-with-vacuum-energy | vacuum density on ρ_{vac,0} | Correct. | None. |
| info | `Omega-r` | age-with-vacuum-energy | radiation parameter on Ω_{r,0} (quiz) | Correct. | None. |
| info | `sigma-8` | power-spectrum | σ₈ on σ_{8,gal}, σ_{8,mass} | Nearly correct (see section 1). | Optional wording. |
| warning | `rho-m` (and every compound) | magnetic-monopoles | matter density on ρ_m | This is not a prefix problem: the same form means something else. Compound meanings are still global unless scoped (see section 1). | Scope compound meanings when a page uses them differently. |
| info | `Omega-vac` | supernova-evidence | general Ω text on Ω_Λ | `\Omega_\Lambda` is not one of the `forms`, so Ω_Λ gets the general Ω meaning, which does mention Ω_Λ. | Add `"\\Omega_\\Lambda"` to `Omega-vac` forms. |

Possible future collisions to watch, all harmless today: `ell-p` "p" would also match ℓ_phys (used on open-universe-geometry, which does not use ℓ_p); `rho-r` "r" would match ρ_rad; `m-e` "e" would match any m_eff; `rho-c` "c" would match a ρ_crit. Compound matching is case-sensitive, so ℓ_P (Planck) is correctly **not** matched by ℓ_p.

## 4. Spoken names and pronunciation

Read-aloud (`lib/speech.ts`) uses `spoken` from the **TeX-command** entries only. Compound `spoken` values appear only in the popup's "Say it". Sample output from `texToSpeech` on formulas from the site:

| Severity | Symbol id | Page(s) | Spoken now | Problem | Suggested fix |
|---|---|---|---|---|---|
| warning | `Delta` | spherical-collapse, linear-perturbations | "delta" | `\Delta = 1 + \delta` is read as "delta equals 1 plus delta", and `\delta = \Delta\rho/\bar\rho` likewise. The listener cannot tell them apart. | `spoken: "capital delta"` (as with the name). |
| warning | `cdot` | linear-perturbations, power-spectrum, magnetic-monopoles, newtons-static-universe, grand-unified-theories | "times" | `\nabla\cdot\vec B` is read "del times vector B"; `\vec k\cdot\vec x` is read "k times x". The meaning text says it is the dot product between vectors. | `spoken: "dot"`, or make speech say "dot" when ⋅ sits between vectors or follows ∇. |
| warning | `times` | grand-unified-theories (∇×A) | "times" | `\vec B = \vec\nabla\times\vec A` is read "vector del times vector A"; this should be "cross". | Say "cross" between two vectors (`\vec…\times\vec…`). |
| warning | `circ` (speech.ts) | kinematics-2d, vectors, newtons-laws, christoffel-symbols | "45 superscript degrees" | In `texToSpeech` the general rule `^\\([A-Za-z]+)` → "superscript …" (line 37) runs before the `^\circ` → "degrees" rule (line 70), so the special case never fires. | Move the `^\circ` replacement above line 37. |
| info | `Omega` / `omega` | vacuum-energy-puzzle | both "omega" | "omega sub vac equals 0.69 … h bar omega" on one page. | `spoken: "capital omega"` for Ω (optional). |
| info | `ln` | cosmological-constant, press-schechter, … | "log" | Pages such as dark-matter-freeze-out also use log₁₀. "Log" for ln is ambiguous in general. | `spoken: "natural log"` (or "l n"). |
| info | `rightleftharpoons` | dark-matter-freeze-out | "goes both ways to" | "x plus x bar goes both ways to 2 gamma" sounds odd. | "is in equilibrium with". |
| info | `h0` vs `H0`; `t0` vs `T0` | matter-radiation-equality, temperature-and-decoupling | "h nought" / "H nought"; "t nought" / "T nought" | A synthesiser says each pair identically (popup only; t_d = (T₀/T_d)^{3/2} t₀ uses both). | "little h nought"; "T nought" → "T nought (temperature)" or "T zero". |
| info | `cong` | dark-matter-freeze-out | name "congruent" | The name suggests geometry; the meaning (and spoken) is "approximately". | Name "approximately equal (≅)". |
| info | `sim` | several | name "tilde (similar)" | Clashes with the `tilde` accent entry, also named "tilde", on /symbols. | Name "of the order of (∼)". |

The pronunciation hints were also checked (beta "bay-ta or bee-ta", zeta, theta, mu "myoo", nu "new", xi "ksee or zye", tau "rhymes with cow", phi "fye", chi "kye", psi "sigh", sinh "shine or sinch", cosh "kosh", tanh "tanch"). They are acceptable, standard English readings.

## 5. Minor wording suggestions

- `H` (pages position-and-velocity-1d, vectors): this text repeats the course meaning almost word for word. A `courses: ["8.01"]` scope would cover future 8.01 pages too.
- `theta` (open-universe): "development angle" is only an angle in the closed case. For the hyperbolic solution, "parameter" alone is more accurate.
- `ell` general: "A length or distance (ℓ_p physical, ℓ_c comoving; ℓ_P on some pages is the Planck length)."
- `delta` 8.902: "δ_c is the critical value for collapse" duplicates `delta-c`. That is fine, but it could say "≈ 1.69".
- `rho-i`: "The density at the initial time t_i, when a(t_i) = 1 (Guth: 1 m/notch); ρ = ρᵢ/a³ for matter" ties it to the lesson's notation.
- `tilde` / `bar` / `hat`: consider a page-scoped meaning for linear-perturbations, "k̃ = k/a, the physical wavenumber".

## Verified as correct (brief)

- **Greek, page-scoped:** alpha (cycloid constant, variation parameter, fine-structure constant); beta (v/c; latitude in christoffel-symbols); gamma (Lorentz factor; photon subscript; photon in 2γ; correlation slope 1.8; adiabatic index); delta (Kronecker; density contrast + δ_D Dirac on power-spectrum, where δ_D is present); Delta (Δ = 1 + δ, Δ_V = 18π² ≈ 178; difference elsewhere, including Δm², Δ(m − M), ΔE, ΔV); epsilon; zeta; theta (cycloid parameter, phase in e^{iθ}, polar angle on all 7 metric pages, angle in 8.01); kappa; lambda (wavelength incl. dλ/dν; path parameter/index; Jeans length; free-streaming length, formula labelled so); Lambda (cosmological constant incl. Ω_Λ; gauge function); mu (index; muon; micro in "1.72 μm"); nu (frequency/neutrino; frequency; neutrino; index incl. "ν = r"; peak height); xi (correlation length; correlation function; turnaround overdensity); sigma (index; velocity dispersion; rms fluctuation; cross section); tau (proper time; tau lepton; time scales incl. τ_Hubble/τ_Jeans; growth time; dimensionless time); phi (azimuth; potential; scalar field; phase + potential in grand-unified-theories; electric potential); chi (expansion rate; ψ = iχ); psi (3-sphere angle; Dirac field; creation rate); omega; Gamma.
- **General Greek and constants:** pi, rho (density, 30 pages), Omega (17 pages incl. Ω_i, Ω_tot), ell (except vacuum-energy-puzzle), hbar, odot, infty.
- **Relations, operators, calculus:** all general meanings fit every page that uses them.
- **Accents:** vec (incl. d a⃗ as an area element); hat (Fourier transform on the three 8.902 pages, unit vector elsewhere incl. ê_QP); dot; ddot; bar (antiparticle ν̄, x̄; mean/smoothed field); tilde.
- **Latin letters:** a (8.286 and 8.902 scale factor on all pages listed, incl. ã, a_max, a_ta; disk constant; event label); H (all pages); z (all except open-universe-geometry and doppler-effect; complex number; Cartesian coordinate; redshift plus Δz on mass-energy-and-radiation); G; c (all except power-spectrum; c′ on open-closed-flat); k (Boltzmann on 6 pages; index; half-life in doubling times on eternal-inflation; kT plus P(k) on dark-matter-freeze-out; curvature on 16 pages; wavenumber in 8.902); T (temperature; transfer function; kinetic energy in 2T + V = 0).
- **Compounds:** H0, h0, t0, T0, zeq, teq, rho-c (incl. ρ_c(z), and 8.6 × 10⁻³⁰ g/cm³ on anthropic-multiverse = 8.6 × 10⁻²⁷ kg/m³), rho-m (except magnetic-monopoles), rho-r, rho-vac, rho-f, rho-i, rho-n, Omega-m, Omega-vac, Omega-r, Omega-k, Omega-0, ell-p, ell-c, ell-hor, M-sun, lambda-J, c-s, v-s, delta-c, sigma-8, sigma-R, tau-H, tau-coll, n-eq, n-s, T-gamma, T-nu, u-gamma, n-gamma, m-e, d-L, r-s, p-vac, H-vac, k-max.
- Every page listed in a `pages` scope exists and uses the symbol (no stale scopes).
- Page texts that look like errors but are deliberate notes on the source: "$p = \rho/(mkT)$" (why-cold-dark-matter, marked as the notes' typo), "$\delta_\text{ra}$" (spherical-collapse, marked), "$T(K)$" (power-spectrum, marked), and "$\Omega_{k,0} = kc^2/…$" (age-with-vacuum-energy, a wrong quiz choice).

## Resolution (2026-11-15, by the author)

Errors:
1. `k` on vacuum-energy-puzzle: page meaning added ("a wavenumber; k_max is the largest one included").
2. `z` on open-universe-geometry: added to the "Cartesian coordinate" meaning.
3. `a` on newtons-static-universe: the page meaning now includes the scale factor a(t).
4. `rho-m` on magnetic-monopoles: page meaning added (magnetic charge density, Gaussian units).
5. `z` on doppler-effect: page meaning now defines z by λ_O/λ_S and says the stretch here comes from the source's motion.
6. `c` on power-spectrum: page meaning explains the cc label in r₀^cc.
7. `M-J`: "a sphere whose radius is the Jeans length".

Warnings:
- New compound entry `ell-P` (Planck length, √(ħG/c³) ≈ 1.6 × 10⁻³⁵ m).
- Δ is now spoken "capital delta", so Δ = 1 + δ reads "capital delta equals 1 plus delta".
- `lib/speech.ts`: · between vectors or after ∇ is read "dot", × between vectors "cross"; ° is handled before the general superscript rule ("45 degrees").
- `k` and `z` on vectors (8.01): page meanings added (k̂ unit vector along z; the z axis).
- `\Omega_\Lambda` added to the `Omega-vac` forms; `t0` text notes that simple models on some pages give other ages.

Not changed: other info-level wording suggestions; the remaining 8.01 letters stay unexplained by design (pages mix a = acceleration with a(t) = scale factor).
