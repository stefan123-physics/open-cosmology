---
page: content/year-0/hs-0/powers-of-ten.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-02 (read)
  - https://www.siyavula.com/read/za/mathematics/grade-10/exponents/02-exponents-01 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/the-atom/04-the-atom-03 (read)
  - https://science.nasa.gov/sun/facts/ (read)
  - content/year-4/8.286/flatness-problem.mdx (this site's own lesson, read for the callout)
verdict: needs-changes
---

# Review: Powers of ten and scientific notation

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Intro, 2nd paragraph: "in cosmology, where distances run to 26 digits" | (no source; not in the calcs file) | A cosmological distance of 26 digits | The radius of the observable universe is about 4.4 × 10²⁶ m, a 27-digit number; the Hubble length (about 1.3 × 10²⁶ m) is also 27 digits. "26 digits" confuses the exponent 26 with the number of digits. Write "distances reach about 10²⁶ metres" (or "27 digits") and add the number to the calcs file with its source. |
| 2 | error | calcs/hs-0/powers-of-ten.yaml, entry `flatness` | `cite: mit` is the page's `source.url`, Siyavula Physical Sciences 1.2 Mathematical skills, which says nothing about the flatness problem | `source: {cite: mit, at: 'see content/year-4/8.286/flatness-problem.mdx'}` | Cite what actually supports 10⁻¹⁸: Guth's 8.286 Lecture 21 (as the 8.286 page does, transcript p. 18, board), e.g. add it under `references` on this page and cite that key, or mark the entry `kind: fact` with a `ref` to that reference. A `cite: mit` pointing at Siyavula is a wrong citation. |
| 3 | warning | Formula "Scientific notation" (`cite="mit"`, Sec. 1.2) | Siyavula's general form says N is "a decimal number between 0 and 10", then (next paragraph) "a number between 1 and 10"; its Worked example 1 ends with a negative result, −2.5743 × 10⁻²⁵ | $1 \le a < 10$ | The page's form is the correct one, but it differs from the source's own wording without saying so, and it excludes negative numbers. Add "for a negative number, the same with a minus sign in front (1 ≤ \|a\| < 10)" or a short note. |
| 4 | warning | "Orders of magnitude": "the power of ten nearest to it … 3600 s … of order 10³ seconds" | (no cited source; Siyavula 1.2 does not discuss order of magnitude) | Order of magnitude = nearest power of ten; 3600 s is of order 10³ | "Nearest" is ambiguous here: on the usual logarithmic convention 3.6 > √10 ≈ 3.16, so 3600 rounds to 10⁴; only on a linear reading (or "the exponent in scientific notation") is it 10³. Pick an example well clear of 3.16 (e.g. 2000 s or 1500 s), or define order of magnitude as the exponent n of a × 10ⁿ. |
| 5 | warning | "Orders of magnitude": "the atom is about ten thousand times wider than its nucleus" | Siyavula 4.3: soccer stadium vs pea (analogy only, no ratio) | Ratio 10⁴ from stadium 10² m / pea 10⁻² m | The arithmetic is right, but the real ratio is 10⁴ to 10⁵ (atom about 10⁻¹⁰ m, nucleus 10⁻¹⁵ to 10⁻¹⁴ m; for hydrogen about 6 × 10⁴). Say "tens of thousands of times" or "about 10⁴ to 10⁵", or present the 10⁴ explicitly as what the analogy gives. |
| 6 | warning | Intro: "A grain of fine dust is perhaps 0.000 01 metres across"; list values 10² = 100, 10³ = 1000, 10⁻¹ = 0.1, 10⁻² = 0.01; 10²×10³ = 10⁵, 10⁵/10² = 10³ | — | Numbers shown on the page | Not in the calcs file (rule: every number in the calcs file). The dust size is plausible (10 µm) but should be a calcs entry (`kind: fact` or page-own). |
| 7 | warning | Callout "Towards cosmology" | 8.286 flatness-problem: Ω = ρ/ρ_c had to equal 1 to ~18 decimal places at t = 1 s | "its density one second after the Big Bang had to match a particular critical value to about 18 decimal places" | Correct in substance. But "density", "critical value", "Big Bang" are not introduced (density is Lesson 4.1, the Big Bang 8.13). Add a short gloss, e.g. "its density (mass per volume) had to match one special value, the critical density, …". |
| 8 | warning | Worked example "How old is sunlight?" | — | "At a steady speed, the time taken is the distance divided by the speed"; unit m/s | Speed and t = d/v are Lesson 1.2; m/s and SI units are Lesson 0.2 (next lesson). Everyday knowledge for most readers, but a complete beginner meets them here first. One clause ("speed: metres travelled per second") would do. |
| 9 | info | "Orders of magnitude": stadium/pea | Siyavula: "If the whole atom is as big as a soccer stadium, the nucleus is only the size of a pea in the middle of the stadium" | "if an atom were as big as a sports stadium, its nucleus would be about the size of a pea" | Paraphrased and attributed in the text ("Siyavula's chapter on the atom"); fine. "Atom" and "nucleus" come before Lesson 7.1 but are everyday words. |
| 10 | info | "The rules for exponents" | Siyavula 2.2 lists five laws, including (a/b)ⁿ = aⁿ/bⁿ, for a > 0, b > 0 and m, n real | Four laws, "any positive base a and b" | Omitting the quotient-power law is fine ("a few rules"). The word "base" is used ("Powers with the same base") without being defined; add "(the number being raised to a power, here 10)". |

## Formulas and citations
- **Laws of exponents** (`reading1`, "Sec. 2.2, list of exponent laws"): matches Siyavula Mathematics Gr 10, 2.2 Revision of exponent laws, exactly (aᵐaⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, (ab)ⁿ = aⁿbⁿ; a, b > 0). Correct. The page's use of them with negative exponents is covered by Siyavula's "m, n ∈ ℝ".
- **Scientific notation** (`mit`, "Sec. 1.2, Scientific notation"): supported, with the difference in finding 3. Siyavula writes N and "exponent … integer"; page uses a and "whole number", equivalent.
- **Multiplying and dividing** (`mit`, "Sec. 1.2, Scientific notation, Worked example 2"): Siyavula WE2 states the rule in words ("add the exponents and multiply the N terms", "subtract the exponents and divide the N terms") rather than as this general formula; the page's formula is a correct generalisation and the location is right.
- **10⁰ = 1 and 10⁻ⁿ = 1/10ⁿ**: not in Siyavula 2.2's list (only in its exercises, e.g. 16⁰ = 1); the page derives them from the pattern and from the quotient law. Standard and correct.
- **Adding with equal powers**: supported by Siyavula 1.2 Worked example 1 ("we must make all the exponents the same").
- **Prefixes table**: all twelve values match Siyavula 1.3 Table 1.3. "The ones from giga down to nano are the ones to know by heart" matches Siyavula's bold set exactly (giga, mega, kilo, hecto, deca, deci, centi, milli, micro, nano; checked in the page's HTML). "No space or dot" matches Siyavula's "no space and no dot between the prefix and the symbol for the unit". The capital M / small m remark matches Siyavula's example.
- **NASA value**: "The Sun is about 93 million miles (150 million kilometers) from Earth" on Sun: Facts, section "Size and Distance". Supports 1.50 × 10¹¹ m. The `nasa-sun` reference is in frontmatter but not cited inline; the text names it only as "NASA's rounded value" (see Licensing).
- **c = 299 792 458 m/s exactly**: correct (SI definition of the metre); Siyavula 1.2 quotes the same digits and rounds to 3.00 × 10⁸, as the page does.
- **Decimal comma note**: correct; Siyavula uses commas (3,24 × 10³).
- **Calculator note**: typing 1.50 × 10 EXP 11 gives 1.5 × 10¹², ten times too big, as stated. Correct.

