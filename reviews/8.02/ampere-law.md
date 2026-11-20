---
page: content/year-1/8.02/ampere-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w07d2/ (read: local copy presentati_w07d2.pdf/.txt, 49 pages, slide "P18- N" = PDF page N; slides 18, 37 and 38 also viewed as images)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: local copy ch9sourc_b_field.pdf/.txt, Sections 9.3–9.4 = PDF pp. 14–24, printed pp. 13–23)
  - content/year-1/8.02/_course.json (read: Session 18 and Session 28 entries)
  - calcs/8.02/ampere-law.yaml (read; `npm run calc:test -- -k ampere-law`: 7 passed)
verdict: pass-with-notes
---

# Review: Levitation and Ampère's law

Citation convention checked: course-note pages are the printed footers, printed page = PDF page − 1 (checked with `pdftotext -f N -l N` on PDF pp. 14–25). Slides: "P18- N" = PDF page N, checked for all 49. No "rights reserved" or "courtesy" notice in either source (text and HTML).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The solenoid", last sentence: "Two coils a radius apart, a **Helmholtz coil**, give a nearly uniform field between them (slide 37)" | Slide 37 is only the title "Helmholtz Coil" and a picture of the separate field lines of two coaxial coils (drawn well apart); slide 38 "Closer than Helmholtz Coil" shows them closer. Neither slide states the spacing (one radius) or that the field between them is nearly uniform; the notes do not mention Helmholtz coils. | States the spacing and the uniformity as if from slide 37. | The physics is right (standard Helmholtz condition: separation = radius). Mark it as the page's own addition ("the standard Helmholtz spacing is one coil radius, which makes the field between them nearly uniform") or cite slide 37 only for the name. Also note MIT shows the coils (slides 36–40: Helmholtz → closer → many loops → solenoid) **before** the solenoid, as the road from one loop to a solenoid; the page mentions them after the toroid. Optional: move the sentence to the start of the section. |
| 2 | warning | "The solenoid", "A finite solenoid … has nearly this field over most of its length, falling to about half at its ends (Eq. 9.4.6, pp. 21–22)" | Notes p. 22 (Fig. 9.4.4, l = 10R and 20R): "the value of the magnetic field in the region \|z\| < l/2 is nearly uniform and approximately equal to B₀". The notes do not say "half at the ends". | "falling to about half at its ends". | Correct: Eq. (9.4.6) at z = l/2 gives B₀·l/(2√(l² + R²)) = 0.4975 B₀ for l = 10R. Fine to keep, but say it follows from Eq. (9.4.6) (or from the figure) rather than implying the notes state it. |
| 3 | warning | "The solenoid", toroid sentence (Example 9.5, p. 22) | Example 9.5, pp. 22–23: B = μ₀NI/2πr inside the toroid (Eq. 9.4.8, p. 23), non-uniform, falling as 1/r, unlike a solenoid; zero outside. The notes list the toroid as one of the four configurations Ampère's law solves (p. 16). | Only "keeps its field entirely inside". | Add the result B = μ₀NI/2πr (Eq. 9.4.8, p. 23) and the remark that it is not uniform; the page claims full coverage of the lecture and lists toroids among the symmetric cases. |
| 4 | info | "A current sheet", "Inside the sheet $B = \mu_0 J_0\|z\|$, zero in the middle (p. 19)" | Notes: sheet in the xy plane, J = J₀ î, z measured from the mid-plane; field −ŷ above, +ŷ below (Eq. 9.3.11, p. 19). | z is never defined on the page; directions only as "opposite on its two sides". | Add "where z is the distance from the middle plane" and "parallel to the sheet and perpendicular to the current". |
| 5 | info | "A current sheet", formula cited "Eq. (9.3.8), p. 19" | Eq. (9.3.8) itself is ∮B·ds = B(2ℓ) = μ₀J₀bℓ; B = μ₀J₀b/2 is stated in the text directly below it on p. 19. | Cites Eq. (9.3.8). | Acceptable; optionally "Eq. (9.3.8) and text, p. 19". Note also the slides' version (slide 44) uses thickness 2d and J along k̂; the page follows the notes' b and J₀, which is fine. |
| 6 | info | "Magnetic materials", "the moments of unpaired electrons line up with an applied field" | Slide 8: an applied field "tends to align" the atomic moments. | "line up". | Optionally "tend to line up" (in paramagnets the alignment is partial). |
| 7 | info | "Magnetic materials", frog levitation | Slide 11 stresses "Most importantly, its stable: Restoring force always towards the center". | Stability mentioned only for the superconductor. | Optionally add that the frog's levitation is also stable. |
| 8 | info | "Magnetic materials", superconductor as "perfect diamagnet, a magnetic mirror" (slides 13–15) | Slides 14–15 exactly: "Perfect Diamagnetism: Magnetic Mirrors", "No matter what the angle, it floats -- STABILITY"; the mirror image drawn has like poles facing. | Same. | Correct and faithful to the slides. (Real high-T_c levitation demos also rely on flux pinning; the slides do not go there, and the page need not.) |
| 9 | info | "A thick wire" / solenoid loop: "one side inside along the axis" | Notes Fig. 9.4.2 / slide 42: one long side inside the solenoid, parallel to the axis; the others outside or perpendicular. | "one side inside along the axis". | "along" could be read as "on the axis"; "parallel to the axis" is clearer. |

