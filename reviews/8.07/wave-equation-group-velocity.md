---
page: content/year-4/8.07/wave-equation-group-velocity.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln14/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/2a1404cb512412dbb4cf6772f1b095b7_MIT8_07F12_ln14.pdf (read, local copy: typeset slides whose fonts pdftotext cannot read; slides -1- to -7- and the OCW end page read from the page images, the OCR text used only to search; slides 8 to 19 belong to the companion page and were only searched for notices)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/pages/calendar/ (read: lists only the 17 notes, no class lectures or dates)
  - MIT8_07F12_ln11, ln12, ln13, ln15 (local copies, searched for dates and topics only, to check the intro and leadsTo)
  - content/year-4/8.07/_course.json, content/year-1/8.02/maxwell-equations-and-em-waves.mdx, content/year-2/8.03/electromagnetic-waves.mdx, content/year-4/8.286/black-body-radiation.mdx (read in part, for the claims made about them)
verdict: needs-changes
---

# Review: The wave equation, complex waves and group velocity

The page covers slides 1 to 7 of Lecture Notes 14 (Guth, typeset slides, "8.07 Lecture 35: December 7, 2012, ELECTROMAGNETIC WAVES"), eqs. (1) to (13). Every `<Formula>` was compared with the slide images; the author's notes.md was not used. The two slips the page names were checked by redoing the algebra. The worked example, both plots and all quiz answers were recomputed by hand. `npm run calc:test -- -k wave-equation-group`: 25 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

Formula by formula (label, `at=`, verdict):
- A travelling wave, slide 1, eq. (1): slide has f(z,t) = f(z − vt, 0) ≡ g(z − vt); page uses "=" for "≡". Match.
- Waves in both directions, slide 2, eq. (2). Match.
- The derivatives, slide 2, eq. (3). Match, with the last line corrected (see slips).
- The wave equation, slide 2, eq. (4), boxed on the slide. Match.
- A sinusoidal wave, slide 3, eq. (5). Match.
- The parameters, slide 3, eq. (6): v = ω/k, ω = 2πν, λ = 2π/k, T = 2π/ω (the slide also names ν, δ, k, A in words; the page gives them in the prose). Match.
- Euler's formula, slide 4, eq. (8); the wave in complex notation, slide 4, eq. (7); the complex wave, slide 4, eq. (9); the Fourier integral, slide 4, eq. (10). All match. The page shows (8) before (7) (it explains Euler first); the equation numbers are cited correctly, so this is fine.
- Expanding the frequency, slide 5, eq. (11) (repeated on slide 6). Match.
- The wave packet, slide 6, eq. (12). Match apart from the sign of the prefactor's exponent (see slips).
- The group velocity, slide 6, eq. (13), boxed on the slide. Match.

"(boxed)" annotations: (4) and (13) are the only boxed equations on slides 1 to 7, and the only ones marked so on the page.

