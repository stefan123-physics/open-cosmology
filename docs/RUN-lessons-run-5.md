# Lessons run 5 (branch `lessons-run`)

An unattended run adding new lessons, started 2026-11-16 at 23:09, planned to stop by 04:09 (five hours).
The branch starts from `main` (649d3df), which already holds runs 1–4.
Rules for the run (owner, as for runs 2–4): new lessons only, plus their calcs, reviews and new entries in `data/symbols.json`;
no changes to existing lessons or site code; one commit per lesson; nothing pushed.

Plan: 8.033 Lectures 7–26 (Quizzes 1 and 2, sessions 11 and 21, have no pages), then 8.04 if time remains.
8.033 (Fall 2006, Max Tegmark) has lecture slides only; pages follow the slides and mark what is not on them.

## Lessons

| # | Lesson | Page | Status | Notes |
|---|---|---|---|---|
| 1 | 8.033 L7: Relativistic kinematics (cont.) | doppler-aberration-twin-paradox | reviewed | pass with notes; GPS fourth satellite, slide 18 rewritten as prose, callout marked as the page's reading |
| 2 | 8.033 L8: Variational calculus | geodesics-calculus-of-variations | reviewed | pass with notes; naming, rest-frame argument for the maximum, callout link to christoffel-symbols |
| 3 | 8.033 L9: Relativistic dynamics and particle physics | brachistochrone-catenary | reviewed | needs changes, fixed: formulas cited to slide 3 marked as the page's own; figure's arc time 3.23 s confirmed wrong (3.28 s) |
| 4 | 8.033 L10: Relativistic dynamics and particle physics (cont.) | momentum-energy-sun | reviewed | needs changes, fixed: slide 4 citations marked as the page's own; fusion dated; β⁺ decay naming |
| 5 | 8.033 L12: Relativistic dynamics and particle physics (cont.) | force-acceleration-interstellar-travel | reviewed | needs changes, fixed: Galileo was not the fastest spacecraft (dated note); slide 4 slip quoted exactly; example (b) reworded |
| 6 | 8.033 L13: Relativistic dynamics and particle physics (cont.) | atoms-photons-nuclei | reviewed | pass with notes; mass excess of the carbon-12 atom, mass number, AME 2020 reference |
| 7 | 8.033 L14: Relativistic dynamics and particle physics (cont.) | particle-processes-unsolved-problems | reviewed | needs changes, fixed: neutrino oscillations predate 2006; slide 35 read the right way; quiz 2 and 3 explanations |
| 8 | 8.033 L15: Relativity and electromagnetism | electricity-implies-magnetism | reviewed | pass with notes; units wording (slides' B = c·B_SI), slide 19 former/latter swap, close wording rewritten |
| 9 | 8.033 L16: Relativity and electromagnetism (cont.) | maxwell-equations-four-potential | reviewed | pass with notes; slide 10 sign slips confirmed; CMB callout corrected (dipole); close wording rewritten |
| 10 | 8.033 L17: The equivalence principle and general relativity | equivalence-principle-metrics | reviewed | needs changes, fixed: callout described 8.286 wrongly (now links robertson-walker-closed, robertson-walker-spacetime, cosmological-redshift); slide 31's 1 − 2φ slip noted |
| 11 | 8.033 L18: General relativity and cosmology | frw-metric-expansion | reviewed | needs changes, fixed: slide 18 and slide 14 descriptions; Robertson and Walker independent; 9.7846 Gyr is a 365-day year. New values in calcs/values.yaml |
| 12 | 8.033 L19: General relativity and cosmology (cont.) | expanding-universe-history | reviewed | needs changes, fixed: slide 11's first-stars correction (200 → 400) read the right way; slide slips noted |
| 13 | 8.033 L20: General relativity and cosmology (cont.) | evidence-for-the-big-bang | reviewed | pass with notes; Riess 1996 not HST; COBE wording; lithium problem; Hubble's distance error |
| 14 | 8.033 L22: General relativity and cosmology (cont.) | cosmology-roundup-mysteries | reviewed | pass with notes; slide descriptions corrected (supernova slides, Bullet Cluster, smoothness), h = 0.73 marked as assumed |
| 15 | 8.033 L23: General relativity and black holes | schwarzschild-black-holes | reviewed | needs changes, fixed: leadsTo reason; first-order Newtonian comparison (time part only); plot descriptions; slide 9 slip confirmed |
| 16 | 8.033 L24: General relativity and black holes (cont.) | evidence-for-black-holes | reviewed | needs changes, fixed: slide 17's 'Sagittarius A*' image is RX J1242-11; effective potential wording; 2006 values dated. Song lyrics only described |
| 17 | 8.033 L25: General relativity and black holes (cont.) | schwarzschild-orbits-perihelion | reviewed | needs changes, fixed: callout now links christoffel-symbols (8.286 L14); spaghetti answer and stability reading marked as the page's own |
| – | 8.04 syllabus | content/year-2/8.04/_course.json | – | MIT's 24 lectures (Spring 2016, Zwiebach) with their lecture-note sources, filled before writing the course (AGENTS.md: fill the syllabus first) |
| 18 | 8.033 L26: General relativity and black holes (cont.) | lensing-evidence-for-gr | reviewed | pass with notes; Friedmann claim marked as the page's own; slide 32 pulsar not named; courtesy entry added; slide 31 and 39 slips noted |
| 19 | 8.04 L1: Key features of quantum mechanics | key-features-of-quantum-mechanics | reviewed | needs changes, fixed: the linear-potential exercise (c₁ makes the equation inhomogeneous); spin wording; notation note (states written Ψ_A, χ_up instead of kets, which read-aloud cannot say) |

## Summary

Run stopped at 00:40 on 2026-11-17 at the owner's request (planned end 04:09), after finishing the lessons in progress.

- **19 new lessons**, each with its own commit, calcs file, independent review (all findings fixed, `status: reviewed`) and page-scoped symbol meanings:
  - **8.033 Relativity is now complete**: Lectures 7–10, 12–20 and 22–26 (18 pages; Lectures 11 and 21 are quizzes). Topics: Doppler effect and the twin paradox, variational calculus and geodesics, relativistic momentum and energy, particle physics, electromagnetism from relativity, the equivalence principle and metrics, four cosmology lectures, and four on black holes and the tests of general relativity.
  - **8.04 Quantum Physics I**: Lecture 1 (key features of quantum mechanics), after filling the course's 24-lecture syllabus from MIT's calendar and lecture notes.
- **Shared data**: new entries in `data/symbols.json` (each scoped to its page) and in `calcs/values.yaml` (the 2005–2006 cosmological parameters quoted on the 8.033 slides, and computed ages and expansion rates, each with its role).
- **Source slips noted on the pages** (rule 4), among them: the brachistochrone figure's circular-arc time (3.28 s, not 3.23 s); sign slips in the Lorenz-gauge slide; the Hulse–Taylor orbit shrinking 3.1 mm per orbit, not per year; slide 17 of Lecture 24 labelling a distant tidal disruption as Sagittarius A*.
- **Not done**: no pushes or deploys. The 8.04 pages use subscript names (Ψ_A, χ_up) instead of Dirac kets, because read-aloud cannot yet say "|" and "⟩"; a speech rule for kets would let later 8.04 pages use the standard notation.
- **Build**: `npm run build` passes with 0 errors and 0 warnings; `npm run calc:test` passes (3521 tests).
