---
page: content/year-0/hs-8/the-big-bang.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf (read: local copy pc2-handover/work/src813/t01.pdf, printed pages 1–5 checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read: local copy src812/t04.pdf, printed pages 19–22)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (read: local copy src813/t16.pdf, printed pages 13–15 and 25)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: local copy src813/t17.pdf, printed pages 16–20)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec19.pdf (read: local copy src813/n19.pdf, all 6 PDF pages, printed pp. 105–109)
  - https://science.nasa.gov/universe/overview/ (read; last updated Aug 12, 2026)
  - https://science.nasa.gov/universe/the-big-bang/ (read; last updated Feb 28, 2024)
  - https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html (read)
verdict: needs-changes
---

# Review: The Big Bang (8.13)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "Reading the temperature clock", step (c), and the timeline row "The first minutes / about 10⁹ K" | Guth, L17 p. 17: T = 9.98 × 10⁹ K/√t holds for g = 10¾ (photons, neutrinos and e± pairs, around one second) and is accurate only well inside one period; the pairs "start to disappear pretty much immediately after" one second. After they disappear the photons are warmer for the same time: T ≈ 1.33 × 10¹⁰ K/√t (own calculation, g = 3.36), so 10⁹ K is reached at about 180 s, not 100 s. Lesson 8.14 (PDG, 8.902 eq. (490): 8 × 10⁸ K at 200 s) says about three minutes | "$t = 100\ \text{s}$, under two minutes. This is the era of the first minutes in which protons and neutrons fused into the first nuclei (lesson 8.14)" | Contradicts 8.14 and is off by a factor of about 1.8. Keep the arithmetic as an exercise on the rule, but say what it misses. Suggested wording for (c): "$t = 100\ \text{s}$ by the rule. The real universe took longer: just after one second the electron–positron pairs disappear and their energy warms the light, so it reached $10^{9}\ \text{K}$ only about three minutes after the start (lesson 8.14). That is when the first nuclei could form." Use the same phrase in 8.14: "about $10^{9}\ \text{K}$, about three minutes after the start". |
| 2 | warning | Section "A temperature clock": "Away from one second the number in front changes a little" | L17 p. 17: g changes at each threshold; the formula is accurate only "well into any one of these periods" | "changes a little" | After the pairs disappear the coefficient rises by about a third (9.98 → about 13 × 10⁹ K). Write "changes, by up to about a third once the electron–positron pairs are gone". This also covers quiz 2 (16 s) and example (b) (25 s), which use the rule where it no longer holds well; they are fine as exercises on the stated rule. |
| 3 | warning | Timeline table row "About 10⁻⁵ s / a few trillion K" and the paragraph after it | 8.902 L19 notes p. 109 gives the temperature directly: kT ≈ 100–300 MeV at t ≈ 10⁻⁵ s (1.2 to 3.5 × 10¹² K) | "a few trillion K", justified by the 1/√t rule: 1.0 × 10¹⁰/√10⁻⁵ = 3 × 10¹² K, "a rough estimate this far from one second" | The rule (g = 10¾) does not apply at 10⁻⁵ s, where many more kinds of particle are in the radiation; it lands in the right range by coincidence (own calculation: with g = 17¼ or 61¾ the same time gives 2.8 or 2.0 × 10¹² K). Cite 8.902 p. 109 for the temperature ("one to a few trillion kelvin (8.902 notes, p. 109)") and, if the rule is kept, call it a cross-check that happens to agree. "A few trillion" is acceptable. |
| 4 | warning | Section "Cooling as space expands": "Guth reaches the same result in Lecture 17 from a different argument, the conservation of entropy" | L17 p. 18 ✓ | Uses "entropy" | Entropy is introduced in lesson 4.9 `entropy-and-the-second-law` (planned, Block 4, PC 1), which is not in `prerequisites`. Add it, or write "from a different argument, about how the disorder of the radiation is shared out (lesson 4.9)". |
| 5 | warning | "So one second after the start the universe was at about ten billion kelvin, $10^{10}\ \text{K}$, which NASA describes as a hot soup of light and particles (NASA, *Cosmic History*)" | NASA Overview: "an extremely hot (… 10 billion degrees Celsius) primordial soup of light and particles" | "which NASA describes as" | Too close to "according to NASA" phrasing (AGENTS.md rule 11, NASA row). Write "… $10^{10}\ \text{K}$: a hot soup of light and particles (NASA, *Universe: Overview*)". Also use the reference's own title consistently (references say "Universe: Overview (Cosmic History)"; the text says *Cosmic History*). |
| 6 | info | First plot caption: "Above the dashed line at 3000 K the gas was ionised and the universe was opaque" | L17 pp. 18–19: hydrogen ionised above about 4000 K; between 4000 and 3000 K partly ionised, still enough electrons to scatter the light | "ionised" above 3000 K | Write "Above the dashed line at 3000 K the gas was (at least partly) ionised and the universe opaque". |
| 7 | info | Worked example (a): "the whole sky glowed like a cold winter day" | — | — | At 272.5 K the glow is far infrared, not visible. Write "the whole sky was as warm as a cold winter day". |
| 8 | info | "In general the density of matter goes as $1/a^3$ (Guth, Lecture 17 p. 18)" | L17 p. 18 mentions it only as an analogy for the entropy ("just like the mass density in a matter-dominated universe … 1 over a cubed"); L16 pp. 6–7 say it directly (matter density "falling off like one over a cubed") | Cites L17 p. 18 | Acceptable. The page's own volume argument (halve every length, 1/8 of the volume) is enough; the cite may stay. |
| 9 | info | Calcs file, `wien-constant` and `peak-at-2725` | Guth L17 p. 18 does not give Wien's law | `source: {cite: reading4, at: 'p. 18'}` | Point these entries at lesson 7.2's source (as 8.14 does with its `wien` reference). Calcs only; page text is right. |
| 10 | info | Quiz 3 explanation and flashcard 5 | — | "(about $10^{-5}$ s)" with s outside the maths | Put the unit inside: `$10^{-5}\ \text{s}$`. |

