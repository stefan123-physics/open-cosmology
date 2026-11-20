# Lessons run 8 (2026-11-17)

Branch `lessons-run-8`, from `main` after PR #49. One commit per lesson, each with its calcs file, an independent review (all findings fixed, `status: reviewed`) and page-scoped symbol meanings; every commit passed the pre-commit checks (`content:check`, calc tests).

## Added: 8.05 Lectures 18–26, completing 8.05

| Lecture | Page | Topics |
|---|---|---|
| 18 | `nmr-tensor-products` | NMR solved in the rotating frame, the 90° pulse, how MRI works; two-particle states, the tensor product, product operators, total S_z of two spins |
| 19 | `entanglement-bell-teleportation` | Inner product on V ⊗ W, the determinant test for entanglement, the Bell basis, measuring in any basis, quantum teleportation |
| 20 | `epr-bell-vector-operators` | The singlet correlation, EPR's local realism, Bell's three-axis inequality and its violation; vectors whose components are operators |
| 21 | `angular-momentum-algebra` | Vectors under rotations, [L_i, L_j] from the dot/cross theorem, L² and central potentials, ladder operators, the |j, m⟩ multiplets, the hidden angular momentum of the 2D oscillator |
| 22 | `radial-equation-free-particle` | Spherical harmonics, the radial equation, the spectral diagram, behaviour at the origin and far away, the free particle (spherical Bessel functions), phase shifts |
| 23 | `spherical-well-oscillator-hydrogen` | The infinite spherical well (Bessel zeros, checked with SciPy), the 3D oscillator's multiplets, hydrogen's scales and spectrum, the classical Runge–Lenz vector |
| 24 | `spin-orbit-adding-angular-momentum` | Feynman–Hellmann, the sum of two angular momenta, spin–orbit coupling (Thomas factor, size α²), 1 ⊗ ½ = 3/2 ⊕ ½ |
| 25 | `hyperfine-21cm-adding-angular-momenta` | Hyperfine splitting, ½ ⊗ ½ = 1 ⊕ 0, the 21 cm line (cosmology callout: galaxy rotation and dark matter, linked to Ferreras 2.2), j₁ ⊗ j₂ and Clebsch–Gordan coefficients |
| 26 | `hydrogen-hidden-symmetry` | The quantum Runge–Lenz vector and the two hidden angular momenta that give hydrogen's levels and n² degeneracy |

Lecture 22's natural slug was taken by the 8.04 page `spherical-harmonics-radial-equation`, which is now its prerequisite.

## Site changes made along the way

- **Read-aloud** (`lib/speech.ts`):
  - a sign used as a subscript or superscript is a label, not an operator. Before, J₊ and f(1⁺) were read as sums ("f of the quantity 1 plus"); 18 existing readings improved, none got worse.
  - double factorials, and a single factorial after brackets (as in (n − k)!), are now said.
- **Symbols** (`data/symbols.json`):
  - p_i is now spoken "p sub i"; it was "p initial", which was wrong for most of its meanings;
  - `\iff` joined the existing "if and only if" entry;
  - new entries include the tensor product, the direct sum's partners, Bell states, J±, Clebsch–Gordan labels and the Runge–Lenz components.

## Review findings worth knowing

- **Lecturer slips are noted in brackets on each page**, as AGENTS.md rule 4 asks:
  - liquid helium "3 K" (it is 4.2 K);
  - "end of the FM band" for the 21 cm line (it is at 1.4 GHz);
  - several misspoken signs, components and coefficients.
- **Wrong "where this leads" links:** the reviews caught three in a row (Lectures 22–24), each claiming the next lecture covered material that comes one or two lectures later. Check `leadsTo` against the next transcript, not the course title.
- **Contested claims are attributed to the lecturer, not stated as fact:**
  - Bohm's theory;
  - Schwinger and the 2D oscillator;
  - "Feynman did it as an undergraduate";
  - the 21 cm line and the spiral arms.

## Not done / for the owner

- Nothing is pushed or merged.
- Next per the order of work: the rest of 8.02 and 8.902, the 8.06 lecture list and lessons, then 8.962.
