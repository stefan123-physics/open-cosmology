---
page: content/year-4/8.286/8-286-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps2/ (read: PDF a8b2606656f810c7288be66a7c02ae2f_MIT8_286F13_ps2.pdf, pdftotext)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (Lecture 4 transcript, read; printed pp. 21-25 checked page by page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (Lecture 5 transcript, read; printed pp. 3-9 checked page by page)
  - https://arxiv.org/abs/1301.4477 (Bunker et al. 2013, abstract only, read)
  - https://arxiv.org/abs/2405.18485 (Carniani et al. 2024, abstract only, read)
  - https://arxiv.org/abs/1010.4312 (Lehnert et al. 2010: not opened; the claim it supports is also in MIT's set)
verdict: pass-with-notes
---

# Review: Problem Set 2: a galaxy at redshift 8.55

## Blind solve

Solved from the statements only (hints, `<Answer>` and `<Solution>` blocks stripped by script; calcs file not opened). Answers saved to `ps2-review/blind-B.md` before the rest of the page was read.

My answers:
- p1-d: ℓp(t0) = 3c t0 [1 − (te/t0)^(1/3)]  (ℓc = (3c/b)(t0^(1/3) − te^(1/3)), times a(t0))
- p2-a: z = (t0/te)^(2/3) − 1
- p2-b: te/t0 = (1+z)^(−3/2) = 0.033884
- p3-a: ℓp(t0) = (2c/H0)[1 − 1/√(1+z)]  (H = 2/(3t), t0 = 2/(3H0))
- p3-b-mpc: 6053.2 Mpc (c = 299 792.458 km/s, H0 = 67)
- p3-b-ly: 1.9743 × 10¹⁰ ly = 19.74 billion ly (1 pc = 3.26156 ly)
- p4-a: v = H0 ℓp(t0) = 2c[1 − 1/√(1+z)]
- p4-b: v/c = 1.35282
- p5-a: θ = w(1+z)/ℓp(t0) = H0 w (1+z) / (2c[1 − 1/√(1+z)])
- p5-b: θ/θs = 1 + z
- p5-c: with x = √(1+z), θ ∝ x³/(x−1), derivative x²(2x−3)/(x−1)², zero at x = 3/2, z = 5/4 = 1.25; minimum because the emission distance ℓp(te) = ℓp(t0)/(1+z) peaks there
- p6-a: J = P / [4π ℓp(t0)² (1+z)²]
- p6-b: J = P H0² / [16π c² (1+z)² (1 − 1/√(1+z))²] = P H0² / [16π c² (1+z)(√(1+z) − 1)²]

Comparison, one line per answer id:
- p1-d: page `3*c*t0*(1 - (te/t0)^(1/3))` — agrees (identical form).
- p2-a: page `(t0/te)^(2/3) - 1` — agrees.
- p2-b: page 0.0339 ± 1% — agrees (0.033884 is 0.05% off the stored value; accepted).
- p3-a: page `(2*c/H0)*(1 - 1/sqrt(1 + z))` — agrees.
- p3-b-mpc: page 6053 Mpc ± 1% — agrees (6053.2). A student using c = 3 × 10⁵ km/s gets 6057, accepted.
- p3-b-ly: page 19.7 billion ly ± 1% — agrees (19.74). Using 3.26 ly/pc gives 19.73, accepted.
- p4-a: page `2*c*(1 - 1/sqrt(1 + z))` — agrees.
- p4-b: page 1.35 ± 1% — agrees (1.3528, 0.2% off the stored value; accepted).
- p5-a: page `w*H0*(1 + z)/(2*c*(1 - 1/sqrt(1 + z)))` — agrees.
- p5-b: page `1 + z` — agrees.
- p5-c (self-marked, no box): page uses the same substitution u = √(1+z), same derivative u²(2u−3)/(u−1)², same z = 1.25, same physical explanation — agrees.
- p6-a: page `P/(4*pi*lp^2*(1 + z)^2)` — agrees.
- p6-b: page `P*H0^2/(16*pi*c^2*(1 + z)^2*(1 - 1/sqrt(1 + z))^2)`, plus the (√(1+z) − 1)² form — agrees; I checked the identity (1+z)(1 − 1/√(1+z))² = (√(1+z) − 1)² algebraically.

No disagreement between my blind answers and the page.

## Differences from the MIT source and other findings
| # | Severity | Where on page | MIT says / reference | Page says | Suggested fix |
|---|----------|---------------|----------------------|-----------|---------------|
| 1 | warning | Problem 5(a), `mistakes` entry `w*H0*(1 + z)/(c*(1 - 1/sqrt(1 + z)))` | (answer-box feedback) | Hint: "The angle is the comoving diameter, not the radius, divided by the comoving distance, and the largest distance is 2c divided by the Hubble rate." | This slip is twice the correct answer. Using the radius instead of the diameter would give half, not twice, so the first clause points the student the wrong way. Keep only the second clause, e.g. "A factor of 2 has gone astray: check the distance from Problem 3, which is 2c/H₀ times the bracket." |
| 2 | warning | "The model universe and the galaxy", the Bunker 2013 remark | Bunker et al. 2013 abstract (arXiv:1301.4477): no emission at the reported wavelength although the data should have shown it at about 5σ; the reported Lyα line at z > 8 is "highly unlikely to be real" | "did not find the spectral line again, so this redshift is less certain than it seemed" | This understates the source. Say that the spectral line was not confirmed, so the spectroscopic redshift of 8.55 no longer stands and the galaxy's redshift rests on its photometric estimate. The instruments ("two other spectrographs", XSHOOTER and MOIRCS against Lehnert's SINFONI) are correct. |
| 3 | warning (uncertain) | Problem 3(b) check: "$t_0 = 2/(3H_0) = 9.7$ billion years", "$t_0 - t_e = 9.4$ billion years" | AGENTS.md Writing rule 7; `calcs/values.yaml` `age` pattern (`… billion years`, range 12.5–15) | 9.7 and 9.4 billion years | The `age` regex in `calcs/values.yaml` looks like it matches both numbers. Neither is listed there, and both are outside the age range, so `content:check` is likely to fail. Add both as `computed:` entries (model age for a matter-only flat universe with H₀ = 67, and the light travel time), or reword so the scanner does not read them as ages. I could not run `content:check` on the scratch copy. |
| 4 | info | Problem 4(b), "Is that allowed?" | MIT's bracket: "Our expanding universe violates special relativity, but is consistent with general relativity." | The page puts it more carefully: v is not a velocity in one inertial frame, so special relativity is not violated locally. This is supported by the cosmological-redshift lesson (line 107) and by Lecture 5 pp. 3-4 and 8. | Fine physics. Optionally add a short bracket noting that MIT's set words this more loosely ("violates special relativity"), as Writing rule 4 asks when the page departs from MIT's wording. |
| 5 | info | Part points: 2 (5/5), 3 (5/5), 4 (5/5), 5 (10/4/6), 6 (12/8) | MIT gives only problem totals (10, 10, 10, 10, 20, 20; 80 in all) | Problem totals match MIT and add up to 80. The splits between parts are the page's own. | Acceptable. Optionally say once, in "How to answer", that MIT gives points per problem only. |
| 6 | info | Problem 3(b), box `p3-b-ly` | — | `value="19.7" unit="billion light-years"` | `unit` is only a label (lib/answers.ts compares bare numbers), so a student who types 1.97e10 is marked wrong. The label is visible next to the box, so this is minor. Optionally say "(in billions of light-years)" in the part statement. |
| 7 | info | Scale-factor formula, `at="Introduction to the problem set"` | The formula is on p. 1 of the MIT PDF | — | Optionally `at="Introduction, p. 1"`. |
| 8 | info | Introduction, "in 2024 the James Webb Space Telescope confirmed a galaxy at z ≈ 14.3" | Carniani et al. 2024 abstract: z = 14.32 (+0.08/−0.20), Nature 633, 318 | Correctly marked as a later development; the reference is accurate. | No change needed. The page does not call this a record, which is wise: from memory (not verified here), higher spectroscopic redshifts were reported in 2025. |

