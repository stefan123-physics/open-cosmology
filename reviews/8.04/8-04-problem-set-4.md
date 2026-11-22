---
page: content/year-2/8.04/8-04-problem-set-4.mdx
reviewed: 2026-11-22
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_ps4_2016/ (read: pdftotext of the sheet, and page 2 rendered as an image to check the prefactor of 2(c), which is ħk/(mr))
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes6/ (read: PDF, 9 pages, printed footers checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes7/ (read: PDF, 8 pages, printed footers checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes8/ (read: PDF, 7 pages, printed footers checked)
verdict: pass-with-notes
---

# Review: Problem Set 4: Spreading packets, probability current, Parseval and Ehrenfest

Blind review. My answers below were written into this file from the stripped statements and MIT's sheet before I opened the full page, its calcs file or the writer's scratch folder.

## Blind solve

### My answers (written before opening the page)
- p1a: t_s = m Δx²/ħ = 1.586e-13 s (Δx = 1e-10 m) and 1.586e3 s (Δx = 1 cm), with m_p = 1.67262e-27 kg and ħ = 1.054572e-34 J s.
- p1b: t_pass ≈ mΔx/p, t_s ≈ mΔx²/ħ ≈ mΔx/Δp, so t_pass/t_s = Δp/p, which is ≪ 1.
- p2a: J1 = (ħk/m) ẑ. The flux through the sphere is 0 for every R.
- p2b: r̂·J2 = ħk|f|²/(m r²). The flux tends to (ħk/m) ∫|f|² dΩ = (2πħk/m) ∫_0^π |f|² sinθ dθ. With constant |f| = f0 it is 4πħk f0²/m.
- p2c: r̂·J12 = (ħk/(mr)) Im[ i ( f e^{ikr(1−cosθ)} + f* cosθ e^{−ikr(1−cosθ)} ) ]. For real f = f0 this is ħk f0 (1+cosθ) cos(kr(1−cosθ))/(m r).
- p3a: ∫|Ψ|² = (1/(√(2π)a))·√(2π)a = 1.
- p3b: Φ_a(k) = (2a²/π)^{1/4} e^{−a²k²}.
- p3c: Ψ_a(x,t) = [(2π)^{1/4} √a √(1+it/τ)]⁻¹ exp(−x²/(4a²(1+it/τ))).
- p3d: |Ψ_a(x,t)|² = G(x; a(t)) with a(t) = a√(1+t²/τ²).
- p4a: a proof through ∫dx e^{i(p'−p)x/ħ} = 2πħ δ(p'−p), and the product of three such integrals in 3D.
- p4b: N = 1/√(π a0³); N' = (2√2/π)(a0/ħ)^{3/2}; P(p > ħ/a0) = (32/π)∫_1^∞ u²du/(1+u²)⁴ = 1/2 − 2/(3π) = 0.2878 (scipy quad: 0.287793).
- p5a/b: d⟨Q⟩/dt = (i/ħ)⟨[H,Q]⟩, with [x,p²] = 2iħp and [p,V] = −iħV', gives both equations.
- p6: [p,H] = [p²,H] = 0 for H = p²/2m, so ⟨p⟩ and ⟨p²⟩ are constant and so is Δp.
- p7a: ⟨x⟩_new = x0.
- p7b: ⟨p⟩_new = p0 + q.
- p7c: a boost. It shifts the momentum by q and leaves |ψ|² unchanged.
- p7d: [p̂, B̂_q] = q B̂_q and [x̂, B̂_q] = 0, so the two numbers are q and 0.

### Comparison (one line per answer id)
- p1-atom: page 1.59e-13 s, mine 1.5861e-13 s. Agrees (0.2%, inside 5%).
- p1-cm: page 1590 s, mine 1586.07 s. Agrees (inside 5%).
- p1-ratio: page dp/p, mine Δp/p. Same.
- p2-j1: page hbar*k/m, mine ħk/m. Same.
- p2-flux1: page choice 0 (zero for every R). Agrees.
- p2-j2: page hbar*k*F/(m*r^2). Same.
- p2-flux2: page 4*pi*hbar*k*f0^2/m. Same.
- p2-j12: page hbar*k*f0*(1+cos(th))*cos(k*r*(1−cos(th)))/(m*r). Same as mine, and the page's general bracket is identical to mine.
- p3-phi: page (2*a^2/pi)^(1/4)*exp(−a^2*k^2). Same.
- p3c (self-marked): the page's Ψ_a(x,t) is identical to mine.
- p3-width: page a*sqrt(1+t^2/tau^2). Same.
- p4-n: page 1/sqrt(pi*a0^3). Same.
- p4-np: page 2*sqrt(2)*(a0/hbar)^(3/2)/pi. Same. Independently checked through Φ̃(0) = (2πħ)^{-3/2}·N·8πa0³ = 2√2/π (a0/ħ)^{3/2}.
- p4-prob: page 0.288 (1%), closed form 1/2 − 2/(3π). Same.
- p7-x: page x0. Same.
- p7-p: page p0 + q. Same.
- p7-meaning: page choice 0 (position distribution unchanged, momentum +q). Agrees.
- p7-comm-p: page q. Same.
- p7-comm-x: page 0. Same.

No disagreement. The writer called the calcs checks for 7(a), 7(b) and 7(d) weak. p7-comm-x is indeed a tautology (x cos − cos x), but my blind solve gives the same results, and they rest on the standard facts that |e^{iα(x)}| = 1 and (ħ/i)∂_x e^{iqx/ħ} = q e^{iqx/ħ}. p7-x and p7-p are genuine numerical integrals on a Gaussian test state.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4 intro, Formula "Fourier pair in three dimensions" | The sheet (p. 3) only names "the Fourier pair (Ψ(x⃗), Φ̃(p⃗))". It does not write it out. The written-out pair with (2πħ)^{-3/2} is lecture notes 8, p. 3, eq. (1.14). | `cite="mit" at="Problem 4(a), p. 3 (the pair is named there, written out here)"` | Change it to `cite="reading3" at="notes p. 3, eq. (1.14)"`. The normalization on the page, (2πħ)^{-3/2} on both transforms, is correct and matches (1.14). |
| 2 | info | Problem 4(a) solution, Formula "The delta function in three dimensions" | Notes 8 p. 3, eq. (1.16) gives δ³ = (2π)^{-3}∫d³k e^{ik·(x−x')}. | Cited as our own solution on the MIT sheet. | Optional: add "cf. notes p. 3, eq. (1.16)" with `cite="reading3"`. The formula is correct. |
| 3 | info | Problem 1(a) statement | MIT says only "Estimate the time t_s". | It hands over the estimate t_s ≈ m(Δx)²/ħ in the statement. The lesson `wave-packets-uncertainty` (line 133) already works out the 10⁻¹⁰ m proton case (1.6e-13 s). | Acceptable as it is. If you want the reader to recall the estimate, move the formula into Hint 1. |
| 4 | info | Problem 7(c) check | MIT: "adding an overall factor e^{iqx/ħ}". | It notes that MIT calls it "overall" although the phase varies with x. | Fine and fairly attributed. No change. |

## Arithmetic and answer checks
- I ran the calcs file in the worktree with the main .venv pytest (`-k 8-04-problem-set-4`): 37 passed. `npm run content:check` in the worktree: 0 errors. The only warning for this page is "no review file yet".
- 1(a): 1.67262e-27·1e-20/1.054572e-34 = 1.5861e-13 s; ×1e16 = 1586 s = 26.4 min ("about 26 minutes", "about half an hour"). Electron: 9.10938e-31·1e-20/1.054572e-34 = 8.64e-17 s; ×1836 = 1.59e-13 s. Correct.
- 1(b) check: (Δp/m)·(mΔx/p) = ΔxΔp/p. Correct.
- 2(b): the θ component of J2 is (ħ/(m r³)) Im(f* f'). Correct. f has units of length. Correct.
- 2(c): the dropped term −(ħ/(m r²)) Im(f e^{ikr(1−cosθ)}) is correct. (1+cosθ) vanishes at θ = π. Correct. The general simplified form (ħk/(mr))(1+cosθ) Re(f e^{ikr(1−cosθ)}) follows from Im(iw) = Re(w) and Re(w*) = Re(w), and agrees with mine.
- 3(b): 2a√π/((2π)^{3/4}√a) = 2^{1/4}π^{-1/4}√a. Correct. Δk = 1/(2a), so ΔxΔp = ħ/2. Correct.
- 3(c): the constants (1/√(2π))(2a²/π)^{1/4}(√π/a) = (2π)^{-1/4}a^{-1/2}. Correct. In the real-part formula the phase is x²T/(4a²(1+T²)) − φ/2 with tanφ = T. Correct. At x = a, t = τ: 2^{-1/4}(2π)^{-1/4}e^{-1/8}cos(1/8 − π/8) = 0.4520. Correct.
- 3(d): e^{-1/4}/(√(2π)√2) = 0.2197. Correct. The late-time width ħt/(2ma) = (Δp/m)t. Correct.
- 4(b): ∫_0^∞ r²e^{-2r/a0}dr = a0³/4. Correct. ∫_0^∞u²/(1+u²)⁴du = π/32 (quad 0.0981748 = π/32). Correct. The antiderivative s/16 − sin4s/64 + sin³2s/48 of sin²s cos⁴s, from 0 to π/4, gives π/64 + 1/48. So the tail is π/64 − 1/48, and (32/π)(π/64 − 1/48) = 1/2 − 2/(3π) = 0.28779. Correct. The 3D transform check at p = ħ/a0: ∫ r e^{-r} sin r dr = 1/2, giving 1/(π√2) = 0.2251 = N'/4. Correct.
- 5, 6, 7: every commutator and step checked by hand. The first-order expansion check in 7(d): (iq/ħ)(−iħ) = q. Correct. FT of e^{iqx/ħ}ψ0 = Φ̃0(p − q). Correct.
- Answer boxes: every `vars` range keeps its formula finite and physical (r ≥ 2, th in [0.4, 2.7], a, tau > 0). Each listed mistake differs from the answer over its ranges. p2-flux2 includes R in `vars`, so the R² mistake is caught. I checked each mistake hint against its formula and all are true: 1/√(8πa0³) normalizes e^{-r/(2a0)}; the a(1+t²/τ²) hint says "a(t)²/a"; the a(1+t/τ) hint is "right at late times"; and so on. Tolerances: 5% on the two estimates, with the true values 0.2% from the stored ones; 1% on 0.288, true value 0.2878.
- No hint gives a result away. The strongest are Hint 2 of 3(c) (it gives A and b) and Hint 2 of 4(b) (the reduced integral). Both leave the evaluation to the reader.

## Coverage and order
- All seven MIT problems are present, in MIT's order, with MIT's parts and points (5, 10, 15, 10, 10, 5, 10). The part splits are the page's own and add up.
- The intro lists every addition: the 1(b) ratio box, the two special-case boxes in Problem 2, the numerical check in 3(c), and the (a)/(b) labels in Problem 5. It also says the Griffiths reading is left out.
- Citations: every `at=` checked against printed footers. Sheet: Problem 2 p. 1, 2(b)/(c) p. 2, Problem 3 p. 2, the useful integral p. 3, Problems 4 and 5 p. 3, Problems 6 and 7 p. 4. All correct. Notes 7: (2.25) and (2.27) p. 5; the "replace ≪ by ~" sentence and (2.28) p. 6; (1.2) p. 1; (3.3) p. 6; (3.8) p. 7. All correct. Notes 6: (4.1) and (4.6)–(4.7) p. 7. Correct. Notes 8: (1.4) p. 1; (1.9) and (1.11) p. 2; (1.12) p. 3; (2.20) p. 4; (2.26)–(2.27) p. 5; (3.36)–(3.37) and (3.41) p. 6. All correct. The only citation issue is finding 1.
- Claims about lessons checked: the plane-wave current worked example (probability-current, WorkedExample (b)); the e^{ik0x} example (momentum-space-expectation-values, worked example (c)); the commutator product rule and the time-dependence formula (same lesson, eqs. (3.37) and (3.41)); the lesson's delta function and 3D Parseval (same lesson, line 79); the spreading estimate (wave-packets-uncertainty). All are present as the page says.

## Licensing
- No "All rights reserved", "Courtesy of" or third-party image notice in the PS4 sheet or in lecture notes 6, 7 and 8 (grep and reading).
- No figures. The wording is the page's own: I compared each statement with MIT's and found no copied sentences beyond standard terms such as "boost operator" and "optical theorem".
- The Lohan and Weigold paper is named as MIT names it and is marked as not read. That is correct practice.
- No em dashes (count 0) and no `## Summary`.

## Notes
- Symbols (data/symbols.json, meanings scoped to this page) were checked by `content:check`, which passed with 0 errors. Minor points, all info: the `f-0-green` meaning says "a real, positive value" in 2(c), but the page only says "real". `N-prime` has no unit, though it has one (momentum^{-3/2}). `J` is given the unit 1/(m²·s), while in Problem 2 ψ is not normalized: the page itself says |ψ1|² counts as a density per unit volume, so the unit holds in that reading.
- The long formula box in 2(c) is fine. The box compares by value, the label states exactly which special case is wanted (real f = f0 at angle θ), and the symbol names th and f0 are given (`th` in "How to answer", `f0` through `names`). Its three mistakes are each different over the vars ranges, and each hint is true.
- The 3D Fourier normalization in Problem 4 is correct: (2πħ)^{-3/2} on both transforms, as in notes 8 eq. (1.14). It is consistent with N' (checked through Φ̃(0)) and with the numerical transform check (0.2251).

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-22, by the page author)

- Warning 1: the "Fourier pair in three dimensions" formula now cites the Lecture 8 notes (reading3), p. 3, eq. (1.14).
- Info, symbols: the f₀ meaning no longer says "positive"; N′ now has its unit, (kg·m/s)^(−3/2).
- Info left as they are: the 1(a) estimate stays in the statement (it fixes what the boxes compare against), the 3D delta function needs no second citation, the 7(c) remark and the unit of J stand.
- Status set to `reviewed`.
