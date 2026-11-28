---
page: content/year-1/8.02/8-02-problem-set-2.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/solving02/ (read: Problem Solving 2 PDF, pdftotext, pp. Solving2-1 to 2-6)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read: Chapter 2 PDF; printed page = PDF page minus 1, checked; p. 41 rendered for Figure 2.15.6)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (read: Chapter 3 PDF; printed page = PDF page minus 1, checked; p. 27 rendered for Figure 3.10.2)
verdict: pass-with-notes
---

# Review: Problem Set 2: fields of continuous charges and the electric potential

Writer: Opus. Reviewer: Opus (same model, blind).

Order kept: I read only the stripped statements and MIT's three texts, solved every part (sympy, scipy quad, exact fractions; script kept outside the repo), wrote "My answers" below into this file, and only then opened the full page, its calcs file and the symbols.

## Blind solve

### My answers (written before opening the full page)
- p1a sigma = Q/(2 pi R L); p1b lam = Q/L; p1c lam = 2 pi R sigma; p1d rho = Q/(pi R^2 L); p1e lam = pi R^2 rho.
- p2a E = ke*lam * int_0^L dx/(L+a-x)^2 (lam = Q/L); p2b E = ke Q/(a(L+a)); p2c -> ke Q/a^2.
- p3a f(x) = ke lam y/(x^2+y^2)^(3/2); p3b E_y = 2 ke lam L/(y sqrt(L^2+4y^2)); p3c -> ke Q/y^2.
- p4a E_z = (ke Q/h)[1/sqrt(R^2+(z-h)^2) - 1/sqrt(R^2+z^2)].
- p4b E_z = (2 ke Q/(R^2 h))[h - sqrt(z^2+R^2) + sqrt((z-h)^2+R^2)].
- p5a alpha in C/m^2; p5b V_A = ke alpha [L - d ln((L+d)/d)]; p5c V_B = ke alpha L ln[(L/2 + sqrt(L^2/4+b^2))/b] = ke alpha L asinh(L/(2b)).
- p6a E_x = 3 E0 a^3 x z/r^5, E_y = 3 E0 a^3 y z/r^5; p6b E_z = E0 - E0 a^3 (x^2+y^2-2z^2)/r^5.
- p7 (ke = 8.99e9): a W_field = -3.24 J; b W_ext = +3.24 J; c U0 = -5.39 J; d Uf = -2.16 J; e dU = +3.24 J.
- p8a 28 pairs; p8b U = (ke q^2/a)(12 + 6 sqrt2 + 4/sqrt3) ~ 22.79 ke q^2/a.
- p9a U = -65 ke Q^2/(8a); p9b E_x = -409 ke Q/(1125 a^2) ~ -0.3636 keQ/a^2, E_y = -8 ke Q/(125 a^2); p9c V = -ke Q/(15a); p9d F_x = -409 ke Q^2/(1125 a^2); p9e W = -ke Q^2/(15 a).
- p10a no; p10b V is energy per unit charge, U = qV is the energy of a particular charge; p10c any direction perpendicular to x (in the yz plane); p10d moving along an equipotential takes no work, so E . ds = 0 for every ds in the surface; p10e no: V is constant inside (equal to its surface value), not zero.

