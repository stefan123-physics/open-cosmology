---
page: content/year-0/hs-0/towards-the-universe-scales.mdx
reviewed: 2026-11-20
sources_read:
  - https://science.nasa.gov/universe/overview/ (read)
  - https://science.nasa.gov/earth/facts/ (read)
  - https://science.nasa.gov/moon/facts/ (read)
  - https://science.nasa.gov/sun/facts/ (read)
  - https://science.nasa.gov/universe/galaxies/ (read)
  - https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-31/ (read)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0 (read)
  - https://physics.nist.gov/cgi-bin/cuu/Value?rp (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec04/ (read; slides PDF 0efbf1fe…_MIT8_286F13_lec04.pdf, slide 1)
verdict: needs-changes
---

# Review: Towards the universe: from atoms to the observable universe

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "The expanding universe", Hubble time paragraph | (Physics; the site's own 8.286 lesson `homogeneous-expansion`, Step "The Hubble time", calls the closeness of 1/H to the age "a coincidence we will examine") | "It is close to the age of the universe, 13.8 billion years. That is no coincidence: running the expansion backwards brings all galaxies together at about that time in the past." | That 1/H and the age are of the same *size* is no coincidence; that they are this *close* (14.0 vs 13.8 Gyr) is. A matter-only universe would have age (2/3)(1/H) ≈ 9.3 Gyr; the near-equality today comes from the expansion first slowing and then speeding up. Rewrite e.g.: "That the two are of the same size is no accident: at constant speeds, running the expansion backwards brings all galaxies together about 1/H ago. The speeds have not been constant, so the real age differs; that it comes out this close is partly a coincidence of our time, which the cosmology course explains." |
| 2 | error | "The light-year and looking back in time", last paragraph | NASA media guidelines (AGENTS.md rule 11): never phrase AI output as "according to NASA" or imply NASA review | "NASA puts the age of the universe at around 13.8 billion years." | Equivalent to "according to NASA". State the fact and cite: "The universe is about 13.8 billion years old" (the cite is already the page source). The table note "the planets, Sun, stars and galaxies are NASA's figures" is a data attribution to cited pages and is acceptable, though "the Earth, Moon, Sun, Proxima and galaxy figures are from NASA's fact pages" is more exact (the Moon is not a planet; only Earth is listed). |
| 3 | error | "The expanding universe": "$c/H \approx 1.3 \times 10^{26}$ m" | n/a | The symbol $c$ is used without being defined; no Block 0 lesson introduces $c$ as the symbol for the speed of light (powers-of-ten and units-and-si say "the speed of light" in words, with $3.00 \times 10^{8}$ m/s). | Write "Light, at speed $c = 3.00 \times 10^{8}$ m/s, travelling for one Hubble time covers $c/H$ …". |
| 4 | warning | Formula "Hubble's law", `cite="guth4" at="slide 1"` | Slide 1: "$v = Hr$", with r ≡ distance to galaxy | $v = H\,d$ | Physics and slide are right. Add a short bracket: "(Guth's slide writes $r$ for the distance; this course uses $d$, as in lessons 0.4 and 0.5)". |
| 5 | warning | "A ladder of sizes", sentence before the table | n/a | "Each row is the one before it times a factor, and the factors are enormous." | Not true row by row: Earth diameter → Earth–Moon is a factor 30, Earth–Moon → Sun diameter about 3.6, Sun diameter → Earth–Sun about 107. Say "the whole ladder spans enormous factors" or "some steps are small, others enormous". |
| 6 | warning | "The light-year …", Andromeda bullet | M31 page gives only the distance (2.5 million ly); no cited source covers human origins | "… left it 2.5 million years ago, before there were any humans to see it." | The genus *Homo* is generally dated to roughly 2.3 to 2.8 million years ago, so "any humans" is debatable at 2.5 Myr (uncertain, not checked against a §2.0 source). Say "long before modern humans existed" (Homo sapiens is about 300 000 years old). |
| 7 | warning | Table, proton row: "0.84 femtometres" | NIST CODATA 2022: 8.4075 × 10⁻¹⁶ m | femtometres | The prefix femto is not in the prefix table of lesson 0.1 (it stops at pico). Add "(1 fm = $10^{-15}$ m)" or give only the metres value. |
| 8 | warning | Table, hydrogen atom row | NIST: Bohr radius 5.29177210544 × 10⁻¹¹ m | "A hydrogen atom (radius) about 0.053 nanometres", source "CODATA values from NIST" | The CODATA value is the Bohr radius, not a measured "radius of the hydrogen atom" (an atom has no sharp edge). Name it: "hydrogen atom (Bohr radius)". |
| 9 | warning | Main source | NASA "Universe: Overview" (page title "Overview - NASA Science", heading "Cosmic History") mentions 13.8 billion years ("Around 13.8 billion years ago, the universe expanded faster…"), looking back in time with light from distant galaxies, and the CMB as "the oldest light we can observe". It does not mention Hubble's law, the observable universe, a horizon or "no centre". | Page lists it as its only `source` | The page draws little from its main source; the Hubble-law material rests on guth4 slide 1 plus standard physics (correct, see below). Acceptable, but consider citing the overview explicitly where it is used (age, oldest light) and the galaxies page, which also states "formed around 13.8 billion years ago". |
| 10 | warning | Calcs coverage | AGENTS rule 7: every number in the calcs file | Not in `calcs/hs-0/towards-the-universe-scales.yaml`: person height 1.7 m (example), sunlight 500 s / 8.3 min, 1 Mpc ≈ 3.26 million ly, "almost three quarters" (28 600/40 000 = 0.72), the second check ratio 2.9 × 10⁷/107 ≈ 2.7 × 10⁵ | Add entries (all values verified correct below). |
| 11 | info | Calcs `universe-age`, `light-year`, `span` | n/a | `source: {cite: mit}` | `mit` is the NASA overview here; fine for the age, but a unit conversion and the 10⁴¹ arithmetic are not from NASA. Cite the page's own arithmetic as "(the page's own …)" without implying NASA as the source. |

