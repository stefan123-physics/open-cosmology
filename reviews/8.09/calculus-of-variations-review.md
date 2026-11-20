---
page: content/year-4/8.09/calculus-of-variations-review.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: printed pp. 22-23 from page images, rest of Chapter 1 from pdftotext)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (resource page for the same PDF; content checked through the PDF)
  - MIT 8.09 Chapter 4 notes, start of Section 4.1, pp. 60-61 (read, pdftotext, for the leadsTo)
  - content/year-4/8.286/geodesic-equation.mdx (read, for the leadsTo to 8.286 Lecture 13)
verdict: pass-with-notes
---

# Review: The calculus of variations: from a stationary integral to the Euler–Lagrange and Hamilton equations

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Symbols: `y` (data/symbols.json, meaning scoped to this page) | In eq. (1.76)-(1.78) y_i is the unknown function; in eq. (1.79) y is a Cartesian coordinate | The only page-scoped meaning of plain `y` is "A Cartesian coordinate", but the page also writes plain `y` for the unknown function (summary frontmatter `J[y] = ∫ f(y, ẏ, s) ds`, quiz 1 `f(y, \dot y, s)`, `\partial f/\partial y`, flashcards). A reader tapping `y` in quiz 1 gets the wrong meaning | Write the general functional with `y_i` everywhere (as eq. 1.76 does), or extend the `y` meaning on this page to say both uses (unknown function in the general part; Cartesian coordinate in eq. 1.79) |
| 2 | info | "Hamilton's equations from a variational principle", last paragraph | p. 23: the end conditions on δp_i are "actually *required*" to put q_i and p_i on the same footing | "The notes keep them on purpose: they put q_i and p_i on the same footing" | Acceptable paraphrase; "the notes insist they are needed" would carry Stewart's emphasis more exactly |
| 3 | info | Quiz 4 explanation | Eq. (1.84) integrates [∂L/∂q_j − d/dt ∂L/∂q̇_j] δq_j, i.e. minus the bracket of (1.83) without R_j | "Hamilton's principle, which integrates the same bracket over the path" | "the same bracket (with the sign reversed and R_j = 0)" or "essentially the same bracket" |
| 4 | info | Symbols: `\theta` | θ is the polar angle (colatitude) on the sphere | Only the general meaning "An angle." applies | Optional: add a page-scoped meaning "The polar angle (colatitude) on the sphere, measured from the north pole" with unit rad, matching the `\phi` entry |

No formula, equation number or page citation is wrong. Checked against the page images of printed pp. 22-23:
- (1.76) functional, p. 22: matches.
- (1.77) first-order variation, p. 22: matches (sum inside the integral, same order of terms).
- (1.78) Euler–Lagrange, p. 22: matches.
- (1.79) ds on the sphere, p. 22: matches, including dr = 0.
- (1.80) ds with θ as parameter, p. 22: matches.
- Great circles sin(φ − α) = β cot θ: unnumbered in the notes, top of p. 23; cited as "Section 1.5, p. 23" without an equation number, which is correct.
- (1.81), (1.82), (1.83), (1.84), p. 23: all match (the page uses square brackets where (1.83) and (1.84) use round ones; same content).
- Text claims (s = t, y_i = q_i, f = L, J = S; independence after holonomic constraints; generality beyond mechanics; ṗ_i absent from f; R_j = 0 for (1.84)) all agree with the notes.
- The page's own added steps are correct: f does not contain φ, so ∂f/∂φ̇ is conserved; multiplying sin(φ − α) = β cot θ by a sin θ gives y cos α − x sin α = β z, a plane through the centre (checked symbolically).
- Slips in the notes: none of substance in pp. 22-23 (only "the shortest distance between points ... are great circles", a grammar slip, not repeated).

