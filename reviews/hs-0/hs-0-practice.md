---
page: content/year-0/hs-0/hs-0-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read)
verdict: needs-changes
---

# Review: Block 0 practice set: the maths toolkit

## Blind solve

Solved from the statements-only copy before the page, hints, solutions, answer boxes or calcs file were opened.

### My answers (written first)

- p1-n: 0.010 m / 8.0e-6 m = 1250 cells (1.25e3)
- p2-a: 12e-3 m³ / 40 s = 3.0e-4 m³/s
- p2-b: 12 L / 40 s × 60 s/min = 18 L/min
- p3-v: 2 × 365 × 80 = 58 400 L ≈ 5.8e4 L
- p4-a: v = (x − x0)/t
- p4-b: (60 − 15)/9.0 = 5.0 m/s
- p5-a: (16 − 4.0)/(5.0 − 1.0) = 3.0 m/s
- p5-b: 4.0 − 3.0 × 1.0 = 1.0 m
- p5-c: 1.0 + 3.0 × 8.0 = 25 m
- p6-a: t = √(20/4.9) = 2.020 s ≈ 2.0 s
- p6-b: 2 × 2.020 = 4.04 s
- p7-a: 50 sin 35° = 28.68 m ≈ 28.7 m
- p7-b: 50 cos 35° = 40.96 m ≈ 41.0 m
- p8-a: √(250² + 600²) = 650 m
- p8-b: arctan(600/250) = arctan 2.4 = 67.38°
- p9-t: 2ⁿ = 1000, n = log₂1000 = 9.966; t = 199.3 min ≈ 3.3 h
- p10-a: 2.0 + 20 + 2.0 = 24 m
- p10-b: 24 m / 14 s = 1.714 m/s
- p11-a: 70 × 200 = 1.4e4 km/s
- p11-b: 3500/70 = 50 Mpc

### Comparison (page value, tolerance)

- p1-n: page 1250 (2%): agrees. But see finding 1: the 2-s.f. answer the solution itself offers (1.3 × 10³) is rejected by the box.
- p2-a: page 0.0003 (2%): agrees.
- p2-b: page 18 (2%): agrees.
- p3-v: page 58400 (5%): agrees; 6 × 10⁴ is accepted (2.7% off).
- p4-a: page `(x - x0)/t`: agrees (same expression).
- p4-b: page 5 (2%): agrees.
- p5-a: page 3 (2%): agrees.
- p5-b: page 1 (2%): agrees.
- p5-c: page 25 (2%): agrees.
- p6-a: page 2.02 (2%): agrees; 2.0 accepted (1.0% off).
- p6-b: page 4.04 (2%): agrees; 4.0 accepted.
- p7-a: page 28.7 (2%): agrees; 29 accepted.
- p7-b: page 41 (2%): agrees.
- p8-a: page 650 (2%): agrees.
- p8-b: page 67.4 (2%): agrees.
- p9-t: page 199 (2%): agrees; 200 (ten whole doublings) also accepted.
- p10-a: page 24 (2%): agrees.
- p10-b: page 1.71 (2%): agrees; 1.7 accepted.
- p11-a: page 14000 (2%): agrees.
- p11-b: page 50 (2%): agrees.