### Comparison (one line per answer id)
- p1-a Q/(2*pi*R*L): equal to mine.
- p1-b Q/L: equal.
- p1-c 2*pi*R*sigma: equal.
- p1-d Q/(pi*R^2*L): equal.
- p1-e pi*R^2*rho: equal.
- p2-a choice 2, k_e lam int_0^L dx/(L+a-x)^2: equal to mine.
- p2-b ke*Q/(a*(a+L)): equal (sympy).
- p2-c choice 0, k_e Q/a^2: equal.
- p3-a ke*lam*y/(x^2+y^2)^(3/2): equal.
- p3-b ke*lam*L/(y*sqrt(y^2+L^2/4)): equal to my 2 ke lam L/(y sqrt(L^2+4y^2)) (identical algebraically).
- p3-c choice 3, k_e Q/y^2: equal.
- p4-a: equal; numerical integral of ring fields at R=0.7, h=1.3, z=2.1 gives 0.3761283976, closed form 0.3761283976.
- p4-b: equal; numerical integral of disc fields 0.4691372658 vs closed form 0.4691372658. Far limits of both tend to k_eQ/z^2 (checked at z = 1000).
- p5-a choice 1, C/m^2: equal.
- p5-b ke*alpha*(L - d*log((L+d)/d)): equal (sympy; quad 0.5600988794 at L=1, d=0.3).
- p5-c ke*alpha*(L/2)*log((s+L/2)/(s-L/2)), s = sqrt(L^2/4+b^2): equal to my ke alpha L asinh(L/(2b)) (quad 1.0475930126, both closed forms 1.0475930126 at L=1, b=0.4).
- p6-a1, p6-a2, p6-b: equal (sympy, difference simplifies to 0).
- p7-a -3.24, p7-b 3.24, p7-c -5.39, p7-d -2.16, p7-e 3.24 (J): equal (k_e q1 q2 = -0.10788 J m; U0 = -5.394, Uf = -2.1576, dU = 3.2364).
- p8-a 28: equal. p8-b ke*q^2/a*(12+12/sqrt2+4/sqrt3) = 22.795 ke q^2/a: equal.
- p9-a -65 ke Q^2/(8a): equal. p9-b1 -409/1125, p9-b2 -8/125 (ke Q/a^2): equal (exact fractions). p9-c -keQ/(15a): equal. p9-d -409 ke Q^2/(1125 a^2): equal. p9-e -ke Q^2/(15a): equal.
- p10-a choice 0 (never cross), p10-b choice 2 (V per point in J/C, U = qV), p10-c choice 3 (any direction in a plane x = const), p10-d choice 1 (E . ds = 0 along the surface), p10-e choice 2 (constant, k_eQ/R): all equal to mine.

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Choice boxes p2-a, p3-c, p5-a, p10-a, p10-b, p10-c, p10-d | (no choice boxes in MIT) | The right choice is the longest in 7 of the 9 choice boxes (lengths in characters: p3-c 70 vs next 64; p10-b 91 vs 84; p10-c 62 vs 54; p10-d 78 vs 75; p10-a 76 vs 74; p5-a 46 vs 42; p2-a tied 60/60); it is the shortest in the other two (p2-c, p10-e). A reader can learn "pick the longest". | Shorten the right choice of p3-c (drop "at the distance y"), p10-b (e.g. "V belongs to a point, in J/C; U = qV to a charge there, in J") and p10-c (drop "in a plane x = constant"), and lengthen one distractor in p10-a, p10-d and p5-a, so that the right choice is longest in at most about a third of the boxes. |
| 2 | warning | Problem 8(a), `<Answer id="p8-a" ... tolerance="0.5">` | (no box) | Tolerance 0.5 (absolute), while "How to answer" says a number box accepts "any value within 2% of ours". | Use `tolerance="2%"` (it also rejects 27 and 29), or add to "How to answer": "a count must be exact". |
| 3 | warning | Problem 7(c), formula "Energy at the start" | (no solution) | `\frac{-0.108\ \text{J m}}{0.020\ \text{m}} = -5.39\ \text{J}`, but -0.108/0.020 = -5.40; -5.39 comes from the unrounded -0.10788. | Write `-0.1079\ \text{J m}` in this formula (and in the sentence of part (a)), or write "= -5.39 J (from the unrounded -0.10788 J m)"; update the calcs `shown:` of p7-kqq and p7-U0. |
| 4 | warning | data/symbols.json, form `q`, meaning scoped to 8-02-problem-set-2 | (n/a) | "A point charge: the eight charges of the cube in Problem 8." But `q` is also used in "What you need" ("A point charge $ has the potential", "moving a charge $ through ... \,\Delta V$") and in Problem 10(b) and (e) solutions ( = qV$, /R$). The meaning does not fit those uses. | Change the text to: "A point charge: any charge placed in a potential (What you need, Problem 10), or each of the eight charges of the cube (Problem 8)." |
| 5 | info | Problem 10(e), statement and choice 2 | CQ 5: "hollow, uniformly charged sphere" (no letters) | Choice "equal to its value k_e Q/R on the surface", with $ and $ not defined in the statement (only in the solution); the page meanings of `Q` and `R` do not list the sphere. | Statement: "A hollow sphere of radius $ carries the charge $ spread evenly over its surface ..."; add "the sphere of Problem 10(e)" to the page meanings of `Q` and `R`. |
| 6 | info | data/symbols.json, form `s` | (n/a) | "The length measured along a line of charge, as in dq = λ ds." Also used as the path element \vec s$ in $\Delta V = -\int \vec E\cdot d\vec s$ and in Problem 10(d). | Add "or along a path, as in the line integral of E · ds". |
| 7 | info | Problem 7 statement | "An external agent moves the charges" | "Someone moves them slowly". "Slowly" (no kinetic energy gained, so W_ext = -W) is an assumption the page adds without marking it. MIT's part (b) implies it. | "(Slowly: our assumption, so that no kinetic energy is gained.)" |
| 8 | info | Problem 9(d) | MIT asks the x, y and z components of F | Only $ is boxed; $ and $ are given in the solution. | Acceptable; optionally add a box for $ (-8 k_eQ²/(125a²)). |
| 9 | info | Problem 6(b) solution | (not in MIT) | "The last term of V has the form of the potential of a dipole along z" is outside the bracket marked "Our addition". Correct physics. | Move it inside the "(Our addition: ...)" bracket. |
| 10 | info | Problem 1(e) | Question 2 has (a) ρ, (b) λ, (c) relation ρ-λ | Q2(b) and (c) merged into one part (e); the statement says "(MIT asks for its λ as well)". | Fine as is. |

