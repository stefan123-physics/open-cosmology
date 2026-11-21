---
page: content/year-2/8.033/8-033-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps2/ (read: ps2.pdf, as text and as rendered pages 1 to 3)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture2_symme1/ (read: downloaded fresh; slides 10 and 12 viewed as images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture3_symme2/ (read: slides 7, 9, 16, 17 viewed as images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read: slides 15, 16, 18, 21 viewed as images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: slides 4, 13, 20 viewed as images)
verdict: pass-with-notes
---

# Review: Problem Set 2: waves, the ether wind and the Lorentz transformation

## Blind solve

### My answers (written before the full page, the calcs file or the symbols were opened)

Conventions: β = v/c, γ = 1/sqrt(1 − β²), c = 3.00e8 m/s. Numbers checked in exact decimal arithmetic (Python `decimal`, 40 digits; mpmath/sympy are not installed in .venv).

- p1a: y = f(x ∓ Vt): y_xx = f'', y_tt = V² f'', so y_xx = y_tt / V². Shown.
- p1b: the shape f is constant along x ∓ Vt = const, i.e. a fixed profile moving at dx/dt = ±V; so V is the propagation speed.
- p2a: ∂/∂x = ∂/∂x′ (unchanged); ∂/∂t = ∂/∂t′ − v ∂/∂x′ (changes).
- p2b: (1 − v²/c²) E_x′x′ − (1/c²) E_t′t′ + (2v/c²) E_x′t′ = 0, so A = 1 − v²/c², K = 2v/c². Form differs from the original (A ≠ 1, mixed term) unless v = 0: not invariant.
- p2x: f(x′+Vt′): (1 − v²/c²) − V²/c² + 2vV/c² = 0 ⇔ (V − v)² = c² ⇔ V = v ± c. Pulses move at dx′/dt′ = −V, i.e. +(c − v) or −(c + v): light speed in S′ depends on direction, not c.
- p3a: t1 = l/(u−v) + l/(u+v) = 2lu/(u²−v²) = t0/(1 − v²/u²).
- p3b: ground speed sqrt(u² − v²) each way (heading into the wind), t2 = 2l/sqrt(u²−v²) = t0/sqrt(1 − v²/u²).
- p3c: the air is a real medium and the plane's ground speed is its airspeed plus the wind (Galilean addition); light has no medium / no detectable ether wind: its speed is c in every inertial frame (or, in Lorentz's version, the arm contracts), so the two light times are equal.
- p4: ΔL = L(1 − sqrt(1 − β²)) ≈ Lβ²/2 = 2.8 m × 5e-9 = 1.4e-8 m = 14 nm ≈ 140 atomic diameters.
- p5a: γ² ≈ 1 + β² + β⁴; γ ≈ 1 + β²/2 + 3β⁴/8. γ − 1: β = 0.1: series 0.0050375, exact 0.00503782; β = 0.001: 5.0000038e-7 (both); β = 1e-5: 5.0e-11 (calculator with ~10 digits may give 0 or a wrong number).
- p5b: β = sqrt(1 − 1/γ²) ≈ 1 − 1/(2γ²). 1 − β: γ = 2: approx 0.125, exact 0.133975; γ = 10: approx 0.005, exact 0.00501256; γ = 1000: approx 5.0e-7, exact 5.0000013e-7.
- p6a: ether: c (down, ether frame) combined with −v sideways in the telescope frame: sqrt(c² + v²).
- p6b: c.
- p6c: in the Earth frame the light's sideways component is −v and its vertical component c/γ (relativistic velocity transformation, u_y′ = u_y/γ), total speed c; sin α = v/c, tan α = v/(c/γ) = βγ = β/sqrt(1 − β²).
- p6x: α_r − α_c ≈ β³/6 + β³/3 = β³/2, fraction ≈ β²/2 = 5.0e-9 (β = 1e-4).
- p7a: substitute the Lorentz transformation: x² − c²t² = x′² − c²t′², y, z unchanged, hence the result.
- p7b: X′ᵗηX′ = XᵗΛᵗηΛX = XᵗηX = 0.
- p8: lab clock at 180 m: 180/(1.8e8) s = 1.00 μs; moving clock: 1.00/γ = 0.800 μs (γ = 1.25); difference 0.200 μs.
- p9: 1.0 × 0.8 = 0.80 m.
- p10a: ct = γ(ct′ + βx′) → `g*(T + b*X)`; x = γ(x′ + βct′) → `g*(X + b*T)`; y = y′, z = z′.
- p10b: [[γ, βγ],[βγ, γ]]·[[γ, −βγ],[−βγ, γ]] = [[γ²(1−β²), 0],[0, γ²(1−β²)]] = identity.
- p11a: wind β_w = 1e5/3e8 = 1/3000. Round trip in direction θ to the wind: t(θ) = (2R/c) sqrt(1 − β² sin²θ)/(1 − β²). First return from the ring perpendicular to the wind: (2 s)(1/sqrt(1−β²) − 1) ≈ β² s = 0.111 μs after 2 s; last from the two points on the wind axis (up- and downwind): (2 s)(1/(1−β²) − 1) ≈ 0.222 μs after 2 s. Seen: dark until 2 s, then a bright ring around the wind direction that spreads to the two poles in about 0.11 μs, then dark (I wrote "light scattered across the sphere arrives after 4 s"; that is wrong for short chords, see the comparison below).
- p11b: whole sphere lights up at once at exactly t = 2 s, then dark again. Michelson-Morley is this experiment with only two directions (two arms); the null result says the returns from all directions arrive together, as in (b).

