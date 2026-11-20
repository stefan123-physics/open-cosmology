---
page: content/year-1/18.01/chain-rule-and-higher-derivatives.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-4-chain-rule/ (not read online: the OCW video page itself was not fetched; lecturer identity checked in the transcript instead)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec4/ (read: local copy n4.pdf/n4.txt supplied by the page author, "Lecture 4, Sept. 14, 2006, Chain Rule, and Higher Derivatives", OCW cover + 3 printed pages; text layer only, page images not rendered, so a few garbled symbols were reconstructed from context)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/4sTKcvYMNxk.pdf (read: local copy t4.pdf, transcript "ocw-18-01-f07-lec04", 10 pages, checked page by page with pdftotext -f N -l N)
  - content/year-1/18.01/derivatives-of-sine-and-cosine.mdx (read: overlap check)
  - content/year-1/18.01/derivative-as-slope.mdx (read: the 1/x rule from Lecture 1)
  - content/year-4/8.286/closed-universe-cycloid.mdx and age-closed-universe.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/_course.json (read: Lecture 5 title for leadsTo)
  - calcs/18.01/chain-rule-and-higher-derivatives.yaml (read; `npm run calc:test -- -k chain`: 17 passed; `npm run content:check`: no finding for this page except the missing review file)
  - data/symbols.json (read: all 20 meanings scoped to chain-rule-and-higher-derivatives, plus the general θ and Δ meanings)
verdict: pass-with-notes
---

# Review: The chain rule and higher derivatives

Transcript pages = PDF pages (10). Notes pages are the printed page numbers 1-3 (PDF pages 2-4): p. 1 = chain rule, Example 1 (sin t²), function notation, non-commutativity; p. 2 = Figure 1 (composition diagram), Example 2 (cos 1/x), Example 3 (x⁻ⁿ two ways); p. 3 = higher derivatives, notations, Dⁿxⁿ = n! with induction.

