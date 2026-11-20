---
page: content/year-2/18.03/sinusoids-and-linear-models.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-8-continuation/ (read: local copy lec.html, title "Lecture 8: Continuation"; its only .pdf link is 5db44909ea3c5bd2611fa3a0f5c8d886_MdzfsfBNJIw.pdf, matching the page's `reading1` URL; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/5db44909ea3c5bd2611fa3a0f5c8d886_MdzfsfBNJIw.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L8", 17 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-9-solving-second-order-linear-odes-with-constant-coefficients/ and its transcript 1fd3fae817756ec8d0326808c7f918a4_vP-oRQqmeg4.pdf (read, searched only, to check the `leadsTo` claim)
  - content/year-2/18.03/_course.json (read: Lecture 8 = Continuation, Lecture 9 = Solving Second-order Linear ODE's with Constant Coefficients, Lecture 10 = Continuation: Complex Characteristic Roots)
  - calcs/18.03/sinusoids-and-linear-models.yaml (read; `npm run calc:test -- -k sinusoids-and`: 22 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Combining sine and cosine; models for first-order linear equations

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The transcript is complete (starts with "I usually like to start a lecture with something new", ends on p. 17 "I won't say dead, inanimate."). Formula locations: "Complex solution in Cartesian form" p. 2; "Real part" p. 2; "Sine–cosine identity" pp. 3–4 (identity p. 3, triangle picture pp. 3–4); "The complex proof" p. 7; "Three forms" p. 8; "Salt balance" p. 10; "Mixing in concentration form" p. 11; "RC circuit" p. 14; "Decay chain" p. 15; "Solution for k = −a" p. 16. All correct. Every prose page reference was also checked against the PDF page and is correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` Lecture 9, why: "Second-order linear equations with constant coefficients: the spring and the series circuit." | Lecture 9 transcript: the model is the spring–mass–dashpot system (Newton, Hooke, damping); a search for "circuit", "electric", "current", "voltage", "RLC", "series" finds nothing about circuits. | Says Lecture 9 treats the series circuit. | Drop "and the series circuit", e.g. "Second-order linear equations with constant coefficients, starting from the spring–mass–dashpot system." (The RLC analogy comes later in 18.03; not checked here which lecture.) |
| 2 | warning | Formula "Sine–cosine identity": $c = \sqrt{a^2+b^2}$, $\tan\phi = b/a$ | pp. 3–4: only the picture (a, b sides of a right triangle, φ opposite b); p. 7 notes the geometry "if a and b are positive". | States $\tan\phi = b/a$ with no condition. For $a < 0$ the formula with $\phi = \arctan(b/a)$ is wrong by a sign (checked: $-3\cos 0.7 + 4\sin 0.7 = 0.282$, while $5\cos(0.7 - \arctan(-4/3)) = -0.282$); $\tan\phi = b/a$ alone does not fix the quadrant. | Add "($\phi$ is the polar angle of the point $(a, b)$; for $a, b > 0$ the picture below)" or "$\cos\phi = a/c$, $\sin\phi = b/c$". The calcs entry already restricts itself to $a > 0$. |
| 3 | info | Formula "Sine–cosine identity" | The lecture writes only $c\cos(\theta-\phi)$ and says to memorise the picture rather than formulas for c and φ (p. 3); "φ is the arc tangent of ω/k" is said for the special case on p. 4. | Gives explicit formulas for c and tan φ. | Fine as a summary; optionally say the formulas are read off the picture. |
| 4 | info | RC circuit, "(The lecture calls $q/C$ a form of Coulomb's law; it is the definition of capacitance.)" | p. 14: "The voltage drop across the capacitance is Coulomb's law, one form of Coulomb's law. It's q divided by C." | Treats it as a slip. | Defensible, and the page does not repeat the wording. Some ODE textbooks also label $q/C$ "Coulomb's law" (the capacitor's field comes from Coulomb's law), so a gentler wording would be "$V = q/C$ is the definition of capacitance". Optional. |
| 5 | info | Mixing, $x' = Vc'$ | p. 11: "dx / dt, therefore, will be c times dC / dt" (slip: should be V times dC/dt; the transcript also writes "x is equal to C times the constant, V"). | $x' = Vc'$, correct. | None needed; optionally note the slip in brackets as with Coulomb, per writing rule 4. |
| 6 | info | Capital C renamed c | Transcript: tank concentration "C", "dC/dt", "Ce" (p. 11), and capacitance "C" (p. 14). | Uses $c$, $c_e$ and says so. | Correct and clearly marked. |
| 7 | info | "if $r/V = 1/10$ per minute, a tenth of the tank is replaced each minute" | p. 12: "1/10 of the tank will be emptied in a minute, say". | "replaced". | Fine (strictly, outflow at a rate of a tenth of the volume per minute). |
| 8 | info | "Now $Ce^{at}$ grows without bound" | p. 16: "if a is positive, this goes to infinity". | Same. | Optionally "(unless C = 0)". |
| 9 | info | Salt balance written $x' = rc_e - rx/V$ | p. 10: board form $dx/dt + r\,x/V = r\,c_e$ (standard linear form). | Rate-balance form. | Equivalent; fine. |

No lecturer slip is repeated. Also checked:
- p. 1 "one plus omega over k" without i (corrected on p. 2 "this should have an i here"); the page has $1 + i(\omega/k)$. Correct.
- p. 1 "cosine omega t plus minus phi"; the page has $\cos(\omega t - \phi)$. Correct.
- p. 7 "Its magnitude is a squared plus b squared" (root dropped) and "square root of a² + b² times e, times the cosine"; the page has $\sqrt{a^2+b^2}$ and no stray e. Correct.
- p. 15 "chained to k, radioactively changed to k" (transcription of "radioactive decay chain"); page: "A radioactive chain". Correct.
- p. 16 "y equals q of t" (should be $y' - ay = q$) and "if I go to minus infinity, then C is negative"; the page has $y' - ay = q(t)$ and does not repeat the second remark. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k sinusoids-and`: 22 passed. Recomputed independently in Python:
- Cartesian form: $\frac{1}{1+i r} = \frac{1 - ir}{1+r^2}$; real part of $(1 - ir)(\cos + i\sin)$ is $\cos\omega t + r\sin\omega t$ (the $(-i)(i) = 1$ term). Correct. Equals $\frac{1}{\sqrt{1+r^2}}\cos(\omega t - \arctan r)$ since $\cos\phi = 1/\sqrt{1+r^2}$, $\sin\phi = r/\sqrt{1+r^2}$. Correct.
- Complex proof: $a - bi = \sqrt{a^2+b^2}e^{-i\phi}$ for $\phi$ the angle of $(a, b)$; real part of the product is $a\cos\theta + b\sin\theta$. Correct.
- 18.02 proof: $\langle a,b\rangle\cdot\langle\cos\theta,\sin\theta\rangle = c\cdot 1\cdot\cos(\theta-\phi)$. Correct.
- Mixing: $x = Vc$, $Vc' = rc_e - rc$, so $c' + (r/V)c = (r/V)c_e$. Units of $r/V$: 1/time. Correct.
- RC: $Rq' + q/C = E$ gives $q' + q/(RC) = E/R$; $E/R = \frac{1}{RC}(CE)$. Correct.
- Decay chain: $B' = k_1A - k_2B$, $A = A_0e^{-k_1t}$. Correct.
- k = −a: $(ye^{-at})' = qe^{-at}$, so $y = e^{at}\int qe^{-at}dt + Ce^{at}$. Correct.
- Worked example (a): $k = 50/2000 = 0.025$ /h; $\omega = 2\pi/24 = 0.26180$ → 0.262; $\omega/k = 10.472$ → 10.47. Correct.
- (b): $A = 1/\sqrt{1 + 109.66} = 0.09506$ → 0.0951; $2A = 0.1901$ → ±0.19 mg/L; $\phi = 1.47559$ rad → 1.476, = 84.545° → 84.5°; lag $\phi/\omega = 5.636$ h → 5.64. Correct. "The constant 3 passes straight through": constant input $c_e = 3$ has steady state $c = 3$. Correct.
- (c): $k = 0.25$; $\omega/k = 1.0472$ → 1.047; $A = 0.69062$ → 0.691; $2A = 1.3812$ → ±1.38; $\phi = 0.80845$ rad → 0.808, 46.32° → 46.3°; lag 3.088 h → 3.09. Correct.
- (d): $c = 5$, $\phi = \arctan(4/3) = 0.92730$ rad → 0.927, 53.13° → 53.1°. Correct ($a = 3 > 0$, so arctan gives the right angle).
- Plot: $3 + 0.190\cos(0.2618t - 1.4756)$ matches $3 + 2A\cos(\omega t - \phi)$ with the values above; "about ±0.19 mg/L", "nearly a quarter cycle" (84.5° of 90°) correct. It shows only the steady-state solution, as the caption says. Generated from formulas.
- Quiz 1: answer 0 ($c = 5$, $\tan\phi = 4/3$); distractors wrong (7 = a + b; 3/4 inverts the ratio; $5\cos\theta$ drops φ). Explanation correct.
- Quiz 2: answer 0 ($r/V$); explanation correct.
- Quiz 3: answer 0 (grows, initial value matters); explanation correct.
- Flashcards: all three correct (card 1 "φ opposite b" is the picture; see finding 2 for $a < 0$).
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file: every number on the page is covered; no loose tolerances. The `sine-cosine-identity` entry tests $\arctan(b/a)$ only with $a > 0$, consistent with finding 2. Info: page-own entries carry `source: {cite: reading1, at: 'p. 13'}`, harmless, as in earlier calcs files.

## Coverage and order
- The page follows the lecture's order: recap of the polar answer (p. 1) → going Cartesian (pp. 1–2) → the two answers must agree (p. 3) → the identity, same angle, the triangle picture (pp. 3–4) → applying it to the Cartesian answer, cancellation (p. 4) → messy answers in books, two parameters, pure oscillation (pp. 4–5) → three proofs: high school (p. 5), 18.02 (p. 6), 18.03 (p. 7) → 300–400 years (p. 8) → three forms, most special first (p. 8) → sign of k (p. 9) → mixing tank: amount equation (pp. 9–10), concentration form (p. 11), not diffusion physically, k = r/V fractional rate, units (pp. 11–12), daily pollutant cycle, large k follows closely (pp. 12–13) → RC circuit (pp. 13–15) → decay chain (pp. 15–16) → k < 0, population, "if life is involved" (pp. 16–17). Worked example placed at the end, fine.
- Left out (minor): the recitation/problem-set "two rooms filled with smoke" mixing problem (p. 9); the spoken numbers "1 L per minute times 3 g per litre = 3 g per minute" (p. 10); the diffusion-model aside about Newton's name (p. 12); the i/j notation for current (p. 14); the sign-convention remark for E(t) (p. 14); economics/"Sloan" alongside biology (p. 16, the page keeps "biology and economics").
- Added: the Plot and the original worked example.
- `prerequisites: [sinusoidal-input-response]` exists.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; prose paraphrases. Short echoes are terminology or attributed: "going polar/Cartesian", "temperature–concentration model", "conduction–diffusion model", "fractional rate of outflow", "providentially", and the attributed quotation "if life is involved k is likely to be negative" ("In the lecture's words").
- Worked example: the setting (a factory upstream with a daily pollutant cycle) is the lecture's own suggestion (p. 12), but the lecture has no numbers; the pond, volumes, flows and all results are original. Fine.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` (finding 1): Lecture 9 does introduce second-order linear equations with constant coefficients through the spring–mass–dashpot system (transcript searched, not read in full); the "series circuit" part is not supported by the Lecture 9 transcript.
- No `Callout kind="cosmology"`; no 18.03 page has one so far and the page makes no cosmology claim.
- The page never names the lecturer (Mattuck); optional (the reading title does).
- The source title and URLs match the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

1. `leadsTo` Lecture 9 now says "the spring, mass and dashpot"; the series circuit is gone.
2. The sine–cosine identity now gives $\cos\phi = a/c$, $\sin\phi = b/c$, which fixes the quadrant; the page says these formulas are its own and the lecture gives only the picture.
3. Added the transcript's "c times dC/dt" slip in brackets (the factor is the volume), "(unless C = 0)" for the growing term, and a gentler wording of the Coulomb's-law note.

The other info notes (rate form of the salt balance, omitted side remarks) are left as they are. Status set to `reviewed`.
