---
page: content/year-0/hs-1/towards-the-universe-light-travel-time.mdx
reviewed: 2026-11-20
sources_read:
  - https://science.nasa.gov/universe/overview/ (read)
  - https://spaceplace.nasa.gov/light-year/en/ (read)
  - https://www.nasa.gov/missions/tech-demonstration/space-communications-7-things-you-need-to-know/ (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read)
  - https://physics.nist.gov/cgi-bin/cuu/Value?c (read)
  - https://science.nasa.gov/moon/facts/ (read)
  - https://science.nasa.gov/sun/facts/ (read)
  - https://science.nasa.gov/mars/facts/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read; downloaded to a scratch folder outside the repo, printed footers checked page by page)
verdict: needs-changes
---

# Review: Towards the universe: light-travel time and looking back in time

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Light-seconds, light-minutes and light-years", Formula "The light-year" and the sentence after it | (arithmetic) $3.00 \times 10^{8} \times 3.156 \times 10^{7} = 9.468 \times 10^{15}$, which rounds to $9.47 \times 10^{15}$ m; only the exact $c$ (or 2.998 × 10⁸ m/s, as lesson 0.2 uses) gives 9.46 × 10¹⁵ m | The multiplication written with $3.00 \times 10^{8}$ m/s "gives $9.46 \times 10^{15}$ m" | Write $2.998 \times 10^{8}$ m/s in the formula (as lesson 0.2 does), or say "with the exact value of $c$ this gives 9.46 × 10¹⁵ m". The calcs entry `light-year-table` hides the mismatch with `expected: 9.47e15` and a 0.2% tolerance while the page shows 9.46; change it with the page. |
| 2 | error | "The oldest light", second and third sentences | No earlier lesson introduces electric charge, electrons or neutral atoms (Block 6 and Block 7; lessons 1.4 and 1.8 only mention "charged particle" and "electron" as forward pointers) | "a hot, dense gas of charged particles", "atomic nuclei to capture electrons and form neutral atoms" used as if known | Add a short gloss in brackets, e.g. "(electrons are the light, negatively charged particles in the outer part of every atom; Blocks 6 and 7)", and say "atoms with no net charge" for "neutral atoms". Atom and nucleus themselves were met in lessons 0.1 and 0.11. |
| 3 | warning | "The oldest light" | NASA overview, Recombination: "the universe had cooled enough that atomic nuclei could capture electrons"; "for the first time, light could freely travel over great distances" | "the universe had cooled enough for atomic nuclei to capture electrons and form neutral atoms. Light could then travel freely across great distances for the first time." | Two near-verbatim sentences in a row (NASA text is public domain, so no licence issue, but Writing rule 1 asks for own words). Reword, e.g. "electrons could now stay attached to nuclei, and with nothing free to scatter it, light could cross the universe". |
| 4 | warning | "Looking back in time", second paragraph; flashcard "Looking back in time" | (physics) "N light-years away = seen N years ago" holds only while the distance hardly changes during the trip; for very distant objects the present distance is larger than the light-travel time, as the page itself says in "A horizon to what we can see" | "A distance in light-years **is** a look-back time in years", without a limit | Add "for objects in our own galaxy and nearby galaxies; for the most distant galaxies the expansion changes this (see below)". The flashcard should carry the same limit. |
| 5 | warning | `references.guth8` location "pp. 17–20"; calcs `horizon-matter` "pp. 19–20" | Transcript printed footers: the horizon idea and the definition ("present proper distance of the most distant objects that can be seen") start on p. 16 and finish at the top of p. 17; the result $3ct_0$ is on p. 19; $2c/H_0$ runs from p. 19 to p. 20 | pp. 17–20, and pp. 19–20 for the factor 3 | Use "pp. 16–20" for the reference (definition p. 16–17, result p. 19), and "p. 19" for the factor 3 in the calcs file. |
| 6 | info | "Mars" paragraph | NASA article: closest ~35 million miles, delay "about four minutes"; farthest ~250 million miles, "around 24 minutes"; one-way (the body text says "between four and 24 minutes", "four to 24 minutes" is the photo caption) | Computes 3.1 and 22 minutes from the distances and says the article rounds to "four to 24 minutes" | Presented honestly: the page gives NASA's distances, its own division, and NASA's rounded range in quotes with the reason they differ. Fine as is. Optionally: "rounds up". |
| 7 | info | "The Moon" | NASA: average 384 400 km | "every answer came at least 2.6 s after the question" | 2.6 s is the round trip at the average distance; at perigee (about 363 000 km) it is 2.4 s. "about 2.6 s" is safer than "at least". |

