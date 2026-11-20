---
page: content/year-1/18.01/mean-value-theorem.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-14-mean-value-theorem/ (read: local copy lec14.html; its PDF link is 4Q37iOyBq44.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec14/ (read: local copy lec14notes.html and notes.pdf/notes.txt, "Lecture 14: Mean Value Theorem and Inequalities", OCW cover + printed pp. 1-4 = PDF pp. 2-5, confirmed with pdftotext -f/-l; text layer only, primes and arrows lost, reconstructed from context)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/4Q37iOyBq44.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec14"; p. 12 is empty, the text ends on p. 11)
  - content/year-4/8.286/age-of-the-universe.mdx and age-closed-universe.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/_course.json (read: Lecture 15 = Antiderivatives)
  - calcs/18.01/mean-value-theorem.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k mean-value-theorem`: 29 passed)
  - data/symbols.json (read: all 29 meanings scoped to `mean-value-theorem`)
  - `npm run content:check`: 0 errors; the only warning is the missing review file
verdict: pass-with-notes
---

# Review: The mean value theorem and inequalities

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-4, as on the other 18.01 pages (cf. reviews/18.01/newtons-method.md).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | data/symbols.json, meaning of `a` scoped to this page | n/a (site data) | "The left end of the interval a ≤ x ≤ b (in the Newton example, also a base point); ..." | `a` does not appear in the Newton part of the page. It is a base point in the third form and the linear approximation, $f(a) + f'(a)(x - a)$. Replace "in the Newton example" with "in the third form and the linear approximation". |
| 2 | info | Worked example "Watching the error square", step "Errors" | n/a (page's own example) | "Each is about 0.19 times the square of the one before" | Recomputed ratios: E₁/E₀² = 0.1667 (= 1/(2x₀) = 1/6), E₂/E₁² = 0.1875, E₃/E₂² = 0.1890. The first is 0.17, not 0.19. Suggest "about 0.17, then 0.19: the factor settles at 1/(2√7) ≈ 0.19", or "each is roughly 0.2 times ...". |
| 3 | info | "Every hypothesis matters" paragraph | Transcript p. 6 and notes p. 1 show only the differentiability hypothesis failing (the corner, \|x\|). Continuity is motivated in words (p. 5) but not shown failing. | "Every hypothesis matters", then only a corner example. | Optional: add one sentence with a jump (e.g. f = 0 on [0, 1), f(1) = 1: secant slope 1, f′ = 0 inside), or say "The differentiability hypothesis matters". |
| 4 | info | Cosmology callout | n/a (8.286) | "If the expansion has been slowing down ... t₀ < 1/H₀." | The argument is correct (a is continuous on [0, t₀] and differentiable inside, so the theorem applies even though ȧ blows up at t = 0; ä < 0 makes ȧ decreasing, so ȧ(c) > ȧ₀). Since 1998 the expansion is known to be accelerating now (covered later in 8.286), so the bound does not strictly apply to the real universe. An optional clause would avoid misreading: "(true for matter and radiation; vacuum energy changes it, see later lectures)". |
| 5 | info | leadsTo 8.286 Lecture 8, `why` | 8.286 Lecture 8 (age-of-the-universe.mdx) derives t = ⅔ H⁻¹ for the flat matter universe; the general "decelerating ⇒ t < 1/H" statement is not on the site's Lecture 8 pages. Whether Guth states it in that lecture I could not check (the 8.286 transcript was not read for this review: uncertain). | "The age of the universe: a decelerating universe must be younger than one Hubble time, 1/H." | Fair as a pointer. For safe attribution: "The age of the universe: for a flat universe of matter it is ⅔ of 1/H, an example of this page's bound." |

No errors found. Every formula matches its cited location:
- Error of Newton's method, $E_{n+1} \approx E_n^2$: transcript p. 2 (board), with E₀ ≈ 10⁻¹ ... 10⁻¹⁶ and "digits double" on p. 2; the "≈ hides a constant" remark is supported by p. 3 ("that little wiggle there just meant proportional to").
- Mean value theorem: notes p. 1 (statement with both hypotheses); also transcript p. 5.
- Second form $f(b) = f(a) + f'(c)(b - a)$: transcript p. 7; notes p. 2.
- Linear approximation "x near a": notes p. 2.
- $m \le$ average $\le M$, ends included: transcript p. 9 (board: "less than or equal to the largest value ... on the whole interval ... include the ends").
- $e^x - (1 + x)$, $f(0) = 0$, $f' = e^x - 1 > 0$: transcript p. 11. Lower bounds up to $x^4/(4\cdot3\cdot2)$: transcript p. 11 (written as on the board; the notes use 3!).
Every prose page reference was checked too (Newton recall p. 1, E_n p. 2, conditions pp. 2-3, failures pp. 3-4, "solves basically any equation" p. 4, Boston-LA pp. 4-5, Boston-Chicago notes p. 2, proof pp. 5-6 and notes p. 1, "from the top" p. 6, several c and "more analysis than we can do" p. 8, comparison notes pp. 2-3 and transcript pp. 8-9, Newton/Leibniz p. 9, "phony" find-a-c questions p. 10, consequences pp. 6 and 10-11 and notes p. 3, proof p. 7 and notes p. 3, "infinitesimals" notes p. 3, "exactly equal" p. 7, inequalities p. 11 and notes p. 4, e^x > 1 from e^x > 0 notes p. 4, Taylor series p. 11 and notes p. 4). All correct.

The three slip notes are supported:
- Transcript p. 5: "That's 3,000 miles times 6 hours, so that's 500 miles per hour." The page's bracket is right.
- Transcript p. 4: "So say, if f(x_0) = 0, then x_1 is undefined", directly after "f' = 0 is a disaster". The page's bracket is right.
- Notes printed p. 3 (PDF p. 4), checked with `pdftotext -raw`: "Decreasing means a < b = f(a) < f(b)" (the "=" is the garbled implication arrow). The inequality should be f(a) > f(b), as the page says.

## Arithmetic and answer checks
- √7 by Newton from 3: x₁ = 2.666667, x₂ = 2.6458333, x₃ = 2.64575131; √7 = 2.64575131. Errors 0.3542, 0.02092, 8.20×10⁻⁵, 1.27×10⁻⁹. Page values (0.35, 0.021, 8.2×10⁻⁵, 1.3×10⁻⁹) correct; ratio claim, see row 2. 1/(2√7) = 0.18898.
- Cycle: f(x) = x³ − 2x + 2, f(0) = 2, f′(0) = −2, x₁ = 1; f(1) = 1, f′(1) = 1, x₂ = 0. Correct.
- 3000/6 = 500 mph; 1000/3 = 333.3 mph. Correct.
- x³ on [0, 2]: secant slope 4; 3c² = 4 gives c = 2/√3 = 1.15470; c³ = 1.53960. Plot's tangent 4(x − 1.1547) + 1.5396 and points correct.
- √101 − 10: 1/22 = 0.04545 > 0.045 and 1/20 = 0.05, so 0.045 < 0.04988 < 0.05. Actual 0.0498756. Correct (the lower bound is rounded down, so the stated inequality still holds).
- Cameras: 12 km / 0.1 h = 120 km/h. Correct.
- e^0.5 = 1.64872; bounds 1.5 and 1.625. ln 1.5 = 0.40547 < 0.5. Correct.
- f′ for x − ln(1 + x) = x/(1 + x); g′ = eˣ − (1 + x). Correct.
- Cosmology: flat matter universe t = ⅔ H⁻¹ (matches age-of-the-universe.mdx).
- Quiz 1 (index 1, 10⁻⁶): correct. Quiz 2 (index 0, the two hypotheses): correct. Quiz 3 (index 1, 2/√3): correct; the distractor 4/3 is c², a good trap. Quiz 4 (index 1, exactly 120 km/h at some moment): correct. Quiz 5 (index 0): correct. All explanations right.
- Flashcards: all four correct.
- calcs/18.01/mean-value-theorem.yaml: 29 entries, all pass; it covers every number on the page. Minor: `flat-age` has `source: {cite: mit, at: 'see 8.286 age-of-the-universe'}`, but `mit` on this page means the 18.01 Lecture 14 URL. A `references` entry or a note would be more accurate (info).

## Coverage and order
- The page follows the transcript's order: Newton's method accuracy and failure modes (pp. 1-4), MVT colloquial and formal statement (pp. 4-5), geometric proof and the corner example (pp. 5-6), consequences listed (p. 6), proof via the second form (p. 7), student questions on several c and on the comparison with linear approximation (pp. 8-9), max/min bound (p. 9), "find a c" remark and emphasis (pp. 10-11), inequalities (p. 11). Slight regrouping: the page puts the "several c" answer (p. 8) in "Why it is true" and moves the list of consequences (p. 6) after the forms (p. 7), which reads better and is labelled with page numbers. Fine.
- Notes-only material (Boston-Chicago, third form, e^x > 1 step, the notes' decreasing slip) is labelled "notes" each time. The notes do not cover the Newton part (that was in the Lecture 13 notes); the page correctly cites the transcript for it.
- Left out (minor, acceptable): p. 8 remark that for a constant function every c works; pp. 9-10 student question about approaching the kink from the top; p. 9 aborted e^x ≈ 1 + x remark; p. 3 note that for a parabola a bad start "saves itself".
- Added: original worked examples (√7 errors, √101 bounds, average-speed cameras, ln(1 + x) < x), the standard x³ − 2x + 2 cycle (not from MIT), a generated plot, and a cosmology callout.

## Licensing
- No "rights reserved" or "Courtesy of" text in notes.txt, tp.txt, lec14.html or lec14notes.html (grep). Both OCW resource pages are marked Creative Commons License. The notes' two figures are not reproduced; the page draws its own plot from formulas.
- No verbatim copying beyond short attributed phrases ("the grass is always greener", "tortoise and the hare") and standard terminology. Proof, consequences and inequalities are rewritten in the page's own words.
- No OpenStax or LibreTexts material. Worked examples are original (own numbers and situations).

## Notes
- Symbols: the 29 meanings scoped to `mean-value-theorem` are accurate apart from `a` (row 1). `c` correctly covers the cosmology note (an earlier time), `t` covers cosmic time, `x` covers the root in Newton's method, and `m`/`M` are distinct (min/max of f′). No units are given, which suits a maths page. `content:check` reports no symbol gaps.
- leadsTo 18.01 Lecture 15 = Antiderivatives matches `_course.json`; the reason (zero derivative means constant, so antiderivatives differ by a constant) is correct.
- Frontmatter: the reading URLs match the OCW pages (transcript link 4Q37iOyBq44.pdf on lec14.html; notes resource lec14/ links lec14.pdf). Source title "Mean Value Theorem" and notes title "Mean Value Theorem and Inequalities" match OCW.

## Resolution (2026-11-16, by the page author)

- **Warning 1 (symbol `a`):** the meaning scoped to this page now names the interval's left end, the base point in the third form and the linear approximation, and the scale factor in the cosmology note.
- **Info 2:** the worked example now says the factor is 0.17 at the first step and then settles at about 0.19 = 1/(2√7); new calcs entry `error-ratio-first`.
- **Info 3:** added an example where continuity fails (f = 0 on 0 ≤ x < 1, f(1) = 1: secant slope 1, f′ = 0 inside).
- **Info 4:** the callout now notes that the argument needs deceleration throughout, and that the real universe has been accelerating (known since the late 1990s).
- **Info 5:** the 8.286 Lecture 8 leadsTo now describes what that lecture has: a flat matter universe is two thirds of a Hubble time old.
- **Info 6:** `flat-age` now cites a new `guth-age` reference (8.286 Lecture 8) instead of `mit`.
