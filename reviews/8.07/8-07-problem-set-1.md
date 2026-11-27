---
page: content/year-4/8.07/8-07-problem-set-1.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset01/ (read: pdftotext text and the rendered PDF, pp. 1-4)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/f6b37803c7e97ba1689313a270ad2b82_MIT8_07F12_ln2.pdf (read: rendered pp. 1-2, eqs. (2.5) and (2.8))
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/64baa9cb5023c49bc9147bee5416b6ec_MIT8_07F12_ln1.pdf (not needed: no formula cites reading1)
  - Griffiths, Introduction to Electrodynamics (deliberately not opened, course rule)
verdict: needs-changes
---

# Review: Problem Set 1: Index notation, rotations, the gradient, delta functions and the integral theorems

The blind solve came first (see "Blind solve", "My answers" below). I wrote it before opening the full page, its calcs file or the symbols. Every final answer on the page agrees with mine.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Intro, second paragraph ("its scalar function is called $f$ here (MIT writes $\phi$), because $\phi$ is an angle on this page") | Problem 7 (rendered PDF p. 4) writes the scalar function as ψ: $\int_V\nabla\psi\,d^3x = \int_S\psi\,d\vec a$ and $\int_S\nabla\psi\times d\vec a = -\oint_\Gamma\psi\,d\vec l$. The pdftotext text loses the glyph. | MIT writes φ | Replace with "its scalar function is called $f$ here (MIT writes $\psi$)", and drop the reason "because $\phi$ is an angle on this page" (or write "to match Problems 3 and 4"). |
| 2 | warning | Problem 3: every formula cited `mit` (eqs. (1.2.1)-(1.2.5)) and the bracketed note under the first formula | MIT marks the rotated quantities with bars: $\bar A_i = R_{ij}A_j$, $A_i = R_{ji}\bar A_j$, $\bar f(\bar x_1,\bar x_2,\bar x_3) = f(x_1,x_2,x_3)$, $\bar x_i = R_{ij}x_j$, $\partial\bar f/\partial\bar x_i = R_{ij}\,\partial f/\partial x_j$ (rendered p. 2) | Primes ($A'_i$, $f'$, $x'_i$) throughout, as in Lecture Notes 2, with no mention that MIT's sheet uses bars | Add to the bracketed note: "MIT's sheet marks the rotated quantities with a bar ($\bar A_i$, $\bar f$, $\bar x_i$); this page uses primes, as Lecture Notes 2 does." |
| 3 | warning | Problem 5(b), second hint | (MIT asks only for a proof that the integral is 1) | "notice that $4\pi r^2g_a$ is the derivative of $r^3/(r^2+a^2)^{3/2}$" | This gives away the whole proof and the box answer (set $r = a$ to get $2^{-3/2}$). Weaken it to: "Look for an antiderivative of the form $r^3$ times a power of $r^2 + a^2$, or substitute $r = a\tan u$. A third way uses no integral of $g_a$ at all: the divergence theorem with $\nabla f_a$ on a large sphere." |
| 4 | info | Problem 6(a) | "Repeat for a ring" (the coordinates are not restated) | Fixes the ring's form as $C_2\,\delta(r-R)\,\delta(\theta-\pi/2)$ in spherical coordinates | Fine: MIT's "repeat" implies spherical coordinates, and the solution's check also gives the cylindrical form. |

I checked every formula citation against the rendered sheet: (1.1.1)-(1.1.5) are on p. 1; (1.1.6)-(1.1.8) and (1.2.1)-(1.2.5) on p. 2; (1.5.1)-(1.5.5) on p. 3; Problems 6 and 7 on p. 4. All are correct. In the rendered PDF of Lecture Notes 2, eq. (2.5) ($R_z(\phi)$ with $-\sin\phi$ in row 1, column 2) and the boxed eq. (2.8) ($A'_i = R_{ij}A_j$) are both on printed p. 2, as cited. The notes describe active rotations, which matches the page's "The rotated vector is $\vec A' = (2, 1, 5)$".

## Arithmetic and answer checks
- Every answer matches my blind solve (one line per answer id in "Blind solve"). In the worktree, `pytest tests/calc -k 8-07-problem-set-1` gave 59 passed. `npm run content:check` gave 0 errors; its only warning for this page is the missing review file.
- I recomputed the solution steps and checks:
  - 1(a): the case split and both contractions.
  - 1(b): $\vec B\times\vec C = (-2,-16,3)$ and the perpendicularity check.
  - 1(c)-(e): the index manipulations; the sign of every $\epsilon$ shift and swap is right.
  - 1(d): the example, from both sides of the identity.
  - 2(a): $\vec A\times\vec B = (4,-5,-6)$; the result is perpendicular to $\vec C$.
  - 2(b): the difference is $(4,3,-6)$ by both routes; the coplanar counterexample holds.
  - 2(c): $\omega^2r\sin\theta = 2.893$.
  - 3(b): $A_2 = -0.134$; the forward rotation gives 2.00; using the row instead of the column gives 1.23.
  - 3(c): the explicit $x_1, x_2$ in terms of the primed coordinates; the new gradient is $(0.232, 3.598)$, length 3.61.
  - 4(a): $T(1.02,1.99,1.02) = 23.0192$; the second-order term $-0.0008$ explains $0.0192$ against $0.0200$.
  - 4(b): the $L\to\infty$ limit.
  - 5(a): the radial-form check ($f_a''$ is correct); the plot points $0.2387$ and $0.0422$ (the second is less than a fifth of the peak: 0.177).
  - 5(b): the antiderivative and the flux check.
  - 5(c): $0.03/(12.566\times1.0252) = 0.002329$.
  - 6(a): $\delta(\theta-\pi/2) = R\,\delta(z)$ near the ring.
  - 6(b): $(1/(2\pi s))\,\delta\,\delta$ does integrate to 1, but it describes a ring.
  - 6(d): the smoothed 2D Laplacian $2a^2/(r^2+a^2)^2$ integrates to $2\pi$.
  - 7(a): the hemisphere gives $\pi R^2$ when integrated directly.
  - 7(b): both sides of the ball check are $\frac83\pi kR^3$.
  - 7(c): $\oint x\,d\vec l = (0,\pi R^2,0)$, taken counterclockwise.
  - 7(d): both routes.
- Formula boxes p1-dx, p2-acc, p4-yuk, p5-g, p6-shell, p6-ring and p6-line:
  - each `expr` equals the solution's result;
  - every `vars` range is finite and physical (θ in [0.3, 1.4] rad, all lengths and charges positive);
  - every listed mistake is finite over those ranges and differs from the answer;
  - every mistake hint is true of its formula. For example: $k^2x$ is one term alone; $\vec A\times\hat z$ has the $x$ component $A_y$; $(a^2-2r^2)/(4\pi(\dots)^{5/2})$ is indeed $f_a''$; the version with the power $3/2$ gives a log-divergent integral; $Q/(2\pi R)$ is the constant in cylindrical coordinates.
- Number boxes: the 1% tolerances reject every plausible slip and accept answers to 3 significant figures (0.239 is 0.12% from 3/(4π) = 0.23873; 0.00233 is 0.06% from 0.0023287).
- Choice boxes: the right answers sit at positions 2, 3, 1, 0, 1, 2 and 3, so they vary.

## Coverage and order
- All seven MIT problems and all their parts (1a-e, 3a-c, 5a-c, 6a-d, 7a-d) are on the page, in MIT's order. The points are MIT's (20/10/15/10/20/10/15 = 100), and the part splits add up.
- MIT's Problems 2 and 4 are only pointers to Griffiths. The page replaces both with its own problems on the topics MIT's titles name, keeping 10 points each. They are marked "(our own problem)" in the Exercise title, in each exercise's opening line and in the intro. Both are well posed and correct.
- Griffiths was not opened, as the course rule requires. So I cannot confirm that the own problems differ from Griffiths 1.2, 1.6, 1.12 and 1.13. Their content is generic: fixed numeric vectors, the acceleration of a rotating rigid body, a made-up temperature field and the screened potential.
- Left out, and the intro says so: the due date, the reading assignment and the Griffiths pointers (Problem 5's "see Griffiths 1.5.1", and Problem 7's "closely related to Problem 1.60" with its remark about hints).
- The intro lists the added boxes and each part marks them. The list matches the page.

## Licensing
- Neither the sheet nor Lecture Notes 2 has a rights notice.
- No figure is reproduced; the one graph is a generated Plot.
- No Griffiths, OpenStax or LibreTexts material is used.
- The statements are reworded, not copied; only standard phrasing such as "well behaved" remains.

## Notes
- warning (counted): the symbol ρ has no meaning scoped to this page. It falls back to the general meaning "Density: mass ... per unit volume" with the unit kg/m³, but in Problem 6 ρ is the volume charge density. Fix: add `8-07-problem-set-1` to the `pages` of the existing ρ meaning "The volume charge density, charge per unit volume." (the one with pages continuous-charge-distributions, integral-form-electrostatics, …).
- info: the other shared symbol meanings the writer asked about fit this page:
  - φ: the rotation angle and the azimuth (also the circle parameter in 7(c), which is the azimuth);
  - T: the temperature and the transpose;
  - a: the smoothing length, and $d\vec a$;
  - R: the rotation matrix and the radii;
  - k: an index, and the constant of 1(d);
  - f′: the rotated function, and the derivatives $f_a'$ in 5(a).

  θ falls back to the general "An angle", which fits.
- info: Problem 6(b) choice box (the writer's doubt). Units rule out two of the four choices (with no factor the units are 1/length², with the factor $s$ they are 1/length). That leaves the right answer and $(1/(2\pi s))\delta(s-s')\delta(z-z')$, and choosing between those two takes the physics. This is acceptable for a 2-point part. If wanted, replace "s δ(s − s′) δ(φ − φ′) δ(z − z′)" with a distractor that has the right units, such as "(1/(2πs)) δ(s − s′) δ(φ − φ′) δ(z − z′)".
- info: integer number boxes (6, −10, −14) with a 1% tolerance (the writer's doubt). For integers this is effectively exact, which is harmless and consistent with the other boxes. No change needed.
- info: choice lengths. In p4-origin the right answer is the longest choice; in p6-ln it is the shortest ("2π δ²(r)"). Across the set there is no pattern. Optionally lengthen it to "2π δ²(r) = 2π δ(x) δ(y)".
- info: in the 5(c) solution, "Compare the origin, where $r$ is replaced by nothing" reads oddly. Suggest "Compare the origin, where $g_a(0) = 0.239/a^3$ grows without limit."

## Blind solve

### My answers (written before opening the full page)
- 1(a): eps_ijk eps_ijk = 9 - 3 = 6; eps_ijk eps_ijm = 3 delta_km - delta_km = 2 delta_km.
- 1(b): A.C = -4, A.B = 1; A x (B x C) = (-10, -1, -12); x component -10.
- 1(c), 1(e): proofs (no boxes).
- 1(d): curl A = (0,0,2k); A x curl A = (2k^2 x, 2k^2 y, 0); x component 2 k^2 x (checked against RHS: 1/2 grad A^2 = (k^2x,k^2y,0), (A.grad)A = (-k^2x,-k^2y,0)).
- 2(a): A x B = (4,-5,-6); (A x B) x C = B(A.C) - A(B.C) = (-14,-4,-6); x component -14.
- 2(b): difference = A(B.C) - C(A.B) = B x (A x C). Equal bracketings iff A(B.C) = C(A.B): A parallel to C, or B perpendicular to both A and C.
- 2(c): a = omega(omega.r) - omega^2 r = -omega^2 r_perp; |a| = omega^2 r sin(theta); number 9*0.5*sin40 = 2.893 m/s^2.
- 3(a): R^T R = I (transpose = inverse).
- 3(b): A_1 = cos30*2 + sin30*1 = sqrt3 + 1/2 = 2.232.
- 3(c): grad f = (2,3,0) at (1,2,0); df'/dx'_2 = R_2j d_j f = 0.5*2 + (sqrt3/2)*3 = 1 + 3 sqrt3/2 = 3.598.
- 4(a): grad T = (2y, 2x, -2z) = (4,2,-2) at P; max rate sqrt24 = 4.899 C/m; along n: (8-2-4)/3 = 2/3 = 0.667 C/m; origin: saddle point (Hessian eigenvalues 2, -2, -2).
- 4(b): df/dr = -e^{-r/L}(r+L)/(L r^2).
- 5(a): g_a = (3/4pi) a^2/(r^2+a^2)^{5/2}; g_a(0) = 3/(4 pi a^3), number 0.2387.
- 5(b): integral to radius R = R^3/(R^2+a^2)^{3/2} -> 1; fraction inside r<a: 2^{-3/2} = 0.3536.
- 5(c): for a << r, g_a ~ 3a^2/(4 pi r^5), proportional to a^2; r^3 g_a at a = r/10: (3/4pi)(0.01)/1.01^{2.5} = 0.002329.
- 6(a): C1 = Q/(4 pi R^2); C2 = Q/(2 pi R^2).
- 6(b): delta(s-s') delta(phi-phi') delta(z-z') / s.
- 6(c): C3 = lam/(2 pi b).
- 6(d): 2 pi delta^2(r) = 2 pi delta(x) delta(y).
- 7(a): apply divergence theorem to f c (c constant); f=1 gives closed-surface integral 0. Hemisphere z component = pi R^2 = 4 pi = 12.57 m^2.
- 7(b): divergence theorem on A x c. 7(c): Stokes on f c; f=x disk R=1.5: y component -pi R^2 = -7.069 m^2. 7(d): div curl = 0.
(Numbers checked in Python: numpy cross products, scipy quad for 5(b): 1.0 and 0.35355.)

### Comparison with the page (one line per answer id)
- p1-full: page 6, mine 6. Agree.
- p1-two: page 2 δₖₘ (choice 2), mine 2δ_km. Agree.
- p1-bx: page −10, mine −10. Agree.
- p1-dx: page 2k²x, mine 2k²x. Agree.
- p2-ax: page −14, mine −14. Agree.
- p2-when: page "A is parallel to C, or B is perpendicular to both A and C", mine the same. Agree.
- p2-acc: page ω² r sin θ, mine the same. Agree.
- p2-accnum: page 2.89, mine 2.8925. Agree.
- p3-mat: page RᵀR = 1, mine RᵀR = I. Agree.
- p3-a1: page 2.23, mine √3 + 1/2 = 2.2321. Agree.
- p3-grad: page 3.60, mine 1 + 3√3/2 = 3.5981. Agree.
- p4-max: page 4.90, mine √24 = 4.899. Agree.
- p4-dir: page 0.667, mine 2/3. Agree.
- p4-origin: page "neither the warmest nor the coldest point nearby" (a saddle), mine a saddle point. Agree.
- p4-yuk: page −(1/r² + 1/(Lr)) e^(−r/L), mine −e^(−r/L)(r+L)/(L r²). Equal (algebraically identical; at r = 0.5, L = 2 both give −3.8940).
- p5-g: page 3a²/(4π(r²+a²)^(5/2)), mine the same. Agree.
- p5-g0: page 0.239, mine 3/(4π) = 0.23873. Agree.
- p5-frac: page 0.354, mine 2^(−3/2) = 0.35355. Agree.
- p5-scale: page a², mine a². Agree.
- p5-small: page 0.00233, mine 0.0023287. Agree.
- p6-shell: page Q/(4πR²), mine the same. Agree.
- p6-ring: page Q/(2πR²), mine the same. Agree.
- p6-cyl: page (1/s) δ(s − s′) δ(φ − φ′) δ(z − z′), mine the same. Agree.
- p6-line: page λ/(2πb), mine the same. Agree.
- p6-ln: page 2π δ²(r), mine 2π δ(x)δ(y). Agree.
- p7-hemi: page 12.57, mine 4π = 12.566. Agree.
- p7-disk: page −7.07, mine −2.25π = −7.0686. Agree.

There was no disagreement, so no calculation was needed to settle one.

COUNTS: errors=1 warnings=3 info=6

## Resolution (2026-11-27, by the page author)

- Error 1: the intro now says MIT writes ψ for Problem 7's scalar function (called f here to match Problems 3 and 4); the wrong reason about φ is gone.
- Warning 2: the note under the first formula of Problem 3 now says MIT's sheet marks rotated quantities with a bar and this page uses primes, as Lecture Notes 2 does.
- Warning 3: Problem 5(b), second hint, no longer gives the antiderivative: it suggests looking for one of the form r³ times a power of r² + a², or the substitution r = a tan u, or the divergence theorem.
- Warning 4: the ρ meaning "The volume charge density, charge per unit volume." now lists this page.
- Symbols: ψ (MIT's name in Problem 7) and u (the substitution in the 5(b) hint) got page-scoped meanings.
- Info: the 5(c) solution sentence "where r is replaced by nothing" is removed. Other info items kept as they are.

Status set to `reviewed`.
