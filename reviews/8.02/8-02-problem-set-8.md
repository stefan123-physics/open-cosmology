---
page: content/year-1/8.02/8-02-problem-set-8.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving07/ (read: local PDF solving07.pdf, text and rendered p. 2 figure)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha10faraday_law/ (read: local PDF, text; Figures 10.10.2, 10.11.1, 10.11.9 rendered; printed page numbers checked page by page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: local PDF, text; pp. 30 and 68 rendered)
verdict: needs-changes
---

# Review: Problem Set 8: Faraday's law, eddy currents, transformers and magnetic materials

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree reviewed: `.claude/worktrees/ps-802-8` (page, `calcs/8.02/8-02-problem-set-8.yaml`, page-scoped meanings in `data/symbols.json`). Scripts in the scratch folder: `rv8py/solve.py` (blind numbers, ODE checks), `rv8py/chk.py` (calcs `shown:` strings against the page, em dashes, listed mistakes over 2000 random points of each `vars` range).

## Blind solve

Written before opening the full page, from `stripped-set-8.mdx`, `solving07.pdf` (rendered p. 2 figure) and the course notes Chapters 9 and 10 (rendered Figures 10.10.2, 10.11.1, 10.11.9 and p. 68 of Chapter 9). Numbers from `rv8py/solve.py` (closed form, plus a numerical ODE integration for P1j and P2d).

My answers:
- p1a: V = dz/dt (z decreasing, V < 0).
- p1b: Φ_B = B w z.
- p1c: dΦ_B/dt = B w V, negative (V < 0).
- p1d: counterclockwise seen from the front (emf right-handed with A out of page, since dΦ/dt < 0).
- p1e: self-field out of the page inside the loop; it adds to the decreasing outward flux, i.e. tries to keep the flux from changing.
- p1f: I = B w v / R.
- p1g: F_z = +B² w² v / R (upward; on the top side, current along -y, F = I w (-ŷ) × B x̂ = +I w B ẑ; side forces cancel).
- p1h: v_t = m g R / (B² w²).
- p1i: m g v_t = I² R; (B w v_t/R)² R = B² w² v_t²/R = m g v_t holds with v_t above.
- p1j: v_t = 0.020·9.8·0.050/(0.64·0.01) = 1.531 m/s (ODE from rest: 1.5308 at t = 5 s).
- p2a: I = (ε − B ℓ v)/R.
- p2b: v_∞ = ε/(B ℓ).
- p2c: m dv/dt = I ℓ B = (ε − Bℓv)Bℓ/R gives v = v_∞(1 − e^{−t/τ}), τ = mR/(B²ℓ²).
- p2d: v_∞ = 15 m/s, τ = 0.500 s, t₉₀ = τ ln 10 = 1.151 s (ODE: 1.1513 s).
- p3a: ε = −π r² dB_z/dt (positive sense counterclockwise, rendered Figure 10.11.9: "+" arrow runs from the top round the left side, field out of page).
- p3b: −1.963 V (dB_z/dt = +2.5 T/s, area 0.7854 m²).
- p3c: +0.982 V (dB_z/dt = −1.25 T/s).
- p3d: clockwise seen from the front.
- p3e: E = (1.963²/20)(2 s) + (0.982²/20)(4 s) = 0.3855 + 0.1928 = 0.578 J.
- p4a: n = 8.518e28 m⁻³, M = n μ = 1.533e6 A/m.
- p4b: I = M h = 1533 A (dipole moment 0.4817 A m², area 3.1416e-4 m²).
- p4c: B₀ = μ₀ n I = 2.614 mT; ΔB = χ B₀ = 0.706 μT. (Rod magnetization 0.562 A/m.)
- p4d: the field inside would decrease slightly (χ_m < 0, B = (1+χ_m)B₀ < B₀).
- p5a: counterclockwise from above (same sense as A); the loops attract.
- p5b: clockwise from above (opposite to A); the loops repel.
- p5c: just before entering: force on the magnet opposite its velocity (repelled, pushed back); just after leaving: again opposite its velocity (attracted back toward the loop). Both oppose the motion.
- p5d: the whole loop stays inside the uniform field, so the flux through it does not change and the emf is zero.
- p5e: N₂ = 1840 · 5.0/230 = 40 turns.
- p5f: laminations break up the paths of eddy currents in the core, cutting the eddy currents and the heat they waste.