## Arithmetic and answer checks
All recomputed independently:
- 10⁶ = 1 000 000; 10⁻³ = 0.001; 10⁴ × 10⁻⁶ = 10⁻²: correct.
- 52 000 000 = 5.2 × 10⁷ (7 places); 0.000 078 = 7.8 × 10⁻⁵ (5 places); 9.1 × 10⁻³ = 0.0091: correct.
- (3.0 × 10⁴)(5.0 × 10²) = 1.5 × 10⁷: correct.
- 1.50 × 10¹¹ / 3.00 × 10⁸ = 500 s = 8.33 min: correct.
- 4.2 × 10⁵ + 3.1 × 10⁴ = 4.51 × 10⁵: correct.
- 2.0 × 10² / 5.0 × 10⁸ = 4 × 10⁻⁷, called "a millionth": right to an order of magnitude (it is nearer half a millionth). The calcs entry `sum-small-term` uses tolerance 1e-6 on an expected value of 4e-7, so it would pass almost any small number; consider "less than a millionth" on the page and a meaningful tolerance.
- 3600 s = 3.6 × 10³ s: correct (order of magnitude: see finding 4).
- 10²/10⁻² = 10⁴; 10⁶/10⁻³ = 10⁹; 32 km = 3.2 × 10⁴ m; 4.5 ms = 4.5 × 10⁻³ s: correct.
- Quiz 1: 0.000 36 = 3.6 × 10⁻⁴ (B). A (36 × 10⁻⁵) and D (0.36 × 10⁻³) have the right value but are not in scientific notation; C is wrong. Explanation true.
- Quiz 2: 10⁵ × 10⁻⁸ = 10⁻³ (C). Others wrong (10⁻⁴⁰ multiplies exponents, 10¹³ subtracts the wrong way). Correct.
- Quiz 3: 2.0 × 10¹⁰ (B). A (20 × 10⁹) has the right value but is not in scientific notation, which the question asks for; the explanation shows this implicitly. Fine (could say so explicitly, as quiz 1 does).
- Quiz 4: 6.3 × 10⁴ = 63 000 (C). D (6.03 × 10⁴) is the classic slip; A and B wrong. Correct.
- Quiz 5: 2.5 µm = 2.5 × 10⁻⁶ m (B). Correct.
- Flashcards: all five true.
- Callout: 10⁻¹⁸ at t = 1 s agrees with the 8.286 flatness page (|Ω − 1| ≲ 10⁻¹⁸ from |Ω₀ − 1| < 0.01; 1.5 × 10⁻¹⁸).
- `npm run calc:test -- -k powers`: 44 passed (includes this file's 24 entries).
- Not in calcs: "26 digits" (finding 1), dust 0.000 01 m and several small list values (finding 6).

## Only earlier terms
This is lesson 0.1, so every term must be introduced on the page or be everyday language.
- Introduced on the page: power of ten, exponent, scientific notation, order of magnitude, prefix: all defined in bold before use.
- **base** (exponent rules): used, not defined (finding 10). Warning.
- **metre, second, m/s, km, kilogram**: SI units are the next lesson, 0.2 (planned, not yet written; its §4 row "Units and the SI system" covers them). The page says so ("the subject of the next lesson"). Everyday words; acceptable, though m/s in the worked example leans on 0.2.
- **speed, time = distance / speed**: Lesson 1.2 (planned). Warning (finding 8).
- **atom, nucleus**: Lesson 7.1 (planned). Everyday words; info.
- **density, critical value, Big Bang, flatness problem** (callout): density is 4.1, the Big Bang 8.13; the callout frames them as what "you will meet" later, but "density" and "critical value" carry the claim. Warning (finding 7).
- Letters a, b, m, n as general numbers in the exponent laws: algebra is assumed rather than taught (0.4 is rearranging formulas). Acceptable at VWO entry level; info.

## Coverage
- §4 row 0.1: "Powers of ten and scientific notation", no PhET, leads to `8-01/vectors`. Covered fully: powers of ten including zero and negative exponents, exponent laws, conversion both ways, multiply/divide, add/subtract, order of magnitude, prefixes, calculator entry. This is at or above VWO level.
- Prefixes overlap with 0.2 (Units and the SI system); fine, but 0.2 should not repeat the table at length.
- Rounding (Siyavula 1.2's first subsection) and significant figures are left out; they belong to 0.3 (Significant figures and estimates). Does not matter here.
- Negative numbers in scientific notation are not covered (finding 3); a small gap.

## Where this leads
- `8.01` lecture 0: exists (`content/year-1/8.01/vectors.mdx`, "Vectors", lecture 0) and matches §4's `8-01/vectors`. The topic link is loose (powers of ten vs vectors), but the "why" is honest about it. Info.
- `8.286` lecture 21: exists (`flatness-problem.mdx`, lecture 21); the 10⁻¹⁸ claim matches it.
- `towards: false`: correct, 0.1 is not the block's last lesson (0.11 is).

## Licensing and AI terms
- No copied sentences found. Closest wording: the stadium/pea analogy (paraphrased and attributed, finding 9) and the prefix spacing rule (reworded). Siyavula's "In science one often needs to work with very large or very small numbers" vs the page's "Physics deals with numbers of every size": not copied.
- No figures on the page.
- Worked examples and quiz questions are the page's own. They follow Siyavula's patterns (Siyavula: 5.1 × 10³ + 4.2 × 10⁴ = 4.71 × 10⁴ and 5.1 × 10³ × 4.2 × 10⁴ = 2.142 × 10⁸; page: 4.2 × 10⁵ + 3.1 × 10⁴ and 3.0 × 10⁴ × 5.0 × 10²), with different numbers. Siyavula's own speed-of-light rounding example is not reused as an exercise. Fine.
- No Siyavula logo or brand, and no "Everything Science"/"Everything Maths" anywhere on the page; "Siyavula" appears only as attribution. Fine.
- No MIT material used.
- NASA: no insignia. "The distance is NASA's rounded value of 150 million kilometres" attributes a number to a NASA page, which is citing, not "according to NASA" phrasing of AI output. Acceptable; "the rounded value on NASA's Sun facts page" would be safer and clearer. Info.
- No ESO text.
- No forbidden source cited or used (no OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs). The OpenStax sources in the §4 row were not opened.

## Notes
- The page's content is accurate and well within its sources; the two errors are the unsourced "26 digits" (wrong by one digit) and the wrong `cite: mit` in the calcs entry for the flatness number.
- Siyavula 1.3 itself has a slip (3 × 10⁻⁷ mol written as "0,3 × 10⁻⁶ μmol"); the page does not repeat it.
- Uncertain: whether the site's convention for "order of magnitude" is meant to be the linear or the logarithmic nearest power; finding 4 asks only for an unambiguous example or definition.

## Resolution (2026-11-20, by the page author)

- 1 (error, "26 digits"): the introduction now says distances in metres "run to more than twenty digits".
- 2 (error, flatness citation): added the reference `guth21` (8.286 Lecture 21 transcript, p. 18) to the page; the calcs entry `flatness` now cites it.
- 3: added a bracketed note that Siyavula's general description says "between 0 and 10" while its method and the usual standard use 1 ≤ a < 10, and an example with a negative number (−4 200 = −4.2 × 10³, calcs `negative-example`).
- 4: order of magnitude is now defined as roughly the nearest power of ten, found from the power in scientific notation, with a note that some round up above about 3; the example is now a 6-hour school day, 2.16 × 10⁴ s (calcs `school-day`).
- 5: the stadium-and-pea ratio is now "in this picture", with a note that measured ratios lie between about 10⁴ and 10⁵.
- 6: added calcs entries `light-per-second` and `dust-grain` for the numbers in the introduction.
- 7: the cosmology callout now explains "Big Bang" and "density" in a sentence.
- 8: the sunlight example now says what m/s means and that units are the next lesson.
- 9: "base" is now defined where powers of ten are introduced.
- 10: the page now says "less than a millionth"; the `sum-small-term` entry has no tolerance override.
- Info (NASA phrasing): now "the rounded value of 150 million kilometres on NASA's Sun facts page".

`npm run calc:test` (27 entries for this page) and `npm run content:check` pass.
