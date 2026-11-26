---
page: content/year-3/8.044/8-044-problem-set-2.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps2/ (read: local PDF and pdftotext; p. 4 checked as a rendered image)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss2/ (read only after the blind solve: local PDF and pdftotext; pp. 2 and 6 to 10 checked as rendered images, p. 2 also at 300 dpi)
  - https://doi.org/10.1103/RevModPhys.15.1 (not read: APS, cite only; judged from the bibliographic record and general knowledge)
verdict: pass-with-notes
---

# Review: Problem Set 2: two quantum particles, a pyramid, nearest stars, gas energies, an atomic beam and planetary nebulae

Reviewed version: commit 6ec05c2 on the worktree branch `ps-8044-2` (page and calcs file as committed).

## Blind solve

My answers were written into this file before the full page, its calcs file or MIT's solutions were opened. They are kept verbatim below.

### My answers (written before opening the full page, the calcs file or MIT's solutions)
- 1(a): p(x1,x2) = (x2-x1)^2 exp(-(x1^2+x2^2)/x0^2) / (pi x0^4). Zero (minimum) on the line x1 = x2; maxima at x1 = -x2 = ±x0/sqrt2, so c = 1/sqrt2 = 0.7071.
- 1(b): p1(x) = p2(x) = (x0^2/2 + x^2) exp(-x^2/x0^2) / (sqrt(pi) x0^3). Not independent (p1 p2 != p).
- 1(c): p(x1 given x2) = (x1-x2)^2 exp(-x1^2/x0^2) / (sqrt(pi) x0 (x0^2/2 + x2^2)); mean <x1> = -2 x0^2 x2 / (x0^2 + 2 x2^2).
- 2(a): p(x) = 3(1-x)^2.
- 2(b): p(y given x) = 2(1-x-y)/(1-x)^2; not independent.
- 3(a): p_r(r) = 4 pi rho r^2 exp(-4 pi rho r^3/3); maximum at r^3 = 1/(2 pi rho): rho = 0.004 gives r = 3.414 ly.
- 3(b): p_a(a) = p_r(sqrt(GM/a)) * (1/2) sqrt(GM/a^3); largest error at small a (distant nearest neighbour).
- 3(c): p_a(a) = 2 pi rho (GM)^{3/2} a^{-5/2} exp(-(4 pi rho/3)(GM/a)^{3/2}); binaries spoil the large-a tail.
- 3(d): the mass M of the neighbour (a distribution of stellar masses).
- 4(a): p(E) = (2/sqrt(pi)) (kT)^{-3/2} sqrt(E) exp(-E/kT); not Gaussian.
- 4(b): p(E) = exp(-E/kT)/kT; not Gaussian (exponential).
- 5: p_vx(eta) = sqrt(2/pi) eta^2/sigma^3 exp(-eta^2/(2 sigma^2)); peak at eta = sqrt2 sigma; p_s peaks at zeta = A/(5 sigma^2).
- 6: p(r_perp) = r_perp / (R sqrt(R^2 - r_perp^2)); rim fraction (r_perp > 0.9R) = sqrt(0.19) = 0.4359.

