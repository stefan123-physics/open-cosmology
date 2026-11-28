---
page: content/year-0/hs-7/half-life.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/faed836d054f30d4865374bd66e1e4d0_es6f90JcJ2k.pdf (Lecture 10 transcript; read, pp. 23-25)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/41a605dddc4534df0141eb8987d2544b_YLp8RziRbpg.pdf (Lecture 8 transcript; read, pp. 11-12)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/c61eb2dc2ab817d8dc4f522044ae3c80_kzOFhSJFihI.pdf (Lecture 31 transcript; read, pp. 15-16)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/62654cb8d410ee907c9c3836015a1585_z_xyx-z6arc.pdf (Lecture 11 transcript; read, p. 2)
  - https://www-nds.iaea.org/relnsd/v1/data (IAEA LiveChart data service, the data behind the cited LiveChart page; read for C-14, U-238, K-40 ground states and the Tc-99 levels)
  - https://science.nasa.gov/earth/facts/ (read, "Formation")
verdict: pass-with-notes
---

# Review: Half-life and dating

The transcripts have no printed footer page numbers; PDF page = page, and every cited page was checked with `pdftotext -f N -l N`. No "All rights reserved" or "Courtesy" notice in any of the four transcripts.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formula "Time from the fraction left", `at="transcript p. 24"` | p. 24 derives N/N₀ = e^(−λt) and t½ = ln 2/λ; it never inverts the law with logarithms | Cited as if on p. 24 (calcs marks it `origin: page-own`) | Say it is the page's own rearrangement: e.g. `at="follows from transcript p. 24"`, or cite lesson 0.9's method in the text ("rearranged with the logarithm rule of lesson 0.9") |
| 2 | warning | Formula "Radioactive decay law" N = N₀(½)^(t/t½), `at="transcript p. 24"` | p. 24 gives only the e-form and t½ = ln 2/λ; the (½)^(t/t½) form is not said | Cited to p. 24 directly | Acceptable since it follows in one line, but mark it as "follows from" or add a half-sentence; same for the A = A₀(½)^(t/t½) remark |
| 3 | warning | Quiz 1 (index 0) explanation | n/a | "Dividing by 5 (giving 128) would treat the decay as a straight line" | Dividing by the number of half-lives is not a straight-line decay (a straight line through the first half-life would reach 0, which is the "0 MBq" distractor). Rewrite: "Dividing 640 by 5 (giving 128) confuses five halvings with dividing by five; a steady loss of 320 MBq per half-life (a straight line) would give 0." |
| 4 | info | "Short half-lives in medicine", bracketed note on Tc-99m | L10 p. 25: Tc-99m "has a half-life of around six days"; L08 p. 12: "lasts on the order of six days or so" (in a sentence about molybdenum-99 and the Tc-99m it feeds). IAEA: Tc-99m 6.0072 h | 6 hours (IAEA), with "(The MIT lectures put it at about six days (reading 1, p. 25; reading 2, p. 12), a slip: the measured value is six hours.)" | Handled correctly under Writing rule 4 (brief, bracketed, sourced). Optional: "probably a slip" for L08, whose sentence may mean the molybdenum-99 supply (Mo-99 half-life about 66 h, so a generator lasts about a week); L10 p. 25 is an unambiguous slip |
| 5 | info | "Carbon-14 dating" | L08 p. 11: 5730 years; L31 p. 16: "only 5,700 years"; IAEA: 5700 ± 30 y | 5730 (reading 2) with a note "closer to 5700 years (IAEA)" | Fine. Optional: note that MIT Lecture 31 p. 16 itself uses 5700, so the two values both appear in the course |
| 6 | info | Carbon-dating limit | L08 p. 11: few decays left, "counting statistics get crappy" | "hard to tell apart from the background radiation" | Same idea, slightly different reason (statistics and background). Fine at this level |
| 7 | info | "Many nuclei, one chance each": "Recall from lesson 7.8 that every nucleus... has the same chance" | 7.8 (radioactive-decay) does say this, line 222 | | OK |

## Formulas and citations
- A = λN, transcript p. 23: correct ("activity... depends on the amount... and... this decay constant", units 1/s).
- N = N₀e^(−λt), p. 24: correct (separation of variables on the board).
- λ = ln 2/t½ ≈ 0.693/t½, p. 24: correct ("log of 2 over lambda, better known as 0.693"; larger λ means shorter half-life).
- N = N₀(½)^(t/t½) and t/t½ = log(N/N₀)/log ½: see findings 1-2.
- Becquerel, reading 4 (L11) p. 2: correct ("simply 1 decay per second").
- K-40 to Ca-40 or Ar-40, L10 p. 25: correct.
- C-14 from N-14 by cosmic-ray neutrons, L31 pp. 15-16: correct.
- Tc-99m 140 keV gamma rays and imaging, L08 p. 12: correct (IAEA: level at 142.68 keV, the main gamma 140.5 keV).
- IAEA values (ENSDF via the LiveChart data service, read 2026-11-20): U-238 4.468E9 y, K-40 1.248E9 y, C-14 5700 y, Tc-99m 6.0072 h. The reference's "6.007 hours" and the page's rounded values match.
- NASA *Facts About Earth*, "Formation": "about 4.5 billion years ago". Matches.

