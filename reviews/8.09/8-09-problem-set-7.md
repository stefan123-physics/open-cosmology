---
page: content/year-4/8.09/8-09-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset7/ (read: pdftotext and pages 2 and 4 rendered at 300 dpi for the two figures)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/8ba02baff1896b9ba92eeb05e6a6952c_MIT8_09F14_Chapter_5.pdf (read, downloaded afresh; pp. 94-97 rendered)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read, downloaded afresh)
verdict: needs-changes
---

# Review: Problem Set 7: Perturbation theory for two springs and a pendulum, a siphon jet and a vortex without vorticity

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind solve below was written into this file from the stripped statements and MIT's sheet only, before the full page or its calcs file was opened. Every answer was then checked by my own Python (sympy/scipy) as well as by reading.

## Blind solve

### My answers (from the stripped statements and MIT's sheet only)

P1 (x = a tan(theta), spring length a sec(theta), no gravity along the line):
- p1a: H = p^2 cos^4(theta)/(2 m a^2) + k (a/cos(theta) - b)^2
- p1b: H0 = k(a-b)^2 + p^2/(2ma^2) + k a (a-b) theta^2; Delta H = -p^2 theta^2/(m a^2) + k a (8a - 5b) theta^4 / 12; omega0^2 = 2k(a-b)/(m a)
- p1c: <Delta H> = 3 b J^2 / (64 pi^2 m a^2 (a-b)); nu' - nu = 3 b J0 / (32 pi^2 m a^2 (a-b)); relative shift (nu'-nu)/nu = 3 b E / (16 k a (a-b)^2); <J dot> = 0 (derivative in beta of a periodic function). Check b = 0: exactly harmonic in x, shift 0. Numerical exact period (m=a=k=1, b=0.6): E=1e-4 gives 7.0292e-5 vs predicted 7.03125e-5.
P2:
- p2a: Delta H1 = -I omega^2 theta^4/24; Delta H2 = I omega^2 theta^6/720
- p2b: nu1 = -J0/(32 pi^2 I); beta1 = J0/(48 pi^2 I omega) [sin(2 omega t) - sin(4 omega t)/8]; J1 = J0^2 sin^4(omega t)/(12 pi I omega) = J0^2 (3 - 4cos 2wt + cos 4wt)/(96 pi I omega)
- p2c: <beta_b dot> = J0^2/(768 pi^3 I^2 omega); <J_b dot> = 0
- p2d: <beta_a dot> = nu1 - 23 J0^2/(6144 pi^3 I^2 omega); new term -23 J0^2/(6144 pi^3 I^2 omega); total new term nu2 = -5 J0^2/(2048 pi^3 I^2 omega); <J dot^(2)> = 0. Exact check: nu = (omega/2pi) pi/(2K(m)), m = sin^2(theta0/2) = E/(2 I omega^2) = J0/(4 pi I omega) gives nu = omega/2pi - J0/(32 pi^2 I) - 5 J0^2/(2048 pi^3 I^2 omega) + ...
P3:
- p3a: ve = sqrt(2 g H1)
- p3b: v_top = sqrt(2 g H1); P_top = Pa - rho g (H1 + H2); H2max = Pa/(rho g) - H1 = 9.3287 m
- p3c: A = AT sqrt(H1/(H1 - y))
- p3d: H3 = H1 sin^2(theta)
- p3e: y = x tan(theta) - x^2/(4 H1 cos^2(theta))
P4:
- p4a: J_im = eps_ijk x_j T_km = eps_ijk x_j (P delta_km + rho v_k v_m); Q = r x (-rho g z^) = rho g (-y, x, 0); J_xy = y rho vy vz - z (P + rho vy^2)  (transposed J_yx = z(P + rho vx^2) - x rho vx vz)
- p4b: circulation 0 round an annular sector => r v_theta const => theta dot = w1 r1^2 / r^2
- p4c: d l_z/dt = -(r x grad P)_z = -dP/dtheta = 0 by axial symmetry; l_z = rho r^2 theta dot => C = lz/rho; number 0.20*0.50/0.02^2 = 250 rad/s

