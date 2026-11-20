---
page: content/year-0/hs-5/simple-harmonic-motion.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/mitres_8_009su17_lec2_3.pdf (read, all 21 pages, from a local copy of that PDF)
  - https://ocw.mit.edu/courses/res-8-009-introduction-to-oscillations-and-waves-summer-2017/resources/mitres_8_009su17_lec2_3/ (not opened; it is the resource page for the same PDF)
verdict: needs-changes
---

# Review: Oscillations and simple harmonic motion

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Velocity and acceleration", first paragraph: "The slope of $A\cos(\omega t)$ is $-\omega A\sin(\omega t)$" | The notes get the velocity by differentiating (Eq. (44), Eq. (58) second line). | States the slope of the cosine, including the factor $\omega$, as a fact. | This is the derivative of cosine plus a chain-rule factor. Neither prerequisite teaches it: 0.7 (angles, radians, trigonometry) points forward to `18-01/derivatives-of-sine-and-cosine`, and 0.10 covers slope and rate of change in general only. Either show it on a graph (a `<Plot>` with `tangentOf` on the cosine, plus a sentence saying that squeezing time by a factor $\omega$ makes every slope $\omega$ times steeper), or use the reference circle from lesson 1.10 (Circular motion): a point that goes round a circle of radius $A$ at angular speed $\omega$ has speed $\omega A$ and centripetal acceleration $\omega^2 A$, and its shadow is $x = A\cos(\omega t)$. That route gives $v_\text{max} = \omega A$ and $a = -\omega^2 x$ without derivatives. Add `circular-motion` to `prerequisites` if you use it. |
| 2 | error | Formula "Frequency and period" $f = 1/T$, `at="Eq. (49), period of the oscillation"` | Eq. (49) is $T = 2\pi/\omega_0$. The notes never define a frequency $f$ in hertz or write $f = 1/T$. (Eq. (18) only says that "frequency" has units of 1/s.) | Cites Eq. (49) for $f = 1/T$. | Give `at` honestly, for example `at="definition; T as in Eq. (49)"`, and add a sentence that $f = 1/T$ is the standard definition. Better still, cite a §2.0 source that defines frequency and the hertz (Block 5's main source is Siyavula). |
| 3 | warning | Formula "Largest speed", `at="Eq. (58), first line: …"` | The velocity term $-A_0\omega_0\sin(\omega_0 t - \phi)$ is on the **second** line of Eq. (58). The first line is $E = \tfrac12 m\dot x^2 + \tfrac12 kx^2$. The notes never write $v_\text{max} = \omega A$. | "first line" | Change to "second line" and add "largest value of" (for example "Eq. (58), second line: velocity −A₀ω₀ sin(ω₀t − φ); its largest value"). Eq. (44), $\dot x = -\omega_0 B\sin(\omega_0 t) + \dots$, would also do. |
| 4 | warning | `leadsTo` `why` | 8.03 lecture 1 (`content/year-2/8.03/harmonic-oscillator.mdx`) covers the equation of motion, why Hooke's law is everywhere, the phase and the three forms of the solution. It does **not** treat the energy of the oscillator (energy appears only in passing). | "…solves it in full, including the phase and the energy of the oscillator." | Remove "and the energy", or say "including the phase, the complex form and why small oscillations are always harmonic". |
| 5 | info | Formula "Acceleration in SHM", $a_\text{max} = \omega^2 A$, `at="Eq. (20)"` | Eq. (20) is $\ddot x + \omega_0^2 x = 0$, which gives $a = -\omega^2 x$. $a_\text{max} = \omega^2 A$ follows by putting in $x = A$. | as cited | Acceptable. You could add "with x = A" to `at`. |
| 6 | info | Paragraph after the second worked example: a hanging spring has the same period about its stretched equilibrium | The notes set $x_\text{eq} = 0$ and say only that its value "doesn't change the resulting dynamics" (after Eq. (15)). They never discuss a vertical spring. | States the result for a hanging spring. | The physics is correct and standard. A short reason would help ("the extra stretch balances gravity, so the net force is still $-k$ times the displacement from the new equilibrium"). |
| 7 | info | Source choice | §2.0 makes Siyavula the main source for Block 5, with MIT RES.8-009 as support. | Cites MIT RES.8-009 only. | Allowed. Consider adding Siyavula for the definitions of period, frequency and hertz (this would also fix #2). |

## Formulas and citations
- $F = -kx$, Eq. (15): correct. The notes write $F = -k(x - x_\text{eq})$ and then set $x_\text{eq} = 0$, and the page says it measures $x$ from equilibrium. OK.
- $a = -(k/m)x$, Eqs. (16)–(17): correct.
- $f = 1/T$, Eq. (49): not in the source. See #2.
- $\omega = 2\pi/T = 2\pi f$, Eq. (49): the first equality is Eq. (49) rearranged. The second rests on $f = 1/T$ (#2).
- $x(t) = A\cos(\omega t)$, Eq. (47) with $\phi = 0$: correct. Eq. (47) is $A_0\cos(\omega_0 t - \phi)$, and $\phi = 0$ means the mass is released from rest at $x = A$ (Eq. (48) with $v_0 = 0$). OK.
- $\omega = \sqrt{k/m}$, Eq. (19): correct.
- $T = 2\pi\sqrt{m/k}$, Eqs. (19) and (49) combined: correct. The notes write the same combination only for the pendulum (Eq. (84)). OK.
- $v_\text{max} = \omega A$, Eq. (58): the line reference is wrong (#3). The physics is correct.
- $a = -\omega^2 x$ and $a_\text{max} = \omega^2 A$, Eq. (20): correct (#5).
- Notation: the page drops the subscript of $\omega_0$ and $A_0$, uses SI, and uses $x$ and $k$. The Notation callout names the VWO forms $u$, $C$ and a sine start: correct (Binas writes $u(t) = A\sin(2\pi t/T)$ and $C$ for the spring constant). The page does not say that the MIT notes write $\omega_0$ and $A_0$. That is minor (info).
- "The notes call such a system a simple harmonic oscillator": correct (§1, after Eq. (20)).
- "Why it is everywhere": correct. It matches §3 (the stable-equilibrium theorem, Eqs. (85)–(98)) and §3.1 (atoms in the Lennard-Jones potential). "The MIT notes end with" is fair, since §3 and §3.1 are the last part of the notes. The ball in a bowl and the pendulum are in Fig. 1, and the vibrating molecule is §3.1.

## Arithmetic and answer checks
Recomputed independently:
- Quiz 0: $T = 8.0/20 = 0.40$ s and $f = 2.5$ Hz. Correct. The other choices are wrong: 0.40 is the period, 8.0 is not a frequency, and 160 is 20 × 8.
- Quiz 1: the period stays the same. Correct. The explanation (twice the distance, twice the force, twice the speed) is true for a linear restoring force.
- Quiz 2: four times $k$ gives $T' = T/2$. Correct. "Twice k" gives $T/\sqrt2$. "Twice the mass" makes $T$ longer. Half the amplitude leaves $T$ unchanged. The explanation's "(or $m$ four times as small)" is also correct.
- Quiz 3: the speed is largest at equilibrium. Correct. Halfway between equilibrium and a turning point ($x = A/2$) the speed is $\omega A\sqrt{3}/2$, which is not the largest, so that choice is wrong.
- Quiz 4: at $x = +A$ the acceleration is largest and points towards $-x$. Correct.
- Worked example 1: $k/m = 62.5$ s⁻², $\omega = 7.9057 \to 7.91$ rad/s, $T = 0.79477 \to 0.79$ s, $f = 1.2582 \to 1.26$ Hz, $v_\text{max} = 0.39528 \to 0.40$ m/s, $a_\text{max} = 3.125 \to 3.1$ m/s². All correct. (Info: $1/0.79 = 1.27$. A reader who divides by the rounded $T$ gets 1.27 Hz. You could write "$f = 1/T = 1/0.795 = 1.26$ Hz".)
- Worked example 2: $T = 0.50$ s, $k = 4\pi^2 \times 2.0/0.25 = 315.83 \to 316$ N/m, about $3.2\times10^2$ N/m. Correct. Check: $2\pi\sqrt{2.0/315.83} = 0.500$ s.
- Plot: $x = A\cos(2\pi t/T)$ with $A \le 0.10$ m stays inside the range ±0.12 m. The caption is correct.
- Flashcards: all true. ("$x(t) = A\cos(\omega t)$" describes release from rest at $+A$. Info: you could add "for a release from rest at $x = A$".)
- Calcs file: every number on the page has an entry (0.40 s, 2.5 Hz, 62.5, 7.91, 0.79, 1.26, 0.40 m/s, 3.1, 0.50 s, 316, and the identities for quiz 2, $T$ from $\omega$, and the second slope). The expected values match my recomputation. I did not run `npm run calc:test`.

## Only earlier terms
- Hooke's law, spring constant $k$, equilibrium (2.7 `springs-and-hookes-law`, planned, not written): covered by its title and §4 row.
- $F = ma$ (2.3 `newtons-second-law`, planned): covered.
- Cosine, radians, $2\pi$ for one cycle (0.7 `angles-and-trigonometry`, "Angles, radians and trigonometry", planned): covered.
- Slope of a graph as velocity and acceleration (0.10 `rates-of-change-and-area`, planned, and 0.5 graphs and slope): covered.
- **The slope of $A\cos(\omega t)$ is $-\omega A\sin(\omega t)$:** not covered by any earlier row. This is error #1.
- Restoring force, SHM, amplitude, period, frequency, hertz, angular frequency, stable equilibrium: each is introduced on this page. OK.
- "Pendulum in the next lesson": lesson 5.2 is `the-pendulum`. OK.
- Rad/s as a unit: introduced in 0.7 (radians) and on this page. OK.

## Coverage
- The §4 row (old OpenStax topics P 5.5, CP 16.2, 16.3, 16.6: SHM, period and frequency, SHM as a special periodic motion, SHM and uniform circular motion) is covered, except the link with **uniform circular motion** (CP 16.6), which is missing. That link is also the natural fix for #1 (warning-level gap).
- Phase and initial velocity (Eqs. (44)–(48)) are left out. That is acceptable at VWO level for a first lesson, and the 8.03 lecture covers them.
- Energy in SHM (Eqs. (50)–(59)) is planned for 5.2 ("The pendulum and energy in oscillations"). OK.
- PhET `masses-and-springs` matches §4. OK.

## Where this leads
- 8.03 lecture 1 `harmonic-oscillator` fits: same equation of motion, why Hooke's law is everywhere (it matches this page's last section), $\omega = \sqrt{k/m}$, and the forms of the solution with the phase. The `why` text overstates "the energy" (#4).

## Licensing and AI terms
- No copied sentences found. I compared the page's definitions and its "everywhere" paragraph with the notes (§1 intro, the Hooke's law paragraph, §3). The wording is original. "Simple harmonic motion" and "restoring force" are standard phrases.
- No figures copied. The one graph is a generated `<Plot>`. The notes' Figs. 1–6 and the CC BY Wikipedia Fig. 7 are not used.
- The worked examples and quiz are original. The notes have no numerical examples or exercises in these pages.
- MIT: the PDF carries no "excluded from our Creative Commons license" or "All rights reserved" marks on the material the page uses. The page's `license: CC BY-NC-SA 4.0` fits.
- No Siyavula, NASA or ESO material is used, and no forbidden source is cited.

## Notes
- The source `url` points to the OCW resource page and not to the PDF. That is fine. `readings: []` is empty: you could give the page range (pp. 1–9, 15–20) to make checking easier.
- Uncertain: I did not run `content:check` or `calc:test`, so symbol entries (for example $v_\text{max}$, $a_\text{max}$, $\omega$, $f$, $T$ on this page) were not verified.

## Resolution (2026-11-20, by the page author)

1. **Error, derivative of the cosine used before it is taught:** fixed. The section is now "Velocity and acceleration: the shadow of a circle": simple harmonic motion as the projection of uniform circular motion (lesson 1.10 `circular-motion`, added to `prerequisites`) gives v_max = ωA and a = −ω²x without derivatives.
2. **Error, f = 1/T cited to Eq. (49):** fixed. f = 1/T now cites Siyavula Grade 10, 8.6 Period and frequency (`references.siyavula10`), where period, frequency, the hertz and f = 1/T are defined.
3. **Warning, "Eq. (58), first line":** fixed to "second line", and the `at` says v_max is the largest size of that velocity.
4. **Warning, `leadsTo` why mentioned energy:** reworded to the full solution and the phase.
5. **Info, a_max:** the `at` now says a_max follows from Eq. (20) with x = A.
6. **Info, hanging spring:** one sentence of reason added (gravity only moves the equilibrium point).
7. **Info, f = 1.26 Hz:** the step now computes f = ω/2π and notes that dividing by the rounded period gives 1.27 Hz. The circle link (from the §4 row) is now part of the lesson.

`npm run content:check`: 0 errors; `npm run calc:test -- -k hs-5`: all pass.
