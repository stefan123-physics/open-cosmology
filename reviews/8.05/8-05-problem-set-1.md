---
page: content/year-3/8.05/8-05-problem-set-1.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-1/ (read: PDF and pdftotext text; garbled formulas checked against the PDF)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: MIT8_05F13_Chap_01.pdf)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read: MIT8_04S16_LecNotes11.pdf)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes13/ (read: MIT8_04S16_LecNotes13.pdf)
verdict: pass-with-notes
---

# Review: Problem Set 1: Wavefunctions, bound states in one dimension, and the probability current

This was a blind review (solutions: own). I wrote the answers under "Blind solve" from the stripped statements and MIT's sheet. Only after that did I open the full page, its calcs file and its symbols.

## Blind solve

### My answers (written before opening the full page)
- 1(a) N = (4α³/π)^(1/4) (N² = 2α^(3/2)/√π); ⟨x⟩ = 0; ⟨x²⟩ = 3/(2α).
- 1(b) ⟨p⟩ = 0; ⟨p²⟩ = 3ħ²α/2.
- 1(c) Neither a position nor a momentum eigenstate (not a delta function; not e^{ikx}).
- 1(d) ⟨H⟩ = 3ħ²α/(4m).
- 1(e) V(x) = ħ²α²x²/(2m); E = 3ħ²α/(2m); not the ground state (node at x = 0; it is the first excited state of the oscillator with mω = ħα).
- 2 Multiply by ψ and integrate: ∫ψψ'' = −∫ψ'² < 0 (boundary terms vanish), but the right side (2m/ħ²)∫(V−E)ψ² ≥ 0 if E ≤ V_min. Equality forces ψ' ≡ 0, ψ constant, not normalizable. So E > V_min.
- 3(a) ψ'(na⁺) − ψ'(na⁻) = −(2mV₀a/ħ²) ψ(na) at each of the three points; ratio −2mV₀a/ħ².
- 3(b) (i) 0; (ii) at most 1; (iii) no; (iv) yes (odd states).
- 3(c) 3 bound states (0, 1, 2 nodes: even, odd, even).
- 3(d) Odd state: η(1 + coth η) = 2mV₀a²/ħ², F(η) = η(1 + coth η) = 2η/(1 − e^{−2η}); F increasing with F → 1 as η → 0, so the state exists for V₀ > ħ²/(2ma²). (Numerically: the second even state appears at 2mV₀a²/ħ² = 3, exactly from the zero-energy matching.)
- 4(a) N ≈ 2z₀/π; exact count floor(2z₀/π) + 1 = 13 for z₀ = 20 (2z₀/π = 12.73).
- 4(b) E ≈ −V₀z₀² (η ≈ z₀²); numerically for z₀ = 0.1: E/V₀ = −0.00987 vs −0.0100.
- 5(a) ⟨p⟩ = (ħ/i)∫φφ' = (ħ/2i)[φ²] = 0.
- 5(b) ⟨p⟩ = 2ħ sin α ∫φ₁φ₂' dx, f(α) = 2 sin α; vanishes for α = nπ, n integer (checked numerically with two test functions).
- 5(c) ⟨p⟩ = ħk.
- 6(a) ρ in 1/length (m⁻¹), J in 1/time (s⁻¹).
- 6(b) dP_ab/dt = J(a,t) − J(b,t); with a → −∞, b → ∞ and J → 0, d/dt ∫|Ψ|² = 0.
- 6(c) J = (ħ/m) φ² α'; v = J/ρ = ħα'/m.
- 6(d) J = (p/m)(|A|² − |B|²); no cross terms.