## Arithmetic and answer checks
Recomputed independently (Python):
- Parallel route: a sin 30° · π/2 = 0.7854a; with a = 6371 km, 5003.8 km → "5004 km" correct.
- Great-circle constants: cities at φ = 0, 90°, θ = 30° (cot θ = √3): −sin α = β√3, cos α = β√3 → α = −45°, β = cos 45°/√3 = 0.40825 → "0.408" correct (the other root α = 135°, β < 0 is the same circle).
- cos c = cos²30° + sin²30° cos 90° = 0.75; c = 0.72273 rad; 0.72273 × 6371 = 4604.54 km → "4605 km" correct; saving 399.2 km → "about 400 km" correct. (The page uses the spherical law of cosines here without naming it; correct, but a few words such as "from the dot product of the two position vectors" would show where it comes from. Info only.)
- Northmost point: sin(φ − α) = 1 at φ = 45°; tan θ = β → θ = 22.21°, latitude 67.79° → "67.8° N", "nearly 8° north" (7.79°) correct.
- Plot curve 90 − atan(0.408248/sin(x + 45°)): gives 60° at x = 0 and x = 90 and 67.79° at x = 45; it is the solved form θ = arctan(β / sin(φ − α)) of the great-circle equation. Point (45, 67.79) lies on it. Range 55-72 contains the curve and the 60° line.
- Quiz 1: answer 1 (Euler–Lagrange) correct; explanation correct.
- Quiz 2: ratio 0.7854/0.7227 = 1.087 → "About 1.09 times" (answer 1) correct; explanation's numbers correct.
- Quiz 3: f = p_i q̇_i − H has no ṗ_i, so the p equation is q̇_i − ∂H/∂p_i = 0; answer 1 correct, explanation correct.
- Quiz 4: answer 1 correct (see note 3 on its wording).
- Flashcards: all four correct and consistent with (1.78), (1.80), the great-circle solution, (1.81)-(1.84).
- calcs/8.09/calculus-of-variations-review.yaml: every entry checked by hand above; `npm run calc:test -- -k calculus-of-variations-review` → 13 passed. The identity `great-circle-solves-el` was also checked analytically: along φ = α + arcsin(β cot θ), sin²θ φ̇ / √(1 + sin²θ φ̇²) = −β/√(1 + β²), a constant, as the Euler–Lagrange equation requires. (Its `origin: mit` is reasonable since the equation is MIT's; the numerical check itself is the page's own. Info only.)

## Coverage and order
- Notes pp. 22-23, "Calculus of Variations" part, in order: functional (1.76) → variation (1.77) → integration by parts and Euler–Lagrange (1.78) → generality remark → Example: Hamilton's principle → Example: great circles (1.79)-(1.80) and solution → Example: Hamilton's equations from phase-space variation (1.81)-(1.82) and the remark on δp_i → d'Alembert vs Hamilton (1.83)-(1.84). The page follows exactly this order and leaves nothing out.
- Added by the page (stated as its own, per the known decisions): the plane-through-the-centre remark, the 60° N worked example, the plot.
- The Lagrange-multiplier part (pp. 23-28) is correctly left to lagrange-multipliers-constraint-forces, and the intro says so.

## Licensing
- Chapter 1 carries no "rights reserved" or "Courtesy of" notice (grep of the full text, and pp. 22-23 have no figures). The page uses no MIT figure; the plot is generated from a formula.
- No sentence copied from the notes. The closest paraphrases ("the end points stay fixed and only the path between them moves"; "The result holds for any integrand f, not only in mechanics") are reworded, not copied. Standard terms only.
- No OpenStax or LibreTexts material.
- The worked example is original (the notes have no numerical example here).

## Notes
- leadsTo 8.09 Section 4.1: correct. Section 4.1 (notes pp. 60-61) starts from Hamilton's principle in the phase-space form δ∫(p_i q̇_i − H) dt = 0 and its new-variable counterpart, and uses the fixed end points δq = δp = 0 to drop the total derivative of F, which leads to the generating functions F₁ ... F₄. The "why" is fair.
- leadsTo 8.286 Lecture 13: fair. content/year-4/8.286/geodesic-equation.mdx derives geodesics as paths of stationary length with fixed end points; the great circle is a special case of the same calculation (and that page itself mentions great circles on a sphere).
- No em dashes on the page (grep count 0). Internal links (/courses/8-033/geodesics-calculus-of-variations, /courses/8-09/lagrange-multipliers-constraint-forces) and all three prerequisites exist.
- Symbol meanings otherwise fit the page: α (one equator crossing: at θ = 90°, sin(φ − α) = 0 gives φ = α, correct), β, δ, φ, a, c, η, f, J, s, S, H, L, R_j and the dotted forms. `m` (only in a quiz distractor, p_i = m q̇_i) has a fitting meaning. `x`, `z` as Cartesian coordinates fit (1.79) and the plane remark.
- Not checked: rendering, label placement and read-aloud (content:check / build were not run by the reviewer).

## Resolution (2026-11-19, by the page author)

- Warning (symbols): the page-scoped meaning of y now covers both the Cartesian coordinate and the unknown function y(s), y_i(s) of a variational problem.
- Info 2: the page now says the notes insist the end conditions on δp_i are needed, rather than "keep them on purpose".
- Info 3: quiz 4's explanation now says Hamilton's principle integrates the Euler–Lagrange bracket with the opposite sign and without R_j.
- Info 4: θ has a meaning scoped to this page (colatitude on the sphere).
- Info 5: the worked example now names the cosine rule of spherical trigonometry (or the dot product of the position vectors) for cos c.
- `npm run content:check` and `npm run calc:test` pass.
