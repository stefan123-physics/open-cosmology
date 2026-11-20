# Lessons run 16 (2026-11-19)

Branch `lessons-run-16`, from `main` after PR #92 (10:25 to about 12:30), straight after run 15 at the owner's request ("continue working after"). **8.962 General Relativity** (Spring 2020, Scott Hughes; Year V, graduate) was written in full: **23 new pages**, one per lecture, each with its calcs file, page-scoped symbol meanings, an original worked example and an independent review (13 reviews said "needs changes", the others "pass with notes"; all findings fixed or answered in a Resolution section, `status: reviewed`). Every commit passed the pre-commit checks and `npm run build` passes. Shipped as it went (PR #93 for Lectures 1–5, then the rest), merged after the checks and checked on opencosmology.eu.

## Source

The course has video lectures only: the 23 transcripts (CC BY-NC-SA, no courtesy or rights-reserved notice) are the text. They have no printed page numbers, so pages cite the PDF page ("transcript p. N"). Hughes writes most equations on the board and does not always read them out; where he does not, the pages give the standard form, checked against Carroll, MTW and (Lecture 15) Flanagan and Hughes 2005 (CC BY), and say so.

## Pages

| Lectures | Pages |
|---|---|
| 1–5 | `spacetime-geometric-viewpoint`, `basis-vectors-metric-four-momentum`, `tensors-one-forms-index-gymnastics`, `volumes-conservation-laws`, `stress-energy-tensor` |
| 6–11 | `covariant-derivative-christoffel-metric`, `equivalence-principle-local-lorentz-frames`, `parallel-transport-lie-derivative-killing`, `geodesic-equation-tensor-densities`, `conserved-momenta-riemann-tensor`, `riemann-symmetries-geodesic-deviation` |
| 12–17 | `einstein-field-equation`, `einstein-hilbert-action`, `linearized-gravity-static-limit`, `linearized-gravity-dynamic-sources`, `gravitational-waves-quadrupole-formula`, `gravitational-wave-energy-isaacson` |
| 18–23 | `frw-cosmology-from-symmetry`, `frw-redshift-distances`, `schwarzschild-birkhoff-tov`, `buchdahl-equations-of-state-schwarzschild`, `event-horizons-kruskal-kerr`, `schwarzschild-orbits-photon-ring` |

Lectures 18 and 19 derive the Robertson–Walker metric and the Friedmann equations from the field equation and link to the 8.286 pages that reach them in Newtonian form (`friedmann-equation`, `robertson-walker-spacetime`, `cosmological-redshift`) and to 8.902. The course file now describes the whole course, with five themes; the earlier "covers the parts cosmology needs" note is gone, since every lecture has a page. A last commit links lectures written in parallel as prerequisites.

## Lecturer slips (pointed out in brackets, never repeated)

Examples: "3 translations and 4 boosts" for Minkowski (L18); the k → αk rescaling (k/α, L18); "surfaces of constant r are spacelike" outside the horizon (L22); the stable orbit "goes up" as L decreases (L23); the curvature length "tens of thousands of km" (about 2.4 × 10⁸ km, L17); the second-order term of det(1 + ε) (L9); "Riemann normal coordinates" for a metric with Fermi-normal coefficients (L11); 231 as an odd permutation (L4); sound speed as dP/dρ (L21).

## Process notes

- Four writer agents in parallel worktrees, as in run 15. The symbols merge (`data/symbols.json`) now also combines two entries that end up sharing a form, which happened when one writer added a form to an entry another writer had created under another id.
- `python -I` ignores `PYTHONIOENCODING`; a script printing Greek letters to the Windows console must call `sys.stdout.reconfigure(encoding="utf-8")`.

## For the owner

- **Read-aloud gaps (site code, `lib/speech.ts`), avoided on the pages:** `\doteq` (Hughes's "is represented by"), `\underset`, `\mathbf`, `\pounds`, `\longrightarrow`, `\rm`, an index such as `\delta^\alpha_0`, and antisymmetrised indices in brackets (`\nabla_{[\lambda}R_{\alpha\beta]}`, which also confuse the symbol scanner).
- **References added:** Hogg, astro-ph/9905116 (L19); MacTutor on Schwarzschild (L20); MTW §25.5 (L21, no URL); EHT 2019 paper I (L23); Flanagan and Hughes, NJP 7, 204 (2005) (L15).
- **Next:** every course in the order of work has its lectures; see AGENTS.md "Current state" for what remains.
