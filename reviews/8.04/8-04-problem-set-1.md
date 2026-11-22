---
page: content/year-2/8.04/8-04-problem-set-1.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps1_2016/ (read: local PDF and pdftotext; page 3 also checked as an image for the Problem 6 input column)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes1/ (read, per-page pdftotext)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes2/ (read, per-page pdftotext)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes3/ (read, per-page pdftotext)
  - https://physics.nist.gov/cuu/Constants/ (not fetched; CODATA 2018 values checked from memory: hbar c = 197.3269804 MeV fm, m_e c^2 = 0.51099895 MeV, 1/alpha = 137.035999084, c = 299792458 m/s)
verdict: pass-with-notes
---

# Review: Problem Set 1: The classical atom, photons and matter waves, and the interferometer

## Blind solve

### My answers (written to this file before the full page was opened)

Conventions: Gaussian units, e^2 = alpha hbar c; lambda_e = hbar/(m_e c) = 386.159 fm; r_0 = alpha lambda_e = 2.81794 fm. Interferometer: BS1, BS2 of Lecture 2 notes eq. (1.18), phase shifter multiplies the amplitude by e^{i delta} (notes p. 2, Fig. 2), upper output to D0.

- p1a: Delta E / K = (8 pi / 3) beta^3.
- p1b: beta^2 = alpha lambda_e / r. 50 pm: 7.507e-3; 1 pm: 5.308e-2; 1 fm: 1.679 (> 1, unphysical).
- p1c: dr/dt = -(4/3) r_0^2 c / r^2, t = (r_i^3 - r_f^3)/(4 r_0^2 c) = 1.3127e-11 s (13.1 ps). beta <= 0.053 on the stretch, corrections ~beta^2 < 0.3 %: justified. To 1 fm: non-relativistic t = 1.31267e-11 s, practically unchanged (r_f^3 negligible), though the formula is not valid near 1 fm (beta > 1).
- p1d: E = -e^2/(2r) -> -infinity as r -> 0; no classical minimum (point charges).
- p2a: K = -E, V = 2E.
- p2b: E_n = -alpha^2 E_e / (2 n^2); r_n = n^2 lambda_e / alpha.
- p3a: car 1.5e-38 m; marble 6.6e-31 m; smoke 5.92e-15 m; Rb-87 2.70e-8 m.
- p3b: 400 nm: nu = 7.495e14 Hz, E = 3.09 eV; 700 nm: nu = 4.283e14 Hz, E = 1.76 eV. Microwave 1.82e26 /s; laser 3.20e16 /s; phone 4.46e23 /s. Water: 8000 J -> 4.85e27 photons. Radio frequencies (more photons per unit energy).
- p4b: a = r cos theta, b = r sin theta; r = sqrt(a^2 + b^2), theta = atan2(b, a).
- p4c: iz = -b + i a; Re(iz) = -b.
- p4d: yes, 0; (z*)* = z; Re z = (z + z*)/2, Im z = (z - z*)/(2i); z z* = a^2 + b^2 = r^2 = |z|^2.
- p4e: cos 2t = cos^2 - sin^2; sin 2t = 2 sin cos; cos 3t = cos^3 - 3 cos sin^2; sin 3t = 3 cos^2 sin - sin^3; cos(A+B) = cosA cosB - sinA sinB; sin(A+B) = sinA cosB + cosA sinB.
- p5: energy and momentum cannot both be conserved: in the electron's rest frame pc + mc^2 = sqrt(p^2c^2 + m^2c^4) forces p = 0.
- p6a: P0 = (1/2)[1 + (|beta|^2 - |alpha|^2) cos d_l + 2 Im(alpha* beta) sin d_l], P1 = 1 - P0; input (0.6, 0.8i), d_l = pi/3: P0 = 0.98569.
- p6b: same with d_l -> -d_u: P0 = 0.15431.
- p6c: same with d = d_l - d_u: P0 = 0.64 (= |beta|^2).
- p7a: 1/3.
- p7b: 16/17 = 0.9412.

Numbers from a script (numpy) that also multiplied the matrices out for three random normalized complex inputs and random phases: the closed form agreed with the matrix product to 1e-15 each time.

### Comparison with the page (one line per answer id)

