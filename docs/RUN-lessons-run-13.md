# Lessons run 13 (2026-11-18)

Branch `lessons-run-13`, from `main` after PRs #71 and #72 (15:06 to 17:17). Stopped at the owner's request after the lessons in progress were finished; that completed 8.06. Each lecture is one commit, with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

## Why 8.06

8.06 (Quantum Physics III, Spring 2018, Zwiebach) is next in the order of work; runs 10–12 wrote Lectures 1–14. This run continued in MIT's order through chapter 6 of the notes (the adiabatic approximation), chapter 7 (scattering) and chapter 8 (identical particles), to the last lecture.

## Added

| # | Lecture | Page | What | Review |
|---|---|---|---|---|
| 1 | 15 | `adiabatic-invariants-classical-quantum` | An oscillator with a slowly changing frequency, the adiabatic condition, I = E/ω and why it barely changes, the phase-space area 2πE/ω, quantum hints, and the instantaneous-eigenstate ansatz with its one-state projection mistake (generated graph). Own example: a pendulum whose string is pulled from 1.00 m to 0.25 m in ten minutes. Cosmology callout on redshifting radiation modes (8.286 L15, L17, L18) | pass with notes, resolved |
| 2 | 16 | `quantum-adiabatic-theorem-landau-zener` | The adiabatic theorem with its dynamical and geometric phases, the coefficient equations, the ramp model and the C/T error bound, and Landau–Zener transitions with the smallest gap 2\|H₁₂\| (two generated graphs). Own example: a 0.20 μeV coupling swept at 1.0 μeV/ns | pass with notes, resolved |
| 3 | 17 | `berry-phase-molecules-energy-scales` | The Berry connection and curvature, gauge changes and closed paths, the spin-½ result (minus half the solid angle), and the energy scales of molecules, 1 : √(m/M) : m/M. Own examples: an electron spin whose field circles a 60° cone; the energies of a 0.1 nm molecule | pass with notes, resolved |
| 4 | 18 | `born-oppenheimer-approximation` | The molecular Hamiltonian, the product ansatz and the effective nuclear Hamiltonian with its electronic Berry connection, and H₂⁺ with an LCAO trial function (generated graph; measured values from the NIST WebBook). Own example: vibration and rotation of H₂⁺ and D₂⁺ in the model | needs changes (the page repeated a slip: E_e approaches −1 Ry like −1 − 2/x, not exponentially; one model/measurement comparison), fixed |
| 5 | 19 | `scattering-amplitude-cross-sections-partial-waves` | The scattering amplitude, flux, dσ/dΩ = \|f\|², j_l and n_l (generated graph) and the partial-wave expansion. Own example: fast neutrons on a foil. Cosmology callout on Thomson scattering and freeze-out (8.286 L17, 8.902 L19) | needs changes (a production rate read into a loose classroom remark about the LHC; CODATA 2022 values), fixed |
| 6 | 20 | `phase-shifts-optical-theorem` | Phase shifts, σ as a sum over partial waves, the optical theorem, and the hard sphere (generated graph); notes that the notes' boxed (7.2.42) has the wrong overall sign. Own example: two phase shifts and the interference term. Callout on self-interacting dark matter (Ferreras 3.5) | pass with notes, resolved |
| 7 | 21 | `phase-shifts-integral-scattering-equation` | Matching and the explicit tan δ_l formula, the impact-parameter picture, partial-wave unitarity, and the integral equation with its Green's function (generated graph). Own example: a square well's s- and p-wave phase shifts | pass with notes, resolved |
| 8 | 22 (first part) | `born-approximation` | The Born series and approximation, K = 2k sin(θ/2), the Fourier-transform reading, the central-potential formula and the Yukawa potential (generated graph). Own example: a 20.7 MeV neutron on a Yukawa potential. Callout on self-interacting dark matter (Tulin and Yu 2018) | needs changes (a wrong reference location), fixed |
| 9 | 22 (second part) | `identical-particles-exchange-degeneracy` | What identical means, why labelling fails, tensor products and exchange degeneracy. Own example: the spin-along-x probability for four sets of coefficients. Callout on the 7/8 fermion factor (8.286 L17) | pass with notes, resolved |
| 10 | 23 | `permutation-operators` | The exchange operator P₂₁ and the projectors S and A, permutations acting on operators, the symmetric group, transpositions and parity (with the theorem that even and odd permutations are equally many), and the sign ε_α with Sym^N V and Anti^N V. Own example: composing permutations, an inverse and its parity, and S and A on a two-spin state | needs changes (a flashcard said only transpositions are Hermitian; any permutation that is its own inverse is), fixed |
| 11 | 24 | `symmetrization-postulate` | The symmetrizer and antisymmetrizer for N particles, their properties as projectors, N = 3 and states of mixed symmetry, the symmetrization postulate with its seven comments (anyons, spin–statistics, hydrogen as a boson, one symmetric and at most one antisymmetric state, the Slater determinant), and occupation numbers and the Pauli principle. Own example: S and A on |aab⟩ and |abc⟩, and counting symmetric and antisymmetric states. Cosmology callout on the 7/8 and 3/4 factors (8.286 L17) and degeneracy pressure (8.044 L20, L22) | pass with notes, resolved |

