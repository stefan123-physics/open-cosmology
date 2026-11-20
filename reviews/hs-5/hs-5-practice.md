---
page: content/year-0/hs-5/hs-5-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect/06-doppler-effect-02 (read: formula, sign rule, worked examples and Exercise 6.1)
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec2_3/ (read, local PDF: Eqs. (19), (49), (58), (84))
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec5/ (read, local copy: Eqs. (4), (46), (47))
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec7/ (read, local PDF: Eqs. (15), (31))
  - https://ocw.mit.edu/courses/2-71-optics-spring-2009/resources/mit2_71s09_lec05/ (read, local copy: slide 2, imaging condition and lateral magnification)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch14_inter_diffr/ (read, local copy: Eqs. (14.2.7)–(14.2.8))
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec17/ (read, local copy: I_f = I_0 cos²θ)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf (read, local transcript: pp. 2–5 and 15–19)
  - MIT 8.03SC Lecture 11 notes, OpenLearn Box 3, NASA Basics of Space Flight Ch. 6, MIT 8.03SC Lec 17 transcript pp. 18–19, Siyavula Ch. 8, 10, 11.2, Gr 11 Ch. 5 (not re-read for this review: the same locations are cited by the Block 5 lessons and were checked in their reviews, reviews/hs-5/*.md)
verdict: pass-with-notes
---

# Review: Practice set: waves, sound and light

All 37 answer boxes agree with an independent blind solve (below). No wrong physics, no wrong number, no forbidden source. The notes are about citations of our own derivations, the "After:" line, one symbol meaning, one duplicated mistake hint and one page locator.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Five `<Formula>`s with `cite="mit"`: 1(c) "Pendulum in step with the spring", 2(d) "Tension for a chosen fundamental", 4(c) "Distance for a given intensity", 5(b) "Echo heard by a moving bat", 11(b) "Speed from a spectral line" (and many calcs entries) | `cite="mit"` resolves to `source`, the Siyavula Grades 10–12 landing page (lib/mdx.tsx line 32). Siyavula has no "Problem 1(c)" etc. | Citation shown as "Siyavula, Everything Science … – Problem 1(c) (our own solution)" | The formulas are correct algebra from formulas cited one line earlier, but the link points at a source that does not contain them. Cite the formula(s) they come from (e.g. 1(c): `reading1`, at "Eqs. (49) and (84), set equal (our own step)"; 2(d): `reading3` Eqs. (15) and (31); 4(c): `nasaInverse` solved for r; 5(b): `reading6` applied twice; 11(b): `mit3` pp. 2–5), or add a site-own key. |
| 2 | warning | Every problem: the `ex-cite` line "After: Siyavula, Everything Science: Physical Sciences Grades 10–12 (…)" printed by components/exercise/Exercise.tsx | The problems are our own (the intro says so) | "After:" reads as "adapted from Siyavula's exercise" | The intro sentence is honest, but "After:" on every problem contradicts it. For `solutions: own` sets either hide the line, or print "Topics as in:" / "Background reading:". A component change, not a page change. |
| 3 | warning | Problem 11(b) `<Formula label="Redshift and speed…">` `at="pp. 15–19 (slow motion)"`; frontmatter `mit3.location`; calcs `p11-c` | 8.286 Lec 3 transcript: p. 4 says that for v/u small the shift is v/u (slow motion); pp. 15–19 derive the relativistic formula √((1+β)/(1−β)) − 1, which only gives z ≈ β after a further expansion the transcript does not spell out | "pp. 15–19 (slow motion)" | Use the lesson's wording (towards-the-universe-redshift.mdx line 117): "pp. 4–5 (slow motion, z ≈ v/u) and pp. 15–19 (relativistic formula, which for small β gives z ≈ β)". |

## Formulas and citations
- Checked against the local copies: RES.8-009 Eqs. (19), (49), (84) (T = 2π√(m/k), T = 2π√(ℓ/g)), Eq. (58) second line (−A₀ω₀ sin…, so v_max = ωA; same locator as simple-harmonic-motion.mdx), Lec 5 Eq. (4) (ω₀ = √(k/m)) and Eqs. (46)–(47) (ω_res ≈ ω₀ for weak damping), Lec 7 Eq. (15) (v = √(T/μ)) and Eq. (31) (ω_n = nπv/L); MIT 2.71 Lec 5 slide 2 (imaging condition, lateral magnification); 8.02T Eqs. (14.2.7)–(14.2.8); 8.03SC Lec 17 notes (I_f = I_0 cos²θ); 8.286 Lec 3 pp. 2–3 (1 + z = λ_O/λ_S). All support what the page uses them for.
- Siyavula 6.2 writes f_L = ((v ± v_L)/(v ± v_S)) f_S with a sign convention; the page's ± / ∓ form is the same rule (as in doppler-effect-sound.mdx). Fine.
- Decibel formula cited to OpenLearn Box 3 "derived from … with 0 dB at the threshold of hearing": honest wording (the review of sound.mdx asked for this). Fine.
- `reading5` (Siyavula Sound, Sec. 10.4) is listed in `readings` but cited by no `<Formula>`. Info only.

## Arithmetic and answer checks
- `npm run calc:test -- -k hs-5-practice`: 76 passed. `npm run test:answers`: 65 passed. `npm run content:check`: 0 errors; for this page only the "no review file yet" warning.
- Every number in solutions and checks recomputed (scratch script): all agree with page and calcs (e.g. 4(c) check 16.0² = 255 → 24.1 dB; 7(d) check 32.6°; 8(c) check ×29, 58 cm; 5(b) check 1.40 kHz).
- `<Answer>` boxes: every `value` equals the solution's result within its tolerance (3(a): 0.438 vs exact 0.4375, 0.1%, inside 1%). Formula answers p1-c, p2-d, p5-b, p11-b each equal my formula identically; calcs identity entries confirm by sampling.
- `vars`: all ranges keep the formulas finite and physical (p5-b: v − v_b ≥ 270; p11-b: λ_em ≥ 400; blueshift cases with λ_obs < λ_em give a negative but valid v).
- `mistakes`:
  - **warning** p1-c: `k*g/m` and `g*k/m` are the same expression, so the checker cannot tell them apart; only one of the two hints can ever show. Drop one, or replace it by a real distinct slip such as `k/(m*g)` or `m*k/g`.
  - All other hints are true of their wrong formula (checked: `m/k` has unit s²; `mu*L^2*f^2` is the λ = L slip; `4*L^2*f^2/mu` puts μ below the line; `fs*v/(v - vb)` is what the wall receives; `fs*(v + vb)/v` is only the second step; `fs*(v + 2*vb)/v` is the first-order sum; `(lo - le)/le` is z; `c*(lo - le)/lo` divides by λ_obs; `c*(le - lo)/le` has the wrong sign).
- Multiple-choice keys (p1-d, p6-c, p7-d, p9-c, p10-c) are correct and every other choice is wrong.
- Every part ends with a check (units, a limit, a back-substitution or an independent number), except the qualitative parts 1(d), 6(c), 9(c), 10(c), whose short reasoning is enough, and 10(a), whose solution has no "Check the result" step (10(b)'s check covers the chain 80 → 40 → 30). Info.
- Hints: none gives the result away.

## Only earlier terms
- All ideas are in Block 5 lessons: Malus's law, unpolarized light (polarization.mdx); critical angle, cladding, optical fibre (reflection-and-refraction.mdx); pipes closed at one end, odd harmonics, inverse square law, decibels (sound.mdx); moving listener and the general Doppler formula (doppler-effect-sound.mdx); damping and the resonance peak (resonance.mdx); magnification, real image (lenses-and-telescopes.mdx); fringe spacing (interference-and-diffraction-of-light.mdx); z and 1 + z (towards-the-universe-redshift.mdx).
- info: "octave" is not used in any Block 5 lesson. 2(d) explains it in brackets ("twice the frequency"); 3(c) uses it again. Harmless.
- Problem 4 states I₀ = 1.0 × 10⁻¹² W/m² itself: correct practice, the problem is self-contained whatever the lesson gives.

## Symbols
- **warning** Problem 6(b) solution uses $v$ for the car's speed ("At speed $v$ the car crosses $v/(12\ \text{m})$ ridges per second"). The page's `v` meaning covers wave speed, sound speed and (Problem 11) the galaxy's speed, but not the car. Add "in Problem 6, the speed of the car" or write the speed in words there.
- Combined meanings for f (frequency; focal length in Problem 8), L (string/pipe length; slit–screen distance in Problem 9), v, I (sound in 4, light in 10) and I₀ (threshold of hearing in 4; incident intensity in 10): each is accurate and names its problem. Acceptable for a set that spans a whole block; the I₀ double use is the least comfortable but follows the two lessons' own notation. Info.

## Coverage
- All thirteen lessons are exercised (5.1 SHM, 5.2 pendulum: P1; 5.3 waves, 5.4 standing waves: P2; 5.5 sound: P3, P4; 5.6 Doppler: P5; 5.7 resonance: P6; 5.8 EM spectrum, 5.9 refraction: P7; 5.10 lenses: P8; 5.11 interference: P9; 5.12 polarization: P10; 5.13 redshift: P11). Points add up (12+13+9+10+10+9+12+10+8+8+12 = 113).

## Where this leads
- Not applicable to a practice set (no `leadsTo`).

## Licensing and AI terms
- No problem copies a lesson's worked example or quiz: each is the same kind of task with new numbers and a new situation (closest: P11 resembles the redshift lesson's worked examples, which also use the 656.3/486.1 nm pair, but in reverse direction and with other numbers; P9(b) resembles "Measuring a wavelength"; P3 resembles "Open or closed?"). Fine for practice.
- Siyavula 6.2 Exercise 6.1 has no bat or echo problem; P5 is not Siyavula's. MIT sources used here are lecture notes, not problem sets.
- No figures, no Siyavula branding, no NASA insignia. No forbidden source cited.

## Notes
- info: 8(c) hint says "with all distances in metres" while the answer box is in cm; the solution converts. Fine, but "in metres, then convert to cm" would save a wrong entry of 0.103.
- info: 7(d) is a narrow case (30.0° against a limit of 32.6°); the solution's check says so. Good.

## Blind solve

My answers (written before opening the page; copy in scratchpad/hs/blind-hs-5-practice.md):

- p1-a: 0.993 s — page 0.993 s: agree
- p1-b: 0.253 m/s — page 0.253: agree
- p1-c: ℓ = m g/k — page m*g/k: agree
- p1-d: spring ×√2 (1.40 s), pendulum unchanged — page choice 1: agree
- p2-a: 354 m/s — page 354: agree
- p2-b: 253 Hz — page 253: agree
- p2-c: 1.36 m — page 1.36: agree
- p2-d: 4μL²f² — page 4*mu*L^2*f^2: agree
- p3-a: 0.4375 m — page 0.438: agree
- p3-b: 588 Hz — page 588: agree
- p3-c: 392 Hz — page 392: agree
- p4-a: 2.55 × 10⁻⁴ W/m² — page 2.55e-4: agree
- p4-b: 84.1 dB — page 84.1: agree
- p4-c: 798 m — page 798: agree
- p5-a: 40.71 kHz — page 40.7: agree
- p5-b: f_s(v + v_b)/(v − v_b) — page same: agree
- p5-c: 38.62 kHz — page 38.6: agree
- p6-a: 0.955 Hz — page 0.955: agree
- p6-b: 11.5 m/s — page 11.5: agree
- p6-c: higher, narrower peak at the same speed — page choice 0: agree
- p7-a: 1.94 × 10¹⁴ Hz — page 1.94e14: agree
- p7-b: 19.5° — page 19.5: agree
- p7-c: 69.0° — page 69.0: agree
- p7-d: stays inside (70.5° > 69.0°) — page choice 0: agree
- p8-a: 60 cm — page 60: agree
- p8-b: 10 cm — page 10: agree
- p8-c: 10.3 cm — page 10.3: agree
- p9-a: 6.38 mm — page 6.38: agree
- p9-b: 650 nm — page 650: agree
- p9-c: spacing doubles (12.8 mm) — page choice 0: agree
- p10-a: 30 W/m² — page 30: agree
- p10-b: 7.5 W/m² — page 7.5: agree
- p10-c: nothing (crossed) — page choice 0: agree
- p11-a: 0.0311 — page 0.0311: agree
- p11-b: c(λ_obs − λ_em)/λ_em — page same: agree
- p11-c: 9.32 × 10⁶ m/s — page 9.32e6: agree
- p11-d: 676.7 nm — page 676.7: agree

No statement was ambiguous or missing data.

## Resolution (2026-11-20, by the page author)

1. Warning, five `cite="mit"` formulas: fixed. Each now cites the formulas it is derived from, with "(our own step)": 1(c) `reading1` Eqs. (49) and (84), set equal; 2(d) `reading3` Eqs. (15) and (31) combined, solved for the tension; 4(c) `nasaInverse` The Inverse Square Law, solved for the distance; 5(b) `reading6` Sec. 6.2, the Doppler formula applied twice; 11(b) `mit3` pp. 2–3 (the redshift) and pp. 4–5 (slow motion), combined. No `cite: mit` is left on the page or in the calcs file: the page-own calcs entries (1(b), 1(c), 2(d), 4(c), 5(b), 5(c), 6(b), 7(d), 9(b), 10(b), 11(c)) now cite the source formulas they apply.
2. Warning, the "After:" line: fixed in components/exercise/Exercise.tsx. The line is printed only when the exercise has a `mit` attribute (a problem adapted from the source). This set's problems have none, so no "After:" line appears; the 8.286 problem set, whose three exercises all carry `mit`, renders exactly as before. `npx tsc --noEmit` passes, `npm run test:answers` 65 passed.
3. Warning, 11(b) locator: fixed. The formula now cites "pp. 4–5 (slow motion) and pp. 15–19 (relativistic formula)", as lesson 5.13 does; the frontmatter `mit3.location` and the calcs entries p11-b-ratio and p11-c were changed to match.
4. Warning, p1-c duplicate mistake: fixed. `g*k/m` replaced by `k/(m*g)` with the hint "Turned upside down: this has the unit 1/m, not metres. ..." (true: (N/m)/(kg·m/s²) = 1/m).
5. Warning, `v` in 6(b): fixed by writing the speed in words in the solution and the second hint, and labelling the answer box "speed of the car:" instead of "$v =$". No symbol change needed; the calcs `shown` text for p6-b was updated to match.
- Info, 8(c) hint: now says "with all distances in metres, then convert the result to centimetres".
- Info, 10(a): added a "Check the result" step (30 < 40 < 80 W/m², three quarters pass a 30° turn).
- Other info notes (unused `reading5`, "octave", combined I₀ meanings): left as they are, harmless.

Checks after the fixes: `npm run calc:test -- -k hs-5-practice` 76 passed; `npm run test:answers` 65 passed; `npx tsc --noEmit` clean; `npm run content:check` 0 error(s), no warning for this page. Status set to reviewed.

## Follow-up (2026-11-20)

A later review (reviews/hs-6/hs-6-practice.md, finding 2) noted that the correct option of the choice boxes was almost always the first. The options were reordered so the correct choice sits at varied positions (no wording of any explanation refers to an option's position):

- p1-d: unchanged, correct option 2 (index 1).
- p6-c: correct option moved from 1st to 3rd (answer 0 -> 2) and shortened to "The bouncing at the worst speed becomes larger, over a narrower range of speeds" so it is no longer clearly the longest; the distractor "becomes smaller" was lengthened to "becomes smaller, over a wider range of speeds".
- p7-d: correct option moved from 1st to 4th (answer 0 -> 3).
- p9-c: correct option moved from 1st to 4th (answer 0 -> 3).
- p10-c: correct option moved from 1st to 3rd (answer 0 -> 2); the distractor "20 W/m²" became "20 W/m², half of what reaches the last filter" so the options are of similar length.

Correct positions are now 2, 3, 4, 4, 3 (indices 1, 2, 3, 3, 2). No calcs entry refers to a choice index, so calcs/hs-5/hs-5-practice.yaml is unchanged. calc:test (-k hs-5-practice), test:answers and content:check pass with 0 errors.
