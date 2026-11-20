---
page: content/year-1/18.01/curve-sketching.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-10-curve-sketching/ (read, saved HTML: links the transcript eRCN3daFCmU.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec10/ (read: lec10.pdf, notes, printed pp. 1-7 after a cover sheet)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/eRCN3daFCmU.pdf (read: transcript, 13 pages)
verdict: pass-with-notes
---

# Review: Curve sketching with the first and second derivative

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A quadratic approximation worked in full", bracketed slip note | Transcript p. 7: Jerison *says* the last term "is -3/8", then gives 51/8 ("if those minus signs hadn't canceled, I would have gotten the wrong answer"). The transcript records speech only; what was on the board cannot be checked. | "On the board the last quadratic term is first said to be −3/8" | Write "In the lecture Jerison first calls the last quadratic term −3/8; it is +3/8, which gives 51/8." The correction itself (+3/8, sum 51/8) is right. |
| 2 | warning | "The second derivative test" vs Summary and flashcard 2 | Notes p. 7 and transcript p. 13: inflection points are where f″ = 0 ("usually" the concavity changes). | Body follows MIT (f″ = 0); Summary says "Inflection point: f″ changes sign"; flashcard says "f″ = 0 (with a change of sign)". | Make it consistent and say so: e.g. "MIT calls points with f″ = 0 inflection points; strictly, the bending must change there (x⁴ has f″(0) = 0 but no inflection)." |
| 3 | warning | Cosmology callout | (not MIT 18.01; compared with 8.286 expanding-sphere.mdx, ä = −(4π/3)Gρa, and cosmological-constant.mdx) | "for ordinary matter ä < 0"; "Dark energy ... makes ä > 0" | "Ordinary matter" usually means baryons; dark matter (and radiation) decelerate too: write "for matter". Vacuum energy gives ä > 0 only once it outweighs the matter (the next sentence implies this, but the first reads as unconditional): "...and, once it dominates, makes ä > 0". |
| 4 | info | Cosmology callout, "Observations of distant supernovae in 1998 showed that our universe changed from one to the other a few billion years ago" | 8.286 cosmological-constant.mdx (Guth): the 1998 teams found the expansion faster now than about five billion years ago. | As quoted | Consistent with the site's 8.286 pages. Strictly, 1998 established present acceleration; the deceleration-to-acceleration transition was mapped directly later (higher-redshift supernovae, c. 2004). Optional: "showed that the expansion is speeding up: it switched from slowing to speeding up a few billion years ago". |
| 5 | info | leadsTo | 8.286 Lecture 6 (expanding-sphere) gives ä = −(4π/3)Gρa < 0: correct and fairly attributed for the concave-down half. | Only Lecture 6 | Consider adding 8.286 Lecture 18 (cosmological-constant) for the concave-up half of the callout. |
| 6 | info | "Why linear relations matter", bracketed GPS remark | Transcript p. 2 says "satellite", a rotating (non-inertial) frame, and gravity differing between Earth and satellite "as a result of general relativity". The word "GPS" is not used in Lecture 10 (the context is Lecture 9's GPS example). | "for GPS the Earth's rotation and the difference in gravity ... add further corrections of the same simple kind" | Content is supported. Fine as is; optionally "for the GPS satellites of last lecture". |
| 7 | info | "Curve sketching: what the derivatives say", warning cited "(p. 9)" | The warning is announced at the foot of p. 8 and stated on p. 9. | p. 9 | Acceptable; "pp. 8-9" would be exact. |
| 8 | info | Section title "The notes' rubric, and three warnings" | Notes pp. 3-5: only Example 2 (1/x) is labelled a warning; Examples 3 and 4 are further examples. | "three warnings" / "Three examples show why each step matters" | Optional: "and three more examples". |
| 9 | info | "Why the quadratic term has a ½" | Transcript pp. 3-4 (a, b, c). | Repeats the previous page's paragraph (linear-and-quadratic-approximations.mdx, "Where the ½ comes from", same a₀, a₁, a₂ notation, notes p. 4). | Not undue: the previous page says the lecture defers it to Lecture 10, and this page cites the transcript. Could be shortened to two sentences plus a pointer. The two derivations (ln(1 + x), (1 + x)ʳ) are only mentioned, not repeated: good. |

All Formula citations checked:
- "Relative change is proportional", reading2 p. 1: correct (ΔT/T ≈ ½ v²/c² stated on p. 1).
- "The limit by linear approximation", reading2 p. 5: correct.
- "Quadratic approximation of the product", reading2 p. 7: correct (cross terms 3/2, 9/2 begin at the foot of p. 6 and repeat on p. 7; 51/8 on p. 7). The 1 − 3x + 9/2 x² and 1 − ½x + 3/8 x² factors cited in prose as pp. 6-7: correct.
- "First and second derivative", reading2 p. 9: correct.
- "The example's derivatives", reading2 pp. 10, 13: correct (factored f′ p. 10, f″ = −6x p. 13).
- "Critical point of ln x / x", reading1 p. 4: correct (printed page 4).
- "Second derivative test", reading1 p. 6: correct (table on printed p. 6).
- Prose citations (notes p. 2 rubric; pp. 3-5 Examples 2-4; p. 7 inflection; transcript pp. 2-3 base point, p. 6 "only if forced", p. 7 10⁻⁶ remark, p. 10 critical point/value and "turning point", p. 11 sharp corner, p. 12 ends and graphing calculator, p. 13 inflection) all verified.

## Arithmetic and answer checks
- ΔT/T = ½ v²/c²: correct rearrangement of T′ ≈ T(1 + ½v²/c²).
- (1 + x)^(−1/2): ½(−½)(−3/2) = 3/8. e^(−3x): 1 − 3x + 9/2 x². Product: linear −3 − ½ = −7/2; quadratic 3/2 + 9/2 + 3/8 = 51/8 = 6.375. Correct.
- Page-own step: k ln(1 + 1/k) ≈ k(1/k − 1/(2k²)) = 1 − 1/(2k). k = 100: 100 ln 1.01 = 0.995033, against 0.995. Correct, and clearly marked as the page's own (the lecture leaves it to the problem set, p. 5).
- 3x − x³: f′ = 3(1 − x)(1 + x); f(±1) = ±2; f″ = −6x; zeros 0, ±√3 ≈ ±1.73. Correct.
- 1/x: y′ = −1/x²; 1/(−1) = −1 < 1 = 1/1. Correct.
- x³ − 3x² + 3x: y′ = 3(x − 1)²; y(1) = 1. Correct.
- ln x/x: y′ = (1 − ln x)/x², x = e, y = 1/e, zero at 1, limits −∞ and 0. Correct.
- x⁴ − 2x²: f′ = 4x(x − 1)(x + 1); f(0) = 0, f(±1) = −1; f″ = 12x² − 4, f″(0) = −4, f″(±1) = 8; inflection ±1/√3 ≈ ±0.577, f = 1/9 − 2/3 = −5/9 ≈ −0.556; zeros 0, ±√2 ≈ ±1.414. All correct.
- x e⁻ˣ: g′ = (1 − x)e⁻ˣ, g″ = (x − 2)e⁻ˣ, g″(1) = −1/e, g(1) = 1/e ≈ 0.368, g(2) = 2/e² ≈ 0.271; concave down before 2, up after; limits correct.
- Plot points (1, 2), (−1, −2), (0, 0) and caption: correct.
- Quiz: Q1 increasing (0) correct; Q2 positive/concave up (1) correct; Q3 "No" (1) correct; Q4 2 (index 2) correct; Q5 maximum (1) correct, "(local)" noted. Explanations correct. Flashcards correct apart from the inflection wording (row 2).
- calcs/18.01/curve-sketching.yaml: `pytest tests/calc -k curve-sketching` 18 passed. Not covered (info): f(−1) = −2, Example 3's (1, 1), g″(1) = −1/e, f″(±1) = 8 only via the identity. Several page-own calcs carry a `source` pointing at notes pages that do not contain those examples (e.g. xexp-derivatives at notes p. 4, quartic-zero at notes p. 2); harmless since `origin: page-own`, but the cites could be dropped.
- `npm run content:check`: 0 errors; only warning for this page is the missing review file (now written).

## Coverage and order
- Transcript order: finishing approximations (proportionality, satellite/GPS, base point, when to use quadratic, why ½, the five-entry box, (1 + 1/k)ᵏ, product example, derivations of ln and (1 + x)ʳ), then curve sketching: goal, warning, f′/f″ rules, Example 1 with critical point/value, common sense, ends, f″ and inflection. The page follows this order exactly.
- The page then adds, honestly labelled as from the notes ("The notes (written for this lecture, while the transcript reaches only the first example)"): the rubric (p. 2), Examples 2-4 (pp. 3-5), the second derivative test and inflection points (pp. 6-7). Good.
- Small omissions (info): notes p. 1 "qualitatively correct, but not necessarily to scale" and Figures 1-2 (typical pictures of a min and a max); notes p. 4-5 method of testing ln x/x with x = 2^(∓n); notes p. 2 and p. 5 "double-check with step 3b". The student question on concavity at the critical points (p. 11, answered with f′ only) is not mentioned.
- Lecturer slips not repeated: "3x − x²" (p. 11, said for 3x − x³) and "set f(x) = 0" (p. 10, meant f′) are silently corrected; brief enough not to need a note, but rule 4 would allow one.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes, transcript or the two OCW pages.
- No copied paragraphs. Short quoted phrases ("the most important definition in this subject", "don't abandon precalculus skills and common sense") are attributed and brief.
- Worked examples x⁴ − 2x² and x e⁻ˣ are not in MIT's notes or lecture: original to the page (standard textbook functions, but own working). No OpenStax/LibreTexts material.

## Notes
- Symbols scoped to this page (a, c, k, T, x, y, t, e, f, g, v, r, f′, y′, x₀, y₀, a₀, a₁, a₂, g′, f″, T′, a_k, g″) all apply here; ä and Δ use general meanings that fit. `a` is scoped "In the cosmology note" while a₀/a₁/a₂/a_k are separate entries: fine. T's meaning (satellite clock) matches p. 1.
- Quiz Q3's second choice contains its own justification, which gives the answer away; consider a shorter choice ("No") with the reason in the explanation.
- Verdict pass-with-notes: no wrong physics, numbers or citations found; fix rows 1-3 before setting `status: reviewed`.

## Resolution (2026-11-15, by the page author)

- **Warning 1:** the slip note now reads "In the lecture Jerison first calls the last quadratic term −3/8".
- **Warning 2:** the page now uses MIT's definition (f″ = 0) throughout, in the body, the flashcard and the Summary, with a bracketed note that x⁴ has f″(0) = 0 without an inflection and that many books require a change of sign.
- **Warning 3:** the callout now says "for a universe of matter (ordinary and dark) or radiation ä < 0" and that dark energy makes ä > 0 "once it dominates".
- Info: the section title now says "three examples". Other info notes (1998 vs later measurements of the switch, a second leadsTo, small omissions, extra calcs, quiz 3 wording) left as they are.
