---
page: content/year-1/8.02/8-02-problem-set-3.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving03/ (read: PDF text, footers Solving3-1 to Solving3-6)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte4gauss_law/ (read: PDF text; printed page = PDF page - 1, checked; pp. 36 and 38 rendered for Figures 4.10.1 and 4.10.2)
verdict: pass-with-notes
---

# Review: Problem Set 3: Gauss's law and conductors

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: the blind answers below were written into this file from the stripped statements, Problem Solving 3 and Chapter 4 only, before the full page, its calcs file or symbols were opened.

## Blind solve

My answers (from the stripped statements, MIT Problem Solving 3 and Chapter 4 only; checked with sympy):

- P1a cylindrical symmetry (about the common axis). P1b radial, away from/towards the axis; constant on coaxial cylinders. P1c 3 regions. P1d coaxial cylinder of radius r, length l; variable r (0<r<a, a<r<b, r>b).
- P1e Phi = 2 pi r l E. P1f q_in = Q r^2 l/(a^2 L). P1g E = Q r/(2 pi eps0 a^2 L). P1h E = Q/(2 pi eps0 L r).
- P1i rises linearly from 0 to its maximum at r=a, falls as 1/r to r=b, jumps to 0 and stays 0 for r>b.
- P1j V(a)-V(0) = -Q/(4 pi eps0 L). P1k V(b)-V(a) = -Q ln(b/a)/(2 pi eps0 L). P1l -49.9 V (-49.86).
- P2a rho R/(3 eps0). P2b uniform, along +y (from big-sphere centre towards the hollow's centre) for rho>0.
- P3a E_z = rho0 (z-a)/eps0 (0<z<a); E_z = -rho0 (z+a)/eps0 (-a<z<0); 0 for |z|>a. P3b V(P1)-V(P2) = +rho0 a^2/eps0.
- P4a E_in = beta r^2/(4 eps0); E_out = beta R^4/(4 eps0 r^2). P4b V(r) = beta(4R^3 - r^3)/(12 eps0). P4c U = pi beta^2 R^7/(7 eps0) (checked also by field energy). P4d V(0)-V(r) = beta r^3/(12 eps0).
- P5a E_x = rho x/eps0. P5b E_x = rho d/(2 eps0).
- P6 U = 3Q^2/(20 pi eps0 R).
- P7a E_z = 10 z V/m. P7b +10 V/m. P7c -10 V/m. P7d slab -1 m<z<1 m, rho0 = 10 eps0 = +8.85e-11 C/m^3.
- P8a (i) +2.0 nC (ii) +3.0 nC (iii) 2.70e3 N/C (2697.5). P8b q_small = 4.0 nC; E1/E2 = 3.
- P9a No: only the net charge in it is zero (equal + and - charges may sit there, as inside a metal). P9b field of +q spread on the outer surface of the pipe as for an isolated charged conductor, independent of where q is inside; perpendicular at the surface. P9c the smaller sphere (radius a).

### Comparison (one line per answer id)

Each formula box was compared with my answer at 2000 random points of its `vars` (script in the reviewer's scratch folder): the largest relative difference is 0 for every formula box.

- p1-a cylindrical: agrees. p1-b radial, constant on coaxial cylinders: agrees. p1-c 3: agrees. p1-d coaxial cylinder, variable r: agrees.
- p1-e 2 pi r l E: agrees. p1-f Q r^2 l/(a^2 L): agrees. p1-g Q r/(2 pi eps0 a^2 L): agrees. p1-h Q/(2 pi eps0 L r): agrees.
- p1-i linear rise, 1/r fall, zero beyond b: agrees. p1-j -Q/(4 pi eps0 L): agrees. p1-k -Q ln(b/a)/(2 pi eps0 L): agrees. p1-l -49.9 V: agrees (-49.86 with eps0 = 8.85e-12).
- p2-a rho R/(3 eps0): agrees. p2-b uniform along +y: agrees.
- p3-a1 rho0 (z-a)/eps0: agrees. p3-a2 -rho0 (z+a)/eps0: agrees. p3-a3 zero both sides: agrees. p3-b +rho0 a^2/eps0: agrees.
- p4-a1 beta r^2/(4 eps0): agrees. p4-a2 beta R^4/(4 eps0 r^2): agrees. p4-b beta(4R^3 - r^3)/(12 eps0): agrees. p4-c pi beta^2 R^7/(7 eps0): agrees. p4-d beta r^3/(12 eps0): agrees.
- p5-a rho x/eps0: agrees. p5-b rho d/(2 eps0): agrees.
- p6-a 3Q^2/(20 pi eps0 R): agrees.
- p7-a 10 z: agrees. p7-b 10: agrees. p7-c -10: agrees. p7-d1 -1 m < z < 1 m: agrees. p7-d2 8.85e-11: agrees.
- p8-a1 2.0: agrees. p8-a2 3.0: agrees. p8-a3 2.70e3 (2697.5): agrees. p8-b1 4.0: agrees. p8-b2 3: agrees.
- p9-a no net charge, both signs allowed: agrees. p9-b not zero, independent of where q sits: agrees. p9-c smaller sphere: agrees.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 4(b) statement | 4.10.3(b): find the potential everywhere, inside and outside | Asks only for V inside and hands over the outside potential "of a point charge Q = πβR⁴"; since (a) and (b) are shown together, this gives away the total charge that p4-a2 needs (E_out = Q/(4πε₀r²)) | Drop "(Outside, the potential is that of a point charge Q = πβR⁴.)" and say in the solution that outside V = Q/(4πε₀r); or keep it but without the value of Q, and say MIT also asks for the outside potential |
| 2 | warning | Problem 3, second hint (and first) | (no hint in the notes) | "one face outside the slabs, where the field is zero"; hint 1 ends "Add the fields of the two slabs ... above and below both" | Hint 2 states the answer of p3-a3 outright. Rewrite: "Use a pillbox with one face outside both slabs; first find the field there (hint 1), then put the other face at height z." |
| 3 | info | Problem 5(b) | 4.10.4(b) asks for |x| > d/2 | Box asks for x > d/2 only; the solution gives both sides | Fine as is; optionally say "(the other side follows by symmetry)" in the statement |
| 4 | info | Problem 2(b), correct choice | ρ's sign not given | "is uniform ... along +y" | Add "(for ρ > 0)" to the choice, as the solution already does |

All other checks of fidelity pass: Problem 1 keeps the session's Steps 1 to 8, then the penultimate and final questions, in MIT's order (Solving3-1 to 3-4); Problems 2 to 7 are 4.10.1 to 4.10.6 in order with the same physics; Problem 9 is Conceptual Questions 1, 3 and 4 (p. 36). None of these is a Solved Problem (Section 4.8, pp. 30 to 35). Problem 8 carries no `mit=` attribute and says it is our own, built on Example 4.5 (pp. 17 and 18) and the two spheres on a wire (pp. 20 and 21, Eqs. (4.3.9) and (4.3.11)): all verified. No problem is reused from Sets 1 or 2 (their sources are Problem Solving 1 and 2; grep found no Chapter 4 problem in them). The lessons gauss-law and conductors-and-capacitors use none of these problems as worked examples (gauss-law leaves the slides' thick slab "for the problem pages").

Slip notes, all verified against the sources:
- Step 4's "case a) or case b) above": the sheet indeed prints no cases a) and b) (Solving3-1); the notes' Section 4.2 steps (pp. 6 and 7) and Section 4.7 table have none either. The page's reading is reasonable and marked as its own.
- 4.10.3(d) says "the center of the cylinder" (p. 37): a slip for the sphere, as the page says.
- 4.10.3's constant is called a in the notes (ρ = ar): renamed β on the page, and said so.
- 4.10.2(b) asks only for "the potential difference between" P₁ and P₂: the page fixes the sign convention V(P₁) − V(P₂) and says so.
- 9(b): the notes do not say the pipe is uncharged; the page states the assumption.

Citations checked (printed pages): Eq. (4.2.5) p. 4; steps of Section 4.2 pp. 6 and 7; V_B − V_A = −∫E·ds on p. 19 (Example 4.6, also unnumbered on p. 16); Section 4.3 pp. 14 to 17; Eq. (4.3.3) p. 17; Eq. (4.3.6) p. 20; Eq. (4.3.7) p. 20; Example 4.5 pp. 17 and 18; Example 4.6 p. 19 (V = k_eQ/a on p. 19); Eq. (4.3.9) p. 20; Eq. (4.3.11) p. 21; 4.10.1 p. 36; 4.10.2 pp. 36 and 37 (density display on p. 37); 4.10.3 and 4.10.4 p. 37; 4.10.5 and 4.10.6 p. 38; Conceptual Questions p. 36; session density p. 2, Steps 5 to 7 p. 3, Step 8 and the last two questions p. 4. All correct.

## Arithmetic and answer checks
- All derived closed forms recomputed with sympy (blind) and matched by value; p4-c also checked by the field-energy route (πβ²R⁷/(56ε₀) inside + πβ²R⁷/(8ε₀) outside = πβ²R⁷/(7ε₀)); p6 by the ratio 3/20.
- Numbers: p1-l −Q ln4/(2πε₀L) = −49.86 V → −49.9 (the number the brief asked about is right); ln 4 = 1.386 ≈ 1.39; 2k_eQ/L = 35.96 ≈ 36; k_e = 8.99 × 10⁹; p7-d2 10ε₀ = 8.85 × 10⁻¹¹ C/m³; p8-a3 2697.5 → 2.70 × 10³ N/C; σ = 2.39 × 10⁻⁸ C/m², σ/ε₀ = 2.70 × 10³; p8-b1 4.0 nC, q₂ = 12 nC; p8-b2 3. All correct.
- calcs file: `pytest tests/calc -k 8-02-problem-set-3` in the worktree: 177 passed. `shown:` strings match the page text.
- `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Every `mistakes` formula is finite over its `vars` and different from the answer (minimum relative separation over 2000 samples printed per box). Each hint is true of its formula: checked p1-e (volume), p1-g (uniform ball Qr/(4πε₀a³)), p1-k (field frozen at a), p2-a (2ρR/(3ε₀) = field at the big sphere's surface), p4-a1 (uniform ball of density βr), p4-a2 (uniform ball of density βR gives βR⁴/(3ε₀r²)), p4-c (outside field energy πβ²R⁷/(8ε₀); QV(R) = πβ²R⁷/(4ε₀)), p6 (shell Q²/(8πε₀R)), all right.
- info: p1-e mistake πr²ℓE equals the answer at r = 2 (the edge of r's range); p1-h mistake Q/(4πε₀r²) equals the answer wherever L = 2r, which lies inside the ranges (L 5 to 6, r 2.5 to 3). Harmless for the checker (formulas differ over most of the range), but narrower ranges (p1-e r: [0.1, 1.5]; p1-h L: [8, 20]) keep them apart everywhere.
- Every number box has an explicit `tolerance` (p1-c "0.1", the others "2%").
- warning: "How to answer" says "(for a whole number, within 0.1 of it)", but p7-b (10), p7-c (−10) and p8-b2 (3) are whole numbers with `tolerance="2%"` (±0.2, ±0.2, ±0.06). Only p1-c uses 0.1. Fix: write "(for the number of regions in Problem 1(c), a count, within 0.1)".
- Choice boxes: right answers at positions 2, 1, 1, 0, 3, 2, 1, 2, 3, 1; none clearly the longest or shortest (p9-c's right choice is shortest at 39 characters against 44, 56, 58: borderline, info).
- Every solution ends with a check (units, a limit, a second route or a number). There are no "show that" or sketch steps without a box: Step 8's graph is a choice box (p1-i).

## Coverage and order
- Session: all of Steps 1 to 8 and both closing questions are present, in order; 1(l) is a marked addition.
- Chapter 4: all six Additional Problems in order; Conceptual Questions 1, 3, 4 (2 left out, a "why" question with no checkable answer: fine). 4.10.3(b) outside part dropped (see table, row 1).
- `lecture: 9`, `covers: [5, 7]`, `order: 90`, readings and `source.url` follow the TASKS.md plan for Set 3. Intro says MIT's homework is not on OCW and where each problem comes from; "How to answer" says the points are ours. Points add up: 30+6+12+15+8+5+10+8+6 = 100, and every part split adds up.
- info (not this page's file): `_course.json` syllabus entry for lecture 9 has the url of the Chapter 4 notes, not `resources/solving03/`.

## Licensing
- Neither Problem Solving 3 nor Chapter 4 carries "rights reserved" or "courtesy" notices (grep of both texts). Figures 4.10.1 and 4.10.2 are described in words, not redrawn; the descriptions match the rendered figures (hollow centred on +y at distance R, touching the big sphere's top; linear pieces through (±1 m, 10 V) and (±2 m, 0)). The only graph is generated from the page's formulas. The text is rewritten; no copied sentences found beyond standard terms. No OpenStax or LibreTexts material.

## Notes
- Symbols (page-scoped meanings for 8-02-problem-set-3 exist for every letter, `content:check` clean), but three uses are not covered by their meaning:
  - warning: A in "What you need", V_B − V_A = −∫_A^B E·ds, is the start point of a path; the scoped meaning of A says only "area of a face of a pillbox; dA". Fix: add "or the starting point of a path (from A to B)".
  - warning: Q in Problem 8(a)'s solution ("in the notes' words, Q + q") is the conductor's net charge; the Q meaning lists only Problems 1, 4, 6, 9. Fix: add "or the net charge of the hollow conductor (Problem 8, in the notes' notation)".
  - warning: a in Problem 4's statement ("The notes call the constant a") is the notes' density constant (C/m⁴), not a length; the a meaning lists lengths only. Fix: add "in Problem 4, the notes' name for the constant β".
  - info: d meaning says "thickness of the slab (Problem 5)", but Problem 7's check also uses d = 2 m: add "and Problem 7's check".
- No em dashes on the page. Summary and intro give no answers. The "How to answer" examples (`rho*x^2/(4*eps0*R)`, `ln(3*x)`) match no answer.
- Claims about lessons checked: line field with λ = Q/L (gauss-law), σ/(2ε₀) for a plane (gauss-law, Eq. (4.2.19)), u_E = ½ε₀E² (conductors-and-capacitors, stored-energy section). All present.

COUNTS: errors=0 warnings=6 info=6

## Resolution (2026-11-28, by the page author)

- Warning 1: the note in 4(b) no longer gives Q; it says the notes also ask for the potential outside, which has no box, and the solution now gives V = Q/(4πε₀r) for r > R.
- Warning 2: the second hint of Problem 3 no longer says the field outside is zero; it says to find the field there first (hint 1).
- Warning 3: "How to answer" now says the 0.1 tolerance is for the count of regions in Problem 1(c).
- Warnings 4–6: the page meanings of A (start point of a path), Q (net charge of the hollow conductor, Problem 8) and a (the notes' name for β in Problem 4) now cover those uses.
- Info: the `vars` ranges of p1-e (r up to 1.5) and p1-h (L from 8) are narrowed, so no listed mistake equals the answer anywhere in the range. Other info items left as they are.