Every other formula and prose citation was checked against its location and is correct:
- Outline and "Some fun: magnetic levitation": slides 1, 5; "3rd Maxwell equation: Ampère's law": slide 21. Correct.
- Dipoles: torque to align, force "seek field": slide 4 (slide 3 is the "Last time" title). Correct.
- Para/ferromagnetism (slide 8), "everything is slightly diamagnetic … if no unpaired electrons this effect dominates" (slide 9), diamagnet "looks like a bar magnet pointing opposite the field", "seeks lower field (force up) which balances gravity", strong field with a gradient (slide 11), frog in a 16 T magnet (slide 6), frog, strawberry, water droplets, tomatoes, crickets (slide 12). Correct.
- Experiment 8 measures μ₀ (slide 18, "Calculating μ₀"); the slide image shows two coaxial current rings repelling, so "the force between current-carrying coils" is supported. Correct.
- Gauss's law idea (slide 22); Ampère's idea, current must "punch through" the loop (slide 23). Correct.
- ∮B·ds = B(2πr) = μ₀I for a circle around a wire: Eq. (9.3.1), printed p. 14 (Section 9.3 starts p. 13). Two-field-line loop: Eqs. (9.3.2)–(9.3.3), p. 15; any loop, ∮(μ₀I/2πr) r dφ = μ₀I: Eq. (9.3.5), p. 15. Page "(pp. 14–15)": correct.
- Ampère's law, ∮B·ds = μ₀I_enc, I_enc = ∬_S J·dA, "any closed contour bounding an open surface S": slide 24 (both parts on the slide); general statement Eq. (9.3.6), p. 16. Correct.
- Biot–Savart vs Ampère (slide 26; notes table p. 16), "Always true, occasionally useful … highly symmetric currents" (slide 28), list of wire/sheet/solenoid/toroid (p. 16). Correct.
- Recipe (slides 27, 35): B direction by right-hand rule, loop where B is constant and parallel, perpendicular, or zero. Correct.
- Thick wire: Example 9.3, pp. 16–17; slides 29–33; B = μ₀I/2πr outside, μ₀Ir/2πR² inside, both on p. 17 (slides 31–32); "zero at the centre, increases linearly … falls off as 1/r" p. 17. Correct.
- Ideal solenoid uniform inside, zero outside: pp. 19–20 (Section 9.4 starts p. 19) and slide 41; loop and N = nℓ turns: pp. 20–21 (Eqs. 9.4.1–9.4.2, p. 20) and slide 42 (I_enc = nlI); B = μ₀NI/l = μ₀nI: Eq. (9.4.3), p. 21. Correct.
- Finite solenoid from ring fields: Eqs. (9.4.5)–(9.4.6), p. 21, Fig. 9.4.4, p. 22 (see row 2). Link `/courses/8-02/biot-savart-law` exists.
- Current sheet: Example 9.4, pp. 17–19; as parallel wires, field opposite on the two sides (p. 18); loop straddling the sheet (slide 45; Fig. 9.3.9, p. 18); B = μ₀J₀b/2 independent of distance (p. 19); inside B = μ₀J₀|z| (Eq. 9.3.10 and text, p. 19). The comparison with the E field of a charged plane is the page's own and is correct.

## Arithmetic and answer checks
- (a) μ₀I/2π = (4π × 10⁻⁷)(10)/2π = 2 × 10⁻⁶ T m. Inside at 0.5 mm: (2 × 10⁻⁶)(5 × 10⁻⁴)/(10⁻³)² = 1.0 × 10⁻³ T. Surface: 2 × 10⁻⁶/10⁻³ = 2.0 × 10⁻³ T. At 1 cm: 2 × 10⁻⁶/10⁻² = 2.0 × 10⁻⁴ T. All correct. (Inside value is half the surface value, as it must be at r = R/2.)
- (b) n = 400/0.2 m = 2000 m⁻¹; B = (4π × 10⁻⁷)(2000)(2) = 1.6π × 10⁻³ = 5.027 × 10⁻³ T ≈ 5.03 × 10⁻³ T. Correct. "About a hundred times the Earth's field": Earth's field 25–65 μT, so 77–200 times; about 100 for 50 μT. Fair. The comparison is not in the calcs file (could be added as a `fact`/ratio, optional). The example assumes the 20 cm coil is long compared with its diameter (not stated; optionally add "a thin solenoid").
- Plot: in units of μ₀I/2πR, B = r/R inside and R/r outside, so `u <= 1 ? u : 1/u` is correct; continuous at u = 1 with peak 1, within range [0, 1.1]; domain [0, 4]. Caption ("grows linearly inside, peaks at the surface and falls as 1/r outside") correct and matches p. 17. Drawn from the formula, not MIT's Fig. 9.3.6 or slide 33.
- calcs/8.02/ampere-law.yaml: 7 entries (16 T fact, μ₀I/2π, three wire values, n, solenoid field), all pass and match the page text.
- Quiz 1 (index 1, current through the loop): correct. Quiz 2 (index 1, grows linearly): correct; explanation matches p. 17. Quiz 3 (index 1, diamagnetic, pushed to weaker field): correct; explanation matches slide 11.
- Flashcards: all three correct (solenoid card: n turns per metre, zero outside for the ideal solenoid; wire card matches Example 9.3).

