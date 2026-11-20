---
page: content/year-4/8.09/strange-attractors-fractals-turbulence.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: Section 7.6, printed pp. 189-195, from the extracted text and from 110 dpi renders of every page; Section 7.1 pp. 145-146 for eqs. (7.11)-(7.12))
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (not opened separately; it is the resource page of the same PDF)
verdict: pass-with-notes
---

# Review: Strange attractors, fractals and turbulence: the Lorenz equations and beyond

Every `<Formula>` was compared with the rendered page image. All twelve equation numbers and all printed page numbers are correct; every number on the page was recomputed (Python, and `pytest tests/calc -k strange-attr`: 21 passed). No error was found. The findings below are warnings and notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Kolmogorov spectrum `<Plot>` (end of "Chaos in fluids and turbulence") | (no plot) | `range={[-6, 2]}` over `domain={[1, 4.5]}`. With the default ε = 0.02 the line is (2/3)log₁₀0.02 − (5/3)x = −1.133 − 1.667x, which goes below −6 at log₁₀k = 2.92. The caption says the inertial range runs to log₁₀k ≈ 4.1 (y = −7.97), so that end is not drawn, and nothing ever enters the top 4 units of the range. At ε = 0.001 the line leaves the graph already at log₁₀k = 2.5. | Use `range={[-10, -1]}`: it shows the whole domain for every ε from 0.001 to 1 (y runs from −1.67 at x = 1, ε = 1, to −9.5 at x = 4.5, ε = 0.001). |
| 2 | warning | Worked example "Lorenz's attractor in numbers", problem (c), and quiz 3 | (the notes give no Lyapunov exponents) | "about 0.906, 0 and −14.572 (a later numerical result, not in the notes)"; `references: {}` | The values are right (standard values 0.9056, 0, −14.5723 for σ = 10, b = 8/3, r = 28; their sum −13.667 matches the divergence). But they are not later than the 2014 notes: they were published before it (e.g. Viswanath 1998; Sprott, *Chaos and Time-Series Analysis*, 2003, which the calcs file names). "Later" is true only relative to Lorenz (1963). The page also cites no source for them. Write "a numerical result from the literature, not in the notes" and add a `references` entry (e.g. Sprott 2003) for the exponents and for r_H. |
| 3 | warning | Worked example, step (c) | Kaplan–Yorke (7.96) is derived for a 2D patch with λ₁ > 0, λ₂ < 0 and λ₃ = 0 left out (p. 193) | "the Kaplan–Yorke relation below gives d_F = 2 + 0.906/14.572 = 2.062" | The physics is correct: (7.96) applied to the 2D section across the flow gives 1 + 0.906/14.572 = 1.062, and the flow direction (exponent 0) adds 1, giving 2.062. This is also the usual Kaplan–Yorke dimension D = j + Σᵢ≤ⱼ λᵢ/\|λⱼ₊₁\| with j = 2. Two things make it hard to follow. (a) The example uses a relation the page only derives in the next section ("below"). (b) The "2 +" form hides the step. Write it as d_F = 1 + (1 + 0.906/14.572), or move step (c)'s dimension estimate to after the Kaplan–Yorke formula. Note also that the notes' labels (λ₃ = 0, contracting λ₂) differ from the example's ordering (0.906, 0, −14.572: zero second); one sentence saying "in the notes' labels λ₁ = 0.906, λ₂ = −14.572, λ₃ = 0" would help. |
| 4 | info | Formula "Three Lyapunov exponents" (7.87) | V(t) ≈ V₀e^{(λ₁+λ₂+λ₃)t} | V(t) ∝ V₀e^{(λ₁+λ₂+λ₃)t} | "∝ V₀" is redundant. Use ≈ as the notes do. |
| 5 | info | Paragraph after (7.89) | "which is the Hausdorff dimension (also called the capacity dimension or the fractal dimension)" | Page repeats this, then adds that box counting is strictly the capacity dimension and that the Hausdorff dimension agrees for these examples. | The added remark is correct: for the self-similar Cantor set and Koch curve, which satisfy the open-set condition, the Hausdorff and box-counting dimensions are equal (ln 2/ln 3 and ln 4/ln 3). It is marked as the page's own. No change needed. |
| 6 | info | Below (7.98) | Step written ε | Step written h, with a note saying why | Correct, and declared: the notes use ε both for the step in (7.98) and for the energy flux on p. 195. |
| 7 | info | After the fixed-point formula | "With some work, we can show that … stable up to r = r_H" (no value) | r_H = σ(σ + b + 3)/(σ − b − 1) = 24.74, marked "the notes do not give r_H" | Correct: the standard result (Lorenz 1963; e.g. Strogatz §9.2), which needs σ > b + 1. 10·15.667/6.333 = 24.737. Marked as the page's own. A reference would be good (see #2). |
| 8 | info | "Strange attractor" paragraph and worked example | "In fact D ≃ 2.05" | "about 2.05"; Kaplan–Yorke estimate 2.062 "close to the notes' value" | Fine. (Uncertain, not checked against a source: 2.05 is probably the correlation dimension of Grassberger and Procaccia, 2.05 ± 0.01, which is a slightly different measure from the Kaplan–Yorke dimension. The page does not claim they are the same quantity.) |
| 9 | info | Fixed points; Kolmogorov list | Notes: steady states x* = ±√(b(r−1)); eddies "are efficient at transferring energy" | "two steady rolls turning in opposite directions"; eddies "carry energy down to smaller scales" | Both are standard physics (the sign of x is the direction the roll turns; the 3D energy cascade runs to small scales), but the notes say neither. Acceptable as explanation. |
| 10 | info | (7.88) intro | Notes do not refer back to (7.11) here | "comparing with (7.11)" | Checked: (7.11) on p. 145 is V̇ = ∫dV ∇·f. The cross-reference is correct. |
| 11 | info | Damped driven pendulum paragraph | "nonlinear damped driven oscillator", ∇·f = −1/q (p. 191, cf. (7.12) p. 146) | "damped driven pendulum of Section 7.1, λ₁+λ₂+λ₃ = −1/q" | Correct: the oscillator is introduced in Section 7.1 and (7.12) gives −1/q. |

