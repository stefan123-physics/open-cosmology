---
page: content/year-2/8.03/driven-oscillators-resonance.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-3/ (read: saved HTML of the lecture page; its links to the transcript PDF and to resources/mit8_03scf16_lec3/ match the page's readings; it also lists handwritten notes (mit8_03scf16_hw_lec3), Georgi Chapter 2, Problem Set 2 and the demo videos)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec3/ (read: typed Lecture 3 notes, all 5 pages plus the OCW credit page; the text layer is garbled, so every page was checked as a rendered image)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/e934ef151d6f1b03c91e8e30c7f20903_FCFpaKcpuXQ.pdf (read: transcript, all 20 pages, page by page with pdftotext -f N -l N; no printed page numbers, so "p. N" = PDF page N)
  - Handwritten Lecture 3 notes, Georgi Chapter 2, Problem Set 2 (not read; the page does not cite them)
verdict: pass-with-notes
---

# Review: Driven oscillators and resonance

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Driving a pendulum", fast-driving bullet; quiz 2 explanation | Notes p. 4 ("$A(\omega_d) \Rightarrow 0$ and $\tan\delta \to \infty$ therefore $\delta = \pi$") and transcript p. 13 ("tangent delta will go to infinity. Therefore, delta will go to pi") both say $\tan\delta \to \infty$. That is a slip: $\tan\delta = \gamma\omega_d/(\omega_0^2 - \omega_d^2) \to 0$ from below as $\omega_d \to \infty$ (it is infinite at $\omega_d = \omega_0$, where $\delta = \pi/2$). | Bullet gives only $\delta \to \pi$; the quiz explanation correctly says $\tan\delta \to 0$ from below. The page silently differs from both sources. | Per writing rule 4, add a bracket to the bullet, e.g. "($\tan\delta \to 0$ from below, so $\delta \to \pi$; the notes and the lecture say $\tan\delta \to \infty$, which happens at $\omega_0$ instead)". |
| 2 | info | Bracket after "Moving the top": "(Lee calls this amplitude "delta" as well as the phase lag; here it is $\Delta$.)" | In the transcript both are spoken "delta" (p. 9 "delta sine omega d t"; p. 13 "the delta is really small", meaning the hand's amplitude). The typed notes already distinguish them: capital $\Delta$ for the drive amplitude ($d(t) = \Delta\sin\omega_dt$ in the figure on p. 3; $f_0 \equiv g\Delta/l$ on p. 4; $Q\Delta$ on p. 5) and $\delta$ for the phase. | Accurate for the spoken lecture, but "here it is $\Delta$" suggests the page introduced the distinction. | "(In the lecture both are spoken "delta"; the notes write the amplitude $\Delta$ and the phase lag $\delta$, as here.)" |
| 3 | info | Notation throughout ($\gamma$) | Lecture 3 notes write the drag constant as capital $\Gamma$ ($\Gamma \equiv 3b/ml^2$, p. 2; $\Gamma \equiv b/m$, p. 4; $Q \equiv \omega_0/\Gamma$, p. 5). | Lowercase $\gamma$, consistent with the Lecture 2 page. | Optional: one bracket at the first $\gamma$, "(the Lecture 3 notes write it $\Gamma$)". |
| 4 | info | "Amplitude and phase" formula | Notes p. 2 drop a square: $A^2[(\omega_0^2 - \omega_d^2) + \omega_d^2\Gamma^2] = f_0^2$ and $A = f_0/\sqrt{(\omega_0^2 - \omega_d^2) + \omega_d^2\Gamma^2}$ (same typo on p. 4). The transcript (pp. 5–6, "squared squared") has it right. | Correct formula with $(\omega_0^2 - \omega_d^2)^2$, cited to notes p. 2. | Optional: "(the notes drop the square on $\omega_0^2 - \omega_d^2$; transcript p. 6 has it)". |
| 5 | info | "The steady-state solution": "it takes time to "feel" it (p. 4)" | "Feel" is the notes' word (p. 2: "It takes some time for the system to "feel" the driving torque"); transcript p. 4 says "it may take some time for the system to react". | Quoted word cited to the transcript. | Cite "notes, p. 2" for the quote, or drop the quotation marks. |
| 6 | info | Opening paragraph "(transcript, p. 2)" | Driving is introduced on p. 2; the question of which frequency the system follows is on p. 3. | p. 2. | "(transcript, pp. 2–3)". |
| 7 | info | "Resonance": phase "rises from 0 through $\pi/2$ at $\omega_0$ to $\pi$ (notes, p. 5; transcript, p. 14)" | The phase plot (with $\pi/2$ at $\omega_0$) is on notes p. 4, with its caption at the top of p. 5. The transcript says the phase rises rapidly towards $\pi$ (pp. 14–15) but does not say $\pi/2$ aloud. | notes p. 5; transcript p. 14. | "(notes, pp. 4–5; transcript, pp. 14–15)". |
| 8 | info | "The full solution": "with no damping or with overdamping, the corresponding homogeneous solution is used instead (transcript, p. 7)" | Lee: "you have actually four different kinds of solution" and names the no-damping and overdamped cases as examples (p. 7). | Omits critical damping. | "with no damping, critical damping or overdamping, …". |
| 9 | info | Wine-glass paragraph: "which needs a high-quality glass, that is a large $Q$ (pp. 17–19)" | p. 17: "a very high-quality glass"; p. 19: "the quality of the glass should be really, really high, such that the resulting amplitude will be very large". Lee does not say "Q" here. | Equates "quality" with $Q$. | Acceptable gloss (supported by the p. 19 reasoning); optional: "a high-quality glass, so that the amplitude at resonance is large (in effect a large $Q$)". |

No error-level differences were found. Every `<Formula>` was checked against the rendered notes and the transcript:
- Quality factor, reading2 p. 2: correct (Lee defines Q as $\omega_0$ over gamma and states the critical point at $Q = 0.5$ on p. 2; also notes p. 5). $Q = 0.5 \Leftrightarrow \gamma = 2\omega_0 \Leftrightarrow \omega_0^2 = \gamma^2/4$: correct.
- Driving torque, reading1 p. 1: correct (also transcript p. 2).
- Driven damped oscillator with $\gamma = 3b/ml^2$, $\omega_0 = \sqrt{3g/2l}$, reading1 p. 2: correct.
- Trial solution, complex equation, real and imaginary parts, amplitude and phase, reading1 p. 2: correct (see finding 4 for the notes' typo, which the page does not repeat). "(notes, eq. 1)" for $\theta = A\cos(\omega_dt - \delta)$: correct, eq. (1) is at the foot of p. 2.
- Full solution, underdamped case, reading1 p. 3: correct.
- Moving the top, reading2 p. 9: correct (also in the notes' figure on p. 3).
- Pendulum equation, reading1 p. 4: correct; $f_0 = \omega_0^2\Delta$ equals the notes' $g\Delta/l$ and the transcript's "omega 0 squared delta" (p. 12).
- Amplitude at resonance, reading1 p. 5: correct.

Prose citations checked against the transcript: three regimes and Q (pp. 1–2), rod and driving torque (pp. 2–3), which frequency (pp. 3–4), complex notation and guess (p. 4), cancellation and two real equations (p. 5), quadrature and ratio (pp. 5–6), no free constant and the student's answer (p. 6), underdamped full solution and the three omegas (p. 7), steady state and transient, "shake you long enough" (p. 8), air track with motor (pp. 8–9), pendulum setup (pp. 9–10), forces and small angles (p. 10), $T = mg$ and x equation (pp. 11–12), limits (pp. 12–13), toy for his son (p. 13), $Q\Delta$ and $Q \approx 100$ (p. 14), curve with maximum below $\omega_0$ as homework (p. 14), Mexican hat (pp. 15–16), air conditioner and washing machine (p. 16), Z boson (pp. 16–17), glass (pp. 17–19). All agree, apart from findings 5–9.

## Arithmetic and answer checks
- `npm run calc:test -- -k driven-oscillators`: 14 passed.
- Worked example, recomputed: $Q = 10/0.50 = 20$. Static $2.0/100 = 0.020$ m. At $\omega_d = 10$: $2.0/(10 \times 0.50) = 0.40$ m $= 20 \times 0.020$ m, $\delta = \pi/2$. At $\omega_d = 8$: $36^2 + 0.25 \times 64 = 1296 + 16 = 1312$, $\sqrt{1312} = 36.22$, $A = 0.0552$ m (0.055), $\tan\delta = 4/36 = 0.111$, $\delta = 0.1107$ rad (0.11). At $\omega_d = 12$: $44^2 + 0.25 \times 144 = 1936 + 36 = 1972$, $\sqrt{1972} = 44.41$, $A = 0.0450$ m (0.045), $\arctan(6/44) = 0.1355$, $\delta = 3.0061$ rad (3.01). Ratios $0.40/0.0552 = 7.2$ and $0.40/0.0450 = 8.9$: "about 7 to 9" is right; 8 and 12 are 20 % off resonance; phases 0.11 and 3.01 rad are near 0 and $\pi$. All correct. (For $Q = 20$ the true maximum is at $\sqrt{\omega_0^2 - \gamma^2/2} = 9.994$ rad/s, so using $\omega_0$ as "the peak" is fine.)
- The calcs identity `steady-state-solves` checks that the steady state actually solves the equation: good.
- Quiz 1: driving frequency, index 2. Correct.
- Quiz 2: index 1. Correct; explanation correct (see finding 1 for the page text).
- Quiz 3: $Q\Delta = 50 \times 2$ mm $= 100$ mm, index 2. Correct.
- Quiz 4: index 0. Correct.
- Flashcards: all four correct. "At resonance the amplitude is $Q$ times the static response": $f_0/(\omega_0\gamma) = Q \cdot f_0/\omega_0^2$, correct. "After a time of order $1/\gamma$": the envelope is $e^{-\gamma t/2}$ (time constant $2/\gamma$), so "of order" is fair.

## Coverage and order
- The page follows the lecture's order: recap and Q, driving torque and equation, complex solution, missing homogeneous part and full solution, three omegas, transient and air-track demo, driven pendulum, limits, toy pendulum, resonance and $Q\Delta$, amplitude and phase curves, Mexican-hat demo, everyday examples, Z boson, wine glass. No reordering.
- Omissions (info): Lee's point that one particle gives one resonance frequency, two particles two (next lecture) and the glass, made of very many particles, infinitely many, and that rubbing feeds in all frequencies while the glass picks its resonance (p. 17), a natural bridge to Lecture 4; the singing volunteer (p. 17); detuning below or above resonance leaves the glass intact (p. 19); the LC circuit from the problem set in the closing summary (pp. 19–20); the initial-condition example (released from rest at $\theta_{\text{initial}}$, p. 7); the student's question whether $\Delta$ is constant (p. 10); Lee choosing the middle air-conditioner setting between two resonances (p. 16).
- Additions: the worked example (original) and the link to the 18.03 page.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the typed notes, the transcript or the OCW lecture page (searched the text and checked the rendered note pages). The course is CC BY-NC-SA 4.0.
- The notes' hand-drawn figures (rod, pendulum, force diagram, phase and amplitude curves) are not reproduced; the page describes the curves in words. Fine.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases ("no free constant", "feel", "walked"). Fine.
- Worked example: Lecture 3 has no numerical driven-oscillator example; the page's numbers are its own. Problem Set 2 was not read, so a coincidence with a problem there is **not verified**; the numbers are generic and a close copy seems unlikely.

## Notes
- Z boson claim: matches transcript pp. 16–17 ("resonance peak at around 90 GeV" in electron–positron scattering). The measured Z mass is about 91.19 GeV, so "near 90 GeV" is fair; optional: "near 91 GeV".
- 683 Hz glass claim: matches transcript p. 17 (rubbed tone "roughly 683 Hertz") and p. 18 (Lee says it "should be 684"; the glass responds at 683). Breaking by turning up the volume at that frequency: p. 19. Correct.
- `leadsTo` 8.03 Lecture 4 "Coupled Oscillators, Normal Modes" matches `_course.json` and the closing remark (p. 20). There is no cosmology callout; the page has no cosmology claims to check.
- Prerequisite slugs `damped-free-oscillators` and `inhomogeneous-equations-and-stability` exist, as does the inline 18.03 link.
- `source.url` and both readings match the links on the OCW lecture page and the syllabus entry.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. Added a bracket on the fast-driving limit: the notes and lecture say tan δ → ∞, but tan δ → 0 from below (δ → π); it is infinite at ω₀.
2. The delta bracket now says both are spoken "delta" while the notes write Δ and δ.
3. No change (γ kept, as on the Lecture 2 page).
4. No change (the formula on the page is the correct one).
5. "Feel" now cites notes p. 2 and transcript p. 4.
6. The opening now cites pp. 2–3.
7. The phase curve now cites notes pp. 4–5 and transcript pp. 14–15.
8. Critical damping added: four kinds of homogeneous solution.
9. The glass sentence now says Lee stresses a very high-quality glass, read as a large Q; added his remark that one, two and infinitely many particles give one, two and infinitely many resonances.

Status set to reviewed.
