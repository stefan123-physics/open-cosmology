---
page: content/year-2/8.03/harmonic-oscillator.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-1/ (read: saved HTML of the lecture page; its links to the transcript PDF and to resources/mit8_03scf16_lec1/ match the page's readings; it also lists handwritten notes, Georgi's Chapter 1, Problem Set 1 and the demos "Air Cart Between Springs" and "Mass on a Spring")
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec1/ (read: typed Lecture 1 notes, all 5 pages, page by page with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/b60b54d53623d627b5580df27fa5d0a1_4ysFC9vd3GE.pdf (read: transcript, all 14 pages, page by page; the PDF has no printed page numbers, so "p. N" = PDF page N)
  - Georgi, The Physics of Waves, Chapter 1 as posted on the 8.03SC OCW site (read only to check licence notices and whether the worked example copies it)
  - Handwritten Lecture 1 notes (not read; the page does not cite them)
verdict: pass-with-notes
---

# Review: The harmonic oscillator

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A mass on a spring", demonstrations paragraph: "a frequency that does not change with the amplitude (p. 6)" | On p. 6 Lee changes the amplitude of the air cart and then, for the vertical spring, says "The amplitude did not change. The frequency did not change as a function of time." That ω does not depend on the amplitude is said on p. 10, in the pendulum demonstration ("the omega, is really independent of the amplitude"). | Attributes amplitude-independence of the frequency to the p. 6 demonstrations. | Write "a steady amplitude and frequency (p. 6)", and if the amplitude-independence is wanted, add it with "(the solution's ω does not depend on the amplitude, p. 10)". |
| 2 | warning | Cosmology callout, first sentence: "The Taylor argument above ... comes back twice in 8.286" | (8.286 pages) `black-body-radiation.mdx` (l. 85) says each standing-wave mode of the field is a harmonic oscillator; this follows from the linear field equations (Fourier modes), not from expanding a potential about a minimum. `exponential-expansion.mdx` (l. 125) says the inflaton rolls down and oscillates about the bottom, which is the Taylor argument. | Says the Taylor argument returns in both places. | Say "The harmonic oscillator comes back twice in 8.286", and keep the Taylor wording for the inflaton only (e.g. "near the bottom of its potential the field oscillates like a mass on a spring"). |
| 3 | info | "Solve": "the one and only one solution" (transcript, p. 5) | The quote's wording is the notes' (p. 2: "the one and only one solution in our universe"); the transcript (p. 5) says "the one and the only one solution in my universe". | Quote cited to the transcript. | Cite "notes, p. 2" for the quote, or keep the transcript and quote it exactly. |
| 4 | info | "$x_{\text{initial}}$ is the amplitude and $\omega$ the angular frequency (transcript, p. 5)" | p. 5 says "angular velocity" and promises to explain "angular" later; "angular frequency of omega" is on p. 6. | p. 5 only. | "(pp. 5–6)". |
| 5 | info | Introduction: "gravitational waves, recently discovered" | Lee (2016) calls it "a recent discovery" (p. 1). | Present-tense "recently". | Date it: "first detected in 2015 and announced in 2016, recent when Lee gave this lecture". |
| 6 | info | Demonstrations: "the block on the air track" | The air-track setup has a second spring ("There's another spring here, but essentially, the solution will be very similar", p. 6; OCW demo "Air Cart Between Springs"). | Implies the same one-spring system. | Optional: "the cart on the air track (held between two springs, which gives the same kind of solution)". |

No error-level differences were found. Every formula was checked against the notes:
- Total force, notes p. 2, eq. 1: matches (the line before it, $\vec F_N = -\vec F_g$, is at the foot of p. 1; eq. 1 itself is on p. 2). Correct.
- Equation of motion, p. 2, eqs. 2–3, with $\omega = \sqrt{k/m}$: correct.
- General solution, p. 2, eq. 4: correct.
- Released from rest, p. 2, eq. 6 (constants from eq. 5): correct.
- Taylor expansion, p. 3, eq. 9 (eq. 7 force at minimum, eq. 10 force, both p. 3): correct. The notes print "$+\cdots$" after the third term of eq. 10; the page's "$-\cdots$" is equally valid.
- Hooke's law near a minimum with $|x V'''(0)| \ll V''(0)$, p. 4: correct, and the condition is the notes' own (a strict ratio of the two terms gives $\tfrac12|xV'''(0)| \ll V''(0)$; the factor is irrelevant for "much less than", so no change needed).
- Three forms, p. 4: correct; $a = A\cos\phi$, $b = -A\sin\phi$ follows from the expansion on p. 4.
- Complex form, p. 5, eq. 11: correct. Eqs. 12–13 (rotation) on p. 5: correct.
All these equations are in the typed notes, so citing reading1 is right; they were also written on the board (transcript pp. 4–5, 7–8, 10–12).

Prose citations checked against the transcript: why waves (p. 1), relation to 8.01/8.02/optics/QM (pp. 1–2), plan of the course (p. 2), setup and release (p. 2), coordinate and initial conditions (p. 3), "three" forces (p. 3, listed on p. 4), dot notation and ω "to make my life easier" (p. 4), Higgs boson, quark-gluon plasma, gravitational waves (p. 6), Descartes and Einstein (p. 7; notes p. 3), no exact Hooke's law and "energy of the whole universe" (p. 7), Georgi's potential and zooming in (p. 7), ratio of terms (p. 8), two properties and chain rule (p. 9), pendulums (pp. 9–10), "mathematical trick" (pp. 10–11), circle and angular frequency (pp. 11–12), phoenix function (p. 12), rotation (pp. 12–13), friction next lecture (pp. 13–14). All agree, apart from findings 1, 3 and 4. "We have solved all those kinds of situations" is quoted correctly from notes p. 4.

## Arithmetic and answer checks
- `npm run calc:test -- -k harmonic-oscillator`: 7 passed.
- Worked example: $\omega = \sqrt{100/0.25} = 20$ rad/s; $T = 2\pi/20 = 0.3142$ s (page 0.314, correct); $a = 0.030$ m; $b = 0.80/20 = 0.040$ m; $A = \sqrt{0.03^2 + 0.04^2} = 0.050$ m. Check: $\dot x(0) = 20 \times 0.040 = 0.80$ m/s. "Further than where it started" is correct (5.0 cm > 3.0 cm). All correct.
- Quiz 1: $\sqrt{200/0.5} = 20$ rad/s, answer index 1. Correct. The distractors 400 (forgot the root) and 10, 0.05 are fair.
- Quiz 2: $x(0) = a = 0$, $\dot x(0) = b\omega = v_0$, so $x = (v_0/\omega)\sin\omega t$, index 1. Correct.
- Quiz 3: index 1. Correct; explanation matches notes p. 4.
- Quiz 4: index 1. Correct; the explanation correctly separates linearity.
- Flashcards: all four correct.
- calcs file (info): `ex-period` cites `reading2, p. 5`, but $T = 2\pi/\omega$ appears in neither Lecture 1 source (p. 5 has no period formula). It is a standard result; cite an existing page that states it (e.g. an 8.01 page) or mark the source as the page's own. Also, quiz 1 and the worked example both have $k/m = 400$ and $\omega = 20$ rad/s; changing one of them would make the quiz test something new (optional).

## Coverage and order
- The page follows the lecture's order: motivation, mass on spring, forces, solution, initial conditions, demonstrations, "Nobody understands why" with the quotes, no exact Hooke's law, Taylor expansion, linear systems, the two properties, the three forms, the complex exponential, phoenix function, time shift as rotation, friction next.
- One reordering (info): in the transcript the pendulum demonstration (pp. 9–10) comes after the two properties of the equation (p. 9); the page places it at the end of the Hooke's law section, next to the notes' remark about non-linear terms (notes p. 4). This is a sensible grouping; no change needed.
- Small omissions (info): the "extra dimension" picture of the rotating point (transcript p. 12); the notes' remark that most systems are time-translation invariant without an external force (notes p. 4); the Euler-formula review slide (p. 13; the page uses the formula anyway); Lee's closing summary (p. 13); the second spring of the air cart (finding 6).
- Additions: the worked example (original) and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the typed notes, the transcript, the OCW lecture page or Georgi's Chapter 1 as posted on OCW (searched). The course is CC BY-NC-SA 4.0 (licence link on the OCW course page).
- Georgi's textbook: the page only says that Lee shows a potential from it (transcript p. 7); it does not reproduce the potential's formula, any figure or text from the book. Fine.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("the one and only one solution", "we have solved all those kinds of situations", "mathematical trick", "phoenix function") and the attributed Einstein quote. Fine.
- Worked example: Lecture 1 has only the released-from-rest case with symbols. Georgi's Chapter 1 has a spring with $K = 100$ N/m, but used for a hanging mass's static stretch; the page's problem (displacement plus initial speed, 3-4-5 amplitude) is different. Problem Set 1 was not read, so a coincidence with a problem there is **not verified**; the numbers are generic and a close copy seems unlikely.

## Notes
- `leadsTo` 8.03 Lecture 2 "Damped Free Oscillators" matches `_course.json` and the transcript's closing remark (pp. 13–14).
- `leadsTo` 8.286 Lecture 16 (`black-body-radiation.mdx` has `lecture: 16`) and Lecture 23 (`exponential-expansion.mdx` has `lecture: 23`): both exist and support the claims (modes as harmonic oscillators with quantised energy leading to the black-body law, l. 85–119; the inflaton oscillating about its minimum and reheating, l. 125). Only the "Taylor argument" framing is too broad for the black-body case (finding 2).
- Prerequisite slugs `tension-and-springs`, `potential-energy-diagrams`, `complex-exponentials`, `taylor-series` exist; the inline link `/courses/18-03/second-order-constant-coefficients` points to an existing page.
- `source.url` and both readings match the links on the OCW lecture page and the syllabus entry in `content/year-2/8.03/_course.json`.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. The demonstrations sentence now says "steady amplitude and frequency (p. 6)", and points to the pendulum demonstration (p. 10) for the frequency not depending on the amplitude.
2. The cosmology callout now says "the harmonic oscillator comes back twice"; the field modes are oscillators because the field equations are linear, and the Taylor argument is kept for the inflaton only.
3. "The one and only one solution" now cites notes p. 2 as well.
4. The angular-frequency sentence now cites pp. 5–6.
5. Gravitational waves are dated: first detected in 2015, announced in 2016.
6. The air-track cart is now described as between two springs.
7. Calcs: `ex-period` now cites eq. 6 and is marked as the page's own step. Quiz 1 changed to a 2.0 kg mass (ω = 10 rad/s) so it no longer repeats the worked example.
8. No change.

Status set to reviewed.
