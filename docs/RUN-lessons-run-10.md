# Lessons run 10 (2026-11-18)

Branch `lessons-run-10`, from `main` after PR #54. Stopped early at the owner's request after two lessons. Each lesson is one commit, with its calcs file, an independent review (all findings fixed or answered in a Resolution section, `status: reviewed`) and page-scoped symbol meanings. Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build`.

## Why 8.06

8.902 was completed in run 9. Next in the order of work is 8.06 (Quantum Physics III, Spring 2018, Zwiebach), which had no lecture list and no pages.

## Added

| Commit | What | Review |
|---|---|---|
| 1 | `content/year-3/8.06/_course.json`: MIT's 24 lectures (each links its first video) and 8 chapters following Zwiebach's notes | — |
| 2 | Lecture 1, `nondegenerate-perturbation-theory`: the λ set-up, the order-by-order equations, E⁽¹⁾, E⁽ᵏ⁾, the first-order state, E⁽²⁾; own example of a charged oscillator in an electric field | pass with notes, all fixed |
| 3 | Lecture 2, `perturbation-series-degenerate-levels`: the ground-state overestimate, level repulsion, convergence (two-state example), the quartic anharmonic oscillator and Bender–Wu's asymptotic series, degenerate toy model, set-up and the good basis; own example on where to stop an asymptotic series | needs changes (2 errors: the notes repeat the z⁶ slip; 1/0, not 0/0, in the toy model), all fixed |

## About the 8.06 source

- On OCW each lecture is several short videos (about 100 in all), each with its own transcript. Pages cite them as reading1–4 (L*n*.1–L*n*.4) with PDF page numbers, and Zwiebach's notes chapter as the last reading, by equation number.
- The lecture-notes chapters carry no "rights reserved" or "courtesy" notices. Chapter 5 (particles in electromagnetic fields) is marked not available on OCW, so Lectures 13–14 will rely on their transcripts.
- Slips noted on the pages: in L2.1 the z⁶ coefficient of √(1 + z²) is said as 1/6 (it is 1/16); in L2.2 a Bender–Wu coefficient is said as 30,855/64 (the notes have 30,885/64).

## Practical notes for the next run

- `\mathcal E` without braces breaks read-aloud inside a fraction; write `\mathcal{E}`.
- `\frac12m` (a digit fraction followed by a letter) cannot be read aloud; write `\frac{1}{2}m`.
- A helper that lists read-aloud gaps per formula is kept outside git (`.tmp-gaps/`, excluded locally).

## Not done / for the owner

- Nothing is pushed or merged.
- 8.06 Lectures 3–24 remain; next is Lecture 3 (degenerate perturbation theory to first and second order).
- The docs (AGENTS.md "Current state", PLAN.md, OWNER-TODO.md) were not updated, because the run was limited to lesson files. After this run there are 389 pages, and 8.06 has 2 of 24 lectures.
