---
page: content/year-1/18.01/taylor-series.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-38-taylors-series/ (read: local copy lec.html; links the transcript wOHrNt9ScYs.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/wOHrNt9ScYs.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec38"; the PDF prints no page numbers, so transcript pages = PDF pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec37/ (read: local copy n.html, links lec37.pdf; notes.pdf = OCW cover + printed pp. 1-5 = PDF pp. 2-6, checked page by page with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec36/ (read: local copy n.html, links lec36.pdf; printed pp. 5-7 = PDF pp. 6-8, "Playing with blocks", checked page by page)
  - content/year-1/18.01/_course.json (read: Lecture 38 "Taylor's Series", Lecture 39 "Final Review")
  - content/year-4/8.286/closed-universe-cycloid.mdx and reviews/8.286/closed-universe-cycloid.md (read, for the cosmology callout and the 8.286 Lecture 9 leadsTo; the 8.286 Lecture 9 transcript itself was not re-read)
  - calcs/18.01/taylor-series.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k taylor`: 12 passed)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Stacking blocks and Taylor series

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"); notes pages are printed footers (printed page = PDF page - 1). Lecture 37 notes ("Taylor Series", reading1): p. 1 = geometric series, radius of convergence, a = -1, substitution examples 2-3; p. 2 = example 4 (squaring), term-by-term differentiation and integration, ln(1 + x), tan⁻¹x; p. 3 = Taylor's formula, e^x, start of cos x; p. 4 = cos x, sin x by differentiating cos x, comparison with the quadratic approximations, Σ forms, binomial series; p. 5 = base point b, √x about b = 1. Lecture 36 notes (reading3): p. 5 = blocks set-up, top-down strategy, C₀, C₁, C₂; p. 6 = Figures 4-5, C₀ = 0, C₁ = 1, recurrence, C₃-C₅; p. 7 = Figure 6, ln N < S_N < ln N + 1, 30 cm × 3 cm blocks, 26 - 2 = 24 units, 3 cm · e²⁴ ≈ 8 × 10⁸ m, Moon, observable universe. Every page citation was checked against these.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Summary bullet 1, frontmatter `summary`, flashcard "Stacking blocks": "the overhang after $N$ blocks is $1 + \frac12 + \cdots + \frac1N$ half-lengths" | Transcript p. 4 and notes p. 6: $C_N$ is the centre of mass of the top $N$ blocks, i.e. where the left end of the *next* (support) block goes. The lecture and notes are themselves loose about what "overhang" means. | With the page's own definition ($C_N$ measured from the left end of the top block), the left end of block $k+1$ sits at $C_k$, so $N$ blocks overhang their own bottom block by $C_{N-1} = H_{N-1}$; the overhang is $H_N$ only measured past the edge of a table (or an $(N+1)$th block) placed at $C_N$. Example: 2 blocks, top left end 0, bottom left end at 1: overhang 1, not $\frac32$. | Say "past the edge of the table they rest on" (or "$N$ blocks on a table"), in the summary, the frontmatter summary and the flashcard. The body text and worked example (d) are consistent: (d) asks for $C_N$ itself, matching the definition. |
| 2 | warning | "How far can a stack of blocks lean?": "To lean 24 units ... needs $\ln N \approx 24$, so $N \approx e^{24}$ ... about $8 \times 10^8$ m tall, twice the distance to the Moon" | Transcript p. 5: "I need log N to be equal to 24, roughly speaking"; notes p. 7: "If ln N = 24, then N = e²⁴ ... roughly twice the distance to the moon". | Reproduces MIT's figure correctly, but the sentence before it invokes $S_N < \ln N + 1$, which gives only $\ln N > 23$; $\ln N \approx 24$ comes from the other inequality and is an overestimate. Sharper: $S_N \approx \ln N + 0.5772$, so $N \approx e^{23.42} \approx 1.5 \times 10^{10}$ and height $\approx 4.5 \times 10^8$ m, about 1.2 Moon distances; the bounds alone give between $0.03e^{23} \approx 2.9 \times 10^8$ m and $0.03e^{24} \approx 7.9 \times 10^8$ m. | Keep MIT's number, but mark it as the lecture's rough estimate ("roughly", "in the lecture's estimate") and optionally add in brackets that the sharper estimate $S_N \approx \ln N + 0.577$ gives about half that, still beyond the Moon. Rewording "But since $S_N < \ln N + 1$" to "Since $S_N$ is close to $\ln N$" would remove the logical mismatch. |
| 3 | info | Same paragraph, "Since $\ln N < S_N$ ... since $S_N < \ln N + 1$" | Transcript p. 5 slip: "log N is less than S_N, which is less than S_N + 1". | Correct inequality $S_N < \ln N + 1$. | Slip not repeated; writing rule 4 asks for a short bracket, e.g. "(the transcript says $S_N + 1$ on p. 5)". Optional. |
| 4 | info | Same paragraph, "To lean 24 units, across the two lab tables" | Transcript p. 5 / notes p. 7: two tables = 13 blocks = 26 units, "the first one is already 2", so 26 - 2 = 24. | 24 units, without the subtraction. | Optional: "(the tables are 26 units; the top block itself covers 2)". |
| 5 | info | "Taylor's formula": "those of $\sin x$ through $0, 1, 0, -1$ (notes, pp. 3-4)" | Notes p. 4 obtain sin x by differentiating the cos x series ("We will take the derivative"); they list the derivatives of cos x at 0, not those of sin x. | Attributes the sine derivative cycle to the notes. | Mathematically right; either cite the transcript (p. 11, "if you take a function like sin x") or say "the notes get the sine by differentiating the cosine series". |
| 6 | info | "Term-by-term calculus" formula | Notes p. 2 have a typo in the integral: "c + a₀ + a₁/2 x² + ..." (missing x after a₀); the transcript p. 9 says "a₀ x". | Correct $c + a_0x + \ldots$, cited to the transcript. | None; correctly taken from the transcript. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified:
  - "Centre of mass of the stack", reading2 p. 4: weighted average $\frac{N C_N + (C_N + 1)}{N + 1}$ and $C_{N+1} = C_N + \frac{1}{N+1}$, on p. 4 (set-up of $C_N$ and the new block's centre at $C_N + 1$ on p. 3). Correct; notes p. 6 has the same recurrence (lower-case n).
  - "Radius of convergence", reading2 pp. 7-8: convergence for |x| < R on p. 7, divergence for |x| > R and the delicate borderline on p. 8. Correct. (The transcript writes "x less than R" without absolute values; the page's |x| follows notes p. 1, correctly.)
  - "Term-by-term calculus", reading2 p. 9. Correct (see finding 6).
  - "Two series by integration", reading1 p. 2: Example 5 (ln(1 + x)) and Example 6 (tan⁻¹x). Correct. The notes do not state |x| < 1 next to them; it follows from the geometric series on p. 1, fine.
  - "Taylor's formula", reading2 pp. 10-11: formula announced at the end of p. 10, derivation, n! and 0! = 1 on p. 11. Correct; notes p. 3 also correct.
  - "The exponential series", reading2 p. 11: Σxⁿ/n! and e = 1 + 1 + 1/2! + 1/3! + 1/4! + .... Correct.
  - "Sine and cosine", reading2 pp. 11-12: introduced at the end of p. 11, written out on p. 12. Correct.
- Prose citations: the question and convergence/divergence framing (p. 1), top-down trick (pp. 1-2), halfway / unit length 2 / C₁ = 1 (p. 2), greedy bottom-up is bad (p. 3), C₂ = 3/2, C₃, C_N = H_N and "same as S_N" (p. 4), ln N < S_N, divergence, 24 units, e²⁴, 3 cm, 8 × 10⁸ m, Moon (p. 5), logarithmic curve and "orders of infinity" (p. 6), geometric series by multiply-and-subtract (pp. 6-7), x = 1 gives ∞ - ∞ (p. 7), terms shrink exponentially inside / not to 0 outside (p. 8), polynomial rules (p. 9), decimal-expansion analogy (p. 9), power series as a function of x (p. 10), quadratic approximations (p. 11), "one family" (p. 12); notes citations pp. 1-5 and Lecture 36 notes pp. 5-7 as listed above. All match.
- Recomputed:
  - 0.03 m × e²⁴ = 7.95 × 10⁸ m ≈ 8 × 10⁸ m; Moon mean distance 3.84 × 10⁸ m, ratio 2.07: "twice the distance to the Moon" correct as MIT's estimate (see finding 2 for the sharper value).
  - Recurrence identity: (N C + C + 1)/(N + 1) = C + 1/(N + 1). Correct.
  - Worked example (a): 1 + 1 + 1/2 + 1/6 + 1/24 + 1/120 = 2.716667 ≈ 2.7167; e = 2.718282. Correct.
  - Worked example (b): 0.5 - 0.125/6 + 0.03125/120 = 0.5 - 0.020833 + 0.000260 = 0.479427; sin 0.5 = 0.4794255 ≈ 0.479426. Correct.
  - Worked example (c): 0.5 - 0.125 + 0.041667 - 0.015625 = 0.401042 ≈ 0.4010; ln 1.5 = 0.405465 ≈ 0.4055. Correct.
  - Worked example (d): direct sums H₃₀ = 3.994987 ≈ 3.995, H₃₁ = 4.027245 ≈ 4.027, so N = 31; ln 31 = 3.434 ≈ 3.43, and 3.434 < 4.027 < 4.434. Correct, and consistent with the page's definition of $C_N$ (C_N = H_N, measured from the left end of the top block; 4 units = two block lengths since a block is 2 units).
- Quiz 1: index 1 ($\frac{1}{N+1}$). Correct; explanation right.
- Quiz 2: index 1 ($\frac{f^{(n)}(0)}{n!}$). Correct; explanation right.
- Quiz 3: index 1 (odd powers, alternating signs). Correct; explanation right.
- Quiz 4: index 0 (ln(1 + x) series). Correct; the other choices are wrong (tan⁻¹x comes from 1/(1 + v²), e^{-x} and 1/(1 + x)² are unrelated). Explanation right.
- Flashcards: Taylor's formula with 0! = 1, the three series, radius of convergence: correct. "Stacking blocks": correct apart from the overhang wording (finding 1); "growing only like ln N" correct.
- calcs/18.01/taylor-series.yaml: all 12 entries (recurrence, moon-stack, moon-distance, example-a, e-value, example-b, sin-half, example-c, ln-1-5, harmonic-30, harmonic-31, ln-31) agree with the page; pytest 12 passed. Info: `harmonic-30`/`harmonic-31` use the Euler-Maclaurin approximation rather than the direct sum; both agree to 4 decimals (3.99499, 4.02725). `moon-distance` is a `fact` with value '2'; it could also be a computed check (0.03·e²⁴ / 3.844 × 10⁸ = 2.07), optional.

## Coverage and order
- The page follows the transcript order: blocks question and vote (pp. 1-2), top-down construction (pp. 1-2), greedy bottom-up (p. 3), recurrence and harmonic sum (pp. 3-4), divergence and the Moon estimate (p. 5), logarithmic shape and orders of infinity (p. 6), geometric series and its proof (pp. 6-7), radius of convergence (pp. 7-8), polynomial rules and term-by-term calculus (p. 9), power series as functions (p. 10), Taylor's formula (pp. 10-11), e^x (p. 11), sin and cos (pp. 11-12). The notes' material (substitution, squaring, differentiation, ln and tan⁻¹ by integration, binomial series, base point b) is inserted at the matching places, in the notes' order. Good.
- Observable-universe remark (transcript p. 5; notes p. 7: "≈ 30 ft ... 10²⁶ meters high ... about the diameter of the observable universe"): omitted. The omission is sensible. The figure is very sensitive to the distance, which is only given as "over 30 feet": with 0.15 m units, 30 ft = 61 units gives 0.03 e⁵⁹ ≈ 1.2 × 10²⁴ m, 32 ft gives ≈ 7 × 10²⁵ m, and every extra foot multiplies the height by about e² ≈ 7.6; the observable universe is about 8.8 × 10²⁶ m across. The notes' 10²⁶ m is therefore only an order-of-magnitude-of-orders statement and probably on the high side for 30 ft. If the author wants it, attribute it ("the lecturer adds that reaching the far wall, over 30 feet away, would need a stack roughly the size of the observable universe") rather than quoting 10²⁶ m.
- Left out from the transcript (all optional): the name "greedy algorithm" and the lecturer's remark that optimality of the top-down stack is not proved in class (p. 3); the vertical rise of the centre of mass (p. 4); the exponential curve seen "standing on your head" and exponentially small tails (p. 6); the student questions "how do you find R" (answered "it will always be 1 or infinity", p. 8, an overstatement the page rightly does not repeat) and "series or polynomial" (p. 10); other kinds of series with sines and cosines (p. 10).
- Left out from the notes (optional): Example 1, a = -1 bouncing between 0 and 1 (p. 1; covered on the previous page); cos x as an even function and the Σ(-1)^k forms (p. 4).
- Added beyond the sources: the worked example and the cosmology callout.
- leadsTo: _course.json lists Lecture 39 as "Final Review", which has no new material, so the absence of an 18.01 forward link is right; the transcript (p. 6) calls power series "our last subject", supporting the opening sentence "The last lecture of new material". The page's own leadsTo is 8.286 Lecture 9, which exists in content/year-4/8.286/_course.json ("The Dynamics of Homogeneous Expansion, Part V") and has a page, closed-universe-cycloid.mdx (lecture: 9). Correct.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in lec.html, the two n.html pages, either notes PDF or the transcript (grep checked). The notes' block figures (Figures 3-7) are not reproduced; the page has no figures.
- Worked examples are original: the notes evaluate e only as a series, never 2.7167; sin 0.5, ln 1.5 and the 31-block question are the author's own.
- No copied paragraphs found. Shared wording is short and standard or a brief echo ("no visible support", "first honest formula for e", "infinity ... a rate of growth"), acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and 8.286 Lecture 9 leadsTo: closed-universe-cycloid.mdx gives $ct = \alpha(\theta - \sin\theta)$, $a/\sqrt k = \alpha(1 - \cos\theta)$ (cited there to Lecture 9 slide 4) and, in its own worked example, exactly the expansion used here: $ct \approx \alpha\theta^3/6$, $a/\sqrt k \approx \alpha\theta^2/2$, hence $a \propto t^{2/3}$ (checked in reviews/8.286/closed-universe-cycloid.md, where the small-θ example is recorded as the page's own addition, not Guth's). Recomputed: $\theta - (\theta - \theta^3/6) = \theta^3/6$, $1 - (1 - \theta^2/2) = \theta^2/2$, $\theta \propto t^{1/3}$, $a \propto \theta^2 \propto t^{2/3}$. Correct. The callout does not attribute the derivation to Guth, which is fair; the leadsTo `why` is accurate.
- The callout says "near the Big Bang, θ is small": correct (θ = 0 at the Big Bang per the 8.286 page).
- The readings' titles make the notes/lecture numbering offset clear (notes "Lecture 37" for video Lecture 38; Lecture 36 notes for the blocks).
- "the way the exponential is actually computed" follows the transcript (p. 11, "this is how you compute the exponential function"); real libraries use range reduction plus polynomial approximations, which is in the same spirit. No change needed.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the summary, the flashcard and Summary bullet 1 now say that N blocks on a table can lean past its edge by H_N half-lengths.
- **Warning 2:** the Moon figure is now marked as the lecture's rough estimate, with the sharper estimate (S_N ≈ ln N + 0.577: about 1.5 × 10¹⁰ blocks, 4.5 × 10⁸ m) in the text and in calcs (`sharper-stack`, `sharper-n`); the 24 units are explained as 26 − 2.
- Info: a bracket notes the transcript's "S_N < S_N + 1" slip; the sine series is credited to differentiating the cosine series, as the notes do. The other info items are left as they are.
