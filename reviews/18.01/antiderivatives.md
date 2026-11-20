---
page: content/year-1/18.01/antiderivatives.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-15-antiderivatives/ (read: local copy lec.html; its PDF link is -MI0b4h3rS0.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec15/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 15: Differentials and Antiderivatives", OCW cover + printed pp. 1-4 = PDF pp. 2-5, confirmed with pdftotext -f/-l; text layer only, primes, integral signs and ≠ lost, reconstructed from context and `pdftotext -raw`)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/-MI0b4h3rS0.pdf (read: local copy transcript.pdf, page-split text tp.txt, 9 PDF pages, "ocw-18-01-f07-lec15")
  - content/year-4/8.286/open-closed-flat.mdx and age-of-the-universe.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/_course.json and content/year-4/8.286/_course.json (read: 18.01 Lecture 16 = Differential Equations; 8.286 Lecture 7 = Dynamics of Homogeneous Expansion, Part III)
  - content/year-1/18.01/mean-value-theorem.mdx (read: the √101 bounds the worked example refers to)
  - calcs/18.01/antiderivatives.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k antiderivatives`: 21 passed)
  - data/symbols.json (read: all 19 meanings scoped to `antiderivatives`, plus the general `a-dot` entry)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: needs-changes
---

# Review: Differentials and antiderivatives

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-4, as on the other 18.01 pages.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Two answers, one family", last paragraph | Transcript p. 9: "c_1 - c_2 has to be equal to 1/2" (a lecturer slip). Notes p. 4 get the sign right implicitly: ½ sin²x − ½ = −½ cos²x, i.e. the member with c₁ = −½ equals the member with c₂ = 0. | "the two families ½ sin²x + c₁ and −½ cos²x + c₂ are the same set of functions, with c₁ − c₂ = ½" | Recomputed: ½ sin²x + c₁ = −½ cos²x + c₂ for all x ⇔ c₂ − c₁ = ½(sin²x + cos²x) = ½. So c₁ − c₂ = −½. Write "with c₂ − c₁ = ½" (or "c₁ = c₂ − ½") and, per writing rule 4, add a bracket: "(the lecture says c₁ − c₂ = ½; the sign is the other way round)". The page's repeating of the slip is the only wrong statement found. |
| 2 | warning | "Advanced guessing", last paragraph (∫dx/(x ln x)) | Notes p. 4, Example 6: "(We will assume x > 0.)". Transcript p. 9: answer ln(ln x) + c, then "technically speaking, we could take the absolute value here", i.e. ln\|ln x\|. | "(p. 9; notes, p. 4, for x > 1 there)" | The notes say x > 0, not x > 1 (checked with `pdftotext -raw`). x > 1 is what ln(ln x) actually needs, so the notes' condition is itself a slip. Suggest: "(p. 9; notes, p. 4, which assume x > 0, though ln(ln x) needs x > 1; the lecturer adds that one can write ln\|ln x\| + c)". |
| 3 | warning | Order of sections "Advanced guessing" and "Two answers, one family" | Transcript: sin x cos x (pp. 8-9) comes before ∫dx/(x ln x) (p. 9, the last example). Notes: Example 5 = sin x cos x, Example 6 = dx/(x ln x). | The ∫dx/(x ln x) paragraph closes "Advanced guessing", before the sin x cos x section. | Either move the dx/(x ln x) paragraph after "Two answers, one family" (MIT's order), or keep the grouping (substitution vs guessing) and add "(the lecture does this one last)". |
| 4 | info | "Antiderivatives", formula "Antiderivative" | Transcript p. 3 introduces ∫g(x)dx = G(x) "the antiderivative of g"; the explicit "means G′ = g" is on notes p. 2 ("F(x) = ∫f(x)dx means that F is the antiderivative of f ... F′(x) = f(x)"). The intro sentence cites "pp. 3-4"; all of it is on p. 3 (p. 4 starts with x^a). | cite reading2 p. 3; prose "(transcript, pp. 3-4)" | Correct as cited. Optionally change the prose to "(transcript, p. 3; notes, p. 2)". |
| 5 | info | "Differentials", Leibniz/Newton paragraph | Transcript p. 1: "Leibniz's notation was adopted on the continent and Newton dominated in Britain and, as a result, the British fell behind by one or two hundred years in the development of calculus." | "the lecturer argues that Britain fell behind by one or two hundred years in calculus as a result (p. 1)" | Faithfully reported and correctly attributed to the lecturer (writing rule 5). Historians usually describe the British lag as about a century (until the Analytical Society, 1812) and give more causes than notation alone; the page need not change, since it reports a view, not a fact. |
| 6 | info | Plot caption | n/a (page's own plot) | "Each is the one above shifted vertically" | The three curves are listed c = −1, 0, 1; "the one above" is ambiguous (above in the list or on the graph?). Suggest "Each is the next one shifted up by 1". |

Every formula matches its cited location:
- Differential $dy = f'(x)\,dx$: transcript p. 1 (board); also notes p. 1.
- $dy = \tfrac13 x^{-2/3}dx = \tfrac13\cdot\tfrac1{16}dx = \tfrac1{48}dx$: transcript p. 2 (board). (The lecturer's "1/16. No, 1/48" on p. 3 is self-corrected and not repeated on the page.)
- Antiderivative definition and $\int\sin x\,dx = -\cos x + c$: transcript p. 3.
- Powers ($a \ne -1$) and $\int dx/x = \ln|x| + c$: transcript p. 4 (notes p. 2 use $n$ instead of $a$).
- $\sec^2$, $\sin^{-1}$, $\tan^{-1}$: transcript p. 5.
- Uniqueness $F' = G' \Rightarrow F = G + c$: transcript pp. 5-6 (theorem p. 5, proof p. 6).
- Substitution $\int x^3(x^4+2)^5dx = (x^4+2)^6/24 + c$: transcript pp. 6-7 (the return to $x$ is on p. 7).
- $\tfrac12\sin^2x - (-\tfrac12\cos^2x) = \tfrac12$: transcript p. 9.

Every prose page reference was checked too (dx/dy replace Δx/Δy pp. 1-2; tangent-line ambiguity p. 2; 4 + 1/480 ≈ 4.002 pp. 2-3; same as linear approximation p. 3; notes' three methods for 65^(1/3) pp. 1-2; "reading backwards" pp. 3-4; ln(−x) check p. 4; practice remark p. 5; "reason calculus makes sense" p. 6; integration harder / one method p. 6; advanced guessing pp. 7-8 with √(1+x²) and e^(6x) on p. 7, x e^(−x²) pp. 7-8 and the "write it out" warning p. 8; sin x cos x pp. 8-9 and notes p. 4; dx/(x ln x) p. 9). All correct apart from rows 2 and 4.

The three requested slip notes are supported:
- Transcript p. 4: "this one fails because we've divided by 0 when a = 1. So this is only true when a is not equal to -1." The page's bracket is right.
- Notes p. 2 (PDF p. 3): the list numbers ∫dx/x as item 3 ("This takes care of the exceptional case n = -1 in 2."), then "Proof of Property 2:" proves ln|x|. The page's bracket (the label means the logarithm formula) is right.
- Transcript p. 6: "It's just 1/20 u to the-- whoops, not 1/20. ... it's 1/24 u^6 + c." The page's bracket is right.

## Arithmetic and answer checks
- ⅓ · 64^(−2/3) = ⅓ · 1/16 = 1/48 = 0.0208333. Correct.
- 64.1^(1/3) ≈ 4 + 1/480 = 4.0020833; true value 4.0020817. Both round to 4.002. Correct.
- √101 worked example: dy = dx/(2√100) = dx/20; 10 + 0.05 = 10.05; √101 = 10.0498756 ("10.04988" correct). It lies inside the bounds on the mean value theorem page (0.045 < √101 − 10 < 0.05) and below the estimate since √x is concave. Correct.
- Own worked example: d/dx (x³ + 1)⁵/15 = 5(x³ + 1)⁴ · 3x²/15 = x²(x³ + 1)⁴; d/dx ⅓ sin 3x = cos 3x; d/dx ½ ln(x² + 4) = x/(x² + 4), and x² + 4 > 0. All correct.
- Guessing examples: d/dx √(1 + x²) = x/√(1 + x²); d/dx ⅙e^(6x) = e^(6x); d/dx (−½e^(−x²)) = x e^(−x²); d/dx ln(ln x) = 1/(x ln x). All correct.
- ln(−x) for x < 0: (1/(−x))(−1) = 1/x. Correct.
- c₁, c₂: see row 1 (sign wrong on the page).
- Cosmology callout: flat, matter only, H² = (8πG/3)ρ with ρ ∝ a⁻³ gives ȧ² ∝ 1/a, so ȧ = C/√a; √a da = C dt; ∫√a da = ⅔a^(3/2); with a(0) = 0, a = (3Ct/2)^(2/3) ∝ t^(2/3). Correct and consistent with open-closed-flat.mdx (8.286 Lecture 7, "Flat, matter-dominated universe a ∝ t^(2/3)").
- Quiz 1 (index 1, dx/20): correct; explanation right. Quiz 2 (index 2, every a except −1): correct. Quiz 3 (index 1, F = G + c): correct. Quiz 4 (index 2, −½e^(−x²) + c): correct. Quiz 5 (index 2, both, differing by ½): correct; the explanation's "½ sin²x − (−½ cos²x) = ½" is right (it does not repeat the c₁ − c₂ sign slip).
- Flashcards: all four correct (the antiderivative list matches the formulas above).
- calcs/18.01/antiderivatives.yaml: 21 entries, all pass, and they cover every number and every antiderivative on the page. Info: `flat-universe`, `sqrt101-*` and `own-*` are page-own but carry `source: {cite: reading2, ...}`; `flat-universe` in particular cites "reading2 p. 4", which has nothing on cosmology. Consider pointing it at the 8.286 Lecture 7 page or dropping the source. There is no calcs entry for the c₁/c₂ relation; after fixing row 1, an identity check (½ sin²x + c₁ = −½ cos²x + c₂ with c₂ − c₁ = ½) would guard it.

## Coverage and order
- The page follows the lecture: differentials and the Leibniz remark (p. 1), linear approximation in the new notation (pp. 1-3), antiderivative and indefinite integral (p. 3), the table read backwards with the ln|x| check (pp. 4-5), uniqueness up to a constant (pp. 5-6), substitution (pp. 6-7), advanced guessing (pp. 7-8), sin x cos x (pp. 8-9). The only reordering is the dx/(x ln x) example (row 3).
- Left out (minor, acceptable): the substitution route for ∫x dx/√(1 + x²) (u = 1 + x², leading to ∫u^(−1/2) du, p. 7) before the guessing route is recommended; the substitution u = 6x as "OK but slow" (p. 7); the graph of ln(−x) for x < 0 (pp. 4-5); the student's "add them together" exchange (p. 8); the closing announcement of differential equations and the exam (p. 9). The notes' Method 2 for 65^(1/3) via (1 + x)^r is mentioned only as "three ways".
- Added: original worked examples (√101 by differentials, three antiderivatives), a plot of −cos x + c drawn from the formula, quizzes, flashcards and the cosmology callout.

## Licensing
- No "rights reserved" or "Courtesy of" text in notes.txt, tp.txt, lec.html or n.html (grep). Both OCW resource pages are marked Creative Commons License. The notes contain no figures; the page's plot is generated from a formula.
- No verbatim copying beyond short standard phrases ("advanced guessing", "the messiest part", "two steps ahead"). The text is rewritten in the page's own words.
- The worked examples are original (own functions and numbers). The guessing examples (√(1 + x²), e^(6x), x e^(−x²), sin x cos x, dx/(x ln x)) and the substitution example are MIT's, presented as the lecture's examples with page references, which is appropriate.
- No OpenStax or LibreTexts material.

## Notes
- Symbols: the 19 meanings scoped to `antiderivatives` (a, G, c, x, y, t, d, e, f, g, F, C, f′, u, sec, G′, F′, c₁, c₂) are accurate. `a` correctly covers the exponent, the base point a = 64 in f(a) + f′(a)(x − a), and the scale factor in the callout; `C` and `c` are distinct (callout constant vs additive constant); `t` covers cosmic time in the callout. ȧ uses the general `a-dot` meaning, which fits. No units are given, which suits a maths page. `content:check` reports no symbol gaps. After fixing row 1 the `c-1`/`c-2` meanings need no change.
- leadsTo 18.01 Lecture 16 = "Differential Equations" matches `_course.json`, and the transcript p. 9 announces differential equations for the next lecture. That Lecture 16 uses separation of variables was not checked against its source here (uncertain, but it is the standard content of that lecture).
- leadsTo 8.286 Lecture 7 is right: open-closed-flat.mdx (lecture: 7) derives a ∝ t^(2/3) for the flat matter universe by the same integration ("ȧ² ∝ 1/a, which integrates to a^(3/2) ∝ t").
- Frontmatter: reading URLs match OCW (transcript link -MI0b4h3rS0.pdf on the lecture page; notes resource lec15/ links lec15.pdf). Source title "Antiderivatives" and notes title "Differentials and Antiderivatives" match OCW. No em dashes on the page.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the page now says $c_2 - c_1 = \tfrac12$, with a bracketed note that the lecture says $c_1 - c_2 = \tfrac12$ (the lecturer here is the 18.01 lecturer, not Guth). New calcs entry `constants-differ` (origin: slip).
- **Warning 2:** the ∫dx/(x ln x) paragraph now says it needs x > 1, that the notes write x > 0, and that the lecture mentions ln|ln x|.
- **Warning 3:** that paragraph now comes after the sin x cos x section, in MIT's order.
- Info: the definition cites transcript p. 3 and notes p. 2; the plot caption is reworded; the `flat-universe` calcs entry's source now says it uses the power rule. The Leibniz/Newton claim stays attributed to the lecturer as it is.
