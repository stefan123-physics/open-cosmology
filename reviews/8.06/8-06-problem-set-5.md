---
page: content/year-3/8.06/8-06-problem-set-5.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-5/ (read: PDF via pdftotext, 5 printed pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-3-semiclassical-approximation/ (read: eqs. (3.5.11), (3.5.22)-(3.5.27) and the prefactor remark)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: eqs. (4.1.12), (4.1.43)-(4.1.46), (4.2.12), (4.2.22), (4.2.33), (4.3.19)-(4.3.20))
verdict: pass-with-notes
---

# Review: Problem Set 5: Tunnelling out of a well, pulses on two levels and the vibrations of carbon dioxide

## Blind solve

### My answers (written before opening the full page)
- p1a: E1 = pi^2 hbar^2/(2 m d^2); true value lower because the wavefunction leaks into the walls (finite well: effectively wider box, lower kinetic energy).
- p1b: for x > d/2 the potential -eEx falls below E = -W beyond x2 = W/(eE): finite barrier, the electron can tunnel out to large x; no true bound state.
- p1c: -ln T = 2 int_{d/2}^{W/eE} sqrt(2m(W - eE x))/hbar dx = 4 sqrt(2m) (W - eEd/2)^{3/2}/(3 hbar e E); leading order 4 sqrt(2m) W^{3/2}/(3 hbar e E). Dropped: field-independent factor exp(+sqrt(2mW) d/hbar) in T (3.34 in the exponent for 1(e) numbers).
- p1d: v = pi hbar/(m d), Delta t = 2d/v = 2 m d^2/(pi hbar); tau = Delta t / T.
- p1e: E1 = 9.401 eV, W = 10.599 eV, x2 = 1.514e-6 m, -ln T = 3.3674e4 (3.3670e4 with the dropped term kept), v = 1.818e6 m/s, Delta t = 2.200e-16 s, log10 tau = 14608.67 (s), age 4.355e17 s, tau/age ~ 10^14591.
- p1f: tau ~ exp(c/E); exp(-c/E) has a zero Taylor series at E = 0 (all derivatives vanish), so every finite order of perturbation theory in E gives zero decay rate.
- p2a: P = |int v(t) e^{2iEt/hbar} dt|^2 / hbar^2; square pulse: v0^2 sin^2(E t0/hbar)/E^2.
- p2b: exact P = sin^2(theta); perturbative theta^2; good when |theta| << 1.
- p3a: dH~ = alpha[ s+ a e^{i(wa-wp)t} + s+ a^dag e^{i(wa+wp)t} + s- a e^{-i(wa+wp)t} + s- a^dag e^{-i(wa-wp)t} ].
- p3b: integral = alpha[ t s+ a + t s- a^dag + (e^{2iwt}-1)/(2iw) s+ a^dag + (e^{-2iwt}-1)/(-2iw) s- a ]; drop the bounded terms for t >> 1/w; |coefficient of alpha s+ a^dag| = |sin(wt)|/w (<= 1/w); P(e,n -> g,n+1) = alpha^2 t^2 (n+1)/hbar^2.
- p4a: P = |Vn0|^2 exp(-w^2 tau^2)/hbar^2.
- p4b: tau -> 0: P -> |Vn0|^2/hbar^2 (sudden kick); tau -> infinity: P -> 0 (adiabatic).
- p5a: Lambda = diag(3k/2, k/2, 0); R columns (1,-2,1)/sqrt6, (1,0,-1)/sqrt2, (1,1,1)/sqrt3; zero mode = rigid translation (centre of mass), no restoring force.
- p5b: V = (3k/2) y1^2 + (k/2) y2^2.
- p5c: [y_j, pi_l] = i hbar delta_jl; T_kin = sum pi_j^2/(2m).
- p5d: w1 = sqrt(3k/m), w2 = sqrt(k/m); a_j = sqrt(m w_j/(2 hbar)) (y_j + i pi_j/(m w_j)).
- p5e: d = -q sqrt6 y1 xhat = -q sqrt(3 hbar/(m w1)) (a1 + a1^dag) xhat; only mode 1 (antisymmetric stretch) absorbs; D = -q sqrt(3 hbar/(m w1)).

