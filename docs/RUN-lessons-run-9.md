# Lessons run 9 (2026-11-17)

Branch `lessons-run-9`, from `main` after PR #50. One commit per lesson, each with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

## Why 8.902

The remaining 8.02 sessions are problem-solving sessions, exam reviews and Session 35 (no notes or slides), which earlier runs deliberately skipped. The next item in the order of work was 8.902 (Astrophysics II, Vogelsberger, Fall 2023), which had pages only for Lectures 13–16 and 19. This run writes all the other lectures, so **8.902 is now complete** (21 lectures, 23 pages).

## Added: 17 pages, 8.902 Lectures 1–12, 17, 18, 20, 21

| Lecture | Page | Topics | Review |
|---|---|---|---|
| 1 | `galaxy-observations` | Flux and intensity, Vega/AB magnitudes, distance modulus, colours, Sérsic profiles (plot), galaxy types, Schechter function (plot), rotation curves and dark matter candidates, redshift, population synthesis | 1 error (AB–Vega conversion copied upside down from the notes), 2 warnings, fixed |
| 2 | `virial-theorem` | The virial, pair forces, power-law potentials, 2T + U = 0, virial speed of a galaxy, cluster mass, ideal gas law | pass with notes |
| 3 | `relaxation-times` | Encounter kick, strong encounters (p = 3/N), Coulomb logarithm, t_relax ≈ N/(6 ln N) crossing times (plot), phase mixing, violent relaxation | pass with notes |
| 4 | `potential-density-pairs` | Point mass, uniform sphere (Gauss), Mestel disc, NFW profile (plot), core–cusp and other small-scale problems | pass with notes |
| 5 | `orbits-and-epicycles` | Orbit equation, precession, effective potential, guiding centre and epicycles (parametric plot), κ from the rotation curve, Oort constants (Gaia values), Tully–Fisher and Faber–Jackson | pass with notes |
| 6 | `jeans-equations` | Distribution function, collisionless Boltzmann equation, moments, continuity and Jeans equations, spherical Jeans mass estimates (plot) | pass with notes |
| 7 | `stability-jeans-toomre` | Linear perturbations and the Jeans swindle, Jeans length and mass, rotation, Toomre criterion | pass with notes |
| 8 | `stellar-populations-chemical-evolution` | SFR indicators, Salpeter IMF, lifetimes, population synthesis, chemical evolution, instantaneous recycling, closed box (plot) | pass with notes |
| 9 | `g-dwarf-problem-agn` | G-dwarf problem (plot), AGN types, size from variability, accretion efficiency, Eddington luminosity and accretion rate, unified model | pass with notes (4 warnings, fixed) |
| 10 (1) | `cosmological-principle-expansion` | Hubble's law from homogeneity and isotropy, Newtonian Friedmann equation, the four regimes and their ages (plot) | pass with notes |
| 10 (2) | `friedmann-equations-density-parameters` | Field equations, metrics, Robertson–Walker, Friedmann equations, critical density, density parameters, E(a), equality epochs (plot) | 1 error (Ω_r,0 = 9.2 × 10⁻⁵, not 9.1), 4 warnings, fixed |
| 11 | `observational-cosmology-distances` | Redshift, (1+z)² dimming, comoving, angular-diameter and luminosity distances, Einstein–de Sitter (plot), comoving volume | pass with notes |
| 12 | `inflation-scalar-field` | Recombination and Saha, horizon and flatness problems, accelerated expansion, the inflaton, slow roll, reheating, the cosmological story | pass with notes |
| 17 | `cmb-anisotropies` | Primary and secondary anisotropies, C_ℓ, Sachs–Wolfe plateau, sound horizon and acoustic peaks (plot), Silk damping | pass with notes |
| 18 | `cmb-cosmological-parameters` | Ω_k, Ω_m and Ω_b from the first two peaks, baryon loading (toy-model plot) | pass with notes |
| 20 | `big-bang-nucleosynthesis` | n/p freeze-out, deuterium bottleneck and Saha (plot), neutron decay and Y (plot), D/H and Ω_b | 1 error (time–temperature rule), 1 warning, fixed |
| 21 | `lyman-alpha-forest` | Quasar absorption, Gunn–Peterson test and optical depth (plot), photoionization equilibrium, reionization history | 1 error (collisional ionization repeated from the notes), 2 warnings, fixed |

## Slips in the notes worth knowing

The 8.902 notes are student-written lecture notes and contain more slips than the 8.286 transcripts. Each is corrected on the page in a bracket. The largest:

- **Lecture 10:** matter–Λ equality at a ≈ 1/2.3, z ≈ 1.3; correct is a ≈ 0.77, z ≈ 0.3 (the notes took a⁻³ for 1/a). Lecture 12's summary of the story itself gives 0.33.
- **Lecture 1:** the AB–Vega conversion (eq. 12) is upside down, and the U-band offset has the wrong sign.
- **Lecture 9:** the Eddington accretion rate is too small by about 70 (5 × 10⁻¹⁰ vs 3.6 × 10⁻⁸ per solar mass at efficiency 1/16); a radio luminosity of 10¹⁸ L☉ cannot be right.
- **Lecture 11:** the plotted distances for ΛCDM are wrong at high redshift (D_A never turns over).
- **Lecture 12:** the Saha exponent has the wrong sign; ε uses 24πG instead of 16πG; ρ_r/ρ_m at recombination is about 0.3, not 0.05.
- **Lecture 21:** the recombination time is 6 × 10⁹ yr, not 3 × 10⁶ yr; the DLA threshold is 2 × 10²⁰ cm⁻², not 10³².
- **Lecture 20:** "half-life" 890 s is used as the mean lifetime.
- **Lecture 7:** Toomre's coefficient is 3.36 (the notes' heuristic gives 3.27 and credits 3.26 to Toomre).

## Site files touched besides the lesson files

- `data/symbols.json`: new page-scoped meanings and compound entries for every page.
- `calcs/values.yaml`: two new registry values, `0.6847` (Ω_Λ, Planck 2018 as quoted in the Lecture 10 notes) and `2.73` (T_CMB as used in the Lecture 12 notes).
- No site code and no existing lesson was changed.

## Practical notes for the next run

- Lessons go in one at a time: a draft written while another lesson is under review stays outside the repository, because every lesson adds to `data/symbols.json` and the pre-commit check runs on the whole working tree. (Once, early in this run, files were moved aside while a review was running, and the reviewer could not find them; both pages were then re-tested.)
- In this shell, heredocs and `sed` replacements halve backslashes; LaTeX edits are safer with the Edit tool or a Python script that builds backslashes with `chr(92)`.
- `content:check` flags units after a power of ten inside a formula ("10⁻²⁰ erg" is read "20 ergs"); put such units in the text or the label.

## Not done / for the owner

- Nothing is pushed or merged.
- `OWNER-TODO.md`, `AGENTS.md` ("Current state") and `docs/PLAN.md` still describe 8.902 as partial; they were left alone because the run was limited to lesson files. Suggested update: 8.902 complete (Lectures 1–21, 23 pages), 387 pages in total.
- Next per the order of work: the 8.06 lecture list and lessons, then 8.962.
