---
page: content/year-4/8.07/8-07-problem-set-10.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset10/ (read: PDF rendered, both printed pages; PDF p. 3 is the OCW footer)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/2a1404cb512412dbb4cf6772f1b095b7_MIT8_07F12_ln14.pdf (read: slides rendered as images; the text layer is unreadable)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read: pp. 4 and 7 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: PDF; printed p. 21 = PDF page 22)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
verdict: pass-with-notes
---

# Review: 8.07 Problem Set 10 (conservation laws: stress tensor, field momentum, spinning shell, sunlight, reflection, monopoles)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

My answers (written into this file from the stripped statements and MIT's sheet only, before the full page was opened; numbers checked with `rv10/blind.py` and `rv10/blind2.py`, scipy quad/tplquad):

- p1a: $E = \dfrac{q\,s}{2\pi\varepsilon_0 (s^2+d^2)^{3/2}}$, radially outward ($\hat s$) in the plane. Numeric check at q = 1 µC, d = 0.1, s = 0.05: 6.4310e5 V/m both ways.
- p1b: $F_z = +\dfrac{q^2}{4\pi\varepsilon_0 (2d)^2} = \dfrac{q^2}{16\pi\varepsilon_0 d^2}$ (repulsion, upward). On the plane $T_{zz} = -\varepsilon_0E^2/2$, $n=-\hat z$; $\int_0^\infty s^3/(s^2+d^2)^3ds = 1/(4d^2)$. Hemisphere contributes 0. Numeric 0.224689 N = Coulomb.
- p1c: $F_z = -\dfrac{q^2}{16\pi\varepsilon_0 d^2}$ (attraction). On the plane $E$ is along $-z$, $T_{zz} = +\varepsilon_0E^2/2$. Numeric -0.224689 N.
- p2a: $\vec p = Q B d\,\hat y$ ($E = Q/\varepsilon_0A$ along $+z$, $\hat z\times\hat x = \hat y$). Numbers: $Q = \varepsilon_0AV/d = 8.854\times10^{-8}$ C, $p = 1.771\times10^{-10}$ kg m/s, i.e. **1.77** in units of $10^{-10}$.
- p2b: current $I$ along $+z$ (from the $+Q$ plate to the $-Q$ plate), $F_y = I d B$; impulse $\int I\,dt\,dB = QdB$ = stored momentum.
- p2c: $\partial E_y/\partial z = \dot B$, force $F_y = Q[E_y(0)-E_y(d)] = -Qd\dot B$; impulse $= QBd\,\hat y$ (same as the stored momentum).
- p3a: $m = Q\omega R^2/3$; $\vec B_{in} = \dfrac{\mu_0 Q\omega}{6\pi R}\hat z$ (uniform); outside the pure dipole field $\frac{\mu_0}{4\pi r^3}[3(\vec m\cdot\hat r)\hat r - \vec m]$; $\vec E_{in}=0$, $\vec E_{out} = Q\hat r/(4\pi\varepsilon_0 r^2)$. Numeric (loop integration) m and B at the centre agree.
- p3b: $E_\phi(R,\theta) = -\dfrac{\mu_0 Q\dot\omega\sin\theta}{12\pi}$; torque $\tau_z = -\dfrac{\mu_0 Q^2 R\,\dot\omega}{18\pi}$. Numeric agrees.
- p3c: $(I + I_{mag})\dot\omega = \tau_{ext}$, $I_{mag} = \dfrac{\mu_0 Q^2 R}{18\pi}$.
- p3d: $U_{in} = \dfrac{\mu_0Q^2\omega^2R}{54\pi}$, $U_{out} = \dfrac{\mu_0Q^2\omega^2R}{108\pi}$, total $\dfrac{\mu_0Q^2\omega^2R}{36\pi} = \frac12 I_{mag}\omega^2$. Numeric fraction inside 0.667 (outer integral cut at 200R).
- p3e: $\vec L = \dfrac{\mu_0 Q m}{6\pi R}\hat z = \dfrac{\mu_0Q^2\omega R}{18\pi}\hat z = I_{mag}\omega\,\hat z$ (only $r>R$ contributes; axial symmetry cancels $x,y$). Full 3-D numeric integral of $\varepsilon_0\,\vec r\times(\vec E\times\vec B)$: 2.2222e-8 = 2.2222e-8 (Q = R = ω = 1).
- p4a: $P = I/c = 4.54$ µPa. p4b: 9.08 µPa. p4c: $F = (I/c)\pi R_\oplus^2 = 5.79\times10^8$ N (5.79 in units of $10^8$ N); power $I\pi R_\oplus^2 = 1.735\times10^{17}$ W.
- p5a: $\langle T_{zz}\rangle = -\frac12\varepsilon_0E_0^2$ ($= -\langle u\rangle$); all other components zero ($T_{xx}=T_{yy}=0$ because $B=E/c$; off-diagonal zero).
- p5b: $\langle \vec F\rangle = +\frac12\varepsilon_0E_0^2A\,\hat z$ (along the propagation; only the front face, normal $-\hat z$, has fields).
- p5c: $|\langle T_{zz}\rangle| = 4.43$ µPa.
- p6a: $R = \left(\dfrac{1-\beta}{1+\beta}\right)^2$. p6b: $T = \dfrac{\varepsilon_2v_2}{\varepsilon_1v_1}\dfrac{4}{(1+\beta)^2} = \dfrac{4\beta}{(1+\beta)^2}$ (since $\varepsilon v = 1/\mu v$); $R+T=1$. p6c: $\beta = 1.5$, $R = 0.04$ (and $T = 0.96$). Random-material check: R + T = 1.000.
- p7a: $\partial u/\partial t + \nabla\cdot\vec S = -\vec J_e\cdot\vec E - \vec J_m\cdot\vec B$; monopoles add $-\vec J_m\cdot\vec B$.
- p7b: $\vec F\cdot\vec v = q_m\vec v\cdot\vec B$ (the $\vec v\times\vec E$ term does no work); per volume $\vec J_m\cdot\vec B$; so $\partial u/\partial t + \nabla\cdot\vec S = -\partial u_{mech}/\partial t$: conserved.
- p7c: Yes. With the plus sign the power is still $q_m\vec v\cdot\vec B$, since $\vec v\cdot(\vec v\times\vec E)=0$; energy conservation cannot fix the sign (momentum conservation / duality does).

Comparison with the page (one line per answer id; every one agrees):

- p1-e: page `q*s/(2*pi*eps0*(s^2+d^2)^(3/2))`, along ŝ. Mine identical. Agree.
- p1-f: page `q^2/(16*pi*eps0*d^2)`. Agree.
- p1-fopp: page `-q^2/(16*pi*eps0*d^2)`. Agree.
- p2-p: page `Q*B*d` (along +ŷ). Agree.
- p2-num: page 1.771 (tolerance 1%). Mine 1.7708. Agree.
- p2-f: page `I*B*d`. Agree.
- p2-off: page choice 1 (QdB along +ŷ). Agree.
- p3-m: page `Q*w*R^2/3`. Agree.
- p3-bin: page `mu0*Q*w/(6*pi*R)`. Agree.
- p3-ephi: page `-mu0*Q*wd*sin(th)/(12*pi)`. Agree.
- p3-tau: page `-mu0*Q^2*R*wd/(18*pi)`. Agree.
- p3-imag: page `mu0*Q^2*R/(18*pi)`. Agree.
- p3-u: page `mu0*Q^2*w^2*R/(36*pi)`; inside /54π, outside /108π. Agree.
- p3-l: page `mu0*Q^2*w*R/(18*pi)`. Agree.
- p4-abs 4.540, p4-ref 9.080, p4-earth 5.789 (power 1.735e17 W). Mine 4.5398, 9.0796, 5.7890, 1.7355e17. Agree.
- p5-tzz: page `-eps0*E0^2/2`. Agree. p5-other: page choice 3 (all zero). Agree.
- p5-f: page `eps0*E0^2*A/2` (along +z). Agree.
- p5-num: page 4.427. Mine 4.4271. Agree.
- p6-r `((1-b)/(1+b))^2`, p6-t `4*b/(1+b)^2`, p6-num 0.0400. Agree.
- p7-term: choice 2 (−J_m · B). Agree. p7-power: choice 0 (q_m v · B). Agree. p7-wrong: choice 1 (still works). Agree.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1 intro, formulas "The Maxwell stress tensor" and "The force from the stress tensor, static fields", both `cite="mit" at="Problem 1, p. 1 (… our statement)"` | MIT's sheet prints only the title "Calculating the force between two point charges using the Maxwell stress tensor" and a textbook pointer; neither formula is on the sheet, and no OCW 8.07 note covers the stress tensor | Cites MIT's sheet for two formulas it does not contain (the `at=` admits this, but the citation still sends readers to the sheet as the source) | Do not cite MIT's sheet for them. Simplest honest fix: give the definition and the force law as inline maths in the text, e.g. "$T_{ij} = \varepsilon_0(E_iE_j - \frac12\delta_{ij}E^2) + \frac{1}{\mu_0}(B_iB_j - \frac12\delta_{ij}B^2)$ … $F_i = \oint T_{ij}n_j\,da$ (standard definitions, stated by us: neither MIT's sheet nor the OCW 8.07 notes print them)", so no `<Formula>` and no false citation is needed. Alternative: keep the `<Formula>`s and cite a new `references` entry to an openly licensed source that prints them, after the licence and AI check of Writing rules 11. Same kind of finding as Set 7's review, item 2. |
| 2 | warning | Problem 5(b), "Check the result": "The intensity is $I = \frac12 c\,\varepsilon_0 E_0^2$ (slide 12 of Lecture Notes 14)" | Slide 12 prints "I (intensity) = ⟨\|S\|⟩ = ½ ε₀E₀²", without the factor c (a slip on the slide) | Gives the correct ½cε₀E₀² and attributes it to slide 12 without saying that the slide differs | Add, as the lesson `electromagnetic-plane-waves-reflection` already does: "(slide 12 writes ½ε₀E₀², which is the average energy density; the energy flux is c times that)". Writing rule 4. |
| 3 | info | Problem 5 formula "A linearly polarized plane wave", `at="slide 10, eq. (18), and slide 11, eq. (23)"` | Eq. (18) is the general complex form Ẽ₀e^{i(k·r−ωt)}n̂ | Real form with n̂ = x̂ and k along z | Optional: add "(real part, with n̂ = x̂ and k along z)" to `at=`. |
| 4 | info | Problem 5(b), first hint: "the force formula of Problem 1 has an extra term with the time derivative of the field momentum" | Not on MIT's sheet or in LN14 | Stated as fact, uncited | Correct physics, consistent with Problem 1's "for static fields"; optionally mark it "(a standard result, stated by us)". |
| 5 | info | Problem 7(c), "What does fix the sign": rest-frame field and "Momentum conservation … also requires it" | MIT only marks the plus sign "(wrong!)" | Marked "A remark of ours" | Verified: with ∇ × E = −μ₀J_m − ∂B/∂t, the term −ε₀ E × ∂B/∂t in −∂(ε₀E × B)/∂t gives +ε₀μ₀ E × J_m = −(1/c²) J_m × E per volume, i.e. ρ_m(−v × E/c²): the minus sign. The first-order rest-frame field B′ = B − v × E/c² is also right. No change needed. |

