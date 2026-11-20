---
page: content/year-1/18.01/numerical-integration.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-24-numerical-integration/ (read: local copy lec.html, title "Lecture 24: Numerical Integration"; transcript link jBkXbAgMj6s.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec24/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 24: Numerical Integration"; OCW cover + printed pp. 1-5 = PDF pp. 2-6)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/jBkXbAgMj6s.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec24")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec23/ (read: Lecture 23 notes, notes.txt/notes.pdf; dartboard on printed pp. 4-6 = PDF pp. 5-7; Lecture 23 transcript tp.txt grepped for the cauldron/candy bar example)
  - content/year-1/18.01/_course.json (read: Lecture 25 = Exam 3 Review, Lecture 27 = Trig Integrals) and content/year-4/8.286/_course.json (Lecture 20 = Supernovae Ia and Vacuum Energy Density)
  - content/year-4/8.286/supernova-evidence.mdx, luminosity-and-redshift.mdx, age-with-vacuum-energy.mdx (grepped for the numerical distance and age integrals)
  - calcs/18.01/numerical-integration.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k numerical-integration`: 12 passed)
  - data/symbols.json (read: all 32 meanings scoped to `numerical-integration`, plus the shared entries Ω, Ω_m, Ω_Λ, H₀, Δ, π, ∞)
  - `npm run content:check`: the only message for this page is the missing review file
verdict: needs-changes
---

# Review: The dartboard, and numerical integration

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-5, Lecture 23 notes pages are its printed footers. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Plot caption (trapezoids for 1/(1 + x²), n = 2) | Not in MIT (MIT gives only the values 0.775 and π/4, notes p. 5). Recomputed: f''(x) = (6x² − 2)/(1 + x²)³ is negative for x < 1/√3 ≈ 0.577 and positive after. On [0, 0.5] the curve is concave and lies above its chord (trapezoid 0.4500 vs true arctan 0.5 = 0.4636, under by 0.0136). On [0.5, 1] the chord lies **above** the curve everywhere (e.g. x = 0.75: chord 0.65, curve 0.64; trapezoid 0.3250 vs true 0.3218, over by 0.0033). | "The trapezoids lie below the curve, which bends upward away from the chords here, so the rule gives 0.775". Both halves of the sentence are wrong: the second trapezoid lies above the curve, and where the curve is above its chord it bends **downward** (concave), not upward. | Replace with something like: "On the left half the curve bulges above its chord, on the right half it dips slightly below; the shortfall on the left is larger, so the rule gives 0.775, a little under the true π/4 ≈ 0.785." Recheck with `npm run test:labels` if the caption length matters. |
| 2 | warning | data/symbols.json, entry `y-i` (form `y_i`) | - | Entry-level `spoken` is "y initial" (it was made for "initial height" meanings on 8.01 pages). On this page $y_i$ is the i-th sample, so read-aloud and the "In words" panel will say "y initial" in the trapezoid section and the Riemann/sampling paragraph. The same problem already affects `average-value-and-probability`. | Give the sample meaning its own entry or spoken form ("y sub i"), as `x-i` already does ("x sub i"); check how `lib/speech.ts` picks a per-page spoken name. |
| 3 | info | "Simpson's rule", "Most functions do not wiggle much on a small scale, so parabolas fit them extremely well (transcript, p. 11)" | Transcript p. 11: most functions "wiggle either one way or the other. They don't switch. They don't have inflection points", so the fit is lousy at large scale but "fantastic" at small scale. | "do not wiggle much on a small scale". | Closer: "On a small piece most functions bend only one way (no inflection point), so a parabola fits them extremely well." |
| 4 | info | Formula "Area under a parabola", `cite="reading2" at="p. 12"` | The base $2\Delta x$ is on transcript p. 11; the weighted average $(y_0 + 4y_1 + y_2)/6$ on p. 12. Also on notes p. 3. | p. 12. | Optional: `at="pp. 11–12"`. |
| 5 | info | Formula "The little brother's risk", `at="p. 8"` | The 1/6 (3 to 5 o'clock = 2/12) is set up on p. 7, the exponent arithmetic and 1/100 on p. 8. | p. 8. | Optional: `at="pp. 7–8"`. Values are right. |
| 6 | info | Dartboard, "The brother stands between 2a and 3a" | Transcript p. 7 says once "1/6 of the probability that we're between a and 3a" (a slip; the board, the computation on p. 8 and the Lecture 23 notes p. 4 use 2a to 3a). Transcript p. 5 also says "minus e^(r_2^2)" for $-e^{-r_2^2}$. | Uses 2a to 3a and the correct signs, without comment. | Fine under writing rule 4 (lecturer slips not repeated); a bracket is optional since the slip is spoken once and corrected by the computation. |
| 7 | info | Dartboard, V-2 sentence | Transcript p. 4: the V-2 remark answers a student's "why is e^(−r²) realistic" before the computation, together with the mode-versus-average point. | Placed after the 1% result ("The lecturer adds…"), cited p. 4. | Order differs slightly; citation is right. Fine as is. |
| 8 | info | Opening, "the boiling-cauldron example" | Transcript p. 1 calls it "this candy bar example" (the energy to heat the witches' cauldron, expressed in candy bars, Lectures 22-23). | "boiling-cauldron example". | Correct identification; optional "(the cauldron, measured in candy bars)" so a reader comparing with the transcript recognises it. |

No formula, definition or claim besides finding 1 was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt / notes.txt:
  - "Probability of a ring", reading2 pp. 5-6: antiderivative $-\pi e^{-r^2}$ and part $c\pi(e^{-r_1^2} - e^{-r_2^2})$ on p. 5; whole $c\pi$ (0 to ∞) and the ratio on p. 6. Correct.
  - "The little brother's risk", reading2 p. 8: $e^{-a^2} = \tfrac12$, $(\tfrac12)^4 - (\tfrac12)^9 \approx \tfrac1{16}$, $\tfrac16\cdot\tfrac1{16} \approx \tfrac1{100}$, all p. 8. Correct (see finding 5).
  - "Trapezoidal rule", reading1 p. 2: notes p. 2, "Total Trapezoidal Area = Δx(y₀/2 + y₁ + … + y_{n−1} + y_n/2)". Correct (also board, transcript pp. 10-11).
  - "Area under a parabola", reading2 p. 12: see finding 4.
  - "Simpson's rule (n even)", reading1 p. 4: notes p. 4. Correct.
- Prose citations: heat/energy/work correction with calories, kilowatt-hours, foot-pounds (p. 1); dartboard set-up and $c e^{-r^2}$ per area, part over whole (pp. 1-3), $c$ cancels (p. 3); shells $2\pi r$, $e^{-r^2}$, $dr$ (p. 2); idealised whole 0 to ∞ (p. 6); seven-year-old hits half the time, 3 to 5 o'clock, 2a to 3a (pp. 7-8); weight $2\pi c r e^{-r^2}$ zero at the centre (pp. 4, 8-9); Lecture 23 notes pp. 4-6 for the dartboard (checked: printed pp. 4-6); $\int_0^x\cos(t^2)dt$, $\int_0^3 e^{-x^2}dx$ (notes p. 1); "incredibly inefficient" (transcript p. 9); sampling set-up (pp. 9-10); trapezoids (pp. 10-11, notes p. 2); average of left and right sums, "not very efficient" (p. 11; notes p. 3, top); even n, parabolas (pp. 11-12; notes pp. 3-4); problem-set remark (pp. 11-12); f = 1 check (notes p. 4); 0.775, 0.78333, π/4, error ~ (Δx)⁴ (notes p. 5); "next time" (p. 12). All match.
- Dartboard: $\tfrac16(\tfrac1{16} - \tfrac1{512}) = 0.01009$; $\tfrac16\cdot\tfrac1{16} = 0.0104$. "About 1%" correct.
- Notes example: trapezoid $0.5(0.5 + 0.8 + 0.25) = 0.775$; Simpson $\tfrac{0.5}{3}(1 + 3.2 + 0.5) = 0.78333$; $\pi/4 = 0.78540$. Correct.
- Simpson weights for f = 1: $2 + 4\cdot\tfrac n2 + 2(\tfrac n2 - 1) = 3n$, so $\tfrac{\Delta x}{3}\cdot 3n = n\Delta x = b - a$. Correct.
- Plot curves: $1 - 0.4x$ and $0.8 - 0.6(x - 0.5)$ pass through (0, 1), (0.5, 0.8), (1, 0.5), the values of $1/(1 + x^2)$. Correct; piecewise straight lines as intended. Caption wrong in its explanation (finding 1).
- Worked example ($\int_0^1 e^{-x^2}dx$, n = 4): samples 1, 0.939413, 0.778801, 0.569783, 0.367879; trapezoid 0.742984 (error 0.00384); Simpson 0.746855 (error 0.0000312); exact 0.746824. All match. Ratio of errors 123, so "a hundred times better" is a fair round figure. Example is original (MIT's e^{-x²} appears only as the unevaluated $\int_0^3$ on notes p. 1).
- Quiz 1: index 1, $1 - e^{-a^2}$. Correct; explanation right.
- Quiz 2: index 1. Correct.
- Quiz 3: index 2, 1 4 2 4 2 4 1. Correct (notes p. 4 shows the same pattern for n = 6).
- Quiz 4: index 2, $\tfrac{0.5}{3}(1 + \tfrac83 + \tfrac12) = 0.69444$; $\ln 2 = 0.69315$; distractor 0.7083 is the trapezoid value. Correct.
- Flashcards: all three correct.
- Cosmology callout: $\int_0^1 dz/\sqrt{0.3(1+z)^3 + 0.7} = 0.771427$ (fine-grid Simpson), Simpson n = 2 gives 0.770767; with $c/H_0 = 4282.7$ Mpc: 3301 Mpc vs exact 3304 Mpc, difference −0.086%. "About 3300 Mpc … within 0.1%" correct.
- Calcs file: 12 entries, all pass. Not covered (minor): the worked example's "off by about 0.0038" and "0.00003", and the per-interval trapezoid errors behind the caption.
- No em dashes on the page.

## Coverage and order
- Transcript order: correction on heat/energy/work (p. 1); dartboard set-up, part over whole, volume of revolution by shells (pp. 1-4); V-2 remark and mode vs average (p. 4); little brother position (p. 5); antiderivative and part (p. 5); whole 0 to ∞, probability formula (p. 6); Ralph hits half the time, 3 to 5 o'clock, 2a to 3a (p. 7); 1% (p. 8); weight $w(r) = 2\pi c r e^{-r^2}$ (pp. 8-9); numerical integration: Riemann (pp. 9-10), trapezoidal (pp. 10-11), Simpson (pp. 11-12).
- The page follows this order; only the V-2 remark is moved after the result (finding 7).
- Notes coverage: Riemann, trapezoid, Simpson, f = 1 check, Example 1 with the error remark. All present.
- Omitted, all minor: the student questions on why a volume and not an area (pp. 3-4), the "first and third favourite numbers" aside (p. 6), the lecturer's correction of the 6's on the board (p. 12), the anecdote's name (Ralph).
- Added by the page: the plot, the e^{-x²} worked example, quiz 4, the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Lecture 24 notes, transcript, lecture/notes pages, or the Lecture 23 notes and transcript (grep of all local copies). The page reuses no figure; the plot is generated from formulas.
- Text is rewritten. The only quoted phrase is "incredibly inefficient" (four words, in quotation marks). Standard terms ("part over the whole", "weighted average", "trapezoidal rule") are fine.
- The worked example is original. The notes' Example 1 ($\int_0^1 dx/(1+x^2)$) is reported as the notes' result and credited, not presented as the page's own example.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 18.01 Lecture 27 "Trig Integrals" matches `_course.json`; Lectures 25-26 are the exam review and exam, so 27 is the next content lecture. "Why" is fair.
- leadsTo 8.286 Lecture 20: supernova-evidence.mdx (lecture 20) does integrate the vacuum-energy distance numerically, so the link is correct. The distance integral itself is introduced on luminosity-and-redshift.mdx and the numerically integrated age on age-with-vacuum-energy.mdx, both Lecture 19; optionally add an 8.286 Lecture 19 entry, since the callout names both distances and the age.
- Callout physics: $D_C = \frac{c}{H_0}\int_0^z dz'/\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}$ is right for a flat universe with radiation neglected; it has no elementary closed form. "For the age of the universe": in flat matter plus vacuum the age does have a closed form (age-with-vacuum-energy.mdx says so), but with radiation or curvature it is computed numerically; the general statement is fair.
- Symbols (32 meanings scoped to this page): all fit apart from finding 2. Minor wording: `d` "As in dx, dr and dz′: the variable of integration" (d marks the variable rather than being it, as noted on the Lecture 23 review); `c` combines the dartboard constant and the speed of light, correctly. Shared entries Ω_m, Ω_Λ (spoken "capital omega vac"), H₀, Δ, π, ∞ apply as written.

## Resolution (2026-11-16, by the page author)

- **Error 1:** the plot caption now says the curve bulges above its chord on the left half and dips slightly below it on the right, with the larger left shortfall making 0.775 an underestimate.
- **Warning 2:** not fixed on this page. The shared `y-i` entry's spoken name "y initial" is right for the 8.01 pages that use it, and a spoken name belongs to the entry, not the meaning; changing it would need a site-wide decision (noted for the owner in the run log).
- Info: the "wiggle" sentence now says a small piece has no inflection point; the parabola-area and brother formulas cite pp. 11–12 and pp. 7–8. The other info items are left as they are.
