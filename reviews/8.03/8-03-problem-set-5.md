---
page: content/year-2/8.03/8-03-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset5/ (read: pdftotext plus rendered pages 1 to 3; Figure 1, Figure 2 and the Problem 5.5 drawing checked on the images)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec9/ (read, own download, pages checked one by one with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec10/ (read, own download, pages checked one by one)
verdict: pass-with-notes
---

# Review: Problem Set 5: energy, pulses and reflection on a string

## Blind solve

### My answers (written before opening the full page)
Z = sqrt(T rho_L) below.
- p1a: omega_n = (n pi/L) sqrt(T L/M) = n pi sqrt(T/(M L)); E_n = n^2 pi^2 T A^2/(4L) (= M omega_n^2 A^2/4).
- p1b: E = pi^2 T (A1^2 + 9 A3^2)/(4L); cross terms vanish by orthogonality of sin(pi x/L), sin(3 pi x/L) (in both KE and PE), phase pi/4 irrelevant.
- p2a: v = sqrt(T/rho_L).
- p2b: t = L/(4v): two pulses of height h/2, width L/4, at [L/8, 3L/8] and [5L/8, 7L/8]; right-hand one centred at 3L/4; middle undisplaced.
- p2c: t = L/v (half period 2L/v): both halves reflected (inverted) and back on top of each other: square pulse of height -h on [3L/8, 5L/8]; y(L/2) = -h.
- p3a: KE density = (1/2) rho_L v^2 y0^2 (x-vt)^2/sigma^4 exp(-(x-vt)^2/sigma^2); two humps either side of x = vt, zero at the centre.
- p3b: PE density = (1/2) T y0^2 (x-vt)^2/sigma^4 exp(-(x-vt)^2/sigma^2); equal to KE density since T = rho_L v^2.
- p3c: E = sqrt(pi) T y0^2/(2 sigma). Units N m^2/m = J; E ~ y0^2.
- p3d: P(t) = T v y0^2 (x0-vt)^2/sigma^4 exp(-(x0-vt)^2/sigma^2) (= v times total energy density); integral over t = E.
- p4a: left psi = A cos(k_L x - wt) + R A cos(k_L x + wt); right psi = tau A cos(k_R x - wt); k_R = w sqrt(rho_L/T_R) (k_L = w sqrt(rho_L/T_L)).
- p4b: psi continuous at 0: 1 + R = tau; massless ring: T_L dpsi/dx(0-) = T_R dpsi/dx(0+) => T_L k_L (1 - R) = T_R k_R tau.
- p4c: R = (sqrt T_L - sqrt T_R)/(sqrt T_L + sqrt T_R); tau = 2 sqrt T_L/(sqrt T_L + sqrt T_R).
- p4d: power ~ (1/2) Z w^2 A^2 with Z = sqrt(T rho_L); Z_L = Z_L R^2 + Z_R tau^2 holds identically. T_R = 4 T_L: transmitted fraction 4 Z_L Z_R/(Z_L+Z_R)^2 = 8/9 (= 0.889); R = -1/3, tau = 2/3.
- p4e: T_R = T_L: R = 0, tau = 1. T_R >> T_L: R -> -1, tau -> 0 (fixed end). T_R << T_L: R -> +1, tau -> 2 (free end).
- p5a: string at x<0: vertical force of string on ring = -T dy/dx(0); massless ring: -T y_x - b y_t = 0, i.e. T dy/dx = -b dy/dt at x = 0.
- p5b: r = (sqrt(T rho_L) - b)/(sqrt(T rho_L) + b) = (T/v - b)/(T/v + b).
- p5c: b -> 0: r = +1 (free end); b -> infinity: r = -1 (clamped). No reflection: b = sqrt(T rho_L). b = 3 sqrt(T rho_L): r = -1/2, reflected energy 1/4, grease absorbs 3/4 = 0.75.

### Comparison with the page (one line per answer id)
- p1-wn: page n*pi*sqrt(T/(M*L)); mine the same. Agree.
- p1-e: page n^2*pi^2*T*A^2/(4*L); mine the same. Agree.
- p1-e2: page pi^2*T*(A1^2 + 9*A3^2)/(4*L); mine the same. Agree.
- p2-v: page sqrt(T/rho); mine the same. Agree.
- p2-b-height: page 0.5; mine h/2. Agree.
- p2-b-centre: page 0.75; mine 3L/4. Agree.
- p2-c-mid: page -1; mine -h. Agree.
- p3-ke: page 0.5*rho*v^2*y0^2*(x-vt)^2/s^4*exp(-(x-vt)^2/s^2); mine the same. Agree.
- p3-pe: page 0.5*T*y0^2*(x-vt)^2/s^4*exp(-(x-vt)^2/s^2); mine the same. Agree.
- p3-compare: page choice 0 (equal at every point and time); mine equal everywhere. Agree.
- p3-e: page sqrt(pi)*T*y0^2/(2*s); mine the same. Agree (numerical integral of the finite-difference energy density: 0.938719 against 0.938719 for T = 1.7, rho = 0.6, y0 = 0.9, s = 1.3).
- p3-p: page T*v*y0^2*(x0-vt)^2/s^4*exp(-(x0-vt)^2/s^2); mine the same. Agree (time integral of the finite-difference power equals E above to 1e-10).
- p4-kr: page w*sqrt(rho/TR); mine the same. Agree.
- p4-bc: page choice 0, T_L dpsi_L/dx = T_R dpsi_R/dx; mine the same. Agree.
- p4-r: page (sqrt(TL)-sqrt(TR))/(sqrt(TL)+sqrt(TR)); mine the same. Agree (both boundary conditions checked as residuals at three times: below 3e-10).
- p4-tau: page 2*sqrt(TL)/(sqrt(TL)+sqrt(TR)); mine the same. Agree.
- p4-frac: page 0.8889; mine 8/9. Agree.
- p4-big: page choice 0 (R -> -1, tau -> 0); mine the same. Agree.
- p4-small: page choice 1 (R -> +1, tau -> 2); mine the same. Agree.
- p5-bc: page choice 0, T y_x + b y_t = 0; mine the same. Agree. It also matches Lecture 10 notes p. 8, Example 3 (-T dy/dx - b dy/dt = 0), with the same geometry (string on the left of the ring), so the drag sign is right.
- p5-r: page (sqrt(T*rho)-b)/(sqrt(T*rho)+b); mine the same. Agree (boundary-condition residual of f(t-x/v) + r f(t+x/v) below 1e-10 at three times).
- p5-match: page sqrt(T*rho); mine the same. Agree.
- p5-abs: page 0.75; mine 3/4. Agree.

No disagreement. Numerical check script: C:\Users\rober\AppData\Local\Temp\claude\57db58f3f8df99fb\aef93508-dfbb-4b41-8fa5-33c8aec6ea8f\scratchpad\rv\chk5.py.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | P1(a), P2(b), P2(c) and P4(a) statements | 5.1(a) asks only for the energy; 5.2(b), (c) ask only for a plot; 5.4(a) asks only for the general expression | Adds "First give the angular frequency ω_n", "Then answer for that time: what is the height ... where is the centre ...", "what is the displacement of the middle ...", "What is the wave number k_R ..." without saying they are ours (P4(d) and P5(c) do mark theirs "of our own") | P1(a): "First give the angular frequency $\omega_n$ of that mode." → "First, as a step of our own, give the angular frequency $\omega_n$ of that mode."; P2(b) and P2(c): "Then answer for that time:" → "Then answer, as a check of our own, for that time:"; P4(a): "What is the wave number $k_R$" → "As a step of our own: what is the wave number $k_R$" |
| 2 | info | P2(b) solution, Formula "A shape released from rest", at="p. 4 (a stationary shape is two progressing waves of half the height)" | Lecture 10 notes p. 4 write g = f(x + vt) + f(x − vt); no factor ½ is stated | Attributes "half the height" to the notes | at="p. 4 (a stationary shape is two progressing waves; the factor ½ is written out by us)" |
| 3 | info | Introduction, Notation paragraph | MIT 5.2 names no displacement symbol | "ψ in Problems 1, 2 and 4 ... as on MIT's sheet" | Optional: "ψ in Problems 1 and 4 (and, our choice, in Problem 2)" |

Citations checked against the printed page numbers: MIT sheet p. 1 (5.1, 5.2, 5.3 statement), p. 2 (5.3(c) hint, 5.3(d), 5.4), p. 3 (5.5(a) to (c)). Lecture 9 notes p. 1 (v = √(T/ρ_L)), p. 2 (normal-mode form), p. 3 (fixed and free boundary conditions, (2m − 1)π/2L), p. 5 (orthogonality, string with one free end). Lecture 10 notes p. 1 (f(x − vt), chain rule, travels right), p. 3 (kinetic and potential energy), p. 4 (stationary shape as two progressing waves), p. 5 (continuity, slope continuity, incident, reflected and transmitted waves), p. 6 (k = ω/v, R = (v₂ − v₁)/(v₂ + v₁), T = 2v₂/(v₁ + v₂), "Impedance" Z = T/v, wall R = −1 and T = 0, free end R = 1 and T = 2), p. 8 (Example 3, the ring with drag). All correct.

## Arithmetic and answer checks
- calc:test entries for this page: 56 passed (pytest -k 8-03-problem-set-5). Every answer id has a calcs entry with `answer:`.
- Own numerical checks (chk5.py): Problem 3 energy and time-integrated power, Problem 4 both boundary conditions and 8/9, Problem 5 boundary condition. All agree.
- P3(a) hump height ρ_L v² y₀²/(2eσ²), 1/e = 0.368 in plot units: correct; the plot range [0, 0.45] contains it. "Up ahead of the top, down behind it" is right for a pulse moving to +x.
- P3(d) sketch: first maximum at t = (x₀ − σ)/v is the leading flank: correct.
- P4(d), T_R = 4T_L: R = −1/3, τ = 2/3, transmitted 8/9, reflected 1/9: correct. The instantaneous-balance argument is correct.
- P5 energy balance Z(1 − r²) = b(1 + r)²: verified algebraically. b = 3Z and b = Z/3 both give 0.75: correct.
- P2(c) normal-mode check: the starting shape is symmetric about L/2, so only odd modes, and cos(mπ) = −1 for them: correct.
- P4(b) remark "the piece under the smaller tension is the steeper one": follows from T_L ψ_L' = T_R ψ_R'. Correct.
- P4(c) sign remark: Lecture 10 notes give R = (v₂ − v₁)/(v₂ + v₁) for equal tension; here R = (v_L − v_R)/(v_L + v_R). The page's statement that the sign is opposite in terms of the speeds is correct, and the τ mistake 2√T_R/(√T_L + √T_R) is indeed the lesson's 2v₂/(v₁ + v₂) rewritten. Hints true.
- Mistake hints checked one by one (p1-wn 3, p1-e 3, p1-e2 4, p2-v 2, p3-ke 3, p3-pe 3, p3-e 3, p3-p 3, p4-kr 2, p4-r 3, p4-tau 3, p5-r 3, p5-match 2): each describes its wrong formula correctly. p3-e "√(2π) T y₀²/σ from a = 1/(2σ²)" recomputed: correct. p1-wn "(2n − 1)π/2 ..." is indeed the one-free-end string of Lecture 9 notes p. 3.
- vars ranges: all finite and physical; each listed mistake differs from the answer over the ranges (p5-r's (T − b)/(T + b) coincides with the answer only on the line ρ_L = T, which five random points will not all hit).
- Number boxes: tolerance 1%; p4-frac 0.8889 rejects 1/9 and τ² = 0.444; p5-abs 0.75 rejects 0.25.
- Choice boxes use Unicode and none is answerable from units alone (p5-bc's ± b distractor has the same units).

## Coverage and order
- All five MIT problems and all their parts, in MIT's order, with MIT's 20 points each (part splits declared as ours). The own additions in P4(d) and P5(c) are marked; see finding 1 for those that are not.
- Figure 1 geometry (pulse of width L/4 centred at L/2) checked on the rendered page: the statement's 3L/8 to 5L/8 is right.
- MIT's α in 5.4(a) and T for the transmission coefficient are both noted on the page.

## Licensing
- MIT's sheet and both lecture notes carry no "rights reserved" or "Courtesy of" notice (grep on own downloads).
- No MIT figure is redrawn: the plots are generated from the page's own formulas (string at L/(4v) and L/v, and x² e^(−x²)). Wording is the page's own; MIT's hints are paraphrased and labelled.
- No OpenStax or LibreTexts material.

## Notes
- No `## Summary`, no em dashes (grep count 0).
- P4(b) hint 2 and P5(a) hint 2 give the vertical pull of each string; the reader still has to add the forces, so the result is not given away (not counted).
- `content:check` and `npm run build` were not run by this reviewer.

COUNTS: errors=0 warnings=1 info=2

## Resolution (2026-11-21, by the page author)

1. Warning 1: the added steps are now marked as ours: P1(a) "First, as a step of our own, give the angular frequency", P2(b) and P2(c) "Then answer, as a check of our own, for that time", P4(a) "As a step of our own: what is the wave number k_R".
2. Info 2: the citation of "A shape released from rest" now says the factor ½ is written out by us.
3. Info 3: the notation paragraph now says ψ in Problems 1 and 4 (and, our choice, in Problem 2).

`status` is now `reviewed`.
