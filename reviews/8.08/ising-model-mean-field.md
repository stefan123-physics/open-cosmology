---
page: content/year-4/8.08/ising-model-mean-field.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/ising_model/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/c6796eafdf333fb55fb351654657b846_ising_model.pdf (read, local copy; handwritten scan, 7 PDF pages = notes pp. 21-27; read from page images, pp. 21-23 in full (pp. 21 and 23 also at 160 dpi, cropped), p. 24 for the heat-capacity reference and p. 27 only for notices)
  - content/year-4/8.286/higgs-field.mdx and content/year-4/8.286/magnetic-monopoles.mdx (read in part, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: The Ising model and mean-field theory

Chapter III of Wen's notes is handwritten; pdftotext/OCR is useless, so everything below was checked against the page images. Pp. 21-23 hold points ① (Ising model, finite temperature, phase-transition sketch) and ② (mean-field theory, self-consistent equation, second way by minimizing A, the three A(⟨s⟩) sketches, the three tanh sketches, symmetry breaking and the order-parameter sketch, T_c = zJ/k_B). P. 24 starts point ③ Ginzburg-Landau theory, so the split with ginzburg-landau-theory.mdx (pp. 24-27) falls exactly at a point boundary and is sensible.

Every `<Formula>` was compared with its cited page and point. All seven are on the cited page with the same physics and notation (N for N_spin, said so in the intro; the notes write h_eff = zJ⟨s⟩ + h and tanh[(h + zJ⟨s⟩)β], same thing). Boxed labels are right for "Mean-field free energy" (p. 22), "Self-consistent equation" (p. 23) and "Mean-field critical temperature" (p. 23).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Formula "The mean-field approximation", `at="p. 22, point ② (boxed)"` | The box at the top right of p. 22 holds ⟨⟨sᵢ⟩sⱼ + sᵢ⟨sⱼ⟩ − ⟨sᵢ⟩⟨sⱼ⟩⟩ = ⟨sᵢ⟩⟨sⱼ⟩ ≈ ⟨sᵢsⱼ⟩, i.e. the average of the replacement. The replacement itself appears unboxed inside the pair sum of the energy (third line of p. 22). | Cites the replacement sᵢsⱼ ≈ … as "(boxed)". | Harmless (the boxed statement is the replacement's average, and the next paragraph says exactly that). Optionally `at="p. 22, point ② (in the energy; its average is boxed)"` or drop "(boxed)". |
| 2 | info | "Finite temperature" bracket, "the heat capacity in fact grows without bound, like ln\|T − T_c\|" | Not in the notes (page's context). | Onsager's heat capacity diverges as −ln\|T − T_c\| (positive and growing as T → T_c); ln\|T − T_c\| itself goes to −∞. | Write "like −ln\|T − T_c\|" or "logarithmically". |
| 3 | info | Slip (c), and the second sketch on p. 21 | p. 21: beside the A(T) sketch (rising, confirmed) is a sketch of "∂²A/∂T² has jump" drawn positive, high below T_c and dropping to a lower value above, with a smooth N_spin ≠ ∞ curve. | Page reports the rising A(T) slip but not this. | The p. 21 second-derivative sketch has the shape of C_V = −T∂²A/∂T² (compare the C_V sketch on p. 24), not of ∂²A/∂T², which is negative and would jump up. Same sign slip as the A(T) sketch. The page's words ("∂²A/∂T² has a jump") are correct, so no change is needed; optionally extend the existing bracket: "(the sketch of ∂²A/∂T² beside it is likewise drawn with the sign of the heat capacity)". |
| 4 | info | Intro, "headed 'Ising model: phase transition and Ginzburg–Landau theory'" | p. 21: "III. Ising model." with the line "Phase transition and Ginzburg-Landau theory" below. | Merges title and subtitle into one heading with a colon. | Fine as a paraphrase. |
| 5 | info | Callout, "the magnetic monopoles whose overproduction inflation was invented to solve" | Not in the notes; 8.286 magnetic-monopoles.mdx says inflation (Lecture 23) dilutes monopoles and also solves the horizon and flatness problems. | As written. | Historically fair (Guth's 1979-80 work began from the monopole problem). Optional: "which inflation was first proposed to solve" so it does not read as inflation's only purpose. |

Slips claimed by the page, verified against the images:
- (a) p. 23, ∂A/∂⟨s⟩: the denominator is written e^{βh_eff} − e^{−βh_eff} (minus), confirmed at 160 dpi. It must be +, as the page says; with the minus the fraction would be 1 and the result would not be tanh. Confirmed slip.
- (b) p. 23: the left side is ∂A/∂⟨s⟩ and the right side −(…)zJ + zJ⟨s⟩ with no N_spin, while the boxed A on p. 22 carries an overall N_spin. Confirmed: the factor N is left out (harmless at = 0). The page's formula writes (1/N)∂A/∂⟨s⟩, which is correct, and it says so.
- (c) p. 21: A(T) is drawn rising with T (from below the axis, crossing it, bending over near T_c, dotted continuation). Since ∂A/∂T = −S < 0, A must fall. Confirmed slip; the page's bracket explains it correctly.

No other slips found on pp. 21-23. The p. 22 algebra (−zJΣ⟨s⟩sᵢ − hΣsᵢ + J⟨s⟩²·½zN), the partition function and the boxed A are all correct.

## Arithmetic and answer checks
Recomputed independently (plain Python, bisection; k_B = 1.380649 × 10⁻²³ J/K):
- Onsager: 2/ln(1 + √2) = 2.2692 → "2.27 J/k_B" ✓ (text, flashcard 5, "How good", Summary).
- Plot 1 formula: A/N = −k_BT ln(2 cosh βzJ⟨s⟩) + ½zJ⟨s⟩²; dividing by k_BT_c = zJ and subtracting the value at ⟨s⟩ = 0 gives −(T/T_c) ln cosh[(T_c/T)⟨s⟩] + ⟨s⟩²/2 ✓. At T/T_c = 0.75: minimum at 0.77552 → "±0.776" ✓; depth −0.04424 → "0.044 k_B T_c below" ✓. Range [−0.26, 0.12] holds the minimum over the whole slider (deepest at r = 0.4: about −0.223); at r = 1.4 the curve leaves the top of the box near ⟨s⟩ = ±1.2 (value 0.26), which is only clipping.
- Plot 2: β zJ = T_c/T, so tanh(x/r) ✓.
- Plot 3: ⟨s⟩ = tanh[(T_c/T)⟨s⟩] ⇒ T/T_c = ⟨s⟩/artanh⟨s⟩ ✓; at ⟨s⟩ → 0 this tends to 1 ✓.
- Worked example (J/k_B = 50 K, z = 4): T_c = 200 K ✓; Onsager 100 K/ln(1 + √2) = 113.46 K → "113.5 K" ✓; 200/113.46 − 1 = 76.3% → "more than 75%" ✓; T_c/T = 4/3 ✓. Iterates from 1: 0.8701, 0.8211, 0.7986, 0.7875, 0.7818, 0.7788, 0.7773, … → page's 0.870, 0.821, 0.799, 0.787, 0.782 ✓ (fourth iterate 0.78748 → 0.787 ✓). Fixed point 0.77552 → "0.776" ✓. (1 + 0.7755)/2 = 0.8878 → "88.8%" ✓. h_eff/k_B = 200 × 0.7755 = 155.1 K ✓. ⟨E_mean⟩ at h = 0: −h_eff N⟨s⟩ + ½zNJ⟨s⟩² = −½zNJ⟨s⟩² ✓; per spin −100 K × 0.6014 = −60.14 K·k_B ✓ = −8.30 × 10⁻²² J ✓. Numbers and situation are original (the notes quote no numbers). T = 150 K is the same T/T_c = 0.75 as the plot caption, which is consistent.
- "A single break … costs only 2J": one broken bond goes from −J to +J ✓.
- Quiz 1: answer index 2 (alternating) ✓. Quiz 2: zJ/k_B = 6 × 10 K = 60 K, index 2 ✓; distractors 10 K (z forgotten) and 120 K (pairs counted twice, effectively J → 2J) correctly explained; 30 K is a plausible "z/2" distractor. The claim that the true simple-cubic T_c is lower is right (about 4.51 J/k_B, from series/Monte Carlo; not on the page as a number). Quiz 3: index 1 ✓. Quiz 4: index 1 ✓, explanation correct (0 is a maximum below T_c).
- Flashcards: all five correct.
- calcs/8.08/ising-model-mean-field.yaml covers every number and the derivation steps (decoupling error, pair counting, partition function, tanh identity, the corrected derivative, slope at the origin). `npm run calc:test -- -k ising`: 29 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- Page follows Wen's order exactly: ① lattice and spins, configuration, E({sᵢ}), ground states for J > 0 / J < 0, Z and A, the phase-transition sketches (2D, N_spin → ∞; ∂²A/∂T² jump vs smooth finite N); ② mean-field replacement and its average (box), sum over different pairs, uniform ⟨s⟩, coordination number with the z = 2 and z = 4 pictures (described in words), E_mean, Z, boxed A; "But what is ⟨s⟩": tanh(βh_eff); boxed self-consistent equation; ⟨s⟩ = f(T, h) and A(T, h, f(T, h)); second way (minimize); the three A(⟨s⟩) sketches; the three tanh sketches; symmetry breaking; order-parameter sketch (1 at T = 0, zero above T_c); small-⟨s⟩ expansion and boxed T_c.
- Nothing on pp. 21-23 is missing. Wen's lattice and spin-configuration drawings are described in words rather than drawn, which is fine.
- Additions beyond the notes are clearly marked: the history bracket ("Some context not in the notes"), "How good is mean-field theory?" ("This section goes beyond the notes"), the worked example and the callout. The page's own explanations (why a finite sum is smooth; why the decoupling drops only the fluctuation product; the graphical-solution argument about slope > 1) are presented as explanation, not attributed to the notes; the "Minimizing" formula is cited to p. 23 with the corrections stated.
- Split with ginzburg-landau-theory.mdx at the ②/③ boundary (p. 23/p. 24) is sensible; the forward reference "the jump is the mean-field behaviour found on the next page" matches that page (heat-capacity jump, α = 0). The page cites C = −T∂²A/∂T² to p. 24, where it is written as C_V = −(∂²A/∂T²)T ✓.

## Licensing
- No "© … All rights reserved" or "Courtesy of" notice on pp. 21-27 (all seven page images checked). No figure from Huang or any textbook is reproduced; the three graphs are generated from formulas (`<Plot>` with mathjs expressions); no images.
- The prose is rewritten in the page's own words; only standard terms ("self-consistent equation", "symmetry breaking", "order parameter", "coordination number") are shared with the notes. No OpenStax or LibreTexts material.

## Notes
- History and context checked: Ising solved the chain (paper 1925; thesis 1924) and found no transition at T > 0 ✓; Onsager's exact square-lattice solution 1944 ✓; T_c = 2J/[k_B ln(1 + √2)] for E = −JΣsᵢsⱼ with each pair once ✓ (equivalently sinh(2J/k_BT_c) = 1); logarithmic divergence of the heat capacity ✓ (sign, finding 2). Mean field on a chain: predicts 2J/k_B, exact chain has none ✓, and the domain-wall argument is the standard one (correct in outline: energy cost 2J, entropy ~ k_B ln N).
- "Wen's sketch … for a two-dimensional lattice … ∂²A/∂T² has a jump": the notes do say "2D" with a jump; for the exact 2D model this is not literally right (log divergence), and the page's bracket says so without blaming the notes. Good.
- Cosmology callout and leadsTo (8.286 Lecture 22): consistent with higgs-field.mdx (lecture 22; Higgs field symmetric at high energy, picks a direction as the universe cools; minima a 3-sphere, so "infinitely many equivalent values" ✓) and magnetic-monopoles.mdx (lecture 22; independent domains, defects where they meet, monopoles in all GUTs). The callout correctly separates electroweak breaking (no monopoles) from GUT defects. Note higgs-field.mdx's temperature-dependent potential is an illustrative toy model "not from the lecture"; the callout's "when the universe was hot its minimum was at zero" matches that page's prose ("At very high energy it is perfectly symmetric"), so the attribution "In Guth's Higgs field lecture" is fair.
- Writing rules: no em dashes (0 found); every display equation is a `<Formula>` with `cite` and `at`; `##` sections; ends with `## Summary`. Internal links (/courses/8-044/paramagnets, /courses/8-044/canonical-ensemble, /courses/8-08/ginzburg-landau-theory, /courses/8-286/higgs-field, /courses/8-286/magnetic-monopoles) all resolve to existing pages.
- Verdict pass-with-notes: no errors; the findings are optional wording improvements.

## Resolution (2026-11-19, by the page author)

- Finding 1 (the "(boxed)" label on the mean-field approximation): the citation now reads `at="p. 22, point ② (box at top right)"`; the text already says that averaging the replacement gives the boxed relation.
- Finding 2 (sign of Onsager's logarithm): now "like $-\ln|T - T_c|$".
- Finding 3 (the ∂²A/∂T² sketch on p. 21 drawn positive): added to the bracketed remark about the A(T) sketch: it has the shape of −∂²A/∂T², the heat capacity over T.
- Finding 4 (chapter title and subtitle merged in the intro): left as is, an acceptable paraphrase.
- Finding 5 (callout wording): now "whose overproduction inflation was first proposed to solve".
- No numbers changed; calcs unchanged. Status set to reviewed.