## Coverage and order
- MIT order (slides): outline (1) → right-hand rules review (2) → dipoles recap (3–4) → levitation: frog, magnetic materials, diamagnet levitation, examples (5–12) → superconductor "magnetic mirror" (13–15) → sumo wrestler (16) → Experiment 8, PRS (17–18) → Biot–Savart recall (19–20) → Ampère's law: idea, equation, PRS, vs Biot–Savart, recipe, "always true" (21–28) → thick wire (29–33) → group problem: non-uniform wire J = J₀R/r (34) → loop-choosing advice (35) → other geometries: Helmholtz, closer coils, many loops, solenoid, ideal solenoid, demo (36–43) → current sheet group problem (44–45) → solenoid = two current sheets, nI = 2dJ (46) → summary (47) → Maxwell's equations so far (48–49).
- The page follows this order (levitation, Ampère, wire, solenoid, sheet), with the notes' derivation of Ampère's law (Section 9.3) inserted where slides 23–24 sit. Fine. Helmholtz coil placement: see row 1.
- Left out: right-hand-rule review (slide 2); Biot–Savart recall (slides 19–20, adequately covered by the prerequisite pages); PRS questions (17, 25); the non-uniform-wire group problem (slide 34; would make a good exercise: I_enc = 2πJ₀Rr, so B = μ₀J₀R, constant inside; left for the problem-solving session, Session 19); **slide 46, a solenoid as two current sheets (field outside one sheet is half the solenoid field with nI = 2dJ)**, a nice link between the last two sections, worth one sentence; slide 49, Maxwell's equations so far (Gauss, magnetic Gauss, Ampère), worth one sentence since the page calls Ampère's law "the third Maxwell equation" in its summary; notes: surface current K = J₀b and Eq. (9.3.12), B = μ₀K (Eq. 9.4.4); toroid formula (row 3). None is an error; slides 46 and 49 and the toroid result are the most useful to add.
- Added: worked example, charged-plane analogy, the half-field-at-the-ends remark (row 2), Helmholtz spacing (row 1). All correct physics.
- Prerequisites `magnetic-dipoles` and `gauss-law` exist (files present); `/courses/8-02/magnetic-dipoles`, `/courses/8-02/gauss-law`, `/courses/8-02/biot-savart-law` point to existing pages.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the slides or Chapter 9 (text and HTML checked), so no `courtesy:` needed.
- No figures reused: the only graphic is a Plot generated from the formula. The frog, superconductor, Helmholtz and solenoid pictures of MIT are not reproduced.
- No verbatim copying found. Closest paraphrase: "to have a magnetic field circulating around a loop, current must pass through the loop" vs slide 23 "In order to have a B field around a loop, there must be current punching through the loop": one short sentence, rewritten; fine. "Magnetic mirror" and "Amperian loop" are standard terms.
- No OpenStax or LibreTexts material.
- Worked example is original (MIT's Chapter 9 sections have no numerical example of this kind).

## Notes
- leadsTo 8.02 Session 28 ("Displacement Current, Maxwell's Equations; Electromagnetic Waves", `_course.json`): correct and fairly described; the displacement current μ₀ε₀ dΦ_E/dt completes Ampère's law for changing E fields. The body never says that this form of the law holds for steady currents only; one sentence pointing to Session 28 would help.
- No `Callout kind="cosmology"`; nothing on the page makes a cosmology claim, so nothing to check. A real link is thin here; omitting the callout is acceptable.
- The frontmatter summary is long (about 100 words) for a "one sentence" field; check that it reads well in the course list.
- Verdict: no errors found; rows 1–3 are warnings worth fixing before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Warning 1: the Helmholtz coil is now described as the slides show it (pairs of coils on the way to a solenoid, slides 37–38); the one-radius spacing and the nearly uniform field are marked as the page's own addition.
- Warning 2: the half-field at the ends of a finite solenoid is now marked as the page's own check of Eq. 9.4.6.
- Warning 3: added the toroid's field B = μ₀NI/2πr (Example 9.5, pp. 22–23), not uniform.
- Info: z defined for the current sheet; "tend to line up"; the frog floats stably; "parallel to its axis"; the sheet formula cites the text below Eq. 9.3.8; added that this form of Ampère's law holds for steady currents, with a pointer to Session 28. Other coverage items: no change.
