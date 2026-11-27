---
page: content/year-4/8.07/8-07-problem-set-8.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset08/ (read: pset08.pdf, p. 1 rendered, both pages as text)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read: pp. 7, 8, 9 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read: slides 9, 10, 15, 16 rendered; PDF page = slide number)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: Eq. (9.1.1) on printed p. 2)
  - Griffiths, Jackson (not opened, by the course rule)
verdict: needs-changes
---

# Review: Problem Set 8 (8.07), magnetic fields in matter

Writer: Opus. Reviewer: Opus (same model, blind).

The blind answers below were written into this file before the full page, its calcs file or Set 7 were opened. Every answer was checked numerically (scratchpad `py8/blind.py`: Biot–Savart summed over the square, the force on a small loop in the slab field by direct integration of I dl x B, the bar-magnet axis field and its far limit, and a root search for the three-magnet stack).

## Blind solve

### My answers (written before opening the full page; checked with py8/blind.py)
- p2a: B_z(0,0,z) = mu0 I a^2 / [2 pi (z^2 + a^2/4) sqrt(z^2 + a^2/2)] (Biot-Savart summed numerically over the four sides agrees at z = 0, 0.7a, 2a to 1e-9 relative).
- p2b: z >> a: B_z -> mu0 I a^2/(2 pi z^3) = mu0 (2m)/(4 pi z^3), dipole on-axis field with m = I a^2.
- p2c: ratio at z = 2a: 8/(4.25 sqrt 4.5) = 0.88735.
- p3a: dl2 x (dl1 x R) = dl1 (dl2.R) - R (dl1.dl2); the first term has oint_2 dl2 . R/R^3 = -oint_2 dl2 . grad_2(1/R) = 0 (closed-loop integral of a gradient).
- p3b: swapping 1 and 2 changes R -> -R, dl1.dl2 symmetric, so F1 = -F2.
- p3c: dl1 x R = x-hat x x-hat = 0, so field of piece 1 at piece 2 vanishes: force on piece 2 = 0. (Force on piece 1 from piece 2 = -mu0 I1 I2 dl1 dl2/(4 pi d^2) y-hat, not zero: third law fails.)
- p4a: inside B_y = -mu0 J z; above (z > b) B_y = -mu0 J b; below +mu0 J b.
- p4b: m = m y-hat: grad(m.B) = -mu0 J m z-hat, F_z = -mu0 J m. m = m z-hat: grad(m.B) = 0, (m.grad)B = -mu0 J m y-hat; they differ by mu0 m x J.
- p4c: grad(m.B) for a current loop. Linear expansion of I oint dl x B gives F_i = d_i(m.B) - m_i div B exactly; curl B = mu0 J does not enter. Numerical loop integral in the slab field: m along y gives F/(mu0 J m) = (0, 0, -1.000); m along z gives 0. So the sign -mu0 J m z-hat is confirmed. (m.grad)B belongs to a Gilbert pair of magnetic charges.
- p5a: B_z(z) = (mu0 M0/2)[ (z + L/2)/sqrt((z+L/2)^2 + a^2) - (z - L/2)/sqrt((z-L/2)^2 + a^2) ] on the whole axis; H_z = B_z/mu0 - M0 inside, B_z/mu0 outside.
- p5b: L/a = 5: B_z/(mu0 M0) at centre = 2.5/sqrt(7.25) = 0.92848; just inside an end face B/(mu0 M0) = 0.49029, H_z/M0 = -0.50971, |H|/M0 = 0.5097.
- p5c: J_b = 0; K_b = M0 phi-hat on the curved surface; none on the flat ends.
- p5d: m = M0 pi a^2 L z-hat (far field check: B5(100a) * (100a)^3 = 2.503 vs a^2 L/2 = 2.5).
- p6a: H = I s/(2 pi R^2) phi-hat inside, I/(2 pi s) outside; B_phi inside = mu0 (1+chi) I s/(2 pi R^2); outside B = mu0 I/(2 pi s) phi-hat, independent of chi.
- p6b: J_b = chi I/(pi R^2) z-hat; K_b = -chi I/(2 pi R) z-hat.
- p6c: chi I - chi I = 0; Ampere's loop outside encloses only I.
- p7a: F = 3 mu0 m^2/(2 pi x^4).
- p7b: x = (3 mu0 m^2/(2 pi W))^(1/4); m = 0.80 A m^2, W = 0.1962 N: x = 3.740 cm.
- p7c: x2/x1 = 2^(-1/4) = 0.84090.
- p7d: c/x1^4 - c/(x1+x2)^4 = W, c/x2^4 - c/x1^4 = W: x1 = 3.658 cm (x2 = 3.110 cm).

