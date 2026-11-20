---
page: content/year-0/hs-0/quadratics-and-power-laws.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/mathematics/grade-10/functions/06-functions-02 (read; 6.3 Quadratic functions, subsection "Functions of the form y = ax² + q"; footer "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"; no "All rights reserved")
  - https://www.siyavula.com/read/za/mathematics/grade-10/functions/06-functions-03 (read; 6.4 Hyperbolic functions; same CC BY footer; no "All rights reserved"; no inverse square law, light or power laws on the page)
  - https://www.siyavula.com/read/za/mathematics/grade-10/exponents/02-exponents-02 (read; 2.3 Rational exponents, a^(m/n) = nth root of a^m; same CC BY footer; no "All rights reserved")
  - https://www.stitz-zeager.com/ch_0_links.pdf (read from the text extract provided by the caller; Sections 0.6.1 (pp. 76–82) and 0.7 (pp. 83–95), also Sec. 0.10 p. 129 checked for the quiz; the extract itself carries no licence statement, the CC BY-NC-SA 3.0 badge is on the site per the caller and was not re-checked by me)
  - calcs/hs-0/quadratics-and-power-laws.yaml (read; `pytest -k quadratics`: 15 passed)
  - content/year-0/hs-0/powers-of-ten.mdx, units-and-si.mdx, significant-figures-and-estimates.mdx, rearranging-formulas.mdx, graphs-and-slope.mdx (earlier lessons, searched for earlier terms)
  - content/year-1/8.01/universal-gravitation.mdx (leadsTo target, lecture 5)
  - content/year-4/8.286/cosmological-constant.mdx, flatness-problem.mdx, black-body-radiation.mdx (ρ_m ∝ a⁻³, ρ_r ∝ a⁻⁴)
  - public/phet/manifest.json (graphing-quadratics present)
  - docs/HIGHSCHOOL-PLAN.md §4, Block 0 row 0.6 (OpenStax sources there ignored, not opened)
verdict: pass-with-notes
---

