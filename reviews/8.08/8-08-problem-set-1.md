---
page: content/year-4/8.08/8-08-problem-set-1.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb1/ (read: prb1.pdf rendered and pdftotext)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/e440871d22237607e37482b227e22643_canonical_ensem.pdf (read: all 11 pages rendered; handwritten)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/d3e968b9aabbebf32e1c21adf6ae1962_microcanonical_en.pdf (read: pdftotext)
verdict: pass-with-notes
---

# Review: Problem Set 1 (8.08)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written from the stripped statements and MIT's sheet only, before the full page was opened. Checks: `review/ps1calc/blind.py` (brute-force counts, exact lgamma entropies, numerical derivatives, quadrature).

My answers:
- p1a: Γ = C(6,2) = **15** (brute-force enumeration: 15).
- p1b: Γ(q,N) = (q+N−1)! / (q! (N−1)!) (brute force agrees for (3,4), (4,5), (2,7)).
- p1c: S/k_B = (q+N) ln(q+N) − q ln q − N ln N.
- p1d: 1/T = (1/ħω) ∂S/∂q = (k_B/ħω) ln((q+N)/q) ⇒ q/N = 1/(e^y − 1) (numeric derivative of exact ln Γ at N = 10⁶ reproduces it).
- p1e: 1/(e^0.8 − 1) = **0.816** (0.81597).
- p2a: Γ(L) = N! / ([(N + L/a)/2]! [(N − L/a)/2]!); N = 12, L = 4a: C(12,8) = **495**.
- p2b: S = k_B[N ln 2 − L²/(2Na²)] (+ a constant −½ ln(πN/2) if kept; exact lgamma agrees to 1e-9 at N = 1e5, L = 200a); E = −mgL (weight at depth L below the hook, zero at hook level).
- p2c: 1/T = ∂S/∂E = (∂S/∂L)/(dE/dL) = k_B L/(mgNa²) ⇒ T = mgNa²/(k_B L) (numeric: 500.004 vs 500).
- p2d: L = mgNa²/(k_B T), linear in mg.
- p2e: exact: 1/T = k_B artanh(L/Na)/(mga) ⇒ L = Na tanh(mga/k_BT); N = 100, mga = 0.5 k_BT: L/a = **46.21** (equals the canonical mean of the discrete chain, 46.2117).
- p3a: Q(L) = Γ(L) = N!/(N_d! N_u!) (all energies zero).
- p3b: A = −k_BT ln Q ≈ −N k_BT ln 2 + k_BT L²/(2Na²).
- p3c: τ = k_BT L/(Na²), so L = Na²τ/(k_BT). Polymer: τ = **0.828 pN** (exact-entropy value 0.831 pN).
- p3d: W = ΔA = −TΔS = heat Q delivered to the bath; energy is conserved (work → heat in the bath, U of chain unchanged). Heat = L²/(2Na²) k_BT = **5.00 k_BT** (exact entropy: 5.008).
- p4a: Q₁ = σ k_BT/(mg λ³).
- p4b: Q₁ ∝ β^(−5/2) ⇒ Ē/N = (5/2) k_BT; C = (5/2) N k_B.
- p4c: ⟨z⟩ = k_BT/(mg); N₂ at 300 K: **9.08 km** (9.0764).
- p4d: n(z) = (N mg/(σ k_BT)) e^(−mgz/k_BT), p(0) = n(0) k_BT = Nmg/σ (quadrature check).

Comparison with the page (one line per answer id):
- p1-count: page 15, mine 15. Agree.
- p1-gamma: page choice 2, (q+N−1)!/[q!(N−1)!]. Agree.
- p1-s: page (q+N)ln(q+N) − q ln q − N ln N. Identical.
- p1-nbar: page 1/(e^y − 1). Identical.
- p1-num: page 0.816, mine 0.81597. Agree.
- p2-count: page 495. Agree.
- p2-s: page N ln 2 − L²/(2Na²). Identical (the additive −½ ln(πN/2) is dropped, as Stirling to the order asked does; fine).
- p2-e: page −mgL. Agree.
- p2-t: page Nmga²/(k_B L). Agree.
- p2-l: page Nmga²/(k_B T). Agree.
- p2-exact: page 46.21, mine 46.2117. Agree.
- p3-q: page choice 3, Γ(L). Agree.
- p3-a: page −k_BT(N ln 2 − L²/(2Na²)). Agree.
- p3-tau: page k_BT L/(Na²). Agree.
- p3-num: page 0.828 pN, mine 0.82839 (exact-entropy value 0.8312, also inside the 1% tolerance). Agree.
- p3-where: page choice 0, into the bath as heat. Agree.
- p3-heat: page 5.00, mine 5.000 (exact entropy 5.008, inside 1%). Agree.
- p4-q1: page σk_BT/(mgλ³). Identical.
- p4-e: page (5/2)k_BT. Agree (C = 5/2 N k_B also agrees).
- p4-z: page 9.08 km, mine 9.0764 km. Agree.
- p4d (no box): page n(0)k_BT = Nmg/σ, plus the hydrostatic route. Agree.

