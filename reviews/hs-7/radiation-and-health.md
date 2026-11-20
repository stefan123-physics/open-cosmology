---
page: content/year-0/hs-7/radiation-and-health.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/09484768966cc14934e8d96a5aa0d8ac_Hz7ouec7dKo.pdf (Lecture 30 transcript; read, pp. 4, 7-12, 16-17)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/c61eb2dc2ab817d8dc4f522044ae3c80_kzOFhSJFihI.pdf (Lecture 31 transcript; read, pp. 3-16)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/0f375736f4b670aed8da3c2d67a793ac_HfRpkTG7Iow.pdf (Lecture 32 transcript; read, pp. 13-14)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/b881c418f5303635726816792f0727c3_yYto-sIfHjo.pdf (Lecture 33 transcript; read, pp. 3, 6-9, 18-19)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/e417b62f2092c3fd3d8638822918a059_ORbfdLUl0ik.pdf (Lecture 13 transcript; read, pp. 1-2)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/7933f565faab026f4371a2ea6c613c18_G8LHGY3i01Q.pdf (Lecture 35 transcript; read, pp. 9-12)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electromagnetic-radiation/11-electromagnetic-radiation-04 (read; footer CC BY 3.0; CCBY row in docs/siyavula-licences.tsv)
  - https://www.nasa.gov/missions/analog-field-testing/why-space-radiation-matters/ (read; published 2017-04-13, updated 2025-08-22)
verdict: needs-changes
---

# Review: Radiation and health

Transcripts have no printed footer page numbers; PDF page = page. No "All rights reserved" or "Courtesy" notice in any transcript used.

Overall the health content is careful: it opens with a "physics, not medical advice" line, attributes the lethal-dose figures to accident and bomb-survivor data, presents the low-dose debate as unresolved (both LNT and its opposite unproven, as MIT L31 p. 5 says) without promoting hormesis, and leaves the scan decision to "the patient and the doctor". The findings below are about one wrong number, two statements that need softening or a source, and read-aloud of the units.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | **error** | "How harmful is a dose?", end of first paragraph | L33 pp. 6-9: nothing below ~0.25 Gy, symptoms near 1 Gy, LD50 3.5 Gy | "These doses are more than a thousand times the yearly background." | Wrong for most of them: with a background of 2 mSv, 0.25 Gy (gamma, 0.25 Sv) is ~125×, 1 Gy ~500×, 3.5 Gy ~1750×. Write "hundreds to a few thousand times the yearly background" (or "the dose that kills half the people is nearly 2000 times the yearly background"), and add a calcs entry |
| 2 | warning | Table "limit for people who work with radiation, per year: 50 mSv"; "A long flight" and pilot step | L31 p. 3: "you should never get more than about 50 millisieverts in a given year" (MIT reactor workers, US rules); L30 p. 12 the same | Stated as the limit, with no country | 50 mSv is the US limit for one year. In the EU (Directive 2013/59/Euratom, Art. 9), so also in the Netherlands, the worker limit is 20 mSv a year; ICRP recommends 20 mSv a year averaged over five years, 50 mSv in any single year. For a VWO audience, say "50 mSv in any one year (US rules; Europe uses 20 mSv a year)" or "20 to 50 mSv, depending on the country". The EU figure is from the reviewer's own knowledge; check it on EUR-Lex before citing. Recompute the pilot comparison ("well below the limit" holds for both) |
| 3 | warning | Table row "an astronaut's mission"; callout "over a mission they give astronauts doses of 50 to 2000 mSv" | NASA: "Astronauts are exposed to ionizing radiation with effective doses in the range from 50 to 2,000 mSv." No time span is given | "mission" | NASA does not say "per mission". Write "astronauts' doses (NASA gives a range of 50 to 2000 mSv)", or "over their missions"; do not add a time span NASA does not give. Same in the summary and the worked example "Years of background in one mission" (retitle e.g. "Astronaut doses in years of background") |
| 4 | warning | Callout: "Protecting crews on a journey to Mars is one of the hardest problems of space travel." | Not on the NASA page cited (it only links to a "Real Martians" article) | uncited claim | Cite a NASA page that says it, or soften to "is a major problem NASA is working on" with a source, or drop it |
| 5 | warning | "For small doses, such as a few millisieverts, the only possible effect is a small extra chance of cancer many years later." | L33 p. 6 lists delayed effects as "cancer, ... mutations, ... birth defects"; L31 p. 5: low-dose effects cannot be measured | "the only possible effect" | Too absolute for a health statement. Write "the main concern is a small extra chance of cancer many years later" (protection bodies also count possible hereditary effects, and an unborn child is more sensitive) |
| 6 | info | "X-ray images" bullet, cited to Siyavula (reading 5) | Siyavula: X-rays "penetrate the skin and bone" | "pass through skin and soft tissue more easily than through bone" | The page is more accurate than the source. Keep it, but the citation supports only "X-rays let us see inside the body"; move "(reading 5)" or say the contrast is the page's own explanation |
| 7 | info | "Neutrons... have factors in between that depend on their energy" | L30 p. 8: neutron quality factor depends on energy, higher for more energetic neutrons up to ~1-2 MeV | uncited | Add "(reading 1, p. 8)" |
| 8 | info | CT scan description ("An X-ray tube turns around the patient and a computer builds up slices") | not in any cited source | uncited | Standard and correct; acceptable without a citation. Optionally note that CT doses vary widely (L31 p. 12 gives 10 mSv for "a CT scan, or a whole body CT screening"; a head CT is much less). The page's "about 10 mSv for a scan of the body" matches the source |
| 9 | info | "A sip of hot tea gives the body more heat." | own estimate | | True: 10 g of tea cooling from 60 °C to 37 °C gives 0.010 × 4180 × 23 ≈ 960 J, more than the 210 J; even 5 g from 50 °C gives ≈ 270 J. Add this to the calcs file (with the assumed sip mass and temperatures) |
| 10 | info | Flight dose rates 0.03 and 3.7 μSv/h | L31 p. 13: ground 0.03 μSv/h; "international air travel... a factor of little more than 100"; "divide by 3.7 microsieverts" | as source | Matches the single spoken source. Typical cruise-altitude rates are a few μSv/h, so 3.7 is realistic; fine as an example. The lecturer's claim that pilots' hours are limited by radiation is rightly not repeated |
| 11 | info | "Take a background of 2 mSv a year" | L31 pp. 6-7: "a couple of millisieverts a year" | example value | Fine: clearly an example, consistent with the source |
| 12 | info | NASA "1 mSv about 10 chest X-rays" | NASA: "1 mSv of ionizing radiation is equivalent to about 10 chest x-rays." | used in worked example | Matches, and agrees with L31 p. 12 (0.1 mSv per chest X-ray) |

