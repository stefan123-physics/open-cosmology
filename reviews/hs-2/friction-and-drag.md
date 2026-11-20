---
page: content/year-0/hs-2/friction-and-drag.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read; section "Friction forces" and Worked examples 1 to 4; CC BY footer "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" present; listed as CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; PDF mit8_01scs22_chapter8.pdf downloaded to a scratch folder outside the repo; Secs. 8.3.2, 8.6, 8.7 Example 8.12; no "rights reserved", "courtesy" or "excluded" notice)
  - content/year-1/8.01/contact-forces.mdx, content/year-1/8.01/resistive-forces.mdx, content/year-4/8.286 Lecture 23 pages, content/year-5/8.902/inflation-scalar-field.mdx (site pages, read to check leadsTo)
verdict: pass-with-notes
---

# Review: Friction and drag

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `leadsTo` 8.286 Lecture 23, and the cosmology callout's last sentence | The 8.286 Lecture 23 pages (exponential-expansion, false-vacuum, inflation-solutions) mention the slow roll off a plateau, but nowhere a drag or friction term or a "terminal velocity" of the field. The Hubble drag $3H\dot\phi$ and slow roll $3H\dot\phi \approx -dV/d\phi$ are in 8.902 Lecture 12 (`inflation-scalar-field`, Eqs. (370), (372) of its notes) | "held to a steady speed by a drag-like effect of the expansion: a cosmic terminal velocity" (why of 8.286 L23) | Keep 8.286 L23 for the slow roll, but reword its `why` to what that lecture covers (a slow roll off a flat plateau), and add `{course: "8.902", lecture: 12}` with the Hubble-drag reason. The callout's "meets this slow roll in its last lectures" is then fine. |
| 2 | warning | Table of friction coefficients ("Kinetic friction") | Neither source gives values: Siyavula only says a higher coefficient means a more "sticky" surface; MIT Sec. 8.3.2 gives none | Five rows of $\mu_s$, $\mu_k$ "rough values" | The values are standard textbook-range values and the hedging ("rough", "illustrations only") is honest, but the page does not say they come from no cited source. Add a few words ("typical values, not from the sources above") or a caption. In the calcs, `source: {cite: mit, at: 'Friction forces ...'}` points to a Siyavula section that has no values; its `at` admits it, which is acceptable, but `cite: mit` only supports the meaning of a coefficient. Plausibility checked: tyre on dry road 0.9/0.7 and wet 0.5/0.4, wood 0.4/0.3, oiled steel 0.1/0.05, ice on ice 0.1/0.03 are all within commonly quoted ranges. |
| 3 | warning | "Kinetic friction", history sentence | MIT Sec. 8.3.2: da Vinci recorded measurements "between 1493–4 and about 1515"; "These results of da Vinci were rediscovered by Guillaume Amontons and published in 1699" | "found by Leonardo da Vinci around 1500 and published by Guillaume Amontons in 1699" | "published by Amontons" reads as if Amontons published da Vinci's result; MIT says he rediscovered it independently (da Vinci's notebooks were unpublished). Write "and rediscovered and published by Guillaume Amontons in 1699". Also MIT credits da Vinci with both the proportionality to $N$ and the area independence; "the first" (area independence) is fine. |
| 4 | warning | calcs file coverage | Every number on the page should be in the calcs file | Table: only one value per row is stored (`mu-tyre-dry` 0.9, `mu-ice` 0.03 …); the $\mu_k$ values 0.7, 0.4, 0.3, 0.05 and ice $\mu_s$ 0.1 are only inside `shown`. $C_D$ 1.05 and 0.04 likewise only in `shown` of `cd-sphere`. `npm run scan -- --numbers --uncovered` lists the quiz choice lines (50, 3.0, 29, 48, 118, 687, 1370) and the four "196 N" mentions in the crate steps as uncovered | Add a `fact` per table value (or one per row with both values listed), facts for $C_D$ = 1.05 and 0.04, and add the quiz `choices` strings and the "196 N" sentences to the `shown` of the existing entries. |
| 5 | info | Callout "Towards cosmology" | 8.902 L12 page: the $3H\dot\phi$ term is proportional to the speed, like Stokes drag | Compares Hubble friction with the skydiver's drag | Correct and well hedged ("a picture, not a proof"). Optionally note that Hubble friction grows in proportion to the speed, like the low-speed drag mentioned on the page, not like $v^2$ air drag. "The friction term comes from the equations of general relativity" is acceptable (it comes from the field equation in an expanding universe, with $H$ from the Friedmann equation). |
| 6 | info | Formula "Static friction" (`cite="mit"`) | Siyavula: $f_s^{max} = \mu_s N$ and in words "can vary from zero ... to a maximum"; the inequality itself is MIT Eqs. (8.3.6)–(8.3.7) | $F_f \le \mu_s F_N$ | The `at` names Siyavula's form and the text cites MIT for the inequality: fine. Could cite `reading1` Eqs. (8.3.6)–(8.3.7) instead, since that is where the inequality is. |
| 7 | info | Notation | Siyavula and MIT write $f_s$, $f_k$, $N$ | $F_f$ for both kinds, $F_N$ | Consistent with lessons 2.1 and 2.5; the page says which kind each formula is for. Fine. |
| 8 | info | Skydiver example | MIT Table 8.3: a human with $C_D = 0.5$, $A = 0.6$ m², 75 kg falls at 60 m/s | Own numbers: $C_D = 1.0$, $A = 0.75$ m², 90 kg, $v_t \approx 44$ m/s | Own example, not copied; 44 m/s is lower than typical belly-down values (about 55 m/s), but the result is correctly computed from the stated inputs. No change needed. |
| 9 | info | "Friction comes in pairs"; crate; ladder; car rolling vs skidding | Siyavula uses the same illustrations (book sliding on a table, heavy crate, ladder against a wall, rolling wheel = static, skidding = kinetic) | Same illustrations in new wording | Ideas, not sentences, are reused; no sentence copied (see Licensing). Fine. |

