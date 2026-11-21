---
page: content/year-4/8.286/8-286-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps3/ (read, pdftotext of the PDF supplied in the brief)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec06/ (read, downloaded afresh by the reviewer)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec07/ (read, downloaded afresh)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec08/ (read, downloaded afresh)
verdict: pass-with-notes
---

# Review: Problem Set 3: a cylindrical universe and the energy behind the Friedmann equation

## Blind solve

### My answers (written before opening the full page)
- 1(a) Gauss on a cylinder of radius r, length L: g 2πrL = -4πG μL, so g = -2Gμ/r, **A = 2G**.
- 1(b) μ inside the particle = π r_i² ρ_i (conserved): **r̈ = -2πG ρ_i r_i² / r**.
- 1(c) ü = -2πGρ_i/u, with u(t_i)=1, u̇(t_i)=H_i: equation and initial data free of r_i, so u is independent of r_i.
- 1(d) **ρ = ρ_i/a²**; **ä = -2πG ρ a** (= -2πGρ_i/a).
- 1(e) **V(a) = 2πGρ_i ln a** (V(1)=0). V → ∞ as a → ∞, so ȧ² = 2(E - V) vanishes at a_max = exp(E/(2πGρ_i)): **always collapses**.
- 2(a) **H = 3/(4t)**.
- 2(b) ρ = 3H²/(8πG) = **27/(128πG t²)**.
- 3(a) v = r_i ȧ, r = a r_i: E_eff = m r_i²(½ȧ² - 4πGρ_i/(3a)) = m r_i² E.
- 3(b) K = ½ȧ² ∫0^{R_i} ρ_i 4π r'^4 dr' = ½ȧ² (3/5) M R_i²: **c_K = 3/5 = 0.6**.
- 3(c) U = -(3/5)GM²/R_max, R_max = aR_i: U = (3/5) M R_i² (-(4π/3)Gρ_i/a), c_U = 3/5 = c_K.
- 4(a) **ü = -(4π/3)Gρ_i/u² + γ r_i^{n-1} u^n**.
- 4(b) **n = 1**.
- 4(c) **u(r_i, t_i) = 1, u̇(r_i, t_i) = H_i**.
- 4(d) ä = -(4π/3)Gρ_i/a² + γa, so **E = ½ȧ² - (4π/3)Gρ_i/a - ½γa²**, V(a) = -(4π/3)Gρ_i/a - ½γa².