### Comparison (one line per answer id)
- p2-axis: page mu0*I*a^2/(2*pi*(z^2+a^2/4)*sqrt(z^2+a^2/2)) = mine. Agree.
- p2-far: mu0*I*a^2/(2*pi*z^3) = mine. Agree.
- p2-ratio: 0.887 = mine (0.88735). Agree.
- p3-closed: choice 2 (the changes of 1/R summed round a closed path) = mine. Agree.
- p3-elem: choice 1 (zero on piece 2, piece 1 feels a force along -y) = mine. Agree.
- p4-in: -mu0*J*z = mine. Agree.
- p4-out: -mu0*J*b = mine. Agree.
- p4-f: -mu0*J*m = mine; sign confirmed by the direct loop integral (F/(mu0 J m) = (0, 0, -1.000)). Agree.
- p4-mz: choice 3 (grad(m.B) = 0, (m.grad)B = -mu0 J m y-hat) = mine. Agree.
- p4-loop: choice 0 (grad(m.B)) = mine; the index derivation and the numerical loop integral both confirm it holds with J nonzero at the loop. Agree.
- p5-b: same formula as mine. Agree.
- p5-hin: B_z/mu0 - M0 = mine. Agree.
- p5-bc: 0.928 = mine (0.92848). Agree.
- p5-hend: 0.510 = mine (0.50971). Agree.
- p5-k: choice 2 (M0 phi-hat on the curved side, none inside or on the ends) = mine. Agree.
- p5-m: pi*a^2*L*M0 = mine. Agree.
- p6-b: mu0*(1+chi)*I*s/(2*pi*R^2) = mine. Agree.
- p6-out: choice 0 (mu0 I/(2 pi s), independent of chi) = mine. Agree.
- p6-jb: chi*I/(pi*R^2) = mine. Agree.
- p6-kb: -chi*I/(2*pi*R) = mine. Agree.
- p7-f: 3*mu0*m^2/(2*pi*x^4) = mine. Agree.
- p7-x: (3*mu0*m^2/(2*pi*W))^(1/4) = mine. Agree.
- p7-xnum: 3.74 cm = mine (3.7403). Agree.
- p7-ratio: 0.841 = mine (0.84090). Agree.
- p7-x1: 3.66 cm = mine (3.6578; x2 = 3.1096). Agree.

No disagreement between the page and my blind solution.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 5(b), caption of the Plot | (MIT asks only for a sketch of abs(B)/mu0M0 and abs(H)/M0) | "Dashed: \|H\|/M₀ ... it grows towards the ends and jumps there by M₀, from 0.510 just inside to 0.490 just outside, the steep steps of the dashed line." | The plotted quantity \|H\|/M₀ goes from 0.5097 just inside to 0.4903 just outside: a drop of 0.02, not M₀, and there are no steep steps (computed: 0.5047 at z/a = 2.49, 0.4903 at 2.5, 0.4853 at 2.51). It is H_z that jumps by M₀ (from −0.510 to +0.490). Replace with: "Inside, H points against M and is small at the centre (0.072, bottom dot); it grows towards the ends. At each end face H_z jumps by M₀, from −0.510 just inside to +0.490 just outside; the size \|H\| hides the change of sign, so the dashed line only drops from 0.510 to 0.490 there, at a sharp peak. Outside the magnet the two curves coincide." |
| 2 | warning | Problem 4, statement before part (a) | (MIT gives only the textbook pointer and the title "... the force on a magnetic dipole") | "and the force on a small current loop of moment m is F = ∇(m · B)" | Part (c) then asks "Which expression gives the force on a small current loop?": the statement already answers it. Reword neutrally, e.g. "Lecture Notes 11 derive the force on a magnetic dipole, F = ∇(m · B), for a dipole in a field made by currents elsewhere; where ∇ × B = 0 this equals (m · ∇)B." Keep the Formula and its citation (reading2, slide 16). Part (c) then asks whether that derivation survives inside the current. |
| 3 | warning | Problem 4(c), choice box `p4-loop` | (our own box) | The right choice (index 0, 68 characters) is the longest of the four (68, 60, 63, 66) | Course rule (review lessons of Sets 1–4): the right choice must not be the longest or the shortest. Shorten it to "∇(m · B): the derivation for a current loop uses only ∇ · B = 0" (63 characters), or lengthen choice 3 (e.g. "the average of the two forms, since the loop straddles the slab's current"). |
| 4 | info | Problems 2 to 7, solution Formulas and two statement Formulas of Problem 3 | (not on MIT's sheet) | `cite="mit"` with `at="Problem N, p. M (our own solution / statement / numbers / addition)"` | The convention the Set 2 and Set 6 reviews accepted: the `at=` says plainly that the formula is ours, and every such label is honest (none of these formulas is on MIT's sheet, and none claims to be). No change needed. |
| 5 | info | Problem 2, the Biot–Savart Formula | 8.02 Eq. (9.1.1): I ds × r̂ / r² | I dℓ × û / u² | Same law with renamed symbols (as in Set 7). Fine. |

