---
page: content/year-3/8.05/8-05-problem-set-9.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-9/ (read: pdftotext of the sheet, p. 2 also rendered as an image)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: pdftotext, cited equations checked)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-7/ (read: pdftotext, cited equations and pages checked)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-8/ (read: eqs. (1.8) on p. 3 and (5.3) on p. 16 checked on the rendered PDF)
verdict: pass-with-notes
---

# Review: Problem Set 9 (8.05): spin directions, rotations, ammonia in a field, a three-state molecule, NMR and the singlet

## Blind solve

### My answers (written before opening the full page)
- 1(a): <S>_n = (hbar/2)(sin th0 cos ph0, sin th0 sin ph0, cos th0) = (hbar/2) n.
- 1(b): <S.n'>_n = (hbar/2) n.n'; for th0=50, ph0=20, th'=80, ph'=80 deg: 0.2444 hbar.
- 2(a): R_eps^dag S R_eps = S + eps (n x S) + O(eps^2); n = z, x component: S_x - eps S_y.
- 2(b): <S>' = (hbar/2)(n' + eps n x n'), n' rotated by eps about n (right-handed). Example: <S_y> = eps hbar/2 = 0.0100 hbar.
- 3(a): K = sqrt(mu^2F^2 + D^2), cos th = -muF/K, phi = 0 (n = (D, 0, -muF)/K; th in [pi/2, pi]).
- 3(b): E = -K (ground, |n;+> = cos(th/2)|up> + sin(th/2)|down>), E = +K (|n;-> = sin(th/2)|up> - cos(th/2)|down>). Ground amplitude of |up>: cos(th/2).
- 3(c): weak: th = pi/2, E = -/+D, (|up> +/- |down>)/sqrt2. Strong: th = pi, E = -/+ muF, ground |down>, excited |up>.
- 3(d): ground level lowered by mu^2F^2/(2D).
- 3(e): F=0: H = -D sigma_x, spin precesses about the x axis at angular frequency 2D/hbar in the yz-plane; |psi> = cos(Dt/hbar)|down> + i sin(Dt/hbar)|up>, P_up = sin^2(D t/hbar). Strong field: H ~ muF sigma_z, spin precesses about z, P_up frozen at its value at switch-on.
- 4(a): H = [[EO,-D,0],[-D,EC,-D],[0,-D,EO]]; E = EO, (EO+EC)/2 +/- sqrt(((EO-EC)/2)^2 + 2D^2).
- 4(b): E - sqrt2 D: (|L> + sqrt2|C> + |R>)/2; E: (|L> - |R>)/sqrt2; E + sqrt2 D: (|L> - sqrt2|C> + |R>)/2. Splitting 2 sqrt2 D; P_C in ground = 1/2.
- 4(c): P_L = cos^4(D t/(sqrt2 hbar)), P_C = (1/2) sin^2(sqrt2 D t/hbar), P_R = sin^4(D t/(sqrt2 hbar)); first t with P_R = 1: pi hbar/(sqrt2 D).
- 5(a): |psi(t)> = cos(th/2)|+> + e^{i phi} sin(th/2)|-> (up to phase) with th(t) = g B1 t, phi(t) = pi/2 - g B0 t (checked by direct numerical integration of the Schrodinger equation).
- 5(b): phi = pi/2 - (B0/B1) th; first in xy-plane at th = pi/2: n = (sin(pi B0/(2B1)), cos(pi B0/(2B1)), 0). Turns = B0/(4B1) = 500 (and then n = +y).
- 6(a): R unitary keeps |-> orthogonal to |+>, so R|-> is a unit vector orthogonal to |n;+> in a 2-dim space: a phase times |n;->.
- 6(b): (R x R)|Psi> = e^{i beta} (|n+>|n-> - |n->|n+>)/sqrt2 = det(R)|Psi> = |Psi> for R in SU(2). Example: <Psi|(R x R)|Psi> = 1.