## Arithmetic and answer checks
All recomputed independently:
- 6.4e9/32 = 2.0e8; (½)^2.5 = 0.1768; 0.1768 × 6.4e9 = 1.13e9 → 1.1e9; brackets 1.6e9 and 8.0e8. Correct.
- λ = ln 2/480 s = 1.444e-3 s⁻¹; A₀ = 9.24e6 Bq (page 9.2e6, from rounded λ 9.22e6); /32 = 2.9e5 Bq. Correct.
- log 0.30/log 0.5 = 1.7370; × 5730 = 9953 y ≈ 9950. Correct. (With 5700 y: 9900 y.)
- log 0.75/log 0.5 = 0.4150; × 4.47e9 = 1.855e9 → 1.86e9 y. Correct.
- 4.5e9 / 4.468e9 = 1.007 half-lives → 0.497 left: "about half" correct.
- 48 h / 6.0 h = 8; (½)^8 = 1/256 = 0.39%. Correct (with 6.0072 h: 0.393%).
- Quiz 0: 640 → 20 MBq after 5 half-lives. Correct; distractors 40 (4 halvings), 128, 0 are all wrong.
- Quiz 1: A ∝ 1/t½ at equal N → P has 4× Q. Correct.
- Quiz 2: ¼ = two half-lives → 11 460 y. Correct; 2865, 22 920, 5730 wrong.
- Quiz 3: 2e9/5730 = 3.49e5 ≈ 350 000 half-lives. Correct. Distractor "Rocks contain no carbon at all" is false (limestone, coal), so it is rightly wrong.
- Quiz 4: correct answer and explanation true.
- Calcs file: every number on the page has an entry. `quiz:` tags are missing on `quiz-activity-ratio` (quiz 1), `quiz-bone` and its two wrong-choice entries (quiz 2) and `quiz-rock-half-lives` (quiz 3); add `quiz: 1`, `quiz: 2`, `quiz: 3` so the harness ties them to the quiz (info).

## Only earlier terms
- Activity, becquerel, randomness, background radiation, cosmic rays, U-238 → Pb-206 chain: lesson 7.8 (radioactive-decay). Isotope, MeV/keV: 7.7. e, ln, LOG/LN keys, half-life as decay by a fixed factor: 0.9 (exponentials-and-logs). Mega-prefix (MBq): 0.1.
- New terms (decay constant, tracer) are defined where used. "Meteorites" is used without explanation; everyday word, fine.
- Symbols (`data/symbols.json`): λ, A, A₀, N, N₀, t, t½, x, e all have page-scoped meanings. **t and t½ have unit `s`** while the page works in minutes, hours and years (info): AGENTS.md asks for "SI first, the usual unit in brackets", so `s (here also minutes, hours, years)` would describe the page better. λ `1/s` and A, A₀ `Bq` are right.

## Coverage
- §4 row: "Many nuclei decaying, with a half-life graph"; PhET `alpha-decay` (and `beta-decay`). Covered: decay law, half-life table and slider graph, activity, A = λN, λ = ln 2/t½, C-14 and U-Pb / K-Ar dating, medical tracers. This matches VWO (Binas-style A = ln 2/t½ · N and reading t½ from a graph). Nothing important left out. `beta-decay` sim not used; not needed.
- PhET: `alpha-decay_1.0.2_en.html` has the "Multiple Atoms" and "Decay Rate" screens the "Try it" text names.

