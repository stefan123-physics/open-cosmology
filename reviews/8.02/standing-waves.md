---
page: content/year-1/8.02/standing-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w13d1/ (read: local copy presentati_w13d1.pdf/.txt, 29 slides labelled "P30- 1" to "P30- 29"; slide number = label = PDF page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: local copy chapte13em_waves.pdf/.txt, Sections 13.4–13.5 and the start of 13.6; printed page = PDF page − 1, confirmed with pdftotext -f/-l on PDF pages 7–14)
  - content/year-1/8.02/maxwell-equations-and-em-waves.mdx (read: overlap check, Session 28 page)
  - content/year-4/8.286/black-body-radiation.mdx (read: cosmology callout and leadsTo check)
  - calcs/8.02/standing-waves.yaml (read; `npm run calc:test -- -k standing-waves`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Standing waves and the wave equation for light

Citation convention checked: slide numbers are the "P30- N" labels (= PDF pages); course-notes pages are the printed footers (printed = PDF − 1). Section 13.4 starts on p. 6, Eq. (13.4.5) p. 7, (13.4.6) p. 7, (13.4.7)–(13.4.13) p. 8, (13.4.14)–(13.4.16) p. 9, (13.4.17)–(13.4.23) p. 10, (13.4.24)–(13.4.27) p. 11, Section 13.5 and (13.5.1)–(13.5.6) p. 12, (13.5.7)–(13.5.11) p. 13, (13.5.12) and the "90° out of phase" sentence p. 14. No "rights reserved" or "courtesy" notice in the slide text or in Chapter 13's text.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Standing waves", paragraph "Standing electromagnetic waves" | Notes p. 12, Eq. (13.5.2): the left-moving wave is E₂y = −E₂₀ cos(kx + ωt), B₂z = +B₂₀ cos(kx + ωt). The minus sign on E (not on B) is what makes E × B point along −x for that wave. The slides (slide 7) add E₀ sin(kx − ωt) + E₀ sin(kx + ωt) for E alone and never write B. | Gives the notes' sums without saying where the minus sign comes from, and does not connect them to the slides' version. | Add one sentence: the reflected wave's E is reversed relative to B so that it travels towards −x (E × B along −x); the slides' sine form and the notes' cosine form have the same nodes (sin kx = 0, x = nλ/2) and differ only in the choice of time origin (cos ωt vs sin ωt). The caller specifically asked that both be explained; at present only the results are shown. |
| 2 | warning | Same paragraph, "in time they are a quarter period out of step (p. 13)" | The time dependence (Eq. 13.5.12) and "the two fields are 90° out of phase" are on p. 14 (nodal/antinodal planes are on p. 13). | p. 13 | "(pp. 13–14)". |
| 3 | warning | Cosmology callout | 8.286 Lecture 16 page: classically each standing-wave mode gets kT and the total diverges (Jeans's paradox); only the quantum mean energy hν/(e^{hν/kT} − 1) per mode gives the black-body law. | "counting these standing waves and giving each its thermal share of energy leads to the black-body law" | "Thermal share" reads as the classical kT, which leads to the catastrophe, not the black-body law. Suggest: "…counting these standing waves shows that classical physics gives each one kT and an infinite total; quantum mechanics gives the short-wavelength modes almost nothing, and that leads to the black-body law…". The leadsTo `why` ("counting the standing electromagnetic waves… gives the energy density") has the same gap, milder; optional "with quantum mechanics". |
| 4 | info | "From Maxwell's equations to the wave equation" | Slides do the Ampère–Maxwell rectangle first (slides 19–20), then Faraday (slides 21–22). The notes do Faraday first (pp. 6–7), then Ampère–Maxwell (pp. 7–8). | Faraday first, citing slide 22, then Ampère–Maxwell, citing slide 20. | Fine (follows the notes and cites both); optionally say "(the slides take them in the other order)". |
| 5 | info | Last line of the derivation: "E_y and B_z are 'the same' wave with different amplitudes, in phase (slide 27)" | Slide 27: "the same, just different amplitudes". "In phase" is on slide 16 and notes p. 11. | All cited to slide 27. | "(slide 27; in phase: slide 16, notes p. 11)", or drop "in phase" here since the previous page covers it. |
| 6 | info | Formula "Wave equation", `cite="reading2" at="slides 23 and 25"` | Also Eqs. (13.4.10)–(13.4.13), p. 8. | Slides only; the prose before it cites p. 8. | Correct as cited. |
| 7 | info | "Standing waves", Tacoma Narrows sentence | Slide 9 names the bridge and links to pbs.org; it does not say "wind-driven". | "the wind-driven oscillations of the Tacoma Narrows Bridge" | Historically correct (the 1940 collapse was wind-driven torsional flutter); the page's own addition. No change needed. |
| 8 | info | "Take a wave travelling along x … (course notes, Section 13.4, p. 6; slides 18–22)" | The geometry (E along y, B along z) is stated in the notes, p. 6; the slides show it only in their figures. | As cited. | Fine. |

Every other formula and page reference was checked against its cited location and is correct:
- Intro "(slides 1, 6, 13)": outline, "This Time: Standing Waves", "Which Leads To… EM Waves". Correct.
- Travelling-wave definitions λ = 2π/k, T = 1/f, ω = 2πf, v = ω/k = λf, +x for kx − ωt, −x for kx + ωt: slides 3–5. Correct ("slides 2–5").
- Formula "Standing wave", slide 7: E₀ sin(kx − ωt) + E₀ sin(kx + ωt) = 2E₀ sin kx cos ωt. Correct, identity verified.
- Nodes at sin kx = 0, x = nλ/2; antinodes amplitude 2E₀: notes Eqs. (13.5.8)–(13.5.9), p. 13. Correct.
- Instruments, microwave ovens, bridge: slides 8–9. Correct.
- Formula "Standing electromagnetic wave", Eqs. (13.5.6)–(13.5.7), pp. 12–13: 2E₀ sin kx sin ωt and 2B₀ cos kx cos ωt. Correct; both identities verified (cos(a−b) − cos(a+b) = 2 sin a sin b; cos(a−b) + cos(a+b) = 2 cos a cos b).
- Nodes of E (x = nλ/2) = antinodes of B (Eq. 13.5.11), shifted by λ/4 (Eq. 13.5.10): p. 13. Correct.
- Perfect-conductor group problem: slide 28 (incident x̂E₀ cos(kz − ωt), conductor at z = 0, total E at the surface, reflected wave, B fields, surface current). Page's description, a node of E at the surface and a surface current, matches. Correct.
- Faraday rectangle in the xy-plane: line integral [E_y(x+dx) − E_y(x)]ℓ, flux rate ℓ dx ∂B_z/∂t (normal +z): notes Eqs. (13.4.2)–(13.4.4), pp. 6–7; slide 22. Formula ∂E_y/∂x = −∂B_z/∂t = Eq. (13.4.5), p. 7. Correct, signs right.
- Ampère–Maxwell rectangle in the xz-plane, no current: [B_z(x) − B_z(x+dx)]ℓ = μ₀ε₀ ℓ dx ∂E_y/∂t (normal +y): Eqs. (13.4.7)–(13.4.8), p. 8; slide 20. Formula −∂B_z/∂x = μ₀ε₀ ∂E_y/∂t = Eq. (13.4.9), p. 8. Correct, signs right.
- Derivation step "differentiate the first in x, swap mixed derivatives, use the second": ∂²E_y/∂x² = −∂/∂t(∂B_z/∂x) = μ₀ε₀ ∂²E_y/∂t². Correct (slide 23; notes Eq. 13.4.10–13.4.11). The B equation (slide 25; Eq. 13.4.12) also checked.
- f(x − vt): ∂²/∂x² → f″, ∂²/∂t² → v² f″, so v² = 1/μ₀ε₀: slide 24; Section 13.4.1, pp. 9–10. Correct. Linearity and superposition: p. 10. Correct.
- Amplitudes: ∂E_y/∂x = E₀f′, −∂B_z/∂t = vB₀f′, so E₀ = vB₀: slide 27; Eq. (13.4.26), p. 11. Correct (the notes derive it from the sinusoid, E₀k = B₀ω; the page's general-f form is the slides').

## Arithmetic and answer checks
- Worked example (a): λ = 2.998 × 10⁸ / 2.45 × 10⁹ = 0.12237 m ≈ 0.122 m; λ/2 = 6.12 cm ≈ 6.1 cm. Correct.
- Worked example (b): 2E₀ = 2000 V/m; B₀ = 1000 / 2.998 × 10⁸ = 3.336 × 10⁻⁶ T ≈ 3.3 × 10⁻⁶ T. Correct. Info: "nodes 6.1 cm apart: cold spots, which is why ovens have turntables" is a one-dimensional simplification of a three-dimensional cavity mode pattern; acceptable for a teaching example.
- Plot: curves 2 sin u, 2 sin u · cos(π/3) = sin u, 2 sin u · cos(2π/3) = −sin u, over kx ∈ [0, 4π] (12.566), range ±2.2 contains ±2. Caption (nodes at kx = 0, π, 2π, … half a wavelength apart; antinodes between ±2E₀; computed from the formula) is correct.
- Quiz 1 (index 1, half a wavelength): correct; explanation x = nπ/k = nλ/2 right.
- Quiz 2 (index 1, an antinode): correct; explanation (E ∝ sin kx, B ∝ cos kx, a quarter wavelength apart) right in the notes' convention.
- Quiz 3 (index 1, 1/√(μ₀ε₀)): correct; explanation f″ = μ₀ε₀v²f″ right.
- Flashcards: all three correct ("fields in phase" refers to the travelling wave, which is what the card is about).
- calcs/8.02/standing-waves.yaml: 6 entries (two identities, wavelength, node spacing, 2E₀, B₀), all pass and match the page; source citations in the file (Eq. 13.4.23 p. 10, Eq. 13.5.8 p. 13, Eq. 13.4.26 p. 11, slide 7) checked and correct. The Plot has no calcs entry (it is formula-generated; nothing to add).

## Coverage and order
- MIT order (slides): outline (1) → recap of travelling sine waves (2–5) → standing waves, superposition, applications, bridge, group problem 2 (6–10) → recap of Maxwell's equations (11–12) → EM plane waves, travelling E and B, properties, PRS on direction of propagation (13–17) → derivation of the wave equation: Ampère–Maxwell (19–20), Faraday (21–22), E wave equation (23), f(x − vt) (24), B wave equation (25), relations (26), amplitudes (27) → group problem, EM standing waves at a conductor (28) → next time (29). Notes: 13.4 (plane waves, both rectangles, wave equation, c), 13.4.1 (f(x ± vt), superposition, sinusoidal solution, E₀ = cB₀), 13.5 (standing EM waves).
- The page follows this order, except that it places the notes' standing EM wave (13.5) in the standing-wave section before the derivation and takes the two rectangles in the notes' order (row 4). Both reasonable.
- Left out: slide 10's group Problem 2 (generic standing-wave exercise); slides 11–17 (Maxwell recap, plane-wave visualisation, properties, PRS), covered on the previous page `maxwell-equations-and-em-waves` (its "Properties" paragraph and Eq. 13.4.15); the notes' sinusoidal solution (13.4.21)–(13.4.23) and E = cB at every instant (13.4.27), also on the previous page; the notes' remark that the standing wave still satisfies the wave equation (implied by the page's superposition sentence); Fig. 13.4.6 (standing waves between two reflecting conductors), partly covered by the single-conductor sentence. Optional: one sentence pointing back to the previous page for slides 13–17.
- Added: the microwave-oven worked example, the Plot, the cosmology callout.

## Licensing
- No figures reused; the Plot is generated from the formula. Nothing from the pbs.org page linked on slide 9 (or the OCW visualisations on slides 14 and 29) is used; the page only names the bridge.
- No "All rights reserved" or "Courtesy of" material in the cited sources' text.
- No verbatim copying beyond short standard terms ("nodal planes", "the same" quoted from slide 27). Prose is rewritten.
- Worked example is original: the slides only list microwave ovens as an application; the numbers (2.45 GHz, 1000 V/m) and questions are the page's own.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.286 Lecture 16 is correct: `black-body-radiation.mdx` (lecture 16) explains the field in a box as a sum of standing-wave modes and the classical/quantum counting; see row 3 for the wording of the callout.
- The internal link `/courses/8-02/maxwell-equations-and-em-waves` uses the same URL form as the other 8.02 pages.
- Physics, signs, nodes/antinodes and the wave-equation derivation are all correct; no errors found. Verdict pass-with-notes because of rows 1–3.

## Resolution (2026-11-16, by the page author)

- Warning 1: the page now explains the notes' minus sign (the left-moving wave's E reversed so that E × B points along −x, Eq. 13.5.2) and that the slides' sine form has the same nodes, differing only in the origin of time.
- Warning 2: the quarter-period remark cites pp. 13–14.
- Warning 3: the callout and the leadsTo now say quantum mechanics is needed for the black-body law (the classical share gives infinite energy).
- Minor: "in phase" now cites slide 16 and p. 11.