## Formulas and citations
- D = E/m, L30 p. 4: supported ("joules per kilogram"; "divided by the mass... equals your dose in gray"). `at="p. 4"`: add "transcript" for consistency with lesson 7.9 (info).
- H = w_R D, L30 p. 4 and p. 10: supported (p. 4 sievert = gray × quality factor; p. 10 "multiply by these radiation weighting factors").
- Weighting factors: 1 for X, gamma, beta (L30 p. 7); 20 for alpha (L30 p. 12, L31 p. 7, L32 p. 13). Correct. "True values uncertain" (L30 p. 7: "a lot of uncertainty or slop") correct.
- DNA direct/indirect, most damage indirect via water (L32 pp. 13-14): correct. Alpha tracks dense (L32 p. 13): correct.
- Fast-dividing cells most sensitive, children (L30 pp. 9-10 "infants"), mutation → cancer later (L30 p. 10): correct.
- Effective dose with tissue weights (L30 pp. 9-11): correct.
- Background: radon about half (L31 p. 5), granite and cellars (p. 5), building materials with uranium, thorium, potassium (pp. 8-10), K-40 4.4 kBq and C-14 3.7 kBq in the body (p. 12), cosmic rays rising with height (pp. 13-14), "a couple of millisieverts a year... depending on where you are" (pp. 6-7). All correct.
- Chest X-ray 0.1 mSv, CT 10 mSv (L31 p. 12); medical doses not counted because they save lives (p. 4); technetium tracers (p. 13). Correct.
- Acute effects: data from accidents and bomb survivors (L33 p. 3); < 0.25 Gy almost nothing, ~1 Gy nausea and fewer blood cells (p. 6); 3.5 Gy LD50 without treatment (p. 9); low-dose debate (pp. 18-19). Correct.
- Inverse square, 4πr² (L13 p. 1, continuing on p. 2): correct.
- Food irradiation: no neutrons (L35 p. 9), cobalt-60 gammas (pp. 11-12). Correct; quiz 3's "gamma rays of this energy do not make nuclei radioactive" agrees with L35 p. 12 (activation only above ~5 MeV).
- Radiotherapy from several directions, protons (L30 pp. 16-17); tumours divide fast (L32 p. 14). Correct.
- NASA: GCR "from hydrogen to uranium", "nearly the speed of light", "pass practically unimpeded through a typical spacecraft", "probably accelerated... by... supernova remnants", trapped particles, solar particle events, shielding by magnetic field and atmosphere: all on the page. See findings 3-4.

