# Plan: replacing Siyavula in the High School (only if needed)

Written 2026-11-28 by Account B at the owner's request. **Nothing in this plan is started.** It is the plan to follow only if Siyavula replies that the textbook pages we use may not be adapted (or that their CC BY footer does not mean what it says). If Siyavula confirms CC BY 3.0, this plan is not needed. Sources and their terms: `audits/sources/high-school-replacement-sources.md` (checked 2026-11-28; not legal advice).

## 1. When to start

- **Start** if Siyavula's reply says the section pages we cite are not CC BY, or not open to adaptation.
- **Do not start** if Siyavula confirms CC BY 3.0 for the pages with the Creative Commons footer (all 99 pages we cite carry it).
- **No reply:** the owner decides after a few weeks; our current use rests on the pages' own CC BY footer and the archived copies of 2026-11-21 (`docs/licences/siyavula-archive.tsv`).
- If it starts: from that day, **no Siyavula text enters any AI session** (no reading of its pages), as for OpenStax.

## 2. The safest sources (licence open to adaptation into CC BY-NC-SA, and AI use allowed or not restricted)

| Rank | Source | Licence | AI use | Use for |
|---|---|---|---|---|
| 1 | **MIT OpenCourseWare** (8.01SC, 8.02, 8.03, 8.04, 22.01, RES.8-009, RES.8-010, RES.18-005, 18.01SC) | CC BY-NC-SA 4.0 | **explicitly allowed** (terms "Permitted Use of AI Training", non-commercial, with attribution) | all physics blocks, maths |
| 1 | **OpenLearn** (Open University free courses) | CC BY-NC-SA 4.0 | **explicitly allowed**: robots.txt names GPTBot, ClaudeBot and others with `Allow: /` | support in every block; waves, particles, the Universe |
| 2 | **NASA** (Glenn *Beginner's Guide to Aeronautics*, Imagine the Universe, science.nasa.gov) | US public domain | no restriction on text; brand rules only (no insignia with AI output, never "according to NASA") | motion, forces, energy, **heat and gases**, spectra, astronomy |
| 3 | **Open Yale Courses** (PHYS 200, PHYS 201, ASTR 160) | CC BY-NC-SA 3.0 | no AI clause; robots.txt has no AI rules | mechanics, heat, waves, E&M, atoms, astronomy |
| 3 | **Stitz–Zeager *Precalculus***, **CLP Calculus** | CC BY-NC-SA | no AI clause | Block 0 maths |
| 3 | **MIT BLOSSOMS** | CC BY-NC-SA 3.0 | no AI clause | single topics in Blocks 0–8 |
| 3 | **Murphy, *Energy and Human Ambitions*** | CC BY-NC 4.0 | no AI clause; text only (third-party images excluded) | energy, heat, nuclear |
| 3 | **ESO** (press releases, captions, pictures of the week) | CC BY 4.0 | asks to say when AI was used | Block 8 |
| 3 | **PhET** | CC BY-NC 4.0 | no AI clause | simulations (kept as now) |

Ranks 1–2 first; rank 3 only where ranks 1–2 do not reach the topic at school level. **Never:** OpenStax, Body Physics, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, Wikipedia/Wikibooks, Light and Matter, ESA/CERN text, Isaac Physics, BCcampus, TeachEngineering, Springer (AGENTS.md Writing rules 10–11).

## 3. Method, per lesson

1. **No Siyavula in the session.** The writer must not work from Siyavula, nor from our current text derived from it. So the writer gets only the lesson's **topic list** (its `##` headings, its prerequisites, its place in the block) and the replacement sources, and writes the lesson afresh: new explanations, new worked examples with our own numbers, new quiz.
2. Keep what is ours and not from Siyavula: PhET simulations, generated plots, "Towards the universe" callouts drawn from MIT/NASA, slugs (so links and saved progress stay), the block structure and lesson list (docs/HIGHSCHOOL-PLAN.md §4).
3. New `source`/`readings` and `references` from the sources of §2; remove "From siyavula.com" from the credits.
4. calcs file recomputed, symbols checked, review by the `highschool-reviewer` agent against the new sources, `status: reviewed`.
5. Practice sets (`hs-N-practice`): rewritten after their block's lessons, with new problems.

## 4. The 83 pages that use Siyavula

"Light": the page cites one or two Siyavula sections and already cites other text sources (often MIT OCW or NASA), so most of its structure stands on those; "heavy": three or more Siyavula sections, or no other text source.

| Block | Page | Siyavula pages cited | Other text sources already cited | Work |
|---|---|---|---|---|
| hs-0 | `angles-and-trigonometry` (Angles, radians and trigonometry) | 3 | ocw.mit.edu, stitz | heavy |
| hs-0 | `exponentials-and-logs` (Exponentials and logarithms) | 4 | ocw.mit.edu | heavy |
| hs-0 | `graphs-and-slope` (Graphs, straight lines and slope) | 3 | none | heavy |
| hs-0 | `hs-0-practice` (Block 0 practice set: the maths toolkit) | 2 | none | heavy |
| hs-0 | `introducing-vectors` (Vectors) | 5 | none | heavy |
| hs-0 | `powers-of-ten` (Powers of ten and scientific notation) | 4 | nasa.gov, ocw.mit.edu | heavy |
| hs-0 | `quadratics-and-power-laws` (Quadratics and power laws) | 3 | stitz | heavy |
| hs-0 | `rates-of-change-and-area` (Rates of change and area under a graph) | 4 | none | heavy |
| hs-0 | `rearranging-formulas` (Solving and rearranging formulas) | 1 | stitz | light |
| hs-0 | `significant-figures-and-estimates` (Significant figures and estimates) | 2 | ocw.mit.edu | light |
| hs-0 | `units-and-si` (Units and the SI system) | 1 | none | heavy |
| hs-1 | `acceleration` (Acceleration) | 1 | ocw.mit.edu | light |
| hs-1 | `constant-acceleration` (Equations for constant acceleration) | 1 | ocw.mit.edu | light |
| hs-1 | `distance-and-displacement` (Distance and displacement) | 3 | none | heavy |
| hs-1 | `free-fall` (Free fall) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-1 | `hs-1-practice` (Block 1 practice set: motion) | 6 | nasa.gov, ocw.mit.edu | heavy |
| hs-1 | `position-time-graphs` (Position–time graphs) | 2 | ocw.mit.edu | light |
| hs-1 | `projectile-motion` (Projectile motion) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-1 | `relative-velocity` (Relative velocity) | 3 | ocw.mit.edu | heavy |
| hs-1 | `speed-and-velocity` (Speed and velocity) | 3 | ocw.mit.edu | heavy |
| hs-1 | `towards-the-universe-light-travel-time` (Towards the universe: light-travel time and looking bac) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-1 | `velocity-time-graphs` (Velocity–time graphs) | 1 | ocw.mit.edu | light |
| hs-2 | `centripetal-force` (Centripetal force) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-2 | `friction-and-drag` (Friction and drag) | 1 | ocw.mit.edu | light |
| hs-2 | `hs-2-practice` (Block 2 practice set: forces and gravity) | 3 | ocw.mit.edu | heavy |
| hs-2 | `inclined-planes` (Inclined planes) | 2 | ocw.mit.edu | light |
| hs-2 | `newtons-first-law` (Newton's first law: inertia) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-2 | `newtons-law-of-gravitation` (Newton's law of gravitation) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-2 | `newtons-second-law` (Newton's second law) | 4 | nasa.gov, ocw.mit.edu | heavy |
| hs-2 | `newtons-third-law` (Newton's third law) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-2 | `towards-the-universe-weighing-with-orbits` (Towards the universe: weighing the Sun and the Galaxy w) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-2 | `weight-normal-and-tension` (Weight, normal force and tension) | 3 | nasa.gov, ocw.mit.edu | heavy |
| hs-2 | `what-is-a-force` (What is a force?) | 2 | ocw.mit.edu | light |
| hs-3 | `collisions` (Collisions) | 1 | ocw.mit.edu | light |
| hs-3 | `conservation-of-energy` (Conservation of energy) | 2 | ocw.mit.edu | light |
| hs-3 | `gravitational-potential-energy` (Gravitational potential energy) | 1 | ocw.mit.edu | light |
| hs-3 | `hs-3-practice` (Block 3 practice set: energy and momentum) | 7 | nasa.gov, ocw.mit.edu, open.edu | heavy |
| hs-3 | `kinetic-energy` (Kinetic energy and the work–energy theorem) | 1 | ocw.mit.edu | light |
| hs-3 | `momentum-is-conserved` (Conservation of momentum) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-3 | `what-is-momentum` (Momentum and impulse) | 4 | ocw.mit.edu | heavy |
| hs-3 | `work` (Work) | 1 | ocw.mit.edu | light |
| hs-4 | `conduction-and-convection` (Conduction and convection) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-4 | `density-and-pressure` (Density and pressure) | 3 | nasa.gov, ocw.mit.edu | heavy |
| hs-4 | `heat-and-specific-heat` (Heat and specific heat) | 2 | ocw.mit.edu | light |
| hs-4 | `hs-4-practice` (Block 4 practice set: matter and heat) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-4 | `ideal-gas-law` (The ideal gas law) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-4 | `kinetic-theory` (Kinetic theory: temperature is motion) | 3 | nasa.gov, ocw.mit.edu | heavy |
| hs-4 | `phase-changes` (Phase changes and latent heat) | 3 | nasa.gov, ocw.mit.edu | heavy |
| hs-4 | `temperature` (Temperature and thermal energy) | 4 | nasa.gov, ocw.mit.edu | heavy |
| hs-5 | `doppler-effect-sound` (The Doppler effect for sound) | 3 | ocw.mit.edu | heavy |
| hs-5 | `electromagnetic-spectrum` (Light and the electromagnetic spectrum) | 4 | nasa.gov | heavy |
| hs-5 | `hs-5-practice` (Practice set: waves, sound and light) | 6 | nasa.gov, ocw.mit.edu, open.edu | heavy |
| hs-5 | `interference-and-diffraction-of-light` (Interference and diffraction) | 4 | ocw.mit.edu | heavy |
| hs-5 | `reflection-and-refraction` (Reflection and refraction) | 7 | none | heavy |
| hs-5 | `simple-harmonic-motion` (Oscillations and simple harmonic motion) | 1 | ocw.mit.edu | light |
| hs-5 | `sound` (Sound and intensity) | 1 | nasa.gov, ocw.mit.edu, open.edu | light |
| hs-5 | `superposition-and-standing-waves` (Superposition and standing waves) | 1 | ocw.mit.edu | light |
| hs-5 | `towards-the-universe-redshift` (Towards the universe: redshift, stretched light from mo) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-5 | `waves` (Waves: speed, frequency, wavelength) | 3 | none | heavy |
| hs-6 | `coulombs-law` (Coulomb's law) | 2 | none | heavy |
| hs-6 | `electric-charge` (Electric charge) | 4 | none | heavy |
| hs-6 | `electric-field` (The electric field) | 3 | ocw.mit.edu | heavy |
| hs-6 | `electric-potential-and-voltage` (Electric potential and voltage) | 1 | ocw.mit.edu | light |
| hs-6 | `electric-power` (Electric power and energy) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-6 | `electromagnetic-induction` (Electromagnetic induction) | 3 | ocw.mit.edu | heavy |
| hs-6 | `fields-from-currents` (Magnetic fields from currents) | 1 | ocw.mit.edu | light |
| hs-6 | `hs-6-practice` (Practice set: electricity and magnetism) | 7 | ocw.mit.edu | heavy |
| hs-6 | `light-as-an-electromagnetic-wave` (Electromagnetic waves) | 1 | ocw.mit.edu | light |
| hs-6 | `magnetic-fields-and-force` (Magnetic fields and magnetic force) | 4 | ocw.mit.edu | heavy |
| hs-6 | `towards-the-universe-why-gravity-rules` (Towards the universe: why gravity, not electricity, rul) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-7 | `bohr-atom-and-spectral-lines` (The Bohr atom and spectral lines) | 2 | ocw.mit.edu | light |
| hs-7 | `discovering-the-atom` (Discovering the atom and its nucleus) | 2 | ocw.mit.edu | light |
| hs-7 | `hs-7-practice` (Practice set: atoms and radiation) | 4 | nasa.gov, ocw.mit.edu | heavy |
| hs-7 | `photoelectric-effect` (The photoelectric effect) | 1 | ocw.mit.edu | light |
| hs-7 | `radiation-and-health` (Radiation and health) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-7 | `spectra-in-astronomy` (Spectra in astronomy) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-7 | `the-nucleus` (The nucleus: protons, neutrons, isotopes) | 4 | nasa.gov, ocw.mit.edu | heavy |
| hs-7 | `thermal-radiation-and-photons` (Thermal radiation and Planck's photons) | 2 | ocw.mit.edu | light |
| hs-7 | `towards-the-universe-reading-starlight` (Towards the universe: what starlight tells us) | 1 | nasa.gov, ocw.mit.edu | light |
| hs-8 | `how-stars-shine` (How stars shine) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-8 | `hs-8-practice` (Practice set: modern physics and the universe) | 2 | nasa.gov, ocw.mit.edu | light |
| hs-8 | `mass-and-energy` (Mass and energy: E = mc²) | 3 | nasa.gov, ocw.mit.edu | heavy |
| hs-8 | `matter-waves-and-uncertainty` (Waves of matter and the uncertainty principle) | 1 | nasa.gov, ocw.mit.edu | light |

- **hs-0**: 2 light, 9 heavy. Replacement sources: Stitz–Zeager, CLP Calculus, MIT OCW 18.01SC/RES.18-005, OpenLearn maths, NASA (scales).
- **hs-1**: 7 light, 4 heavy. Replacement sources: MIT OCW 8.01SC, NASA Glenn, Open Yale PHYS 200, OpenLearn.
- **hs-2**: 8 light, 3 heavy. Replacement sources: MIT OCW 8.01SC, NASA Glenn, Open Yale PHYS 200.
- **hs-3**: 6 light, 2 heavy. Replacement sources: MIT OCW 8.01SC, NASA Glenn, Open Yale PHYS 200, Murphy.
- **hs-4**: 4 light, 4 heavy. Replacement sources: NASA Glenn, MIT RES.8-010, Open Yale PHYS 200 L20–24, Murphy.
- **hs-5**: 4 light, 6 heavy. Replacement sources: MIT RES.8-009 and 8.03, OpenLearn "What are waves?", Open Yale PHYS 200/201, NASA EM spectrum.
- **hs-6**: 5 light, 6 heavy. Replacement sources: MIT OCW 8.02, Open Yale PHYS 201, OpenLearn, PhET.
- **hs-7**: 7 light, 2 heavy. Replacement sources: MIT OCW 22.01 and 8.04, NASA Imagine the Universe, Open Yale PHYS 201, OpenLearn.
- **hs-8**: 3 light, 1 heavy. Replacement sources: NASA, ESO, OpenLearn, MIT OCW 8.286, Open Yale ASTR 160.

Total: 46 light, 37 heavy.

## 5. Effort and split

- About 20 minutes per light page and 45 minutes per heavy page with review, so **about 40–45 hours of agent work**: 5–7 five-hour windows across both accounts.
- **Split, A the larger share** (A's PC is faster): **Account A: Blocks 0, 4, 5, 6 and 8** (44 pages, 26 heavy: the maths toolkit and the blocks where school-level sources are thinnest); **Account B: Blocks 1, 2, 3 and 7** (39 pages, 11 heavy).
- Order: each block's lessons in order, then its practice set; one commit per lesson, as in the lessons runs.

## 6. Code and rule changes (Account A's files), on the day it starts

- `scripts/check-content.ts`: add Siyavula to `FORBIDDEN_SOURCES` once every page is rewritten (until then a warning per page still citing it).
- `components/Credit.tsx`: drop the Siyavula credit; `scripts/new-page.ts`: drop the Siyavula template.
- AGENTS.md Writing rule 11 and docs/HIGHSCHOOL-PLAN.md §2.0: Siyavula moved to "not used", with the reason and the date; the new sources of §2 added.
- Keep `docs/licences/siyavula*.{md,tsv}` and the archived copies as the record of what the licence said when the pages were written.

## 7. Known thin spots (write our own where the sources stop)

Units, scientific notation and significant figures (Block 0); phase changes and latent heat (Block 4: NASA Glenn and Murphy help); sound and lenses at school level (Block 5); simple circuits at school level (Block 6: MIT 8.02 and PhET, written down to school level); atom models (Block 7: NASA Imagine the Universe, MIT 22.01).