## Formulas and citations
- **Static friction** `cite="mit"` (Siyavula 2.2 "Friction forces"): Siyavula gives $f_s^{max} = \mu_s N$ and the "zero to a maximum" range in words. Correct physics; see row 6.
- **Kinetic friction** `cite="mit"`: Siyavula "The magnitude of the kinetic friction is: $f_k = \mu_k N$". Matches. Also MIT Eq. (8.3.5), as the text says.
- **Air drag** `cite="reading1" at="Sec. 8.6, Eq. (8.6.1)"`: MIT $F_{drag} = \tfrac12 C_D A\rho v^2$. Matches. The quoted phrase "a dimensionless number that is a property of the object" is verbatim from MIT Sec. 8.6 and is marked as a quotation: fine.
- **Terminal velocity** `at="Sec. 8.7, Example 8.12, Eq. (8.6.111)"`: MIT $v_\infty = \sqrt{mg/\beta} = \sqrt{2mg/(C_D A\rho)}$. Matches; Example 8.12 is indeed in Sec. 8.7 although its equations are numbered 8.6.x.
- **v(t) = v_t tanh(g t / v_t)** `at="... Eq. (8.6.117) (written there with v_∞β/m, which equals g/v_∞)"`: MIT gives $v(t) = v_\infty\tanh(v_\infty\beta t/m)$ and notes $v_\infty\beta/m = \sqrt{\beta g/m}$. Checked: $g/v_\infty = g\sqrt{\beta/(mg)} = \sqrt{g\beta/m}$, the same. Claim correct. Caveat MIT states and the page omits: it assumes the $v^2$ law holds from the start (MIT: "very quickly attains speeds in which Eq. (8.6.1) applies"); harmless at this level. Small-$t$ limit $v \approx gt$ and level-off at $v_t$: correct.
- MIT Sec. 8.3.2 claims used on the page (area independence, speed independence for ordinary speeds, Coulomb, $\mu_s > \mu_k$): all present. MIT says $\mu_s$ is "slightly greater"; the page's "somewhat smaller ... for most pairs" is consistent.
- MIT Sec. 8.6: low-speed drag linear in $v$ (Stokes, droplets, oil): supported. Table 8.1 values 0.47, 1.05, 0.04 ("Streamlined body"): match. "Teardrop" is the page's gloss, fine.
- Air density 1.2 kg/m³: MIT uses 1.225 kg/m³ (Example 8.12); rounded, fine.
- Uncited but standard and correct: rolling tyre uses static friction (also in Siyavula), ABS, walking by static friction, $v^2$ drag and fuel use, streamlining.

