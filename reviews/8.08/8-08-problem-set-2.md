---
page: content/year-4/8.08/8-08-problem-set-2.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb2/ (read: prb2.pdf rendered, and pdftotext)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/e440871d22237607e37482b227e22643_canonical_ensem.pdf (read: handwritten, rendered printed pp. 1, 2, 4, 9, 10, 11)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/d3e968b9aabbebf32e1c21adf6ae1962_microcanonical_en.pdf (read: pdftotext, pp. 3 to 6)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the two constants were checked against known CODATA 2018 values)
  - K. Huang, Statistical Mechanics (not opened, by rule)
verdict: pass-with-notes
---

# Review: Problem Set 2: Curie's law, equipartition in a trap, cooling by demagnetization, the Maxwell speeds and an adiabatic atmosphere

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written from `review/ps2-stripped.mdx` and MIT's sheet (prb2.pdf, rendered) only, before opening the full page. Numerical checks: `review/ps2calc/blind.py` (scipy quad, minimize, solve_ivp).

### My answers
- P1(a): with x = βgμ_BB/2, P(1/2) = e^{-x}/(2cosh x) = 1/(1+e^{2x}); P(-1/2) = e^{x}/(2cosh x) = 1/(1+e^{-2x}).
- P1(b): ⟨S_z⟩ = ½[P(½) − P(−½)] = −½ tanh(gμ_BB/2k_BT) (negative: the S_z = −½ level is lower).
- P1(c): χ = −gμ_B/(4k_BT) (checked numerically by ⟨S_z⟩/B at B = 1e-6 T).
- P1(d): x = 0.67174, |⟨S_z⟩| = 0.2931 (P(½) = 0.2069, P(−½) = 0.7931).
- P2(a): Q₁ = (k_BT/ħω)³ (quad of the Gaussian integrals agrees).
- P2(b): E = 3Nk_BT, C = 3Nk_B.
- P2(c): each Gaussian average gives ½k_BT (numerically 0.35 = 0.7/2 for both).
- P3(a): S/Nk_B = ln(2cosh x) − x tanh x, x = gμ_BB/2k_BT; S fixed ⇒ B/T fixed ⇒ T_f = T·B_f/B → 0 as B_f → 0 (ideal non-interacting spins).
- P3(b): spin entropy 0 → Nk_B ln 2; monatomic gas at fixed V: (3/2)Nk_B ln(T_f/T) = −Nk_B ln 2 ⇒ T_f/T = 2^{−2/3} = 0.630 (finite x₀ = 5 gives 0.6302, x₀ = 10 gives 0.62996). (At fixed pressure it would be 2^{−2/5} = 0.758.)
- P4(a): v_p = √(2k_BT/m).
- P4(b): ⟨v⟩ = √(8k_BT/πm).
- P4(c): m = 4.6494e-26 kg, ⟨v⟩ = 476.3 m/s (v_p = 422.1 m/s).
- P4(d): fraction = erfc(2) + (4/√π)e^{−4} = 0.04601.
- P5(a): dT/dz = −[(γ−1)/γ] mg/k_B.
- P5(b): ν = γ/(γ−1) (= c_P/k_B).
- P5(c): γ = 7/5, (γ−1)/γ = 2/7 = 0.2857.
- P5(d): 9.776 K/km ≈ 9.78 K/km (solve_ivp of hydrostatic + isentropic air over 1 km gives the same 9.7762 K drop).

