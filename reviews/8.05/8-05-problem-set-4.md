---
page: content/year-3/8.05/8-05-problem-set-4.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-4/ (read: PDF and pdftotext text)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: chapter 3 text, eqs. 4.72, 5.80, 5.83)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-4/ (read: chapter 4 text, eqs. 1.3, 1.25 to 1.26, 2.36, 2.42, 3.112)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-1/ (read: chapter 1 text, eqs. 6.27, 6.36)
verdict: pass-with-notes
---

# Review: Problem Set 4: Commutator identities, translations, the Hadamard lemma and best approximations

## Blind solve

### My answers (written before opening the full page)
- 1(e): [f(x),p]ψ = f(ħ/i)ψ' − (ħ/i)(fψ)' = iħ f'(x)ψ, so [f(x),p] = iħ f'(x). For f = e^{-kx²}: g(x) = −2kx e^{−kx²}.
- 2(c): ⟨x⟩ in T(a)|ψ⟩ = x0 + a; ⟨p⟩ unchanged (T commutes with p).
- 3(a,b): f^{(n)}(0) = (ad A)^n B, general term (1/n!)(ad A)^n(B). Factor 1/n!.
  Example: [A,B] = s·diag(1,−1), [A,[A,B]] = −2s² E12, higher zero; e^A B e^{−A} = [[s, −s²],[1, −s]]; top-right −s² (checked directly with e^A = I + A).
- 4(c): e^A e^B = e^B e^A e^{c}, i.e. differ by factor e^{c}. Example: c = [s d/dx, kx] = sk; e^{A+B}1 = e^{c/2} e^{B} e^{A} 1 = e^{kx + sk/2}.
- 5(a): ⟨φ|ψ⟩ = a b* − a* b (purely imaginary); a = 1+i, b = 2: 4i, so 4.
- 5(c): A_12 = φ1 ψ2* = −|b|² = −mb^2.
- 5(d): Q Hermitian; rank ≤ 2 in 3 dims, so a vector orthogonal to both kets gives eigenvalue 0. Tr Q = 3|a|² + 2|b|².
- 7(b): e2 = √6 x/(2π^{3/2}) = sqrt(3/(2π³)) x; e3 = √10 (3x² − π²)/(4π^{5/2}).
- 7(c) (sympy, exact): s1 = 0.987862, s3 = −0.155271, s5 = 0.00564312; c0 = 0.978326, c2 = −0.452288, c4 = 0.0261598.
  Exact: s1 = 105/(8π²) − 16065/(8π⁴) + 155925/(8π⁶); s3 = −315/(4π⁴) + 39375/(4π⁶) − 363825/(4π⁸); s5 = 693/(8π⁶) − 72765/(8π⁸) + 654885/(8π¹⁰); c0 = −105/(4π²) + 2835/(8π⁴); c2 = 315/π⁴ − 14175/(4π⁶); c4 = −1575/(4π⁶) + 33075/(8π⁸).
- 7(d): P_U sin(π) = 0.0159773 exact (0.0159902 with six-digit coefficients); Taylor π − π³/6 + π⁵/120 = 0.524044. True statement: best approximation is much closer over the whole interval (smaller L2 error), Taylor is better only near x = 0.