## Arithmetic and answer checks
Recomputed independently (Python, g = 9.81 m/s²); `calc:test` for this page passes (75 tests).
- Crate: $F_N$ = 392.4 N; $\mu_s F_N$ = 196.2 N; $\mu_k F_N$ = 137.3 N; net 82.7 N; $a$ = 2.07 m/s² → 2.1. The check "acceleration well below g, as it should be for a push smaller than the weight" is valid ($a < P/m < g$ when $P < mg$). Graph thresholds 196 and 137 match.
- Skid: $a$ = 6.867 and 3.924 m/s²; $\Delta x$ = 29.1 m and 51.0 m; $t$ = 2.91 s; 10 × 2.91 = 29.1 m; ratio 1.75. All correct.
- Car drag: 356.4 N → "≈ 360"; at 15 m/s 89.1 N; 30 m/s = 108 km/h. Correct.
- Units of $\rho A v^2$ = N: correct, so $C_D$ dimensionless (consistent with the other block that relies on this).
- Skydiver: 2mg = 1765.8; /0.90 → $v_t$ = 44.29 m/s = 159 km/h ("about 160"); parachute 1765.8/50.4 = 35.04 → 5.92 m/s; drag at 44.3 m/s = 883.1 N vs weight 882.9 N; $v_t/g$ = 4.52 s ("about 4.5"). Correct.
- Graph caption: $v_t$ = 44: $v(5)$ = 35.45 m/s ("about 35"), $v(10)$ = 42.99 m/s = 97.7 % ("43 m/s, about 98%"). Correct.
- Quiz 1: 70 N (static friction equals the push below the maximum). Distractors wrong; explanation true.
- Quiz 2: 117.7 N × 0.25 = 29.4 N → 29 N. Distractors 3.0, 48, 118 wrong, and the explanation of each is true.
- Quiz 3: no unit. Correct.
- Quiz 4: × 4. Correct.
- Quiz 5: 686.7 N → 687 N; 1373 N → "1370" (twice the weight). Correct.
- Flashcards: all true.

## Only earlier terms
- Friction $\vec F_f$, contact force, electric origin: lesson 2.1 (what-is-a-force, lines on friction and "at bottom, is friction"). Supported.
- "Lesson 2.2 said ... slowed by forces": newtons-first-law has "Things that slow down on their own are slowed by friction or air resistance". Supported.
- Normal force $\vec F_N$, perpendicular: lesson 2.5. Third law: 2.4. Second law: 2.3. Free fall, $g$: lesson 1.7. $v_f^2 = v_i^2 + 2a\Delta x$: lesson 1.6, same notation.
- Feather vs hammer "without air (lesson 2.3)": 2.3 explains why all objects fall alike and points to air resistance (lesson 2.6); the hammer-feather drop itself is in lesson 1.7. Fine (could cite 1.7 instead).
- Density and kg/m³: hs-0 units-and-si; the page also defines it and points to lesson 4.1. Fine.
- Dimensionless: used in hs-0 (units-and-si and others) and defined again here. Fine.
- Fluid, viscosity, cross-sectional area, drag coefficient: defined where first used. Fine.
- tanh: new; described in words where used ("grows like its input ... levels off at 1"), with "You do not need to derive this". Acceptable; not defined in any earlier lesson (info).
- Field, inflation, Hubble friction (callout only): explained in brackets; acceptable for a forward-looking callout.

