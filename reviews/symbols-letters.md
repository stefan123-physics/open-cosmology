# Review: new letter meanings for a, c, H, k, T and z in `data/symbols.json`

Reviewer: independent check, 2026-11-15. `data/symbols.json` and the pages were not edited.

Scope: the 30 new meanings added at the end of the `meanings` arrays of six symbols:

| Symbol | Line in `data/symbols.json` | New meanings |
|---|---|---|
| a | 79 | 10 |
| H | 80 | 2 |
| z | 81 | 3 |
| c | 83 | 5 |
| k | 84 | 7 |
| T | 85 | 3 |

Method:

- Scope rules are from `lib/symbols.ts:129-135` (`meaningFor`). A meaning scoped by `pages` wins first. Then a meaning scoped only by `courses`. Then a general meaning.
- Letter uses are counted as in `lib/tex-scan.ts` (`texNotation`). A base letter counts even when it has a subscript (a₀, a_N, c_∞, T_X, z_L). It also counts inside superscripts, but not inside subscripts.
- For each page in scope I ran `pageTex` + `texNotation` from those modules and listed every TeX snippet with the letter. That covers `<Formula tex>`, inline `$…$`, plot labels, and quiz and flashcard text. I then read each use in context in the `.mdx` file.
- All 18 Ferreras pages were also scanned for H, to test the course-scoped meaning.
- A site-wide pass found no page where any of the six letters has no meaning. `npm run content:check` passes with 0 errors and 0 warnings, including the new "letter … has meanings … but none for this page" check in `scripts/check-content.ts`.

## Summary

- **1 error.** c on `simulating-galaxy-formation` explains only c_∞, the sound speed. The same page also uses bare c as the speed of light, in the Eddington rate, the radiative efficiency and the e-folding time.
- **2 warnings.**
  - T on `dark-matter-particles` says "in kelvin … kT", with unit K. The page works in natural units (k_B = 1) and gives T in MeV.
  - z on `gravitational-lensing` explains the line-of-sight z only for Σ = ∫ρ dz. The lensing potential ψ = …∫Φ(D_Lθ, z) dz uses it the same way.
- **6 info items.** Text that does not fit every page in scope (the a_x/a_y clause, the "kT" clause), natural-units remarks, and duplicated meanings that could be merged.
- **Fact checks, all correct:**
  - Triaxiality T = (1 − q²)/(1 − s²): near 0 is oblate (a₂ ≈ a₁), near 1 is prolate (a₂ ≈ a₃). This matches `dark-matter-halos.mdx:147-149` and Eq. (3.4) for s, q.
  - Concentration c = r_h/r_S matches `dark-matter-halos.mdx:131`.
  - The other figures: Boltzmann's constant 1.381 × 10⁻²³ J/K (CODATA 1.380649), c = 2.998 × 10⁸ m/s, the Lane–Emden r = aξ (`halo-substructure.mdx:99`), k = π/r in Mpc⁻¹ (`halo-substructure.mdx:70,73,76`), k̂ out of the page (`circular-motion-position-velocity.mdx:165`), the axion reaction γ + e → a + e, and the orbital period T = 2πr/v with 293 K for the vacuum example (`the-dark-matter-problem.mdx:148-151`).
- **The course-scoped H meaning for Ferreras fits every Ferreras page that uses H.** Seven pages use it: the-dark-matter-problem, dark-matter-halos, dark-matter-particles, gravitational-lensing, halo-substructure, mond and quintessence-and-the-dark-sector. In every case H is the Hubble parameter or H₀. No Ferreras page has a page-scoped H meaning that overrides it. The only caveat is the units in natural units on dark-matter-particles (see info item I4).

## Errors

### E1. c: "As c_∞, the speed of sound in the gas far from a black hole …" on `simulating-galaxy-formation`