### Comparison (one line per answer id)
- p1-e1: page pi^2*hbar^2/(2*m*d^2) = mine. Agree.
- p1-lower: page choice 1 (reaches into the walls, longer wavelength) = mine. Agree.
- p1-escape: page choice 2 (to the right, tunnelling through a finite barrier) = mine. Agree.
- p1-lnt: page 4*sqrt(2*m)*W^(3/2)/(3*hbar*e*Ef) = mine (leading order). Agree; dropped term -d sqrt(2mW)/hbar in -ln T matches mine (3.336 for 1(e) numbers, factor e^3.336 = 28.1 in T).
- p1-dt: page 2*m*d^2/(pi*hbar) = mine. Agree.
- p1-e1ev: page 9.40 = mine 9.4008. Agree.
- p1-expo: page 3.367 (x 10^4) = mine 3.36738e4. Agree.
- p1-logtau: page 14609 = mine 14608.67. Agree (see warning 1 on the tolerance).
- p1-age: page choice 4 (longer by thousands of powers of ten) = mine (10^14591). Agree.
- p1-series: page choice 2 (zero) = mine. Agree.
- p2-pulse: page v0^2*sin(E*t0/hbar)^2/E^2 = mine. Agree.
- p2-exact: page sin(th)^2 = mine. Agree.
- p2-pert: page th^2 = mine. Agree.
- p2-cond: page choice 3 (|int v dt| << hbar) = mine. Agree (see warning 2 on a distractor).
- p3-w1: page wa - wp = mine. Agree.
- p3-w2: page wa + wp = mine. Agree.
- p3-keep: page choice 3 (sigma+ a and sigma- a^dag) = mine. Agree.
- p3-size: page abs(sin(w*t))/w = mine. Agree.
- p3-emit: page al^2*(n+1)*t^2/hbar^2 = mine. Agree.
- p4-p: page Vn0^2*exp(-w^2*tau^2)/hbar^2 = mine. Agree.
- p4-fast: page choice 1 (|Vn0|^2/hbar^2) = mine. Agree.
- p4-slow: page choice 0 (goes to zero very fast) = mine. Agree.
- p5-l1: page 3*k/2 = mine. p5-l2: page k/2 = mine. Agree.
- p5-v1: page choice 3 ((1,-2,1)/sqrt6) = mine. p5-zero: choice 2 (translation) = mine. Agree.
- p5-v: page 3*k*y1^2/2 + k*y2^2/2 = mine. Agree.
- p5-t: page choice 0 (sum of pi^2/2m) = mine. Agree.
- p5-w1: sqrt(3*k/m), p5-w2: sqrt(k/m) = mine. Agree.
- p5-d: page -q*sqrt(3*hbar/(m*w1)) = mine. Agree.
- p5-mode: page choice 0 (first mode only, at w1) = mine. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(e), box `p1-logtau` (`tolerance="0.2%"`) | asks for the lifetime | box accepts 14609 +/- 29.2 | The tolerance is so wide that it accepts log10(1/T) = 14624.3 (Delta t forgotten, off by 15.7) and log10 of tau in years, 14601.2 (off by 7.5). Set `tolerance="0.03%"` (+/- 4.4): still accepts 14607.2 (unsimplified exponent kept) and 14608.7, rejects both slips. |
| 2 | warning | Problem 2(b), choice box `p2-cond`, choice 0 | condition for the perturbative result | distractor "the pulse is short compared with hbar/|v|, whatever its area" | A pulse of duration t_p with t_p << hbar/max|v| has |int v dt| <= max|v| t_p << hbar, so this distractor is a sufficient condition and arguably also true; "whatever its area" contradicts it. Replace with a plainly false option, e.g. "the pulse is long compared with hbar/|v|, whatever its area" or "the pulse is short compared with hbar/E". |
| 3 | info | Problem 3 statement | "for some constant alpha" | "with a constant alpha, taken real here" | Fine; MIT does not say real. Optionally add "(our assumption)". |
| 4 | info | Problem 3 statement | also writes H0 with sigma_z | only the projector form | Fine, same Hamiltonian. |
| 5 | info | Problem 2(a), check step | (no solution) | "The first-order result is good when v0 << E" | For very long pulses (t0 of order E hbar/v0^2) the exact Rabi phase drifts from the first-order one; the error stays below about v0^2/E^2 in absolute size, so the statement holds in that sense. Optionally say "good to within about v0^2/E^2". |

