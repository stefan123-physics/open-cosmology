---
page: content/year-4/8.08/volume-energy-fluctuations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/thermal_fluct/ (read: resource page; site-wide CC BY-NC-SA footer, no "courtesy" or "rights reserved" notice for this file)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/602f7128f333bcba16bc87697f785eb7_thermal_fluct.pdf (read as page images: handwritten pp. 45 and 46 at 160 dpi, p. 47 rendered at 160 dpi; no text layer)
verdict: pass-with-notes
---

# Review: Fluctuations of volume and energy, and fluctuation versus response

Scope: Wen's Chapter VI notes, handwritten pp. 45-47 (points ② to ④). Every formula, citation, number, quiz answer, flashcard, plot caption and the cosmology callout were checked against the page images, and the numbers were recomputed independently. No errors. One warning (the spring in the piston sketch) and some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Fluctuation and response", paragraph before "Volume fluctuations as a response" | p. 47: sketch of a cylinder whose piston is pushed by a spring with an arrow "P₀"; the text writes only A_tot = A + P₀V. | "A gas pushes on a piston held by a spring, or by a fixed outside pressure P₀; ... A_tot = A + P₀V, and since P₀V is linear in V it does not change the curvature." | A real spring adds energy ½k_spring(ΔV/area)², which is quadratic in V and so changes the curvature. A_tot = A + P₀V and "linear in V" hold only for a fixed outside pressure. Suggested wording: "A gas pushes on a piston pressed by a fixed outside pressure P₀ (Wen draws it as a spring) ...". Optionally add that a stiff real spring would make the fluctuations smaller. |
| 2 | info | Boxed results on p. 45 ("Volume fluctuations") and p. 47 ("Fluctuation of any parameter") | Both boxes write the square outside the bracket: ⟨(V − V̄)⟩² on p. 45 and ⟨(x − x̄)⟩² on p. 47. The lines that follow use ⟨(V − V̄)²⟩. | Writes the correct ⟨(V − V̄)²⟩ and ⟨(x − x̄)²⟩ without comment. | This is a notation slip in the notes (⟨V − V̄⟩ is zero). Correcting it silently is fine. Optional: one bracketed sentence, as the page does for the other two slips. |
| 3 | info | Formula "Gibbs potential as a sum over volumes", `at="p. 45, point ②"` | p. 45 uses G only through its derivatives (∂G/∂P as a ratio of integrals). It never writes G = −k_BT ln∫dV e^{−β(A+PV)}. | Cites the definition to p. 45. The text right after it says the notes do not write it out. | The disclosure in the text is enough. For a tidier citation: `at="p. 45, point ② (implied; not written out)"`. |
| 4 | info | "Energy fluctuations", sentence after "Relative energy fluctuation" | p. 46: "Ē ≫ √⟨(E − Ē)²⟩, small fluctuation". Nothing about ensembles. | "This is why the canonical ensemble, with its fluctuating energy, gives the same thermodynamics as the microcanonical one with its fixed energy." | Correct, standard physics, but it is the page's addition. Optional: "(our remark)". |
| 5 | info | "Energy fluctuations", extensivity paragraph | p. 46: s = S/N **or S/V**, ε = E/N **or E/V**. | Only the per-particle form. | Fine as is. Optional: "(or per unit volume, as the notes also allow)". |
| 6 | info | "This is the static form of what is usually called the fluctuation-dissipation theorem (the name is not in the notes)" | p. 47 heading: "Thermal fluctuations - response". | Names the theorem and marks that the name is not Wen's. | Fair. Strictly, "static fluctuation-response relation" is more exact, since nothing dissipates in the static case. The word "static" already makes the claim correct. No change needed. |

