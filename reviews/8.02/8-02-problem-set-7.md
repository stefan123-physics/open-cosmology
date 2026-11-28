---
page: content/year-1/8.02/8-02-problem-set-7.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving06/ (read: solving06.pdf, text and rendered pp. 1 and 4; footers Solving6-1 to 6-7 checked page by page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: Sections 9.1, 9.5, 9.6, Additional Problems 9.13.1 to 9.13.12; Figure 9.13.5 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read: Section 8.4, p. 8 rendered)
verdict: pass-with-notes
---

# Review: Problem Set 7: the Biot–Savart law, magnetic dipoles and Ampère's law

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

Written from `stripped-set-7.mdx`, `solving06.pdf` and `ch9sourc_b_field.pdf` only, before the full page was opened. Numbers by Python (scratch `rv7py/solve.py`), each by a second route (superposition sum, numeric derivative, ring sum).

### My answers
- p1a: J = I / (π(b² − a²))
- p1b: I_enc = I (r² − a²)/(b² − a²)
- p1c: B = μ0 I (r² − a²) / (2π r (b² − a²))
- p1d: B = 0
- p1e: B = μ0 I/(2π r)
- p1f: B continuous at r = a (0) and r = b (μ0 I/(2πb)); slope NOT continuous at either: at a, 0 inside vs μ0 I/(π(b²−a²)) just outside; at b, μ0 I(1 + a²/b²)/(2π(b²−a²)) > 0 inside vs −μ0 I/(2πb²) outside.
- p1g: |B| = μ0 I (b² − r²) / (2π r (b² − a²)) (net enclosed current −I(b²−r²)/(b²−a²), so the field circles the other way; checked at r = 1.5, a = 1, b = 2).
- p2a: B = 0 (symmetry).
- p2b: rectangular loop in the xy plane, sides ℓ along x, one long side at y = 0 (where B = 0) and the other at height y > d/2 (MIT's hint "we have from Question 9 the field at y = 0"); the symmetric loop from −y to +y also works but then I_enc = Jℓd.
- p2c: for the loop from 0 to y: I_enc = J ℓ d/2 (symmetric loop: J ℓ d). Ambiguous unless part (b) fixes the loop.
- p2d: B_x = −μ0 J d/2 (current along +z, above the slab B points along −x; checked by summing current sheets).
- p2e: B_x = −μ0 J y.
- p2f: μ0 J d/2 = 6.28 mT.
- p3a: |B| = 2 μ0 I/(π a) (each wire μ0 I/(√2 π a); vector sum checked numerically).
- p3b: along −y, i.e. straight down the page, from the CD side towards the AB side (parallel to the sides DA and CB).
- p4a: dI = σ ω r dr, dB = μ0 dI/(2r), B = μ0 σ ω R/2.
- p4b: ω = 100π rad/s = 314.16 rad/s; B = 39.5 pT.
- p4c: μ = ∫ π r² σ ω r dr = π σ ω R⁴/4.
- p5a: μ = M π (D/2)² L = 2.42 × 10⁻² A m².
- p5b: B = μ0 · 2μ/(4π z³) = 4.84 nT (MIT prints 4.8 × 10⁻⁹ T; exact field of a uniformly magnetized cylinder 4.84 nT).
- p5c: F_z = μ dB_z/dz = −3 μ0 μ²/(2π z⁴) (attractive).
- p5d: the force reverses sign (repulsion), same size 3 μ0 μ²/(2π z⁴).

### Comparison (one line per answer id)
- p1-a: page `I/(pi*(b^2 - a^2))` = mine. Agree.
- p1-b: page `I*(r^2 - a^2)/(b^2 - a^2)` = mine. Agree.
- p1-c: page `mu0*I*(r^2 - a^2)/(2*pi*r*(b^2 - a^2))` = mine. Agree.
- p1-d: page choice 0 "zero everywhere" = mine. Agree.
- p1-e: page `mu0*I/(2*pi*r)` = mine. Agree.
- p1-f: page choice 1 (continuous at both radii, slope jumps at both) = mine; the page's slopes 2k at a, k(1 + a²/b²) and −μ0I/2πb² at b agree with my numeric derivatives (a = 1, b = 2, units μ0I: 0.1061, 0.0663, −0.0398). Agree.
- p1-g: page `mu0*I*(b^2 - r^2)/(2*pi*r*(b^2 - a^2))` = mine (equal at r = 1.5, a = 1, b = 2: 0.06189). Agree.
- p2-a: page choice 2 "zero" = mine. Agree.
- p2-b: page choice 3, the rectangle from −y to +y. Mine: that or the 0-to-y rectangle MIT's hint points to. Choice 3 is the only correct option offered; see W2.
- p2-c: page `J*l*d` (symmetric loop) = mine for that loop. Agree given part (b).
- p2-d: page `-mu0*J*d/2` = mine. Agree.
- p2-e: page `-mu0*J*y` = mine. Agree.
- p2-f: page 6.28 mT = mine (6.2832). Agree.
- p3-a: page `2*mu0*I/(pi*a)` = mine (8.000e-7 T for I = 1 A, a = 1 m by coordinate sum). Agree.
- p3-b: page choice 2 "downwards, from side CD towards side AB" = mine (−y). Agree.
- p4-a (show-that, no box): page route and result = mine. Agree.
- p4-b: page 39.5 pT = mine (39.478). Agree.
- p4-c: page `pi*sigma*omega*R^4/4` = mine. Agree.
- p5-a: page 0.02418 A m² = mine (0.024176). Agree.
- p5-b: page 4.84 nT = mine (4.835; exact cylinder 4.841). Agree.
- p5-c: page `-3*mu0*mu^2/(2*pi*z^4)` = mine (numeric derivative at z = 0.7 agrees to 1e-10 relative). Agree.
- p5-d: page choice 1 "reverses, same size" = mine. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Intro, last sentence | Additional Problem 9.13.11 prints its answers "[Ans: (a) 2.42e-2 A m², (b) 4.8e-9 T]" (p. 67); 9.13.5 states its result | "MIT publishes no solutions for either, so the hints and the solutions here are our own." (the page itself later says "The notes give the same value") | "MIT publishes no worked solutions for either (the notes print only the final numbers of Problem 9.13.11), so the hints and the solutions here are our own." |
| W2 | warning | Problem 2(b), (c) | Session p. 5: for y > d/2 "we have from the answer to Question 9 the magnetic field at y = 0. Therefore it makes sense to take what Amperian loop": MIT steers to a rectangle with one side on y = 0 (enclosing Jℓd/2) | Part (b)'s only correct choice is the symmetric rectangle from −y to +y; MIT's 0-to-y rectangle is not offered, and in (c) the mistake `J*l*d/2` is told "The loop reaches from below the slab to above it", which is false for MIT's loop. Physics right, but differs from MIT's route without saying so | Add to the (b) solution: "MIT's hint points to a rectangle from y = 0 to y, which works too (it encloses Jℓd/2 and only its top side contributes); we use the symmetric one." Or make the 0-to-y rectangle the (b) answer and p2-c `J*l*d/2` with mistake `J*l*d`. |
| I1 | info | "What you need", recipe step (1) | Session p. 1: "(1) Draw the Amperian loop." | "(1) draw an Amperian loop on which B is constant and along the loop, or perpendicular to it, or zero" | Fine as teaching (it is Section 9.10.2's advice); optional. |
| I2 | info | "Field of a long straight wire" | Eq. (9.1.7) uses the distance a | uses r | None needed (notation only). |

## Arithmetic and answer checks
- All formula answers re-derived blind and by an independent route (Python, scratch `rv7py/solve.py`): tube by Ampère's law and numeric slopes, slab by summing current sheets, square by a coordinate sum of four wire fields, disc by a ring integral, magnet force by numeric differentiation. All agree with the page.
- Numbers: 6.283 mT; ω = 314.16 rad/s; 39.48 pT; V = 4.562e-6 m³; μ = 2.418e-2 A m²; 4.835 nT; |F| at 1 m = 3.508e-10 N; ratios 125.7 ("more than a hundred"), 1.27e6 ("more than a million"), 1.03e4 ("about ten thousand"); "at 10 cm ten thousand times larger" (10⁴). All correct.
- Worktree `pytest tests/calc -k 8-02-problem-set-7`: 114 passed. Every calcs `shown:` string found verbatim in the page (script). `npm run content:check` in the worktree: 0 errors (only "no review file yet" for this page).
- Plots: tube curve `(u^2-0.25)/(0.75u)` is B in units μ0I/2πb for a = b/2 (peak 1 at u = 1); slab curve in units μ0Jd (±0.5 outside). Both correct.
- Listed mistakes, 20 000 random points each over the `vars` ranges: all finite. Smallest relative distance from the answer: p1-a 6.3%, p1-b 2.4%, p1-c 2.4%, p1-g 9.6%, p2-e 26%, p3-a 29%, p4-c 36%, others ≥ 50%. Two touch the answer:
  - **W3 (warning)** p5-c: mistake `-mu0*mu^2/(2*pi*z^3)` equals the answer `-3*mu0*mu^2/(2*pi*z^4)` exactly at z = 3, inside `z: [2, 5]` (min distance found 1e-5). Fix: `z: [3.5, 6]`.
  - **I3 (info)** p2-c: mistake `J*d` equals `J*l*d` at l = 1, the lower end of `l: [1, 3]` (min distance 0.02%). Fix: `l: [1.5, 3]`.
- Every mistake hint is true of its formula (each checked, e.g. p3-a `sqrt(2)…` = distance a instead of a/√2 with components; `2*sqrt(2)…` = four sizes added; p4-c `R^4/2` = all charge at the rim; p5-c `z^3` = U = −μB).
- Number tolerances 1%: accept 3-figure answers. Fine.
- Choice boxes: right positions 0, 1, 2, 3, 2, 1 (varied); none answerable from units.
  - **W4 (warning)** p2-b: the right choice (3) is by far the longest and the only one with dimensions, and it alone introduces ℓ, which part (c)'s statement then uses ("in terms of J, ℓ and d"), so (c) gives (b) away. Fix: give every choice comparable detail (e.g. "a rectangle with sides ℓ along x and z, lying flat at height y", "a rectangle with sides ℓ along y and z") or name ℓ in (c) itself ("for a loop of length ℓ along x"). Also p1-f (choice 1) and p2-a (choice 2) are the longest of their lists; shorten, e.g. p1-f "B is continuous at both radii; its slope jumps at both", p2-a "zero, by symmetry".
- No hint gives a result away (p2-d hint 2 and p5-c hint 1 give the method only).
- Points: 30 + 25 + 13 + 14 + 18 = 100; parts add up in every exercise.

## Coverage and order
- Problem 1 follows the session's Example 1, Questions 1 to 8, in order (J, I_enc, the Question 3 check, line integral, B in the copper, r < a, r > b, plot); (f) continuity and (g) the reversed axial wire are parts (d) and (e) of notes 9.13.2, as the page says. (g) asks for a formula where the notes ask only for a rough sketch: said on the page.
- Problem 2 follows Example 2, Questions 9 to 18, in order; (f) is marked "(our addition)". MIT's "centre of the loop" slip and the "answer in Question 3" (for Question 2) slip are noted correctly.
- Problems 3 (9.13.6), 4 (9.13.5) and 5 (9.13.11) are Additional Problems, not Solved Problems; additions (4b, 4c, 5c, 5d) marked "(our addition)". Figure 9.13.5 (rendered) matches the page's description: A bottom right and D top right out of the page, B bottom left and C top left into it.
- Nothing from the session is left out. The slab is also Example 9.4 in the notes and in the ampere-law lesson; using it here comes from the session, which is allowed.
- `summary` names topics only.

## Citations
- Session: Ampère's law p. 1; Questions 1, 2 p. 2; Questions 4, 5, 7 p. 3; Question 12 p. 5; Question 13 p. 6; Question 17 p. 7: all match the printed footers Solving6-N.
- Chapter 9: Eq. (9.1.1) p. 2, (9.1.7) p. 5, (9.1.15) p. 8, (9.5.5) p. 24, (9.6.1) p. 28; 9.13.2(e) p. 63; 9.13.5 and 9.13.6 p. 64; 9.13.11 p. 67: all correct (PDF page = printed page + 1).
- Chapter 8: Eq. (8.4.8) μ = NIA p. 8 (rendered), Eq. (8.4.15) F = ∇(μ·B) p. 10: correct.

## Licensing
- No "All rights reserved" or "Courtesy of" in solving06, Chapter 8 or Chapter 9, none in the page. No OpenStax or LibreTexts. No MIT figure reproduced: graphs are generated Plots; the square of wires is described in words. Wording is the page's own; only standard phrases ("Amperian loop", "current density") shared.

## Symbols
- 29 page-scoped meanings for `8-02-problem-set-7`; every course-wide letter used (B, I, R, N, A, M, V, J, a, d, k, r, z, μ, σ, ω, μ0) has a meaning that fits and gives no answer away.
- **I4 (info)** `z` meaning reads "Position along the axis of a ring or of a magnet; the distance between the two magnets", but Problem 2 also uses z as the direction of the slab's current ("along $+z$"). Optionally add "; in Problem 2, the direction along the current".
- No em dashes, no control characters, no `## Summary`.

## Notes
- **I5 (info)** Problem 3(a) Check step: "Between two opposite currents the fields add": P lies above the midpoint of A and B, not between them; the y parts add while the x parts cancel. Optionally "Above the midpoint of two opposite currents, their fields add along y".
- Problem 5(d)'s remark on the torque-free but unstable antiparallel position is correct.

COUNTS: errors=0 warnings=4 info=5

## Resolution (2026-11-28, by the page author)

- W1: fixed. The intro now says MIT publishes no worked solutions for either, the notes printing only the final numbers of Problem 9.13.11.
- W2: fixed by following MIT. Part (b)'s right choice is now the rectangle from y = 0 to height y; its solution says why (B = 0 on the bottom side by part (a)) and that the symmetric rectangle from -y to +y works too. Part (c) is now `J*l*d/2`, with `J*l*d` listed as a mistake whose hint names the symmetric rectangle; part (d)'s hints, solution and the formula "Line integral around the rectangle" (now -B_x(y) ℓ) follow the new loop, with a new mistake `-mu0*J*d/4` (both sides counted) and a true hint for `-mu0*J*d`; part (e)'s hint refers to the same kind of rectangle. Calcs entries p2-Ienc-by-strips and p2-line-integral updated; p2-d, p2-e and p2-f unchanged (6.28 mT).
- W3: fixed. p5-c `z: [3.5, 6]`; the z^3 mistake equals the answer only at z = 3, outside the range; the other mistakes differ by constant factors.
- W4: fixed. p2-b choices all name ℓ and have comparable length and detail, and part (c) defines ℓ itself; p1-f right choice shortened ("B is continuous at both radii; its slope jumps at both") and its first choice lengthened; p2-a right choice shortened ("zero, because the fields of the upper and lower halves cancel").
- I1: kept (Section 9.10.2's advice, as the review notes).
- I2: kept (notation only).
- I3: fixed. p2-c `l: [1.5, 3]`; the mistake `J*d` was replaced by `J*d/2`, which equals the new answer only at l = 1, outside the range.
- I4: fixed. This page's `z` meaning now adds "In Problem 2, the direction of the current in the slab." (and its `ℓ` meaning now says "the sides of the rectangular Amperian loop along x").
- I5: fixed. "Above the midpoint of two opposite currents their fields add along y".