## Arithmetic and answer checks
- Every answer recomputed independently (rv10/blind.py, rv10/blind2.py): all agree with the page (see Blind solve).
- Every `mistakes` hint checked against its formula: p1-e (one charge's in-plane part; adding magnitudes) true; p1-f (sign; factor 2 from −ε₀E² instead of −ε₀E²/2) true; p1-fopp true; p2-p and p2-f signs true; p3-m (solid ball QωR²/5; all charge on the equator QωR²/2) true; p3-bin (equatorial ring, μ₀Qω/4πR) true; p3-ephi (sign, Lenz) true; p3-tau (lever arm R everywhere gives μ₀Q²Rω̇/48) verified; p3-imag sign true; p3-u (inside only, /54π) true; p3-l (summing magnitudes gives μ₀Q²ωR/48) verified; p5-tzz (electric part only; sign) true; p5-f (mirror; sign) true; p6-r (amplitude ratio) true; p6-t ((2/(1+β))² misses ε₂v₂/ε₁v₁ = β) true.
- `vars` ranges keep every answer and every mistake finite (p6 β ∈ [1.5, 4]; p3-ephi θ ∈ [0.3, 1.3]). Number tolerances of 1% accept 3 significant figures; no numeric mistakes are listed.
- Choice boxes: right answers at positions 1, 3, 2, 0, 1; in none is the right choice the longest or the shortest (lengths measured by script).
- Every solution ends with a check (units, a limit or a second route); all checks verified: tangential jump μ₀K; the A_φ route for E_φ; units of μ₀Q²R; F·c = power; 1327 W/m²; glass 4%; β = 3 gives R = 0.25; T unchanged by β → 1/β; J_m · B in W/m³.
- No hint gives a result away (p5(c)'s hint restates part (a)'s formula, which is fine for a number part).
- `npm run calc:test -- -k problem-set-10` in the worktree: passed. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1 to 7 in MIT's order, with MIT's points (15, 15, 25, 10, 15, 15; 15 extra credit = `optional`); totals 95 + 15 match the sheet's credit note. The sheet indeed gives no points per part, so "MIT does not split any problem into points per part" is correct; part splits add up (4+6+5, 5+5+5, 4+6+5+5+5, 4+3+3, 6+5+4, 5+6+4, 6+5+4).
- Problems 1, 2, 4, 5, 6 are textbook pointers on MIT's sheet and are our own problems, marked "(our own problem)" in their titles and listed in the intro; MIT's remarks (P4: the energy flux is large; P5: time-averaged quantities) are kept. The textbook was not used.
- Problems 3 and 7 follow MIT's parts (a)–(e) and the three questions of P7, rewritten. Our additions are marked where they stand: the 3(a) dipole-moment box, the 3(b) slow-change assumption, the three P7 boxes, the q_m units remark.
- Due date and reading assignment left out, as the intro says.

## Licensing
- MIT's sheet, LN10, LN14 and the 8.02T chapter carry no "rights reserved" or "courtesy" notices (grep on the text layers; LN14 checked visually). The page has no figures.
- No OpenStax, LibreTexts, Griffiths or Jackson material. MIT's P3 and P7 are rewritten, not copied.
- NASA Earth Fact Sheet: values match (solar irradiance 1361.0 W/m², volumetric mean radius 6371.000 km); cited by title, no insignia, no "according to NASA".

## Notes
- Citations verified on the rendered PDFs: LN14 slide 10 eq. (18), slide 11 eq. (23), slide 12 eqs. (24)–(25) (𝒫_EM = S/c² is on the slide; the ε₀E × B form is derived on the page and says so), slide 14 eq. (28), slide 18 eqs. (34)–(35); LN10 p. 4 boxed m = ½∫r × J d³x and p. 7 boxed dipole field (the box also has the δ-function term, irrelevant outside the shell); 8.02T Eqs. (13.7.4)–(13.7.5) on printed p. 21 (PDF page 22); the monopole Maxwell equations and force law are printed on sheet p. 2 exactly as the page gives them.
- 3(a) inner field μ₀Qω/(6πR) (cited `mit` "our own solution", as in Sets 1–7): verified by summing ring fields at the centre and by radial continuity.
- 7(c) "the wrong-sign force still conserves energy": correct (v · (v × E) = 0).
- Symbols: page-scoped meanings exist for every symbol; content:check passes. No em dashes; no `## Summary`.

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the stress-tensor definition and F_i = ∮T_ij n_j da in Problem 1 are no longer `<Formula>` blocks cited to MIT's sheet. They are inline maths with the note "(These are standard definitions, stated by us: MIT's sheet only names the tensor, and the OCW 8.07 notes do not print it.)"
- Warning 2: the check of Problem 5(b) now says that slide 12 of Lecture Notes 14 writes ½ε₀E₀², which is the average energy density, and that the energy flux is c times that.
- Info items left as they are.
- `status: reviewed`.