### Slips the page reports: both checked and real
- **"G(P, V)" in the p. 45 margin box.** Checked: the right-hand margin pairs "A(V,T)" with "G(P,V)". Just above, the box writes ∂G(P,T)/∂P = V. So "G(P, V)" is a slip for G(P, T), and the page's bracketed note is accurate.
- **Missing minus sign in d²s/dε² on p. 46.** Checked: the notes write d²s/dε² = k_B (3/2)(1/ε²). For s = k_B ln[v(2mε)^{3/2}/h³] the second derivative is −(3/2)k_B/ε². Without the minus, ⟨(E − Ē)²⟩ = −Nk_B/(d²s/dε²) would be negative. Wen's boxed final result δE = √N √(2/3) ε is right, so only the intermediate line has the slip. The page's note is accurate.
- The page does not repeat either slip. The only other slips in pp. 45-47 are the two bracket placements in row 2, which the page corrects silently. One more small point: on p. 47 the term k_BT(−∂V/∂P) has a stray superscript mark. The page writes (−∂V/∂P)_T, which is right.

## Formula-by-formula check
- "Probability of a volume at fixed pressure" (p. 45, ②): matches, e^{−β(A(V,T)+VP)} = # e^{−½β ∂²A/∂V² (V−V̄)²}. The page writes # as C and says so. Correct.
- "Curvature of the free energy in V" (p. 45, ②): matches the line ∂²A/∂V²|_T = −∂P/∂V|_T = −1/(∂V/∂P|_T) = 1/(VK_T), together with the K_T box. Correct.
- "Volume fluctuations" (p. 45, ②, boxed): k_BT/(∂²A/∂V²) = k_BT K_T V. Correct.
- "Volume fluctuations of an ideal gas" (p. 45, boxed): V²/N and δV = V/√N, with VK_T = +Nk_BT/P² = V/P = V²/(Nk_BT) in the text. Matches and is correct.
- "The volume as a derivative of G" (p. 45, "Second way"): matches the ratio of integrals with (−β)V and "= +⟨V⟩". The boxed ∂G(P,T)/∂P = V is quoted in the text. Correct.
- "The second derivative of G" (p. 45): matches [⟨V²⟩ − ⟨V⟩²](−β), the boxed ⟨(V−V̄)²⟩ = −k_BT ∂²G/∂P², and "= k_BT V K_T". Correct. The page's justification ∂²G/∂P² = ∂V/∂P = −VK_T is right.
- "Total entropy of body and bath" (p. 46): matches the box S_tot = S(E) − E/T, with the margin note "entropy of heat bath" and the sys ↔ heat bath sketch. The box sits **above** the heading of point ③, so citing it "p. 46" with no point number is exact.
- "Probability of an energy" (p. 46, ③): matches both lines, including the k_B⁻¹. Correct: the −E/T term is linear, so it drops out of the second derivative.
- "Curvature of the entropy" (p. 46, ③, boxed): matches. Correct.
- "Energy fluctuations" (p. 46, ③): matches −k_B/(d²S/dE²) = k_BT²C_V. The middle form −Nk_B/(d²s/dε²) is given in the text. Correct.
- "Relative energy fluctuation" (p. 46, ③): matches δE ≈ √(k_BT²C_V) ~ √N and the box δE/Ē ~ 1/√N. Correct.
- "Curvature for the ideal gas" (p. 46, ③): sign corrected, see the slips above. Correct.
- "Energy fluctuation of an ideal gas" (p. 46, boxed): matches. Checked: −Nk_B/(−3k_B/2ε²) = (2/3)Nε², so δE = √N √(2/3) ε = √(2/3) E/√N. It also equals √(k_BT²·(3/2)Nk_B) with E = (3/2)Nk_BT.
- "Fluctuation of any parameter" (p. 47, ④): matches P ∝ e^{−βA(x)}, A = const + ½ ∂²A/∂x² (x − x̄)², and the boxed result evaluated at x̄. Correct.
- "Volume fluctuations as a response" (p. 47, ④): joins the A_tot line, the "= k_BT/(∂²A/∂V²) = k_BT/(−∂P/∂V)_T" line and the "= k_BT(−∂V/∂P)" line, labelled fluctuation/response with "P ↔ force". Matches and is correct (see row 1 on the spring).
- "Response to a force" (p. 47, ④): the notes write "x = KF ... A − xF, K = 1/(∂²A/∂x²)". The page writes x̄ = KF, which is more precise. Correct when the zero of x is the minimum without a force, as in the sketch.
- "Fluctuation equals k_BT times response" (p. 47, boxed ⟨Δx²⟩ = k_BT K): matches.
- Ideal-gas line on p. 47 (PV = k_BTN, −∂P/∂V = k_BTN/V², V̄²/N, ΔV/V = 1/√N): quoted correctly in the text.

