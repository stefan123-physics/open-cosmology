# Year IV: filling out the senior year (proposed 2026-11-18)

**Status: decided by the owner on 2026-11-18** (8.07, 8.08 and 8.09 join Year IV, before 8.962). **Built:** 8.07 in run 14 (21 pages, docs/RUN-lessons-run-14.md); 8.08 (26 pages) and 8.09 (38 pages) in run 15 (docs/RUN-lessons-run-15.md). As built, 8.08's lecture numbers are its chapters (the second Bose-gas PDF is 7.5, the supplements 10 and 11) and 8.09's are its sections (1.1 … 7.6; the notes do not mark the 26 lectures). Open: decision 3 below (a stars source).

## The problem

Year IV holds one course, 8.286 (44 pages). The other years hold three to five courses each. An MIT physics student's senior year also has the advanced core: Electromagnetism II, Statistical Physics II and Classical Mechanics III, plus the Junior Lab. Without them the bachelor's core skips topics that 8.286, 8.902 and 8.962 rely on:

- **Radiation and multipoles** (8.07). These are behind the CMB's spherical harmonics and C_ℓ, and Thomson scattering.
- **Index notation and tensors** (8.07). 8.962 assumes them from its first lecture.
- **Bose and Fermi gases and blackbody radiation** (8.08). These are behind the thermal history, BBN, neutrino decoupling, white dwarfs and neutron stars.
- **Hamiltonian mechanics, perturbation theory and fluids** (8.09). These are behind the inflaton field, the Jeans equations and the fluid equations of structure formation.

## Candidates (checked on OCW 2026-11-18)

All four courses are undergraduate, carry OCW's CC BY-NC-SA 4.0 licence, and show no "All rights reserved" notice on their course pages.

