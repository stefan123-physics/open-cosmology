---
page: content/year-5/8.962/8-962-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset08/ (read: PDF as pdftotext text, 4 pages, printed pages 1-3)
  - 8.962 Lecture 10 transcript (read, PDF p. 19)
  - 8.962 Lecture 12 transcript (read, PDF pp. 3-4)
  - 8.962 Lecture 14 transcript (read, PDF pp. 12-14)
  - 8.962 Lecture 15 transcript (read, PDF pp. 3-4)
  - 8.962 Lecture 16 transcript (read, PDF pp. 3, 10, 17-19)
  - 8.962 Lecture 17 transcript (read, PDF pp. 19-21)
  - NASA Sun fact sheet, NIST CODATA 2018 (not fetched; values are the well-known ones, GM_sun = 1.32712e20 m^3/s^2, c exact)
verdict: pass-with-notes
---

# Review: Problem Set 8 (quadrupole formula, binary chirp, Riemann wave equations)

Writer: Opus. Reviewer: Opus (same model, blind).

Order followed: the "Blind solve / My answers" section below was written to this file from the stripped statements and MIT's sheet only, before the full page or the calcs file was opened. Then the page and calcs were compared.


## Blind solve

### My answers (written before opening the full page or calcs file)

Conventions: c = 1, G kept, signature (-,+,+,+), Lambda_ijkl = P_ik P_jl - (1/2) P_ij P_kl.

