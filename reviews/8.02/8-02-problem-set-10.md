---
page: content/year-1/8.02/8-02-problem-set-10.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving09/ (read: local solving09.pdf, all 8 pages; pp. 2, 5, 6, 8 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: local chapte13em_waves.pdf; Sections 13.4, 13.6, 13.7, 13.10, 13.13, 13.14 checked; printed pp. 16, 18, 38, 49 rendered)
verdict: pass-with-notes
---

# Review: Problem Set 10: displacement current, electromagnetic waves and the Poynting vector

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree reviewed: `.claude/worktrees/ps-802-10` (commit 689c668). Page, calcs (`calcs/8.02/8-02-problem-set-10.yaml`) and page-scoped meanings in `data/symbols.json` were opened only after the blind solve below was written.

## Blind solve

Written from `stripped-set-10.mdx`, `solving09.pdf` (pp. 1 to 8, rendered) and `chapte13em_waves.pdf` (Sections 13.13 and 13.14, rendered p. 49) only, before opening the page, calcs or symbols. Numbers from rv10py/solve.py (sympy symbolic, numbers with mu0 = 4 pi e-7 and c = 3.00e8 as the page instructs; CODATA values alongside).

### My answers
- p1a: E = Q/(pi a^2 eps0), along +k
- p1b: Phi_E = Q r^2/(a^2 eps0)
- p1c: I_d = I r^2/a^2
- p1d: zero (no charge crosses the gap)
- p1e: line integral = 2 pi r B; B = mu0 I r/(2 pi a^2)
- p1f: along the curl of the fingers (anticlockwise seen from above, +phi)
- p1g: yes, it reverses (dE/dt reverses; E itself still up)
- p1h: yes (e.g. a surface that cuts a wire carrying current inside a changing field, or a leaky/dielectric-filled gap with conduction and changing E)
- p2a: |S| = Q I r/(2 pi^2 a^4 eps0), direction -r (radially inward), since k x phi = -r
- p2b: P = Q I d/(pi a^2 eps0), watts (J/s)
- p2c: P = Q I/C
- p2d: dU/dt = (Q/C) dQ/dt = Q I/C = P (checked: P/(QI/C) = 1)
- p2e: I = dQ/dt < 0, so B reverses (to -phi), E unchanged, S points radially outward: energy flows out through the sides at the rate |QI|/C
- p3a: +x
- p3b: lambda = 3 m
- p3c: f = 1.0e6 Hz
- p3d: v = 3.0e6 m/s (= c/sqrt(kappa kappa_m) = 3e8/100, consistent)
- p3e: B0 = E0/v = 1.0e-4 T, direction -j (k x (-j) = +i): B = -(1.0e-4 T) cos(2pi x/3 - 2pi e6 t) j
- p3f: lambda_vac = c/f = 300 m (299.8 m with exact c)
- p4a: u_E = u_B at every point; <u> = eps0 E0^2/2 = B0^2/(2 mu0)
- p4b: P_rad = I/c = E0^2/(2 mu0 c^2) = eps0 E0^2/2 = <u>
- p4c: <u> = 1350/c = 4.50e-6 J/m^3; pressure 4.50e-6 Pa
- p4d: I = E_rms^2/(mu0 c) = 2.387e-6 W/m^2; energy = I (1e-4 m^2)(3600 s) = 8.59e-7 J (8.60e-7 with CODATA)
- p4e: falls to one quarter
- p5a: I = 100/(4 pi) = 7.96 W/m^2
- p5b: E0 = sqrt(2 mu0 c I) = 77.5 V/m; B0 = E0/c = 2.58e-7 T
- p5c: K_max = 2 B0/mu0 = 0.411 A/m (total B at a perfect conductor is 2 B0; slip value B0/mu0 = 0.205)
- p5d: at the face itself (a B antinode, E node), and every half wavelength away from it
- p5e: zero