Slips the page attributes to the slides (both real):
- Eq. (3), last line: the slide prints ∂²f/∂t² = v²g₁′(z − vt) + v²g₂′(z + vt), single primes. Two t derivatives of g₁(z − vt) give (−v)²g₁″, so it must be g₁″, g₂″. Confirmed on the slide image; the page's bracketed note is correct.
- Eq. (12): the slide prints e^{+i[ω(k₀) − k₀ dω/dk]t}. With e^{i(kz − ωt)} in (10) and ω ≈ ω(k₀) − k₀ω′ + kω′, the phase is −[ω(k₀) − k₀ω′]t + k(z − ω′t), so the prefactor has −i. Confirmed; the page's note is correct and the conclusion (13) is unaffected.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Group velocity and phase velocity", paragraph after (13): "The integral is the packet's **envelope**, the slowly varying outline, and the phase factor in front only multiplies it by a complex number of size one." | Slide 6: "The integral describes a wave which moves with v_group"; slide 7: envelope moves with v_group, waves inside move with v_phase. | Calls the integral itself the envelope and treats the prefactor as unimportant. | Wrong physics. The integral ∫A(k)e^{ik(z − ω′t)}dk still contains the rapid carrier oscillation e^{ik₀(z − ω′t)}; only its modulus (or the factor E = ∫A(k)e^{i(k − k₀)(z − ω′t)}dk) is the slowly varying envelope. And the time-dependent prefactor is exactly what makes the crests move at ω(k₀)/k₀ instead of ω′: f = e^{i(k₀z − ω(k₀)t)} E(z − ω′t). Rewrite along those lines, e.g. "The integral is a fixed shape moving at dω/dk; writing it as e^{ik₀(z − v_g t)} times a slowly varying envelope, and putting the prefactor back, gives f = e^{i(k₀z − ω(k₀)t)} × envelope: the envelope moves at v_group and the crests of the carrier at ω(k₀)/k₀." The next sentence ("Inside the envelope, the individual crests are those of the central wave …") is correct and would then follow. |
| 2 | warning | Intro paragraph: "the course's Lectures 27 to 34, on magnetic fields in matter, Faraday's law, Maxwell's equations and the conservation of energy and momentum, have no notes on OCW" | Notes 11 is Lecture 26 (Nov 9, 2012) and Notes 14 is Lecture 35 (Dec 7, 2012), but Notes 12 (Min Chen, "Reversed Cherenkov Radiation in Left-Handed Meta-material") is headed "8.07 Lecture, Nov 21, 2012", i.e. one of class Lectures 27 to 34. OCW's calendar page lists no class-lecture topics, so the topic list for 27 to 34 is not stated anywhere on OCW. | Says no notes exist for 27 to 34, and names their topics as fact. | Say "apart from Min Chen's research talk (Notes 12, November 21), Lectures 27 to 34 have no notes on OCW", and mark the topic list as inferred (e.g. "presumably Griffiths chapters 6 to 8: …") or drop it. The same sentence in `_course.json` `notes` ("there are no notes for class Lectures 27 to 34") needs the same fix. |
| 3 | warning | Intro: "The same physics is on the 8.02 page on [Maxwell's equations and light] and the 8.03 page on [electromagnetic waves]." | (n/a: site claim) | The two linked pages cover the displacement current, Maxwell's equations, EM waves and the Poynting vector; neither covers magnetic fields in matter or Faraday's law, and neither covers momentum conservation. | Narrow the claim ("Maxwell's equations and the wave equation for light are on …") or also link the 8.02 pages `faradays-law` and `transformers-and-magnetic-materials`. |
| 4 | info | Paragraph after (13): crests move "at the phase velocity v_phase = ω(k)/k (slide 7)" | Slide 7 writes v_phase = v = ω(k)/k. | Same as the slide. | Faithful, but for a packet the relevant value is ω(k₀)/k₀ (the page itself names the central wave e^{i(k₀z − ω(k₀)t)} in the same sentence). Consider writing ω(k₀)/k₀, as the flashcard implicitly does. |
| 5 | info | Remark after (10): "(10) is the general wave moving to the right … a wave moving left needs ω = −vk as well" | Slide 4 calls (10) the "General solution to wave equation", with ω/k = v. | Adds that, read literally with ω = vk for all k, (10) only gives right-movers. | Correct and marked as the page's own remark; no change needed. |
| 6 | info | "Waves can just as well move to the left …" and "The converse holds too (a remark of ours)" | Slide 2 only derives (4) from (2). | Adds the d'Alembert converse via u = z − vt, w = z + vt. | Correct (∂²/∂z² − v⁻²∂²/∂t² = 4∂²/∂u∂w) and labelled as the page's own. |