## Arithmetic and answer checks
- Recomputed 1(e) with CODATA 2018: E1 = 1.5062e-18 J = 9.4008 eV; W = 10.5992 eV; x_out = 1.5142e-6 m (7571 d, page "about 7600"); -ln T = 33673.76 (33670.42 with the bracket kept; difference 3.336 = d sqrt(2mW)/hbar); log10 T = -14624.33; v = 1.8185e6 m/s; Delta t = 2.1996e-16 s, log10 = -15.658; log10 tau = 14608.67; age 13.8 Gyr = 4.355e17 s, log 17.64; ratio 10^14591.03. All page numbers agree. Atomic-unit route: hbar^2/2m = 3.810 eV A^2, sqrt(10.60/3.810) = 1.668 /A, (4/3)(1.668)(15142) = 3.368e4: agrees. Factor e^3.336 = 28.1, log10 shift 1.45: agrees.
- e Ed = 1.4e-3 eV, hbar^2/2md^2 = 0.9525 eV: agrees with the page's 0.95 eV.
- `npm run calc:test` equivalent (pytest tests/calc -k "problem-set-5 and 8.06"): 81 passed.
- Formula boxes: each mistake differs from the answer over its vars and each mistake hint is true of its formula. p3-size: with w in [1, 1.2] and t in [3.2, 5], wt lies in (pi, 2 pi), so sin(wt) < 0 throughout and the `sin(w*t)/w` mistake is rejected everywhere; good choice of ranges. p1-lnt includes `d` in vars so the unsimplified mistake (bracket kept) is distinguishable (eEd/2 up to 0.4 against W >= 1).
- Hint algebra checked: completing the square in p4a hint 2; |int_0^t0 e^{iwt} dt|^2 = 4 sin^2(w t0/2)/w^2 in p2a hint 3; Rabi formula v0^2/(E^2+v0^2) sin^2(sqrt(E^2+v0^2) t0/hbar) in the p2a check; sin^2(alpha sqrt(n+1) t/hbar) in the p3b check; classical checks of w1 and w2 in p5d.
- Choice boxes (12): correct positions 1, 2, 4, 2, 3, 3, 1, 0, 3, 2, 0, 0; well spread. The correct choice is never systematically the longest (p1-lower, p1-escape, p4-fast, p5-zero have a longer distractor; p2-cond, p4-slow, p5-t, p5-mode have short correct options).
- No hint prints an earlier part's result. Some mistake hints name the answer of a neighbouring box (p3-w1 "wa + wp" says it is the frequency of the sigma+ a^dag term; p5-w1 "sqrt(k/m)" says it is the second mode; p2-exact/p2-pert name each other), but only after the reader has typed that very formula, so nothing is given away.

## Coverage and order
- All five MIT problems in MIT's order, MIT's points (15, 15, 15, 10, 25); part points add up (P1 2+2+4+2+3+2, P2 7+8, P3 7+8, P4 6+4, P5 6+3+5+6+5). The split of Problem 4 into (a) and (b) is declared as ours.
- Every part of MIT's statement is kept; the reading list and announcements are omitted and said so. Added boxes (2(a) square pulse, 3(a) frequencies, 3(b) size and emission probability, 1(e) E1 and exponent) are all declared in the intro and in the part text.
- `covers: [8, 9, 10, 11]`: Lecture 10 is justified. The first-order amplitude (4.2.33) that Problems 2 to 4 use is cited in the Lecture 10 lesson (fermis-golden-rule-constant-perturbations), not in the Lecture 9 one, and the 2(a) square pulse reproduces that lesson's (4.3.20). Lecture 8 (airy-functions-connection-formulae) holds T = exp(-2 int kappa) and the remark that WKB misses the prefactor and leaves the lifetime to the notes, as the page says.
- "Our addition" list in the intro: checked against every number on the page (E1 in eV, x_out, exponent, speed, bounce time, 13.8 Gyr, ratio, the dropped factor of 1(c)); complete. The 13.8 Gyr figure is in calcs/values.yaml (Planck 2013 rounded, site standard).
- Notation changes (calligraphic E for the field, T_kin, indices j, l, k, r, W, theta, sigma+-) are all stated where they occur. One tau meaning (lifetime in P1, pulse width in P4) in data/symbols.json is acceptable: both are times in s, and the meaning text separates the problems.
- Problem 5(e) bending remark is marked "(ours)" and is correct (the bending mode of CO2 is infrared active).

## Licensing
- MIT's sheet carries no "All rights reserved" or "Courtesy of" notice. MIT's spring-and-mass drawing on p. 3 is not redrawn; the page's only graph (1(b)) is generated from the formula. Wording is the page's own throughout; no OpenStax or LibreTexts material. CODATA values cited to NIST.
- Notes citations checked: (3.5.11) WKB T; (3.5.24)-(3.5.27) tau = 1/B, B = T/Delta t, Delta t = 2 int dx/v; (4.1.12) interaction-picture perturbation; (4.1.45)-(4.1.46) sudden kick, probability sin^2(|alpha|/hbar); (4.2.12) first-order state; (4.2.22) P_m<-n; (4.2.33) first-order amplitude; (4.3.20) constant perturbation. All correct. MIT sheet page numbers (p. 1 to p. 5) checked against the printed pages: correct for every `at=`.

## Notes
- No em dashes; no `## Summary` with answers; frontmatter `solutions: own`, `status: draft`.
- Problem 1 assumption hbar^2/2md^2 << V0 holds only loosely for MIT's numbers (E1 = 9.4 eV against V0 = 20 eV); the page says so in 1(a) and 1(e), which is good.
- I did not run `npm run content:check` (symbols, label layout); the symbol meanings scoped to this page were read and fit their uses.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1: `p1-logtau` tolerance is now 0.03% (±4.4), which rejects both listed slips (14624.3 and 14601.2) and still accepts 14607.2 and 14608.7.
- Warning 2: choice 0 of `p2-cond` now reads "the pulse is long compared with ħ/|v|, whatever its area", which is plainly not sufficient.
- Info: Problem 3 now says α is "taken real here (our assumption)". The other info items are left as they are.