### Comparison (one line per answer id)
- p1-sx: (ħ/2) sin θ₀ cos φ₀ = mine. Agree.
- p1-sz: (ħ/2) cos θ₀ = mine. Agree.
- p1-rel: "equals ħ/2 times n" = mine. Agree.
- p1-dot: ħ/2 times the cosine of the angle = mine. Agree.
- p1-num: 0.244 (exact 0.24441) = mine. Agree.
- p2-term: n × S = mine (sign derived: (i/ħ)[S_n, S_j] = (n × S)_j). Agree.
- p2-z: −S_y = mine. Agree.
- p2-sy: 0.0100 = mine. Agree.
- p3-k: sqrt(Δ² + (μF)²) = mine. Agree.
- p3-cos: −μF/K = mine. Agree.
- p3-phi: 0 = mine. Agree.
- p3-eg: −sqrt(Δ² + (μF)²) = mine. Agree.
- p3-amp: cos(θ/2) = mine. Agree.
- p3-weak: π/2 = mine. Agree.
- p3-strong: |↓⟩ = mine. Agree.
- p3-shift: (μF)²/(2Δ) = mine. Agree.
- p3-axis: about the x axis = mine. Agree.
- p3-pup: sin²(Δt/ħ) = mine (expm check: 0.41502 vs 0.41502 at Δt/ħ = 0.7). Agree.
- p3-freeze: stays near the value it had = mine. Agree.
- p4-mid: the oxygen energy = mine. Agree.
- p4-low: (E_O+E_C)/2 − sqrt((E_O−E_C)²/4 + 2Δ²) = mine (numpy eigh of the 3×3 matrix). Agree.
- p4-split: 2√2 Δ = mine. Agree.
- p4-camp: 0.5 = mine. Agree.
- p4-anti: (|L⟩ − |R⟩)/√2 = mine. Agree.
- p4-pl, p4-pc, p4-pr: cos⁴(Δt/(√2ħ)), ½ sin²(√2Δt/ħ), sin⁴(Δt/(√2ħ)) = mine (expm of the 3×3 Hamiltonian at Δt/ħ = 0.7 gives 0.59964, 0.34945, 0.05091, equal to all three). Agree.
- p4-tr: πħ/(√2Δ) = mine. Agree.
- p5-theta: γB₁t = mine. Agree.
- p5-phi: π/2 − γB₀t = mine (direct numerical integration of the Schrödinger equation in the rotating field, γ = 1, B₀ = 3, B₁ = 0.4, t = 2.5: ⟨σ⟩ = (0.78930, 0.29168, 0.54030), equal to n(θ, φ) from these formulas). Agree.
- p5-spiral: π/2 − (B₀/B₁)θ = mine. Agree.
- p5-turns: 500 = mine. Agree.
- p6-why: R is unitary = mine. Agree.
- p6-pp: 0 = mine. Agree.
- p6-phase: 1 = mine (numerically ⟨Ψ|R⊗R|Ψ⟩ = 1.0000 for R = exp(−iπσ₂/4)). Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro ("A few things differ") and the page-scoped meaning of `F` in data/symbols.json | The sheet writes the field as ε (a varepsilon, seen on the rendered p. 2). The script ℰ is the notation of the lecture notes, ch. 7 eq. (5.2) | "MIT writes a script E" | Intro: "(MIT's sheet writes ε, the lecture notes a script E)". Symbol meaning of F: "... (MIT's sheet writes ε)". |
| 2 | info | `covers`, `lecture` | OCW calendar: Lectures 18–20 | `covers: [16, 17, 18, 19]`, `lecture: 19` | Defensible from the topics: ammonia is Lecture 17, NMR Lectures 17–18, the singlet Lectures 18–19, and nothing needs Lecture 20 (EPR/Bell). Optionally say in the intro that the lectures were chosen from the topics rather than the calendar. |
| 3 | info | Problem 4(a), hopping −Δ | MIT leaves the sign open | −Δ with Δ > 0, called a phase choice; energies independent of the sign; +Δ swaps the C signs in |1⟩ and |3⟩ | Fine as written: both statements verified. |
| 4 | info | 5(b) check step | B₁ ≪ B₀ is eq. (6.37) on p. 19; the "slow tilt, rapid rotation" picture is on p. 20 | "(notes chapter 7, p. 20)" | Optionally "pp. 19–20, eq. (6.37)". |

All other citations checked and right: ch. 2 eqs. (2.17) (all three commutators share the number), (3.62), (4.67), (4.81), (4.82), (4.84); ch. 7 eqs. (2.20), (2.21), (3.32)–(3.34), (3.36), (4.41), (4.44), (4.49), (5.2)–(5.5), (6.33), (6.36), (6.40); ch. 8 eq. (1.8) (p. 3, T⊗S(v⊗w) ≡ Tv⊗Sw) and eq. (5.3) (p. 16, the singlet in the n basis), both confirmed on the rendered PDF. MIT sheet locations (Problems 1–2 p. 1, eq. (1) p. 1, Problem 3 p. 2, Problems 4(a)–6 p. 3) are right. The ammonia matrix on the page matches the rendered sheet.

