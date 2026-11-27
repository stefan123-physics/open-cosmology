---
page: content/year-3/8.06/8-06-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-6/ (read: PDF as pdftotext, printed pp. 1-2)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: MIT8_06S18ch4.pdf, pdftotext)
  - Griffiths 9.11, 9.14 (not opened, by design; Problems 4 and 5 are the page's own and were checked on their own physics)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the rounded constants on the page agree with CODATA 2018 values known to the reviewer)
verdict: pass-with-notes
---

# Review: Problem Set 6: Spontaneous emission, lifetimes and ionization by light

## Blind solve

### My answers (written before the full page was opened)

### My answers (Gaussian units, delta H = 2H' cos wt, Gamma = 4 w^3 |d|^2 /(3 hbar c^3))
- P1(a): |<000|q z|001>|^2 = q^2 hbar/(2 m w); for m=+-1 the vector (x̂ +- i ŷ)/sqrt2 * sqrt(hbar/2mw) has the same squared length, so rate independent of m. Gamma = 2 q^2 w^2/(3 m c^3).
- P1(b): electron, hbar w = 10.2 eV, w = 1.5497e16 /s: tau = 3 m c^3/(2 e^2 w^2) = 3 mc^2/(2 al hbar w^2) = 6.645e-10 s; w tau = 3 mc^2/(2 al hbar w) = 1.0298e7.
- P2(a): rho(E) = 2 (L/2pi) dk/dE = L m/(pi hbar^2 k) = (L/pi hbar) sqrt(m/2E). Condition: final kinetic energy hbar w - V0 >> V0 (i.e. hbar w >> V0), then with V0 >> hbar^2/ma^2 one gets ka >> 1.
- P2(b): H' = e E0 x (well on 0<x<a, origin at the left wall), psi = sqrt(2/a) sin(pi x/a), u_k = e^{ikx}/sqrt L. Leading order ka>>1: <u_k|x|psi> ~ -sqrt(2/(aL)) pi e^{-ika}/k^2 (boundary terms of integrating by parts; f(0)=f(a)=0, f'(0)=0, f'(a)=-pi). |H'_{k1}|^2 = 2 pi^2 e^2 E0^2/(a L k^4). w = (2pi/hbar)|H'|^2 rho = 4 pi^2 e^2 E0^2 m/(hbar^3 a k^5). High frequency: k ~ w^{1/2}, so w ~ omega^{-5/2}.
- P3(a): r = A/(B rho(w0)) = e^{hbar w0/kB T} - 1.
- P3(b): nb = 1/(e^{hbar w0/kBT} - 1); r = 1/nb; stimulated rate = nb x spontaneous rate.
- P3(c): r = 1 at hbar w0 = kBT ln 2: nu0 = 4.333e12 Hz (T = 300 K); visible 5e14 Hz: h nu/kBT = 79.99, r ~ e^80, spontaneous wins; maser 1e10 Hz: r = 1.601e-3, stimulated wins.
- P4(a): only the three 2p states; <100|r|200> = 0 because both states are spherically symmetric and the angular integral of r̂ vanishes.
- P4(b): <100|x|211> = -128/243 a0 = -0.52675 a0, <100|y|211> = -i 128/243 a0, <100|z|211> = 0; |x comp| = 0.5267 a0; |<100|r|21m>|^2 = 2^15/3^10 a0^2 = 0.55493 a0^2 for m = 1, 0, -1.
- P4(c): A = (2/3)^8 al^5 m c^2/hbar = 6.268e8 /s; tau = 1.595 ns.
- P4(d): tau_H/tau_osc = (hbar/2 m w)/|r|^2 = (4/3)/(2^15/3^10) = 4*3^9/2^15 = 2.4027 (hydrogen's dipole matrix element is smaller than the oscillator's); He+: rate x Z^4 = 16, tau = 99.7 ps.
- P5(a): only to 2p (1s and 2s forbidden, Delta l = 0); hbar w = 5 Ry/36 = 1.8897 eV, lambda = 656.1 nm (H alpha); then 2p -> 1s (Lyman alpha, 121.6 nm).
- P5(b): |<210|z|300>| = 0.54179 a0; sum over m = 3 x 0.29353 = 0.88060 a0^2.
- P5(c): A = (4/3) al w^3 S/c^2 with hbar w = 5 al^2 mc^2/72: A = 768/1953125 al^5 mc^2/hbar = 3.932e-4 al^5 mc^2/hbar = 6.317e6 /s; tau = 158.3 ns; shared equally, 1/3 to each 2p m state.
- P5(d): tau3s/tau2p = 99.2; mainly the w^3 factor ((5/27)^3, a factor 157 slower), partly offset by a 1.59 times larger squared matrix element.

### Comparison (one line per answer id)
- p1-d2: q^2 hbar/(2 m w). Agrees.
- p1-dir: xy plane, same squared length (choice 3). Agrees.
- p1-gamma: 2 q^2 w^2/(3 m c^3). Agrees.
- p1-tau: 6.645e-10 s (box 6.65). Agrees.
- p1-wtau: 1.0298e7 (box 1.03). Agrees.
- p2-rho: L m/(pi hbar^2 k). Agrees.
- p2-cond: far above V0 (choice 1). Agrees.
- p2-m2: 2 pi^2 e^2 E0^2/(a L k^4). Agrees.
- p2-w: 4 pi^2 m e^2 E0^2/(hbar^3 a k^5). Agrees.
- p2-scale: omega^(-5/2) (choice 2). Agrees.
- p3-r: e^(hbar w0/kB T) - 1. Agrees.
- p3-n: 1/(e^x - 1). Agrees.
- p3-rn: 1/nb. Agrees.
- p3-mean: one photon in the mode (choice 0). Agrees.
- p3-nu0: 4.333e12 Hz (box 4.33). Agrees.
- p3-xvis: 79.99 (box 80.0). Agrees.
- p3-rmaser: 1.601e-3 (box 1.60). Agrees.
- p3-dom: spontaneous visible, stimulated maser (choice 2). Agrees.
- p4-which: three 2p, not 2s (choice 3). Agrees.
- p4-why: parity / spherical symmetry (choice 1). Agrees.
- p4-x: 128/243 = 0.5267 a0. Agrees.
- p4-r2: 2^15/3^10 = 0.5549 a0^2. Agrees.
- p4-a: (2/3)^8 al^5 m c^2/hbar. Agrees.
- p4-tau: 1.5953 ns (box 1.595). Agrees.
- p4-ratio: 3^9/2^13 = 2.4027. Agrees.
- p4-he: 99.71 ps (box 99.7). Agrees.
- p5-routes: 2p alone (choice 2). Agrees.
- p5-lambda: 656.11 nm. Agrees.
- p5-z: 0.54179 a0 (= 2^7 3^3 sqrt6/5^6). Agrees.
- p5-sum: 0.88060 a0^2 (= 2^15 3^8/5^12). Agrees.
- p5-a: 768/5^9 al^5 m c^2/hbar (my coefficient 3.93216e-4 equals 768/1953125). Agrees.
- p5-tau: 158.30 ns. Agrees.
- p5-share: equal thirds (choice 0). Agrees.
- p5-ratio: (5/3)^9 = 99.229. Agrees.
- p5-reason: lower frequency, omega^3 (choice 1). Agrees.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(a), choice box p1-dir | (our addition) | The right answer "lies in the xy plane and has the same squared length as for m = 0" (65 characters) is the longest of the four (48, 59, 62, 65) | Shorten it, e.g. "lies in the xy plane, with the squared length of m = 0" (53), or lengthen a distractor |
| 2 | warning | Problem 5(d), choice box p5-reason | (our own problem) | The right answer "its photon has a lower frequency, and the rate goes as ω³" (57) is the longest (52, 57, 43, 43) | Shorten it, e.g. "its photon's frequency is lower, and A goes as ω³" (about 48), or lengthen a distractor |
| 3 | warning | Problem 2(b), solution | Well on 0 < x < a; dipole H' = eE0 x (MIT only sets the model) | Uses x measured from the left wall, without saying that the result depends on this choice | Add one sentence: because the plane waves u_k are not orthogonal to psi0, the matrix element of x changes when the origin moves (with the origin at the well's centre the leading term becomes pi^2 sin^2(ka/2)/k^4 instead of pi^2/k^4; checked numerically at ka = 37.3: 2.0e-7 against 5.1e-6); the answer here is that of MIT's coordinates, and a correct treatment needs continuum states orthogonal to the bound state |
| 4 | info | Problem 1(b), check | (our addition) | "with hbar w = 3/8 al^2 mc^2 this is 4/al^3" | True for the exact Rydberg; with MIT's 13.6 eV the number is 1.0298e7 against 4/al^3 = 1.0294e7. Optional: say "about" |
| 5 | info | Problem 1(b), cite of eq. (4.5.29) for tau = 1/A | Notes p. 105: "The lifetime for the state is tau = 1/A" is the sentence just before (4.5.29), which is the exponential decay law | Cites (4.5.29) | Acceptable; "text before eq. (4.5.29)" would be more exact |

