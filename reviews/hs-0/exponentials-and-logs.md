---
page: content/year-0/hs-0/exponentials-and-logs.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/mathematics/grade-12/functions/02-functions-06 (read; CC BY footer present)
  - https://www.siyavula.com/read/za/mathematics/grade-10/functions/06-functions-04 (read; CC BY footer present)
  - https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04 (read; CC BY footer present)
  - https://www.siyavula.com/read/za/mathematics/grade-12/functions/02-functions-08 (read; CC BY footer present)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec01/ (read: slides PDF a352d…_MIT8_286F13_lec01.pdf, slide numbers from the printed footers –1– … –21–)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf (read, to check the "1 cm"; not cited by the page)
verdict: needs-changes
---

# Review: Exponentials and logarithms (Lesson 0.9)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | `references.guth1.location` ("slide 10"); cosmology callout; calcs `inflation-doublings` source | 8.286 Lecture 1 slides: the patch of 10⁻²⁸ cm is on **slide 4**; "expanded exponentially by a factor of at least 10²⁸ (∼ 100 doublings)" and "about the size of a marble" are on **slide 5**. Slide 10 is about Ω and the flatness problem (the site's own 8.286 page `inflation-overview.mdx` cites slide 10 for the Ω formula, confirming the numbering). | Cites slide 10 for the patch and the factor 10²⁸. | Change `location` to "slides 4–5" (and the calcs `at`). Note: `calcs/8.286/inflation-overview.yaml` (`doublings`, `doublings-guth`) has the same wrong "slide 10"; worth fixing there too (outside this review). |
| 2 | warning | cosmology callout, "growing to about 1 cm" | Slide 5 says only "about the size of a marble"; "about one centimeter or so across" is in the Lecture 1 transcript (≈ line 365 of the text, spoken). | Attributes "about 1 cm" to the slides citation. | Either write "to about the size of a marble (about 1 cm)" with the slides cited, or add the transcript as a reference for the 1 cm. Optionally say Guth rounds the result to "about 100 doublings". |
| 3 | warning | "The laws of logarithms", bracket "(…they follow from $b^{p}\,b^{q} = b^{p+q}$.)" | Siyavula 2.8 proves the product law from $a^{m}a^{n}=a^{m+n}$ and the quotient law from $a^{m}/a^{n}=a^{m-n}$. | Says both follow from the product rule of exponents. | "they follow from $b^{p}b^{q}=b^{p+q}$ and $b^{p}/b^{q}=b^{p-q}$". |
| 4 | warning | Formula "Laws of logarithms" cites `mit` Sec. 2.6 for all three laws | 2.6 lists all four laws but states that the product and quotient laws "are not covered in this section" and treats them in 2.8 (enrichment). | Cites only 2.6; `reading3` (2.8) is never cited in the body. | Cite reading3 ("Sec. 2.8, Laws of logarithms") for the first two laws, or add `reading3` to the `at`. Otherwise drop reading3 from `readings`. |
| 5 | info | "Logarithmic scales" | Not in any cited source (Siyavula 2.6 has no log scales or log-log plots). | Section on log scales and straight lines on log axes. | Standard and correct; fine. Small wording point: "each step of the same length is a factor of 10" is true only for a decade step; say "equal steps along the axis are equal factors; each decade is a factor of 10". |
| 6 | info | "The number e" | Siyavula: e between 2.71 and 2.72; says nothing on continuous growth or derivatives. | e ≈ 2.718; e^x rises at a rate equal to its height. | Correct and standard; a forward preview of calculus (18.01 L6 in leadsTo). Fine. |

## Formulas and citations
- **Exponential function** $y = a\,b^{x}$, `reading1` "Sec. 6.5, Functions of the form y = ab^x + q (with q = 0)": the subsection exists with that title; correct. The reading of $a$ as start value and $b$ as factor per step matches Grade 11 1.4 (final = initial × (1 + growth percentage)^n), which the prose cites in words.
- **Definition of the logarithm**, `mit` "Sec. 2.6, Logarithms": matches exactly, including $b>0$, $b \ne 1$, $x>0$.
- **Laws of logarithms**, `mit` "Sec. 2.6, Laws of logarithms": all three are listed there; see row 4 on where the first two are actually treated.
- `references.guth1`: wrong slide number (row 1).
- `leadsTo` 18.01 Lecture 6: see below.
- Calcs sources: algae and population entries cite Grade 11 1.4 (growth formula), which covers the method; solving entries cite 2.6 laws (2.6 Worked example 21 uses exactly "take the log of both sides"), fine. `quiz-half-life` cites Grade 10 6.5, which covers decay ($0<b<1$) but not half-life; acceptable but weak. `log2-8` is marked "page's own", but $\log_2 8 = 3$ is Siyavula 2.6's own example (a standard fact, not a licensing issue).

