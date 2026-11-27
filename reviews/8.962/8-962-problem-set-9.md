---
page: content/year-5/8.962/8-962-problem-set-9.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset09/ (read: PDF, pdftotext plus pp. 2–3 rendered with pdftoppm)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7395ae025351f820f17dd472b416c76d_9lIgAPvppk0.pdf (Lecture 14 transcript, read)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/4a374ede6b01ec89d1962085190fc1e5_wBvXOb59l-k.pdf (Lecture 18 transcript, read)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7d554b8ced54e6d434f1c4acdbadf2a3_p_10lgn2BiI.pdf (Lecture 19 transcript, read)
  - NASA Sun Fact Sheet, CODATA 2018 (not fetched; values checked by arithmetic only)
verdict: pass-with-notes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 9 (microlensing time scale, proper-motion distance, particle horizons, inflation, flatness)

## Blind solve

### My answers (written before opening the full page or its calcs file)

Solved from the stripped statements and MIT's sheet only (script: scratchpad/8962/blind9.py, numpy/scipy/sympy).

- **P1**: r_E = sqrt[(4GM/c²) D_L (D_S − D_L)/D_S] with D_LS = D_S − D_L (flat, static). r_E = 1.284e12 m (8.58 AU); t_E = r_E/v = 74.3 days (78.3 d if one takes D_LS ≈ D_S). θ_E = r_E/D_L = 0.854 mas.
- **P2**: δθ = v δt_e (1+z)/(R0 S_k), observed over δt_0 = (1+z)δt_e, so θ̇ = v/(R0 S_k) and d_M = R0 S_k(χ) = (1+z) d_A. d_L = (1+z) R0 S_k (area 4π R0² S_k², energy redshift and arrival-rate dilation each (1+z)). Hence d_L = (1+z) d_M = (1+z)² d_A. Flat matter: d_M = (2/H0)(1 − 1/sqrt(1+z)). d_A largest at z = 5/4 = 1.25 (sympy).
- **P3(a)**: with continuous density, H = H0 a^(-3/2) for a > a_r, H = H0 a_r^(1/2)/a² before. r_H = 1/(H0 sqrt(1+z_r)); r_obs = (2/H0)(1 − 1/sqrt(1+z_r)) (both checked by quad). Ratio r_H/r_obs = 1/[2(sqrt(1+z_r) − 1)] = 0.01486 for z_r = 1200.
- **P3(b)**: qualitative: ~ (r_obs/r_H)² ~ 10⁴ causally disconnected patches share one temperature to 1e-5 with no causal process able to equalise them.
- **P3(c)**: θ_c = r_H/r_obs = 0.01486 rad = 0.851° (exact chord 2 arcsin(R/2) same to 4 digits). If a reader uses "common causal past" (separation < 2 r_H) instead: 1.70°.
- **P4(a)**: ρ_vac = (π²/15)(k_BT)⁴/(ħc)³ = 1.359e98 erg/cm³ (1 MeV = 1.6e-6 erg); Λ = 8πGρ/c² = 2.54e71 s⁻². (With the sheet's 1.6e-12: 2.54e65 s⁻².) H_I = sqrt(Λ/3) = 2.91e35 s⁻¹.
- **P4(b)**: comoving distance in inflation ≈ e^N/(a2 H_I), plus radiation era (a_r − a2)/(H0 a_r^(1/2)). Setting r_H = r_obs: e^N = a2 H_I (2 − 3 a_r^(1/2))/H0, a2 = k_B T0/(k_B T_vac) = 2.348e-28, H0 = 70 km/s/Mpc = 2.258e-18 s⁻¹. N_e = 59.32 (59.33 if the radiation-era term is dropped; 59.36 with f = 2; 58.67 with f = 1; H0 = 67 to 73 gives 59.36 to 59.28). t2 ≈ N_e/H_I = 2.04e-34 s.
- **P4(c)**: log10(a2/a1) = N_e/ln10 = 25.76.
- **P4(d)**: r_H = r_obs: exact chord 2 r_obs sin(θ/2) = r_H gives θ_c = 60°; small-angle θ = r_H/r_obs gives 1 rad = 57.3°; with the "common past" criterion (2 r_H) the whole sky (180°). Answer: of order one radian, the entire sky is (just) causally connected with more e-folds.
- **P5(a)**: (Ω−1)/Ω = 3κ/(8πGρa²). Matter: (Ω2−1)/Ω2 = (1 − 1/Ω1)(a2/a1). Radiation: (1 − 1/Ω1)(a2/a1)². (sympy check.) Near Ω = 1: Ω−1 ∝ a (matter), ∝ a² (radiation).
- **P5(b)**: a_N = k_BT0/1 MeV = 2.348e-10; |Ω−1|_N ≈ 0.01 (a_N²/a_r) = 6.6e-19 (6.69e-19 taking Ω0 = 0.99 exactly in (Ω−1)/Ω form). GUT: a = 2.348e-28 → 6.6e-55 (6.69e-55).
- **P5(c)**: (Ω2−1)/Ω2 = (1 − 1/Ω1)(a1/a2)².
- **P5(d)**: ratio (Ω−1)_0/(Ω−1)_1 = (a1 H_I/H0)² = (a2 H_I e^(-N)/H0)² = 1/f² = 0.273 (f = 2 − 3a_r^(1/2) = 1.913; 0.265 with f = 1.942). So just-enough inflation leaves |Ω−1| today ≈ 0.27 |Ω−1|(t1): not flat enough unless Ω started near 1. Extra e-foldings for 0.01 from |Ω−1|=1: ΔN = ½ ln(0.273/0.01) = 1.65 (about 1.6 to 1.7).

### Comparison with the page (one line per answer id)

| Answer id | Page | Mine | Agree? |
|---|---|---|---|
| p1-te | 74.3 days (±2%) | 74.29 d | yes |
| p1-theta | 0.854 mas (±2%) | 0.854 mas | yes |
| p2-dm | 2*(1 - 1/sqrt(1+z))/H0 | same | yes (identical expression; calcs checks it against a numerical integral) |
| p2-zmax | 1.25 (±1%) | 5/4 (sympy) | yes |
| p3a-rh | 1/(H0*sqrt(1+z)) | same | yes (quad: 0.0288555 for H0=1, z=1200) |
| p3a-robs | 2*(1 - 1/sqrt(1+z))/H0 | same | yes (quad: 1.942289) |
| p3a-ratio | 0.0149 (±2%) | 0.014856 | yes |
| p3b-why | choice 1 | horizon argument | yes |
| p3c-theta | 0.851° (±2%) | 0.8512° (chord and small angle agree) | yes |
| p4a-lambda | 2.54e71 s⁻² (±2%) | 2.536e71 | yes |
| p4b-ne | 59.3 (±1) | 59.32 | yes |
| p4b-t2 | 2.04e-34 s (±3%) | 2.040e-34 | yes |
| p4c-log | 25.8 (±0.5) | 25.76 | yes |
| p4d-theta | choice 3 (60°, whole sky with N_e + ln 2) | 60° exact chord; whole sky needs e^N ×2.016 (ΔN = 0.701) | yes |
| p5a-matter | (1 - 1/Omega1)*a2/a1 | same (sympy) | yes |
| p5a-radiation | (1 - 1/Omega1)*(a2/a1)^2 | same | yes |
| p5b-n | 6.62e-19 (±2%) | 6.62e-19 (6.55 to 6.69 with exact (Ω−1)/Ω at Ω0 = 1.01 / 0.99) | yes, all inside 2% |
| p5b-gut | 6.62e-55 (±2%) | 6.62e-55 | yes |
| p5c-inflation | (1 - 1/Omega1)*(a1/a2)^2 | same | yes |
| p5d-ratio | 0.273 (±5%) | 0.2731 | yes (see warning 2 on tolerance) |
| p5d-extra | 1.65 (±0.05) | 1.654 | yes |

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Introduction, "Two details of the sheet": "In the background to Problems 4 and 5 the sheet gives 1 MeV = 1.6×10⁻¹² g cm²/s²" | The value is printed in Problem 4(a), p. 3 ("using the fact that 1 MeV = 1.6 × 10⁻¹² gm cm²/sec²"), not in the background on p. 2 (rendered page checked). The page's calcs entry `sheet-mev-printed` already has the right place. | Puts it in the background | Write "In Problem 4(a) (p. 3) the sheet gives $1\ \text{MeV} = 1.6\times 10^{-12}$ g cm²/s²." Optionally, in Problem 4 move "Use 1 MeV = 1.6×10⁻⁶ g cm²/s² (see the introduction)" into Part (a), where the sheet has it. |
| 2 | warning | Problem 5(d), answer box `p5d-ratio`, tolerance 5% | (our addition) | 0.273 ±5% | A reader who in 4(b) uses the common approximation r_obs ≈ 2/H0 (and drops the post-inflation horizon) gets N_e = 59.36, accepted by the ±1 box of 4(b), and then 1/f² = 1/4 = 0.250 here, 8.5% low, rejected. That reader's `p5d-extra` (½ ln 25 = 1.609) is accepted (±0.05). Widen to `tolerance="10%"` (no listed or plausible wrong answer lies within 10%: forgetting the square gives 0.52, e^{-2N} gives 3e-52), or state in the question "use the full condition of Problem 4(b), with 2 − 3a_r^{1/2}". |
| 3 | warning | Problem 3, statement: "Make the model precise this way: the density falls as a⁻⁴ … and it does not jump at t_r" | Sheet only says "radiation dominated prior to recombination and matter dominated afterwards" | Fixes the joining (continuous H) without saying it is our choice; the `p3a-rh` mistake list then calls the time-matched power-law join (4/(3H0√(1+z))) a mistake | The choice is stated, so the box is fair, but mark it as ours like the other additions: "(our choice: the sheet leaves the join open; joining a ∝ t^{1/2} to a ∝ t^{2/3} at one time gives r_H larger by 4/3)", and add it to the introduction's list of additions. |
| 4 | info | Problem 4(d), `p4d-theta` | Sheet just asks to "recalculate θ_c" | 60° (exact chord, r_H = r_obs) with the whole sky after ln 2 more e-foldings | Consistent with the statement's definition ("each within the other's particle horizon"); a reader using the small-angle form gets 57°, which the solution explains. No change needed. |
| 5 | info | Problem 3(c) | — | 0.851° ±2% | A reader using the "common causal past" criterion (separation < 2r_H) gets 1.70°, rejected; the statement's definition excludes it, so fair. |

## Arithmetic and answer checks
Every number on the page was recomputed (script `scratchpad/8962/blind9.py`, plus a second run for the solution-only numbers):

- P1: GM/c² = 1476.6 m, 4GM/c² = 5906 m, D_L D_LS/D_S = 9 kpc = 2.79e20 m, r_E = 1.2837e12 m = 8.58 AU, t_E = 6.42e6 s = 74.29 d, 2t_E = 148.6 d ≈ 4.9 months, θ_E = 4.14e-9 rad = 0.854 mas, 0.01 M_sun → 7.4 d. All correct. The ±2% on t_E rejects D_LS ≈ D_S (78.3 d, +5.4%).
- P2: z of largest d_A = 5/4 (sympy, d/dz of 2(1 − (1+z)^{-1/2})/(1+z)); s = 2/3 route correct.
- P3: √1201 = 34.655, H0 r_H = 0.02886, H0 r_obs = 1.9423, ratio 0.014856 = 1/67.3; 2 r_obs/r_H = 134.6 ("about 135"); 4/3 variant ratio 1/50.5. Correct.
- P4(a): ħc = 1.9787e-11 MeV cm; ρ = 8.493e103 MeV/cm³ = 1.359e98 erg/cm³ (same by the σ route); Λ = 2.536e71 s⁻²; H_I = 2.9075e35 s⁻¹; 1/H_I = 3.44e-36 s. With the sheet's printed MeV, Λ = 2.54e65 (a million times smaller, as the page says).
- P4(b): a2 = 2.3478e-28, H0 = 2.258e-18 s⁻¹, 2 − 3a_r^{1/2} = 1.9134, e^{N} = 5.784e25, N = 59.320 (scipy brentq on the full condition with the −1 and the (1 − a2/a_r) factor: same), t2 = 2.040e-34 s. H0 = 67 / 73: N = 59.364 / 59.278 (within 0.05 of 59.32; "less than 0.1" true). H_rad(a2) = H0 a_r^{1/2}/a2² = 1.182e36 s⁻¹ = 4.066 H_I; ln 4.07 = 1.40. Correct.
- P4(c): 59.32/ln 10 = 25.76. P4(d): 2 arcsin(½) = 60°; for 2r_obs = r_H the factor on e^N is 3.856/1.913 = 2.016 (ΔN = 0.70 ≈ ln 2).
- P5(a), (c): sympy on (Ω−1)/Ω = 3κ/(8πGρa²) with ρ ∝ a^{-3}, a^{-4}, a^0 gives a2/a1, (a2/a1)², (a1/a2)². Matches all three boxes; every listed mistake is a different function over the vars ranges and its hint is true of it.
- P5(b): k_BT0 = 2.348e-10 MeV; 0.01·1201·(2.3478e-10)² = 6.620e-19; GUT 6.620e-55; matter-only variant 2.35e-12. Correct.
- P5(c) check: e^{-2N} = 2.99e-52 ("3.0e-52"). P5(d): ratio ((1 − e^{-N})/1.9134)² = 0.2731; ΔN = ½ ln 27.31 = 1.654; e^{-2N}/6.62e-55 = 451.5 and 4.066² × 27.31 = 451.4 ("about 450"). Correct.
- Key code (excerpt):
  ```python
  rhoE=np.pi**2/15*1e18**4/(6.6e-22*2.998e10)**3*1.6e-6   # 1.3589e98 erg/cm3
  Lam=8*np.pi*6.674e-8*rhoE/2.998e10**2                    # 2.5361e71 s^-2
  HI=np.sqrt(Lam/3); a2=8.6e-11*2.73/1e18; H0=70e5/3.1e24; ar=1/1201
  N=brentq(lambda N:(np.exp(N)-1)/(a2*HI)-(2*(1-ar**.5)-(ar-a2)/ar**.5)/H0,1,200)  # 59.3198
  ratio=(a2*np.exp(-N)*HI/H0)**2                           # 0.27313
  ```
- Answer tolerances: p1 2%, p3a-ratio 2%, p3c 2%, p4a 2% (precise ħc = 197.327 MeV fm shifts Λ by +0.9%, accepted), p4b-ne ±1 (rejects the sheet's 1.6e-12 slip, −6.9; accepts f between 1 and 2), p4b-t2 3%, p4c ±0.5, p5b 2%, p5d-extra ±0.05: all wide enough for the reader alternatives I tried and tight enough to reject the listed or obvious mistakes. Exception: p5d-ratio (warning 2).
- Formula boxes: vars ranges finite and physical (H0 0.5–2, z 0.1–5 or 100–3000, Ω1 1.1–3, a1 < a2); each mistake differs by at least 10% everywhere in range.
- Points: 15 + 15 + 20 (8+6+6) + 25 (5+10+4+6) + 25 (6+7+4+8) = 100; MIT gives no points, as the page says.
- Hints: none gives a final result away (Problem 1's second hint states the β = 0 lens condition, which is a step, not the answer; 4(b)'s second hint gives the small post-inflation term only).

## Coverage and order
- All five MIT problems and every part (3a–c, 4a–d, 5a–d), in MIT's order. MIT's reading pointers (Carroll, Hartle, Liddle, Liddle & Lyth) are replaced by stated definitions, as the introduction says. The remark about the event horizon "in about two weeks" and footnote 2 (neutrinos) are left out; footnote 1 (z_eq ≈ 3000) is kept.
- Sheet slips verified on the rendered PDF: "1 MeV = 1.6 × 10⁻¹² gm cm²/sec²" (Problem 4(a), p. 3; it is the value of 1 eV) and "a(t)T/a(0) = (1 + z)T" (background, p. 2; for a(t) < a(today) the ratio is upside down). Both claims are right; only the location of the first is wrong (row 1).
- Additions (Einstein angle, flat-matter d_M, z of largest d_A, ratio in 3(a), T_vac at reheating, H0, 5(d) boxes) are all marked; H0 = 70 and T0 = 2.73 K are in calcs/values.yaml.

## Licensing
- The sheet has no figures, no "All rights reserved" or "Courtesy of" notice. Statements are rewritten in the page's own words (compared paragraph by paragraph; only standard terms shared). No OpenStax or LibreTexts. Carroll/Hartle/Liddle not used or fetched. NASA and CODATA used only for values.

## Notes
- Transcript citations checked by PDF page (no printed footers): L14 p. 14 (weak-field metric and "foundation of gravitational lensing"), L18 p. 13 (Friedmann equations), p. 14 (Ω, ρ_crit), p. 16 (dilution law begins at the foot of p. 16, finished on p. 17: acceptable), L19 p. 10 (χ line element), pp. 11–12 (d_L, d_A, d_M), p. 13 (H = H0 E(z)), pp. 14–15 (χ integral, sin/sinh forms), p. 16 ("no 1 plus z factor" for d_M on the p set), pp. 16–17 (d_M impractical, human lifetime), p. 19 (curvature density grows relative to matter/radiation), p. 20 (part in 100,000; opposite patches out of contact), p. 21 (inflation drives curvature to 0; "everything is in causal contact"), pp. 20–22 (curvature diluted during inflation). All correct.
- Sheet citations (p. 1 Problems 1–2; p. 2 Problem 3 and background; p. 3 Problems 4, 5(a), 5(b); p. 4 5(c), 5(d)) match the printed page numbers.
- No `## Summary` with answers; no em dashes (grep count 0). `content:check` and `calc:test` were not run by me.
- The Hughes slip "I believe it's problem set eight" (L19 p. 20) is not repeated. Good.

COUNTS: errors=0 warnings=3 info=2

## Resolution (2026-11-27, by the page author)

- Warning 1: the introduction now says the 1 MeV value is printed in Problem 4(a) (p. 3).
- Warning 2: the `p5d-ratio` box tolerance is now 10%, so a reader who used r_obs ≈ 2/H₀ in Problem 4(b) (0.250) is accepted; the listed slips (0.52, about 3 × 10⁻⁵²) stay far outside.
- Warning 3: the Problem 3 join (density as a⁻⁴ then a⁻³, no jump) is now marked as our choice in the statement, with the 4/3 factor of the time-matched join, and is listed among our additions in the introduction.
- Infos: no change.
- `status: reviewed`.