No disagreement between my answers and the page's. `npm run calc:test -- -k hs-0-practice`: 24 passed.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Problem 1, `<Answer id="p1-n" value="1250" tolerance="2%">` | "How to answer" asks for "two or three significant figures"; the solution says "or $1.3 \times 10^{3}$ to two significant figures" | The box accepts 1225–1275 only, so 1.3e3 (4.0% off) and 1.2e3 are marked wrong | Widen the tolerance to 5% (accepts 1.2e3 and 1.3e3), or drop the 2-s.f. remark and ask for three significant figures in the statement |
| 2 | warning | Problem 3, Solution step "State it honestly" | Lesson 0.1 (powers-of-ten): order of magnitude = the power of ten in scientific notation (5.84 × 10⁴ → 10⁴), with rounding up "above about 3" only as an aside | "about $6 \times 10^{4}$ litres: of order $10^{5}$ litres" | Say "of order 10⁴ to 10⁵ litres", or name the round-up rule ("5.8 is above about 3, so it rounds up to 10⁵") so it matches the lesson |
| 3 | warning | Solutions of p2-a, p3, p4-b, p5-a, p5-b, p7-a, p8-a, p10-a, p11-a | Reviewer instructions: each solution ends with a check (units, a limit, or a number) | These parts end with the result and no check step (p7-a is checked inside p7-b, p8-b has a sign argument, p10-b a size comparison) | Add a one-line check, e.g. p2-a: 3.0e-4 m³/s × 40 s = 0.012 m³ = 12 L; p5-b: 1.0 + 3.0 × 5.0 = 16 m; p8-a: 6.5² = 2.5² + 6.0² (5-12-13 scaled); p10-a: average 1.71 m/s × 14 s; p11-a: units km/s/Mpc × Mpc = km/s |
| 4 | warning | calcs `p4-a` (identity) | An identity should test the rearrangement against the original formula | `equals: ((x0 + ((x - x0)/t)*t) - x0)/t` simplifies to `(x - x0)/t` for any expression put in, so the check cannot fail | Test the substitution back: e.g. `formula: x0 + ((x - x0)/t)*t`, `equals: x` |
| 5 | info | Problem 4(a), `mistakes` | – | Only `x/t - x0` listed | Consider adding `(x + x0)/t` ("subtract x₀, do not add it") and `x - x0/t` |
| 6 | info | Problem 6(b), hint | – | "multiplying the height by 4 multiplies the time by $4^{1/2}$" | Fine (the reader still has to evaluate 4^{1/2} and use 6(a)), but it is close to the whole method; acceptable |
| 7 | info | Problem 11 | – | Lesson 0.11 is practised only by the optional problem | Acceptable; note that the block's last lesson counts for no points |

