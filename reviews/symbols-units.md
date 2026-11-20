# Review: units in `data/symbols.json`

Reviewer: independent check, 2026-11-15. Scope: the `unit` field on every meaning (104 units on 62 symbols), checked against the meaning's text and against the formulas on the pages in its scope (`pages` / `courses`; resolution order as in `lib/symbols.ts` lines 131–133: page scope, then course scope, then the general meaning). `data/symbols.json` and the pages were not edited. `npm run content:check` passes (0 errors, 0 warnings).

## Summary

- **1 error.** `Lambda[3]` gives the cooling function in W·m³. But on `simulating-galaxy-formation`, Λ(T, Z, ρ) is a cooling rate per unit volume (W/m³).
- **11 warnings.** The unit is right for the quantity, but a page in scope uses the symbol for something else. The main cases:
  - ρ as an energy density in natural units on two Ferreras pages.
  - a normalised to 1 on two 8.286 pages.
  - Meanings whose text also covers a particle label (ν_e, μ⁻) or a constant of integration (c′), so the unit appears next to symbols that have none.
  - Two format inconsistencies.
- **2 suggested additions plus 1 optional one.** Λ (Einstein's cosmological constant, 1/m²) and ρ_i (kg/m³) are dimensional quantities with one clear unit but have no unit. The optional one is θ, the development angle (rad).
- Guth's notch convention is applied correctly: a in m/notch, k and κ in 1/notch², ℓ_c in notches, and α of the cycloid in m, as `closed-universe-cycloid.mdx:62` itself says. No 8.962 pages exist yet, so the Gaussian-units question does not arise.
- All other 92 units are correct. Every numerical constant quoted in a unit-bearing meaning was checked (G, ħ, c, k, σ_T, ℓ_P, M⊙, m_e c², ρ_c, T₀, t₀, t_eq).

## Errors (wrong unit)

| Symbol[index] | Current unit | Suggested unit | Reason |
|---|---|---|---|
| Lambda[3] | W·m³ (often erg·cm³/s) | W/m³ (often erg cm⁻³ s⁻¹) | On `content/year-5/Ferreras/simulating-galaxy-formation.mdx:102` the energy equation is du/dt = … + (Q − Λ(T, Z, ρ))/ρ, with u in energy per unit mass (line 104). So Q and Λ are powers per unit volume, and Λ depends on ρ. The W·m³ "cooling function" (rate = n²Λ) is the convention of `galaxy-clusters` (`Lambda[2]`, correct), not this page. Also update the text: the page writes Λ(T, Z, ρ), not Λ(T, Z), and it is "the energy radiated per unit volume per unit time". |

## Warnings (unit right, but misleading on some page in scope)

| Symbol[index] | Current unit | Suggested unit | Reason |
|---|---|---|---|
| rho[0] (general) | kg/m³ | keep; add page-scoped meanings | On `Ferreras/quintessence-and-the-dark-sector.mdx:59,83`, ρ is an energy density in natural units: w = p/ρ, ρ_v ~ ϵ⁴ = 10⁶⁰ GeV⁴. On `Ferreras/dark-matter-particles.mdx:118`, ρ_c ≈ 1.05 × 10⁴ h² eV/cm³. A scoped meaning on those pages could say "energy density (in natural units, GeV⁴ or eV/cm³)", or carry no unit. |
| a[3] (course 8.286) | m/notch (Guth's units) | keep; optionally add a page-scoped dimensionless meaning | `8.286/matter-radiation-equality.mdx:100` plots log₁₀ a with "a = 1 today". `8.286/open-universe-geometry.mdx:100,114` uses "units where a = 1, \|k\| = 1". On those pages a is effectively a pure number. A note in the text ("a pure number when normalised to 1 today") would also do. |
| T[2] (courses 8.286, 8.902) | K | keep | `8.902/dark-matter-freeze-out.mdx:155` writes "$T \sim 1$ eV" (should be kT ~ 1 eV, or T ~ 10⁴ K). That is a page slip rather than a unit error, but the popup will say K next to eV. Line 180 (caption, plain text) also uses T for the transfer function. Suggest fixing the page to $kT \sim 1$ eV. |
| ell[0] (general) | m | keep, or reword the text | The text names ℓ_c as "a comoving one", but in Guth's convention ℓ_c is in notches (`ell-c[0]` says so). Better: drop the ℓ_c clause from `ell[0]` (ℓ_c has its own entry `ell-c`), or say "physical lengths in m". |
| ell-c[0] (general) | notch (Guth's comoving unit) | keep | On `8.01/position-and-velocity-1d.mdx:159–161`, ℓ = a ℓ_c appears without any mention of notches, and no a meaning applies on that page. The reader sees "notch" unexplained. Consider "notch (Guth's comoving unit; a metre today if a = 1 today)". |
| nu[0] (black-body-radiation) | Hz | keep; split the meaning | The same meaning covers "with a subscript (ν_e, ν_μ, ν_τ) a neutrino". `8.286/black-body-radiation.mdx:163,171` uses ν_e, ν₁…ν₃ as particles, which have no unit. Split into a frequency meaning (Hz) and a neutrino label, as `nu[1]`/`nu[2]` do on other pages. |
| mu[5] (dark-matter-particles) | J (usually eV or GeV) | keep; split the meaning | The text also covers "as a subscript, the muon". `Ferreras/dark-matter-particles.mdx:125` writes (ν_μ, μ⁻)_L and μ_R, where μ is the muon itself. The chemical potential (line 61–63) is right in J. |
| c[1] (open-closed-flat) | m/s | keep; split, or note c′ | The text also covers c′, a constant of integration. On `8.286/open-closed-flat.mdx:132–134`, c′ has units of a^{3/2} ((m/notch)^{3/2}), not m/s. |
| z[0] (vectors) | m | consider dropping | On `8.01/vectors.mdx` z appears only as a subscript label (A_z, lines 53, 122, 126, 195), and A can be any vector. No z coordinate value occurs, so "m" describes nothing on the page. |
| Sigma[1] (simulating-galaxy-formation) | kg/m² (usually M⊙/pc²) | keep; mention the rate | The text includes Σ̇⋆, the star formation rate per unit area, which is in kg m⁻² s⁻¹ (usually M⊙ yr⁻¹ kpc⁻²) (`Ferreras/simulating-galaxy-formation.mdx:116`). Add "(Σ̇⋆: kg m⁻² s⁻¹)" or say the unit is for Σ itself. |
| H0[0] (general) | km/s/Mpc (a rate, 1/s) | 1/s (usually km/s/Mpc) | Format only: every other entry puts SI first with the quoted unit in brackets (compare `H[0]`, `H[1]`). |

Note: `Upsilon[0]` uses M⊙/L⊙ with no SI unit (kg/W). That is acceptable, since nobody quotes Υ in SI, but it is the only other exception to the SI-first convention.

## Suggested additions (meanings without a unit)

| Symbol[index] | Current unit | Suggested unit | Reason |
|---|---|---|---|
| Lambda[0] (age-with-vacuum-energy, cosmological-constant, supernova-evidence, gravitational-lensing) | none | 1/m² | Einstein's Λ is dimensional: `8.286/cosmological-constant.mdx:142` computes Λ = 8πGρ_vac/c² = 1.1 × 10⁻⁵² m⁻²; `age-with-vacuum-energy.mdx:73` has u_vac = Λc⁴/(8πG). (On supernova-evidence and gravitational-lensing it appears only in Ω_Λ, the same label situation as ν_e under `nu[0]`.) |
| rho-i[0] (general) | none | kg/m³ | ρ_i is the matter density at the initial time t_i, when a = u = 1 (`8.286/expanding-sphere.mdx:58,71,83`): M = (4π/3) r_i³ ρ_i. Only that page uses it. |
| theta[0] (closed-universe-cycloid, age-closed-universe, open-universe) — optional | none | rad | The development angle is the turning angle of the rolling wheel (`closed-universe-cycloid.mdx:83–86`; it runs 0 → π → 2π). This matches `theta[1]` and `psi[0]`, which give rad. For open-universe it is a hyperbolic parameter, so leaving it unitless is also defensible. |

Not suggested (checked): beta[1] (latitude, the plot uses degrees, `christoffel-symbols.mdx:127`); epsilon[2], sigma[10], phi[3], a[0], k[5], Lambda[4] (mixed meanings with dimensionless parts); phi[2], phi[4], phi[7] (fields and potentials in natural units); rho-m[0] (Gaussian magnetic charge density); Phi[1] (units vary by function); all Ω, δ, γ, κ[1], μ[3], μ[4], τ[4], τ[5], ξ[2], ξ[4], λ[4], k[4], h₀, z_eq, n_s, σ₈ (dimensionless).

Outside this review's scope, but noticed: some Ferreras pages use symbols for which no meaning applies, because the 8.286/8.902 meanings are course-scoped:
- k and T in kT: `galaxy-clusters.mdx:84,94`, `the-dark-matter-problem.mdx`.
- c: `gravitational-lensing.mdx:91`.
- a in r = aξ: `halo-substructure.mdx:99`.

`content:check` does not warn for plain letters, so these pages show no popup for them.

## Checked and found correct (92)

alpha[0], alpha[6], beta[3], epsilon[0], epsilon[3], theta[1], theta[2], theta[6], kappa[0], lambda[0], lambda[2], lambda[3], lambda[5], lambda[6], Lambda[2], mu[6], nu[1], nu[5], xi[0], xi[3], sigma[1], sigma[3], sigma[4], sigma[5], sigma[6], sigma[7], sigma[9], tau[0], tau[2], tau[3], tau[6], phi[0], phi[1], phi[5], chi[0], psi[0], psi[2], omega[0], omega[1], omega[2], omega[3], Gamma[1], Gamma[2], hbar[0], a[1], H[0], H[1], z[3], G[0], c[2], k[1], k[2], k[6], k[7], k[8], T[1], T[3], t0[0], T0[0], teq[0], rho-c[0], rho-m[1], rho-r[0], rho-vac[0], rho-f[0], rho-n[0], ell-p[0], ell-hor[0], ell-P[0], M-sun[0], lambda-J[0], M-J[0], c-s[0], v-s[0], tau-H[0], tau-coll[0], n-eq[0], T-gamma[0], T-nu[0], u-gamma[0], n-gamma[0], m-e[0], d-L[0], r-s[0], p-vac[0], H-vac[0], k-max[0], Phi[0], Phi[2], Phi[3], Upsilon[0], Sigma[0]

## Resolution (2026-11-15, by the page author)

- Error Lambda[3]: fixed. Unit W/m³ (often erg/(cm³·s)); the text now reads Λ(T, Z, ρ), the rate per unit volume.
- rho[0]: unit now notes that some pages use an energy density in natural units (GeV⁴, eV/cm³).
- a[3]: unit notes that some pages set a = 1 today.
- T[2]: unit notes that temperatures are often given as an energy, kT, in eV. The page wording "T ~ 1 eV" is standard physics shorthand for kT and was left unchanged (no physics content edits in this step).
- ell[0]: unit notes that a comoving ℓ_c is in notches; ell-c[0] now says "Guth's comoving unit of length".
- nu[0], mu[5], c[1]: units now say where they do not apply (a neutrino label, the muon label, the constant c′).
- z[0]: unit removed (on vectors z is only a component label).
- Sigma[1]: unit adds Σ̇⋆ in kg/(m²·s).
- H0[0]: rewritten SI first, "1/s (usually km/s/Mpc)".
- Added: Lambda[0] 1/m², rho-i[0] kg/m³, theta[0] rad.
- Not changed here: Ferreras pages where plain letters (k, T in kT; c; a in r = aξ) have no applicable meaning. That is missing symbol meanings, not units, and is left for a separate pass.