## Arithmetic and answer checks
- r_H = 10(10 + 8/3 + 3)/(10 − 8/3 − 1) = 24.7368 → 24.74. Correct (text, caption, plot expressions, worked example).
- Bifurcation plot: branches √(8/3 (r − 1)) switch from solid to dashed at 24.74, and the origin from solid to dashed at r = 1. At r = 35, x* = 9.52, inside the range ±11. Correct.
- x* = √(8/3 · 27) = √72 = 8.485; z* = 27. Correct. Since 28 > 24.74 both are unstable. Correct.
- ∇·f = −(10 + 8/3 + 1) = −13.667; e^(−13.667) = 1.16 × 10⁻⁶ ≈ 1.2 × 10⁻⁶. Correct. Quiz 1 "a factor of about a million": 1/1.16e-6 = 8.6 × 10⁵. Acceptable.
- 0.906 + 0 − 14.572 = −13.666. Correct; it matches −13.667 to rounding.
- d_F = 2 + 0.906/14.572 = 2.0622 → 2.062. Correct.
- Cantor ln 2/ln 3 = 0.63093 (0.6309, 0.631); Koch ln 4/ln 3 = 1.26186 (1.262). Correct.
- Lengths plot: (2/3)¹⁰ = 0.01734 → 0.017; (4/3)¹⁰ = 17.76 → 17.8. Correct. The Koch curve leaves the y range [0, 4] at n ≈ 4.8. This is acceptable, since the caption gives the value at n = 10 in words.
- Kaplan–Yorke step: ln N/ln(a₀/a) = (λ₁ − λ₂)t/(−λ₂t) = 1 + λ₁/\|λ₂\|. Correct.
- Kolmogorov units: (m²/s³)^{2/3}(1/m)^{−5/3} = m^{4/3+5/3}/s² = m³/s². Correct. Item 3: ν³/λ₀⁴ has units m⁶s⁻³/m⁴ = m²/s³. Correct (as in the notes).
- Tea cup: ε = 0.1³/0.05 = 0.02 m²/s³; λ₀ = (10⁻¹⁸/0.02)^{1/4} = 8.41 × 10⁻⁵ m; L/λ₀ = 595 ≈ 600; 1/L = 20 m⁻¹ (log 1.30); 1/λ₀ = 1.19 × 10⁴ m⁻¹ (log 4.08 ≈ 4.1). All correct. The example (numbers and situation) is original.
- Quiz: Q1 answer 1 (−(σ+b+1)), Q2 answer 1 (ln 2/ln 3), Q3 answer 1 (one positive exponent, negative sum), Q4 answer 1 (k^(−5/3)). All marked answers and explanations are correct.
- Flashcards: all correct. λ₀ ∼ (ν³/ε)^{1/4} is not written in the notes but follows directly from their item 3.
- Calcs file: 21 entries, all pass. The value 1.2 × 10⁴ m⁻¹ in the Kolmogorov caption is listed under `tea-k-high` but only its log₁₀ is computed. Minor; 1/8.409e-5 = 1.19 × 10⁴ is correct.

