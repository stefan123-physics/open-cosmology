---
page: content/year-0/hs-5/superposition-and-standing-waves.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/mitres_8_009su17_lec7.pdf (read, local copy, pp. 1-8)
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/mitres_8_009su17_lec8n.pdf (read, local copy, pp. 1-5)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/transverse-pulses/07-transverse-pulses-03 (read)
verdict: pass-with-notes
---

# Review: Superposition and standing waves

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formula "Standing wave from two travelling waves" and the paragraph after it | Lec 8 Sec. 2.1 introduces k and ω for a sinusoidal travelling wave; lesson 5.3 never writes a travelling wave as A sin(kx − ωt) and never defines a wave number (its plot uses cos(2π(x − 1.5t)/λ) in a caption only) | Uses A sin(kx − ωt), A sin(kx + ωt) and k = 2π/λ with no sentence introducing them; in 5.1 the letter k is the spring constant | Add one sentence before the formula: a wave of amplitude A moving right is A sin(kx − ωt), with wave number k = 2π/λ (not the spring constant of 5.1) and ω = 2πf from 5.1; with + it moves left. Same form as the plot curves. |
| 2 | warning | Coverage, whole page | Plan §4 row 5.4 lists standing waves in air columns (CP 17.5) | Strings only; no pipes (open/closed air columns) | Either add a short section on air columns (nodes and antinodes at closed and open ends, λ = 2L/n, and λ = 4L/n for odd n), or make sure 5.5 "Sound" or 5.7 "Resonance" covers it and say so in docs/HIGHSCHOOL-PLAN.md §4. Air columns are VWO material. |
| 3 | info | Formula "Standing wave…", `at=` | Lec 8 Eqs. (5)-(6): u = ½[A cos(k(x − vt)) − A cos(k(x + vt))] = A sin(kx) sin(ωt), so each wave has amplitude A/2 and the sum A | Each wave has amplitude A and the sum 2A sin(kx) cos(ωt) | Correct identity; the `at` note already says "written as sines". Optionally add "and amplitude A each" so a reader comparing with Eq. (6) is not surprised by the factor 2. |
| 4 | info | "A string fixed at both ends", Summary | Lec 7 p. 8: the n = 1 solution "is termed the first harmonic"; all n are harmonics | Body: "These special patterns are the harmonics … The lowest, n = 1, is the fundamental". Summary: "The lowest is the fundamental; the others are its harmonics" | Say once that the fundamental is also called the first harmonic, and make the Summary match the body (all n are harmonics). |
| 5 | info | Formula "Principle of superposition" | Siyavula 7.3 states the principle in words (sum of the disturbances, signs counted), no formula | y = y₁ + y₂ | Faithful to the source's words; fine. |

## Formulas and citations
- y = y₁ + y₂, cite `siyavula7`, Sec. 7.3: supported (principle of superposition stated in words; an inverted pulse counted negative). Correct.
- A sin(kx − ωt) + A sin(kx + ωt) = 2A sin(kx) cos(ωt), cite `reading1`, Lec 8 Sec. 2.1 Eqs. (5)-(6) (p. 3): checked. The page's identity is sin(a − b) + sin(a + b) = 2 sin a cos b, correct; the source's version uses cosines with amplitude A/2 and gives A sin(kx) sin(ωt). Same physics (sum of two equal counter-propagating waves = fixed shape × oscillation in time); difference noted (item 3).
- λ_n = 2L/n, cite `mit`, "Sec. 3.1.1, after Eq. (36)": Lec 7 p. 8 states λ_n = 2L/n for positive n. Correct.
- f_n = n v/2L, cite `mit`, Eq. (31): ω_n = nπv/L (p. 7); divided by 2π gives nv/2L. Correct.
- v = √(F/μ), cite `mit`, Eq. (15) (p. 5): the source writes v = √(T/μ) with T the tension (Eq. 9) and μ mass per length (Eq. 10); the page renames T to F and says so (T is the period in 5.1 and 5.3). Correct and explained.
- `mit` = the frontmatter `source` (lib/schema.ts), Lecture 7; `reading1` = Lecture 8, Sec. 2.1. Both exist and support the use made of them.
- Claims checked as standard and correct (not stated in a cited source): superposition holds while disturbances are small (linearity; Lec 8 relies on linear combinations of solutions); antinode amplitude is twice each wave's; neighbouring nodes λ/2 apart (zeros of sin(kx) at x = nλ/2); a fret shortens L and raises every harmonic; an instrument's sound is a mixture of harmonics (Lec 7 Eq. (33), the general solution as a sum of harmonics).
- PhET instructions ("Fixed End", "Oscillate", damping) match the Wave on a String controls.

