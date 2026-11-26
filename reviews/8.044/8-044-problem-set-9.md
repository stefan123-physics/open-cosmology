---
page: content/year-3/8.044/8-044-problem-set-9.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps9/ (read: pdftotext of the PDF, page by page for the printed footers)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss9/ (read: pdftotext of the PDF, page by page for the printed footers)
verdict: pass-with-notes
---

# Review: Problem Set 9: the Big Bang, the heat capacity of a crystal and thermal noise in circuits

I solved the set blind first, using only the stripped statements and MIT's problem sheet. The section "Blind solve" at the end holds those answers, written before I opened the full page. After that I compared them with the page, its calcs file and MIT's solutions.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(d), the last sentence of the statement ("Why does the phonon model give a power of T?") and the choice box `p2-gap` | The sheet (p. 3) asks only for the heat capacity at low temperature. The reason for the power law appears as a note in the solutions (p. 3), not as a question | Asks the question as if it were MIT's. The intro's list of additions does not name it, and "Where MIT asks an open question" covers only 3(c) and 5(c) | Add after the question: "(Our addition: MIT's solutions answer it in a note on p. 3.)", or add it to the intro's list of additions |
| 2 | warning | Problem 5(c), the statement ("use it to find the mean square voltage on the capacitor") and the box `p5-total` | Sheet p. 6: "find the rms voltage on the capacitor". The solutions (p. 6) compute the mean square, kT/C | Asks for the mean square and does not say that MIT asks for the rms value | Add in brackets: "(MIT's sheet asks for the rms voltage. Its solutions give the mean square, whose square root is the rms value √(kT/C).)" |
| 3 | info | Problem 1, parts (a) and (b) | One question, with no parts | Split into (a) the entropy and the adiabat and (b) the numbers | Optional: mention the split in the intro, next to the renumbering of Problem 2 |
| 4 | info | Problem 5 intro ("The power that the resistor absorbed in Problem 4") | Sheet p. 5 writes "in Problem 3", one more reference that is one number too low | Uses the right number without comment | The general note in Problem 4's intro already covers this. Nothing needed |
| 5 | info | Hint of the third mistake in `p2-einstein` | n/a | "That is the thermal energy divided by T, in units of k." | The expression 3JNk·x/(eˣ − 1) is exactly E_thermal/T, so "in units of k" adds nothing. Optional: drop those three words |

## Arithmetic and answer checks
- Every final answer on the page agrees with my blind solve (table in "Blind solve"). Formula answers were compared symbolically, numbers to 3 significant figures.
- Numbers recomputed with k = 1.381e-23 J/K:
  - (3000/3)³ = 1.000e9 and (3000/2.725)³ = 1.3343e9.
  - 3000/2.725 = 1100.9 (the page rounds to 1101).
  - e/(e − 1)² = 0.92067 (page: 0.921), so 1 − 0.92067 = 7.9% (page: "within 8%").
  - 3N_A k = 24.94 J/K (page: "about 25").
  - x/(eˣ − 1) + x/2 at x = 0.5 is 1.0208 (page: 1.021).
  - √(kT/C) = 6.437 μV and √(kT/L) = 2.035 nA.
  - At 300 K, kT/ħ = 3.93e13 rad/s, and divided by 2π that is 6.25 THz (page: "about 6 THz").
  - kT·10⁷ = 4.143e-14 W, and kT × 1 Hz = 4.143e-21 W.
  - The radian-frequency mistake gives 4.143/2π = 0.659 (page: 0.66).
  - MIT's own numbers were recomputed and are quoted correctly: 6.5 μV and 2 nA (with k = 1.4e-23) and 4.1e-14 W (with 1.38e-16 erg/K).
- Running `pytest -k "problem-set-9 and 8.044"` in the worktree: 47 passed, so every calcs entry recomputes. A script found every `shown:` string of the calcs file word for word in the page (47 entries, none missing).
- Running `npm run content:check` in the worktree: 0 errors. Its only warning for this page is the missing review file.
- `<Answer>` boxes:
  - Every `expr` and `value` equals the result of its solution.
  - The `vars` ranges keep every formula finite and physical (x ≥ 0.3, all letters positive).
  - Every listed mistake differs from the answer across the range. They coincide only at single points, such as ω = 1 for `p4-d` and C = 1 for `p3-pv`.
  - Every mistake hint is true of its formula. I checked each one. Examples: in `p1-s`, π²k⁴T⁴/45ħ³c³ is −∂F/∂V, the pressure. In `p2-debye`, 4π²/15 is the result for two polarizations. In `p4-p`, kT is the power per hertz. In `p5-total`, 2kT/πC is the result without the π/2 from the arctangent.
  - The 1% tolerance of the number boxes rejects each listed wrong number (the radian-frequency slip 0.66 against 4.14; 1e9 against 1.334e9) and accepts 3 significant figures.