- **Where the meaning is:** `data/symbols.json:83`, last meaning of `c`, scoped to `pages: ["simulating-galaxy-formation"]`.
- **Problem:** the page uses the letter c in three ways.
  1. c_∞, the sound speed far from the black hole (`content/year-5/Ferreras/simulating-galaxy-formation.mdx:135`). The meaning covers this.
  2. c_s, the sound speed in the Bondi formula (line 137). This one is fine: it has its own compound entry `c-s` ("The speed of sound in the gas", m/s), and that entry is shown too.
  3. Bare c, the speed of light. It appears in:
     - the Eddington accretion rate, Ṁ_Edd = 4πGM_BH m_p/(ε_r σ_T c) (line 141);
     - ε_r = L/(Ṁ_BH c²) (line 143);
     - the e-folding time t_E = ε_r σ_T c/(4πG m_p), with c = 2.998 × 10⁸ (line 150);
     - the quiz question (line 32) and the flashcard (line 42).

  A reader who taps c in the Eddington formula is told it is the speed of sound far from a black hole. That is wrong. The unit, m/s, is right for both.
- **Suggested fix:** "The speed of light, c ≈ 2.998 × 10⁸ m/s (in the Eddington rate and ε_r = L/(Ṁc²)). As c_∞, instead, the speed of sound in the gas far from a black hole (in its radius of influence GM/c_∞²)." Keep the unit "m/s". Note that the page uses c_∞ in the radius of influence (line 135), not in the Bondi rate, which uses c_s. The current text's "(in the Bondi accretion rate)" is slightly off for c_∞, so the suggestion drops it.

## Warnings

### W1. T: "Temperature, in kelvin; often given as an energy, kT." on `dark-matter-particles`

- **Where the meaning is:** `data/symbols.json:85`. It is scoped to limits-and-continuity, counting-ordinary-matter, galaxy-clusters, dark-matter-particles and simulating-galaxy-formation, with unit "K".
- **Problem:** `content/year-5/Ferreras/dark-matter-particles.mdx` works "in units with ħ = c = k_B = 1" (line 65). T itself is an energy there:
  - n − n̄ = gT³/(6π²)[…] (line 65);
  - T_ν,dec ≈ 1 MeV (line 92, Eq. 6.3);
  - ⟨σv⟩ ∝ G_F²T², Γ ∝ G_F²T⁵, H² ∝ GT⁴ (line 90);
  - the flashcard at line 43, "at T ≈ 1 MeV".

  The page never writes kT. Only the 1.95 K of T_ν today is in kelvin, and T_ν has its own entry. So the popup says "kelvin … kT" and "K" next to "T ≈ 1 MeV".
- **Suggested fix:** split dark-matter-particles off into its own meaning, for example: "Temperature; in natural units (k_B = 1) given directly as an energy, e.g. T ≈ 1 MeV at neutrino decoupling." Use unit "K (here MeV, with k_B = 1)" or no unit. Compare the similar finding for `T[2]` in `reviews/symbols-units.md`.

### W2. z: "Redshift: z_L of the lens, z_S of the source. In Σ = ∫ρ dz, z is instead the distance along the line of sight." on `gravitational-lensing`

- **Where the meaning is:** `data/symbols.json:81`, scoped to `pages: ["gravitational-lensing"]`.
- **Problem:** the text names only Σ = ∫ρ dz (`content/year-5/Ferreras/gravitational-lensing.mdx:89`). The lensing potential ψ(θ⃗) = 2D_LS/(c²D_L D_S) ∫Φ(D_Lθ⃗, z) dz (line 95) uses z the same way, as the line-of-sight coordinate. A reader on ψ is told z is a redshift.

  The other uses are covered:
  - the distance integrals at the top of the page use redshift, (1+z) and ∫dz;
  - z = 0.60 and z = 2.03 (line 188) are redshifts.
- **Suggested fix:** "… In Σ = ∫ρ dz and in the lensing potential ψ = …∫Φ dz, z is instead the distance along the line of sight." Optionally add a unit note: "(as a distance, m)".