## Arithmetic and answer checks
- Every number recomputed (Python): P1 tau 6.645e-10 s, Gamma 1.505e9/s, w 1.550e16/s, w tau 1.030e7; P3 nu0 4.333e12 Hz, 69 um, x_vis 79.99, e^79.99 = 5.5e34, x_maser 1.600e-3, r 1.601e-3, nb 625, kT/h 6.25e12 Hz; P4 radial 256/81, components -128/243 and 128 sqrt2/243 = 0.745, |r|^2 0.5549, radial 1s-2s integral -0.0445 a0 (page "about -0.044"), al^5 mc^2/hbar 1.6065e10/s, (2/3)^8 0.03902, A 6.27e8/s, tau 1.595 ns, ratio 2.4027, He+ 99.7 ps; P5 terms 1612.4, -6449.7, 5159.8, sum 322.5, z 0.5418, x component 0.383, 2 x 0.383^2 = 0.2935, sum 0.8806, 768/5^9 = 3.932e-4, A 6.32e6/s, tau 158.3 ns, (5/27)^3 = 0.00635 (factor 157), 0.881/0.555 = 1.587, (5/3)^9 = 99.2, 121.5 nm, 656.1 nm, reduced-mass shift 0.054%. All agree.
- P2 exact integral I(k) and |I|^2 checked against direct numerical quadrature at k a = 3, 10, 37.3: agree to 1e-13.
- Power-of-2/3/5 bookkeeping of P4(c), P4(d) (4 x 3^9/2^15 = 3^9/2^13) and P5(c) verified.
- Formula boxes: each expr equals the solution's result; vars ranges [0.5, 2] (nb [0.5, 5]) keep every formula finite; each listed mistake differs from the answer by a constant factor or a different dependence, so it is rejected, and each hint describes that wrong formula correctly (e.g. p4-a "(4/3)(3/4)^3..." is exactly the factor 8 from using al^2 mc^2 for R_y; p2-w "2 pi^2" is the one-sided rate).
- Number boxes have no listed mistakes; tolerances (1%, 0.5% for lambda) accept 3-significant-figure answers. The lesson's rounded 1.60 ns passes the p4-tau box (0.3% off): that is correct behaviour, since 1.60 is 1.5953 rounded to 3 figures; it does not matter. With the exact Rydberg instead of 13.6 eV, P1's tau is 6.640e-10 s, also accepted.
- Choice-box right answers sit at positions 3, 1, 2, 0, 2, 3, 1, 2, 0, 1 (varied). Strictly longest: p1-dir and p5-reason (findings 1, 2). Ties: p2-cond (70/71/70/71), p2-scale (19/19/19/17), p3-dom (55 with a distractor), p5-routes (8, tied shortest with two distractors): acceptable. No distractor is also true (checked each; p4-why's "node of the 2s radial function" is false, as the page's own -0.044 a0 shows).
- Every solution ends with a check (units, limits, or a number).
- calc tests: pytest tests/calc -k problem-set-6 passed (636 passed).

