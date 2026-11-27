---
page: content/year-5/8.962/8-962-problem-set-10.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset10/ (read: PDF text, 5 pages incl. OCW notice)
  - MIT's example Mathematica notebook for the set, ps10.nb (read as text, after the blind solve)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/96fab1aa22da86fbde1c5abc5b6b8c7e_PVYTNKZDHBo.pdf (Lecture 20 transcript, read: pp. 3, 12–13)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/dd826563ba0278e6f3fb2a040ca62e0a_K1vpc9YwlQI.pdf (Lecture 21 transcript, read: pp. 2, 8–9)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/9cb27977551aade8f7121d257bfe82da_ZqF-7bjnzCU.pdf (Lecture 22 transcript, read: pp. 4–5)
  - Shapiro and Teukolsky (named on the sheet): not fetched, by rule
verdict: pass-with-notes
---

# Review: Problem Set 10: Isotropic coordinates for the Schwarzschild metric, neutron stars from the TOV equations, and the most massive stable star

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve
Written from the stripped statements and MIT's sheet only, before the full page and its calcs file were opened.

### My answers
- 1(a): $g_{tt} = -\left(\dfrac{1 - GM/(2\bar r)}{1 + GM/(2\bar r)}\right)^2 = -\dfrac{(2\bar r - GM)^2}{(2\bar r + GM)^2}$; $g = \left(1 + \dfrac{GM}{2\bar r}\right)^4$. (sympy: $dr/d\bar r = 1 - (GM)^2/(4\bar r^2)$; $(dr/d\bar r)^2/(1-2GM/r) - r^2/\bar r^2 = 0$ exactly; valid for $\bar r > GM/2$.)
- 1(b): $g_{tt} \approx -(1 - 2GM/\bar r)$, $g \approx 1 + 2GM/\bar r$, i.e. $ds^2 = -(1+2\Phi)dt^2 + (1-2\Phi)(dx^2+dy^2+dz^2)$ with $\Phi = -GM/\bar r$ (series: $-1 + 2x - 2x^2$, $1 + 2x + 1.5x^2$, $x = GM/\bar r$).
- 2(a): (i) 1 g/cm³ = $G/c^2\times 10^{10}$ = 7.4262e-19 km⁻²; (ii) 1 dyne/cm² = $G/c^4\times 10^{10}$ = 8.2627e-40 km⁻²; (iii) factor $f_P/f_\rho^{5/3}$ = 1.3568e-9 km^{4/3}; K = 5.38e9 × 1.3568e-9 = 7.2996 km^{4/3} (7.3000 with the unrounded K = 5.3803e9 from CODATA ħ and m_n).
- 2(b): ρ0,c = 1e15 g/cm³ (ρc = 1.0898e15 g/cm³): R⋆ = 12.677 km, M⋆ = 1.0022 km (0.6787 M☉).
- 2(c): $E_\text{ob} = E_\text{em}\sqrt{1 - 2M_\star/R_\star}$ = 0.91754 E_em; z_surf = $(1-2M/R)^{-1/2} - 1$ = 0.0899 (sheet's sign convention gives −0.0899).
- 2(d): M_p = 1.0818 km.
- 2(e): Δ = 0.0794.
- 3(a): M⋆ (km) at ρ0,c = 1e14…1e18: 0.4575, 1.0022, 1.0953, 0.6502, 0.7096; ρc = 1.019e14, 1.090e15, 1.417e16, 2.935e17, 9.979e18 g/cm³. Yes: M rises to 1e16 and falls by 1e17, so a maximum (stable → unstable) lies between ρc ≈ 1e15 and 1e17. (The rise from 1e17 to 1e18 is the next turn of the mass–radius spiral; those stars are still unstable.)
- 3(b): maximum at ρ0,c = 3.99e15 g/cm³, ρc = 4.89e15 g/cm³: M_max = 1.1741 km = 0.7951 M☉ (GM☉/c² = 1.47663 km), R = 8.726 km.

### Key code (own TOV integrator, scipy DOP853, rtol 1e-10, terminal event P = 0)
```python
G=6.67430e-8; c=2.99792458e10; km=1e5
frho=G/c**2*km**2; fP=G/c**4*km**2; fK=fP/frho**(5/3)
K=5.38e9*fK; Gam=5/3
def f(r,y):
    m,P,mp=y; r0=(P/K)**(1/Gam); rho=r0+P/(Gam-1)
    return [4*pi*rho*r*r, -(rho+P)*(m+4*pi*r**3*P)/(r*(r-2*m)),
            4*pi*rho*r*r/sqrt(1-2*m/r)]
# start r=1e-6 km with m = 4/3 pi rho_c r^3; event y[1]=0, direction -1
```
Robustness for ρ0,c = 1e15: rtol 1e-6 gives R 12.67665, M 1.002238; stopping at P = 1e-9 P_c gives R = 12.672 km, at 1e-6 P_c R = 12.597 km (M hardly moves). So M is robust to 1e-5, R to ~0.1 km depending on the surface criterion.

Newtonian check (n = 3/2 Lane–Emden, ξ₁ = 3.65375, −θ'(ξ₁) = 0.203301): at ρ0,c = 1e11, 1e12, 1e13 g/cm³ the TOV/Lane–Emden ratios are R 0.9996, 0.9983, 0.9921 and M 0.9988, 0.9944, 0.9744, tending to 1 as the star becomes Newtonian.

### Comparison (one line per answer id)
- p1a-gtt: page −((1 − GM/2r̄)/(1 + GM/2r̄))², mine the same (sympy difference 0). Agree.
- p1a-g: page (1 + GM/2r̄)⁴, mine the same. Agree.
- p1b-gtt: page −(1 − 2GM/r̄), mine the same. Agree.
- p1b-g: page 1 + 2GM/r̄, mine the same. Agree.
- p2a-rho: page 7.43e-19 km⁻², mine 7.4262e-19. Agree.
- p2a-p: page 8.26e-40 km⁻², mine 8.2627e-40. Agree.
- p2a-kfac: page 1.36e-9 km^{4/3}, mine 1.3568e-9. Agree.
- p2a-k: page 7.30 km^{4/3}, mine 7.2996. Agree (MIT's notebook: 7.29935 with rounded G, c).
- p2b-r: page 12.68 km, mine 12.677. Agree.
- p2b-m: page 1.002 km, mine 1.00224. Agree.
- p2c-e: page E·sqrt(1 − 2M/R), mine the same. Agree.
- p2c-z: page 0.0899, mine 0.08987. Agree.
- p2d-mp: page 1.082 km, mine 1.08179. Agree.
- p2e-delta: page 0.0794, mine 0.07937. Agree.
- p3a-choice: page answer 2 (turn between 10¹⁵ and 10¹⁷, 10¹⁶ heaviest), mine the same. Agree.
- p3b-m: page 1.174 km, mine 1.17410. Agree.
- p3b-msun: page 0.795 M☉, mine 0.7951. Agree.
- p3b-rho: page 4.89e15 g/cm³, mine 4.894e15. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(b), solution step "The integration" (and the intro paragraph on MIT's example) | MIT's example notebook for this set (ps10.nb) prints, for ρ0,c = 1e15, R⋆ = 14.158 km and M⋆ = 0.99542 km | 12.68 km and 1.002 km; the notebook is not mentioned | Add one sentence: "MIT's example Mathematica notebook prints R⋆ ≈ 14.16 km and M⋆ ≈ 0.995 km for this star. It integrates ρ0 instead of P and runs on past the point where ρ0 reaches zero (12.68 km) into complex values, so its radius lies beyond the surface; the surface is where ρ0 first reaches zero." A reader who copies MIT's example now gets R rejected (11.7% off) with no explanation. See Notes for the check. |
| 2 | warning | frontmatter `source.readings[1]` (Lecture 21 transcript) | — | Listed as a reading but no `<Formula>` has `cite="reading2"`; it is named only in prose (p. 2, pp. 8–9) | Cite it on a formula, e.g. in 2(b) "The start" write the central energy density as a Formula `\rho_c = \rho_{0,c} + \frac{P_c}{\Gamma - 1}` with `cite="reading2" at="transcript pp. 8–9"` (p. 9 also has Hughes's recipe: pick ρ0 at r = 0, set m = 0, integrate until P = 0). Every other 8.962 set cites each of its readings. |
| 3 | info | Problem 2(a), solution "Check the result" | — | "With the rounded values G = 6.67e-8 and c = 3.00e10 the factors come out 0.2 to 0.3% smaller" | Computed: density factor −0.20%, pressure factor −0.34%, K factor −0.003% (it barely changes, since (Gc)^{-2/3} with 6.67e-8 × 3.00e10 = 2.001e3 vs 2.0009e3). Write "the density and pressure factors come out 0.2% and 0.3% smaller; the factor for K hardly changes". |
| 4 | info | Problem 2(b), solution | — | "near the surface the pressure falls like a high power of the distance to the surface" | Optional: name it, P ∝ (R⋆ − r)^{5/2} (ρ0 ∝ (R⋆ − r)^{3/2}) for Γ = 5/3. |

All formulas match the sheet (pp. 1–4, printed page numbers checked against the PDF text: Problem 1 p. 1; equation of state p. 1; energy density and TOV p. 2; 2(a), 2(b) p. 2; 2(c), 2(d), 2(e) p. 3; Problem 3 p. 4). The sign change in z_surf is stated openly on the page and in the `at=`. Transcript citations checked (PDF page counts, no printed footer): Lecture 20 p. 3 (weak-field solution "is in isotropic form", μ = −Φ), pp. 12–13 (proper-volume integral of ρ, baryonic mass with ρ0); Lecture 21 p. 2 ("one of my favorite assignments"), pp. 8–9 (first law, ρ = ρ0 + P/(Γ − 1)); Lecture 22 pp. 4–5 (factor sqrt(1 − 2GM/r) between static observer and infinity). All correct.

## Arithmetic and answer checks
Own TOV integrator (scipy `solve_ivp`, DOP853, rtol 1e-10, atol 1e-30, start r = 1e-6 km, terminal event P = 0), CODATA 2018 G and c, K = 5.38e9 cgs. Every number in the solutions and tables recomputed:
- 2(b) start: ρ0,c = 7.426e-4 km⁻², P_c = 4.445e-5 km⁻², ρ_c = 8.093e-4 km⁻² = 1.090e15 g/cm³ (+9%). Correct.
- Surface criterion: stop at 1e-8 P_c moves R by 0.10% (12.664 vs 12.677), M by 1e-7. Correct. Stop at 1e-5 P_c: R = 12.478 (−1.6%, accepted by the 2% box); 1e-4 P_c: 12.191 (rejected). Tolerance reasonable.
- MIT's rounded G, c: R = 12.683, M = 1.00176, Δ = 0.07928, M_max = 1.17407 km (calcs header says the same). Correct.
- Newtonian comparison at 1e15: Lane–Emden R = 14.63 km, M = 1.626 km; TOV 13.4% smaller and 38.4% lighter (page 13%, 38%). At 1e12 mass within 0.56% (page 0.6%). At 1e14 TOV mass 11.0% below Newtonian (page 11%). Growth 1e14→1e15: 2.19 vs √10 = 3.16. All correct.
- 2(c): sqrt(1 − 0.15813) = 0.91754; z = 0.08987; weak field M/R = 0.0791, 12% low. Correct.
- 2(d): max m/r = 0.0940 at r = 9.16 km, factor 1.1098 (page 9.2 km, 0.094, 1.110). Correct.
- 2(e): baryonic sum (ρ0 over proper volume) 1.0341 km, +3.18%; (M_p − M_b)/M⋆ = 4.76% (page 1.034, 3.2%, 4.8%). Δ at 1e14 = 0.0197, at 1e16 = 0.2284 (page 0.020, 0.228). Correct.
- 3(a) table: all ρ_c, R, M, M/M☉ agree to the digits shown (1e18: R = 5.9406 with the P = 0 event, 5.9392 with the page's 1e-14 P_c stop; page 5.939, fine).
- 3(a) minimum of M⋆ at ρ_c = 7.67e17 g/cm³ (M = 0.6113 km): page 7.7e17. Correct.
- 3(b) zoom table (2, 3, 4, 5, 7 × 10¹⁵): M = 1.12753, 1.16596, 1.17410, 1.16906, 1.14344; ρ_c = 2.285, 3.560, 4.905, 6.313, 9.300 × 10¹⁵. All match. ±0.1 dex (3.17e15, 5.03e15) lowers M by 0.45% (page 0.5%). 2M/R = 0.2691 (page 0.269). Correct.
- Parabola through the three highest points of a 0.1-dex grid in log ρ_c gives ρ_c = 4.904e15, M = 1.17410: the hinted method lands well inside the 10% ρ_c box; quoting ρ0,c (3.99e15, −18%) is rejected, as intended.
- Mistake "ρ = ρ0" (internal energy left out) at 1e15: R = 12.97 km (+2.3%, just rejected), M = 1.103 km (rejected).
- Answer boxes: formula `vars` keep every expression finite (r̄ ≥ 1 > GM/2 ≤ 0.75 in 1(a); 2M/R ≤ 0.75 in 2(c)). Each listed mistake is a different function from the answer and each mistake hint is true of its formula (checked by series and by value). No hint gives a result away.
- K from ħ and m_n (CODATA): 5.3803e9 cgs, matching the sheet. GM☉/c² = 1.47663 km.
- 1(b) check: 2GM☉/R☉ ≈ 4.2e-6. Correct.
- `npm run calc:test -- -k 8-962-problem-set-10`: 74 passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1(a), 1(b), 2(a)–(e), 3(a), 3(b) in MIT's order; nothing left out. Additions are each marked as ours (first-order boxes, K factor box, E_ob box, choice box, ρ_c of the heaviest star), and the remarks on the baryonic mass and on the post-maximum branch are labelled "our remark".
- Points (100 total) are the page's own; MIT gives none, and the page says so.
- The textbook pointer (Shapiro–Teukolsky §6.8–6.9) is named, not used.

## Licensing
- The sheet carries no "All rights reserved" or "Courtesy of" notice and has no figures; the page has no figures from MIT. Statements are rewritten in the page's own words (checked side by side; the stability argument is paraphrased). No OpenStax or LibreTexts material. No em dashes (count 0); no `## Summary` with answers.

## Notes
- MIT's notebook claim checked (finding 1). The notebook (rounded G = 6.67e-8, c = 3e10, rSmall = 0.1 km) integrates m and ρ0, lets NDSolve run with max-step messages switched off, and takes R⋆ as the solver's last point, M⋆ = Re[m]. Reproduced with a complex-valued continuation in scipy (same constants and start): ρ0 crosses zero at r = 12.682 km; beyond it ρ0 is negative/complex and Re m falls: at r = 14.158 km, Re m = 0.99550 (notebook 0.99542). So the writer's claim is right: the notebook's 14.16 km overshoots the surface and its mass is lowered by the unphysical region beyond it. Code:
  ```python
  def f(r,y):                       # y = [m, rho0], complex
      m,x=y; P=K*x**Gm; rho=x+P/(Gm-1)
      dP=-(rho+P)*(m+4*pi*r**3*P)/(r*(r-2*m))
      return [4*pi*rho*r*r, dP/(Gm*K*x**(Gm-1))]
  # event Re(rho0)=0 -> 12.6821 km; sol(14.158) -> m = 0.99550
  ```
- Physics remark on 3(a): the page's choice-box distractor ("the densest stars are stable once more") is correctly marked wrong, and the solution's remark about the next turn of the spiral is fair and stated as beyond the set.
- Same-model caveat: writer and reviewer are both Opus; the numerical agreement rests on an independently written integrator (different surface criterion: event at P = 0 vs the page's 1e-14 P_c) plus a Newtonian Lane–Emden check, not on reading the page's numbers.

COUNTS: errors=0 warnings=2 info=2

## Resolution (2026-11-27, by the page author)

- Warning 1: the 2(b) step "The integration" now names MIT's example Mathematica notebook (linked to its OCW resource page). It says the notebook prints R⋆ ≈ 14.16 km and M⋆ ≈ 0.995 km because it integrates ρ₀ past the point where ρ₀ reaches zero (12.68 km) into complex values, and that the surface is where ρ₀, and with it P, first reaches zero.
- Warning 2: the central energy density ρ_c = ρ₀,c + P_c/(Γ − 1) is now a Formula cited to the Lecture 21 transcript (reading2, pp. 8–9), so every reading is cited.
- Info 3: Problem 2(a) now says the density and pressure factors come out 0.2% and 0.3% smaller and the factor for K hardly changes (calcs `shown:` updated).
- Info 4: the pressure near the surface is now said to fall like (R⋆ − r)^{5/2}.
- `status: reviewed`.
