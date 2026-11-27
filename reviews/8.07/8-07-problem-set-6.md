---
page: content/year-4/8.07/8-07-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset06/ (read, local PDF and pdftotext)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read, pp. 1 and 8 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read, slides 1 and 23 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/pages/lecture-notes/ (read)
verdict: needs-changes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 6 (8.07)

## Blind solve

### My answers (written before opening the full page; checked numerically in review/py6/blind.py)
k = 1/(4 pi eps0).
- p1(a): cloud field q s/(4 pi eps0 a^3) toward centre (Gauss); shift d = 4 pi eps0 a^3 E / q; alpha = 4 pi eps0 a^3.
- p1(b): d = 0.1034 fm.
- p2(a) needle: E = E0, D = eps0 E0 = D0/er.
- p2(b) wafer: D = D0, E = D0/eps0 = er E0.
- p2(c) sphere: uniform E_in = 3 er/(2 er + 1) E0 (along z).
- p2(d) er = 4: 12/9 = 1.333; order E_needle = E0 < E_sphere = 1.333 E0 < E_wafer = 4 E0.
- p3(a): D = q/(4 pi r^2) r-hat; E = q/(4 pi eps0 er r^2) r-hat.
- p3(b): P = (er-1)/er * q/(4 pi r^2) r-hat; sigma_b(R) = (er-1) q/(4 pi er R^2); rho_b = 0 for r > 0; balancing point bound charge -q (er-1)/er at the centre.
- p3(c): V(R/2) = kq/R (1 + 1/er) = 431.4 V.
- p4(a): F2z = +3 p1 p2/(4 pi eps0 r^4), F1z = -3 p1 p2/(4 pi eps0 r^4); equal and opposite, perpendicular to the line of centres (x axis).
- p4(b): (r2 x F2)_y = -3 p1 p2/(4 pi eps0 r^3); (p1 x E2)_y = +2 p1 p2/(4 pi eps0 r^3); (p2 x E1)_y = +1 p1 p2/(4 pi eps0 r^3); total 0.
- p5(a): E = Q/(2 pi eps0 (1+er) r^2) r-hat in both halves.
- p5(b): C = 2 pi eps0 (1+er) a b/(b-a).
- p5(c): er/(1+er).
- p5(d): sigma_b(a) = -(er-1) Q/(2 pi (1+er) a^2) (on the lower half only); total density Q/(2 pi (1+er) a^2) on both halves.
- p5(e): 4.45 pF.
- p6(a): C = (eps0/d)[pi R^2 + (er-1)(R^2 arccos(x0/R) - x0 sqrt(R^2-x0^2))].
- p6(b): F_x = +(1/2) V0^2 dC/dx0 = -(er-1) eps0 V0^2 sqrt(R^2-x0^2)/d (pulled in, toward -x).
- p6(c): x0 = 0 (|F| max, sqrt(R^2-x0^2) largest).
- p6(d): |F| = 0.708 mN.

Numerical checks (blind.py): P1b 0.10340 fm; P2c boundary-value linear solve at er = 2, 4, 7.5 matches 3er/(2er+1); P3c by direct integration of E from infinity 431.40 V; P4 forces by finite differences of p.E on the dipole field formula: F2 = (0,0,3), F1 = (0,0,-3) in units k p1 p2/r^4, torques (0,-3,0), (0,2,0), (0,1,0) in k p1 p2/r^3, sum 9e-12 (rounding); P5e from field energy 4.4506 pF; P6 by finite difference of (1/2)V^2 C(x0): -0.70834 mN, area formula checked by quadrature.