## Formulas and citations
- The set has no `<Formula>` elements; all mathematics is inline in statements and solutions.
- `source` (Siyavula PS Gr 10, 1.2 Mathematical skills) and `readings[0]` (1.3 Units) exist and were read. 1.2 covers rounding and scientific notation (supports P1, P3); 1.3 covers changing units, changing the subject of a formula, rate/proportion and trigonometry (supports P2, P4, P7). The other problems (graphs, quadratics/power laws, vectors, logarithms, area under a v–t graph, Hubble's law) rest on the Block 0 lessons, which the intro says ("the methods are those of the lessons"); the calcs entries cite `mit` "(our own solution)" per the stated convention. No claim on the page needs a source beyond that.
- No forbidden source cited or used.

## Arithmetic and answer checks
- Every number recomputed independently (see Blind solve). Intermediate numbers also checked: 20/4.9 = 4.082 (4.08); √(80/4.9) = 4.041; sin 35° = 0.5736, cos 35° = 0.8192; 28.7² + 41.0² = 823.7 + 1681 = 2504.7 (page 2505); 62 500 + 360 000 = 422 500; 3/0.30103 = 9.966 (9.97); 2¹⁰ = 1024; 0.5·2·2 = 2.0; 24/14 = 1.714.
- Checks in solutions are true: P1 (1 cm = 10⁴ μm, cell 8 μm → a bit over 1000), P2(b) (1.5 buckets per minute), P5(c) (16 + 9 = 25), P6(b) direct √(80/4.9), P7 Pythagoras, P9 (2¹⁰ just over 1000), P10(b) (below top speed), P11(b) (half of 7000 km/s at 100 Mpc).
- P6(a): the ± root and rejection of the negative root are correct. P8(b): quadrant argument correct.
- P3: "a small swimming pool's worth": 58 m³ is plausible for a small pool; fine as an estimate.
- Every number on the page is in the calcs file (24 entries, all pass). Every `<Answer>` has a `calc=` tied by `answer:`.
- `<Answer>` p4-a: `vars` x ∈ [10, 100], x0 ∈ [0, 9], t ∈ [1, 20] keep the expression finite (t ≥ 1) and physical (x > x0); `names` maps x0 → x_0. The mistake `x/t - x0` differs from the answer and its hint is true.
- Tolerances: all 2% except P3 (5%); fine except P1 (finding 1).
- Hints: none states a final result. P6(b)'s hint gives the scaling factor (finding 6).
- H = 70 km/s/Mpc is in `calcs/values.yaml` as the round example value.

## Only earlier terms
Every term used appears in the Block 0 lesson named (all eleven lessons are written):
- scientific notation, separating numbers and powers (powers-of-ten); litre, m³, conversion factor equal to one, flow (units-and-si); splitting an estimate into factors (significant-figures-and-estimates); "make v the subject", x = x0 + vt (rearranging-formulas); slope as speed on a position–time graph, intercept (graphs-and-slope); 4.9t², square roots, power law with power 1/2 (quadratics-and-power-laws); sine, cosine, tan⁻¹ (angles-and-trigonometry, introducing-vectors); components R_x, R_y, Pythagoras for a resultant (introducing-vectors); log, doubling (exponentials-and-logs); velocity–time graph and area under it, average speed (rates-of-change-and-area); Hubble's law, H ≈ 70 km/s per Mpc, megaparsec (towards-the-universe-scales, also rearranging-formulas and graphs-and-slope).
- No term used before its lesson. `prerequisites: [towards-the-universe-scales]` (the block's last lesson) is right.

## Coverage
- One problem per lesson, in lesson order: P1→0.1 … P10→0.10, P11→0.11. Every lesson of Block 0 is practised. Topics not practised: radians (0.7), unit-vector notation and vector addition by components with negative components (0.8), exponential decay/half-life (0.9, if covered), significant-figure rules for multiplication explicitly (0.3). At VWO level this is acceptable for a ten-problem set; a later set could add a radians conversion and a vector with a negative component.

## Where this leads
- Practice set: no `leadsTo` and no `towards`, as expected for `kind: problems`.

## Licensing and AI terms
- No sentence copied from Siyavula: the problems and solutions were compared with Siyavula 1.2 (worked examples 1–2, rounding 2,6525272, speed of light) and 1.3 (worked examples 3–4, 100 °C to K, Exercises 1.1 and 1.2, prefix exercises, Concorde 844 km/h). None of the set's situations or numbers (blood cell, bucket, lifetime water, runner, cart, stone, kite, hiker, bacteria, lift, galaxy) appear there.
- No figures. No Siyavula logo or "Everything Science" branding; the intro names "Siyavula's *Skills for science* chapter" as attribution only.
- No MIT, NASA or ESO material; no forbidden source.

## Notes
- `set: 1`, `lecture: 11`, `covers: [1 … 11]`, `solutions: own`, `status: draft` are consistent with the schema constraints described by the caller. Points: 10 × 10 = 100, P11 optional with 10 points; parts sum correctly (5+5, 6+4, 4+3+3, 6+4, 5+5, 5+5, 6+4, 5+5).
- Problem 10 uses "lift" (British English); consistent with "litre" elsewhere.

## Resolution (2026-11-20, by the page author)

- 1 (error, p1-n tolerance): the tolerance is now 5%, so 1.3 × 10³ and 1.2 × 10³ are accepted as the "How to answer" text promises.
- 2: Problem 3's solution now gives the order of magnitude as 10⁴ by the power in scientific notation, or 10⁵ when 5.8 is rounded up, and adds a check (730 litres a year).
- 3: checks added to p2-a (units and filling time), p3, p4-b (substitution), p5-a, p5-b (from the other point), p7-a (size against sin 30°), p8-a (between the leg and the sum of the legs), p10-a (top speed minus start and stop) and p11-a (units, fraction of c); calcs entries `p2-check`, `p3-year`, `p4-check`, `p10-top`, `p11-check`.
- 4: calcs `p4-a` now checks the formula against a numerical solution of x₀ + V t = x for V.
- Info: two more listed mistakes in p4-a, (x + x₀)/t and x − x₀/t. The 6(b) hint and the optional status of Problem 11 are kept.

`npm run calc:test`, `npm run test:answers` and `npm run content:check` pass.
