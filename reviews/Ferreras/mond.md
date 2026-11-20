---
page: content/year-5/Ferreras/mond.mdx
reviewed: 2026-11-15
sources_read:
  - https://doi.org/10.14324/111.9781800084704 — Ferreras, Fundamentals of Dark Matter (UCL Press 2025), local PDF and pdftotext extraction, Chapter 7 intro and Sections 7.1–7.2, printed pp. 157–164 (read; maths symbols in the extraction are garbled, equations reconstructed from context and from a second `-raw` extraction of PDF pp. 172–178)
verdict: pass-with-notes
---

# Review: MOND — changing gravity instead of adding matter

## Differences from the MIT source
(The source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | warning | "Why flat rotation curves follow", line `$v^4 = GMa_0$` | Not a numbered equation in 7.1–7.2. The book derives the Tully–Fisher link only in words (and Eq. 7.9 in 7.3). | Puts `$v^4 = GMa_0$` on a line of its own as inline maths. In effect this is a display equation with no `<Formula>` and no `cite`. | Make it a `<Formula>` citing Eq. (7.5), p. 160 ("follows from"), or fold it into the sentence. |
| 2 | info | "A puzzling constant" and quiz 4: "within a factor of a few of $a_0$" | "cH₀ ≈ 9.7h × 10⁻¹⁰ m s⁻², an acceleration scale quite comparable with a₀" (p. 163) | "within a factor of a few" | With h = 0.7, cH₀ = 6.8 × 10⁻¹⁰ m/s², about 7 × a₀ (10⁻¹⁰) or 5.7 × a₀ (1.2 × 10⁻¹⁰). "About a factor of 6 (close to 2π)" would be more precise. Optional. |
| 3 | info | Plot caption: "fits usually give 1.2 × 10⁻¹⁰ m/s²" | The book gives only a₀ ~ 10⁻¹⁰ m s⁻² (p. 160). | 1.2 × 10⁻¹⁰ m/s² as the usual fitted value | This is correct (standard literature value) but it does not come from the book and has no source. Mark it as outside the book, or add a reference. |
| 4 | info | Eq. (7.7) as written in the text | The extraction shows `f̃^{?1/2}(a_N/a_0) a_N`; the sign of the exponent is garbled. | $a = \tilde f^{-1/2}(a_N/a_0)\,a_N$ | The page's −1/2 is the only form that gives the deep-MOND limit $a = \sqrt{a_N a_0}$ when $\tilde f(x) \to x$. The raw extraction has a minus-like glyph before "1 2". It is consistent, but I could not read it unambiguously. |
| 5 | info | Text on Figure 7.1 | Sanders and McGaugh, *ARA&A* 40, 263 (the book prints "2022"; volume 40 is 2002) | Names Sanders and McGaugh with no year | Fine as written. If a year is added later, use 2002, not the book's misprint. |

All five `<Formula>` blocks match the book:
- (7.1) $v^2 = GM_\text{OBS}/R$ fails for $R \gtrsim R_0$, $R_0 \approx 10$ kpc, p. 158.
- (7.2) and (7.3), p. 158.
- (7.4) $f(|a|/a_0)\,\vec a = -\nabla\Phi_N$, p. 159.
- (7.5), the two-regime force, p. 160.

The page numbers agree with the printed headers ("158 FUNDAMENTALS OF DARK MATTER" sits before 7.1–7.3, "…PHYSICS 159" before 7.4, "160 …" before 7.5). The inline equations are also correct:
- (7.6) and (7.7) are on p. 161 (Exercise 7.1).
- (7.8), the distance-based model, is on p. 164.

The claims also check out:
- Acceleration rather than distance, from the near-infrared M/L figure and low surface brightness galaxies.
- The modified-inertia reading, and that it raises problems with conservation laws.
- NGC 2403 from SPARC, with stars and gas added in quadrature and falling short beyond about 5 kpc.
- The absolute-acceleration problem.

## Arithmetic and answer checks
- Worked example "A galaxy weighed with MOND":
  - (150/90)² = 2.778, so dark matter is 1.78 × the visible mass. Correct.
  - R = 15 × 3.0857 × 10¹⁹ = 4.629 × 10²⁰ m. Correct.
  - a = 2.25 × 10¹⁰ / 4.629 × 10²⁰ = 4.86 × 10⁻¹¹. Correct.
  - a_N = 8.1 × 10⁹ / 4.629 × 10²⁰ = 1.75 × 10⁻¹¹. Correct.
  - Algebra: a_N = a x/(1+x) ⇒ x = a_N/(a − a_N) ⇒ a₀ = a(a − a_N)/a_N = 4.86 × 3.11/1.75 × 10⁻¹¹ = 8.64 × 10⁻¹¹. Correct.
  - The numbers are original. The book's Exercise 7.2 uses 20 kpc, 125 and 70 km/s.
- Neptune:
  - 30.07 AU = 4.498 × 10¹² m.
  - a = 1.327 × 10²⁰ / 2.023 × 10²⁵ = 6.56 × 10⁻⁶ m/s², which is 65 600 a₀, so "about 66 000". Correct.
  - This answers the book's "How about…?" box (p. 161) with the page's own working. Fine.
- Deep-MOND galaxy:
  - 5 × 10¹⁰ M⊙ = 9.945 × 10⁴⁰ kg.
  - (GMa₀)^¼ = (6.637 × 10²⁰)^¼ = 1.605 × 10⁵ m/s, so 160 km/s.
  - With a₀ = 1.2 × 10⁻¹⁰: × 1.2^¼ = 168 km/s. Correct.
  - The rotation-curves page example (same 5 × 10¹⁰ M⊙ of baryons) has 180 km/s, so "the kind of flat speed" is fair. MOND gets close, but not exactly there.
- cH₀: 2.998 × 10⁸ × 100 km/s/Mpc = 9.72 × 10⁻¹⁰ m/s², so 9.7h. With h = 0.7 this is 6.8 × 10⁻¹⁰, so "≈ 7 × 10⁻¹⁰". Correct.
- Plot:
  - G = 4.30 × 10⁻⁶ kpc (km/s)² M⊙⁻¹, so GM = 43 000 M for M in 10¹⁰ M⊙. Correct.
  - 10⁻¹⁰ m/s² = 3086 (km/s)²/kpc, and 1.2 × 10⁻¹⁰ = 3703. Correct.
  - The MOND curve solves a²/(a + a₀) = a_N, giving a = [a_N + √(a_N² + 4a_N a₀)]/2, and v = √(r a). The expression is parenthesised correctly.
  - The deep limit (43000 M a₀)^¼ is correct.
- Quiz:
  - Q1: answer 1 is correct.
  - Q2: answer 1 (v⁴ = GMa₀) is correct.
  - Q3: answer 1 (about 66 000 a₀) is correct.
  - Q4: answer 1 is correct. The explanation's "within a factor of a few" is a little loose (see #2).
- Flashcards: all three are correct.
- `npm run calc:test` subset (`-k "mond or quintessence"`): 46 passed.

## Coverage and order
- The book's order: Chapter 7 intro; 7.1 (Eqs. 7.1–7.3); 7.2: Milgrom's proposal, untested low-acceleration regime, Eq. 7.4, Eq. 7.5, modified inertia, acceleration vs distance, a₀, Fig. 7.1 (M/L vs radius and acceleration), LSB galaxies, Neptune box, limits of f, Exercise 7.1 (Eqs. 7.6–7.7), NGC 2403 (Fig. 7.2), Exercise 7.2, absolute acceleration problem, cH₀, distance-based box (Eq. 7.8).
- The page follows this order. The only change is that the Neptune box becomes a worked example placed after NGC 2403. Nothing is missing.
- The page adds a generated plot and a deep-MOND v⁴ derivation, which is a standard consequence of Eq. 7.5.
- Exercises 7.1 and 7.2 are mentioned or paraphrased, not solved verbatim. Exercise 7.2 is replaced by an original example.

## Licensing
- No copied paragraphs. A 7-word n-gram comparison against the book text found one generic overlap ("populations change the mass to light ratio").
- No book figures are used. Figure 7.1 is from Sanders and McGaugh, a third party, and Figure 7.2 uses SPARC data. Both are only described in words, and the plot is generated from formulas.
- The source is CC BY-NC 4.0 and the page is CC BY-NC-SA 4.0, which is allowed with attribution. Attribution comes through `_course.json` (`attribution`) and `source.url`.

## Notes
- `leadsTo` → Ferreras 7.4 (`mond-tests`, which has `lecture: 7.4`): correct and fair.
- The prerequisites `rotation-curves` and `galaxies-in-halos` exist.
- `content:check`: no errors for this page. The only warning was the missing review file.

## Resolution (2026-11-15, by the page author)

- Warning (v⁴ = GMa₀ as uncited display maths): now a <Formula> citing "follows from Eq. (7.5), p. 160".
- Info ("within a factor of a few"): now "about six to seven times a₀", in the text and in quiz 4.
- Info (1.2 × 10⁻¹⁰ m/s² without a source): the plot caption now says it is the usual value in the MOND literature, not given in the book.
- Info (Eq. 7.7 sign, Sanders and McGaugh year): no change. The page's form gives the right limit, and it quotes no year.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- Every <Formula> on the page agrees with the printed equation.
