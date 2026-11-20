---
page: content/year-1/18.01/trig-integrals.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-27-trig-integrals/ (read: local copy lec.html, title "Lecture 27: Trig Integrals"; transcript link Bv9kVDcj7yo.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec26/ (read: local copy n.html and notes.pdf/notes.txt, "Lecture 26: Trigonometric Integrals and Substitution"; OCW cover + printed pp. 1-5 = PDF pp. 2-6, footers checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/Bv9kVDcj7yo.pdf (read: local copy transcript.pdf, page-split text tp.txt, 10 PDF pages, header "ocw-18-01-f07-lec27")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/lecture-notes/ (read: session 26 = trig integrals and substitution, 27 = Exam 3 (no notes), 28 = integration by inverse substitution; completing the square)
  - content/year-1/18.01/_course.json (read: Lecture 25 = Exam 3 Review, 27 = Trig Integrals, 28 = Inverse Substitution; no Lecture 26 entry)
  - content/year-4/8.286/closed-universe-cycloid.mdx (read: 8.286 Lecture 9, completing the square and x = −α cos θ)
  - calcs/18.01/trig-integrals.yaml (read; `npm run calc:test -- -k trig`: 12 passed)
  - data/symbols.json (read: the 15 meanings scoped to `trig-integrals`)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Trigonometric integrals and substitution

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-5 (PDF page − 1). Every page citation on the page was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph: "the numbering is shifted by one because the exam took a session (notes, p. 5)" | Notes p. 5: "We'll pick up from here next lecture (Lecture 28 since Lecture 27 is Exam 3)". In the notes' calendar the exam comes **after** this session (26 trig, 27 exam, 28 inverse substitution), so it does not explain why the video is numbered 27. MIT gives no reason for the shift (the video was recorded in a different term: transcript header "ocw-18-01-f07-lec27"). | States a cause, cited to notes p. 5, which the notes do not support. | Say only what the sources show, e.g. "The notes for it are those of session 26 (the notes number it Lecture 26; in their calendar Lecture 27 is Exam 3, notes p. 5)." |
| 2 | warning | Worked example step (c): "as the picture says it must be" | - | The page has no picture of the piece of the disk (the lecture's board drawing is not reproduced, and the only plot is of sin²x cos²x). | Drop "as the picture says it must be", or say why directly: "the piece lies inside the rectangle 0 ≤ x ≤ 2, 0 ≤ y ≤ 1, since x = √(4 − y²) ≤ 2". (Optionally add a generated diagram of the region.) |
| 3 | warning | data/symbols.json, meaning of `x` scoped to this page | - | "The variable of integration (an angle, in radians)". In the area problem $x = \sqrt{a^2 - y^2}$ is a horizontal length (strip length), not an angle; in the cosmology callout $x$ is $\tilde a - \alpha$, a length. | Widen the page-scoped meaning: "The variable of integration (an angle, in radians); in the area problem, the horizontal distance √(a² − y²); in the cosmology note, ã − α." |
| 4 | info | Formula "The substitution y = a sin θ", prose cite "(p. 8; notes, pp. 4–5)" | Notes p. 4 only introduces Example 4 (graph of the circle, area of the half disk); the substitution $t = a\sin u$, $dt = a\cos u\,du$ is on notes p. 5. | pp. 4-5. | Optional: "notes, p. 5". Not wrong, since Example 4 starts on p. 4. |
| 5 | info | Trigonometric substitution | Transcript p. 9: "You could also make a substitution y = a cos(theta) … the result would come out to exactly the same in the end." | Not mentioned. | Optional one sentence; it would also prepare the callout's "with a cosine instead of a sine". |
| 6 | info | Trigonometric substitution | The notes' Example 4 (pp. 4-5) is a different set-up: the half-disk area $\int_{-a}^a\sqrt{a^2 - x^2}\,dx = \pi a^2/2$, then $\int_0^x\sqrt{a^2 - t^2}\,dt$ with $t = a\sin u$ and a change of limits, stopping before the final simplification. | Follows the transcript's horizontal-strip problem only; the notes' version is not mentioned. | Fine as is (the page follows the video lecture). Optional: note that the notes do the same integral with a change of limits. |
| 7 | info | Area problem: "cut out the piece in the first quadrant" | Transcript p. 7 does not say "first quadrant" in words; the board drawing, the limits 0 to b and $x = \sqrt{a^2 - y^2} \ge 0$ imply it. | "first quadrant". | Correct reading of the set-up; no change needed. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt / notes.txt:
  - "Half-angle formulas", reading2 pp. 1-2: $\cos 2\theta = 2\cos^2\theta - 1$ on p. 1, solved for $\cos^2\theta$ and the $\sin^2\theta$ form on p. 2; also notes p. 2 (Method B). Correct.
  - "One factor of cosine", reading2 p. 3: $u = \sin x$, $du = \cos x\,dx$, $u^{n+1}/(n+1) + c$, back substitution, all p. 3 (set-up of $m = 1$ starts p. 2, as the prose says "pp. 2–3"). Correct.
  - "An odd power of sine", reading2 pp. 3-4: the identity step is p. 3, $u = \cos x$, $du = -\sin x\,dx$ and the answer $-\cos^3x/3 + \cos^5x/5 + c$ (after a student caught the sign) p. 4; same as notes Example 1, p. 1. Checked: $\int(1 - u^2)u^2(-du) = -\int(u^2 - u^4)du = -u^3/3 + u^5/5$. Correct.
  - "Cosine squared", reading2 p. 5: $x/2 + \sin 2x/4$, the 2 from the chain rule and the non-trigonometric $x/2$, all p. 5. Correct.
  - "Sine squared times cosine squared", reading2 p. 6: $(1 - \cos^2 2x)/4 = 1/8 - \cos 4x/8$ and $x/8 - \sin 4x/32$ are both on p. 6 (side work starts p. 5). Checked: $\tfrac14 - \tfrac18(1 + \cos 4x) = \tfrac18 - \tfrac18\cos 4x$. Correct; notes Example 3, p. 2, agrees.
  - "Integral of the secant", reading1 pp. 3-4: result stated at the foot of notes p. 3, the "advanced guessing" derivation on p. 4. Correct. The page writes the denominator $\sec x + \tan x$ (notes: $\tan x + \sec x$); same thing.
  - "Area of the piece", reading2 p. 7. Correct.
  - "The substitution y = a sin θ", reading2 p. 8: $\sqrt{a^2 - y^2} = a\cos\theta$, $dy = a\cos\theta\,d\theta$, $a^2\int\cos^2\theta\,d\theta$ and the reference back to the cosine-squared result, all p. 8. Correct (see finding 4 for the notes pages).
  - "Integral of the square root", reading2 p. 9: arcsin, $a\sin\theta = y$, $a\cos\theta = \sqrt{a^2 - y^2}$, p. 9 (the $\sin 2\theta = 2\sin\theta\cos\theta$ step is pp. 8-9, as the prose says). Checked by differentiation: $\tfrac{a^2}{2\sqrt{a^2-y^2}} + \tfrac{\sqrt{a^2-y^2}}{2} - \tfrac{y^2}{2\sqrt{a^2-y^2}} = \sqrt{a^2 - y^2}$. Correct.
  - "The area, read geometrically", reading2 pp. 9-10: evaluation at $b$ and 0 and $\theta_0 = \arcsin(b/a)$ on p. 9, the form with $\theta_0$ straddles pp. 9-10. Correct; sector and triangle interpretation p. 10.
- Prose citations: substitute lecturer and topics (p. 1; the lecturer is Professor Miller); unit circle, $\sin^2\theta$ convention, double-angle formulas (p. 1); "remove squares" at the cost of $2\theta$ (p. 2); $\int\cos$, $\int\sin$ (p. 2; notes p. 1); family with non-negative integer exponents, Fourier series, easy case (p. 2; notes Method A, p. 1); back substitution (p. 3); $\sin^2 x = 1 - \cos^2 x$ (p. 3); differentiate to check (p. 4); $\int\sin^3x\,dx$ (p. 4); notes Example 2, $\cos^3 x$ (p. 1); harder case and why $1 - \sin^2$ does not help (p. 5); $\int\sin^2 x\,dx$ (notes p. 2); side work (pp. 5-6); shortcut via $\sin 2x$ (pp. 6-7; notes Example 3, p. 2); "alternate the two procedures" (transcript p. 6; notes p. 2); sec/tan family, $\sec^2 x = 1 + \tan^2 x$, derivatives (notes p. 2, where they appear as $\int\sec^2 x = \tan x$ and $\int\sec x\tan x = \sec x$); $\int\tan x$, $\sec^4 x$, $\tan^3 x\sec x$ (notes p. 3); "knowing the answer ahead of time" (notes p. 4); n odd, m even left for later (notes p. 4); vertical vs horizontal strips (p. 7); polar coordinates (pp. 7-8); "constant minus a square, think trigonometry" (p. 9). All match.
- Secant/tangent results recomputed: $\int\tan x = -\ln|\cos x|$; $\int\sec^4 x = \int(1 + u^2)du = \tan x + \tan^3 x/3$; $\int\tan^3 x\sec x = \int(u^2 - 1)du = \sec^3 x/3 - \sec x$; $\tfrac{d}{dx}\ln|\sec x + \tan x| = \sec x$. All correct and as in the notes.
- Transcript slip, $\int\sin^3 x\,dx$ (p. 4): the transcript reads "-u + u^3 / 3 plus a constant. And then I back substitute and get cos x + cos^3 x / 3", i.e. the minus on $\cos x$ is lost in the last step. The page's bracket is accurate; $\tfrac{d}{dx}(-\cos x + \cos^3 x/3) = \sin x - \cos^2 x\sin x = \sin^3 x$. Whether the slip was on the board or only in the transcription cannot be told from the transcript (uncertain); the page says "the transcript drops", which is accurate either way. (The p. 4 transcript also garbles the previous answer as "- -cos^3(x) / 3", but the lecturer's words make the result $-\cos^3 x/3 + \cos^5 x/5$; the page has that.)
- Absolute-value remark: correct. The notes write $-\ln(u)$, $-\ln(\cos x)$ (p. 3) and $\ln(u)$, $\ln(\tan x + \sec x)$ (pp. 3-4) without absolute values; the page adds them and says so.
- Plot: $\sin^2 x\cos^2 x$ has maximum 1/4 at π/4, inside the range [0, 0.3]; average over [0, π] is 1/8; area π/8. Caption correct.
- Worked example: (a) $0 - (-1 + 1/3) = 2/3 \approx 0.667$; (b) $\pi/8 \approx 0.3927$, rounds to 0.393; (c) $\theta_0 = \pi/6$, $2\cdot\pi/6 = \pi/3 \approx 1.0472$, $\sqrt3/2 \approx 0.8660$, total 1.9132, rounds to 1.913; numerically $\int_0^1\sqrt{4 - y^2}\,dy = 1.9132$. Less than the rectangle area 2: correct (see finding 2 for the wording). All three examples are the page's own (MIT does $\int\sin^3 x$ and $\int\sin^2 x\cos^2 x$ only as indefinite integrals, and the area with general $a$, $b$).
- Quiz 1: index 0, $\sin^5 x/5 + c$. Correct; explanation right.
- Quiz 2: index 2, half-angle formulas. Correct.
- Quiz 3: index 1, 2/3. Correct (same as worked example (a); harmless repetition).
- Quiz 4: index 0, $y = 3\sin\theta$: $9 - 9\sin^2\theta = 9\cos^2\theta$, root $3\cos\theta$ (for $\cos\theta \ge 0$), $dy = 3\cos\theta\,d\theta$. Correct.
- Flashcards: all four correct (half-angle, odd-exponent method, $x/2 + \sin 2x/4$, the square-root integral).
- Calcs file: 12 entries, all pass, agreeing with the page (half-angle, $\sin^3\cos^2$, $\sin^3$, $\cos^2$, $\sin^2\cos^2$, secant, square-root integral, examples (a), (b), (c), sector, session number). Not covered (minor): the triangle $\sqrt3/2 \approx 0.866$ on its own, $\int\sin^2 x$, $\int\cos^3 x$, $\int\tan x$, $\int\sec^4 x$, $\int\tan^3 x\sec x$, and the $\sin^n x\cos x$ formula.
- No em dashes on the page.

## Coverage and order
- Transcript order: trig identities and half-angle formula (pp. 1-2); basic integrals (p. 2); easy case: $\sin^n x\cos x$, $\sin^3 x\cos^2 x$, $\sin^3 x$ (pp. 2-4); harder case: $\cos^2 x$, $\sin^2 x\cos^2 x$, shortcut (pp. 5-7); trig substitution: area of the piece of a disk, $y = a\sin\theta$, back substitution, definite integral, sector + triangle (pp. 7-10).
- Notes order: Method A (Examples 1-2), Method B ($\cos^2$, $\sin^2$, Example 3 and shortcut), sec/tan family ($\tan$, $\sec^4$, $\tan^3\sec$, $\sec$), trig substitution (Example 4).
- The page follows the transcript's order and inserts the notes' sec/tan family where the notes put it (between the even case and the trig substitution). It is flagged as notes-only in the opening ("then secants and tangents (in the notes)") and in the section's first sentence, and every sec/tan statement is cited to the notes (reading1), never to the transcript. Presentation and citation are correct.
- Omitted, all minor: the student exchange on the sign of the integral of cosine (p. 5), the $y = a\cos\theta$ alternative (finding 5), the notes' half-disk area $\pi a^2/2$ and their change-of-limits version (finding 6).
- Added by the page: the plot, the worked example, the quiz and flashcards, the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the lecture page, notes page, notes PDF or transcript (grep of all local copies). The page reuses no figure; the plot is generated from a formula.
- Text is rewritten. Short phrases such as "knowing the answer ahead of time" (in quotation marks, notes p. 4), "easy case", "harder case", "back substitute" are standard or attributed. No paragraph copied.
- Worked examples are original (own numbers; see above).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo: 18.01 Lecture 28 exists in `_course.json` ("Inverse Substitution", resources/lecture-28-inverse-substitution/), and the OCW notes table names session 28 "Integration by inverse substitution; completing the square", so the "why" is accurate. 8.286 Lecture 9 is `closed-universe-cycloid`; its "why" matches that page.
- Cosmology callout checked against content/year-4/8.286/closed-universe-cycloid.mdx: integral $\int\tilde a\,d\tilde a/\sqrt{2\alpha\tilde a - \tilde a^2}$ (slide 3 there), completing the square to $\alpha^2 - x^2$ with $x = \tilde a - \alpha$, substitution $x = -\alpha\cos\theta$ ("a cosine instead of a sine" is fair; the minus sign is omitted, which is fine at this level), result $ct = \alpha(\theta - \sin\theta)$, $a/\sqrt k = \alpha(1 - \cos\theta)$, a cycloid. All consistent; "filled with matter" is right (Guth's matter-dominated closed universe).
- The OCW video is from a later term than the Fall 2006 notes (transcript header "f07"); this is how the two numberings came apart (see finding 1). The lecturer is a substitute (Professor Miller), correctly described without a name.
- Symbols: the 15 page-scoped meanings were read; apart from finding 3 they fit the page (`a`, `c`, `k`, `t`, `alpha` carry their cosmology-callout meanings; `theta-0` in radians).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the opening now says only that the notes number this lecture 26 and that in their calendar Lecture 27 is the third exam (notes, p. 5); no reason for the shift is given.
- **Warning 2:** example (c) now explains the check directly: each strip has length √(4 − y²) ≤ 2.
- **Warning 3:** the page-scoped meaning of `x` now covers the angle, the strip length and the cosmology note's shifted scale factor.
- Info: the substitution now cites notes p. 5 only; the page mentions that y = a cos θ works as well (transcript, p. 9). The other info items are left as they are.
