# Lessons run 7 (branch `lessons-run`)

An unattended run adding new lessons, started 2026-11-17 at 12:07, planned to stop by 17:07 (five hours).
The branch starts from `main` (58885e0), which already holds runs 1–6.
Rules for the run (owner, as for runs 2–6): new lessons only, plus their calcs, reviews and new entries in `data/symbols.json`;
no changes to existing lessons or site code; one commit per lesson; nothing pushed until the owner asked for pull requests.

Plan: continue 8.05 Quantum Physics II (Fall 2013, Zwiebach) lecture by lecture from Lecture 6, following the lecture transcripts and Zwiebach's lecture notes (chapters 3–7).

## Lessons

| # | Lesson | Page | Status | Notes |
|---|---|---|---|---|
| 1 | 8.05 L6: Linear operators, matrices and eigenvalues | linear-operators-matrices | reviewed | given by Aram Harrow; "finite-dimensional" added to the eigenvalue claim |
| 2 | 8.05 L7: Eigenvalues, inner products and bras | eigenvalues-inner-products | reviewed | given by William Detmold; bra uniqueness argument corrected |
| 3 | 8.05 L8: Linear functionals, adjoints and Hermitian operators | adjoints-hermitian-operators | reviewed | |
| 4 | 8.05 L9: Hermitian and unitary operators, position states and uncertainty | hermitian-unitary-position-states | reviewed | |
| 5 | 8.05 L10: The uncertainty principle and energy–time uncertainty | uncertainty-principle-energy-time | reviewed | cosmology callout: the 21 cm line; links to Ferreras §2.4 |
| 6 | 8.05 L11: Ground-state bounds, diagonalisation and the spectral theorem | ground-state-bounds-spectral-theorem | reviewed | |
| 7 | 8.05 L12: The oscillator spectrum and unitary time evolution | oscillator-unitary-time-evolution | reviewed | worked example replaced by an original one |
| 8 | 8.05 L13: Solving for time evolution, and the Heisenberg picture | time-evolution-heisenberg-picture | reviewed | |
| 9 | 8.05 L14: Coherent states of the harmonic oscillator | coherent-states | reviewed | worked-example turning point corrected |
| 10 | 8.05 L15: Number–phase uncertainty and squeezed states | squeezed-states | reviewed | squeezed light in gravitational-wave detectors marked as a later development |
| 11 | 8.05 L16: Photon states, spin precession and two-state systems | photon-states-spin-precession | reviewed | cosmology callout: zero-point energy; links to 8.286 Lectures 18 and 20 |
| 12 | 8.05 L17: The ammonia molecule, the maser and the rotating frame | ammonia-maser-nmr | reviewed | |

## Summary

The run ended at about 13:20 on 2026-11-17, when the owner asked to finish the lessons in progress, commit and open pull requests.

- **12 new lessons**, 8.05 Lectures 6–17. Each has:
  - its own commit and a calcs file;
  - an independent review, with all findings fixed and `status: reviewed`;
  - page-scoped symbol meanings.
- **8.05 Quantum Physics II now has Lectures 1–17.** Topics:
  - **Linear algebra:** operators, inner products, adjoints, Hermitian and unitary operators, the spectral theorem.
  - **Uncertainty:** the uncertainty principle, energy–time uncertainty, ground-state bounds.
  - **Dynamics:** the Schrödinger and Heisenberg pictures; coherent, squeezed and photon states.
  - **Two-state systems:** spin precession, the ammonia maser, the start of NMR.

  Next: Lecture 18 (NMR in the rotating frame, then multiparticle states and tensor products).
- **Build**: `npm run build` passes with 0 errors; `npm run calc:test` passes (4181 tests).

## Not done / for the owner

- **Nothing was merged or deployed.** The run is split into three stacked pull requests against `main`, to be merged in order:
  1. Lectures 6–9;
  2. Lectures 10–13;
  3. Lectures 14–17 plus this summary.

  Each later branch contains the earlier ones, so after a merge its diff shrinks to its own lessons.
- **Read-aloud gaps** (site code, not touched): `lib/speech.ts` still cannot say kets and `|` inside formulas (a bra-ket is read as "the average of …"), `\mathbb`, `\mathcal`, `\mapsto`, `\min`, `\dim` or `\iff`. The pages work around these:
  - inner products are written (u, v), as in Zwiebach's notes, and states as ψ or χ with labels, with Dirac's brackets in the prose;
  - the identity is written I and the field unit E₀;
  - `\text{dim}` and words replace the rest.
- **Calc harness**: single-letter variable names that are also unit symbols (u, D, s, w) are read as units in calcs formulas without any warning; the L17 calcs use longer names. Worth a note in docs/CALC_TESTS_PLAN.md or a check in the harness.
- **Earlier notes still open** (from run 6):
  - the `\int_0` → t₀ scanner bug on `probability-current`;
  - the ρ meaning on `key-features-of-quantum-mechanics`;
  - the 8.04 syllabus titles.

## Follow-up (2026-11-17, after the run)

All of the notes above have been dealt with:
- **Read-aloud**: `lib/speech.ts` now says bra-kets ("the inner product of u and v", "the matrix element of T between u and v", "ket psi", "bra psi"), `\mapsto`, `\iff`, `\mid`, `\min`/`\max` with a subscript ("the minimum over x of"), `\dim`, a superscript dagger, `\mathbb`/`\mathcal` without braces, and the older gaps from run 6: `\otimes` ("tensor"), `\coth`, `\prod` with limits ("the product from … to … of"), `\binom` ("n choose k"), the spin arrows and a factorial after a bracket. The pages of this run keep their (u, v) notation; new pages may use kets.
- **Calc harness: the explanation above was wrong.** Names defined in an entry take priority over unit names, so u, D, s and w were never read as units. The L17 check failed because the "identity" was only an approximation: the two sides differ by the next term of the series, a relative 5 × 10⁻⁵. The harness now does fail on the real risk: a one-letter name used in a formula but not defined in the entry, which pint would otherwise read as a unit.
- **t₀ on `probability-current`: not a scanner bug.** The scanner reads `\int_0` correctly; the page genuinely uses t₀ ("If N(t₀) = 1"). It now has its own meaning, a starting time.
- **ρ on `key-features-of-quantum-mechanics`**: now has a page meaning, electric charge density. The scanner counts ρ₁ also as ρ by design, as for Ω and Ω_m.
- **8.04 syllabus titles**: Lectures 8, 11, 17, 21 and 23 now follow MIT's lecture-notes topics.