### Comparison (one line per answer id)
- p1-e (choice 2, iħ f′ψ): agrees.
- p1-g (−2kx e^(−kx²)): agrees.
- p2-mean (x0 + a): agrees.
- p2-p (choice 1, "the same"): agrees.
- p3-term (choice 3, 1/n!): agrees.
- p3-entry (−s²): agrees (direct product (I+A)B(I−A) = [[s, −s²],[1, −s]] in sympy).
- p4-swap (choice 0, e^c): agrees.
- p4-act (exp(kx + sk/2)): agrees; also checked that u(t,x) = e^(kxt + skt²/2) solves ∂u/∂t = (s∂x + kx)u.
- p5-ip (choice 2, imaginary or zero): agrees.
- p5-num (4): agrees.
- p5-a12 (−mb²): agrees.
- p5-herm (choice 3, yes for every a, b): agrees.
- p5-tr (3ma² + 2mb²): agrees.
- p7-e2 (sqrt(3/(2π³)) x): agrees (equals √6 x/(2π^{3/2})).
- p7-e3 (sqrt(45/(8π⁵))(x² − π²/3)): agrees (equals √10(3x² − π²)/(4π^{5/2})).
- p7-s1, p7-s3, p7-s5 (0.987862, −0.155271, 0.00564312): agree; the page's factored exact forms equal mine (105·153 = 16065, 105·1485 = 155925, ...; all six evaluated in sympy agree to 8 digits).
- p7-c0, p7-c2, p7-c4 (0.978326, −0.452288, 0.0261598): agree.
- p7-end (0.0160, 2%): agrees (exact 0.0159773, six-digit coefficients 0.0159902; both inside 2%).
- p7-tay (0.524, 1%): agrees (0.524044).
- p7-where (choice 1): agrees.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), statement, before box p5-ip | (our box) | "The value has the form $i$ times a real number: type that real number." Placed before the choice "what kind of number is ⟨φ\|ψ⟩", this gives the choice away (imaginary). | Delete that sentence; the number box label "⟨φ\|ψ⟩ = i ×" already says what to type. |
| 2 | warning | Problem 3(b), box p3-term (our addition) | MIT displays the lemma with 1/2!, 1/3! and asks for the (n+1)-th term | The box "the term with n nested commutators carries the factor" (1/n!) can be read straight off the displayed lemma and off the displayed e^{ad A}(B). | Replace with a box not given away, e.g. "For the matrices A and B, how many terms of the series are nonzero?" (answer 3), or drop the box and keep p3-entry. |
| 3 | warning | Problem 5(a) solution, formula "The two bras", `at="eq. (1.3)"` | Ch. 4 notes: (1.3) is the antilinearity of the inner product in its first argument; the rule for passing from kets to bras (constants conjugated) is eq. (1.26), via (1.25) | cites (1.3) | Change to `at="eq. (1.26)"`. |
| 4 | info | Problem 1(e), box p1-e | MIT asks for [f(x), p] on a wavefunction | The answer iħ f′ψ is already displayed in part (d) and implied by "write [f(x), p] = iħ g(x)" | Acceptable (in MIT's structure (e) confirms (d)). |
| 5 | info | Problem 5(a), hint 2 | n/a | "The result has the form z − z*" nearly states the result of p5-ip | Optional: "Collect the two surviving terms: how is one related to the other?" |
| 6 | info | Problem 7 intro, "Recall from the lesson" | n/a | "the lesson" not linked | Link it: [inner products and bras](/courses/8-05/eigenvalues-inner-products) (where eqs. 5.80 and 5.81 appear). |

All `cite="mit"` page numbers checked against the printed pages of MIT's PDF: 1(a) to 2(a) p. 1; 2(b), 2(c), Problem 3, Problem 4 eq. (2) and G(t) p. 2; 4(a), 4(b), 4(c), the comment, Problem 5 and 7(a) p. 3; the inner product p. 4. All correct. Lecture-note citations: ch. 3 (4.72) Pythagorean identity, (5.80) Gram–Schmidt, (5.83) projection: correct. Ch. 4 (2.36) ket-bra operator, (2.42) matrix elements, (3.112) ⟨x|p̂|ψ⟩ = (ħ/i)dψ/dx: correct. Ch. 1 (6.27) [x̂, p̂] = iħ, (6.36) p̂ = (ħ/i)d/dx: correct.

## Arithmetic and answer checks
- Every solution step re-derived: 1(a) four terms; 1(b) the twelve terms (each line of the page's expansion matches mine); 1(c) induction; 2(b) F′ = c; 3(b) [A,B] = s·diag(1,−1), [A,[A,B]] = −2s²E₁₂, third commutator zero, direct check equal; 4(a) to 4(c), including the uniqueness argument in 4(b) and the second check in 4(c); 5(c) full matrix and its trace ba* − ab* = ⟨ψ|φ⟩; 5(d) diagonal |a|²+|b|², |a|²+|b|², |a|². Every part ends with a check.
- Integrals (sympy): ∫x sin = 2π, ∫x³ sin = 2π³ − 12π, ∫x⁵ sin = 2π⁵ − 40π³ + 240π, ∫cos = 0, ∫x² cos = −4π, ∫x⁴ cos = 48π − 8π³. All as on the page.
- e₄, e₅, e₆ as printed: each has norm 1 and is orthogonal to all lower powers (sympy).
- Part (d) (numerical, fine grid): max |sin − P| = 0.01599, at the ends; max |cos − P| = 0.0626 ("within 0.063" true); cos Taylor at π = 0.1239 (off by 1.124, "more than 1" true); cos projection at π = −0.9374; errors at x = 0.5: 0.00473 and 1.5·10⁻⁶; Taylor becomes worse from x = 1.210 ("about 1.2"); L2 distances 0.01078, 0.3445, 0.04602, 0.7995 (page 0.0108, 0.345, 0.0460, 0.800); ratio 0.524/0.0160 = 32.8 ("about 33"). All correct.
- Tolerances: 0.1% in 7(c) rejects the Taylor coefficients (1 vs 0.987862 is 1.2% off; 1 vs 0.978326 is 2.2%) and accepts six-digit answers. p7-end 2% accepts both the exact and the six-digit-coefficient value.
- Mistake hints, each checked against its formula: p1-g both true; p2-mean (x0 − a is the mean of ψ(x + a), the translation by −a) and x0: true; p3-entry (−2s² is the top-right of [A,[A,B]]; s² sign; 0 is B alone): true; p4-act (exp(kx) = e^B 1; exp(kx − sk/2) sign of c; exp(kx + sk) = e^A e^B 1 = e^{k(x+s)}): true; p5-a12 (ma² is entry (2,1); mb² sign): true; p5-tr both true; p7-e2 (x/√(2π); √(3/2)x normalized on [−1, 1]): true; p7-e3 both true.
- `vars` ranges keep every formula finite and real.
- Choice positions 2, 1, 3, 0, 2, 3, 1: varied; the correct choice is never the longest (all seven checked).
- calcs: `pytest tests/calc -k 8-05-problem-set-4`: 75 passed, including the `answer:` ties of all 17 value/formula boxes and the `shown:` strings.

## Coverage and order
- MIT Problems 1, 2, 3, 4, 5, 7 in MIT's order with MIT's parts; Problem 6 (only "Shankar 1.8.8", no statement) skipped and said so; points 10+10+10+10+5+15 = 60 of MIT's 65, as stated; part splits add up.
- MIT's Problem 3 has no part labels; the (a)/(b) split is declared. Each box of our own is marked in its part, and the intro's list of them is complete.
- 2(c) uses ⟨x|ψ⟩ before Lecture 9; restated in the statement and declared.

## Licensing
- No MIT figures; the plots are generated from formulas. MIT's hint in 2(b) is paraphrased and attributed. No verbatim paragraphs from the sheet (the 1(a) remark and the Problem 7 introduction are rewritten). Griffiths, Shankar and Axler not used. No OpenStax or LibreTexts. The sheet has no "rights reserved" material.

## Notes
- No em dashes; no control characters in the page or the calcs file; no `## Summary` with answers.
- Symbols: the page-scoped meanings (G, hat, dagger, angle brackets, c, k, s, t, f, f′ and others) were read and fit the page; G is marked "Not Newton's constant".
- Prerequisites and links (Lectures 3, 5 to 9) exist with the stated lecture numbers.

COUNTS: errors=0 warnings=3 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1 (5(a) sentence gave away the choice): "The value has the form i times a real number: type that real number." removed; the box label "⟨φ|ψ⟩ = i ×" says what to type.
- Warning 2 (p3-term given away by the lemma): the box is dropped; the intro now lists only the matrix example as our box in Problem 3.
- Warning 3 (citation of the ket-to-bra rule): "The two bras" now cites eq. (1.26).
- Info items: no change.
