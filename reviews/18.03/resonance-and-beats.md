---
page: content/year-2/18.03/resonance-and-beats.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-14-interpretation-of-the-exceptional-case-resonance/ (read: local copy lec.html, title "Lecture 14: Interpretation of the Exceptional Case: Resonance"; its only .pdf link is 3408f05461d78d933a3d98de4f9f6c2f_Y9_zrupnz0Q.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/3408f05461d78d933a3d98de4f9f6c2f_Y9_zrupnz0Q.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L14", 15 pages, no printed page numbers; cited page = PDF page; the start and end of every page checked with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 15 = "Introduction to Fourier Series"; the Lecture 15 transcript was not read)
  - content/year-2/18.03/damped-oscillations.mdx (read: the linked page defines the pseudo-frequency ω₁ = √(ω₀² − p²) for y″ + 2py′ + ω₀²y = 0)
  - calcs/18.03/resonance-and-beats.yaml (read; `npm run calc:test -- -k resonance-and`: 14 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Resonance and beats

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "I just recalling some of the notation we are going to need for today" (p. 1) and ends with "It is omega nought squared minus two p squared" (p. 15). Formula locations: "The particular solutions so far" p. 2 (both cases and "I forgot the t" on p. 2; the table is begun at the foot of p. 1); "Driven undamped oscillator" p. 3 (ω₀ and the cosine input, then $(D^2 + \omega_0^2)y$ = cos, on p. 3); "Response to cos ω₁t" p. 4; "Resonant solution" p. 6 ($p' = 2D$, $2i\omega_0$, real part $t\sin\omega_0t/(2\omega_0)$ all on p. 6); "Another particular solution" p. 8; "The limit" p. 9; "Difference of cosines" pp. 9–10 (stated at foot of p. 9, factor 2 confirmed on p. 10); "Near-resonant solution as a product" p. 10; "Driven damped oscillator" p. 14 ("cosine omega t"); "Practical resonance" p. 15. All correct. Prose citations also checked: formal polynomial / linear operator p. 1; swing pp. 2–3; Tacoma p. 3; complexify pp. 3–4; driving frequency, amplitude, "omega2" p. 4, "always zero" and "to all intents and purposes" p. 5; simple root p. 5; amplitude lines pp. 6–7; giraffe and "already zooming up" p. 7; other particular solutions pp. 7–8; L'Hôpital with ω₁ the variable, $t$ and ω₀ fixed pp. 8–9; Euler backwards p. 10; $B = \omega_1t$, $A = \omega_0t$ p. 10; slowly varying amplitude, large coefficient pp. 10–11; envelope pp. 11–12; period to infinity, beats, violinists/cellists/piano tuner p. 12; notation, visual's $x'' + bx' + kx$, pseudo-frequency p. 13; right triangle and $\omega_1^2 = \omega_0^2 - p^2$ p. 14; no true resonance with damping p. 14; expected ω₁, "a little lower" p. 15. All correct, with one small stretch (finding 6). No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Practical resonance bracket: "the amplitude $1/\lvert p(i\omega)\rvert = 1/\sqrt{(\omega_0^2 - \omega^2)^2 + 4p^2\omega^2}$" | The lecture does not derive ω_r (it gives "the general formula for the answer", p. 15). | Uses $p$ in one line both as the characteristic polynomial $p(i\omega)$ and as the damping constant $p$ in $4p^2\omega^2$. The maths is right, but a reader sees "p of iω" and "p squared" with two meanings. | Write the polynomial as $P(i\omega)$ or $p(D) = D^2 + 2pD + \omega_0^2$ explicitly, or say "the characteristic polynomial evaluated at iω". |
| 2 | warning | "Damping and practical resonance" and worked example (d) | The lecture also reuses ω₁: driving frequency on pp. 3–12, natural damped frequency on pp. 13–15. | Follows the lecture: ω₁ is the driving frequency in the first five sections, quiz 1–2 and flashcard 1, then the pseudo-frequency from "Damping" on and in example (d), with no warning. In the same worked example, (c) has driving 2.8 and (d) calls the pseudo-frequency ω₁. | Add a short note: "(From here ω₁ means the pseudo-frequency, as in the lecture; the driving frequency is now ω.)" |
| 3 | warning | Practical resonance formula, quiz 3 and flashcard 3 | p. 15 gives $\omega_r = \sqrt{\omega_0^2 - 2p^2}$ without stating a condition. | Same, no condition. The formula needs $\omega_0^2 > 2p^2$; otherwise the quadratic's minimum lies at negative ω² and the response is largest at ω = 0 (no peak). Quiz 3 asks "the largest response comes at…" with no such condition. | Add "(when $2p^2 < \omega_0^2$)" to the bracket and to the quiz question or explanation. |
| 4 | info | Tacoma bracket: "(Engineers now describe that collapse as aeroelastic flutter rather than simple resonance.)" | p. 3: "It's what made the Tacoma Bridge fall down." | Adds a later correction in brackets. The content is correct (the 1940 Tacoma Narrows collapse is explained as torsional aeroelastic flutter, a self-excited instability, not forced resonance; e.g. Billah & Scanlan 1991). It is clearly not attributed to the lecture, but it does not say outright that it is the page's own note and cites no reference. | Optional: "(This page's note: later analyses describe…)" and, if wanted, a `references` entry. |
| 5 | info | "(The transcript says "always zero" and, once, "omega two" here.)" | p. 4 "omega1 and omega2"; p. 5 "is always zero". | Flags both slips but does not say what was meant. | Optional: "(… slips for "nearly zero" and "omega nought".)" |
| 6 | info | Exact resonance: "With $p'(D) = 2D$ (pp. 5–6)" | The case "when it is a root" is invoked on p. 5, but $p' = 2D$ is said on p. 6. | pp. 5–6. | Acceptable; "p. 6" would be more exact. |
| 7 | info | Damping section: "$mx'' + cx' + kx = f(t)$ becomes … $y'' + 2py' + \omega_0^2y = f(t)$" | p. 13 speaks of "the spring mass, damping, k, spring constant", "divide out by m", and that the visual's $b$ "can't be confused with c"; the board forms are not spoken. | Writes the book's forms explicitly. Consistent with the transcript (c implied on p. 13; $\omega_1^2 = \omega_0^2 - p^2$ on p. 14 implies the 2p form) and with the linked damped-oscillations page, but the exact board form is uncertain. | None needed. |
| 8 | info | Recap | p. 2 mentions a third case (double root, "you'll need it for homework"), not written on the board. | Not mentioned. | Optional: one clause on the double-root case. |

Lecturer slips checked:
- p. 2 missing $t$ in the simple-root formula: corrected on the board in the lecture; the page notes it. Correct.
- p. 4 "omega2" and p. 5 "always zero": noted (finding 5). The page states the correct claim (denominator nearly zero).
- p. 5 "i omega nought is a simple root… of D squared plus omega nought, that polynomial squared": garbled wording; the page writes $D^2 + \omega_0^2$. Correct.
- p. 6 "you plot that and it's negative": the page reads it as the lines $\pm t/(2\omega_0)$. Correct.
- p. 9 "a product of signs" and p. 10 "Express the sign" are transcription garbles for "sines"; not repeated.
- p. 3 "omega nought squared is the natural frequency": strictly ω₀ is; the page says ω₀. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k resonance-and`: 14 passed. Recomputed by hand:
- Response: $(i\omega_1)^2 + \omega_0^2 = \omega_0^2 - \omega_1^2$, real, so $y_p = \cos\omega_1t/(\omega_0^2 - \omega_1^2)$. Correct.
- Resonance: $p'(i\omega_0) = 2i\omega_0$; $\mathrm{Re}\,[t(\cos\omega_0t + i\sin\omega_0t)/(2i\omega_0)] = t\sin\omega_0t/(2\omega_0)$. Correct.
- L'Hôpital: $\partial_{\omega_1}(\cos\omega_1t - \cos\omega_0t) = -t\sin\omega_1t$, $\partial_{\omega_1}(\omega_0^2 - \omega_1^2) = -2\omega_1$; limit $t\sin\omega_0t/(2\omega_0)$. Correct.
- Identity: $\cos B - \cos A = -2\sin\frac{A+B}{2}\sin\frac{B-A}{2} = 2\sin\frac{A-B}{2}\sin\frac{A+B}{2}$. Correct; applied with $A = \omega_0t$, $B = \omega_1t$ it gives the page's product. Correct.
- Practical resonance (page's own working): with $u = \omega^2$, $f(u) = (\omega_0^2 - u)^2 + 4p^2u$, $f'(u) = -2(\omega_0^2 - u) + 4p^2 = 0 \Rightarrow u = \omega_0^2 - 2p^2$; $|p(i\omega)|^2 = (\omega_0^2 - \omega^2)^2 + (2p\omega)^2$. Correct, valid for $\omega_0^2 > 2p^2$ (finding 3). The calcs entry `practical-resonance` substitutes the answer into $f'$ and so checks only that line; adequate.
- Graph: $\omega_0 = 1$, $\omega_1 = 1.1$: denominator $1 - 1.21 = -0.21$; envelope $\frac{2}{-0.21}\sin(-0.05t) = \frac{2}{0.21}\sin(0.05t)$, matches the dashed curves; height $9.52$ fits the range $\pm 11$; fast frequency $1.05$; envelope zero at $t = 20\pi = 62.83$, inside the domain $[0, 63]$. Correct.
- Example (a): $\cos 2t/(9 - 4) = \frac15\cos 2t$. Correct.
- (b): $4 \cdot t\sin 3t/6 = \frac23 t\sin 3t$; checked by substitution: $y'' = 4\cos 3t - 6t\sin 3t$, $y'' + 9y = 4\cos 3t$. Correct.
- (c): $9 - 2.8^2 = 1.16$; $y(0) = 0$, $y'(0) = 0$; general solution plus initial conditions gives $c_1 = -1/1.16$, $c_2 = 0$, so the stated $y$ is the solution. Product $\frac{2}{1.16}\sin(0.1t)\sin(2.9t)$; $2/1.16 = 1.724 \approx 1.72$; $\pi/0.1 = 31.4$. Correct.
- (d): $\sqrt{8.75} = 2.9580$, $\sqrt{8.5} = 2.9155 \approx 2.915$; $2p^2 = 0.5 < 9$, so the formula applies. Correct.
- Quiz 1: $\cos 3t/(4 - 9) = -\frac15\cos 3t$, answer 0. Correct; distractors wrong ($\frac t4\sin 2t$ is the resonant response to $\cos 2t$, a sensible distractor).
- Quiz 2: answer 0; explanation correct.
- Quiz 3: answer 0 correct under $\omega_0^2 > 2p^2$ (finding 3); explanation correct.
- Flashcards: all three correct (beats card: same identity as above).
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: every non-trivial number has an entry. Not covered (trivial, info): quiz 1's $-\frac15$ and $y'(0) = 0$ in (c).

## Coverage and order
- The page follows the lecture's order: dual aspect of $p(D)$ (p. 1) → the table of particular solutions (pp. 1–2) → swing and Tacoma (pp. 2–3) → undamped driven equation, complexify, response (pp. 3–5) → exact resonance (pp. 5–7) → giraffe, other particular solutions, L'Hôpital (pp. 7–9) → identity and beats picture (pp. 9–12) → tuning instruments (p. 12) → notation, pseudo-frequency (pp. 13–14) → damped driven oscillator and practical resonance (pp. 14–15).
- Left out (minor): the double-root case (p. 2, finding 8); the right-triangle picture with hypotenuse ω₀ and legs ω₁ and $p$ (p. 14; only the relation is given); Fred Rogers "everybody is special" (p. 7); the book giving the identity "in a wrong form" (p. 12); using an electronic tuner (p. 12); problem set 6 remarks (pp. 12, 14–15).
- Added: the graph, the worked example (both original) and the page's own derivation of ω_r (marked "by this page's own working"); the Tacoma bracket (finding 4).
- `prerequisites: [exponential-input-theorem]`: the file exists in the working tree but is not yet committed (expected per the brief).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("push at the wrong time", "to all intents and purposes", "a giraffe … first-floor window", "Euler's formula backwards") are brief and cited.
- The worked example and graph are original (own frequencies and damping); no OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 15 ("Fourier series: building periodic inputs from the sinusoids whose responses this lecture found."): consistent with the Lecture 15 title "Introduction to Fourier Series" and with p. 1 ("not any old function, we'll get to that next time"). That Lecture 15 uses Fourier series specifically to build periodic inputs for these equations was not verified (its transcript was not read): uncertain until that page is written, though it is the standard motivation in 18.03.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The link to `/courses/18-03/damped-oscillations` for the pseudo-frequency goes to a page that defines it with the same notation; good.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.

## Resolution (2026-11-16, by the page author)

1. Warning 1: the practical-resonance bracket no longer writes p(iω), so p means only the damping constant there.
2. Warning 2: the damping section now says that from there on, as in the lecture, ω₁ means the pseudo-frequency.
3. Warning 3: the bracket and quiz 3 now state the condition ω₀² > 2p²; with heavier damping the largest response is at ω = 0.
4. Info: the slips now say what was meant; the Tacoma note is marked as the page's own; p′ = 2D cites p. 6.

The coverage omissions are left as they are. Status set to `reviewed`.
