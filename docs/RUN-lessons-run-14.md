# Lessons run 14 (2026-11-18)

Branch `lessons-run-14`, from `main` after PR #77 (18:03 to 21:15). The first Year IV course after 8.286: **8.07 Electromagnetism II** (Fall 2012, Guth and Chen). Stopped at the owner's request after the lesson in progress (Lecture 16) was finished; that covers every set of 8.07 lecture notes the site uses. Each lecture is one commit, with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

New this run (owner's prompt 4 in OWNER-TODO §10, "ship as you go"): finished lessons went out in small pull requests during the run (#78–#85 and the last one), each merged once its checks passed, and the new pages were checked on the live site before the run went on.

## Setting up the course

- `content/year-4/8.07/_course.json`: the 17 lecture-note PDFs as the syllabus (lecture = file number), six topics, and notes on the source. 8.07 sits second in Year IV after 8.286.
- The source is Guth's lecture notes, not videos: typed notes (1, 2, 4, 7, 8, 9), handwritten scans (3, 5, 6, 10) and slides (11 handwritten; 14, 15, 16 typeset). Writers read the handwritten ones from page images.
- Not used: notes 12 (Min Chen's research talk, optional in the plan; images removed for copyright), notes 13 ("Courtesy of Hongsheng Chen and Min Chen"), notes 17 (the final review; exam-review pages are still an open decision). OCW has no other notes for the class lectures between notes 11 and 14.
- Never reused: the YouTube stills in notes 15 (outside the CC licence), the Griffiths diagrams in notes 16, and all MIT figures.

## Added (21 pages)

| Lecture | Page | Review |
|---|---|---|
| 1 | `vector-analysis` | pass with notes, resolved |
| 2 | `rotations-index-notation` | needs changes (a figure "slip" that the high-resolution image showed was not one), fixed |
| 3 | `integral-form-electrostatics` | pass with notes, resolved |
| 3 | `electrostatic-energy-self-energy` | pass with notes, resolved (gravity formula and Abraham–Lorentz force attributed exactly); later citation fix from Lecture 16 |
| 4 | `conductor-surface-forces-capacitance` | pass with notes, resolved (a sign slip in the notes' (4.11)) |
| 5 | `method-of-images-uniqueness` | pass with notes, resolved |
| 5 | `separation-of-variables-cartesian` | pass with notes, resolved |
| 6 | `separation-of-variables-spherical` | pass with notes, resolved |
| 7 | `spherical-shell-circular-hole` | pass with notes, resolved |
| 8 | `spherical-harmonics-from-traceless-tensors` | pass with notes, resolved; corrects a sign error in the notes' (8.42)–(8.43) for odd negative m (confirmed against Condon–Shortley Y_ℓm) |
| 9 | `traceless-tensors-legendre-polynomials` | needs changes (one wording error), fixed |
| 9 | `multipole-expansion-traceless-tensors` | pass with notes, resolved |
| 10 | `magnetic-multipole-expansion-dipoles` | pass with notes, resolved |
| 11 | `ideal-magnetic-dipole-current` | pass with notes, resolved |
| 11 | `magnetic-dipole-force-torque-maxwell` | pass with notes, resolved |
| 14 | `wave-equation-group-velocity` | needs changes (the carrier factor of a wave packet), fixed |
| 14 | `electromagnetic-plane-waves-reflection` | pass with notes, resolved |
| 15 | `potentials-gauges-retarded-solutions` | pass with notes, resolved |
| 15 | `lienard-wiechert-point-charge-fields` | pass with notes, resolved |
| 16 | `electric-magnetic-dipole-radiation` | pass with notes, resolved |
| 16 | `larmor-formula-radiation-reaction` | needs changes (a near-verbatim paragraph from slide 24, rewritten in own words), fixed |

Every page has its own worked example with its own numbers, and most have a generated graph. Cosmology links where genuine: the CMB multipole expansion (L6, L8), negative gravitational energy and inflation (L3), tree codes in N-body simulations (L9), the 21 cm line and rotation curves (L10), magnetic monopoles (L11), radiation pressure (L14), Thomson scattering and decoupling (L15, L16).

After this run there are 436 pages (435 lessons and 1 problem set); 8.07 has pages for lectures 1–11 and 14–16.

## Slips found in the notes

Noted in brackets on the pages, never repeated: (4.11) holds only for positive charge; (8.42)–(8.43) sign for odd negative m; LN9 (9.60), (9.65), (9.47)/(9.52)/(9.74) index and prime typos and two equations numbered (9.67); LN14 eq. (3) g′ for g″, eq. (12) exponent sign, slide 11 "|k| = ωc", eq. (25) intensity missing c, eq. (36) absolute values; LN15 (23)/(25) 1/4πε₀ for μ₀/4π and "Lorentz" for Lorenz; LN16 eq. (11) prefactor, eq. (22) sign, eq. (30) r′ for r_p.

## Practical notes for the next run

- Take each lecture's source list from the course itself (here the OCW lecture-notes page); note which notes are scans and read those from page images.
- Reviews keep catching close paraphrases of slides (typeset slides invite it): rewrite slide sentences in a new structure from the start.
- Shipping small batches during the run worked well: eight pull requests merged and checked live without conflicts, because each batch was cut from the run branch after its lessons were committed.
- `data/symbols.json` grows fast with tensor-index forms (nested subscripts such as `C_i_1\cdotsi_\ell`); scripts that find meanings by their text plus a page they already list survived the parallel work.

## For the owner

- **Read-aloud gaps (site code, `lib/speech.ts`), to fix in one change:** the curly brackets meaning "traceless part of" are silent; C⁽²⁾ is read "C to the power (2)"; a dot between unit vectors (ê_x · ê_y) is read "times"; integral limits containing a slash (∫ from −d/2 to d/2) are garbled; `\mathcal` symbols such as ℰ get no tap-to-explain entry.
- **Unverified citations:** the Liénard (1898) and Wiechert (1900) references on the Liénard–Wiechert page are from memory and were not checked against a copy.
- `docs/YEAR-IV-PLAN.md` says the OCW course page numbers the topics 1–16; on 2026-11-18 it numbered them 1–17, matching the files.
- The spoken names of `r_p` and `z_p` are now "r sub p" and "z sub p" (one word of read-aloud changed on the 8.01 page `potential-energy`).
- Next: 8.08 (Statistical Physics II) and 8.09 (Classical Mechanics III) for Year IV, then 8.962.