- Choice boxes:
  - The correct choice sits at index 1 (`p2-gap`), 2 (`p3-resistor`) and 0 (`p5-compare`), so its position varies.
  - The correct choice is never the longest string (102 against 111 characters, 95 against 119, 85 against 97).
  - Each marked answer is right and each other choice is wrong.
- Points: 10 + 30 + 20 + 25 + 15 = 100. The parts of each problem add up to its total (5+5; 5+10+5+10; 9+7+4; 3+4+5+3+6+4; 4+4+7).
- Every solution ends with a check step (units, a limit, equipartition or a number). No hint gives a final result away.

## Coverage and order
- All five MIT problems and every part appear, in MIT's order. The intro states that Problem 2's (c)(i) and (c)(ii) become (c) and (d).
- These additions are marked as ours: the boxes with 2.725 K in 1(b), the value at x = 1 in 2(b), the 1 Hz box in 4(f), and the sketch as a graph computed from the formula. Two departures are not marked (rows 1 and 2 of the table).
- Citations: I checked every `at=` against the printed page footers with `pdftotext -f N -l N`. All are correct.
  - Problem sheet: Problem 1 on p. 1. The normalization and E(T) of 2(c) on p. 2. The quadratic D(ω) and the π⁴/15 integral on p. 3. The remark quoted in 4(e) on p. 4. The formula of 5(b) and the filter formula on p. 5. The ⟨v²⟩ integral on p. 6.
  - Solutions: Problem 1, 2(a) and ⟨ε⟩ on p. 1. C_V on pp. 1–2 (the formula runs across the page break). The limits, 2(c)(i) and 2(c)(ii) on p. 2. The "washed out" note on p. 3. 3(a) and 3(b) on p. 3. 3(c) on p. 4. 4(a)–(d) on p. 4. 4(e), 4(f), 5(a) and 5(b) on p. 5. 5(c) on p. 6.
- The page notes two slips in MIT's sheet, and I confirmed both on the PDF: "Problem 2" for Problem 3 in Problem 4's intro (sheet p. 3), and "Problem 3e" for 4(e) in 5(b) (sheet p. 5). I found no slip in MIT's solutions that the page repeats.
- `covers: [13, 14, 15]` matches the lecture numbers of canonical-examples (13), polyatomic-gases (14) and thermal-radiation (15).

## Licensing
- Neither PDF has a "rights reserved" or "courtesy" notice (checked with grep). MIT's two circuit drawings are described in words, not redrawn. The 5(c) graph is computed from the formula.
- No OpenStax or LibreTexts material is used.
- The wording is the page's own. The closest paraphrases are short and credited to MIT: "pluck one atom and its energy soon spreads through the whole crystal", and MIT's conclusion in 5(c), which MIT's solutions print in capitals.
- There are no em dashes and no `## Summary` that gives away answers.

## Notes
- I checked the page's claims about lessons against the lessons in the worktree, and all links lead to existing pages:
  - thermal-radiation has F = −(π²/45)(kT)⁴V/(ħc)³, S ∝ T³V, the adiabat with T³V constant, and ħω³/π²c³ with the zero-point term dropped.
  - canonical-examples has C = Nk for classical oscillators.
  - polyatomic-gases has ⟨n⟩ and the energy-gap heat capacity.
  - two-random-variables treats noise as a random process.
  - 8.286 temperature-and-decoupling has s ∝ 1/a³ and s ∝ T³, so T ∝ 1/a.