## Arithmetic and answer checks
- Every formula answer recomputed independently (sympy symbolic integration and differentiation, scipy quad, exact fractions): all equal; see Blind solve.
- Problem 4 check numbers: tube 0.6625, cylinder 0.7909 (k_eQ per m²) at R = 0.5, h = 0.8, z = 1.5: page's 0.66 and 0.79 right. The claim that the solid cylinder's field is the larger one holds for every z > h (each disc's axial field is at least that of the ring of the same charge at its rim, since kQu/(u²+r²)^{3/2} falls with r).
- Problem 7 with k_e = 8.99e9: k_e q1 q2 = -0.10788 J m; W_field = -3.2364 J, W_ext = +3.2364 J, U0 = -5.394 J, Uf = -2.1576 J, ΔU = +3.2364 J (the 3.24 J the task names). Number boxes -3.24, 3.24, -5.39, -2.16, 3.24 all with explicit `tolerance="2%"`, which rejects the sign errors.
- Problem 8: 12 + 6√2 + 4/√3 = 22.795; 28/√3 = 16.17 (page 16.2).
- Problem 9 decimals: 0.120 - 0.556 + 0.072 = -0.364; -0.160 + 0.096 = -0.064; 1 - 1.667 + 0.6 = -0.067. Right.
- Points: 8 + 12 + 12 + 10 + 10 + 8 + 8 + 6 + 16 + 10 = 100; parts add up in every problem.
- Every listed mistake evaluated on 20 000 random points of its `vars` box (endpoints included): all finite, all different from the answer. Two coincide with the answer at a single endpoint only (p1-b `Q*L` at L = 1, p4-b missing 1/h at h = 1); harmless, since they differ everywhere else. Every mistake hint is true of its formula (checked: e.g. p2-b `ke*Q/(a+L/2)^2` is smaller than the answer since (a+L/2)² > a(a+L), as the hint says; p9-a `-40/4 - 15/8` is the +5Q,+3Q term with its sign flipped).
- `vars` ranges keep every formula finite and physical (z ≥ 1.2 > h ≤ 1 in Problem 4; d, b, y > 0).
- calcs file: 1384 calc tests selected for 8.02 pass in the worktree (`pytest tests/calc -k 8.02`); `content:check` in the worktree: 0 errors, only the "no review file yet" warning for this page. Small gap (info): the unrounded -2.158 J in Problem 7(e) is an `inputs` value of p7-dU-exact, not recomputed from k q1 q2/r_f (p7-U-unrounded covers only -5.394); add an entry.
- Equation citations of "What you need" checked at their printed pages: Session p. 1 (field integral); Ch. 2 Eq. (2.10.14) p. 21, (2.10.17) p. 23 (z > 0 branch, which the page uses), (2.2.2) p. 3 (calcs); Ch. 3 Eqs. (3.1.9) p. 3, (3.3.4) p. 6, (3.3.7) p. 8, (3.4.2) p. 9, (3.5.5) p. 9. All right. The solution remarks "Eq. (2.10.3)" (p. 18) and "Eq. (2.10.9)" (p. 19) and their use in the lesson continuous-charge-distributions are right.

## Coverage and order
- Sources stated in the intro checked one by one: Problems 1 to 3 = Session Problems 1 to 3 (pp. Solving2-2 to 2-4), in MIT's order; Problem 4 = Additional Problem 2.15.6 (pp. 41-42); Problems 5 to 9 = Additional Problems 3.10.5 (p. 27), 3.10.4 (p. 27), 3.10.3 (pp. 26-27), 3.10.1 (p. 26), 3.10.9 (p. 29); Problem 10 = Ch. 2 Conceptual Question 2 (p. 38) and Ch. 3 Conceptual Questions 1, 2 (p. 25), 4, 5 (p. 26). All right, all page numbers right, and none is a Solved Problem (2.13.x and 3.8.x are not used).
- Positions against the rendered figures: Figure 2.15.6 has P on the axis above the top, at z measured from the bottom: the page's "z > h, measured from the bottom" is right. Figure 3.10.2 has A on the x-axis the distance d left of the rod's left end (x = -d) and B above the middle at height b: page right.
- MIT's parts and order are kept in every problem (Session Problem 3 asks only for the integral, which is part (a); parts (b) and (c) are marked "Our addition", (c) honestly tied to the session's third objective). The session's step list (dq, coordinates, symmetry, integrate) is followed in the solutions.
- No overlap with Set 1 (which uses 2.15.4, 2.15.5, 2.15.8 and Ch. 2 Conceptual Questions 3 to 5).
- Intro says MIT's written homework is not on OCW, where each problem comes from, that solutions and points are ours. "How to answer" explains `lam`, `ln`/`log`, `ke`, `sigma`, `rho`, `alpha`, `E0`, `pi`; its examples (`ke*q*sin(phi)/(b^2 + y^2)`, `ln(2*x)`) give no answer away. Summary and intro name topics only, no results.
- Hints: none gives a result away; the closest are Problem 3(a) (distance plus the y fraction) and Problem 6(a) (the derivative of r^-3), which still leave the last step to the reader.
- Every solution ends with a check (units, a limit or a number). No "show that" or sketch steps without a box.
- `covers: [2, 4]`, `lecture: 6`, `order: 90` match the plan in TASKS.md.