Transcript map: p. 1 recap of (cu)′ and (u+v)′, programme, product rule and x^n sin x; p. 2 product-rule proof (Δ(uv) split, limit, continuity of v); p. 3 student questions, quotient rule stated, start of its proof (new values u + Δu, v + Δv); p. 4 quotient-rule proof, limit, 1/v; p. 5 1/xⁿ, negative powers, start of chain rule (sin¹⁰ t); p. 6 x = sin t, y = x¹⁰, chain-rule proof, first example; p. 7 back-substitution, "burst the chains", sin(10t), start of higher derivatives; p. 8 derivatives of sine, operator notation, D; p. 9 d²u/dx² (not d(x²)), D³, "not always periodic", D x^n, D² x^n, D³ x^n; p. 10 n!, D^(n+1) x^n = 0.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | leadsTo 8.286 Lecture 9, `why` | The existing 8.286 Lecture 9 pages (closed-universe-cycloid, age-closed-universe) do not compute da/dt as (da/dθ)/(dt/dθ); the second half of Lecture 9 goes from H and Ω to α and θ through the Friedmann equation. The 8.286 Lecture 9 transcript was not read for this review, so whether Guth does the chain-rule step on the board is **uncertain**. | "The expansion rate of a closed universe, da/dt, is a ratio of two derivatives with respect to the parameter θ, by the chain rule." Reads as a description of what Lecture 9 does. | Reword so it does not imply that Guth does this calculation, e.g. "Lecture 9 gives a closed universe through a parameter θ; its expansion rate da/dt then follows from the chain rule as (da/dθ)/(dt/dθ)." The callout already words it correctly ("The chain rule still gives…"). |
| 2 | warning | "The quotient rule and negative powers", paragraph after "Negative powers" | Notes p. 2, Example 3 gives **two** ways: (1) x⁻ⁿ = (1/x)ⁿ, with outside uⁿ and inside 1/x; (2) x⁻ⁿ = 1/xⁿ, with outside 1/u (derivative −1/u², "Think of xⁿ as u") and inside xⁿ. | "The notes reach the same result a second way, writing x⁻ⁿ = 1/xⁿ and using the rule for 1/x from Lecture 1 together with the chain rule below (notes, p. 2)." Only way (2) is described, and "a second way" hides that the notes give two. | "The notes reach the same result in two more ways, with the chain rule below: as (1/x)ⁿ, or as 1/u with u = xⁿ; both use the rule for 1/x from Lecture 1 (notes, p. 2)." |
| 3 | warning | "The product rule, once more" (whole section) | The product rule and a complete proof (notes' split, with u(x + Δx) in the second term, and the rectangle picture) are already on the previous page, derivatives-of-sine-and-cosine (its Formula "Proof of the product rule", reading1 PDF p. 3). Lecture 4's transcript proves it again (pp. 1-3). | Repeats the full proof in three display formulas, with one bracketed line saying the notes split it the other way. | Following MIT's lecture is fine, but the repetition can be cut: keep the new x^n sin x example (Formula "A product") and the one-line split "Change of a product", replace "Product rule" (the limit) by a sentence, and link back to the earlier proof. Optional. |
| 4 | info | Formula "Change of a quotient", `at="p. 4"` | The set-up (new values u + Δu and v + Δv) starts at the foot of transcript p. 3; the cross-multiplying and cancellation are on p. 4. | p. 4 | "pp. 3–4" would be more exact; p. 4 is not wrong for the displayed result. |
| 5 | info | Formula "Derivatives of the sine" | Transcript p. 8 reads "so u'' is sin x" (the minus sign is missing; a sentence later Miller says "There's a constant term, -1, constant factor", so this is probably a transcription loss, not a slip on the board). | u″ = −sin x (correct). | Nothing needed. A bracketed note is optional, as the slip is probably in the transcript only. |
| 6 | info | "Notations" formula | Transcript p. 8-9 lists one more form between (d/dx)²u and d²u/dx² ("I could also write as-- like that", almost certainly (d²/dx²)u); the notes (p. 3) use f, not u. | Omits that intermediate form. | Optional; nothing wrong. |
| 7 | info | Quotient rule | Previous page states it with v ≠ 0; MIT's Lecture 4 does not repeat the condition. | No condition. | Optional: add "(where v ≠ 0)". |
| 8 | info | Bracketed remark under "Proof of the chain rule" | Notes p. 1: "As Δt → 0, Δx → 0 too, because of continuity"; transcript p. 6: "It cancels, right? … This is just basic algebra." Neither mentions Δx = 0. | "[This short argument divides by Δx, so it assumes Δx ≠ 0 for small Δt; a careful proof also covers the case Δx = 0, and the rule holds in general.]" | Correct and fairly placed: it flags a gap in MIT's argument, not a lecturer slip. "In general" could say "whenever g is differentiable at t and f at g(t)". Optional: one example where Δx = 0 happens for arbitrarily small Δt (a constant inside function, or t² sin(1/t) near 0). |

Every other formula citation was checked and is correct:
- "A product", reading2 p. 1: yes (x^n sin x example, p. 1).
- "Change of a product", reading2 p. 2: yes; the page uses the corrected signs (the transcript's own "minus" was fixed to "plus" on the board, p. 2).
- "Product rule" (limit), reading2 pp. 2–3: yes (limit and continuity of v on p. 2, "dv/dx … that's the formula" at the top of p. 3).
- "Quotient rule", reading2 pp. 3–4: stated p. 3, derived p. 4. Yes.
- "Derivative of a reciprocal", reading2 p. 4: yes, including the form v⁻²v′.
- "Negative powers", reading2 p. 5: yes (−x⁻²ⁿ · nx^(n−1) = −nx^(−n−1)).
- "Naming the inside", reading2 p. 6: yes (y = (sin t)¹⁰ introduced at the foot of p. 5, x = sin t, y = x¹⁰ on p. 6).
- "Proof of the chain rule", reading2 p. 6: yes.
- "Chain rule in function notation", reading1 p. 1: yes (d/dt f(g(t)) = f′(g(t))g′(t)).
- Order of composition sin(x²) vs sin² x, notes p. 1: yes.
- "First example", reading2 pp. 6–7: yes (10x⁹ cos t on p. 6, back-substitution on p. 7).
- "Second example", reading2 p. 7: yes.
- "Third example", reading1 p. 2: yes (notes Example 2, u = 1/x, result sin(1/x)/x²).
- "Derivatives of the sine", reading2 p. 8: yes.
- "Notations for the second derivative", reading2 pp. 8–9: yes; "not d(x²)" is p. 9; D³u and d³u/dx³ p. 9; notes p. 3 for f^(n), Dⁿf, dⁿf/dxⁿ: yes.
- "Repeated derivatives of a power", reading2 p. 9: yes.
- "The n-th derivative of xⁿ", reading2 p. 10: yes; D^(n+1)xⁿ = 0 also p. 10.
- Induction, notes p. 3: yes, the page's chain D^(n+1)x^(n+1) = Dⁿ((n+1)xⁿ) = (n+1)Dⁿxⁿ = (n+1)·n! matches the notes.
- Intro: "Haynes Miller, substituting for David Jerison" is transcript p. 1. Correct.
- "Lecture 3's notes split the same change the other way round, with u(x + Δx) in the second term": checked against the previous page's Formula "Proof of the product rule" (Δu·v(x) + u(x + Δx)·Δv). Correct.
- "the rule for 1/x from Lecture 1": derivative-as-slope.mdx derives d/dx(1/x) = −1/x². Correct.

## Arithmetic and answer checks
- Worked example "A quotient": f′(x) = ((x² + 1) − 2x²)/(x² + 1)² = (1 − x²)/(x² + 1)²; f′(2) = −3/25 = −0.12. Correct.
- Worked example "A power of a polynomial": dy/dx = 5(3x² + 1)⁴·6x = 30x(3x² + 1)⁴; at x = 1, 30·4⁴ = 30·256 = 7680. Correct.
- Worked example "Higher derivatives of x⁵": 5x⁴, 20x³, 60x²; 60 at x = 1; D⁵x⁵ = 120; sixth derivative 0. Correct.
- Plot caption: slope of sin(x²) at a = 1.5 is 2·1.5·cos(2.25) = 3·(−0.62817) = −1.8845, "about −1.88". Correct. The dashed curve 2x cos(x²) stays within the range [−6, 6] on [0, 3] (|2x cos x²| ≤ 6, reaching −5.47 at x = 3). Fine.
- Cosmology callout: da/dθ = √k α sin θ, dt/dθ = α(1 − cos θ)/c, so da/dt = c√k sin θ/(1 − cos θ). Correct. "Differentiating once more … says whether the expansion is slowing down": d²a/dt² = −c²√k/[α(1 − cos θ)²] < 0 for all θ, so the statement is right (always decelerating).
- Quiz 1: d/dt sin(10t) = 10 cos(10t), answer index 2. Correct.
- Quiz 2: (1/v)′ = −v′/v², answer index 1. Correct.
- Quiz 3: d/dx x⁻³ = −3x⁻⁴, answer index 1. Correct.
- Quiz 4: fourth derivative of sin x = sin x, answer index 3. Correct; explanation chain sin → cos → −sin → −cos → sin correct.
- Quiz 5: D⁵x⁵ = 120, answer index 3. Correct.
- Flashcards: all four correct (chain rule both notations; (1/v)′ and d/dx x⁻ⁿ = −nx^(−n−1); second-derivative notations with the (dx)² remark; Dⁿxⁿ = n!, D^(n+1)xⁿ = 0).
- calcs/18.01/chain-rule-and-higher-derivatives.yaml: 17 entries, all pass. They cover every formula with a number or identity on the page, every worked-example number, the plot caption, quiz 1, 3, 4, 5 and the callout. Minor: the `shown` string of `sine-fourth-derivative` is `u^{(4)} = \sin x" cite` (it includes the attribute quote and `cite`); it matches the page source but is fragile; `u^{(4)} = \sin x` would be cleaner. The `cycloid-rate` entry cites reading2 p. 6 (the chain-rule proof), which is reasonable for a page-own derivation. Quiz 2 (a symbolic answer) has no entry, which is fine.

## Coverage and order
- The page follows the transcript's order exactly: product rule (example, proof) → quotient rule (statement, proof) → 1/v → negative powers → chain rule (composition, new variable name, proof, sin¹⁰ t, sin 10t) → higher derivatives of sine → operator notation and D → Dⁿxⁿ = n! → D^(n+1)xⁿ = 0. Notes material (function notation, non-commutativity, cos(1/x), the induction proof) is placed sensibly.
- Left out (all acceptable): the transcript's opening recap of (cu)′ = cu′ and (u + v)′ = u′ + v′ (p. 1; on the previous page); the "burst the chains" remark on the name (p. 7); the notes' Example 1 worked out symbolically, d/dt sin(t²) = 2t cos(t²) (it appears only as the plot's 2x cos(x²)); the notes' pattern table Dx = 1, D²x² = 2, D³x³ = 6, D⁴x⁴ = 24 before the guess n!; the (d²/dx²)u form (#6); the notes' Example 3 first way (#2).
- Added beyond MIT: the bracketed Δx = 0 remark (#8), the plot, three original worked examples, the cosmology callout. All appropriate.
- Repetition with the previous page: see #3. The quotient-rule proof is not a repetition (the previous page only describes how the notes begin it). The callout repeats the previous page's θ-derivatives but completes them with the chain rule, which is the point; fine.

## Licensing
- Neither t4.txt nor n4.txt contains "rights reserved" or "courtesy"; both carry the standard OCW CC BY-NC-SA notice. The notes' Figure 1 (composition diagram) is not reproduced.
- No OpenStax or LibreTexts material.
- No verbatim copying found: wording is the page author's own; short phrases such as "inside function", "outside function", "the dx's cancel" are standard terminology or a brief paraphrase.
- Worked examples (x/(x² + 1), (3x² + 1)⁵, x⁵) are original; the MIT examples (x^n sin x, sin¹⁰ t, sin 10t, cos 1/x) are clearly presented and cited as MIT's.
- No em dashes on the page.

## Notes
- Symbols (data/symbols.json, meanings scoped to this page):
  - `n`: "the power in xⁿ (positive or, for x⁻ⁿ, negative)" is ambiguous: on this page n itself is always positive and the negative exponent is −n. Suggested: "A positive whole number: the power in xⁿ, the n in x⁻ⁿ (so the exponent there is −n), and the number of derivatives in Dⁿ." (warning)
  - `θ`: no meaning is scoped to this page, so the callout's θ falls back to the general "An angle." The development-angle meaning (scoped to closed-universe-cycloid etc.) fits; add a page-scoped meaning or add this page to that meaning's `pages`. (warning; uncertain whether derivatives-of-sine-and-cosine has the same gap, not checked)
  - `u`: the meaning covers u in the product/quotient rules, u = 1/x and u = 3x² + 1, but not u = sin x and the generic u of u″, D²u, d²u/dx² in the higher-derivatives sections. Add "in the higher-derivative sections, the function being differentiated repeatedly (u = sin x in the example)". (info)
  - α (unit m) and k (unit 1/notch²) are consistent with a in m/notch and a/√k in m. `a` (slider point and scale factor), `c`, `t`, `x`, `y`, `d`, `D`, `m`, `f`, `g`, `v`, `f′`, `g′`, `u′`, `v′`, `u″` are all correct for their use on the page.
- The previous page (derivatives-of-sine-and-cosine.mdx, line 221) says "the next lecture completes both proofs", although it has just given the notes' complete product-rule proof. Not this page's problem; mention only.
- 18.01 Lecture 5 leadsTo ("Implicit differentiation") matches the syllabus title in _course.json. Its content was not checked (Lecture 5 sources not read).
- The 8.286 Lecture 9 transcript and slides were not read; finding #1 rests on the two existing 8.286 Lecture 9 pages and is marked uncertain.

## Resolution (2026-11-15, by the page author)

- **Warning 1 fixed:** the `leadsTo` for 8.286 Lecture 9 now says only that a and t are both functions of θ there and that the chain rule turns that into da/dt; it no longer suggests Guth does this step.
- **Warning 2 fixed:** both of the notes' ways for x⁻ⁿ (as (1/x)ⁿ with the chain rule, and as 1/u with u = xⁿ) are now named.
- **Warning 3:** the product-rule section keeps the lecture's own proof (it is this lecture's board work) but now links back to the Lecture 3 page for the notes' version and the rectangle picture.
- Info: "Change of a quotient" cites pp. 3–4; the quotient rule shows (v ≠ 0); the notation (d²/dx²)u is added to the second-derivative formula. Info 5 (transcript "u'' is sin x") left as is; the page has the correct sign. Info 8 (when the chain rule holds) left as the bracket says.
- **Symbols:** the `n` meaning now says n is positive and only the exponent −n is negative; the `u` meaning covers u = sin x and the general u; θ has a meaning on this page (the cycloid's parameter).
- **Calcs:** the `sine-fourth-derivative` entry quotes `u^{(3)} = -\cos x,\quad u^{(4)} = \sin x` instead of text ending in a stray attribute.

Status set to `reviewed`.