## Formulas and citations
- d(t) = a(t) d_now: L4 p. 20 (map whose scale changes, Massachusetts, inches per mile) and p. 21 (physical distance = time-dependent scale factor × coordinate distance) verified. Guth's own convention has a in metres per notch (p. 22); the page uses the dimensionless a = 1 today, which Guth names on p. 21 as the common convention in the books, and says so in the `at`. Fine at this level (Writing rule 9 does not apply to High School pages).
- T × a = constant: L17 p. 18 verified ("as long as … the number of degrees of freedom … is fixed, the temperature just falls like 1 over the scale factor"). The page's own Wien-law argument is correct and labelled as its own. L16 p. 25 also states it (relevant for `leadsTo` 8.286 L16).
- a ∝ √t: L16 p. 14 verified, derived on the blackboard ("let us continue on the blackboard", p. 13): `(board)` is correct.
- T = 9.98 × 10⁹ K/√t: L17 p. 17 verified, last lines of the page; Guth says it aloud (also kT = 0.860 MeV/√t). Recomputed: (45ħ³c⁵/(16π³gG))^¼/k_B at g = 10.75 gives 9.970 × 10⁹ K; 0.860 MeV/k_B gives 9.98 × 10⁹ K. Guth's 9.98 comes from the rounded 0.860; fine.
- L1 pp. 1–5: 13.82 billion years (p. 2), "extremely hot, dense, uniform soup", the egg cartoon "just plain wrong" (p. 2), "happened everywhere uniformly" (p. 3), simple assumptions: hot gas, expanding, pulled back by gravity (p. 3), five isotopes, one of the major confirmations (p. 4), "theory of the aftermath of a bang", nothing about what caused it or where the matter came from (pp. 4–5) all verified, page numbers correct.
- L17 p. 19: decoupling at 3000 K, about 380 000 years (Guth computes (2.7/3000)^(3/2) × 13.8 Gyr ≈ 380 000 yr; he also says "about 400,000"); pp. 19–20 image of the universe at decoupling: verified.
- 8.902 L19 notes p. 109 (PDF p. 5, printed 109): quark–hadron transition at 10⁻⁵ s (T ≈ 100–300 MeV), BBN at seconds to minutes, hydrogen at about 400 000 yr, first stars and galaxies at about 10⁹ yr, matter–radiation equality at 10⁴⁻⁵ yr: verified. The page's "roughly its first ten thousand to a hundred thousand years … mostly radiation" matches.
- NASA *Universe: Overview* (updated 2026-08-12): 10 billion degrees in the first second, light elements in the first minutes, "after five minutes, most of today's helium had formed", 380 000 years, 200 million years of dark ages, first stars 30 to 300 solar masses, millions of times brighter: verified. NASA *The Big Bang* (2024-02-28): CMB oldest light, 30–300 solar masses: verified.
- COBE FIRAS: "nearly perfect blackbody with a temperature of 2.725 +/- 0.002 K": verified. 2.725 K and 13.8 are in `calcs/values.yaml` (2.725 as "Guth 2013: the value used for calculations"; the page cites FIRAS for it, which is consistent).

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test -k "the-big-bang or the-first-elements"`: 82 passed. `content:check`: 0 errors; warnings only for the planned prerequisites `towards-the-universe-cooling`, `kinetic-theory` and the missing review file.
- 2.725/0.01 = 272.5 K ✓ (−0.65 °C, "about −0.7" ✓); 2.725/0.001 = 2725 K ✓; 2.9 × 10⁻³/2725 = 1.064 × 10⁻⁶ m ✓; 2.725/10¹⁰ = 2.7 × 10⁻¹⁰ ✓, inverse 3.7 × 10⁹ ✓; 3000/2.725 = 1101 ("about 1/1100") ✓; (1/2)³ = 1/8 ✓.
- Rule: 10¹⁰/√0.01 = 10¹¹ ✓; /5 = 2.0 × 10⁹ ✓; (10¹⁰/10⁹)² = 100 s ✓ arithmetic (see row 1 for the physics); 10¹⁰/√10⁻⁵ = 3.16 × 10¹² ✓.
- Plot 1: 2.725/0.0005 = 5450 < 6000 ✓, point (0.001, 2725) on the curve ✓. Plot 2: 9.98/√0.25 = 19.96 < 22 ✓, point (1, 9.98) ✓.
- Quiz 0: answer 0 ✓; the three others are wrong ✓.
- Quiz 1: 2.725/0.02 = 136.25 K ✓; distractors 0.0545 (multiplied), 54.5 (×20), 6800 (×50 again) all wrong ✓.
- Quiz 2: 10¹⁰/4 = 2.5 × 10⁹ ✓; 6.25 × 10⁸ (÷16) ✓ as stated; 1.6 × 10¹¹ and 4.0 × 10¹⁰ wrong ✓.
- Quiz 3: 2, 4, 1, 3 ✓.
- Quiz 4: answer 0 ✓; the other three are the three pillars ✓.
- Flashcards: all true (card 4 quotes Guth's 9.98 × 10⁹ correctly).

## Only earlier terms
- Warning: "entropy" (row 4), lesson 4.9, planned, not in `prerequisites`.
- Planned, unwritten prerequisites (Block 4 is PC 1's and not written yet): `kinetic-theory` (4.4, "what such a temperature means") and `towards-the-universe-cooling` (4.10, "an expanding gas cools"); their lesson-list titles cover the ideas, so they count as introduced.
- Present in earlier lessons (checked): Wien's law and black body (7.2); 1 + z as the ratio of scale factors, 3000 K and 380 000 years (7.11, `towards-the-universe-reading-starlight`); raisin bread and balloon (8.11); 13.8 billion years and v = H₀d (8.11, 8.12); neutrinos, positrons (7.8); quarks and gluons (8.7); proportionality and square roots (0.x prerequisites). "Scale factor" and "Friedmann equation" are introduced on the page (the latter only named).
- Forward pointers to 8.14, 8.15 and 8.18 are fine.

## Coverage
- §4 row 8.13 (topic "The Big Bang"; NASA "The Big Bang"; leads to `8-286/friedmann-equation`, `8-286/radiation-dominated-universe`): covered at VWO level: what the theory says and does not say, not an explosion, scale factor, T ∝ 1/a, temperature clock, timeline, three pillars.
- Left out: the horizon / "observable universe" only touched in one bullet; Olbers' dark night sky (8.033 lists it as evidence). Neither needed here.
- No PhET sim; §4 names none.

## Where this leads
- `{8.286, 7}` → `content/year-4/8.286/friedmann-equation.mdx` (lecture 7) ✓ topic matches.
- `{8.286, 16}` → `radiation-dominated-universe.mdx` (lecture 16) ✓; L16 derives a ∝ √t (p. 14) and says T falls as 1/a (p. 25) ✓, as the `why` claims.
- `towards: false` ✓ (8.19 is the block's last lesson). The cosmology callout is correct; "Lecture 17 combines them into the temperature clock … and follows the universe down to 3000 K" ✓.

## Overlap with 7.11 and 8.12
- 7.11 already has T_then/T_now = 1 + z, 3000 K and 380 000 years; the page says so ("Lesson 7.11 used it for the moment the background light set out; here we use it to look much further back"). Acceptable reuse with a new purpose.
- 8.12 is about the age from H₀; no duplicated material beyond the 13.8 billion years.

## Licensing and AI terms
- No sentence copied. Closest: Guth "a small egg of highly dense matter that then exploded and spewed out into empty space" → page "a small, dense lump of matter that explodes at one point and sprays its pieces out into empty space" (own words, same idea); Guth "the theory of the aftermath of a bang" → page "a theory of what happened after a bang, not of the bang itself". NASA "primordial soup of light and particles" → "hot soup of light and particles" (short phrase). Fine.
- No figure copied: both graphs are generated from the formulas; no slide image used.
- Worked examples and quiz are the page's own; the MIT transcripts have no exercises of this kind (Guth's own numbers: 0.860 MeV, 3000 K, 380 000 yr, not reused as problems).
- MIT material used is not marked excluded or all rights reserved (transcripts carry the CC notice).
- NASA: no insignia; see row 5 for one "NASA describes" phrasing.
- No ESO text. No forbidden source cited or used. No em dashes.

## Notes
- Suggested shared wording for both lessons (point (a) of the brief): "The universe cooled to about $10^{9}\ \text{K}$ about three minutes after the start (PDG: deuterium survives below about 0.1 MeV; 8.902: $8 \times 10^{8}\ \text{K}$ at 200 s). The simple rule $T \approx 10^{10}\ \text{K}/\sqrt{t}$ gives 100 s, because it holds only while electron–positron pairs are still present."
- My figures for row 1 use t = 2.42 g^(−½) (T/MeV)⁻² s with g = 3.36 after annihilation; this is standard but not in the cited sources at this precision, so treat 180 s as an own check, not a citation.

## Resolution (2026-11-20, by the page author)
1. Fixed. Worked example (c) now gives "t = 100 s by the rule", then says the rule only holds while the electron-positron pairs are still around (Guth, Lecture 17 p. 17), which disappear soon after one second, and that the real universe reached "about 10⁹ K, about three minutes after the start (lesson 8.14)". The timeline row "The first minutes" uses the same shared wording. The reviewer's own 180 s figure is not cited. Calcs: clock-c now shows only "100 s by the rule"; new fact entry bbn-three-minutes (Guth, Lecture 1 p. 3: the light elements formed in roughly the first three minutes, checked in the transcript).
2. Fixed. Guth's transcript (L17 p. 17) does not give the size of the change, so the page no longer says "changes a little" or quantifies it: it now says the rule is only for the era around one second, that kinds of particle disappear and the pairs are gone soon after one second, after which the number in front no longer holds.
3. Fixed. The timeline row now reads "one to a few trillion K", and the paragraph after the table cites 8.902 Lecture 19 notes p. 109 directly (kT about 100 to 300 MeV, i.e. about 1.2 × 10¹² to 3.5 × 10¹² K, recomputed in calcs quark-era-T-low and quark-era-T-high, checked in the local notes). The rule-based estimate was removed, with a sentence that the clock does not hold that early. The reading5 location now mentions the 100–300 MeV.
4. Fixed by rephrasing: "by a different route, from how the radiation thins out as the volume grows". No "entropy" on the page.
5. Fixed. Now "... 10¹⁰ K: a hot soup of light and particles (NASA, *Universe: Overview*)". The reference title is "NASA Science, Universe: Overview", and both in-text mentions use *Universe: Overview*.
6. Fixed: caption now "the gas was (at least partly) ionised".
7. Fixed: "the whole sky was as warm as a cold winter day".
8. No change (the reviewer found the cite acceptable).
9. Fixed. Added the reference `wien` (MIT 8.901 Problem Set 2, Problem 1(c), as in lessons 7.2, 7.11 and 8.14); calcs wien-constant and peak-at-2725 now cite it.
10. Fixed: quiz 3 explanation and flashcard 5 now write the unit inside the maths, $10^{-5}\ \text{s}$; calcs quark-era-time updated.

Checks: `npm run calc:test -- -k the-big-bang`: 41 passed. `npm run content:check`: 0 errors overall; for this page only the two expected warnings for the planned prerequisites `towards-the-universe-cooling` and `kinetic-theory`. No symbol changes needed. Status set to reviewed.
