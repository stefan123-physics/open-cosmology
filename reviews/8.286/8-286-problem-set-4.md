---
page: content/year-4/8.286/8-286-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps4/ (read, pdftotext of the PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec09/ (read, local copy of the slides PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec10/ (read, local copy of the slides PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (Lecture 8 transcript, freshly downloaded, read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/267c7e3266416a08c2d8445fb5817888_U9n-Y_ZC-2M.pdf (Lecture 9 transcript, freshly downloaded, read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a8d35e02dbabc99e6a5fb7af82012b61_m00PjHTq6jU.pdf (Lecture 7 transcript, freshly downloaded, read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (Lecture 5 transcript, freshly downloaded, read)
verdict: pass-with-notes
---

# Review: Problem Set 4: closed and open universes

## Blind solve

I solved everything from the stripped statements and MIT's text before I opened the full page or the calcs file.

### My answers
- p1-a: H = c sin θ / (α (1 − cos θ)²)
- p1-b: ρ = 3c² / (4π G α² (1 − cos θ)³)
- p1-c: Ω = 2(1 − cos θ)/sin²θ = 2/(1 + cos θ)
- p1-d: ℓ = a ∫ c dt/a = (a/√k) θ = αθ(1 − cos θ)
- p2-a: H = c sinh θ / (α (cosh θ − 1)²)
- p2-b: ρ = 3c² / (4π G α² (cosh θ − 1)³)
- p2-c: Ω = 2/(1 + cosh θ)
- p2-d: ℓ = αθ(cosh θ − 1)
- p2-e: θ ≈ (6ct/α)^{1/3}, a ≈ √κ (α/2)(6ct/α)^{2/3} = √κ (9αc²t²/2)^{1/3}; t* ~ α/c
- p2-f: 1 − Ω = tanh²(θ/2) ≈ θ²/4 = (9c²t²/(16α²))^{1/3}
- p3-a: t_crunch − t0 = −Ω0/(2H0(Ω0 − 1)^{3/2}) [arccos((2 − Ω0)/Ω0) − 2√(Ω0 − 1)/Ω0]
- p3-b: z_min = −1/Ω0 (light sent at maximum expansion, θ = π)
- p3-c: lookback = −Ω0/(2H0(Ω0 − 1)^{3/2}) [π − arccos((2 − Ω0)/Ω0) + 2√(Ω0 − 1)/Ω0]
- p4: x = 2√(1−Ω)/Ω; x − asinh x ≈ x³/6, so |H|t ≈ 2/(3Ω²) → 2/3
- p5: f = g(|XA|) = h(|XB|). The sphere of radius r about A reaches every distance s from B in [|r − d|, r + d] (d = |AB|), so g is constant on [r, r + 2d] for every r ≥ 0. Chaining these steps makes g constant.

### Comparison (one line per answer id)
- p1-a: agrees (`c*sin(theta)/(alpha*(1 - cos(theta))^2)`).
- p1-b: agrees.
- p1-c: agrees (`2/(1 + cos(theta))`).
- p1-d (show): agrees. The proof is complete and ends with the small-θ check ℓ ≈ 3ct.
- p2-a: agrees.
- p2-b: agrees.
- p2-c: agrees.
- p2-d: agrees.
- p2-e: agrees (`sqrt(kappa)*(alpha/2)*(6*c*t/alpha)^(2/3)`). I checked numerically that it equals √κ(9αc²t²/2)^{1/3}, and against the exact a(t) from a numerical solve for θ: 0.2387 against an exact 0.2439 at ct/α ≈ 0.05, the expected leading-order agreement.
- p2-e-tstar: agrees (α/c). See warning 2 on how the choice is built.
- p2-f: agrees. (1/4)·6^{2/3} = (9/16)^{1/3} (difference below 1e-15).
- p3-a: agrees, including the use of |H0| = −H0. I checked numerically against (α/c)(2π − θ0 + sin θ0) for Ω0 = 1.3, 2, 3.5 and H0 = −0.7, −1.6, with θ0 = 2π − arccos((2 − Ω0)/Ω0) and α taken from the exact H(θ). All six cases agree to 1e-15.
- p3-b: agrees (−1/Ω0). It matches (1 − cos θ0)/2 − 1 in all six cases.
- p3-c: agrees. The page writes arccos((Ω0 − 2)/Ω0), which equals my π − arccos((2 − Ω0)/Ω0). It matches (α/c)(θ0 − sin θ0 − π) in all six cases.
- p4 (show): agrees, and the page goes further by bounding the x⁵ term.
- p5 (show): agrees. It is the same chaining argument with steps of 2d.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(a), `<Answer id="p1-a">`, `vars` theta: [0.3, 6] | (answer-box design) | The listed mistake `c*abs(sin(theta))/...` equals the answer for every θ < π. `checkFormula` tests the correct formula first, at 5 uniform random points (`Math.random`, n = 5, lib/answers.ts l. 210–217). The chance that all 5 fall below π is ((π − 0.3)/5.7)⁵ = 3.1 %, so about 1 reader in 32 who types the abs form is told it is correct. Any formula that is wrong only for θ > π gets the same chance. | Move the lower end of the θ range up so that most points are in the contracting phase: `theta: [2, 6]` gives ((π − 2)/4)⁵ = 0.19 %, and `[2.5, 6]` gives 0.02 %. Better and general: in `checkFormula`, when the typed formula agrees with the answer **and** with a listed mistake on the sampled points, draw more points before giving a verdict (a code change, outside this page). |
| 2 | warning | Problem 2(e), `<Answer id="p2-e-tstar">` choices | "Estimate the value of t*" | Choices "c/α", "α/c, give or take a factor of a few", "√κ · α/c" and "α · c". Only the marked one has the units of a time (√κ·α/c depends on the size of a notch, which the page itself rules out). The box can be answered from units alone, without the physics of where the series breaks down. | Make all choices times that differ in the physics. For example: "α/(100 c): the series fails already at θ ≈ 0.1", "α/c, give or take a factor of a few", "100 α/c", "no limit: the power law holds at all times". |
| 3 | warning | Problem 5 statement ("the claim is true only for Euclidean space") and solution check ("The claim also fails on curved surfaces … On a globe, a pattern of bands along the lines of latitude is isotropic about both poles") | "The statement is simply not true if one allows non-Euclidean spaces." | The page says "true only for Euclidean space" and "fails on curved surfaces". That is stronger than MIT's wording and not right in general. The same chaining argument works in the hyperbolic plane, and on a sphere for two points that are not antipodal. The globe example works only because the two poles are antipodal. | Statement: "the claim can fail in a non-Euclidean space, which Weinberg rules out without saying so". Check: "The claim can fail on a curved surface, as MIT warns. On a globe, with A and B at the two poles, bands along the lines of latitude are isotropic about both, yet not homogeneous." |
| 4 | info | Problem 3(a), `<Answer id="p3-a">`, `vars` Omega0: [1.2, 4] | | The listed asin mistake equals the answer for Ω0 < 2, and the chance that all 5 points fall below 2 is (0.8/2.8)⁵ = 0.19 %. Small, but the same mechanism as #1. The statement deliberately asks for one formula valid on both sides of Ω0 = 2. | `Omega0: [1.2, 6]` lowers it to 0.013 %, or use the checker fix of #1. |
| 5 | info | Problem 3 points 9/8/8 | 25 points for the whole problem, with no split | 9/8/8, disclosed in "How to answer" ("the split of Problem 3 into three parts is ours") | None. The heaviest part, (a), gets the extra point, which is reasonable. |
| 6 | info | Problem 4 bracket note | "The proof of continuity as Ω → 0 from above …" | "(MIT's text speaks here of Ω going to 0 from above, which is a slip for Ω going to 1.)" | None. The slip is real (MIT p. 3) and is noted as Writing rule 4 asks. |
| 7 | info | Problem 2 intro | "originated on Quiz 2 of 1992 … where it counted 30 points" | "first set on a quiz in 1992" | None (the 30 points are left out, which is fine). |
| 8 | info | Problem 1(a)–(c), Problem 2(a)–(c) | "as a function of α and θ" | "in terms of α, θ and c" (and "in terms of θ" for Ω) | None. This is more precise than MIT, because c appears and α cancels in Ω. |

## Arithmetic and answer checks
- Every formula answer agrees with my blind solution (see above). `npm run calc:test` in the worktree: 13306 passed. `npm run content:check`: 0 errors; the only warning for this page is "no review file yet".
- Every numerical check on the page was recomputed:
  - Problem 3: 0.571/|H0|, 2.571/|H0| and their sum 3.142/|H0| = πα/c at Ω0 = 2 (α = c/|H0|), all correct. z_min = −0.5 at Ω0 = 2 and the "half its largest size" claim are correct. The limit 2/(3|H0|) as Ω0 → 1 is correct (0.666653 at Ω0 = 1.0001).
  - Problem 4: |H|t = 0.668006 at Ω = 0.99 (page 0.6680), 0.680605 at Ω = 0.9 (page 0.6806). The expansion 2/3 + (2/15)(1 − Ω) is correct to first order (4/3 from 2/(3Ω²) minus 6/5 from the x⁵ term). 1²/3! = 1/6 and 3²/5! = 3/40 are correct.
  - Problem 2(e): the term ratios θ²/20 for sinh θ − θ and θ²/12 for cosh θ − 1 are correct.
  - The limit checks of 1(a), 1(b), 1(d) and 2(a) are correct: H ≈ 4c/(αθ³) = 2/(3t), ρ ≈ 6c²/(πGα²θ⁶) = 1/(6πGt²) = 3H²/(8πG), ℓ ≈ αθ³/2 = 3ct. So is 1 − Ω ≈ a/(2√κα) in 2(f).
- Each listed mistake was checked against the hint it carries:
  - p1-a: dã/dt = c sin θ/(1 − cos θ) and (dã/dθ)/ã are correct. The abs hint is correct (but see #1).
  - p1-b: the formula labelled critical density is 3H²/(8πG) for the H of (a). The 8π, square and α³ variants carry the right hints.
  - p2-b: the "wrong sign of the curvature term" mistake really is (3/8πG)(H² + c²/ã²) = 3c² cosh θ/(4πGα²(cosh θ − 1)³), because sinh² + (cosh − 1)² = 2cosh(cosh − 1). The hint is correct.
  - p2-d: α(sinh θ − θ) = ct, correct.
  - p3-a: the asin form is right only for Ω0 < 2, which is the last quarter of the cycle (cos θ0 > 0, θ0 ∈ (3π/2, 2π)); correct. The 2π − … + … form is t0; correct.
  - p3-b: 1/(Ω0 − 1) is what you get from the inverted ratio a(te)/a(t0) = Ω0/(Ω0 − 1) minus 1; the hint is correct.
  - p3-c: φ + sin φ is the wrong angle; the hint is correct.
- All `vars` ranges keep the answers finite and physical: H0 < 0 and Ω0 > 1 in Problem 3; small ct/α in 2(e) and 2(f); θ ∈ [0.3, 2.8] in 1(c), away from θ = π. With the 1e-6 relative tolerance every listed mistake is rejected, apart from the sampling issues of #1 and #4.
- Hints: none gives a final result away. Problem 3(b) hint 2 ("light that left when the universe was at its largest") and 3(c) hint 2 ("lookback and time left add up to πα/c") give the key idea, but they come second and still leave the algebra in H0 and Ω0 to the reader. That is acceptable.
- Every solution ends with a check (units, a limit or a number).

## Coverage and order
- All five MIT problems, in MIT's order. The parts of Problems 1 and 2 are in MIT's order with MIT's points (6/6/6/7 and 5/5/5/6/7/7). Problem 3 is MIT's single question, split into its three questions in MIT's order. Problem 4 has 15 points. Problem 5 is optional and not scored, which matches MIT's extra credit. The total of 100 is correct.
- `covers: [8, 9, 10]` is right. Problem 1(d) uses the horizon distance (Lecture 8). Problems 1 and 3 use the closed universe (Lecture 9 and the Lecture 10 slides 2–3). Problems 2 and 4 use the open universe and the age formula (Lecture 10 slides 5–6). It overlaps with Set 5 (10–12) on Lecture 10, which is fine because the open universe is only in Lecture 10. Side effect (info): `non-euclidean-geometry` (lecture 10) will show a "Practise" link to this set too, although the set has no non-Euclidean content (Problem 5 is Euclidean). Accept it, or leave it as is if the overlap with Set 5 is wanted.
- Information added that is not in MIT's text: "θ runs from 0 to 2π" and "κ = −k positive". Both are correct.
- `prerequisites` has no `cosmological-redshift`, although Problem 3(b) uses that lesson (reading6). Info: consider adding it.

## Citations
- `cite="mit"` page numbers checked against MIT's printed pages: Problem 1 and 1(d) on p. 1; Problem 2 and the identities on p. 2; t_crunch and the arcsinh series on p. 3. All correct.
- reading1 (Lecture 9 slides), slide 2: the Friedmann equation, ρa³ = const, ã = a/√k and α = 4πGρã³/(3c²). Correct.
- reading2 (Lecture 10 slides): slide 3 has α = cΩ/(2|H|(Ω − 1)^{3/2}), and slide 6 has the three-line age formula. Correct. The label "(summary of Lecture 9)" for slide 3 is fair: slide 3 continues the recap of Lecture 9 under the heading "Age of a closed universe".
- reading5 (Lecture 7 transcript): p. 20 has ρc = 3H²/(8πG), and p. 23 defines Ω as ρ/ρc. Both correct (printed footers checked).
- reading3 (Lecture 8 transcript), p. 18: ℓ_p,horizon defined as a(t0) times the integral. Correct.
- reading4 (Lecture 9 transcript), p. 19: "Omega is equal to 2 over 1 plus cosine theta". Correct.
- reading6 (Lecture 5 transcript), p. 6: 1 + z as the ratio of scale factors. Correct.
- All four transcript PDFs were downloaded fresh from the URLs in the page. Their MD5 sums equal the writer's copies.

## Licensing
- The MIT problem set has no "All rights reserved" or "Courtesy of" notice. The "Slides courtesy of Mustafa Amin" notice on Lecture 10 slides 10–12 (non-Euclidean geometry) concerns slides the page does not use.
- The text is reworded throughout. The few close phrases ("isotropic about two distinct points", "two circles need not intersect") are standard wording.
- There is no figure, and no OpenStax or LibreTexts material. Ryden and Weinberg are named only as MIT names them.

## Notes
- The page contains no em dashes and no `## Summary` that gives away answers.
- Symbols: content:check reports no symbol errors for this page.
- Problem 3's choice of arccos, so that one formula holds for Ω0 on both sides of 2, is correct and well explained (hint 3 and the closing remark of the solution). Sampling H0 negative in p3-a and p3-c makes the abs-versus-sign mistake detectable, as intended.
- The Problem 5 proof is correct and complete in 2 and 3 dimensions. The r = 0 edge case and the third inequality (r + r' ≥ 0) are handled. The counterexample on a line (period 2d, mirror-symmetric about A, hence also about B) is correct. The only issue is the wording about curved spaces (#3).

COUNTS: errors=0 warnings=3 info=5

## Resolution (2026-11-21, by the page author)

- Warning 1: the θ range of p1-a and p1-b is now [2, 6], so the |sin θ| mistake differs from the answer at most sample points (chance of a false accept about 0.2 %).
- Warning 2: the four choices of p2-e-tstar are now all times: α/(100c), α/c give or take a factor of a few, 100α/c, and "no limit".
- Warning 3: Problem 5 now says the claim "can fail in a non-Euclidean space, which Weinberg rules out without saying so", and the globe example puts A and B at the two poles.
- Info 4: the Ω₀ range of the Problem 3 boxes is now [1.2, 6].
- Extra: `cosmological-redshift` added to `prerequisites`.
- Status set to `reviewed`.
