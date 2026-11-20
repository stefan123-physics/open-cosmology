---
page: content/year-0/hs-0/rearranging-formulas.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read; footer: "released under the terms of a Creative Commons Attribution License", with the usual note that embedded external videos and sims are not necessarily covered)
  - https://www.stitz-zeager.com/ch_0_links.pdf (read from the text extract provided, Section 0.3, pp. 38–49 incl. Exercises 0.3.3)
  - https://www.stitz-zeager.com/ (read; footer badge links to CC BY-NC-SA 3.0; no AI or text-mining clause)
  - calcs/hs-0/rearranging-formulas.yaml (read; `pytest -k rearranging`: 8 passed)
  - calcs/values.yaml (H0 entry, '70' = example round value)
  - content/year-0/hs-0/powers-of-ten.mdx, units-and-si.mdx, significant-figures-and-estimates.mdx (earlier lessons, read for earlier terms)
  - content/year-1/8.01/newtons-laws.mdx (leadsTo target, title and lecture number checked)
  - public/phet/equality-explorer_1.2.7_en.html (screen name "Solve It!" checked), public/phet/manifest.json
verdict: needs-changes
---

# Review: Solving and rearranging formulas

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | calcs entries `hubble-distance` and `megaparsec` | Siyavula Gr 10 Sec. 1.3 "Changing the subject of a formula" has only n = m/M and E = hc/λ; no Hubble's law, no H = 70, no 7000 km/s, no megaparsec or light-year (checked on the page) | `source: {cite: mit, at: 'Sec. 1.3, Changing the subject of a formula'}` and, for `megaparsec`, `at: 'the page''s own unit conversion'` cited to `mit` | Wrong citation: the cited source does not support these numbers. Drop `source` and keep `origin: page-own` (H = 70 is the site's example value in calcs/values.yaml), or add a §2.0 reference that gives the parsec/light-year relation (e.g. a NASA page) to `references` and cite it. Same finding as row 3 of reviews/hs-0/units-and-si.md. |
| 2 | warning | "Changing the subject", the chain $A = \pi r^2 \Rightarrow r^2 = A/\pi \Rightarrow r = \sqrt{A/\pi}$ | Not in either source (Siyavula: n = m/M, E = hc/λ; Stitz–Zeager has C = 2πr as Exercise 19, not A = πr²) | A stand-alone line of maths in its own paragraph, written as inline `$…$`, with no citation | It acts as a display equation, so it should be a `<Formula>` with `cite` (or say it is the page's own example). The physics is correct. |
| 3 | warning | "Changing the subject" and quiz 4: "take the square root", "a positive and a negative square root" | — | Square roots and the ± pair of solutions | Square root is not introduced in 0.1–0.3; §4 places quadratics (where ± roots belong) in 0.6. It is lower-school arithmetic, so a one-line gloss is enough ("the square root of 9 is 3, because 3² = 9; (−3)² = 9 too"). Strictly a term used before it is introduced. |
| 4 | warning | "Solving a linear equation": "An equation is linear in x when x appears only to the first power: no x², no x under a root or in a denominator." | Stitz–Zeager Def. 0.10: linear in X if it **can be written** in the form AX = B with A, B not involving X and A ≠ 0 | A test on how the equation looks before rearranging | Incomplete: e.g. $x(x+2) = x^2 + 6$ contains x² yet is linear (it reduces to 2x = 6), and 3x − 4 = 3x + 7 has x only to the first power but no solution (A = 0, a contradiction in the source). Add: "…that is, it can be rearranged to (number) × x = (number), with a number in front of x that is not zero." |
| 5 | warning | Coverage of "Changing the subject" | Stitz–Zeager Example 0.3.1 #6 (subject appearing twice: factor it out, divide only if the factor ≠ 0) and Exercises 25–27 (x = x₀ + at for t) | Only multiplicative cases are worked (v = d/t, A = πr²); the additive case appears only as a "common mistake" (y = 3x + 6) | Block 1 immediately needs v = v₀ + at → t = (v − v₀)/a. Consider one short worked example with a sum (own numbers), so "undo in reverse order: first the addition, then the multiplication" is shown on a physics formula. |
| 6 | info | Formula "Moves that keep an equation true" | "Add (or subtract) the same real number…"; "Multiply (or divide) both sides … by the same nonzero real number" | $P + C = Q + C$ and $CP = CQ$ $(C \ne 0)$ | Same physics, correct section and page (p. 38). The single "(C ≠ 0)" reads as if it also restricted adding; harmless, but "(C ≠ 0 for multiplying)" would match the source exactly. |
| 7 | info | "An equation is a balance"; Siyavula paragraph "Siyavula's method for physics formulas is the same: multiply both sides to remove a quantity from a denominator, then divide…" | Siyavula: n = m/M → multiply both sides by M, divide both sides by n; E = hc/λ treated the same way. No balance image on the Siyavula page. | Balance metaphor; Siyavula's method described | Attribution of the method to Siyavula is accurate. The balance picture is not from a cited source but is standard and matches the PhET sim. |
| 8 | info | Cosmology callout: "With H = 70 km/s/Mpc" | calcs/values.yaml: 70 = example round value | Presented as the value of the Hubble constant | Correct as an example; "about 70" or "a round value of 70" would avoid implying a precise measured value (modern values lie between about 67 and 73). "Speeds are easy to measure" is true at this level (from the redshift of the light), not said; fine for now. |

## Formulas and citations
- One `<Formula>`: "Moves that keep an equation true", `cite="reading1"`, `at="Sec. 0.3, Procedures which generate equivalent equations, p. 38"`. Checked in the extract: the box is on printed page 38 and says exactly this (row 6). The page's remark that multiplying by 0 gives 0 = 0 and loses the information matches the source's footnote a in its own words.
- `source` (Siyavula Gr 10 Physical Sciences 1.3, "Changing the subject of a formula") exists, shows the CC BY footer (caller's note 2 checked: no "closed copyright" notice on this page), and supports the multiply-then-divide method the page attributes to it.
- `readings[0]` (Stitz–Zeager Ch. 0, Sec. 0.3, pp. 38–43): pages correct (0.3 and 0.3.1 start on p. 38, the strategy box is on p. 39, 0.3.2 starts on p. 43). It supports the two-step strategy, which the page paraphrases correctly, and clearing fractions by multiplying (Example 0.3.1 #2, #3; the source uses the least common denominator, the page "the denominator", equivalent for one fraction).
- calcs citations: `linear-*`, `fraction-*`, `quiz-linear` cite reading1 p. 39 for the method and are `origin: page-own`: acceptable. `trip-time` cites Siyavula for the method only: acceptable. `hubble-distance` and `megaparsec`: wrong (row 1).
- Hubble's law and its 1920s discovery are uncited but standard and correct.
- Both sources are on the §2.0 list; no forbidden source is cited or used.

## Arithmetic and answer checks
Recomputed by hand; calcs file also passes (`pytest -k rearranging`: 8 passed).
- 5x − 7 = 2x + 8 → 3x = 15 → x = 5; check 18 = 18. Correct.
- (x + 6)/4 = x − 3 → x + 6 = 4x − 12 → 18 = 3x → x = 6; check 3 = 3. Correct.
- t = 450 km / 90 km/h = 5.0 h (two significant figures, consistent with 0.3). Wrong form v·d gives km·km/h = km²/h. Correct.
- d = 7000 / 70 = 100 Mpc. Correct. 1 Mpc = 3.2616 × 10⁶ ly, "about 3.26 million". Correct.
- Quiz 1: 4x + 9 = x + 21 → 3x = 12 → x = 4; 25 = 25. Marked answer (index 1, x = 4) right; 3, 6, 10 give 21 ≠ 24, 33 ≠ 27, 49 ≠ 31. Correct.
- Quiz 2: index 2 (divide both sides by the same non-zero number) is the only safe move; others are one-sided or multiply by 0. Explanation true.
- Quiz 3: t = d/v (index 1). Others wrong (vd, v/d have wrong units; d − v adds unlike units). Explanation true.
- Quiz 4: r = √(A/π) (index 1). A/(2π), √A/π, πA² are wrong (units or algebra). Explanation true.
- Quiz 5: index 1; the correct form is (y − 6)/3. Explanation true.
- Flashcards: all true. The "Strategy" card matches Stitz–Zeager.
- Minor (info): the calcs entries compute only the left side of each check (18, 3) and solve quiz 1 for x without computing the shown 25; the right sides (2·5 + 8 = 18, 6 − 3 = 3, 4 + 21 = 25) are not stored separately. Correct by hand.

## Only earlier terms
- Square root and the ± pair of roots: not in 0.1–0.3 (row 3).
- π and the area of a circle: π appears in 0.3; A = πr² is defined on the page itself. Fine.
- "expression", "equation", "coefficient", "subject", "linear", "common factor": defined on the page or plain words. Fine.
- Speed, density, km/h, km²: introduced in 0.2 (units-and-si). Fine.
- Light-year: introduced in the 0.2 callout. Megaparsec: glossed on the page ("about 3.26 million light-years"). Galaxy: used in 0.2. Hubble constant: defined in the callout. Fine.
- `leadsTo.why` mentions force, mass and acceleration (Block 1–2 terms), but it is link text to a university lecture, not lesson content. Fine.

## Coverage
- §4 row 0.4 (topic: solving and rearranging formulas; sim `equality-explorer`, added in §3.5): covered at VWO level: the balance rule, linear equations with unknowns on both sides and fractions, changing the subject, physical choice of root, unit checks, common mistakes.
- Left out: a formula where the wanted quantity sits in a sum or appears twice (row 5; matters, since kinematics needs it next block); inequalities (Stitz–Zeager 0.3.2; not needed for VWO physics at this point); identities and contradictions (info only).
- PhET: `phet: equality-explorer` in the frontmatter with `<PhET title=…/>` (id taken from the frontmatter by lib/mdx.tsx); the sim is in public/phet/manifest.json (1.2.7) and has a "Solve It!" screen as the page says.

## Where this leads
- `leadsTo`: 8.01 lecture 4 → content/year-1/8.01/newtons-laws.mdx ("Newton's laws of motion", lecture 4) exists and matches §4 (`8-01/newtons-laws`). The link (rearranging F = ma) is reasonable.
- `towards: false`: correct, 0.4 is not the block's last lesson. The cosmology callout (Hubble's law, d = v/H) is correct.

## Licensing and AI terms
- No copied sentences found. Closest pairs, both clear paraphrases:
  - SZ: "Isolate all of the terms containing X on one side of the equation, putting all of the terms not containing X on the other side" / page: "Move all terms with x to one side and all other terms to the other side."
  - SZ: "Multiplying both sides of an equation by 0 collapses the equation to 0 = 0, which doesn't do anybody any good." / page: "Multiplying both sides by zero gives 0 = 0, which is true but has lost all the information".
- Worked examples and quiz questions are the page's own: compared with Stitz–Zeager Example 0.3.1 (3x − 6 = 7x + 4, 3 − 1.7t = t/4, …) and Exercises 1–28 (none match), and with Siyavula's n = m/M and E = hc/λ.
- No figures; the only visual is the PhET sim (credit printed by components/PhET.tsx).
- No Siyavula logo or "Everything Science" branding; the name appears only as attribution.
- Stitz–Zeager: CC BY-NC-SA 3.0 (site badge; the PDF itself carries no licence statement), adaptable under CC BY-NC-SA 4.0. No AI clause found.
- No MIT, NASA or ESO material used; no "according to NASA".
- No forbidden source cited, read or reflected.

## Notes
- `npm run content:check` reports only the missing review file for this page.
- Uncertain: I did not check whether Siyavula's "Changing the subject" equation blocks are images or text; the page copies none of them either way.

## Resolution (2026-11-20, by the page author)

- 1 (error, calcs citations): the calcs schema requires a `source` with a key on the page, so `hubble-distance` and `megaparsec` keep `cite: mit` but their `at` now says plainly that these are the page's own numbers and that the source has no Hubble law (H = 70 km/s/Mpc is the site's round example value in calcs/values.yaml).
- 2 and 3: square roots are now introduced in a short paragraph (√25 = 5, two solutions of r² = 25), pointing ahead to lesson 0.6; the chain A = πr² ⇒ r = √(A/π) is presented as the page's own algebra, which needs no source formula.
- 4: "linear" is now defined as Stitz and Zeager do (can be rearranged into (number) × x = (number) with a non-zero number in front of x), with the practical version after it.
- 5: new worked example "When does the cyclist get there?": x = x₀ + v t made into t = (x − x₀)/v, with 20 m, 6.0 m/s and 80 m giving 10 s (calcs `cyclist-time`, `cyclist-check`; symbol meanings x₀, and x and v widened for this page).
- Info: the formula now reads "and, for C ≠ 0, C P = C Q", and the callout calls H = 70 km/s/Mpc "a round value close to the measured ones".

`npm run calc:test` (11 entries for this page) and `npm run content:check` pass.
