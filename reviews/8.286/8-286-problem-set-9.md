---
page: content/year-4/8.286/8-286-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps9/ (read, pdftotext)
  - 8.286 Lecture 16 transcript (read)
  - 8.286 Lecture 17 transcript (read)
  - 8.286 Lecture 20 transcript (read, searched)
  - 8.286 Lecture 21 transcript (read)
  - 8.286 Lecture 22 transcript (read)
  - 8.286 Lecture 13 transcript (read, p. 14)
  - 8.286 Lecture 3 transcript (read, pp. 9, 19)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_q3review/ (read; resource page licence CC BY-NC-SA 4.0)
  - MIT Problem Set 10 text (read, for the monopole question)
verdict: needs-changes
---

# Review: Problem Set 9: helium, vacuum energy and the three problems of the Big Bang

## Blind solve

### My answers (written before opening the full page)
- 1(a) up. 1(b) smaller. 1(c) smaller. 1(d) smaller (neutrons that diffuse into the proton-poor region find few protons and largely decay; inside the nuggets there are few neutrons).
- 2(a) N = (8π/3)(L/λ_min)^3.
- 2(b) ρ = 2π² c⁵/(ħ G²) = 1.017e98 kg/m³ (u = ħ c k_max⁴/(8π²), k_max = 2π/ℓ_P).
- 2(c) ρ_c = 8.61e-27 kg/m³; log10(ρ/ρ_c) = 124.07 (≈124.1). With a 1/ℓ_P cut-off: 120.88.
- 3(a) 3.662e9. 3(b) 11.30 ly. 3(c) 1.78e8 (horizon 2c·1 s = 6.34e-8 ly).
- 4(b) (t1/teq)(teq/t0)^(2/3). 4(c) ratio 1.495e-53, δ ≈ 9 × ratio = 1.35e-52.
- 5(a) t = sqrt(45 ħ³ c⁵/(16 π³ G g))/(kT_c)² = 1.713e-39 s. 5(b) n_M = 1/(2ct)³ = 9.23e89 m⁻³. 5(c) n_γ = (2ζ(3)/π²)(kT/ħc)³ = 3.165e94 m⁻³; n_M/n_γ = 2.92e-5. 5(d) Ω_M = 2.48e21 (2.44e21 with 2.7 K, 67.3).
- 6(a) a = ct. 6(b) z = t_o/t_e − 1. 6(c) r = (t/t_e − t_e/t)/2. 6(d) z = r + sqrt(1+r²) − 1.
- 7(a) t = sqrt(t'² − r'²/c²). 7(b) r = r'/(c sqrt(t'² − r'²/c²)). 7(c) z = r + sqrt(1+r²) − 1 (same as 6(d)). 7(d) t' = t sqrt(1+r²), r' = c r t.

