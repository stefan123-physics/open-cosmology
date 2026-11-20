---
page: content/year-2/18.03/damped-oscillations.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-10-continuation-complex-characteristic-roots/ (read: local copy lec.html, title "Lecture 10: Continuation: Complex Characteristic Roots"; its only .pdf link is 43b495023daa3a460d0c1eab841ec11f_YQ7HEE8-OfA.pdf, matching the page's `reading1` URL; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/43b495023daa3a460d0c1eab841ec11f_YQ7HEE8-OfA.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L10", 16 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 10 = Continuation: Complex Characteristic Roots, Lecture 11 = Theory of General Second-order Linear Homogeneous ODEs; the Lecture 11 transcript was not read)
  - calcs/18.03/damped-oscillations.yaml (read; `npm run calc:test -- -k damped-osc`: 13 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Complex characteristic roots and damped oscillations

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The transcript runs from "This is a brief, so, the equation…" (p. 1) to "…the omega one is this pseudo-frequency, which tells you how it's bobbing up and down." (p. 16, a short page). Formula locations: "Complex form" pp. 2–3 (C₁ term at the foot of p. 2, C₂ term at the top of p. 3); "Changing i to −i" pp. 4–5 (C̄₁ e^((a−bi)t) on p. 4, C̄₂ e^((a+bi)t) at the top of p. 5); "Real solutions in complex form" p. 5; "Euler's formula backwards" p. 7; "The same solution, real form" p. 8; "Standard form" p. 9 (mx″ + cx′ + kx and the divided form at the foot of p. 8, the renaming 2p, ω₀² on p. 9; the formula shown is the p. 9 one); "Characteristic roots" p. 10 (−p on the p. 9/10 break, √(p² − ω₀²) on p. 10); "Undamped oscillation" pp. 10–11 (c₁, c₂ form p. 10, A cos(ω₀t − φ) p. 11); "Pseudo-frequency" p. 15 ("I never wrote the formula for you… omega nought squared minus p squared equals omega one squared"); "Damped oscillation" pp. 13–14 (c₁, c₂ form p. 13, amplitude-phase form p. 14). All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Four parameters": "(The transcript at first lists $\phi$ among the constants fixed by the equation, then corrects itself.)" | p. 15: "How about phi? Well, phi, what else depends only on the ODE? Omega one depends only on the ODE." Later: "How about the phi and the A? … They depend upon the initial conditions." It reads as a false start (φ is raised, then dropped in favour of ω₁) rather than a clear listing of φ with the equation's constants. | Says φ is "listed" among the equation's constants, then corrected. | Fair enough as is; optionally "(The transcript starts to name $\phi$ among the constants fixed by the equation, breaks off, and later puts it with $A$.)" |
| 2 | info | "Four parameters": "both depend only on the equation, on the damping and the spring" | p. 15: p "depends on c and m. Essentially, it's c over 2m"; ω₁ "depends on the damping, and it depends on the spring constant" (and, via ω₀² = k/m and p = c/2m, on m too). | Names only damping and spring; the mass is left out. The quiz 3 explanation correctly says "(damping, mass, spring)". | "on the damping, the mass and the spring". |
| 3 | info | "Damped oscillations", ω₁ check: "the next downward crossing comes … at $t_1 + 2\pi/\omega_1$ (p. 14)" | p. 14 first says "t2 is nothing but 2 pi divided by omega one" (a slip), then correctly "at t1 plus 2 pi divided by omega one". | Uses the correct form, without noting the slip. | None needed (rule 4: slip not repeated). Optional bracket note. |
| 4 | info | Worked example (d): "Oscillation stops when $p = \omega_0$" | Lecture 10 does not discuss critical damping (it was Lecture 9); p. 9 says only that real roots give the over-damped case. | Adds a critical-damping question. | Fine as the page's own example; it is consistent with Lecture 9 and with the roots formula on p. 10. |

No lecturer slip is repeated. The slip the page notes (φ, p. 15) was verified; see finding 1.

Further slips checked and not repeated:
- p. 1 "r squared plus br plus k equals zero" (mixed notation); the page does not restate this equation.
- p. 2 "e to the minus ibt is the cosine of minus b" (means the real part of it); the page states the cosine/sine change correctly.
- p. 7 "cosine a is equal to e to the i a t, i a, plus e to the negative i a divided by two" (stray t, self-corrected); the page's formula is correct, including the i in the sine's denominator.
- p. 11 "p squared minus omega squared", corrected to "omega nought squared" in the next sentence; p. 13 "omega squared minus p squared" (nought dropped); the page uses ω₀ throughout.
- p. 13 "times the cosine of omega one t plus c2 times the sine" (c₁ dropped); the page writes $c_1\cos\omega_1t + c_2\sin\omega_1t$.
- p. 14 "crosses the x-axis, sorry, y-- the t-axis"; the page says "axis".
- p. 15 "The omega one depends on the spring", then "on the damping, and … on the spring constant"; see finding 2.

## Arithmetic and answer checks
- `npm run calc:test -- -k damped-osc`: 13 passed. Recomputed by hand:
- Other root: $\cos(-bt) = \cos bt$, $\sin(-bt) = -\sin bt$, so $a - bi$ gives $y_1, -y_2$. Correct.
- Conjugation: $\overline{C_1e^{(a+bi)t} + C_2e^{(a-bi)t}} = \bar C_1e^{(a-bi)t} + \bar C_2e^{(a+bi)t}$; equal to the original iff $C_2 = \bar C_1$ (and $C_1 = \bar C_2$, the same condition). Correct.
- Grouping: $(C+id)e^{ibt} + (C-id)e^{-ibt} = C(e^{ibt} + e^{-ibt}) + id(e^{ibt} - e^{-ibt})$. Correct.
- Euler backwards: $(e^{i\alpha} + e^{-i\alpha})/2 = \cos\alpha$; $(e^{i\alpha} - e^{-i\alpha})/2i = (2i\sin\alpha)/2i = \sin\alpha$. Correct. Then $C\cdot2\cos bt + id\cdot2i\sin bt = 2C\cos bt - 2d\sin bt$. Correct.
- Standard form: dividing by m gives $c/m = 2p$, $k/m = \omega_0^2$. Roots $(-2p \pm \sqrt{4p^2 - 4\omega_0^2})/2 = -p \pm \sqrt{p^2 - \omega_0^2}$. Correct.
- Undamped: $p = 0$ gives $r = \pm i\omega_0$, solutions $\cos\omega_0t$, $\sin\omega_0t$. Correct.
- Damped: $p < \omega_0$ gives $r = -p \pm i\sqrt{\omega_0^2 - p^2}$. Correct. Successive zeros of $\cos(\omega_1t - \phi)$ are $\pi/\omega_1$ apart, same-direction zeros $2\pi/\omega_1$ apart. Correct. Pythagoras: hypotenuse ω₀, legs ω₁ and p. Correct.
- Plot: $\omega_1 = \sqrt{4 - 0.16} = \sqrt{3.84} = 1.95959$ (curve uses 1.9596, caption ≈ 1.96); $\pi/1.95959 = 1.6032$ ("≈ 1.60"). Correct. Curves generated from formulas; envelope and its negative dashed; values stay inside the range [−1.2, 1.2]. Graph labels not checked in a browser (`test:labels` not run); `content:check` passes the layout.
- Worked example (a): $p = 0.8/(2\cdot2) = 0.2$ s⁻¹; $\omega_0 = \sqrt{50/2} = 5$ rad/s; $\omega_1 = \sqrt{24.96} = 4.99600$ ("≈ 4.996"). Correct; $p < \omega_0$, so underdamped as assumed.
- (b): $2\pi/4.99600 = 1.25764$ ("≈ 1.2576") vs $2\pi/5 = 1.25664$ ("≈ 1.2566"). Correct; the claim "barely slows" is right (0.08 % longer).
- (c): $e^{-0.2\cdot10} = e^{-2} = 0.13534$ ("≈ 0.135", "about 13.5%"). Correct.
- (d): $p = \omega_0 \Leftrightarrow c = 2m\omega_0 = 20$ kg/s (equivalently $c = 2\sqrt{mk} = 2\sqrt{100}$). Correct. Units (N/m, kg/s, rad/s, s⁻¹) consistent.
- Quiz 1: answer 0 ($C_2 = \bar C_1$). Distractors: $C_1 = C_2$ is not enough (complex equal constants give a non-real result in general); both real is not enough (needs equal too); "never" is false. Explanation correct.
- Quiz 2: answer 0 ($\sqrt{\omega_0^2 - p^2}$); explanation correct.
- Quiz 3: answer 0 ($A$ and $\phi$); explanation correct and matches p. 15.
- Flashcards: all three correct (sine includes the $2i$; $2p = c/m$, $\omega_0^2 = k/m$; crossing spacing $\pi/\omega_1$).
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: every printed number on the page has an entry. One weak entry (warning, calcs only): `euler-backwards` checks `C*(2*cos(x)) + d*(-2*sin(x))` against `2*C*cos(x) - 2*d*sin(x)`, which is the same expression rearranged; it does not test Euler's formula backwards or the grouping step. A meaningful check would compare `(C + i d)e^{ibx} + (C − i d)e^{−ibx}` with `2C cos bx − 2d sin bx`, or, if the harness has no complex numbers, write each term out with real arithmetic: $(C + id)(\cos x + i\sin x)$ has real part $C\cos x - d\sin x$ and imaginary part $C\sin x + d\cos x$, its conjugate the same real part and the opposite imaginary part, so check that the real parts sum to `2*C*cos(x) - 2*d*sin(x)` and the imaginary parts to 0, or check `(cos(x) + cos(-x))/2 = cos(x)` and `(sin(x) - sin(-x))/2 = sin(x)` (the real and imaginary forms of Euler backwards). `damped-solves-ode` checks only A = 1, φ = 0 (sufficient by linearity, info). Page-own entries carry `source: {cite: reading1, …}` (info, as in earlier calcs files).

## Coverage and order
- The page follows the lecture's order: oscillations ↔ complex roots, y₁ and y₂ recalled (p. 1) → the other root gives nothing new (p. 2) → complex form with capital C's (pp. 2–3) → the hack way vs "change i to −i" (pp. 3–4) → conjugation and $C_2 = \bar C_1$ (pp. 4–5) → real solutions in complex form, engineers and physicists, Fourier series (pp. 5–6) → back to sines and cosines, Euler backwards, the real form, two arbitrary constants (pp. 6–8) → spring–mass–dashpot and the standard form with 2p and ω₀² (pp. 8–9) → characteristic roots (pp. 9–10) → undamped case (pp. 10–11) → condition p < ω₀ and the picture with envelope and pseudo-frequency (pp. 11–13) → question about damping vs frequency, roots, solution (pp. 13–14) → why ω₁ is the crossing frequency (p. 14) → ω₁² = ω₀² − p², Pythagoras, the four parameters (pp. 15–16).
- Left out (minor): real roots = over-damped case, no oscillation (p. 9; covered in Lecture 9); that p is a constant here though often a function of t elsewhere (p. 9); that the book also states p < ω₀ in terms of c, m, k (p. 11); the "little triangle" converting the two undamped forms (p. 11; Lecture 8 topic); the pseudo-period naming joke (p. 13); A "tells you whether the exponential curve starts" high or low (p. 16).
- Added: the Plot (ω₀ = 2, p = 0.4) and the original worked example, including the critical-damping question (finding 4).
- The transcript ends abruptly on p. 16 (a few lines). Whether the recorded lecture continued beyond the transcript was not checked (video not compared, per owner decision); the page covers everything the transcript contains.
- `prerequisites: [second-order-constant-coefficients]`: the page exists (Lecture 9, committed as a98df6d).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("nothing new", "fills a board", "Euler's formula read backwards", "known even better than Euler's formula", "bobs up and down") are short phrases attributed by page citation.
- The worked example "A damped spring" is original (own m, k, c, own questions); the plot's numbers are the page's own. The lecture has no numerical example to copy.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 11 ("The general theory of second-order linear homogeneous equations: why c₁y₁ + c₂y₂ gives all solutions"): consistent with the Lecture 11 title "Theory of General Second-order Linear Homogeneous ODEs", and Lecture 9 (p. 1–2 of its transcript) and Lecture 10 both assume this form without proof. The specific content ("why c₁y₁ + c₂y₂ gives all solutions") was not verified because the Lecture 11 transcript was not read; mark as uncertain until that page is written.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.
- The source title and URLs match the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

1. The p. 15 note now says the transcript starts to name φ among the equation's constants and then breaks off.
2. "Four parameters" now says p and ω₁ depend on the damping, the mass and the spring.
3. The calcs entry `euler-backwards`, which compared an expression with itself, is replaced by `real-form-solves`: it checks that e^(at)(2C cos bt − 2d sin bt) solves the equation with roots a ± bi.

The other notes (the p. 14 self-correction, critical damping in the worked example) need no change. Status set to `reviewed`.