### My checking code (key parts and output)

```python
# Problem 1: exact H, series, average in action-angle variables (sympy)
H = p**2*cos(th)**4/(2*m*a**2) + k*(a/cos(th) - b)**2
# fourth-order part: -p^2 th^2/(m a^2) + k a (8a-5b) th^4/12   (sympy series, p^2 th^4 term dropped as 6th order)
# <dH> = 3 b J^2/(64 pi^2 m a^2 (a-b)),  d<dH>/dJ = 3 b J/(32 pi^2 m a^2 (a-b)),  rel = 3 b E/(16 k a (a-b)^2)
# exact period of V(x) = k(sqrt(a^2+x^2)-b)^2, m=a=k=1, b=0.6 (scipy quad):
#   E=1e-3: numeric rel 7.0109e-4, predicted 7.0313e-4;  E=1e-4: 7.0292e-5 vs 7.03125e-5  (converges)
# Problem 2 (sympy, averages over t in [0, 2pi/omega], Phi = omega t):
#   nu1 = -J/(32 pi^2 I); beta1 - J/(48 pi^2 I w)(sin 2wt - sin 4wt/8) = 0; J1 - J^2 sin^4(wt)/(12 pi I w) = 0
#   <beta_b dot> = J^2/(768 pi^3 I^2 w), <J_b dot> = 0
#   <beta_a dot> = -J/(32 pi^2 I) - 23 J^2/(6144 pi^3 I^2 w), <J_a dot> = 0, total new = -5 J^2/(2048 pi^3 I^2 w)
# exact pendulum: nu*pi/(2K(m)), m = J0/(4 pi I w), series -> omega/2pi - J/(32 pi^2 I) - 5 J^2/(2048 pi^3 I^2 omega)
# Problem 3: 101325/(1000*9.81) - 1 = 9.32875 m.  Problem 4: 0.20*0.50/0.02**2 = 250.0 rad/s
# Problem 4(a): J_im = eps_ijk x_j T_km (sympy LeviCivita):
#   J_xy = -P z - rho vy^2 z + rho vy vz y ;  J_yx = P z + rho vx^2 z - rho vx vz x ;  Q = (-g rho y, g rho x, 0)
```

### Comparison, one line per answer id

