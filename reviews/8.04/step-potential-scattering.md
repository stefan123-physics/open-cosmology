---
page: content/year-2/8.04/step-potential-scattering.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes16/ (read: local PDF n16.pdf, Zwiebach, "Lecture 16: Scattering States and the Step Potential", April 19, 2016, printed pp. 1–10 plus the OCW terms page; page boundaries checked with pdftotext -f N -l N, and pp. 1, 3 and 9 rendered as images to confirm symbols: k̄ (bar), threshold k̂ (hat), x ≥ 0 in (1.1))
verdict: pass-with-notes
---

# Review: Scattering states and the step potential

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Opening paragraph | p. 1: "Here we examine the step potential"; the notes do not call it the simplest example | "The simplest example is a step (notes pp. 1–10)" | Harmless, but the citation suggests the notes say "simplest". Either drop "simplest" or move the citation so it covers only the coverage claim. |
| 2 | info | Currents paragraph and (2.12) | Notes have two small typos: (2.11) writes lower-case j_R, and the last step of (2.12) writes ħk̄\|C\|² without the 1/m | Page writes J_R and J_C = (ħk̄/m)\|C\|² correctly, without comment | Fine as is (the page is right). Optionally add "(the notes drop a 1/m in the last step of (2.12))", in line with the rule on not repeating slips silently. |
| 3 | info | Standing wave formula, eq. (3.24) | 4A² sin²(kx − δ) | 4\|A\|² sin²(kx − δ) | Page is more general (A need not be real); no change needed. |
| 4 | info | "A delayed echo" | (4.38): 2δ′(E) ħ²k₀/m − x − ħk₀t/m = 0 | 2ħδ′(E) ħk₀/m − x − ħk₀t/m = 0 | Same expression, rearranged; no change needed. |
| 5 | info | Energy above the step | p. 3: "If A is real B and C are real"; p. 4: R is "manifestly less than one" | Not mentioned | Optional one-line additions; nothing is wrong. |
| 6 | info | Wave packets paragraph | (4.26): threshold k̂² = 2mV₀/ħ², used as the lower limit of the integrals (4.28)–(4.30) and upper limit in (4.36)–(4.37) | Threshold described in words ("only k above the threshold where E = V₀") | Accurate. The below-step packet (k from 0 to k̂) is described as "built only from energies below V₀", also accurate. |
| 7 | info | End of page | n/a | No `<Callout kind="cosmology">` | Acceptable if the author sees no real cosmology link at this lecture; tunnelling (Lecture 17 onwards, e.g. Gamow factor in stellar fusion and nucleosynthesis) would be the natural place for one. |

No formula, citation or physics errors found. Every `<Formula>` and prose citation agrees with the notes and their printed footers:
- (1.1) p. 1, with V₀ for x ≥ 0 as in the notes ✓.
- (2.2)–(2.6) p. 2; (2.3)–(2.4) ✓; continuity conditions A + B = C, A − B = (k̄/k)C ✓.
- (2.7)–(2.12) p. 3: B/A = (k − k̄)/(k + k̄), C/A = 2k/(k + k̄) ✓; E = V₀ case B = A, C = 2A (2.8) ✓; currents (2.10)–(2.11) ✓.
- (2.13)–(2.16) and (3.17) p. 4: R, T and R + T = 1 ✓; "T ≠ \|C\|²/\|A\|²" remark and the continuity argument at E = V₀ are on p. 4 ✓.
- (3.18)–(3.24) p. 5: κ² (3.18), k̄ → iκ (3.19), (3.20)–(3.22) B/A = −e^{2iδ}, δ = tan⁻¹(k/κ) = tan⁻¹√(E/(V₀ − E)) ✓; minus sign kept outside so δ → 0 as E → 0, δ ≤ π/2 ✓; (3.23)–(3.24) ✓.
- x₀ = δ/k and (3.25) p. 6 ✓. Derivative checked analytically: with u = √(E/(V₀ − E)), dδ/dE = u′/(1 + u²) = 1/(2√(E(V₀ − E))) ✓; diverges at both ends ✓.
- Section 4 starts p. 6, (4.26)–(4.27) p. 6, (4.28)–(4.32) p. 7, (4.33)–(4.35) and the large-|t| summary p. 8, (4.36)–(4.40) p. 9, (4.41)–(4.45) p. 10; the forbidden-region discussion starts on p. 9 ("notes pp. 9–10") ✓.
- Stationary-phase statements: incident x = ħk₀t/m, peak only for t < 0, reaching x = 0 at t = 0 (4.31) ✓; reflected x = −ħk₀t/m, only t > 0 (4.32) ✓; transmitted: k̄ dk̄ = k dk from k̄² = k² − 2mV₀/ħ² (4.34), so (dk̄/dk)x = ħk₀t/m gives x = ħk̄t/m for t > 0 (4.35) ✓; below-step reflected x = −(ħk₀/m)(t − 2ħδ′), delay 2ħδ′ (4.39)–(4.40), positive and largest near E → 0 and E → V₀ ✓.
- (4.42)–(4.44): Δx ≲ 1/κ, Δp ≳ ħκ, ΔE ≳ ħ²κ²/2m = V₀ − E ✓; total energy ≥ V₀ (4.45) ✓.