## Info

### I1. a: "Acceleration: how fast the velocity changes, a = dv/dt (a_x, a_y are its components)." on contact-forces, circular-motion-position-velocity and the-dark-matter-problem

- **Where the meaning is:** `data/symbols.json:79`.
- **Problem:** the "(a_x, a_y are its components)" clause does not fit these three pages.
  - `contact-forces.mdx` and `the-dark-matter-problem.mdx` never use a_x or a_y. The latter uses only a = GM/r² = v²/r, near its rotation-speed formula.
  - `circular-motion-position-velocity.mdx:85` uses a_r, the radial component.
  - `tension-and-springs` uses a_1, a_2 and a_rope (the accelerations of different bodies), not components.

  Nothing on these pages is wrong, but the clause is unused.
- **Suggested fix:** use "(a subscript names a component, such as a_x or the radial a_r, or a particular body)", or drop the clause for this group.

### I2. T: "Temperature, in kelvin; often given as an energy, kT." on limits-and-continuity, counting-ordinary-matter and simulating-galaxy-formation

- **Problem:** the "kT" clause fits galaxy-clusters, which writes kT throughout (e.g. `galaxy-clusters.mdx:106`). It is out of place elsewhere:
  - `limits-and-continuity.mdx:69`: weather temperature gradient dT/dx;
  - `counting-ordinary-matter.mdx:71`: stellar surface temperature in L ∝ R²T⁴;
  - `simulating-galaxy-formation.mdx:104`: the gas temperature in the cooling function.

  The unit K is fine on all of them.
- **Suggested fix:** keep the kT clause only for galaxy-clusters, or reword to "Temperature, in kelvin". Together with W1, this means splitting this meaning into "Temperature, in kelvin" (four pages), a galaxy-clusters version with kT, and a dark-matter-particles version in natural units.

### I3. a: "An acceleration; a₀ is MOND's acceleration scale …" on mond and mond-tests

- **Problem:** correct as written. Both pages also use a_N, the Newtonian acceleration (e.g. `mond.mdx:110`, and a_N = a f(a/a₀)). The meaning covers a_N only as "an acceleration". On `mond` the unit "m/s² (as an acceleration)" also covers the plot slider a₀ in (km/s)²/kpc, which is the same dimension.
- **Suggested fix (optional):** add "a_N is the acceleration Newton's law alone would give."

### I4. H (Ferreras course) and k (quintessence-and-the-dark-sector): natural units

- **Problem:**
  - On `dark-matter-particles.mdx:90`, H² ∝ GT⁴ is written in natural units, where H is an energy, but the unit says "1/s (usually km/s/Mpc)". The Ferreras H meaning is otherwise correct on all seven pages.
  - The k meaning for quintessence-and-the-dark-sector, "A wavenumber; k_max is the largest one included", has unit "1/m". But `quintessence-and-the-dark-sector.mdx:81` integrates √(k² + m²), so k is a momentum or energy in natural units. The existing vacuum-energy-puzzle meaning has the same limitation.
- **Suggested fix (optional):** for k, use "1/m (an energy in natural units)". For H, nothing is needed beyond W1.

### I5. Duplicated meanings that could be merged

Several new meanings repeat an existing meaning word for word, unit included. Merging them keeps `/symbols` shorter and makes later edits apply everywhere.

| Symbol | New meaning | Duplicate of | Suggested merge |
|---|---|---|---|
| H | derivative-as-slope | the existing meaning for position-and-velocity-1d and vectors | add "derivative-as-slope" to that `pages` list |
| k | galaxy-clusters, the-dark-matter-problem | the Boltzmann meaning for black-body-radiation, … why-cold-dark-matter | add these two pages to that list |
| k | quintessence-and-the-dark-sector | the vacuum-energy-puzzle meaning | add this page to that list |
| c | the speed-of-light meaning for 9 pages | the course meaning for 8.286 and 8.902 | add "Ferreras" to its `courses` |
| z | quintessence-and-the-dark-sector | the 8.286/8.902 course meaning | add "Ferreras" to its `courses` |

