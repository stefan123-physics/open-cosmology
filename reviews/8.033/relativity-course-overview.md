---
page: content/year-2/8.033/relativity-course-overview.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture1_overvie/ (read: the 13-page slide PDF, text via pdftotext and every physics slide rendered with pdftoppm at 200-400 dpi and read as an image)
verdict: pass-with-notes
---

# Review: Relativity: what the course is about

PDF page = slide number (checked page by page): 1 Welcome (painting), 2 Relation to other courses + "Surgeon General's Warning", 3 How to do well / grade, 4 Lecture plan + reading, 5 History of physics in 10 minutes, 6 Newtonian mechanics to thermodynamics (names and dates), 7 Relativity and quantum mechanics (names), 8 Einstein, 9 Hints of relativity (wave equation), 10 "(Please slow me down!)", 11 Key lessons, 12 Expect physics to feel weird (two movies), 13 Next time: symmetry. No "rights reserved" or "courtesy" notice in the PDF; the only third-party item is the slide 1 painting ("Image painted by Harm Kamerlingh Onnes. Source: Wikimedia Commons"), which the page does not use.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro, first paragraph | Logistics are slides 1-4 (plus the one-line slide 10) out of 13; slide 2 also holds the "Surgeon General's Warning", which the page uses | "Most of its slides are about how the course runs ... (slides 1–4). This page leaves those out"; slide 10 not mentioned | Write "Its first slides are about how the course runs: ... (slides 1–4; slide 10 only asks the class to slow the lecturer down). This page leaves the logistics out, but keeps the style warnings of slide 2 and the plan of slide 4, and ..." |
| 2 | warning | "Relativity in the history of physics", first paragraph | Slide 5 has 8 items, starting with "Ancient civilizations (what limited them?)"; only items 2, 3 and 5 carry MIT course numbers | "a few steps, each with the MIT courses that teach it"; item 1 silently dropped | Replace "each with the MIT courses that teach it" by "most of the early ones tagged with the MIT courses that teach them", and add "from ancient civilizations (and what limited them)" before "Newtonian mechanics in the 1600s" |
| 3 | warning | "The road through the course", bracket after the plan | Slide 4 plan: L1-5 background, L6-13 SR kinematics, L14-23 SR dynamics, L24-25 E&M, L26-29 cosmology, L30-39 curved spacetime and black holes | "kinematics 4–8, dynamics and particle physics 9–14, ... cosmology 17–22": but site Lecture 8 is "Variational Calculus" (geodesics-calculus-of-variations), and Lectures 11 and 21 are Quiz 1 and Quiz 2 (no pages) | Write "kinematics 4–7, the calculus of variations 8, dynamics and particle physics 9–14 (Lecture 11 is a quiz), electromagnetism 15–16, the equivalence principle and cosmology 17–22 (Lecture 21 is a quiz), black holes 23–26" |
| 4 | warning | "The key lessons of the course", third GR bullet | Slide 11: "Things moving straight through curved spacetime appear deflected (gravity)" | "and that is what we feel as gravity" | A freely falling body feels no gravity (that is the point of the equivalence principle, Lecture 17). Change to "and that deflection is what we call gravity" (as the quiz 4 explanation already says) |
| 5 | info | History section, slip note | Slide 6 "Principia published 1678"; slide 7 "Albert Einstein 1899-1955" (both confirmed on the rendered images, not OCR errors) | Bracket says 1687 and 1879 | Correct as written. Other date slips on slides 6-7 (Helmholtz 1821-1871, died 1894; Ohm 1787, born 1789; "Louie de Broiglie Max Born 1882-1970" merges two people, dates are Born's) are not quoted on the page, so nothing to fix |
| 6 | info | Slide 8 paragraph, summary, quiz 2 | "Completed general relativity in 1916" | 1916 | Follows the slide. The field equations were presented in November 1915 and the full account published in 1916; optional bracket "(the field equations in November 1915, the full account in 1916)" |
| 7 | info | Slide 6/7 paragraph | Slide 6 heading "Era of gravitational astronomy (1700's)": Euler, Clairaut, D'Alembert, Lagrange, Laplace; slide 7 "FRWL" | "Euler, Lagrange and Laplace, who turned Newton's gravity into precise astronomy"; "the FRW authors" | The "precise astronomy" clause is a fair gloss of the slide heading, not an unsupported addition. "FRWL" includes Lemaître; "the FRW authors" is acceptable but "the FRW(L) authors" would match |
| 8 | info | Cosmology callout | Slides do not mention horizons | "The speed c ... also sets the horizon" | A site addition, physically correct; callouts are the site's own forward links, so no marking needed |

## Arithmetic and answer checks
- Wave equation (slide 9): page's `\nabla^2\vec E - \frac{1}{c^2}\frac{\partial^2\vec E}{\partial t^2} = 0` is the slide's ∇²**E** − (1/c²)**Ë** = 0; the notation change (bold to arrow, dots to partials) is stated on the page. Citation `at="slide 9"` correct.
- E = mc² is on slide 11; `at="slide 11"` correct.
- Frequency range 10³ to 10²⁷ Hz: confirmed on the slide 9 image (OCR lost the exponent).
- Example 1: 3.00e8/1e3 = 3.00e5 m = 300 km; 3.00e8/1e27 = 3.00e-19 m (proton radius ~0.84e-15 m, so "far smaller" true); hf at 1e27 Hz = 6.6e-7 J ≈ 4 TeV, so "gamma ray of very high energy" true; log10(1e24) = 24 decades. All correct.
- Example 2: 50/3.00e8 = 1.667e-7, "two parts in ten million" correct.
- E for 1 g: 1e-3 × 9e16 = 9.0e13 J; 1 kg gives 9.0e16 J. Correct.
- Einstein's age: born 14 March 1879, 1905 papers from March onwards: 26 (slide 8 says "age 26"). Correct.
- Quiz: Q1 answer 2 (frame not named) correct; Q2 answer 0 (1905, 1916, as slide 5/8) correct; Q3 answer 3 (9.0e13 J) correct, other choices wrong; Q4 answer 1 correct. Right answers at positions 2, 0, 3, 1: varied.
- Flashcards: consistent with slide 11.
- Calcs: all 16 entries pass (`pytest tests/calc -k relativity-course-overview`: 16 passed); every `shown:` string occurs verbatim in the page (checked by script).
- Later developments: LIGO's first detection GW150914 on 14 September 2015 (announced February 2016), EHT M87 image published 10 April 2019: both correct and marked "Later developments, after 2006".

## Coverage and order
- Page follows the slide order 2 → 4 → 5 → 6-7 → 8 → 9 → 11 → 12 → 13. Slides 1 and 3 (welcome, grading, advice) and slide 10 are left out; slide 2's collaboration/late-work rules and slide 4's reading list are left out. Only slides 1-4 are said to be left out (finding 1).
- Slide 11's "your theory here" line and three pieces of advice, and slide 12's two movies, are covered.
- "Heavier" (slide 11: "Fast moving clocks appear slower, shorter and heavier"): the page keeps the word, marks it as the slide's wording and says later lectures recast it in energy and momentum. Honest. The summary and flashcard drop "heavier", which is fine.
- Mapping of slide 4's 39-meeting plan to the 26 OCW slide sets: see finding 3 (Lecture 8 and the two quiz lectures). `_course.json` syllabus checked.
- leadsTo targets exist: 8.033 L2 (symmetry-galilean-invariance), L3 (speed-of-light-michelson-morley, which does the Galilean-boost wave equation and the experiments, matching the "why"), L18 (frw-metric-expansion), 8.286 L1 (inflation-overview). Prerequisite maxwell-equations-and-em-waves exists (8.02).

## Licensing
- Slide 1 painting (Wikimedia Commons credit) is not used; no figure from the slides is reproduced. No "rights reserved" or "courtesy" notice in the PDF.
- Text is rewritten; only short slogans from slide 11 ("your theory here", think for yourself, question authority) and "relative to what" are kept, which is acceptable. No OpenStax or LibreTexts material.
- The LIGO and EHT facts are cited only in the calcs file (`source: {ref: ...}`, arXiv); acceptable per Writing rule 7.

## Notes
- Symbols: c, E (two uses, both explained), m, f, λ, v, t, x, y, z have page-scoped meanings that fit; ∇ and the vector arrow use the general entries. I did not run the full `content:check`.
- No em dashes; ends with `## Summary`.
- Quiz 2 explanation "his year of three great papers" follows slide 8 (historians often count four or five, including the E = mc² paper); fine as attributed to the slide.

COUNTS: errors=0 warnings=4 info=4

Writer: Opus. Reviewer: Opus (same model).

## Resolution (2026-11-28, by the page author)

- Warning 1: the introduction now says the first slides (1–4) are about how the course runs, that slide 10 only asks the class to slow the lecturer down, and that the page keeps the style warnings of slide 2 and the plan of slide 4.
- Warning 2: the history section now says most of the early steps carry MIT course numbers and starts from ancient civilizations (and what limited them).
- Warning 3: the mapping of slide 4's plan now reads kinematics 4–7, the calculus of variations 8, …, with Lectures 11 and 21 marked as quizzes.
- Warning 4: "that is what we feel as gravity" is now "that deflection is what we call gravity".
- Info items left as they are.