## Formulas and citations
- `Δx = v Δt` (cite reading3, "Motion at constant velocity (v = Δx/Δt, rearranged)"): Siyavula 21.6 "Description of motion" has the subsection "Motion at constant velocity" with $v = \Delta\vec x/\Delta t$; the rearrangement is the page's own and is said to be. Matches lesson 1.2, which gives the equivalent $x_f = x_i + v\,\Delta t$ from the same section. Correct.
- `d = c t ⇔ t = d/c` (cite reading3, "with v = c"): the substitution $v = c$ is the page's step, stated. Correct.
- "The light-year" (cite reading1, "opening paragraphs, definition in words"): NASA Space Place says "the distance light travels in one Earth year", about 9 trillion km. Supported; the arithmetic is the page's own (see finding 1).
- `nist-c`: CODATA 2022, 299 792 458 m/s, exact. Matches.
- `nasa-moon` 384 400 km, `nasa-sun` 150 million km, `nasa-mars` 228 million km and "13 minutes" for sunlight: all match the fact pages ("Size and Distance").
- `reading2` (Space Communications, section 6 "Latency"): 35 and 250 million miles match.
- `mit` (NASA universe overview): 13.8 billion years ("Cosmic Inflation" section) and 380 000 years with nuclei capturing electrons and light travelling freely ("Recombination") match. The overview says nothing about a horizon or the observable universe; the page does not cite it for those, correctly.
- `guth8`: the $3ct_0$ horizon distance for a flat matter-dominated universe is on p. 19, with Guth's remark that the naive answer would be $ct_0$; the page states this correctly and adds, correctly, that the real universe gives a different factor (about 46 / 13.8 ≈ 3.4 with present parameters; not a page number, standard). Location: finding 5.
- Callout claims: Lecture 8 defines the horizon distance as the present distance of the farthest objects whose light could reach us and traces a light ray in comoving coordinates (pp. 16–19): correct. "Later it shows that ... regions of the CMB on opposite sides of the sky ... the horizon problem ... one of the reasons for inflation": correct (8.286 later lectures; the site's `horizon-problem` page). "(The cosmology course estimates the 380 000 years from the temperature of the CMB.)": correct, see the 8.286 page `temperature-and-decoupling` (Guth's estimate about 380 000 years).
- All sources are from §2.0 (NASA, Siyavula online page, NIST, MIT OCW). No forbidden source cited or used.