### Comparison with the page (one line per answer id)

- p2-which (choice 1, only ∂/∂t changes): agrees.
- p2-acoef `1 - v^2/c^2`: agrees.
- p2-kcoef `2*v/c^2`: agrees.
- p3-why (choice 1): agrees with my p3c.
- p4-n 140 (2%): agrees (exact 140.0000004).
- p5-g2 `1 + b^2 + b^4`: agrees.
- p5-g `1 + b^2/2 + 3*b^4/8`: agrees.
- p5-g01 0.0050375 (0.1%): agrees.
- p5-g001 5.0e-7 (1%): agrees (5.00000375e-7).
- p5-g00001 5.0e-11 (1%): agrees.
- p5-b2a 0.125: agrees. p5-b2e 0.13397 (0.1%): agrees (0.1339746). p5-b10e 0.0050126 (0.1%): agrees (0.00501256). p5-b1000a 5.0e-7: agrees.
- p6-ether `sqrt(c^2 + v^2)`: agrees.
- p6-rel `c`: agrees.
- p6-tan `b/sqrt(1 - b^2)`: agrees.
- p6x-frac 5.0e-9 (1%): agrees (direct evaluation 4.99999998e-9).
- p8-lab 1.0 μs, p8-clock 0.8 μs, p8-diff 0.2 μs: agree.
- p9-len 0.8 m: agrees.
- p10-ct `g*(T + b*X)`, p10-x `g*(X + b*T)`: agree.
- p11-first 0.111 μs, p11-last 0.222 μs: agree (exact 0.1111111 and 0.2222222).
- p11-what (choice 1, whole sphere at 2 s): agrees.
- Self-marked parts (p1a, p1b, p2x, p3a, p3b, p7a, p7b, p10b): the page's derivations reach the same results as mine.
- Descriptive part of p11a: the page says a weak fading glow of multiply scattered light follows the ring. That is right and my blind line was wrong: light scattered between two nearby wall points travels a short chord and reaches the centre just after 2 s. No disagreement remains.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(a) "Check the result" and 1(b) "Follow one point of the shape" | Lecture 3 slide 7 writes the general solution as y = A f(x − c_w t) + B f(x + c_w t), with one function f (a slip, or a special case) | "a sum of one shape that moves each way, each with any constant factor, is a solution too. That is the general solution quoted in the lesson"; 1(b) "the general solution is a sum of one shape of each kind" | The general solution of the 1D wave equation is f(x − Vt) + g(x + Vt) with two independent functions. Replace with: "Because the equation is linear, a sum f(x − Vt) + g(x + Vt) of two shapes, which need not be the same, is a solution too, and every solution has this form (Lecture 3 slides, slide 7, writes it as A f + B f with a single f)." In 1(b) write "a sum of two shapes, one moving each way". |
| 2 | warning | Problem 9 statement | "A rod lies parallel to the x-axis of reference frame S, moving along this at a speed of 0.6c. Its rest length is 1.0 m. What will its measured length be in frame S?" | "A rod lies along the x axis of frame S and moves along that axis at 0.6c. Its rest length is 1.0 m. What length is measured for it in S, in metres?" | Sentence-by-sentence paraphrase with one sentence verbatim. Rewrite, e.g. "A rod 1.0 m long in its own rest frame slides lengthwise along the x axis of frame S at 0.6c. How long is it according to measurements made in S? Give metres." |
| 3 | warning | Problem 5(a) statement | MIT's sheet prints the two series, Eqs. (5.2) and (5.3), in the statement under "Check your answers" | The statement leaves them out (they appear only in the solution, cited to Eqs. (5.2) and (5.3)); this is not said | Add a bracket to 5(a): "(MIT's sheet prints both series for checking; here they are in the solution, so that the boxes test your own work.)" |
| 4 | info | Problem 2(b), `at=` of "Wave equation after a Galilean boost" | Slide 9 hints x′ = x + vt but prints the result with +2(v/c) in the mixed term | Note says only "the slide prints the last coefficient as 2v/c; the units need 2v/c²" | Add, as the lesson does: "its + sign belongs to x′ = x − vt; with the slide's own x′ = x + vt the mixed term is negative". |
| 5 | info | Problem 11(b), `at=` of "The time difference Michelson and Morley looked for" | Slide 17 gives the lowest-order expansion itself (Δt′ − Δt ≈ (L∥ + L⊥)/c·(v/c)², correct), but one line prints γ ≈ 1 + (v/c)² (slip for 1 + ½(v/c)²) | "the expansion to lowest order is ours" | The page never repeats the slip, which is right. Optionally: "slide 17 (… the slide's line γ ≈ 1 + (v/c)² should read 1 + ½(v/c)²; its final expansion is right)". |
| 6 | info | Problem 11 | MIT has three parts (a), (b), (c) | (c) is folded into Part (b) | Fine; optionally say "(MIT's part (c))" in Part (b). |
| 7 | info | Problem 5(a), 5(b) | MIT asks to evaluate γ, and to find β | Page asks for γ − 1 and 1 − β | Equivalent and better suited to the boxes; no change needed. |
| 8 | info | Problem 6 intro, "Classical aberration" Formula | Eq. (6.1) is tan α = v/c | The Formula adds = vT/cT, the page's own reasoning, under the Eq. (6.1) citation | Optional: "Problem 6(c), Eq. (6.1), p. 2 (the middle step is ours)". |