### Comparison with the page (one line per answer id)
- p1-n: page √2 α^{3/4}/π^{1/4} = (4α³/π)^{1/4}: agree.
- p1-x: 0: agree.
- p1-x2: 3/(2α): agree.
- p1-p: 0: agree.
- p1-p2: 3ħ²α/2: agree.
- p1-eig: neither: agree.
- p1-h: 3ħ²α/(4m): agree.
- p1-v: ħ²α²x²/(2m): agree.
- p1-e: 3ħ²α/(2m): agree.
- p1-gs: no, node at x = 0: agree.
- p2 (proof, no box): the page's main proof uses the convexity of ψ²; its check step is my integration-by-parts proof. Both are correct.
- p3-jump: −2mV₀a/ħ²: agree.
- p3-out: none: agree.
- p3-in: at most one: agree.
- p3-a: no: agree.
- p3-0: yes (odd states): agree.
- p3-count: three: agree.
- p3-odd: page 2η/(1 − e^{−2η}); mine η(1 + coth η). They are equal (an identity; also checked at η = 0.5, 1, 2).
- p3-vmin: ħ²/(2ma²): agree.
- p4-n: 2z₀/π: agree.
- p4-exact: 13: agree.
- p4-e: −V₀z₀²: agree.
- p5-f: 2 sin α: agree.
- p5-zero: whole multiples of π: agree.
- p5-k: ħk: agree.
- p6-units: ρ 1/length, J 1/time: agree.
- p6-dp: J(a, t) − J(b, t): agree.
- p6-j: ħφ²α′/m: agree.
- p6-jd: p(|A|² − |B|²)/m: agree.
- p6-cross: no cross terms: agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro: "Some boxes are our additions, each marked as such: the choice boxes of Problems 1(c), 4(a), 5(b) and 6 ..." | MIT asks open questions in 1(e) ("Could ψ be the ground state?"), 3(b) (four questions) and 3(c) ("how many bound states?") | These parts also have choice boxes (p1-gs; p3-out, p3-in, p3-a, p3-0; p3-count). They are missing from the intro's list, and their part statements have no "(our addition)" note, so "each marked as such" is not true | Change the intro to "the choice boxes of Problems 1(c), 1(e), 3(b), 3(c), 4(a), 5(b) and 6", or add "(The choice boxes are our addition.)" to the statements of 1(e), 3(b) and 3(c) |
| 2 | info | Intro | Problem 7 is only "Griffiths Problem 2.38, p.85 [10 points]", with no statement | Left out, giving 55 of MIT's 65 points | None. The omission is right under the course note (the sheet gives nothing to write the problem from), and the page says so clearly |
| 3 | info | Problem 4 | Points to "section 2.6 of Griffiths", its equations and Figure 2.18 | Uses the 8.04 Chapter 11 equations (the same well and the same z₀ = (a/ħ)√(2mV₀)) and replaces the figure with an exact count for z₀ = 20 | None. Verified: the 8.04 notes define the same V(x) and z₀ (eq. 2.26). The cited equations (2.27) and (2.29) are on printed p. 7, and (2.34) and (2.36) on printed p. 8 |
| 4 | info | Problem 5(b) | Does not say that ψ is normalized | Assumes it, says so, and the check step says what changes otherwise | None. My solve gives the numerator 2ħ sin α ∫φ₁φ₂′ either way; normalization only divides it |
| 5 | info | Problem 6 | Does not say that V is real | Says that the result needs it | None. This is correct: the V terms cancel only for a real V |
| 6 | info | Problem 3(b) solution, point 4: "every bound state is even or odd (the lesson's Theorem 3)" | 8.05 notes p. 10: Theorem 3 says eigenstates "can be chosen" even or odd. The "must be" for bound states is the remark after its proof | Credits the stronger statement to Theorem 3 | Write "(the lesson's Theorem 3 and the corollary after it)" |
| 7 | info | Problem 5(a) check: "By the lesson's corollary" | The lesson one-d-spectrum-variational has two corollaries (after Theorems 2 and 3) | Unclear which corollary is meant | Write "By the corollary of Theorem 2 in the lesson on the one-dimensional spectrum" |

