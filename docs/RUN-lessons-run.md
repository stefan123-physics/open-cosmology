# Lessons run (branch `lessons-run`)

An unattended run adding new lessons, started 2026-11-15 at 20:17, planned to stop by 01:02 (4 h 45 min).
Rules for the run (owner, 2026-11-15): new lessons only, plus their calcs, reviews and new entries in
`data/symbols.json`; no changes to existing lessons or site code; one commit per lesson; nothing pushed.

## Lessons

| # | Lesson | Page | Status | Notes |
|---|---|---|---|---|
| 1 | 8.01 Lesson 9: Uniform circular motion | `content/year-1/8.01/uniform-circular-motion.mdx` | reviewed, committed (a9f2030) | Sources: notes ch. 6 §6.3–6.4.1, segments 9.1–9.3. Review: 1 error (a page citation), 4 warnings; all fixed. |
| 2 | 18.01 Lecture 3: Derivatives of sine and cosine, product and quotient rules | `content/year-1/18.01/derivatives-of-sine-and-cosine.mdx` | reviewed, committed (9d7d975) | Review: 1 error (I had credited the lecture to Kobi Kremnizer; OCW lists David Jerison for the recording, the notes name Kremnizer for 2006), 4 warnings; all fixed, two generated figures added. |
| 3 | 8.01 Lesson 10: Tangential and angular acceleration | `content/year-1/8.01/circular-motion-acceleration.mdx` | reviewed, committed (1c984fa) | Segments 10.1–10.4. Review: 1 error (constant-α formulas credited to the notes), 3 warnings; all fixed. |
| 4 | 18.01 Lecture 4: The chain rule and higher derivatives | `content/year-1/18.01/chain-rule-and-higher-derivatives.mdx` | reviewed, committed (261883d) | Lecture given by Haynes Miller (substitute). u‴ written as u⁽³⁾: the symbol registry allows at most two primes (site code, not changed in this run). |
| 5 | 8.01 Lesson 11: Newton's second law and circular motion | `content/year-1/8.01/newtons-second-law-circular-motion.mdx` | reviewed, committed (b7b4f97) | Segments 11.1–11.3 (11.3 is a demo without transcript), notes ch. 9 §9.1–9.2.2. |
| 6 | 18.01 Lecture 5: Implicit differentiation | `content/year-1/18.01/implicit-differentiation.mdx` | reviewed, committed (7959e72) | |
| 7 | 8.01 Lesson 11 (part 2): Circular motion dynamics, worked problems | `content/year-1/8.01/circular-motion-dynamics-examples.mdx` | reviewed, committed (359a4c6) | Notes §9.3, Examples 9.1–9.6, own numbers. Review: 5 page citations one page early, fixed. Uses NASA's Mars fact sheet (later data). |
| 8 | 18.01 Lecture 6: Exponentials and logarithms | `content/year-1/18.01/exponentials-and-logarithms.mdx` | reviewed, committed (7ce5b8b) | Review: 1 error ((ln u)′ = 1/u written for d/du), fixed. |
| 9 | 8.01 Lesson 12: Pulleys and constraint conditions | `content/year-1/8.01/pulleys-and-constraints.mdx` | reviewed, committed (f58d38c) | Segments 12.1–12.5, notes Example 8.9. The 12.5 layout is read from the transcript's length terms (no figure). |
| 10 | 18.01 Lecture 9: Linear and quadratic approximations | `content/year-1/18.01/linear-and-quadratic-approximations.mdx` | reviewed, committed (fcb34b5) | Lecture 7 (exam review) and Lecture 8 (exam) have no new content and were skipped. |
| 11 | 8.01 Lesson 13: A rope with mass, differential analysis | `content/year-1/8.01/massive-rope.mdx` | reviewed, committed (dc72b76) | Segment 13.5 (demo) has no transcript; linked to the notes' capstan example. Originally two commits (the first lacked some review fixes); combined into one when the pull requests were regrouped by course. |
| 12 | 18.01 Lecture 10: Curve sketching | `content/year-1/18.01/curve-sketching.mdx` | reviewed, committed (41209d7) | The lecture spends half its time finishing approximations. |

| 13 | 18.01 Lecture 11: Sketching strategy and max–min problems | `content/year-1/18.01/max-min-problems.mdx` | reviewed, committed (47a9924) | |
| 14 | 8.01 Lesson 14: Resistive forces, drag and terminal velocity | `content/year-1/8.01/resistive-forces.mdx` | reviewed, committed (f93abee) | Review: 1 error (ρₘ had no meaning for the page), fixed. |
| 15 | 8.01 Lesson 15: Momentum and impulse | `content/year-1/8.01/momentum-and-impulse.mdx` | reviewed, committed (dd0de58) | External/internal forces written as subscripts (F_ext, F_kj): superscript 	ext{ext} is not readable by read-aloud. |
| 16 | 18.01 Lecture 12: More max–min, and related rates | `content/year-1/18.01/related-rates.mdx` | reviewed, committed (167fe3b) | Two lecturer slips in the box problem noted on the page. |
| 17 | 8.01 Lesson 16: Conservation of momentum | `content/year-1/8.01/conservation-of-momentum.mdx` | reviewed, committed (74435a1) | |
| 18 | 18.01 Lecture 13: A ring on a string, and Newton's method | `content/year-1/18.01/newtons-method.mdx` | reviewed, committed (bd1659b) | The notes' "© David Jerison" line is an ordinary copyright line under OCW's CC licence (checked in review). |

## Questions for the owner

- 18.01 Lectures 7 (exam review) and 8 (the exam) were skipped as having no new content. Should they get a short page each, or a note in the course syllabus?
- (Resolved) The ring-on-a-string notes page (18.01 Lecture 13) carries "© 1999 and © 2007 David Jerison": the review found it is an ordinary copyright line under OCW's CC licence, not "All rights reserved".

## Things I could not do within the run's rules

- Symbol forms allow at most two primes (u‴ written as u⁽³⁾ instead).
- Read-aloud cannot say `\text{}` in a superscript or `\sqrt[3]{}`; pages were written around these (subscripts, 2^{1/3}) instead of changing lib/speech.ts.
- Plot cannot draw a fixed point that moves with a slider; a slider-driven point on the curve was used instead.

## Run summary

Started 20:17, stopped at the owner's request at about 21:45 (well within the planned 4 h 45 min). 18 lessons added, one commit each. First on branch `lessons-run`; then regrouped into one pull request per course (18.01, and 8.01 on top of it, since two 8.01 lessons need the 18.01 exponentials page):

- **8.01:** Lessons 9–16 (uniform circular motion through conservation of momentum), plus a second Lesson 11 page for the notes' worked examples (9 pages).
- **18.01:** Lectures 3–6 and 9–13 (derivatives of sine and cosine through Newton's method) (9 pages).

Every page has its calcs file (all recompute in `npm run calc:test`), an independent review in `reviews/` with a Resolution section, `status: reviewed`, and new page-scoped meanings in `data/symbols.json` (no existing meanings changed). `npm run build` passed before every commit.
