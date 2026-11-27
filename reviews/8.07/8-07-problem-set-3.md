---
page: content/year-4/8.07/8-07-problem-set-3.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset03/ (read: local PDF ps03.pdf, rendered and pdftotext)
  - 8.07 Lecture Notes 3, handwritten (read: PDF p. 7 as image)
  - 8.07 Lecture Notes 4 (read: pdftotext, pp. 2 and 5)
  - 8.07 Lecture Notes 5, handwritten (read: PDF pp. 6, 8, 9 as images)
  - Hwang and Mascagni, J. Appl. Phys. 95, 3798 (2004) (not read: cite-only by rule)
  - Griffiths, Jackson (not opened, by rule)
verdict: pass-with-notes
---

# Review: Problem Set 3: Image charges for spheres, a bulge and a cylinder, bounds on capacitance, and Laplace's equation in a box

## Blind solve

Solved from the stripped statements and MIT's sheet only, before opening the page, its calcs or any other review (the answers below were written to this file first). k = 1/(4 pi eps0).

### My answers
- p1-v0: V0 = Q/(4 pi eps0 R) (central image +aQ/R keeps the net charge zero and shifts the whole surface equally).
- p1-force: Q^2 a^3 (2R^2 - a^2) / (4 pi eps0 R^3 (R^2 - a^2)^2).
- p1-fn: 5.400 uN; p1-fg: k Q^2 a R/(R^2 - a^2)^2 = 18.34 uN; p1-vnum: 539.3 V.
- p2-qimg: -q a/z0; p2-zimg: a^2/z0 (other images: +q a/z0 at -a^2/z0, -q at -z0); p2-total: -q.
- (2.2) verified; p2-ratio: 1 + 512/225 = 3.2756.
- p2-far: 4 q^2 a^3/(4 pi eps0 z0^5); induced dipole 2 q a^3/z0^2 = 4 pi eps0 a^3 (2kq/z0^2).
- p3-lam: -lambda; p3-d: b^2/R; p3-axis: no further line (it would make V grow as ln s far away).
- p3-v0: -(lambda/(2 pi eps0)) ln(R/b).
- p3-f: lambda^2 R/(2 pi eps0 (R^2 - b^2)); p3-vnum: -498.4 V; p3-fnum: 63.91 uN/m.
- p4-sphere: 4 pi eps0 R.
- p4-trial: n^2/(2n - 1).
- p4-trialc: V0 between S' and S, true potential of the larger conductor outside S; strict inequality by unique continuation of harmonic functions.
- p4-alpha: 1/2; p4-beta: sqrt(3)/2 = 0.8660; p4-pf: 7.355 pF.
- p5-gamma: pi sqrt(1/a^2 + 1/b^2); p5-z: sinh(gamma z)/sinh(gamma c).
- p5-centre: 1/(2 cosh(pi/sqrt 2)) = 0.10719.
- p5-cnm: 16/(pi^2 n m) (n, m odd; zero otherwise).
- p5-sixth: 1/6 = 0.16667 (superposition of six faces); numerical double sum over 200 x 200 odd modes = 0.1666667; first term 0.17377.