After this run there are 415 pages (414 lessons and 1 problem set), and **8.06 is complete** (Lectures 1–24).

## About the 8.06 source

- The transcripts have no printed page footers, so pages cite the PDF page of each video's transcript, as runs 10–12 did. Notes offsets: chapter 6 printed page = PDF page; chapter 7 = PDF page + 132; chapter 8 = PDF page + 150.
- Lectures 15–24 have no long-slug video pages (checked against the OCW video gallery).
- The OCW resource page for the chapter 8 notes is titled "Chapter 8: Summary of Connection Formulas", but the PDF (`MIT8_06S18ch8.pdf`) is the Identical Particles chapter; the pages cite the PDF directly.
- Slips noted on the pages (transcript wording) include: the ellipse semi-axis with a factor 2; ω_nuc = (m/M)ω_el (it is √(m/M)); "−1.297 Ry" (−1.1297); "106 angstroms" (1.06 Å); E_e approaching −1 Ry "with an exponential"; Zwiebach squaring only (α + β) and not the ½ (L22.4 p. 5); "1 over 2π" for 1/2i; σ = "4π/k"; S for N = 2 without the ½; P₂₁₃ read twice in the N = 3 antisymmetrizer. Notes slips: (4.17) of chapter 6 drops a factor ¼; (6.6) prints ħ for ħ²; (6.40) prints e^{+R/a}; (7.2.21) keeps a stray e^{iδ}; the boxed (7.2.42) has the wrong overall sign; (7.3.14) prints 4πr for 4πr².

## Practical notes for the next run

- Overlapping work went well: the next lessons were drafted in staging folders outside the repo while the current one was reviewed, and only one lesson at a time was copied into the repo, so each commit holds one lecture's symbol changes. Up to three lessons waited in staging at once.
- Edit `data/symbols.json` only with a line-by-line script, never with `sed` (one `sed` edit changed its line endings).
- Write helper scripts with the Write tool: shell heredocs passed through the Bash tool lose doubled backslashes.
- Brace capital subscripts (`\nabla_{R}`, `R_{N}`) and write `R_{l}'` rather than `R_l'`, or read-aloud says "_".

## For the owner

- **`r_e` symbol name:** the shared `r-e` entry in `data/symbols.json` is named "effective radius" (from the galaxy pages), so any page that uses r_e for the classical electron radius would show that name. The Lecture 19 page avoids the symbol; renaming the entry to something neutral would touch existing pages, so it was left for you.
- **Chapter grouping on the 8.06 course page:** `_course.json` starts chapter 8 (identical particles) at Lecture 23, so the Lecture 22 identical-particles page appears under chapter 7 (as the second Lecture 13 page appears under chapter 4). Moving chapter 8's `from` is a one-line change to an existing file, left for you.
- Next in the order of work: 8.962 (General Relativity), or the Year IV courses 8.07, 8.08 and 8.09 first (owner decision 2026-11-18, docs/YEAR-IV-PLAN.md).
