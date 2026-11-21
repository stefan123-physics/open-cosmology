## Blind solve

### My answers (written before opening the full page)
- p1a: impossible. Photon has invariant mass 0; an e+e- pair has invariant mass >= 2 m_e c^2 = 1.022 MeV. Equivalently, in the pair's zero-momentum frame the photon would need zero momentum but nonzero energy. Violates energy-momentum (4-momentum) conservation.
- p1b: proton: charge (and baryon number); electron: charge (and lepton number); antineutrino: lepton number (also angular momentum / energy-momentum: continuous beta spectrum).
- p1c: 28 up, 26 down quarks (54 quarks), 10 electrons (10 leptons, no other leptons).
- p2a: Ex' = Ex, Ey' = g(Ey - b Bz), Ez' = g(Ez + b By), Bx' = Bx, By' = g(By + b Ez), Bz' = g(Bz - b Ey) (numerical matrix check, random fields, beta 0.6: all six agree).
- p2b: (A) unchanged. (B) Ey' = g Ey, Bz' = -g b Ey, all others zero.
- p2c: a pure E field in S has a magnetic part in S'; the split into E and B depends on the frame, they are components of one field (tensor).
- p2d: frames moving parallel or antiparallel to E (B'_perp = -g beta x E).
- p3b: 2(0.938 + 20) = 41.876 GeV. p3c: K = 5 - 0.938 = 4.062 GeV.
- p4a: hbar w = Q - Q^2/(2 E0) = Q(2E0 - Q)/(2E0).
- p4b: K_recoil = Q^2/(2E0) = 1.953e-3 eV (E0 = 57 x 931.5 MeV).
- p4c: hbar w = Q + Q^2/(2E0) = Q(2E0 + Q)/(2E0).
- p4d: beta = 2.712e-7, v = 81.31 m/s (difference of which E0 is used: below 1e-6 relative).
- p5a: hv' = E/(1 + (E/mc2)(1 - cos th)).
- p5b: hv' = 252.72 keV, K_e = 247.28 keV.
- p5c: K_max = 330.91 keV (theta = 180 deg).
- p5d: m_e c^2 / 2 = 255.5 keV.
- p6a: E* = sqrt(2 E0 (E + E0)).
- p6b: 9771 pions (E total = 1e15 eV: 9771.53; E kinetic: 9771.54; proton 938.272 or 938.26 MeV: 9771.39 / 9771.32; all give 9771).
- p7i: E = (302^2 - 2)/2 = 45601 GeV. p7ii: 151 GeV each. p7iii: fixed target needs about 300 times more energy; available energy grows as sqrt(E) for fixed target, linearly for colliders.
- p11a-d: beta_CM = g0 b0/(g0+1), gamma_CM = sqrt((g0+1)/2); in CM each has E' = gamma_CM M0 c^2, p' = gamma_CM beta_CM M0 c; after: p'_x = 0; in S: p_x = gamma_CM^2 beta_CM M0 c, p_y = +/- gamma_CM beta_CM M0 c.
- p11e: tan theta = 1/gamma_CM; g0 = 7: theta = 26.565 deg, opening angle 53.13 deg.

### Comparison with the page (one line per answer id)
- p1-a: page answer 3 ("energy and momentum cannot both be conserved"), solution by the invariant E^2 - c^2p^2 (0 for the photon, at least (1.022 MeV)^2 for the pair). Agrees.
- p1-b: page answer 2 (lepton number) for the antineutrino; proton: baryon number (and charge); electron: charge (and lepton number). Agrees.
- p1-c-up 28, p1-c-down 26, p1-c-el 10. Agree.
- p2-ey: g*(Ey - b*Bz); p2-by: g*(By + b*Ez); all six formulas in the solution equal mine (and Lecture 15 slide 18). Agree.
- p2-case-a: answer 0 (both unchanged). Agrees.
- p2-bz: -g*b*Ey (with E_y' = g E_y, the rest zero). Agrees.
- p2 (c): same argument (the split into E and B depends on the frame; one object, the field matrix). Agrees.
- p2-d: answer 0 (only frames moving along the line of E). Agrees.
- p3 (a): epsilon = 2(m0c^2 + K). Agrees. p3-b: 41.88 GeV (mine 41.876). Agrees. p3-c: 4.062 GeV. Agrees.
- p4-emit: Q*(1 - Q/(2*E0)), equal to my Q(2E0 - Q)/(2E0) (by expansion and at the calcs sample points). Agrees.
- p4-recoil: 1.953e-3 eV. Agrees.
- p4-absorb: Q*(1 + Q/(2*E0)). Agrees.
- p4-speed: 81.3 m/s (mine 81.31; beta 2.712e-7). Agrees.
- p5-compton: E/(1 + (E/mc2)*(1 - cos(th))). Agrees.
- p5-photon 252.7 keV, p5-electron 247.3 keV (mine 252.72 / 247.28). Agree.
- p5-max: 330.9 keV (mine 330.91). Agrees.
- p5-limit: 255.5 keV. Agrees.
- p6-ecm: sqrt(2*E0*(E + E0)). Agrees.
- p6-pions: 9771 (ratio 9771.53). Agrees.
- p7-fixed: 45601 GeV; p7-collider: 151 GeV; (iii) same conclusion (fixed target needs about 152 times more kinetic energy in all; threshold grows as M^2 against M). Agree.
- p11 (a)-(d): same beta_CM, gamma_CM, E', p', p_x' = 0, p_x = gamma_CM^2 beta_CM M0 c, p_y = +/- gamma_CM beta_CM M0 c. Agree.
- p11-angle: 53.13 deg (theta = 26.57 deg). Agrees.

No disagreement between the blind answers and the page.

---
page: content/year-2/8.033/8-033-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps7/ (read: PDF via pdftotext, and page 1 rendered as an image to check the matrices of Problem 2)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture11_dyn2/ (read: slides 3, 5, 6, 13 rendered as images; the PDF has no text layer)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture12_part1/ (read: slide 24)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture13_part2/ (read: slides 11, 19, 21, 23, 24, 25, 27)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture14_em1/ (read: slides 14, 15, 16, 18)
  - https://pdg.lbl.gov/2024/tables/rpp2024-sum-baryons.pdf (read: proton mass 938.27208816 MeV)
verdict: pass-with-notes
---

# Review: Problem Set 7: Particle reactions, colliders and the transformation of E and B

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(c), "Check the result" | (own problem) | "Here the photon keeps at least 34% of its energy." The least it keeps is 1/(1 + 2 x 500/511) = 33.8%, so "at least 34%" is slightly false (calcs entry `p5-kept` rounds 33.82 to 34). | Write "Here the photon keeps at least 33.8% of its energy" (or "about a third"), and set `p5-kept` to expected '33.8'. |
| 2 | info | Problem 3 | 100 GeV protons in (b); 100 GeV available in (c); two protons collide | Proton and antiproton, 20 GeV per particle in (b), 10 GeV available in (c) | None: disclosed in the intro and in the problem (MIT took the problem from Resnick and Halliday). The antiproton makes "all the energy is available" cleaner (no baryon number to keep). |
| 3 | info | Problems 4 and 5 | Only textbook references (French 6-10, 6-17) and, for 5, the note on free electrons | Own problems, marked "(Our own problem ...)", MIT's points kept, MIT's note kept | None. Matches the run's rule. |
| 4 | info | Problem 2(a) | "Does your result agree with Resnick's? Which derivation was shorter?" | Compare with the lecture summary (Lecture 15, slide 18) | None: disclosed in the part. |
| 5 | info | Problem 1(b), check | Lecture 14 slide 19: "Momentum conservation appeared to be violated in beta-decay" | "energy and momentum seemed not to be conserved" | Historically it was mainly energy, so the page is, if anything, more accurate. Optional: no change. |
| 6 | info | Problem 11(b) statement | "Argue that before the collision, both particles have the same energy and magnitude of momentum in the CM frame, and that these quantities are characterized by beta_CM and gamma_CM." | "Argue that before the collision the two particles have the same energy and the same size of momentum in the centre-of-mass frame, and that beta_CM and gamma_CM give both." | Close to MIT's sentence but short and reworded; acceptable. Optional further rewording. |
| 7 | info | frontmatter `covers: [12, 14, 15]` | - | Problem 4 uses Lecture 13 (photon momentum, slide 24), which is a prerequisite but not in `covers` | Optional: add 13 to `covers` so the Lecture 13 lesson gets a "Practise" link. |

Citations checked (all correct): Problem 1(a) p. 1; Problem 2(a), 2(b) p. 1; 2(d) p. 2; Problems 3, 6, 7, 11 p. 2 (printed page numbers match PDF pages); eq. (11.1) p. 2. The matrix equation of Problem 2 matches MIT's sheet entry by entry (rendered page 1). Lecture 12 slide 3 (beta = cp/E), slide 5 (E = cp for photons), slide 6 (invariant of a system), slide 13 (force transformation, F'_y = F_y/gamma); Lecture 13 slide 24 (p = E/c for photons); Lecture 14 slide 11 (table: e 0.511, p 938.26, n 939.55, charged pion 139.6, neutral pion 135.0, amu 931.5 MeV), slide 19 (Pauli), slide 21 (gamma + gamma and gamma + particle pair creation), slide 23 (emission formula and the absorption speed beta' = hbar omega/(m0c^2 + hbar omega)), slide 24 (absorption needs more than Q0; Moessbauer crystal, "2cm/s Doppler shifts"), slide 25 (Harvard tower, 14.4 keV iron-57), slide 27 (Compton formula); Lecture 15 slide 16 (field matrix M) and slide 18 (summary of the six transformations, Lorentz force with 1/c). All match what the page says they show.

## Arithmetic and answer checks
All numbers recomputed (Python, scratch script):
- P1: 2 x 0.511 = 1.022 MeV; 939.55 - 938.26 - 0.511 = 0.779, shown as 0.78 MeV (today's values give 0.782 MeV); 28/26/10 quarks and electrons, total charge 0. OK.
- P2: matrix product verified numerically (random fields, beta = 0.6) in the blind solve; the intermediate product Lambda M on the page checked entry by entry; part (c) force check q(gamma E_y - gamma beta^2 E_y) = qE_y/gamma with u' = (-v, 0, 0) and (u' x B')_y = v B_z' verified; part (d) -gamma beta x E = (0, gamma beta E_z, -gamma beta E_y) verified. OK.
- P3: 41.876 GeV; 1.876/41.876 = 4.48% ("4.5%"); 20/0.938 = 21.32; 4.062 GeV; gamma = 5.330. OK.
- P4: E0 = 5.30955e10 eV; K = 1.9527e-3 eV; Q0/2E0 = 1.356e-7; beta = 2.7121e-7, v = 81.31 m/s (c = 2.998e8) or 81.307 m/s (exact c); the exact route (full Doppler factor, emitter of rest energy E0 + Q0) gives 81.30653 m/s against 81.30654 m/s: differs in the seventh digit, as the page says. OK.
- P5: 252.720 / 247.280 keV; cp_e = 560.24 keV, E_e = 758.28 keV, invariant 511.0 keV; 169.09 keV, 330.91 keV; 33.8% kept (see table row 1); 1 GeV backscatter 255.43 keV. OK apart from row 1.
- P6: E* = 1369.891 GeV; (1369.891 - 1.877)/0.140 = 9771.53, so 9771; with 135.0 MeV 10133.4, so 10133; 938.26 MeV still 9771; thresholds 999 891 GeV for 9771 pions and 1 000 096 GeV for 9772 (calcs entries within their 99 GeV tolerance). 1e6/0.14 = 7.14 million. OK.
- P7: 302^2/2 - 1 = 45601 GeV; 45602^2 - 45601^2 + 1 = 91204 = 302^2; 2 x 151^2 - 1 = 45601; ratios 152 and 304. OK.
- P11: beta0 = 0.989743, beta_CM = 0.866025, velocity addition 0.86603; theta = 26.565 deg, 2 theta = 53.130 deg; momentum and energy conservation in the (d) check verified. OK.
- Answer boxes: every `value`/`expr` equals the solution's result and the blind answer. Choice answers (p1-a 3, p1-b 2, p2-case-a 0, p2-d 0) correct. `vars` ranges keep every formula finite and physical (Q < E0, E > E0, b < 1, g > 1). Each listed mistake differs from the answer over the ranges by more than the checker's 1e-6 relative tolerance (smallest gap: Q against Q(1 - Q/2E0), 0.25% at Q = 0.1, E0 = 20). Number tolerances: 1% generally; 0.3% on p7-collider rejects the kinetic energy 150 GeV (0.66% off), as the part says; +/-4 (absolute) on p6-pions, as the part says.
- Mistake hints: all true of their formulas. One is loosely worded (info 8): the p4-emit mistake `Q*(1 - Q/E0)` says "A factor 2 went missing: the cross term of the square of (E_0 - hbar omega) is 2E_0 hbar omega". Dropping the 2 only there gives 2Q - Q^2/E0; Q(1 - Q/E0) comes from dropping it in both cross terms (left and right). Optional fix: "A factor 2 went missing in the cross terms: (E_0 - x)^2 has the cross term 2E_0x, on both sides of the equation."
- Info 9: p5-limit has tolerance 0.5% while "How to answer" says boxes accept 1% "unless the problem says otherwise", and Problem 5(d) does not say so (harmless for a reader who types 255.5). Optional: drop the tolerance, or state it in the part.
- No hint gives a result away (hints name the method: invariant, frame of zero momentum, round down, cos 90 = 0).
- Every solution ends with a check step (a limit, putting the result back, a second route or a number). OK.

## Constants and masses (against CODATA 2018 / PDG 2024 / AME 2020)
- Electron 0.511 MeV (CODATA 0.51099895): OK. Proton 938.3 MeV = 938.272 rounded (CODATA/PDG 938.27208816): OK; the slide's 938.26 is correctly reported as the slide's. Atomic mass unit 931.5 MeV (CODATA 931.49410242): OK.
- Info 10: neutron 939.55 MeV is the slide's table value (CODATA 939.56542052); the page presents it as the lecture's value, so it is correct as stated.
- Pions: 140 MeV is MIT's given value (PDG charged pion 139.57); neutral pion 135.0 MeV (PDG 134.977), cited to Lecture 14 slide 11, which shows 135.0: OK.
- Iron-57: 14.4 keV (14.4125 keV): OK. Info 11: the problem tells the reader to take 57 u for the nucleus; the AME 2020 atomic mass 56.9353928 u minus 26 electron masses gives a nucleus of 56.921 u, for which the recoil would be 1.9554e-3 eV and the speed 81.49 m/s (with 14.4125 keV). The page's numbers follow from its stated inputs and lie within its 1% tolerance of the real values.
- c = 2.998e8 m/s (299 792 458 exact): OK.

## Coverage and order
- MIT order kept: Problems 1, 2, 3, 4, 5, 6, 7, optional 11, with MIT's parts in MIT's order and MIT's points (9, 15, 6, 9, 9, 6, 6; total 60 without MIT's 3 points for stapling, disclosed).
- Left out: optional Problems 8, 9, 10 (textbook references only), disclosed. Optional Problem 11 given 5 non-counting points, disclosed.
- Added: the gamma0 = 7 number in 11(e), marked "our own addition"; own numbers in Problem 3; own Problems 4 and 5.

## Licensing
- No figures on the page; nothing redrawn from MIT. The only MIT figure on the cited slides (Lecture 14 slide 25, "Figure by MIT OCW") is not reproduced.
- No "All rights reserved" or "Courtesy of" material in Problem Set 7 or on the cited slides.
- Problem 3 (MIT's source: Resnick and Halliday) is restated with its own situation and numbers; Problems 4 and 5 (French) are own problems. No textbook text used. No OpenStax or LibreTexts.
- Wording checked against MIT's sheet: rewritten throughout; the closest sentence is 11(b) (table row 6), acceptable.
- PDG cited for one value only (allowed source).

## Notes
- No em dashes, no `## Summary`, no answers outside the solutions and boxes.
- Claims about lessons checked: the Lecture 15 lesson's worked example does use beta = 0.6 (in SI units, B_z' = -gamma beta E_y / c; the page's Gaussian -0.75 E_y is the same thing); the Lecture 14 lesson shows CERN (slides 6-8) and inverse Compton scattering (slide 27).
- `npm run content:check` and `npm run calc:test` were not run by this reviewer; the calcs entries were read and their numbers recomputed above (all consistent with the page, apart from `p5-kept`, see row 1).
- Info items: table rows 2-7 (6), and items 8-11 above (4): 10 in all.

COUNTS: errors=0 warnings=1 info=10

## Resolution (2026-11-21, by the page author)

- Warning 1: the check of Problem 5(c) now says the photon keeps "at least 33.8% of its energy, about a third"; the calcs entry `p5-kept` expects 33.8.
- Info (Problem 4(a) mistake `Q*(1 - Q/E0)`): the hint now says the correction term Q²/E_0 is twice too large and points to the factor 2 of the cross term.
- Info (p5-limit tolerance): Problem 5(d) now says "to within 0.5%".
- Info (`covers`): left as [12, 14, 15]; Lecture 13 is practised by Problem Set 6, and it stays a prerequisite here.
- The other info items need no change.
- `status: reviewed`. `calc:test -k 8-033-problem-set-7` (75 passed) passes; `content:check` run after the merge onto `main`.