## Arithmetic and answer checks
- Worked example (redone by hand): ck/2π = √(15² − 9²) MHz = √144 = 12 MHz. λ = c/12 MHz = 2.998e8/1.2e7 = 24.98 m ≈ 25 m; vacuum λ = 2.998e8/1.5e7 = 19.99 m ≈ 20 m. v_phase = ω/k = c·15/12 = 1.25c. v_group = c²k/ω = c·12/15 = 0.8c; product = c². Correct.
- Crossing time: the **group** velocity sets it (the envelope carries the pulse), and the page uses it: 3e5/(0.8 × 2.998e8) = 1.2508e-3 s ≈ 1.25 ms; vacuum 3e5/2.998e8 = 1.0007e-3 s ≈ 1.00 ms; ratio 1.25, "a quarter longer". Correct. "Lower frequencies, closer to ν_p, are slowed more": v_g = c√(1 − ν_p²/ν²) falls as ν → ν_p. Correct. A uniform 300 km slab at ν_p = 9 MHz is an idealisation (the ionosphere's peak plasma frequency is of this order, a few to about 10 MHz), acceptable for an exercise stated as "such plasma".
- Plot 1 (travelling pulse): two Gaussians at z = 2 and 3.2, shifted by vt; at the slider maxima (t = 6, v = 1) the bumps sit at 8 and 9.2, inside [0, 12]; peak height ≈ 1.005, inside range 1.4. The caption ("shifted to the right by vt without any change of form") matches the formula. Correct.
- Plot 2 (wave packet): exp(−(z − t)²/4) cos 5(z − 2t). Envelope speed 1; carrier cos(5z − 10t) has phase velocity 10/5 = 2 > 1, so crests overtake the envelope, growing at the back and fading at the front, as the caption and slide 7 say. Consistent. (At t = 0 the envelope at z = −3 is still e^{−2.25} ≈ 0.11, so the left tail is cut slightly at the start; cosmetic. The plot is a kinematic illustration, not a solution of a stated dispersion relation; the caption does not claim otherwise.)
- Quiz 1 (answer 2, sin z cos(vt²)): ∂²f/∂t² = −2v sin(vt²) sin z − 4v²t² cos(vt²) sin z; the term −2v sin(vt²) sin z has no counterpart in f_zz = −sin z cos(vt²). The other three choices are of the form g₁(z − vt) + g₂(z + vt). Correct; explanation correct.
- Quiz 2 (answer 0): λ = 2π/4π = 0.5 m, v = 600π/4π = 150 m/s, ν = 300 Hz. Correct.
- Quiz 3 (answer 3): dω/dk at k₀. Correct; explanation correct.
- Quiz 4 (answer 1): 0.8c. √(1 − 0.36) = 0.8, v_phase = 1.25c, v_group = c²/v_phase = 0.8c. Correct; the distractor 0.6c = (9/15)c is plausible and wrong.
- Flashcards: all four correct. The "phase velocity" card says v_phase = ω(k)/k without k₀ (see row 4).
- Summary bullets: consistent with the body and the example.
- Calcs file `calcs/8.07/wave-equation-group-velocity.yaml`: 25 entries, all pass; it covers every number on the page, both slips (`second-time-derivative`, `packet-phase`), the quiz numbers and the plot velocities. The `packet-phase` entry checks the corrected sign algebraically, which agrees with my own derivation.

## Coverage and order
- Slides 1 to 7 are covered in the slides' order (slide 1 travelling wave and figure; slide 2 eqs. (2) to (4); slide 3 (5)–(6); slide 4 Fourier/Dirichlet, (7)–(10); slide 5 Jackson pp. 324–325, dispersion, packet around k₀, (11); slide 6 (12)–(13) and the envelope sketch; slide 7 the v_phase > v_group statement). Nothing on slides 1 to 7 is omitted; the A(k) sketch on slide 5 is described in words ("amplitude A(k) peaked around k₀") rather than drawn, which is fine.
- Slides 8 to 19 (EM plane waves, reflection) are left to `electromagnetic-plane-waves-reflection`, as the page says.
- Additions: the d'Alembert converse, the left-mover remark on (10), v = λν, the plasma worked example. All marked as the page's own or plainly standard.
- Course position: Notes 14 = Lecture 35, the third-last of 37 class lectures (per `_course.json`); the page's "third-last lecture" is consistent.

## Licensing
- No "All rights reserved" notice and no "Courtesy of" credit on slides 1 to 7 or anywhere in Notes 14 (OCR searched; end page is OCW's standard terms page).
- The slide 1 figure (two-bump pulse at f(z,0) and f(z,t)) looks like Griffiths' figure 9.1 and is uncredited on the slide; the page does not reproduce it but draws its own pulse from Gaussians, computed from a formula. Fine.
- The hand-drawn A(k) and envelope sketches of slides 5 to 7 are not reproduced; the page's packet plot is generated from its own formula.
- No verbatim copying beyond short standard phrases ("phase (or phase constant)", "Not in Griffiths", "drop Re and the tilde"). The slide 7 sentence is paraphrased ("crests appear at the back (left) of the envelope, move forward through it and disappear at the front"), close in structure but short and rewritten; acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Prerequisites `travelling-waves-reflection`, `dispersion-phase-group-velocity`, `fourier-transform-am-radio` exist (8.03) and are apt.
- Internal links resolve: `/courses/8-07/magnetic-dipole-force-torque-maxwell`, `/courses/8-02/maxwell-equations-and-em-waves`, `/courses/8-03/electromagnetic-waves`, `/courses/8-07/electromagnetic-plane-waves-reflection` (course slugs 8-02, 8-03, 8-07 checked).
- leadsTo 8.07 L15: Notes 15 ("Potentials and Fields", Lecture 36) covers potentials, gauge choice and "Retarded Time Solutions" (slide 16). The "z − vt in three dimensions" phrasing is a loose analogy (t − r/c) but fair.
- leadsTo 8.286 L16: `black-body-radiation` says "By Fourier's theorem any field in the box is a sum of standing waves, normal modes". Fair; strictly the 8.286 page uses standing waves rather than the travelling sinusoids of this page, which "sinusoidal electromagnetic waves in a box" covers.
- No `Callout kind="cosmology"` on the page; acceptable for a page whose cosmology link is only the leadsTo above, but the course style is to end foundation pages with one where a link exists. Optional.
- Symbols added for this page in data/symbols.json (checked): δ (phase, rad), λ (wavelength, m), ν (ω/2π, Hz), ω (angular frequency, rad/s), z, c, k (rad/m), T (period, s), t, d, i, e, f, g, g₁, g₂, v (wave speed), A (amplitude / Ã / A(k)), u and w (z ∓ vt, m), k₀, ν_p, ω_p, v_group, v_phase. All fit the page and are page-scoped. Minor: the k₀ meaning says "with ω(k₀) = ω₀", but this page never writes ω₀ (the meaning is shared with `fourier-transform-am-radio`); harmless. θ in Euler's formula passes content:check, so a meaning applies.
- No em dashes found in the page text.

## Resolution (2026-11-18, by the page author)

- Finding 1 (error): the paragraph after (13) is rewritten. The integral still oscillates at k₀; taking out e^{ik₀(z − v_group t)} leaves the slowly varying envelope ℰ(z − v_group t) = ∫dk A(k) e^{i(k − k₀)(z − v_group t)}, and with the prefactor the packet is f = e^{i(k₀z − ω(k₀)t)} ℰ(z − v_group t) (new formula "Carrier times envelope", cited as slide 6, eq. (12), rewritten). The text now says the prefactor (the carrier) makes the crests move at ω(k₀)/k₀ while the envelope moves at v_group; the "complex number of size one" sentence is gone.
- Finding 2: the intro no longer names the topics of the missing lectures as fact. It says that, apart from Min Chen's research talk of November 21 (Notes 12, not used here), OCW has no notes for the class lectures between Notes 11 (Lecture 26) and Notes 14, and that they presumably led from magnetostatics to Faraday's law and Maxwell's equations. The same sentence in content/year-4/8.07/_course.json `notes` is reworded the same way.
- Finding 3: the intro now links 8.02 `faradays-law`, `transformers-and-magnetic-materials` and `maxwell-equations-and-em-waves`, and 8.03 `electromagnetic-waves` for the wave equation, instead of claiming that two pages hold "the same physics".
- Finding 4: the phase velocity of the packet is written ω(k₀)/k₀ in the body (with a note that slide 7 writes ω(k)/k) and in the flashcard.
- Findings 5 and 6: no change needed.
- Checks after the changes: content:check 0 errors and no warning for this page, calc:test 5964 passed, build 0 errors. Status set to reviewed.
