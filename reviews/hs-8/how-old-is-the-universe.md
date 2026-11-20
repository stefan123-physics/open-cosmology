---
page: content/year-0/hs-8/how-old-is-the-universe.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read: Lecture 8 transcript, pp. 10–14; printed footer pages equal PDF pages, checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read: Lecture 4 transcript, pp. 7–15)
  - https://science.nasa.gov/mission/wmap/wmap-overview/ (read; last updated 16 Apr 2026)
  - https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-15/ (read; last updated 3 Sep 2026)
  - https://science.nasa.gov/earth/facts/ (read; last updated 5 Dec 2025)
  - https://arxiv.org/abs/astro-ph/0111597 (abstract only, via the arXiv API, to date the Krauss–Chaboyer result; allowed under Writing rule 11, arXiv row)
verdict: needs-changes
---

# Review: The age of the universe (8.12)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "Too young for its stars" ("the globular cluster M15"), the history paragraph ("globular clusters"), quiz 3 ("the cluster M15") | "Globular cluster" is not used in any earlier High School lesson (searched all of `content/year-0`); the page defines it only later, in "Cross-checks" | Used twice before it is defined | Define it at first use, in the worked example: "the globular cluster M15 (a dense ball of very old stars, one of the oldest known)", and keep the fuller sentence in "Cross-checks". |
| 2 | warning | History paragraph: "before 1998 the age of a flat matter-only universe came out near 10 billion years, while studies of the oldest stars in globular clusters (he quotes Krauss and Chaboyer) said the universe must be at least 11.2 billion years old" | Transcript p. 13 gives Krauss and Chaboyer's 12.6 (+3.4/−2.2) Gyr, lower limit 10.4 + 0.8 = 11.2 Gyr, and frames the tension as "before 1998". The Krauss–Chaboyer paper with the 11 Gyr lower limit is from after the discovery of dark energy: arXiv astro-ph/0111597 (30 Nov 2001), whose abstract says the limit "solidifies the case for a dark energy-dominated universe" (journal version 2003, from memory, not checked) | Places the 11.2 Gyr limit before 1998 | Do not repeat the anachronism (Writing rule 4). E.g.: "Before 1998 the ages of the oldest stars were already hard to fit into a matter-only universe. Guth quotes a later analysis by Krauss and Chaboyer (2001) that puts the universe at no less than 11.2 billion years, against 9.7 billion for a matter-only universe with Planck's H₀ (Lecture 8 pp. 12–13)." Add "(p. 13)" as the cite. |
| 3 | warning | Section "How the age is measured": "The Planck satellite measured the same light again; its 2013 results are the ones Guth quotes in his lecture. The answer is about 13.8 billion years." | Lecture 8 p. 12: "this Planck value that I quoted earlier 67.3 plus or minus 1.2"; Lecture 4 p. 12: Planck "just released its data last March" (2013). Lecture 8 p. 13 gives 13.8 Gyr as "the age of the universe is estimated at", without naming Planck | Implies Guth quotes Planck's 2013 age | Write "Guth quotes Planck's 2013 value of the Hubble constant, 67.3 km/s/Mpc (Lecture 4 p. 12, Lecture 8 p. 12), and gives the age as about 13.8 billion years (Lecture 8 p. 13)." Add Lecture 4 p. 12 to `reading2.location`. |
| 4 | warning | Section "Why the real age …", last paragraph: "With the Planck satellite's 2013 value that Guth uses, $H_0 = 67.3$" | Lecture 8 p. 12 (67.3 ± 1.2, "this Planck value"); the year is in Lecture 4 p. 12 | Uncited | Add "(Lecture 8 p. 12; the year: Lecture 4 p. 12)". Content correct. |
| 5 | warning | Section "How the age is measured": "light released about 375 000 years after the universe began, which still fills the whole sky (lesson 8.15)" | NASA *WMAP Overview*: "approximately 375,000 years"; lesson 7.11 (`towards-the-universe-reading-starlight`) already introduced the CMB at "380 000 years after the Big Bang" | 375 000, pointing forward to 8.15 | Point back to the lesson that introduced it: "(lesson 7.11; more in lesson 8.15)". Either use 380 000 as in 7.11, or keep NASA's 375 000 with the cite, so readers are not puzzled by two numbers. |
| 6 | warning | Section "Cross-checks": "astronomers find ages of up to about 12 billion years for the oldest clusters, such as M15"; "From how far its stars have got in using up their fuel (lesson 8.5)" | NASA *Messier 15*: "one of the oldest globular clusters known, with an age of around 12 billion years". No cited source for the dating method or for "up to about 12" as the maximum; Guth p. 13 quotes 12.6 Gyr for the oldest stars (Krauss–Chaboyer) | "up to about 12 billion years" (writer flagged as uncited) | The method is standard and correct (main-sequence turn-off). Write "about 12 billion years for one of the oldest, M15 (NASA Science, *Messier 15*)" and drop "up to", or add Guth's 12.6 (+3.4/−2.2) Gyr (Lecture 8 p. 13). |
| 7 | info | Section "How the age is measured": WMAP paragraph | NASA *WMAP Overview*: launched 30 June 2001, science data until 19 Aug 2010, example patches 2.7251 K and 2.7249 K, age 13.77 Gyr "to within a half percent" | "WMAP's final results fixed the age to within half a percent" | Correct. "final" is the page's word; NASA says WMAP "determined" it. The 0.0002 K example is NASA's; typical spots differ by tens of microkelvin (Guth Lecture 4 p. 12: "1 part in 100,000"). Optional: "a few hundred-thousandths of a kelvin" or keep NASA's example as an example. |
| 8 | info | First plot | `domain={[0, 16]}` with the slider down to H₀ = 60, Hubble time 16.3 Gyr | Caption: "each reaches its present distance after one Hubble time" | At H₀ ≤ 61 the present moment lies off the plot. Use `domain={[0, 17]}` or slider minimum 62. |
| 9 | info | Citations of NASA pages: "(NASA, *Messier 15*)", "(NASA, *WMAP Overview*)", "(NASA, *Facts About Earth*)" | Lesson 8.11 and the other Block 8 lessons write "(NASA Science, *…*)" | "NASA, *…*" | Use "NASA Science, *…*" for consistency; not "according to NASA" phrasing, so not a licence issue. |
| 10 | info | Section "Why the real age …", bullet on gravity: "flat (just balanced between expanding for ever and falling back, which our universe is very close to)" | Lecture 8 pp. 10–13 (flat = critical density in the matter-only model; COBE suggested Ω = 1, p. 13) | Gloss correct for matter only | Fine for this model. Our universe with dark energy is spatially flat, but "balanced between expanding and falling back" no longer describes it; lesson 8.17/8.18 may need to say so. No change needed here. |
| 11 | info | Leads-to `{8.286, 19}` why: "finds about 13.8 billion years" | `age-with-vacuum-energy` computes 13.7 Gyr (H₀ = 68, Ω_m = 0.31) and quotes Guth's 13.7–13.8 (calcs/values.yaml) | 13.8 | Write "about 13.7 to 13.8 billion years" to match the target page. |