## Arithmetic and answer checks
Recomputed:
- 5 MeV / 13.6 eV = 3.68e5 ≈ 370 000. Correct.
- 0.012/60 = 2.0e-4 Gy = 0.20 mGy ≈ 2 chest X-rays (gamma: Gy = Sv). Correct.
- 3.5 × 60 = 210 J; 210/60 W = 3.5 s; 210/(60 × 4180) = 8.37e-4 K. Correct.
- 20 × 0.50 = 10 mSv; 1 × 0.50 = 0.50 mSv. Correct.
- 10 h × 3.7 = 37 μSv = 0.037 mSv ≈ 0.37 chest X-ray ("about a third"). 10 × 0.03 = 0.3 μSv. 3.7/0.03 = 123 ≈ 120. 800 × 3.7 = 2960 μSv ≈ 3.0 mSv. Correct.
- Plot: 10/0.5² = 40, 10/2² = 2.5, ratio 16. Technician: 120 μSv, 2.5 μSv/h × 3 = 7.5 μSv. Correct.
- 50/2 = 25 y; 2000/2 = 1000 y; 2000/0.1 = 20 000 chest X-rays. Correct.
- Quiz 0: 0.030/1.5 = 0.020 Gy (others: 0.045 multiply, 50 inverted, 0.20 wrong). Correct.
- Quiz 1: 20 × 0.2 = 4 mSv. Correct.
- Quiz 2: (1/3)² = 1/9. Correct.
- Quizzes 3, 4: marked answers right, others wrong, explanations true.
- "More than a thousand times the yearly background": wrong, see finding 1; no calcs entry.
- Tea comparison: true but no calcs entry (finding 9).

## Only earlier terms
- 13.6 eV (7.4), photon energy and ionisation threshold (7.3), alpha/beta/gamma, what stops them, radon, background, cosmic rays (7.8), half-life (7.9), EM spectrum (5.8), inverse square law for sound (5.5 `sound`, which has I = P/4πr²), MeV (7.7).
- Prerequisite `heat-and-specific-heat` (Block 4) is planned, not written (PC 1); `content:check` warns. Its list title covers specific heat, and the page gives the 4180 J per kg per K figure itself, so it counts as introduced.
- DNA, mutation, cancer, tumour, effective dose, supernova remnant: explained where used.

## Coverage
- §4 row 7.10 gives only the old OpenStax references and no PhET. The page covers ionisation damage, absorbed and equivalent dose (gray, sievert, w_R), background sources, acute versus low-dose effects, contamination versus irradiation, time-distance-shielding, and medical uses. That covers the VWO radiation-protection topics (dose, equivalent dose, weighting factor, background, irradiation/contamination, protection). The Dutch exam also uses the public dose limit (1 mSv a year from artificial sources besides medical, L31 p. 4); worth one line beside the worker limit (info).

## Where this leads
- No `leadsTo`; plan says "—". `towards: false` correct. The cosmology callout (galactic cosmic rays, supernova remnants, C-14) is correct, apart from findings 3-4.

## Licensing and AI terms
- Siyavula URL is a CCBY row in docs/siyavula-licences.tsv (line 276); footer read: CC BY 3.0. Not used as branding ("Siyavula sums it up" names the source, which is fine). The sentence "breaks the bonds of molecules as it passes and leaves ions behind, and too much of it destroys living tissue" is a close paraphrase of two short Siyavula phrases but not a copy; acceptable for CC BY with attribution.
- NASA: cited by title, URL and date read; no insignia; "(NASA)" in the table is a source tag, not "according to NASA" phrasing. Acceptable.
- No copied figures (the plot is generated); worked examples and quizzes are original.
- No forbidden source.