## Arithmetic and answer checks
- Every final answer agrees with my blind solve (see "Blind solve" above). There is no disagreement.
- I recomputed the numbers independently with my own NumPy/SciPy scripts:
  - 1(a)/(b): quadrature at α = 1.7 gives N² = 2α^{3/2}/√π, ⟨x²⟩ = 3/(2α) and ⟨p²⟩ = 3ħ²α/2 (agreement to 1e-12). ΔxΔp = 3ħ/2. The energy splits as 3ħ²α/(4m) kinetic plus 3ħ²α/(4m) potential, which adds up to E. All correct.
  - 3: The page's even condition is g² sinh η − gη(e^η + 2cosh η) + 2η²e^η = 0. I derived the condition (g − η)ψ(a) − ψ′(a⁻) = 0 on my own. The page's expression is −2η times mine: the ratio is −1.0, −2.6 and −4.0 at η = 0.5, 1.3 and 2.0, for g = 2, 4 and 8. So the two are equivalent.
    - Roots for g = 4: 2.29525 and 1.29964 (even), 1.96035 (odd). Energies: 1.3170, 0.4223 and 0.9607 V₀ (page: 1.317, 0.422, 0.961).
    - Roots for g = 8: 4.0948, 3.8846 and 3.9987 (page: 4.095, 3.885, 3.999).
    - Graph coefficients: β = 0.87136 and 1.53889; ψ(a) = 0.73274 and −0.64223; sinh(1.96035) = 3.4805; the node of the third state is at x = 0.5963a. All match the page.
  - "Third state only for g > 3": this can be proved, not just checked numerically. At the threshold κ → 0, the even state is a straight line between the deltas, ψ = 1 + B′x, and flat outside. The jump at 0 gives 2B′ = −g/a. The jump at a gives −B′ = (g/a)(1 + B′a), so g = 3 exactly. My root counting agrees: 1 even state for g = 2.9 and 2.99, 2 even states for g = 3.01, 3.1, 5 and 20. The page's limit argument is correct. It could quote this one-line proof (optional).
  - 3(d): F(η) = 2η/(1 − e^{−2η}) = η(1 + coth η). F increases on η > 0 (checked on a grid) and F → 1 as η → 0, so V₀ > ħ²/(2ma²). Correct.
  - 4(a): for z₀ = 20, 20/π = 6.366 gives 7 even states. Since 5.5π = 17.28 < 20 < 6.5π = 20.42, there are 6 odd states. That makes 13 states, against the estimate 2z₀/π = 12.732. The top state has ξ = 19.1433 (page 19.14), and cos(ξx/a) has 12 zeros in |x| < a. The infinite-well check (ħ²π²j²/(8ma²) < V₀ exactly when j < 2z₀/π) is also correct.
  - 4(b): for z₀ = 0.1 the exact |E|/V₀ is 0.0098687 (page 0.009869). I re-derived the series z₀²(1 − 4z₀²/3) from η = ξ² + ξ⁴/3; it gives 0.009867. The delta-function limit −m(2aV₀)²/(2ħ²) = −2ma²V₀²/ħ² = −V₀z₀² agrees. All correct.
  - 5(b): with two non-symmetric test functions, the numerical ⟨p⟩ at α = 0.4 and 1.3 equals 2 sin α ∫φ₁φ₂′ (0.72746 and 1.80000, both ways).
  - 6(b): oscillator test with ħ = m = ω = 1, the equal sum of n = 0 and n = 1, the interval 0.3 to 1.2, at t = 0.7. Differentiating the integral gives dP/dt = −0.173994, and J(0.3) − J(1.2) = −0.173994. The page says −0.1740. Correct.
  - 6(d): I expanded ψ*ψ′ by hand: (ip/ħ)(|A|² − |B|² + AB*e^{2ipx/ħ} − A*Be^{−2ipx/ħ}). This matches the page, and so does J = (p/m)(|A|² − |B|²). The density cross term 2 Re(A*Be^{−2ipx/ħ}) is correct.
