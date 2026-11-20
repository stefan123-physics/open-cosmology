---
page: content/year-4/8.09/chaos-logistic-map.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: local copy, pdftotext text plus rendered page images of printed pp. 182-188 at 110 dpi; Section 7.6 text pp. 189 ff. read for the leadsTo claim; Section 7.4.1 p. 175 read for the opening claim)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (not opened separately; it is the resource page of the same PDF)
verdict: pass-with-notes
---

# Review: Chaos in maps: the logistic map, period doubling and Lyapunov exponents

Every equation was checked against the rendered page images (not the garbled text extraction). Printed page = PDF page + 141 was confirmed on every page (PDF pp. 41-47 = printed 182-188).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Quiz 3 explanation | Eq. (7.83): 3 + δ1/(1 − 1/δF) = 3.572 | "$3 + 0.449/0.786 = 3.572$" | With the rounded inputs shown, 3 + 0.449/0.786 = 3.5712, which rounds to 3.571. The exact value is 3.57199, so 3.572 is right, but the displayed inputs do not give it. Show $0.4495/0.7858$ (= 0.5720) instead. |
| 2 | warning | "Fixed points of maps", end of the stability paragraph | (Not in the notes) | "Unlike a flow, a map can have a negative multiplier, and then the deviation changes sign at every step." | As written this suggests flows cannot have negative eigenvalues, which they do (every stable node has them). The point is that in a one-dimensional flow a deviation never changes sign, while a map's multiplier can be negative and make it alternate. Suggest: "Unlike in a one-dimensional flow, where a deviation keeps its sign, a map's multiplier can be negative, and then the deviation changes sign at every step." |
| 3 | info | "Period doubling", 2-cycle paragraph | "we call this a pitchfork bifurcation of the map at r = 3" (p. 185) | Same, attributed to the notes, with the explanation that the two new fixed points of f∘f branch off the old one | Correct and fairly attributed. Optional: add that the bifurcation is also called a flip or period-doubling bifurcation of f itself, since for f it is not a pitchfork. |
| 4 | info | Eq. (7.75) lead-in | "Thus we find that lim x_n = ..." (no qualification) | "for almost every starting point in (0, 1) (p. 184)" | The qualification is correct (for example, x0 = 1/2 at r = 2 is already on the fixed point, and preimages of 0 land on 0), but it is the page's own and is cited to p. 184. Fine to keep; optionally drop the "(p. 184)" from that clause or mark it as the page's addition. |
| 5 | info | Fig. 7.64 remark | Caption: "such as the one near r = 0.384 visible as a white stripe" (p. 186) | "a slip for 3.84" | Verified on the image of p. 186: the caption does say 0.384, and the plotted r axis runs from 1 to 4, so 0.384 is impossible. The 3-cycle window opens at r = 1 + √8 = 3.8284 and 3.84 lies inside it, matching the white stripe in the figure and the "3-cycle near r ≈ 3.83" on p. 187. The correction is right and is flagged in brackets as the rules require. |
| 6 | info | "Feigenbaum's number" closing paragraph | "When we zoom in on regions of smaller scales of r, we see the same picture again, including the periodic windows, chaotic regions, and period doubling. This is a property of fractals" (p. 188) | "magnifying smaller and smaller ranges of r shows the same picture again, with period doublings, chaotic bands and periodic windows. Self-similarity is a property of fractals" | The sentence follows the notes' structure and keeps "the same picture again". It is a short sentence and not verbatim, so not a licence problem, but it is the closest paraphrase on the page. Optional light rewording. |

No formula errors were found. Each `<Formula>` against the page images:
- (7.68) p. 182: θ_{N+1} = f1(θ_N, ω_N), ω_{N+1} = f2(θ_N, ω_N). Matches.
- (7.69) p. 182: matches.
- (7.70) p. 183, (7.71) p. 183: match (the notes write x*; the page writes x_*).
- (7.72), (7.73) p. 183: match. The notes use index N and O(η²). The page uses n, says so in brackets, and writes O(η_n²). Fine.
- (7.74) p. 184: matches.
- (7.75) p. 184: matches.
- (7.76) p. 184: matches.
- 2-cycle formula "p. 185 (worked out here)": this is not in the notes and is marked as the page's own. The formula is correct (see the checks below).
- (7.77) p. 185: matches.
- (7.78), (7.79) p. 186: match, including "≃" in (7.79).
- (7.80) p. 187: matches.
- (7.81), (7.82) p. 187: match.
- (7.83) p. 188: matches. The page leaves out the intermediate step δ1 Σ δF^{−(n−1)}, which is acceptable. The notes' "r = lim r_n = 3 + Σ δ_n" is copied as is.
- (7.84), (7.85) p. 188: match, including the notes' "(1, 0)" notation for the reversed interval, which the page explains.