## Arithmetic and answer checks
Recomputed independently (Python), and `calc:test` for this page passes (39 entries).
- c to 3 s.f. 3.00 × 10⁸ m/s; 3 × 10⁵ km / 4.0 × 10⁴ km = 7.5 times round the Earth ("more than seven"): correct.
- Year 365.25 × 86 400 = 3.15576 × 10⁷ s → 3.156 × 10⁷: correct. Light-year: exact c × Julian year = 9.4607 × 10¹⁵ m; with 3.00 × 10⁸ m/s it is 9.468 × 10¹⁵ m → finding 1.
- Table: 3.00 × 10⁸, 1.80 × 10¹⁰, 1.08 × 10¹² m: correct.
- Moon 3.844 × 10⁸ / 3.00 × 10⁸ = 1.281 s; round trip 2.56 ≈ 2.6 s: correct.
- Sun 1.50 × 10¹¹ / 3.00 × 10⁸ = 500 s = 8.33 min: correct (NASA Space Place also says 8.3 minutes).
- Mars: 35 × 10⁶ mi = 56.3 × 10⁶ km; 250 × 10⁶ mi = 402 × 10⁶ km. 5.6 × 10¹⁰ / 3 × 10⁸ = 187 s ≈ 190 s (3.1 min); 4.0 × 10¹¹ / 3 × 10⁸ = 1333 s ≈ 1300 s (22.2 min; 22.4 min from the unrounded 402 million km). Sunlight to Mars 2.28 × 10¹¹ / 3 × 10⁸ = 760 s = 12.7 ≈ 13 min: correct.
- Plot: `d*1e9/3e8/60` with d in million km gives minutes; points (56, 3.1), (150, 8.3), (400, 22.2) lie on the curve. Caption correct.
- Rover: 600 s one way; 1200 s until the command arrives; 0.040 × 1200 = 48 m; reply at 1800 s = 30 min; a rover 30 m from the rock hits it after 750 s, 450 s before the command arrives: correct.
- Star: 650 × 9.46 × 10¹⁵ = 6.149 × 10¹⁸ ≈ 6.15 × 10¹⁸ m; 6.15 × 10¹⁸ / 3 × 10⁸ = 2.05 × 10¹⁰ s; / 3.156 × 10⁷ = 649.5 ≈ 650 years; 2026 − 650 = 1376, 14th century: correct (the century is not in the calcs file; info). 1300 light-years for the second star: correct.
- CMB: 3.8 × 10⁵ / 1.38 × 10¹⁰ = 2.75 × 10⁻⁵ ≈ 2.8 × 10⁻⁵ ≈ 0.003%: correct.
- Naive horizon 13.8 × 10⁹ × 9.46 × 10¹⁵ = 1.305 × 10²⁶ ≈ 1.31 × 10²⁶ m: correct.
- Quiz 1: 6.0 × 10¹¹ / 3.00 × 10⁸ = 2000 s ≈ 33 min, answer index 2 correct; 0.5 s, 200 s and 1.8 × 10²⁰ s are wrong (the last is d × c, as the explanation says).
- Quiz 2 (index 1), 3 (index 1), 4 (index 1, "between about 3 and 22 minutes" consistent with the page), 5 (index 1): marked answers right, other choices wrong, explanations true.
- Flashcards: all true; "Looking back in time" needs the limit of finding 4.
- Age 13.8 billion years is in `calcs/values.yaml` (role "Guth 2013: Planck 2013, rounded (the site's standard figure)"). `content:check` reports no error for this page (only "no review file yet").

## Only earlier terms
- Speed of light $c$: lesson 0.1 (`powers-of-ten`) and 0.11. Light-year: defined in lesson 0.2 (`units-and-si`, with 2.998 × 10⁸ m/s) and used in 0.11; this lesson redefines it fully, so lesson 5.13 (`towards-the-universe-redshift`, which says "a light-year is ... lesson 1.11" and lists this page as a prerequisite) is well served.
- Constant velocity, $\Delta x = v\,\Delta t$: lesson 1.2. Significant figures: 0.3. Observable universe, expansion, look-back: 0.11. Big Bang: 0.1. CMB as "faint glow left over from the early universe": 0.3. Temperature: 0.2. Atom and nucleus: 0.1 and 0.11.
- Radio waves, microwaves, X-rays as forms of light: not introduced earlier, but the page says "Block 5 explains this" and only uses the fact that they travel at $c$. Acceptable as a flagged forward pointer (info).
- **Not introduced earlier:** "charged particles", "electrons", "neutral atoms" (finding 2). "Scattered" is used with the fog comparison, which explains it well enough (info).
- Horizon in the sailing sense is everyday language; "proper distance" is not used. "Comoving" is not used. Good.

## Coverage
- §4 row 1.11: "light-travel time and looking back in time", leads to `8-286/horizon-distance`. Covered fully: $c$ exact and rounded, $t = d/c$, light-second/minute/hour/year, solar-system delays, look-back time, the CMB as the oldest light, and the horizon.
- Deeper than 0.11? Yes, though with some overlap. 0.11 already gave the Moon (1.3 s), the Sun (8.3 min), Andromeda's look-back time, the 13.8-billion-year horizon and "the exact size is larger because space kept expanding". New here: the exactness of $c$ and the definition of the metre, the light-time units table, Mars delays with a graph, the two-way rover problem (a genuine kinematics application combining delays and $\Delta x = v\Delta t$), the "650 light-years" example with a unit check, recombination and the CMB, and the factor 3 of the matter-only horizon. The Moon and Sun numbers are repeated by the same route; a sentence pointing back to 0.11 ("you met these in lesson 0.11; now with the formula") would make the repetition deliberate (info). The naive horizon 1.31 × 10²⁶ m equals 0.11's Hubble distance c/H ≈ 1.3 × 10²⁶ m; noting that link would tie the two lessons together (info).
- Nothing at VWO level is missing for this topic.

