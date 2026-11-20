---
page: content/year-0/hs-5/sound.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/sound (contents page, read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/sound/10-sound-01 … 10-sound-06 (all six read)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec11/ (resource page read; licence link CC BY-NC-SA 4.0) and its PDF MIT8_03SCF16_Lec11.pdf (read, pp. 1–6)
  - https://www.open.edu/openlearn/mod/oucontent/view.php?id=68401&section=4 (read through WebFetch; curl got a Cloudflare 403) and its Acknowledgements section ...&section=__acknowledgements (read)
  - https://science.nasa.gov/learn/basics-of-space-flight/chapter6-1/ (read, "The Inverse Square Law")
  - content/year-0/hs-5/waves.mdx and superposition-and-standing-waves.mdx (prerequisites, read)
  - content/year-2/8.03/sound-waves.mdx (leadsTo target, read)
  - public/phet/sound-waves_1.1.13_en.html (string table only)
verdict: pass-with-notes
---

# Review: Sound and intensity

No errors found. Every number was recomputed and agrees with the page and the calcs file (`calc-test -k sound`: all passed). The pipe formulas follow correctly from the MIT notes, the inverse square law from NASA, the speeds, hearing ranges, decibel table and 80 dB limit from Siyavula. The warnings are about one explanation that keeps Siyavula's doubtful "particles closer together" reasoning, the decibel formula's citation (OpenLearn Box 3 states the rule in words, not the formula), and the "Try it" text.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "The speed of sound", first bullet | Siyavula 10.1/10.2: faster in solids "because the density of solids is higher … particles are closer together" | "In solids and liquids the particles are packed close together, so a push is handed on quickly from one to the next." | This is Siyavula's density argument in other words, and it is not the real reason: at equal stiffness a denser medium is *slower* (Siyavula's own Table 10.1: lead 2160 m/s vs aluminium 6420 m/s; solids and liquids have similar particle spacing yet solids are faster). Lesson 5.3 already says the speed is set by "how stiff or tight it is and how heavy". Suggest: "Solids and liquids are far harder to squeeze than a gas: their particles are close together and held by strong forces, so a push is handed on quickly. (How heavy the material is matters too: a heavier material at the same stiffness carries sound more slowly.)" |
| 2 | warning | Formula "Sound level in decibels", `at=` | OpenLearn Box 3 gives no formula and no I₀: only "every 10 dB … is equivalent to a 10-fold increase in intensity" and pain at 10¹² times the just-audible sound. Siyavula Table 10.3 puts the threshold of hearing at 0 dB | Cites `reading2` "Box 3; values as in Siyavula Sec. 10.4, Table 10.3" for β = 10 log(I/I₀) | The formula is correct and does follow from the two sources together; say so in `at=`, as the pipe formulas do: e.g. "Box 3: every 10 dB is a factor 10 in intensity; with 0 dB at the threshold of hearing (Siyavula Sec. 10.4, Table 10.3) this is β = 10 log(I/I₀)". |
| 3 | info | Decibel section, "intensity grows with the square of the pressure changes" | OpenLearn Box 3: intensity "is related to the square of the variation in pressure" | Uncited sentence (in the intensity section) | Correct. Could add "(OpenLearn, Box 3)" since the page already cites that box. |
| 4 | info | Decibel section, Siyavula's "unit of intensity is the decibel" | Siyavula 10.4 calls dB the unit of intensity and labels its table "Intensity (dB)" | Separates intensity (W/m²) from sound level (dB) and says so in brackets | Correct handling (writer's flag 2). |
| 5 | info | Formula "Wavelength of a sound", `at=` | Siyavula 10.3 "Range of wavelengths" asks to compute wavelengths from Table 10.2 with 344 m/s; it does not write λ = v/f | Cites that activity | Acceptable (the activity presupposes λ = v/f); the formula itself was introduced in lesson 5.3 and could say "wave equation of lesson 5.3". |
| 6 | info | Speed of sound in air | Lesson 5.3 used 340 m/s; Siyavula Table 10.1 gives 343 m/s at 20 °C | 343 m/s, stated as the value for this lesson | Fine; no change needed. |
| 7 | warning | "Try it" | PhET Sound Waves 1.1.13 screens (string table): Intro, Measure, Two Sources, Reflection, Air Pressure; controls "Frequency", "Amplitude", "Audio Controls → Listener Audio", "Air Density in Box" | "Start with a single loudspeaker … Turn on the sound … On the last screen, pump the air out of the box" | Essentially accurate: the last screen is "Air Pressure" with an "Air Density in Box" panel. Name the screens ("Intro", "Air Pressure") and the "Listener Audio" switch so a reader can find them; consider adding the "Reflection" screen for echoes. The exact label of the remove-air control could not be confirmed from the strings ("pump" is a fair description; uncertain). |

