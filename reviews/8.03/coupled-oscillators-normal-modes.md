---
page: content/year-2/8.03/coupled-oscillators-normal-modes.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-4/ (read: saved HTML of the lecture page; its links to the transcript PDF ab7ca9026d53d2b3f0b04a4bfc019233_BX4QPdP7fT8.pdf and to resources/mit8_03scf16_lec4/ match the page's readings)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec4/ (read: typed Lecture 4 notes, 6 PDF pages (page 6 is the OCW terms page); the text layer is garbled, so every page was rendered to an image and read, including all figures)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ab7ca9026d53d2b3f0b04a4bfc019233_BX4QPdP7fT8.pdf (read: transcript, all 13 pages, page by page with pdftotext -f N -l N; no printed page numbers, so "p. N" = PDF page N)
verdict: needs-changes
---

# Review: Coupled oscillators and normal modes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Normal modes by guessing", first paragraph: "three masses on a frictionless table in a line, a mass $2m$ joined by springs ... to two masses $m$, one on each side"; then "centre", "outer masses", "ends" throughout (bullets, summary in frontmatter, flashcard 3 "Mass $2m$ between two masses $m$", quiz 2 "Three masses in a line") | Notes p. 1 figure (and pp. 2, 4 figures): the mass $2m$ is on the **left**; the two masses $m$ are both to its **right**, stacked one above the other, each joined to $2m$ by its own spring (a fork, not a chain). Transcript: "left hand side mass" $2m$, "the right hand side two masses" (p. 4), "the upper one ... the lower one" (p. 5), "The first one is the upper spring. The second one is coming from the lower one" (p. 8). | A chain $m$ - $2m$ - $m$ with $2m$ in the middle. | Describe MIT's system: "$2m$ on the left, two masses $m$ side by side on its right, each joined to $2m$ by its own spring $k$ (natural length $l_0$); all motion is along the line of the springs". Replace "centre/outer/ends" with "the $2m$ / the two small masses" in the bullets, the frontmatter summary and flashcard 3; adjust quiz 2's wording ("three masses coupled by springs, moving in one dimension"). The equations of motion and matrices are the same for both layouts (checked), so the physics results stand, but the description is not MIT's system. |
| 2 | error | "The equations of motion": "increasing $x_1$ compresses the springs, which push it back (transcript, p. 8)" | True for MIT's layout (both springs on the right of $2m$, p. 8). | Under the page's own in-line description, increasing $x_1$ compresses one spring and **stretches** the other, so the sentence contradicts the page's geometry. | Resolved automatically by fixing finding 1; otherwise rephrase. |
| 3 | warning | "Normal modes by guessing", "Students object that the still centre is not oscillating, and that the ends move in opposite directions (p. 5)" | The first objection is Lee's own rhetorical one ("Look at this guy this guy is not moving ... This is not the normal mode. Isn't it? ... I hope that will wake you up", p. 5); only the phase objection comes from a student ("Another objection I receive", p. 5). | Both attributed to students. | "Lee raises the objection that the still mass is not oscillating, and a student objects that the two small masses move in opposite directions (p. 5)." |
| 4 | info | Mode-label bracket: "(The lecture calls the second mode A and the first B; the notes label them the other way round, as here.)" | Checked: notes p. 1 Mode A = $2m$ still, $\omega_A^2 = k/m$; Mode B = $F = -2k\cdot2\Delta x$, $\omega_B^2 = 4k/2m$; notes p. 2 summary likewise. Lecture: mode A = $4k/2m$ (pp. 4-5, p. 6), mode B = $k/m$ (p. 5, p. 7). | Correct as written; it refers to the page's bullet order (first bullet = $2m$ still). | No change needed. Optional: say "the lecture calls the $2m$-against-both mode A" so it does not depend on bullet order. |
| 5 | info | "Complicated motion, simple pieces": "super, super complicated" (notes, p. 1; transcript, p. 2) | Quote is the transcript's (p. 2); notes p. 1 says "extremely complicated". | Quote cited to both. | Cite the quote to transcript p. 2 only, or keep both and drop the quotation marks. |
| 6 | info | "Counting constants": "and I didn't even solve the differential equation" (notes, p. 2; transcript, p. 7) | The words are on transcript p. 7; notes p. 2 gives the general solution and "3 second order differential equations with 6 unknown constants" but not this sentence. | Quote cited to both. | Attribute the quote to the transcript; keep notes p. 2 for the general solution. |
| 7 | info | "The matrix method": "the math also knows physics" (notes, p. 4; transcript, p. 13) | Quote on transcript p. 13; notes p. 4 says "We get the same result!" | Quote cited to both. | As finding 6. |

Every formula was checked:
- Normal mode definition, notes p. 1: "every part of the system is oscillating at the same phase and the same frequency". Correct.
- The three modes, notes p. 2 (summary box, with $\omega_A^2 = k/m$, $\omega_B^2 = 4k/2m = 2k/m$ at the top of p. 2): signs and labels match exactly. Correct.
- Equations of motion, notes p. 2 (bottom right): correct. Also on the board, transcript p. 8.
- Matrix form, notes p. 3: $M$, $X$, $K$ match. Correct (transcript p. 9).
- Normal-mode trial, notes p. 3 ($X_j = \text{Re}[Z_j]$, $Z = e^{i(\omega t+\phi)}A$): correct.
- Eigenvalue problem, notes p. 3: correct (transcript p. 10).
- Frequency condition, notes p. 3: correct (transcript p. 11).
- Matrix rows in prose, notes p. 3: $(\omega_0^2-\omega^2, -\tfrac12\omega_0^2, -\tfrac12\omega_0^2)$, $(-\omega_0^2, \omega_0^2-\omega^2, 0)$, $(-\omega_0^2, 0, \omega_0^2-\omega^2)$. Correct. (Lee says "minus k over 2" for one entry on transcript p. 11, a slip; the page rightly follows the notes.)
- Characteristic equation, notes p. 3: the notes write the two $-\tfrac12\omega_0^4(\omega_0^2-\omega^2)$ terms separately; the page combines them. Expanded by hand: $\det = a^3 - \omega_0^4 a$ with $a = \omega_0^2-\omega^2$, $= a(a-\omega_0^2)(a+\omega_0^2) = a\,\omega^2(\omega^2-2\omega_0^2)$. Correct.
- Amplitude patterns, notes p. 4: $A_1 = -A_2 = -A_3$ for $\omega_B$, $A_1 = 0$, $A_2 = -A_3$ for $\omega_A$. Correct.
- $l_0$ derivation with $x_2' = x_2 - l_0$, $x_3' = x_3 - l_0$: notes pp. 4-5. Correct.

Prose citations checked against the transcript: review of driven oscillators (p. 1), "talk to each other" (p. 2), double pendulum, computer, small push (p. 2), metal ruler (pp. 2-3), spring and rod pendulums, Wilberforce pendulum and its explanation, "illusion" (p. 3), setup with $k$, $l_0$, frictionless (p. 4), normal mode and superposition (p. 4), $2m$-against-both mode with $-2k\cdot2\Delta x$ (pp. 4-5), $2m$-still mode (pp. 5-6), $x_1, x_2, x_3$ definitions (p. 6), translation mode (pp. 6-7), six constants and $3m$ (p. 7), equilibrium and equations (p. 8), matrices and "talks to the other components" (p. 9), complex trial (p. 9), steps mirroring the single oscillator (p. 10), nonzero $A$ (p. 11), determinant (pp. 11-12), result and recipe for many objects (p. 13), next lecture beats and driving (p. 13). All agree apart from findings 1-3, 5-7.

## Arithmetic and answer checks
- `npm run calc:test -- -k coupled-oscillators`: 26 passed.
- Worked example (wall - $m$ - $2m$): equations $m\ddot x_1 = -kx_1 + k(x_2-x_1)$, $2m\ddot x_2 = -k(x_2-x_1)$ correct; $K = \begin{pmatrix}2k&-k\\-k&k\end{pmatrix}$, $M^{-1}K = \omega_0^2\begin{pmatrix}2&-1\\-\tfrac12&\tfrac12\end{pmatrix}$ correct. $(2-s)(\tfrac12-s)-\tfrac12 = s^2-\tfrac52 s+\tfrac12$; discriminant $6.25-2 = 4.25 = 17/4$; $s = 2.2808, 0.2192$; $\sqrt s = 1.5102, 0.4682$ (page 1.510, 0.468). $A_2/A_1 = 2-s = 1.781$ (slow) and $-0.281$ (fast); page 1.78 and -0.28. Physical descriptions (slow: together, heavy one more; fast: opposite, light one more) are correct. No zero mode because of the wall: correct.
- Quiz 1 (same frequency and phase), index 1: correct, matches notes p. 1.
- Quiz 2 (six constants), index 1: correct (notes p. 2, transcript p. 7). Wording "in a line" see finding 1.
- Quiz 3 (zero mode from free translation), index 1: correct for a free one-dimensional chain/network of springs (transcript pp. 6-7, p. 13).
- Quiz 4 ($K$ = communication), index 1: correct (transcript p. 9).
- Flashcards: 1 and 2 correct; 3 correct in its frequencies, but "between two masses" and "centre/ends" follow the wrong geometry (finding 1).
- calcs file (info): the page-own example entries `ex-s-big` ... `ex-second-row` carry `source: {cite: reading1, at: 'p. 3'/'p. 4'}`, although the numbers are the page's own (`origin: page-own` is set correctly). Harmless; the `source` could point to the method (notes p. 3) only.

## Coverage and order
- The page follows the lecture's order: motivation and demonstrations, setup, normal mode definition, guessed modes, counting constants, $3m$ variation, equations of motion, matrices, complex trial, eigenvalue condition, determinant, result, next lecture. The two oscillating modes are listed in the notes' order (2m still first) rather than the lecture's (2m against both first); the bracket about labels makes that clear. Fine.
- Omissions (info): Lee's limiting argument for the zero mode (an imagined spring $k' \to 0$ to a wall, $A\sin\omega_C t \approx A\omega_C t = vt$, transcript p. 6); the student's suggestion that there is no third mode (p. 6); the notes' vector form $X = B(1,-1,-1)^T\cos(\omega_Bt+\phi_B)$ and "this is just the simple harmonic oscillator" (notes p. 4); the notes' full $l_0$ calculation (pp. 4-5) is only mentioned, which is acceptable as it reaches the same result. The review of Lecture 3 (transcript pp. 1-2) is reduced to one sentence; fine.
- Additions: the worked example (original).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes (all pages viewed), the transcript (all pages searched) or the OCW lecture page. Course licence CC BY-NC-SA 4.0.
- No figures reused; no OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("super, super complicated", "how each component talks to the other components", "I didn't even solve the differential equation", "the math also knows physics").
- Worked example: neither the notes nor the transcript contain a wall - $m$ - $2m$ system; it is original with respect to the Lecture 4 sources. Problem sets were not read, so a coincidence with a problem-set exercise is **not verified** (the setup is a standard textbook type).

