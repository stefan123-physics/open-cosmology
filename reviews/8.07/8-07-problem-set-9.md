---
page: content/year-4/8.07/8-07-problem-set-9.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset09/ (read: the sheet PDF, text and rendered pages 1-3)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/2a1404cb512412dbb4cf6772f1b095b7_MIT8_07F12_ln14.pdf (read: slides rendered, 8 and 12 checked)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/bd0f46dff196aa1597e1b05415519b79_MIT8_07F12_ln10.pdf (read: pp. 5 and 7 rendered)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha10faraday_law/ (read)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap11inductance/ (read)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; values checked against the CODATA 2018 numbers in the calcs file)
verdict: pass-with-notes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 9 (8.07, Fall 2012)

## Blind solve

Written from the stripped statements and MIT's sheet only, before the full page was opened. Numbers checked in Python (`rv9py/blind.py`, `rv9py/p8f.py` in the scratchpad).

### My answers
- p1a: Φ = (μ0 I a / 2π) ln((s+b)/s)
- p1b: |ℰ| = N μ0 I a b v / (2π s (s+b))
- p1c: flux through coil decreases, so the induced current keeps it: in the near side the current flows parallel to the wire's current (far side antiparallel); the near side is attracted, opposing the motion.
- p1d: 0.400 mV (numerical derivative of NΦ gives 0.4000 mV)
- p2a: M = μ0 π a² b² / [2 (b²+z²)^{3/2}]
- p2b: A_φ = μ0 I2 a² b / [4 (b²+z²)^{3/2}]; ∮A·dl = 2πb A_φ gives the same M.
- p2c: M = 0.568 nH (exact Neumann integral for the real loops: 0.5677 nH, so the a ≪ b approximation is good to 0.13 %)
- p3a: ∂B/∂t = −∇×E = 0; the field inside stays B0 after the outside field is switched off (held by surface currents).
- p3b: B = 0, E = 0 inside → J = ∇×B/μ0 = 0 in the bulk; ∇·B = 0 → B_n continuous → B_n,out = 0.
- p3c: m = −2π B0 R³/μ0 (opposite to B0); B_out = −(3/2) B0 sinθ θ̂; K_φ = −3 B0 sinθ / (2μ0)
- p3d: f = −(B_out²/2μ0) r̂; P_max = (1.5 B0)²/(2μ0) = 35.8 kPa at the equator; total force on northern half = 9π B0² R² / (16 μ0), directed toward −z (checked by quadrature: −56 250 N for B0 = 0.2 T, R = 1 m).
- p4a: |Δv| = e R B / (2 m_e)
- p4b: needed extra centripetal force 2 m_e v Δv / R = e v B; the magnetic force e v B (inward in the speeding-up case) supplies exactly that to first order, so R is unchanged.
- p4c: 9.31 m/s
- p5a: 𝒞 = ε0 w / h
- p5b: ℒ = μ0 h / w
- p5c: 𝒞ℒ = μ0ε0; Z = √(μ0/ε0) h/w = 47.1 Ω (47.09)
- p6a/b: shown (E = −u×B from finite J; Faraday + Stokes; boundary-motion term −∮(u×B)·dl cancels).
- p6c: B' = B (R/r)²
- p6d: 3.40 (×10⁷ T)
- p7a: S_z = V I / [2π ln(b/a) s²]
- p7b: ∫ S_z 2πs ds = V I; energy flows in the gap between the conductors, not in the wires.
- p7c: |S| = I² R / (2π a L), radially inward
- p7d: 331 kW/m² (330.6)
- p8a–e: shown (a: −∫φ'θ = φ(0); b: θⁿ = θ except at one point; c: n = 2 and n = 3 with θ² = θ give θδ = δ/2 and = δ/3, contradiction; d/dx θⁿ = δ(x); d: trivial; e: both sides give −f(x0)φ'(x0)).
- p8f: G = [φ(a) + φ(−a)]/(2a); for φ = e^{−(x−1/2)²}, a = 1: G = (e^{−1/4} + e^{−9/4})/2 = 0.4421 (Gaussian-smeared delta numerically: 0.44210)

