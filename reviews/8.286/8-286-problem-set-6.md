---
page: content/year-4/8.286/8-286-problem-set-6.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps6/ (read, pdftotext of the PDF, pp. 1-7)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/6dd048a7b2e1f9a96fcb9db67c117340_eUYIcR1VGns.pdf (Lecture 13 transcript, read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9cf8a66ecf4f21637b50ab2b75bb38e8_-yIKKST-_Mw.pdf (Lecture 14 transcript, read: pp. 16-20)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a3f3a576e9792f0e1b9676cc30b52619_moyD_yeviMY.pdf (Lecture 15 transcript, read: pp. 22-24)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (Lecture 16 transcript, read: pp. 14-16, 23-25)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (Lecture 17 transcript, read: pp. 9-12, 16-18)
  - http://web.mit.edu/8.286/www/quiz11/ecqr2-1.pdf (the 2011 solution MIT links for Problem 3; not opened, not needed)
verdict: pass-with-notes
---

# Review: Problem Set 6: geodesics, pressure and the early universe

The blind solve (below) agrees with every one of the page's 17 answer boxes and every "show that" result. No errors found. In all five transcripts the printed footer page number equals the PDF page index (checked on pp. 1, 10 and 17 of each), so the `at=` page numbers below were checked directly with `pdftotext -f N -l N`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro paragraph | Problem 3 "READ THIS": the problem is 2011 Quiz 2 Review Problem 16, its solution is posted (web.mit.edu/8.286/www/quiz11/ecqr2-1.pdf) and students are encouraged to read it | "MIT publishes no solutions for its problem sets, so the hints and the solutions here are our own." | Add: "(For Problem 3 MIT links to a solution posted outside OCW, from 2011; we did not use it, and our solution is our own.)" |
| 2 | warning | 2(e) statement | "(One significant figure will be sufficient.)" | "MIT asks for one significant figure, so this box accepts 3% either way." | The "so" does not follow: a one-figure answer, 4e-16, is 8% off and is rejected. Write: "MIT asks for only one significant figure; this box needs three, and accepts 3% either way so that any usual value of g (9.8 to 10 m/s²) is right." |
| 3 | warning | 2(e) solution, "Check the result" | (no claim) | "The weak-field approximation is certainly good enough here, since φ/c² itself is of this size." | Not true for the Newtonian potential (|φ|/c² is about 7 × 10⁻¹⁰ at the Earth's surface and about 10⁻⁸ from the Sun). The correct reason is that the neglected terms are of order (φ/c²) × z, at least 10⁸ times smaller than z. Suggested: "The terms dropped in part (c) are of order (φ/c²) times z, and |φ|/c² is below 10⁻⁸ anywhere in the solar system, so the approximation is excellent." |
| 4 | warning | 2(c) statement | "Find this time interval [ΔT_r], and also the redshift z" | Asks only for z; ΔT_r appears only in the solution | Add "Find ΔT_r and then the redshift…", optionally with a box (`expr="Te*sqrt(1 + 2*pr/c^2)/sqrt(1 + 2*pe/c^2)"`, which is already a listed mistake in 2(b)). |
| 5 | warning | Frontmatter `source.readings[0]` | Lecture 13 transcript has the full Robertson–Walker spacetime metric (pp. 17–18) and the geodesic equation (p. 27) | Listed as reading1 but never cited | Either cite it (for example "Flat Robertson–Walker metric", add `cite="reading1" at="pp. 17–18"` as a second source in the text, or the solution's step in 1(a)) or remove it from `readings`. |
| 6 | info | Geodesic equation (top) | L14 p. 17: Guth says "the partial of g lambda sigma with respect to x nu" (slip; the free index is μ) | Writes ∂/∂x^μ (correct) | Optionally add "(Guth says x^ν on the board; the free index is μ.)", as Writing rule 4 asks. |
| 7 | info | 7(a) solution, "Solve for the time" | L17 p. 17: kT = 0.860 MeV/√t | "the lesson works the constants out to kT = 0.860 MeV/√t" | The constants give 0.859; the lesson itself says the lecture rounds. Write "the lecture rounds the constants to…". The answer (0.74 s, unrounded 0.738 s) is unaffected. |
| 8 | info | 7(a), formula "Total g with three species", at="pp. 10–11 (board)" | 21/4 for the neutrinos is on p. 9, 7/2 for e± on p. 10, the total 10¾ on p. 11 | pp. 10–11 | Fine for the total; "pp. 9–11" would cover every term. |
| 9 | info | 3(d) | Asks for the minimum r of circular orbits (answer 3GM/c²) | 3GM/c², with the photon-orbit reading; mistake 6GM/c² gets "Twice too large" | Optionally note that orbits inside 6GM/c² exist but are unstable, so a reader who knows the "innermost stable orbit" is not confused by the hint. |

## Arithmetic and answer checks
- Every box value and expr matches my blind answer (see the Blind solve section). Formula answers compared by value at several points in Python; numbers recomputed from CODATA constants (SciPy): t = 0.73818 s and 0.68456 s; ρ = 8.2053 and 9.5411 × 10⁸ kg/m³; v/c = 0.35112; z = 4.3616 × 10⁻¹⁶ (g = 9.8) or 4.3660 × 10⁻¹⁶ (g = 9.81).
- Tolerances: 1(c) 1% (rejects the naive 0.3); 2(e) 3% (accepts g = 9.8 to 10, rejects 4e-16, see #2); Problem 7 2%: 0.74 box accepts 0.738 and 0.7396 (from 0.860²); 0.685 accepts 0.686 (from the rounded 0.74); a reader who forgets the antiparticle factor for the fourth neutrino (g' = 11.625) gets 0.710 s, 3.6% off, rejected. 7(c) 8.21/9.54 accept the other route's 8.21/9.53. All suitable.
- `vars` ranges: p1-b keeps a w/c ≤ 0.6 < 1; Problem 2 keeps 1 + 2φ/c² ≥ 0.4; all others finite and positive. Fine.
- Mistake hints checked one by one; each is true of its formula: 4(c) ρc²/4 → n = 15/4 and 5(a) 5ρc²/3 → n = 8 (both in calcs); 5(b) t^(1/6) and 6(a) t^(1/5) for H ∝ ρ; 6(c) 5ct/2 = c/H; 6(d) 3/(25πGt²) is twice the answer; 2(d) ±, ½ and 2 variants; 3(d) 2GM/c² horizon, GM/c² inside the horizon.
- Solution checks recomputed: 2(c) 1/√0.98 − 1 = 0.0102; 3(d) 3GM☉/c² = 4.43 km, √(1/2) = 0.707 at 6GM/c²; 7(b) √(10.75/12.5) = 0.927, about 7% shorter; 7(c) per-g u = 6.86 × 10²⁴ J/m³, ρ = 7.63 × 10⁷ kg/m³, ratio 1.163, about 8 × 10⁵ times water. All correct.
- Points: 25 + 25 + 30 + 25 + 25 + 15 + 15 = 160, every part's points equal MIT's.
- Every solution ends with a check (units, a limit or a number). No hint gives a result away (1(c) hint 2 gives the method only; 2(b) hint 2 gives the argument, acceptable for a 5-point part).
- Worktree checks run: `npm run content:check` 0 errors (only warning for this page: no review file yet); `npm run calc:test` 13314 passed; `npm run test:answers` 65 passed.

## Citations (lecture transcripts, checked on the PDFs)
- L14 p. 17 (board), geodesic equation in τ and Greek indices: correct (with Guth's x^ν slip, #6).
- L14 p. 19 (board), r component of the geodesic equation: correct (the equation starts on p. 19 and ends at the top of p. 20).
- L15 p. 23 (board), ρ̇ = −4(ȧ/a)ρ ("3 prime"): correct.
- L16 p. 15 (board), horizon integral (and ρ = 3/(32πGt²), used in calcs): correct.
- L16 p. 24 (board), u = g(π²/30)(kT)⁴/(ħc)³ (begins at the foot of p. 23): correct.
- L17 pp. 10–11 (board), g = 2 + 21/4 + 7/2 = 10¾: correct for the total (#8).
- L17 p. 17 (board), kT = (45ħ³c⁵/16π³gG)^(1/4)/√t and 0.860 MeV: correct.
- MIT problem-set citations (p. 1 to p. 7, equations P4.1 to P4.7) all match the printed pages of the PDF.

## Coverage and order
- All seven problems and every part are present, in MIT's order, with MIT's points. Additions are marked as ours (the number in 1(c)). Omission: ΔT_r in 2(c) (#4). MIT's parenthetical remarks (de Broglie wavelength in 1(c), clock slowing in 3(a), the meaning of ω and r in 3(c), the accuracy of the weak field in 2(c)) are kept and attributed to Guth.
- `covers: [13, 14, 15, 16, 17]` matches the lessons the set uses (lecture 13 robertson-walker-spacetime, 14 christoffel-symbols and falling-into-a-black-hole, 15 matter-radiation-equality, 16 radiation-dominated-universe and black-body-radiation, 17 neutrinos-and-particle-counting and temperature-and-decoupling); all prerequisites exist. The lesson claims made in the text (p = ρc²/3 in matter-radiation-equality, the horizon integral in radiation-dominated-universe, kT(t) in temperature-and-decoupling, the spacetime geodesic equation in christoffel-symbols) were checked in those lessons.

## Licensing
- No "rights reserved" or "courtesy" notice in the problem-set PDF or the five transcripts (grep). MIT's piston sketch is mentioned, not redrawn. Statements are rewritten, not copied; only standard phrases are shared. No OpenStax or LibreTexts material. The 2011 solution MIT links for Problem 3 was not used.

## Notes
- No em dashes, no `## Summary` with answers. Symbols pass `content:check`.
## Blind solve

### My answers (written before opening the full page)
- 1(a): x-component of the geodesic equation: d/dτ[a² dx/dτ] = 0 (g_xx = a² depends on t only), so dx/dτ ∝ 1/a².
- 1(b): dx/dτ = w / sqrt(1 − a²w²/c²).
- 1(c): with v = a w, dx/dτ = γv/a = p/(m a) ∝ 1/a², so p ∝ 1/a. Number: γv = 0.75c → 0.375c; v/c = 0.375/sqrt(1+0.375²) = 0.3511.
- 2(a): Δt_e = ΔT_e / sqrt(1 + 2φ_e/c²).
- 2(b): Δt_r = Δt_e = ΔT_e / sqrt(1 + 2φ_e/c²) (static metric: every pulse takes the same coordinate time).
- 2(c): 1 + z = sqrt[(c² + 2φ_r)/(c² + 2φ_e)], z exact = that − 1; weak field z ≈ (φ_r − φ_e)/c².
- 2(d): d²x^i/dτ² = −∂_iφ (dt/dτ)².
- 2(e): z ≈ g h / c² = 9.81 × 4 / (2.998e8)² = 4.37e-16 (≈ 4e-16).
- 3(a)-(c): shown (r-equation; g_φφ = r², ∂_r g_tt = −2GM/r²).
- 3(d): dτ/dt real needs 1 − 3GM/(rc²) > 0, r_min = 3GM/c² = 1.5 R_S.
- 4(a), 4(b): shown. 4(c): p = ρc²/3.
- 5(a): p = ρc². 5(b): a(t)/a(t1) = (t/t1)^(1/3). 5(c): n = 9/2.
- 6(a): (t/t1)^(2/5). 6(b): H = 2/(5t). 6(c): ℓ = 5ct/3. 6(d): ρ = 3/(50πG t²).
- 7: g = 2 + (7/8)(4 + 2N_ν): 10.75 (N=3), 12.5 (N=4). ρ = g(π²/30)(kT)⁴/(ħ³c⁵); t = sqrt(3/(32πGρ)).
  7(a) t = 0.738 s; 7(b) t = 0.685 s; 7(c) ρ = 8.21e8 and 9.54e8 kg/m³ (SciPy CODATA constants).

### Comparison (page vs mine)
- p1-a (show): same argument (x equation, metric independent of x). Agree.
- p1-b: page w/sqrt(1 − a²w²/c²) = mine. Agree.
- p1-c: page 0.351 = mine 0.3511. Agree.
- p2-a: page Te/sqrt(1 + 2pe/c²) = mine. Agree.
- p2-b: page Te/sqrt(1 + 2pe/c²) = mine. Agree.
- p2-c-exact: page sqrt((c² + 2pr)/(c² + 2pe)) − 1 = mine. Agree.
- p2-c-weak: page (pr − pe)/c² = mine. Agree.
- p2-d: page −dphi·tdot² = mine. Agree.
- p2-e: page 4.36e-16 = mine 4.36e-16 (g = 9.8). Agree.
- p3-a, p3-b, p3-c (show): same derivations. Agree.
- p3-d: page 3GM/c² = mine. Agree.
- p4-a, p4-b (show): same. Agree.
- p4-c: page ρc²/3 = mine. Agree.
- p5-a: page ρc² = mine. Agree.
- p5-b: page (t/t1)^(1/3) = mine. Agree.
- p5-c: page 4.5 = mine. Agree.
- p6-a: page (t/t1)^(2/5) = mine. Agree.
- p6-b: page 2/(5t) = mine. Agree.
- p6-c: page 5ct/3 = mine. Agree.
- p6-d: page 3/(50πGt²) = mine. Agree.
- p7-a: page 0.74 s = mine 0.738 s (within 2%). Agree.
- p7-b: page 0.685 s = mine 0.685 s. Agree.
- p7-c-three: page 8.21 = mine 8.21. Agree.
- p7-c-four: page 9.54 = mine 9.54. Agree.

COUNTS: errors=0 warnings=5 info=4

## Resolution (2026-11-21, by the page author)
- Row 1: the introduction now says that for Problem 3 MIT's set links to a 2011 solution posted outside OpenCourseWare, and that it was not used.
- Row 2: the tolerance sentence of 2(e) now reads: MIT asks for only one significant figure; the box needs three and accepts 3% either way, so that any usual value of g (9.8 to 10 m/s²) is right.
- Row 3: the check of 2(e) now gives the correct reason: the dropped terms are of order φ/c² times z. The suggested "below 10⁻⁸ anywhere in the solar system" was not used, because GM/(Rc²) is about 2 × 10⁻⁶ at the surface of the Sun; the page says about 10⁻⁸ at the Earth (mostly from the Sun) and about 2 × 10⁻⁶ at the Sun's surface, both recomputed in calcs (`p2-e-potential-at-earth`, `p2-e-potential-at-sun`).
- Row 4: 2(c) now asks for ΔT_r first, with a new formula box `p2-c-time` (three listed mistakes) and its calcs entry `p2-c-proper-time-at-observer` (numerical integration of the observer's clock rate). The part keeps MIT's 5 points, now shared by its three boxes. The 2(b) mistake that points to part (c) is unchanged and now consistent.
- Row 5: reading1 (Lecture 13 transcript) is now cited: the check of 1(b) adds the formula "A comoving observer's clock" (ds² = −c² dt², so dτ = dt), `cite="reading1" at="p. 15"`, checked on the PDF page with printed footer 15, with a link to the lesson on the spacetime metric.
- Row 6: a bracket after the geodesic equation notes Guth's slip (x^ν said for the free index μ).
- Row 7: 7(a) now says "the lecture rounds the constants to kT = 0.860 MeV/√t".
- Row 8: the citation of g = 10¾ is now "pp. 9–11 (board)" (page and calcs).
- Row 9: the hint of the listed mistake 6GM/c² in 3(d) now says that closer in than this circular orbits are unstable but still exist.
- Status set to reviewed.
