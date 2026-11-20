---
page: content/year-4/8.08/ginzburg-landau-theory.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/ising_model/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/c6796eafdf333fb55fb351654657b846_ising_model.pdf (read, local copy; handwritten scan, 7 pages = notes pp. 21-27; pp. 24-27 read from page images at 90, 160, 300 dpi and, for the ⟨s⟩_min line of p. 25, 600 dpi; p. 21 read for the A(T) sketch the page refers to)
  - content/year-4/8.08/ising-model-mean-field.mdx, content/year-4/8.286/false-vacuum.mdx, content/year-4/8.286/higgs-field.mdx (read for context and the forward links)
verdict: needs-changes
---

# Review: Ginzburg–Landau theory: critical exponents and the phase diagram

The notes are handwritten (Wen); pdftotext/OCR is useless, so everything below was checked against the page images. Pp. 24-27 are points ③ "Ginzburg-Landau theory" (p. 24, and p. 25 "h ≠ 0 case"), ④ "Phase diagram for h ≠ 0" (p. 26) and ⑤ "Application of G-L theory" (p. 27, vapor-water). The page follows them in order. Every `<Formula>` was compared with its cited page; all citations are on the right page and the boxed markers are correct (p. 24 expansion and ∂A/∂⟨s⟩ = 0 box, p. 25 A_min and γ boxes, p. 27 G box). The two results that are the page's own (mean-field a, b and the size of ΔC_V) are marked "(worked out here)" in `at=` and "this step is ours" / "our step" in the text.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Response to a field", sentence before "Expansion about the ordered minimum": "(the notes ... give it as $\sqrt{a/b}$, a slip: below $T_c$, $a < 0$)" | p. 25: ⟨S⟩_min = √(−a/b). At 600 dpi a short horizontal stroke before the a, under the root bar, is clearly visible, in the same hand as the "−a" of p. 26's ΔM = 2√(−a/b). | Claims the notes drop the minus. | Delete the slip remark; keep only "(the notes write this position as ⟨s⟩ with the subscript "min")". Also remove any calcs/notes reference to this slip if one exists (none found in the calcs file). |
| 2 | warning | Formula "The exponent γ" (`χ \propto t^{-\gamma}`) | p. 25 box writes χ ∝ t^{−γ} for T → T_c from above, then |t|^{−γ} below. | Copies t^{−γ}, but the page has just defined t = 1 − T/T_c, which is negative above T_c. | Write `\chi \propto |t|^{-\gamma}` (and say the notes write t), or define the reduced temperature as |t| here. |
| 3 | info | Formula "Expansion about the ordered minimum": χ = N/(−2aV) | p. 25 writes χ = N²_spin/(−2a N_spin) followed by V on the fraction line; as written it reads as multiplied by V (uncertain: the placement is ambiguous). | N/(−2aV), which is correct. | Optional bracket: "(the notes' V reads as a factor; it divides)". Only if the author agrees on the reading. |
| 4 | info | Latent-heat paragraph | p. 26 also writes S₁ = −∂A/∂T = −(N/2)∂/∂T(a²/b): with A = −Na²/(2b) the sign should be +. | Not mentioned (page writes S₁ = −∂A⁽¹⁾/∂T = S₂ only). | No change needed; the conclusion ΔS = 0 is unaffected. Could join the existing −½ vs −¼ bracket. |
| 5 | info | Water section, "(the letter we write $r_0$ is hard to read in the scan)" | p. 27 at 300 dpi: clearly r₀ (Wen's r looks like γ), both in the box, in "r₀(P_c, T_c) = 0" and in the sketch label "h = r₀ = 0". | Says hard to read. | Drop the bracket, or say "Wen's r₀". |
| 6 | info | Water section | p. 27 writes "(make δu³ term disappear)" (δu for δn) and labels the sketch with n₀. | Silently correct (δn³). | No change needed. |
| 7 | info | Coverage of sketches | p. 24 also sketches ⟨s⟩(T) falling to 0 at T_c; p. 26 sketches A(⟨s⟩) at fixed h for high and low T ("No singularity"), M(T) with ΔM = 0 at T_c, and M(h) with the jump ΔM; p. 27 sketches the P-T boiling curve with double wells along it, "h = 0" on the curve and "h = r₀ = 0 critical point" at its end. | All described in words or by the generated tilted-well plot, except the explicit ⟨s⟩(T) and the double wells drawn along the boiling curve. | Optional: one clause, "Wen draws the double well at points along the boiling curve". |
| 8 | info | Plot caption, tilted double well: "The higher minimum, while it lasts, is a metastable state." | Notes do not discuss metastability. | Stated in a caption of the page's own plot, unmarked. | Physically correct (the second minimum exists for |h| < 2|a|^{3/2}/(3√3 b^{1/2})). Optionally "(not in the notes)". |
| 9 | info | Cosmology callout, last sentence: "the Higgs field lecture uses the second-order picture of a single well turning into a ring of minima" | 8.286 higgs-field page: the single-well-to-circle picture is the site's toy model, captioned "not from the lecture". | Attributes the picture to the lecture. | "the Higgs field page shows the second-order picture ..." |

Slips claimed by the page, verified on the images:
- (a) ⟨s⟩_min = √(a/b) on p. 25: **not confirmed**; the minus is there (finding 1).
- (b) A_min = −Na²/(2b) on p. 26 against −Na²/(4b) (i.e. −(N/4)a₀²t²/b) on p. 24: **confirmed**. The page's bracket and calcs entry `equal-minima` are right; A₀ is indeed omitted on p. 26.
- (c) ΔM = 2√(−a/b) (per spin) on p. 26: **confirmed**; p. 26's phase diagram labels M = ±√(−a/b) N_spin, so the page's ΔM = 2N√(−a/b) is consistent.
- (d) A(T) sketch on p. 24 rising with T: **confirmed** (concave, rising to T_c, then flat/dashed), while the S sketch on the same page is positive. "Again" is right: p. 21's sketch also rises.

## Arithmetic and answer checks
Recomputed independently (plain Python bisection, R = 8.314462618 J/(mol K)):
- Mean-field coefficients: −T ln(2cosh(T_c s/T)) + T_c s²/2 with ln cosh x = x²/2 − x⁴/12 gives −T ln 2 + ½T_c(1 − T_c/T)s² + T_c⁴s⁴/(12T³), so a = k_BT_c(1 − T_c/T) ✓, b = (k_BT_c/3)(T_c/T)³ ✓ (numerically at T/T_c = 1.1: 4·[f − f₀ − ½as²]/s⁴ → 0.25042 vs 0.25044 ✓). a₀ = k_BT_c, b(T_c) = k_BT_c/3 ✓.
- ⟨s⟩² = −a/b, A = −Na²/(4b) = −(N/4)a₀²t²/b ✓.
- ΔC_V = Na₀²/(2bT_c) ✓ = (3/2)Nk_B with mean-field values ✓. Cross-check against the full mean-field solution: d/dT of −½⟨s⟩² (units k_BT_c) at T/T_c = 0.9999 gives 1.4998 ✓.
- Above T_c: ⟨s⟩ = h/a, A_min = −Nh²/(2a), M = Nh/a, χ = N/(aV) ✓. Below: a + 3b(−a/b) = −2a, χ = N/(−2aV) ✓; ratio ½ at equal |t| ✓ (standard mean-field amplitude ratio Γ₊/Γ₋ = 2).
- Plot 1 caption: 1/(1.1 − 1) = 10 ✓, 1/(2·0.1) = 5 ✓. Plot 2: ½(r − 1)x² + ¼x⁴ − hx is (A − A₀)/(Na₀) with b = a₀ ✓.
- Worked example (T_c = 200 K, as the previous page's z = 4, J = 50 K): t(190) = 0.05, √0.15 = 0.3873 ✓; full root of s = tanh(200s/190) = 0.37949 ✓; +2.06% → "2%" ✓. t(150) = 0.25, √0.75 = 0.8660 ✓, full 0.77552 ✓, +11.7% → "12%" ✓. 1.5R = 12.47 → "12.5" ✓. χ(190)/χ(210) = 0.5 ✓. ΔM/N = 0.7746 → "0.775" ✓; net flipped fraction = ⟨s⟩ = 0.387 → "about 39%" ✓ (with the full 0.379 it would be 38%; fine as a GL estimate). Numbers and situation are original (the notes quote no numbers).
- Quiz 1: answer 1 (β = ½) ✓. Quiz 2: answer 1 (12.5 J/(mol K)) ✓; distractors R = 8.3 and 3R = 24.9 ✓; explanation correct. Quiz 3: answer 1 ✓, explanation correct. Quiz 4: answer 2 ("half as large") ✓, explanation correct.
- Flashcards: all five correct (card 2 uses t = 1 − T/T_c with |t| for C and χ ✓).
- `npm run calc:test -- -k ginzburg`: 37 passed.

## Coverage and order
- p. 24 (③): expansion, A₀ = −k_BT ln 2 N, minimum condition, a(T_c) = 0, b(T_c) > 0, a = a₀(T/T_c − 1), ⟨s⟩ solution, t, β = ½, A above/below, C_V = −T∂²A/∂T² = T∂S/∂T ∝ |t|^{−α}, α = 0, sketches of A, S, C_V: all covered, in order.
- p. 25: field term, A_min definition, T > T_c with A_min boxed, M, χ, "quick way", γ = 1, T < T_c expansion about the minimum: all covered, in order. The notes' χ sketch is symmetric (|t|^{−1} on both sides); the page's factor 2 is marked as its own remark.
- p. 26 (④): fixed h ≠ 0 smooth, fixed T high/low, (T, h) phase diagram with first-order line ending in the second-order point, transition-point sketches, ΔM, latent heat ΔS·T, equal free energies, ΔS = 0 due to s → −s symmetry, "but in general ΔS ≠ 0": all covered, in order.
- p. 27 (⑤): density n = n_c(P, T) + δn as order parameter, cubic term removed, boxed G, first-order line h = 0 near the critical point, h = r₀ = 0 fixes (P_c, T_c), "same as Ising ... universality": all covered, in order.
- Nothing added that is presented as Wen's except finding 9 (attribution to Guth's lecture) and finding 8 (unmarked but correct).

## Licensing
- No "courtesy" or "rights reserved" notice on pp. 21-27. No figure from Huang or any textbook appears in these notes' pages, and the page has none: both graphs are generated `<Plot>`s from formulas.
- No verbatim copying beyond standard terms ("quick way", "first order", "universality", "plays the role of order parameter" paraphrased).
- Later facts are marked: water's critical point (IAPWS 647.096 K, 22.064 MPa → "647 K and 22.1 MPa" ✓) and β ≈ 0.33 (3D Ising class ≈ 0.326 ✓) sit in a bracket "A remark not in the notes".

## Notes
- Forward links: the leadsTo to 8.286 Lecture 23 and the callout agree with content/year-4/8.286/false-vacuum.mdx (false vacuum, constant energy density, exponential expansion, ending by bubble nucleation, graceful exit problem). "As droplets do in a supercooled vapour" is our analogy; Guth's is boiling water; both are fine.
- Writing rules: no em dashes (en dash only in the title); every display equation is a cited `<Formula>`; ends with `## Summary`.
- Intro remark "Wen's name for what is also called Landau theory" is fair.
- Uncertain: finding 3 (V placement on p. 25) depends on reading the handwriting.

## Resolution (2026-11-19, by the page author)

- Finding 1 (error, claimed slip √(a/b) on p. 25): confirmed on the reviewer's 600 dpi crop (a short minus stroke before the a). The slip remark is deleted; the bracket now only says that the notes write the position as ⟨s⟩ with the subscript "min" and that the root is real because a < 0 below T_c.
- Finding 2 (χ ∝ t^(−γ) with t < 0 above T_c): the formula "The exponent γ" now reads χ ∝ |t|^(−γ).
- Finding 3 (V placement in the notes' χ below T_c, uncertain): not added; the page's N/(−2aV) is correct and the reading of the scan is uncertain.
- Finding 4 (sign slip in S₁ on p. 26): added to the bracket after "Free energies of the two states": the notes put a minus in front of (N/2)∂/∂T(a²/b) where a plus belongs.
- Finding 5 (r₀ is legible): "hard to read" dropped.
- Finding 6 (δu³ for δn³): no change needed.
- Finding 7 (undescribed sketches): added a sentence on Wen's ⟨s⟩(T) sketch on p. 24 and a bracket on the p. 27 sketch (double wells along the boiling curve, critical point at h = r₀ = 0).
- Finding 8 (metastability in the plot caption): now marked "(a remark not in the notes)".
- Finding 9 (Higgs callout): now "the Higgs field page draws the second-order picture", since that toy model is the site's own.
- No numbers changed; calcs unchanged. Status set to reviewed.