## Arithmetic and answer checks
- Every number on the page recomputed independently (decimal arithmetic): 45 points; 140 atomic diameters, 14 nm, 28 billion diameters, β⁴/8 ≈ 1.25e-17; series values 0.0050375 / 0.00503782 / miss 3.2e-7 / 5β⁶/16 = 3.1e-7; 5.00000375e-7; 10-digit displays 1.000000500 and 1.000000000; 1 − β values 0.125 / 0.13397, 0.005 / 0.0050126, 5.0e-7 / 5.00000125e-7; β values 0.86603, 0.9949874, 0.9999994999999; shortfalls 6.7%, 0.25%, 2.5e-7; aeroplane 3200, 4000, 1000, 5000, 80 m/s, 2000, 4000 s; ether speed excess 5e-9; aberration 20.6″; difference ≈ 1.0e-7″; Problem 7 event 0.5 / 0.5 and Galilean 0.4; Problem 8 1.0, 0.8, 0.2 μs, ct′ = 240 m, interval 240 m, 144 m; rod 0.8 m; 1.25² − 0.75² = 1, 0.9375; Problem 11 β = 3.33e-4, β² = 1.11e-7, 0.111 and 0.222 μs, 1.5625 and 1.25, 3.7e-16 s, 1.7e-15 s, ratio 0.22 ("about a fifth"). All correct.
- t(θ) = (2R/c)γ²√(1 − β² sin²θ) derived independently from |s n̂ − w| = c: matches the page.
- `npm run calc:test -- -k 8-033-problem-set-2` in the worktree: 99 passed.
- Answer boxes: every `expr`/`value` equals the solution's result; every `vars` range keeps the formula finite and physical (b ≤ 0.8, v < c); each listed mistake differs from the answer by far more than the checker's 1e-6 relative tolerance; every mistake hint is true of its formula (checked each: sign, missing term, n = +1/2 coefficient, missing 2!, exact expression, cotangent, Galilean answer, c/γ component, forward transform, 1/γ, swapped rows). Number tolerances accept 3 significant figures and reject the obvious wrong values (e.g. p5-b10e at 0.1% rejects the approximation 0.005, which is 0.25% off).
- p10 boxes sample `g` and `b` independently, so a correct answer typed with `1/sqrt(1 - b^2)` in place of `g` would be marked wrong. The statement tells the reader to use `g`, so this is acceptable; optionally add "type γ as g, not as its formula in b" (info).
- Choice answers p2-which, p3-why, p11-what: marked choices correct, distractors wrong for the reasons the solutions give.
- Hints: none gives a final number away. The second hint of p11a states both delay formulas, leaving only arithmetic and the "which parts of the sphere" question; acceptable for the last hint of an optional problem (info). The second hint of p2(b) comes close to stating K; acceptable.
- Every solution ends with a "Check the result" step (units, limit, a number, or a second route).