## Arithmetic and answer checks
- Every answer, every number in the solutions and checks, and every calcs entry recomputed (scratchpad `py8/blind.py`, `py8/boxes.py`, `py8/misc.py`). `npm run calc:test` in the worktree: 933 passed, 0 failed (selection containing this page's tests). `npm run content:check`: 0 errors; the only message for this page is the missing review file.
- Problem 2: centre field 2√2/π = 0.900 μ₀I/a; circle checks 0.707 and 1.000; ratio 8/(4.25 √4.5) = 0.887; "13% too large" (1/0.887 = 1.127); 1 − a²/(2z²) = 0.875 at z = 2a; √50 = 7.1. All correct.
- Problem 3: signs of the force law, of the first term with MIT's identity (R = r₂ − r₁, so R/R³ = −∇₂(1/R)) and of the third-law check (parallel coaxial rings attract) are right. Part (c): zero on piece 2, −μ₀I₁I₂ dℓ₁ dℓ₂/(4πd²) ŷ on piece 1. Correct.
- Problem 4: the fields, the identity ∇(m·B) = (m·∇)B + m × (∇ × B) and both values of μ₀ m × J are correct. The square-loop check in (c): for m along +y the upper side (z₀ + ℓ/2) carries +x̂ (verified from the right-hand circulation in the (z, x) plane), net force Iℓ[B_y(z₀ + ℓ/2) − B_y(z₀ − ℓ/2)] ẑ = −μ₀Jm ẑ. Correct, and my direct numerical loop integral agrees. The claim of (c), that ∇(m·B) is right for a current loop inside a current distribution, is correct: the linear expansion of I∮dℓ × B gives F_i = ∂_i(m·B) − m_i ∇·B with no use of ∇ × B (LN11 slide 16 makes the same step, using only ∂_j B_j = 0). The writer's sign, −μ₀Jm ẑ for m along +y, is right.
- Problem 5: 1.857, 0.928, −0.072, 5/√26 = 0.981, 0.490, 0.510, 5 × 10⁴ ampere-turns, the far limit μ₀M₀a²L/(2z³). All correct. The Plot curves are the formulas of part (a) with L/a = 5, and the three dots (0, 0.928), (2.5, 0.490), (0, 0.072) lie on them. Caption: finding 1.
- Problem 6: H, B, J_b, K_b, the zero total bound current, the jump μ₀χ_m I/(2πR) = μ₀|K_b| and its direction. All correct.
- Problem 7: W = 0.196 N, 1.96 × 10⁻⁶ m⁴, x = 3.74 cm, 2^(−1/4) = 0.84 (16%), x₂ = 3.15 cm, (3.74/6.89)⁴ = 0.087, x₁ = 3.66 cm, x₂ = 3.11 cm, shrinkage 2.2% and 1.1% (page "2%" and "1%"). All correct.
- Formula boxes: every answer is finite on its `vars`; every listed mistake differs from the answer at sampled points (smallest relative differences: p2-axis 3.5 × 10⁻⁵ near z = 0, p7-x 7 × 10⁻⁴ where 3μ₀m²/(2πW) is near 1; all others at least 0.09). The checker needs agreement to 10⁻⁶ at every sampled point, so all are told apart. Each mistake hint is true of its formula (checked one by one).
- Number boxes (1%) reject the nearby wrong values: p2-ratio vs the estimate 0.875 (1.4% off), p5-hend vs the outside value 0.490 (4%), p7-x1 vs the neighbours-only 3.74 (2.2%).
- Choice boxes: right answers at positions 2, 1, 3, 0, 2, 0 (varied). Lengths: p3-closed (48, 66, 55, 63; right 55), p3-elem (50, 42, 37, 41; right 42), p4-mz (41, 18, 38, 38; right 38, tied), p4-loop (68, 60, 63, 66; right 68, longest: finding 3), p5-k (79, 66, 74, 69; right 74), p6-out (46, 44, 64, 56; right 46).
- Points: the parts add up (6+5+4, 3+3+4, 5+6+4, 8+4+4+4, 5+6+4, 4+4+4+3) to MIT's 15, 10, 15, 20, 15, 15 = 90, and 90 + 25 = 115, MIT's credit line. The "How to answer" points paragraph is right for this sheet, and its list of letters covers every variable of every box.
- Every part's solution ends with a "Check the result" step (units, a limit or a number).
- Hints: none gives a final result away (Problem 7(d) hint 2 states the two balance equations, the setup, not the gap). The Problem 4 statement, however, answers part (c) (finding 2).

## Coverage and order
- MIT's Problem 1 (spinning, uniformly charged sphere, 25 points, "held over from Problem Set 7") is left out with a link to our Set 7 Problem 6. Checked: MIT's Set 7 sheet has the same problem as its Problem 6 (same title, 25 points, same textbook pointer and instructions), and our Set 7 `id="p6"` is "The magnetic field of a spinning, uniformly charged ball (our own setup)", 25 points. The link `/courses/8-07/8-07-problem-set-7#p6` is right.
- Problems 2 to 7 follow MIT's order, with MIT's titles quoted and MIT's points. Problems 2, 3, 4, 6 and 7 are marked "(our own problem)" in their titles and listed in the intro, as the course note requires. MIT's own hint for Problem 3 is kept and matches the rendered PDF. Problem 3(c) is marked "(Our addition.)".
- Problem 5 is MIT's full statement, rewritten: (a) H and B on the whole axis with MIT's coordinates, (b) the sketch for L/a = 5 of |B|/μ₀M₀ and |H|/M₀ against z/a, (c) the bound current, (d) the far dipole moment. Same physics and order of parts; the two number boxes of (b) are marked "(our addition)". The graph is a generated Plot.
- The due date and the reading assignment are left out, as the intro says.

## Licensing
- No rights notices on MIT's sheet or on the LN10 and LN11 pages read. No MIT figure is redrawn; the only graph is a generated Plot.
- Griffiths and Jackson were not opened (course rule), so whether our own Problems 2, 3, 4, 6 and 7 happen to resemble the textbook problems closely cannot be checked. They are built from MIT's titles and standard physics. Uncertain, not a finding.
- No OpenStax or LibreTexts. No MIT text copied beyond the problem titles, quoted as titles.

## Citations checked
- reading1 (LN10): p. 7, boxed dipole field with its delta term (the page cites it "without its delta-function term", correct); p. 8, J_b = ∇ × M, K_b = M × n̂ and U = −m · B (correct); p. 9, ∇ · B = 0, ∇ × B = μ₀J, H = B/μ₀ − M, ∇ × H = J_free, M = χ_m H (all on p. 9, correct). The intro's "the last pages of Lecture Notes 10" introduce M, the bound currents and H: right.
- reading2 (LN11): slide 9, "Derivation 1: Square current loop", m = I a = I a² ẑ (correct); slide 15, boxed dF = I dℓ × B (correct); slide 16, boxed F = ∇(m · B) (correct). The Problem 4(c) solution's account of slide 16 (the F_i integrand, integration by parts, m_i ∂_j B_j = 0) matches the slide.
- mit802-ch9: Eq. (9.1.1) is on printed p. 2 of the 8.02T Chapter 9 PDF (correct).
- `cite="mit"`: Problems 2, 3, 4 on p. 1 and Problems 5, 6, 7 on p. 2 (correct; the first page has no printed number, as the intro says).
- Links to Set 7: #p2 (straight piece, field opposite its middle; matches the B_side formula used), #p3 (finite solenoid with z₁, z₂; used correctly with z₁ = −L/2 − z, z₂ = L/2 − z), #p6. The anchor `#magnetization-and-bound-currents` exists in the LN10 lesson.

## Notes
- No `## Summary`, no em dashes (count 0), `status: draft`.
- Info: our Set 7 intro still says "our Set 8 will link back to it" (future tense). Now that Set 8 exists it could say "our Set 8 links back to it", with a link. Not a change to this page.
- Info: `p2-axis` has `z: [0, 3]`; at z = 0 the listed mistake (four times one side) equals the answer, because there each side's field is wholly axial. Harmless with random sampling (the checker needs agreement at every point), but `z: [0.5, 3]` would keep them apart everywhere.

COUNTS: errors=1 warnings=2 info=4

## Resolution (2026-11-27, by the page author)

- Error 1: the Problem 5(b) Plot caption now says that H_z jumps by M₀ (from −0.510 to +0.490) at each end face, and that the plotted size |H| only drops from 0.510 to 0.490 there, at a sharp peak.
- Warning 1: the Problem 4 statement no longer says which force applies to a current loop: it says Lecture Notes 11 derive F = ∇(m · B) for a dipole in a field made by currents elsewhere, and that it equals (m · ∇)B where ∇ × B = 0.
- Warning 2: the right choice of `p4-loop` is shortened ("the derivation for a current loop uses only ∇ · B = 0"), so it is no longer the longest.
- Info: `p2-axis` now has `z: [0.5, 3]`. Set 7's intro is left as it is (its wording "on this site it" already describes the link). Other info items need no change.
- `status: reviewed`.
- The calcs entry `p5-hend` quotes the new caption text ("from −0.510 just inside").