## Arithmetic and answer checks
Recomputed independently (Python):
- 1.30⁶ = 4.8268 → 50 × 4.83 = 241.3 m² ("241", "almost quintupled"): correct.
- 50 + 6 × 15 = 140 m²: correct.
- Plot caption: 50 × 1.3¹² = 1164.9 ("about 1160"), 50 + 15 × 12 = 230: correct; range [0, 1200] contains both.
- log 20 = 1.30103, log 1.30 = 0.113943, ratio 11.418 → 11.4 weeks: correct. Check 1.30^11.4 = 19.90 ≈ 20; 50 × 1.3¹¹ = 896, 50 × 1.3¹² = 1165, so the curve does pass 1000 m² between weeks 11 and 12: correct.
- log 0.5 / log 0.80 = 3.106 → 3.1 h: correct.
- log 2 = 0.30103, 10^0.301 = 1.99986 ≈ 2: correct. log 1000 = 3, log 1 = 0, log 0.01 = −2: correct.
- 28 / log 2 = 93.01 → 93 doublings: correct (Guth's "∼ 100").
- e = 2.71828: correct.
- Quiz 1: 200 × 1.5³ = 675 (answer index 2 = "675"): correct; 300 (one year), 500 (linear) and 1800 are wrong. Explanation true.
- Quiz 2: log 0.001 = −3 (index 0): correct; others wrong. (Choice "3" is not in `$…$` unlike the others: cosmetic.)
- Quiz 3: log 50 + log 2 = log 100 = 2 (index 2): correct; log 52, log 25, log 48 are wrong.
- Quiz 4: 24/6 = 4 half-lives, (1/2)⁴ = 1/16 (index 2): correct.
- Quiz 5: log 50 / log 3 = 1.69897/0.47712 = 3.561 (index 1, "≈ 3.6"); 3^3.56 = 49.95: correct. 1.7 (= log 50) and 16.7 (= 50/3) are plausible wrong choices.
- Flashcards: all true.
- **Calcs coverage (warning):** these numbers on the page have no calcs entry of their own: log 1000 = 3, log 1 = 0, log 0.01 = −2; quiz 2 (−3); quiz 3 (log 100 = 2); quiz 1's linear alternative 500 and 1.5³ = 3.375 (only inside a `shown` string); log 50 ≈ 1.699 and log 3 ≈ 0.477 (only in `shown`); the checks 1.30^11.4 ≈ 20, 3^3.56 ≈ 50 and "between weeks 11 and 12" (896 and 1165). Add entries. Also the id `half-life-drug` names a drug the page never mentions (cosmetic).

## Only earlier terms
- Laws of exponents ($b^{p}b^{q}=b^{p+q}$): Lesson 0.1 (powers-of-ten), Sec. "The rules for exponents". OK.
- Negative powers of ten (10⁻³ = 0.001): Lesson 0.1. OK.
- Power law $y = kx^{n}$, square root undoing squaring: Lesson 0.6. OK.
- Slope, straight line, linear: Lesson 0.5. OK.
- Rearranging/dividing both sides: Lesson 0.4. OK.
- **Non-integer exponents** (warning): the page uses $10^{0.301}$, $1.30^{11.4}$, $3^{3.56}$. Lesson 0.1 has integer exponents only (Siyavula's list is for $m,n \in \mathbb{Z}$); Lesson 0.6 shows only $x^{1/2} = \sqrt{x}$ and says $n$ "can be any number". The page says logs "between the powers" give a decimal, which a beginner can follow, but one sentence saying that a decimal exponent is allowed and lies between the whole-number powers (e.g. $10^{0.5} = \sqrt{10} \approx 3.16$) would close the gap.
- "Rate equal to its own height" for $e^{x}$: slope of a curve is Lesson 0.10 (later); clearly framed as a preview ("You will see in calculus"). Info.
- "Radioactive atoms", "interest": used as everyday examples only. Info.
- New terms (exponential growth/decay, doubling time, half-life, logarithm, base, ln, e, logarithmic scale, inflation) are all introduced where first used.

## Coverage
§4 row 0.9: "Exponentials and logarithms", no PhET. The page covers growth/decay by a factor, doubling time and half-life, definition of log, common and natural logs, the three laws, solving for an exponent, and log scales. That fits VWO level. Left out:
- The graph of $y = \log x$ as the reflection of $10^{x}$ in $y = x$ (Siyavula 2.6 Worked example 18), and a plotted decay curve: warning, useful at VWO level (wiskunde B) and easy to add as a Plot.
- The change-of-base rule $\log_a x = \log_b x / \log_b a$ is used implicitly (log 20 / log 1.30) but never stated; VWO uses it ($^g\!\log$ on calculators): warning.
- The half-life formula for any time, $N = N_0 (\tfrac12)^{t/T_{1/2}}$ (non-integer number of half-lives), which Block 7 (radioactivity) will need: info; the page only gives whole numbers of half-lives.
- Going back from a log ($\log x = c \Rightarrow x = 10^{c}$, Siyavula Worked example 16): info.

## Where this leads
- `leadsTo` 18.01 Lecture 6: `content/year-1/18.01/exponentials-and-logarithms.mdx` exists ("Exponentials and logarithms: the number e and its derivatives"), same topic; the `why` is accurate.
- `towards: false`: correct, Lesson 0.10 is the block's last lesson.
- Cosmology callout: physics correct (inflation as exponential expansion, ~10²⁸ ≈ 2⁹³); citation wrong (row 1), "1 cm" from the transcript, not the slides (row 2).

## Licensing and AI terms
- All four Siyavula pages show "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" (also listed CCBY in docs/siyavula-licences.tsv).
- No sentences copied. The closest is "the power you must raise $b$ to, to get $x$" vs Siyavula's "the power to which p must be raised to give q": a standard phrase, fine. "Siyavula's growth formula: final value = initial value × (1 + growth rate)^(number of periods)" paraphrases Grade 11 1.4's formula, with attribution: fine.
- Worked examples are original: algae, 50 m², 30%/week, 6 weeks and 1000 m² (Siyavula: bacteria 80%/h, fish 2%/month, mould 40%/h, ants doubling monthly, city 5% per 2 years, Upington 6% per 3 years). Same method, different situation and numbers.
- Quiz: quiz 2 ($\log 0.001 = -3$) is the same fact as Siyavula 2.6 Worked example 10 ($10^{-3} = 0.001$) and Exercise 2.6 ($\log \tfrac{1}{1000} = -3$); $\log_2 8 = 3$ in the prose is Siyavula's own example. Both are textbook-standard one-liners, not copied problems: info. Quiz 3 resembles Worked example 22 ($\log 5 + \log 2 - \log 30$) in form only. Quiz 5 ($3^{x} = 50$) resembles Exercise 2.17 ($3^{a} = 2.2$) in form only. Fine.
- Figures: one Plot generated from formulas; no copied figure.
- Siyavula is named in prose twice ("Siyavula's growth formula", "Siyavula marks…") as attribution, not branding; no logo or "Everything Science/Maths" branding. Fine.
- MIT: the cited slides 4–5 carry no "All rights reserved" notice (the © Science and "removed due to copyright" items are on slides 14–17 and not used). Fine.
- No NASA or ESO material; no forbidden source cited or used.

## Notes
- Fix row 1 (only error) and the calcs gaps; the rest are small clarity and coverage improvements.
- Uncertain: none of the arithmetic; the slide numbering was taken from the printed footers in the slides PDF and agrees with the site's 8.286 inflation-overview page.

## Resolution (2026-11-20, by the page author)

- 1 (error, slide number): `references.guth1.location` is now "slides 4–5", and the calcs entry `inflation-doublings` cites slides 4–5. The same wrong "slide 10" in calcs/8.286/inflation-overview.yaml (`doublings`, `doublings-guth`) is outside the High School and is reported to the owner instead of being changed here.
- 2: the callout now says "the size of a marble, about 1 cm", and the Lecture 1 transcript is added as reference `guth1t`; the calcs entry says the 1 cm comes from it.
- 3: the bracket now names both b^p b^q = b^(p+q) and b^p/b^q = b^(p−q).
- 4: the laws formula now cites reading3, Sec. 2.8 (power law in Sec. 2.6).
- 5: new calcs entries `log-1000`, `log-001`, `sqrt10`, `algae-check`, `algae-week-11`, `quiz-log-0001`, `quiz-log-100`, `quiz-linear-500`, `quiz-log50`, `quiz-log3`, `quiz-check`.
- 6: a short paragraph now explains decimal exponents (10^(1/2) = √10 from lesson 0.6, a decimal power lies between the whole powers).
- 7: new section "The graph of the logarithm" with a plot of 10ˣ and log x mirrored in y = x, and the change-of-base rule as a `<Formula>` (Sec. 2.6).
- Info: the log-scale sentence now says equal steps multiply by the same factor; the calcs id is now `half-life-decay`. The half-life formula for non-whole numbers of half-lives is left for Block 7.

`npm run calc:test` (27 entries for this page) and `npm run content:check` pass.

- 2026-11-20, later: the slug is now `exponentials-and-logs`, the name chosen in the owner's fix of the lesson lists (commit 5aa731d, "Rename 11 High School slugs that clash with university lessons"); file, calcs, review and symbol meanings renamed with it.