For c, the page-scoped meanings on dark-matter-halos, dark-matter-particles and simulating-galaxy-formation would still override the course meaning, so the 8.01 pages kinematics-2d and newtons-laws would stay page-scoped. For z, gravitational-lensing and mond-tests keep their page meanings.

### I6. a: "The scale factor a(t): how much the universe has expanded (a = 1 today)." on derivative-as-slope, limits-and-continuity, quintessence-and-the-dark-sector and dark-matter-particles

- **Problem:** correct. None of the four pages states the normalisation, and `limits-and-continuity.mdx:179` only uses a(t) → 0. "(a = 1 today)" is the standard convention and does not conflict with anything on these pages.
- **Suggested fix:** none needed.

## Meanings found correct

All texts and units below were checked against every use of the letter on every page in scope.

**a**

1. "Acceleration: how fast the velocity changes, a = dv/dt …" with unit m/s². Scope: contact-forces, tension-and-springs, circular-motion-position-velocity, the-dark-matter-problem. Correct; for the unused clause see I1.
2. "Acceleration … In the cosmology note, a(t) is instead the scale factor of the universe." with unit "m/s² (acceleration)". Scope: acceleration-1d, kinematics-2d, newtons-laws, universal-gravitation. All four pages do have the cosmology use: d²a/dt², dx/dt = c/a(t), d²a/dt² = −(4π/3)Gρa and ä/a.
3. "The scale factor a(t) …; a physical distance is ℓ = a(t) ℓ_c." Scope: position-and-velocity-1d.
4. "The scale factor a(t) … (a = 1 today)." Scope: derivative-as-slope, limits-and-continuity, quintessence-and-the-dark-sector, dark-matter-particles. See I6.
5. "The semi-axes of an ellipsoidal halo, a₁ ≥ a₂ ≥ a₃ …" with unit "m (usually kpc)". Scope: dark-matter-halos (lines 141, 143).
6. "A length scale: r = aξ …" with unit m. Scope: halo-substructure (line 99).
7. "An acceleration; a₀ is MOND's acceleration scale … In H = ȧ/a, a is the scale factor." Scope: mond. Both uses are present, the latter at `mond.mdx:133`.
8. "An acceleration; a₀ is MOND's acceleration scale …" with unit m/s². Scope: mond-tests.
9. "An acceleration (v_c = √(a r) …); in the graph, a is the scale length of the stars' mass distribution." Scope: rotation-curves. The text matches line 80 and the plot's parameter a in kpc (lines 94–107). Leaving out the unit is right, since a has two dimensions on this page.
10. "The axion, as a particle in a reaction (γ + e → a + e)." Scope: wimps-and-axions. This is the only use of the letter on that page.

**H**

1. "The Hubble parameter H = ȧ/a …". Scope: derivative-as-slope. Correct; see I5 about merging.
2. "The Hubble parameter H = ȧ/a …; H₀ is its value today." Scope: course Ferreras. It fits all seven Ferreras pages that use H (see I4).

**z**

1. The gravitational-lensing meaning. Correct apart from W2.
2. "Redshift: 1 + z = a(observed)/a(emitted) …". Scope: quintessence-and-the-dark-sector. Matches (1 + z)⁻³ and z = 1 and z = 3.
3. "A Cartesian coordinate, with x and y." with unit m. Scope: mond-tests. The only use is dz² in the weak-field metric.

**c**