Page citations in the prose were checked too: the max f(1/2) = r/4 is on p. 182; the stability criteria are on p. 183; 3.5699456 is on p. 185 and again on p. 188; Fig. 7.64 with 1 + √6 is on p. 186; "road to chaos" and the damped driven oscillator are on p. 186; the λ definition with |δ_n| ≈ |δ0|e^{λn} is on p. 186; the λ signs and the 3-cycle near 3.83 are on p. 187; "pretty close to this number for small α" is on p. 187; stretching and folding (food colouring, dough) and self-similarity are on p. 188. All are correct.

## Arithmetic and answer checks
All recomputed independently in Python. `pytest tests/calc -k chaos-logistic`: 30 passed.
- f(1/2) = r/4 = 1 at r = 4: correct.
- Worked example r = 2.5: x* = 0.6 and f'(x*) = −0.5. Iterates from x0 = 0.3: 0.525, 0.6234375, 0.586908, 0.606118, 0.596848, so the page's 0.525, 0.6234, 0.5869, 0.6061, 0.5968 are correct. Deviations from 0.6: −0.075, +0.0234, −0.0131, +0.0061, −0.0032, matching the page's rounded values. The ratios of successive deviations are 0.31, 0.56, 0.47, 0.52, so "once small, roughly halve each step" is fair.
- 2-cycle formula p, q = [r + 1 ± √((r − 3)(r + 1))]/(2r): f(p) = q and f(q) = p to machine precision at r = 3.1, 3.2, 3.4. It is real only for r ≥ 3, and p = q = 2/3 = 1 − 1/3 at r = 3. Correct.
- Multiplier f'(p)f'(q) = 4 + 2r − r²: holds identically. It equals 1 at r = 3 and −1 when r² − 2r − 5 = 0, so r = 1 + √6 = 3.449490. Correct.
- r = 3.2: √0.84 = 0.916515, p = 0.799455, q = 0.513045, and f(p) = 0.513045 checks. 1 − 1/r = 0.6875. f'(p) = −1.91652 and f'(q) = −0.08348, so the product is 0.16000 = 4 + 6.4 − 10.24. λ = ½ ln 0.16 = −0.91629 and e^λ = 0.4000. All page values are correct. (The intermediate "3.2(1 − 1.026)" gives −0.0832 with the rounded 1.026, but −0.0835 is right with the unrounded 2q = 1.02609. This is negligible.)
- Superstable 2-cycle: 4 + 2r − r² = 0 at r = 1 + √5 = 3.23607. Correct. Fixed-point λ = ln|2 − r| goes to −∞ at r = 2. Correct.
- λ is 0 at r = 3 (both expressions) and at r = 1 + √6 (½ ln|−1| = 0). Correct. (It is also 0 at r = 1, the left end of the plot; the caption names only 3 and 3.449, which is fine.)
- λ = ln 2 at r = 4: verified numerically (10⁶ iterations from x0 = 0.1234 give 0.693147 against ln 2 = 0.693147). It is a standard result (conjugacy to the tent map) and is marked as not in the notes.
- r3 = 3.5441 (standard value 3.5440904): matches the literature value as I know it; I did not recompute it here, so it is not independently verified. The first ratio (√6 − 2)/(3.5440904 − 1 − √6) = 0.44949/0.09460 = 4.7514, so "4.75" is correct.
- Eq. (7.83): 3 + 0.449490/(1 − 1/4.669201) = 3 + 0.449490/0.785831 = 3.571993, which gives 3.572. Correct (see finding 1 for the quiz's rounded display).
- 3-cycle window: 1 + √8 = 3.8284, consistent with "near 3.83".
- Plot expressions: the f(x) and f(f(x)) expressions are correct. The bifurcation-plot branches use the exact 2-cycle formula, with a cut at 3.4495 (≈ 1 + √6). The Lyapunov-plot expressions match the stated formulas. Point (4, 0.6931) is ln 2.
- Quiz 1: answer index 1 (x* = 0.6, stable, alternating) is correct; the explanation is correct.
- Quiz 2: answer index 1 (1 + √6) is correct; the explanation is correct.
- Quiz 3: answer index 1 (3.572) is correct; see finding 1 on the rounded display.
- Quiz 4: answer index 1 (stretch and fold) is correct; the explanation is correct.
- Flashcards: all five are correct. The Feigenbaum definition matches (7.81). "λ < 0 in periodic regions" matches p. 187.

## Coverage and order
- The page follows the order of Section 7.5 exactly: 2-variable flows are not chaotic → Poincaré map (7.68) → logistic map (7.69) and the plot → fixed points (7.70-7.71) → stability (7.72-7.73) → logistic multipliers (7.74-7.75) → f∘f and the 2-cycle (7.76, Fig. 7.63) → (7.77) and period doubling to 3.5699456 → Fig. 7.64 and the period-doubling road → Lyapunov exponent (7.78-7.80), Fig. 7.65, windows → Feigenbaum (7.81-7.83) → stretching and folding (7.84-7.85) → self-similarity.
- Nothing in the section is left out. Figures are replaced by generated plots. Fig. 7.62 (the parabolas for r < 1, 1 < r < 3, r > 3) is covered by the slider plot. Fig. 7.63's cobweb is not drawn, but the f∘f plot covers its right panel. Fig. 7.64 is drawn only up to the 2-cycle, and the caption says why. Fig. 7.65's numerical λ(r) in the chaotic region is replaced by the exact λ on periodic orbits plus the r = 4 point, and the page says that λ > 0 in chaos. The stretch-and-fold sketch on p. 188 is described in words only. All acceptable (info).
- Additions, each clearly marked "our step", "worked out here" or "not in the notes": the 2-cycle formula, the multiplier 4 + 2r − r², λ on periodic orbits, the superstable r = 1 + √5, r3 = 3.5441 with the first ratio 4.75, and λ = ln 2 at r = 4. All verified above.
- Opening claim "Section 7.4 showed that two continuous variables cannot produce chaos, and that three can": supported by Section 7.4.1, pp. 175-176 ("This implies that there is no chaos in 2 dimensions. In 3 or more dimensions ... allowing for chaos").
- "the driven pendulum of Section 7.1 follows it too": the notes (p. 186) say "the nonlinear damped driven oscillator", which in Section 7.1 is the driven damped pendulum with its bifurcation plot (Fig. 7.7). Fair.

## Licensing
- `grep -i "rights reserved\|courtesy"` on ch7.txt finds nothing. Section 7.5 has no third-party credits.
- No figure is reproduced. All three plots are generated from formulas: the logistic parabola, f(f(x)), the exact bifurcation branches and the analytic λ curves. The Fig. 7.65 shape is not copied (the page's curve is analytic and covers r = 1 to 3.45).
- No OpenStax or LibreTexts material.
- Prose is rewritten throughout. Only the self-similarity sentence (finding 6) stays close to the notes' structure. Standard terms ("period doubling", "stretching and folding", "Feigenbaum number") are fine.
- The worked examples (r = 2.5 iteration from 0.3; the 2-cycle at r = 3.2) are original. The notes have no numerical examples.

## Forward links
- leadsTo 8.09 Section 7.6: "The next section finds the same behaviour in a flow with three variables, the Lorenz equations, and connects the Lyapunov exponents of this page to the fractal dimension of a strange attractor." Verified. Section 7.6.1 (p. 189) is the Lorenz equations (three variables, chaos with a strange attractor), and Section 7.6.2, "Fractals and the Connection to Lyapunov Exponents", connects the fractal dimension to the Lyapunov exponents. Strictly, Section 7.6 uses the Lyapunov exponents of a flow (λ_j for each direction), which generalise this page's map exponent. "The Lyapunov exponents of this page" is a fair shorthand.
- The closing line "Self-similarity is a property of fractals, the subject of the next section" is correct (Section 7.6.2). The notes' wording is "that we'll see shortly".
- There is no cosmology callout. That is appropriate: Chapter 7 has no cosmology link here.

## Notes
1. Verdict: **pass-with-notes**. There are no errors. Every formula, citation and number is correct.
2. Findings to consider: 1 (quiz 3 rounded display), 2 (wording "Unlike a flow", the only warning), 3, 4 and 6 (optional wording), 5 (confirmed slip note; no change needed).
3. Uncertain: r3 = 3.5440904 was taken from the standard literature value and was not recomputed in this review.

## Resolution (2026-11-19, by the page author)

1. Quiz 3 now shows 3 + 0.4495/0.7858 = 3.572.
2. Reworded: "Unlike in a one-dimensional flow, where a deviation keeps its sign, the multiplier of a one-dimensional map can be negative".
3. Added that the bifurcation at r = 3 is a pitchfork for f∘f and is usually called a flip (period-doubling) bifurcation for f itself.
4. "For almost every starting point" is now marked as our qualifier.
5. No change needed.
6. The self-similarity sentence is reworded.
