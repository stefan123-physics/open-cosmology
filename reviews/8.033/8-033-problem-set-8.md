---
page: content/year-2/8.033/8-033-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps8/ (read: pdftotext plus page renders, all 6 printed pages; Optional Problem 7 and the Problem 12 figure checked on the rendered page)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture17_cosmo1/ (read: rendered PDF pages 7 and 8)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture18_cosmo2/ (read: rendered PDF pages 6 and 11)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture19_cosmo3/ (read: rendered PDF pages 9 and 31)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture16_gr/ (read: rendered PDF page 27, for the Problem 10 citation)
verdict: pass-with-notes
---

# Review: Problem Set 8: Cosmology (8.033)

## Blind solve

My answers (written from the stripped statements and MIT's sheet only, before opening the full page or calcs file; numbers from py8/blind8.py):

- p1a: tau = int sqrt(1 - a^2 |rdot|^2) dt <= int dt = t1 - t0, equality only for rdot = 0: geodesic is r = r0 (stay at the same comoving position).
- p1b: t1 - t0.
- p1c: it stays comoving for ever (r constant, moves only with the expansion).
- p2a: sigma = a(t0) x0.
- p2b: a(t1)/a(t2).
- p2c: H = adot/a.
- p3-1a: E = m v^2/2 - G M m/a.
- p3-1b: v = sqrt(2GM/a).
- p3-1c: a = (9GM/2)^(1/3) t^(2/3).
- p3-1d: t = (2/3) a0^(3/2)/sqrt(2GM) = sqrt(2 a0^3/(9GM)).
- p3-1e: E<0: m stops and falls back; E>0: escapes with a non-zero speed left at infinity, sqrt(2E/m).
- p3-2a: E = m v^2/2 - (4 pi/3) G rho a^2 m.
- p3-2b: H^2 = 8 pi G rho/3 - k c^2/a^2.
- p3-2c: B = 2/3.
- p3-2d: t0 = 2/(3 H0).
- p3-2e: k<0 expands for ever (adot tends to a non-zero constant); k>0 stops and recollapses (big crunch).
- p4a: B = 1/2. p4b: B = 1. p4c: a(t)/a(0) = exp(H0 t).
- p5a 2/3; p5b 1/2; p5c 1; p5d 0.96410.
- p5e (h = 0.7, 1/H0 = 13.978 Gyr): 9.319, 6.989, 13.978, 13.476 Gyr.
- p5f: numerical check of (d) = 0.96410; closed model (0.3, 0.8, -0.1): H0 t0 = 0.99671, t0 = 13.932 Gyr.
- p5g: H0 up: younger; Omega_m up: younger; Omega_Lambda up: older.
- p5h: H0 t(z) = (2/3)(1+z)^(-3/2).
- p5i: t(6) = 0.9176 Gyr (H0 t = 0.065646); t(1000) = 0.5372 Myr (H0 t = 3.8432e-5), photons neglected.
- p6a: Planck time (~1e-43 s) < inflation (~1e-35 s) < nucleosynthesis (~1 s to minutes, ~3 min) < CMB (~380 000 yr) < first stars (~100-200 Myr) < typical galaxies (~1-few Gyr) < today (13.8 Gyr) < death of Sun (~5 Gyr from now, ~19 Gyr).
- p6b: stars ~1e11; Sun 8.3 min -> 10^1; Pluto ~5.5 h (39.5 AU) -> 10^1 (log nearest; 10^0 within MIT's one power of ten); second-nearest star Proxima 4.24 yr -> 10^1 by log rounding (10^0 also within one power); Andromeda ~2.5e6 ly -> 10^6.
- p6c: Hubble expansion; CMB (blackbody); light-element abundances (also: ages, evolution of galaxies/quasars with z).
- p6d: h ~ 0.7; Omega_Lambda ~ 0.7; Omega_b ~ 0.04-0.05; Omega_dm ~ 0.22-0.26.
- p7a: curve Omega_m/a + Omega_Lambda a^2: falls from infinity, minimum, then rises as a^2. p7b: a = (Omega_m/(2 Omega_Lambda))^(1/3) = 0.5984. p7c: increasing (accelerating).
- p8a: show (substitution). p8b: H0 t_crunch = pi Omega_m/(Omega_m - 1)^(3/2).
- p9: c dt/a = dtheta/(H0 sqrt(Omega_m - 1)) times c; c int dt/a over theta 0..2pi = 2 pi c/(H0 sqrt(Om-1)) = 2 pi/sqrt(k): one full circumference in chi = arcsin(sqrt(k) r).
- p10a: T = t sqrt(1 + r^2), R = t r. p10b: dT^2 - dR^2 = dt^2 - t^2 dr^2/(1+r^2) (checked).
- p11a: R(8 s) = 10 cm; s = 2 pi 10/24 = 2.618 cm. p11b: v = 0.1309 cm/s, H = 0.05 1/s. p11c: v = u pi/2 = 0.7854 cm/s. p11d: s = R theta, v = Rdot theta = (Rdot/R) s.
- p12a: Omega_Lambda = Omega_m/2. p12b: Omega_m = 2: smallest Omega_Lambda = 1/a*^3 with a*^3 - 3 a*^2 + 1 = 0, a* = 2.8794: Omega_Lambda = 0.041889 (brute-force check agrees). p12c: no big bang where f(a) has a zero for some 0<a<1 (a bounce in the past); boundary where f has a double zero at a<1.

(Reconstructed into this file verbatim from the blind-solve file saved before the full page was opened; an assembly step overwrote that file, and the text above is the same content, with two lines of the p3-2e and p9 notes tidied for readability.)

### Comparison (one line per answer id)

All answers agree with my blind answers; no disagreement needed resolving.

- p1-path: choice 0 (stay at r0) = mine. Agree.
- p1-time: t1 - t0 = mine. Agree.
- p1-future: choice 1 (stays comoving for ever) = mine. Agree.
- p2-dist: a*x0 = mine. Agree.
- p2-ratio: a1/a2 = mine. Agree.
- p2-hubble: choice 0 (adot/a) = mine. Agree.
- p3-energy: m v^2/2 - GMm/a = mine. Agree.
- p3-escape: sqrt(2GM/a) = mine. Agree.
- p3-a-of-t: (9GM/2)^(1/3) t^(2/3) = mine. Agree.
- p3-age: sqrt(2 a0^3/(9GM)) = mine. Agree.
- p3-blob: m v^2/2 - 4 pi G rho m a^2/3 = mine. Agree.
- p3-friedmann: 8 pi G rho/3 - k c^2/a^2 = mine. Agree.
- p3-b: 0.6667 = 2/3. Agree.
- p3-age-h: 2/(3H) = mine. Agree.
- p4-photons 0.5, p4-empty 1, p4-vacuum exp(H0 t): agree.
- p5-matter 0.6667, p5-photons 0.5, p5-empty 1, p5-lcdm 0.9641 (mine 0.964099): agree.
- p5-gyr-matter 9.32, -photons 6.99, -empty 13.98, -lcdm 13.48 (mine 9.319, 6.989, 13.978, 13.476): agree.
- p5-closed 13.93 Gyr (mine 13.932, H0 t0 = 0.99671): agree.
- p5-g-h younger, p5-g-m younger, p5-g-l older: agree.
- p5-tz (2/3)(1+z)^(-3/2): agree.
- p5-z6 0.918 Gyr (mine 0.9176), p5-z1000 0.537 Myr (mine 0.5372): agree.
- p6-order: choice 1 (Planck, inflation, BBN, CMB, first stars, galaxies, today, death of the Sun): agree.
- p6-stars 10^11, p6-sun 10^1, p6-pluto 10^1, p6-star2 10^1, p6-m31 10^6: agree (Pluto and Proxima by log rounding, as mine).
- p6-h 0.7 +/- 0.05, p6-lambda 0.725 +/- 0.05, p6-baryon 0.045 +/- 0.01, p6-dark 0.23 +/- 0.04 (absolute tolerances, numberTolerance in lib/answers.ts): each range holds both slide lists and my estimates. Agree.
- p7-amin 0.598 (mine 0.5984), p7-accel accelerating: agree.
- p8-crunch pi m/(m-1)^(3/2): agree.
- p10-r t*r, p10-t t*sqrt(1+r^2): agree.
- p11-s 2.618, p11-v 0.1309, p11-h 0.05, p11-vfar 0.785: agree.
- p12-accel m/2: agree. p12-forever 0.0419 (mine 0.041889; cubic root s = 2.8794 and a brute-force scan agree): agree.
- Show/explain parts without boxes (p3-1e, p3-2e, p6c, p7a, p8a, p9, p10b, p11d, p12c): the solutions reach the same conclusions as my blind solve.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 7, Formula "Expansion speed squared" and the bracket note under it | MIT's sheet (p. 4) prints adot^2 = a^2 H^2 ∝ Ω_m/a + Ω_Λ a³ (checked on the rendered page at 200 dpi). The a³ is a slip: Problem 5's H(a) times a gives Ω_Λ a² | Ω_Λ a² (correct), with a note that mentions only the missing factor H₀²; the cite `at="Optional Problem 7, p. 4"` suggests MIT printed this formula | Extend the note: "(MIT's sheet writes a proportionality, without the factor H₀², and prints the last term as Ω_Λ a³, a slip: Problem 5's formula gives Ω_Λ a².)" (Writing rule 4) |
| 2 | info | Problem 12, intro | The figure also shows a band along the flat line (labelled flat / closed / open) besides the two supernova teams' contours | Mentions only the supernova regions and the three curves | Optional: add "and a band along the line of flat universes" to the description |
| 3 | info | Problem 6(d) | Dark matter parameter written Ω_dm | Ω_d (the slides' notation) | None needed; optionally add "(Ω_dm on MIT's sheet)" |
| 4 | info | Problem 6(b) | "nearest power of 10, off by one is OK"; for Pluto (5.5 h) and Proxima (4.2 yr) MIT would accept 10^0 | Choices 100 apart, 10^0 not offered; 10^1 marked, and the solution explains the log rounding and that 10^0 would also earn MIT's marks | Acceptable as is (writer's note confirmed) |

## Arithmetic and answer checks
- Recomputed independently (scripts py8/blind8.py and py8/check8.py in the scratch folder): every number of parts 5(a) to 5(i), 7, 8(b), 11 and 12 matches the page to the digits shown.
- Inline numbers in solutions: 0.7^(-1/2) = 1.19523, 0.3^(-1/2) = 1.82574, sqrt(7/3) = 1.52753, prefactor 0.79682, ln = 1.20994 (correct); 7^(-1.5) = 0.05399, argument 0.08248, asinh 0.08239, H0 t = 0.06565; 1001^(-1.5) = 3.158e-5, 4.823e-5, 3.843e-5 (correct); high-z approximation 0.919 Gyr and 0.537 Myr (correct); quasar fraction 0.918/13.48 = 0.068 ("less than 7%", correct).
- 5(e) conversion remark: 1/(100 km/s/Mpc) = 3.0857e17 s = 9.778 Gyr (Julian year) or 9.7846 Gyr (365-day year). Correct.
- 5(f) hint: a = u² gives 2u²/(Ω_m + Ω_k u² + Ω_Λ u⁶)^(1/2) (correct). Simpson's rule with 20 strips gives 0.996712 against 0.996710 (closed model) and 0.964101 against 0.964099 (flat): "good to four digits" is true.
- 5(g): the rearranged root is an identity (checked); the calcs ratios 0.946 and 1.034 support the claims.
- 7: bracket values 1.24375 (shown 1.244), 0.775, 1, 1.775; minimum value 0.7520, speed ratio 0.8672, z = 0.671; slope 1.1. Correct.
- 8: at a = 1, 1 - cos θ = 2(Ω_m - 1)/Ω_m gives H = H₀ (checked); Ω_m = 2 gives a_max = 2 and H₀t = 2π. Correct.
- 9: dt/a = dθ/(H₀ sqrt(Ω_m - 1)) and sqrt(k) c = H₀ sqrt(Ω_m - 1) give χ = 2π. Correct, and consistent with kc² = H₀²(Ω_m - 1) for a dimensionless a.
- 10: dT² - dR² = dt² - t² dr²/(1 + r²) checked by hand; velocity r/sqrt(1 + r²) < 1. Correct.
- 12: border curves Ω_m = 2s³/((s-1)²(2s+1)), Ω_Λ = 1/((s-1)²(2s+1)) re-derived. Ω_m = 0.3 gives s = 0.4440 and Ω_Λ = 1.7135 (a brute-force scan for f(a) < 0 on (0, 1) gives 1.71346): correct. Plot parameter ranges: s = 2.37 gives (2.47, 0.093), inside the domain 2.5; s = 0.612 gives (1.37, 2.99), inside the range 3; s = 0.001 gives (0, 1.000). The curves stay inside the axes.
- 6(a) table: Planck time sqrt(ħG/c⁵) = 5.39e-44 s (correct). Slide values 379,000 yr, 400 Myr (hand-corrected from 200), 13.7 Gyr (Lecture 19 slide 11), 3 min and 3e9 yr (Lecture 20 slide 31) confirmed on the rendered slides. Span from 1e-43 s to 19 Gyr = 60.8 powers of ten ("more than 60", correct).
- 6(b) facts: Sun 8.3 light minutes; Pluto semimajor axis 39.48 au; 39.5 x 8.3 = 328 min = 5.5 h; Proxima Centauri 1.30 pc = 4.24 ly; Andromeda 2.5 million ly; Milky Way at least 100 billion stars; Sun about 4.5 Gyr old, about halfway through a life of roughly 10 Gyr. These agree with the standard public NASA figures as I know them; I did not re-fetch the NASA pages in this session. Ladder factors 2.7e5 (shown "about 3e5") and 5.9e5 ("about 6e5"): correct.
- 6(d) later values: Planck 2018 h = 0.674 and Ω_Λ = 0.685 (calcs/values.yaml has 0.674 and 0.6847), Ω_b = 0.0224/0.674² = 0.049, Ω_c = 0.120/0.674² = 0.264. The page's "about 0.67, 0.69, 0.05 and 0.26" is right, and each value falls inside its box range. Inflation "of the order of 1e-35 s in typical models" is a fair standard statement and is worded as such.
- Mistake hints: each listed mistake differs from the answer over its vars, and each hint is true of its formula (checked p1-time, p2-dist, p2-ratio, p3-energy, p3-escape, p3-a-of-t, p3-age (a0/v = sqrt(a0³/(2GM)), true), p3-blob, p3-friedmann, p3-age-h, p4-vacuum, p5-tz, p8-crunch (θ = π is the largest size, true), p10-r, p10-t (t(1 + r²) gives T² - R² ≠ t², true), p12-accel (1 - m is the line of flat universes, true)).
- vars ranges keep every formula finite and physical (m > 1 in p8-crunch, z > 0 in p5-tz, positive G, M, a, t).
- Tolerances: 1% boxes, and 0.5% for p5-lcdm and p5-closed, accept 3 to 4 significant figures; 2% for p12-forever is fine.
- `npm run content:check` in the worktree: 0 errors; the only warning about this page is the missing review file. pytest on calcs/8.033/8-033-problem-set-8.yaml: 136 passed.
- No hint gives a result away. The 3 I(c) hint gives the differential equation (the setup, not the solution); the 3 II(c) hint restates what the statement says; the 5(f) hints give a method only.

## Coverage and order
- All MIT problems are present in MIT's order: 1 (a-c), 2 (a-c), 3 I (a-e), 3 II (a-e), 4 (a-c), 5 (a-i), 6 (a-d), Optional 7 to 12. Problem 3 is split into two exercises with MIT's 15 + 18 points, as the page says.
- Points match MIT: 12, 12, 15, 18, 9, 27, 15 = 108; the 3 stapling points are left out, as stated. Optional points are the page's own and marked so.
- Own additions are marked: 8(b) ("our own addition"), the number in 12(b), and 5(i) with photons neglected in place of MIT's calculator (stated in the part and in the intro list). 5(f) replaces Ned Wright's calculator by a numerical integral for the same closed model (Ω_m = 0.3, Ω_Λ = 0.8), as stated.
- `covers: [17, 18, 19, 20]`: Lecture 17 (equivalence-principle-metrics) is justified. Problems 1, 2 and 10 are exercises with metrics, and Problem 10's Minkowski metric in spherical coordinates is Lecture 17 slide 27 (checked). Lectures 18, 19 and 20 are the three cosmology decks the set cites.
- Citations checked. Sheet pages: Problems 1 and 2(a) p. 1; 2(c), 3 II(a), 3 II(b) p. 2; Problem 4, Problem 5 and 5(d) p. 3; 5(h) and Optional 7 p. 4; Optional 8 equations (8.1), (8.2) and Optional 10 p. 5: all match MIT's printed pages. Slides: Lecture 18 slide 7 (FRW metric, H ≡ adot/a, 9.7846) and slide 8 (Friedmann equation, 2005 list); Lecture 19 slide 6 (2006 list) and slide 11 (history); Lecture 20 slide 9 (five pieces of evidence) and slide 31 (3 min, 3e5 yr, 3e9 yr); Lecture 17 slide 27. The slides have no printed numbers; the PDF page numbers match every citation.
- Claims about lessons checked: frw-metric-expansion uses 9.778, finds 13.5 Gyr and "about 0.964", and says the coordinates label galaxies; expanding-universe-history has a ∝ t^(1/2) and t^(2/3), the 9.3 Gyr against the oldest stars, and both parameter lists; evidence-for-the-big-bang opens with the five-item list. All correct.

## Licensing
- MIT's sheet has no "rights reserved" or "courtesy" notice. The slide decks have "courtesy of NASA / Wikipedia / WMAP" images; the page uses none of them.
- Optional Problem 11 (quoted on MIT's sheet from Shu, *The Physical Universe*) is replaced by an original balloon problem with its own numbers; no Shu text is reproduced.
- Optional Problem 12's literature figure is not reproduced; the page's map is drawn from its own formulas, and the caption says it is not MIT's figure and shows no measurements.
- Statements are rewritten in the page's own words; only short standard phrases match MIT. No OpenStax or LibreTexts material. No em dashes; no `## Summary` with answers.
- Later values (Planck 2018) are marked as later developments.

## Notes
- MIT's sheet has two more small slips that the page tidies harmlessly: "(1 - Ω_M)" in the sinh form of 5(d), and a missing upper limit on the second age integral of Problem 5. No note needed.
- The letter s is the arc length in Problem 11 and the touching point in Problem 12. content:check passes, so both have meanings, but a different letter in Problem 12 (for example a_*) would avoid two meanings on one page. Info only.
- The NASA figures in Problem 6(b) were checked against well-known values, not re-read from NASA pages in this session.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

- Warning 1: the note under "Expansion speed squared" in Optional Problem 7 now also says that MIT's sheet prints the last term as Ω_Λ a³, a slip, and that Problem 5's H(a) times a² gives Ω_Λ a²; the citation reads "Optional Problem 7, p. 4 (corrected: see the note)".
- The info items need no change.
- `status: reviewed`. `calc:test -k 8-033-problem-set-8` (136 passed) passes; `content:check` run after the merge onto `main`.