### Comparison (one line per answer id)
- p1-up: page 1/(e^{gμ_BB/k_BT}+1) = mine. Agree.
- p1-down: page 1/(e^{−gμ_BB/k_BT}+1) = mine. Agree.
- p1-sz: page −½ tanh(gμ_BB/2k_BT) = mine (negative, as MIT's level ordering requires). Agree.
- p1-chi: page −gμ_B/(4k_BT) = mine. Agree.
- p1-num: page 0.2931 = mine 0.29306. Agree.
- p2-q1: page (k_BT/ħω)³ = mine. Agree.
- p2-e: page 3Nk_BT = mine. Agree.
- p2-c: page 3Nk_B = mine. Agree.
- p2(c) (no box): page's two Gaussian averages ½k_BT = mine. Agree.
- p3-s: page ln(2cosh x) − x tanh x = mine. Agree.
- p3-tf: page T·B_f/B = mine (→ 0 as B_f → 0, as the page says). Agree.
- p3-gas: page 0.630 = mine 2^{−2/3} = 0.62996. Agree.
- p4-vp: page √(2k_BT/m) = mine. Agree.
- p4-mean: page √(8k_BT/πm) = mine. Agree.
- p4-num: page 476.3 m/s = mine 476.28. Agree.
- p4-frac: page 0.0460 = mine 0.046012. Agree.
- p5-grad: page −(γ−1)mg/(γk_B) = mine. Agree.
- p5-nu: page γ/(γ−1) = mine. Agree.
- p5-const: page 0.2857 = mine 2/7. Agree.
- p5-lapse: page 9.78 K/km = mine 9.776. Agree.

No disagreement: all 20 answers agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(c), "Check the result" step (cites Chapter I p. 10), and the answer 0.2857 | Wen's Chapter I, printed p. 10, last line: "for air C_V ≈ (7/2) k_B (N_O2 + N_N2) at room temperature". This is a slip: with T_rot ≈ 2 to 3 K and T_vib ≈ 2230 to 3340 K (his own table on the same page), C_V is (5/2)k_B per molecule; 7/2 is c_P | c_V = (5/2)k_B, c_P = (7/2)k_B, γ = 7/5 (correct), and cites p. 10 for the rotations without saying that p. 10 prints 7/2 | A reader who opens p. 10 meets 7/2 and would get 2/9 = 0.222 (and 7.60 K/km in 5(d)). Writing rule 4: add one bracket to the check step, e.g. "(Wen's p. 10 writes C_V ≈ (7/2)k_B per molecule for air; that is c_P. Three translations and two rotations give C_V = (5/2)k_B, as his table of T_rot and T_vib on the same page implies.)" |
| 2 | warning | Problem 3(b) statement | "an ideal gas of N particles in a volume V" (nothing on monatomic, nothing on what is held fixed) | "a classical ideal gas of N monatomic particles in a volume V (we take V fixed)": only "V fixed" is marked where it stands; "monatomic" is marked only in the intro | Mark it where it stands (review lesson from the 8.07 run), e.g. "…in thermal contact with a classical ideal gas of N particles in a volume V. We take the particles monatomic and V fixed (our reading; MIT's sheet does not say)." The answer depends on it (0.630 at fixed V; 0.758 at fixed P; 2^{−2/5} = 0.758 also for a diatomic gas at fixed V). |
| 3 | info | Front matter `lecture: 1`, `covers: [1, 10]` | (site convention) | docs/CONTENT_GUIDE.md says `lecture` is "the last lecture the set covers", which would be 10 (Supplement 1) and would put the set after Chapter IX, at the end of the course | The writer's choice is right for this course: Supplement 1 is a background chapter numbered 10 only on this site, and the sheet is dated Feb 9, 2005, during Chapter I. Set 1 does the same (both `lecture: 1`, `order: 90`; their order then rests on the title sort, "Problem Set 1…" before "Problem Set 2…", which works). Suggest documenting the exception (course note or CONTENT_GUIDE: "the 8.08 supplements do not count as the last lecture covered") and, optionally, `order: 91` for Set 2. |
| 4 | info | Problem 1(b) check: "Supplement 1 finds the same tanh law … (Section 1.2.3, p. 4)" | p. 4 gives the inverted form 1/T = (k_B/gμ_BB) ln[(gμ_BN − 2ℳ)/(gμ_BN + 2ℳ)], not a tanh | "the same tanh law" | Correct in substance (inverting gives ℳ = −(gμ_BN/2) tanh(gμ_BB/2k_BT) with Wen's energy +ℳB). Optional: "the same law, in the inverted form 1/T = …". |
| 5 | info | Problem 1(c) check, Formula "Curie's law for N spins", `reading2` Section 1.2.3, p. 5 | printed p. 5: ℳ = g²μ_B²NB/(4k_BT), χ ∝ 1/T | same | Verified. Wen's p. 4 energy +ℳB would make his ℳ negative and his p. 5 drops the sign; the page defines the moment as −gμ_B⟨S_z⟩, along the field, so its positive formula is consistent. No change. |
| 6 | info | Problem 5 intro, "MIT also suggests doing part (b) before part (a)" | MIT's "(b) first" refers to the parts of the textbook problem, which the page does not use | The page's own (b) is built so that doing it first makes sense | Acceptable, since the setup and questions are marked as ours. Optional: "MIT also suggests doing part (b) first; our parts are built so that this advice applies." |
| 7 | info | Problem 3(a) statement, "with the spins isolated from everything else" | Implied by "adiabatic" in MIT's hint | Not marked | A fair reading of MIT's hint; no change needed. |
| 8 | info | Solution formulas `cite="mit" at="Problem N, p. 1 (our own solution / numbers)"` | Not on the sheet | Labelled as ours | The convention the 8.07 Set 2, 6 and 8 reviews accepted. Every statement formula cited `mit` (the two levels, χ, the equipartition line) is on MIT's sheet, p. 1; the Maxwell distribution is cited to Wen p. 9; the entropy per molecule and dP/dz = −nmg are inline and "stated by us". No change. |

## Arithmetic and answer checks
- All numbers recomputed in Python (`review/ps2calc/blind.py`, `review/ps2calc/compare.py`): x = 0.67174, ½tanh x = 0.29306; the weak-field 0.3359 is 14.6% high ("15%"); 0.2931/0.5 = 58.6% ("59%"); Q₁ by quadrature equals (k_BT/ħω)³; E by a numerical β-derivative equals 3Nk_BT; the entropy formula equals −Σp ln p; a finite-field version of 3(b) (x₀ = 5, 10) gives 0.6302, 0.62996; v_p = 422.1, ⟨v⟩ = 476.3, v_rms = 517.0 m/s; sound speed √(1.4k_BT/29u) = 347 m/s ("about 350"); F(2) = 0.004678 + 0.041334 = 0.046012 (also by quadrature); mg/k_B = 0.03422 K/m, × 2/7 = 9.776 K/km; an isentropic hydrostatic atmosphere integrated with solve_ivp falls 9.7762 K over 1 km.
- Points: 6+5+5+4 = 20, 7+6+7 = 20, 12+13 = 25, 3+4+4+4 = 15, 6+6+4+4 = 20; total 100 as stated.
- Every formula box: answer finite over its `vars`, every mistake finite and different (200 sampled points each). Each mistake hint is true of its formula: 1/(e^{−y}+1) is the other state; 1/(e^{y/2}+1) has half the exponent; e^{y/2} is the weight of S_z = −½ and exceeds 1; ln(2cosh x) + x tanh x > ln 2 for all x > 0; v e^{−mv²/2k_BT} peaks at √(k_BT/m) (the 2D speed distribution); √(3k_BT/m) is v_rms; T ∝ P^{γ/(γ−1)} gives −γmg/((γ−1)k_B); n ∝ T^{1/(γ−1)}.
- Info: for p1-sz the mistake −tanh(y)/2 comes within 1e-5 of the answer where y = gμ_BB/k_BT is large (up to 30 in the given ranges). The checker needs every sample point to agree, so the box still tells them apart, but narrowing `B` to [0.5, 1] and `T` to [1, 2] would keep them clearly apart everywhere.
- Number boxes at 1% reject the nearby wrong values: 0.3359 (weak field) for p1-num; 0.758 (fixed P) for p3-gas; 422.1 and 517.0 for p4-num; erfc(2) alone and the second term alone for p4-frac; 0.4 and 2/9 for p5-const; 13.7 (monatomic) and 7.60 (Wen's 7/2) for p5-lapse.
- `pytest tests/calc -k 8-08-problem-set-2` in the worktree: 40 passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Hints: none gives a box's result. Three are one step from it (info, optional): p2(b) "ln Q = 3N ln T + …"; Problem 3(a), second hint "what has to stay fixed"; p5(b), second hint "c_P ln T − k_B ln P = const".
- Every solution ends with a "Check the result" step (units, limits or a number).

## Coverage and order
- MIT's five problems in MIT's order; Problem 1 parts (a) to (c) and Problem 3 parts (a) and (b) in MIT's order; Problem 2(c) and the Problem 5 remarks kept. Our additions (1(d), the entropy and B_f boxes of 3(a), all of Problem 4, Problem 2(a)(b), the Problem 5 setup and questions) are marked in titles, the intro or the text, except "monatomic" in 3(b) (item 2).
- Points are ours and said so; MIT gives none. The due date is left out, as the intro says.

## Licensing
- MIT's sheet has no "rights reserved", "courtesy" or third-party notice (rendered PDF checked); nor have the two Wen notes (grep of the typed supplement; handwritten pages viewed). No figure is used. Huang was not opened, and the page says nothing about Huang's problems beyond their numbers. No text copied from MIT beyond standard terms ("Curie's law", "adiabatic demagnetization", "equipartition").
- CODATA (NIST) values only; allowed under Writing rules 11.

## Notes
- Citations checked on the PDFs (printed page numbers; the handwritten PDF has no p. 8, so PDF page 8 is printed p. 9): Chapter I p. 2 (Boltzmann probability box, end of point ②, which starts on p. 1); p. 4 point ⓑ (E = −∂ ln Q/∂β); p. 9 point ⑥ (Maxwell distribution C̃e^{−βmv²/2}v²dv; ⟨p_x²/2m⟩ = −d/dβ ln∫dp e^{−βp²/2m} = k_BT/2; C_V = (3/2)Nk_B); p. 10 (rotation with E₀β ≫ 1 frozen out); p. 11 point ⑦ (S = Nk_B(5/2 + ln(v/λ³)), λ = √(2πħ²/mk_BT)). Supplement 1: Section 1.2.3 starts on printed p. 4; the Curie formula is on printed p. 5. All correct.
- Points asked about: the negative ⟨S_z⟩ and χ follow from MIT's ordering (S_z = +½ at +gμ_BB/2) and are correct; the page explains the ordering (electron moment against the spin). The 3(b) reading (monatomic, fixed V, 0.630) is a sound reading of MIT's "ideal gas in a volume V", marked in the intro and partly in the statement (item 2). Problem 5's 2/7 and 9.78 K/km are right; its two inline formulas are labelled "our statement" and "stated by us", and the entropy per molecule agrees with Wen's p. 11 formula for c_V = (3/2)k_B.
- Symbols: every symbol on the page has a page-scoped meaning. `g` (g-factor in Problems 1 and 3, gravity in Problem 5), `P` (probability, pressure), `s` (reduced speed, entropy per molecule), `n`, `x`, `z` and `E` each cover two uses on this page in one meaning that says which problem uses which. The symbol system cannot scope a meaning to part of a page, so this is the only option, and the texts are clear (info). As a result `g` has no unit (gravity has m/s²), and `z` has the unit m although one of its two uses is a direction label (optional: drop the unit of `z`).
- No `## Summary` with answers; no em dashes; prerequisites are existing Chapter I and Supplement 1 lessons.

COUNTS: errors=0 warnings=2 info=8

## Resolution (2026-11-27, by the page author)

- Warning 1: the check of Problem 5(c) now notes in brackets that Wen's p. 10 writes C_V ≈ (7/2)k_B per molecule for air, which is c_P, and that three translations and two rotations give C_V = (5/2)k_B.
- Warning 2: the Problem 3(b) statement now says "We take the particles monatomic and V fixed (our reading; MIT's sheet does not say)."
- Info items left as they are (`lecture: 1` kept, as for Set 1).
- `status: reviewed`.