## Coverage
- §4 row 2.6: "Friction and drag", PhET target `8-01/resistive-forces`; §3.5 assigns `forces-and-motion-basics` (Friction screen). Covered: static and kinetic friction, coefficients, drag $\propto v^2$, terminal velocity, PhET Friction screen (it has a friction slider and stackable objects, as the page says).
- Possible gap at VWO level (uncertain, owner to check against the syllabus by hand): rolling resistance as a roughly constant force is often treated alongside air drag in Dutch VWO mechanics; the page does not mention it. Friction on slopes is left to lesson 2.8, which is fine.

## Where this leads
- 8.01 Lecture 6 "Contact Forces" (`contact-forces`) and Lecture 14 "Resistive Forces" (`resistive-forces`): both exist and match their `why` (the latter treats linear and quadratic drag and terminal velocity).
- 8.286 Lecture 23: see row 1; add 8.902 Lecture 12 for Hubble drag.
- `towards: false` is right (2.6 is not the block's last lesson).

## Licensing and AI terms
- No copied sentences found. Closest pair: Siyavula "if a book slides across a table, the table exerts a frictional force onto the book and the book exerts a frictional force onto the table" vs page "When a book slides over a table, the table exerts friction on the book (backwards) and the book exerts friction on the table (forwards)": same example, reworded, with directions and the third-law link added. Acceptable, but could use another object to be safe (info).
- Worked examples (40 kg crate, skidding car, 90 kg skydiver) and quiz items are the page's own; none matches Siyavula's Worked examples 1–4 (30 N/0.34, scrum machine 10 000 N/0.78, pram 100 N, block 32 N/8 N) or MIT's Examples 8.5, 8.6, 8.12 or Table 8.3.
- The one MIT phrase quoted is marked as a quotation.
- Both graphs are generated by `<Plot>` from formulas; no figure copied.
- No Siyavula logo or "Everything Science" branding on the page. MIT chapter has no excluded-material notice (the PDF footer says "8.01 Classical Mechanics, Spring 2022", while the page title says 8.01SC Fall 2016, the course that hosts it: info only).
- No NASA or ESO material; no forbidden source cited or used. PhET via the standard component.
- No em dashes on the page.

## Notes
- Verdict pass-with-notes: no errors found; four warnings (leadsTo wording, unsourced table not labelled as such, Amontons wording, calcs coverage).
- The calcs file has `source: {cite, at}` on every entry, and origins are honest (`page-own` for own numbers and the table, `mit` for da Vinci/Amontons, air density, $C_D$, drag units).

## Resolution (2026-11-20, by the page author)
1. The 8.286 Lecture 23 `why` now names only the slow roll off a flat plateau; added `leadsTo {course: "8.902", lecture: 12}` (inflation-scalar-field) with the Hubble-friction / terminal-velocity reason. The callout now also says the graduate astrophysics course writes down the Hubble friction term.
2. The page now says the table values are "rough values of our own, typical of those quoted for these surfaces; they are not taken from the sources of this lesson". Every table calcs entry's `at` says the values are the page's own and not in the source.
3. Now "rediscovered and published by Guillaume Amontons in 1699" (calcs `davinci` shown updated).
4. Calcs: one `fact` per table value (10 entries: μ_s and μ_k for each row, including μ_k 0.7, 0.4, 0.3, 0.05 and ice μ_s 0.1); facts `cd-cube` (1.05) and `cd-streamlined` (0.04); the quiz `choices` lines of quizzes 1, 2 and 5, "118 N is the normal force itself" and the four "196 N" mentions in the crate steps added to the `shown` of the matching entries. `scan --numbers --uncovered` now lists only section and equation numbers in citations.
5. Callout now says Hubble friction grows in proportion to the speed of the field, like the low-speed drag, not like v² air drag.
6. Not changed: the reviewer found the current citation fine, and the text already points to MIT Eqs. (8.3.6)–(8.3.7).
7. No change (reviewer: fine).
8. No change (own example, correctly computed).
9. Reworded the third-law pair example to a box sliding across a floor, to move further from Siyavula's book-on-table sentence. Also added one sentence on rolling resistance (Coverage note) after the anti-lock braking sentence.