### Comparison (page opened after the answers above were written)

| Answer id | Mine | Page | Agree? |
|---|---|---|---|
| p1-flux | (μ0 I a/2π) ln((s+b)/s) | `mu0*I*a/(2*pi)*log((s + b)/s)` | yes |
| p1-emf | N μ0 I a b v/(2π s(s+b)) | same | yes |
| p1-dir | near side along the wire's current | choice 1 "along the wire's current, so the wire pulls the coil back" | yes |
| p1-num | 0.400 mV | 0.400, 1 % | yes |
| p2-m | μ0π a² b²/(2(b²+z²)^{3/2}) | same | yes |
| p2-a | μ0 I2 a² b/(4(b²+z²)^{3/2}) | same | yes |
| p2-num | 0.568 nH | 0.568, 1 % | yes (exact Neumann value 0.5677 nH is also inside 1 %) |
| p3-frozen | still B0 | choice 3 "still B₀, kept there by induced surface currents" | yes |
| p3-m | −2πB0R³/μ0 | `-2*pi*R^3*B0/mu0` | yes |
| p3-k | −3B0 sinθ/(2μ0) | `-3*B0*sin(th)/(2*mu0)` | yes |
| p3d-p | 35.8 kPa | 35.8, 1 % | yes |
| p3d-f | 9πB0²R²/(16μ0) | same | yes |
| p4-dv | eRB/(2m_e) | same | yes |
| p4-r | unchanged to first order | choice 2 "stays the same" | yes |
| p4-num | 9.31 m/s | 9.31, 1 % | yes |
| p5-c | ε0 w/h | same | yes |
| p5-l | μ0 h/w | same | yes |
| p5-z | 47.1 Ω | 47.1, 1 % | yes |
| p6-b | B R²/r² | same | yes |
| p6-num | 3.40 | 3.40, 1 % | yes |
| p7-s | VI/(2π ln(b/a) s²) | same | yes |
| p7-where | through the gap | choice 0 | yes |
| p7-wire | I²R/(2πaL), inward | same, direction −ŝ in the solution | yes |
| p7-num | 330.6 kW/m² | 331, 1 % | yes |
| p8-d | δ(x) | choice 1 "δ(x), the derivative of θ(x)" | yes |
| p8-g | 0.4421 | 0.442, 1 % | yes |
| show parts (p3b, p6a, p6b, p8a, b, c, d, e) | as above | same arguments | yes |