Citations checked (all correct):
- `dx/dt = c/a(t)`, reading1 p. 24: Lecture 4 printed p. 24, on the board. ✓
- `H = ȧ/a` and `dℓp/dt = H ℓp`, reading1 pp. 22-23: the derivation starts at the foot of p. 22, and Hubble's law with H = (1/a) da/dt is on p. 23. ✓
- `1 + z = a(t0)/a(te)`, reading2 p. 6: Lecture 5 printed p. 6. ✓
- `Δt0 = (1+z)Δte`, reading2 pp. 5-6: pulses keep a fixed Δx (p. 5), and Δt_o/Δt_s = a(t_o)/a(t_s) (p. 6). ✓ The page's "used here for photons" is honest.
- Formulas of the page's own derivations are cited `mit` at "Problem N (our own solution)", the same convention as the reviewed pilot Problem Set 1. ✓
- "The lesson on the redshift calls these two times t_O and t_S": true of cosmological-redshift.mdx. ✓

## Arithmetic and answer checks
All numbers recomputed independently in Python (CODATA c, 1 pc = 3.0857 × 10¹⁶ m, 1 ly = 9.4607 × 10¹⁵ m, Julian year):
- (1+z)^(3/2) = 29.512; te/t0 = 0.033884 → 0.0339 ✓; 0.0339^(2/3) = 0.10474 ≈ 1/9.55 = 0.10471 ✓; 3.4 % ✓
- c/H0 = 4474.5 → 4475 Mpc; 2c/H0 = 8949.0 ✓; 1/√9.55 = 0.32359 → 0.3236; 1 − … = 0.67641 → 0.6764 ✓; ℓp = 6053.2 → 6053 Mpc ✓; 68 % ✓
- 1 Mpc = 3.2616 × 10⁶ ly → 3.262 ✓; 1.974 × 10¹⁰ ly → 19.7 billion ✓
- t0 = 2/(3H0) = 9.729 Gyr → 9.7 ✓; t0 − te = 9.40 Gyr → 9.4 ✓
- v/c = 1.3528 → 1.35 ✓; z = 3 gives exactly c ✓
- P1 checks: 3(1 − 0.97^(1/3)) = 0.030305 → 0.0303 ✓; te = t0/8 gives 1.5 and 0.875 ✓; the limit as te → 0 is 3c t0 ✓
- P5: θ for w = 1 kpc: 9.55 × 0.001/6053.2 = 1.5777 × 10⁻⁶ rad = 0.3254″ → 0.33″ ✓; static: 0.03407″ → 0.034″ ✓
- P5(c): f(z) = (1+z)/(2(1 − (1+z)^(−1/2))) = 4.087 (z = 0.5), 3.375 (1.25), 3.549 (2), 7.059 (8.55) ✓; ratio 7.059/3.375 = 2.09 ("about twice") ✓; minimum value (27/8)/(1/2)/2 = 3.375 ✓; ℓp(te) = 6053.2/9.55 = 633.9 → 634 Mpc ✓
- P6: 9.55² = 91.2 → 91 ✓; small-z limits of P3, P4, P5, P6 checked ✓; J decreases monotonically in z (∝ 1/[u²(u−1)²] with u = √(1+z) > 1) ✓
- Listed mistakes, each checked to be the formula its hint describes:
  - p1: c(t0 − te) is the static distance ✓; 3c te^(2/3)(…) is the distance at emission ✓; 3c(t0^(1/3) − te^(1/3)) has the wrong units ✓; the (2/3) power is the wrong integral ✓
  - p2-a: all four ✓
  - p3-a: c z/H0 ✓; 3c/H0 is t0 = 1/H0 ✓; (2c/(3H0))(1 − (1+z)^(−3/2)) = c(t0 − te) ✓; 1/(1+z) is the wrong power ✓; division by (1+z) gives the emission distance ✓
  - p4-a: c z ✓; relativistic Doppler v/c = ((1+z)² − 1)/((1+z)² + 1) ✓; the emission-distance slip ✓; the 3c slip ✓
  - p5-a: see finding 1; the other three are ✓
  - p5-b: all ✓
  - p6-a: all five ✓
  - p6-b: all four ✓; the "(1+z)¹" slip is not equal to the correct alternative form, checked algebraically