### Comparison (one line per answer id)
- p1-v0: page `Q/(4*pi*eps0*R)`. Agrees.
- p1-force: identical expression. Agrees.
- p1-fn 5.40, p1-fg 18.3, p1-vnum 539: agree (5.400, 18.34, 539.3).
- p2-qimg `-q*a/z0`, p2-zimg `a^2/z0`, p2-total "−q exactly": agree.
- p2-ratio 3.28: agrees (3.2756).
- p2-far `4*q^2*a^3/(4*pi*eps0*z0^5)`: agrees.
- p3-lam "−λ, whatever R and b are", p3-d `b^2/R`, p3-axis "not allowed ...": agree.
- p3-v0 `-lam/(2*pi*eps0)*log(R/b)`: agrees.
- p3-f, p3-vnum -498, p3-fnum 63.9: agree.
- p4-sphere `4*pi*eps0*R`: agrees.
- p4-trial `n^2/(2*n - 1)`: agrees.
- p4-trialc (V0 in the gap, larger conductor's potential outside): agrees.
- p4-alpha 0.5, p4-beta 0.866, p4-pf 7.35: agree.
- p5-gamma, p5-z: agree.
- p5-centre 0.107: agrees.
- p5-cnm `16/(pi^2*n*m)`: agrees.
- p5-sixth 0.1667: agrees.

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), box p5-gamma, mistake `pi*sqrt(1/a^2 - 1/b^2)` | (own problem) | vars `a: [0.5, 2], b: [0.5, 2]`: the mistake is the root of a negative number (NaN) whenever a > b. `checkFormula` (lib/answers.ts) samples 5 random points and `agree()` rejects NaN, so the mistake is recognised only when all 5 points have a < b (probability 1/32): its hint practically never shows | Narrow the ranges so that a < b at every point, e.g. `vars={{ a: [0.5, 1], b: [1.2, 2] }}` (answer and the other mistakes stay finite and distinct) |
| 2 | warning | Box p4-alpha (label "α =") and box p5-sixth (statement "as a fraction of V0", exact answer 1/6) | n/a | Number boxes; `parseNumber` does not read "1/2" or "1/6" and replies "That is not a number I can read". A reader who found the exact fraction will naturally type it | Say "as a decimal" in the two labels, e.g. `label="$V(\text{centre})/V_0$, as a decimal:"` and `label="$\alpha$, as a decimal:"` (or say once in "How to answer" that number boxes take decimals, not fractions) |
| 3 | warning | Problem 4(d), solution step "Check the result" | nothing on this | "of all shapes with a given volume, the sphere is known to have the smallest capacitance", uncited | The statement is true (Poincaré's conjecture, proved by Szegő, 1930; Pólya and Szegő, *Isoperimetric Inequalities in Mathematical Physics*, Princeton 1951) but needs attribution: write "a theorem of Pólya and Szegő" and add the book to `references` (bibliographic record only), or drop the clause |
| 4 | info | Problem 5(a), box p5-z, mistake `sin(g*z)/sin(g*c)` | (own problem) | With g in [0.5, 2] and c in [1, 2], g c passes through π, where the mistake has a pole. Only a measure-zero set; nearby the values stay finite and agree relatively, so the hint still works | Optional: `c: [1, 1.5]` keeps g c < π |
| 5 | info | Problem 2(b) | (2.2) written with z | "(MIT's sheet writes z for z0 in this formula.)" | Correct (checked on the rendered sheet). No change |
| 6 | info | Problem 4 intro | Q = CV, V = 0 at infinity | Links it to notes eq. (4.18) "with the second conductor moved far away" | Notes 4 p. 5 eq. (4.18) is Q = CV for a two-conductor capacitor; the reading is fair. No change |
| 7 | info | Problem 3(b) | "in terms of R, b, and λ" | adds ε0 | Fine (SI units). No change |

## Arithmetic and answer checks
- Every number recomputed independently (Python): p1 forces 5.400 / 18.34 µN, push 12.9 µN, V0 539.3 V, check value 16.69 m⁻², ratio 3.4; p2 ratio 737/225 = 3.2756, at z0 = 5a exact 0.0012841 vs leading 0.00128 (0.32 %); p3 359.5 V, ln 4 = 1.386, V0 = −498.4 V, d = 0.75 cm, gap 11.25 cm, f = 63.91 µN/m; p4 n = 2 gives 4/3, n = 0.8 gives 1.067, interval middle 0.683, 11.127 pF, 7.355 / 5.56 / 9.64 pF, equal-volume radius 0.6204a; p5 γc = 4.443, 2.221, cosh = 4.664, 0.10719; series: first term 0.17377, (1,3)+(3,1) = 2 × (−0.00376), partial 0.16625, (3,3) +0.00023, (1,5)+(5,1) +0.00022, first term 4.3 % high. All agree with the page.
- Calcs: `pytest tests/calc -k 8-07-problem-set-3` in the worktree: 75 passed. The p5-sixth entry (10-mode partial sum) evaluates to 0.166665, within its 1e-4 tolerance.
- Derivations checked step by step: 1(b) bracket algebra and far limit via the image dipole a³Q/R²; 2(a) the four charges give V = 0 on plane and sphere; 2(b) (z0²+a²)² − (z0²−a²)² = 4a²z0² and the near-contact limit q²/(2h)²; 3(a) the derivative argument (λ′ = −λ with d = b²/R or d = R) re-derived: correct; 3(c) energy check W = (λ²/4πε0) ln(R² − b²) + const re-derived from W = ½Σλ V including the cylinder's −λ at V0: correct; 4(a) both routes, normal signs correct; 4(b) cross term vanishes (u → 0 far away, flux finite), excess (n−1)²/(2n−1); 5(c) projection factor 4/(ab), odd/even argument, Leibniz check.
- Writer's doubts:
  - 4(c) strict C′ < C: sound. Equality in 4(b) forces Ψ to be the true potential of the smaller conductor; that function would be harmonic and constant on an open set (the gap), hence constant on the connected exterior (real analyticity / unique continuation), contradicting V → 0. Quoting the property "without proof" is acceptable at this level; the proviso "as long as there is a gap somewhere" correctly needs a gap of nonzero volume.
  - 4(d) sphere minimises capacitance at fixed volume: true (Pólya–Szegő) but uncited: finding 3.
  - Conducting-sphere dipole 4πε0a³E: correct. The page derives it from the images in 1(b) (moment a³Q/R² = 4πε0a³E with E = Q/(4πε0R²)); in 2(c) the uniform-field solution V = −Ez(1 − a³/r³) does vanish on the plane z = 0, so the hemisphere-on-plate picture is valid, and the moment 2qa³/z0² matches the bulge images.
  - p5-sixth tolerance 1 %: suitable. Accepts 0.167, 0.1667 and the three-term partial sum 0.1662; rejects the first term alone (0.1738, 4.3 % off). Only issue is typing "1/6" (finding 2).
- Answer boxes: every formula answer finite over its vars; every mistake differs from the answer; every mistake hint is true of its formula (e.g. p2-zimg `z0 - a` lies outside the bulge for z0 > 2a; p3-d `R - b` outside the cylinder for R > 2b; p4-trial `n/(2n-1)` below 1 for n > 1, `n^2/(2n+1)` = 1/3 at n = 1; p3-v0 4πε0 variant; p1 mistakes). Only p5-gamma's NaN issue (finding 1). Number tolerances 1 %, units in labels.
- Choice boxes: right answers at positions 3, 4, 2, 3 (1-based); the right choice is the shortest once (p3-lam), the longest once (p4-trialc), neither twice: no pattern. No backslash TeX in choice strings.
- Hints: none gives a final result away. The second hint of 4(c) points strongly at the choice-box answer but leaves the reader to name it; acceptable for a proof part.

## Coverage and order
- MIT's order kept: Problems 1 to 5, Problem 3 (a), (b), Problem 4 (a)–(d). MIT's points kept: 10, 15, 15, 20, 15 = 75; part splits add up (3+4+3, 6+6+3, 5+5+5, 5+6+5+4, 5+3+4+3).
- Problems 1 and 5 (Griffiths pointers) are replaced by own problems, marked in their titles and in the intro, with MIT's titles and points; both are well posed and correct. Not compared with Griffiths (forbidden).
- The additions listed in the intro match the page (2(a) choice box, 2(b) number box, 2(c); 3(a) last box, 3(c); boxes of 4(a), 4(b), 4(c) and the last box of 4(d)), each marked where it stands.
- Due date and reading assignment omitted, and the intro says so.

## Licensing
- The sheet has no rights or courtesy notice. No MIT figure reproduced or redrawn (the page has no figures).
- Problems 2–4 are reworded, not copied (only equations and short standard phrases).
- Problem 3 is written from MIT's statement; Jackson is only named.
- Hwang and Mascagni (AIP): cited from the sheet's footnote only; `location` says the paper was not read; the page claims nothing beyond MIT's 0.661. Correct cite-only use.
- Citations checked on the rendered pages: notes 5 p. 63 (PDF p. 6) boxed q = −aQ/R, r = a²/R (notes use r, as the page says); p. 64 (PDF p. 8) Laplace's equation in Cartesian form; p. 65 (PDF p. 9) C1 + C2 + C3 = 0; notes 3 p. 7 (PDF p. 7) boxed W = ½ε0∫|E|²; notes 4 p. 2 eq. (4.5) W = ½V(R)Q for a sphere; notes 4 p. 5 eq. (4.18). MIT eqs. (2.1), (2.2) on p. 1 and (4.1), (4.2) on p. 2: correct.

## Notes
- No em dashes, no `## Summary`, no control characters in the page.
- Symbols: 44 meanings scoped to the page, consistent with the text (letters a, b, R, n, q, Q with their problem-by-problem meanings; units sensible).
- Linked lessons exist (method-of-images-uniqueness, separation-of-variables-cartesian, conductor-surface-forces-capacitance, electrostatic-energy-self-energy, integral-form-electrostatics) and support what the page attributes to them (the image lesson calls the distance b, as the page says). Problem 1(c)'s numbers differ from that lesson's worked example.
- Uncertain, not checked: whether the image-charge lesson states the uniqueness theorem "in the form with the total charge of each conductor given", which Problem 1(a) invokes. It is a standard theorem either way.

COUNTS: errors=0 warnings=3 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: box p5-gamma now samples a in [0.5, 1] and b in [1.2, 2], so the listed mistake π√(1/a² − 1/b²) is finite at every sample point.
- Warning 2: the labels of p4-alpha and p5-sixth now ask for the value "as a decimal".
- Warning 3: the uncited clause about the sphere having the smallest capacitance for a given volume is removed from the 4(d) check.
- Info items: kept as they are.

Status set to `reviewed`.
