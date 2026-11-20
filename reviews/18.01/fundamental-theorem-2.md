---
page: content/year-1/18.01/fundamental-theorem-2.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-20-second-fundamental-theorem/ (read: local copy lec.html; its PDF link is Pd2xP5zDsRw.pdf; page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec20/ (read: local copy n.html, links lec20.pdf, marked Creative Commons License; notes.pdf/notes.txt, "Lecture 20: Second Fundamental Theorem", OCW cover + printed pp. 1-4 = PDF pp. 2-5; printed pp. 3-4 also inspected as images, because the text layer garbles the prime-count formula)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/Pd2xP5zDsRw.pdf (read: local copy transcript.pdf, page-split text tp.txt, 11 PDF pages, "ocw-18-01-f07-lec20")
  - content/year-1/18.01/_course.json (read: Lecture 21 = "Applications to Logarithms")
  - content/year-4/8.286/horizon-distance.mdx (Lecture 8) (read, for the callout and leadsTo)
  - calcs/18.01/fundamental-theorem-2.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k "fundamental-theorem-2"`: 10 passed)
  - data/symbols.json (read: all 22 meanings scoped to `fundamental-theorem-2`, plus the general ℓ_c entry)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: needs-changes
---

# Review: The second fundamental theorem of calculus

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-4, as on the other 18.01 pages. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "New functions from integrals", prime-count paragraph (and calcs `primes-count`) | Notes pp. 3-4 count "200-digit primes" by integrating 1/ln t from 10²⁰⁰ to 10²⁰¹. That is a slip in the notes: the integers in [10²⁰⁰, 10²⁰¹) have **201** digits. 200-digit numbers are [10¹⁹⁹, 10²⁰⁰), which gives about 9×10¹⁹⁹/460 ≈ 2×10¹⁹⁷ primes. | Repeats the slip: "how many 200-digit primes there are ... about 2×10¹⁹⁸ primes". | Following AGENTS.md rule 4, either say "201-digit primes" and keep the numbers, or keep "200-digit" with the interval 10¹⁹⁹ to 10²⁰⁰ (ln t ≈ 458 to 460, result ≈ 2×10¹⁹⁷). In both cases add a short bracket, e.g. "(the notes call these 200-digit primes, but numbers from 10²⁰⁰ to 10²⁰¹ have 201 digits)". Update the calcs `where` text to match. |
| 2 | warning | Same paragraph | Notes p. 3: ln 10²⁰⁰ ≈ 460, ln 10²⁰¹ ≈ 462. Notes p. 4: "we will approximate to one significant figure: ln t ≈ 500", then (1/500)(10²⁰¹ − 10²⁰⁰) = 9·10²⁰⁰/500 **≈ 10¹⁹⁸**. | "ln t lies between about 460 and 462 ..., so roughly ... ≈ 9×10²⁰⁰/500, about 2×10¹⁹⁸ primes ... (notes, pp. 3-4)". The jump from 460-462 to 500 is not explained, and the final value 2×10¹⁹⁸ is attributed to the notes, which give 10¹⁹⁸. | Add the rounding step ("which the notes round, to one significant figure, to 500") and say that 9×10²⁰⁰/500 = 1.8×10¹⁹⁸, which the notes round to 10¹⁹⁸. The value 2×10¹⁹⁸ is arithmetically right (1.8×10¹⁹⁸, and 9×10²⁰⁰/461 ≈ 1.95×10¹⁹⁸), but it is the page's own rounding. |
| 3 | warning | Quiz 3 | n/a (the page's own question) | Choices "1/2 and 1" (marked) and "0 and π". F(1) = π/4 ≈ 0.785 also lies between 0 and π, so a second choice is also a true statement. | Replace "0 and π" with a false range, e.g. "1 and π/2" or "0 and 1/4". |
| 4 | info | "Better than the mean value theorem", the average paragraph: "(pp. 1-2)" | Transcript p. 1 introduces the average. The discrete example (a = 0, b = n, Σ f(i)/n, Δx = 1) is all on p. 2. | pp. 1-2 | Acceptable. "p. 2" would be more exact for the discrete example. |
| 5 | info | "Why FTC 1 is true": "this step is the one that needs the mean value theorem, the underpinning of all calculus" | Transcript p. 9: "the underpinnings of all of calculus are ... the fact ... that if two functions have the same derivative, they differ by a constant"; the MVT is the simplest way to prove that fact. | As written, the phrase "the underpinning of all calculus" reads as describing the mean value theorem. | Optional rewording: "this step, that two functions with the same derivative differ by a constant, is what the lecturer calls the underpinning of all calculus, and it needs the mean value theorem". |
| 6 | info | Slip bracket on the notes' "f(x) = sin x" | Notes p. 2: "illustrate with the example f(x) = sin x", then G(x) = ∫₀ˣ cos t dt = sin x. Notes p. 3 continue the slip: ∫ₐᵇ **sin x** dx = F(b) − F(a) = sin b − sin a, with F = sin x + 21. | "(The notes illustrate this with "f(x) = sin x" but then integrate cos t; they mean f(x) = cos x, notes, pp. 2-3.)" | The bracket is correct and the conclusion (f = cos) is right. Optional: mention that the p. 3 integral is also written with sin x where cos x is meant. |
| 7 | info | Formula "Second fundamental theorem of calculus (FTC 2)", `cite="reading1" at="p. 1"` | Notes p. 1 state it with **F**(x) = ∫ₐˣ f(t) dt, F′ = f. The name G is the transcript's (pp. 5-6). | G(x), G′ = f, cited to the notes only. | Optional: also cite the transcript, pp. 5-6, or say the notes call the area function F. The physics is identical. |
| 8 | info | Callout "A horizon that grows" and leadsTo 8.286 Lecture 8 | The site's Lecture 8 page (horizon-distance.mdx) writes the **physical** horizon distance ℓ_p,horizon(t₀) = a(t₀)∫₀^t₀ c dt/a(t). | Uses the **comoving** distance ℓ_c(t) = ∫₀ᵗ c dt′/a(t′), whose derivative is c/a. | Correct as written (the derivative of the physical distance would not be c/a, since a(t) multiplies the integral). Optional: add "(Guth multiplies by a(t) to get the physical horizon distance)" so the reader can match it with Lecture 8. |

## Arithmetic and answer checks
- FTC 1 as an average (transcript p. 1): ΔF/Δx = (1/(b − a))∫ₐᵇ f. Matches.
- Exam problem (transcript pp. 3-4): F′ = 1/(1 + x), F(0) = 1 (stated on p. 3; the givens themselves were on the board, but 1/(1 + c)·4, ∫₀⁴ dx/(1 + x) and "F(0) was 1" fix them). MVT: 4/(1 + c) with 0 < c < 4 (the range of c is added by the lecturer on p. 4) lies between 4/5 and 4, so 9/5 < F(4) < 5. Integral bounds ∫₀⁴ 1/5 dx = 4/5 and ∫₀⁴ 1 dx = 4. All correct. Page's own F(4) = 1 + ln 5 = 2.6094 ≈ 2.61: correct.
- Exam attribution: the transcript ("ocw-18-01-f07-lec20", a 2007 recording) says only "the problem that you had on the exam ... an Exam 2 problem". The page says "a problem from the second exam" and does not claim it is from the OCW Fall 2006 exam, which is fair. I did not check the OCW exam files themselves.
- Worked example "Bounding an arctangent": on [0, 1], 1/2 ≤ 1/(1 + x²) ≤ 1, so 0.5 ≤ F(1) ≤ 1; F(1) = π/4 = 0.7854. Correct.
- Integrate, then differentiate: G(x) = [−1/t]₁ˣ = 1 − 1/x, G′ = 1/x² (transcript pp. 6-7). Correct.
- Worked example "Derivatives of integrals": √(1 + x³) and −cos(x²). Both correct. The antiderivative of √(1 + t³) is not elementary (it is elliptic), so "not known" is fair.
- FTC 1 proof (transcript p. 9; notes p. 2): (G(b) + c) − (G(a) + c) = G(b) − G(a) = ∫ₐᵇ f − 0. Correct.
- Any antiderivative (transcript p. 10): ∫₁² dt/t² with −1/t gives −1/2 + 1 = 1/2; with 1 − 1/t gives 1/2 − 0 = 1/2. Correct.
- Plot: mathjs `erf` exists, and the curves compile (checked with the site's mathjs: √π/2·erf(3) = 0.88621, √π/2·erf(1) = 0.74682 = ∫₀¹ e^(−t²) dt, e^(−1) = 0.3679). Caption "√π/2 ≈ 0.886" is correct, and the slope of the area curve is the height of the bell curve (FTC 2). The range [0, 1.1] holds both curves.
- Primes: 200 ln 10 = 460.5 ≈ 460, 201 ln 10 = 462.8 (the notes, with ln 10 ≈ 2.3, give 462). 9×10²⁰⁰/500 = 1.8×10¹⁹⁸. See findings 1 and 2 for the digit count and the rounding.
- Quiz 1: index 1 = 1/x². Correct, and the explanation's check (G = 1 − 1/x) is right. Quiz 2: index 1 = −cos(x²). Correct. Quiz 3: index 1 = "1/2 and 1". Correct, but "0 and π" is also true (finding 3). Quiz 4: index 1 = 3, since (1/3)·9 = 3. Correct.
- Flashcards: all three are correct.
- Calcs file: 10 entries, all pass. `primes-count` (expected 2e198, 20 % tolerance) passes against 1.8e198 but its `where` text repeats the "two-hundred-digit" slip (finding 1). Some `source` fields on page-own entries are loose (`arctan-bound-check` cites reading2 pp. 3-4; `gaussian-area` cites notes p. 3, which give lim erf = 1, implying √π/2, but not the number). Harmless.

## Coverage and order
- Transcript order: FTC 1 recalled and read backwards (p. 1); ΔF/Δx = average of f (p. 1); discrete average (p. 2); comparison with the MVT, "abandon the mean value theorem" (pp. 2-3, again p. 4); Exam 2 problem by MVT and by integrals, the one-rectangle Riemann sums (pp. 3-4); student questions on the range of c (pp. 4-5); FTC 2, dummy variable warning ("In 18.02 you will be completely lost"), G defined by Riemann sums (p. 5); y′ = f, y(a) = 0 always solvable (p. 6); d/dx ∫₁ˣ dt/t² example and check (pp. 6-7); picture proof of FTC 2 (pp. 7-8); proof of FTC 1 and the MVT's role (pp. 8-9); F vs G example (p. 10); L(x) = ∫₁ˣ dt/t, transcendental (pp. 10-11); ∫₀ˣ e^(−t²) dt and the π analogy (p. 11). The page follows this order exactly, and every segment is covered.
- Notes-only material (erf with lim = 1, Li and the prime count, Fresnel C and S, Bessel J₀, C′ = cos(x²); notes pp. 3-4) is placed after the transcript material, which is reasonable. The notes' Fresnel S(x) and the formula for J₀ are not given; not needed. (The notes' J₀ formula has 1/(2π) in front of ∫₀^π, where the standard form is 1/π; the page does not repeat it.)
- Attribution of the lecturer's remarks, all verified: "drop the mean value theorem" = "we can abandon the mean value theorem" (p. 3; also "literally abandon", p. 4). The π analogy (area of a unit circle, not a root of an algebraic equation with rational coefficients, p. 11) is paraphrased correctly. The dummy-variable warning (p. 5: "done by many people in textbooks ... especially in old-fashioned textbooks"; "In 18.02 you will be completely lost") is fairly rendered as "even in textbooks" and "especially in multivariable calculus". "Everybody gets wrong until they practise it" is a short attributed quote (p. 6).
- Lecturer slips not repeated by the page, so no bracket is needed: p. 6 "integral from 0 to x of f(t) dt" (meant 1 to x); p. 7 "interval from 0 to x" (meant a); p. 10 "started from a polynomial" (corrected by him to a ratio of polynomials); p. 11 "antiderivative of 1/x, with value 1 at 0" (meant value 0 at 1; the page uses L(1) = 0 as stated on p. 10). The notes' "ln t ≈ 500 for 200 ≤ t ≤ 10²⁰¹" (meant 10²⁰⁰) is also not repeated.
- Added by the page: two original worked examples, the exact value F(4) = 1 + ln 5, the plot and the cosmology callout.

## Licensing
- The OCW lecture page and notes page are marked Creative Commons License. `grep -il "rights reserved\|courtesy"` over notes.txt, tp.txt and both HTML pages finds nothing.
- No figures are reused: the notes' Figure 1 (area proof) is described in words, and Figure 2 (erf graph) is replaced by a plot generated from formulas.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases and one short quote in quotation marks. The prose is rewritten.
- Worked examples are original (arctangent bounds, √(1 + t³), cos(t²) with the variable in the lower limit). The exam problem is MIT's, and the page says so.

## Notes
- Symbols: the 22 meanings scoped to `fundamental-theorem-2` (a, b, c, d, e, f, F, F′, G, G′, i, n, t, t′, x, y, y′, L, L′, C, C′, J₀) all fit the page. `a` and `t` correctly mention their second roles in the callout, and `t′` is the dummy time variable there. ℓ_c is covered by the general "comoving distance" entry, which fits. Minor wording point: the `c` meaning begins "A constant (in the mean value theorem, the unknown point between a and b)"; the MVT point is not really a constant. Something like "A number: the unknown point of the mean value theorem; the constant in F = G + c; in the cosmology note, the speed of light" would be clearer. Optional.
- Cosmology callout: dℓ_c/dt = c/a(t) by FTC 2 is correct. "Grew fast early, later slows" is right for any increasing a(t). "The horizon problem ... starts from this integral" is a fair, unattributed statement. leadsTo 8.286 Lecture 8 is right: horizon-distance.mdx has this integral (Lecture 8). leadsTo 18.01 Lecture 21 ("Applications to Logarithms") matches the notes p. 4 ("We will use FTC 2 to discuss L(x) ... next lecture") and transcript p. 11.
- Links: `/courses/18-01/fundamental-theorem-1` and `/courses/18-01/mean-value-theorem` use the same pattern as fundamental-theorem-1.mdx.
- No em dashes on the page (content:check reports none).
- Status `draft` is correct until the findings are resolved.

## Resolution (2026-11-16, by the page author)

- **Error:** the prime-count paragraph now speaks of primes between 10²⁰⁰ and 10²⁰¹, with a bracket that the notes call them "200-digit primes" although such numbers have 201 digits; calcs `primes-count` updated.
- **Warning 1:** the page now gives the notes' rounding of ln t to 500 and their result ≈ 10¹⁹⁸, with 1.8 × 10¹⁹⁸ as the more precise value.
- **Warning 2:** quiz 3's choice "0 and π" is replaced by "2 and 3".
- Info: the discrete average cites p. 2; "the underpinning of all calculus" is now attributed to the fact that functions with the same derivative differ by a constant; the sin/cos slip bracket also mentions p. 3; the callout notes that 8.286's physical horizon distance is a(t) times ℓ_c; the `c` meaning is reworded. The other info items are left as they are.