- p1-ratio: page (8 pi/3) b^3 = mine. Agree.
- p1-b50: page 0.00751, mine 0.0075073. Agree.
- p1-b1pm: page 0.0531, mine 0.053084. Agree.
- p1-b1fm: page 1.68, mine 1.6787. Agree.
- p1-time: page 1.31e-11 s, mine 1.3127e-11 s. Agree.
- p1-rel (choice): page marks "grows by about 8 parts in a million"; mine (1/50)^3 = 8e-6 relative change (1.31266e-11 -> 1.31267e-11 s). Agree.
- p1-energy (choice): page marks "falls without limit"; mine E -> -infinity. Agree.
- p2-k: page -E = mine. Agree.
- p2-v: page 2E = mine. Agree.
- p2-en: page -alpha^2 Ee/(2 n^2) = mine. Agree.
- p2-rn: page n^2 lam/alpha = mine. Agree.
- p3-car 1.5e-38, p3-marble 6.6e-31, p3-smoke 5.92e-15, p3-rb 2.70e-8 m: all equal mine. Agree.
- p3-e400 3.09 eV, p3-e700 1.76 eV (mine 3.0878, 1.7645): agree.
- p3-oven 1.82e26, p3-laser 3.20e16, p3-phone 4.46e23, p3-water 4.85e27: all equal mine. Agree.
- p3-classical (choice): page radio; mine radio. Agree.
- p4-a r cos(theta), p4-b r sin(theta), p4-r sqrt(a^2+b^2): agree.
- p4-reiz -b: agree.
- p4-both (choice) "Yes, exactly one: zero": agree.
- p4-zz a^2 + b^2: agree.
- p5-why (choice) "Energy and momentum cannot both be conserved": agree.
- p6-a 0.986: page's formula has "- 2 Im(alpha beta*) sin"; since Im(alpha beta*) = -Im(alpha* beta) it is identical to mine. Agree.
- p6-b 0.154: agree (page "+ 2 Im(alpha beta*) sin d_u" = mine).
- p6-c 0.64: agree.
- p7-a 0.333: agree.
- p7-b 0.941: agree.

No disagreement. The page's calcs file also passes: `pytest tests/calc -k 8-04-problem-set-1` in the ps-804-1 worktree gave 97 passed.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Frontmatter `summary` | (not in MIT) | "spiral into the nucleus in about ten picoseconds" | The page's own result is 1.31e-11 s, "about 13 picoseconds" (Problem 1(c) solution). Optionally write "in about 13 picoseconds" for consistency. |
| 2 | info | Problem 4(c), Formula "Multiplying by i", `at="Problem 4(c), p. 3"` | Sheet states iz = r e^{i(theta + pi/2)} | Formula also contains the own step e^{i pi/2} r e^{i theta} | Optional: add "(our own solution)" like the other solution formulas, or keep as is (the end result is on the sheet). |
| 3 | info | Problem 6 statement | Input column (alpha, beta), no normalization stated (checked on the image of p. 3) | Adds |alpha|^2 + |beta|^2 = 1, and number boxes with input (0.6, 0.8i) | Both additions are declared on the page ("our addition"); normalization is implied by a photon state. No change needed. |
| 4 | info | Problem 1(c) choice box, third option | (not in MIT) | Distractor "grows by about 2%, the square of the speed at 1 pm" | beta^2 at 1 pm is 0.28%, not 2%. As a wrong option this is harmless, but a distractor whose premise is itself false can confuse; optionally write "about 0.3%, the square of the speed at 1 pm". |
| 5 | info | data/symbols.json, `e` | (not in MIT) | One page-scoped meaning covering the Gaussian charge and Euler's number | Acceptable as is (see "Writer's two doubts"). |

## Arithmetic and answer checks
- Every number on the page recomputed (script in the scratch folder): 8.4e-6 (beta = 0.01), r_e = 2.818 fm, 3.5e-6 and 1.3e-3 (loss per turn at 50 pm and 1 pm), t = 1.31e-11 s, 1.0e-16 s below 1 pm, 1.7e-19 s and 7.9e7 (check route), 0.3% (beta^2 at 1 pm), lambda_e = 386.16 fm, r_1 = 0.5292e-10 m, E_1 = -13.606 eV, p = 4.4e4 and 1.0e-3 kg m/s, K = 6.21e-21 and 2.07e-27 J, p = 1.11e-19 and 2.45e-26 kg m/s, m_Rb = 1.444e-25 kg, speeds 0.11 and 0.17 m/s, size ratio ~1.7e7 ("some 10^7"), 7.5e14 and 4.3e14 Hz, 4.95e-19 and 2.83e-19 J, 1.65e-24, 3.13e-19, 5.61e-25 J per photon, 27 s to heat the water, laser/phone photon ratio 1.4e7 and power ratio 25, X-ray/phone frequency ratio ~1e9 (for ~1e18 Hz X-rays), cos 3(60 deg) check = -1, 0.986/0.014, 0.154/0.846, 0.64, 1/3 and 2/3, 16/17. All correct.
- Constants against CODATA 2018: 197.327 MeV fm, 0.510999 MeV, 1/137.036, 2.998e8 m/s are correct roundings. 1.66e-27 kg and 1.602e-19 J are correct roundings.
- Mistake hints of the formula boxes all checked true: (4 pi/3) b^3 is Delta E/(m v^2); (4/3) b^3 is the loss in time r/v over K; -alpha^2 Ee/n^2 is V_n; alpha^2 Ee/(2n^2) is K_n; n lam/alpha omits the n in v_n; n^2 lam alpha is smaller than lam for the box's n range 1 to 5 (n^2 alpha < 1); the p2-k, p2-v, p4 mistakes are as described. Each mistake differs from the answer over the `vars` ranges, and the ranges keep every formula finite and physical (E < 0 for bound orbits).
- Tolerances: 2% (1% in Problems 6 and 7) accepts 3 significant figures and also h = 6.626e-34 or c = 3e8 variations in Problem 3; it rejects the wrong-leg answers of Problem 6 (0.986 vs 0.154) and every listed mistake.
- Points: 3+3+3+1 = 10, 2+3 = 5, 5+5 = 10, 3+2+3+4+3 = 15, 5, 4+3+3 = 10, 5+5 = 10; problem totals equal MIT's.
- Each solution ends with a check (units, a limit, a number or a sum rule).
- No hint gives a result away (the Problem 1(b) second hint names the length alpha hbar c/(m_e c^2) but leaves the number to the reader; acceptable).