### Comparison (one line per answer id; page opened only after the answers above were written)
- p1-alpha: page 4*pi*eps0*a^3; mine 4 pi eps0 a^3. Agree.
- p1-d: page 0.103 (tol 1.5%); mine 0.1034 fm. Agree.
- p2-needle: page D0/er; mine D0/er. Agree.
- p2-wafer: page er*E0; mine er E0. Agree.
- p2-sphere: page 3*er*E0/(2*er + 1); mine same (linear solve at er = 2, 4, 7.5). Agree.
- p2-num: page 1.333; mine 1.333. Agree. Ordering in the solution (needle 1 < sphere < wafer 4) agrees.
- p3-ein: page q/(4*pi*er*eps0*r^2); mine same. Agree.
- p3-sigma: page (er - 1)*q/(4*pi*er*R^2); mine same. Agree.
- p3-where: page choice 3 (at the centre); mine: at the centre, -q(er-1)/er. Agree.
- p3-v: page 431; mine 431.40 V. Agree.
- p4-f2: page +3 p1 p2/(4 pi eps0 r^4); mine same (finite differences). Agree.
- p4-f1: page -3 p1 p2/(4 pi eps0 r^4); mine same. Agree.
- p4-dir: page choice 1 (equal and opposite, at right angles to the line); mine same. Agree.
- p4-t1: page +2 p1 p2/(4 pi eps0 r^3); mine same. Agree.
- p4-t2: page +p1 p2/(4 pi eps0 r^3); mine same. Agree.
- p4-orb: page -3 p1 p2/(4 pi eps0 r^3); mine same. Agree.
- p5-e: page Q/(2 pi eps0 (1+er) r^2); mine same. Agree.
- p5-c: page 2 pi eps0 (1+er) a b/(b-a); mine same (also from field energy). Agree.
- p5-frac: page er/(1+er); mine same. Agree.
- p5-sb: page -(er-1) Q/(2 pi (1+er) a^2); mine same. Agree.
- p5-num: page 4.45; mine 4.4506 pF. Agree.
- p6-c: page eps0 (pi R^2 + (er-1)(R^2 acos(x0/R) - x0 sqrt(R^2-x0^2)))/d; mine same (area by quadrature). Agree.
- p6-f: page -eps0 (er-1) V0^2 sqrt(R^2-x0^2)/d; mine same (finite difference of C). Agree.
- p6-where: page choice 2 (x0 = 0); mine same. Agree.
- p6-num: page 0.708; mine 0.70834 mN. Agree.

No disagreement on any final answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| E1 | error | Problem 2(a), `<Answer id="p2-needle">`, mistake `er*D0` (line 185) | (own problem) | Hint: "Inside the needle there is vacuum, so D = ε₀E there, not εE. With E = E₀, that is D₀/εᵣ, smaller than D₀." | The hint does not describe `er*D0`: εE₀ = εᵣε₀E₀ = D₀, which is the other listed mistake, not εᵣD₀ = εᵣ²ε₀E₀. Its last sentence also states the answer. Replace with e.g. "That multiplies by εᵣ where it should divide. In the empty needle D is ε₀ times the field, and the field there equals the field in the material around it, so D is smaller than D₀, not larger." (or drop this mistake). |
| E2 | error | Problem 6(b), `<Answer id="p6-f">`, mistake with the + sign (line 937) | (MIT asks for the force; the sign convention is ours) | Hint: "that is −dU/dx₀ with U = ½CV₀², which would be right at fixed charge but not at fixed voltage." | False: at fixed charge the force is −d(Q²/2C)/dx₀ = +½V₀² dC/dx₀, the page's own answer (its own check step says so), not the + sign formula. Replace with: "The sign is off: that is −d(½CV₀²)/dx₀ with V₀ held fixed, which leaves out the work done by the battery. At fixed V₀ the battery supplies twice the change of stored energy, so F_x = +½V₀² dC/dx₀ (the same as −d(Q²/2C)/dx₀ at fixed charge), and C falls as x₀ grows." |
| W1 | warning | Problem 6 statement and parts (a)–(d); intro "Problems 4 and 6 are ... given here as MIT sets them" | One question: "Calculate the force on the slab as a function of x₀." No approximation stated. | Adds "Take d much smaller than R, so that the field ... is uniform and the fringing field ... does not change the capacitance", and adds parts (c) (where the pull is strongest) and (d) (numbers). | Mark these as ours: e.g. in the intro "In Problem 6 the split into parts, the small-gap approximation and parts (c) and (d) are ours", and in the statement "(our assumption: take d much smaller than R ...)". |
| W2 | warning | Problem 3(b), second hint (line 405) | (own problem) | "Look at the field inside: it is the field of a point charge smaller than q. What charge sits at the centre, then?" | Gives away the choice box p3-where (answer "at the centre"). Rephrase so it leads but does not name the place, e.g. "Compare the field inside with the field of q alone in vacuum. What does Gauss's law say about the total charge inside a small sphere around q?" |
| W3 | warning | Frontmatter `prerequisites`; Problem 4 statement | Problem 4 needs the ideal dipole field | The field is cited from Lecture Notes 11, slide 23, which on this site is in the lesson `magnetic-dipole-force-torque-maxwell` (lecture 11, its Formula "The field of an ideal electric dipole", slide 23); that lesson is not a prerequisite. | Add `magnetic-dipole-force-torque-maxwell` to `prerequisites` (and consider linking it in the intro sentence on dipoles). `covers` may stay [9, 10]; adding 11 is optional. |
| I1 | info | Formulas "The polarizability of an atom", "The displacement and its sources", "The bound charges": `cite="mit"` with "(standard definition(s), our own statement)" | MIT's sheet states only P = ε₀χₑE (reading assignment) | Standard definitions cited to the sheet page of the problem, marked as our own statement | Acceptable, as in the Set 2 review (I5): the `at=` says plainly they are ours. No change needed. |
| I2 | info | Problem 1(a) check (line 108) | n/a | "The formula holds only while d < a; part (b) shows that this is never a worry." | "never" is too strong; say "not a worry for laboratory fields". |
| I3 | info | Problem 1(b) check (line 142) | n/a | "the field of the cloud at its own edge, q/(4πε₀a²) = 5.1 × 10¹¹ V/m at its edge" | "at its edge" twice; drop the second. |
| I4 | info | `source.readings[1].title` | OCW title: "Magnetic Dipoles and Magnetic Fields in Matter" (slide 1: Lecture 26, 11/9/12) | "8.07 Lecture Notes 11 (Guth, handwritten slides, Lecture 26, November 9, 2012, slides 1–23)" | Optionally add the title, as reading 1 has. |
| I5 | info | Intro, "(those notes are dated two weeks after this set was due)" | LN10 p. 1: 11/7/12; set due Oct 26, 2012 | "two weeks" | 12 days; "almost two weeks" would be exact. Optional. |