## Formulas and citations
- Hubble's law $v = H_0\,d$, reading2 "p. 7, where Guth writes the distance as r" ✓ (Lecture 4 p. 7, said in words; v = Hr is on slide 1).
- $t = d/v = d/(H_0 d) = 1/H_0$, reading2 p. 14 "in words … the step t = d/v is ours" ✓: p. 14 says "any age estimate is proportional to 1 over the Hubble parameter", extrapolating "when was everything on top of each other". Honest labelling.
- $1/(10^{10}\ \text{years}) = 97.8\ \text{km/s/Mpc}$, reading2 "p. 8 (board)" ✓ ("I'll write these things on the board"; a student refers to it on the board on p. 9). Also on Lecture 8 p. 12.
- $t = \tfrac23 \cdot 1/H_0$, reading1 "p. 11 (board)" ✓: on p. 10 Guth leaves the slides "and proceed[s] on the blackboard"; p. 11 derives H = 2/(3t) from a ∝ t^{2/3} and "t is equal to 2/3 times h inverse". The page uses H₀ for today, which is the case Guth evaluates.
- 1 pc = 3.2616 ly (Lecture 4 p. 8) ✓.
- Lecture 8 pp. 11–12: Hubble's H about seven times too large, ages of order 2 billion years, the Earth and stars known to be older ✓ (also Lecture 4 p. 15). p. 12: 67.3 ± 1.2 and 9.7 ± 0.2 Gyr ✓; "Before 1998, when the dark energy was discovered" ✓. p. 13: Krauss–Chaboyer 11.2 Gyr, 13.8 Gyr with dark energy ✓ (rows 2–3).
- NASA *WMAP Overview*, *Messier 15* (about 12 billion years, one of the oldest), *Facts About Earth* (about 4.5 billion years) ✓.

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test` passes (12 134 checks); `npm run content:check` 0 errors (only "no review file yet" for this page).
- 1 Mpc = 3.26 × 10⁶ × 9.46 × 10¹⁵ = 3.084 × 10²² m ✓. H₀ = 7.0 × 10⁴/3.08 × 10²² = 2.27 × 10⁻¹⁸ s⁻¹ ✓. 1/H₀ = 4.41 × 10¹⁷ s ✓; /3.156 × 10⁷ = 1.40 × 10¹⁰ yr ✓.
- 1/(10¹⁰ yr) = 3.0857 × 10¹⁹ km/(3.156 × 10¹⁷ s) per Mpc = 97.78 km/s/Mpc ✓; 977.8/70 = 13.97 ("14.0") ✓.
- Near/far: 70 × 150 = 10 500, 70 × 450 = 31 500 km/s ✓; 150 × 3.08 × 10²² = 4.62 × 10²⁴ m, /1.05 × 10⁷ = 4.40 × 10¹⁷ s ✓; 1.386 × 10²⁵ m, /3.15 × 10⁷ = 4.40 × 10¹⁷ s ✓; the 4.40 versus 4.41 difference is rounding of 2.27, as the page says ✓.
- Matter only: ⅔ × 14.0 = 9.33 ("9.3") ✓ (⅔ × 13.97 = 9.31).
- 977.8/67.3 = 14.53 ("14.5") ✓; 13.8/14.53 = 0.950 ("about 95%") ✓. 4.5/13.8 = 0.33 ("a third") ✓.
- Second plot: (1 + 1.5x)^{2/3} with x = H₀t/977.8 has slope 1 at x = 0, equal to the line, and reaches zero at x = −⅔ ✓; caption true.
- First plot: d = d_today × t/(Hubble time) ✓ (row 8 for the domain).
- Quiz 0: answer 1 (halves) ✓. Quiz 1: 97.8/100 × 10¹⁰ = 9.78 × 10⁹ ✓ (answer 0); other choices wrong ✓. Quiz 2: answer 0 ✓; explanation true. Quiz 3: answer 0 ✓ (see row 1: "cluster" used before it is defined). Quiz 4: answer 0 ✓.
- Flashcards: all true; (977.8/H₀) billion years ✓.
- values.yaml: H₀ 70 (example), 67.3 (Guth 2013), 100 (example, quiz), 97.8 (computed); ages 13.8 (Guth 2013: Planck 2013, rounded), 14 and 14.0 (computed Hubble time), 14.5 (computed Hubble time for 67.3). All roles fit the use on the page. 9.3, 9.7, 11.2 and 12 lie outside the checked age range, and are in the calcs file.

## Only earlier terms
- Error: "globular cluster" (row 1).
- Forward references with a plain in-line explanation, acceptable: dark energy ("the expansion is now getting faster, driven by what is called dark energy (lesson 8.17)"); "flat" (glossed in brackets).
- Present in earlier lessons (checked): Hubble's law, H₀, Mpc, parsec, light-year (5.13, 8.10, 8.11); speed = distance/time (1.2); gravity between all masses (2.11); stars using up their fuel (8.5); radioactive dating, uranium-238, Earth 4.5 billion years (7.9, which already says "the universe cannot be younger than the oldest things in it"); Big Bang (7.11, 8.4, 8.5); cosmic microwave background (7.11, not in `prerequisites`; add `towards-the-universe-reading-starlight` or rely on the chain through 8.11); Planck satellite (5.13); WMAP is introduced here.

## Coverage
- §4 row 8.12 (topic, NASA *WMAP Overview*, leads to `8-286/age-of-the-universe`): covered at VWO level: the Hubble time, unit conversion, why gravity and dark energy change it, the matter-only ⅔ result, the historical age problems, the CMB measurement, the cross-checks.
- Left out: the Hubble tension and its effect on the age (a later development; Guth's Lecture 4 p. 13 mentions the "tension"), and white-dwarf cooling ages. Neither is needed at this level.
- No PhET sim; §4 names none.

## Where this leads
- `{ course: "8.286", lecture: 8 }` resolves to `age-of-the-universe` (and `horizon-distance`) ✓; the `why` matches pp. 11–13. Strictly, Guth derives t = ⅔/H from a ∝ t^{2/3}, which came from the Friedmann equation earlier in the lecture; "from the Friedmann equation" is fair.
- `{ course: "8.286", lecture: 19 }` resolves to `age-with-vacuum-energy` (and `luminosity-and-redshift`) ✓; see row 11 for the number.
- `towards: false` ✓.

## Licensing and AI terms
- No sentence copied. Guth's "extrapolate backwards, ask when was everything on top of each other" is rendered as "at some moment in the past they must all have been on top of each other": a short common phrase; fine. NASA sentences paraphrased.
- No figure copied: both graphs are generated from formulas.
- Worked examples and quiz questions are the page's own; Lecture 8 has no exercises, and its numbers (67.3, 9.7) are quoted as Guth's, not reused as an example.
- MIT: nothing used is marked excluded. NASA: no insignia, no "according to NASA" phrasing (row 9 for citation style). No ESO, Siyavula or forbidden source. The Krauss–Chaboyer paper is not cited on the page; the reviewer read only its arXiv abstract.
- No em dashes. "billion years" stays outside the maths after a number in maths ("$9.3$ billion years"), which the values.yaml scanner expects; fine.

## Notes
- Writer's flagged points: "Planck … 2013 results are the ones Guth quotes" (row 3: Guth quotes Planck's H₀, not its age); globular-cluster and CMB statements uncited (rows 5–6); the Krauss–Chaboyer date (row 2: the paper is from 2001, after 1998, so the "before 1998" framing should not be repeated).
- The page's explanation that slowing and speeding up "almost cancel" (age ≈ 0.95/H₀) is correct and a nice touch.

## Resolution (2026-11-20, by the page author)

Sources re-checked in the local Lecture 8 and Lecture 4 transcripts (pdftotext, pp. 12-13 and p. 12).

1. (error) Fixed: the worked example "Too young for its stars" now defines a **globular cluster** at first use ("a dense, ball-shaped swarm of very old stars") before M15; "Cross-checks" refers back to it.
2. (warning) Fixed: the history paragraph no longer places the 11.2 billion-year limit before 1998. It now says the universe was thought to be matter only before 1998 (Lecture 8 p. 12), the oldest stars were hard to fit, and Guth quotes a later study by Krauss and Chaboyer (published in 2001) giving at least 11.2 billion years (Lecture 8 p. 13). reading1 location updated.
3. (warning) Fixed: the CMB section now says Guth quotes Planck's 2013 value of the Hubble constant, 67.3 km/s/Mpc (Lecture 4 p. 12, Lecture 8 p. 12), and gives the age as about 13.8 billion years (Lecture 8 p. 13). Lecture 4 p. 12 added to reading2 location.
4. (warning) Fixed: "(Lecture 8 p. 12; the year: Lecture 4 p. 12)" added to the 67.3 sentence.
5. (warning) Fixed: the CMB is now released "about 380 000 years after the universe began" as in lesson 7.11, with "(lesson 7.11; more in lesson 8.15)"; towards-the-universe-reading-starlight added to prerequisites. calcs entry keeps NASA's 375 000 with a 2% tolerance and notes the difference.
6. (warning) Fixed: "an age of about 12 billion years for M15, one of the oldest (NASA Science, *Messier 15*)"; "up to" dropped. Guth's 12.6 was not added: it is not in calcs/values.yaml.
7. (info) Done: typical spots now "differ by only about 1 part in 100 000 (Lecture 4 p. 12)", and the two ten-thousandths of a kelvin is given as one example on NASA's page (the 2.7251/2.7249 K figures stay in the calcs entry only, since values.yaml does not list them); "final" dropped ("WMAP's results").
8. (info) Done: first plot domain [0, 17].
9. (info) Done: all three NASA citations now read "NASA Science, *…*" (calcs shown strings updated).
10. (info) No change, as suggested.
11. (info) Done: Lecture 19 why now "about 13.7 to 13.8 billion years".

Checks: `npm run calc:test -- -k how-old-is-the-universe`: 35 passed. `npm run content:check`: 0 error(s), no warning for this page. Status set to reviewed.
