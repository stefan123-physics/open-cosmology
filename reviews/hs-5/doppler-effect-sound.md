---
page: content/year-0/hs-5/doppler-effect-sound.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect (read, chapter index)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect/06-doppler-effect-02 (read in full with curl: 6.2, Case 1, Case 2, formula and sign note, worked examples 1 to 3, ultrasound, Exercise 6.1)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect/06-doppler-effect-03 (read in full with curl: 6.3, red and blue shifts, expanding universe)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-3-the-doppler-effect-and-special-relativity/ (read: video lecture page; its transcript PDF 97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf read in full)
  - content/year-4/8.286/doppler-effect.mdx (this site's university lesson, read)
verdict: pass-with-notes
---

# Review: The Doppler effect for sound

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `<Formula>` "Wavelength in front of a moving source", `at="Sec. 6.2, Case 1: moving source"` | Siyavula Case 1 is qualitative only (crests closer in front, further apart behind); it gives no λ = (v − v_s)/f_s. The derivation (the second crest travels an extra Δℓ = vΔt_s) is in the MIT 8.286 Lecture 3 transcript, pp. 1–2. | Cites reading1 Case 1 for the formula. | Cite `mit8286` (transcript, source-moving case, pp. 1–2) for this formula, or keep reading1 and say in `at` that the formula is derived on the page from Case 1's picture and f = v/λ. |
| 2 | warning | `<Formula>` "Source moving towards a listener at rest" and "Listener moving towards a source at rest", `at="… Case 1"` / `"… Case 2"` | Siyavula writes f_L = (v/(v − v_S)) f_S and f_L = ((v + v_L)/v) f_S in the paragraph after the boxed formula that explains the sign choice, not in the Case 1 / Case 2 subsections (which have no formulas). | Locations point at Case 1 and Case 2. | Change `at` to "Sec. 6.2, the Doppler formula, note on the sign choice". |
| 3 | warning | "Who moves matters" section and quiz 4 | Siyavula 6.2 says the opposite: "We didn't actually need to analyse both cases … because of relative motion. The case of a stationary source with moving observer is the same as the case of the stationary observer and the moving source because the relative motion is the same." | For sound it matters who moves, because sound travels relative to the air (and quiz 4 marks "It does not" as wrong). | The page is right (exactly true only for v_s, v_L ≪ v; supported by the MIT transcript (end of the observer-moving case) and the "Does this violate Galilean relativity?" answer, and by the site's 8.286 lesson). Since it differs from the main source, add one sentence such as "Some books say the two cases are the same; at everyday speeds the difference is small, but it is real." and cite `mit8286` there. |
| 4 | warning | "Light does it too", second paragraph | Siyavula 6.3 gives no formula. The MIT transcript gives the relativistic 1 + z = √((1 + β)/(1 − β)) (later in the transcript, "the special relativity answer"), which for small β is z ≈ β; the site's 8.286 lesson states z ≈ β + β²/2. | "For speeds much smaller than the speed of light … the wavelength changes by a fraction equal to the speed of the source divided by the speed of light", with no citation. | The statement is correct to first order (motion along the line of sight). No `<Formula>` is needed for a prose statement, but the page should say where it comes from: extend the `mit8286` `location` to "… relativistic Doppler shift; for small v/c, z ≈ v/c" and/or add "(MIT 8.286, Lecture 3)" in the sentence. Better: "the speed of the source *towards or away from us*". |
| 5 | warning | `references.mit8286.title` | The URL is the video-lecture resource page (video plus transcript PDF). The lecture notes/slides are a different resource (`resources/mit8_286f13_lec03/`, used by the 8.286 lesson). | "… lecture notes". | Retitle to "Lecture 3 … (A. Guth), video lecture and transcript", or point the URL at the transcript PDF. |
| 6 | warning | "Light does it too" and quiz 5 (only earlier terms) | Light, the visible spectrum, colours ordered by wavelength and the speed of light are introduced in 5.8, after this lesson (§4 order). Siyavula 6.3 explains that red has longer wavelengths than blue. | "shifted towards the red end of the spectrum", "speed of light", with a forward link to 5.8. | Describe plainly: "in visible light, red has the longest wavelengths and blue/violet the shortest (lesson 5.8)". The forward link is fine; the missing fact is what makes "redshift" mean "longer wavelength". |
| 7 | info | "One formula with a sign rule" | Siyavula writes f_L = ((v ± v_L)/(v ± v_S)) f_S, with v_S negative towards and v_L positive towards. | f_s (v ± v_L)/(v ∓ v_s) with positive speeds; "Some books write the same formula with the sign put into the velocities". | Correct and equivalent (checked below). Since the main source is the one doing it, say "The main source (Siyavula) writes …" instead of "Some books", so a reader who opens 6.2 is not confused. |
| 8 | info | Worked example "Both moving" | Siyavula: "Both the source and the observer can be moving at the same time but we won't deal with that case." | Treats both moving with the combined formula, cited to reading1 "the Doppler formula". | Fine: the boxed formula does have both terms, and the result is standard and correct. No change needed. |
| 9 | info | speed of sound | Siyavula uses 340 m/s in every example; lesson 5.5 uses 343 m/s at 20 °C. | "Like the main source, this lesson takes … v = 340 m/s." | Acceptable; optionally add "(343 m/s at 20 °C, lesson 5.5, rounded)". |

## Formulas and citations
- λ = (v − v_s)/f_s: physics correct (gap (v − v_s)T in front). Citation weak, see #1.
- f_L = f_s v/(v − v_s): correct; in Siyavula 6.2 (sign note), location imprecise, see #2.
- f_L = f_s (v + v_L)/v: correct; in Siyavula 6.2 (sign note), location imprecise, see #2.
- f_L = f_s (v ± v_L)/(v ∓ v_s): correct and equivalent to Siyavula's boxed formula with its sign table (Siyavula's worked example 1 writes 340/(340 − 20) for the approaching ambulance with v_S = −20, i.e. v + v_S; worked example 2 writes (340 + 15)/340 with v_L = +15). Page's rule: upper signs (+ on top, − below) for "towards", lower for "away", chosen separately for listener and source. Checked against all four Siyavula cases: same results. The "check that always works" (towards ⇒ f_L > f_s) is true for subsonic speeds. **Writer's point 1: the sign rule is correct and clearly explained**; see #7 for one wording tweak.
- "The formula is for speeds below the speed of sound and for still air": correct (Siyavula: the medium is stationary in the cases studied).
- Ultrasound > 20 000 Hz and Doppler flow meter, higher if blood moves towards the probe: matches Siyavula 6.2 "Ultrasound and the Doppler effect".
- Redshift/blueshift definitions: match Siyavula 6.3.
- **Writer's point 2:** Siyavula 6.2 defines the Doppler effect as motion "relative to the transmitting medium", but then claims the source-moving and observer-moving cases are the same "because the relative motion is the same". That claim is only approximately true (difference of second order in v/u). The page's statement is correct and is supported by the MIT 8.286 Lecture 3 transcript (the two results differ by (v/u)²/(1 − v/u), "second order in v over u"; in answer to the Galilean-relativity question, "the air is playing a crucial role"; later, for light: for light "it shouldn't matter whether the source is moving or the observer is moving") and by content/year-4/8.286/doppler-effect.mdx line 78. See #3: make the disagreement with the main source explicit.
- **Writer's point 3:** correct to first order, adequately sourced only implicitly; see #4.
- Christian Doppler, Austrian, 1842: standard and correct (his 1842 paper); no source cited, acceptable as a historical aside.

## Arithmetic and answer checks
All recomputed by hand; `pytest tests/calc -k doppler-effect-sound`: 20 passed.
- Police car: 600 × 340/306 = 666.7 → 667 Hz ✓; 600 × 340/374 = 545.5 → 545 Hz ✓; drop 121.2 → "about 120 Hz" ✓; 34 m/s = 122.4 km/h ✓.
- Factory siren: 500 × 357/340 = 525.0 ✓; 500 × 323/340 = 475.0 ✓.
- Both moving: 350 × 360/300 = 420.0 ✓; 350 × 320/380 = 294.7 → 295 ✓.
- Who moves matters: 600 × 374/340 = 660.0 ✓ (vs 667 for the moving source ✓).
- Horn: 530(v − v_s) = 470(v + v_s) ⇒ 60v = 1000v_s ✓; v_s = 0.06 × 340 = 20.4 m/s ✓ = 73.4 km/h → 73 ✓; f_s = 530 × 319.6/340 = 498.2 ✓; cross-check from the receding note: 470 × 360.4/340 = 498.2 ✓.
- Second Plot: at 100 m/s, 600·340/240 = 850 and 600·340/440 = 463.6, both inside the range [400, 900] ✓; "the rise in front is larger than the drop behind, and grows faster and faster" ✓ (250 Hz up vs 136 Hz down at 100 m/s).
- Wavefront Plot (**writer's point 5**): curves are circles of radius 4, 3, 2, 1 centred at 0, m, 2m, 3m, and a marker of radius 0.12 at 4m, with m = v_s/v. This is exactly "the compression sent out k periods ago is a circle of radius k wavelengths around x = (4 − k)·v_s/v; the source now at 4·v_s/v" ✓. Units: radius kvT = k λ_rest, source step v_sT = (v_s/v) λ_rest ✓. At m = 0.9 the source (3.6) stays inside the smallest circle (2.7 ± 1) ✓, and everything fits in [−4.5, 4.5] (max x = 4) ✓. "Crowd together on the right, spread out on the left" ✓. Caption accurate. (Uncertain, not checked in a browser: the circles look round only if the Plot draws equal x and y scales.)
- Quiz 1: answer 1 correct (constant speed ⇒ steady shifted pitch; for a listener right on the line). A rises-then-falls: wrong ✓; C: wrong ✓; D reversed: wrong ✓. The explanation's "Only the loudness changes with the distance" is true for motion along the line; for a listener a little to the side the pitch glides down while the car passes, which "drops … as it passes" covers. Fine.
- Quiz 2: 450 × 340/370 = 413.5 → 414 ✓; distractors 450 (no shift), 490 (= 450·370/340, listener formula), 494 (= 450·340/310, approaching) all wrong ✓.
- Quiz 3: 680 × 330/340 = 660 ✓; 680, 700 (towards), 720 wrong ✓.
- Quiz 4: answer 1 correct; A (approximation) wrong, C wrong, D ("It does not") wrong physically, though it is what Siyavula claims (#3).
- Quiz 5: answer 1 (redshift, moving away) ✓; others wrong ✓.
- Flashcards: all four true.
- Calcs file: every number on the page is covered (340, 20 000, 122, 667, 545, 120, 525, 475, 420, 295, 660 ×2, 0.060, 20.4, 73, 498, 414, 600). **Writer's point 4:** `origin: mit` is the only allowed value for "a number taken from the cited source" (tests/calc/test_calculations.py line 358 accepts only mit / page-own / later-data / slip; the other hs-5 calcs files use it the same way, and the pendulum review accepted it). Both facts are true of the cited source: Siyavula 6.2 uses 340 m/s in worked examples 1 to 3, and gives 20 000 Hz in "Ultrasound and the Doppler effect". Acceptable; the name "mit" is a leftover of the university site (info: the owner may want the test to accept `source` for High School).

## Only earlier terms
- Wave, wavelength, frequency, period, v = fλ, rings on a pond: 5.3 `waves` (written) ✓; T = 1/f from 5.1/5.3 ✓.
- Compression, pitch, ultrasound above 20 000 Hz, speed of sound: 5.5 `sound` (written, draft) ✓.
- Relative velocity (crests meet the listener at v + v_L): 1.9 `relative-velocity` is planned, not written (content/year-0/hs-1 has only `_course.json`); its §4 title "Relative velocity" covers the idea ✓.
- Light as a wave, visible spectrum, red/blue order, speed of light: introduced in 5.8 (later). Forward-linked, but the red = long wavelength fact is not stated; see #6.
- Redshift, blueshift, Doppler effect, f_L, f_s, v_L, v_s: introduced here ✓.
- Galaxy, star: everyday words, acceptable.

## Coverage
- §4 row 5.6 "The Doppler effect for sound": moving source, moving listener, the formula and its signs, ultrasound use, and a preview of light; matches Siyavula 6.2 and the light part of 6.3. Hubble's law and the expanding universe (Siyavula 6.3) are rightly left to 5.13. Sonic booms / supersonic sources are not covered; not needed at VWO level (the page says the formula is for subsonic speeds).

## Where this leads
- `leadsTo: 8.286 lecture 3` = content/year-4/8.286/doppler-effect.mdx "The Doppler effect and special relativity" (lecture 3) ✓; §4 names `8-286/doppler-effect` ✓. The `why` is accurate: that lesson derives the sound shift from the time between crests, shows source-moving and observer-moving differ, and derives the relativistic formula.
- `towards: false` ✓ (5.13 is the block's "Towards the universe").

## Licensing and AI terms
- No sentence copied from Siyavula or the MIT transcript; compared the moving-source explanation, the sign explanation, the ultrasound paragraph and the redshift paragraph with the sources: all rewritten. Closest is the ultrasound paragraph ("unborn baby", "narrowed vein"), which reuses the source's two examples in new words; acceptable.
- No figure copied: both diagrams are Plots computed from formulas.
- Worked examples and quiz differ from Siyavula's (ambulance 700 Hz/20 m/s, whistle 800 Hz/15 m/s, train 458 Hz/20 m/s, 740 Hz/25 m/s, hooter 400 Hz, plane 1.15 ratio, 1050 Hz at −35 °C, 437.1 Hz Cecil): the page uses 600 Hz/34 m/s, 500 Hz/17 m/s, 350 Hz with 40 and 20 m/s, 530/470 Hz, 450 Hz/30 m/s, 680 Hz/10 m/s. The "factory siren with a driver" setting resembles Siyavula's worked example 2 (factory whistle, driver), with other numbers and both directions; acceptable (info). The 530/470 problem (speed from two notes) is not one of Siyavula's.
- No Siyavula logo or branding; "Everything Science" appears only inside the citation title, as on the other hs-5 pages (attribution, not branding).
- MIT: only the ideas of the transcript are used; nothing marked excluded from the CC licence is reproduced.
- No NASA or ESO material; no forbidden source cited or read.

## Notes
- Verdict pass-with-notes: no errors found; physics, numbers and quiz are right. The warnings are citation locations (#1, #2), an unflagged disagreement with the main source on "who moves matters" (#3), sourcing of the v/c remark (#4), the MIT reference title (#5) and one missing plain description for the light preview (#6).

## Resolution (2026-11-20, by the page author)
- #1 (warning) Fixed. The wavelength formula now cites mit8286 (Lecture 3 transcript, source-moving case: the next crest travels an extra distance v_s T, worked out here for the side in front). Checked in the transcript. The calcs identity for it now cites the same place.
- #2 (warning) Fixed. Both single-motion formulas now have at="Sec. 6.2, the Doppler formula, note on the sign choice" (checked: Siyavula writes (v + v_L)/v and the sign explanation there). The calcs entries that pointed at Case 1 / Case 2 were changed the same way.
- #3 (warning) Fixed. "Who moves matters" now says that the main source (Siyavula 6.2) calls the two cases the same because the relative motion is the same, that this is not quite right for sound in air, and that the difference is small at everyday speeds but real, as the MIT 8.286 Lecture 3 transcript works out (second order in v/u; the air plays a crucial role). Quiz 4 unchanged (it is right).
- #4 (warning) Fixed. The v/c sentence now says "the source's speed towards or away from us" and names MIT 8.286, Lecture 3; the mit8286 location now includes the relativistic shift 1 + z = sqrt((1 + beta)/(1 - beta)) and z approx v/c for small v/c.
- #5 (warning) Fixed. mit8286 now points at the transcript PDF (97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf) and is titled "... video lecture transcript".
- #6 (warning) Fixed. "Light does it too" now states plainly that of the colours we can see, red has the longest wavelengths and blue and violet the shortest (lesson 5.8), and says "shifted towards the red / blue" instead of "the red end of the spectrum". The speed of light is introduced in words as the fixed speed at which light travels, far faster than sound (lesson 5.8), before it is used.
- #7 (info) Fixed: "Some books write" is now "The main source (Siyavula) writes".
- #8 (info) No change, as suggested: the both-moving example stays.
- #9 (info) Fixed: 340 m/s is now called a rounded value (lesson 5.5 gives a slightly larger one at room temperature); no new number added.
- Checks: npm run calc:test -- -k doppler-effect-sound: 20 passed. npm run content:check: 0 error(s); the only note for this page is the warning that prerequisite relative-velocity (1.9) is planned but not written yet. No symbol changes needed. Status set to reviewed.
