---
page: content/year-2/8.033/8-033-problem-set-3.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/ps3/ (read: ps3.pdf, all 5 pages, text and page images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read: slides 16, 18)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: slides 4, 10, 12, 16, 17, 20, 21)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture6_kinem3/ (read: slides 22, 23, 27, 28)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture7_kinem4/ (read: slides 9, 18)
verdict: needs-changes
---

# Review: Problem Set 3: the Lorentz transformation at work

Order followed: the blind answers (section "Blind solve" below) were written to this file before the full page, its calcs file or its symbol meanings were opened. Blind script: scratchpad/8033/review/py/blind.py.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 6(b) solution, step "Check the result" | (not in MIT; our own check) | "$x - ct = \gamma(1 + \beta)(x' - ct')$" | Wrong factor. From $x = \gamma(x' + \beta ct')$ and $ct = \gamma(ct' + \beta x')$: $x - ct = \gamma(1 - \beta)(x' - ct')$. Numerical check (β = 0.6, x′ = 1.3, ct′ = 0.4): x − ct = 0.450 = γ(1−β)(x′−ct′), while γ(1+β)(x′−ct′) = 1.80. Change to $\gamma(1 - \beta)$ (equal to the Doppler factor $\sqrt{(1-\beta)/(1+\beta)}$); the conclusion is unchanged. Add a calcs identity for it. |
| 2 | warning | Problem 5 statement, Formula "Rotation and boost" and the bracketed note | MIT: rotate "in the S′ frame" until the motion is along the new x′ axis, then the usual transformation "can be applied to find x, y, and t", then rotate the S frame back; Λx printed with +γβ (p. 2) | "First turn the axes of S by the angle θ … then apply the usual Lorentz transformation"; Λx shown with −γβ under `cite="mit"` eq. (5.2); the note says MIT's +γβ "is the inverse transformation" | MIT's +γβ is consistent with MIT's own route, which goes from the coordinates of S′ to those of S ("to find x, y, and t"). The page's choice (S → S′, −γβ) is fine and the boxes are right for it, but the note reads as if MIT's sign contradicted the problem. Reword, e.g.: "MIT's route starts in S′ and finds x, y and t, so its Λx has +γβ (the lecture's Λ(−v)). Here we go the other way, from S to S′, which changes the sign of β." Also say that the first rotation here acts on S (MIT: on S′). |
| 3 | warning | Statements of Problems 1(a), 3, 4 and 13(a) | "how long would it have lasted before decay had it been at rest with respect to the detector?"; "Can a person, in principle, travel from earth to the galactic center … in a normal lifetime? Explain, using either time-dilation or length contraction arguments."; "(like a watermelon: One principal axis is longer than the other two.)"; "A short while later, the right door opens and the pole passes harmlessly out of the barn." | "how long would it have lived had it been at rest in the detector?"; "Can a person, in principle, travel from the Earth to the galactic centre within a normal lifetime? Explain with time dilation or with length contraction."; "like a watermelon: one principal axis is longer than the other two"; "A little later the right door opens and the pole leaves the barn unharmed." | These sentences follow MIT almost word for word (single sentences, so no licence problem under CC BY-NC-SA, but the task asks for our own wording). Rephrase, e.g. 13(a): "Could a traveller reach the galactic centre, at least in principle, before dying of old age? Argue once from time dilation and once from length contraction." 3: "What lifetime would the particle have if it sat still in the detector?" 1(a) choices: "an ellipsoid with one long axis and two equal short ones (a rugby ball)" / "one short axis and two equal long ones (a lentil)". 4: "Shortly afterwards the right door is opened and the pole runs out without damage." |
| 4 | warning | Problem 12(a) hint; page-scoped meaning of λ | (no MIT counterpart) | The hint writes "$\lambda = \lambda_0\sqrt{(1 - \beta)/(1 + \beta)}$", λ being the received wavelength; the λ meaning for this page is "The wavelength of the light for hydrogen at rest in the laboratory (Problem 10)" | The popup gives the wrong meaning for λ in this hint. Write $\lambda_{\text{approach}} = \ldots$ in the hint (that symbol already has a meaning). |
| 5 | info | Problem 2 points | "(3+3 pts)" for three questions labelled (a), (b), (b) | 2+2+2 | Allowed by the intro ("fewer numbers than parts, the split is ours"). |
| 6 | info | Problem 7(b) | "Which flash will S′ find to be the more distant from the origin of her reference frame?" | Asks which flash has the larger x′, with a bracket saying why | Verified: the positions in S′ depend on the absolute times, which the data do not give, so only the sign of Δx′ (= +2400 m) is fixed. Good, openly flagged. |
| 7 | info | Problem 10(a) | "the classical Doppler equation" (form not given) | Moving-source form λobs = λ(1 + v/c), v/c = 2; the check notes that the moving-observer form gives 2/3 | Correct: only the moving-source form gives v > c, so it is the one MIT means. Stated openly. |
| 8 | info | Problem 12 title | "Ives-Stillwell" | "Ives–Stilwell" | The page's spelling is the correct one (G. R. Stilwell). |
| 9 | info | MIT citations `at=` | MIT's PDF has printed page numbers 1 to 5 at the foot, equal to the PDF page numbers | p. 1 to 4 | All checked (P1 to P3 p. 1; P5 pp. 2–3, eq. 5.1 to 5.3; P6 eq. 6.1 p. 3; P7 p. 3; P13 to P16 p. 4): correct. (The task note said the PDF has no printed numbers; it does, and they match.) |

## Arithmetic and answer checks
- Every number on the page recomputed (c = 2.998e8 m/s): p2 L = 0.93808 m, θ = 32.208°, Δx = 0.7937 m; p3 Δt = 3.5306 ps, τ = 0.44569 ps, γ = 7.92, contracted track 0.133 mm; p4 ct′_B = −8.660 m, left end (−15, −17.32), right end (20, 17.32), interval 25 m²; p4(d) door positions 7.5 and 11.5 m at t′_B, 0 and 4 m at t′_A, door opening at ct = 3.464 m and ct′ = −6.93 m, 11.55 ns, door speed 7.5/8.66 = 0.866; p5 number test x′ = −0.5446, y′ = 1.108, ct′ = 2.3505, interval −4.0006; p7 a = 0.62458, β = 0.89861, γ = 2.2793, Δx′ = +2400 m, 2.694e8 m/s; p8 Δs² = 191 080 m² (190 000 with c = 3e8, inside 2%), Δσ = 437.13 m, β = −0.8994, 1000 × 0.43713 = 437 m, 3.33e8 m/s; p10 2 and 0.8; p11 0.5, γω = 1.1547ω; p12 β = 0.0066711, 482.9007 and 489.3869 nm, shifts −3.2323 and +3.2539 nm, classical 482.890 and 489.376 nm and 3.243 nm, average 486.144 nm, (γ−1)λ0 = 10.818 pm; p13 γβ = 933.33, 1 − β = 5.7398e−7, v = 0.99999943c, extra Earth time 0.016 y (about 5.9 days); p14 4.00 and 2.50 µs (t_e = 3.125 µs); p15 3^6 = 729, 3^7 = 2187, sequence 0.5, 0.8, 0.92857, 0.97561, 0.99180, 0.99726, 0.99909, atanh 0.5 = 0.5493, atanh 0.999 = 3.8002, ratio 6.918; p1(a) 0.436; p1(c) 0.866; p1(d) 170 m/s gives β = 5.7e−7, γ − 1 about 1.6e−13. All correct. The only mistake found is the formula of item 1.
- Formula boxes compared with my results by value (p2-len, p2-theta, p5-xx, p5-xy, p5-t, p6-dx, p6-dt, p9-u, p16-v): all equal; p5 also against R(−θ)Λx R(θ) numerically (max difference 2e−16).
- `vars` ranges: finite and physical (p9: ux² + uy² ≤ 0.72 < c² with c ≥ 1; v < c in p6 and p9; u > c in p16). In p5 g and b are independent symbols, and the page tells the reader so.
- Each listed mistake differs from the answer over its ranges, and each mistake hint is true of its formula. One imprecision (info): p9, second mistake, says the factor √(1 − v²/c²) arises because "the particle's clock time and the time of S differ"; it comes from the clocks of S′ against those of S (slide 16 of Lecture 5: dt = γ(dt′ + v dx′/c²)), not from the particle's clock. Suggest "the clocks of S′ and of S differ".
- Tolerances: p12 ±0.004 nm rejects the classical values (0.011 nm away) and accepts β rounded to four figures or c = 3.00e8 (0.002 nm shift). p8-s2 2% accepts either value of c and rejects the opposite sign. p15 ±0.1 on 7.
- calcs: p15-n is a workaround (log 1999/log 3 = 6.918, within an absolute 0.1 of 7), since the harness has no ceil; p15-after-six and p15-after-seven bracket the answer properly, so the 7 is still tested (info). No calcs entry covers the x − ct factor of item 1.
- Slide citations checked on the slide PDFs: Lecture 4 slides 16 (Lorentz transformation) and 18 (inverse; parallel velocities); Lecture 5 slides 4 (time dilation), 10 (inverse = Λ(−v)), 12 (length contraction), 16 (u_x, u_y with √(1−v²/c²)), 17 (rapidities add), 20 (xᵗηy invariant), 21 (interval, proper distance and time); Lecture 6 slides 22 (γ_{u′} = γ_u γ[1 + u_x v/c²]; the page swaps the roles correctly), 23 ("how does it look?"), 27 (k′ = kγ(1 − β cos θ) and the cos θ′ formula), 28 (λ′/λ = k/k′; transverse Doppler ω′ = ωγ); Lecture 7 slides 9 (three Doppler curves) and 18 (superluminal signals, "(PS3)", the answer sent back). All correct.
- Problem 1(b) solution: the cone argument (kᵗηa = 0 with a = (â, cos α); a is spacelike, so the image is again a circular cone) is sound. "this delay makes up for the contraction in the picture" simplifies the Penrose–Terrell result (the image appears rotated); acceptable (info).

## Coverage and order
- All 16 MIT problems and every part, in MIT's order. MIT's 3 points for handing in are left out, and the page says so. 77 points for Problems 1 to 12 = MIT's 4+6+3+12+6+9+6+10+3+6+3+9. The optional problems get our own points, stated.
- MIT's two figures are described in words, not redrawn.

## Licensing
- MIT PS3 has no "All rights reserved" or "Courtesy of" notice (all five pages checked). The slides are only cited.
- Resnick and Halliday is named as MIT's source and not used; Problem 9's pointer to it is replaced by a derived form. No OpenStax or LibreTexts material.
- Wording is mostly our own; item 3 lists four sentences that follow MIT closely.

## Notes
- Writer's decisions checked: P5 −γβ (correct for S → S′; the framing needs item 2); P7(b) larger x′ (sound); P10(a) moving-source formula (the only classical form that gives v > c); P12 tolerance 0.004 nm (sound); P1(b) sphere argument (sound); P15 calcs workaround (acceptable).
- No em dashes; no `## Summary` with answers. The cosmology callout in Problem 10 is correct (ratio 3 = 1 + z = growth of the scale factor) and links to an existing page (content/year-4/8.286/cosmological-redshift.mdx). All four prerequisite lessons and the speed-of-light lesson exist; the Galilean wave equation quoted in Problem 6's check matches that lesson (its slide 9 formula).
- Hints: none gives a final number away. The p12(c) hint ("the average of the two square-root factors is exactly γ") leads straight to (γ − 1)λ0 but leaves the evaluation (info).
- Symbol meanings for the page were read; apart from item 4 they fit. v is described as "the speed of the frame S′ relative to S"; in Problem 10 it is the quasar's speed of recession (minor, info).

## Blind solve

### My answers (written before opening the full page)
c = 2.998e8 m/s. Script: scratchpad/8033/review/py/blind.py.

- p1a: oblate ellipsoid (contracted along the motion, one axis shorter).
- p1b: looks like a sphere (Terrell–Penrose rotation; outline stays circular).
- p1c: redshifted (velocity always perpendicular to the line of sight; pure time dilation, f = f0/γ).
- p1d: neither (classical Doppler with source velocity perpendicular to line of sight at emission; no time dilation for sound at these speeds).
- p2a: L = L' sqrt(1 − β² cos²θ') = L' sqrt(cos²θ'/γ² + sin²θ').
- p2b: θ = atan(γ tan θ') = atan(tan θ' / sqrt(1 − β²)).
- p2c: L = 0.9381 m; θ = 32.21°.
- p3: lab time 3.531 ps; proper lifetime τ = 0.4457 ps.
- p4a: ct'_B = −5√3 = −8.660 m.
- p4b: left end at x = −15.00 m, ct = −10√3 = −17.32 m.
- p4c: right end at x = 20.00 m, ct = +10√3 = +17.32 m.
- p4d: in S' the barn is 4 m and moves left; event B (ct' = −8.66 m) happens before A (ct' = 0); the right door (at x = 8 m, t = 0 gives ct' = −13.86 m, opening "a little later" in S is still well before A in S') opens before the left door closes; the pole is never shut in for the vaulter.
- p5a: Λxx = 1 + (γ−1)cos²θ = γcos²θ + sin²θ; Λxy = (γ−1) sinθ cosθ; (Λxt = −γβ cosθ; Λyx = (γ−1) sinθ cosθ; Λyy = γ sin²θ + cos²θ; Λyt = −γβ sinθ). Checked numerically against R(−θ)Λx R(θ) (max diff 2e−16).
- p5b: ct' = γ(ct − β x cosθ − β y sinθ) = −γβ cosθ x − γβ sinθ y + γ w.
- p6a: ∂f/∂x = γ ∂f/∂x' − (γv/c²) ∂f/∂t'; ∂f/∂t = −γv ∂f/∂x' + γ ∂f/∂t'.
- p6b: second derivatives give ∂²E/∂x² − (1/c²)∂²E/∂t² = γ²(1 − v²/c²)[∂²E/∂x'² − (1/c²)∂²E/∂t'²] = same form (cross terms cancel).
- p7a: β = 2 a d/(a² + d²) with a = cΔt = 1499 m, d = 2400 m: β = 0.8986 (S' moves in +x).
- p7b: Δx' = +2400 m: the red flash has the larger x'.
- p8a: Δs² = 1.911e5 m² (191 080 m²).
- p8b: Δσ = 437.1 m.
- p8c: β = −0.8994: speed 0.8994c in the −x direction.
- p8d: no (Δτ would be imaginary).
- p8e: spacelike.
- p9: u = sqrt((u_x' + v)² + u_y'²(1 − v²/c²)) / (1 + v u_x'/c²); equivalently 1 − u²/c² = (1 − u'²/c²)(1 − v²/c²)/(1 + v u_x'/c²)².
- p10a: v/c = 2.
- p10b: v/c = 0.8.
- p11: speed 0.5c, moving along the bisector of the 120° angle between the beams (beams fired at right angles to the motion in the ship frame, each 60° from the velocity in yours).
- p12a: 482.901 nm.
- p12b: 489.387 nm.
- p12c: (γ − 1)λ0 = 10.82 pm.
- p13a: yes in principle (traveller's proper time can be short; or contracted distance).
- p13b: γβ = 933.33; 1 − v/c = 5.740e−7.
- p14a: 4.00 µs.
- p14b: 2.50 µs.
- p15: 7 increments (6 gives 0.99726c, 7 gives 0.99909c).
- p16: v > c²/u.

### Comparison (after opening the page)
- p1-a: page oblate (choice 2) = mine. Agree.
- p1-b: page sphere (choice 0) = mine. Agree.
- p1-c: page redshifted (choice 0) = mine. Agree.
- p1-d: page neither (choice 2) = mine. Agree.
- p2-len: page L0*sqrt(1 − b²cos²th) = mine. Agree.
- p2-theta: page atan(tan th/sqrt(1 − b²)) = atan(γ tan θ′), mine. Agree.
- p2-len-num 0.938 m / p2-theta-num 32.2°: mine 0.9381 m / 32.21°. Agree.
- p3-tau: page 0.446 ps; mine 0.4457 ps. Agree.
- p4-a: page −8.66 m; mine −8.660 m. Agree.
- p4-b-x / p4-b-t: page −15 / −17.3 m; mine −15.00 / −17.32 m. Agree.
- p4-c-x / p4-c-t: page 20 / 17.3 m; mine 20.00 / 17.32 m. Agree.
- p4(d) (self-marked): page's account matches mine (barn 4 m, right door opens before the left door closes in S′, never shut in). Agree.
- p5-xx: page 1 + (g − 1)cos²th = mine. Agree.
- p5-xy: page (g − 1) sin th cos th = mine. Agree.
- p5-t: page g(w − b(x cos th + y sin th)) = mine. Agree.
- p6-dx: page −g v/c² = mine. Agree.
- p6-dt: page −g v = mine. Agree.
- p6(b) (self-marked): page's derivation matches mine; the extra check step has a wrong factor (error 1).
- p7-beta: page 0.899; mine 0.8986. Agree.
- p7-b: page red (choice 1) = mine. Agree.
- p8-s2: page 191000 m²; mine 191 080 m². Agree.
- p8-sigma: page 437 m; mine 437.1 m. Agree.
- p8-beta / p8-dir: page 0.899, −x; mine 0.8994, −x. Agree.
- p8-d: page No = mine. Agree.
- p8-e: page spacelike = mine. Agree.
- p9-u: page sqrt((ux + v)² + uy²(1 − v²/c²))/(1 + ux v/c²) = mine. Agree.
- p10-a: page 2 = mine. Agree.
- p10-b: page 0.8 = mine. Agree.
- p11-beta / p11-dir: page 0.5, along the bisector towards the side the beams lean to (choice 0); mine 0.5, along the bisector, forward between the beams. Agree.
- p12-a: page 482.901 nm = mine. Agree.
- p12-b: page 489.387 nm = mine. Agree.
- p12-c: page 10.8 pm; mine 10.82 pm. Agree.
- p13(a) (self-marked): yes, in principle; agree.
- p13-b: page 5.74e−7 = mine. Agree.
- p14-a: page 4.00 µs = mine. Agree.
- p14-b: page 2.50 µs = mine. Agree.
- p15-n: page 7 = mine. Agree.
- p16-v: page c²/u = mine. Agree.

No disagreement between my blind answers and the page's answers.

COUNTS: errors=1 warnings=3 info=10

## Resolution (2026-11-21, by the page author)

- **1 (error), Problem 6(b) check:** the factor is now $x - ct = \gamma(1 - \beta)(x' - ct')$. A calcs identity (`p6-light-cone-coordinate`) checks it from the inverse transformation.
- **2 (warning), Problem 5 note:** reworded. The note now says that MIT's $+\gamma\beta$ fits MIT's own route (from the coordinates of $S'$ to $x$, $y$, $t$; the lecture's $\Lambda(-v)$), that the page goes the other way, from $S$ to $S'$, and that the first rotation therefore acts on the axes of $S$. The statement says the route is followed from $S$ to $S'$.
- **3 (warning), wording:** rephrased the four sentences: the two ellipsoid choices of Problem 1(a) (rugby ball, lentil), the last sentence of Problem 3, the door sentence of Problem 4, and the question of Problem 13(a).
- **4 (warning), Problem 12(a) hint:** the hint now writes $\lambda_{\text{approach}}$.
- **Info, Problem 9 mistake hint:** now "the clocks of S' and of S differ".
- **Info, meaning of v:** the page-scoped meaning now also names the quasar (Problem 10) and the atoms (Problem 12).
- **Other info items** (points of Problem 2, Problem 7(b), Problem 10(a), the spelling Stilwell, page numbers, the Problem 15 calcs workaround, the simplified Penrose–Terrell remark, the Problem 12(c) hint): left as they are; the review found them acceptable.
- `status: reviewed`. `content:check`, `calc:test -k 8-033-problem-set-3` and `test:answers` pass.

