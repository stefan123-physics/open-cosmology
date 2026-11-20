---
page: content/year-2/8.04/shooting-method.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes12/ (read: local PDF n12.pdf, Zwiebach, Chapter 12, section 4 "Shooting Method", printed pp. 11–12)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/ (read: local PDF n11.pdf, Chapter 11, pp. 6–8, eqs. (2.23)–(2.36); not listed in the page's frontmatter)
verdict: needs-changes
---

# Review: The shooting method

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The shot outside the well" `<Formula cite="mit" at="notes p. 8, eq. (2.32)">` | `cite="mit"` resolves to the page's `source.url`, the **Chapter 12** notes. Eq. (2.32) is in the **Chapter 11** notes (n11, printed p. 8). It states only the two matching conditions for the bound state, with a single decaying exponential: cos(ka) = A e^(−κa), −k sin(ka) = −κA e^(−κa). | The formula ψ = B e^(η(u−1)) + C e^(−η(u−1)) with B, C = ½(cos ξ ∓ (ξ/η) sin ξ) | The citation points to the wrong document, and the cited equation is not this formula: the growing term and the B, C coefficients are the page's own derivation. Add a reference, e.g. `references: { notes11: { title: "MIT 8.04 lecture notes, Chapter 11 (Zwiebach)", url: https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes11/, location: "p. 8, eq. (2.32)" } }`, then cite `cite="notes11" at="p. 8, eq. (2.32): matching conditions; the growing term B is added here"`. Alternatively, say in the prose that B and C are the page's own extension of (2.32). |
| 2 | error | `calcs/8.04/shooting-method.yaml`: entries `matching`, `matching-slope` (p. 8, eq. 2.32), `ex-eta` (p. 7, eq. 2.27), `ex-energy-fraction` (p. 7, eq. 2.29) | These equations are in the Chapter 11 notes | `source: {cite: mit, …}`, which means Chapter 12 | Use the new Chapter 11 reference key from finding 1 in these four entries. |
| 3 | warning | Square-well example paragraph: "with $u = x/a$ and $\xi = ka$, $\eta = \kappa a$ as before", $z_0^2 = 2mV_0a^2/\hbar^2$, "bound-state condition $\eta = \xi\tan\xi$", and odd $\eta = -\xi\cot\xi$ | Definitions from Chapter 11, eqs. (2.26), (2.27), (2.34), (2.36), pp. 7–8 | Used without a citation to the Chapter 11 notes; only the square-well page is referred to | One parenthetical "(Chapter 11 notes, eqs. (2.26)–(2.36))" would do. Optional, because the prerequisite page covers them. |
| 4 | warning | Section order | Notes: eq. (4.1) → even start (4.2)–(4.3) → choosing energies and bracketing (p. 11 to top of p. 12, Fig. 12) → odd start (4.4) → hard wall(s) → practical note on units | "Setting up the shot" gives even, odd and hard walls before "Aiming". Bracketing comes after the odd and hard-wall cases. | Either follow MIT's order (move "Odd states" and "Hard walls" after "Aiming") or say in one bracket that the starting values are grouped together. The content is the same. |
| 5 | info | Plot caption: "near ξ = 1.195 it settles towards zero far out" | n/a (page's own example) | At slider value 1.195, B ≈ −0.0010: ψ(2) ≈ −0.003, ψ(3) ≈ −0.42, and the curve leaves the frame (|ψ| > 1.5) at about u ≈ 3.4. At 1.19 it runs up (ψ(3) ≈ +1.06). The exact root 1.1936 lies between two slider steps (step 0.005). | "Settles towards zero far out" overstates this. Suggest: "at ξ = 1.195 it hugs zero out to about u = 3 before turning down; the ground state, ξ ≈ 1.1936, lies between the slider steps 1.19 and 1.195." Or use step 0.0005 or a finer slider. |
| 6 | info | Quiz 3 ("ψ(0) = ψ′(0) = 0 … zero everywhere") | Not stated in section 4 | Page's own addition | The claim is correct (uniqueness for a linear second-order ODE). It is fine as an addition. |

## Arithmetic and answer checks
All recomputed independently in Python:
- z₀² = 10.5. The square-well page's electron well gives 2·511000·10·0.2²/197.33² = 10.498, so "close to the 10 eV electron well" holds.
- (a) ξ = 1.15: η = √(10.5 − 1.3225) = 3.0294 ✓ (page 3.029). B = +0.03100 ✓ (+0.031), runs up ✓. ξ = 1.25: η = 2.9896, B = −0.04073 ✓ (−0.041), runs down ✓.
- (b) The root of B = 0 on (1.15, 1.25) is ξ = 1.193570 ✓ (1.1936). |E|/V₀ = (10.5 − ξ²)/10.5 = 0.86432 ✓ (0.864). 10 eV × 0.8643 = 8.64 eV, matching the square-well page's −8.64 eV ✓.
- (c) Odd: ψ = sin(ξu)/ξ inside has ψ′(0) = 1 in the variable u ✓. The growing coefficient outside is ½(sin ξ/ξ + cos ξ/η), which vanishes when η = −ξ cot ξ ✓. Root on (π/2, π): ξ = 2.33634 ✓ (2.336). It is the first excited state ✓ (|E|/V₀ ≈ 0.480, which agrees with −4.80 eV on the square-well page).
- Matching formula: B + C = cos ξ and η(B − C) = −ξ sin ξ, checked numerically at ξ = 1.1 (both sides −0.98033) ✓. B = 0 ⇔ η = ξ tan ξ ✓. Inside equation d²ψ/du² = −ξ²ψ, outside η²ψ ✓.
- Plot expression: u ≤ 1 → cos(qu); u > 1 → B e^(η(u−1)) + C e^(−η(u−1)), with η = √(10.5 − q²), set to NaN when |ψ| > 1.5 ✓. The expression matches the Formula exactly. On the whole slider range 0.8–1.6, η² > 0, so there are no NaN artefacts from the square root. Inside, |cos| ≤ 1 stays in range ✓. Behaviour: q = 0.8, 1.1, 1.19 run up; q = 1.195, 1.2, 1.3, 1.6 run down ✓. "Below ξ ≈ 1.19 … upwards, above it downwards" is correct to the stated precision (crossover 1.1936). See finding 5 for the "settles" wording.
- Quiz 1: answer 0 (ψ(0) = 1, ψ′(0) = 0) ✓, matching eqs. (4.2)–(4.3).
- Quiz 2: answer 0 (a bound state lies between E_a and E_b) ✓, matching notes p. 11. The distractor "(E_a + E_b)/2 exactly" is correctly wrong.
- Quiz 3: answer 0 (zero solution) ✓.
- Flashcards: starting values (even, odd, hard wall ψ = 0, ψ′ = 1) match eqs. (4.2)–(4.4) and p. 12 ✓.
- Citations checked against the printed footers: eq. (4.1), (4.2), (4.3) on p. 11 ✓. Eq. (4.4), odd start, hard walls and practical note on p. 12 ✓. Bracketing runs from p. 11 into p. 12 ✓. In n11, eqs. (2.26)–(2.29) are on p. 7 and (2.32)–(2.36) on p. 8 ✓ (the page numbers in the calcs file are right; only the document key is wrong).

## Coverage and order
- Every part of section 4 is covered: eq. (4.1); the even start and why ψ′(0) = 0; picking E₀, divergence up, finding E₁ with divergence down, narrowing the interval with the divergences moving outwards; the odd start (4.4) with both reasons; a hard wall; two hard walls; the practical note x = bu.
- Fig. 12 is described in words and not reproduced (stated on the page) ✓.
- Order differs slightly (finding 4).
- Added: the square-well shooting example, the plot and quiz 3 (all marked or recognisable as the page's own).
- Section 4 is the last section of Chapter 12, so the page's statement "the last section of … Chapter 12" is correct. Lecture 13 in `_course.json` points to lecnotes12, which is consistent with the frontmatter.

## Licensing
- `grep` for "rights reserved" and "courtesy" in the Chapter 12 and Chapter 11 notes finds nothing. The notes carry only the standard OCW footer (CC BY-NC-SA) and a transcription credit.
- No figure is reproduced. The graph is generated from a formula.
- No verbatim copying of sentences. Two close paraphrases, acceptable as short and rewritten: "what typically goes wrong is that the solution cannot be normalized" (notes: "What happens typically is that you get a solution that could not be normalized") and "b a length built from the constants of the problem" (notes: "a quantity with units of length built from the parameters in the problem"). "Clean out" the units is the notes' own quoted phrase. It is short, but it could be reworded.
- No OpenStax or LibreTexts material.

## Notes
- There is no `Callout kind="cosmology"`. The page has no direct cosmology link, and that is acceptable. `leadsTo` (8.04 Lecture 14, delta function, node theorem, oscillator) matches the syllabus title for Lecture 14 ✓.
- The notes say "integrate … from x = 0 to x = ∞". The page's "integrating from x = 0 outwards" is equivalent ✓.
- The page's statement that bound states of an even potential are even or odd is standard (1D bound states are non-degenerate). The notes imply it ("search for even and for odd bound states") ✓.

## Resolution (2026-11-17, by the page author)

1. Fixed: a `references` entry `notes11` (the Chapter 11 notes) was added; "The shot outside the well" now cites `notes11`, p. 8, eq. (2.32) for the matching conditions only, and both the citation and the prose say the growing term and the coefficients B and C are the page's own extension.
2. Fixed: the four calcs entries (`matching`, `matching-slope`, `ex-eta`, `ex-energy-fraction`) now cite `notes11`.
3. The prose now cites Chapter 11, eqs. (2.26)–(2.27) for ξ, η and eq. (2.34) for η = ξ tan ξ.
4. A bracket now says the page gathers all starting values before the search over energies, unlike the notes' order.
5. The caption now says the runaway starts farther out as ξ approaches 1.1936 and the shot decays at that value; the slider step is 0.0005.
6. No change.

Status set to `reviewed`.
