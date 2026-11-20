---
page: content/year-1/18.01/volumes.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-22-volumes/ (read: local copy lec.html; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec22/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 22: Volumes by Disks and Shells"; OCW cover + printed pp. 1-5 = PDF pp. 2-6)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/ShGBRUx2ub8.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec22")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec21/ (read: Lecture 21 notes, printed pp. 5-6 = PDF pp. 6-7, disks and the ball by symmetry)
  - content/year-1/18.01/_course.json (read: Lecture 23 = "Work, Probability")
  - content/year-4/8.286/expanding-sphere.mdx (read, for the 8.286 Lecture 6 leadsTo; the 8.286 Lecture 6 transcript itself was not re-read)
  - calcs/18.01/volumes.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k volumes`: 15 passed)
  - data/symbols.json (read: all 19 meanings scoped to `volumes`, plus the general meanings of ρ, π, ° that the page falls back on)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: needs-changes
---

# Review: Volumes by disks and shells

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-5, as on the other 18.01 pages. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "More cumulative sums", last paragraph: "The notes add two more examples of shells (notes, pp. 4–6)" | The Lecture 22 notes have only five printed pages: pipe flow is on pp. 4-5 (Example 3), the dartboard on p. 5 (Example 4). PDF p. 6 is printed p. 5. | "notes, pp. 4–6" (mixes PDF and printed numbering). | "notes, pp. 4–5". |
| 2 | warning | data/symbols.json, `a` meaning scoped to `volumes` | - | Quiz 1 and flashcard 1 use $a$ as the left end of an interval ($a \le x \le b$, $\int_a^b$), and `b` is glossed as "the right end of the interval a ≤ x ≤ b". The `a` meaning says only "The radius of the ball, or the height of the cauldron's rim (y = a)", unit m. | Add "or the left end of an interval a ≤ x ≤ b" to the `volumes` meaning of `a` (or drop "unit: m", since the interval end has no unit). |
| 3 | warning | Formula "Heat for the boiling cauldron" ($^\circ\text{C}$), and data/symbols.json `circ` | - | The page uses ° for degrees Celsius; the only meaning of `circ` is "Degrees of angle (as in 45°)", so the popup and "Symbols on this page" explain it wrongly here. | Add a `circ` meaning scoped to `volumes`: "Degrees of temperature (°C)". |
| 4 | warning | "More cumulative sums": "so slice horizontally: disks of volume $\pi y\,dy$ (p. 12)" | Transcript pp. 11-12 says only that horizontal slices give disks and that the integral will be in $dy$ ("we will do that next time"). The disk volume $\pi x^2\,dy = \pi y\,dy$ is in the notes (p. 1 for the cauldron, p. 3 for the heat). | Cites transcript p. 12 for $\pi y\,dy$. | "disks (transcript, pp. 11–12) of volume $\pi y\,dy$ (notes, pp. 1, 3)". |
| 5 | info | Formula "Volume of a ball", `at="p. 4"` | The integrand $\pi(2ax - x^2)$ and the limits 0 to $2a$ are set up on transcript p. 3; the antiderivative and the result $\tfrac43\pi a^3$ are on p. 4. | "p. 4" | `at="pp. 3–4"` (the prose before it already says pp. 3–4). |
| 6 | info | Formula "Method of shells" ($dV = 2\pi x(a - x^2)\,dx$), `at="p. 6"` | Slab argument and $dV = (2\pi x)(a - y)\,dx$ on p. 6; the substitution $y = x^2$ starts at the end of p. 6 and $2\pi(ax - x^3)\,dx$ is on p. 7. | "p. 6" | Acceptable; `at="pp. 6–7"` would be exact. |
| 7 | info | "A paradox about units": "(transcript, pp. 8–10; notes, pp. 1–2)" | The notes' units discussion ("Warning about units", the skinny cauldron, "not scale-invariant") is entirely on printed p. 2; p. 1 only ends with $V = \pi a^2/2$. | "notes, pp. 1–2" | "notes, p. 2" (harmless as is). |
| 8 | info | "The method of disks", colloid remark | Transcript pp. 4-5: the problem "came up over the summer, and this fall, at a couple of universities near here"; 1-micron particles among 10-nm ones; the small ones push the big ones together, **but** the big ones may also stick to the container walls, and the question is which they prefer; the quantity needed is the overlap of a band around one sphere with a band around the other, which, cut in half, is two of the $V(x)$ pieces. | "such pieces of a ball came up that year in research on why large particles in a fluid clump together, pushed by smaller ones". Attributed to "the lecturer", correctly; nothing is overstated. | Optional: add "or stick to the container wall" and "the overlap of two such bands is two caps $V(x)$", so the reader sees where $V(x)$ is used. |
| 9 | info | "The method of shells", last sentence: "(The transcript reads "the $(8 - y)$ dimension" for $a - y$, p. 6.)" | Transcript p. 6: "the (8 - y) dimension"; a few lines earlier the same page says "this height is still ay. a - y, sorry". The "8" is almost certainly a transcription of "a". | As quoted. | Correct. Optional wording: "(The transcript prints "(8 − y)", a transcription slip for $a - y$, p. 6.)" |
| 10 | info | "More cumulative sums": $T = 100 - 30y$ | Transcript p. 11: "Sorry, 30. I said 3-- I wrote 3, but I meant 30." The level $a = 1$ (m) is in the notes (Figure 5, "y = a = 1 meter"); the transcript only says "We'll let the level be 1". | Uses 30 and "with $a = 1$ m" without comment. | Fine (the page does not repeat the slip). Optional: cite the notes, p. 3, for "1 m". |
| 11 | info | Cosmology callout | Shells in 18.01 are cylinders (area $2\pi x \cdot h$); a spherical shell of area $4\pi r^2$ is a different slicing. | "the shell method with the whole surface $4\pi r^2$ in place of $2\pi x$". | Correct as an analogy. Optional: "the same idea with spherical shells". A link to the Ferreras halo page (dark-matter-halos) would back up the halo sentence. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt / notes.txt:
  - "Volume by slicing", reading2 p. 1: loaf of bread, $\Delta V \approx$ area $\times\,\Delta x$, sum as a Riemann sum, all p. 1 (board). Correct.
  - "Method of disks", reading2 pp. 2-3: "its area is pi y^2" ends p. 2, "the thickness is dx. So the incremental volume is this" opens p. 3. Correct.
  - "Volume of a ball", reading2 p. 4: see finding 5. Algebra: $a^2 - (x-a)^2 = 2ax - x^2$; $\pi[ax^2 - x^3/3]_0^{2a} = \pi(4a^3 - 8a^3/3) = \tfrac43\pi a^3$. Correct.
  - "Method of shells", reading2 p. 6: see finding 6.
  - "Volume of the cauldron", reading2 p. 7: limits $0$ to $\sqrt a$, $2\pi[ax^2/2 - x^4/4]$, $2\pi(a^2/2 - a^2/4) = \tfrac{\pi}{2}a^2$, all p. 7. Correct.
  - "Heat for the boiling cauldron", reading1 p. 3: notes p. 3, $H = \int_0^1 (100 - 30y)\pi y\,dy = \pi[50y^2 - 10y^3]_0^1 = 40\pi$ (deg) m³. Correct.
- Prose citations: solids of revolution (pp. 1-2), 2D pictures (p. 2), "y and the limits still needed" (p. 3), $V(x)$ and $V(a) = \tfrac23\pi a^3$ (p. 4), research remark (pp. 4-5), cauldron revolved about the y-axis (p. 5), paper cylinder, slab, height $a - y$ (p. 6), only the right half (p. 7), "can always set it up both ways ... every once in a while one is impossible" (p. 8), units paradox (pp. 8-10; 16 and 1600 litres on p. 9; 20 cm and 2 m across on pp. 9-10), boiling set-up (pp. 11-12); notes p. 1 cauldron by disks, notes p. 3 calories and candy bars; Lecture 21 notes pp. 5-6 (disks p. 5, ball by symmetry from $-a$ to $a$ and $2\int_0^a$ on p. 6). All match except findings 1, 4, 7.
- $V(a) = \pi(a^3 - a^3/3) = \tfrac23\pi a^3$, half of $\tfrac43\pi a^3$. Correct.
- Cauldron by disks: $\int_0^a \pi y\,dy = \pi a^2/2$. Correct.
- Units: $(\pi/2)\times 10^4$ cm³ $= 15\,708$ cm³ $\approx 15.7$ L $\approx 16$ L; $(\pi/2)$ m³ $= 1571$ L $\approx 1600$ L. Top at $y = 100$ cm: $x = 10$ cm, 20 cm across; at $y = 1$ m: $x = 1$ m, 2 m across. Correct.
- Heat: $40\pi\times10^6$ cal $= 1.257\times10^8$ cal $= 1.26\times10^5$ kcal (notes: "125 × 10³ kcal"); $/250 = 503 \approx 500$ bars. Correct.
- Pipe flow: $\int_0^R c(R^2 - r^2)\,2\pi r\,dr = 2\pi c(R^4/2 - R^4/4) = \pi c R^4/2$. Correct. Doubling $R$ multiplies by $2^4 = 16$: correct (the notes say only "proportional to $R^4$ ... a big advantage to having thick pipes"; the factor 16 is the page's own, right, deduction).
- Dartboard: notes p. 5, hits $\propto e^{-r^2}$, ring count $\int c\,e^{-r^2}\,2\pi r\,dr$ "next lecture". The page's "density $c\,e^{-r^2}$" is a fair reading (a density per unit area, since it is multiplied by the ring area).
- Worked example (a): $\int_0^4 \pi\tfrac{9}{16}x^2\,dx = \pi\cdot\tfrac{9}{16}\cdot\tfrac{64}{3} = 12\pi = 37.70$ cm³; cone $\tfrac13\pi\cdot3^2\cdot4 = 12\pi$. Correct.
- Worked example (b): $2\pi\int_0^1 (x^2 - x^3)\,dx = 2\pi(\tfrac13 - \tfrac14) = \pi/6 = 0.5236$. Correct; the region lies right of the axis, so integrating $x$ from 0 is right. (The title "ring-shaped solid" is loose: the solid is a bowl-shaped shell between a cone and a paraboloid. Harmless.)
- Plot: `pi*(x^2 - x^3/3)` is $V(x)$ with $a = 1$; $V(1) = 2\pi/3 = 2.0944$, $V(2) = 4\pi/3 = 4.1888$, both inside the range [0, 4.6] and matching the points; caption correct and says it is computed from the formula. content:check placed the labels without errors.
- Quiz 1: index 1 ($\int \pi f^2\,dx$). Correct; explanation right.
- Quiz 2: index 1 ($2\pi x h\,dx$). Correct; explanation right.
- Quiz 3: index 0 ($\pi/6$). Correct; same as worked example (b), so it tests recall rather than skill. A different pair of curves would test more (optional).
- Quiz 4: index 1. Correct; explanation (20 cm vs 2 m across) right. Distractor "Volume depends on the unit of length" is clearly wrong in the intended sense.
- Flashcards: all three correct.
- Cosmology callout: $\int_0^R 4\pi r^2\rho\,dr = \tfrac43\pi R^3\rho$ for constant $\rho$. Correct.
- Calcs file: 15 entries, all pass. `shell-sphere` (page-own cosmology identity) carries `source: {cite: reading1, at: 'p. 5'}`, but the notes' p. 5 has nothing on spheres; better no MIT location or a pointer to expanding-sphere. Harmless.

## Coverage and order
- Transcript order: volume by slicing, loaf of bread (p. 1); solids of revolution, football, only the upper half matters, never draw 3D (pp. 1-2); method of disks $\pi y^2\,dx$ (pp. 2-3); ball with circle at $(a, 0)$, only $y^2$ needed, limits $0$ to $2a$ (p. 3); evaluation, $V(x)$, half-ball check (p. 4); the research remark (pp. 4-5); method of shells, witches' cauldron $y = x^2$ to $y = a$ about the y-axis; remark that revolving the strip the other way gives a disk with a hole, "practically the same as the method of disks" (p. 5); paper cylinder, height $a - y = y_\text{top} - y_\text{bottom}$, "the letter y in disguise", unrolled slab, circumference $2\pi x$, dimensional analysis remark (p. 6); limits $0$ to $\sqrt a$, $\pi a^2/2$, why only the right half, rotating by 180° with $\pi x$ instead (p. 7); horizontal vs vertical slices, both rotations give the same solid (p. 8); units paradox and resolution (pp. 8-10); boiling cauldron set-up, $T = 100 - 30y$, horizontal disks, $dy$ (pp. 11-12).
- The page follows this order. The cauldron by disks (notes p. 1, where the notes do it first) is inserted after shells: a reasonable choice, cited to the notes. The heat integral, calories, pipe flow and dartboard come from the notes and are labelled as such.
- Omitted, all minor: the washer remark (p. 5); rotating only 180° with $\pi x$ as a second way to see why only the right half counts (p. 7); the football's lower half likewise not counted (pp. 2, 8); the dimensional-analysis remark that three lengths multiply to a volume (p. 6; implicit in the units section); the lecturer's resolution phrasing that "this 1 is just unit-less" (p. 10). Including the washer remark in one sentence would be worthwhile, since it is the standard third method.
- Nothing added that is not in the notes or transcript, apart from the original worked example, the factor 16 for pipe flow and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, transcript or lecture/notes pages (grep of all local copies). The page reuses no figure: its only graphic is a Plot generated from a formula.
- The text is rewritten; no sentence is copied from the notes or transcript. Shared phrases are standard ("method of disks", "not scale-invariant", "witches' cauldron", "unroll it like a sheet of paper" paraphrases the lecture's piece-of-paper demonstration). The notes' chocolate/candy-bar comparison is kept as a fact with citation, fine.
- The worked example (cone, region between $y = x$ and $y = x^2$) is the page's own, not from the lecture or notes.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 18.01 Lecture 23 ("Work, Probability") matches `_course.json`, and the notes themselves defer the dartboard to the next lecture: correct. leadsTo 8.286 Lecture 6: expanding-sphere.mdx (Lecture 6) has $M(r_i) = \tfrac{4\pi}{3}r_i^3\rho_i$: correct and fairly worded.
- Callout: "the mass that pulls on a galaxy at the edge of the expanding sphere in 8.286" matches Lecture 6. "Dark matter halos ... are weighed the same way" is a standard statement (M(r) = ∫4πr²ρ dr for a spherical halo), unattributed but uncontroversial.
- Symbols scoped to `volumes` (19 meanings): all fit the page apart from findings 2 and 3. The `x`, `y` meanings carry unit m, while the worked example is in cm and the units section is exactly about $x$, $y$ being numbers in a chosen unit; consider dropping the unit or writing "a length (m or cm)" (info). ρ uses the general "density" meaning, which fits. `y_top`/`y_bottom` are glossed but appear on the page only in the flashcard ($y_\text{top} - y_\text{bottom}$); fine.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

- **Error 1:** pipe flow and the dartboard are now cited to notes pp. 4–5.
- **Warning 2:** the `a` meaning now includes the left end of an interval.
- **Warning 3:** a `volumes`-scoped meaning of ° as degrees Celsius is added.
- **Warning 4:** the disk volume πx² dy = πy dy is now cited to the notes (pp. 1 and 3).
- Info: the ball formula cites pp. 3–4 and the shells formula pp. 6–7; the units paradox cites notes p. 2; the "(8 − y)" note calls it a transcription slip; a sentence on washers (transcript p. 5) is added; `x` and `y` meanings no longer carry a unit. The other info items are left as they are.
