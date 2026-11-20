---
page: content/year-2/8.03/damped-free-oscillators.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-2/ (read: saved HTML of the lecture page; its links to the transcript PDF and to resources/mit8_03scf16_lec2/ match the page's readings; it also lists handwritten notes (mit8_03scf16_hw_lec2), Georgi's Chapter 2 and demo videos)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec2/ (read: typed Lecture 2 notes, all 6 pages plus the OCW end page, page by page with pdftotext -f N -l N; the PDF's printed page numbers equal the PDF page numbers)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/23614dfbe74512a35c385a0c7a6c0156_T2n6fVybLcU.pdf (read: transcript, all 18 pages, page by page; no printed page numbers, so "p. N" = PDF page N)
  - Handwritten Lecture 2 notes, Georgi Chapter 2, demo videos (not read; the page does not cite them)
verdict: pass-with-notes
---

# Review: Damped free oscillators

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Overdamped", last paragraph: "A magnet swinging past a metal plate shows it" (p. 16) | Lee swaps the metal ball for one "made of magnets", so "the drag force will be colossal" (p. 16). Neither the transcript nor the notes mention a metal plate or say what the magnet moves past. | Adds a metal plate, a detail the source does not give (probably correct for an eddy-current demo, but not verified). | "A pendulum bob made of magnets shows it: Lee calls the drag colossal; ..." or drop "past a metal plate". |
| 2 | info | "Overdamped": "with two values Γ₁ and Γ₂ (notes, p. 6; the notes call them Γ±)" | Notes p. 6 and transcript p. 15: Γ± = γ/2 ± √(γ²/4 − ω₀²), θ = A₊e^(−Γ₊t) + A₋e^(−Γ₋t). | Γ₁ = γ/2 + √…, Γ₂ = γ/2 − √…, constants A₁, A₂. The renaming is consistent (Γ₁ = Γ₊, Γ₂ = Γ₋) and the physics is unchanged. | Optional: make the mapping explicit, "(the notes and the lecture call them Γ₊ and Γ₋, and the constants A₊, A₋)". |
| 3 | info | "A vote": "Two equal masses on equal springs" (p. 8) | "They have equal amounts of mass. They are attached to a spring" (p. 8); "identical mass" (p. 11). That the springs are equal is implied (same form of equation) but not said. | "equal springs". | Optional: "two equal masses, each on a spring". |
| 4 | info | "Adding drag": "proportionality to θ̇ is chosen because it can be solved ... (transcript, p. 7)" | Transcript p. 7 agrees. The notes (p. 3) say instead "not only because it is the most realistic but because it is solvable, but also it is not totally unrealistic", which is garbled and partly contradicts the lecture. | Follows the transcript. | No change needed; the page rightly follows the clearer transcript wording. |
| 5 | info | Introduction: Taylor-expansion reminder cited "(p. 2)" | The reminder begins at the foot of p. 1 ("There were some confusions about doing the Taylor expansion") and finishes on p. 2. | p. 2. | "(pp. 1–2)". |
| 6 | info | Introduction: "this lecture adds energy, more systems of the same kind, and then ... drag (transcript, p. 1)" | p. 1 announces only "continue the discussion of the harmonic oscillators" and "add damping force"; energy starts on p. 2, the rod on p. 3. | Cites p. 1 for the whole plan. | Optional: "(transcript, pp. 1–3)" or cite p. 1 for the drag only. |

No error-level differences were found. Every formula was checked against the notes:
- LC circuit, notes p. 1: $L\,dI/dt + Q/C = 0 \Rightarrow \ddot Q + Q/(LC) = 0$, $\omega_0 = 1/\sqrt{LC}$, $\phi = -\pi/2$, $A = I_{\text{initial}}/\omega_0$, $Q = (I_{\text{initial}}/\omega_0)\sin\omega_0 t$, analogy $m \leftrightarrow L$, $k \leftrightarrow 1/C$, $x \leftrightarrow Q$: all correct.
- Generalised oscillator $\mu\ddot x = -\kappa x$, notes p. 1 (foot of the page): correct.
- Total energy, notes p. 2, eq. 2: correct (eq. 2 labels the sin² + cos² line; the page's one-line version combines the lines around it, fine).
- Rod equation of motion, $\omega_0 = \sqrt{3g/2l}$, notes p. 3 (torque $-mg\frac l2\sin\theta$ is on p. 2): correct.
- Small-angle values, notes p. 3: 99.99 %, 99.9 %, 99.5 %: correct, and the notes are right (see below).
- Drag torque, notes p. 3: correct.
- Damped equation with $\omega_0^2 = 3g/2l$, $\gamma = 3b/ml^2$, notes p. 4: correct.
- Characteristic equation and roots, notes p. 4: correct (the transcript, p. 9, also gives the equivalent form $(i\gamma \pm \sqrt{4\omega_0^2 - \gamma^2})/2$).
- Underdamped solution, notes p. 4; $\tan\phi = -\gamma/2\omega$, $A = \theta_{\text{initial}}/\cos\phi$ on notes p. 5: correct. I verified the initial conditions: $\dot\theta(0) = -\frac\gamma2 A\cos\phi - A\omega\sin\phi = 0$ gives $\tan\phi = -\gamma/2\omega$.
- Critically damped, notes p. 5 (limit of $\theta_2/\omega$): correct.
- Overdamped, notes p. 6: correct (finding 2 on naming).
All these equations are in the typed notes, so citing reading1 is right; they were also written on the board (transcript pp. 2, 4–5, 7–10, 13–15).

**Small-angle note.** The transcript (p. 6) says "If I take it as 5 degrees, then it's actually 99%". The exact value is $\sin 5°/(5\pi/180) = 0.99873$, i.e. 99.87 %, which rounds to the notes' 99.9 %. The page's bracketed remark ("In the lecture the 5° value is said as 99%; the notes give 99.9%, which is correct") is accurate and in line with the rule on lecturer slips. Also checked: 1° gives 0.999949 (99.99 %), 10° gives 0.99493 (99.5 %).

**Other lecturer slips not repeated (good):** "minus 3g over 2 sine theta" without the $l$ (p. 5); $z_-$ said as "exponential minus i gamma over 2 t" (p. 10); the R vector "from the centre of mass to the nail" (p. 4, corrected by Lee on p. 11, and the page reports the correction).

Prose citations checked against the transcript: office-hours reminder (pp. 1–2, finding 5), energy constant and back-and-forth (pp. 2–3), rod setup and centre of mass at l/2 (p. 3), coordinates and initial conditions (p. 4), torque (p. 4), I = ⅓ml² (p. 5), "exact even with a large angle" and computer (p. 5), small angle and solution θ_initial cos ω₀t (p. 6), "something is missing" (pp. 6–7), sign and choice of drag, "between θ̇ and θ̇²", works for the demos (p. 7), vote 11/17/2 (p. 8), complex solution (p. 9), uniqueness with two constants (p. 10), three predictions (pp. 10–12), hat experiment, 17 correct (p. 11), break corrections (pp. 11–12), spiral (pp. 12–13), critical damping, limit, at most one zero crossing, strong push (pp. 13–14), door closer (pp. 14–15), water and overdamped (p. 15), magnet demo (p. 16), torsion pendulum underdamped (pp. 16–17), car suspension (p. 17), energy no longer conserved and the open question (pp. 17–18). "Life is hard" is the notes' wording (p. 3), correctly cited there. All agree apart from findings 1, 5 and 6.

## Arithmetic and answer checks
- `npm run calc:test -- -k damped-free`: 14 passed.
- Worked example, recomputed: $\omega_0 = \sqrt{50/0.50} = 10$ rad/s; $\gamma = 1.0/0.50 = 2.0$ s⁻¹; $\gamma^2/4 = 1 < 100$, underdamped; $\omega = \sqrt{99} = 9.950$ rad/s, $1 - 9.950/10 = 0.50\,\%$ ("half a percent", correct). Halving: $e^{-\gamma t/2} = e^{-t} = \frac12$, $t = \ln 2 = 0.693$ s (page 0.69, correct); $2\pi/\omega = 0.6315$ s (page 0.63, correct; 0.69 s is 1.1 periods, "about one full oscillation" is fair). Critical: $\gamma = 2\omega_0 = 20$ s⁻¹, $b = m\gamma = 10$ kg/s, 10 × the given 1.0 kg/s. All correct.
- Worked example, info: "The energy, proportional to the amplitude squared, falls as $e^{-\gamma t}$" is true for the envelope (averaged over a cycle, light damping); within a cycle the damped energy does not follow $\frac12\kappa A^2$ exactly, and Lecture 2 only proves $E \propto A^2$ for the undamped case. Optional: "falls roughly as $e^{-\gamma t}$ (averaged over a cycle)".
- Quiz 1: $E = \frac12\kappa A^2$, index 1. Correct; the explanation's step uses $\mu\omega_0^2 = \kappa$ implicitly, fine.
- Quiz 2: $\omega = \sqrt{\omega_0^2 - \gamma^2/4}$, index 1. Correct.
- Quiz 3: critically damped, index 1. Correct; the explanation matches p. 17.
- Quiz 4: two decaying exponentials, index 1. Correct; $\Gamma_{1,2} = \gamma/2 \pm \sqrt{\gamma^2/4 - \omega_0^2}$ are both positive, so both terms decay, as stated.
- Flashcards: all three correct.
- Calcs file (info): `ex-omega0` cites reading1 p. 1, where only $\omega_0 = 1/\sqrt{LC}$ appears; $\omega_0 = \sqrt{k/\mu}$ is on p. 2 (cite p. 2). `ex-period` cites reading1 p. 4, but $T = 2\pi/\omega$ is not in the Lecture 2 notes; as in the Lecture 1 review, mark it as the page's own step (or cite the formula it follows from). `small-angle-1` passes with a tolerance of 5e-5 against a difference of 4.9e-5; correct but tight.

## Coverage and order
- The page follows the **notes'** order (LC circuit, energy, rod, drag, three cases). The lecture's order differs slightly: energy (pp. 2–3), rod (pp. 3–6), and the LC circuit only as a one-sentence mention among "a few more examples" (p. 6). The notes are the cited source for the LC section, so this is fine (info).
- The R-vector correction from the break (p. 11) is moved into the rod section, with its page cited. Sensible.
- Omitted (info): the recap demonstrations at the start (cart on the track, rod, vertical spring, p. 1); Lee's remark that the result is known from 18.03 (p. 8; the page links the 18.03 page instead, which covers it); the undamped/underdamped metal-ball demo that precedes the magnet one (p. 16); the class vote on the car suspension (nobody underdamped, 4 overdamped, most critical, p. 17).
- Additions: the worked example (original) and the link to 18.03.
- No `Callout kind="cosmology"`; the only `leadsTo` is 8.03 Lecture 3, which matches `_course.json` ("Driven Oscillators, Transient Phenomena, Resonance") and Lee's closing line ("see what we can learn if I start to drive the oscillator", p. 18). Optional (info): a real link exists to 8.286's inflaton oscillating about its minimum and handing its energy to other particles at reheating (`exponential-expansion.mdx`); but 8.286 does not write the inflaton's friction equation, so any callout must not claim more than that page says.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the typed notes, the transcript or the OCW lecture page (searched). The course is CC BY-NC-SA 4.0.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("life is hard", "Mexican hat"). The prose is rewritten throughout.
- Worked example: neither the notes nor the transcript has any numerical example (both work only with symbols for a rod). The page's spring with $m = 0.50$ kg, $k = 50$ N/m, $b = 1.0$ kg/s and its three questions are original as far as the Lecture 2 sources go. Problem Set 2 and Georgi's Chapter 2 were not read, so a coincidence with a problem there is **not verified**; the numbers are generic and a close copy seems unlikely.

## Notes
- Renaming Γ± to Γ₁, Γ₂ (for read-aloud) is correct and declared on the page; see finding 2 for making the mapping explicit.
- Prerequisite slugs `harmonic-oscillator` and `damped-oscillations` exist (`content/year-2/8.03/harmonic-oscillator.mdx`, `content/year-2/18.03/damped-oscillations.mdx`); the inline links `/courses/8-03/harmonic-oscillator` and `/courses/18-03/damped-oscillations` point to them.
- `source.url` and both readings match the links on the OCW lecture page and the syllabus entry in `content/year-2/8.03/_course.json`.
- Frontmatter `summary` agrees with the body ("as the class vote mostly predicted": 17 of 30 votes, correct).
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. "A magnet swinging past a metal plate" replaced by "a pendulum bob made of magnets".
2. The renaming is now explicit: Γ₁ = Γ₊, Γ₂ = Γ₋, and A₁, A₂ are the notes' A₊, A₋.
3. "Two equal masses, each on a spring".
4. No change.
5–6. The Taylor reminder now cites pp. 1–2, the lesson plan pp. 1–3.
7. The energy decay is now "roughly, averaged over a cycle".
8. Calcs: `ex-omega0` cites notes p. 2; `ex-period` marked as the page's own step.

Status set to reviewed.