### Comparison with the page (one line per answer id)
- p1-a: page `2*G`; mine A = 2G. Agree.
- p1-b: page `-2*pi*G*rhoi*ri^2/r`; mine -2πGρ_i r_i²/r. Agree.
- p1-c (show that, no box): page ü = -2πGρ_i/u, u(t_i)=1, u̇(t_i)=H_i. Agree.
- p1-d-rho: page `rhoi/a^2`; mine ρ_i/a². Agree.
- p1-d-addot: page `-2*pi*G*rho*a`; mine -2πGρa. Agree.
- p1-e-v: page `2*pi*G*rhoi*log(a)`; mine 2πGρ_i ln a. Agree (the V(1) = 0 condition is stated in the page's question).
- p1-e-fate: page choice 0 "collapses in the end, whatever E"; mine always collapses. Agree.
- p2-a: page `3/(4*t)`; mine 3/(4t). Agree.
- p2-b: page `27/(128*pi*G*t^2)`; mine 27/(128πGt²) = 0.2109/(πGt²). Agree.
- p3-a (show that): page E_eff = m r_i² E. Agree.
- p3-b: page value 0.6; mine c_K = 3/5. Agree.
- p3-c (show that): page U = -(3/5)GM²/R, c_U = 3/5. Agree.
- p4-a: page `-4*pi*G*rhoi/(3*u^2) + gamma*ri^(n-1)*u^n`; mine identical. Agree.
- p4-b: page value 1; mine n = 1. Agree.
- p4-c: page choice 0 (u = 1, u̇ = H_i); mine same. Agree.
- p4-d: page `-4*pi*G*rhoi/(3*a) - gamma*a^2/2`; mine identical. Agree.

No disagreement between the blind solve and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro paragraph, "MIT publishes no solutions for its problem sets" | Problem 4 "READ THIS" (p. 5): the problem was Quiz 1 Problem 2 of 2011, its solution is posted at web.mit.edu/8.286/www/quiz11/ecqs1-1.pdf, and students are encouraged to read it | Says MIT publishes no solutions; the Problem 4 intro mentions only "a quiz of 2011" | Change to "MIT publishes no solutions on OCW for this set (for Problem 4 Guth pointed his students to the posted 2011 quiz solution on the course's own MIT site, which is not part of OCW), so the hints and solutions here are our own." Do not link or reuse that solution: it is not under OCW's licence. |
| 2 | warning | Problem 3 statement ("its unit is 1 divided by a time squared") vs Problem 3(a) check ("E in metres squared per notch squared per second squared") | MIT only says E "does not have the dimensions of energy" (p. 3); Lecture 8 slide 2–3: [a] = m/notch, "our construction used a(t_i) = 1 m/notch" | Two different units for E on the same page, without saying which convention each uses | Either drop the notch parenthesis in 3(a), or say in the statement: "with a(t_i) = 1 a pure number, as in this set, E is 1 divided by a time squared; in Guth's notch convention it is m²/(notch² s²)". (The same dimensionless convention is what makes the exponent in 1(e) and ln a meaningful, so the set as a whole uses dimensionless a.) |
| 3 | info | Problem 1(e) question | MIT asks only "What is V(a)?" | Adds "choose the constant so that V = 0 at a = 1" | Fine and clearly stated; needed for a unique answer box. No change. |
| 4 | info | Problem 4(d) question | MIT asks to show the integral exists; gives no form | Asks for V(a) "with no constant added" | Fine, stated in the question. No change. |
| 5 | info | Whole page | MIT sheet also gives quiz dates and the reading (Weinberg, *The First Three Minutes*, Ch. 3) | Omitted | Optional: mention the reading in the intro. |
| 6 | info | Problem 1(a) solution, Gauss's law cited `reading1` slide 1 | Lecture 6 slide 1 is "Review: ... Gauss's Law of Gravity" with ∮g·da = -4πGM_enclosed | Text says "The lesson on Newton's static universe gives the law" (a Lecture 5 lesson), citation to Lecture 6 slide 1 | Correct (that lesson cites the same slide). No change. |

## Arithmetic and answer checks
- Every number recomputed: 1(e) example: H_i² = 8πGρ_i gives E = 4πGρ_i, a_max = e² = 7.389 (page "7.39", "about 7.4"); the sphere's critical value is H² = (8π/3)Gρ, so 8πGρ_i is three times it (page correct). 2(b): ä/a = (3/4)(-1/4)/t² = -3/(16t²); the forbidden equation gives ρ = 9/(64πGt²), ratio (9/64)/(27/128) = 2/3 (page correct). 3(b): ∫0^R ½ȧ²r²·4πr²ρ_i dr = ½ȧ²(4π/5)ρ_i R⁵ = (3/5)MR²·½ȧ²; present-radius check a⁻³·a⁻²·a⁵ = 1 (correct). 3(c): ∫ (16π²/3)Gρ²r⁴ dr = (16π²/15)Gρ²R⁵ = (3/5)GM²/R; rewriting with R = aR_i, ρ = ρ_i/a³ gives c_U = 3/5 (correct).
- `npm run calc:test -- -k 8-286-problem-set-3`: 23 passed. `npx tsx scripts/check-content.ts`: 0 errors; the only warning for this page is the missing review file.
- Answer boxes: every `expr`/`value` equals the solution's result. `vars` ranges keep every formula finite and real (r, ri, a, u, t > 0; n in [0, 3] with ri > 0). `ln` and `log` are both the natural logarithm in `lib/answers.ts` (line 86), so the `ln(a)` mistake and the `log(a)` answer are comparable. p3-b tolerance 1% on 0.6 and p4-b absolute 0.01 on 1 both match the intro's "within 1%" and reject every plausible wrong number (0.5, 1, 2, 3/10).
- Mistake hints: each checked against its formula; all true. Examples: p1-a `2*pi*G` arises from taking the side area as 2rL (hint about the circumference is apt); p1-b `-2*G*rhoi*ri^2/r` is μ without π (hint says so); p2-b `9/(64*pi*G*t^2)` is the result of the ä equation (verified above); `9/(32*pi*G*t^2)` is 3/(8πG)·3/(4t²) (only t squared; hint "both the 3 and the 4 are squared" is right); p4-a `...+gamma*ri^n*u^n` is the term not divided by r_i (hint right); p4-d `-...-gamma*a^2` misses the ½ from d(a²)/dt = 2aȧ (hint right).
- Note on p4-a: the mistake `... + gamma*u^n` equals the answer when n = 1 or r_i = 1. With n sampled over [0, 3] and r_i over [0.5, 3] the checker separates them, so this is fine.
- Choice questions: p1-e-fate answer 0 and p4-c answer 0 are correct; distractors are all wrong.
- Every solution ends with a check (units, a limit such as γ = 0, a second derivation, or a number). Checked the writer's remarks asked for in the brief:
  - 1(e) check: units of the exponent (true in the set's dimensionless-a convention, see row 2), a_max = e² example, comparison with the sphere, and "the work needed to move away from an endless line of mass grows without limit" (true: the potential of a line mass is ∝ ln r). All correct.
  - 3(c) check: -(3/5)GM²/R is the standard uniform-ball energy (true). The argument that c_U must equal c_K is valid: if K + U and E are both conserved, K + U - c_K M R_i² E = (c_U - c_K)M R_i²(-(4π/3)Gρ_i/a) must be constant while a changes, so c_U = c_K. The edge-particle remark (E_eff is the true energy there, since the true potential at the surface is -GM/R) is correct.
  - 4(b) check: "the lesson on the expanding sphere makes the same remark ... cosmological constant": verified, expanding-sphere.mdx line 89 says exactly that. The physics (only n = 1 keeps a Hubble flow) is right.
  - 4(d) check: γ has unit 1/s² for n = 1 (true: acceleration / length); dE/dt = ȧ[ä + (4π/3)Gρ_i/a² - γa] = 0 (true); "upside-down bowl", expansion speeds up at large a (true: ä > 0 once γa³ > (4π/3)Gρ_i). Correct. Optional precision: "if it gets large enough" is right; a universe with E below the hill top can still recollapse first, which the wording already allows.
- No hint gives a result away. The closest are 1(e) hint 2 ("which function has derivative ȧ/a?", leaves the coefficient and sign to the reader) and 3(c) hint 2 (gives dU per shell but leaves the integral and the rewriting); acceptable.

## Coverage and order
- All four MIT problems, all parts, in MIT's order (1a–e, 2a–b, 3a–c, 4a–d). Points equal MIT's: 25 (5×5), 10 (5+5), 30 (10×3), 20 (4+4+4+8); total 85, matching "Total points for Problem Set 3: 85".
- Physics is MIT's in every part; the page's wording is its own.
- Citations of the model block checked on the slide PDFs: v_i = H_i r is Lecture 7 slide 1; the shell equation with M(r_i) = (4π/3)r_i³ρ_i, the initial conditions and a(t_i) = 1, ȧ(t_i) = H_i are Lecture 7 slide 2; E = ½ȧ² - (4π/3)Gρ_i/a is Lecture 7 slide 3; the Friedmann equation with H² = (ȧ/a)² is Lecture 8 slide 2; Gauss's law is Lecture 6 slide 1. All `at=` values are right. MIT problem citations (pp. 1–2, p. 2, p. 3, eqs. (3)–(6) p. 4, eqs. (7)–(10) p. 5, Problem 4 p. 6) match the printed page headers of the PDF text.
- `covers: [5, 6, 7]`: right. The set was handed out at Lecture 6 (24 Sept 2013) and due 30 Sept, after Lecture 7. Problem 1(a) needs Gauss's law, which this site teaches in newtons-static-universe (lecture 5); Problems 1, 3, 4 use expanding-sphere (6); Problem 2 uses friedmann-equation and open-closed-flat (7). Sharing Lecture 5 with Set 2 is fine. Side effect (info): the "Practise" bar will also appear on cosmological-redshift (lecture 5), which Set 3 does not practise; only worth changing if the site later allows per-lesson practice links.
- `lecture: 7` and the prerequisites (the four lessons above) are consistent.

## Licensing
- MIT's PDF has no "All rights reserved" or "Courtesy of" notice. The two MIT figures (the cylinder, the sphere) are not reproduced or redrawn; the page describes them in words. No OpenStax or LibreTexts material. Text is rewritten, not copied; only standard phrases ("Hubble expansion rate", "effective potential energy") recur.
- The posted 2011 quiz solution (web.mit.edu, not OCW) is not used; keep it that way (row 1).

## Notes
- No em dashes; no `## Summary` with answers; symbols pass `content:check`.
- I downloaded the Lecture 6, 7 and 8 slide PDFs myself from OCW for the citation check; the PS3 text was the copy named in the brief.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-21, by the page author)

- Warning 1: the introduction now says MIT publishes no solutions for this set on OCW, and that for Problem 4 Guth pointed his students to a 2011 quiz solution on the course's own MIT site, which is not part of OCW and is not used here.
- Warning 2: Problem 3's statement now says that E is 1 divided by a time squared with a(t_i) = 1 a pure number, as in this set; the parenthesis in the 3(a) check is reworded as the alternative in Guth's notch convention.
- Info notes: no change needed.
- Status set to `reviewed`.
