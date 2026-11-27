---
page: content/year-4/8.07/8-07-problem-set-4.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset04/ (read: pdftotext of the sheet, "Problem Set 4 REVISED", October 2, 2012)
  - 8.07 Lecture Notes 4 (read, pdftotext page by page; printed page headers checked)
  - 8.07 Lecture Notes 5, handwritten (read: rendered pages 58, 63, 64)
  - 8.07 Lecture Notes 7 (read, pdftotext page by page)
  - 8.07 Lecture Notes 8 (read, pdftotext page by page)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/ (read: PDF fetched, eq. (3.33) found on printed p. 10)
  - Griffiths: not opened (course rule)
verdict: pass
---

# Review: Problem Set 4: Laplace's equation in a box, a chain of image charges, spherical harmonics and charged spheres

## Blind solve

### My answers (written before opening the full page)
- 1(a): V = V0 sinh(γz)/sinh(γh) sin(πx/L) sin(πy/L), γ = √2 π/L. Centre: V0 sinh(πh/(√2L))/sinh(√2πh/L) = V0/(2 cosh(πh/(√2 L))). Cube: 1/(2cosh(π/√2)) = 0.1072.
- 1(b): c_nm = (4/L²)∫∫V(x,y,h) sin sin; non-zero only for n ≡ 2 (mod 4) and m odd; c_nm = 32 V0/(π² n m).
- 1(c): V(L/4, L/2, L/2)/V0 = Σ (32/(π² n m)) sin(nπ/4) sin(mπ/2) / (2cosh(γ_nm L/2)) = 0.0465 (series converged).
- 2(a): q1 = −q0 at z = −z0.
- 2(b): q2 = q0 R/(2z0), z2 = z0 − R²/(2z0); q3 = −q0 R/(2z0), z3 = −z0 + R²/(2z0); q4 = q0 R²/(4z0² − R²), z4 = z0 − 2z0R²/(4z0² − R²).
- 2(c): V = q0/(4πε0 R) (= V0; each image pair q1+q2, q3+q4 is zero on the sphere).
- 2(d): W = ½ V0 (q0+q2+q4) = 2πε0 R V0² [1 + R/(2z0) + R²/(4z0² − R²) + …]. Numbers: bracket 1.31667, W = 1.318 µJ (ε0 = 8.8541878e-12).
- 2(e): No: the charge sits on the outer surface; outside fields identical.
- 3(a): A_ℓm = ∫ Y*_ℓm(θ,φ) V0(θ,φ) dΩ (r^ℓ only, regular at origin).
- 3(b): A11 = −√(2π/3) V1 = −1.447 V1 (A1,−1 = +√(2π/3) V1); V = V1 (r/a) sinθ cosφ = V1 x/a.
- 4(a): V = −E0 r cosθ + E0 R³ cosθ/r² + Q/(4πε0 r); sphere at Q/(4πε0 R).
- 4(b): σ = 3ε0E0 cosθ + Q/(4πR²); Q_min = 12πε0E0R² = 13.35 nC.
- 4(c): F_z = (1/2ε0)∫σ² cosθ da = (1/ε0)(3ε0E0)(Q/4πR²)(4πR²/3) = QE0.
- 5(a): p = 2πσ0R³ (along +z).
- 5(b): odd ℓ only; c_ℓ = ∫₀¹ P_ℓ dx: c1 = 1/2, c3 = −1/8, c5 = 1/16.
- 5(c): V(z) = (σ0 R/(ε0 z))(√(R²+z²) − z); 2.40 × 10³ V (2399.6 V).
- 6(b): −q b/(4πε0R³).
- 6(c): −q/(4πε0 b²) (= field of q at the centre).
- 6(d): E_z = −2157.1 − 898.8 = −3.056 × 10³ V/m; inside charges: only their total dipole moment about the centre (E_avg = −p/(4πε0R³)).
- Writer's doubt 2(d): exact sphere–plane series Σ sinh α/sinh(nα) with cosh α = z0/R = 2 gives 1.34106 (computed, 60 terms), so "1.341" is right.