## Licensing
- No "rights reserved" or "Courtesy of" notice in Session 2 or in Chapters 2 and 3 (grep of the text). No figure redrawn; every situation is described in words. No OpenStax or LibreTexts.
- Statements are rewritten; the Conceptual Questions are short questions close to MIT's wording (for example 10(b)), which is acceptable for one-line questions.

## Notes
- No em dashes on the page.
- Symbols: `content:check` passes; all letters with a cosmology meaning used on the page (a, b, d, h, x, y, z, r, s, q, Q, L, R, P, E, U, V, W, F, θ, α, λ, ρ, σ) have meanings scoped to 8-02-problem-set-2. Fit problems: `q` (warning 4), `Q`/`R` for the sphere and `s` for the path element (info 5, 6).
- Verified with my own Python (outside the repo): every closed form, every number, every mistake's finiteness and difference, the choice lengths.

COUNTS: errors=0 warnings=4 info=6

## Resolution (2026-11-28, by the page author)

- Warning 1 (right choice longest): shortened the right choices of p3-c, p10-b and p10-c as suggested, and lengthened one wrong choice each in p10-a, p10-d and p5-a.
- Warning 2: p8-a now has `tolerance="2%"`, as "How to answer" says.
- Warning 3: Problem 7 now writes k_e q₁q₂ = −0.1079 J m (in (a), the work formula, U₀ and U_f), so −0.1079/0.020 = −5.39 J holds as printed; calcs `p7-kqq` updated.
- Warning 4: the page meaning of q now covers any charge placed in a potential (What you need, Problem 10) and the eight charges of Problem 8.
- Info items left as they are.
