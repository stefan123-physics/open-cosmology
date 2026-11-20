---
page: content/year-2/8.03/coupled-pendulums-beats.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-5/ (read: saved HTML of the lecture page; title "Lecture 5: Beat Phenomena", "Prof. Wyslouch shows the solution of two coupled pendula"; its links to the transcript PDF and to resources/mit8_03scf16_lec5/ match the page's readings; it also lists handwritten notes, Georgi Chapter 3 and Problem Set 3, not read)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec5/ (read: typed Lecture 5 notes, 4 pages plus OCW back page; text layer garbled, so every page was also checked as a rendered image, including the figures on pp. 1 and 3)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/119a2ad7e8f7f521d65cf1e6dc1dd167_I0YACDaY-ww.pdf (read: transcript, all 23 pages, page by page with pdftotext -f N -l N; no printed page numbers, so "p. N" = PDF page N)
verdict: pass-with-notes
---

# Review: Coupled pendulums and beats

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Beats, bracketed note on the "divided by t" slip | The slip is on p. 18: as spoken, x₂'s envelope is "cosine omega 1 minus omega 2 divided by t", and in both x₁ and x₂ the carrier factor is spoken without t ("sine of omega 1 plus omega 2 divided by 2 times sine ... divided by 2 times t"). On p. 21 a student asks "Should both of those sine and cosines have Ts in their arguments?" and Wyslouch answers "Of course always. They are both time dependent". | "(In the lecture the argument of the envelope is once said as "divided by $t$"; a student checks that both factors depend on $t$, as written here; p. 21.)" The slip itself is cited to p. 21, where it is not; and the student's question is more likely about the missing t in the carrier factors (which factor the board lacked cannot be told from the transcript; uncertain). | "(As spoken, the envelope of $x_2$ is once "divided by $t$" and the carrier arguments lack $t$, p. 18; a student asks whether both factors should contain $t$, and Wyslouch confirms that both depend on time, p. 21.)" |
| 2 | warning | Beats, "a slow envelope at half the difference" (also frontmatter summary, Summary, flashcard "Beats") | Notes p. 3, figure: $T_{\text{carrier}} = 2\pi/\frac{\omega_1+\omega_2}{2}$ and $T_{\text{beat}} = 2\pi/|\omega_1 - \omega_2|$: the loudness/amplitude repeats at the full difference, because $|\cos\frac{(\omega_1-\omega_2)t}{2}|$ has half the period of the cosine. | Only "envelope at half the difference"; the beat period is never given. A reader may take the beat frequency to be half the difference. The page's sentence "its swing grows, falls to zero and grows again" describes the full-difference beat. | Add the notes' two periods (cite reading1, p. 3, figure) and one sentence: the envelope factor oscillates at $|\omega_1-\omega_2|/2$, but the amplitude it sets reaches zero twice per cycle, so beats repeat at $|\omega_1-\omega_2|$. Optionally mention it in the quiz 2 explanation. |
| 3 | warning | Introduction: "It applies the systematic method ... to two simple systems, the second of them later driven" | Wyslouch plans two systems (pendulums with a spring; two masses on a frictionless track between springs, set up for driving) and says "we may, depending on how much time we have, start driving" (p. 1). Only the pendulums are treated; the lecture ends with "on Tuesday, we'll continue with forced oscillators" (p. 23). | Implies the lecture covers both systems. | "Wyslouch planned two simple systems ... (p. 1); the lecture covers only the first, and the second, driven, waits for the next lecture (p. 23)." |
| 4 | warning | "Changing gravity" paragraph | Pp. 15–17: a student suggests the Moon; Wyslouch then changes g in his MatLab simulation ("you don't have to go to the rocket. Just remove one comment"), from about 10 to 25 m/s² for "Jupiter", and shows still pictures for Earth, Jupiter and the Moon. | "Without touching the system, take it to Jupiter ..." reads as a thought experiment or demonstration; it does not say these are computer runs. | Add "In the computer simulation (g raised from about 10 to 25 m/s² for Jupiter) ..." (pp. 15–17). |
| 5 | warning | Worked example, Problem | — | The problem asks for "the time for the energy to pass completely from one pendulum to the other" without stating the initial conditions; the step then assumes "Pendulum 1 starts at rest". The answer $\pi/(\omega_2-\omega_1)$ holds only for the lecture's start (one pendulum displaced, the other at zero, both from rest). | In the Problem: "Pendulum 2 is pulled aside, pendulum 1 held at its equilibrium, and both are released from rest." |
| 6 | info | Normal modes: "The only thing that can be adjusted is $\omega^2$ (p. 9)" | The argument starts at the foot of p. 8 ("The system has been built ... I cannot change anything") and ends on p. 9. | p. 9 | "(pp. 8–9)". |
| 7 | info | Introduction: "generalised to infinitely many, they give waves (p. 2)" | P. 2: "we will then generalize to infinite number of oscillators ... will be then used for many applications of the concepts later in this course." The word "waves" is not used. | States waves. | Either "will be used throughout the rest of the course (p. 2)" or keep "waves" as the page's own gloss, outside the citation. |

Formula citations, all checked against the rendered notes pages:
- Forces on pendulum 1, notes p. 1 (x̂ and ŷ equations next to the force diagram): correct. Also spoken on transcript p. 3.
- Coupled equations, notes p. 1 ("Similarly $m\ddot x_2 = \dots$"): correct; transcript pp. 4–5.
- Matrices $M$, $K$ and $\ddot X = -M^{-1}KX$, notes p. 2: correct; transcript pp. 5–6.
- Frequency condition and the ± step, notes p. 2: correct; transcript p. 9.
- Normal-mode frequencies, notes p. 2: correct.
- Mode shapes $(1,1)$ and $(1,-1)$, notes p. 2: correct (both matrices on p. 2 match transcript pp. 10–11).
- General solution, notes p. 2: correct; initial values $\alpha = x_0/2$, $\beta = -x_0/2$, $\phi_1=\phi_2=0$ also p. 2 (page cites p. 2, correct).
- Starting from one displaced pendulum, notes p. 3 (top): correct.
- Carrier and envelope, notes p. 3: correct, including the signs ($x_1 = -x_0\sin\sin$).
- Normal coordinates, notes p. 3: correct. Decoupled equations, notes p. 4: correct (the added and subtracted equations are at the foot of p. 3, the $U$ form on p. 4).
- The page's notation ($l$, $k$, $m$, $\omega_1^2 = g/l$, $A$ real) follows the notes and transcript.

Description of the system checked: identical masses and lengths, spring relaxed when both hang vertically, small angles, no drag, ideal spring (transcript p. 2; notes p. 1 "no drag force, the springs are ideal"); x measured from equilibrium, y needed only temporarily (pp. 2–3); T = mg because there is no vertical motion (p. 4). The notes' figure also shows the spring's natural length $l_0$ and "On Earth"; nothing on the page goes beyond what the sources state. The page correctly does not repeat two slips of speech ("connect them with a string", p. 2; "tension in the spring", p. 4); these are harmless and need no note.

Demonstrations checked: real pendulums, in-phase and opposite modes (pp. 9–10), the one-displaced start with energy passing back and forth (p. 13), MatLab animation with the two modes in green and magenta (p. 14), switching off one mode by initial conditions with constant amplitudes and no energy exchange (pp. 14–15), two loudspeakers (pp. 19–20), tuning forks coupled through the air, then detuned by a small weight (pp. 20–21). All described correctly. Omitted (info): the overlaid red and blue cosines on the computer (p. 20).

Attribution: substitute Prof. Boleslaw ("Bolek") Wyslouch for Prof. Lee, "who is now at some conference in China" (p. 1): correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k coupled-pendulums`: 14 passed.
- Recomputed: Earth $\omega_1 = \sqrt{19.6} = 4.427$, $\omega_2 = \sqrt{23.6} = 4.858$ rad/s, carrier 4.643, difference 0.4308, transfer $\pi/0.4308 = 7.29$ s (page 4.43, 4.86, 4.64, 0.431, 7.3: correct). Moon $\omega_1 = 1.800$, $\omega_2 = \sqrt{7.24} = 2.691$, difference 0.891, transfer 3.53 s (page 1.80, 2.69, 0.89, 3.5: correct). Ratios $\omega_1/\omega_2$ = 0.91 (Earth) and 0.67 (Moon), so "no longer close" on the Moon is fair.
- Transfer condition: with the lecture's start, $x_2 = x_0\cos\bar\omega t\cos\frac{\Delta\omega t}{2}$ vanishes identically at $\Delta\omega t/2 = \pi/2$, so $t = \pi/\Delta\omega$ is a complete transfer: correct (but see finding 5 on the missing initial condition).
- 0.9ω₂ example: $(0.9+1)/2 = 0.95$, $(0.9-1)/2 = -0.05$: matches notes p. 3 and transcript p. 18.
- Quiz 1: in-phase mode, $\sqrt{g/l}$, index 1. Correct.
- Quiz 2: $(10.4-10.0)/2 = 0.2$ rad/s, index 1; carrier 10.2. Correct for the envelope factor as asked (see finding 2 for the beat frequency, which would be 0.4 rad/s; the distractor 0.4 is then a subtle trap, so the explanation should say why it is not the answer).
- Quiz 3: larger g, $\omega_2-\omega_1 = \sqrt{g/l+2k/m}-\sqrt{g/l}$ decreases with g, slower exchange, index 1. Correct, matches pp. 16–17.
- Quiz 4: index 1; the explanation's equations match notes p. 4. Correct.
- Flashcards: all three correct (the "Beats" card shares finding 2's wording).

## Coverage and order
- The page follows the lecture's order: plan and "workhorse" (pp. 1–2), setup and forces (pp. 2–4), coupled equations (pp. 4–5), matrices (pp. 5–6), normal-mode ansatz and determinant (pp. 6–9), frequencies and the two demonstrated modes (pp. 9–10), shapes (pp. 10–11), general solution and initial conditions (pp. 11–13), pendulum demonstration and animation (pp. 13–14), switching off a mode (pp. 14–15), Jupiter and the Moon (pp. 15–17), trig identities and beats (pp. 17–19), loudspeakers, simulation and tuning forks (pp. 19–21), normal coordinates (pp. 22–23), forced oscillators next (p. 23).
- Omissions (info): the second system announced on p. 1 (finding 3); the overlaid two-cosine simulation (p. 20); Wyslouch's remark that the 0.9 ratio is "roughly what we have on Earth in case of our system" (p. 18); the notes' $U_1 = 2A\cos(\omega_A t + \phi_1)$, $U_2 = 2B\cos(\omega_B t+\phi_2)$ (p. 3); the beat and carrier periods in the notes' figure (finding 2).
- Additions: the worked example (original). No cosmology callout; acceptable, as the lecture has no direct cosmology link.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes, the transcript or the OCW lecture page (searched; notes pages also inspected as images). The course is CC BY-NC-SA.
- The notes' hand-drawn figures (pendulum setup, free-body diagram, beat sketch) are not reproduced.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("workhorse", "zero physics"). Fine.
- Worked example: the lecture is symbolic, with a 0.9 frequency ratio and a simulated Jupiter/Moon; the page's numbers (0.50 m, 0.20 kg, 0.40 N/m, Earth vs Moon) and the transfer-time question are its own. Problem Set 3 and Georgi Chapter 3 were not read, so a coincidence with a problem there is **not verified**; the numbers are generic.

## Notes
- `leadsTo` 8.03 Lecture 6 ("Driven Oscillators, Resonance" in `_course.json`) points to `driven-coupled-oscillators-symmetry.mdx` (lecture 6); the Lecture 6 transcript discusses resonance at the normal-mode frequencies. Supported.
- Prerequisite `coupled-oscillators-normal-modes` exists; the inline link `/courses/8-03/coupled-oscillators-normal-modes` matches it.
- `source.url` and both readings match the OCW lecture page and the syllabus entry.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. The "divided by t" note now places the slip on p. 18 (slow factor of x₂ said "divided by t", t left out of the fast factors) and the student's question and Wyslouch's confirmation on p. 21.
2. Added the carrier period 2π/((ω₁+ω₂)/2) and the beat period 2π/|ω₁ − ω₂|, with the reason (the size of the envelope peaks twice per cycle), in the text, summary and flashcard; quiz 2's explanation now says why 0.4 rad/s is the beat rate.
3. The introduction now says two systems were planned, only the pendulums fit, and the driven masses follow next time (pp. 1, 23).
4. Jupiter and the Moon are now described as runs of Wyslouch's MATLAB simulation (g raised from about 10 to 25 m/s²).
5. The worked example now states the initial conditions.
6. "Only ω² can be adjusted" now cites pp. 8–9.
7. "Waves" is now outside the p. 2 citation.

Status set to reviewed.