## Coverage and order
- Problems 1 to 3 follow MIT's order and parts; points 15, 15, 10, 20, 20 = 80 as MIT; part splits add up. MIT's typo "x > 0" for the third region is corrected and flagged.
- MIT's Problems 4 and 5 (Griffiths pointers) are replaced by the page's own problems on the same subjects, clearly labelled; their physics is correct.
- Additions (boxes, 300 K, 5e14 Hz, Larmor check) are all declared in the introduction and at each part.
- Hints do not give results away (the P4(c) hint "one eighth power" narrows the form but leaves the work).

## Licensing
- MIT's sheet has no "All rights reserved" or "Courtesy of" items. No figures. Wording is the page's own; short quoted subject lines from MIT only. Griffiths was not used. Hydrogen wavefunctions are standard. No OpenStax or LibreTexts.

## Notes
- Citations to the notes, chapter 4 (checked in the PDF): (4.3.4), (4.3.7), (4.3.14), (4.3.54), (4.4.17), (4.4.18), (4.5.3), (4.5.8), (4.5.28), (4.5.30), (4.5.33), (4.5.34) all show what the page says; the unnumbered A/(B U) = exp(hbar w/kT) - 1 is on printed p. 107. Correct.
- Claims about lessons checked: thermal-transition-rates-einstein-coefficients has the 2p (m = 0) worked example with 1.60 ns and says 2s decays by two photons; covers [10, 11, 12, 13] match the four prerequisite lessons' lecture numbers.
- Symbols (data/symbols.json, meanings scoped to this slug): all fit. Small points: 'p' says "In 2p and 3p" but the page has no 3p; '\simeq' says "near a resonance", there is none here; '\psi_100' has no unit while the other hydrogen states have m^(-3/2). Optional tidy-ups.
- No em dashes; no Summary section with answers.

COUNTS: errors=0 warnings=3 info=2

## Resolution (2026-11-27, by the page author)

- Warning 1 (p1-dir right answer longest): the right choice is now "lies in the xy plane, with the squared length of m = 0" (53 characters, no longer the longest).
- Warning 2 (p5-reason right answer longest): now "its photon's frequency is lower, and A goes as ω³".
- Warning 3 (P2(b) origin dependence): the check step now says that the plane waves are not orthogonal to the bound state, that the result uses MIT's coordinates (x from the left wall), that from the centre the leading term would be π² sin²(ka/2)/k⁴, and that a careful treatment needs continuum states orthogonal to the bound state.
- Info: P1(b) check now says ωτ = 4/α³ holds exactly with the exact Rydberg and differs in the fourth figure with MIT's 13.6 eV; the τ = 1/A citation now reads "text before eq. (4.5.29)". Symbols: our own meaning of p now says "In 2p" (no 3p on the page); \simeq and ψ₁₀₀ are existing lesson meanings that this page only joined, left unchanged (add-only rule for this run).
- `status: reviewed`.
