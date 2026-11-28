---
page: content/year-5/8.902/8-902-problem-set-3.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_3_pdf/ (read: local copy of mit8_902_f23_problem_set_3.pdf, text and PDF)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec05.pdf (read; pp. 34 to 36 rendered as images to check eqs. (150), (151), (155) to (157))
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec07.pdf (read; eq. (204), p. 45)
  - Lecture 6 and 15 notes (read for coverage only; not cited by the page)
verdict: needs-changes
---

# Review: Problem Set 3: The Oort constants and the free-fall time

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the stripped statements and MIT's sheet were read first, every part was solved, and the answers below were written into this file before the full page, its calcs file or symbols were opened.

## Blind solve

### My answers (written before opening the page's hints, answers, solutions or calcs)
- 1(a): derivation: v_r = d(Ω−Ω0) R0 sin l, v_T = d(Ω−Ω0)R0 cos l − Ωd... expanding Ω(R) to first order with R − R0 ≈ −d cos l gives v_r = A d sin 2l, v_T = d(A cos 2l + B). Flat curve: A = v0/(2R0).
  (Correction noted after the blind pass, as a typo only: the exact components carry no overall factor d, i.e. v_r = (Ω − Ω0)R0 sin l and v_T = (Ω − Ω0)R0 cos l − Ωd; the first-order result is unchanged and was confirmed numerically below.)
- 1(b): v0 = R0(A − B) = 8.5 × 27.19 = 231.1 km/s; P = 2πR0/v0 = 2π/(A − B) = 0.23109 kpc/(km/s) = 226.0 Myr (977.80 Myr per kpc/(km/s)).
- 1(c): (dv_c/dR)_R0 = −(A + B) = −2.45 km/s/kpc; slightly falling, nearly flat (|slope| ≪ v0/R0 = 27.19).
- 1(d): κ² = −4B(A − B), κ = 36.68 km/s/kpc (epicycle period 167.5 Myr).
- 1(e): κ/Ω0 = sqrt(−4B/(A − B)) = 1.349; between 1 and 2 (√2 for a flat curve); path is a rosette that does not close in general. A ratio of exactly 4/3 would close after 3 orbits (4 radial oscillations).
- 2(a): t = (π/2) sqrt(r0³/(2GM)).
- 2(b): with M = (4π/3)ρ r0³, t_f = sqrt(3π/(32Gρ)); t_f sqrt(Gρ) = sqrt(3π/32) = 0.5427. Every shell has the same mean density inside it, the fall time depends only on that, so shells never cross and all arrive together (homologous collapse).
- 2(c): t_f = 0.5427/sqrt(6.674e-11 × 3.9e-18) = 3.364e13 s = 1.066 Myr.

Numbers by my own Python: 1 kpc/(km/s) = 977.80 Myr; v0 = 231.115 km/s; P = 225.95 Myr; slope −2.450; κ = 36.679 km/s/kpc; κ/Ω0 = 1.3490; sqrt(3π/32) = 0.54270; t_f = 3.3638e13 s = 1.0659 Myr (year 3.156e7 s). The exact relative velocities were compared with the first-order ones for v_c ∝ R^0.3, d = 0.01 kpc, at four longitudes (agreement to 0.1%); the fall integral of 2(a) was done with scipy.quad (1.110721 against (π/2)/√2 = 1.110721).