### Comparison (one line per answer id)
- p1-a `Q/(pi*a^2*eps0)`: agrees.
- p1-b `Q*r^2/(eps0*a^2)`: agrees.
- p1-c `I*r^2/a^2`: agrees.
- p1-d choice 1 "zero": agrees.
- p1-e `mu0*I*r/(2*pi*a^2)`: agrees.
- p1-f choice 0 "along the curl of the fingers": agrees.
- p1-g choice 3 "it changes, dE/dt reverses": agrees.
- p1-h choice 2 "yes: leaky capacitor": agrees.
- p2-a1 `Q*I*r/(2*pi^2*eps0*a^4)`: agrees.
- p2-a2 choice 2 "radially inward": agrees.
- p2-b `Q*I*d/(pi*eps0*a^2)`: agrees (unit W stated in the solution).
- p2-c `Q*I/C`: agrees.
- p2-e choice 0 "S reverses, energy flows out through the sides": agrees.
- p3-a choice 1 "+x": agrees.
- p3-b 3 m: agrees.
- p3-c 1e6 Hz: agrees.
- p3-d 3.00e6 m/s: agrees.
- p3-e1 1.00e-4 T: agrees.
- p3-e2 choice 3 "-j": agrees.
- p3-f 300 m: agrees (299.79 m with CODATA c; 0.07 % off, well inside 2 %).
- p4-a1 `eps0*E0^2/2`: agrees.
- p4-a2 `B0^2/(2*mu0)`: agrees.
- p4-c 4.50e-6 J/m³: agrees.
- p4-d 8.6e-7 J: agrees (8.594e-7 with the page's constants, 8.600e-7 with CODATA).
- p4-e choice 2 "a quarter": agrees.
- p5-a 7.96 W/m²: agrees.
- p5-b1 77.5 V/m: agrees (CODATA 77.43).
- p5-b2 2.58e-7 T: agrees (CODATA 2.583e-7).
- p5-c 0.411 A/m: agrees (CODATA 0.4111).
- p5-d choice 0 "at the face": agrees.
- p5-e choice 1 "zero": agrees.

No disagreement on any of the 31 answer ids.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(d), first choice of box p1-d | Session Q3 and Q4 are separate; nothing in Q4 states the displacement current | The distractor "I r²/a², the share of the wire's current that crosses the disc" prints the exact answer of formula box p1-c just above it; a reader stuck on (c) can read it off (d) | Replace that distractor with one that equals no other box, e.g. "I/2, half the wire's current, since the disc is midway between the plates" |
| 2 | warning | Problem 5(c), hint 1 and solution step "The field at the surface"; box p5-d | 13.14.2 has no such part; (d) is "our addition" | Hint 1 of (c) ("at the surface their magnetic fields add to 2B₀") and the (c) solution ("Their electric fields cancel at the surface, a node of E, while their magnetic fields add") answer p5-d, which comes after (c); a reader who opened (c)'s solution gets (d)'s 2 points for nothing | Move the standing-wave question before (c), so (c) builds on it; or change (d) to ask what (c) does not state, e.g. the distance from the face to the nearest magnetic node (a quarter wavelength) |
| 3 | info | Problem 2(e) solution | Session Q13 asks only "what changes" | "to be turned into heat in the resistance of the circuit": the session's circuit is a voltage source and wires, no resistance named; the energy may also return to the source | "into the rest of the circuit (heat in a resistance, or back into the source)" |
| 4 | info | Problem 3 statement, "our addition" | Notes give only κ_m = 1000, κ = 10 | μ₀ → κ_mμ₀, ε₀ → κε₀ and E₀ = vB₀: correct for a linear, isotropic insulator without free charge (Faraday's law gives E₀k = ωB₀, so E₀ = (ω/k)B₀ = vB₀). v = c/√(κκ_m) = 3.00e6 m/s equals ω/k exactly, so the notes' data are consistent | none |

Session slips the page notes, all confirmed on the rendered PDF:
- Q10 (p. 6, and tear-sheet p. 8): side area printed "A = 2πab"; correct is 2πad. The note in (b) is right.
- Q11 (p. 6) says "Rewrite your answer to Question 2"; Q12 says "as calculated in Question 3 above". Both can only mean Question 10 (power through the sides). The notes in (c) and (d) are right.
- Q13: problem page p. 6 prints dQ/dt > 0; tear-sheet p. 8 prints dQ/dt < 0. The note in (e) is right.
- Notes 13.14.10 jump from (e) to (g); the note in (f) is right.

Figures described in words, against the rendered session figures: p. 2, current I up the lower wire into the bottom plate (+Q), top plate −Q, E up: matches the statement of Problem 1. p. 5, B arrows: front arrow to the right, back arrows to the left, i.e. anticlockwise seen from above (+φ̂) while charging, as the page's field formula and answers use. k̂ × φ̂ = −r̂ (checked numerically): S inward, matching the session's own sentence after Q9 ("points radially into the capacitor"). Ferrite field (p. 49 rendered): (300 V/m) cos(2πx/3 − 2π×10⁶ t) k̂, as on the page.

## Arithmetic and answer checks
- All numbers recomputed (scratch rv10py/solve.py): E, Φ_E, I_d, B by sympy; P = S(a)·2πad = QId/(πε₀a²) and P/(QI/C) = 1 symbolically; dU/dt = QI/C; u_E − u_B = 0 and ⟨u⟩ = ε₀E₀²/2 by integration; ferrite λ, f, v, B₀ (direction k̂ × (−ĵ) = î), λ_vac; sunlight 4.50e-6; rms energy 8.594e-7 J; bulb 7.958 W/m², 77.46 V/m, 2.582e-7 T, 0.4109 A/m.
- Constants: the page fixes μ₀ = 4π×10⁻⁷ and c = 3.00e8. With CODATA 2018 every number box moves by at most 0.1 % (largest: λ_vac 300 vs 299.79, u_sun 4.500e-6 vs 4.503e-6), far inside the 2 % tolerance. CODATA μ₀ / (4π×10⁻⁷) = 1 + 5.5×10⁻¹⁰.
- The 2 % tolerance rejects the natural numeric slips: B₀ = E₀/c in the ferrite (1e-6 T), λ_vac = λ (3 m), K = B₀/μ₀ (0.205 A/m), E₀ without the factor 2 (54.8 V/m), E_rms taken as the amplitude (4.3e-7 J).
- Formula-box mistakes checked over the whole `vars` range; none equals its answer anywhere: the p1-b, p1-c, p1-e, p2-a1 mistakes coincide only at r = a or r = 2 (excluded, r ≤ 0.8 < a); p2-b's mistake equals the answer only at d = a/2 (d ≤ 0.2, a/2 ≥ 0.5); p2-c's Q²/2C equals QI/C only at Q = 2I (Q ≤ 3, 2I ≥ 8). Each mistake hint is true of its formula (p2-b: S(a)·πa² = QI/(2πε₀a), verified).
- Every solution step checked; each ends with a check (limit r = a, units, P = IΔV, Faraday cross-check 300·2π/3 = 1e-4·2π×10⁶, E₀B₀/2μ₀ = 7.96).
- Calcs: every `shown:` string occurs verbatim in the page (scripted check). `npm run calc:test -- -k "problem-set-10 or problem_set_10"` in the worktree: 720 passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Citations checked against printed footers: Eqs. 13.4.15 p. 9, 13.4.26 p. 11, 13.6.2 p. 15, 13.6.8/11/12 p. 16, 13.6.13 p. 17, 13.6.15 p. 18, 13.7.1 and 13.7.4 p. 21, 13.10.15/16 p. 38 (Section 13.10 is the appendix on reflection at conducting surfaces, as the page says); 13.13 Q1 p. 45, Q7 p. 46; 13.14.2 p. 46; 13.14.6 and 13.14.7 p. 48; 13.14.8 p. 49; 13.14.10 pp. 49 and 50. Session: Eqs. 9.1/9.2 p. 1 with I_d defined on p. 2; Poynting vector p. 4; fields p. 5; Q1 and Q2 p. 2, Q3 and Q4 p. 3, Q5 to Q8 p. 4, Q9 p. 5, Q10 to Q13 p. 6. All correct.

## Coverage and order
- Problem 1 = session Q1 to Q8 in order (Q5 done on paper inside (e), as stated), plus Conceptual Question 13.13.1 as (h). Problem 2 = Q9 to Q13 in order. Problems 3 to 5 = Additional Problems 13.14.10; 13.14.6 with 13.14.7(a) and Conceptual Question 7; 13.14.2; parts in the notes' order. No Solved Problem used.
- Additions marked: the Problem 3 material note, 5(d) and 5(e) "our addition"; isotropic radiation in Problem 5 "our reading". 13.14.6(c)'s pressure is asked without a box (same number as the box); acceptable.
- Points add to 100 (30 + 20 + 20 + 15 + 15) and the parts add up within each problem; "How to answer" says the points are ours.

## Licensing
- grep of both source texts: no "rights reserved" or "Courtesy of". No figure reproduced; situations described in words. No OpenStax. No em dashes (four en dashes in "Ampère–Maxwell", fine). No control characters. Wording is the page's own; only standard phrases, and the problem title "Reflections of True Love" quoted with its source.

## Symbols
- 52 page-scoped meanings; all fit and none gives an answer away.
- warning: `\ell` (loop side in the 5(c) solution, "A loop of length ℓ") has no meaning for this page and falls back to the general "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one", unit "m (a comoving ℓ_c is in notches, Guth's units)": cosmology wording on an 8.02 set, which content:check does not catch. Add to the `ell` entry: `{"text": "The length of the side of the Amperian loop that runs along the face.", "unit": "m", "pages": ["8-02-problem-set-10"]}`.
- info: the `I` meaning says intensity "in Problems 4 and 5"; the intensity I = ⟨S⟩ also appears in "What you need from the lessons". Could read "in the intensity formula of the lessons section and in Problems 4 and 5".

## Notes
- "How to answer" examples `mu0*I/(4*pi*d)`, `Q*r^2/(3*a)`, `3.2e5` and `4.1e-7` equal no box (checked against all answers). info: `Q*r^2/(3*a)` has the same shape as p1-b (Q r² over something with a), though not equal; a neutral example such as `q*x^3/(2*b)` would avoid even that.
- No statement sentence gives a box away apart from warnings 1 and 2. The (b) note giving the area 2πad corrects MIT's misprint and is not a give-away.
- `summary` names topics only.
- Right-choice positions vary (1, 0, 3, 2, 2, 0, 1, 3, 2, 0, 1); no choice is answerable from length or units; choices of one box do not answer another, except warning 1.
- info: the number boxes list no `mistakes`; if number boxes support them, p5-c `0.205` ("that is B₀/μ₀: at the mirror the reflected wave doubles the magnetic field") and p3-e1 `1e-6` ("you used c instead of the speed in the ferrite") would help readers.

COUNTS: errors=0 warnings=3 info=5

## Resolution (2026-11-28, by the page author)

- Warning 1 (p1-d distractor equal to p1-c): replaced by "I/2, half the wire's current, since the disc is midway between the plates", which equals no box; the right choice stays in position 1.
- Warning 2 (5(c) hint and solution answer 5(d)): (d) now asks the distance from the face to the nearest node of the magnetic field (choices λ/2, at the face, λ, λ/4; right answer λ/4 in position 3), which nothing in (c) states; its solution reworded to match. Points unchanged (100).
- Warning 3 (ℓ falls back to the cosmology meaning): added the meaning "The length of the side of the Amperian loop that runs along the face." (unit m), scoped to this page, to the `ell` entry.
- Info 3 (2(e) "heat in the resistance"): now "into the rest of the circuit (heat in a resistance, or back into the source)".
- Info 4 (Problem 3 material note): correct as written, no change.
- Info (I meaning): now names "the intensity formula of the lessons section and Problems 4 and 5".
- Info (typing example `Q*r^2/(3*a)`): replaced by the neutral `a*b/c`.
- Info (listed mistakes on p5-c and p3-e1): not done; number boxes do not support `mistakes` (only formula boxes, `FormulaSpec` in lib/answers.ts).
- Status set to reviewed.