## Notes: read-aloud of the units (writer's question)
- In `lib/speech.ts`, `UNIT_WORDS` has no Gy, mGy, Sv, mSv, μSv, Bq or MBq. On this page the units are plain text after a maths number ("$0.020$ Gy", "$10$ mSv", "$37$ μSv"), so neither `texToSpeech` nor `speakableText` (lib/read-text.ts) expands them: the speech engine gets "Gy", "mSv", "μSv" as written. What it says depends on the engine (likely letter by letter, "G y", "m S v", and "μ" may be said as "mu" or skipped). `speechGaps` and `content:check` do not report it (checked: no speech warning for this page). Tested `texToSpeech`: `\text{MBq}` → "MBq", `\text{keV}` → "kilo-electronvolts".
- Fix (warning): add `Gy: "grays", mGy: "milligrays", Sv: "sieverts", mSv: "millisieverts", "μSv": "microsieverts", Bq: "becquerels", kBq: "kilobecquerels", MBq: "megabecquerels"` to `UNIT_WORDS`, and write the units in maths as the rest of the site does (`$0.020\ \text{Gy}$`, `$10\ \text{mSv}$`). Words like "gray" and "sievert" written in full in prose are already fine. The plot's `yLabel` "μSv per hour" is visual; its generated aria label may also say "μSv": check.
- `content:check`: only the planned-prerequisite warning and the missing review file for this page; no em dashes.

## Resolution (2026-11-20, by the page author)

1. (error) "More than a thousand times the yearly background" replaced by: with a background of about 2 mSv a year, these doses are hundreds to a few thousand times the yearly background; a quarter of a gray of gamma rays is 250 mSv, about 125 years of background, and 3.5 Gy about 1750 years. Calcs entries background-quarter-gray (125), background-one-gray (500) and background-ld50 (1750).
2. (warning) Worker limit: the EU figure was checked on EUR-Lex (Council Directive 2013/59/Euratom, read 2026-11-20 through the EU Publications Office copy of CELEX 32013L0059): Article 9(2) "20 mSv in any single year" (up to 50 mSv in special cases, averaged to 20 over five years); Article 12(2) 1 mSv a year for the public. New reference `euratom` (title and EUR-Lex URL). Table row now "20 to 50 mSv depending on the country: 20 in the EU (EU directive, Art. 9), 50 in the US (reading 2, p. 3)"; reading 2's location says the 50 mSv is the US rule. Pilot step: "well below the limit for radiation workers, 20 to 50 mSv a year" (3.0 mSv is below both). Calcs: worker-limit (US, mit) and worker-limit-eu (later-data).
3. (warning) "Per mission" dropped everywhere: table row "astronauts' doses (the range NASA gives)", callout "NASA gives the doses astronauts receive as 50 to 2000 mSv", summary "(the range NASA gives)", worked example retitled "Astronaut doses in years of background". No time span added.
4. (warning) Mars sentence dropped.
5. (warning) Now "the main concern is a small extra chance of cancer many years later (reading 4, p. 6)"; checked in the Lecture 33 transcript, p. 6 lists delayed effects "from cancer, to straight up mutations, to birth defects"; reading 4's location now names it.
6. (info) X-ray bullet: the Siyavula citation now supports only "X-rays get through the body, so they can be used to look inside it (reading 5)"; the soft tissue / bone contrast follows as the page's own explanation.
7. (info) Neutron factors: "(reading 1, p. 8)" added (checked: Lecture 30 p. 8, quality factor higher for more energetic neutrons, falling again above about 1 to 2 MeV).
8. (info) CT: left as is (matches L31 p. 12).
9. (info) Hot tea: calcs entry tea-sip-heat (10 g of tea from 60 °C to 37 °C, 0.010 x 4180 x 23 = 960 J, more than 210 J).
10-12. (info) No change needed.
Coverage note: public limit added as a table row, "1 mSv" per year not counting background and medicine (reading 2, pp. 3-4, checked: the number is on p. 4, the sentence starts on p. 3; EU directive, Art. 12), calcs entry public-limit.
Formula note: `at="p. 4"` and `at="p. 4 and p. 10"` now begin "transcript".
Read-aloud note: every dose after a number is now in maths as \text{Gy}, \text{mGy}, \text{Sv}, \text{mSv} or \text{μSv} (frontmatter with doubled backslashes), including the quiz; the unit definitions in prose are $\text{Gy}$ etc. The unit words themselves are being added to lib/speech.ts by another change. Plot labels and caption ("μSv per hour") left as text.
Other: "a couple of mSv" in the table written out as "a couple of millisieverts". No medical advice added; every new health statement is sourced.

Checks: `npm run calc:test -- -k radiation-and-health`: 44 passed. `npm run content:check`: for this page only the expected "heat-and-specific-heat is planned but not written yet" warning; the 3 errors site-wide are symbol errors on hs-7-practice (another lesson, not touched).
