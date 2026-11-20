---
page: content/year-1/18.01/partial-fractions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-29-partial-fractions/ (read: local copy lec.html; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec29/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 29: Partial Fractions"; 4 PDF pages = OCW cover + printed pp. 1-3, footers checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/HgEqXhsIq_g.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, header "ocw-18-01-f07-lec29"; no printed page numbers, so transcript pages = PDF pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec30/ (read: OCW page only, to check the leadsTo; Lecture 30 notes cover integration by parts and reduction formulae)
  - content/year-1/18.01/_course.json (read: Lecture 29 = Partial Fractions, Lecture 30 = Integration by Parts)
  - content/year-4/8.286/age-with-vacuum-energy.mdx (read: 8.286 Lecture 19, flat matter + vacuum age with tanh⁻¹√(1 − Ω_m,0))
  - calcs/18.01/partial-fractions.yaml (read; `npm run calc:test -- -k partial`: 10 passed)
  - data/symbols.json (read: the 13 meanings scoped to `partial-fractions`)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Partial fractions

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-3 (PDF page − 1). Every page citation was checked against tp.txt and notes.txt / pdftotext per page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Summary, first bullet: "pieces that integrate to logarithms and inverse tangents" | Repeated factors give pieces such as $B/(x-1)^2$ (transcript pp. 5-7, notes p. 2), which integrate to $-B/(x-1)$; the notes' $\int dx/(x-1)^{10}$ gives a power (notes p. 3); long division adds a polynomial quotient (transcript p. 12); $\int dx/(x^2+1)^{10}$ becomes a trigonometric integral (notes p. 3). | Only logarithms and inverse tangents. | "…into pieces that integrate to polynomials, powers, logarithms and inverse tangents" (or "simple pieces we already know how to integrate"). |
| 2 | warning | Repeated factors: "Each unknown is really one equation of a system" | Transcript p. 7: "This was a 3 by 3 system in disguise, for these three unknowns, A, B and C", and the number of unknowns grows with the degree of the denominator. | An unknown "is" an equation, which is not what is meant. | "The three unknowns really solve a 3-by-3 system of equations, and the bigger the denominator, the bigger the system (p. 7)." |
| 3 | info | Formula "Set-up with a repeated factor", cite reading2 p. 5 | The set-up $A/(x-1) + B/(x-1)^2 + C/(x+2)$ is spoken on p. 5, but the numerator $x^2 + 2$ is never said there ("I'll just repeat the denominator"); it only appears through the arithmetic for $C$ and $B$ on p. 6. The full equation, numerator included, is in the notes, p. 2. | reading2 p. 5. | `cite="reading1" at="p. 2"`, or `at="pp. 5–6"`. |
| 4 | info | Repeated factors: "Cover-up still gives … but not A (p. 6)" | Transcript p. 6 explains why: multiplying by a single $x - 1$ leaves $B/(x-1)$, i.e. "B / 0" at $x = 1$, so $A$ cannot be exposed; only the highest power can. | States the result without the reason. | Optional half sentence: "multiplying by one factor $x - 1$ still leaves $B/(x-1)$, which blows up at $x = 1$". |
| 5 | info | Quadratic factors: "(In the lecture the sign in $x^2 - x + 1$ is left uncertain, p. 10.)" | Transcript p. 10: the lecturer writes $(x+1)(x^2 + x + 1)$, then "there must be a minus sign in here maybe … I think it's right". The correct factorisation $(x+1)(x^2 - x + 1)$ (checked: $x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$) is what the page gives. | Accurate in substance. | Optional, more precise: "(The lecturer first writes $x^2 + x + 1$ and is unsure of the sign, p. 10.)" |
| 6 | info | Quadratic factors: "every polynomial eventually splits into linear and quadratic factors" | Transcript p. 10: "you're always going to be faced eventually with linear factors and quadratic factors". | Same. | True for polynomials with real coefficients; optionally add "(with real coefficients)". Also optional: give the set-up the lecturer states for this case, $\frac{A}{x+1} + \frac{Bx + C}{x^2 - x + 1}$ (p. 10). |
| 7 | info | The disguise, $\ln|x-1| + 3\ln|x+2| + c$ (transcript p. 1; notes p. 1) | The transcript, p. 1, reads "ln x - ln(x-1) + 3 ln(x+3)" (a slip or transcription error, in a passage where the lecturer himself jokes about 2s turning into 3s, pp. 1-2; p. 2 also has "(4x - 2)" for $4x - 1$). The notes, p. 1, have the correct answer. | The correct answer, silently. | Fine, since the notes are also cited. Optionally a bracket: "(the transcript garbles this line)". |
| 8 | info | Quadratic factors, Heaviside remark | Transcript p. 8: with complex numbers the method "comes back to the cover-up method", "the way that the cover-up method was originally conceived by Heaviside"; it "was invented to do something with Laplace transforms and inversion of certain kinds of differential equations", to be seen in 18.03. | "with them, cover-up comes back, which is how Heaviside first used it". | Faithful and fairly attributed. The page wisely does not repeat the "Laplace transforms" wording: Heaviside's expansion was part of his operational calculus, which was only later justified through the Laplace transform (historical point from general knowledge, not from the MIT source). No change needed; optionally mention that complex factors return in 18.03. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt / notes:
  - "The same function, disguised", reading1 p. 1: $\frac{(x+2) + 3(x-1)}{(x-1)(x+2)} = \frac{4x-1}{x^2+x-2}$ is on printed p. 1 (PDF p. 2). Correct (calcs `disguise`).
  - "Cover-up for A", reading2 pp. 2-3: "4 - 1 and 1 + 2 … A" at the foot of p. 2, "happens to be equal to 1" at the top of p. 3. Correct.
  - "Set-up with a repeated factor", reading2 p. 5: see finding 3.
  - "Repeated factor, solved", reading1 p. 2: the notes give $\frac{1}{3(x-1)} + \frac{1}{(x-1)^2} + \frac{2}{3(x+2)}$ on printed p. 2. Correct; checked by expansion: $\frac13(x^2+x-2) + (x+2) + \frac23(x^2-2x+1) = x^2 + 2$ (calcs `repeated`).
  - "Integrating with a quadratic factor", reading2 p. 11: pieces and the $\frac14\ln(x^2+1)$ and $\frac12\tan^{-1}x$ terms on p. 11. Correct; $A = B = C = \frac12$ checked: $\frac12(x^2+1) + \frac12(x+1)(x-1) = x^2$ (calcs `quadratic-factor`).
  - "Long division first", reading2 p. 12: quotient $x - 1$, remainder $3x - 2$, p. 12. Correct: $(x-1)(x^2+x-2) = x^3 - 3x + 2$, and $x^3 - (x^3 - 3x + 2) = 3x - 2$ (calcs `long-division`).
- Prose citations, all checked: rational function and "easier pieces", "algebra" (p. 1); disguise (pp. 1-2); factoring can be hard, assumed done (p. 2); set-up and solve (p. 2); slow way $A + B = 4$, $2A - B = -1$ (notes p. 1; checked: $A = 1$, $B = 3$); multiplying by $x - 1$ (p. 2); the limit $x \to 1$ argument (p. 3); $B = \frac{-8-1}{-2-1} = 3$ (transcript p. 3, notes p. 2); cover-up with no writing (p. 4); conditions: distinct linear factors and $\deg P < \deg Q$ (pp. 4-5; notes p. 2); three-factor set-up (p. 5); one term per power (p. 5); $7/16 = 0/2 + 1/2^2 + 1/2^3 + 1/2^4$ (p. 5; checked $4/16 + 2/16 + 1/16 = 7/16$); $C = 6/9 = 2/3$ and $B = 3/3 = 1$ (p. 6); $x = 0$: $1 = -A + 1 + 1/3$, $A = 1/3$ (p. 7); complex numbers and Heaviside, $Bx + C$ (p. 8); $A = 1/2$ by cover-up (p. 8); coefficient comparison, $B = C = 1/2$, extremes easiest, plugging in $x = 0$ (p. 9); $x^3 + 1$ (p. 10); $(\ln u)' = u'/u$ (p. 11); improper fraction, multiply back out, long division (pp. 11-12); "wrong answer" (pp. 8 and 12; the page's "pp. 8, 11" is acceptable since p. 11 states "Our method is not going to work", the words "wrong answer" are on p. 12).
- The notes' slip: printed p. 2 writes the cover-up line for $B$ as "$\frac{x^2 + 1}{x+2} = B + \ldots$" and then evaluates $\frac{1^2 + 2}{1+2}$, so $x^2 + 1$ is a typo for $x^2 + 2$. The page's bracket is accurate and correctly placed (notes p. 2).
- The notes' similar example (pp. 2-3): $\frac{1}{(x^2+1)(x-1)} = \frac{1/2}{x-1} + \frac{-x/2 - 1/2}{x^2+1}$; checked: $\frac12(x^2+1) - \frac12(x+1)(x-1) = 1$. The page's reference "notes, pp. 2–3" is correct.
- Notes p. 3 extras: $\int (x-1)^{-10}dx = -\frac19(x-1)^{-9} + c$ correct; $x = \tan u$: $\frac{\sec^2 u}{(\sec^2 u)^{10}} = \cos^{18}u$ correct.
- Worked example (a): $A = 6/4 = 3/2$, $B = 2/(-4) = -1/2$; $\left[\frac32\ln|x-1| - \frac12\ln|x+3|\right]_2^3 = \frac32\ln 2 - \frac12\ln\frac65$; $\frac32\ln 2 = 1.03972 \to 1.040$, $\frac12\ln 1.2 = 0.09116 \to 0.091$, difference $0.94856 \to 0.949$; the rounded parts also give $1.040 - 0.091 = 0.949$. Correct. (Calcs: `example-a` checks the integral 0.949 and `example-a-parts` checks 1.040; no entry checks 0.091 by itself. I verified it here.)
- Worked example (b): $B = 1/(0+1) = 1$, $C = 1/(-1)^2 = 1$, at $x = 1$: $\frac12 = A + 1 + \frac12$, $A = -1$; check at $x = 2$: $-\frac12 + \frac14 + \frac13 = \frac{-6+3+4}{12} = \frac1{12} = \frac{1}{4\cdot 3}$. Correct (calcs `example-b`; its `shown` string is matched as text, but the identity itself is checked numerically, and the printed check value is right).
- Worked example (c): $\frac{x^2+1}{x^2-1} = 1 + \frac{2}{x^2-1}$; cover-up $\frac{2}{2} = 1$ and $\frac{2}{-2} = -1$. Correct (calcs `example-c`).
- Quiz 1: index 0, $A = \frac{1+5}{1+3} = \frac32$. Correct; distractor $-\frac12$ is $B$, the others are wrong.
- Quiz 2: index 1, $\frac{A}{x} + \frac{B}{x^2} + \frac{C}{x+1}$. Correct.
- Quiz 3: index 1, long division; the explanation's quotient and remainder are right (same as the lecture's example). Correct.
- Quiz 4: index 1, $\frac{Bx + C}{x^2+1}$. Correct.
- Flashcards: all three correct (the cover-up card implicitly assumes $\deg P < \deg Q$, which the third card states).
- Cosmology callout: $\frac12\left(\frac{1}{1-y} + \frac{1}{1+y}\right) = \frac{2}{2(1-y^2)}$ correct; $\int_0^y = \frac12[\ln(1+y) - \ln(1-y)] = \tanh^{-1}y$ correct for $|y| < 1$; $\sqrt{0.7} = 0.83666$, $\frac12\ln\frac{1.83666}{0.16334} = \frac12\ln 11.244 = 1.2100 \to 1.21$. Correct (calcs `artanh`, `artanh-value`). The values 0.3 and 0.7 are in calcs/values.yaml as round example values.
- Calcs file: 10 entries, all pass, and every value agrees with the page. Minor: `artanh` and `artanh-value` cite `reading2` pp. 2–4 / p. 4, which hold the cover-up method but nothing about tanh⁻¹ or √0.7; a source naming the 8.286 page (or "page's own") would be clearer. Not covered by calcs (all verified by hand above): the cover-up coefficients in the prose ($A = 1$, $B = 3$, $C = 2/3$, $B = 1$, $A = 1/3$, $A = B = C = 1/2$), 0.091, $x^3 + 1 = (x+1)(x^2-x+1)$, the notes' two extras, the 7/16 expansion and quiz 1.
- No em dashes on the page.

## Coverage and order
- Transcript order: rational functions; the easy integral and its disguise (pp. 1-2); factor, set up, solve (p. 2); solving for $A$ by multiplying by $x - 1$ (pp. 2-3); the limit justification (p. 3); $B$ (p. 3); the fast cover-up and when it works (pp. 4-5); three-factor set-up (p. 5); repeated factors, base-2 analogy (p. 5); $C$, $B$, why not $A$ (p. 6); $A$ at $x = 0$, 3-by-3 system (p. 7); quadratic factor, Heaviside, $Bx + C$, warning about high-degree numerators, $A$ by cover-up (p. 8); $B$, $C$ by coefficients or plugging in (p. 9); either order works, $x^3 + 1$ (p. 10); integrating the quadratic example (p. 11); improper fractions and long division (pp. 11-12).
- Notes order: easy integral and disguise, slow way, cover-up (pp. 1-2); repeated factor (p. 2); $\frac{1}{(x^2+1)(x-1)}$ with $x = 0$ and $x = -1$, integrated (pp. 2-3); $(x-1)^{-10}$ and $(x^2+1)^{-10}$ (p. 3). The notes do not cover long division.
- The page follows the transcript's order, inserts the notes' slow way where the notes have it, and puts the notes' two extras after long division. Coverage is complete.
- Omitted, all minor: the student question on whole powers only, "square roots are no good" (p. 3); why $x = 1$ (p. 3); the slow derivation for $B$ and why $A$ cannot be found by cover-up (p. 6, finding 4); "pick the easiest number, not a random one" (p. 7); "either method in either order" (p. 10); the set-up for the $x^3 + 1$ case (p. 10, finding 6); "you'll see the complex version in 18.03" (p. 8).
- Added by the page: the worked example, quiz, flashcards and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the lecture page, notes page, notes PDF or transcript (grep of all local copies). The page reuses no figure and has no graph.
- Text is rewritten; no paragraph copied. Short phrases ("disguise", "cover-up method", "set-up", "improper fraction") are the lecture's standard terms. The base-2 analogy is retold in the page's own words.
- Worked examples (a)-(c) use the page's own functions and numbers. Quiz 3 reuses the lecture's long-division example $x^3/(x^2+x-2)$; acceptable for a recall question (info only).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: 18.01 Lecture 30 is "Integration by Parts" in `_course.json`, and the OCW notes page for Lecture 30 lists integration by parts and reduction formulae, so the "why" is right. 8.286 Lecture 19 is `age-with-vacuum-energy`, whose flat matter + vacuum age is $\frac{2}{3H_0}\tanh^{-1}\!\sqrt{1-\Omega_{m,0}}/\sqrt{1-\Omega_{m,0}}$; with $\Omega_{m,0} = 0.3$ the argument is $\sqrt{0.7}$, as in the callout. The callout and the "why" are correct and attribute nothing to Guth, so nothing is misattributed. Optional: complete the link with one more step, $H_0t_0 = \frac23 \times 1.21/0.837 \approx 0.964$ (checked: $\frac23 \times 1.2100/0.83666 = 0.9641$); the 8.286 page uses 0.31/0.69 in its example, the round 0.3/0.7 here is fine.
- Symbols: the 13 page-scoped meanings (a, c, x, y, y′, d, P, Q, A, B, C, u, u′) fit the page.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the first Summary bullet now lists every kind of piece: logarithms, negative powers from repeated factors, logarithms and inverse tangents from quadratic factors, and a polynomial from long division.
- **Warning 2:** reworded: the three unknowns really solve a 3-by-3 system in disguise.
- Info: the repeated-factor set-up cites transcript pp. 5–6; the page says why cover-up cannot give A (it would leave B/(x − 1) at x = 1); "with real coefficients" is added to the factorisation remark; the `artanh` calcs entry says it uses the cover-up method of pp. 2–4. The other info items are left as they are.