### Comparison (one line per answer id)
- p1a-flat: page v0/(2*R0); mine v0/(2R0). Agree.
- p1b-v0: page R0*(A - B); mine R0(A − B). Agree.
- p1b-v0-num: page 231.1 (tol 2); mine 231.1. Agree.
- p1b-period: page 2*pi/(A - B); mine 2π/(A − B). Agree.
- p1b-period-num: page 226 Myr (tol 2); mine 225.95. Agree.
- p1c-slope: page -(A + B); mine −(A + B). Agree.
- p1c-slope-num: page −2.45 (tol 0.03); mine −2.45. Agree.
- p1c-means: page choice 1 "close to flat, falling only a little"; mine nearly flat, slightly falling. Agree.
- p1d-kappa: page sqrt(-4*B*(A - B)); mine same. Agree.
- p1d-kappa-num: page 36.68 (tol 0.4); mine 36.68. Agree.
- p1e-ratio: page sqrt(-4*B/(A - B)); mine same. Agree.
- p1e-ratio-num: page 1.349 (tol 0.015); mine 1.349. Agree.
- p1e-shape: page choice 2 "does not close ... a rosette"; mine rosette that does not close. Agree. (Distractor "closes after exactly four orbits" is wrong, as it should be: κ/Ω = 4/3 means 4 radial periods in 3 orbits, so it closes after three orbits; the solution's parenthesis says so, verified.)
- p2a-time: page (pi/2)*sqrt(r0^3/(2*G*M)); mine same. Agree.
- p2b-factor: page 0.5427 (tol 0.005); mine 0.54270. Agree.
- p2b-why: page choice 0 "depends only on the density inside it"; mine same reason. Agree.
- p2c-cloud: page 1.066 Myr (tol 0.015); mine 1.0659. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Intro ("the sheet writes the epicycle frequency as $k$") and 1(d) statement ("the sheet writes it $k$"); data/symbols.json entry `k` | k is the sheet's name for the epicycle frequency | No meaning of `k` is scoped to `8-902-problem-set-3`; the course-wide 8.902 meaning "The (comoving) wavenumber of a Fourier mode" applies, so the popup, the symbols list and read-aloud explain $k$ as a wavenumber | Add to the `k` entry a meaning `{"text": "The sheet's name for the epicycle frequency, written κ on this page.", "unit": "s⁻¹ (here km/s/kpc)", "pages": ["8-902-problem-set-3"]}` |
| 2 | error | "How to answer", example formula `R0*(A - B)` | (none) | The example typed into a formula box is exactly the answer of box p1b-v0 | Use an example that is no answer on the page, e.g. `A*R0^2/2` or `sqrt(A^2 + B^2)` |
| 3 | warning | Every derivative and differential on the page ($dv_c/dR$, $d\Omega/dR$, $dr$, $d\theta$) ; data/symbols.json entry `d` | (none) | The only meaning of `d` for this page is "The distance from the Sun to a nearby star", so the d of dR, dr, dθ is explained as a distance | Add a second page-scoped meaning to `d`: "As in dv_c/dR, dr or dθ: a small change of the quantity after it." (as `orbits-and-epicycles` has), if the scanner counts that d; otherwise ignore |
| 4 | warning | 1(b) Check: "the age of the Solar System, about 4.6 billion years"; calcs `solar-system-age` | Not on the sheet | Quoted with no source; the calcs `kind: fact` cites `{cite: mit, at: 'Problem 1(B) (our addition)'}`, i.e. attributes it to MIT | Either drop the sentence, or keep it as `kind: fact` with a real source (e.g. a NASA Solar System page by title in `references`, cited `ref:`), and say "a standard value" on the page |
| 5 | warning | Before 1(b): "the Hipparcos satellite (a mission of 1989 to 1993)"; calcs `sheet-values` | The sheet names Hipparcos but gives no dates | Dates are right (launched August 1989, operations ended August 1993; checked from general knowledge, not from a page fetched in this review) but the calcs entry attributes them to the sheet (`cite: mit`) | Split the dates into their own `kind: fact` entry with a source other than the sheet (e.g. a NASA or ESA mission page cited by title only), or drop "(a mission of 1989 to 1993)" |
| 6 | info | 1(c) statement | "The local velocity shear, dv/dR at 0" | "the slope of the rotation curve at the Sun" | Optionally add "(the sheet calls it the local velocity shear)" |
| 7 | info | Problem 2 intro: "(Lecture 7, in the meaning of the Jeans length)" | Notes p. 45 give t_ff ∼ 1/√(Gρ) while discussing the Jeans length | Wording is unclear ("in the meaning of") | "(Lecture 7, in the discussion of the Jeans length)" |
| 8 | info | Problem 1(a) Step "First order in d" | Notes eq. (156): A = −½ dΩ/dR (no R), eq. (155) calls d(A cos 2l + B) the proper motion μ | Page states both slips | Verified on the rendered p. 36: A indeed lacks the factor R that B has, and μ ≈ d(A cos 2l + B) is printed; both remarks are correct and fairly worded |

## Arithmetic and answer checks
- Every number on the page recomputed: 977.8, 27.19, 231.1, 0.2311, 226, 53.4, 0.236, 226, ~20 orbits, −2.45, 27.19, −13.6, 1.06, 1345.4, 36.68, 0.1713, 167.5, 1.41, 1.349, 226/167.5 = 1.349, 4/π = 1.27, 0.5427, 8.33e-27, 3.36e13 s, 1.066 Myr, 6.20e13 s, 1.96 Myr, 1/0.5427. All correct.
- The lesson cross-references hold: stability-jeans-toomre gives 10³ molecules/cm³, 2.33 m_H, ρ0 = 3.9 × 10⁻¹⁸ kg/m³ and t_ff ∼ 6.2 × 10¹³ s; orbits-and-epicycles gives κ/Ω = 1.32 from Bovy (2017, Gaia DR1) A = 15.3, B = −11.9.
- Derivation of 1(a) checked line by line: frame, V(x, y) = Ω(y, R0 − x), exact components, first-order expansion, A = −½RΩ′, B = A − Ω0, conversion to the sheet's forms; solid-body check correct. Plot caption: constant-pull curve 1 − (π²/16)(t/t_f)² and its zero at 4/π verified; parametric curve t/t_f = (θ + ½ sin 2θ)/(π/2) verified.
- Each part's solution ends with a check (units, limits or numbers). Yes for all parts.
- Answer boxes: formula `vars` ranges keep every answer and every listed mistake finite and real (B < 0 < A throughout); every mistake differs from its answer; each mistake hint is true of its formula (2πR0/(A − B) has units kpc²/(km/s); √2(A − B) is the flat-curve κ; A − B equals κ only for a point mass; π√(r0³/2GM) is fall and return). Number-box tolerances accept 3 significant figures and reject the obvious wrong values (+2.45, √2 = 1.414, 1/√(Gρ) times anything near 1).
- Choice boxes: right answers at positions 1, 2, 0; lengths of the four choices within about 15% of each other in every box; no choice clearly longest or shortest.
- `calc:test -k 8-902-problem-set-3`: 44 passed. `content:check` on the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problem 1 parts A to E and Problem 2 are all present, in the sheet's order; Problem 2 is split into (a) one shell and (b) the whole sphere, which is the proof the sheet asks for. Additions (flat-curve A, the reading of the slope, the shape of the path, the factor and reason in 2(b), the cloud in 2(c)) are all marked "our addition".
- The sheet's two "show/prove" steps (1(A), Problem 2) are both said to have no box. The sheet has no plots.
- Points: the sheet gives none; the page says so; 20 + 15 + 10 + 15 + 10 = 70 and 15 + 10 + 5 = 30.
- "(B&T 3.4)" is dropped; the intro mentions only "a textbook problem" without naming it. Good.
- `covers: [5, 7]` matches TASKS.md. Lecture 15 (spherical collapse) treats the same cycloid solution; a link to the `spherical-collapse` lesson in 2(b) would be a natural extra (info).

## Licensing
- No MIT figure used or redrawn; the "© Astronomical Returns. All rights reserved" figure of Lecture 5 (printed p. 30) is not used. No Binney & Tremaine material. No OpenStax or LibreTexts.
- Wording is the page's own; the only near-verbatim phrase is "called the free-fall time of a system of density ρ" (sheet: "of a system with density ρ"), standard terminology.
- Bovy (2017, MNRAS) is reached only through the lesson's figures, not quoted here.

## Notes
- Citations checked: eq. (150) p. 34, eq. (151) p. 35, eqs. (155) to (157) p. 36 of the Lecture 5 notes; eq. (204) p. 45 of the Lecture 7 notes; the sheet is a single printed page 1. All `at=` values correct. Derived closed forms are marked "(our own solution)".
- The sheet's A and B (14.82 ± 0.84, −12.37 ± 0.64) are, to my knowledge, the Feast and Whitelock (1997) Hipparcos Cepheid values; the page's "that it says were found with the Hipparcos satellite" is a fair hedge (uncertain, not checked against the paper).
- 1(a) second hint gives the exact (unexpanded) components; the expansion and the identification of A and B are still left to the reader, so it does not give the result away (info).
- 2(c) "Use G = … and a year of 3.156 × 10⁷ s" is not listed among the intro's "our choices" (only the density is); harmless (info).
- 2(c) Check: "Real clouds live longer than their free-fall time, held up by the motions of their gas" goes beyond the notes (which compare t_cross with t_ff); acceptable as a hedged remark, could say "thermal and turbulent motions, and magnetic fields" (info).
- No em dashes; no `## Summary`; summary and intro give no answers (except item 2 above).

COUNTS: errors=2 warnings=3 info=8

## Resolution (2026-11-28, by the page author)

- Error 1 (symbol k): `k` now has a meaning for this page, the sheet's name for the epicycle frequency, written κ here.
- Error 2 ("How to answer" example gave away p1b-v0): the example is now `sqrt(A^2 + B^2)`, which answers no box.
- Warning 3 (symbol d): a second page-scoped meaning, "a small change of the quantity after it", added.
- Warning 4 (Solar System age without a source): the sentence is removed, with its calcs entries `solar-system-age` and `p1b-check-orbits`.
- Warning 5 (Hipparcos dates attributed to the sheet): the parenthesis "(a mission of 1989 to 1993)" is removed, and `sheet-values` no longer names the dates.
- Info items left as they are.
