---
page: content/year-0/hs-5/resonance.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/mitres_8_009su17_lec5.pdf (read, local copy, all 12 pages)
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/mitres_8_009su17_lec7.pdf (read, local copy, pp. 1-8, Sec. 3.1 and 3.1.1)
  - content/year-0/hs-5/simple-harmonic-motion.mdx, the-pendulum.mdx, waves.mdx, superposition-and-standing-waves.mdx, sound.mdx (read, for earlier terms)
  - content/year-2/8.03/driven-oscillators-resonance.mdx (read, leadsTo target)
  - public/phet/manifest.json (wave-on-a-string 1.2.6 and normal-modes 1.0.19 both present)
verdict: pass-with-notes
---

# Review: Resonance

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Damping limits the peak", γ = b/2m; summary; quiz 4 | Lec. 5 below Eq. (27): γ = b/2m. The leadsTo target (8.03 lecture 3) and its symbols entry use γ = b/m, so its amplitude formula has γ²ω² where this page has 4γ²ω², and A(ω₀) = f₀/(ω₀γ) | γ = b/2m with no remark | Add one sentence: "The university course 8.03 writes γ for b/m, twice this γ, so its formulas have γ where these have 2γ." (Notation rule: the step to university should be smooth, differences stated.) |
| 2 | warning | "Damping limits the peak" (writer's point 4) | γ enters Eq. (27); Eq. (42)-(43) show the free motion dies as e^(−γt), "for long times, i.e. t ≫ 1/γ" | γ is called "the strength of the damping", unit 1/s, but nothing says what a value means or why b/2m | Give γ a meaning the reader can use: "Left alone, the oscillator's swing shrinks by a fixed fraction every 1/γ seconds; after a few times 1/γ the starting motion has died away (notes, Eqs. (42)-(43))." The factor 2 can be called a convention that makes later formulas tidier. |
| 3 | warning | "Resonance everywhere", Musical instruments (writer's point 2) | no source | "Strike a tuning fork near a guitar and a string tuned to exactly that note starts to sound by itself, while the others stay silent: one way to check the tuning." | Overstated. Through the air the effect is weak (usually the fork's stem is pressed on the body), a string whose overtone matches (e.g. an octave lower) also responds, and tuning is normally checked by ear or by beats. Soften: "Hold a struck tuning fork against a guitar and a string tuned to that note starts to vibrate by itself, while strings tuned to other notes stay almost still." Drop "one way to check the tuning" or the "exactly"/"silent" absolutes. |
| 4 | warning | "Try it" (writer's point 3) | PhET Wave on a String 1.2.6: Manual/Oscillate/Pulse, Fixed End/Loose End/No End, Damping and Tension sliders, frequency slider in Oscillate mode | "Start with the damping at zero ... at certain frequencies a large standing wave builds up. Find the first three." | The control names are right and the physics is right. Uncertain (not run here): whether three resonances fit within the frequency slider's range at the default tension, and whether, at zero damping, the off-resonance transients settle at all (lesson 5.4's Try it says "turn the damping down", not to zero). Check in the sim; if needed say "set the tension to High" or "start with a little damping". The exercise also largely repeats lesson 5.4's Try it; the new part (raise the damping, peaks shrink) is the point and could come first. Wave on a String is a better fit than normal-modes (§3 plan suggestion), which has no driving force; update the §4/§3 plan row to match. |
| 5 | warning | "A singer and a glass": "Sound is a longitudinal wave in the air (lesson 5.3)" | Sound is lesson 5.5 (`sound`); 5.3 introduces longitudinal waves (the slinky) and only names sound as an example in its quiz | Refers to 5.3 | Write "(lessons 5.3 and 5.5)" or "(lesson 5.5)"; `sound` is not in `prerequisites`, consider adding it since the glass example relies on it. |
| 6 | info | "Pushing at the right moment", last paragraph (writer's point 1) | Lec. 5 Sec. 4: assuming a fixed force for a fixed duration, push at the bottom of the motion rather than at the top; people rarely do because it is hard to push something moving fast safely. Sec. 3.1 (end): work = force × distance, most distance covered at equilibrium. | "for a push of fixed strength lasting a fixed time, the best moment is near the bottom ... not at the top, where most people push because the swing stands still and is easy to reach" | The claim is what the notes say, is correct physics (work ≈ F·v·Δt, largest where v is largest, in the direction of motion), and the "fixed strength, fixed time" condition makes it careful enough. The reason "stands still and is easy to reach" is the page's own; the notes' reason is safety. Suggest adding "and is safe to touch" or "it is hard to push something moving fast". Optional: "a short push". |
| 7 | info | "Damping limits the peak": "the speed times a drag coefficient b" | Lec. 5 Eq. (1) calls b "your drag coefficient" | Same name | Lesson 2.6 (CP 5.2 topics) will most likely use "drag coefficient" for the dimensionless C in F = ½CρAv². Consider "a constant b" or say it is not the same as lesson 2.6's coefficient. |
| 8 | info | `at` of the damping-constant Formula | Eq. (26) uses −bẋ | `at="Eqs. (26)–(27), with the drag force −bẋ"` | ẋ (dot notation) is not introduced in this course; write "−bv". |
| 9 | info | "Natural frequency": "(the swing of Eq. (2) in the notes)" | Eq. (2) is the damped small-angle swing equation, with g/ℓ in the place of ω₀²; lecture 5 does not write ω₀ = √(g/ℓ) for the swing | Attributes ω₀ = √(g/ℓ) to Eq. (2) | Acceptable (g/ℓ plays the role of ω₀²); could say "(lesson 5.2; the g/ℓ of Eq. (2) in the notes)". |
| 10 | info | "Resonance", first paragraph: "If every push comes at the same point of the swing, each push adds a little energy" | | | True only if that point is one where the push is along the motion; the next section says so. Could add "and in the direction it moves". |
| 11 | info | Quiz 3 | | "A string ... is fixed at both ends ... A vibrator shakes one end." | The worked example says "near one end", which is consistent with fixed ends; use the same wording in the quiz. |

## Formulas and citations
- ω₀ = √(k/m), "Eq. (4), below the equation": correct, the line under Eq. (4) reads ω₀ = √(k/m).
- F = F₀cos(ωt), "Eq. (3), Sec. 2": correct; the force appears in Eq. (3) (mẍ = −kx + F₀cos ωt) and Fig. 2.
- x(t) = F₀/(2mω₀) t sin(ω₀t), "Eq. (24), Sec. 2.1": correct, for x(0) = 0, v(0) = 0 as the page says ("starting from rest"). calcs checks it as the limit of Eq. (14).
- γ = b/2m, "Eqs. (26)–(27), drag −bẋ": correct (drag in Fig. 5 and Eq. (26), γ defined under Eq. (27)). See findings 1, 2, 8.
- A = (F₀/m)/√((ω₀² − ω²)² + 4γ²ω²), "Eqs. (40) and (43), A_dr": correct, identical to Eq. (40), steady state Eq. (43) "for long times". The page states clearly that the derivation is beyond the course and how to read the fraction; no differential equation or complex number is needed. Checked limits: ω → 0 gives F₀/(mω₀²) = F₀/k (page and Sec. 3.2 agree); ω → ∞ gives → 0 (Sec. 3.2).
- ω_res = √(ω₀² − 2γ²) ≈ ω₀, "Eqs. (46)–(47)": correct. (Notes require ω₀ > √2 γ; not needed at this level.)
- A_max ≈ F₀/(2mγω₀), "Eq. (49)": correct, Eq. (49) has exactly this prefactor; the page also derives it by putting ω = ω₀ in the amplitude formula (exact at ω = ω₀).
- Phase: "the displacement lags a quarter of a period behind the force ... force largest as the block rushes through equilibrium, zero at turning points" (Eq. (49)): matches the text under Eq. (49).
- Energy argument (work = force × distance, most distance at equilibrium): matches the end of Sec. 3.1 (which the notes say is transcribed from Morin; the page paraphrases the idea, fine).
- "the amplitude is about F₀/k ... (notes, Sec. 3.2)": correct, Sec. 3.2 "ω ≃ 0", x ≃ F₀/k cos ωt.
- "driven very fast ... hardly moves": correct, Sec. 3.2 "ω ≃ ∞" (not cited there, standard).
- f_n = n v/2L (reading1 Sec. 3.1.1, and lesson 5.4): Sec. 3.1.1 gives ω_n = nπv/L and λ_n = 2L/n, so f_n = nv/2L. Correct.
- Steady motion at the driving frequency (Eq. (43), "for long times"): correct; "for long times" is a three-word quote, fine.

## Arithmetic and answer checks
All recomputed independently (Python); `node scripts/calc-test.mjs -k resonance` passes (73 passed, including this file's entries).
- Worked example 1: ω₀ = √(50/0.50) = 10 rad/s; f₀ = 1.5915 → 1.59 Hz; T = 0.6283 → 0.63 s. Correct.
- Worked example 2: F₀/k = 0.0040 m; A_max = 0.20/(2·0.50·0.50·10) = 0.040 m; ratio 10; at ω = 20: 0.40/√(90000 + 400) = 0.001330 m → 1.3 mm (< 4.0 mm, as stated); γ = 2.0: 0.010 m, a quarter of 0.040 m. Correct. ("a quarter" has no calcs entry of its own; trivial, info.)
- Plot: curves 40/√((100 − w²)² + 4γ²w²) are (F₀/m)/√(…) in cm with F₀/m = 0.40 m/s² = 40 cm/s², ω₀² = 100, 4γ² = 1, 4, 16 (expressions use 4·0.25, 4·1, 4·4: correct). Start F₀/k = 0.4 cm. True peaks (at ω_res): 4.005, 2.010, 1.021 cm; caption "about 4.0, 2.0 and 1.0 cm": correct. Range [0, 5] cm contains the highest peak.
- String worked example: f₁ = 72/1.8 = 40 Hz; 120 Hz = 3f₁; λ₃ = 0.60 m; loop 0.30 m; 100 Hz lies between 80 and 120 Hz. Correct.
- Quiz 1: T = 2π√(2.0/9.81) = 2.837 → 2.8 s (marked, correct). Distractors: 0.35 s (= 1/T, wrong), 1.4 s (half period: every other push would come while the swing moves towards the pusher, wrong), 8.9 s (2π√ℓ without g, wrong). Explanation true.
- Quiz 2: "lower and wider" correct; others wrong; explanation true.
- Quiz 3: f_n = n·30/3.0 = 10n Hz; 20 Hz is a harmonic (second, two loops), 15, 25, 35 Hz are not. Correct; calcs entry uses 1% tolerance and `quiz: 2` (0-based index of this question, correct).
- Quiz 4: A_max ∝ 1/γ, so twice; "four times" (energy) and the others wrong. Correct. (calcs `quiz-half-damping` lacks `quiz: 3`; info.)
- Quiz 5: steady motion at the driving frequency, 5 Hz. Correct.
- Flashcards: all five true; the amplitude card matches Eq. (40).

## Only earlier terms
- Natural frequency, ω, ω₀ notation, period, f = 1/T: lesson 5.1 (ω, x = A cos ωt), 5.2 (ω = √(g/ℓ)). ω₀ is introduced on this page. Fine.
- Damping, friction draining energy, amplitude shrinking: lesson 5.2 ("Friction drains the energy ... damped"), in words. Fine.
- Harmonics, f_n = nv/2L, λ_n = 2L/n, loops: lesson 5.4. Fine.
- Longitudinal wave: lesson 5.3; sound as a longitudinal pressure wave: lesson 5.5 (not a listed prerequisite; see finding 5).
- Work = force × distance: lesson 3.1 `work` (planned, not written in this repo); its title and §4 row (P 9.1; CP 7.1, work) cover it. Counted as introduced.
- Drag growing with speed, "as air drag does at low speeds": lesson 2.6 `friction-and-drag` (planned; §4 row CP 5.1, 5.2 covers friction and drag, including drag at low speed). Counted as introduced; see finding 7 on the name "drag coefficient".
- ẋ in a citation string (finding 8). "Radio tuning" is a forward mention ("in later blocks"), fine.
- No differential equation or complex number is used; the amplitude formula is given as a result with a clear reading. Level is appropriate for VWO.

## Coverage
- §4 row (topic: resonance; old OpenStax P 14.4, CP 16.7-16.8 ignored as sources): natural frequency, driven oscillation, steady motion at the driving frequency, resonance, effect of damping on height and width of the peak, phase/energy at resonance, examples. Complete for VWO. Quality factor and the exact width are left out; correctly left to 8.03.

## Where this leads
- 8.03 lecture 3, "Driven oscillators and resonance" (content/year-2/8.03/driven-oscillators-resonance.mdx): same topic (steady state, transients, phase lag, resonance). The `why` text is accurate. See finding 1 on γ = b/m there vs b/2m here.
- `towards: false`: correct, 5.7 is not the block's last lesson.

## Licensing and AI terms
- No sentence copied: compared the swing, energy and phase paragraphs with lec. 5 Sec. 3.1, 3.2 and 4; all are rewritten (e.g. notes "Given a fixed interval of time, the oscillator is covering the greatest distance when it is moving the fastest" vs page "In a short moment the block covers the most distance where it moves fastest"). Fine.
- No figures copied: the only diagram is a generated Plot. Lec. 5 has no "All rights reserved/excluded" items; lec. 7 Fig. 1 is marked "© Cambridge University Press ... excluded from our Creative Commons license" and is not used.
- Worked examples and quiz questions are the page's own (the notes have no numerical examples or exercises).
- MIT OCW is a §2.0 source (CC BY-NC-SA); `license: CC BY-NC-SA 4.0` set. No forbidden source cited or used. No NASA, ESO or Siyavula content.
- PhET: wave-on-a-string 1.2.6 is in the manifest; `<PhET title=…>` follows the other hs-5 pages.

## Notes
- Writer's point 1 (push at the bottom): supported by lec. 5 Sec. 4 (with Eq. (49) and the end of Sec. 3.1), correct and adequately qualified; only the "reason people push at the top" is the page's own (finding 6).
- Writer's point 2 (glass, bridges, buildings, tuning fork): the glass ("in rare cases shatter it", little damping, narrow peak), footbridge swaying with a crowd in step, wind/earthquake/walking driving buildings and bridges, and engineers detuning and adding dampers are correct, modest general knowledge and need no source. The tuning-fork sentence is overstated (finding 3). The guitar-body sentence is fine.
- Writer's point 3 (PhET): finding 4; text is accurate in its control names and physics; the slider range at default tension was not verified (not run).
- Writer's point 4 (γ and the amplitude formula): correctly cited (Eqs. (26)-(27), (40), (43), (46)-(47), (49)) and explained as a usable result; γ lacks a physical meaning (finding 2) and differs from 8.03's γ (finding 1).
- No em dashes found in the page.

## Resolution (2026-11-20, by the page author)

1. Fixed. "Damping limits the peak" now says that the university course 8.03 writes γ for b/m, twice this γ, so its formulas have γ where these have 2γ.
2. Fixed. New paragraph after the damping-constant formula: left alone, a weakly damped swing shrinks to roughly a third in every time 1/γ and has died away after a few times 1/γ (notes, Eqs. (42)-(43), "for long times" = much longer than 1/γ); a large γ means a quick death, a small one a long ring; the factor 2 is called a convention that tidies later formulas. Checked against the local lec5 text (Eq. (42) underdamped case A0 e^(-γt) cos, Eq. (43) "for t ≫ 1/γ").
3. Fixed. Tuning fork now held against the guitar; a string tuned to that note starts to vibrate, strings tuned to other notes stay almost still; added that through the air alone the effect is weak, a string with a matching higher harmonic also responds, and musicians usually tune by ear. ("Beats" not mentioned: not introduced in Block 5.)
4. Fixed. Kept wave-on-a-string. "Try it" rewritten: refers back to lesson 5.4, small damping instead of zero, no promise of three resonances, asks the reader to detune a little to either side, then raise the damping and see the peak become lower and wider, with a note that the result depends on the slider settings and the string needs time to settle. docs/HIGHSCHOOL-PLAN.md: §4 row 5.7 PhET column set to wave-on-a-string; §3.5 extra-sims row for 5.7 now names wave-on-a-string in place of the suggested normal-modes (which has no driving force).
5. Fixed. "Sound is a longitudinal pressure wave in the air (lesson 5.5)"; `sound` added to `prerequisites`.
6. Fixed (cheap): the reason people push at the top now is that the swing stands still there and something moving fast is hard to push safely, as in the notes.
7. Fixed. b is now the "friction constant" (with "not the same as the drag coefficient of lesson 2.6"); γ keeps the name "damping constant" used in quiz 4. Symbol meaning of b (and γ) updated in the scratch file sym-resonance-fix.json, to be merged into data/symbols.json.
8. Fixed. `at` now reads "with the drag force −bv".
9. No change (acceptable, as the review says).
10. Fixed. "If every push comes at the same point of the swing, and in the direction it moves, ..."
11. Fixed. Quiz 3 now says "A vibrator near one end shakes it", as in the worked example.

Checks: `npm run calc:test -- -k resonance`: 73 passed. `npm run content:check`: 0 error(s); for this page only the two existing warnings that prerequisites friction-and-drag and work are planned but not written yet. No numbers changed, so the calcs file is unchanged.