- Answer boxes: every expr equals the solution's result. Every `vars` range keeps the formula finite and physical: η ∈ [0.3, 3] avoids F's 0/0 at η = 0, and z₀ ∈ [0.05, 0.5] in 4(b) and [5, 50] in 4(a) match the regimes. Each listed mistake differs from the answer over the range. Every mistake hint is true of its formula. Some I checked: 2η/(1 + e^{−2η}) is indeed what cosh κx gives; −V₀z₀⁴ is −V₀η² with η ≈ z₀²; 3ħ²/(2ma²) is the g = 3 threshold; z₀/π is the even count, or the count for a well of width a.
- Number boxes p1-x and p1-p have value 0 and tolerance 0.01, which is fine.
- Choice boxes: the right answers are at positions 2, 3, 2, 1, 0, 2, 2, 1, 1, 3, 2, 0, so they vary. I checked each box: the right string is never the longest (e.g. p1-gs 55 vs 62 characters, p6-cross 44 vs 47). Every marked answer is correct.
- Hints: none gives a final result away. Hint 3 of 4(a) states the lesson's rule for when new states appear, but the reader still has to count. Hint 2 of 4(b) gives η ≈ ξ², one step short of the result. Both are acceptable.
- Every solution ends with a "Check the result" step (units, limits or numbers).
- Points: 10 (3+2+1+1+3), 5, 15 (3+4+4+4), 10 (5+5), 5 (1+3+1) and 10 (3+3+2+2), total 55. The points per problem are MIT's.
- calcs/8.05/8-05-problem-set-1.yaml: `npm run calc:test -- -k 8-05-problem-set-1` gives 59 passed. A script confirmed that every `shown:` string occurs verbatim on the page. `npm run content:check` in the worktree gives 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1–6 follow MIT's order and parts, each with MIT's points. Problem 7 is left out and the page says so (65 points become 55).
- The additions are labelled: the ratio form in 3(a), F(η) in 3(d), f(α) in 5(b), the z₀ = 20 count in 4(a), the graph in 3(c), and the choice boxes. Finding 1 lists three choice boxes that are not labelled.
- I checked the citations against the PDFs:
  - MIT sheet, printed pages: Problem 1 on p. 1; Problem 2 eq. (1) on p. 1 and V ≥ V_min on p. 2; Problem 3 on p. 2; Problems 4 and 5 on p. 3; Problem 6 eqs. (2)–(4) on p. 4. All correct.
  - 8.05 notes, Chapter 1: eqs. (1.6), (1.9), (1.12), (1.14), (2.10), (2.26), (6.33), (6.36) and (6.38) are what the page says they are. Theorems 3 and 4 have the numbers the page uses.
  - 8.04 notes, Chapter 11: (2.26) defines z₀; (2.27) and (2.29) are on printed p. 7; (2.34) and (2.36) are on printed p. 8. Correct.
  - 8.04 notes, Chapter 13: (1.13)–(1.14) are on printed p. 3, and the bound state of one delta function, (1.16)–(1.17), is on p. 4. Correct.

## Licensing
- MIT's sheet and the three notes PDFs have no "rights reserved" or "courtesy" notices (checked with grep on the text). No MIT figure is redrawn. The only graph is generated from formulas.
- The wording is the page's own; MIT phrases are kept only as standard terminology. Griffiths is named only as MIT's pointer, and no textbook content is used. No OpenStax or LibreTexts material.

## Notes
- Symbols: I diffed data/symbols.json against main by meaning.
  - New page-scoped meanings: α, β, ε, φ, ψ, a, k, j, n, f, g, F, v, A, B, C, s, N, x₀, x₁, φ′, K, η, V₀, φ₁, φ₂, Ψ′, Ψ″ and α′.
  - Existing meanings extended to this page: δ, κ, ξ, ω, H, z, exp, x, t, d, i, e, m, b, p, E, z₀, V, J, ψ′, Ψ, P_ab, ψ″ and V_min.
  - Each meaning fits its use on the page (units checked: N in m^(−3/2), s in 1/m², φ in m^(−1/2)). No duplicate meaning was added. Nothing was removed; the only changes to existing entries add this page to their page lists.
- info: Problem 3 depends on the 8.04 delta-well lesson and the intro links it, but `prerequisites` lists only square-wells from 8.04. Consider adding delta-well-node-theorem-oscillator.
- info: several calcs entries reuse a choice-box id (p1-eig, p1-gs, p3-a, p3-out, p3-in, p3-0, p5-zero, p6-cross) for a supporting number, not the choice itself. For example, "p3-a" checks the graph amplitude 0.7327. This does no harm (there is no `answer:` key), but renaming them (p3-a-amp, …) would make the file easier to audit.
- No `## Summary` printing answers; no em dashes.

COUNTS: errors=0 warnings=1 info=8

## Resolution (2026-11-26, by the page author)

- Warning 1 (incomplete list of our choice boxes): the intro now lists "the choice boxes of Problems 1(c), 1(e), 3(b), 3(c), 4(a), 5(b) and 6".
- Info: 3(b) point 4 now cites "the lesson's Theorem 3 and the corollary after it"; the 5(a) check names "the corollary of Theorem 2 in the lesson on the one-dimensional spectrum"; `delta-well-node-theorem-oscillator` added to the prerequisites. Other info items: no change.
