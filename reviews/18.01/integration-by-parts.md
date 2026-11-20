---
page: content/year-1/18.01/integration-by-parts.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-30-integration-by-parts/ (read: local copy lec.html; its transcript link is aeXp1zC6Hls.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec30/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 30: Integration by Parts, Reduction Formulae"; 9 PDF pages = OCW cover + printed pp. 1-8, footers of PDF pp. 2-4 checked with pdftotext -f N -l N: printed 1, 2, 3)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/aeXp1zC6Hls.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, header "ocw-18-01-f07-lec30"; no printed page numbers, so transcript pages = PDF pages)
  - content/year-1/18.01/_course.json (read: Lecture 30 = Integration by Parts, Lecture 31 = Parametric Equations)
  - content/year-4/8.286/black-body-radiation.mdx (read: 8.286 Lecture 16, photon number density with ζ(3) ≈ 1.202)
  - calcs/18.01/integration-by-parts.yaml (read; `npm run calc:test -- -k integration-by-parts`: 13 passed)
  - `npm run content:check`: see Notes (run while data/symbols.json was being edited; result not meaningful for symbols)
verdict: pass-with-notes
---

# Review: Integration by parts and reduction formulas

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers (PDF page − 1). Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Partial fractions in general: "Step 3, solve (transcript, p. 1)" | Transcript p. 1 names Step 0 (long division) and Step 1 (factor) and refers to "a Step 1, 2 and 3 last time"; Step 2, set-up, is on p. 2; Step 3, solve, is not named in this lecture (it is from Lecture 29). | All four steps cited to p. 1. | "(transcript, pp. 1–2; Step 3 is from Lecture 29)", or link the partial-fractions page. |
| 2 | info | Formula "A general set-up", reading2 p. 2, and the reconstructed denominator $(x + 2)^4(x^2 + 2x + 3)(x^2 + 4)^3$ | The transcript never reads the denominator out. Evidence: "4 + 2 + 6 … this is degree 4, this is degree 2 and (x^2)^3 is the 6th power" (p. 2); one $B_0x + C_0$ term for the single quadratic, then up to $(B_3x + C_3)/(x^2+4)^3$ (p. 2); the cross-multiplied $A_1$ term "(x+2)^3 (x^2+2x+3) (x^2+4)^3" (p. 3, garbled as "(x + (x+2)^3"), which means the linear factor is $(x + 2)^4$; $x = 2\tan u$ and "4 tan^2 + 4" (p. 4) confirm $x^2 + 4$; completing the square for the remaining quadratic (p. 5) fits $x^2 + 2x + 3$. | The reconstruction, flagged "as the lecture's example is reconstructed here". | The reconstruction is well supported and honestly flagged; the labelling $B_0, C_0$ / $B_1 \ldots C_3$ matches the transcript. Both quadratics are irreducible (discriminants $-8$ and $-16$). No change needed; optionally say it is pieced together from pp. 2–5. |
| 3 | info | "cover-up finds only $A_4$" (pp. 2–3) | Transcript p. 3: cover-up "picks out this term here … reduces it to an 11 by 11"; the term is not named in the text. | $A_4$. | Mathematically right (only the top power of a repeated linear factor is exposed). No change. |
| 4 | info | "(The lecture says "$\pi e - 2$" for this …, pp. 11–12.)" | p. 11: "So it's pi e - 2. It's the same." p. 12 (the correction made at the start of the next session, included in this transcript): the missing minus sign in $\big[xe^x - e^x\big]_0^1 = +1$, "the final answer was correct". | As stated. | Accurate. Whether "pi e - 2" is a spoken slip or a transcription of "π(e − 2)" cannot be told from the text; the bracket is harmless either way. Optionally cite the correction as p. 12 only. |
| 5 | warning | `leadsTo` 8.286 Lecture 16, `why` | The 8.286 black-body page gives $n = g^*\frac{\zeta(3)}{\pi^2}\left(\frac{kT}{\hbar c}\right)^3$ (cited to the Lecture 16 board) and never evaluates the integral by parts; nothing found says Guth does. | "…involves the integral of $x^2/(e^x - 1)$, done by integrating by parts." | Reads as if the lecture does it that way. Use "…which can be evaluated by integrating by parts" (the callout itself is already worded correctly). |
| 6 | info | Notes coverage, end of "Reduction formulas" | Notes p. 3 also say that hand evaluation still matters for families of integrals such as $F(a) = \int \frac{e^x}{x^a}dx$, where one wants the dependence on $a$. | Only the "no formula / set it up / computer" part. | Optional one sentence. |
| 7 | info | Partial fractions in general, completing the square (p. 5) | p. 5 adds that the final formula contains an inverse tangent of the completed square and, for pieces with $x$ in the numerator, the log of the denominator. | Only "needs completing the square". | Optional half sentence. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified:
  - "A general set-up", reading2 p. 2: see finding 2. Twelve unknowns, $4 + 2 + 6 = 12$, numerator of degree ≤ 11 with 12 coefficients: p. 2. Correct (calcs `unknowns`).
  - "Integration by parts", reading2 pp. 5–6: product rule and rearrangement end of p. 5, integration and "missed the dx" on p. 6. Correct.
  - "Integration by parts, definite", reading1 p. 2: the definite form starts at the foot of printed p. 1 and the result with $\big[uv\big]_a^b$ is on printed p. 2. Correct; the transcript also states it on p. 6.
  - "Integral of the logarithm", reading2 p. 6. Correct (calcs `log-integral`). Notes Example 2 and the advanced-guessing check $(x\ln x)' = \ln x + 1$: printed p. 2. Correct.
  - Notes Example 1, $\int \tan^{-1}x\,dx = x\tan^{-1}x - \frac12\ln(1+x^2) + c$: printed p. 1. Correct (notes write $\ln|1+x^2|$; the bars are redundant). Calcs `arctan-integral`.
  - "Reduction formula for powers of the logarithm", reading2 p. 7: $F_n = x(\ln x)^n - nF_{n-1}$ on p. 7 (spoken with a self-correction "n ln-- I'm sorry, x (ln x)^n"). $(\ln x)^2$ worked on pp. 6–7; $F_0, F_1, F_2$ on p. 8. Notes Example 3 printed p. 2. Correct (calcs `log-squared`).
  - "Reduction formula for powers times the exponential", reading2 p. 9: $G_n$, $G_0 = e^x$, $G_1 = xe^x - e^x$ all on p. 9; choice of $u$ on p. 8; notes Example 4 printed pp. 2–3. Correct (calcs `x-exp`).
  - "Wine glass by disks", reading2 pp. 10–11: $\pi\big[y(\ln y)^2 - 2(y\ln y - y)\big]_1^e = \pi[(e - 0) - (0 - 2(0 - 1))] = \pi(e - 2)$. Correct (calcs `glass-disks`, 2.2565).
  - "Wine glass by shells", reading2 pp. 11–12: $2\pi e\cdot\frac12 - 2\pi\cdot 1 = \pi(e - 2) = 2.2565 \to 2.26$. Correct (calcs `glass-shells`).
- Prose numbers: $\frac{d}{dx}\left[-\frac14(x^2+4)^{-2}\right] = x(x^2+4)^{-3}$ correct (calcs `guess-x-over-cube`); $x = 2\tan u$: $\frac{2\sec^2u}{64\sec^6u} = \frac{1}{32}\cos^4u$ correct (transcript p. 4 says "2/64"; not in calcs, checked by hand).
- Claimed slips, all confirmed:
  - p. 9: "the integral of x e^x dx is equal to x e^x - x + c"; p. 10: "There's a mistake here." The page's bracket is accurate.
  - p. 11: "So it's pi e - 2." See finding 4.
  - p. 12: the missing minus sign in the evaluation of $\int_0^1 xe^x\,dx$, final answer unaffected. Accurate.
- Worked example (a): $[x\sin x + \cos x]_0^{\pi/2} = \frac{\pi}{2} - 1 = 0.5708 \to 0.571$. Correct (calcs `example-a`).
- Worked example (b): $G_2(1) = e - 2(e - e) = e$, $G_2(0) = 0 - 2(0 - 1) = 2$, $e - 2 = 0.7183 \to 0.718$. Correct (calcs `example-b`).
- Worked example (c): $\left(\frac{e^2}{2} - \frac{e^2}{4}\right) - \left(0 - \frac14\right) = \frac{e^2 + 1}{4} = \frac{8.3891}{4} = 2.0973 \to 2.097$. Correct (calcs `example-c`).
- Quiz 1: index 0 ($u = x$, $v' = \cos x$). Correct; the explanation is right.
- Quiz 2: index 1 ($x\ln x - x + c$). Correct.
- Quiz 3: index 0 ($G_n = x^ne^x - nG_{n-1}$). Correct.
- Quiz 4: index 0, $\big[xe^x - e^x\big]_0^1 = 0 - (-1) = 1$. Correct.
- Flashcards: all three correct.
- Cosmology callout: $\frac{1}{e^x - 1} = \sum_{k\ge1}e^{-kx}$ for $x > 0$; $\int_0^\infty x^2e^{-kx}dx = 2/k^3$ (two integrations by parts) correct; $2\zeta(3) = 2.4041 \to 2.404$ correct (calcs `photon-integral`, `photon-term`). Consistent with the black-body page: $n = \frac{g}{2\pi^2}\left(\frac{kT}{\hbar c}\right)^3\int_0^\infty\frac{x^2dx}{e^x-1} = g\frac{\zeta(3)}{\pi^2}\left(\frac{kT}{\hbar c}\right)^3$, so "proportional to" and "the $\zeta(3)$ in the photon formula" are fair.
- Calcs file: 13 entries, all pass, all agree with the page. Minor: `photon-integral` and `photon-term` cite `reading2` pp. 8–9 although they are the page's own cosmology numbers (not in the transcript); a note naming the 8.286 page would be clearer. Not in calcs (checked by hand above): the $\frac{1}{32}$ factor, quiz 4's value 1 (covered implicitly by `x-exp`).

## Coverage and order
- Transcript order: partial fractions always work (p. 1); Step 0 long division, Step 1 factor, factoring is hard (p. 1); degree count, set-up, 12 unknowns (p. 2); 12 equations, cover-up gives one, machines, student questions on the monster equation (p. 3); integrating the pieces, $x/(x^2+4)^3$ by guessing, $1/(x^2+4)^3$ by $x = 2\tan u$ and $\cos^4$ (p. 4); completing the square, answers really are this complicated, computer programs (p. 5); integration by parts from the product rule, not related to partial fractions (pp. 5–6); $\int\ln x$ (p. 6); $\int(\ln x)^2$ (pp. 6–7); reduction formula $F_n$ (pp. 7–8); $G_n$ and choice of $u$ (pp. 8–9); when the method works (p. 9); slip correction and advanced guessing (p. 10); wine glass by disks (pp. 10–11) and shells (p. 11); sign correction (p. 12). The page follows this order exactly.
- Left out (all minor): the student question on how the 12 equations arise by comparing coefficients (p. 3); the remark that the linear-algebra step was claimed but not proved (p. 5); the inverse tangent and log in the final formula (p. 5, finding 7); the homework reference to $x^n\cos x$ (p. 8).
- Notes: Examples 1–4 and the "bad news / good news" paragraph (printed pp. 1–3) are all covered; the $F(a)$ family remark is not (finding 6). The notes' arc length and parametric curves (printed pp. 4–8) are correctly left to Lecture 31, as `source.readings[0].location` says.
- Added beyond MIT: the three-integral worked example and the cosmology callout, both clearly the page's own.
- `leadsTo` 18.01 Lecture 31: `_course.json` lists Lecture 31 as "Parametric Equations"; the reason "Parametric curves and arc length" matches the notes pp. 4–8 that the next video lecture teaches. Correct.

## Licensing
- No "All rights reserved" or "courtesy" notice in the lecture page, notes or transcript; nothing to credit.
- No paragraph copied from the transcript or notes; wording is paraphrased throughout, with short standard phrases only ("advanced guessing", "reduction formula", "always works, maybe slowly").
- Worked example: own integrals and numbers. (b) applies the lecture's $G_n$ to $n = 2$, which the lecture does not do; (a) is the $x^n\cos x$ family the lecture leaves to homework, with $n = 1$ and own limits. Acceptable as original.
- The wine-glass volume is MIT's example, restated in own words and cited; fine.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes seen on the page when it was read.
- `npm run content:check`, run during this review, reported "symbols with no entry in data/symbols.json" for this page and for 124 other pages, including long-reviewed ones (125 errors in total); data/symbols.json was being modified in the working tree at the time (it parses as JSON). This looks like a work-in-progress state of the symbols file, not a fault of this page, but the symbol meanings for this page could not be checked; rerun `content:check` once symbols.json is settled. Also, near the end of this review the page file was no longer present in the working tree (apparently set aside while another lesson was being committed); the review is of the version read at the start.
- Uncertain: whether "pi e - 2" (p. 11) is the lecturer's wording or the transcriber's (finding 4).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the 8.286 Lecture 16 "why" now says the integral "can be evaluated by integrating by parts".
- Info: "Step 3" is marked as the previous lecture's step numbering; the sign correction is cited as pp. 11 and 12; the calcs entries `photon-integral` and `photon-term` say the numbers are the page's own. The other info items are left as they are. (The symbols check that failed during the review was a transient state of the working tree while another lesson was being committed; `content:check` passes for this page.)
