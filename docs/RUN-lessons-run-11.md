# Lessons run 11 (2026-11-18)

Branch `lessons-run-11`, from `main` after PR #63. Stopped early at the owner's request after Lecture 8. Each lesson is one commit, with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

## Why 8.06

8.06 (Quantum Physics III, Spring 2018, Zwiebach) is next in the order of work; run 10 wrote Lectures 1–2. This run continued in MIT's order.

## Added

| # | Lecture | Page | What | Review |
|---|---|---|---|---|
| 1 | 3 | `degeneracy-lifted-first-second-order` | Good bases and the commuting-operator rule; the first-order state outside and inside V_N; second-order energies; the M⁽²⁾ matrix when the degeneracy survives first order. Own example: a degenerate pair coupled to a third state, which splits only at second order | pass with notes, resolved |
| 2 | 4 | `hydrogen-fine-structure-pauli-dirac` | Hydrogen's scales (α²mc², αc), degeneracy and wavefunctions, the uncoupled and coupled bases, the Pauli equation and g = 2, the Dirac equation and the three fine-structure terms. Own example: fine structure grows like Z⁴ (He⁺). Cosmology callout on hydrogen's binding energy and recombination | needs changes (1 error in the callout: 158,000 K is where kT = 13.6 eV, not where a typical photon carries it), fixed |
| 3 | 5 | `fine-structure-darwin-relativistic-spin-orbit` | Darwin term and the smeared-electron picture, relativistic and spin–orbit corrections, the l → 0 limit, the combined fine structure depending only on n and j, a table of shifts. Own example: ground-state shift and the 2P doublet (10.95 GHz) | pass with notes, resolved |
| 4 | 6 (first part) | `zeeman-effect-weak-strong` | Zeeman Hamiltonian, weak and strong fields, vector operators and the projection lemma, the Landé factor, strong-field energies and remaining degeneracies. Own example: hydrogen n = 2 at 500 gauss | pass with notes, resolved |
| 5 | 6 (second part) | `semiclassical-local-de-broglie-wavelength` | WKB history, local momentum and wavelength, the Schrödinger equation as p̂²ψ = p²(x)ψ, k(x) and κ(x), polar form and the current ρ∇S/m. Own example: an electron in a slowly rising potential | pass with notes, resolved |
| 6 | 7 | `wkb-approximation-connection-formula` | The ħ expansion, basic WKB solutions, validity and failure at turning points, the connection formulae and the quantization rule ∫k dx = (n + ¾)π. Own example: a particle (neutron) bouncing on a floor, WKB against the Airy zeros | pass with notes, resolved |
| 7 | 8 | `airy-functions-connection-formulae` | Airy's equation, contour integrals, stationary phase and the asymptotic forms, the derivation of the connection formulae and their one-way arrows, and (from the notes) WKB tunnelling. Own example: the size of the non-WKB region, and tunnelling through a 2 eV barrier. Cosmology callout on false-vacuum decay (8.286 Lecture 23) | pass with notes, resolved |

After this run there are 397 pages, and 8.06 has Lectures 1–8 of 24.

## About the 8.06 source

- Lecture 6 became two pages: the Zeeman effect (L6.1–L6.4, notes chapter 2) and the start of the semiclassical approximation (L6.5, notes chapter 3).
- Each page cites its short-video transcripts as reading1–4 (or 1–5) and the notes chapter as the last reading. Lecture 5 has five videos, so its notes are reading6.
- Slips noted on the pages: "non-degenerate space" for the degenerate subspace (L3.1); "Charles Gaston Darwin" (L5.1, he was Charles Galton Darwin); the strong-field case described as "much smaller" (L6.1); the Bohr magneton said as "579 × 10⁻⁹" eV/gauss (L6.3, it is 5.79 × 10⁻⁹).
- The notes' section 3.4 numbers its equations unusually, (3.4.9)–(3.4.47); the pages cite them as printed.

## Practical notes for the next run

- `\mathbb`, `\boldsymbol`, `\mathbf`, `\underbrace`, `\longleftarrow`, `\arg` and `\frac\pi4` (no braces) cannot be read aloud; use `\vec`, plain `I` for an identity matrix, `\rightarrow`, words, and `\frac{\pi}{4}`.
- Subscripts in `\text{}` (H_Pauli, E_rel …) each need a symbol entry; it is easier to write plain E⁽¹⁾ and name the correction in the formula's label.
- A number followed by a unit inside a formula (`10^{-9}\ \text{eV}`) can make read-aloud say "9 eV"; put such values in the prose.
- `data/symbols.json` has a few hand-formatted lines; edit it line by line rather than re-serializing the whole file. The scratchpad helper used here rewrote only the lines it changed.
- When several lessons are written in parallel, their symbol changes share `data/symbols.json`. To commit one lesson, rebuild the file from the last commit plus that lesson's own changes, and move the other unfinished pages aside (but never while a reviewer is reading them; one review here briefly found its calcs file missing for that reason).

## Not done / for the owner

- 8.06 Lectures 9–24 remain; next is Lecture 9 (time-dependent perturbation theory, the interaction picture; notes chapter 4).
- The docs (AGENTS.md "Current state", PLAN.md, OWNER-TODO.md) were not updated, because the run was limited to lesson files.