## Formulas and citations
- `<Formula label="Hubble's law" tex="v = H\,d" cite="guth4" at="slide 1" />`: checked against the 8.286 Lecture 4 slides PDF. Slide 1 is "Hubble's Law, v = Hr", with v recession velocity, H Hubble's constant, r distance to galaxy. Correct location and physics; notation r → d not explained (row 4). Slide 1 carries no rights notice; the "© Source unknown. All rights reserved" notice is on slide 2 (parsec figure) and the "Photo courtesy Carnegie" on a later slide; neither is used.
- `guth4` key is in `references` with `location: slide 1`; leadsTo 8.286 Lecture 4 matches.
- `$\dfrac{1}{H} \approx 4.4 \times 10^{17}$ s ≈ 14 billion years` is inline maths, not a display formula; fine.
- NASA facts verified: Earth equatorial diameter 12,756 km (Earth facts); Moon "an average of … 384,400 kilometers away" (Moon facts); Sun "diameter is about … 1.4 million kilometers", "about … 150 million kilometers from Earth", "Proxima Centauri is 4.24 light-years away" (Sun facts); Milky Way "a disk of stars spanning more than 100,000 light-years" (Galaxies); Andromeda "2.5 million light-years" (M31 page); 13.8 billion years (Universe overview; Galaxies page).
- NIST CODATA 2022: Bohr radius 5.291 772 105 44 × 10⁻¹¹ m, proton rms charge radius 8.4075 × 10⁻¹⁶ m: match the page's 5.3 × 10⁻¹¹ and 8.4 × 10⁻¹⁶ (0.84 fm).
- H = 70 km/s/Mpc (role `example`), 13.8 billion years (`Guth 2013`, site standard) and 14 billion years (`computed`, Hubble time) are all in `calcs/values.yaml`. `content:check` reports no error for this page (only "no review file yet").