## Arithmetic and answer checks
Recomputed independently in Python with k_B = 1.380649e-23 J/K, ħ = 1.054571817e-34 J s, c = 299792458 m/s:
- Worked example (a): k_BT(300 K) = 4.142e-21 J ✓; ⟨x²⟩ = 4.142e-20 m² ✓; rms = 2.035e-10 m ≈ 0.20 nm ✓; KF = 1e-11 m = 0.01 nm ✓; ratio 20.4, "some 20 times" ✓.
- (b): k_s = 4.142e-21/(0.5e-9)² = 0.01657 N/m ≈ 0.0166 ✓.
- (c): N = 101325 × 1e-6/(k_B × 273.15) = 2.687e19 ✓; √(2/(3N)) = 1.58e-10 ≈ 1.6e-10 ✓. 1500 atoms: 2.108% ✓.
- Energy plot: exp(−0.75N(x − 1)²) is exactly exp(−(x−1)²/(2·2/(3N))) ✓. Caption: N = 30 gives √(2/90) = 14.9%, "about 15%" ✓; N = 500 gives 3.65%, "under 4%" ✓. The caveat about small N is fair.
- Tilted-parabola plot: minimum of x²/2 − Fx is at x = F (K = 1) ✓.
- Quiz 1: answer index 1, e^{−β[A + PV]} ✓. Quiz 2: index 1, energy, k_BT²C_V ✓. Quiz 3: index 1, 2.1% ✓ (the 2.6% distractor is √(1/1500), the 67% one is √(2/3)). Quiz 4: index 1, 0.2 nm ✓. All explanations are correct.
- Flashcards: all five are correct, including G(P, T) = −k_BT ln∫… and ∂²G/∂P² = −β⟨(V − V̄)²⟩.
- Callout: u(2.725 K) = (π²/15)(k_BT)⁴/(ħc)³ = 4.172e-14 J/m³ ✓, which agrees with the 8.286 black-body page (4.17e-14). C_V = d(uV)/dT = 4E/T ✓, so δE/Ē = √(4k_BT/(uV)) ✓. For 1 cm³: 6.0% ✓. Photon number per cm³ = 410.5, "some 400" ✓ (consistent: 1/√410 ≈ 5%). For (1 Mpc)³ with 1 Mpc = 3.0857e22 m: 1.1e-38, "about 10⁻³⁸" ✓.
- The calcs file covers every number above, and its formulas match the page. I did not run `npm run calc:test` myself.