## Coverage and order
- The page follows the notes' order: 7.6.1 (Lorenz equations, fixed points, pitchfork and subcritical Hopf, dissipation, bounding sphere, strange attractor, three Lyapunov exponents, the pendulum, stretching and folding) → 7.6.2 (fractals, Cantor set, (7.89), Cantor dimension, Koch curve, Kaplan–Yorke (7.94)-(7.96)) → 7.6.3 (Navier–Stokes, continuum of variables, (7.98), regular and irregular spatial structure, dimension density, strong turbulence, three scales, Kolmogorov (7.99)). Nothing in the notes is left out.
- Lyapunov exponents get their own `##` section, although in the notes they sit inside 7.6.1. This is a heading choice only; the order is unchanged.
- Additions, all marked: r_H, the measured exponents and the Kaplan–Yorke estimate 2.062, the capacity-dimension remark, the h for ε renaming, the tea-cup example, and three generated plots.
- The page has no picture of the attractor (notes Fig. 7.67) and no drawing of the Cantor set or Koch snowflake (Figs. 7.69-7.70). `<Plot>` cannot integrate an ODE, so this is acceptable. The text describes them.
- Formula citations checked: (7.86) p. 189; fixed points p. 189 (unnumbered); divergence p. 190 (unnumbered, inline in the text); (7.87) p. 190; (7.88) p. 191; (7.89) p. 192; (7.90)-(7.92) p. 192; (7.93) p. 192; (7.94)-(7.96) p. 193; (7.97)-(7.98) p. 194; (7.99) p. 195. All correct. The prose page references (bounding sphere p. 190, Cantor pp. 191-192, Koch infinite length p. 193, dimension density p. 194, the definitions of L, λ₀, ε, v_λ and the three scales p. 195) are also correct.