## Formulas and citations
- Echo distance = v·t/2 (`mit`, Sec. 10.2 SONAR, Worked example 1): Siyavula halves the there-and-back time. Supported.
- λ = v/f (`mit`, Sec. 10.3): see row 5.
- I = P/area (`mit`, Sec. 10.4): Siyavula "Intensity is the energy transmitted over a unit of area each second". Supported; the page's "at right angles to the direction it travels" is a correct standard addition.
- I = P/4πr² (`nasa`, The Inverse Square Law): NASA states energy spread over a sphere of area 4πR², falling as 1/R², for electromagnetic energy; the page says so in `at=`. Supported, and the geometric transfer to sound is correct.
- β = 10 log(I/I₀) ⇔ I/I₀ = 10^(β/10): correct; citation see row 2.
- Pipe open at both ends, λₙ = 2L/n, fₙ = nv/2L, n = 1, 2, 3 … (`reading1`, p. 5 case (C)): MIT case (C) has ∂ψ/∂z = 0 at both ends, φ = π/2, k_m = mπ/L, ω_m = mπv/L. λ = 2π/k = 2L/m. Correct; page numbers right (case C is on p. 5).
- Pipe closed at one end, λₙ = 4L/n, n odd (`reading1`, pp. 4–5 case (B)): MIT case (B) has ψ(0) = 0, ∂ψ/∂z(L) = 0, cos(k_mL) = 0, k_m = (m − ½)π/L. λ = 4L/(2m − 1). Correct; case B starts on p. 4 and ends on p. 5 (writer's flag 4: correct).
- Boundary statements: closed end ψ = 0 ("air can go nowhere"), open end pressure equal to room pressure: match MIT p. 4. "The pressure changes most there [closed end]" matches MIT (iv) P = −γP₀ ∂ψ/∂x and the 8.03 page. "A node and the next antinode are a quarter wavelength apart" follows from 5.4 (antinodes midway between nodes λ/2 apart).
- Plot: sin(nπx/2L), L = 1 m, n = 1, 3, 5 is MIT case (B) with k = (m − ½)π/L; zero at x = 0, ±1 at x = 1. Correct; caption says it is computed from the formula.
- Siyavula facts used: Table 10.1 speeds (331, 343, 1531, 4760, 5100, 6420 m/s) all match; Table 10.2 (humans 20–20 000 Hz, dogs to 45 000, bats to 120 000, elephants from 5 Hz) match; Table 10.3 rows used (20, 60, 70, 110, 120 dB with 10², 10⁶, 10⁷, 10¹¹, 10¹²) match; 80 dB hearing damage (Sec. 10.6) matches; ultrasound uses (imaging at tissue boundaries, flaw testing, cleaning, kidney stones) match Sec. 10.5.
- Siyavula's doubtful claims left out: the pressure claim (sound faster at sea level because the pressure is higher; wrong for an ideal gas) and the 341 m/s at 21 °C line (inconsistent with its table). Good. But the density reasoning survives in reworded form (row 1).
- Writer's flag 3 (uncited remarks): "every three seconds is about a kilometre" (343 × 3 = 1029 m, correct and in the calcs file); rooms reflecting sound so it falls off more slowly than 1/r² (correct: reverberant field); organ pipes for the deepest notes several metres long (correct: a 16 Hz open pipe is about 10.7 m). All standard and acceptable uncited.
- Writer's flag 1 (no value of I₀): neither Siyavula nor OpenLearn gives I₀, and the page works only with ratios, which is consistent and clear. Acceptable. Note for the owner: the VWO exam uses the standard reference 10⁻¹² W/m²; if it is wanted later, it is a standard convention and could be given as such, but it is not needed for anything on this page.

## Arithmetic and answer checks
All recomputed independently:
- Thunder: 343 × 4.5 = 1543.5 m → 1.5 × 10³ m. ✓
- Ultrasound: 1531/1.5×10⁶ = 1.021 × 10⁻³ m → 1.0 × 10⁻³ m ✓; 343/1000 = 0.343 m ✓; ratio 0.343/1.021×10⁻³ = 336, "over three hundred" ✓.
- Loudspeaker: 4π(3.0)² = 113.1 m²; 0.50/113.1 = 4.42 × 10⁻³ W/m² ✓; at 6.0 m: 1.105 × 10⁻³ → 1.1 × 10⁻³ ✓.
- Decibels: 10^(30/10) = 1000 ✓; 10 log 2 = 3.01 dB, 93 dB ✓; 10 log(1/4) = −6.02 dB ✓.
- Pipe 0.60 m: 343/1.2 = 285.8 → 286 Hz, 571.7 → 572 Hz ✓; 343/2.4 = 142.9 → 143 Hz, 428.75 → 429 Hz ✓.
- Quiz 0: 343 × 0.40/2 = 68.6 → 69 m ✓ (34 m = quarter, 137 m = no halving, 858 m = v/t: all wrong).
- Quiz 1: 30 kHz is ultrasound; dogs to ~45 kHz (Siyavula Table 10.2) ✓; other choices wrong.
- Quiz 2: (6/2)² = 9 ✓; other choices wrong.
- Quiz 3: 10³ = 1000 ✓; 1.5, 30 and 10³⁰ wrong. (Same numbers, 60 → 90 dB, as worked example (a): the quiz repeats the example; info, consider other levels, e.g. 50 → 70 dB.)
- Quiz 4: 343/(4 × 0.85) = 100.9 → 101 Hz ✓; 50 Hz (v/8L), 202 Hz (open–open, as the explanation says), 303 Hz (3f₁) all wrong.
- Flashcards: all true.
- Calcs file: every result-like number on the page has an entry; `node scripts/calc-test.mjs -k sound` passed (138 passed, includes the other sound-related files).

## Only earlier terms
- Written prerequisites checked: 5.3 `waves` introduces medium, longitudinal wave, the slinky, compressions and rarefactions, amplitude, wavelength, frequency, v = fλ, and says the speed is set by stiffness and heaviness; 5.4 `superposition-and-standing-waves` introduces nodes, antinodes (midway between nodes), loops, harmonics, fundamental, λₙ = 2L/n, and promises air columns for 5.5. All uses on this page are covered.
- Planned prerequisites (not yet written in this repository, `content/year-0/hs-0`, `hs-3`, `hs-4` hold only `_course.json`): power (3.5, "Power"), base-10 logarithm (0.9, "Exponentials and logarithms"), pressure (4.1, "Density and pressure"). Their lesson-list titles and §4 rows cover these ideas, so they count as introduced.
- Not listed but earlier by the block order: SI prefixes kHz/MHz (0.2 Units and the SI system), temperature in °C (4.2), particles moving faster when warmer (4.4 kinetic theory), speed of light much larger than sound (1.11 light-travel time). Fine.
- Area of a sphere, 4πr²: no earlier lesson in §4 introduces it explicitly (0.6 / 2.11 possibly). The page states it in place ("whose area is 4πr²"), which is acceptable; info only.
- "echo", "sonar", "echolocation", "ultrasound", "infrasound", "intensity", "sound level", "decibel", "pitch", "loudness" are all defined on the page before use.

## Coverage
- §4 row 5.5 (Sound and intensity; old P 14.1, 14.2; CP 16.11, 17.1–17.3; PhET sound-waves) and the note under the Block 5 table (air columns belong to 5.5): sound as a pressure wave, speed of sound in media and with temperature, pitch/loudness, hearing range, intensity, inverse square law, decibels, open and closed pipes are all covered at VWO level.
- Left out: Siyavula's third characteristic "tone" (quality/timbre), which Siyavula names but does not develop; one sentence linking timbre to the mix of harmonics would fit well after the pipes section (info). The open-end correction (antinode slightly outside the pipe) is not mentioned; not needed at this level (info).
- PhET Sound Waves is used, as §4 lists.

## Where this leads
- `{ course: "8.03", lecture: 11 }` → content/year-2/8.03/sound-waves.mdx ("Sound waves", lecture 11). Same topic: it derives the speed of sound from adiabatic compression and finds the normal modes of closed/open pipes from the end conditions (notes pp. 4–5). The `why` text is accurate. ✓
- `towards: false`: correct (5.13 is the block's last lesson).

## Licensing and AI terms
- No copied sentences found. Closest paraphrases (ultrasound boundaries "muscle and fat or muscle and bone"; hearing protection list) are reworded with standard phrases only.
- No figures copied; the only diagram is a generated `<Plot>`.
- Worked examples and quiz differ from the sources: Siyavula's sonar example (1450 m/s, 1.5 s) and its "Range of wavelengths" activity (344 m/s) are not reused (page: thunder 4.5 s, echo 0.40 s, ultrasound at 1.5 MHz in sea water at 1531 m/s, 343 m/s); OpenLearn's whisper/shout 20 dB/80 dB example is not reused (page: 60 → 90 dB lawnmower; the 20 dB whisper appears only as a row of Siyavula's table); the university 8.03 page's 0.50 m closed pipe at 342 m/s is not reused (page: 0.60 m and 0.85 m at 343 m/s).
- Siyavula: online pages cited, CC BY ("All Siyavula textbook content made available on this site is released under … Creative Commons Attribution License", footer of each section); no logo or branding; "Everything Science" appears only inside the citation title, as on the other hs-5 pages, not as branding. The embedded Siyavula video (10.3) and the vuvuzela table from the SA Medical Journal (10.4, third-party data) are not used.
- MIT 8.03SC: CC BY-NC-SA 4.0 (licence link on the resource page); the Lecture 11 notes PDF has no "excluded from our Creative Commons license" or "All rights reserved" marks.
- OpenLearn: the section page footer says "©1999-2026. All rights reserved", but the course's Acknowledgements state that, except for third-party materials, the content is under CC BY-NC-SA 4.0; the only proprietary items listed for Week 2 are the course image and badge. Box 3 is covered.
- NASA: no insignia, no "according to NASA" phrasing; cited as a source consulted with its read date.
- No forbidden source cited or used.

## Notes
- Writer's flags, in short: (1) no I₀ value: acceptable and clear; (2) intensity vs sound level: handled correctly, Siyavula's pressure claim correctly dropped, but its density reasoning survives in the first speed bullet (row 1); (3) uncited remarks: all correct; (4) pipe formulas and their `at=` derivations: correct; (5) PhET text: essentially accurate, name the screens (row 7).
- The page file's frontmatter has `phet: sound-waves` and the manifest pins sound-waves 1.1.13.

## Resolution (2026-11-20, by the page author)

1. (warning) Fixed. The first speed bullet no longer gives "particles packed close together" as the reason. It now says solids and liquids are far harder to squeeze (much stiffer), so a push is handed on quickly, and that, as in lesson 5.3, the heaviness matters too: of two equally stiff materials the heavier carries sound more slowly, with lead (2160 m/s) against aluminium (6420 m/s). Lead was added to the table of speeds (value checked on Siyavula Sec. 10.2, Table 10.1: "lead 2 160"), with a new calcs fact `speed-lead`.
2. (warning) Fixed. The `at=` of "Sound level in decibels" now says the formula is derived from Box 3 (every 10 dB is a factor 10 in intensity) together with Siyavula Sec. 10.4, Table 10.3 (0 dB at the threshold of hearing). Box 3 wording rechecked on the OpenLearn page.
3. (info) Fixed: "(OpenLearn, Box 3)" added after "the intensity grows with the square of the pressure changes in the wave" (rechecked: Box 3 relates intensity to the square of the pressure variation).
4. (info) No change needed.
5. (info) Left as is (acceptable per the review; the text already says the formula is the wave equation of lesson 5.3).
6. (info) No change needed.
7. (warning) Fixed. "Try it" now names the five screens (Intro, Measure, Two Sources, Reflection, Air Pressure), the "Listener Audio" switch under "Audio Controls", the Reflection screen (waves bouncing off a movable wall: an echo) and the Air Pressure screen's "Air Density in Box" panel. "Pump" was dropped; it says only "take the air out of the box", and no unconfirmed control label is named. All labels checked in the string table of public/phet/sound-waves_1.1.13_en.html.
Coverage note (tone/timbre): added one paragraph after the pipe formulas: a flute and an organ pipe on the same note sound different because each sounds its fundamental with some higher harmonics in different strengths (lesson 5.4), and this mix gives the sound its tone, or timbre.
Arithmetic note (quiz 3 repeating worked example (a)): fixed. Quiz 3 is now a classroom going from 50 dB to 70 dB when the bell rings: 20 dB more is 10 x 10 = 100 times the intensity; choices 1.4, 20, 100, 10^20 (answer index 2 unchanged). Calcs entry `quiz-decibels` updated.
Open-end correction (coverage, info): left out, not needed at this level.

Checks: `npm run calc:test -- -k sound`: 140 passed. `npm run content:check`: 0 error(s); the only warnings for this page are the three "planned but not written yet" prerequisites (power, exponentials-and-logs, density-and-pressure). No symbol changes were needed.