No disagreement between the blind solve and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(d), solution step "Energy conservation", last sentence: "If the chain is let go, it shrinks back by taking heat from the bath; a rubber band released quickly cools." | (our own text; MIT asks only where the energy goes) | A chain that is simply let go contracts freely: it does no work, U stays 0, so by the page's own first law it exchanges **no** heat with the bath (its entropy rises irreversibly). Heat is taken from the bath only when the chain shrinks slowly while doing work on whatever holds its end. | Replace with: "If the chain is allowed to shrink back slowly, doing work on whatever holds its end, it takes the same heat back from the bath. (A real rubber band that contracts quickly, with no time to take heat in, cools instead.)" |
| 2 | warning | Intro, second paragraph: "Our additions to them are marked where they stand: … the choice boxes of Problems 3(a) and 3(d) …" | (our own boxes) | Neither choice box (`p3-q`, `p3-where`) is marked as ours where it stands: 3(a) has no "(our addition)" at all, and the marker in 3(d) covers only the heat number. | Either add "(The choice box is ours.)" next to each of the two boxes, or reword the intro so it does not claim those two are marked where they stand (e.g. "…, and the choice boxes of Problems 3(a) and 3(d) are also ours"). |
| 3 | info | Problem 2(d), box `p2-l`, mistake `N*a*tanh(m*g*a/(kB*T))` | MIT's (b) assumes L ≪ Na, so (d) means the small-extension law | The exact form is listed as a "mistake" | Acceptable: the label says "(to the order of part (b))" before anyone types, and the hint is true (it calls the form exact and asks for the expanded one). It appears only after the reader typed the tanh, so it gives nothing of part (e) away. Optional: start the hint with "Correct, and exact;" so a reader who did the harder calculation is not told they were wrong. |
| 4 | info | Formulas cited `cite="mit"` that are not on MIT's sheet (Einstein solid energy, chain length, every solution formula) | MIT's sheet prints only τ = ∂A/∂L and the text of the questions | `at=` reads "(our own problem)", "(our own setup)", "(our own solution)", "(our addition)" | The convention accepted in the 8.07 Set 2, 6 and 8 reviews: each `at=` says plainly the formula is ours. The only formula claimed as MIT's, τ = ∂A/∂L at "Problem 3(c), p. 1", is on the sheet (checked on the rendered PDF). No change needed. |
| 5 | info | Problem 2(b) statement: "keep the entropy to order L²" | "Assume N is large and L ≪ Na." | Adds the order explicitly | A clarification that fixes the box's form; harmless. |
| 6 | info | Problem 2(a), check step: "The largest Γ is at L = 0" | (ours) | True only for even N; for odd N, L = 0 has no states and the maximum is at L = ±a (the page notes just above that N + L/a must be even). | Optional: "The largest Γ is at L = 0 (at L = ±a if N is odd)". |