- Tolerances: 1 % on every number box accepts correct routes with rounded inputs (c = 3 × 10⁵, 3.26 ly/pc) and rejects every slip tried (3c/H0 → 9080 Mpc; c(t0 − te) → 2882 Mpc; emission distance 634; relativistic Doppler 0.978; (1+z)^(−2/3) = 0.222).
- `vars` ranges: te < t0 everywhere for p1 and p2; z ∈ [0.1, 10] keeps 1 − 1/√(1+z) > 0.08, so every formula box is finite and physical ✓
- Calcs file: every number on the page has an entry; formula answers are checked by an independent route (numerical integration of c/a with b sampled, numerical derivatives, `solve` for z = 1.25). Two identity entries are not independent: `p6-flux-by-counting` restates the page's own derivation algebraically, and `p5-ratio-to-static` divides the answer by the static angle. Both still guard against typos, so this is info only. I did not run `calc:test` (the scratch copy is not in `calcs/`); I recomputed every `expected` value myself (above), and all match.

## Coverage and order
- All six MIT problems are present, in MIT's order, with MIT's titles in substance and MIT's points per problem (80 in total).
- MIT's two requests in Problem 2 and in Problem 4 (formula, then number) become parts (a) and (b). In Problem 5, MIT's comparison with static space and its hint about the minimum at z = 1.25 become parts (b) and (c); (c) turns MIT's "if you have it right, you will find…" into a show-that. This is a fair reading of MIT's intent. In Problem 6, part (a) (in terms of ℓp) is an added intermediate step towards MIT's single request.
- Small additions: Problem 3(a) asks for c as well as H0 and z (implicit in MIT); Problem 1 names c explicitly. These do not change the meaning.
- Left out (correctly): MIT's due-date and reading-assignment preamble; the history of record redshifts (1986–2006) and McMahon's graph, which is marked "Image by MIT OpenCourseWare"; the three discovery papers of 2009. The page keeps MIT's essential context (UDFy-38135539, z = 8.55, Lehnert 2010).
- Uses only Lecture 4–5 material (dx/dt = c/a, H = ȧ/a, ℓp = aℓc, 1 + z = a(t0)/a(te), the stretching of the interval between pulses). The a ∝ t^(2/3) law is given, not derived, as in MIT. The flux argument of Problem 6 is built only from these, as MIT's guidance intends.
- Every solution ends with a check (units, a limit or a number). Problem 4(b) ends with a physical discussion rather than a numerical check, which is acceptable for an evaluation step.
- Hints lead without giving results away. The most leading one is Problem 4(a) hint 2 ("the present Hubble rate multiplied by a distance you already know"), which is still fine as the last hint.