### Comparison with the page (one line per answer id)
- p1-a "goes up": agrees. p1-b "smaller": agrees. p1-c "smaller": agrees. p1-d "smaller": agrees (see Notes).
- p2-a 8πL³/(3λ³): agrees. p2-b 2π²c⁵/(ħG²): agrees. p2-b-num 1.02e98: agrees. p2-c 124.1: agrees (mine 124.07).
- p3-a 3.66e9, p3-b 11.3 ly, p3-c 1.78e8: agree.
- p4-b (teq/t0)^(2/3)(t1/teq): agrees. p4-c 1.35e-52: agrees.
- p5-a formula and 1.71e-39 s: agree. p5-b 1/(8c³t³): agrees; p5-b-num 9.26e89 vs mine 9.23e89 (0.3%, inside 2%; see info 7). p5-c 2.92e-5: agrees. p5-d 2.48e21: agrees.
- p6-a ct, p6-b tobs/te − 1, p6-c sinh(ln(t/te)), p6-d r + √(1+r²) − 1: agree.
- p7-a √(t'² − r'²/c²), p7-b r'/(c√(t'² − r'²/c²)), p7-c r + √(1+r²) − 1, p7-d-t t√(1+r²), p7-d-r ctr: agree.
- No disagreement in any final answer. Every listed mistake was checked by derivation to be the formula its hint describes (e.g. p2-a cube count 16L³/λ³, p2-b "N times top energy" 8π²c⁵/(3ħG²), p5-a matter-era factor 4/3, p6-c flat-space ln(t/te)).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 2(c), solution, "Check the result" | Lecture 21 transcript: "on the homework set ... a little bit more than 120 orders of magnitude" is on printed p. 4 (p. 2 has nothing of it) | "In Lecture 21 (transcript p. 2)" | Change to "transcript p. 4" |
| 2 | warning | Intro, "One remark on Problem 5" | PS9 sets the monopole problem as required Problem 5 (20 pts, total 105); PS10 sets it again as required Problem 1 (20 pts, total 65). Neither PDF says it was moved | "After handing out this set, Guth moved the monopole problem to Problem Set 10" | Say what the PDFs show: "MIT's Problem Set 10 sets the same problem again, almost word for word, as its Problem 1 (also 20 points). We score it here and make it optional in Set 10." |
| 3 | warning | Problem 1(a), step "Less time to decay" | Quiz 3 review, solution 6(d), p. 36 (the cited page): nucleosynthesis happens after e⁺e⁻ annihilation, so g_eff = 2 + (21/4)(4/11)^{4/3} = 3.36 is used in t ∝ 1/(√g T²) | Uses g = 10¾ → 12½, factor 1.08, 185 s | Use g_eff 3.36 → 3.82: factor 1.065, 200 s → 188 s, survival 0.80 → 0.81 (the conclusion is unchanged); or say the 1.08 is the factor at freeze-out only |
| 4 | warning | Problem 1(c), "Check the result" | Not in MIT's set or the cited review solutions | "A larger mass difference would also make the free neutron decay faster" | True physics (decay rate rises steeply with the energy released), but uncited: mark it as our addition, e.g. "(our addition: the decay rate grows steeply with the energy released, Δm c² − m_e c²)" |
| 5 | warning | Problem 2(c) answer box | n/a | value="124.1" tolerance="0.1", and "any present-day value of H₀ will do" | The exact value is 124.07. With H₀ = 73 to 74 the result is 124.00 to 123.995, which sits at or just past the edge of [124.0, 124.2]. Set value="124.07" (calcs `expected: 124.07`), keep tolerance 0.1; it still rejects the 1/ℓ_P cut-off (120.88) by more than 3 |
| 6 | info | Problem 4(a) solution | Quiz 3 review Problem 9(a) solution, p. 39 | Same steps in the same order (replace H², divide by 8πG/3, divide by ρ_c) | Allowed (CC BY-NC-SA, cited with page); wording is the page's own. No change needed |
| 7 | info | Final discussion | MIT also says Ω = 0.2 today is roughly modelled by the empty universe, and ends with "objects ... infinite separation in an arbitrarily short length of time" | Both remarks left out | Optional: add one sentence for each |

## Arithmetic and answer checks
- Recomputed with the constants the page gives (Python): ℓ_P 1.616e-35 m; ρ 1.017e98 kg/m³; c⁵/(ħG²) 5.15e96; (2π)⁴ 1558; ρ_c 8.61e-27; log 124.07; 1/ℓ_P cut-off 120.88; mode example 6.70e19; a-ratio 3.662e9; 11.30 ly = 1.07e17 m; 3.57e8 light-seconds; 1.78e8; volume 5.6e24; (4/11)^{1/3} × 1.78e8 = 1.27e8; t_eq 1.578e12 s; factors 2.36e-4 and 6.34e-50; δ 1.345e-52; second route ρ₁ 4.47e82, δ 2.3e-53, ratio 5.8; t_GUT 1.713e-39 s; quick route 1.716e-39; ξ 1.03e-30 m; n_γ 3.165e94; n_M/n_γ 2.92e-5; prefactor 5.31e4, (kT/E_P)³ 5.5e-10; n_γ0 4.10e8; n_M0 1.20e4; M_M 1.78e-9 kg; ρ_M 2.14e-5; Ω_M 2.48e21; g_s,0 3.91, 200/3.91 = 51, 4.9e19. Helium sketch 0.223, 18.2%, 0.80, Y 0.29; 1(b) 0.0057, Y 0.011; 1(c) 0.175, Y 0.24. All correct.
- Info 7: p5-b-num and the solution give 9.26e89; with the page's own constants 1/(2ct)³ = 9.23e89 (calcs evidently uses more precise constants). The page's intermediates give 9.28e89 (t = 1.71e-39) or 9.15e89 (ξ = 1.03e-30). Inside the 2% box; optionally print 9.23e89.
- Info: 5(a) "1.89 × 10⁻²⁶ J² s" is 1.896e-26, which rounds to 1.90e-26. 5(d) "4.105 × 10⁸" is 4.102e8 with the page's constants (4.10e8).
- 5(d) 3% tolerance: Guth's 2.7 K with 67.3 gives 2.44e21 (−1.6%); 2.7 K with 67.7 gives 2.41e21 (−2.7%, accepted only because of the 3%). No listed or likely mistake (a factor g, 8, 2 or a missing c²) comes within 3%. Fair.
- Fixed routes in Problems 3 and 4: the inputs (3ct₀, aT constant, T(1 s) = 9.98e9 K, 2ct; t_eq = 50,000 yr, t₀ = 13.8 Gyr, Ω₀ = 0.1) are stated in the statements and each follows Guth's Lecture 21 (pp. 9–10, 15–18). The boxed numbers follow from them exactly, and the solutions say honestly how other inputs move the result (×0.71; ×6). Fair.
- `vars` ranges: all formulas are finite and real over their ranges (p7: t'² − r'²/c² ≥ 1.75). Info: the p7-c mistake √((1+r)/(1−r)) − 1 is NaN for r > 1 on part of r ∈ [0.1, 3]; content:check passes, but a range [0.1, 0.9] would make the mistake match reliably.
- `npm run calc:test -k problem-set-9`: 119 passed. `npm run content:check`: 0 errors (only "no review file yet" for this page).