## Where this leads
- `leadsTo`: 8.286 Lecture 8, which is the site's page `horizon-distance` (lecture 8): same topic, matches §4. Correct.
- `towards: true` is set; this is the block's last lesson (1.11). Cosmology claims (CMB at about 380 000 years, oldest observable light, horizon farther than 13.8 billion light-years, factor 3 in the flat matter model, horizon problem motivating inflation) are correct.
- Optional (info): a second `leadsTo` to 8.286 `temperature-and-decoupling`, which the page itself points to for the 380 000-year estimate.

## Licensing and AI terms
- No copied sentences from Siyavula, MIT or NASA Space Place. Two near-verbatim sentences from the NASA overview (finding 3); NASA text is public domain, so this is a writing-rule matter, not a licence breach.
- No figures: the only graph is a generated `<Plot>` from $t = d/c$.
- Worked examples (Mars rover at 180 million km and 4.0 cm/s; star at 650 light-years) and quiz questions are original; Siyavula 21.6's worked examples are all graph readings (examples 3–6), and NASA Space Place uses the Sun, Proxima, Andromeda and GN-z11, none reused as exercises.
- No Siyavula logo or "Everything Science" branding; Siyavula appears only as a cited source title.
- MIT transcript: no "rights reserved" or "courtesy" notice (grep on the extracted text).
- NASA: no insignia. The page says "NASA's article on space communications gives ..." and "NASA's overview of cosmic history describes what changed": these attribute specific figures and facts to a named NASA page, which is citation by title, not "according to NASA" framing of AI output or implied NASA review. Acceptable (info: "The article *Space Communications: 7 Things You Need to Know* gives ..." would follow the "cite by title" rule more literally).
- ESO not used, so no AI credit needed. No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used; the old OpenStax sources in the §4 row were not opened.

## Notes
- Calcs file: complete for the numbers on the page except the "14th century" (info). `horizon-matter` would better have `origin` reflecting Guth's lecture rather than `page-own` (info). `light-year-table` must change with finding 1.
- The transcript's printed page numbers equal the PDF page numbers (checked pages 16–22).

## Resolution (2026-11-20, by the page author)
1. The formula "The light-year" now uses $2.998 \times 10^{8}$ m/s (as lesson 0.2), which gives 9.46 × 10¹⁵ m; a bracketed note says the rounded 3.00 × 10⁸ m/s would give 9.47 × 10¹⁵ m. Calcs `light-year-table` now computes 2.998e8 × 3.156e7 with expected 9.46e15 m and the default tolerance from the printed digits (the 0.2% tolerance is gone); new entry `light-year-rounded-c` tests the 9.47 × 10¹⁵ m of the note.
2. "Charged particles" is glossed "(particles carrying electric charge, met properly in Block 6)"; "electrons" is glossed "(the light, negatively charged particles in the outer part of every atom; Blocks 6 and 7)"; "neutral atoms" is now "whole atoms with no net charge".
3. Both sentences rewritten in the page's own words: the gas "had become cool enough for each atomic nucleus to hold on to its electrons ... With no free charged particles left to bounce off, light from that moment on could cross the universe unhindered."
4. "Looking back in time" now limits the rule to stars in our galaxy and nearby galaxies and says why it breaks down for the most distant galaxies (pointing to the horizon section); the flashcard carries the same limit.
5. `references.guth8` location is now "pp. 16–20"; calcs `horizon-matter` cites "p. 19" (and its origin is now `mit`).
6. "rounds the range up to" (optional wording taken).
7. "at least" changed to "about 2.6 s".
Notes (info): the "14th century" is now "seen from 2026, around the year 1376, in the 14th century", with calcs entry `star-year-left` (2026 − 650); a sentence points back to lesson 0.11 for the Moon and Sun figures; a new sentence says the naive horizon 1.31 × 10²⁶ m is the same size as the Hubble distance of lesson 0.11 (calcs `hubble-distance-match`; written without $c/H$ to avoid a new symbol H on this page); the NASA pages are now named by title (*Space Communications: 7 Things You Need to Know*, *Universe: Overview*). Not done: a second `leadsTo` to `temperature-and-decoupling` (optional; the single leadsTo matches the §4 plan row).