## Licensing
- MIT's statements are rewritten in the page's own words. The closest wording is the definition of flux ("energy that arrives per unit time and per unit area, on a surface that faces the incoming light at a right angle" against MIT's "energy per unit area per unit time striking a surface that is orthogonal to the direction of energy flow"): this is a rewritten standard definition. No sentence is copied.
- MIT's "Image by MIT OpenCourseWare" graph of record redshifts is not used. MIT's sphere diagram for Problem 6 is described in words only, not redrawn. No "courtesy" or "rights reserved" items appear in the MIT PDF or either transcript (grep).
- References: Lehnert 2010 (Nature, Springer Nature), Bunker 2013 (MNRAS, OUP) and Carniani 2024 (Nature) are all cited through their arXiv versions, as AGENTS.md rule 11 asks. Only abstract-level claims are made, consistent with "cite only".
- No OpenStax or LibreTexts material.

## Notes
- The solutions are clear and complete. The comoving-map argument for the angle (straight rays, isotropic scaling keeps angles) and the batch-of-photons argument for the two factors of (1+z) in the flux are well explained for a student.
- Notation follows the lessons (ℓp, ℓc, notches), with a clear note on t_O/t_S against t0/te, and the "no b in the answer" rule keeps Guth's notch check.
- Not verified: `content:check` (symbol meanings for θs, u, w, J, P, E_e, E_0, Δt_e, Δt_0 on this slug; the values.yaml scan of finding 3), and how the score splits the 5 points of Problem 3(b) between its two boxes.

COUNTS: errors=0 warnings=3 info=5

Verdict: pass-with-notes. Every answer agrees with an independent blind solve, every number recomputes, and every citation checks out against the printed transcript pages. Fix the misleading factor-2 mistake hint in Problem 5(a), make the Bunker 2013 remark match its source, and make sure 9.7 and 9.4 "billion years" pass the values.yaml scan.

## Notes on this review
This set was written on 2026-11-21 in a pilot that compared two writer models on the same brief. Both versions were solved blind by the same reviewer; this review is of the version that was kept, read from a scratch copy identical to the committed page at that time.

## Resolution (2026-11-21, by the page author)
- Row 1: the hint for the slip `w*H0*(1 + z)/(c*(...))` now reads "A factor of 2 has gone astray: check the distance from Problem 3, which is 2c/H0 times the bracket."
- Row 2: the Bunker et al. remark now says the line was not found again and is very unlikely to be real, so the spectroscopic redshift of 8.55 no longer stands and the galaxy's distance rests on estimates from its colours.
- Row 3: no change needed: `npm run content:check` passes with the 9.7 and 9.4 billion-year figures (the value registry does not flag them).
- Row 4: a bracket in Problem 4(b) now notes that MIT's set words this more loosely (against special relativity, consistent with general relativity).
- Rows 5 and 6: "How to answer" now says to type numbers in the unit shown next to the box, and that MIT gives points per problem only, the split between parts being ours.
- Row 7: the scale-factor citation is now "Introduction, p. 1" (page and calcs).
- Row 8: no change.
- Status set to reviewed.