## Arithmetic and answer checks
- Every number recomputed independently (review/py6/blind.py): 4πε₀ = 1.113e-10; a³ = 1.489e-31 m³; α = 1.656e-41; d = 1.034e-16 m = 0.103 fm; d/a = 1.95e-6 ("about 2 × 10⁻⁶"); q/(4πε₀a²) = 5.13e11 V/m, ratio 5.1e5 ("half a million"); 12/9 = 1.333; V(R) = 359.5 V, 71.9 V, 431.4 V, 719 V; 4.4506 pF, empty 2.2253 pF (shown 2.23), factor 2; half chord 4.0 cm, 0.7083 mN, at x₀ = 0 0.8854 mN; 1 g weight 9.8 mN ("about 10"). All correct.
- Derivations checked step by step: Gauss for the cloud; force balance; ℓ = 1 cavity boundary conditions and the β sign discussion (bound charge negative at the top pole, field in the hole strengthened: correct); bound point charge −q(εᵣ−1)/εᵣ; Problem 4 derivatives (the z² term drops on the axis; the x component of E₂ is second order in z) and the check about dipole 2 (−r ê_x × F₁ = −3 ê_y units): correct; Problem 5 uniqueness argument, flat face carries no bound charge (P tangent to it), total density equal on both halves; Problem 6 energy balance, the fixed-charge check and the pressure form ½ε₀(εᵣ−1)E² × d × chord: correct. Each part ends with a check (units, limit or number).
- Mistake hints verified (other than E1, E2): p1-alpha both true; p2-wafer both true; p2-sphere: 3E₀/(εᵣ+2) is the dielectric ball in vacuum (true); (εᵣ+2)E₀/3 = E₀ + P/(3ε₀) is the field in a spherical hole in a uniformly polarized ("frozen") medium (true; the writer's flag is cleared); εᵣE₀ is the wafer (true); p3-ein, p3-sigma, p4-f2, p4-f1 (−6: double; true that only the 3(p·r̂)r̂ term contributes), p4-t1, p4-t2, p4-orb, p5-e, p5-c, p5-frac, p5-sb, p6-c, p6-f (−2×) all true.
- `vars` ranges: every answer and every listed mistake finite over its ranges (p5-c has a in [0.5, 1], b in [1.5, 3]; p6 has |x₀| ≤ 1.5 < R in [2, 3]). Number tolerances (1 to 1.5%) accept 3-figure answers.
- Choice boxes: right answers at positions 3, 1, 2; in none is the right choice the longest or the shortest.
- calcs file read: every `answer:` entry matches its box; each uses a route independent of the page formula (root search, numeric integral or derivative). I did not run `npm run calc:test`; my own recomputation agrees with every `expected`.
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file (symbols pass).

## Coverage and order
- Six problems in MIT's order with MIT's points (10, 15, 10, 15, 15, 15 = 80). Splits between parts are ours and add up.
- Checked on the PDF: MIT's Problems 1, 2, 3 and 5 are only textbook pointers (Griffiths 4.2, 4.16, 4.32; Jackson 4.10) with titles; Problem 1 adds the rigid-cloud instruction, which the page keeps. Marking them "(our own problem)" is right.
- Problem 4 follows MIT's text (eqs. 4.1–4.4, parts (a) and (b), torque about the origin), rewritten; asking for z and y components is a harmless addition.
- Problem 6 follows MIT's statement and diagram (rendered p. 3: the square covers the disk to the right of x = x₀; the page's description in words is correct), but see W1 for what is added.
- Revised-sheet note (p. 1 footnote): "to" inserted in Problem 1; "side larger than 2R" in Problem 6. Both followed.
- Citations: Lecture Notes 10 p. 8 (printed number) has F = (p·∇)E or ∇(p·E), τ = p × E + r × F: matches. Lecture Notes 11 slide 23 (printed −23−) has E_dip with the −(4π/3)p δ³ term: the page's form without it, stated so, matches. Eqs. (4.1)–(4.3) are on pp. 1–2 and (4.4) on p. 2 as cited; the reading assignment with P = ε₀χₑE is on p. 1.
- The intro's claim that OCW has no 8.07 lecture notes on dielectrics: checked on OCW's lecture-notes page (17 notes; none on electric polarization). True.
- `covers: [9, 10]`: both lectures have lessons (multipole-expansion-traceless-tensors, traceless-tensors-legendre-polynomials; magnetic-multipole-expansion-dipoles). Reasonable since no dielectrics lesson exists; see W3 for lecture 11.