## Licensing
- The notes (Stewart, typed) carry no "All rights reserved" or "Courtesy of" notice in Chapter 7 (grep of the extracted text found none). They fall under the OCW CC BY-NC-SA licence.
- No figure is reproduced. The fixed-point diagram is generated from x* = 0 and ±√(b(r−1)) and does not copy Fig. 7.66's unstable-cycle sketch. The lengths and Kolmogorov plots are the page's own.
- No OpenStax or LibreTexts material.
- Paraphrase is generally good. These sentences stay close to the notes' wording, though they are short and mostly standard definitions (acceptable, listed for the record):
  - "x is the average velocity around the roll, y the temperature difference between its rising and falling halves, and z the temperature difference between its inside and outside" (notes p. 189: "x being the average velocity in the loop, y being the temperature difference between the flow on the two halves of the roll, and z being the temperature difference between the inside and outside of the roll").
  - "They can be seen as an approximation to the full Navier–Stokes and heat-transfer equations" (notes: "One can think of these equations as an approximation arising from the full Navier-Stokes and heat transfer equations").
  - "Fractals have nontrivial structure on arbitrarily small scales" (notes p. 191: "characterized by a nontrivial structure at arbitrarily small length scales").

## Notes
- **Forward links.** `leadsTo: []` and there is no cosmology callout. I searched `content/` for turbulence, Kolmogorov, Lyapunov, fractal, strange attractor and chaos. The only later mentions are passing ones: Ferreras 2.3 `galaxy-clusters` (turbulence biases X-ray cluster masses) and Ferreras 4.2 `simulating-galaxy-formation` (gas "stirred by turbulence"). The 8.286 `false-vacuum` page's "chaotic initial conditions" (Linde) uses "chaotic" in an unrelated sense. The 8.962 syllabus has nothing on chaos or turbulence. I found no genuine forward link; leaving `leadsTo` empty is justified (AGENTS rule 6: only "where a real connection exists"). If the author wants one, Ferreras 4.2 (`simulating-galaxy-formation`) could be justified weakly: baryonic gas in galaxy simulations is turbulent, unlike collisionless dark matter. It is optional and not recommended as a cosmology claim.
- The prerequisite `viscosity-conduction-boltzmann-equation` (8.08) uses ν for the dynamic viscosity coefficient. This page uses ν as kinematic viscosity (m²/s, as the notes do), and it states the units, so there is no confusion on the page itself.
- The internal link `/courses/8-09/chaos-logistic-map` matches the form used by the other 8.09 pages.

## Numbered findings (summary)
1. warning: The Kolmogorov plot's y range [−6, 2] cuts off the line from log₁₀k ≈ 2.9 (ε = 0.02), so the end of the inertial range named in the caption (log₁₀k ≈ 4.1) is not drawn. Use [−10, −1].
2. warning: The Lorenz Lyapunov exponents are called "a later numerical result", but they predate the 2014 notes, and the page cites no reference for them (or for r_H). Reword and add a `references` entry.
3. warning: Worked example (c) applies the Kaplan–Yorke relation before the page derives it, in a "2 + …" form that hides the step 1 + (1 + λ₁/\|λ₂\|) and the relabelling of exponents. The physics is correct.
4. info: In (7.87) the page writes "∝ V₀" where the notes have ≈.
5. info: The capacity-dimension remark, the h renaming, r_H = 24.74 and the 2.062 estimate are all correct and marked as the page's own.
6. info: Three sentences stay close to the notes' wording (listed under Licensing). They are acceptable as short standard definitions.
7. info: There is no genuine forward link in `content/`, so empty `leadsTo` is justified.

## Resolution (2026-11-19, by the page author)

1. Kolmogorov plot range changed to [−10, −1], so the line is drawn over the whole domain for every ε on the slider.
2. The Lyapunov exponents are now described as values from the numerical literature (not in the notes), not as a "later" result. They stay recorded as a quoted fact in the calcs file; r_H is marked as our own formula on the page.
3. Worked example step (c) now shows the step: 1 + 0.906/14.572 = 1.062 in the section across the flow, plus 1 for the flow direction, giving 2.062. It refers to the relation as "derived below" and maps the exponents onto the notes' λ₁, λ₂. It also says the notes' 2.05 may come from a different measure of dimension.
4. (7.87) now uses ≈, as in the notes.
5. No change needed.
6. The x/y/z sentence and the Navier–Stokes sentence are reworded; the fractal definition is kept as a standard definition.
7. leadsTo stays empty.
