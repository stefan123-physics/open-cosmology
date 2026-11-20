---
page: content/year-4/8.08/einstein-relation-langevin-noise.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/transport/ (read: resource page; CC BY-NC-SA 4.0 footer, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/35e4c4437626cad41f37a509d17fc8d0_transport.pdf (read as page images, handwritten, no text layer: handwritten pp. 114-126 = PDF pages 21-33; pp. 116, 118, 119, 120, 122, 123, 125, 126 at 160 dpi, the rest at 90 dpi, with 250-300 dpi crops of the p. 114 step-length line and the p. 123 correlation lines)
  - content/year-4/8.286/cmb-spectrum.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Brownian motion, the Einstein relation and noise

Scope: Wen's handwritten notes pp. 114-126 (end of Chapter IX). I checked every `<Formula>` against the page images, recomputed every number by hand (and `npm run calc:test -k einstein-relation-langevin-noise`: 43 passed), and checked the quiz, flashcards, plots, the slips the page names, and the cosmology callout. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

I found no errors. All 23 formula citations point to the right handwritten page. All three slips the page names are real, and its corrections are right. Every number checks. There are two warnings: one example mixes a flat-spectrum noise figure with a capacitance that cuts the spectrum off, and three slips in the notes are corrected without saying so. There are also some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Johnson noise in a circuit", last paragraph (1 MΩ, 10 kHz, then 10 pF) | (page's own example) | "1 MΩ ... over a bandwidth of 10 kHz shows √(4k_BTRΔf) ≈ 13 μV rms. With a stray capacitance of 10 pF the cutoff 1/2πRC is at about 16 kHz ..." | With the 10 pF present, 10 kHz is not well below the 15.9 kHz cutoff. The noise from 0 to 10 kHz is then 4k_BTR·f_c·arctan(Δf/f_c) = 4k_BTR × 8.93 kHz, so 12.2 μV, not 12.9 μV. Read in order, the paragraph suggests 13 μV applies to that same resistor with its capacitance. Fix: say "ignoring the capacitance" for the 13 μV, or add that with 10 pF it drops to about 12 μV (and add a calcs entry). The quiz is fine: it says "well below 1/(2πRC)". |
| 2 | warning | "Shot noise", sentence "so ∫dt [⟨I(t)I(0)⟩ − I²] = eI (notes p. 123)" | p. 123: "⇒ ∫dt ⟨I(t) I(0)⟩ = eI", without subtracting I² (the sum on the line above does subtract it) | Gives the corrected form and credits it to the notes. | The correction is right. Following writing rule 4, add a short bracket: "(the notes leave out the − I² here)". |
| 3 | warning | "The Einstein relation", second paragraph: "which for a random walk equals the number of steps times the square of the step length (notes p. 114)" | p. 114: "= N_t λ₀ ← step length", with no square (checked in a 250 dpi crop) | Says "square of the step length". | The page is right (⟨x²⟩ = N λ₀² per dimension, up to the dimension factor). It corrects the notes without saying so. Add "(the notes write N_t λ₀)". |
| 4 | info | "Brownian motion in water", gas paragraph: "(the previous page's m v̄/6σ)" | p. 116 margin box: "ν = √(2mk_BT)/3σ" (the 3σ form of p. 102) | Quotes the 6σ value from the previous page. | The previous page already notes that Wen writes 3σ where 6σ is consistent. Here Wen repeats 3σ. Optional: "(the notes repeat √(2mk_BT)/3σ here)". Only "∼" is used, so the physics is not affected. |
| 5 | info | Formula "Friction from the random force" (p. 119) | p. 119 box: "1/η = (1/k_BT)∫₀^∞⟨F(s)F(0)⟩ e^{−t/ηm} ds" (the exponent uses t, but the integral is over s). The disc integral has the same slip. | e^{−s/mη} | Silent correction of an obvious variable slip. Fine as it is, or add a short bracket. |
| 6 | info | Formula "Velocity driven by the random force" (p. 118) | p. 118 box: v = v₀e^{−γt} + ∫_{−∞}^t e^{−γ(t−t′)}F̃(t′)/m dt′ | Same, copied faithfully. | The notes' formula mixes two set-ups. With the integral from −∞ there is no v₀ term; with a v₀ term the integral should start at 0. The steady-state result ⟨vF̃⟩ = K_γ/m is not affected. The page repeats the notes, so it is not wrong about MIT. Optional: drop v₀e^{−γt} or change the lower limit to 0, with a bracket. |
| 7 | info | Langevin long-time limit, p. 118 slip note | p. 118: "t ⇒ ∞: ⟨x²⟩ = 2k_BTη t − mη" | "(The notes write 2k_BTηt − mη, without the factor 2k_BTη on the second term.)" | Verified: the image reads exactly that, and the correct limit is 2k_BTη(t − mη). The note is accurate. On the same page Wen also writes the initial condition as "A − γB + 2k_BT/mγ = 0" (A should not appear there). The page does not repeat it, because it gives only the final result, which is right. No change needed. |
| 8 | info | Langevin paragraph, slip note on ⟨F′⟩ | p. 117: "no friction ⇒ ⟨F′⟩ = −γv", then the boxed equation dv/dt + γv = F_ex/m + F̃/m | "the average collision force is ⟨F′⟩ = −mγv ... (The notes write −γv here and include the m from the next line on.)" | Verified. The boxed equation and the mobility 1/mγ = η both need ⟨F′⟩ = −mγv. The note is fair. |
| 9 | info | Spectrum of an exponential correlation, p. 122 slip note | p. 122: "S(ω) = (cγ/π)/(ω² + γ²)" | S = 2cγ/(ω² + γ²), power spectrum S/π = 2cγ/π(ω² + γ²) | Verified analytically: ∫c e^{−γ|t|}e^{iωt}dt = 2cγ/(ω² + γ²) (calcs `exponential-spectrum` also checks it numerically). Wen's expression is neither S nor S/π. The note is accurate. |
| 10 | info | Stokes paragraph: Stokes's law "valid when a is much larger than the liquid's mean free path" | p. 116: the box "valid only when a ≫ λ" has an arrow to the rough estimate F ∼ aνu, next to the Stokes line | Attaches the condition to Stokes's law. | Same meaning (the hydrodynamic treatment needs a ≫ λ). No change. |
| 11 | info | "Brownian motion in water": "the 8.9 μm is for 300 K, and at 20 °C it is 8.8 μm" | p. 116 gives ν at 20 °C and 8.9 μm, with no temperature for the 8.9 | Says Wen's number corresponds to 300 K. | Verified: 8.894 μm at 300 K and 8.792 μm at 293.15 K. This is our inference, but correct; "the 8.9 μm matches 300 K" would be slightly more careful wording. |

## Formula-by-formula citation check
All 23 `<Formula>` blocks cite `reading1`. Every `at=` matches the handwritten page where the equation appears:
- p. 114: spread in a spring potential (Wen's K = page's κ, noted); mobility u = ηF.
- p. 115: diffusion with a force (boxed); Einstein relation (boxed).
- p. 116: Stokes's law and η = (6πaν)⁻¹; ⟨x²⟩ = 6Dt = 6k_BTηt = k_BTt/πaν with 8.9 μm √(t/1 min ÷ a/1 μm).
- p. 117: Langevin equation (boxed, with ⟨F̃⟩ = 0); d²Y/dt² = −γ dY/dt + 2k_BT/m.
- p. 118: full ⟨x²⟩ solution, both forms (boxed); v(t) (boxed); ⟨vF̃⟩ = (1/m)∫K(s)e^{−γs}ds.
- p. 119: mγ = K_γ/k_BT and 1/η form (boxed); disc integral F₀²t₀²/2τ* = (2mv_x)²/2τ* = 2mk_BT/τ*; 1/η = 2m/τ* ≈ 2mna²v̄ (a ≪ λ).
- p. 120: E = ∫A² dt = ∫dω/2π |A|² = ∫₀^∞ dω/π |A|².
- p. 121: ⟨|A(ω)|²/πt∞⟩ = (1/π)∫G e^{iωt} = S/π.
- p. 122: exponential spectrum (corrected, see #9).
- p. 123: ⟨I_iI_j⟩ cases (Wen's diagonal entry is (e/Δt)²p, checked at 300 dpi: p, not p²); G = I² + eIδ(t); S/π = 2I²δ(ω) + eI/π.
- p. 124: velocity spectrum (1/π)K(ω)/m²(γ² + ω²).
- p. 125: P^v(ω) = 2k_BTmγ/πm²(γ² + ω²) = 2k_BTγ/πm(γ² + ω²); ⟨v²⟩ = k_BT/m check (the latter in the text, also p. 125).
- p. 126: C ẍ = −x/L − ẋ/R and E = x²/2L + Cẋ²/2; P^V(ω) and P^V(f) = 4k_BTR/(1 + ω²R²C²).

I checked the physics of each derivation independently. Current conservation in the parallel LCR gives C dV/dt = −I − V/R. The p. 125 normalisation is consistent with the one-sided spectrum of p. 120: ∫₀^∞ P^v dω = k_BT/m. P^V(f) = 2πP^V(ω) is right for a one-sided spectrum per unit ω. K_γ = πK uses half of the delta function, as Wen does ("πK₀").

## Arithmetic and answer checks
- Wen's 8.9 μm: k_BT(300 K) = 4.142 × 10⁻²¹ J; k_BTt/(πaν) = 2.485 × 10⁻¹⁹/3.1416 × 10⁻⁹ = 7.91 × 10⁻¹¹ m², √ = 8.89 μm. At 293.15 K: 8.79 μm, so "8.8 μm" is right.
- 0.01 poise = 10⁻³ Pa s: correct.
- Worked example (a): η = 1/(6π × 0.5 × 10⁻⁶ × 10⁻³) = 1.061 × 10⁸ m/(N s); k_BT(293 K) = 4.045 × 10⁻²¹ J; D = 4.29 × 10⁻¹³ m²/s; √(6Dt) at 60 s = √(1.545 × 10⁻¹⁰) = 12.4 μm. 8.8 × √2 = 12.4: consistent.
- (b): k_B = 1.5 × 10⁻¹⁰ × π × 0.5 × 10⁻⁶ × 10⁻³/(293 × 60) = 1.340 × 10⁻²³ J/K (2.9% low); N_A = 8.314/1.340 × 10⁻²³ = 6.20 × 10²³ (3.0% high). "Within 3%" holds for both, N_A just at the edge. Acceptable.
- (c): m = (4/3)π(0.5 μm)³ × 1050 = 5.50 × 10⁻¹⁶ kg; mη = 5.83 × 10⁻⁸ s; √(k_BT/m) = 2.71 mm/s; flight 2.71 × 10⁻³ × 5.83 × 10⁻⁸ = 1.58 × 10⁻¹⁰ m. All correct. (Physics aside, info only: in a liquid, added mass and hydrodynamic memory change the details at these short times. The simple Langevin picture is still the right order of magnitude, and the conclusion "only the random walk can be seen" stands.)
- Shot noise: 2eI = 2 × 1.602 × 10⁻¹⁹ × 10⁻³ = 3.20 × 10⁻²² A²/Hz; × 10⁶ Hz, √ = 17.9 nA, so "about 18 nA" is right.
- The 1 − p factor: (e/Δt)²p − (pe/Δt)² = (eI/Δt)(1 − p). Correct, and p = IΔt/e → 0 in the limit, so the δ-function result is exact.
- Johnson: √(4 × 1.381 × 10⁻²³ × 300 × 10⁶ × 10⁴) = 12.9 μV, so "≈ 13 μV" holds for a flat spectrum (but see #1). Cutoff 1/(2π × 10⁶ × 10⁻¹¹) = 15.9 kHz, "about 16 kHz". √(k_BT/C) = √(4.142 × 10⁻²¹/10⁻¹¹) = 20.4 μV, "≈ 20 μV". Total ∫₀^∞ 4k_BTR/(1 + (2πfRC)²) df = 4k_BTR × (π/2)/(2πRC) = k_BT/C: correct, including the caption's "4k_BTR × 1/4RC".
- Quiz 1 (answer 1, D = ηk_BT): correct; the explanation is right.
- Quiz 2 (answer 2, 8.9 μm): rms ∝ √(t/a), and 4/4 = 1: correct.
- Quiz 3 (answer 1, k_BTt²/m): the expansion 2(x − 1 + e^{−x}) ≈ x² checks out; the explanation is right.
- Quiz 4 (answer 2, about 13 μV): 4 × 4.14 × 10⁻²¹ × 10⁶ × 10⁴ = 1.657 × 10⁻¹⁰, √ = 1.29 × 10⁻⁵ V. Correct.
- Flashcards (6): all statements check, including 2eI per hertz and 4k_BTR/(1 + ω²R²C²).
- Plot 1: with x = γt, ⟨x²⟩mγ²/k_BT = 2(x − 1 + e^{−x}). Ballistic k_BTt²/m → x², 2Dt → 2x. The units k_BT/mγ² in the caption and the lag of 1/γ = mη are correct.
- Plot 2: x = 2πfRC = ωRC, y = 1/(1 + x²). The half-power point (1, 0.5) and its label f = 1/2πRC are correct.
- `npm run calc:test -k einstein-relation-langevin-noise`: 43 passed. The calcs file covers every number on the page except the alternative 12 μV of #1, which is not on the page.

## Coverage and order
- The page follows the notes' order exactly: Einstein relation (pp. 114-115), Brownian motion in water and in a gas (p. 116), Langevin equation and ⟨x²⟩ (pp. 117-118), ⟨v²⟩ and friction from force correlations (pp. 118-119), disc in a gas (p. 119), noise and the power spectrum (pp. 120-122), shot noise (p. 123), velocity noise (pp. 124-125), RCL/Johnson noise (p. 126).
- Small omissions, all harmless: the units check of the poise (dyne s/cm², p. 116); the general form A + Be^{−γt} + (2k_BT/mγ)t before the initial conditions are applied (p. 118); Wen's sketch of a periodic pulse train split into harmonics f = 1/T₀, 3/T₀ (p. 120; the page keeps only "a mixture of harmonics"); the "6π ≈ 18" marginal note (p. 116).
- The page adds a worked example (bead), the shot-noise and Johnson-noise numbers, the k_BT/C total, the 1 − p factor and history notes. All are marked as the page's own, or are clearly new examples.

## Licensing
- The source is CC BY-NC-SA 4.0 (OCW resource page). It has no "courtesy" or "rights reserved" notice.
- No figure is reproduced. Wen's sketches (spring potential, flow around a sphere, the kick train and the triangular K(s), noise traces, the circuit) are described in words only. The two graphs are generated from formulas.
- The wording is the page's own throughout. The only close phrases are Wen's short summaries, which are attributed ("fluctuation ↔ dissipation", "In Wen's words, the correlation of the random force determines the friction"). Fine.
- No OpenStax or LibreTexts material.

## Physics of the page's own additions
- Perrin, around 1908 (experiments 1908-1909), following Einstein 1905: correct.
- Wiener-Khinchin theorem for the power spectrum as the Fourier transform of the correlation function: the right name, marked as an addition.
- Schottky's formula 2eI per hertz: correct (one-sided spectrum per unit f, consistent with Wen's eI/π per unit ω).
- Johnson-Nyquist 4k_BTR per hertz: correct, one-sided, low frequency.
- ⟨V²⟩ = k_BT/C (kT/C noise, equipartition for ½CV²): correct.
- The 1 − p factor: correct (see above).

## Cosmology callout and leadsTo
- `content/year-4/8.286/cmb-spectrum.mdx` (Lecture 18) does say that Penzias and Wilson had to convince themselves the hiss was not electrical noise, and that they compared it with a cold load cooled by liquid helium. The callout and leadsTo claim no more than that, and the callout says the connection to Johnson noise is the page's own. Fair.
- "The sky's extra hiss corresponded to about 3 K": the Lecture 18 page does not give this number. Historically Penzias and Wilson reported an excess of 3.5 ± 1.0 K, so "about 3 K" is acceptable as general knowledge. Optional (info): write "about 3.5 K" to match the 1965 paper, or leave it as is.
- The leadsTo target is Lecture 18, matching `lecture: 18` in cmb-spectrum.mdx.

## Notes
- Verdict: pass-with-notes. No physics, number, citation or licence errors. Fix #1 (or qualify the 13 μV). Add the short "the notes write ..." brackets for #2 and #3 (writing rule 4). The rest are optional.
- Uncertain: nothing material. All readings of the handwriting that matter (p in p. 123, no square on λ₀ in p. 114, the 3σ on p. 116, the long-time slip on p. 118, cγ/π on p. 122, −γv on p. 117) were confirmed at 160-300 dpi.

## Resolution (2026-11-19, by the page author)

1. Fixed: the 13 μV is now said to ignore the capacitance, and with 10 pF the 10 kHz band holds about 12 μV (calcs entry `johnson-band-with-C`).
2. Fixed: bracket added that the notes leave out the −I² in ∫dt⟨I(t)I(0)⟩ on p. 123.
3. Fixed: bracket added that the notes leave out the square of the step length on p. 114.
4–8. No change (optional or already right).
9. Fixed: the callout now says about 3.5 K (calcs fact entry `penzias-wilson`).

`npm run content:check` and `npm run calc:test` pass. Status set to reviewed.