# Review: Quadratics and power laws

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Solving quadratic equations", method 2 (Factoring) and quiz 1 | Stitz–Zeager 0.6.1 assumes factoring techniques from Sec. 0.6 (Example 0.6.2) | "If the left side can be written as a product of two brackets…"; the example simply states $x^2 + 2x - 15 = (x + 5)(x - 3)$. No lesson so far teaches how to find the brackets | A beginner cannot do method 2 or quiz 1 except by guessing. Add one sentence: for $x^2 + bx + c$ look for two numbers that multiply to $c$ and add to $b$ (here 5 and −3). |
| 2 | warning | Method 1, discriminant list, quiz 2, flashcard, Summary | Stitz–Zeager: "no real number solutions", Theorem 0.10 "no real solutions" | "no real solution" used five times; "real number" is never explained in 0.1–0.6 | Add a short clause the first time: "no real solution, that is, no ordinary number on the number line (no number squared is negative)". |
| 3 | warning | Worked example "A ball thrown upward" | Stitz–Zeager Example 0.7.1(5), p. 89: $-4.9t^2 + 10t\sqrt3 + 2 = 0$ solved by the quadratic formula (exercise 25 also has $-4.9t^2 + 100t = 410$) | $-4.9t^2 + 12t + 2.0 = 0$ solved by the quadratic formula | Not copied (different $b$, a physical story, its own check), but it shares the $-4.9$, the $+2$ and the method with the source's example. To keep the example clearly the page's own, change the balcony height (e.g. 3.5 m) and recompute. |
| 4 | warning | `source.readings[0].location` "pp. 76–91" | Definition 0.16 (discriminant) and Theorem 0.10 (Discriminant Theorem) are on p. 92 | The page uses the discriminant and its three cases, which come from p. 92 | Change the location to "pp. 76–93". |
| 5 | warning | calcs file, entry `quiz-discriminant` | Theorem 0.10 is on p. 92 (after the printed header "92 Prerequisites") | `at: 'Sec. 0.7, Theorem 0.10, p. 91 …'` | Change to p. 92. |
| 6 | warning | calcs file, entries `cube-scaling`, `matter-density` (cite reading3, Siyavula 2.3) and `lamp-double`, `quiz-lamp`, `plot-caption` (cite reading2, Siyavula 6.4) | Siyavula 2.3 covers rational exponents only; 6.4 covers y = a/x + q only; neither has scaling of power laws, an inverse square law, lamps or brightness | The `at` names these sections as the method behind the scaling and inverse-square numbers | The "(the numbers are the page's own)" label is honest (I found none of the page's numbers in the sources), but the cited sections do not support the method. Say "standard; no cited source" or cite a source that has it. On the page itself these claims are uncited, which is acceptable because they are standard and correct (see Formulas and citations). |
| 7 | info | Power laws: "by the power rule of lesson 0.1" | Lesson 0.1 calls them the "laws of exponents" / "rules for exponents", $(a^m)^n = a^{mn}$, for positive base | "power rule" | Say "by the rule $(a^m)^n = a^{mn}$ of lesson 0.1" so the reader can find it. |
| 8 | info | "A fractional power is a root" | Siyavula 2.3: $a^{m/n} = \sqrt[n]{a^m}$ | Every fractional power called "a root" | True for $x^{1/n}$; for $x^{3/2}$ it is a root of a power. "A power $1/n$ is a root" is exact. |
| 9 | info | "Solving it means finding where the parabola $y = ax^2 + bx + c$ crosses the $x$-axis" | Siyavula 6.3 (Grade 10) only treats $y = ax^2 + q$ | States that $ax^2 + bx + c$ also gives a parabola | Correct and supported by the PhET sim, but unshown; fine at this level. Optionally add "(also a parabola, now with its turning point moved sideways, as the simulation shows)". |
| 10 | info | Quiz 2 | Stitz–Zeager Sec. 0.10, p. 129: $x^2 - 2x + 5 = 0$, "The discriminant … = −16 is negative" | $x^2 + 2x + 5 = 0$, discriminant $-16$ | Very close to a source example (sign of $b$ only). A textbook staple, but an easy change (e.g. $x^2 + 4x + 7$, discriminant $-12$) removes the overlap. |
| 11 | info | "where the parabola … crosses the $x$-axis" | — | "$x$-axis" is not named in lesson 0.5 (it names the $y$-axis and "horizontal axis") | Meaning is obvious; optionally "the $x$-axis (the horizontal axis)". |

## Formulas and citations
- "Parabola" $y = a\,x^2 + q$, cite `mit` (Siyavula Maths Gr 10, 6.3), at "Sec. 6.3, Functions of the form y = ax² + q": the subsection exists and uses this form. The page's description (sign of $a$ sets up/down, larger $|a|$ narrower, $q$ shifts vertically, turning point $(0, q)$, symmetric about the vertical line through the turning point) matches Siyavula (which writes $(0; q)$ and calls the axis of symmetry $x = 0$). Correct.
- "Quadratic equation" $ax^2 + bx + c = 0,\ a \ne 0$, cite `reading1`, at "Sec. 0.7, Definition 0.15, p. 83": Definition 0.15 is on p. 83 (printed header "0.7 Quadratic Equations 83"). The source writes $AX^2 + BX + C = 0$ with $A, B, C$ expressions not involving $X$; the page's lowercase numbers are the usual school form. Correct.
- "Zero product property" $AB = 0 \Leftrightarrow A = 0$ or $B = 0$, cite `reading1`, at "Sec. 0.6.1, The Zero Product Property of Real Numbers, p. 77": present on p. 77 ("either a = 0 or b = 0 or both"). The page's prose says "at least one", which covers "or both". Correct.
- "The quadratic formula", cite `reading1`, at "Sec. 0.7, Theorem 0.9, p. 86": Theorem 0.9 is on p. 86 (after the header "86 Prerequisites"). Correct.
- Method 1 (square roots, $b = 0$, no real solution if $x^2$ is negative) matches Stitz–Zeager "Solving Quadratic Equations by Extracting Square Roots", p. 83. The advice "use the simplest that works" matches their "Strategies for Solving Quadratic Equations", p. 87, rewritten.
- Discriminant: the three cases match Theorem 0.10, p. 92 (see table #4).
- Hyperbola: $y = k/x$ approaching both axes without touching them matches Siyavula 6.4 (with $q = 0$). $x^{1/2} = \sqrt x$ is supported by Siyavula 2.3.
- Uncited but standard and correct: the scaling law $k(fx)^n = f^n k x^n$; the inverse square law from light spread over $4\pi r^2$; gravity as an inverse square law; the cosmology callout (matter density ∝ size⁻³; radiation energy density ∝ size⁻⁴ because each photon is also redshifted; radiation dominated early). The callout agrees with content/year-4/8.286/cosmological-constant.mdx ($\rho_m \propto 1/a^3$, $\rho_r \propto 1/a^4$) and flatness-problem.mdx.
- All cited sources are §2.0 sources; each Siyavula page shows the CC BY footer and no "All rights reserved". The Siyavula quadratic-equation pages (Maths Gr 10 §4.3, Gr 11 §2.3), which the caller reports as "All rights reserved", are not cited. `references: {}`; no forbidden source is named.

## Arithmetic and answer checks
Recomputed by hand:
- $3x^2 - 48 = 0 \Rightarrow x^2 = 16 \Rightarrow x = \pm 4$. Correct.
- $(x + 5)(x - 3) = x^2 + 2x - 15$; roots $-5$ and $3$. Correct.
- Ball: $b^2 - 4ac = 144 - 4(-4.9)(2.0) = 144 + 39.2 = 183.2$; $\sqrt{183.2} = 13.535 \approx 13.54$; $t = (-12 - 13.535)/(-9.8) = 2.606 \approx 2.6$ s; $t = (-12 + 13.535)/(-9.8) = -0.157 \approx -0.16$ s. Check: $12 \times 2.6 = 31.2$, $4.9 \times 6.76 = 33.12 \approx 33.1$; $2.0 + 31.2 - 33.1 = 0.1 \approx 0$ (exact height at 2.6 s: 0.076 m). All correct; the page's "to the precision of the rounded time" is fair.
- Quiz 1: $(x-2)(x-3) = x^2 - 5x + 6$; $4 - 10 + 6 = 0$, $9 - 15 + 6 = 0$. Answer 0 correct; the other choices fail (e.g. $x = -2$: $4 + 10 + 6 \ne 0$; $x = 1$: $2 \ne 0$; $x = 5$: $6 \ne 0$).
- Quiz 2: $4 - 20 = -16 < 0$, no real solutions. Answer 0 correct.
- Quiz 3: $a = -2 < 0$ opens downward, turning point $(0, 3)$. Answer 1 correct; choice 3 wrongly uses $a$ as the $y$-value, choice 4 is not a parabola.
- Quiz 4: $k(2x)^3 = 8kx^3$. Answer 2 correct.
- Quiz 5: $1/3^2 = 1/9$. Answer 2 correct.
- Scaling: cube $2^3 = 8$; lamp $2^2 = 4$; callout $2^3 = 8$. Correct.
- Plots: $1/r^2$ at $r = 0.5$ is 4, exactly the top of `range={[0, 4]}`; at $r = 2$, $1/r^2 = 0.25$ (a quarter of 1) and $1/r = 0.5$. Caption correct. Parabola plot: slider $a$ includes 0 (a straight line), harmless.
- Flashcards: all true ("Zero: one" is the repeated solution of Theorem 0.10).
- Calcs: 15 entries, all pass. Minor gaps (info): `quiz-factor` checks only the root 3, not 2; `plot-caption` checks the ratio $(1/r^2)/(1/r) = 0.5$ rather than the two values 1/4 and 1/2 the caption states; the intermediate $12 \times 2.6 = 31.2$ has no entry. The "(the numbers are the page's own)" label is honest: none of $3x^2 - 48$, $x^2 + 2x - 15$, the ball's 2.0/12, $x^2 - 5x + 6$ occur in the Stitz–Zeager sections or Siyavula pages read (see #3 and #10 for close cases).

## Only earlier terms
- **real number / real solution**: not introduced in 0.1–0.5 (table #2).
- **factoring a trinomial**: the method is used, not taught (table #1). "Factor" (common factor) and "multiply out brackets" are in 0.4, so checking a factorisation by expanding is covered.
- **power rule**: named differently in 0.1 (table #7).
- **$x$-axis**: 0.5 has "horizontal axis" and "$y$-axis" (table #11).
- **wavelength** and **energy density** (cosmology callout): not introduced (light and waves are Block 5). Acceptable in a forward-looking callout; "density" itself is introduced in 0.1 and 0.2. Info.
- Introduced on the page before use: parabola, turning point, quadratic equation, ±, zero product property, discriminant, power law, inverse proportion, hyperbola, scale, inverse square law; square root and "which solutions are physical" come from 0.4; slope, axes and direct proportion from 0.5; $\pi$ and circle area from 0.4. Sphere area $4\pi r^2$ and sphere volume are stated as facts, fine at this level.

## Coverage
- Covered: the parabola $y = ax^2 + q$ (effects of $a$, $q$), solving quadratics three ways, the discriminant, choosing the physical root, power laws $y = kx^n$ with integer, negative and fractional $n$, scaling, the hyperbola, the inverse square law. Matches the §4 topic.
- Not covered: how to factor (#1, matters); the turning point of a general $ax^2 + bx + c$ ($x = -b/2a$) or the form $a(x - p)^2 + q$ (VWO wiskunde has it; the PhET sim shows the vertex, so a sentence would help; warning-level only if later lessons need it); completing the square (not needed at this level); straightening a graph (plotting $y$ against $x^2$ or $1/x^2$ to get a straight line), a standard VWO physics skill for finding power laws from data. It may fit lesson 0.9 (logarithms) or a practical; worth a note in the plan. Info.

## Where this leads
- `leadsTo` 8.01 lecture 5 = content/year-1/8.01/universal-gravitation.mdx, "The universal law of gravitation"; matches §4 (`8-01/universal-gravitation`) and the "why" (inverse square law). Correct.
- `towards: false` is right: 0.6 is not the block's last lesson. The cosmology callout's claims are correct (see Formulas and citations).

## Licensing and AI terms
- No copied sentences found. Closest wording: page "A quadratic equation is one that can be written as" vs Stitz–Zeager "An equation is said to be quadratic in a variable X if it can be written in the form"; page "a product is zero only when at least one of its factors is zero" vs "If a and b are real numbers with ab = 0 then either a = 0 or b = 0 or both". Both standard phrasing, rewritten.
- No figures from any source: both graphs are generated `<Plot>`s with formula captions; the sim is the hosted PhET Graphing Quadratics (in the manifest).
- Worked example and quiz are not the sources' own, but see #3 (ball, close to Example 0.7.1(5)) and #10 (quiz 2, close to Sec. 0.10).
- Siyavula: cited by name and section only; no logo, no "Everything Maths" branding. Every cited Siyavula page shows the CC BY footer and no "All rights reserved".
- Stitz–Zeager: CC BY-NC-SA 3.0 stated in the reading title (licence badge not re-checked by me; the PDF extract has no licence text).
- No MIT, NASA or ESO material used. No forbidden source cited, named or read.

## Notes
- PhET usage (`phet: graphing-quadratics`, `<PhET title="Graphing Quadratics" />`) follows the same pattern as lesson 0.5. The sim writes $y = ax^2 + bx + c$, the page's notation; no mismatch.
- "Brightness" is used for intensity (power per square metre); fine at this level.
- Physics: the ball formula's $-4.9t^2$ is $-\tfrac12 g t^2$ with $g = 9.8$ m/s²; the site's convention is 9.81, but the page defers the derivation to Block 1 and 4.9 to two figures is consistent. Info only.
- content:check reports nothing for this page except the missing review file.

## Resolution (2026-11-20, by the page author)

- 1: method 2 now explains how to factor x² + bx + c (two numbers that multiply to c and add to b), with 5 and −3 for x² + 2x − 15 (calcs `factor-pair`).
- 2: "real number" is now defined in method 1, with a bracket that complex numbers come at university.
- 3: the worked example now uses h = 1.5 + 14t − 4.9t² (discriminant 225.4, t ≈ 2.96 s, other root ≈ −0.10 s), further from Stitz–Zeager's Example 0.7.1(5); calcs updated.
- 4 and 5: the readings range is now pp. 76–93, and `quiz-discriminant` cites Theorem 0.10 on p. 92.
- 6: the `at` texts of `cube-scaling`, `matter-density`, `lamp-double`, `quiz-lamp` and `plot-caption` now say that the cited section covers only rational exponents (or hyperbolas) and that the scaling argument, the inverse square law and the numbers are the page's own.
- Info: "power rule" is now "the laws of exponents of lesson 0.1"; "a power 1/n is a root"; the x-axis is glossed as the horizontal axis; quiz 2 now uses x² + 4x + 5 (discriminant −4), away from Stitz–Zeager's x² − 2x + 5; a calcs entry now checks the root x = 2 of quiz 1. Vertex of a general parabola and straightening power-law data: left out at this level (the second may come with logarithms in 0.9).

`npm run calc:test` (18 entries for this page) and `npm run content:check` pass.
