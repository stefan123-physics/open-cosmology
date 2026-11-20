---
page: content/year-2/18.03/inhomogeneous-equations-and-stability.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-12-continuation-general-theory-for-inhomogeneous-odes/ (read: local copy lec.html, title "Lecture 12: Continuation: General Theory for Inhomogeneous ODEs"; its only .pdf link is 087c508714f9ef0a1b6f890034e253d2_eyNm7XGJr4s.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/087c508714f9ef0a1b6f890034e253d2_eyNm7XGJr4s.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L12", 16 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 13 = "Finding Particular Solutions to Inhomogeneous ODEs"; the Lecture 13 transcript was not read)
  - calcs/18.03/inhomogeneous-equations-and-stability.yaml (read; `npm run calc:test -- -k inhomogeneous-eq`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Inhomogeneous equations, particular solutions and stability

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "We are going to start today in a serious way on the inhomogenous equation" (p. 1) and ends mid-explanation of real parts (p. 16). Formula locations: "Inhomogeneous equation" p. 1; "Forced spring" p. 2 ($mx'' + bx' + kx = f(t)$ spoken on p. 2; the forces $-kx$, $-bx'$ and the electromagnet on p. 3, which the prose cites as pp. 2–3); "RLC circuit" pp. 4–5 (drops $Li'$ and $q/C$ on p. 4, $E$ and $q' = i$ and the differentiated equation on p. 5); "General solution of the inhomogeneous equation" pp. 6–7 ($Ly = f(x)$ and $y_p + y_c$ on p. 6, $c_1y_1 + c_2y_2$ on p. 7); "First-order solution" p. 10; "Constant-coefficient inhomogeneous equation" p. 12; "Stability" p. 13 ("for all c1 c2"); "Stability criterion" pp. 15–16 ("in one breath" p. 15, "negative real parts" p. 16). All correct. Prose citations also checked: input/signal/driving/forcing, response/output, associated homogeneous/reduced equation p. 1; complementary solution, $y_c$, $y_h$ p. 2; passive vs forced pp. 3–4; battery gives the homogeneous case p. 5; discharging capacitor, underdamped, drive the circuit pp. 5–6; "particular" = any one, no better word, two steps p. 7; proof part 1 p. 8 (begun at foot of p. 7), any order p. 8, part 2 with tildes pp. 8–9; constant coefficients and "next two weeks" p. 9, methods p. 10; first-order $y_c$, $y_p$, definite integral 0 to $t$ pp. 10–11; transient/steady state for $k > 0$ pp. 11–12, $k < 0$ meaningless p. 12; constants carry initial values p. 12; stable / asymptotically stable / transient / steady state p. 13; reduced equation only p. 15; three cases pp. 14–15; real part remark p. 16. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Case by case, distinct real roots: "(The transcript says the opposite in passing, p. 15.)" | p. 15: "If r1 and r2 should be negative, can they be zero? No, because then it will be a constant and it will go to zero." The answer "No" is right; only the reason is slipped ("will go to zero" for "will not go to zero"). | Suggests the transcript claims the opposite of the page, i.e. that a zero root is allowed. | Reword, e.g. "(The transcript's reason, 'it will go to zero', is a slip for 'will not', p. 15.)" |
| 2 | warning | End of Stability section: "The lecture adds that one can do better than conditions on the roots (p. 14)." | p. 14: "I'm not going to worry right away about the a and the b… expressing this condition of stability in terms of the characteristic roots. In fact, that's the only way in which many people know the conditions. You're going to be smarter." The recording ends (p. 16) before any condition on the coefficients is given. | Vague ("do better") and placed after the p. 15–16 material although the remark is from p. 14; it does not say what "better" means or that this lecture does not reach it. | Say that Mattuck promises a condition directly in terms of the coefficients $A$ and $B$, which this lecture does not reach. Optionally move it to just before "Case by case". |
| 3 | info | RLC circuit: "adds the drops $Li'$, $Ri$ and $q/C$" | p. 4: the resistor drop is not stated ("well, you know that"); the coil drop is first said as "L times i", then corrected to "Li prime". | Writes $Ri$ and $Li'$. | Correct physics; no change needed. |
| 4 | info | "operator methods for standard inputs, Fourier series, and, if all else fails, a computer (pp. 9–10)" | p. 10 also lists "a series, or a method involving approximation" for other inputs. | Omits series/approximation. | Optional: add "series or approximation". |
| 5 | info | Double root: "With $r_1 = 0$, $c_1 + c_2t$ grows." | p. 15: "Linear, go to infinity." | Same; strictly it grows only for $c_2 \ne 0$ (for $c_2 = 0$ it is a nonzero constant, still not tending to 0). | Optional: "does not go to 0 (it is constant or grows linearly)". |
| 6 | info | Quiz 3 / flashcard 2: $y_p$ is "the steady-state solution" | p. 13: "This is called the particular solution… It's the steady-state part." | Same. Different choices of $y_p$ differ by a transient, so "the" steady state is defined up to that; matches the lecture. | None needed. |

Lecturer slips checked:
- p. 15 zero root (finding 1): the page avoids the slip but describes it inaccurately.
- p. 6 "the key theorem about solving the homogeneous equation… the inhomogeneous equation" (self-corrected); the page says inhomogeneous. Correct.
- p. 4 "L times i" corrected on the spot to "Li prime"; page uses $Li'$. Correct.
- p. 9 "since the coefficient's a constant, apparently we've done half the work": the page restricts this to constant coefficients. Correct.
- p. 11 "trangent" and p. 12 "it's the start that the important one" are transcription garbles; not repeated.

## Arithmetic and answer checks
- `npm run calc:test -- -k inhomogeneous-eq`: 6 passed. Recomputed by hand:
- Graph: $y'' + 2y' + 5y = 10$, $y_p = 2$, roots $-1 \pm 2i$; $y(0) = 0$ gives $c_1 = -2$; $y'(0) = -c_1 + 2c_2 = 0$ gives $c_2 = -1$; $y = 2 - e^{-t}(2\cos 2t + \sin 2t)$. Correct. $y' = 5e^{-t}\sin 2t$, first zero after 0 at $t = \pi/2$; $y(\pi/2) = 2 + 2e^{-\pi/2} = 2.4158 \approx 2.42$. Correct. The range $[0, 2.6]$ contains the curve (minimum 0 at $t = 0$).
- Proof steps: $L(y_p + y_c) = f + 0$; $L(u - y_p) = f - f = 0$. Correct.
- First-order formula: $y = e^{-kt}\int q e^{kt}\,dt + Ce^{-kt}$ solves $y' + ky = q$. Correct.
- Worked example (a): $y_p = 3$ since $2 \cdot 3 = 6$; $r^2 + 3r + 2 = (r+1)(r+2)$, roots $-1, -2$; stable, limit 3. Correct.
- (b): $r = (1 \pm \sqrt{-7})/2$, real part $\tfrac12$; grows like $e^{t/2}$. Correct.
- (c): $1/C = 50$; $0.5r^2 + 4r + 50 = 0 \Rightarrow r^2 + 8r + 100 = 0$; $r = -4 \pm \sqrt{-84} = -4 \pm 9.165i \approx -4 \pm 9.17i$. Stable, underdamped. Correct.
- Quiz 1: answer 0; explanation correct; distractors wrong. Quiz 2: answer 0 (same equation as example (b)); explanation correct. Quiz 3: answer 0; explanation correct (see finding 6).
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: every non-trivial number has an entry. Not covered (trivial, info): example (a) ($y_p = 3$, roots $-1$, $-2$) and $y(0) = 0$ for the graph.

## Coverage and order
- The page follows the lecture's order: inhomogeneous equation, terminology (p. 1) → complementary solution (p. 2) → spring–mass–dashpot with external force, passive vs forced (pp. 2–4) → RLC circuit (pp. 4–6) → $Ly = f$, theorem, "particular" (pp. 6–7) → proof (pp. 7–9) → what remains, methods (pp. 9–10) → first-order case, transient and steady state (pp. 10–12) → constant-coefficient equation and the stability question (pp. 12–13) → definition of stable (p. 13) → case-by-case analysis (pp. 14–15) → criterion in one breath (pp. 15–16). The only out-of-order item is the p. 14 remark (finding 2).
- Left out (minor): why stability matters ("you have a control… each equation is a law unto itself", pp. 13–14); Kirchhoff "with two h's", 8.02 remarks and responsibility for the circuit on the problem set (pp. 4, 6); integrating to get an equation in $q$ instead (p. 5); series/approximation (finding 4); changing the dummy variable in the definite integral (p. 11).
- Added: the graph and the worked example (both original).
- `prerequisites: [linear-operators-and-wronskian]`: the page exists.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("starts seriously", "no one has found a better word", "what lasts after the rest has gone", "in one breath") are brief and cited.
- The worked example and graph are original (own equations and circuit values); no OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 13 ("Methods for finding a particular solution when the input is an exponential or a sinusoid."): consistent with the Lecture 13 title "Finding Particular Solutions to Inhomogeneous ODEs" and with p. 10 ("for a few standard functions… You will learn those methods for finding those using operators… We'll start it next Monday"). That Lecture 13 treats specifically exponential and sinusoidal inputs was not verified (its transcript was not read): uncertain until that page is written.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.
- The double use of $L$ (inductance, operator) is flagged on the page itself; good.

## Resolution (2026-11-16, by the page author)

1. Warning 1: the p. 15 bracket now says the transcript gives the right answer with a wrong reason ("will go to zero").
2. Warning 2: the page now says that p. 14 promises a condition in terms of A and B, and that the recording ends before it is given.
3. Added "series or approximation methods" to the list of methods, and "(if c₂ ≠ 0)" for the double root at zero.

The remaining info notes need no change. Status set to `reviewed`.
