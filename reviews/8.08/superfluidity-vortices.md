---
page: content/year-4/8.08/superfluidity-vortices.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_bose_gas_co/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/fed85ade1be7fc37f3526ef1f56207de_the_bose_gas_co.pdf (read, local copy; handwritten scan, notes pp. 70-72 read from page images at 150 dpi, the current on p. 70 and the circulation line on p. 71 at 300 dpi; pp. 73-75 belong to bose-condensation-ginzburg-landau and were not reviewed here)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read, local copy; notes p. 69 for the cited boxed dispersion, p. 68 for |ψ₀|² = μ/U₀)
  - content/year-4/8.286/magnetic-monopoles.mdx (read, for the forward link to 8.286 Lecture 22)
verdict: pass-with-notes
---

# Review: Superfluidity: quantized flow, vortices and the critical velocity

The notes are handwritten (Wen); everything was checked against the page images. P. 70 is "Superfluidity" (Ω, V(ψ) sketch, density current, ψ₀e^{inx/R}, "Key", Ω(n) sketch with "Trapped" at n = 2), p. 71 is the barrier argument, "What is vortex", the boxed "No uniform rotation" remark, quantization of vorticity and the tunnelling sketches, p. 72 is "Excitation on a flowing superfluid", the real-system / v_c sketches and "No superfluid flow for free boson condensed state". The page follows them in order. Every `<Formula>` is on the cited page; the four results that are the page's own (Ω_n − Ω₀ = n²E₁, the vortex density, v_c = min ω_k/|k| written as a formula, the ring energies ε_n) are marked "worked out here" / "written as a formula here" in `at=` and "this step is ours" / "this count is ours" in the text. The p. 69 box (reading2) is quoted correctly: ω_k² = (ħ²k²/2m + 2μ)k²/2m and v_s = √(μ/m) "sound velocity".

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after "Quantization of circulation": "(The denominator of the middle expression is hard to read in the scan and may look like $2m$; it must be $m$ ...)" | p. 71 at 300 dpi: the middle step clearly reads ħ/(2m) · 2π · int, then = h/m × integer. The "2" is distinct, not a smudge. | Calls it hard to read. | State it as a slip: "(The notes write $\hbar/2m$ in the middle step, a slip: $\frac{\hbar}{m}\cdot 2\pi = \frac{h}{m}$, which is the result they give.)" |
| 2 | warning | "Why the winding cannot unwind", 2nd paragraph: "Only vortex tunnelling can change $n$ and reduce the superfluid flow." | p. 71: "Only vortex tunneling can change n and reduce the superfluid flow." | The same sentence word for word (and it repeats the sentence before it). | Delete the sentence, or rewrite it ("so the flow can weaken only through vortices"). |
| 3 | info | "Flow around a ring", paragraph "Wen's key point": "For the flow to decay to zero, $n$ must decay to zero." | p. 70: "In order for the flow to decay to zero n must decay to zero." | Almost word for word. | Short, and close to unavoidable, but could be rephrased ("The flow can stop only if $n$ drops to zero"). |
| 4 | info | Same paragraph: "it minimizes $\Omega$ among all states with the same winding number" | p. 70: "ψ₀e^{inx/R} minimizes Ω and satisfies the eq. of motion." | Adds the qualifier "among all states with the same winding number". | Correct physics (it is a local minimum, as the Ω(n) sketch shows), and a needed clarification; optionally mark it as ours. |
| 5 | info | Formula "Energy of the winding states": $\Omega_n - \Omega_0 = n^2E_1$ | Not in the notes (marked "worked out here"). | Written as exact, with the explanation "the other two terms do not depend on the phase". | Holds with |ψ| held at ψ₀. If the amplitude relaxes, |ψ|² = (μ − e_n)/U₀ with e_n = ħ²n²/(2mR²) and Ω_n − Ω₀ = (2μe_n − e_n²)V/(2U₀) = n²E₁ − e_n²V/(2U₀): the page's result is the leading term (relative correction e_n/(2μ), negligible for a macroscopic ring). Optionally add "(with |ψ| fixed at ψ₀)". |
| 6 | info | Tunnelling paragraph: "it happens by quantum tunnelling or thermal activation, and is rare" | p. 71 says only "vortex tunneling". | Adds thermal activation and "rare", unmarked. | Physically correct; optionally "(thermal activation is our addition)". |
| 7 | info | Critical velocity paragraph: "In real helium-4 the excitation curve ..." | p. 72 labels the sketch "Real system", without naming helium. | Names helium-4. | Fine (the sketch is the helium phonon-roton curve); no change needed. |
| 8 | info | Cosmology callout and `leadsTo` | 8.286 Lecture 22 (magnetic-monopoles.mdx): domains of the Higgs field meet; domain walls, cosmic strings ("one-dimensional lines of trapped field energy", only some GUTs) and monopoles (all GUTs). The lecture does not describe a winding phase or a vanishing field. | Callout attributes to Guth only the list of defects and the description of strings; the winding/vanishing description is attached to the vortex. `leadsTo` "of the same topological kind" is the page's own comparison. | Not overstated. Optional: "(the winding picture is ours, not the lecture's)" in `leadsTo`. |