- p1: Q_kl - I_kl = -(1/3) delta_kl I_mm. Lambda_ijkl delta_kl = P_ik P_jk - (1/2) P_ij P_kk = P_ij - (1/2)(2) P_ij = 0, using P^2 = P and tr P = 2. So the trace drops out and h^TT is unchanged. Key numbers: P_kk = 2; Lambda_ijkl delta_kl = 0. (numpy: residual 6e-17 for random n.)
- p2a: reduced body at (a cos Omega t, a sin Omega t). h_+ = h_xx = -h_yy = -(4 G mu a^2 Omega^2 / r) cos 2Omega(t - r); h_x = h_xy = -(4 G mu a^2 Omega^2 / r) sin 2Omega(t - r); h_iz = 0. Amplitude with Omega^2 = GM/a^3: 4 G^2 mu M / (r a). Wave frequency 2 Omega (twice orbital); circular polarization on the axis.
- p2b: P = (G/5) <dddot Q_ij dddot Q_ij> = (32/5) G mu^2 a^4 Omega^6 = (32/5) G^4 mu^2 M^3 / a^5.
- p2c: E = -G mu M / (2a); da/dt = -(64/5) G^3 mu M^2 / a^3.
- p2d: dOmega/dt = (96/5) G^3 mu M^2 Omega / a^4 = (96/5) (G Mc)^{5/3} Omega^{11/3}, Mc = mu^{3/5} M^{2/5} = (m1 m2)^{3/5} / (m1 + m2)^{1/5}.
- p2e: Mc = 1.17428 Msun; with Omega = pi f, df/dt = (96/5) pi^{8/3} (G Mc / c^3)^{5/3} f^{11/3} = 16.32 Hz/s; tau = (3/8) f / fdot = (5/256)(G Mc/c^3)^{-5/3} (pi f)^{-8/3} = 2.298 s.
- p3a: d^alpha R_{alpha beta gamma delta} = d_gamma R_{beta delta} - d_delta R_{beta gamma} = 8 pi G (d_gamma Tbar_{beta delta} - d_delta Tbar_{beta gamma}). (sympy identity check on a random h: residual 0.)
- p3b: Box R_{alpha beta mu nu} = 8 pi G (d_alpha d_mu Tbar_{beta nu} - d_alpha d_nu Tbar_{beta mu} - d_beta d_mu Tbar_{alpha nu} + d_beta d_nu Tbar_{alpha mu}) (sympy: residual 0). With Box G = delta^4, G_ret = -delta(t - t' - |x - x'|)/(4 pi |x - x'|): R_{alpha beta mu nu}(t, x) = -2G \int d^3x' S_{alpha beta mu nu}(t - |x - x'|, x') / |x - x'|. Consistency: Box h_{mu nu} = -16 pi G Tbar_{mu nu} in Lorenz gauge gives the same source.
- p3c: vacuum + part (a): d^alpha R_{alpha beta gamma delta} = 0 gives R_{z beta gamma delta} = -R_{0 beta gamma delta} (dropping constants); Bianchi with two transverse indices a, b and 0 gives d_u R_{ab mu nu} = 0, so R_{ab..} = 0; R_{0z..} = -R_{00..} = 0; Bianchi (0, z, a) gives R_{za..} = -R_{0a..}. Every component reduces to R_{a0b0}.
- p3d: R_00 = R_{x0x0} + R_{y0y0} + R_{z0z0} = 0 with R_{z0z0} = 0, so R_{x0x0} = -R_{y0y0}; pair symmetry R_{x0y0} = R_{y0x0}. Two independent functions.
- p3e: in TT gauge, R_{i0j0} = -(1/2) d_t^2 h_ij; hence h_+ = h^TT_xx = -h^TT_yy, h_x = h^TT_xy = h^TT_yx (up to terms linear in t, zero for a wave). (sympy: R_x0x0 = -h+''/2, R_y0y0 = +h+''/2, R_x0y0 = -hx''/2.)
- p3f: x' = x cos theta + y sin theta, y' = -x sin theta + y cos theta; h'_+ = cos2theta h_+ + sin2theta h_x, h'_x = -sin2theta h_+ + cos2theta h_x, so h'_+ + i h'_x = (h_+ + i h_x) e^{-2 i theta}. Smallest positive rotation leaving both unchanged: 180 degrees. Plus to cross: 45 degrees.
- p4a: nabla_alpha R^alpha_{beta gamma delta} = nabla_gamma R_{beta delta} - nabla_delta R_{beta gamma} = 8 pi G (nabla_gamma Tbar_{beta delta} - nabla_delta Tbar_{beta gamma}): same form, partials replaced by covariant derivatives (metric compatibility lets the contraction pass through nabla).
- p4b: Box R_{beta gamma mu nu} = 8 pi G (nabla_beta nabla_mu Tbar_{gamma nu} - nabla_beta nabla_nu Tbar_{gamma mu} - nabla_gamma nabla_mu Tbar_{beta nu} + nabla_gamma nabla_nu Tbar_{beta mu}) + commutator terms. The commutator of nabla^alpha with nabla_beta on Riemann gives Ricci x Riemann (= 8 pi G Tbar x Riemann) and Riemann x Riemann terms. In vacuum Box R = (Riemann)^2 terms, which are not zero in general (nonlinear), unlike the linearized case where Box R = 0.

### Key numerical checks (Python, .venv; scripts in the reviewer's scratch folder, not in the repo)

```text
ps8_blind.py   (numpy/sympy)
P1  max|Lambda_ijkl delta_kl| = 6.5e-17, tr P = 2.0, |Lambda.I - Lambda.Q| = 2.2e-16 (random n, random symmetric I)
P2a hxx = -4 G Omega^2 a^2 mu cos(2 Omega t)/r, hxy = -4 G Omega^2 a^2 mu sin(2 Omega t)/r; amp = 4 G^2 M mu/(a r)
P2b P = 32 G^4 M^3 mu^2/(5 a^5)          (from third derivatives of the traceless I, summed over all 9 ij)
P2c adot = -64 G^3 M^2 mu/(5 a^3)
P2d Omegadot / [(96/5)(G Mc)^(5/3) Omega^(11/3)] = 1 (sympy simplify)
P2e Mc = 1.174276 Msun; fdot = 16.3204 Hz/s; tau = 2.29774 s (both (3/8) f/fdot and (5/256)(GMc/c^3)^(-5/3)(pi f)^(-8/3))
    check numbers: a = 153.69 km, a*Omega/c = 0.1611, equal-mass Mc = 1.17524 Msun

ps8_p3.py      (sympy, linearized Riemann R = 1/2(d_a d_n h_bm + d_b d_m h_an - d_a d_m h_bn - d_b d_n h_am), random h)
P3a residual of d^a R_abcd - (d_c R_bd - d_d R_bc): 0
P3b residual of Box R_abmn - (d_a d_m R_bn - d_a d_n R_bm - d_b d_m R_an + d_b d_n R_am): 0
P3e TT plane wave: R_x0x0 = -h+''/2, R_y0y0 = +h+''/2, R_x0y0 = -hx''/2, R_z0z0 = 0, R_xyxy = 0

ps8_penrose.py (numpy, truncated Taylor polynomials to degree 4 about x = 0, metric eta + random polynomial,
                R^r_smn = d_m G^r_ns - d_n G^r_ms + G^r_ml G^l_ns - G^r_nl G^l_ms, Ricci = R^r_srn)
P4b page's equation (Ricci in place of 8 pi G Tbar):
    max|Box R| = 25.3, max|second-derivative term| = 24.6, max|Ricci x Riem| = 2.23, max|Riem x Riem| = 4.82
    max residual of the page's formula = 7.1e-15
    sanity: residual with the Ricci x Riem sign flipped = 4.47; with the quadratic sign flipped = 9.65; without quadratic = 4.82
```

### Comparison (one line per answer id)
- p1-pp: page answer P_ij (choice 2) = mine (P^2 = P). Agree.
- p1-trace: page 2 (choice 1) = mine. Agree.
- p2a-amp: page 4G^2 mu M/(r a) = mine. Agree. Mistakes: G^2 mu M/(ra) (Omega instead of 2 Omega, factor 1/4), 8G^2.../(ra) (trace in plane not removed, factor 2), 4G^2M^2/(ra) (M for mu): each hint true of its formula.
- p2a-freq: 2 Omega (choice 3) = mine. Agree.
- p2a-pol: equal amplitudes, quarter cycle apart (choice 0) = mine (cos vs sin). Agree.
- p2b-power: page (32/5) G^4 mu^2 M^3/a^5 = mine. Agree. Mistakes: 24/5 (xy counted once: average 16(1 + 1/2) = 24) true; 1/10 (Omega^3 instead of (2 Omega)^3: 32/5/64 = 1/10) true; M^5 instead of mu^2 M^3 true.
- p2c-adot: page -(64/5) G^3 mu M^2/a^3 = mine. Agree. Mistakes: sign; -32/5 (E = -GM mu/a only) true.
- p2d-omdot: page (96/5)(G Mc)^(5/3) Omega^(11/3) = mine. Agree. Mistakes: 64/5 (no 3/2), minus sign: true.
- p2d-mc: page (m1 m2)^(3/5)/(m1+m2)^(1/5) = mine. Mistake (m1 m2)^(2/5)(m1+m2)^(1/5) = mu^(2/5) M^(3/5): hint true.
- p2e-mc: page 1.174 = mine 1.17428. Agree (1% tolerance fine).
- p2e-fdot: page 16.3 Hz/s = mine 16.320. Agree.
- p2e-tau: page 2.30 s = mine 2.2977. Agree.
- p3a-div: page 8 pi G (d_g Tbar_bd - d_d Tbar_bg) (choice 1) = mine. Agree.
- p3b: (mark yourself) page source = mine, formal solution -2G int S(t_ret)/|x - x'| = mine. Agree.
- p3c-z: page -R_0bmn (choice 2) = mine. Agree.
- p3d-count: two (choice 3) = mine. Agree.
- p3e: (mark yourself) agree.
- p3f-same: 180 = mine. Agree.
- p3f-swap: 45 = mine. Agree.
- p4a-form: "same with d replaced by nabla" (choice 2) = mine. Agree.
- p4b-vac: quadratic in Riemann (choice 3) = mine. Agree. The page's explicit Penrose equation was verified numerically (residual 7e-15, see above).

No disagreement between the blind solve and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(e) statement | The sheet's 3(e) statement itself recalls the linearized Riemann tensor R_abmn = 1/2(...) for the comparison | "Compare with the linearized Riemann tensor of part (b)", but part (b)'s statement does not show it; the formula (cited "Problem 3(e), p. 3") appears only inside the closed Solution of 3(b), in its "Check the result" step | Move (or copy) the Formula "Problem 3: the linearized Riemann tensor" into the 3(e) statement, after the definition of h+ and hx, and change "of part (b)" to "below" (keep the cite "Problem 3(e), p. 3") |
| 2 | warning | calcs file, entries p2a-equal, p2b-equal, p2c-merge | Lecture 16 transcript p. 18 has no binary; Lecture 17 transcript p. 21 says only "you will do this on a future problem set" and gives neither (64/5) G^4 m^5/a^5 nor (5/512) a^4/(G^3 m^3) | calcs `source:` cites reading5 "transcript p. 18" (p2a-equal) and reading6 "transcript p. 21" (p2b-equal, p2c-merge) for "the lesson's result" | Cite the lessons instead, e.g. `source: {cite: mit, at: 'Problem 2(a) (our own check against the lesson gravitational-waves-quadrupole-formula, worked example)'}` and likewise for gravitational-wave-energy-isaacson; or drop the transcript page. The page text itself ("the lesson's worked example", "the lesson's result") is correct: both lessons contain those formulas |
| 3 | info | Problem 4(b) statement | "□R^a_bgd = 8πG [source]", the source containing all three kinds of terms | "□R_abgd = 8πG [source] + ...", then says the source has three kinds of terms | Optional: write "= 8πG [source]" without "+ ...", or "= [terms of three kinds]", so that the Riemann x Riemann terms (which carry no 8πG) are not both inside and outside the bracket |
| 4 | info | Problem 1 statement, "Hughes points to the same care in the lecture (Lecture 16 transcript, p. 18)" | On PDF p. 18 Hughes warns "There's a few different notions of trace that went into this definition", and says the error is quadratic in the perturbation | Presents it as the same care as the delta vs P trace issue | Acceptable; optionally say "Hughes also warns that several notions of trace enter the TT definition" |
| 5 | info | Problem 3(b) Green's function, cite reading4 transcript p. 4 | Lecture 15 p. 4 introduces the radiative Green's function in words; its sign is written on the board | -delta(...)/(4 pi |x - x'|) | None needed: the sign is the one consistent with Box G = delta^4 and with h-bar = 4G int T/|x - x'| (checked) |

## Arithmetic and answer checks
- Every number recomputed independently (see "Key numerical checks"): 1.174, 4.9255e-6 s, 5.784e-6 s, 314.16, 51.3 s^-2, 16.3 Hz/s, 2.30 s, 154 km, 0.16 c, 1.175, 0.87, 0.6741: all correct.
- Points: p1 15; p2 8+8+7+9+8 = 40; p3 5+6+5+4+4+6 = 30; p4 5+10 = 15; total 100.
- Answer boxes: vars ranges positive and finite for every formula (G, mu, M, r, a, Mc, Omega, m1, m2 all > 0); each listed mistake differs from the answer by a constant factor of at least 1.5 or a sign, so it is rejected; 1% tolerances on numeric boxes accept 3 significant figures (2.30 vs 2.2977: 0.1%).
- All choice answers verified (p1-pp, p1-trace, p2a-freq, p2a-pol, p3a-div, p3c-z, p3d-count, p4a-form, p4b-vac).
- `npm run calc:test -k "problem-set-8 or problem_set_8"` in the worktree: 921 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.
- Solutions: every step checked; each solution ends with a "Check the result" step (units, limits, equal-mass cases, numerical checks). The Penrose equation, which the page says was checked numerically while writing, was re-checked here independently.
- Hints: none gives a final result away. p3c hint 2 says z is tied to 0 but not the sign (the box asks for the sign).

## Coverage and order
- All four MIT problems and every part (1; 2a-d; 3a-f; 4a-b) are present, in MIT's order, in the page's own wording. Additions (2e, all boxes in 1, 3, 4, the frequency, polarization and chirp-mass boxes) are marked as ours, as stated in the introduction.
- The sheet's Goldstein pointer is omitted and said so; G restored throughout and said so; the sheet's "Spring 2006" header and the jk/kl index slip are noted. MIT gives no points; the page says the points are its own.
- Equation locations: every `cite="mit"` `at=` matches the printed page of the sheet (Problem 1 and 2 setup p. 1; 2(c) eq. (1) and 2(d) p. 2; Problem 3 field equation and Bianchi identity p. 2; 3(e), 3(f), Problem 4 p. 3).
- Transcript citations checked: Lecture 10 p. 19 (commutator on a one-form, minus sign) yes; Lecture 12 pp. 3-4 (contracted Bianchi identity) yes; Lecture 14 p. 13 (Lorenz-gauge field equation) yes; Lecture 15 p. 4 (radiative Green's function) yes; Lecture 16 p. 3 (h_xx + h_yy = 0, plane wave) yes; Lecture 16 p. 10 (R_x0x0 = -1/2 d_t^2 h_xx etc.) yes; Lecture 17 p. 20 (quadrupole power formula) yes.

## Licensing
- The sheet has no figure, no "All rights reserved" and no "Courtesy of" notice; the page reuses nothing. Wording is the page's own (no copied sentences found). No OpenStax, LibreTexts, Carroll or Goldstein text used.

## Notes
- Claims about lessons checked: gravitational-waves-quadrupole-formula has h+ = -(2Gma^2 Omega^2/r) cos 2 Omega t for equal masses (matches the 2(a) check); gravitational-wave-energy-isaacson has P = (64/5) G^4 m^5/(c^5 a^5) and t = (5/512) c^5 a^4/(G^3 m^3) (matches 2(b), 2(c) checks); linearized-gravity-dynamic-sources gives two radiative components of ten (matches 3(d) check).
- No em dashes; no `## Summary`; header and intro identical to the stripped file.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the linearized Riemann tensor is now printed in the Problem 3(e) statement (cited to the sheet, Problem 3(e), p. 3), and the statement says "Compare the two forms" instead of "of part (b)".
- Warning 2: the three calcs sources `p2a-equal`, `p2b-equal` and `p2c-merge` now cite the sheet (Problem 2(a), p. 1; Problem 2(b), p. 1, and 2(c), p. 2) as our own checks, naming the lessons that hold the same formulas, instead of transcript pages that do not.
- Info 1: "+ …" dropped from the Problem 4(b) statement.
- Info 2: the Lecture 16 p. 18 pointer now says only that Hughes remarks the TT definition involves more than one notion of trace.
- Info 3: no change needed.
- `status: reviewed`.