### Comparison (one line per answer id)
Formula answers compared by value at 5 random points (Python script in the reviewer's scratch folder; largest relative difference below 4e-16 for every box).
- p1-joint: agrees (same formula).
- p1-max: page 0.707 = 1/√2; mine 0.7071. Agrees.
- p1-marg: page (x²/x0² + 1/2)/(√π x0) e^(−x²/x0²) = mine (x0²/2 + x²) e^(−x²/x0²)/(√π x0³). Agrees.
- p1-indep: page "not independent" (choice 0). Agrees.
- p1-cond: agrees (equal at 5 points).
- p1-mean: page −2 x2 x0²/(x0² + 2x2²); mine identical. Agrees.
- p2-px: 3(1 − x)². Agrees.
- p2-cond: 2(1 − x − y)/(1 − x)². Agrees.
- p2-indep: not independent. Agrees.
- p3-pr: 4πρ r² exp(−4πρr³/3). Agrees.
- p3-peak: page 3.41 ly; mine (2πρ)^(−1/3) = 3.4139 ly. Agrees.
- p3-rel: page √(GM/a)/(2a) · pr; mine (1/2)√(GM/a³) · pr. Agrees.
- p3-small: small a (choice 0). Agrees.
- p3-pa: page 2πρ (GM)^(3/2) a^(−5/2) exp(−(4πρ/3)(GM/a)^(3/2)). Agrees.
- p3-large: large a (choice 0). Agrees.
- 3(d) (no box): the mass of the neighbour. Agrees.
- p4-3d: (2/√π) √E (kT)^(−3/2) e^(−E/kT). Agrees.
- p4-gauss: not Gaussian. Agrees.
- p4-2d: e^(−E/kT)/kT. Agrees.
- p4-gauss2: not Gaussian (exponential). Agrees.
- p5-pv: page 2η²/(√(2π) σ³) e^(−η²/2σ²) = mine √(2/π) η²/σ³ e^(−η²/2σ²). Agrees.
- p5-vpeak: √2 σ. Agrees.
- p5-speak: A/(5σ²). Agrees.
- p6-pr: r/(R√(R² − r²)). Agrees.
- p6-rim: page 0.436; mine √0.19 = 0.4359. Agrees.

No disagreement between my answers, the page's answers and MIT's printed results.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | All six choice boxes: `p1-indep`, `p2-indep`, `p3-small`, `p3-large`, `p4-gauss`, `p4-gauss2` | (MIT has no choice boxes) | Every one has `answer={0}`, and in most of them the right choice is also the longest, most qualified one. The `<Answer>` component does not shuffle choices (no shuffle in `components/exercise/*` or `lib/answers.ts`), so "always pick the first" scores 6 of 6. | Put the correct choice at different positions and update `answer`, e.g. `p1-indep` answer 1, `p2-indep` answer 2, `p3-small` answer 1, `p3-large` answer 2, `p4-gauss` answer 1, `p4-gauss2` answer 2 (reorder the strings to match). |
| 2 | info | Problem 3(c), statement | The sheet's (c) says "In astrophysics, this is known as the Holtsmark Distribution." | The statement leaves the sentence out; it appears in the solution's check, with the page's remark that the name usually belongs to the full-sum distribution. | Fine as it is. Optional: keep MIT's sentence (in our words) in the statement and leave only the remark in the solution. |
| 3 | info | Problem 6, step "The density on the sphere" | MIT p. 10 writes p(θ, φ) = (4π)⁻¹ | Page reads this as a density per unit solid angle and writes the probability of a patch as (1/4π) sin θ dθ dφ | Correct and fair to MIT; no change needed. |
| 4 | info | Problem 3(a), graph caption | (no such graph) | Dashed curve: "the factor 4πρr² alone, the density of all stars at that distance" | 4πρr² is the mean number of stars per unit of r, not a probability density (it cannot be normalized). Optional: "the mean number of stars per unit of distance at r". |

MIT slips the page claims, all checked on the rendered PDFs:
- Sheet p. 4: "probability density p_x(ζ)" printed for p_s(ζ). Confirmed.
- Solutions pp. 6, 7, 8: E = ½(v_x² + …) without m, while the limits are √(2E/m). Confirmed on all three pages.
- Solutions p. 7: the last integral of P(E) has lost its factor v ((1/σ²)∫ e^(−v²/2σ²) dv). Confirmed; the printed result is right (MIT also prints "kt" for kT there, harmless and not mentioned by the page).
- Solutions p. 8: the integrand v e^(−v²/2σ²) has a factor v too many. Confirmed.
- Solutions p. 10: the second cap runs "sin⁻¹(r⊥/R) ≥ θ ≥ π" in the text and from sin⁻¹(r⊥/R) to π in the integral. Confirmed; with that limit the bracket is 2 (calcs `p6-printed-limit`).
- Solutions p. 5, 3(d): "from part (b)" where the double stars come up in part (c). Confirmed.

## Arithmetic and answer checks
- Every formula and number recomputed by hand and in Python (see Blind solve). All agree.
- Points: p1 6 + 7 + 7 = 20; p2 5 + 5 = 10; p3 8 + 6 + 8 + 3 = 25; p4 8 + 7 = 15; p5 15; p6 15; total 100. MIT gives no points; the page says so.
- Steps checked line by line: 1(a) normalization via ⟨(x1 − x2)²⟩ = x0²; 1(b) the three Gaussian integrals; 1(c) normalization and the mean (only the even term −2x2x1² survives, giving −2x2·½x0²√π x0); 2(a) the triangle-area check; 2(b) triangle area 1; 3(a) derivative 2r − 4πρr⁴, so r³ = 1/(2πρ), and 2πρ = 0.02513; 3(b) d/da √(GM/a) = −(1/2a)√(GM/a); 3(c) 2πρ/(GM)·(GM/a)^(5/2) = 2πρ(GM)^(3/2)a^(−5/2), cumulative exp(−(4πρ/3)(GM/a)^(3/2)); 4(a) the integrand at the limit and d/dE √(2E/m) = 1/√(2mE), ⟨E⟩ = 3/2 kT, peak at kT/2; 4(b) (1/σ²)·√(2E/m)·1/√(2mE) = 1/(mσ²); 4(c) 1/√(πkTE) e^(−E/kT) normalized, mean kT/2; 5 derivative of the lower limit −2A/η³, normalization ∫η² e^(−η²/2σ²) dη = ½σ²√(2πσ²), the two peaks √2σ and A/(5σ²); 6 the two caps, the Archimedes cross-check, rim 0.436 against 0.19 for a filled disk (ratio 2.29, so "more than twice" is right).
- Every solution ends with a check (units, normalization, a limit or a second route); 3(d) has a self-marking step.
- Graph ranges checked against the curves' maxima: 3(a) peak 1.895 < 2.3; 3(c) peak 0.256 < 0.3; 5 p_v peak 0.587 < 0.65 and p_s peak 1.83 < 2; 2(b) largest start 2/(1 − 0.75) = 8 < 8.5. The half-height curves of 1(a) satisfy w² = ln(2u²) + 1 − u² with u = (x1 − x2)/√2, w = (x1 + x2)/√2 in units of x0; the four parametric branches map to the right signs of u and w, and the s-range ends 0.48163 and 1.63656 are the roots of ln(2s²) + 1 − s² = 0.
- `<Answer>` boxes: every `expr`/`value` equals the solution's result; the `vars` ranges keep every formula finite and physical (p6: r ≤ 0.9 < 1 ≤ R; p1-mean x2 ≥ 0.3, so the mistakes "0" and the sign flip differ from the answer). Number tolerances of 1% accept 3 significant figures and reject the likely wrong values ((3/(4πρ))^(1/3) = 3.91 ly for p3-peak; 0.19 for p6-rim).
- Mistake hints, each checked against its formula: all true. p1-marg mistake 2 integrates to 3/2 (calcs `p1-marginal-mistake`); p3-rel mistake 3 is |da/dr| = 2a/r; p4-3d mistake 1 is the speed density with v² = 2E/m; p5-pv mistake 1 is p_s(A/η²) = η⁵/(√(2π)Aσ³) e^(−η²/2σ²); p5-pv mistake 2 integrates to 1/2; p5-speak mistakes A/(2σ²) and A/σ² are the falls at the speeds √2σ and σ; p6-pr mistake 1 is the uniform-θ density 2/(π√(R² − r²)). Borderline wording only: p1-marg mistake 1, e^(−x²/x0²)/(√π x0), is what one gets by replacing (x1 − x2)² by its average x0²; the hint "treats the factor as if it did not contain x₁" describes that fairly. No change needed.
- No hint gives a final result away: 1(a) hint 3 names the line of the maxima but not c; 5 hint 2 gives the integral's limits, not its derivative.
- Calcs file: every answer box has an entry with `answer:`, checked by an independent numerical route (numerical integral or derivative), plus normalizations, peaks, the printed-limit slip, and the read-off peak of MIT's graph as `kind: fact`. I did not run `npm run calc:test`; I recomputed the values independently instead.

## Coverage and order
- All six MIT problems in MIT's order, with MIT's parts in MIT's order: 1(a)(b)(c), 2(a)(b), 3(a)(b)(c)(d), 4(a)(b), 5, 6. Left out only the due date, the APOD photographs and the ion-current graph of Problem 5, all said in the introduction.
- Additions, all marked as ours in the introduction and at the box: c in 1(a), the mean in 1(c), independence in 2(b), the peak distance in 3(a), the two peaks in 5, the rim fraction in 6. MIT's not-required 4(c) is a remark in the 4(b) solution, as the introduction says.
- `covers: [2, 3]`, `lecture: 3`: matches the topics (joint densities, Lecture 2; functions of a random variable, Lecture 3). Problem 3(a) also uses the Poisson density of Lecture 1, which is a prerequisite and named in the introduction; fine.
- Citations: every `at=` checked against the printed page numbers. Sheet: Problem 1 p. 1, Problems 2 and 3 p. 2, Problem 4 p. 3, Problem 5 p. 4, Problem 6 p. 5. Solutions: 1(a)(b) p. 1, p(x2) and 1(c) p. 2, Problem 2 p. 3, 3(a) p. 4, 3(b)(c)(d) p. 5, 4(a) p. 6, 4(b) p. 7, 4(c) p. 8, Problem 5 p. 9, Problem 6 p. 10, inserts p. 11. All correct.
- Fidelity: the same physics in the page's own wording; MIT's two hints (waiting time, spherical coordinates) are given in our words and labelled "MIT's hint". The Fermi–Dirac and Bose–Einstein remark of MIT p. 2 is rewritten and attributed. No long verbatim passages; "they avoid each other" is a short phrase.
- Claims about lessons, checked in the worktree: `one-random-variable` (exponential waiting-time density), `two-random-variables` (Bayes' theorem), `functions-of-a-random-variable` (the three steps; the thermal-light intensity density that diverges as 1/√I), `identical-particles` exists. All links use `/courses/8-044/…`.

## Licensing
- No MIT figure reproduced: the sketches are graphs computed from formulas; MIT's Problem 6 section view and the Mathematica plot are not redrawn; the APOD photographs and the measured ion-current graph are left out (only its peak near 0.1 mm is quoted, as a fact). No rights-reserved or "courtesy" notices in either PDF.
- Chandrasekhar 1943 (APS, cite only): cited by DOI in `references` and in the text, for the name "Holtsmark distribution" only; I did not fetch the article. The remark is worth keeping and correct: MIT's sheet gives the name to the nearest-neighbour result, while the Holtsmark distribution is the density of the full vector sum; the nearest-neighbour density has the same leading a^(−5/2) tail (both are set by the probability of one star within √(GM/a)), so "its approximation for strong pulls" is right. The `location: "Chapter IV"` I could not verify without opening the article (from memory Chapter IV of that review deals with stellar dynamics and the Holtsmark distribution; uncertain).
- No OpenStax, LibreTexts or other forbidden sources.

## Notes
- No em dashes; no `## Summary` with answers.
- Symbols: 51 page-scoped meanings for this page in `data/symbols.json` (σ, ρ, θ, φ, ψ, a, r, A with unit m³/s², p_x as MIT's misprint, and so on); each read and found to match its use. `npm run content:check` was not run by the reviewer.
- The pdftotext output of MIT p. 2 reads "p(x1, x2) = p(x1)p(x2)" where the rendered PDF has ≠, and the prefactors of p(x2) and p(x1 given x2) there are 1/√(πx0²) (radical over x0² as well, checked at 300 dpi), so not a slip; the page states both correctly and claims no slip there.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1 (every choice box had its right answer first): fixed. The right choice now stands second or third: `p1-indep` 1, `p2-indep` 2, `p3-small` 1, `p3-large` 2, `p4-gauss` 1, `p4-gauss2` 2 (0-based), with `answer` changed to match. No hint or solution refers to a choice by its position.
- Info, 3(a) caption: the dashed curve 4πρr² is now "the mean number of stars per unit of distance at r".
- Info, Holtsmark remark and Problem 6 reading: kept as they are.

Status set to reviewed.