Slips claimed by the page, verified on the images:
- Current n/(ħRm)|ψ₀|² on p. 70: **confirmed** (300 dpi: numerator n, denominator ħ R m). The notes also write it as "ψ = ψ₀e^{inx/R} = n/(ħRm)|ψ₀|²", setting the current equal to ψ; the page's "J_x = ..." is the intended reading.
- Circulation denominator on p. 71: **confirmed as a slip**, but it is legible, not "hard to read" (finding 1).
- Density written ρ on p. 70 and n on p. 71 ("J = n v_s"): **confirmed**.
- Integer called m on p. 72 ("ψ = e^{imx/R}", axis "m", levels ε_m): **confirmed**.
- Sound speed called v_s on p. 69 and v on p. 72: **confirmed**.

## Arithmetic and answer checks
Recomputed independently (Python, CODATA ħ, m(⁴He) = 6.6465 × 10⁻²⁷ kg):
- J_x: (1/m)Re(ψ*(ħ/i)(in/R)ψ) = ħn|ψ₀|²/(mR) ✓; the notes' version differs by ħ² ✓.
- Kinetic energy of a winding state ħ²n²|ψ₀|²V/(2mR²) ✓ (see finding 5).
- Vortex: |∇φ| = 1/r, v_s = ħ/(mr) ✓; ∮ = (ħ/m)2π = h/m ✓; curl(ω × r) = 2ω ✓; N_v/A = 2mω/h ✓ (Feynman's rule, correctly attributed to Feynman and Onsager); ξ ~ ħ/√(2mμ) is the standard healing length ✓.
- Doppler branches: v|k| + v_sk = (v ± v_s)|k| for k ≷ 0 ✓; matches p. 72 exactly.
- Plot 1: x² + 3 sin²(πx) has wells on x² at integers, point (2, 4) on the curve ✓; caption correctly says the barrier height is for display only.
- Plot 2: with μ = mv², k in units mv/ħ, ħω/(mv²) = √((x²/2)(x²/2 + 2)) = |x|√(x²/4 + 1) ✓ and matches the p. 69 box; Doppler term ux ✓. For u < 1 the solid curve is ≥ |x|(1 − u) > 0 ✓; for u > 1 it is negative for small negative x ✓; the free curve x²/2 + ux < 0 on −2u < x < 0 for any u > 0 ✓. ω_k/|k| = v√(1 + x²/4) is smallest as k → 0, so v_c = v ✓.
- Free bosons: ω_k = ħk²/2m, ω_k/|k| → 0 ✓; ε_n = ħ²n²/(2mR²) ✓.
- Worked example: h/m = 9.969 × 10⁻⁸ m²/s ✓ (9.97); ħ/(mR) at 1 cm = 1.587 × 10⁻⁶ m/s ✓ (1.59); 0.01/1.587 × 10⁻⁶ = 6303 ✓ (6300); at 1 μm 1.587 × 10⁻² m/s ✓; N_v/A = 2.006 × 10⁷ m⁻² = 2006 per cm² ✓; spacing 0.223 mm ✓. Numbers and situation are original (the notes quote no numbers).
- Later facts: Δ/k_B = 8.6 K, k₀ = 1.9 Å⁻¹ give Δ/(ħk₀) = 59.3 m/s; with the roton mass 0.16 m(⁴He) the true minimum of ε/(ħk) is 58.4 m/s, so "near 60 m/s" ✓. First sound ≈ 238 m/s at low T, "about 240 m/s" ✓. Both are marked "not in the notes"; the remark that real flow breaks down far lower because of vortex creation is correct.
- Quiz 1: answer 1 ✓; distractor 1 is the notes' slip, explanation correct. Quiz 2: answer 1 (≈ 1.0 × 10⁻⁷) ✓; distractor 1 = ħ/m = 1.59 × 10⁻⁸ ✓; distractor 4 is the 1 cm ring speed, and the explanation says so ✓. Quiz 3: answer 2 ✓. Quiz 4: answer 0 ✓; "about 2000 per cm²" ✓.
- Flashcards: all five correct.
- `npm run calc:test -- -k superfluidity`: 28 passed.

## Coverage and order
- p. 70: Ω, V(ψ) double-well sketch with ψ₀ ≠ 0, torus sketch, density current, constant ψ gives no flow, winding state with the integer label, "Key" statement, decay argument, Ω(n) sketch with dashed parabola and "Trapped" at n = 2, "superfluid": all covered, in order.
- p. 71: n = 1 → n = 0 requires ψ = 0, barrier sketch with shrinking loops, "potential barrier, n cannot change", only vortex tunnelling; vortex ψ = f(r)ψ₀e^{iφ}, f(r) sketch with "size of vortex core", plane sketch with J circling; v_s, J = n v_s, quantization of vorticity; boxed "No uniform rotation" with vortex-array sketch; tunnelling sketches (side and top views, phases 2π, 2πn, 2π(n+1)): all covered, in order. The plane sketch with φ labels is described only implicitly ("the fluid circles the core"), which is enough.
- p. 72: ψ₀ at rest with ω_k = v|k|; flowing ψ₀e^{iKx}, v_s = ħK/m, Doppler branches, v_s < v stable/no friction, v_s > v unstable; real system sketch with v_ck, v_s = v_c sketch; "critical velocity of superfluid flow"; free bosons with v_c = 0, ring states e^{imx/R}, N bosons dropping one by one: all covered, in order.
- Additions are marked as the page's own, except findings 4 and 6 (correct, unmarked, minor).

## Licensing
- No "courtesy" or "rights reserved" notice on pp. 69-72. The notes contain no textbook figure; the page has none of Wen's sketches redrawn: both graphs are generated `<Plot>`s from formulas.
- Paraphrase: one sentence copied word for word (finding 2) and one near-verbatim (finding 3); otherwise only standard terms and sketch labels ("stable flow, no friction", "critical velocity of superfluid flow", "potential barrier").
- No OpenStax or LibreTexts material.

## Notes
- Symbols: the 39 meanings scoped to this page are correct and their units right (U₀ in J·m³, J in 1/(m²·s), E₁, ε_n, v_c, K, N_v). ψ and ψ₀ have no unit (strictly m^(−3/2)); acceptable under the "one clear unit" rule. φ is described as the polar angle that is also the phase; on the page ∇φ in v_s is used for a general phase too, which the meaning covers loosely. `content:check` was not run by the reviewer.
- Writing rules: no em dashes (count 0; en dashes only in the reading titles); every display equation is a cited `<Formula>`; plain English, short paragraphs; ends with `## Summary`.
- Uncertain: none of the readings above depend on unclear handwriting.

## Resolution (2026-11-19, by the page author)
- Warning 1 (circulation denominator): the bracket now states plainly that the notes write ħ/2m in the middle expression, a slip, and that ħ/m gives the stated result h/m times an integer.
- Warning 2 (copied sentence): "Only vortex tunnelling can change n and reduce the superfluid flow." deleted; the preceding sentence already says it in our words.
- Info (near-verbatim "the flow must decay to zero"): rewritten ("The flow could only stop if the winding number went to zero, and a whole number cannot shrink gradually").
- Info ("among all states with the same winding number"): now marked as our qualification.
- Info (Ω_n − Ω₀ = n²E₁ at fixed amplitude): the text now says the amplitude is kept at |ψ₀| and that letting it relax lowers the result slightly, negligibly for a large ring.
- Info (thermal activation, "rare"): now marked as our addition to Wen's "vortex tunneling".
- Other info items need no change. content:check (0 errors) and calc:test pass after the changes.