## Arithmetic and answer checks
- Example (a): k̄/k = √(1 − 4/5) = √0.2 = 0.44721 ✓ (0.447). R = (0.55279/1.44721)² = 0.38197² = 0.14590 ✓ (0.146). T = 4(0.44721)/1.44721² = 1.78885/2.09443 = 0.85410 ✓ (0.854). R + T = 1.0000 ✓. "About one in seven" (1/7 = 0.143) ✓.
- Example (b): δ = tan⁻¹√(2/2) = tan⁻¹1 = π/4 ✓. κ = √(2 × 511000 × 2.0)/197.33 = 1429.69/197.33 = 7.2452 nm⁻¹ ✓ (7.25); 1/κ = 0.13802 nm ✓ (0.138). Delay 2ħδ′ = ħ/√(E(V₀ − E)) = 6.582×10⁻¹⁶ eV s / 2.0 eV = 3.291×10⁻¹⁶ s ✓ (3.3×10⁻¹⁶). Units consistent (κ from mc² and ħc in eV, eV·nm).
- Plot: for s = E/V₀ ≥ 1 the curves use k̄/k = √(1 − 1/s) in (2.14)–(2.15) ✓; R = 1, T = 0 for s < 1 ✓; continuous at s = 1 (R = 1) ✓; at s = 4, R = ((1 − 0.8660)/(1 + 0.8660))² = 0.0052, consistent with "falls off quickly but never quite to zero" (R ~ (V₀/4E)² at large E, never exactly 0) ✓. Caption's claim that a classical particle with E > V₀ always passes ✓.
- Quiz 1: answer 0 (R + T = 1 with T = (k̄/k)\|C\|²/\|A\|²) ✓; choice 1 is the error the notes warn against; explanation right ✓.
- Quiz 2: answer 0 (≈ 0.146) ✓, same numbers as example (a).
- Quiz 3: answer 0 (\|B/A\| = 1) ✓; explanation matches (3.21) and R = 1, T = 0 ✓.
- Quiz 4: answer 0 ✓; the extra term 2ħδ′(E)ħk₀/m equals the notes' 2δ′ħ²k₀/m and gives the shift 2ħδ′ ✓.
- Flashcards: all three match (2.7), (2.14)–(2.16), (3.18), (3.21)–(3.22), (4.40) ✓.
- calcs/8.04/step-potential-scattering.yaml covers every number and the R + T, phase and δ′ identities; values agree with the above. (calc:test not run by the reviewer.)

## Coverage and order
- Page follows the notes' order: Section 1 (step, scattering states) → 2 (E > V₀: ansatz, matching, E = V₀ case, currents, R and T, continuity argument) → 3 (E < V₀: k̄ → iκ, phase δ, standing wave, x₀, δ′) → 4 (packets: incident/reflected/transmitted peaks, large-|t| summary, time delay, observing the particle in the forbidden region).
- Nothing in the notes is left out apart from the small remarks in rows 5 above and the figures (described in words where needed). The worked example and the R/T plot are additions.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice (grep on the extracted text); the OCW footer refers to the course's CC BY-NC-SA terms.
- None of the notes' ten hand-drawn figures is reproduced; the only graph is generated from the formulas.
- Prose is rewritten. Closest wording: "The argument is heuristic, but it suggests that no negative kinetic energy is ever observed" vs the notes' "While the argument is heuristic, it gives some evidence that no negative kinetic energy will be detected"; a short, clearly reworded sentence, acceptable.
- The worked example (electron, 4.0 eV step, 5.0 eV and 2.0 eV) is original; the notes have no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.04 Lecture 17 ("resonant transmission and the Ramsauer–Townsend effect") matches the course syllabus title for Lecture 17 ✓. Not checked against the Lecture 17 notes themselves.
- The page's choice to describe the threshold wavenumber k̂ in words (to avoid a second hat on k) loses nothing.
- Symbol entries in data/symbols.json and content:check were not run by the reviewer.

## Resolution (2026-11-17, by the page author)

1. "The simplest example is a step" changed to "This lecture works through a potential step".
2. A bracket now notes the typos in the notes' (2.11) and (2.12), corrected on the page.
3.–4. No change.
5. Added "If A is real, so are B and C"; R ≤ 1 is evident from its formula and the plot.
6.–7. No change (tunnelling comes in later lectures).

Status set to `reviewed`.