1. "The speed of light, c ≈ 2.998 × 10⁸ m/s." Scope: kinematics-2d, newtons-laws, counting-ordinary-matter, detecting-dark-matter, gravitational-lensing, mond, rotation-curves, the-dark-matter-problem, weak-lensing-and-machos. Every use on these pages is the speed of light: c/a(t), GeV/c², v/c, h/(m_χ c), the 2G/c² factors in lensing, cH₀, the Doppler 1 + v/c.
2. "The speed of light; in natural units ħ = c = k_B = 1." with unit "m/s (1 in natural units)". Scope: dark-matter-particles.
3. "A number (a scalar) that multiplies a vector …". Scope: vectors. Matches line 87.
4. "The concentration of a halo, c = r_h/r_S …". Scope: dark-matter-halos. Matches lines 43, 131 and 162, and has no unit, which is right for a dimensionless number.

**k**

1. "With a hat, k̂ is the unit vector along the z axis, here perpendicular to the plane of the motion (out of the page)." Scope: circular-motion-position-velocity. Matches line 165.
2. "Boltzmann's constant, in kT …; k ≈ 1.381 × 10⁻²³ J/K." Scope: galaxy-clusters, the-dark-matter-problem. Correct; see I5 about merging.
3. "Boltzmann's constant k_B (in natural units k_B = 1); in P(k), the wavenumber." Scope: dark-matter-particles. Matches line 65, line 84 (k ∼ 1/λ, P(k) ∝ k) and k ≈ 0.1 h/Mpc in the quiz. Leaving out the unit is right.
4. "A wavenumber …; here k = π/r …" with unit "1/m (here Mpc⁻¹)". Scope: halo-substructure. Matches lines 70, 73 and 76.
5. "A wavenumber; k_max is the largest one included (the cut-off)." with unit 1/m. Scope: quintessence-and-the-dark-sector. See I4 and I5.
6. "The wavenumber of a Fourier mode (in Φ̂_k): the Poisson equation becomes −k²Φ̂ = 4πGρ̂." with unit 1/m. Scope: simulating-galaxy-formation.
7. "A wavenumber on the sky (k₁, k₂ are its components) …". Scope: weak-lensing-and-machos. Leaving out the unit is right, since an angular wavenumber is per radian.

**T**

1. "Temperature, in kelvin; often given as an energy, kT." with unit K. Correct on galaxy-clusters, counting-ordinary-matter, limits-and-continuity and simulating-galaxy-formation; for the wording see I2. Not correct on dark-matter-particles; see W1.
2. "The triaxiality parameter T = (1 − q²)/(1 − s²) …". Scope: dark-matter-halos. The physics and the page agree (lines 147–149, 163).
3. "The orbital period: the time for one orbit, T = 2πr/v. In n = P/(kT), T is instead the temperature (293 K)." Scope: the-dark-matter-problem. Matches lines 148–151 and the Io/Jupiter example. I recomputed M = 4π²r³/(GT²) = 1.90 × 10²⁷ kg. Leaving out the unit is right, since T has two meanings on this page.

## Resolution (2026-11-15, by the page author)

- E1 (c on simulating-galaxy-formation): fixed. The meaning now covers the speed of light (Eddington rate, ε_r = L/(Ṁc²)) and c_∞ as the sound speed far from the black hole in its radius of influence GM/c_∞².
- W1 (T on dark-matter-particles): fixed with a separate meaning in natural units (k_B = 1, T ≈ 1 MeV), unit MeV.
- W2 (z on gravitational-lensing): the meaning now names the lensing potential ψ as well as Σ.
- I1: the acceleration meanings now say a subscript names a component or an object (a_r, a_1, a_rope; a_x, a_y, a_s), instead of only a_x, a_y.
- I2: "kT" wording kept only on galaxy-clusters (kT in keV); limits-and-continuity, counting-ordinary-matter and simulating-galaxy-formation now say "Temperature, in kelvin."
- I3: both MOND meanings now name a_N, the Newtonian acceleration.
- I4: H on dark-matter-particles has its own meaning (an energy in natural units, H² ∝ GT⁴); k_max on quintessence-and-the-dark-sector notes that it is an energy in natural units here.
- I5 (duplicated texts): left as page-scoped copies on purpose, so that changing a course-wide meaning never silently changes these pages; no behaviour difference.

