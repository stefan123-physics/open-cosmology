---
page: content/year-0/hs-0/significant-figures-and-estimates.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-02 (read; Exercises 1.1 and 1.2 are interactive links whose questions are not on the page and could not be read)
  - https://www.siyavula.com/read/za/mathematics/grade-10/algebraic-expressions/01-algebraic-expressions-03 (read)
  - https://ocw.mit.edu/courses/6-055j-the-art-of-approximation-in-science-and-engineering-spring-2008/resources/book/ (read; resource page, CC BY-NC-SA 4.0 footer)
  - https://ocw.mit.edu/courses/6-055j-the-art-of-approximation-in-science-and-engineering-spring-2008/311773ba1f658167d87a65f7cd05c045_book.pdf (read via text extract; front-matter table, Ch. 1, Part 1, Ch. 2 Secs. 2.1-2.5, pp. 7-15)
  - https://arxiv.org/abs/0911.1955 (read: abstract page only; the ApJ text was not opened)
  - content/year-0/hs-0/powers-of-ten.mdx, content/year-0/hs-0/units-and-si.mdx (prerequisites, read for earlier terms)
  - content/year-3/8.044/one-random-variable.mdx (leadsTo target, checked)
verdict: needs-changes
---

# Review: Significant figures and estimates

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | calcs entries `table-area`, `table-perimeter`, `sum-rule`, `quiz-sigfigs`, `quiz-area`, `quiz-sum` | Siyavula PS Gr 10, 1.2 (the page's `mit` source) has rounding and scientific notation only; the words "significant figures" do not occur, and it gives no rules for the precision of products or sums (checked on the page) | `source: {cite: mit, at: 'Sec. 1.2, Scientific notation'}` | Wrong citation: the source does not support the significant-figure rules or these results. Drop the `source` (keep `origin: page-own`), or cite a §2.0 source that states the rules. (Same kind of finding as rows 3-4 of reviews/hs-0/units-and-si.md.) |
| 2 | warning | Whole "Significant figures" and "Calculating with measured numbers" sections | Neither Siyavula page states significant-figure counting rules or the product/sum rules; 6.055J does not either | Rules given with no source; the page's main `source` is Siyavula PS 1.2, so a reader will assume they come from there | The rules themselves are standard and correct (checked below). Add one sentence such as "Siyavula's chapter rounds to decimal places; the significant-figure rules below are the standard ones used in science courses", so the page does not imply the source states them. |
| 3 | warning | End of "Significant figures": "Siyavula's exercises ask you to write measurements in scientific notation rounded to a set number of digits for this reason." | The page text of 1.2 only shows Exercise 1.1 and 1.2 as interactive links; its own example writes c "in scientific notation, to two decimal places"; it never mentions significant figures or gives this reason | Claims what the exercises ask and why | Not verifiable from the source (the exercises could not be read), and "for this reason" (significant figures) is not Siyavula's reason. Either cite the example instead ("Siyavula writes the speed of light as 3,00 × 10⁸ m·s⁻¹, to two decimal places") without the "for this reason", or remove the sentence. |
| 4 | warning | Cosmology callout: "was measured in 2009 as 2.72548 K" | Fixsen abstract: "The determination from the measurements from the literature is" 2.72548 ± 0.00057 K (a combination of earlier measurements; FIRAS recalibrated alone gives 2.7260 ± 0.0013) | "measured in 2009" | Say "combined from earlier measurements in 2009" or "determined in 2009". |
| 5 | warning | Same callout: "2.72548 K, with an uncertainty of about 0.00057 K, six significant figures" | — | Six significant figures | By the page's own definition (trusted digits plus the first uncertain one) an uncertainty of 0.0006 K makes the 4th decimal the first uncertain digit, i.e. 2.7255 K, five significant figures. Quoting a value to the same places as a two-digit uncertainty is a normal convention, but a beginner will see a contradiction with the lesson. Either say "known to about five significant figures (2.7255 K)" or add a bracket explaining that the uncertainty is given to two digits and the value to match. |
| 6 | warning | Worked example "A table top", step "Check": "The area has fewer significant figures than either side length suggests at first sight; the less precise measurement, 0.80 m, limits it." | — | — | Inaccurate and not a check: the area 1.0 m² has two significant figures, the same as 0.80, not fewer than "either" side. Replace with a real check, e.g. units (m × m = m², m + m = m) and a size check (1.25 × 0.80 is a little under 1.25, about 1), and keep "0.80 m limits it". |
| 7 | info | "Rounding": "$2.46 \times 3.46 = 8.5116$, which rounds to 8.5" | Siyavula 1.2: "it is best to leave the rounding off right until the end" | Rounds the exact product to one decimal place | Correct, but the target (one decimal place) is not stated; add "to one decimal place" so the comparison 8.5 vs 8.8 is clear. (By the later product rule the answer would be 8.51.) |
| 8 | info | "Estimates": divide and conquer, error cancelling, "1 or few", powers of ten first, second method | 6.055J pp. 7-8 (several methods, "use as many diverse methods as you can"; "First do the important part: the powers of ten"; "only two numbers in the world: 1 and 'few'", few² = 10), pp. 14-15 (Sec. 2.5: errors "unlikely to point in the same direction") | Same ideas in own words | Supported. The page gives no page numbers in the text (only the calcs file does); optional: add "(notes pp. 7-8, 14-15)". |
| 9 | info | Callout: dark matter "estimates like the ones in this lesson were how physicists first saw that something was missing" | No cited source | — | Broadly correct (Zwicky's 1933 cluster-mass estimate was an order-of-magnitude argument), but uncited; acceptable as a standard historical remark in a callout. |

## Formulas and citations
- The page has no `<Formula>` elements; nothing to check there.
- Rounding rule (5 or more: round up; 9 rounded up becomes 0 and carries): supported by Siyavula Maths Gr 10, 1.4 (the three bullet rules) and PS Gr 10, 1.2 (rule and 2,6525272 → 2,653). "Round only at the end": supported by PS 1.2.
- Significant-figure counting rules, the product rule, the sum rule, exact numbers: not in any cited source (rows 1-2). Judged on their own: all standard and correct (non-zero digits; captive zeros; leading zeros not significant; trailing zeros after the decimal point significant; trailing zeros in a whole number ambiguous, resolved by scientific notation; products keep the fewest significant figures; sums keep the fewest decimal places; exact counts and defined factors do not limit precision). The remark that these are rules of thumb and that careful work uses uncertainties is correct.
- Mahajan citations: supported (row 8). "A year is close to π × 10⁷ s": in the front-matter table "Back-of-the-envelope numbers" ("year π · 10⁷ s"). Correctly cited in calcs `year-pi`.
- Fixsen 2009: value 2.72548 ± 0.00057 K matches the arXiv abstract and `calcs/values.yaml` (`'2.72548': 'later: Fixsen 2009'`). ApJ (IOP/AAS, pre-2021): cited via its arXiv abstract page only, as Writing rule 11 requires.
- All cited sources are on the §2.0 list (Siyavula online pages, MIT OCW notes); the arXiv abstract is allowed by rule 11. No forbidden source is cited.

## Arithmetic and answer checks
All recomputed by hand/Python; all are in the calcs file; `npm run calc:test` passes (8274 passed) and `npm run content:check` gives 0 errors (only the "no review file yet" warning for this page).
- 7.3486 → 7.35 (2 d.p., dropped digit 8) and 7.3 (1 d.p., dropped digit 4): correct.
- 2.497 → 2.50: correct.
- 2.46 × 3.46 = 8.5116 → 8.5; 2.5 × 3.5 = 8.75 → 8.8: correct.
- Counting examples: 482 (3), 30.05 (4), 0.0047 (2), 2.50 (3), 2.500 (4), 1.5 × 10³ (2), 1.500 × 10³ (4): correct.
- Table top: 1.25 × 0.80 = 1.0000 → 1.0 m² (2 s.f.): correct. Perimeter 1.25 + 0.80 + 1.25 + 0.80 = 4.10 m (2 d.p.): correct.
- 12.11 + 0.3 = 12.41 → 12.4 m: correct.
- Heartbeats: 10^(1+1+1+2+1) = 10⁶; 7 × 6 × 2.4 × 3.65 × 8 = 2943.36 ≈ 2900; 70 × 60 × 24 × 365 × 80 = 2 943 360 000 ≈ 2.9 × 10⁹: correct. "About three billion" (short scale, 10⁹): correct.
- Seconds in a year: 3.6 × 2.4 × 3.65 = 31.536 ≈ 32; 3.2 × 10⁷ s (exact 3.1536 × 10⁷ s); π × 10⁷ = 3.1416 × 10⁷, ratio 1.004: correct.
- 2.72548 → 2.7 K: correct.
- Quiz 1: 0.004 070 has 4 significant figures; answer index 2 = "4": correct; 2, 3 and 7 wrong. Explanation true.
- Quiz 2: 0.067 49 to 2 s.f. = 0.067; index 0: correct. 0.068 (double rounding via 0.0675), 0.07 (1 s.f.), 0.0675 (3 s.f.) wrong. Explanation true.
- Quiz 3: 3.15 × 2.0 = 6.30 → 6.3 m²; index 0: correct; 6.30 and 6.300 too many figures, 6 too few. Explanation true.
- Quiz 4: 23.4 + 0.256 = 23.656 → 23.7 s; index 2: correct; others wrong. Explanation true.
- Quiz 5: 32 × 10⁶ = 3.2 × 10⁷ → 3 × 10⁷; index 1: correct; others off by a power of ten. Explanation true. (The question nearly gives the answer away; fine for a check question.)
- Flashcards: all five true.

## Only earlier terms
- Scientific notation, powers of ten, "number in front", order of magnitude: lesson 0.1 (`powers-of-ten`).
- m², s, K (kelvin), "exact" conversion factors: lesson 0.2 (`units-and-si`).
- "decimal places", "precision", "rounding": defined or explained on this page before or where they are used; "precision" in the first paragraph is plain English. Fine.
- "uncertainty" and "±" are introduced inline ("17.3 ± 0.1 cm"). Fine.
- π: assumed school knowledge. Fine.
- Callout terms: "cosmic microwave background" (glossed in place), "dark matter" (glossed as "unseen"), "early universe": callout only, glossed enough. Fine.
- No term used before it is introduced.

## Coverage
- §4 row 0.3 "Significant figures and estimates": rounding, counting significant figures, calculating with measured numbers, exact numbers, order-of-magnitude (Fermi-style) estimates with a second-method check. Covered at VWO level.
- Not covered: absolute and relative uncertainty (relative/percentage error), which VWO practical work uses; the page defers it to university. Minor at this level, but one sentence on percentage uncertainty would help later practical lessons (info).
- No PhET sim is listed for 0.3 in §4; none used.

## Where this leads
- `leadsTo` 8.044 Lecture 1 (`one-random-variable`, exists): matches the §4 row; flag F9 already notes it is only the closest match. The "why" ("treats a measured value as a random variable with a spread") is loose: 8.044 L1 treats physical quantities (an atom's velocity) as random variables, with mean, variance and standard deviation; it is not about measurement errors. Suggest: "University statistical physics describes uncertain quantities by a probability density with a mean and a spread (standard deviation), the precise version of 'how well a number is known'." (info)
- `towards: false`; lesson 0.3 is not the block's last lesson. Correct.

## Licensing and AI terms
- No copied sentences found. Compared: Siyavula "it is best to leave the rounding off right until the end" vs page "do it only at the end of a calculation"; Siyavula Maths rule bullets vs page bullets (rewritten); Mahajan "there are only two numbers in the world: 1 and 'few'. The only rule to remember is that few² = 10" vs page "treating every number as either 1 or 'few', where a few is about 3, so that few × few ≈ 10" (paraphrase, attributed).
- Worked examples and quiz numbers are original: Siyavula uses 2,6525272, 120/99, π, √3, 2,78974526; Mahajan uses CD pits, oil imports, gold vs bills. The page uses 7.3486, 2.497, a table top, heartbeats and seconds per year (the π × 10⁷ s value is a quoted fact from Mahajan's table, attributed).
- No figures. No Siyavula logo or "Everything Science" branding (Siyavula named only as a source).
- 6.055J book PDF: no "All rights reserved", "Courtesy" or "excluded from our Creative Commons license" notice (grep of the text extract).
- No NASA or ESO material. Fixsen (ApJ, IOP/AAS): cited only, read only on its arXiv abstract page.
- Nothing from a forbidden source.

## Notes
- Errors: row 1 (calcs citations). Warnings: rows 2-6. Fix those and the page can pass.
- Calcs: every number on the page has an entry; tolerances are sensible (`heart-front` 50, `year-pi` 0.01). The heartbeats entries cite "notes p. 8" / "pp. 7-11" for the method, which is fair; the numbers are page-own.

## Resolution (2026-11-20, by the page author)

- 1 (error, calcs citations): the six entries now say `at: 'the page''s own rule and numbers (Siyavula states no significant-figure rules)'`. The calcs schema requires a `source` with a cite key, so the key stays `mit` and the `at` text states that the source does not contain the rule.
- 2: a sentence before the rules now says that none of the lesson's sources sets out significant-figure rules and that these are the standard rules, in our own words.
- 3: the sentence about Siyavula's exercises is replaced by Siyavula's own example: c written as 3.00 × 10⁸ m/s, two decimal places in the number in front.
- 4: the callout now says the value was "determined in 2009, by combining earlier measurements".
- 5: the callout now applies the lesson's own rule: 2.72548 ± 0.00057 K is 2.7255 K, five significant figures (calcs `cmb-five-figures`).
- 6: the table-top "Check" step is now a units and size check, and says the area has the same number of significant figures as 0.80 m.
- Info: the 8.5116 → 8.5 example now says "at one decimal place".

`npm run calc:test` (23 entries for this page) passes.