- p1a-h: page p^2 cos^4(theta)/(2ma^2) + k(a/cos(theta) - b)^2. Agrees.
- p1b-dh: page -theta^2 p^2/(ma^2) + ka(8a - 5b)theta^4/12. Agrees.
- p1b-w0: page 2k(a - b)/(ma). Agrees.
- p1c-dnu: page 3bJ/(32 pi^2 m a^2 (a - b)). Agrees (and with the exact numerical period).
- p1c-rel: page 3bE/(16ka(a - b)^2). Agrees.
- p2a-dh1: page -I omega^2 theta^4/24. Agrees.
- p2a-dh2: page I omega^2 theta^6/720. Agrees.
- p2b-nu1: page -J/(32 pi^2 I). Agrees.
- p2b-beta1: page J/(384 pi^2 I omega)(8 sin 2wt - sin 4wt) = my J/(48 pi^2 I omega)(sin 2wt - sin 4wt/8). Agrees (sympy difference 0).
- p2b-j1: page J^2 sin^4(wt)/(12 pi I omega). Agrees.
- p2c-betab: page J^2/(768 pi^3 I^2 omega). Agrees.
- p2c-jb: page "zero at this order". Agrees.
- p2d-betaa: page -23J^2/(6144 pi^3 I^2 omega). Agrees.
- p2d-beta: page -5J^2/(2048 pi^3 I^2 omega). Agrees, and equals the J0^2 term of the exact pendulum frequency nu*pi/(2K), kappa^2 = J0/(4 pi I omega) (sympy series above).
- p2d-j: page "zero at this order". Agrees.
- p3a-ve: sqrt(2gH1). Agrees.
- p3b-v: sqrt(2gH1). Agrees.
- p3b-p: Pa - rho g (H1 + H2). Agrees.
- p3b-h2max: 9.33 m (1%). Agrees (9.3287).
- p3c-area: AT sqrt(H1/(H1 - y)). Agrees.
- p3d-h3: H1 sin^2(theta). Agrees.
- p3e-path: x tan(theta) - x^2/(4 H1 cos^2 theta). Agrees.
- p4a-jxy: -zP + rho(y vz - z vy) vy. Agrees.
- p4a-q: "rho g (z x r)". Agrees (r x (-rho g z) = rho g (z x r) = rho g(-y, x, 0)).
- p4b-w: w1 r1^2/r^2. Agrees.
- p4c-c: lz/rho. Agrees.
- p4c-num: 250 rad/s (1%). Agrees.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | data/symbols.json, `\Omega` on this page (intro and the convention Formula "An oscillator in action-angle variables") | Notes eq. (5.21)/(5.22): Ω is the angular frequency of the H₀ oscillator, Ω² = g/a | No meaning of `\Omega` is scoped to `8-09-problem-set-7`, so the only meaning that applies is the general cosmology one, "The density parameter Ω = ρ/ρ_c …". The popup, "Symbols on this page" and read-aloud would explain Ω as a density parameter | Add `8-09-problem-set-7` to the `pages` of the existing `\Omega` meaning scoped to `action-angle-variables` ("The angular frequency of the harmonic oscillator …"), or add a new meaning with `pages: ["8-09-problem-set-7"]`: "The angular frequency of an unperturbed harmonic oscillator H₀, as the notes write it; ν = Ω/2π. Problem 1 calls it ω₀, Problem 2 ω.", unit rad/s |
| 2 | error | data/symbols.json, `\ell` on this page (Problem 4: ℓ⃗ = r⃗ × (ρv⃗), ∂ℓ⃗/∂t, ẑ·ℓ⃗) | Sheet Problem 4(a): ℓ is the angular momentum density | `lib/tex-scan.ts` records `\vec\ell` as `\vec` plus `\ell`; only `\ell_i`, `\ell_x`, `\ell_z` have page meanings, so bare `\ell` falls back to the general meaning "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one" | Add a meaning to the `\ell` entry with `pages: ["8-09-problem-set-7"]`: "With an arrow, the angular momentum density of the fluid, ℓ⃗ = r⃗ × (ρv⃗) (Problem 4).", unit kg/(m·s) |
| 3 | warning | frontmatter `source.readings[1].title` | Chapter 6 PDF: printed pp. 104 to 141 (PDF page 39 is OCW's back page without a number) | "8.09 Chapter 6 notes (Stewart, typed, pp. 104–142)" | Change to "pp. 104–141" |
| 4 | info | Problem 1 statement | The figure shows the line between two walls; it does not show gravity | "The line is horizontal, so gravity does no work along it (our reading of MIT's figure)" | None. Checked on the figure rendered at 300 dpi: the line is drawn horizontally between the two walls, the fixed ends are on one perpendicular (dashed), θ is measured from it. The reading is fair and is marked and listed in the intro |
| 5 | info | Intro, remark on eq. (5.22) | Rendered p. 96: the middle form is √(2α/(Iω²)) sin(ωt + δ), with ω, although the same page reserves ω for the angle variable and Ω for the frequency | "The middle form of the notes' eq. (5.22) writes ω for the frequency Ω" | None: the remark is accurate and does not overstate it (it is not called a misprint). Also checked: eq. (5.20) has θ⁴/360 inside a bracket multiplied by (mga/2)θ², as the p2a-dh2 hint and the 2(a) check say; eq. (5.26) has 24π²Iν, as the p2b-j1 hint says |
| 6 | info | Problem 2(b), (d) | "the β₁(t) and J₁(t) terms oscillate" | β₁(0) = J₁(0) = 0 (our choice), so J₁ = J₀² sin⁴(ωt)/(12πIω) has a non-zero mean | None. It is marked and listed, and it is the convention under which J₀ is the action at θ = 0, νJ₀ = E exactly, and ν₂ = −5J₀²/(2048π³I²ω) matches the exact pendulum series (checked). With a zero-mean J₁ the J₀² coefficient would change, so the choice matters and the page handles it correctly |
| 7 | info | Problem 2(d) boxes | "find β̇ₐ⁽²⁾ … Add your result to (c) to find final results for β̇⁽²⁾ and J̇⁽²⁾" | Boxes ask for the new J₀² term of the average of β̇ₐ⁽²⁾ and the total new J₀² term; the statement says plainly that the average also contains ν₁ again; the solution states ν⁽²⁾ = ν + ν₁ + ν₂ | None: the reading is stated clearly, marked "(our choice)", and fair to MIT |
| 8 | info | Problem 4 | Sheet uses C for the closed curve only | C is both the curve of 4(b) and the constant in θ̇ = C/r² of 4(c) (and v_θ = C/r in the 4(b) check) | Optional: call the constant something else (for instance K or Γ/2π) to avoid one letter for two things in one problem; the symbol entry does explain both uses |

## Arithmetic and answer checks
- All 27 boxes agree with my blind solve (list above). Every number recomputed: 9.33 m (9.3287), 10.33 m, 4.4 m/s (4.43), 0.10 m²/s, 250 rad/s, 5.0 m/s.
- Every solution step checked by sympy, including the bracket average 3b/(64(a − b)), ΔH in action-angle variables, the x⁴-route check (λ = kb/(4a³), Δω/ω₀ = 3λA²/(2mω₀²) gives the same relative shift), the averages 35/128, 1/16, 3/128, 5/128, 1/8, −1/16, 17/768, 23/512, −15/6144 = −5/2048, the ratio −J₀/(24πIω), and u = J₀/(2πIω), 1 − u/8 − 5u²/256. Every solution ends with a check (units, limit b = 0, exact elliptic series, θ = 90°, top of the parabola, curl of C/r).
- Listed mistakes: each formula recomputed and each hint is true of it (p1a two springs/aθ̇; p1b potential only / 1/cos to θ² only; ω₀² b = 0 and half value; p1c potential only (8a − 5b) and 2π too large; p2a signs and 360; p2b 1/(12π²I), sign of β₁ near t = 0, ω for ν in (5.26); p2c 3/8 → 640, missing 3 → 2304; p2d only J₁ → −35/18432, only β₁ → −17/9216, subtracting (c) → −31/6144; p3 √(gH₁), free fall from the top, water at rest, sign, narrowing, 1/v², H₁, H₁cos²θ, v_e² = gH₁, missing cos²θ; p4 J_yx, sign of P, w₁r₁/r, w₁r²/r₁², ℓ_z).
- Mistakes that meet the answer inside the `vars` box: p3d `H1*cos(theta)^2` at θ = π/4 (inside [0.2, 1.2]); p4a `J_yx` on the surface J_xy = J_yx (it crosses zero inside the box, e.g. at small z, P, v_x, v_y and large v_z); p2b-beta1 sign mistake where 8 sin 2ωt − sin 4ωt = 0, ωt = π/2 (inside [0.05, 2.4]). Judgement: harmless. `checkFormula` (lib/answers.ts) samples 5 random points and needs agreement to 1e-6 relative at all five; the coincidence sets have measure zero (for p3d the band is |θ − π/4| ≲ 2.5e-7, so all five points in it has probability ~1e-32). The checker can neither accept the mistake as right nor reject the right answer because of them; content:check (20 seeded points, "equals the answer itself") passes. They do break the letter of course lesson 2 ("differs everywhere"); if that is wanted literally, p3d's θ range could be [0.85, 1.2] (H₁cos²θ ≠ H₁sin²θ there), the others need no change.
- Number boxes: 9.33 m at 1% accepts g = 9.8 (9.339) and rejects forgetting H₁ (10.33) and P_a = 1.0e5 Pa (9.19); 250 rad/s at 1% rejects r in cm and diameter slips. Units are named in the statements.
- Choice boxes: right answers at positions 1, 3, 2; never the longest or shortest; no backslash TeX in choice strings; statements do not reveal the choice.
- `npm run calc:test -- -k 8-09-problem-set-7`: 50 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1 to 4 and all parts follow MIT's order; points 10 (3+2+5), 18 (2+4+4+8), 18 (3+3+5+2+5), 14 (5+4+5) equal the sheet's.
- Goldstein pointers dropped as the course note says; Goldstein is not mentioned on the page. Every addition is marked "(our addition)" or "(our choice)" where it appears and listed in the intro. Every box is named in its part's statement. The summary and intro give no box away. No `## Summary`, no em dashes, no control characters.
- Citations checked on the PDFs: (5.13) p. 94 (both α̇ and β̇ lines), (5.20) p. 95, (5.22), (5.23), (5.24) p. 96, (5.25), (5.26), (5.27) p. 97; (6.19) p. 109 (Section 6.1), (6.29) p. 111 (6.2.1), (6.41) p. 113 and (6.42) p. 114 (6.2.3), (6.56), (6.58) p. 116 (6.3), (6.62) p. 117, (6.63)-(6.65) p. 118. Sheet pages: Problems 1, 2 on p. 2, 2(b) end and (c), (d) on p. 3, Problem 3 and 4(a) on p. 4, 4(b), (c) on p. 5. All correct. Both readings are cited by Formulas.
- Linked lessons exist with the section numbers the intro gives (4.6, 5.1, 5.2, 6.1, 6.2, 6.2, 6.3).

## Licensing
- Neither MIT figure ("Image by MIT OpenCourseWare") is reproduced or redrawn; both setups are described in words. No "rights reserved" or "courtesy" notice in the sheet or in the Chapter 5 and 6 PDFs (grep). No OpenStax or LibreTexts. Statements are in the page's own words; the longest shared phrase is "creeping slowly inward in a tight spiral" (Problem 4), a short descriptive phrase.

## Notes
- Physics of 4(c) checked independently: ∂ⱼJ_zj = (r⃗ × ∇P)_z + (v⃗·∇)ℓ_z with ∇·v⃗ = 0, (r⃗ × ∇P)_z = ∂P/∂θ = 0 by axial symmetry, gravity gives no z-torque with the origin on the axis. Correct.
- 4(b): the annular-sector curve and the cancelling radial sides are argued correctly.
- Problem 1(c) "initial action J₀": the shift in terms of J₀ does not depend on the initial phase at this order. Fine.

COUNTS: errors=2 warnings=1 info=6

## Resolution (2026-11-27, by the page author)

- Error 1: data/symbols.json now has a meaning for Ω scoped to this page ("The angular frequency of an unperturbed harmonic oscillator H₀, as the notes write it; ν = Ω/2π. Problem 1 calls it ω₀, Problem 2 ω.", rad/s), so the density parameter no longer shows.
- Error 2: the `\ell` entry now has a meaning scoped to this page ("With an arrow, the angular momentum density of the fluid, ℓ⃗ = r⃗ × (ρv⃗) (Problem 4).", kg/(m·s)).
- Warning 1: the second reading's title now says "pp. 104–141".
- Infos: no change (the isolated meeting points of three listed mistakes cannot affect the five-point checker, as the review shows).
- `status: reviewed`.
