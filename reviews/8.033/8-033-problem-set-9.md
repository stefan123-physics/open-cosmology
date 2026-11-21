# Review: 8.033 Problem Set 9 (blind solve written first, before the full page was opened)

## Blind solve

### My answers (from ps9-stripped.mdx and MIT's ps9.pdf only; numbers from blind9.py)
- p1.1: mass M, charge Q, angular momentum J.
- p1.2: supermassive: stellar orbits around Sgr A* (about 4e6 solar masses in a tiny region), or AGN/quasar luminosity from compact regions; stellar-mass: X-ray binaries (e.g. Cyg X-1) with compact companion above about 3 solar masses.
- p1.3: (a) F (b) T (c) T (tides grow without bound; for Sgr A*, about 1000 g over 2 m is reached at r about 6e7 m, about 0.005 r_s, well before r = 0) (d) F, but ambiguous (the tides that kill are those of the singularity) (e) F (f) F (g) F (h) T (i) F (Hawking radiation) (j) ambiguous: locally nothing special at the horizon (F), but r becomes timelike inside (a teaching answer of T is defensible).
- p2: algebra checks out (dr + beta dt_ff = beta dt + gamma^2 dr; substitution gives gamma^-2 dt^2 - gamma^2 dr^2).
- p3a: as given. p3b: (0,+y) moves out by GM y t^2 / r^3 (distance from origin y(1 + GM t^2/r^3)); (0,-y) moves out symmetric; (+-x,0) move inward by GM x t^2/(2 r^3). p3c: stretched radially, squeezed sideways.
- p4a: sigma(r) = sqrt(r(r-2M)) + 2M ln[(sqrt r + sqrt(r-2M))/sqrt(2M)]. p4b: 4.5912 M. p4c: excess ~ M + M ln(2r/M), grows logarithmically without bound (checked numerically at r = 1e3 M, 1e5 M).
- p5a: r_s = 4158.3 m; E_inf = 6 sqrt(1 - r_s/R) = 4.586 keV. p5b: E_r = E0 sqrt((1 - r_s/R)/(1 - r_s/r)). p5c: 4.586 keV (same as (a)).
- p6b: 6.953e-10. p6c: v_E = 465.09 m/s; term 1.2033e-12. p6d: 3.8732 km/s. p6e: 11.973 h. p6f: 1.6691e-10. p6g: 45.66 us/day. p6h: loss 7.107 us/day; net 38.55 us/day. p6i: 11.56 km.
- p7a: rho = 3/(32 pi M^2). p7b: 1.3499 (x 1e8 solar masses, with M_sun = 2e30).
- p8a: 2.970 km; 2.970 million km. p8b: P = 2 pi 2^(3/2) GM/c^3 = 8.803e-5 s x M/M_sun; M2: 88.03 s. (Note: no circular orbit exists below r = 3M, so "just outside R_S" is unphysical; formula is a formal Kepler period.)
- p9.1: Delta tau = integral sqrt(1 - (dr/dt_ff + beta_r)^2) dt_ff. p9.2: integrand <= 1, equal only for dr/dt_ff = -beta_r. p9.3: Delta tau = Delta t_ff. p9.4: tau = (2/3) r^(3/2)/sqrt(2M); horizon to centre (4/3)M = (4/3)GM/c^3 = 26.42 s for 4e6 M_sun. p9.5: infinite. p9.6: E=1, L=0 gives (dr/dtau)^2 = 2M/r, inward root.
- p10a: v_shell = gamma^2 |dr/dt| = sqrt(2M/r). p10b: |dr/dt| = (1-2M/r) sqrt(2M/r); maximum at r = 6M. p10c: v_shell = sqrt((2M/r - 2M/r0)/(1 - 2M/r0)).
- p11a: 3/(2r) = (1 + 0.0018)/R gives r = 9549.8 km (9567 km without rotation). p11b: higher orbit gives longer period/larger coverage, less drag; the net relativistic offset is corrected anyway.
- p12.1: dtau/dt = sqrt(1-3M/r); r = 6M: 0.70711; younger by 5.858 yr. p12.2: r = 4M, dtau/dt = 0.5. p12.3: dtau/dt = 0; infinite energy (E/m -> infinity; photon orbit).
- pa: m xddot = -V'(x). pb: alpha = sqrt(2M/r)/(1-2M/r) (sign follows the -2 sqrt(2M/r) dr dt cross term). pc: e^{2Lambda} = (1-2GM/(c^2 r))^-1, e^{2Phi} = 1-2GM/(c^2 r). pd: as given. pe: theta = (beta +- sqrt(beta^2 + 4 theta_E^2))/2; same side: +. pf: g_shell = M/(r0^2 sqrt(1-2M/r0)). pg: as given. ph(c): t = 33.0221 s; extra 45.62 us.