Source checks done during the blind solve:
- Session figure (p. 2, rendered at 300 dpi): the field region is the box above a horizontal line ("B zero" below and beside it); the loop's top side is in the field, the bottom side below the line; z(t) is the distance from the loop top to the line. The labels "l" and "z(t)" in MIT's sketch are placed awkwardly (the double arrow from loop top to line is the z(t) span, "l" is printed beside it), but the text defines z(t) unambiguously. The stripped statement matches.
- 9.13.13 (Ch. 9, p. 68, rendered): χ = 2.7×10⁻⁴ is printed clearly; with it ΔB = 0.706 μT and M = 0.562 A/m. The printed answers 0.86 μT and 0.68 A/m are consistent with each other (0.86e-6/μ₀ = 0.684 A/m) but imply χ ≈ 3.3×10⁻⁴, not 2.7×10⁻⁴. So the notes' answers do not match their own χ; the page's claim (if it makes it) is right.
- 9.13.9 printed answers: n 8.5e28, N 2.7e22, M 1.53e6 A/m, 0.48 A m², 1525 A. Exact value with the given data: 1533 A (1525 is the notes' rounding).

### Comparison (one line per answer id)

- p1-a: page V = dz/dt (choice 2) = mine. Agree.
- p1-b: page B*w*z = mine. Agree.
- p1-c: page B*w*V, negative = mine. Agree.
- p1-d: page counterclockwise (choice 2) = mine. Agree.
- p1-e: page out of the page, making up for lost outward flux (choice 1) = mine. Agree.
- p1-f: page B*w*v/R = mine. Agree.
- p1-g: page +B²w²v/R (up) = mine. Agree.
- p1-h: page m*g*R/(B^2*w^2) = mine. Agree.
- p1-i (self-marked): page m g v_t = I²R with the check = mine. Agree.
- p1-j: page 1.53 m/s (1%) vs mine 1.53125. Agree.
- p2-a: page (eps − B l v)/R = mine. Agree.
- p2-b: page eps/(B l) = mine. Agree.
- p2-c (self-marked): page derivation = mine. Agree.
- p2-d: page 1.15 s vs mine 1.1513 s. Agree.
- p3-a: page −πr² dBz/dt (choice 3) = mine. Agree.
- p3-b: page −1.963 V = mine. Agree.
- p3-c: page 0.982 V = mine. Agree.
- p3-d: page clockwise (choice 1) = mine. Agree.
- p3-e: page 0.578 J = mine 0.5783. Agree.
- p4-a: page 1.533e6 A/m = mine. Agree.
- p4-b: page 1533 A = mine. Agree.
- p4-c: page 0.706 μT = mine 0.7057. Agree.
- p4-d: page "falls slightly" (choice 0) = mine. Agree.
- p5-a: page counterclockwise, attract (choice 2) = mine. Agree.
- p5-b: page clockwise, repel (choice 0) = mine. Agree.
- p5-c: page against the motion both times (choice 3) = mine. Agree.
- p5-d: page loop wholly inside the field, flux constant (choice 1) = mine. Agree.
- p5-e: page 40 turns = mine. Agree.
- p5-f: page break up the eddy-current paths (choice 3) = mine. Agree.

No disagreement on any of the 29 answers.

## Differences from the MIT source

| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "How to answer", formula typing examples (line 34) | n/a | "for example `B*w*z` or `m*g*R/(B^2*w^2)`": these are exactly the answers of box p1-b and box p1-h | Replace with examples that answer no box, e.g. `a*b/c` or `x^2*y/(2*k)` |
| 2 | error | Problem 3(a), Formula "Emf of the loop", `at="Problem 10.11.9(a), p. 30 (our own solution)"` (line 601) | Part (a) of 10.11.9 is printed at the foot of p. 29 (rendered; parts (b) to (d) are on p. 30) | p. 30 | `at="Problem 10.11.9(a), p. 29 (our own solution)"` |
| 3 | warning | "What you need from the lessons", line 58, after the Formula B = (1 + χ_m)B₀ | n/a | "small and negative for a diamagnet": with B = (1 + χ_m)B₀ just above, this answers box p4-d (the field "falls slightly") before Problem 4; the p4-d hint only points back to it | Drop ", small and negative for a diamagnet" from line 58 (keep the paramagnet half), or turn p4-d into a question the preamble does not answer |
| 4 | info | Problem 1(g), second hint | n/a | "In the top side the counterclockwise current runs along −ŷ" states the answer of p1-d; a reader who opens (g)'s hints first gets (d) free | Optional: "In the top side, which way does the current of part (d) run? Then work out the cross product." |
| 5 | info | Problem 1 statement | Session sketch (p. 2, rendered at 300 dpi): field fills a box above a horizontal line ("B zero" below and beside); loop top inside, bottom below; MIT's labels "l" and "z(t)" are placed awkwardly (the double arrow from loop top to the line is the z(t) span) | Field above a horizontal line, top side in the field, z = height of the top side above the line, 0 < z < ℓ | None: matches MIT's text and figure |
| 6 | info | Problem 4(c), "A note on the notes" | 9.13.13 (p. 68, rendered): χ = 2.7 × 10⁻⁴ printed clearly; answers (a) 0.86 μT, (b) 0.68 A/m | Printed answers fit χ ≈ 3.3 × 10⁻⁴; with 2.7 × 10⁻⁴: 0.71 μT and 0.56 A/m | None: verified. B₀ = μ₀(1600)(1.3) = 2.614 mT; 0.86 μT/B₀ = 3.29 × 10⁻⁴; 0.68/(1600 × 1.3) = 3.27 × 10⁻⁴; ratios 0.86/0.706 = 1.22 and 0.68/0.562 = 1.21. The page's claim is correct |
| 7 | info | Intro, "MIT publishes no solutions for any of these" | The notes print short answers for 9.13.9 and 9.13.13 and partial answers for 10.11.9 | No solutions; the solutions quote the printed answers | Optional: "MIT publishes no worked solutions (the notes print a few short answers, which we quote)" |

## Arithmetic and answer checks

- Every number recomputed: p1-j 1.53125 m/s (ODE from rest reaches 1.5308 m/s); free-fall height for 1.53 m/s 11.96 cm ("12 cm" right); p2-d τ = 0.500 s, v∞ = 15 m/s, t₉₀ = τ ln 10 = 1.1513 s (ODE root 1.1513 s); p3 area 0.7854 m², emfs −1.9635 V and +0.9817 V, currents 98.2 mA and 49.1 mA, powers 192.8 mW and 48.2 mW (the notes' 192 mW = 1.96²/20, as the page says), heat 0.3855 + 0.1928 = 0.5783 J, and the rise/fall heat ratio 2 is right; p4 n = 8.518 × 10²⁸ m⁻³, N = 2.676 × 10²² atoms, M = 1.5333 × 10⁶ A/m, disc moment 0.4817 A m², I = 1533 A (notes 1525 A, 0.5% off, as the page says), B₀ = 2.614 mT, ΔB = 0.7057 μT, M_rod = 0.5616 A/m; p5-e 40 turns. All agree with the page.
- Points: Problem 1 = 32 (3+4+4+3+3+3+4+4+2+2), Problems 2, 3, 5 = 18 each, Problem 4 = 14; total 100.
- Formula boxes: each listed mistake evaluated at 2000 random points of its `vars` ranges: all finite; smallest relative difference from the answer 1.7% (p2-a, eps/R), all others ≥ 3% (p2-a, plus sign) and mostly ≥ 40%. p2-a ranges keep ε − Bℓv ≥ 0.4 > 0 (bar below terminal speed, physical); p1-b keeps z < ℓ; p1-c keeps V < 0. Every mistake hint is true of its formula.
- Number tolerances (1%) accept 3-figure answers (−1.96, 0.982, 1.15, 1.53, 0.706) and reject the sign slip of p3-b/c, the notes' 0.86 μT, and 1.5e6 for p4-a.
- Choice boxes: right positions 2, 2, 1, 3, 1, 0, 2, 0, 3, 1, 3 (varied); the right choice is the longest only in p1-e and p5-f; none answerable from units alone. Every Lenz-law direction verified by hand: p1-d CCW (A out, dΦ/dt < 0, ε > 0); p1-e self-field out; p1-g force +ẑ ((−ŷ) × x̂ = +ẑ); p3-d clockwise (Figure 10.11.9 rendered at 400 dpi: field out of the page, "+" arrow running counterclockwise, so ε < 0 while B_z rises); p5-a CCW and attract; p5-b CW and repel; p5-c against the motion both times.
- calcs: every `shown:` string occurs verbatim in the page (script, none missing); each `answer:` entry matches its box; formula identities use independent routes (integration, numerical derivative, component cross product, numerical root).

## Coverage and order

- Problem 1 follows the session's Questions 1 to 10 in MIT's order (Q9 and Q10 joined in self-marked part (i)); part (j) marked "(our addition)", numbers "our choice".
- Problem 2 = Additional Problem 10.11.1 (p. 25; Figure 10.11.1 rendered: battery across one end, B out of page); (a), (b), (d) marked as additions, numbers "our choice".
- Problem 3 = Additional Problem 10.11.9 (pp. 29–30); (b)–(d) turn MIT's plots into values and a direction; (e) marked "(our addition)".
- Problem 4 = 9.13.9 (p. 66; notes' (a)–(c) folded into (a), (d) into (b)) and 9.13.13(a) (p. 68); (d) marked "(our addition)".
- Problem 5 = Conceptual Questions 2 and 4 (p. 24) and 10.11.7(c),(d) (p. 28); (e), (f) marked "(our addition)". No Solved Problem is used.
- Citations checked against printed page numbers: Eqs. (10.1.2), (10.1.4) p. 2, Eq. (10.2.4) p. 7, Section 10.5 laminations p. 13, Eq. (9.1.2) p. 2, Eq. (9.6.1) p. 28, Eq. (9.6.4) p. 29, Eqs. (9.6.7)–(9.6.9) p. 30, Eq. (9.6.12) p. 32, session Faraday's law p. 1, three causes p. 2, Questions 2, 3, 6, 7, 8, 9 on pp. 2, 3, 3, 4, 4, 4; 10.11.11 p. 30. All correct except row 2.

## Licensing

- `grep -il "rights reserved\|courtesy"` on the solving07, Chapter 9 and Chapter 10 texts: no hits. No MIT figure is redrawn; figures are described in words and match the rendered originals. No em dashes, no OpenStax, no `## Summary`. Wording is the page's own.

## Notes

- Symbols: 42 page-scoped meanings; all fit and none gives an answer away. ℓ has no page-scoped meaning and falls back to the general "A length or distance; ℓ_p is a physical distance and ℓ_c a comoving one", which fits but carries a cosmology clause (optional page-scoped meaning; not counted).
- `summary` names topics only.
- Not run: `npm run content:check`, `calc:test`, `test:answers`.

COUNTS: errors=2 warnings=1 info=4

## Resolution (2026-11-28, by the page author)

- Error 1 (typing examples were answers): "How to answer" now uses `a*b/c` and `x^2*y/(2*k)`.
- Error 2 (citation page): the Problem 3(a) formula now cites p. 29.
- Warning 3 (preamble answered p4-d): the sentence now says only that χ_m is a small number for para- and diamagnets.
- Info: the second hint of 1(g) no longer states the answer of (d); the intro now says MIT publishes no worked solutions (the notes print only a few final numbers); ℓ has a meaning scoped to this page. Other info items: no change.

Status set to `reviewed`.