## Coverage and order
- All seven MIT problems, all parts, in MIT's order. MIT's points kept (1: 4×5; 2: 10/10/5; 5: 4×5; 6, 7: 4×5, optional). The splits of Problems 3 (6/6/8) and 4 (5/5/10) are the page's own and are said to be. Total 105 + 40 optional, as MIT.
- The reading assignment and due dates are left out (fine).

## Licensing
- MIT PS9 and the Quiz 3 review (reading8) are CC BY-NC-SA 4.0 on OCW; no "All rights reserved" or "Courtesy of" notice in either text or in the transcripts used. No figure is reproduced; the one Plot is generated from formulas. No OpenStax or LibreTexts. Wording is the page's own throughout; MIT's discussion of the empty universe is clearly rewritten.
- reading8 citations checked against printed pages: Problem 12 Eq. (1) on p. 20 ✓; solution 5(d) on p. 30 ✓ (also the "same two reasons" claim in 1(a)) ✓; solution 6(d) pp. 35–37 ✓ (890 s and 200 s on p. 35, t ∝ 1/(√g T²) on p. 36); solution 9 pp. 39–40, Eq. (1) ✓; the "10⁻³⁸ s" estimate in 5(a) is solution 8, p. 39 (uncited on the page; optional to add).
- Other citations checked: MIT PS9 pp. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 all match their formulas. L16 p. 15 (2ct and ρ = 3/(32πGt²)) ✓, p. 24 (u and n_γ) ✓; L17 p. 17 (kT formula, 9.98e9 K) ✓; L21 p. 9 (aT), p. 10 (3ct), p. 15 (A T²/ρ, and "circa 1980" Ω range on p. 13 nearby), p. 17, p. 18 ✓; L22 p. 23 (Kibble estimate, "10 to the 20 of the critical density") ✓; L13 p. 14 ✓; L3 p. 9, p. 19 ✓. Only L21 "p. 2" is wrong (row 1).

## Notes
- **1(d), inhomogeneous nucleosynthesis: "smaller" is right.** In each region at most 2 × min(n_n, n_p) nucleons can enter helium, and Σ min(nᵢ, pᵢ) ≤ min(Σnᵢ, Σpᵢ), so separating the neutrons from the protons can only lower Y when the neutrons are the scarce ingredient; the neutrons left over in the proton-poor region decay. This is also the direction found in the 1980s calculations, which is why the scenario was studied as a way to allow more baryons for the same helium (stated from memory, not checked against a source in this session). The page's caveat on back-diffusion is fair. The worked example (Y 0.25 → 0.125) is correct.
- **p5 scoring:** MIT scores the monopole problem in both sets (PS9 Problem 5, PS10 Problem 1, 20 points each, required both times). Scoring it in Set 9 and making it optional in Set 10 (with a pointer back) is a reasonable choice to avoid counting it twice, and the Set 10 page says that MIT set it for 20 points there too. Only the word "moved" in Set 9 is unsupported (row 2).
- 2(b) cut-off: the page's comparison with the lesson's k_max = 1/ℓ_P (factor (2π)⁴) is correct and fairly put.
- Plot caption (7(b)): "the light cone, which all of them approach but never reach" fits the hyperbolas, not the dashed straight lines of constant r (they approach it only as r grows). Info: say "which the hyperbolas approach and the lines of constant r approach as r grows".
- No em dashes; no `## Summary` giving answers away; no hint gives a result away (the 3(c) hint "two light-seconds" gives an intermediate value, acceptable).

COUNTS: errors=1 warnings=4 info=7

## Resolution (2026-11-21, by the page author)

- Error 1: the 2(c) solution now cites Lecture 21, transcript p. 4.
- Warning 2: the introduction now says that MIT's Problem Set 10 sets the same problem again as its Problem 1 (also 20 points), and that it is scored here and optional in Set 10 so that it is not counted twice.
- Warning 3: the 1(a) step "Less time to decay" now uses g = 3.36 → 3.82 after the pairs are gone (factor 1.065, 188 s, survival 0.81), with new calcs entries `p1a-late-g` and `p1a-late-factor`; the freeze-out factor 1.08 stays in the step before.
- Warning 4: the 1(c) remark on faster neutron decay is marked as our own addition, with its reason.
- Warning 5: the 2(c) box is now centred on 124.07 (calcs `expected` likewise), tolerance 0.1.
- Info notes: left as they are.
- Status set to `reviewed`.
