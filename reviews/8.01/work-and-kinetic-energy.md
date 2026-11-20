---
page: content/year-1/8.01/work-and-kinetic-energy.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-7-kinetic-energy-and-work/20-1-kinetic-energy/ (read: saved HTML of segment pages 20.1–20.6 and the Week 7 page; Lesson 20 has exactly six segments, "Lesson 20: Kinetic Energy and Work in 1D [20.1-20.6]", the next is 21.1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter13/ (read: Chapter 13 PDF; Sections 13.1–13.8 read in full, printed pp. 13-1 to 13-21; footers of PDF pages 5–22 checked page by page with pdftotext -f/-l, PDF page N = printed 13-(N-1))
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/1ab505600282095893c1c6202e7f749a_efpiHD_2O8E.pdf (read: 20.1 transcript, 1 p.; URL matches the segment page's transcript link)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/c3ce55058372dda6ff9938af0d012932_d9ugFckUBcg.pdf (read: 20.2 transcript, 2 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/ba2e2e093c521dd5eaa513e85d6bee68_QAdiRwOLl0A.pdf (read: 20.3 transcript, 3 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/6074242ca9559da902c03bf98fb22681_m8_3VwHy7tE.pdf (read: 20.4 transcript, 3 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/94478a7e97b93b3e5993d213049b5271_TF93gm1_O8M.pdf (read: 20.5 transcript, 1 p.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/74cd9354a4ea392f680e61184463ad8f_FSW9EQNZvxI.pdf (read: 20.6 transcript, 1 p.; link matches)
verdict: needs-changes
---

# Review: Kinetic energy and work in one dimension

The page itself is in good shape. All nine `<Formula>` citations point to the right segment transcript and page, and every notes equation number and printed page number in the text checks out against the PDF footers. Every number, quiz answer and flashcard recomputes. `calcs/8.01/work-and-kinetic-energy.yaml` passes (`npm run calc:test -- -k work-and-kinetic`: 20 passed). `content:check` reports no errors for this page, only the "no review file" warning that this file resolves. The two errors it does report belong to `18.01/definite-integrals`, which is in progress.

There is one **error**, and it is outside the page: the change to `content/year-1/8.01/_course.json` adds a second, identical syllabus line for Lecture 20 (finding 1). Fixing it means deleting one line. The rest are warnings and info.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `content/year-1/8.01/_course.json`, syllabus | The Lecture 20 line already existed at HEAD (line 50: "Kinetic Energy and Work in 1D", URL …/20-1-kinetic-energy/). | The working copy adds an identical line 51, so `"lecture": 20` appears twice (`grep -o '"lecture": [0-9.]*' … \| sort \| uniq -d` prints only `"lecture": 20`). The course page would probably list Lecture 20 twice and give two sections the same anchor `#sec-20`. `content:check` does not catch this. | Delete the added line (the existing line's title and URL are correct and match `source.url` and the OCW Week 7 page). Consider making `content:check` reject duplicate syllabus lecture numbers. |
| 2 | warning | "Work done by a constant force", "negative when it opposes it, as kinetic friction does (p. 1)" | 20.2 p. 1 discusses only the sign ("if the force is opposing the displacement … the work would be negative"). It does not mention friction. The friction example is in the notes, Eqs. (13.4.4)–(13.4.5), p. 13-10. | Gives the friction example as if it came from the transcript's p. 1. | "…as kinetic friction does (p. 1; notes, Eq. (13.4.5), p. 13-10)", or move the friction clause after the notes citation. |
| 3 | warning | Worked example "Braking and launching" | n/a (the page's own example) | The Problem states only parts (a) and (b), but there is a third Step "(c) A varying force" whose question ($F_x = 3x^2$ N from 0 to 2.0 m) appears only in the step itself. | Add "(c) How much work does a force $F_x = 3x^2$ N do from $x = 0$ to $2.0$ m?" to the Problem, or move (c) out of this example (for instance into the plot's section). |
| 4 | warning | Notes Section 13.7, which the page's `location` says it covers | Notes Eqs. (13.7.18)–(13.7.19), p. 13-21: $dK/dt = m a_x v_x = F_x v_x = P$, "the instantaneous power delivered to the body is equal to the time rate of change of the kinetic energy". | Not mentioned. | It is the power version of the theorem the page just proved and takes one sentence: "Since $dK/dt = m v_x\,dv_x/dt = F_x v_x$, the power of the total force is the rate of change of kinetic energy (notes, Eqs. (13.7.18)–(13.7.19), p. 13-21)." |
| 5 | warning | "Power", "about 14 W on average over the fall, and about 27 W at the end, twice the average" | Example 13.8 rounds both values to two figures (1.4 × 10¹ W and 2.7 × 10¹ W) and then notes (p. 13-19) that symbolically they differ by exactly a factor of two. | "14 W … 27 W … twice the average": the rounded numbers do not look like a factor of two. | Write "about 13.7 W on average … about 27.4 W at the end, exactly twice the average" (the calcs entries would need three-figure `expected` values), or add "(the notes round both to two figures)". |
| 6 | warning | `data/symbols.json`, meaning of `M` scoped to this page | n/a | "In the cosmology note, the mass of the expanding sphere inside the galaxy." This reads as if the sphere were inside the galaxy. | "In the cosmology note, the mass of the expanding sphere on whose edge the galaxy sits (the mass inside the galaxy's distance r)." |
| 7 | info | "Work done by a constant force", "the work is the area … (pp. 1–2)" | The area interpretation is on 20.2 p. 2 only. p. 1 ends with the units. | "(pp. 1–2)" | "(p. 2)". Trivial. |
| 8 | info | "Work by a varying force" formula, `at="pp. 2–3"` | The limit and the integral are on 20.3 p. 2. p. 3 gives the geometric interpretation. | "pp. 2–3" | Acceptable, since the text cites the area discussion on p. 3. "p. 2" would be more exact. |
| 9 | info | Same formula | 20.3 p. 2 says "j goes from 1 to n of x of xj times delta xj" ("x of xj" for F of x_j). p. 1 says "f of j dot … delta xj", although the quantities are scalars. | $F_x(x_j)\,\Delta x_j$ | The page is right. These are speech slips with no physics consequence, so a bracket is optional. The page already notes the more confusing 20.1 slip. |
| 10 | info | "Over position" formula (20.4 p. 2) | 20.4 p. 2: "make the substitution, dx dt, dx prime", meaning $dv_x/dt$. | $a_x\,dx = \frac{dv_x}{dt}\,dx$ | Correct on the page. Slip not repeated, and no note needed. |
| 11 | info | "The work–kinetic energy theorem", "(Example 13.7, p. 13-16)" | The notes number two examples "Example 13.7": "Gravity and the Work-Energy Theorem" (p. 13-16) and "Final Kinetic Energy of Moving Cup" (p. 13-17). | "Example 13.7, p. 13-16" | The page number removes the ambiguity. "Example 13.7 (Gravity and the Work-Energy Theorem)" would be clearer still. |
| 12 | info | `leadsTo` 8.286 Lecture 6 | `expanding-sphere` (8.286 Lecture 6) derives the energy integral $E$ for a particle at the edge of the sphere and links it to kinetic plus potential energy. The ball-thrown-upward classification (forever vs. recollapse) is said there to be developed in Lecture 7. | "gravity's (negative) work on a receding galaxy decides whether the universe expands forever" | Fair: Lecture 6 already sets up the energy argument. Optionally add 8.286 Lecture 7 for the three behaviours. |
| 13 | info | Link "[substitution](/courses/18-01/antiderivatives)" | n/a | Links to the top of the 18.01 Lecture 15 page. | Optionally link to the section anchor of "## The method of substitution" (check the id `lib/rehype-sections.ts` generates). Once `definite-integrals` (18.01 Lecture 18, Riemann sums) is published, consider adding it as a prerequisite or link for the "varying force" section. |

## Arithmetic and answer checks
- **Formula citations (transcripts).** $K = \tfrac12 mv^2$ and $K = p^2/2m$: 20.1 p. 1 (single page), correct. $W = F_x(x_f - x_i)$: 20.2 p. 1, correct. The sum and its limit as an integral with dummy variable $x'$: 20.3 p. 2, cited "pp. 2–3" (see #8). Over time: 20.4 pp. 1–2 (the integral starts on p. 1, and the result $v_{x,f} - v_{x,i}$ is on p. 2), correct. Over position: 20.4 p. 2, with the concluding sentence running onto p. 3, so "pp. 2–3" is correct. The theorem: 20.5 p. 1, correct. $P = \vec F\cdot\vec v$ from $\vec F\cdot d\vec s/dt$: 20.6 p. 1, correct. The power/pressure/momentum remark about $p$ is on 20.6 p. 1, correct.
- **Notes equation numbers and pages** (checked against the footers): (13.2.1) p. 13-5; Example 13.1 pp. 13-5–13-6, with part (b) on p. 13-6; (13.3.1)–(13.3.14) pp. 13-6–13-8; centre-of-mass remark after (13.3.16) p. 13-9; (13.4.2) p. 13-9; Example 13.2 p. 13-10; gravity and normal force doing no work pp. 13-10–13-11; Example 13.3, (13.4.6)–(13.4.7), p. 13-11; (13.5.3) p. 13-14; (13.5.5) p. 13-15; (13.6.1) p. 13-16; Example 13.7 (falling ball) p. 13-16; (13.7.2)–(13.7.3) p. 13-18; Example 13.8 pp. 13-18–13-20 (the "twice the average" statement is on p. 13-20). All correct.
- **Spring formula.** $\int_{x_i}^{x_f}(-kx)\,dx = -\tfrac12 k(x_f^2 - x_i^2)$, matching (13.5.5). "Positive when the spring ends less stretched or compressed" matches the notes, p. 13-15. Correct.
- **Transcript slip "m squared over v squared".** 20.1 p. 1 does say this, and the page's bracket correctly gives $m^2v^2$. Correct.
- **Notes slips not repeated.** Example 13.4's friction work printed without its minus sign, Eq. (13.4.14), p. 13-12 ("= 4.8 × 10⁻² J"; Example 13.9 later gives −4.8 × 10⁻² J): the page does not use Example 13.4, so it is not repeated. Other slips in the notes, also not repeated: "vx,N = vx,j" for vx,f (p. 13-7); "Equation (13.3.4) becomes" before (13.3.5) (p. 13-7); and Example 13.8's reference to Eqs. (13.7.11) and (13.7.12) when it means the average and instantaneous powers (13.7.10) and (13.7.12) (p. 13-19).
- **Example 13.1.** $(60^2 - 50^2)/(20^2 - 10^2) = 1100/300 = 11/3$. In a frame moving at 10 mph, $(50^2 - 40^2)/(10^2 - 0) = 900/100 = 9$. Correct.
- **Example 13.3.** $2.0 \times 0.5 = 1.0$ J. $-0.10 \times 0.2 \times 9.8 \times 0.5 = -0.098 \to -0.10$ J. Correct.
- **Example 13.7 (falling ball).** $0.2 \times 9.8 \times 10 = 19.6 \approx 20$ J, and $v = \sqrt{2 \times 19.6/0.2} = 14.0$ m/s. Correct.
- **Example 13.8.** $t = \sqrt{2 \times 10/9.8} = 1.43$ s. Average power $19.6/1.43 = 13.7$ W; final power $mg\,v = 1.96 \times 14.0 = 27.4$ W, exactly $2\times$. The page's 14 W and 27 W are correct roundings (see #5).
- **Plot.** $F(2) = 12$ N, inside the range 0–13. $\int_0^2 3x^2\,dx = 8$ J; $12 \times 2 = 24$ J; $8/24 = 1/3$. Correct.
- **Worked example "Braking and launching".** (a) $\Delta K = -\tfrac12 \times 1200 \times 400 = -240\,000$ J, so $F_x = -240\,000/40 = -6000$ N. (b) $W = -\tfrac12 \times 200 \times (0 - 0.01) = 1.0$ J, so $v = \sqrt{2/0.050} = \sqrt{40} = 6.32$ m/s. (c) 8.0 J. All correct, and the numbers are the page's own.
- **Cycling.** $250/10 = 25$ N. Correct, and own numbers.
- **Cosmology callout.** $\int_{r_i}^{r_f}(-GMm/r^2)\,dr = [GMm/r]_{r_i}^{r_f} = GMm(1/r_f - 1/r_i)$, which is negative for $r_f > r_i$. Correct. Using the work–kinetic energy theorem with only the sphere's gravity (constant $M$ inside a comoving edge) matches the 8.286 treatment.
- **Quiz 1:** $K = 9.0$ J, $p = 6.0$ kg·m/s, index 0. Correct, and $p^2/2m = 36/4 = 9$ checks.
- **Quiz 2:** negative, index 1. Correct.
- **Quiz 3:** $\sqrt{40} = 6.32$, "about 6.3 m/s", index 2. Correct. The 4.5 m/s distractor ($\sqrt{20}$, dropping the 2) is wrong, as it should be. This question repeats worked example (b) word for word (info: consider other numbers so the quiz tests rather than recalls).
- **Quiz 4:** $\tfrac12(v_{x,f}^2 - v_{x,i}^2)$, index 1. Correct.
- **Quiz 5:** 25 N, index 1. Correct.
- **Flashcards:** kinetic energy, work (constant and varying), the theorem and power are all correct.
- **calcs file:** 20 entries. Three identities (spring work, $\int v\,dv$, gravity work) and all numbers in the text, plot, examples and quiz. The `shown` strings match the page. Minor: `quiz-ke` and `cyclist` lack the `quiz:` index that `spring-launch-speed` has (`quiz: 0` and `quiz: 4`), if that field is used for cross-checking.

## Coverage and order
- Segments 20.1 (kinetic energy, $p^2/2m$), 20.2 (constant force, sign, joule, area), 20.3 (sum, limit, integral, area), 20.4 (integrating $a_x$ over time and position), 20.5 (theorem) and 20.6 (power) each have their own section, in MIT's order. Nothing in the transcripts is left out.
- Notes Sections 13.2–13.7 are covered as follows. 13.2 and Example 13.1: covered. 13.3: cited as the notes' alternative route. 13.4: Examples 13.2 and 13.3 summarised; the point-of-application subtlety is covered. 13.5: covered, including the Example 13.6 result. 13.6: covered, including Example 13.7 (ball). 13.7: Eqs. (13.7.2)–(13.7.3) and Example 13.8 covered.
- Not covered: Example 13.4 (push at 30°, which needs components and fits Lesson 21); Example 13.5 (gravity's work $-mg\,\Delta y$ and why the choice of "up" does not matter); the second Example 13.7 (cup's final kinetic energy); Example 13.9 (average power of push and friction); and $dK/dt = P$ (#4). Only #4 seems worth adding. A one-line mention of $W_g = -mg\,\Delta y$ (Eq. (13.4.16), p. 13-13) would also help, since the page already uses $mg \times 10$ m for the falling ball (info).
- Section 13.1 (the concept of energy, system and surroundings, conservation) is outside the declared `location` (Sections 13.2–13.7) and not covered (info). It presumably belongs with Lessons 23–24.
- Additions not in MIT: the $3x^2$ plot, braking and launching, cycling, and the cosmology callout. All are the page's own.

## Licensing
- `grep -il "rights reserved\|courtesy"` over the chapter text and all six transcripts: no matches.
- The chapter's epigraph (Eric Linder, on dark energy) and the quotation from Benedek and Villars in Section 13.1 are third-party quotations. The page does not quote, paraphrase or mention them. Figures 13.1–13.8 are not reused. The plot is generated from a formula. No OpenStax or LibreTexts material.
- No verbatim copying found. The notes' Examples 13.1, 13.2, 13.3, 13.7 and 13.8 are summarised in a sentence each, with their numbers, and cited as the notes' (not presented as the page's own), as other 8.01 pages do. The worked examples and quiz use the page's own numbers and situations. Standard phrases ("work–kinetic energy theorem", "area under the curve", "rate of doing work", "point of application") are fine.

## Notes
- Symbols scoped to `work-and-kinetic-energy` in `data/symbols.json` (37 meanings: μ, μ_k, a, a_x, k, x, x′, x_i, x_f, x_j, t, t′, t_i, t_f, d, m, g, F, F_x, v, v_x, v_y, v_z, v_i, v_f, v_x,i, v_x,f, r, r_i, r_f, P, s, N, p, M, W, K). Each fits its use on the page, and the units are right (k N/m, P W, W and K J, p kg·m/s; none for μ, N, d). The only problem is the wording of M (#6). The plain μ meaning ("A coefficient of friction (μ_k: kinetic friction)") overlaps the μ_k entry, but `content:check` accepts it, so it is presumably needed for the scanner. `content:check` reports no missing or unused symbol for this page.
- No em dashes on the page.
- The 18.01 link and prerequisites (`newtons-laws`, `tension-and-springs`, `momentum-and-impulse`, `antiderivatives`) all exist.
- The cosmology callout is accurate and modestly worded ("the question at the heart of Newtonian cosmology in 8.286"). It makes no post-2013 claims.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the duplicate syllabus line is removed; `content/year-1/8.01/_course.json` is unchanged (its lecture list already runs to Lesson 37).
- **Warning 2:** kinetic friction's negative work is now cited to notes Eq. (13.4.5), p. 13-10.
- **Warning 3:** the worked example's Problem now asks part (c).
- **Warning 4:** the power section now gives dK/dt = F_x v_x = P, notes Eqs. (13.7.18)–(13.7.19), p. 13-21.
- **Warning 5:** the falling ball's powers are now 13.7 W and 27.4 W (calcs updated).
- **Warning 6:** the `M` meaning is reworded.
- Info items left as they are.
