---
page: content/year-1/18.01/improper-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-36-improper-integrals/ (read: local copy lec.html, title "Lecture 36: Improper Integrals"; links the transcript KhwQKE_tld0.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/KhwQKE_tld0.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec36"; the PDF has no printed page numbers, so transcript pages = PDF pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec35/ (read: local copy n.html, title "Lecture 35: Improper Integrals", links lec35.pdf; notes.pdf = OCW cover + printed pp. 1-6 = PDF pp. 2-7, checked page by page with pdftotext -f N -l N; printed p. 5 also checked as an image, because the text extraction drops square roots and exponents)
  - content/year-1/18.01/_course.json (read: Lecture 36 "Improper Integrals", 37 "Infinite Series")
  - content/year-4/8.286/horizon-distance.mdx (read, for the cosmology callout and the 8.286 Lecture 8 leadsTo; the 8.286 Lecture 8 transcript itself was not re-read)
  - content/year-1/18.01/lhopital-rule.mdx (read, for the L'Hôpital ∞/∞ material this page leaves out)
  - calcs/18.01/improper-integrals.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k improper`: 9 passed)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: needs-changes
---

# Review: Improper integrals

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"; the transcript PDF prints no page numbers), notes pages are printed footers (printed page = PDF page - 1; printed p. 1 = PDF p. 2 through printed p. 6 = PDF p. 7). Every page citation was checked against tp.txt and the notes PDF.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Limit comparison", last paragraph: "$\int_{-\infty}^\infty e^{-x^2}\,dx = 2\int_0^1 \dots$ so it converges (pp. 10-11; notes, Example 8, p. 5)" | Notes Example 8 (printed p. 5, verified on the page image) is $\int_0^\infty e^{-x^3}\,dx$, with "for $x \ge 1$, $x^3 \ge x$" and $\int_1^\infty e^{-x^3}dx \le \int_1^\infty e^{-x}dx = 1$. The $e^{-x^2}$ comparison is only in the transcript (pp. 10-11). | Cites notes Example 8 for the $e^{-x^2}$ argument. | Drop "notes, Example 8, p. 5" from that citation, or write "(pp. 10-11; the notes, Example 8, p. 5, make the same comparison for $e^{-x^3}$)". |
| 2 | info | "The second type", first sentence: "like $\frac{1}{\sqrt x}$, $\frac{1}{x}$ or $\frac{1}{x^2}$ at $x = 0$ (transcript, p. 11)" | The transcript does not name the three integrands ("Something like this. Something like this. Or something like this."; they were on the board). It says the first converges and the other two diverge, which fits the page's three functions; the notes (p. 6) have only $1/\sqrt x$. | Presents the three as the lecture's. | Probably right, but uncertain. Optionally add "(the board examples, reconstructed: the transcript says the first converges and the other two diverge)". |
| 3 | info | "The second type", final bracket: "(The transcript first says '2' and then refers to it as $-2$, p. 11.)" | Transcript p. 11: "So that comes out to be 2. Now, this is ridiculous. ... How exactly is it that the area between -1 and 1 came out to be a negative number?" and later "when that integral is thought to -2". | As quoted. | Accurate. Whether the lecturer said "minus 2" and the transcriber dropped the sign cannot be told from the text; the page's wording ("the transcript first says") is appropriately careful. The page's own value $[-1/x]_{-1}^{1} = -1 - 1 = -2$ is correct. |
| 4 | info | "The definition", √π sentence (pp. 5-6) | Transcript p. 6 continues with a historical remark: the number "was only calculated numerically starting in the 1700s or so by ... de Moivre", who sold his services to royalty running lotteries and knew it numerically without knowing it was $\sqrt\pi$; also insurance. | Gives $\sqrt\pi$ and its role in probability and opinion polls (both on pp. 5-6, correct), but has no de Moivre remark. | Nothing to fix: the page does not make the historical claim. If it is added, attribute it ("Jerison says ...", p. 6) and keep it as the lecturer's account: historically de Moivre (1733) worked with the normal approximation and the constant $\sqrt{2\pi}$ came from Stirling's result, so "did not know it was $\sqrt\pi$" is the lecturer's simplification (uncertain; not checked against a historical source). |
| 5 | info | "Limit comparison", Example 10 sentence: "The notes use the same idea for $\int_0^\infty x^ne^{-x}\,dx$, comparing with $e^{-x/2}$" | Notes p. 6: $x^n \ll e^{x/2}$ (by L'Hôpital), so $x^ne^{-x} \ll e^{-x/2}$, "Now by limit comparison ...". | Placed in the paragraph on ordinary comparison ("the same idea"). | Fine as a pointer; optionally "a similar comparison" since the notes call it limit comparison. |
| 6 | info | Callout and `leadsTo` 8.286 L8: "For a matter-dominated universe, $a \propto t^{2/3}$" | content/year-4/8.286/horizon-distance.mdx: "flat matter-dominated", $a = b\,t^{2/3}$, horizon $3ct_0$. | "matter-dominated" (callout and leadsTo). | Add "flat" in both places; $a \propto t^{2/3}$ is the flat case only. |
| 7 | info | Transcript slip p. 10 | "When x >= 1, then x^2 >= x, and so -x^2 < x." (should be $-x^2 \le -x$) | The page states it correctly ($e^{-x^2} \le e^{-x}$ for $x \ge 1$). | None needed; the slip is not repeated. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt and the notes:
  - "Rates of growth and of decay", reading2 pp. 1-2: $\ln x$ slow, $x^p$ moderate, $e^x$ fast, $e^{x^2}$ very fast (p. 1); reciprocals, $1/\ln x \gg 1/x^p \gg e^{-x} \gg e^{-x^2}$, "this exponent p is meant to be positive" (p. 2). Correct; the $\ll$ notation and "f, g positive" are on p. 1.
  - "Improper integral", reading2 p. 2: limit as $N \to \infty$ of the integral up to $N$; converges if the limit exists, diverges if not. Correct (notes p. 1 use $M$; the page follows the lecture's $N$).
  - "The decaying exponential", reading2 p. 3: $-\frac1k e^{-kN} + \frac1k \to \frac1k$, $k > 0$. Correct; also notes Example 1, p. 1.
  - "Integrals of powers to infinity", reading2 pp. 7-8: antiderivative $x^{-p+1}/(-p+1)$ evaluated at 1 and ∞, infinite for $p < 1$, $1/(p-1)$ for $p > 1$ (p. 7); "diverges if p <= 1 and converges if p > 1 ... equal to 1/(p-1)" (p. 8). Correct; notes Examples 4-6, p. 3, correct.
  - "Limit comparison", reading2 pp. 8-9: statement "either both converge, or both diverge" (p. 8), $\sim$ means $f/g \to 1$ (p. 9). Correct; notes p. 5 has the one-sided version ($f \le 2g$ far out). Correct citation.
  - "Improper integral of the second type", reading1 p. 6: $\lim_{a\to0^+}\int_a^1 x^{-1/2}dx = 2 - 2a^{1/2} \to 2$. Correct.
- Prose citations: "Dealing With Infinity" (p. 1); decay as the reverse of growth (pp. 1-2); converge = finite limit (pp. 2, 4); positive $f$, finite area (pp. 2-3); sign changes skipped (p. 4); "plug in infinity", only because $k > 0$ (p. 3; also p. 4); infinity easier than any finite number (p. 5; notes p. 1 "just as infinitesimals and derivatives are easier than difference quotients"); radioactive decay total $R/k$ and idealisation (transcript pp. 4-5; notes p. 1, which use $R$ and $Re^{-kt}$ exactly as the page does); $\sqrt\pi$, probability, polls (pp. 5-6); tails and the computer (p. 6); powers as the borderline (p. 7); $\ln N \to \infty$ (p. 7; transcript calls it Example 3, notes Example 4, p. 3, correct); fails at the edge (p. 8); $\sqrt{x^2+10}$ from 100, not from 0 (p. 9); $\sqrt{x^3+3}$ from 10, $x^{-3/2}$ (p. 10); $e^{-x^2}$ comparison (pp. 10-11; see finding 1 for the notes part); second type (p. 11); $\int_0^1 x^{-p}$ converges to $\frac{1}{1-p}$ iff $p < 1$ (notes p. 6: "for all p < 1 ... $\frac{1}{-p+1}$ ... for p ≥ 1, the integral diverges"); $\int_{-1}^1 dx/x^2$ (p. 11). All match except finding 1.
- Quiz 1: index 2 ($p > 1$). Correct; explanation right.
- Quiz 2: index 1 ($\frac13$). Correct.
- Quiz 3: index 0. Correct: $(x^3+3)^{-1/2} \sim x^{-3/2}$, $\frac32 > 1$; this is the lecture's own example (p. 10).
- Quiz 4: index 1. Correct; $[-1/x]_{-1}^{1} = -2$ and the integral diverges at 0.
- Flashcards: definition, both power rules ($\int_1^\infty$: $\frac{1}{p-1}$ iff $p > 1$; $\int_0^1$: $\frac{1}{1-p}$ iff $p < 1$) and limit comparison: all correct.
- Worked example (a): $\frac{1}{3/2 - 1} = 2$. Correct.
- Worked example (b): $\frac{x}{x^3+1} \sim x^{-2}$, $\int_1^\infty x^{-2}dx = 1$: converges. Correct.
- Worked example (c): $(x+1)^{-1/2} \sim x^{-1/2}$, $p = \frac12$: diverges. Correct.
- Worked example (d): $\int_0^8 x^{-1/3}dx = \frac32 x^{2/3}\big|_0^8 = \frac32 \cdot 4 = 6$. Correct.
- $\sqrt\pi = 1.77245$ (calcs: $2\int_0^{10} e^{-s^2}ds$ = 1.7725). Correct.
- Callout: $t^{2/3}\int_0^t c\,t'^{-2/3}dt' = t^{2/3}\cdot 3c\,t^{1/3} = 3ct$; integrand singular at $t' = 0$ with exponent $\frac23 < 1$, so a convergent integral of the second type. Correct and consistent with horizon-distance.mdx.
- calcs/18.01/improper-integrals.yaml: entries exponential, gaussian, powers, second-type, wrong-calc, example-a, example-b, example-d, horizon agree with the page; pytest 9 passed. Every number on the page is covered. Minor (info): the `horizon` entry cites `reading1, p. 6` (the 18.01 notes) for a result that comes from 8.286 Lecture 8; with `origin: page-own` this is harmless, but a note pointing to content/year-4/8.286/horizon-distance.mdx would be clearer.

## Coverage and order
- The page follows the transcript order: rates of growth and decay (pp. 1-2), definition (p. 2), $e^{-kx}$ and the shorthand (pp. 3-4), finite limit and sign changes (p. 4), radioactive decay (pp. 4-5), infinity easier (p. 5), $\sqrt\pi$ (pp. 5-6), tails (p. 6), $1/x$ and powers (pp. 7-8), limit comparison and its two examples (pp. 8-10), ordinary comparison for $e^{-x^2}$ (pp. 10-11), the second type and $\int_{-1}^1 dx/x^2$ (p. 11). The lecture stops there ("we'll do these three calculations next time"); the page completes the second type from the notes (p. 6), which is appropriate.
- Left out from the transcript: the restatement of L'Hôpital's rule for $\infty/\infty$ with $a, L = \pm\infty$ (p. 1; covered on lhopital-rule.mdx); the student question on $A$ vs $A/k$ in the decay model (p. 5); de Moivre and lotteries (p. 6, see finding 4); fat tails in finance and the mortgage crisis (p. 6); that $\int dx/\sqrt{x^2+10}$ could be done by trig substitution (p. 10); the remark that complex numbers "rescue" $\int_{-1}^1 dx/x^2$ in another sense (p. 11). All optional.
- Left out from the notes: the half-life relation $k = \ln 2/H$ (p. 1) and the Polonium-210 application (p. 2) (deliberate, per the author); Example 2 $\int_0^\infty \frac{dx}{1+x^2} = \frac\pi2$ with the tangent/arctangent figures (pp. 2-3); Example 3 $\int_0^\infty e^{-x^2}dx = \frac{\sqrt\pi}{2}$ and the remark that the finite version has no elementary formula (p. 3); the explicit statement of ordinary comparison in both directions (p. 4); Example 7 $\int_0^\infty dx/\sqrt{x^3+1}$ (p. 5; its point, not comparing from 0, is made on the page with the lecture's own example); Example 9 $\int_0^\infty \frac{x+10}{x^2+1}dx$ diverges (p. 5). Consider at least one sentence stating the ordinary comparison principle, since the page uses it.
- Added beyond the sources: the worked example and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript, the notes or the OCW lecture/notes pages (grep on the extracted text and the saved HTML found none). The page reuses no figure (the notes' tangent/arctangent figures are not used).
- No copied paragraphs: every section is rewritten. The radioactive decay sentence follows the notes' setup closely ($R$ = decays per second at time 0, rate $Re^{-kt}$, total $R/k$) but is one short sentence of standard set-up; fine. "Infinity is easier than any finite number" and "fails at the edge" are short lecture phrases; fine.
- Worked example is original: (b) $\frac{x}{x^3+1}$, (c) $\frac{1}{\sqrt{x+1}}$ and (d) $\int_0^8 x^{-1/3}$ appear in neither source; (a) $x^{-3/2}$ is the standard case of the general power rule. Fine.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: consistent with content/year-4/8.286/horizon-distance.mdx (Lecture 8): its formula "Horizon distance (general)" is $a(t_0)\int_0^{t_0} c\,dt/a(t)$ and "Horizon distance, flat matter-dominated" gives $3ct_0$. The callout's framing as an improper integral of the second type, convergent because the exponent $\frac23 < 1$, is the page's own observation and is correct. The 8.286 page also says the horizon stays finite as the lower limit $\varepsilon \to 0$, which is exactly this convergence. Nothing is attributed to Guth. Only nit: "flat" (finding 6).
- leadsTo 8.286 Lecture 8 is the lecture of `horizon-distance` (frontmatter `lecture: 8`): correct.
- leadsTo 18.01 Lecture 37 is "Infinite Series" in `_course.json`: correct, and the reason given is fair.
- Numbering: the page's `lecture: 36` follows the OCW video numbering in `_course.json` (Lecture 36 "Improper Integrals"); the reading title correctly says the notes are numbered Lecture 35, and the notes resource (lec35.pdf, "Lecture 35: Improper Integrals") is the one for this video. The transcript URL `KhwQKE_tld0.pdf` is the one linked from the Lecture 36 page. Correct.
- Prerequisites `lhopital-rule` and `fundamental-theorem-2` exist (content:check passes) and fit: the rates of growth come from the former, and the second-type warning is about misusing the fundamental theorem.
- No em dashes on the page.
- Not checked: the video itself (so the board contents in finding 2 remain uncertain); data/symbols.json meanings (content:check reports no symbol errors for this page).

## Resolution (2026-11-16, by the page author)

- **Error 1:** the e^(−x²) comparison now cites the transcript (pp. 10–11) and says that the notes make the same comparison for e^(−x³) (Example 8, p. 5).
- Info: the ordinary comparison principle is now stated (notes, p. 4); Example 10 is described as limit comparison; the cosmology callout and leadsTo now say "flat" matter-dominated universe; the `horizon` calcs entry names the rule it relies on. The de Moivre story stays out of the page; the other omissions are left as they are.