## Writer's two doubts
- **1(c), the spiral down to 1 fm with the non-relativistic formula.** The page handles it correctly: it answers MIT's question as asked (the non-relativistic time changes by (1/50)^3 = 8e-6, about 1e-16 s), and it says plainly that the formula cannot be trusted near 1 fm (beta > 1 from part b) while that stretch adds almost nothing. My blind answer is the same. No change needed.
- **Symbol `e` with two uses (Gaussian charge in e^2, and Euler's number as a base).** The meaning is scoped to this page only (`pages: [8-04-problem-set-1]`), so no general meaning was widened, and both uses really occur on the page (Problems 1, 2 and 4). Since the registry is keyed by form, one page-scoped meaning naming both uses is the right approach; the page does the same for alpha, beta, a, r and n. Acceptable (info).

## Coverage and order
- All seven MIT problems and all parts, in MIT's order and with MIT's points (part splits are the page's own and declared as such).
- Additions, all declared on the page: choice boxes for explain/compare questions, a chosen input (0.6, 0.8i) for Problem 6, the atomic mass unit for Problem 3, normalization of the Problem 6 input, and the beam-splitter matrices from the notes.
- The page corrects two things on MIT's sheet without fuss: "Mach-Zender" is written Mach–Zehnder, and MIT's "Compton wavelength lambda = hbar/(m_e c)" is explained as the reduced Compton wavelength and renamed lambda_e (consistent with the Compton lesson's lambda_C = h/(m_e c) = 2.426 pm).

## Citations
- Sheet pages: Problem 1 p. 1; Problems 2, 3 p. 2; Problems 4, 5, 6(a) p. 3; Problems 6(b), 6(c), 7 p. 4: all match the printed page numbers. Eqs. (1) and (2) of Problem 4 are on p. 3.
- Lecture 1 notes: |z|^2 = z z* eq. (2.5) p. 4; Euler eq. (2.6) p. 5; E = h nu eq. (3.1) p. 6: correct (the formula cited also contains hc/lambda, which follows from nu = c/lambda in the next sentence of the notes).
- Lecture 2 notes: phase shifter p. 2 (Fig. 2, factor e^{i delta}); BS1, BS2 eqs. (1.17)–(1.18) p. 4, matrices match; empty interferometer (alpha, beta) -> (beta, -alpha) eq. (1.19) p. 4; bomb probabilities 1/2, 1/4, 1/4 eq. (2.25) p. 7: all correct.
- Lecture 3 notes: E^2 - p^2c^2 = m^2c^4 eq. (2.13) p. 3; E = pc and p = E/c eqs. (2.15)–(2.16) p. 4; classical electron radius "about 2.8 fm" p. 4; "the photon cannot be absorbed by the electron ... (exercise)" p. 5; de Broglie eq. (3.23) p. 6; wave-effect condition (3.25) p. 6: all correct.
- Claims about lessons: the Compton lesson quotes the classical electron radius as about 2.8 fm (checked); the Mach–Zehnder lesson has the cos^2(delta/2) plot and a worked example giving 1/3 by comparing the two ending outcomes (checked); the hydrogen-atom lesson exists and gives the Bohr radius and 13.6 eV (checked).

## Licensing
- MIT's sheet and the three note chapters carry no "All rights reserved" or "Courtesy of" notice (the only "courtesy" in Lecture 1 notes p. 2 is prose: "courtesy of linearity").
- No figure is reproduced or redrawn; statements are in the page's own words; no OpenStax or LibreTexts material.
- No em dashes; no `## Summary` with answers.

## Notes
- Symbol meanings for the page were all read (54 page-scoped entries); units and wording fit the page. 
- Uncertain: I did not check how the Answer component displays a 1% tolerance, which the "How to answer" text says the box shows.

COUNTS: errors=0 warnings=0 info=5

## Resolution (2026-11-22, by the page author)

No errors or warnings. Info items fixed:
- 1: the summary now says "about 13 picoseconds", the page's own result.
- 2: the "Multiplying by i" formula is cited as "(our own solution)".
- 4: the wrong option of the 1(c) choice box now says "about 0.3%".
- 3 and 5 need no change.
Status set to `reviewed`.