## Arithmetic and answer checks
- Plot: 0.1 sin(2π(x − t)) has λ = 1 m, amplitude 0.10 m, v = 1 m/s (k = ω = 2π). Sum = 0.2 sin(2πx) cos(2πt): zero for every t at x = 0, 0.5, 1, 1.5, 2 m. Caption correct; range ±0.25 contains the maximum 0.20. Checked numerically at x = 0.37, t = 0.2: both sides 0.04505.
- Worked example 1: 286/(2 × 0.65) = 220.0 Hz; 440 and 660 Hz; λ₁ = 1.30 m, λ₂ = 0.65 m, λ₃ = 1.30/3 = 0.433 → 0.43 m. All correct.
- Worked example 2: μ = 0.0050 kg/m; √(80/0.0050) = √16000 = 126.5 → 126 m/s; f₁ = 126.5/1.00 = 126 Hz; with 320 N, v = 253 m/s and f₁ = 253 Hz = 2 × 126.5. All correct. (info: v and f₁ are numerically equal because 2L = 1 m, so the step looks as if it did nothing; consider another length, or add "because 2L = 1.00 m".)
- Quiz 0: +3 + (−2) = +1 cm, up; answer index 1 correct; "partial destructive interference" matches Siyavula's definition (a smaller pulse).
- Quiz 1: λ/2, index 1, correct.
- Quiz 2: λ₂ = 2 × 0.80/2 = 0.80 m, index 1, correct; distractors 0.40, 1.6, 3.2 m all wrong.
- Quiz 3: f₁ = v/2L rises with v; "goes up", index 1, correct.
- Flashcards: all true.
- calcs file: every number on the page is covered (quiz 0 and 2, identity, nodes, both worked examples, 320 N); `origin` values valid. info: `quiz-superposition` lacks `quiz: 0` while `quiz-second-harmonic` has `quiz: 2`; add it for consistency. `npm run calc:test` was not run by the reviewer.