## Licensing
- No rights notices on the problem set or on Lecture Notes 10 and 11 (grep and rendered pages). MIT's Problem 6 diagram is not redrawn; it is described in words.
- Griffiths and Jackson not used; the own problems are standard physics on the titled topics (uniform-ball atom model, needle/wafer/sphere cavities, charge in a dielectric ball, half-filled spherical capacitor). No text copied from MIT beyond titles and short standard phrases. No OpenStax or LibreTexts.

## Notes
- Writer's flags: covers [9, 10] fine (W3 adds a prerequisite); both citations copied from lessons verified on the PDFs; the Problem 2(c) "frozen polarization" hint is true; "standard definition, our own statement" citations acceptable (I1).
- No `## Summary` with answers; no em dashes (grep: 0).

COUNTS: errors=2 warnings=3 info=5

## Resolution (2026-11-27, by the page author)

- Error 1: the `er*D0` mistake hint in Problem 2(a) now describes that formula (multiplies by εᵣ where it should divide) and no longer gives the answer.
- Error 2: the + sign mistake hint in Problem 6(b) is corrected: it now says the formula is −d(½CV₀²)/dx₀ at fixed V₀, which leaves out the battery's work, and that +½V₀² dC/dx₀ equals −d(Q²/2C)/dx₀ at fixed charge.
- Warning 1: the intro now says that in Problem 6 the split into parts, the small-gap approximation and parts (c) and (d) are ours; the statement marks the approximation "(our assumption)".
- Warning 2: the second hint of Problem 3(b) now points to Gauss's law around q instead of naming the answer.
- Warning 3: `magnetic-dipole-force-torque-maxwell` added to `prerequisites`.
- Info: "never a worry" is now "not a worry for laboratory fields". Other info items left as they are.
- `status: reviewed`.