| Course | OCW version | Source material | Notices | Verdict |
|---|---|---|---|---|
| **8.07 Electromagnetism II** | [Fall 2012](https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/), **Alan Guth** and Min Chen | 17 lecture-note PDFs, 10 problem sets, quizzes and final with solutions; no videos | Lecture notes 13 is "Courtesy of Hongsheng Chen and Min Chen. Used with permission." | **Add.** It is taught by Guth, so it shares his style and notation with 8.286. |
| **8.08 Statistical Physics II** | [Spring 2005](https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/), Xiao-Gang Wen | 9 lecture-note chapters plus 2 supplementary notes, 12 problem sets; no videos | Course image "courtesy of" Wen (image only) | **Add.** It closes the statistical-physics gap between 8.044 and the thermal history. |
| **8.09 Classical Mechanics III** | [Fall 2014](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/), Iain Stewart | Full course notes in 7 chapters (26 lectures), problem sets; no videos or exams | Course image only | **Add.** The prerequisite 8.223 (Classical Mechanics II) is a January course; check whether OCW has it before writing. |
| 8.284 Modern Astrophysics | [Spring 2006](https://ocw.mit.edu/courses/8-284-modern-astrophysics-spring-2006/), Paul Schechter | **Problem sets only**: no lecture notes, slides or videos; a 38-session calendar | Course image courtesy of W. C. Keel / APOD | **Not as lessons.** Nothing exists to rewrite. Its stars topics (polytropes, radiative transport, nuclear burning) are the site's real gap, but they need another source; its problem sets can serve ROADMAP §2. |
| 8.13/8.14 Junior Lab | [Fall 2016–Spring 2017](https://ocw.mit.edu/courses/8-13-14-experimental-physics-i-ii-junior-lab-fall-2016-spring-2017/) | Experiment guides | Not checked in detail | **Belongs to the lab plan** (ROADMAP §4), not to lessons. |
| 8.20 Special Relativity | [IAP 2021](https://ocw.mit.edu/courses/8-20-introduction-to-special-relativity-january-iap-2021/) | Notes, problem sets, exams | Not checked in detail | **Skip.** 8.033 already covers it. |

## Lecture lists

### 8.07 (Fall 2012), lecture notes as numbered on OCW

1. Vector Analysis
2. Rotations in Index Notation
3. Integral Formulation of Basic Equations
4. Conductors: Surface Forces and Capacitance
5. Image Charge Method; Separation of Variables
6. Separation of Variables in Spherical Coordinates
7. A Spherical Shell of Charge with a Circular Hole
8. The Traceless Symmetric Tensor Expansion and Standard Spherical Harmonics
9. Traceless Symmetric Tensor Approach to Legendre Polynomials and Spherical Harmonics
10. Magnetic Multipole Expansion and Magnetic Dipoles
11. Magnetic Dipoles and Magnetic Fields in Matter
12. Reversed Cherenkov Radiation in Left-Handed Meta-material (Min Chen, a research talk)
13. Flipping Photons Backward (Courtesy of H. Chen and M. Chen): **do not use**
14. Electromagnetic Waves
15. Potentials and Fields
16. Radiation
17. E&M Review on Waves, Potentials, and Radiation (Min Chen)

Proposal:
- Write a page for each of 1–11 and 14–16 (about 16–18 pages).
- Treat 12 as a short optional page or leave it out.
- Skip 13.
- 17 is a review lecture, so it follows the open question on exam-review pages.

The OCW course page numbers the topics 1–16 while the files run to 17. Use the file numbers (`mit8_07f12_lnN`) and note it in `_course.json`.

### 8.08 (Spring 2005), lecture-note chapters

I. Canonical Ensemble · II. Interacting Classical Gas and van der Waals · III. Ising Model · IV. Grand Canonical Ensemble · V. Random Variable · VI. Thermal Fluctuations · VII. The Bose Gas · VIII. The Fermi Gas · IX. Transport · supplements: Quantum Theory for Interacting Bosons; Statistical Ensembles.

The course has chapters, not numbered lectures. Use the chapter as the "lecture" number (1–9), as textbook courses use section numbers. Long chapters (Bose gas, Fermi gas, transport) become two or three pages each, about 20 pages in all. Before writing, read every PDF for "courtesy" and "rights reserved". The 2005 notes may contain figures from Huang's textbook, the course's required text.

### 8.09 (Fall 2014), course-note chapters

1. A Review of Analytical Mechanics
2. Rigid Body Dynamics
3. Vibrations & Oscillations
4. Canonical Transformations, Hamilton–Jacobi Equations, and Action-Angle Variables
5. Perturbation Theory
6. Fluid Mechanics
7. Chaos and Non-Linear Dynamics

Use one page per chapter section, about 20–25 pages. Map the chapters to the 26 lectures if the notes mark lecture boundaries; otherwise number by chapter.

## Where they go and in what order

- **Folders:** `content/year-4/8.07`, `content/year-4/8.08`, `content/year-4/8.09`, each with a `_course.json` (`syllabus` = the list above; `role: "physics"`). URLs contain no year, so nothing existing moves.
- **Year text:** `content/year-4/_year.json` is now titled "Cosmology". It would become, for example, "Cosmology and the advanced core", with `short` at most 40 characters. 8.286 stays the main subject.
- **Links forward:** each page ends with a cosmology callout and `leadsTo` where a real link exists. Some examples:
  - 8.07 spherical harmonics → `cmb-anisotropies`.
  - 8.08 Bose gas → the CMB and thermal-history pages.
  - 8.08 Fermi gas → white dwarfs and BBN.
  - 8.09 fluids → `jeans-equations`.
- **Order of work:** after 8.06 and **before 8.962**:
  1. 8.07 first, because 8.962 needs its index notation and tensors.
  2. 8.08.
  3. 8.09.
  4. 8.962.

  The order in AGENTS.md "Scope" and in PLAN.md §6 would change accordingly.
- **Size:** about 60 pages, or roughly three unattended lessons runs.

## Copyright checks before each course

As for every course (AGENTS.md "Source workflow"):
- Download all PDFs outside the repository.
- Search them for "rights reserved" and "courtesy".
- Never reuse a credited figure; draw our own instead.

8.07's lecture 13 is already known to be "courtesy" material and is skipped.

## Decisions for the owner

1. Add 8.07, 8.08 and 8.09 to Year IV (recommended), or keep Year IV as 8.286 alone.
2. Order: the three courses before 8.962 (recommended), or after it.
3. Stars (stellar structure and evolution) have no lecture-note source on OCW. Should a textbook course fill this gap, as Ferreras does for dark matter? This would need a search for an openly licensed stellar astrophysics text.