## Coverage and order
- All MIT problems 1 to 11 present in MIT's order, with MIT's parts and MIT's numbers (2.8 m, 0.1 nm, 30 km/s, 0.6c, 180 m, 1.0 m, 3e8 m, 100 km/s, 3 s). Optional items of Problems 2 and 6 and Optional Problem 11 are separate optional exercises, as the intro says.
- Points: MIT's 3, 6, 9 (3+3+3), 3, 3, 7.5 (3+1.5+3), 6 (3+3), 3, 1.5, 3 kept; the intro states which splits are the page's own and that the 3 points for name and staple are left out. Correct.
- MIT `at=` citations (Eqs. 1.1, 2.1, 2.2 on p. 1; 3.1, 3.2 on p. 1; 5.1 to 5.3 and 6.1, 6.2 on p. 2; 7.1, 7.2, 10.1 on p. 3; problem pages) all correct. Note for the caller: the brief says MIT's PDF has no printed page numbers, but its pages do carry printed numbers 1, 2, 3 at the foot; they equal the PDF page numbers, so the citations are right either way.
- Lecture-slide citations checked on the slide images: L2 slides 10 (r′ = r − vt, t′ = t) and 12 (u′ = u − v); L3 slides 7, 9, 16 (t∥ = (2L∥/c)γ², t⊥ = (2L⊥/c)γ), 17 (11 m, 30 km/s, 500 nm, 0.01λ); L4 slides 15 (γ), 16 (Lorentz matrix, order x, y, z, ct), 18 (Λ(v)⁻¹ = Λ(−v) and velocity addition from S′ to S), 21 (aberration); L5 slides 4 (Δt′ = γΔt), 13 (L′ = L/γ), 20 (XᵗηX invariant, proof line). All correct, including the "frames exchanged" notes.
- Slide 9 x′ = x + vt: handled (the page uses the lesson's x′ = x − vt, the K mistake hint names the other convention, and the `at=` notes mention the slide's convention and the 2v/c typo; see row 4). Slide 17 γ ≈ 1 + (v/c)²: not repeated anywhere; the page uses γ − 1 ≈ ½β² throughout (row 5).
- Claims about lessons checked: the lesson speed-of-light-michelson-morley uses x′ = x − vt and gives the transformed equation with +2v/c²; lorentz-transformation has the velocity addition (slide 18) and the aberration formula (slide 21); time-dilation-length-contraction exists and is linked. All four prerequisite slugs exist.

## Licensing
- No figure reproduced or redrawn: MIT's Problem 6 refers to Resnick Fig. 1-9; the page describes the arrangement in words only. Slides' "Figures by MIT OCW" and "Image courtesy of Wikipedia" items are not used.
- No "All rights reserved" material in ps2.pdf; no OpenStax or LibreTexts material; Resnick & Halliday and French are named only as MIT's sources, not used.
- Wording: statements are rewritten in the page's own words, with the exception of Problem 9 (row 2). Short phrases kept from MIT ("What is the essential difference between the two situations?" in 3(c); "Take 0.1 nm as the diameter of a typical atom" in 4) are short and acceptable (info).

## Notes
- No `## Summary` with answers; no em dashes (count 0).
- Symbols: the page-scoped meanings in the worktree's data/symbols.json fit their uses (K in s/m is correct for 2v/c²; E_z in V/m; θ, s, x, y, v, u, L with their several uses listed). Uncertain: whether the scanner reads the transpose superscript in Xᵗ, Λᵗ as the letter t; if it does, the page's t meaning ("the time, as measured in S") does not cover it and could add "as a superscript, the transpose". I did not run content:check.
- The 6(a) and 6(c) discussion of which way the tube tilts (forward, toward the motion) and the light's velocity (−v, −c/γ) in the astronomer's frame are correct.

COUNTS: errors=0 warnings=3 info=10

## Resolution (2026-11-21, by the page author)

- Row 1 (warning): Problem 1(a) now gives the general solution as f(x − Vt) + g(x + Vt) with two independent shapes and notes that slide 7 writes it with a single f; 1(b) says "a sum of two shapes, one moving each way". A page-scoped meaning for g was added to data/symbols.json.
- Row 2 (warning): the statement of Problem 9 is rewritten in our own words; the calcs entry `p9-given` quotes the new sentence.
- Row 3 (warning): Problem 5(a) now says that MIT's sheet prints both series for checking and that here they are in the solution.
- Row 4 (info): the `at=` note of "Wave equation after a Galilean boost" now names the sign convention of slide 9.
- Row 5 (info): the `at=` note of "The time difference Michelson and Morley looked for" now names the slide 17 slip (γ ≈ 1 + (v/c)² for 1 + ½(v/c)²).
- Row 6 (info): Problem 11(b) says that its last question is MIT's part (c).
- Row 7 (info): no change.
- Row 8 (info): the "Classical aberration" citation now says the middle step is ours.
- Problem 10 boxes (info): the statement now says to type γ as `g`, not as its formula in β.
- Transpose (note): the page-scoped meaning of t now also covers the superscript t of Xᵗ and Λᵗ (the transpose).
- Hints of 2(b) and 11(a) (info): left as they are.
- `status: reviewed` set. content:check, calc:test -k 8-033-problem-set-2 and test:answers pass.