- The cosmology claim in 1(b) holds. 3000 K / 2.725 K ≈ 1100 is the redshift factor 1 + z of last scattering. A black body at 3000 K peaks near 1 μm, so "visible and near-infrared" is fair. T₀ = 2.725 K is in calcs/values.yaml with the role "Guth 2013", which matches "used in 8.286 in 2013".
- Symbols (worktree data/symbols.json):
  - Meanings scoped to this page exist for T_0, a (the scale factor in the check of Problem 1), k (Boltzmann's constant), c, T, x and ω_n.
  - The T_0 meaning for this page gives 2.725 K. It replaces the general meaning of 2.7255 K, because a page-scoped meaning takes priority in lib/symbols.ts.
  - The page adds new entries v_line, v_N, S_v, S_v_c, V_now and V_then. None of them uses a form already in the main checkout's data/symbols.json.
  - The page does not use H or Ω.
  - The units look right: P(ω) in J, D in s/rad, u₁ in J s/m, S_v in V² s/rad.
- The calcs entry `p3-boltzmann-constant` cites `mit` "Problem 3, p. 3" for a constant the sheet does not give. It is labelled "our own number", so it does no harm.

COUNTS: errors=0 warnings=2 info=3

## Blind solve

### My answers (written before opening the full page)

- p1a: S = 4π²k⁴T³V/(45ħ³c³). VT³ stays constant in an adiabatic expansion.
- p1b: V_now/V_then = (3000/3)³ = 1.000e9. With T₀ = 2.725 K: (3000/2.725)³ = 1.334e9, and the factor for lengths is 3000/2.725 = 1100.9.
- p2a: C_V = 3JNk.
- p2b: C_V = 3JNk x² eˣ/(eˣ − 1)². For kT ≪ ħω: 3JNk x² e^(−x). For kT ≫ ħω: 3JNk. At x = 1: e/(e − 1)² = 0.9207.
- p2c: E = ∫₀^∞ ħω[1/2 + 1/(e^(ħω/kT) − 1)] D(ω) dω → 3JNkT (the zero-point terms cancel at first order). C_V = 3JNk.
- p2d: E = π²V(kT)⁴/(10ħ³v³) and C_V = 2π²Vk⁴T³/(5ħ³v³). It is a power law because there are modes with ħω < kT at every T (no gap), and their number grows as T³.
- p3a: p(v) = √(C/2πkT) exp(−Cv²/2kT). √⟨v²⟩ = √(kT/C) = 6.44 μV.
- p3b: p(i) = √(L/2πkT) exp(−Li²/2kT). √⟨i²⟩ = √(kT/L) = 2.04 nA.
- p3c: a resistor stores no energy: no term in the energy depends on its voltage. It only dissipates, so there is no stored energy to weight with a canonical factor.
- p4a: k_n = nπ/L.
- p4b: D(ω) = L/(πc).
- p4c: u₁ = (ħω/πc)[1/2 + 1/(e^(ħω/kT) − 1)].
- p4d: u₁ = kT/(πc).
- p4e: P(ω) = kT/(2π).
- p4f: P = kT·Δf = 4.14 × 10⁻¹⁴ W. Per 1 Hz: 4.14 × 10⁻²¹ W.
- p5a: ⟨v_N²⟩/(4R).
- p5b: ⟨v_N²⟩/(4R) = kT/2π gives 2RkT/π.
- p5c: S = (2RkT/π)/(1 + (ωRC)²). ⟨v²⟩ = kT/C, the same as 3(a), and independent of R.

### Comparison (one line per answer id)
- p1-s: page 4π²k⁴T³V/(45ħ³c³), same as mine. Agree (MIT p. 1).
- p1-volume: 1e9, same as mine. Agree.
- p1-volume-cmb: 1.334e9, same as mine. Agree.
- p1-length: 1101, same as mine (1100.9). Agree.
- p2-classical: 3JNk, same as mine. Agree.
- p2-einstein: 3JNk x²eˣ/(eˣ − 1)², same as mine. Agree.
- p2-einstein-low: 3JNk x²e^(−x), same as mine. Agree.
- p2-einstein-one: 0.921, same as mine (0.9207). Agree.
- p2-high: 3JNkT, same as mine. Agree.
- p2-debye: (2π²/5)Vk(kT/ħv)³ = 2π²Vk⁴T³/(5ħ³v³), same as mine. Agree.
- p2-gap: choice 1 (modes down to zero frequency), same as mine. Agree.
- p3-pv: √(C/2πkT) exp(−Cv²/2kT), same as mine. Agree.
- p3-vrms: √(kT/C), same as mine. Agree.
- p3-vnum: 6.44 μV, same as mine. Agree.
- p3-irms: √(kT/L), same as mine. Agree.
- p3-inum: 2.04 nA, same as mine. Agree.
- p3-resistor: choice 2 (stores no energy, so no Hamiltonian), same as mine. Agree.
- p4-kn: nπ/L, same as mine. Agree.
- p4-d: L/(πc), same as mine. Agree.
- p4-u: (ħω/πc)(1/(e^(ħω/kT) − 1) + 1/2), same as mine. Agree.
- p4-uclass: kT/(πc), same as mine. Agree.
- p4-p: kT/(2π), same as mine. Agree.
- p4-power: 4.14 (×1e-14 W), same as mine. Agree.
- p4-hertz: 4.14 (×1e-21 W), same as mine. Agree.
- p5-power: vN2/(4R), same as mine. Agree.
- p5-spectrum: 2RkT/(π(1 + (ωRC)²)), same as mine. Agree.
- p5-total: kT/C, same as mine. Agree.
- p5-compare: choice 0 (same total; R only shapes the spectrum), same as mine. Agree.
- 5(b) (no box): ⟨v_N²⟩/4R = kT/2π gives 2RkT/π, as on the page and in MIT's solutions p. 5.

## Resolution (2026-11-26, by the page author)

- Warning 1 (Problem 2(d) is our addition): the question now ends "(Our addition: MIT's sheet does not ask this; its solutions answer it in a note on p. 3.)".
- Warning 2 (Problem 5(c), rms versus mean square): the statement now says that MIT's sheet asks for the root mean square voltage, that its solutions give the mean square kT/C whose square root is √(kT/C), and that the box asks for the mean square.
- Info 3: the intro now says that MIT's Problem 1 is one question and has two parts here.
- Info 4: no change (the note in Problem 4's intro already covers MIT's off-by-one references).
- Info 5: "in units of k" removed from the third mistake hint of `p2-einstein`.