## Notes
- No cosmology callout and no 8.286 `leadsTo`; acceptable for this lecture. `leadsTo` 8.03 Lecture 5 matches `_course.json` ("Beat Phenomena") and the transcript's closing remark (p. 13).
- Prerequisites `driven-oscillators-resonance` and `eigenvalues-and-eigenvectors` exist; the inline links `/courses/8-03/driven-oscillators-resonance` and `/courses/18-06/eigenvalues-and-eigenvectors` point to existing pages.
- `source.url` and both readings match the OCW lecture page and the syllabus entry in `content/year-2/8.03/_course.json`.
- No em dashes found in the page.

## Resolution (2026-11-16, by the page author)

1. The system is now described as MIT's: the 2m on the left, joined by two springs to two masses m on its right, one above the other. All "centre", "outer masses" and "ends" wording is replaced by "the 2m" and "the small masses", in the body, summary, flashcard 3 and quiz 2 ("Three masses coupled by springs, moving in one dimension").
2. With the right geometry the sign check ("increasing x₁ compresses the springs") is correct as written.
3. The first objection is now attributed to Lee ("to wake you up"), the second to a student.
4. The label bracket now names each mode by its frequency or shape.
5. "super, super complicated", "I didn't even solve the differential equation" and "the math also knows physics" now cite the transcript (with the notes' wording or content cited separately).
6. Added Lee's k′ → 0 limit for the zero-frequency mode and the notes' vector form of mode B.
7. No change.

Status set to reviewed.