### Comparison (one line per answer id; page opened only after the answers above were saved)
- p1-hair: Mass, angular momentum, charge. Agree.
- p1-a F, p1-b T, p1-c T, p1-d F, p1-e F, p1-f F, p1-g F, p1-h T, p1-i F, p1-j F. Agree on (a) to (i); (d) and (j) are the two I marked ambiguous (see W1, W2).
- p3-move: GM y t^2/r^3. Agree. p3-sketch: radial pair apart, side pair together. Agree.
- p4-sigma: same function (page's ln(sqrt(r/2M) + sqrt(r/2M - 1)) equals my ln((sqrt r + sqrt(r - 2M))/sqrt(2M))). Agree. p4-four 4.591: agree. p4-far: logarithmic growth. Agree.
- p5-far 4.586 keV: agree. p5-shell: same formula. Agree. p5-relay: same as (a). Agree.
- p6-ground 6.953, p6-ve 465.1, p6-ground-speed 1.203, p6-v 3.873, p6-period 11.97, p6-sat 1.669, p6-gain 45.66, p6-loss 7.107, p6-net 38.55, p6-km 11.56: all agree.
- p7-rho 3/(32 pi M^2): agree. p7-water 1.350: agree.
- p8-rs1 2.970, p8-rs2 2.970, p8-coef 8.803, p8-p2 88.03: agree.
- p9-rel equal: agree. p9-time (4M/3)(r/2M)^(3/2) = (2/3) r^(3/2)/sqrt(2M): agree. p9-seconds 26.42: agree. p9-book infinite: agree.
- p10-book (1 - 2M/r) sqrt(2M/r): agree. p10-max 6: agree. p10-drop: sqrt(1 - (1 - 2M/r)/(1 - 2M/r0)) = my sqrt((2M/r - 2M/r0)/(1 - 2M/r0)). Agree.
- p11-r 9550 km: agree (9549.8). p12-six 0.7071, p12-years 5.858, p12-tourist-r 4, p12-tourist-rate 0.5, p12-photon (rate 0, no finite energy): agree.
- pb-alpha sqrt(2M/r)/(1 - 2M/r): agree. pe-theta (beta + sqrt(beta^2 + 4 theta_E^2))/2: agree. pf-g M/(r0^2 sqrt(1 - 2M/r0)): agree. ph-time 33.02 s, ph-delay 45.62 us: agree.
- Self-marked parts (p1.2, p2.1 to 2.3, p3a, p3c, p6a, p9.1, p9.2, p9.6, p10a, p11b, A, C, D, E(a), G, H(b)): the page's solutions reach the results I derived, every step checked, and each ends with a check (limit, units or number).

No disagreement on any answer.

---
page: content/year-2/8.033/8-033-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps9/ (read: pdftotext and page renders, p. 6 also at 400 dpi)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture21_bh1/ (read)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture22_bh2/ (read)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture23_bh3/ (read)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture24_bh4/ (read)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture16_gr/ (read)
  - Taylor and Wheeler, Exploring Black Holes (named by MIT; not read, not used by the page)
verdict: pass-with-notes
---

# Review: Problem Set 9: Black holes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Problem 1.3 (c)/(d), boxes p1-c, p1-d | "(c) He will be killed by tidal forces. (d) He will be killed by the singularity." No key published. | Key (c) true, (d) false. The solution's bracket accepts "the singularity causes the tides" as understanding, but the box still marks (d) = true wrong. | (c) = true is sound: for 4e6 solar masses the tide reaches about 1000 g across 2 m at r of about 6e7 m, 0.005 r_s, long before r = 0 (and the Lecture 24 deck's song, slide 24: "tides will make you slim tall ... you get squished"). Make (d) single-valued in the statement, e.g. add to the instruction of part 3: "Read 'kills him' as the direct cause of death." Keep the bracket in the solution. |
| W2 | warning | Problem 1.3 (j), box p1-j | "(j) The concepts of space and time as we know them are no longer valid inside the event horizon." | Key false (GP metric regular there; breakdown only at the singularity), with a note that "true" for the r/t role swap is a different point. | The statement admits both readings (inside, r is timelike and the coordinate t fails, which the Lecture 23 slides stress). Either add a bracket to the statement so that only one reading is left, e.g. "(that is, general relativity can no longer describe the region just inside the horizon)", or take (j) out of the boxes and make it self-marked with the present explanation of both readings. |
| W3 | warning | Problem 10(c), box p10-drop, third mistake | (our own problem) | Mistake `sqrt(1 - (1 - 2*M/r0)/(1 - 2*M/r))` with hint "Check the limit r = r0: ... its speed must be zero there, and it must rise as r falls." | For every point in vars (r < r0, both above 2M) the root is of a negative number, so lib/answers.ts evaluates it to NaN (non-number result) and this mistake can never be matched; content:check does not catch it. The hint is also misleading: that formula is zero at r = r0 too. Replace it with a mistake that is finite over the ranges, e.g. `sqrt(2*M/r - 2*M/r0)/(1 - 2*M/r0)` with hint "The shell speed is abs(dr/dτ) divided by Ẽ, not by Ẽ²: check the factor 1 − 2M/r₀.", or drop it. |
| W4 | warning | Problem 6(e), check step | (our own problem) | r = 26,570 km gives T = 43,100 s; "The orbit was chosen so that a satellite goes round exactly twice while the Earth turns once" (half a sidereal day = 43,082 s). | 26,570 km is 10 km above the nominal GPS semi-major axis (26,559.7 km); the radius for exactly half a sidereal day with GM = 3.986e14 is 26,562 km. Either write "almost exactly twice (43,100 s against 43,082 s)", or use r = 26,560 km: then v = 3.874 km/s, T = 11.97 h (43,078 s), GM/(rc^2) = 1.670e-10, gain 45.65 us, loss 7.109 us, net 38.54 us, 11.55 km per day (all boxes stay within tolerance, but the calcs file and every quoted figure must be updated). The first fix is the smaller one. |
| I1 | info | Optional Problem B | Rendered p. 6 (400 dpi crop) reads "... - 2 sqrt(2M/r) dr dt + dr^2 - r^2 (dθ^2 + sin θ^2 dφ^2)". | Calls "+dr^2" and "sin θ^2" MIT misprints; prints - dr^2 and sin^2 θ. | Verified: the GP metric of Problem 2 expands to (1 - 2M/r)dt^2 - 2 sqrt(2M/r) dr dt - dr^2, and MIT's own "Big hint" says the metric is the GP metric. With +dr^2 part (e) would not give Schwarzschild. Correct as is. |
| I2 | info | Optional Problem E | p. 8 refers to "the sketch" twice; the rendered page has a blank gap where it belongs. | Says the sketch is missing and describes the geometry in words. | Verified. The words match MIT's definitions (β, θ, δ, b, h, α = h/D_S). |
| I3 | info | Problems 6, 7, 10, 12.1, F | MIT names only Taylor and Wheeler exercises or Project A. | Each marked "our own" in its statement and in the intro list. | Correct. Problems 4, 12.2 and H restate the result instead of the textbook equation; H(a) left out with a note. |
| I4 | info | Problem 8(b) | "orbital period ... for a circular orbit at r just outside the Schwarzschild radius" | Kept, with a check step that no body can circle inside 3M and that the result is a time scale only. | Good handling. The bookkeeper speed c/sqrt 2 and the 6M comparison (4.57 ms for 10 solar masses against 4.5 ms in the evidence lesson, which uses GM = 1.327e21) are right. |
| I5 | info | Intro and points | MIT gives 3 points for handing in. | Left out; 126 points. | Sum checked: 15+9+6+6+9+27+3+6+18+9+6+12 = 126. MIT's splits (P1 2/3/10, P5 3+3+3, P6 9 x 3, P9 6 x 3, P12 6+3+3) are kept. |

## Arithmetic and answer checks
- Every number on the page recomputed independently (blind9.py and check9.py in this folder): σ(4M) = 4.5912M (also by quadrature); σ(4M) - σ(3M) = 1.542M; excess at 100M 6.283M against 6.298M; r_s = 4158 m, factor 0.7643, 4.586 keV, z = 0.308, weak-field 4.75 keV, R/r_s = 2.4, 5.153 keV at 20 km; GPS 6.953e-10, 465.1 m/s, 1.203e-12, ratio 578, 3.873 km/s, 43,102 s = 11.97 h, 1.669e-10, 45.66, 7.107 and 38.55 us/day (exact ratio 38.549), 11.56 km, Earth r_s 8.87 mm; ρ(1 M_sun) = 1.822e19 kg/m^3, M_water = 2.70e38 kg = 1.350e8 M_sun; R_S 2.970 km and 2.970e6 km (4.27 R_sun); GM_sun/c^3 = 4.954e-6 s, P = 8.803e-5 s, 88.03 s; 26.42 s and 6.6 us; largest bookkeeper speed 0.385 at 6M; 0.612 for a drop from 10M seen at 4M; 9549.8 km (3172 km up, 9567 km without rotation; 465/7924 = 5.9%); 0.7071, 5.858 yr, r = 4M, L = 4M, 0.5, at 3.03M 0.0995 and Ẽ = 3.42; images 1.618 and -0.618 θ_E; g_shell at 4M 0.0884/M; Shapiro 33.02 s and 45.62 us (exact integral 45.62 us); tide at the horizon of 4e6 M_sun 1.27e-3 m/s^2. All agree.
- calcs/8.033/8-033-problem-set-9.yaml: `pytest tests/calc -k "problem-set-9 or problem_set_9"` in the worktree: 471 passed.
- Answer boxes: every value/expr equals the solution's result; formula vars keep each answer finite and physical (r > 2M, r < r0, R < r); tolerances reject the listed wrong numbers (p11 at 0.1% rejects 9567 km, 0.18% off, and accepts 9549.8 km and the 9550.5 km that the true 5.87% rotation gives); every listed mistake differs from the answer and its hint is true of that formula, except W3.
- Choice keys p1-hair, p3-sketch, p4-far, p5-relay, p9-rel, p9-book, p12-photon: all correct. No hint gives a result away (p10b's hint points to part (a)'s solution but tells the reader to work it out first; acceptable).

## Coverage and order
- All twelve problems and optional A to H are present in MIT's order with MIT's parts. Left out, each with a note: the handing-in points, B(a) and (b) (reading Visser's article), H(a) (a textbook equation by number), MIT's pointer to a "Science handout" (replaced by the evidence lesson) and Problem 12.2's hint about the lecture notes.
- Citations: Formula `at=` pages match the printed pages of ps9.pdf (Problem 2 p. 2; 3 and 4 p. 3; 8 and 9 p. 4; 10 and 12 p. 5; A and B p. 6; C Eqs. (2), (3) and D p. 7; E p. 8; G and H p. 9). reading5 slide 30 (lecture16_gr) shows the Schwarzschild metric with c = G = 1; reading3 slide 4 (lecture23_bh3) shows the orbit equations and dt/dτ = Ẽ/(1 - 2M/r). Prose slide references verified: Lecture 23 deck slides 12-13 (mass, angular momentum, charge) and 24 (river model, horizon not singular); Lecture 24 deck slides 11 (supermassive evidence: quasars, 10^6-10^9 solar masses, 0.4 ly, 0.4 AU, 6-20M), 24 (review song, Hawking) and 30 (V404 Cygni 12±2, Cygnus X-1, no surface); Lecture 25 deck slides 10 (table of circular orbits: 3M, 4M with Ẽ = 1 and L = 4M, 6M), 14 (24 NAVSTAR satellites, 11,000 miles) and 17 (spaghetti or pancake); Lecture 26 deck slides 15 (4M/b, twice the Newtonian guess), 28 (evidence for GR incl. GPS), 40-41 (Kruskal, another side).
- Lesson claims checked: 1.3e-3 m/s^2 and 1.54M (schwarzschild-black-holes worked example), 3.87 km/s, 45.7 us and 7.2 us (doppler-aberration-twin-paradox), 4.5 ms with GM = 1.327e21 (evidence-for-black-holes), R_sun 6.957e5 km and the later-development note (lensing-evidence-for-gr).

## Licensing
- No MIT text copied beyond standard phrases; all problems reworded. No figure redrawn (E's sketch is missing at MIT and is described in words only). Slide 41 of the Lecture 26 deck carries "Courtesy of Andrew Hamilton. Used with permission."; the page only cites it in words, nothing reproduced. No "All rights reserved" material, no OpenStax or LibreTexts; Taylor and Wheeler not used.

## Notes
- Constants: G = 6.674e-11 (CODATA 2018: 6.67430e-11), c = 2.998e8 (299,792,458 m/s), GM_Earth = 3.986e14 (IERS / WGS 84: 3.986004418e14), R_eq = 6378 km (6378.137 km), Earth rotation 86,164 s (sidereal day 86,164.09 s): all correct to the digits used. M_sun = 2e30 kg and M_Earth = 6e24 kg are MIT's round values and the page says so. "4 million solar masses" for Sgr A* matches the lessons; current estimates are about 4.1 to 4.3 million (info only; the number is labelled as the page's own choice).
- Later developments (LIGO 2015, EHT 2019 and 2022) are marked as after the 2006 course and not available to MIT's students. Correct.
- No `## Summary` with answers; no em dashes; MIT's "while hole" read correctly as "white hole".
- Problem 11(b): the reasons are marked as the page's own; "11,000 miles ... if the miles are nautical" fits (altitude 20,192 km = 10,900 nautical miles).

COUNTS: errors=0 warnings=4 info=5

## Resolution (2026-11-21, by the page author)

- W1: the instruction of Problem 1 part 3 now says: Read "kills him" as the direct cause of death. The bracket in the solution stays.
- W2: statement (j) now has the bracket "(that is, general relativity can no longer describe the region just inside the horizon)", so the key "false" is unambiguous.
- W3: the third mistake of box `p10-drop` is now `sqrt(2*M/r - 2*M/r0)/(1 - 2*M/r0)` with the hint "The shell speed is |dr/dτ| divided by Ẽ, not by Ẽ²"; it is finite over the box's `vars`.
- W4: the check of Problem 6(e) now says the satellite goes round "almost exactly twice" (43,100 s against 43,082 s with the radius used); the radius and all figures are unchanged.
- The info items need no change.
- `status: reviewed`. `calc:test -k 8-033-problem-set-9` (115 passed) and `test:answers` pass; `content:check` run after the merge onto `main`.