## Only earlier terms
- From 5.3 `waves`: pulse, medium, crest, trough, amplitude A, wavelength λ, frequency f, v = fλ ("the wave equation" in 5.3's sense), x as position along the rope: used consistently.
- From 5.1 (not in `prerequisites`, but earlier in the block and a prerequisite of 5.3): ω, cos(ωt), hertz.
- Tension: Block 2 lesson "Weight, normal force and tension" (`weight-normal-and-tension`) is planned but not yet written in this repo; its lesson-list title covers the idea, so it counts as introduced. The page also restates it ("tension F, in newtons").
- New on this page and introduced here: superposition, constructive and destructive interference, standing wave, node, antinode, loop, harmonic, normal mode (in brackets only), fundamental, μ (mass per metre).
- Used without introduction: the travelling-wave form A sin(kx ∓ ωt) and the wave number k = 2π/λ (item 1). k also clashes with the spring constant k of 5.1.
- info: 5.3 calls v = fλ "the wave equation"; the 8.03 lesson this page leads to means the partial differential equation. Not an error here, but the leadsTo `why` says "from the wave equation", which a reader will take in 5.3's sense.

## Coverage
- Covers superposition, interference of pulses, standing waves on a string, nodes and antinodes, harmonics λ_n and f_n, and v = √(F/μ): the core VWO content on strings.
- Missing: standing waves in air columns (open and closed pipes), listed in the §4 row (item 2); relevant at VWO level unless 5.5 or 5.7 takes it.
- Missing: beats (CP 16.10 in the old §4 sources); not core VWO, fine to leave out.

## Where this leads
- 8.03 lecture 9, `content/year-2/8.03/standing-waves-fourier-series.mdx`, "Normal modes of a string and Fourier series": exists, same topic (normal modes by separation of variables, boundary conditions fixing k, Fourier series). Matches the §4 row. Its worked example is a fixed-free string (λ₁ = 4L), not fixed-fixed; the `why` is still accurate.
- `towards: false`, correct for lesson 5.4.

## Licensing and AI terms
- No sentence copied: the superposition paragraph paraphrases Siyavula ("keep their original direction and amplitude" vs the page's "continues in its original direction with its original shape"): own words.
- No figure copied. The only diagram is a generated `<Plot>`. None of the excluded MIT figures is used (Lec 7 Fig. 1, © Cambridge University Press; Lec 8 Fig. 3, © AIP Publishing; Lec 7 Fig. 4, credited to OpenStax CNX). Lec 7 Fig. 6 (harmonics) is not reproduced.
- Worked examples and quiz are original: Siyavula's examples are graphical pulse problems at 1 m/s with no numbers in the text; MIT has no numerical examples in these sections.
- Siyavula: "Everything Science" appears only in the citation title of `siyavula7`, not as branding; no logo. Siyavula content is CC BY 3.0 (stated on the page read).
- No OpenStax, LibreTexts or other forbidden source cited or used. No NASA or ESO content.

## Notes
- No em dashes in the page.
- The page states the notation change (T → F) from the source explicitly.
- Item 1 is the only change that affects a beginner's understanding; item 2 is a planning decision for the owner.

## Resolution (2026-11-20, by the page author)

1. **Warning, travelling-wave form and k not introduced:** a paragraph before the formula now introduces y = A sin(kx − ωt) as a wave moving to the right, ω = 2πf, and the wavenumber k = 2π/λ, with a note that this k is not the spring constant of lesson 5.1; k has a wavenumber meaning for this page in data/symbols.json.
2. **Warning, air columns missing:** standing waves in open and closed pipes are assigned to 5.5 Sound (docs/HIGHSCHOOL-PLAN.md, note under the Block 5 table); the Summary points there.
3. **Info, amplitude in Lecture 8:** the `at` now says the notes use cosines with amplitude A/2 per wave, hence the factor 2 here.
4. **Info, "first harmonic":** the body says the fundamental is also called the first harmonic, and the Summary matches.
5. **Info, worked example 2:** the length is now 0.40 m, so f₁ = 158 Hz differs from v = 126 m/s; the calcs entry is updated.
6. **Info:** `quiz-superposition` cannot carry `quiz: 0` (the choices "1 cm up" and "1 cm down" match the same number; the check goes through the explanation text, as docs/CALC_TESTS_PLAN.md advises). The leadsTo reason now says "from the equation of motion of the string".

`npm run content:check`: 0 errors; `npm run calc:test -- -k hs-5`: 57 passed.

## Addendum (2026-11-28): PhET simulation added

Narrow re-review of the new paragraph and `<PhET id="normal-modes" title="Normal Modes" />` in "## Try it" (diff against HEAD). Nothing else on the page was re-reviewed.

- **Physics:** correct. For N masses on springs between two fixed ends, mode n has n − 1 nodes between the ends (its shape is sin(nπj/(N+1)) at mass j), so with 3 masses the patterns have 0, 1 and 2 nodes. In a normal mode every mass moves at the mode's single frequency. More masses make the sampled shapes approach the string's harmonics. "Node" and "harmonic" are defined earlier on the same page. "Spring" and "mass" are familiar from Block 2.
- **Info:** with a few masses the mode frequencies are not in the ratio 1 : 2 : 3. They follow ω_n = 2ω₀ sin(nπ/(2(N+1))), and the sim's spectrum shows them as ratios to ω₀. The text does not claim whole-number ratios (its "as for the harmonics" refers to the node count), so this is not an error. A reader who compares the frequencies may wonder about it, and a half-sentence could say so. This is optional.
- **Screen and control names:** checked in `public/phet/normal-modes_1.0.19_en.html`. The strings include "One Dimension", "Two Dimensions", "Number of Masses:" and "Normal Mode Spectrum". The spectrum is an accordion box (`NormalModeSpectrumAccordionBox`), so "open the Normal Mode Spectrum" is the right verb. `NUMBER_OF_MASSES_RANGE` is 1 to 10, so 3 is possible. The box draws each mode's shape (`StaticModeGraphCanvasNode`, sin((n+1)πx)), so the reader can see the node counts. I did not run the sim, and that the box sits on the One Dimension screen is inferred from the code and the sim's known layout. **Info:** to see one mode move, the reader has to raise that mode's amplitude slider in the box. The text could say "raise the amplitude of one mode at a time", but this is optional.
- **House rules:** no em dash, plain English, no rem/px (text only). No PhET text is copied.

Errors: none. Warnings: none. Info: 2 (above).

## Resolution (2026-11-28, by the page author)

Took the info suggestion on wording; nothing else needed.