## Where this leads
- 18.01 Lecture 6 "Exponential and Log" exists (content/year-1/18.01/exponentials-and-logarithms.mdx) and fits. `towards: false` correct (7.11 is the block's last lesson).
- Cosmology callout (age of the universe ≥ age of the Earth) is correct.

## Licensing and AI terms
- No sentence copied from the transcripts; worked examples and quiz items are original (MIT's lectures have no comparable numerical examples).
- No figures copied; the one graph is generated from the formula.
- IAEA credited by name and URL, no logo, no implied endorsement. NASA cited by page title, URL and date read; no insignia, no "according to NASA".
- No forbidden source cited or used. Nothing marked "excluded from our Creative Commons license".

## Notes
- Read-aloud: `texToSpeech` says `\text{Bq}` and `\text{MBq}` as "Bq"/"MBq" (not in `UNIT_WORDS` in lib/speech.ts, and `speechGaps` does not flag it). Engines may spell them out. Suggest adding `Bq: "becquerels", kBq: "kilobecquerels", MBq: "megabecquerels"` to `UNIT_WORDS` (also used in 7.8). `s^{-1}` is said "seconds to the power minus 1"; acceptable.
- `content:check`: no error or warning for this page other than the missing review file.
- Small consistency point: quiz 0 says "The activity never reaches exactly zero", while the graph text says the last nucleus eventually decays. Consider "in the smooth law it never reaches zero".

## Resolution (2026-11-20, by the page author)

1. (warning) "Time from the fraction left": now introduced as the decay law rearranged with the logarithm rule of lesson 0.9, and cited `at="follows from transcript p. 24 (rearranged as in lesson 0.9)"`; calcs source updated to match.
2. (warning) Decay law N = N0 (1/2)^(t/t_half): cited `at="follows from transcript p. 24"`, with a new sentence saying the lecture writes the law in the e form (reading 1, p. 24) and the 1/2 version follows from it in one line. The A = A0 (1/2)^(t/t_half) remark follows from A = lambda N, as the text already says.
3. (warning) Quiz 0 explanation rewritten as suggested: dividing 640 by 5 (giving 128) confuses five halvings with dividing by five; a steady loss of 320 MBq per half-life (a straight line) would give 0; in the smooth law the activity never reaches zero (this also settles the consistency note with the graph text). New calcs entry quiz-tc99m-straight-line (640 - 2 x 320 = 0).
4. (info) Tc-99m note now says Lecture 10 p. 25 is a slip, and that Lecture 8 p. 12 ("six days or so") is probably the same slip, though that sentence may mean the molybdenum-99 supply. No Mo-99 number added.
5. (info) Added that a later lecture of the same MIT course uses 5700 years (reading 3, p. 16; checked in the transcript, p. 16 reads "5,700 years"); reading 3's location in the frontmatter now names it.
6. (info) Carbon-dating limit: left as is (same idea at this level).
7. (info) OK, nothing to do.
Arithmetic note (quiz tags): tried quiz: 1, 2, 3 on quiz-activity-ratio, quiz-bone and quiz-rock-half-lives; calc:test rejects all three (quiz 1: the number 4 appears in two choices; quiz 2: "11 460" with a space is read as two numbers; quiz 3: the choices hold no number). Left untagged, as the writer brief allows.
Symbols note: t and t_half units changed to "s (here also minutes, hours and years)" in a fix file for the coordinator (scratch sym-half-life-fix.json; the unit field is free text). Text unchanged.
Read-aloud note: Bq and MBq already appear as \text{Bq} / \text{MBq} inside maths everywhere (the new 320 MBq too); the unit words themselves are being added to lib/speech.ts by another change.

Checks: `npm run calc:test -- -k half-life`: 43 passed. `npm run content:check`: no error or warning for this page (0 error(s) site-wide).

## Addendum (2026-11-28): PhET simulation added

Narrow re-review of the new paragraph and `<PhET id="beta-decay" title="Beta Decay" />` in "## Try it" (diff against HEAD). Nothing else on the page was re-reviewed.

- **Physics:** correct. Beta decay is random per nucleus with a constant chance per second, so a large sample follows the same half-life law as alpha decay. Beta decay is introduced in the prerequisite `radioactive-decay`, and "isotope" in `the-nucleus`.
- **Screen and control names:** checked in `public/phet/beta-decay_1.0.2_en.html`. Its `screenNameKeys` are `BETA_DECAY/screen.singleAtom`, `screen.multipleAtoms` and `screen.decayRates`, with the strings "Single Atom", "Multiple Atoms" and "Decay Rates". "Decay Rates" (plural) is right for this sim. The Alpha Decay sim's screen is "Decay Rate" (`ALPHA_DECAY/screen.decayRate`), which matches the existing paragraph above it. The Decay Rates screen view is built with `includeIsotopeSelectorPanel: true`. The sim's beta emitters include hydrogen-3, carbon-14 and iodine-131 (half-lives from days to thousands of years), and it also has a "Custom" isotope with a half-life slider. So the reader can compare a short and a long half-life.
- **Info:** "the number left halves in each half-life" is true on average only. The Alpha paragraph says "about half", and so does the page's own description of randomness. Writing "about halves" would match it, but this is optional.
- **House rules:** no em dash, plain English, no rem/px (text only). No PhET text is copied: the sim strings, such as "Adjust time for Isotope A to undergo one half-life", do not appear.

Errors: none. Warnings: none. Info: 1 (above).

## Resolution (2026-11-28, by the page author)

Took the info suggestion on wording; nothing else needed.