### Comparison (one line per answer id)
- p1-centre: page V0 sinh(πh/(√2L))/sinh(√2πh/L), mine the same. Agree. Mistakes with γ = π/L and γ = 2π/L checked; hints true.
- p1-cube: page 0.107 (1%), mine 0.10719. Agree.
- p1-which: page "n = 2, 6, 10, … and m odd". Agree.
- p1-coef: page 32V0/(nmπ²), mine the same. Agree. Mistakes 16, 8 and n²m² forms: hints true (8 is the factor 1/L² in place of 4/L², checked).
- p1-point: page 0.0465 (2%), mine 0.04646 (30 × 60 terms). Agree. "First term alone 4% too large": 0.0483/0.04646 = 1.040, true. Signs of the six terms in the calcs entry checked.
- p2-first: −q0 at −z0. Agree.
- p2-q2: q0R/(2z0); p2-z2: z0 − R²/(2z0). Agree. Mistake hints checked (distance taken as z0 gives q0R/z0 and z0 − R²/z0).
- q3, z3 (no box): −q0R/(2z0), −z0 + R²/(2z0). Agree.
- p2-q4: q0R²/(4z0² − R²); p2-z4: z0 − 2z0R²/(4z0² − R²). Agree. At z0 = 2R: q4 = q0/15, z4 = 1.7333R, z2 = 1.75R, as the page's check says.
- p2-v: q0/(4πε0R). Agree. Check value at the origin (1/15)/1.7333 = 0.0385 V0, true.
- p2-w: 2πε0RV0²[1 + R/(2z0) + R²/(4z0² − R²)]. Agree.
- p2-wnum: page 1.32 µJ (1%), mine 1.3185 µJ. Agree.
- Writer's doubt 2(d): "1.341" confirmed by the exact series (1.34106). "Within 2%": 1.31667/1.34106 = 0.982, true.
- p2-shell: "the same, because …". Agree.
- p3-coef: ∫Y*ℓm V0 dΩ. Agree.
- p3-a11: page −1.447 (1%), mine −√(2π/3) = −1.4472. Agree. The page's check integral (4/3 × π × √(3/8π) = 1.4472) true.
- p3-inside: V1 x/a. Agree.
- p4-v: −E0 r cosθ + E0R³cosθ/r² + Q/(4πε0r). Agree. All four mistake hints true.
- p4-sigma: 3ε0E0cosθ + Q/(4πR²). Agree. Four mistake hints true.
- p4-qmin: page 13.4 nC (1%), mine 13.35 nC. Agree (0.4%).
- 4(c) (no box): F = QE0. Agree; integral steps checked.
- p5-p: 2πσ0R³. Agree. Mistakes πR³σ0, 4πR³σ0, 0: hints true.
- p5-which: odd ℓ only. Agree.
- p5-c3: −0.125; p5-c5: 0.0625. Agree (c1 = 1/2 also agrees).
- p5-axis: σ0R(√(R²+z²) − z)/(ε0z). Agree. vars keep z > R. Mistake hints true (dipole term at z = R gives 0.5 against the exact 0.414; the half form tends to σ0R³/(4ε0z²); the third form tends to a constant over z).
- p5-vnum: page 2400 V (1%), mine 2399.6 V. Agree. Series check 0.125 − 0.0078 + 0.0010 = 0.1182 against 0.1180, true.
- p6-in: −qb/(4πε0R³). Agree. Mistake hints true (density q/R³ gives qb/(3ε0R³)).
- p6-out: −q/(4πε0b²). Agree.
- p6-num: page −3056 V/m (1%), mine −3055.9 V/m. Agree.
- p6-dep: total dipole moment about the centre. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Frontmatter `covers: [5, 6, 7, 8]` | Sheet dated Oct 2 (due Oct 5), reading Griffiths 3.3–3.4; Notes 7 (Oct 8) and Notes 8 (Oct 11) are dated after the due date | Covers Notes 5–8 | Acceptable: Problem 3 needs Yℓm (Notes 8) and Problems 4–5 the Legendre series (Notes 7), the material of the sheet's reading. Optionally one sentence in the intro saying the notes for this material are dated just after the set was due. |
| 2 | info | 2(d), "The energy of a charged conductor", reading4 eq. (4.5) p. 2 | Notes 4 eq. (4.5) is the same step written for a sphere, ending in Q²/(8πε0R) | ½∫ρV = ½QV, general | Fine as a citation of the method; optionally add "(written there for a sphere)" to `at`. |
| 3 | info | 3(b), Y1,±1 cited to eqs. (8.36)–(8.37), p. 7, "written out for ℓ = 1" | General Yℓm and Pℓm (Jackson's form, (−1)^m in (8.37)) | Y1,±1 = ∓√(3/8π) sinθ e^{±iφ} | Verified: (8.37) with ℓ + m derivatives gives P1^1 = −sinθ and P1^−1 = ½ sinθ, so (8.36) gives exactly both functions, m = −1 included. Citation fair; no change. |
| 4 | info | 5(b), P3 and P5 cited to eq. (8.10), p. 2, "worked out" | Rodrigues' formula | P3, P5 written out | Verified correct; citation fair; no change. |

## Arithmetic and answer checks
- Every number recomputed independently (Python in the scratch folder): 0.10719; 0.04646; 1.3185 µJ; 1.34106; −1.4472; 13.35 nC; 2399.6 V; −3055.9 V/m; cosh(π/√2) = 4.6646 (page 4.665); c21 = 1.621; √5π/2 = 3.512; cosh 3.512 = 16.78; √13π/2 = 5.664, cosh = 144.1; (6,1) term −3.8 × 10⁻⁵; 2πε0RV0² = 1.0014 × 10⁻⁶ J; σ0R/ε0 = 2.033 × 10⁴ V; (√5 − 2)/2 = 0.1180; p_z = 2.4 × 10⁻¹⁰ C m; −2157 and −899 V/m. All match the page.
- Every solution ends with a check (limit, special case or number); all checks verified true.
- Answer boxes: every formula's `vars` keeps it and its mistakes finite and physical (z0 > R, r > R, z > R; b < R in p6-in, b > R in p6-out). Tolerances 1–2% reject the near-misses (first term of 1(c) is 4% off). Every mistake differs from the answer and every mistake hint is true of its formula. Choice answers at varied positions (2, 1, 3, 0, 2, 1, 3), right choice neither always longest nor shortest.
- Hints: none gives a result away.
- Calcs file read in part (header, Problem 1 entries, p1-point, p2-wnum); it ties the boxes with independent routes. `calc:test` was not run in this review.

## Coverage and order
- All six MIT problems present in MIT's order with MIT's points (15, 25, 15, 15, 15, 20 = 105). Problem 2 parts (a)–(e) and Problem 3 with eq. (3.1) follow the sheet; our additions (2(d) number box, 3(b)) are marked as such.
- Problems 1, 4, 5, 6 are Griffiths pointers on the sheet: each is replaced by an own problem on MIT's title, marked "(our own problem)" in its heading and listed in the intro, with MIT's points. Each is well posed (boundaries, the constant fixed in 4(a), the charge position in 6) and correct, as the blind solve shows. Nothing suggests a reconstruction of the textbook problem.
- Problem 2's q1–q4 for MIT's primes and ℓ for MIT's l are explained in the intro.

## Licensing
- The sheet has no rights or courtesy notice; none seen on the notes pages read. The page has no figures. No OpenStax, LibreTexts or Griffiths material; Jackson is only named as MIT names it. MIT's Problem 2 and 3 statements are paraphrased, not copied.
- `references.qm`: 8.04 notes eq. (3.33) is on printed p. 10 and is the orthonormality relation used. Correct.

## Notes
- Citations checked against the sources: Notes 4 eqs. (4.5) p. 2, (4.11) p. 2, (4.13) p. 4; Notes 5 pp. 58–59 (plane image; rendered p. 58 seen), p. 63 (q = −(a/R)Q, r = a²/R; the page's notation remark is right), pp. 64–65 (C1 + C2 + C3; rendered p. 64 seen); Notes 7 eqs. (7.2), (7.4) p. 1, (7.8) p. 2, (7.18) p. 4 (Ã = R²/(2ε0)∫Pσ dx, consistent with the standard result); Notes 8 eqs. (8.3) p. 1, (8.10) p. 2, (8.36)–(8.37) p. 7. Typed notes' page numbers read from the printed headers, which agree with the PDF page.
- 6(c) mean-value remark (writer's doubt): the average of a potential over a sphere with no charge inside equals its value at the centre is the standard mean-value property of solutions of Laplace's equation; true, presented as a "better known fact" and not cited. No change needed.
- 4(c) closing check argues by Newton's third law; true. A more direct argument (self-forces cancel, so F = ∫σE0 da = QE0) is optional.
- p5-axis third mistake is the lower half alone with a plus sign; the hint's statement (tends to a constant over z, a net charge) is true. Wording optional.
- No em dashes, no `## Summary`, no control characters. 110 lines of data/symbols.json name the page (not checked one by one).

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-27, by the page author)

- No errors or warnings. The info items are optional and kept as they are.

Status set to `reviewed`.
