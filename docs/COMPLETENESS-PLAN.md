# Making the programme complete: gaps and sources (researched 2026-11-18)

**Status: proposal, needs the owner's decisions** (listed at the end). Nothing is started.

## Already planned, not repeated here

- 8.06 and its lecture list.
- The Year IV courses 8.07, 8.08 and 8.09 ([YEAR-IV-PLAN.md](YEAR-IV-PLAN.md), decided 2026-11-18).
- 8.962.
- Problem sets, exams and labs ([ROADMAP.md](../ROADMAP.md) §2–4).
- People, history and the rest of [PLAN.md](PLAN.md) §8.
- The open question of exam-review pages.

This plan asks a different question: once all of that exists, which **subjects** would a physics graduate with a cosmology specialisation still be missing, and is there a source we may legally rewrite?

## The gaps

| Gap | Why it matters for this site | Proposed source | Licence (checked 2026-11-18) | Size | Priority |
|---|---|---|---|---|---|
| **Stars** (structure, nuclear burning, white dwarfs, supernovae) | 8.286 and 8.902 rely on stars throughout: Type Ia supernovae and dark energy, white dwarfs, stellar populations, nucleosynthesis. The site never explains how a star works. | Edward Brown, *Stellar Astrophysics* (Michigan State, Open Astrophysics Bookshelf) | **CC BY-NC-SA 4.0** "except where explicitly noted", the same licence as the site | about 30 pages | **High** |
| **Probability and statistics** | Every cosmological parameter is a statistical inference (likelihoods, Bayesian updating, confidence intervals). It is also the base of the planned data-analysis tool and labs (ROADMAP §4). | MIT [18.05 Introduction to Probability and Statistics](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/), Spring 2022, Orloff and French Kamrin | OCW CC BY-NC-SA 4.0; full readings, slides, problem sets and exams with solutions | about 25 pages | **High** |
| **Complex analysis** | 8.05, 8.06 and 8.07 use contour integrals, residues, the Laplace transform and the gamma function; the site has no course that teaches them. | MIT [18.04 Complex Variables with Applications](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/), Spring 2018, Orloff | OCW CC BY-NC-SA 4.0; lecture notes for all 37 sessions, problem sets and exams with solutions | about 25 pages | Medium |
| **Classical Mechanics II** | It is the stated prerequisite of 8.09; without it, 8.09 builds on 8.01 directly. | MIT [8.223 Classical Mechanics II](https://ocw.mit.edu/courses/8-223-classical-mechanics-ii-january-iap-2017/), January 2017, Evans | OCW CC BY-NC-SA 4.0; lecture notes, problem sets with solutions | about 8–10 pages (a short January course) | Medium (before 8.09) |
| **Nuclear and particle physics** | It explains the Standard Model behind several existing pages: neutron–proton freeze-out (weak interactions), neutrino decoupling, the Higgs field and grand unified theories (8.286), and dark matter candidates. | MIT [8.701 Introduction to Nuclear and Particle Physics](https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/), Fall 2020, Klute | OCW CC BY-NC-SA 4.0; short videos, lecture slides and notes, problem sets with solutions. It is a **graduate** course (Year V). | about 35–40 pages | Medium (after 8.962) |

### Notes per source

- **Brown, *Stellar Astrophysics*.**
  - It would be a textbook course like Ferreras: `"kind": "textbook"`, sections as "lectures", the publisher's attribution on every page.
  - Chapters:
    1. The Sun on a Blackboard
    2. Equations of Stellar Structure
    3. Convection
    4. Polytropes
    5. Equation of State
    6. Radiation Transport
    7. Transport in a Plasma
    8. Stellar Atmospheres
    9. Contraction to the Main Sequence
    10. Nuclear Physics
    11. Main Sequence
    12. Low-Mass Post-Main Sequence
    13. Stellar Pulsations
    14. The Initial Mass Function
    15. Binaries
  - The author says the stellar-evolution chapters are not finished. White dwarfs, supernovae and neutron stars therefore need a second source, for example OpenLearn's *White dwarfs and neutron stars* (Open University, adapted from module S384). Its licence badge is ambiguous (BY-NC or BY-NC-SA) and it excludes third-party material, so check its licence before using it, or use it for fact-checking only.
  - The cover image is credited to David Malin/AAO: never reuse it, and check every figure for "noted" exceptions.
  - Cite the git version stamp on the copyright page.
  - Placement: Year IV, after 8.08, because it needs the equation of state and quantum gases.
- **18.05.** Orloff's readings are full prose notes, so they work as source text. Interactive reading questions live on MITx and are not needed. Placement: Year II, as a maths course alongside the labs.
- **18.04.** Placement: Year III, maths alongside 8.05/8.06. Check the notes for "courtesy" figures; the course image is the author's own.
- **8.223.** Only the course home page was checked; read the lecture notes page and check the PDFs before writing. Placement: Year II (MIT students take it in January of the second year).
- **8.701.** Many short videos (chapters 0–10: Introduction, Fermions, bosons and fields, Symmetries, Feynman calculus, QED, QCD, Weak interactions, Higgs physics, Neutrino physics, Nuclear physics, Instrumentation). The slides very likely contain third-party figures (detectors, CERN, PDG plots): check each slide's credit and draw our own diagrams. Placement: Year V (graduate), with `"level": "graduate"`.

## Source check for 8.962 (already planned)

- [8.962 Spring 2020](https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/) (Hughes) has 23 lecture videos and a Lecture Guide PDF on OCW. Its 25 lecture summaries cover tensors through black holes; Lectures 24–25 were not recorded.
- Hughes's own typed and handwritten notes live on web.mit.edu, **not on OCW**. They carry **no licence**, so use them for fact-checking only, like Tong and Feynman.
- Before the 8.962 run, check that each video page has a transcript PDF. If it does, the workflow is the same as for 8.286 (transcript plus Lecture Guide).

## Checked and not proposed

| Source | Why not |
|---|---|
| [8.284 Modern Astrophysics](https://ocw.mit.edu/courses/8-284-modern-astrophysics-spring-2006/) (2006) | Problem sets only, no notes. Its problem sets can serve ROADMAP §2. |
| [8.901 Astrophysics I](https://ocw.mit.edu/courses/8-901-astrophysics-i-spring-2006/) (2006, graduate) | Problem sets only. Its 26-session calendar is a good checklist for the stars course, and its problem sets can serve ROADMAP §2. |
| [8.902 Astrophysics II](https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2004/pages/lecture-notes/) (Fall 2004, Schechter) | Notes exist only for sessions 1–11 (galaxies), which the 2023 notes already cover. The sessions on lensing, the Sunyaev–Zeldovich effect and Press–Schechter have no notes. |
| Stellar-structure notes by Christensen-Dalsgaard, Pols and Ball; MIT 8.901 notes by Crossfield | No licence found: fact-checking only. |
| OpenLearn *Comparing stars* | Withdrawn by the Open University. |
| [8.20 Special Relativity](https://ocw.mit.edu/courses/8-20-introduction-to-special-relativity-january-iap-2021/) | Already covered by 8.033. |

## Topics still without a source

These have no lecture-note source we may use. They can be linked from "Further reading" until one turns up:

- Gravitational lensing (strong and weak), unless Ferreras already covers it.
- The Sunyaev–Zeldovich effect.
- The Press–Schechter mass function.
- Numerical (N-body) simulation.

Before adding them to this list for good, check them against the Ferreras syllabus and 8.902 (2023).

## Suggested order (fitting into the existing order of work)

Existing: 8.06 → 8.07 → 8.08 → 8.09 → 8.962.

Proposed:
1. 8.06 + **18.04** (maths alongside, as the rule for maths courses says).
2. 8.07.
3. 8.08.
4. **Brown, *Stellar Astrophysics***.
5. **8.223**.
6. 8.09.
7. 8.962.
8. **8.701**.

**18.05** goes in whenever the labs and data tool start (ROADMAP §4), because they share the same statistics.

Size: about 125–130 more pages, roughly five or six unattended lessons runs. With the Year IV courses and 8.06/8.962, the programme would reach roughly 600 pages.

## Decisions for the owner

1. Stars: use Brown's *Stellar Astrophysics* (CC BY-NC-SA 4.0) as a Year IV textbook course? (Recommended.)
2. Add 18.05 (Year II) and 18.04 (Year III) as maths courses? (Recommended: 18.05 before the labs.)
3. Add 8.223 (Year II) as the prerequisite of 8.09?
4. Add 8.701 as a Year V graduate course after 8.962?
5. Accept the order above, or keep 8.962 earlier.
