---
page: content/year-0/hs-5/the-pendulum.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec2_3/ (read: local copy of the PDF downloaded from MIT OCW, pp. 9–15, §1.8 Energy and Potential Energy, §2 The Classical Pendulum, §2.1.1 Period of Pendulum)
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec4/ (read: local copy, pp. 1–4, §1 Decreasing Amplitude, §1.1, §2, §2.1 Underdamped)
verdict: pass-with-notes
---

# Review: The pendulum and energy in oscillations

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "The pendulum is an oscillator too", para 2 | Eq. (67): θ̈ + (g/ℓ) sin θ = 0, i.e. the second time derivative of θ | "the angular acceleration is proportional to −sin θ" | "Angular acceleration" is not introduced in 5.1 or in any listed prerequisite. Plan row 3.10 (Rotation and angular momentum, CP 10.1 "Angular Acceleration") probably covers it, but 3.10 is not in `prerequisites`. Either add `angular-momentum` to prerequisites, or (better at this level) rephrase with forces: the component of gravity along the path is mg sin θ ≈ mgθ = (mg/ℓ)·s for arc length s, so the pendulum is a "spring" with k = mg/ℓ and ω = √(k/m) = √(g/ℓ). That derives Eq. (70) from 5.1 instead of only asserting it. |
| 2 | warning | Worked example "The same pendulum on the Moon" | MIT §2.1.1 mentions the Moon qualitatively, gives no value of g there | g_Moon = 1.62 m/s² | The value is correct (NASA Moon Fact Sheet gives 1.62 m/s²) but no cited source supplies it. Add the NASA Moon Fact Sheet to `references` (title, URL, date read) or put the value in `calcs/values.yaml`. |
| 3 | warning | `<Plot>` energy against position | (page's own graph) | `range={[0, 0.04]}` with sliders k ≤ 40 N/m, A ≤ 0.06 m | At the slider extremes E = ½kA² = ½·40·0.06² = 0.072 J, far above the top of the plot: the "total E" line and the top of the K curve disappear. Already at default k = 25 with A = 0.06 (E = 0.045 J) it is off the graph. Raise the range to about [0, 0.08] or narrow the sliders (e.g. A ≤ 0.05 and k ≤ 30 keeps E ≤ 0.0375 J). |
| 4 | warning | `leadsTo` why-text | 8.03 lecture 1 (`harmonic-oscillator.mdx`) treats the spring, Hooke's law near any minimum, and the pendulum non-linearity demo; it does not follow the oscillator's energy, and it ends by saying friction is left out until the next lecture | "…and follows its energy in full" | Reword the `why` (e.g. "treats the spring and the pendulum as the same oscillator and shows why large swings break the simple rule"), and consider adding 8.03 lecture 2 (`damped-free-oscillators`) for the damping section. |
| 5 | info | `source.readings` location for Lecture 4 | §1 only describes the decreasing amplitude; that the oscillation keeps "a definitive period" under weak damping is in §2.1, Eqs. (9)–(12) (Ω = √(ω₀² − γ²)) | Callout: damping changes the amplitude much more than the period | The claim is correct for weak damping, but its support is §2.1, not §1. Change the location to "Sections 1 and 2.1". |
| 6 | info | Callout on damping, last clause | — | "which is why the small-angle period formula works so well in practice" | The logic is loose: the period formula works because the swings are small; damping only keeps the period nearly unchanged. Consider "so a clock keeps its rhythm as the swing dies down". |
| 7 | info | "Energy in an oscillating spring", para 1 | Eq. (54): U = ∫kx dx = ½kx² (area under the force) | "Stretching a spring by x takes work, because the force kx grows as you pull; the stored spring energy … is ½kx²" | The factor ½ is not explained. One sentence would do at VWO level: the work is the area under the F–x graph, a triangle of base x and height kx (uses 0.10 and 3.1). |
| 8 | info | Formula "Energy of a mass on a spring", `at="Eq. (56)"` | Eq. (56) writes ẋ | writes v | Harmless; could add ", with v = ẋ" to `at` as the pendulum formula does. |

## Formulas and citations
- Small-angle approximation, `at="Eq. (68)"`: notes Eq. (68), sin θ ≃ θ for |θ| ≪ 1 in radians. Matches.
- ω = √(g/ℓ), `at="Eq. (70)"`: notes Eq. (70), ω₀ = √(g/ℓ) [small-angle]. Matches (page drops the subscript 0, consistent with 5.1).
- T = 2π√(ℓ/g), `at="Eq. (84)"`: notes Eq. (84), §2.1.1. Matches. The notes also support "independent of the mass" and "only for |θ| ≪ 1".
- U = ½kx², `at="Eq. (55)"`: matches.
- E = ½mv² + ½kx², `at="Eq. (56)"`: matches (ẋ → v, see #8).
- E = ½kA², `at="Eq. (58)"`: last line of Eq. (58), ½kA₀². Matches.
- E = ½mv² + mgℓ(1 − cos θ), `at="Eq. (65), with v = ℓ dθ/dt"`: Eq. (65) is ½mℓ²θ̇² + mgℓ(1 − cos θ), and Eq. (64) gives |ṙ|² = ℓ²θ̇², so v = ℓθ̇. Matches. h = ℓ(1 − cos θ) is the y of Eq. (61).
- "The MIT notes find the equation of motion from energy conservation" is true (Eqs. (65)–(67)).
- Eq. (67) itself (θ̈ + (g/ℓ) sin θ = 0) is described in words without a `<Formula>`; fine, but see #1.
- Claims not in the sources but standard and correct: Galileo and the swinging lamp; pendulum clocks as the best clocks for about three centuries; the period grows for wide swings; the clock's escapement gives a push each swing; v = √(2gh) for any amplitude; a seconds pendulum is about 1 m.
- Notation: SI, g = 9.81 m/s², v, ℓ. Consistent with 5.1.

## Arithmetic and answer checks
All recomputed independently; every number is in `calcs/hs-5/the-pendulum.yaml`, except the Moon's g, which is an input (#2).
- 10° = 0.174533 rad; sin 10° = 0.173648; difference 0.51% of sin θ. Page 0.1745, 0.1736, 0.5%. Correct.
- 30° = 0.5236 rad; sin 30° = 0.5000; difference 4.7%. Page "about 5%". Correct.
- Clock: ℓ = 9.81 × 4.0/(4π²) = 0.9940 m. Page 0.99 m. Correct; "period 2.0 s, one second each way" is right for a seconds pendulum.
- Earth: 2π√(1.0/9.81) = 2.006 s → 2.0 s. Moon: 2π√(1.0/1.62) = 4.937 s → 4.9 s. Ratio √(9.81/1.62) = 2.46, "about two and a half". Correct.
- Sharing the energy: E = ½·25·0.050² = 0.03125 J → 0.031; U = ½·25·0.030² = 0.01125 J → 0.011; K = 0.0200 J; v = √(2·0.020/0.40) = 0.316 m/s → 0.32; v_max = 0.050·√62.5 = 0.395 m/s → 0.40. Correct, and the block matches 5.1's worked example (m = 0.40 kg, k = 25 N/m, A = 5.0 cm).
- Bottom of the swing: h = 1 − cos 20° = 0.06031 m → 0.060; v = √(2·9.81·0.06031) = 1.0878 m/s → 1.09. Correct. (With the rounded h = 0.060 the shown product gives 1.0850, which also rounds to 1.09 or 1.08; harmless, since calcs uses the unrounded h.)
- v_max = A√(k/m) = ωA from ½mv_max² = ½kA²: correct identity.
- Quiz 1 (four times the length): T ∝ √ℓ, so ×2. Answer index 1 "It doubles". Correct; other choices wrong.
- Quiz 2 (0.1 kg vs 1 kg bob): same period. Index 2. Correct; "It depends on the amplitude" is wrong for small angles as stated. Explanation true.
- Quiz 3 (x = A/2): U = E/4, K = 3E/4. Index 2. Correct.
- Quiz 4 (double amplitude): E ∝ A², ×4. Index 2. Correct.
- Flashcards: all four true (0.5% at 10° checked above).
- Calcs file: entries complete and consistent with the page; `origin: mit` on `vmax-from-energy` is an allowed value (docs/CALC_TESTS_PLAN.md).

## Only earlier terms
- Covered by 5.1 (written): equilibrium, restoring force, simple harmonic motion, amplitude, period, angular frequency ω, T = 2π/ω, v_max = ωA, stable equilibrium, radians (via 0.7).
- Covered by planned, not yet written prerequisites (judged by title and §4 row): kinetic energy ½mv² and the symbol K (3.2), gravitational potential energy mgh (3.3), conservation of energy and friction turning mechanical energy into heat (3.4, CP 7.5–7.6 in the old row). Work (3.1) via 3.2. Counted as introduced.
- Friction and air drag: 2.6 Friction and drag (earlier block). Heat: Block 4 comes before Block 5. cos θ for the height: 0.7.
- **Not covered: "angular acceleration"** (#1). Likely in 3.10 (not a prerequisite); otherwise not introduced.
- Elastic potential energy / spring energy: introduced on this page.
- `at` text "v = ℓ dθ/dt" uses derivative notation; it is only in the citation label (0.10 introduces rates of change), info only.

## Coverage
- §4 row 5.2 "The pendulum and energy in oscillations" (pendulum-lab): the simple pendulum, small-angle approximation, ω and T of a pendulum, mass and amplitude independence, energy of a spring oscillator and of a pendulum, and qualitative damping. This matches VWO level.
- Not covered, acceptable at this level: the exact (large-angle) period, the damped equation of motion and its solution (left to 8.03 lecture 2 and 5.7 Resonance), measuring g with a pendulum as an experiment (mentioned in one sentence).
- Main Block 5 source (Siyavula) is not cited; MIT RES.8-009 (support source for Block 5 in §2.0) covers everything used. Fine.

## Where this leads
- `{ course: "8.03", lecture: 1 }` exists (`content/year-2/8.03/harmonic-oscillator.mdx`, "The harmonic oscillator") and is on the same topic (spring and pendulum as one oscillator, non-linearity at large amplitude). The `why` overstates the energy treatment (#4). Suggest adding lecture 2 (`damped-free-oscillators`).
- `towards: false` correct (not the block's last lesson).

## Licensing and AI terms
- Sources are MIT OCW, CC BY-NC-SA 4.0 (allowed by §2.0). Page licence CC BY-NC-SA 4.0.
- No sentence copied: the page's wording differs throughout from the notes (compared §1.8, §2, §2.1.1 and Lecture 4 §1); only standard phrases ("small-angle approximation", "equation of motion") recur.
- No figure copied: the only graph is a generated `<Plot>`; the notes' Figs. 4 and 5 (and Lecture 4's Fig. 2 "adapted from Wikipedia") are not used.
- Worked examples and quiz are the page's own: the notes have no numerical examples on these pages (only the qualitative Moon/Saturn swing remark, which the page turns into its own calculation).
- No Siyavula branding; no MIT material marked excluded or all rights reserved used; no NASA or ESO text; nothing from a forbidden source.
- PhET Pendulum Lab (`pendulum-lab`) matches the §4 row.

## Notes
- No errors found. Four warnings (#1–#4) worth fixing before `status: reviewed`; #5–#8 are optional.
- I read only the cited pages of the two PDFs (lec2_3 pp. 9–15, lec4 pp. 1–4), not the whole notes.

## Resolution (2026-11-20, by the page author)

1. **Warning, "angular acceleration" not yet introduced:** fixed. The pendulum's ω is now derived from the force along the arc: s = ℓθ, restoring force mg sin θ ≈ (mg/ℓ)s, a spring constant mg/ℓ, so ω = √(k/m) = √(g/ℓ), building on lesson 5.1; the MIT notes' energy route is mentioned as reaching the same result. The symbol s has a meaning for this page.
2. **Warning, the Moon's g unsourced:** fixed. `references.moon` is NASA's Moon Fact Sheet (surface gravity 1.62 m/s², checked 2026-11-20), named in the worked example and recorded as a `kind: fact` entry in the calcs file.
3. **Warning, plot range:** the energy axis now runs to 0.08 J, above the largest total energy the sliders allow (0.072 J).
4. **Warning, `leadsTo`:** the 8.03 lecture 1 reason is reworded, and 8.03 lecture 2 (damped free oscillators) is added for damping.
5. **Info, Lecture 4 location:** the reading's location now says "Section 1 … and Section 2.1, weak damping".
6. **Info, damping callout:** the loose last clause is removed.
7. **Info, the ½ in U = ½kx²:** explained by the average force ½kx (the triangle under the force–stretch line).
8. **Info, Eq. (56):** the `at` notes that the MIT notes write the velocity as ẋ.

`npm run content:check`: 0 errors; `npm run calc:test -- -k hs-5`: all pass.
