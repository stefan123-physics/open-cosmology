---
page: content/year-5/8.902/8-902-problem-set-7.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_midterm_pdf/ (read: local PDF, text and rendered pages 1-2)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec02.pdf (read, pp. 14-15)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec03.pdf (read, pp. 16-21)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec04.pdf (read, p. 25)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec05.pdf (read, p. 35)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec06.pdf (read, pp. 38-42)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec07.pdf (read; pp. 46-47 rendered and inspected)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec08.pdf (not needed: not cited in the page body)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec09.pdf (read, p. 56)
  - https://arxiv.org/abs/1605.09788 (not fetched; the value GM☉ = 1.3271244e20 m³/s² is the well-known IAU 2015 B3 nominal value and was used only as a constant)
verdict: pass-with-notes
---

# Review: Problem Set 7 (MIT's Midterm Problem Set): a rotating disc, the closed box, relaxation and the virial theorem

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

My answers (written to this file before the full page, its calcs file or its symbols were opened):

- Q1A: edge particle, outward acceleration F(r) = -G(πR²Σ)/r² + (ΩR²)²/r³; κ² = -dF/dr at R = 3Ω² - 2πGΣ/R. (The Kepler-equilibrium reading, Ω² = πGΣ/R, gives κ² = Ω² > 0 always and no R_min, so MIT means the notes' p. 46 patch argument, with Ω and Σ independent.)
- Q1B: R_min = 2πGΣ/(3Ω²); Σ = 10 M☉/pc², Ω = 27.2 km/s/kpc: R_min = 121.75 pc. (Notes eq. (211) prints Ω³: dimensionally wrong, a misprint; (210) gives Ω².)
- Q1C: κ² < 0: radial displacement grows exponentially, gravity beats rotational support, the patch collapses (gravitational instability), no epicyclic oscillation.
- Q1D: small scales are stabilised by pressure / random motions (Jeans); disc stable on all scales when λ_J ≥ R_rot (Toomre Q > 1). λ_J = (π/8)σ²/(GΣ) = 584.36 pc for σ = 8 km/s, larger than R_min.
- Q2A: Z = -y ln u ⇒ u(Z) = e^{-Z/y}; stars with metallicity < Z formed while the gas fraction fell from 1 to u(Z) (each star keeps its birth gas Z; IRA, total mass constant, stellar mass (1 - u)M); M_s(<Z) = (1 - e^{-Z/y})/(1 - e^{-Z0/y}).
- Q2B: dM_s/dlnZ = (Z/y)e^{-Z/y}/(1 - e^{-Z0/y}) (log10: times ln 10, same peak); peak at Z = y if y < Z0, else at Z0; u0 = 0.1: Z0 = y ln 10, peak/Z0 = 1/ln 10 = 0.4343.
- Q3A: same M, R ⇒ same t_cross; ratio (N_c/ln N_c)/(N_*/ln N_*) with N_* = 10^11, N_c = 10^5: 2.2 × 10^-6 (exactly 11/5). Cluster galaxy t_relax/t_cross = 10^5/(6 ln 10^5) = 1447.6.
- Q3B: cluster galaxy relaxes much faster: fewer, heavier bodies; kick ∝ m; at fixed M, R, t_relax ∝ N/ln N, about ∝ 1/m.
- Q4A: v = sqrt(GM/R). Q4B: 207.39 km/s.
- SA-a: inner r^-1, outer r^-3; slope at r = a: -2.
- SB-a: the time-varying collective potential (dE/dt = ∂φ/∂t); free-fall (dynamical) time.
- SC-a: multiply by v_j and integrate over velocity; unclosed (dispersions are new unknowns).
- SD-a: b_strong = 2Gm/v² = 2R/N = 0.04125 AU; n π b² v t with uniform sphere and Julian year: 6.363 × 10^-9.

Comparison with the page (one line per answer id):

- q1-kappa: page 3Ω² - 2πGΣ/R. Agrees.
- q1-rmin: page 2πGΣ/(3Ω²). Agrees.
- q1-rmin-pc: page 122 (2%). Mine 121.75. Agrees.
- q1-collapse: page choice 1 (exponential growth, collapse). Agrees.
- q1-why: page choice 2 (random motions, Jeans length larger than R_min). Agrees.
- q1-lamj: page 584 (2%). Mine 584.36. Agrees.
- q2-dist: page (Z/y)exp(-Z/y)/(1 - exp(-Z0/y)). Identical form. Agrees.
- q2-peak: page y. Agrees.
- q2-peak-ratio: page 0.434 (1%). Mine 0.4343. Agrees.
- q3-ratio: page 2.20 (1%). Mine 2.200. Agrees.
- q3-ncross: page 1448 (1%). Mine 1447.6. Agrees.
- q3-why: page choice 0 (kick grows with m, n m² = ρ m). Agrees.
- q4-v: page sqrt(G*M/R). Agrees.
- q4-vnum: page 207 (2%). Mine 207.39. Agrees.
- sa-slopes: page choice 3 (r^-1, r^-3). Agrees.
- sa-slope: page -2. Agrees.
- sb-cause: page choice 1 (time-varying collective potential). Agrees.
- sb-time: page choice 0 (free-fall time). Agrees.
- sc-how: page choice 2 (multiply by v_j, integrate over velocities). Agrees.
- sc-closure: page choice 0 (unknown dispersions). Agrees.
- sd-b: page 0.0413 AU (2%). Mine 0.04125. Agrees.
- sd-number: page 6.36 (2%). Mine 6.363 (computed as n π b² v t; the page's route 3/N per crossing × t/(R/v) is algebraically the same). Agrees.

No disagreement between the blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Q3(A) solution, Check step | (our numbers) t_relax of the cluster galaxy = 68 Gyr, about 5 times the age of the universe | "Even made of clusters, such a galaxy would barely be relaxed by two-body encounters in the age of the universe" | "Barely" can read as "only just" (i.e. relaxed), which is false: 68 Gyr is five times the age of the universe. Write: "Even made of clusters, such a galaxy would not be relaxed by two-body encounters within the age of the universe (68 Gyr is about five times it), though it gets much closer than a galaxy of stars, which never does." |
| 2 | info | Q1(B) solution | Notes eq. (211), p. 46: R_rot > 2πGΣ/(3Ω³) | "The notes print Ω³ in eq. (211); eq. (210) and the units show it is Ω²." | None. Verified on the rendered PDF (printed p. 46): (211) is boxed with Ω³ in the denominator, while (210) has 3Ω²; GΣ/Ω² is a length, GΣ/Ω³ is not. The page's claim holds, and the q1-rmin mistake hint for Ω³ is fair. |
| 3 | info | Q1(A) | MIT asks for κ | Box asks for κ² | Fine (κ² is what part B needs and avoids a square root of a possibly negative quantity); the statement says so plainly. |
| 4 | info | Q1(A) reading | MIT: "test particle at the periphery", angular momentum conserved | Page uses the notes' p. 46 patch argument (disc mass as a central point mass, Ω and Σ independent) and explains in the Check that the self-consistent Kepler reading gives κ² = Ω² | Agrees with my independent judgement: only the notes' reading gives an R_min, and MIT's parts B to D presuppose one. |
| 5 | info | Short answer C, "The moments" | Notes (pp. 38-39) call the density the "first moment", the mean velocity the "second" and the dispersion the "third" | "The zeroth moment ... the first (multiply by v_j ...)" | Standard numbering, fine; optionally add "(the notes count from one)". |
| 6 | info | Short answer D model answer | Notes eq. (70) give b_min ≈ 2R/N "(0.01 AU)"; notes say for globular clusters N ~ 10^4 | Page: 0.0413 AU (correct for 2R/N with R = 10 kpc, N = 10^11); "N ~ 10^4 to 10^6" | The page's value is right and the notes' 0.01 AU is their own rounding; no change needed, optionally note "(the notes round this to 0.01 AU)". |
| 7 | info | Short answer A, Check | (not in MIT) | "the slope -2 is that of an isothermal sphere, which gives a flat rotation curve: near the scale radius an NFW halo's rotation curve is nearly flat" | Conclusion is roughly true (v_c(a) is 0.945 of v_max, which is at r = 2.163a; d ln v_c/d ln r = 0.147 at r = a), but a local density slope of -2 does not by itself give a flat curve, which depends on the enclosed mass. Optionally: "the rotation curve peaks at about 2.16a and is within 6% of its peak at r = a". |
| 8 | info | Short answer D model answer | (not in MIT) | "the stars are about a parsec apart" | With the page's own model (10^11 stars in a 10 kpc sphere) n^(-1/3) = 3.5 pc; near the Sun the spacing is about 1 pc. Either "a few parsecs" or "about a parsec near the Sun". |
| 9 | info | Q1(D) solution | Notes do not give the Milky Way's Q | "The Milky Way's disc has Q somewhat above 1" | Standard and true, but unsourced; acceptable as a remark. |

## Arithmetic and answer checks
- All numbers recomputed independently (script in the scratch folder): G = 0.0043009 pc (km/s)²/M☉; GΣ = 0.043009; 3Ω² = 2.2195e-3; R_min = 121.75 pc; λ_J = 584.36 pc; σ_crit = 3.652 km/s; σ/σ_crit = 2.19; λ_J/R_min = 4.80; κ² at R_min/2 = -3Ω², e-fold time 1/(√3Ω); peak/Z0 = 0.4343; plot peak height ln10·e⁻¹/0.9 = 0.941 at log10(Z/Z0) = -0.362; ratio 2.200e-6; 4.5e5 times faster; 6 ln 1e5 = 69.08; 1447.6 and 6.58e8 crossing times; ln N = 11.51 and 25.33; v = 207.39 km/s; t_cross = 47.15 Myr; 68.3 Gyr and 3.1e16 yr; √(3/5) = 0.775, 160.6 km/s; b = 2e-7 pc = 6.171e9 m = 0.04125 AU = 8.87 R☉; 212.1 crossings; 6.363e-9; total ≈ 636 star-encounters, ≈ 318 events ("a few hundred"). All agree with the page to its printed precision.
- The plot expression log(10)*(10^x*log(10))*exp(-10^x*log(10))/0.9 is dM_s/dlog10 Z with Z/y = 10^x ln 10 for u0 = 0.1: correct, and its range [0, 1] contains the peak 0.94.
- Formula boxes: each `mistakes` expression tested at 20 000 random points of its `vars` with the site's 1e-6 agreement rule: every mistake is finite everywhere and never agrees with the answer. Notably q2-dist's "(Z/y)*exp(-Z/y)" differs by 1/(1 - e^{-Z0/y}), and Z0/y ≤ 10 in the ranges, so the difference is at least 4.5e-5, far above 1e-6. Each mistake hint is true of its formula (checked: 4Ω² route gives πGΣ/(2Ω²); fixed-Ω route gives -Ω² - 2πGΣ/R; T + U = 0 gives sqrt(2GM/R)).
- q2-dist vars keep Z0 > y (Z0 ≥ 0.025 > 0.02 ≥ y), matching the stated assumption; q1-kappa can pass through zero inside its ranges, harmless with the relative-plus-1e-12 rule since a correct typed form evaluates identically.
- Number tolerances (1-2%) accept 3 significant figures and reject the natural mistakes (e.g. ln(N/2) instead of ln N in Q3 gives 2.28, 3.5% off; uniform-sphere v = 161 km/s).
- Choice boxes: right answers at positions 1, 2, 0, 3, 1, 0, 2, 0 (varied); lengths comparable; no box answers another.
- Every solution ends with a Check step (units, limits or numbers).
- `npx tsx scripts/check-content.ts`: 0 errors, only "no review file yet" for this page. `pytest tests/calc -k problem-set-7`: 802 passed. Calcs `shown:` strings match the page text.

## Coverage and order
- Questions 1-4 and short answers A-D in MIT's order; parts A-D of Q1 and A-B of Q2 in MIT's order. Q3 is split into a quantitative part (A) and an explanation (B), matching MIT's "quantitative answer and a short qualitative explanation". Points: 25, 25, 15, 15, 4 × 5 as MIT; splits marked as the page's own.
- Every number box beyond MIT's question is marked "(our addition)" or "(our choice)": R_min in pc, λ_J, peak ratio for u0 = 0.1, crossing times, Q4B round numbers, all short-answer boxes.
- Every box is named in its part's statement.
- MIT's μ is replaced by the notes' u, and the page says so.
- Citations checked against printed page numbers: lec02 eqs. 48 (p. 14), 50-53 (p. 15); lec03 eqs. 61-66 (p. 17), 69 (p. 18), 74 (p. 19), 76 (p. 20), 77 (p. 21); lec04 eq. 99 (p. 25); lec05 eq. 151 (p. 35); lec06 eqs. 169 (p. 38), 173-181 (pp. 39-41), anisotropy (p. 42); lec07 pp. 45, 46 (eqs. 207-211), 47 (eqs. 212, 217); lec09 eqs. 254-256 (p. 56); MIT sheet Q1-Q2 on p. 1, Q2(B) and Q3 on p. 2. All correct.
- "Between Problem Sets 3 and 4": the midterm set is due 24 October, Problem Set 4 on 31 October. Consistent.

## Licensing
- No MIT figure is redrawn: the notes' rotating-disc sketch (p. 46) and the third-party Neeleman et al. (Nature 2020) Q-profile figure on p. 47 are not used. The only graph is generated from the page's formula.
- No text copied from the sheet or the notes beyond standard terms; the statements are rewritten.
- No OpenStax, LibreTexts or textbook material; IAU 2015 used only for a constant via its arXiv record; CODATA for G.
- No em dashes in the page (0 found).

## Notes
- Summary does not hint at any answer; there is no `## Summary` section with answers.
- Page-scoped symbol meanings exist for every letter used (Σ, Ω, κ, R, M, Z, y, u, μ, σ, ρ via course meanings, v, N, t, T, a, d, b, n, m, f, E, U, etc.); none gives away an answer. content:check reports no symbol problem.
- Hints guide without giving results (Q2A hint 2 states the notes' (1 - u)M, a step, not the answer).

COUNTS: errors=0 warnings=1 info=8

## Resolution (2026-11-28, by the page author)

- Warning 1 (Q3(A) check, "barely be relaxed"): now "would not be relaxed by two-body encounters within the age of the universe (68 billion years is about five times it), though it gets much closer than a galaxy of stars, which never does."
- Info (short answer A, flat rotation curve): the solution now says the local slope −2 is that of an isothermal sphere, that the rotation curve depends on all the mass inside r and peaks at about 2.16 a, and that at r = a the speed is only about 5.5 per cent below the peak; new calcs entries `sa-nfw-vpeak` and `sa-nfw-v-at-a`.
- Info (short answer C, moments): notes that the notes count the zeroth moment as the first.
- Info (short answer D, star spacing): "about a parsec apart near the Sun".
- Other info items: no change (0.0413 AU is the unrounded value of the notes' estimate; the remark that the Milky Way's Q is somewhat above 1 is a qualitative statement of the notes' stability discussion).

Status set to `reviewed`.