## Coverage and order
- Pages 45-47 are fully covered, in the notes' order: ② the A-route to volume fluctuations, the ideal gas, "second way" via G, the conjugate-pair margin box; the S_tot box at the top of p. 46; ③ the energy Gaussian, the C_V box, N-scaling, "small fluctuation", the ideal gas; ④ the general rule, A_tot with the piston, the ideal gas again, fluctuation vs response, then the bottom sketch (wandering in the well, tilted well, x = KF, ⟨Δx²⟩ = k_BTK).
- Additions, all disclosed or clearly the page's own: the explicit definition of G (row 3), the name "fluctuation-dissipation theorem" (marked), the canonical/microcanonical remark (row 4, unmarked), the AFM worked example, the helium example, the CMB callout, and both plots. The intro says "The text, examples and plots are our own." Thermal-noise calibration of AFM cantilevers (step (b)) is a real, widely used method. It is unsourced, which is acceptable for a remark in a worked example.
- Consistency with the companion page: the page's δN/N = √(k_BTK_T/V) follows from the companion's ⟨(N − N̄)²⟩ = k_BTVK_T/v² (with v = V/N) and equals its δn/n = √(V_c/V), V_c = k_BTK_T. "Following the previous page" (P ∝ e^{−βA_tot}) matches the companion's method. Consistent.

## Licensing
- The OCW resource page has no "courtesy" or "All rights reserved" notice for this file, and the scanned pages carry none either.
- The page reproduces no figure from the notes. The two plots are generated from formulas. The tilted-parabola plot shows the same idea as Wen's bottom sketch on p. 47, but it is drawn from A(x) = x²/2K and is labelled as the page's own illustration. That is acceptable.
- Wording: no passage is copied. The handwritten notes are terse, and the page's prose is its own. Short standard phrases ("fluctuation and response", "second way", "conjugate") are fine.
- No OpenStax or LibreTexts material.

## Forward links and the cosmology callout
- The link to 8.286 Lecture 16 (`/courses/8-286/black-body-radiation`) is correct. That page gives u = g(π²/30)(kT)⁴/(ħc)³ with g = 2 (board, transcript p. 24) and the value 4.17e-14 J/m³. The leadsTo "Lecture 16 derives the energy density of black-body radiation" is accurate.
- The link to 8.286 Lecture 23 (`/courses/8-286/inflation-solutions`) is correct. That page attributes the density ripples to quantum fluctuations during inflation. The callout says "explains how inflation produces them", which is not overstated.
- The physics of the argument holds. Strictly, 10⁻⁵ is a temperature anisotropy ΔT/T, while the callout's numbers are δE/E (= 4δT/T for black-body radiation). That factor does not affect a comparison over 30 orders of magnitude. The argument is also not tied to "today": the photon number in a comoving volume is conserved, so the relative thermal fluctuation of a comoving megaparsec, about 1/√N_γ, is just as tiny at earlier epochs. No change needed. Optional: "temperature ripples of one part in 100 000".
- The value 1e-5 is stored as a `fact` with a reference in calcs. Fine.

## Symbols
- The meanings scoped to this page fit their use: β, δ (spread), ε (energy per particle), G (Gibbs potential, defined as the page defines it), T, x (any parameter / tip deflection / E/Ē in the plot), m, F, v (volume per particle, as in Wen's ideal-gas entropy), P (probability, or pressure elsewhere on the page), A, C (the constant), s, h, N, S, u, E, V, k_B, P₀, K, C_V, K_T, k_s, A_tot, S_tot.
- Possible wording tweak (info): the P₀ meaning, "The fixed outside pressure on the piston", fits the fix suggested in row 1.

## Notes
- `status: draft` is right until the row 1 warning is resolved (or answered).
- I did not run `npm run content:check` or `npm run calc:test`.

## Resolution (2026-11-19, by the page author)

- Warning (spring on the piston): reworded to "a piston pressed by a fixed outside pressure P₀ (Wen draws it as a spring, but writes only the term P₀V)", so the linear-term argument is exact.
- Info, squares outside the average on pp. 45 and 47: a bracketed note now records the notation slip at the boxed result ⟨Δx²⟩ = k_BTK.
- Info, definition of G: the text now says it is implied by the notes' next line.
- Info, canonical versus microcanonical: now marked as a remark of ours.
- Info, per volume: the text now says the notes also allow s = S/V, ε = E/V.
- Info, theorem name and 10⁻⁵ as a temperature ripple: no change (already marked; the conclusion does not depend on the factor 4).
