---
page: content/year-4/8.09/pendulum-periodic-secular-perturbations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/8ba02baff1896b9ba92eeb05e6a6952c_MIT8_09F14_Chapter_5.pdf (read: local copy ch5.pdf/ch5.txt; printed pp. 95-98 read as rendered page images; Section 5.3, pp. 98-100, read in the text for the leadsTo check)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_5/ (not fetched; it is the resource page of the same PDF)
  - Chapter 4 notes (local ch4.txt), read only to check the page's cross-references to Chapter 4
verdict: needs-changes
---

# Review: The finite-angle pendulum: periodic and secular perturbations

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Intro paragraph, last sentences: "action-angle variables of the harmonic oscillator, from Chapter 4 of the notes (Sections 4.5 and 4.6 there)" | In Chapter 4, Section 4.5 is "Kepler Problem"; the action-angle variables, the harmonic oscillator in action-angle form (eqs. 4.185-4.191) and the pendulum's frequency plot (Fig. 4.8) are all in Section 4.6 "Action-Angle Variables" | Cites Sections 4.5 and 4.6 | Write "(Section 4.6 there)". |
| 2 | warning | Worked example, step "The secular effect", and Summary: "about 50 swings" | (not in notes; page's own example) | "falls behind by 0.01 of a cycle" each period, so "0.5/0.01 = 50 swings, roughly 90 s" | The count is 50 full periods (50 x 1.812 s = 90.6 s). A "swing" is often read as half a period (one side to the other), which would make it 100 swings. Say "50 periods (full swings back and forth)". |
| 3 | info | Worked example, step "First-order shift": "At the turning point all the energy of H0 is potential, E + mga = ½mgaθ0²" | Eq. (5.28) uses J0 = H0/ν = (E + mga)/ν, identifying E + mga with H0 at first order | Equates E + mga (the full energy, H0 + ΔH) with ½mgaθ0² | Correct to first order, which is all that matters for the shift; optionally add "to first order" (the exact value is mga(1 − cos θ0)). The same first-order ambiguity (θ0 as the amplitude of J0 vs the true amplitude, which differ by a factor 1 + θ0²/24 for β0 = 0) only affects O(θ0⁴), consistent with the page's "the difference is a second-order effect". |
| 4 | info | Bracket after eq. (5.22) | Notes write θ = sqrt(2α/Iω²) sin(ωt + δ), p = sqrt(2Iα) cos(ωt + δ), using ω for the oscillator frequency although ω has just been defined as the angle variable in eq. (5.21) | Explains that ω and δ stand for Ω and 2πβ | Correct (Ωt + δ = 2π(νt + β) gives δ = 2πβ; the amplitudes agree with the J forms since α = ΩJ/2π). The remark does not say outright that the reuse of ω is a slip; optional to add "(a reuse of ω in the notes)". |
| 5 | info | Bracket after eq. (5.26) | J^(1)(t) = J0 + J0²/(24π²Iν) sin⁴(2π(νt + β0)), with J^(0) = J0 stated as the initial value | Notes that this equals J0 at t = 0 only if sin(2πβ0) = 0; subtract sin⁴(2πβ0) in general; notes take β0 = 0 for Fig. 5.1 | Verified: integrating eq. (5.24) from 0 gives J0²/(24π²Iν)[sin⁴(2π(νt+β0)) − sin⁴(2πβ0)]. Remark is correct and fairly worded. (One could also read J0 as a constant of integration rather than J(0); the remark is still right given that the notes call J0 the initial value.) |
| 6 | info | "The action wobbles": "The notes draw this as a phase-space ellipse that bulges out along the θ axis" | Fig. 5.1: the J0 orbit (circle in the scaled plot) and the J^(1) orbit, which coincides at the p axis and is wider along the θ axis | As stated | Accurate, though "ellipse that bulges" is slightly loose: it is the J^(1) curve that bulges relative to the unperturbed ellipse. Optional rewording: "the perturbed orbit bulges out beyond the unperturbed ellipse along the θ axis". |

Formula-by-formula citation check (all against the rendered page images):
- "Pendulum Hamiltonian" = eq. (5.19), p. 95: correct.
- "Expanded pendulum Hamiltonian" = eq. (5.20), p. 95: identical, including −θ²/12 + θ⁴/360 (checked also by Taylor series).
- "Unperturbed part and perturbation", p. 96 (unnumbered in the notes): correct; page writes p²/2I where notes write p²/2ma², equivalent with I = ma² stated on the same line of the notes.
- "Action-angle variables of the oscillator" = eq. (5.21), p. 96: correct (w for the notes' ω, explained on the page).
- "Angle and momentum in action-angle form" = eq. (5.22), p. 96: right-hand forms identical.
- "Perturbation in action-angle variables" = eq. (5.23), p. 96: correct; verified algebraically with mga = IΩ².
- "First-order rates" = eq. (5.24), p. 96: both rates verified by differentiation (−J/(12π²I) sin⁴ and J²/(3πI) sin³cos).
- "Average rate over one period" = eq. (5.25), p. 97: correct.
- "Action to first order" = eq. (5.26), p. 97: identical to the notes (with the bracketed caveat).
- "Average drift of the phase" = eq. (5.27), p. 97: correct, (1/12)(3/8) = 1/32.
- "Frequency shift against energy" = eq. (5.28), p. 98: correct.
- In-text page citations (pp. 96-97 for the periodic/secular discussion, p. 98 for β^(1) ≈ mean rate × t + β0 and ν′ = ν + mean rate): correct.

## Arithmetic and answer checks
All recomputed independently (Python, midpoint-rule elliptic integral with 200 000 steps):
- Ω = sqrt(9.81/0.80) = sqrt(12.2625) = 3.50179 rad/s → "3.502" correct; ν = 0.557326 Hz → "0.5573" correct; T = 1.79428 s → "1.794" correct.
- ν′ − ν = −νθ0²/16 from eq. (5.28) with E + mga = ½mgaθ0² and g/a = 4π²ν²: algebra verified. θ0² = 0.16, shift 1.0%; ν′ = 0.551753 → "0.5518" correct; T′ = 1.81240 s → "1.812" correct.
- k = sin 0.20 = 0.198669 → "0.1987" correct; K(k) = 1.5866498 → "1.5866" correct; 2K/π = 1.0100926 → "1.0101", "1.01% longer" correct.
- 1/(1 − 0.01) = 1.0101010; difference from 2K/π = 8.4 × 10⁻⁶ → "about one part in 10⁵" correct. Series check: exact T/T0 = 1 + θ0²/16 + 11θ0⁴/3072 + …, first order 1/(1 − θ0²/16) = 1 + θ0²/16 + θ0⁴/256 + …, difference −θ0⁴/3072 = −8.3 × 10⁻⁶: confirms "second-order effect".
- 0.5/0.01 = 50 periods; 50 × 1.81240 s = 90.6 s → "roughly 90 s" correct (see finding 2 on "swings").
- Wobble: J0/(24π²Iν) with J0 = πIΩθ0², ν = Ω/2π equals θ0²/12; 0.16/12 = 1.33% → "about 1.3%" correct.
- 0.40 rad = 22.9° → "about 23°" correct.
- Plot: ΔJ/J0 ÷ θ0² = sin⁴(2πx)/12 verified (from eq. 5.26 with β0 = 0 and the wobble result). β^(1)/θ0²: J0/(12π²I) = νθ0²/6, and ∫0^x sin⁴(2πs) ds = 3x/8 − sin(4πx)/(8π) + sin(8πx)/(64π), verified; mean slope −(1/6)(3/8) = −1/16 matches the dashed line −x/16. Range: minimum of curves at x = 4 is −0.25 > −0.32, maximum 1/12 ≈ 0.083 < 0.14. Caption correct ("falls behind by θ0²/16 cycles per period"; β is measured in cycles since w = νt + β).
- Quiz 1: answer 1 correct; explanation correct.
- Quiz 2: answer 1 correct (sin³cos = d/dx(¼ sin⁴)); "wobbles by a fraction up to θ0²/12" correct.
- Quiz 3: answer 1 ("By 1%") correct; explanation correct (θ0²/4 = 4%; exact 1.01%).
- Quiz 4: answer 1 correct; the notes say exactly this (negative linear correction just above Ê = −1); ν_full → 0 at Ê = 1 matches Fig. 5.2.
- Flashcards 1-4: all correct (checked H0, ΔH, mean rate, shift, action-angle forms with H0 = νJ).
- Calcs file: entries match the page's numbers and formulas; the elliptic-integral and agreement entries reproduce the values above.

## Coverage and order
Section 5.2 (pp. 95-98) in the notes' order: eq. (5.19) → expansion (5.20) → H0, ΔH, I, Ω (and why Ω, not ω) → (5.21) → (5.22) → (J, β) as canonical variables → (5.23) → (5.24) → pause: β^(1), J^(1) can be integrated → periodic orbits, the two possibilities (periodic / secular) → (5.25) → J periodic since ∫ sin³cos = 0 → (5.26) → J sets the amplitude, Fig. 5.1 with β0 = 0 → ∫ sin⁴ = 3/8, (5.27) → secular, β ≈ mean rate × t + β0 plus periodic terms → ν′ = ν + mean rate → ν_full(E) from Chapter 4 (Fig. 5.2) → (5.28) → linear correction just above Ê = −1. Every item is on the page, in the same order. Nothing left out. Added by the page: the wobble size θ0²/12, the plot, the worked example (all clearly the page's own).

## Licensing
- No "rights reserved" or "courtesy" notice in the Chapter 5 PDF text (grep of all chapter texts: none).
- Figures 5.1 (phase-space orbits) and 5.2 (ν_full vs Ê) are described in words only, not redrawn. The page's Plot shows a different quantity (ΔJ/J0 and β^(1) against νt), generated from formulas.
- Paraphrase: compared sentence by sentence with pp. 95-98; no copied sentences. Closest is "Since w and β differ only by νt, the pair (J, β) serves as the new canonical variables" vs the notes' "Since ω and β are linearly related, we are free to take (J, β) as our new canonical variables": rewritten, acceptable. The periodic/secular bullet points are rewritten.
- Worked example (0.80 m pendulum, θ0 = 0.40 rad, elliptic-integral comparison, half-period lag) is original: the notes have no numerical example in Section 5.2.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo to Section 5.3: verified in the notes (pp. 98-100). Section 5.3 perturbs a Kepler orbit by −h/rⁿ, uses action-angle variables (β2 fixes the perihelion angle), averages ΔH over an orbit to get the secular change of β2, and works out n = 2 and n = 3 (the GR case). The leadsTo text is accurate.
- No `Callout kind="cosmology"` on the page; none needed (no direct cosmology link in Section 5.2).
- Prerequisites `perturbation-theory-hamilton-jacobi` (8.09 Section 5.1) and `nonlinear-autonomous-systems` (18.03, pendulum phase portrait) exist and fit. Chapter 4 pages are deliberately not listed (per the brief).
- The intro's description of Section 5.1 ("tried it on a problem whose answer was known anyway") matches p. 95 (eqs. 5.15-5.18 reproduce an earlier result).
- The notes write "periodic over the period τ" on p. 98 although T is used elsewhere; the page silently uses "every period", which is fine.
- No em dashes found on the page.


## Resolution (2026-11-19, by the page author)

1. Fixed: the introduction now points to Section 4.6 of the notes only.
2. Fixed: the worked example and the Summary now say 50 full periods (swings there and back).
3. Fixed: the example says E + mga = ½mgaθ₀² holds to first order.
4. No change (the bracket after eq. (5.22) already names both stand-ins).
5. No change.
6. Fixed: the phase-space remark now says the perturbed orbit bulges out beyond the unperturbed ellipse along the θ axis.