## Arithmetic and answer checks
- 1(b): n = (0.720, 0.262, 0.643), n′ = (0.171, 0.970, 0.174), dot product 0.489, result 0.2444ħ: right.
- 2(b): ε/2 = 0.0100; sin(0.02)/2 = 0.0099993: right to three figures. Exact finite rotation S_x cos α − S_y sin α: right.
- 3(b) check step (eigenvector with −K, trace and determinant): right.
- 3(d) check: −√2Δ = −1.414Δ vs −1.5Δ, 6.1% off: right.
- 3(e): n(t) = (0, −sin(2Δt/ħ), −cos(2Δt/ħ)) agrees with the state cos(Δt/ħ)|↓⟩ + i sin(Δt/ħ)|↑⟩ (relative phase −i gives φ = −π/2, n_y < 0). The "stops changing" claim is right in the strong-field limit, and the stated wobble (axis tilted by about Δ/(μF), polar angle varying by at most twice that) is correct.
- 4(b)/(c) checks: eigenvector check, ⟨1|3⟩ = 0, probabilities add to one, iħ d/dt⟨L|ψ⟩ = −Δ⟨C|ψ⟩, short-time P_C ≈ (Δt/ħ)² and P_R ≈ ¼(Δt/ħ)⁴: all verified.
- 5(b): B₀/(4B₁) = 500; φ = π/2 − 1000π ≡ π/2, so +y; (π/2)/500 rad = 0.18°: right.
- 6(b): coefficients (0, 0, −e^{iφ}, +e^{iφ}) verified; example R|−⟩ = −|n; −⟩, phase −e^{i(δ+φ)} = +1; the direct product in the check step verified; the determinant argument is correct.
- Points: parts add to 10, 10, 15, 15, 5, 10 = 65, MIT's points per problem.
- Every listed mistake was checked against its hint; all hints are true of their formulas (e.g. p4-tr: at πħ/(2√2Δ) P_C = ½, P_R = ¼; p3-cos: −μF/Δ is cos θ/sin θ; p4-pl: cos²(√2Δt/ħ) returns to one at ωt = π, when the electron is on R). No hint gives the result away. Choice positions vary (2, 1, 2, 1, 3, 0, 1, 0, 1, 2, 0, 1, 0). Number tolerances (1%) reject the factor-2 slips.
- **Warning A (p3-k, mistake `sqrt(D^2 - (mu*F)^2)`):** with D ∈ [0.5, 2], mu ∈ [0.5, 1.5], F ∈ [0.3, 1.2], μF > Δ at about 19% of sample points (Monte Carlo, 10⁶ draws), where this mistake is NaN; `agree()` in lib/answers.ts needs finite values, so with 5 points the listed mistake is recognised only about 35% of the time (0.81⁵). Fix: give p3-k ranges with μF < Δ throughout, e.g. `D: [1.2, 2]`, `F: [0.3, 0.8]` (μF ≤ 1.2).
- **Warning B (p1-dot):** the right choice "ħ/2 times the cosine of the angle between n and n′" (50 characters) is the longest of the four (others 49, 48 and short). Course rule: never the longest. Fix: shorten it to "ħ/2 times cos of the angle between n and n′", or lengthen a distractor, e.g. "ħ/2 times the sine of the angle that n makes with n′".
- I did not run `npm run calc:test`; the calcs file has 24 `answer:` entries, and its stated independent routes agree with the checks above.

## Coverage and order
- All six MIT problems and every part, in MIT's order, with MIT's points. The split of MIT's Problem 1 into (a) and (b) is ours and said so; every added box is marked as ours in its part. Plots asked for in 3(d) and 4(c) are given as generated graphs.
- 4(b), step "The three eigenstates": two lead-in sentences in a row ("Writing |S⟩ out:" then "Number the eigenstates by rising energy:"). Info: drop one.

## Licensing
- The sheet has no rights notice; no figures reused; both plots are generated from formulas. Wording is the page's own. No textbook named on this sheet; no OpenStax or LibreTexts.

## Notes
- p5-phi: the page asks for "a constant between 0 and π plus a term that grows or falls with t". This fixes the 2π ambiguity (π/2 is the only constant in range) without giving away the answer: fine.
- No `## Summary`, no em dashes (count 0).
- Page-scoped symbol meanings were read; apart from F (difference 1) they fit.

COUNTS: errors=0 warnings=3 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: the intro now says "MIT's sheet writes ε, the lecture notes a script E", and the page-scoped meaning of F says "MIT's sheet writes ε".
- Warning 2: p3-k now samples D in [1.2, 2] and F in [0.3, 0.8], so μF stays below Δ and the listed mistake sqrt(D² − (μF)²) is finite at every sample point.
- Warning 3: the right choice of p1-dot is now "ħ/2 times cos of the angle between n and n′", no longer the longest string.
- Info items: kept as they are.

Status set to `reviewed`.