## Arithmetic and answer checks
Recomputed independently (ly = c × 365.25 d = 9.4607 × 10¹⁵ m, Mpc = 3.0857 × 10²² m):
- Proxima 4.24 ly = 4.011 × 10¹⁶ m ✓; Milky Way 10⁵ ly = 9.46 × 10²⁰ ≈ 9.5 × 10²⁰ ✓; Andromeda 2.5 × 10⁶ ly = 2.365 × 10²² ≈ 2.4 × 10²² ✓.
- Earth 1.2756 × 10⁷ → 1.28 × 10⁷ ✓; Moon 3.844 × 10⁸ ✓; Sun 1.4 × 10⁹ ✓; Earth–Sun 1.50 × 10¹¹ ✓.
- 10²⁶/10⁻¹⁵ = 10⁴¹ ✓ (with the table's actual values 1.3 × 10²⁶/8.4 × 10⁻¹⁶ = 1.5 × 10⁴¹, still "forty-one powers").
- Proxima / Sun diameter = 2.86 × 10⁷ ≈ 30 million ✓; Andromeda / Milky Way width = 25 ✓.
- Moonlight 3.84 × 10⁸ / 3.00 × 10⁸ = 1.28 ≈ 1.3 s ✓; sunlight 1.50 × 10¹¹ / 3.00 × 10⁸ = 500 s = 8.3 min ✓ (NASA Earth facts: 8.35 min).
- Scale model: Earth 9.11 × 10⁻³ m ≈ 9 mm ✓; Earth–Sun 107.1 m ✓; Proxima 2.86 × 10⁷ m ≈ 2.9 × 10⁷ m = 29 000 km ✓; Earth circumference π × 12 756 = 40 074 km ≈ 40 000 ✓; 28 600/40 000 = 0.72, "almost three quarters" ✓; ratios 2.67 × 10⁵ and 2.71 × 10⁵ ≈ 2.7 × 10⁵ ✓.
- 1 Mpc = 3.26 × 10⁶ ly (3.262 × 10⁶) ✓.
- 1/H for 70 km/s/Mpc = 4.408 × 10¹⁷ s = 13.97 × 10⁹ yr ≈ 14 billion years ✓; c/H = 1.32 × 10²⁶ m ≈ 1.3 × 10²⁶ m = 13.97 billion ly ≈ 14 ✓.
- `npm run calc:test -- -k towards`: 26 passed.
- Quiz: Q1 answer 41 ✓ (11 = 26 − 15, 26 and 390 = 26 × 15 wrong). Q2 "as it was 2.5 million years ago" ✓. Q3 107 m ✓ (1 m, 11 m, 29 000 km wrong; 29 000 km is Proxima, a deliberate distractor). Q4 ✓. Q5 ✓ (other choices wrong). Explanations true.
- Flashcards: all true; "Sun 8 minutes ago" consistent with 8.3 min. "The Hubble time … close to the age" true.

## Cosmology claims (task note 3)
- Homogeneous expansion and Hubble's law: the doubling argument (1 → 2, 3 → 6 in the same time, so three times the speed) is correct, and "it looks the same from every galaxy … there is no centre" is the standard statement, matching the site's 8.286 lesson. Correct.
- "nearly all of them move away" (1920s): correct and suitably hedged.
- Hubble time ≈ age: the numbers are right, but "That is no coincidence" is wrong as written (row 1).
- Hubble distance "a rough measure of the size of the observable universe", with "(The exact size is larger, because space kept expanding while the light was on its way; the cosmology course works it out.)": correct and well hedged (the radius of the observable universe is about 46 billion ly, about 3.3 times c/H).
- "The most distant light we can receive left its source not long after the universe began" and the horizon set by the age: correct at this level, and the NASA overview supports "oldest light we can observe".
- Summary/quiz "observable universe (about 10²⁶ m)": its radius is about 4.4 × 10²⁶ m, so 10²⁶ is the order of magnitude by the "look at the power of ten" rule of lesson 0.1 (by nearest power on a log scale it would be 10²⁷). Acceptable; info only.

## Only earlier terms
- Defined or introduced earlier: scientific notation and orders of magnitude (0.1), light-year 9.46 × 10¹⁵ m (0.2, units-and-si "Towards cosmology"), estimates (0.3), Hubble's law $v = H\,d$, $H$ = 70 km/s/Mpc and megaparsec ≈ 3.26 million ly (0.4 rearranging-formulas callout), Hubble's law as a slope (0.5), small angles (0.7), logarithms (0.9), rates of change (0.10), cosmic microwave background (0.3 callout). Lesson references "lesson 0.1" (sunlight 500 s), "lesson 0.2" (light-year), "lesson 0.3" (orders of magnitude: actually introduced in 0.1, practised in 0.3), "lessons 0.4 and 0.5" (Hubble's law) all checked ✓.
- Not introduced earlier: the symbol $c$ (row 3, error); the prefix femto (row 7, warning; the metres value is also given).
- Defined on this page before use: observable universe, horizon, homogeneous expansion, Hubble time, Hubble distance.
- Callout mentions Big Bang, dark matter as Block 8 topics: forward pointers, fine.

## Coverage
- §4 row 0.11: "from atoms to the observable universe", source NASA "Overview" (OpenStax *Astronomy* sources there ignored as instructed). Covered: ladder of sizes from proton to Hubble distance, light-year and look-back time, scale model, expansion and Hubble's law, Hubble time. Appropriate for VWO and for a block-closing "Towards the universe" lesson. Nothing required is missing; the NASA overview's cosmic history (inflation, recombination, dark energy) is rightly left to Block 8.
- No PhET sim listed for 0.11; none used ✓.

## Where this leads
- `leadsTo`: 8.286 Lecture 4 (homogeneous-expansion, cites the same slide 1). Same topic ✓. Plan row's target `8-286/homogeneous-expansion` matches.
- `towards: true` set; 0.11 is the last lesson of Block 0 (0.P is the practice set) ✓.

## Licensing and AI terms
- No sentence copied from a source. Closest: "a disk of stars spanning more than 100,000 light-years" (NASA Galaxies) vs the table entry "The Milky Way's disk of stars | more than 100 000 light-years": a short standard phrase, fine.
- No figures; no diagrams at all. Scale-model worked example (Sun 1.0 m ball) is a classic idea but not taken from any cited page; quiz questions are original.
- MIT: only slide 1 (CC BY-NC-SA) used; the "All rights reserved" slide 2 and the Carnegie photo are not used ✓.
- NASA: no insignia ✓; "NASA puts the age of the universe at …" is "according to NASA" phrasing (row 2, error).
- No ESO text; no Siyavula branding (Siyavula not cited) ✓. NIST used only for two looked-up values ✓.
- No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used ✓.

## Notes
- The step from km/s/Mpc to 4.4 × 10¹⁷ s is not shown; a VWO reader has all the pieces (Mpc = 3.26 × 10⁶ ly, ly in m) and a one-line conversion would make it checkable. Info.
- "The nearest star, Proxima Centauri": standard wording meaning the nearest star after the Sun; could say "the nearest star after the Sun". Info.

## Resolution (2026-11-20, by the page author)

- 1 (error, "no coincidence"): the paragraph now says that the Hubble time and the age are expected to be of the same size, and that their close agreement today is partly a coincidence of our era, examined in the cosmology course.
- 2 (error, NASA phrasing): the sentence now states the fact ("The universe is around 13.8 billion years old"); the NASA page stays the cited source.
- 3 (error, c): c is now introduced as "the usual symbol for the speed of light".
- 4: the text now notes that Guth writes r for the distance (symbol meaning added).
- 5: the table introduction now says the lengths grow "often by huge factors".
- 6: "modern humans".
- 7: femtometre explained in the table (1 fm = 10⁻¹⁵ m).
- 8: the table row now says "the Bohr radius".
- 9: no change: Hubble's law and the expansion rest on guth4 and standard physics, as the reviewer notes.
- 10: new calcs entries `person`, `sunlight`, `megaparsec`, `three-quarters`, `model-ratio-2`.
- Info: the `light-year` and `span` entries now say the arithmetic is not in the NASA overview.

`npm run calc:test` and `npm run content:check` pass.