No disagreement. Every formula box was checked by value at 2000 random points inside its `vars` (`rv9py/boxes.py`): the answer and every listed mistake are finite everywhere, and every mistake hint is true of its formula (checked one by one: e.g. p3-m's −4πR³B0/μ0 is what B0 + (μ0/4π)m/R³ = 0 gives, p3d-f's 3πR²B0²/(2μ0) is ∫P dA over the half without cos θ, p5-l's μ0h/(2w) is one sheet's field, p7-s's VI/(2πs²) is E = V/s). Solution checks (units, limits or second routes) are present in every part and correct: 141 N for R = 5 cm, 0.114 μV, 2.19×10⁶ m/s and 4.3×10⁻⁶, 70.8 pF/m and 157 nH/m, E = 8.66×10³ V/m and B = 4.80×10⁻⁵ T, the Gaussian-smeared delta 0.442 (mine: 0.44210 at width 0.003).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 7(b), box `p7-where` | (MIT: textbook pointer only; this part is ours) | The statement says "Integrate S_z over the cross-section of the gap ... show that it equals VI. Then say where the energy flows", and hint 2 says S = 0 in a perfect conductor; the box then asks where the energy flows, with the right choice (53 characters) tied for longest with choice 2 | The box is answered by the statement itself. Replace it with a number box that needs part (a), e.g. "Inside what radius s½ does half the power flow? Give s½ for the cable of part (d), in mm" (answer √(ab) = 1.00 mm, from VI ln(s½/a)/ln(b/a) = VI/2), or drop the box and keep the part self-marked |
| 2 | warning | Problem 3(a) statement; Problem 4(b) statement | (ours) | 3(a) ends "Then answer: a ball ... is made perfectly conducting while a uniform field B0 is on, and then the outside field is switched off." with no question; 4(b) ends "Take the case in which the electron speeds up (...)" with no question. The questions live only in the box labels, which read-aloud and the search index skip | Add the question to the statement: 3(a) "What is the field inside the ball afterwards?"; 4(b) "Does the radius of the orbit change, to first order in B?" |
| 3 | warning | Problem 3, formula "The jump of the field at a current sheet", `cite="mit" at="Problem 3, p. 1 (our own problem; the standard boundary condition, stated here)"`; Problem 3(d), formula "The force on a current sheet", same kind of citation | MIT's sheet has no formula for Problem 3 | Cites MIT's sheet for formulas that are not on it | Both have a real source already in `references`: the field of a sheet, ∓(μ0K/2)ĵ on the two sides (so the jump μ0 K × n̂), is 8.02T Ch. 9 Eq. (9.3.12), p. 19 (`mit802-ch9`); the force per unit area on a sheet, f = K × B of the other sheet = B²/2μ0, "magnetic pressure", is 8.02T Ch. 11 Eqs. (11.9.6)–(11.9.7), pp. 33–34 (`mit802-ch11`). Cite those (keeping "stated here"; for the jump say "follows from") and add the locations to the two `references` entries |
| 4 | info | Problem 6, formula "Ohm's law in a moving conductor", `cite="mit"` "(our own problem; a standard result, stated here)" | not on the sheet | standard result, honestly labelled | Acceptable as in the Set 6 review (I1); no MIT source in the readings states it |
| 5 | info | Problem 3 and 6(a), formula "Faraday's law", `reading1` slide 8 eq. (14) | Slide 8 is headed "Maxwell Equations in Empty Space" | Used inside a conductor and a fluid | Correct (Faraday's law has no source term in matter); optionally cite 8.02T Ch. 10 for the integral form already used in Problem 4, or add "(the same in matter)" |
| 6 | info | Problem 8(c), formula "A tempting derivative" | (8.6) has "?" over the "=" | "= δ(x) (?)", with the `at=` explaining MIT's placement | Optional: `\overset{?}{=}` matches MIT exactly |
| 7 | info | Problem 1(a) solution | 8.02T Ch. 10, Solved Problem 10.9.1, Eq. (10.9.3), p. 17, has the same flux integral for a loop next to a wire (with a changing current, not a moving loop) | cites the step as "our own solution" | Optional: cite `mit802-ch10` Eq. (10.9.3), p. 17 as a check. The problem itself is clearly different (moving coil, N turns, our numbers), so this is not copying |

Citations verified on the PDFs (pages = printed footers): 8.02T Ch. 9 Eq. (9.1.15) p. 8 (B_z = μ0IR²/2(R²+z²)^{3/2}; the page writes b for R); Ch. 10 Eq. (10.1.4) p. 2 (ℰ = −N dΦ/dt), (10.3.3) p. 9 (∮E·ds = −dΦ/dt; the equation number is printed on p. 9, the body runs onto p. 10), (10.3.6) p. 10 (E = (r/2) dB/dt), (10.9.2) p. 17 (B = μ0I/2πr); Ch. 11 Eqs. (11.1.3) p. 2, (11.1.8) p. 3, (11.3.8) p. 10. LN14 slide 8 eq. (14) (Maxwell's equations; curl E = −∂B/∂t) and slide 12 eqs. (24), (25) (u and S = E × B/μ0). LN10 p. 5: boxed A = (μ0/4π) m × r̂/r² "+ …" and m = ½I∫r × dℓ on the same page; p. 7: boxed B_dip with the (2μ0/3) m δ³ term. MIT's sheet: (8.1), (8.2 boxed), (8.3), (8.4) on p. 2; (8.5 boxed), (8.6), (8.7 boxed), (8.8), (8.9) on p. 3; first page unnumbered. All `at=` values match.

## Arithmetic and answer checks
- All 27 answers agree with my blind solve (table above); all numbers recomputed in Python (`rv9py/blind.py`): 0.400 mV, 0.568 nH, 35.8 kPa, −56 250 N for B0 = 0.2 T and R = 1 m (= −9πB0²R²/16μ0), 9.307 m/s, 47.09 Ω, 3.403 (×10⁷ T), 330.6 kW/m², 0.44210.
- Problem 3(c) checked numerically: with m = −2πB0R³/μ0 the radial field vanishes at r = R at every θ and B_θ = −(3/2)B0 sin θ.
- Problem 2(a) against the exact Neumann double integral for these loops: 0.5677 nH vs 0.5685 nH (0.13 %); the approximation is within the 1 % tolerance.
- Points: p1 4+4+3+4 = 15, p2 6+5+4 = 15, p3 5+4+6 = 15, p3d 10 (optional), p4 4+3+3 = 10, p5 5+5+5 = 15, p6 4+5+3+3 = 15, p7 6+5+5+4 = 20, p8 3+3+4+3+3+4 = 20 (optional): 105 + 30, as on MIT's sheet ("105 points of credit, plus ... 30 points extra credit"; Problem 3 "Parts (a)-(c) are required, for 15 points. Part (d) ... 10 points of extra credit").
- Choice boxes (lengths in characters, right one in bold position): p1-dir 73/**57**/54/39; p3-frozen 50/50/37/**48**; p4-r 39/49/**49**/49; p7-where **53**/51/53/39; p8-d 25/**28**/42/27. Positions vary (1, 3, 2, 0, 1). p4-r: the right choice ties with two others at 49 characters, so its length gives nothing away (info; no change needed). p7-where: tied longest with choice 2, but see finding 1.
- Free answers: p3-frozen follows in one line from the "show" sentence of 3(a), and p8-d from parts (a) and (b); both are the intended application (p8-d is MIT's own question), so info only. p7-where is free from the statement (finding 1).
- `vars` (info): in p1-emf, N ∈ [1, 100] includes N = 1, where the listed mistake "one turn" equals the answer; in p7-s, a ∈ [0.5, 1], b ∈ [2, 3] include b/a = e, where the mistake VI/(2πs²) equals the answer (min relative difference found 1×10⁻⁴). The checker compares several random points, so neither is a real failure, but N: [2, 100] and a: [0.5, 0.7] would keep every mistake clearly apart.
- Hints: none gives a result away outright. p4(b) hint 1 ("compare 2m_e vΔv/R with evB") comes close once (a) is done; acceptable, since the direction of the magnetic force (hint 2) is still the reader's step.
- calcs file: every `shown:` string I spot-checked is on the page verbatim; numbers match. The p4-dv entry "checks" (a) by solving the force balance of (b), which assumes the radius is unchanged; it is not independent of (b)'s conclusion (info: integrate m_e dv/dt = e(R/2)dB/dt instead).

## Coverage and order
- Problems 1 to 8 in MIT's order; Problem 3's extra-credit part (d) as a separate optional exercise "Problem 3(d)" right after Problem 3, said in the intro and in Problem 3's text.
- Problems 1 to 7 are textbook pointers on MIT's sheet; each is our own problem on MIT's title, marked "(our own problem)" in its title and in the intro, as the course note asks. The textbook was not opened (by me either).
- Problem 8 follows MIT's (a) to (f) and (8.1) to (8.9) exactly, in our own words: the Schwartz-function remark, MIT's hint to (a) (as hint 1), the "?" equation (8.6), the remark on δ³(r), MIT's question "What is d/dx θⁿ(x)?" (as the choice box, marked as our addition), and (8.9). Eq. (8.4) has the dx that the revision restored, and the intro says so.
- `lecture: 14`, `covers: [11, 14]` (info): MIT's sheet was due December 3, before Lecture 35 of December 7 (LN14), but the sheet's reading (Sec. 8.1, conservation of energy) is the Poynting theorem, which on this site appears only in the LN14 lesson; placing the set at lecture 14 is reasonable. Problems 2(b) and 3(c) use LN10's dipole formulas (cited as `reading2`); consider `covers: [10, 11, 14]` so the LN10 lesson also gets the "Practise" link. Problems 1 to 6 (induction) have no 8.07 lesson to cover, as the intro says.

## Licensing
- MIT's sheet, LN10 and LN14 and the three 8.02T chapters: no "rights reserved" or "courtesy" notices (grep on the text). No figure from any source is used; the page has no figures.
- No text copied from MIT: Problem 8's statements are rewritten (only short standard phrases such as "Schwartz functions" and "in the sense of distributions" remain). No OpenStax or LibreTexts material. Griffiths not used.
- CODATA values (NIST) for e, m_e, a0, ε0, μ0: allowed source.

## Symbols
- `\theta`: on this page θ is both the polar angle (Problem 3) and the Heaviside step function θ(x) (Problem 8), but the only meaning that applies is the general "An angle", so the popup and "Symbols on this page" explain θ(x) wrongly (warning). Fix: add a page-scoped meaning to the `\theta` entry: "The angle from the z axis (Problems 3 and 4); in Problem 8, θ(x) is the Heaviside step function, 1 for x > 0 and 0 for x < 0."
- `G`: only the general meaning "Newton's gravitational constant" applies, so G[φ(x)] of Problem 8(f) is explained as Newton's constant (warning). Fix: add a meaning scoped to this page: "G[φ], the number that the integral of Problem 8(f) gives for the test function φ."
- The other page-scoped meanings read correctly (u: fluid velocity with an arrow, energy density alone; R: radius, and the resistance in Problem 7; C and L with their script forms; f and S with and without arrows).

## Notes
- No em dashes; no `## Summary`; no `## Summary` with answers.
- Claims about the site's lessons checked: the prerequisite slugs exist (8.02 Lectures 20, 21, 24; 8.07 Lectures 10, 11, 14), and the LN10, LN11 and LN14 lessons are what the intro says. The claim that OCW has no lecture notes for the class lectures on induction rests on the course note (notes 12 and 13 are a research talk and "courtesy" material); I did not re-check OCW's list (uncertain, but consistent with the course's `_course.json`).
- Physics of the solutions checked step by step, including all signs: Lenz direction in 1(c) (near-side current along the wire's current, field through the coil in the wire's direction), φ̂ × r̂ = θ̂ and r̂ × θ̂ = φ̂ in 3(c), the inward magnetic force for the speeding-up electron in 4(b) (−e v φ̂ × Bẑ = −evB ŝ), Δm_z = −e²R²B/4m_e against the field in both cases, the orientation (u dt) × dℓ of the swept strip in 6(b), ŝ × φ̂ = ẑ and ẑ × φ̂ = −ŝ in Problem 7, and both sides of 8(e) equal to −f(x0)φ′(x0).

COUNTS: errors=0 warnings=5 info=9

## Resolution (2026-11-27, by the page author)

- Warning 1: the choice box `p7-where` is removed; Problem 7(b) is self-marked (its statement and hints already lead to the answer).
- Warning 2: 3(a) now ends "What is the field inside the ball afterwards?" and 4(b) "Does the radius of the orbit change, to first order in B?", so the questions are in the statements.
- Warning 3: "The jump of the field at a current sheet" now cites the 8.02T notes, Chapter 9, as following from Eq. (9.3.12), p. 19; "The force on a current sheet" cites Chapter 11, Eqs. (11.9.6) and (11.9.7), pp. 33–34. Both references list the new locations.
- Warnings 4 and 5: page-scoped meanings added in `data/symbols.json` for θ (the angle from the z axis; the step function θ(x) in Problem 8) and G (G[φ] of Problem 8(f)).
- Info items left as they are.
- `status: reviewed`.