## Arithmetic and answer checks
Recomputed in `review/ps1calc/blind.py` and `review/ps1calc/fact.py` (numpy/scipy, lgamma, brute-force enumeration):
- 15 (enumeration), 495 = C(12,8), 0.816 = 1/(e^0.8 − 1), e^0.8 = 2.2255, limits 1.25 and 0.449: correct.
- Other choices of 1(b): 3⁴ = 81, 7!/(4!3!) = 35, 4!/(3!1!) = 4: correct.
- 1386.3 = 2000 ln 2. `kind: fact` 1381.6: lgamma(2000) − lgamma(1001) − lgamma(1000) = 1381.5748, correct; the difference 4.7, "about 5", correct. The harness has no factorial or gamma function, so a `kind: fact` with the computation written in `where`/`source` is a fair choice.
- 46.21 = 100 tanh 0.5 (0.46212), equal to the canonical mean length of the discrete chain (46.2117); the linear law's 50 is 8.2% too long: correct. (46.21 is not itself an allowed L/a of the discrete chain, which needs L/a even for N = 100; as a most-probable or mean length that is fine.)
- 0.828 pN: k_BT = 4.1419e-21 J, Na² = 2.5e-16 m², τ = 8.284e-13 N: correct; exact tanh law 0.8312 pN, 0.34% higher, "0.3%": correct.
- 5.00 k_BT (exact entropy: 5.008); N ln 2 = 693.1 for N = 1000: correct.
- 9.08 km: m = 4.6518e-26 kg, k_BT/(mg) = 9076 m: correct. Helium (4.003 u): 63.5 km, "about 64 km": correct.
- Formula boxes: `lib/answers.ts` compares formulas to 1e-6 relative. Every listed mistake differs from its answer by far more over its `vars` (smallest gap: p2-s and p3-a mistakes at N = 200, L = 1, a = 1, relative about 2e-5, 20 times the tolerance); all `vars` keep answers and mistakes finite and physical (L ≥ 1 for p2-t; tanh argument up to 8 for p2-l, where it differs strongly from the linear law).
- Mistake hints, each checked against its formula: p1-s (minus the entropy; missing N ln((q+N)/N)), p1-nbar (e^(−y) low-T limit, stays below 1; 1/y high-T limit), p2-s (twice the drop; drop per link x²/2), p2-e (sign), p2-t (sign; half, from a drop L²/(Na²)), p2-l (exact form), p3-a (sign; length-free −Nk_BT ln 2), p3-tau (sign; half), p4-q1 (inverted height integral; one momentum factor missing), p4-e (3/2 kinetic only; 2k_BT as if quadratic): all true.
- Number tolerances (1%) reject the listed wrong routes (50 vs 46.21; 1.25 and 0.449 vs 0.816) and accept 3-significant-figure answers.
- Choice boxes: right answers at positions 2, 3, 0; never the longest or shortest choice.
- No hint gives a boxed result away. Each solution ends with a check step (units, limits, a second count or a number).
- `npm run calc:test -- -k 8-08-problem-set-1` in the worktree: 38 passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Citations to Wen's notes (checked on the PDFs, not copied from lessons)
- `reading1` (Chapter I, handwritten, 11 PDF pages, printed pp. 1–12 without p. 8): p. 2 point ③, Q = Σ e^(−E_n/k_BT) (boxed): correct. p. 3 point ⓑ, A = −k_BT ln Q (boxed): correct. p. 4 point ④ⓑ, Ē = −∂ ln Q/∂β ("second way"): correct. p. 11 point ⑦: Q = (1/N!)(V/λ³)^N, ∫dp/h e^(−βp²/2m) = 1/λ, λ = √(2πħ²/mk_BT): correct (the page's one-molecule form is a restatement, and says so).
- In-text pointers: "Wen's chain (Chapter I, p. 5)", entropy at length zero ≈ Nk_B ln 2: correct (p. 5, point ⑤). "Chapter I, pp. 5–6", stretching costs free energy, not energy, and "Chapter I, p. 6", heat to the bath for the fully stretched chain (ΔE_bath = k_BT N ln 2 = A_final − A_init): correct. "Q₁ = V/λ³ (Chapter I, p. 11)": correct.
- `reading2` (Supplement 1, typed, 9 pages): Section 1.2.2 starts on p. 3; Eq. (1.2.12), 1/T = ∂S(E)/∂E, on p. 3; Eq. (1.2.13), the equilibrium condition, on p. 4: "Section 1.2.2, pp. 3–4, Eqs. (1.2.12)–(1.2.13)" correct. Eq. (1.2.5), Stirling with the next terms, on p. 2: correct.
- The lesson linked for negative temperature and the tanh (Curie's law), `counting-states-spins-ideal-gas`, discusses both. Correct.

## Coverage and order
- All four MIT problems, in MIT's order. Problems 1 and 4 (bare Huang pointers 12.1 and 12.4) are our own problems, marked "(our own problem)" in their titles and opening lines and listed in the intro. Huang was not opened, so resemblance cannot be checked (not a finding).
- Problems 2 and 3: MIT's questions (a)–(d) are kept in order and rewritten, including "assume the ceiling does not block the chain" (in the setup), "N large and L ≪ Na" (2(b), 3(b)), "proportional to the force mg for a fixed T and a small force" (2(d)), m = 0 and contact with a heat bath (3(a)), τ = ∂A/∂L (3(c), matches the rendered PDF), and "Where does the energy go? Do we still have energy conservation?" (3(d)). The setup (links up or down, L measured downward, E = −mgL with zero at hook level) makes every question apply and gives T > 0 for L > 0. "The ceiling does not block the chain" is what allows L < 0, and the page's negative-temperature remark for L < 0 is correct (dS/dE = k_B L/(mgNa²) < 0 there).
- Additions marked: 2(a) numbers, 2(e), 3(c) and 3(d) numbers (see finding 2 for the choice boxes).
- `lecture: 1` with `covers: [1, 10]`: Chapter I lessons have lecture 1, the Supplement 1 lesson has lecture 10, and the set (Feb 2, first week) uses both. Correct. The three prerequisites exist (lectures 1, 1 and 10).
- Points: ours (25 each, 100), said so in "How to answer"; MIT gives none (checked on the PDF). Due date left out, said so.

## Licensing
- MIT's sheet and both Wen PDFs carry no "rights reserved", "courtesy" or third-party notice. No figure reproduced. Wording is the page's own; MIT's short questions are rewritten. No OpenStax or LibreTexts. Huang not used.

## Notes
- Symbols: page-scoped meanings exist for every letter with a general meaning elsewhere (T, Q, A, N, a, m, L, E, k, z, …); content:check reports none missing.
- No `## Summary` with answers; no em dashes on the page.
- The points named by the writer (citations copied from lessons; the tanh "mistake"; negative L and T; `kind: fact` 1381.6; `cite="mit"` formulas; the numbers 495, 46.21, 0.828 pN, 5.00 k_BT, 9.08 km, 15 states) were each checked above.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: the last sentence of the "Energy conservation" step of Problem 3(d) now says that a chain allowed to shrink back slowly, doing work on whatever holds its end, takes the same heat back from the bath, and that a real rubber band contracting quickly cools instead.
- Warning 2: the intro no longer says the choice boxes of Problems 3(a) and 3(d) are marked where they stand; it says they are also ours.
- Info items left as they are.
- `status: reviewed`.
